# Template: Trellis (Architecture Portfolio Template)

## Purpose

Trellis is a single-page architecture portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Monarch" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Monarch" — architecture portfolio template
  (source: https://colorlib.com/wp/template/monarch/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/monarch/
  (HTTP 200, full rendered DOM + `css/style.css` extracted; screenshot
  `monarch-colorlib-template.jpg` used as the visual reference). The live
  preview is the ground truth: the prep draft's "Hero/About/Services"
  sections do NOT exist on the index page — the real page is a brand
  header, a dark navbar, a 12-image portfolio grid, and a footer.
- **Section order (1:1):** Brand header (compass icon + "Trellis" +
  "Architecture Agency" tagline) → Navbar (Home, About, Services,
  Portfolio, Blog, Contact) → Portfolio grid (12 project images, hover
  search icon) → Footer (brand blurb + "Connect with us" socials +
  Navigation link columns) → black copyright bar.
- **Design tokens extracted from `style.css`:**
  - Primary **sage green `#8db1ab`** (28 color refs + 13 background refs —
    hover accents, chips); dark navy `#141b25` (navbar + copyright bar);
    `#000000` (hover overlays); text `#212529`; muted `#6c757d`; light
    `#f8f9fa` (social chip backgrounds).
  - Font: Bootstrap system sans stack (no Google Font link needed).
  - Project cards: 220px tall, black overlay + 50px search-icon circle on
    hover. Social chips: 50px squares, 5px radius, light background.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/trellis-<n>/<w>/<h>`); icons → lucide-react
  (compass, search); brand icons → inline SVG (BrandIcon); no assets
  copied. About/Services/Blog nav links point to the page top (the
  original links to separate pages not part of this single-page
  recreation).

Trellis lives in `apps/trellis` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Brand header

The system SHALL render a centered brand header above the navbar with the
site name "Trellis", an "Architecture Agency" tagline, and a compass icon.

#### Scenario: Brand header content

- **GIVEN** the Trellis page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Trellis"
- **AND** it SHALL show the tagline "Architecture Agency"

### Requirement: Navigation bar

The system SHALL render a dark navigation bar with anchor links to the
page's sections and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Trellis page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show links to Home, About, Services,
  Portfolio, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** the menu SHALL list every nav link
- **AND** the user SHALL be able to close the menu

### Requirement: Portfolio section

The system SHALL render a portfolio section with a grid of twelve project
image cards.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show twelve project cards, each with a project image
  and a search icon button

### Requirement: Footer

The system SHALL render a footer with a brand blurb, a "Connect with us"
social block, link columns, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name and blurb
- **AND** it SHALL show a "Connect with us" heading with social links
  (X, Facebook, Instagram)
- **AND** it SHALL show a "Navigation" link column plus two additional
  link columns
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Trellis app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the
  portfolio section in the main landmark, and the Footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Trellis — Architecture Template"
