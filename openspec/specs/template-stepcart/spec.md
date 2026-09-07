# Template: StepCart (eCommerce Checkout Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 5" — a flexible 4-step order/checkout wizard for eCommerce websites.
- **Source template:** [Colorlib Wizard 5](https://colorlib.com/wp/template/colorlib-wizard-5/)
- **Source slug:** `colorlib-wizard-5`
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-wizard-5/ (404 at time of prep — design inferred from description + screenshot + Bootstrap wizard conventions)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Bootstrap Wizards / eCommerce Order Form

## Design Tokens (from reference — preview unreachable, inferred from description + Bootstrap conventions)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Poppins', sans-serif` | Google Fonts (common in ColorLib Bootstrap wizards) |
| Primary brand color | `#3b82f6` (blue-500) | Bootstrap-inspired blue |
| Primary hover | `#2563eb` (blue-600) | Hover state |
| Background | `#f8f9fa` (gray-50) | Page background |
| Card background | `#ffffff` | Form card |
| Card border-radius | `10px` | Rounded card |
| Card shadow | `0 4px 20px rgba(0,0,0,0.08)` | Subtle elevation |
| Step indicator active | `#3b82f6` blue bg, `#fff` text | Current step circle |
| Step indicator inactive | `#e5e7eb` bg, `#6b7280` text | Pending step circles |
| Step connector line | `#d1d5db` | Line between step circles |
| Step connector complete | `#3b82f6` | Completed step connector |
| Input border | `#d1d5db` | Default input border |
| Input focus ring | `#3b82f6` | Focus state |
| Input border-radius | `6px` | Rounded inputs |
| Button primary bg | `#3b82f6` | Next/Submit buttons |
| Button primary text | `#ffffff` | Button label |
| Button secondary bg | `#e5e7eb` | Back button |
| Button secondary text | `#374151` | Back button label |
| Button border-radius | `6px` | Rounded buttons |
| Text primary | `#111827` | Headings |
| Text secondary | `#6b7280` | Descriptions |
| Error color | `#ef4444` | Validation errors |
| Success color | `#22c55e` | Completion state |

## Gherkin Requirements

### Feature: 4-Step eCommerce Checkout Wizard

#### Scenario: Wizard renders with 4-step progress indicator
  Given the user loads the checkout wizard
  Then a horizontal progress indicator is displayed at the top
  And it shows 4 numbered step circles: 1, 2, 3, 4
  And step 1 is highlighted as active (blue background)
  And steps 2, 3, 4 are inactive (gray background)
  And connector lines link the step circles

#### Scenario: Step 1 — Cart Review
  Given the user is on step 1
  Then the heading "Review Your Cart" is visible
  And a list of cart items is displayed (each with name, quantity, price)
  And a subtotal/total amount is shown
  And a "Next" button is visible
  And a "Back" button is NOT visible

#### Scenario: Step 2 — Shipping Information
  Given the user has completed step 1
  When the user clicks "Next"
  Then step 2 is displayed with heading "Shipping Information"
  And form fields are shown: Full Name, Email, Address, City, State, Zip Code
  And the progress indicator shows step 1 as completed (checkmark) and step 2 as active

#### Scenario: Step 3 — Payment Details
  Given the user has completed step 2
  When the user clicks "Next"
  Then step 3 is displayed with heading "Payment Details"
  And form fields are shown: Name on Card, Card Number, Expiry Date, CVV
  And the progress indicator shows steps 1-2 as completed and step 3 as active

#### Scenario: Step 4 — Order Confirmation
  Given the user has completed step 3
  When the user clicks "Next"
  Then step 4 is displayed with heading "Confirm Your Order"
  And an order summary is shown (items, shipping address, payment method last-4)
  And a "Place Order" button is visible
  And a "Back" button is visible
  And the progress indicator shows all 4 steps as completed

#### Scenario: Place Order completes the wizard
  Given the user is on step 4
  When the user clicks "Place Order"
  Then a success confirmation is displayed
  And the message "Order Placed Successfully" or equivalent is shown

### Feature: Form Validation

#### Scenario: Step 2 validation — required fields
  Given the user is on step 2
  When the user clicks "Next" with empty required fields
  Then validation errors appear for Full Name, Email, Address, City, State, Zip Code
  And the form does not advance to step 3

#### Scenario: Step 2 validation — invalid email
  Given the user is on step 2
  When the user enters "not-an-email" in the Email field
  And clicks "Next"
  Then an email format validation error is displayed

#### Scenario: Step 3 validation — required fields
  Given the user is on step 3
  When the user clicks "Next" with empty payment fields
  Then validation errors appear for Name on Card, Card Number, Expiry Date, CVV

#### Scenario: Step 3 validation — invalid card number
  Given the user is on step 3
  When the user enters "123" in the Card Number field
  And clicks "Next"
  Then a card number validation error is displayed

### Feature: Navigation

#### Scenario: Back button returns to previous step
  Given the user is on step 3
  When the user clicks "Back"
  Then the form returns to step 2
  And the progress indicator updates to show step 3 as inactive

#### Scenario: Back button hidden on step 1
  Given the user is on step 1
  Then the "Back" button is not visible

#### Scenario: Clicking completed step navigates back
  Given the user is on step 3
  When the user clicks on the step 1 circle in the progress indicator
  Then the form returns to step 1

### Feature: Responsive Design

#### Scenario: Mobile layout stacks vertically
  Given the user is on a viewport width less than 640px
  Then the progress indicator wraps or shrinks appropriately
  And form fields stack vertically
  And buttons are full-width

### Feature: Footer with Component Dock branding

#### Scenario: Footer contains Component Dock link
  Given the page is rendered
  Then the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] Progress indicator renders 4 numbered circles connected by lines
- [ ] Active step circle has blue background, inactive steps are gray
- [ ] Completed steps show checkmark icon
- [ ] Step 1: Cart items list with quantities and prices, subtotal
- [ ] Step 2: Full Name, Email, Address, City, State, Zip Code fields
- [ ] Step 3: Name on Card, Card Number, Expiry Date, CVV fields
- [ ] Step 4: Order summary with items, shipping, payment last-4
- [ ] Next/Back navigation buttons work correctly
- [ ] "Place Order" button on step 4 shows success state
- [ ] Form validation prevents advancing with invalid/empty required fields
- [ ] Email format validation on step 2
- [ ] Card number validation on step 3
- [ ] Clicking completed step circles navigates back
- [ ] Responsive layout (stacks on mobile < 640px)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Poppins font loaded from Google Fonts
- [ ] Blue primary color (#3b82f6) used consistently
