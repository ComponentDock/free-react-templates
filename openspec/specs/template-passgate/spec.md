# Template: Passgate (Login Form)

Recreation of ColorLib **Login Form 04**
(https://colorlib.com/wp/template/login-form-04/).

## Purpose

A split-screen login page: a decorative background image on the left (25%
width on desktop, full-width banner on mobile) and a centered white card on
the right containing username/password fields, a "Remember me" checkbox, a
"Forgot Password" link, and a full-width "Log In" button.

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#fb771a` | live sheet paints it ×7 — `background-color` on `.cl-btn-primary`; style.css?v=dfa8daa4 (15,591 B, sha256 269a2cad14c3) · <https://preview.colorlib.com/theme/bootstrap/login-form-04/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Split-screen layout

The template SHALL display a two-panel layout: a background image on the left
(25% width on desktop) and a form area on the right (75% width). On mobile,
the image becomes a 200px banner above the form.

#### Scenario: Desktop layout

- **WHEN** the viewport is >= 768px
- **THEN** the background image occupies 25% width on the left
- **AND** the form area occupies 75% width on the right

#### Scenario: Mobile layout

- **WHEN** the viewport is < 768px
- **THEN** a 200px background image banner appears above the form
- **AND** the form area is full width

### Requirement: Login form card

The template SHALL render a white card (max-width 400px, box-shadow) centered
in the form area with the following elements:

#### Scenario: Form fields

- **WHEN** the card renders
- **THEN** a heading "Login to **Passgate**" is displayed centered
- **AND** a username text input with label "Username" and placeholder "your-email@gmail.com" is present
- **AND** a password input with label "Password" and placeholder "Your Password" is present
- **AND** both fields are required

#### Scenario: Remember me checkbox

- **WHEN** the card renders
- **THEN** a "Remember me" checkbox is present and checked by default
- **AND** clicking it toggles its state

#### Scenario: Forgot password link

- **WHEN** the card renders
- **THEN** a "Forgot Password" link is present

#### Scenario: Log In button

- **WHEN** the card renders
- **THEN** a full-width "Log In" button is present

### Requirement: Design tokens

The template SHALL use the following design tokens:

#### Scenario: Color palette

- **WHEN** the template renders
- **THEN** body background is #f6f7fc
- **AND** card background is #ffffff
- **AND** input background is #efefef
- **AND** brand accent is #fb771a
- **AND** caption/link color is #888888
- **AND** text color is #333333

### Requirement: Typography

The template SHALL use the Roboto font loaded via Google Fonts.

#### Scenario: Font loading

- **WHEN** the page loads
- **THEN** Roboto font weights 300, 400, 500, 700 are available

### Requirement: Footer

The template SHALL render a footer linking to componentdock.com.

#### Scenario: Footer link

- **WHEN** the footer renders
- **THEN** a "More templates at Component Dock" link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Accessibility

The template SHALL be accessible with proper labels and ARIA attributes.

#### Scenario: Form labels

- **WHEN** the form renders
- **THEN** each input has an associated label via htmlFor/id
- **AND** the background image has an aria-label

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/passgate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/passgate/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Split-screen layout — the background image occupies 25% width on the left
- [ ] Login form card — a heading "Login to **Passgate**" is displayed centered
- [ ] Typography — Roboto font weights 300, 400, 500, 700 are available
- [ ] Accessibility — each input has an associated label via htmlFor/id
