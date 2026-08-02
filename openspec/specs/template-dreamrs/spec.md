# Template: Dreamrs (Architecture Template)

## Purpose

Dreamrs is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dreamrs" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Dreamrs" — real estate / architecture template
  (source: https://colorlib.com/wp/template/dreamrs/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/dreamrs/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`dreamrs-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects, Blog,
  Contact) → Hero ("Proparties Now In City" + learn More) → About ("Hello
  City We are leader in proparties.") → Project ("Hello City We are leader
  in Projects." + property cards) → Testimonials ("Etiam tortor aliquet
  habitan" cards) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **red `#ff3334`** (buttons, accents); `#415094` secondary.
  - Light backgrounds `#f9f9ff`, `#f0e9ff`.
  - Font: **"Poppins"** (Google Fonts).
  - Red buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/dreamrs-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Dreamrs lives in `apps/dreamrs` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Dreamrs",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Dreamrs page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Dreamrs" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Learn
More" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Learn More" button

### Requirement: About section

The system SHALL render an about section with a heading and a blurb.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading
- **AND** it SHALL show a blurb

### Requirement: Projects section

The system SHALL render a projects section with a heading and property
cards.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "our project"
- **AND** it SHALL show at least three property cards with images, titles, and blurbs

### Requirement: Testimonials section

The system SHALL render a testimonials section with quote cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least two quote cards with text and author names

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

- **GIVEN** the Dreamrs app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Dreamrs — Architecture Template"
