# Template: Vogue (Fashion E-commerce Template)

## Purpose

Vogue is a single-page fashion e-commerce landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Violet" fashion online-store website template (see
TEMPLATES.md, Bootstrap section, line 527; duplicate rows at lines 1221
[Business section] and 1609 [Ecommerce section] — mark EVERY copy `[x]` when
done), built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> **Naming note:** the natural name "violet" is already taken by the shipped
> recreation of ColorLib _Sierra_ (`apps/violet`, line 83). The NEW name for
> this source is **Vogue** (single lowercase word, no collision with `apps/`
> or existing spec folders).

The reference is a clean, editorial fashion store ("Violet | Template"): a
white 104px header (logo image reading "Violet Template" — recreate as a text
logo "Vogue" + small "Online Store" caption — centered main menu Home · Shop
(dropdown: Product Page · Shopping Card · Check out) · About · Blog · Contact,
right-side icon cluster search / user / cart-with-count-badge-2 + "Register |
Sign in"), a grey-blue `#B0BCC2` announcement bar rotating three promos ("Free
shipping on orders over $30 in USA" · "20% Student Discount" · "30% off on
dresses. Use code: 30OFF"), a full-width hero slider (3 grayscale fashion
photos; centered giant "2019" 110px + "Lookbook." 96px + white-outline
pill "See More"; circular grey nav arrows; dot pagination bottom-left), a
3-column feature row (line icons + "Free shipping" / "100% Money back" /
"Online support 24/7"), a lookbook collage of 3 image boxes with Futura-style
letter-spaced overlay captions ("2019 Party · Jewelry · Trend Allert",
"2019 Trend · Footwear · Bold & Black", "2019 Party · Collection · Trend
Allert"), a "Latest Products" grid (filter tabs All · Dresses · Bags · Shoes ·
Accesories; 8 product cards with status pills new/sale/popular, name + price),
a "2019 #lookbook" split (left text + "See More" button in `#B0BCC2`, right
tall fashion photo with "fashion" watermark), a brand-logo carousel strip (5
ghosted logos at 10% opacity, full on hover), and a dark `#262626` footer
(round newsletter subscribe form + 4 link columns + a `#222121` social bar
with icon+label links — instagram · pinterest · facebook · twitter · youtube ·
tumblr — and a copyright bar).

Brand colors: near-black `#1e1e1e` (headings, prices, nav text, "new" badge),
grey-blue `#B0BCC2` (announcement bar, hero arrows, lookbook + newsletter
buttons), pink `#FE439F` ("sale" badge), light grey `#D0D7DB` ("popular"
badge, button borders), muted greys `#727272`/`#787878`/`#838383` (secondary
text), footer `#262626` + social bar `#222121`.

## Design tokens (from `https://preview.colorlib.com/theme/violet/`)

- **Brand dark:** `#1e1e1e` — `.section-title h2` (60px 700), `.features-ads
h4`, `.single-box-item .box-text h2` (48-60px), nav links + hover underline,
  `.p-status` ("new"), `.single-product-item .product-text p` (18px 700
  price), `.site-btn` text + border, hero dot active, header cart badge.
- **Grey-blue accent:** `#B0BCC2` — `.header-info` announcement bar bg,
  hero owl-nav arrow circles (68px, white icon), `.lookbok-left .primary-btn
.look-btn` bg, `.newslatter-form button` bg (310px, white text).
- **Pink sale:** `#FE439F` — `.p-status.sale` badge bg.
- **Light grey:** `#D0D7DB` — `.p-status.popular` bg, `.primary-btn` border
  variant on the first features-box ("See More"), cart coupon input border.
- **Hero dots:** `#969D9E` (inactive) / `#1e1e1e` (active), 11px circles.
- **Secondary text:** `#727272` (features p, product name h6), `#787878`
  (lookbook p), `#838383` (product filter tabs, large-box trend-year),
  `#5b5b5b` (trend-alert captions on photos), `#969D9E`.
- **Footer:** `#262626` (`.footer-section`), `#222121` (`.social-links-warp`),
  white headings, links white at `opacity: .5`, social icons `#d7d7d7`,
  labels `#9f9fa0`; newsletter input border `#454747`, input text `#535353`
  (italic).
- **Fonts (Google Fonts `<link>` in `index.html`):**
  - `"Montserrat"` (300/400/500/600/700) — body + UI + all headings
    (`body { font-family: "Montserrat", sans-serif; }`).
  - The source self-hosts `FuturaBT-Book` for the letter-spaced display
    captions (`.trend-alert`, `.trend-year`). It is NOT on Google Fonts —
    substitute with **Jost** (400/500, geometric Futura-like) or reuse
    Montserrat with wide `letter-spacing`; document whichever is chosen.
- **Buttons (pill `border-radius: 50px`, uppercase 14px 600, padding 16px
  40px, 2px border):**
  - `.primary-btn` — transparent bg, `border: 2px solid #fff`, white text
    (hero "See More"); features-box variant swaps border to `#D0D7DB` and
    text to `#1e1e1e`; `.look-btn` gets `background: #B0BCC2`.
  - `.site-btn` — transparent bg, `border: 2px solid #1e1e1e`, text `#1e1e1e`
    (generic secondary CTA).
  - Newsletter button — `background: #B0BCC2; border: 2px solid #B0BCC2`;
    width 310px (full-width on mobile); input is a 53px pill with 2px
    `#454747` border, transparent bg, italic text, placeholder "Your email
    address".
  - `.p-status` product badge — absolute top-left pill `padding: 5px 16px`,
    12px white, `border-radius: 50px`.
- **Section paddings:** `.spad` = 100px top/bottom (`.latest-products`
  overrides to 55px/65px; `.features-section` bottom 0; `.logo-section`
  70px/120px; `.footer-section` bottom 0 with `.newslatter-form`
  `margin-bottom: 90px`).

## Design reference (replication findings)

- **Original:** ColorLib "Violet" — fashion e-commerce online-store template
  (source: https://colorlib.com/wp/template/violet/). Listed in TEMPLATES.md
  line 527 (Bootstrap section); duplicate rows at lines 1221 (Business) and
  1609 (Ecommerce) — same source, ONE implementation (line 527 is the claim
  row; mark ALL THREE `[x]` after merge). Screenshot:
  `violet-free-template.jpg` (1200×946, reviewed visually in the browser:
  white header with "VIOLET" wordmark + "ONLINE STORE" caption, centered
  uppercase nav, dark-grey-blue promo strip, full-width B&W clothing-rack
  hero with huge "2019 / Lookbook." + white pill "SEE MORE", circular hero
  arrow, three feature columns with line icons, top of the lookbook collage
  grid below; footer not visible in the crop).
- **Live preview URL:** https://preview.colorlib.com/theme/violet/ (title
  "Violet | Template"). HTML saved to `/tmp/violet-preview.html` (39 KB —
  slide content is JS-injected by owl carousel; all three slides share the
  same "2019 Lookbook." markup); stylesheet
  `https://preview.colorlib.com/theme/violet/css/style.css` saved to
  `/tmp/violet-style.css` (37 KB).
- **Header** `header.header-section` — height 104px, padding 38px 24px 45px;
  `.inner-header .logo` left (source image `img/logo.png` reads "Violet
  Template" — recreate as TEXT logo "Vogue" + "Online Store" caption, no
  asset needed); `.main-menu` centered-right (`float: right; margin-right:
150px`): Home · Shop (`.sub-menu` dropdown: Product Page · Shopping Card ·
  Check out) · About · Blog · Contact — 16px 500 `#1e1e1e`, hover/active
  underline 2px `#1e1e1e`; `.header-right` (line-height 30px): search icon,
  user icon, cart icon with 18px count badge "2" (border 2px `#D0D7DB`,
  11px `#1e1e1e`), "Register · Sign in" links. `#preloder` black loader
  exists but is optional.
- **Announcement bar** `div.header-info` — `background: #B0BCC2; padding:
10px 45px`, white 14px 500 text; rotating promos: "Free shipping on orders
  over $30 in USA" · "20% Student Discount" · "30% off on dresses. Use code:
  30OFF" (carousel; static stack or simple rotation OK).
- **Hero slider** `section.hero-slider` / `.hero-items.owl-carousel` — 3
  `.single-slider-item.set-bg` slides (`data-setbg="img/slider-1..3.jpg"`,
  grayscale fashion photos), `padding: 270px 0`, centered: `h1` "2019"
  (110px 700 white) + `h2` "Lookbook." (96px 400 white, mb 28px) +
  `a.primary-btn` "See More" (white border pill). `.owl-nav` arrows: 68px
  circles `#B0BCC2` white 35px icon, prev at left 60px (next hidden).
  `.owl-dots` absolute left 110px bottom 62px, 11px `#969D9E` circles,
  active `#1e1e1e`. Entrance animation (top 50px → 0, staggered .4/.6/.8s)
  optional.
- **Features** `section.features-section.spad` (padding-bottom 0) —
  `.features-ads`: 3 `.single-features-ads` columns (`.first` margin-top
  39px, `.second` 8px): icon image (`img/icons/f-delivery.png` truck, coin,
  headset — use lucide `Truck`, `Coins`/`BadgeDollarSign`, `Headset`) + `h4`
  22px 700 `#1e1e1e` ("Free shipping" / "100% Money back" / "Online support
  24/7") + lorem `p` 14px 500 `#727272`.
- **Lookbook collage** `.features-box` — 3 stacked image boxes
  (`img/f-box-1..3.jpg`):
  - `.first-box` — `.box-text` absolute right 60px top 106px: `.trend-alert`
    "2019 Party · Jewelry · Trend Allert" (FuturaBT-Book 22px, ls 2px,
    uppercase `#1e1e1e`) + `.primary-btn` "See More" (border `#D0D7DB`, text
    `#1e1e1e`).
  - `.second-box` — `.box-text` left 56px top 150px: `.trend-year` "2019
    Trend" (white) + `.trend-alert` "Footwear" (16px, ls 4px, `#5b5b5b`) +
    "Bold & Black".
  - `.large-box` — `.box-text` left 125px top 60px: `.trend-year` "2019
    Party" (`#838383`) + `h2` "Collection" (60px 700) + `.trend-alert`
    "Trend Allert" (22px, ls 2px, `#5b5b5b`).
- **Latest Products** `section.latest-products.spad` (55px/65px) —
  `.product-filter`: `.section-title` h2 "Latest Products" (60px 700
  `#1e1e1e`) + `.product-controls` tabs All · Dresses · Bags · Shoes ·
  Accesories (14px 500 `#838383`, active `#1e1e1e`, mr 42px); grid
  `.row` of 8 `.single-product-item` (`col-lg-3 col-sm-6` + `mix` filter
  classes e.g. `all dresses bags`): `figure` (mb 40px, overflow hidden) with
  `img` (`img/products/img-1..8.jpg`) + `.p-status` pill top-left (new
  `#1e1e1e` / sale `#FE439F` / popular `#D0D7DB`); `.product-text` centered:
  `h6` name 15px `#727272` + `p` price 18px 700 `#1e1e1e`. Products (keep
  names/prices, images become picsum): Green Dress with details $22.90 (new)
  · Yellow Maxi Dress $25.90 (sale) · One piece bodysuit $19.90 (new) · Blue
  Dress with details $35.50 (popular) — repeated ×2 (8 cards).
- **Lookbook** `section.lookbok-section.spad` — left `.lookbok-left`
  (padding-top 105px): `.section-title` h2 "2019" + "#lookbook" (60px 700),
  lorem `p` 14px 500 `#787878`, `a.primary-btn.look-btn` "See More"
  (`background: #B0BCC2`); right `.lookbok-pic`: tall photo
  (`img/lookbok.jpg`) with "fashion" watermark text.
- **Brand logos** `.logo-section` (70px 120px) — 5 `.logo-item` columns
  (`img/logos/logo-1..5.png`), height 120px, `opacity: .1` → full on hover.
  Recreate as 5 text-wordmark tiles (e.g. "Vogue", "Maison", "Atelier",
  "Runway", "Boutique" — or keep 5 ghosted text logos) — no copied assets.
- **Footer** `footer.footer-section.spad` (`#262626`, padding-bottom 0):
  - `.newslatter-form` (mb 90px): form with input (full-width 53px pill, 2px
    `#454747` border, transparent bg, italic 14px 600 `#535353`, placeholder
    "Your email address", padding-left 30px) + button "Subscribe to our
    newsletter" (310px, bg/border `#B0BCC2`, white uppercase 14px 600,
    radius 50px, absolute right; full-width stacked on mobile).
  - `.footer-widget` (mb 40px): 4 `.single-footer-widget` columns (mb 30px):
    `h4` 26px white mb 44px + `ul li` 14px 500 white `opacity: .5`,
    line-height 36px. Columns: "About us" (About Us · Community · Jobs ·
    Shipping · Contact Us) · "Customer Care" (Search · Privacy Policy · 2019
    Lookbook · Shipping & Delivery · Gallery) · "Our Services" (Free Shipping
    · Free Returnes · Our Franchising · Terms and conditions · Privacy
    Policy) · "Information" (Payment methods · Times and shipping costs ·
    Product Returns · Shipping methods · Conformity of the products).
  - `.social-links-warp` (`#222121`, padding 46px 0): 6 `.social-links` a —
    30px icon (`#d7d7d7`, lucide has NO brand icons → inline SVG simple-icons
    paths) + 12px uppercase label `#9f9fa0`, margin-right 88px: instagram ·
    pinterest · facebook · twitter · youtube · tumblr.
  - Bottom bar: "Copyright © All rights reserved | This template is made with
    ❤ by Colorlib" — reword for Vogue: "© 2026 Vogue. All rights reserved." +
    "Made with ❤" linking to `https://www.componentdock.com/` (mandatory, no
    ColorLib credit).

## Requirements

### Requirement: Header with logo, nav and account tools

The system SHALL render a white header with a text brand, centered nav with a
Shop dropdown, icon tools and register/sign-in links.

#### Scenario: Desktop header

- **GIVEN** the Vogue app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be white, ~104px tall, with the text logo "Vogue"
  and a small "Online Store" caption on the left
- **AND** the nav SHALL show Home · Shop · About · Blog · Contact in 16px
  `#1e1e1e` (Home active) with a 2px underline on hover/active
- **AND** hovering Shop SHALL reveal a dropdown with Product Page · Shopping
  Card · Check out
- **AND** the right side SHALL show search, user and cart icons with a "2"
  count badge, plus "Register · Sign in" links

#### Scenario: Mobile header

- **GIVEN** the header is rendered
- **WHEN** the viewport is narrower than the desktop breakpoint
- **THEN** the nav SHALL collapse behind a hamburger menu (slicknav-style)
  that opens a stacked panel with `aria-expanded` reflecting the open state
  and a close control

### Requirement: Announcement bar

The system SHALL render a grey-blue promo strip above the hero.

#### Scenario: Rotating promos

- **GIVEN** the announcement bar is rendered
- **WHEN** it loads
- **THEN** it SHALL have background `#B0BCC2` with white 14px text
- **AND** it SHALL cycle through "Free shipping on orders over $30 in USA",
  "20% Student Discount" and "30% off on dresses. Use code: 30OFF" (static
  stack or simple rotation)

### Requirement: Hero slider

The system SHALL render a full-width hero slider with giant typography and a
pill CTA.

#### Scenario: Hero slide

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL show at least one full-width fashion-photo slide
  (`picsum.photos/seed/vogue-hero-<n>` — SCREEN the seed for a
  clothing/fashion subject) with dark overlay so white text reads
- **AND** the slide SHALL center "2019" (110px 700 white) and "Lookbook."
  (96px 400 white) plus a white-outline pill "See More" button
  (`border: 2px solid #fff`, radius 50px, uppercase)
- **AND** circular `#B0BCC2` prev/next arrows and dot pagination (11px,
  `#969D9E`, active `#1e1e1e`) SHALL navigate the slides

### Requirement: Feature row

The system SHALL render three feature columns with icons.

#### Scenario: Feature columns

- **GIVEN** the features section is rendered
- **WHEN** it loads
- **THEN** three columns SHALL show line icons (lucide `Truck`, `Coins`,
  `Headset`), 22px 700 `#1e1e1e` titles "Free shipping" · "100% Money back" ·
  "Online support 24/7" and 14px `#727272` descriptions

### Requirement: Lookbook collage

The system SHALL render a 3-box image collage with letter-spaced captions.

#### Scenario: Collage boxes

- **GIVEN** the lookbook collage is rendered
- **WHEN** it loads
- **THEN** the first box SHALL overlay right-side caption "2019 Party ·
  Jewelry · Trend Allert" (letter-spaced uppercase) with a "See More" pill
  (border `#D0D7DB`, text `#1e1e1e`)
- **AND** the second box SHALL overlay "2019 Trend" + "Footwear" + "Bold &
  Black" captions
- **AND** the large box SHALL overlay "2019 Party" + "Collection" (60px) +
  "Trend Allert"

### Requirement: Latest products

The system SHALL render a filterable product grid with status badges.

#### Scenario: Product grid

- **GIVEN** the latest-products section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Latest Products" (60px 700 `#1e1e1e`)
- **AND** filter tabs SHALL read All · Dresses · Bags · Shoes · Accesories
  (14px 500 `#838383`, active `#1e1e1e`)
- **AND** eight product cards SHALL render in a 4-column grid, each with a
  photo, a status pill top-left ("new" `#1e1e1e` / "sale" `#FE439F` /
  "popular" `#D0D7DB`, white 12px, radius 50px), a 15px `#727272` name and an
  18px 700 `#1e1e1e` price
- **AND** products SHALL match: Green Dress with details $22.90 (new) ·
  Yellow Maxi Dress $25.90 (sale) · One piece bodysuit $19.90 (new) · Blue
  Dress with details $35.50 (popular), repeated for 8 cards
- **AND** clicking a filter tab SHALL narrow the visible cards to that
  category (simple client-side filter; jsdom-safe implementation)

### Requirement: Lookbook split

The system SHALL render a two-column lookbook section.

#### Scenario: Lookbook content

- **GIVEN** the lookbook section is rendered
- **WHEN** it loads
- **THEN** the left column SHALL show "2019" + "#lookbook" (60px 700), a
  14px `#787878` paragraph and a "See More" pill with `#B0BCC2` background
- **AND** the right column SHALL show a tall fashion photo with a "fashion"
  watermark text

### Requirement: Brand logo strip

The system SHALL render a ghosted brand-logo strip.

#### Scenario: Logo tiles

- **GIVEN** the logo section is rendered
- **WHEN** it loads
- **THEN** five wordmark tiles SHALL sit in a row at 10% opacity
- **AND** hovering a tile SHALL bring it to full opacity

### Requirement: Dark footer

The system SHALL render a dark footer with newsletter form, link columns,
socials and copyright.

#### Scenario: Newsletter form

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** a 53px pill input with placeholder "Your email address" (2px
  `#454747` border, italic text) SHALL pair with a "Subscribe to our
  newsletter" button (`#B0BCC2` bg, white uppercase, radius 50px) that shows
  a success state on submit

#### Scenario: Footer columns

- **GIVEN** the footer widget area loads
- **THEN** four columns SHALL render — "About us" (About Us · Community ·
  Jobs · Shipping · Contact Us), "Customer Care" (Search · Privacy Policy ·
  2019 Lookbook · Shipping & Delivery · Gallery), "Our Services" (Free
  Shipping · Free Returnes · Our Franchising · Terms and conditions · Privacy
  Policy) and "Information" (Payment methods · Times and shipping costs ·
  Product Returns · Shipping methods · Conformity of the products) — as 26px
  white headings with 14px white links at 50% opacity

#### Scenario: Social bar and copyright

- **GIVEN** the footer's lower area loads
- **THEN** a `#222121` bar SHALL show six social links (instagram ·
  pinterest · facebook · twitter · youtube · tumblr) as 30px icons +
  uppercase labels, using inline SVG brand icons
- **AND** the bottom bar SHALL read "© 2026 Vogue. All rights reserved." with
  a "Made with ❤" credit line linking to `https://www.componentdock.com/`
  (mandatory, no ColorLib credit)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Vogue app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header + announcement bar + hero in the
  banner landmark, the features + collage + products + lookbook + logos
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Vogue — Fashion E-commerce Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (nav
  collapses to the hamburger menu, hero type scales, feature columns and
  product grid collapse to 1–2 columns, collage boxes stack, footer columns
  stack, newsletter button goes full-width)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/vogue`
      (`scripts/verify-app.sh vogue` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: header (white 104px, text logo "Vogue" + "Online
      Store" caption, centered nav with Shop dropdown, search/user/cart
      icons + "2" badge, Register · Sign in, mobile hamburger), announcement
      bar (`#B0BCC2` + 3 rotating promos), hero slider (giant "2019 /
      Lookbook." + white pill "See More", `#B0BCC2` arrows, dot pagination),
      features (3 icon columns), lookbook collage (3 boxes with
      letter-spaced captions), latest products (5 filter tabs + 8 cards with
      new/sale/popular pills + names + prices), lookbook split (left text +
      `#B0BCC2` "See More", right photo + "fashion" watermark), logo strip (5
      ghosted wordmarks), footer (`#262626` + pill newsletter form + 4 link
      columns + `#222121` social bar + copyright) match the Violet preview
      1:1.
- [ ] Design tokens in `@theme`: brand dark `#1e1e1e`; accent `#B0BCC2`;
      sale pink `#FE439F`; light grey `#D0D7DB`; secondary `#727272` /
      `#787878` / `#838383` / `#5b5b5b`; footer `#262626`; social bar
      `#222121`; Montserrat + Jost via Google Fonts `<link>` in
      `index.html`.
- [ ] Buttons: pill radius 50px, uppercase 14px 600, padding 16px 40px;
      hero "See More" = white 2px border; lookbook "See More" = `#B0BCC2`
      bg; newsletter button = `#B0BCC2` bg 310px; product badges = 50px
      pills.
- [ ] Placeholder images use `picsum.photos/seed/vogue-<n>/<w>/<h>` (3 hero
      slides — SCREEN for clothing/fashion subjects, 3 collage boxes, 8
      product shots, 1 lookbook tall photo); icons from lucide-react (search,
      user, shopping-bag/shopping-cart, truck, coins, headset, menu, x);
      brand socials (instagram, pinterest, facebook, twitter, youtube,
      tumblr) as inline SVGs; no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Violet"), preview URL
      (https://preview.colorlib.com/theme/violet/), design tokens, and what
      differs (name, text logo instead of image logo, placeholder images,
      paraphrased copy, single page only).
