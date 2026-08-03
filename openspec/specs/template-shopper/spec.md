# Template: Shopper (Astro Template)

## Purpose

Shopper is a single-page fashion e-commerce landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Shopper" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Shopper" — fashion / e-commerce store landing
  template (source: https://colorlib.com/wp/template/shopper/).
- **Demo DOM analyzed:** https://shopper-colorlib.pages.dev/ (HTTP 200, full
  rendered DOM + `/_astro/Base.Dc8UlFQE.css` (47KB) extracted;
  `https://preview.colorlib.com/theme/shopper/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`shopper-template-1770211205661.jpg`) is the visual reference; the design
  below is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (white/95 blur): logo + links Shop, Categories, New
     Arrivals, Sale, About + cart count + "My Account"; mobile nav.
  2. Hero (`min-h-[90vh]` image): "Elevate Your Everyday Style" + "Shop
     Collection" / "Browse Categories" buttons; trust badges (Average
     Rating, 500+ Premium Products, Free Shipping on orders over $100,
     Secure Checkout).
  3. Service bar (`border-y`): 4 perks — Free Shipping, Secure Payment,
     Easy Returns, 24/7 Support.
  4. Featured Products: "Featured Products" + 8 product cards (Minimal
     Leather Jacket, Cashmere Crewneck Sweater, Aviator Sunglasses,
     Minimalist Leather Sneakers, Automatic Dress Watch, Diamond Pendant
     Necklace, Italian Wool Overcoat, Performance Running Sneakers) with
     category, rating, price, sale badge, "Add to Cart"; "View All
     Products".
  5. Shop by Category: 6 category cards (Clothing 124, Accessories 86,
     Footwear 52, Bags 38, Jewelry 64, Watches 28) + "Shop Now".
  6. New Arrivals: 4 product cards (Cashmere Crewneck Sweater, Minimalist
     Leather Sneakers, Printed Silk Scarf, Suede Chelsea Boots) + "See All
     New".
  7. Season Sale (`bg-gradient-to-br from-primary-600 to-primary-800`):
     "Season Sale — Up to 50% off" + countdown (Days/Hours/Minutes) + 4
     discounted products + "Shop All Sale".
  8. Testimonials: "What Our Customers Say" — 3 quotes (Alexandra Chen,
     Marcus Johnson, Sophie Williams).
  9. Newsletter band (`bg-gray-900`): "Get 20% Off Your First Order" + 4
     benefit items (Exclusive Offers, New Arrivals First, Free Returns,
     Style Tips) + subscribe form.
  10. Footer: "Join Our Newsletter" (15% off) + subscribe; brand blurb +
      Shop / Help / About columns + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **fuchsia/purple scale** — #d946ef (fuchsia-500), #c026d3
    (fuchsia-600 primary; #a21caf, #86198f, #701a75 darker; #e879f9,
    #f0abfc, #f5d0fe, #fae8ff, #fdf4ff lighter). Sale band gradient
    from-primary-600 to-primary-800.
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827 (newsletter band + dark footer).
  - Fonts: **"Outfit"** (display) + **"Inter"** (body) via Google Fonts.
  - Shapes: rounded product cards, pill buttons, sale badges (-25%,
    Bestseller, New); dark mode via dark:bg-gray-900/dark:bg-gray-950.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/shopper-<n>/<w>/<h>`); icons → lucide-react (Truck,
  ShieldCheck, RotateCcw, Headphones, Star, ShoppingCart, Heart, Clock,
  ChevronRight, Sparkles, Mail); Outfit + Inter via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.

Shopper lives in `apps/shopper` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Shopper",
anchor links to the page's sections, a cart indicator, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Shopper page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Shopper" and links to
  Categories and New Arrivals
- **AND** the navbar SHALL show a cart indicator and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-screen hero with a headline, two
call-to-action buttons, and trust badges.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Elevate Your Everyday Style"
- **AND** it SHALL show "Shop Collection" and "Browse Categories" buttons

### Requirement: Service perks

The system SHALL render a service bar with four perks.

#### Scenario: Perks content

- **GIVEN** the page is rendered
- **WHEN** the service bar is displayed
- **THEN** it SHALL show Free Shipping, Secure Payment, Easy Returns, and
  24/7 Support

### Requirement: Featured products

The system SHALL render a featured products section with product cards.

#### Scenario: Featured products content

- **GIVEN** the page is rendered
- **WHEN** the featured products section is displayed
- **THEN** it SHALL contain a heading "Featured Products"
- **AND** it SHALL show at least four product cards with a name, price, and
  an "Add to Cart" button

### Requirement: Shop by category

The system SHALL render a category section with at least six categories.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the category section is displayed
- **THEN** it SHALL contain a heading "Shop by Category"
- **AND** it SHALL show categories for Clothing, Accessories, Footwear, and
  Bags

### Requirement: New arrivals

The system SHALL render a new arrivals section with product cards.

#### Scenario: New arrivals content

- **GIVEN** the page is rendered
- **WHEN** the new arrivals section is displayed
- **THEN** it SHALL contain a heading "New Arrivals"
- **AND** it SHALL show at least four new product cards

### Requirement: Season sale

The system SHALL render a sale section with a headline, a countdown, and
discounted products.

#### Scenario: Sale content

- **GIVEN** the page is rendered
- **WHEN** the sale section is displayed
- **THEN** it SHALL contain a heading "Season Sale"
- **AND** it SHALL show a countdown and discounted product cards

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Customers Say"
- **AND** it SHALL show at least three testimonial quotes with author names

### Requirement: Newsletter

The system SHALL render a newsletter section with a headline and a subscribe
form.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show a newsletter headline and a subscribe form with an
  email input and a "Subscribe" button

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Shop, Help, About) and a copyright
  line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Shopper app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Shopper — Fashion Store Template"
