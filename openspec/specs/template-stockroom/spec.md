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

| Token              | Value                          | Source                              |
| ------------------ | ------------------------------ | ----------------------------------- |
| Brand primary      | `#fbb710` (golden yellow)      | `.amado-btn` bg, accent elements    |
| Brand hover/active | `#131212` (near-black)         | `.amado-btn.active`, hover states   |
| Body text dark     | `#131212` (near-black)         | links, nav text                     |
| Headings color     | `#242424`                      | h2-h6                               |
| Body text muted    | `#6d6d6d`                      | paragraphs, descriptions            |
| Newsletter bg      | `#3c3c3c` (dark gray)          | `.newsletter-area`                  |
| Newsletter text    | `#b3b1b1` (light gray)         | `.newsletter-text p`                |
| Footer bg          | `#252525` (very dark gray)     | `.footer_area`                      |
| Footer text        | `rgba(255,255,255,0.4)`        | `.copywrite`, footer links          |
| Search wrapper bg  | `#f5f7fa` (very light gray)    | `.search-wrapper`                   |
| White              | `#FFFFFF`                      | header bg, input bg                 |
| Yellow accent line | `#fbb710`                      | `.hover-content .line` (80px × 3px) |
| Font heading       | `'helveticaneuebold'`          | headings, button text               |
| Font body          | `'helveticaneuemedium'`        | body text, nav                      |
| Button radius      | `0` (rectangular, no rounding) | `.amado-btn`                        |
| Button height      | `55px`                         | `.amado-btn`                        |
| Button min-width   | `160px`                        | `.amado-btn`                        |
| Product grid       | 33.33% per item (3-col)        | `.single-products-catagory`         |
| Hover overlay      | dark semi-transparent on image | `a::after` pseudo-element           |
| Hover content pos  | `top: 40px; left: 40px`        | `.hover-content`                    |

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

## Requirements

### Requirement: Sidebar Navigation

The sidebar SHALL display logo, navigation links, CTA buttons, cart/favourite/search links, and social icons.

#### Scenario: Sidebar displays logo and navigation

- **WHEN** the user loads the page
- **THEN** the sidebar shows the logo
- **AND** the navigation links are visible: "Home", "Shop", "Product", "Cart", "Checkout"
- **AND** two CTA buttons are visible: "%Discount%" and "New this week"

#### Scenario: Sidebar shows cart and social links

- **WHEN** the sidebar is visible
- **THEN** a "Cart (0)" link is displayed
- **AND** a "Favourite" link is displayed
- **AND** a "Search" link is displayed
- **AND** social icons are visible: Pinterest, Instagram, Facebook, Twitter

### Requirement: Product Categories Grid

The product grid SHALL display 9 product category cards in a 3-column layout with hover overlay effects.

#### Scenario: Nine product categories are displayed in a grid

- **WHEN** the user views the main content area
- **THEN** there are 9 product category cards in a 3-column grid
- **AND** each card has a background image
- **AND** each card shows a price and product name

#### Scenario: Product cards are clickable links

- **WHEN** a product category card is visible
- **THEN** the entire card is a clickable link to the shop page

### Requirement: Newsletter Section

The newsletter section SHALL display a heading with yellow accent, description, and email subscription form.

#### Scenario: Newsletter displays heading and form

- **WHEN** the user scrolls to the newsletter section
- **THEN** the heading reads "Subscribe for a 25% Discount"
- **AND** the words "25% Discount" are highlighted in yellow
- **AND** an email input field is present
- **AND** a "Subscribe" button is visible with yellow background

#### Scenario: Newsletter has dark background

- **WHEN** the newsletter section is visible
- **THEN** the background color is dark gray (#3c3c3c)
- **AND** the heading text is white

### Requirement: Footer

The footer SHALL display logo, copyright with Component Dock link, and navigation links.

#### Scenario: Footer displays logo and copyright

- **WHEN** the user scrolls to the footer
- **THEN** the footer has a very dark background (#252525)
- **AND** the logo is displayed
- **AND** the copyright text is visible with a Component Dock link

#### Scenario: Footer shows navigation links

- **WHEN** the footer is visible
- **THEN** navigation links are shown: "Home", "Shop", "Product", "Cart", "Checkout"
- **AND** the links are right-aligned

### Requirement: Search Overlay

The search overlay SHALL open as a full-screen overlay with search input and close button.

#### Scenario: Search overlay opens and closes

- **WHEN** the user clicks the Search link in the sidebar
- **THEN** a full-screen search overlay opens
- **AND** a search input is displayed
- **WHEN** the user clicks the close button
- **THEN** the overlay is dismissed

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
