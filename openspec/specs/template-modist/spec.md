# Template: Modist (Fashion Shop Landing)

## Purpose

Modist is a single-page fashion-shop template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Modist"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a black-and-pink fashion page: a header with logo + nav
(Home, Shop, About, Blog, Contact), a hero ("Le Stylist" / "Wear Your
Dress"), a trending section, an "Our Products" grid, a "Summer Sale" band,
a testimony band, a "Recent Blog" row, a services section ("We want you to
express yourself": Refund Policy, Premium Packaging, Superior Quality), a
subscribe band, and a footer with Menu / Help / "Have a Questions?"
columns. Modist recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Modist" — free fashion shop website template
  (source: https://colorlib.com/wp/template/modist/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/modist/`
  (HTTP 200, 43.4KB) + stylesheet `css/style.css` (79.2KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`modist-free-template.jpg`) confirms the visual design (black + pink
  accents, light sections).
- **Section order (1:1):**
  1. Navbar (`ftco_navbar`): logo "Modist" + nav (Home, Shop, About, Blog,
     Contact).
  2. Hero: "Le Stylist" / "Wear Your Dress" headline.
  3. Trending (`ftco-product`): "Trending" + product tiles ("Young Woman
     Wearing Dress").
  4. Products (`ftco-section bg-light`): "Our Products" + product grid.
  5. Sale (`ftco-section-more img`): "Summer Sale" band.
  6. Testimony (`testimony-section bg-light`): "Testimony" band.
  7. Blog (`ftco-section`): "Recent Blog" + post cards ("Even the
     all-powerful Pointing has no control about the blind texts").
  8. Services (`ftco-services`): "We want you to express yourself" + 3
     cards (Refund Policy, Premium Packaging, Superior Quality).
  9. Subscribe (`ftco-section-parallax`): "Subscribe to our Newsletter".
  10. Footer (`ftco-footer bg-light`): brand + Menu / Help / "Have a
      Questions?".
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#f1b8c4** (pink — accents, highlights) on black
    **#000000** / dark **#212529** text; light **#f8f9fa** / `bg-light`
    section backgrounds.
  - Font: **"Roboto Condensed"** (sans — headings) + **"Work Sans"** /
    **"Lato"** (sans — body) via Google Fonts.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum fashion photo +
  headline; trending/product grids with seeded photo tiles; sale band;
  testimony band; blog cards with seeded photos; services with lucide
  icons; subscribe band; footer with link columns; all images picsum-seeded
  (`picsum.photos/seed/modist-N/w/h`); Google Fonts via `<link>`.

Modist lives in `apps/modist` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Modist", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Modist page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Modist" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width hero section with a headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Le Stylist" / "Wear Your Dress")

### Requirement: Trending

The system SHALL render a "Trending" section with at least four product
tiles.

#### Scenario: Trending grid

- **GIVEN** the page is rendered
- **WHEN** the trending section is displayed
- **THEN** it SHALL show the heading "Trending"
- **AND** it SHALL render at least four product tiles

### Requirement: Our Products

The system SHALL render an "Our Products" section with at least six product
tiles.

#### Scenario: Product grid

- **GIVEN** the page is rendered
- **WHEN** the products section is displayed
- **THEN** it SHALL show the heading "Our Products"
- **AND** it SHALL render at least six product tiles

### Requirement: Summer Sale band

The system SHALL render a "Summer Sale" promo band.

#### Scenario: Sale content

- **GIVEN** the page is rendered
- **WHEN** the sale band is displayed
- **THEN** it SHALL show the heading "Summer Sale"

### Requirement: Services

The system SHALL render a services section with three cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "We want you to express yourself"
- **AND** it SHALL render three cards (Refund Policy, Premium Packaging, Superior Quality)

### Requirement: Subscribe band

The system SHALL render a newsletter subscribe band.

#### Scenario: Subscribe content

- **GIVEN** the page is rendered
- **WHEN** the subscribe band is displayed
- **THEN** it SHALL show the heading "Subscribe to our Newsletter"

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Modist"
- **AND** it SHALL show link columns (Menu, Help)
