# Template: LoginGem (Login Form)

## Purpose

LoginGem is a single-page LOGIN FORM in the free-react-templates monorepo. It
is an original React recreation of the ColorLib "Login Form V11" free template
(source: https://colorlib.com/wp/template/login-form-v11/, preview:
https://preview.colorlib.com/theme/login-form-v11/), built under a DIFFERENT
name (**LoginGem**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 form on a full-viewport gradient background (pink
→ blue diagonal gradient) with a single centered white card containing the login
form. The card has a bold uppercase "LOGIN" header, email and password fields
with left-side icons and light gray backgrounds, a "Remember me" checkbox, a
full-width pink/magenta login button, social login buttons (Facebook + Google),
and a "Not a member? Sign up now" link at the bottom.

## Design tokens (from screenshot analysis + preview research)

### Colors

| Token               | Value                    | Source                                       |
| ------------------- | ------------------------ | -------------------------------------------- |
| background-start     | `#d63384` (pink)         | Gradient top-left (Bootstrap pink-500)       |
| background-end       | `#0d6efd` (blue)         | Gradient bottom-right (Bootstrap blue-600)   |
| card-bg              | `#ffffff`                | White card background                        |
| button-bg            | `#e83e8c` (magenta-pink)| Login button (Bootstrap pink accent)         |
| button-text          | `#ffffff`                | White button text                            |
| input-bg             | `#e9ecef` (light gray)   | Form field background                        |
| input-text           | `#495057`               | Form field text / placeholder                |
| icon-color           | `#adb5bd` (gray-400)     | Left-side icons in input fields              |
| header-text          | `#212529` (dark)         | "LOGIN" heading                              |
| label-text           | `#212529`                | "Remember me" checkbox label                 |
| body-text            | `#6c757d` (gray-600)     | "Or login with", "Not a member?" text        |
| link-text            | `#212529`                | "Sign up now" link (underlined)              |
| social-border        | `#dee2e6`               | Social button borders                        |

### Fonts

- Font family: System / sans-serif stack (likely `system-ui, -apple-system,
  "Segoe UI", Roboto, sans-serif` as seen in Bootstrap 4 defaults)
- Header "LOGIN": bold weight (~700), uppercase, ~24-28px, letter-spacing ~2px
- Body text: regular weight (~400), ~14-16px
- Button text: bold (~700), uppercase, ~14px, letter-spacing ~1px

### Shapes

- Card: white, rounded corners (~10px radius), subtle shadow
  (`0 0.5rem 1rem rgba(0,0,0,0.15)`)
- Input fields: rounded corners (~5px radius), no border, light gray bg
- Login button: rounded corners (~5px radius), full-width, pink/magenta bg
- Social buttons: rounded (~5px radius), white bg, light gray border, split
  into two equal-width buttons

### Layout

- Full-viewport centered layout (flex, center, center)
- Background: diagonal gradient from pink (top-left) to blue (bottom-right)
- Single white card centered vertically and horizontally
- Card width: ~400-450px max-width
- Form elements stacked vertically with consistent spacing (~20px)
- Social buttons in a horizontal flex row below "Or login with" divider
- "Not a member? Sign up now" text centered at card bottom

## Gherkin requirements

Feature: LoginGem Login Form

  Scenario: Full-viewport gradient background renders
    Given the page loads
    Then a full-viewport background is visible with a diagonal pink-to-blue gradient
    And the gradient runs from top-left (pink) to bottom-right (blue)

  Scenario: White login card is centered on screen
    Given the page loads
    Then a white card is centered vertically and horizontally on the viewport
    And the card has rounded corners and a subtle box shadow

  Scenario: Login heading is displayed
    Given the page loads
    Then the card shows a bold uppercase "LOGIN" heading
    And the heading is centered within the card

  Scenario: Email input field renders with icon
    Given the page loads
    Then an email input field is visible with a mail icon on the left
    And the input has a light gray background
    And the input placeholder reads "Email"

  Scenario: Password input field renders with icon
    Given the page loads
    Then a password input field is visible with a lock icon on the left
    And the input has a light gray background
    And the input shows masked characters (dots)

  Scenario: Remember me checkbox is present
    Given the page loads
    Then a "Remember me" checkbox is visible below the password field
    And the checkbox is checked by default
    And the checkbox accent color matches the button color (pink)

  Scenario: Login button is full-width and pink
    Given the page loads
    Then a "LOGIN" button is visible below the remember-me checkbox
    And the button spans the full width of the form
    And the button has a pink/magenta background
    And the button text is white and uppercase

  Scenario: Social login section is displayed
    Given the page loads
    Then "Or login with" text is visible below the login button
    And two social login buttons are shown side by side
    And the left button shows a Facebook icon and "Facebook" text
    And the right button shows a Google icon and "Google" text
    And both buttons have white backgrounds with light gray borders

  Scenario: Sign up link is present
    Given the page loads
    Then "Not a member? Sign up now" text is visible at the card bottom
    And "Sign up now" is an underlined link

  Scenario: Login button responds to hover
    Given the page loads
    When the user hovers over the "LOGIN" button
    Then the button background darkens slightly
    And the cursor changes to pointer

  Scenario: Social buttons respond to hover
    Given the page loads
    When the user hovers over a social login button
    Then the button border darkens slightly
    And the cursor changes to pointer

  Scenario: Email field validates on submit with empty value
    Given the page loads
    When the user clicks the "LOGIN" button without entering an email
    Then the browser's built-in email validation prevents form submission
    And the email field remains focused

  Scenario: Password field requires input on submit
    Given the page loads
    When the user enters an email but leaves the password empty and clicks "LOGIN"
    Then the browser's built-in required validation prevents form submission
    And the password field remains focused

  Scenario: Form submits successfully with valid inputs
    Given the page loads
    When the user enters a valid email and password and clicks "LOGIN"
    Then the form submission is triggered without validation errors

## Verification checklist

- [ ] Full-viewport gradient background (pink top-left → blue bottom-right)
- [ ] White card centered vertically and horizontally
- [ ] Card has rounded corners and subtle shadow
- [ ] Bold uppercase "LOGIN" heading, centered
- [ ] Email input with mail icon, light gray bg, placeholder "Email"
- [ ] Password input with lock icon, light gray bg, masked dots
- [ ] "Remember me" checkbox, checked by default, pink accent
- [ ] Full-width pink/magenta "LOGIN" button, white text, uppercase
- [ ] "Or login with" divider text
- [ ] Facebook and Google social buttons side by side
- [ ] Social buttons: white bg, light gray border, brand icons
- [ ] "Not a member? Sign up now" underlined link at bottom
- [ ] Hover effects on login button (darken) and social buttons (border darken)
- [ ] HTML5 validation on email (required, type=email) and password (required)
- [ ] Responsive: card stays centered on smaller viewports
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
