# Accessway — Login Form Template

## Purpose

Recreation of ColorLib "Login Form 19" (https://colorlib.com/wp/template/login-form-19/). A centered dark navy login card with circular avatar, username/password fields with icons, and a Get Started button.

## Requirements

### Requirement: Render the login card layout

The template SHALL display a centered card with a dark navy background (#000232), rounded corners, and a drop shadow.

#### Scenario: Card is visible and centered

- **WHEN** the page loads
- **THEN** a card element with dark navy background is visible and centered on the page

### Requirement: Display the avatar

The template SHALL display a 100px circular avatar image at the top center of the card.

#### Scenario: Avatar renders as a circle

- **WHEN** the page loads
- **THEN** an avatar element with rounded-full shape and 100px dimensions is visible

### Requirement: Display welcome heading and subtitle

The template SHALL display a "Welcome" heading (uppercase, white) and a subtitle "Sign in by entering the information below" (white 50% opacity).

#### Scenario: Heading and subtitle are visible

- **WHEN** the page loads
- **THEN** the text "Welcome" and "Sign in by entering the information below" are visible

### Requirement: Render username input with icon

The template SHALL display a username text input field with a user icon on the left side.

#### Scenario: Username field accepts input

- **WHEN** the user types in the username field
- **THEN** the field accepts and displays the typed text

### Requirement: Render password input with icon

The template SHALL display a password input field with a lock icon on the left side.

#### Scenario: Password field accepts input

- **WHEN** the user types in the password field
- **THEN** the field accepts and displays the typed text as masked characters

### Requirement: Display Forgot Password link

The template SHALL display a "Forgot Password" link right-aligned above the submit button.

#### Scenario: Forgot Password link is clickable

- **WHEN** the user clicks the Forgot Password link
- **THEN** the link navigates to the forgot password target

### Requirement: Display Get Started submit button

The template SHALL display a full-width "Get Started" button with the primary accent color.

#### Scenario: Button submits the form

- **WHEN** the user clicks the Get Started button
- **THEN** the form submission is triggered

### Requirement: Display Sign Up CTA

The template SHALL display "Don't have an account? Sign Up" text below the form.

#### Scenario: Sign Up link is present

- **WHEN** the page loads
- **THEN** a "Sign Up" link is visible and clickable

### Requirement: Link to Component Dock in footer

The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present

- **WHEN** the page loads
- **THEN** a link with text "More templates at Component Dock" pointing to https://www.componentdock.com/ is visible in the footer
