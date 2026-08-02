# Template: Gaas (App Landing Page)

## Purpose

Gaas is a single-page software landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "GaaS"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "GaaS" — software-as-a-service landing page
  (source: https://colorlib.com/wp/template/gaas/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/gaas/
  (HTTP 200, full rendered DOM + `css/style.css` (95KB) extracted).
  The TEMPLATES.md screenshot (`gaas-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Features, Pricing, Pages, Blog,
  Contact + free trial) → Hero ("Mass People Oriented Software" + Get
  Started / watch the video) → Features ("Exclusive Stunning Features / A
  Complete Software Based Website" + Start Free Trial Now!) → Feature tiles
  ("Stunning Visuals" x3: Design Trends, Development, Delivery) → Splits
  (3 x "Modern Daesign Trends / We Believe that Inner beauty Lasts Long" +
  Learn More) → Features Specs ("Features Specifications / Amazing Features
  That make it Awesome!") → Pricing → Brands → Impress band → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **purple `#8252fa`** with **pink `#eca2f1`** accent and yellow
    `#f8b600`.
  - Dark sections `#222222`; light `#f9f9ff`; muted `#777777`.
  - Fonts: **"Rajdhani"** + **"Roboto"** (Google Fonts).
  - Purple buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/gaas-<n>/<w>/<h>`); icons → lucide-react; video
  button → styled play button; no assets copied.

Gaas lives in `apps/gaas` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Gaas",
anchor links to the page's sections, a "free trial" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Gaas page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Gaas" and links to Home, Features, Pricing, and Contact
- **AND** the navbar SHALL show a "free trial" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and two
buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Mass People Oriented Software"
- **AND** it SHALL show "Get Started" and "watch the video" buttons

### Requirement: Features section

The system SHALL render a features section with a heading, a blurb, and a
"Start Free Trial Now!" button.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "A Complete Software Based Website"
- **AND** it SHALL show a blurb and a "Start Free Trial Now!" button

### Requirement: Feature tiles

The system SHALL render three feature tiles: "Design Trends", "Development",
and "Delivery", each with a blurb.

#### Scenario: Feature tiles content

- **GIVEN** the page is rendered
- **WHEN** the feature tiles are displayed
- **THEN** it SHALL show tiles titled "Design Trends", "Development", and "Delivery"

### Requirement: Split sections

The system SHALL render at least two split sections with the heading "We
Believe that Inner beauty Lasts Long", each with a blurb and a "Learn More"
button.

#### Scenario: Split content

- **GIVEN** the page is rendered
- **WHEN** a split section is displayed
- **THEN** it SHALL contain the heading "We Believe that Inner beauty Lasts Long"
- **AND** it SHALL show a blurb and a "Learn More" button

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

- **GIVEN** the Gaas app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Gaas — App Landing Template"
