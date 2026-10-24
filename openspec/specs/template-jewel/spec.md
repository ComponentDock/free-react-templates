# Template: Jewel (404 Error Page — Diamond Emblem)

## Purpose

Jewel is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V9" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a convenient error page with a call to action built
around a distinctive emblem: a rotated square (diamond) with an orange fill
and a dashed dark border holding a black "404", followed by a "Page not
found" heading, a short explanatory message, and a gray pill "home page"
button. Jewel follows the same structure and adds the repo's standard
dark-mode toggle and accessible patterns.

Jewel lives in `apps/jewel` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

Provenance (measured 2026-10-24):

- **Source slug:** `colorlib-error-404-9`
- **ColorLib page:** https://colorlib.com/wp/template/colorlib-error-404-9/ — HTTP 200, 114,523 B.
- **Preview analyzed:** https://colorlib.com/etc/404/colorlib-error-404-9/ — HTTP 200, 781 B, sha256 `188dc09f…`, served `<title>"404 HTML Template by Colorlib"`. The `/theme/colorlib-error-404-9/` path does not serve this family (HTTP 404, 9 B, re-probed 2026-10-24).
- **Stylesheet:** `colorlib-error-404-9/css/style.css?v=2f4274a8` — 5,514 B, sha256 `6b9932ba…`; literals in file order `#ffa200`, `#8f8f8f`, `#2c2c2c`.

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Jewel", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Jewel page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Jewel" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section
The system SHALL render a centered error section with a diamond emblem — a
rotated square with an orange fill and a dashed dark border — containing a
black "404" level-1 heading, an uppercase "Page not found" level-2 heading
with wide letter spacing, a short explanatory message, and a gray pill
"Back to home" button that links to the page root.

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- **AND** it SHALL show an explanatory message telling the user the requested page might have been removed, renamed, or be temporarily unavailable
- **AND** it SHALL show a "Back to home" button linking to the page root

#### Scenario: Diamond emblem
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "404" heading SHALL be contained in a rotated-square emblem with an orange fill and a dashed dark border
- **AND** the "404" digits SHALL use a heavy, dark type style

#### Scenario: Button accent
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "Back to home" button SHALL use a gray pill (fully rounded) accent style

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Jewel" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Jewel app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Jewel — Error Page Template"

## Verification checklist

- [ ] `npm run verify:app -- jewel` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 7 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Navigation bar
      - Error section
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
- [ ] Navigation bar — the navbar SHALL show the site name "Jewel" and a "Home" link pointing to the page root
- [ ] Error section — it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- [ ] Footer — it SHALL show the site name "Jewel" and a tagline
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
