---
name: Commute
slug: commute
description: >
  A split-screen login form template with a white form panel on the left and
  a full-height city street hero image on the right. Features username/password
  fields, remember-me checkbox, forgot password link, blue Log In button,
  "— or —" divider, and stacked social login buttons (Facebook, Twitter, Google)
  in brand colors. Recreates ColorLib "Login Form 06".
source: https://colorlib.com/wp/template/login-form-06/
preview: https://preview.colorlib.com/theme/login-form-06/
---

# Commute — Login Form Template

## Design Tokens

| Token            | Value   | Notes                         |
| ---------------- | ------- | ----------------------------- |
| Brand accent     | #1a73e8 | Primary button, links         |
| Brand hover      | #1557b0 | Button hover state            |
| Facebook blue    | #3b5998 | Facebook social button        |
| Twitter blue     | #1da1f2 | Twitter social button         |
| Google red       | #db4437 | Google social button          |
| Card background  | #ffffff | Form panel                    |
| Input background | #f0f0f0 | Username/password fields      |
| Text (ink)       | #333333 | Headings, body                |
| Caption          | #888888 | Subtitle, remember-me text    |
| Placeholder      | #999999 | Input placeholders            |
| Divider          | #e0e0e0 | Horizontal lines              |
| Font family      | Poppins | Google Fonts, weights 300–700 |

## Layout

- **Split-screen:** left 50% = white form panel, right 50% = full-height hero image
- **Mobile:** hero image shown as top banner (220px), form below
- **Form panel:** vertically centered on desktop

## Sections (in order)

1. **Hero Image** — full-height city street photo (right side on desktop, top banner on mobile)
2. **Login Form** — "Sign In" heading, subtitle, username input, password input, remember me + forgot password, Log In button, "— or —" divider, social buttons
3. **Footer** — Component Dock attribution link

## Scenarios

### Gherkin

```gherkin
Feature: Commute Login Form

  Scenario: Render login form
    Given the page loads
    Then I see "Sign In" heading
    And I see a subtitle with placeholder text
    And I see a Username input
    And I see a Password input

  Scenario: Remember me checkbox
    Given the page loads
    Then the "Remember me" checkbox is unchecked
    When I click the "Remember me" checkbox
    Then the checkbox is checked

  Scenario: Forgot Password link
    Given the page loads
    When I click "Forgot Password"
    Then I navigate to #forgot

  Scenario: Social login buttons
    Given the page loads
    Then I see "Login with Facebook" button
    And I see "Login with Twitter" button
    And I see "Login with Google" button

  Scenario: Form submission
    Given the page loads
    When I fill in username "testuser"
    And I fill in password "secret123"
    And I click "Log In"
    Then the form submits without error

  Scenario: Footer
    Given the page loads
    Then I see "More templates at Component Dock" link
    And the link opens in a new tab
```

## Verification

- 30 tests, 4 test files
- 100% lines/functions/branches/statements coverage
- Typecheck: pass
- Lint: pass
- Build: pass
