# Template: Shoppe (E-Commerce Template)

## Purpose

Shoppe is a single-page e-commerce (shoe store) template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Minishop" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Minishop" — e-commerce / shop template
  (source: https://colorlib.com/wp/template/minishop/). TEMPLATES.md has
  THREE copies of this item (lines 455, 1101 and 1590 — duplicate lines
  exist for some items; implementer must mark ALL copies when done).
- **Preview URL:** `https://preview.colorlib.com/theme/minishop/` — HTTP 200,
  full rendered DOM (61.2 KB) fetched with curl. Page title: "Minishop - Free
  Bootstrap 4 Template by Colorlib". Main stylesheet: `css/style.css`
  (102.9 KB, Bootstrap 4 + theme custom CSS merged); helpers: `css/owl.carousel.min.css`,
  `css/animate.css`, `css/aos.css`, `css/flaticon.css`, `css/icomoon.css`,
  `css/ionicons.min.css`, `css/magnific-popup.css`, `css/bootstrap-datepicker.css`,
  `css/jquery.timepicker.css`. Fonts: **"Open Sans"** (300–800) loaded via
  Cloudflare font-face CSS (no separate Google Fonts link tag; use the
  standard Google Fonts `<link>` in the recreation).
- **Screenshot:** `minishop-free-template.jpg` (1200×946, viewed in browser)
  — matches the DOM/CSS analysis: thin black top strip (phone, email,
  "3-5 Business days delivery & Free Returns"), white nav bar with "Minishop"
  serif-ish logo + HOME/CATALOG/ABOUT/BLOG/CONTACT + cart icon with "0" badge,
  full-width hero with mustard/gold background and a lifestyle photo of a
  model in an all-white tracksuit and black/white sneakers, black "#NEW
  ARRIVAL" tag pill, large thin uppercase headline "SHOES COLLECTION 2019",
  gold "Discover Now" CTA; below a white 3-column trust section (bag,
  headset, credit-card line icons + Free Shipping / Support Customer / Secure
  Payments). The demo brands itself "Minishop"; our recreation uses the NEW
  name **Shoppe**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, airy
  e-commerce aesthetic on white with a champagne-gold brand color
  (`#dbcc8f`), a darker mustard CTA gold (`#c2a942`), black accents
  (top bar, nav, buttons, footer) and light-gray (`#f8f9fa`) section
  backgrounds. Sans-serif Open Sans throughout; headings bold/uppercase with
  wide letter-spaced 12px uppercase subheadings. Big 750px hero slider,
  4-column product grid, asymmetric 4-tile collections mosaic, gold
  deal-of-the-month band with countdown, testimonial carousel, Instagram
  gallery strip, black 4-column footer.
- **Structure (1:1, index page):**
  1. Top info bar `.py-1.bg-black` (black, 3 cells): phone `+ 1235 2355 98`
     (icon-phone2), email `youremail@email.com` (icon-paper-plane),
     "3-5 Business days delivery & Free Returns" (right-aligned).
  2. Navbar `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark`
     (dark): brand "Minishop" left; links Home (active), Catalog (dropdown →
     Shop, Single Product, Cart, Checkout), About, Blog, Contact; cart icon
     `icon-shopping_cart` + `[0]` count (`.cta-colored`). Mobile: hamburger
     toggler "Menu". (Recreation adds the repo-standard dark-mode toggle.)
  3. Hero `section#home-section.hero` → `.home-slider.owl-carousel` with 2
     `.slider-item.js-fullheight` slides (height 750px, cover bg image):
     - `.overlay` — gold `#dbcc8f` on the left 50%.
     - Product/lifestyle image right (`.one-third.order-md-last`,
       `images/bg_1.png` / `bg_2.png`), text block left (`.one-forth`).
     - Text: `.subheading` black pill white text `#New Arrival`; `.horizontal`
       with `h1` ("Shoes Collection 2019" / "New Shoes Winter Collection",
       uppercase, weight 300, 44px), paragraph (rgba(0,0,0,.8)), and
       `a.btn-custom` gold `#c2a942` "Discover Now" (padding 10px 20px).
     - `.owl-nav` arrows bottom center (60px).
  4. Services `.ftco-section.ftco-no-pt.ftco-no-pb` → `.ftco-services` row,
     3 cols (col-lg-4, centered): `.media.block-6.services.p-4.py-md-5` with
     flaticon icon (`flaticon-bag` / `flaticon-customer-service` /
     `flaticon-payment-security`) in a circle, `h3.heading` + paragraph.
     Items: Free Shipping · Support Customer · Secure Payments.
  5. Products `.ftco-section.bg-light` — heading "New Shoes Arrival" +
     subtext (centered), then `.row` of 8 `.product` cards (col-sm-12
     col-md-6 col-lg-3 → 4×2 grid). Each card:
     - `.img-prod` image (`images/product-N.png`); 2 of the 8 carry a
       `.status` badge "50% Off" (top-left, red-ish/black).
     - `.text.py-3.pb-4.px-3`: row with `.cat` (span "Lifestyle") left and
       `.rating` right (5 outline stars `ion-ios-star-outline`).
     - `h3` product name "Nike Free RN 2019 iD" (same name reused on all
       cards; paraphrase to distinct names).
     - `.pricing .price` — `$120.00`; sale items show
       `<span class="price-dc">$120.00</span><span class="price-sale">$80.00</span>`
       (strikethrough `#b3b3b3` + black).
     - `.bottom-area.d-flex.px-3`: `a.add-to-cart` (black bg, white text,
       uppercase 13px, hover gold) + `a.buy-now` (white bg, black text,
       uppercase 13px, hover gold).
  6. Collections `.ftco-section.ftco-choose.ftco-no-pb.ftco-no-pt` —
     asymmetric no-gutters grid:
     - Left `col-lg-4`: `divider-one` tile with `images/choose-1.jpg` bg,
       bottom-aligned white text: subheading "Men's Shoes", h2 "Men's
       Collection", paragraph, `a.btn.btn-black.px-3.py-2` "Shop now".
     - Right `col-lg-8`: top `divider-two` tile (`choose-2.jpg` bg, text
       right-aligned): "Women's Shoes" / "Women's Collection" + Shop now.
     - Bottom row: two `col-md-6` tiles — left `bg-light` tile: "Summer
       Sale" / "Extra 50% Off" + Shop now (black text on light); right
       `choose-3.jpg` bg tile: "Shoes" / "Best Sellers" + Shop now (white
       text). All h2s white (except light tile), subheadings 12px uppercase
       letter-spacing 4px.
  7. Deal `.ftco-section.ftco-deal.bg-primary` (gold `#dbcc8f`): two cols —
     left `col-md-6` product image `images/prod-1.png`; right `col-md-6`:
     `.heading-section.heading-section-white` (subheading + h2 "Deal of the
     month", white), `#timer` countdown row of 4 `.time` cells (days/hours/
     minutes/seconds — filled by JS; 38px bold white), `.text-deal` with
     `h2` "Nike Free RN 2019 iD" (black, weight 800), price
     `$120.00`(line-through) → `$80.00` (white), and `ul.thumb-deal.d-flex`
     of 3 square 100px thumbnails (`product-6/2/4.png`).
  8. Testimonials `.ftco-section.testimony-section`: two cols —
     - Left `col-lg-5`: `.services-flow` of 4 `.services-2.p-4.d-flex` rows:
       flaticon icon + h3 + one-liner. Items: Free Shipping, Valuable Gifts,
       All Day Support, All Day Support (the original repeats the last
       heading twice — keep 4 rows, paraphrase the 4th title).
     - Right `col-lg-7`: `.heading-section` h2 "Our satisfied customer says"
       - paragraph, then `.carousel-testimony.owl-carousel` of 5 `.item`s:
         `.testimony-wrap` — round `.user-img` (`person_N.jpg`) with a
         `.quote` circle (quote icon), `.text` with quote paragraph, `.name`
         ("Garreth Smith") and `.position` ("Marketing Manager" / "Interface
         Designer" / "UI Designer" / "Web Developer" / "System Analyst").
  9. Instagram gallery `.ftco-gallery`: centered heading "Follow Us On
     Instagram" + paragraph; `.container-fluid.px-0` row of 6 tiles
     (col-md-4 col-lg-2) `a.gallery.image-popup.img` with bg image
     (`gallery-1..6.jpg`) and a centered Instagram icon that appears on
     hover.
  10. Footer `footer.ftco-footer.ftco-section` (black `#000000`, 7em
      padding): scroll-up mouse icon row; 4 widget columns —
      - Brand: `h2.ftco-heading-2` "Minishop" + blurb + 3 social circles
        (`.ftco-footer-social`, 50px gold `#dbcc8f` round buttons: Twitter,
        Facebook, Instagram).
      - Menu: Shop, About, Journal, Contact Us.
      - Help: two-column list — Shipping Information, Returns & Exchange,
        Terms & Conditions, Privacy Policy | FAQs, Contact.
      - "Have a Questions?": `.block-23` — address (203 Fake St. Mountain
        View, San Francisco, California, USA), phone (+2 392 3929 210),
        email (info@yourdomain.com).
      - Bottom bar: copyright line (replace the ColorLib attribution with
        the repo-standard Component Dock footer line — see conventions).
- **Design tokens extracted from `css/style.css`:**
  - Brand primary (champagne gold) **`#dbcc8f`** — deal section
    `.bg-primary` background, hero left overlay, hover state of
    add-to-cart/buy-now/btn-black, footer social circles.
  - Secondary accent (mustard) **`#c2a942`** — hero `btn-custom` "Discover
    Now" (white text, padding 10px 20px).
  - Ink black **`#000000`** — top bar bg, `.bg-dark` nav (Bootstrap
    `#343a40`), headings, `.btn-black`, `.add-to-cart`, footer bg.
  - White **`#ffffff`** — page bg, `.buy-now` bg, text on dark/gold.
  - Light gray **`#f8f9fa`** (`.bg-light`) — products section bg, "Extra
    50% Off" tile bg.
  - Muted **`#b3b3b3`** — strikethrough price; body copy
    `rgba(0,0,0,.8)`; footer links `rgba(255,255,255,.8)`.
  - Font: **"Open Sans"** (Arial fallback) — body 15px/1.8 weight 400;
    `.heading-section h2` 40px weight 600 black; hero h1 44px weight 300
    uppercase (line-height 1.3); `.subheading` 12px uppercase weight
    600–700, letter-spacing 2px (4px in choose tiles); product names via
    h3; buttons uppercase 13px weight 300; footer widget h2 13px uppercase
    letter-spacing 3px.
  - Buttons: `.btn-custom` gold `#c2a942`, `padding: 10px 20px`, no radius;
    `.btn-black` black bg/border, white text, hover gold; `.add-to-cart`
    black bg white text 13px uppercase, hover gold; `.buy-now` white bg
    black text, hover gold; hero `.btn-primary` transparent with 1px
    white/40 border, `border-radius: 30px`, hover white bg black text;
    `.status` badge "50% Off".
  - Timer: `.time` 38px weight 700 white, 25% width each.
  - Spacing: `.ftco-section` padding `7em 0`; slider height 750px; product
    text `py-3 pb-4 px-3`; footer padding `7em 0`; deal thumbnails 100px
    squares.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/shoppe-<n>/<w>/<h>`); icons → lucide-react (bag,
  headset/headphones, credit-card, star, shopping-cart, instagram,
  quote, phone, mail, map-pin, arrow-up; brand social icons as inline SVG —
  lucide-react removed brand icons); fonts via Google Fonts `<link>`
  (Open Sans 300–800); brand gold in `@theme`; repo-standard Navbar chrome
  (dark-mode toggle) and Footer (Component Dock link); carousels (hero,
  testimonials) can be simple client-side rotators with dots/arrows —
  no owl-carousel dependency; countdown timer ticks client-side from a
  fixed future offset (fake timers + `act()` in tests); no assets copied.

Shoppe lives in `apps/shoppe` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top info bar

The system SHALL render a black top bar with contact info and a delivery note.

#### Scenario: Top bar content

- **GIVEN** the Shoppe page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show a phone number with a phone icon
- **AND** it SHALL show an email address with a paper-plane icon
- **AND** it SHALL show the note "3-5 Business days delivery & Free Returns"
  on the right

### Requirement: Navigation bar

The system SHALL render a dark navigation bar with brand, links, and a cart icon.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Shoppe"
- **AND** it SHALL show links Home, Catalog, About, Blog, and Contact
- **AND** it SHALL show a shopping-cart icon with a "0" badge
- **AND** the Home link SHALL be marked as active

#### Scenario: Catalog dropdown

- **GIVEN** the navbar is displayed
- **WHEN** the user activates the Catalog item
- **THEN** a dropdown SHALL open with links Shop, Single Product, Cart, and Checkout

#### Scenario: Mobile toggle

- **GIVEN** the viewport is narrow
- **WHEN** the page loads
- **THEN** a menu toggle button SHALL be visible (aria-expanded false)
- **AND** activating it SHALL reveal the navigation links

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle (repo-standard chrome)
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-width two-slide hero with product imagery, headline, and CTA.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a black "#New Arrival" tag pill
- **AND** it SHALL show the headline "Shoes Collection 2019" (uppercase)
- **AND** it SHALL show a short paragraph and a gold "Discover Now" button
- **AND** it SHALL show a product/lifestyle image on the right

#### Scenario: Slide navigation

- **GIVEN** the hero has two slides
- **WHEN** the user activates the next control (arrow or dot)
- **THEN** the visible slide SHALL change to the second slide ("New Shoes Winter Collection")
- **AND** the control SHALL reflect the active slide

### Requirement: Services trust section

The system SHALL render a three-column services strip.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show three cards: Free Shipping, Support Customer, and Secure Payments
- **AND** each card SHALL have an icon, a heading, and a short paragraph

### Requirement: Product grid

The system SHALL render an 8-item product grid in a 4-column layout.

#### Scenario: Product cards

- **GIVEN** the page is rendered
- **WHEN** the "New Shoes Arrival" section is displayed
- **THEN** it SHALL show a centered heading "New Shoes Arrival" with subtext
- **AND** it SHALL show 8 product cards (4 columns on large screens)
- **AND** each card SHALL show an image, a category label, five star icons, a product name, and a price
- **AND** at least two cards SHALL show a "50% Off" status badge with a sale price (struck-through original + sale price)

#### Scenario: Card actions

- **GIVEN** a product card is displayed
- **WHEN** the card actions are shown
- **THEN** it SHALL show an "Add to cart" button (dark) and a "Buy now" button (light)

### Requirement: Collections mosaic

The system SHALL render the asymmetric 4-tile collections mosaic.

#### Scenario: Collection tiles

- **GIVEN** the page is rendered
- **WHEN** the collections section is displayed
- **THEN** it SHALL show four tiles: Men's Collection, Women's Collection, Extra 50% Off, and Best Sellers
- **AND** each tile SHALL have a small uppercase subheading, a heading, a paragraph, and a "Shop now" button
- **AND** the Men's, Women's, and Best Sellers tiles SHALL sit on background images with white text
- **AND** the Extra 50% Off tile SHALL use the light background with dark text

### Requirement: Deal of the month

The system SHALL render a gold deal section with a countdown timer.

#### Scenario: Deal content

- **GIVEN** the page is rendered
- **WHEN** the deal section is displayed
- **THEN** it SHALL show a product image on the left
- **AND** it SHALL show the heading "Deal of the month" in white
- **AND** it SHALL show a countdown with Days, Hours, Minutes, and Seconds cells
- **AND** it SHALL show a product name and a price ($120.00 struck through, $80.00 sale price)

#### Scenario: Countdown ticks

- **GIVEN** the countdown timer is displayed
- **WHEN** one second passes (fake timers in tests)
- **THEN** the Seconds value SHALL decrement
- **AND** the timer SHALL roll over correctly between units

### Requirement: Testimonials

The system SHALL render a testimonial section with a service list and a quote carousel.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** the left column SHALL show four service rows (Free Shipping, Valuable Gifts, All Day Support, and a 4th support-style row), each with an icon, title, and one-liner
- **AND** the right column SHALL show the heading "Our satisfied customer says"
- **AND** it SHALL show at least three testimonial quotes, each with an avatar, quote text, a name, and a position

### Requirement: Instagram gallery

The system SHALL render a six-tile Instagram gallery.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Follow Us On Instagram" with subtext
- **AND** it SHALL show six square image tiles with an Instagram icon overlay

### Requirement: Footer

The system SHALL render a black four-column footer.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** the page loads
- **THEN** it SHALL show a brand column with the site name, blurb, and social icon links
- **AND** a Menu column with Shop, About, Journal, and Contact Us
- **AND** a Help column with Shipping Information, Returns & Exchange, Terms & Conditions, Privacy Policy, FAQs, and Contact
- **AND** a "Have a Questions?" column with an address, phone number, and email
- **AND** the copyright line SHALL include a link to Component Dock
  (`https://www.componentdock.com/`)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Shoppe app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar and navbar in the banner landmark, all sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Shoppe — E-Commerce Template"

## Verification checklist

- [ ] `apps/shoppe` exists with package name `@free-react-templates/shoppe`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Font Open Sans (300–800) loaded via Google Fonts `<link>` in index.html
- [ ] Brand champagne gold `#dbcc8f`, mustard `#c2a942`, ink `#000000`, light gray `#f8f9fa` defined in `@theme`
- [ ] Section order matches the reference 1:1 (top bar → navbar → hero slider → services → product grid → collections mosaic → deal + countdown → testimonials → Instagram gallery → footer)
- [ ] Hero slider has 2 slides; testimonials use a client-side rotator; countdown ticks with correct rollover
- [ ] Per-app gate passes: `scripts/verify-app.sh shoppe` (typecheck + lint + 100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md: mark ALL THREE Minishop copies (lines 455, 1101, 1590) `[~]` → `[x]` + Surge URL + homepage after merge
- [ ] `npm run readme:status` regenerates README Templates status table after merge
- [ ] PR description states: source template (ColorLib Minishop), preview URL, design tokens, what differs (rename, picsum placeholders)
