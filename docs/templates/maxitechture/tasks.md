# Maxitechture (Colorlib Maxitechture) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-maxitechture`.

## Design notes (replication findings)

- **Original:** ColorLib "Maxitechture" — architecture template
  (source: https://colorlib.com/wp/template/maxitechture/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/maxitechture/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **lime** brand (`#a7cb00`), Roboto + Heebo fonts, a "Precise concept
  design for stylish living" hero, a "What we offer to our clients"
  services grid, and an "Our Recent Completed Projects" gallery.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Blog, Contact.
  2. Hero: "Precise concept design for stylish living" + **Get Started**.
  3. Services: "What we offer to our clients" + Architecture, Interior
     Design, Concept Design.
  4. Projects: "Our Recent Completed Projects" + Nest Protect cards.
  5. About: "More About Us".
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **lime `#a7cb00`** (buttons, accents); dark `#222222`.
  - Light backgrounds `#f9f9ff`; body text `#777777`.
  - Fonts: **"Roboto"** (Google Fonts `<link>`) + **"Heebo"** (display).
- **Recreation name:** Maxitechture (kept — matches ColorLib name). App
  folder `apps/maxitechture`, package
  `@free-react-templates/maxitechture`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/maxitechture-<n>/<w>/<h>`); lucide-react icons;
  Roboto + Heebo via Google Fonts; lime primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-maxitechture/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/maxitechture` (copy the section-rich landing app
      pattern — Aurora; rename package to
      `@free-react-templates/maxitechture`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-maxitechture`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
