# Template: Umbra (404 Error Page — Dark Neon Glitch)

## Purpose

Umbra is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V6" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a dark, neon-styled error page: a near-black canvas
with a giant "404" display whose digits are cut out of the canvas with purple
and pink offset edges (a glitch effect), a white uppercase "Page not found"
heading, and a pink outlined "Homepage" link. Umbra follows the same structure
and adds the repo's standard dark-mode toggle and accessible patterns.

Umbra lives in `apps/umbra` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Umbra", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Umbra page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Umbra" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section
The system SHALL render a centered error section on a near-black canvas with a
giant "404" level-1 heading whose digits are cut out of the canvas with
purple and pink offset edges, a white uppercase "Page not found" level-2
heading, and a pink outlined "Back to home" button that links to the page
root.

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- **AND** it SHALL show a "Back to home" button linking to the page root

#### Scenario: Dark neon glitch display
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the section SHALL use a near-black canvas as its background
- **AND** the "404" heading SHALL use a very large, heavy type style in the canvas color with purple and pink offset edge shadows
- **AND** the "Page not found" heading SHALL be uppercase, white, with wide letter spacing

#### Scenario: Button accent
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "Back to home" button SHALL use a pink outline accent style

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Umbra" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Umbra app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Umbra — Error Page Template"

## Verification checklist

- [ ] `npm run verify:app -- umbra` green: typecheck → lint → vitest
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
