# Template: SpellForge (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 21" — a multi-step account registration wizard with payment details and confirmation. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-21/index.html. Source slug: `colorlib-wizard-21`. ColorLib listing: https://colorlib.com/wp/template/colorlib-wizard-21/.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with step progress indicator, form validation, and confirmation summary.

## Design Tokens (from reference CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Raleway', sans-serif` | Google Fonts (css/raleway-font.css) |
| Card background | `#fff` (white) | `.wizard-v1-content` |
| Card width | `851px` | `.wizard-v1-content` |
| Card border-radius | `10px` | `.wizard-v1-content` |
| Card shadow | `0px 8px 20px rgba(0,0,0,0.15)` | `.wizard-v1-content` |
| Content area background | `#359bfa` (bright blue) | `.form-register .content` |
| Content area border-radius | `5px` | `.form-register .content` |
| Input background | `#2f8be0` (darker blue) | `.form-holder input, select` |
| Input border-radius | `5px` | `.form-holder input` |
| Input text color | `#fff` (white) | `.form-holder input` |
| Placeholder color | `rgba(255,255,255,0.6)` | `.form-holder input::placeholder` |
| Label color | `#fff` (white) | `.form-holder label` |
| Label font-size | `16px` | `.form-holder label` |
| Label font-weight | `500` | `.form-holder label` |
| Step icon size | `50px × 50px` | `.step-icon` |
| Step icon border-radius | `50%` (circle) | `.step-icon` |
| Step icon active bg | `#6eba2a` (green) | `.current a .step-icon, .done a .step-icon` |
| Step icon inactive bg | `#ccc` (light gray) | `.step-icon` |
| Step icon active shadow | `0px 5px 18px rgba(0,0,0,0.2)` | `.current a .step-icon` |
| Connector line bg | `#e5e5e5` | `li::before` |
| Connector line height | `6px` | `li::before` |
| Step text color | `#333` | `.step-text` |
| Step text font-weight | `600` | `.step-text` |
| Step number color | `#666` | `.step-number` |
| Step number font-weight | `400` | `.step-number` |
| Header h3 color | `#333` | `.wizard-header h3` |
| Header h3 font-size | `36px` | `.wizard-header h3` |
| Header h3 font-weight | `800` | `.wizard-header h3` |
| Header p color | `#666` | `.wizard-header p` |
| Header p font-size | `16px` | `.wizard-header p` |
| Header p font-weight | `600` | `.wizard-header p` |
| Action button bg | `#6eba2a` (green) | `.actions ul li` |
| Action button border-radius | `50%` (circle) | `.actions ul li` |
| Action button shadow | `0px 3px 15px rgba(0,0,0,0.19)` | `.actions ul li` |
| Action button hover bg | `#5fa125` (darker green) | `.actions ul li:hover` |
| Previous button bg | `transparent` | `.actions ul li:first-child` |
| Previous button text | `#666` | `.actions ul li:first-child a` |
| Confirmation table text | `#fff` | `.table-responsive tbody td` |
| Confirmation table label | `rgba(255,255,255,0.6)` | `.table-responsive tbody th` |
| Page background | Image (full-screen cover) | `.page-content` background-image |

## Requirements

### Feature: Multi-Step Account Registration Wizard

#### Scenario: Page Load and Layout

- **GIVEN** the user navigates to the SpellForge wizard
- **WHEN** the page loads
- **THEN** a full-screen background image is displayed
- **AND** a white card (851px wide, border-radius 10px, shadow) is centered on the page
- **AND** the card contains a step progress indicator at the top
- **AND** the first step form is visible

#### Scenario: Step Progress Indicator

- **GIVEN** the wizard is loaded
- **THEN** three step indicators are displayed horizontally
- **AND** each step shows a circular icon (50px), step number, and step text
- **AND** step icons are connected by gray lines (#e5e5e5, 6px height)
- **AND** the current step icon has a green background (#6eba2a)
- **AND** inactive step icons have a gray background (#ccc)

#### Scenario: Step 1 — Account Information

- **GIVEN** the wizard is on step 1
- **THEN** the heading "Account Information" is visible
- **AND** the step icon shows a person/account icon
- **AND** the form fields displayed are: Username, Email Address, Password, Confirm Password
- **AND** all fields are required
- **AND** the "Next" button (green circular) is visible
- **AND** no "Previous" button is shown on step 1

#### Scenario: Step 1 Validation

- **GIVEN** the user is on step 1
- **WHEN** the user clicks "Next" without filling required fields
- **THEN** validation errors appear for empty required fields
- **AND** the form does not advance to step 2

#### Scenario: Step 1 to Step 2 Navigation

- **GIVEN** the user has filled all required fields on step 1
- **WHEN** the user clicks "Next"
- **THEN** the form transitions to step 2
- **AND** the step progress indicator updates (step 1 icon stays green, step 2 icon turns green)

#### Scenario: Step 2 — Payment Information

- **GIVEN** the wizard is on step 2
- **THEN** the heading "Payment Information" is visible
- **AND** the step icon shows a card/credit-card icon
- **AND** the form fields displayed are: Card Type (select), Card Number, CVC, Expiry Month (select), Expiry Year (select)
- **AND** the "Previous" button and "Next" button are both visible

#### Scenario: Step 2 Card Type Options

- **GIVEN** the wizard is on step 2
- **WHEN** the Card Type select is opened
- **THEN** the options include: Business Credit Cards, Limited Purpose Cards, Prepaid Cards, Charge Cards, Student Credit Cards

#### Scenario: Step 2 to Step 3 Navigation

- **GIVEN** the user has filled payment fields on step 2
- **WHEN** the user clicks "Next"
- **THEN** the form transitions to step 3
- **AND** the step progress indicator updates (steps 1-2 icons green, step 3 icon green)

#### Scenario: Step 3 — Confirmation

- **GIVEN** the wizard is on step 3
- **THEN** the heading "Confirm Your Details" is visible
- **AND** the step icon shows a receipt icon
- **AND** a summary table displays all entered information from steps 1 and 2
- **AND** field labels are shown in muted white text
- **AND** field values are shown in white text
- **AND** the "Previous" button and a submit/confirm button are visible

#### Scenario: Step 3 Back Navigation

- **GIVEN** the wizard is on step 3
- **WHEN** the user clicks "Previous"
- **THEN** the form returns to step 2
- **AND** the previously entered payment data is preserved

#### Scenario: Form Submission

- **GIVEN** the user is on step 3 and has reviewed their details
- **WHEN** the user clicks the confirm/submit button
- **THEN** the form is submitted
- **AND** a success state or redirect occurs

#### Scenario: Responsive Design

- **GIVEN** the user views the wizard on a mobile device
- **THEN** the card adjusts to fit the screen width
- **AND** form fields stack vertically
- **AND** the step indicator remains visible

#### Scenario: Brand Footer

- **GIVEN** any page of the wizard
- **THEN** a footer link to "Component Dock" (https://www.componentdock.com/) is present

## Verification checklist

- [ ] Raleway font loaded from Google Fonts
- [ ] Full-screen background image applied to page
- [ ] White card centered with correct dimensions, border-radius, and shadow
- [ ] Step progress indicator with 3 steps, circles, connectors
- [ ] Active step icon green (#6eba2a), inactive gray (#ccc)
- [ ] Step 1: Account Information form with 4 required fields
- [ ] Step 2: Payment Information form with card type select, card number, CVC, month/year selects
- [ ] Step 3: Confirmation summary table with all entered data
- [ ] Navigation: Next/Previous buttons work correctly
- [ ] Form validation on step 1 prevents empty submissions
- [ ] Green circular action buttons with shadow
- [ ] Previous button transparent with gray text
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] All placeholder images use picsum.photos with deterministic seeds
