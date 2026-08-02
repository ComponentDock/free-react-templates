# Monarch (Colorlib Monarch) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-monarch`.

## Design notes (replication findings)

- **Original:** ColorLib "Monarch" — architecture template
  (source: https://colorlib.com/wp/template/monarch/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/monarch/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **sage green** accent (`#8db1ab`) on dark/light Bootstrap sections, a
  "Monarch" hero, services, and a projects gallery.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Contact.
  2. Hero: "Monarch".
  3. About: heading + blurb.
  4. Services: cards.
  5. Projects: gallery.
  6. Footer: "Connect with us" + Navigation columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **sage `#8db1ab`** (accents); dark `#000000`, `#212529`;
    light `#f8f9fa`.
  - Font: Bootstrap system sans stack.
- **Recreation name:** Monarch (kept — matches ColorLib name). App folder
  `apps/monarch`, package `@free-react-templates/monarch`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/monarch-<n>/<w>/<h>`); lucide-react icons; Roboto
  via Google Fonts; sage primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-monarch/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/monarch` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/monarch`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-monarch`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
