---
name: Strider
description: Fashion e-commerce shop landing page — recreation of ColorLib "Karma"
source: https://colorlib.com/wp/template/karma/
preview: https://preview.colorlib.com/theme/karma/
---

# Template: Strider (Fashion E-Commerce Shop)

## Purpose

Recreate the ColorLib Karma fashion/e-commerce shop template as a single-page
React application under the name "Strider". The template features a sticky
navbar, hero banner with product showcase, service features, category grid,
product listing, exclusive deals with countdown, brand logos, deals of the week,
and a multi-column footer with newsletter signup.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/karma/ (HTTP 200, 42,249 B, fetched 2026-10-23) and its theme stylesheet `theme/karma/css/main.css` (112,824 B, sha256 `b40c520261a3…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#ffba00` | 65 declarations — `.primary-btn`, `.add-bag .add-btn` |
| Other chromatic values | `#ff6c00`, `#4cd3e3`, `#38a4ff` | `#ff6c00` × 16 (.primary-btn); `#4cd3e3` × 7 (.genric-btn.success); `#38a4ff` × 6 (.genric-btn.info) |
| Surface | `#ffffff` | 104 declarations — `.primary-btn`, `.primary-btn:hover` |
| Ink / dark surface | `#222222` | 66 declarations — `h1`, `h2` |
| Typeface | `"Roboto", sans-serif` (35 rules — body)<br>`"Poppins", sans-serif` (3 rules — h1) | `font-family` declarations in the theme sheet |
| Body type | `line-height: 24px; font-size: 14px; font-weight: 400; color: #777777` | `body{…}` rule |
| Radii | `3px`, `50%`, `8px` | `3px` (.genric-btn.radius); `50%` (.unordered-list li:before); `8px` (.primary-radio) |

Palette in order of use: `#ffffff` ×104, `#222222` ×66, `#ffba00` ×65, `#777777` ×55, `#eeeeee` ×35, `#f9f9ff` ×28.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Sticky navigation bar

The navbar SHALL display the "Strider" logo and navigation links (Home, Shop,
Blog, Contact). It SHALL be sticky on scroll. A cart icon with badge count and
search icon SHALL be visible.

#### Scenario: Desktop navigation renders all links

- **WHEN** the app loads on desktop
- **THEN** the navbar shows "Strider" logo and links for Home, Shop, Blog, Contact
- **AND** cart and search buttons are visible

#### Scenario: Mobile menu toggles

- **WHEN** the mobile menu toggle is clicked
- **THEN** the mobile menu expands with navigation links
- **AND** clicking a link closes the menu

### Requirement: Hero banner with CTA

The hero SHALL display "Stride Into Style" heading with gradient accent,
supporting description text, and a "Shop Now" button with gradient styling.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows the "Stride Into" heading with Style gradient text
- **AND** a description paragraph is visible
- **AND** a "Shop Now" button is present

#### Scenario: Hero image is displayed

- **WHEN** the page loads
- **THEN** a product showcase image is visible in the hero section

### Requirement: Service features row

The features section SHALL display four service items: Free Delivery, Return
Policy, 24/7 Support, and Secure Payment, each with an icon and description.

#### Scenario: All four features render

- **WHEN** the features section is visible
- **THEN** Free Delivery, Return Policy, 24/7 Support, and Secure Payment are shown
- **AND** each has an icon and description text

### Requirement: Category grid

The category section SHALL display five category cards in an asymmetric grid:
Men's Collection, Women's Collection, Sports Wear, Casual Wear, and Accessories.

#### Scenario: All five categories render

- **WHEN** the category grid is visible
- **THEN** all five category titles are displayed
- **AND** each has a category image

### Requirement: Latest products listing

The products section SHALL display "Latest Products" heading and four product
cards with image, title, sale price, original price (strikethrough), and
action buttons (add to bag, wishlist, compare, quick view).

#### Scenario: Products render with prices and actions

- **WHEN** the products section is visible
- **THEN** four product cards are displayed
- **AND** each shows title, sale price, and original price
- **AND** action buttons (bag, heart, compare, eye) are present

### Requirement: Exclusive deal section

The exclusive deal section SHALL display "Fashion Up To 50% Off" heading with
countdown items (Days, Hours, Mins), a "Shop Now" CTA, and a product image.

#### Scenario: Exclusive deal renders with countdown

- **WHEN** the exclusive deal section is visible
- **THEN** the heading and countdown labels are displayed
- **AND** the "Shop Now" button is present

### Requirement: Brand logos row

The brand section SHALL display five brand placeholder names in a row.

#### Scenario: All brand names render

- **WHEN** the brand section is visible
- **THEN** five brand names are displayed

### Requirement: Deals of the week

The deals section SHALL display "Deals of the Week" heading and nine small
product items with image, title, and price.

#### Scenario: Deals render with sidebar image

- **WHEN** the deals section is visible
- **THEN** nine deal items are displayed with name and price
- **AND** a sidebar category image is present

### Requirement: Footer with newsletter and social links

The footer SHALL display four columns: About Us (text), Newsletter (email
input + submit), Instagram Feed (8 placeholder images), and Follow Us (social
icons). The bottom bar SHALL show copyright with a "Component Dock" link to
https://www.componentdock.com/.

#### Scenario: Footer renders all sections

- **WHEN** the footer is visible
- **THEN** About Us, Newsletter, Instagram Feed, and Follow Us columns are present
- **AND** the email input and subscribe button are functional
- **AND** the copyright line contains a "Component Dock" link to componentdock.com

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/strider/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/strider/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Sticky navigation bar — the navbar shows "Strider" logo and links for Home, Shop, Blog, Contact
- [x] Hero banner with CTA — the hero shows the "Stride Into" heading with Style gradient text
- [ ] Service features row — Free Delivery, Return Policy, 24/7 Support, and Secure Payment are shown
- [ ] Category grid — all five category titles are displayed
- [ ] Latest products listing — four product cards are displayed
- [ ] Exclusive deal section — the heading and countdown labels are displayed
- [ ] Brand logos row — five brand names are displayed
- [ ] Deals of the week — nine deal items are displayed with name and price
