# Mosaic (Colorlib Mosaic) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-mosaic`.

## Design notes (replication findings)

- **Original:** ColorLib "Mosaic" — architecture template
  (source: https://colorlib.com/wp/template/mosaic/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/mosaic/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture firm landing with
  a **blue** brand (`#0033c7`), Bootstrap system sans font, an
  "Architecture Firm / We Love Modern Designs" hero, an about section, and
  an "Our Work Flow" process (Perfectly Design, Carefully Planned, Smartly
  Execute).
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Contact.
  2. Hero: "Architecture Firm / We Love Modern Designs" + **View our
     works**.
  3. About: "We Create Amazing Architecture Designs" + "We are the best
     Interior, Exterior & Architecture Firm".
  4. Workflow: "Our Work Flow" + Perfectly Design, Carefully Planned,
     Smartly Execute.
  5. Projects: gallery.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#0033c7`** (buttons, accents); dark `#000000`.
  - Light backgrounds `#dee2e6`, `#f8f9fa`.
  - Font: Bootstrap system sans stack.
- **Recreation name:** Mosaic (kept — matches ColorLib name). App folder
  `apps/mosaic`, package `@free-react-templates/mosaic`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/mosaic-<n>/<w>/<h>`); lucide-react icons; Roboto via
  Google Fonts; blue primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-mosaic/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/mosaic` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/mosaic`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-mosaic`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
