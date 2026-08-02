# Template: Ai Summit (Astro Template)

## Purpose

Ai Summit is a single-page conference landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ai Summit" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ai Summit" — AI conference template
  (source: https://colorlib.com/wp/template/ai-summit/).
- **Demo DOM analyzed:** https://aisummit-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/ai-summit/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`aisummit-template-1770211095695.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Speakers, Tracks, Schedule, Tickets,
  Venue) → Hero ("The Future of AI is Here" + date/venue + View Schedule /
  Get Tickets) → Speakers ("Learn from the Best" + Dr. Maya Patel, Andrej
  Kovalenko, Dr. Sophia Chen, Marcus Thompson, Dr. Yuki Tanaka, James
  Okonkwo, Dr. Elena Rossi, Kevin Park) → Tracks → Schedule → Venue →
  Footer.
- **Design tokens extracted from the DOM:**
  - Dark hero (`gray-900/950`) with **green** accents (`green-500`,
    `green-300`); light sections.
  - Font: Google Fonts (Space Grotesk / Inter family).
  - Pill buttons with green accents.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/aisummit-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Ai Summit lives in `apps/ai-summit` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Ai
Summit", anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Ai Summit page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Ai Summit" and links to Speakers, Schedule, and Tickets
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, event details,
and CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "View Schedule" button and a "Get Tickets" button

### Requirement: Speakers section

The system SHALL render a speakers section with a heading and at least six
speaker cards.

#### Scenario: Speakers content

- **GIVEN** the page is rendered
- **WHEN** the speakers section is displayed
- **THEN** it SHALL contain a heading "Learn from the Best"
- **AND** it SHALL show at least six speaker cards with names and roles

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

- **GIVEN** the Ai Summit app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Ai Summit — Astro Template"
