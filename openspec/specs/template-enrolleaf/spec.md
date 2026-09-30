# Template: Enrolleaf (Signup Form)

## Purpose

Recreation of the ColorLib "Signup Form V01" template — a full-viewport
split-screen signup form with a background image on one side and a clean
registration form on the other.

- **Source:** [ColorLib Signup Form 01](https://colorlib.com/wp/template/signup-form-01/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/signup-form-01/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-01.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Signup Form (Registration Form Templates)
- **Description:** "A free modern registration form template with a split-screen
  layout, background image, and clean multi-field signup form."

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure:

| Token                     | Value                                        | Notes                                          |
| ------------------------- | -------------------------------------------- | ---------------------------------------------- |
| Body font                 | `Roboto`, sans-serif, 400 weight             | Main body text                                 |
| Heading font              | `Roboto`, sans-serif, 500 weight             | Same family, medium weight                     |
| Body text color           | `#212529`                                    | Dark charcoal                                  |
| Link color                | `#007bff`                                    | Bootstrap primary blue                         |
| Link hover color          | `#0056b3`                                    | Darker blue                                    |
| Caption/link text color   | `#888`                                       | Gray for terms text                            |
| Button color              | `#007bff` (Bootstrap primary)                | Primary blue                                   |
| Button hover color        | `#0069d9`                                    | Slightly darker blue                           |
| Button text color         | `#fff`                                       | White                                          |
| Button height             | `54px`                                       | Tall, prominent CTA                            |
| Button block width        | `100%`                                       | Full-width                                     |
| Button border-radius      | `4px`                                        | Slightly rounded                               |
| Form control border       | `1px solid #ced4da`                          | Light gray border (Bootstrap default)          |
| Form control focus border | `#80bdff`                                    | Blue focus ring                                |
| Form control focus shadow | `0 0 0 0.2rem rgba(0,123,255,0.25)`          | Blue glow                                      |
| Checkbox indicator bg     | `#e6e6e6`                                    | Unchecked gray                                 |
| Checkbox checked bg       | `#007bff`                                    | Blue when checked                              |
| Page layout               | Full viewport height, two-column flex        | `height: 100vh; min-height: 800px`             |
| Left column (form)        | 50% width, white bg, centered content        | Contains the signup form                       |
| Right column (image)      | 50% width, background-image cover            | Decorative photo                               |
| Container                 | Bootstrap-like grid, `cl-col-md-7`           | 7/12 columns on medium+ screens                |
| Heading size              | `1.75rem`, font-weight 500                   | h3 with mb-4                                   |
| Label color               | Default (inherited)                          | Bold label text                                |
| Placeholder color         | `#6c757d`                                    | Gray placeholder                               |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/signup-form-01/`):

A full-viewport-height split-screen page:

- **Left side (form, 50%):** White background, vertically centered content
  - "Sign Up" heading (h3, bold, Roboto)
  - Registration form with 4 fields:
    - Name (text, placeholder: "e.g John Smith")
    - Email (text, placeholder: "your-email@gmail.com")
    - Password (password, placeholder: "Your Password")
    - Re-type Password (password, placeholder: "Re-Type Your Password")
  - Checkbox with terms acceptance text:
    "Creating an account means you're okay with our Terms and Conditions
    and our Privacy Policy." (pre-checked)
  - Full-width blue "Register" button
- **Right side (image, 50%):** Background image covering the full column
  - Image placeholder: use `https://picsum.photos/seed/enrolleaf/1200/800`
- **Mobile:** Image moves to top (500px height), form below
- Clean, minimal, professional aesthetic with Bootstrap-inspired styling
- No navbar, no footer — single-purpose registration page

## Requirements

### Requirement: Page layout

The page SHALL display a full-viewport-height split-screen layout.

#### Scenario: Desktop renders two-column layout

- **GIVEN** the page loads on a desktop viewport (>=992px)
- **WHEN** the viewport is displayed
- **THEN** the layout is split into two equal-width columns
- **AND** the left column contains the signup form
- **AND** the right column contains a background image
- **AND** the total height is at least 100vh

#### Scenario: Mobile renders stacked layout

- **GIVEN** the page loads on a mobile viewport (<992px)
- **WHEN** the viewport is displayed
- **THEN** the background image is displayed at the top with ~500px height
- **AND** the form is displayed below the image

### Requirement: Signup form heading

The form SHALL display a "Sign Up" heading.

#### Scenario: Heading is visible

- **GIVEN** the page loads
- **WHEN** the form area is displayed
- **THEN** the text "Sign Up" is visible as a heading
- **AND** the heading uses Roboto font, medium weight, ~1.75rem size

### Requirement: Name field

The form SHALL include a Name text input.

#### Scenario: Name field renders correctly

- **GIVEN** the page loads
- **WHEN** the form is displayed
- **THEN** a "Name" label is visible
- **AND** a text input with placeholder "e.g John Smith" is displayed
- **AND** the input is a text type

### Requirement: Email field

The form SHALL include an Email text input.

#### Scenario: Email field renders correctly

- **GIVEN** the page loads
- **WHEN** the form is displayed
- **THEN** an "Email" label is visible
- **AND** a text input with placeholder "your-email@gmail.com" is displayed

### Requirement: Password field

The form SHALL include a Password input.

#### Scenario: Password field renders correctly

- **GIVEN** the page loads
- **WHEN** the form is displayed
- **THEN** a "Password" label is visible
- **AND** a password input with placeholder "Your Password" is displayed

### Requirement: Re-type Password field

The form SHALL include a Re-type Password input.

#### Scenario: Re-type Password field renders correctly

- **GIVEN** the page loads
- **WHEN** the form is displayed
- **THEN** a "Re-type Password" label is visible
- **AND** a password input with placeholder "Re-Type Your Password" is displayed

### Requirement: Terms checkbox

The form SHALL include a pre-checked checkbox for terms acceptance.

#### Scenario: Checkbox renders with terms text

- **GIVEN** the page loads
- **WHEN** the form is displayed
- **THEN** a checkbox is visible and is checked by default
- **AND** the text "Creating an account means you're okay with our Terms and Conditions and our Privacy Policy." is displayed
- **AND** "Terms and Conditions" and "Privacy Policy" are styled as links

### Requirement: Register button

The form SHALL include a full-width "Register" submit button.

#### Scenario: Register button is visible and styled

- **GIVEN** the page loads
- **WHEN** the form is displayed
- **THEN** a "Register" button is visible
- **AND** the button is full-width (100% of form container)
- **AND** the button has blue background (#007bff) with white text
- **AND** the button is a submit-type input

### Requirement: Form validation

The form SHALL prevent submission when required fields are empty.

#### Scenario: Empty form submission is prevented

- **GIVEN** the form is displayed with all fields empty
- **WHEN** the user clicks "Register"
- **THEN** the form should not submit (browser-native validation or custom)

### Requirement: Background image

The right column SHALL display a decorative background image.

#### Scenario: Background image is displayed

- **GIVEN** the page loads on desktop
- **WHEN** the right column is rendered
- **THEN** a background image fills the column
- **AND** the image uses cover/center positioning

## Verification Checklist

- [ ] Page renders full-viewport split-screen layout
- [ ] Left column: white background, centered form content
- [ ] Right column: background image, 50% width
- [ ] "Sign Up" heading is visible (Roboto, bold)
- [ ] Name input with correct placeholder
- [ ] Email input with correct placeholder
- [ ] Password input with correct placeholder
- [ ] Re-type Password input with correct placeholder
- [ ] Terms checkbox is pre-checked
- [ ] Terms text includes linked "Terms and Conditions" and "Privacy Policy"
- [ ] "Register" button is full-width, blue, white text
- [ ] Mobile layout: image on top, form below
- [ ] Fonts: Roboto family
- [ ] Colors match design tokens
- [ ] No references to ColorLib in app code
- [ ] Footer links to Component Dock
