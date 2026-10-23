# Template: Flavor (Restaurant Website)

## Purpose

A Restaurant Website template with header with navigation, info bar with contact, about, parallax introduction and tabbed menu sections. Recreation of ColorLib "Luto" (https://colorlib.com/wp/template/luto/) Preview: https://preview.colorlib.com/theme/luto/

Flavor is a restaurant one-pager with warm orange (#FF6107) branding, Poppins + Lora fonts, full-screen hero, tabbed menu, reservation form, and testimonials.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/luto/ (HTTP 200, 62,754 B, sha256 `8e625a838bb2…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `inline-style-1`, `flexslider.css`, `inline-style-0`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ff6107` | 16 declarations — `::selection`, `a` |
| Other chromatic values | `#ff7121` (2), `#f7af1d` (1), `#302939` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 28 declarations — `#colorlib-main-nav #email`, `#colorlib-main-nav .colorlib-nav-toggle:hover i::before, #colorlib-main-nav .colorlib-nav-` |
| Ink / dark surface | `#303030` | 10 declarations — `#colorlib-hero .flexslider .slides li .overlay`, `.article-entry .desc h2 a` |
| Typeface | `Lora` (8 rules — `#colorlib-hero .flexslider .slider-text > .slider-text-inner h1`)<br>`Poppins` (2 rules — `body`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `4px`, `2px`, `15px` | `50%` (`.dish-wrap .price`); `4px` (`.dish-wrap .addtocart .dis-tc span`); `2px` (`#colorlib-main-nav .colorlib-nav-toggle`); `15px` (`.mouse-icon`) |

Palette in order of use: `#ffffff` ×28, `#ff6107` ×16, `#303030` ×10, `#636363` ×6, `#b0b0b0` ×6, `#7d7d7d` ×5, `#404044` ×5, `#fbfbfb` ×4.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Header with navigation

Users SHALL see a fixed transparent navbar with the brand name "Flavor" and navigation links (Home, About, Specialties, Menu, Reservation, Contact).

#### Scenario: Header renders logo and nav links

- **WHEN** the page loads
- **THEN** the header displays the "Flavor" logo and all navigation links

#### Scenario: Mobile hamburger menu

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** a slide-in menu panel opens with all nav links

### Requirement: Hero section with call-to-action

Users SHALL see a full-screen hero banner with a background image, heading "Special & Fresh Food", description text, and a "Book a table" CTA button.

#### Scenario: Hero displays heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows the heading and a "Book a table" button

### Requirement: Info bar with contact details

Users SHALL see a 4-column info bar with Address, Opening Time, Phone, and Email, each with a lucide icon.

#### Scenario: InfoBar shows 4 columns

- **WHEN** the page loads
- **THEN** four info items are displayed with icons

### Requirement: About section

Users SHALL see a two-column about section with "Welcome to Flavor" heading, description, and two food images.

#### Scenario: About section renders heading and description

- **WHEN** the page loads
- **THEN** the about section shows the heading and descriptive text

### Requirement: Specialties section

Users SHALL see a "Our Delicious Specialties" section with three dish cards showing images and titles.

#### Scenario: Specialties displays 3 dish cards

- **WHEN** the page loads
- **THEN** three specialty dish cards are rendered

### Requirement: Parallax introduction

Users SHALL see a parallax background section with "Foods you love to taste" heading and a "Watch Video" button.

#### Scenario: Parallax intro renders content

- **WHEN** the page loads
- **THEN** the parallax section displays the heading and CTA

### Requirement: Tabbed menu

Users SHALL see a menu section with tabs (Main, Desserts, Drinks) showing dish items with images, prices, and categories.

#### Scenario: Menu tabs switch content

- **WHEN** the user clicks a different tab
- **THEN** the corresponding menu items are displayed

### Requirement: Testimonials

Users SHALL see a "Our Customer Says" section with testimonial blockquotes on a parallax background.

#### Scenario: Testimonials render blockquotes

- **WHEN** the page loads
- **THEN** testimonial quotes with author names are displayed

### Requirement: Reservation form

Users SHALL see a reservation form with name, email, phone, date, time, and person count fields.

#### Scenario: Reservation form renders all fields

- **WHEN** the page loads
- **THEN** the reservation form displays all required input fields

### Requirement: Footer with Component Dock link

Users SHALL see a footer with 4 columns (About, Latest Blog, Instagram, Newsletter) and a copyright line linking to https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to componentdock.com branded as "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/flavor/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/flavor/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Header with navigation — the header displays the "Flavor" logo and all navigation links
- [x] Hero section with call-to-action — the hero section shows the heading and a "Book a table" button
- [ ] Info bar with contact details — four info items are displayed with icons
- [ ] About section — the about section shows the heading and descriptive text
- [ ] Specialties section — three specialty dish cards are rendered
- [ ] Parallax introduction — the parallax section displays the heading and CTA
- [ ] Tabbed menu — the corresponding menu items are displayed
- [ ] Testimonials — testimonial quotes with author names are displayed
- [ ] Reservation form — the reservation form displays all required input fields
