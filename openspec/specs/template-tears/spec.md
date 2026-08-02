# Template: Tears (404 Error Page — Crying Emoji)

## Purpose

Tears is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V12" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a playful "crying emoji" error page: a big crying-emoji
face as the centerpiece with a flexible, straightforward layout, a large "404"
notification, a short "page not found" message, and a way back to the home page.
Tears follows the same structure and adds the repo's standard dark-mode toggle
and accessible patterns. The emoji face is recreated as an original inline SVG
illustration (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V12" — free crying-emoji error
  page (source: https://colorlib.com/wp/template/colorlib-error-404-12/).
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/colorlib-error-404-12/`
  returned HTTP 404 (variants `error-404-12`, `colorlib-error-404-v12`,
  `error404-12` also 404). Per `docs/replication.md`, the design was
  reconstructed from the TEMPLATES.md screenshot
  (`colorlib-error-404-12.jpg`) and the official ColorLib description
  ("playful crying-emoji face ... flexible layout, large 404 notification,
  short page not found message, home button").
- **Recreation decisions:** the crying-emoji face is an original inline SVG
  illustration (yellow circular face, closed sad eyes, tear drops, frown
  mouth) with `role="img"` and an accessible label — no assets copied.
  Centered content column reusing the repo's primary indigo palette;
  dark-mode support via `@custom-variant dark`.

Tears lives in `apps/tears` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Tears", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Tears page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Tears" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with crying emoji

The system SHALL render a centered error section with a crying-emoji face
illustration, a large "404" heading, a "Page not found" subheading, a short
explanatory message, and a "Back to home" button that links to the page root.

#### Scenario: Emoji illustration

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a crying-emoji face illustration with an accessible label

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
- **THEN** it SHALL show the site name "Tears" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Tears app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Tears — Error Page Template"
