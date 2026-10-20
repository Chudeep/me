# Field Notes — Design Language

A reference for anyone extending the site. The goal is a personal site that reads like a working field notebook: warm paper, petrol ink, print furniture, and a clear separation between what is said and what is noted in the margin.

## 1. Idea

The site is a notebook, not a portfolio or a product landing page. It should feel assembled, observed, and kept — closer to a printed pamphlet or an engineer's logbook than a SaaS homepage. It is divided into a cover, three destinations, and a shared chrome so each part can be read on its own. It is also allowed to grow into a blog.

The visual language comes from:

- field notebooks and lab journals
- print production: crop marks, registration marks, folios, colophons
- analog film and paper grain
- Japanese book design: quiet grids, small type, generous margins
- editorial serif typography with dry, specific copy

The design should stay legible and useful first. The print details are structure, not decoration.

## 2. Principles

1. **Paper first.** The page is a surface, not a stack of floating cards.
2. **One accent.** Petrol is the only chromatic voice. Everything else is paper, ink, or a quiet tint of petrol.
3. **Rules, not boxes.** Prefer 1px rules and whitespace over borders, shadows, and containers.
4. **Notes live in the margin.** Body copy carries information; annotations carry personality.
5. **Print details are structural.** Crop marks belong to cards. Registration marks belong to rails and figures. Folios belong to sections.
6. **Motion is restrained.** Fade and rise, underline draws, arrow nudges. No bounce, parallax, or loops.
7. **Content over ornament.** Real roles, projects, and facts. Never invent filler to make a section look full.
8. **One surface at launch.** The Paper / Chalk / Night switch is a review tool, not a permanent product feature.
9. **A gateway, not a pitch.** The site exists to share curiosity and meet interesting people. Invite correspondence; do not optimise for hiring.

## 3. Surfaces

The theme is driven by CSS variables on the root element, selected with `data-paper`.

### Paper (default)

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#f4efe4` | Base surface |
| `--paper-2` | `#ece5d7` | Recessed surface, notices |
| `--ink` | `#142c2d` | Primary text, rules, filled buttons |
| `--ink-soft` | `#405654` | Long-form body copy |
| `--petrol` | `#0e5b57` | Links, marks, one emphasis per section |
| `--petrol-soft` | `#b9cec5` | Quiet tint / border |
| `--muted` | `#667773` | Labels, secondary metadata |
| `--line` | `rgba(20, 44, 45, 0.16)` | Hairline rules |
| `--line-strong` | `rgba(20, 44, 45, 0.42)` | Section rules, card borders |
| `--wash` | `rgba(14, 91, 87, 0.05)` | Row hover |
| `--grain` | `0.16` | Grain opacity |
| `--grain-blend` | `multiply` | Grain blend mode |

### Chalk

Cooler, quieter paper. Same ink hierarchy. Use for comparison only unless the final direction changes.

### Night

Dark petrol paper with warm ink. Petrol becomes a lighter sage-teal. Grain switches to `screen`.

### Surface switch

The review build reads `?surface=paper|chalk|night` and exposes a three-swatch control in the shared header. The choice is remembered in `localStorage` across routes. Keep `aria-pressed` accurate. The final site should ship with one surface and no switch.

## 4. Typography

Three families, three jobs.

| Family | Role | Weights |
| --- | --- | --- |
| Newsreader | Display, section titles, editorial italics, annotations | 400 / 500 / 600, normal + italic |
| IBM Plex Sans | Body copy, UI text | 400 / 500 / 600 |
| IBM Plex Mono | Labels, metadata, folios, nav, map labels | 400 / 500 |

### Scale

- **Display:** `clamp(2.8rem, 5.8vw, 5rem)`, line-height `0.98`, tracking `-0.025em`. Serif. Use for the cover only.
- **Section heading:** `clamp(2rem, 4vw, 3.2rem)`, line-height `1`, tracking `-0.02em`. Serif.
- **Body:** `16–18px`, line-height `1.65`, `--ink-soft`. Sans.
- **Label:** `0.64rem`, line-height `1.5`, tracking `0.14em`, uppercase, mono, `--muted`. Use for metadata and navigation.
- **Annotation:** `0.98rem`, italic, line-height `1.55`, `--petrol`. Serif. Use sparingly.
- **Mono data:** `10–11px` for timestamps, counts, and figure captions.

### Rules

- Serif for names, titles, and editorial phrases.
- Sans for anything that needs to be read quickly.
- Mono for anything that behaves like a label or a stamp.
- Never set long body copy in mono.
- Never use all-caps serif for headings.
- Keep measure near `60–70ch`; hero copy can be narrower.

## 5. Layout

### Shell

```css
width: min(100% - 2.5rem, 76rem);
```

Gutters increase to `3rem` at `640px` and `4rem` at `1024px`.

### Section grid

Desktop:

```css
grid-template-columns: 4.5rem 1fr;
gap: 2.5rem;
```

The left column is the rail. It is hidden below `1024px`. Content keeps the same shell on mobile.

### Rail

The rail is print furniture:

- italic serif section number in petrol
- vertical mono label
- vertical hairline
- registration mark

The rail should never contain body copy or interactive controls.

### Index rows

Used for work history on About. The field log uses paired list rows; side quests use cards.

Desktop columns: `3.5rem 1fr 7rem auto`.

- index number
- title and description
- year / status / meta
- arrow

Mobile collapses to a stacked row. The top border is the separator; there are no card backgrounds.

### Cards

Cards are rare. Use `paper-card` for figures, side-quest entries, and the Wunderkammern notice.

- 1px `--line-strong` border
- `0` radius
- no shadow
- crop marks at the corners
- optional 5% petrol tint

### Spacing

Sections use `6rem` top spacing on mobile and `8rem` on desktop. Prefer whitespace over extra rules. Not every block needs a border.

## 6. Components

### Logo

- A custom C monogram: a broken ring with flat terminals and a solid speck just outside the mouth.
- The speck is the “curious speck” and doubles as a period, so the mark reads `C.`
- Always use `currentColor`; in the chrome it inherits petrol.
- Used in the topbar, the footer colophon, and the `app/icon.svg` favicon.
- Do not substitute the registration mark, a generic icon, or a text initial for this mark.

### Cover

The homepage hero.

- Masthead line: `Chudeep Shankar / Personal notebook` on the left, `2026 · Vol. 01` on the right. Below `sm`, the name prefix hides.
- Rail `00 / Cover`, mono eyebrow with name and role, display `h1`, short body copy, and two text actions.
- The `h1` is three lines. The final word can be long; use the display clamp and the wider hero column so it never overflows.
- Primary action goes to About; the secondary action goes to `About#contact` to invite correspondence.
- Pair the copy with the `Fig. 01 / Where the time goes` interest map and its margin annotation.
- The cover is the whole homepage. Do not add a duplicate table of contents; the topbar is the index.

### Topbar

- Sticky, translucent paper (`color-mix` 90% paper), `blur(10px)`, 1px bottom rule.
- Logo + wordmark.
- Desktop nav in mono uppercase; hover draws a petrol underline. The current page keeps the underline visible with `aria-current="page"`.
- Internal navigation uses Next.js `Link`; the wordmark returns to the homepage.
- Mobile nav scrolls horizontally; use short labels such as `Quests` and `Wunder`.
- Surface switcher is a review control: 14px swatches, 1px outline when pressed, persisted across routes.

### Section head

- Mono eyebrow: `01 / Work`, or a lettered subsection such as `A / Work` on About.
- Serif title.
- Optional right-aligned meta.
- Optional italic annotation below.
- Strong bottom rule.

### Page intro

Used on every route except the homepage.

- Masthead line: `Field notes / section` on the left, `2026 · Vol. 01` on the right.
- Below `sm`, the `Field notes /` prefix hides so the masthead stays on one line.
- Rail, mono eyebrow, serif `h1`, optional meta, optional annotation.
- A strong rule separates the intro from the page body.
- The page body starts at the same shell and rail rhythm as the homepage.

### About

The unified personal page.

- One route: narrative context and a coordinates card, then Work, Field log, and Contact.
- The page intro is chapter `01 / About`; subsections are lettered `A / Work`, `B / Field log`, and `C / Contact`.
- Work and field log reuse the `experience`, `education`, and `recognition` arrays; do not duplicate entries.
- Contact reuses `contactLinks` and retains the direct email address.
- Internal anchors are `#work`, `#field-log`, and `#contact`; each section needs `scroll-mt-28`.
- The old Work, Field log, and Contact routes redirect to the matching anchor.

### Side-quest card

The merged archive of projects and experiments.

- `paper-card paper-card-tint`, crop marks, no shadow.
- ID and status at the top.
- Serif title; an external arrow only when the entry has a live destination.
- Body, stack labels, five progress ticks, and a last-touched note.
- Cards stretch to equal height; the footer sits at the bottom.

### Wunderkammern notice

- A single paper card with crop marks.
- Three numbered drawers: Essays, Recommendations, Notes.
- Each drawer has a description and an `IN PREPARATION` status.
- The card states plainly that the cabinet is coming soon; no placeholder entries.

### Buttons

- `btn-ink`: filled ink, paper text, 1px ink border. Hover becomes petrol.
- Uppercase mono, `0.68rem`, tracking `0.14em`, no radius.
- Include a small arrow only when the action implies movement or external navigation.

### Links

- `link-underline`: petrol, inline-flex, 1px underline that draws left-to-right on hover.
- In body copy, underline by default rather than relying on colour alone.

### Index row

- 1px top rule.
- Hover: 5% petrol wash, title turns petrol, arrow moves `2px` up and right.
- Entire row is clickable when it has a destination.
- Non-link rows keep the same rhythm without an arrow.

### Status and progress

- Status dot: 6px petrol circle.
- Ticks: 7px squares; filled petrol when active.
- Use text labels (`SHIPPED`, `ARCHIVED`, `DEGREE`) so colour is never the only signal.

### Registration mark

A circle with four crosshair ticks and a filled centre. Use at small sizes in petrol. It is a signature, not a bullet.

### Grain

A fixed SVG fractal-noise layer over the page.

- Paper: `0.16`, multiply.
- Chalk: `0.14`, multiply.
- Night: `0.08`, screen.
- Never animate the grain.

### Interest map

A hand-drawn timeline, not a data visualisation. Keep the grid faint, the path petrol, the labels mono, and the note serif italic. It exists to give the cover a human mark.

## 7. Motion

- **Load:** 600ms rise from `8px` below, `cubic-bezier(0.22, 1, 0.36, 1)`. Stagger the secondary figure by `120ms`.
- **Scroll reveal:** CSS `animation-timeline: view()` with a 550ms rise. No JavaScript observers.
- **Hover:** 200–250ms ease for colour, underline, and arrow movement.
- **Reduced motion:** disable transitions and animations, force content visible, and disable smooth scrolling.
- **Never:** bounce, spring, parallax, looping decoration, scroll-jacking, or hover-only information.

## 8. Voice

The voice is first person, dry, specific, and lightly self-aware. It should sound like an engineer explaining what they actually built, not a brand deck.

Do:

- “Building YubiOS, with a focus on distributed systems, AI agents, and generative AI applications.”
- “The better version is a conversation.”
- “Small things built to learn something, or fix an annoyance.”

Don't:

- “Passionate about crafting delightful digital experiences.”
- “Leveraging cutting-edge technology to drive innovation.”
- “A visionary engineer at the intersection of…”
- Portfolio language, “open to opportunities”, or hiring pitches. This is a personal notebook and a way to meet people.
- Invented metrics, testimonials, book titles, or project names.

Headings can be editorial. Body copy should stay plain. Annotations are asides, not a second article.

## 9. Content model

Content lives in `app/content.js`. Components consume it; do not duplicate copy inside page files.

### Experience

```js
{
  index, company, role, year, description, stack, href?, external?
}
```

### Side quests

Projects and experiments share one shape. There is no separate Projects array.

```js
{
  id, status, title, year?, body, stack, href?, external?, last, progress
}
```

`progress` is `0–5` and maps to five ticks. `href` is optional; when present, the card shows an external arrow. Use only live destinations, never a GitHub profile.

### Education / recognition

```js
{
  title, detail, status
}
```

### Contact links

```js
{
  label, href, external
}
```

Use email and LinkedIn. The resume link is intentionally paused until the file is updated; restore it to `contactLinks` when current. The site does not link to GitHub.

### Surfaces

Keep the surface list small and local. Do not hard-code colours in components; use CSS variables.

## 10. Accessibility

- Skip link before the header.
- `:focus-visible` uses a 2px petrol outline with 3px offset.
- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Every section that is linked from nav has an `id` and `scroll-margin-top`.
- In-page anchors on About also need `scroll-mt-28` so the sticky topbar does not cover the heading.
- Icon-only controls need `aria-label`; decorative SVGs need `aria-hidden`.
- Surface buttons use `aria-pressed`.
- Keep secondary text at `--muted` only when it is genuinely secondary; body copy uses `--ink-soft` or `--ink`.
- Respect `prefers-reduced-motion`.
- Do not rely on hover for essential information.

## 11. Implementation notes

- Next.js 16 App Router, React 19, Tailwind CSS 4.
- Routes: `/`, `/about`, `/side-quests`, `/wunderkammern`.
- Fonts are loaded with `next/font/google` in `app/layout.jsx`.
- Tokens and component classes live in `app/globals.css`.
- Shared chrome lives in `app/components/site-chrome.jsx`: header, mobile nav, surface switcher, footer, and skip link.
- Shared primitives live in `app/components/ui.jsx`: logo, rail, registration mark, crop marks, arrows, page intro, section head, and interest map.
- The favicon is `app/icon.svg` and uses the same C monogram as the header and footer.
- Content lives in `app/content.js`.
- `SiteChrome` sits in the root layout, so surface state and navigation persist across route changes.
- Wunderkammern is a coming-soon page. Do not fill it with placeholder essays or recommendations.
- About lives at `app/about/page.jsx`. The old `/work`, `/field-log`, and `/contact` routes are permanent redirects to About anchors in `next.config.mjs`.
- Before launch: choose one surface and remove the surface switch.
- Verify changes with `npm run build`.

## 12. Don'ts

- No drop shadows, large radii, gradients, glassmorphism, or floating cards.
- No second accent, rainbow tag colours, or emoji.
- No fake testimonials, metrics, quotes, or personal reading lists.
- No GitHub link anywhere on the site.
- No separate Work, Field log, or Contact pages. They belong to About.
- No generic icon, text initial, or registration mark in place of the C monogram.
- No image-heavy hero. The notebook is the visual.
- No lorem ipsum.
- No placeholder entries on Wunderkammern.
- No animation that delays reading.
- No redesign of the type or colour system without updating this document.
