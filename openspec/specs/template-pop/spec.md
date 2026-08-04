# Template: Pop (404 Error Page — Hot Pink Display)

## Purpose

Pop is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V7" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean error page with a giant hot-pink "404" display
in a rounded chunky display font, an uppercase "Oops" heading, a search form
with a pink "Search" button, and a teal "Return To Homepage" link with a left
arrow. Pop follows the same structure and adds the repo's standard dark-mode
toggle and accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V7" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-7/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-7/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-7/`) returns 404,
  but the ColorLib template page's rendered demo page — that DOM is the
  reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container.
  2. Centered `.notfound` block (max-width 710px, text-align center):
     - `.notfound-404` (height 200px, line-height 200px): `<h1>404</h1>` —
       168px, "Fredoka One" (rounded display font), uppercase, hot pink
       **#ff508e**.
     - `<h2>Oops, The Page you are looking for can't be found!</h2>` —
       22px, Raleway weight 400, uppercase, near-black **#222**.
     - `.notfound-search` form (max-width 420px, margin 30px auto 22px,
       padding-right 123px): full-width `input` (height 40px, background
       **#f8fafb**, border 1px solid rgba(34,34,34,0.2), border-radius 3px,
       Raleway 18px) with a right-anchored `button` "Search" (width 120px,
       height 40px, background **#ff508e**, white bold 18px text,
       border-radius 3px).
     - `<a href="#">` "Return To Homepage" with a left-pointing CSS arrow —
       teal **#39b1cb**, border-radius 15px, Raleway weight 700.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ff508e** (hot pink — 404 display + Search button);
    accent **#39b1cb** (teal — Return To Homepage link + arrow); text
    **#222**; input background **#f8fafb**.
  - Fonts: **"Fredoka One"** (display, weight 400 only) and **"Raleway"**
    (weights 400/700) via Google Fonts.
  - Page background: white (light); dark-mode support in the repo theme.
  - Responsive: ≤767px "404" 122px (container height 122px).
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; centered error section with the giant
  pink "404", uppercase heading, accessible search form (label + submit to
  Google Search), and a "Return To Homepage" link styled with the original
  teal arrow; Google Fonts via `<link>`; the CSS border arrow is replaced by
  the equivalent lucide-react `ArrowLeft` icon (icons come from lucide-react
  per the replication rules). The original has no social icons in the error
  section; the repo-standard Footer keeps its social icon row.

Pop lives in `apps/pop` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Pop", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Pop page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pop" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with search form

The system SHALL render a centered error section with a large pink "404"
display, an "Oops" heading, a search form, and a "Return To Homepage" link to
the page root.

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" styled with the brand color
- **AND** it SHALL show the heading "Oops, The Page you are looking for can't be found!"
- **AND** it SHALL show a search form with a text input and a "Search" button
- **AND** it SHALL show a "Return To Homepage" link pointing to the page root

#### Scenario: Search form behaviour

- **GIVEN** the search form is displayed
- **WHEN** the user types a query and submits the form
- **THEN** the form SHALL submit to a search engine with the typed query

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Pop" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Pop app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Pop — Error Page Template"
