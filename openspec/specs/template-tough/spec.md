# Template: Tough (Architecture Template)

## Purpose

Tough is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Tough" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Tough" — architecture template
  (source: https://colorlib.com/wp/template/tough/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/tough/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`tough-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects,
  Contact) → Hero ("Tough" + Learn More / Get started) → Projects
  ("#01 Exterior Building, #02 American Building, #03 Louie's Residences,
  #04 Business Building" + Explore Further) → Services ("Services" +
  Interior Design, Concept Design, Residential Design) → CTA ("Request a
  quote") → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **mint green `#53d397`** / `#79efb4` (buttons, accents); dark
    `#1b212c`.
  - Light `#f8f9fa`.
  - Font: **"Montserrat"** (Google Fonts).
  - Mint buttons with dark text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/tough-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Tough lives in `apps/tough` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Tough",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Tough page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Tough" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a CTA button

### Requirement: Projects section

The system SHALL render a projects section with numbered project cards.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show at least four numbered project cards (#01 Exterior Building, #02 American Building, #03 Louie's Residences, #04 Business Building)
- **AND** it SHALL show an "Explore Further" button

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Services"
- **AND** it SHALL show at least three service cards with titles (Interior Design, Concept Design, Residential Design) and blurbs

### Requirement: Call to action

The system SHALL render a call-to-action band with a "Request a quote"
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL show a "Request a quote" button

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

- **GIVEN** the Tough app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Tough — Architecture Template"
