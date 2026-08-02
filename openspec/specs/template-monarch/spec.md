# Template: Monarch (Architecture Template)

## Purpose

Monarch is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Monarch" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Monarch" — architecture template
  (source: https://colorlib.com/wp/template/monarch/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/monarch/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`monarch-colorlib-template.jpg`) is the
  visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects,
  Contact) → Hero ("Monarch") → About → Services → Projects → Footer
  ("Connect with us" + Navigation).
- **Design tokens extracted from `style.css`:**
  - Primary **sage green `#8db1ab`** (accents); dark `#000000`,
    `#212529`; light `#f8f9fa`.
  - Font: Bootstrap system sans stack.
  - Sage accents with white/black text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/monarch-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Monarch lives in `apps/monarch` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Monarch",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Monarch page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Monarch" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with the site name as the
headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading

### Requirement: About section

The system SHALL render an about section with a heading and a blurb.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading and a blurb

### Requirement: Services section

The system SHALL render a services section with at least three service
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show at least three service cards with titles and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a project gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show at least three project images with captions

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

- **GIVEN** the Monarch app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Monarch — Architecture Template"
