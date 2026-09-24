# Template: Gatepost (Login Form)

## Purpose

Recreation of ColorLib "Login Form V16" (slug: `login-form-v16`).

- Preview URL: `https://preview.colorlib.com/theme/login-form-v16/` (unreachable — falling back to screenshot)
- ColorLib source: `https://colorlib.com/wp/template/login-form-v16/`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v16.jpg`
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from original template structure and screenshot:

| Token                       | Value                                               | Usage                                              |
| --------------------------- | --------------------------------------------------- | -------------------------------------------------- |
| Font family                 | Poppins (300, 400, 500, 600)                        | Body, headings, form labels                        |
| Brand color (primary)       | `#e65c4a` (warm red-orange)                         | Submit button background, focus ring               |
| Text color                  | `#ffffff` (white)                                   | Body text, inputs, headings (over dark background) |
| Page background             | Full-viewport background image with dark overlay    | Background image with `bg-black/40` overlay        |
| Dark overlay                | `rgba(0,0,0,0.4)`                                   | Overlay div                                        |
| Card background             | `rgba(255,255,255,0.1)` with backdrop-blur          | Semi-transparent glass card                        |
| Card border-radius          | 16px (rounded-2xl)                                  | `.rounded-2xl`                                     |
| Form input background       | `rgba(255,255,255,0.1)`                             | Glass-like inputs                                  |
| Form input border           | 1px solid `rgba(255,255,255,0.2)`                   | Subtle glass border                                |
| Form input focus border     | `rgba(255,255,255,0.4)`                             | Focus state                                        |
| Form input border-radius    | 8px (rounded-lg)                                    | Input shape                                        |
| Form input padding          | 12px top/bottom, 40px left (icon space), 16px right | Comfortable input size                             |
| Icon color                  | `rgba(255,255,255,0.5)`                             | User/Lock icons in inputs                          |
| Placeholder color           | `rgba(255,255,255,0.4)`                             | Input placeholders                                 |
| Submit button background    | `#e65c4a` (warm red-orange)                         | Primary action                                     |
| Submit button text color    | `#ffffff` (white)                                   | Button label                                       |
| Submit button border-radius | 8px (rounded-lg)                                    | Button shape                                       |
| Submit button hover         | `#e65c4a` at 90% opacity                            | Hover darkening                                    |
| Section padding             | Full viewport (min-h-screen)                        | Login card centered vertically and horizontally    |
| Card shadow                 | `shadow-2xl`                                        | Elevated card effect                               |
| Card blur                   | `backdrop-blur-md`                                  | Glass morphism                                     |
| Subtitle color              | `rgba(255,255,255,0.7)`                             | "Please enter your credentials"                    |

## Layout structure

Single-section full-viewport page with background image + dark overlay:

```
┌─────────────────────────────────────────┐
│  Background Image (picsum.photos)       │
│  ┌─ Dark Overlay (bg-black/40) ───────┐ │
│  │                                     │ │
│  │    ┌─────────────────────┐          │ │
│  │    │  Welcome Back       │          │ │
│  │    │  Please enter your  │          │ │
│  │    │  credentials        │          │ │
│  │    │                     │          │ │
│  │    │  [👤 Username     ] │          │ │
│  │    │  [🔒 Password     ] │          │ │
│  │    │                     │          │ │
│  │    │  [    Sign In     ] │          │ │
│  │    └─────────────────────┘          │ │
│  │                                     │ │
│  │         Made with Component Dock    │ │
│  └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

## Requirements

### Requirement: Full-viewport background with dark overlay

The login page SHALL display a full-viewport background image with a dark semi-transparent overlay.

#### Scenario: Background renders correctly

- **WHEN** the user visits the Gatepost login page
- **THEN** a full-viewport background image is visible
- **AND** a dark overlay covers the background

### Requirement: Centered login card

The login form SHALL be displayed in a centered, semi-transparent card with backdrop blur.

#### Scenario: Login card is centered

- **WHEN** the page loads
- **THEN** a centered login card is displayed
- **AND** the card has a semi-transparent white background
- **AND** the card has rounded corners and shadow

### Requirement: Login form heading and subtitle

The login card SHALL display a heading and subtitle above the form fields.

#### Scenario: Heading and subtitle render

- **WHEN** the login card is displayed
- **THEN** a heading "Welcome Back" is visible
- **AND** a subtitle "Please enter your credentials" is visible

### Requirement: Username input with icon

The login form SHALL include a username input field with a user icon.

#### Scenario: Username input renders correctly

- **WHEN** the login form is displayed
- **THEN** a username input with placeholder "Username" is visible
- **AND** a User icon is displayed to the left of the input

### Requirement: Password input with icon

The login form SHALL include a password input field with a lock icon.

#### Scenario: Password input renders correctly

- **WHEN** the login form is displayed
- **THEN** a password input with placeholder "Password" is visible
- **AND** a Lock icon is displayed to the left of the input

### Requirement: Sign In button

The login form SHALL include a full-width Sign In button with the primary brand color.

#### Scenario: Sign In button renders

- **WHEN** the login form is displayed
- **THEN** a "Sign In" button is visible
- **AND** the button has a primary color background (#e65c4a)
- **AND** the button spans the full width of the card

### Requirement: Form submission

The login form SHALL handle form submission when both username and password are provided.

#### Scenario: Successful login

- **WHEN** the user enters a username and password
- **AND** clicks "Sign In"
- **THEN** the form submission is handled
- **AND** a success message is displayed

#### Scenario: Empty fields prevent submission

- **WHEN** the user clicks "Sign In" without entering credentials
- **THEN** the form is not submitted
- **AND** no success message is displayed

### Requirement: Component Dock footer

The page SHALL include a footer linking to Component Dock.

#### Scenario: Footer link renders

- **WHEN** the page loads
- **THEN** a "Made with Component Dock" link is visible in the footer
- **AND** the link points to https://www.componentdock.com/
