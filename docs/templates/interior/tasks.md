# Interior (Colorlib Interior) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-interior`.

## Design notes (replication findings)

- **Original:** ColorLib "Interior" — interior design template
  (source: https://colorlib.com/wp/template/interior/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/interior/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
- **Visual design (from DOM + CSS tokens):** interior-design landing with a
  **gold** brand (`#c6b069`), Poppins font, a "Precise concept design for
  stylish living" hero, a "What we offer to our clients" services grid,
  and a "Our Recent Works may impress you" gallery.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Blog, Contact.
  2. Banner hero: "Precise concept design for stylish living" + **Get
     Started**.
  3. Services: "What we offer to our clients" + Interior Design,
     Architecture Design, Concept Design.
  4. Gallery: "Our Recent Works may impress you" + Lavendar ambient
     interior works.
  5. Features: "Some Features that Made us Unique" + Expert Technicians.
  6. Testimonials: quote slider.
  7. Call to action: "Request quote now".
  8. Blog: post cards.
  9. Brands: logo strip.
  10. Footer: columns + social + copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **gold `#c6b069`** (buttons, accents).
  - Light backgrounds `#f9f9ff`; dark text `#222222`.
  - Font: **"Poppins"** (Google Fonts `<link>`).
- **Recreation name:** Interior (kept — matches ColorLib name). App folder
  `apps/interior`, package `@free-react-templates/interior`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/interior-<n>/<w>/<h>`); lucide-react icons; Poppins
  via Google Fonts; forms prevent default (no backend); gold primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-interior/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/interior` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/interior`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-interior`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
