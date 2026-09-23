# Template: Loginveil (Login Form)

## Purpose

Recreation of ColorLib "Login Form 16" (slug: `login-form-16`).

- Preview URL: `https://preview.colorlib.com/theme/bootstrap/login-form-16/`
- ColorLib source: `https://colorlib.com/wp/template/login-form-16/`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-16-2.jpg`
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from live preview CSS (`css/style.css`):

| Token                      | Value                                                | Usage                                                      |
| -------------------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| Font family                | Lato (300, 400, 700)                                 | Body, headings, form labels                                |
| Brand color (primary)      | `#b96b9f` (purple-mauve)                             | `.bg-primary`, link color, focus border, social icon color |
| Page background            | `#f8f9fd` (light blue-gray)                          | `body { background }`                                      |
| Card background            | `#ffffff`                                            | `.login-wrap`                                              |
| Card shadow                | `0px 10px 34px -15px rgba(0,0,0,0.24)`               | `.login-wrap`                                              |
| Card border-radius         | `5px`                                                | `.login-wrap`                                              |
| Button (submit) background | `#17223b` (dark navy)                                | `.btn.btn-secondary`                                       |
| Button hover               | transparent bg, navy border, navy text               | Inverse on hover                                           |
| Input style                | Bottom-border only, no side/top borders, 48px height | `.form-control`                                            |
| Input border-bottom        | `1px solid rgba(0,0,0,0.1)`                          | Normal state                                               |
| Input focus                | border-color `#b96b9f`                               | Brand accent                                               |
| Social icons               | 40x40 circle, white bg, brand color icon             | `.social-icon`                                             |
| Section padding            | `7em 0`                                              | `.ftco-section`                                            |

## Layout structure

Single-section page. All content in one centered section:

1. **Title area**: centered heading "Loginveil".
2. **Login card** (white rounded box with shadow):
   - **Left half** (white background): "Sign In" heading + username input + password input with eye toggle icon.
   - **Right half** (purple-mauve `#b96b9f` background): submit button "Sign me in now" + "Remember Me" checkbox + "Forgot Password" link + "Or Sign In With" divider + Facebook/Twitter social icon buttons.
   - On mobile (<992px): halves stack vertically (full width each).

## Requirements

### Requirement: Split-screen login card layout

The template SHALL display a centered card with two halves side-by-side on desktop and stacked on mobile.

#### Scenario: Desktop shows split layout

- **WHEN** the viewport width is >= 992px
- **THEN** the left half (white) and right half (purple-mauve) are displayed side-by-side at 50% width each

#### Scenario: Mobile stacks halves vertically

- **WHEN** the viewport width is < 992px
- **THEN** both halves stack vertically at full width

### Requirement: Left half contains sign-in form

The left half SHALL contain a "Sign In" heading, a username text input, and a password input with an eye toggle icon.

#### Scenario: Username input is present

- **WHEN** the page loads
- **THEN** a text input with placeholder "Username" is visible

#### Scenario: Password input with toggle

- **WHEN** the page loads
- **THEN** a password input with placeholder "Password" is visible
- **AND** an eye icon button is beside the password field
- **WHEN** the user clicks the eye icon
- **THEN** the password field type changes to "text"
- **WHEN** the user clicks the eye icon again
- **THEN** the password field type changes back to "password"

### Requirement: Right half contains submit and social options

The right half SHALL contain a submit button, a "Remember Me" checkbox (checked by default), a "Forgot Password" link, a divider, and social login icons.

#### Scenario: Submit button and options are visible

- **WHEN** the page loads
- **THEN** a "Sign me in now" submit button with dark navy background is visible
- **AND** a "Remember Me" checkbox is checked by default
- **AND** a "Forgot Password" link is visible
- **AND** a divider text "Or Sign In With" is shown
- **AND** Facebook and Twitter social icon buttons are present

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
- [ ] Brand color #b96b9f used for bg-primary, links, focus, social icons
- [ ] Page background #f8f9fd
- [ ] Card: white, 5px radius, shadow, centered
- [ ] Split layout: left white, right purple-mauve
- [ ] Inputs: bottom-border only, 48px height
- [ ] Button: #17223b navy, inverse hover
- [ ] Social icons: 40x40 circles
- [ ] Password toggle works (show/hide)
- [ ] Remember Me checkbox checked by default
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME: loginveil.free.componentdock.com
