# Contactly — Implementation Tasks

Source design: **Contact Form 02** (`https://colorlib.com/wp/template/contact-form-02/`) → recreation name **contactly**. Shipped at https://contactly.free.componentdock.com.

Scope: A two-column contact page with a green/teal info panel on the left and a form with underline-style inputs on the right. Recreation of ColorLib **Contact Form 02**.

## Component breakdown

Render order as composed in `apps/contactly/src/App.tsx`:

### 1. PageTitle
- The page renders a centered two-column card on a light gray background with a page title above it.
- Scenario — Page title displayed:
  - **WHEN** I visit the Contactly page
  - **THEN** the page title "Contact Form #02" is displayed centered above the card
- Scenario — Two-column card rendered:
  - **WHEN** I visit the Contactly page
  - **THEN** I see a centered card with two columns on a light gray background

### 2. ContactInfo
- The left column has a green background and contains contact information.
- Scenario — Green info panel:
  - **WHEN** I visit the Contactly page
  - **THEN** the left column has a green background
- Scenario — Info panel heading:
  - **WHEN** I visit the Contactly page
  - **THEN** the left column contains a "Let's get in touch" heading
- Scenario — Info panel subtext:
  - **WHEN** I visit the Contactly page
  - **THEN** I see "We're open for any suggestion or just to have a chat" below the heading
- Scenario — Address displayed:
  - **WHEN** I visit the Contactly page
  - **THEN** I see an address icon and text "198 West 21th Street, Suite 721 New York NY 10016"
- Scenario — Phone displayed:
  - **WHEN** I visit the Contactly page
  - **THEN** I see a phone icon and text "+ 1235 2355 98"
- Scenario — Email displayed:
  - **WHEN** I visit the Contactly page
  - **THEN** I see an email icon and text "info@yoursite.com"
- Scenario — Website displayed:
  - **WHEN** I visit the Contactly page
  - **THEN** I see a globe icon and text "yoursite.com"
- Scenario — Circular icon containers:
  - **WHEN** I visit the Contactly page
  - **THEN** each contact info item has a circular white icon container

### 3. ContactForm
- The right column contains a form with underline-style inputs and a submit button.
- Scenario — Form heading:
  - **WHEN** I visit the Contactly page
  - **THEN** the right column contains a "Get in touch" heading
- Scenario — All form fields present:
  - **WHEN** I visit the Contactly page
  - **THEN** I see a Full Name input field, an Email Address input field, a Subject input field, a Message textarea, and a Send Message button
- Scenario — Name and email side by side:
  - **WHEN** I visit the Contactly page
  - **THEN** the Full Name and Email Address inputs are displayed in the same row
- Scenario — Subject full width:
  - **WHEN** I visit the Contactly page
  - **THEN** the Subject input spans the full width of the form
- Scenario — Underline input style:
  - **WHEN** I visit the Contactly page
  - **THEN** all form inputs have a bottom border only (underline style)
- Scenario — Uppercase labels:
  - **WHEN** I visit the Contactly page
  - **THEN** all form field labels are displayed in uppercase above their inputs
- Scenario — Message textarea:
  - **WHEN** I visit the Contactly page
  - **THEN** the Message textarea has a tall height suitable for multi-line input
- Scenario — Send Message button:
  - **WHEN** I visit the Contactly page
  - **THEN** the Send Message button has a green background and white text

### 4. Footer
- The page footer links to Component Dock.
- Scenario — Component Dock link:
  - **WHEN** I visit the Contactly page
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text references Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/contactly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/contactly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/contactly` ships on https://contactly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/contactly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/contactly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/contactly/public/CNAME` = `contactly.free.componentdock.com`
  and the package `homepage` = `https://contactly.free.componentdock.com`.
