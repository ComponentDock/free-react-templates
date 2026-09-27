# Template: Enrollwell (Registration Form)

## Purpose

Recreation of the ColorLib "Colorlib Regform 24" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `colorlib-regform-24`
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-24/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-24/ (404 — preview unreachable; design based on screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-24.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/enrollwell`
- **Surge target:** `enrollwell.free.componentdock.com`

## Design Tokens

Extracted from the screenshot (preview unreachable):

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#F0939B` (pink/salmon) | Right panel background, heading color, button text |
| Brand light | `#F4A8AD` | Lighter pink variant |
| White | `#FFFFFF` | Left panel image area, button background, input backgrounds |
| Input border | `#E0E0E0` (light gray) | Form field borders |
| Input bg | `#FFFFFF` | Input field backgrounds |
| Button bg | `#FFFFFF` | CTA button background |
| Button text | `#F0939B` | CTA button text color |
| Button border-radius | `25px` (pill shape) | Rounded CTA button |
| Social icon border | `#FFFFFF` (semi-transparent) | Circular social icon outlines |
| Social icon text | `#FFFFFF` | Social icon color |
| Font heading | Decorative/handwritten (e.g. `Pacifico` or `Satisfy`) | "SIGN UP" heading |
| Font body | Sans-serif (e.g. `Poppins` or `Open Sans`) | Form labels, inputs, button text |
| Layout | 50/50 split-screen | Left = photo, Right = form panel |

## Section Structure (in page order)

### 1. Split-Screen Layout (full viewport)
- **Left half:** Full-height background photo (child/person image) — use placeholder via `picsum.photos`
- **Right half:** Pink/salmon background panel containing:
  - "SIGN UP" heading (decorative font, white or pink text, with wavy underline decoration)
  - Registration form with 3 fields: Username, E-mail, Password
  - "CREATE MY ACCOUNT" button (white, pill-shaped, pink text)
  - "Sign up with social platforms" text
  - 4 social icon buttons in a row (Facebook, Instagram, Twitter, Tumblr)

### 2. No navbar — single-page registration form
### 3. No footer — self-contained form page

## Gherkin Requirements

### Scenario: Full-page split layout renders
  Given the user visits the Enrollwell page
  Then the viewport is split into two equal halves
  And the left half displays a background image
  And the right half displays a pink/salmon background

### Scenario: Sign Up heading is visible
  Given the user sees the right panel
  Then the heading "SIGN UP" is displayed
  And the heading uses a decorative/handwritten font
  And a wavy underline decoration appears below the heading

### Scenario: Registration form fields render
  Given the user sees the form panel
  Then a "Username" input field is visible
  And an "E-mail" input field is visible
  And a "Password" input field is visible
  And all inputs have white backgrounds with light gray borders

### Scenario: Create My Account button renders
  Given the user sees the form
  Then a "CREATE MY ACCOUNT" button is visible
  And the button has a white background
  And the button has pink text matching the brand color
  And the button has pill-shaped rounded corners

### Scenario: Social sign-up section renders
  Given the user sees the form panel
  Then "Sign up with social platforms" text is visible
  And 4 circular social icon buttons are displayed (Facebook, Instagram, Twitter, Tumblr)
  And the icons have white outlines on the pink background

### Scenario: Form fields accept input
  Given the user focuses the Username field
  When the user types a username
  Then the text appears in the Username field
  And the same behavior works for E-mail and Password fields

### Scenario: Button interaction
  Given the user fills in all form fields
  When the user clicks "CREATE MY ACCOUNT"
  Then the button registers the click (no navigation in static template)

## Verification Checklist

- [ ] Split-screen layout fills viewport height
- [ ] Left panel shows placeholder background image
- [ ] Right panel has pink/salmon background (#F0939B)
- [ ] "SIGN UP" heading uses decorative font
- [ ] Wavy underline decoration below heading
- [ ] 3 form fields (Username, E-mail, Password) with labels
- [ ] Input fields have white bg, light borders, proper padding
- [ ] "CREATE MY ACCOUNT" button: white bg, pink text, pill shape
- [ ] "Sign up with social platforms" label text
- [ ] 4 social icon buttons (Facebook, Instagram, Twitter, Tumblr)
- [ ] Social icons are circular with white outlines
- [ ] Responsive: stacks vertically on mobile (left image above, form below)
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos placeholders
