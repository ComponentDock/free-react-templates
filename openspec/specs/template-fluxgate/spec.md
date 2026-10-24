# Template: FluxGate (ColorLib Wizard 30 Form Wizard)
<!-- prep-status: shipped-as=formwalk -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-wizard-30` design this prep describes already
> ships as `apps/formwalk` (<https://formwalk.free.componentdock.com>).
> Do not scaffold `apps/fluxgate`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-formwalk/spec.md`.

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 30 (`https://colorlib.com/wp/template/colorlib-wizard-30/`)
- **New Name**: `fluxgate` (App directory: `apps/fluxgate`, Package: `@free-react-templates/fluxgate`)
- **Category**: Forms / Multi-step Wizard
- **Description**: A clean, modern multi-step form wizard template featuring step-by-step navigation, account setup, personal details, payment information, and responsive layout.
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-30/` (unreachable at prep time — 404; fallback to screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-30.jpg` (AVIF format)
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html` — HTTP 200, 4,958 B, title `Wizard-v10`.
>
> Sheet: `https://colorlib.com/etc/bwiz/colorlib-wizard-30/css/style.css?v=79adf51a` (9,710 B).
> Faces it actually declares: `Montserrat`.
> The prescribed face `poppins` occurs in no rule of it.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design Tokens (from reference)

> Extracted from the screenshot (preview unreachable) — **re-probed 2026-10-23: the demo serves** (measured record below) and ColorLib wizard template patterns.

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

## Requirements

### Feature: FluxGate — Multi-Step Form Wizard

#### Scenario: Page loads with step 1 active

- **GIVEN** the user opens the FluxGate page
- **THEN** the "Account Setup" step should be visible and active
- **AND** the "Personal Details" and "Payment Information" steps should be visible but inactive
- **AND** the first step should display form fields for account setup

#### Scenario: Account Setup step fields

- **GIVEN** the user is on step 1 "Account Setup"
- **THEN** the form should contain an "Email" text input
- **AND** the form should contain a "Password" input
- **AND** the form should contain a "Confirm Password" input
- **AND** a "Next" button should be visible

#### Scenario: Navigate to step 2

- **GIVEN** the user is on step 1 with valid account information
- **WHEN** the user clicks the "Next" button
- **THEN** the "Personal Details" step should become active
- **AND** the "Account Setup" step should show as completed with a checkmark
- **AND** the form should display fields for personal information

#### Scenario: Personal Details step fields

- **GIVEN** the user is on step 2 "Personal Details"
- **THEN** the form should contain a "First Name" text input
- **AND** the form should contain a "Last Name" text input
- **AND** the form should contain a "Phone Number" input
- **AND** the form should contain a "Address" textarea
- **AND** "Back" and "Next" buttons should be visible

#### Scenario: Navigate back to step 1

- **GIVEN** the user is on step 2
- **WHEN** the user clicks the "Back" button
- **THEN** the "Account Setup" step should become active again
- **AND** the previously entered account information should be preserved

#### Scenario: Navigate to step 3

- **GIVEN** the user is on step 2 with valid personal information
- **WHEN** the user clicks the "Next" button
- **THEN** the "Payment Information" step should become active
- **AND** the "Account Setup" and "Personal Details" steps should show as completed

#### Scenario: Payment Information step fields

- **GIVEN** the user is on step 3 "Payment Information"
- **THEN** the form should contain a "Card Holder Name" text input
- **AND** the form should contain a "Card Number" input
- **AND** the form should contain an "Expiry Date" input
- **AND** the form should contain a "CVC" input
- **AND** "Back" and "Submit" buttons should be visible

#### Scenario: Form validation prevents advancing on invalid input

- **GIVEN** the user is on any step
- **WHEN** the user clicks "Next" with invalid or empty required fields
- **THEN** inline validation error messages should be displayed
- **AND** the form should not advance to the next step

#### Scenario: Email format validation

- **GIVEN** the user is on step 1
- **WHEN** the user enters an invalid email format
- **THEN** an email format validation error should be displayed

#### Scenario: Password mismatch validation

- **GIVEN** the user is on step 1
- **WHEN** the user enters different passwords in password and confirm password fields
- **THEN** a "passwords do not match" error should be displayed

#### Scenario: Successful submission completes the wizard

- **GIVEN** the user has completed all steps with valid data
- **WHEN** the user clicks "Submit" on step 3
- **THEN** a success screen should be displayed with a "Complete!" header
- **AND** a "Registration Complete" message should be shown

#### Scenario: Reset wizard

- **GIVEN** the user is on the success screen
- **WHEN** the user clicks "Start Over"
- **THEN** the wizard should reset to step 1 with all fields cleared

#### Scenario: Step indicator progress

- **GIVEN** the user is navigating through the wizard
- **WHEN** the user advances to a new step
- **THEN** completed steps should display a checkmark icon
- **AND** the current step should be highlighted with the accent color
- **AND** future steps should remain in the inactive state

#### Scenario: Responsive layout

- **GIVEN** the user views the wizard on a mobile device
- **THEN** the wizard should stack vertically
- **AND** all form fields should be full-width
- **AND** the step indicator should adapt to the smaller screen

## Verification checklist

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

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#3760e5` (d=35)
- `#4338ca` — nearest `#2b4ab3` (d=38)
- `#10b981` — nearest `#2b4ab3` (d=125)
<!-- live-palette-unverified:end -->
