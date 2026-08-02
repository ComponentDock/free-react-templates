# Template: Vista (404 Error Page — Image Background)

## Purpose

Vista is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V11" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V11" — image-background error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-11/).
- **Demo DOM analyzed:** https://colorlib.com/etc/404/colorlib-error-404-11/
  (the `preview.colorlib.com/theme/<slug>/` endpoint returned 404 for this slug
  and others — the canonical `colorlib.com/etc/404/` demo was used instead).
- **Structure observed (1:1):** `#notfound` (100vh) → `.notfound-bg` (full-cover
  scenic photo + `rgba(0,0,0,0.25)` overlay) → centered `.notfound` glass box
  (`rgba(255,255,255,0.7)` + 30px inset spread ring) containing: huge "404"
  heading → `h2` "Oops! Page Not Found" → `.notfound-search` form (dark input +
  pink Search button) → `.notfound-social` (4 × 40px dark squares with white
  brand icons, hover → pink) → "Back To Homepage" text link.
- **Design tokens extracted from `css/style.css`:**
  - Ink (near-black): `#222225` — 404 heading, h2, input background, social
    squares, home link.
  - Accent (hot pink): `#ff00b4` — Search button background, social hover.
  - Fonts: "Passion One" (display, 220px / 146px mobile uppercase "404"),
    "Muli" (body; h2 26px/22px uppercase; search 18px; home link 14px
    uppercase).
  - Shapes: square corners everywhere (no radius), search button 120×40px,
    input full-width 40px tall, glass box max-width 600px.
- **Recreation decisions:** the photo background is a deterministic seeded
  placeholder (`picsum.photos/seed/vista-1/1920/1080`, decorative `alt=""`);
  fonts load from Google Fonts via `<link>`; the four social squares use inline
  SVG brand icons (Facebook, X, Pinterest, YouTube — replacing defunct
  Google+); no assets are copied.

Vista lives in `apps/vista` and uses shared components from `packages/ui`
(Button) and `cn()`.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Vista", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Vista page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Vista" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with image background

The system SHALL render a full-viewport error section with a scenic background
image (decorative, with a dark overlay) and a translucent glass content box
containing a large "404" heading, an "Oops! Page Not Found" subheading, a
search bar, social media icon links, and a "Back to homepage" link pointing to
the page root.

#### Scenario: Background image

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a full-cover scenic background image marked decorative (`alt=""`)
- **AND** the content box SHALL be visually translucent (glass) over the background

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading "Oops! Page Not Found"
- **AND** it SHALL show a "Back to homepage" link pointing to the page root

#### Scenario: Search bar

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show a search bar with a labeled text input and a "Search" submit button
- **AND** submitting the form SHALL NOT navigate away from the page (no results for an unknown page)

#### Scenario: Social links

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show four social icon links (Facebook, X, Pinterest, YouTube) with accessible names

### Requirement: Footer

The system SHALL render a minimal footer with the site name, a short tagline,
and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Vista" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Vista app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Vista — Error Page Template"
