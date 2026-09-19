# Template: CartDen (E-Commerce)

## Purpose

Recreation of the ColorLib **E Shop** template.

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

## Requirements (Gherkin)

### Header

```gherkin
Feature: CartDen Header

  Scenario: Top utility bar renders
    Given the page loads
    Then a dark charcoal top bar displays "Welcome to CartDen!"
    And utility links "STORE", "NEWSLETTER", "FAQ" are visible
    And language and currency selectors are present

  Scenario: Main header with logo and search
    Given the page loads
    Then the "CartDen" brand logo is displayed in coral-orange
    And a category dropdown search input is visible
    And account icon and cart icon with item count are shown

  Scenario: Cart dropdown shows items
    Given the cart has items
    When the user hovers the cart icon
    Then a dropdown lists cart items with name, price, quantity, and remove button
    And a subtotal and checkout link are displayed
```

### Navigation

```gherkin
Feature: CartDen Navigation

  Scenario: Category navigation bar renders
    Given the page loads
    Then a dark charcoal nav bar is visible below the header
    And a coral "CATEGORIES" button with hamburger icon is on the left
    And menu links HOME, SHOP, WOMEN, MEN, SALES, PAGES are listed
    And dropdown menus with sub-links appear on hover for WOMEN, MEN, PAGES

  Scenario: Category sidebar opens on click
    Given the CATEGORIES button is visible
    When the user clicks the CATEGORIES button
    Then a sidebar lists categories: Women's Clothing, Men's Clothing, Phones & Accessories, Computer & Office, Consumer Electronics, Jewelry & Watches, Bags & Shoes, View All
    And each category with sub-items has a right-arrow chevron
```

### Hero Section

```gherkin
Feature: CartDen Hero Slider

  Scenario: Hero banner slider displays
    Given the page loads
    Then a full-width hero slider shows a product image with overlay text
    And the overlay text reads "NEW PRODUCT COLLECTION"
    And a coral "SHOP NOW" button is centered on the banner

  Scenario: Slider navigation arrows work
    Given the hero slider is visible
    When the user clicks the left or right arrow
    Then the slider transitions to the previous or next slide
```

### Category Cards

```gherkin
Feature: CartDen Category Cards

  Scenario: Three category cards render
    Given the hero section is visible
    Then three equal-width category image cards are displayed
    And each card has an overlay with "NEW COLLECTION" text
    And the images represent different product categories (bags, shoes, apparel)
```

### Deals of the Day

```gherkin
Feature: CartDen Deals Section

  Scenario: Deals section renders with title and description
    Given the page loads
    Then a "Deals Of The Day" section title is displayed
    And a descriptive subtitle is shown

  Scenario: Deal product cards show countdown and badges
    Given the deals section is visible
    Then each product card shows: image, countdown timer (H/M/S), badge (New/-20%)
    And each card shows: product name, current price, old price (strikethrough)
    And quick-view, wishlist, and compare icon buttons appear on hover

  Scenario: Add to Cart button works on deal cards
    Given a deal product card is visible
    When the user clicks "Add to Cart"
    Then the cart count in the header increments by 1
```

### Promotional Banners

```gherkin
Feature: CartDen Promo Banners

  Scenario: Hot Deal banner renders
    Given the deals section is visible
    Then a "HOT DEAL" banner with "Up to 50% OFF" text and "Shop Now" CTA is displayed
    And the banner has a background image

  Scenario: New Collection banner renders
    Given the Hot Deal banner is visible
    Then a "NEW COLLECTION" banner with "Shop Now" CTA is displayed beside it
```

### Latest Products

```gherkin
Feature: CartDen Latest Products

  Scenario: Latest Products section renders
    Given the page loads
    Then a "Latest Products" section title is displayed
    And a grid of product cards is shown

  Scenario: Product cards display correctly
    Given the latest products section is visible
    Then each product card shows: image, badges (New/-20%), name, price
    And quick-view, wishlist, and compare icon buttons appear on hover
    And an "Add to Cart" button is present
```

### Footer

```gherkin
Feature: CartDen Footer

  Scenario: Footer renders with four columns
    Given the page loads
    Then a dark charcoal footer is displayed
    And column 1 shows the logo and about text
    And column 2 shows "My Account" links: My Account, My Wishlist, Compare, Checkout, Login
    And column 3 shows "Customer Service" links: About Us, Shipping & Return, Shipping Guide, FAQ
    And column 4 shows "Stay Connected" with newsletter signup form

  Scenario: Newsletter signup form
    Given the footer is visible
    When the user enters an email and clicks "Join Newsletter"
    Then the form validates the email format
    And an error message appears for invalid emails

  Scenario: Copyright bar
    Given the footer is visible
    Then a copyright bar displays the current year
    And a "Component Dock" link is present (replacing original Colorlib attribution)
```

## Verification Checklist

- [ ] All sections match the original section order: Header → Nav → Hero Slider → Category Cards → Deals of the Day → Promo Banners → Latest Products → Footer
- [ ] Design tokens match: brand `#F8694A`, dark `#30323A`, light bg `#F6F7F8`, font Hind
- [ ] Buttons are square/rectangular (no border-radius) for primary CTAs
- [ ] No references to ColorLib in app code (provenance only in spec + TEMPLATES.md + PR)
- [ ] Footer links to Component Dock
- [ ] Placeholder images use `https://picsum.photos/seed/cartden-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck, lint, and build pass
