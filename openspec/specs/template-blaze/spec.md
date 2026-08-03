# Template: Blaze (404 Error Page — Bold Design)

## Purpose

Blaze is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V13" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a bold error page that integrates smoothly into any
website: a red rounded exclamation block paired with a large "Error 404"
notification, explanatory text, and a link back to the front page. Blaze
follows the same structure and adds the repo's standard dark-mode toggle and
accessible patterns. The exclamation illustration is recreated as an original
stylized block (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V13" — free **bold** error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-13/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-13/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-13/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container, `.notfound` block centered
     (max-width 520px).
  2. Exclamation illustration: a 170×170px red rounded square (radius 7px)
     with a double-ring effect (inner white ring) containing a giant white
     "!".
  3. Headline "Error 404" (uppercase display font) beside the block.
  4. Explanatory paragraph: "The page you are looking for might have been
     removed had its name changed or is temporarily unavailable." with a
     red "Back to homepage" link.
  - Mobile: block stacks above the headline, headline shrinks.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#e01818** (red) — block background, link color.
  - Text color: **#222** (headline + paragraph).
  - Fonts: **"Chango"** (display, cursive — "!" and "Error 404") +
    **"Montserrat"** (body) via Google Fonts.
  - Shape: 7px rounded square; ring effect via inset box-shadows
    (`0 0 0 10px #e01818 inset, 0 0 0 20px #fff inset`).
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the exclamation
  block is recreated with Tailwind (`bg-brand`, ring/inset shadow utilities);
  icons → lucide-react / inline markup; no assets copied.

Blaze lives in `apps/blaze` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Blaze", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Blaze page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Blaze" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with bold notification

The system SHALL render a centered error section with a red exclamation
illustration, a bold "Error 404" headline, an explanatory message, and a red
"Back to homepage" link pointing to the page root.

#### Scenario: Exclamation illustration

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show the exclamation illustration with an accessible label

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading matching "Error 404"
- **AND** it SHALL show an explanatory message about the page being unavailable
- **AND** it SHALL show a "Back to homepage" link pointing to the page root

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Blaze" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Blaze app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Blaze — Error Page Template"
