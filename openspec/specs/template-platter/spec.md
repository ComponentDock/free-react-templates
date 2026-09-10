# Spec: Platter — Restaurant Reservation Wizard Template

## Purpose

Recreation of ColorLib "Colorlib Wizard 7" (https://colorlib.com/wp/template/colorlib-wizard-7/)
as a React 19 + Tailwind CSS 4 + TypeScript single-page restaurant reservation wizard.
The original is a 3-step booking form with a split layout: food image on the left,
dark form panel on the right. Preview was 404; fell back to screenshot analysis.

## Requirements

### Requirement: Three-step reservation wizard

The template SHALL implement a 3-step wizard form for restaurant table booking.

#### Scenario: Step 1 — Select reservation details

- **WHEN** the page loads
- **THEN** the user sees a "Book a Table" heading, a "~ Check out our place ~" subheading, People/Date/Time fields, and a "NEXT" button
- **AND** the step indicator shows "1 / 3"

#### Scenario: Step 2 — Enter contact information

- **WHEN** the user fills in a date and clicks "NEXT"
- **THEN** the user sees a "Your Details" heading, Full Name/Email/Phone fields, and "BACK"/"NEXT" buttons
- **AND** the step indicator shows "2 / 3"

#### Scenario: Step 3 — Confirm booking

- **WHEN** the user fills in name and email and clicks "NEXT"
- **THEN** the user sees a "Confirm Booking" heading with a summary of all selections
- **AND** "BACK"/"CONFIRM" buttons and "3 / 3" indicator

#### Scenario: Confirmation success

- **WHEN** the user clicks "CONFIRM" on step 3
- **THEN** a "Reservation Confirmed!" success message is displayed

#### Scenario: Back navigation

- **WHEN** the user clicks "BACK" on step 2 or step 3
- **THEN** they return to the previous step with all previously entered data preserved

#### Scenario: Validation — empty date blocks navigation

- **WHEN** the date field is empty on step 1
- **THEN** clicking "NEXT" does not advance to step 2

### Requirement: Design fidelity

The template SHALL match the original's visual design tokens.

#### Scenario: Dark moody color scheme

- **THEN** the form panel uses a dark background (#1a1a2e)
- **AND** headings are white bold uppercase
- **AND** decorative subheading uses a copper/gold script font (#c9956b)
- **AND** form fields use white text with subtle underlines

#### Scenario: Split layout with food image

- **THEN** the left side displays a food photography placeholder image
- **AND** the right side displays the dark form panel

### Requirement: Mandatory footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Footer link

- **WHEN** the user scrolls to the footer
- **THEN** a "Made with Component Dock" link points to https://www.componentdock.com/

### Requirement: No ColorLib references in app code

The template SHALL NOT reference "colorlib" in any source file, comment, or asset.

#### Scenario: Provenance isolation

- **THEN** no file under apps/platter/ contains the string "colorlib"
