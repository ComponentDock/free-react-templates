# Template: PeekView (Bootstrap Modal / Sign-Up Modal)

## Purpose

Recreation of ColorLib **Modal 05** (`https://colorlib.com/wp/template/modal-05/`).
Preview: `https://preview.colorlib.com/theme/bootstrap/modal-05/`.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a centered sign-up modal popup with a simple layout: a white page section
with a heading and "Launch" button, and a centered modal dialog containing a
"Create Your Account" heading, social media icons (Twitter, Facebook, Instagram),
a three-field sign-up form (Full Name, Email, Password), a "Sign Up" submit
button, and a "I'm already a member" link. The close button uses an ionicons
"×" icon.

## Design Tokens

Extracted from `css/style.css` (preview) and HTML structure:

| Token                | Value                                      | Notes                                  |
|----------------------|--------------------------------------------|----------------------------------------|
| brand-primary        | `#3e64ff`                                  | Blue — `.btn.btn-primary` override     |
| brand-primary-hover  | `#0069d9`                                  | Darker blue on hover                   |
| text-dark            | `#212529`                                  | Body text color                        |
| text-muted           | `rgba(0,0,0,0.8)`                         | Form input text                        |
| page-bg              | `#ffffff`                                  | White page background                  |
| section-bg           | `#ffffff`                                  | `.ftco-section` background             |
| modal-shadow         | `0px 10px 34px -15px rgba(0,0,0,0.24)`    | Subtle drop shadow on modal            |
| modal-border         | `none`                                     | Borderless modal content               |
| modal-radius         | `0`                                        | Sharp corners (no border-radius)       |
| modal-max-width      | `450px`                                    | `.modal-dialog max-width`              |
| close-btn-color      | `#000`                                     | Black "×" icon                         |
| close-btn-size       | auto (padding default)                     | Standard Bootstrap close button        |
| heading-font         | Poppins (weights 300–900)                  | Loaded via `@font-face` in preview     |
| heading-size         | `24px` (h2), `20px` (h3)                  | Page heading + modal heading           |
| form-label-color     | `#212529`                                  | Form label text                        |
| form-input-height    | `52px`                                     | `.form-control` height                 |
| form-input-radius    | `5px`                                      | `.form-control` border-radius          |
| social-icon-bg       | `#fff`                                     | Social icon circle background          |
| social-icon-border   | `1px solid rgba(0,0,0,0.05)`              | Subtle border on social icons          |
| social-icon-size     | `50px × 50px`                              | Circle diameter                        |
| social-icon-hover    | `#3e64ff`                                  | Brand blue on hover                    |
| cta-text             | `Sign Up`                                  | Submit button label                    |
| cta-bg               | `#3e64ff`                                  | Same as brand-primary                  |
| cta-color            | `#fff`                                     | White text                             |
| cta-radius           | `5px`                                      | Rounded corners                        |
| forgot-link-color    | brand-primary                              | "I'm already a member" link            |

### Font

- **Google Font:** Poppins, weights 300, 400, 500, 600, 700, 800, 900
- Fallback: system sans-serif stack
- Loaded in `index.html` via `<link>` to Google Fonts

## Section Structure (from preview HTML)

1. **Page Section** (`ftco-section`)
   - White background, centered container
   - Flex-centered vertically within the row
   - Contains:
     - h2 heading: "Modal 05" → rename to "PeekView" or "Sign Up"
     - "Launch" button (`btn btn-primary py-3 px-4`)

2. **Modal Overlay** (Bootstrap `.modal.fade`)
   - `.modal-dialog-centered` — vertically and horizontally centered
   - `.modal-content` — 450px max-width, no border, box-shadow
   - Fade-in animation (0.3s ease-out transform)

3. **Modal Header** (close button)
   - Standard Bootstrap `.close` button
   - ionicons `ion-ios-close` icon (× character)
   - Absolute top-right position

4. **Modal Body**
   - Padding: `p-4 py-5 p-md-5`
   - Centered text block:
     - h3: "Create Your Account" — centered, mb-3
     - Social media icons row:
       - Twitter (ion-logo-twitter)
       - Facebook (ion-logo-facebook)
       - Instagram (ion-logo-instagram)
       - 50×50px circles, white bg, subtle border, brand-blue on hover
     - Form (`.signup-form`):
       - Full Name input (text, placeholder "John Doe")
       - Email Address input (text, placeholder "johndoe@gmail.com")
       - Password input (password, placeholder "Password")
       - "Sign Up" submit button (full-width, brand-primary bg, rounded)
       - "I'm already a member" link (centered, brand-primary color)

## Gherkin Scenarios

### Scenario: Page loads with launch button
- Given the user visits the template page
- When the page finishes loading
- Then a centered "Launch" button is visible on a white background
- And the heading text is displayed above the button

### Scenario: Modal opens on button click
- Given the page is loaded
- When the user clicks the "Launch" button
- Then a centered modal dialog appears
- And the modal has a semi-transparent backdrop overlay
- And the modal body shows "Create Your Account" heading

### Scenario: Modal shows sign-up form
- Given the modal is open
- Then a Full Name input field is visible with placeholder "John Doe"
- And an Email Address input field is visible with placeholder "johndoe@gmail.com"
- And a Password input field is visible with placeholder "Password"
- And a "Sign Up" submit button is visible

### Scenario: Social media icons are visible
- Given the modal is open
- Then Twitter, Facebook, and Instagram icon links are visible
- And each icon is displayed in a 50×50px circular container

### Scenario: Modal closes on close button click
- Given the modal is open
- When the user clicks the "×" close button
- Then the modal disappears
- And the backdrop overlay is removed

### Scenario: Modal closes on backdrop click
- Given the modal is open
- When the user clicks outside the modal content
- Then the modal disappears

### Scenario: Modal closes on Escape key
- Given the modal is open
- When the user presses the Escape key
- Then the modal disappears

### Scenario: "I'm already a member" link is visible
- Given the modal is open
- Then a link with text "I'm already a member" is visible below the form

### Scenario: Form inputs are interactive
- Given the modal is open
- When the user types into the Full Name input
- Then the input value updates with the typed text
- And the same behavior applies to Email and Password inputs

### Scenario: Responsive layout
- Given the user views the template on a mobile device
- Then the page section remains vertically centered
- And the modal adjusts to fit the screen width

## Verification Checklist

- [ ] Page section renders with heading and launch button
- [ ] Modal opens on launch button click
- [ ] Modal displays "Create Your Account" heading
- [ ] Social media icons (Twitter, Facebook, Instagram) render correctly
- [ ] Sign-up form has Name, Email, Password fields
- [ ] "Sign Up" button is styled with brand-primary color
- [ ] "I'm already a member" link is visible and styled
- [ ] Close button (×) closes the modal
- [ ] Backdrop click closes the modal
- [ ] Escape key closes the modal
- [ ] Modal has correct max-width (450px)
- [ ] Modal has correct box-shadow
- [ ] Poppins font is loaded via Google Fonts
- [ ] Brand color (#3e64ff) is applied consistently
- [ ] Footer links to componentdock.com
- [ ] public/CNAME = peekview.free.componentdock.com
- [ ] package.json homepage = https://peekview.free.componentdock.com
- [ ] No ColorLib references in app code
