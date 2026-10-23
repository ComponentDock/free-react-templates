# Formdrop — Implementation Tasks

Source design: **Contact Form 04** (`https://colorlib.com/wp/template/contact-form-04/`) → recreation name **formdrop**. Shipped at https://formdrop.free.componentdock.com.

Scope: Recreation of ColorLib **Contact Form 04** — a two-column contact page with a deep purple form panel on the left and a white contact-info panel on the right. Features a pink/magenta accent button and a decorative heading underline.

## Component breakdown

Render order as composed in `apps/formdrop/src/App.tsx`:

### 1. ContactCard
- The form SHALL contain Name, Email, Subject, and Message fields stacked vertically with underline styling on a purple background.
- Scenario — Form displays all fields:
  - **WHEN** I visit the Formdrop page
  - **THEN** I see a Name input field
  - **AND** I see an Email input field
  - **AND** I see a Subject input field
  - **AND** I see a Message textarea
  - **AND** I see a Send Message button
- Scenario — Form fields are stacked vertically:
  - **WHEN** I visit the Formdrop page
  - **THEN** all form fields are displayed in a single vertical column
- Scenario — Inputs have underline style:
  - **WHEN** I visit the Formdrop page
  - **THEN** all form inputs have a bottom border only (underline style)
- Scenario — Send Message button is styled:
  - **WHEN** I visit the Formdrop page
  - **THEN** the Send Message button has a pink background and white text
- Scenario — Form fields accept input:
  - **WHEN** I type "John" into the Name field
  - **THEN** the Name field displays "John"
- Scenario — Form submission is prevented:
  - **WHEN** I click the Send Message button
  - **THEN** the form does not navigate or reload

### 2. Footer
- The footer SHALL link to Component Dock.
- Scenario — Footer links to Component Dock:
  - **WHEN** I visit the Formdrop page
  - **THEN** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text references Component Dock

### Cross-cutting requirements

- **Page layout** — The page SHALL display a centered two-column card on a light gray background with the page title above the card.
  - Scenario — Two-column card renders: **WHEN** I visit the Formdrop page; **THEN** I see a centered card with two columns on a light gray background; **AND** the page title "Contact Form #04" is displayed above the card
  - Scenario — Left column is purple and contains the form: **WHEN** I visit the Formdrop page; **THEN** the left column has a purple background; **AND** it contains a "Send us a message" heading
  - Scenario — Right column is white and contains contact info: **WHEN** I visit the Formdrop page; **THEN** the right column has a white background; **AND** it contains a "Contact us" heading
- **Contact info panel** — The info panel SHALL display a heading with pink underline decoration, subtext, and four contact items with gray circular icons.
  - Scenario — Info panel has heading underline: **WHEN** I visit the Formdrop page; **THEN** the "Contact us" heading has a short pink underline decoration below it
  - Scenario — Info panel displays subtext: **WHEN** I visit the Formdrop page; **THEN** I see "We're open for any suggestion or just to have a chat" below the heading
  - Scenario — Info panel displays address: **WHEN** I visit the Formdrop page; **THEN** I see an address icon and text "198 West 21th Street, Suite 721 New York NY 10016"
  - Scenario — Info panel displays phone: **WHEN** I visit the Formdrop page; **THEN** I see a phone icon and text "+ 1235 2355 98"
  - Scenario — Info panel displays email: **WHEN** I visit the Formdrop page; **THEN** I see an email icon and text "info@yoursite.com"
  - Scenario — Info panel displays website: **WHEN** I visit the Formdrop page; **THEN** I see a globe icon and text "yoursite.com"
  - Scenario — Info panel icons have circular gray backgrounds: **WHEN** I visit the Formdrop page; **THEN** each contact info item has a circular gray icon container
- **Responsive behavior** — The layout SHALL stack columns vertically on mobile viewports.
  - Scenario — Columns stack on mobile: **WHEN** I visit the Formdrop page on a mobile viewport; **THEN** the two columns stack vertically; **AND** the form appears above the contact info panel
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formdrop/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formdrop/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formdrop` ships on https://formdrop.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formdrop/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formdrop/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formdrop/public/CNAME` = `formdrop.free.componentdock.com`
  and the package `homepage` = `https://formdrop.free.componentdock.com`.
