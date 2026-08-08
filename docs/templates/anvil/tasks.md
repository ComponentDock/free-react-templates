# Anvil (ColorLib Industrie) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the ColorLib source name
> "industrie"; the recreation ships as **Anvil** on `feat/template-industrie`
> (renamed to `apps/anvil`, package `@free-react-templates/anvil`).

## Design notes (replication findings)

- **Original:** ColorLib "Industrie" — industrial website template
  (source: https://colorlib.com/wp/template/industrie/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/industrie/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** industrial landing with a
  **red** brand (`#f23a2e`) on light gray (`#edf0f5`) and dark
  (`#25262a`) sections, Nunito Sans + Roboto Mono fonts, a "Specialized
  Technical Solutions" hero, stat counters (7000+, 90+, 2900+), and a
  "Our Specialty" services grid.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, News, Contact.
  2. Hero: "Industrie / Specialized Technical Solutions" + **Get In
     Touch**.
  3. Stats: "Let the number speaks for us." + 7000+, 90+, 2900+
     counters.
  4. Our Specialty: Automative Manufacturing, Mechanical Engineering,
     Oil & Gas Energy, Industrial Construction.
  5. Projects: gallery.
  6. Testimonials: quotes.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **red `#f23a2e`** (buttons, accents); dark `#25262a`,
    `#343a40`; light `#edf0f5`.
  - Fonts: **"Nunito Sans"** (Google Fonts `<link>`) + **"Roboto Mono"**
    (mono accents).
- **Recreation name:** Anvil (original name — the ColorLib source name
  "Industrie" is never reused). App folder `apps/anvil`, package
  `@free-react-templates/anvil`, surge `free-react-templates-anvil.surge.sh`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/anvil-<n>/<w>/<h>`); lucide-react icons;
  Nunito Sans via Google Fonts; forms prevent default (no backend); red
  primary in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-anvil/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/anvil` (copy the section-rich landing app pattern —
      Terracotta; rename package to `@free-react-templates/anvil`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh anvil` + spec:validate.
- [ ] Push `feat/template-industrie`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
