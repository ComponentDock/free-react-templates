# Template: Torch (404 Error Page — Dark Amber Glow)

## Purpose

Torch is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V8" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a dark error page: on a near-black background, a giant
"404" is drawn in the background color with light-gray offset outlines, while
the middle "0" glows amber (outline + soft glow); below sits a light-gray
paragraph and an outlined "home page" button that turns amber on hover. Torch
follows the same structure and adds the repo's standard dark-mode toggle and
accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V8" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-8/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-8/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-8/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh, background `#222`).
  2. Centered `.notfound` block (max-width 460px, text-align center):
     - `.notfound-404` (158px tall) with a giant
       `<h1>4<span>0</span>4</h1>` — Josefin Sans 700, 220px,
       letter-spacing 10px, color `#222` (matches background), text-shadow
       `2px 2px 0 #c9c9c9, -2px -2px 0 #c9c9c9` (light-gray outline); the
       middle "0" span additionally carries
       `0 0 8px #ff8700` glow and amber `#ffab00` outline.
     - `<p>` "The page you are looking for might have been removed had its
       name changed or is temporarily unavailable." — Josefin Sans 400,
       16px, light gray `#c9c9c9`.
     - `<a>home page</a>` — Josefin Sans 700, 14px uppercase, transparent
       background, 2px solid `#c9c9c9` border, padding 10px 25px; hover:
       amber `#ffab00` text + border.
  - Mobile (≤480px): 404 122px.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Background: **#222** (near-black).
  - Brand colors: **#ffab00** (amber outline) + **#ff8700** (glow).
  - Text colors: **#c9c9c9** (outline/paragraph/border).
  - Font: **"Josefin Sans"** via Google Fonts.
  - Shape: outlined (2px solid) uppercase button.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the outlined
  "404" is recreated with Tailwind text-shadow utilities (arbitrary values or
  CSS classes in `index.css`) on the dark background, with the amber "0";
  the "home page" outline button links to the page root; no assets copied.

Torch lives in `apps/torch` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Torch", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Torch page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Torch" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with outlined display

The system SHALL render a centered error section on a dark background with a
giant "404" carrying the gray-outline treatment and an amber "0" glow, a
light-gray explanatory paragraph, and an outlined "home page" button linking
to the page root.

#### Scenario: Outlined display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading matching "404"
- **AND** the middle digit "0" SHALL carry the amber glow treatment

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show an explanatory message about the page being unavailable
- **AND** it SHALL show a "Home page" link pointing to the page root

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Torch" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Torch app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Torch — Error Page Template"
