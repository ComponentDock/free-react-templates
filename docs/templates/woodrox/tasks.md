# Woodrox (Colorlib Woodrox) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-woodrox`.

## Design notes (replication findings)

- **Original:** ColorLib "Woodrox" — architecture template
  (source: https://colorlib.com/wp/template/woodrox/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/woodrox/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture/furniture landing
  with a **yellow** brand (`#faba00`), Roboto + Heebo fonts, a "Precise
  concept design for stylish living" hero, a "Most Popular Furnitures"
  section (Green Butter Sofa), and an "Alex Complex for esidence" project
  gallery.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Blog, Contact.
  2. Hero: "Precise concept design for stylish living" + **Get Started**.
  3. Furniture: "Most Popular Furnitures" + Green Butter Sofa cards.
  4. Projects: "Alex Complex for esidence" gallery.
  5. Services: cards.
  6. Testimonials: quotes.
  7. Blog: post cards.
  8. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#faba00`** (buttons, accents); dark `#222222`.
  - Light backgrounds `#f9f9ff`; body text `#777777`.
  - Fonts: **"Roboto"** (Google Fonts `<link>`) + **"Heebo"** (display).
- **Recreation name:** Woodrox (kept — matches ColorLib name). App folder
  `apps/woodrox`, package `@free-react-templates/woodrox`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/woodrox-<n>/<w>/<h>`); lucide-react icons; Roboto +
  Heebo via Google Fonts; yellow primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-woodrox/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/woodrox` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/woodrox`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-woodrox`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
