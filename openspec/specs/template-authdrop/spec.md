# Template: AuthDrop (Login Form)

## Purpose

Recreation of ColorLib "Login Form 10" (`login-form-10`).
Preview: https://preview.colorlib.com/theme/login-form-10/ (404 as of 2026-09-23 — design tokens extracted from screenshot).
Source page: https://colorlib.com/wp/template/login-form-10/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-10-2.jpg

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Design Tokens

- **Background:** #f5f5f5 (very light gray) — full page background
- **Card background:** #ffffff (white) — login form card
- **Card shadow:** subtle box-shadow (~0 4px 20px rgba(0,0,0,0.08))
- **Primary accent (mint/teal):** #4ecdc4 — used on Log In button, checkbox check
- **Text primary:** #333333 (dark gray, heading)
- **Text secondary:** #999999 (light gray, subtitle, placeholders)
- **Input border:** #dddddd (light gray, bottom-border-only inputs)
- **Button text:** #ffffff (white on mint background)
- **Social Facebook:** #3b5998
- **Social Twitter:** #1da1f2
- **Social Google:** #dd4b39
- **Font family:** "Roboto", sans-serif (clean sans-serif, inferred from screenshot aesthetic)
- **Button radius:** rounded-full or rounded (~25px, pill shape on Log In button)
- **Social button shape:** full-width rounded bars (not circular), stacked vertically
- **Input style:** bottom-border only (no background, no full border box), placeholder text light gray
- **Layout:** Two-column split — social login left (~40%), login form card right (~40%), centered with gap
- **Divider:** "— or —" text between the two columns, centered vertically
- **Social section:** "or sign in with" label above three stacked full-width social buttons (Facebook, Twitter, Google) with white icons

## Requirements

### Requirement: Two-column split layout

The page SHALL display a two-column layout with social login on the left and the login form card on the right. The page background SHALL be light gray.

#### Scenario: Two-column layout visible on desktop

- **WHEN** the user loads the AuthDrop page
- **THEN** the page displays a two-column layout
- **AND** the left column contains the social login section
- **AND** the right column contains the login form card
- **AND** a "— or —" divider appears between the two columns

#### Scenario: Full-viewport light gray background

- **WHEN** the user loads the AuthDrop page
- **THEN** the page background is light gray (#f5f5f5)
- **AND** both columns are vertically centered in the viewport

### Requirement: Login form card

The right column SHALL display a white card with subtle shadow containing the login form.

#### Scenario: Card appearance

- **WHEN** the user loads the AuthDrop page
- **THEN** the login form is inside a white card
- **AND** the card has a subtle box shadow
- **AND** the card has padding around the form content

#### Scenario: Form header

- **WHEN** the user loads the AuthDrop page
- **THEN** the card heading reads "Sign In to AuthDrop"
- **AND** the heading is in dark text (#333333), bold, large font
- **AND** a subtext paragraph appears below the heading in light gray (#999999)

### Requirement: Form fields

The form SHALL include Username and Password input fields with bottom-border-only styling and placeholder text.

#### Scenario: Username field

- **WHEN** the user loads the AuthDrop page
- **THEN** a "Username" input field is visible
- **AND** the input has a bottom border only (no full box border)
- **AND** the placeholder text reads "Username" in light gray

#### Scenario: Password field

- **WHEN** the user loads the AuthDrop page
- **THEN** a "Password" input field is visible
- **AND** the input has a bottom border only (no full box border)
- **AND** the placeholder text reads "Password" in light gray
- **AND** the input type is password (masked characters)

### Requirement: Remember me and forgot password

The form SHALL include a "Remember me" checkbox with mint accent and a "Forgot Password" link right-aligned on the same row.

#### Scenario: Remember me checkbox

- **WHEN** the user loads the AuthDrop page
- **THEN** a "Remember me" checkbox is visible
- **AND** the checkbox accent color is mint/teal (#4ecdc4)
- **AND** the checkbox is checked by default

#### Scenario: Forgot password link

- **WHEN** the user loads the AuthDrop page
- **THEN** a "Forgot Password" link is visible
- **AND** the link is right-aligned on the same row as the checkbox

### Requirement: Login button

The form SHALL include a full-width "Log In" button with mint/teal background, white text, and pill-shaped rounded corners.

#### Scenario: Primary login button

- **WHEN** the user loads the AuthDrop page
- **THEN** a "Log In" button is visible
- **AND** the button background is mint/teal (#4ecdc4)
- **AND** the button text is white
- **AND** the button is full-width within the form card
- **AND** the button has pill-shaped rounded corners (rounded-full or ~25px radius)

### Requirement: Social login section

The left column SHALL display "or sign in with" text and three full-width stacked social login buttons (Facebook, Twitter, Google) with correct brand colors and white icons.

#### Scenario: Social login label

- **WHEN** the user loads the AuthDrop page
- **THEN** text "or sign in with" appears at the top of the left column
- **AND** the text is in light gray

#### Scenario: Social buttons

- **WHEN** the user loads the AuthDrop page
- **THEN** three full-width social buttons are visible, stacked vertically
- **AND** the first button is Facebook (dark blue #3b5998) with an "f" icon
- **AND** the second button is Twitter (light blue #1da1f2) with a bird icon
- **AND** the third button is Google (red #dd4b39) with a "G" icon
- **AND** each button has rounded corners and white icon/text
- **AND** each button is full-width within the left column

### Requirement: Divider

A "— or —" text divider SHALL appear between the social login section and the login form card, centered vertically.

#### Scenario: Divider visible

- **WHEN** the user loads the AuthDrop page
- **THEN** a "— or —" text divider is visible between the two columns
- **AND** the divider is vertically centered between the sections

### Requirement: Responsive behavior

The two-column layout SHALL stack vertically on mobile viewports.

#### Scenario: Mobile layout

- **WHEN** the user resizes the viewport to mobile width (< 768px)
- **THEN** the two-column layout stacks vertically
- **AND** the social login section appears above the login form card
- **AND** the "— or —" divider appears between the stacked sections
- **AND** the form remains fully functional

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock link

- **WHEN** the user loads the AuthDrop page
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text reads "More templates at Component Dock"
- **AND** the link opens in a new tab

## Verification Checklist

- [ ] Two-column layout with social login left, form card right
- [ ] Light gray (#f5f5f5) page background
- [ ] White card with subtle shadow for login form
- [ ] Bold dark heading "Sign In to AuthDrop"
- [ ] Gray subtext paragraph
- [ ] Username and Password inputs with bottom-border-only styling
- [ ] "Remember me" checkbox with mint accent (#4ecdc4), checked by default
- [ ] "Forgot Password" link right-aligned
- [ ] Full-width mint green (#4ecdc4) "Log In" button with pill-shaped corners
- [ ] "or sign in with" label text
- [ ] Three full-width stacked social buttons (Facebook #3b5998, Twitter #1da1f2, Google #dd4b39)
- [ ] "— or —" divider between columns
- [ ] Responsive stacking on mobile viewports
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
