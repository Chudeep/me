import { CropMarks, PageIntro, RegistrationMark } from '../components/ui';

export const metadata = {
  title: 'Wunderkammern',
  description:
    'A cabinet of curiosities for essays, recommendations, and notes. Coming soon.',
};

const drawers = [
  {
    index: '01',
    title: 'Essays',
    description: 'Longer pieces about systems, tools, and the shape of the work.',
    status: 'IN PREPARATION',
  },
  {
    index: '02',
    title: 'Recommendations',
    description: 'Books, films, games, and other things worth passing on.',
    status: 'IN PREPARATION',
  },
  {
    index: '03',
    title: 'Notes',
    description: 'Short observations that do not need an essay.',
    status: 'IN PREPARATION',
  },
];

export default function WunderkammernPage() {
  return (
    <PageIntro
      number="03"
      label="Wunderkammern"
      title="A cabinet of curiosities."
      meta="Coming soon"
      note="Essays, recommendations, and notes from the margins."
    >
      <div className="paper-card p-5 sm:p-8">
        <CropMarks />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-3">
              <span className="label">Cabinet / notice</span>
              <RegistrationMark className="h-3.5 w-3.5 text-[var(--petrol)]" />
            </div>

            <p className="annotation mt-6 text-sm">coming soon</p>
            <h2 className="serif mt-2 text-[clamp(2rem,4vw,3rem)] leading-tight">
              The drawers are being labelled.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              Wunderkammern is where the non-work things will live: longer essays, things worth
              recommending, and notes that never became either. It will open when there is
              something worth keeping.
            </p>

            <span className="label mt-6 inline-flex border border-[var(--line-strong)] px-3 py-2 text-[0.56rem]">
              In preparation / 2026
            </span>
          </div>

          <div>
            {drawers.map((drawer) => (
              <div
                key={drawer.index}
                className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-[var(--line)] py-5 last:border-b sm:grid-cols-[3rem_1fr_auto] sm:gap-5"
              >
                <span className="label pt-1 text-[var(--petrol)]">{drawer.index}</span>
                <div>
                  <h3 className="serif text-2xl leading-tight">{drawer.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                    {drawer.description}
                  </p>
                </div>
                <span className="label col-start-2 flex items-center gap-1.5 pt-1 text-[0.54rem] sm:col-start-3">
                  <span className="status-dot" />
                  {drawer.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="annotation mt-6">
        No entries yet. The first drawer opens when it has something worth showing.
      </p>
    </PageIntro>
  );
}
