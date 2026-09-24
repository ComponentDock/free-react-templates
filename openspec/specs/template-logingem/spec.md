# Template: LoginGem (Login Form V4)

## Purpose

LoginGem is a single-page LOGIN FORM in the free-react-templates monorepo. It
is an original React recreation of the ColorLib "Login Form V4" free template
(source: https://colorlib.com/wp/template/login-form-v4/, preview:
https://colorlib.com/etc/lf/Login_v4/index.html), built under a DIFFERENT
name (**LoginGem**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

- TypeScript.

The original is a form on a full-viewport background image with a centered
white card containing the login form. The card has a bold "Login" heading,
username and password fields with bottom-border style and left-side icons,
a "Forgot password?" link, a full-width gradient login button (teal to purple
animated sweep), social login buttons (Facebook, Twitter, Google as colored
circles), and an "Or Sign Up Using / Sign Up" link at the bottom.

## Design tokens (from preview HTML + CSS analysis)

### Colors

| Token                 | Value               | Source                                |
| --------------------- | ------------------- | ------------------------------------- |
| card-bg               | `#ffffff`           | White card background                 |
| heading-text          | `#333333`           | "Login" heading color                 |
| input-text            | `#333333`           | Form field text / placeholder         |
| label-text            | `#333333`           | Field labels ("Username", "Password") |
| input-border          | `#d9d9d9`           | Bottom border on input fields         |
| input-placeholder     | `#adadad`           | Placeholder text color                |
| icon-color            | `#adadad`           | Left-side icons in input fields       |
| focus-icon-color      | `#a64bf4`           | Icon color on focus (purple)          |
| focus-border-color    | `#7f7f7f`           | Animated focus underline              |
| body-text             | `#666666`           | "Or Sign Up Using" text, links        |
| link-hover            | `#a64bf4`           | Link hover color (purple)             |
| button-gradient-start | `#00dbde` (teal)    | Button gradient                       |
| button-gradient-end   | `#fc00ff` (magenta) | Button gradient                       |
| facebook-bg           | `#3b5998`           | Facebook social button                |
| twitter-bg            | `#1da1f2`           | Twitter social button                 |
| google-bg             | `#ea4335`           | Google social button                  |
| signup-text           | `#333333`           | "Sign Up" link text (uppercase)       |
| error-color           | `#c80000`           | Validation error border/text          |

### Fonts

- Font family: Poppins (via Google Fonts, Regular/Medium/Bold weights)
- "Login" heading: Poppins-Bold, 39px, centered
- Labels: Poppins-Regular, 14px, color #333333
- Input text: Poppins-Medium, 16px, color #333333
- Button text: Poppins-Medium, 16px, white, uppercase
- Body/links: Poppins-Regular, 14px, color #666666

### Shapes

- Card: white, border-radius 10px, width 500px, padding 55px l/r, 65px top, 54px bottom
- Input fields: transparent bg, 2px bottom border (#d9d9d9), 55px height
- Login button: border-radius 25px (pill shape), full width, 50px height, gradient background
- Social buttons: circular (50px x 50px, border-radius 50%), solid background
- Button box-shadow: `0 5px 30px 0px rgba(3, 216, 222, 0.2)`

### Layout

- Full-viewport centered layout (flex, center, center, padding 15px)
- Background: image-based (recreated with a gradient placeholder)
- Single white card centered vertically and horizontally
- Card width: 500px max-width
- Form elements stacked vertically with consistent spacing
- Social buttons in a horizontal flex row centered
- Bottom section: "Or Sign Up Using" text + "Sign Up" link, centered

### Animations

- Button hover: gradient sweep from left (background slides from left to right)
- Input focus: bottom border underline animates from 0 to 100% width, icon turns purple
- Links: 0.4s transition on hover

## Requirements

### Requirement: Full-viewport gradient background renders

Users SHALL see a full-viewport gradient background covering the entire viewport when the page loads.

#### Scenario: Full-viewport background renders

- **WHEN** the page loads
- **THEN** a full-viewport background is visible
- **AND** the background covers the entire viewport

### Requirement: White login card is centered on screen

Users SHALL see a white card centered vertically and horizontally on the viewport with rounded corners.

#### Scenario: White login card is centered on screen

- **WHEN** the page loads
- **THEN** a white card is centered vertically and horizontally on the viewport
- **AND** the card has rounded corners

### Requirement: Login heading is displayed

Users SHALL see a bold "Login" heading centered within the card.

#### Scenario: Login heading is displayed

- **WHEN** the page loads
- **THEN** the card shows a bold "Login" heading
- **AND** the heading is centered within the card

### Requirement: Username input field renders with icon

Users SHALL see a username input field with a label, icon, and placeholder text.

#### Scenario: Username input field renders with icon

- **WHEN** the page loads
- **THEN** a username input field is visible
- **AND** the input has a bottom border
- **AND** the input has a label "Username" above it
- **AND** the input placeholder reads "Type your username"

### Requirement: Password input field renders with icon

Users SHALL see a password input field with a label, icon, and masked characters.

#### Scenario: Password input field renders with icon

- **WHEN** the page loads
- **THEN** a password input field is visible
- **AND** the input has a bottom border
- **AND** the input has a label "Password" above it
- **AND** the input shows masked characters (dots)

### Requirement: Forgot password link is present

Users SHALL see a "Forgot password?" link aligned to the right.

#### Scenario: Forgot password link is present

- **WHEN** the page loads
- **THEN** a "Forgot password?" link is visible
- **AND** the link is aligned to the right

### Requirement: Login button is full-width with gradient

Users SHALL see a full-width "Login" button with a teal-to-purple gradient.

#### Scenario: Login button is full-width with gradient

- **WHEN** the page loads
- **THEN** a "Login" button is visible
- **AND** the button spans the full width of the form
- **AND** the button has a gradient background (teal to purple)
- **AND** the button text is white and uppercase

### Requirement: Social login section is displayed

Users SHALL see three circular social login buttons for Facebook, Twitter, and Google.

#### Scenario: Social login section is displayed

- **WHEN** the page loads
- **THEN** "Or Sign Up Using" text is visible below the login button
- **AND** three social login buttons are shown side by side
- **AND** the left button is blue (Facebook)
- **AND** the middle button is light blue (Twitter)
- **AND** the right button is red (Google)
- **AND** all buttons are circular

### Requirement: Sign up section is present

Users SHALL see an "Or Sign Up Using" text and a "Sign Up" link at the card bottom.

#### Scenario: Sign up section is present

- **WHEN** the page loads
- **THEN** "Or Sign Up Using" text is visible at the card bottom
- **AND** a "Sign Up" link is visible below it
- **AND** the "Sign Up" link text is uppercase

### Requirement: Login button responds to hover

Users SHALL see the login button gradient animate on hover.

#### Scenario: Login button responds to hover

- **WHEN** the user hovers over the "Login" button
- **THEN** the button gradient animates (sweeps from left)

### Requirement: Social buttons respond to hover

Users SHALL see social buttons darken on hover.

#### Scenario: Social buttons respond to hover

- **WHEN** the user hovers over a social login button
- **THEN** the button background darkens to #333333
- **AND** the cursor changes to pointer

### Requirement: Username field validates on submit with empty value

The browser SHALL prevent form submission when the username field is empty.

#### Scenario: Username field validates on submit with empty value

- **WHEN** the user clicks the "Login" button without entering a username
- **THEN** the browser's built-in required validation prevents form submission

### Requirement: Password field requires input on submit

The browser SHALL prevent form submission when the password field is empty.

#### Scenario: Password field requires input on submit

- **WHEN** the user enters a username but leaves the password empty and clicks "Login"
- **THEN** the browser's built-in required validation prevents form submission

### Requirement: Form submits successfully with valid inputs

The form SHALL submit without validation errors when valid data is provided.

#### Scenario: Form submits successfully with valid inputs

- **WHEN** the user enters a valid username and password and clicks "Login"
- **THEN** the form submission is triggered without validation errors

### Requirement: Responsive card stays centered

The card SHALL stay centered and readable on mobile viewports.

#### Scenario: Responsive card stays centered

- **WHEN** the page loads on a mobile viewport
- **THEN** the card stays centered and readable

### Requirement: Footer links to Component Dock

Users SHALL see a footer with a link to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** a footer is visible with a link to Component Dock
- **AND** the link text mentions "Component Dock"

## Verification checklist

- [ ] Full-viewport background
- [ ] White card centered vertically and horizontally (500px width, 10px radius)
- [ ] Bold "Login" heading, centered, 39px Poppins Bold
- [ ] Username input with label, bottom border, icon, placeholder "Type your username"
- [ ] Password input with label, bottom border, icon, masked dots
- [ ] "Forgot password?" link, right-aligned
- [ ] Full-width gradient "Login" button (teal to purple, pill shape, uppercase)
- [ ] "Or Sign Up Using" divider text
- [ ] Facebook, Twitter, Google social buttons (colored circles, centered)
- [ ] "Or Sign Up Using" + "Sign Up" link at bottom
- [ ] Hover effects (button gradient sweep, social button darken)
- [ ] Focus effects (input underline animation, icon color change)
- [ ] HTML5 validation on username (required) and password (required)
- [ ] Responsive: card stays centered on smaller viewports
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
