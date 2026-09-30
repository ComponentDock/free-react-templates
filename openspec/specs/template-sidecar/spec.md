# Template: Sidecar (Sidebar — Shopping Bag)

## Purpose

Recreation of ColorLib **Sidebar V09** — a right-hand sliding shopping bag sidebar
with a blog-post grid as the main content area. The sidebar opens from the header
bag counter, showing product thumbnails, prices, remove links, subtotal, and a
Checkout button.

- **Source slug:** `colorlib-sidebar-v09`
- **Source URL:** https://colorlib.com/wp/template/colorlib-sidebar-v09/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-sidebar-v09/ (404 — preview unreachable; design captured from screenshot + source page metadata)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (from source screenshot + Colorlib page CSS)

| Token              | Value                                              |
| ------------------ | -------------------------------------------------- |
| Brand accent       | `#1a73e8` (Google Blue)                            |
| Body text          | `#26282b` (near-black)                             |
| Background         | `#ffffff` (white)                                  |
| Sidebar background | `#f5f5f5` (light gray)                             |
| Font family        | system sans-serif (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif`) |
| Button radius      | 4px (subtle rounding)                              |
| Link color         | `#1a73e8`                                          |
| Link hover         | `#1464cc` (darker blue)                            |
| Border color       | `#e0e0e0` (light gray dividers)                    |

## Visual design (from screenshot)

- **Layout:** Full-width page with a 2-column blog post grid on the left and a
  slide-in shopping bag sidebar on the right (~320px wide).
- **Main content:** 2-column grid of blog post cards, each with a circular
  author avatar, post title, and "Posted: Dec 17, 2019" date. Clean white
  background, minimal styling.
- **Header:** Thin top bar showing a bag icon with item count and total
  ("$150 / 3 items"), right-aligned.
- **Sidebar:** White background panel with:
  - Close button (X icon) top-left, "YOUR BAG" heading
  - Product list: thumbnail image, product name, price, "Remove" link per item
  - Divider line
  - Subtotal row with bold price and dark "Checkout" button
- **Overall aesthetic:** Minimal, clean, e-commerce sidebar pattern. No
  gradients, no heavy shadows — flat modern design.

## Gherkin requirements

```gherkin
Feature: Sidecar — Shopping Bag Sidebar

  Background:
    Given the Sidecar template is loaded
    And the page displays a blog post grid with 8 post cards in a 2-column layout

  Scenario: Header bag counter displays item count and total
    When I view the page header
    Then I see a bag icon with "$150 / 3 items" text
    And clicking the bag icon opens the shopping bag sidebar

  Scenario: Shopping bag sidebar opens from the right
    Given the sidebar is closed
    When I click the bag counter in the header
    Then the sidebar slides in from the right
    And the main content remains visible but may be partially obscured

  Scenario: Shopping bag sidebar shows product list
    Given the sidebar is open
    Then I see the heading "YOUR BAG"
    And I see 3 product items, each with:
      | element        | visible |
      | thumbnail      | yes     |
      | product name   | yes     |
      | price          | yes     |
      | Remove link    | yes     |

  Scenario: Shopping bag sidebar shows subtotal and checkout
    Given the sidebar is open
    Then I see a subtotal amount of "$150.00"
    And I see a "Checkout" button

  Scenario: Close button dismisses sidebar
    Given the sidebar is open
    When I click the close (X) button
    Then the sidebar slides out to the right
    And the main content is fully visible again

  Scenario: Remove link removes item from bag
    Given the sidebar is open
    When I click "Remove" on the first product
    Then the product is removed from the list
    And the subtotal updates to reflect the removal

  Scenario: Blog post card displays author info
    Given I view the main content grid
    Then each post card shows:
      | element    | visible |
      | avatar     | yes     |
      | title      | yes     |
      | date       | yes     |

  Scenario: Responsive layout adapts to mobile
    Given I view on a viewport width of 375px
    Then the blog post grid shows 1 column
    And the shopping bag sidebar overlays the full screen
```

## Verification checklist

- [ ] Header bag counter shows item count and total price
- [ ] Clicking bag icon opens the right-hand sidebar
- [ ] Sidebar displays "YOUR BAG" heading
- [ ] Each product shows thumbnail, name, price, and Remove link
- [ ] Subtotal and Checkout button are visible at the bottom of the sidebar
- [ ] Close button (X) dismisses the sidebar
- [ ] Remove link removes an item and updates the subtotal
- [ ] Blog post grid displays 2 columns on desktop, 1 on mobile
- [ ] Each blog card shows avatar, title, and date
- [ ] Sidebar slides in/out with smooth animation
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No references to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Public CNAME and homepage set correctly
