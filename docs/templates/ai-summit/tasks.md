# Ai Summit (Colorlib Ai Summit) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-ai-summit`.

## Design notes (replication findings)

- **Original:** ColorLib "Ai Summit" — AI conference template
  (source: https://colorlib.com/wp/template/ai-summit/).
- **Demo DOM analyzed:** https://aisummit-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/ai-summit/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** dark conference hero
  (`gray-900/950`) with **green** accents (`green-500`, `green-300`),
  Google Fonts, "The Future of AI is Here" headline with date/venue
  (September 18-20, 2026 · San Francisco, CA), speaker grid, tracks,
  schedule, and venue sections.
- **Structure (1:1, section order):**
  1. Navbar: Speakers, Tracks, Schedule, Tickets, Venue.
  2. Hero: "The Future of AI is Here" + **View Schedule** / **Get
     Tickets**.
  3. Speakers: "Learn from the Best" + 8 speaker cards (Dr. Maya Patel,
     Andrej Kovalenko, Dr. Sophia Chen, Marcus Thompson, Dr. Yuki
     Tanaka, James Okonkwo, Dr. Elena Rossi, Kevin Park).
  4. Tracks: topic tracks.
  5. Schedule: sessions.
  6. Venue: location info.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Dark hero (`gray-900/950`), green accents (`green-500`, `green-300`).
  - Font: Google Fonts (Space Grotesk / Inter family).
- **Recreation name:** Ai Summit (kept — matches ColorLib name; folder
  uses kebab case). App folder `apps/ai-summit`, package
  `@free-react-templates/ai-summit`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/aisummit-<n>/<w>/<h>`); lucide-react icons; Google
  Fonts via `<link>`; green accent in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-ai-summit/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/ai-summit` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/ai-summit`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-ai-summit`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
