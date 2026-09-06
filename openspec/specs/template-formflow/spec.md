# Template: FormFlow (Multi-Step Wizard Form)

## Purpose

Recreation of ColorLib **Colorlib Wizard 4** — a multi-step academic course registration wizard.

- **Source:** https://colorlib.com/wp/template/colorlib-wizard-4/
- **Preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-4/index.html
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the live preview stylesheet (css/style.css):

| Token | Value |
|---|---|
| Font family (body) | "Poppins-Regular" (Poppins), sans-serif |
| Font family (buttons) | "Muli-Bold" (Muli), sans-serif |
| Font size (base) | 15px |
| Text color | #fff (white) |
| Background | Image (dark/blue gradient, form-wizard-bg.png) |
| Brand/accent color | #e4bd37 (golden yellow) |
| Button height | 54px |
| Button border-radius | 27px (pill) |
| Button text | uppercase, letter-spacing 1.3px, white |
| Button hover bg | #c9a630 |
| Back button bg | #fff |
| Back button text | #666 |
| Back button width | 136px |
| Form control height | 41px |
| Form control border | 1px solid rgba(255,255,255,0.4) |
| Form control bg | rgba(255,255,255,0.2) |
| Form control border-radius | 5px |
| Form control focus border | #ceebf7 |
| Form control focus shadow | 0px 0px 7px 0px rgba(255,255,255,0.7) |
| Form label width | 34.9% |
| Form input width | 65.1% |
| Wizard container border | 1px solid #fff |
| Wizard container border-radius | 10px |
| Wizard container padding | 47px 57px 50px 50px |
| Wizard container bg | rgba(255,255,255,0.1) |
| Progress bar bg | rgba(255,255,255,0.3) |
| Progress bar filled | rgba(255,255,255,0.8) |
| Progress bar border-radius | 6px |
| Progress bar height | 12px |
| Heading font | "Poppins-SemiBold" |
| Heading size | 22px, uppercase, letter-spacing 3px |
| Badge bg | #e4bd37 |
| Badge border-radius | 5px |
| Checkbox | circular, border 1px solid rgba(255,255,255,0.4) |

## Visual description

A full-page layout with a dark blue/image background. Left side (41%) shows an illustration image. Right side (59%) contains the wizard form. The form has a header with a golden yellow (#e4bd37) badge "#Academic Programs" and an uppercase heading "Register for the course online". The wizard container has a white border, rounded corners, and semi-transparent background. Three steps with a progress bar at the bottom. Step 1: course selection (UF Online, system, department, term, instructor). Step 2: personal info (DOB, country, email, phone, gender). Step 3: course details (ID, title, sections, teacher, T&C checkbox). Navigation: back (white) and next/finish (golden yellow) pill buttons.

## Gherkin requirements

### Feature: FormFlow Multi-Step Wizard

```gherkin
Feature: FormFlow multi-step wizard form template

  Background:
    Given the user has loaded the FormFlow application
    Then the page displays a full-page wizard form

  Scenario: Page layout shows split view
    Given the page has loaded
    Then an illustration image is displayed on the left (41% width)
    And the form is displayed on the right (59% width)

  Scenario: Form header displays badge and heading
    Given the page has loaded
    Then a golden yellow badge "#Academic Programs" is displayed
    And an uppercase heading "Register for the course online" is displayed

  Scenario: Wizard has three steps
    Given the page has loaded
    Then a progress bar with 3 segments is displayed
    And step 1 is currently active

  Scenario: Step 1 shows course selection fields
    Given the wizard is on step 1
    Then "Is this course for UF Online?" dropdown is displayed
    And "Preferred System" dropdown is displayed
    And "College / Department" dropdown is displayed
    And "Term" dropdown is displayed
    And "Instructor Username" text input is displayed

  Scenario: Next button advances to step 2
    Given the wizard is on step 1
    When the user clicks the "Next" button
    Then the wizard advances to step 2
    And the progress bar fills to 66.67%

  Scenario: Step 2 shows personal info fields
    Given the wizard is on step 2
    Then "Date of Birth" date picker is displayed
    And "Country of Birth" dropdown is displayed
    And "Your Email" text input is displayed
    And "Phone Number" text input is displayed
    And "Gender" radio buttons (Male, Female, Transgender) are displayed

  Scenario: Back button returns to step 1
    Given the wizard is on step 2
    When the user clicks the "Back" button
    Then the wizard returns to step 1
    And the progress bar fills to 33.33%

  Scenario: Step 3 shows course details
    Given the wizard is on step 3
    Then "Course ID" text input is displayed
    And "Course Title" text input is displayed
    And "Section(s)" text input is displayed
    And "Select Teacher" dropdown is displayed
    And a Terms & Conditions checkbox is displayed

  Scenario: Finish button completes wizard
    Given the wizard is on step 3
    When the user clicks the "Finish" button
    Then the form is submitted

  Scenario: Form controls have glass style
    Given the page has loaded
    Then all form controls have rgba(255,255,255,0.2) background
    And all form controls have 1px solid rgba(255,255,255,0.4) border
    And all form controls have 5px border-radius

  Scenario: Buttons have pill shape
    Given the page has loaded
    Then the Next/Finish button has border-radius 27px (pill)
    And the Next/Finish button has golden yellow (#e4bd37) background
    And the Back button has white background with #666 text

  Scenario: Progress bar updates with steps
    Given the wizard is on step 1
    Then the progress bar shows 33.33% filled
    When the user advances to step 2
    Then the progress bar shows 66.67% filled
    When the user advances to step 3
    Then the progress bar shows 100% filled

  Scenario: Responsive layout on mobile
    Given the user views on a mobile device
    Then the illustration image is hidden
    And the form takes full width
    And form rows stack vertically
    And buttons stack vertically

  Scenario: Font family is Poppins
    Given the page has loaded
    Then the body font is "Poppins-Regular", sans-serif
```

## Verification checklist

- [ ] Full-page layout with illustration + form split
- [ ] Golden yellow badge and uppercase heading
- [ ] 3-step wizard with progress bar
- [ ] Step 1: course selection dropdowns + instructor input
- [ ] Step 2: personal info (DOB, country, email, phone, gender radio)
- [ ] Step 3: course details + T&C checkbox
- [ ] Next/Finish pill button (#e4bd37, border-radius 27px)
- [ ] Back button (white bg, #666 text)
- [ ] Form controls: glass style (rgba white bg, white border)
- [ ] Progress bar: 3 segments, fills with steps
- [ ] Responsive: stacks on mobile, image hidden
- [ ] Font family: Poppins + Muli
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Accessible: semantic elements, labels, keyboard navigation
