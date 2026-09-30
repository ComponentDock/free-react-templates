# Template: SignupFlint (Signup Form / Registration)

## Purpose

Recreation of ColorLib **Signup Form 12** (`https://colorlib.com/wp/template/signup-form-12/`).
Preview: `https://preview.colorlib.com/theme/signup-form-12/` (UNREACHABLE — 404; design tokens captured from screenshot).

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a centered-card registration page with a "Hello!" greeting, a user avatar icon with a golden badge, four underline-style input fields (Full Name, Email Address, Password, Confirm Password), a full-width golden "Sign Up" button, a social login section with circular Facebook and Twitter icons, and a "Sign In" link at the bottom. The page has a light gray background with the title "Sign Up #01" displayed above the card.

## Design Tokens

Extracted from the screenshot (preview unreachable — tokens derived from visual inspection):

| Token                     | Value                          | Notes                                          |
| ------------------------- | ------------------------------ | ---------------------------------------------- |
| Body font                 | `Poppins`, sans-serif          | Clean geometric sans-serif                     |
| Heading font              | `Poppins`, sans-serif, 600w    | Bold for "Hello!" heading                      |
| Page body background      | `#f5f5f5`                      | Light warm gray behind the form card           |
| Card background           | `#ffffff`                      | White card for the form                        |
| Card shadow               | `0 2px 20px rgba(0,0,0,0.08)` | Subtle drop shadow on card                     |
| Card border-radius        | `12px`                         | Rounded corners                                |
| Card padding              | `40px`                         | Generous internal padding                      |
| Page title color          | `#333333`                      | Dark gray, "Sign Up #01" above card            |
| Heading color ("Hello!")  | `#333333`                      | Dark gray, bold                                |
| Subtitle color            | `#999999`                      | Gray for "Please signup to continue"           |
| Label color               | `#999999`                      | Gray for field labels                          |
| Input border              | `#e0e0e0`                      | Bottom border only (underline style)           |
| Input background          | `transparent`                  | No visible input background                    |
| Placeholder text color    | `#cccccc`                      | Light gray placeholder                         |
| Primary button color      | `#c5b358`                      | Golden/olive — "Sign Up" button                |
| Primary button hover      | `#b3a24e`                      | Darker golden on hover                         |
| Button border-radius      | `4px`                          | Slight rounding                                |
| Button text color         | `#ffffff`                      | White text                                     |
| Avatar circle background  | `#e0e0e0`                      | Light gray circle for user icon                |
| Avatar icon color         | `#999999`                      | Gray person icon                               |
| Avatar badge color        | `#c5b358`                      | Golden/olive checkmark badge                   |
| Facebook icon background  | `#3b5998`                      | Facebook brand dark blue                       |
| Twitter icon background   | `#1da1f2`                      | Twitter brand light blue                       |
| Social icon size          | `40px` diameter                | Circular social login icons                    |
| Divider text color        | `#999999`                      | Gray for "or" and "Signup with"                |
| Sign In link color        | `#c5b358`                      | Golden/olive link                              |
| "Already member" text     | `#999999`                      | Gray body text                                 |

## Visual Design

From the screenshot (https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-12.jpg):

A centered-card registration page:

- **Page background:** Light gray (#f5f5f5) filling the entire viewport.
- **Page title:** "Sign Up #01" displayed above the card in dark gray, centered horizontally.
- **Card:** White, centered vertically and horizontally, with rounded corners (~12px) and a subtle box shadow.
- **Card contents (top to bottom):**
  1. "Hello!" heading — bold, dark gray, left-aligned
  2. "Please signup to continue" subtitle — gray, smaller text
  3. User avatar icon — circular light gray circle with a person silhouette icon and a small golden/olive checkmark badge at the bottom-right
  4. Full Name field — label "Full Name" in gray, underline-style input with placeholder "John Doe"
  5. Email Address field — label "Email Address" in gray, underline-style input with placeholder "johndoe@gmail.com"
  6. Password field — label "Password" in gray, underline-style input with placeholder "Password"
  7. Confirm Password field — label "Confirm Password" in gray, underline-style input with placeholder "Confirm Password"
  8. "Sign Up" button — full-width, golden/olive (#c5b358) background, white text
  9. "or" text divider — gray, centered
  10. "Signup with" text — gray, centered
  11. Social icons — Facebook (dark blue circle) and Twitter (light blue circle), centered, side by side
  12. "I'm already a member! Sign In" text — gray body with golden "Sign In" link
- **Footer:** Minimal — site name + Component Dock link (replacing any ColorLib attribution)
- **Overall feel:** Clean, minimal, friendly. The golden accent color gives warmth. The underline-only inputs and circular social icons create a modern, lightweight aesthetic. No split-screen or background image.

## Requirements

### Requirement: Page layout with centered card

The page SHALL display a centered white card on a light gray background, with a page title above the card.

#### Scenario: Page renders centered card
- **GIVEN** the user visits the signup page
- **WHEN** the page loads
- **THEN** a white card is centered vertically and horizontally on a light gray (#f5f5f5) background
- **AND** the card has rounded corners and a subtle shadow

#### Scenario: Page title displayed above card
- **GIVEN** the signup card is visible
- **WHEN** the user views the page
- **THEN** a "Sign Up #01" title is displayed above the card in dark gray

### Requirement: Card header with avatar

The card SHALL display a "Hello!" heading, a subtitle, and a user avatar icon with a golden badge.

#### Scenario: Heading and subtitle present
- **GIVEN** the signup card is visible
- **WHEN** the user views the card
- **THEN** a "Hello!" heading is displayed in bold dark gray
- **AND** a "Please signup to continue" subtitle is displayed below in gray

#### Scenario: Avatar icon displayed
- **GIVEN** the signup card is visible
- **WHEN** the user views the card
- **THEN** a circular light gray avatar icon with a person silhouette is displayed
- **AND** a small golden checkmark badge is visible on the avatar

### Requirement: Form fields with underline style

The form SHALL contain four input fields: Full Name, Email Address, Password, and Confirm Password. Each field SHALL use an underline-only border style (bottom border, no full box border).

#### Scenario: Full Name field
- **GIVEN** the signup form is displayed
- **WHEN** the user views the form
- **THEN** a "Full Name" label is displayed in gray
- **AND** a text input with bottom border styling is present
- **AND** the placeholder text is "John Doe"

#### Scenario: Email Address field
- **GIVEN** the signup form is displayed
- **WHEN** the user views the form
- **THEN** an "Email Address" label is displayed in gray
- **AND** a text input with bottom border styling is present
- **AND** the placeholder text is "johndoe@gmail.com"

#### Scenario: Password field
- **GIVEN** the signup form is displayed
- **WHEN** the user views the form
- **THEN** a "Password" label is displayed in gray
- **AND** a password input with bottom border styling is present
- **AND** the placeholder text is "Password"

#### Scenario: Confirm Password field
- **GIVEN** the signup form is displayed
- **WHEN** the user views the form
- **THEN** a "Confirm Password" label is displayed in gray
- **AND** a password input with bottom border styling is present
- **AND** the placeholder text is "Confirm Password"

### Requirement: Sign Up button

The form SHALL display a full-width golden "Sign Up" button below the input fields.

#### Scenario: Button displayed
- **GIVEN** the signup form is displayed
- **WHEN** the user views the form
- **THEN** a full-width button with text "Sign Up" is visible
- **AND** the button has a golden/olive background color
- **AND** the button text is white

### Requirement: Social login section

The form SHALL display a social login section below the Sign Up button, with a divider text and circular social icons.

#### Scenario: Divider and social text
- **GIVEN** the signup form is displayed
- **WHEN** the user views below the Sign Up button
- **THEN** an "or" text divider is displayed
- **AND** a "Signup with" text is displayed below the divider

#### Scenario: Social login icons
- **GIVEN** the social login section is visible
- **WHEN** the user views the social icons
- **THEN** a Facebook icon (dark blue circle) is displayed
- **AND** a Twitter icon (light blue circle) is displayed
- **AND** the icons are circular and centered side by side

### Requirement: Sign In link

The card SHALL display a "Sign In" link at the bottom for existing members.

#### Scenario: Sign In link present
- **GIVEN** the signup card is visible
- **WHEN** the user views the bottom of the card
- **THEN** the text "I'm already a member!" is displayed in gray
- **AND** a "Sign In" link is displayed in golden/olive color

### Requirement: Responsive layout

The template SHALL be responsive and work on both desktop and mobile viewports.

#### Scenario: Desktop layout
- **GIVEN** the user views the page on a desktop viewport (>= 768px)
- **WHEN** the page loads
- **THEN** the card is centered with a fixed max-width (~450px)

#### Scenario: Mobile layout
- **GIVEN** the user views the page on a mobile viewport (< 768px)
- **WHEN** the page loads
- **THEN** the card takes the full viewport width with appropriate padding

## Verification Checklist

- [ ] Page renders centered white card on light gray background
- [ ] "Sign Up #01" title displayed above card
- [ ] "Hello!" heading and subtitle present
- [ ] User avatar icon with golden badge displayed
- [ ] Four underline-style input fields present (Full Name, Email, Password, Confirm Password)
- [ ] Full-width golden "Sign Up" button present
- [ ] "or" divider and "Signup with" text present
- [ ] Facebook and Twitter circular social icons present
- [ ] "I'm already a member! Sign In" link present at bottom
- [ ] Responsive layout works on mobile and desktop
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to Component Dock
- [ ] Spec file at `openspec/specs/template-signupflint/spec.md`
