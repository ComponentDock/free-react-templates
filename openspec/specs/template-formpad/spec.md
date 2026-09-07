# Template: FormPad (Course Registration Wizard)

## Purpose

Recreation of ColorLib's **Colorlib Wizard 4** — a free multi-step course registration form wizard template.

- **Source slug:** `colorlib-wizard-4`
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-4/
- **Preview/demo URL:** https://colorlib.com/etc/bwiz/colorlib-wizard-4/index.html
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Visual Design Notes

Split-screen layout: left panel (≈41%) displays a large decorative image, right panel (≈59%) contains a centered multi-step form wizard. The entire page has a dark background image (dark textured/gradient). The form container is a semi-transparent white panel with a 1px white border and rounded corners. The aesthetic is clean, academic, with a dark background and white text.

## Design Tokens

| Token                  | Value                   | Usage                         |
| ---------------------- | ----------------------- | ----------------------------- |
| Brand gold             | `#e4bd37`               | Category tag background       |
| Primary green          | `#6DAB3C`               | Next/submit button background |
| Green hover            | `#5f9434`               | Next button hover             |
| Gold hover             | `#c9a630`               | Next button hover alt         |
| Text primary           | `#ffffff`               | Body text, headings, labels   |
| Text muted             | `#666666`               | Previous button text          |
| Focus blue             | `#ceebf7`               | Form input focus border       |
| Border white           | `rgba(255,255,255,0.4)` | Input borders, select borders |
| Form panel bg          | `rgba(255,255,255,0.1)` | Wizard container background   |
| Input bg               | `rgba(255,255,255,0.2)` | Form control background       |
| Progress track         | `rgba(255,255,255,0.3)` | Progress bar background       |
| Progress fill          | `rgba(255,255,255,0.8)` | Progress bar active fill      |
| **Font — body**        | Poppins (Regular 400)   | Body text, labels, inputs     |
| **Font — heading**     | Poppins (SemiBold 600)  | Wizard title h3               |
| **Font — button**      | Muli (Bold 700)         | Previous button text          |
| Border radius — panel  | `10px`                  | Wizard container              |
| Border radius — inputs | `5px`                   | Form controls                 |
| Border radius — tag    | `5px`                   | Category tag pill             |

## Section Order & Gherkin Scenarios

### 1. Page Layout (split-screen)

```gherkin
Feature: FormPad page layout

  Scenario: Desktop shows split-screen layout
    Given the user opens the FormPad page on a desktop viewport (≥992px)
    Then the left panel displays a decorative image (≈41% width)
    And the right panel displays the form wizard (≈59% width)
    And the overall page background is a dark image/gradient

  Scenario: Tablet collapses to stacked layout
    Given the user opens the FormPad page on a tablet viewport (768px–991px)
    Then the image is hidden and the form takes full width

  Scenario: Mobile shows full-width form without image
    Given the user opens the FormPad page on a mobile viewport (≤767px)
    Then the image is not visible
    And the form stretches to full width with stacked fields
```

### 2. Form Header

```gherkin
Feature: FormPad form header

  Scenario: Header displays category tag
    Given the wizard form is loaded
    Then a gold category tag reads "Academic Programs" (or similar)

  Scenario: Header displays title
    Given the wizard form is loaded
    Then a heading reads "Register for the course online" (or similar)
    And the heading is uppercase with letter-spacing
```

### 3. Step 1 — Course Information

```gherkin
Feature: FormPad step 1 — course info

  Scenario: Step 1 shows course selection fields
    Given the wizard is on step 1
    Then the following fields are visible:
      | Field             | Type     | Options                      |
      | UF Online         | Select   | No, Yes                      |
      | Preferred System  | Select   | Canvas, Svg                  |
      | College/Dept      | Select   | University of Florida, etc.  |
      | Term              | Select   | Term 1, Term 2, Term 3       |
      | Instructor User   | Text     | (free text)                  |

  Scenario: Step 1 validates required fields
    Given the wizard is on step 1
    When the user clicks Next with empty required fields
    Then validation errors appear

  Scenario: Step 1 Next advances to step 2
    Given the wizard is on step 1
    When the user fills all fields and clicks Next
    Then the wizard transitions to step 2
    And the progress bar advances to the second position
```

### 4. Step 2 — Personal Information

```gherkin
Feature: FormPad step 2 — personal info

  Scenario: Step 2 shows personal fields
    Given the wizard is on step 2
    Then the following fields are visible:
      | Field            | Type     | Options                     |
      | Date of Birth    | Date     | (datepicker)                |
      | Country of Birth | Select   | United States, UK, Vietnam  |
      | Email            | Text     | (free text)                 |
      | Phone Number     | Text     | (free text)                 |
      | Gender           | Radio    | Male, Female, Transgender   |

  Scenario: Step 2 Previous returns to step 1
    Given the wizard is on step 2
    When the user clicks Previous
    Then the wizard transitions back to step 1

  Scenario: Step 2 Next advances to step 3
    Given the wizard is on step 2
    When the user fills all fields and clicks Next
    Then the wizard transitions to step 3
```

### 5. Step 3 — Course Selection & Agreement

```gherkin
Feature: FormPad step 3 — course selection

  Scenario: Step 3 shows course fields and agreement
    Given the wizard is on step 3
    Then the following fields are visible:
      | Field          | Type     | Placeholder               |
      | Course ID      | Text     | Ex. abc 12345 or abc 1234L |
      | Course Title   | Text     | Ex. Intro to physic       |
      | Sections       | Text     | Ex. 3679 or 33fa, 4295    |
      | Select Teacher | Select   | Frances Meyer, etc.       |
    And a Terms & Conditions checkbox is visible

  Scenario: Step 3 requires T&C agreement
    Given the wizard is on step 3
    When the user clicks Submit without checking T&C
    Then submission is blocked

  Scenario: Step 3 Submit completes the form
    Given the wizard is on step 3
    When the user fills all fields, checks T&C, and clicks Submit
    Then the form is submitted (success state or confirmation)
```

### 6. Progress Indicator

```gherkin
Feature: FormPad progress indicator

  Scenario: Progress bar shows current step
    Given the wizard is active
    Then a horizontal progress bar is visible below the form
    And the fill width corresponds to the current step (33% / 66% / 100%)

  Scenario: Progress bar animates between steps
    Given the wizard is on step 1
    When the user advances to step 2
    Then the progress bar fill animates from 33% to 66%
```

### 7. Navigation Buttons

```gherkin
Feature: FormPad navigation buttons

  Scenario: Previous button hidden on step 1
    Given the wizard is on step 1
    Then the Previous button is not visible

  Scenario: Previous button returns to prior step
    Given the wizard is on step 2
    When the user clicks Previous
    Then the wizard returns to step 1

  Scenario: Next button advances to next step
    Given the wizard is on step 1
    When the user clicks Next (with valid fields)
    Then the wizard advances to step 2

  Scenario: Final step shows Submit button
    Given the wizard is on step 3
    Then the primary action button reads "Submit" (or "Finish")
```

## Verification Checklist

- [ ] Split-screen layout on desktop (≈41% image / ≈59% form)
- [ ] Image hidden on tablet/mobile; form goes full-width
- [ ] Dark background with semi-transparent form panel (border + radius)
- [ ] Category tag pill with gold (#e4bd37) background
- [ ] Uppercase heading with letter-spacing
- [ ] 3-step wizard with correct fields per step
- [ ] Progress bar animates correctly (33% → 66% → 100%)
- [ ] Previous button hidden on step 1, functional on steps 2-3
- [ ] Next button green (#6DAB3C), hover darkens
- [ ] Form inputs have semi-transparent white background + white border
- [ ] Focus state shows light blue (#ceebf7) border
- [ ] Radio/checkbox buttons styled as circles
- [ ] Responsive: stacked layout on mobile, no image
- [ ] All fonts: Poppins (body/heading), Muli (button accent)
- [ ] Footer links to https://www.componentdock.com/
