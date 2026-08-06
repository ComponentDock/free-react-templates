# Template: Appdeck (App Landing Showcase)

## Purpose

Appdeck is a single-page app-landing **showcase** template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Prantokon" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Prantokon" — apps landing HTML template
  (source: https://colorlib.com/wp/template/prantokon/).
- **Live preview analyzed:** `https://preview.colorlib.com/theme/prantokon/`
  (HTTP 200; full rendered DOM fetched, `css/preview.css` (4KB) extracted).
  The ColorLib preview for this entry is a product showcase page
  ("Prantokon Preview — Apps Landing Html Template") advertising the
  template's home-page variants and blog layouts; the TEMPLATES.md screenshot
  (`prantokon-free-template.jpg`) matches it.
- **Section order (1:1):**
  1. Hero (`header#home` → `hero-wrap`): full-viewport photo background
     darkened with a `#353535` overlay at 0.9 opacity; h1 "Prantokon"
     (white, uppercase, 72px, letter-spacing 4px) + subline "Apps Landing
     Html Template" (`#f9f9f9`, 24px, uppercase); `btn-orange` pills
     "Purchase Now" (cart icon) and "View Demo" (link icon).
  2. Showcase (`page-layout#page_layout`): heading "3 HOME PAGE | AND OTHER
     LAYOUT'S" (`#0F7CDD`, bold) + five cards (`single-preview`): #1 HOME
     (IMAGE), #2 HOME (SLIDER), #3 HOME (VIDEO), #4 BLOG, #5 BLOG-DETAILS —
     each a 1px `#f4f4f4` bordered card with a 250px preview thumb and a
     blue-bordered title link (hover: shadow + translateY(-3px)).
  3. CTA band (top of `preview-footer`): "MAKE YOUR WEBSITE WITH OUR Apps
     Awesome Landing TEMPALTE" + "PURCHASE NOW!" (`btn-preview` pill).
  4. Footer (`preview-footer`): background `#111`, text `#999`, copyright
     line.
- **Design tokens extracted from `preview.css`:**
  - Primary accent: **blue `#0F7CDD`** (`.layout-title h2`, `.btn-preview`
    border/fill, `.thumb-title` borders). Buttons `.btn-preview`:
    transparent, 3px solid `#0F7CDD`, border-radius 25px; hover → background
    `#0F7CDD`, white text.
  - Hero buttons `btn-orange`: orange pills (exact hex not exposed in the
    preview stylesheets; approximated as `#ff9800`-style orange per
    ColorLib's standard `btn-orange`).
  - Hero: background photo + `#353535` overlay at 0.9 opacity; headline
    white uppercase 72px (50px ≤767px); subline `#f9f9f9` 24px.
  - Cards `.single-preview`: 1px solid `#f4f4f4`, 250px thumb; hover →
    shadow + translateY(-3px).
  - Footer `.preview-footer`: background `#111`, text `#999`.
  - Font: system sans stack.
- **Recreation decisions:** same showcase page (navbar → hero → variant
  grid → CTA band → footer); photos → seeded picsum placeholders
  (`picsum.photos/seed/appdeck-<n>/<w>/<h>`); icons → lucide-react; brand
  blue `#0F7CDD` in `@theme`; hero buttons orange; no assets copied.

Appdeck lives in `apps/appdeck` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Appdeck",
anchor links, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Appdeck page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Appdeck" and links to Home, Showcase, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-viewport hero with a headline, a subline, and
call-to-action buttons over a darkened photo background.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Appdeck"
- **AND** it SHALL show the subline "Apps Landing Html Template"
- **AND** it SHALL show "Purchase Now" and "View Demo" buttons

### Requirement: Showcase section

The system SHALL render a showcase section listing the template's home-page
variants as cards.

#### Scenario: Showcase variants

- **GIVEN** the page is rendered
- **WHEN** the showcase section is displayed
- **THEN** it SHALL show a heading announcing "3 home page" variants
- **AND** it SHALL list at least five variants including Home (Image), Home (Slider), Home (Video), Blog, and Blog Details

### Requirement: CTA band

The system SHALL render a call-to-action band with a headline and a purchase
button.

#### Scenario: CTA band content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a headline and a "Purchase Now" button

### Requirement: Footer

The system SHALL render a dark footer with a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Appdeck app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Appdeck — App Landing Showcase"
