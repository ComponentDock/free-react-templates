# Trestle (Colorlib Arcade) — Tasks & Design Notes

> Prep artifacts originally prepared for the Arcade claim; renamed to
> Trestle per the mandatory new-original-name rule (never reuse the
> ColorLib source name). Implementation ships on `feat/template-trestle`.

## Design notes (replication findings)

- **Original:** ColorLib "Arcade" — architecture template
  (source: https://colorlib.com/wp/template/arcade/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/arcade/
  (HTTP 200, full rendered DOM + `css/style.css` (36KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **lime** brand (`#baff00`) over dark sections, Roboto font, a
  "Minimalistic Architecture" hero, a creative-studio blurb, a 6-card
  services grid, and a dark CTA + milestones band.
- **Structure (1:1, verified against live DOM, section order):**
  1. Header: top bar **+675 334 567 223** + navbar (Home, About us,
     Services, Portfolio, Contact).
  2. Hero (light `#ededed`): "Minimalistic Architecture and more" +
     **See Project** (solid lime button).
  3. Studio: "We are a creative Architecture Studio" + blurb + **See
     Project**.
  4. Services: "Services" + 6 cards — **Plans and Projects, Conceptual
     Architecture, Apartment Buildings, Skyscrapers Buildings,
     Documentation, Restauration Projects** (icon + blurb + **READ
     MORE**).
  5. CTA (dark): "Dare to dream of a modern home" + blurb.
  6. Milestones: **14** Years of Experience · **237** Projects Taken ·
     **11k** Twitter Followers · **12** Awards Won.
  7. Projects: "Projects" + filter (All, Restaurations, Buildings,
     Apartments) + cards with **See Project**.
  8. Clients: 5 brand logo placeholders.
  9. Footer: social (Pinterest, LinkedIn, Instagram, Facebook, Twitter) +
     columns (Company, Support, Site Map) + Newsletter + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **lime `#baff00`** (buttons, accents, section-title block).
  - Dark `#222222`, `#121212`; light `#f0f0f0`, `#ededed`; muted `#727272`.
  - Font: **"Roboto"** (Google Fonts `<link>`).
  - `.site-btn`: bold, 4px solid border, min-width 200px, padding 19px 0;
    dark/light/solid-lime variants.
- **Recreation name:** Trestle (NEW — ColorLib source is "Arcade"). App
  folder `apps/trestle`, package `@free-react-templates/trestle`, homepage
  `https://free-react-templates-trestle.surge.sh`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/trestle-<n>/<w>/<h>`); lucide-react icons; Roboto via
  Google Fonts; lime primary in `@theme`; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Rename claim: `openspec/specs/template-arcade` → `template-trestle`;
      spec updated with new name + live-DOM-verified section order.
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/trestle` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/trestle`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh trestle` (typecheck → lint →
      test:coverage → build) + `npm run spec:validate`.
- [ ] Push `feat/template-trestle`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` (all copies) + Surge URL +
      homepage + `npm run readme:status` (bookkeeping on main, state D).
