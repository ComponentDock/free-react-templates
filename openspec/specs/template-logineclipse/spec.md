# Template: LoginEclipse (Login Form)

## Purpose

Recreation of ColorLib **Login Form V9** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/login-form-v9/
- **Preview URL:** https://colorlib.com/etc/lf/Login_v9/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v9.jpg
- **New name:** `logineclipse` (app folder `apps/logineclipse`, package `@free-react-templates/logineclipse`)
- **Deploy URL:** https://logineclipse.free.componentdock.com

## Requirements

### Requirement: Full-viewport gradient background

The page SHALL render a full-viewport container with a background image and a blue-to-purple gradient overlay.

#### Scenario: Gradient background renders

- **WHEN** the user navigates to LoginEclipse
- **THEN** the page body covers the full viewport with a background image
- **AND** a blue-to-purple linear gradient overlay is visible at 50% opacity
- **AND** the gradient transitions from rgba(0,168,255,0.5) on the left to rgba(185,0,255,0.5) on the right

### Requirement: Login card renders centered

A white card SHALL be centered on the page with rounded corners and a subtle box shadow.

#### Scenario: Card renders

- **WHEN** the user navigates to LoginEclipse
- **THEN** a white card is visible centered horizontally and vertically
- **AND** the card has border-radius 10px
- **AND** the card has a box shadow (0 3px 20px 0px rgba(0,0,0,0.1))
- **AND** the card width is approximately 390px

#### Scenario: Card responsive layout

- **WHEN** the viewport is 375px wide
- **THEN** the card shrinks to fit the viewport width
- **AND** the card has reduced horizontal padding (15px)

### Requirement: Sign In title

The card SHALL display a "Sign In" title in deep purple.

#### Scenario: Title renders

- **WHEN** the user navigates to LoginEclipse
- **THEN** the text "Sign In" is displayed at the top of the card
- **AND** the title is deep purple (#4b2354)
- **AND** the title is centered
- **AND** the title font size is 30px in Source Sans 3 Bold

### Requirement: Username/email input field

The form SHALL include a username/email input with transparent background and no visible border.

#### Scenario: Username input renders

- **WHEN** the user navigates to LoginEclipse
- **THEN** an input field with placeholder "username or email" is visible
- **AND** the input accepts text input
- **AND** the input has a transparent background with no visible border
- **AND** the input is 62px tall
- **AND** the input text is deep purple (#4b2354) in Source Sans 3 Bold 16px

### Requirement: Password input field

The form SHALL include a password input that masks typed characters with the same styling as the username input.

#### Scenario: Password input renders

- **WHEN** the user navigates to LoginEclipse
- **THEN** a password input with placeholder "password" is visible
- **AND** the input masks typed characters
- **AND** the input has the same transparent background and styling as the username input

### Requirement: Input focus shadow effect

Input fields SHALL show an enhanced box-shadow on focus with a smooth 0.4s transition.

#### Scenario: Focus shadow effect

- **WHEN** the user focuses on a username or password input
- **THEN** the input shows an enhanced box-shadow (0 5px 30px 0px rgba(0,0,0,0.2))
- **AND** the shadow transitions smoothly with a 0.4s duration

### Requirement: Sign In submit button

The form SHALL include a pill-shaped purple "Sign In" submit button.

#### Scenario: Button renders

- **WHEN** the user navigates to LoginEclipse
- **THEN** a button labeled "Sign In" is visible
- **AND** the button is pill-shaped with border-radius 25px
- **AND** the button has a purple (#bd59d4) background
- **AND** the button is 50px tall with white text
- **AND** the button text is Source Sans 3 SemiBold 14px

#### Scenario: Button hover effect

- **WHEN** the user hovers over the "Sign In" button
- **THEN** the button background changes to darker purple (#9b24bd)
- **AND** the transition animates smoothly (0.4s)

### Requirement: Or login with divider

The form SHALL display an "Or login with" divider text in gray below the submit button.

#### Scenario: Divider renders

- **WHEN** the user navigates to LoginEclipse
- **THEN** text "Or login with" is visible below the submit button
- **AND** the text is gray (#999999) in Source Sans 3 Regular 16px

### Requirement: Social login buttons

The form SHALL display circular Facebook and Google social login buttons with white backgrounds.

#### Scenario: Social buttons render

- **WHEN** the user navigates to LoginEclipse
- **THEN** a Facebook social login button is visible
- **AND** a Google social login button is visible
- **AND** both buttons are circular (50px x 50px)
- **AND** both buttons have a white background with box shadow

#### Scenario: Social button hover effect

- **WHEN** the user hovers over a social login button
- **THEN** the button's box-shadow intensifies to 0.2 opacity

### Requirement: Sign Up link

The form SHALL display a "Sign Up" link at the bottom in deep purple.

#### Scenario: Sign Up link renders

- **WHEN** the user navigates to LoginEclipse
- **THEN** a link labeled "Sign Up" is visible at the bottom of the card
- **AND** the link is deep purple (#4b2354)
- **AND** clicking the link does not navigate (href="#")

#### Scenario: Sign Up hover effect

- **WHEN** the user hovers over the "Sign Up" link
- **THEN** the link text is underlined

### Requirement: Accessibility - semantic elements

The form SHALL use semantic HTML elements with proper labels and accessible names.

#### Scenario: Semantic HTML

- **WHEN** the user navigates to LoginEclipse
- **THEN** the form uses a semantic `<form>` element
- **AND** the inputs have associated placeholders
- **AND** the button has an accessible name ("Sign In")
- **AND** social buttons have accessible names ("Login with Facebook", "Login with Google")

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders

- **WHEN** the user navigates to LoginEclipse
- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text is "Made with Component Dock"
