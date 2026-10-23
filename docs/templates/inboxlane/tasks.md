# Inboxlane — Implementation Tasks

Source design: **Contact Form 18** (`https://colorlib.com/wp/template/contact-form-18/`) → recreation name **inboxlane**. Shipped at https://inboxlane.free.componentdock.com.

Scope: InboxLane is a two-column contact form template with a dark-themed map section. It provides a clean, professional way for visitors to send messages, with form validation and a responsive layout.

## Component breakdown

Render order as composed in `apps/inboxlane/src/App.tsx`:

### 1. ContactForm
- The page SHALL display a two-column contact form with fields for Name, Email, Phone, Company, and Message.
- Scenario — Form renders all fields:
  - **WHEN** the page loads
  - **THEN** the heading "Send us a message" is visible
  - **AND** fields for Name, Email, Phone, Company, and Message are present
  - **AND** Name, Email, and Message are marked as required

### 2. MapSection
- The page SHALL display a dark-themed map section to the right of the form.
- Scenario — Map renders:
  - **WHEN** the page loads
  - **THEN** a map section with a location marker is visible
  - **AND** the map displays a "My Co." label

### 3. Footer
- The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link:
  - **WHEN** the page loads
  - **THEN** the footer displays "More templates at Component Dock"
  - **AND** the link points to https://www.componentdock.com/

### Cross-cutting requirements

- **Form validates required fields** — The form SHALL prevent submission when required fields are empty and display validation errors.
  - Scenario — Submitting empty form shows errors: **WHEN** the user clicks "Send Message" without filling any fields; **THEN** error messages appear for Name, Email, and Message
  - Scenario — Invalid email shows error: **WHEN** the user enters an invalid email address and submits; **THEN** an "Invalid email" error message is shown
- **Form submits with valid data** — The form SHALL call the onSubmit handler with form data when all required fields pass validation.
  - Scenario — Successful submission: **WHEN** the user fills Name, Email, and Message with valid data and clicks "Send Message"; **THEN** the onSubmit callback is invoked with the entered data; **AND** a success confirmation message is displayed
- **Responsive layout** — The template SHALL stack the form and map into a single column on mobile screens.
  - Scenario — Mobile layout: **WHEN** the viewport width is less than 768px; **THEN** the form takes full width and the map is hidden
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/inboxlane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/inboxlane/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/inboxlane` ships on https://inboxlane.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/inboxlane/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/inboxlane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/inboxlane/public/CNAME` = `inboxlane.free.componentdock.com`
  and the package `homepage` = `https://inboxlane.free.componentdock.com`.
