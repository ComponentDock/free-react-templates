# Template: LoginPulse (Login Form)

## Purpose

Recreation of ColorLib's **Login Form V5** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page login page.

- **Source:** https://colorlib.com/wp/template/login-form-v5/
- **Preview (live HTML):** https://colorlib.com/etc/lf/Login_v5/index.html
- **Preview (theme, unreachable):** https://preview.colorlib.com/theme/login-form-v5/ (404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v5.jpg
- **New name:** `loginpulse` (`apps/loginpulse`, `@free-react-templates/loginpulse`)
- **Surge target:** `https://loginpulse.free.componentdock.com`
- **Provenance note:** Live HTML source at `colorlib.com/etc/lf/Login_v5/index.html` was fetched and CSS tokens extracted directly. The theme preview returned 404.

## Design Tokens

### Colors

| Token              | Value     | Usage                                                              |
| ------------------ | --------- | ------------------------------------------------------------------ |
| `brand-cyan`       | `#00dbde` | Background gradient start, button hover gradient start             |
| `brand-magenta`    | `#fc00ff` | Background gradient end, button hover gradient end, focus border   |
| `brand-purple`     | `#a64bf4` | Gradient midpoint (unused standalone, part of gradient definition) |
| `facebook-blue`    | `#3b5998` | Facebook social button background                                  |
| `google-white`     | `#ffffff` | Google social button background                                    |
| `card-bg`          | `#ffffff` | Login card background                                              |
| `text-heading`     | `#555555` | "Sign In With" heading text                                        |
| `text-label`       | `#555555` | Form field labels (Username, Password) via Montserrat-SemiBold     |
| `text-muted`       | `#999999` | "Not a member?", "Sign up now", "Forgot?" link                     |
| `text-input`       | `#333333` | Input text color                                                   |
| `text-placeholder` | `#555555` | Input placeholder text                                             |
| `text-button`      | `#ffffff` | Sign In button text                                                |
| `text-link-hover`  | `#fc00ff` | Link hover color                                                   |
| `input-bg`         | `#f7f7f7` | Input field background                                             |
| `input-border`     | `#e6e6e6` | Input field border                                                 |
| `button-bg`        | `#333333` | Sign In button default background                                  |
| `focus-border`     | `#fc00ff` | Input focus border color                                           |

### Typography

| Element                     | Font       | Weight         | Size |
| --------------------------- | ---------- | -------------- | ---- |
| Heading ("Sign In With")    | Montserrat | 500 (Medium)   | 39px |
| Labels (Username, Password) | Montserrat | 600 (SemiBold) | 16px |
| Social button text          | Montserrat | 600 (SemiBold) | 18px |
| Input text                  | Poppins    | 400 (Regular)  | 18px |
| Button text ("Sign In")     | Poppins    | 500 (Medium)   | 16px |
| "Not a member?" text        | Poppins    | 400 (Regular)  | 14px |
| "Forgot?" link              | Poppins    | 400 (Regular)  | 14px |

### Shapes & Spacing

| Token                          | Value                         | Usage                                         |
| ------------------------------ | ----------------------------- | --------------------------------------------- |
| `card-radius`                  | `10px`                        | Card border-radius                            |
| `card-width`                   | `680px`                       | Fixed-width centered card                     |
| `card-padding`                 | `62px 110px`                  | Internal card padding (top 62px, sides 110px) |
| `input-radius`                 | `10px`                        | Input field border-radius                     |
| `input-height`                 | `60px`                        | Input field height                            |
| `input-padding`                | `0 20px`                      | Input horizontal padding                      |
| `button-radius`                | `10px`                        | Sign In button border-radius                  |
| `button-height`                | `60px`                        | Sign In button height                         |
| `social-button-radius`         | `10px`                        | Social buttons border-radius                  |
| `social-button-height`         | `70px`                        | Social buttons height                         |
| `social-button-width`          | `calc((100% - 20px) / 2)`     | Each social button ~half width with 20px gap  |
| `social-button-shadow`         | `0 1px 5px 0 rgba(0,0,0,0.2)` | Subtle shadow on social buttons               |
| `heading-padding-bottom`       | `53px`                        | Space below heading                           |
| `social-buttons-gap`           | `20px`                        | Gap between Facebook and Google buttons       |
| `field-label-padding-top`      | `31px`                        | Space above Username label                    |
| `field-label-padding-bottom`   | `9px`                         | Space below Username label                    |
| `password-label-padding-top`   | `13px`                        | Space above Password label                    |
| `button-margin-top`            | `17px`                        | Space above Sign In button                    |
| `signup-padding-top`           | `55px`                        | Space above "Not a member?" text              |
| `social-buttons-margin-bottom` | `20px`                        | Space below social buttons                    |

### Background

Full-page gradient at 45deg from cyan (`#00dbde`) to magenta (`#fc00ff`). Decorative geometric wireframe pattern on the left side (semi-transparent white triangular/polygonal line art overlay).

### Hover Effects

- All buttons (social + Sign In): a pseudo-element with the same cyan-to-magenta gradient fades in on hover (opacity 0 to 1, 0.4s transition).
- Links: hover color changes to `#fc00ff` (magenta).

### Focus Effects (Inputs)

- On focus, a border overlay (`#fc00ff`) animates from scaled (scaleX 1.1, scaleY 1.3) to full scale (1), creating a "pulse" expansion effect.

## Requirements

### Requirement: Background and layout

The page SHALL display a full-page gradient background (cyan-to-magenta at 45deg) with a decorative geometric wireframe pattern on the left side, and a white login card centered on the page.

#### Scenario: Gradient background is visible

- **WHEN** the user navigates to the LoginPulse page
- **THEN** a full-page gradient background is displayed (cyan-to-magenta at 45deg)
- **AND** a decorative geometric wireframe pattern is visible on the left side

#### Scenario: Login card is centered

- **WHEN** the page is loaded
- **THEN** a white login card is centered on the page with 680px max width and 10px border-radius

### Requirement: Social login buttons

The page SHALL display Facebook and Google social login buttons side by side with appropriate styling and hover effects.

#### Scenario: Social buttons are displayed

- **WHEN** the page is loaded
- **THEN** a Facebook button is visible with #3b5998 background and white text
- **AND** a Google button is visible with white background and #555555 text
- **AND** both buttons display their respective icons
- **AND** both buttons have 10px border-radius and a subtle box-shadow

#### Scenario: Social buttons show gradient on hover

- **WHEN** the user hovers over the Facebook button
- **THEN** a cyan-to-magenta gradient fades in over the button background

- **WHEN** the user hovers over the Google button
- **THEN** a cyan-to-magenta gradient fades in over the button background

### Requirement: Username field

The page SHALL display a username input field with label and focus animation.

#### Scenario: Username field renders with label

- **WHEN** the page is loaded
- **THEN** a "Username" label is visible in Montserrat SemiBold 16px #555555
- **AND** an input field is present below the label
- **AND** the input has a light gray background (#f7f7f7) with border (#e6e6e6)

#### Scenario: Username field accepts text input

- **WHEN** the user clicks the username input and types "admin"
- **THEN** the input displays the entered text

#### Scenario: Username field shows focus border effect

- **WHEN** the user focuses the username input
- **THEN** a magenta (#fc00ff) border overlay appears around the input with a pulse animation

### Requirement: Password field

The page SHALL display a password input field with label, forgot link, and focus animation.

#### Scenario: Password field renders with label and forgot link

- **WHEN** the page is loaded
- **THEN** a "Password" label is visible
- **AND** a "Forgot?" link is visible next to the label with a bottom border
- **AND** a password input field is present below

#### Scenario: Password field masks input

- **WHEN** the user types "secret123" in the password field
- **THEN** the input value is masked (type="password")

### Requirement: Sign In button

The page SHALL display a Sign In button with hover gradient effect.

#### Scenario: Sign In button renders

- **WHEN** the page is loaded
- **THEN** a "Sign In" button is visible with dark background (#333333)
- **AND** the button text is white, Poppins Medium 16px
- **AND** the button is full-width with 10px border-radius and 60px height

#### Scenario: Sign In button shows gradient on hover

- **WHEN** the user hovers over the "Sign In" button
- **THEN** a cyan-to-magenta gradient fades in over the button background

#### Scenario: Sign In button click triggers form submission

- **WHEN** the user fills in username and password and clicks "Sign In"
- **THEN** the form submission is triggered

### Requirement: Sign up section

The page SHALL display a "Not a member? Sign up now" section at the bottom of the card.

#### Scenario: Sign up section is visible

- **WHEN** the page is loaded
- **THEN** "Not a member?" text is visible at the bottom of the card
- **AND** a "Sign up now" link is displayed next to it with a bottom border

### Requirement: Footer

The page SHALL display a footer linking to Component Dock.

#### Scenario: Footer links to Component Dock

- **WHEN** the page is loaded
- **THEN** a footer link to "https://www.componentdock.com/" is present
- **AND** the link text includes "Component Dock"

## Verification Checklist

- [ ] Full-page gradient background (cyan-to-magenta at 45deg)
- [ ] Decorative geometric wireframe pattern on the left side
- [ ] White card centered with 10px border-radius, 680px width
- [ ] "Sign In With" heading: Montserrat Medium 39px #555555, centered
- [ ] Facebook button: #3b5998 bg, white text, icon, 10px radius, shadow, side-by-side with Google
- [ ] Google button: white bg, #555555 text, Google icon, 10px radius, shadow
- [ ] Social button hover: gradient overlay fades in
- [ ] Username field: label Montserrat SemiBold 16px, input with #f7f7f7 bg, #e6e6e6 border, 10px radius, 60px height
- [ ] Password field: same styling, "Forgot?" link with bottom border
- [ ] Input focus: magenta (#fc00ff) border overlay with pulse/scale animation
- [ ] Sign In button: #333333 bg, white text, full-width, 10px radius, 60px height
- [ ] Sign In button hover: gradient overlay fades in
- [ ] "Not a member? Sign up now" with bottom-bordered link
- [ ] Footer links to Component Dock
- [ ] Responsive: social buttons stack vertically on narrow viewports
- [ ] No ColorLib references in any app code
- [ ] Icons from lucide-react (Facebook, Chrome/Google for social)
- [ ] Fonts loaded via Google Fonts (Poppins, Montserrat) in index.html
