# Template: CartDen (E-Commerce)
<!-- prep-status: shipped-as=wares -->
> **SHIPPED-UNDER** — the ColorLib `e-shop` design this prep describes already
> ships as `apps/wares` (<https://wares.free.componentdock.com>).
> Do not scaffold `apps/cartden`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-wares/spec.md`.

## Purpose

Recreation of the ColorLib "E Shop" template.

- **Source slug:** `e-shop`
- **ColorLib URL:** https://colorlib.com/wp/template/e-shop/
- **Preview URL:** https://preview.colorlib.com/theme/e-shop/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `cartden` (apps/cartden)

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token          | Value                          | Usage                                      |
| -------------- | ------------------------------ | ------------------------------------------ |
| Brand color    | `#F8694A` (coral-orange)      | Primary buttons, CTAs, category-nav bg, hover accents |
| Dark           | `#30323A` (charcoal)          | Footer bg, header top-bar bg               |
| Muted dark     | `#4A4E5A`                     | Secondary text                             |
| Light bg       | `#F6F7F8`                     | Section backgrounds                        |
| Border/divider | `#DADADA`                     | Borders, dividers                          |
| White          | `#FFF`                        | Card/surface backgrounds                   |
| Font family    | `Hind`, sans-serif             | Body and headings                          |
| Icon font      | FontAwesome (icons)            | Use `lucide-react` as replacement          |
| Button radius  | `0px` (square/rectangular)    | Main CTAs are sharp-cornered               |
| Circle radius  | `50%`                         | Quick-view / wishlist / compare icon btns  |

### Visual Design (from screenshot)

The screenshot shows a classic e-commerce layout:
- Dark charcoal top bar ("Welcome to E-shop!") with utility links (STORE, NEWSLETGER, FAQ, language, currency)
- White main header with coral "E-SHOP" logo, category dropdown search bar, account/cart icons
- Dark charcoal navigation bar with coral "CATEGORIES" button, menu links (HOME, SHOP, WOMEN, MEN, SALES, PAGES)
- Left sidebar category list (Women's Clothing, Men's Clothing, etc.) alongside a hero image slider ("NEW PRODUCT COLLECTION" + "SHOP NOW" coral CTA)
- 3-column "NEW COLLECTION" category image cards below the hero
- "Deals of the Day" product grid with countdown timers and -20% badges
- "Hot Deal" banner (50% OFF) + "New Collection" banner (side by side)
- "Latest Products" product grid with tabbed filter
- Dark charcoal footer with about text, account links, customer service links, newsletter signup, copyright

## Requirements

### Header

Feature: CartDen Header

#### Scenario: Top utility bar renders

- **GIVEN** the page loads
- **THEN** a dark charcoal top bar displays "Welcome to CartDen!"
- **AND** utility links "STORE", "NEWSLETTER", "FAQ" are visible
- **AND** language and currency selectors are present

#### Scenario: Main header with logo and search

- **GIVEN** the page loads
- **THEN** the "CartDen" brand logo is displayed in coral-orange
- **AND** a category dropdown search input is visible
- **AND** account icon and cart icon with item count are shown

#### Scenario: Cart dropdown shows items

- **GIVEN** the cart has items
- **WHEN** the user hovers the cart icon
- **THEN** a dropdown lists cart items with name, price, quantity, and remove button
- **AND** a subtotal and checkout link are displayed

### Navigation

Feature: CartDen Navigation

#### Scenario: Category navigation bar renders

- **GIVEN** the page loads
- **THEN** a dark charcoal nav bar is visible below the header
- **AND** a coral "CATEGORIES" button with hamburger icon is on the left
- **AND** menu links HOME, SHOP, WOMEN, MEN, SALES, PAGES are listed
- **AND** dropdown menus with sub-links appear on hover for WOMEN, MEN, PAGES

#### Scenario: Category sidebar opens on click

- **GIVEN** the CATEGORIES button is visible
- **WHEN** the user clicks the CATEGORIES button
- **THEN** a sidebar lists categories: Women's Clothing, Men's Clothing, Phones & Accessories, Computer & Office, Consumer Electronics, Jewelry & Watches, Bags & Shoes, View All
- **AND** each category with sub-items has a right-arrow chevron

### Hero Section

Feature: CartDen Hero Slider

#### Scenario: Hero banner slider displays

- **GIVEN** the page loads
- **THEN** a full-width hero slider shows a product image with overlay text
- **AND** the overlay text reads "NEW PRODUCT COLLECTION"
- **AND** a coral "SHOP NOW" button is centered on the banner

#### Scenario: Slider navigation arrows work

- **GIVEN** the hero slider is visible
- **WHEN** the user clicks the left or right arrow
- **THEN** the slider transitions to the previous or next slide

### Category Cards

Feature: CartDen Category Cards

#### Scenario: Three category cards render

- **GIVEN** the hero section is visible
- **THEN** three equal-width category image cards are displayed
- **AND** each card has an overlay with "NEW COLLECTION" text
- **AND** the images represent different product categories (bags, shoes, apparel)

### Deals of the Day

Feature: CartDen Deals Section

#### Scenario: Deals section renders with title and description

- **GIVEN** the page loads
- **THEN** a "Deals Of The Day" section title is displayed
- **AND** a descriptive subtitle is shown

#### Scenario: Deal product cards show countdown and badges

- **GIVEN** the deals section is visible
- **THEN** each product card shows: image, countdown timer (H/M/S), badge (New/-20%)
- **AND** each card shows: product name, current price, old price (strikethrough)
- **AND** quick-view, wishlist, and compare icon buttons appear on hover

#### Scenario: Add to Cart button works on deal cards

- **GIVEN** a deal product card is visible
- **WHEN** the user clicks "Add to Cart"
- **THEN** the cart count in the header increments by 1

### Promotional Banners

Feature: CartDen Promo Banners

#### Scenario: Hot Deal banner renders

- **GIVEN** the deals section is visible
- **THEN** a "HOT DEAL" banner with "Up to 50% OFF" text and "Shop Now" CTA is displayed
- **AND** the banner has a background image

#### Scenario: New Collection banner renders

- **GIVEN** the Hot Deal banner is visible
- **THEN** a "NEW COLLECTION" banner with "Shop Now" CTA is displayed beside it

### Latest Products

Feature: CartDen Latest Products

#### Scenario: Latest Products section renders

- **GIVEN** the page loads
- **THEN** a "Latest Products" section title is displayed
- **AND** a grid of product cards is shown

#### Scenario: Product cards display correctly

- **GIVEN** the latest products section is visible
- **THEN** each product card shows: image, badges (New/-20%), name, price
- **AND** quick-view, wishlist, and compare icon buttons appear on hover
- **AND** an "Add to Cart" button is present

### Footer

Feature: CartDen Footer

#### Scenario: Footer renders with four columns

- **GIVEN** the page loads
- **THEN** a dark charcoal footer is displayed
- **AND** column 1 shows the logo and about text
- **AND** column 2 shows "My Account" links: My Account, My Wishlist, Compare, Checkout, Login
- **AND** column 3 shows "Customer Service" links: About Us, Shipping & Return, Shipping Guide, FAQ
- **AND** column 4 shows "Stay Connected" with newsletter signup form

#### Scenario: Newsletter signup form

- **GIVEN** the footer is visible
- **WHEN** the user enters an email and clicks "Join Newsletter"
- **THEN** the form validates the email format
- **AND** an error message appears for invalid emails

#### Scenario: Copyright bar

- **GIVEN** the footer is visible
- **THEN** a copyright bar displays the current year
- **AND** a "Component Dock" link is present (replacing original Colorlib attribution)

## Verification checklist

- [ ] All sections match the original section order: Header → Nav → Hero Slider → Category Cards → Deals of the Day → Promo Banners → Latest Products → Footer
- [ ] Design tokens match: brand `#F8694A`, dark `#30323A`, light bg `#F6F7F8`, font Hind
- [ ] Buttons are square/rectangular (no border-radius) for primary CTAs
- [ ] No references to ColorLib in app code (provenance only in spec + TEMPLATES.md + PR)
- [ ] Footer links to Component Dock
- [ ] Placeholder images use `https://picsum.photos/seed/cartden-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck, lint, and build pass
