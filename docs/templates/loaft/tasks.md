# Loaft (Colorlib Loaft) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-loaft`.

## Design notes (replication findings)

- **Original:** ColorLib "Loaft" — architecture template
  (source: https://colorlib.com/wp/template/loaft/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/loaft/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **gold** brand (`#f5ca56`), Roboto + Rajdhani fonts, a "Precise Concept
  design for Posh living" hero, and a "Here are some of Our Latest Work"
  gallery.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Gallery, Blog, Contact.
  2. Hero: "Precise Concept design for Posh living".
  3. About: "We are Loaft" + blurb.
  4. Services: "Top Services That We Offers" + Smart Kitchen Setup cards.
  5. Gallery: "Here are some of Our Latest Work".
  6. Blog: post cards.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **gold `#f5ca56`** (buttons, accents); dark `#222222`.
  - Light backgrounds `#f9f9ff`.
  - Fonts: **"Roboto"** (Google Fonts `<link>`) + **"Rajdhani"** (display).
- **Recreation name:** Loaft (kept — matches ColorLib name). App folder
  `apps/loaft`, package `@free-react-templates/loaft`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/loaft-<n>/<w>/<h>`); lucide-react icons; Roboto +
  Rajdhani via Google Fonts; gold primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-loaft/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/loaft` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/loaft`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-loaft`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
