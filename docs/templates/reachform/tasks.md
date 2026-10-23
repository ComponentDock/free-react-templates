# Reachform — Implementation Tasks

Source design: **Contact Form V2** (`https://colorlib.com/wp/template/contact-form-v2/`) → recreation name **reachform**. Shipped at https://reachform.free.componentdock.com.

Scope: ReachForm is a centered contact form template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/reachform/src/App.tsx`:

### 1. ContactForm
- The form card shall display a bold serif heading "Contact Us".
- Scenario — User sees the form title:
  - **WHEN** the page loads
  - **THEN** the heading "Contact Us" is visible in the form card

### 2. Footer
- The page shall include a footer linking to Component Dock.
- Scenario — User sees the footer:
  - **WHEN** the page loads
  - **THEN** a footer with a "Component Dock" link to https://www.componentdock.com/ is visible

### Cross-cutting requirements

- **Page Layout** — The page shall display a full-viewport background with a mountain landscape image overlaid with a pink-to-coral gradient. A centered white card sits on top containing the contact form.
  - Scenario — User views the page on initial load: **WHEN** the user opens the application; **THEN** the page shows a full-bleed background image with gradient overlay; **AND** a centered white card with the contact form is visible
- **Form Fields** — The form shall contain three fields: Name (text input), Email (email input), and Message (textarea). All fields use underline-style borders.
  - Scenario — User sees all form fields: **WHEN** the page loads; **THEN** a Name input field is visible; **AND** an Email input field is visible; **AND** a Message textarea is visible
  - Scenario — User types in the Name field: **WHEN** the user clicks the Name input and types "Kevin Nguyen"; **THEN** the Name field shows "Kevin Nguyen"
  - Scenario — User types in the Email field: **WHEN** the user clicks the Email input and types "test@example.com"; **THEN** the Email field shows "test@example.com"
  - Scenario — User types in the Message field: **WHEN** the user clicks the Message textarea and types "Hello there!"; **THEN** the Message textarea shows "Hello there!"
- **Submit Button** — The form shall have a "Send Your Message" submit button with a pink-coral gradient background.
  - Scenario — User sees the submit button: **WHEN** the page loads; **THEN** a button labeled "Send Your Message" is visible
  - Scenario — User submits the form: **WHEN** the user clicks "Send Your Message"; **THEN** a thank-you confirmation message is displayed; **AND** the form fields are hidden
- **Thank You State** — After form submission, the card shall show a thank-you message with a "Send another message" reset link.
  - Scenario — User sees thank-you after submission: **WHEN** the form is submitted; **THEN** the card shows "Thank You!" heading; **AND** the card shows a confirmation message
  - Scenario — User resets the form: **WHEN** the user clicks "Send another message" after submission; **THEN** the form is shown again with empty fields
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/reachform/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/reachform/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/reachform` ships on https://reachform.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/reachform/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/reachform/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reachform/public/CNAME` = `reachform.free.componentdock.com`
  and the package `homepage` = `https://reachform.free.componentdock.com`.
