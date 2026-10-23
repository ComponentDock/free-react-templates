# Template: Zephyr (404 Error Page — Simple Design)

## Purpose

Zephyr is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V17" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a simple, minimal, fully mobile-friendly error page:
a large "404" display, a short "page not found" message, and a home button so
visitors can take action instead of leaving. Zephyr follows the same
structure and adds the repo's standard dark-mode toggle and accessible
patterns.

Zephyr lives in `apps/zephyr` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Zephyr", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Zephyr page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Zephyr" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section
The system SHALL render a centered error section with a large "404" heading, a
"Page not found" subheading, a short explanatory message, and a "Back to home"
button that links to the page root.

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- **AND** it SHALL show an explanatory message
- **AND** it SHALL show a "Back to home" button linking to the page root

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Zephyr" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Zephyr app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Zephyr — Error Page Template"

## Verification checklist

- [ ] `npm run verify:app -- zephyr` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 5 scenarios above are covered by colocated tests
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
- [ ] Navigation bar — the navbar SHALL show the site name "Zephyr" and a "Home" link pointing to the page root
- [ ] Error section — it SHALL contain a level-1 heading "404" and a level-2 heading "Page not found"
- [ ] Footer — it SHALL show the site name "Zephyr" and a tagline
- [ ] Page composition — the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
