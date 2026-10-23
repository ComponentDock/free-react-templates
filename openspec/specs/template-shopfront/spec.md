# Template: Shopfront (E-Commerce)

## Purpose

Recreation of the ColorLib "E Shop" e-commerce template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source template:** [E Shop](https://colorlib.com/wp/template/e-shop/)
- **Preview URL:** https://preview.colorlib.com/theme/e-shop/
- **New name:** `shopfront` (apps/shopfront)
- **Category:** E-Commerce

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Body color | `#4A4E5A` | Dark gray body text |
| Header color | `#30323A` | Very dark, nearly black. Headings, strong, links |
| Primary | `#F8694A` | Orange/coral. Primary buttons, hover states, accents |
| Grey bg | `#F6F7F8` | Section-grey background (footer, alternating sections) |
| Border grey | `#DADADA` | Borders, button outlines, input shadows, hr |
| Font family | `"Hind", sans-serif` | Body and headings |
| Button primary | `#F8694A` bg, white text | `.primary-btn` — uppercase, bold, no border-radius |
| Button main | White bg, `#30323A` text, `#DADADA` border | `.main-btn` — hollow style, hover turns orange |
| Input style | No border, box-shadow inset `#DADADA` | Focus: shadow turns `#F8694A` |
| Link hover | `#F8694A` | All links on hover |
| Top header bg | `#30323A` | Dark bar with white text |
| Nav bg | `#30323A` | Category navigation bar |

## Visual Design Notes

From the ColorLib preview DOM analysis:

- **Two-tier header:** Top dark bar (#30323A) with welcome text + utility links (Store, Newsletter, FAQ, language/currency dropdowns). Main header below with logo, full-width search bar (input + category select + button), account dropdown + cart widget.
- **Category navigation bar** below header with "Categories" dropdown + horizontal menu.
- **Hero slider** with large product images, text overlays ("Bags sale" / "Up to 50% Discount"), "Shop Now" CTA.
- **Category banners** — grid of category cards with overlay text (Women's Clothing, Men's, Electronics, Home & Garden).
- **Deals of the Day** — product carousel with countdown-style deal cards, "HOT" labels.
- **Latest Products** — 4-column grid of product cards with images, star ratings, prices, cart/wishlist/compare buttons.
- **Picked For You** — similar product grid.
- **Footer** — light gray (#F6F7F8) background, 4 columns: logo + social, My Account links, Customer Service links, Newsletter signup form. Copyright bar at bottom.

## Requirements

### Feature: Shopfront template behaviour

Feature: Shopfront E-Commerce Template

Background:
- **GIVEN** the user visits the Shopfront homepage

**── Top Header Bar ──**

#### Scenario: Top header shows welcome and utility links

- **THEN** the top header should display "Welcome to Shopfront!"
- **AND** utility links: Store, Newsletter, FAQ
- **AND** language selector (ENG) and currency selector (USD)

**── Main Header ──**

#### Scenario: Main header has logo and search

- **THEN** the header should display the site logo
- **AND** a search bar with text input, category dropdown, and search button

#### Scenario: Header shows account and cart

- **THEN** the header should show "My Account" dropdown with Login/Join
- **AND** a cart icon with item count badge and total price
- **AND** a mobile nav toggle button

**── Category Navigation ──**

#### Scenario: Category navigation displays categories

- **THEN** the nav bar should show "Categories" button
- **AND** horizontal links: Women's Clothing, Men's Clothing, Electronics, Home & Garden

#### Scenario: Category dropdown shows subcategories

- **WHEN** the user hovers a category with subcategories
- **THEN** a mega-dropdown should appear with category columns and a banner

**── Hero Slider ──**

#### Scenario: Hero slider shows promotional slides

- **THEN** the hero slider should display promotional content
- **AND** a "Shop Now" call-to-action button

**── Category Banners ──**

#### Scenario: Category banner grid shows categories

- **THEN** the category section should display 4 category cards
- **AND** each card should show category name and image with overlay

**── Deals of the Day ──**

#### Scenario: Deals section shows products with prices

- **THEN** the "Deals Of The Day" section should display product cards
- **AND** each card should show image, rating, price, and action buttons

**── Latest Products ──**

#### Scenario: Latest products grid shows products

- **THEN** the "Latest Products" section should display product cards in a grid
- **AND** each card should show image, star rating, product name, and price

#### Scenario: Product card has action buttons

- **THEN** each product card should have add-to-cart, wishlist, and compare buttons

**── Picked For You ──**

#### Scenario: Picked section shows recommended products

- **THEN** the "Picked For You" section should display product cards

**── Newsletter / Footer ──**

#### Scenario: Footer shows 4 columns

- **THEN** the footer should display 4 columns: About/Logo, My Account, Customer Service, Stay Connected

#### Scenario: Footer newsletter has email form

- **THEN** the "Stay Connected" column should show an email input and "Join Newsletter" button

#### Scenario: Footer social links

- **THEN** the footer should show social icons: Facebook, Twitter, Instagram, Google+, Pinterest

#### Scenario: Footer copyright

- **THEN** the footer bottom should show copyright text and a "Component Dock" link

**── Responsive ──**

#### Scenario: Mobile view collapses nav

- **WHEN** the viewport width is less than 768px
- **THEN** the category nav should be hidden
- **AND** the header should show a hamburger toggle

#### Scenario: Mobile view adjusts grid

- **WHEN** the viewport width is less than 768px
- **THEN** product grids should stack to 2 columns

## Verification checklist

- [ ] All sections render in correct order: Top Header → Main Header → Category Nav → Hero Slider → Category Banners → Deals of the Day → Latest Products → Picked For You → Footer
- [ ] Design tokens match: primary #F8694A, header #30323A, Hind font, no border-radius buttons
- [ ] Top header: dark bar with welcome text + utility links + language/currency
- [ ] Main header: logo + search bar + account dropdown + cart widget
- [ ] Category nav with mega-dropdown on hover
- [ ] Hero slider with promotional content and CTA
- [ ] Category banner grid (4 cards with overlays)
- [ ] Product sections with star ratings, prices, action buttons
- [ ] Footer: light gray bg, 4 columns, newsletter form, social icons, copyright
- [ ] Responsive: hamburger on mobile, grid collapses
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds
