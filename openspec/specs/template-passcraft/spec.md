# Template: PassCraft (Login Form)

## Purpose

Recreation of ColorLib "Login Form 03" (`login-form-03`).
- Source: https://colorlib.com/wp/template/login-form-03/
- Preview: https://preview.colorlib.com/theme/bootstrap/login-form-03/
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

A split-screen login page with a hero background image on the left and a
centered white card containing username/password fields, remember-me checkbox,
forgot-password link, and an orange submit button on the right.

## Design Tokens

| Token                | Value           | Notes                                       |
|----------------------|-----------------|---------------------------------------------|
| Font family          | Roboto          | Google Fonts; weights 300 (body) + 400      |
| Body background      | #f6f7fc         | Light lavender-gray                         |
| Form card background | #ffffff         | White card                                  |
| Card padding         | 40px            | 25px on mobile                              |
| Input background     | #efefef         | Light gray input fields                     |
| Input height         | 54px            | Generous touch target                       |
| Input border-radius  | 4px             | Slight rounding                             |
| Primary button color | #fb771a         | Orange (brand accent)                       |
| Button height        | 54px            | Matches inputs                              |
| Button border-radius | 4px             | Rounded corners                             |
| Checkbox checked     | #fb771a         | Same orange as button                       |
| Link color           | #888888         | Gray links                                  |
| Forgot password font | 14px            | Smaller text                                |
| Split layout         | 50/50           | Left bg image, right form (responsive)      |
| Background image     | picsum.photos   | Kitchen/lifestyle hero image (placeholder)  |
| Min-height           | 700px           | Half section minimum height                 |
| Page height          | 100vh           | Full viewport split                         |

## Visual Design (from screenshot)

The template uses a classic split-screen login layout:
- **Left half**: A full-height hero image (kitchen scene with white tile,
  wooden shelf, white pot, vintage scale, and plant). On mobile this image
  compresses to ~200px at the top.
- **Right half**: Light gray (#f6f7fc) background containing a white card
  centered vertically. The card overlaps upward into the image by ~300px
  (negative margin).
- **Card content**: "Login to **Colorlib**" heading (h3, bold on "Colorlib"),
  followed by Username input, Password input, a row with Remember-me checkbox
  (left) and "Forgot Password" link (right), and a full-width orange
  "Log In" button.
- **Aesthetic**: Clean, minimal, professional. No decorative elements beyond
  the hero image. High contrast between white card and gray background.

## Requirements (Gherkin)

### Feature: PassCraft Login Form

#### Scenario: Page loads with split layout
  Given the user navigates to the PassCraft login page
  Then a full-viewport split layout is displayed
  And the left half shows a background image
  And the right half shows a light gray background

#### Scenario: Login card is centered and overlapping
  Given the page has loaded
  Then a white card is centered vertically on the right half
  And the card overlaps the hero image section upward
  And the card has 40px padding

#### Scenario: Login form displays all fields
  Given the login card is visible
  Then a heading "Login to" is shown
  And a Username label and text input are displayed
  And a Password label and password input are displayed
  And a "Remember me" checkbox (checked by default) is displayed
  And a "Forgot Password" link is displayed
  And an orange "Log In" button is displayed

#### Scenario: Username input accepts text
  Given the login form is displayed
  When the user types "user@example.com" into the Username field
  Then the input shows "user@example.com"
  And the input has a light gray background (#efefef)

#### Scenario: Password input masks characters
  Given the login form is displayed
  When the user types a password into the Password field
  Then the input shows masked characters (dots or asterisks)

#### Scenario: Remember me checkbox toggles
  Given the login form is displayed
  Then the Remember me checkbox is checked by default
  When the user clicks the Remember me checkbox
  Then the checkbox becomes unchecked
  When the user clicks the Remember me checkbox again
  Then the checkbox becomes checked again

#### Scenario: Forgot Password link is clickable
  Given the login form is displayed
  Then a "Forgot Password" link is visible
  And the link has an underline style
  And the link color is gray (#888)

#### Scenario: Log In button styling
  Given the login form is displayed
  Then the Log In button is full-width
  And the button has orange background (#fb771a)
  And the button has white text
  And the button height matches the inputs (54px)

#### Scenario: Mobile responsive layout
  Given the user views the page on a mobile viewport (< 992px)
  Then the hero image appears at the top with ~200px height
  And the form card appears below the image
  And the card padding reduces to 25px

#### Scenario: Form submission
  Given the user has filled in username and password
  When the user clicks the Log In button
  Then the form submits (preventDefault in demo)

#### Scenario: Keyboard accessibility
  Given the login form is displayed
  When the user presses Tab
  Then focus moves to the Username input
  And when the user presses Tab again
  Then focus moves to the Password input
  And when the user presses Tab again
  Then focus moves to the Remember me checkbox
  And when the user presses Tab again
  Then focus moves to the Forgot Password link
  And when the user presses Tab again
  Then focus moves to the Log In button

#### Scenario: Component Dock footer
  Given any page on the site
  Then a footer link to "https://www.componentdock.com/" is present
  And the link text includes "Component Dock"

## Verification Checklist

- [ ] Split layout renders at full viewport height
- [ ] Hero image loads (placeholder from picsum.photos)
- [ ] Form card is white, centered, overlapping image
- [ ] Username and Password inputs have correct styling (#efefef bg, 54px height)
- [ ] Orange button (#fb771a) renders full-width with correct height
- [ ] Remember me checkbox works (checked by default, toggles)
- [ ] Forgot Password link is gray, underlined, clickable
- [ ] Mobile breakpoint: image compresses to 200px, card moves below
- [ ] Roboto font loads from Google Fonts
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] 100% test coverage
- [ ] TypeScript strict mode passes
- [ ] Build succeeds without warnings
