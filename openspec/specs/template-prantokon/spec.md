# Template: Prantokon (App Landing Page)

## Purpose

Prantokon is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Prantokon"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Prantokon" — apps landing HTML template
  (source: https://colorlib.com/wp/template/prantokon/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/prantokon/
  (HTTP 200, full rendered DOM + `css/preview.css` (4KB) extracted).
  The TEMPLATES.md screenshot (`prantokon-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens. Note: the ColorLib preview for this entry is a product
  showcase page ("Prantokon Preview — Apps Landing Html Template")
  advertising the template's home-page variants and blog layouts.
- **Section order (1:1):** Navbar (Prantokon + "Prantokon Preview"
  tagline) → Hero ("MAKE YOUR WEBSITE WITH OUR Apps Awesome Landing
  TEMPALTE" + PURCHASE NOW!) → Showcase list ("3 HOME PAGE | AND OTHER
  LAYOUT'S": #1 HOME (IMAGE), #2 HOME (SLIDER), #3 HOME (VIDEO), #4 BLOG,
  #5 BLOG-DETAILS) → Footer (copyright, Colorlib credit).
- **Design tokens extracted from `preview.css`:**
  - Dark showcase theme (near-black background, white text) with a **blue
    `#0F7CDD`** accent on buttons.
  - Font: system sans stack.
- **Recreation decisions:** this entry is recreated as the same kind of
  showcase page (hero + variant grid + layout links), with gradient swatches
  rendered as styled cards; no assets copied.

Prantokon lives in `apps/prantokon` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Prantokon"
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Prantokon page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Prantokon"
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero with a headline, a blurb, and a purchase
button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Make your website with our apps awesome landing template"
- **AND** it SHALL show a blurb and a "Purchase Now" button

### Requirement: Showcase section

The system SHALL render a showcase section listing the template's home-page
variants.

#### Scenario: Showcase variants

- **GIVEN** the page is rendered
- **WHEN** the showcase section is displayed
- **THEN** it SHALL show a heading announcing "3 home page" variants
- **AND** it SHALL list at least five variants including Home (Image), Home (Slider), Home (Video), Blog, and Blog Details

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

- **GIVEN** the Prantokon app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Prantokon — App Landing Template"
