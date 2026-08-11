# Template: Sneakly (Ecommerce / Shoe Store Landing)

## Purpose

Sneakly is a single-page eCommerce shoe-store landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Minishop" website template
(source: https://colorlib.com/wp/template/minishop/), built under a
DIFFERENT name (Sneakly — "sneaker", the shoe the store sells, plus the
friendly "-ly" suffix matching the family convention: Wingly, Drivly,
Nestly, Bookly, Coastly, Restly, Sleeply, Dozely, Soarly, Lodgely; also
echoes the shoe "sole" sound), per the monorepo naming mandate (never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The source appears THREE times in TEMPLATES.md (dup-row trap): line 455
(**Bootstrap (216)** category — the FIRST occurrence, the canonical one),
line 1101 (**Business (365)**), and line 1590 (**Ecommerce (56)**) — all
`- [ ]` rows of the SAME template. ONE implementation covers all three rows
(mark all `[x]` with the same surge URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Minishop" — page title "Minishop - Free Bootstrap
  4 Template by Colorlib". Free minimal eCommerce/shoe-store landing,
  Bootstrap 4 based. The recreation brands itself **Sneakly** but keeps the
  same section structure, copy kinds and layout.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/minishop/` — HTTP 200, ~61 KB HTML
  (REACHABLE — the preview is live, NOT a 404 like the Booking Forms
  family). Stylesheets: `css/style.css` (custom, ~103 KB), `css/bootstrap.min.css`,
  plus animate/aos/bootstrap-datepicker/flaticon/icomoon/ionicons/
  jquery.timepicker/magnific-popup/open-iconic/owl.carousel —
  the template-specific CSS lives in `style.css`. Screenshot
  `minishop-free-template.jpg` (1200×946, viewed in browser) matches the
  live DOM (topbar → nav → hero → services visible in the shot).
- **Section order (1:1, verified from live DOM):**
  1. **Topbar** (`div.py-1.bg-black` — black strip, `.topper`): 3 items in
     one row — phone `icon-phone2` + "+ 1235 2355 98" · paper-plane icon +
     "youremail@email.com" · right-aligned "3-5 Business days delivery &
     Free Returns". Styling: 11px, uppercase, letter-spacing 1px, WHITE
     text, `bg #000000`.
  2. **Navbar** (`nav#ftco-navbar.navbar.navbar-expand-lg.navbar-dark
.ftco_navbar.bg-dark.ftco-navbar-light` — note the contradictory
     `bg-dark`/`ftco-navbar-light` pair; the custom `.ftco-navbar-light`
     wins: `background: transparent !important; position: absolute; top:
20px; z-index: 3`): brand "Minishop" (`a.navbar-brand`, black);
     links (`.nav-link`, 10px uppercase letter-spacing 2px, black, padding
     1.5rem 20px): **Home** (active) · **Catalog** (dropdown →
     Shop / Single Product / Cart / Checkout) · **About** · **Blog** ·
     **Contact**; right: cart icon `span.icon-shopping_cart` + `[0]`
     (`.nav-item.cta.cta-colored`). Dropdown: `background: #000000`, radius
     0, items white 14px, hover `#dbcc8f`. Mobile (≤991.98px): nav becomes
     solid black, brand + links white (`rgba(255,255,255,0.7)` links).
  3. **Hero slider** (`section#home-section.hero` → `.owl-carousel
.home-slider`, TWO `.slider-item.js-fullheight` slides, each
     `row.d-md-flex.no-gutters.slider-text` with a full-height
     `img.one-third.order-md-last.img-fluid` photo (`images/bg_1.png` /
     `images/bg_2.png`) on the right and a `div.one-forth` text block on
     the left):
     - Slide 1: `span.subheading` "#New Arrival" (12px uppercase
       letter-spacing 4px) · `h1.mb-4.mt-3` "Shoes Collection 2019" ·
       lorem paragraph ("A small river named Duden flows by their place and
       supplies it with the necessary regelialia...") · `a.btn-custom`
       "Discover Now".
     - Slide 2: same layout — h1 "New Shoes Winter Collection" + same
       paragraph + same CTA.
     - h1: 44px, `#000000`, weight 300, uppercase, `line-height 1.3` (a
       `<span>` inside can be weight 900); paragraph `rgba(0,0,0,0.8)`.
       `.btn-custom`: `background: #c2a942`, white text, padding 10px 20px,
       NO border-radius (sharp rectangle). Owl nav arrows bottom center
       (hidden <992px).
  4. **Services** (`section.ftco-section.ftco-no-pt.ftco-no-pb` →
     `.row.no-gutters.ftco-services`): 3 columns
     (`col-lg-4.text-center.d-flex.align-self-stretch`, `.media.block-6
.services.p-4.py-md-5`): circular icon (`.icon`, 50% radius, centered,
     `span` 70px black) — `flaticon-bag` **Free Shipping** ·
     `flaticon-customer-service` **Support Customer** ·
     `flaticon-credit-card` **Secure Payments**; h3 16px 700, lorem
     paragraph.
  5. **New Shoes Arrival** (`section.ftco-section.bg-light` → `bg #f8f9fa`):
     `.heading-section` (12px uppercase subheading + h2 40px 600 black);
     product grid `row` of **8 product cards**
     (`col-sm-12.col-md-6.col-lg-3`, `.product` / `.product.d-flex
.flex-column`, white bg, `margin-bottom 30px`): `.img-prod` photo
     (inset shadow `0 0 101px 21px rgba(0,0,0,0.09)`) with optional
     vertical status ribbon `span.status` (writing-mode vertical,
     rotate 180°, bg `#dbcc8f`, black text — e.g. "Sale"); `.text.py-3
.pb-4.px-3`: `div.d-flex` row — `.cat` label ("Lifestyle", 12px
     uppercase letter-spacing 1px `rgba(0,0,0,0.3)`) + `.rating` (5 star
     outline icons); h3 14px 700 uppercase black link "Nike Free RN 2019
     iD"; `p.price` — "$120.00" or sale variant (`.price-dc` $120.00
     line-through `#b3b3b3` + `.price-sale` $80.00 black). Hover: gold
     230px circle (`#dbcc8f`, 50% radius) fades in behind the photo
     (`.img-prod .overlay`) and a `.bottom-area` with add-to-cart buttons
     slides up from `top: -65px` (opacity 0 → 1). 4 cards per row on lg,
     2 on md, 1 on sm.
  6. **Choose** (`section.ftco-section.ftco-choose.ftco-no-pb.ftco-no-pt`):
     2×2 grid of tall image cards (`.divider-one`/`.divider-two` 700px
     columns, `.wrap`/`.full-wrap` 350px): **Men's Collection** ·
     **Women's Collection** · **Extra 50% Off** · **Best Sellers** — each
     with `.subheading` (12px letter-spacing 4px) + h2 28px 700 + black
     `a.btn.btn-black.px-3.py-2` "Shop now" (black bg white text, hover →
     gold `#dbcc8f`). One column variant is `.text.text-white` (white text
     on dark image).
  7. **Deal of the month** (`section.ftco-section.ftco-deal.bg-primary` —
     **`bg-primary` is overridden to gold `#dbcc8f`** in the custom CSS,
     NOT Bootstrap blue): `col-md-6` product photo `images/prod-1.png`;
     `col-md-6`: `.heading-section.heading-section-white` — subheading
     "Deal of the month" (`rgba(255,255,255,0.9)`) + h2 "Deal of the
     month" (white 700); `#timer.d-flex.mb-4` — FOUR `.time` cells
     (days/hours/minutes/seconds; 38px 700 white numbers, 12px 400
     uppercase letter-spacing 2px white labels); `.text-deal`: h2 link
     "Nike Free RN 2019 iD" (black 800) + `p.price` 24px 800
     (`.price-dc` $120.00 black line-through + `.price-sale` $80.00 white)
     - `ul.thumb-deal` 3 × 100px circular product thumbnails
       (product-6 / product-2 / product-4).
  8. **Testimonials** (`section.ftco-section.testimony-section` → `.owl-
carousel.carousel-testimony`): heading "Our satisfied customer says"
     (heading-section); **5** `.testimony-wrap` items: 100px circular
     `div.user-img` photo with white 40px circle `.quote` badge
     (bottom-right, `#dbcc8f` quote icon), `.text` 18px lorem quote, `.name`
     "Garreth Smith" (600, 18px) + `.position` (Marketing Manager /
     Interface Designer / UI Designer / Web Developer / System Analyst —
     same name, varying roles in the source). Dots: 10px circles
     `rgba(0,0,0,0.2)`, active `#dbcc8f`.
  9. **Gallery** (`section.ftco-gallery`): centered `.heading-section` —
     h2 "Follow Us On Instagram" + lorem paragraph; `.container-fluid.px-0`
     > `.row.no-gutters` of **6** images (`col-md-4.col-lg-2`, 6 across on
     > lg) `a` → `images/gallery-1..6.jpg`, each 270px tall
     > (`.gallery { height: 270px }`).
  10. **Footer** (`footer.ftco-footer.ftco-section`, `bg #000000`, text
      `rgba(255,255,255,0.8)`, padding 7em 0, 14px): scroll-up mouse icon
      row (`a.mouse-icon` with `ion-ios-arrow-up`); 4 widget columns —
      (1) brand "Minishop" + about paragraph + social icons
      (`ul.ftco-footer-social`: twitter / facebook / instagram, 50px
      circles); (2) **Menu**: Shop / About / Journal / Contact Us;
      (3) **Help**: two lists — Shipping Information / Returns & Exchange /
      Terms & Conditions / Privacy Policy + FAQs / Contact;
      (4) **Have a Questions?** (`div.block-23`): address
      "203 Fake St. Mountain View, San Francisco, California, USA" ·
      phone "+2 392 3929 210" · email "info@yourdomain.com". Widget h2:
      13px 700 uppercase letter-spacing 3px white. Copyright bar:
      "Copyright ©<year> All rights reserved | This template is made with
      ♥ by Colorlib".
- **Visual design (TEMPLATES.md screenshot `minishop-free-template.jpg`,
  1200×946, viewed in browser 2026-08-11):** minimal chic eCommerce store.
  Thin BLACK top strip (phone · email · "3-5 BUSINESS DAYS DELIVERY &
  FREE RETURNS"), white/transparent header (bold "Minishop" logo left;
  HOME CATALOG ABOUT BLOG CONTACT + cart [0] right), then a large hero on a
  muted CHAMPAGNE-GOLD background: a model in a white tracksuit and
  black/white sneakers sitting on the floor, "#NEW ARRIVAL" tag, big black
  uppercase "SHOES COLLECTION 2019" headline, lorem paragraph and a
  gold "Discover Now" button. Below (white): 3 benefit columns with
  line-art icons (Free Shipping / Support Customer / Secure Payments).
  Palette: champagne gold `#dbcc8f` (hero bg + buttons), near-black, white;
  clean modern sans (Open Sans). The screenshot only reaches the services
  row; everything below (products grid, choose, deal, testimonials,
  gallery, footer) is verified from the live DOM.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-11):**
  - Brand color: **`#dbcc8f`** (champagne / muted gold) — `.btn.btn-primary`
    bg + border, `.bg-primary` section bg (Deal), product status ribbon,
    product hover circle overlay, testimonial dots active, dropdown-item
    hover, `.btn.btn-black:hover`, owl-dots active. Secondary gold:
    **`#c2a942`** (darker) — hero `.btn-custom` "Discover Now" bg.
  - Black: **`#000000`** — topbar bg, footer bg, `.btn.btn-black` bg,
    headings, nav links, dropdown bg. `bg-light` `#f8f9fa` (products
    section). Text greys: `rgba(0,0,0,0.3)` (product category labels),
    `#b3b3b3` (strikethrough price), `rgba(0,0,0,0.8)` (hero paragraph /
    testimonial text), footer text `rgba(255,255,255,0.8)`.
  - Font: **"Open Sans", Arial, sans-serif** (body; also used for the
    `.bread` heading). Hero h1 weight 300 (span 900) uppercase; product
    h3 14px 700 uppercase; section h2 40px 600; footer widget h2 13px 700
    uppercase letter-spacing 3px. Google Fonts: `Open Sans` (300/400/600/
    700/800/900).
  - Buttons: `.btn` base = Bootstrap (radius `.25rem`, padding
    `.375rem .75rem`, 12px in the custom override); `.btn.btn-primary` →
    `background #dbcc8f`, `border 1px solid #dbcc8f`, white text; hover →
    transparent bg + `#dbcc8f` text (outline swap); `.btn.btn-black` →
    black bg/white text, hover → gold `#dbcc8f`; hero `.btn-custom` →
    `#c2a942` bg, white, padding 10px 20px, NO radius.
  - Radii: 50% (service icons, product hover overlay circle, testimonial
    user-img + quote badge, social icons, thumb-deal images), `.25rem`
    (Bootstrap btn base), 0 (dropdown, btn-custom), 30px only on the inner
    breadcrumb-page `.hero-wrap .slider-text .btn-primary` (not on the
    home page).
  - Section backgrounds: topbar `#000`; hero = slide photos
    (`images/bg_1.png` / `bg_2.png`, right-half image + left text);
    services white; products `#f8f9fa`; choose = image cards (700px/350px
    tall); deal `#dbcc8f` (gold); testimonials white; gallery white;
    footer `#000`. `.img`, `.user-img` etc.: `background-size: cover;
background-position: center center`.
- **KEY DIFFERENCES vs Bazaar (shopmax) — the other eCommerce prep, do NOT
  merge:** Bazaar = pink `#ee4266` + dark `#25262a`, fashion-shop layout.
  Sneakly = champagne gold `#dbcc8f` (+ `#c2a942` hero button), black +
  white, shoe-store layout with the distinctive topbar, hero slider
  (image-right/text-left), gold Deal countdown band, Instagram gallery and
  black footer. Same eCommerce family — palette, hero layout, section set
  and fonts all differ.
- **Family palette check (2026-08-11):** `#dbcc8f` (champagne) is unique
  among shop/ecommerce preps so far (Bazaar `#ee4266`, Moda/Vendora
  fashion preps use their own palettes). Keep `#dbcc8f` exact; do NOT
  reuse `#c2a942` elsewhere.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap
  4 grid (NO Bootstrap dependency); section order 1:1 as above; body in
  Open Sans via Google Fonts `<link>` in `index.html`; brand color
  `#dbcc8f` in `@theme` used via Tailwind classes; hero/section photos via
  seeded picsum placeholders (`picsum.photos/seed/sneakly-<n>/<w>/<h>` —
  use subject-appropriate seeds: a sneaker/shoe photo for the hero
  `bg_1`/`bg_2` equivalent, product photos for the 8 cards, the deal
  product, the 6 gallery tiles, 3 thumb-deal circles, 5 testimonial
  faces); icons from lucide-react (shopping bag / headset / credit card
  for services, star for ratings, shopping cart for the nav cart badge,
  social brand icons as inline SVG — lucide-react REMOVED brand icons,
  use simple-icons paths); the source `icon-shopping_cart [0]` cart badge
  can be a static "0" (no cart logic — single landing page, the dropdown
  menu items Shop/Single Product/Cart/Checkout are dead links); the
  countdown timer is driven by a small exported pure function (fixed
  future target date or a `useEffect` ticking every second — keep the
  logic in a pure function for 100%-coverage tests); the 5 testimonials
  keep the source's structure (name "Garreth Smith" may be varied per
  item for realism, roles as in source); brand "Minishop"/"Colorlib" →
  "Sneakly" everywhere including the footer credit (drop the Colorlib
  attribution link or keep a neutral credit); hero slider = 2 slides with
  prev/next arrows + dots (auto-rotate optional); document title "Sneakly
  — Shoe Store Template".

Sneakly lives in `apps/sneakly` (package `@free-react-templates/sneakly`)
and uses shared components from `packages/ui` (Button, ButtonLink, Card,
cn).

## Requirements

### Requirement: Top bar

The system SHALL render a black top strip above the navbar with three
items: a phone number, an email address, and a right-aligned shipping
promo line, all in small uppercase white text.

#### Scenario: Top bar items

- **GIVEN** the Sneakly page is rendered
- **WHEN** the page loads
- **THEN** a black (`#000000`) strip SHALL be shown above the navbar
- **AND** the strip SHALL contain, in order: a phone icon + "+ 1235 2355
  98", a paper-plane icon + "youremail@email.com", and right-aligned
  "3-5 Business days delivery & Free Returns"
- **AND** the strip text SHALL be white, 11px, uppercase, letter-spacing
  1px

### Requirement: Navbar

The system SHALL render a transparent (absolute-positioned) navbar with a
black brand, uppercase spaced nav links, a Catalog dropdown, and a cart
icon with a "0" badge.

#### Scenario: Navbar links and cart

- **GIVEN** the Sneakly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Sneakly" on the left
- **AND** the nav SHALL show links Home (active), Catalog, About, Blog,
  Contact
- **AND** a cart icon with a "0" badge SHALL be shown on the right
- **AND** the links SHALL be black, 10px, uppercase, letter-spacing 2px

#### Scenario: Catalog dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the Catalog link is opened
- **THEN** a black dropdown SHALL show Shop, Single Product, Cart, and
  Checkout items
- **AND** the items SHALL be white 14px text that turns `#dbcc8f` on hover

### Requirement: Hero slider

The system SHALL render a full-height hero slider with two slides, each
showing a photo on the right and a text block on the left with a
subheading, a large uppercase headline, a paragraph, and a gold "Discover
Now" button.

#### Scenario: First slide

- **GIVEN** the Sneakly page is rendered
- **WHEN** the hero slider loads
- **THEN** the first slide SHALL show the subheading "#New Arrival"
- **AND** the headline "Shoes Collection 2019" SHALL be shown in black,
  uppercase, 44px, weight 300 (with an optional weight-900 span)
- **AND** a paragraph of store copy SHALL be shown
- **AND** a "Discover Now" button SHALL be shown with background `#c2a942`,
  white text, padding 10px 20px, and no border radius

#### Scenario: Second slide

- **GIVEN** the hero slider is displayed
- **WHEN** the slider advances (arrows, dots, or auto-rotate)
- **THEN** the second slide SHALL show the headline "New Shoes Winter
  Collection" with the same paragraph and "Discover Now" button layout

#### Scenario: Slider navigation

- **GIVEN** the hero slider is rendered on a wide viewport (≥992px)
- **WHEN** the user interacts with the slider
- **THEN** prev/next arrows SHALL be available at the bottom center
- **AND** slide dots SHALL indicate the current slide

### Requirement: Services row

The system SHALL render three centered benefit columns with circular
line-art icons and headings: Free Shipping, Support Customer, Secure
Payments.

#### Scenario: Three benefit columns

- **GIVEN** the Sneakly page is rendered
- **WHEN** the page is scrolled past the hero
- **THEN** three columns SHALL be shown side by side on ≥992px: Free
  Shipping (bag icon), Support Customer (headset icon), Secure Payments
  (credit-card icon)
- **AND** each icon SHALL sit in a circular (50% radius) container, 70px,
  black
- **AND** each column SHALL show a 16px bold heading and a short paragraph

### Requirement: New Shoes Arrival product grid

The system SHALL render a light-grey (`#f8f9fa`) section headed "New Shoes
Arrival" with eight product cards in a 4-column grid, each with a photo,
category label, star rating, bold uppercase product name, and price (some
with a strikethrough sale price).

#### Scenario: Product cards

- **GIVEN** the products section is rendered
- **WHEN** the section loads
- **THEN** the heading "New Shoes Arrival" SHALL be shown
- **AND** exactly eight product cards SHALL be shown, 4 per row on lg, 2
  on md, 1 on sm
- **AND** each card SHALL show a product photo, a "Lifestyle" category
  label (12px uppercase, 30% black), five outline star icons, a 14px bold
  uppercase product name link, and a price

#### Scenario: Sale pricing and ribbon

- **GIVEN** a product card with a sale
- **WHEN** the card is rendered
- **THEN** the card SHALL show a vertical status ribbon (gold `#dbcc8f`
  background, black text, vertical writing mode) on the photo
- **AND** the price SHALL show a line-through grey `#b3b3b3` original
  price (e.g. $120.00) beside a black sale price (e.g. $80.00)

#### Scenario: Card hover

- **GIVEN** any product card is rendered
- **WHEN** the user hovers the card
- **THEN** a gold `#dbcc8f` circle SHALL fade in behind the photo
- **AND** a bottom action area with add-to-cart / view buttons SHALL slide
  up over the photo

### Requirement: Choose section

The system SHALL render a 2×2 grid of tall image cards — Men's Collection,
Women's Collection, Extra 50% Off, Best Sellers — each with a black "Shop
now" button.

#### Scenario: Four category cards

- **GIVEN** the Sneakly page is rendered
- **WHEN** the choose section is visible
- **THEN** four image cards SHALL be shown in a 2×2 grid: Men's
  Collection, Women's Collection, Extra 50% Off, Best Sellers
- **AND** each card SHALL show a 12px letter-spaced subheading, a 28px
  bold heading, and a black "Shop now" button (black background, white
  text; hover turns gold `#dbcc8f`)
- **AND** the cards on the dark-image column SHALL use white text

### Requirement: Deal of the month

The system SHALL render a gold (`#dbcc8f`) deal band with a product photo,
white "Deal of the month" heading, a four-part countdown timer
(days/hours/minutes/seconds), a product name with strikethrough + sale
price, and three circular thumbnails.

#### Scenario: Deal band content

- **GIVEN** the Sneakly page is rendered
- **WHEN** the deal section is visible
- **THEN** a gold `#dbcc8f` section SHALL be shown with a product photo on
  the left
- **AND** the right side SHALL show the subheading and heading "Deal of
  the month" in white
- **AND** a countdown timer with four cells SHALL be shown: white 38px bold
  numbers with 12px uppercase letter-spaced white labels (Days, Hours,
  Minutes, Seconds)

#### Scenario: Deal product and price

- **GIVEN** the deal band is rendered
- **WHEN** the deal content loads
- **THEN** a product name link SHALL be shown (e.g. "Nike Free RN 2019
  iD") in black weight 800
- **AND** the price SHALL show a black line-through original price
  (e.g. $120.00) beside a white sale price (e.g. $80.00)
- **AND** three 100px circular product thumbnails SHALL be shown below

#### Scenario: Timer counts down

- **GIVEN** the countdown timer is rendered
- **WHEN** time passes
- **THEN** the timer SHALL tick down every second toward a fixed future
  target date
- **AND** each cell SHALL show a two-digit padded number and never go
  negative

### Requirement: Testimonials

The system SHALL render a "Our satisfied customer says" section with a
testimonial carousel of five items, each with a circular photo, quote
badge, quote text, name, and role.

#### Scenario: Testimonial items

- **GIVEN** the Sneakly page is rendered
- **WHEN** the testimonials section is visible
- **THEN** the heading "Our satisfied customer says" SHALL be shown
- **AND** five testimonial cards SHALL be shown in a carousel
- **AND** each card SHALL show a 100px circular customer photo with a
  white 40px quote badge (gold `#dbcc8f` quote icon) at its bottom-right,
  an 18px quote paragraph, a bold name, and a role line

#### Scenario: Carousel dots

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the carousel is displayed
- **THEN** dots SHALL indicate the current testimonial
- **AND** the active dot SHALL be gold `#dbcc8f` (inactive dots 20% black)

### Requirement: Instagram gallery

The system SHALL render a "Follow Us On Instagram" section with a heading,
a paragraph, and six square photo tiles in one row on lg.

#### Scenario: Gallery tiles

- **GIVEN** the Sneakly page is rendered
- **WHEN** the gallery section is visible
- **THEN** the heading "Follow Us On Instagram" and a paragraph SHALL be
  shown centered
- **AND** six photo tiles SHALL be shown edge-to-edge, 6 across on lg, 3
  on md, 2 on sm, each 270px tall

### Requirement: Footer

The system SHALL render a black footer with four widget columns — brand +
social icons, Menu links, Help links, and contact info — plus a copyright
bar.

#### Scenario: Footer columns

- **GIVEN** the Sneakly page is rendered
- **WHEN** the page is scrolled to the footer
- **THEN** a black (`#000000`) footer SHALL be shown with four columns:
  brand "Sneakly" + about paragraph + Twitter/Facebook/Instagram social
  icons; Menu (Shop, About, Journal, Contact Us); Help (Shipping
  Information, Returns & Exchange, Terms & Conditions, Privacy Policy,
  FAQs, Contact); Have a Questions? (address, phone, email)
- **AND** the widget headings SHALL be white 13px bold uppercase with 3px
  letter-spacing
- **AND** a scroll-to-top mouse icon SHALL be shown above the columns

#### Scenario: Copyright bar

- **GIVEN** the footer is rendered
- **WHEN** the footer bottom is visible
- **THEN** a centered copyright line SHALL be shown: "Copyright ©<current
  year> All rights reserved" with a neutral credit
- **AND** the source's Colorlib attribution SHALL be replaced (brand
  renamed to Sneakly)

### Requirement: Responsive behavior

The system SHALL collapse the navbar to a black mobile menu (white links)
below 992px and stack the multi-column sections to single columns on small
screens.

#### Scenario: Mobile navigation

- **GIVEN** the Sneakly page is rendered on a viewport narrower than 992px
- **WHEN** the page is displayed
- **THEN** the navbar SHALL become solid black with white links
- **AND** the hero headlines SHALL stay readable (white text on dark or
  scaled sizes per the source's 40px mobile rule)

#### Scenario: Stacked columns

- **GIVEN** the Sneakly page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** the services columns SHALL stack vertically
- **AND** the product grid SHALL show one card per row
- **AND** the choose cards, deal band columns, gallery tiles, and footer
  columns SHALL stack to single columns

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-sneakly`
- [ ] `scripts/verify-app.sh sneakly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): black topbar (phone ·
      email · "3-5 Business days delivery & Free Returns") → transparent
      navbar (Sneakly brand · Home active / Catalog dropdown / About /
      Blog / Contact · cart [0]) → hero slider (2 slides: "#New Arrival" /
      "Shoes Collection 2019" and "New Shoes Winter Collection", photo
      right + text left, gold `#c2a942` "Discover Now") → services
      (Free Shipping / Support Customer / Secure Payments, circular 70px
      icons) → New Shoes Arrival (8 product cards, 4-col, category +
      rating + 14px uppercase name + price, sale ribbons + strikethrough
      prices, gold hover circle + slide-up actions) → choose (2×2:
      Men's / Women's / Extra 50% Off / Best Sellers, black "Shop now"
      buttons) → Deal of the month (GOLD `#dbcc8f` band, white heading,
      4-cell countdown timer, name + $120.00/$80.00 price, 3 circular
      thumbnails) → testimonials (5 cards, circular photo + quote badge,
      dots) → Instagram gallery (6 tiles) → black footer (4 columns +
      copyright)
- [ ] Brand color `#dbcc8f` (champagne gold) + hero-button `#c2a942` in
      `@theme`, used via Tailwind classes; keep `#dbcc8f` exact (unique in
      the family, do NOT confuse with Bazaar's `#ee4266`)
- [ ] Body font Open Sans via Google Fonts `<link>` in `index.html`
      (300/400/600/700/800/900 for hero 300/900 spans and 800 prices)
- [ ] Topbar `#000` 11px uppercase white; footer `#000` with
      `rgba(255,255,255,0.8)` text; products section `bg #f8f9fa`;
      deal band `bg #dbcc8f` (NOT Bootstrap blue — the source overrides
      `.bg-primary`)
- [ ] Buttons: `.btn-primary` gold bg → transparent/gold outline hover;
      `.btn-black` black bg → gold hover; hero `.btn-custom` `#c2a942`
      sharp rectangle (NO radius)
- [ ] Countdown timer ticks every second from a pure exported function
      (days/hours/minutes/seconds, zero-padded, never negative)
- [ ] Navbar: transparent absolute over hero; mobile (≤991.98px) solid
      black with white links; dropdown black bg, white items, gold hover
- [ ] Placeholder images via `picsum.photos/seed/sneakly-<n>/<w>/<h>`
      (subject-appropriate seeds: sneakers for hero/products/deal, faces
      for testimonials), icons from lucide-react (brand icons as inline
      SVG simple-icons paths), no copied assets
- [ ] Brand renamed "Minishop"/"Colorlib" → "Sneakly" everywhere;
      copyright credit neutral
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL THREE `- [ ]` rows
      (lines ~455 Bootstrap, ~1101 Business, ~1590 Ecommerce) `[x]` with
      the same surge URL + `npm run readme:status` (implementer)
