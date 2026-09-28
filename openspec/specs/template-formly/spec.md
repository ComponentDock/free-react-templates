# Template: Formly (Event Registration Form)

## Purpose

Recreation of **ColorLib Regform 5** (`colorlib-regform-5`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-regform-5/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-5/ (unreachable; screenshot used as sole reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-5.jpg
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library

## Design Tokens (extracted from screenshot)

| Token                  | Value                                             | Usage                             |
| ---------------------- | ------------------------------------------------- | --------------------------------- |
| Font family            | Poppins (400, 600, 700)                           | Body text, headings, inputs       |
| Background gradient    | linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%) | Full-page purple-to-cyan diagonal |
| Card header background | #1E1E2E (dark charcoal)                           | Dark bar at top of card           |
| Card header text       | #FFFFFF white                                     | Title text color                  |
| Card body background   | #FFFFFF white                                     | Form body area                    |
| Card border-radius     | 8px                                               | Rounded corners on card           |
| Card box-shadow        | 0 8px 32px rgba(0,0,0,0.12)                       | Subtle drop shadow                |
| Card max-width         | 700px                                             | Centered card width               |
| Label color            | #1F2937 (gray-800)                                | Bold field labels                 |
| Label font-size        | 14px                                              | Field label size                  |
| Label font-weight      | 600 semibold                                      | Bold labels                       |
| Input background       | #E5E7EB (gray-200)                                | Light gray input backgrounds      |
| Input border           | none                                              | No visible border                 |
| Input border-radius    | 6px                                               | Rounded input corners             |
| Input line-height      | 44px                                              | Input height                      |
| Select arrow color     | #6B7280 (gray-500)                                | Chevron-down arrow                |
| Radio checked color    | #22C55E (green-500)                               | Green dot when selected           |
| Radio unchecked bg     | #E5E7EB (gray-200)                                | Unselected radio background       |
| Radio gap              | 40px                                              | Space between Yes/No options      |
| Button background      | #EF4444 (red-500)                                 | Coral/red REGISTER button         |
| Button hover           | #DC2626 (red-600)                                 | Darker on hover                   |
| Button text            | white                                             | Button label color                |
| Button padding         | 0 32px, height 44px                               | Button sizing                     |
| Button border-radius   | 6px                                               | Rounded button corners            |
| Button text-transform  | uppercase                                         | REGISTER in caps                  |
| Button letter-spacing  | 0.5px                                             | Slight letter spacing             |

## Layout Structure

Single centered card on gradient background:

1. **Page wrapper** — full viewport, purple-to-cyan diagonal gradient, flex centered
2. **Card** — max-width 700px, centered, white background, 8px radius, drop shadow
   - **Header** — dark (#1E1E2E) bar with "Event Registration Form" (h1, white, bold, uppercase)
   - **Form body** — white, 40px padding
     - **Name row** — two columns: First Name (text) | Last Name (text)
     - **Company** — full-width text input
     - **Email** — full-width email input
     - **Phone row** — two columns: Area Code (text) | Phone Number (text)
     - **Subject** — full-width select dropdown with "Choose option" default
     - **Customer question** — "Are you an existing customer?" with Yes/No radio buttons (Yes default)
     - **Submit button** — "REGISTER", coral red (#EF4444), uppercase, 6px radius
3. **Footer** — links to https://www.componentdock.com/

## Requirements

### Requirement: Page renders the registration form

Users SHALL see a centered event registration form with gradient background.

#### Scenario: Gradient background renders

- **WHEN** I visit the registration page
- **THEN** a full-page gradient background from purple to cyan is displayed
- **AND** a centered card is visible on the gradient

#### Scenario: Card has correct structure

- **WHEN** I visit the registration page
- **THEN** the card has a dark header bar at the top
- **AND** the card has a white body below the header
- **AND** the card is horizontally centered on the page

### Requirement: Header displays title

The dark header SHALL display "Event Registration Form" in white uppercase text.

#### Scenario: Header renders with title

- **WHEN** I visit the registration page
- **THEN** I see a heading "Event Registration Form"
- **AND** the heading is an h1 element

### Requirement: Name field renders as two-column row

The name field SHALL display First Name and Last Name inputs side by side.

#### Scenario: Two name inputs are visible

- **WHEN** I visit the registration page
- **THEN** I see a "Name" label
- **AND** I see a "First Name" placeholder input
- **AND** I see a "Last Name" placeholder input

#### Scenario: Name inputs accept text

- **WHEN** I type "John" into the First Name field
- **THEN** the First Name field shows "John"
- **WHEN** I type "Doe" into the Last Name field
- **THEN** the Last Name field shows "Doe"

### Requirement: Company field renders as full-width input

The company field SHALL render as a single full-width text input.

#### Scenario: Company input is visible

- **WHEN** I visit the registration page
- **THEN** I see a "Company" label
- **AND** I see a full-width text input below it

### Requirement: Email field renders as full-width input

The email field SHALL render as a single full-width email input.

#### Scenario: Email input is visible

- **WHEN** I visit the registration page
- **THEN** I see an "Email" label
- **AND** I see a full-width email input below it

### Requirement: Phone field renders as two-column row

The phone field SHALL display Area Code and Phone Number inputs side by side.

#### Scenario: Two phone inputs are visible

- **WHEN** I visit the registration page
- **THEN** I see a "Phone" label
- **AND** I see an "Area Code" placeholder input
- **AND** I see a "Phone Number" placeholder input

### Requirement: Subject dropdown renders with options

The subject field SHALL render as a dropdown select with a default "Choose option" text.

#### Scenario: Dropdown shows default option

- **WHEN** I visit the registration page
- **THEN** I see a "Subject" label
- **AND** I see a dropdown select
- **AND** the dropdown shows "Choose option" as the default

#### Scenario: Dropdown allows selection

- **WHEN** I select "General Inquiry" from the Subject dropdown
- **THEN** the dropdown value is "general"

### Requirement: Customer radio buttons render correctly

The customer question SHALL display Yes and No radio buttons with Yes selected by default.

#### Scenario: Yes and No radios are visible

- **WHEN** I visit the registration page
- **THEN** I see "Are you an existing customer?" text
- **AND** I see a "Yes" radio button
- **AND** I see a "No" radio button

#### Scenario: Yes is selected by default

- **WHEN** I visit the registration page
- **THEN** the "Yes" radio is checked
- **AND** the "No" radio is unchecked

#### Scenario: Radio buttons can be toggled

- **WHEN** I click the "No" radio
- **THEN** the "No" radio is checked
- **AND** the "Yes" radio is unchecked
- **WHEN** I click the "Yes" radio
- **THEN** the "Yes" radio is checked

### Requirement: Submit button renders with coral styling

The submit button SHALL display as a coral/red uppercase REGISTER button.

#### Scenario: Register button is visible

- **WHEN** I visit the registration page
- **THEN** I see a "Register" button
- **AND** the button has a red background (bg-red-500)
- **AND** the button text is uppercase

#### Scenario: Submit button works

- **WHEN** I click the Register button
- **THEN** the form submission is triggered

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/.

#### Scenario: Footer has Component Dock link

- **WHEN** I visit the registration page
- **THEN** I see a link to "Component Dock"
- **AND** the link points to https://www.componentdock.com/

### Requirement: Responsive layout

Column pairs SHALL stack vertically on narrow viewports.

#### Scenario: Columns stack on mobile

- **WHEN** I view the page on a narrow viewport
- **THEN** the Name column pair stacks vertically
- **AND** the Phone column pair stacks vertically
