# Template: RegBox (Registration Form)

## Purpose

Recreation of **Colorlib Reg Form V26** — a clean, centered account registration form with a light blue full-viewport background and decorative corner images.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-26/
- **Live preview:** https://colorlib.com/etc/regform/colorlib-regform-26/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-26.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

| Token | Value | Source |
|-------|-------|--------|
| `--brand-bg` | `#accffe` | Wrapper background (light sky blue) |
| `--brand-primary` | `#99ccff` | Button background, input focus border |
| `--brand-primary-hover` | `rgba(52, 152, 253, 0.25)` | Button sweep animation overlay |
| `--color-heading` | `#333` | h3 heading text |
| `--color-input-text` | `#666` | Input typed text |
| `--color-placeholder` | `#999` | Input placeholders |
| `--color-icon` | `#333` | Left-aligned input icons |
| `--color-form-bg` | `#fff` | Form card background |
| `--color-input-border` | `#e6e6e6` | Input bottom border (inactive) |
| `--color-input-focus` | `#accffe` | Input bottom border on focus |
| `--font-body` | Mulish (Google Fonts, successor to Muli) | Body text, placeholders |
| `--font-heading` | Mulish 600 (SemiBold) | h3, input values, button |
| `--shadow-card` | `0px 0px 10px 0px rgba(0, 0, 0, 0.2)` | Form card box shadow |
| `--radius-card` | none (sharp corners) | Form card has no border-radius |
| `--btn-height` | 49px | Register button |
| `--btn-text-transform` | uppercase | Button + heading |
| `--btn-letter-spacing` | 2px | Button text |
| `--heading-letter-spacing` | 3px | h3 heading |

## Gherkin Requirements

### Scenario: Page renders with full-viewport light blue background
- **Given** a user visits the RegBox page
- **Then** the page background should be `#accffe` (light sky blue)
- **And** the content should be vertically and horizontally centered

### Scenario: Form card displays with white background and shadow
- **Given** the page has loaded
- **Then** a white card should be visible in the center
- **And** the card should have a box shadow of `0px 0px 10px 0px rgba(0, 0, 0, 0.2)`
- **And** the card should have no border-radius (sharp corners)

### Scenario: Heading displays correctly
- **Given** the form card is visible
- **Then** the heading should read "New Account?"
- **And** the heading should be uppercase with letter-spacing 3px
- **And** the heading should use SemiBold weight (600)

### Scenario: Username field renders with icon and placeholder
- **Given** the form is displayed
- **Then** a text input should be visible with placeholder "Username"
- **And** a user icon should be positioned to the left of the input
- **And** the input should have a bottom border of `#e6e6e6`

### Scenario: Phone Number field renders with icon and placeholder
- **Given** the form is displayed
- **Then** a text input should be visible with placeholder "Phone Number"
- **And** a phone icon should be positioned to the left of the input

### Scenario: Email field renders with icon and placeholder
- **Given** the form is displayed
- **Then** a text input should be visible with placeholder "Mail"
- **And** an email icon should be positioned to the left of the input

### Scenario: Password field renders with icon and placeholder
- **Given** the form is displayed
- **Then** a password input should be visible with placeholder "Password"
- **And** a lock icon should be positioned to the left of the input

### Scenario: Confirm Password field renders with icon and placeholder
- **Given** the form is displayed
- **Then** a password input should be visible with placeholder "Confirm Password"
- **And** a lock icon should be positioned to the left of the input

### Scenario: Register button displays with correct styling
- **Given** the form is displayed
- **Then** a button labeled "Register" should be visible
- **And** the button should have a `#99ccff` background
- **And** the button text should be uppercase with letter-spacing 2px
- **And** the button should have a height of 49px

### Scenario: Button hover animation
- **Given** the Register button is visible
- **When** a user hovers over the button
- **Then** a semi-transparent blue overlay should sweep in from the left

### Scenario: Input focus state
- **Given** the form is displayed
- **When** a user focuses on any input field
- **Then** the bottom border should change to `#accffe`

### Scenario: Decorative images appear on desktop
- **Given** the viewport is wider than 767px
- **Then** a decorative image should appear at the bottom-left of the form card
- **And** a decorative image should appear at the bottom-right of the form card

### Scenario: Responsive layout on mobile
- **Given** the viewport is 767px or narrower
- **Then** the form should take full width
- **And** the decorative images should be hidden
- **And** the card shadow should be removed
- **And** the background color should be removed

### Scenario: Form accessibility
- **Given** the form is displayed
- **Then** each input should have an associated label or aria-label
- **And** the form should be keyboard-navigable
- **And** the button should be focusable

## Verification Checklist

- [ ] Full-viewport centered layout with `#accffe` background
- [ ] White card form with box-shadow, no border-radius
- [ ] "New Account?" heading (uppercase, letter-spacing 3px, SemiBold)
- [ ] 5 input fields with icons: Username, Phone, Email, Password, Confirm Password
- [ ] Bottom border styling (`#e6e6e6` default, `#accffe` on focus)
- [ ] Register button (`#99ccff` bg, uppercase, letter-spacing 2px, 49px height)
- [ ] Button hover sweep animation (semi-transparent overlay)
- [ ] Decorative images at bottom-left and bottom-right (desktop only)
- [ ] Responsive: full-width form on mobile, hidden decorations, no shadow
- [ ] Mulish font (Google Fonts) for body and heading weights
- [ ] Accessibility: labels/aria-labels, keyboard navigation
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
