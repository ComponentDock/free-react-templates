# Template: Pizzoria (Restaurant / Pizzeria)

## Purpose

Recreation of the ColorLib "Luigis" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `luigis`
- **Source URL:** https://colorlib.com/wp/template/luigis/
- **Preview URL:** https://preview.colorlib.com/theme/luigis/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/pizzoria`
- **Surge target:** `pizzoria.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`common/styles.css`) at https://preview.colorlib.com/theme/luigis/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#EF002E` | CTA buttons, accents, price highlights |
| Brand alt | `#ED0037` / `#F1002A` | Button hover states, secondary accents |
| Dark bg | `#191919` | Header overlay, footer, dark sections |
| White bg | `#FFFFFF` | Main content backgrounds |
| Light gray bg | `#F2F2F2` | Alt section backgrounds |
| Body text | `#333333` | Primary body copy |
| Muted text | `#666666` / `#777777` / `#888888` | Secondary text |
| White text | `#FFFFFF` | On dark backgrounds, nav links |
| Font display | `beyond_the_mountains` (handwritten/script) | Hero heading "Pizza & Pasta" |
| Font body | `Open Sans`, sans-serif | Body copy, nav, buttons, all other text |
| Button primary | `#EF002E` bg, white text, square (no radius) | "SEE TODAYS MENU", "ORDER: ..." nav CTA |
| Button outlined | `#EF002E` border, transparent bg | "Order Now" on product cards |
| Section divider | Triangle/zigzag (CSS triangle shapes) | Between hero→story, story→bestsellers, bestsellers→menu, menu→footer |
| Best sellers bg | Dark overlay on image (`bg-seller` class) | Best Sellers section |
| Ribbon | Red (`#EF002E`) / Green (`#1F8330`) / White | "OFFER", "SPECIALITY", "PLUS SIZE" badges |

## Section Structure (in page order)

### 1. Header / Navbar
- Logo (left): "Luigi's Family Pizzeria" brand mark (replace with "Pizzoria" text/logo)
- Phone CTA button (right): "ORDER: +34 685 778 8892" — red filled button
- Hamburger menu icon (mobile toggle)
- Navigation links: HOME, ABOUT US, SERVICES, NEWS, CONTACT
- Fixed/sticky header with dark background

### 2. Hero Section
- Full-width background image (dark moody pizza photography)
- Centered text: subtitle "BEST IN TOWN" (small caps, white)
- Heading: "Pizza & Pasta" in handwritten/display font (`beyond_the_mountains`)
- CTA button: "SEE TODAYS MENU" — red filled button
- Triangle/zigzag divider at bottom

### 3. Our Story
- White background, two-column layout
- Heading logo icon (tomato/salad decorative image) + "Our Story" h2
- Two paragraphs of text side by side (col-md-6 each)
- Triangle dividers on left and right sides (decorative parallax images)

### 4. Best Sellers
- Dark background section with image overlay (`bg-seller`)
- Triangle dividers top and bottom
- Heading: decorative icon + "Best Sellers"
- 8 product cards in a 4-column grid (col-lg-3)
  - Each card: 200x200 circular food image, item name, price (red), "Order Now" outlined button
  - Some cards have ribbon badges: "OFFER" (red), "SPECIALITY" (green), "PLUS SIZE" (white)
- CTA button at bottom: "SEE TODAYS MENU"

### 5. Our Menu
- White background
- Heading: decorative icon + "Our Menu"
- Tab filter bar: ALL, PIZZA, PASTA, SALADS, DESERTS (underlined active tab in red)
- 2-column grid of menu items
  - Each item: 120x120 food image (left) + item name, price (right-aligned red), description
  - Items filter by category tab
- CTA button at bottom: "SEE TODAYS MENU"

### 6. Footer
- Dark background with triangle/zigzag divider at top
- Logo (white version)
- Three info blocks: Address, Phone, Email (each with underlined label)
- Social icon row: Pinterest, Facebook, Twitter, Dribbble, LinkedIn, Vimeo
- Copyright line + "Made with ❤ by Colorlib" (replace with Component Dock attribution)
- Link to `https://www.componentdock.com/`

## Gherkin Requirements

```gherkin
Feature: Pizzoria — Restaurant / Pizzeria Template

  Background:
    Given the template is loaded at the root URL
    Then the page title contains "Pizzoria"
    And the Component Dock footer link is visible

  Scenario: Header renders correctly
    Given the user is on any viewport
    Then the logo "Pizzoria" is visible in the top-left
    And a phone order CTA button "ORDER:" is visible
    And navigation links "HOME", "ABOUT US", "SERVICES", "NEWS", "CONTACT" are visible
    And on mobile viewports a hamburger menu button is visible

  Scenario: Hero section displays with parallax background
    Given the hero section is in the viewport
    Then a full-width dark background image is visible
    And the subtitle "BEST IN TOWN" is displayed
    And the heading "Pizza & Pasta" is displayed in display font
    And a "SEE TODAYS MENU" red filled button is visible

  Scenario: Our Story section shows two columns
    Given the Our Story section is scrolled into view
    Then the heading "Our Story" is visible
    And two side-by-side text paragraphs are displayed
    And decorative triangle dividers frame the section

  Scenario: Best Sellers section shows product grid
    Given the Best Sellers section is scrolled into view
    Then the heading "Best Sellers" is visible
    And 8 product cards are displayed in a grid
    And each card shows a food image, item name, price, and "Order Now" button
    And some cards have ribbon badges ("OFFER", "SPECIALITY", or "PLUS SIZE")
    And a "SEE TODAYS MENU" button is at the bottom

  Scenario: Our Menu section filters by category
    Given the Our Menu section is scrolled into view
    Then the heading "Our Menu" is visible
    And tab buttons "ALL", "PIZZA", "PASTA", "SALADS", "DESERTS" are visible
    When the user clicks the "PIZZA" tab
    Then only pizza menu items are displayed
    And each item shows a food image, name, price, and description
    And a "SEE TODAYS MENU" button is at the bottom

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then the "Pizzoria" logo is displayed
    And address, phone, and email information are shown
    And social media icon links are visible (Pinterest, Facebook, Twitter, Dribbble, LinkedIn, Vimeo)
    And a link to "https://www.componentdock.com/" is present
    And no ColorLib attribution is visible

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And product cards stack vertically
    And menu items stack vertically
    And the footer remains accessible

  Scenario: Triangle/zigzag dividers appear between sections
    Given the page is scrolled through all sections
    Then triangle or zigzag dividers separate hero from story
    And dividers separate story from best sellers
    And dividers separate best sellers from menu
    And dividers separate menu from footer
```

## Verification Checklist

- [ ] All 6 sections render in correct page order
- [ ] Brand color `#EF002E` used for buttons, price text, and accents
- [ ] Display font (Google Font "Beyond the Mountains" or similar script) loaded for hero heading
- [ ] Open Sans font loaded for body text
- [ ] Hero section has dark moody background image with centered text overlay
- [ ] Triangle/zigzag dividers between sections (CSS clip-path or SVG)
- [ ] Best Sellers grid shows 8 product cards with images, names, prices, buttons
- [ ] Ribbon badges render on designated cards (OFFER red, SPECIALITY green, PLUS SIZE white)
- [ ] Our Menu tab filter works (ALL/PIZZA/PASTA/SALADS/DESERTS)
- [ ] Menu items display image + name + price + description in 2-column layout
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked grids
- [ ] Red filled CTA buttons (no border-radius) match original design
- [ ] Placeholder images via `picsum.photos/seed/pizzoria-<n>/...`
