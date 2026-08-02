# Tough (Colorlib Tough) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-tough`.

## Design notes (replication findings)

- **Original:** ColorLib "Tough" — architecture template
  (source: https://colorlib.com/wp/template/tough/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/tough/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **mint green** brand (`#53d397` / `#79efb4`) on a dark (`#1b212c`)
  canvas, Montserrat font, a "Tough" hero, numbered project cards (#01
  Exterior Building, #02 American Building, #03 Louie's Residences, #04
  Business Building), and a "Request a quote" CTA.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Contact.
  2. Hero: "Tough" + Learn More / Get started.
  3. Projects: #01 Exterior Building, #02 American Building, #03 Louie's
     Residences, #04 Business Building + **Explore Further**.
  4. Services: Interior Design, Concept Design, Residential Design.
  5. CTA: **Request a quote**.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **mint `#53d397`** / `#79efb4` (buttons, accents); dark
    `#1b212c`.
  - Light `#f8f9fa`.
  - Font: **"Montserrat"** (Google Fonts `<link>`).
- **Recreation name:** Tough (kept — matches ColorLib name). App folder
  `apps/tough`, package `@free-react-templates/tough`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/tough-<n>/<w>/<h>`); lucide-react icons; Montserrat
  via Google Fonts; mint primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-tough/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/tough` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/tough`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-tough`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
