# Formlink — Implementation Tasks

Source design: **Contact Form 06** (`https://colorlib.com/wp/template/contact-form-06/`) → recreation name **formlink**. Shipped at https://formlink.free.componentdock.com.

Scope: Formlink is a split-layout contact form page in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/formlink/src/App.tsx`:

### 1. ContactCard
- The application SHALL render a two-column card with white left panel (form) and background map image right panel, wrapped in a shadow container with rounded corners.
- Scenario — Card structure renders correctly:
  - **WHEN** the app is loaded
  - **THEN** the shadow card is rendered with rounded corners
  - **AND** the "Contact Us" heading is visible
  - **AND** the map placeholder image is rendered

### 2. Footer
- The application SHALL render a footer linking to Component Dock.
- Scenario — Footer renders with correct link:
  - **WHEN** the app is loaded
  - **THEN** the footer contains "More templates at Component Dock"
  - **AND** the link points to componentdock.com with target _blank

### Cross-cutting requirements

- **Page renders with title and layout** — The application SHALL render a centered "Formlink — Contact Form" heading above a split-layout contact card with white page background.
  - Scenario — App renders with page title: **WHEN** the app is loaded; **THEN** the heading "Formlink — Contact Form" is visible; **AND** the page background is white
- **Contact form with all fields** — The application SHALL render a contact form with Full Name, Email Address, Subject, Message fields and a Send Message submit button.
  - Scenario — All form fields exist: **WHEN** the app is loaded; **THEN** the Full Name, Email Address, Subject, and Message fields are present; **AND** the "Send Message" button is visible
  - Scenario — User can type in form fields: **WHEN** the user types "Alice" in the Full Name field; **THEN** the Full Name field contains "Alice"
  - Scenario — Form submission is prevented: **WHEN** the user clicks "Send Message"; **THEN** the form does not navigate away
- **Info boxes display contact details** — The application SHALL display four info boxes below the card with Address, Phone, Email, and Website details, each with an icon.
  - Scenario — Info items are visible and linked: **WHEN** the app is loaded; **THEN** the address "198 West 21th Street" is visible; **AND** the phone "+ 1235 2355 98" links to tel; **AND** the email "info@yoursite.com" links to mailto; **AND** the website "yoursite.com" is visible
  - Scenario — Info boxes have icons: **WHEN** the app is loaded; **THEN** four icon containers are rendered
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formlink/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formlink/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formlink` ships on https://formlink.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formlink/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formlink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formlink/public/CNAME` = `formlink.free.componentdock.com`
  and the package `homepage` = `https://formlink.free.componentdock.com`.
