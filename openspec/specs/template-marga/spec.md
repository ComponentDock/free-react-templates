# Template: Marga (Architecture Template)

## Purpose

Marga is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Marga" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Marga" — architecture template
  (source: https://colorlib.com/wp/template/marga/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/marga/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`marga-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects,
  Contact) → Hero ("We Are Specialist In The Field of Architect" +
  Contact Us) → About ("Welcome To Our Company") → Services ("What We Do"
  - Creative Stairs, Kitchen Design, Lamp Decoration, Interior Blueprint,
    Dinning Table) → Projects → CTA ("Ready To Start Your Home") → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **teal `#43ab92`** (buttons, accents); dark `#364d59`.
  - Light backgrounds `#f8f9fa`.
  - Font: **"DM Sans"** (Google Fonts).
  - Teal buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/marga-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Marga lives in `apps/marga` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Marga",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Marga page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Marga" and links to Home, About, Services, and Contact
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
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Contact Us" button

### Requirement: About section

The system SHALL render an about section with a heading and a blurb.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Welcome To Our Company"
- **AND** it SHALL show a blurb

### Requirement: Services section

The system SHALL render a services section with a heading and at least four
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What We Do"
- **AND** it SHALL show at least four service cards with titles (Creative Stairs, Kitchen Design, Lamp Decoration, Interior Blueprint) and blurbs

### Requirement: Call to action

The system SHALL render a call-to-action band with a heading.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL show a heading "Ready To Start Your Home"

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

- **GIVEN** the Marga app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Marga — Architecture Template"
