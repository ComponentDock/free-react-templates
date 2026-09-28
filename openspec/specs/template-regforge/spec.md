# Template: Regforge (Registration Form)

## Purpose

Recreation of ColorLib **Regform 8** — a clean, single-card signup form with a full-viewport background image, rounded white card, gradient focus borders, and a gradient "Sign up" button. The form includes name, email, password with eye-toggle visibility, password confirmation, terms checkbox, and a login link.

- **Source slug:** `colorlib-regform-8`
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-8/
- **Live demo:** https://colorlib.com/etc/regform/colorlib-regform-8/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `regforge` (app: `apps/regforge`, package: `@free-react-templates/regforge`)

## Design tokens

Extracted from the live demo CSS (`css/style.css`) at
`https://colorlib.com/etc/regform/colorlib-regform-8/`.

| Token | Value | Notes |
|-------|-------|-------|
| Page background | Background image (center, cover) | Full-viewport, replaced with picsum placeholder |
| Card background | `#ffffff` | White card |
| Card border-radius | `10px` | Rounded corners |
| Card padding | `50px 85px` | Generous internal spacing |
| Container width | `660px` | Centered wrapper |
| Body font | `Montserrat` (Google Fonts) | Weights: 400, 500, 600, 700 |
| Body color | `#222222` | Dark text |
| Body font-size | `14px` | Line-height: 1.8 |
| Heading color | `#222222` | Bold 900, uppercase, 24px, centered |
| Heading margin-bottom | `40px` | Space below title |
| Input border | `1px solid #ebebeb` | Light gray |
| Input border-radius | `5px` | |
| Input padding | `17px 20px` | |
| Input font-weight | `500` | |
| Input font-size | `14px` | |
| Placeholder color | `#999999` | |
| Input focus border | Gradient: `linear-gradient(to right, #9face6, #74ebd5)` | Blue-to-teal gradient border-image |
| Submit button bg | Gradient: `linear-gradient(to left, #74ebd5, #9face6)` | Teal-to-blue (reversed from focus) |
| Button text color | `#ffffff` | White |
| Button text-transform | `uppercase` | |
| Button font-weight | `700` | |
| Button radius | `5px` | |
| Button padding | `17px 20px` | |
| Terms label color | `#555555` | 12px, weight 600 |
| Terms link color | `#555555` | Underline on hover |
| Login text color | `#555555` | Weight 500 |
| Login link color | `#222222` | Bold 700 |
| Eye toggle icon color | `#555555` | Float right inside password field |
| Form group margin | `20px 0` | Between each field |
| Checkbox size | `13px × 13px` | 2px radius, 1px solid #ebebeb border |
| Loginhere margin-top | `91px` | Large gap above login link |

## Sections (in order)

Single-section template: a full-viewport background with a centered white signup card.

### Section 1: Signup Card

- Full-viewport background image (replaced with `picsum.photos/seed/regforge-bg/1920/1080`)
- Centered container: `max-width: 660px`
- White card: `border-radius: 10px`, `padding: 50px 85px`
- **Heading:** "Create account" — Montserrat, 900 weight, 24px, uppercase, centered, `#222`, `margin-bottom: 40px`
- **Form fields** (stacked vertically, `20px` gap):
  1. Text input: placeholder "Your Name"
  2. Email input: placeholder "Your Email"
  3. Text input: placeholder "Password" — with eye toggle icon (float right) to show/hide password
  4. Password input: placeholder "Repeat your password"
  5. Custom checkbox: "I agree all statements in Terms of service" (terms is a link)
- **Submit button:** full-width, gradient background (`#74ebd5` → `#9face6` left-to-right), white uppercase bold text "Sign up", `5px` radius
- **Login link:** centered, `margin-top: 91px`: "Have already an account? Login here" (link bold `#222`)
- Focus effect on inputs: gradient border (`#9face6` → `#74ebd5` via border-image)
- Responsive: at `≤768px`, container becomes `calc(100% - 40px)`; at `≤480px`, card padding reduces to `50px 25px`

## Gherkin requirements

```gherkin
Feature: Regforge signup form

  Background:
    Given the user navigates to the Regforge template page
    And the page has a full-viewport background image

  Scenario: Card renders centered on the page
    Then a white card is displayed centered on the page
    And the card has a border-radius of 10px
    And the card has padding of 50px 85px

  Scenario: Heading displays correctly
    Then a "Create account" heading is visible
    And the heading is uppercase, bold (900), and centered
    And the heading color is dark (#222)

  Scenario: Name input field
    Then there is a text input with placeholder "Your Name"
    And the input has a 1px solid #ebebeb border
    And the input has 5px border-radius

  Scenario: Email input field
    Then there is an email input with placeholder "Your Email"
    And the input has the same styling as the name input

  Scenario: Password input with eye toggle
    Then there is a text input with placeholder "Password"
    And an eye icon is visible to the right of the input
    When the user clicks the eye icon
    Then the password field type toggles between text and password
    And the eye icon changes between eye and eye-off variants

  Scenario: Repeat password input field
    Then there is a password input with placeholder "Repeat your password"

  Scenario: Terms checkbox
    Then there is a custom-styled checkbox
    And the label reads "I agree all statements in Terms of service"
    And "Terms of service" is rendered as a link

  Scenario: Submit button
    Then a full-width "Sign up" button is visible
    And the button has a gradient background (#74ebd5 to #9face6)
    And the button text is white, uppercase, and bold

  Scenario: Login link
    Then "Have already an account?" text is displayed below the form
    And "Login here" is a bold link

  Scenario: Input focus shows gradient border
    When the user focuses on any input field
    Then the input border shows a gradient from #9face6 to #74ebd5

  Scenario: Responsive layout on mobile
    When the viewport width is 768px or less
    Then the container width adjusts to fill available space minus margins
    And at 480px or less the card padding reduces to 50px 25px
```

## Verification checklist

- [ ] Background image displays (use picsum placeholder)
- [ ] Card is centered with correct border-radius and padding
- [ ] Heading is uppercase, bold, centered, correct color
- [ ] All four input fields render with correct placeholders and types
- [ ] Eye toggle switches password visibility
- [ ] Custom checkbox with styled label renders correctly
- [ ] Submit button has gradient background and white text
- [ ] Login link is centered below the form with correct spacing
- [ ] Input focus shows gradient border effect
- [ ] Responsive breakpoints work (768px, 480px)
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run verify:app regforge` passes
