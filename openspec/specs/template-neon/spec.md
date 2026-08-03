# Template: Neon (404 Error Page — Dark Offset Glow)

## Purpose

Neon is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V6" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a dark error page: on a near-black background, a giant
"404" whose digits are rendered in the background color but outlined by
offset purple/magenta shadows (a neon 3D effect), a white "Page not found"
heading with a purple drop shadow, and a magenta outlined "Homepage" button
that turns purple on hover. Neon follows the same structure and adds the
repo's standard dark-mode toggle and accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V6" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-6/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-6/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-6/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh, background `#030005`).
  2. Centered `.notfound` block (max-width 767px, text-align center):
     - `.notfound-404` (180px tall, z-index -1) with a giant `<h1>404</h1>`
       — Montserrat 900, 224px, color `#030005` (matches the background),
       letter-spacing −20px, text-shadow
       `-1px -1px 0 #8400ff, 1px 1px 0 #ff005a` (purple + magenta offset
       outlines creating the neon 3D effect).
     - `<h2>Page not found</h2>` — Montserrat 700, 42px, white, uppercase,
       letter-spacing 13px, text-shadow `0 2px 0 #8400ff`.
     - `<a>Homepage</a>` — Montserrat 700, 14px uppercase, transparent
       background, 2px solid border, color `#ff005a` (magenta), padding
       10px 40px; hover color `#8400ff` (purple).
  - Mobile (≤767px): heading 24px; ≤480px: 404 182px.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Background: **#030005** (near-black).
  - Brand colors: **#8400ff** (purple) + **#ff005a** (magenta) — offset
    shadows, button border/text, hover.
  - Text colors: **#fff** (heading).
  - Font: **"Montserrat"** via Google Fonts.
  - Shape: outlined (2px solid) uppercase button.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the offset-glow
  "404" is recreated with Tailwind text-shadow-style drop shadows
  (arbitrary `[text-shadow:_-1px_-1px_0_#8400ff,_1px_1px_0_#ff005a]` or CSS in
  `index.css`) on the dark background; the "Homepage" outline button links to
  the page root; no assets copied.

Neon lives in `apps/neon` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Neon", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Neon page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Neon" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with neon offset display

The system SHALL render a centered error section on a dark background with a
giant "404" display carrying the purple/magenta offset-glow treatment, a
white "Page not found" heading, and an outlined "Homepage" button linking to
the page root.

#### Scenario: Neon display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" with the offset-glow shadow treatment
- **AND** it SHALL show a level-2 heading "Page not found"

#### Scenario: Homepage button

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a "Homepage" link pointing to the page root

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Neon" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Neon app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Neon — Error Page Template"
