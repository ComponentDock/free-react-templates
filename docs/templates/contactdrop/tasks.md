# Contactdrop — Implementation Tasks

Source design: **Contact Form V16** (`https://colorlib.com/wp/template/contact-form-v16/`) → recreation name **contactdrop**. Shipped at https://contactdrop.free.componentdock.com.

Scope: A centered single-column contact form modal on a full-page purple gradient background, with icon-labeled fields. It also includes field validation indicators, a header image banner, and a pill-shaped submit button. Recreation of ColorLib **Contact Form V16**.

## Component breakdown

Render order as composed in `apps/contactdrop/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Contact Us

### 2. ContactCard
- The form SHALL be rendered in a centered white card with a header image and a close button.
- Scenario — Centered white card:
  - **WHEN** I visit the ContactDrop page
  - **THEN** a white card SHALL be centered on the page with rounded corners and
- Scenario — Header image banner:
  - **WHEN** I view the form card
  - **THEN** a banner image SHALL appear at the top of the card with a
- Scenario — Close button:
  - **WHEN** I view the form card
  - **THEN** a close (X) button SHALL appear in the top-right corner of the card
- Scenario — Close button dismisses card:
  - **WHEN** I click the close (X) button
  - **THEN** the contact form card SHALL be hidden or dismissed

### 3. Footer
- The page footer SHALL link to Component Dock.
- Scenario — Footer link:
  - **WHEN** I scroll to the bottom of the page
  - **THEN** I SHALL see a footer with a link to "https://www.componentdock.com/"

### Cross-cutting requirements

- **Page layout** — The page SHALL render a full-page purple gradient background with a navigation bar and a centered contact form card.
  - Scenario — Purple gradient background: **WHEN** I visit the ContactDrop page; **THEN** the page background SHALL be a full-page gradient transitioning from
  - Scenario — Navigation bar: **WHEN** I visit the ContactDrop page; **THEN** a navigation bar SHALL be displayed at the top with a brand logo on
  - Scenario — Brand logo text: **WHEN** I view the navigation bar; **THEN** the left side SHALL display "Co." as brand text in white
  - Scenario — Nav contact button: **WHEN** I view the navigation bar; **THEN** the right side SHALL display a "CONTACT US" button with a white
- **Form fields** — The form SHALL contain name, email, phone, and message fields with left-side icons.
  - Scenario — Name field: **WHEN** I view the form; **THEN** a name input SHALL be displayed with a person icon on the left and
  - Scenario — Email field: **WHEN** I view the form; **THEN** an email input SHALL be displayed with a mail icon on the left and
  - Scenario — Phone field: **WHEN** I view the form; **THEN** a phone input SHALL be displayed with a phone icon on the left and
  - Scenario — Message field: **WHEN** I view the form; **THEN** a message textarea SHALL be displayed with a comment/chat icon on
  - Scenario — Input styling: **WHEN** I view any form field; **THEN** the input SHALL have a light gray bottom border, rounded corners,
- **Field validation** — Fields SHALL show visual feedback for valid/invalid states.
  - Scenario — Valid field indicator: **WHEN** a field has a valid value; **THEN** no error indicator SHALL be shown
  - Scenario — Invalid field indicator: **WHEN** a required field is empty or has an invalid value; **THEN** a red border SHALL appear around the field and a red X icon SHALL
- **Submit button** — The form SHALL have a pill-shaped submit button.
  - Scenario — Submit button displayed: **WHEN** I view the form; **THEN** a "SEND NOW" button SHALL be displayed at the bottom of the form
  - Scenario — Submit button hover: **WHEN** I hover over the submit button; **THEN** the button SHALL show a hover state (darkened purple or shadow)
  - Scenario — Form submission: **WHEN** I fill all required fields with valid data and click "SEND NOW"; **THEN** the form SHALL submit (or show a success state)
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/contactdrop/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/contactdrop/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Full-page purple gradient background renders correctly; [ ] Navigation bar with "Co." logo and "CONTACT US" button; [ ] Centered white card with header image banner; [ ] "CONTACT US" heading on the banner with dark overlay; [ ] Close (X) button dismisses the card; [ ] Four form fields with left-side icons (name, email, phone, message); [ ] Light gray input borders and placeholder text; [ ] Validation: red border + red X on invalid fields; [ ] "SEND NOW" pill button with purple background; [ ] Footer links to componentdock.com; [ ] Responsive layout (mobile-friendly); [ ] No ColorLib references in app code; [ ] `packages/ui` components reused where possible; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/contactdrop` ships on https://contactdrop.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/contactdrop/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/contactdrop/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/contactdrop/public/CNAME` = `contactdrop.free.componentdock.com`
  and the package `homepage` = `https://contactdrop.free.componentdock.com`.
