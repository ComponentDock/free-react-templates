# Template: Selene (App Landing Page)

## Purpose

Selene is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Selene"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Selene" — app landing page template
  (source: https://colorlib.com/wp/template/selene/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/selene/
  (HTTP 200, full rendered DOM + `style.css` (39KB) extracted).
  The TEMPLATES.md screenshot (`selene-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About Us, Services, Blog, Contact)
  → Hero ("SELENE — THE APP" + blurb + available on Google Store / Apple
  Store + Scroll Down) → Feature split ("Mobile ready" + blurb) → Split
  ("An app for Each & Everyone" + blurb) → Feature rows (Curabitur pulvinar
  ..., Lorem ipsum dolor sit amet, consectetur adipiscing, Donec scelerisque
  ante id efficitur pharetra) → Stats (10 Years of Experience, 500 Happy
  Clients, 17k Followers on FB, 132 Finished Projects, 03 Coffes a day) →
  Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#ff4c8b`** with light pink `#fa91b9` and **lime
    `#ccfa87`** accent.
  - Dark text `#292d4f`.
  - Fonts: "Century Gothic" / "Futura LT" (system-ish; fall back to a
    modern sans via Google Fonts).
  - Pink rounded buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/selene-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Selene lives in `apps/selene` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Selene",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Selene page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Selene" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and two
store buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Selene — The App"
- **AND** it SHALL show "Google Store" and "Apple Store" buttons

### Requirement: Feature split

The system SHALL render a feature split with the heading "Mobile ready" and
a blurb.

#### Scenario: Feature split content

- **GIVEN** the page is rendered
- **WHEN** the feature split is displayed
- **THEN** it SHALL contain the heading "Mobile ready"
- **AND** it SHALL show a blurb

### Requirement: App split section

The system SHALL render a split section with the heading "An app for Each &
Everyone" and a blurb.

#### Scenario: App split content

- **GIVEN** the page is rendered
- **WHEN** the app split section is displayed
- **THEN** it SHALL contain the heading "An app for Each & Everyone"
- **AND** it SHALL show a blurb

### Requirement: Stats section

The system SHALL render a stats section with at least five metrics.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show metrics including "10 Years of Experience", "500 Happy Clients", and "17k Followers on FB"

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

- **GIVEN** the Selene app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Selene — App Landing Template"
