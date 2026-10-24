# Template: Cognita (Online Learning)

Recreation of ColorLib "Eskwela" (https://colorlib.com/wp/template/eskwela/).

## Purpose

Cognita is an online learning template. It recreates the ColorLib **Eskwela** design (https://colorlib.com/wp/template/eskwela/, preview: https://preview.colorlib.com/theme/eskwela/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/eskwela/ (HTTP 200, 49,144 B, fetched 2026-10-23) and its theme stylesheet `theme/eskwela/css/style.css` (40,792 B, sha256 `85593fa865f0…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#429ffd` | 24 declarations — `a`, `a:hover` |
| Other chromatic values | `#ffc300`, `#5bacfd` | `#ffc300` × 4 (.intro-flex .one-third.color-1); `#5bacfd` × 2 (.btn-primary:hover) |
| Surface | `#ffffff` | 32 declarations — `body`, `.colorlib-nav` |
| Ink / dark surface | `#000000` | 24 declarations — `h1`, `h2` |
| Typeface | `"Open Sans", sans-serif` (4 rules — body)<br>`"Playfair Display", Georgia` (2 rules — h1) | `font-family` declarations in the theme sheet |
| Body type | `font-weight: 300; font-size: 16px; line-height: 1.5; color: gray` | `body{…}` rule |
| Radii | `50%`, `100px`, `2px` | `50%` (.colorlib-video a); `100px` (.colorlib-nav ul li.btn-cta a span); `2px` (.review .desc .star .reply) |

Palette in order of use: `#ffffff` ×32, `#000000` ×24, `#429ffd` ×24, `#f2f3f7` ×7, `#ffc300` ×4, `#252525` ×3.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Feature: UpperBar

#### Scenario: Renders social icons and Apply Now link

- **GIVEN** the page is loaded
- **THEN** social icon links for Twitter, Facebook, LinkedIn, and Dribbble are visible
- **AND** an "Apply Now" link is visible

### Feature: Navbar

#### Scenario: Renders logo, navigation links, and Join Now CTA

- **GIVEN** the page is loaded
- **THEN** a "Cognita" logo link is visible
- **AND** the following nav links are present: "Home", "Courses", "About", "Events", "News", "Contact"
- **AND** a "Join Now" CTA button is visible

#### Scenario: Toggles mobile menu

- **GIVEN** the page is loaded
- **WHEN** I click the "Open menu" button
- **THEN** a "Close menu" button is visible
- **AND** mobile navigation links are displayed

### Feature: Hero Section

#### Scenario: Displays headline, subtitle, and Start Learning button

- **GIVEN** the page is loaded
- **THEN** the hero heading "Best Online Learning System" is visible
- **AND** the subtitle "Start your journey to knowledge today" is visible
- **AND** a "Start Learning" button is visible

### Feature: Intro Features

#### Scenario: Shows three feature cards

- **GIVEN** the page is loaded
- **THEN** headings for "Learn Courses Online", "Online Library Store", "50% off in all selected Courses" are visible

### Feature: Welcome Section

#### Scenario: Displays welcome heading and accordion panels

- **GIVEN** the page is loaded
- **THEN** a "Welcome to Cognita" heading is visible
- **AND** accordion panels exist for FAQ items
- **AND** the first panel content is visible by default

#### Scenario: Toggles accordion panel

- **GIVEN** the page is loaded
- **WHEN** I click the "How do I enroll?" button
- **THEN** the enrollment content is visible
- **AND** the first panel content is hidden

### Feature: Features

#### Scenario: Shows four feature items

- **GIVEN** the page is loaded
- **THEN** headings for "Professional Courses", "Experienced Instructor", "Practical Training", "Validated Certificate" are visible

### Feature: Classes

#### Scenario: Shows course cards with images, prices, and enroll links

- **GIVEN** the page is loaded
- **THEN** a "Our Classes" heading is visible
- **AND** 6 course cards are rendered
- **AND** each course shows an "Enroll Now" link

### Feature: Testimonials

#### Scenario: Shows student testimonials with names and roles

- **GIVEN** the page is loaded
- **THEN** a "What Students Say" heading is visible
- **AND** testimonial cards for "Sarah Johnson", "Michael Chen", "Emily Davis" are rendered

### Feature: Professors

#### Scenario: Shows instructor cards with names and specialties

- **GIVEN** the page is loaded
- **THEN** a "Our Experienced Professors" heading is visible
- **AND** 4 instructor names are shown: "Olivia Young", "Daniel Anderson", "David Brook", "Brigeth Smith"

### Feature: Events

#### Scenario: Shows event cards with dates and descriptions

- **GIVEN** the page is loaded
- **THEN** a "Upcoming Events" heading is visible
- **AND** at least 3 event cards are rendered

### Feature: Footer

#### Scenario: Renders footer with Component Dock link and newsletter

- **GIVEN** the page is loaded
- **THEN** a link to componentdock.com is visible with text "Component Dock"
- **AND** a newsletter form with email input is visible
- **AND** copyright text is visible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/cognita/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/cognita/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] UpperBar — social icon links for Twitter, Facebook, LinkedIn, and Dribbble are visible
- [x] Navbar — a "Cognita" logo link is visible
- [x] Hero Section — the hero heading "Best Online Learning System" is visible
- [x] Intro Features — headings for "Learn Courses Online", "Online Library Store", "50% off in all selected Courses" are visible
- [x] Welcome Section — a "Welcome to Cognita" heading is visible
- [x] Features — headings for "Professional Courses", "Experienced Instructor", "Practical Training", "Validated Certificate" are visible
- [x] Classes — a "Our Classes" heading is visible
- [x] Testimonials — a "What Students Say" heading is visible
- [x] Professors — a "Our Experienced Professors" heading is visible
- [x] Events — a "Upcoming Events" heading is visible
