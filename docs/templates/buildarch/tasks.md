# Buildarch (Colorlib Buildarch) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-buildarch`.

## Design notes (replication findings)

- **Original:** ColorLib "Buildarch" — architecture template
  (source: https://colorlib.com/wp/template/buildarch/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/buildarch/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **lime** brand (`#a7cb00`) + yellow `#f8b600`, Roboto + Heebo fonts, a
  "Precise concept design for stylish living" hero, a Quick Facts counter
  band (596 · 552 · 1009 · 435), and a Recent Projects grid.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Blog, Contact.
  2. Hero: "Precise concept" + "Precise concept design for stylish
     living".
  3. Quick Facts: 596, 552, 1009, 435 stat counters.
  4. About: blurb + image.
  5. Services: "Architecture" cards.
  6. Recent Projects: gallery grid.
  7. Testimonial: "Fanny Spencer" quote.
  8. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **lime `#a7cb00`** (buttons, accents); yellow `#f8b600`.
  - Light backgrounds `#f9f9ff`; body text `#777777`.
  - Fonts: **"Roboto"** (Google Fonts `<link>`) + **"Heebo"** (display).
- **Recreation name:** Buildarch (kept — matches ColorLib name). App folder
  `apps/buildarch`, package `@free-react-templates/buildarch`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/buildarch-<n>/<w>/<h>`); lucide-react icons; Roboto
  - Heebo via Google Fonts; lime primary in `@theme`; repo-standard Navbar
    (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-buildarch/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/buildarch` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/buildarch`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-buildarch`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
