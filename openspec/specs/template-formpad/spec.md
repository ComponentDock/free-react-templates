# Template: FormPad (Course Registration Wizard)

## Purpose

Recreation of ColorLib's **Colorlib Wizard 4** — a free multi-step course registration form wizard template.

- **Source slug:** `colorlib-wizard-4`
- **Source URL:** https://colorlib.com/wp/template/colorlib-wizard-4/
- **Preview/demo URL:** https://colorlib.com/etc/bwiz/colorlib-wizard-4/index.html
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

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
| Font — body            | Poppins (Regular 400)   | Body text, labels, inputs     |
| Font — heading         | Poppins (SemiBold 600)  | Wizard title h3               |
| Font — button          | Muli (Bold 700)         | Previous button text          |
| Border radius — panel  | `10px`                  | Wizard container              |
| Border radius — inputs | `5px`                   | Form controls                 |

## Requirements

### Requirement: Split-screen layout

The page SHALL display a split-screen layout on desktop viewports (≥992px) with a decorative image on the left panel (≈41% width) and the form wizard on the right panel (≈59% width).

#### Scenario: Desktop shows split-screen layout

- **WHEN** the user opens the FormPad page on a desktop viewport (≥992px)
- **THEN** the left panel displays a decorative image (≈41% width)
- **AND** the right panel displays the form wizard (≈59% width)
- **AND** the overall page background is a dark image/gradient

#### Scenario: Tablet collapses to stacked layout

- **WHEN** the user opens the FormPad page on a tablet viewport (768px–991px)
- **THEN** the image is hidden and the form takes full width

#### Scenario: Mobile shows full-width form without image

- **WHEN** the user opens the FormPad page on a mobile viewport (≤767px)
- **THEN** the image is not visible
- **AND** the form stretches to full width with stacked fields

### Requirement: Form header with category tag and title

The form header SHALL display a gold category tag pill and an uppercase heading with letter-spacing.

#### Scenario: Header displays category tag

- **WHEN** the wizard form is loaded
- **THEN** a gold category tag reads "#Academic Programs"

#### Scenario: Header displays title

- **WHEN** the wizard form is loaded
- **THEN** a heading reads "Register for the course online"
- **AND** the heading is uppercase with letter-spacing

### Requirement: Step 1 — Course Information

Step 1 SHALL display 5 fields: UF Online (select), Preferred System (select), College/Dept (select), Term (select), and Instructor Username (text).

#### Scenario: Step 1 shows course selection fields

- **WHEN** the wizard is on step 1
- **THEN** the UF Online select is visible with options: Select, No, Yes
- **AND** the Preferred System select is visible with options: Select, Canvas, Svg
- **AND** the College/Dept select is visible with options: Select, University of Florida, University of Harvard, University of Oxford
- **AND** the Term select is visible with options: Select Term, Term 1, Term 2, Term 3
- **AND** the Instructor Username text input is visible

#### Scenario: Step 1 validates required fields

- **WHEN** the wizard is on step 1
- **AND** the user clicks Next with empty required fields
- **THEN** validation errors appear

#### Scenario: Step 1 Next advances to step 2

- **WHEN** the wizard is on step 1
- **AND** the user fills all fields and clicks Next
- **THEN** the wizard transitions to step 2
- **AND** the progress bar advances

### Requirement: Step 2 — Personal Information

Step 2 SHALL display 5 fields: Date of Birth (date), Country of Birth (select), Email (text), Phone Number (text), and Gender (radio: Male, Female, Transgender).

#### Scenario: Step 2 shows personal fields

- **WHEN** the wizard is on step 2
- **THEN** the Date of Birth input is visible
- **AND** the Country of Birth select is visible
- **AND** the Email input is visible
- **AND** the Phone Number input is visible
- **AND** the Gender radio group is visible with Male, Female, Transgender options

#### Scenario: Step 2 Previous returns to step 1

- **WHEN** the wizard is on step 2
- **AND** the user clicks Previous
- **THEN** the wizard transitions back to step 1

#### Scenario: Step 2 Next advances to step 3

- **WHEN** the wizard is on step 2
- **AND** the user fills all fields and clicks Next
- **THEN** the wizard transitions to step 3

### Requirement: Step 3 — Course Selection & Agreement

Step 3 SHALL display 4 fields: Course ID (text), Course Title (text), Sections (text), Select Teacher (select), and a Terms & Conditions checkbox.

#### Scenario: Step 3 shows course fields and agreement

- **WHEN** the wizard is on step 3
- **THEN** the Course ID input is visible with placeholder "Ex. abc 12345 or abc 1234L"
- **AND** the Course Title input is visible with placeholder "Ex. Intro to physic"
- **AND** the Sections input is visible with placeholder "Ex. 3679 or 33fa, 4295"
- **AND** the Select Teacher select is visible
- **AND** the Terms & Conditions checkbox is visible

#### Scenario: Step 3 requires T&C agreement

- **WHEN** the wizard is on step 3
- **AND** the user clicks Submit without checking T&C
- **THEN** submission is blocked

#### Scenario: Step 3 Submit completes the form

- **WHEN** the wizard is on step 3
- **AND** the user fills all fields, checks T&C, and clicks Submit
- **THEN** the form shows a confirmation message

### Requirement: Progress indicator

A horizontal progress bar SHALL indicate the current step with animated fill.

#### Scenario: Progress bar shows current step

- **WHEN** the wizard is active
- **THEN** a horizontal progress bar is visible below the form
- **AND** the fill width corresponds to the current step

#### Scenario: Progress bar animates between steps

- **WHEN** the wizard is on step 1
- **AND** the user advances to step 2
- **THEN** the progress bar fill animates

### Requirement: Navigation buttons

Previous button SHALL be hidden on step 1 and visible on steps 2-3. Next button advances steps. Submit button appears on step 3.

#### Scenario: Previous button hidden on step 1

- **WHEN** the wizard is on step 1
- **THEN** the Previous button is not visible

#### Scenario: Previous button returns to prior step

- **WHEN** the wizard is on step 2
- **AND** the user clicks Previous
- **THEN** the wizard returns to step 1

#### Scenario: Next button advances to next step

- **WHEN** the wizard is on step 1
- **AND** the user clicks Next with valid fields
- **THEN** the wizard advances to step 2

#### Scenario: Final step shows Submit button

- **WHEN** the wizard is on step 3
- **THEN** the primary action button reads "Submit"

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer displays Component Dock link

- **WHEN** the page is rendered
- **THEN** a footer link points to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"
- **AND** the link opens in a new tab
