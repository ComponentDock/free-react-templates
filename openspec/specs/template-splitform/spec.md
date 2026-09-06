## Purpose

Splitform is a dual-panel sign-in/sign-up modal template recreating ColorLib Modal 02. It provides a centered modal dialog split into two halves: a sign-in form on the left and a sign-up form on the right, separated by a vertical divider. The design uses Poppins font, Bootstrap-inspired blue primary color, and social login buttons (Facebook, Twitter).

## Requirements

### Requirement: Landing page with modal trigger

The template SHALL display a centered landing section with the site name "Splitform" as a heading, a subtitle, and a "Launch Modal" button that opens the modal dialog.

#### Scenario: Landing renders correctly

- **WHEN** the app loads
- **THEN** the landing section shows the "Splitform" heading, a subtitle, and a "Launch Modal" button

#### Scenario: Clicking Launch Modal opens the modal

- **WHEN** the user clicks the "Launch Modal" button
- **THEN** a modal dialog appears with `aria-modal="true"`

### Requirement: Split-panel modal with sign-in and sign-up forms

The modal SHALL contain two panels separated by a vertical divider: a sign-in form (left) and a sign-up form (right).

#### Scenario: Sign-in panel displays all form elements

- **WHEN** the modal is open
- **THEN** the left panel shows "Sign In" heading, username input, password input, Sign In button, Remember Me checkbox, Forgot Password link, "Or Sign In With" divider, and Facebook/Twitter social login buttons

#### Scenario: Sign-up panel displays all form elements

- **WHEN** the modal is open
- **THEN** the right panel shows "Sign Up" heading, first name input, last name input, email input, password input, Login button, and terms agreement text

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
