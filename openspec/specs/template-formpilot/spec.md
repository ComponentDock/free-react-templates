# Template: FormPilot (ColorLib Wizard 21 Form Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 21 (`https://colorlib.com/wp/template/colorlib-wizard-21/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-21/` (NOTE: preview was unreachable at prep time; design tokens inferred from the ColorLib description and wizard-series pattern)
- **New Name**: `formpilot` (App directory: `apps/formpilot`, Package: `@free-react-templates/formpilot`)
- **Category**: Forms / Multi-step Wizard
- **Description**: A free account and payment details template with confirmation. Multi-step form wizard featuring account setup, payment details entry, and a confirmation/review screen. Responsive layout with configurable design. Part of the ColorLib Wizard series (Bootstrap form templates).
- **Source slug**: `colorlib-wizard-21`

## Design Tokens

> NOTE: Preview was unreachable at prep time. Tokens below are inferred from the ColorLib description ("account and payment details template with confirmation") and the established Colorlib Wizard series pattern (see wizardry / Wizard 27, runewizard / Wizard 15 for reference).

| Token | Value | Source / Rationale |
|-------|-------|--------------------|
| Font family (headings) | `'Montserrat', sans-serif` | Wizard series convention (consistent across Wizard 21–30) |
| Font family (body) | `'Open Sans', sans-serif` | Wizard series convention |
| Primary background | Gradient: blue → pink → gold | Wizard series convention (consistent background treatment) |
| Card background | `#fff` (white) | Standard wizard card pattern |
| Card border radius | `10px` | Wizard series convention |
| Card shadow | `0 3px 10px rgba(0,0,0,0.1)` | Wizard series convention |
| Button primary | Blue / indigo accent | Consistent with series |
| Step indicator | Numbered circles with active/completed states | Vertical sidebar pattern |
| Active step color | Brand blue or green | Series convention |
| Completed step indicator | Checkmark icon | Series convention |

## Gherkin Requirements

### Feature: Multi-Step Account and Payment Wizard

#### Scenario: Step 1 — Account Setup
- **GIVEN** the user loads the FormPilot wizard
- **WHEN** Step 1 is displayed
- **THEN** the heading "Account Setup" (or equivalent) is visible
- **AND** form fields are shown: email, password, confirm password
- **AND** the progress indicator shows Step 1 as active

#### Scenario: Step 1 — Form Validation
- **GIVEN** the user is on Step 1
- **WHEN** the user clicks "Next" without filling required fields
- **THEN** inline validation errors appear for email, password, and confirm password
- **AND** the form does not advance

#### Scenario: Step 1 — Email Format Validation
- **GIVEN** the user is on Step 1
- **WHEN** the user enters an invalid email format and clicks "Next"
- **THEN** an email format validation error is displayed

#### Scenario: Step 1 — Password Mismatch
- **GIVEN** the user is on Step 1
- **WHEN** the user enters different values in password and confirm password
- **THEN** a "passwords do not match" error is displayed

#### Scenario: Step 2 — Payment Details
- **GIVEN** the user has completed Step 1 with valid data
- **WHEN** Step 2 is displayed
- **THEN** the heading "Payment Details" (or equivalent) is visible
- **AND** form fields are shown: card holder name, card number, CVC, expiration date
- **AND** the progress indicator shows Step 1 as completed (checkmark) and Step 2 as active

#### Scenario: Step 2 — Form Validation
- **GIVEN** the user is on Step 2
- **WHEN** the user clicks "Next" with empty payment fields
- **THEN** validation errors are shown for card holder name, card number, CVC, and expiration date
- **AND** the form does not advance

#### Scenario: Step 3 — Confirmation / Review
- **GIVEN** the user has completed Steps 1 and 2 with valid data
- **WHEN** Step 3 is displayed
- **THEN** a confirmation/review screen is shown summarizing the entered information
- **AND** the progress indicator shows Steps 1 and 2 as completed and Step 3 as active

#### Scenario: Step 3 — Agreement or Final Confirmation
- **GIVEN** the user is on Step 3
- **WHEN** the user clicks "Submit" or "Confirm"
- **THEN** the wizard completes and a success screen is displayed

#### Scenario: Success Screen
- **GIVEN** the user has submitted the wizard successfully
- **WHEN** the success screen is shown
- **THEN** a completion message is displayed (e.g. "Registration Complete")
- **AND** a "Start Over" button resets the wizard to Step 1

#### Scenario: Navigation — Back Button
- **GIVEN** the user is on Step 2 or Step 3
- **WHEN** the user clicks "Back"
- **THEN** the wizard returns to the previous step
- **AND** previously entered data is preserved

#### Scenario: Navigation — Back Button Hidden on First Step
- **GIVEN** the user is on Step 1
- **WHEN** the page renders
- **THEN** the Back button is not visible

#### Scenario: Step Indicator Progress
- **GIVEN** the wizard form is loaded
- **WHEN** the user advances through steps
- **THEN** a vertical sidebar step indicator is displayed on the left
- **AND** step numbers (1, 2, 3) are shown in circles
- **AND** the current step is highlighted with a brand color background
- **AND** completed steps show a checkmark

#### Scenario: Responsive Layout
- **GIVEN** the form is displayed on a mobile viewport
- **WHEN** the page renders
- **THEN** the layout adjusts to single-column (stacked)
- **AND** all form fields remain accessible and usable

### Requirement: Footer with Component Dock branding
Every template's footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer contains Component Dock link
- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] Multi-step form renders with 3 steps (Account Setup, Payment Details, Confirmation)
- [ ] Vertical progress sidebar with numbered steps and checkmarks
- [ ] Step 1: Account setup form with email, password, confirm password fields
- [ ] Step 2: Payment details form with card holder, card number, CVC, expiration
- [ ] Step 3: Confirmation/review screen with summary and submit
- [ ] Next/Back navigation between steps with data preservation
- [ ] Form validation on required fields at each step
- [ ] Password mismatch detection
- [ ] Email format validation
- [ ] Success screen after final submission with "Start Over" option
- [ ] Step indicator updates correctly on step changes
- [ ] Brand gradient background (blue → pink → gold)
- [ ] White card with rounded corners and shadow
- [ ] Font: Montserrat (headings), Open Sans (body)
- [ ] Responsive layout (single-column on mobile)
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
