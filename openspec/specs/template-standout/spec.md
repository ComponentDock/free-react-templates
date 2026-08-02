# Template: Standout (App Landing Page)

## Purpose

Standout is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Standout"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Standout" — mail-app landing page template
  (source: https://colorlib.com/wp/template/standout/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/standout/
  (HTTP 200, full rendered DOM + `css/main.css` (89KB) extracted).
  The TEMPLATES.md screenshot (`standout-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Intro, About, Features, Pricing, Blog,
  Menu) → Hero ("An Amazing App That Does It All." + blurb + Get The App +
  Scroll Down) → About ("The Most Popular And Number 1 Mail App." + blurb +
  Smart., User-Friendly., Powerful., Secure.) → How The App Works? (Sign Up,
  Create, Compose, Send) → Features → Pricing → Footer.
- **Design tokens extracted from `main.css`:**
  - Primary **green `#00a650`** with dark green `#006933`.
  - White/dark (`#121619`) backgrounds.
  - Fonts: **"IBM Plex Sans"** + **"IBM Plex Serif"** (Google Fonts).
  - Green buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/standout-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Standout lives in `apps/standout` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Standout",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Standout page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Standout" and links to Intro, About, Features, and Pricing
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"Get The App" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "An Amazing App That Does It All."
- **AND** it SHALL show a supporting blurb and a "Get The App" button

### Requirement: About section

The system SHALL render an about section with a heading, a blurb, and four
feature points: "Smart.", "User-Friendly.", "Powerful.", and "Secure.".

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "The Most Popular And Number 1 Mail App."
- **AND** it SHALL show the feature points "Smart.", "User-Friendly.", "Powerful.", and "Secure."

### Requirement: How-it-works section

The system SHALL render a how-it-works section with a heading and four
steps: "Sign Up", "Create", "Compose", and "Send".

#### Scenario: How-it-works content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "How The App Works?"
- **AND** it SHALL show steps titled "Sign Up", "Create", "Compose", and "Send" each with a blurb

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

- **GIVEN** the Standout app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Standout — App Landing Template"
