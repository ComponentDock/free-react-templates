# Template: Kael (Portfolio & Personal Site)

## Purpose

Recreate the ColorLib "Satner" portfolio template (https://colorlib.com/wp/template/satner/) as a React 19 + Tailwind CSS 4 + TypeScript single-page portfolio site. Kael provides a hero section, about area, brand logos, services, filterable portfolio grid, testimonials, newsletter signup, and footer — all faithfully matching the original design tokens.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/satner/ (HTTP 200, 14,061 B, fetched 2026-10-23) and its theme stylesheet `theme/satner/css/style.min.css` (238,377 B, sha256 `88295271f4ae…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#4458dc` | 29 declarations — `.comments-area .btn-reply:hover`, `.blog-pagination .page-link:hover` |
| Other chromatic values | `#854fee`, `#f8b600`, `#4cd3e3` | `#854fee` × 12 (.gradient-bg); `#f8b600` × 12 (b); `#4cd3e3` × 9 (.success) |
| Surface | `#ffffff` | 103 declarations — `.pswp__kit-caption`, `select:where(.nice-select` |
| Ink / dark surface | `#000000` | 49 declarations — `.text-bg-info`, `.text-bg-primary` |
| Typeface | `Roboto, sans-serif` (7 rules — body)<br>`Rubik, sans-serif` (7 rules — h1) | `font-family` declarations in the theme sheet |
| Body type | `font-size: var(--bs-body-font-size); font-weight: var(--bs-body-font-weight); line-height: var(--bs-body-line-height); color: var(--bs-body-color)` | `body{…}` rule |
| Radii | `3px`, `var(--bs-border-radius)`, `50%` | `3px` (.owl-theme:where(.kit-owl) .owl-nav [class*=owl-]); `var(--bs-border-radius)` (.img-thumbnail); `50%` (.form-check-input[type=radio]) |

Palette in order of use: `#ffffff` ×103, `#000000` ×49, `#6b6b6b` ×35, `#4458dc` ×29, `#eeeeee` ×17, `#f9f9ff` ×16.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Hero section with greeting, role, and CTAs

The page SHALL render a hero section with gradient background, greeting text ("Hello"), developer name ("I am Kael"), role subtitle ("Senior Developer"), two CTA buttons (Hire Me, Get CV), and a portrait image on the right.

#### Scenario: Hero renders all elements

- **WHEN** the page loads
- **THEN** the hero section displays the greeting, name, role, both CTA buttons, and the portrait image

#### Scenario: CTA buttons are interactive

- **WHEN** the user views the hero
- **THEN** the "Hire Me" button and "Get CV" link are both visible and clickable

### Requirement: About section with bio and CV download

The page SHALL render an about section with an image on the left, a heading ("Let's Introduce About Myself"), two bio paragraphs, and a "Download CV" button.

#### Scenario: About section renders

- **WHEN** the page loads
- **THEN** the about section displays the heading, bio text, image, and CV download button

### Requirement: Brand logos and experience counter

The page SHALL render a brand logos grid (6 logos) alongside a "10 Years Experience" counter and a phone number CTA.

#### Scenario: Brands section renders

- **WHEN** the page loads
- **THEN** brand logos, experience counter, and phone number are all visible

### Requirement: Services section with four service cards

The page SHALL render a services section with a heading ("Service Offers") and four service cards (Web Development, UI/UX Design, Web Design, SEO Optimization), each with an icon, title, and description.

#### Scenario: All services render

- **WHEN** the page loads
- **THEN** all four service cards display their titles and descriptions

### Requirement: Portfolio section with filter tabs and image grid

The page SHALL render a portfolio section with filter tabs (All, Popular, Latest, Following, Upcoming) and a 3-column image grid. Clicking a tab SHALL filter the grid to show only items in that category.

#### Scenario: All items shown by default

- **WHEN** the page loads
- **THEN** all six portfolio items are visible

#### Scenario: Filtering works

- **WHEN** the user clicks the "Popular" filter tab
- **THEN** only "Popular" category items are shown

### Requirement: Testimonials section

The page SHALL render a testimonials section with a heading ("Client Say About Me") and three testimonial cards, each with a client photo, name, star rating, and quote.

#### Scenario: All testimonials render

- **WHEN** the page loads
- **THEN** three testimonial cards with names, ratings, and quotes are visible

### Requirement: Newsletter signup

The page SHALL render a newsletter section with gradient background, heading, email input, and subscribe button. Submitting with a valid email SHALL show a thank-you message. Submitting with an empty email SHALL not submit.

#### Scenario: Newsletter form works

- **WHEN** the user enters a valid email and clicks "Get Started"
- **THEN** a "Thank you for subscribing!" message appears

#### Scenario: Empty email does not submit

- **WHEN** the user submits the form with an empty email
- **THEN** the form remains visible and no thank-you message appears

### Requirement: Footer with Component Dock link

The page SHALL render a footer with the brand name, "Follow Me" heading, social links (Facebook, Twitter, Dribbble, Behance), and a copyright line that links to https://www.componentdock.com/ ("Component Dock").

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock" opening in a new tab

### Requirement: Responsive navbar with mobile menu

The page SHALL render a navbar with desktop nav links and a hamburger toggle on mobile. Clicking the hamburger SHALL open a mobile menu. Clicking a link in the mobile menu SHALL close the menu.

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu opens with all nav links visible

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a nav link is clicked
- **THEN** the mobile menu closes

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/kael/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/kael/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Hero section with greeting, role, and CTAs — the hero section displays the greeting, name, role, both CTA buttons, and the portrait image
- [ ] About section with bio and CV download — the about section displays the heading, bio text, image, and CV download button
- [ ] Brand logos and experience counter — brand logos, experience counter, and phone number are all visible
- [ ] Services section with four service cards — all four service cards display their titles and descriptions
- [ ] Portfolio section with filter tabs and image grid — all six portfolio items are visible
- [ ] Testimonials section — three testimonial cards with names, ratings, and quotes are visible
- [x] Newsletter signup — a "Thank you for subscribing!" message appears
- [ ] Responsive navbar with mobile menu — the mobile menu opens with all nav links visible
