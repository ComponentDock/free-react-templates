# Template: Echo (404 Error Page — Bold Typography)

## Purpose

Echo is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V3" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a bold, minimal, typography-driven error page: a huge
"404" display rendered as three digits separated by white slice gaps, an
uppercase "Oops! Page not found" label, and a short apology message — no
search bar and no illustration. Echo follows the same structure — including
the suite-standard "Back to home" affordance — and adds the repo's standard
dark-mode toggle and accessible patterns.

Echo lives in `apps/echo` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a top navigation bar with the site name "Echo", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content
- **GIVEN** the Echo page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Echo" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle
- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section
The system SHALL render a centered, full-height error section with a bold
typography-driven composition: a huge "404" level-1 heading rendered as three
digits with a white slice gap effect, an uppercase "Oops! Page not found"
level-2 label, a short apology message, and a "Back to home" button that
links to the page root.

#### Scenario: Error content
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Oops! Page not found"
- **AND** it SHALL show an apology message telling the user the requested page was not found
- **AND** it SHALL show a "Back to home" button linking to the page root

#### Scenario: Bold typography
- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "404" heading SHALL use a very large, heavy (weight 900) type style
- **AND** the "404" digits SHALL be visually separated by a white slice gap effect
- **AND** the "Oops! Page not found" label SHALL be uppercase with wide letter spacing

### Requirement: Footer
The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content
- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Echo" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition
The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render
- **GIVEN** the Echo app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Echo — Error Page Template"
