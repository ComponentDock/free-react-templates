# Template: Square (Architecture Template)

## Purpose

Square is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Square" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Square" — architecture template
  (source: https://colorlib.com/wp/template/square/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/square/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`square-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects,
  Contact) → Hero ("We have a passion in creating new and unique spaces")
  → About ("Perfectly Design, Carefully Planned, Smartly Execute") → CTA
  ("Request A Quote") → Stats ("Since we started work in 1980") → Projects
  ("Our Projects" + Office Interior Design) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **green `#2e9e5b`** (buttons, accents) + **yellow `#fdb72c`**.
  - Dark `#000000`, `#212529`; light `#f8f9fa`.
  - Fonts: **"Rubik"** (display) + Bootstrap system sans (body).
  - Green buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/square-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Square lives in `apps/square` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Square",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Square page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Square" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading

### Requirement: About section

The system SHALL render an about section with at least three feature cards.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show at least three feature cards (Perfectly Design, Carefully Planned, Smartly Execute) with blurbs

### Requirement: Call to action

The system SHALL render a call-to-action band with a "Request A Quote"
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL show a "Request A Quote" button

### Requirement: Stats section

The system SHALL render a stats section with a heading.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show a heading "Since we started work in 1980"

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our Projects"
- **AND** it SHALL show at least three project images with captions

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

- **GIVEN** the Square app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Square — Architecture Template"
