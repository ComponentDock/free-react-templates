# Template: Registrix (Registration Form)

## Purpose

Recreation of **ColorLib Reg Form V31** (`colorlib-regform-31`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-regform-31/
- **Preview URL:** https://colorlib.com/etc/regform/colorlib-regform-31/ (Note: `https://preview.colorlib.com/theme/colorlib-regform-31/` returns 404; falling back to demo page + screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-31.jpg
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library
- **Description:** A single-column centered registration form card on a teal background. The form contains Full Name, Email, Password fields (each with an inline icon), a "Register Account Form" heading with a blue underline bar, and a blue submit button with box shadow. Simpler than Reg Form V30 — no left info panel, no split layout.

## Design Tokens

| Token              | Value                          | Source               |
| ------------------ | ------------------------------ | -------------------- |
| Page background    | `#5eb2b3` (teal)              | `.page-content` CSS  |
| Card background    | `#ffffff` (white)              | `.form-v5-content`   |
| Card border-radius | `8px`                          | `.form-v5-content`   |
| Card width         | `670px`                        | `.form-v5-content`   |
| Card vertical margin | `175px 0`                    | `.form-v5-content`   |
| Font family        | Roboto (400, 700)              | `@font-face`         |
| Text color         | `#333333`                      | `.form-v5-content`   |
| Form padding       | `30px 45px`                    | `.form-detail`       |
| H2 heading         | font-weight 700, font-size 25px, center aligned | `.form-detail h2` |
| H2 underline bar   | `#3786bd` (blue), 50px wide, 2px height | `.form-detail h2::after` |
| Label              | font-size 18px, block display  | `.form-detail label` |
| Input border       | `1px solid #e5e5e5`            | `.form-detail input` |
| Input focus border | `1px solid #b3b3b3`            | `.form-detail input:focus` |
| Input border-radius| `4px`                          | `.form-detail input` |
| Input font         | Roboto, 400, 18px             | `.form-detail input` |
| Input padding      | `10.5px 15px`                  | `.form-detail input` |
| Icon color         | `#999999`                      | `.form-detail i`     |
| Placeholder color  | `#999999`, font-size 16px     | `::-webkit-input-placeholder` |
| Register button bg | `#3786bd` (blue)               | `.register`          |
| Register hover     | `#2f73a3` (darker blue)        | `.register:hover`    |
| Register btn text  | `#ffffff`, font-size 18px      | `.register`          |
| Register btn radius| `5px`                          | `.register`          |
| Register btn shadow| `0px 5px 15px rgba(0,0,0,0.2)` | `.register`          |
| Register btn width | `180px`                        | `.register`          |
| Register btn margin| `19px 0 40px`                  | `.register`          |
| Responsive break   | `767px` — card margin changes  | `@media`             |

## Section Structure (order)

1. **Full-page background** — Teal `#5eb2b3` page, flexbox centered
2. **Card container** — White 670px card, 8px radius, vertically centered
3. **Form** — Single-column form inside card with 30px 45px padding:
   - **Heading** — "Register Account Form" (h2, 700, 25px, centered) with blue underline bar (50px × 2px)
   - **Full Name row** — Label + text input with user icon (right-aligned)
   - **Your Email row** — Label + text input with envelope icon (right-aligned)
   - **Password row** — Label + password input with lock icon (right-aligned)
   - **Register button** — Blue submit button (180px wide, centered, box shadow)

## Gherkin Scenarios

### Scenario: Full-page layout
- **Given** the user navigates to the template
- **When** the page loads
- **Then** a teal `#5eb2b3` background fills the viewport
- **And** a white card is centered on the page

### Scenario: Card dimensions and styling
- **Given** the page has loaded
- **When** the card is visible
- **Then** the card is 670px wide with an 8px border-radius
- **And** the card has a white background

### Scenario: Form heading with underline bar
- **Given** the card is visible
- **When** the user views the form heading
- **Then** the heading reads "Register Account Form"
- **And** the heading is bold, 25px, centered
- **And** a blue `#3786bd` underline bar (50px wide, 2px tall) appears below the heading

### Scenario: Full Name input with icon
- **Given** the form is visible
- **When** the user views the Full Name field
- **Then** a label "Full Name" is displayed
- **And** a text input with placeholder "Your Name" is shown
- **And** a user icon (gray `#999`) is positioned to the right of the input

### Scenario: Email input with icon
- **Given** the form is visible
- **When** the user views the Your Email field
- **Then** a label "Your Email" is displayed
- **And** a text input with placeholder "Your Email" is shown
- **And** an envelope icon (gray `#999`) is positioned to the right of the input

### Scenario: Password input with icon
- **Given** the form is visible
- **When** the user views the Password field
- **Then** a label "Password" is displayed
- **And** a password input with placeholder "Your Password" is shown
- **And** a lock icon (gray `#999`) is positioned to the right of the input

### Scenario: Register button
- **Given** the form is visible
- **When** the user views the submit button
- **Then** a "Register" button is displayed centered below the form fields
- **And** the button has a blue `#3786bd` background
- **And** the button has white text at 18px font-size
- **And** the button is 180px wide with a 5px border-radius
- **And** the button has a box-shadow of `0px 5px 15px rgba(0,0,0,0.2)`

### Scenario: Register button hover state
- **Given** the Register button is visible
- **When** the user hovers over the Register button
- **Then** the button background changes to a darker blue `#2f73a3`

### Scenario: Input focus state
- **Given** the form fields are visible
- **When** the user focuses on an input field
- **Then** the input border changes to `1px solid #b3b3b3`

### Scenario: Form submission prevention
- **Given** the form is visible
- **When** the user fills in all fields and clicks Register
- **Then** the form does not cause a page reload

### Scenario: Responsive layout at small screens
- **Given** the user is on a device with viewport width ≤767px
- **When** the page loads
- **Then** the card has horizontal margin of 20px

## Verification Checklist

- [ ] Page background is teal `#5eb2b3`
- [ ] Card is white, 670px wide, 8px radius, centered
- [ ] Heading "Register Account Form" with blue underline bar
- [ ] Full Name input with user icon
- [ ] Your Email input with envelope icon
- [ ] Password input with lock icon
- [ ] Register button: blue `#3786bd`, 180px, 5px radius, shadow
- [ ] Hover: button bg changes to `#2f73a3`
- [ ] Focus: input border changes to `#b3b3b3`
- [ ] Font: Roboto (400, 700) via Google Fonts
- [ ] Icons: user, envelope, lock from lucide-react
- [ ] Form does not reload on submit
- [ ] Responsive: ≤767px margin adjusts
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app code
- [ ] 100% test coverage
- [ ] `npm run verify:app registrix` passes
