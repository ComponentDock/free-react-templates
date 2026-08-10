# Bazaar (ColorLib ShopMax) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cove PR awaits review.
> Implementation ships later on `feat/template-bazaar`.

## Design notes

- **Original:** ColorLib "ShopMax" — free eCommerce website template
  (source: https://colorlib.com/wp/template/shopmax/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/shopmax/`
  (HTTP 200, 21.2KB) + stylesheet `css/style.css` (22.7KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** navbar (Home/Menu One/Two/Three/Shop/
  Catalogue/New Arrivals/Contact) → hero ("#New Summer Collection 2019" /
  "Arrivals Sales" + "Shop Now") → collections ("Discover The
  Collections") → popular products (Gray Shoe, Blue Shoe High Heels,
  Denim Jacket, Leather Green Bag, Smooth Cloth, Yellow Jacket) → most
  rated row → new shoes hero ("New Shoes") → promo ("Finding Your Perfect
  Shirts This Summer") → footer (Quick Links / Contact Info).
- **Design tokens:** brand pink **#ee4266** + dark **#25262a**/**#333333**
  text; light **#edf0f5**/**#f9f9f9** sections; icomoon icons (recreated
  with lucide-react); black filled square buttons (`btn btn-black
rounded-0`); body font recreated with a modern sans (e.g. Poppins) via
  Google Fonts.
- **Recreation name:** Bazaar. App folder `apps/bazaar`, package
  `@free-react-templates/bazaar`.
- **Design approach:** hero = seeded picsum product photo + headline + CTA;
  collections band; popular/most-rated product grids with seeded photo
  tiles; new-shoes band; promo; footer with link columns; all images
  picsum-seeded (`picsum.photos/seed/bazaar-N/w/h`); Google Fonts via
  `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` (multi-section landing with
  Navbar/Hero/Sections/Footer structure) — the closest existing multi-section
  app; adapt patterns from the 404 apps' Navbar/SocialLinks.

## Tasks

- [ ] Create branch `feat/template-bazaar` from latest origin/main.
- [x] Mark Shopmax `[~]` in TEMPLATES.md on the branch (claimed as Bazaar).
- [x] Refine spec with any additional replication findings (openspec/specs/template-bazaar/spec.md).
- [x] Scaffold `apps/bazaar` (copy simplest multi-section app, rename package to `@free-react-templates/bazaar`).
- [ ] Write tests first (TDD, red phase): Navbar, hero, popular, most
      rated, promo, footer + dark mode.
- [ ] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Poppins).
- [ ] Run verification gate: typecheck → lint → test:coverage (100%) →
      build → knip → fallow. Also `npm run spec:validate`.
- [ ] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main.
