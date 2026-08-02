# Template: Ararat (Architecture Template)

## Purpose

Ararat is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ararat" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ararat" — architecture / interior design template
  (source: https://colorlib.com/wp/template/ararat/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ararat/
  (HTTP 200, full rendered DOM + `css/style.css` (55KB) extracted).
  The TEMPLATES.md screenshot (`ararat-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (home, About, Projects, Services, blog,
  pages, Contact + GET IN TOUCH) → Hero ("We Design your space" + See Our
  Projects) → Stats ("25 Years of Experience") → About ("About Us —
  Architechtural plan design and build" + blurb + list) → Projects →
  Services → Contact → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#ff5e13`** (buttons, accents).
  - Dark text `#131313`; light backgrounds `#f9f9ff`, `#f0e9ff`.
  - Fonts: **"Playfair Display"** (display) + **"Roboto"** (body).
  - Orange buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ararat-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Ararat lives in `apps/ararat` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Ararat",
anchor links to the page's sections, a "Get in touch" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Ararat page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Ararat" and links to Home, About, Projects, and Contact
- **AND** the navbar SHALL show a "Get in touch" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "See Our
Projects" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Design your space"
- **AND** it SHALL show a "See Our Projects" button

### Requirement: About section

The system SHALL render an about section with a heading "Architechtural
plan design and build", a blurb, and a stats line.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Architechtural plan design and build"
- **AND** it SHALL show a blurb and a stats line (e.g. "25 Years of Experience")

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

- **GIVEN** the Ararat app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Ararat — Architecture Template"
