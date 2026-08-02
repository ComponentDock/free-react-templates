# Template: Appson (App Landing Page)

## Purpose

Appson is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Appson"
website template design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Appson" — apps landing HTML template
  (source: https://colorlib.com/wp/template/appson/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appson/
  (HTTP 200, full rendered DOM + `css/preview.css` (4KB) extracted).
  The TEMPLATES.md screenshot (`appson-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens. Note: the ColorLib preview for this entry is a product
  showcase page ("Appson Preview — Apps Landing Html Template") advertising
  the template's home-page variants and blog layouts.
- **Section order (1:1):** Navbar (Appson + "Appson Preview" tagline) →
  Hero ("MAKE YOUR WEBSITE WITH OUR Apps Awesome Landing TEMPALTE" +
  PURCHASE NOW!) → Showcase list ("7 HOME PAGE | AND OTHER LAYOUT'S": #1
  Gradiant, #2 Backgroudn Video, #3 Video Gradiant, #4 Background Image,
  #5 Background Gradiant, #6 Rain Drops Canvas, #7 Slider) → Blog layouts
  (Blog Standard, Blog With Sidebar, Blog Left Sidebar, Blog Details) →
  Footer (copyright, Colorlib credit).
- **Design tokens extracted from `preview.css`:**
  - Dark showcase theme (near-black background, white text) with a
    **gradient accent** on buttons; the advertised template itself uses
    gradient hero variants.
  - Font: system sans stack ("Open Sans"-family default).
- **Recreation decisions:** this entry is recreated as the same kind of
  showcase page (hero + variant grid + layout links), with gradient
  swatches rendered as styled cards; no assets copied.

Appson lives in `apps/appson` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Appson"
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Appson page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Appson"
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
- **THEN** it SHALL show a heading announcing "7 home page" variants
- **AND** it SHALL list at least seven variants including Gradient, Video, Background Image, Rain Drops, and Slider

### Requirement: Blog layouts section

The system SHALL render a section listing available blog layouts.

#### Scenario: Blog layouts

- **GIVEN** the page is rendered
- **WHEN** the blog layouts section is displayed
- **THEN** it SHALL list "Blog Standard", "Blog With Sidebar", "Blog Left Sidebar", and "Blog Details"

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

- **GIVEN** the Appson app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Appson — App Landing Template"
