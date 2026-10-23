# Regfold — Implementation Tasks

Source design: **Colorlib Regform 4** (`https://colorlib.com/wp/template/colorlib-regform-4/`) → recreation name **regfold**. Shipped at https://regfold.free.componentdock.com.

Scope: A Registration Form template with form fields and form submission sections. Recreation of **ColorLib Regform 4** (`colorlib-regform-4`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/regfold/src/App.tsx`:

### 1. RegistrationForm
- Users SHALL see a registration form with all required fields.
- Scenario — Heading is visible:
  - **WHEN** I visit the registration page
  - **THEN** I see a heading "Registration Form"
- Scenario — Form fields are present:
  - **WHEN** I visit the registration page
  - **THEN** I see input fields for first name, last name, birthday, email, and phone
  - **AND** I see radio buttons for gender (Male, Female)
  - **AND** I see a subject dropdown
  - **AND** I see a Submit button

### 2. Footer
- Users SHALL see a footer with a Component Dock link.
- Scenario — Footer link:
  - **WHEN** I visit the registration page
  - **THEN** I see a link to "https://www.componentdock.com/" labeled "Component Dock"

### Cross-cutting requirements

- **Form fields are interactive** — Users SHALL be able to fill in all form fields.
  - Scenario — Typing in text fields: **WHEN** I type "John" into the first name field; **THEN** the first name field contains "John"
  - Scenario — Selecting gender: **WHEN** I click the "Female" radio button; **THEN** the Female radio button is checked; **AND** the Male radio button is unchecked
  - Scenario — Selecting subject: **WHEN** I select "Subject 2" from the subject dropdown; **THEN** the subject dropdown shows "Subject 2"
- **Form submission is handled** — Users SHALL be able to submit the form without page navigation.
  - Scenario — Submit button exists: **WHEN** I visit the registration page; **THEN** I see a button labeled "Submit"
  - Scenario — Form submission is prevented: **WHEN** I click the Submit button; **THEN** the form submission event is prevented (no page reload)
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/regfold/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/regfold/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/regfold` ships on https://regfold.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regfold/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regfold/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regfold/public/CNAME` = `regfold.free.componentdock.com`
  and the package `homepage` = `https://regfold.free.componentdock.com`.
