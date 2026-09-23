# Template: PurpleSign (Login Form)

## Purpose

Recreation of ColorLib's "Login Form V12" — a modern transparent login form
template with social sign-in options, built on a vibrant purple background.

- **Source:** https://colorlib.com/wp/template/login-form-12/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/login-form-12/
- **Source slug:** `login-form-12`
- **New name:** `purplesign`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Login Form

## Design Tokens (from reference CSS)

| Token                | Value / Notes                                                             |
| -------------------- | ------------------------------------------------------------------------- |
| Background           | `#c859ff` — vibrant purple/violet (full-page solid)                       |
| Brand / accent       | `#f6f078` — bright yellow-green (buttons, checkbox, links)               |
| Text                 | `rgba(255,255,255,0.9)` — white with slight transparency                 |
| Heading color        | `#fff` — white (heading section class overrides base `#000`)             |
| Link color           | `#f6f078` — yellow-green (same as brand)                                 |
| Input placeholder    | `rgba(255,255,255,0.8)` — white, semi-transparent                        |
| Input border         | `1px solid rgba(255,255,255,0.2)` — subtle white bottom border           |
| Input focus border   | `1px solid rgba(255,255,255,0.4)` — slightly more visible on focus       |
| Input background     | `transparent`                                                             |
| Button bg            | `#f6f078` (brand yellow)                                                  |
| Button text          | `#000` — black                                                            |
| Button border-radius | `40px` — fully rounded pill shape                                        |
| Button hover         | `transparent` bg, `#f6f078` border+text (inverted)                       |
| Social button bg     | `#fff` — white                                                            |
| Social button text   | `#000` — black                                                            |
| Social button border | `1px solid rgba(255,255,255,0.4)`                                        |
| Social hover         | `#000` bg, `#fff` text, `#000` border                                    |
| Checkbox checked     | `#f6f078` — yellow checkmark                                              |
| Font family          | `"Lato", Arial, sans-serif` — Google Fonts Lato (300, 400, 700)          |
| Font size            | `16px` base                                                               |
| Line height          | `1.8`                                                                     |

## HTML Structure (section order)

1. **Page heading** — centered `<h2>` with text "Login #02", white color
2. **Login form card** (`.login-wrap`, centered column):
   - `<h3>` "Sign In" — light weight (300), white, centered
   - Username `<input>` — transparent, bottom-border only, white placeholder
   - Password `<input>` — same style
   - Submit `<button>` "Sign In" — yellow pill button, full width
   - Row: "Remember Me" checkbox (left) + "Forgot Password" link (right)
   - Divider text: "— Or Sign In With —"
   - Social buttons row: Facebook + Twitter — white pill buttons, side by side

## Gherkin Requirements

### Feature: PurpleSign — Transparent Login Form

```gherkin
Feature: PurpleSign login form
  As a visitor
  I want to sign in with a clean, modern form
  So that I can access my account

  Background:
    Given the page is loaded with a purple (#c859ff) full-page background
    And the font family is "Lato" (Google Fonts)

  Scenario: Page heading renders
    Then a centered heading "Login #02" is visible in white

  Scenario: Sign In form heading
    Then a "Sign In" heading is displayed above the form inputs

  Scenario: Username input
    Given the username input is displayed
    Then the placeholder text is "Username"
    And the input has a transparent background
    And the input has a white bottom border

  Scenario: Password input
    Given the password input is displayed
    Then the placeholder text is "Password"
    And the input is of type "password"
    And the input has a transparent background

  Scenario: Submit button styling
    Then the submit button text is "Sign In"
    And the button has a yellow (#f6f078) background
    And the button has black text
    And the button has a fully rounded pill shape (border-radius 40px)
    And the button spans the full width of the form

  Scenario: Submit button hover state
    When the user hovers over the submit button
    Then the background becomes transparent
    And the text and border become yellow (#f6f078)

  Scenario: Remember Me checkbox
    Then a "Remember Me" checkbox is displayed on the left
    And the checkbox checkmark is yellow (#f6f078) when checked

  Scenario: Forgot Password link
    Then a "Forgot Password" link is displayed on the right
    And the link color is yellow (#f6f078)

  Scenario: Social sign-in divider
    Then a divider text "Or Sign In With" is displayed below the form

  Scenario: Social sign-in buttons
    Then Facebook and Twitter social buttons are displayed side by side
    And each social button has a white background with black text
    And each social button has a rounded border

  Scenario: Social button hover
    When the user hovers over a social button
    Then the background becomes black (#000)
    And the text becomes white

  Scenario: Form validation
    When the user clicks "Sign In" without filling any fields
    Then the browser shows native validation messages for required fields

  Scenario: Responsive layout
    When viewed on mobile (< 768px)
    Then the form card is centered and fills the available width
    And the social buttons stack vertically
```

## Verification Checklist

- [ ] Purple full-page background (`#c859ff`)
- [ ] Lato font loaded from Google Fonts
- [ ] Page heading "Login #02" centered, white
- [ ] "Sign In" subheading, light weight
- [ ] Username + Password inputs: transparent bg, white bottom border, white placeholders
- [ ] Submit button: yellow (`#f6f078`), black text, pill shape (40px radius), full width
- [ ] Submit button hover: inverted (transparent bg, yellow text/border)
- [ ] Remember Me checkbox with yellow checkmark
- [ ] Forgot Password link in yellow
- [ ] "Or Sign In With" divider
- [ ] Social buttons: Facebook + Twitter, white bg, black text, rounded
- [ ] Social button hover: black bg, white text
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `purplesign.free.componentdock.com`
- [ ] `package.json` homepage is `https://purplesign.free.componentdock.com`
- [ ] 100% test coverage (lines, functions, branches, statements)
