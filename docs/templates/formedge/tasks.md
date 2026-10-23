# Formedge — Implementation Tasks

Source design: **Contact Form 10** (`https://colorlib.com/wp/template/contact-form-10/`) → recreation name **formedge**. Shipped at https://formedge.free.componentdock.com.

Scope: Recreation of ColorLib **Contact Form 10** — a full-width dark background image (city skyline) with a white form card overlaid on the right and contact info on the left. Features a blue "Send Message" button.

## Component breakdown

Render order as composed in `apps/formedge/src/App.tsx`:

### 1. PageTitle
- The page SHALL display "Contact Form #10" centered at the top in white serif font.
- Scenario — Title displays correctly:
  - **WHEN** I visit the Formedge page
  - **THEN** I see "Contact Form #10" centered at the top in white text

### 2. ContactInfo
- The contact info section SHALL display address, phone, email, and website with white icons and uppercase labels.
- Scenario — Address displayed:
  - **WHEN** I visit the Formedge page
  - **THEN** I see a white icon and text "ADDRESS: 198 West 21th Street, Suite 721 New York NY 10016"
- Scenario — Phone displayed:
  - **WHEN** I visit the Formedge page
  - **THEN** I see a white icon and text "PHONE: + 1235 2355 98"
- Scenario — Email displayed:
  - **WHEN** I visit the Formedge page
  - **THEN** I see a white icon and text "EMAIL: info@yoursite.com"
- Scenario — Website displayed:
  - **WHEN** I visit the Formedge page
  - **THEN** I see a white icon and text "WEBSITE: yoursite.com"

### 3. ContactForm
- The form SHALL display in a white card with rounded corners and shadow, containing a "Get in touch" heading, Name, Email, Subject, Message fields, and a Send Message button.
- Scenario — Form renders with all fields:
  - **WHEN** I visit the Formedge page
  - **THEN** I see a white card with rounded corners and shadow
  - **AND** the card contains a "Get in touch" heading
  - **AND** I see a Name input field
  - **AND** I see an Email input field
  - **AND** I see a Subject input field
  - **AND** I see a Message textarea
  - **AND** I see a Send Message button
- Scenario — Form fields are stacked vertically:
  - **WHEN** I visit the Formedge page
  - **THEN** all form fields are displayed in a single vertical column
- Scenario — Send Message button is styled:
  - **WHEN** I visit the Formedge page
  - **THEN** the Send Message button has a blue background and white text

### 4. Footer
- The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer displays Component Dock link:
  - **WHEN** I visit the Formedge page
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text references Component Dock

### Cross-cutting requirements

- **Full-width dark background image** — The page SHALL display a full-width dark background image (city skyline at night).
  - Scenario — Background image renders: **WHEN** I visit the Formedge page; **THEN** I see a full-width dark background image covering the viewport
- **Two-column content layout** — The page SHALL display contact info on the left and a white form card on the right.
  - Scenario — Content layout renders: **WHEN** I visit the Formedge page; **THEN** I see contact info on the left and a white form card on the right
- **Responsive behavior** — The columns SHALL stack vertically on mobile viewports.
  - Scenario — Columns stack on mobile: **WHEN** I visit the Formedge page on a mobile viewport; **THEN** the contact info and form card stack vertically; **AND** the form card appears below the contact info
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formedge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formedge/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formedge` ships on https://formedge.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formedge/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formedge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formedge/public/CNAME` = `formedge.free.componentdock.com`
  and the package `homepage` = `https://formedge.free.componentdock.com`.
