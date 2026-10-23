# Formnet — Implementation Tasks

Source design: **Contact Form V7** (`https://colorlib.com/wp/template/contact-form-v7/`) → recreation name **formnet**. Shipped at https://formnet.free.componentdock.com.

Scope: A Contact Form template with form and checkbox sections. Recreation of ColorLib [Contact Form V7](https://colorlib.com/wp/template/contact-form-v7/) Preview: https://colorlib.com/etc/cf/ContactFrom_v7/index.html A minimal, centered contact form with Oswald font, left-aligned icon inputs, a custom checkbox, and a gradient pink-to-red submi…

## Component breakdown

Render order as composed in `apps/formnet/src/App.tsx`:

### 1. ContactForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Contact form · name · email · phone · message · copy-mail

### 2. Footer
- The footer SHALL contain a link to https://www.componentdock.com/.
- Scenario — Footer link:
  - **WHEN** the page loads
  - **THEN** I should see a link to "https://www.componentdock.com/"

### Cross-cutting requirements

- **Form renders all fields** — The contact form SHALL display a heading, four input fields (name, email, phone, message), a "Send copy to my-email" checkbox, and a "Send Email" submit button.
  - Scenario — Page loads with all form elements: **WHEN** the page loads; **THEN** I should see a heading "Get in Touch"; **AND** I should see an input with placeholder "Name"; **AND** I should see an input with placeholder "Email"; **AND** I should see an input with placeholder "Phone"; **AND** I should see a textarea with placeholder "Your message..."; **AND** I should see a checkbox labeled "Send copy to my-email"; **AND** I should see a button labeled "Send Email"
- **Form validates required fields** — The form SHALL display validation errors when required fields are empty on submit.
  - Scenario — Required field validation: **WHEN** I click "Send Email" without filling any fields; **THEN** I should see "Name is required"; **AND** I should see "Valid email is required: ex@abc.xyz"; **AND** I should see "Phone is required"; **AND** I should see "Message is required"
- **Form submits with valid data** — The form SHALL submit successfully when all required fields are filled.
  - Scenario — Successful form submission: **WHEN** I fill in "Name" with "John Doe"; **AND** I fill in "Email" with "john@example.com"; **AND** I fill in "Phone" with "555-1234"; **AND** I fill in the message with "Hello!"; **AND** I click "Send Email"; **THEN** I should see a success message
- **Checkbox toggles** — The checkbox SHALL toggle on click.
  - Scenario — Checkbox toggle: **WHEN** I click the "Send copy to my-email" checkbox; **THEN** the checkbox should be checked
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formnet/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formnet/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formnet` ships on https://formnet.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formnet/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formnet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formnet/public/CNAME` = `formnet.free.componentdock.com`
  and the package `homepage` = `https://formnet.free.componentdock.com`.
