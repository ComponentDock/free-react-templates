---
name: Structura
description: Architecture & interior design studio landing page — recreation of ColorLib "Archirio"
source: https://colorlib.com/wp/template/archirio/
preview: https://preview.colorlib.com/theme/archirio/
---

# Template: Structura (Architecture & Interior Design)

## Purpose

Recreate the ColorLib Archirio architecture/interior design template as a
single-page React application under the name "Structura". The template
features a hero slider, about section with stats, specialization grid,
project gallery with filters, services, team, testimonials, blog, and a
footer with newsletter signup.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/archirio/ (HTTP 200, 18,518 B, fetched 2026-10-23) and its theme stylesheet `theme/archirio/style.css` (8,320 B, sha256 `fbe59f985dd7…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#cee002` | 6 declarations — `a:hover`, `#scrollUp` |
| Surface | `#ffffff` | 19 declarations — `h1`, `h2` |
| Ink / dark surface | `#000000` | 2 declarations — `.hero-wrapper:before`, `.demo-img > a::after` |
| Typeface | `'Poppins', sans-serif` (1 rule — body) | `font-family` declaration in the theme sheet |
| Body type | `color: #fff; font-size: 14px; font-weight: 400; line-height: 24px` | `body{…}` rule |
| Radii | `4px`, `50%`, `5px` | `4px` (.btn-white); `50%` (.footer-social a); `5px` (#scrollUp) |

Palette in order of use: `#ffffff` ×19, `#cee002` ×6, `#000000` ×2, `#222222` ×2, `#0d0f11` ×1, `#131619` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navigation bar with mobile toggle

The navbar SHALL display the "Structura" logo and navigation links (Home,
About, Projects, Services, Contact). On mobile, a hamburger toggle button
SHALL control the mobile menu with proper aria-expanded state.

#### Scenario: Desktop navigation renders all links

- **WHEN** the app loads on desktop
- **THEN** the navbar shows "Structura" logo and links for Home, About, Projects, Services, Contact

#### Scenario: Mobile menu toggles

- **WHEN** the mobile menu toggle is clicked
- **THEN** the mobile menu expands and aria-expanded becomes true
- **AND** clicking again closes the menu

### Requirement: Hero section with CTA

The hero SHALL display "Discover Your Dream Home" heading with lime accent,
supporting text about 50,000+ customers, and a "See Projects" button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the app loads
- **THEN** the hero heading containing "Discover" is visible
- **AND** the "See Projects" link is present

### Requirement: About section with stats

The about section SHALL show "Welcome to Interior" heading, descriptive text,
and two stats: 35+ Experience Years and 78+ Projects Completed.

#### Scenario: About displays stats

- **WHEN** the app loads
- **THEN** "35" and "78" stat values are visible
- **AND** "Experience Years" and "Projects Completed" labels are shown

### Requirement: Specialization grid with 6 items

The specialization section SHALL display 6 items in a grid: Architecture,
Interior Design, Building Design, Art Design, Home Design, Hotel Design.

#### Scenario: All specialization items render

- **WHEN** the app loads
- **THEN** 6 specialization items are displayed with their names

### Requirement: Projects section with filter tabs

The projects section SHALL display 6 project cards with filter tabs
(View All, Residential, Corporate, Restaurant, Industrial). Clicking a
filter SHALL show only matching projects.

#### Scenario: Filter reduces visible projects

- **WHEN** the "Residential" filter tab is clicked
- **THEN** fewer than 6 project cards are shown

### Requirement: Services section with 3 cards

The services section SHALL show 3 service cards (Residential Design,
Corporate Design, Commercial Design) with images, descriptions, and
Read More links.

#### Scenario: All services render

- **WHEN** the app loads
- **THEN** 3 service cards with "Read More" links are visible

### Requirement: Fun facts with stat counters

The fun facts section SHALL display 4 statistics: 16 Years, 75 Projects,
18 Members, 20 Awards on a parallax background.

#### Scenario: Stats display correctly

- **WHEN** the app loads
- **THEN** values "16", "75", "18", "20" are visible with their labels

### Requirement: Team section with 4 members

The team section SHALL display 4 team members with photos, names, roles,
and social media icons.

#### Scenario: All team members render

- **WHEN** the app loads
- **THEN** 4 team members are displayed with names and roles

### Requirement: Testimonials section

The testimonials section SHALL show 3 testimonial quotes with author names
and locations on a parallax background.

#### Scenario: Testimonials display correctly

- **WHEN** the app loads
- **THEN** 3 testimonial quotes with author names are visible

### Requirement: Blog section with 3 posts

The blog section SHALL display 3 blog post cards with images, dates,
authors, titles, and excerpts.

#### Scenario: Blog posts render

- **WHEN** the app loads
- **THEN** 3 blog posts with titles are visible

### Requirement: Footer with Component Dock link

The footer SHALL include working hours, contact info, services links,
newsletter form, social icons, and a link to componentdock.com.

#### Scenario: Footer links to Component Dock

- **WHEN** the app loads
- **THEN** the footer contains a link to https://www.componentdock.com/

#### Scenario: Newsletter form submits

- **WHEN** the newsletter form is submitted
- **THEN** the form's default submit action is prevented

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/structura/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/structura/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar with mobile toggle — the navbar shows "Structura" logo and links for Home, About, Projects, Services, Contact
- [x] Hero section with CTA — the hero heading containing "Discover" is visible
- [x] About section with stats — "35" and "78" stat values are visible
- [ ] Specialization grid with 6 items — 6 specialization items are displayed with their names
- [ ] Projects section with filter tabs — fewer than 6 project cards are shown
- [x] Services section with 3 cards — 3 service cards with "Read More" links are visible
- [ ] Fun facts with stat counters — values "16", "75", "18", "20" are visible with their labels
- [ ] Team section with 4 members — 4 team members are displayed with names and roles
- [ ] Testimonials section — 3 testimonial quotes with author names are visible
- [ ] Blog section with 3 posts — 3 blog posts with titles are visible
