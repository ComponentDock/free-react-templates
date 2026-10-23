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

## Requirements

### Feature: 4-Step eCommerce Checkout Wizard

#### Scenario: Wizard renders with 4-step progress indicator

- **GIVEN** the user loads the checkout wizard
- **THEN** a horizontal progress indicator is displayed at the top
- **AND** it shows 4 numbered step circles: 1, 2, 3, 4
- **AND** step 1 is highlighted as active (blue background)
- **AND** steps 2, 3, 4 are inactive (gray background)
- **AND** connector lines link the step circles

#### Scenario: Step 1 — Cart Review

- **GIVEN** the user is on step 1
- **THEN** the heading "Review Your Cart" is visible
- **AND** a list of cart items is displayed (each with name, quantity, price)
- **AND** a subtotal/total amount is shown
- **AND** a "Next" button is visible
- **AND** a "Back" button is NOT visible

#### Scenario: Step 2 — Shipping Information

- **GIVEN** the user has completed step 1
- **WHEN** the user clicks "Next"
- **THEN** step 2 is displayed with heading "Shipping Information"
- **AND** form fields are shown: Full Name, Email, Address, City, State, Zip Code
- **AND** the progress indicator shows step 1 as completed (checkmark) and step 2 as active

#### Scenario: Step 3 — Payment Details

- **GIVEN** the user has completed step 2
- **WHEN** the user clicks "Next"
- **THEN** step 3 is displayed with heading "Payment Details"
- **AND** form fields are shown: Name on Card, Card Number, Expiry Date, CVV
- **AND** the progress indicator shows steps 1-2 as completed and step 3 as active

#### Scenario: Step 4 — Order Confirmation

- **GIVEN** the user has completed step 3
- **WHEN** the user clicks "Next"
- **THEN** step 4 is displayed with heading "Confirm Your Order"
- **AND** an order summary is shown (items, shipping address, payment method last-4)
- **AND** a "Place Order" button is visible
- **AND** a "Back" button is visible
- **AND** the progress indicator shows all 4 steps as completed

#### Scenario: Place Order completes the wizard

- **GIVEN** the user is on step 4
- **WHEN** the user clicks "Place Order"
- **THEN** a success confirmation is displayed
- **AND** the message "Order Placed Successfully" or equivalent is shown

### Feature: Form Validation

#### Scenario: Step 2 validation — required fields

- **GIVEN** the user is on step 2
- **WHEN** the user clicks "Next" with empty required fields
- **THEN** validation errors appear for Full Name, Email, Address, City, State, Zip Code
- **AND** the form does not advance to step 3

#### Scenario: Step 2 validation — invalid email

- **GIVEN** the user is on step 2
- **WHEN** the user enters "not-an-email" in the Email field
- **AND** clicks "Next"
- **THEN** an email format validation error is displayed

#### Scenario: Step 3 validation — required fields

- **GIVEN** the user is on step 3
- **WHEN** the user clicks "Next" with empty payment fields
- **THEN** validation errors appear for Name on Card, Card Number, Expiry Date, CVV

#### Scenario: Step 3 validation — invalid card number

- **GIVEN** the user is on step 3
- **WHEN** the user enters "123" in the Card Number field
- **AND** clicks "Next"
- **THEN** a card number validation error is displayed

### Feature: Navigation

#### Scenario: Back button returns to previous step

- **GIVEN** the user is on step 3
- **WHEN** the user clicks "Back"
- **THEN** the form returns to step 2
- **AND** the progress indicator updates to show step 3 as inactive

#### Scenario: Back button hidden on step 1

- **GIVEN** the user is on step 1
- **THEN** the "Back" button is not visible

#### Scenario: Clicking completed step navigates back

- **GIVEN** the user is on step 3
- **WHEN** the user clicks on the step 1 circle in the progress indicator
- **THEN** the form returns to step 1

### Feature: Responsive Design

#### Scenario: Mobile layout stacks vertically

- **GIVEN** the user is on a viewport width less than 640px
- **THEN** the progress indicator wraps or shrinks appropriately
- **AND** form fields stack vertically
- **AND** buttons are full-width

### Feature: Footer with Component Dock branding

#### Scenario: Footer contains Component Dock link

- **GIVEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification checklist

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
