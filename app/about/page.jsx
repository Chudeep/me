import { contactLinks, education, experience, recognition } from '../content';
import {
  ArrowUpRight,
  CropMarks,
  PageIntro,
  RegistrationMark,
  SectionHead,
} from '../components/ui';

export const metadata = {
  title: 'About',
  description:
    'About Chudeep Shankar — lead software engineer at Yubi in Chennai. Work, education, awards, and an open invitation to share a thought.',
};

function isExternal(link) {
  return link.external ?? /^https?:\/\//.test(link.href);
}

const coordinates = [
  { label: 'Based in', value: 'Chennai, India' },
  { label: 'Currently', value: 'Leading YubiOS at Yubi' },
  { label: 'Education', value: 'SSN College of Engineering' },
];

export default function AboutPage() {
  return (
    <PageIntro
      number="01"
      label="About"
      title="The longer version."
      meta="Based in Chennai"
      note="Lead software engineer, notebook keeper, and a speck in pursuit of interestingness."
    >
      <div className="space-y-20 md:space-y-24">
        <section id="context" className="scroll-mt-28">
          <h2 className="label label-strong">A little context</h2>

          <div className="mt-4 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="max-w-xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
                I’m Chudeep — a lead software engineer at Yubi in Chennai. I work on YubiOS,
                distributed systems, and AI agents, and I care about technology that has a
                positive impact on people’s lives.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
                Before Yubi, I worked on lending platforms at Northern Arc, a web rewrite at
                Memorang, and medical-code automation at Access Healthcare. I studied computer
                science and engineering at SSN College of Engineering. Away from work, I’m usually
                reading, quizzing, picking apart a system, or following a side quest.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
                This notebook is where I keep the interesting parts. The best part is meeting other
                curious people, so if you’re building something useful, strange, or both, the door
                is open.
              </p>
            </div>

            <aside className="paper-card relative min-w-0 p-4 sm:p-6">
              <CropMarks />
              <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-3">
                <span className="label">Fig. 02 / Coordinates</span>
                <RegistrationMark className="h-3.5 w-3.5 shrink-0 text-[var(--petrol)]" />
              </div>

              <dl className="mt-2">
                {coordinates.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between gap-6 border-b border-[var(--line)] py-3 last:border-0"
                  >
                    <dt className="label">{item.label}</dt>
                    <dd className="serif max-w-[16rem] text-right text-lg italic leading-snug">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="annotation mt-4">A speck with coordinates.</p>
            </aside>
          </div>
        </section>

        <section id="work" className="scroll-mt-28">
          <SectionHead
            index="A"
            label="Work"
            title="Where I’ve worked."
            meta={`${experience.length.toString().padStart(2, '0')} roles`}
            note="A short log of the systems and teams so far."
          />

          <div className="mt-2">
            {experience.map((item) => {
              const Row = item.href ? 'a' : 'div';

              return (
                <Row
                  key={item.company}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer noopener' : undefined}
                  className="index-row group -mx-3 grid grid-cols-[2.5rem_1fr_auto] gap-3 px-3 py-6 sm:-mx-4 sm:grid-cols-[3.5rem_1fr_7rem_auto] sm:gap-6 sm:px-4"
                >
                  <span className="label pt-1 text-[var(--petrol)]">{item.index}</span>

                  <div>
                    <h3 className="serif title-hover text-2xl leading-tight sm:text-[1.7rem]">
                      {item.company}
                    </h3>
                    <p className="label mt-2 text-[var(--petrol)]">{item.role}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                      {item.stack.map((entry, index) => (
                        <span key={entry} className="flex items-center gap-2">
                          <span className="label text-[0.6rem]">{entry}</span>
                          {index < item.stack.length - 1 ? (
                            <span className="text-[var(--line-strong)]">/</span>
                          ) : null}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="label hidden pt-1 sm:block">{item.year}</span>
                  {item.href ? (
                    <ArrowUpRight className="arrow-nudge mt-1 h-4 w-4 text-[var(--petrol)]" />
                  ) : (
                    <span aria-hidden="true" className="mt-1 h-4 w-4" />
                  )}
                </Row>
              );
            })}
          </div>

          <p className="annotation mt-6">The better version is a conversation.</p>
        </section>

        <section id="field-log" className="scroll-mt-28">
          <SectionHead
            index="B"
            label="Field log"
            title="The longer log."
            meta="Updated Oct 2026"
            note="Education, awards, and a few coordinates that led here."
          />

          <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-14">
            <div className="border-t border-[var(--line-strong)] pt-4">
              <div className="flex items-baseline justify-between">
                <h3 className="label label-strong">Education</h3>
                <span className="label">{education.length.toString().padStart(2, '0')}</span>
              </div>

              <ul className="mt-3">
                {education.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start justify-between gap-4 border-b border-[var(--line)] py-3 last:border-0"
                  >
                    <div>
                      <p className="serif text-lg italic leading-snug">{item.title}</p>
                      <p className="mt-0.5 text-xs text-[var(--muted)]">{item.detail}</p>
                    </div>
                    <span className="label flex shrink-0 items-center gap-1.5 pt-1 text-[0.56rem]">
                      <span className="status-dot" />
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--line-strong)] pt-4">
              <div className="flex items-baseline justify-between">
                <h3 className="label label-strong">Awards</h3>
                <span className="label">{recognition.length.toString().padStart(2, '0')}</span>
              </div>

              <ul className="mt-3">
                {recognition.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start justify-between gap-4 border-b border-[var(--line)] py-3 last:border-0"
                  >
                    <div>
                      <p className="serif text-lg italic leading-snug">{item.title}</p>
                      <p className="mt-0.5 text-xs text-[var(--muted)]">{item.detail}</p>
                    </div>
                    <span className="label flex shrink-0 items-center gap-1.5 pt-1 text-[0.56rem]">
                      <span className="status-dot" />
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="annotation mt-6">
            Also: school house captain, Kho-kho captain, college robotics team, quiz club, and eco
            club representative.
          </p>
        </section>

        <section id="contact" className="scroll-mt-28">
          <SectionHead
            index="C"
            label="Contact"
            title="Share a thought."
            meta="Open to a good conversation"
            note="For useful, strange, or both."
          />

          <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="max-w-xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
                The best part of keeping this notebook is meeting other curious people. If you’re
                building something useful, strange, or both, I’d like to hear about it. Distributed
                systems, AI tools, notebooks, and good questions are all fair openings.
              </p>

              <a
                href="mailto:chudeep@yahoo.in"
                className="serif mt-8 inline-block border-b border-[var(--petrol)] pb-1 text-[clamp(1.4rem,3.5vw,2.4rem)] italic text-[var(--petrol)] transition-colors hover:bg-[var(--wash)]"
              >
                chudeep@yahoo.in
              </a>
              <p className="annotation mt-4">Usually the fastest way to reach me.</p>
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-[var(--line-strong)] pb-3">
                <h3 className="label label-strong">Elsewhere</h3>
                <RegistrationMark className="h-3.5 w-3.5 text-[var(--petrol)]" />
              </div>

              <ul>
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isExternal(link) ? '_blank' : undefined}
                      rel={isExternal(link) ? 'noreferrer noopener' : undefined}
                      className="group flex items-center justify-between gap-4 border-b border-[var(--line)] py-4"
                    >
                      <span className="serif text-xl transition-colors group-hover:text-[var(--petrol)]">
                        {link.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--petrol)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageIntro>
  );
}
