# Template: Sunset (404 Error Page — Gradient Display)

## Purpose

Sunset is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V19" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a clean, centered error page with a giant light-weight
"404" display filled with an orange-to-coral gradient, an uppercase "Oops!
Nothing was found" heading, an explanatory paragraph with an inline "Return to
homepage" link, and a row of circular coral social icons. Sunset follows the
same structure and adds the repo's standard dark-mode toggle and accessible
patterns.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V19" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-19/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-19/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-19/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh).
  2. Centered `.notfound` block (max-width 767px, text-align center):
     - `.notfound-404` (220px tall) with a giant `<h1>404</h1>` — Kanit 200,
       186px, uppercase, gradient text `linear-gradient(130deg, #ffa34f,
#ff6f68)` via `background-clip: text`.
     - `<h2>Oops! Nothing was found</h2>` — Kanit 200, 33px, uppercase,
       letter-spacing 3px.
     - `<p>` "The page you are looking for might have been removed had its
       name changed or is temporarily unavailable." with an inline
       `<a>Return to homepage</a>` — Kanit 200, coral `#ff6f68`, dashed
       1px bottom border, radius 2px.
     - `.notfound-social` — four 40×40px circular social icons (Facebook,
       Twitter, Pinterest, Google+), coral text on `#efefef`-bordered
       circles; hover: white on coral fill.
  - Mobile (≤480px): 404 shrinks to 142px, heading to 22px.
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand colors: **#ff6f68** (coral) + **#ffa34f** (orange) — gradient text,
    link, social icons.
  - Border color: **#efefef** (social circles).
  - Font: **"Kanit"** (weight 200) via Google Fonts.
  - Shape: gradient-filled text, circular social icons, dashed underline link.
  - Section backgrounds: plain light (white) page, no image.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the "404"
  gradient text is recreated with Tailwind's `bg-gradient-to-br` +
  `bg-clip-text text-transparent`; the "Return to homepage" dashed link
  points to the page root; social icons use the repo's inline-SVG set
  (GitHub, X, LinkedIn); no assets copied.

Sunset lives in `apps/sunset` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Sunset", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Sunset page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sunset" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with gradient display

The system SHALL render a centered error section with a giant "404" display
filled with the brand gradient, an uppercase "Oops! Nothing was found"
heading, an explanatory paragraph, a "Return to homepage" link pointing to the
page root, and social icon links.

#### Scenario: Gradient display

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" with the gradient text treatment

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-2 heading matching "Oops! Nothing was found"
- **AND** it SHALL show an explanatory message about the page being unavailable
- **AND** it SHALL show a "Return to homepage" link pointing to the page root

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
- **THEN** it SHALL show the site name "Sunset" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Sunset app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Sunset — Error Page Template"
