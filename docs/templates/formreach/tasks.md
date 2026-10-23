# Formreach — Implementation Tasks

Source design: **Contact Form 11** (`https://colorlib.com/wp/template/contact-form-11/`) → recreation name **formreach**. Shipped at https://formreach.free.componentdock.com.

Scope: Recreation of ColorLib "Contact Form 11" (https://colorlib.com/wp/template/contact-form-11/) as a React + Tailwind CSS template. A minimal two-column contact form with bold typography and bottom-border-only inputs.

## Component breakdown

Render order as composed in `apps/formreach/src/App.tsx`:

### 1. ContactForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: firstName · lastName · email · message

### 2. Sidebar
- The right column SHALL display a heading, paragraph, and "Read more" link.
- Scenario — Sidebar heading is visible:
  - **WHEN** the page loads
  - **THEN** the heading "Let's talk about everything" is rendered
- Scenario — Sidebar link is present:
  - **WHEN** the page loads
  - **THEN** a link labeled "Read more" is visible

### 3. Footer
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link target:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to "https://www.componentdock.com/" with text "Component Dock"

### Cross-cutting requirements

- **Page renders main heading and two-column layout** — The page SHALL display a prominent "Fill the form. It's easy." heading and a two-column layout (form on left, sidebar on right).
  - Scenario — Main heading is visible: **WHEN** the page loads; **THEN** the heading "Fill the form" is rendered
- **Form renders all required fields** — The contact form SHALL include first name, last name, email, and message fields, plus a submit button.
  - Scenario — First name and last name fields exist: **WHEN** the form is rendered; **THEN** inputs with placeholders "First name" and "Last name" are visible
  - Scenario — Email field exists: **WHEN** the form is rendered; **THEN** an input with placeholder "Email" is visible
  - Scenario — Message textarea exists: **WHEN** the form is rendered; **THEN** a textarea with placeholder "Write your message" is visible
  - Scenario — Submit button exists: **WHEN** the form is rendered; **THEN** a button labeled "Send Message" is visible
- **Form accepts user input** — The form fields SHALL accept typed input and update their values.
  - Scenario — User types in first name: **WHEN** the user types "John" in the first name field; **THEN** the field value is "John"
  - Scenario — User types in last name: **WHEN** the user types "Doe" in the last name field; **THEN** the field value is "Doe"
  - Scenario — User types in email: **WHEN** the user types "john@example.com" in the email field; **THEN** the field value is "john@example.com"
  - Scenario — User types in message: **WHEN** the user types "Hello" in the message field; **THEN** the field value is "Hello"
- **Form submission shows success message** — The form SHALL prevent default submission and display a success message.
  - Scenario — Success message appears after submit: **WHEN** the user clicks "Send Message"; **THEN** the text "Your message was sent, thank you!" is displayed
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formreach/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formreach/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formreach` ships on https://formreach.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formreach/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formreach/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formreach/public/CNAME` = `formreach.free.componentdock.com`
  and the package `homepage` = `https://formreach.free.componentdock.com`.
