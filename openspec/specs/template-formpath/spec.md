# Template: Formpath (Registration Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 29" — a four-step registration wizard
with step indicator, built with Bootstrap in the original.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-wizard-29/
- **Preview (live demo):** https://preview.colorlib.com/theme/colorlib-wizard-29/ (unreachable — 404 at time of research; design based on screenshot + template page metadata)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-29.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Description:** A simple free registration wizard template with a four-step
  process: username, email, password, and password confirmation. Centered card
  layout on a clean background with step indicator and navigation buttons.

## Design Tokens

Extracted from the ColorLib template page CSS (`wp-custom-css`) and
structural analysis. The preview was unreachable (404), so tokens are
derived from the template listing page styles and standard Bootstrap Wizard
patterns.

### Colors

| Token                | Value             | Usage                                              |
| -------------------- | ----------------- | -------------------------------------------------- |
| `--brand-blue`       | `#1a73e8`         | Primary accent — active step, focus borders, links |
| `--brand-blue-hover` | `#1464cc`         | Hover state for interactive elements               |
| `--brand-green`      | `#77CC6D`         | Step completion icons, success indicators          |
| `--bg-page`          | `#ffffff`         | Page background                                    |
| `--bg-card`          | `#ffffff`         | Wizard card background                             |
| `--text-primary`     | `#26282b`         | Body text, headings                                |
| `--text-secondary`   | `#4b4b4b`         | Secondary/body text in content areas               |
| `--text-muted`       | `#999999`         | Placeholders, step labels                          |
| `--border-light`     | `#eeeeee`         | Input borders, step block borders                  |
| `--step-inactive-bg` | `#f5f5f5`         | Inactive step indicator background                 |
| `--step-active-bg`   | `#1a73e8`         | Active step indicator background                   |
| `--step-done-bg`     | `#77CC6D`         | Completed step indicator background                |
| `--shadow-card`      | `rgba(0,0,0,0.1)` | Card box shadow                                    |

### Typography

| Token            | Value                                                               | Usage                     |
| ---------------- | ------------------------------------------------------------------- | ------------------------- |
| `--font-body`    | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | Body text, inputs, labels |
| `--font-heading` | Same as body (system sans-serif stack)                              | Headings, step titles     |

### Spacing & Radius

| Token            | Value   | Usage                             |
| ---------------- | ------- | --------------------------------- |
| `--radius-card`  | `8px`   | Card border-radius                |
| `--radius-input` | `4px`   | Input field corners               |
| `--radius-btn`   | `4px`   | Button corners (slightly rounded) |
| `--radius-step`  | `50%`   | Step indicator circles            |
| Card max-width   | `500px` | Centered wizard card width        |
| Card padding     | `40px`  | Card internal padding             |

## Section Structure (from template metadata + screenshot analysis)

1. **Page Background** — Clean white/light gray background
2. **Wizard Card** — Centered white card with shadow, rounded corners
   - **Step Indicator** — Horizontal row of numbered circles (1-4) with
     connecting lines; active step highlighted in brand blue, completed
     steps in green, inactive steps gray
   - **Step Title** — Current step heading (e.g., "Username", "Email")
   - **Form Area** — Input field(s) for the current step
   - **Navigation Buttons** — "Back" (gray) and "Next" (brand blue) buttons;
     last step shows "Submit" instead of "Next"
3. **Step 1 — Username:** Single text input for username
4. **Step 2 — Email:** Single email input for email address
5. **Step 3 — Password:** Password input for desired password
6. **Step 4 — Password Confirmation:** Password input to confirm password,
   plus final submit button

## Gherkin Scenarios

### Scenario: Page renders with wizard card centered

```gherkin
Given the user visits the Formpath page
Then a white card should be centered on the page
And the card should have rounded corners and a subtle shadow
And the page background should be clean and light
```

### Scenario: Step indicator shows four steps

```gherkin
Given the user visits the Formpath page
Then a step indicator should display four numbered circles
And step 1 should be highlighted as active (blue)
And steps 2, 3, 4 should be inactive (gray)
And connecting lines should link the circles horizontally
```

### Scenario: Step 1 — Username input

```gherkin
Given the user is on step 1 (Username)
Then a text input labeled "Username" should be visible
And a "Next" button should be visible
And no "Back" button should be visible
When the user clicks "Next" without entering a username
Then a validation error should appear
```

### Scenario: Navigate from step 1 to step 2

```gherkin
Given the user is on step 1 (Username)
And the user types "johndoe" into the username field
When the user clicks "Next"
Then step 2 (Email) should become active
And step 1 should show as completed (green)
And the email input should be visible
And a "Back" button should now be visible
```

### Scenario: Step 2 — Email input

```gherkin
Given the user is on step 2 (Email)
Then an email input labeled "Email" should be visible
And "Back" and "Next" buttons should be visible
When the user clicks "Next" without entering an email
Then a validation error should appear
When the user enters a valid email and clicks "Next"
Then step 3 (Password) should become active
```

### Scenario: Step 3 — Password input

```gherkin
Given the user is on step 3 (Password)
Then a password input labeled "Password" should be visible
And "Back" and "Next" buttons should be visible
When the user enters a password and clicks "Next"
Then step 4 (Confirm Password) should become active
```

### Scenario: Step 4 — Confirm Password and submit

```gherkin
Given the user is on step 4 (Confirm Password)
Then a password input labeled "Confirm Password" should be visible
And "Back" and "Submit" buttons should be visible
When the user enters a matching password and clicks "Submit"
Then a success message should appear
And all four steps should show as completed (green)
```

### Scenario: Back navigation

```gherkin
Given the user is on step 3 (Password)
When the user clicks "Back"
Then step 2 (Email) should become active again
And the previously entered email should still be populated
And step 3 should revert to inactive
```

### Scenario: Step indicator updates on navigation

```gherkin
Given the user advances from step 1 to step 3
Then step 1 indicator should be green (completed)
Then step 2 indicator should be green (completed)
Then step 3 indicator should be blue (active)
Then step 4 indicator should be gray (inactive)
```

### Scenario: Responsive layout

```gherkin
Given the user views the page on a mobile viewport (width < 640px)
Then the wizard card should still be centered
And the step indicator should remain visible
And inputs and buttons should be full-width within the card
```

## Verification Checklist

- [ ] Page renders centered wizard card on light background
- [ ] Step indicator shows 4 numbered circles with connecting lines
- [ ] Active step highlighted in blue, completed in green, inactive in gray
- [ ] Step 1: Username input + Next button (no Back)
- [ ] Step 2: Email input + Back + Next buttons
- [ ] Step 3: Password input + Back + Next buttons
- [ ] Step 4: Confirm Password input + Back + Submit buttons
- [ ] Validation prevents advancing with empty required fields
- [ ] Back button returns to previous step with data preserved
- [ ] Step indicator updates correctly on forward/backward navigation
- [ ] Submit on step 4 shows success state
- [ ] All four step indicators turn green after completion
- [ ] Responsive: works on mobile viewport
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md/PR)
- [ ] 100% test coverage (lines, functions, branches, statements)
