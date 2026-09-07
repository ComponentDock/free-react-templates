# Template: BookFlow (Form Booking Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 26" — a 3-step meeting-room booking wizard with step indicators, form fields, and a confirmation summary table. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-26/index.html (live CSS served). Source slug: `colorlib-wizard-26`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with step indicators, form validation, and confirmation summary view.

## Design Tokens (from reference CSS)

| Token                        | Value                               | Source                                    |
| ---------------------------- | ----------------------------------- | ----------------------------------------- |
| Font family                  | `'Open Sans', sans-serif`           | Google Fonts `opensans-font.css`          |
| Page background              | `#383a4f` (dark charcoal-navy)      | `.page-content`                           |
| Wizard card background       | `#525575` (muted purple-grey)       | `.wizard-v6-content .wizard-form`         |
| Step indicator text          | `#333`                              | `.step-text`                              |
| Step active/complete icon bg | `#55e8d5` (mint-teal)               | `.current .step-icon`, `.done .step-icon` |
| Step inactive icon bg        | `#ccc` (light grey)                 | `.step-icon`                              |
| Accent / link color          | `#55e8d5` (mint-teal)               | Label focus, table values                 |
| Button primary bg            | `#43ccba` (teal)                    | `.actions ul li`                          |
| Button hover bg              | `#32998b` (darker teal)             | `.actions ul li:hover`                    |
| Heading text                 | `#fff` (white)                      | `.form-heading h3`, labels                |
| Step counter text            | `#ccc` (muted)                      | `.form-heading span`                      |
| Muted label text             | `rgba(255,255,255,0.5)`             | Table `<th>`                              |
| Input border                 | `rgba(255,255,255,0.3)`             | Input bottom-border                       |
| Input text color             | `#fff`                              | `.form-control`                           |
| Select option text           | `#666`                              | Select options (white bg)                 |
| Card border-radius           | `10px`                              | `.wizard-v6-content`                      |
| Step icon box-shadow         | `0px 4px 11px 0px rgba(0,0,0,0.14)` | `.step-icon`                              |
| Card box-shadow              | `0px 8px 20px 0px rgba(0,0,0,0.15)` | `.wizard-v6-content`                      |
| Button border-radius         | `5px`                               | Action buttons                            |
| Date select border-radius    | `5px`                               | `.form-row-date select`                   |

## Gherkin Requirements

### Feature: Multi-Step Meeting Room Booking Wizard

#### Scenario: Page load and layout

- **GIVEN** the user navigates to the BookFlow page
- **THEN** a dark background page is displayed with heading "Form Booking Wizard"
- **AND** a 910px-wide card with rounded corners and shadow is centered on the page

#### Scenario: Step indicator bar displays three steps

- **GIVEN** the wizard form loads
- **THEN** a horizontal step indicator shows three steps: "Personal Info", "Booking", "Confirm"
- **AND** step 1 has a mint-teal (#55e8d5) icon background
- **AND** steps 2 and 3 have light grey (#ccc) icon backgrounds

#### Scenario: Step 1 — Personal Info form fields

- **GIVEN** the user is on step 1
- **THEN** the heading "Personal Info" with counter "1/3" is visible
- **AND** fields are displayed: First Name, Last Name, Phone Number, E-Mail
- **AND** a Date of Birth row with three dropdowns (Day, Month, Year) is shown
- **AND** an Address Location field spans full width

#### Scenario: Step 1 validation — empty required fields

- **GIVEN** the user is on step 1 with empty required fields
- **WHEN** the user clicks "Next"
- **THEN** the form does not advance to step 2

#### Scenario: Step 1 to step 2 navigation

- **GIVEN** all required fields on step 1 are filled
- **WHEN** the user clicks "Next"
- **THEN** step 2 "Booking" is displayed
- **AND** the step indicator shows step 1 as done (mint-teal icon) and step 2 as current

#### Scenario: Step 2 — Booking form fields

- **GIVEN** the user is on step 2
- **THEN** the heading "Booking Infomation" with counter "2/3" is visible
- **AND** a room booking image is displayed
- **AND** a "Choose a Room" dropdown is shown with options: "Daily Design Meeting - Meeting Room No.1", "Single", "Double"
- **AND** an "Organization Day" date field with placeholder "15 / 08 / 2018" is shown
- **AND** a "Time Open" dropdown with time slots is shown

#### Scenario: Step 2 to step 3 navigation

- **GIVEN** the user has selected a room, day, and time on step 2
- **WHEN** the user clicks "Next"
- **THEN** step 3 "Confirm" is displayed
- **AND** the step indicator shows step 2 as done and step 3 as current

#### Scenario: Step 3 — Confirmation summary table

- **GIVEN** the user is on step 3
- **THEN** the heading "Comfirm Details" with counter "3/3" is visible
- **AND** a summary table displays: Full Name, Room, Day, Time, Price (40.00$)
- **AND** table labels are in muted white, values are in mint-teal bold

#### Scenario: Back button functionality

- **GIVEN** the user is on step 2 or step 3
- **WHEN** the user clicks "Back"
- **THEN** the wizard returns to the previous step
- **AND** the step indicator updates to reflect the previous state

#### Scenario: Back button hidden on step 1

- **GIVEN** the user is on step 1
- **THEN** the "Back" button is not visible

#### Scenario: Submit on step 3

- **GIVEN** the user is on step 3 with all information confirmed
- **WHEN** the user clicks "Submit"
- **THEN** a confirmation action occurs (submission handler fires)

#### Scenario: Responsive layout — tablet

- **GIVEN** the viewport width is between 576px and 991px
- **THEN** the wizard card width is 90% of the viewport
- **AND** step icons and text stack vertically within each step indicator

#### Scenario: Responsive layout — mobile

- **GIVEN** the viewport width is less than 576px
- **THEN** form rows stack vertically (single column)
- **AND** date dropdowns become full-width and stacked
- **AND** the step counter text ("1/3") is hidden

## Verification Checklist

- [ ] Page loads with dark background (#383a4f) and centered wizard card
- [ ] Three-step horizontal indicator with correct colors
- [ ] Step 1: Personal Info fields all present with floating labels
- [ ] Step 1: Date of Birth dropdowns functional
- [ ] Step 1: Validation prevents advancing with empty required fields
- [ ] Step 2: Booking form with room image, dropdowns, date field
- [ ] Step 3: Confirmation table with correct data and mint-teal values
- [ ] Back button works on steps 2 and 3, hidden on step 1
- [ ] Next button advances correctly through all steps
- [ ] Submit on step 3 triggers confirmation action
- [ ] Responsive at 576px breakpoint (mobile layout)
- [ ] Responsive at 991px breakpoint (tablet layout)
- [ ] Design tokens match: #383a4f bg, #525575 card, #55e8d5 accent, #43ccba button, Open Sans font
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code, only in spec/docs
