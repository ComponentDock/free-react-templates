# Cloudnest (Colorlib Cloudnest) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-cloudnest`.

## Design notes (replication findings)

- **Original:** ColorLib "Cloudnest" — cloud platform template
  (source: https://colorlib.com/wp/template/cloudnest/).
- **Demo DOM analyzed:** https://cloudnest-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/cloudnest/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** dark cloud-platform
  landing with **green** accents (`green-400`, `green-500`), DM Sans font,
  "Deploy at the Speed of Light" hero, and a 6-card features grid (App
  Hosting, Managed Databases, Edge Functions, Object Storage, Container
  Registry, Load Balancing).
- **Structure (1:1, section order):**
  1. Navbar: Products, Pricing, About, Blog, Contact, Get Started Free.
  2. Hero: "Deploy at the Speed of Light" + CTA.
  3. Features: "Everything You Need to Ship" grid.
  4. Pricing: plans.
  5. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Dark surfaces, green accents (`green-400`, `green-500`).
  - Font: **"DM Sans"** (Google Fonts `<link>`).
- **Recreation name:** Cloudnest (kept — matches ColorLib name). App folder
  `apps/cloudnest`, package `@free-react-templates/cloudnest`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/cloudnest-<n>/<w>/<h>`); lucide-react icons; DM Sans
  via Google Fonts; green accent in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-cloudnest/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/cloudnest` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/cloudnest`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-cloudnest`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
