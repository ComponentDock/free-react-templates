# Template: EntryVault (Login Form)

## Purpose

Recreation of ColorLib **Login Form V11** (slug: `login-form-11`).
Preview: `https://preview.colorlib.com/theme/bootstrap/login-form-11/`
Source page: `https://colorlib.com/wp/template/login-form-11/`
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

A clean, centered login card with a circular blue icon, username/password
fields, a full-width rounded primary button, a custom "Remember Me" checkbox,
and a "Forgot Password" link. No navbar, no footer — standalone login page.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Font family | Lato (300, 400, 700) | Loaded via Google Fonts link in index.html |
| Brand / accent | `#1089ff` | Bright blue — icon circle, button, focus ring, checkbox |
| Card background | `#fff` | White card on white page |
| Card border-radius | `10px` | Rounded card corners |
| Card shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Subtle drop shadow |
| Icon circle | 80 × 80 px, `border-radius: 50%`, bg `#1089ff` | Contains white Font Awesome user icon |
| Icon font | Font Awesome 4.7 `fa-user-o` | Use lucide-react `User` icon instead |
| Heading (page title) | 28px, `#000` | h2 "Login #01" — we use "EntryVault" as heading |
| Sign-in heading | `font-weight: 300` (light) | h3 "Sign In" |
| Form control height | 52px | Inputs + button |
| Form control border | `1px solid rgba(0,0,0,0.1)`, radius `5px` | Rounded-left inputs |
| Form focus border | `1px solid #1089ff` | Blue focus ring, no shadow |
| Button | bg `#1089ff`, color `#fff`, radius `40px` (pill), font 15px | Full-width, no shadow |
| Button hover | transparent bg, `#1089ff` border + text | Outline swap on hover |
| Checkbox | Custom FontAwesome checkmark, primary color `#1089ff` | Replace with styled native checkbox |
| "Forgot Password" link | Default Bootstrap link color `#007bff` → style to `#1089ff` | Right-aligned |
| Page background | `#fff` | White |
| Layout | Centered column, max-width col-md-7 col-lg-5 (~350px) | Single centered card |

## Replication reference (screenshot fallback)

The live preview was unreachable at `/theme/login-form-11/` (404). The correct
preview URL includes a `/bootstrap/` prefix:
`https://preview.colorlib.com/theme/bootstrap/login-form-11/`

The ColorLib template page screenshot
(`https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-11-2.jpg`)
shows:
- White page background, centered login card
- Blue circle with white user icon at card top
- "Sign In" light-weight heading below icon
- Two input fields (Username, Password) with light gray borders
- Full-width blue rounded pill "Login" button
- Bottom row: "Remember Me" checkbox (left) and "Forgot Password" link (right)
- Subtle card drop shadow
- No navbar, no footer — pure standalone login form page

## Gherkin scenarios

### Scenario: Page renders the login card
  Given the user navigates to the EntryVault page
  Then a centered login card is visible on a white background
  And the card has rounded corners and a subtle drop shadow

### Scenario: Circular icon displays
  Given the login card is visible
  Then an 80px blue circular icon with a white user silhouette is shown at the top of the card

### Scenario: Sign In heading
  Given the login card is visible
  Then a "Sign In" heading is displayed in light font weight below the icon

### Scenario: Username input
  Given the login card is visible
  Then a text input with placeholder "Username" is present
  And the input has a 5px border-radius and 52px height
  And the input border is light gray (`rgba(0,0,0,0.1)`)

### Scenario: Password input
  Given the login card is visible
  Then a password input with placeholder "Password" is present
  And the input has the same styling as the username input

### Scenario: Input focus state
  Given the username input is focused
  Then the input border changes to brand blue (#1089ff)
  And no box-shadow is applied

### Scenario: Login button
  Given the login card is visible
  Then a full-width "Login" button is present
  And the button has a pill shape (border-radius 40px)
  And the button background is brand blue (#1089ff)
  And the button text is white

### Scenario: Login button hover
  Given the user hovers over the Login button
  Then the button background becomes transparent
  And the button border and text become brand blue (#1089ff)

### Scenario: Remember Me checkbox
  Given the login card is visible
  Then a "Remember Me" checkbox is present on the left side below the button
  And the checkbox uses a custom styled appearance with brand blue when checked

### Scenario: Forgot Password link
  Given the login card is visible
  Then a "Forgot Password" link is present on the right side below the button
  And the link color matches the brand blue (#1089ff)

### Scenario: Page heading
  Given the user navigates to the EntryVault page
  Then a page-level heading "EntryVault" is displayed above the card
  And the heading is 28px and black (#000)

### Scenario: Responsive layout
  Given the user views the page on a mobile device
  Then the login card remains centered and fills available width with appropriate padding
  And all form elements remain usable at small viewport sizes

### Scenario: Component Dock footer link
  Given the user scrolls to the bottom of the page
  Then a footer link to "https://www.componentdock.com/" is present
  And the link text references "Component Dock"
