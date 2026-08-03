# Template: Punch (404 Error Page — Bold Oops Display)

## Purpose

Punch is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V4" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a bold, minimal error page: a giant light-weight
"Oops!" headline in near-black, a white pill label "404 - The Page can't be
found" overlapping its bottom edge, and a solid orange "GO TO HOMEPAGE"
button. Punch follows the same structure and adds the repo's standard
dark-mode toggle and accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V4" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-4/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-4/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-4/`) returns 404,
  but the ColorLib template page's "Preview" target hosts the rendered
  page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container.
  2. Centered `.notfound` block (max-width 520px, centered text):
     - `.notfound-404` (height 200px, `z-index: -1`): centered
       `<h1>Oops!</h1>` — 236px, Montserrat weight 200, uppercase,
       near-black **#211b19**; and `<h2>404 - The Page can't be found</h2>`
       — 28px, weight 400, uppercase, near-black text on a **white** pill
       (`background: #fff`, padding 10px 5px, inline-block) anchored to the
       bottom of the block so it overlaps the giant "Oops!".
     - `<a href="#">Go TO Homepage</a>` — 18px, weight 700, uppercase,
       white text on solid **#ff6300** (orange), padding 13px 23px; hover
       inverts to orange text on **#211b19**.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ff6300** (orange — CTA button); contrast
    **#211b19** (near-black — display text, hover fill).
  - Font: **"Montserrat"** (weights 200/400/700) via Google Fonts.
  - Page background: white (light); near-black display text.
  - Responsive: ≤767px "Oops!" 148px; ≤480px block 148px, "Oops!" 86px,
    pill label 16px, button 14px.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; centered error section with the giant
  "Oops!" display, white pill "404 - The Page can't be found" label, and a
  "Go to homepage" link styled as the original orange CTA; Google Fonts via
  `<link>`. The original has no social icons in the error section, so the
  error section is link-free apart from the homepage CTA; the repo-standard
  Footer keeps its social icon row.

Punch lives in `apps/punch` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Punch", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Punch page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Punch" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with bold Oops display

The system SHALL render a centered error section with a large "Oops!" heading,
a "404 - The Page can't be found" label, and a "Go to homepage" link to the
page root.

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "Oops!"
- **AND** it SHALL show the label "404 - The Page can't be found"
- **AND** it SHALL show a "Go to homepage" link pointing to the page root

#### Scenario: CTA styling

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "Go to homepage" link SHALL use the brand CTA treatment (brand background, uppercase text)

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Punch" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Punch app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Punch — Error Page Template"
