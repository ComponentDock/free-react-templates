# Template: ShopSteps (Multi-Step Checkout Wizard)

## Purpose

Recreation of **ColorLib Wizard 8** — a free multi-step checkout form wizard
for a food/grocery store, with basic details, password change, cart review,
and cart totals steps.

- **Source:** https://colorlib.com/wp/template/colorlib-wizard-8/
- **Preview (live):** https://colorlib.com/etc/bwiz/colorlib-wizard-8/index.html (ColorLib listing page: https://colorlib.com/wp/template/colorlib-wizard-8/)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Category:** Form Wizard / Multi-Step Checkout

## Design Tokens (extracted from preview CSS)

| Token                 | Value                                                   | Source                                     |
| --------------------- | ------------------------------------------------------- | ------------------------------------------ |
| Font (body)           | Lato-Regular (400)                                      | `@font-face` in style.css                  |
| Font (bold headings)  | Lato-Black (900)                                        | `@font-face` in style.css                  |
| Font (table headings) | Lato-Bold (700)                                         | `@font-face` in style.css                  |
| Body background       | Image (`form-wizard-bg.jpg`), full-screen cover         | `body` background                          |
| Body color            | `#999`                                                  | `body` color                               |
| Wrapper bg            | `#fff`                                                  | `.wrapper` background                      |
| Wrapper size          | 826px × 620px, padding 63px 90px 0                      | `.wrapper`                                 |
| Heading h3            | 20px, `#333`, uppercase, letter-spacing 2px, Lato-Black | `h3`                                       |
| Form input border     | `1px solid #e6e6e6`                                     | `.form-control`                            |
| Form input height     | 42px                                                    | `.form-control`                            |
| Input focus border    | `#8eb852` (green)                                       | `.form-control:focus`                      |
| Input placeholder     | `#999`                                                  | `.form-control::-webkit-input-placeholder` |
| Button bg             | `#8eb852` (green)                                       | `.actions li a`                            |
| Button hover bg       | `#a1d15e` (lighter green)                               | `.actions li a:hover`                      |
| Button color          | `#fff`                                                  | `.actions li a`                            |
| Button height         | 42px                                                    | `.actions li a`                            |
| Button radius         | 3px                                                     | `.actions li a` border-radius              |
| Button font           | 15px, uppercase, letter-spacing 1px                     | `.actions li a`                            |
| Step indicator text   | 12px, `#666`, uppercase                                 | `.step-order`                              |
| Step order color      | `#666`                                                  | `.step-order`                              |
| Table header color    | `#666`, Lato-Bold                                       | `table.cart th`                            |
| Table border          | `1px solid #e6e6e6`                                     | `table.cart th/td`                         |
| Cart price color      | `#92c752` (green)                                       | `.total-price span`                        |
| Cart total text       | `#333`, Lato-Bold                                       | `.order-total`                             |
| Quantity input bg     | `#f2f2f2`                                               | `.quantity`                                |
| Quantity input color  | `#666`                                                  | `.quantity input`                          |
| Checkbox radio border | `1px solid #999`                                        | `.checkmark`                               |
| Checkbox radio fill   | `#999`                                                  | `.checkmark:after`                         |
| Cart link color       | `#666`, Lato-Bold                                       | `.product-detail a`                        |
| Remove icon color     | `#666`                                                  | `.product-remove a`                        |
| Responsive breakpoint | 767px (stack form rows)                                 | `@media (max-width: 767px)`                |

## Design Notes (from ColorLib listing + HTML + CSS analysis)

The ColorLib listing describes this as:

> "A free food store checkout template" — Wizard 8 in the FormWizard series.

Visual layout from the HTML structure and CSS:

- Full-viewport centered layout with a background image (food/grocery theme)
- White card wrapper (826×620px) centered on the page
- Step indicator bar at top: 4 steps connected by arrows (Basic details → Password change → My Cart → Cart Totals)
- Step numbers hidden; step labels shown in uppercase 12px
- Each step is a `<section>` inside a `<form>` using jQuery Steps plugin
- Step 1 (Basic Details): 4 rows of form fields (First/Last Name, Email/User ID, Country/State/City, Phone/Reference), each with Material Design icons on the right
- Step 2 (Password Change): 4 full-width password fields with lock-open icons
- Step 3 (My Cart): Table with product thumbnails, names, prices, +/- quantity controls, total price, remove button
- Step 4 (Cart Totals): Summary table with subtotal, shipping radio options, service fee, total
- Navigation: "Previous" (97px) and "Next/Submit" (234px) buttons, green #8eb852
- Green accent color (#8eb852) used for buttons, focus states, and cart prices
- Clean, minimal design with light gray borders (#e6e6e6) and muted text (#999, #666, #333)

## Gherkin Requirements

### Feature: ShopSteps Multi-Step Checkout Wizard

Scenario: Page loads with centered wizard card
Given the page has loaded
Then a white card is centered on a background image
And the card displays a 4-step progress indicator

Scenario: Step indicator shows all steps
Given the page has loaded
Then 4 step labels are visible: "Basic details", "Password change", "My Cart", "Cart Totals"
And steps are connected by arrow indicators
And the current step is highlighted

Scenario: Step 1 — Basic Details form
Given the wizard is on step 1
Then a "Basic details" heading is displayed
And 8 form fields are visible in a 2-column grid:
| Field | Icon |
| First Name | zmdi-account |
| Last Name | zmdi-account |
| Email ID | zmdi-email |
| Your User ID | zmdi-account-box|
| Country | zmdi-map |
| State | zmdi-pin |
| City | zmdi-pin-drop |
| Phone Number | zmdi-smartphone |
| Reference Coder | zmdi-eye (password toggle) |
And a "Next" button is visible

Scenario: Navigate to next step
Given the wizard is on step 1
When the user clicks the "Next" button
Then the wizard advances to step 2
And the step indicator updates to show step 2 as current

Scenario: Navigate to previous step
Given the wizard is on step 2
When the user clicks the "Previous" button
Then the wizard returns to step 1

Scenario: Step 2 — Password Change
Given the wizard is on step 2
Then a "Password change" heading is displayed
And 4 full-width password fields are visible:
| Field |
| Current Password |
| Enter the Current Password |
| New Password |
| Confirm New Password |
And each field has a lock-open icon

Scenario: Step 3 — My Cart
Given the wizard is on step 3
Then a "My Cart" heading is displayed
And a cart table is visible with columns: Product Detail, Quantity, Total Price
And 2 cart items are displayed (Cherry $35, Mango $20)
And each item has a thumbnail, name, price, quantity input with +/- controls, and remove button

Scenario: Quantity controls in cart
Given the wizard is on step 3
When the user clicks the "+" button on a cart item
Then the quantity increases by 1
And the total price updates accordingly

Scenario: Remove item from cart
Given the wizard is on step 3
When the user clicks the remove button on a cart item
Then the item is removed from the cart

Scenario: Step 4 — Cart Totals
Given the wizard is on step 4
Then a "Cart Totals" heading is displayed
And a totals table shows: Subtotal, Shipping, Service, Total
And shipping options include radio buttons: "Free Shipping" and "Local pickup"
And the total price is displayed in green (#92c752)

Scenario: Final submission
Given the wizard is on step 4
When the user clicks the submit button
Then the form is submitted

Scenario: Responsive layout
Given the page is viewed on a mobile viewport (below 767px)
Then the background image is hidden
And form rows stack vertically (single column)
And the wizard card fills the screen width
And cart table columns stack vertically

Scenario: Accessibility
Given the wizard is loaded
Then all form inputs have associated labels or placeholders
And the step indicator is keyboard navigable
And focus states are visible on interactive elements

## Verification Checklist

- [ ] Centered white card on background image
- [ ] 4-step progress indicator with arrows
- [ ] Step 1: 8 form fields in 2-column grid with icons
- [ ] Step 2: 4 password fields with lock icons
- [ ] Step 3: Cart table with 2 items, quantity +/- controls, remove button
- [ ] Step 4: Cart totals with shipping radio options
- [ ] Next/Previous navigation between steps
- [ ] Green accent color (#8eb852) on buttons and focus states
- [ ] Lato font family (Regular, Bold, Black)
- [ ] Responsive: stacks on mobile (767px breakpoint)
- [ ] Accessibility: labels/placeholders, focus-visible rings
- [ ] Tests pass with 100% coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
