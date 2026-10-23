# Propwell — Implementation Tasks

Source design: **Leramiz** (`https://colorlib.com/wp/template/leramiz/`) → recreation name **propwell**. Shipped at https://propwell.free.componentdock.com.

Scope: Propwell is a real estate landing page with a header bar, hero, filter bar, recent properties, services, featured listings and looking property.

## Component breakdown

Render order as composed in `apps/propwell/src/App.tsx`:

### 1. Header
- No dedicated spec block — hold this band to the design notes.
- Anchors: banner · Main navigation · Propwell · Register · Login

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Hero · Find your place with our · Discover the best properties in your area with Propwell · View Detail

### 3. FilterBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Property search filter · Search properties · Search keyword · Select city · Select state

### 4. RecentProperties
- No dedicated spec block — hold this band to the design notes.
- Anchors: Recent properties · Latest properties available in your area

### 5. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our services

### 6. FeaturedListings
- No dedicated spec block — hold this band to the design notes.
- Anchors: Featured listings · Explore our top featured properties

### 7. LookingProperty
- No dedicated spec block — hold this band to the design notes.
- Anchors: Property categories · Looking Property · Find the type of property you are looking for

### 8. PopularPlaces
- No dedicated spec block — hold this band to the design notes.
- Anchors: Popular places · Explore properties in popular locations

### 9. Reviews
- No dedicated spec block — hold this band to the design notes.
- Anchors: Customer reviews · Previous review · Next review

### 10. LatestNews
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest news · Stay updated with our latest articles

### 11. Partners
- No dedicated spec block — hold this band to the design notes.
- Anchors: Partners · Our Partners

### 12. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Newsletter signup · Email address · Subscribe

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/propwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/propwell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/propwell` ships on https://propwell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/propwell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/propwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/propwell/public/CNAME` = `propwell.free.componentdock.com`
  and the package `homepage` = `https://propwell.free.componentdock.com`.
