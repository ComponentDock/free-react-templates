# Template: StepPath (Ecommerce Order Wizard)

## Purpose

Recreation of **ColorLib "Wizard 5"** — a 4-step order template designed for
ecommerce websites with a convenient multi-step wizard flow.

- **Source:** https://colorlib.com/wp/template/colorlib-wizard-5/
- **Preview (original):** https://preview.colorlib.com/theme/colorlib-wizard-5/ (unreachable at prep time)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-5.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `steppath` (app folder: `apps/steppath`, package: `@free-react-templates/steppath`)
- **Deploy target:** https://steppath.free.componentdock.com

## Design tokens

Extracted from screenshot pixel analysis (preview was unreachable — 404):

| Token            | Value                                      | Notes                                   |
| ---------------- | ------------------------------------------ | --------------------------------------- |
| Background       | `#e6d2b4` (warm beige)                     | Page/card background                    |
| Card background  | `#e8ceb3` → `#ebd5bb` (beige)              | Wizard card surface                     |
| Accent / teal    | `#d2e6e6` (light teal/mint)                | Progress indicator, step highlights     |
| Accent secondary | `#c8dcdc` (lighter teal)                   | Secondary highlights                    |
| Brand green      | `#46c24a` (approximate, from illustration) | Active step / CTA elements              |
| Heading text     | `#3c320a` (dark brown)                     | Step titles, headings                   |
| Body text        | `#64501e` (dark olive-brown)               | Descriptions, labels                    |
| Button primary   | `#d2be64` (golden/amber)                   | Primary CTA / "Next" button             |
| Button hover     | `#d2b45a` (darker gold)                    | Hover state                             |
| Input border     | `#b4aaa0` (warm gray)                      | Form field borders                      |
| Input background | `#faf0e6` (warm white)                     | Form field backgrounds                  |
| Font family      | System sans-serif stack                    | -apple-system, BlinkMacSystemFont, sans |
| Card radius      | ~8px (rounded card)                        | Wizard card corners                     |
| Button radius    | ~4px (slightly rounded)                    | CTA button corners                      |

**Color note:** The preview was unreachable. Tokens derived from screenshot
pixel sampling. The palette is warm and earthy: beige/tan backgrounds with
teal accents and golden/amber CTAs. This differs from typical modern
flat UI — the warm tones give it an organic, approachable feel.

## Gherkin requirements

### Wizard container

```gherkin
Feature: Wizard container

  Scenario: Wizard card centered on page
    Given the page has loaded
    Then the wizard card is centered horizontally and vertically on the page

  Scenario: Wizard has warm beige background
    Given the page has loaded
    Then the page background is warm beige (#e6d2b4)

  Scenario: Wizard card has rounded corners and shadow
    Given the page has loaded
    Then the wizard card has rounded corners (~8px) and a subtle drop shadow
```

### Step indicator / progress

```gherkin
Feature: Step progress indicator

  Scenario: Four-step progress bar displayed
    Given the wizard is loaded
    Then a progress indicator with 4 steps is displayed at the top of the wizard

  Scenario: Step 1 is active on load
    Given the wizard is loaded
    Then Step 1 is visually highlighted as the active step
    And Steps 2, 3, and 4 appear as inactive/pending

  Scenario: Completed steps marked
    Given the user has completed Step 1 and moved to Step 2
    Then Step 1 is marked as completed (checkmark or filled)
    And Step 2 is highlighted as the active step

  Scenario: Progress bar updates on navigation
    Given the user navigates forward
    Then the progress bar fills proportionally (25%, 50%, 75%, 100%)
```

### Step 1: Personal information

```gherkin
Feature: Step 1 — Personal information

  Scenario: Step 1 form fields
    Given the wizard is on Step 1
    Then fields for Full Name, Email, and Phone Number are displayed

  Scenario: Step 1 validation
    Given the wizard is on Step 1
    When the user clicks "Next" without filling required fields
    Then validation errors are displayed for empty required fields

  Scenario: Step 1 valid submission
    Given the wizard is on Step 1
    When the user fills in valid personal information and clicks "Next"
    Then the wizard transitions to Step 2
```

### Step 2: Address details

```gherkin
Feature: Step 2 — Address details

  Scenario: Step 2 form fields
    Given the wizard is on Step 2
    Then fields for Street Address, City, State, and Zip Code are displayed

  Scenario: Step 2 validation
    Given the wizard is on Step 2
    When the user clicks "Next" without filling required fields
    Then validation errors are displayed

  Scenario: Step 2 navigation
    Given the wizard is on Step 2
    When the user clicks "Back"
    Then the wizard returns to Step 1 with previous data preserved

  Scenario: Step 2 valid submission
    Given the wizard is on Step 2
    When the user fills in valid address and clicks "Next"
    Then the wizard transitions to Step 3
```

### Step 3: Payment information

```gherkin
Feature: Step 3 — Payment information

  Scenario: Step 3 form fields
    Given the wizard is on Step 3
    Then fields for Card Number, Expiry Date, and CVV are displayed

  Scenario: Step 3 validation
    Given the wizard is on Step 3
    When the user clicks "Next" without filling required fields
    Then validation errors are displayed

  Scenario: Step 3 valid submission
    Given the wizard is on Step 3
    When the user fills in valid payment info and clicks "Next"
    Then the wizard transitions to Step 4
```

### Step 4: Confirmation / Review

```gherkin
Feature: Step 4 — Order confirmation

  Scenario: Step 4 review
    Given the wizard is on Step 4
    Then a summary of all entered information is displayed (personal, address, payment)

  Scenario: Step 4 submit
    Given the wizard is on Step 4
    When the user clicks "Submit" or "Place Order"
    Then a success confirmation message is displayed

  Scenario: Step 4 edit
    Given the wizard is on Step 4
    When the user clicks "Edit" next to a section
    Then the wizard navigates back to the corresponding step
```

### Navigation buttons

```gherkin
Feature: Navigation buttons

  Scenario: Back button on steps 2-4
    Given the wizard is on Step 2, 3, or 4
    Then a "Back" button is displayed to navigate to the previous step

  Scenario: Back button hidden on Step 1
    Given the wizard is on Step 1
    Then the "Back" button is not displayed

  Scenario: Next button on steps 1-3
    Given the wizard is on Step 1, 2, or 3
    Then a "Next" button is displayed to proceed to the next step

  Scenario: Submit button on Step 4
    Given the wizard is on Step 4
    Then a "Submit" or "Place Order" button is displayed instead of "Next"

  Scenario: Button styling
    Given any navigation button is displayed
    Then the button has a golden/amber (#d2be64) background with dark text
    And the button has slightly rounded corners (~4px)
```

### Responsive behavior

```gherkin
Feature: Responsive wizard

  Scenario: Mobile layout
    Given the viewport width is less than 640px
    Then the wizard card fills the full viewport width with padding
    And form fields stack vertically
    And the step indicator adapts to smaller width

  Scenario: Desktop layout
    Given the viewport width is 640px or greater
    Then the wizard card has a fixed max-width (~600px) and is centered
```

## Verification checklist

- [ ] Warm beige page background (#e6d2b4)
- [ ] Centered wizard card with rounded corners and shadow
- [ ] Four-step progress indicator at top
- [ ] Step 1 active on initial load
- [ ] Completed steps marked as done
- [ ] Step 1: Personal info fields (name, email, phone)
- [ ] Step 2: Address fields (street, city, state, zip)
- [ ] Step 3: Payment fields (card, expiry, CVV)
- [ ] Step 4: Review summary + submit
- [ ] Back button on steps 2-4
- [ ] Next button on steps 1-3
- [ ] Submit button on Step 4
- [ ] Golden/amber (#d2be64) button styling
- [ ] Form validation with error messages
- [ ] Data preserved when navigating back
- [ ] Responsive: full-width on mobile, fixed-width on desktop
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
