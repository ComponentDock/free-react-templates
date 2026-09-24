# Template: Loginpane (Login Form V17)

## Purpose

Recreation of ColorLib **Login Form V17** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v17`
- **Preview URL:** https://colorlib.com/etc/lf/Login_v17/index.html
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v17/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v17.jpg
- **New name:** `loginpane` (apps/loginpane, package @free-react-templates/loginpane)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict
- **Fidelity note:** The ColorLib preview at `preview.colorlib.com/theme/` returns 404. The actual demo HTML/CSS was fetched from `colorlib.com/etc/lf/Login_v17/index.html`. The screenshot was used as a visual fallback.

## Design tokens (extracted from live preview CSS)

### Colors

| Token               | Hex / Value         | Usage                                        |
| -------------------- | ------------------- | -------------------------------------------- |
| Page background      | `#f2f2f2`           | Full viewport light gray                     |
| Card background      | `#ffffff`           | Login card white                             |
| Image overlay        | `rgba(0,0,0,0.3)`  | Dark overlay on right-side image panel       |
| Primary accent       | `#00ad5f`           | Button background, focus border, links       |
| Text title           | `#555555`           | "Account Login" heading                      |
| Text body            | `#666666`           | Input text, paragraph text, anchor tags      |
| Placeholder          | `#999999`           | Input placeholder text, "Forgot" label       |
| Border               | `#e6e6e6`           | Input fields border                          |
| Focus border         | `#00ad5f`           | Green border on input focus                  |
| Button hover         | `#333333`           | Button hover background                      |
| Error                | `#c80000`           | Validation error text and border             |
| Link hover           | `#333333`           | Anchor tag hover state                       |

### Fonts

| Token        | Font family      | Usage                                       |
| ------------ | ---------------- | ------------------------------------------- |
| Body         | Poppins Regular  | Body text, inputs, links (14px base)        |
| Title        | Poppins Regular  | "Account Login" heading (20px, uppercase, letter-spacing 2px) |
| Input text   | Poppins Regular  | Input fields (18px)                         |
| Button       | Montserrat Bold  | Sign in button (12px, uppercase, letter-spacing 1px) |
| Links        | Poppins Regular  | "Forgot" and "Sign Up" text (13–15px)       |
| Validation   | Poppins Regular  | Alert messages (13px)                       |

### Layout & shapes

- Full viewport height, centered flex layout, light gray (#f2f2f2) background
- Card: 1170px wide, white, no border-radius, overflow hidden
- Split layout via `flex-direction: row-reverse`: form on left (50%), image panel on right (50%)
- Image panel: full-height background image with dark overlay (rgba(0,0,0,0.3))
- Form: padding 303px top / 65px left-right / 40px bottom
- Inputs: 55px height, 1px solid #e6e6e6 border, no border-radius
- Input text: Poppins Regular, 18px, #666666
- Focus effect: green (#00ad5f) border overlay that scales in (scaleX 1.1 → 1, scaleY 1.3 → 1, 0.4s)
- Button: full-width, 50px height, border-radius 3px, green (#00ad5f) bg, Montserrat Bold 12px white uppercase
- Button hover: background transitions to #333333
- Responsive:
  - ≤992px: form 60%, image 40%
  - ≤768px: both full-width stacked
  - ≤576px: inputs stack to full-width (side-by-side at wider), padding adjusts

## Section structure (HTML from live demo)

1. **Image panel** (`login100-more`) — right side (50%), background image with dark overlay, no visible text
2. **Login form** (`login100-form`) — left side (50%):
   - "Account Login" heading (uppercase, centered, letter-spaced)
   - Username input (placeholder: "User name", side-by-side with password on desktop)
   - Password input (placeholder: "Password", side-by-side with username on desktop)
   - "Sign in" button (full-width, green, uppercase)
   - "Forgot User name / password?" link (centered, green)
   - "Sign Up" link (centered, green, uppercase)

## Requirements

### Requirement: Renders split-screen login layout

The login form SHALL display a split-screen layout with the login form on the left and a background image panel on the right.

#### Scenario: Image panel is visible

- **WHEN** the page loads
- **THEN** a background image panel is displayed on the right side of the card

#### Scenario: Image panel has dark overlay

- **WHEN** the page loads
- **THEN** the image panel has a dark semi-transparent overlay

### Requirement: Renders login form with title and inputs

The login form SHALL display an "Account Login" heading, a username input, and a password input.

#### Scenario: Account Login heading is visible

- **WHEN** the page loads
- **THEN** the heading "Account Login" is displayed in uppercase with letter spacing

#### Scenario: Username input accepts text

- **WHEN** the user types in the username field
- **THEN** the input value updates to reflect the typed text

#### Scenario: Password input defaults to hidden

- **WHEN** the page loads
- **THEN** the password input has type "password"

### Requirement: Inputs display side-by-side on desktop

On desktop viewports, the username and password inputs SHALL display side-by-side.

#### Scenario: Desktop side-by-side layout

- **WHEN** the viewport width is greater than 576px
- **THEN** the username and password inputs are displayed side-by-side (each taking 50% width)

#### Scenario: Mobile stacked layout

- **WHEN** the viewport width is 576px or less
- **THEN** the username and password inputs stack to full-width (one per row)

### Requirement: Renders sign in button

The login form SHALL display a full-width "Sign in" button.

#### Scenario: Sign in button is visible

- **WHEN** the page loads
- **THEN** a "Sign in" button is displayed

#### Scenario: Sign in button hover changes color

- **WHEN** the user hovers over the sign in button
- **THEN** the button background transitions from green to dark

### Requirement: Renders forgot password and sign up links

The login form SHALL display a "Forgot User name / password?" link and a "Sign Up" link below the sign in button.

#### Scenario: Forgot password link is present

- **WHEN** the page loads
- **THEN** a "Forgot" text and "User name / password?" link are displayed

#### Scenario: Sign Up link is present

- **WHEN** the page loads
- **THEN** a "Sign Up" link is displayed

### Requirement: Form validates required fields

The login form SHALL validate that username and password are provided on submission.

#### Scenario: Empty username shows error

- **WHEN** the user clicks Sign in without entering a username
- **THEN** a validation error message is displayed for the username field

#### Scenario: Empty password shows error

- **WHEN** the user clicks Sign in without entering a password
- **THEN** a validation error message is displayed for the password field

### Requirement: Input focus shows green border animation

The login form SHALL animate a green border around the input when it receives focus.

#### Scenario: Input focus border appears

- **WHEN** the user focuses the username or password input
- **THEN** a green (#00ad5f) border overlay scales into view around the input

#### Scenario: Input blur hides border

- **WHEN** the user blurs the username or password input
- **THEN** the green border overlay fades out

### Requirement: Responsive layout

The login form SHALL adapt to smaller viewports.

#### Scenario: Tablet layout at 992px

- **WHEN** the viewport width is 992px or less
- **THEN** the form takes 60% width and the image panel takes 40%

#### Scenario: Mobile full-width at 768px

- **WHEN** the viewport width is 768px or less
- **THEN** both the form and image panel stack to full width

### Requirement: Footer links to Component Dock

The login form page footer SHALL link to https://www.componentdock.com/.

#### Scenario: Component Dock link present

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ is present in the footer

## Verification checklist

- [ ] Split-screen layout: form left, image right
- [ ] Image panel has background image with dark overlay
- [ ] "Account Login" heading displayed uppercase with letter spacing
- [ ] Username input side-by-side with password on desktop (stacked on mobile)
- [ ] Password input defaults to type="password"
- [ ] "Sign in" button with green (#00ad5f) background, Montserrat Bold, uppercase
- [ ] Button hover transitions to dark (#333333)
- [ ] Green border animation on input focus
- [ ] "Forgot User name / password?" link present
- [ ] "Sign Up" link present
- [ ] Form validates required fields
- [ ] Responsive: form 60% / image 40% at ≤992px
- [ ] Responsive: both full-width at ≤768px
- [ ] Footer contains Component Dock link
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains loginpane.free.componentdock.com
