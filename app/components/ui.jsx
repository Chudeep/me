export function RegistrationMark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M12 1.5v6M12 16.5v6M1.5 12h6M16.5 12h6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path
        d="M22.99 10.15A9.5 9.5 0 1 0 22.99 21.85"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="butt"
      />
      <circle cx="27.6" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function ArrowUpRight({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function ArrowRight({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 12h15" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function CropMarks() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="crop-corner crop-tl" />
      <span className="crop-corner crop-tr" />
      <span className="crop-corner crop-bl" />
      <span className="crop-corner crop-br" />
    </div>
  );
}

export function Rail({ number, label }) {
  return (
    <aside className="rail">
      <span className="rail-num">{number}</span>
      <span className="rail-label">{label}</span>
      <span className="rail-line" />
      <RegistrationMark className="h-3 w-3 text-[var(--line-strong)]" />
    </aside>
  );
}

export function SectionHead({ index, label, title, meta, note }) {
  return (
    <div className="border-b border-[var(--line-strong)] pb-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label">
            {index} / {label}
          </p>
          <h2 className="serif mt-2 text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.02em]">
            {title}
          </h2>
        </div>
        {meta ? <span className="label">{meta}</span> : null}
      </div>
      {note ? <p className="annotation mt-3 max-w-xl text-sm">{note}</p> : null}
    </div>
  );
}

export function PageIntro({ number, label, title, meta, note, children }) {
  return (
    <main id="main">
      <section className="pt-10 md:pt-16">
        <div className="shell">
          <div className="flex items-center justify-between border-b border-[var(--line-strong)] pb-3">
            <span className="label">
              <span className="hidden sm:inline">Field notes / </span>
              {label}
            </span>
            <span className="label">2026 · Vol. 01</span>
          </div>

          <div className="section-grid mt-10 md:mt-14">
            <Rail number={number} label={label} />

            <div className="rise">
              <div className="border-b border-[var(--line-strong)] pb-4">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="label">
                      {number} / {label}
                    </p>
                    <h1 className="serif mt-2 text-[clamp(2.6rem,5vw,4.2rem)] leading-none tracking-[-0.02em]">
                      {title}
                    </h1>
                  </div>
                  {meta ? <span className="label">{meta}</span> : null}
                </div>
                {note ? <p className="annotation mt-3 max-w-xl text-sm">{note}</p> : null}
              </div>

              <div className="mt-8">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function InterestMap() {
  return (
    <svg
      viewBox="0 0 440 330"
      className="mt-4 w-full max-w-full"
      role="img"
      aria-label="A hand-drawn map connecting big bang, edu-tech, fintech, distributed systems, AI, and space exploration over time."
    >
      <defs>
        <pattern id="field-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M22 0H0V22" fill="none" stroke="var(--line)" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="440" height="330" fill="url(#field-grid)" opacity="0.55" />

      <line x1="28" y1="310" x2="420" y2="310" stroke="var(--line-strong)" strokeWidth="0.75" />
      <line x1="28" y1="310" x2="28" y2="40" stroke="var(--line-strong)" strokeWidth="0.75" />

      <path
        d="M40 272 C 88 262, 96 200, 136 200 S 180 246, 208 204 S 250 118, 300 132 S 350 184, 392 118"
        fill="none"
        stroke="var(--petrol)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle cx="40" cy="272" r="3.5" fill="var(--paper)" stroke="var(--petrol)" />
      <circle cx="136" cy="200" r="3.5" fill="var(--paper)" stroke="var(--petrol)" />
      <circle cx="208" cy="204" r="3.5" fill="var(--paper)" stroke="var(--petrol)" />
      <circle cx="300" cy="132" r="3.5" fill="var(--paper)" stroke="var(--petrol)" />
      <circle cx="365" cy="165" r="3.5" fill="var(--paper)" stroke="var(--petrol)" />
      <circle cx="392" cy="118" r="4.5" fill="var(--petrol)" />

      <circle
        cx="300"
        cy="132"
        r="18"
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="0.75"
        strokeDasharray="2 4"
      />

      <text x="48" y="288" className="map-label">
        BIG BANG
      </text>
      <text x="146" y="192" className="map-label">
        EDU-TECH
      </text>
      <text x="216" y="221" className="map-label">
        FINTECH
      </text>
      <text x="308" y="124" className="map-label">
        SYSTEMS
      </text>
      <text x="373" y="181" className="map-label">
        AI
      </text>
      <text x="392" y="104" textAnchor="end" className="map-label">
        SPACE EXPLORATION
      </text>
      <text x="300" y="168" textAnchor="middle" className="map-note">
        current orbit
      </text>

      <text x="38" y="30" className="map-label map-axis">
        CURIOSITY
      </text>
      <text x="420" y="326" textAnchor="end" className="map-label map-axis">
        TIME
      </text>
    </svg>
  );
}
