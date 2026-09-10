# Template: Payflow (4-Step Checkout Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 5 (`https://colorlib.com/wp/template/colorlib-wizard-5/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-5/` (unreachable at prep time — fell back to screenshot + source HTML)
- **Demo source**: `https://colorlib.com/etc/bwiz/colorlib-wizard-5/index.html`
- **New Name**: `payflow` (App directory: `apps/payflow`, Package: `@free-react-templates/payflow`)
- **Category**: E-commerce / Multi-step Checkout Wizard
- **Description**: A 4-step checkout/order wizard with a split-screen layout — decorative 3D illustration on the left, a white form card with step-by-step progress indicator on the right. Warm peach/tan color palette with Poppins typography.

## Design Tokens

- **Primary Brand Color**: `#f3d4b7` (warm peach/tan) — buttons, active progress steps, focus borders
- **Darker Accent**: `#d9bda3` (deeper tan) — progress bar background
- **Card Background**: `#ffffff` (white)
- **Text Primary**: `#333333` (headings, button text)
- **Text Body**: `#666666` (body text)
- **Text Muted**: `#999999` (labels, secondary text)
- **Input Borders**: `#e6e6e6` (default), `#f3d4b7` (focus)
- **Progress Inactive**: `#e6e6e6`
- **Checkbox/Radio Unchecked**: `#ebebeb` border
- **Checkbox/Radio Checked**: `#666666` fill
- **Typography**: Poppins (Regular 400, Medium 500, SemiBold 600) for form UI; Muli-Bold for product totals
- **Input Border Radius**: `3.5px`
- **Radio/Checkbox Border Radius**: `50%`
- **Layout**: Split-screen — left ~40% decorative illustration, right ~60% form card
- **Background**: Full-page peach (`#f3d4b7`) behind the white card

## Gherkin Requirements

### Requirement: Multi-step checkout wizard navigation

Users SHALL navigate through a 4-step checkout wizard with a horizontal progress indicator.

#### Scenario: Step 1 shows billing details form

- **WHEN** the user lands on the checkout wizard
- **THEN** Step 1 "Billing Details" is displayed with fields: First Name*, Last Name*, Company Name, Country*, Address* (street + apartment), Town/City*

#### Scenario: Progress indicator shows current step

- **WHEN** the user is on any step
- **THEN** the progress indicator highlights the current step in peach and shows completed steps as checked

#### Scenario: Steps fade transition

- **WHEN** the user navigates between steps
- **THEN** the transition uses a fade effect (500ms)

### Requirement: Form fields per step

#### Scenario: Step 1 — Billing Details

- **WHEN** the wizard shows Step 1
- **THEN** the form contains: First Name* (text), Last Name* (text), Company Name (text, optional), Country* (select dropdown with Vietnam, US, UK options), Address* (street text input), Apartment/suite/unit (text, optional), Town/City* (text)

#### Scenario: Step 2 — Shipping Information

- **WHEN** the user proceeds to Step 2
- **THEN** the form contains: County* (text), Postcode/Zip* (text), Phone* (text), Email Address* (text), Order Notes (textarea with placeholder about delivery notes), "Create an account?" checkbox

#### Scenario: Step 3 — Order Review

- **WHEN** the user proceeds to Step 3
- **THEN** the order review shows: product items with thumbnail images, product names, quantities, and prices; Subtotal line; Shipping message (no methods available); Total line

#### Scenario: Step 4 — Payment Method

- **WHEN** the user proceeds to Step 4
- **THEN** radio button options are shown: Direct Bank Transfer (selected by default), Check Payments, Cash on Delivery — each with an expandable tooltip describing the payment method

### Requirement: Wizard navigation controls

Users SHALL have Previous/Next buttons to move between steps.

#### Scenario: Previous button hidden on first step

- **WHEN** the user is on Step 1
- **THEN** only a "Next" button is visible

#### Scenario: Previous button visible on later steps

- **WHEN** the user is on Step 2, 3, or 4
- **THEN** a "Previous" button is visible that returns to the prior step

#### Scenario: Next button labeled "Place Order" on final step

- **WHEN** the user is on Step 4
- **THEN** the Next button is replaced with a "Place Order" button

### Requirement: Payment method selection

#### Scenario: Selecting a payment method

- **WHEN** the user clicks on a payment method radio button
- **THEN** that option becomes active (highlighted) and the previously active option is deselected

#### Scenario: Payment tooltip expand

- **WHEN** the user views a payment method option
- **THEN** a description tooltip is visible explaining the payment method details

### Requirement: Responsive split-screen layout

#### Scenario: Desktop layout

- **WHEN** the page is viewed on desktop (≥1200px)
- **THEN** the layout is split-screen: decorative 3D illustration on the left (~40%), white form card on the right (~60%)

#### Scenario: Mobile layout

- **WHEN** the page is viewed on mobile (<768px)
- **THEN** the layout stacks vertically: illustration on top, form card below, full width

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] 4-step wizard with fade transitions works correctly
- [ ] All form fields render with correct labels and types
- [ ] Step 1: billing details with name, company, country dropdown, address, city
- [ ] Step 2: shipping info with county, zip, phone, email, notes, account checkbox
- [ ] Step 3: order review with product items, subtotal, shipping, total
- [ ] Step 4: payment methods as radio buttons with tooltips
- [ ] Previous/Next navigation between steps
- [ ] "Place Order" button on final step
- [ ] Progress indicator highlights current step
- [ ] Split-screen layout (illustration left, form right)
- [ ] Responsive: stacks on mobile
- [ ] Peach brand color (#f3d4b7) used for buttons and active elements
- [ ] Poppins font family applied
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
