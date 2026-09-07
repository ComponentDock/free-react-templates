# Template: GuideFlow (eCommerce 4-Step Order Wizard)

## Purpose

Recreation of ColorLib Wizard 5 — a free 4-step order template for eCommerce
websites. The original is a Bootstrap-based dark-themed multi-step order form
with a convenient four-step wizard flow for collecting order information.

- **Source template**: [Colorlib Wizard 5](https://colorlib.com/wp/template/colorlib-wizard-5/)
- **New Name**: `guideflow` (App directory: `apps/guideflow`, Package: `@free-react-templates/guideflow`)
- **Category**: Forms / Multi-step Wizard (eCommerce Order)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-5/` (unreachable at prep time — 404; fallback to screenshot)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

> Extracted from the screenshot (preview unreachable) and Colorlib page metadata.
> The Colorlib Wizard 5 is a dark-themed 4-step order form with step indicators,
> form fields, and navigation buttons. Design tokens follow standard Colorlib
> wizard patterns.

| Token                       | Value                           | Notes                                  |
| --------------------------- | ------------------------------- | -------------------------------------- |
| Background (page)           | `#1a1a2e` (dark navy)           | Dark-themed full-page background       |
| Background (card/form)      | `#16213e` (deep blue)           | Card container behind the wizard       |
| Background (active step)    | `#0f3460` (medium blue)         | Active step indicator background       |
| Background (completed step) | `#4caf50` (green)               | Completed step indicator               |
| Text primary                | `#ffffff`                       | White text on dark backgrounds         |
| Text secondary              | `#a0a0b8` (muted lavender)      | Inactive step labels, helper text      |
| Accent / CTA                | `#e94560` (coral-red)           | Next/Submit button, active step accent |
| Accent hover                | `#c73e54` (darker coral)        | Button hover state                     |
| Success / confirm           | `#4caf50` (green)               | Confirmation step icons, tick marks    |
| Input background            | `#0f3460` (deep blue)           | Form input fields                      |
| Input border                | `#2a2a4a` (subtle blue-gray)    | Input field borders                    |
| Font family                 | `"Poppins", sans-serif`         | Common Colorlib wizard font            |
| Border radius (card)        | `8px`                           | Rounded card corners                   |
| Border radius (inputs)      | `4px`                           | Slightly rounded inputs                |
| Border radius (button)      | `4px`                           | Rounded button corners                 |
| Step indicator icons        | Checkmark (✓) tick symbol       | Completed steps                        |
| Navigation button           | Arrow (→) icon                  | Next step indicator (no text label)    |
| Transitions                 | Smooth fade/slide between steps | Elegant transitions between sections   |

## Gherkin requirements

### Feature: GuideFlow — 4-Step eCommerce Order Wizard

Scenario: Page loads with step 1 active
Given the user opens the GuideFlow page
Then the "Order Information" step should be visible and active
And the "Shipping", "Payment", and "Review" steps should be visible but inactive
And the first step should display form fields for order information

Scenario: Step 1 — Order Information fields
Given the user is on step 1 "Order Information"
Then the form should contain a "Full Name" text input
And the form should contain an "Email" input field
And the form should contain a "Phone" input field
And the form should contain a "Product" or item selection input
And a "Next" arrow button should be visible

Scenario: Step 2 — Shipping Information fields
Given the user is on step 2 "Shipping"
Then the form should contain a "Address" text input
And the form should contain a "City" text input
And the form should contain a "State/Province" text input
And the form should contain a "Zip/Postal Code" text input
And the form should contain a "Country" select or text input
And a "Next" arrow button should be visible

Scenario: Step 3 — Payment Information fields
Given the user is on step 3 "Payment"
Then the form should contain a "Card Number" input field
And the form should contain a "Cardholder Name" input field
And the form should contain an "Expiry Date" input field
And the form should contain a "CVV" input field
And a "Next" arrow button should be visible

Scenario: Step 4 — Review and Confirm
Given the user is on step 4 "Review"
Then the order summary should display all entered data
And the shipping address should be displayed in read-only form
And the payment details should be displayed (card number masked)
And a "Submit" or "Confirm Order" button should be visible

Scenario: Navigate forward through steps
Given the user is on step 1 with valid information
When the user clicks the "Next" arrow button
Then the "Shipping" step should become active
And the "Order Information" step should show a completed checkmark
And the shipping form fields should be visible

Scenario: Navigate to payment step
Given the user is on step 2 with valid shipping information
When the user clicks the "Next" arrow button
Then the "Payment" step should become active
And the "Order Information" and "Shipping" steps should show completed checkmarks
And the payment form fields should be visible

Scenario: Navigate to review step
Given the user is on step 3 with valid payment information
When the user clicks the "Next" arrow button
Then the "Review" step should become active
And all previous steps should show completed checkmarks
And the review summary should display all entered data

Scenario: Submit order from review step
Given the user is on step 4 "Review" with all data valid
When the user clicks the "Submit" or "Confirm Order" button
Then a success confirmation should be displayed
And the order details should be shown in a summary view

Scenario: Navigate backwards between steps
Given the user is on step 3 "Payment"
When the user clicks the back/previous step indicator
Then the "Shipping" step should become active again
And the previously entered data should be preserved

Scenario: Step indicator shows progress
Given the user is on any step
Then the step indicator bar should show 4 steps in a horizontal row
And completed steps should display a checkmark icon
And the current step should be highlighted with the accent color
And future steps should appear muted/inactive

Scenario: Form validation prevents advancement
Given the user is on step 1
And the "Full Name" field is empty
When the user clicks the "Next" arrow button
Then the user should remain on step 1
And a validation error should appear on the required field

Scenario: Responsive layout on mobile
Given the user opens the page on a viewport width less than 768px
Then the wizard card should stack vertically and fit the screen
And all form fields should remain usable and accessible
And the step indicator should remain visible above the form

## Verification checklist

- [ ] Dark-themed background (`#1a1a2e`) covers the full page
- [ ] Card/form container uses a contrasting deep blue (`#16213e`)
- [ ] Step indicator bar shows 4 horizontal steps with labels
- [ ] Completed steps show green checkmark tick icons
- [ ] Active step is highlighted with accent color (`#e94560`)
- [ ] Inactive steps use muted text color (`#a0a0b8`)
- [ ] "Next" navigation uses an arrow icon (→), not text label
- [ ] Step 1: Order info fields (full name, email, phone, product)
- [ ] Step 2: Shipping fields (address, city, state, zip, country)
- [ ] Step 3: Payment fields (card number, cardholder, expiry, CVV)
- [ ] Step 4: Review summary with masked card number and confirm button
- [ ] Smooth fade/slide transitions between steps
- [ ] Back navigation preserves entered data
- [ ] Form validation blocks empty required fields
- [ ] Responsive: stacks on mobile viewports (<768px)
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] No references to ColorLib in app code (provenance in spec only)
- [ ] Uses `cn()` from `packages/ui` for class composition
- [ ] 100% test coverage (lines, functions, branches, statements)
