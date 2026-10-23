# Template: Polenta (Restaurant Landing)

> Recreation of ColorLib "Risotto" (https://colorlib.com/wp/template/risotto/)

## Purpose

Polenta is a free restaurant landing page template that recreates the ColorLib Risotto design in React 19 + Tailwind CSS 4 + TypeScript. It provides a complete restaurant website with navigation, hero, about, menu, reservation, events, contact, and footer sections.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/risotto/ (HTTP 200, 38,903 B, fetched 2026-10-23) and its theme stylesheet `theme/risotto/css/style.min.css` (62,731 B, sha256 `a9823f8a9797…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#b84e00` | 20 declarations — `.section-header .sub-title`, `a:hover` |
| Other chromatic values | `#f36500`, `#ff8c40`, `#f36700` | `#f36500` × 4 (.opening-time ul li .hours); `#ff8c40` × 3 (.footer-nav a[aria-current=page]); `#f36700` × 2 (.title:after) |
| Surface | `#ffffff` | 35 declarations — `.text-bg-primary`, `.text-bg-success` |
| Ink / dark surface | `#151515` | 14 declarations — `h1`, `h2` |
| Typeface | `Quicksand, sans-serif` (5 rules — h1)<br>`Dancing Script, cursive` (3 rules — .section-header .title) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `40px`, `50%`, `4px` | `40px` (.main-button); `50%` (.social-nav li a); `4px` (.navbar-toggle) |

Palette in order of use: `#ffffff` ×35, `#b84e00` ×20, `#151515` ×14, `#ececec` ×6, `#000000` ×5, `#666666` ×4.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navigation bar with two-tier layout

The template SHALL render a navigation bar with a top bar (logo + social icons) and a bottom bar (nav links, Reserve CTA, phone + address).

#### Scenario: Renders restaurant name and nav links

- GIVEN the page loads
- THEN the restaurant name "Polenta" is displayed
- AND all nav links (Home, About, Menu, Reservation, Gallery, Events, Contact) are rendered
- AND the Reserve button is rendered

#### Scenario: Mobile menu toggle

- GIVEN the page loads on a mobile viewport
- WHEN the user clicks the menu toggle button
- THEN the mobile navigation menu opens
- WHEN the user clicks a nav link in the mobile menu
- THEN the mobile menu closes

### Requirement: Hero section with parallax background

The template SHALL render a hero section with a background image, welcome heading, subtitle, and a "Discover Menu" CTA button.

#### Scenario: Displays welcome heading and CTA

- GIVEN the page loads
- THEN the heading "Welcome To Polenta Restaurant" is displayed
- AND the "Discover Menu" button links to the menu section

### Requirement: About section with gallery

The template SHALL render an about section with a section header, two-column text layout, and an image gallery.

#### Scenario: Displays section header and content

- GIVEN the page loads
- THEN the "About Us" subtitle and "The Polenta Restaurant" title are displayed
- AND the lead text and description paragraph are rendered
- AND gallery images are displayed

### Requirement: Menu section with tabbed interface

The template SHALL render a menu section with tabbed navigation (Dinner, Drinks, Lunch, Dessert) showing dish cards with name, price, and description.

#### Scenario: Default tab shows dinner dishes

- GIVEN the page loads
- THEN the Dinner tab is active
- AND dinner dishes are displayed with names and prices

#### Scenario: Tab switching updates visible dishes

- GIVEN the Dinner tab is active
- WHEN the user clicks the Drinks tab
- THEN drink items are displayed
- AND dinner dishes are hidden

### Requirement: Reservation form with opening times

The template SHALL render a reservation form with input fields and an opening times sidebar.

#### Scenario: Form submission shows confirmation

- GIVEN the reservation form is displayed
- WHEN the user fills in all required fields and clicks "Book Now"
- THEN a confirmation message is displayed

#### Scenario: Displays opening hours

- GIVEN the page loads
- THEN opening times for each day of the week are displayed

### Requirement: Events section with event cards

The template SHALL render 4 event cards in a 2-column grid, each with an image, date badge, time, title, and description.

#### Scenario: Displays event cards

- GIVEN the page loads
- THEN 4 event cards are rendered
- AND each card shows a date badge, time, title, and description

### Requirement: Contact section with info and social links

The template SHALL render a contact section with phone, address, email, and social media links.

#### Scenario: Displays contact information

- GIVEN the page loads
- THEN the "Get In Touch" heading is displayed
- AND phone, address, and email are rendered as interactive elements
- AND social follow links (Facebook, Twitter, Instagram) are displayed

### Requirement: Footer with Component Dock link

The template SHALL render a footer with copyright notice linking to Component Dock and footer navigation links.

#### Scenario: Footer links to Component Dock

- GIVEN the page loads
- THEN the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"
- AND footer navigation links are rendered

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/polenta/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/polenta/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar with two-tier layout — THEN the restaurant name "Polenta" is displayed
- [x] Hero section with parallax background — THEN the heading "Welcome To Polenta Restaurant" is displayed
- [x] About section with gallery — THEN the "About Us" subtitle and "The Polenta Restaurant" title are displayed
- [ ] Menu section with tabbed interface — THEN the Dinner tab is active
- [ ] Reservation form with opening times — THEN a confirmation message is displayed
- [ ] Events section with event cards — THEN 4 event cards are rendered
- [x] Contact section with info and social links — THEN the "Get In Touch" heading is displayed
