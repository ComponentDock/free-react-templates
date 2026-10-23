# Touchback — Implementation Tasks

Source design: **Contact Form 12** (`https://colorlib.com/wp/template/contact-form-12/`) → recreation name **touchback**. Shipped at https://touchback.free.componentdock.com.

Scope: A clean, minimal two-column contact page with a heading, description, and contact details on the left, and a simple form. It also includes Message) with a blue "Send Message" button on the right. Recreation of ColorLib **Contact Form 12**.

## Component breakdown

Render order as composed in `apps/touchback/src/App.tsx`:

### 1. ContactInfo
- The form has three fields and a submit button.
- Scenario — Name field:
  - **WHEN** I look at the form
  - **THEN** I see a "Name" text input field
- Scenario — Email field:
  - **WHEN** I look at the form
  - **THEN** I see an "Email" text input field
- Scenario — Message field:
  - **WHEN** I look at the form
  - **THEN** I see a "Message" textarea field
- Scenario — Submit button:
  - **WHEN** I look at the form
  - **THEN** I see a "Send Message" button
- Scenario — Form submission:
  - **WHEN** I fill in all fields and click "Send Message"
  - **THEN** the form submits without error

### 2. ContactForm
- The left column displays three contact items with icons.
- Scenario — Address item:
  - **WHEN** I view the contact info
  - **THEN** I see an address with a location icon
- Scenario — Phone item:
  - **WHEN** I view the contact info
  - **THEN** I see a phone number with a phone icon
- Scenario — Email item:
  - **WHEN** I view the contact info
  - **THEN** I see an email address with a mail icon

### 3. Footer
- Every template must link to Component Dock.
- Scenario — Footer link:
  - **WHEN** I scroll to the bottom of the page
  - **THEN** I see a link to https://www.componentdock.com/ labeled "Component Dock"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Page layout** — The page renders a centered two-column card on a white background with generous padding.
  - Scenario — Page renders with two columns: **WHEN** I visit the Touchback page; **THEN** I see a card with two columns: a left info panel and a right form panel
  - Scenario — Left column contains heading and contact info: **WHEN** I view the left column; **THEN** I see "Contact Us" as a bold heading; **AND** I see a description paragraph below the heading; **AND** I see address, phone, and email contact items with icons
  - Scenario — Right column contains the form: **WHEN** I view the right column; **THEN** I see a form with Name, Email, and Message fields; **AND** I see a "Send Message" button
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/touchback/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/touchback/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/touchback` ships on https://touchback.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/touchback/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/touchback/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/touchback/public/CNAME` = `touchback.free.componentdock.com`
  and the package `homepage` = `https://touchback.free.componentdock.com`.
