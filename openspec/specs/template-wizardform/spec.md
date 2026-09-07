# Template: WizardForm (Payment Account Wizard)

## Purpose

Recreation of ColorLib Wizard 25 — a free payment account creation template
with a 3-step form wizard. The original is a Bootstrap-based dark-themed
multi-step form for collecting personal information, bank details, and
confirming the entered data before submission.

- **Source template**: [Colorlib Wizard 25](https://colorlib.com/wp/template/colorlib-wizard-25/)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-25/` (unreachable at prep time — 404; fallback to screenshot)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-25.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

> Extracted from the screenshot (preview unreachable) and Colorlib page metadata.

| Token | Value | Notes |
|-------|-------|-------|
| Background (page) | `#1a1a2e` (dark navy) | Dark-themed full-page background |
| Background (card/form) | `#16213e` (deep blue) | Card container behind the wizard |
| Background (active tab) | `#0f3460` (medium blue) | Active step indicator background |
| Text primary | `#ffffff` | White text on dark backgrounds |
| Text secondary | `#a0a0b8` (muted lavender) | Inactive step labels, helper text |
| Accent / CTA | `#e94560` (coral-red) | Next button, active step accent |
| Accent hover | `#c73e54` (darker coral) | Button hover state |
| Success / confirm | `#4caf50` (green) | Confirmation step icons, tick marks |
| Input background | `#0f3460` (deep blue) | Form input fields |
| Input border | `#2a2a4a` (subtle blue-gray) | Input field borders |
| Font family | `"Poppins", sans-serif` | Common Colorlib wizard font |
| Border radius (card) | `8px` | Rounded card corners |
| Border radius (inputs) | `4px` | Slightly rounded inputs |
| Border radius (button) | `4px` | Rounded button corners |
| Step indicator icons | Checkmark (✓) tick symbol | Completed steps |
| Navigation button | Arrow (→) icon | Next step indicator (no text label) |
| Transitions | Smooth fade/slide between steps | Elegant transitions between sections |

## Gherkin requirements

### Feature: WizardForm — 3-Step Payment Account Wizard

  Scenario: Page loads with step 1 active
    Given the user opens the WizardForm page
    Then the "Personal Information" step should be visible and active
    And the "Bank Information" and "Confirm Details" steps should be visible but inactive
    And the first step should display form fields for personal information

  Scenario: Personal Information step fields
    Given the user is on step 1 "Personal Information"
    Then the form should contain a "First Name" text input
    And the form should contain a "Last Name" text input
    And the form should contain a "Date of Birth" input
    And the form should contain an email input field
    And the form should contain a phone number input field
    And a "Next" arrow button should be visible

  Scenario: Navigate to step 2
    Given the user is on step 1 with valid personal information
    When the user clicks the "Next" arrow button
    Then the "Bank Information" step should become active
    And the "Personal Information" step should show a completed checkmark
    And the bank information form fields should be visible

  Scenario: Bank Information step fields
    Given the user is on step 2 "Bank Information"
    Then the form should contain a "Card Number" input field
    And the form should contain a "Cardholder Name" input field
    And the form should contain an "Expiry Date" input field
    And the form should contain a "CVV" input field
    And a "Next" arrow button should be visible

  Scenario: Navigate to step 3
    Given the user is on step 2 with valid bank information
    When the user clicks the "Next" arrow button
    Then the "Confirm Details" step should become active
    And the "Personal Information" and "Bank Information" steps should show completed checkmarks
    And the confirmation summary should display all entered data

  Scenario: Confirmation step displays summary
    Given the user is on step 3 "Confirm Details"
    Then the entered personal information should be displayed in read-only form
    And the entered bank information should be displayed (card number masked)
    And a "Submit" or "Confirm" button should be visible

  Scenario: Navigate backwards between steps
    Given the user is on step 2 "Bank Information"
    When the user clicks the back/previous step indicator
    Then the "Personal Information" step should become active again
    And the previously entered data should be preserved

  Scenario: Step indicator shows progress
    Given the user is on any step
    Then the step indicator bar should show 3 steps in a horizontal row
    And completed steps should display a checkmark icon
    And the current step should be highlighted with the accent color
    And future steps should appear muted/inactive

  Scenario: Responsive layout on mobile
    Given the user opens the page on a viewport width less than 768px
    Then the wizard card should stack vertically and fit the screen
    And all form fields should remain usable and accessible
    And the step indicator should remain visible above the form

  Scenario: Form validation prevents advancement
    Given the user is on step 1
    And the "First Name" field is empty
    When the user clicks the "Next" arrow button
    Then the user should remain on step 1
    And a validation error should appear on the required field

## Verification checklist

- [ ] Dark-themed background (`#1a1a2e`) covers the full page
- [ ] Card/form container uses a contrasting deep blue (`#16213e`)
- [ ] Step indicator bar shows 3 horizontal steps with labels
- [ ] Completed steps show green checkmark tick icons
- [ ] Active step is highlighted with accent color (`#e94560`)
- [ ] Inactive steps use muted text color
- [ ] "Next" navigation uses an arrow icon (→), not text label
- [ ] Step 1: Personal info fields (first name, last name, DOB, email, phone)
- [ ] Step 2: Bank info fields (card number, cardholder, expiry, CVV)
- [ ] Step 3: Confirmation summary with masked card number
- [ ] Smooth fade/slide transitions between steps
- [ ] Back navigation preserves entered data
- [ ] Form validation blocks empty required fields
- [ ] Responsive: stacks on mobile viewports (<768px)
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] No references to ColorLib in app code (provenance in spec only)
- [ ] Uses `cn()` from `packages/ui` for class composition
- [ ] 100% test coverage (lines, functions, branches, statements)
