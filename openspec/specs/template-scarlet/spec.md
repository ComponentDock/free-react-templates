# Template: Scarlet (404 Error Page — Photo with Red Overlay)

## Purpose

Scarlet is a single-page 404 error page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Colorlib
Error 404 V16" error page design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a full-viewport error page: a photographic background
dimmed by a translucent red overlay, a giant "404" display, an apologetic
message, two pill-shaped buttons ("Go Home" / "Contact us"), and a row of
social icons. Scarlet follows the same structure and adds the repo's standard
dark-mode toggle and accessible patterns. The photographic background is
recreated with a seeded placeholder image (no assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Error 404 V16" — free error page
  (source: https://colorlib.com/wp/template/colorlib-error-404-16/).
- **Live demo DOM analyzed:** `https://colorlib.com/etc/404/colorlib-error-404-16/`
  (HTTP 200) + its stylesheet `css/style.css`. The official preview portal
  (`https://preview.colorlib.com/theme/colorlib-error-404-16/` and variants)
  returns 404, but the ColorLib template page's "Preview" target hosts the
  rendered page — that DOM is the reference below.
- **Structure (1:1, section order):**
  1. Full-viewport `#notfound` container (height 100vh).
  2. `.notfound-bg` — full-bleed background photograph (`img/bg.jpg`,
     `background-size: cover`) overlaid with `rgba(255, 0, 36, 0.7)` (red,
     70% opacity) via an `:after` pseudo-element.
  3. Centered `.notfound` block (max-width 910px, text-align center):
     - `.notfound-404` (200px tall) with a giant `<h1>404</h1>` — Montserrat
       900, 220px, white, uppercase, letter-spacing 10px.
     - `<h2>` "we are sorry, but the page you requested was not found" —
       Montserrat 700, 22px, uppercase, white.
     - `.home-btn` "Go Home" — white pill (border-radius 40px) with red text
       `rgba(255,0,36,0.7)`, padding 13px 25px, 18px 700 uppercase,
       hover opacity 0.9.
     - `.contact-btn` "Contact us" — transparent pill, 2px solid
       `rgba(255,255,255,0.9)` border, `rgba(255,255,255,0.9)` text.
     - `.notfound-social` — four 40×40px social icon links (Facebook,
       Twitter, Pinterest, Google+), `rgba(255,255,255,0.9)` color; hover:
       white circle (radius 50%) with red icon.
  - Responsive: 404 shrinks to 182px (≤767px) and 146px (≤480px).
- **Design tokens extracted from the stylesheet (`css/style.css`):**
  - Brand red: **#ff0024** (overlay `rgba(255, 0, 36, 0.7)`; button/link text
    color and social hover icon).
  - Text color: **#fff** (headline, message, buttons on the overlay).
  - Fonts: **"Montserrat"** (900 display, 700 headings/buttons) via Google
    Fonts.
  - Shape: pill buttons (border-radius 40px), circular social icons.
  - Section backgrounds: full-bleed photo + red overlay.
- **Recreation decisions:** the repo-standard Navbar (site name, Home link,
  dark-mode toggle) and Footer chrome wrap the error section; the photographic
  background is a seeded picsum placeholder
  (`https://picsum.photos/seed/scarlet-404/1600/900`) under a `bg-brand/70`
  overlay; the two CTAs are pill-shaped links ("Go Home" → `/`,
  "Contact us" → `mailto:hello@example.com`); social icons use the repo's
  inline-SVG set (GitHub, X, LinkedIn); no assets copied.

Scarlet lives in `apps/scarlet` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Scarlet", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Scarlet page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Scarlet" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Error section with photographic background

The system SHALL render a full-width error section with a photographic
background dimmed by the brand-color overlay, a giant "404" heading, an
apologetic message heading, a "Go Home" button linking to the page root, a
"Contact us" button, and social icon links.

#### Scenario: Photographic background with overlay

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL show the background photograph with an accessible label
- **AND** the background SHALL carry the brand-color overlay treatment

#### Scenario: Error content

- **GIVEN** the page is rendered
- **WHEN** the error section is displayed
- **THEN** it SHALL contain a level-1 heading "404" and a level-2 heading matching the apologetic message
- **AND** it SHALL show a "Go Home" link pointing to the page root
- **AND** it SHALL show a "Contact us" link

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
- **THEN** it SHALL show the site name "Scarlet" and a tagline
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Scarlet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, the error section in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Scarlet — Error Page Template"
