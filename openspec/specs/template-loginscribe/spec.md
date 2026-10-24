# Template: Loginscribe (Welcome Login Form)

## Purpose

A Welcome Login Form template with email input with gradient and gradient login button sections. Recreate the ColorLib "Login Form V2" (https://colorlib.com/wp/template/login-form-v2/) as a centered welcome login card with gradient accents, avatar icon, email/password inputs with visibility toggle, and a gradient pill-shaped submit button.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://colorlib.com/etc/lf/Login_v2/index.html (HTTP 200, 3,544 B, fetched 2026-10-23) and its theme stylesheet `etc/lf/Login_v2/css/style.css` (13,288 B, sha256 `026b9c62699c…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#21d4fd` | 24 declarations — `.btn-show-pass:hover`, `a:hover` |
| Other chromatic values | `#b721ff`, `#6a7dfe`, `#c80000` | `#b721ff` × 24 (a:hover); `#6a7dfe` × 4 (a:hover); `#c80000` × 3 (.alert-validate::before) |
| Surface | `#ffffff` | 5 declarations — `.login100-form-btn`, `body` |
| Ink / dark surface | `#333333` | 2 declarations — `.login100-form-title`, `.txt2` |
| Typeface | **Poppins** — request the Google family `Poppins` (400/500/700); the sheet declares the file stems `Poppins-Regular` (6 rules — a); it also declares `-apple-system, sans-serif` (1 rule — body), and a font-file stem is never a family: `css?family=Poppins-Regular` answers HTTP 400, so an app that follows the stem falls back to the UA default | `font-family` declarations in the theme sheet |
| Radii | `10px`, `25px`, `2px` | `10px` (.wrap-login100); `25px` (.wrap-login100-form-btn); `2px` (.alert-validate::before) |

Palette in order of use: `#21d4fd` ×24, `#b721ff` ×24, `#adadad` ×8, `#ffffff` ×5, `#6a7dfe` ×4, `#c80000` ×3.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Renders welcome heading and avatar

Users SHALL see a bold "Welcome" heading and a dark avatar icon with letter "A" at the top of the login card.

#### Scenario: Heading is visible

- **WHEN** the login page loads
- **THEN** the heading "Welcome" is displayed

#### Scenario: Avatar is visible

- **WHEN** the login page loads
- **THEN** a user avatar with letter "A" is displayed

### Requirement: Email input with gradient underline

Users SHALL be able to enter their email address in an input field that shows a gradient underline (cyan to purple).

#### Scenario: Email accepts text input

- **WHEN** the user types "user@example.com" in the email field
- **THEN** the email field contains "user@example.com"

### Requirement: Password input with visibility toggle

Users SHALL be able to enter their password (hidden by default) and toggle visibility with an eye icon button.

#### Scenario: Password is hidden by default

- **WHEN** the login page loads
- **THEN** the password field type is "password"

#### Scenario: Show password

- **WHEN** the user clicks the show password button
- **THEN** the password field type becomes "text"

#### Scenario: Hide password

- **WHEN** the password is visible and the user clicks the hide password button
- **THEN** the password field type becomes "password"

### Requirement: Gradient LOGIN button

Users SHALL see a full-width, pill-shaped LOGIN button with a cyan-to-purple gradient background.

#### Scenario: Button has gradient

- **WHEN** the login page loads
- **THEN** the LOGIN button has a gradient background and is full width with rounded-full styling

#### Scenario: Form submits without error

- **WHEN** the user fills in email and password and clicks LOGIN
- **THEN** the form submits without error

### Requirement: Footer with Component Dock link

Users SHALL see a "Don't have an account? Sign Up" line in the footer, where "Sign Up" links to Component Dock.

#### Scenario: Footer link points to Component Dock

- **WHEN** the login page loads
- **THEN** the "Sign Up" link has href "https://www.componentdock.com/" and opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/loginscribe/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/loginscribe/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Renders welcome heading and avatar — the heading "Welcome" is displayed
- [ ] Email input with gradient underline — the email field contains "user@example.com"
- [x] Password input with visibility toggle — the password field type is "password"
- [ ] Gradient LOGIN button — the LOGIN button has a gradient background and is full width with rounded-full styling
