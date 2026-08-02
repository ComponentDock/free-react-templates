# Template: Kd (Architecture Template)

## Purpose

Kd is a single-page architecture landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Kd"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Kd" — architecture template
  (source: https://colorlib.com/wp/template/kd/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/kd/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`kd-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Project, About, Services, Blog,
  Contact) → Hero ("Architects with need a different design") → About
  ("About KD Architecture" + Perfectly Design, Carefully Planned, Smartly
  Execute) → Projects ("Home Interior Design, Office Interior Design,
  Apartment Design, Dining Table") → View All Projects → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **gold `#ccb78f`** (accents); dark `#000000`, `#212529`
    sections; light `#f8f9fa`.
  - Fonts: **"Work Sans"** (display) + **"Poppins"** (body).
  - Gold accents on dark.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/kd-<n>/<w>/<h>`); icons → lucide-react; no assets
  copied.

Kd lives in `apps/kd` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Kd",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Kd page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Kd" and links to Home, About, Services, and Contact
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

The system SHALL render an about section with a heading and at least three
feature cards.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "About KD Architecture"
- **AND** it SHALL show at least three feature cards (Perfectly Design, Carefully Planned, Smartly Execute) with blurbs

### Requirement: Projects section

The system SHALL render a projects section with a project gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show at least three project images with captions (Home Interior Design, Office Interior Design, Apartment Design)
- **AND** it SHALL show a "View All Projects" button

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

- **GIVEN** the Kd app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Kd — Architecture Template"
