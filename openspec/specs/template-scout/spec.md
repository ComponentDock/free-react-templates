# Scout — Three-Step Feedback Wizard Template

> Recreation of ColorLib Wizard 18 (https://colorlib.com/wp/template/colorlib-wizard-18/)
> Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-18/index.html
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-18.jpg

## Purpose

A three-step feedback/review wizard form. Step 1 shows star ratings for
Overall Quality, Ease of Use, Features & Functionality, Customer Support,
and Value of Money. Step 2 shows a textarea for a written review. Step 3
shows contact information fields (First Name, Last Name, Email, Phone).
Each step has a figure illustration on the left and form content on the right.
The original uses jQuery Steps; we use React state for step navigation.

## Design Tokens

| Token                | Value                                  | Source                                   |
| -------------------- | -------------------------------------- | ---------------------------------------- |
| Brand color          | `#1abc9c` (teal)                       | CSS `.actions ul li a`, step indicator   |
| Brand light          | `#43d7ba` (light teal)                 | CSS step gradient                        |
| Brand hover          | `#148f77` (dark teal)                  | CSS button hover                         |
| Body font            | Poppins 300–900                        | CSS `@font-face`                         |
| Button font          | Montserrat 300–900                     | CSS `.actions ul li a`                   |
| Page background      | `#f8f8f8` (light gray)                 | CSS `body`                               |
| Container bg         | `#fff` (white)                         | CSS `.container`                         |
| Container shadow     | `0px 5px 9.5px 0.5px rgba(0,0,0,0.08)` | CSS `.container`                         |
| Container radius     | `10px`                                 | CSS `.container`                         |
| Heading text         | `#222` (dark)                          | CSS `h2`                                 |
| Body text            | `#222` (dark)                          | CSS `body`                               |
| Muted text           | `#999`                                 | CSS buttons, labels                      |
| Input border         | `#ebebeb` (light gray)                 | CSS `input`, `textarea`                  |
| Form label           | `#222`, 22px, bold                     | CSS `.form-label`                        |
| Step indicator bg    | gradient `#43d7ba` → `#1abc9c`         | CSS `.step-current`                      |
| Step indicator text  | `#fff`                                 | CSS `.step-current-content`              |
| Step number size     | 33px                                   | CSS `.step-number span`                  |
| Star checked         | `#fbd91b` (gold)                       | CSS `.form-rating > input:checked`       |
| Star unchecked       | `#ebebeb` (light gray)                 | CSS `.form-rating:not(:checked) > label` |
| Button primary bg    | `#1abc9c`                              | CSS `.actions ul li a`                   |
| Button primary text  | `#fff`                                 | CSS `.actions ul li a`                   |
| Button secondary bg  | `#f8f8f8`                              | CSS `.actions ul li:first-child a`       |
| Button secondary     | `#999`                                 | CSS `.actions ul li:first-child a`       |
| Button border-radius | `5px`                                  | CSS `.actions ul li a`                   |
| Button dimensions    | 140px × 50px                           | CSS `.actions ul li a`                   |
| Button font-weight   | 900 (black)                            | CSS `.actions ul li a`                   |
| Textarea height      | 178px                                  | CSS `textarea`                           |

## Requirements

### Requirement: Renders white card container on gray background

The template SHALL display a white rounded card centered on a light gray
background with a step indicator badge in the top-right corner.

#### Scenario: Initial page load

- **WHEN** the user loads the page
- **THEN** a white container card is visible
- **AND** the page background is light gray (#f8f8f8)
- **AND** a step indicator showing "01/03" is visible

### Requirement: Step 1 shows star ratings

The form SHALL display five star-rating categories on step 1 with an
illustration on the left.

#### Scenario: Step 1 visible

- **WHEN** the user loads the page
- **THEN** heading "What do you think about AU services?" is visible
- **AND** "Overall Quality" rating row is visible
- **AND** "Ease of Use" rating row is visible
- **AND** "Features & Functionality" rating row is visible
- **AND** "Customer Support" rating row is visible
- **AND** "Value of Money" rating row is visible
- **AND** an illustration image is visible

#### Scenario: Star rating interaction

- **WHEN** the user clicks a star in a rating row
- **THEN** the selected star and preceding stars turn gold (#fbd91b)

### Requirement: Step 2 shows review textarea

The form SHALL advance to step 2 showing a textarea for written review.

#### Scenario: Navigate to step 2

- **WHEN** the user clicks Next on step 1
- **THEN** "02/03" step indicator is visible
- **AND** a "Your Review" textarea is visible
- **AND** an illustration image is visible

### Requirement: Step 3 shows contact information

The form SHALL advance to step 3 showing contact fields with "03/03"
indicator and a "Finish" button.

#### Scenario: Navigate to step 3

- **WHEN** the user clicks Next on step 2
- **THEN** "03/03" step indicator is visible
- **AND** "Enter your information manually below" label is visible
- **AND** First Name and Last Name input fields are visible side by side
- **AND** Email and Phone number input fields are visible
- **AND** a "Finish" button is visible

### Requirement: Step navigation with Previous button

The user SHALL be able to navigate backward to any previous step.

#### Scenario: Go back to previous step

- **WHEN** the user is on step 2 and clicks Previous
- **THEN** step 1 becomes visible again
- **AND** "01/03" text is shown

### Requirement: Form completes on Finish

The form SHALL show a completion action when the user clicks Finish on the
last step.

#### Scenario: Finish form

- **WHEN** the user clicks Finish on step 3
- **THEN** a completion signal is emitted (submit handler called)

### Requirement: Responsive layout

The template SHALL adjust the layout for smaller screens.

#### Scenario: Tablet layout

- **WHEN** the viewport is narrower than 992px
- **THEN** the fieldset-flex stacks vertically (illustration above content)

#### Scenario: Mobile layout

- **WHEN** the viewport is narrower than 768px
- **THEN** the form takes full width

## Verification Checklist

- [ ] White card on gray background with shadow and rounded corners
- [ ] Circular step indicator badge (gradient teal) with "01/03" format
- [ ] 5 star-rating categories with gold active stars
- [ ] Review textarea on step 2
- [ ] Contact info fields on step 3 (First Name, Last Name, Email, Phone)
- [ ] Previous/Next/Finish button navigation
- [ ] Step indicator updates on each step
- [ ] Illustration images on each step (using picsum.photos)
- [ ] Responsive layout adjustment
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Google Fonts (Poppins, Montserrat) loaded via index.html
