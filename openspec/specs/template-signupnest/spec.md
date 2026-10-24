# Template: SignupNest (Registration Form)

## Purpose

A split-panel registration form with a hero image on the left and a form on the right, centered on a pastel gradient background. Recreation of ColorLib **Regform 28**.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-28/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-28.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Source design:** ColorLib "Colorlib Regform 28" — https://colorlib.com/wp/template/colorlib-regform-28/

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/colorlib-regform-28.zip (HTTP 200, 325,173 B, sha256 `6ffbab2ed7c1…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#3b63ca` | 1 declarations — `.form-v2-content .form-detail .register` |
| Other chromatic values | `#53c83c` (1), `#3356b0` (1), `#385cb9` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 3 declarations — `.form-v2-content`, `.form-v2-content .form-detail .register` |
| Ink / dark surface | `#333333` | 2 declarations — `.form-v2-content .form-detail h2`, `.form-v2-content .form-detail input` |
| Typeface | `Roboto` (6 rules — `.form-v2-content .form-detail h2`)<br>`LineAwesome` (1 rule — `.form-v2-content .form-detail .cl-form-row label.error::after`) | `font-family` declarations in the design sheet |
| Radii | `15px`, `50%`, `5px`, `6px` | `15px` (`.form-v2-content`); `50%` (`.form-v2-content .form-detail .cl-form-row label#valid`); `5px` (`.form-v2-content .form-detail input`); `6px` (`.form-v2-content .form-detail .register`) |

Palette in order of use: `#999999` ×4, `#ffffff` ×3, `#333333` ×2, `#666666` ×2, `#53c83c` ×1, `#385cb9` ×1, `#3b63ca` ×1, `#3356b0` ×1.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

Sheet identity (measured 2026-10-24): `style.css` — 9,788 B, sha256 `f752c9d5b281…` (member of `downloads/free/colorlib-regform-28.zip`). These sheets are archive members: no live demo serves this skin.

## Requirements

### Requirement: Gradient background

The page SHALL render a full-height gradient background transitioning from lavender (#e0c3fc) to sky blue (#8ec5fc) at approximately 136 degrees.

#### Scenario: Gradient background renders

- **WHEN** I visit the SignupNest page
- **THEN** I see a gradient background from lavender to sky blue
- **AND** the content is centered vertically and horizontally on the page

### Requirement: Split-panel card layout

The page SHALL display a centered card with two halves: a left hero image panel and a right form panel, with 15px border-radius.

#### Scenario: Card renders with two panels

- **WHEN** I visit the SignupNest page
- **THEN** I see a card with a left image panel and a right white form panel
- **AND** the card has rounded corners (15px border-radius)

#### Scenario: Responsive stacking on mobile

- **WHEN** the viewport width is less than 768px
- **THEN** the card stacks vertically with the hero image on top and form below

### Requirement: Hero panel displays subscription info

The left hero panel SHALL display overlaid white text with the headline "Bring Your Music Along", subline "try Unlimited", and pricing "$9.99 / Month".

#### Scenario: Hero text is visible

- **WHEN** I visit the SignupNest page
- **THEN** I see the headline "Bring Your Music Along" in white bold text
- **AND** I see "try Unlimited" below the headline
- **AND** I see "$9.99" with "/ Month" at the bottom right of the image

### Requirement: Registration form fields

The form SHALL contain four input fields: Full Name, Your Email, Password, and Confirm Password, each with a label.

#### Scenario: All four fields render

- **WHEN** I visit the SignupNest page
- **THEN** I see a text input labeled "Full Name:" with placeholder "ex: Lindsey Wilson"
- **AND** I see an email input labeled "Your Email:"
- **AND** I see a password input labeled "Password:"
- **AND** I see a password input labeled "Confirm Password:"

### Requirement: Form validation — required fields

The form SHALL require Email, Password, Confirm Password, and Terms checkbox before submission.

#### Scenario: Empty submission shows errors

- **WHEN** I click the Register button without filling any fields
- **THEN** I see "Email is required" error message
- **AND** I see "Password is required" error message
- **AND** I see "Please confirm your password" error message
- **AND** I see "You must agree to the terms" error message

### Requirement: Email format validation

The form SHALL validate that the email field contains a valid email address.

#### Scenario: Invalid email shows format error

- **WHEN** I type "invalid-email" in the Email field and click Register
- **THEN** I see "Invalid email format" error message

### Requirement: Password confirmation match

The form SHALL validate that Password and Confirm Password fields match.

#### Scenario: Mismatched passwords show error

- **WHEN** I fill Password with "Password123" and Confirm Password with "Password456" and click Register
- **THEN** I see "Passwords do not match" error message

### Requirement: Terms checkbox

The form SHALL include a checkbox for agreeing to the Play Term of Service, with a link to the Component Dock website.

#### Scenario: Unchecked terms blocks submission

- **WHEN** I fill all fields correctly but do NOT check the Terms checkbox and click Register
- **THEN** I see "You must agree to the terms" error message

#### Scenario: Checked terms allows submission

- **WHEN** I fill all fields correctly and check the Terms checkbox and click Register
- **THEN** the form submits successfully and shows a success message

### Requirement: Register button styling

The Register button SHALL be styled with blue background (#3b63ca), 6px border-radius, and darken on hover.

#### Scenario: Button renders with correct styling

- **WHEN** I visit the SignupNest page
- **THEN** I see a "Register" button with blue background

### Requirement: Input focus styling

Input fields SHALL show a green border (#53c83c) when focused.

#### Scenario: Focus shows green border

- **WHEN** I click into any input field
- **THEN** the input border changes to green

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present

- **WHEN** I visit the SignupNest page
- **THEN** I see a footer link "More templates at Component Dock" pointing to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/signupnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/signupnest/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Gradient background — I see a gradient background from lavender to sky blue
- [ ] Split-panel card layout — I see a card with a left image panel and a right white form panel
- [x] Hero panel displays subscription info — I see the headline "Bring Your Music Along" in white bold text
- [ ] Registration form fields — I see a text input labeled "Full Name:" with placeholder "ex: Lindsey Wilson"
- [x] Form validation — required fields — I see "Email is required" error message
- [x] Email format validation — I see "Invalid email format" error message
- [ ] Password confirmation match — I see "Passwords do not match" error message
- [x] Register button styling — I see a "Register" button with blue background
- [ ] Input focus styling — the input border changes to green
