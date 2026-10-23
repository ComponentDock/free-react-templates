# Regnest — Implementation Tasks

Source design: **Colorlib Regform 29** (`https://colorlib.com/wp/template/colorlib-regform-29/`) → recreation name **regnest**. Shipped at https://regnest.free.componentdock.com.

Scope: Provide a clean, centered booking ticket registration form with an image carousel, supporting multiple ticket types with dynamic pricing.

## Component breakdown

Render order as composed in `apps/regnest/src/App.tsx`:

### 1. BookingCard
- Users SHALL see a "Booking Tickets" heading, inputs for Full Name, Email, Person count, Date, and Ticket Type, a price display, terms checkbox, and a "BUY NOW" button.
- Scenario — renders the form with all fields:
  - **WHEN** the page loads
  - **THEN** the heading "Booking Tickets" is visible
  - **AND** a "Full Name" text input exists
  - **AND** an "Email" text input exists
  - **AND** a "Person" number input exists
  - **AND** a "Date" date input exists
  - **AND** a "Ticket Type" select exists
  - **AND** a price "$20.00" is displayed
  - **AND** a "BUY NOW" button exists

### 2. Footer
- The page footer SHALL link to Component Dock (https://www.componentdock.com/).
- Scenario — footer links to Component Dock:
  - **THEN** a link to componentdock.com is present

### Cross-cutting requirements

- **Dynamic pricing based on ticket type and person count** — The displayed price SHALL update when the ticket type or person count changes. Default: VIP at $20/person.
  - Scenario — shows price based on ticket type: **WHEN** the ticket type changes to "Regular"; **THEN** the price updates to "$10.00"
  - Scenario — shows price based on person count: **WHEN** the person count changes to 3; **THEN** the total price updates to reflect 3 persons ($60.00 for VIP)
- **Form submission with terms validation** — The form SHALL only submit when all required fields are filled and the terms checkbox is checked. Upon submission, a confirmation message is shown.
  - Scenario — submits the form successfully: **WHEN** the user fills in Full Name, Email, Date; **AND** the user checks the terms checkbox; **AND** the user clicks "BUY NOW"; **THEN** a confirmation message is shown
  - Scenario — blocks submission without terms: **WHEN** the user fills in all required fields; **AND** the user does NOT check the terms checkbox; **AND** the user clicks "BUY NOW"; **THEN** the form remains visible
  - Scenario — blocks submission with empty required fields: **WHEN** the user checks the terms checkbox; **AND** required fields are empty; **AND** the user clicks "BUY NOW"; **THEN** the form remains visible
- **Image carousel navigation** — The right side of the card SHALL display an image carousel with prev/next navigation.
  - Scenario — image carousel navigation: **WHEN** the user clicks the next arrow; **THEN** the displayed image changes; **WHEN** the user clicks the previous arrow; **THEN** the image returns to the previous one
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/regnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/regnest/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/regnest` ships on https://regnest.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regnest/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regnest/public/CNAME` = `regnest.free.componentdock.com`
  and the package `homepage` = `https://regnest.free.componentdock.com`.
