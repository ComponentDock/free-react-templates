# Template: LoginPort (Login Form)

## Purpose

A Login Form template with full-viewport centered, login card with green header, username input field and password input field sections. Recreation of ColorLib "Login Form V8" as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/login-form-v8/
- **Preview URL:** https://colorlib.com/etc/lf/Login_v8/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v8.jpg
- **New name:** `loginport` (app folder `apps/loginport`, package `@free-react-templates/loginport`)
- **Deploy URL:** https://loginport.free.componentdock.com

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/login-form-v8.zip (HTTP 200, 286,740 B, sha256 `9d6442c52211…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#1b3815` | 11 declarations — `a:hover`, `input:-moz-placeholder` |
| Other chromatic values | `#57b846` (4), `#c80000` (2) | secondary hues in the same sheet |
| Surface | `#ffffff` | 7 declarations — `.container-login100`, `.wrap-login100` |
| Ink / dark surface | `#212529` | 1 declarations — `body` |
| Typeface | **Ubuntu** — request the Google family `Ubuntu` (400/700); the sheet declares the file stems `Ubuntu-Regular` (4 rules — `.txt1`), `Ubuntu-Bold` (4 rules — `.input100`), and a font-file stem is never a family: `css?family=Ubuntu-Regular` answers HTTP 400, so an app that follows the stem falls back to the UA default | `font-family` declarations in the design sheet |
| Radii | `27px`, `20px`, `31px`, `25px` | `27px` (`.input100`); `20px` (`.wrap-login100`); `31px` (`.focus-input100`); `25px` (`.login100-form-btn`) |

Palette in order of use: `#1b3815` ×11, `#ffffff` ×7, `#57b846` ×4, `#ebebeb` ×2, `#c80000` ×2, `#212529` ×1, `#007bff` ×1, `#0056b3` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `etc/lf/Login_v8/css/style.css?v=d49f9ef0` — 10,715 B, sha256 `f8e0e3b12609…`.

## Requirements

### Requirement: Full-viewport centered layout

The login form SHALL render centered on a full-viewport white background.

#### Scenario: Page renders

- **WHEN** the user navigates to LoginPort
- **THEN** the page background is white (#ffffff) and covers the full viewport height
- **AND** the login card is centered both horizontally and vertically

### Requirement: Login card with green header

The form SHALL be contained in a white card with rounded corners and a green header strip displaying "Sign In".

#### Scenario: Card renders

- **WHEN** the page loads
- **THEN** a card with width 500px, white background, border-radius 20px, and a subtle box shadow is visible
- **AND** a green (#57b846) header strip appears at the top of the card
- **AND** the text "Sign In" is displayed in the header in Josefin Sans Bold, white color, centered

#### Scenario: Card responsive layout

- **WHEN** the viewport is 375px wide
- **THEN** the card shrinks to fit the viewport width
- **AND** the card has 15px padding

### Requirement: Username input field

The form SHALL include a pill-shaped username input field.

#### Scenario: Username input renders

- **WHEN** the page loads
- **THEN** a text input with placeholder "Username" is visible
- **AND** the input has a gray (#ebebeb) background
- **AND** the input is pill-shaped with border-radius 27px
- **AND** the input is 55px tall
- **AND** the input text is dark green (#1b3815) in Ubuntu Bold 15px

### Requirement: Password input field

The form SHALL include a pill-shaped password input field that masks typed characters.

#### Scenario: Password input renders

- **WHEN** the page loads
- **THEN** a password input with placeholder "Password" is visible
- **AND** the input has a gray (#ebebeb) background
- **AND** the input is pill-shaped with border-radius 27px
- **AND** typed characters are masked

### Requirement: Input focus expansion effect

Input fields SHALL expand slightly when focused, creating a smooth animation.

#### Scenario: Focus expansion

- **WHEN** the user focuses on the username or password input
- **THEN** the input background area expands by 20px width
- **AND** the expansion animates with a smooth 0.4s transition

### Requirement: Forgot password link

The form SHALL display a "Forgot Username / Password?" link right-aligned below the inputs.

#### Scenario: Forgot link renders

- **WHEN** the page loads
- **THEN** the text "Forgot" is visible in muted gray (#999999)
- **AND** a link labeled "Username / Password?" appears next to it in green (#57b846)
- **AND** the link is right-aligned

### Requirement: Sign in submit button

The form SHALL include a full-width green pill-shaped submit button labeled "Sign in".

#### Scenario: Button renders

- **WHEN** the page loads
- **THEN** a button labeled "Sign in" is visible
- **AND** the button has green (#57b846) background
- **AND** the button is pill-shaped with border-radius 25px
- **AND** the button is full-width and 50px tall
- **AND** the button text is uppercase and white

#### Scenario: Button hover

- **WHEN** the user hovers over the "Sign in" button
- **THEN** the button background changes to dark green (#1b3815)
- **AND** the transition animates smoothly (0.4s)

### Requirement: Sign up section

The form SHALL display a "Don't have an account?" prompt with a "Sign up now" link at the bottom.

#### Scenario: Sign up renders

- **WHEN** the page loads
- **THEN** text "Don't have an account?" is visible at the bottom of the card in muted gray (#999999)
- **AND** a link labeled "Sign up now" appears next to it
- **AND** the link is uppercase and green (#57b846)
- **AND** clicking the link navigates to "#" (non-navigating)

### Requirement: Form validation

The form SHALL validate that username and password are provided on submit.

#### Scenario: Empty submit shows errors

- **WHEN** the user clicks "Sign in" without entering any values
- **THEN** an error message "Username is required" appears below the username input
- **AND** an error message "Password is required" appears below the password input

#### Scenario: Valid submit clears errors

- **WHEN** the user enters a username and password and clicks "Sign in"
- **THEN** no error messages are displayed

### Requirement: Responsive layout

The form SHALL be fully usable on mobile viewports.

#### Scenario: Mobile layout

- **WHEN** the viewport is resized to 375px width
- **THEN** the form shrinks to fit the viewport width
- **AND** all inputs, buttons, and links remain usable

### Requirement: Semantic accessibility

The form SHALL use semantic HTML elements with proper accessibility attributes.

#### Scenario: Accessibility

- **WHEN** the page loads
- **THEN** the form uses semantic HTML elements
- **AND** inputs have associated placeholders
- **AND** the button has an accessible name

### Requirement: Footer links to Component Dock

The page footer SHALL contain a branded link to the Component Dock website.

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text references "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/loginport/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/loginport/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Full-viewport centered layout — the page background is white (#ffffff) and covers the full viewport height
- [ ] Login card with green header — a card with width 500px, white background, border-radius 20px, and a subtle box shadow is visible
- [x] Username input field — a text input with placeholder "Username" is visible
- [x] Password input field — a password input with placeholder "Password" is visible
- [ ] Input focus expansion effect — the input background area expands by 20px width
- [x] Forgot password link — the text "Forgot" is visible in muted gray (#999999)
- [x] Sign in submit button — a button labeled "Sign in" is visible
- [x] Sign up section — text "Don't have an account?" is visible at the bottom of the card in muted gray (#999999)
- [x] Form validation — an error message "Username is required" appears below the username input
- [ ] Responsive layout — the form shrinks to fit the viewport width
- [ ] Semantic accessibility — the form uses semantic HTML elements
