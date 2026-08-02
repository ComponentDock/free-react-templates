# Template: Eventor (Astro Template)

## Purpose

Eventor is a single-page tech conference landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Eventor" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Eventor" — event/conference template
  (source: https://colorlib.com/wp/template/eventor/).
- **Demo DOM analyzed:** https://eventor-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/eventor/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`eventor-template-1770211156837.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Speakers, Schedule, Tickets, Sponsors,
  Venue, Get Tickets) → Hero ("The Premier Technology Conference") →
  Speakers ("Learn From the Best" + Dr. Sarah Chen, Marcus Johnson, Elena
  Rodriguez, David Kim, Aisha Patel, James Wright) → Schedule → Sponsors →
  Venue → Footer.
- **Design tokens extracted from the DOM:**
  - Dark theme with **blue** (`blue-500`) and **green** (`green-500`)
    accents.
  - Font: **"Space Grotesk"** (Google Fonts).
  - Rounded cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/eventor-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Eventor lives in `apps/eventor` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Eventor",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Eventor page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Eventor" and links to Speakers, Schedule, and Tickets
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Get
Tickets" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Get Tickets" button

### Requirement: Speakers section

The system SHALL render a speakers section with a heading and at least six
speaker cards.

#### Scenario: Speakers content

- **GIVEN** the page is rendered
- **WHEN** the speakers section is displayed
- **THEN** it SHALL contain a heading "Learn From the Best"
- **AND** it SHALL show at least six speaker cards (Dr. Sarah Chen, Marcus Johnson, Elena Rodriguez, David Kim, Aisha Patel, James Wright) with roles

### Requirement: Schedule section

The system SHALL render a schedule section with session listings.

#### Scenario: Schedule content

- **GIVEN** the page is rendered
- **WHEN** the schedule section is displayed
- **THEN** it SHALL show at least three scheduled sessions with times and titles

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

- **GIVEN** the Eventor app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Eventor — Astro Template"
