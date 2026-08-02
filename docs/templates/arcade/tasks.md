# Arcade (Colorlib Arcade) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-arcade`.

## Design notes (replication findings)

- **Original:** ColorLib "Arcade" — architecture template
  (source: https://colorlib.com/wp/template/arcade/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/arcade/
  (HTTP 200, full rendered DOM + `css/style.css` (36KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **lime** brand (`#baff00`) over dark sections, Roboto font, a
  "Minimalistic Architecture" hero, a creative-studio blurb, and a 6-card
  services grid.
- **Structure (1:1, section order):**
  1. Top bar: **+675 334 567 223**.
  2. Navbar: logo "Arcade" + Home, About us, Services, Portfolio, Contact.
  3. Hero (slider): "Minimalistic Architecture and more" + **See Project**.
  4. Studio: "We are a creative Architecture Studio" + blurb + **See
     Project**.
  5. Services: "Services" + 6 cards — **Plans and Projects, Conceptual
     Architecture, Apartment Buildings, Skyscrapers Buildings,
     Documentation, Restauration Projects** (icon + blurb + **READ
     MORE**).
  6. Projects: "Dare to dream of a modern..." + portfolio grid.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **lime `#baff00`** (buttons, accents).
  - Dark `#222222`, `#121212`; light `#f0f0f0`.
  - Font: **"Roboto"** (Google Fonts `<link>`).
  - Lime buttons with dark text.
- **Recreation name:** Arcade (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/arcade`, package
  `@free-react-templates/arcade`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/arcade-<n>/<w>/<h>`); lucide-react icons; Roboto via
  Google Fonts; lime primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-arcade/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/arcade` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/arcade`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-arcade`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
