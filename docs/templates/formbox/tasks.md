# Formbox — Implementation Tasks

Source design: **Contact Form 17** (`https://colorlib.com/wp/template/contact-form-17/`) → recreation name **formbox**. Shipped at https://formbox.free.componentdock.com.

Scope: Recreation of ColorLib "Contact Form 17" (https://colorlib.com/wp/template/contact-form-17/). Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-17/ A two-column contact form with a navy blue (#35477d) sidebar showing contact information, and a white form panel with underline-style inputs.

## Component breakdown

Render order as composed in `apps/formbox/src/App.tsx`:

### 1. ContactForm
- The template SHALL display a two-column contact card with a form panel and a sidebar.
- Scenario — Form panel renders all fields:
  - **WHEN** the page loads
  - **THEN** the "Send us a message" heading is visible
  - **AND** the Name, Email, Phone, Company, and Message fields are present
  - **AND** the "Send Message" button is visible
- Scenario — Sidebar renders contact information:
  - **WHEN** the page loads
  - **THEN** the "Contact Information" heading is visible
  - **AND** the description paragraph is visible
  - **AND** the address, phone, and email are displayed with icons

### 2. ContactSidebar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Contact Information · Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, magnam!

### 3. Footer
- The template SHALL display a footer linking to https://www.componentdock.com/.
- Scenario — Footer renders correctly:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text includes "Component Dock"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Form interaction** — The template SHALL allow users to type into all form fields and prevent default form submission.
  - Scenario — User types in form fields: **WHEN** the user types into any form field; **THEN** the field value updates to reflect the typed text
  - Scenario — Form submission is prevented: **WHEN** the user clicks the "Send Message" button; **THEN** the form submission is prevented (no page navigation)
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formbox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formbox/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formbox` ships on https://formbox.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formbox/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formbox/public/CNAME` = `formbox.free.componentdock.com`
  and the package `homepage` = `https://formbox.free.componentdock.com`.
