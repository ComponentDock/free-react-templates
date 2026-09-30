# SignupGlow

## Purpose

Recreation of ColorLib Signup Form 12 as a free React signup form template with golden accent colors, built with React, Tailwind CSS 4, and TypeScript. Original: https://colorlib.com/wp/template/signup-form-12/

Design tokens extracted from screenshot:

- Brand accent: `#C9B458` (golden/mustard)
- Page background: `#f5f5f5`
- Card surface: `#ffffff`
- Text primary: `#333333`
- Text muted: `#999999`
- Border: `#dddddd`
- Font: Roboto (Google Fonts)
- Social Facebook: `#3b5998`
- Social Twitter: `#1da1f2`
- Avatar background: `#cccccc`
- Badge green: `#8bc34a`

## Requirements

### Requirement: Page title

The template SHALL display "Sign Up #01" centered above the signup card.

#### Scenario: Title renders

- **WHEN** a user visits the page
- **THEN** the heading "Sign Up #01" is visible above the card

### Requirement: Signup card heading

The signup card SHALL display a "Hello!" heading and "Please signup to continue" subtext.

#### Scenario: Heading renders

- **WHEN** the signup card is rendered
- **THEN** the heading "Hello!" is visible
- **AND** the text "Please signup to continue" is visible

### Requirement: User avatar

The signup card SHALL display a gray circular user avatar icon with a small green plus badge.

#### Scenario: Avatar renders

- **WHEN** the signup card is rendered
- **THEN** a gray circular avatar with a person icon is visible
- **AND** a green plus badge is visible on the avatar

### Requirement: Form fields

The signup form SHALL include Full Name, Email Address, Password, and Confirm Password fields with bottom-border styling.

#### Scenario: All fields render

- **WHEN** the signup card is rendered
- **THEN** a Full Name input with placeholder "John Doe" is visible
- **AND** an Email Address input with placeholder "johndoe@gmail.com" is visible
- **AND** a Password input with placeholder "Password" is visible
- **AND** a Confirm Password input with placeholder "Confirm Password" is visible

#### Scenario: User can type in fields

- **WHEN** a user types in the Full Name field
- **THEN** the input value updates

### Requirement: Form validation

The signup form SHALL show validation errors when required fields are empty on submit, and SHALL clear errors when the user types in the corresponding field.

#### Scenario: Empty form submission

- **WHEN** the user clicks "Sign Up" with all fields empty
- **THEN** "Full Name is required" error is displayed
- **AND** "Email Address is required" error is displayed
- **AND** "Password is required" error is displayed
- **AND** "Confirm Password is required" error is displayed

#### Scenario: Error clears on input

- **WHEN** the user types into a field that has a validation error
- **THEN** the validation error for that field disappears

#### Scenario: Valid submission

- **WHEN** all fields are filled and the user clicks "Sign Up"
- **THEN** no validation errors are displayed

### Requirement: Sign Up button

The template SHALL display a full-width golden/mustard "Sign Up" button.

#### Scenario: Button renders

- **WHEN** the signup card is rendered
- **THEN** a "Sign Up" button with golden background is visible
- **AND** the button spans the full card width

### Requirement: Social login

The template SHALL display "or" and "Signup with" text followed by Facebook and Twitter social icon links.

#### Scenario: Social icons render

- **WHEN** the signup card is rendered
- **THEN** "or" text is visible
- **AND** "Signup with" text is visible
- **AND** a Facebook social icon link is visible
- **AND** a Twitter social icon link is visible

### Requirement: Sign in redirect

The template SHALL display "I'm already a member!" text with a "Sign In" link in golden accent color.

#### Scenario: Sign in link renders

- **WHEN** the signup card is rendered
- **THEN** "I'm already a member!" text is visible
- **AND** a "Sign In" link is visible with golden accent color

### Requirement: Footer

The template SHALL display a footer with a link to Component Dock.

#### Scenario: Footer renders

- **WHEN** the page is rendered
- **THEN** a footer with "More templates at Component Dock" link to https://www.componentdock.com/ is visible
