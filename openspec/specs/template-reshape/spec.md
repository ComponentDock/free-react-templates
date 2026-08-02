# Template: Reshape (Architecture Template)

## Purpose

Reshape is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Reshape" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Reshape" — architecture template
  (source: https://colorlib.com/wp/template/reshape/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/reshape/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`reshape-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Services, Projects, About,
  Contact) → Hero ("We are Reshape, and we shape buildings." + See Case
  Study) → Services ("Our services" + Construction Consultation, House
  Renovation, Planning, Interior Design, Architecture, Installation Works)
  → Projects → About ("About us") → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#0779e4`** (buttons, accents); black `#000000`,
    white `#ffffff` sections.
  - Font: **"Mulish"** (Google Fonts).
  - Blue buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/reshape-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Reshape lives in `apps/reshape` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Reshape",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Reshape page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Reshape" and links to Home, Services, Projects, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "See Case
Study" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "See Case Study" button

### Requirement: Services section

The system SHALL render a services section with a heading and at least six
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our services"
- **AND** it SHALL show at least six service cards with titles (Construction Consultation, House Renovation, Planning, Interior Design, Architecture, Installation Works) and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a project gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show at least three project images with captions

### Requirement: About section

The system SHALL render an about section with a heading and a blurb.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading and a blurb

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

- **GIVEN** the Reshape app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Reshape — Architecture Template"
