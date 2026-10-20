# Chudeep Shankar — personal site

A multi-page field-notes site: a narrative About page, side quests, and a cabinet of curiosities. It is a personal notebook and future blog, not a job portfolio. The goal is to share curiosity, keep notes in public, and meet interesting people.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Newsreader, IBM Plex Sans, IBM Plex Mono

## Run

```bash
npm install
npm run dev
```

## Routes

- `/` — cover
- `/about` — narrative, work, field log, and contact. Internal anchors: `#work`, `#field-log`, `#contact`.
- `/side-quests` — projects and experiments, merged into one archive
- `/wunderkammern` — essays, recommendations, and notes. Coming soon.

The old `/work`, `/field-log`, and `/contact` routes redirect to the matching sections on `/about`.

## Design direction

Warm paper, petrol ink, and one accent. The visual language borrows from field notebooks, print production, analog film, and Japanese book design: margin notes, folios, crop marks, registration marks, dotted leaders, and a colophon. The identity is a custom C monogram with a speck, used in the header, footer, and favicon.

See [`DESIGN.md`](./DESIGN.md) for the full system: surfaces, tokens, typography, layout, components, motion, voice, content model, and accessibility rules.

The shared chrome holds the navigation, surface switcher, and footer. Content lives in `app/content.js`; shared primitives live in `app/components/ui.jsx`.

About, side-quest, education, and award content is based on the public LinkedIn profile and resume. Wunderkammern is intentionally a coming-soon page and shows no placeholder entries. Contact is limited to email and LinkedIn while the resume is being updated.
