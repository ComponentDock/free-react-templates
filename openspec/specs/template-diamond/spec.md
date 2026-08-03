# Template: Diamond (404 Error Page — Orange Badge)

## Purpose

Diamond is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V9" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean centered error page: a 45°-rotated orange
square with a dashed black border (a diamond-shaped badge) holding a black
"404", an uppercase "Page not found" heading with wide letter-spacing, a short
explanatory paragraph, and a gray pill "home page" button that darkens on
hover. Diamond follows the same structure and adds the repo's standard
dark-mode toggle and accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V9" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-9/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-9/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-9/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh).
  2. Centered `.notfound` block (max-width 460px, text-align center):
     - `.notfound-404` (180×180px, centered, margin-bottom 50px) — a
       `<div>` rotated 45° (diamond badge): background orange `#ffa200`,
       5px dashed black border, border-radius 5px, inset shadow
       `0 0 0 5px rgba(0,0,0,0.1)`; with the black `<h1>404</h1>` (Cabin
       700, 90px) centered on top.
     - `<h2>Page not found</h2>` — Cabin 700, 33px, uppercase,
       letter-spacing 7px.
     - `<p>` "The page you are looking for might have been removed had its
       name changed or is temporarily unavailable." — Cabin 400, 16px,
       black.
     - `<a>home page</a>` — gray `#8f8f8f` pill (border-radius 40px, white
       text, padding 10px 25px, 14px 700 uppercase); hover `#2c2c2c`.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#ffa200** (orange badge).
  - Text colors: **#000** (404/heading/paragraph), **#fff** (button text).
  - Button colors: **#8f8f8f** → hover **#2c2c2c**.
  - Font: **"Cabin"** via Google Fonts.
  - Shape: rotated square badge (dashed border, radius 5px), pill button
    (radius 40px).
  - Section backgrounds: plain light (white) page, no image.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the diamond
  badge is recreated as a rotated orange square (`rotate-45`,
  `border-4 border-dashed`, rounded) with the "404" overlaid (counter-rotate
  the text so it reads upright); the "home page" pill links to the page root;
  no assets copied.

Diamond lives in `apps/diamond` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Diamond", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Diamond page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Diamond" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with orange badge

The system SHALL render a centered error section with a rotated orange square
badge (dashed border) holding the "404", an uppercase "Page not found"
heading, an explanatory paragraph, and a gray pill "home page" link pointing
to the page root.

#### Scenario: Orange badge

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show the orange badge with an accessible label
- **AND** it SHALL contain a level-1 heading "404" within the badge

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a level-2 heading "Page not found"
- **AND** it SHALL show an explanatory message about the page being unavailable
- **AND** it SHALL show a "Home page" link pointing to the page root

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Diamond" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Diamond app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Diamond — Error Page Template"
