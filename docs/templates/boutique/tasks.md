# Boutique (ColorLib "Theplaza") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-boutique` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Theplaza" — free eCommerce / fashion store
  template (source: https://colorlib.com/wp/template/theplaza/). Listed in
  TEMPLATES.md under the Bootstrap category (line 513); duplicate rows at
  line 1606 under Ecommerce (56) and line 1734 under Fashion (43) — same
  template, ONE app only.
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/theplaza/`.
  DOM fetched (`/tmp/theplaza-prep/theplaza.html`, 28,815 bytes) +
  stylesheet `css/style.css` (`/tmp/theplaza-prep/theplaza-style.css`,
  34,017 bytes) + TEMPLATES.md screenshot (`theplaza-free-template.jpg`,
  viewed in browser; the live page was also screenshotted via the browser).
- **Aesthetic:** modern, minimalist, editorial fashion — lavender/purple
  gradient hero photo of a model in a yellow tracksuit with geometric
  shapes, giant white uppercase display headline; stark white content
  sections; square (no-radius) dark `#414141` buttons; tan `#b09d81`
  accents (featured borders + featured SEE MORE buttons, outline-button
  hover); light-gray `#ebebeb` / `#f2f4f9` section backgrounds; dark
  `#282828` / `#222222` footer.
- **Sliders/filters/menus are jQuery plugins in the source** (owl-carousel
  for the hero + intro sliders, mixitup for the product filter, slicknav
  for the mobile menu) — implement with React state: a 2-slide hero slider
  with arrows + dots, a 5-card intro slider (or a horizontally scrollable
  row), a state-based filter on the product grid, and a hamburger mobile
  menu with the 6 nav entries.
- **Font:** source uses `'Raleway', sans-serif` — Raleway IS a Google Font;
  load 400/500/600/700 via `<link>` in `index.html`. No font files copied.
- **Buttons:** `.site-btn` = square (no radius), 14px, weight 500, padding
  12px 30px, min-width 138px, bg `#414141`, white text. `.site-btn.btn-line`
  = transparent, 2px solid `#414141` border, `#414141` text, padding 12px
  20px; hover = bg/border `#b09d81`, white text. Featured SEE MORE variant =
  bg `#b09d81`, uppercase, min-width 162px, padding 23px 30px, positioned
  bottom-center, `bottom: -30px` (straddles the panel edge).
- **Copy is placeholder/Lorem with typos** ("pemium products", "Sholder
  bag", "usefull Links") — paraphrase freely, FIX the typos, keep the same
  kinds: nav (HOME / WOMAN / MAN / LOOKBOOK / BLOG / CONTACT), hero "from
  $19.90" + "2018 summer collection" + "Shop NOW!", intro products (Pink
  Sunglasses, Black Nighty, Yellow Shoulder Bag [NEW], Yellow Sunglasses,
  Black Shoulder Bag — $319.50 each), grid products (Long red Shirt $39.90,
  Hype grey shirt $19.50, Long sleeve jacket $59.90, Denim men shirt $32.20
  RRP 64.40 — repeated ×2 = 8 cards), blog (10 tips to dress like a queen /
  Fashion Outlet products / The little black dress just for you + "July 02,
  2018 | By maria deloreen"), footer links (Partners, Bloggers, Support,
  Terms of Use, Press; About Us, Track Orders, Returns, Jobs, Shipping,
  Blog), contact (Your Company Ltd, 1481 Creekside Lane Avila Beach, CA
  93424, +53 345 7953 32453 — PLAIN TEXT, never `tel:` literals —
  office@youremail.com).
- **Featured promos:** the "SUPER OFFER" / "25% SALE" diagonal banners are
  baked into the images — do NOT recreate them as DOM elements; keep the
  photo panels + SEE MORE buttons.

## Structure (top → bottom, single page)

1. **Header** (`.header-section`, absolute, transparent over hero,
   `z-index: 99`, `padding: 30px 33px 0`) — logo (square icon + "The Plaza"
   wordmark → rename to the Boutique brand) left; centered nav HOME / WOMAN
   / MAN / LOOKBOOK / BLOG / CONTACT (14px, uppercase, 600, white); right:
   cart icon with "2" badge + search icon. Mobile: hamburger (`nav-switch`)
   → dark dropdown with the same links. Do NOT port the `.header-normal`
   purple gradient (template-builder artifact for inner pages).
2. **Hero slider** (`.hero-section.set-bg`, bg `img/bg.jpg` — fashion
   model photo with purple/lavender treatment) — owl-carousel ×2 slides,
   each: "from $19.90" small line, 110px uppercase white h2 "2018 summer
   collection" (weight 400, line-height 0.9), square dark "Shop NOW!"
   `.site-btn`. Arrows + dots.
3. **Intro products** (`.intro-section.spad.pb-0`) — section-title: h2
   "Premium products" (source typo "pemium products" — fix; 30px uppercase
   700, centered, margin-bottom 55px) + p "We recommend" (18px 500); slider
   of 5 `.intro-item` cards: figure (image, hover scale) + `.bache` NEW
   badge (on Yellow Shoulder Bag) + `.product-info` overlay (opacity 0→1 on
   hover, padding-top 75px, centered): h5 name + $319.50 + ADD TO CART.
4. **Featured promos** (`.featured-section.spad`) — 2 `.featured-item`
   halves: full-width image, `border: 3px solid #b09d81`, absolute
   bottom-centered tan uppercase "SEE MORE" button (`bottom: -30px`).
5. **Product grid** (`.product-section.spad`) — centered tabs
   `ul.product-filter.controls`: New arrivals (.new) / Recommended (all,
   active) / Best sellers (.best); 8 `.product-item` (col-lg-3 col-md-6,
   4-col, margin-bottom 95px): figure (image, dark hover overlay) +
   `.pi-meta` absolute bottom bar (bg `#414141`: quick view + save) +
   `.product-info` (h6 name + price, one strikethrough "RRP 64.40") + ADD
   TO CART; badges NEW/SALE. "SEE MORE" `.site-btn` below the grid.
6. **Blog** (`.blog-section.spad`, bg `#f2f4f9`) — `.bgs-title` h4 "from
   the blog" (uppercase 700, margin-bottom 85px); 3 `.blog-item` rows:
   `.bi-thumb` image, `.bi-meta` date/author, `.bi-content` (h5 title +
   excerpt + `.readmore` link — 14px, `#949494`).
7. **Footer top** (`.footer-top-section.home-footer`, bg `#282828`,
   padding-top 190px, padding-bottom 50px) — 5 columns: about-widget (brand
   - blurb) + 4 `footer-widget` (col-lg-2 col-md-4 col-sm-6): "Useful
     Links" (Partners/Bloggers/Support/Terms of Use/Press), "Sitemap"
     (same 5), "Shipping & returns" (About Us/Track Orders/Returns/Jobs/
     Shipping/Blog), "Contact" (company + address + phone + email).
8. **Copyright bar** (`.footer-section`, bg `#222222`, padding 12px) —
   centered: "Copyright © <year> All rights reserved | This template is
   made with ♥ by **Component Dock**" → https://www.componentdock.com/
   (replaces the source's Colorlib credit).

## Implementation tasks (for the implementer stream)

- [x] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/boutique`; `npm install` at repo root; CNAME +
      homepage `boutique.free.componentdock.com`
- [x] `src/index.css` `@theme` tokens: brand `#b09d81`, ink `#414141`,
      muted `#909090`, surface `#ebebeb`, blog `#f2f4f9`, footer `#282828`,
      footerbar `#222222`, paper `#ffffff`; Google Fonts `<link>` (Raleway
      400/500/600/700)
- [x] `src/data.ts` — nav links, hero slides (2), intro products (5), grid
      products (8, with filter tags new/best + badges), blog posts (3),
      footer widget links + contact data
- [x] Components: `Navbar` (desktop + hamburger mobile menu, cart badge +
      search icons), `Hero` (2-slide slider with arrows/dots), `IntroProducts`
      (5-card slider + hover overlay), `FeaturedPromos` (2 panels with
      straddling SEE MORE buttons), `ProductGrid` (filter tabs + 8 cards +
      hover bar), `Blog`, `Footer` (5 columns + copyright bar)
- [x] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (filter interaction, slider navigation, mobile menu toggle)
- [x] Subject-screen picsum seeds (hero fashion bg, 5 intro products, 2
      featured, 8 grid, 3 blog thumbs) — contact-sheet browser_vision
      screening; pinned in the spec (hero `boutique-hero7`/`boutique5`,
      products/flat-lays, featured editorial, blog editorial)
- [x] `bash scripts/verify-app.sh boutique` green; PR with source, preview
      URL, tokens, deviations (React sliders / state filter / hamburger /
      Component Dock credit); squash-merge immediately

## Verification notes / pitfalls

- Footer/hero phone number: plain text only — no `tel:` literals (the
  toolchain's secret-scan rewrites them).
- `aria-current` on the active nav link: `aria-current={cond ? 'true' :
undefined}`; also mark the active product-filter tab with
  `aria-pressed`/`aria-current`.
- Hero headline renders uppercase via CSS `text-transform: uppercase` — the
  source DOM text is lowercase; keep the same technique.
- Fix the source's copy typos ("pemium products" → "Premium products",
  "Sholder bag" → "Shoulder bag", "usefull Links" → "Useful Links").
- Owl-carousel/mixitup/slicknav are all jQuery — do NOT port them; React
  state + lucide icons only.
- The "SUPER OFFER" / "25% SALE" diagonal banners live inside the promo
  images — do not re-create them as DOM/CSS elements.
