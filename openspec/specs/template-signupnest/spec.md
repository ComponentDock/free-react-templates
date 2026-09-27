# Template: SignupNest (Registration Form)

## Purpose

Recreation of ColorLib **Regform 28** (https://colorlib.com/wp/template/colorlib-regform-28/).
Preview: https://preview.colorlib.com/theme/colorlib-regform-28/ (404 at prep time — reference from source ZIP).
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-28.jpg

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
A split-panel registration form with a hero image on the left and a form on the right,
centered on a pastel gradient background. Music/subscription themed ("Bring Your Music Along").

## Design tokens

| Token | Value | Source |
|---|---|---|
| Font family | Roboto (Regular 400, Medium 500, Bold 700, Black 900) | CSS `@font-face` + Google Fonts |
| Page background | Linear gradient 136deg: `rgb(224,195,252)` → `rgb(142,197,252)` (lavender → sky blue) | `.page-content` |
| Card background | `#ffffff` | `.form-v2-content` |
| Card border-radius | `15px` | `.form-v2-content` |
| Heading color | `#333333` | `.form-detail h2` |
| Label color | `#666666` | `.form-detail label` |
| Input text color | `#333333` | `.form-detail input` |
| Input border | `1px solid #e5e5e5` | `.form-detail input` |
| Input border-radius | `5px` | `.form-detail input` |
| Input padding | `14.5px 15px` | `.form-detail input` |
| Input focus border | `#53c83c` (green) | `.cl-form-row input:focus` |
| Register button background | `#3b63ca` (blue) | `.register` |
| Register button hover | `#3356b0` | `.register:hover` |
| Register button border-radius | `6px` | `.register` |
| Register button color | `#ffffff` | `.register` |
| Checkbox link color | `#385cb9` (indigo) | `.form-checkbox a` |
| Placeholder text | `#999999` | `::-webkit-input-placeholder` |
| Hero overlay text | `#ffffff` (white, bold) | `.text-1`, `.text-2` |
| Valid indicator | `#53c83c` (green circle) | `label#valid` |
| Error indicator | `red` | `label.error` |

## Structure

The template is a single full-viewport centered card with two halves:

1. **Left panel (hero image)** — full-height background image (`form-v2.jpg`) with
   overlaid text: headline "Bring Your Music Along" + subline "try Unlimited" +
   pricing "$9.99 / Month". Text is white, positioned absolute bottom-left and bottom-right.
2. **Right panel (form)** — white background with:
   - Heading: "Registration Form"
   - Field: Full Name (text input, placeholder "ex: Lindsey Wilson")
   - Field: Your Email (text input, required, email pattern validation)
   - Field: Password (password input, required)
   - Field: Confirm Password (password input, required)
   - Checkbox: "By signing up, you agree to the Play Term of Service" (link styled blue underlined)
   - Submit button: "Register" (blue rounded, 160px wide)
3. **Responsive**: stacks vertically at 991px (image on top, form below).

## Gherkin scenarios

### Scenario: Full-page layout renders correctly
- GIVEN the user opens the SignupNest page
- THEN a centered card is visible on a gradient background (lavender → sky blue)
- AND the card has two halves: left image panel and right form panel

### Scenario: Hero panel displays subscription info
- GIVEN the hero panel is visible
- THEN the headline "Bring Your Music Along" is shown in white bold text
- AND the subline "try Unlimited" is shown below it
- AND the price "$9.99 / Month" is shown at the bottom right of the image

### Scenario: Registration form fields render
- GIVEN the form panel is visible
- THEN the heading "Registration Form" is displayed
- AND four input fields are present: Full Name, Your Email, Password, Confirm Password
- AND each field has a label and a placeholder (Full Name shows "ex: Lindsey Wilson")

### Scenario: Required field validation
- GIVEN the user clicks Register without filling any fields
- THEN the email field shows a validation error (required)
- AND the password field shows a validation error (required)
- AND the confirm password field shows a validation error (required)

### Scenario: Email format validation
- GIVEN the user types "invalid-email" in the Email field
- AND clicks Register
- THEN the email field shows a format validation error

### Scenario: Password confirmation match
- GIVEN the user fills all fields
- AND types "Password123" in Password and "Password456" in Confirm Password
- WHEN the form is submitted
- THEN a mismatch error is indicated

### Scenario: Terms checkbox must be checked
- GIVEN the user fills all fields correctly
- AND does NOT check the Terms of Service checkbox
- WHEN the form is submitted
- THEN the form is not submitted (checkbox required)

### Scenario: Successful registration
- GIVEN the user fills Full Name, valid Email, matching Passwords
- AND checks the Terms of Service checkbox
- WHEN the user clicks Register
- THEN the form submits successfully

### Scenario: Responsive layout on mobile
- GIVEN the viewport width is less than 992px
- THEN the card stacks vertically with the hero image on top and form below
- AND form input width adjusts to fill available space

### Scenario: Input focus styling
- GIVEN the user clicks into any input field
- THEN the input border changes to green (#53c83c)

### Scenario: Register button hover
- GIVEN the user hovers over the Register button
- THEN the button background darkens to #3356b0

## Verification checklist

- [ ] Gradient background renders (lavender → sky blue, 136deg)
- [ ] Card is centered with 15px border-radius
- [ ] Left panel shows hero image with overlaid white text
- [ ] All four form fields render with correct labels and placeholders
- [ ] Email field validates format on submit
- [ ] Password required validation works
- [ ] Confirm Password required validation works
- [ ] Terms checkbox is present with "Play Term of Service" link
- [ ] Register button is styled blue (#3b63ca) with 6px radius
- [ ] Button hover darkens to #3356b0
- [ ] Input focus shows green border (#53c83c)
- [ ] Responsive: stacks vertically below 992px
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage (lines, functions, branches, statements)
