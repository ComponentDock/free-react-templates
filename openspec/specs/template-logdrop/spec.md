# Template: LogDrop (Login Form)

## Purpose

Recreation of ColorLib "Login Form 11" (`login-form-11`).
Preview: https://preview.colorlib.com/theme/login-form-11/ (404 as of 2026-09-23 — design tokens extracted from screenshot).
Source page: https://colorlib.com/wp/template/login-form-11/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-11-2.jpg

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Design Tokens

- **Background:** #f0f2f5 (very light gray-blue) — full page background
- **Card background:** #ffffff (white) — login form card
- **Card shadow:** subtle box-shadow (~0 2px 12px rgba(0,0,0,0.08))
- **Primary accent (blue):** #4a90d9 — used on Login button, user icon circle, checkbox, "Forgot Password" link
- **Text primary:** #333333 (dark gray, "Sign In" heading)
- **Text secondary:** #999999 (light gray, input placeholder text)
- **Input border:** #e0e0e0 (light gray, full-border rounded inputs)
- **Input background:** #ffffff (white)
- **Button text:** #ffffff (white on blue background)
- **Button radius:** ~4px (slightly rounded corners, not pill)
- **Icon circle:** blue (#4a90d9) circle with white user silhouette icon
- **Font family:** "Roboto", sans-serif (clean sans-serif, inferred from screenshot)
- **Layout:** Single centered card layout (no split, no columns)
- **Page title:** "Login #01" at top of page in dark text (will replace with "LogDrop" branding)
- **Input style:** Full-border rounded inputs (not bottom-border only), placeholder text light gray
- **Checkbox:** Blue accent (#4a90d9), checked by default
- **"Forgot Password" link:** Blue text (#4a90d9), right-aligned on checkbox row

## Requirements

### Requirement: Centered card layout

The page SHALL display a single centered white card on a light gray background. The card SHALL contain the login form.

#### Scenario: Card centered on page

- **WHEN** the user loads the LogDrop page
- **THEN** a white card is centered horizontally and vertically on the page
- **AND** the page background is light gray (#f0f2f5)
- **AND** the card has a subtle shadow

#### Scenario: Page title

- **WHEN** the user loads the LogDrop page
- **THEN** a page title "LogDrop" is visible above the card
- **AND** the title is in dark text

### Requirement: User icon and heading

The card SHALL display a blue circular user icon at the top, followed by a "Sign In" heading.

#### Scenario: User icon

- **WHEN** the user loads the LogDrop page
- **THEN** a blue circle (#4a90d9) with a white user silhouette icon is displayed at the top of the card
- **AND** the icon is centered horizontally

#### Scenario: Sign In heading

- **WHEN** the user loads the LogDrop page
- **THEN** a "Sign In" heading appears below the user icon
- **AND** the heading is in dark text (#333333), centered

### Requirement: Form fields

The form SHALL include Username and Password input fields with full-border rounded styling and placeholder text.

#### Scenario: Username field

- **WHEN** the user loads the LogDrop page
- **THEN** a "Username" input field is visible
- **AND** the input has a full border with rounded corners
- **AND** the placeholder text reads "Username" in light gray

#### Scenario: Password field

- **WHEN** the user loads the LogDrop page
- **THEN** a "Password" input field is visible
- **AND** the input has a full border with rounded corners
- **AND** the placeholder text reads "Password" in light gray
- **AND** the input type is password (masked characters)

### Requirement: Login button

The form SHALL include a full-width "Login" button with blue background, white text, and slightly rounded corners.

#### Scenario: Primary login button

- **WHEN** the user loads the LogDrop page
- **THEN** a "Login" button is visible
- **AND** the button background is blue (#4a90d9)
- **AND** the button text is white
- **AND** the button is full-width within the card
- **AND** the button has slightly rounded corners (~4px radius)

### Requirement: Remember me and forgot password

The form SHALL include a "Remember Me" checkbox with blue accent and a "Forgot Password" link on the same row.

#### Scenario: Remember Me checkbox

- **WHEN** the user loads the LogDrop page
- **THEN** a "Remember Me" checkbox is visible
- **AND** the checkbox accent color is blue (#4a90d9)
- **AND** the checkbox is checked by default

#### Scenario: Forgot Password link

- **WHEN** the user loads the LogDrop page
- **THEN** a "Forgot Password" link is visible
- **AND** the link is blue (#4a90d9)
- **AND** the link is right-aligned on the same row as the checkbox

### Requirement: Responsive behavior

The card SHALL remain centered and functional on mobile viewports.

#### Scenario: Mobile layout

- **WHEN** the user resizes the viewport to mobile width (< 480px)
- **THEN** the card remains centered
- **AND** the card width adjusts to fit the viewport with padding
- **AND** the form remains fully functional

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock link

- **WHEN** the user loads the LogDrop page
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text reads "More templates at Component Dock"
- **AND** the link opens in a new tab

## Verification Checklist

- [ ] Centered white card on light gray background
- [ ] Blue circular user icon at top of card
- [ ] "Sign In" heading in dark text, centered
- [ ] Username and Password inputs with full-border rounded styling
- [ ] "Remember Me" checkbox with blue accent, checked by default
- [ ] "Forgot Password" link in blue, right-aligned
- [ ] Full-width blue (#4a90d9) "Login" button with slightly rounded corners
- [ ] Responsive card sizing on mobile viewports
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
