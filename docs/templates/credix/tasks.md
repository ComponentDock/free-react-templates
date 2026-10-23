# Credix — Implementation Tasks

Source design: **Credit** (`https://colorlib.com/wp/template/credit/`) → recreation name **credix**. Shipped at https://credix.free.componentdock.com.

Scope: A loan and credit company landing page with navy blue and golden accent, featuring a hero section, feature highlights, skill indicators. It also includes services grid, contact/news section, newsletter signup, and a 4-column footer. Recreation of ColorLib "Credit" (https://colorlib.com/wp/template/credit/).

## Component breakdown

Render order as composed in `apps/credix/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display navigation links and support a mobile toggle.
- Scenario — Navigation links:
  - **WHEN** the Credix app loads
  - **THEN** the navbar displays "Home", "About", "Services", "Blog", "Contact" links
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the mobile menu toggle
  - **THEN** the mobile menu opens with navigation links visible
  - **AND** aria-expanded is "true"
- Scenario — Mobile menu close on link click:
  - **WHEN** the mobile menu is open and the user clicks a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Discover

### 3. Features
- The features section SHALL display a heading card with "Our Loans" title and three image cards highlighting loan benefits.
- Scenario — Feature cards:
  - **WHEN** the Credix app loads
  - **THEN** the features section displays "Our Loans" heading
  - **AND** the features section displays "We take care of you"
  - **AND** the features section displays "No documents needed"
  - **AND** the features section displays "Fast & easy loans"

### 4. Stats
- The stats section SHALL display three circular progress indicators showing Energy (90%), Power (75%), and Resource (97%).
- Scenario — Skill indicators:
  - **WHEN** the Credix app loads
  - **THEN** the stats section displays "Energy" with value "90%"
  - **AND** the stats section displays "Power" with value "75%"
  - **AND** the stats section displays "Resource" with value "97%"

### 5. CtaBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: Are you in need for a loan? Get in touch with us. · Read More

### 6. Services
- The services section SHALL display 6 service cards in a 3-column grid, each with an icon, title, and description.
- Scenario — Service cards:
  - **WHEN** the Credix app loads
  - **THEN** the services section displays 6 service card titles
  - **AND** each card has a description paragraph

### 7. ContactNews
- No dedicated spec block — hold this band to the design notes.
- Anchors: Get in touch · Franklin, LA 70538 · The news

### 8. Newsletter
- The newsletter section SHALL display an email input field and a subscribe button.
- Scenario — Newsletter form:
  - **WHEN** the Credix app loads
  - **THEN** the newsletter section has an email input field
  - **AND** the newsletter section has a "Subscribe" button
- Scenario — Newsletter form submission:
  - **WHEN** the user enters an email and clicks Subscribe
  - **THEN** the email input is cleared

### 9. Footer
- The footer SHALL display 4 widget columns and a copyright bar linking to Component Dock.
- Scenario — Footer columns:
  - **WHEN** the Credix app loads
  - **THEN** the footer contains "About Us" heading
  - **AND** the footer contains "Solutions" heading
  - **AND** the footer contains "Our Loans" heading
  - **AND** the footer contains "Latest News" heading
- Scenario — Component Dock link:
  - **WHEN** the Credix app loads
  - **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"

### Cross-cutting requirements

- **Full page render with all sections** — The Credix app SHALL render a complete landing page with header, hero, features, stats, CTA banner, services, contact/news, newsletter, and footer sections.
  - Scenario — Document title and landmarks: **WHEN** the Credix app loads; **THEN** the document title is "Credix — Loan & Credit Company Template"; **AND** the page contains a banner landmark (header); **AND** the page contains a main landmark; **AND** the page contains a contentinfo landmark (footer)
  - Scenario — Hero section content: **WHEN** the Credix app loads; **THEN** the hero section displays the heading "get your loan now"; **AND** the hero section displays a "Discover" call-to-action button
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/credix/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/credix/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/credix` ships on https://credix.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/credix/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/credix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/credix/public/CNAME` = `credix.free.componentdock.com`
  and the package `homepage` = `https://credix.free.componentdock.com`.
