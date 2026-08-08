# Facet (ColorLib Square) — Tasks & Design Notes

> Recreation of ColorLib "Square" (architecture template) under the NEW
> original name **Facet** (prep artifacts were renamed from
> `template-square` → `template-facet` when the implementation branch
> claimed the item).

## Design notes (replication findings)

- **Original:** ColorLib "Square" — architecture template
  (source: https://colorlib.com/wp/template/square/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/square/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **green** brand (`#2e9e5b`) + **yellow** (`#fdb72c`) accents, Rubik +
  system sans fonts, a "We have a passion in creating new and unique
  spaces" hero, and an "Our Projects" gallery.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Projects, Team, Blog, Contact +
     "Request a quote".
  2. Hero: "We have a passion in creating new and unique spaces" +
     "Travel to the any corner of the world, without going around in
     circles".
  3. Services: Perfectly Design, Carefully Planned, Smartly Execute.
  4. CTA: "Be Part of our Business" + "Request A Quote".
  5. Stats: "Since we started work in 1980" + Years of experience,
     Project Done, Our Architect, Happy Customers.
  6. Projects: "Our Projects" + Office Interior Design gallery.
  7. Team: "Behind those Beautiful Works" + Lloyd Wilson, Rachel Parker,
     Ian Smith, Alicia Henderson, Jacob Bolton.
  8. Blog: "Read Our Stories" + "Why Lead Generation is Key for Business
     Growth".
  9. Contact: "Contact Us" + address / phone / email / website.
  10. Footer: Links, Services, "Have a Questions?" + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **green `#2e9e5b`** (buttons, accents); yellow `#fdb72c`.
  - Dark `#000000`, `#212529`; light `#f8f9fa`.
  - Fonts: **"Rubik"** (Google Fonts `<link>`) + system sans (body).
- **Recreation name:** Facet. App folder `apps/facet`, package
  `@free-react-templates/facet`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/facet-<n>/<w>/<h>`); lucide-react icons; Rubik via
  Google Fonts; green primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-facet/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/facet` (copy the section-rich landing app pattern —
      Chisel; rename package to `@free-react-templates/facet`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh facet` (typecheck → lint →
      coverage → build).
- [ ] Push `feat/template-facet`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
