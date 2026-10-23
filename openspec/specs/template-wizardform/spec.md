# Template: WizardForm (Payment Account Wizard)

## Purpose

Recreation of ColorLib Wizard 25 — a free payment account creation template
with a 3-step form wizard. The original is a Bootstrap-based dark-themed
multi-step form for collecting personal information, bank details, and
confirming the entered data before submission.

- **Source template**: [Colorlib Wizard 25](https://colorlib.com/wp/template/colorlib-wizard-25/)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-25/` (unreachable at prep time — 404; fallback to screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-25.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bwiz/colorlib-wizard-25/index.html` — HTTP 200, 13,635 B, title `Wizard-v5`.
>
> Sheet: `https://colorlib.com/etc/bwiz/colorlib-wizard-25/css/style.css?v=63cdecb8` (16,029 B).
> Faces it actually declares: `Nunito`.
> The prescribed face `poppins` occurs in no rule of it.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens

> Extracted from the screenshot (preview unreachable) — **re-probed 2026-10-23: the demo serves** (measured record below) and Colorlib page metadata.

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

## Requirements

### Feature: WizardForm — 3-Step Payment Account Wizard

#### Scenario: Page loads with step 1 active

- **GIVEN** the user opens the WizardForm page
- **THEN** the "Personal Information" step should be visible and active
- **AND** the "Bank Information" and "Confirm Details" steps should be visible but inactive
- **AND** the first step should display form fields for personal information

#### Scenario: Personal Information step fields

- **GIVEN** the user is on step 1 "Personal Information"
- **THEN** the form should contain a "First Name" text input
- **AND** the form should contain a "Last Name" text input
- **AND** the form should contain a "Date of Birth" input
- **AND** the form should contain an email input field
- **AND** the form should contain a phone number input field
- **AND** a "Next" arrow button should be visible

#### Scenario: Navigate to step 2

- **GIVEN** the user is on step 1 with valid personal information
- **WHEN** the user clicks the "Next" arrow button
- **THEN** the "Bank Information" step should become active
- **AND** the "Personal Information" step should show a completed checkmark
- **AND** the bank information form fields should be visible

#### Scenario: Bank Information step fields

- **GIVEN** the user is on step 2 "Bank Information"
- **THEN** the form should contain a "Card Number" input field
- **AND** the form should contain a "Cardholder Name" input field
- **AND** the form should contain an "Expiry Date" input field
- **AND** the form should contain a "CVV" input field
- **AND** a "Next" arrow button should be visible

#### Scenario: Navigate to step 3

- **GIVEN** the user is on step 2 with valid bank information
- **WHEN** the user clicks the "Next" arrow button
- **THEN** the "Confirm Details" step should become active
- **AND** the "Personal Information" and "Bank Information" steps should show completed checkmarks
- **AND** the confirmation summary should display all entered data

#### Scenario: Confirmation step displays summary

- **GIVEN** the user is on step 3 "Confirm Details"
- **THEN** the entered personal information should be displayed in read-only form
- **AND** the entered bank information should be displayed (card number masked)
- **AND** a "Submit" or "Confirm" button should be visible

#### Scenario: Navigate backwards between steps

- **GIVEN** the user is on step 2 "Bank Information"
- **WHEN** the user clicks the back/previous step indicator
- **THEN** the "Personal Information" step should become active again
- **AND** the previously entered data should be preserved

#### Scenario: Step indicator shows progress

- **GIVEN** the user is on any step
- **THEN** the step indicator bar should show 3 steps in a horizontal row
- **AND** completed steps should display a checkmark icon
- **AND** the current step should be highlighted with the accent color
- **AND** future steps should appear muted/inactive

#### Scenario: Responsive layout on mobile

- **GIVEN** the user opens the page on a viewport width less than 768px
- **THEN** the wizard card should stack vertically and fit the screen
- **AND** all form fields should remain usable and accessible
- **AND** the step indicator should remain visible above the form

#### Scenario: Form validation prevents advancement

- **GIVEN** the user is on step 1
- **AND** the "First Name" field is empty
- **WHEN** the user clicks the "Next" arrow button
- **THEN** the user should remain on step 1
- **AND** a validation error should appear on the required field

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

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/bwiz/colorlib-wizard-25/index.html` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#16213e` — nearest `#525575` (d=97)
- `#0f3460` — nearest `#525575` (d=78)
- `#e94560` — nearest `#525575` (d=153)
- `#c73e54` — nearest `#525575` (d=124)
- `#4caf50` — nearest `#25b45b` (d=41)
- `#2a2a4a` — nearest `#525575` (d=73)
<!-- live-palette-unverified:end -->
