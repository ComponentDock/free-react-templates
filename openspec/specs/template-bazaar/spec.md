# Template: Bazaar (eCommerce Shop Landing)

## Purpose

Bazaar is a single-page eCommerce shop template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "ShopMax"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a pink-accented shop page: a navbar (Home, Menu One/Two/
Three, Shop, Catalogue, New Arrivals, Contact), a hero ("#New Summer
Collection 2019" / "Arrivals Sales"), a "Discover The Collections" band, a
"Popular Products" grid (Gray Shoe, Blue Shoe High Heels, Denim Jacket,
Leather Green Bag, Smooth Cloth, Yellow Jacket), a "Most Rated" row, a
"New Shoes" hero band, a "Finding Your Perfect Shirts This Summer" promo,
and a footer with Quick Links / Contact Info columns. Bazaar recreates
that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "ShopMax" — free eCommerce website template
  (source: https://colorlib.com/wp/template/shopmax/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/shopmax/`
  (HTTP 200, 21.2KB) + stylesheet `css/style.css` (22.7KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`shopmax-free-template.jpg`) confirms the visual design (light shop
  page, pink accents).
- **Section order (1:1):**
  1. Navbar (`site-navbar bg-white`): logo + nav (Home, Menu One/Two/Three,
     Shop, Catalogue, New Arrivals, Contact).
  2. Hero: "#New Summer Collection 2019" / "Arrivals Sales" + "Shop Now"
     button.
  3. Collections: "Discover The Collections" band.
  4. Popular products: "Popular Products" grid (Gray Shoe, Blue Shoe High
     Heels, Denim Jacket, Leather Green Bag, Smooth Cloth, Yellow Jacket).
  5. Most rated: "Most Rated" product row.
  6. New shoes hero: "New Shoes" band.
  7. Promo: "Finding Your Perfect Shirts This Summer".
  8. Footer (`site-footer`): Quick Links / Contact Info columns.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ee4266** (pink — accents, highlights) + dark
    **#25262a** / **#333333** text; light **#edf0f5** / **#f9f9f9**
    section backgrounds.
  - Font: icomoon icon font; body font defaults to the ColorLib sans
    (recreated with a modern sans e.g. "Poppins" via Google Fonts).
  - Buttons: `btn btn-black` black filled, square (rounded-0).
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum product photo +
  headline + CTA; collections band; popular/most-rated product grids with
  seeded photo tiles; new-shoes band; promo; footer with link columns; all
  images picsum-seeded (`picsum.photos/seed/bazaar-N/w/h`); Google Fonts
  via `<link>`.

Bazaar lives in `apps/bazaar` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Bazaar", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Bazaar page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Bazaar" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a hero section with a headline and a shop button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a headline (e.g. "#New Summer Collection 2019" / "Arrivals Sales")
- **AND** it SHALL show a "Shop Now" button

### Requirement: Popular products

The system SHALL render a "Popular Products" section with at least six
product tiles.

#### Scenario: Popular grid

- **GIVEN** the page is rendered
- **WHEN** the popular products section is displayed
- **THEN** it SHALL show the heading "Popular Products"
- **AND** it SHALL render at least six product tiles (Gray Shoe, Blue Shoe High Heels, Denim Jacket, Leather Green Bag, Smooth Cloth, Yellow Jacket)

### Requirement: Most rated

The system SHALL render a "Most Rated" section with at least four product
tiles.

#### Scenario: Most rated row

- **GIVEN** the page is rendered
- **WHEN** the most rated section is displayed
- **THEN** it SHALL show the heading "Most Rated"
- **AND** it SHALL render at least four product tiles

### Requirement: Promo

The system SHALL render a promo section with a headline.

#### Scenario: Promo content

- **GIVEN** the page is rendered
- **WHEN** the promo section is displayed
- **THEN** it SHALL show a promo headline (e.g. "Finding Your Perfect Shirts This Summer")

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Bazaar"
- **AND** it SHALL show link columns (Quick Links, Contact Info)
