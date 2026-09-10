# Template: OrderCraft (4-Step Order Wizard)

## Purpose

Recreation of ColorLib Wizard 5 — a free 4-step order template designed for
eCommerce checkout flows. The original is a Bootstrap-based multi-step form
wizard with a split 50/50 layout: a decorative lifestyle image on the left and
a white form card with step-by-step billing details on the right.

- **Source template**: [Colorlib Wizard 5](https://colorlib.com/wp/template/colorlib-wizard-5/)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-5/` (unreachable at prep time — 404; fallback to screenshot + ColorLib page metadata)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg`
- **Category**: Bootstrap Wizard Templates — 4-step order/checkout wizard
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

> Extracted from the screenshot and ColorLib page metadata (preview unreachable).

| Token | Value | Notes |
|-------|-------|-------|
| Background (page) | `#e8d5c0` (warm beige/sand) | Soft muted warm background filling the entire page |
| Background (form card) | `#ffffff` | White elevated card with drop shadow on right side |
| Text primary (heading) | `#26282b` (dark charcoal) | Step title "Billing Details" |
| Text secondary (labels) | `#4b4b4b` (medium gray) | Form field labels |
| Text placeholder | `#999999` (light gray) | Input placeholder text |
| Accent / CTA (button) | `#e67e22` (warm orange) | "Next →" button, active progress bar segment |
| Accent hover | `#d35400` (darker orange) | Button hover state |
| Progress bar inactive | `#e0e0e0` (light gray) | Inactive segments of the 4-step progress bar |
| Progress bar active | `#e67e22` (warm orange) | Filled/active segment matching the CTA |
| Input border | `#dddddd` (subtle gray) | Thin rounded border on all form inputs |
| Input background | `#ffffff` | White input fields |
| Input focus ring | `#e67e22` (warm orange) | Focus border color matching accent |
| Font family | `"Poppins", sans-serif` | Common Colorlib wizard font; clean geometric sans |
| Font weight (heading) | `600` (semibold) | Step title weight |
| Font weight (labels) | `500` (medium) | Form field labels |
| Font weight (button) | `500` (medium) | CTA button text |
| Font size (heading) | `24px` | Step title size |
| Font size (labels) | `14px` | Form field labels |
| Font size (button) | `16px` | Button text |
| Border radius (form card) | `12px` | Rounded card corners |
| Border radius (inputs) | `6px` | Slightly rounded input fields |
| Border radius (button) | `6px` | Rounded button corners |
| Card shadow | `0 8px 32px rgba(0, 0, 0, 0.08)` | Subtle elevation for form card |
| Layout | 50/50 split | Left: decorative image; Right: form card |
| Left image | `https://picsum.photos/seed/ordercraft-hero/800/1000` | Placeholder for the 3D room scene |
| Step indicator | Horizontal segmented progress bar | 4 segments; active = orange, inactive = gray |
| Navigation button | "Next →" text with right arrow | Bottom-right of form card |
| Required field marker | `*` (asterisk) | After field labels that are required |
| Transitions | Smooth slide/fade between steps | Step content transitions |

## Gherkin requirements

### Feature: OrderCraft — 4-Step Order Wizard

  Scenario: Page loads with step 1 active
    Given the user opens the OrderCraft page
    Then the page should display a split layout with a decorative image on the left and a form card on the right
    And the "Billing Details" step should be visible and active
    And the progress bar should show 4 segments with the first segment highlighted
    And the remaining 3 progress segments should be inactive (gray)
    And the decorative image should occupy the left 50% of the viewport

  Scenario: Step 1 — Billing Details fields
    Given the user is on step 1 "Billing Details"
    Then the form should contain a "First Name" text input (required)
    And the form should contain a "Last Name" text input (required)
    And the form should contain a "Company Name" text input (optional)
    And the form should contain a "Country" dropdown select (required)
    And the form should contain an "Address" text input with placeholder "Street address" (required)
    And the form should contain an "Address line 2" text input with placeholder "Apartment, suite, unit etc. (optional)"
    And the form should contain a "Town / City" text input (required)
    And a "Next →" button should be visible at the bottom-right of the form card

  Scenario: Required field validation on step 1
    Given the user is on step 1 with empty required fields
    When the user clicks the "Next →" button
    Then required fields should show validation errors
    And the user should not advance to step 2

  Scenario: Navigate to step 2
    Given the user is on step 1 with all required fields filled
    When the user clicks the "Next →" button
    Then the "Shipping Details" step should become active
    And the "Billing Details" step should show as completed
    And the progress bar should show 2 segments highlighted
    And the form should display shipping-related fields

  Scenario: Step 2 — Shipping Details fields
    Given the user is on step 2 "Shipping Details"
    Then the form should contain shipping address fields
    And a "Next →" button should be visible

  Scenario: Navigate to step 3
    Given the user is on step 2 with valid shipping information
    When the user clicks the "Next →" button
    Then the "Order Summary" step should become active
    And the progress bar should show 3 segments highlighted

  Scenario: Step 3 — Order Summary
    Given the user is on step 3 "Order Summary"
    Then the form should display an order summary with line items
    And the form should show subtotal and total amounts
    And a "Next →" button should be visible

  Scenario: Navigate to step 4
    Given the user is on step 3 reviewing the order summary
    When the user clicks the "Next →" button
    Then the "Payment" step should become active
    And the progress bar should show all 4 segments highlighted

  Scenario: Step 4 — Payment fields
    Given the user is on step 4 "Payment"
    Then the form should contain a "Card Number" input field
    And the form should contain a "Cardholder Name" input field
    And the form should contain an "Expiry Date" input field
    And the form should contain a "CVV" input field
    And a "Place Order" button should be visible

  Scenario: Place order submission
    Given the user is on step 4 with valid payment information
    When the user clicks the "Place Order" button
    Then a confirmation message should appear
    And the order should be marked as complete

  Scenario: Back navigation between steps
    Given the user is on step 2
    When the user clicks a back button or the step 1 indicator
    Then the "Billing Details" step should become active again
    And the previously entered data should be preserved
    And the progress bar should revert to 1 segment highlighted

  Scenario: Responsive layout on mobile
    Given the user opens the OrderCraft page on a mobile viewport
    Then the split layout should stack vertically
    And the decorative image should appear above the form card
    And all form fields should be full-width

  Scenario: Footer branding
    Given the user scrolls to the bottom of the page
    Then a footer should be visible with a link to "https://www.componentdock.com/"
    And the link should read "Component Dock" or similar branding

## Verification checklist

- [ ] Page renders with 50/50 split layout (image left, form card right)
- [ ] Progress bar shows 4 segments with correct active/inactive styling
- [ ] Step 1 displays all 7 billing fields (First Name, Last Name, Company Name, Country, Address, Address 2, Town/City)
- [ ] Required fields show asterisk markers
- [ ] "Next →" button advances to next step with correct progress update
- [ ] Each step displays appropriate form fields
- [ ] Step transitions are smooth (slide/fade)
- [ ] Back navigation preserves entered data
- [ ] Responsive: layout stacks vertically on mobile
- [ ] Footer links to https://www.componentdock.com/
- [ ] Brand tokens (warm beige bg, warm orange accent, Poppins font) match original
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] 100% test coverage on all components
