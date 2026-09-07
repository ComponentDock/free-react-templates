# Reserva — Three-Step Room Booking Wizard Template

> Recreation of ColorLib Wizard 19 (https://colorlib.com/wp/template/colorlib-wizard-19/)
> Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-19/index.html
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-19.jpg

## Purpose

A three-step room booking wizard form for accommodation businesses. Step 1
("Account") collects email, country, password, daily budget, and newsletter
subscription. Step 2 ("Room type") presents radio buttons for Single room,
Family room, and Business room. Step 3 ("Extra details") provides a textarea
for room description. Each step has a step indicator bar at the top with
active-step blue underline. The original uses jQuery Steps; we use React
state for step navigation.

**Note:** The ColorLib preview (colorlib-wizard-19) returned HTTP 404 at the
time of research. The spec is based on the live preview HTML/CSS at
https://colorlib.com/etc/bwiz/colorlib-wizard-19/index.html (which was
accessible) and the page metadata on colorlib.com. The screenshot
(colorlib-free-wizard-19.jpg, AVIF format, 1200×972) was also analyzed
via page context.

## Design Tokens

| Token                  | Value                                                  | Source                                   |
| ---------------------- | ------------------------------------------------------ | ---------------------------------------- |
| Brand color            | `#6dbdfe` (sky blue)                                   | CSS `.actions ul li a`, step indicator   |
| Brand hover            | `#3aa6fe` (darker blue)                                | CSS `.actions ul li a:hover`             |
| Focus border           | `#6dbdfe` (sky blue)                                   | CSS `input:focus`                        |
| Body font              | Poppins 300–900                                        | CSS `@font-face`                         |
| Body weight            | 500 (medium)                                           | CSS `body`                               |
| Page background        | gradient `#d9afd9` → `#5a2170` → `#a1c4fd` → `#c2e9fb` | CSS `body` background-image              |
| Container bg           | `#fff` (white)                                         | CSS `.container`                         |
| Container width        | 840px, centered                                        | CSS `.container`                         |
| Container shadow       | `0px 3px 9.5px 0.5px rgba(0,0,0,0.15)`                 | CSS `.container`                         |
| Heading text           | `#999999` (muted gray)                                 | CSS `h3` (step labels)                   |
| Heading size           | 18px, bold                                             | CSS `h3`                                 |
| Body text              | `#222` (dark)                                          | CSS `body`                               |
| Muted text             | `#999`                                                 | CSS labels, placeholders, select icons   |
| Input border           | `#ebebeb` (light gray)                                 | CSS `input`, `textarea`                  |
| Input height           | 50px                                                   | CSS `input`                              |
| Input padding          | 15px 20px                                              | CSS `input`                              |
| Input placeholder      | `#999`, 13px                                           | CSS `input::placeholder`                 |
| Textarea height        | 150px                                                  | CSS `#room_description`                  |
| Step indicator border  | `1px solid #ebebeb` (bottom)                           | CSS `.steps`                             |
| Step active underline  | `#6dbdfe`, 3px height                                  | CSS `.steps ul li:after` (current)       |
| Step hover underline   | `#6dbdfe`, 3px height                                  | CSS `.steps ul li:hover:after`           |
| Radio checked border   | `#6dbdfe`                                              | CSS `input[type=radio]:checked ~ .check` |
| Radio checked fill     | `#6dbdfe`                                              | CSS `.check::before`                     |
| Radio unchecked border | `#ebebeb`                                              | CSS `.check`                             |
| Radio size             | 18px diameter, 12px inner dot                          | CSS `.check`, `.check:before`            |
| Checkbox border        | `#ebebeb` (18px × 18px)                                | CSS `input[type=checkbox] label > span`  |
| Checkbox icon          | Material Design Iconic Font `\f26b`                    | CSS `:checked + label > span:before`     |
| Button primary bg      | `#6dbdfe`                                              | CSS `.actions ul li a`                   |
| Button primary text    | `#fff`                                                 | CSS `.actions ul li a`                   |
| Button primary hover   | `#3aa6fe`                                              | CSS `.actions ul li a:hover`             |
| Button secondary bg    | `#ebebeb`                                              | CSS `.actions ul li:first-child a`       |
| Button secondary text  | `#999999`                                              | CSS `.actions ul li:first-child a`       |
| Button secondary hover | `#d2d2d2`                                              | CSS `.actions ul li:first-child a:hover` |
| Button dimensions      | 140px × 50px                                           | CSS `.actions ul li a`                   |
| Button text-transform  | uppercase                                              | CSS `.actions ul li a`                   |
| Select dropdown bg     | `#f8f8f8` (inactive items)                             | CSS `.select-list li:not(.init)`         |
| Select dropdown hover  | `#6dbdfe`                                              | CSS `.select-list li:hover`              |
| Radio label color      | `#666`                                                 | CSS `.form-radio-item label`             |
| Radio label weight     | 500                                                    | CSS `.form-radio-item label`             |
| Content padding        | 70px right, 80px left                                  | CSS `.content`                           |
| Content height         | 410px                                                  | CSS `.content`                           |
| Actions position       | absolute, bottom: 31px                                 | CSS `.actions`                           |

## Requirements

### Requirement: Renders gradient background with white card container

The template SHALL display a white card centered on a purple-to-blue gradient
background with a shadow.

#### Scenario: Initial page load

- **WHEN** the user loads the page
- **THEN** a white container card is visible
- **AND** the page background is a gradient from pink/purple (#d9afd9) through
  deep purple (#5a2170) to light blue (#a1c4fd/#c2e9fb)
- **AND** the card has a box shadow (`0px 3px 9.5px 0.5px rgba(0,0,0,0.15)`)

### Requirement: Step indicator bar with three steps

The form SHALL display a step indicator bar at the top with three labeled
steps: Account, Room type, Extra details.

#### Scenario: Step indicator visible on load

- **WHEN** the user loads the page
- **THEN** "Account", "Room type", and "Extra details" step labels are visible
- **AND** the "Account" step has a blue (#6dbdfe) 3px underline indicating
  it is the current step
- **AND** the step labels are gray (#999999) and bold, 18px

#### Scenario: Step indicator updates on navigation

- **WHEN** the user advances to step 2
- **THEN** "Room type" has the blue underline
- **AND** "Account" no longer has the blue underline

### Requirement: Step 1 — Account form

The form SHALL display account fields on step 1: email, country dropdown,
password, daily budget dropdown, and newsletter checkbox.

#### Scenario: Step 1 fields visible

- **WHEN** the user loads the page
- **THEN** "Your Email" input field is visible
- **AND** "Country" dropdown is visible (with options: Viet Nam, United States America)
- **AND** "Your password" input field is visible
- **AND** "Daily budget" dropdown is visible (with options: $40, $60)
- **AND** "Subscribe to our newsletter" checkbox is visible
- **AND** all four fields are arranged in a 2-column grid layout

#### Scenario: Form fields have correct styling

- **WHEN** the user views step 1
- **THEN** inputs have transparent background with 1px solid #ebebeb border
- **AND** inputs are 50px tall with 15px 20px padding
- **AND** placeholder text is #999 and 13px

### Requirement: Step 2 — Room type selection

The form SHALL advance to step 2 showing radio buttons for room type
selection with "Business room" pre-selected.

#### Scenario: Navigate to step 2

- **WHEN** the user clicks Next on step 1
- **THEN** the "Room type" step label shows the blue underline
- **AND** heading "What type of room would you want?" is visible
- **AND** "Single room" radio option is visible
- **AND** "Family room" radio option is visible
- **AND** "Business room" radio option is visible and pre-selected

#### Scenario: Radio button selection

- **WHEN** the user clicks "Single room"
- **THEN** the "Single room" radio button becomes selected
- **AND** the radio circle shows a blue (#6dbdfe) fill and border
- **AND** "Business room" is deselected

### Requirement: Step 3 — Extra details

The form SHALL advance to step 3 showing a textarea for room description.

#### Scenario: Navigate to step 3

- **WHEN** the user clicks Next on step 2
- **THEN** the "Extra details" step label shows the blue underline
- **AND** label "Room description" is visible
- **AND** a textarea with placeholder "Eg : The room must have air conditional . . ." is visible
- **AND** a "Finish" button is visible (no "Next" button on last step)

#### Scenario: Textarea styling

- **WHEN** the user views step 3
- **THEN** the textarea is 150px tall
- **AND** the textarea has 22px top margin

### Requirement: Step navigation with Previous and Next buttons

The form SHALL display Previous/Next navigation buttons at the bottom of
each step, with Previous on the left and Next on the right.

#### Scenario: Next button advances step

- **WHEN** the user clicks Next on step 1
- **THEN** step 2 (Room type) becomes visible
- **AND** step 1 fields are hidden

#### Scenario: Previous button goes back

- **WHEN** the user is on step 2 and clicks Previous
- **THEN** step 1 (Account) becomes visible again
- **AND** step 2 fields are hidden

#### Scenario: Last step shows Finish instead of Next

- **WHEN** the user is on step 3
- **THEN** a "Finish" button is visible (instead of "Next")

### Requirement: Form completes on Finish

The form SHALL show a completion action when the user clicks Finish.

#### Scenario: Finish form

- **WHEN** the user clicks Finish on step 3
- **THEN** a completion signal is emitted (submit handler called)

### Requirement: Button styling

All navigation buttons SHALL follow the consistent design pattern.

#### Scenario: Primary button styling

- **WHEN** the user views any step with Next or Finish button
- **THEN** the button is 140px × 50px with sky blue (#6dbdfe) background
- **AND** the button text is white, uppercase
- **AND** hovering the button changes background to #3aa6fe

#### Scenario: Secondary button styling

- **WHEN** the user is not on the first step
- **THEN** the Previous button has #ebebeb background with #999999 text
- **AND** hovering the Previous button changes background to #d2d2d2

### Requirement: Responsive layout

The template SHALL adjust the layout for smaller screens.

#### Scenario: Tablet layout

- **WHEN** the viewport is narrower than 992px
- **THEN** the container width becomes full width minus 40px
- **AND** step indicator margins reduce

#### Scenario: Mobile layout

- **WHEN** the viewport is narrower than 768px
- **THEN** the step indicator stacks vertically
- **AND** form fields stack vertically (full width)
- **AND** content padding reduces to 30px
- **AND** button area bottom padding reduces to 20px

#### Scenario: Small mobile layout

- **WHEN** the viewport is narrower than 480px
- **THEN** buttons shrink to 100px width

## Verification Checklist

- [ ] Purple-to-blue gradient background with white card container
- [ ] Three-step indicator bar (Account, Room type, Extra details)
- [ ] Active step has blue (#6dbdfe) 3px underline
- [ ] Step 1: Email, Country dropdown, Password, Budget dropdown, Newsletter checkbox in 2-column grid
- [ ] Step 2: Radio buttons for Single/Family/Business room (Business pre-selected)
- [ ] Step 3: Room description textarea with placeholder
- [ ] Previous (gray) / Next (blue) / Finish button navigation
- [ ] Buttons are 140px × 50px, uppercase, with correct hover states
- [ ] Form inputs: transparent bg, #ebebeb border, 50px height, Poppins font
- [ ] Responsive layout at 992px, 768px, 480px breakpoints
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Google Fonts (Poppins) loaded via index.html
