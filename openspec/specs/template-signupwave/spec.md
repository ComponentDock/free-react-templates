# Template: SignupWave (Registration Form)

## Purpose

Recreation of ColorLib **Signup Form 06** (`https://colorlib.com/wp/template/signup-form-06/`).
Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-06/`.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a split-screen registration form template. The left half contains a
centered signup form with floating labels (Email, Password, Re-type Password),
a terms-and-conditions checkbox, a full-width "Register" button, and social
login buttons (Facebook, Twitter, Google). The right half displays a full-bleed
background image. On mobile, the image stacks above the form.

## Design Tokens

Extracted from `css/style.css` (preview) and the template HTML:

| Token                    | Value                                    | Notes                                           |
| ------------------------ | ---------------------------------------- | ----------------------------------------------- |
| brand-primary            | `#007bff`                                | Blue — button background, focus rings, checkbox |
| brand-primary-hover      | `#0069d9`                                | Button hover state                              |
| brand-primary-focus-ring | `rgba(0,123,255,0.25)`                  | Focus box-shadow on inputs/buttons              |
| text-body                | `#212529`                                | Default body text                               |
| text-paragraph           | `#b3b3b3`                                | Paragraph subtext color                         |
| text-muted               | `#6c757d`                                | Muted text, placeholders                        |
| text-link                | `#888`                                   | Link color in form area                         |
| border-default           | `#ced4da`                                | Default form control border                     |
| border-formgroup         | `#efefef`                                | Border around stacked form groups               |
| bg-page                  | `#ffffff`                                | Body/contents background                        |
| bg-checkbox-unchecked    | `#e6e6e6`                                | Checkbox indicator unchecked                    |
| bg-checkbox-checked      | `#007bff`                                | Checkbox indicator checked                      |
| social-facebook          | `#3b5998`                                | Facebook button background                     |
| social-twitter           | `#1da1f2`                                | Twitter button background                      |
| social-google            | `#ea4335`                                | Google button background                       |
| form-group-radius        | `7px` (first/last group)                 | Rounded corners on top of first, bottom of last|
| input-height             | `calc(1.5em + 0.75rem + 2px)`           | Standard Bootstrap form control height          |
| button-height            | `54px`                                   | Register button height                         |
| button-radius            | `0.25rem` (4px)                          | Standard Bootstrap border-radius               |
| heading-font             | Roboto (Google Fonts, 300–600)           | Loaded via `@font-face` / Google Fonts link     |
| body-font                | Roboto, sans-serif                       | System fallback stack                           |

### Font

- **Google Font:** Roboto, weights 300, 400, 500, 600
- Loaded in `index.html` via `<link>` to Google Fonts

## Section Structure (from preview HTML)

1. **Split-Screen Layout** (`.half.cl-d-lg-flex`)
   - Full viewport height (`height: 100vh; min-height: 900px`)
   - Flexbox row on desktop; stacked on mobile

2. **Right Panel — Background Image** (`.bg`)
   - `background-size: cover; background-position: center`
   - Image: `images/bg_1.jpg` → use `https://picsum.photos/seed/signupwave/1200/900`
   - On mobile: 500px height, stacks above form

3. **Left Panel — Form Content** (`.contents`)
   - White background, centered container
   - Col-md-7 width (58.33%)
   - Content order: form first on mobile, second on desktop

4. **Form Section**
   - **Heading:** `<h3>Register</h3>` — Roboto, 1.75rem, weight 500
   - **Subtext:** `<p>Lorem ipsum dolor sit amet elit...</p>` — 14px, #b3b3b3, weight 300
   - **Email Input:** Floating label pattern (label animates up on focus/filled)
   - **Password Input:** Same floating label pattern
   - **Re-type Password Input:** Same floating label pattern
   - **Checkbox:** "Agree our Terms and Conditions" — checked by default
   - **Register Button:** Full-width, `#007bff` background, white text, 54px height
   - **Divider:** "— or —" text, centered, muted color
   - **Social Login:**
     - Facebook button: `#3b5998` background, white text, Facebook icon
     - Twitter button: `#1da1f2` background, white text, Twitter icon
     - Google button: `#ea4335` background, white text, Google icon

## Gherkin Scenarios

### Scenario: Page loads with split-screen layout

- Given the user visits the template page
- When the page finishes loading
- Then a split-screen layout is visible with two equal halves
- And the left half contains a registration form
- And the right half displays a background image

### Scenario: Registration form displays correctly

- Given the page is loaded
- When the user views the form area
- Then a "Register" heading is visible
- And a descriptive paragraph is displayed below the heading
- And three input fields are visible: Email, Password, Re-type Password
- And each input has a floating label

### Scenario: Floating labels animate on focus

- Given the form is displayed
- When the user clicks on the Email input
- Then the "Email" label moves above the input field
- And the input border receives a blue focus ring

### Scenario: Terms checkbox interaction

- Given the form is displayed
- Then the "Agree our Terms and Conditions" checkbox is checked by default
- When the user unchecks the checkbox
- Then the checkbox indicator turns gray
- When the user re-checks the checkbox
- Then the checkbox indicator turns blue

### Scenario: Register button is full-width

- Given the form is displayed
- Then the "Register" button spans the full width of the form column
- And the button has a blue background with white text

### Scenario: Social login buttons display

- Given the form is displayed
- When the user scrolls past the divider
- Then three social login buttons are visible
- And the Facebook button has a `#3b5998` background
- And the Twitter button has a `#1da1f2` background
- And the Google button has a `#ea4335` background
- And each button spans the full width

### Scenario: Responsive layout stacks on mobile

- Given the user views the template on a viewport under 992px
- Then the background image stacks above the form
- And the image area is 500px tall
- And the form content is centered below

### Scenario: Footer links to Component Dock

- Given the page is loaded
- When the user scrolls to the footer
- Then a link to "https://www.componentdock.com/" is present
- And the link text mentions "Component Dock"

## Verification Checklist

- [ ] Split-screen layout renders correctly at 100vh
- [ ] Background image covers the right panel
- [ ] Floating labels animate up on focus/filled
- [ ] Email, Password, Re-type Password inputs work
- [ ] Terms checkbox is checked by default
- [ ] Register button is full-width and blue
- [ ] Social login buttons have correct brand colors
- [ ] Responsive: stacks on mobile (<992px)
- [ ] No references to ColorLib in app code
- [ ] Footer links to Component Dock
- [ ] Package name: `@free-react-templates/signupwave`
- [ ] CNAME: `signupwave.free.componentdock.com`
