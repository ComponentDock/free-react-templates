# Template: Vignette (Fashion E-commerce)

Recreation of ColorLib "Karl" (https://colorlib.com/wp/template/karl/)

## Purpose

Vignette is a fashion e-commerce single-page template with a header, promotional banner, hero slider, category showcase, product grid with filters, offer highlight, testimonials carousel, and a footer with newsletter and social links. It faithfully recreates the ColorLib Karl design under a new name with the Vignette brand palette (hot pink #ff084e accents, Open Sans font, dark gray headings).

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/karl/ (HTTP 200, 52,137 B, sha256 `d9bc342cdcbb…`, fetched 2026-10-23) and its design stylesheet(s) `core-style.min.css`, `photoswipe.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#d6003a` | 35 declarations — `#scrollUp`, `.cart_quantity` |
| Other chromatic values | `#ff084e` (11), `#7fbdff` (3), `#ff9800` (3) | secondary hues in the same sheet |
| Surface | `#ffffff` | 63 declarations — `.form-range:focus::-moz-range-thumb`, `.form-range:focus::-webkit-slider-thumb` |
| Ink / dark surface | `#000000` | 29 declarations — `.text-bg-info`, `.text-bg-primary` |
| Typeface | `Open Sans` (5 rules — `body`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `1rem`, `2px`, `4px` | `50%` (`.cart_quantity`); `1rem` (`.form-range::-moz-range-thumb`); `2px` (`.karl-btn`); `4px` (`.kit-form-status`) |
| Gradients | 1 declaration | `.single_catagory_area:before` |

Palette in order of use: `#ffffff` ×63, `#d6003a` ×35, `#000000` ×29, `#3a3a3a` ×22, `#6b6b6b` ×20, `#f4f2f8` ×12, `#ff084e` ×11, `#007bff` ×10.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/karl/css/core-style.min.css?v=3.0.0` — 235,452 B, sha256 `88f8c2fa2f6c…`; `theme/karl/vendor/photoswipe/5.4.4/photoswipe.css?v=3.0.0` — 7,423 B, sha256 `b0eaaae0b9de…`; `theme/karl/style.css` — 345 B, sha256 `088830a0335e…`.

## Requirements

### Requirement: Header with navigation and cart

The template SHALL display a header with logo, navigation links (Home, Shop, Dresses, Shoes, Contact), social share icons, a shopping bag icon with item count badge, and a phone number. The header SHALL include a mobile hamburger menu that toggles open/closed.

#### Scenario: Desktop header renders all nav elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the header shows the logo, navigation links, social icons, cart badge, and phone number

#### Scenario: Mobile menu toggles on click

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation panel opens with all nav links
- **AND** clicking the close button or a nav link closes the panel

### Requirement: Promotional discount banner

The template SHALL display a 3-column promotional banner below the header with offers: Free Shipping, 20% Discount for dresses, and 20% Student Discount.

#### Scenario: Banner shows three offers

- **WHEN** the page loads
- **THEN** three promotional messages are displayed side by side
- **AND** each offer has appropriate text or a discount code

### Requirement: Hero carousel slider

The template SHALL display a full-width hero carousel that auto-advances every 5 seconds with background images, overlay text, and CTA buttons. It SHALL include slide indicator dots for manual navigation.

#### Scenario: Hero slider auto-advances

- **WHEN** the page loads
- **THEN** the first slide is shown with headline and CTA button
- **AND** after 5 seconds the next slide is displayed

#### Scenario: Manual slide navigation

- **WHEN** the user clicks a slide indicator dot
- **THEN** the corresponding slide is displayed

### Requirement: Top categories section

The template SHALL display two side-by-side category cards with background images, overlay text, and SHOP NOW CTA buttons.

#### Scenario: Two category cards render

- **WHEN** the page loads
- **THEN** two category cards are shown with titles and CTA buttons

### Requirement: New arrivals product grid with filters

The template SHALL display a product grid (3 columns on desktop) with filter tabs (All, Women, Man, Accessories, Shoes, Kids). Each product card SHALL show an image, price, name, and Add to Cart link.

#### Scenario: All products shown by default

- **WHEN** the page loads
- **THEN** all 6 products are visible

#### Scenario: Filter reduces visible products

- **WHEN** the user clicks a category filter tab
- **THEN** only products in that category are shown
- **AND** clicking ALL shows all products again

### Requirement: Special offer section

The template SHALL display a full-width offer section with a background image, product title with Hot badge, regular and discounted pricing, and a Shop Now CTA.

#### Scenario: Offer section renders pricing

- **WHEN** the page loads
- **THEN** the offer section shows product name, original price (struck through), sale price, and a CTA button

### Requirement: Testimonials carousel

The template SHALL display a testimonials section with a customer quote, author name, location, and avatar image. It SHALL auto-advance every 6 seconds with indicator dots.

#### Scenario: Initial testimonial displays

- **WHEN** the page loads
- **THEN** the first testimonial quote, author name, and location are shown

#### Scenario: Testimonial navigation

- **WHEN** the user clicks a testimonial indicator dot
- **THEN** the corresponding testimonial is displayed

### Requirement: Footer with newsletter and Component Dock link

The template SHALL display a dark footer with logo, quick links, account links, a newsletter signup form, social icons, and a "Made with ❤ by Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the footer shows quick links, account links, newsletter form, and social icons

#### Scenario: Newsletter form validates email

- **WHEN** the user submits the newsletter form with an invalid email
- **THEN** an error message is shown
- **AND** submitting with a valid email shows a success message

#### Scenario: Component Dock attribution

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/vignette/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/vignette/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Header with navigation and cart — the header shows the logo, navigation links, social icons, cart badge, and phone number
- [ ] Promotional discount banner — three promotional messages are displayed side by side
- [ ] Hero carousel slider — the first slide is shown with headline and CTA button
- [ ] Top categories section — two category cards are shown with titles and CTA buttons
- [ ] New arrivals product grid with filters — all 6 products are visible
- [ ] Special offer section — the offer section shows product name, original price (struck through), sale price, and a CTA button
- [ ] Testimonials carousel — the first testimonial quote, author name, and location are shown
