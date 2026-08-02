# Template: Arclabs (Architecture Template)

## Purpose

Arclabs is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Arclabs" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Arclabs" — architecture template
  (source: https://colorlib.com/wp/template/arclabs/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/arclabs/
  (HTTP 200, full rendered DOM + `css/main.css` (51KB) extracted).
  The TEMPLATES.md screenshot (`arclabs-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Pages, Projects,
  Blog, Contact) → Hero ("Building for society Future Architechure" + View
  project) → Feature tiles (Creative Design, Experienced Style, Product
  Research, Affordable Price) → About ("About Us — We are world number one
  Company" + Read More) → Recent Work ("Recent Work — View Our Project" +
  Dell Villa, New York / Eedn Park, Singapore + filters All, Popular,
  Latest, Following, Upcoming) → Footer.
- **Design tokens extracted from `main.css`:**
  - Primary **tan/bronze `#cea06c`** with **navy `#263a4e`**.
  - Light section backgrounds `#f9f9ff`.
  - Fonts: **"Roboto Condensed"** + **"Roboto"** (Google Fonts).
  - Tan buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/arclabs-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Arclabs lives in `apps/arclabs` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Arclabs",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Arclabs page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Arclabs" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "View
project" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Building for society Future Architechure"
- **AND** it SHALL show a "View project" button

### Requirement: Feature tiles

The system SHALL render four feature tiles: "Creative Design", "Experienced
Style", "Product Research", and "Affordable Price".

#### Scenario: Feature tiles content

- **GIVEN** the page is rendered
- **WHEN** the feature tiles are displayed
- **THEN** it SHALL show tiles titled "Creative Design", "Experienced Style", "Product Research", and "Affordable Price"

### Requirement: About section

The system SHALL render an about section with a heading "We are world
number one Company" and a "Read More" link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain the heading "We are world number one Company"
- **AND** it SHALL show a blurb and a "Read More" link

### Requirement: Recent work section

The system SHALL render a recent work section with a heading and at least
two project cards.

#### Scenario: Recent work content

- **GIVEN** the page is rendered
- **WHEN** the recent work section is displayed
- **THEN** it SHALL contain a heading "Recent Work"
- **AND** it SHALL show at least two project cards (e.g. "Dell Villa, New York" and "Eedn Park, Singapore")

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

- **GIVEN** the Arclabs app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Arclabs — Architecture Template"
