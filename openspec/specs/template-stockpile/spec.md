# Template: Stockpile (Product Showcase E-Commerce)

## Purpose

Recreation of the ColorLib **Product** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/product/
- **Preview:** https://preview.colorlib.com/theme/product/
- **New name:** `stockpile` (app folder `apps/stockpile`, package `@free-react-templates/stockpile`)
- **Surge target:** `stockpile.free.componentdock.com`
- **Category:** E-Commerce / Product Showcase

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Accent / teal | `#0fb78d` | Links, primary button, text-primary |
| Black | `#000000` | Headings, btn-black, outline borders |
| Body text | `#333` | Paragraph text |
| Body bg | `#ffffff` | Page background |
| Heading font | `"Libre Baskerville", serif` | h1–h4 headings |
| Body font | `"Muli", sans-serif` | Body text, nav, buttons |
| Button radius | `0` (square) | All buttons are square/rectangular |
| Button primary | bg `#0fb78d`, text `#fff` | Primary CTA |
| Button black | bg `#000`, text `#fff` | Secondary CTA |
| Button outline | transparent bg, `#000` border | "Explore now" style |

## Section structure (page order)

1. **Nav** — Centered nav with links: New, Shop, Pages dropdown, Blog, Contact. Right: search icon, person icon, cart icon with badge. Mobile offcanvas menu.
2. **Hero** — Full-width carousel, dark background image, centered text: "The New Way To Display Product" heading (white, serif), description paragraph, "Explore now" outline button.
3. **Features** — 3 feature icons in a row: "Worldwide Delivery" (truck icon), "Secure Payments" (shield icon), "Simple Returns" (returns icon).
4. **Products (New Arrivals)** — Product card grid (3 columns, 2 rows = 6 items). Each: product image, hover overlay with cart icon, New/Sale badge, product title, price. Products: Kiko Linen Slip Dress Brown, Sleeve Dress White, Hodina Watch, Triangle Low White-Black, Kid Dress White, Lady Shoes Brown.
5. **WeekDeal** — "Week Deal" section title, featured product with large image and countdown or deal info.
6. **PopularItems** — "Popular Items" section title, 5 product cards in a row.
7. **Newsletter** — Subscribe form: email input + "Subscribe" button (black bg).
8. **Footer** — 4 widget columns: Help (Contact us, Account, Shipping, Returns, FAQ), About, social icons, copyright with "Component Dock" link.

## Gherkin scenarios

### Nav

```gherkin
Feature: Stockpile Navigation

  Scenario: Nav displays links and icons
    Given the user is on the Stockpile page
    Then navigation links are visible: New, Shop, Pages, Blog, Contact
    And search, person, and cart icons are on the right
    And a cart badge shows item count

  Scenario: Mobile menu opens offcanvas
    Given the user is on a mobile viewport
    When the hamburger menu is clicked
    Then an offcanvas menu slides in with navigation links
```

### Hero

```gherkin
Feature: Stockpile Hero

  Scenario: Hero displays carousel
    Given the user is on the Stockpile page
    Then a full-width hero carousel is visible
    And the heading "The New Way To Display Product" is shown in white serif font
    And a description paragraph is below the heading
    And an "Explore now" outline button is present
```

### Features

```gherkin
Feature: Stockpile Features

  Scenario: Features section shows 3 items
    Given the user scrolls to the features area
    Then 3 feature items are displayed in a row
    And each has an icon, heading, and description
    And the items are: "Worldwide Delivery", "Secure Payments", "Simple Returns"
```

### Products

```gherkin
Feature: Stockpile Products

  Scenario: Product grid displays items
    Given the user scrolls to the new arrivals section
    Then 6 product cards are shown in a grid
    And each card has an image with hover overlay
    And each card shows a product title and price
    And some cards show "New" or "Sale" badges

  Scenario: Product card has hover interaction
    Given a product card is visible
    When the user hovers over the product image
    Then a cart icon overlay appears
```

### WeekDeal

```gherkin
Feature: Stockpile Week Deal

  Scenario: Week Deal section renders
    Given the user scrolls to the week deal section
    Then a "Week Deal" heading is displayed
    And a featured product is shown with details
```

### PopularItems

```gherkin
Feature: Stockpile Popular Items

  Scenario: Popular items section renders
    Given the user scrolls to the popular items section
    Then a "Popular Items" heading is displayed
    And 5 product cards are shown in a row
```

### Newsletter

```gherkin
Feature: Stockpile Newsletter

  Scenario: Newsletter form displays
    Given the user scrolls to the newsletter section
    Then an email input field is present
    And a "Subscribe" button with black background is present
```

### Footer

```gherkin
Feature: Stockpile Footer

  Scenario: Footer displays widgets
    Given the user scrolls to the footer
    Then 4 widget columns are displayed (Help, About, social, copyright)
    And a copyright bar is at the bottom

  Scenario: Footer links to Component Dock
    Given the footer is rendered
    Then the copyright includes a link to "Component Dock" (https://www.componentdock.com/)
    And no ColorLib references appear in the app code
```

## Verification checklist

- [ ] All 8 sections present in correct order
- [ ] Design tokens match: #0fb78d accent, Libre Baskerville headings, Muli body
- [ ] Square/rectangular buttons (border-radius: 0)
- [ ] Hero carousel with dark bg, white serif heading, outline CTA
- [ ] 3 feature icons row
- [ ] 6 product cards with badges, hover overlay
- [ ] Week Deal section
- [ ] Popular Items section (5 cards)
- [ ] Newsletter subscribe form
- [ ] Footer with 4 columns and Component Dock link
- [ ] No ColorLib references in app code
