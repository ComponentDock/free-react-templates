# Template: Lagoon (404 Error Page — Teal Sad-Face)

## Purpose

Lagoon is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V17" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean, light error page with a distinctive left-side
teal `:(` emoticon display, an uppercase "404 - Page not found" heading, a
short explanatory paragraph, and a white pill "home page" button that turns
teal on hover. Lagoon follows the same structure and adds the repo's standard
dark-mode toggle and accessible patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V17" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-17/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-17/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-17/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh).
  2. Centered `.notfound` block (max-width 710px, padding-left 190px):
     - `.notfound-404` (150×150px, absolutely positioned left) with a giant
       `<h1>:(</h1>` — Passion One 900, 150px, teal `#00b5c3`,
       letter-spacing 15.5px.
     - `<h2>` "404 - Page not found" — Raleway 700, 28px, uppercase,
       letter-spacing 2.5px, near-black `#292929`.
     - `<p>` "The page you are looking for might have been removed had its
       name changed or is temporarily unavailable." — Raleway 400, 14px,
       `#333`.
     - `<a>` "home page" — white pill (border-radius 40px), Raleway 700,
       14px uppercase, `#292929` text, box-shadow
       `0 4px 15px -5px rgba(0,0,0,0.3)`; hover: white text on teal
       `#00b5c3` background.
  - Mobile (≤480px): block centers, emoticon stacks above the text.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand color: **#00b5c3** (teal) — emoticon + hover background.
  - Text colors: **#292929** (heading/button), **#333** (paragraph), **#fff**
    (button background, hover text).
  - Fonts: **"Passion One"** (display) + **"Raleway"** (body) via Google Fonts.
  - Shape: pill button (border-radius 40px) with soft drop shadow.
  - Section backgrounds: plain light (white) page, no image.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the `:(`
  emoticon is recreated as an inline text display in Passion One (teal) with
  the repo's dark-mode support; the "home page" pill links to the page root
  with teal hover; no assets copied.

Lagoon lives in `apps/lagoon` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Lagoon", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Lagoon page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Lagoon" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with teal emoticon

The system SHALL render a centered error section with a teal `:(` emoticon
display, an uppercase "404 - Page not found" heading, an explanatory
paragraph, and a "home page" pill button linking to the page root with a teal
hover state.

#### Scenario: Emoticon display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show the `:(` emoticon in the brand color

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading matching "404 - Page not found"
- **AND** it SHALL show an explanatory message about the page being unavailable
- **AND** it SHALL show a "Home page" link pointing to the page root

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Lagoon" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Lagoon app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Lagoon — Error Page Template"
