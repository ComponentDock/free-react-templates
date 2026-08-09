# Template: Atelier (Fashion E-commerce Store)

## Purpose

Atelier is a single-page fashion e-commerce storefront template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ashion" design
(https://colorlib.com/wp/template/ashion/), built under the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light fashion storefront with red accents: a header with
nav (HOME, WOMEN'S, MEN'S, SHOP, PAGES, BLOG, CONTACT) plus Login/Register,
search, wishlist and cart icons; a category tile grid (large "Women's
fashion" tile + Men's / Kid's / Cosmetics / Accessories tiles with SHOP NOW
links); a "NEW PRODUCT" section of 8 product cards (names, star ratings,
prices, NEW/SALE/OUT OF STOCK badges); a 3-slide banner carousel ("The
Project Jacket" / "Linen Breeze Dress" / "Urban Street Style") with an
EXPLORE CTA; a tabbed "Hot Trend / Best Seller / Feature" product section (3
cards per tab); a "Summer 2030 — SALE 50%" discount band with a countdown
timer; a services row (Free Shipping, Money Back Guarantee, Online Support
24/7, Payment Secure); an Instagram photo strip; and a light footer with
about + payment icons, Quick links, Account links, a Newsletter form with
social icons, and a copyright line. Atelier recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Ashion" — free fashion e-commerce website template
  (source: https://colorlib.com/wp/template/ashion/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/ashion/`
  (HTTP 200, 49.7KB) + stylesheet `css/style.css` (79.3KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`ashion-free-template.jpg`) confirms the visual design (white sections,
  red accents, pastel category tiles, light-grey discount band). The preview
  was also rendered in a browser to confirm section order and visuals.
- **Section order (1:1):**
  1. Header: logo (left), nav (HOME, WOMEN'S, MEN'S, SHOP, PAGES, BLOG,
     CONTACT) with hover underline, Login/Register links, search icon,
     wishlist icon with count badge, cart icon with count badge.
  2. Categories (`categories spad`): large "Women's fashion" tile (h1, left,
     spans two rows) + 2x2 grid (Men's fashion, Kid's fashion, Cosmetics,
     Accessories — h4 each) — all with SHOP NOW text links; photo
     backgrounds (height 314px).
  3. New product (`product spad`): "NEW PRODUCT" section title + 8 product
     cards in a 4-column grid: Buttons tweed blazer (NEW), Flowy striped
     skirt (OUT OF STOCK), Cotton T-Shirt, Slim striped pocket shirt, Fit
     micro corduroy shirt (SALE), Tropical Kimono (SALE), Contrasting
     sunglasses (SALE), Water resistant backpack. Each card: 3/4 photo,
     badge top-left, name (h6), star rating, price ($59.00; old price
     strikethrough on sale items), hover action icons (quick view / wishlist
     / cart) sliding up.
  4. Banner slider (`banner set-bg`): 3 slides — "The Project Jacket",
     "Linen Breeze Dress", "Urban Street Style" (h1 in script font) with an
     EXPLORE button and carousel dots.
  5. Trend (`trend spad`): tabbed section — HOT TREND / BEST SELLER /
     FEATURE tabs, 3 product cards per tab (Chain bucket bag, Pendant
     earrings, Cotton T-Shirt / Cotton T-Shirt, Zip-pockets pebbled tote
     briefcase, Round leather bag / Bow wrap skirt, Metallic earrings, Flap
     cross-body bag).
  6. Discount (`discount`): split band — photo left, right panel (bg
     #f4f4f4, height 390px, centered) with "Summer 2030" (h2), "SALE 50%"
     (h5), a countdown timer (days/hours/minutes/seconds), and a SHOP NOW
     text link with red underline.
  7. Services (`services spad`): 4 items with red icons — Free Shipping,
     Money Back Guarantee, Online Support 24/7, Payment Secure.
  8. Instagram (`instagram`): horizontal strip of 6 photo tiles.
  9. Footer: brand logo + about paragraph + payment icons (Visa, Mastercard,
     Google Pay, PayPal, Apple Pay, Stripe), Quick Links (About, Blogs,
     Contact, FAQ), Account (My Account, Orders Tracking, Checkout,
     Wishlist), Newsletter (email input + SUBSCRIBE pill button) + social
     icons, copyright line.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ca1515** (red — buttons, sale badges, service icons,
    hover/active accents, focus outline) with near-black **#111111**
    (headings, prices, links).
  - Badges: NEW **#36a300** (green), SALE **#ca1515** (red), OUT OF STOCK
    **#111111** (black); star rating **#e3c01c** (yellow); strikethrough
    price **#b1b0b0**; body text **#666666** (14px/24px).
  - Section backgrounds: white content sections; discount panel **#f4f4f4**
    (light grey); category tiles are photo backgrounds with pastel cast
    (mint / lavender / pink / light blue).
  - Fonts: **"Montserrat"** (sans — all headings/body/nav, headings
    #111111 weight 400, section titles 600 uppercase) + **"Cookie"** (script
    — banner h1 80px, discount h2 60px #ca1515) via Google Fonts.
  - Buttons: `.site-btn` = red filled **#ca1515**, white uppercase 600 text,
    padding 12px 30px, **border-radius 50px** (pill); section CTAs ("SHOP
    NOW", "EXPLORE") are uppercase text links (weight 700) with a red
    underline (e.g. discount link: #111111 text + #ca1515 underline).
  - Product photos: aspect-ratio 3/4; hover reveals action icon row sliding
    up (opacity 0 → 1, top 100px → 0).
- **Recreation decisions:** repo-standard Navbar (site name, section links,
  dark-mode toggle) + Footer chrome; categories = large tile + 2x2 grid with
  seeded picsum photos and SHOP NOW links; products as cards with seeded
  picsum photos, badge, stars (lucide), price (+ strikethrough old price),
  hover action icons; banner = 3-slide carousel with prev/next + dots;
  trend = 3 tabs switching 3-card product grids; discount = grey band with
  countdown timer (client-side, static target) + SHOP NOW link; services
  with lucide icons; newsletter form with inline validation and success
  state; all images picsum-seeded (`picsum.photos/seed/atelier-N/w/h`);
  Google Fonts via `<link>`.

Atelier lives in `apps/atelier` and uses shared components from
`packages/ui` (Button, ButtonLink, cn). Closest existing base app:
`apps/moda` (fashion e-commerce with AnnouncementBar / Categories /
FeaturedProducts structure).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Atelier", a
"Home" link, section links, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Atelier page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Atelier" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show links for Categories, New Products, Trend, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user opens the mobile menu
- **THEN** the section links SHALL be shown in a mobile navigation
- **AND** the menu SHALL close when a link is chosen

### Requirement: Category tiles

The system SHALL render a category section with a large "Women's fashion"
tile and four smaller category tiles.

#### Scenario: Category grid

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL show a large tile labeled "Women's fashion" with a SHOP NOW link
- **AND** it SHALL show four small tiles (Men's fashion, Kid's fashion, Cosmetics, Accessories) each with a SHOP NOW link

### Requirement: New product section

The system SHALL render a "NEW PRODUCT" section with at least six product
cards.

#### Scenario: Product cards

- **GIVEN** the page is rendered
- **WHEN** the new product section is displayed
- **THEN** it SHALL show the heading "NEW PRODUCT"
- **AND** it SHALL render at least six product cards, each with a photo, a name, a star rating, and a price
- **AND** at least one card SHALL show a NEW badge, one a SALE badge, and one an OUT OF STOCK badge

### Requirement: Banner carousel

The system SHALL render a banner carousel with at least three slides and
navigation controls.

#### Scenario: Carousel slides

- **GIVEN** the page is rendered
- **WHEN** the banner is displayed
- **THEN** it SHALL show a slide with a level-1 headline and an EXPLORE button
- **AND** it SHALL show carousel dots or prev/next controls

#### Scenario: Slide navigation

- **GIVEN** the banner carousel is displayed
- **WHEN** the user presses the next/prev control or a dot
- **THEN** the visible slide SHALL change and wrap around

### Requirement: Trend section

The system SHALL render a "Hot Trend / Best Seller / Feature" tabbed product
section.

#### Scenario: Tabs and products

- **GIVEN** the page is rendered
- **WHEN** the trend section is displayed
- **THEN** it SHALL show tabs labeled HOT TREND, BEST SELLER, and FEATURE
- **AND** selecting a tab SHALL show three product cards for that tab
- **AND** each card SHALL show a photo, name, rating, and price

### Requirement: Discount band

The system SHALL render a discount section with a headline, a sale label, a
countdown timer, and a call to action.

#### Scenario: Discount content

- **GIVEN** the page is rendered
- **WHEN** the discount section is displayed
- **THEN** it SHALL show the headline "Summer 2030" and a "SALE 50%" label
- **AND** it SHALL show a countdown timer with days, hours, minutes, and seconds
- **AND** it SHALL show a SHOP NOW link

### Requirement: Services row

The system SHALL render a services section with four benefit items.

#### Scenario: Service items

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show four items: Free Shipping, Money Back Guarantee, Online Support 24/7, and Payment Secure
- **AND** each item SHALL show an icon

### Requirement: Footer

The system SHALL render a footer with the site name, link columns, a
newsletter form, payment badges, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Atelier" and an about paragraph
- **AND** it SHALL show Quick Links and Account link columns
- **AND** it SHALL show a newsletter form that validates the email and confirms a valid subscription
- **AND** it SHALL show social links and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Atelier app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Atelier — Fashion E-commerce Template"
