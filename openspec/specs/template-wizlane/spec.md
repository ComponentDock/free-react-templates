# Template: Wizlane (Food Store Checkout Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 8 (`https://colorlib.com/wp/template/colorlib-wizard-8/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-8/` (404 at time of prep; design captured from screenshot + ColorLib page description + CSS tokens)
- **New Name**: `wizlane` (App directory: `apps/wizlane`, Package: `@free-react-templates/wizlane`)
- **Category**: Bootstrap Wizard Templates / Food Store Checkout
- **Description**: A 4-step food store checkout wizard with a centered white card on a textured warm background, green accent stepper with icons, form fields, and BACK/CONTINUE navigation buttons. Designed for online grocery/organic food ordering.

## Design Tokens (captured from ColorLib CSS + screenshot)

- **Primary Brand Green**: `#77CC6D` (stepper circles, icons, buttons — the dominant accent)
- **Secondary Green**: `#09aa59` (used for active step icon fill and borders)
- **Background**: Warm off-white textured/beige paper-like surface with subtle grain
- **Card Background**: `#ffffff` (white centered card with soft rounded corners + drop shadow)
- **Text Colors**: Dark black (`#000000` / `#222222`) for headings, dark gray (`#4B4B4B`) for body text
- **Input Borders**: Light gray (`#eee` / `#e0e0e0`)
- **Input Active Fill**: Light blue-grey (focused/active state)
- **Typography**: System sans-serif (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif`)
- **Buttons**: Pill-shaped / large border-radius, solid green (`#77CC6D`) fill, white uppercase text
- **Form Inputs**: Light gray borders, rounded corners, icons on right side in green
- **Stepper Circles**: Green fill for active step, green outline for inactive steps, connected by thin gray line
- **Border Radius (card)**: ~12-16px (soft rounded corners)
- **Border Radius (inputs)**: ~6-8px
- **Border Radius (buttons)**: ~24-30px (pill shape)
- **Drop Shadow (card)**: Subtle (`0 4px 24px rgba(0,0,0,0.08)`)

## Requirements

### Requirement: 4-step checkout wizard navigation

Users SHALL be able to navigate through a 4-step checkout wizard to complete a food store order.

#### Scenario: Step 1 displays basic details

- **WHEN** the user loads the page
- **THEN** the wizard shows Step 1 ("BASIC DETAILS") with fields for First Name, Last Name, Email ID, User ID, Country, State, and City

#### Scenario: Step 2 displays account/security details

- **WHEN** the user clicks "CONTINUE" on Step 1
- **THEN** the wizard shows Step 2 with account/security fields (password entry, username confirmation)

#### Scenario: Step 3 displays shipping details

- **WHEN** the user clicks "CONTINUE" on Step 2
- **THEN** the wizard shows Step 3 with shipping/delivery address fields

#### Scenario: Step 4 displays payment details

- **WHEN** the user clicks "CONTINUE" on Step 3
- **THEN** the wizard shows Step 4 with payment information fields (card number, expiry, CVV)

### Requirement: Step indicator with 4 connected circles

Users SHALL see a horizontal stepper showing their progress through the 4 steps.

#### Scenario: Active step has filled green circle

- **WHEN** the user is on any step
- **THEN** the current step's circle is filled with green (`#77CC6D`) and displays its icon in white

#### Scenario: Inactive steps have outlined green circles

- **WHEN** the user has not yet reached a step
- **THEN** that step's circle is outlined in green with its icon displayed in green outline

#### Scenario: Completed steps show filled green circle

- **WHEN** the user has completed a step and moved forward
- **THEN** that step's circle remains filled green to indicate completion

#### Scenario: Steps are connected by a line

- **WHEN** the stepper is rendered
- **THEN** all 4 step circles are connected by a thin horizontal gray line passing through their centers

#### Scenario: Step icons match step purpose

- **WHEN** the stepper is rendered
- **THEN** each step shows a relevant icon: Step 1 = shopping cart/produce, Step 2 = padlock (security), Step 3 = delivery truck (shipping), Step 4 = credit card (payment)

### Requirement: BACK and CONTINUE navigation buttons

Users SHALL have navigation buttons to move between wizard steps.

#### Scenario: CONTINUE button advances the wizard

- **WHEN** the user clicks "CONTINUE" on any step except the last
- **THEN** the wizard advances to the next step

#### Scenario: BACK button returns to previous step

- **WHEN** the user clicks "BACK" on Steps 2, 3, or 4
- **THEN** the wizard returns to the previous step with previously entered values preserved

#### Scenario: BACK button hidden on first step

- **WHEN** the user is on Step 1
- **THEN** the BACK button is not visible

#### Scenario: SUBMIT button on final step

- **WHEN** the user is on Step 4
- **THEN** the CONTINUE button is replaced with a "SUBMIT" or "PLACE ORDER" button

#### Scenario: Buttons are pill-shaped and green

- **WHEN** any navigation button is rendered
- **THEN** it has a solid green (`#77CC6D`) background, white uppercase text, and large border-radius (~24px pill shape)

### Requirement: Form fields with green icons

Each form input SHALL have a green icon on the right side indicating the field type.

#### Scenario: Name fields show person icon

- **WHEN** the First Name or Last Name field is rendered
- **THEN** a person/user icon appears on the right side in green

#### Scenario: Email field shows mail icon

- **WHEN** the Email ID field is rendered
- **THEN** a mail/envelope icon appears on the right side in green

#### Scenario: ID field shows ID card icon

- **WHEN** the User ID field is rendered
- **THEN** an ID card icon appears on the right side in green

#### Scenario: Location fields show map pin icons

- **WHEN** Country, State, or City fields are rendered
- **THEN** a map pin/flag icon appears on the right side in green

### Requirement: Form validation prevents advancing on invalid input

Users SHALL see validation feedback when attempting to advance with missing required fields.

#### Scenario: Empty required fields show error

- **WHEN** the user clicks "CONTINUE" on Step 1 without filling required fields
- **THEN** a validation message is shown indicating the field is required

#### Scenario: Invalid email shows error

- **WHEN** the user enters an invalid email format on Step 1
- **THEN** a validation message is shown indicating the email is invalid

### Requirement: Successful submission completes the wizard

Users SHALL see a confirmation screen after completing all steps.

#### Scenario: Confirmation screen shown after submission

- **WHEN** the user completes all steps and clicks "SUBMIT" / "PLACE ORDER"
- **THEN** a success/confirmation message is displayed (e.g. "Your order has been placed!")

#### Scenario: Reset after confirmation

- **WHEN** the user clicks "Start New Order" or similar on the confirmation screen
- **THEN** the wizard resets to Step 1 with all fields cleared

### Requirement: Centered card layout with warm background

The template SHALL display a centered white card on a textured warm background.

#### Scenario: White card is centered on page

- **WHEN** the page is rendered
- **THEN** a white card with soft rounded corners and subtle drop shadow is centered horizontally and vertically on the viewport

#### Scenario: Warm textured background

- **WHEN** the page is rendered
- **THEN** the background is a warm off-white/beige color with a subtle texture or grain feel

#### Scenario: Decorative food elements optional

- **WHEN** the page is rendered
- **THEN** the background may include decorative food-themed elements (leaves, produce) or a food-themed pattern, using placeholder images from picsum.photos

### Requirement: Responsive form layout

The form fields SHALL be responsive.

#### Scenario: 2-column layout on desktop

- **WHEN** the page is rendered on a desktop viewport (>768px)
- **THEN** name fields, email/ID fields, and location fields are displayed in 2-column rows, with the 3-column row for Country/State/City

#### Scenario: Single column on mobile

- **WHEN** the page is rendered on a mobile viewport (<768px)
- **THEN** all form fields stack vertically in a single column

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] 4-step wizard with correct step order (Basic Details → Account → Shipping → Payment)
- [ ] Stepper shows 4 connected circles with icons (cart, lock, truck, card)
- [ ] Active step circle filled green, inactive outlined green
- [ ] Steps connected by thin gray horizontal line
- [ ] Step 1 shows First Name, Last Name, Email ID, User ID, Country, State, City
- [ ] Green icons on right side of form inputs
- [ ] Pill-shaped green BACK/CONTINUE buttons
- [ ] BACK button hidden on Step 1
- [ ] CONTINUE → SUBMIT button swap on Step 4
- [ ] Form validation prevents advancing with missing required fields
- [ ] Email format validation
- [ ] Values preserved when navigating back
- [ ] Confirmation screen after successful submission
- [ ] Reset to Step 1 after confirmation
- [ ] Centered white card with rounded corners and drop shadow
- [ ] Warm off-white/beige textured background
- [ ] Responsive: 2-column on desktop, single column on mobile
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] All placeholder images use picsum.photos
- [ ] Typography: system sans-serif, clean and modern
