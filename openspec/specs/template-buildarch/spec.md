# Template: Buildarch (Architecture Template)

## Purpose

Buildarch is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Buildarch" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Buildarch" — architecture template
  (source: https://colorlib.com/wp/template/buildarch/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/buildarch/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`buildarch-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects, Blog,
  Contact) → Hero ("Precise concept design for stylish living" + Precise
  concept) → Quick Facts (596, 552, 1009, 435 stat counters) → About →
  Services ("Architecture" cards) → Projects ("Recent Projects" gallery) →
  Testimonial ("Fanny Spencer") → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **lime `#a7cb00`** (buttons, accents); darker yellow `#f8b600`.
  - Light backgrounds `#f9f9ff`, `#777777` body text.
  - Fonts: **"Roboto"** (body) + **"Heebo"** (display).
  - Lime buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/buildarch-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Buildarch lives in `apps/buildarch` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Buildarch",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Buildarch page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Buildarch" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a blurb.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a blurb

### Requirement: Quick facts section

The system SHALL render a quick facts band with at least four stat counters.

#### Scenario: Quick facts content

- **GIVEN** the page is rendered
- **WHEN** the quick facts section is displayed
- **THEN** it SHALL show at least four stat counters with numbers and labels

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Architecture"
- **AND** it SHALL show at least three service cards with titles and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Recent Projects"
- **AND** it SHALL show at least three project images with captions

### Requirement: Testimonial section

The system SHALL render a testimonial section with a quote and an author.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show a quote and an author name

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

- **GIVEN** the Buildarch app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Buildarch — Architecture Template"
