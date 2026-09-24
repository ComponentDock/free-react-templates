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

| Token | Value | Usage |
|-------|-------|-------|
| `brand-cyan` | `#00dbde` | Background gradient start, button hover gradient start |
| `brand-magenta` | `#fc00ff` | Background gradient end, button hover gradient end, focus border |
| `brand-purple` | `#a64bf4` | Gradient midpoint (unused standalone, part of gradient definition) |
| `facebook-blue` | `#3b5998` | Facebook social button background |
| `google-white` | `#ffffff` | Google social button background |
| `card-bg` | `#ffffff` | Login card background |
| `text-heading` | `#555555` | "Sign In With" heading text |
| `text-label` | `#555555` | Form field labels (Username, Password) via Montserrat-SemiBold |
| `text-muted` | `#999999` | "Not a member?", "Sign up now", "Forgot?" link |
| `text-input` | `#333333` | Input text color |
| `text-placeholder` | `#555555` | Input placeholder text |
| `text-button` | `#ffffff` | Sign In button text |
| `text-link-hover` | `#fc00ff` | Link hover color |
| `input-bg` | `#f7f7f7` | Input field background |
| `input-border` | `#e6e6e6` | Input field border |
| `button-bg` | `#333333` | Sign In button default background |
| `focus-border` | `#fc00ff` | Input focus border color |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Heading ("Sign In With") | Montserrat | 500 (Medium) | 39px |
| Labels (Username, Password) | Montserrat | 600 (SemiBold) | 16px |
| Social button text | Montserrat | 600 (SemiBold) | 18px |
| Input text | Poppins | 400 (Regular) | 18px |
| Button text ("Sign In") | Poppins | 500 (Medium) | 16px |
| "Not a member?" text | Poppins | 400 (Regular) | 14px |
| "Forgot?" link | Poppins | 400 (Regular) | 14px |

### Shapes & Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `card-radius` | `10px` | Card border-radius |
| `card-width` | `680px` | Fixed-width centered card |
| `card-padding` | `62px 110px` | Internal card padding (top 62px, sides 110px) |
| `input-radius` | `10px` | Input field border-radius |
| `input-height` | `60px` | Input field height |
| `input-padding` | `0 20px` | Input horizontal padding |
| `button-radius` | `10px` | Sign In button border-radius |
| `button-height` | `60px` | Sign In button height |
| `social-button-radius` | `10px` | Social buttons border-radius |
| `social-button-height` | `70px` | Social buttons height |
| `social-button-width` | `calc((100% - 20px) / 2)` | Each social button ~half width with 20px gap |
| `social-button-shadow` | `0 1px 5px 0 rgba(0,0,0,0.2)` | Subtle shadow on social buttons |
| `heading-padding-bottom` | `53px` | Space below heading |
| `social-buttons-gap` | `20px` | Gap between Facebook and Google buttons |
| `field-label-padding-top` | `31px` | Space above Username label |
| `field-label-padding-bottom` | `9px` | Space below Username label |
| `password-label-padding-top` | `13px` | Space above Password label |
| `button-margin-top` | `17px` | Space above Sign In button |
| `signup-padding-top` | `55px` | Space above "Not a member?" text |
| `social-buttons-margin-bottom` | `20px` | Space below social buttons |

### Background

Full-page gradient at 45deg from cyan (`#00dbde`) to magenta (`#fc00ff`). Decorative geometric wireframe pattern on the left side (semi-transparent white triangular/polygonal line art overlay). The gradient is applied via `background-image` on the container with `background-size: cover` and `background-position: center`.

### Hover Effects

- All buttons (social + Sign In): a pseudo-element with the same cyan-to-magenta gradient fades in on hover (opacity 0 → 1, 0.4s transition), covering the button background.
- Links: hover color changes to `#fc00ff` (magenta).

### Focus Effects (Inputs)

- On focus, an absolutely-positioned border overlay (`#fc00ff`) animates from scaled (scaleX 1.1, scaleY 1.3) to full scale (1), creating a "pulse" expansion effect. This is the signature visual of this template.

## Gherkin Requirements

### Background

Given the user navigates to the LoginPulse page
Then a full-page gradient background is displayed (cyan-to-magenta at 45deg)
And a decorative geometric wireframe pattern is visible on the left side
And a white login card is centered on the page

### Login Card — Heading

Scenario: Heading displays "Sign In With"
  Given the page is loaded
  Then a heading "Sign In With" is visible inside the card
  And the heading uses Montserrat Medium at ~39px
  And the heading color is #555555

### Login Card — Social Login Buttons

Scenario: Social login buttons are displayed side by side
  Given the page is loaded
  Then a Facebook button is visible with #3b5998 background and white text
  And a Google button is visible with white background and #555555 text
  And both buttons display their respective icons (Facebook f-icon, Google G-icon)
  And both buttons have 10px border-radius and a subtle box-shadow
  And the buttons are arranged side by side, each taking ~half width

Scenario: Social buttons show gradient on hover
  Given the user hovers over the Facebook button
  Then a cyan-to-magenta gradient fades in over the button background
  And the button text turns white

Scenario: Social buttons show gradient on hover
  Given the user hovers over the Google button
  Then a cyan-to-magenta gradient fades in over the button background
  And the button text turns white

### Login Card — Username Field

Scenario: Username field renders with label
  Given the page is loaded
  Then a "Username" label is visible in Montserrat SemiBold 16px #555555
  And an input field is present below the label
  And the input has a light gray background (#f7f7f7) with border (#e6e6e6)
  And the input has 10px border-radius and 60px height

Scenario: Username field accepts text input
  Given the user clicks the username input
  And types "admin"
  Then the input displays the entered text

Scenario: Username field shows focus border effect
  Given the user focuses the username input
  Then a magenta (#fc00ff) border overlay appears around the input
  And the border animates from a scaled state to full size

### Login Card — Password Field

Scenario: Password field renders with label and forgot link
  Given the page is loaded
  Then a "Password" label is visible in Montserrat SemiBold 16px #555555
  And a "Forgot?" link is visible next to the label
  And the "Forgot?" link has a bottom border (#999999)
  And a password input field is present below
  And the input has the same styling as the username field

Scenario: Password field masks input
  Given the user types "secret123" in the password field
  Then the input value is masked (type="password")

Scenario: Password field shows focus border effect
  Given the user focuses the password input
  Then a magenta (#fc00ff) border overlay appears around the input

### Login Card — Sign In Button

Scenario: Sign In button renders
  Given the page is loaded
  Then a "Sign In" button is visible
  And the button has a dark background (#333333)
  And the button text is white, Poppins Medium 16px
  And the button is full-width with 10px border-radius and 60px height

Scenario: Sign In button shows gradient on hover
  Given the user hovers over the "Sign In" button
  Then a cyan-to-magenta gradient fades in over the button background
  And the button text remains white

Scenario: Sign In button click triggers form submission
  Given the user fills in username and password
  And clicks the "Sign In" button
  Then the form submission is triggered

### Login Card — Sign Up Link

Scenario: Sign up section is visible
  Given the page is loaded
  Then "Not a member?" text is visible at the bottom of the card
  And a "Sign up now" link is displayed next to it
  And the link has a bottom border

### Footer

Scenario: Footer links to Component Dock
  Given the page is loaded
  Then a footer link to "https://www.componentdock.com/" is present
  And the link text includes "Component Dock"

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
