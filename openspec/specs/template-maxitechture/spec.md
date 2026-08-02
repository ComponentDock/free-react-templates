# Template: Maxitechture (Architecture Template)

## Purpose

Maxitechture is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Maxitechture" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Maxitechture" — architecture template
  (source: https://colorlib.com/wp/template/maxitechture/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/maxitechture/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`maxitechture-free-template.jpg`) is the
  visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects, Blog,
  Contact) → Hero ("Precise concept design for stylish living" + Get
  Started) → Services ("What we offer to our clients" + Architecture,
  Interior Design, Concept Design) → Projects ("Our Recent Completed
  Projects" + Nest Protect) → About ("More About Us") → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **lime `#a7cb00`** (buttons, accents); dark `#222222`.
  - Light backgrounds `#f9f9ff`; body text `#777777`.
  - Fonts: **"Roboto"** (body) + **"Heebo"** (display).
  - Lime buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/maxitechture-<n>/<w>/<h>`); icons → lucide-react;
  no assets copied.

Maxitechture lives in `apps/maxitechture` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Maxitechture", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Maxitechture page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Maxitechture" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Get
Started" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Get Started" button

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What we offer to our clients"
- **AND** it SHALL show at least three service cards with titles (Architecture, Interior Design, Concept Design) and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our Recent Completed Projects"
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

- **GIVEN** the Maxitechture app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Maxitechture — Architecture Template"
