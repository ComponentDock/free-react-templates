# Template: Parapet (Astro Template)

## Purpose

Parapet is a single-page construction landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Buildcraft" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Buildcraft" — construction template
  (source: https://colorlib.com/wp/template/buildcraft/).
- **Demo DOM analyzed:** https://buildcraft-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/buildcraft/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`buildcraft-template-1771943678540.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Services, Projects, Process, About,
  Pricing, Blog, Contact, Get a Quote) → Hero ("Building Tomorrow's
  Landmarks") → Services ("What We Build" + Residential Construction,
  Commercial Buildings, Renovation & Remodeling, Interior Design, Project
  Management, Green Building) → Projects → Process → Pricing → Footer.
- **Design tokens extracted from the DOM:**
  - Light theme with neutral surfaces.
  - Font: **"Outfit"** (Google Fonts).
  - Rounded cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/parapet-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Parapet lives in `apps/parapet` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Parapet", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Parapet page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Parapet" and links to Services, Projects, and Contact
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

### Requirement: Services section

The system SHALL render a services section with a heading and at least six
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What We Build"
- **AND** it SHALL show at least six service cards with titles (Residential Construction, Commercial Buildings, Renovation & Remodeling, Interior Design, Project Management, Green Building) and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a project gallery.

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

- **GIVEN** the Parapet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Parapet — Astro Template"
