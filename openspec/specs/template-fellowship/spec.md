# Template: Fellowship (Church)

## Purpose

Fellowship is a free church community landing page template. It recreates a
ColorLib Brotherlylove design under a different name with React 19, Tailwind
CSS 4, and TypeScript. The template provides a full church website landing
experience with navigation, hero, sermon highlights, ministry features,
services, events, testimonials, and footer.

## Design reference (replication findings)

- **Source:** ColorLib "Brotherlylove" — https://colorlib.com/wp/template/brotherlylove/
- **Source slug:** `brotherlylove`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/brotherlylove/ — **HTTP 200**, 30,500 B, fetched 2026-10-23 (page `<title>`: "Brotherly Love — Worship, community, and practical kindness"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/brotherlylove/css/style.min.css?v=3.0.1`, fetched 2026-10-23): brand `#6c5b7b`, `#5a3d72`; dominant neutrals `#8c8394`, `#27242c`, `#635f69`; type Rubik. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/brotherlylove-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/fellowship` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Page renders all sections

The template SHALL render a complete church landing page with a top bar,
navbar, hero, latest sermon bar, welcome section, features section, church
services section, latest sermons and events section, testimonials section,
and footer.

#### Scenario: All sections are present

- **GIVEN** the Fellowship app loads
- **THEN** the top bar is visible with navigation links
- **AND** the navbar displays "Fellowship" brand
- **AND** the hero section shows the heading "Let your light so shine before men."
- **AND** the latest sermon bar is visible
- **AND** the welcome section is visible
- **AND** the features section shows 3 ministry cards
- **AND** the church services section shows service cards
- **AND** the latest sermons and events section is visible
- **AND** the testimonials section shows 3 testimonial cards
- **AND** the footer links to Component Dock

### Requirement: Navbar with dropdowns

The navbar SHALL display desktop navigation links including dropdown menus for
Ministries and Sermons, with a mobile hamburger toggle.

#### Scenario: Desktop dropdown on hover

- **GIVEN** the navbar is rendered on desktop
- **WHEN** I hover over "Ministries"
- **THEN** a dropdown menu appears with ministry sub-links

#### Scenario: Mobile menu toggle

- **GIVEN** I am on a mobile viewport
- **WHEN** I click the hamburger button
- **THEN** the mobile navigation menu opens
- **AND** all nav links are visible

### Requirement: Hero section

The hero section SHALL display a full-viewport background image with a dark
overlay, a heading, and call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the hero section is visible
- **THEN** there is an "About Us" button
- **AND** there is a "Visit Our Church" link

### Requirement: Footer with Component Dock link

The footer SHALL display church quick links, events, contact information,
and a link to Component Dock.

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is visible
- **THEN** there is a link to "https://www.componentdock.com/"
- **AND** the link text contains "Component Dock"

### Requirement: Design tokens

The template SHALL use the following design tokens: brand color #6c5b7b,
Rubik font family, pill-shaped buttons, and light/dark section alternation.

#### Scenario: Brand color usage

- **GIVEN** any interactive element with brand styling
- **THEN** it uses the brand purple color

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/fellowship/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/fellowship/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar with dropdowns — a dropdown menu appears with ministry sub-links
- [ ] Hero section — there is an "About Us" button
