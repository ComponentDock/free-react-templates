# Template: Query (404 Error Page — Search Bar Design)

## Purpose

Query is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V5" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean error page with a giant light-gray "404"
display, an uppercase "Oops, The Page you are looking for can't be found!"
heading, a search form with a blue "Search" button, and a blue "Go Back" link
with a left arrow. Query follows the same structure and adds the repo's
standard dark-mode toggle and accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V5" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-5/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-5/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-5/`) returns 404,
  but the ColorLib template page's "Preview" target hosts the rendered
  page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container.
  2. Centered `.notfound` block (max-width 520px):
     - `.notfound-404` (height 150px, `z-index: -1`): `<h1>404</h1>` —
       238px, Poppins weight 700, uppercase, letter-spacing 7px, light
       gray **#e3e3e3** (rendered behind the heading).
     - `<h2>Oops, The Page you are looking for can't be found!</h2>` —
       28px, weight 400, uppercase, near-black **#222**.
     - `.notfound-search` form: full-width `input` (height 40px, border
       2px solid rgba(21,23,35,0.2), focus border **#57a3f8**) with a
       right-anchored `button` "Search" (width 120px, height 40px,
       background **#57a3f8**, white bold text).
     - `<a href="#">` "Go Back" with a left-pointing CSS arrow — blue
       **#57a3f8**, border-radius 15px.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#57a3f8** (blue — search button, link, focus border);
    display **#e3e3e3** (light gray 404); text **#222**.
  - Font: **"Poppins"** (weights 400/700) via Google Fonts.
  - Page background: white (light); dark-mode support in the repo theme.
  - Responsive: ≤767px "404" 170px, heading 24px; ≤480px "404" 120px,
    heading 18px.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; centered error section with the giant
  gray "404", uppercase heading, accessible search form (label + submit to
  Google Search), and a "Go Back" link styled with the original blue arrow;
  Google Fonts via `<link>`. The original has no social icons in the error
  section; the repo-standard Footer keeps its social icon row.

Query lives in `apps/query` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Query", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Query page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Query" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with search form

The system SHALL render a centered error section with a large "404" display,
an "Oops" heading, a search form, and a "Go Back" link to the page root.

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404"
- **AND** it SHALL show the heading "Oops, The Page you are looking for can't be found!"
- **AND** it SHALL show a search form with a text input and a "Search" button
- **AND** it SHALL show a "Go Back" link pointing to the page root

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
- **THEN** it SHALL show the site name "Query" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Query app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Query — Error Page Template"
