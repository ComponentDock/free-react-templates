# Buildcraft (Colorlib Buildcraft) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-buildcraft`.

## Design notes (replication findings)

- **Original:** ColorLib "Buildcraft" — construction template
  (source: https://colorlib.com/wp/template/buildcraft/).
- **Demo DOM analyzed:** https://buildcraft-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/buildcraft/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** modern construction
  landing — light neutrals, Outfit font, "Building Tomorrow's Landmarks"
  hero, a "What We Build" 6-card grid (Residential Construction,
  Commercial Buildings, Renovation & Remodeling, Interior Design, Project
  Management, Green Building), projects, process, and pricing.
- **Structure (1:1, section order):**
  1. Navbar: Services, Projects, Process, About, Pricing, Blog, Contact,
     Get a Quote.
  2. Hero: "Building Tomorrow's Landmarks".
  3. Services: "What We Build" grid.
  4. Projects: gallery.
  5. Process: steps.
  6. Pricing: plans.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Light neutral surfaces.
  - Font: **"Outfit"** (Google Fonts `<link>`).
- **Recreation name:** Buildcraft (kept — matches ColorLib name). App
  folder `apps/buildcraft`, package `@free-react-templates/buildcraft`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/buildcraft-<n>/<w>/<h>`); lucide-react icons; Outfit
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-buildcraft/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/buildcraft` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/buildcraft`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-buildcraft`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
