---
name: stepforge
description: >
  Multi-step booking form wizard template — recreation of ColorLib Wizard 26
  (https://colorlib.com/wp/template/colorlib-wizard-26/).
  Three-step wizard: Personal Info → Booking → Confirm.
  Dark navy background (#383a4f), teal accent (#55e8d5), Open Sans font.
---

## Purpose

Stepforge is a multi-step booking form wizard that recreates the ColorLib Wizard 26 design under a
different name. It provides a three-step flow (Personal Info, Booking, Confirm) with a dark navy
background, teal accent colors, and Open Sans typography. Users fill in personal details, select
booking preferences, and review a summary before submitting.

## Requirements

### Requirement: Three-step wizard flow

The wizard SHALL display three sequential steps: Personal Info (step 1), Booking (step 2), and
Confirm (step 3). Only one step is visible at a time.

#### Scenario: Initial state shows step 1

- **WHEN** the user opens the wizard page
- **THEN** the heading "Form Booking Wizard" is visible
- **AND** the Personal Info form is displayed
- **AND** step 1 is marked as active

#### Scenario: Navigate to step 2

- **WHEN** the user clicks "Next" on step 1
- **THEN** step 2 (Booking Information) is displayed
- **AND** step 1 icon shows completed

#### Scenario: Navigate to step 3

- **WHEN** the user clicks "Next" on step 2
- **THEN** step 3 (Confirm Details) is displayed
- **AND** the summary table is shown

### Requirement: Step indicator reflects progress

The step indicator SHALL show all three steps with numbered icons. The current step and completed
steps use the teal accent color (#55e8d5). Inactive steps use gray (#cccccc).

#### Scenario: Active step styling

- **WHEN** the user is on step 2
- **THEN** step 1 icon shows completed (teal)
- **AND** step 2 icon shows active (teal)
- **AND** step 3 icon shows inactive (gray)

### Requirement: Personal Info form fields

Step 1 SHALL contain fields for First Name, Last Name, Phone Number, E-Mail, Date of Birth
(day/month/year selects), and Address Location.

#### Scenario: Fill personal info

- **WHEN** the user types in the First Name field
- **THEN** the field value updates

### Requirement: Booking form fields

Step 2 SHALL contain a Room selection dropdown, Organization Day date input, and Time Open dropdown.
It SHALL display a booking image placeholder.

#### Scenario: Select room

- **WHEN** the user selects a room from the dropdown
- **THEN** the selected room value updates

### Requirement: Confirmation summary

Step 3 SHALL display a summary table with Full Name, Room, Day, Time, and Price. Empty fields
SHALL show a dash placeholder.

#### Scenario: Review confirmation

- **WHEN** the user reaches step 3
- **THEN** the table shows all booking details
- **AND** the Submit button is visible

### Requirement: Submit flow

Clicking Submit SHALL show a confirmation screen with a "Booking Confirmed!" message.

#### Scenario: Submit booking

- **WHEN** the user clicks "Submit" on step 3
- **THEN** a "Booking Confirmed!" message is displayed
- **AND** the user's first name appears in the thank-you text

### Requirement: Footer with Component Dock link

Every template footer MUST link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text includes "Component Dock"
