# Template: Beacon (404 Error Page — Blue Search + Go Back)

## Purpose

Beacon is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V5" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a left-aligned error page with a giant light-gray "404"
watermark floating behind the content, an uppercase "Oops, The Page you are
looking for can't be found!" heading, a search form (white pill-less input +
solid blue "Search" button), and a blue "Go Back" link with an arrow. Beacon
follows the same structure and adds the repo's standard dark-mode toggle and
accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V5" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-5/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-5/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-5/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh).
  2. Centered `.notfound` block (max-width 520px, left-aligned):
     - `.notfound-404` (150×200px, absolute top-left, z-index -1) — giant
       watermark `<h1>404</h1>` — Poppins 700, 238px, light gray `#e3e3e3`,
       letter-spacing 7px, BEHIND the content.
     - `<h2>` "Oops, The Page you are looking for can't be found!" — Poppins
       400, 28px, uppercase, `#222`.
     - `.notfound-search` form — white input (height 40px, 2px solid
       `rgba(21,23,35,0.2)` border, focus border-color `#57a3f8`) + solid
       blue button "Search" (120×40px, `#57a3f8`, white bold).
     - `<a><span class="arrow"></span>Go Back</a>` — Poppins 700, blue
       `#57a3f8`, border-radius 15px, with a small CSS arrow (rotated
       border) pointing left.
  - Mobile (≤767px): watermark 170px; ≤480px: 120px.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#57a3f8** (blue) — button, link, focus border.
  - Watermark color: **#e3e3e3** (light gray 404 behind content).
  - Text colors: **#222** (heading), **#fff** (button text).
  - Font: **"Poppins"** via Google Fonts.
  - Shape: square-ish input + solid button, 15px-radius link with arrow.
  - Section backgrounds: plain light (white) page, no image.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the watermark
  "404" is recreated as an oversized light-gray heading behind the content
  (`dark:` variant); the search form uses a labeled input + blue button
  (lucide `Search` icon); the "Go Back" link points to the page root with a
  lucide `ArrowLeft` icon; no assets copied.

Beacon lives in `apps/beacon` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Beacon", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Beacon page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Beacon" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with watermark and search form

The system SHALL render a left-aligned error section with a giant light-gray
"404" watermark behind the content, an uppercase "Oops, The Page you are
looking for can't be found!" heading, a search form with an input and a blue
"Search" button, and a "Go Back" link pointing to the page root.

#### Scenario: Watermark display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a giant "404" watermark behind the content in the light-gray treatment

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading matching "Oops, The Page you are looking for can't be found"
- **AND** it SHALL show a search input with a placeholder
- **AND** it SHALL show a "Search" button with an accessible name
- **AND** it SHALL show a "Go Back" link pointing to the page root

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Beacon" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Beacon app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Beacon — Error Page Template"
