# Template: Griddle (Burger Restaurant)

Recreation of ColorLib "Burger" (https://colorlib.com/wp/template/burger/).

## Purpose

Griddle is a burger restaurant template with a header bar, hero slider, menu grid, about band, video section, testimonials and instagram grid. It recreates the ColorLib **Burger** design (https://colorlib.com/wp/template/burger/, preview: https://preview.colorlib.com/theme/burger/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (extracted from preview CSS)

| Token        | Value      | Notes                                      |
| ------------ | ---------- | ------------------------------------------ |
| brand        | #F0542C    | Orange-red — primary CTA, buttons, accents |
| brand-gold   | #F2C64D    | Golden yellow — secondary button accent    |
| overlay      | #040E27    | Dark navy — hero overlay background        |
| heading      | #1F1F1F    | Near-black headings                        |
| body         | #4D4D4D    | Gray body text                             |
| font-display | Montserrat | Headings + buttons                         |
| font-sans    | Raleway    | Body text, navigation                      |


<!-- heading-role-tokens: burger/ink/template-griddle -->
**Heading-ink role (measured 2026-10-25):** the `heading` row states `#1f1f1f`, declared on `h1, h2, h3, h4, h5`; that rule does not win anywhere the headings render — they paint rgb(26, 13, 1) x14, rgb(255, 255, 255) x9, rgb(4, 14, 39) x7.
<!-- /heading-role-tokens -->

## Section order (1:1 with source)

1. **Header** — sticky nav: home / menu / about / blog ▾ / pages ▾ / contact; centered logo; right social icons + phone number
2. **HeroSlider** — 2 full-width slides with dark overlay, "Big Deal" kicker, "Burger Bachelor" title, "Maxican" subtitle
3. **MenuGrid** — "Burger Menu" kicker, "Best Ever Burgers" heading; 2×2 grid of burger items (image + name + description + price)
4. **About** — two-column: text paragraph + signature image
5. **VideoSection** — dark overlay background, title + "How we make delicious Burger" subtitle + play button
6. **Testimonials** — "Testimonials" kicker, "Happy Customers" heading; carousel of reviews (text + author image + stars)
7. **InstagramGrid** — 4-column image grid with Instagram overlay
8. **Footer** — 3-column: location cards (address + email + phone), newsletter signup form; social icon row; copyright bar with Component Dock link

## Requirements

### Feature: Griddle template behaviour

Feature: Griddle burger restaurant template

#### Scenario: renders all sections

- **GIVEN** the app loads
- **THEN** the header is visible with navigation links
- **AND** the hero slider shows "Big Deal" and "Burger Bachelor"
- **AND** the menu grid shows 4 burger items with prices
- **AND** the about section is visible
- **AND** the video section is visible with a play button
- **AND** the testimonials section shows customer reviews
- **AND** the instagram grid shows 4 images
- **AND** the footer links to componentdock.com

#### Scenario: mobile menu toggle

- **GIVEN** the viewport is narrow
- **WHEN** I click the menu toggle button
- **THEN** the mobile navigation opens
- **WHEN** I click a navigation link
- **THEN** the mobile menu closes

#### Scenario: testimonial carousel advances

- **GIVEN** the testimonials section is visible
- **WHEN** I click the next arrow
- **THEN** the next testimonial is shown

#### Scenario: footer newsletter form

- **GIVEN** the footer is visible
- **WHEN** I enter an email in the newsletter input
- **AND** I click "Sign Up"
- **THEN** the form is submitted

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/griddle/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/griddle/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] renders all sections — the header is visible with navigation links
- [ ] mobile menu toggle — the mobile navigation opens
- [ ] testimonial carousel advances — the next testimonial is shown
- [ ] footer newsletter form — the form is submitted
