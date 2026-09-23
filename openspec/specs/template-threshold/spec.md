# Threshold — Login Form Template

> Recreation of [ColorLib Login Form 02](https://colorlib.com/wp/template/login-form-02/).

## Preview

- **Original**: https://colorlib.com/wp/template/login-form-02/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/login-form-02/

## Design Tokens

| Token                      | Value                                      |
| -------------------------- | ------------------------------------------ |
| Font                       | Roboto (weights 300, 400) via Google Fonts |
| Form background            | `#f6f7fc`                                  |
| Input shadow               | `rgba(0, 0, 0, 0.1)`                       |
| Input/button border-radius | `4px`                                      |
| Checkbox checked color     | `#fb771a` (orange)                         |
| Input/button height        | `54px`                                     |
| Paragraph text             | `#b3b3b3`                                  |
| Link text                  | `#888`                                     |
| Submit button color        | `#4f46e5` (indigo)                         |

## Layout

- **50/50 split-screen** layout
- **Left panel**: `bg-[#f6f7fc]`, centered form with heading, subtitle, and form fields
- **Right panel**: background image (picsum.photos) with `object-cover` sizing, visible on `sm+` screens

## Component Structure

```
src/
  App.tsx                  — Composes Threshold + Footer
  components/
    Threshold.tsx          — Main split-screen layout
    LoginForm.tsx          — Login form with all fields
    Footer.tsx             — Footer linking to Component Dock
```

## Form Fields

1. **Username** — text input
2. **Password** — password input
3. **Remember Me** — custom-styled checkbox, orange `#fb771a` when checked
4. **Forgot Password** — link (href `#forgot`)
5. **Log In** — full-width submit button, `#4f46e5` background, 54px height

## Footer

Centered, fixed at bottom. Text: "More templates at Component Dock" linking to https://www.componentdock.com/.

## External Dependencies

- **Google Fonts**: Roboto (300, 400) loaded via `<link>` in `index.html`
- **picsum.photos**: Background image at `https://picsum.photos/seed/threshold-login/800/1200`
- **lucide-react**: Icons where appropriate
- **@free-react-templates/ui**: `cn()` utility

## Scenarios

```gherkin
Feature: Threshold Login Form

  Background:
    Given the Threshold app is loaded

  Scenario: Renders the main heading
    Then I should see the heading "Welcome Back"

  Scenario: Renders the subtitle
    Then I should see a subtitle with text about entering credentials

  Scenario: Renders username input
    Then I should see a username text input

  Scenario: Renders password input
    Then I should see a password input field

  Scenario: Renders remember me checkbox
    Then I should see a "Remember me" checkbox
    And the checkbox should be unchecked by default

  Scenario: Toggles remember me checkbox
    Given the checkbox is unchecked
    When I click the "Remember me" checkbox
    Then the checkbox should be checked
    When I click the "Remember me" checkbox
    Then the checkbox should be unchecked

  Scenario: Renders forgot password link
    Then I should see a "Forgot Password" link
    And the link should point to "#forgot"

  Scenario: Renders Log In button
    Then I should see a "Log In" submit button

  Scenario: Form submission prevents default
    Given I fill in username "testuser"
    And I fill in password "secret123"
    When I click the "Log In" button
    Then the form should submit without navigation

  Scenario: Renders background image panel
    Then I should see a decorative image panel on the right side

  Scenario: Footer links to Component Dock
    Then I should see a footer link to "https://www.componentdock.com/"
    And the link text should be "More templates at Component Dock"
    And the link should open in a new tab
```
