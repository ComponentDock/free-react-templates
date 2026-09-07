# Template: FluxGate (ColorLib Wizard 30 Form Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 30 (`https://colorlib.com/wp/template/colorlib-wizard-30/`)
- **New Name**: `fluxgate` (App directory: `apps/fluxgate`, Package: `@free-react-templates/fluxgate`)
- **Category**: Forms / Multi-step Wizard
- **Description**: A clean, modern multi-step form wizard template featuring step-by-step navigation, account setup, personal details, payment information, and responsive layout.
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-30/` (unreachable at prep time — 404; fallback to screenshot)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-30.jpg` (AVIF format)
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design Tokens (from reference)

> Extracted from the screenshot (preview unreachable) and ColorLib wizard template patterns.

| Token | Value | Notes |
|-------|-------|-------|
| Background (page) | `#f5f5f5` (light gray) | Clean neutral background |
| Background (card/form) | `#ffffff` (white) | Card container behind the wizard |
| Background (active step) | `#4f46e5` (indigo-600) | Active step indicator background |
| Background (inactive step) | `#e5e7eb` (gray-200) | Inactive step indicator background |
| Text primary | `#1f2937` (gray-800) | Dark text on light backgrounds |
| Text secondary | `#6b7280` (gray-500) | Inactive step labels, helper text |
| Text on active | `#ffffff` (white) | Text on active step indicator |
| Accent / CTA | `#4f46e5` (indigo-600) | Next/Submit button, active step accent |
| Accent hover | `#4338ca` (indigo-700) | Button hover state |
| Success / confirm | `#10b981` (emerald-500) | Confirmation step icons, tick marks |
| Input background | `#ffffff` (white) | Form input fields |
| Input border | `#d1d5db` (gray-300) | Input field borders |
| Input border focus | `#4f46e5` (indigo-600) | Focused input border |
| Font family | `"Poppins", sans-serif` | Common Colorlib wizard font |
| Border radius (card) | `12px` | Rounded card corners |
| Border radius (inputs) | `8px` | Rounded inputs |
| Border radius (button) | `8px` | Rounded button corners |
| Border radius (step circle) | `50%` | Circular step indicators |
| Step indicator size | `40px` | Diameter of step circles |
| Step connector | `2px` solid `#d1d5db` | Line between steps |
| Step connector active | `2px solid #4f46e5` | Line between completed steps |
| Transitions | Smooth fade/slide between steps | Elegant transitions between sections |

## Gherkin Requirements

### Feature: FluxGate — Multi-Step Form Wizard

#### Scenario: Page loads with step 1 active
  Given the user opens the FluxGate page
  Then the "Account Setup" step should be visible and active
  And the "Personal Details" and "Payment Information" steps should be visible but inactive
  And the first step should display form fields for account setup

#### Scenario: Account Setup step fields
  Given the user is on step 1 "Account Setup"
  Then the form should contain an "Email" text input
  And the form should contain a "Password" input
  And the form should contain a "Confirm Password" input
  And a "Next" button should be visible

#### Scenario: Navigate to step 2
  Given the user is on step 1 with valid account information
  When the user clicks the "Next" button
  Then the "Personal Details" step should become active
  And the "Account Setup" step should show as completed with a checkmark
  And the form should display fields for personal information

#### Scenario: Personal Details step fields
  Given the user is on step 2 "Personal Details"
  Then the form should contain a "First Name" text input
  And the form should contain a "Last Name" text input
  And the form should contain a "Phone Number" input
  And the form should contain a "Address" textarea
  And "Back" and "Next" buttons should be visible

#### Scenario: Navigate back to step 1
  Given the user is on step 2
  When the user clicks the "Back" button
  Then the "Account Setup" step should become active again
  And the previously entered account information should be preserved

#### Scenario: Navigate to step 3
  Given the user is on step 2 with valid personal information
  When the user clicks the "Next" button
  Then the "Payment Information" step should become active
  And the "Account Setup" and "Personal Details" steps should show as completed

#### Scenario: Payment Information step fields
  Given the user is on step 3 "Payment Information"
  Then the form should contain a "Card Holder Name" text input
  And the form should contain a "Card Number" input
  And the form should contain an "Expiry Date" input
  And the form should contain a "CVC" input
  And "Back" and "Submit" buttons should be visible

#### Scenario: Form validation prevents advancing on invalid input
  Given the user is on any step
  When the user clicks "Next" with invalid or empty required fields
  Then inline validation error messages should be displayed
  And the form should not advance to the next step

#### Scenario: Email format validation
  Given the user is on step 1
  When the user enters an invalid email format
  Then an email format validation error should be displayed

#### Scenario: Password mismatch validation
  Given the user is on step 1
  When the user enters different passwords in password and confirm password fields
  Then a "passwords do not match" error should be displayed

#### Scenario: Successful submission completes the wizard
  Given the user has completed all steps with valid data
  When the user clicks "Submit" on step 3
  Then a success screen should be displayed with a "Complete!" header
  And a "Registration Complete" message should be shown

#### Scenario: Reset wizard
  Given the user is on the success screen
  When the user clicks "Start Over"
  Then the wizard should reset to step 1 with all fields cleared

#### Scenario: Step indicator progress
  Given the user is navigating through the wizard
  When the user advances to a new step
  Then completed steps should display a checkmark icon
  And the current step should be highlighted with the accent color
  And future steps should remain in the inactive state

#### Scenario: Responsive layout
  Given the user views the wizard on a mobile device
  Then the wizard should stack vertically
  And all form fields should be full-width
  And the step indicator should adapt to the smaller screen

## Verification Checklist

- [ ] All form fields are present and properly labeled
- [ ] Step navigation works correctly (Next, Back)
- [ ] Form validation prevents advancing with invalid data
- [ ] Email format validation works
- [ ] Password mismatch validation works
- [ ] Step indicator shows correct progress state
- [ ] Success screen displays after completion
- [ ] Reset functionality clears all fields
- [ ] Responsive layout works on mobile
- [ ] All interactive elements have proper accessibility attributes
- [ ] Smooth transitions between steps
- [ ] Component Dock footer is present and links correctly
