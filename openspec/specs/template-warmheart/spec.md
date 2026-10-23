# Template: Warmheart (Nonprofit Charity Landing)

## Purpose

A Nonprofit Charity template with hero section with stats, welcome section with stats, key features and upcoming events sections. Recreation of ColorLib "Kindity" charity template.

- Source slug: `kindity`
- Source URL: https://colorlib.com/wp/template/kindity/
- Preview URL: https://preview.colorlib.com/theme/kindity/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Category: Nonprofit / Charity / Donation

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/kindity/ (HTTP 200, 34,444 B, fetched 2026-10-23) and its theme stylesheet `theme/kindity/css/style.css` (71,765 B, sha256 `dd91e6ce5db2…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ea2c58` | 56 declarations — `.header_area .navbar .nav .nav-item:hover .nav-link`, `.header_area .navbar .nav .nav-item.active .nav-link` |
| Other chromatic values | `#f8b600`, `#4cd3e3`, `#38a4ff` | `#f8b600` × 18 (b); `#4cd3e3` × 11 (.success); `#38a4ff` × 10 (.info) |
| Surface | `#ffffff` | 95 declarations — `.white_title h2`, `.header_area .navbar .nav .nav-item.submenu ul .nav-item:hover .nav-link` |
| Ink / dark surface | `#222222` | 41 declarations — `.main_title h2`, `.header_area .navbar .nav .nav-item .nav-link` |
| Typeface | `"Poppins", sans-serif` (49 rules — body)<br>`'Linearicons-Free'` (2 rules — .banner_area .banner_inner .banner_content .page_link a:before) | `font-family` declarations in the theme sheet |
| Body type | `line-height: 24px; font-size: 14px; font-weight: 300; color: #777777` | `body{…}` rule |
| Radii | `3px`, `8px`, `8.5px` | `3px` (.radius); `8px` (.primary-radio); `8.5px` (.default-switch) |

Palette in order of use: `#ffffff` ×95, `#ea2c58` ×56, `#222222` ×41, `#777777` ×31, `#999999` ×22, `#eeeeee` ×20.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar with navigation and donate CTA

The template SHALL render a navigation bar with brand name, seven nav links, and a "Donate Now" button.

#### Scenario: Navbar renders brand and links

- **WHEN** the page loads
- **THEN** the brand name "Warmheart" is displayed
- **AND** seven navigation links are rendered (Home, Gallery, About, Events, Pages, Blog, Contact)
- **AND** a "Donate Now" button with href="#donate" is rendered

#### Scenario: Mobile menu toggle works

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile menu opens showing all nav links
- **AND** the button aria-label changes to "Close menu"

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a nav link is clicked
- **THEN** the mobile menu closes
- **AND** the hamburger button shows "Open menu" again

### Requirement: Hero section with stats

The template SHALL render a hero section with headline, description, CTA buttons, and three stat boxes.

#### Scenario: Hero renders headline and CTAs

- **WHEN** the page loads
- **THEN** the headline "Help for Victims Affected by Flood" is displayed
- **AND** "Donate Now" and "View Activity" buttons are rendered

#### Scenario: Hero renders stat boxes

- **WHEN** the page loads
- **THEN** three stat boxes are displayed with labels (Total Donation, Total Volunteers, Future Plans) and values ($2.5M, 3,268, $7.5M)

### Requirement: Welcome section with stats

The template SHALL render a welcome section with heading and three stat cards.

#### Scenario: Welcome section renders

- **WHEN** the page loads
- **THEN** "Welcome to Warmheart" heading is displayed
- **AND** three stat cards show values $2.5M, 1,465, 3,965

### Requirement: Major Causes section with cause cards

The template SHALL render three cause cards with progress bars and donate buttons.

#### Scenario: Causes section renders cards

- **WHEN** the page loads
- **THEN** "Our Major Causes" heading is displayed
- **AND** three cause cards are rendered (Education for All, Clean Water Initiative, Medical Aid Relief)
- **AND** each card has a progress bar with correct aria-valuenow

#### Scenario: Causes donate buttons

- **WHEN** the page loads
- **THEN** each cause card has a "Donate Here" button with href="#donate"

### Requirement: Key Features section

The template SHALL render three feature cards with icons and descriptions.

#### Scenario: Features section renders

- **WHEN** the page loads
- **THEN** "Our Key Features" heading is displayed
- **AND** three feature cards are rendered (Sponsorship, Donate Amount, Become a Volunteer)

### Requirement: Upcoming Events section

The template SHALL render three event cards with dates and join buttons.

#### Scenario: Events section renders

- **WHEN** the page loads
- **THEN** "Upcoming Events" heading is displayed
- **AND** three event cards are rendered with dates and "Join Now" buttons

### Requirement: Testimonials section

The template SHALL render three testimonial cards with donor information.

#### Scenario: Testimonials section renders

- **WHEN** the page loads
- **THEN** "Testimonial from our Donors" heading is displayed
- **AND** three testimonial cards are rendered with names and roles

### Requirement: Footer with Component Dock link

The template SHALL render a footer with about section, navigation links, newsletter, and Component Dock branding.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is rendered with target="_blank"

#### Scenario: Footer renders navigation and newsletter

- **WHEN** the page loads
- **THEN** navigation links (Home, About, Services, Portfolio, Team, Blog, Contact) are rendered
- **AND** a newsletter section with email input is rendered

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/warmheart/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/warmheart/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with navigation and donate CTA — the brand name "Warmheart" is displayed
- [x] Hero section with stats — the headline "Help for Victims Affected by Flood" is displayed
- [x] Welcome section with stats — "Welcome to Warmheart" heading is displayed
- [x] Major Causes section with cause cards — "Our Major Causes" heading is displayed
- [x] Key Features section — "Our Key Features" heading is displayed
- [x] Upcoming Events section — "Upcoming Events" heading is displayed
- [x] Testimonials section — "Testimonial from our Donors" heading is displayed
