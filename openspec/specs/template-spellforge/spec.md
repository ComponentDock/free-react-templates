# Template: Spellforge (Colorlib Wizard 8 Food Store Checkout)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 8 (`https://colorlib.com/wp/template/colorlib-wizard-8/`)
- **New Name**: `spellforge` (App directory: `apps/spellforge`, Package: `@free-react-templates/spellforge`)
- **Category**: Forms / Multi-step Wizard / Food Store Checkout
- **Description**: A food/meal service 4-step checkout wizard with earthy green accents, circular step indicator icons connected by dashed lines, and a warm linen-textured background with food-themed decorative elements.
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-8/` (404 — unreachable at time of research; design derived from screenshot + Colorlib page metadata)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-8.jpg`

## Design Tokens

- **Brand Color**: Earthy green `#88b34a` (active step fill, buttons, outline rings)
- **Page Background**: Warm linen/off-white `#f5f2ec` with decorative food imagery in corners (spices, peppercorns, basil, tomatoes)
- **Card Background**: White `#ffffff`, rounded corners (~8–10px), subtle gray drop shadow
- **Heading Text**: Dark gray `#333333`, bold, uppercase for section titles
- **Step Label Text**: Medium gray `#444444`, uppercase, small size
- **Input Borders**: Light gray `#e0e0e0`, small rounded corners (~4–6px)
- **Placeholder Text**: Light gray `#999999`
- **Dashed Connector Lines**: Light gray `#d1d1d1`
- **Pre-filled Field Background**: Light blue-gray `#e8f0f8`
- **Typography**: Geometric sans-serif (Poppins or similar) — clean, modern, with clear weight hierarchy
- **Button Style**: Solid green `#88b34a`, white uppercase bold text, rounded corners matching input radius
- **Step Indicator**: Circular icons — active = filled green circle + white icon; inactive = green outline + green icon
- **Layout**: Centered card, 2-column responsive form grid, generous vertical spacing (~15–30px)

## Requirements

### Requirement: 4-step wizard progress indicator

Users SHALL see a horizontal 4-step progress indicator with circular icons connected by dashed lines.

#### Scenario: Step indicator displays all 4 steps

- **WHEN** the user loads the page
- **THEN** the wizard displays 4 circular step icons labeled "STEP 01" through "STEP 04" connected by dashed gray lines

#### Scenario: Active step is visually distinct

- **WHEN** the user is on Step 1
- **THEN** Step 1's circle is filled solid green with a white fork/spoon icon inside, while steps 2–4 show green-outlined circles with green icons (lock, storefront, truck)

#### Scenario: Completed steps show checkmark

- **WHEN** the user advances to Step 2
- **THEN** Step 1 shows a completed checkmark icon and Step 2 becomes the active filled circle

### Requirement: Step 1 — Basic Details form

Users SHALL be able to fill in personal basic details on the first step.

#### Scenario: Step 1 form fields are displayed

- **WHEN** the user is on Step 1 (Basic Details)
- **THEN** the form displays fields for First Name, Last Name, Email ID, User ID, Country, State, City, Phone Number, and Password

#### Scenario: Step 1 form has two-column layout

- **WHEN** the user views Step 1
- **THEN** First Name and Last Name are displayed side by side, Email ID and User ID are side by side, and Country/State/City are in a 3-column row

#### Scenario: Each input has an icon

- **WHEN** the user views any form field on Step 1
- **THEN** each input displays a relevant icon on the right edge (person, envelope, globe, pin, phone, eye for password)

### Requirement: Step 2 — Security/Account form

Users SHALL provide account security details on the second step.

#### Scenario: Step 2 fields are displayed

- **WHEN** the user advances to Step 2
- **THEN** the form displays fields related to account security (username, password, security question)

### Requirement: Step 3 — Store/Order form

Users SHALL provide store or order details on the third step.

#### Scenario: Step 3 fields are displayed

- **WHEN** the user advances to Step 3
- **THEN** the form displays fields related to store or order configuration

### Requirement: Step 4 — Delivery/Shipping form

Users SHALL provide delivery information on the final step.

#### Scenario: Step 4 fields are displayed

- **WHEN** the user advances to Step 4
- **THEN** the form displays fields related to delivery or shipping details (address, city, postal code)

### Requirement: Navigation buttons

Users SHALL have Back and Continue buttons for wizard navigation.

#### Scenario: Back button hidden on first step

- **WHEN** the user is on Step 1
- **THEN** the Back button is not visible

#### Scenario: Back button visible on later steps

- **WHEN** the user is on Step 2 or later
- **THEN** a Back button is visible that returns to the previous step

#### Scenario: Continue button advances to next step

- **WHEN** the user clicks Continue on a non-final step
- **THEN** the wizard advances to the next step and updates the progress indicator

#### Scenario: Submit button on final step

- **WHEN** the user is on Step 4 (the final step)
- **THEN** the Continue button is replaced with a Submit button

### Requirement: Form validation prevents advancing on invalid input

Users SHALL see validation feedback when attempting to advance with missing required fields.

#### Scenario: Empty required fields prevent advancement

- **WHEN** the user clicks Continue with empty required fields
- **THEN** the wizard does not advance and indicates which fields are required

### Requirement: Successful submission completes the wizard

Users SHALL see a confirmation after completing all steps.

#### Scenario: Successful completion

- **WHEN** the user completes all 4 steps with valid data and clicks Submit
- **THEN** a success/confirmation screen is displayed

### Requirement: Footer with Component Dock branding

Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] 4-step horizontal progress indicator with circular icons and dashed connectors
- [ ] Active step: filled green circle (#88b34a) + white icon
- [ ] Inactive steps: green-outlined circles with green icons
- [ ] Step labels: "STEP 01" through "STEP 04" in uppercase
- [ ] Card: white background, rounded corners (~8–10px), drop shadow, centered
- [ ] Page background: warm off-white (#f5f2ec) with food-themed decorative elements
- [ ] Form fields with right-side icons (person, envelope, globe, pin, phone, lock/eye)
- [ ] 2-column responsive form layout (Country/State/City = 3-column)
- [ ] Input borders: light gray (#e0e0e0), placeholder text: #999999
- [ ] Buttons: solid green (#88b34a), white uppercase text, rounded
- [ ] Back button hidden on Step 1, visible on Steps 2–4
- [ ] Continue → Submit transition on final step
- [ ] Form validation prevents empty required field advancement
- [ ] Success screen after completing all steps
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] Font: Poppins (or equivalent geometric sans-serif) via Google Fonts
- [ ] Placeholder images via picsum.photos/seed/spellforge-N/W/H
- [ ] Icons from lucide-react
