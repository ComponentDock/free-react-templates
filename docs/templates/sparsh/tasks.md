# Sparsh (Colorlib Sparsh) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-sparsh`.

## Design notes (replication findings)

- **Original:** ColorLib "Sparsh" — architecture template
  (source: https://colorlib.com/wp/template/sparsh/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sparsh/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **yellow** brand (`#f9cc41`) on dark (`#262533`) hero, Oswald + Roboto
  fonts, a "Dream Heaven City" hero, an about section with counters
  (286+, 942+, 263+), and a "Get Estimate" CTA.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Contact.
  2. Hero: "Dream Heaven City" + **Details**.
  3. About: "About our Company" + "We've been creating Awesome Since
     1992" + 286+, 942+, 263+ counters.
  4. Services: cards.
  5. Projects: gallery.
  6. CTA: **Get Estimate**.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#f9cc41`** (buttons, accents); dark `#262533`.
  - Light backgrounds `#f9f9ff`.
  - Fonts: **"Oswald"** (Google Fonts `<link>`) + **"Roboto"** (body).
- **Recreation name:** Sparsh (kept — matches ColorLib name). App folder
  `apps/sparsh`, package `@free-react-templates/sparsh`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/sparsh-<n>/<w>/<h>`); lucide-react icons; Oswald +
  Roboto via Google Fonts; yellow primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-sparsh/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sparsh` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/sparsh`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-sparsh`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
