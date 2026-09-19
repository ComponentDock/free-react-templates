# Template: Aurelius (E-Commerce)

## Purpose

Recreation of the ColorLib "Fashi" e-commerce template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source template:** [Fashi](https://colorlib.com/wp/template/fashi/)
- **Preview URL:** https://preview.colorlib.com/theme/fashi/
- **New name:** `aurelius` (apps/aurelius)
- **Category:** E-Commerce

## Design Tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Body text | `#111111` | Near-black |
| Secondary text | `#636363` | Gray for descriptions, meta |
| Heading color | `#252525` | Dark gray headings |
| Primary | `#e7ab3c` | Gold/amber. Buttons, accents, highlights |
| Button hover | `#000000` | Black on hover |
| Black | `#000000` | Solid black elements |
| White | `#ffffff` | Card backgrounds, button text |
| Font family | `"Muli", sans-serif` | All text (body + headings) |
| Button radius | `60px` | Pill-shaped buttons |
| Body font weight | 400 | Regular body |
| Heading font weight | 700 | Bold headings |

## Visual Design Notes

From the ColorLib preview DOM analysis:

- **Two-tier header:** Top bar with email + phone (left), login panel + language selector + social icons (right). Main header with logo, advanced search bar (category button + text input + search icon), heart icon with count, cart icon with hover dropdown showing 2 products + total + View Card/Checkout buttons, cart price display.
- **Category navigation** below header with "Departments" dropdown + horizontal nav links.
- **Hero slider** — two slides with background images: "Black friday" headline, "60% Discount" subtext, "Shop Now" CTA button. Gold accent on headline.
- **Category cards** — 3 cards (Men's, Women's, Kid's) with background images and overlay text.
- **Women's Products** — product carousel with product cards showing image, name, price.
- **Deal of the Week** — section with countdown timer (Days, Hours, Minutes, Seconds) + product image + "Shop Now" button.
- **Men's Products** — product carousel similar to Women's.
- **Blog section** — "From The Blog" with 3 article cards: image, title, date, excerpt, "Read More" link.
- **Footer** — logo + address/phone/email + social icons (Facebook, Instagram, Twitter, Pinterest), Information links, My Account links, Newsletter signup (email + Subscribe button). Copyright bar with payment method logos.

## Gherkin Requirements

```gherkin
Feature: Aurelius E-Commerce Template

  Background:
    Given the user visits the Aurelius homepage

  # ── Top Header Bar ──

  Scenario: Top bar shows contact and social info
    Then the top header should display email and phone number
    And a login link, language selector, and social icons (Facebook, Twitter, LinkedIn, Pinterest)

  # ── Main Header ──

  Scenario: Main header has logo and search
    Then the header should display the site logo
    And an advanced search bar with "All Categories" button and text input

  Scenario: Header shows wishlist and cart
    Then the header should show a heart icon with count badge
    And a cart icon with count badge and hover dropdown showing products
    And a cart total price display

  # ── Category Navigation ──

  Scenario: Category nav displays departments and links
    Then the nav bar should show a "Departments" dropdown
    And horizontal navigation links

  # ── Hero Slider ──

  Scenario: Hero slider shows promotional content
    Then the hero slider should display 2 slides
    And each slide should show a headline ("Black friday"), discount text, and "Shop Now" button

  # ── Category Cards ──

  Scenario: Category section shows 3 cards
    Then the category section should display 3 cards (Men's, Women's, Kid's)
    And each card should show a background image and category name

  # ── Women's Products ──

  Scenario: Women's section shows product carousel
    Then the "Women's" section should display product cards
    And each card should show an image, product name, and price

  # ── Deal of the Week ──

  Scenario: Deal section shows countdown and product
    Then the "Deal Of The Week" section should display a countdown timer
    And show Days, Hours, Minutes, Seconds
    And a product image with "Shop Now" button

  # ── Men's Products ──

  Scenario: Men's section shows product carousel
    Then the "Men's" section should display product cards

  # ── Blog Section ──

  Scenario: Blog section shows 3 articles
    Then the "From The Blog" section should display 3 article cards
    And each card should show an image, title, date, excerpt, and "Read More" link

  # ── Footer ──

  Scenario: Footer shows contact info and links
    Then the footer should display logo, address, phone, email
    And social icons: Facebook, Instagram, Twitter, Pinterest
    And Information links and My Account links

  Scenario: Footer newsletter
    Then the footer should show "Join Our Newsletter Now" heading
    And an email input + "Subscribe" button

  Scenario: Footer copyright
    Then the footer bottom should show copyright text, payment method logos, and a "Component Dock" link

  # ── Responsive ──

  Scenario: Mobile view collapses nav
    When the viewport width is less than 991px
    Then the category nav should be hidden
    And a mobile menu toggle should appear

  Scenario: Mobile view adjusts grids
    When the viewport width is less than 768px
    Then category cards should stack vertically
```

## Verification Checklist

- [ ] All sections render in correct order: Top Header → Main Header → Category Nav → Hero Slider → Category Cards → Women's Products → Deal of the Week → Men's Products → Blog → Footer
- [ ] Design tokens match: gold #e7ab3c, Muli font, 60px pill buttons
- [ ] Two-tier header with contact info + login + social icons
- [ ] Advanced search bar with category button + text input
- [ ] Wishlist heart + cart icon with hover dropdown
- [ ] Hero slider with 2 promotional slides
- [ ] 3 category cards (Men's, Women's, Kid's)
- [ ] Product carousels for Women's and Men's
- [ ] Deal of the Week with countdown timer
- [ ] Blog section with 3 article cards
- [ ] Footer with logo, contact, links, newsletter, payment logos
- [ ] Responsive: hamburger on mobile, grids collapse
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds
