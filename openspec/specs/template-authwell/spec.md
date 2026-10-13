# Template: AuthWell (Login Form)

## Purpose

Recreation of ColorLib **Login Form V07** (slug: `login-form-07`).
Preview URL: `https://preview.colorlib.com/theme/bootstrap/login-form-07/`
Source page: `https://colorlib.com/wp/template/login-form-07/`
Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-07.jpg`

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.

A split-screen login page: left side shows an illustration, right side
contains a sign-in form with username/password, "Remember me" checkbox,
"Forgot Password" link, a primary "Log In" button, and social login
buttons (Facebook, Twitter, Google).

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token                  | Value          | Notes                                   |
| ---------------------- | -------------- | --------------------------------------- |
| Font family            | `"Roboto"`     | Google Fonts, weights 300 + 400         |
| Body background        | `#f8fafb`      | Very light blue-gray                    |
| Paragraph text color   | `#b3b3b3`      | Medium gray, weight 300                 |
| Link color             | `#888`         | Darker gray                             |
| Form group background  | `#edf2f5`      | Light gray-blue                         |
| Form group border      | `1px solid #e6edf1` | Subtle border between fields      |
| Form group radius      | `7px`          | First group: top corners; last: bottom  |
| Form label color       | `#b3b3b3`      | 12px, positioned absolutely             |
| Input font size        | `20px`         | Large, clean                            |
| Primary button color   | `#6c63ff`      | Indigo/purple (matches checkbox checked)|
| Primary button height  | `54px`         | Generous padding                        |
| Checkbox checked color | `#6c63ff`      | Same indigo as primary button           |
| Facebook social        | `#3b5998`      | Standard Facebook blue                  |
| Twitter social         | `#1da1f2`      | Standard Twitter blue                   |
| Google social          | `#ea4335`      | Standard Google red                     |
| Social button size     | `50px × 50px`  | Circular (border-radius: 50%)           |
| Content padding        | `7rem 0`       | Vertical spacing around the card        |

### Visual Design Notes (from screenshot)

- **Layout:** Two-column split (col-md-6 each). Left: illustration. Right: form.
- **Illustration:** Person sitting at a desk with a computer monitor, filing
  cabinet, and potted plants. Blue/purple accent on plants and chair.
  Use `https://picsum.photos/seed/authwell-login/600/600` as placeholder.
- **Form section:** "Sign In" heading (h3, dark), subtitle paragraph in gray.
  Two stacked form fields (Username, Password) in gray boxes (#edf2f5) with
  7px rounded corners.
- **Checkbox row:** Custom "Remember me" checkbox (purple when checked) on
  left, "Forgot Password" link on right, aligned with flexbox.
- **Primary button:** Full-width "Log In" button, indigo/purple (#6c63ff),
  no border-radius visible (or very slight rounding from Bootstrap).
- **Divider text:** "--- or login with ---" in muted gray.
- **Social buttons:** Three circular icon buttons (Facebook, Twitter, Google)
  in their brand colors, aligned left with spacing.
- **Overall:** Clean, minimal, modern aesthetic. Lots of whitespace. Light
  background (#f8fafb). No shadows or cards — content sits directly on
  the background.

## Requirements

### Feature: AuthWell template behaviour

Feature: AuthWell login page

#### Scenario: Page renders with correct layout

- **GIVEN** the user opens the AuthWell login page
- **THEN** a two-column layout is displayed
- **AND** the left column shows an illustration
- **AND** the right column shows the sign-in form

#### Scenario: Sign-in form heading

- **GIVEN** the user views the sign-in form
- **THEN** the heading "Sign In" is visible
- **AND** a subtitle paragraph is displayed below the heading

#### Scenario: Username field

- **GIVEN** the user views the sign-in form
- **THEN** a "Username" text input field is present
- **AND** the field has a floating label "Username"
- **AND** the field background is #edf2f5

#### Scenario: Password field

- **GIVEN** the user views the sign-in form
- **THEN** a "Password" input field is present
- **AND** the field has a floating label "Password"
- **AND** the field type is password

#### Scenario: Remember me checkbox

- **GIVEN** the user views the sign-in form
- **THEN** a "Remember me" checkbox is displayed
- **AND** the checkbox is checked by default
- **WHEN** the user unchecks the checkbox
- **THEN** the checkbox becomes unchecked

#### Scenario: Forgot Password link

- **GIVEN** the user views the sign-in form
- **THEN** a "Forgot Password" link is visible
- **AND** the link is aligned to the right of the checkbox row

#### Scenario: Log In button

- **GIVEN** the user views the sign-in form
- **THEN** a "Log In" button is displayed
- **AND** the button is full-width
- **AND** the button background color is #6c63ff
- **AND** the button text color is white

#### Scenario: Social login divider

- **GIVEN** the user views the sign-in form
- **THEN** a divider text "--- or login with ---" is displayed

#### Scenario: Social login buttons

- **GIVEN** the user views the sign-in form
- **THEN** three social login buttons are displayed
- **AND** the Facebook button has background #3b5998
- **AND** the Twitter button has background #1da1f2
- **AND** the Google button has background #ea4335
- **AND** each social button is circular (50px diameter)

#### Scenario: Responsive behavior

- **GIVEN** the user views the page on a mobile device
- **THEN** the two columns stack vertically
- **AND** the illustration appears above the form

#### Scenario: Footer link

- **GIVEN** the user scrolls to the bottom
- **THEN** a "Component Dock" link is visible in the footer
- **AND** the link points to https://www.componentdock.com/

## Verification Checklist

- [ ] Two-column split layout (illustration left, form right)
- [ ] "Sign In" heading with subtitle
- [ ] Username and Password form fields with gray background (#edf2f5)
- [ ] Floating labels on form fields
- [ ] "Remember me" custom checkbox (checked by default, purple when checked)
- [ ] "Forgot Password" link aligned right
- [ ] Full-width "Log In" button with #6c63ff background
- [ ] "--- or login with ---" divider text
- [ ] Three circular social login buttons (Facebook, Twitter, Google)
- [ ] Social button brand colors (#3b5998, #1da1f2, #ea4335)
- [ ] Responsive stacking on mobile
- [ ] Roboto font family loaded
- [ ] Body background #f8fafb
- [ ] Footer with Component Dock link
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
