# Template: Loginsphere (Login Form)

## Purpose

Recreation of ColorLib "Login Form V15" (slug: `login-form-15`).

- **Source:** https://colorlib.com/wp/template/login-form-15/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/login-form-15/ (confirmed live)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-15-2.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Category:** Login Form (single-page sign-in widget)

## Design Tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Font family | `"Lato", Arial, sans-serif` | Google Fonts Lato (300, 400, 700) |
| Brand color | `#01d28e` (teal/emerald) | Buttons, links, focus borders, checkbox accent, social icon hover, floating label |
| Body background | `#f8f9fd` (very light gray-blue) | Page background |
| Card background | `#ffffff` | White card wrapper |
| Card border-radius | `5px` | Rounded corners on card |
| Card shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Subtle drop shadow |
| Text color (body) | `gray` (#808080) | Paragraph / placeholder text |
| Text color (headings) | `#000000` | h2, h3 headings |
| Input height | `48px` | Standard form input height |
| Input border-radius | `5px` | Matches card corners |
| Input border | `1px solid rgba(0,0,0,0.1)` | Light gray border |
| Input focus border | `1px solid #01d28e` | Brand color on focus |
| Button background | `#01d28e` | Solid brand color |
| Button border | `1px solid #01d28e` | Matching brand border |
| Button text | `#ffffff` | White text |
| Button hover | `background: transparent; color: #01d28e` | Outline reversal on hover |
| Social icon size | `40x40px` | Circular icons |
| Social icon border | `1px solid rgba(0,0,0,0.05)` | Very subtle border |
| Social icon border-radius | `50%` | Perfect circles |
| Social icon color | `#999999` | Gray icons |
| Social icon hover bg | `#01d28e` | Brand color fill on hover |
| Image banner height | `200px` | Top decorative image inside card |
| Floating label color (active) | `#01d28e` | Brand color + uppercase + bold |
| Placeholder color | `rgba(0,0,0,0.2)` | Very light placeholder text |
| Heading font weight | `300` (h3), `500` (h2 default) | Light weight for form heading |

## Layout Structure (from DOM analysis)

Single-page centered layout:
1. **Page container** — full viewport, `#f8f9fd` background, vertically centered content
2. **Card wrapper** (`.wrap`) — white, `border-radius: 5px`, subtle shadow, max-width ~500px
   - **Image banner** (`.img`) — 200px tall, `background-image` covering top of card
   - **Login form** (`.login-wrap`) — padded interior
     - **Header row** — "Sign In" h3 (left) + social icons (right, inline)
     - **Form** — username input, password input (with eye toggle), submit button, remember-me checkbox + forgot password link
     - **Footer** — "Not a member? Sign Up" link

## Gherkin Requirements

### Feature: Loginsphere Login Form

#### Scenario: Page renders the centered login card
  Given a user visits the Loginsphere page
  Then a centered white card should be visible
  And the card should have rounded corners and a subtle shadow
  And the page background should be light gray-blue (#f8f9fd)

#### Scenario: Image banner displays at top of card
  Given the login card is rendered
  Then a decorative image banner should appear at the top of the card
  And the banner should be approximately 200px tall
  And the banner should use a cover background fit

#### Scenario: Sign In heading and social icons are visible
  Given the login form is displayed
  Then a "Sign In" heading should be visible
  And social media icons (Facebook, Twitter) should be visible to the right of the heading
  And the social icons should be 40x40px circular buttons

#### Scenario: Username input with floating label
  Given the login form is displayed
  Then a username text input should be visible
  And the placeholder text should read "Username"
  And when the user focuses the input, the label should float up and turn teal (#01d28e)

#### Scenario: Password input with toggle visibility
  Given the login form is displayed
  Then a password input should be visible
  And the placeholder text should read "Password"
  And an eye icon toggle should be visible on the right side of the password field
  And clicking the eye icon should toggle password visibility

#### Scenario: Submit button styled with brand color
  Given the login form is displayed
  Then a "Sign In" submit button should be visible
  And the button should have a teal (#01d28e) background with white text
  And on hover, the button should become transparent with teal text

#### Scenario: Remember Me checkbox and Forgot Password link
  Given the login form is displayed
  Then a "Remember Me" checkbox should be visible (left-aligned)
  And a "Forgot Password" link should be visible (right-aligned)
  And the checkbox should use the brand teal color as its accent

#### Scenario: Sign Up link in footer
  Given the login form is displayed
  Then a "Not a member?" text with a "Sign Up" link should be visible below the form

#### Scenario: Social icon hover interaction
  Given the social icons are displayed
  When a user hovers over a social icon
  Then the icon background should change to teal (#01d28e)
  And the icon color should change to white

#### Scenario: Form input focus styling
  Given the login form is displayed
  When a user focuses any input field
  Then the input border should change to teal (#01d28e)
  And the floating label should appear above the input in teal, uppercase, bold

#### Scenario: Responsive layout
  Given a user views the page on a mobile device
  Then the card should remain centered and readable
  And the form fields should stack vertically
  And the Remember Me / Forgot Password row should adapt to the viewport

## Verification Checklist

- [ ] Page background is #f8f9fd
- [ ] Card is white with 5px border-radius and shadow
- [ ] Image banner is 200px tall with cover fit
- [ ] "Sign In" heading is present (font-weight 300)
- [ ] Social icons are 40x40px circles with hover effect
- [ ] Username input has floating label animation
- [ ] Password input has eye toggle for visibility
- [ ] Submit button is teal (#01d28e), white text, outline hover
- [ ] Remember Me checkbox with teal accent
- [ ] Forgot Password link present
- [ ] "Not a member? Sign Up" footer link
- [ ] Font is Lato (Google Fonts, weights 300/400/700)
- [ ] Focus states use brand teal color
- [ ] Responsive on mobile viewports
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] CNAME set to loginsphere.free.componentdock.com
- [ ] Package name is @free-react-templates/loginsphere
