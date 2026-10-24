# Template: Threshold (Login Forms)

**Original:** ColorLib Login Form 02 (https://colorlib.com/wp/template/login-form-02/)
**Preview:** https://preview.colorlib.com/theme/bootstrap/login-form-02/
**New name:** Threshold

## Purpose

Threshold provides a 50/50 split-screen login form template with a light form panel on the left and a full-height decorative image on the right. It uses the Roboto font (weights 300, 400) and a distinctive orange (#fb771a) checkbox accent. Designed for authentication pages that need a modern, minimal aesthetic with visual depth.
- **Source design:** ColorLib "Login Form 02" — https://colorlib.com/wp/template/login-form-02/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/login-form-02.zip (HTTP 200, 309,748 B, sha256 `cd688edf9433…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#fb771a` | 7 declarations — `.cl-btn-primary`, `.cl-btn-primary.disabled, .cl-btn-primary:disabled` |
| Other chromatic values | `#c55303` (2), `#de5e04` (2), `#eb6304` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 10 declarations — `.cl-form-control`, `.cl-form-control:focus` |
| Ink / dark surface | `#212529` | 3 declarations — `.cl-btn`, `.cl-btn:hover` |
| Typeface | `Roboto` (3 rules — `body`) | `font-family` declarations in the design sheet |
| Radii | `0.25rem`, `4px` | `0.25rem` (`.cl-btn`); `4px` (`.control__indicator`) |

Palette in order of use: `#ffffff` ×10, `#fb771a` ×7, `#6c757d` ×6, `#212529` ×3, `#c55303` ×2, `#495057` ×2, `#de5e04` ×2, `#888888` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `theme/bootstrap/login-form-02/css/style.css?v=e3782ab8` — 15,785 B, sha256 `cd32bc0ffc53…`.

## Requirements

### Requirement: Split-screen layout

The template SHALL render a 50/50 split-screen layout with a form panel on the left (bg #f6f7fc) and a decorative image panel on the right, spanning the full viewport height.

#### Scenario: Desktop layout shows both panels

- **WHEN** the page loads on a desktop viewport (≥ 992px — `.cl-d-lg-flex` is applied from `@media (min-width: 992px)`)
- **THEN** the left form panel and right image panel are both visible side by side

#### Scenario: Mobile layout stacks the image panel

- **WHEN** the page loads on a mobile viewport (< 992px — `@media (max-width: 991.98px)`)
- **THEN** the form panel spans the width and the image panel sits below it as a 200px band (`.half .bg { height: 200px }` at `max-width: 991.98px` — the source stacks it, it never hides it)

### Requirement: Login form fields

The template SHALL render a login form with username and password inputs, each with a visible label above the field.

#### Scenario: Username input accepts text

- **WHEN** the user types into the username field
- **THEN** the field accepts and displays the typed text

#### Scenario: Password input is masked

- **WHEN** the user types into the password field
- **THEN** the input is masked (type="password")

### Requirement: Remember me and forgot password

The template SHALL render a "Remember me" checkbox and a "Forgot Password" link below the password field.

#### Scenario: Remember me checkbox toggles

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox state toggles

#### Scenario: Forgot Password link present

- **WHEN** the page loads
- **THEN** a "Forgot Password" link is visible and points to "#forgot"

### Requirement: Submit button

The template SHALL render a full-width "Log In" submit button with 54px height.

#### Scenario: Button is present and clickable

- **WHEN** the page loads
- **THEN** a "Log In" button is visible and can be clicked to submit the form

### Requirement: Form submission

The template SHALL handle form submission and prevent default browser navigation.

#### Scenario: Form submits without navigation

- **WHEN** the user fills in credentials and clicks "Log In"
- **THEN** the form submission is handled without page navigation

### Requirement: Footer with Component Dock link

The template SHALL render a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link present

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link is visible
- **AND** the link points to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

### Requirement: Heading and subtitle

The template SHALL render a heading "Welcome Back" and a welcome subtitle above the form.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** the heading "Welcome Back" is displayed

#### Scenario: Subtitle is visible

- **WHEN** the page loads
- **THEN** a welcome subtitle text is displayed below the heading

### Requirement: Background image panel

The template SHALL render a decorative background image panel on the right side using picsum.photos.

#### Scenario: Background image panel exists

- **WHEN** the page loads on a desktop viewport
- **THEN** a decorative image panel is visible on the right side

### Requirement: Document title

The template SHALL set the document title to "Threshold — Login Form Template" on mount.

#### Scenario: Title set on load

- **WHEN** the app mounts
- **THEN** document.title equals "Threshold — Login Form Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/threshold/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/threshold/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Split-screen layout — the left form panel and right image panel are both visible side by side
- [ ] Login form fields — the field accepts and displays the typed text
- [ ] Remember me and forgot password — the checkbox state toggles
- [x] Submit button — a "Log In" button is visible and can be clicked to submit the form
- [ ] Form submission — the form submission is handled without page navigation
- [x] Heading and subtitle — the heading "Welcome Back" is displayed
- [ ] Background image panel — a decorative image panel is visible on the right side
- [x] Document title — document.title equals "Threshold — Login Form Template"
