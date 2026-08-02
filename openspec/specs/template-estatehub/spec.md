# Template: Estatehub (Astro Template)

## Purpose

Estatehub is a single-page real estate landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Estatehub" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Estatehub" — real estate template
  (source: https://colorlib.com/wp/template/estatehub/).
- **Demo DOM analyzed:** https://estatehub-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/estatehub/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`estatehub-template-1770211352442.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Properties, Agents, About, Contact,
  List Your Property) → Hero ("Find Your Dream Home" + search) → Featured
  Properties ("Featured Properties" + Luxury Manhattan Penthouse, Modern
  Brooklyn Townhouse, Waterfront Hamptons Estate, Tribeca Industrial Loft)
  → Why Choose Prestige Homes ("Why Choose Prestige Homes" + Trusted
  Expertise) → Agents → Footer.
- **Design tokens extracted from the DOM:**
  - Light theme with **amber** accents (`amber-400`).
  - Fonts: **"Inter"** (body) + **"Playfair Display"** (display) via
    Google Fonts.
  - Rounded property cards.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/estatehub-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Estatehub lives in `apps/estatehub` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Estatehub", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Estatehub page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Estatehub" and links to Properties, Agents, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a search
control.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a property search control

### Requirement: Featured properties section

The system SHALL render a featured properties section with a heading and at
least four property cards.

#### Scenario: Featured properties content

- **GIVEN** the page is rendered
- **WHEN** the featured properties section is displayed
- **THEN** it SHALL contain a heading "Featured Properties"
- **AND** it SHALL show at least four property cards (Luxury Manhattan Penthouse, Modern Brooklyn Townhouse, Waterfront Hamptons Estate, Tribeca Industrial Loft) with prices

### Requirement: Why choose section

The system SHALL render a "Why Choose" section with a heading and feature
list.

#### Scenario: Why choose content

- **GIVEN** the page is rendered
- **WHEN** the why-choose section is displayed
- **THEN** it SHALL contain a heading "Why Choose Prestige Homes"
- **AND** it SHALL show at least three feature items

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

- **GIVEN** the Estatehub app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Estatehub — Astro Template"
