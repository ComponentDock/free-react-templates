# Template: SilkThread (Men's Fashion E-Commerce)

## Purpose

Recreation of the ColorLib **Malefashion** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/malefashion/
- **Preview:** https://preview.colorlib.com/theme/malefashion/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/malefashion-free-template.jpg
- **New name:** `silkthread` (app folder `apps/silkthread`, package `@free-react-templates/silkthread`)
- **Surge target:** `silkthread.free.componentdock.com`
- **Category:** E-Commerce / Men's Fashion

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Accent / red | `#e53637` | Section subtitle span, hot deal sticker, sale label |
| Dark primary | `#111111` | Headings, footer background, primary button bg |
| Body text | `#3d3d3d` | Paragraph text |
| Headings | `#111111` | All h1–h6 default color |
| Categories bg | `#f3f2ee` | Light beige/cream background for categories section |
| Footer bg | `#111111` | Dark footer |
| Button primary | bg `#000000`, text `#fff` | Primary CTA buttons |
| Button radius | `60px` | Fully rounded pill buttons |
| Body font | `"Nunito Sans", sans-serif` | All text |
| Heading font | `"Nunito Sans", sans-serif` | All headings (same as body) |

## Section structure (page order)

1. **Header** — Top bar: "Free shipping, 30-day return or refund guarantee" left; Sign in, FAQs, USD currency selector right. Below: Logo left, nav center (Home, Shop, Pages dropdown, Blog, Contacts), search/heart/cart icons right. Offcanvas mobile menu.
2. **Hero** — Full-width carousel (2 slides), dark image background, centered text: "Summer Collection" subtitle, "Fall - Winter Collections 2030" heading, black "Shop now" button with arrow icon.
3. **Banner** — 3 category banner items in a row: "Clothing Collections 2030", "Accessories", "Shoes Spring 2030". Each: image + text overlay.
4. **Product** — Product cards grid (likely 4 or 8 items). Each: product image with hover effects (compare, wishlist, quick view icons), color swatches, title, price, labels ("New" / "Sale").
5. **Categories** — Light beige (#f3f2ee) background. Left side: large text "Clothings Hot / Shoe Collection / Accessories". Right side: hot deal with product image, sale sticker ("Sale Of $29.99"), countdown timer.
6. **Instagram** — 6 Instagram-style images in a 6-column grid (single row), with "@ Colorlib" or similar overlay text.
7. **Latest (Blog)** — Section title "Latest News", 2 blog post cards. Each: image, date, title, excerpt, read-more link.
8. **Footer** — Dark (#111111) background. About section with logo + description, 2 widget columns (contact info, newsletter or links), copyright bar with "Component Dock" link.

## Gherkin scenarios

### Header

```gherkin
Feature: SilkThread Header

  Scenario: Header displays top bar and navigation
    Given the user is on the SilkThread page
    Then a top bar shows "Free shipping, 30-day return or refund guarantee"
    And Sign in and FAQs links are visible
    And a USD currency selector is present
    And the logo is displayed
    And navigation links are visible: Home, Shop, Pages, Blog, Contacts
    And search, heart (wishlist), and cart icons are displayed

  Scenario: Mobile hamburger menu opens offcanvas
    Given the user is on a mobile viewport
    When the user clicks the hamburger menu icon
    Then the offcanvas menu slides in with navigation links and icons
```

### Hero

```gherkin
Feature: SilkThread Hero

  Scenario: Hero carousel displays slides
    Given the user is on the SilkThread page
    Then a full-width hero carousel is visible with 2 slides
    And each slide shows a dark background image
    And each slide contains the subtitle "Summer Collection"
    And each slide contains the heading "Fall - Winter Collections 2030"
    And each slide contains a "Shop now" black button with arrow icon

  Scenario: Hero CTA button is styled
    Given the hero section is rendered
    Then the "Shop now" button has a black (#000000) background
    And the button text is white
    And the button has rounded pill shape (border-radius: 60px)
```

### Banner

```gherkin
Feature: SilkThread Banner

  Scenario: Banner shows 3 category items
    Given the user scrolls to the banner section
    Then 3 banner items are displayed in a row
    And each banner has an image and a text heading
    And the headings are: "Clothing Collections 2030", "Accessories", "Shoes Spring 2030"
```

### Product

```gherkin
Feature: SilkThread Products

  Scenario: Product section displays items
    Given the user scrolls to the product section
    Then product cards are shown in a grid
    And each card has a product image
    And each card has hover overlay icons (compare, wishlist, quick view)
    And each card shows a product title and price
    And some cards show "New" or "Sale" labels
    And color swatch options are available on each card
```

### Categories

```gherkin
Feature: SilkThread Categories

  Scenario: Categories section with hot deal
    Given the user scrolls to the categories section
    Then the section has a light beige (#f3f2ee) background
    And the left side shows large text: "Clothings Hot / Shoe Collection / Accessories"
    And the right side shows a hot deal product image
    And a sale sticker displays "Sale Of $29.99"
    And a countdown timer is present
```

### Instagram

```gherkin
Feature: SilkThread Instagram

  Scenario: Instagram section displays image grid
    Given the user scrolls to the instagram section
    Then 6 images are displayed in a single row
    And each image fills approximately 16.67% width
    And an "@ Colorlib" or overlay text is present
```

### Latest / Blog

```gherkin
Feature: SilkThread Latest News

  Scenario: Blog section displays posts
    Given the user scrolls to the latest section
    Then a section title "Latest News" is displayed
    And 2 blog post cards are shown
    And each card has an image, date, title, and excerpt
```

### Footer

```gherkin
Feature: SilkThread Footer

  Scenario: Footer displays all widgets
    Given the user scrolls to the footer
    Then the footer has a dark (#111111) background
    And an about section with logo and description is present
    And widget columns with contact info or links are displayed
    And a copyright bar is at the bottom

  Scenario: Footer links to Component Dock
    Given the footer is rendered
    Then the copyright text includes a link to "Component Dock" (https://www.componentdock.com/)
    And no ColorLib attribution links appear in the app code
```

## Verification checklist

- [ ] All 8 sections present in correct order
- [ ] Design tokens match: #e53637 accent, #111111 dark, #f3f2ee categories bg, Nunito Sans font
- [ ] Pill-shaped buttons (border-radius: 60px)
- [ ] Header with top bar (shipping text, sign in, FAQs, currency)
- [ ] Hero carousel with 2 slides, dark bg, "Shop now" CTA
- [ ] 3 banner items with category headings
- [ ] Product cards with hover effects, color swatches, labels
- [ ] Categories section with hot deal and countdown timer
- [ ] Instagram 6-image grid
- [ ] Blog/Latest section with post cards
- [ ] Footer with dark bg and Component Dock link
- [ ] No ColorLib references in app code
