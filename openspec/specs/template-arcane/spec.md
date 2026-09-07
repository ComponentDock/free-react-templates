# Template: Arcane (Split-Screen Form Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 22 (`https://colorlib.com/wp/template/colorlib-wizard-22/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-22/` (unreachable at prep time — 404; fallback to ColorLib listing page CSS + screenshot)
- **New Name**: `arcane` (App directory: `apps/arcane`, Package: `@free-react-templates/arcane`)
- **Category**: Forms / Multi-step Wizard
- **Description**: A responsive split-screen form wizard for bookings, appointments, and similar multi-step flows. Left panel features a visual/illustration area; right panel houses the step-by-step form with progress indicator.
- **Source slug**: `colorlib-wizard-22`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-22.jpg` (1200×972, describes a split-screen layout with form on one side and visual on the other)

## Design Tokens (from reference CSS and ColorLib page)

| Token                 | Value                                                                                                                                     | Source                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Font family           | System sans-serif (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif`) | ColorLib page CSS                |
| Brand primary         | `#1a73e8` (blue)                                                                                                                          | `--wpex-accent`                  |
| Brand primary hover   | `#1464cc` (darker blue)                                                                                                                   | `--wpex-hover-link-color`        |
| Accent green          | `#77CC6D` (green)                                                                                                                         | `.ticon`, `.builder-top-icon`    |
| Body text color       | `#26282b` (near-black)                                                                                                                    | `--wpex-body-color`              |
| Body font size        | `16px`                                                                                                                                    | `--wpex-body-font-size`          |
| Body line height      | `1.8em`                                                                                                                                   | `--wpex-body-line-height`        |
| Border color          | `#eee` (light gray)                                                                                                                       | `.step-block`, `.intro-benefits` |
| Hover background      | `rgba(0,0,0,0.03)`                                                                                                                        | `.step-block:hover`              |
| Step indicator active | `#77CC6D` (green)                                                                                                                         | `.ticon` icon color              |
| Container width       | `1140px`                                                                                                                                  | `--wpex-container-width`         |
| Card min height       | `190px`                                                                                                                                   | `.intro-benefits`                |
| Card padding          | `30px`                                                                                                                                    | `.intro-benefits`                |
| Top bar background    | `#1a73e8` (blue)                                                                                                                          | `#top-bar-wrap`                  |
| Top bar text          | `#ffffff` (white)                                                                                                                         | `#top-bar` color                 |

## Layout Structure

This is a **split-screen** wizard — the viewport is divided into two halves:

1. **Left panel** (visual side): background image/illustration with branding overlay — decorative, not interactive
2. **Right panel** (form side): the multi-step form wizard

### Wizard Steps (3-step flow typical of ColorLib Wizard series)

| Step | Title           | Fields                                                          |
| ---- | --------------- | --------------------------------------------------------------- |
| 1    | Personal Info   | Full Name, Email, Phone                                         |
| 2    | Booking Details | Date picker, Time slot, Service type (select), Notes (textarea) |
| 3    | Confirmation    | Review summary, Terms checkbox, Submit button                   |

### Progress Indicator

- Horizontal step indicator at the top of the right panel
- Numbered circles (1, 2, 3) connected by a line
- Active step: green circle (`#77CC6D`) with white number
- Completed steps: green circle with checkmark
- Future steps: gray circle (`#eee` border) with gray number

## Gherkin Requirements

### Feature: Split-Screen Form Wizard

#### Scenario: Initial page load

- **GIVEN** the user navigates to the Arcane form wizard
- **THEN** a split-screen layout is displayed with a visual panel on the left and a form panel on the right
- **AND** the progress indicator shows Step 1 as active
- **AND** Step 1 form fields are visible: Full Name, Email, Phone

#### Scenario: Step 1 form fields are populated

- **GIVEN** the user is on Step 1
- **WHEN** the user types into the Full Name, Email, and Phone fields
- **THEN** each field reflects the entered text

#### Scenario: Step 1 validation - empty required fields

- **GIVEN** the user is on Step 1 with empty required fields
- **WHEN** the user clicks the "Next" button
- **THEN** inline validation error messages are displayed for Full Name, Email, and Phone
- **AND** the form does not advance to Step 2

#### Scenario: Step 1 validation - invalid email

- **GIVEN** the user is on Step 1
- **WHEN** the user enters "not-an-email" in the Email field and clicks "Next"
- **THEN** an email format validation error is displayed
- **AND** the form does not advance

#### Scenario: Advance to Step 2

- **GIVEN** the user has filled all required fields on Step 1 with valid data
- **WHEN** the user clicks "Next"
- **THEN** Step 2 "Booking Details" is displayed
- **AND** the progress indicator shows Step 1 as completed (green checkmark) and Step 2 as active
- **AND** Step 2 fields are visible: Date, Time slot, Service type, Notes

#### Scenario: Step 2 form fields

- **GIVEN** the user is on Step 2
- **THEN** a date picker is displayed for selecting the booking date
- **AND** a time slot selector is displayed
- **AND** a service type dropdown is displayed with options
- **AND** a Notes textarea is displayed

#### Scenario: Step 2 validation - empty required fields

- **GIVEN** the user is on Step 2 with empty required fields
- **WHEN** the user clicks "Next"
- **THEN** validation errors are shown for Date and Time slot
- **AND** the form does not advance

#### Scenario: Advance to Step 3

- **GIVEN** the user has filled all required fields on Step 2
- **WHEN** the user clicks "Next"
- **THEN** Step 3 "Confirmation" is displayed
- **AND** the progress indicator shows Steps 1 and 2 as completed and Step 3 as active

#### Scenario: Step 3 shows summary

- **GIVEN** the user is on Step 3
- **THEN** a summary of the entered data is displayed (name, email, phone, date, time, service)
- **AND** a Terms and Conditions checkbox is shown
- **AND** a "Submit" button is displayed

#### Scenario: Step 3 validation - terms not accepted

- **GIVEN** the user is on Step 3 without checking the Terms checkbox
- **WHEN** the user clicks "Submit"
- **THEN** a "You must accept the terms" error is displayed
- **AND** the form does not submit

#### Scenario: Successful submission

- **GIVEN** the user is on Step 3 with all data reviewed and terms accepted
- **WHEN** the user clicks "Submit"
- **THEN** a success screen is displayed with a confirmation message
- **AND** the success screen includes a "Start Over" button

#### Scenario: Start over

- **GIVEN** the success screen is displayed
- **WHEN** the user clicks "Start Over"
- **THEN** the wizard resets to Step 1 with all fields cleared
- **AND** the progress indicator resets to Step 1 active

#### Scenario: Back navigation

- **GIVEN** the user is on Step 2 or Step 3
- **WHEN** the user clicks the "Back" button
- **THEN** the wizard returns to the previous step
- **AND** the previously entered data is preserved in the form fields

#### Scenario: Back button hidden on Step 1

- **GIVEN** the user is on Step 1
- **THEN** the "Back" button is not visible

#### Scenario: Responsive layout on mobile

- **GIVEN** the user views the wizard on a mobile viewport (< 768px)
- **THEN** the split-screen layout collapses to a single column
- **AND** the visual panel is hidden or displayed as a small header
- **AND** the form panel takes full width
- **AND** all form fields remain accessible

#### Scenario: Split-screen visual panel

- **GIVEN** the user views the wizard on a desktop viewport (>= 768px)
- **THEN** the left panel displays a decorative visual/illustration
- **AND** the left panel occupies approximately 50% of the viewport
- **AND** the right panel with the form occupies the other 50%

## Verification Checklist

- [ ] Split-screen layout: left visual panel + right form panel on desktop
- [ ] 3-step wizard: Personal Info → Booking Details → Confirmation
- [ ] Horizontal progress indicator with numbered circles and connecting line
- [ ] Step 1: Full Name, Email, Phone fields with validation
- [ ] Step 2: Date, Time slot, Service type (select), Notes fields
- [ ] Step 3: Summary of entered data, Terms checkbox, Submit button
- [ ] Next/Back navigation between steps
- [ ] Back button hidden on Step 1
- [ ] Form validation prevents advancing with invalid/empty required fields
- [ ] Progress indicator updates: completed = green checkmark, active = green circle
- [ ] Success screen after submission with "Start Over" button
- [ ] Start Over resets wizard to Step 1
- [ ] Responsive: single-column on mobile (< 768px)
- [ ] Brand colors: blue (#1a73e8) for primary, green (#77CC6D) for accents/steps
- [ ] Font: system sans-serif stack
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
