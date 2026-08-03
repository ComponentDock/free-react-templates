# Template: Cove (404 Error Page — Emoji in Gray Circle)

## Purpose

Cove is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V18" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean, light error page with an emoji illustration
set inside a large light-gray circle on the left, an uppercase "404" display,
an "Oops! Page Not Be Found" heading, a short explanatory paragraph, and a
blue "Back to homepage" pill link. Cove follows the same structure and adds
the repo's standard dark-mode toggle and accessible patterns. The emoji
illustration is recreated as an original inline SVG (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V18" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-18/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-18/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-18/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
  Re-verified during implementation (2026-08-03): page HTML 4.4KB, stylesheet
  1.8KB; tokens below confirmed 1:1 (Nunito, `#151723`, `#999fa5`, `#388dbc`,
  `#f2f5f8`).
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh).
  2. Centered `.notfound` block (max-width 560px, padding-left 160px):
     - `.notfound-404` (140×140px, absolutely positioned left) — emoji image
       (`img/emoji.png`) with a large light-gray circle behind it
       (`:before` scaled 2.4×, border-radius 50%, background `#f2f5f8`,
       z-index -1).
     - `<h1>404</h1>` — Nunito 700, 65px, uppercase, near-navy `#151723`.
     - `<h2>Oops! Page Not Be Found</h2>` — Nunito 400, 21px, uppercase,
       `#151723`.
     - `<p>` "Sorry but the page you are looking for does not exist, have
       been removed. name changed or is temporarily unavailable" — Nunito
       400, gray `#999fa5`.
     - `<a>Back to homepage</a>` — Nunito 700, border-radius 40px,
       blue `#388dbc`.
  - Mobile (≤767px): emoji shrinks to 110px and stacks above the text.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#388dbc** (blue) — homepage link.
  - Text colors: **#151723** (dark navy headings), **#999fa5** (paragraph).
  - Circle color: **#f2f5f8** (light gray).
  - Font: **"Nunito"** via Google Fonts.
  - Shape: circular emoji backdrop, pill link (border-radius 40px).
  - Section backgrounds: plain light (white) page, no image.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the emoji is
  recreated as an original inline SVG (`role="img"` + accessible label) inside
  a light-gray circle (`bg-primary-100`/`bg-gray-100`); the "Back to
  homepage" pill links to the page root in brand blue; no assets copied.

Cove lives in `apps/cove` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Cove", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Cove page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Cove" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with emoji illustration

The system SHALL render a centered error section with an emoji illustration in
a light circle, an uppercase "404" heading, an "Oops! Page Not Be Found"
heading, an explanatory paragraph, and a "Back to homepage" pill link pointing
to the page root.

#### Scenario: Emoji illustration

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show the emoji illustration with an accessible label inside the light circle

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading matching "Oops! Page Not Be Found"
- **AND** it SHALL show an explanatory message about the page being unavailable
- **AND** it SHALL show a "Back to homepage" link pointing to the page root

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Cove" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Cove app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Cove — Error Page Template"
