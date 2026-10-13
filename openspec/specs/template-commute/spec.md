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

## Purpose

Commute is a login form template with a hero image, login form and footer. It recreates the ColorLib **Login Form 06** design (https://colorlib.com/wp/template/login-form-06/, preview: https://preview.colorlib.com/theme/bootstrap/login-form-06/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

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

## Requirements

### Gherkin

Feature: Commute Login Form

#### Scenario: Render login form

- **GIVEN** the page loads
- **THEN** I see "Sign In" heading
- **AND** I see a subtitle with placeholder text
- **AND** I see a Username input
- **AND** I see a Password input

#### Scenario: Remember me checkbox

- **GIVEN** the page loads
- **THEN** the "Remember me" checkbox is unchecked
- **WHEN** I click the "Remember me" checkbox
- **THEN** the checkbox is checked

#### Scenario: Forgot Password link

- **GIVEN** the page loads
- **WHEN** I click "Forgot Password"
- **THEN** I navigate to #forgot

#### Scenario: Social login buttons

- **GIVEN** the page loads
- **THEN** I see "Login with Facebook" button
- **AND** I see "Login with Twitter" button
- **AND** I see "Login with Google" button

#### Scenario: Form submission

- **GIVEN** the page loads
- **WHEN** I fill in username "testuser"
- **AND** I fill in password "secret123"
- **AND** I click "Log In"
- **THEN** the form submits without error

#### Scenario: Footer

- **GIVEN** the page loads
- **THEN** I see "More templates at Component Dock" link
- **AND** the link opens in a new tab

## Verification

- 30 tests, 4 test files
- 100% lines/functions/branches/statements coverage
- Typecheck: pass
- Lint: pass
- Build: pass
