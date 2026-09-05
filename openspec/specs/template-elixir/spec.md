# Template: Elixir (UI Component — Registration Wizard)

## Purpose

Recreation of the ColorLib **Wizard 29** as a React component.

- **Source slug:** `colorlib-wizard-29`
- **ColorLib page:** https://colorlib.com/wp/template/colorlib-wizard-29/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-wizard-29/ (returns 404; preview unreachable)
- **Stack:** React 19 + Tailwind CSS 4 + TypeScript (Vite)
- **Category:** UI component — multi-step registration wizard

## Reference sources

| Source | Status | Notes |
|--------|--------|-------|
| Live preview HTML | ❌ Unreachable (404) | Preview server returns "Not Found" |
| Live preview CSS | ❌ Unreachable (404) | No stylesheets available |
| Screenshot | ⚠️ Downloaded but not analyzable (AVIF format, vision tool incompatible) | URL: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-29.jpg` |
| ColorLib page meta | ✅ Retrieved | Description: "A very simple free registration wizard template that features username, email, password and password confirmation steps." |
| ColorLib page CSS | ✅ Retrieved | Extracted accent color `#77CC6D` (green) from `.ticon` and `.builder-top-icon` styles |

**Fallback note:** The preview URL returns HTTP 404. The screenshot image is AVIF format and could not be visually analyzed. Design is reconstructed from the ColorLib page description, embedded CSS, and the standard Bootstrap wizard pattern used across ColorLib's wizard templates.

## Design tokens

### Colors (from ColorLib page CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#77CC6D` (green) | Accent color, step indicators, active states, icons |
| `--bg-page` | `#ffffff` | Page/card background |
| `--bg-step-inactive` | `#f8f9fa` (light gray) | Inactive step background |
| `--text-primary` | `#333333` | Headings, body text |
| `--text-secondary` | `#666666` | Descriptions, helper text |
| `--border-color` | `#eeeeee` | Step block borders, dividers |
| `--hover-bg` | `rgba(0,0,0,0.03)` | Step hover background |

### Fonts

| Role | Family | Weights |
|------|--------|---------|
| Body / UI | System sans-serif stack | 400, 600 |
| Headings | System sans-serif stack | 600 |

**Implementation:** Use the system font stack or import a clean sans-serif (e.g., Inter or Poppins) via Google Fonts.

### Layout

- Centered card/container (max-width ~600px)
- Horizontal step indicator bar at top (4 steps)
- Form area below with fields specific to current step
- Navigation buttons: "Previous" (ghost/outline) + "Next" / "Submit" (solid green)
- Responsive: stacks vertically on mobile

### Component structure (reconstructed from description)

```
WizardContainer
  ├─ StepIndicator (4 steps: Username → Email → Password → Confirm)
  │    ├─ Step1 (label: "Username", active/completed state)
  │    ├─ Step2 (label: "Email", active/completed state)
  │    ├─ Step3 (label: "Password", active/completed state)
  │    └─ Step4 (label: "Confirm", active/completed state)
  └─ StepContent
       ├─ Step1: UsernameForm (username input)
       ├─ Step2: EmailForm (email input)
       ├─ Step3: PasswordForm (password input)
       ├─ Step4: ConfirmForm (password confirmation input)
       └─ NavigationButtons (Back / Next or Submit)
```

## Gherkin requirements

### Feature: Elixir — Multi-Step Registration Wizard

```gherkin
Feature: Elixir registration wizard
  As a developer using the Elixir template
  I want a multi-step registration wizard with username, email, password, and confirmation
  So that users can register through a guided step-by-step flow

  Background:
    Given the Elixir wizard component is rendered on the page

  Scenario: Wizard displays all four steps
    Then I should see a step indicator with four steps
    And step 1 should be labeled "Username"
    And step 2 should be labeled "Email"
    And step 3 should be labeled "Password"
    And step 4 should be labeled "Confirm"

  Scenario: Step 1 — Username input
    Then the username step should be active
    And I should see a text input for username
    And I should see a "Next" button

  Scenario: Navigate to step 2
    Given I am on step 1 (Username)
    When I enter a valid username
    And I click "Next"
    Then step 2 (Email) should become active
    And step 1 should show as completed

  Scenario: Navigate to step 3
    Given I am on step 2 (Email)
    When I enter a valid email address
    And I click "Next"
    Then step 3 (Password) should become active
    And steps 1 and 2 should show as completed

  Scenario: Navigate to step 4
    Given I am on step 3 (Password)
    When I enter a valid password
    And I click "Next"
    Then step 4 (Confirm) should become active
    And steps 1-3 should show as completed

  Scenario: Final step shows Submit
    Given I am on step 4 (Confirm)
    Then I should see a "Submit" button instead of "Next"

  Scenario: Go back to previous step
    Given I am on step 2 (Email)
    When I click "Back"
    Then step 1 (Username) should become active again
    And my previously entered username should be preserved

  Scenario: Validation — empty username
    Given I am on step 1 (Username)
    When I click "Next" without entering a username
    Then I should see a validation error for the username field

  Scenario: Validation — invalid email
    Given I am on step 2 (Email)
    When I enter "not-an-email"
    And I click "Next"
    Then I should see a validation error for the email field

  Scenario: Validation — password mismatch
    Given I am on step 4 (Confirm)
    When I enter a password that differs from step 3
    And I click "Submit"
    Then I should see a validation error about password mismatch

  Scenario: Step indicator reflects progress
    Given I am on step 3 (Password)
    Then steps 1 and 2 should have a completed visual indicator
    And step 3 should have an active visual indicator
    And step 4 should have an inactive visual indicator

  Scenario: Responsive layout
    Given the viewport is narrow (mobile)
    Then the step indicator should remain visible
    And the form should stack vertically

  Scenario: Accessibility — keyboard navigation
    When I focus the username input
    And I press Tab
    Then focus should move to the Next button

  Scenario: Accessibility — ARIA attributes
    Then each step should have appropriate aria-current or aria-completed attributes
    And form fields should have associated labels

  Scenario: Component Dock footer link
    Then I should see a footer link to "https://www.componentdock.com/"
```

## Verification checklist

- [ ] Wizard renders with 4-step indicator (Username, Email, Password, Confirm)
- [ ] Step 1 shows username input + Next button
- [ ] Step 2 shows email input + Back/Next buttons
- [ ] Step 3 shows password input + Back/Next buttons
- [ ] Step 4 shows confirm password input + Back/Submit buttons
- [ ] Step indicator updates (active/completed/inactive states) on navigation
- [ ] Back button returns to previous step with preserved data
- [ ] Form validation: empty fields blocked, email format validated, passwords must match
- [ ] Green accent color (#77CC6D) used for active step and primary buttons
- [ ] Responsive: works on mobile viewports
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] ARIA attributes present on steps and form fields
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Uses `cn()` from `packages/ui`
- [ ] 100% test coverage
