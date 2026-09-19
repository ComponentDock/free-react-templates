# Template: Riviere (E-Commerce)

## Purpose

Recreation of the ColorLib "eStore" e-commerce template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source template:** [eStore](https://colorlib.com/wp/template/estore/)
- **Preview URL:** https://preview.colorlib.com/theme/estore/
- **New name:** `riviere` (apps/riviere)
- **Category:** E-Commerce

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Heading color | `#0b1c39` | Very dark navy for headings |
| Body text | `#506172` | Gray for body paragraphs |
| Secondary text | `#635c5c` | Warm gray for meta text |
| Primary | `#ff003c` | Bright red. Buttons border, hover fill, accents |
| Accent blue | `#2577fd` | Secondary accent for some elements |
| Light blue | `#00b1ff` | Tertiary accent |
| Footer bg | `#f7f7f7` | Light gray footer background |
| Heading font | `"Playfair Display", serif` | Headings and hero text |
| Body font | `"Poppins", sans-serif` | Body paragraphs, nav, general text |
| Accent font | `"Yellowtail", cursive` | Decorative accent text |
| Button style | Pill (25px radius) | Uppercase, 3px letter-spacing, Playfair Display font |
| Primary button | `#ff003c` bg, dark text on hover | `.boxed-btn` — white bg + red border → red fill on hover |

## Visual Design Notes

From the ColorLib preview DOM analysis:

- **Preloader** with logo centered (optional, skip in React SPA).
- **Two-tier header:** Top bar with flag icon + country/language selector + phone number, right side has account links (My Account, Wish List, Shopping, Cart, Checkout). Main header has logo, horizontal nav (Home, Categories, Latest dropdown, Blog dropdown, Pages dropdown, Contact), search input, heart icon, cart icon, "Sign in" button.
- **Hero slider** — large background image with person model, text overlay: "60% Discount" span, "Winter Collection" headline, subtext, "Shop Now" pill button. Uses bounce/fade animations.
- **Shop by Category** — 4 cards (Owmen's, Winter Cloth, Man's Cloth, + one more) with image backgrounds and text overlays.
- **Latest Products** — section with "Latest Products" heading, product cards.
- **Best Collection of This Month** — featured collection section with product grid and a man-shaped promotional image.
- **Shop Method** — 3-column feature strip: Free Shipping, Secure Payment, (Secure Payment repeated). Icons from themify.
- **Gallery** — horizontal row of 5 gallery images, full-width.
- **Footer** — 4 columns: logo + description, Quick Links, New Products, Support. Social icons (Twitter, Facebook, Behance, Globe). Copyright bar.

## Gherkin Requirements

```gherkin
Feature: Riviere E-Commerce Template

  Background:
    Given the user visits the Riviere homepage

  # ── Header ──

  Scenario: Top bar shows utility info
    Then the top bar should display a country flag and phone number
    And utility links: My Account, Wish List, Shopping, Cart, Checkout

  Scenario: Main header has logo, nav, and actions
    Then the header should display the site logo
    And navigation links: Home, Categories, Latest, Blog, Pages, Contact
    And a search input, wishlist icon, cart icon, and "Sign in" button

  Scenario: Header becomes sticky on scroll
    When the user scrolls past the header
    Then the main header should be fixed to the top

  # ── Hero Slider ──

  Scenario: Hero slider shows promotional content
    Then the hero slider should display a background image
    And text: "60% Discount", "Winter Collection", "Best Cloth Collection By 2020!"
    And a "Shop Now" pill button

  # ── Shop by Category ──

  Scenario: Category section shows category cards
    Then the "Shop by Category" section should display 4 category cards
    And each card should show a category name and background image

  # ── Latest Products ──

  Scenario: Latest products section displays products
    Then the "Latest Products" section should display product cards
    And each card should show an image, name, and price

  # ── Best Collection ──

  Scenario: Best collection shows featured products
    Then the "Best Collection of This Month" section should display products
    And include a promotional man-shaped image alongside

  # ── Shop Methods ──

  Scenario: Shop methods show 3 features
    Then the shop methods section should display 3 feature cards
    And each card should show an icon, title, and description

  # ── Gallery ──

  Scenario: Gallery shows 5 images
    Then the gallery section should display 5 images in a horizontal row

  # ── Footer ──

  Scenario: Footer shows 4 columns
    Then the footer should display 4 columns: About/Logo, Quick Links, New Products, Support

  Scenario: Footer has social links
    Then the footer should show social icons: Twitter, Facebook, Behance, Globe

  Scenario: Footer copyright
    Then the footer bottom should show copyright text and a "Component Dock" link

  # ── Responsive ──

  Scenario: Mobile view collapses nav
    When the viewport width is less than 991px
    Then the desktop navigation should be hidden
    And a mobile hamburger menu should appear

  Scenario: Mobile view adjusts grids
    When the viewport width is less than 768px
    Then category and product grids should stack to 2 columns
```

## Verification Checklist

- [ ] All sections render in correct order: Header → Hero Slider → Categories → Latest Products → Best Collection → Shop Methods → Gallery → Footer
- [ ] Design tokens match: primary #ff003c, heading #0b1c39, Playfair Display headings, Poppins body, 25px pill buttons
- [ ] Header: two-tier layout with top bar + main nav + search + icons + Sign in
- [ ] Hero: background image with text overlay and animated pill button
- [ ] Category section: 4 cards with background images and text
- [ ] Product sections with cards showing images, names, prices
- [ ] Shop methods: 3-column feature strip with icons
- [ ] Gallery: 5 images in a horizontal row
- [ ] Footer: 4-column layout with social icons and copyright
- [ ] Responsive: hamburger on mobile, grids collapse
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds
