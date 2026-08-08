# Template: Foyer (Interior Design Template)

## Purpose

Foyer is a single-page interior design landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Interior" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Interior" — interior design template
  (source: https://colorlib.com/wp/template/interior/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/interior/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
  The TEMPLATES.md screenshot (`interior-free-template-1.jpg`) is the
  visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects, Blog,
  Contact) → Banner hero ("Precise concept design for stylish living" +
  Get Started) → Services ("What we offer to our clients" + Interior
  Design, Architecture Design, Concept Design) → Gallery ("Our Recent
  Works may impress you" + Lavendar ambient interior) → Features ("Some
  Features that Made us Unique" + Expert Technicians) → Testimonials →
  Call to action ("Request quote now") → Blog → Brands → Footer.
- **Design tokens extracted from `css/main.css`:**
  - Primary **gold `#c6b069`** (buttons, accents).
  - Light backgrounds `#f9f9ff`; dark text `#222222`.
  - Font: **"Poppins"** (Google Fonts).
  - Gold buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/foyer-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Foyer lives in `apps/foyer` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Foyer",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Foyer page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Foyer" and links to Home, About, Services, and Contact
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
- **AND** it SHALL show at least three service cards with titles (Interior Design, Architecture Design, Concept Design) and blurbs

### Requirement: Gallery section

The system SHALL render a gallery section with a heading and a project
gallery.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "Our Recent Works may impress you"
- **AND** it SHALL show at least three project images with captions

### Requirement: Features section

The system SHALL render a features section with a heading and feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Some Features that Made us Unique"
- **AND** it SHALL show at least three feature cards with titles and blurbs

### Requirement: Call to action

The system SHALL render a call-to-action band with a "Request quote now"
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL show a "Request quote now" button

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

- **GIVEN** the Foyer app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Foyer — Interior Design Template"
