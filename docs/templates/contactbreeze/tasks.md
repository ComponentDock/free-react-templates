# Contactbreeze — Implementation Tasks

Source design: **Contact Form V4** (`https://colorlib.com/wp/template/contact-form-v4/`) → recreation name **contactbreeze**. Shipped at https://contactbreeze.free.componentdock.com.

Scope: Recreation of ColorLib **Contact Form V4** — a minimalist single-column contact form on a full-page cyan-to-magenta gradient background, with labeled underline input fields, two dropdown selects (services + budget), a message textarea, and a gradient submit button.

## Component breakdown

Render order as composed in `apps/contactbreeze/src/App.tsx`:

### 1. ContactForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Your Name · name · Email · Needed Services · services · Budget

### 2. Footer
- The page footer SHALL link to Component Dock.
- Scenario — Footer link:
  - **WHEN** I scroll to the bottom of the page
  - **THEN** I SHALL see a footer with a link to "https://www.componentdock.com/"

### Cross-cutting requirements

- **Page layout** — The page SHALL render a full-page gradient background with a centered white contact form card.
  - Scenario — Gradient background: **WHEN** I visit the ContactBreeze page; **THEN** the page background SHALL be a full-page gradient transitioning
  - Scenario — Centered form card: **WHEN** I visit the ContactBreeze page; **THEN** a white card SHALL be centered on the page with rounded corners
- **Form heading** — The form card SHALL display a heading at the top.
  - Scenario — Heading text: **WHEN** I view the form card; **THEN** a "Say Hello!" heading SHALL be displayed at the top of the card
- **Form fields** — The form SHALL contain four input areas: name, email, services dropdown, and budget dropdown, plus a message textarea.
  - Scenario — Name field: **WHEN** I view the form; **THEN** a text input SHALL be displayed with label "Your Name" above it
  - Scenario — Email field: **WHEN** I view the form; **THEN** an email input SHALL be displayed with label "Email" above it
  - Scenario — Needed Services dropdown: **WHEN** I view the form; **THEN** a select dropdown SHALL be displayed with label "Needed Services"
  - Scenario — Budget dropdown: **WHEN** I view the form; **THEN** a select dropdown SHALL be displayed with label "Budget" above
  - Scenario — Message textarea: **WHEN** I view the form; **THEN** a textarea SHALL be displayed with label "Message" above it and
  - Scenario — Input styling: **WHEN** I view any form field; **THEN** the field SHALL have a thin gray underline below it (no visible
- **Submit button** — The form SHALL have a gradient submit button at the bottom.
  - Scenario — Submit button displayed: **WHEN** I view the form; **THEN** a "Submit →" button SHALL be displayed at the bottom of the form
  - Scenario — Submit button full width: **WHEN** I view the submit button; **THEN** the button SHALL span the full width of the card content area
  - Scenario — Submit button hover: **WHEN** I hover over the submit button; **THEN** the button SHALL show a hover state (darkened gradient or shadow)
  - Scenario — Form submission: **WHEN** I fill all required fields with valid data and click "Submit →"; **THEN** the form SHALL submit (or show a success state)
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/contactbreeze/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/contactbreeze/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Full-page cyan-to-magenta gradient background renders correctly; [ ] White centered card with rounded corners and shadow; [ ] "Say Hello!" bold heading at top of card; [ ] Name input with label, placeholder, underline; [ ] Email input with label, placeholder, underline; [ ] "Needed Services" select dropdown with chevron; [ ] "Budget" select dropdown with chevron; [ ] Message textarea with label, placeholder, underline; [ ] "Submit →" gradient button (cyan→magenta), full-width, rounded; [ ] Footer links to componentdock.com; [ ] Responsive layout (mobile-friendly); [ ] No ColorLib references in app code; [ ] `packages/ui` components reused where possible; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/contactbreeze` ships on https://contactbreeze.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/contactbreeze/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/contactbreeze/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/contactbreeze/public/CNAME` = `contactbreeze.free.componentdock.com`
  and the package `homepage` = `https://contactbreeze.free.componentdock.com`.
