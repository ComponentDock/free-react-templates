# Atelier (Colorlib Atelier) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-atelier`.

## Design notes (replication findings)

- **Original:** ColorLib "Atelier" — design studio template
  (source: https://colorlib.com/wp/template/atelier/).
- **Demo DOM analyzed:** https://atelier-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/atelier/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** elegant design-studio
  landing — light neutrals, DM Sans + Playfair Display fonts,
  "Transforming Spaces Into Extraordinary Experiences" hero, a
  "Comprehensive Design Services" 6-card grid (Residential Design,
  Commercial Design, Hospitality Design, Color & Material Consulting,
  Space Planning, Renovation Management), portfolio, and pricing.
- **Structure (1:1, section order):**
  1. Navbar: About, Portfolio, Services, Pricing, Blog, Contact, Book
     Consultation.
  2. Hero: "Transforming Spaces Into Extraordinary Experiences".
  3. Services: "Comprehensive Design Services" grid.
  4. Portfolio: project gallery.
  5. Pricing: plans.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Light neutral surfaces.
  - Fonts: **"DM Sans"** + **"Playfair Display"** (Google Fonts `<link>`).
- **Recreation name:** Atelier (kept — matches ColorLib name). App folder
  `apps/atelier`, package `@free-react-templates/atelier`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/atelier-<n>/<w>/<h>`); lucide-react icons; DM Sans
  - Playfair Display via Google Fonts; repo-standard Navbar (dark-mode
    toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-atelier/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/atelier` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/atelier`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-atelier`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
