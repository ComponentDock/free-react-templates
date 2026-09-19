# Template: Claymore (E-Commerce)

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

## Gherkin Requirements

```gherkin
Feature: Claymore E-Commerce Template

  Background:
    Given the user visits the Claymore homepage

  # ── Announcement Bar ──

  Scenario: Announcement bar shows rotating messages
    Then the announcement bar should display rotating promotional messages
    And messages should include "Free shipping on orders over $100" and "30 day returns"

  # ── Header ──

  Scenario: Header shows logo, nav, and actions
    Then the header should display the site logo with terracotta accent dot
    And navigation links: Home, Shop, Product, Blog, About, Contact
    And action icons: search, account, cart with count badge

  Scenario: Shop dropdown reveals categories
    When the user hovers or clicks the Shop nav item
    Then a dropdown should appear with: All products, Clothing, Bags, Accessories, Jewellery, Shoes

  Scenario: Header becomes sticky on scroll
    When the user scrolls past the header
    Then the header should remain fixed at the top

  # ── Hero Banner ──

  Scenario: Hero shows promotional content
    Then the hero banner should display a background image with dark overlay
    And text: "New season" eyebrow, "New season essentials" headline
    And a "Shop now" button

  # ── Marquee Ticker ──

  Scenario: Marquee shows scrolling messages
    Then a scrolling marquee should display promotional messages
    And include "Free shipping over $100" and "Natural fibres only"

  # ── Shop by Category ──

  Scenario: Category section shows collection cards
    Then the "Shop by category" section should display 3 collection cards
    And each card should show a portrait image and category name with arrow

  # ── New Arrivals ──

  Scenario: New arrivals shows product grid
    Then the "New arrivals" section should display 4 product cards
    And each card should show product image, title, price, and color swatches

  Scenario: Product card has quick-add overlay
    When the user hovers a product card
    Then a "Quick add" button should appear

  Scenario: Sale product shows badge and compare price
    Then sale products should display a "Sale" badge
    And show the discounted price alongside the original price with strikethrough

  # ── Image with Text ──

  Scenario: Made to last section shows image and text
    Then the "Made to last" section should display a landscape image on the left
    And heading "Made to last" with description and "Our story" button on the right

  # ── Why Shop With Us ──

  Scenario: Features section shows 3 benefits
    Then the "Why shop with us" section should display 3 feature cards
    And each card should show a title and description

  # ── Journal ──

  Scenario: Journal shows 3 blog articles
    Then the "Journal" section should display 3 article cards
    And each card should show an image, date, category, title, and excerpt

  # ── Footer ──

  Scenario: Footer shows 4 columns
    Then the footer should display 4 columns: Brand/Description, Shop, Help, Newsletter

  Scenario: Footer has social links
    Then the footer should show social icons: Instagram, Facebook, Pinterest

  Scenario: Footer newsletter has email form
    Then the Newsletter column should show an email input and "Subscribe" button

  Scenario: Footer copyright
    Then the footer bottom should show copyright text and a "Component Dock" link

  # ── Responsive ──

  Scenario: Mobile view collapses nav
    When the viewport width is less than 990px
    Then the desktop navigation should be hidden
    And a hamburger menu toggle should appear

  Scenario: Mobile view adjusts grids
    When the viewport width is less than 768px
    Then product grids should show 2 columns
    And category cards should stack vertically
```

## Verification Checklist

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
