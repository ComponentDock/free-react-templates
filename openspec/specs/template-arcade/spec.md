# Template: Arcade (Architecture Template)

## Purpose

Arcade is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Arcade" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Arcade" — architecture template
  (source: https://colorlib.com/wp/template/arcade/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/arcade/
  (HTTP 200, full rendered DOM + `css/style.css` (36KB) extracted).
  The TEMPLATES.md screenshot (`arcade-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Top bar (phone +675 334 567 223) → Navbar (Home,
  About us, Services, Portfolio, Contact) → Hero ("Minimalistic
  Architecture and more" + See Project) → Studio ("We are a creative
  Architecture Studio" + blurb + See Project) → Services ("Services" +
  Plans and Projects, Conceptual Architecture, Apartment Buildings,
  Skyscrapers Buildings, Documentation, Restauration Projects + READ MORE)
  → Projects ("Dare to dream of a modern..." + portfolio) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **lime `#baff00`** (buttons, accents).
  - Dark sections `#222222`, `#121212`; light `#f0f0f0`.
  - Font: **"Roboto"** (Google Fonts).
  - Lime buttons with dark text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/arcade-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Arcade lives in `apps/arcade` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Arcade",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Arcade page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Arcade" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "See
Project" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Minimalistic Architecture and more"
- **AND** it SHALL show a "See Project" button

### Requirement: Studio section

The system SHALL render a studio section with a heading "We are a creative
Architecture Studio", a blurb, and a "See Project" button.

#### Scenario: Studio content

- **GIVEN** the page is rendered
- **WHEN** the studio section is displayed
- **THEN** it SHALL contain the heading "We are a creative Architecture Studio"
- **AND** it SHALL show a blurb and a "See Project" button

### Requirement: Services section

The system SHALL render a services section with a heading and six service
cards, each with a "Read More" link.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show cards titled "Plans and Projects", "Conceptual Architecture", "Apartment Buildings", "Skyscrapers Buildings", "Documentation", and "Restauration Projects" with "Read More" links

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

- **GIVEN** the Arcade app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Arcade — Architecture Template"
