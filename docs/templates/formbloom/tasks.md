# Formbloom — Implementation Tasks

Source design: **Contact Form 15** (`https://colorlib.com/wp/template/contact-form-15/`) → recreation name **formbloom**. Shipped at https://formbloom.free.componentdock.com.

Scope: A minimal, monochrome contact form template with a two-column layout (location info + contact info) and a full-width message form below. Pure white background, Quicksand font, solid black "Send Message" button. <!-- ref-reverify:2026-10-22 -->

## Component breakdown

Render order as composed in `apps/formbloom/src/App.tsx`:

### 1. LocationInfo
- No dedicated spec block — hold this band to the design notes.
- Anchors: New York · Richmond Hill, NY 11419

### 2. ContactInfo
- Users SHALL see the location address, phone number, and email address.
- Scenario — Contact information visible:
  - **WHEN** the app loads
  - **THEN** the address "9757 Aspen Lane South" is visible
  - **AND** the phone "+1 (291) 939 9321" is visible
  - **AND** the email "info@mywebsite.com" is visible

### 3. MessageForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Message Us · Send Message

### 4. Footer
- Users SHALL see a footer with a link to https://www.componentdock.com/.
- Scenario — Footer link present:
  - **WHEN** the app loads
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text includes "Component Dock"

### Cross-cutting requirements

- **Page renders all sections** — Users SHALL see location info, contact info, and a message form on page load.
  - Scenario — All section headings visible: **WHEN** the app loads; **THEN** the heading "NEW YORK" is visible; **AND** the heading "CONTACT INFO" is visible; **AND** the heading "MESSAGE US" is visible
- **Form fields present and functional** — Users SHALL see name, email, and message fields and be able to type into them.
  - Scenario — Form fields exist: **WHEN** the app loads; **THEN** a text input with placeholder "Your name" exists; **AND** a text input with placeholder "Email" exists; **AND** a textarea with placeholder "Write your message" exists; **AND** a button labeled "Send Message" exists
  - Scenario — User can type in all fields: **WHEN** the user types "Alice" into the name field; **AND** types "alice@example.com" into the email field; **AND** types "Hello" into the message textarea; **THEN** all three fields contain the typed text
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formbloom/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formbloom/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formbloom` ships on https://formbloom.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formbloom/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formbloom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formbloom/public/CNAME` = `formbloom.free.componentdock.com`
  and the package `homepage` = `https://formbloom.free.componentdock.com`.
