# Template: SignupRift (Signup Form)

## Purpose

Recreation of ColorLib **Signup Form 11**
- Source slug: `signup-form-11`
- Preview URL: `https://preview.colorlib.com/theme/signup-form-11/` (returns 404 as of 2026-09-30; spec derived from screenshot)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-11.jpg`
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- App path: `apps/signuprift`
- Package: `@free-react-templates/signuprift`
- Deploy target: `signuprift.free.componentdock.com`

## Design tokens

> Tokens extracted from the ColorLib screenshot (preview URL unreachable).
> Approximate hex values derived from visual inspection.

| Token | Value | Notes |
|---|---|---|
| Background | `#f5f5f5` | Light gray full-page background |
| Card background | `#ffffff` | White card with subtle box-shadow |
| Card border-radius | ~`12px` | Rounded corners on card |
| Card shadow | `0 2px 20px rgba(0,0,0,0.08)` | Subtle drop shadow |
| Heading color | `#333333` | Dark gray, "Create Your Account" |
| Body text color | `#999999` | Gray for placeholder text |
| Label color | `#38d39f` | Mint green, uppercase labels |
| Input border | `#dddddd` | Full border box, rounded corners (~4px) |
| Input background | `#ffffff` | White |
| Primary button color | `#38d39f` | Mint green/teal, full-width |
| Button border-radius | ~`6px` | Slightly rounded |
| Button text color | `#ffffff` | White |
| Icon circle background | `#38d39f` | Mint green circle (~50px diameter) |
| Icon color | `#ffffff` | White pencil/edit icon inside circle |
| Checkbox active color | `#38d39f` | Green checkbox |
| Link color | `#38d39f` | Green, for "Sign In" link |
| Password toggle icon | `#999999` | Eye icon, gray |
| Font family | `Roboto, sans-serif` | Clean sans-serif |

## Gherkin requirements

### Feature: Page layout

  Scenario: Renders centered card on gray background
    Given the user visits the signup page
    Then a white card is centered vertically and horizontally on a light gray background
    And the card has rounded corners and a subtle shadow

  Scenario: Displays page title above card
    Given the signup card is visible
    Then a "Sign Up #01" title is displayed above the card in dark gray

### Feature: Card header

  Scenario: Displays icon and heading
    Given the signup card is visible
    Then a green circular icon with a white pencil/edit symbol is centered at the top
    And a "Create Your Account" heading is displayed below the icon in dark gray

### Feature: Signup form

  Scenario: Full Name input field
    Given the signup form is displayed
    Then a "FULL NAME" label is displayed in uppercase green text
    And a text input with border styling is present
    And the placeholder text is "John Doe"

  Scenario: Email Address input field
    Given the signup form is displayed
    Then an "EMAIL ADDRESS" label is displayed in uppercase green text
    And a text input with border styling is present
    And the placeholder text is "johndoe@gmail.com"

  Scenario: Password input field
    Given the signup form is displayed
    Then a "PASSWORD" label is displayed in uppercase green text
    And a password input with border styling is present
    And the placeholder text is "Password"
    And a password visibility toggle (eye icon) is present on the right

  Scenario: Password visibility toggle
    Given the password field is displayed with the eye icon
    When the user clicks the eye icon
    Then the password field switches to type="text"
    And when the user clicks the eye icon again
    Then the password field switches back to type="password"

### Feature: Terms agreement

  Scenario: Terms checkbox
    Given the signup form is displayed
    Then a green checkbox labeled "I Agree All Statements In Terms Of Service" is present
    And the checkbox is unchecked by default

### Feature: Submit

  Scenario: Sign Up button
    Given the signup form is displayed
    Then a full-width "Sign Up" button is displayed
    And the button has a mint green background
    And the button text is white

### Feature: Login redirect

  Scenario: Already a member link
    Given the signup form is displayed
    Then the text "I'm already a member!" is displayed below the button
    And a "Sign In" link in green is present next to the text

### Feature: Form validation

  Scenario: Empty form submission
    Given the user clicks "Sign Up" without filling any fields
    Then the form does not submit
    And each required field shows a validation error

### Feature: Responsive layout

  Scenario: Mobile viewport
    Given the user views the page on a 375px wide viewport
    Then the card fills the available width with horizontal padding

  Scenario: Desktop viewport
    Given the user views the page on a 1280px wide viewport
    Then the card is centered with a max-width of approximately 480px

## Verification checklist

- [ ] "Sign Up #01" title above card
- [ ] Green circle icon with pencil at card top
- [ ] "Create Your Account" heading centered
- [ ] FULL NAME input with green uppercase label
- [ ] EMAIL ADDRESS input with green uppercase label
- [ ] PASSWORD input with green uppercase label and eye toggle
- [ ] Password visibility toggle works (show/hide)
- [ ] Terms checkbox with "I Agree All Statements In Terms Of Service"
- [ ] Full-width mint green "Sign Up" button
- [ ] "I'm already a member! Sign In" text with green link
- [ ] Form validation (required fields)
- [ ] Responsive: card adapts to mobile/desktop
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
