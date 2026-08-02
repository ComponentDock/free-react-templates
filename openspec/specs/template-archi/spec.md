# Template: Archi (Architecture Template)

## Purpose

Archi is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Archi" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Archi" — architecture / design quality template
  (source: https://colorlib.com/wp/template/archi/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/archi/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (59KB) extracted).
  The TEMPLATES.md screenshot (`archi-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Project, Blog,
  contact) → Hero ("Focus on Design Quality" + Contact Us) → About ("About
  Us — 52 Years Of Experience in this area" + About us) → Services ("Our
  Services — We provide best intorior solution for you" + Architecture,
  Interior Design, Urban Design) → Recent work ("Our recent work" +
  Downside Low House) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **red `#ff1f1f`** with **navy `#1f2b7b`**.
  - Light section backgrounds `#f9f9ff`, `#f0e9ff`.
  - Fonts: **"Poppins"** + **"Rajdhani"** (Google Fonts).
  - Red buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/archi-<n>/<w>/<h>`); icons → lucide-react; no assets
  copied.

Archi lives in `apps/archi` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Archi",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Archi page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Archi" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Contact
Us" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Focus on Design Quality"
- **AND** it SHALL show a "Contact Us" button

### Requirement: About section

The system SHALL render an about section with a heading "52 Years Of
Experience in this area" and a blurb.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain the heading "52 Years Of Experience in this area"
- **AND** it SHALL show a blurb

### Requirement: Services section

The system SHALL render a services section with a heading and three service
cards: "Architecture", "Interior Design", and "Urban Design".

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "We provide best intorior solution for you"
- **AND** it SHALL show cards titled "Architecture", "Interior Design", and "Urban Design"

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

- **GIVEN** the Archi app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Archi — Architecture Template"
