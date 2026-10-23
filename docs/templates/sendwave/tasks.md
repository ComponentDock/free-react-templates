# Sendwave — Implementation Tasks

Source design: **Contact Form 05** (`https://colorlib.com/wp/template/contact-form-05/`) → recreation name **sendwave**. Shipped at https://sendwave.free.componentdock.com.

Scope: Sendwave is a two-column contact form page in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Contact Form 05" website template design (source: https://colorlib.com/wp/template/contact-form-05/), built under a DIFFERENT name (Sendwave) per the monorepo naming mandate, with the monorepo stack: Vi…

## Component breakdown

Render order as composed in `apps/sendwave/src/App.tsx`:

### 1. ContactCard
- The application SHALL render a two-column card with white left panel and background image right panel, wrapped in a shadow container with rounded corners.
- Scenario — Card structure renders correctly:
  - **WHEN** the app is loaded
  - **THEN** the shadow card is rendered with rounded corners
  - **AND** the "Contact us" heading is visible
  - **AND** the subtitle about suggestions is visible

### 2. Footer
- The application SHALL render a footer linking to Component Dock.
- Scenario — Footer renders with correct link:
  - **WHEN** the app is loaded
  - **THEN** the footer contains "More templates at Component Dock"
  - **AND** the link points to componentdock.com with target _blank

### Cross-cutting requirements

- **Page renders with title and layout** — The application SHALL render a centered "Contact Form #05" heading above a two-column contact card with light gray page background.
  - Scenario — App renders with page title: **WHEN** the app is loaded; **THEN** the heading "Contact Form #05" is visible; **AND** the page background is light gray
- **Contact info displays address, email, phone** — The application SHALL display address, email, and phone information with uppercase labels and clickable links for email and phone.
  - Scenario — Info items are visible and linked: **WHEN** the app is loaded; **THEN** the address "198 West 21th Street" is visible; **AND** the email "info@yoursite.com" links to mailto; **AND** the phone "+ 1235 2355 98" links to tel
- **Contact form with all fields** — The application SHALL render a contact form with Name, Email, Subject, Message fields and a Send Message submit button.
  - Scenario — All form fields exist: **WHEN** the app is loaded; **THEN** the Name, Email, Subject, and Message fields are present; **AND** the "Send Message" button is visible
  - Scenario — User can type in form fields: **WHEN** the user types "John" in the Name field; **THEN** the Name field contains "John"
  - Scenario — Form submission is prevented: **WHEN** the user clicks "Send Message"; **THEN** the form does not navigate away
- **Social media links** — The application SHALL render a social media section with Facebook, Twitter, Instagram, and Dribbble links in uppercase small text.
  - Scenario — Social links are rendered: **WHEN** the app is loaded; **THEN** Facebook, Twitter, Instagram, and Dribbble links exist; **AND** they are uppercase and small text
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sendwave/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sendwave/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sendwave` ships on https://sendwave.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sendwave/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sendwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sendwave/public/CNAME` = `sendwave.free.componentdock.com`
  and the package `homepage` = `https://sendwave.free.componentdock.com`.
