---
name: hexweave
description: >
  Multi-step billing wizard template — recreation of ColorLib Wizard 5
  (https://colorlib.com/wp/template/colorlib-wizard-5/).
  Four-step checkout wizard: Billing → Shipping → Payment → Confirm.
  Warm peach/beige background (#f5e6d3), peach-orange accent (#e8a87c), white card.
---

## Purpose

Hexweave is a multi-step billing/checkout form wizard that recreates the ColorLib Wizard 5
design under a different name. It provides a four-step guided flow (Billing Details,
Shipping, Payment, Confirm) with a warm peach/beige background, peach-orange accent colors,
and a split-screen layout featuring a decorative illustration panel on the left and a white
form card on the right. Users fill in billing information, shipping details, payment
preferences, and review a summary before submitting.

## Source

- ColorLib Wizard 5: https://colorlib.com/wp/template/colorlib-wizard-5/
- Preview: https://preview.colorlib.com/theme/colorlib-wizard-5/ (UNREACHABLE — 404, falling back to screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg

## Design Tokens

Extracted from screenshot analysis (preview unreachable):

- Background: `#f5e6d3` (warm light peach/beige, subtle gradient at bottom)
- Accent: `#e8a87c` (warm peach-orange) — active step indicator, button fill
- Card: `#ffffff` (white), subtle drop-shadow, sharp corners, generous padding
- Labels: `#999999` (light gray), small sans-serif text
- Input borders: `#dddddd` (light gray)
- Heading text: `#333333` (dark gray/black), bold sans-serif
- Step inactive: `#dddddd` (light gray bar)
- Step active: `#e8a87c` (peach-orange bar)
- Button: `#e8a87c` (peach-orange fill), `#ffffff` (white text), rounded corners (~4px), with right arrow icon
- Font: "Open Sans", sans-serif (clean, modern web font)
- Card max-width: ~500px (right half of split layout)
- Left panel: decorative 3D illustration (lamp, table, watering can, palm frond) on sage-green/light-blue background

## Requirements

### Requirement: Four-step wizard flow

The wizard SHALL display four sequential steps: Billing Details (step 1), Shipping (step 2),
Payment (step 3), and Confirm (step 4). Only one step is visible at a time.

#### Scenario: Initial state shows step 1

- **WHEN** the user opens the wizard page
- **THEN** the heading "Billing Details" is visible
- **AND** the billing form is displayed
- **AND** step 1 progress bar is active (peach-orange fill)
- **AND** steps 2–4 progress bars are inactive (light gray)

#### Scenario: Navigate to step 2

- **WHEN** the user fills in all required billing fields and clicks "Next →"
- **THEN** step 2 (Shipping) is displayed
- **AND** step 1 progress bar shows completed (peach-orange)
- **AND** step 2 progress bar shows active (peach-orange)

#### Scenario: Navigate to step 3

- **WHEN** the user fills in shipping fields and clicks "Next →"
- **THEN** step 3 (Payment) is displayed
- **AND** steps 1–2 progress bars show completed

#### Scenario: Navigate to step 4

- **WHEN** the user fills in payment fields and clicks "Next →"
- **THEN** step 4 (Confirm) is displayed
- **AND** all three prior progress bars show completed

#### Scenario: Go back to previous step

- **WHEN** the user clicks "← Previous" on any step after step 1
- **THEN** the previous step's form is displayed with prior values preserved

### Requirement: Progress bar indicator

The progress indicator SHALL show four horizontal bars. The active step bar uses peach-orange
(#e8a87c). Completed step bars also use peach-orange. Inactive step bars use light gray
(#dddddd). No step numbers — simple visual progress tracking.

#### Scenario: Active step styling

- **WHEN** the user is on step 2
- **THEN** bar 1 is filled (completed, peach-orange)
- **AND** bar 2 is filled (active, peach-orange)
- **AND** bars 3–4 are empty (inactive, light gray)

### Requirement: Billing Details form (Step 1)

Step 1 SHALL contain fields for First Name*, Last Name*, Company Name, Country* (dropdown),
Street Address*, Apartment/Suite/Unit (optional), and Town/City*.

#### Scenario: Fill billing fields

- **WHEN** the user types in the First Name field
- **THEN** the field value updates

#### Scenario: Required field validation

- **WHEN** the user clicks "Next →" with the First Name field empty
- **THEN** a validation error is shown for the required field

### Requirement: Shipping form (Step 2)

Step 2 SHALL contain fields for Shipping Address (Street, City, State/Province, Postal Code),
Phone Number, and Email.

#### Scenario: Fill shipping fields

- **WHEN** the user types in the Shipping Address fields
- **THEN** the field values update

### Requirement: Payment form (Step 3)

Step 3 SHALL contain fields for Cardholder Name, Card Number, Expiry Date (MM/YY),
CVV, and Billing Zip/Postal Code.

#### Scenario: Fill payment fields

- **WHEN** the user types in the Card Number field
- **THEN** the field value updates

### Requirement: Confirmation summary (Step 4)

Step 4 SHALL display a summary table with Billing Details, Shipping Address, and Payment
(last 4 digits of card). Empty fields SHALL show a dash placeholder.

#### Scenario: Review confirmation

- **WHEN** the user reaches step 4
- **THEN** the summary table shows all billing, shipping, and payment details
- **AND** the Submit button is visible

### Requirement: Submit flow

Clicking Submit SHALL show a confirmation screen with a "Order Confirmed!" message.

#### Scenario: Submit order

- **WHEN** the user clicks "Submit" on step 4
- **THEN** a "Order Confirmed!" message is displayed
- **AND** the user's first name appears in the thank-you text

### Requirement: Split-screen layout

The page SHALL use a split-screen layout. The left half shows a decorative illustration
panel with warm tones. The right half contains the white wizard card. On mobile, the layout
SHALL stack vertically with the illustration above the form.

#### Scenario: Desktop split layout

- **WHEN** the viewport width is ≥ 768px
- **THEN** the illustration panel occupies the left half
- **AND** the form card occupies the right half

#### Scenario: Mobile stacked layout

- **WHEN** the viewport width is < 768px
- **THEN** the illustration panel stacks above the form card

### Requirement: Footer with Component Dock link

Every template footer MUST link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text includes "Component Dock"

## Verification Checklist

- [ ] Four-step wizard: Billing → Shipping → Payment → Confirm
- [ ] Progress bars with peach-orange active/completed, gray inactive
- [ ] Billing form: First Name, Last Name, Company, Country (dropdown), Address fields, City
- [ ] Shipping form: Address, City, State, Postal, Phone, Email
- [ ] Payment form: Cardholder, Card Number, Expiry, CVV, Zip
- [ ] Confirmation summary table with all details
- [ ] Submit shows "Order Confirmed!" message
- [ ] Previous/Next navigation with preserved state
- [ ] Required field validation
- [ ] Split-screen layout (illustration left, form right)
- [ ] Mobile responsive (stacked on small viewports)
- [ ] Warm peach/beige background (#f5e6d3)
- [ ] Peach-orange accent (#e8a87c)
- [ ] White card with subtle shadow
- [ ] Open Sans font
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
