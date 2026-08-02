# Alpha (Colorlib Alpha) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-alpha`.

## Design notes (replication findings)

- **Original:** ColorLib "Alpha" — free HTML architecture template
  (source: https://colorlib.com/wp/template/alpha/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/alpha/
  (HTTP 200, full rendered DOM + `css/style.css` (29KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture/agency landing
  with a **coral/orange** brand (`#ff926b`), Montserrat font, a
  "Colorlib" hero with Get Quote, a mission section, and services cards.
- **Structure (1:1, section order):**
  1. Navbar: logo "Alpha" + Home, Dropdown, Inner Page, Contact us, Visit
     Colorlib.
  2. Hero: "Awesome free html template by Colorlib." + blurb + **Get
     Quote** (Adam Aderson).
  3. Quote band: "Get a quote / Share me please!".
  4. Mission: "Our Mission" + blurb ("The Big Oxmox advised her not to do
     so...").
  5. Services: "Our Services" + cards (icon + title + blurb).
  6. Contact Us: contact info + form.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **coral `#ff926b`** (buttons, accents).
  - Dark `#000`; light `#f5f5f5`, `#f8f9fa`.
  - Font: **"Montserrat"** (Google Fonts `<link>`).
  - Rounded coral buttons with white text.
- **Recreation name:** Alpha (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/alpha`, package
  `@free-react-templates/alpha`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/alpha-<n>/<w>/<h>`); lucide-react icons; Montserrat
  via Google Fonts; forms prevent default (no backend); coral primary in
  `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-alpha/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/alpha` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/alpha`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-alpha`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
