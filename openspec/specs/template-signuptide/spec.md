# Template: SignupTide (Registration Form)

## Purpose

Recreation of ColorLib **Signup Form 10** — a two-column registration page with social login buttons on the left and a traditional registration form on the right, separated by an "- or -" divider.

- **Source:** [ColorLib Signup Form 10](https://colorlib.com/wp/template/signup-form-10/)
- **Preview:** https://preview.colorlib.com/theme/signup-form-10/ (404 — using screenshot as reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-10.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Registration Form (Signup Form Templates)
- **Description:** A clean, centered two-column signup page with social login options (Facebook, Twitter, Google) on the left and a standard email/password registration form on the right, connected by a "- or -" divider.

## Design Tokens

Extracted from the screenshot (preview URL returned 404):

| Token                    | Value                               | Notes                                         |
| ------------------------ | ----------------------------------- | --------------------------------------------- |
| Body font                | `Roboto`, sans-serif                | Clean sans-serif, standard weight             |
| Heading font             | `Roboto`, sans-serif, 700 weight    | Bold for "Register" heading                   |
| Page background          | `#f5f5f5`                           | Very light gray, full viewport                |
| Card background          | `#ffffff`                           | White registration form card                  |
| Card shadow              | `0 2px 10px rgba(0,0,0,0.08)`      | Subtle drop shadow                            |
| Card border-radius       | `4px`                               | Slight rounding                               |
| Facebook button color    | `#3b5998`                           | Dark navy blue                                |
| Twitter button color     | `#1da1f2`                           | Bright blue                                   |
| Google button color      | `#dd4b39`                           | Red-orange                                    |
| Social button radius     | `4px`                               | Slightly rounded rectangular                  |
| Social button text       | `#ffffff`                           | White icon/text on colored background         |
| Divider color            | `#dddddd`                           | Light gray horizontal lines                   |
| Divider text color       | `#999999`                           | Gray text for "- or -"                        |
| Input border             | `1px solid #dddddd` (bottom only)   | Bottom-border-only inputs                     |
| Input placeholder color  | `#999999`                           | Gray placeholder text                         |
| Input text color         | `#333333`                           | Dark text for entered values                  |
| Heading color            | `#333333`                           | Dark gray for "Register" heading              |
| Subtitle color           | `#999999`                           | Medium gray for description text              |
| Register button color    | `#5cb85c`                           | Mint/seafoam green                            |
| Register button hover    | `#4cae4c`                           | Slightly darker green on hover                |
| Register button text     | `#ffffff`                           | White text                                    |
| Register button radius   | `20px`                              | Fully rounded / pill shape                    |
| Register button padding  | `12px 0`                            | Vertical padding, full width                  |
| Checkbox color           | `#5cb85c`                           | Matches register button green                 |
| Link color               | `#5cb85c`                           | "Sign In" link, same green                    |
| Link hover               | `#4cae4c`                           | Darker green on hover                         |

## Visual Design

From the screenshot (`https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-10.jpg`):

A full-viewport centered page with a very light gray (#f5f5f5) background. The content is arranged in a two-column flexbox layout, horizontally centered:

**Left column — Social login:**
- "Or register with" heading (gray, medium size)
- Three full-width social buttons stacked vertically:
  - Facebook: dark navy (#3b5998) with white "f" icon
  - Twitter: bright blue (#1da1f2) with white bird icon
  - Google: red-orange (#dd4b39) with white "G" icon
- Buttons are rectangular with slight rounding, equal width

**Center divider:**
- "— or —" text with thin gray horizontal lines on each side, vertically centered between the two columns

**Right column — Registration form:**
- White card with subtle shadow and slight border-radius
- "Register" heading (large, bold, dark text)
- Subtitle: "Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing." (gray, smaller text)
- Four input fields, each on its own line with bottom-border only (no full box border):
  - Name (text)
  - Email (email)
  - Password (password)
  - Re-type Password (password)
- Row with:
  - Checkbox: "Terms and Conditions" (green checkmark, green linked text)
  - "Sign In" link aligned to the right (green text)
- Full-width "Register" button: mint green (#5cb85c), pill-shaped (fully rounded), white text, full width of the card

**Footer:**
- Minimal footer with site branding and Component Dock link

## Requirements

### Requirement: Page layout

The page SHALL display a full-viewport centered layout with a two-column flexbox arrangement on a light gray background.

#### Scenario: Page renders centered two-column layout

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the background is light gray (#f5f5f5)
- **AND** the content is horizontally and vertically centered
- **AND** there are two columns side by side

#### Scenario: Responsive stacking on mobile

- **WHEN** the viewport width is less than 768px
- **THEN** the columns stack vertically with social login on top and form below

### Requirement: Social login section

The left column SHALL display a social login section with a heading and three social buttons.

#### Scenario: Social login heading is visible

- **WHEN** I visit the SignupTide page
- **THEN** I see "Or register with" text above the social buttons

#### Scenario: Facebook button renders

- **WHEN** I visit the SignupTide page
- **THEN** I see a dark navy blue button (#3b5998) with a white Facebook "f" icon
- **AND** the button is full-width within its container

#### Scenario: Twitter button renders

- **WHEN** I visit the SignupTide page
- **THEN** I see a bright blue button (#1da1f2) with a white Twitter bird icon
- **AND** the button is full-width within its container

#### Scenario: Google button renders

- **WHEN** I visit the SignupTide page
- **THEN** I see a red-orange button (#dd4b39) with a white Google "G" icon
- **AND** the button is full-width within its container

### Requirement: Divider

The page SHALL display a centered divider between the two columns.

#### Scenario: Divider renders with "- or -" text

- **WHEN** I visit the SignupTide page
- **THEN** I see a horizontal line with "- or -" text in the center
- **AND** the divider is vertically centered between the two columns

### Requirement: Registration form card

The right column SHALL display a white card containing the registration form.

#### Scenario: Card renders with shadow

- **WHEN** I visit the SignupTide page
- **THEN** I see a white card with a subtle shadow
- **AND** the card has slight border-radius

#### Scenario: Register heading is visible

- **WHEN** I visit the SignupTide page
- **THEN** I see "Register" as a large bold heading inside the card

#### Scenario: Subtitle text is visible

- **WHEN** I visit the SignupTide page
- **THEN** I see a gray subtitle text below the heading

### Requirement: Registration form fields

The form SHALL contain four input fields: Name, Email, Password, and Re-type Password.

#### Scenario: All four fields render

- **WHEN** I visit the SignupTide page
- **THEN** I see a text input with placeholder "Name"
- **AND** I see an email input with placeholder "Email"
- **AND** I see a password input with placeholder "Password"
- **AND** I see a password input with placeholder "Re-type Password"

#### Scenario: Inputs have bottom-border style

- **WHEN** I view the form inputs
- **THEN** each input has only a bottom border (no full box border)
- **AND** the border color is light gray (#dddddd)

### Requirement: Terms and Sign In row

The form SHALL display a checkbox for Terms and Conditions alongside a Sign In link.

#### Scenario: Terms checkbox renders

- **WHEN** I visit the SignupTide page
- **THEN** I see a checkbox with "Terms and Conditions" label
- **AND** the checkbox is styled in green (#5cb85c)

#### Scenario: Sign In link renders

- **WHEN** I visit the SignupTide page
- **THEN** I see a "Sign In" link aligned to the right of the checkbox row
- **AND** the link text is green (#5cb85c)

### Requirement: Register button

The form SHALL display a full-width mint green Register button.

#### Scenario: Register button renders

- **WHEN** I visit the SignupTide page
- **THEN** I see a "Register" button at the bottom of the form
- **AND** the button is full width of the card
- **AND** the button background is mint green (#5cb85c)
- **AND** the button text is white
- **AND** the button has fully rounded (pill) corners

#### Scenario: Register button hover state

- **WHEN** I hover over the Register button
- **THEN** the button background darkens slightly (#4cae4c)

### Requirement: Footer

The page SHALL include a footer with Component Dock branding.

#### Scenario: Footer renders

- **WHEN** I visit the SignupTide page
- **THEN** I see a footer section
- **AND** the footer contains a link to https://www.componentdock.com/
