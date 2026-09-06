## Purpose

Overlay is a sign-in popup template recreating ColorLib Modal 01. It provides a centered modal dialog with a login form (username, password, remember me, forgot password) triggered by a landing page button. The design uses Poppins font, Bootstrap-inspired blue primary color, and clean white card styling.

## Requirements

### Requirement: Landing page with modal trigger

The template SHALL display a centered landing section with the site name "Overlay" as a heading, a subtitle, and a "Sign In" button that opens the modal dialog.

#### Scenario: Landing renders correctly

- **WHEN** the app loads
- **THEN** the landing section shows the "Overlay" heading, a subtitle, and a "Sign In" button

#### Scenario: Clicking Sign In opens the modal

- **WHEN** the user clicks the "Sign In" button
- **THEN** a modal dialog appears with `aria-modal="true"` and focus trapped inside

### Requirement: Sign-in modal with form

The modal SHALL contain a person icon, "Sign In" heading, username input, password input, "Login" submit button, "Remember Me" checkbox, "Forgot Password" link, and a footer with "Not a member? Create an account".

#### Scenario: Modal displays all form elements

- **WHEN** the modal is open
- **THEN** username input, password input, Login button, Remember Me checkbox, Forgot Password link, and Create an account link are all visible

#### Scenario: Form submission is prevented

- **WHEN** the user fills in credentials and clicks Login
- **THEN** the form submission is prevented (no page reload)

### Requirement: Modal dismissal

The modal SHALL be closable via the close button (X icon), pressing Escape, or clicking the backdrop overlay outside the modal content.

#### Scenario: Close button dismisses modal

- **WHEN** the user clicks the X close button
- **THEN** the modal closes

#### Scenario: Escape key dismisses modal

- **WHEN** the user presses Escape
- **THEN** the modal closes

#### Scenario: Backdrop click dismisses modal

- **WHEN** the user clicks the dark backdrop outside the modal card
- **THEN** the modal closes

#### Scenario: Clicking inside modal does not close it

- **WHEN** the user clicks inside the modal content (e.g. on an input)
- **THEN** the modal remains open

### Requirement: Footer with Component Dock link

The template footer SHALL display the site name, a tagline, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer shows Component Dock link

- **WHEN** the footer renders
- **THEN** a link labeled "More templates at Component Dock" points to https://www.componentdock.com/

### Requirement: Dark mode toggle

The navbar SHALL include a dark mode toggle that adds/removes the `dark` class on the document root.

#### Scenario: Toggle switches dark mode

- **WHEN** the user clicks the dark mode toggle
- **THEN** the `dark` class is added to `<html>` and the button label changes to "Light mode"

#### Scenario: Toggle reverts dark mode

- **WHEN** the user clicks the toggle again
- **THEN** the `dark` class is removed and the button label changes back to "Dark mode"

#### Scenario: Cleanup on unmount

- **WHEN** the navbar unmounts
- **THEN** the `dark` class is removed from the document root
