# Template: Susan (App Landing Page)

## Purpose

Susan is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "SuSan"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "SuSan" — app landing page template with demo
  showcase (source: https://colorlib.com/wp/template/susan/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/susan/
  (HTTP 200, full rendered DOM + `css/style.css` (6KB) extracted).
  The TEMPLATES.md screenshot (`susan-free-app-showcase-website-template.jpg`)
  is the visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens. Note: the preview is a compact demo-showcase
  page ("SuSan App Landing Page Template — Android / Apple iSO — A Complete
  Landing Page and Multipurpose Package").
- **Section order (1:1):** Navbar (SuSan) → Hero ("SuSan App Landing Page
  Template — Android / Apple iSO" + "A Complete Landing Page and
  Multipurpose Package" + View Demos / Buy SuSan) → Demo list (Home onepage
  Demos: OnePage - 01, OnePage - 02; SuSan Blog Page Demos: Blog List -
  01/02, Blog Details - 01/02) → Footer (copyright, Colorlib credit).
- **Design tokens extracted from `style.css`:**
  - Primary **pink/red `#f8395d`** (buttons, accents).
  - Dark text `#191919`, `#4f4f4f`; light `#f7f7f7`.
  - Fonts: **"Montserrat"** + **"Open Sans"** (Google Fonts).
- **Recreation decisions:** this entry is recreated as the same kind of
  showcase page (hero + demo-variant list), with phone mockups as styled
  cards; no assets copied.

Susan lives in `apps/susan` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Susan" and
a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Susan page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Susan"
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero with a headline, a blurb, and two buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "SuSan App Landing Page Template"
- **AND** it SHALL show "View Demos" and "Buy SuSan" buttons

### Requirement: Demo showcase section

The system SHALL render a demo showcase section listing home-page and blog
demos.

#### Scenario: Demo variants

- **GIVEN** the page is rendered
- **WHEN** the demo showcase section is displayed
- **THEN** it SHALL show a heading announcing "Home onepage Demos" and "Blog Page Demos"
- **AND** it SHALL list at least "OnePage - 01" and "OnePage - 02" variants

### Requirement: Footer

The system SHALL render a footer with a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Susan app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Susan — App Landing Template"
