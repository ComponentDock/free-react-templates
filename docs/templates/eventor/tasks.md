# Eventor (Colorlib Eventor) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-eventor`.

## Design notes (replication findings)

- **Original:** ColorLib "Eventor" — event/conference template
  (source: https://colorlib.com/wp/template/eventor/).
- **Demo DOM analyzed:** https://eventor-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/eventor/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** dark tech-conference
  landing with **blue** (`blue-500`) and **green** (`green-500`) accents,
  Space Grotesk font, "The Premier Technology Conference" hero, a "Learn
  From the Best" speaker grid (Dr. Sarah Chen, Marcus Johnson, Elena
  Rodriguez, David Kim, Aisha Patel, James Wright), schedule, sponsors,
  and venue sections.
- **Structure (1:1, section order):**
  1. Navbar: Speakers, Schedule, Tickets, Sponsors, Venue, Get Tickets.
  2. Hero: "The Premier Technology Conference" + **Get Tickets**.
  3. Speakers: "Learn From the Best" + 6 speaker cards.
  4. Schedule: sessions.
  5. Sponsors: logo strip.
  6. Venue: location info.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Dark surfaces, blue/green accents.
  - Font: **"Space Grotesk"** (Google Fonts `<link>`).
- **Recreation name:** Eventor (kept — matches ColorLib name). App folder
  `apps/eventor`, package `@free-react-templates/eventor`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/eventor-<n>/<w>/<h>`); lucide-react icons; Space
  Grotesk via Google Fonts; blue accent in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-eventor/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/eventor` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/eventor`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-eventor`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
