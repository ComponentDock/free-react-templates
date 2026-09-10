# Template: FormBoost (Form Wizard)

## Purpose

Recreation of ColorLib **Colorlib Wizard 5** as a React 19 + Vite + Tailwind 4 +
TypeScript template. A four-step order/wizard form with split layout (decorative
image left, form right), step progress indicators, and navigation buttons.

- **Source template:** [Colorlib Wizard 5](https://colorlib.com/wp/template/colorlib-wizard-5/)
- **Live demo (original):** https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Bootstrap Wizard / Multi-step Form

## Design tokens

Extracted from the original `css/style.css` and the live preview DOM.

| Token                 | Value             | Usage                                                                                         |
| --------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| Font family           | Poppins           | Body, headings, form labels (Regular/Medium/SemiBold via Google Fonts)                        |
| Font family (bold)    | Muli Bold         | Total price emphasis                                                                          |
| Brand accent          | `#f3d4b7`         | Active step indicator, "Next" button, input focus border                                      |
| Accent hover          | `#d9bda3`         | "Next" button hover state                                                                     |
| Text body             | `#666`            | Body text, form inputs, placeholders                                                          |
| Text heading          | `#333`            | Step titles, product names, "Next"/"Previous" labels                                          |
| Border                | `#e6e6e6`         | Input borders, inactive step indicators, item dividers, "Previous" button bg                  |
| Input focus border    | `#f3d4b7`         | Form input focus ring                                                                         |
| Placeholder           | `#999`            | Input placeholder text, optional field labels                                                 |
| Form panel bg         | `#ffffff`         | White card containing the form                                                                |
| Page background       | Full image        | Warm peach/beige background image (use solid warm peach `#f5e6d3` + subtle gradient fallback) |
| Tooltip bg            | `#f2f2f2`         | Payment method descriptions                                                                   |
| Radio dot             | `#666666`         | Selected radio indicator fill                                                                 |
| Checkbox bg           | `#ebebeb`         | Unchecked checkbox background                                                                 |
| Step indicator height | `7px`             | Progress bar segment height                                                                   |
| Step indicator radius | `3.5px`           | Pill shape (50% of height)                                                                    |
| Button height         | `51px`            | "Next" and "Previous" button height                                                           |
| Button width (next)   | `135px`           | "Next" button width                                                                           |
| Button width (prev)   | `167px`           | "Previous" button width                                                                       |
| Form panel padding    | `107px 75px 65px` | Top 107px, sides 75px, bottom 65px                                                            |
| Form panel min-height | `834px`           | Minimum height of the wizard card                                                             |

## Section structure (4 wizard steps)

### Step 1 — Billing Details

Progress indicator segment 1 active. Fields:

- First Name (text, required)
- Last Name (text, required)
- Company Name (text, optional)
- Country (select dropdown: Viet Nam, United States, United Kingdom; required)
- Address Line 1 (text, placeholder "Street address", required)
- Address Line 2 (text, placeholder "Apartment, suite, unit etc. (optional)", optional)
- Town / City (text, required)

Layout: First/Last Name side-by-side (50/50 flex row). All other fields full-width.

### Step 2 — Additional Information

Progress indicator segments 1–2 active. Fields:

- County (text, required)
- Postcode / Zip (text, required)
- Phone (text, required)
- Email Address (text, required)
- Order Notes (textarea, placeholder "Note about your order, eg. special notes for delivery.", optional, ~149px tall)
- Create an account? (checkbox, optional)

Layout: Phone/Email side-by-side (50/50 flex row). All others full-width.

### Step 3 — Your Order

Progress indicator segments 1–3 active. Shows:

- Product list: each item has thumbnail (100×90, bordered), product name (linked), quantity, price
  - Item 1: "Low Table/Stool" ×4, $29
  - Item 2: "Set of 3 Porcelain" ×2, $124
- Checkout summary:
  - Subtotal: $364
  - Shipping note: "there are no shipping methods available. please double check your address, or contact us if you need any help."
  - Total: $364

Items separated by `#e6e6e6` border-bottom.

### Step 4 — Billing Method

Progress indicator all segments active. Payment method radio group:

- **Direct bank transfer** (selected/checked by default) — tooltip: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
- **Check payments** — tooltip: "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."
- **Cash on delivery** — tooltip: "Pay with cash upon delivery."

Radio buttons: circular (50% border-radius), dot fill `#666666`, label text `#999`, active label `.active` shows tooltip.
Tooltips: `#f2f2f2` background, arrow pointing up at top.

## Navigation

- **Step progress bar**: 4 segments, each 20.16% width + 10px gap, 7px height, pill shape. Active/filled segments = `#f3d4b7`, inactive = `#e6e6e6`.
- **Step title**: rendered via CSS `::before` pseudo-element on the `<ul>` element; in React, render as a heading element instead.
- **Previous button**: left-aligned, `#e6e6e6` background, gray text, left arrow icon (Material Design Iconic Font → use `lucide-react` arrow-left icon), hidden on step 1 (first child hidden when disabled).
- **Next button**: right-aligned, `#f3d4b7` background, dark text `#333`, right arrow icon (`lucide-react` arrow-right icon). On hover: `#d9bda3` + icon wobble animation.
- **Last step**: "Next" button hidden (only "Previous" visible, right-aligned).

## Responsive breakpoints

| Breakpoint | Behavior                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| > 1500px   | Full layout, height auto                                                                                                                         |
| < 1500px   | Wrapper height 100vh, form min-height 829px                                                                                                      |
| < 1199px   | Reduced padding (60px sides), smaller margins (40px)                                                                                             |
| < 991px    | Image holder hidden, form centered at 60% width, no right margin                                                                                 |
| < 767px    | Stacked: image full-width on top, form below, auto height. Paired fields stack vertically. Padding reduced to 70px top, 20px sides, 40px bottom. |

## Gherkin scenarios

```gherkin
Feature: FormBoost — 4-step order wizard

  Background:
    Given the FormBoost page is loaded

  Scenario: Renders billing details as the first step
    Then step 1 "Billing Details" should be visible
    And the first step indicator segment should be active
    And the "Next" button should be visible
    And the "Previous" button should be hidden

  Scenario: Navigate forward through all steps
    When the user clicks "Next"
    Then step 2 "Additional Information" should be visible
    When the user clicks "Next"
    Then step 3 "Your Order" should be visible
    When the user clicks "Next"
    Then step 4 "Billing Method" should be visible
    And the "Next" button should be hidden

  Scenario: Navigate backward from step 2
    Given the user is on step 2
    When the user clicks "Previous"
    Then step 1 "Billing Details" should be visible

  Scenario: Step indicator updates on navigation
    Given the user is on step 3
    Then step indicator segments 1, 2, 3 should be active
    And step indicator segment 4 should be inactive

  Scenario: Payment method selection with tooltip
    Given the user is on step 4
    Then "Direct bank transfer" should be selected by default
    And the bank transfer tooltip should be visible
    When the user selects "Cash on delivery"
    Then the bank transfer tooltip should be hidden
    And the cash on delivery tooltip should be visible

  Scenario: Order summary displays correct data
    Given the user is on step 3
    Then product "Low Table/Stool" should show quantity ×4 and price $29
    And product "Set of 3 Porcelain" should show quantity ×2 and price $124
    And the subtotal should show $364
    And the total should show $364

  Scenario: Paired form fields display side by side
    Given the user is on step 1
    Then "First Name" and "Last Name" should be in a horizontal pair

  Scenario: Responsive — image hidden on small screens
    Given the viewport width is less than 991px
    Then the decorative image should be hidden
    And the form should be centered

  Scenario: Responsive — stacked layout on mobile
    Given the viewport width is less than 767px
    Then paired fields should stack vertically
    And the image should appear above the form
```

## Verification checklist

- [ ] 4 wizard steps render with correct section titles
- [ ] Step indicator segments activate/deactivate correctly per step
- [ ] "Next" navigates forward, "Previous" navigates backward
- [ ] "Previous" hidden on step 1, "Next" hidden on step 4
- [ ] Step 1: paired fields (First/Last Name) are horizontal
- [ ] Step 2: paired fields (Phone/Email) are horizontal
- [ ] Step 3: product list renders with thumbnails, names, quantities, prices
- [ ] Step 3: subtotal and total calculate correctly
- [ ] Step 4: radio group with default selection
- [ ] Step 4: tooltips show/hide on radio selection
- [ ] Responsive at 991px: image hidden, form centered
- [ ] Responsive at 767px: stacked layout, paired fields vertical
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] Poppins font loaded via Google Fonts link
- [ ] Tests at 100% coverage
