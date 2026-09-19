# ShopNest (ColorLib Amado) — Tasks & Design Notes

> Prep artifacts prepared on `main` by stream 3 (prep).
> Implementation ships later on `feat/template-shopnest`.

## Design notes

- **Original:** ColorLib "Amado" — Furniture Ecommerce Template
  (source: https://colorlib.com/wp/template/amado/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/amado/`
  (HTTP 200, 15,228 bytes HTML) + stylesheet `css/core-style.css` (44,292 bytes).
  Full rendered DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):**
  1. Sidebar header (left, fixed) — logo, vertical nav, promo buttons, utility links, social icons
  2. Product categories grid (right, main area) — 3x3 masonry-ish grid of category cards with hover overlays
  3. Newsletter section — "Subscribe for a 25% Discount" heading + email form
  4. Footer — logo, copyright, horizontal nav, Component Dock branding
- **Design tokens:** brand yellow **#fbb710**; dark **#131212**; body text **#242424**;
  secondary text **#6d6d6d**; light bg **#f5f7fa**; red accent for sale badges;
  Helvetica Neue Bold/Medium fonts; sharp-corner buttons (border-radius: 0);
  button hover flips to dark (#131212).
- **Recreation name:** ShopNest. App folder `apps/shopnest`, package
  `@free-react-templates/shopnest`.
- **Design approach:** sidebar layout (left column) + product grid (right);
  category cards use seeded picsum photos; hover overlays with decorative line + price + name;
  newsletter form; footer with nav + Component Dock link.
- **Key layout detail:** The sidebar is NOT a top navbar — it's a left-side panel
  visible on desktop, hidden behind hamburger on mobile. The main content area is to the right.
  This is a distinctive layout choice that must be preserved.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) — do NOT duplicate components.
- Base implementation on a sidebar-layout existing app if one exists; otherwise
  start from a multi-section app and restructure layout.

## Tasks

- [x] Fetch + analyze ColorLib Amado preview DOM + CSS tokens
- [x] Write openspec/specs/template-shopnest/spec.md
- [x] Write docs/templates/shopnest/tasks.md (this file)
- [ ] Create branch `feat/template-shopnest` from latest origin/main
- [ ] Scaffold `apps/shopnest` (copy simplest app, rename package to `@free-react-templates/shopnest`)
- [ ] Write tests first (TDD, red phase): Sidebar, ProductGrid, Newsletter, Footer + responsive
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded images, Google Fonts
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) → build
- [ ] Self-review, update TEMPLATES.md docs, commit conventionally, push branch, open PR
