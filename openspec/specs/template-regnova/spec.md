# Template: RegNova (Registration Form)

## Purpose

Recreation of **ColorLib Regform 32** — a split-card registration form with a full-viewport blue gradient background, left-side portrait image, and right-side form panel.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-32/
- **Live preview:** https://preview.colorlib.com/theme/colorlib-regform-32/ (404 at time of prep — preview unavailable)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-32.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the screenshot analysis (preview was unreachable):

| Token | Value | Notes |
|---|---|---|
| Background gradient start | `#5bc0de` (light teal) | Top-left of viewport |
| Background gradient end | `#1a3a5c` (dark navy blue) | Bottom-right of viewport |
| Card background | `#ffffff` | White panel, subtle box shadow |
| Card shadow | `0 10px 40px rgba(0,0,0,0.2)` | Soft drop shadow |
| Heading color | `#333333` | Dark gray, bold, ~28px |
| Form label color | `#999999` | Light gray placeholder/label text |
| Input border (default) | `#e0e0e0` | Bottom border only, 1px |
| Input border (focus) | `#5bc0de` | Matches background accent |
| Button background | `#f5a623` (orange) | Bright orange CTA |
| Button text | `#ffffff` | White |
| Button border-radius | `4px` | Slight rounding |
| Button padding | `10px 30px` | Horizontal emphasis |
| Font family | `"Poppins", sans-serif` | Clean geometric sans-serif |
| Section below card | `#f8f9fa` (light gray) | Footer/base area |

## Requirements

### Requirement: Full-viewport gradient background

The page SHALL render a full-height viewport background with a diagonal blue gradient.

#### Scenario: Gradient covers the full viewport

- **WHEN** I visit the RegNova page
- **THEN** I see a full-viewport background with a diagonal gradient
- **AND** the gradient transitions from light teal (#5bc0de) at the top-left to dark navy (#1a3a5c) at the bottom-right
- **AND** the content is centered vertically and horizontally on this background

### Requirement: Split-card registration form

The page SHALL display a centered card divided into two halves: an image on the left and a form on the right.

#### Scenario: Card is centered on the gradient

- **WHEN** I visit the RegNova page
- **THEN** I see a white card centered on the gradient background
- **AND** the card has a box shadow for depth
- **AND** the card is approximately 800px wide and 500px tall (responsive)

#### Scenario: Left half displays a portrait image

- **WHEN** I visit the RegNova page
- **THEN** I see a portrait-style image occupying the left half of the card
- **AND** the image fills the full height of the card
- **AND** a placeholder image is used (picsum.photos)

### Requirement: Registration form heading

The right side of the card SHALL display a "Register Form" heading.

#### Scenario: Heading is visible

- **WHEN** I visit the RegNova page
- **THEN** I see a heading with text "Register Form"
- **AND** the heading uses a bold weight (700)
- **AND** the heading color is dark gray (#333333)

### Requirement: Form fields

The form SHALL contain four input fields: Your Name, Email Address, Password, and Confirm Password.

#### Scenario: All four fields are rendered

- **WHEN** I visit the RegNova page
- **THEN** I see a text input labeled "Your Name"
- **AND** I see an email input labeled "Email Address"
- **AND** I see a password input labeled "Password"
- **AND** I see a password input labeled "Confirm Password"

#### Scenario: Fields have underline-style borders

- **WHEN** I visit the RegNova page
- **THEN** each form field has a bottom border only (no full border box)
- **AND** the border color is light gray (#e0e0e6) by default
- **AND** the border color changes to teal on focus
- **AND** placeholder text is light gray (#999999)

### Requirement: Register button

The form SHALL contain a Register button with orange background and white text.

#### Scenario: Register button is visible and styled

- **WHEN** I visit the RegNova page
- **THEN** I see a button labeled "Register"
- **AND** the button background color is orange (#f5a623)
- **AND** the button text is white
- **AND** the button has slightly rounded corners (border-radius ~4px)
- **AND** the button is centered horizontally within the form panel

#### Scenario: Register button has hover effect

- **WHEN** I hover over the Register button
- **THEN** the button background darkens slightly (opacity or darken)

### Requirement: Footer section below card

A light gray section SHALL appear below the card area.

#### Scenario: Footer area is visible

- **WHEN** I visit the RegNova page
- **THEN** I see a light gray (#f8f9fa) section below the gradient background
- **AND** the section contains a "Made with Component Dock" footer link to https://www.componentdock.com/

## Verification Checklist

- [ ] Full-viewport gradient background renders correctly (light teal → dark navy)
- [ ] White card is centered on the gradient with box shadow
- [ ] Left half shows placeholder portrait image filling the card height
- [ ] Right half shows "Register Form" heading in bold dark gray
- [ ] Four form fields render with underline-style bottom borders
- [ ] Placeholder text is light gray for each field
- [ ] Orange "Register" button is centered with white text
- [ ] Button has hover darkening effect
- [ ] Footer section is light gray with Component Dock link
- [ ] Responsive layout: card stacks vertically on small screens
- [ ] No ColorLib references in any app source files
- [ ] `public/CNAME` contains `regnova.free.componentdock.com`
- [ ] `package.json` homepage is `https://regnova.free.componentdock.com`
