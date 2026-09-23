# Template: Logpoint (Login Form)

## Purpose

Recreation of ColorLib **Login Form 17** as a standalone React page.
- **Source slug:** `login-form-17`
- **Preview URL:** https://preview.colorlib.com/theme/login-form-17/
- **ColorLib page:** https://colorlib.com/wp/template/login-form-17/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Deploy:** `https://logpoint.free.componentdock.com`

## Design tokens (extracted from screenshot)

| Token             | Value                                         |
| ----------------- | --------------------------------------------- |
| Background        | `#f5f5f5` (light gray)                       |
| Card background   | `#ffffff` (white)                             |
| Brand gradient    | `linear-gradient(135deg, #ee5a6f, #f0a2a2)` (coral-pink) |
| Primary text      | `#333333` (dark gray)                         |
| Secondary text    | `#999999` (medium gray)                       |
| Input border      | `#e0e0e0` (light gray)                        |
| Input radius      | `24px` (pill / fully rounded)                 |
| Button radius     | `24px` (pill / fully rounded)                 |
| Font family       | `Poppins`, sans-serif (heading) + `Lato` or similar (body) |
| Social icon color | `#999999` (gray)                             |
| Checkbox color    | `#ee5a6f` (coral-pink, matches brand)        |
| Welcome heading   | White, italic serif-like font, large size     |

## Structure (section order)

1. **Page wrapper** — full viewport, centered card, light gray background
2. **Card container** — split into two halves (flex row on desktop, stacked on mobile)
3. **Left panel (form)**:
   - "Sign In" heading (top-left)
   - Social icons row (Facebook, Twitter — top-right)
   - Username field: uppercase label + rounded input
   - Password field: uppercase label + rounded input
   - Sign In button: full-width coral gradient, white text, pill shape
   - Remember Me checkbox + Forgot Password link (row)
4. **Right panel (welcome)**:
   - Coral-pink gradient background
   - "Welcome to login" heading (white, italic, large)
   - "Don't have an account?" subtext (white)
   - Sign Up button: outlined white border, pill shape, white text

## Gherkin requirements

### Scenario: Login form renders correctly
  Given the user visits the Logpoint page
  Then a split-screen card is visible
  And the left panel contains a "Sign In" heading
  And the right panel contains a "Welcome to login" heading

### Scenario: Username field accepts input
  Given the login form is displayed
  When the user clicks the username input
  And types a username
  Then the username field shows the typed value

### Scenario: Password field accepts input
  Given the login form is displayed
  When the user clicks the password input
  And types a password
  Then the password field shows the masked value

### Scenario: Sign In button is present
  Given the login form is displayed
  Then a "Sign In" button is visible
  And the button has a coral gradient background

### Scenario: Remember Me checkbox toggles
  Given the login form is displayed
  When the user clicks the "Remember Me" checkbox
  Then the checkbox toggles its checked state

### Scenario: Forgot Password link is present
  Given the login form is displayed
  Then a "Forgot Password" link is visible

### Scenario: Social icons are present
  Given the login form is displayed
  Then Facebook and Twitter icons are visible in the top-right area

### Scenario: Sign Up button is present on right panel
  Given the login form is displayed
  Then a "Sign Up" button is visible on the right panel
  And the button has a white outlined style

### Scenario: Responsive layout stacks on mobile
  Given the user views the page on a mobile viewport
  Then the card stacks vertically
  And the right panel appears below the left panel

### Scenario: Accessibility
  Given the login form is displayed
  Then all form inputs have associated labels
  And the sign-in button is keyboard-focusable
  And the checkbox is keyboard-operable

## Verification checklist

- [ ] Card is centered on page with light gray background
- [ ] Split layout on desktop, stacked on mobile
- [ ] "Sign In" heading visible (top-left of left panel)
- [ ] Social icons visible (top-right of left panel)
- [ ] Username input with uppercase label, rounded corners
- [ ] Password input with uppercase label, rounded corners
- [ ] Sign In button: full-width, coral gradient, pill shape, white text
- [ ] Remember Me checkbox with coral accent color
- [ ] Forgot Password link visible
- [ ] Right panel: coral gradient background
- [ ] "Welcome to login" heading (white, italic, large)
- [ ] "Don't have an account?" subtext (white)
- [ ] Sign Up button: outlined white, pill shape
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
