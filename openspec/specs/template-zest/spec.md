# Template: Zest (App Landing Showcase)

## Purpose

Zest is a single-page app-landing showcase template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Zeedapp" website template design (see TEMPLATES.md), built
under the new name **Zest** with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Zeedapp" — SaaS & app landing startups template
  (source: https://colorlib.com/wp/template/zeedapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/zeedapp/
  (HTTP 200, full rendered DOM + `css/style.css` (6KB) extracted).
  The TEMPLATES.md screenshot (`zeedapp-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens. Note: the preview is a compact demo-showcase page ("Zeedapp —
  SaaS & App Landing Startups Template").
- **Section order (1:1):** Navbar (brand) → Hero ("…is a SaaS & App Landing
  Startups Template" + Purchase Now + 10 total page / 6 home page / 4 blog
  page counters) → Demo list (Home One / background Slider, Home Two /
  Paralax Slider, Home Three / Gradiant Paralax, Home Four / Gradiant Color,
  Home Five / Gradiant Warm Canvas, Home Six / background video; blog
  standard, blog with sidebar, blog left sidebar, blog details) → CTA
  ("CREATE YOUR OWN WEBSITE TODAY !" + Purchase Now) → Footer (copyright).
- **Design tokens extracted from `style.css`:**
  - Primary **pink/red `#f26367`** (copy-right) / `#f16266` (demo titles).
  - Dark text `#444` (counter numbers), `#555` (counter labels), `#372940`
    (hero overlay).
  - Light `#f9f9f9` (footer bg), `#f3f3f3` (demo-title bg).
  - Buttons: white bg, `#444` text, padding 9px 22px, radius 2px; hover
    inverts (`#444` bg, white text).
  - Counter boxes: white, radius 3px, soft shadow; number 50px/900.
  - Demo items: shadow `0 0 13px rgba(0,0,0,0.2)`; title bar min-height
    80px, uppercase monospace 14px.
  - Font: system sans stack (monospace reserved for demo titles).
- **Recreation decisions:** this entry is recreated as the same kind of
  showcase page (hero + demo-variant list + CTA), with gradient swatches
  rendered as styled cards (placeholders for the original thumbnail images);
  no assets copied.

Zest lives in `apps/zest` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Zest"
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Zest page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Zest"
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero with a headline, a blurb, a "Purchase Now"
button, and demo counts.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Zest is a SaaS & App Landing Startups Template"
- **AND** it SHALL show a "Purchase Now" button and counts of 10 total pages, 6 home pages, and 4 blog pages

### Requirement: Demo showcase section

The system SHALL render a demo showcase section listing the template's
home-page and blog variants.

#### Scenario: Demo variants

- **GIVEN** the page is rendered
- **WHEN** the demo showcase section is displayed
- **THEN** it SHALL list at least six home variants including Slider, Parallax, Gradient, and Video
- **AND** it SHALL list "blog standard", "blog with sidebar", "blog left sidebar", and "blog details"

### Requirement: CTA section

The system SHALL render a CTA section with a heading and a "Purchase Now"
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "CREATE YOUR OWN WEBSITE TODAY !"
- **AND** it SHALL show a "Purchase Now" button

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

- **GIVEN** the Zest app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Zest — App Landing Template"
