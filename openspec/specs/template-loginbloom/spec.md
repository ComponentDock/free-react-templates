# Template: Loginbloom (Login Form V15)

## Purpose

Recreation of ColorLib **Login Form V15** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v15`
- **Preview URL:** https://colorlib.com/etc/lf/Login_v15/index.html
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v15/
- **New name:** `loginbloom` (apps/loginbloom, package @free-react-templates/loginbloom)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from live preview CSS)

### Colors

| Token               | Hex / Value                | Usage                                              |
| ------------------- | -------------------------- | -------------------------------------------------- |
| Page background     | `#ebeeef`                  | Full viewport light gray-blue background            |
| Card background     | `#ffffff`                  | Login card white                                    |
| Brand green         | `#57b846`                  | Button background, focus ring, checkbox checked, link hover |
| Button hover dark   | `#333333`                  | Login button hover state                            |
| Banner overlay      | `rgba(54,84,99,0.7)`      | Dark teal semi-transparent overlay on banner image |
| Banner title text   | `#ffffff`                  | "SIGN IN" heading on banner                        |
| Label text          | `#808080`                  | Field labels (Username, Password)                   |
| Input text          | `#555555`                  | Input field text color                              |
| Placeholder         | `#999999`                  | Input placeholder text                              |
| Link text           | `#999999`                  | "Forgot Password?" link                             |
| Link hover          | `#57b846`                  | Link hover color (matches brand green)              |
| Input border        | `#b2b2b2`                  | Underline border on inputs                          |
| Checkbox border     | `#e6e6e6`                  | Custom checkbox border                              |
| Validation error    | `#c80000`                  | Validation error text and border                    |

### Fonts

| Token      | Font family         | Usage                                      |
| ---------- | ------------------- | ------------------------------------------ |
| Body       | Poppins Regular     | Body text, inputs, labels, links           |
| Button     | Poppins Regular     | Login button text                          |
| Banner     | Poppins Bold        | "SIGN IN" heading (30px, uppercase, white) |
| Labels     | Poppins Regular     | Field labels (15px, #808080)               |
| Checkbox   | Poppins Regular     | "Remember me" label (13px, #999999)        |
| Link       | Poppins Regular     | "Forgot Password?" (13px, #999999)         |

### Layout & Shapes

- Full viewport height, centered flex layout, light gray-blue `#ebeeef` background
- Card: 670px wide max, white, border-radius 10px
- Banner section: full width of card, background image cover, dark teal overlay (`rgba(54,84,99,0.7)`), centered bold white "SIGN IN" text (30px, uppercase, padding ~70px vertical)
- Form: padded layout, labels positioned absolutely to the left of inputs (on desktop) or above (on mobile)
- Inputs: height 45px, transparent background, underline border 1px solid `#b2b2b2`, focus animation (green line expands left-to-right)
- Login button: full width of card, height 50px, border-radius 25px (pill), background `#57b846`, white text, hover to `#333333`
- Remember me checkbox + Forgot Password link on same row, space-between
- Custom checkbox: 18px square, 2px border-radius, 1px border, green checkmark when checked
- Responsive: at 480px, labels move above inputs; card padding adjusts

## Requirements

### Requirement: Renders banner section with sign-in heading

The login page SHALL display a hero banner section with a background image and a semi-transparent dark teal overlay, containing a centered "SIGN IN" heading.

#### Scenario: Banner heading is visible

- **WHEN** the page loads
- **THEN** the banner section displays "SIGN IN" in white uppercase bold text

#### Scenario: Banner has background image

- **WHEN** the page loads
- **THEN** the banner area has a background image with a dark overlay

### Requirement: Renders username input field

The login form SHALL display a labeled username text input.

#### Scenario: Username label is visible

- **WHEN** the page loads
- **THEN** a label "Username" is displayed next to the username field

#### Scenario: Username accepts text input

- **WHEN** the user focuses the username input
- **AND** types a value
- **THEN** the input displays the entered text

#### Scenario: Username focus animation

- **WHEN** the user focuses the username input
- **THEN** a green underline animates from left to right under the input

### Requirement: Renders password input field

The login form SHALL display a labeled password input with the type "password".

#### Scenario: Password label is visible

- **WHEN** the page loads
- **THEN** a label "Password" is displayed next to the password field

#### Scenario: Password masks input

- **WHEN** the user types in the password field
- **THEN** the entered characters are masked (not visible as plain text)

#### Scenario: Password focus animation

- **WHEN** the user focuses the password input
- **THEN** a green underline animates from left to right under the input

### Requirement: Renders remember-me checkbox

The login form SHALL display a "Remember me" checkbox that is unchecked by default.

#### Scenario: Checkbox defaults to unchecked

- **WHEN** the page loads
- **THEN** the "Remember me" checkbox is unchecked

#### Scenario: Checkbox toggles on click

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox becomes checked with a green checkmark

#### Scenario: Checkbox can be unchecked

- **WHEN** the "Remember me" checkbox is checked
- **AND** the user clicks it again
- **THEN** the checkbox becomes unchecked

### Requirement: Renders forgot-password link

The login form SHALL display a "Forgot Password?" link.

#### Scenario: Forgot Password link is visible

- **WHEN** the page loads
- **THEN** a "Forgot Password?" link is displayed

#### Scenario: Forgot Password link is interactive

- **WHEN** the user clicks "Forgot Password?"
- **THEN** the link is clickable (navigates to "#" in the original)

### Requirement: Renders login button

The login form SHALL display a full-width "Login" button with a green pill shape.

#### Scenario: Login button is visible

- **WHEN** the page loads
- **THEN** a "Login" button is displayed spanning the full width of the form card

#### Scenario: Login button hover effect

- **WHEN** the user hovers over the Login button
- **THEN** the button background changes from green to dark

#### Scenario: Login button submits form

- **WHEN** the user clicks the Login button
- **THEN** the form submit handler is called

### Requirement: Validates required fields

The login form SHALL validate that username and password are not empty on submit.

#### Scenario: Empty username shows validation

- **WHEN** the user clicks Login without entering a username
- **THEN** a validation message "Username is required" is displayed

#### Scenario: Empty password shows validation

- **WHEN** the user clicks Login without entering a password
- **THEN** a validation message "Password is required" is displayed

### Requirement: Responsive layout

The login form SHALL be responsive and center properly on all screen sizes.

#### Scenario: Desktop layout

- **WHEN** the viewport is wider than 670px
- **THEN** the card is centered in the viewport with 670px max width

#### Scenario: Mobile layout

- **WHEN** the viewport is narrower than 480px
- **THEN** labels are displayed above inputs instead of to the left

### Requirement: Footer links to Component Dock

The template SHALL include a footer that links to https://www.componentdock.com/.

#### Scenario: Footer link exists

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ is present in the footer

## Verification checklist

- [ ] Banner section renders with background image and dark teal overlay
- [ ] "SIGN IN" heading is bold, uppercase, white, centered in the banner
- [ ] Username field has a label to the left (desktop) or above (mobile)
- [ ] Password field masks input
- [ ] Focus animation on inputs shows green expanding underline
- [ ] "Remember me" checkbox toggles with green checkmark
- [ ] "Forgot Password?" link is clickable
- [ ] Login button is green (#57b846), pill-shaped (border-radius 25px), full width
- [ ] Login button hover turns dark (#333333)
- [ ] Form validates empty username/password with messages
- [ ] Responsive: labels move above inputs at 480px breakpoint
- [ ] Card background is white, border-radius 10px, centered on gray background
- [ ] Poppins font family loaded via Google Fonts
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
