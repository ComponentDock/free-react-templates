# Template: Loaft (Architecture Template)

## Purpose

Loaft is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Loaft" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Loaft" — architecture template
  (source: https://colorlib.com/wp/template/loaft/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/loaft/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`loaft-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Gallery, Blog,
  Contact) → Hero ("Precise Concept design for Posh living") → About
  ("We are Loaft") → Services ("Top Services That We Offers" + Smart
  Kitchen Setup) → Gallery ("Here are some of Our Latest Work") → Blog →
  Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **gold `#f5ca56`** (buttons, accents); dark `#222222`.
  - Light backgrounds `#f9f9ff`.
  - Fonts: **"Roboto"** (body) + **"Rajdhani"** (display).
  - Gold buttons with dark text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/loaft-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Loaft lives in `apps/loaft` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Loaft",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Loaft page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Loaft" and links to Home, About, Services, and Contact
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

The system SHALL render an about section with a heading and a blurb.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "We are Loaft"
- **AND** it SHALL show a blurb

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Top Services That We Offers"
- **AND** it SHALL show at least three service cards with titles and blurbs

### Requirement: Gallery section

The system SHALL render a gallery section with a heading and a project
gallery.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "Here are some of Our Latest Work"
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

- **GIVEN** the Loaft app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Loaft — Architecture Template"
