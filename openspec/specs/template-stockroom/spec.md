# Template: Stockroom (E-Commerce / Furniture)

## Purpose

Recreation of ColorLib "Amado" — a furniture e-commerce landing page with
a sidebar navigation, product category grid with hover effects, newsletter
section, and a minimal footer.

- **Source**: [ColorLib Amado](https://colorlib.com/wp/template/amado/)
- **Preview**: https://preview.colorlib.com/theme/amado/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/amado-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `stockroom` (apps/stockroom, `@free-react-templates/stockroom`)

## Design tokens (extracted from preview CSS)

| Token                | Value                                  | Source                                 |
| -------------------- | -------------------------------------- | -------------------------------------- |
| Brand primary        | `#fbb710` (golden yellow)              | `.amado-btn` bg, accent elements       |
| Brand hover/active   | `#131212` (near-black)                 | `.amado-btn.active`, hover states      |
| Body text dark       | `#131212` (near-black)                 | links, nav text                        |
| Headings color       | `#242424`                              | h2-h6                                  |
| Body text muted      | `#6d6d6d`                              | paragraphs, descriptions               |
| Newsletter bg        | `#3c3c3c` (dark gray)                  | `.newsletter-area`                     |
| Newsletter text      | `#b3b1b1` (light gray)                 | `.newsletter-text p`                   |
| Footer bg            | `#252525` (very dark gray)             | `.footer_area`                         |
| Footer text          | `rgba(255,255,255,0.4)`               | `.copywrite`, footer links             |
| Search wrapper bg    | `#f5f7fa` (very light gray)            | `.search-wrapper`                      |
| White                | `#FFFFFF`                              | header bg, input bg                    |
| Yellow accent line   | `#fbb710`                              | `.hover-content .line` (80px × 3px)    |
| Font heading         | `'helveticaneuebold'`                  | headings, button text                  |
| Font body            | `'helveticaneuemedium'`                | body text, nav                         |
| Button radius        | `0` (rectangular, no rounding)         | `.amado-btn`                           |
| Button height        | `55px`                                 | `.amado-btn`                           |
| Button min-width     | `160px`                                | `.amado-btn`                           |
| Product grid         | 33.33% per item (3-col)                | `.single-products-catagory`            |
| Hover overlay        | dark semi-transparent on image         | `a::after` pseudo-element              |
| Hover content pos    | `top: 40px; left: 40px`               | `.hover-content`                       |

## Sections (in order, from preview DOM)

1. **Search Overlay** — Full-screen search overlay (hidden by default).
   Light gray bg (`#f5f7fa`), centered search input with icon button.
   Close button (X icon, red → yellow on hover).
2. **Sidebar Header** — Left sidebar (fixed width ~300px), white bg.
   Close icon (X), logo image, nav links (Home, Shop, Product, Cart,
   Checkout), two CTA buttons ("%Discount%" and "New this week" in yellow),
   cart/favourite/search links, social icons (Pinterest, Instagram,
   Facebook, Twitter). Hamburger toggle for mobile.
3. **Product Categories** — Main content area (right of sidebar).
   3-column grid of product category cards (9 items total).
   Each: full-width background image, hover overlay (dark),
   hover content with yellow accent line + price "From $XXX" + product
   name (h4). Items: "Modern Chair", "Minimalistic Plant Pot",
   "Modern Chair", "Night Stand", "Plant Pot", "Small Table",
   "Metallic Chair", "Modern Rocking Chair", "Home Deco".
4. **Newsletter** — Dark gray bg (`#3c3c3c`). Two columns:
   left = heading "Subscribe for a 25% Discount" (25% in yellow) + paragraph;
   right = email input + "Subscribe" button (yellow bg, absolute positioned).
5. **Footer** — Very dark bg (`#252525`). Two columns:
   left = logo image + copyright text;
   right = nav links (Home, Shop, Product, Cart, Checkout) right-aligned.
   Copyright: "Component Dock" instead of Colorlib.

## Gherkin requirements

### Feature: Sidebar Navigation

```gherkin
Scenario: Sidebar displays logo and navigation
  Given the user loads the page
  Then the sidebar shows the logo image
  And the navigation links are visible: "Home", "Shop", "Product", "Cart", "Checkout"
  And two CTA buttons are visible: "%Discount%" and "New this week"

Scenario: Sidebar shows cart and social links
  Given the sidebar is visible
  Then a "Cart (0)" link is displayed
  And a "Favourite" link is displayed
  And a "Search" link is displayed
  And social icons are visible: Pinterest, Instagram, Facebook, Twitter
```

### Feature: Product Categories Grid

```gherkin
Scenario: Nine product categories are displayed in a grid
  Given the user views the main content area
  Then there are 9 product category cards in a 3-column grid
  And each card has a background image
  And each card shows a price and product name

Scenario: Product cards show hover overlay
  Given a product category card is visible
  When the user hovers over the card
  Then a dark overlay appears on the image
  And a yellow accent line (80px wide, 3px tall) is shown
  And the product name and price turn white

Scenario: Product cards are clickable
  Given a product category card is visible
  Then the entire card is a clickable link
  And clicking navigates to the shop page
```

### Feature: Newsletter Section

```gherkin
Scenario: Newsletter displays heading and form
  Given the user scrolls to the newsletter section
  Then the heading reads "Subscribe for a 25% Discount"
  And the words "25% Discount" are highlighted in yellow
  And an email input field is present
  And a "Subscribe" button is visible with yellow background

Scenario: Newsletter has dark background
  Given the newsletter section is visible
  Then the background color is dark gray (#3c3c3c)
  And the heading text is white
  And the paragraph text is light gray
```

### Feature: Footer

```gherkin
Scenario: Footer displays logo and copyright
  Given the user scrolls to the footer
  Then the footer has a very dark background (#252525)
  And a logo image is displayed
  And the copyright text is visible in light gray

Scenario: Footer shows navigation links
  Given the footer is visible
  Then navigation links are shown: "Home", "Shop", "Product", "Cart", "Checkout"
  And the links are right-aligned
  And the active link is highlighted in yellow
```

### Feature: Search Overlay

```gherkin
Scenario: Search overlay opens and closes
  Given the user clicks the Search link in the sidebar
  Then a full-screen search overlay opens
  And a search input is displayed
  And clicking the close button dismisses the overlay
```

## Verification checklist

- [ ] Sidebar: logo, nav links, CTA buttons, cart/fav/search, social icons
- [ ] Product grid: 9 cards in 3-col layout, images, hover overlay, prices
- [ ] Hover effects: dark overlay, yellow accent line, white text
- [ ] Newsletter: dark bg, heading with yellow accent, email input + subscribe
- [ ] Footer: dark bg, logo, copyright, nav links right-aligned
- [ ] Search overlay: opens on click, closes on X
- [ ] Responsive: sidebar collapses to hamburger on mobile
- [ ] Fonts: Helvetica Neue Bold (headings), Helvetica Neue Medium (body)
  → Use Inter or system font as substitute (no self-hosted fonts)
- [ ] Colors: `#fbb710` brand, `#131212` dark, `#3c3c3c` newsletter, `#252525` footer
- [ ] Buttons: rectangular (no radius), 55px height, 160px min-width
- [ ] No ColorLib references in app code
