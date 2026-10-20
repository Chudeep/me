'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { contactLinks, navItems, surfaces } from '../content';
import { ArrowUpRight, Logo } from './ui';

function isExternal(link) {
  return link.external ?? /^https?:\/\//.test(link.href);
}

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const [surface, setSurface] = useState('paper');
  const activeSurface = surfaces.find((item) => item.id === surface) ?? surfaces[0];

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('surface');
    const stored = window.localStorage.getItem('field-notes-surface');
    const next = [requested, stored].find((value) =>
      surfaces.some((item) => item.id === value),
    );

    if (next) {
      setSurface(next);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('field-notes-surface', surface);
  }, [surface]);

  return (
    <div
      data-paper={surface}
      className="min-h-screen bg-[var(--paper)] text-[var(--ink)] transition-colors duration-300"
    >
      <div aria-hidden="true" className="grain" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[70] focus:bg-[var(--ink)] focus:px-3 focus:py-2 focus:text-[0.65rem] focus:uppercase focus:tracking-[0.14em] focus:text-[var(--paper)]"
      >
        Skip to content
      </a>

      <header className="topbar sticky top-0 z-40">
        <div className="shell flex h-16 items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Logo className="h-5 w-5 text-[var(--petrol)]" />
            <span className="label label-strong text-[0.68rem] tracking-[0.16em]">
              Chudeep Shankar
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <span className="hidden h-4 w-px bg-[var(--line-strong)] md:block" />

            <div className="flex items-center gap-2" role="group" aria-label="Surface colour">
              <span className="label hidden lg:inline">Surface</span>
              {surfaces.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSurface(item.id)}
                  aria-pressed={surface === item.id}
                  aria-label={`${item.label} surface`}
                  className="surface-btn"
                  style={{ backgroundColor: item.color }}
                />
              ))}
              <span className="label hidden w-9 sm:inline">{activeSurface.label}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--line)] md:hidden">
          <nav className="shell flex gap-4 overflow-x-auto py-2.5" aria-label="Primary mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link shrink-0"
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.shortLabel ?? item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {children}

      <footer className="mt-24 border-t border-[var(--line-strong)] pb-16 pt-12 md:mt-32">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
            <div>
              <p className="label">Colophon</p>
              <p className="serif mt-3 max-w-lg text-2xl leading-tight md:text-3xl">
                A public notebook, kept in the open.
              </p>
              <p className="mt-3 max-w-md text-xs leading-relaxed text-[var(--muted)]">
                Set in Newsreader and IBM Plex. Built with Next.js and Tailwind CSS. Written and
                maintained by Chudeep Shankar. Last updated October 2026.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Logo className="h-3.5 w-3.5 text-[var(--petrol)]" />
                <span className="label text-[0.54rem]">Field notes / Vol. 01</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="label label-strong">Sections</p>
                <ul className="mt-3 space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="label link-underline text-[0.6rem]"
                        aria-current={pathname === item.href ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="label label-strong">Elsewhere</p>
                <ul className="mt-3 space-y-2">
                  {contactLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="label link-underline text-[0.6rem]"
                        target={isExternal(link) ? '_blank' : undefined}
                        rel={isExternal(link) ? 'noreferrer noopener' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[var(--line)] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="label">© 2026 Chudeep Shankar</span>
            <Link href="/about#contact" className="label link-underline">
              Say hello
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
