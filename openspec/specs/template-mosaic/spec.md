# Template: Mosaic (Architecture Template)

## Purpose

Mosaic is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Mosaic" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Mosaic" — architecture template
  (source: https://colorlib.com/wp/template/mosaic/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/mosaic/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`mosaic-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects,
  Contact) → Hero ("Architecture Firm / We Love Modern Designs" + View
  our works) → About ("We Create Amazing Architecture Designs" + "We are
  the best Interior, Exterior & Architecture Firm") → Workflow ("Our Work
  Flow" + Perfectly Design, Carefully Planned, Smartly Execute) → Projects
  → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#0033c7`** (buttons, accents); dark `#000000`.
  - Light backgrounds `#dee2e6`, `#f8f9fa`.
  - Font: Bootstrap system sans stack.
  - Blue buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/mosaic-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Mosaic lives in `apps/mosaic` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Mosaic",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Mosaic page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Mosaic" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "View our
works" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "View our works" button

### Requirement: About section

The system SHALL render an about section with headings and blurbs.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading "We Create Amazing Architecture Designs"
- **AND** it SHALL show a blurb

### Requirement: Workflow section

The system SHALL render a workflow section with a heading and at least three
step cards.

#### Scenario: Workflow content

- **GIVEN** the page is rendered
- **WHEN** the workflow section is displayed
- **THEN** it SHALL contain a heading "Our Work Flow"
- **AND** it SHALL show at least three step cards (Perfectly Design, Carefully Planned, Smartly Execute) with blurbs

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

- **GIVEN** the Mosaic app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Mosaic — Architecture Template"
