# Template: Creativex (Astro Template)

## Purpose

Creativex is a single-page creative agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Creativex 3" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Creativex 3" — creative agency template
  (source: https://colorlib.com/wp/template/creativex-3/).
- **Demo DOM analyzed:** https://creativex-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/creativex-3/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`creativex-template-1770211073725.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Work, Services, About, Contact, Start a
  Project) → Hero ("We Create Bold Digital Experiences") → Services ("What
  We Do" + Web Design, Mobile Apps, Brand Identity, Digital Marketing) →
  Selected Work ("Selected Work" + Nova Fintech Rebrand) → About → Contact
  → Footer.
- **Design tokens extracted from the DOM:**
  - Light theme with **yellow** accents (`yellow-400`).
  - Font: **"Inter"** (Google Fonts).
  - Rounded cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/creativex-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Creativex lives in `apps/creativex` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Creativex", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Creativex page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Creativex" and links to Work, Services, and Contact
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

The system SHALL render a services section with a heading and at least four
service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What We Do"
- **AND** it SHALL show at least four service cards with titles (Web Design, Mobile Apps, Brand Identity, Digital Marketing) and blurbs

### Requirement: Selected work section

The system SHALL render a selected work section with a heading and at least
three project cards.

#### Scenario: Selected work content

- **GIVEN** the page is rendered
- **WHEN** the selected work section is displayed
- **THEN** it SHALL contain a heading "Selected Work"
- **AND** it SHALL show at least three project cards with titles and images

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

- **GIVEN** the Creativex app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Creativex — Astro Template"
