# Template: SignupBloom (Signup Form / Registration)

## Purpose

Recreation of ColorLib "Signup Form 08" (`https://colorlib.com/wp/template/signup-form-08/`).
Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-08/`.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a full-page split-layout signup form. The RIGHT half displays an
illustration (file sync / cloud theme), and the LEFT half contains a registration
form with the heading "Sign Up", four input fields (Name, Email, Password,
Re-type Password), a custom checkbox for Terms & Conditions / Privacy Policy
consent, a full-width green "Register" submit button, a divider
("or register using"), and three social login buttons (Facebook, Twitter, Google)
each as full-width colored blocks.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/signup-form-08.zip (HTTP 200, 137,264 B, sha256 `b1639a5c6739…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#38d39f` | 6 declarations — `.cl-btn-primary`, `.cl-btn-primary.disabled, .cl-btn-primary:disabled` |
| Other chromatic values | `#27b183` (2), `#7e0cf5` (1), `#0d95e8` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 9 declarations — `.cl-form-control`, `.cl-form-control:focus` |
| Ink / dark surface | `#212529` | 5 declarations — `.cl-btn`, `.cl-btn:hover` |
| Typeface | `Roboto` (3 rules — `body`) | `font-family` declarations in the design sheet |
| Radii | `0.25rem`, `50%`, `4px` | `0.25rem` (`.cl-btn`); `50%` (`.social-login a`); `4px` (`.control__indicator`) |

Palette in order of use: `#ffffff` ×9, `#38d39f` ×6, `#6c757d` ×6, `#212529` ×5, `#495057` ×2, `#27b183` ×2, `#b3b3b3` ×2, `#888888` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/bootstrap/signup-form-08/css/style.css?v=f9ad0622` — 16,570 B, sha256 `3f4716fda316…`.

## Requirements

### Requirement: Split layout

The page SHALL display a two-column split layout with the signup form on the
left and an illustration on the right on desktop viewports.

#### Scenario: Desktop layout

- **WHEN** the user views the page on a desktop viewport (>= 1200px)
- **THEN** the form is shown on the left half and the illustration on the right half

#### Scenario: Mobile layout

- **WHEN** the user views the page on a mobile viewport (< 1200px)
- **THEN** the form takes the full page width and the illustration is hidden

### Requirement: Form heading

The form SHALL display a "Sign Up" heading and a subtitle paragraph.

#### Scenario: Heading present

- **WHEN** the page loads
- **THEN** a heading with text "Sign Up" is visible

#### Scenario: Subtitle present

- **WHEN** the page loads
- **THEN** a subtitle paragraph is visible below the heading

### Requirement: Form fields

The form SHALL contain four input fields: Name, Email, Password, and Re-type
Password. Each field SHALL have a transparent background with a bottom border.

#### Scenario: Name field

- **WHEN** the user views the form
- **THEN** a text input with placeholder "Name" is present

#### Scenario: Email field

- **WHEN** the user views the form
- **THEN** an email input with placeholder "Email" is present

#### Scenario: Password field

- **WHEN** the user views the form
- **THEN** a password input with placeholder "Password" is present

#### Scenario: Re-type Password field

- **WHEN** the user views the form
- **THEN** a password input with placeholder "Re-type Password" is present

### Requirement: Terms checkbox

The form SHALL include a custom checkbox for Terms & Conditions and Privacy
Policy consent. The checkbox SHALL be checked by default.

#### Scenario: Default checked

- **WHEN** the page loads
- **THEN** the terms checkbox is checked

#### Scenario: Toggle checkbox

- **WHEN** the user clicks the checkbox
- **THEN** the checkbox state toggles

### Requirement: Register button

The form SHALL include a full-width "Register" submit button with green
background (#38d39f) and dark text (#212529). On hover the button background
SHALL change to a darker green (#29bb8a) and the text SHALL turn white.

#### Scenario: Button present

- **WHEN** the user views the form
- **THEN** a "Register" button is visible and has type "submit"

#### Scenario: Button hover

- **WHEN** the user hovers over the Register button
- **THEN** the button background changes to darker green and text turns white

### Requirement: Social login buttons

The form SHALL display three full-width social login buttons: Facebook (blue
#3b5998), Twitter (light blue #1da1f2), and Google (red #ea4335).

#### Scenario: Facebook button

- **WHEN** the user views the form
- **THEN** a "Register with Facebook" button with blue background is visible

#### Scenario: Twitter button

- **WHEN** the user views the form
- **THEN** a "Register with Twitter" button with light blue background is visible

#### Scenario: Google button

- **WHEN** the user views the form
- **THEN** a "Register with Google" button with red background is visible

### Requirement: Social divider

The form SHALL display a divider with the text "or register using" between the
Register button and the social login buttons.

#### Scenario: Divider text

- **WHEN** the user views the form
- **THEN** the text "or register using" is displayed between the button and social logins

### Requirement: Footer

The page footer SHALL link to `https://www.componentdock.com/` branded as
"Component Dock".

#### Scenario: Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to Component Dock is present and opens in a new tab

### Requirement: Illustration

The page SHALL display an illustration on the right side of the split layout.

#### Scenario: Illustration visible

- **WHEN** the user views the page on desktop
- **THEN** an illustration image is visible on the right side

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/signupbloom/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/signupbloom/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Split layout — the form is shown on the left half and the illustration on the right half
- [x] Form heading — a heading with text "Sign Up" is visible
- [x] Form fields — a text input with placeholder "Name" is present
- [ ] Terms checkbox — the terms checkbox is checked
- [x] Register button — a "Register" button is visible and has type "submit"
- [x] Social login buttons — a "Register with Facebook" button with blue background is visible
- [x] Social divider — the text "or register using" is displayed between the button and social logins
- [ ] Illustration — an illustration image is visible on the right side
