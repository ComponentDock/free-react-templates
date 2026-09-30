# Template: Signupcraft (Signup Form)

## Purpose

Recreation of the ColorLib "Signup Form 05" template — a split-screen
registration page with a lifestyle background image on the left and a
clean white card containing a signup form with email/password fields,
terms checkbox, primary register button, and social login buttons on
the right.

- **Source:** [ColorLib Signup Form 05](https://colorlib.com/wp/template/signup-form-05/)
- **Preview:** https://preview.colorlib.com/theme/signup-form-05/ (UNREACHABLE — 404; design tokens captured from screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-05.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Signup Form (Registration Page Templates)
- **Description:** "Free registration page template with split-screen layout, lifestyle background image, and a clean card-based signup form with social login options."

## Design Tokens

Extracted from the screenshot (preview unreachable — tokens inferred from visual inspection):

| Token                     | Value                          | Notes                                         |
| ------------------------- | ------------------------------ | --------------------------------------------- |
| Body font                 | `Poppins`, sans-serif          | Clean geometric sans-serif (inferred)         |
| Heading font              | `Poppins`, sans-serif, 600w    | Bold, uppercase for "SIGN UP" heading         |
| Page body background      | `#f5f5f5`                      | Light warm gray behind the form card           |
| Card background           | `#ffffff`                      | White card for the form                        |
| Card shadow               | `0 2px 15px rgba(0,0,0,0.1)`  | Subtle drop shadow on card                     |
| Card border-radius        | `4px`                          | Slight rounding                                |
| Primary button color      | `#f5a623`                      | Orange — "Register" button                     |
| Primary button hover      | `#e6951d`                      | Darker orange on hover                         |
| Facebook button color     | `#3b5998`                      | Facebook brand dark blue                       |
| Twitter button color      | `#1da1f2`                      | Twitter brand light blue                       |
| Google button color       | `#dd4b39`                      | Google brand red                               |
| Button border-radius      | `4px`                          | Slight rounding, consistent                    |
| Button text color         | `#ffffff`                      | White text on all buttons                      |
| Heading color             | `#333333`                      | Dark gray heading text                         |
| Label color               | `#333333`                      | Dark gray form labels                          |
| Input border              | `#e0e0e0`                      | Light gray border on inputs                    |
| Input background          | `#ffffff`                      | White input fields                             |
| Placeholder text color    | `#aaaaaa`                      | Light gray placeholder                         |
| Terms text color          | `#666666`                      | Gray body text for terms                       |
| Link color (terms)        | `#f5a623`                      | Orange links for Terms/Privacy                 |
| Checkbox color            | `#f5a623`                      | Orange checked checkbox                        |
| "or" text color           | `#666666`                      | Gray divider text                              |
| Left image width          | ~40%                           | Background image column                        |
| Form card width           | ~60%                           | Signup form card                               |

## Visual Design

From the screenshot (https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-05.jpg):

A split-screen registration page:

- **Left side (~40%):** Full-height background image showing a kitchen/lifestyle scene (white subway tile backsplash, wooden cutting board, red/coral dutch oven, small potted herbs, vintage kitchen scale, wire basket). The image is decorative and adds a warm, homey aesthetic.
- **Right side (~60%):** Light gray (#f5f5f5) background with a centered white card containing the signup form.
- **Card contents (top to bottom):**
  1. "SIGN UP" heading — uppercase, bold, centered
  2. Email field — label "Email", placeholder "your-email@gmail.com"
  3. Password field — label "Password", placeholder "Your Password"
  4. Re-type Password field — label "Re-type Password", placeholder "Re-type Your Password"
  5. Terms checkbox — checked by default, "Creating an account means you're okay with our Terms and Conditions and our Privacy Policy..."
  6. Orange "Register" button — full-width, rounded
  7. "or" text divider
  8. "Register with Facebook" button — dark blue with Facebook icon
  9. "Register with Twitter" button — light blue with Twitter icon
  10. "Register with Google" button — red with Google icon
- **Footer:** Minimal — site name + Component Dock link (replacing any ColorLib attribution)
- **Overall feel:** Clean, modern, minimal. Professional registration page with a warm lifestyle image providing visual contrast to the functional form area.

## Requirements

### Requirement: Split-screen page layout
The page SHALL display a split-screen layout with a background image on the left and a signup form card on the right.

#### Scenario: Page renders split-screen layout
- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the left side displays a full-height background image
- **AND** the right side displays a centered white card on a light gray background
- **AND** the page title "Signupcraft" is visible

#### Scenario: Layout is responsive on mobile
- **GIVEN** the viewport is less than 768px wide
- **WHEN** the page renders
- **THEN** the layout stacks vertically (image on top, form card below)

### Requirement: Signup form heading
The card SHALL display a "SIGN UP" heading.

#### Scenario: Heading renders correctly
- **GIVEN** the page is loaded
- **WHEN** the form card is visible
- **THEN** the heading "SIGN UP" is displayed at the top of the card
- **AND** the heading is uppercase, bold, and centered

### Requirement: Email input field
The form SHALL include an email input field.

#### Scenario: Email field renders
- **GIVEN** the page is loaded
- **WHEN** the form card is visible
- **THEN** an "Email" label is displayed
- **AND** an email input with placeholder "your-email@gmail.com" is present
- **AND** the input accepts email format

### Requirement: Password input field
The form SHALL include a password input field.

#### Scenario: Password field renders
- **GIVEN** the page is loaded
- **WHEN** the form card is visible
- **THEN** a "Password" label is displayed
- **AND** a password input with placeholder "Your Password" is present
- **AND** the input masks typed characters

### Requirement: Re-type Password input field
The form SHALL include a password confirmation field.

#### Scenario: Re-type Password field renders
- **GIVEN** the page is loaded
- **WHEN** the form card is visible
- **THEN** a "Re-type Password" label is displayed
- **AND** a password input with placeholder "Re-type Your Password" is present
- **AND** the input masks typed characters

### Requirement: Terms and conditions checkbox
The form SHALL include a terms and conditions checkbox.

#### Scenario: Terms checkbox renders
- **GIVEN** the page is loaded
- **WHEN** the form card is visible
- **THEN** a checkbox is displayed below the password fields
- **AND** the checkbox is checked by default
- **AND** the text "Creating an account means you're okay with our Terms and Conditions and our Privacy Policy..." is displayed
- **AND** "Terms and Conditions" and "Privacy Policy" are styled as links

#### Scenario: User can toggle the checkbox
- **GIVEN** the page is loaded
- **WHEN** the user clicks the terms checkbox
- **THEN** the checkbox toggles between checked and unchecked states

### Requirement: Register button
The form SHALL include a primary Register button.

#### Scenario: Register button renders
- **GIVEN** the page is loaded
- **WHEN** the form card is visible
- **THEN** a full-width orange "Register" button is displayed
- **AND** the button has white text
- **AND** the button has rounded corners (4px radius)

### Requirement: Social login divider
The form SHALL display an "or" divider between the Register button and social login buttons.

#### Scenario: Divider renders
- **GIVEN** the page is loaded
- **WHEN** the form card is visible
- **THEN** the text "or" is displayed centered below the Register button
- **AND** the text is gray and acts as a visual separator

### Requirement: Facebook login button
The form SHALL include a Facebook social login button.

#### Scenario: Facebook button renders
- **GIVEN** the page is loaded
- **WHEN** the form card is visible
- **THEN** a "Register with Facebook" button is displayed
- **AND** the button has a dark blue (#3b5998) background
- **AND** the button includes a Facebook icon
- **AND** the button has white text

### Requirement: Twitter login button
The form SHALL include a Twitter social login button.

#### Scenario: Twitter button renders
- **GIVEN** the page is loaded
- **WHEN** the form card is visible
- **THEN** a "Register with Twitter" button is displayed
- **AND** the button has a light blue (#1da1f2) background
- **AND** the button includes a Twitter icon
- **AND** the button has white text

### Requirement: Google login button
The form SHALL include a Google social login button.

#### Scenario: Google button renders
- **GIVEN** the page is loaded
- **WHEN** the form card is visible
- **THEN** a "Register with Google" button is displayed
- **AND** the button has a red (#dd4b39) background
- **AND** the button includes a Google icon
- **AND** the button has white text

### Requirement: Footer
The template SHALL include a footer linking to Component Dock.

#### Scenario: Footer displays correctly
- **GIVEN** the page is loaded
- **THEN** the footer shows the site name "Signupcraft"
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "More templates at Component Dock"

## Verification Checklist

- [ ] Split-screen layout: image left (~40%), form card right (~60%)
- [ ] Layout stacks vertically on mobile (<768px)
- [ ] "SIGN UP" heading is uppercase, bold, centered in card
- [ ] Email input with label and placeholder renders
- [ ] Password input with label and placeholder renders (masked)
- [ ] Re-type Password input with label and placeholder renders (masked)
- [ ] Terms checkbox is checked by default
- [ ] Terms/Privacy links are clickable and styled as orange links
- [ ] Orange "Register" button is full-width with rounded corners
- [ ] "or" text divider renders between Register and social buttons
- [ ] Facebook button: dark blue background, icon, white text
- [ ] Twitter button: light blue background, icon, white text
- [ ] Google button: red background, icon, white text
- [ ] All social buttons are full-width with rounded corners
- [ ] Card has white background with subtle shadow
- [ ] Page background is light gray (#f5f5f5)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder image: https://picsum.photos/seed/signupcraft/800/1200
