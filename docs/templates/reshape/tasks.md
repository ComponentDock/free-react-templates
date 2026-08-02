# Reshape (Colorlib Reshape) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-reshape`.

## Design notes (replication findings)

- **Original:** ColorLib "Reshape" — architecture template
  (source: https://colorlib.com/wp/template/reshape/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/reshape/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **blue** brand (`#0779e4`) on black/white sections, Mulish font, a "We
  are Reshape, and we shape buildings." hero, and a 6-card services grid
  (Construction Consultation, House Renovation, Planning, Interior Design,
  Architecture, Installation Works).
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, Services, Projects, About, Contact.
  2. Hero: "We are Reshape, and we shape buildings." + **See Case
     Study**.
  3. Our services: 6 cards.
  4. Projects: gallery.
  5. About: "About us" + blurb.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#0779e4`** (buttons, accents); black `#000000`,
    white `#ffffff`.
  - Font: **"Mulish"** (Google Fonts `<link>`).
- **Recreation name:** Reshape (kept — matches ColorLib name). App folder
  `apps/reshape`, package `@free-react-templates/reshape`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/reshape-<n>/<w>/<h>`); lucide-react icons; Mulish
  via Google Fonts; blue primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-reshape/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/reshape` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/reshape`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-reshape`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
