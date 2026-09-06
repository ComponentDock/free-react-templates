# Template: Modulus (Sign-In Modal)

## Purpose

Recreation of ColorLib **Modal 01** — a responsive sign-in popup/modal component
for Bootstrap-style websites.

- **Source:** https://colorlib.com/wp/template/modal-01/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-01/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Original stack:** Bootstrap 4.3.1 + jQuery + Popper.js + Ionicons
- **Category:** Modal / Sign-In Popup

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token             | Value                              | Notes                                    |
| ----------------- | ---------------------------------- | ---------------------------------------- |
| Font family       | `"Poppins", Arial, sans-serif`     | Google Fonts (300–900 weights)           |
| Body font-size    | `15px`                             | line-height: 1.8                        |
| Brand color       | `#fb8691`                          | Coral/salmon pink — buttons, icons, links|
| Link color        | `#fb8691`                          | Matches brand                            |
| Button bg         | `#fb8691`                          | `.btn-primary`                           |
| Button text       | `#fff`                             | White on brand                           |
| Button hover bg   | `transparent`                      | Outline on hover                         |
| Button radius     | `40px`                             | Pill-shaped buttons                      |
| Button font-size  | `15px`                             | Matches body                             |
| Input height      | `52px`                             | `.form-control`                          |
| Input radius      | `5px`                              | Slightly rounded                         |
| Input border      | `1px solid rgba(0,0,0,0.1)`        | Subtle gray                              |
| Input focus border| `#fb8691`                          | Brand color on focus                     |
| Modal max-width   | `450px`                            | `.modal-dialog`                          |
| Modal shadow      | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Drop shadow                        |
| Modal header bg   | transparent                        | No border, position relative             |
| Modal body bg     | white                              | No border                                |
| Modal footer bg   | `#f8f8f8`                          | Light gray                               |
| Close button      | `40px × 40px`, absolute top-right  | X icon                                   |
| Icon circle       | `80px × 80px`, border-radius 50%   | Border `1px solid #fb8691`               |
| Icon color        | `#fb8691`                          | Person icon inside circle                |
| Section bg        | `#fff`                             | Full-page section                        |
| Checkbox accent   | `#fb8691`                          | Custom fill checkbox                     |
| Checkbox radius   | `3px`                              | `.fill-control-indicator`                |
| Checkbox label color | `rgba(0,0,0,0.4)`               | Muted gray                               |

## Section structure (from preview DOM)

The template consists of a single page with a launch button and a modal:

1. **Launch Section** — full-height centered layout (`ftco-section`), white
   background, centered vertically with Bootstrap flex (`js-fullheight`).
   Contains heading "Modal 01" and a pill-shaped "Launch Modal 01" button.

2. **Modal (Sign-In)** — Bootstrap-style centered modal dialog (max-width 450px),
   triggered by the launch button:
   - **Modal Header**: Close button (X) positioned absolute top-right (40×40px).
   - **Modal Body** (padded p-4 p-md-5):
     - Person icon in an 80×80 circle (border #fb8691, border-radius 50%)
     - "Sign In" heading (h3, centered)
     - Login form:
       - Username input (text, rounded-left, placeholder "Username")
       - Password input (password, rounded-left, placeholder "Password")
       - Login button (full-width, pill-shaped, #fb8691 background)
       - Row: "Remember Me" checkbox (custom fill, #fb8691 accent) + "Forgot Password" link
   - **Modal Footer** (background #f8f8f8, centered):
     - "Not a member? Create an account" link

## Gherkin scenarios

### Scenario: Launch section renders correctly
```gherkin
Given the user visits the modulus page
When the page loads
Then a heading "Modal 01" is visible
And a "Launch Modal 01" button is visible
And the section is vertically centered on the page
```

### Scenario: Modal opens on button click
```gherkin
Given the user is on the modulus page
When the user clicks the "Launch Modal 01" button
Then a sign-in modal dialog appears
And the modal is centered on screen
And a person icon in a circle is visible
And a "Sign In" heading is visible
```

### Scenario: Modal closes on close button click
```gherkin
Given the sign-in modal is open
When the user clicks the close button (X)
Then the modal disappears
```

### Scenario: Modal closes on backdrop click
```gherkin
Given the sign-in modal is open
When the user clicks outside the modal
Then the modal disappears
```

### Scenario: Modal closes on Escape key
```gherkin
Given the sign-in modal is open
When the user presses Escape
Then the modal disappears
```

### Scenario: Login form renders all fields
```gherkin
Given the sign-in modal is open
Then a username text input with placeholder "Username" is visible
And a password input with placeholder "Password" is visible
And a "Login" button is visible
And a "Remember Me" checkbox is visible
And a "Forgot Password" link is visible
```

### Scenario: Form fields accept input
```gherkin
Given the sign-in modal is open
When the user types "testuser" in the username field
And the user types "secret123" in the password field
Then the username field contains "testuser"
And the password field contains "secret123"
```

### Scenario: Remember Me checkbox toggles
```gherkin
Given the sign-in modal is open
And the "Remember Me" checkbox is unchecked
When the user clicks the "Remember Me" checkbox
Then the checkbox becomes checked
When the user clicks the "Remember Me" checkbox again
Then the checkbox becomes unchecked
```

### Scenario: Footer shows registration link
```gherkin
Given the sign-in modal is open
Then "Not a member?" text is visible in the footer
And a "Create an account" link is visible in the footer
```

### Scenario: Modal has correct visual styling
```gherkin
Given the sign-in modal is open
Then the modal has a drop shadow
And the close button is positioned in the top-right corner
And the login button is pill-shaped (border-radius 40px)
And the login button has brand color (#fb8691) background
And the modal footer has a light gray (#f8f8f8) background
```

## Verification checklist

- [ ] Launch section renders with centered heading and button
- [ ] Modal opens/closes via button, close icon, backdrop, Escape
- [ ] Person icon renders in circular border
- [ ] All form fields render with correct placeholders
- [ ] Username and password inputs accept text
- [ ] Remember Me checkbox toggles correctly
- [ ] Forgot Password and Create Account links are present
- [ ] Visual tokens match: brand color #fb8691, Poppins font, pill buttons
- [ ] Modal shadow, max-width 450px, footer gray background
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
