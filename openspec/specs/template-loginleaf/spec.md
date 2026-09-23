# Template: LoginLeaf (Login Form)

## Purpose

Recreation of ColorLib "Login Form 08" (`login-form-08`).
Preview: https://preview.colorlib.com/theme/login-form-08/ (404 as of 2026-09-23 — design tokens extracted from screenshot).
Source page: https://colorlib.com/wp/template/login-form-08/

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Design Tokens

- **Primary color (mint/teal):** #4ecdc4 — used on Log In button, checkbox accent, illustration accents
- **Background:** #ffffff (white) — entire page
- **Text primary:** #333333 (dark gray, heading)
- **Text secondary:** #999999 (light gray, subtext)
- **Input border:** #dddddd (light gray, bottom-border-only inputs)
- **Button text:** #ffffff (white on mint background)
- **Social Facebook:** #3b5998
- **Social Twitter:** #1da1f2
- **Social Google:** #dd4b39
- **Font family:** "Roboto", sans-serif (clean sans-serif, inferred from screenshot)
- **Button radius:** rounded (~4px or rounded-md)
- **Social button shape:** circular (rounded-full)
- **Input style:** bottom-border only (no background, no full border box), placeholder text light gray
- **Layout:** Two-column split — form left (~50%), illustration right (~50%)
- **Illustration:** Flat-style vector art with devices (laptop, tablet, phone), decorative leaf/plant elements in teal/mint tones, character figure

## Requirements (Gherkin)

### Page layout

```gherkin
Feature: LoginLeaf login form layout

  Scenario: Two-column split layout
    Given the user loads the LoginLeaf page
    Then the page displays a two-column layout
    And the left column contains the login form
    And the right column contains a decorative illustration

  Scenario: Full-viewport white background
    Given the user loads the LoginLeaf page
    Then the page background is white
    And the form and illustration are vertically centered
```

### Form header

```gherkin
Feature: LoginLeaf form header

  Scenario: Heading text
    Given the user loads the LoginLeaf page
    Then the heading reads "Sign In to LoginLeaf"
    And the heading is in dark text, bold, large font

  Scenario: Subtext description
    Given the user loads the LoginLeaf page
    Then a subtext paragraph appears below the heading
    And the subtext is in light gray
```

### Form fields

```gherkin
Feature: LoginLeaf form fields

  Scenario: Username field
    Given the user loads the LoginLeaf page
    Then a "Username" input field is visible
    And the input has a bottom border only (no full box border)
    And the placeholder text reads "Username" in light gray

  Scenario: Password field
    Given the user loads the LoginLeaf page
    Then a "Password" input field is visible
    And the input has a bottom border only (no full box border)
    And the placeholder text reads "Password" in light gray
    And the input type is password (masked characters)
```

### Remember me and forgot password

```gherkin
Feature: LoginLeaf remember me and forgot password

  Scenario: Remember me checkbox
    Given the user loads the LoginLeaf page
    Then a "Remember me" checkbox is visible
    And the checkbox accent color is mint/teal (#4ecdc4)

  Scenario: Forgot password link
    Given the user loads the LoginLeaf page
    Then a "Forgot Password" link is visible
    And the link is right-aligned on the same row as the checkbox
```

### Login button

```gherkin
Feature: LoginLeaf login button

  Scenario: Primary login button
    Given the user loads the LoginLeaf page
    Then a "Log In" button is visible
    And the button background is mint/teal (#4ecdc4)
    And the button text is white
    And the button is full-width within the form
    And the button has rounded corners
```

### Social login

```gherkin
Feature: LoginLeaf social login

  Scenario: Social login section
    Given the user loads the LoginLeaf page
    Then text "or sign in with" appears below the Log In button

  Scenario: Social buttons
    Given the user loads the LoginLeaf page
    Then three circular social buttons are visible
    And the first button is Facebook (blue #3b5998)
    And the second button is Twitter (blue #1da1f2)
    And the third button is Google (red #dd4b39)
    And each button displays the respective social icon
```

### Illustration

```gherkin
Feature: LoginLeaf illustration

  Scenario: Decorative illustration
    Given the user loads the LoginLeaf page
    Then a flat-style illustration is displayed in the right column
    And the illustration contains device mockups (laptop, tablet, phone)
    And the illustration contains decorative leaf/plant elements in teal tones
    And the illustration contains a character figure
```

### Responsive behavior

```gherkin
Feature: LoginLeaf responsive layout

  Scenario: Mobile layout
    Given the user resizes the viewport to mobile width
    Then the two-column layout stacks vertically
    And the illustration appears above or below the form
    And the form remains fully functional
```

## Verification Checklist

- [ ] Two-column layout with form left, illustration right
- [ ] White page background
- [ ] Bold dark heading "Sign In to LoginLeaf"
- [ ] Gray subtext paragraph
- [ ] Username and Password inputs with bottom-border-only styling
- [ ] "Remember me" checkbox with mint accent
- [ ] "Forgot Password" link right-aligned
- [ ] Full-width mint green (#4ecdc4) "Log In" button with rounded corners
- [ ] "or sign in with" text
- [ ] Three circular social buttons (Facebook, Twitter, Google) with correct brand colors
- [ ] Flat-style decorative illustration in right column
- [ ] Responsive stacking on mobile viewports
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
