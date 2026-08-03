# Template: Slice (404 Error Page — Tight Cut Digits)

## Purpose

Slice is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V3" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a minimal centered error page: a small uppercase "Oops!
Page not found" overline above a giant black "404" whose digits are pulled
tightly together (negative letter-spacing) and separated by thin white
cut-shadow slivers, with an uppercase apologetic message below. Slice follows
the same structure and adds the repo's standard dark-mode toggle and
accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V3" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-3/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-3/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-3/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh).
  2. Centered `.notfound` block (max-width 520px, text-align center):
     - `.notfound-404` (240px tall) containing:
       - `<h3>Oops! Page not found</h3>` — Cabin 700, 16px, uppercase,
         letter-spacing 3px, `#262626` (above the digits).
       - `<h1><span>4</span><span>0</span><span>4</span></h1>` — Montserrat
         900, 252px, uppercase, `#262626`, letter-spacing −40px (digits
         pulled together), each digit with `text-shadow: -8px 0 0 #fff`
         (thin white cut between digits).
     - `<h2>` "we are sorry, but the page you requested was not found" —
       Cabin 400, 20px, uppercase, black.
  - Mobile (≤767px): digits 200px; ≤480px: digits 162px, message 16px.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Text colors: **#262626** (digits + overline), **#000** (message), **#fff**
    (cut-shadow between digits).
  - Fonts: **"Montserrat"** (900, digits) + **"Cabin"** (overline/message)
    via Google Fonts.
  - Shape: negative letter-spacing display with per-digit white text-shadow.
  - Section backgrounds: plain light (white) page, no image.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the tight digit
  treatment is recreated with `tracking-[-0.15em]` (or negative letter-spacing
  arbitrary value) + per-digit `drop-shadow`/text-shadow sliver, with `dark:`
  variants; no assets copied.

Slice lives in `apps/slice` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Slice", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Slice page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Slice" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with tight cut-digit display

The system SHALL render a centered error section with an "Oops! Page not
found" overline, a giant tight-tracked "404" display with the cut-sliver digit
treatment, and an uppercase apologetic message.

#### Scenario: Cut-digit display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show an "Oops! Page not found" overline
- **AND** it SHALL contain a level-1 heading matching "404" with the tight letter-spacing treatment

#### Scenario: Error message

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a level-2 heading matching "we are sorry, but the page you requested was not found"

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Slice" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Slice app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Slice — Error Page Template"
