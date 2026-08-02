# Template: Brewhouse (Astro Template)

## Purpose

Brewhouse is a single-page coffee shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Brewhouse" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Brewhouse" — coffee shop template
  (source: https://colorlib.com/wp/template/brewhouse/).
- **Demo DOM analyzed:** https://brewhouse-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/brewhouse/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`brewhouse-template-1770211139958.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Menu, Our Story, Process, Locations,
  Shop, Order Online) → Hero ("Crafted with Passion & Precision") → Menu
  ("Our Menu" + Espresso Drinks: Espresso, Cortado, Cappuccino; Pour
  Overs: Ethiopian Yirgacheffe) → Our Story → Process → Locations →
  Footer.
- **Design tokens extracted from the DOM:**
  - Warm coffee-toned palette; light surfaces.
  - Fonts: **"DM Sans"** (body) + **"Playfair Display"** (display) via
    Google Fonts.
  - Rounded cards.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/brewhouse-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Brewhouse lives in `apps/brewhouse` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Brewhouse", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Brewhouse page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Brewhouse" and links to Menu, Our Story, and Locations
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a blurb.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a blurb

### Requirement: Menu section

The system SHALL render a menu section with a heading and at least four
menu items.

#### Scenario: Menu content

- **GIVEN** the page is rendered
- **WHEN** the menu section is displayed
- **THEN** it SHALL contain a heading "Our Menu"
- **AND** it SHALL show at least four menu items (Espresso, Cortado, Cappuccino, Ethiopian Yirgacheffe) with prices

### Requirement: Our Story section

The system SHALL render an "Our Story" section with a heading and a blurb.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the story section is displayed
- **THEN** it SHALL contain a heading "Our Story"
- **AND** it SHALL show a blurb

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Brewhouse app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Brewhouse — Astro Template"
