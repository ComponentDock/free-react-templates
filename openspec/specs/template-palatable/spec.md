# Template: Palatable (Food / Recipe Blog)

## Purpose

A Food / Recipe Blog template with top header, sticky, hero carousel, top categories, best recipes and cta banner sections. Recreation of ColorLib's **Delicious** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source slug:** `delicious`
- **Preview URL:** https://preview.colorlib.com/theme/delicious/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Food / Recipe Blog

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/delicious/ (HTTP 200, 53,391 B, fetched 2026-10-23) and its theme stylesheet `theme/delicious/style.min.css` (201,681 B, sha256 `1ead9826ca67…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#23781e` | 22 declarations — `.delicious-btn.btn-4`, `.header-area .top-header-area .breaking-news .ticker ul li a:hover` |
| Other chromatic values | `#1a7a13`, `#40ba37`, `#007bff` | `#1a7a13` × 12 (.kit-mobile-nav .kit-mobile-nav__extras button); `#40ba37` × 11 (.delicious-btn.active); `#007bff` × 6 (.form-check-input:checked) |
| Surface | `#ffffff` | 57 declarations — `.valid-tooltip`, `.form-range:focus::-moz-range-thumb` |
| Ink / dark surface | `#000000` | 12 declarations — `.text-bg-info`, `.text-bg-primary` |
| Typeface | `Open Sans, sans-serif` (1 rule — body)<br>`Roboto, sans-serif` (1 rule — body) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `var(--bs-border-radius)`, `1rem`, `var(--bs-border-radius-lg)` | `var(--bs-border-radius)` (.img-thumbnail); `1rem` (.form-range::-webkit-slider-thumb); `var(--bs-border-radius-lg)` (.form-control-lg) |

Palette in order of use: `#ffffff` ×57, `#23781e` ×22, `#474747` ×17, `#666666` ×17, `#000000` ×12, `#1a7a13` ×12.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Top header bar

The template SHALL display a top header bar with breaking news ticker and social media icons.

#### Scenario: Top header displays correctly

- **GIVEN** the user loads the page
- **THEN** a top header bar is visible above the navbar
- **AND** it contains a breaking news ticker on the left
- **AND** social media icons are on the right

### Requirement: Sticky navbar

The template SHALL display a sticky navbar with logo, navigation links, and search icon.

#### Scenario: Navbar displays correctly

- **GIVEN** the user loads the page
- **THEN** a sticky navbar is visible with a logo on the left
- **AND** navigation links include Home, Pages, Mega Menu, Recipes, 4 Vegans, Contact
- **AND** a search icon button is visible on the right

### Requirement: Hero carousel

The template SHALL display a hero carousel with 3 slides that auto-rotate.

#### Scenario: Hero carousel shows slides

- **GIVEN** the user views the hero section
- **THEN** a full-width image carousel is displayed with auto-rotation
- **AND** each slide has a background image with dark overlay
- **AND** each slide shows a heading, descriptive text, and a CTA button
- **AND** carousel navigation dots and arrows allow manual control

### Requirement: Top categories section

The template SHALL display 2 featured category cards in a 2-column layout.

#### Scenario: Top categories section shows featured items

- **GIVEN** the user scrolls to the top categories section
- **THEN** 2 featured category cards are displayed
- **AND** each card has a background image with overlaid text and CTA button

### Requirement: Best recipes grid

The template SHALL display 6 recipe cards in a 3-column responsive grid.

#### Scenario: Best recipes grid displays items

- **GIVEN** the user scrolls to the best recipes section
- **THEN** a heading is shown
- **AND** 6 recipe cards are displayed in a 3-column responsive grid
- **AND** each card shows a recipe image, title, and star rating

### Requirement: CTA banner

The template SHALL display a full-width CTA banner with background image and dark overlay.

#### Scenario: CTA banner section displays

- **GIVEN** the user scrolls to the CTA section
- **THEN** a full-width banner with a background image and dark overlay is shown
- **AND** heading and call-to-action content are centered

### Requirement: Small recipes list

The template SHALL display 9 recipe items in a 2-column layout with thumbnails.

#### Scenario: Small recipes list shows items

- **GIVEN** the user scrolls to the small recipes section
- **THEN** a list of 9 recipe items is displayed in a 2-column layout
- **AND** each item shows a thumbnail, title, and meta info

### Requirement: Quote newsletter ad section

The template SHALL display a 3-column layout with quote, newsletter form, and ad.

#### Scenario: Quote newsletter and ad section displays

- **GIVEN** the user scrolls to the quote-subscribe-ads section
- **THEN** a 3-column layout is shown
- **AND** the left column contains a quote with author and date
- **AND** the middle column contains a newsletter signup form
- **AND** the right column contains a promotional ad image

### Requirement: Instagram gallery

The template SHALL display 6 images in a horizontal row with hover overlay.

#### Scenario: Instagram gallery shows images

- **GIVEN** the user scrolls to the Instagram section
- **THEN** a heading is shown
- **AND** 6 images are displayed in a horizontal row
- **AND** each image has an Instagram icon overlay on hover

### Requirement: Footer

The template SHALL display a footer with social icons, logo, and Component Dock attribution.

#### Scenario: Footer displays correctly

- **GIVEN** the user scrolls to the footer
- **THEN** social media icons are displayed
- **AND** a logo is centered
- **AND** a copyright line with Component Dock link is shown

### Requirement: Responsive behavior

The template SHALL be responsive on mobile viewports.

#### Scenario: Responsive behavior on mobile

- **GIVEN** the user views the page on a mobile viewport
- **THEN** the navbar collapses to a hamburger menu
- **AND** sections stack to single column layout
- **AND** the Instagram gallery wraps to multiple rows

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/palatable/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/palatable/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Top header bar — a top header bar is visible above the navbar
- [ ] Sticky navbar — a sticky navbar is visible with a logo on the left
- [ ] Hero carousel — a full-width image carousel is displayed with auto-rotation
- [ ] Top categories section — 2 featured category cards are displayed
- [ ] Best recipes grid — a heading is shown
- [ ] CTA banner — a full-width banner with a background image and dark overlay is shown
- [ ] Small recipes list — a list of 9 recipe items is displayed in a 2-column layout
- [ ] Quote newsletter ad section — a 3-column layout is shown
- [ ] Instagram gallery — a heading is shown
- [ ] Responsive behavior — the navbar collapses to a hamburger menu
