# Template: AuthGate (Modal / Login Registration Form)

## Purpose

Recreation of **ColorLib "Modal 05"** — a login and registration modal form
template with social media icons and responsive layout.

- **Source:** https://colorlib.com/wp/template/modal-05/
- **Preview (original):** https://preview.colorlib.com/theme/modal-05/ (unreachable at prep time)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-05.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `authgate` (app folder: `apps/authgate`, package: `@free-react-templates/authgate`)
- **Deploy target:** https://authgate.free.componentdock.com

## Design tokens

Extracted from screenshot pixel analysis (preview was unreachable — 404):

| Token              | Value                      | Notes                                   |
| ------------------ | -------------------------- | --------------------------------------- |
| Brand color        | `#4664f0` (blue/indigo)    | Submit button, primary accent           |
| Brand color hover  | `#3c64f0` (darker blue)    | Hover state for primary button          |
| Button gradient    | `#4664f0` → `#3250c8`      | Subtle gradient on submit button        |
| Light accent       | `#c8dcfa` (pale blue)      | Button glow, hover background           |
| Overlay background | `#7f7f7f` (medium gray)    | Semi-transparent modal backdrop         |
| Modal background   | `#ffffff` (white)          | Modal card surface                      |
| Heading text       | `#2c2f3e` (dark navy)      | Modal title                             |
| Body text          | `#43434f` (dark gray-navy) | Input labels, descriptions              |
| Input border       | `#e0e0e0` (light gray)     | Form field borders                      |
| Input focus        | `#4664f0` (blue)           | Focus ring color on inputs              |
| Font family        | System sans-serif stack    | -apple-system, BlinkMacSystemFont, sans |
| Button radius      | ~4px (slightly rounded)    | Submit button corners                   |
| Modal radius       | ~8px (rounded card)        | Modal card corners                      |
| Modal shadow       | Large drop shadow          | Floating card appearance                |

**Color note:** The preview was unreachable. Tokens derived from screenshot
pixel sampling. The dominant palette is blue/indigo (#4664f0) on white,
with a gray overlay backdrop.

## Gherkin requirements

### Modal overlay

```gherkin
Feature: Modal overlay backdrop

  Scenario: Overlay covers full viewport
    Given the page has loaded
    When the modal is triggered (after delay or user action)
    Then a semi-transparent gray overlay (#7f7f7f at ~60% opacity) covers the entire viewport

  Scenario: Overlay dims page content
    Given the modal overlay is visible
    Then the underlying page content is visually dimmed and non-interactive
```

### Modal card

```gherkin
Feature: Modal card container

  Scenario: Modal card is centered
    Given the modal is visible
    Then the modal card is centered horizontally and vertically in the viewport

  Scenario: Modal card has white background
    Given the modal is visible
    Then the modal card has a white (#ffffff) background with rounded corners (~8px)

  Scenario: Modal card has drop shadow
    Given the modal is visible
    Then the modal card has a visible drop shadow giving a floating appearance

  Scenario: Modal card has close button
    Given the modal is visible
    Then a close button (X icon) is displayed in the top-right corner of the modal card

  Scenario: Close button dismisses modal
    Given the modal is visible
    When the user clicks the close button
    Then the modal and overlay are dismissed

  Scenario: Escape key dismisses modal
    Given the modal is visible
    When the user presses the Escape key
    Then the modal and overlay are dismissed

  Scenario: Overlay click dismisses modal
    Given the modal overlay is visible
    When the user clicks on the overlay area outside the modal card
    Then the modal and overlay are dismissed
```

### Login form

```gherkin
Feature: Login form

  Scenario: Email input field
    Given the modal is visible
    Then an email input field is displayed with placeholder "Email"

  Scenario: Password input field
    Given the modal is visible
    Then a password input field is displayed with placeholder "Password"

  Scenario: Remember me checkbox
    Given the modal is visible
    Then a "Remember me" checkbox is displayed below the password field

  Scenario: Forgot password link
    Given the modal is visible
    Then a "Forgot Password?" link is displayed

  Scenario: Submit button
    Given the modal is visible
    Then a blue (#4664f0) submit button labeled "Sign In" is displayed
    And the button has white text and slightly rounded corners (~4px)

  Scenario: Submit button hover state
    Given the modal is visible
    When the user hovers over the submit button
    Then the button background darkens slightly (#3c64f0)
```

### Social login

```gherkin
Feature: Social media login icons

  Scenario: Social login section present
    Given the modal is visible
    Then a "Or Sign In With" divider is displayed below the submit button

  Scenario: Social login icons
    Given the modal is visible
    Then social media login icons are displayed (Facebook, Twitter, Google)

  Scenario: Social login icon styling
    Given the modal is visible
    Then each social icon is displayed in a circular or rounded container
    And each icon uses a distinct brand color or neutral gray
```

### Registration link

```gherkin
Feature: Registration link

  Scenario: Not a member link
    Given the modal is visible
    Then text "Not a Member Yet?" is displayed at the bottom of the form

  Scenario: Register link
    Given the modal is visible
    Then a "Register" link is displayed that navigates to registration

  Scenario: Register link styling
    Given the modal is visible
    Then the "Register" link is styled in blue (#4664f0) and underlined or emphasized
```

### Modal trigger behavior

```gherkin
Feature: Modal trigger

  Scenario: Modal appears after delay
    Given the page has loaded
    When a configurable delay elapses (e.g. 3 seconds)
    Then the login modal appears with overlay

  Scenario: Modal appears on exit intent
    Given the page has loaded
    When the user moves the mouse toward the browser chrome (exit intent)
    Then the login modal appears with overlay

  Scenario: Modal appears once per session
    Given the modal has been dismissed
    When the user navigates within the same session
    Then the modal does not reappear automatically

  Scenario: Modal respects user dismissal
    Given the modal is dismissed by the user
    Then the dismissal is stored in session/local storage
    And the modal will not reappear in the same session
```

### Form validation

```gherkin
Feature: Form validation

  Scenario: Empty email validation
    Given the modal is visible
    When the user clicks "Sign In" without entering an email
    Then an error message is displayed for the email field

  Scenario: Invalid email format
    Given the modal is visible
    When the user enters an invalid email format and clicks "Sign In"
    Then an error message is displayed for invalid email format

  Scenario: Empty password validation
    Given the modal is visible
    When the user clicks "Sign In" without entering a password
    Then an error message is displayed for the password field

  Scenario: Valid form submission
    Given the modal is visible
    When the user enters a valid email and password and clicks "Sign In"
    Then the form is submitted (or shows a success/loading state)
```

### Responsive behavior

```gherkin
Feature: Responsive modal

  Scenario: Mobile layout
    Given the viewport width is less than 640px
    When the modal is visible
    Then the modal card fills most of the viewport width with margin
    And the form fields are stacked vertically

  Scenario: Tablet/Desktop layout
    Given the viewport width is 640px or greater
    When the modal is visible
    Then the modal card has a fixed max-width (~400px) and is centered
```

## Verification checklist

- [ ] Modal overlay covers full viewport with semi-transparent gray
- [ ] Modal card is centered, white background, rounded corners, drop shadow
- [ ] Close button (X) in top-right corner dismisses modal
- [ ] Escape key dismisses modal
- [ ] Overlay click outside card dismisses modal
- [ ] Email input field with placeholder
- [ ] Password input field with placeholder
- [ ] Remember me checkbox
- [ ] Forgot Password link
- [ ] Blue (#4664f0) "Sign In" submit button
- [ ] Submit button hover darkens to #3c64f0
- [ ] "Or Sign In With" social login divider
- [ ] Social media login icons (Facebook, Twitter, Google)
- [ ] "Not a Member Yet? Register" link at bottom
- [ ] Form validation (empty email, invalid email, empty password)
- [ ] Modal triggers after configurable delay
- [ ] Modal triggers on exit intent
- [ ] Modal dismissal persists (localStorage)
- [ ] Responsive: fills width on mobile, fixed-width on desktop
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
