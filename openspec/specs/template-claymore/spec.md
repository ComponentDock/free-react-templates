# Template: Claymore (E-Commerce)
<!-- prep-status: shipped-as=drape -->
> **SHIPPED-UNDER** — the ColorLib `fashe` design this prep describes already
> ships as `apps/drape` (<https://drape.free.componentdock.com>).
> Do not scaffold `apps/claymore`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-drape/spec.md`.

## Purpose

Recreation of the ColorLib "Fashe" e-commerce template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source template:** [Fashe](https://colorlib.com/wp/template/fashe/)
- **Preview URL:** https://preview.colorlib.com/theme/fashe/
- **New name:** `claymore` (apps/claymore)
- **Category:** E-Commerce

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Color scheme 1 (default) | Background: `rgb(255,255,255)`, Text: `rgb(20,20,20)` | White bg, near-black text |
| Color scheme 2 | Background: `rgb(244,242,238)`, Text: `rgb(20,20,20)` | Warm beige/cream sections |
| Color scheme 3 (dark) | Background: `rgb(20,20,20)`, Text: `rgb(244,242,238)` | Dark mode sections (hero, marquee) |
| Color scheme 4 | Background: `rgb(200,85,61)`, Text: `rgb(255,255,255)` | Terracotta accent sections |
| Accent | `rgb(200,85,61)` — `#c8553d` | Warm terracotta/coral |
| Accent (dark scheme) | `rgb(226,160,135)` — `#e2a087` | Lighter terracotta on dark bg |
| Border | `rgb(228,228,228)` — `#e4e4e4` | Light gray borders |
| Button | `rgb(20,20,20)` bg, white text | Solid dark buttons |
| Outline button | `rgb(20,20,20)` border | Outlined dark buttons |
| Font family | `"Assistant", sans-serif` | Both body and headings |
| Heading weight | 700 | Bold headings |
| Body weight | 400 | Regular body |
| Border radius | `0px` (sharp corners) | All elements: `--radius-base: 0px`, `--radius-media: 0px` |
| Page width | `1440px` max | `.page-width` container |
| Section padding | `clamp(2.5rem, 6vw, 5rem)` | Responsive section spacing |

## Visual Design Notes

From the ColorLib preview DOM analysis:

- **Announcement bar** — dark background (scheme 3), rotating text: "Free shipping on orders over $100", "30 day returns", "Carbon neutral delivery", "Natural fibres only"
- **Sticky header** — clean white bar with hamburger menu (mobile), logo "Fashe." (with terracotta dot), horizontal nav: Home, Shop (dropdown: All products, Clothing, Bags, Accessories, Jewellery, Shoes), Product, Blog (dropdown), About, Contact. Right: search icon, account icon, cart icon with count badge.
- **Hero banner** — full-width with dark overlay (scheme 3), background image, centered content: "New season" eyebrow, "New season essentials" headline (clamp sizing), subtext, "Shop now" button
- **Marquee ticker** — scrolling text strip (scheme 3): "Free shipping over $100", "30 day returns", "Carbon neutral delivery", "Natural fibres only"
- **Shop by category** — 3 collection cards (Clothing, Jewellery, Bags) with portrait images, arrow icon, category name overlay. Responsive grid.
- **New arrivals** — eyebrow "Just landed", heading "New arrivals", 4-column product grid. Cards have: dual images (hover swap), "Quick add" button overlay, title, price, color swatches. Some have "Sale" badge with compare price.
- **Made to last** — image-with-text section (scheme 2 beige bg), 2-column: landscape image left, heading + description + "Our story" button right.
- **Why shop with us** — 3-column feature grid: Free shipping, 30 day returns, Made responsibly. Each with heading + description.
- **Journal** — 3 blog article cards: landscape image, date + category meta, title, excerpt. "All posts" outline button.
- **Footer** — 4-column grid: Brand description + social icons (Instagram, Facebook, Pinterest), Shop links, Help links, Newsletter signup (email input + Subscribe button). Bottom bar with copyright.

## Requirements

### Feature: Claymore template behaviour

Feature: Claymore E-Commerce Template

Background:
- **GIVEN** the user visits the Claymore homepage

**── Announcement Bar ──**

#### Scenario: Announcement bar shows rotating messages

- **THEN** the announcement bar should display rotating promotional messages
- **AND** messages should include "Free shipping on orders over $100" and "30 day returns"

**── Header ──**

#### Scenario: Header shows logo, nav, and actions

- **THEN** the header should display the site logo with terracotta accent dot
- **AND** navigation links: Home, Shop, Product, Blog, About, Contact
- **AND** action icons: search, account, cart with count badge

#### Scenario: Shop dropdown reveals categories

- **WHEN** the user hovers or clicks the Shop nav item
- **THEN** a dropdown should appear with: All products, Clothing, Bags, Accessories, Jewellery, Shoes

#### Scenario: Header becomes sticky on scroll

- **WHEN** the user scrolls past the header
- **THEN** the header should remain fixed at the top

**── Hero Banner ──**

#### Scenario: Hero shows promotional content

- **THEN** the hero banner should display a background image with dark overlay
- **AND** text: "New season" eyebrow, "New season essentials" headline
- **AND** a "Shop now" button

**── Marquee Ticker ──**

#### Scenario: Marquee shows scrolling messages

- **THEN** a scrolling marquee should display promotional messages
- **AND** include "Free shipping over $100" and "Natural fibres only"

**── Shop by Category ──**

#### Scenario: Category section shows collection cards

- **THEN** the "Shop by category" section should display 3 collection cards
- **AND** each card should show a portrait image and category name with arrow

**── New Arrivals ──**

#### Scenario: New arrivals shows product grid

- **THEN** the "New arrivals" section should display 4 product cards
- **AND** each card should show product image, title, price, and color swatches

#### Scenario: Product card has quick-add overlay

- **WHEN** the user hovers a product card
- **THEN** a "Quick add" button should appear

#### Scenario: Sale product shows badge and compare price

- **THEN** sale products should display a "Sale" badge
- **AND** show the discounted price alongside the original price with strikethrough

**── Image with Text ──**

#### Scenario: Made to last section shows image and text

- **THEN** the "Made to last" section should display a landscape image on the left
- **AND** heading "Made to last" with description and "Our story" button on the right

**── Why Shop With Us ──**

#### Scenario: Features section shows 3 benefits

- **THEN** the "Why shop with us" section should display 3 feature cards
- **AND** each card should show a title and description

**── Journal ──**

#### Scenario: Journal shows 3 blog articles

- **THEN** the "Journal" section should display 3 article cards
- **AND** each card should show an image, date, category, title, and excerpt

**── Footer ──**

#### Scenario: Footer shows 4 columns

- **THEN** the footer should display 4 columns: Brand/Description, Shop, Help, Newsletter

#### Scenario: Footer has social links

- **THEN** the footer should show social icons: Instagram, Facebook, Pinterest

#### Scenario: Footer newsletter has email form

- **THEN** the Newsletter column should show an email input and "Subscribe" button

#### Scenario: Footer copyright

- **THEN** the footer bottom should show copyright text and a "Component Dock" link

**── Responsive ──**

#### Scenario: Mobile view collapses nav

- **WHEN** the viewport width is less than 990px
- **THEN** the desktop navigation should be hidden
- **AND** a hamburger menu toggle should appear

#### Scenario: Mobile view adjusts grids

- **WHEN** the viewport width is less than 768px
- **THEN** product grids should show 2 columns
- **AND** category cards should stack vertically

## Verification checklist

- [ ] All sections render in correct order: Announcement → Header → Hero → Marquee → Categories → New Arrivals → Image+Text → Features → Journal → Footer
- [ ] Design tokens match: accent #c8553d, Assistant font, 0px border-radius, color scheme sections
- [ ] Announcement bar with rotating messages on dark background
- [ ] Sticky header with logo (terracotta dot), nav, search/account/cart icons
- [ ] Hero: full-width with dark overlay, centered content, "Shop now" button
- [ ] Marquee ticker with scrolling promotional text
- [ ] Category section: 3 collection cards with images
- [ ] Product grid: 4-column, hover quick-add, color swatches, sale badges
- [ ] Image-with-text section on beige background
- [ ] Features section: 3-column grid
- [ ] Journal: 3 blog article cards
- [ ] Footer: 4 columns, social icons, newsletter form, copyright
- [ ] Responsive: hamburger on mobile, grids collapse
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/fashe/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#c8553d` — nearest `#d99a2b` (d=73)
- `#e2a087` — nearest `#d99a2b` (d=93)
<!-- live-palette-unverified:end -->
