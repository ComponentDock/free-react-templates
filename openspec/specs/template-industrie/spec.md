# Template: Industrie (Architecture Template)

## Purpose

Industrie is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Industrie" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Industrie" — industrial website template
  (source: https://colorlib.com/wp/template/industrie/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/industrie/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`industrie-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects, News,
  Contact) → Hero ("Industrie / Specialized Technical Solutions" + Get In
  Touch) → Stats ("Let the number speaks for us." + 7000+, 90+, 2900+
  counters) → Services ("Our Specialty" + Automative Manufacturing,
  Mechanical Engineering, Oil & Gas Energy, Industrial Construction) →
  Projects → Testimonials → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **red `#f23a2e`** (buttons, accents); dark `#25262a`,
    `#343a40`.
  - Fonts: **"Nunito Sans"** (body) + **"Roboto Mono"** / icomoon (icons).
  - Red buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/industrie-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Industrie lives in `apps/industrie` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Industrie",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Industrie page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Industrie" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Get In
Touch" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Get In Touch" button

### Requirement: Stats section

The system SHALL render a stats section with a heading and at least three
stat counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL contain a heading "Let the number speaks for us."
- **AND** it SHALL show at least three stat counters with numbers and labels

### Requirement: Services section

The system SHALL render a services section with a heading and at least four
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Specialty"
- **AND** it SHALL show at least four service cards with titles (Automative Manufacturing, Mechanical Engineering, Oil & Gas Energy, Industrial Construction) and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

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

- **GIVEN** the Industrie app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Industrie — Architecture Template"
