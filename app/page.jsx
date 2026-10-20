import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CropMarks,
  InterestMap,
  Rail,
  RegistrationMark,
} from './components/ui';

export default function HomePage() {
  return (
    <main id="main">
      <section id="top" className="pt-10 md:pt-16">
        <div className="shell">
          <div className="flex items-center justify-between border-b border-[var(--line-strong)] pb-3">
            <span className="label">
              <span className="hidden sm:inline">Chudeep Shankar / </span>Personal notebook
            </span>
            <span className="label">2026 · Vol. 01</span>
          </div>

          <div className="section-grid mt-10 md:mt-16">
            <Rail number="00" label="Cover" />

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div className="rise-load min-w-0">
                <p className="label label-strong">
                  Chudeep Shankar — Lead software engineer at Yubi
                </p>
                <h1 className="display mt-5 text-[clamp(2.8rem,5.8vw,5rem)]">
                  A curious speck
                  <br />
                  in pursuit of
                  <br />
                  <span className="italic text-[var(--petrol)]">interestingness.</span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
                  I’m currently exploring distributed systems and tinkering with AI agents at Yubi.
                  I care about technology that has a positive impact on people’s lives. I’m usually
                  reading, learning something new, or—lately—falling down a board-game rabbit hole.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <Link className="btn-ink" href="/about">
                    The longer version
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link className="link-underline label text-[0.68rem]" href="/about#contact">
                    Say hello
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="rise-load rise-load-2 relative min-w-0">
                <div className="paper-card min-w-0 p-4 sm:p-6">
                  <CropMarks />
                  <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-3">
                    <span className="label">Fig. 01 / Where the time goes</span>
                    <RegistrationMark className="h-3.5 w-3.5 shrink-0 text-[var(--petrol)]" />
                  </div>
                  <InterestMap />
                </div>
                <p className="annotation mt-3 text-right">
                  the interesting parts are between the lines
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-2 border-y border-[var(--line)] py-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="label">Currently</span>
            <p className="mono text-[10px] leading-relaxed text-[var(--ink-soft)] sm:text-[11px]">
              Leading work on YubiOS at Yubi · based in Chennai · usually reading, quizzing, or
              picking apart a system
            </p>
            <RegistrationMark className="hidden h-4 w-4 text-[var(--petrol)] sm:block" />
          </div>
        </div>
      </section>
    </main>
  );
}
