# Template: SignupRift (Signup Form)

## Purpose

A Signup Form template with card header, signup, terms agreement, login redirect and form validation sections. Recreation of ColorLib **Signup Form 11** - Source slug: `signup-form-11` - Preview URL: `https://preview.colorlib.com/theme/signup-form-11/` (returns 404 as of 2026-09-30; spec derived from screenshot) - Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-11.jpg` - Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript - App path: `apps/signuprift` - Package: `@free-react-templates/signuprift` - Deploy target: `signuprift.free.componentdock.com`

## Design tokens

> Tokens extracted from the ColorLib screenshot (preview URL unreachable).
> Approximate hex values derived from visual inspection.

| Token | Value | Notes |
|---|---|---|
| Background | `#f5f5f5` | Light gray full-page background |
| Card background | `#ffffff` | White card with subtle box-shadow |
| Card border-radius | ~`12px` | Rounded corners on card |
| Card shadow | `0 2px 20px rgba(0,0,0,0.08)` | Subtle drop shadow |
| Heading color | `#333333` | Dark gray, "Create Your Account" |
| Body text color | `#999999` | Gray for placeholder text |
| Label color | `#52de97` | Mint green, uppercase labels |
| Input border | `#dddddd` | Full border box, rounded corners (~4px) |
| Input background | `#ffffff` | White |
| Primary button color | `#52de97` | Mint green/teal, full-width |
| Button border-radius | ~`6px` | Slightly rounded |
| Button text color | `#ffffff` | White |
| Icon circle background | `#52de97` | Mint green circle (~50px diameter) |
| Icon color | `#ffffff` | White pencil/edit icon inside circle |
| Checkbox active color | `#52de97` | Green checkbox |
| Link color | `#52de97` | Green, for "Sign In" link |
| Password toggle icon | `#999999` | Eye icon, gray |
| Font family | `Roboto, sans-serif` | Clean sans-serif |

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/signup-form-11/` | HTTP 200 · 5,742 B · title `Sign Up 01` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/signup-form-11/css/style.css?v=85b5ecc7` | HTTP 200 · 18,563 B · sha256 `a8155a3a6e1e` |

> ⚠️ the demo's own `<title>` reads `Sign Up 01` though the path is `signup-
> form-11` — the host's titles are not reliable labels; the readings above
> are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×11,
`#52de97`×10, `#007bff`×5, `#6c757d`×4, `#212529`×3, `#000000`×3,
`#495057`×2, `#0062cc`×2, `#0056b3`×1, `#ced4da`×1.

**Token deltas** — the sheet, not the screenshot, decides:

- `#38d39f` → **`#52de97`** — the sheet paints `a{color}` with it

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Page layout

#### Scenario: Renders centered card on gray background

- **GIVEN** the user visits the signup page
- **THEN** a white card is centered vertically and horizontally on a light gray background
- **AND** the card has rounded corners and a subtle shadow

#### Scenario: Displays page title above card

- **GIVEN** the signup card is visible
- **THEN** a "Sign Up #01" title is displayed above the card in dark gray

### Feature: Card header

#### Scenario: Displays icon and heading

- **GIVEN** the signup card is visible
- **THEN** a green circular icon with a white pencil/edit symbol is centered at the top
- **AND** a "Create Your Account" heading is displayed below the icon in dark gray

### Feature: Signup form

#### Scenario: Full Name input field

- **GIVEN** the signup form is displayed
- **THEN** a "FULL NAME" label is displayed in uppercase green text
- **AND** a text input with border styling is present
- **AND** the placeholder text is "John Doe"

#### Scenario: Email Address input field

- **GIVEN** the signup form is displayed
- **THEN** an "EMAIL ADDRESS" label is displayed in uppercase green text
- **AND** a text input with border styling is present
- **AND** the placeholder text is "johndoe@gmail.com"

#### Scenario: Password input field

- **GIVEN** the signup form is displayed
- **THEN** a "PASSWORD" label is displayed in uppercase green text
- **AND** a password input with border styling is present
- **AND** the placeholder text is "Password"
- **AND** a password visibility toggle (eye icon) is present on the right

#### Scenario: Password visibility toggle

- **GIVEN** the password field is displayed with the eye icon
- **WHEN** the user clicks the eye icon
- **THEN** the password field switches to type="text"
- **AND** when the user clicks the eye icon again
- **THEN** the password field switches back to type="password"

### Feature: Terms agreement

#### Scenario: Terms checkbox

- **GIVEN** the signup form is displayed
- **THEN** a green checkbox labeled "I Agree All Statements In Terms Of Service" is present
- **AND** the checkbox is unchecked by default

### Feature: Submit

#### Scenario: Sign Up button

- **GIVEN** the signup form is displayed
- **THEN** a full-width "Sign Up" button is displayed
- **AND** the button has a mint green background
- **AND** the button text is white

### Feature: Login redirect

#### Scenario: Already a member link

- **GIVEN** the signup form is displayed
- **THEN** the text "I'm already a member!" is displayed below the button
- **AND** a "Sign In" link in green is present next to the text

### Feature: Form validation

#### Scenario: Empty form submission

- **GIVEN** the user clicks "Sign Up" without filling any fields
- **THEN** the form does not submit
- **AND** each required field shows a validation error

### Feature: Responsive layout

#### Scenario: Mobile viewport

- **GIVEN** the user views the page on a 375px wide viewport
- **THEN** the card fills the available width with horizontal padding

#### Scenario: Desktop viewport

- **GIVEN** the user views the page on a 1280px wide viewport
- **THEN** the card is centered with a max-width of approximately 480px

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/signuprift/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/signuprift/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] "Sign Up #01" title above card
- [ ] Green circle icon with pencil at card top
- [x] "Create Your Account" heading centered
- [ ] FULL NAME input with green uppercase label
- [ ] EMAIL ADDRESS input with green uppercase label
- [ ] PASSWORD input with green uppercase label and eye toggle
- [ ] Password visibility toggle works (show/hide)
- [ ] Terms checkbox with "I Agree All Statements In Terms Of Service"
- [x] Full-width mint green "Sign Up" button
- [ ] "I'm already a member! Sign In" text with green link
- [ ] Form validation (required fields)
- [ ] Responsive: card adapts to mobile/desktop
- [x] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [x] No ColorLib references in app code
- [ ] 100% test coverage
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
