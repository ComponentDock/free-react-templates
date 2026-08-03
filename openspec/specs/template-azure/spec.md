# Template: Azure (404 Error Page — Watermark 404 + Blue Pill)

## Purpose

Azure is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V20" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a bold, centered error page: a giant light-gray "404"
watermark floating behind the content, a heavy black uppercase "We are sorry,
Page not found!" heading, a short uppercase paragraph, and a blue pill "Back
To Homepage" button that inverts to white-on-blue on hover. Azure follows the
same structure and adds the repo's standard dark-mode toggle and accessible
patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V20" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-20/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-20/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-20/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh).
  2. Centered `.notfound` block (max-width 920px, text-align center):
     - `.notfound-404` (100px tall, absolute top-center, z-index -1) — a
       giant watermark `<h1>404</h1>` — Maven Pro 900, 276px,
       light gray `#ececec`, rendered BEHIND the content.
     - `<h2>We are sorry, Page not found!</h2>` — Maven Pro 900, 46px,
       uppercase, black.
     - `<p>` "The page you are looking for might have been removed had its
       name changed or is temporarily unavailable." — Maven Pro 400, 16px,
       uppercase, black.
     - `<a>Back To Homepage</a>` — blue `#189cf0` pill (border-radius 40px,
       padding 16px 38px, 2px transparent border, white text); hover: white
       background, blue border, blue text.
  - Mobile (≤480px): watermark 162px, heading 26px.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#189cf0** (blue) — button + hover border/text.
  - Watermark color: **#ececec** (light gray 404 behind content).
  - Text colors: **#000** (heading/paragraph), **#fff** (button text).
  - Font: **"Maven Pro"** via Google Fonts.
  - Shape: pill button (border-radius 40px) with hover inversion.
  - Section backgrounds: plain light (white) page, no image.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the watermark
  "404" is recreated as an absolutely positioned oversized heading behind the
  content (`z-0`/negative index, light gray, `dark:` variant); the "Back To
  Homepage" pill links to the page root with the blue→white hover inversion;
  no assets copied.

Azure lives in `apps/azure` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Azure", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Azure page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Azure" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with watermark display

The system SHALL render a centered error section with a giant light-gray "404"
watermark behind the content, a heavy black "We are sorry, Page not found!"
heading, an uppercase explanatory paragraph, and a blue pill "Back To
Homepage" link pointing to the page root.

#### Scenario: Watermark display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a giant "404" watermark behind the content in the light-gray treatment

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading matching "We are sorry, Page not found"
- **AND** it SHALL show an explanatory message about the page being unavailable
- **AND** it SHALL show a "Back To Homepage" link pointing to the page root

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Azure" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Azure app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Azure — Error Page Template"
