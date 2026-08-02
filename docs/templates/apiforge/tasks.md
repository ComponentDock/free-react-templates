# Apiforge (Colorlib Apiforge) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-apiforge`.

## Design notes (replication findings)

- **Original:** ColorLib "Apiforge" — API platform template
  (source: https://colorlib.com/wp/template/apiforge/).
- **Demo DOM analyzed:** https://apiforge-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/apiforge/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
- **Visual design (from DOM + Tailwind classes):** dark-themed API platform
  landing with **green** accents (`green-400`, `green-500`), Outfit font,
  "Ship Better APIs Faster" hero, and a 6-card features grid (API Gateway,
  Rate Limiting, Authentication, Analytics Dashboard, Webhook Management,
  SDK Generation).
- **Structure (1:1, section order):**
  1. Navbar: Products, Pricing, About, Blog, Contact, Get API Key.
  2. Hero: "Ship Better APIs Faster" + CTA.
  3. Features: "Everything You Need to Ship APIs" grid.
  4. Pricing: plans.
  5. Docs: documentation teaser.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from the DOM:**
  - Dark surfaces, green accents (`green-400`, `green-500`).
  - Font: **"Outfit"** (Google Fonts `<link>`).
- **Recreation name:** Apiforge (kept — matches ColorLib name). App folder
  `apps/apiforge`, package `@free-react-templates/apiforge`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/apiforge-<n>/<w>/<h>`); lucide-react icons; Outfit
  via Google Fonts; green accent in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-apiforge/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/apiforge` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/apiforge`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-apiforge`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
