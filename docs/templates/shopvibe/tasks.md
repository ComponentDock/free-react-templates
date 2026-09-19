# Shopvibe (ColorLib Listashop) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-shopvibe`. Recreation name: **Shopvibe** (NEW name —
> the ColorLib source keeps its name "Listashop").

## Source mapping

- **ColorLib item:** "Listashop" (TEMPLATES.md line 1587; section
  "## Ecommerce (56)"). The `wp/template/listashop/` slug appears exactly
  ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/listashop/
- **Preview URL — REACHABLE (verified this run):**
  **`https://preview.colorlib.com/theme/listashop/`**
  (HTTP 200, ~29KB HTML).
- **Preview CSS:** `css/style.css` (~98KB, hand-written Bootstrap 4 overrides
  + custom styles). Fonts: Google Fonts `Roboto` (300,400,500,700) +
  `Poppins` (200,300,400,500,600,700) via `@import url()`.
  Icons: Font Awesome 4 (`fa-*`) + Linearicons (`lnr-*`) — REPLACE with
  lucide-react.

## Reference research (done — do not redo)

### Screenshot (listashop-free-template.jpg)

Visual design from screenshot:
- Browser chrome frame, white page
- Top bar: thin white bar with "support@colorlib.com" + "Welcome to Catalouge"
  text on left, social icons (FB, Twitter, Dribbble, Behance) on right
- Navbar: white bg, logo (red pin/tag icon + "ListAshop" text), nav links
  (HOME in red/active, SHOP, BLOG, PAGES, CONTACT), cart + search icons
- Hero: light blue-gray (#e8f0f2) full-width bg, left side has large dark
  heading "Georgia Helmet Collections!" + gray description paragraph +
  white rounded-corner "View Collection" button; right side has large
  product image (colorful helmet) on dark (#04091e) rounded card
- Below hero: two side-by-side promo cards with "Hot Deals of this Month"
  text overlay on product images, semi-transparent background
- Clean, professional e-commerce aesthetic; minimal color palette
  (red accent, blue-gray hero, white/gray body)

### Live preview DOM analysis

Section order confirmed from HTML (10 sections):
1. `header.header_area` > `.top_menu` + `.main_menu` (navbar)
2. `section.home_banner_area` (hero: h3 headline, p, .white_bg_btn CTA,
   .halemet_img product image)
3. `section.feature_product_area` > `.hot_product_inner` (2 promo cards)
   + `.feature_product_inner` (featured products carousel)
4. `section.timer_area` (countdown timer + main_btn)
5. `section.feature_product_area.latest_product_area` (8-item product grid)
6. `section.clients_logo_area` (brand logos carousel)
7. `section.most_product_area` (4-col most-searched grid)
8. `footer.footer-area` (4 columns: about, newsletter, instagram, social)

### CSS token extraction

Key design values from `css/style.css`:
- Body: `font-family: "Roboto", sans-serif; font-size: 14px; color: #777`
- Headings: `font-family: "Roboto", sans-serif; font-weight: 500; color: #222`
- Brand/accent: `#c5322d` (red) — active nav, hover states, buttons, links
- Hero bg: `#e8f0f2` (light blue-gray)
- Timer bg: `#fafaff` (very light purple-gray)
- Hero CTA: `.white_bg_btn` — white bg, `border-radius: 5px`
- Primary button: `.main_btn` — `#c5322d` bg, white text, `border-radius: 45px`
- Product hover: dark overlay `rgba(34,34,34,0.8)`, icons go white;
  cart icon bg `rgba(197,50,45,0.8)` on hover
- Card images: `img-fluid` responsive with `loading="lazy"`
- Footer: white bg, `.footer_title` headings, newsletter input + arrow button

## Tasks for implementer

### Component breakdown (section order, 1:1 fidelity)

1. **TopMenu** — thin bar, flex row, contact email left, social icons right.
   Background white, text gray (#777), hover red (#c5322d).
2. **Navbar** — sticky white navbar with logo, nav links, dropdown menus
   (Shop, Blog, Pages have submenus), cart icon, search icon.
   Active link in red (#c5322d). Mobile hamburger menu.
3. **Hero** — full-width bg #e8f0f2, container with 2-col layout:
   left (5 cols) h3 headline + p + white_bg_btn; right (7 cols) product
   image on dark (#04091e) rounded card.
4. **HotDeals** — 2 equal-width promo cards side by side. Each: product
   image with semi-transparent overlay + heading "Hot Deals of this Month"
   + "Shop Now" link. Inner layout: `.main_box` wrapper.
5. **FeaturedProducts** — section heading + carousel. Each product card:
   image container with heart/cart hover icons (overlay), product name (h4),
   price (h5). Carousel = horizontal scroll or CSS scroll-snap.
6. **DealTimer** — centered heading "Exclusive Hot Deal Ends Soon!",
   subtitle, countdown (days/hours/minutes/seconds boxes), red pill
   "Shop Now" button. Background #fafaff.
7. **LatestProducts** — section heading + 4-col responsive grid (8 items).
   Same card style as FeaturedProducts (image + hover icons + name + price).
8. **TopBrands** — section heading "Top Brands of this Month" + row/carousel
   of 5 brand logo images. Simple image display.
9. **MostSearched** — section heading + 4-col grid. Each column: 3 items
   with thumbnail (small square) + product name (h4) + price (h3) in a
   media-object layout.
10. **Footer** — 4-col row: About Us (text), Newsletter (p + email input +
    arrow button), Instagram Feed (8 thumbnails in flex-wrap grid),
    Follow Us (social icons). Bottom row: centered copyright + Component Dock link.

### Design notes

- All images → `https://picsum.photos/seed/shopvibe-<n>/<w>/<h>` (deterministic)
- Icons → lucide-react (Heart, ShoppingCart, Search, Facebook, Twitter, etc.)
- Font → Google Fonts `<link>` for Roboto (300,400,500,700) in index.html
- Product cards: hover effect reveals icon row overlay on image
- Countdown timer: static display (no real JS timer needed for landing page)
- Newsletter: form with email input, no actual submission
- Mobile responsive: hamburger nav, grid collapses to fewer columns
- Brand color #c5322d in Tailwind @theme as custom color
