# Template: RuneWizard (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 15" — a multi-step financial sign-up wizard form with progress tracking. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-15/index.html. Source slug: `colorlib-wizard-15`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with progress indicator, form validation, and bank account selection.

## Design Tokens (from reference CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Roboto Slab', serif` | Google Fonts |
| Primary background | `#222` (dark charcoal) | `.main` |
| Form background | `#fff` (white) | `.signup-form` |
| Text color | `#222` (near-black) | Body |
| Secondary text | `#555` | `.desc` |
| Muted text | `#999` | `.text-input` |
| Step indicator active | `#6DAB3C` (green) | `.current .title .step-number` |
| Button primary | `#6DAB3C` (green) | Preview page |
| Button accent | `#B97EBB` (lavender) | Preview page |
| Step number circle | `#ebebeb` bg, `50%` radius | `.step-number` |
| Input border radius | `5px` | Inputs |
| Search button | `#6DAB3C` green bg | `.submit` |

## Gherkin Requirements

### Feature: Multi-Step Wizard Form

#### Scenario: Step 1 - Personal Information
  Given the user is on the wizard form
  When step 1 is displayed
  Then the heading "Personal information" is visible
  And the description text is shown
  And fields are displayed: First Name, Last Name, Email, Phone, Birth Date (MM/DD/YYYY dropdowns), SSN
  And the progress indicator shows step 1 as active

#### Scenario: Step 1 Validation
  Given the user is on step 1
  When the user clicks "Next" without filling required fields
  Then validation errors appear for required fields
  And the form does not advance

#### Scenario: Step 1 to Step 2 Navigation
  Given the user has filled all required fields on step 1
  When the user clicks "Next"
  Then step 2 "Connect Bank Account" is displayed
  And the progress indicator shows step 2 as active

#### Scenario: Step 2 - Bank Account Connection
  Given step 2 is displayed
  Then the heading "Connect Bank Account" is visible
  And a bank search input is shown with placeholder "Ex. Techcombank"
  And a "Search" button is present
  And radio options for popular banks are displayed (3 bank images)

#### Scenario: Step 2 Bank Selection
  Given step 2 is displayed
  When the user selects a bank radio option
  Then the selected bank is highlighted
  And the user can proceed to step 3

#### Scenario: Step 3 - Financial Goals
  Given the user has completed step 2
  When step 3 is displayed
  Then the heading "Set Financial Goals" is visible
  And a range slider for goal amount is shown (using noUiSlider)

#### Scenario: Form Completion
  Given all three steps are completed
  When the user submits the form
  Then a confirmation message or redirect occurs

#### Scenario: Progress Indicator
  Given the wizard form is loaded
  Then a vertical progress sidebar is displayed on the left
  And step numbers (1, 2, 3) are shown in circles
  And the current step is highlighted with green background
  And completed steps show a checkmark

#### Scenario: Responsive Layout
  Given the form is displayed on mobile
  Then the layout adjusts to single-column
  And all form fields remain accessible

## Verification Checklist

- [ ] Multi-step form renders with 3 steps
- [ ] Vertical progress sidebar with numbered steps
- [ ] Step 1: Personal info form with all fields (name, email, phone, birth date, SSN)
- [ ] Step 2: Bank search + radio selection of 3 banks
- [ ] Step 3: Financial goals with range slider
- [ ] Next/Back navigation between steps
- [ ] Form validation on required fields
- [ ] Progress indicator updates on step change
- [ ] Brand colors: green (#6DAB3C) for active step, dark (#222) background
- [ ] Font: Roboto Slab
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
