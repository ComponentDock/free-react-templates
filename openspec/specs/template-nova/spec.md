# Template: Nova (404 Error Page — Modern Social Design)

## Purpose

Nova is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V19" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean, light error page with a giant gradient
"404" display, an uppercase "Oops! Nothing was found" heading, a short
explanatory paragraph with a "Return to homepage" link, and a row of four
social icon links. Nova follows the same structure and adds the repo's
standard dark-mode toggle and accessible patterns. Social icons are
recreated as original inline SVGs (brand icons were removed from
lucide-react; no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V19" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-19/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-19/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-19/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container.
  2. Centered `.notfound` block:
     - `.notfound-404` (height 220px): centered `<h1>404</h1>` — 186px,
       font-weight 200, transparent fill with a gradient
       `linear-gradient(130deg, #ffa34f, #ff6f68)` clipped to the text.
     - `<h2>Oops! Nothing was found</h2>` — 33px, uppercase, weight 200.
     - `<p>` — "The page you are looking for might have been removed had
       its name changed or is temporarily unavailable." with an inline
       `<a href="#">Return to homepage</a>` (coral **#ff6f68**, dashed
       underline).
     - `.notfound-social` — 4 icon links (Facebook, Twitter, Pinterest,
       Google+) on coral **#ff6f68** circular tiles.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ff6f68** (coral — links, social tiles, gradient end);
    gradient start **#ffa34f** (orange).
  - Font: **"Kanit"** (sans-serif, weight 200) via Google Fonts.
  - Page background: light (**#efefef** in the original; rendered as
    white/light in the repo theme with dark-mode support).
  - 404 display: 186px uppercase, gradient text.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; centered error section with gradient
  "404", "Oops! Nothing was found" heading, explanatory paragraph with a
  "Return to homepage" link, and three social icon links (GitHub, X,
  LinkedIn per repo convention — the original's four Facebook/Twitter/
  Pinterest/Google+ icons are recreated as inline SVG brand icons); Google
  Fonts via `<link>`.

Nova lives in `apps/nova` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Nova", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Nova page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Nova" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with gradient 404

The system SHALL render a centered error section with a large gradient "404"
heading, an "Oops! Nothing was found" subheading, a short explanatory
message, and a "Return to homepage" link to the page root.

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404"
- **AND** it SHALL show a level-2 heading "Oops! Nothing was found"
- **AND** it SHALL show an explanatory message
- **AND** it SHALL show a "Return to homepage" link pointing to the page root

#### Scenario: Gradient display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** the "404" heading SHALL use the gradient text treatment (brand gradient colors)

### Requirement: Social links

The system SHALL render a social icon row with accessible links.

#### Scenario: Social links

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show social icon links (GitHub, X, LinkedIn) with accessible names

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Nova" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Nova app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Nova — Error Page Template"
