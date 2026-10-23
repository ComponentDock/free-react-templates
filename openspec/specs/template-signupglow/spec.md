# Template: SignupGlow (Signup Forms)

## Purpose

Recreation of ColorLib Signup Form 12 as a free React signup form template with golden accent colors, built with React, Tailwind CSS 4, and TypeScript. Original: https://colorlib.com/wp/template/signup-form-12/

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Signup Form 12** — https://colorlib.com/wp/template/signup-form-12/
- **Preview**: the slug-only path is a 404; the live demo is the Bootstrap-form
  family path **`https://preview.colorlib.com/theme/bootstrap/signup-form-12/`**
  — HTTP 200, title `Sign Up 01` (the served title is the demo label, not the slug).
- **Stylesheet measured**: `css/style.css?v=4e2c0ed1` — **17,420 B** (Bootstrap 4
  residue + the form layer; self-hosted Roboto 400/500/700 and a FontAwesome
  subset for the avatar badge).
- **Measured how**: hex-literal census of that sheet, then the winning rule per
  selector. The earlier "extracted from screenshot" values are corrected here —
  the screenshot's gold reads `#c9b458` only because of JPEG/AVIF compression;
  the sheet says `#d5c455`.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand gold | `#d5c455` | 8 | `a` colour, `.cl-btn.cl-btn-primary` fill + `1px` border (hover → transparent fill + gold label), `.cl-form-control:focus,:active` border, `.social-media .social-icon:hover` fill, `.login-wrap .img:before` badge dot |
| Page ground | `#f8f9fd` | 1 | `body { background: #f8f9fd }` |
| Card | `#fff` | 13 | `.login-wrap` panel, `.img` panel, button label |
| Heading ink | `#000` | 3 | `h2,h3` (weight **400**) |
| Body copy | `gray` (`#808080`) | — | `body { color: gray }`, 16 px / 1.8 |
| Field ink | `#495057` | 2 | `.cl-form-control` |
| Framework | `#007bff` 5 / `#6c757d` 4 / `#ced4da` 1 | — | Bootstrap layer only |
| Not in the sheet | `#3b5998`, `#1da1f2`, `#8bc34a` | 0 | the app's social-brand and "badge green" tokens have **no** reference rule |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Everything | `"Roboto", Arial, sans-serif` | `body` rule (the Bootstrap system stack is overridden by the later theme rule) |
| Body | 16 px / line-height 1.8, `gray` | `body` |
| Headings | `h2,h3` weight **400**, `#000`, `line-height: 1.5` | theme heading rule |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Buttons | `.cl-btn` **`border-radius: 40px`** (pill), `.cl-btn-primary` gold fill + `1px solid #d5c455` + white label, hover → transparent fill + gold label |
| Fields | `.cl-form-control` full-width, Bootstrap `1px #ced4da` border, focus border gold and **no** shadow |
| Card | `.login-wrap` white panel with a right-hand `.img` photo panel carrying a `12×12 px` gold badge dot (plus a FontAwesome `\f067` plus glyph); `10px` radius |
| Bands | one screen: `#f8f9fd` ground → centred "Sign Up #01" heading → white card (photo right, form left) |

## Requirements

### Requirement: Page title

The template SHALL display "Sign Up #01" centered above the signup card.

#### Scenario: Title renders

- **WHEN** a user visits the page
- **THEN** the heading "Sign Up #01" is visible above the card

### Requirement: Signup card heading

The signup card SHALL display a "Hello!" heading and "Please signup to continue" subtext.

#### Scenario: Heading renders

- **WHEN** the signup card is rendered
- **THEN** the heading "Hello!" is visible
- **AND** the text "Please signup to continue" is visible

### Requirement: User avatar

The signup card SHALL display a gray circular user avatar icon with a small green plus badge.

#### Scenario: Avatar renders

- **WHEN** the signup card is rendered
- **THEN** a gray circular avatar with a person icon is visible
- **AND** a green plus badge is visible on the avatar

### Requirement: Form fields

The signup form SHALL include Full Name, Email Address, Password, and Confirm Password fields with bottom-border styling.

#### Scenario: All fields render

- **WHEN** the signup card is rendered
- **THEN** a Full Name input with placeholder "John Doe" is visible
- **AND** an Email Address input with placeholder "johndoe@gmail.com" is visible
- **AND** a Password input with placeholder "Password" is visible
- **AND** a Confirm Password input with placeholder "Confirm Password" is visible

#### Scenario: User can type in fields

- **WHEN** a user types in the Full Name field
- **THEN** the input value updates

### Requirement: Form validation

The signup form SHALL show validation errors when required fields are empty on submit, and SHALL clear errors when the user types in the corresponding field.

#### Scenario: Empty form submission

- **WHEN** the user clicks "Sign Up" with all fields empty
- **THEN** "Full Name is required" error is displayed
- **AND** "Email Address is required" error is displayed
- **AND** "Password is required" error is displayed
- **AND** "Confirm Password is required" error is displayed

#### Scenario: Error clears on input

- **WHEN** the user types into a field that has a validation error
- **THEN** the validation error for that field disappears

#### Scenario: Valid submission

- **WHEN** all fields are filled and the user clicks "Sign Up"
- **THEN** no validation errors are displayed

### Requirement: Sign Up button

The template SHALL display a full-width golden/mustard "Sign Up" button.

#### Scenario: Button renders

- **WHEN** the signup card is rendered
- **THEN** a "Sign Up" button with golden background is visible
- **AND** the button spans the full card width

### Requirement: Social login

The template SHALL display "or" and "Signup with" text followed by Facebook and Twitter social icon links.

#### Scenario: Social icons render

- **WHEN** the signup card is rendered
- **THEN** "or" text is visible
- **AND** "Signup with" text is visible
- **AND** a Facebook social icon link is visible
- **AND** a Twitter social icon link is visible

### Requirement: Sign in redirect

The template SHALL display "I'm already a member!" text with a "Sign In" link in golden accent color.

#### Scenario: Sign in link renders

- **WHEN** the signup card is rendered
- **THEN** "I'm already a member!" text is visible
- **AND** a "Sign In" link is visible with golden accent color

### Requirement: Footer

The template SHALL display a footer with a link to Component Dock.

#### Scenario: Footer renders

- **WHEN** the page is rendered
- **THEN** a footer with "More templates at Component Dock" link to https://www.componentdock.com/ is visible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/signupglow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/signupglow/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page title — the heading "Sign Up #01" is visible above the card
- [x] Signup card heading — the heading "Hello!" is visible
- [ ] User avatar — a gray circular avatar with a person icon is visible
- [x] Form fields — a Full Name input with placeholder "John Doe" is visible
- [x] Form validation — "Full Name is required" error is displayed
- [x] Sign Up button — a "Sign Up" button with golden background is visible
- [ ] Social login — "or" text is visible
- [ ] Sign in redirect — "I'm already a member!" text is visible
