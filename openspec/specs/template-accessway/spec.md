# Template: Accessway (Login Form)

## Purpose

Recreation of ColorLib "Login Form 19" (https://colorlib.com/wp/template/login-form-19/). A centered dark navy login card with circular avatar, username/password fields with icons, and a Get Started button.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/login-form-19.zip (HTTP 200, 76,323 B, sha256 `2796b0d5f727…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#b689b0` | 5 declarations — `.cl-form-control:focus, .cl-form-control:active`, `a` |
| Other chromatic values | `#80bdff` (1), `#005cbf` (1), `#000232` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 10 declarations — `.cl-form-control`, `.cl-form-control:focus` |
| Ink / dark surface | `#000000` | 2 declarations — `.heading-section`, `h2, h3, .h2, .h3` |
| Typeface | `Lato` (2 rules — `body`) | `font-family` declarations in the design sheet |
| Radii | `0.25rem`, `5px`, `50%`, `40px` | `0.25rem` (`.cl-btn`); `5px` (`.login-wrap`); `50%` (`.login-wrap .img`); `40px` (`.cl-btn`) |

Palette in order of use: `#ffffff` ×10, `#007bff` ×5, `#b689b0` ×5, `#6c757d` ×4, `#212529` ×3, `#495057` ×2, `#0062cc` ×2, `#000000` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/bootstrap/login-form-19/css/style.css?v=f8ccea4d` — 15,520 B, sha256 `b3092c347932…`.

## Requirements

### Requirement: Render the login card layout

The template SHALL display a centered card with a dark navy background (#000232), rounded corners, and a drop shadow.

#### Scenario: Card is visible and centered

- **WHEN** the page loads
- **THEN** a card element with dark navy background is visible and centered on the page

### Requirement: Display the avatar

The template SHALL display a 100px circular avatar image at the top center of the card.

#### Scenario: Avatar renders as a circle

- **WHEN** the page loads
- **THEN** an avatar element with rounded-full shape and 100px dimensions is visible

### Requirement: Display welcome heading and subtitle

The template SHALL display a "Welcome" heading (uppercase, white) and a subtitle "Sign in by entering the information below" (white 50% opacity).

#### Scenario: Heading and subtitle are visible

- **WHEN** the page loads
- **THEN** the text "Welcome" and "Sign in by entering the information below" are visible

### Requirement: Render username input with icon

The template SHALL display a username text input field with a user icon on the left side.

#### Scenario: Username field accepts input

- **WHEN** the user types in the username field
- **THEN** the field accepts and displays the typed text

### Requirement: Render password input with icon

The template SHALL display a password input field with a lock icon on the left side.

#### Scenario: Password field accepts input

- **WHEN** the user types in the password field
- **THEN** the field accepts and displays the typed text as masked characters

### Requirement: Display Forgot Password link

The template SHALL display a "Forgot Password" link right-aligned above the submit button.

#### Scenario: Forgot Password link is clickable

- **WHEN** the user clicks the Forgot Password link
- **THEN** the link navigates to the forgot password target

### Requirement: Display Get Started submit button

The template SHALL display a full-width "Get Started" button with the primary accent color.

#### Scenario: Button submits the form

- **WHEN** the user clicks the Get Started button
- **THEN** the form submission is triggered

### Requirement: Display Sign Up CTA

The template SHALL display "Don't have an account? Sign Up" text below the form.

#### Scenario: Sign Up link is present

- **WHEN** the page loads
- **THEN** a "Sign Up" link is visible and clickable

### Requirement: Link to Component Dock in footer

The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present

- **WHEN** the page loads
- **THEN** a link with text "More templates at Component Dock" pointing to https://www.componentdock.com/ is visible in the footer

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/accessway/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/accessway/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Render the login card layout — a card element with dark navy background is visible and centered on the page
- [ ] Display the avatar — an avatar element with rounded-full shape and 100px dimensions is visible
- [x] Display welcome heading and subtitle — the text "Welcome" and "Sign in by entering the information below" are visible
- [ ] Render username input with icon — the field accepts and displays the typed text
- [ ] Render password input with icon — the field accepts and displays the typed text as masked characters
- [ ] Display Forgot Password link — the link navigates to the forgot password target
- [ ] Display Get Started submit button — the form submission is triggered
- [x] Display Sign Up CTA — a "Sign Up" link is visible and clickable
