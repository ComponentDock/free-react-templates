# Template: SignupPulse (Signup Form)

## Purpose

Recreation of ColorLib **Signup Form 09** (`signup-form-09`).
Preview URL: https://preview.colorlib.com/theme/signup-form-09/
ColorLib page: https://colorlib.com/wp/template/signup-form-09/

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.
A centered single-column signup form in a white card with pill-shaped CTA, social login, and a "Sign In" link.

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|---|---|---|
| Font family | `Roboto` (300, 400) via Google Fonts | Body + headings |
| Brand primary | `#38d39f` (mint/teal green) | CTA button bg, focus ring, checkbox |
| Primary hover | `#29bb8a` | Button hover |
| Text dark | `#212529` | Body text, button label |
| Text muted | `#6c757d` | Labels, hint text |
| Input text | `#495057` | Form field text |
| Border light | `#ced4da` | Input border (default state) |
| Focus border | `#a0ead1` | Input focus border |
| Card background | `#fff` | Form card background |
| Page background | light gray (from body) | Page body |
| Focus ring | `rgba(56,211,159,0.25)` | Input focus glow |
| Button border-radius | `30px` (pill) | `.btn-pill` class |
| Card shadow | `0 2px 3px 0 rgba(0,0,0,0.1)` | Form card drop shadow |
| Card padding | `60px` (30px on mobile) | Internal card spacing |
| Facebook | `#3b5998` | Social icon bg |
| Twitter/X | `#1da1f2` | Social icon bg |
| Google | `#ea4335` | Social icon bg |
| Social icon size | 50px circle (border-radius: 50%) | Social login buttons |

## Layout

- **Single centered column**: form sits inside a white `.form-block` card
- Card has subtle drop shadow: `0 2px 3px 0 rgba(0,0,0,0.1)`
- Card padding: 60px desktop, 30px mobile
- No illustration — this is a form-only page
- Content area centered with `cl-justify-content-center`

## Sections (1:1 order)

1. **Page container** — light background
2. **Centered card** — white background, box-shadow, max-width ~600px
3. **Card contents**:
   - **Heading**: `<h3>Sign Up</h3>` — Roboto, 1.75rem, weight 500
   - **Subtext**: paragraph, muted gray, lorem ipsum
   - **Form fields** (standard bordered inputs, NOT bottom-border-only):
     - Name (text input) — has `.first` class for top border-radius
     - Email (text input) — also has `.first` class
     - Password (password input)
     - Re-type Password (password input) — has `.last` class for bottom border-radius
   - **Terms checkbox row**:
     - Left: checkbox (default checked) + "Agree our Terms and Conditions" caption
     - Right: "Sign In" link (positioned with `ml-auto`)
   - **Register button**: full-width pill-shaped (`border-radius: 30px`), teal #38d39f, white text
   - **"or register with"** divider text (centered)
   - **Social login row**: three circular icon buttons (Facebook, Twitter, Google) — centered

## Key differences from Signup Form 08

- **No illustration** — single-column card layout only
- **Pill-shaped button** (border-radius 30px vs 4px)
- **White card with shadow** instead of flat form on gray
- **Standard bordered inputs** (full border, not bottom-border-only)
- **"Sign In" link** next to checkbox (instead of full terms text with links)
- **Centered layout** (form-block centered in container)

## Gherkin scenarios

### Scenario: Page renders with correct heading
  Given the user navigates to the signup page
  Then the heading "Sign Up" is visible

### Scenario: Form displays all four fields
  Given the user views the form
  Then a "Name" text input is present
  And an "Email" text input is present
  And a "Password" password input is present
  And a "Re-type Password" password input is present

### Scenario: Terms checkbox defaults to checked
  Given the user views the form
  Then the terms checkbox is checked by default
  And the caption reads "Agree our Terms and Conditions"

### Scenario: Sign In link is visible
  Given the user views the form
  Then a "Sign In" link is displayed next to the checkbox

### Scenario: Register button is pill-shaped and teal
  Given the user views the form
  Then the "Register" button spans the full card width
  And the "Register" button has a pill shape (border-radius: 30px)
  And the "Register" button has a teal (#38d39f) background

### Scenario: Social login buttons are visible
  Given the user views the form
  Then three social login buttons are displayed (Facebook, Twitter, Google)
  And they are centered horizontally

### Scenario: Form card has shadow
  Given the user views the form
  Then the form card has a subtle drop shadow

### Scenario: Mobile responsive layout
  Given the user views the page on a mobile viewport
  Then the card padding is reduced to 30px

## Verification checklist

- [ ] Font loaded: Roboto (weights 300, 400) via Google Fonts
- [ ] Form card: white bg, box-shadow, 60px padding (30px mobile)
- [ ] Brand color #38d39f used for button, focus ring, checkbox
- [ ] Form inputs: standard full-border style (not bottom-border-only)
- [ ] Register button: pill-shaped (border-radius 30px), full-width, teal
- [ ] "Sign In" link visible next to checkbox
- [ ] Social icons: 50px circles, correct brand colors, centered
- [ ] Terms checkbox: custom styled, defaults checked, teal when checked
- [ ] Responsive: card padding reduces on mobile
- [ ] No illustration panel (unlike Form 08)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage
