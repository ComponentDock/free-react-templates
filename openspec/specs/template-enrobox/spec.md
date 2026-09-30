# Template: Enrobox (Signup Form)

## Purpose

Recreation of Colorlib "Signup Form 15" — a centered, card-style signup form with a paper-plane send button and floating labels.

- **Source**: Colorlib Signup Form V15
- **Source slug**: `signup-form-15`
- **Source URL**: https://colorlib.com/wp/template/signup-form-15/
- **Preview URL**: https://preview.colorlib.com/theme/bootstrap/signup-form-15/
- **Screenshot URL**: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-15.jpg
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

## Design Tokens (from live preview CSS)

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Page background | `#ffffff` | Body / page background |
| Card background | `#ffffff` | `.login-wrap` card |
| Card shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Card elevation |
| Card decorative shadow | `rgba(0,0,0,0.05)` 150px height, curved top | `.login-wrap:after` pseudo-element |
| Input border | `1px solid rgba(0,0,0,0.1)` | Default input border |
| Input text | `#000` | Input text color |
| Placeholder text | `rgba(0,0,0,0.8)` | Input placeholder |
| Label text | `rgba(0,0,0,0.3)` | Floating label |
| Heading text | `#000` | "Sign Up #05" and "Sign Up" |
| Body text | `#212529` | Body paragraph text |
| Button background | `#007bff` | Primary button |
| Button hover | `#0069d9` | Primary button hover |
| Button focus ring | `0 0 0 0.2rem rgba(38,143,255,0.5)` | Button focus state |
| Link color | `#007bff` | "Sign In" link |
| Link hover | `#0056b3` | Link hover |

### Typography

| Token | Value |
|-------|-------|
| Font family | `'Lato', sans-serif` (Google Fonts) |
| Font weights | 400 (regular), 700 (bold) |
| Page heading | 28px, weight 500, `#000` |
| Card heading ("Sign Up") | 20px, weight 400, `#000` |
| Form label | 14px, weight 500, `rgba(0,0,0,0.3)` |
| Input text | 16px, weight 400, `#000` |
| Body text | 16px, weight 400, `#212529` |

### Layout & Shapes

| Property | Value |
|----------|-------|
| Section padding | `7em 0` |
| Card border-radius | `10px` |
| Card padding | 15px (mobile), 15px + `p-md-5` (desktop ~3rem) |
| Input height | `52px` |
| Input border-radius | `40px` (pill shape) |
| Input padding | `12px 20px` |
| Input bottom margin | `30px` |
| Label position | absolute, `top: -12px`, `left: 0`, offset by `margin-left: 30px` |
| Button border-radius | `0.25rem` (4px) |
| Button alignment | flex end (`justify-content: end`) |
| Decorative curve | `border-radius: 50% 0 0 0` at bottom of card, 150px height |

## Gherkin Requirements

### Feature: Enrobox — Centered signup form card

#### Scenario: Page renders with centered heading
  Given the page loads
  Then a centered heading "Sign Up #05" is displayed at the top

#### Scenario: Form card renders with shadow
  Given the page loads
  Then a white card with 10px border-radius and box-shadow `0px 10px 34px -15px rgba(0,0,0,0.24)` is visible
  And a decorative curved shadow appears at the bottom of the card

#### Scenario: Form fields render correctly
  Given the form card is visible
  Then a "Full Name" text input is shown with placeholder "John Doe"
  And an "Email Address" text input is shown with placeholder "johndoe@gmail.com"
  And a "Password" input is shown (type=password) with placeholder "Password"
  And a "Confirm Password" input is shown (type=password) with placeholder "Confirm Password"

#### Scenario: Form fields have floating labels
  Given the form is visible
  Then each field has a label positioned above the input with a white background pill shape

#### Scenario: Form inputs have pill shape
  Given the form is visible
  Then all inputs have a 40px border-radius (pill shape)
  And all inputs are 52px tall
  And all inputs have a subtle border (`1px solid rgba(0,0,0,0.1)`)

#### Scenario: Submit button with paper-plane icon
  Given the form is visible
  Then a submit button is displayed aligned to the right
  And the button has a blue background (#007bff)
  And the button contains a paper-plane SVG icon
  And on hover the button darkens to #0069d9

#### Scenario: Sign-in link
  Given the form is visible
  Then text "Already have an account?" is displayed below the form
  And "Sign In" is a clickable link styled in #007bff
  And on hover the link underlines

#### Scenario: Form validation
  Given the user submits the form with empty required fields
  Then the form prevents submission (HTML5 required validation)

#### Scenario: Responsive layout (mobile)
  Given the viewport is narrower than 768px
  Then the card takes full width within the container
  And the card padding is reduced

#### Scenario: Footer with Component Dock link
  Given the page is fully loaded
  Then a footer is present with a link to "https://www.componentdock.com/" branded as "Component Dock"

## Verification Checklist

- [ ] Lato font loaded from Google Fonts (400, 700)
- [ ] Centered page heading "Sign Up #05"
- [ ] White card with 10px border-radius and box-shadow
- [ ] Decorative curved shadow at card bottom
- [ ] 4 form fields: Full Name, Email, Password, Confirm Password
- [ ] Pill-shaped inputs (40px border-radius, 52px height)
- [ ] Floating labels with white background
- [ ] Blue submit button (#007bff) with paper-plane icon, right-aligned
- [ ] "Already have an account? Sign In" link
- [ ] Responsive: card padding adjusts, full-width on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines/functions/branches/statements)
- [ ] CNAME: enrobox.free.componentdock.com
- [ ] Homepage: https://enrobox.free.componentdock.com
