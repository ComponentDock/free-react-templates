# Joule (ColorLib Electro) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the pipeline runs.
> Implementation ships later on `feat/template-joule`.

## Design notes

- **Original:** ColorLib "Electro" — free eCommerce website template
  (source: https://colorlib.com/wp/template/electro/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/electro/`
  (HTTP 200, 46.3KB) + stylesheet `css/style.css` (41.1KB). Full rendered
  DOM extracted; structure below is from the DOM + CSS tokens.
- **Structure observed (1:1):** top header (contact info + account links) →
  main header (logo + search bar with category dropdown + cart/wishlist) →
  navigation (Home, Hot Deals, Categories, New Products — white bg, red top
  border) → product carousel / New Products (tabbed: Laptops, Smartphones,
  Cameras, Accessories) → hot deal section (countdown timer + promo, grey
  bg) → Top Selling (tabbed product grid) → Newsletter (email input +
  subscribe) → footer (4 columns: About/Categories/Information/Service) →
  bottom footer (copyright).
- **Design tokens:**
  - Brand red: **#D10024** (buttons, borders, countdown, labels, prices).
  - Secondary red: **#ef233c**.
  - Dark backgrounds: **#15161D** (header/footer), **#1E1F29** (top header,
    bottom footer).
  - Light backgrounds: **#E4E7ED** (hot deal, nav border), **#FFF** (nav bar,
    product card bodies), **#FBFBFC** (body).
  - Text: **#2B2D42** (primary), **#B9BABC** (footer), **#8D99AE** (muted),
    **#333** (body).
  - Font: **Montserrat** (Google Fonts, 400/500/700), sans-serif.
  - Icons: FontAwesome (recreated with lucide-react).
  - Buttons: pill-shaped `border-radius: 40px`, `padding: 12px 30px`,
    bg `#D10024`, white text.
  - Search button: square `40px x 100px`, red bg, white text.
  - Newsletter: pill input left + pill button right (split radius).
  - Hot deal countdown: `100px` circles, `#D10024e6` bg, `border-radius: 50%`,
    white text.
  - Product labels: "sale" = white bg + red border/text; "new" = red bg +
    white text; `border: 2px solid`, `padding: 2px 10px`, `font-size: 12px`.
  - Product card: white bg, centered text, category uppercase 12px muted,
    name uppercase 14px bold, price 18px red, old price 70% muted.
  - Navigation: white bg, `border-top: 3px solid #D10024`, `border-bottom:
    2px solid #E4E7ED`.
- **Recreation name:** Joule. App folder `apps/joule`, package
  `@free-react-templates/joule`.
- **Design approach:** three-row header (top info bar + logo/search/cart +
  nav) replicates the original's dense e-commerce header; product grids use
  seeded picsum images; countdown timer uses static demo values; newsletter
  form is presentational; all images picsum-seeded
  (`picsum.photos/seed/joule-N/w/h`); Google Fonts (Montserrat) via
  `<link>` in `index.html`.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on an existing multi-section eCommerce-style app if
  available; otherwise adapt from any multi-section landing app (aurora,
  bazaar, etc.) for header/section/footer structure.

## Tasks

- [ ] Create branch `feat/template-joule` from latest origin/main.
- [ ] Scaffold app: copy simplest existing app, rename to `joule`, update
  package name to `@free-react-templates/joule`, update `vite.config.ts`
  with `injectUiSource()`, add `public/CNAME` with `joule.free.componentdock.com`,
  set `"homepage"` in `package.json`.
- [ ] Create `src/index.css` with Tailwind entry + `@theme` block defining
  brand tokens: `--color-brand: #D10024`, `--color-dark-bg: #15161D`,
  `--color-darker-bg: #1E1F29`, `--color-light-grey: #E4E7ED`,
  `--color-footer-text: #B9BABC`, `--color-muted: #8D99AE`.
- [ ] Add Google Fonts link for Montserrat (400/500/700) in `index.html`.
- [ ] Build `src/components/TopHeader.tsx` — thin bar with contact info
  (phone, email, address) and account links (currency, My Account).
- [ ] Build `src/components/MainHeader.tsx` — logo + search form (category
  dropdown + input + red Search button) + wishlist/cart with count badges.
- [ ] Build `src/components/Navigation.tsx` — horizontal nav bar with links
  (Home, Hot Deals, Categories, New Products). White bg, red top border,
  grey bottom border.
- [ ] Build `src/components/NewProducts.tsx` — section title + category tabs
  (Laptops, Smartphones, Cameras, Accessories) + 4-6 product cards in a
  responsive grid. Each card: seeded picsum image, category label, product
  name, current price (red), old price (muted), add-to-cart button. Include
  sale/new labels where appropriate.
- [ ] Build `src/components/HotDeal.tsx` — grey background section with
  circular countdown timer (Days/Hours/Mins/Secs in red circles), headline,
  promo text, "Shop now" pill button.
- [ ] Build `src/components/TopSelling.tsx` — same layout as NewProducts
  with "Top selling" title and tabbed product grid.
- [ ] Build `src/components/Newsletter.tsx` — "Sign Up for the NEWSLETTER"
  heading, pill-shaped email input + red Subscribe button.
- [ ] Build `src/components/Footer.tsx` — four-column footer (About Us,
  Categories, Information, Service) on dark bg. Bottom footer bar with
  copyright linking to Component Dock.
- [ ] Compose all sections in `src/App.tsx`: TopHeader → MainHeader →
  Navigation → NewProducts → HotDeal → TopSelling → Newsletter → Footer.
- [ ] Write tests: one `describe` per component, scenario-style `it` blocks
  matching the spec's Gherkin scenarios. Target 100% coverage.
- [ ] Run `scripts/verify-app.sh joule` — typecheck + lint + knip + fallow +
  vitest (100% coverage) + build.
- [ ] Commit as `feat: add Joule (ColorLib Electro) template`.
- [ ] Run `npm install` at repo root to register workspace in lockfile.
- [ ] Open PR, merge immediately with squash.
- [ ] Deploy via Surge: `joule.free.componentdock.com`.
