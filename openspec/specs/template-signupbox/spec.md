# Template: SignupBox (Bootstrap Modal / Signup Form)

## Purpose

Recreation of ColorLib **Modal 05** (`https://colorlib.com/wp/template/modal-05/`).
Preview: `https://preview.colorlib.com/theme/bootstrap/modal-05/`.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a centered signup/account-creation modal popup. The page behind the modal is
a simple white section with a "Launch Modal 05" button. The modal contains a heading
"Create Your Account", social login icons (Twitter, Facebook, Instagram), a three-field
signup form (Full Name, Email Address, Password), a pill-shaped "Sign Up" submit button,
and an "I'm already a member" link. The close button is a plain 40x40px square in the
top-right corner.

## Design Tokens

Extracted from `css/style.css` (lines 8220–8380) and preview HTML:

| Token               | Value                                    | Notes                                    |
| ------------------- | ---------------------------------------- | ---------------------------------------- |
| brand-primary       | `#3e64ff`                                | Blue/indigo — btn-primary, focus borders |
| brand-primary-hover | `transparent` with `#3e64ff` text/border | Outline-style hover                      |
| checkbox-accent     | `#fb8691`                                | Pink — checkbox fill when checked        |
| text-dark           | `rgba(0,0,0,0.8)`                        | Form text, placeholders                  |
| text-muted          | `rgba(0,0,0,0.3)`                        | Labels, forgot link                      |
| page-bg             | `#ffffff`                                | Section behind modal                     |
| modal-bg            | `#ffffff`                                | Modal content background                 |
| modal-shadow        | `0px 10px 34px -15px rgba(0,0,0,0.24)`   | Subtle drop shadow on modal              |
| modal-border        | `none`                                   | Borderless modal content                 |
| modal-max-width     | `450px`                                  | `modal-dialog max-width`                 |
| close-btn-size      | `40px × 40px`                            | Absolute top-right, no background color  |
| heading-font        | Poppins (Google Fonts, wght 300–900)     | Loaded via `@font-face` in preview       |
| form-control-height | `52px`                                   | Input/button height                      |
| form-control-radius | `5px`                                    | Input border radius                      |
| form-control-border | `1px solid rgba(0,0,0,0.1)`              | Default border                           |
| form-focus-border   | `1px solid #3e64ff`                      | Focus state border color                 |
| btn-radius          | `40px`                                   | Pill-shaped buttons (all .btn)           |
| btn-font-size       | `15px`                                   | Button text size                         |
| label-transform     | uppercase, `12px`                        | Form labels                              |
| social-icon-size    | `50px × 50px`                            | Circular social login icons              |
| social-icon-bg      | `#ffffff`                                | White circle background                  |
| social-icon-border  | `1px solid rgba(0,0,0,0.05)`             | Subtle border on social icons            |
| social-icon-color   | `rgba(0,0,0,0.8)`                        | Icon color default                       |
| social-icon-hover   | `#3e64ff`                                | Icon color on hover                      |
| forgot-link-color   | `rgba(0,0,0,0.3)`                        | Underlined "already a member" link       |

### Font

- **Google Font:** Poppins, weights 300, 400, 500, 600, 700, 800, 900
- Fallback: Arial, sans-serif
- Loaded in `index.html` via `<link>` to Google Fonts

## Section Structure (from preview HTML)

1. **Page Section** (`ftco-section`)
   - White background, centered container
   - Contains the `h2` title ("Modal 05") and a "Launch" button (`btn-primary`)

2. **Modal Overlay** (Bootstrap `.modal.fade`)
   - `.modal-dialog-centered` — vertically and horizontally centered
   - `.modal-content` — 450px max-width, no border, box-shadow, white background

3. **Modal Header** (close button)
   - 40x40px square, absolutely positioned top-right, z-index 1
   - White "x" icon (ionicons `ion-ios-close`)

4. **Modal Body** (single column)
   - h3: "Create Your Account" — centered, mb-3
   - Social icons row: three circular 50x50px buttons (Twitter, Facebook, Instagram)
   - Signup form (`.signup-form`):
     - **Full Name** input (placeholder "John Doe")
     - **Email Address** input (placeholder "johndoe@gmail.com")
     - **Password** input (type=password, placeholder "Password")
     - **"Sign Up"** submit button — pill-shaped, `#3e64ff` background, white text
     - **"I'm already a member"** link — underlined, muted color

## Gherkin Scenarios

### Scenario: Page loads with launch button

- Given the user visits the template page
- When the page finishes loading
- Then a centered "Launch" button is visible on a white background
- And the heading text is displayed above the button

### Scenario: Modal opens on button click

- Given the page is loaded
- When the user clicks the "Launch" button
- Then a centered modal overlay appears
- And the modal contains a signup form

### Scenario: Modal displays heading

- Given the modal is open
- Then a "Create Your Account" heading is visible at the top
- And the heading is centered

### Scenario: Modal displays social login icons

- Given the modal is open
- Then three social icons are displayed (Twitter, Facebook, Instagram)
- And each icon is a 50x50px white circle with a subtle border
- And the icons are centered horizontally

### Scenario: Signup form has all fields

- Given the modal is open
- Then a "Full Name" text input is visible with placeholder "John Doe"
- And an "Email Address" text input is visible with placeholder "johndoe@gmail.com"
- And a "Password" password input is visible with placeholder "Password"
- And a "Sign Up" submit button is visible

### Scenario: Sign Up button styling

- Given the modal is open
- Then the "Sign Up" button has a `#3e64ff` background
- And the button text is white
- And the button has a pill shape (border-radius 40px)
- And the button spans the full width of the form

### Scenario: Already a member link

- Given the modal is open
- Then an "I'm already a member" link is visible below the form
- And the link is underlined and muted colored

### Scenario: Modal closes on close button click

- Given the modal is open
- When the user clicks the close button (x icon)
- Then the modal overlay disappears
- And the page content is visible again

### Scenario: Modal closes on backdrop click

- Given the modal is open
- When the user clicks outside the modal (on the backdrop)
- Then the modal overlay disappears

### Scenario: Form inputs have focus state

- Given the modal is open
- When the user clicks on an input field
- Then the input border changes to `#3e64ff`
- And no box shadow is applied

### Scenario: Modal is responsive

- Given the user is on a mobile viewport (width < 768px)
- When the modal opens
- Then the modal content stacks vertically
- And all form fields remain accessible

## Verification Checklist

- [ ] Modal is centered on the page (both axes)
- [ ] Modal max-width is 450px
- [ ] Modal has no visible border, has box shadow
- [ ] Close button is 40x40px, positioned top-right
- [ ] "Create Your Account" heading is centered
- [ ] Three social icons displayed as 50x50px white circles
- [ ] Full Name input with "John Doe" placeholder
- [ ] Email Address input with "johndoe@gmail.com" placeholder
- [ ] Password input with "Password" placeholder
- [ ] "Sign Up" button is pill-shaped, #3e64ff bg, white text
- [ ] "I'm already a member" link is underlined, muted
- [ ] Brand primary #3e64ff used consistently (btn, focus borders)
- [ ] Font is Poppins (Google Fonts)
- [ ] Labels are uppercase, 12px, muted color
- [ ] Modal closes on x click and backdrop click
- [ ] Responsive: content stacks on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
