# Template: Sparsh (Architecture Template)

## Purpose

Sparsh is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sparsh" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sparsh" — architecture template
  (source: https://colorlib.com/wp/template/sparsh/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sparsh/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`sparsh-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects,
  Contact) → Hero ("Dream Heaven City" + Details) → About ("About our
  Company / We've been creating Awesome Since 1992" + 286+, 942+, 263+
  counters) → Services → Projects → CTA ("Get Estimate") → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#f9cc41`** (buttons, accents); dark `#262533`.
  - Light backgrounds `#f9f9ff`.
  - Fonts: **"Oswald"** (display) + **"Roboto"** (body).
  - Yellow buttons with dark text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sparsh-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Sparsh lives in `apps/sparsh` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Sparsh",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Sparsh page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sparsh" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Details"
button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Details" button

### Requirement: About section

The system SHALL render an about section with a heading and stat counters.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "About our Company"
- **AND** it SHALL show at least three stat counters (286+, 942+, 263+) with labels

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

### Requirement: Call to action

The system SHALL render a call-to-action band with a "Get Estimate"
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL show a "Get Estimate" button

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

- **GIVEN** the Sparsh app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Sparsh — Architecture Template"
