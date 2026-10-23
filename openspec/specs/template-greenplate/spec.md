# Template: Greenplate (Fresh Grocery / Organic Food)

## Purpose

Recreate the ColorLib Vegefoods design as a React 19 + Tailwind CSS 4 + TypeScript single-page grocery/organic food e-commerce landing page. The original design is a Bootstrap 4 template featuring a hero slider, product grid, deal countdown, testimonials, and newsletter subscription. Greenplate uses the fresh green brand color (#82ae46) with Poppins and Lora fonts.

**Source:** https://colorlib.com/wp/template/vegefoods/
**Preview:** https://preview.colorlib.com/theme/vegefoods/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/vegefoods/ (HTTP 200, 57,751 B, sha256 `c9fb3faeecf7…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`, `inline-style-1`, `inline-style-0`, `inline-style-2`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#82ae46` | 46 declarations — `.ftco-navbar-light .navbar-brand`, `a` |
| Other chromatic values | `#80bdff` (1), `#005cbf` (1), `#fcf8e3` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 66 declarations — `.form-control`, `.table .table` |
| Ink / dark surface | `#000000` | 56 declarations — `.close`, `.close:hover` |
| Typeface | `Poppins` (7 rules — `.hero-wrap .slider-text .bread`)<br>`Lora` (3 rules — `.deal-of-the-day h3`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `0.25rem`, `30px`, `4px` | `50%` (`.mouse-icon`); `0.25rem` (`.btn`); `30px` (`.btn`); `4px` (`.comment-list li .comment-body .reply`) |

Palette in order of use: `#ffffff` ×66, `#000000` ×56, `#82ae46` ×46, `#007bff` ×9, `#6c757d` ×8, `#212529` ×6, `#b3b3b3` ×4, `#4d4d4d` ×4.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Top Bar

The template displays a branded top bar with contact information.

#### Scenario: Top bar renders contact info

- **GIVEN** the page loads
- **THEN** the top bar displays a phone number, email address, and delivery information
- **AND** the top bar has a green background (#82ae46) with white text

### Requirement: Navigation Bar

The template includes a dark navigation bar with brand identity and links.

#### Scenario: Navbar displays brand and links

- **GIVEN** the page loads
- **THEN** the navbar shows the brand name "Greenplate"
- **AND** navigation links are present: Home, Shop, About, Blog, Contact
- **AND** a cart icon with item count [0] is displayed

#### Scenario: Shop dropdown toggle

- **GIVEN** the Shop link is clicked
- **THEN** a dropdown menu appears with sub-links

### Requirement: Hero Section

The template features a full-width hero slider with calls to action.

#### Scenario: Hero displays heading and CTA

- **GIVEN** the hero section loads
- **THEN** a heading "We serve Fresh Vegetables & Fruits" is displayed
- **AND** a "View Details" button is visible

#### Scenario: Hero has multiple slides

- **GIVEN** the hero section loads
- **THEN** at least 2 slide items are rendered

### Requirement: Features Section

The template shows a 4-column feature grid.

#### Scenario: Features display service highlights

- **GIVEN** the features section loads
- **THEN** 4 feature cards are displayed
- **AND** each card shows an icon, title, and description

### Requirement: Categories Section

The template displays product categories in an image grid.

#### Scenario: Categories show product types

- **GIVEN** the categories section loads
- **THEN** a "Vegetables" hero card is shown
- **AND** category links for Fruits, Juices, and Dried are shown

### Requirement: Products Section

The template showcases products in a grid layout.

#### Scenario: Products display in grid

- **GIVEN** the products section loads
- **THEN** 8 product cards are displayed

#### Scenario: Product cards show details

- **GIVEN** a product card renders
- **THEN** it shows an image, name, price, and action buttons

#### Scenario: Sale badge on discounted items

- **GIVEN** a product has a discount
- **THEN** a sale badge is shown with original and discounted prices

### Requirement: Deal of the Day

The template includes a promotional deal section with countdown.

#### Scenario: Deal section renders

- **GIVEN** the deal section loads
- **THEN** "Deal of the day" heading is shown
- **AND** countdown timer elements (days, hours, minutes, seconds) are present

### Requirement: Testimonials

The template shows customer testimonials in a carousel.

#### Scenario: Testimonials display

- **GIVEN** the testimonials section loads
- **THEN** "Our satisfied customer says" heading is shown
- **AND** at least 3 testimonial cards are rendered with avatar, quote, name, and role

### Requirement: Partners

The template displays partner logos.

#### Scenario: Partner logos render

- **GIVEN** the partners section loads
- **THEN** 5 partner placeholder images are shown

### Requirement: Newsletter

The template includes a newsletter subscription form.

#### Scenario: Newsletter form renders

- **GIVEN** the newsletter section loads
- **THEN** a "Subscribe to our Newsletter" heading is shown
- **AND** an email input and subscribe button are present

#### Scenario: Newsletter validates email

- **GIVEN** a valid email is submitted
- **THEN** a success confirmation is displayed

#### Scenario: Newsletter rejects invalid email

- **GIVEN** an invalid email is submitted
- **THEN** an error message is displayed

### Requirement: Footer

The template ends with a dark footer containing links and contact information.

#### Scenario: Footer displays brand and links

- **GIVEN** the footer renders
- **THEN** brand name and description are shown
- **AND** "Customer Service" and "Delivery" link columns are shown

#### Scenario: Footer shows contact info

- **GIVEN** the footer renders
- **THEN** contact info (address, phone, email) is shown

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer renders
- **THEN** a "More templates at Component Dock" link to https://www.componentdock.com/ is present

#### Scenario: Footer shows copyright

- **GIVEN** the footer renders
- **THEN** a copyright line with the current year is shown

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/greenplate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/greenplate/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Top Bar — the top bar displays a phone number, email address, and delivery information
- [x] Navigation Bar — the navbar shows the brand name "Greenplate"
- [x] Hero Section — a heading "We serve Fresh Vegetables & Fruits" is displayed
- [ ] Features Section — 4 feature cards are displayed
- [x] Categories Section — a "Vegetables" hero card is shown
- [ ] Products Section — 8 product cards are displayed
- [x] Deal of the Day — "Deal of the day" heading is shown
- [x] Testimonials — "Our satisfied customer says" heading is shown
- [ ] Partners — 5 partner placeholder images are shown
- [x] Newsletter — a "Subscribe to our Newsletter" heading is shown
