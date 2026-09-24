# Template: Loginmantle (Login Form V15)

## Purpose

Recreation of ColorLib **Login Form V15** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v15`
- **Preview URL:** https://colorlib.com/etc/lf/Login_v15/index.html
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v15/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v15.jpg
- **New name:** `loginmantle` (apps/loginmantle, package @free-react-templates/loginmantle)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict
- **Fidelity note:** The ColorLib preview returns 404 on `preview.colorlib.com/theme/`, so the actual demo HTML/CSS at `colorlib.com/etc/lf/Login_v15/index.html` was fetched and analyzed directly. The screenshot was used as a visual fallback for the banner overlay treatment.

## Design tokens (extracted from live preview CSS)

### Colors

| Token               | Hex / Value             | Usage                                       |
| -------------------- | ----------------------- | ------------------------------------------- |
| Page background      | `#ebeeef`               | Full viewport light gray                    |
| Card background      | `#ffffff`               | Login card white                            |
| Banner overlay       | `rgba(54,84,99,0.7)`   | Dark teal overlay on top banner image       |
| Primary accent       | `#57b846`               | Button background, focus underline, checkbox checked |
| Text dark (input)    | `#555555`               | Input field text                            |
| Text muted (label)   | `#808080`               | Username / password labels (desktop)        |
| Placeholder / muted  | `#999999`               | Input placeholders, checkbox label, link    |
| Link body text       | `#666666`               | Anchor tags, paragraph text                 |
| Border light         | `#b2b2b2`               | Input bottom border                         |
| Border checkbox      | `#e6e6e6`               | Checkbox border                             |
| Button hover         | `#333333`               | Login button hover state                    |
| Error                | `#c80000`               | Validation error text and icon              |

### Fonts

| Token        | Font family      | Usage                                      |
| ------------ | ---------------- | ------------------------------------------ |
| Body         | Poppins Regular  | Body text, links, input text (15px)        |
| Title        | Poppins Bold     | Banner heading "Sign In" (30px, uppercase) |
| Labels       | Poppins Regular  | Field labels, 15px, text-right             |
| Button       | Poppins Regular  | Login button, 16px                         |
| Validation   | Poppins Medium   | Alert/error messages, 13px                 |

### Layout & shapes

- Full viewport height, centered flex layout, light gray background
- Card: 670px wide, white, border-radius 10px, overflow hidden
- Banner: full-width top section, background-size cover, centered text
- Banner overlay: pseudo-element covering full banner area (dark teal 70% opacity)
- Inputs: 45px height, border-bottom 1px solid #b2b2b2, no border-radius
- Labels (desktop): positioned absolutely to the left of the input (-105px left, 80px width), text-right
- Labels (mobile ≤480px): stacked above input, text-left, static position
- Checkbox: hidden native input, custom FontAwesome checkmark box (18×18, border-radius 2px)
- Login button: full-width, 50px height, border-radius 25px (pill shape), green #57b846 bg, white text
- Button hover: background transitions to #333333
- Focus underline: 1px green line animates from 0 to 100% width on input focus (0.6s transition)

## Section structure (HTML from live demo)

1. **Banner / Title Section** (`login100-form-title`)
   - Full-width top area with background image
   - Dark teal overlay (rgba(54,84,99,0.7))
   - "Sign In" text centered, white, bold, uppercase, 30px
   - Padding: 70px top, 74px bottom

2. **Login Form** (`login100-form`)
   - Username field: label left (desktop), bottom-bordered input
   - Password field: label left (desktop), bottom-bordered input
   - "Remember me" checkbox + "Forgot Password?" link row (space-between)
   - "Login" pill button full-width

## Requirements

### Requirement: Renders banner with background image and overlay text

The login form SHALL display a banner section at the top with a background image and an overlaid "Sign In" heading.

#### Scenario: Banner heading is visible

- **WHEN** the page loads
- **THEN** the heading "Sign In" is displayed in the banner area

#### Scenario: Banner has dark overlay

- **WHEN** the page loads
- **THEN** the banner area has a dark teal overlay (semi-transparent) behind the heading text

### Requirement: Renders login form with username and password fields

The login form SHALL display a username input and a password input, each with a visible label.

#### Scenario: Username input accepts text

- **WHEN** the user types in the username field
- **THEN** the input value updates to reflect the typed text

#### Scenario: Username label is visible

- **WHEN** the page loads
- **THEN** a "Username" label is displayed adjacent to the username input

#### Scenario: Password input defaults to hidden

- **WHEN** the page loads
- **THEN** the password input has type "password"

#### Scenario: Password label is visible

- **WHEN** the page loads
- **THEN** a "Password" label is displayed adjacent to the password input

### Requirement: Renders remember me checkbox and forgot password link

The login form SHALL display a "Remember me" checkbox and a "Forgot Password?" link between the inputs and the login button.

#### Scenario: Remember me checkbox toggles

- **WHEN** the user clicks the remember me checkbox
- **THEN** the checkbox state toggles

#### Scenario: Forgot password link is present

- **WHEN** the page loads
- **THEN** a "Forgot Password?" link is visible

### Requirement: Renders login button

The login form SHALL display a full-width "Login" pill button.

#### Scenario: Login button is visible

- **WHEN** the page loads
- **THEN** a "Login" button is displayed

#### Scenario: Login button hover changes color

- **WHEN** the user hovers over the login button
- **THEN** the button background transitions from green to dark

### Requirement: Form validates required fields

The login form SHALL validate that username and password are provided on submission.

#### Scenario: Empty username shows error

- **WHEN** the user clicks Login without entering a username
- **THEN** a validation error message is displayed for the username field

#### Scenario: Empty password shows error

- **WHEN** the user clicks Login without entering a password
- **THEN** a validation error message is displayed for the password field

### Requirement: Responsive layout

The login form SHALL adapt to mobile viewports.

#### Scenario: Mobile label positioning

- **WHEN** the viewport width is 480px or less
- **THEN** the username and password labels are positioned above their respective inputs (stacked layout) instead of to the left

#### Scenario: Mobile form padding adjusts

- **WHEN** the viewport width is 480px or less
- **THEN** the form padding adjusts to accommodate the stacked label layout

### Requirement: Footer links to Component Dock

The login form page footer SHALL link to https://www.componentdock.com/.

#### Scenario: Component Dock link present

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ is present in the footer

## Verification checklist

- [ ] Banner section displays background image with dark teal overlay and "Sign In" heading
- [ ] Username input with left-positioned label (desktop) / stacked label (mobile)
- [ ] Password input with left-positioned label (desktop) / stacked label (mobile)
- [ ] "Remember me" checkbox toggles correctly
- [ ] "Forgot Password?" link is present and styled
- [ ] "Login" pill button renders with green (#57b846) background, white text, border-radius 25px
- [ ] Button hover transitions to dark (#333333)
- [ ] Focus underline animates green on input focus
- [ ] Form validates required fields on submit
- [ ] Responsive: labels stack above inputs at ≤480px
- [ ] Footer contains Component Dock link
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains loginmantle.free.componentdock.com
- [ ] No images/fonts/icons copied from ColorLib source
