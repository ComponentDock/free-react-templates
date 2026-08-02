# Template: Alpha (Architecture Template)

## Purpose

Alpha is a single-page architecture/agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Alpha" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Alpha" — free HTML architecture template
  (source: https://colorlib.com/wp/template/alpha/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/alpha/
  (HTTP 200, full rendered DOM + `css/style.css` (29KB) extracted).
  The TEMPLATES.md screenshot (`alpha-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Dropdown, Inner Page, Contact us,
  Visit Colorlib) → Hero ("Awesome free html template by Colorlib." + Adam
  Aderson + Get Quote) → Quote band ("Get a quote / Share me please!") →
  Mission ("Our Mission" + The Big Oxmox advised her... + Our Mission) →
  Services ("Our Services" + cards) → Contact Us ("Contact Us" + Square) →
  Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **coral/orange `#ff926b`** (buttons, accents).
  - Dark text `#000`; light `#f5f5f5`, `#f8f9fa`.
  - Font: **"Montserrat"** (Google Fonts).
  - Rounded coral buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/alpha-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Alpha lives in `apps/alpha` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Alpha",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Alpha page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Alpha" and links to Home, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"Get Quote" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a blurb and a "Get Quote" button

### Requirement: Mission section

The system SHALL render a mission section with a heading and a blurb.

#### Scenario: Mission content

- **GIVEN** the page is rendered
- **WHEN** the mission section is displayed
- **THEN** it SHALL contain a heading "Our Mission"
- **AND** it SHALL show a blurb

### Requirement: Services section

The system SHALL render a services section with a heading and at least
three service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Services"
- **AND** it SHALL show at least three service cards with titles and blurbs

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

- **GIVEN** the Alpha app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Alpha — Architecture Template"
