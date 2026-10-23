# Talkwell — Implementation Tasks

Source design: **Contact Form 20** (`https://colorlib.com/wp/template/contact-form-20/`) → recreation name **talkwell**. Shipped at https://talkwell.free.componentdock.com.

Scope: Recreation of ColorLib "Contact Form 20" (https://colorlib.com/wp/template/contact-form-20/) as a React + Tailwind CSS template. A centered white card contact form on light gray background with "Let's Talk" heading, two-column Name/Email row, Subject, Message textarea, and blue pill submit button.

## Component breakdown

Render order as composed in `apps/talkwell/src/App.tsx`:

### 1. ContactForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Your message was sent, thank you! · Let&apos;s Talk · Name · Email · Subject · Message

### 2. Footer
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link target:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to "https://www.componentdock.com/" with text "Component Dock"

### Cross-cutting requirements

- **Page renders centered card with heading** — The page SHALL display a centered white card on a light gray background with a "Let's Talk" heading.
  - Scenario — Heading is visible: **WHEN** the page loads; **THEN** the heading "Let's Talk" is rendered inside a centered card
  - Scenario — Card has white background: **WHEN** the page loads; **THEN** the card container has a white background
- **Form renders all required fields** — The contact form SHALL include Name, Email, Subject, and Message fields plus a submit button.
  - Scenario — Name input exists: **WHEN** the form is rendered; **THEN** an input labeled "Name" with placeholder "Your name" is visible
  - Scenario — Email input exists: **WHEN** the form is rendered; **THEN** an input labeled "Email" with placeholder "Your email" is visible
  - Scenario — Subject input exists: **WHEN** the form is rendered; **THEN** an input labeled "Subject" with placeholder "Your subject" is visible
  - Scenario — Message textarea exists: **WHEN** the form is rendered; **THEN** a textarea labeled "Message" with placeholder "Write your message" is visible
  - Scenario — Submit button exists: **WHEN** the form is rendered; **THEN** a button labeled "SEND MESSAGE" is visible
- **Form accepts user input** — The form fields SHALL accept typed input and update their values.
  - Scenario — User types in Name: **WHEN** the user types "John" in the Name field; **THEN** the field value is "John"
  - Scenario — User types in Email: **WHEN** the user types "john@example.com" in the Email field; **THEN** the field value is "john@example.com"
  - Scenario — User types in Subject: **WHEN** the user types "Hello" in the Subject field; **THEN** the field value is "Hello"
  - Scenario — User types in Message: **WHEN** the user types "Hi there" in the Message field; **THEN** the field value is "Hi there"
- **Form submission shows success message** — The form SHALL prevent default submission and display a success message.
  - Scenario — Success message appears after submit: **WHEN** the user clicks "SEND MESSAGE"; **THEN** the text "Your message was sent, thank you!" is displayed
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/talkwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/talkwell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/talkwell` ships on https://talkwell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/talkwell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/talkwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/talkwell/public/CNAME` = `talkwell.free.componentdock.com`
  and the package `homepage` = `https://talkwell.free.componentdock.com`.
