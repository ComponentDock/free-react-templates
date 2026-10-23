# Signuplink — Implementation Tasks

Source design: **Signup Form 09** (`https://colorlib.com/wp/template/signup-form-09/`) → recreation name **signuplink**. Shipped at https://signuplink.free.componentdock.com.

Scope: A minimal, clean registration form template with floating label inputs, custom checkbox, social login buttons, and a centered layout. Recreates the ColorLib Signup Form 09 design in React + Tailwind CSS.

## Component breakdown

Render order as composed in `apps/signuplink/src/App.tsx`:

### 1. SignupForm
- The template SHALL display a "Sign Up" heading above the form.
- Scenario — Heading is visible:
  - **WHEN** the page loads
  - **THEN** a heading with text "Sign Up" is displayed

### 2. Footer
- The template SHALL display a footer linking to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link is present:
  - **WHEN** the page loads
  - **THEN** there is a link with text "More templates at Component Dock" pointing to https://www.componentdock.com/

### Cross-cutting requirements

- **Renders form input fields** — The template SHALL provide Name, Email, Password, and Re-type Password input fields with floating labels.
  - Scenario — All four fields are present: **WHEN** the page loads; **THEN** there are four text input fields labeled Name, Email, Password, and Re-type Password
  - Scenario — Floating label moves up on input: **WHEN** the user types text into the Name field; **THEN** the Name label moves from center position to above the input
- **Renders terms checkbox** — The template SHALL include a checkbox for agreeing to Terms and Conditions, checked by default.
  - Scenario — Checkbox is checked by default: **WHEN** the page loads; **THEN** the terms checkbox is checked
  - Scenario — Checkbox toggles on click: **WHEN** the user clicks the terms checkbox; **THEN** the checkbox state toggles
- **Renders register button** — The template SHALL display a full-width pill-shaped "Register" button.
  - Scenario — Register button is present: **WHEN** the page loads; **THEN** there is a button labeled "Register"
  - Scenario — Form submission is prevented: **WHEN** the user clicks the Register button without filling fields; **THEN** the form does not navigate away (default prevented)
- **Renders social login section** — The template SHALL show an "or register with" divider and social login buttons for Facebook, Twitter, and Google.
  - Scenario — Social login buttons are present: **WHEN** the page loads; **THEN** there are social login buttons labeled Facebook, Twitter, and Google
  - Scenario — Social login text is displayed: **WHEN** the page loads; **THEN** text "or register with" is visible between the register button and social buttons
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/signuplink/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/signuplink/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/signuplink` ships on https://signuplink.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/signuplink/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/signuplink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signuplink/public/CNAME` = `signuplink.free.componentdock.com`
  and the package `homepage` = `https://signuplink.free.componentdock.com`.
