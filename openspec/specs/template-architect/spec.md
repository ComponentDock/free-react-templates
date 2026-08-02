# Template: Architect (Architecture Template)

## Purpose

Architect is a single-page architecture/construction landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Architect" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Architect" — construction services template
  (source: https://colorlib.com/wp/template/architect/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/architect/
  (HTTP 200, full rendered DOM + `css/style.css` (32KB) extracted).
  The TEMPLATES.md screenshot (`architect-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Projects, Services, Blog, About,
  Contact) → Hero ("Providing all Kinds of Construction Services" +
  Constructing Spaces For You / Building Your Solid / High Class Building)
  → Welcome ("Welcome! Secrets of Success of Our Projects" + 25 Years
  Experience) → Works ("Our Done Projects" + California Mega Mall,
  Commercial Building, Miami Private Apartment + View All Projects) →
  Projects → Services → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#FFCD00`** (buttons, accents).
  - Dark text `#333333`, `#252525`; light `#fafafa`.
  - Font: **"Montserrat"** (Google Fonts).
  - Yellow buttons with dark text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/architect-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Architect lives in `apps/architect` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Architect",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Architect page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Architect" and links to Home, Projects, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a
call-to-action.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Providing all Kinds of Construction Services"
- **AND** it SHALL show at least one of the taglines "Constructing Spaces For You", "Building Your Solid", or "High Class Building"

### Requirement: Welcome section

The system SHALL render a welcome section with a heading and a "25 Years
Experience" stat.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL contain a heading "Secrets of Success of Our Projects"
- **AND** it SHALL show a "25 Years Experience" stat and a blurb

### Requirement: Works section

The system SHALL render a works section with a heading, at least three
project cards, and a "View All Projects" button.

#### Scenario: Works content

- **GIVEN** the page is rendered
- **WHEN** the works section is displayed
- **THEN** it SHALL contain a heading "Our Done Projects"
- **AND** it SHALL show at least three project cards and a "View All Projects" button

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

- **GIVEN** the Architect app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Architect — Architecture Template"
