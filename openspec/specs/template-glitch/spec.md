# Template: Glitch (404 Error Page — Neon 3D Display)

## Purpose

Glitch is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V6" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a dark, neon error page: a near-black background with a
giant "404" in Montserrat 900 carrying a purple/pink 3D offset text-shadow, a
white "Page not found" label with a purple drop shadow, and an outlined pink
"Homepage" link. Glitch follows the same structure and adds the repo's
standard dark-mode toggle and accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V6" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-6/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-6/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-6/`) returns 404,
  but the ColorLib template page's "Preview" target hosts the rendered
  page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container with background **#030005**
     (near-black).
  2. Centered `.notfound` block (max-width 767px, centered text):
     - `.notfound-404` (height 180px, `z-index: -1`): centered
       `<h1>404</h1>` — 224px, Montserrat weight 900, uppercase,
       letter-spacing -20px, color **#030005** with a 3D offset
       text-shadow: `-1px -1px 0 #8400ff, 1px 1px 0 #ff005a`; and
       `<h2>Page not found</h2>` — 42px, weight 700, white, uppercase,
       letter-spacing 13px, text-shadow `0 2px 0 #8400ff`.
     - `<a href="#">Homepage</a>` — 14px, weight 700, uppercase, pink
       **#ff005a** text on transparent background with a 2px solid border;
       hover turns purple **#8400ff**.
- **Design tokens extracted from `css/style.css`:**
  - Brand colors: **#8400ff** (purple) and **#ff005a** (pink) — the neon
    3D shadows; background **#030005** (near-black).
  - Font: **"Montserrat"** (weights 700/900) via Google Fonts.
  - Page background: dark by default (the original is a dark design);
    the repo dark-mode toggle still applies to the chrome.
  - Responsive: ≤767px label 24px; ≤480px "404" 182px.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; the error section keeps the original
  dark treatment in both modes (near-black background, neon 3D "404",
  white label, outlined pink "Homepage" link styled as "Go to homepage");
  Google Fonts via `<link>`. The original has no social icons in the error
  section; the repo-standard Footer keeps its social icon row.

Glitch lives in `apps/glitch` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Glitch", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Glitch page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Glitch" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with neon 3D 404

The system SHALL render a centered error section on a dark background with a
large "404" display, a "Page not found" label, and a "Go to homepage" link to
the page root.

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404"
- **AND** it SHALL show the label "Page not found"
- **AND** it SHALL show a "Go to homepage" link pointing to the page root

#### Scenario: Neon display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "404" heading SHALL use the neon 3D text-shadow treatment (brand purple/pink shadows)
- **AND** the error section SHALL use the dark background treatment

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Glitch" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Glitch app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Glitch — Error Page Template"
