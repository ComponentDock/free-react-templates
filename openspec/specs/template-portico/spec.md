# Template: Portico (Login Forms)

**Original:** ColorLib Login Form 01 (https://colorlib.com/wp/template/login-form-01/)
**Preview:** https://preview.colorlib.com/theme/login-form-01/ (unreachable — screenshot used as sole reference)
**New name:** Portico

## Purpose

Portico provides a clean split-screen login form template with a white form panel on the left and a full-height decorative image on the right. It is designed for authentication pages that need a modern, minimal aesthetic with visual depth.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/login-form-01/` | HTTP 200 · 2,204 B · title `Login #2` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/login-form-01/css/style.css?v=16b53b3c` | HTTP 200 · 16,206 B · sha256 `c99bcd5ae76b` |

> ⚠️ the demo's own `<title>` reads `Login #2` though the path is `login-
> form-01` — the host's titles are not reliable labels; the readings above
> are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×9,
`#007bff`×7, `#6c757d`×6, `#212529`×3, `#0056b3`×2, `#495057`×2,
`#0062cc`×2, `#b3b3b3`×2, `#efefef`×2, `#888888`×2.

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#b3b3b3`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Requirement: Split-screen layout

The template SHALL render a split-screen layout with a form panel on the left and a decorative image panel on the right, spanning the full viewport height.

#### Scenario: Desktop layout shows both panels

- **WHEN** the page loads on a desktop viewport (≥ 992px — `.cl-d-lg-flex` is applied from `@media (min-width: 992px)`)
- **THEN** the left form panel and right image panel are both visible side by side

#### Scenario: Mobile layout stacks the image panel

- **WHEN** the page loads on a mobile viewport (< 992px — `@media (max-width: 991.98px)`)
- **THEN** the form panel spans the width and the image panel sits below it as a 500px band (`.half .bg { height: 500px }` at `max-width: 991.98px` — the source stacks it, it never hides it)

### Requirement: Login form fields

The template SHALL render a login form with username and password inputs, each with a visible label above the field.

#### Scenario: Username input accepts text

- **WHEN** the user types into the username field
- **THEN** the field accepts and displays the typed text

#### Scenario: Password input is masked

- **WHEN** the user types into the password field
- **THEN** the input is masked (type="password")

#### Scenario: Both fields are required

- **WHEN** the form is rendered
- **THEN** both username and password fields have the required attribute

### Requirement: Remember me and forgot password

The template SHALL render a "Remember me" checkbox and a "Forgot Password" link below the password field.

#### Scenario: Remember me checkbox toggles

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox state toggles

#### Scenario: Forgot Password link present

- **WHEN** the page loads
- **THEN** a "Forgot Password" link is visible and points to "#forgot"

### Requirement: Submit button

The template SHALL render a full-width "Log In" submit button.

#### Scenario: Button is present and clickable

- **WHEN** the page loads
- **THEN** a "Log In" button is visible and can be clicked to submit the form

### Requirement: Footer with Component Dock link

The template SHALL render a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link present

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link is visible
- **AND** the link points to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

### Requirement: Heading and subtitle

The template SHALL render a heading "Login to Portico" and a welcome subtitle above the form.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** the heading "Login to Portico" is displayed

#### Scenario: Subtitle is visible

- **WHEN** the page loads
- **THEN** a welcome subtitle text is displayed below the heading

### Requirement: Document title

The template SHALL set the document title to "Portico — Login Form Template" on mount.

#### Scenario: Title set on load

- **WHEN** the app mounts
- **THEN** document.title equals "Portico — Login Form Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/portico/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/portico/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Split-screen layout — the left form panel and right image panel are both visible side by side
- [ ] Login form fields — the field accepts and displays the typed text
- [ ] Remember me and forgot password — the checkbox state toggles
- [ ] Submit button — a "Log In" button is visible and can be clicked to submit the form
- [ ] Heading and subtitle — the heading "Login to Portico" is displayed
- [ ] Document title — document.title equals "Portico — Login Form Template"
