# Template: Emporio (Ecommerce / Fashion Shop)

## Purpose

Emporio is a single-page fashion e-commerce / online-shop website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Capitalshop" website template design (source:
https://colorlib.com/wp/template/capitalshop/), built under a DIFFERENT name
(Emporio — Italian for "emporium / department store", a fashion-shopping word
that keeps the store spirit of "Capitalshop" while being a new, original
name) per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Capitalshop" — free responsive Bootstrap 5 fashion
  e-commerce / online shop website template (source:
  https://colorlib.com/wp/template/capitalshop/). TEMPLATES.md lines 557
  (Bootstrap 5), 1565 (Ecommerce), 1701 (Fashion) — three duplicate `- [ ]`
  rows for the same source (dup-row trap: none of them ships an app, so this
  is a REAL unprepped item, not an orphan).
- **Demo DOM analyzed:** REACHABLE. `https://preview.colorlib.com/theme/capitalshop/`
  returns HTTP 200 (curl verified 2026-08-13, 75.4 KB HTML). Page title:
  "Shop | eCommers". This is a FULL-fidelity reference: section order, copy,
  buttons all taken from the live DOM. Token source: `assets/css/style.css`
  (100.9 KB, the page's own stylesheet; the many extra colors like `#1f2b7b`,
  `#4cd3e3`, `#f4e700` belong to OTHER bundled page styles in the same file —
  the tokens below are the ones actually used by the index page).
- **Screenshot:** `capitalshop-free-template.jpg` (1200×946, browser vision
  verified) — matches the live DOM: clean minimalist fashion-shop landing
  page, vibrant red `#FF2020` accent over white/black surfaces. Top to
  bottom: dark utility strip (About Us / Privacy / FAQ / Careers left; search,
  wishlist, track order, socials right), white main header ("Capital Shop"
  logo with red shopping-bag icon, centered nav Home / Men / Women / Baby
  Collection [red "New" badge] / Pages / Blog / Contact, right search-user-
  cart icons with red badge), black promo bar ("Sale Up To 50% Biggest
  Discounts… Shop Now"), full-width hero photo of a male model in a denim
  jacket with red cursive "Fashion Sale" script + black "Minimal Menz Style"
  headline + "SHOP NOW" button (carousel arrows), three square category
  cards (Men's / Women's / Baby Fashion photo cards with white overlay
  titles), "Trending This Week" header with Men/Women/Baby/Fashion filter
  tabs (product grid starts below the fold in the screenshot).
- **Visual design (from live preview + browser vision):** minimalist fashion
  e-commerce aesthetic on white. Primary brand color is vibrant red
  **`#FF2020`** (hero script accent, pill "Shop Now" buttons, sale prices,
  subscribe button, "New" badge, hover accents) over near-black charcoal
  **`#292621`** (hero h1, dark "Read More" buttons, category-card gradient)
  and white surfaces. Headings/nav/buttons are **Jost**; body copy is
  **Roboto**; the hero "Fashion Sale" script is **Clicker Script** (cursive).
  Dark footer **`#171613`**; testimonial band cream **`#F3EAD8`**; blog band
  light grey **`#F6F6F6`**. The demo brands itself "Capitalshop"; the
  recreation uses the NEW name **Emporio**.

- **Structure (1:1, section order — from the live DOM):**
  1. Header (`div.header-area`): (a) `div.header-top.d-none.d-sm-block`
     (white bg, padding 8px 0, border-bottom 1px `#edeff2`) — LEFT links
     About Us / Privacy / FAQ / Careers, RIGHT `div.header-info-right`:
     "My Wishlist" + "Track Your Order" links and `ul.header-social` with
     FIVE social icons (facebook, instagram, twitter, linkedin, youtube);
     (b) `div.header-mid.header-sticky` (white bg, padding 15px 0, flex
     justify-between align-center) — LEFT logo (`assets/img/logo/logo.png` →
     recreated as an "Emporio" text wordmark with a red shopping-bag icon
     mark), CENTER `div.main-menu` nav: Home / Men / Women / Baby Collection
     (with a tiny red "New" badge `::after` content:"New", bg `#FF2020`,
     radius 4px) / Pages (`li.has-children` dropdown: Login, Cart, Product
     Details, Product Checkout) / Blog (dropdown: Blog, Blog Element, Blog
     Details) / Contact, RIGHT icon links: search, user, cart with a red
     count badge; (c) `div.header-bottom.text-center` — black promo strip:
     "Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer" +
     "Shop Now" link.
  2. Hero slider (`section.slider-area` → `div.slider-active`): TWO slides
     `div.single-slider.slider-bg1/2.slider-height.d-flex.align-items-center`
     (cover background images `assets/img/hero/h1_hero1.jpg` /
     `h1_hero2.jpg`, min-height 700px, bg center/cover) — each
     `div.hero-caption.text-center`: `span` "Fashion Sale" (Clicker Script
     cursive 50px `#FF2020`, display block, mb 1px), `h1` "Minimal Menz
     Style" (55px Jost 500 `#292621`, lh 1.3, mb 2px), `p` lorem paragraph,
     "Shop Now" `a.btn` (red pill). Semi-transparent carousel arrows
     (prev/next) on the sides.
  3. Category cards (`section.items-product1.pt-30`) — THREE image cards
     (col, `assets/img/gallery/items1.jpg` men / `items2.jpg` women /
     `items3.jpg` baby): photo + `::before` bottom gradient overlay
     (height 40%, `linear-gradient(to bottom, rgba(41,38,33,0) 0%,
#292621 100%)`), `div.cat-cap` absolute bottom 40px: `h5` white 24px
     600 "Men's Fashion" / "Women's Fashion" / "Baby Fashion" + "Shop Now"
     link white 16px 300; card hover → `transform: scale(1.02)`.
  4. Trending This Week (`section.latest-items.section-padding.fix`,
     padding-top 95px, padding-bottom 100px, text-align center) —
     `div.container` row: `div.nav-tittle` `h2` "Trending This Week" +
     `div.nav.nav-tabs` filter tabs Men (active) / Women / Baby / Fashion
     (Bootstrap nav-tabs); FOUR `div.tab-pane` panes, each with a products
     carousel `div.latest-items-active` of TWELVE `div.properties.pb-30`
     cards (`div.properties-card`): `div.properties-img` (photo link
     `assets/img/gallery/latest1..12.jpg` + `div.socal_icon` overlay with
     THREE icon links revealed on hover: ti-shopping-cart, ti-heart,
     ti-zoom-in) + `div.properties-caption.properties-caption2`: `h3` a
     product name (all "Cashmere Tank + Bag" in the demo) + `div.properties-footer`
     `div.price`: `<span>$98.00 <span>$120.00</span></span>` (sale price +
     strikethrough).
  5. Testimonial (`div.testimonial-area.testimonial-padding`, bg `#F3EAD8`,
     padding 80px 0) — `div.h1-testimonial-active` carousel with
     `div.single-testimonial.text-center` slides: `div.testimonial-caption`:
     `h2` "Customer Testimonial", `p` "Everybody is different, which is why
     we offer styles for every body.", `div.testimonial-founder`: avatar img
     (`assets/img/gallery/founder-img.png`), name "Petey Cruiser", role
     "Designer at Colorlib" (recreation MUST drop the Colorlib reference →
     e.g. "Petey Cruiser — Designer").
  6. You May Like (`section.latest-items.section-padding.fix` #2) —
     `div.section-tittle.text-center.mb-40` `h2` "You May Like" + products
     carousel (FOUR `div.properties` cards, `assets/img/gallery/latest5..8.jpg`,
     same card kind: name + `$98.00` / strikethrough `$120.00`).
  7. Latest News (`section.home-blog`, bg `#F6F6F6`, padding-top 80px,
     padding-bottom 29px) — `div.section-tittle` `h2` "Latest News" + THREE
     `div.single-blogs.mb-30` cards: `div.blog-img` (photo
     `assets/img/gallery/blog1..3.jpg`), `div.blogs-cap`: `p` tag "Fashion
     Tips" + `h4` a title ("What Curling Irons Are The Best Ones",
     "Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes", repeat) + excerpt
     - "Read More" `a.btn_1` (dark `#292621` bg, uppercase, padding
       15px 47px; hover → transparent bg + 1px `#292621` border + dark text).
  8. Services strip (`div.categories-area` inside `main`, after the blog) —
     FOUR `div.single-cat.mb-50.text-center` (col-lg-3): `div.cat-icon` svg
     icon (`assets/img/icon/services1..4.svg`) + `div.cat-cap`: `h5`
     "Fast & Free Delivery" / "Secure Payment" / "Money Back Guarantee" /
     "Online Support" + `p` "Free delivery on all orders" (demo repeats the
     same sub-line on all four).
  9. Footer (`footer` → `div.footer-wrapper`, bg `#171613`):
     (a) `section.subscribe-area` inside `div.footer-area.footer-padding`
     (padding 63px 0 60px) — `div.row.justify-content-between.subscribe-padding`
     (padding-bottom 40px, margin-bottom 60px, border-bottom 1px
     `rgba(255,255,255,0.14)`): LEFT `div.subscribe-caption` `h3`
     "Subscribe Newsletter" (white 24px Jost 500) + `p` "Subscribe newsletter
     to get 5% on all products." (white 15px), CENTER form: `input` (white
     bg, height 60px, width 74%, radius 0, padding 15px 24px) + `button.subscribe-btn`
     "Subscribe" (bg `#FF2020`, height 60px, width 24%, radius 0, white
     16px 500, margin-left 5px), RIGHT `div.footer-social` (facebook,
     instagram, youtube icons); (b) `div.footer-area.footer-padding` →
     `div.row.justify-content-between` with FIVE columns: (1) col-xl-3
     `div.single-footer-caption.mb-50` → `div.footer-logo.mb-35` logo img
     (`assets/img/logo/logo2_footer.png` → recreated as white "Emporio"
     wordmark), (2) `div.footer-tittle` `h4` "Shop Men" — Clothing Fashion /
     Winter / Summer / Formal / Casual, (3) `h4` "Shop Women" — same five,
     (4) `h4` "Baby Collection" — same five, (5) `h4` "Quick Links" — Track
     Your Order / Support / FAQ / Carrier / About / Contact Us; (c)
     `div.footer-bottom-area` → `div.footer-copy-right.text-center`:
     "Copyright © <year> All rights reserved | This template is made with ♥
     by Colorlib" — recreation replaces the ColorLib credit with the
     mandatory **Component Dock** footer link
     (https://www.componentdock.com/) per repo conventions.

- **Design tokens (extracted from `assets/css/style.css`):**
  - Brand red **`#FF2020`** — `.btn` (hero "Shop Now") bg, `.subscribe-btn`
    bg, `.hero-caption span` script color, `.price` sale color, "New" nav
    badge bg, `.browse-btn`/"Shop Now" hover accents, header icon hover
    (68 uses in the sheet — the dominant brand color).
  - Dark charcoal **`#292621`** — `.hero-caption h1` (55px), `.btn_1` bg
    (dark "Read More"), `.properties-caption h3`/product name color,
    category-card `::before` gradient bottom (`rgba(41,38,33,0) → #292621`),
    `.btn_1:hover` border + text.
  - Footer background **`#171613`** (`.footer-wrapper`); footer headings
    white 18px; footer links **`#BBB9B5`** 16px; footer hover `#FF2020`.
  - Testimonial band **`#F3EAD8`** (`.testimonial-area`, cream/beige);
    blog band **`#F6F6F6`** (`.home-blog`).
  - Header top border **`#edeff2`**; body/card copy **`#57667e`** /
    **`#797979`**; strikethrough price **`#CEBD9C`** (`.price span span`).
  - White surfaces: `#fff` — `.header-mid`, `.properties-card`,
    `.header-top`.
  - Fonts — body **"Roboto"** 16px (sans-serif); headings/nav/buttons
    **"Jost"** (hero h1 55px 500, nav 16px 600, section h2 34px 500);
    hero script **"Clicker Script"** cursive 50px. Google Fonts via `<link>`
    in `index.html` (Roboto 300–700 + Jost 300–600 + Clicker Script).
  - Buttons: `.btn` = red `#FF2020` bg, white text, Jost 16px 500,
    padding 22px 32px, **radius 35px (pill)**, lh 1. `.btn_1` = `#292621`
    bg, white uppercase 14px 500, padding 15px 47px, radius 0; hover →
    transparent bg + 1px `#292621` border + `#292621` text. `.subscribe-btn`
    = red bg, height 60px, radius 0 (SQUARE, not pill), padding 13px 24px,
    white 16px 500. `.browse-btn` (promo strip) = underlined link.
  - Hero — cover bg image (h1_hero1/2.jpg), min-height 700px, center/cover;
    `span` Clicker Script 50px `#FF2020`; `h1` 55px Jost 500 `#292621`
    lh 1.3 mb 2px; content centered (`text-center`), vertically centered
    (flex align-items-center).
  - Category cards — `::before` bottom gradient `rgba(41,38,33,0) → #292621`
    height 40%; caption absolute bottom 40px; hover scale(1.02).
  - Product cards — `div.properties` (bg `#fff`, position relative,
    overflow hidden); `.socal_icon` overlay (absolute, left 0, transition
    .4s, three icon links: shopping-cart / heart / zoom-in) revealed on
    image hover (opacity 0 → 1); `.price` sale `#FF2020` + strikethrough
    `#CEBD9C`.
  - Section rhythm — `section-padding` 120px 0 (100/70 responsive);
    `latest-items` pt 95 pb 100; `home-blog` pt 80 pb 29; `testimonial-padding`
    80px 0; `footer-padding` 63px 0 60px; `items-product1` pt-30.
  - Tabs — `.nav-tabs` (Bootstrap): `a.nav-link` (Men active default);
    active tab `#FF2020`-style accent (match the demo's Bootstrap
    nav-tabs look).

- **Recreation decisions:** all photos → picsum placeholders (seeds
  `emporio-hero-1/2`, `emporio-cat-1..3`, `emporio-prod-1..12`,
  `emporio-maylike-1..4`, `emporio-blog-1..3`, `emporio-avatar`); the demo's
  repeated product name "Cashmere Tank + Bag" → lightly paraphrased distinct
  product names (same kind: tank/bag/coat/etc. + `$98.00`/strikethrough
  `$120.00` prices); logo → "Emporio" text wordmark with a red shopping-bag
  icon mark; themify/fontawesome icons → lucide-react (ShoppingCart, Heart,
  Search, User, ZoomIn, and INLINE SVG for the social brand icons —
  Facebook/Instagram/Twitter/Linkedin/Youtube are NOT in lucide-react);
  owl/slick carousels (hero, products, testimonial) → CSS scroll-snap or a
  small state-driven carousel, no new dependency; footer ColorLib credit →
  mandatory Component Dock link; "Designer at Colorlib" → "Designer";
  brand copy "Capitalshop" → "Emporio".

Emporio lives in `apps/emporio` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Header with utility top bar, main nav and promo strip

The system SHALL render a three-part header: a white utility top bar with
links and social icons, a white main bar with logo, centered nav (two
dropdowns), and right-side icons, and a dark promo strip with a "Shop Now"
link.

#### Scenario: Header layout

- **GIVEN** the Emporio page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show the links About Us, Privacy, FAQ, and
  Careers on the left
- **AND** the top bar SHALL show "My Wishlist", "Track Your Order", and
  five social icons on the right
- **AND** the main bar SHALL show the "Emporio" wordmark on the left
- **AND** the nav SHALL show the links Home, Men, Women, Baby Collection,
  Pages, Blog, and Contact
- **AND** "Baby Collection" SHALL carry a small red "New" badge
- **AND** search, user, and cart icons SHALL be shown on the right
- **AND** the promo strip SHALL read "Sale Up To 50% Biggest Discounts.
  Hurry! Limited Period Offer" with a "Shop Now" link

#### Scenario: Pages and Blog dropdowns

- **GIVEN** the nav is displayed
- **WHEN** the user hovers or focuses the Pages link
- **THEN** a dropdown SHALL open with the items Login, Cart, Product
  Details, and Product Checkout
- **AND** hovering or focusing the Blog link SHALL open a dropdown with
  Blog, Blog Element, and Blog Details

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the nav SHALL collapse behind a hamburger toggle that reveals
  the same links in a mobile menu

### Requirement: Hero slider with two fashion slides

The system SHALL render a full-width hero carousel with two slides, each
showing a red cursive eyebrow, a large dark headline, subcopy, and a red
pill "Shop Now" button.

#### Scenario: Hero slide content

- **GIVEN** the hero slider is displayed
- **WHEN** the page loads
- **THEN** the first slide SHALL show the script eyebrow "Fashion Sale" in
  red Clicker Script, the headline "Minimal Menz Style" in 55px Jost
  `#292621`, a short paragraph, and a red pill "Shop Now" button
- **AND** a second slide SHALL exist with the same content kind
- **AND** the slides SHALL be navigable (carousel controls or scroll)

### Requirement: Three fashion category cards

The system SHALL render three photo cards (Men's, Women's, Baby Fashion),
each with a dark gradient overlay, a white title, and a "Shop Now" link.

#### Scenario: Category cards

- **GIVEN** the category section is displayed
- **WHEN** the page loads
- **THEN** three cards SHALL be shown side by side, each with a photo, a
  dark bottom gradient, a white title ("Men's Fashion", "Women's Fashion",
  "Baby Fashion"), and a white "Shop Now" link
- **AND** hovering a card SHALL scale it up slightly (1.02)

### Requirement: Trending This Week with filter tabs and product cards

The system SHALL render a "Trending This Week" section with Men/Women/Baby/
Fashion filter tabs and a products carousel whose cards show a photo,
hover-revealed action icons, a product name, and a sale price with a
strikethrough original price.

#### Scenario: Trending section content

- **GIVEN** the Trending This Week section is displayed
- **WHEN** the page loads
- **THEN** the heading "Trending This Week" SHALL be shown with tabs Men
  (active), Women, Baby, and Fashion
- **AND** a carousel of product cards SHALL be shown, each with a photo, a
  product name, and a price like "$98.00" in red with a strikethrough
  "$120.00"
- **AND** hovering a product image SHALL reveal cart, heart, and zoom icon
  links
- **AND** switching tabs SHALL swap the visible product pane

### Requirement: Testimonial band

The system SHALL render a cream `#F3EAD8` testimonial band with a heading,
copy, and an author line that does not reference ColorLib.

#### Scenario: Testimonial content

- **GIVEN** the testimonial band is displayed
- **WHEN** the page loads
- **THEN** the heading "Customer Testimonial" SHALL be shown with the copy
  "Everybody is different, which is why we offer styles for every body."
- **AND** an avatar, the name "Petey Cruiser", and a role line (e.g.
  "Designer") SHALL be shown — with no Colorlib reference

### Requirement: You May Like carousel

The system SHALL render a second products carousel under a "You May Like"
heading, using the same product-card kind as the Trending section.

#### Scenario: You May Like content

- **GIVEN** the You May Like section is displayed
- **WHEN** the page loads
- **THEN** the heading "You May Like" SHALL be shown
- **AND** a carousel of product cards SHALL be shown with photos, names,
  and `$98.00` / strikethrough `$120.00` prices

### Requirement: Latest News blog cards

The system SHALL render a light-grey `#F6F6F6` blog section with a "Latest
News" heading and three blog cards, each with a photo, a "Fashion Tips" tag,
a title, an excerpt, and a dark "Read More" button.

#### Scenario: Blog cards

- **GIVEN** the Latest News section is displayed
- **WHEN** the page loads
- **THEN** three blog cards SHALL be shown, each with a photo, a "Fashion
  Tips" tag, a title, an excerpt, and a dark uppercase "Read More" button
- **AND** the "Read More" button SHALL turn into a dark-outline button on
  hover

### Requirement: Services strip with four features

The system SHALL render a four-column services strip with an icon, a title,
and a sub-line for each of: Fast & Free Delivery, Secure Payment, Money Back
Guarantee, and Online Support.

#### Scenario: Services strip

- **GIVEN** the services strip is displayed
- **WHEN** the page loads
- **THEN** four centered feature columns SHALL be shown, each with an icon,
  a title (Fast & Free Delivery, Secure Payment, Money Back Guarantee,
  Online Support), and the sub-line "Free delivery on all orders"

### Requirement: Dark footer with newsletter, link columns and Component Dock credit

The system SHALL render a dark `#171613` footer with a subscribe area
(heading, email form with red square button, social icons), a link-column
area (logo + Shop Men / Shop Women / Baby Collection / Quick Links), and a
copyright bar linking Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** the subscribe area SHALL show "Subscribe Newsletter" with the
  copy "Subscribe newsletter to get 5% on all products.", an email input, a
  red square "Subscribe" button, and social icons
- **AND** the link area SHALL show the "Emporio" wordmark and the columns
  Shop Men, Shop Women, and Baby Collection (each: Clothing Fashion, Winter,
  Summer, Formal, Casual) plus Quick Links (Track Your Order, Support, FAQ,
  Carrier, About, Contact Us)
- **AND** the copyright bar SHALL credit Component Dock with a link to
  https://www.componentdock.com/

### Requirement: Red pill and dark square button system

The system SHALL style primary buttons as red pills with white text, dark
"Read More" buttons as charcoal squares that outline on hover, and the
subscribe button as a red square.

#### Scenario: Button appearance and hover

- **GIVEN** a primary "Shop Now" button is displayed
- **WHEN** the page loads
- **THEN** the button SHALL have a `#FF2020` background, white text, Jost
  16px 500, padding 22px 32px, and a 35px border radius
- **AND** a "Read More" button SHALL show a `#292621` background with
  uppercase 14px text and turn into a 1px `#292621` outline with dark text
  on hover
- **AND** the "Subscribe" button SHALL be `#FF2020` with a square (0)
  border radius and 60px height

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Emporio app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero slider, category cards,
  Trending This Week, testimonial, You May Like, Latest News, services
  strip, and footer in order
- **AND** the document title SHALL be "Emporio — Fashion Shop Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/emporio`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/emporio`)
- [ ] Section order matches the reference 1:1 (header → hero slider → category cards → Trending This Week → testimonial → You May Like → Latest News → services strip → footer)
- [ ] Design tokens in `@theme` (brand red #FF2020, charcoal #292621, footer #171613, testimonial band #F3EAD8, blog band #F6F6F6, strikethrough #CEBD9C, Roboto + Jost + Clicker Script font stacks)
- [ ] Header: white top bar (About Us/Privacy/FAQ/Careers left; My Wishlist, Track Your Order, 5 social icons right), white main bar ("Emporio" wordmark + nav Home/Men/Women/Baby Collection [red "New" badge]/Pages/Blog/Contact + search/user/cart icons), dark promo strip ("Sale Up To 50%…" + Shop Now link); Pages and Blog dropdowns; mobile hamburger menu
- [ ] Hero: 2-slide carousel (cover photos), red Clicker Script "Fashion Sale" eyebrow, 55px #292621 h1 "Minimal Menz Style", paragraph, red pill "Shop Now" (radius 35px, padding 22px 32px), navigable
- [ ] Category cards: 3 photo cards (Men's/Women's/Baby Fashion) with dark bottom gradient, white 24px titles, white "Shop Now" links, hover scale 1.02
- [ ] Trending This Week: "Trending This Week" + Men (active)/Women/Baby/Fashion tabs; product cards (photo + hover cart/heart/zoom icons + name + red $98.00 + strikethrough $120.00); tab switching swaps panes
- [ ] Testimonial: #F3EAD8 band, "Customer Testimonial" + "Everybody is different…" copy + avatar + "Petey Cruiser — Designer" (NO Colorlib)
- [ ] You May Like: "You May Like" heading + product carousel (same card kind)
- [ ] Latest News: #F6F6F6 band, "Latest News" + 3 cards (photo, "Fashion Tips" tag, title, excerpt, dark uppercase "Read More" → outline on hover)
- [ ] Services strip: 4 centered columns (icon + Fast & Free Delivery / Secure Payment / Money Back Guarantee / Online Support + "Free delivery on all orders")
- [ ] Footer: dark #171613; subscribe area (white h3 + copy + email input + red square Subscribe button + socials); columns Shop Men/Shop Women/Baby Collection (5 links each) + Quick Links (6 links); copyright bar links Component Dock
- [ ] Buttons: `.btn` red pill (radius 35px); `.btn_1` dark square → outline hover; `.subscribe-btn` red square 60px
- [ ] Document title "Emporio — Fashion Shop Template"
