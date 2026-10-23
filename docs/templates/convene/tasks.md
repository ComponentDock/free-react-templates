# Convene — Implementation Tasks

Source design: **Manup** (`https://colorlib.com/wp/template/manup/`) → recreation name **convene**. Shipped at https://convene.free.componentdock.com.

Scope: Convene is a single-page conference and event template with a countdown counter, speaker grid, agenda schedule, three-tier ticket pricing, a blog teaser, newsletter capture and a contact form.

## Component breakdown

Render order as composed in `apps/convene/src/App.tsx`:

### 1. Navbar
- The navbar SHALL collapse into an `Open menu` / `Close menu` toggle on narrow viewports, and the footer SHALL be a `contentinfo` landmark that links `https://www.componentdock.com/`.
- Scenario — Visitor opens the mobile menu:
  - **WHEN** the visitor activates `Open menu`
  - **THEN** the navigation links are revealed and the toggle reads
- Scenario — Visitor looks for more templates:
  - **WHEN** the visitor reaches the footer
  - **THEN** a link to `https://www.componentdock.com/` is present

### 2. Hero
- The hero SHALL headline the event and offer a `Buy Ticket` CTA, and a countdown block SHALL render the remaining days, hours, minutes and seconds to the event date, updating once per second.
- Scenario — Visitor loads the page:
  - **WHEN** the page loads
  - **THEN** a `banner` landmark shows the event headline and `Buy Ticket`
  - **AND** four countdown units are visible with numeric values
- Scenario — A second elapses:
  - **WHEN** one second passes
  - **THEN** the seconds unit decrements without a full page re-render

### 3. Counter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Conference Date · Count Every Second · Until the Event

### 4. About
- The page SHALL render an `About Conference` block and a speaker grid in which each speaker card shows a name, role and social links.
- Scenario — Visitor browses the speakers:
  - **WHEN** the visitor scrolls to the speakers section
  - **THEN** each card exposes the speaker's name and role text
  - **AND** social icons carry accessible names

### 5. Speakers
- The page SHALL render an `About Conference` block and a speaker grid in which each speaker card shows a name, role and social links.
- Scenario — Visitor browses the speakers:
  - **WHEN** the visitor scrolls to the speakers section
  - **THEN** each card exposes the speaker's name and role text
  - **AND** social icons carry accessible names

### 6. Schedule
- The page SHALL render the agenda as day-grouped session rows and a pricing section headed `Ticket Pricing` with three tiers (the entry tier being `1 Day Pass`) priced at 79, 129 and 199.
- Scenario — Visitor compares tickets:
  - **WHEN** the visitor reaches `Ticket Pricing`
  - **THEN** three cards are visible with the prices 79, 129 and 199
  - **AND** each card carries its own CTA button

### 7. Pricing
- The page SHALL render the agenda as day-grouped session rows and a pricing section headed `Ticket Pricing` with three tiers (the entry tier being `1 Day Pass`) priced at 79, 129 and 199.
- Scenario — Visitor compares tickets:
  - **WHEN** the visitor reaches `Ticket Pricing`
  - **THEN** three cards are visible with the prices 79, 129 and 199
  - **AND** each card carries its own CTA button

### 8. Blog
- The page SHALL include a blog teaser row, a `Subscribe Newsletter` strip with an email field, and a contact form with validated required fields.
- Scenario — Visitor submits the newsletter form:
  - **WHEN** the visitor submits a valid email address
  - **THEN** an inline success message replaces the form controls
- Scenario — Visitor submits an empty contact form:
  - **WHEN** the visitor submits without filling the required fields
  - **THEN** the form reports the missing fields and does not navigate away

### 9. Newsletter
- The page SHALL include a blog teaser row, a `Subscribe Newsletter` strip with an email field, and a contact form with validated required fields.
- Scenario — Visitor submits the newsletter form:
  - **WHEN** the visitor submits a valid email address
  - **THEN** an inline success message replaces the form controls
- Scenario — Visitor submits an empty contact form:
  - **WHEN** the visitor submits without filling the required fields
  - **THEN** the form reports the missing fields and does not navigate away

### 10. Contact
- The page SHALL include a blog teaser row, a `Subscribe Newsletter` strip with an email field, and a contact form with validated required fields.
- Scenario — Visitor submits the newsletter form:
  - **WHEN** the visitor submits a valid email address
  - **THEN** an inline success message replaces the form controls
- Scenario — Visitor submits an empty contact form:
  - **WHEN** the visitor submits without filling the required fields
  - **THEN** the form reports the missing fields and does not navigate away

### 11. Footer
- The navbar SHALL collapse into an `Open menu` / `Close menu` toggle on narrow viewports, and the footer SHALL be a `contentinfo` landmark that links `https://www.componentdock.com/`.
- Scenario — Visitor opens the mobile menu:
  - **WHEN** the visitor activates `Open menu`
  - **THEN** the navigation links are revealed and the toggle reads
- Scenario — Visitor looks for more templates:
  - **WHEN** the visitor reaches the footer
  - **THEN** a link to `https://www.componentdock.com/` is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/convene/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/convene/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/convene`); [ ] Lint passes (`npm run lint`); [ ] Vitest coverage is 100% for `apps/convene`; [ ] Build succeeds (`npm run build --workspace @free-react-templates/convene`); [ ] Footer links to Component Dock; [ ] `public/CNAME` is `convene.free.componentdock.com` and `homepage` matches; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/convene` ships on https://convene.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/convene/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/convene/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/convene/public/CNAME` = `convene.free.componentdock.com`
  and the package `homepage` = `https://convene.free.componentdock.com`.
