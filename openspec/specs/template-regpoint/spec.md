# Template: Regpoint (Sign-Up Form)

## Purpose

Regpoint is a single-page SIGN-UP FORM in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Colorlib Regform 8" free
template (source: https://colorlib.com/wp/template/colorlib-regform-8/), built
under a DIFFERENT name (**Regpoint**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a plain HTML/CSS registration form: a full-viewport
background image (dark-toned photo) with a centered white rounded card
(660px wide, 10px border-radius, 50px/85px padding) containing a "Create
account" heading, four input fields (Name, Email, Password with eye-toggle,
Repeat Password), a terms-of-service checkbox, a gradient submit button,
and a "Have already an account? Login here" link below the card.

## Source reference

- ColorLib slug: `colorlib-regform-8`
- Preview URL: https://colorlib.com/etc/regform/colorlib-regform-8/
- ColorLib page: https://colorlib.com/wp/template/colorlib-regform-8/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-8.jpg

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Font family | `Montserrat` (Google Fonts) | weights 400, 500, 600, 700 |
| Body background | `background-image: url('../images/signup-bg.jpg')` | Dark photo, `background-size: cover`, centered |
| Page padding | `padding: 115px 0` | Vertical centering of card |
| Card background | `#fff` | White |
| Card border-radius | `10px` | Rounded corners |
| Card width | `660px` | Fixed, `margin: 0 auto` |
| Card padding | `50px 85px` | Generous inner spacing |
| Heading color | `#222` | Dark text |
| Heading font-weight | `900` | Extra bold |
| Heading transform | `uppercase` | "CREATE ACCOUNT" |
| Heading size | `24px` | `line-height: 1.66`, `margin-bottom: 40px` |
| Body text color | `#222` | Dark |
| Body font-size | `14px` | `line-height: 1.8` |
| Input border | `1px solid #ebebeb` | Light grey |
| Input border-radius | `5px` | Slightly rounded |
| Input padding | `17px 20px` | Tall inputs |
| Input font-size | `14px`, weight `500` | |
| Input placeholder color | `#999` | Medium grey |
| Input focus border | Gradient: `linear-gradient(to right, #9face6, #74ebd5)` | Purple-to-teal gradient border (border-image) |
| Submit button background | Gradient: `linear-gradient(to left, #74ebd5, #9face6)` | Teal-to-purple gradient |
| Submit button color | `#fff` | White text |
| Submit button font-weight | `700` | Bold |
| Submit button transform | `uppercase` | "SIGN UP" |
| Submit button border-radius | `5px` | Same as inputs |
| Submit button padding | `17px 20px` | Same height as inputs |
| Terms checkbox label color | `#555` | |
| Terms link color | `#555` | "Terms of service" link |
| Login text color | `#555` | |
| Login link color | `#222` | Bold, "Login here" |
| Login section margin-top | `91px` | Spacing below form |
| Password toggle icon color | `#555` | Eye icon float-right |
| Responsive breakpoint 1 | `768px` | Container width → `calc(100% - 40px)` |
| Responsive breakpoint 2 | `480px` | Card padding → `50px 25px` |

## Gherkin requirements

### Background
Given the user visits the Regpoint sign-up page
Then a full-page background image covers the viewport
And a white rounded card is centered on the page

### Scenario: Page renders with correct structure
Given the page has loaded
Then the heading "Create account" is visible in uppercase
And four input fields are visible: Name, Email, Password, Repeat Password
And a "Sign up" submit button is visible
And a terms-of-service checkbox with label is visible
And a "Have already an account? Login here" link is visible below the form

### Scenario: Name field accepts input
Given the Name input is focused
When the user types "John Doe"
Then the Name input contains "John Doe"

### Scenario: Email field accepts input
Given the Email input is focused
When the user types "john@example.com"
Then the Email input contains "john@example.com"

### Scenario: Password field shows/hides via eye toggle
Given the Password input shows masked text
When the user clicks the eye toggle icon
Then the Password input shows plain text
When the user clicks the eye toggle icon again
Then the Password input shows masked text again

### Scenario: Repeat Password field accepts input
Given the Repeat Password input is focused
When the user types "secret123"
Then the Repeat Password input contains "secret123"

### Scenario: Terms checkbox can be toggled
Given the terms checkbox is unchecked
When the user clicks the terms checkbox
Then the terms checkbox is checked
When the user clicks the terms checkbox again
Then the terms checkbox is unchecked

### Scenario: Submit button triggers form submission
Given all form fields are filled
And the terms checkbox is checked
When the user clicks "Sign up"
Then the form submission handler is called

### Scenario: Login link is accessible
Given the "Login here" link is visible
When the user clicks "Login here"
Then navigation is triggered (link has href)

### Scenario: Responsive layout at 768px
Given the viewport width is 768px
Then the card container uses `calc(100% - 40px)` width

### Scenario: Responsive layout at 480px
Given the viewport width is 480px
Then the card padding reduces to 50px 25px

## Verification checklist

- [ ] Font: Montserrat loaded via Google Fonts link in index.html
- [ ] Background: full-viewport background image (picsum.photos placeholder), cover, centered
- [ ] Card: white, 660px max-width, 10px border-radius, centered with auto margins
- [ ] Heading: "Create account", Montserrat 900, 24px, uppercase, centered, #222
- [ ] Inputs: 4 fields (Name, Email, Password, Repeat Password), #ebebeb border, 5px radius, 17px/20px padding
- [ ] Input focus: gradient border (teal-to-purple), no box-shadow
- [ ] Password toggle: eye icon on the right of the password field, toggles visibility
- [ ] Submit button: full-width, gradient background (#74ebd5 → #9face6), white bold uppercase text, 5px radius
- [ ] Terms checkbox: custom-styled, "I agree all statements in Terms of service"
- [ ] Login link: below the card with margin-top, "Have already an account? Login here"
- [ ] Responsive: card shrinks at 768px, padding reduces at 480px
- [ ] Footer: links to https://www.componentdock.com/ (Component Dock)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Tests: 100% coverage (lines, functions, branches, statements)
- [ ] Build passes: `npm run build` in apps/regpoint
