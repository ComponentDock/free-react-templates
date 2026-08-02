# Kraft (Colorlib Kraft) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-kraft`.

## Design notes (replication findings)

- **Original:** ColorLib "Kraft" — architecture template
  (source: https://colorlib.com/wp/template/kraft/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/kraft/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with an
  **orange** brand (`#ff5200`) on black/white sections, Bootstrap system
  sans font, a "Creates Smart Architecture." hero, and a 4-card services
  grid (Architect, Interior Design, Landscape Design, Consultancy).
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, Services, Projects, About, Contact Us.
  2. Hero: "Creates Smart Architecture.".
  3. Intro: "Architectures for Complex Projects".
  4. Our Services: Architect, Interior Design, Landscape Design,
     Consultancy.
  5. Our Projects: "La Lega Stadium" gallery.
  6. About: "About Kraft." + blurb.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#ff5200`** (buttons, accents); black `#000000`,
    white `#ffffff` sections.
  - Font: Bootstrap system sans stack.
- **Recreation name:** Kraft (kept — matches ColorLib name). App folder
  `apps/kraft`, package `@free-react-templates/kraft`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/kraft-<n>/<w>/<h>`); lucide-react icons; Roboto via
  Google Fonts; orange primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-kraft/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/kraft` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/kraft`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-kraft`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
