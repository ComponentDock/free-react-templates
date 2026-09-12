# Template: Joule (eCommerce Shop Landing)

## Purpose

Joule is a single-page eCommerce shop template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Electro"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a dark-themed, red-accented shop page with a multi-row header
(top bar + logo/search/cart bar + navigation with category dropdowns), a
product carousel, tabbed product grids (New Products, Top Selling), a hot-deal
countdown banner, a newsletter signup, and a four-column footer. Joule
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Electro" — free eCommerce website template
  (source: https://colorlib.com/wp/template/electro/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/electro/`
  (HTTP 200, 46.3KB) + stylesheet `css/style.css` (41.1KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`electro-free-ecommerce-template.jpg`) confirms the visual design (dark
  header, red accents, white product cards, grey hot-deal banner).
- **Section order (1:1):**
  1. Top header bar (`#top-header`, bg `#1E1F29`): contact info left (phone,
     email, address), account links right (currency, My Account).
  2. Main header (`#header`, bg `#15161D`): logo left, search bar center
     (category dropdown + input + red Search button), cart + wishlist right.
  3. Navigation (`#navigation`, white bg, red top border `#D10024`): Home,
     Hot Deals, Categories (with dropdown mega-menu for Laptops/Smartphones/
     Cameras/Accessories), New Products, Lifestyle, Featured.
  4. Product carousel (Slick slider): tabbed "New Products" with category
     filter tabs (Laptops, Smartphones, Cameras, Accessories) — 4-5 product
     cards per slide.
  5. Hot deal section (`#hot-deal`, bg `#E4E7ED` with background image):
     circular countdown timer (Days/Hours/Mins/Secs in red circles `#D10024e6`),
     headline "hot deal this week", promo text, "Shop now" button.
  6. Top selling section: same tabbed product grid layout as New Products,
     5 product cards with category tabs.
  7. Newsletter section (`#newsletter`): "Sign Up for the NEWSLETTER" heading,
     email input with rounded pill shape + red "Subscribe" button.
  8. Footer (`#footer`, bg `#15161D`, text `#B9BABC`): four columns — About Us
     (logo + address + phone + email), Categories (Hot deals, Laptops,
     Smartphones, Cameras, Accessories), Information (About Us, Contact Us,
     Privacy Policy, Orders and Returns, Terms & Conditions), Service (My
     Account, View Cart, Wishlist, Track My Order, Help).
  9. Bottom footer (`#bottom-footer`, bg `#1E1F29`): copyright line.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#D10024** (vivid red — buttons, borders, countdown circles,
    product labels, price text, hover states). Secondary red: **#ef233c**.
  - Dark backgrounds: **#15161D** (header, footer), **#1E1F29** (top header,
    bottom footer), **#1e1f29** (variant).
  - Light backgrounds: **#E4E7ED** (hot deal section, navigation border,
    newsletter icon), **#FFF** (navigation bar, product card bodies), **#FBFBFC**
    (body background).
  - Text colors: **#2B2D42** (primary text, cart price), **#B9BABC** (footer
    text), **#8D99AE** (muted/category labels), **#333** (body text).
  - Font: **Montserrat** (Google Fonts, weights 400/500/700), sans-serif.
  - Icon font: FontAwesome (recreated with lucide-react).
  - Buttons: `primary-btn` — bg `#D10024`, white text, `border-radius: 40px`
    (pill shape), `padding: 12px 30px`. Search button — same red, square
    `height: 40px; width: 100px`. Newsletter button — red bg, white text,
    pill-shaped right side.
  - Newsletter input: pill shape left (`border-radius: 40px 0 0 40px`),
    button pill shape right (`border-radius: 0 40px 40px 0`).
  - Hot deal countdown: circular items `100px x 100px`, bg `#D10024e6`
    (semi-transparent red), `border-radius: 50%`, white text.
  - Product labels: "sale" label = white bg + red border/text; "new" label =
    red bg + white text; `border: 2px solid; padding: 2px 10px; font-size: 12px`.
  - Product card: white bg, centered text, category uppercase 12px muted,
    name uppercase 14px bold, price 18px red, old price 70% size muted.
  - Section title: uppercase, inline-block, no margin.
  - Navigation: white bg, `border-top: 3px solid #D10024`, `border-bottom:
    2px solid #E4E7ED`.
- **Recreation decisions:** repo-standard Navbar (simplified: logo + Home
  link + dark-mode toggle) + Footer chrome; product grids with seeded picsum
  images; countdown timer with static demo values; newsletter signup form;
  all images picsum-seeded (`picsum.photos/seed/joule-N/w/h`); Google Fonts
  (Montserrat) via `<link>`.

Joule lives in `apps/joule` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Top header bar

The system SHALL render a thin top header bar with contact information on the
left and account links on the right.

#### Scenario: Top header content

- **GIVEN** the Joule page is rendered
- **WHEN** the top header bar is displayed
- **THEN** it SHALL show contact info on the left: phone number, email, and address
- **AND** it SHALL show account links on the right: currency selector and "My Account"

#### Scenario: Top header styling

- **GIVEN** the page is rendered
- **WHEN** the top header is displayed
- **THEN** it SHALL have a dark background (`#1E1F29` or Tailwind equivalent)
- **AND** it SHALL display light-colored text

### Requirement: Main header with search

The system SHALL render a main header row with a logo, a search bar with
category dropdown, and cart/wishlist actions.

#### Scenario: Header layout

- **GIVEN** the page is rendered
- **WHEN** the main header is displayed
- **THEN** it SHALL show a logo on the left
- **AND** it SHALL show a search form in the center (category dropdown + text input + Search button)
- **AND** it SHALL show wishlist and cart links on the right with item count badges

#### Scenario: Search button styling

- **GIVEN** the page is rendered
- **WHEN** the search bar is displayed
- **THEN** the Search button SHALL be red (`#D10024`) with white text
- **AND** the search input SHALL have a clear placeholder ("Search here")

### Requirement: Navigation bar

The system SHALL render a horizontal navigation bar with category links.

#### Scenario: Navigation links

- **GIVEN** the page is rendered
- **WHEN** the navigation bar is displayed
- **THEN** it SHALL show links: Home, Hot Deals, Categories, New Products
- **AND** the navigation SHALL have a white background

#### Scenario: Navigation styling

- **GIVEN** the page is rendered
- **WHEN** the navigation bar is displayed
- **THEN** it SHALL have a red top border (`#D10024`) and a light grey bottom border (`#E4E7ED`)

### Requirement: Product carousel / New Products section

The system SHALL render a product carousel or grid section showing "New Products"
with tabbed category filters.

#### Scenario: Product grid display

- **GIVEN** the page is rendered
- **WHEN** the New Products section is displayed
- **THEN** it SHALL show a section title "New Products"
- **AND** it SHALL show category filter tabs (Laptops, Smartphones, Cameras, Accessories)
- **AND** it SHALL display at least 4 product cards in a grid

#### Scenario: Product card content

- **GIVEN** a product card is rendered
- **WHEN** the card is displayed
- **THEN** it SHALL show a product image (seeded picsum placeholder)
- **AND** it SHALL show a category label (uppercase, muted)
- **AND** it SHALL show a product name (uppercase, bold)
- **AND** it SHALL show a current price in red and an optional old price struck through
- **AND** it SHALL show an "add to cart" button

#### Scenario: Product labels

- **GIVEN** a product card has a sale or new label
- **WHEN** the label is displayed
- **THEN** a "sale" label SHALL have white background with red border and text
- **AND** a "new" label SHALL have red background with white text

### Requirement: Hot deal section

The system SHALL render a hot-deal promotional section with a countdown timer.

#### Scenario: Hot deal content

- **GIVEN** the page is rendered
- **WHEN** the hot deal section is displayed
- **THEN** it SHALL show a countdown timer with Days, Hours, Minutes, Seconds
- **AND** it SHALL show a headline ("hot deal this week")
- **AND** it SHALL show promotional text and a "Shop now" button

#### Scenario: Hot deal styling

- **GIVEN** the page is rendered
- **WHEN** the hot deal section is displayed
- **THEN** it SHALL have a light grey background (`#E4E7ED`)
- **AND** the countdown circles SHALL be semi-transparent red (`#D10024e6`) with white text, circular shape
- **AND** the "Shop now" button SHALL be pill-shaped (border-radius 40px) with red background

### Requirement: Top Selling section

The system SHALL render a "Top Selling" product grid with category tabs,
matching the New Products layout.

#### Scenario: Top selling display

- **GIVEN** the page is rendered
- **WHEN** the Top Selling section is displayed
- **THEN** it SHALL show a section title "Top selling"
- **AND** it SHALL show category filter tabs
- **AND** it SHALL display at least 4 product cards

### Requirement: Newsletter signup

The system SHALL render a newsletter signup section with an email input and
subscribe button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show a heading "Sign Up for the NEWSLETTER"
- **AND** it SHALL show an email input field and a "Subscribe" button

#### Scenario: Newsletter styling

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** the email input SHALL have a pill-shaped left side (`border-radius: 40px 0 0 40px`)
- **AND** the Subscribe button SHALL have a pill-shaped right side (`border-radius: 0 40px 40px 0`)
- **AND** the Subscribe button SHALL be red (`#D10024`) with white text

### Requirement: Footer

The system SHALL render a four-column footer with company info, categories,
information links, and service links, plus a bottom copyright bar.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show four columns: About Us, Categories, Information, Service
- **AND** the About Us column SHALL show company name, address, phone, email
- **AND** the Categories column SHALL show product category links
- **AND** the Information column SHALL show policy links (About, Contact, Privacy, Terms)
- **AND** the Service column SHALL show service links (My Account, Cart, Wishlist, Track, Help)

#### Scenario: Footer styling

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a dark background (`#15161D`) with light grey text (`#B9BABC`)
- **AND** the bottom footer bar SHALL have a darker background (`#1E1F29`)

#### Scenario: Footer attribution

- **GIVEN** the page is rendered
- **WHEN** the footer copyright is displayed
- **THEN** it SHALL link to `https://www.componentdock.com/` branded as "Component Dock"

### Requirement: Dark mode support

The system SHALL support dark mode via a toggle in the navbar.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered in light mode
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

## Verification checklist

- [ ] Top header bar renders with contact info and account links
- [ ] Main header renders with logo, search bar, and cart/wishlist
- [ ] Search button is red with white text
- [ ] Navigation bar renders with category links, red top border
- [ ] New Products section renders with tabbed category filter and product grid
- [ ] Product cards show image, category, name, price, old price, add-to-cart
- [ ] Product labels (sale/new) render with correct styling
- [ ] Hot deal section renders with countdown timer, headline, Shop Now button
- [ ] Countdown circles are red, circular, with white text
- [ ] Top Selling section renders with tabbed product grid
- [ ] Newsletter section renders with email input and Subscribe button
- [ ] Newsletter inputs have pill-shaped styling
- [ ] Footer renders four columns with correct content
- [ ] Footer has dark background, bottom footer darker
- [ ] Footer links to Component Dock
- [ ] Dark mode toggle works
- [ ] All images use seeded picsum placeholders
- [ ] No ColorLib references in app code
- [ ] Montserrat font loaded via Google Fonts
- [ ] All interactive elements are accessible (keyboard, screen reader)
