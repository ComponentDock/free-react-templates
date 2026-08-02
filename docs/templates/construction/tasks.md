# Construction (Colorlib Construction) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-construction`.

## Design notes (replication findings)

- **Original:** ColorLib "Construction" — construction website template
  (source: https://colorlib.com/wp/template/construction/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/construction/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
- **Visual design (from DOM + CSS tokens):** construction landing with a
  **yellow** brand (`#fab700`), Poppins font, a "Discover the Colorful
  World" hero, "Build Your Dream" features, and a "Some Features that Made
  us Unique" services band.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, Feature, Project, Service, Blog, Contact.
  2. Banner hero: "Discover the Colorful World" + **Discover Now**.
  3. Features: "Build Your Dream" cards.
  4. Offered: "Building Drawings" services.
  5. Projects: "Alex Complex for residence" gallery.
  6. Facts band: stat counters.
  7. Services: "Some Features that Made us Unique" (Basic & Common
     Repairs, Brake Repairs & Services, Preventive Maintenance).
  8. Testimonials: quote slider.
  9. Latest Blog: post cards.
  10. Footer: columns + social + copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **yellow `#fab700`** (buttons, accents).
  - Dark text `#222222`; light backgrounds `#f9f9ff`.
  - Font: **"Poppins"** (Google Fonts `<link>`).
- **Recreation name:** Construction (kept — matches ColorLib name). App
  folder `apps/construction`, package `@free-react-templates/construction`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/construction-<n>/<w>/<h>`); lucide-react icons;
  Poppins via Google Fonts; forms prevent default (no backend); yellow
  primary in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-construction/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/construction` (copy the section-rich landing app
      pattern — Aurora; rename package to
      `@free-react-templates/construction`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-construction`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
