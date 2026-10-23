# Cantrip — Implementation Tasks

Source design: **Colorlib Wizard 13** (`https://colorlib.com/wp/template/colorlib-wizard-13/`) → recreation name **cantrip**. Shipped at https://cantrip.free.componentdock.com.

Scope: A Bootstrap Wizards template with accordion wizard navigation, step 1, step 2 and step 3 sections.

## Component breakdown

Render order as composed in `apps/cantrip/src/App.tsx`:

### 1. AccordionWizard
- Users SHALL be able to expand/collapse each step panel by clicking its header.
- Scenario — Clicking a step header expands it:
  - **WHEN** the user clicks "Basic Information" header
  - **THEN** the Basic Information panel is visible
- Scenario — Only one panel is open at a time:
  - **GIVEN** Step 1 is expanded
  - **WHEN** the user clicks "Additional Information" header
  - **THEN** Step 1 collapses and Step 2 expands

### 2. Footer
- The footer SHALL display a link to https://www.componentdock.com/.
- Scenario — Footer renders Component Dock link:
  - **GIVEN** the page is rendered
  - **THEN** a link to componentdock.com is present in the footer

### Cross-cutting requirements

- **Step 1 — Basic Information form** — Users SHALL be able to fill in first name, last name, gender, date of birth, and nationality.
  - Scenario — Fill basic information: **GIVEN** Step 1 is expanded; **WHEN** the user types in the first name field; **THEN** the field value updates
- **Step 2 — Additional Information form** — Users SHALL be able to fill in email, phone, city, and pincode.
  - Scenario — Fill additional information: **GIVEN** Step 2 is expanded; **WHEN** the user types in the email field; **THEN** the field value updates
- **Step 3 — Specialities and Submit** — Users SHALL be able to enter specialities and submit the form.
  - Scenario — Submit the form: **GIVEN** Step 3 is expanded; **WHEN** the user clicks the Submit button; **THEN** the form submission is handled
- **Responsive layout** — The form SHALL be responsive and centered on all screen sizes.
  - Scenario — Mobile viewport: **GIVEN** the viewport width is 375px; **WHEN** the wizard is rendered; **THEN** the form is visible and usable
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cantrip/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cantrip/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cantrip` ships on https://cantrip.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cantrip/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cantrip/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cantrip/public/CNAME` = `cantrip.free.componentdock.com`
  and the package `homepage` = `https://cantrip.free.componentdock.com`.
