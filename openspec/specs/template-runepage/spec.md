# Template: RunePage (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 4" — a multi-step academic course registration wizard form with split-panel layout. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-4/index.html. Source slug: `colorlib-wizard-4`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with progress bar, date picker, radio/checkbox inputs, and split image+form layout.

## Design Tokens (from reference CSS)

| Token                     | Value                                                                                       | Source                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Font family               | `'Poppins', sans-serif` (Regular + SemiBold)                                                | Google Fonts / `Poppins-Regular.ttf`                    |
| Heading font              | `'Poppins', sans-serif` SemiBold                                                            | `.form-header h3`                                       |
| Button font               | `'Muli', sans-serif` Bold                                                                   | `.actions li a`                                         |
| Primary brand color       | `#e4bd37` (golden yellow)                                                                   | `.form-header a` background, `.actions li a` background |
| Button hover              | `#c9a630` (darker gold)                                                                     | `.actions li a:hover`                                   |
| Body background           | Full-bleed image (`form-wizard-bg.png`)                                                     | `body` background                                       |
| Body text color           | `#fff` (white)                                                                              | `body` color                                            |
| Form container background | `rgba(255, 255, 255, 0.1)` (translucent white)                                              | `#wizard` background                                    |
| Form container border     | `1px solid #fff`, `border-radius: 10px`                                                     | `#wizard`                                               |
| Input background          | `rgba(255, 255, 255, 0.2)`                                                                  | `.form-control`                                         |
| Input border              | `1px solid rgba(255, 255, 255, 0.4)`, `border-radius: 5px`                                  | `.form-control`                                         |
| Input focus               | `box-shadow: 0px 0px 7px 0px rgba(255, 255, 255, 0.7)`, `border: 1px solid #ceebf7`         | `.form-control:focus`                                   |
| Progress bar track        | `rgba(255, 255, 255, 0.3)`, `border-radius: 6px`                                            | `.wizard > .steps ul`                                   |
| Progress bar fill         | `rgba(255, 255, 255, 0.8)`, `border-radius: 6px`                                            | `.wizard > .steps ul:after`                             |
| Step icon                 | Material Design Iconic Font `\f26b`                                                         | `.wizard > .steps ul:before`                            |
| Next button               | `#e4bd37` gold, `height: 54px`, `width: 180px`, `border-radius: 27px`, Muli-Bold, uppercase | `.actions li a`                                         |
| Back button               | `#fff` white bg, `#666` text, `width: 136px`, `border-radius: 27px`                         | `.actions li:first-child a`                             |
| Back button hover         | `#e5e5e5`                                                                                   | `.actions li:first-child a:hover`                       |
| Header badge              | `#e4bd37` bg, `border-radius: 5px`, white text, `padding: 5px 15px`                         | `.form-header a`                                        |
| Radio/checkbox circle     | `15px` diameter, `border-radius: 50%`, `border: 1px solid rgba(255, 255, 255, 0.4)`         | `.checkmark`                                            |
| Radio/checkbox fill       | `7px` diameter, `border-radius: 50%`, white bg                                              | `.checkmark:after`                                      |
| Option text               | `#999`                                                                                      | `.option`                                               |
| Label width               | `34.9%`                                                                                     | `.form-row label`                                       |
| Form holder width         | `65.1%`                                                                                     | `.form-row .form-holder`                                |
| Layout                    | Flexbox split: image 41.07% left, form 58.93% right                                         | `.wrapper`                                              |
| Responsive                | Image hidden at ≤991px, form goes full-width, stacked at ≤767px                             | Media queries                                           |

## Requirements

### Feature: Multi-Step Course Registration Wizard

#### Scenario: Page load and initial layout

- **GIVEN** the user navigates to the RunePage wizard
- **THEN** a split-panel layout is displayed with an image on the left (41%) and a form on the right (59%)
- **AND** the form header shows a golden badge reading "#Academic Programs"
- **AND** a heading "Register for the course online" is visible below the badge

#### Scenario: Step 1 — Course Information

- **GIVEN** the wizard is on step 1
- **THEN** five fields are visible: "Is this course for UF Online?" (select: No/Yes), "Preferred System" (select: Canvas/Svg), "College / Department" (select: University of Florida/Havard/Oxford), "Term" (select placeholder "Select Term" + Term 1/2/3), and "Instructor Username" (text input)
- **AND** a "Next" button (gold, rounded) is visible at the bottom right
- **AND** a progress bar shows 33% filled (step 1 of 3)

#### Scenario: Step 2 — Personal Information

- **GIVEN** the user completes step 1 and clicks "Next"
- **THEN** five fields are visible: "Date of Birth" (date input), "Country of Birth" (select: US/UK/Vietnam), "Your Email" (text input), "Phone Number" (text input), and "Gender" (radio: Male/Female/Transgender)
- **AND** a "Back" button (white, rounded) appears at the bottom left
- **AND** the progress bar fills to 66%

#### Scenario: Step 3 — Course Details & Confirmation

- **GIVEN** the user completes step 2 and clicks "Next"
- **THEN** four fields are visible: "Course ID" (text with placeholder), "Course Title" (text with placeholder), "Section(s)" (text with placeholder), and "Select Teacher" (select: Frances Meyer/Johan Lucas/Merry Linn)
- **AND** a checkbox "I agree all statement in Terms & Conditions" is shown (checked by default)
- **AND** the progress bar fills to 100%
- **AND** a "Finish" or "Submit" button replaces the "Next" button

#### Scenario: Navigation between steps

- **GIVEN** the user is on step 2 or 3
- **WHEN** the user clicks the "Back" button
- **THEN** the previous step's fields are displayed
- **AND** the progress bar regresses to the correct percentage

#### Scenario: Progress bar animation

- **GIVEN** the wizard transitions between steps
- **THEN** the progress bar animates smoothly (CSS transition 0.5s ease)
- **AND** the step icon position moves to indicate the current step

#### Scenario: Responsive layout (mobile)

- **GIVEN** the viewport is ≤991px wide
- **THEN** the left image panel is hidden
- **AND** the form takes full width
- **GIVEN** the viewport is ≤767px wide
- **THEN** form rows stack vertically (labels above inputs)
- **AND** action buttons stack vertically aligned right

#### Scenario: Input focus styling

- **GIVEN** the user focuses on any text input or select
- **THEN** a soft white glow box-shadow appears
- **AND** the border changes to light blue (#ceebf7)

#### Scenario: Button hover effects

- **GIVEN** the user hovers over the "Next" button
- **THEN** the background darkens to #c9a630
- **AND** the arrow icon wobbles horizontally (CSS animation)

## Verification checklist

- [ ] Split-panel layout matches 41%/59% ratio
- [ ] Background image covers full viewport
- [ ] Golden brand color (#e4bd37) used for header badge, Next button, progress highlights
- [ ] Poppins font family for body, Muli Bold for buttons
- [ ] Form container has translucent white background with white border and 10px radius
- [ ] 3-step wizard with progress bar (animated transitions)
- [ ] Step 1: 5 fields (3 selects + 1 select with placeholder + 1 text input)
- [ ] Step 2: 5 fields (1 date + 1 select + 2 text inputs + radio group)
- [ ] Step 3: 4 fields (3 text inputs + 1 select) + terms checkbox
- [ ] Back button (white, left-aligned) and Next button (gold, right-aligned)
- [ ] Button pill shape (border-radius: 27px, height: 54px)
- [ ] Radio/checkbox custom circular styling with white fill
- [ ] Input focus glow effect (#ceebf7 border + white shadow)
- [ ] Responsive: image hidden at ≤991px, stacked layout at ≤767px
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
