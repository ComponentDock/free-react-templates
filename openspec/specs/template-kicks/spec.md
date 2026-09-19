# Template: Kicks (Shoe Store E-Commerce)

## Purpose

Kicks is a shoe store e-commerce landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Footwear" website template design (see TEMPLATES.md), built
under the new name **Kicks** with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Footwear" — shoe store e-commerce template
  (source: https://colorlib.com/wp/template/footwear/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/footwear/
  (HTTP 200, full rendered DOM + css/style.css extracted).
- **Section order (1:1):** Navbar (logo "Kicks", search, menu: Home/Men/Women/About/Contact/Cart) → Sale Banner (scrolling announcements) → Hero Slider (3 slides with dark overlay: Men's Shoes Collection, Huge Sale 50% Off, New Arrival) → Intro quote → Shop by Gender (2-column: Men's/Women's Collection) → Best Sellers (4×4 product grid) → Trusted Partners (5 brand logos) → Footer (5 columns: About+social, Customer Care, Information, News, Contact; Component Dock link; copyright).
- **Design tokens extracted from style.css:**
  - Primary **blue `#007bff`** (buttons, accents).
  - Dark `#343a40` (navigation, footer background).
  - Body text `#212529`, muted `#6c757d`.
  - Hero overlay: `rgba(0,0,0,0.5)`.
  - Buttons: Bootstrap-style, rectangular (no border-radius), primary blue bg, white text.
  - Fonts: Montserrat (body, 300-700), Rokkitt (headings, 400-700).
- **Recreation decisions:** Product images use picsum.photos seeded placeholders; brand icons use inline SVGs (lucide-react removed brand icons); Google Fonts loaded via `<link>` in index.html.

Kicks lives in `apps/kicks` and uses shared components from `packages/ui`
(cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Kicks",
a search input, navigation links, and a cart indicator.

#### Scenario: Navbar content

- **GIVEN** the Kicks page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand name "Kicks"
- **AND** the navbar SHALL show navigation links: Home, Men, Women, About, Contact
- **AND** the navbar SHALL show a search input
- **AND** the navbar SHALL show a cart indicator

#### Scenario: Mobile menu toggle

- **GIVEN** the Kicks page is rendered on a mobile viewport
- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu SHALL become visible

### Requirement: Sale banner

The system SHALL render a sale announcement banner below the navigation.

#### Scenario: Sale banner content

- **GIVEN** the Kicks page is rendered
- **WHEN** the page loads
- **THEN** a sale announcement banner SHALL be visible below the navbar

### Requirement: Hero slider

The system SHALL render a hero section with a background image slideshow
and centered text overlays.

#### Scenario: Hero slider content

- **GIVEN** the Kicks page is rendered
- **WHEN** the page loads
- **THEN** the hero section SHALL display a heading
- **AND** the hero section SHALL display a "Shop Collection" button
- **AND** the hero section SHALL show navigation dots for slide selection

#### Scenario: Hero auto-advance

- **GIVEN** the Kicks page is rendered
- **WHEN** 5 seconds pass without user interaction
- **THEN** the hero slider SHALL advance to the next slide automatically

### Requirement: Intro quote

The system SHALL render a centered introductory quote section.

#### Scenario: Intro content

- **GIVEN** the Kicks page is rendered
- **WHEN** the page loads
- **THEN** the intro section SHALL display the text "It started with a simple idea"

### Requirement: Shop by gender

The system SHALL render a two-column section linking to Men's and Women's collections.

#### Scenario: Gender sections

- **GIVEN** the Kicks page is rendered
- **WHEN** the page loads
- **THEN** a "Shop Men's Collection" section SHALL be visible
- **AND** a "Shop Women's Collection" section SHALL be visible

### Requirement: Best sellers

The system SHALL render a product grid of 16 best-selling items.

#### Scenario: Product grid

- **GIVEN** the Kicks page is rendered
- **WHEN** the page loads
- **THEN** the "Best Sellers" heading SHALL be visible
- **AND** 16 product cards SHALL be rendered
- **AND** each product card SHALL display a name and price
- **AND** a "Shop All Products" button SHALL be visible

### Requirement: Partners

The system SHALL render a trusted partners section with brand placeholders.

#### Scenario: Partners content

- **GIVEN** the Kicks page is rendered
- **WHEN** the page loads
- **THEN** the "Trusted Partners" heading SHALL be visible

### Requirement: Footer

The system SHALL render a footer with about information, navigation links,
contact details, social media icons, and a Component Dock attribution link.

#### Scenario: Footer sections

- **GIVEN** the Kicks page is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL show an "About Kicks" section
- **AND** the footer SHALL show social media icon links
- **AND** the footer SHALL show Customer Care links
- **AND** the footer SHALL show Information links
- **AND** the footer SHALL show Contact Information

#### Scenario: Component Dock attribution

- **GIVEN** the Kicks page is rendered
- **WHEN** the user inspects the footer
- **THEN** a link to https://www.componentdock.com/ SHALL be present
- **AND** the link text SHALL contain "Component Dock"

### Requirement: Accessibility

The system SHALL use semantic HTML elements throughout.

#### Scenario: Semantic structure

- **GIVEN** the Kicks page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL use `<nav>` for navigation
- **AND** the page SHALL use `<main>` for primary content
- **AND** the page SHALL use `<footer>` for the footer
- **AND** headings SHALL follow a logical hierarchy
