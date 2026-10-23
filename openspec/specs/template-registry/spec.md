# Template: Registry (Registration Forms)

## Purpose

Registry is a free registration form template recreating ColorLib "Colorlib Reg Form V18"
(https://colorlib.com/wp/template/colorlib-regform-18/). It features a full-viewport
background image with a centered card containing a registration form. The form has
First Name/Last Name side-by-side, Email, Password, Confirm Password fields with
rounded input borders, a terms checkbox, and a red "Register Now" button with hover
animation. Preview was unreachable (404); design derived from the live source at — **re-probed 2026-10-23: the demo serves** (measured record below)

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/regform/colorlib-regform-18/` — HTTP 200, 1,578 B, title `RegistrationForm_v2 by Colorlib`.
>
> Sheet: `https://colorlib.com/etc/regform/colorlib-regform-18/css/style.css?v=ae61f35f` (5,941 B).
> Faces it actually declares: `Muli-Bold`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->
https://colorlib.com/etc/regform/colorlib-regform-18/ and the TEMPLATES.md screenshot.

## Design tokens

- **Background**: Full-viewport background image → `bg-cover bg-center bg-no-repeat`
- **Card**: White/transparent with background image → `bg-white/90 backdrop-blur-sm`
- **Card border-radius**: Small rounding → `rounded-lg`
- **Card shadow**: Soft drop shadow → `shadow-xl`
- **Text (body)**: Medium gray `#666` → `text-[#666]`
- **Text (headings)**: Dark `#333` → `text-[#333]`
- **Text (inputs)**: Dark `#333` → `text-[#333]`
- **Input border**: Light gray `#ccc` → `border border-[#ccc]`
- **Input border-radius**: Fully rounded → `rounded-full`
- **Input height**: 40px → `h-10`
- **Input font-weight**: Bold → `font-semibold`
- **Input focus border**: Red `#ae3c33` → `focus:border-[#ae3c33]`
- **Button background**: Red `#ae3c33` → `bg-[#ae3c33]`
- **Button text**: White → `text-white`
- **Button hover background**: Brighter red `#f11a09` → `hover:bg-[#f11a09]`
- **Button border-radius**: Fully rounded → `rounded-full`
- **Button font**: SemiBold, uppercase → `font-semibold uppercase`
- **Checkbox checkmark background**: Light `#ebebeb` → `bg-[#ebebeb]`
- **Checkbox border**: Light gray `#ccc` → `border border-[#ccc]`
- **Font family**: Mulish (Google Fonts, replacement for Muli) → `font-[Mulish]`

## Requirements

### Requirement: Page layout

The page SHALL render a full-viewport page with a background image and a single
centered white card containing the registration form.

#### Scenario: Background and card are visible

- **WHEN** I visit the Registry page
- **THEN** I see a background image covering the viewport
- **AND** I see a white card centered on the page
- **AND** the card has rounded corners and a drop shadow

### Requirement: Registration form heading

The card SHALL display the heading "REGISTRATION FORM" in bold uppercase text.

#### Scenario: Heading is visible

- **WHEN** I visit the Registry page
- **THEN** I see a heading with text "REGISTRATION FORM"
- **AND** the heading is in uppercase and bold

### Requirement: Form fields

The form SHALL contain five fields: First Name (text input), Last Name (text input),
Email (text input), Password (password input), and Confirm Password (password input).

#### Scenario: All fields are rendered

- **WHEN** I visit the Registry page
- **THEN** I see a text input labeled "First Name"
- **AND** I see a text input labeled "Last Name"
- **AND** I see a text input labeled "Email"
- **AND** I see a password input labeled "Password"
- **AND** I see a password input labeled "Confirm Password"

#### Scenario: First Name and Last Name are side by side

- **WHEN** I visit the Registry page
- **THEN** the First Name and Last Name fields appear in a single row, side by side

#### Scenario: Inputs have rounded borders

- **WHEN** I visit the Registry page
- **THEN** each form input has fully rounded (pill-shaped) borders

### Requirement: Terms checkbox

The form SHALL contain a checkbox labeled "I accept the Terms of Use & Privacy Policy."

#### Scenario: Checkbox is visible

- **WHEN** I visit the Registry page
- **THEN** I see a checkbox with the text "I accept the Terms of Use & Privacy Policy."

#### Scenario: Checkbox can be toggled

- **WHEN** I click the checkbox
- **THEN** the checkbox state toggles

### Requirement: Register Now button

The form SHALL contain a "Register Now" button with a red background.

#### Scenario: Button is visible and styled

- **WHEN** I visit the Registry page
- **THEN** I see a "Register Now" button with a red background and white text
- **AND** the button has fully rounded corners

#### Scenario: Form submission with validation

- **WHEN** I click Register Now with empty fields
- **THEN** the form does not submit (HTML5 required validation)

#### Scenario: Successful registration

- **WHEN** all required fields are filled correctly and passwords match
- **AND** I check the terms checkbox
- **AND** I click Register Now
- **THEN** a success message is shown

### Requirement: Password match validation

The form SHALL validate that Password matches Confirm Password before submitting.

#### Scenario: Password mismatch error

- **WHEN** I fill in all fields but Password and Confirm Password differ
- **AND** I click Register Now
- **THEN** I see an error message about passwords not matching

### Requirement: Footer with Component Dock link

The page SHALL display a footer that links to https://www.componentdock.com/
branded as "Component Dock".

#### Scenario: Footer link is present and opens externally

- **WHEN** I visit the Registry page
- **THEN** I see a footer with a link to "Component Dock"
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Document title

The page SHALL set the document title to "Registry — Registration Form Template".

#### Scenario: Title is set on mount

- **WHEN** I visit the Registry page
- **THEN** the document title is "Registry — Registration Form Template"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/registry/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/registry/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page layout — I see a background image covering the viewport
- [x] Registration form heading — I see a heading with text "REGISTRATION FORM"
- [x] Form fields — I see a text input labeled "First Name"
- [ ] Terms checkbox — I see a checkbox with the text "I accept the Terms of Use & Privacy Policy."
- [x] Register Now button — I see a "Register Now" button with a red background and white text
- [ ] Password match validation — I see an error message about passwords not matching
- [x] Document title — the document title is "Registry — Registration Form Template"
