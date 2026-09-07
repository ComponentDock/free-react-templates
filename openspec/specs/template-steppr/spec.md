---
name: steppr
description: >
  Multi-step account registration and payment wizard form. Recreation of
  ColorLib "Colorlib Wizard 21" (https://colorlib.com/wp/template/colorlib-wizard-21/).
---

## Purpose

Steppr is a multi-step wizard form for account registration with payment details.
It provides a clean, guided UX with three steps: Account Information, Payment
Information, and a Confirmation Summary. The design features a centered white card
on a full-viewport background image, blue content areas, green accent buttons,
and circular step indicators.

## Requirements

### Requirement: Multi-step wizard form

Users SHALL be guided through three sequential steps to complete registration.

#### Scenario: Renders step 1 by default

- **WHEN** the page loads
- **THEN** the user sees Account Information fields (username, email, password, confirm password)
- **AND** the step indicator shows step 1 as active

#### Scenario: Navigate forward through steps

- **WHEN** the user clicks the Next button on step 1
- **THEN** the Payment Information fields are displayed
- **WHEN** the user clicks the Next button on step 2
- **THEN** the Confirmation Summary table is displayed

#### Scenario: Navigate backward through steps

- **WHEN** the user is on step 2 and clicks Previous
- **THEN** the Account Information fields are displayed again
- **WHEN** the user is on step 3 and clicks Previous
- **THEN** the Payment Information fields are displayed again

### Requirement: Step indicator shows correct state

The step indicator SHALL visually distinguish active, completed, and pending steps.

#### Scenario: Step indicator states

- **WHEN** the user is on step 2
- **THEN** step 1 shows as completed (green)
- **AND** step 2 shows as active (green with shadow)
- **AND** step 3 shows as pending (gray)

### Requirement: Account information form

Step 1 SHALL collect username, email, password, and confirm password.

#### Scenario: Required field validation

- **WHEN** the user attempts to proceed without filling required fields
- **THEN** the browser shows native validation messages

#### Scenario: Field data is preserved across steps

- **WHEN** the user fills step 1 and navigates to step 2
- **AND** navigates back to step 1
- **THEN** the previously entered data is still present

### Requirement: Payment information form

Step 2 SHALL collect card type, card number, CVC, and expiry date.

#### Scenario: Card type selection

- **WHEN** the user opens the Card Type dropdown
- **THEN** options include Business, Limited Purpose, Prepaid, Charge, and Student cards

### Requirement: Confirmation summary

Step 3 SHALL display all entered data in a read-only summary table.

#### Scenario: Summary displays all values

- **WHEN** the user reaches step 3
- **THEN** all entered account and payment data is shown in a table

### Requirement: Responsive layout

The wizard SHALL be responsive and usable on mobile devices.

#### Scenario: Mobile layout

- **WHEN** the viewport is narrow
- **THEN** form fields stack vertically
- **AND** the wizard card fills the available width

### Requirement: Footer with Component Dock link

The footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer branding

- **WHEN** the page renders
- **THEN** the footer contains a link to Component Dock
- **AND** the link opens in a new tab
