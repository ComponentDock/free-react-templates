# Template: Cantina (Restaurant Landing)

## Purpose

Recreation of ColorLib **Luigis** — a pizza/pasta restaurant landing page.

- **ColorLib source:** https://colorlib.com/wp/template/luigis/
- **Live preview:** https://preview.colorlib.com/theme/luigis/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** Cantina (avoids reusing "Luigis")
- **Package:** `@free-react-templates/cantina`

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| brand-red | `#EF0031` | Primary buttons, accents, hover states |
| green-accent | `#1F8330` | Secondary buttons (`.btn-primaryc.secondary`), speciality ribbon |
| white | `#FFFFFF` | Text on dark backgrounds, button text |
| black | `#111111` | Body text, dark backgrounds |
| gray-light | `#EEEEEE` | Subtle backgrounds, borders |
| heading-font | `Beyond the Mountains` (Google Fonts fallback: `Playfair Display`) | Display headings, hero text |
| body-font | `Open Sans` (Google Fonts) | Body copy, navigation, menu items |
| btn-border-radius | `2px` | Border-style buttons (`.btn-brdr-primary`) |
| btn-filled-radius | `3px` | Filled primary buttons (`.btn-primaryc`) |
| btn-height | `45px` (border) / `55px` (filled) | Consistent vertical rhythm |

## Section structure (from preview DOM)

1. **Navbar** — Logo text "Luigi's" (→ "Cantina"), phone number CTA, horizontal nav (Home, About Us, Services, News, Contact). Fixed/sticky, dark background.
2. **Hero** — Full-width background image (pizza/pasta hero shot), centered overlay text: subtitle "BEST IN TOWN", heading "Pizza & Pasta", CTA button "SEE TODAYS MENU". Bottom triangle-up decoration.
3. **Our Story** — Two-column layout. Left: text with heading "Our Story" + two paragraphs. Right: image. Side decorative image panels (bg-2, bg-3) visible on large screens only.
4. **Best Sellers** — Dark full-width section with parallax food background image. 4-column grid of product cards (8 total in 2 rows). Each card: circular product image, label ribbon (OFFER / SPECIALITY / PLUS SIZE), product name, price, "Order Now" border button. Triangle decorations at top and bottom.
5. **Our Menu** — Tab-filtered menu (ALL / PIZZA / PASTA / SALADS / DESERTS). Grid of menu items, each with: small product image, item name, price, short description. "SEE TODAYS MENU" CTA button at bottom.
6. **Footer** — Dark background. Address, phone, email in columns. Copyright line with "Made with Component Dock" link.

## Gherkin requirements

### Feature: Cantina Restaurant Landing Template

  Background:
    Given the Cantina template is loaded in a browser
    And the viewport is 1440px wide

  Scenario: Navbar displays logo and navigation links
    Then the navbar shows the "Cantina" logo text
    And the navbar shows a phone number CTA
    And the navbar contains links: Home, About Us, Services, News, Contact

  Scenario: Hero section displays restaurant headline
    Given the hero section is visible
    Then the hero shows the subtitle "BEST IN TOWN"
    And the hero shows the heading "Pizza & Pasta"
    And the hero shows a "SEE TODAYS MENU" button
    And the hero has a full-width background image

  Scenario: Our Story section shows two-column layout
    Given the Our Story section is visible
    Then the heading reads "Our Story"
    And there are two text paragraphs in the left column
    And the right column shows a food/restaurant image
    And decorative side panels are visible on large screens

  Scenario: Best Sellers section displays product cards on dark background
    Given the Best Sellers section is visible
    Then the section heading reads "Best Sellers"
    And the background is dark with a food image
    And there are 8 product cards in a 4-column grid
    And each card shows a circular product image
    And each card shows a ribbon label (OFFER, SPECIALITY, or PLUS SIZE)
    And each card shows the product name and price
    And each card has an "Order Now" border button

  Scenario: Our Menu section has tab-filtered menu items
    Given the Our Menu section is visible
    Then the heading reads "Our Menu"
    And there are tabs: ALL, PIZZA, PASTA, SALADS, DESERTS
    And the ALL tab is active by default
    And menu items show an image, name, price, and description
    And clicking a tab filters the visible items

  Scenario: Footer shows contact information
    Given the footer is visible
    Then it shows an address
    And it shows a phone number
    And it shows an email address
    And it shows a copyright line
    And it links to https://www.componentdock.com/

  Scenario: Responsive layout adapts to mobile
    Given the viewport is 375px wide
    Then the navbar collapses to a hamburger menu
    And the hero text is stacked vertically
    And product cards are single-column
    And menu items are stacked vertically
