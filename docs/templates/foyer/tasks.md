# Foyer (ColorLib Interior) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the ColorLib source name
> "interior"; the recreation ships as **Foyer** on `feat/template-interior`
> (renamed to `apps/foyer`, package `@free-react-templates/foyer`).

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
  1. Navbar: topbar phone/email + logo + Home, About, Services, Projects,
     Blog, Contact.
  2. Banner hero: "Precise concept design for stylish living" + **Get
     Started**.
  3. Services: "What we offer to our clients" + Interior Design,
     Architecture Design, Concept Design.
  4. Gallery: "Our Recent Works may impress you" + Lavendar ambient
     interior works.
  5. Features: "Some Features that Made us Unique" + Expert Technicians.
  6. Testimonials: quote cards.
  7. Call to action: "Request quote now".
  8. Blog: post cards.
  9. Footer: About Us + Newsletter + Follow Us columns, social, copyright.
- **Design tokens extracted from `css/main.css`:**
  - Primary **gold `#c6b069`** (buttons, accents).
  - Light backgrounds `#f9f9ff`; dark text `#222222`; dark `#04091e`.
  - Font: **"Poppins"** (Google Fonts `<link>`).
- **Recreation name:** Foyer (original name — the ColorLib source name
  "Interior" is never reused). App folder `apps/foyer`, package
  `@free-react-templates/foyer`, surge `free-react-templates-foyer.surge.sh`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/foyer-<n>/<w>/<h>`); lucide-react icons; Poppins
  via Google Fonts; forms prevent default (no backend); gold primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-foyer/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/foyer` (copy the section-rich landing app pattern —
      Anvil; rename package to `@free-react-templates/foyer`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh foyer` + spec:validate.
- [ ] Push `feat/template-interior`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
