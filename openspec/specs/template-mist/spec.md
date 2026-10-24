# Template: Mist (404 Error Page — Watermark Display with Search)

## Purpose

Mist is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V5" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is an easy-to-use error page with a search bar: a giant,
light-gray "404" watermark behind the content, an uppercase
"Oops, The Page you are looking for can't be found!" heading, a search bar to
help users find what they need, and a blue "Go Back" link. Mist follows the
same structure and adds the repo's standard dark-mode toggle and accessible
patterns.

Mist lives in `apps/mist` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

Provenance (measured 2026-10-24):

- **Source slug:** `colorlib-error-404-5`
- **ColorLib page:** https://colorlib.com/wp/template/colorlib-error-404-5/ — HTTP 200, 114,547 B.
- **Preview analyzed:** https://colorlib.com/etc/404/colorlib-error-404-5/ — HTTP 200, 851 B, sha256 `bd95d6b1…`, served `<title>"404 HTML Template by Colorlib"`. The `/theme/colorlib-error-404-5/` path does not serve this family (HTTP 404, 9 B, re-probed 2026-10-24).
- **Stylesheet:** `colorlib-error-404-5/css/style.css?v=93dd9ff2` — 6,149 B, sha256 `9fe31e0e…`; literals in file order `#e3e3e3`, `#57a3f8`.

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Mist", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Mist page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Mist" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section
The system SHALL render a centered error section with a giant, light-gray
"404" level-1 heading displayed as a watermark behind the content, an
uppercase "Oops, The Page you are looking for can't be found!" level-2 heading,
and a "Back to home" button that links to the page root.

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Oops, The Page you are looking for can't be found!"
- **AND** it SHALL show a "Back to home" button linking to the page root

#### Scenario: Watermark display
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "404" heading SHALL use a very large, heavy type style in a light gray tone
- **AND** the "404" heading SHALL be positioned behind the other content of the section

### Requirement: Search bar
The system SHALL render a search bar with a labeled text input and a submit
button so users can search instead of leaving the page.

#### Scenario: Search input
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a search input with an accessible label and a submit button

#### Scenario: Submitting a search
- **GIVEN** the user has typed a query into the search input
- **WHEN** the user submits the search form
- **THEN** the form SHALL submit the query to a search results URL
- **AND** the submitted URL SHALL contain the encoded query

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Mist" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Mist app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Mist — Error Page Template"

## Verification checklist

- [ ] `npm run verify:app -- mist` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 8 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Navigation bar
      - Error section
      - Search bar
      - Footer
      - Page composition
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
- [ ] Navigation bar — the navbar SHALL show the site name "Mist" and a "Home" link pointing to the page root
- [ ] Error section — it SHALL contain a level-1 heading "404" and a level-2 heading "Oops, The Page you are looking for can't be found!"
- [ ] Search bar — it SHALL show a search input with an accessible label and a submit button
- [ ] Footer — it SHALL show the site name "Mist" and a tagline
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
