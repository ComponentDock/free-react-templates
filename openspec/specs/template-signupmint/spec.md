# Template: SignupMint (Signup Form)

## Purpose

Recreation of ColorLib **Signup Form 08** (`signup-form-08`).
Preview URL: https://preview.colorlib.com/theme/signup-form-08/
ColorLib page: https://colorlib.com/wp/template/signup-form-08/

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.
A single-page signup form with a two-column split layout: form on the left, illustration on the right.

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|---|---|---|
| Font family | `Roboto` (300, 400) via Google Fonts | Body + headings |
| Brand primary | `#38d39f` (mint/teal green) | CTA button bg, focus ring, checked checkbox |
| Primary hover | `#29bb8a` | Button hover |
| Text dark | `#212529` | Body text, button label |
| Text muted | `#6c757d` | Labels, placeholder hint |
| Text light | `#b3b3b3` | Paragraph copy |
| Input text | `#495057` | Form field text color |
| Border light | `#ccc` | Input bottom border |
| Background | `#f8fafb` | Page body background |
| Focus ring | `rgba(56,211,159,0.25)` | Form input focus glow |
| Checkbox checked | `#38d39f` | Checked state background |
| Facebook | `#3b5998` | Social icon bg |
| Twitter/X | `#1da1f2` | Social icon bg |
| Google | `#ea4335` | Social icon bg |
| Button border-radius | `0.25rem` (4px) | All buttons |
| Social icon shape | 50px circle (border-radius: 50%) | Social login buttons |

## Layout

- **Two-column split**: left half = form, right half = illustration (SVG)
- On mobile: stacks vertically (form on top, illustration below)
- Content area has `7rem` top/bottom padding (centered vertically)
- Container max-width: 1140px (Bootstrap-like breakpoints)

## Sections (1:1 order)

1. **Page container** — full-width background `#f8fafb`
2. **Split layout** — two `cl-col-md-6` columns
3. **Right column (illustration)** — SVG file-sync illustration (use `https://picsum.photos/seed/signupmint-illust/600/600` as placeholder)
4. **Left column (form contents)** — centered within an `cl-col-md-8` inner column
   - **Heading**: `<h3>Sign Up</h3>` — Roboto, 1.75rem, weight 500
   - **Subtext**: paragraph below heading, muted color
   - **Form fields** (bottom-border-only style):
     - Name (text input)
     - Email (email input)
     - Password (password input)
     - Re-type Password (password input)
   - Each label is absolutely positioned, floats above input when filled
   - First group has `border-top-left-radius: 7px; border-top-right-radius: 7px`
   - Last group has `border-bottom-left-radius: 7px; border-bottom-right-radius: 7px`
   - **Terms checkbox** with caption: "Creating an account means you're okay with our Terms and Conditions and our Privacy Policy."
   - **Register button**: full-width teal `#38d39f`, 54px height, white text on hover
   - **"or register using"** muted divider text
   - **Social login row**: three circular icon buttons (Facebook, Twitter, Google) — 50px diameter, centered

## Gherkin scenarios

### Scenario: Page renders with correct heading
  Given the user navigates to the signup page
  Then the heading "Sign Up" is visible

### Scenario: Form displays all four fields
  Given the user views the form
  Then a "Name" text input is present
  And an "Email" email input is present
  And a "Password" password input is present
  And a "Re-type Password" password input is present

### Scenario: Terms checkbox defaults to checked
  Given the user views the form
  Then the terms checkbox is checked by default

### Scenario: Register button is full-width teal
  Given the user views the form
  Then the "Register" button spans the full form width
  And the "Register" button has a teal (#38d39f) background

### Scenario: Social login buttons are visible
  Given the user views the form
  Then three social login buttons are displayed (Facebook, Twitter, Google)

### Scenario: Illustration panel is visible on desktop
  Given the user views the page on a desktop viewport (>= 768px)
  Then the illustration is displayed to the right of the form

### Scenario: Mobile responsive layout
  Given the user views the page on a mobile viewport (< 768px)
  Then the form and illustration stack vertically

## Verification checklist

- [ ] Font loaded: Roboto (weights 300, 400) via Google Fonts
- [ ] Page background: #f8fafb
- [ ] Brand color #38d39f used for button, focus ring, checkbox
- [ ] Form inputs: bottom-border-only style (no full border), transparent background
- [ ] Labels float above inputs when filled (position absolute + transform)
- [ ] Register button: 54px height, full-width, teal bg, white text on hover
- [ ] Social icons: 50px circles, correct brand colors (#3b5998, #1da1f2, #ea4335)
- [ ] Terms checkbox: custom styled, defaults checked, teal when checked
- [ ] Responsive: stacks vertically below 768px
- [ ] Illustration placeholder: picsum.photos with seed `signupmint-illust`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage (lines, functions, branches, statements)
