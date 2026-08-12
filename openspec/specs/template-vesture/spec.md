# Template: Vesture (Ecommerce — Fashion Store)

## Purpose

Vesture is a single-page fashion e-commerce storefront template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ashion" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a classic fashion storefront with a white background, a red
(`#ca1515`) accent, and Montserrat + Cookie (script) typography: a header
with centered nav and cart/search/wishlist widgets, a split categories grid
(one large "Women's fashion" tile + a 2×2 tile grid), a "New product"
product grid with filter tabs and hover action icons, a full-width banner
slider with big script headlines, a three-column "Hot Trend / Best seller /
Feature" trend section, a split discount band with a countdown, a four-item
services row, an Instagram strip, and a four-widget footer. Vesture
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Ashion" — fashion e-commerce website template
  (source: https://colorlib.com/wp/template/ashion/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ashion/
  (HTTP 200, full rendered DOM + `css/style.css` (79KB) + Bootstrap 5.3.8 +
  Font Awesome 7.1.0 + `css/elegant-icons.css` + glightbox extracted
  2026-08-12 during prep). The TEMPLATES.md screenshot
  (`ashion-free-template.jpg`, 1200×946) was also viewed (browser) and
  confirms the design: a feminine, minimalist, airy storefront — white
  background, soft pastel category tiles (peach, baby blue, pink), black
  uppercase text and black rectangular "SHOP NOW" buttons on the tiles,
  script-font logo and hero headlines, red accents, and a bold "NEW
  PRODUCT" grid with filter tabs.
- **Section order (1:1):**
  1. Header (`.header`, white; `.header__logo` left with script wordmark,
     `.header__menu` centered nav — Home, Women's, Men's, Shop, Pages
     (dropdown: Product Details, Shop Cart, Checkout, Blog Details), Blog,
     Contact; `.header__right__widget` right — login/register text links,
     search icon, wishlist heart, cart bag with count badge "2"). Mobile:
     offcanvas slide-in menu with the same links + widgets.
  2. Categories (`.categories`, `container-fluid`): left large tile
     `.categories__item.categories__large__item` (tall, pastel bg + model
     photo) — h1 "Women's fashion" + paragraph + "Shop now" link; right
     2×2 grid of 4 tiles `.categories__item.set-bg` (314px, pastel photo
     backgrounds): h4 "Men's fashion" + "358 items" + Shop now, "Kid's
     fashion" / "273 items", "Cosmetics" / "159 items", "Accessories" /
     "792 items".
  3. Product section (`product spad`, white): centered h4 "New product"
     - filter tabs (All, Women, Men, Kids, Accessories, Cosmetics —
       screenshot-verified) + 8 product cards in a 4-col grid:
       `.product__item__pic.set-bg` (square photo, hover overlay with 3
       round icons: eye / heart / bag), optional `.label` tag (e.g. "Sale";
       screenshot also shows NEW / SALE / OUT OF STOCK variants), then
       `.product__item__text` — h6 name link, 4-star `.rating`, price
       `$ 59.0` (some `$ 49.0`). Names: Buttons tweed blazer, Flowy striped
       skirt, Cotton T-Shirt, Slim striped pocket shirt, Fit micro corduroy
       shirt, Tropical Kimono, Contrasting sunglasses, Water resistant
       backpack.
  4. Banner slider (`.banner.set-bg`, full-width photo, 3 slides,
     auto-advancing): each slide `.banner__text` centered — eyebrow line
     ("The Chloe Collection" / "Summer Essentials" / "New Arrivals"), h1
     script headline 80px (".banner__text h1 { font-family: 'Cookie';
     font-size: 80px; color: #111111 }") — "The Project Jacket", "Linen
     Breeze Dress", "Urban Street Style" — and a CTA link ("Shop now" /
     "Explore" / "Discover").
  5. Trend section (`trend spad`, white): 3 columns `col-lg-4` —
     `trend__content` titled "Hot Trend", "Best seller", "Feature" — each
     with 3 horizontal items `.trend__item` (photo left `trend__item__pic`
     - text right): h6 name, star rating, price. Items: Chain bucket bag,
       Pendant earrings, Cotton T-Shirt / Cotton T-Shirt, Zip-pockets
       pebbled tote briefcase, Round leather bag / Bow wrap skirt, Metallic
       earrings, Flap cross-body bag.
  6. Discount section (`.discount`, split): left `.discount__pic` photo
     (discount.jpg), right `.discount__text` (bg **#f4f4f4**, height
     390px, padding 75px 90px 50px, text-center): script "Discount"
     (Cookie) + script "Sale" accent, h2 "Summer 2030", countdown
     `.discount__countdown` — 4 `.countdown__item` boxes: **22** Days /
     **18** Hour / **46** Min / **05** Sec — and a "Shop now" button
     (red pill).
  7. Services (`services spad`): 4 items `.services__item` (col-lg-3,
     icon left + text right): Free Shipping — "For all order over $99"
     (fa-truck), Money Back Guarantee — "If good have Problems"
     (fa-money-bill), Online Support 24/7 — "Dedicated support"
     (fa-headset), Payment Secure — "100% secure payment"
     (fa-headphones).
  8. Instagram strip (`.instagram`, container-fluid): 6 tiles
     `.instagram__item.set-bg` (col-lg-2, 320px height) each with a
     centered Instagram icon overlay.
  9. Footer (`.footer`, white, padding-top 55px): row — `.footer__about`
     (logo + short blurb + 4 circular social icons `#e1e1e1`), "Quick
     links" (About, Blogs, Contact, FAQ), "Account" (My Account, Orders
     Tracking, Checkout, Wishlist), "Newsletter" (email input +
     Subscribe button); bottom row `.footer__bottom`: payment icons (6
     `.payment-icon` badges) + copyright "Copyright © <year> All rights
     reserved | This template is made with ♥ by ColorLib".
  10. Search overlay (`.search-model`): full-screen modal with centered
      search input + close button.
- **Design tokens extracted from `style.css` + computed styles:**
  - Primary brand **#ca1515** (red) — `.site-btn` background, product
    `.label` background, prices/link hover accents, countdown emphasis.
  - Headings/text **#111111**; body **#444444**; secondary **#666666**;
    meta **#888888**; light section band **#f4f4f4** (discount text bg)
    and **#f5f5f5** (misc light bands); white everywhere else.
  - Fonts: **"Montserrat", sans-serif** (body/nav/headings, weights
    400/500/600/700) + **"Cookie", cursive** (script accents: logo
    wordmark, banner h1 80px, "Discount"/"Sale" script text) — Google
    Fonts via `<link>` in `index.html`.
  - Buttons `.site-btn`: bg **#ca1515**, white, uppercase, weight 600,
    font-size 14px, padding **12px 30px**, **border-radius 50px** (pill);
    category-tile "Shop now" links are plain text links (black, uppercase)
    per the screenshot.
  - Section rhythm: `.spad { padding: 100px 0 }`-style vertical padding;
    `.categories__item` 314px height; `.instagram__item` 320px height;
    `.discount__text` 390px height.
- **Visual design (screenshot `ashion-free-template.jpg`):** feminine,
  minimalist e-commerce aesthetic — white page, pastel photo tiles
  (peach / baby blue / pink) in the categories grid, script logo +
  script hero headlines, black uppercase nav and tile buttons, red accent
  on prices/labels/buttons, clean product cards with model photos and
  small tag badges (NEW / SALE / OUT OF STOCK), 4-col product rows.
- **Recreation decisions:** all photos → seeded picsum placeholders
  (`picsum.photos/seed/vesture-<n>/<w>/<h>`); elegant-icons / Font
  Awesome → lucide-react (Search, Heart, ShoppingBag, User, Eye; Truck,
  Banknote, Headset, ShieldCheck; Instagram, Facebook, Twitter, Pinterest
  for footer socials; Star for ratings); Montserrat + Cookie via Google
  Fonts `<link>`; banner slider → auto-advancing fade/crossfade slides;
  countdown → live ticking countdown (or static numbers per the
  reference); mobile nav → offcanvas slide-in panel; search icon opens a
  full-screen search overlay; product hover → 3 round icon buttons
  (eye/heart/bag); payment icons → small bordered text badges; footer
  keeps the "made with ♥ by ColorLib" credit; product-filter tabs filter
  the 8 cards client-side; original copy paraphrased keeping the same
  content kinds; no assets copied.

Vesture lives in `apps/vesture` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header navigation

The system SHALL render a white header with a script logo, a centered
navigation menu with a Pages dropdown, and right-side widget icons
(search, wishlist, cart with a count badge).

#### Scenario: Header content

- **GIVEN** the Vesture page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the store name "Vesture" as a script-font
  logo on the left
- **AND** it SHALL show centered nav links: Home, Women's, Men's, Shop,
  Pages, Blog, and Contact
- **AND** it SHALL show right-side widgets: login/register links, a search
  icon, a wishlist heart icon, and a shopping-bag icon with a cart-count
  badge

#### Scenario: Pages dropdown

- **GIVEN** the header is rendered
- **WHEN** the user activates the Pages link
- **THEN** a dropdown SHALL show its sub-links (Product Details, Shop
  Cart, Checkout, Blog Details)

#### Scenario: Mobile offcanvas menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user opens the menu
- **THEN** a slide-in panel SHALL show the same nav links and widget icons

### Requirement: Categories grid

The system SHALL render a split categories section: one large
"Women's fashion" tile on the left and a 2×2 grid of category tiles on
the right, each with a heading, an item count (or blurb), and a "Shop now"
link.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** the large left tile SHALL show the heading "Women's fashion", a
  short paragraph, and a "Shop now" link
- **AND** the right grid SHALL show four tiles: "Men's fashion" (358
  items), "Kid's fashion" (273 items), "Cosmetics" (159 items), and
  "Accessories" (792 items), each with a "Shop now" link
- **AND** every tile SHALL show a photo background

### Requirement: New product grid

The system SHALL render a "New product" section with filter tabs and a
grid of eight product cards, each with a photo, an optional tag label, a
name, a rating, a price, and hover action icons.

#### Scenario: Product content

- **GIVEN** the page is rendered
- **WHEN** the product section is displayed
- **THEN** it SHALL show the heading "New product" with filter tabs (All,
  Women, Men, Kids, Accessories, Cosmetics)
- **AND** it SHALL show eight product cards with photo, name, four-star
  rating, and price (e.g. "Buttons tweed blazer — $ 59.0", "Flowy
  striped skirt — $ 49.0", "Cotton T-Shirt — $ 59.0", "Slim striped
  pocket shirt — $ 59.0", "Fit micro corduroy shirt — $ 59.0", "Tropical
  Kimono — $ 49.0", "Contrasting sunglasses — $ 59.0", "Water resistant
  backpack — $ 49.0")
- **AND** at least one card SHALL show a red tag label (e.g. "Sale")

#### Scenario: Product hover actions

- **GIVEN** a product card is displayed
- **WHEN** the user hovers over its photo
- **THEN** the card SHALL reveal three round icon buttons (view / heart /
  bag)

#### Scenario: Product filtering

- **GIVEN** the product section is displayed
- **WHEN** the user activates a filter tab
- **THEN** the product cards SHALL filter client-side to that category
  (or visibly re-sort), with the active tab highlighted

### Requirement: Banner slider

The system SHALL render a full-width banner slider with at least three
auto-advancing slides, each with an eyebrow line, a large script-font
headline, and a call-to-action link.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner is displayed
- **THEN** it SHALL show slides with script headlines such as "The Project
  Jacket" ("The Chloe Collection" eyebrow, "Shop now" CTA), "Linen Breeze
  Dress" ("Summer Essentials", "Explore"), and "Urban Street Style"
  ("New Arrivals", "Discover")
- **AND** the slides SHALL auto-advance

### Requirement: Trend section

The system SHALL render a trend section with three columns ("Hot Trend",
"Best seller", "Feature"), each listing three horizontal product items
with a photo, name, rating, and price.

#### Scenario: Trend content

- **GIVEN** the page is rendered
- **WHEN** the trend section is displayed
- **THEN** it SHALL show the three column headings "Hot Trend", "Best
  seller", and "Feature"
- **AND** each column SHALL list three items (photo left, name + rating +
  price right), e.g. "Chain bucket bag", "Pendant earrings", "Cotton
  T-Shirt" / "Cotton T-Shirt", "Zip-pockets pebbled tote briefcase",
  "Round leather bag" / "Bow wrap skirt", "Metallic earrings", "Flap
  cross-body bag" — all priced $ 59.0

### Requirement: Discount countdown band

The system SHALL render a split discount band with a photo on the left and
a light-grey (#f4f4f4) panel on the right containing script accents, a
"Summer 2030" heading, a "Sale 50%" highlight, a four-part countdown
(days/hours/minutes/seconds), and a "Shop now" button.

#### Scenario: Discount content

- **GIVEN** the page is rendered
- **WHEN** the discount band is displayed
- **THEN** it SHALL show script text "Discount" and "Sale", the heading
  "Summer 2030", and a "Sale 50%" highlight
- **AND** it SHALL show a countdown with four labeled boxes (Days, Hour,
  Min, Sec) containing numeric values
- **AND** it SHALL show a "Shop now" button

### Requirement: Services row

The system SHALL render a row of four service items, each with an icon, a
title, and a short description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services row is displayed
- **THEN** it SHALL show four items: "Free Shipping" (For all order over
  $99), "Money Back Guarantee" (If good have Problems), "Online Support
  24/7" (Dedicated support), and "Payment Secure" (100% secure payment),
  each with a matching icon

### Requirement: Instagram strip

The system SHALL render a full-width strip of six square photo tiles,
each with a centered Instagram icon overlay.

#### Scenario: Instagram content

- **GIVEN** the page is rendered
- **WHEN** the Instagram strip is displayed
- **THEN** it SHALL show six equal-width photo tiles in a single row
- **AND** each tile SHALL show a centered Instagram icon

### Requirement: Footer

The system SHALL render a white footer with four widgets (about + social
icons, Quick links, Account, Newsletter) and a bottom row with payment
badges and a copyright line crediting ColorLib.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the store logo with a short blurb and four
  circular social icons
- **AND** it SHALL show a "Quick links" column (About, Blogs, Contact,
  FAQ) and an "Account" column (My Account, Orders Tracking, Checkout,
  Wishlist)
- **AND** it SHALL show a "Newsletter" widget with an email input and a
  Subscribe button
- **AND** the bottom row SHALL show payment badges and a copyright line
  crediting the template source with a heart icon

### Requirement: Search overlay

The system SHALL open a full-screen search overlay when the header search
icon is activated, with a centered search input and a close control.

#### Scenario: Search modal

- **GIVEN** the page is rendered
- **WHEN** the user activates the search icon
- **THEN** a full-screen search overlay SHALL appear with a centered input
  and a close button
- **AND** activating the close control SHALL hide the overlay

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Vesture app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, categories, products, banner
  slider, trend, discount, services, Instagram strip, and footer in order
- **AND** the document title SHALL be "Vesture — Fashion Store Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/vesture`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/vesture`)
- [ ] Section order matches the reference 1:1 (header → categories → products → banner slider → trend → discount → services → instagram → footer)
- [ ] Design tokens from the reference used in `@theme` (primary #ca1515, text #111111/#444444/#666666/#888888, light band #f4f4f4; Montserrat + Cookie Google Fonts)
- [ ] Header: white, script logo, centered nav + Pages dropdown, search/heart/bag widgets with cart badge, mobile offcanvas menu
- [ ] Categories: large "Women's fashion" tile + 2×2 tiles (Men's/Kid's/Cosmetics/Accessories with item counts) + "Shop now" links
- [ ] Products: "New product" heading + filter tabs, 8 cards with photo/label/name/rating/price, hover icon actions
- [ ] Banner slider: 3+ auto-advancing slides, script headline ~80px, eyebrow + CTA
- [ ] Trend: 3 columns (Hot Trend / Best seller / Feature) × 3 horizontal items
- [ ] Discount: split band, #f4f4f4 panel, script "Discount"/"Sale", "Summer 2030", "Sale 50%", 4-part countdown, "Shop now" button
- [ ] Services: 4 items with icons (Free Shipping, Money Back Guarantee, Online Support 24/7, Payment Secure)
- [ ] Instagram: 6-tile full-width strip with IG icon overlays
- [ ] Footer: about + social circles, Quick links, Account, Newsletter, payment badges, ColorLib credit
- [ ] Search overlay opens/closes from the header search icon
