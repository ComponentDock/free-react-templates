# Template: Divisima (eCommerce Shop Landing)

## Purpose

Divisima is a single-page eCommerce shop template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Divisima"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a fashion shop page: a top header with logo + category nav
(Women, Men, Shoes, Pages), a hero slider with product spotlights (e.g.
"denim jackets" at $29 with DISCOVER / ADD TO CART buttons), a features row
(Fast Secure Payments, Premium Products, Free & fast Delivery), a "Latest
Products" grid, a "Browse Top Selling Products" filter grid, a "Striped
Shirts" banner with a SHOP NOW button, and a footer with About / Questions
columns. Divisima recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Divisima" — free eCommerce website template
  (source: https://colorlib.com/wp/template/divisima/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/divisima/`
  (HTTP 200, 25.2KB) + stylesheet `css/style.css` (39.5KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`divisima-free-template.jpg`) confirms the visual design (light shop
  page, hot-pink accents, dark text).
- **Section order (1:1):**
  1. Header (`header-section`): logo + nav (Home, Women, Men, Shoes with
     subcategories Sneakers/Sandals/Formal Shoes/Boots/Flip Flops, Pages
     with Product/Category/Cart/Checkout).
  2. Hero (`hero-section`): product spotlight slider (e.g. "denim jackets"
     at $29) with DISCOVER + ADD TO CART buttons.
  3. Features (`features-section`): 3 feature tiles (Fast Secure Payments,
     Premium Products, Free & fast Delivery).
  4. Latest products (`top-letest-product-section`): "LATEST PRODUCTS" +
     product cards with price + ADD TO CART / wishlist buttons.
  5. Top selling (`product-filter-section`): "BROWSE TOP SELLING PRODUCTS"
     - filter tabs + product grid with prices.
  6. Banner (`banner-section`): "STRIPED SHIRTS" promo + SHOP NOW button.
  7. Footer (`footer-section`): About / Questions columns + links.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#f51167** (hot pink — accents, buttons, prices) + dark
    **#414141** (text) / **#111111**; light **#f0f0f0** / **#ebebeb**
    section backgrounds.
  - Font: **"Josefin Sans"** (sans-serif — headings + body) via Google
    Fonts.
  - Buttons: `site-btn` filled (hot pink) + `sb-line` outlined /
    `sb-white` white variants.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum product photo +
  spotlight copy + CTA; features with lucide icons; latest-products grid
  with seeded photo tiles and prices; top-selling grid with filter tabs;
  banner band; footer with About/Questions columns; all images
  picsum-seeded (`picsum.photos/seed/divisima-N/w/h`); Google Fonts via
  `<link>`.

Divisima lives in `apps/divisima` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Divisima", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Divisima page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Divisima" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero spotlight

The system SHALL render a hero section with a product spotlight and
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a product name (e.g. "denim jackets"), a price, and CTA buttons ("Discover", "Add to Cart")

### Requirement: Features row

The system SHALL render a features row with at least three feature tiles.

#### Scenario: Feature tiles

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL render three feature tiles (Fast Secure Payments, Premium Products, Free & fast Delivery)

### Requirement: Latest products

The system SHALL render a "Latest Products" section with a product grid.

#### Scenario: Latest products grid

- **GIVEN** the page is rendered
- **WHEN** the latest products section is displayed
- **THEN** it SHALL show the heading "LATEST PRODUCTS"
- **AND** it SHALL render at least four product cards, each with a name and a price

### Requirement: Top selling products

The system SHALL render a "Browse Top Selling Products" section with filter
tabs and a product grid.

#### Scenario: Top selling grid

- **GIVEN** the page is rendered
- **WHEN** the top selling section is displayed
- **THEN** it SHALL show the heading "BROWSE TOP SELLING PRODUCTS"
- **AND** it SHALL render at least six product cards with prices

### Requirement: Promo banner

The system SHALL render a promo banner with a headline and a shop button.

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner section is displayed
- **THEN** it SHALL show a promo headline (e.g. "STRIPED SHIRTS")
- **AND** it SHALL show a "Shop Now" button

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Divisima"
- **AND** it SHALL show link columns (About, Questions)
