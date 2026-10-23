# Template: LoginVibe (Login Form)

## Purpose

Recreation of ColorLib's **Login Form V4** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page login page.

- **Source:** https://colorlib.com/wp/template/login-form-v4/
- **Preview (unreachable) — **re-probed 2026-10-23: the demo serves** (measured record below):** https://preview.colorlib.com/theme/login-form-v4/
- **Fallback reference:** Screenshot at `https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v4.jpg`
- **New name:** `loginvibe` (`apps/loginvibe`, `@free-react-templates/loginvibe`)
- **Surge target:** `https://loginvibe.free.componentdock.com`
- **Provenance note:** The preview URL returned 404 during prep; all design tokens extracted from the screenshot.

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/lf/Login_v4/index.html` — HTTP 200, 4,217 B, title `Login V4`.
>
> Sheet: `https://colorlib.com/etc/lf/Login_v4/css/style.css?v=824de217` (13,382 B).
> Faces it actually declares: `Poppins-Bold`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand-purple` | `#c471ed` | Background gradient start (bottom-right), button gradient end |
| `brand-cyan` | `#00d2ff` | Background gradient end (top-left), button gradient start |
| `brand-dark-purple` | `#8e2de2` | Background gradient mid-tone |
| `card-bg` | `#ffffff` | Login card background |
| `text-heading` | `#222222` | "Login" heading text |
| `text-label` | `#666666` | Form field labels ("Username", "Password") |
| `text-placeholder` | `#aaaaaa` | Input placeholder text |
| `text-muted` | `#999999` | "Or Sign Up Using", "Have not account yet?" |
| `text-link` | `#333333` | "Forgot password?" and "SIGN UP" links |
| `social-facebook` | `#3b5998` | Facebook social button |
| `social-twitter` | `#1da1f2` | Twitter social button |
| `social-google` | `#db4437` | Google social button |
| `input-border` | `#e0e0e0` | Underline border on form inputs |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Heading ("Login") | Poppins (sans-serif) | 700 (bold) | ~2rem |
| Labels | Poppins | 400 | ~0.85rem |
| Input text | Poppins | 400 | 1rem |
| Placeholder | Poppins | 300 (light) | 1rem |
| Button text | Poppins | 600 (semibold) | 0.9rem, uppercase |
| "Or Sign Up Using" | Poppins | 400 | ~0.9rem |
| "SIGN UP" | Poppins | 600 | 0.95rem, uppercase |

### Shapes & Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `card-radius` | `16px` | Card border-radius |
| `card-shadow` | `0 8px 32px rgba(0,0,0,0.10)` | Subtle drop shadow on card |
| `card-width` | `~420px` | Fixed-width centered card |
| `card-padding` | `48px 40px` | Internal card padding |
| `button-radius` | `30px` (pill) | LOGIN button fully rounded |
| `button-height` | `52px` | LOGIN button height |
| `social-icon-radius` | `50%` (circle) | Social login circular buttons |
| `social-icon-size` | `44px` | Diameter of social buttons |
| `input-underline` | `1px solid #e0e0e0` | Bottom border only on inputs |
| `input-padding-y` | `12px` | Vertical padding in inputs |
| `section-gap` | `24px` | Space between form elements |
| `card-margin-top` | `~100px` | Distance from viewport top to card |

### Background

Full-page diagonal gradient from magenta/purple (`#c471ed`) at bottom-right to cyan/teal (`#00d2ff`) at top-left, with subtle geometric angular overlays (semi-transparent polygonal shapes) layered on top for depth.

## Requirements

### Background

#### Scenario: Background

- **GIVEN** the user navigates to the LoginVibe page
- **THEN** a full-page gradient background is displayed (purple-to-cyan diagonal)
- **AND** geometric angular overlays are visible over the gradient
- **AND** a white login card is centered on the page

### Login Card — Heading

#### Scenario: Heading displays "Login"

- **GIVEN** the page is loaded
- **THEN** a heading "Login" is visible inside the card
- **AND** the heading uses bold weight (~2rem)

### Login Card — Username Field

#### Scenario: Username field renders with icon and placeholder

- **GIVEN** the page is loaded
- **THEN** a "Username" label is visible
- **AND** an input field with placeholder "Type your username" is present
- **AND** a user icon is displayed to the left of the input
- **AND** the input has a bottom-border underline style

#### Scenario: Username field accepts text input

- **GIVEN** the user clicks the username input
- **AND** types "admin@example.com"
- **THEN** the input displays the entered text

### Login Card — Password Field

#### Scenario: Password field renders with icon and placeholder

- **GIVEN** the page is loaded
- **THEN** a "Password" label is visible
- **AND** a password input field with placeholder "Type your password" is present
- **AND** a lock icon is displayed to the left of the input
- **AND** the input has a bottom-border underline style

#### Scenario: Password field masks input

- **GIVEN** the user types "secret123" in the password field
- **THEN** the input value is masked (type="password")

### Login Card — Forgot Password

#### Scenario: Forgot password link is visible

- **GIVEN** the page is loaded
- **THEN** a "Forgot password?" link is visible below the password field
- **AND** the link is right-aligned

### Login Card — Login Button

#### Scenario: Login button renders with gradient

- **GIVEN** the page is loaded
- **THEN** a "LOGIN" button is visible
- **AND** the button has a gradient background (cyan-to-purple)
- **AND** the button text is white and uppercase
- **AND** the button has a pill shape (large border-radius)

#### Scenario: Login button click triggers form submission

- **GIVEN** the user fills in username and password
- **AND** clicks the "LOGIN" button
- **THEN** the form submission is triggered

### Login Card — Social Login

#### Scenario: Social login section is visible

- **GIVEN** the page is loaded
- **THEN** "Or Sign Up Using" text is visible below the login button
- **AND** three social login circular buttons are displayed: Facebook, Twitter, Google

#### Scenario: Social buttons have brand colors

- **GIVEN** the page is loaded
- **THEN** the Facebook button has a dark blue background (#3b5998)
- **AND** the Twitter button has a light blue background (#1da1f2)
- **AND** the Google button has a red background (#db4437)

### Login Card — Sign Up Link

#### Scenario: Sign up section is visible

- **GIVEN** the page is loaded
- **THEN** "Have not account yet?" text is visible at the bottom of the card
- **AND** a "SIGN UP" link is displayed below it (uppercase, bold)

### Footer

#### Scenario: Footer links to Component Dock

- **GIVEN** the page is loaded
- **THEN** a footer link to "https://www.componentdock.com/" is present
- **AND** the link text includes "Component Dock"

## Verification checklist

- [ ] Full-page gradient background matches screenshot (purple-to-cyan diagonal)
- [ ] Geometric angular overlays render over the gradient
- [ ] White card is centered with correct border-radius (~16px)
- [ ] "Login" heading is bold and properly sized
- [ ] Username field: label, user icon, placeholder "Type your username", underline border
- [ ] Password field: label, lock icon, placeholder "Type your password", underline border, type="password"
- [ ] "Forgot password?" link is right-aligned below password field
- [ ] LOGIN button: gradient (cyan-to-purple), pill shape, white uppercase text
- [ ] "Or Sign Up Using" text is centered
- [ ] Three circular social buttons (Facebook, Twitter, Google) with correct brand colors
- [ ] "Have not account yet?" + "SIGN UP" link at card bottom
- [ ] Footer links to Component Dock
- [ ] Responsive: card stays centered on narrow viewports
- [ ] No ColorLib references in any app code (comments, strings, URLs)
- [ ] Placeholder images use picsum.photos if needed
- [ ] Icons from lucide-react (User, Lock for inputs; Facebook, Twitter, Chrome for social)

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/lf/Login_v4/index.html` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#c471ed` — nearest `#a64bf4` (d=49)
- `#00d2ff` — nearest `#00dbde` (d=34)
- `#8e2de2` — nearest `#a64bf4` (d=42)
- `#db4437` — nearest `#ea4335` (d=15)
<!-- live-palette-unverified:end -->
