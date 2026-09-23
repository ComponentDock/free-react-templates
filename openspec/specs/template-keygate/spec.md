# Template: Keygate (Login Form)

## Purpose

Recreation of ColorLib's "Login Form V13" — a clean white-card login form
template with icon inputs, green accent, and social icons in the header.

- **Source:** https://colorlib.com/wp/template/login-form-13/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/login-form-13/
- **Source slug:** `login-form-13`
- **New name:** `keygate`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Login Form

## Design Tokens (from reference CSS)

| Token              | Value / Notes                                                          |
| ------------------ | ---------------------------------------------------------------------- |
| Background         | `#ffffff` — white (full-page)                                          |
| Card background    | `#ffffff` — white with shadow (`0px 10px 34px -15px rgba(0,0,0,0.24)`) |
| Card border-radius | `5px`                                                                  |
| Brand / accent     | `#a0c334` — green (buttons, checkbox, links)                           |
| Brand hover        | `transparent` bg, `#a0c334` border+text (inverted)                     |
| Heading color      | `#000` — black (28px)                                                  |
| Subheading color   | `#000` — black, font-weight 300                                        |
| Text color         | `#212529` — dark gray                                                  |
| Link color         | `#a0c334` — green (same as brand)                                      |
| Input background   | `#ffffff` — white                                                      |
| Input height       | `48px`                                                                 |
| Input icon color   | `#fff` — white (on green icon circle)                                  |
| Social icon bg     | `transparent`, border `1px solid rgba(0,0,0,0.05)`                     |
| Social icon color  | `#999999` — gray                                                       |
| Social icon hover  | `#a0c334` bg, `#fff` text                                              |
| Checkbox checked   | `#a0c334` — green checkmark                                            |
| Font family        | `"Lato", Arial, sans-serif` — Google Fonts Lato (300, 400, 700)        |

## HTML Structure (section order)

1. **Page heading** — centered `<h2>` "Login #03", black, 28px
2. **Login card** (`.login-wrap`, white bg, shadow, rounded, centered):
   - Header row: `<h3>` "Sign In" (left) + social icons Facebook+Twitter (right)
   - Username `<input>` with user icon overlay
   - Password `<input>` with lock icon overlay
   - Row: "Save Password" checkbox (left) + "Login" button (right, green)
   - Footer links: "Don't have an account? Sign Up" + "Forgot Password"

## Gherkin Requirements

```gherkin
Feature: Keygate login form
  As a visitor
  I want to sign in with a clean card-based form
  So that I can access my account

  Background:
    Given the page has a white (#ffffff) full-page background
    And the font family is "Lato" (Google Fonts)

  Scenario: Page heading renders
    Then a centered heading "Login #03" is visible in black

  Scenario: Sign In form heading
    Then a "Sign In" heading is displayed in the card header

  Scenario: Social icons in header
    Then Facebook and Twitter icons are displayed in the card header right side
    And each icon has a transparent background with subtle border

  Scenario: Social icon hover
    When the user hovers over a social icon
    Then the background becomes green (#a0c334)
    And the icon color becomes white

  Scenario: Username input with icon
    Given the username input is displayed
    Then the placeholder text is "Username"
    And a user icon is overlaid on the input

  Scenario: Password input with icon
    Given the password input is displayed
    Then the placeholder text is "Password"
    And the input is of type "password"
    And a lock icon is overlaid on the input

  Scenario: Save Password checkbox
    Then a "Save Password" checkbox is displayed on the left
    And the checkbox is checked by default
    And the checkbox checkmark is green (#a0c334) when checked

  Scenario: Login button
    Then a "Login" button is displayed on the right
    And the button has a green (#a0c334) background
    And the button has white text

  Scenario: Login button hover
    When the user hovers over the Login button
    Then the background becomes transparent
    And the text and border become green (#a0c334)

  Scenario: Sign Up link
    Then a "Don't have an account? Sign Up" text is displayed
    And the "Sign Up" link color is green (#a0c334)

  Scenario: Forgot Password link
    Then a "Forgot Password" link is displayed below the Sign Up text
    And the link color is green (#a0c334)

  Scenario: Form validation
    When the user clicks "Login" without filling any fields
    Then the browser shows native validation messages for required fields

  Scenario: Responsive layout
    When viewed on mobile (< 768px)
    Then the form card is centered and fills the available width
```

## Verification Checklist

- [ ] White full-page background
- [ ] Lato font loaded from Google Fonts
- [ ] Page heading "Login #03" centered, black, 28px
- [ ] "Sign In" subheading, light weight (300)
- [ ] Social icons (Facebook, Twitter) in card header right
- [ ] Username + Password inputs with icon overlays
- [ ] "Save Password" checkbox, green checked, default checked
- [ ] Login button: green (#a0c334), white text, right-aligned
- [ ] Login button hover: inverted (transparent bg, green text/border)
- [ ] "Don't have an account? Sign Up" + "Forgot Password" links
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains keygate.free.componentdock.com
- [ ] package.json homepage is https://keygate.free.componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
