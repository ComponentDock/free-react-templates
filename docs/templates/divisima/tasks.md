# Divisima (Colorlib Divisima) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-divisima`.

## Design notes

- **Original:** ColorLib "Divisima" — free eCommerce website template
  (source: https://colorlib.com/wp/template/divisima/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/divisima/`
  (HTTP 200, 25.2KB) + stylesheet `css/style.css` (39.5KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** header (logo + Home/Women/Men/Shoes with
  Sneakers/Sandals/Formal Shoes/Boots/Flip Flops, Pages with Product/
  Category/Cart/Checkout) → hero slider ("denim jackets" $29 + DISCOVER /
  ADD TO CART) → features (Fast Secure Payments, Premium Products, Free &
  fast Delivery) → LATEST PRODUCTS grid (product cards + prices) → BROWSE
  TOP SELLING PRODUCTS (filter tabs + grid) → banner ("STRIPED SHIRTS" +
  SHOP NOW) → footer (About / Questions columns).
- **Design tokens:** brand hot pink **#f51167** + dark **#414141**/**#111111**
  text; light **#f0f0f0**/**#ebebeb** section backgrounds; font **Josefin
  Sans** via Google Fonts; filled hot-pink buttons (`site-btn`) with
  outlined (`sb-line`) / white (`sb-white`) variants.
- **Recreation name:** Divisima. App folder `apps/divisima`, package
  `@free-react-templates/divisima`.
- **Design approach:** light theme with hot-pink accents; hero = seeded
  picsum product photo + spotlight copy + CTAs; features with lucide icons;
  latest-products grid with seeded photo tiles + prices; top-selling grid
  with filter tabs; banner band; footer with About/Questions columns; all
  images picsum-seeded (`picsum.photos/seed/divisima-N/w/h`); Google Fonts
  via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-divisima` from latest origin/main.
- [ ] Mark Divisima `[~]` in TEMPLATES.md on the branch.
- [ ] Refine spec with any additional replication findings (openspec/specs/template-divisima/spec.md).
- [ ] Scaffold `apps/divisima` (copy simplest multi-section app, rename package to `@free-react-templates/divisima`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, features, latest
      products, top selling, banner, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Josefin Sans).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
