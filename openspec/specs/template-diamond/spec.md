# Template: Diamond (404 Error Page — Amber Diamond Badge)

## Purpose

Diamond is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V9" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a light error page: a rotated amber square (dashed
black border) acting as a diamond badge holding a big black "404" in Cabin
700, an uppercase "Page not found" label, a short gray explanation paragraph,
and a gray pill-shaped "home page" button. Diamond follows the same structure
and adds the repo's standard dark-mode toggle and accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V9" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-9/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-9/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-9/`) returns 404,
  but the ColorLib template page's "Preview" target hosts the rendered
  page — that DOM is the reference below (confirmed against the TEMPLATES.md
  screenshot).
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (light background — no background
     color set, the page is white).
  2. Centered `.notfound` block (max-width 460px, centered text):
     - `.notfound-404` (180×180px, `margin: 0 auto 50px`): a first child
       `<div>` rotated 45deg — background **#ffa200** (amber), `5px dashed`
       black border, `border-radius: 5px`, plus a subtle inset box-shadow
       (`0 0 0 5px rgba(0,0,0,.1)`); centered `<h1>404</h1>` — 90px, Cabin
       weight 700, black, line-height 40px.
     - `<h2>Page not found</h2>` — 33px, Cabin weight 700, uppercase,
       letter-spacing 7px, black.
     - `<p>The page you are looking for might have been removed had its name
changed or is temporarily unavailable.</p>` — 16px, Cabin weight 400,
       black.
     - `<a href="#">home page</a>` — 14px, weight 700, uppercase, white text
       on a gray **#8f8f8f** pill (border-radius 40px, padding 10px 25px);
       hover darkens to **#2c2c2c**.
- **Design tokens extracted from `css/style.css`:**
  - Brand colors: **#ffa200** (amber diamond), **#8f8f8f** (pill button),
    **#2c2c2c** (button hover), black **#000** (404 + text), white **#fff**
    (button text).
  - Font: **"Cabin"** (weights 400/700) via Google Fonts.
  - Page background: light by default (the original is a light design);
    the repo dark-mode toggle still applies to the chrome.
  - Shape language: rotated square (diamond) badge with dashed border,
    fully-rounded pill button.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; the error section keeps the original
  light treatment in both modes (white background, amber diamond badge,
  black "404" + label + paragraph, gray pill "Go to homepage" link styled
  as the original button); Google Fonts via `<link>`. The original has no
  social icons in the error section; the repo-standard Footer keeps its
  social icon row. CTA renamed "Go to homepage" for clarity.

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

### Requirement: Error section with amber diamond badge

The system SHALL render a centered error section on a light background with a
diamond-shaped amber badge containing the "404" display, a "Page not found"
label, an explanation paragraph, and a "Go to homepage" link to the page root.

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404"
- **AND** it SHALL show the label "Page not found"
- **AND** it SHALL show an explanation paragraph
- **AND** it SHALL show a "Go to homepage" link pointing to the page root

#### Scenario: Diamond badge display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "404" heading SHALL sit inside the rotated amber badge with the dashed border treatment
- **AND** the error section SHALL use the light background treatment

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
