# Regpilot — Implementation Tasks

Source design: **Colorlib Regform 17** (`https://colorlib.com/wp/template/colorlib-regform-17/`) → recreation name **regpilot**. Shipped at https://regpilot.free.componentdock.com.

Scope: Registration form template with a split-panel layout: a hero image on the left, and a registration form on the right featuring name fields, username, email, gender select, password confirmation, and a register button. Recreation of ColorLib "Colorlib Regform 17" (https://colorlib.com/wp/template/colorlib-regform-17/).

## Component breakdown

Render order as composed in `apps/regpilot/src/App.tsx`:

### 1. Background
- The template SHALL display a light gray (#e8e8e8) background filling the full viewport.
- Scenario — Background renders correctly:
  - **WHEN** the user loads the page
  - **THEN** a light gray background is visible behind the card

### 2. RegistrationForm
- The form SHALL contain the following fields: First Name (required, text), Last Name (required, text), Username (required, text with user icon), Email Address (required, email with mail icon), Gender (required, select dropdown), Password (required, password with lock icon), Confirm Password (required, password with lock icon).
- Scenario — All fields are rendered:
  - **WHEN** the user views the registration form
  - **THEN** the heading "Registration Form" is visible
  - **AND** input fields for First Name, Last Name, Username, Email Address, Password, and Confirm Password are present
  - **AND** a select field for Gender is present
  - **AND** a "Register" button is visible

### 3. Footer
- The footer SHALL link to https://www.componentdock.com/ with the text "Made with Component Dock".
- Scenario — Footer displays correctly:
  - **WHEN** the user scrolls to the bottom of the page
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text includes "Component Dock"

### Cross-cutting requirements

- **Split-panel card layout** — The template SHALL display a centered white card with a split layout on desktop: a hero image panel on the left, and the registration form on the right. On mobile, the layout SHALL stack vertically with the image hidden.
  - Scenario — Desktop layout: **WHEN** the user opens the Regpilot page on a desktop viewport; **THEN** the hero image panel occupies the left half of the card; **AND** the registration form occupies the right half
  - Scenario — Mobile layout: **WHEN** the user opens the Regpilot page on a mobile viewport; **THEN** the hero image panel is hidden; **AND** the registration form is displayed full-width
- **Hero image panel** — The hero panel SHALL display a placeholder image with a semi-transparent overlay and a text overlay reading "#Collection 2024".
  - Scenario — Hero displays correctly: **WHEN** the user views the hero panel; **THEN** a placeholder image is displayed; **AND** the text "#Collection 2024" is visible in white
- **Form submission with validation** — The form SHALL validate that all required fields are filled and that Password matches Confirm Password before submitting.
  - Scenario — Successful registration: **WHEN** all required fields are filled correctly and passwords match; **AND** the user clicks "Register"; **THEN** a thank-you confirmation message is shown
  - Scenario — Password mismatch error: **WHEN** the Password field is "abc123" and the Confirm Password field is "xyz789"; **AND** the user clicks "Register"; **THEN** an error message "Passwords do not match" is displayed
  - Scenario — Empty fields prevent submission: **WHEN** the form is empty; **AND** the user clicks "Register"; **THEN** the form remains visible without a confirmation message
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/regpilot/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/regpilot/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/regpilot` ships on https://regpilot.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regpilot/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regpilot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regpilot/public/CNAME` = `regpilot.free.componentdock.com`
  and the package `homepage` = `https://regpilot.free.componentdock.com`.
