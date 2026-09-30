# Template: SignupGlow (Signup Form)

## Purpose

Recreation of ColorLib **Signup Form 09**
- Source slug: `signup-form-09`
- Preview URL: `https://preview.colorlib.com/theme/signup-form-09/` (returns 404 as of 2026-09-30; spec derived from screenshot)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-09.jpg`
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- App path: `apps/signupglow`
- Package: `@free-react-templates/signupglow`
- Deploy target: `signupglow.free.componentdock.com`

## Design tokens

> Tokens extracted from the ColorLib screenshot (preview URL unreachable).
> Approximate hex values derived from visual inspection.

| Token | Value | Notes |
|---|---|---|
| Background | `#f5f5f5` | Light gray full-page background |
| Card background | `#ffffff` | White card with subtle box-shadow |
| Card border-radius | ~`8px` | Rounded corners on card |
| Card shadow | `0 2px 20px rgba(0,0,0,0.08)` | Subtle drop shadow |
| Heading color | `#333333` | Dark gray, "Sign Up" title |
| Body text color | `#999999` | Gray for subtitle/placeholder text |
| Input border | `#dddddd` | Bottom-border-only underline style |
| Primary button color | `#66bb6a` → `#43a047` | Green gradient, full-width pill |
| Button border-radius | `30px` | Pill shape |
| Button text color | `#ffffff` | White |
| Checkbox active color | `#4caf50` | Green checkbox |
| Link color | `#333333` | Underlined, for "Terms and Conditions" |
| Social Facebook | `#3b5998` | Circle icon |
| Social Twitter | `#1da1f2` | Circle icon |
| Social Google | `#db4437` | Circle icon |
| Social icon size | ~`40px` diameter | Circular with white icon |
| Font family | `Poppins, sans-serif` | Clean geometric sans-serif |

## Gherkin requirements

### Feature: Signup form card

  Scenario: Renders centered card on gray background
    Given the user visits the signup page
    Then a white card is centered vertically and horizontally on a light gray background
    And the card has rounded corners and a subtle shadow

  Scenario: Displays heading and subtitle
    Given the signup card is visible
    Then a "Sign Up" heading is displayed at the top
    And a subtitle paragraph appears below the heading in gray

  Scenario: Name input field
    Given the signup form is displayed
    Then a "Name" text input is present with underline-only styling
    And the input accepts text

  Scenario: Email input field
    Given the signup form is displayed
    Then an "Email" text input is present with underline-only styling
    And the input accepts email

  Scenario: Password input field
    Given the signup form is displayed
    Then a "Password" input is present with type="password" and underline styling

  Scenario: Re-type Password input field
    Given the signup form is displayed
    Then a "Re-type Password" input is present with type="password" and underline styling

  Scenario: Terms and conditions checkbox
    Given the signup form is displayed
    Then a checkbox labeled "Agree our Terms and Conditions" is present
    And the "Terms and Conditions" text is a clickable link
    And the checkbox is unchecked by default

  Scenario: Sign In link
    Given the signup form is displayed
    Then a "Sign In" link is positioned to the right of the terms checkbox row

  Scenario: Register button
    Given the signup form is displayed
    Then a full-width "Register" button is displayed
    And the button has a green gradient background
    And the button has a pill shape (large border-radius)
    And the button text is white

### Feature: Social login

  Scenario: Social login section
    Given the register button is visible
    Then the text "or register with" is displayed centered below the button

  Scenario: Facebook social button
    Given the social login section is visible
    Then a circular Facebook icon button is displayed in dark blue (#3b5998)
    And the icon is a white "f"

  Scenario: Twitter social button
    Given the social login section is visible
    Then a circular Twitter icon button is displayed in light blue (#1da1f2)
    And the icon is a white bird/Twitter logo

  Scenario: Google social button
    Given the social login section is visible
    Then a circular Google icon button is displayed in red (#db4437)
    And the icon is a white "G"

### Feature: Form validation

  Scenario: Empty form submission
    Given the user clicks "Register" without filling any fields
    Then the form does not submit
    And each required field shows a validation error

  Scenario: Password mismatch
    Given the user enters different values in Password and Re-type Password
    Then a mismatch error is displayed

### Feature: Responsive layout

  Scenario: Mobile viewport
    Given the user views the page on a 375px wide viewport
    Then the card fills the available width with horizontal padding
    And the social icons remain centered and tappable

  Scenario: Desktop viewport
    Given the user views the page on a 1280px wide viewport
    Then the card is centered with a max-width of approximately 480px

## Verification checklist

- [ ] Card centered on gray background
- [ ] "Sign Up" heading rendered
- [ ] Subtitle text rendered in gray
- [ ] Four underline-style inputs (Name, Email, Password, Re-type Password)
- [ ] Terms checkbox with link
- [ ] "Sign In" link aligned right
- [ ] Full-width green gradient pill "Register" button
- [ ] "or register with" text centered
- [ ] Three circular social icons (Facebook, Twitter, Google) with correct colors
- [ ] Form validation (required fields, password match)
- [ ] Responsive: card adapts to mobile/desktop
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
