# Square (Colorlib Square) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-square`.

## Design notes (replication findings)

- **Original:** ColorLib "Square" — architecture template
  (source: https://colorlib.com/wp/template/square/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/square/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **green** brand (`#2e9e5b`) + **yellow** (`#fdb72c`) accents, Rubik +
  Bootstrap system fonts, a "We have a passion in creating new and unique
  spaces" hero, and an "Our Projects" gallery.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Services, Projects, Contact.
  2. Hero: "We have a passion in creating new and unique spaces".
  3. About: Perfectly Design, Carefully Planned, Smartly Execute.
  4. CTA: "Request A Quote".
  5. Stats: "Since we started work in 1980".
  6. Projects: "Our Projects" + Office Interior Design.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **green `#2e9e5b`** (buttons, accents); yellow `#fdb72c`.
  - Dark `#000000`, `#212529`; light `#f8f9fa`.
  - Fonts: **"Rubik"** (Google Fonts `<link>`) + system sans (body).
- **Recreation name:** Square (kept — matches ColorLib name). App folder
  `apps/square`, package `@free-react-templates/square`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/square-<n>/<w>/<h>`); lucide-react icons; Rubik via
  Google Fonts; green primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-square/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/square` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/square`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-square`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
