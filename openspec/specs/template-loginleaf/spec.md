# Template: LoginLeaf (Login Form)

## Purpose

Recreation of ColorLib "Login Form 08" (`login-form-08`).
Preview: https://preview.colorlib.com/theme/login-form-08/ (404 as of 2026-09-23 — design tokens extracted from screenshot).
Source page: https://colorlib.com/wp/template/login-form-08/

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Design Tokens

- **Primary color (mint/teal):** #4ecdc4 — used on Log In button, checkbox accent, illustration accents
- **Background:** #ffffff (white) — entire page
- **Text primary:** #333333 (dark gray, heading)
- **Text secondary:** #999999 (light gray, subtext)
- **Input border:** #dddddd (light gray, bottom-border-only inputs)
- **Button text:** #ffffff (white on mint background)
- **Social Facebook:** #3b5998
- **Social Twitter:** #1da1f2
- **Social Google:** #dd4b39
- **Font family:** "Roboto", sans-serif (clean sans-serif, inferred from screenshot)
- **Button radius:** rounded (~4px or rounded-md)
- **Social button shape:** circular (rounded-full)
- **Input style:** bottom-border only (no background, no full border box), placeholder text light gray
- **Layout:** Two-column split — form left (~50%), illustration right (~50%)
- **Illustration:** Flat-style vector art with devices (laptop, tablet, phone), decorative leaf/plant elements in teal/mint tones, character figure

## Requirements

### Requirement: Two-column split layout

The page SHALL display a two-column layout with the login form on the left and a decorative illustration on the right. The page background SHALL be white.

#### Scenario: Two-column layout visible on desktop

- **WHEN** the user loads the LoginLeaf page
- **THEN** the page displays a two-column layout
- **AND** the left column contains the login form
- **AND** the right column contains a decorative illustration

#### Scenario: Full-viewport white background

- **WHEN** the user loads the LoginLeaf page
- **THEN** the page background is white
- **AND** the form and illustration are vertically centered

### Requirement: Form header

The form SHALL display a heading "Sign In to LoginLeaf" in dark bold text and a subtext paragraph in light gray below it.

#### Scenario: Heading text

- **WHEN** the user loads the LoginLeaf page
- **THEN** the heading reads "Sign In to LoginLeaf"
- **AND** the heading is in dark text, bold, large font

#### Scenario: Subtext description

- **WHEN** the user loads the LoginLeaf page
- **THEN** a subtext paragraph appears below the heading
- **AND** the subtext is in light gray

### Requirement: Form fields

The form SHALL include Username and Password input fields with bottom-border-only styling and placeholder text.

#### Scenario: Username field

- **WHEN** the user loads the LoginLeaf page
- **THEN** a "Username" input field is visible
- **AND** the input has a bottom border only (no full box border)
- **AND** the placeholder text reads "Username" in light gray

#### Scenario: Password field

- **WHEN** the user loads the LoginLeaf page
- **THEN** a "Password" input field is visible
- **AND** the input has a bottom border only (no full box border)
- **AND** the placeholder text reads "Password" in light gray
- **AND** the input type is password (masked characters)

### Requirement: Remember me and forgot password

The form SHALL include a "Remember me" checkbox with mint accent and a "Forgot Password" link right-aligned on the same row.

#### Scenario: Remember me checkbox

- **WHEN** the user loads the LoginLeaf page
- **THEN** a "Remember me" checkbox is visible
- **AND** the checkbox accent color is mint/teal (#4ecdc4)

#### Scenario: Forgot password link

- **WHEN** the user loads the LoginLeaf page
- **THEN** a "Forgot Password" link is visible
- **AND** the link is right-aligned on the same row as the checkbox

### Requirement: Login button

The form SHALL include a full-width "Log In" button with mint/teal background, white text, and rounded corners.

#### Scenario: Primary login button

- **WHEN** the user loads the LoginLeaf page
- **THEN** a "Log In" button is visible
- **AND** the button background is mint/teal (#4ecdc4)
- **AND** the button text is white
- **AND** the button is full-width within the form
- **AND** the button has rounded corners

### Requirement: Social login

The form SHALL display "or sign in with" text and three circular social login buttons (Facebook, Twitter, Google) with correct brand colors.

#### Scenario: Social login section

- **WHEN** the user loads the LoginLeaf page
- **THEN** text "or sign in with" appears below the Log In button

#### Scenario: Social buttons

- **WHEN** the user loads the LoginLeaf page
- **THEN** three circular social buttons are visible
- **AND** the first button is Facebook (blue #3b5998)
- **AND** the second button is Twitter (blue #1da1f2)
- **AND** the third button is Google (red #dd4b39)
- **AND** each button displays the respective social icon

### Requirement: Illustration

The right column SHALL display a decorative illustration using a placeholder image.

#### Scenario: Decorative illustration

- **WHEN** the user loads the LoginLeaf page
- **THEN** a decorative illustration is displayed in the right column
- **AND** the illustration is hidden on mobile viewports

### Requirement: Responsive behavior

The two-column layout SHALL stack vertically on mobile viewports.

#### Scenario: Mobile layout

- **WHEN** the user resizes the viewport to mobile width
- **THEN** the two-column layout stacks vertically
- **AND** the illustration appears above or below the form
- **AND** the form remains fully functional

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock link

- **WHEN** the user loads the LoginLeaf page
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text reads "More templates at Component Dock"
- **AND** the link opens in a new tab

## Verification Checklist

- [ ] Two-column layout with form left, illustration right
- [ ] White page background
- [ ] Bold dark heading "Sign In to LoginLeaf"
- [ ] Gray subtext paragraph
- [ ] Username and Password inputs with bottom-border-only styling
- [ ] "Remember me" checkbox with mint accent
- [ ] "Forgot Password" link right-aligned
- [ ] Full-width mint green (#4ecdc4) "Log In" button with rounded corners
- [ ] "or sign in with" text
- [ ] Three circular social buttons (Facebook, Twitter, Google) with correct brand colors
- [ ] Flat-style decorative illustration in right column
- [ ] Responsive stacking on mobile viewports
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
