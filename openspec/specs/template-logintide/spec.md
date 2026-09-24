# Template: Logintide (Login Form V3)

## Purpose

Recreation of ColorLib **Login Form V3** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v3`
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v3/
- **Live preview:** https://colorlib.com/etc/lf/Login_v3/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v3.jpg
- **New name:** `logintide` (apps/logintide, package @free-react-templates/logintide)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from live preview CSS)

### Colors

| Token               | Hex / Value                  | Usage                                              |
| ------------------- | ---------------------------- | -------------------------------------------------- |
| Card gradient start | `#7579ff`                    | Form card gradient top, button gradient end        |
| Card gradient end   | `#b224ef`                    | Form card gradient bottom, button gradient start   |
| Page background     | Background image + `rgba(255,255,255,0.9)` overlay | Full viewport bg with white semi-transparent overlay |
| Card background     | `linear-gradient(to bottom, #7579ff, #b224ef)` | Login form card purple-to-magenta gradient |
| Logo circle bg      | `#ffffff`                    | Circular logo container (120px)                    |
| Logo icon color     | `#333333`                    | Landscape icon inside logo circle                  |
| Title text          | `#ffffff`                    | "Log in" heading                                  |
| Input text          | `#ffffff`                    | Username / password field text                     |
| Input placeholder   | `#ffffff`                    | Placeholder text in inputs                        |
| Input underline     | `rgba(255,255,255,0.24)`     | Bottom border on input fields (2px solid)          |
| Focus underline     | `#ffffff`                    | Animated expanding underline on focus              |
| Button text (rest)  | `#555555`                    | "Login" button text default state                  |
| Button text (hover) | `#ffffff`                    | "Login" button text on hover                      |
| Button gradient     | `linear-gradient(to top, #7579ff, #b224ef)` | Login button background (reversed card gradient) |
| Checkbox label      | `#ffffff`                    | "Remember me" label text                           |
| Checkbox icon bg    | `#ffffff`                    | Custom checkbox indicator background               |
| Checkbox checked    | `#555555`                    | Checkbox checked state icon color                  |
| Link text           | `#e5e5e5`                    | "Forgot Password?" link                           |
| Link hover          | `#ffffff`                    | Link hover state                                  |
| Alert border        | `#c80000`                    | Validation error border                            |
| Alert text          | `#c80000`                    | Validation error text                              |
| Alert bg            | `#ffffff`                    | Validation tooltip background                      |

### Fonts

| Token      | Font family          | Usage                                       |
| ---------- | -------------------- | ------------------------------------------- |
| Body       | Poppins Regular      | Body text, inputs, labels, links            |
| Heading    | Poppins Medium       | "Log in" title (~30px, uppercase)           |
| Button     | Poppins Medium       | "Login" button text (16px)                  |
| Checkbox   | Poppins Regular      | "Remember me" label (13px)                  |
| Link       | Poppins Regular      | "Forgot Password?" (13px)                   |

### Layout & Shapes

- Full viewport height, centered content with background image + white overlay
- Form card: 500px wide, border-radius 10px, padding 55px 55px 37px 55px, gradient bg
- Logo: circular, 120x120px, white background, centered, Material Design Iconic Font landscape icon (use lucide-react `Mountain` or `Landscape` as substitute)
- Title: "Log in", uppercase, Poppins Medium 30px, white, centered, margin-bottom ~27px
- Username input: transparent bg, full width, height 45px, bottom border 2px rgba(255,255,255,0.24), white text, icon via Material Design Iconic Font (use lucide-react `User` icon)
- Password input: same styling as username, icon `\xf191` (use lucide-react `Lock` icon)
- Focus animation: icon floats up and shrinks, underline expands from left with 0.4s transition
- Remember me checkbox: hidden native input, custom white square indicator (16x16, radius 2px), Material Design Iconic Font check icon
- Login button: full width, min-width 120px, height 50px, border-radius 25px (pill), gradient bg, Poppins Medium 16px, text #555555 default → #fff on hover (white overlay fades out)
- "Forgot Password?" link: centered below button, Poppins Regular 13px, #e5e5e5 → #fff hover
- Responsive: below 576px, card padding reduces to 55px 15px 37px 15px

## Requirements

### Requirement: Renders full-viewport centered layout with background

The login page SHALL display a full-viewport container with a background image and a semi-transparent white overlay, centering the form card both horizontally and vertically.

#### Scenario: Page loads with centered card

- **WHEN** the page loads
- **THEN** a login form card is centered both horizontally and vertically within the full viewport
- **AND** the card has a purple-to-magenta gradient background

#### Scenario: Background image with white overlay

- **WHEN** the page renders
- **THEN** a background image is displayed covering the viewport
- **AND** a semi-transparent white overlay (`rgba(255,255,255,0.9)`) is rendered on top of the background image

### Requirement: Renders circular logo

The form card SHALL display a circular white logo container with an icon inside.

#### Scenario: Logo circle is visible

- **WHEN** the page loads
- **THEN** a 120x120px circular white container is displayed at the top center of the form card
- **AND** a landscape/mountain icon is rendered inside the circle in dark color (#333333)

### Requirement: Renders "Log in" title

The form card SHALL display a "Log in" heading above the form fields.

#### Scenario: Title is visible

- **WHEN** the page loads
- **THEN** the text "Log in" is displayed centered below the logo
- **AND** the text is uppercase, white, in Poppins Medium at approximately 30px

### Requirement: Renders username input field

The login form SHALL display a username text input with an icon and underline styling.

#### Scenario: Username field is visible

- **WHEN** the page loads
- **THEN** a text input with placeholder "Username" is displayed below the title
- **AND** a user icon is positioned to the left of the input text

#### Scenario: Username field has bottom border

- **WHEN** the page renders
- **THEN** the username input has a 2px bottom border in semi-transparent white (`rgba(255,255,255,0.24)`)

#### Scenario: Username field focus animation

- **WHEN** the user focuses the username input
- **THEN** the bottom border expands from left to right with a 0.4s transition
- **AND** the icon floats upward and reduces in size

#### Scenario: Username accepts text input

- **WHEN** the user types into the username field
- **THEN** the entered text is displayed in white color

### Requirement: Renders password input field

The login form SHALL display a password input with icon and underline styling.

#### Scenario: Password field is visible

- **WHEN** the page loads
- **THEN** a password input with placeholder "Password" is displayed below the username field
- **AND** a lock icon is positioned to the left of the input text

#### Scenario: Password field masks input

- **WHEN** the user types into the password field
- **THEN** the characters are masked (displayed as dots or asterisks)

#### Scenario: Password field focus animation

- **WHEN** the user focuses the password input
- **THEN** the bottom border expands from left to right with a 0.4s transition
- **AND** the lock icon floats upward and reduces in size

### Requirement: Renders "Remember me" checkbox

The login form SHALL display a "Remember me" checkbox below the password field.

#### Scenario: Checkbox is visible

- **WHEN** the page loads
- **THEN** a checkbox with label "Remember me" is displayed below the password field
- **AND** the checkbox indicator is a small white square (16x16px, radius 2px)

#### Scenario: Checkbox can be toggled

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox toggles between checked and unchecked states

### Requirement: Renders login button

The login form SHALL display a full-width pill-shaped login button.

#### Scenario: Button is visible

- **WHEN** the page loads
- **THEN** a button with text "Login" is displayed below the checkbox
- **AND** the button has a purple-to-magenta gradient background
- **AND** the button has a 25px border-radius (pill shape)

#### Scenario: Button hover effect

- **WHEN** the user hovers over the login button
- **THEN** the button text changes from #555555 to #ffffff
- **AND** a white background overlay fades out with a 0.4s transition

#### Scenario: Button is full width

- **WHEN** the page renders
- **THEN** the login button spans the full width of the form card
- **AND** the button has a minimum height of 50px

### Requirement: Renders "Forgot Password?" link

The login form SHALL display a "Forgot Password?" link below the login button.

#### Scenario: Link is visible

- **WHEN** the page loads
- **THEN** a centered link with text "Forgot Password?" is displayed below the login button
- **AND** the link text is light gray (#e5e5e5) in Poppins Regular 13px

#### Scenario: Link hover effect

- **WHEN** the user hovers over the "Forgot Password?" link
- **THEN** the link text color changes to white (#ffffff)

### Requirement: Responsive layout adjustments

The login page SHALL adjust layout for smaller viewports.

#### Scenario: Mobile card padding

- **WHEN** the viewport width is 576px or narrower
- **THEN** the form card padding reduces to 55px top/bottom and 15px left/right

### Requirement: Form validation feedback

The login form SHALL display validation feedback when required fields are empty.

#### Scenario: Empty field validation

- **WHEN** the user submits the form with an empty username or password
- **THEN** a validation tooltip appears with the appropriate error message
- **AND** the tooltip has a white background with red border (#c80000) and red text

### Requirement: Component Dock footer

Every template SHALL include a footer linking to Component Dock.

#### Scenario: Footer link is present

- **WHEN** the page renders
- **THEN** a link to https://www.componentdock.com/ is visible in the page
- **AND** the link text includes "Component Dock"

## Verification checklist

- [ ] Form card has purple-to-magenta gradient (`linear-gradient(to bottom, #7579ff, #b224ef)`)
- [ ] Logo circle is 120x120px, white background, centered
- [ ] "Log in" title is uppercase, white, Poppins Medium ~30px
- [ ] Username input has transparent bg, white text, bottom border `rgba(255,255,255,0.24)`
- [ ] Password input has same styling as username
- [ ] Focus animation: icon floats up, underline expands left-to-right (0.4s)
- [ ] "Remember me" checkbox is functional with custom white indicator
- [ ] Login button is pill-shaped (radius 25px), gradient bg, full width
- [ ] Button hover: text turns white, white overlay fades out (0.4s)
- [ ] "Forgot Password?" link is #e5e5e5, centered, hover turns white
- [ ] Background image with `rgba(255,255,255,0.9)` white overlay
- [ ] Mobile responsive: padding reduces below 576px
- [ ] Validation tooltips with red border/text on empty submit
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] Poppins font loaded via Google Fonts in index.html
