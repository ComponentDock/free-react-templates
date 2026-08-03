# Template: Candy (404 Error Page — Pink Rounded Display)

## Purpose

Candy is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V7" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a friendly centered error page: a large pink rounded
"404" display in the playful Fredoka One typeface, an uppercase "Oops, The
Page you are looking for can't be found!" heading, a search form with a
light-gray input and a solid pink "Search" button, and a teal "Return To
Homepage" link with an arrow. Candy follows the same structure and adds the
repo's standard dark-mode toggle and accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V7" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-7/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-7/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-7/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh).
  2. Centered `.notfound` block (max-width 710px, text-align center):
     - `.notfound-404` (200px line-height) with `<h1>404</h1>` — Fredoka One
       (cursive/rounded), 168px, pink `#ff508e`, uppercase.
     - `<h2>` "Oops, The Page you are looking for can't be found!" — Raleway
       400, 22px, uppercase, `#222`.
     - `.notfound-search` form (max-width 420px): input (height 40px,
       background `#f8fafb`, 1px solid `rgba(34,34,34,0.2)` border,
       border-radius 3px) + solid pink button "Search" (120×40px,
       `#ff508e`, white bold, radius 3px).
     - `<a><span class="arrow"></span>Return To Homepage</a>` — Raleway
       700, teal `#39b1cb`, border-radius 15px, CSS arrow pointing left.
  - Mobile (≤767px): 404 122px.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand colors: **#ff508e** (pink — 404 + button) and **#39b1cb** (teal —
    link).
  - Text colors: **#222** (heading/input), **#fff** (button text).
  - Input background: **#f8fafb**.
  - Fonts: **"Fredoka One"** (display) + **"Raleway"** (body) via Google
    Fonts.
  - Shape: 3px-radius input/button, 15px-radius link with arrow.
  - Section backgrounds: plain light (white) page, no image.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the "404" uses
  the rounded Fredoka One display font in brand pink; the search form uses a
  labeled input + pink button (lucide `Search` icon); the "Return To
  Homepage" link points to the page root with a lucide `ArrowLeft` icon;
  no assets copied.

Candy lives in `apps/candy` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Candy", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Candy page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Candy" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with pink rounded display

The system SHALL render a centered error section with a large pink rounded
"404" display, an uppercase "Oops, The Page you are looking for can't be
found!" heading, a search form with an input and a pink "Search" button, and a
teal "Return To Homepage" link pointing to the page root.

#### Scenario: Rounded display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" in the brand pink

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a level-2 heading matching "Oops, The Page you are looking for can't be found"
- **AND** it SHALL show a search input with a placeholder
- **AND** it SHALL show a "Search" button with an accessible name
- **AND** it SHALL show a "Return To Homepage" link pointing to the page root

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Candy" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Candy app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Candy — Error Page Template"
