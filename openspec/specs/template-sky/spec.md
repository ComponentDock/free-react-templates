# Template: Sky (404 Error Page — Blue Zero + Search)

## Purpose

Sky is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V2" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean error page on a light-gray backdrop with a
white card: a giant "404" display whose middle "0" is bright blue, an
uppercase "the page you requested could not found" message, and a pill-shaped
search form with a circular magnifier button that turns blue on hover. Sky
follows the same structure and adds the repo's standard dark-mode toggle and
accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V2" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-2/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-2/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-2/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh, background `#f6f6f6`).
  2. Centered `.notfound` white card (max-width 767px, padding 110px 40px,
     box-shadow `0 15px 15px -10px rgba(0,0,0,0.1)`, text-align center):
     - `.notfound-404` (180px tall) with a giant `<h1>4<span>0</span>4</h1>`
       — Roboto 700, 165px, uppercase, `#262626`, middle "0" in blue
       `#00b7ff`.
     - `<h2>` "the page you requested could not found" — Roboto 400, 22px,
       uppercase, `#151515`.
     - `.notfound-search` form (max-width 320px): pill input (height 50px,
       border 2px solid `#c5c5c5`, border-radius 40px, padding-left 30px,
       focus border-color `#00b7ff`) + 40×40px circular magnifier button
       (icon `#c5c5c5`, hover icon `#00b7ff`).
  - Mobile (≤480px): 404 shrinks to 141px.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#00b7ff** (bright blue) — the "0", focus ring, hover icon.
  - Text colors: **#262626** (404), **#151515** (message), **#c5c5c5**
    (input border/icon).
  - Backgrounds: **#f6f6f6** page, **#fff** card.
  - Font: **"Roboto"** via Google Fonts.
  - Shape: pill input (border-radius 40px), circular icon button.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the white card
  becomes the error section on the light page background; the search input is
  a controlled form field with a lucide `Search` icon button (replaces the
  CSS-drawn magnifier); no assets copied.

Sky lives in `apps/sky` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Sky", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Sky page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sky" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with blue-zero display and search form

The system SHALL render a centered white card with a giant "404" heading whose
middle digit is brand blue, an uppercase "the page you requested could not
found" message, and a pill search form with a circular search button.

#### Scenario: Blue-zero display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading matching "404"
- **AND** the middle digit "0" SHALL be rendered in the brand color

#### Scenario: Error message

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a level-2 heading matching "the page you requested could not found"

#### Scenario: Search form

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a search text input with a placeholder
- **AND** it SHALL show a search button with an accessible name

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Sky" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Sky app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Sky — Error Page Template"
