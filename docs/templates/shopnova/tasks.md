# Shopnova (ColorLib "Karma") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-shopnova` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Karma" — free ecommerce/online-shop website template
  (page `<title>` "Karma Shop"; source:
  https://colorlib.com/wp/template/karma/). Listed in TEMPLATES.md under
  **Ecommerce (56)** at line 1585.
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/karma/`.
  DOM fetched to `/tmp/karma.html` (full HTML) + stylesheet `css/main.css`
  (fetched from the same base URL) + TEMPLATES.md screenshot
  (`karma-free-template.jpg`, viewed in browser). Screenshot cross-checks the
  DOM: white sticky header with logo + nav + bag/search icons, fullscreen hero
  product carousel with "Nike New Collection!" headline + circular add-to-bag
  button, 4-column features row, asymmetric category image grid, product
  carousel with cards showing strikethrough prices, exclusive deal countdown
  section, brand logos, deals-of-the-week grid, light footer.
- **Aesthetic:** bold, modern, sporty ecommerce. Warm yellow-to-orange
  gradient (`#ffba00` → `#ff6c00`) as the brand accent. Clean white cards,
  pill-shaped buttons, circular add-to-bag buttons, Poppins headings (weight
  500), Roboto body text (weight 400). Product hover: action icons slide up
  with gradient background.
- **Key colors:** brand gradient `#ffba00` → `#ff6c00`; body text `#777777`;
  headings `#222222`; page bg `#fff`; `.l-through` strikethrough `#ffba00`.

## Structure (top → bottom, single page)

1. **Header** (`.sticky-header`) — `.main_box` nav: logo left (recreate as
   "Shopnova" wordmark; no asset copy), nav links center: Home / Shop ▾ /
   Blog ▾ / Pages ▾ / Contact. Shop dropdown: Shop Category, Product Details,
   Product Checkout, Shopping Cart, Confirmation. Blog dropdown: Blog, Blog
   Details. Pages dropdown: Login, Tracking, Elements. Right: bag icon
   (`.ti-bag`) + search toggle (`.lnr-magnifier`). Search bar: full-width
   input with brand gradient bg, close button. **Scroll:** sticky header
   behavior. **Mobile:** hamburger → collapsible menu (source uses Bootstrap
   collapse).

2. **Hero** (`.banner-area`) — fullscreen owl-carousel. Each slide: col-lg-5
   text + col-lg-7 image. Text: h1 "Nike New Collection!" + lorem paragraph
   + `.add-bag` (circular `.add-btn` with ti-bag icon + "Add to Bag" text).
   Image: `img-fluid` product shot (use `picsum.photos/seed/shopnova-hero`).
   Carousel arrows/nav on sides.

3. **Features** (`.features-area .section_gap`) — 4 `.single-features`
   (col-lg-3 col-md-6 col-sm-6): icon image + h6 title + p description.
   Cards: Free Delivery / Return Policy / 24/7 Support / Secure Payment.
   Icons: use `lucide-react` (Package, RotateCcw, Headphones, ShieldCheck).

4. **Category** (`.category-area`) — asymmetric grid (col-lg-8 left 2×2
   + col-lg-4 right tall). 5 `.single-deal` cards: overlay + image +
   `.deal-details` h6 title on hover. Titles: "Sneaker for Sports",
   "Sneaker for Sports", "Product for Couple", "Sneaker for Sports",
   "Sneaker for Sports". Use `picsum.photos/seed/shopnova-cat-<n>`.

5. **Products** (`.owl-carousel.active-product-area .section_gap`) — two
   tabbed slides: "Latest Products" and "Coming Products", each with 8
   `.single-product` cards (col-lg-3 col-md-6): image + `.product-details`
   (h6 name, `.price` with current + `.l-through` old price) + `.prd-bottom`
   (4 `.social-info` icons: ti-bag "add to bag", lnr-heart "Wishlist",
   lnr-sync "compare", lnr-move "view more"). Use lucide equivalents:
   ShoppingBag, Heart, RefreshCw, Move. Implement as a simple tabbed view
   or carousel (note in PR).

6. **Exclusive Deal** (`.exclusive-deal-area`) — fluid container, 50/50 split.
   Left: `.exclusive-left` with countdown clock (`.clockinner` blocks:
   Days / Hours / Mins / Secs with h1 number + smalltext label), heading
   "Exclusive Hot Deal Ends Soon!", description, `.primary-btn` "Shop Now".
   Right: `.exclusive-right` with product image carousel (price + "Add to
   Bag" overlay). Implement countdown as a static display or simple animated
   timer (note in PR).

7. **Brands** (`.brand-area .section_gap`) — 5 `.single-img` brand logos in
   a row (col). Use placeholder SVGs or `picsum.photos/seed/shopnova-brand-<n>`
   (note in PR: logos are placeholder).

8. **Deals of the Week** (`.related-product-area .section_gap_bottom`) —
   `.section-title` "Deals of the Week" + subtitle. Left col-lg-9: 9
   `.single-related-product` (col-lg-4 col-md-4 col-sm-6, d-flex): thumbnail
   img + `.desc` (title link + price with current + strikethrough). Right
   col-lg-3: sidebar promo image (`.ctg-right`). Use
   `picsum.photos/seed/shopnova-deal-<n>`.

9. **Footer** (`.footer-area .section_gap`) — 4 columns:
   - col-lg-3: About Us (h6 + description text)
   - col-lg-4: Newsletter (h6 + "Stay update with our latest" + email input
     + `.click-btn` submit with fa-arrow-right icon; **no backend** →
     validate + show success state, note in PR)
   - col-lg-3: Instagram Feed (h6 + `.instafeed` 8-square grid, use
     `picsum.photos/seed/shopnova-insta-<n>`)
   - col-lg-2: Follow Us (h6 + "Let us be social" + 4 social icon links:
     Facebook, Twitter, Dribbble, Behance — use lucide equivalents)
   - `.footer-bottom`: copyright + "Made with ♥ by Component Dock"
     (Component Dock links https://www.componentdock.com/)

## Implementation tasks (implementer)

1. Scaffold `apps/shopnova` from the simplest existing app (e.g. `apps/coinly`),
   rename package to `@free-react-templates/shopnova`, CNAME
   `shopnova.free.componentdock.com`, homepage
   `https://shopnova.free.componentdock.com`.
2. `src/index.css` `@theme`: `--color-brand-start: #ffba00`,
   `--color-brand-end: #ff6c00`, `--color-brand: #ffba00`,
   `--color-body: #777777`, `--color-ink: #222222`; Poppins + Roboto
   Google Fonts `<link>` in `index.html`.
3. Components (one per section, TDD 100%): `Header` (sticky nav + dropdowns
   + search toggle + mobile menu), `Hero` (fullscreen carousel), `Features`
   (4-card row), `Category` (asymmetric grid), `Products` (tabbed/carousel
   with product cards), `ExclusiveDeal` (countdown + product slider),
   `Brands` (logo row), `Deals` (related products grid + sidebar promo),
   `Footer` (newsletter form + instagram grid + socials + Component Dock).
4. Section order: header → hero → features → category → products → exclusive
   deal → brands → deals of the week → footer.
   Images: `https://picsum.photos/seed/shopnova-<n>/<w>/<h>`.
5. Run `bash scripts/verify-app.sh shopnova`; PR with source slug + preview URL
   - tokens + deviations (carousel implementation, countdown static/animated,
     newsletter no backend, placeholder images/logos, logo wordmark).
