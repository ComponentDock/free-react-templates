# Template: Construction (Architecture Template)

## Purpose

Construction is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Construction" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Construction" — construction website template
  (source: https://colorlib.com/wp/template/construction/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/construction/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
  The TEMPLATES.md screenshot (`construction-free-construction-website-template.jpg`)
  is the visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, Feature, Project, Service, Blog,
  Contact) → Banner hero ("Discover the Colorful World" + Discover Now) →
  Features ("Build Your Dream") → Offered services ("Building Drawings")
  → Projects ("Alex Complex for residence") → Facts band → Services ("Some
  Features that Made us Unique" + Basic & Common Repairs, Brake Repairs &
  Services, Preventive Maintenance) → Testimonials → Latest Blog → Footer.
- **Design tokens extracted from `css/main.css`:**
  - Primary **yellow `#fab700`** (buttons, accents).
  - Dark text `#222222`; light backgrounds `#f9f9ff`.
  - Font: **"Poppins"** (Google Fonts).
  - Yellow buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/construction-<n>/<w>/<h>`); icons → lucide-react;
  forms prevent default (no backend); no assets copied.

Construction lives in `apps/construction` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Construction", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Construction page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Construction" and links to Home, Feature, Project, Service, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Discover
Now" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Discover Now" button

### Requirement: Features section

The system SHALL render a features section with a heading and feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Build Your Dream"
- **AND** it SHALL show at least three feature cards with titles and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show at least three project images with captions

### Requirement: Services section

The system SHALL render a services section with a heading and at least three
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Some Features that Made us Unique"
- **AND** it SHALL show at least three service cards with titles and blurbs

### Requirement: Testimonials section

The system SHALL render a testimonials section with a quote slider.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least one quote with an author name

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

- **GIVEN** the Construction app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Construction — Architecture Template"
