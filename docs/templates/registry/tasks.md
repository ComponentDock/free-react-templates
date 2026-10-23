# Registry — Implementation Tasks

Source design: **Colorlib Regform 18** (`https://colorlib.com/wp/template/colorlib-regform-18/`) → recreation name **registry**. Shipped at https://registry.free.componentdock.com.

Scope: Registry is a free registration form template recreating ColorLib "Colorlib Reg Form V18" (https://colorlib.com/wp/template/colorlib-regform-18/). It features a full-viewport background image with a centered card containing a registration form.

## Component breakdown

Render order as composed in `apps/registry/src/App.tsx`:

### 1. Background
- No dedicated spec block — hold this band to the design notes.

### 2. RegistrationForm
- The card SHALL display the heading "REGISTRATION FORM" in bold uppercase text.
- Scenario — Heading is visible:
  - **WHEN** I visit the Registry page
  - **THEN** I see a heading with text "REGISTRATION FORM"
  - **AND** the heading is in uppercase and bold

### 3. Footer
- The page SHALL display a footer that links to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link is present and opens externally:
  - **WHEN** I visit the Registry page
  - **THEN** I see a footer with a link to "Component Dock"
  - **AND** the link points to https://www.componentdock.com/
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Page layout** — The page SHALL render a full-viewport page with a background image and a single centered white card containing the registration form.
  - Scenario — Background and card are visible: **WHEN** I visit the Registry page; **THEN** I see a background image covering the viewport; **AND** I see a white card centered on the page; **AND** the card has rounded corners and a drop shadow
- **Form fields** — The form SHALL contain five fields: First Name (text input), Last Name (text input), Email (text input), Password (password input), and Confirm Password (password input).
  - Scenario — All fields are rendered: **WHEN** I visit the Registry page; **THEN** I see a text input labeled "First Name"; **AND** I see a text input labeled "Last Name"; **AND** I see a text input labeled "Email"; **AND** I see a password input labeled "Password"; **AND** I see a password input labeled "Confirm Password"
  - Scenario — First Name and Last Name are side by side: **WHEN** I visit the Registry page; **THEN** the First Name and Last Name fields appear in a single row, side by side
  - Scenario — Inputs have rounded borders: **WHEN** I visit the Registry page; **THEN** each form input has fully rounded (pill-shaped) borders
- **Terms checkbox** — The form SHALL contain a checkbox labeled "I accept the Terms of Use & Privacy Policy."
  - Scenario — Checkbox is visible: **WHEN** I visit the Registry page; **THEN** I see a checkbox with the text "I accept the Terms of Use & Privacy Policy."
  - Scenario — Checkbox can be toggled: **WHEN** I click the checkbox; **THEN** the checkbox state toggles
- **Register Now button** — The form SHALL contain a "Register Now" button with a red background.
  - Scenario — Button is visible and styled: **WHEN** I visit the Registry page; **THEN** I see a "Register Now" button with a red background and white text; **AND** the button has fully rounded corners
  - Scenario — Form submission with validation: **WHEN** I click Register Now with empty fields; **THEN** the form does not submit (HTML5 required validation)
  - Scenario — Successful registration: **WHEN** all required fields are filled correctly and passwords match; **AND** I check the terms checkbox; **AND** I click Register Now; **THEN** a success message is shown
- **Password match validation** — The form SHALL validate that Password matches Confirm Password before submitting.
  - Scenario — Password mismatch error: **WHEN** I fill in all fields but Password and Confirm Password differ; **AND** I click Register Now; **THEN** I see an error message about passwords not matching
- **Document title** — The page SHALL set the document title to "Registry — Registration Form Template".
  - Scenario — Title is set on mount: **WHEN** I visit the Registry page; **THEN** the document title is "Registry — Registration Form Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/registry/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/registry/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/registry` ships on https://registry.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/registry/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/registry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/registry/public/CNAME` = `registry.free.componentdock.com`
  and the package `homepage` = `https://registry.free.componentdock.com`.
