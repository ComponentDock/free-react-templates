# Navpoint — Implementation Tasks

Source design: **Directoryplus** (`https://colorlib.com/wp/template/directoryplus/`) → recreation name **navpoint**. Shipped at https://navpoint.free.componentdock.com.

Scope: Navpoint is a directory & city guide template with a navbar, hero, categories, locations, food grid, how it works, clients and footer.

## Component breakdown

Render order as composed in `apps/navpoint/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle navigation · Login · Register

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Guide · Search

### 3. Categories
- No dedicated spec block — hold this band to the design notes.

### 4. Locations
- No dedicated spec block — hold this band to the design notes.
- Anchors: Explore Hot Locations

### 5. FoodGrid
- No dedicated spec block — hold this band to the design notes.
- Anchors: Find the best food near you

### 6. HowItWorks
- No dedicated spec block — hold this band to the design notes.
- Anchors: How Nav

### 7. CTA
- No dedicated spec block — hold this band to the design notes.
- Anchors: Find the best places in town! · See the list

### 8. CTAApp
- The application SHALL NOT carry the source design's provenance: no file under `apps/navpoint/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
- Scenario — Clean provenance:
  - **GIVEN** the template is implemented from this spec
  - **WHEN** every non-test file under `apps/navpoint/` is inspected
  - **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
  - **AND** the footer credit SHALL link to `https://www.componentdock.com/`
  - [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
  - [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

### 9. Clients
- No dedicated spec block — hold this band to the design notes.

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock

## Verification

- [x] `apps/navpoint` ships on https://navpoint.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/navpoint/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/navpoint/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/navpoint/public/CNAME` = `navpoint.free.componentdock.com`
  and the package `homepage` = `https://navpoint.free.componentdock.com`.
