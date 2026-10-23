# Template: Portalink (Login Forms)

**Original:** ColorLib Login Form 15 (https://colorlib.com/wp/template/login-form-15/)
**Preview:** https://preview.colorlib.com/theme/login-form-15/ (unreachable — screenshot used as sole reference)
**New name:** Portalink

## Purpose

Portalink provides a centered white login card on a light gray background with a hero image spanning the top of the card. It features social login icons (Facebook, Twitter), username and password fields with a password visibility toggle, a green pill-shaped "Sign In" button, remember-me checkbox, forgot-password link, and sign-up CTA. Designed for authentication pages needing a clean, modern card-based layout.

## Design Tokens

- Background: #f5f5f5 (light gray)
- Card: #ffffff (white)
- Primary accent: #4ecdc4 (teal/mint green) — button, links, checkbox, focus ring
- Primary hover: #3dbdb5 (darker teal)
- Text ink: #333333 (dark gray)
- Caption text: #999999 (medium gray)
- Input border: rgba(0, 0, 0, 0.1)
- Social icon border: rgba(0, 0, 0, 0.1)
- Social icon text: #aaaaaa
- Shadow: 0px 0px 45px rgba(0, 0, 0, 0.08)
- Font: Poppins (Google Fonts)
- Button radius: 25px (rounded pill)

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/login-form-15/` | HTTP 200 · 6,220 B · title `Login 05` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/login-form-15/css/style.css?v=2bbea40a` | HTTP 200 · 19,738 B · sha256 `0197d757ab31` |

> ⚠️ the demo's own `<title>` reads `Login 05` though the path is `login-
> form-15` — the host's titles are not reliable labels; the readings above
> are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×11,
`#01d28e`×11, `#007bff`×5, `#6c757d`×4, `#212529`×3, `#000000`×3,
`#495057`×2, `#0062cc`×2, `#0056b3`×1, `#ced4da`×1.

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#4ecdc4`, `#3dbdb5`.

## Requirements

### Requirement: Centered card layout

The template SHALL render a centered white card on a light gray background with a hero image at the top.

#### Scenario: Card is centered on page

- **WHEN** the page loads
- **THEN** the login card is centered horizontally and vertically on the viewport

#### Scenario: Hero image renders at top of card

- **WHEN** the page loads
- **THEN** a decorative hero image is visible at the top of the card

### Requirement: Login form fields

The template SHALL render a login form with username and password inputs.

#### Scenario: Username input accepts text

- **WHEN** the user types into the username field
- **THEN** the field accepts and displays the typed text

#### Scenario: Password input is masked by default

- **WHEN** the user types into the password field
- **THEN** the input is masked (type="password")

#### Scenario: Password visibility toggle

- **WHEN** the user clicks the show password button
- **THEN** the password field type changes to "text"
- **AND** the button aria-label changes to "Hide password"

#### Scenario: Password visibility toggle reverts

- **WHEN** the password is visible and the user clicks the hide password button
- **THEN** the password field type changes back to "password"
- **AND** the button aria-label changes to "Show password"

### Requirement: Sign In button

The template SHALL render a full-width rounded green "Sign In" button.

#### Scenario: Button renders with correct styling

- **WHEN** the page loads
- **THEN** the Sign In button is visible, full-width, and has a rounded pill shape

#### Scenario: Form submits without error

- **WHEN** the user fills in username and password and clicks Sign In
- **THEN** the form submits without JavaScript error

### Requirement: Remember me and forgot password

The template SHALL render a "Remember Me" checkbox and a "Forgot Password" link.

#### Scenario: Remember Me checkbox is checked by default

- **WHEN** the page loads
- **THEN** the Remember Me checkbox is checked

#### Scenario: Remember Me checkbox toggles

- **WHEN** the user clicks the Remember Me checkbox
- **THEN** the checkbox state toggles

#### Scenario: Forgot Password link present

- **WHEN** the page loads
- **THEN** a "Forgot Password" link is visible and points to "#forgot"

### Requirement: Social login icons

The template SHALL render Facebook and Twitter icon links in the form header area.

#### Scenario: Social icons render

- **WHEN** the page loads
- **THEN** a Facebook icon link with aria-label "Login with Facebook" is visible
- **AND** a Twitter icon link with aria-label "Login with Twitter" is visible

#### Scenario: Social icons are circular

- **WHEN** the page loads
- **THEN** the social icon links have a rounded-full border-radius

### Requirement: Sign Up CTA

The template SHALL render a "Not a member? Sign Up" call to action.

#### Scenario: Sign Up link renders

- **WHEN** the page loads
- **THEN** "Not a member?" text is visible with a "Sign Up" link pointing to "#signup"

### Requirement: Footer

The template SHALL render a footer with a Component Dock link.

#### Scenario: Footer link renders

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link is visible
- **AND** it links to https://www.componentdock.com/
- **AND** it opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/portalink/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/portalink/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Centered card layout — the login card is centered horizontally and vertically on the viewport
- [ ] Login form fields — the field accepts and displays the typed text
- [ ] Sign In button — the Sign In button is visible, full-width, and has a rounded pill shape
- [ ] Remember me and forgot password — the Remember Me checkbox is checked
- [x] Social login icons — a Facebook icon link with aria-label "Login with Facebook" is visible
- [ ] Sign Up CTA — "Not a member?" text is visible with a "Sign Up" link pointing to "#signup"
