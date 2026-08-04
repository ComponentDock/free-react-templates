# Template: Glow (404 Error Page — Neon Outline Display)

## Purpose

Glow is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V8" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a dark (near-black) error page where a giant "404" is
drawn as a light-gray neon outline (the glyph fill matches the background),
with the "0" outlined in amber and lit by an orange glow, a short paragraph
underneath, and a thin outlined "HOME PAGE" button that turns amber on hover.
Glow follows the same structure and adds the repo's standard dark-mode toggle
and accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V8" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-8/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-8/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-8/`) returns 404,
  but the ColorLib template page's rendered demo page — that DOM is the
  reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container with background **#222**.
  2. Centered `.notfound` block (max-width 460px, text-align center):
     - `.notfound-404` (height 158px, line-height 153px): `<h1>4<span>0</span>4</h1>` —
       220px, "Josefin Sans" weight 700, letter-spacing 10px, fill **#222**,
       with a light-gray neon outline text-shadow (`2px 2px 0 #c9c9c9,
-2px -2px 0 #c9c9c9`); the `<span>0</span>` uses an amber outline +
       orange glow text-shadow (`2px 2px 0 #ffab00, -2px -2px 0 #ffab00,
0 0 8px #ff8700`).
     - `<p>` "The page you are looking for might have been removed had its
       name changed or is temporarily unavailable." — Josefin Sans 16px,
       weight 400, color **#c9c9c9**, margin-bottom 15px.
     - `<a href="#">` "home page" — uppercase, 14px, weight 700, transparent
       background, color **#c9c9c9**, 2px solid **#c9c9c9** border,
       padding 10px 25px; hover turns color + border amber **#ffab00**.
- **Design tokens extracted from `css/style.css`:**
  - Background: **#222** (near-black); outline gray **#c9c9c9**; amber
    **#ffab00** (the "0" outline + hover); orange glow **#ff8700**.
  - Font: **"Josefin Sans"** (weights 400/700) via Google Fonts.
  - Responsive: ≤480px "404" 122px (container height 122px).
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; centered error section on the original
  dark **#222** background (darker still in dark mode) with the neon-outline
  "404" (the glyph fill equals the background so only the outline reads),
  the amber-glowing "0", the description paragraph, and an outlined
  "HOME PAGE" link to the page root that turns amber on hover; Google Fonts
  via `<link>`. The original has no social icons in the error section; the
  repo-standard Footer keeps its social icon row.

Glow lives in `apps/glow` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Glow", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Glow page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Glow" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with neon-outline display

The system SHALL render a centered error section on a dark background with a
neon-outline "404" display (amber "0"), a description paragraph, and a
"home page" link to the page root.

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading whose text is "404"
- **AND** the heading SHALL contain a span with the text "0" carrying the amber glow styling
- **AND** it SHALL show the description paragraph about the page being removed or unavailable
- **AND** it SHALL show a "home page" link pointing to the page root with an outlined style

#### Scenario: Home link hover treatment

- **GIVEN** the error section is displayed
- **WHEN** the "home page" link is styled
- **THEN** the link SHALL use the amber brand color on hover

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Glow" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Glow app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Glow — Error Page Template"
