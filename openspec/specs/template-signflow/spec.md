# Spec: SignFlow

## Purpose

SignFlow is a free user registration form template recreating ColorLib "Reg Form V10"
(https://colorlib.com/wp/template/colorlib-regform-10/). It features a centered white
card on a light blue background with a large semi-transparent "Sign up" watermark
heading, a radio-button user-type selector (New bee / Average / Master), three
stacked text inputs (Full name, Email, Password) with left-aligned labels, a
terms-of-service checkbox, and a full-width blue "Create account" submit button.

**Preview URL:** https://colorlib.com/etc/regform/colorlib-regform-10/
**Source page:** https://colorlib.com/wp/template/colorlib-regform-10/
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Requirements

### Requirement: Page layout

The page SHALL render a light blue (#e7f0fd) full-viewport background with a single centered white card.

#### Scenario: Card is centered on the blue background

- **WHEN** I visit the SignFlow page
- **THEN** I see a white card centered horizontally on a light blue background
- **AND** the card has a subtle drop shadow and rounded corners (10px)
- **AND** the card is 520px wide (full-width minus 30px padding on mobile)

### Requirement: Watermark heading

The page SHALL display a large semi-transparent "Sign up" heading positioned above/overlapping the card area.

#### Scenario: Watermark heading is visible

- **WHEN** I visit the SignFlow page
- **THEN** I see a large "Sign up" text in white at 174px font-size
- **AND** the heading has 50% opacity
- **AND** the heading is positioned at the top-right area above the card

### Requirement: User type radio group

The form SHALL display a heading "What type of user are you?" followed by three radio-button options styled as pill toggles.

#### Scenario: Radio options are visible

- **WHEN** I visit the SignFlow page
- **THEN** I see a heading "What type of user are you?"
- **AND** I see three options: "New bee", "Average", "Master"
- **AND** "New bee" is selected by default

#### Scenario: Selecting a radio option highlights it

- **WHEN** I click the "Master" radio option
- **THEN** the "Master" option becomes highlighted with a blue (#1da0f2) background and white text
- **AND** the previously selected option returns to its unselected state (white background, grey border, grey text)

### Requirement: Full name input

The form SHALL contain a text input labeled "Full name" with the label positioned inside the input field on the left side.

#### Scenario: Full name field is visible

- **WHEN** I visit the SignFlow page
- **THEN** I see a text input with "Full name" label inside it
- **AND** the input has a 2px #ebebeb border with 5px top border-radius

### Requirement: Email input

The form SHALL contain an email input labeled "Email" positioned between the Full name and Password fields.

#### Scenario: Email field is visible

- **WHEN** I visit the SignFlow page
- **THEN** I see an email input with "Email" label inside it
- **AND** the input has left and right borders only (no top or bottom border — it shares borders with adjacent fields)

### Requirement: Password input

The form SHALL contain a password input labeled "Password" at the bottom of the input stack.

#### Scenario: Password field is visible

- **WHEN** I visit the SignFlow page
- **THEN** I see a password input with "Password" label inside it
- **AND** the input has a 2px #ebebeb border with 5px bottom border-radius

### Requirement: Terms checkbox

The form SHALL contain a checkbox for agreeing to the Terms of Service.

#### Scenario: Terms checkbox is visible

- **WHEN** I visit the SignFlow page
- **THEN** I see a checkbox labeled "I agree all statements in Terms of service"
- **AND** "Terms of service" is a blue (#1da0f2) link

#### Scenario: Unchecked checkbox blocks submission

- **WHEN** the terms checkbox is unchecked and I click "Create account"
- **THEN** the form does not submit

### Requirement: Submit button

The form SHALL contain a full-width "Create account" button with a blue background.

#### Scenario: Submit button is visible

- **WHEN** I visit the SignFlow page
- **THEN** I see a "Create account" button with a blue (#1da0f2) background
- **AND** the button text is white, bold, 13px, with 5px border-radius

#### Scenario: Submitting the form shows a success message

- **WHEN** I fill in all fields, check the terms checkbox, and click "Create account"
- **THEN** I see a "Registration successful!" message
- **AND** the form fields are replaced by the success state

### Requirement: Login link

The card SHALL display an "Already have an account? Log in" link below the form.

#### Scenario: Login link is visible

- **WHEN** I visit the SignFlow page
- **THEN** I see text "Already have an account?"
- **AND** I see a "Log in" link in blue (#1da0f2)

### Requirement: Footer

The page SHALL include a footer with a Component Dock credit link.

#### Scenario: Footer link is visible

- **WHEN** I visit the SignFlow page
- **THEN** I see a link to https://www.componentdock.com/ labeled "Component Dock"

### Requirement: Responsive layout

The form card SHALL be responsive and usable on mobile devices.

#### Scenario: Card scales on mobile

- **WHEN** the viewport is 768px wide or less
- **THEN** the card width is full viewport minus 30px padding

#### Scenario: Radio buttons stack on small screens

- **WHEN** the viewport is 575px wide or less
- **THEN** the radio options stack vertically instead of inline

## Verification checklist

- [ ] Light blue (#e7f0fd) background renders
- [ ] White card centered with 10px radius and shadow
- [ ] "Sign up" watermark visible (174px, white, 50% opacity)
- [ ] "What type of user are you?" heading visible
- [ ] Three radio options render as pill toggles (New bee, Average, Master)
- [ ] Default selection is "New bee"
- [ ] Radio selection highlights with blue (#1da0f2) background
- [ ] Full name input with left-aligned label
- [ ] Email input with left-aligned label
- [ ] Password input with left-aligned label
- [ ] Input stack has connected borders (name top radius, password bottom radius, email middle)
- [ ] Terms checkbox with "Terms of service" link
- [ ] "Create account" button full-width, blue, white text
- [ ] Success state renders on valid submission
- [ ] "Already have an account? Log in" link visible
- [ ] Footer with Component Dock link
- [ ] Responsive: card scales at 768px, radios stack at 575px
- [ ] 100% test coverage (lines, functions, branches, statements)
