# Signdrop — Implementation Tasks

Source design: **Signup Form 06** (`https://colorlib.com/wp/template/signup-form-06/`) → recreation name **signdrop**. Shipped at https://signdrop.free.componentdock.com.

Scope: Signdrop is a registration form template — a recreation of ColorLib Signup Form 06 (https://colorlib.com/wp/template/signup-form-06/). It features a split viewport layout with a centered registration form on the left and a full-height hero image on the right.

## Component breakdown

Render order as composed in `apps/signdrop/src/App.tsx`:

### 1. RegistrationForm
- Users SHALL see a full-viewport split layout with a white form panel on the left and a hero image on the right.
- Scenario — Heading is visible:
  - **WHEN** the user loads the page
  - **THEN** the heading "Register" is visible
- Scenario — Form fields are present:
  - **WHEN** the user loads the page
  - **THEN** an "Email" input is visible
  - **AND** a "Password" input is visible
  - **AND** a "Re-type Password" input is visible
- Scenario — Terms checkbox is present:
  - **WHEN** the user loads the page
  - **THEN** the "Agree our Terms and Conditions" checkbox is unchecked by default

### 2. Footer
- Users SHALL see a footer with a link to Component Dock.
- Scenario — Footer link present:
  - **WHEN** the user loads the page
  - **THEN** a link to "https://www.componentdock.com/" is present

### Cross-cutting requirements

- **User interactions work correctly** — Users SHALL be able to fill in form fields and toggle the terms checkbox.
  - Scenario — User types in email field: **WHEN** the user types "test@example.com" in the email field; **THEN** the email field contains "test@example.com"
  - Scenario — User toggles terms checkbox: **WHEN** the user clicks the terms checkbox; **THEN** the checkbox is checked
- **Social registration buttons are present** — Users SHALL see social login buttons for Facebook, Twitter, and Google.
  - Scenario — Social buttons visible: **WHEN** the user loads the page; **THEN** "Register with Facebook" button is visible; **AND** "Register with Twitter" button is visible; **AND** "Register with Google" button is visible
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/signdrop/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/signdrop/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/signdrop` ships on https://signdrop.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/signdrop/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/signdrop/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signdrop/public/CNAME` = `signdrop.free.componentdock.com`
  and the package `homepage` = `https://signdrop.free.componentdock.com`.
