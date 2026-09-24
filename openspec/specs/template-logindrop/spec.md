# Template: LoginDrop (Login Form)

## Purpose

Recreation of ColorLib **Login Form V3** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v3`
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v3/ (404 — using screenshot + source CSS)
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v3/
- **Source HTML:** https://colorlib.com/etc/lf/Login_v3/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v3.jpg
- **New name:** `logindrop` (apps/logindrop, package @free-react-templates/logindrop)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from source CSS + screenshot)

### Colors

| Token               | Hex / Value            | Usage                                              |
| ------------------- | ---------------------- | -------------------------------------------------- |
| Card gradient start | `#7579ff`              | Purple end of card background gradient (top)       |
| Card gradient end   | `#b224ef`              | Magenta end of card background gradient (bottom)   |
| Page overlay        | `rgba(255,255,255,0.9)` | White overlay at 90% opacity over background image |
| Logo circle bg      | `#ffffff`              | White circle behind the logo icon                  |
| Logo icon color     | `#333333`              | Material Design icon inside the logo circle        |
| Title text          | `#ffffff`              | "LOG IN" heading text (white on gradient)          |
| Input text          | `#ffffff`              | Typed input text color                             |
| Input placeholder   | `#ffffff`              | Placeholder text color (fades on focus)            |
| Input underline     | `rgba(255,255,255,0.24)` | 2px bottom border on input fields               |
| Input focus underline | `#ffffff`            | Animated white underline on focus (0→100% width)   |
| Checkbox bg         | `#ffffff`              | White checkbox custom background                   |
| Checkbox checked    | `#555555`              | Checkbox icon color when checked                   |
| Checkbox label      | `#ffffff`              | "Remember me" label text                           |
| Button bg gradient  | `linear-gradient(bottom, #7579ff, #b224ef)` | Login button background |
| Button text default | `#555555`              | Button text color at rest                          |
| Button text hover   | `#ffffff`              | Button text color on hover                         |
| Button hover overlay | `#ffffff` (opacity 1→0) | White ::before overlay fades out on hover       |
| Link text           | `#e5e5e5`              | "Forgot Password?" link                            |
| Link hover          | `#ffffff`              | Link text on hover                                 |
| Body text           | `#666666`              | General paragraph text (not used in form itself)   |
| Validation border   | `#c80000`              | Alert-validate error border                        |

### Fonts

| Token        | Font family          | Usage                                       |
| ------------ | -------------------- | ------------------------------------------- |
| Body         | Poppins Regular      | Body text, input fields, checkbox label, links (14–16px) |
| Title        | Poppins Medium       | "LOG IN" heading (30px, uppercase)          |
| Button       | Poppins Medium       | Login button text (16px)                    |

### Layout & Shapes

- Full viewport height, flex centered, with a background image and white overlay at 90% opacity
- Card: 500px wide, border-radius 10px, padding 55px 55px 37px 55px
- Card background: linear-gradient(top, #7579ff, #b224ef) — purple-to-magenta vertical gradient
- Logo: 120×120px white circle (border-radius 50%), centered, containing a Material Design icon (landscape) in #333333, 60px
- Title: "Log in", Poppins Medium 30px, white, uppercase, centered, with 34px bottom padding and 27px top padding
- Inputs: full width, 45px height, transparent background, white text, 16px Poppins, left padding 38px (for icon), bottom border 2px solid rgba(255,255,255,0.24)
- Input focus: bottom border animates to white full-width (0.4s), placeholder icon slides up with 0.4s transition
- Checkbox: custom styled — hidden native input, white 16×16px square (border-radius 2px) with Material Design icon, label in white Poppins Regular 13px, 26px left padding
- Button: full width (min-width 120px), 50px height, border-radius 25px (pill shape), Poppins Medium 16px
  - Default: gradient background (bottom → top: #7579ff to #b224ef), text #555555, white ::before overlay at opacity 1
  - Hover: text becomes white, ::before opacity transitions to 0 (0.4s)
- "Forgot Password?" link: centered below button, Poppins Regular 13px, #e5e5e5, hover white, 90px top padding
- Responsive: at max-width 576px, card padding reduces to 55px 15px 37px 15px
- Section order: background → centered card → logo → title → username input → password input → remember me checkbox → login button → forgot password link

## Requirements

### Requirement: Renders full-viewport login card with gradient background

The login page SHALL display a full-viewport layout with a background image, white overlay, and a centered gradient card containing the login form.

#### Scenario: Background overlay is visible

- **WHEN** the page loads
- **THEN** the full viewport has a white overlay at 90% opacity over a background image

#### Scenario: Gradient card is centered

- **WHEN** the page loads
- **THEN** a 500px-wide card with a purple-to-magenta gradient (#7579ff to #b224ef) is centered both vertically and horizontally
- **AND** the card has a 10px border-radius

### Requirement: Displays logo and title

The form SHALL display a circular logo badge and an uppercase "Log in" heading.

#### Scenario: Logo circle is visible

- **WHEN** the page loads
- **THEN** a 120×120px white circle is displayed centered at the top of the card
- **AND** the circle contains an icon in color #333333

#### Scenario: Title is displayed

- **WHEN** the page loads
- **THEN** the text "Log in" is displayed below the logo in Poppins Medium 30px, white, uppercase, centered

### Requirement: Renders username and password inputs

The form SHALL render username and password input fields with underline-style borders and focus animations.

#### Scenario: Username input renders

- **WHEN** the page loads
- **THEN** a username input field is displayed with placeholder "Username"
- **AND** the input has a transparent background with white text
- **AND** the input has a 2px bottom border in rgba(255,255,255,0.24)
- **AND** the input is 45px tall

#### Scenario: Password input renders

- **WHEN** the page loads
- **THEN** a password input field is displayed with placeholder "Password"
- **AND** the input has type="password"
- **AND** the input has the same styling as the username input

#### Scenario: Input focus animation

- **WHEN** a user focuses on an input field
- **THEN** the bottom border animates to solid white over 0.4s
- **AND** the placeholder icon slides up with a 0.4s transition

### Requirement: Renders remember-me checkbox

The form SHALL render a custom-styled "Remember me" checkbox.

#### Scenario: Checkbox is visible

- **WHEN** the page loads
- **THEN** a checkbox labeled "Remember me" is displayed below the password input
- **AND** the checkbox has a white 16×16px custom background with border-radius 2px
- **AND** the label is in Poppins Regular 13px, white

#### Scenario: Checkbox can be toggled

- **WHEN** the user clicks the "Remember me" label
- **THEN** the checkbox state toggles
- **AND** the checkbox icon color changes to #555555 when checked

### Requirement: Renders login button with hover effect

The form SHALL render a pill-shaped login button with a gradient background and hover animation.

#### Scenario: Button renders with gradient

- **WHEN** the page loads
- **THEN** a "Login" button is displayed centered below the checkbox
- **AND** the button has a pill shape (border-radius 25px, 50px height)
- **AND** the button background is a gradient from #7579ff to #b224ef
- **AND** the button text is #555555

#### Scenario: Button hover effect

- **WHEN** the user hovers over the login button
- **THEN** the button text color transitions to white over 0.4s
- **AND** the white overlay behind the button fades out (opacity 1→0, 0.4s transition)

### Requirement: Renders forgot-password link

The form SHALL render a "Forgot Password?" link below the button.

#### Scenario: Link is visible

- **WHEN** the page loads
- **THEN** a "Forgot Password?" link is displayed centered below the button
- **AND** the link is in Poppins Regular 13px, color #e5e5e5

#### Scenario: Link hover

- **WHEN** the user hovers over the "Forgot Password?" link
- **THEN** the link text color transitions to white over 0.4s

### Requirement: Form validates required fields

The form SHALL validate that username and password are provided before submission.

#### Scenario: Empty submission shows errors

- **WHEN** the user clicks "Login" with empty username and password fields
- **THEN** validation error messages appear next to the respective fields
- **AND** the error messages have a white background with #c80000 border

#### Scenario: Valid submission

- **WHEN** the user enters a username and password and clicks "Login"
- **THEN** the form submits without validation errors

### Requirement: Responsive layout

The form SHALL be responsive and adjust padding on small screens.

#### Scenario: Mobile layout

- **WHEN** the viewport width is 576px or less
- **THEN** the card padding reduces to 55px 15px 37px 15px
- **AND** the form remains centered and functional

### Requirement: Footer links to Component Dock

Every template footer MUST link to https://www.componentdock.com/ (branded as "Component Dock").

#### Scenario: Footer attribution

- **WHEN** the page renders
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

## Verification checklist

- [ ] Full-viewport layout with background image and white overlay
- [ ] Purple-to-magenta gradient card centered on page
- [ ] Circular white logo badge with icon
- [ ] "Log in" title in uppercase white text
- [ ] Username input with underline border and focus animation
- [ ] Password input with type="password" and same styling
- [ ] Custom "Remember me" checkbox with toggle behavior
- [ ] Pill-shaped login button with gradient and hover effect
- [ ] "Forgot Password?" link with hover color transition
- [ ] Form validation for required fields
- [ ] Responsive padding at 576px breakpoint
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] All tests passing at 100% coverage
