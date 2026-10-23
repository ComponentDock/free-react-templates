# Template: SignWell (Login Form)

## Purpose

Recreation of ColorLib "Login Form 10"
(https://colorlib.com/wp/template/login-form-10/).
A clean, modern login page with social login buttons on the left and a
traditional username/password form on the right, separated by a divider.
Preview was unreachable (404); design based on screenshot.

## Design Tokens

- Background: `#f5f5f5` (light gray)
- Card: white with subtle shadow
- Login button: `#4ecdc4` (teal/mint green), rounded, full-width
- Facebook button: `#3b5998` (dark navy)
- Twitter button: `#1da1f2` (sky blue)
- Google button: `#dd4b39` (coral red)
- Text: dark gray headings, gray subtitle
- Font: Poppins (Google Fonts)
- Inputs: bordered, clean, no background fill
- Checkbox: teal when checked

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/login-form-10/` | HTTP 200 · 5,028 B · title `Login #10` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/login-form-10/css/style.css?v=32eff87a` | HTTP 200 · 16,446 B · sha256 `457117e0d2a6` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×10,
`#38d39f`×6, `#6c757d`×6, `#212529`×5, `#495057`×2, `#27b183`×2,
`#b3b3b3`×2, `#cccccc`×2, `#888888`×2, `#e6e6e6`×2.

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#b3b3b3`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#4ecdc4`.

## Requirements

### Requirement: App composition and title

The app SHALL compose a login page with social login section, divider, and
login form card, and set the document title.

#### Scenario: Page renders with all sections

- **WHEN** the app loads
- **THEN** the page displays a social login section, a divider, and a login form card
- **AND** `document.title` is "SignWell — Login Form Template"

#### Scenario: Header and footer present

- **WHEN** the app loads
- **THEN** a banner (header) and contentinfo (footer) are present

### Requirement: Login form fields

The login form SHALL include username and password inputs, a remember-me
checkbox, a forgot-password link, and a log-in button.

#### Scenario: Username input exists

- **WHEN** the login form is visible
- **THEN** a text input with placeholder "Username" is present

#### Scenario: Password input exists

- **WHEN** the login form is visible
- **THEN** a password input with placeholder "Password" is present

#### Scenario: Remember me checkbox

- **WHEN** the login form is visible
- **THEN** a "Remember me" checkbox is present and unchecked by default

#### Scenario: Forgot Password link

- **WHEN** the login form is visible
- **THEN** a link with text "Forgot Password" is present

#### Scenario: Log In button

- **WHEN** the login form is visible
- **THEN** a button with text "Log In" is present

#### Scenario: Form submission prevented

- **GIVEN** the user fills in username and password
- **WHEN** the user clicks "Log In"
- **THEN** the page does not reload (default prevented)

### Requirement: Social login buttons

The page SHALL display three social login buttons (Facebook, Twitter, Google)
with appropriate brand colors.

#### Scenario: Three social buttons

- **WHEN** the social login section renders
- **THEN** buttons for Facebook, Twitter, and Google are present

#### Scenario: Social button label

- **WHEN** the social login section renders
- **THEN** the text "or sign in with" is displayed above the buttons

### Requirement: Divider

The page SHALL display a divider between the social and form sections.

#### Scenario: Divider text

- **WHEN** the page renders
- **THEN** a separator with text "or" is visible between the two sections

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Footer Component Dock link

- **WHEN** the footer renders
- **THEN** a link to "https://www.componentdock.com/" with text containing "Component Dock" is present

### Requirement: Responsive layout

The layout SHALL stack vertically on narrow viewports.

#### Scenario: Mobile layout

- **GIVEN** the viewport width is less than 768px
- **WHEN** the page renders
- **THEN** the social buttons and login form are stacked vertically

### Requirement: Dark mode

The app SHALL support dark mode via a toggle.

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle
- **THEN** the html element gains the "dark" class

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/signwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/signwell/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] App composition and title — the page displays a social login section, a divider, and a login form card
- [x] Login form fields — a text input with placeholder "Username" is present
- [ ] Social login buttons — buttons for Facebook, Twitter, and Google are present
- [ ] Divider — a separator with text "or" is visible between the two sections
- [ ] Responsive layout — the social buttons and login form are stacked vertically
- [x] Dark mode — the html element gains the "dark" class
