# Template: Brio (Business)

## Purpose

Brio is a bright app landing page template recreating the ColorLib Typo design.
It showcases a hero with warm gradient, feature sections, a dark offer area,
process grid, newsletter subscription, and a full footer — all built with
React 19, Tailwind CSS 4, and TypeScript.

Source: https://colorlib.com/wp/template/typo/
Preview: https://preview.colorlib.com/theme/typo/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/typo/ (HTTP 200, 16,888 B, fetched 2026-10-23) and its theme stylesheet `theme/typo/css/main.css` (31,118 B, sha256 `ea6e1470bdbe…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f67590` | 21 declarations — `b`, `i` |
| Other chromatic values | `#4cd3e3`, `#38a4ff`, `#f44a40` | `#4cd3e3` × 7 (.genric-btn.success); `#38a4ff` × 6 (.genric-btn.info); `#f44a40` × 6 (.genric-btn.danger) |
| Surface | `#ffffff` | 50 declarations — `.text-white`, `.button-area` |
| Ink / dark surface | `#222222` | 12 declarations — `h1`, `h2` |
| Typeface | `"Poppins", sans-serif` (3 rules — body) | `font-family` declaration in the theme sheet |
| Body type | `color: #777777; font-size: 14px; font-weight: 300; line-height: 1.5em` | `body{…}` rule |
| Radii | `3px`, `8px`, `8.5px` | `3px` (.genric-btn.radius); `8px` (.primary-radio); `8.5px` (.default-switch) |

Palette in order of use: `#ffffff` ×50, `#f9f9ff` ×33, `#f67590` ×21, `#222222` ×12, `#4cd3e3` ×7, `#777777` ×7.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Hero section with gradient overlay

The template SHALL display a full-width hero with a coral-to-yellow gradient background, heading, description text, and a "Get Started" CTA button linking to the about section.

#### Scenario: Hero renders with correct content

- **GIVEN** the page loads
- **WHEN** the user views the hero section
- **THEN** the heading "Bright App Landing" is visible
- **AND** a description paragraph is displayed
- **AND** a "Get Started" link points to `#about`

### Requirement: Navbar with mobile toggle

The template SHALL display a navigation bar with the "Brio" logo, desktop nav links (About, Features, Services, Process), and a mobile hamburger toggle.

#### Scenario: Desktop navigation displays all links

- **GIVEN** the page loads on desktop viewport
- **WHEN** the user views the header
- **THEN** the logo "Brio" and four navigation links are visible

#### Scenario: Mobile menu toggles on button click

- **GIVEN** the page loads on mobile viewport
- **WHEN** the user taps the hamburger button
- **THEN** the mobile menu opens with navigation links
- **AND** tapping again closes the menu

### Requirement: About Top section with split layout

The template SHALL display a split layout with an image on the left and two feature items (icon + heading + description) on the right.

#### Scenario: About top renders two feature items

- **GIVEN** the page loads
- **WHEN** the user scrolls to the about section
- **THEN** two feature items with headings and descriptions are visible
- **AND** an about image is rendered

### Requirement: Features section with three columns

The template SHALL display a three-column features section with two text features and one image.

#### Scenario: Features section renders correctly

- **GIVEN** the page loads
- **WHEN** the user scrolls to features
- **THEN** "Reasons To Choose Notebook" and "Facts Why Inkjet Printing" headings are visible
- **AND** the feature illustration image is rendered

### Requirement: Offer section with dark background

The template SHALL display a dark-background offer section with heading, app screen image, and description.

#### Scenario: Offer section renders correctly

- **GIVEN** the page loads
- **WHEN** the user scrolls to services
- **THEN** "Main Application Features" heading and description are visible
- **AND** the app screen preview image is rendered

### Requirement: About Bottom section with CTA

The template SHALL display a split layout with text and a "Learn More" CTA on the left and an image on the right.

#### Scenario: About bottom renders correctly

- **GIVEN** the page loads
- **WHEN** the user scrolls to the bottom about section
- **THEN** "Powerful Performance" heading and description are visible
- **AND** a "Learn More" link is interactive

### Requirement: Process section with 3x3 grid

The template SHALL display a 3x3 grid of 9 process items, each with an icon, title, and description.

#### Scenario: Process section renders all 9 items

- **GIVEN** the page loads
- **WHEN** the user scrolls to the process section
- **THEN** all 9 process items with icons, titles, and descriptions are visible

### Requirement: Newsletter subscription form

The template SHALL display a dark-background newsletter section with an email subscription form.

#### Scenario: Newsletter form renders and submits

- **GIVEN** the page loads
- **WHEN** the user types an email and clicks submit
- **THEN** the email input is cleared after submission

### Requirement: Footer with Component Dock link

The template SHALL display a 4-column footer (Top Products, Navigation, Compare, About) with copyright and a link to Component Dock.

#### Scenario: Footer renders all columns and Component Dock link

- **GIVEN** the page loads
- **WHEN** the user scrolls to the footer
- **THEN** the 4-column layout is visible
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is present
- **AND** the copyright with current year is displayed

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/brio/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/brio/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Hero section with gradient overlay — the heading "Bright App Landing" is visible
- [x] Navbar with mobile toggle — the logo "Brio" and four navigation links are visible
- [ ] About Top section with split layout — two feature items with headings and descriptions are visible
- [x] Features section with three columns — "Reasons To Choose Notebook" and "Facts Why Inkjet Printing" headings are visible
- [x] Offer section with dark background — "Main Application Features" heading and description are visible
- [x] About Bottom section with CTA — "Powerful Performance" heading and description are visible
- [ ] Process section with 3x3 grid — all 9 process items with icons, titles, and descriptions are visible
- [ ] Newsletter subscription form — the email input is cleared after submission
