# Template: ClosetCraft (Fashion House)

## Purpose

Recreation of the ColorLib **Shionhouse** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/shionhouse/
- **Preview:** https://preview.colorlib.com/theme/shionhouse/
- **New name:** `closetcraft` (app folder `apps/closetcraft`, package `@free-react-templates/closetcraft`)
- **Surge target:** `closetcraft.free.componentdock.com`
- **Category:** Fashion / Clothing House

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Accent / purple | `#9F78FF` | Buttons, borders, highlights, preloader |
| Dark navy | `#140C40` | Headings color |
| Body text | `#646D77` | Paragraph text |
| Heading font | `"Cinzel", serif` | h1–h6, section titles |
| Body font | `"Poppins", sans-serif` | Body text, nav, buttons |
| Button bg | `#9F78FF` | Primary CTA buttons |
| Button radius | `4px` | Slightly rounded |
| Border button | `#9F78FF` border, transparent bg | Secondary CTA |
| Hero text | `#ffffff` | White text on dark overlay |

## Section structure (page order)

1. **Nav** — Logo left, centered nav links (Home, Shop, Pages dropdown, About, Blog, Contact), search + cart icons right. Sticky on scroll.
2. **Hero** — 3-slide carousel, background images with dark overlay. Each slide: large heading "fashion changing always" (white, Cinzel serif, 120px), "Shop Now" purple button.
3. **PopularItems** — "new arrival" section title, 4 product cards in a row. Each: product image, hover overlay with icons, title (e.g. "Knitted Jumper"), price.
4. **Collection** — "collection houses our first-ever" heading, background image with dark overlay, description text, "Shop Now" button.
5. **Footer** — Logo, about text, quick links, contact info, social icons (Pinterest, Twitter, Facebook), copyright with Component Dock link.

## Gherkin scenarios

### Nav

```gherkin
Feature: ClosetCraft Navigation

  Scenario: Nav displays logo and links
    Given the user is on the ClosetCraft page
    Then the logo is visible
    And navigation links are visible: Home, Shop, Pages, About, Blog, Contact
    And search and cart icons are on the right
    And the header is sticky on scroll

  Scenario: Mobile menu opens offcanvas
    Given the user is on a mobile viewport
    When the hamburger menu is clicked
    Then an offcanvas menu slides in with navigation links
```

### Hero

```gherkin
Feature: ClosetCraft Hero

  Scenario: Hero carousel displays slides
    Given the user is on the ClosetCraft page
    Then a full-width hero carousel is visible with 3 slides
    And each slide has a dark overlay on background image
    And each slide shows the heading "fashion changing always" in white serif font
    And each slide contains a "Shop Now" purple button
```

### PopularItems

```gherkin
Feature: ClosetCraft Popular Items

  Scenario: New arrival section displays products
    Given the user scrolls to the popular items section
    Then a "new arrival" section title is displayed
    And 4 product cards are shown in a row
    And each card has an image with hover overlay
    And each card shows a product title and price
```

### Collection

```gherkin
Feature: ClosetCraft Collection

  Scenario: Collection section renders
    Given the user scrolls to the collection section
    Then a "collection houses our first-ever" heading is displayed
    And a background image with dark overlay is shown
    And description text is present
    And a "Shop Now" purple button is available
```

### Footer

```gherkin
Feature: ClosetCraft Footer

  Scenario: Footer displays widgets
    Given the user scrolls to the footer
    Then the footer has a logo and about text
    And quick links are displayed
    And contact info is shown
    And social icons (Pinterest, Twitter, Facebook) are present
    And a copyright bar is at the bottom

  Scenario: Footer links to Component Dock
    Given the footer is rendered
    Then the copyright includes a link to "Component Dock" (https://www.componentdock.com/)
    And no ColorLib references appear in the app code
```

## Verification checklist

- [ ] All 5 sections present in correct order
- [ ] Design tokens match: #9F78FF accent, Cinzel headings, Poppins body
- [ ] Hero carousel with 3 slides, dark overlay, white serif heading
- [ ] 4 product cards in new arrival section
- [ ] Collection section with dark overlay background
- [ ] Footer with logo, links, social, copyright
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
