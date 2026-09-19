# Template: Bouquet (E-Commerce)

## Purpose

Recreation of the ColorLib "Aroma" e-commerce shop template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source template:** [Aroma](https://colorlib.com/wp/template/aroma/)
- **Preview URL:** https://preview.colorlib.com/theme/aroma/
- **New name:** `bouquet` (apps/bouquet)
- **Category:** E-Commerce

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand primary | `#384aeb` | Indigo-blue. Buttons, links, hover states, hero accent bar, subscribe section shadow |
| Brand accent | `#8894ff` | Lighter indigo. Card overlay action buttons default state |
| Danger/CTA | `#c5322d` | Red. Register button, some hover accents |
| Hero banner bg | `#F1F6F7` | Light gray-blue section background |
| Footer bg | `#002347` | Dark navy |
| Footer bottom bg | `rgba(0,35,71,0.98)` | Near-opaque navy |
| Heading color | `#222` | All headings (h1–h6) |
| Body text | `#777` | Body paragraphs, secondary text |
| Secondary text | `#555555` | Hero subtext, descriptions |
| Heading font | `"Oswald", sans-serif` | h1–h6, nav-brand, footer titles |
| Body font | `"Roboto", sans-serif` | Body, paragraphs, product titles |
| Button radius | `30px` | Pill-shaped buttons (`.button`, `.button-hero`, `.button-subscribe`) |
| Card overlay bg | `rgba(255,255,255,0.5)` | Semi-transparent white on product hover |
| Subscribe shadow | `box-shadow: 0px -5px 20px 0px rgba(56,74,235,0.1)` | Blue-tinted upward shadow on subscribe card |
| Section margin | `45px` mobile → `120px` desktop | Responsive section spacing |

## Visual Design Notes

From the ColorLib screenshot and preview DOM analysis:

- **Clean, modern e-commerce layout** with a generous whitespace rhythm.
- **Hero section** has a distinctive left accent bar (solid blue `#384aeb`), a product image on the left, and headline + CTA on the right over a `#F1F6F7` background.
- **Hero carousel** below hero with 3 product slides; on hover, a white overlay slides up from the bottom revealing product name + category.
- **Product grid** is 4-column (xl) / 3-column (lg) / 2-column (md), cards are borderless with image, category label, product name, and price. Hover reveals icon overlay (search, cart, heart) with semi-transparent background.
- **Offer/Parallax section** uses a full-width background image with text overlay.
- **Blog section** shows 3 cards with author + comments metadata, title, excerpt, and "Read More" link.
- **Subscribe/Newsletter** is a centered white card with blue shadow, email input + pill button.
- **Footer** is dark navy (`#002347`), 4-column layout: Mission text, Quick Links list, Gallery thumbnails (6 images), Contact info (address, phone, email). Bottom bar has copyright.

## Gherkin Requirements

```gherkin
Feature: Bouquet E-Commerce Template

  Background:
    Given the user visits the Bouquet homepage

  # ── Navbar ──

  Scenario: Navbar displays logo and navigation links
    Then the navbar should display the site logo
    And the navbar should contain links: Home, Shop, Blog, Contact
    And the navbar should show a search icon and cart icon with badge

  Scenario: Navbar becomes sticky on scroll
    When the user scrolls past the header
    Then the navbar should be fixed to the top of the viewport

  Scenario: Shop dropdown reveals sub-links
    When the user hovers or clicks the Shop dropdown
    Then sub-links should appear: Shop Category, Product Details, Product Checkout

  # ── Hero Banner ──

  Scenario: Hero banner shows headline and CTA
    Then the hero banner should display heading "Browse Our Premium Product"
    And a subheading "Shop is fun"
    And a "Browse Now" call-to-action button
    And a product image on the left side

  Scenario: Hero banner has blue accent bar on the left
    Then the hero banner should have a left vertical accent bar in brand blue (#384aeb)

  # ── Hero Carousel ──

  Scenario: Hero carousel shows 3 product slides
    Then the hero carousel should display 3 slides
    And each slide should show a product image with overlay on hover

  Scenario: Hero carousel overlay appears on hover
    When the user hovers a carousel slide
    Then a semi-transparent overlay should slide up
    And the overlay should show product name and category

  # ── Trending Products ──

  Scenario: Trending products grid shows 4 products
    Then the trending products section should display heading "Trending Product"
    And it should show 4 product cards in a grid

  Scenario: Product card shows image, category, name, price
    Then each product card should display an image
    And a category label (e.g. "Accessories", "Beauty")
    And a product name
    And a price (e.g. "$150.00")

  Scenario: Product card hover reveals action icons
    When the user hovers a product card
    Then an overlay with search, cart, and heart icons should appear

  # ── Offer / Parallax Section ──

  Scenario: Offer section displays with parallax background
    Then the offer section should show a full-width background image
    And display promotional heading and subtext

  # ── Blog Section ──

  Scenario: Blog section shows 3 blog cards
    Then the blog section should display 3 blog cards
    And each card should show author name, comment count, title, excerpt, and "Read More" link

  # ── Subscribe Section ──

  Scenario: Subscribe section shows email form
    Then the subscribe section should display heading "Get Update From Anywhere"
    And an email input placeholder "Enter your email"
    And a "Subscribe Now" pill button

  Scenario: Subscribe section has floating card appearance
    Then the subscribe card should have a blue-tinted upward shadow

  # ── Footer ──

  Scenario: Footer shows 4 columns
    Then the footer should display 4 columns: Our Mission, Quick Links, Gallery, Contact Us

  Scenario: Footer Quick Links contains standard links
    Then the Quick Links column should list: Home, Shop, Blog, Product, Brand, Contact

  Scenario: Footer Contact shows address, phone, email
    Then the Contact column should show an address, phone numbers, and email addresses

  Scenario: Footer has copyright bar
    Then the footer bottom should show copyright text and a "Component Dock" link

  # ── Responsive ──

  Scenario: Mobile view collapses navbar
    When the viewport width is less than 991px
    Then the navbar should collapse into a hamburger toggle
    And navigation links should be hidden behind the toggle

  Scenario: Mobile view adjusts grid
    When the viewport width is less than 768px
    Then the product grid should show 2 columns
    And the blog grid should stack vertically
```

## Verification Checklist

- [ ] All sections render in correct order: Navbar → Hero Banner → Hero Carousel → Trending Products → Offer → Blog → Subscribe → Footer
- [ ] Design tokens match: brand blue #384aeb, Oswald headings, Roboto body, pill buttons (radius 30px)
- [ ] Hero banner: left blue accent bar, product image + headline + CTA
- [ ] Hero carousel: 3 slides with hover overlay
- [ ] Product grid: 4-column responsive grid, hover overlay with icon buttons
- [ ] Blog section: 3 cards with metadata + excerpt + Read More
- [ ] Subscribe: centered card with blue shadow, email input + pill button
- [ ] Footer: dark navy #002347, 4-column layout, copyright bar with Component Dock link
- [ ] Responsive: hamburger nav on mobile, grid collapses to 2-col/stacked
- [ ] No ColorLib references in app code (provenance only in this spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds
