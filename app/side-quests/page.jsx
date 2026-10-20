import { sideQuests } from '../content';
import { ArrowUpRight, CropMarks, PageIntro } from '../components/ui';

export const metadata = {
  title: 'Side quests',
  description:
    'Projects, experiments, and half-finished ideas: Whatsinthebox, medical assistants, social networks, computer vision, and this website.',
};

export default function SideQuestsPage() {
  return (
    <PageIntro
      number="02"
      label="Side quests"
      title="Experiments that escaped the workbench."
      meta={`${sideQuests.length.toString().padStart(2, '0')} files`}
      note="Projects, experiments, and half-finished ideas. Kept as they were, not cleaned up."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {sideQuests.map((quest) => (
          <article key={quest.id} className="paper-card paper-card-tint flex h-full flex-col p-5">
            <CropMarks />

            <div className="flex items-center justify-between gap-3">
              <span className="label text-[var(--petrol)]">{quest.id}</span>
              <span className="label flex items-center gap-1.5 text-[0.56rem]">
                <span className="status-dot" />
                {quest.status}
              </span>
            </div>

            <div className="mt-7 flex items-start justify-between gap-4">
              <h2 className="serif text-2xl leading-tight">{quest.title}</h2>
              {quest.href ? (
                <a
                  href={quest.href}
                  target={quest.external ? '_blank' : undefined}
                  rel={quest.external ? 'noreferrer noopener' : undefined}
                  aria-label={`Open ${quest.title}`}
                  className="mt-1 shrink-0 text-[var(--petrol)] transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-0.5"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>

            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{quest.body}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
              {quest.stack.map((entry, index) => (
                <span key={entry} className="flex items-center gap-2">
                  <span className="label text-[0.58rem]">{entry}</span>
                  {index < quest.stack.length - 1 ? (
                    <span className="text-[var(--line-strong)]">/</span>
                  ) : null}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--line)] pt-3">
              <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`tick ${index < quest.progress ? 'tick-on' : ''}`}
                  />
                ))}
              </div>
              <span className="label text-[0.54rem]">{quest.last}</span>
            </div>
          </article>
        ))}
      </div>

      <p className="annotation mt-6">
        The archive is deliberately uneven. Some things shipped; some taught me enough and stopped.
      </p>
    </PageIntro>
  );
}
