# WizPath — Multi-Step Registration Wizard Template

> Recreation of ColorLib Wizard 19 (https://colorlib.com/wp/template/colorlib-wizard-19/)
> Source HTML: https://colorlib.com/etc/bwiz/colorlib-wizard-19/index.html
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-19.jpg
> Note: Preview at `preview.colorlib.com/theme/colorlib-wizard-19/` returned 404;
> source HTML + CSS from the download bundle were used as primary references.

## Purpose

A three-step registration / sign-up wizard form. Step 1 ("Account") collects
email, country, password, and daily budget plus a newsletter checkbox. Step 2
("Room type") asks the user to pick a radio option (Single / Family / Business
room). Step 3 ("Extra details") shows a textarea for room description. Each step
has a heading rendered as a tab in a horizontal step indicator bar at the top.
The original uses jQuery Steps; we use React state for step navigation.

## Design Tokens

| Token                | Value                                  | Source                               |
| -------------------- | -------------------------------------- | ------------------------------------ |
| Brand color          | `#6dbdfe` (sky blue)                   | CSS `.actions ul li a`, step underlines |
| Brand hover          | `#3aa6fe` (darker sky blue)            | CSS button hover                     |
| Brand alt            | `#d2d2d2` (back button hover)          | CSS `.actions ul li:first-child a:hover` |
| Page background      | gradient — `#d9afd9` → `#5a2170` → `#a1c4fd` → `#c2e9fb` (diagonal) | CSS `body` |
| Container bg         | `#fff` (white)                         | CSS `.container`                     |
| Body font            | Poppins 300–600                        | CSS `@font-face`, `input`, `body`    |
| Heading text         | `#222` (dark)                          | CSS `h3`                             |
| Body text            | `#222` (dark)                          | CSS `body`                           |
| Muted text           | `#999` / `#999999`                     | CSS placeholders, step labels, icons |
| Input border         | `#ebebeb` (light gray)                 | CSS `input`, `textarea`, `fieldset`  |
| Input focus border   | `#6dbdfe` (brand blue)                 | CSS `input:focus`                    |
| Input height         | 50px                                   | CSS `input`, `textarea`              |
| Input font-size      | 15px, weight 500                       | CSS `input`                          |
| Placeholder font-size| 13px, color `#999`                     | CSS `::-webkit-input-placeholder`    |
| Step indicator border| `1px solid #ebebeb` (bottom)           | CSS `.steps`                         |
| Step underline color | `#6dbdfe` (brand)                      | CSS `.steps ul li:after`             |
| Step underline height| 3px (current), 0px (inactive)          | CSS `.steps ul li:after`             |
| Step label color     | `#999999` inactive, `#6dbdfe` current  | CSS `.steps ul li a`, `.current a h3` |
| Step label style     | uppercase, bold, text-align center     | CSS `.steps ul li a`                 |
| Button primary bg    | `#6dbdfe`                              | CSS `.actions ul li a`               |
| Button primary text  | `#fff`                                 | CSS `.actions ul li a`               |
| Button primary hover | `#3aa6fe`                              | CSS `.actions ul li a:hover`         |
| Button secondary bg  | `#ebebeb`                              | CSS `.actions ul li:first-child a`   |
| Button secondary text| `#999999`                              | CSS `.actions ul li:first-child a`   |
| Button secondary hover| `#d2d2d2`                             | CSS `.actions ul li:first-child a:hover` |
| Button dimensions    | 140px × 50px                           | CSS `.actions ul li a`               |
| Button text-style    | uppercase, no text-decoration          | CSS `.actions ul li a`               |
| Checkbox size        | 18px × 18px, border `1px solid #ebebeb`| CSS `input[type=checkbox] + label > span` |
| Radio circle size    | 18px × 18px, border-radius 50%        | CSS `.check`                         |
| Radio checked border | `1px solid #6dbdfe`                    | CSS `input[type=radio]:checked ~ .check` |
| Radio checked dot    | `#6dbdfe`                              | CSS `input[type=radio]:checked ~ .check::before` |
| Textarea height      | 150px + 22px margin-top                | CSS `#room_description`              |
| Content area height  | 410px (desktop)                        | CSS `.content`                       |
| Content padding      | 80px left, 70px right                  | CSS `.content`                       |
| Select dropdown hover| `#6dbdfe` bg, `#fff` text              | CSS `.select-list li:not(.init):hover`|
| Select dropdown bg   | `#f8f8f8`                              | CSS `.select-list li:not(.init)`     |

## Requirements

### Requirement: Renders a centered white card on a gradient background

The template SHALL display a white container card centered on a full-page
gradient background (purple-to-blue diagonal).

#### Scenario: Initial page load

- **WHEN** the user loads the page
- **THEN** a white container card is visible
- **AND** the page background is a gradient (purple/blue tones)
- **AND** a three-tab step indicator bar is visible at the top of the card

### Requirement: Step indicator shows three named steps

The template SHALL display a horizontal step indicator bar with three tabs:
"Account", "Room type", and "Extra details".

#### Scenario: Step 1 is active by default

- **WHEN** the user loads the page
- **THEN** the "Account" tab is highlighted (blue text, 3px underline)
- **AND** the "Room type" and "Extra details" tabs are muted (#999999)

#### Scenario: Clicking a completed step tab

- **WHEN** the user has completed step 1 and clicks the "Account" tab
- **THEN** the form navigates back to step 1

### Requirement: Step 1 — Account form fields

Step 1 SHALL display four form fields in two rows (email + country on row 1,
password + daily budget on row 2) and a newsletter checkbox.

#### Scenario: Step 1 fields visible

- **WHEN** the user is on step 1
- **THEN** an "Your Email" input field is visible
- **AND** a "Country" select dropdown is visible
- **AND** a "Your password" input field is visible
- **AND** a "Daily budget" select dropdown is visible
- **AND** a "Subscribe to our newsletter" checkbox is visible

#### Scenario: Step 1 form validation

- **WHEN** the user clicks "Next" without entering an email
- **THEN** the form shows a validation error or prevents progression

#### Scenario: Select dropdown interaction

- **WHEN** the user clicks the "Country" dropdown
- **THEN** a list of country options appears
- **AND** selecting an option updates the dropdown value

### Requirement: Step 2 — Room type radio selection

Step 2 SHALL display a radio group asking "What type of room would you want?"
with three options: Single room, Family room, Business room.

#### Scenario: Step 2 fields visible

- **WHEN** the user navigates to step 2
- **THEN** a heading "What type of room would you want?" is visible
- **AND** radio buttons for "Single room", "Family room", and "Business room" are visible
- **AND** "Business room" is checked by default

#### Scenario: Radio selection interaction

- **WHEN** the user clicks "Single room"
- **THEN** "Single room" becomes selected (blue filled circle)
- **AND** "Business room" becomes deselected

### Requirement: Step 3 — Extra details textarea

Step 3 SHALL display a textarea labeled "Room description" with a placeholder.

#### Scenario: Step 3 fields visible

- **WHEN** the user navigates to step 3
- **THEN** a label "Room description" is visible
- **AND** a textarea with placeholder "Eg : The room must have air conditional . . ." is visible

### Requirement: Step navigation buttons

Each step SHALL have "Previous" and "Next" (or "Finish" on the last step)
buttons positioned at the bottom of the card.

#### Scenario: Previous button hidden on step 1

- **WHEN** the user is on step 1
- **THEN** no "Previous" button is visible

#### Scenario: Previous button visible on step 2

- **WHEN** the user is on step 2
- **THEN** a "Previous" button (gray background) is visible at the bottom-left

#### Scenario: Next button advances to next step

- **WHEN** the user clicks "Next" on step 1
- **THEN** the form transitions to step 2
- **AND** the step indicator updates to highlight "Room type"

#### Scenario: Finish button on step 3

- **WHEN** the user is on step 3
- **THEN** the right-side button reads "Finish" (instead of "Next")

### Requirement: Responsive layout

The template SHALL be responsive across desktop, tablet, and mobile.

#### Scenario: Mobile layout

- **WHEN** the viewport width is ≤ 768px
- **THEN** the step indicator tabs stack vertically
- **AND** form rows stack vertically (single column)
- **AND** buttons are full-width

## Verification Checklist

- [ ] White card centered on gradient background
- [ ] Three-step tab indicator with correct labels
- [ ] Step 1: email, country select, password, budget select, newsletter checkbox
- [ ] Step 2: radio group with three room options, Business pre-selected
- [ ] Step 3: textarea with placeholder text
- [ ] Previous/Next (Finish) navigation buttons
- [ ] Step indicator highlights active tab (blue underline)
- [ ] Buttons: sky blue primary, gray secondary, uppercase text
- [ ] Form inputs: 50px height, light gray border, blue focus ring
- [ ] Radio buttons: circular custom styling with blue checked state
- [ ] Checkbox: 18px custom styling
- [ ] Select dropdowns: custom styled with hover highlighting
- [ ] Responsive: single-column on mobile, stacked tabs
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] Footer links to Component Dock
