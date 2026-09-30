# Template: SignupGale (Signup Form)

## Purpose

Recreation of ColorLib **Signup Form 07** — a split-screen registration page
with a flat vector illustration on the left and a centered signup form on the
right, featuring social login buttons.

- **Source:** [ColorLib Signup Form 07](https://colorlib.com/wp/template/signup-form-07/)
- **Preview:** https://preview.colorlib.com/theme/signup-form-07/ (UNREACHABLE — 404; design tokens captured from screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-07.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Signup Form (Registration Page Templates)
- **Description:** "Free membership registration template with a 100% mobile-friendly structure — split-screen layout with a flat vector illustration on the left and a clean signup form with social login on the right."

## Design Tokens

Extracted from the screenshot (preview unreachable — tokens inferred from visual inspection):

| Token                     | Value                          | Notes                                         |
| ------------------------- | ------------------------------ | --------------------------------------------- |
| Body font                 | `Poppins`, sans-serif          | Clean geometric sans-serif (inferred)         |
| Heading font              | `Poppins`, sans-serif, 500w    | Medium weight for "Sign Up" heading            |
| Page body background      | `#f8f9fa`                      | Very light gray, full viewport                |
| Heading color             | `#2d2d2d`                      | Dark charcoal for "Sign Up"                   |
| Subtext color             | `#999999`                      | Medium gray for lorem ipsum description       |
| Input border              | `1px solid #e0e0e0`            | Light gray border on form inputs              |
| Input background          | `#ffffff`                      | White input fields                            |
| Input text color          | `#333333`                      | Dark text for entered values                  |
| Placeholder text color    | `#aaaaaa`                      | Light gray placeholder text                   |
| Primary button color      | `#7c6bf5`                      | Purple/indigo — "Register" button             |
| Primary button hover      | `#6a5ae0`                      | Darker purple on hover                        |
| Button border-radius      | `6px`                          | Slightly rounded rectangular                  |
| Button text color         | `#ffffff`                      | White text on register button                 |
| Checkbox color            | `#7c6bf5`                      | Purple checked checkbox, matches button       |
| Terms link color          | `#7c6bf5`                      | Purple links for Terms/Privacy Policy         |
| "or" divider color        | `#999999`                      | Gray text for "— or register with —"          |
| Divider line color        | `#cccccc`                      | Light gray horizontal lines                   |
| Facebook button color     | `#3b5998`                      | Facebook brand dark blue                      |
| Twitter button color      | `#1da1f2`                      | Twitter brand light blue                      |
| Google button color       | `#dd4b39`                      | Google brand red                              |
| Social button shape       | Circle (round)                 | 40px diameter circular buttons                |
| Social button text        | `#ffffff`                      | White icons on colored background             |
| Illustration style        | Flat vector, purple/gray tones | Person at desk with computer, plants, office  |
| Left panel background     | `#f8f9fa`                      | Same as page background                       |

## Visual Design

From the screenshot (https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-07.jpg):

A split-screen registration page:

- **Left side (~50%):** Full-height area with a flat vector illustration of a person sitting at a desk with a computer monitor, office furniture (drawers, filing cabinet), and potted plants. The illustration uses a muted palette of grays, purples, and blues. No photographic background — the illustration floats on the light gray page background.
- **Right side (~50%):** Centered signup form on the same light gray background.
- **Form contents (top to bottom):**
  1. "Sign Up" heading — dark charcoal, medium weight, left-aligned
  2. Subtitle: "Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipiscing." — gray, smaller text
  3. Full name input — label/placeholder "Full name"
  4. Email input — label/placeholder "Email"
  5. Password input — label/placeholder "Password"
  6. Re-type Password input — label/placeholder "Re-type Password"
  7. Terms checkbox — checked by default, "Creating an account means you're okay with our Terms and Conditions and our Privacy Policy..." with linked text in purple
  8. Purple "Register" button — full-width, white text, rounded
  9. "— or register with —" divider text with gray lines on each side
  10. Three circular social login buttons: Facebook (dark blue), Twitter (light blue), Google (red)
- **Footer:** Minimal — site name + Component Dock link (replacing any ColorLib attribution)
- **Overall feel:** Clean, modern, minimal. Professional registration page with a friendly flat illustration providing visual interest. Purple brand color gives a contemporary, approachable aesthetic.

## Requirements

### Requirement: Split-screen page layout
The page SHALL display a split-screen layout with a flat vector illustration on the left and a centered signup form on the right.

#### Scenario: Page renders split-screen layout
- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the left side displays a full-height illustration area
- **AND** the right side displays a centered signup form
- **AND** the background is light gray (#f8f9fa)

#### Scenario: Responsive stacking on mobile
- **WHEN** the viewport width is less than 768px
- **THEN** the layout stacks vertically with the illustration on top and form below
- **AND** the illustration is reduced in height

### Requirement: Flat vector illustration
The left panel SHALL display a flat vector illustration of a person at a desk with office elements.

#### Scenario: Illustration renders
- **GIVEN** the page loads
- **WHEN** the left panel is displayed
- **THEN** an SVG or image illustration is visible
- **AND** the illustration depicts a workspace scene (person, desk, computer, plants)
- **AND** the illustration uses muted purple/gray/blue tones

### Requirement: Signup form heading and subtitle
The form SHALL display a "Sign Up" heading and descriptive subtitle.

#### Scenario: Heading and subtitle render
- **GIVEN** the form is displayed
- **WHEN** the user views the top of the form
- **THEN** "Sign Up" heading is visible in dark charcoal
- **AND** a subtitle paragraph is displayed below in gray

### Requirement: Form input fields
The form SHALL contain four input fields: Full Name, Email, Password, and Re-type Password.

#### Scenario: All four fields render
- **GIVEN** the form is displayed
- **WHEN** the user views the form fields
- **THEN** a text input with placeholder "Full name" is visible
- **AND** an email input with placeholder "Email" is visible
- **AND** a password input with placeholder "Password" is visible
- **AND** a password input with placeholder "Re-type Password" is visible

#### Scenario: Inputs have bottom-border-only style
- **GIVEN** the form is displayed
- **WHEN** the user views any input field
- **THEN** the input has a light gray bottom border only (no full box border)

### Requirement: Terms and conditions checkbox
The form SHALL include a pre-checked terms and conditions checkbox with linked text.

#### Scenario: Checkbox renders checked by default
- **GIVEN** the form is displayed
- **WHEN** the user views the terms area
- **THEN** the checkbox is checked by default
- **AND** the text reads "Creating an account means you're okay with our Terms and Conditions and our Privacy Policy..."
- **AND** "Terms and Conditions" and "Privacy Policy" are purple links

#### Scenario: Checkbox can be toggled
- **WHEN** the user clicks the checkbox
- **THEN** the checkbox toggles state

### Requirement: Register button
The form SHALL display a full-width purple "Register" button.

#### Scenario: Register button renders
- **GIVEN** the form is displayed
- **WHEN** the user views the button area
- **THEN** a "Register" button is visible
- **AND** the button has a purple background (#7c6bf5)
- **AND** the button has white text
- **AND** the button spans the full width of the form column
- **AND** the button has rounded corners (6px radius)

#### Scenario: Register button hover state
- **WHEN** the user hovers over the Register button
- **THEN** the button background darkens slightly

### Requirement: Social login section
The form SHALL display an "— or register with —" divider and three circular social login buttons.

#### Scenario: Divider renders
- **GIVEN** the form is displayed
- **WHEN** the user views below the Register button
- **THEN** a divider reads "— or register with —" in gray text
- **AND** gray horizontal lines appear on each side of the text

#### Scenario: Social buttons render
- **GIVEN** the form is displayed
- **WHEN** the user views the social login area
- **THEN** three circular buttons are visible: Facebook, Twitter, Google
- **AND** the Facebook button is dark blue (#3b5998) with white "f" icon
- **AND** the Twitter button is light blue (#1da1f2) with white bird icon
- **AND** the Google button is red (#dd4b39) with white "G" icon
- **AND** each button is circular (40px diameter)

### Requirement: Form validation — required fields
The form SHALL validate required fields before submission.

#### Scenario: Empty submission shows errors
- **WHEN** the user clicks Register without filling any fields
- **THEN** validation errors appear for required fields

#### Scenario: Email format validation
- **WHEN** the user types "invalid-email" in the Email field and submits
- **THEN** an invalid email format error is displayed

#### Scenario: Password mismatch validation
- **WHEN** the user enters different values in Password and Re-type Password
- **THEN** a password mismatch error is displayed

### Requirement: Footer
The page SHALL include a minimal footer with Component Dock branding.

#### Scenario: Footer renders
- **GIVEN** the page is loaded
- **WHEN** the user scrolls to the bottom
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
