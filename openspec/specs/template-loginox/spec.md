# Template: Loginox (Login Form)

## Purpose

Recreation of ColorLib "Login Form V20" (slug: `login-form-20`).

- Preview URL: `https://preview.colorlib.com/theme/bootstrap/login-form-20/`
- ColorLib source: `https://colorlib.com/wp/template/login-form-20/`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-20-1.jpg`
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from live preview CSS (`css/style.css`):

| Token                      | Value                                                 | Usage                                                                |
| -------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| Font family                | Lato (300, 400, 700)                                  | Body, headings, form labels                                          |
| Brand color (primary)      | `#fbceb5` (peach/salmon)                              | `.bg-primary`, link color, focus border, checkbox color, submit bg   |
| Text color                 | `#ffffff` (white)                                     | Body text, inputs, headings (over dark background)                   |
| Link color                 | `#fbceb5`                                             | Anchor elements, "Forgot Password" link                              |
| Page background            | Full-viewport background image with dark overlay      | `body.img { background-image: url(images/bg.jpg) }`                  |
| Dark overlay               | `rgba(0,0,0,0.3)`                                     | `body.img::after` pseudo-element                                     |
| Card background            | Transparent (no card box)                             | `.login-wrap` has no explicit background                              |
| Card text color            | `rgba(255,255,255,0.9)`                               | `.login-wrap { color }`                                              |
| Card heading (h3)          | font-weight 300, white, text-center                   | "Have an account?"                                                   |
| Form input background      | `rgba(255,255,255,0.08)`                              | `.form-control` transparent glass-like inputs                        |
| Form input border          | 1px solid transparent → `rgba(255,255,255,0.4)` on focus | Subtle glass morphism                                            |
| Form input height          | 50px                                                  | `.form-control { height: 50px }`                                     |
| Form input border-radius   | 40px (pill shape)                                     | `.form-control { border-radius: 40px }`                              |
| Placeholder color          | `rgba(255,255,255,0.8)`                               | Light white placeholders                                            |
| Submit button background   | `#fbceb5` (peach)                                     | `.btn.btn-primary`                                                   |
| Submit button text color   | `#000` (black)                                        | `.btn.btn-primary { color: #000 }`                                   |
| Submit button border       | 1px solid `#fbceb5`                                   | `.btn.btn-primary { border }`                                        |
| Submit button border-radius| 40px (pill shape)                                     | `.btn { border-radius: 40px }`                                       |
| Submit button font         | 15px, uppercase                                       | `.btn { font-size: 15px; text-transform: uppercase }`                |
| Submit button hover        | transparent bg, peach border, peach text               | Inverse effect on hover                                              |
| Social button background   | `#ffffff` (white)                                     | `.social a { background: #fff }`                                     |
| Social button text color   | `#000` (black)                                        | `.social a { color: #000 }`                                          |
| Social button border       | 1px solid `rgba(255,255,255,0.4)`                     | `.social a { border }`                                               |
| Social button hover        | `#000` bg, `#fff` text, `#000` border                 | Inverse effect on hover                                              |
| Social button layout       | Full-width block, rounded                             | `.social a { width: 100%; display: block; rounded }`                 |
| Eye toggle icon color      | `rgba(255,255,255,0.9)`                               | `.field-icon { color }`                                              |
| Checkbox color             | `#fbceb5` (peach)                                     | `.checkbox-primary`                                                  |
| Section padding            | `7em 0`                                               | `.ftco-section`                                                      |
| Link transition            | 0.3s all ease                                          | `a { transition: .3s all ease }`                                     |

## Layout structure

Single-section full-viewport page with background image + dark overlay:

1. **Full-viewport section** with background image (cover, centered) and dark semi-transparent overlay.
2. **Centered content** (col-md-6, col-lg-4 — narrow column):
   - **Title**: "Login #20" heading, centered, 28px, white, font-weight 400
   - **Login area** (`.login-wrap`):
     - "Have an account?" subheading (h3, font-weight 300, white, centered)
     - **Form** (`.signin-form`):
       - Username input (pill-shaped, glass-like, transparent bg)
       - Password input (pill-shaped, glass-like) with eye toggle icon
       - Submit button "Sign In" (pill-shaped, peach bg, black text)
       - "Remember Me" checkbox (checked by default) + "Forgot Password" link (right-aligned)
     - Divider: "— Or Sign In With —"
     - Social login buttons: Facebook + Twitter (full-width white blocks, stacked)

## Requirements

### Requirement: Full-viewport background with dark overlay

The template SHALL display a full-viewport background image with a semi-transparent dark overlay.

#### Scenario: Background image covers viewport

- **WHEN** the page loads
- **THEN** a background image covers the entire viewport (background-size: cover, centered)
- **AND** a dark overlay (rgba(0,0,0,0.3)) covers the background

### Requirement: Centered narrow login column

The template SHALL center a narrow column (max-width ~400px) containing the login content.

#### Scenario: Content is vertically and horizontally centered

- **WHEN** the page loads
- **THEN** the login content is centered within the viewport
- **AND** the column width is approximately 400px (col-md-6 col-lg-4)

### Requirement: Title heading

The template SHALL display a title heading above the login form.

#### Scenario: Title is visible

- **WHEN** the page loads
- **THEN** a heading "Loginox" is displayed, centered, white, 28px, font-weight 400

### Requirement: Subheading "Have an account?"

The login area SHALL display a subheading above the form.

#### Scenario: Subheading is visible

- **WHEN** the page loads
- **THEN** the text "Have an account?" is displayed, centered, white, font-weight 300

### Requirement: Glass-like form inputs

The form SHALL contain pill-shaped, semi-transparent inputs that match the background aesthetic.

#### Scenario: Username input renders with glass style

- **WHEN** the page loads
- **THEN** a username text input with placeholder "Username" is visible
- **AND** the input has a pill shape (border-radius: 40px)
- **AND** the input has a semi-transparent background (rgba(255,255,255,0.08))
- **AND** the input text and placeholder are white

#### Scenario: Password input with eye toggle

- **WHEN** the page loads
- **THEN** a password input with placeholder "Password" is visible
- **AND** an eye icon is positioned to the right of the password field
- **WHEN** the user clicks the eye icon
- **THEN** the password field type changes to "text" (showing the password)
- **WHEN** the user clicks the eye icon again
- **THEN** the password field type changes back to "password"

#### Scenario: Input focus styling

- **WHEN** the user focuses on an input
- **THEN** the border becomes `rgba(255,255,255,0.4)` (subtle white border)
- **AND** no box-shadow is applied

### Requirement: Pill-shaped submit button

The form SHALL contain a full-width pill-shaped submit button with peach background.

#### Scenario: Submit button renders

- **WHEN** the page loads
- **THEN** a "Sign In" submit button is visible
- **AND** the button has peach background (`#fbceb5`)
- **AND** the button text is black and uppercase
- **AND** the button has a pill shape (border-radius: 40px)
- **AND** the button is full-width within the form

#### Scenario: Submit button hover effect

- **WHEN** the user hovers over the submit button
- **THEN** the background becomes transparent
- **AND** the border and text become peach (`#fbceb5`)

### Requirement: Remember Me checkbox and Forgot Password link

The form SHALL display a "Remember Me" checkbox (checked by default) and a "Forgot Password" link.

#### Scenario: Checkbox and link are visible

- **WHEN** the page loads
- **THEN** a "Remember Me" checkbox is visible and checked by default
- **AND** a "Forgot Password" link is visible (right-aligned, peach color)

### Requirement: Social login divider and buttons

The template SHALL display a divider and social login buttons below the form.

#### Scenario: Divider and social buttons are visible

- **WHEN** the page loads
- **THEN** a divider text "— Or Sign In With —" is displayed, centered, white
- **AND** a "Facebook" button is visible (full-width, white background, black text)
- **AND** a "Twitter" button is visible (full-width, white background, black text)
- **AND** both social buttons have rounded corners

#### Scenario: Social button hover effect

- **WHEN** the user hovers over a social button
- **THEN** the background becomes black
- **AND** the text becomes white

### Requirement: Form submission prevents default

The form SHALL prevent default browser submission when submitted.

#### Scenario: Form submit is intercepted

- **WHEN** the user submits the form
- **THEN** the default form submission is prevented

### Requirement: Footer links to Component Dock

Every template footer MUST link to `https://www.componentdock.com/` branded as "Component Dock".

#### Scenario: Footer link is present

- **WHEN** the page loads
- **THEN** a footer link to "https://www.componentdock.com/" with text "More templates at Component Dock" is visible

## Verification checklist

- [ ] Lato font loaded (300, 400, 700)
- [ ] Brand color #fbceb5 used for submit button, links, checkbox
- [ ] Full-viewport background image with dark overlay
- [ ] Centered narrow column (~400px max)
- [ ] Glass-like inputs: pill shape, transparent bg, white text
- [ ] Submit button: peach (#fbceb5), black text, pill shape, uppercase
- [ ] Social buttons: white bg, black text, full-width, rounded
- [ ] Social button hover: inverse (black bg, white text)
- [ ] Password toggle works (show/hide via eye icon)
- [ ] Remember Me checkbox checked by default
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME: loginox.free.componentdock.com
