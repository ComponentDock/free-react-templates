# Template: Loginflux (Sign-Up Form)

## Purpose

Recreation of ColorLib "Login Form 13" (slug: `login-form-v13`).

- ColorLib source: `https://colorlib.com/wp/template/login-form-v13/`
- Preview URL: `https://preview.colorlib.com/theme/login-form-v13/` (404 — preview no longer available; design captured from screenshot)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v13.jpg`
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from screenshot (preview unavailable):

| Token                      | Value                                          | Usage                                                         |
| -------------------------- | ---------------------------------------------- | ------------------------------------------------------------- |
| Font family                | Sans-serif (system/Inter-like)                 | Body, headings, form labels, inputs                           |
| Brand gradient start       | `#9B59B6` (purple)                             | Left panel overlay, button gradient start                     |
| Brand gradient end         | `#E91E8C` (pink/magenta)                       | Left panel overlay, button gradient end                       |
| Page background            | `#ffffff` (white)                              | Right panel (form area)                                       |
| Photo overlay              | Purple→pink diagonal gradient at ~70% opacity  | Left panel image overlay                                      |
| Heading color              | `#1a1a1a` (near-black)                         | "Sign Up" heading                                             |
| Label color                | `#888888` (medium gray)                        | Field labels ("Full Name", "Email", etc.)                     |
| Input text color           | `#333333` (dark gray)                          | Field values                                                  |
| Input border-bottom        | `1px solid #e0e0e0` (light gray)               | Normal state                                                  |
| Input focus border         | `#9B59B6` (brand purple)                       | Active field bottom border                                     |
| Validation checkmark       | `#2ecc71` (green)                              | Checkmark icon on validated fields                            |
| Checkbox accent            | `#9B59B6` (brand purple)                       | Checked checkbox fill                                         |
| Button background          | `#9B59B6` → `#E91E8C` gradient (horizontal)   | "Sign Up" submit button                                       |
| Button border-radius       | `25px` (pill/rounded-full)                     | Submit button                                                 |
| Button text color          | `#ffffff` (white)                              | Submit button label                                           |
| "Sign in" link color       | `#333333` (dark gray)                          | "Sign in →" link text                                         |
| "Sign in" arrow            | Right arrow (→)                                | Inline after "Sign in" text                                   |
| "Terms of User" link color | `#9B59B6` (brand purple)                       | Hyperlink in checkbox text                                    |

## Layout structure

Full-page split-screen layout (two panels side by side):

1. **Left panel (~60% width)**: Background photo of a person using a tablet/laptop, with a diagonal purple→pink gradient overlay.
2. **Right panel (~40% width)**: White background, vertically centered sign-up form containing:
   - "Sign Up" heading (large, bold, dark)
   - Full Name field (label + input + bottom border)
   - Email field (label + input + bottom border + optional green checkmark)
   - Username field (label + input + bottom border + optional green checkmark)
   - Password field (label + input, masked, bottom border)
   - Repeat Password field (label + input, masked, bottom border)
   - Checkbox: "I agree to the Terms of User" (checked by default in screenshot)
   - "Sign Up" button (gradient, pill-shaped)
   - "Sign in →" link (right-aligned or bottom-right)

### Responsive behavior

- Desktop (>=992px): two panels side by side
- Tablet (768–991px): panels stack, left panel shorter, form below
- Mobile (<768px): full-width stacked, left panel may be minimal/cropped, form takes full width

## Requirements

### Requirement: Full-page split-screen layout

The template SHALL display a full-viewport-height split layout with a photo panel on the left and a form panel on the right.

#### Scenario: Desktop shows split layout

- **WHEN** the viewport width is >= 992px
- **THEN** the left photo panel occupies ~60% width and the right form panel occupies ~40% width
- **AND** both panels are full viewport height

#### Scenario: Mobile stacks panels vertically

- **WHEN** the viewport width is < 768px
- **THEN** the photo panel stacks above the form panel at full width
- **AND** the form panel scrolls independently if content overflows

### Requirement: Left panel displays background photo with gradient overlay

The left panel SHALL show a background photograph with a diagonal purple-to-pink gradient overlay.

#### Scenario: Gradient overlay renders correctly

- **WHEN** the page loads
- **THEN** the left panel displays a background image
- **AND** a semi-transparent gradient from purple (#9B59B6) to pink (#E91E8C) overlays the image diagonally

### Requirement: Sign-up form with five fields

The right panel SHALL contain a sign-up form with five labeled input fields.

#### Scenario: All five fields are present

- **WHEN** the page loads
- **THEN** the following fields are visible in order: Full Name, Email, Username, Password, Repeat Password
- **AND** each field has a label above and a bottom-border-only input

#### Scenario: Password fields are masked

- **WHEN** the user types in the Password or Repeat Password field
- **THEN** the input shows dots/asterisks (type="password")

### Requirement: Email and Username validation indicators

The form SHALL display a green checkmark icon next to Email and Username fields when the input is valid.

#### Scenario: Checkmark appears on valid input

- **WHEN** the user enters a valid email in the Email field
- **THEN** a green checkmark icon appears to the right of the input

#### Scenario: Checkmark appears on valid username

- **WHEN** the user enters a non-empty username in the Username field
- **THEN** a green checkmark icon appears to the right of the input

### Requirement: Terms agreement checkbox

The form SHALL include a checkbox labeled "I agree to the Terms of User" where "Terms of User" is a hyperlink.

#### Scenario: Checkbox is present and linked

- **WHEN** the page loads
- **THEN** a checkbox with label "I agree to the Terms of User" is visible below the Repeat Password field
- **AND** "Terms of User" is styled as a hyperlink (brand purple color)

### Requirement: Gradient submit button

The form SHALL include a "Sign Up" button with a purple-to-pink gradient background and pill-shaped border radius.

#### Scenario: Button renders with gradient

- **WHEN** the page loads
- **THEN** the "Sign Up" button is visible with a horizontal gradient from purple (#9B59B6) to pink (#E91E8C)
- **AND** the button has a large border-radius (~25px, pill shape)
- **AND** the button text is white

#### Scenario: Button hover state

- **WHEN** the user hovers over the "Sign Up" button
- **THEN** the button shows a subtle hover effect (slight opacity or brightness change)

### Requirement: Sign-in link

The form SHALL include a "Sign in →" text link below or beside the submit button.

#### Scenario: Sign-in link is present

- **WHEN** the page loads
- **THEN** a "Sign in" link with a right-arrow indicator is visible near the submit button

### Requirement: Responsive form inputs

Form inputs SHALL use bottom-border-only styling (no side or top borders) consistent with the design.

#### Scenario: Input styling matches design

- **WHEN** the page loads
- **THEN** all form inputs have only a bottom border (light gray, 1px solid)
- **AND** inputs are full-width within the form panel
- **AND** input text is dark gray, labels are medium gray

## Verification checklist

- [ ] Full-viewport split layout renders correctly at desktop widths
- [ ] Left panel shows background image with purple→pink diagonal gradient overlay
- [ ] Right panel is white with vertically centered form
- [ ] "Sign Up" heading is large, bold, and dark
- [ ] All five fields present: Full Name, Email, Username, Password, Repeat Password
- [ ] Password and Repeat Password fields mask input
- [ ] Green checkmark appears on valid Email and Username
- [ ] "I agree to the Terms of User" checkbox with linked text
- [ ] Gradient "Sign Up" button with pill shape
- [ ] "Sign in →" link present
- [ ] Bottom-border-only input styling
- [ ] Responsive: panels stack on mobile (<768px)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] Specs/docs only reference ColorLib source
