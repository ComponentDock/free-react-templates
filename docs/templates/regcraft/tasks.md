# Regcraft — Implementation Tasks

Source design: **Colorlib Regform 1** (`https://colorlib.com/wp/template/colorlib-regform-1/`) → recreation name **regcraft**. Shipped at https://regcraft.free.componentdock.com.

Scope: Regcraft is a free class registration form template recreating ColorLib "Reg Form V1" (https://colorlib.com/wp/template/colorlib-regform-1/).

## Component breakdown

Render order as composed in `apps/regcraft/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Regcraft · Home

### 2. RegistrationForm
- The card SHALL display the heading "Registration Info" above the form fields.
- Scenario — Heading is visible:
  - **WHEN** I visit the Regcraft page
  - **THEN** I see a heading with text "Registration Info"

### 3. Footer
- The page SHALL display a footer that links to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link is present and opens externally:
  - **WHEN** I visit the Regcraft page
  - **THEN** I see a footer with a link to "Component Dock"
  - **AND** the link points to https://www.componentdock.com/
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Page layout** — The page SHALL render a full-height solid blue (#2563eb) background with a single centered white card.
  - Scenario — Card is centered on the blue background: **WHEN** I visit the Regcraft page; **THEN** I see a white card centered horizontally and vertically on a blue background; **AND** the card has rounded corners and a drop shadow
- **Card header image** — The card SHALL display a grayscale cityscape photograph as a header banner above the form.
  - Scenario — Grayscale header image is visible: **WHEN** I visit the Regcraft page; **THEN** I see a cityscape image inside the card; **AND** the image has a grayscale filter applied
- **Form fields** — The form SHALL contain five fields: Name (text input), Birthdate (date input), Gender (select), Class (select), and Registration Code (text input).
  - Scenario — All five fields are rendered: **WHEN** I visit the Regcraft page; **THEN** I see a text input labeled "Name"; **AND** I see a date input labeled "Birthdate"; **AND** I see a select element labeled "Gender"; **AND** I see a select element labeled "Class"; **AND** I see a text input labeled "Registration Code"
  - Scenario — Fields have underline-style borders: **WHEN** I visit the Regcraft page; **THEN** each form field has a bottom border only (no full border box)
- **Submit button** — The form SHALL contain a green Submit button that triggers form submission.
  - Scenario — Submit button is visible and styled green: **WHEN** I visit the Regcraft page; **THEN** I see a "Submit" button with a green background
  - Scenario — Submitting the form shows a success message: **WHEN** I click the Submit button; **THEN** I see a "Registration submitted successfully" message; **AND** the form fields are no longer visible
- **Dark mode toggle** — The navbar SHALL include a dark-mode toggle button.
  - Scenario — Toggling dark mode changes the background: **WHEN** I click the "Dark mode" button in the navbar; **THEN** the document root receives the "dark" class; **AND** the button label changes to "Light mode"
  - Scenario — Dark class is removed on unmount: **WHEN** I enable dark mode and then unmount the navbar; **THEN** the "dark" class is removed from the document root
- **Document title** — The page SHALL set the document title to "Regcraft — Registration Form Template".
  - Scenario — Title is set on mount: **WHEN** I visit the Regcraft page; **THEN** the document title is "Regcraft — Registration Form Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/regcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/regcraft/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/regcraft` ships on https://regcraft.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regcraft/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regcraft/public/CNAME` = `regcraft.free.componentdock.com`
  and the package `homepage` = `https://regcraft.free.componentdock.com`.
