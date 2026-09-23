# Spec: LoginGuard — Dark-Center Card Login Form

## Purpose

Recreation of ColorLib Login Form 19 as LoginGuard — a centered dark-card login form template with warm peach background, circular avatar, underline-style inputs, and mauve accent button.

- Source: https://colorlib.com/wp/template/login-form-19/
- Preview: https://preview.colorlib.com/theme/login-form-19/ (404 — design captured from screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-19-1.jpg
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token                  | Value                            | Usage                                                              |
| ---------------------- | -------------------------------- | ------------------------------------------------------------------ |
| --color-page           | #F5C7A9                         | Full-viewport warm peach background                                |
| --color-card           | #141432                         | Dark navy card background                                          |
| --color-card-shadow    | 0 8px 30px rgba(0,0,0,0.18)     | Card elevation on peach background                                 |
| --color-primary        | #B598B0                         | Mauve/dusty-rose accent — button background                        |
| --color-primary-hover  | #A68BA1                         | Darker mauve hover state                                           |
| --color-ink-white      | #ffffff                         | Card headings, input text, button label                            |
| --color-caption        | #9A9AAE                         | Subtitle text, muted labels on card                                |
| --color-input-border   | rgba(255,255,255,0.3)           | Underline border on input fields                                   |
| --color-input-focus    | rgba(255,255,255,0.7)           | Underline border on focus                                          |
| --font-sans            | Poppins, sans-serif              | Primary font (clean geometric sans-serif)                          |

## Requirements

### Requirement: Centered dark-card login layout

The template SHALL render a centered dark navy card on a warm peach background. The card is vertically and horizontally centered in the viewport, with rounded corners and a subtle shadow.

#### Scenario: Desktop layout

- **WHEN** the user loads the page on a desktop viewport
- **THEN** a dark navy card is centered horizontally and vertically on a warm peach background

#### Scenario: Mobile layout

- **WHEN** the user loads the page on a mobile viewport
- **THEN** the card remains centered with appropriate padding and scales to fit

### Requirement: Page title above card

The template SHALL display "Login #09" text above the card, centered on the peach background, in dark text.

#### Scenario: Title is visible

- **WHEN** the user loads the page
- **THEN** "Login #09" text is visible above the card, centered, in a dark color

### Requirement: User avatar

The template SHALL display a circular user avatar at the top center of the card.

#### Scenario: Avatar is visible

- **WHEN** the user loads the page
- **THEN** a circular avatar image is visible at the top of the card, centered

#### Scenario: Avatar placeholder

- **WHEN** no real user photo is available
- **THEN** a placeholder image (e.g. from picsum.photos) is displayed inside the circular clip

### Requirement: Welcome heading

The template SHALL display "WELCOME" in white uppercase bold text below the avatar, centered on the card.

#### Scenario: Heading is visible

- **WHEN** the user loads the page
- **THEN** "WELCOME" is visible in white uppercase bold text, centered below the avatar

### Requirement: Subtitle text

The template SHALL display "Sign in by entering the information below" in muted text below the heading, centered.

#### Scenario: Subtitle is visible

- **WHEN** the user loads the page
- **THEN** the subtitle text is visible in a muted gray/lavender color, centered

### Requirement: Username input field

The template SHALL render a username input with a person icon on the left, placeholder text "Username", and an underline-style bottom border (no box border).

#### Scenario: Username input is visible

- **WHEN** the user loads the page
- **THEN** a username input is visible with a person icon, "Username" placeholder, and underline styling

#### Scenario: Username accepts input

- **WHEN** the user types "testuser" in the username field
- **THEN** the username field contains "testuser"

### Requirement: Password input field

The template SHALL render a password input with a lock icon on the left, placeholder text "Password", and an underline-style bottom border.

#### Scenario: Password input is visible

- **WHEN** the user loads the page
- **THEN** a password input is visible with a lock icon, "Password" placeholder, and underline styling

#### Scenario: Password accepts input

- **WHEN** the user types "secret123" in the password field
- **THEN** the password field contains "secret123" (masked)

### Requirement: Forgot Password link

The template SHALL display a "Forgot Password" link right-aligned below the password field, in a muted color.

#### Scenario: Forgot Password is visible

- **WHEN** the user loads the page
- **THEN** a "Forgot Password" link is visible, right-aligned below the password input

### Requirement: Submit button

The template SHALL render a full-width "Get Started" button with mauve background and white text, with rounded corners.

#### Scenario: Button is visible

- **WHEN** the user loads the page
- **THEN** a "Get Started" button is visible spanning the full card width, with mauve background and white text

#### Scenario: Button hover state

- **WHEN** the user hovers over the "Get Started" button
- **THEN** the button background darkens slightly

### Requirement: Sign Up link

The template SHALL display "Don't have an account?" text with a "SIGN UP" link below the submit button, centered.

#### Scenario: Sign Up prompt is visible

- **WHEN** the user loads the page
- **THEN** "Don't have an account?" text is visible below the button, with "SIGN UP" as a link

### Requirement: Component Dock footer

The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a link to https://www.componentdock.com/ is visible, labeled "Component Dock"

## Verification Checklist

- [ ] Page background is warm peach (#F5C7A9)
- [ ] Dark navy card centered with rounded corners and shadow
- [ ] "Login #09" title above card on peach background
- [ ] Circular avatar at top of card
- [ ] "WELCOME" heading in white uppercase
- [ ] Subtitle in muted color
- [ ] Username input with person icon and underline border
- [ ] Password input with lock icon and underline border
- [ ] "Forgot Password" link right-aligned
- [ ] Full-width "Get Started" button in mauve
- [ ] "Don't have an account? SIGN UP" text centered
- [ ] Footer links to Component Dock
- [ ] Responsive on mobile viewports
- [ ] Poppins font loaded via Google Fonts
