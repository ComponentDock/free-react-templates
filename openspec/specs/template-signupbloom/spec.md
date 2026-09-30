# Template: SignupBloom (Signup Form / Registration)

## Purpose

Recreation of ColorLib **Signup Form 08** (`https://colorlib.com/wp/template/signup-form-08/`).
Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-08/`.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a full-page split-layout signup form — a mirror variant of Signup Form 07.
The RIGHT half displays an SVG illustration (file sync / cloud theme), and the LEFT
half contains a registration form with the heading "Sign Up", four input fields
(Name, Email, Password, Re-type Password), a custom checkbox for Terms & Conditions
/ Privacy Policy consent, a full-width green "Register" submit button, a divider
("or register using"), and three social login buttons (Facebook, Twitter, Google)
each as full-width colored blocks.

Key difference from 07: image is on the RIGHT (order-md-2), form fields use
transparent background with bottom-border only (no filled-bg fields), and brand
color is green (#38d39f) instead of purple.

## Design Tokens

Extracted from `css/style.css` and preview HTML:

| Token               | Value                                  | Notes                                       |
| ------------------- | -------------------------------------- | ------------------------------------------- |
| brand-primary       | `#38d39f`                              | Green — btn-primary, checkbox checked        |
| brand-primary-hover | `#29bb8a`                              | Darker green on hover                        |
| brand-primary-focus | `rgba(53,185,141,0.5)`                | Focus ring shadow                            |
| text-dark           | `#212529`                              | Headings, body text                          |
| text-muted          | `#6c757d`                              | Divider text, secondary text                 |
| input-bg            | `transparent`                          | Form field background (no fill)              |
| input-border        | `1px solid #ccc`                       | Bottom border on inputs                      |
| input-focus-border  | `#38d39f`                              | Focus state border color                     |
| input-radius        | `0`                                    | No border-radius on inputs                   |
| page-padding        | `7rem 0`                               | Vertical padding on the content section      |
| btn-radius          | `0.25rem` (4px)                        | Slightly rounded buttons                     |
| btn-primary-bg      | `#38d39f`                              | Primary button background                    |
| btn-primary-color   | `#212529`                              | Primary button text (dark on green bg)       |
| btn-primary-hover-color | `#fff`                             | Button text turns white on hover             |
| checkbox-bg-unchecked | `#e6e6e6`                           | Checkbox indicator default                   |
| checkbox-bg-checked | `#38d39f`                              | Checkbox indicator when checked              |
| facebook-bg         | `#3b5998`                              | Facebook social login button                 |
| twitter-bg          | `#1da1f2`                              | Twitter social login button                  |
| google-bg           | `#ea4335`                              | Google social login button                   |
| heading-font        | Roboto (Google Fonts)                  | Loaded via link in index.html                |
| body-font           | Roboto, -apple-system, sans-serif      | System font stack fallback                   |

### Font

- **Google Font:** Roboto (weights 400, 500, 700)
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Loaded in `index.html` via `<link>` to Google Fonts

## Section Structure (from preview HTML)

1. **Full-Page Split Layout** (`.content`)
   - `7rem` vertical padding, white background
   - Two-column flexbox layout (`.cl-container > .cl-row`)
   - Left column (`.cl-col-md-6.contents`): signup form content
   - Right column (`.cl-col-md-6.cl-order-md-2`): SVG illustration

2. **Right Column — Illustration**
   - Full-height SVG illustration (file sync / cloud theme)
   - `cl-order-md-2` class puts it on the RIGHT on desktop
   - Responsive: hidden on mobile, full-width on desktop right half
   - Use placeholder image: `https://picsum.photos/seed/signupbloom/800/1200`

3. **Left Column — Signup Form** (`.cl-col-md-8` centered within `.cl-col-md-6`)
   - **Heading**: h3 "Sign Up" — left-aligned, dark text
   - **Subtext**: paragraph with lorem ipsum, muted color
   - **Form** (4 fields, stacked vertically):
     - **Name** (text input)
     - **Email** (email input)
     - **Password** (password input)
     - **Re-type Password** (password input)
     - Each field: transparent background, `1px solid #ccc` bottom border
     - Labels use absolute positioning with translateY(-50%) for floating effect
   - **Checkbox**: Custom checkbox with Terms & Conditions + Privacy Policy links
     - Checked by default, `#38d39f` indicator when checked
   - **Register Button**: Full-width, `#38d39f` background, dark text (`#212529`), 0.25rem radius
   - **Divider**: "or register using" text in muted color
   - **Social Login Row** (3 full-width buttons):
     - Facebook: `#3b5998` background, white icon
     - Twitter: `#1da1f2` background, white icon
     - Google: `#ea4335` background, white icon
     - Each button: full-width, centered icon, 10px margin-bottom

4. **Responsive Behavior**
   - Desktop: two-column split (form left, illustration right)
   - Mobile (<1200px): form takes full width, illustration hidden
   - Form fields stack vertically on all screen sizes

## Gherkin Scenarios

### Scenario: Page loads with split layout
  Given the user visits the SignupBloom page
  Then the page displays a two-column layout
  And the left column shows the signup form
  And the right column shows an illustration

### Scenario: Form displays all required fields
  Given the user views the signup form
  Then the form shows a "Sign Up" heading
  And the form has fields for Name, Email, Password, and Re-type Password
  And each field has a label and input with a bottom border

### Scenario: Form validates required fields
  Given the user clicks the Register button without filling any fields
  Then the browser shows validation messages for required fields

### Scenario: Password mismatch
  Given the user enters "password123" in the Password field
  And enters "different456" in the Re-type Password field
  When the user clicks Register
  Then the form should indicate the passwords do not match

### Scenario: Terms checkbox
  Given the user views the signup form
  Then the Terms & Conditions checkbox is checked by default
  When the user unchecks the checkbox
  Then the checkbox indicator changes from green to gray

### Scenario: Social login buttons displayed
  Given the user views the signup form
  Then three social login buttons are visible
  And the Facebook button has a blue (#3b5998) background
  And the Twitter button has a light blue (#1da1f2) background
  And the Google button has a red (#ea4335) background

### Scenario: Register button hover
  Given the user hovers over the Register button
  Then the button background changes to a darker green (#29bb8a)
  And the button text changes to white

### Scenario: Responsive layout
  Given the user views the page on a mobile device (viewport < 1200px)
  Then the illustration is hidden
  And the form takes the full page width

## Verification Checklist

- [ ] Two-column split layout with form on left, illustration on right
- [ ] Brand color `#38d39f` (green) used for primary button, checkbox, focus states
- [ ] Roboto font loaded from Google Fonts
- [ ] Four form fields with transparent background and bottom borders
- [ ] Custom checkbox with green checked state
- [ ] Full-width "Register" button with hover state (text turns white)
- [ ] Social login buttons (Facebook, Twitter, Google) with correct brand colors
- [ ] Responsive: form full-width on mobile, illustration hidden
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] 100% test coverage (lines, functions, branches, statements)
