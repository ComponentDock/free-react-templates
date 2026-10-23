# Homefront — Implementation Tasks

Source design: **Royalestate** (`https://colorlib.com/wp/template/royalestate/`) → recreation name **homefront**. Shipped at https://homefront.free.componentdock.com.

Scope: Homefront is a directory and listings landing page with a navbar, hero, search, services, recent properties, testimonials, stat counters and footer.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/homefront/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/homefront/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle menu · Homefront · Sign-In · Sign-Up

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: View Details

### 3. PropertySearch
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search Property · Keyword · Location · Property Type · All Types · Property Status

### 4. Services
- No dedicated spec block — hold this band to the design notes.

### 5. FeaturedProperties
- No dedicated spec block — hold this band to the design notes.
- Anchors: Recent Properties · Browse our latest property listings

### 6. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Testimonials

### 7. Stats
- No dedicated spec block — hold this band to the design notes.

### 8. Newsletter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Subscribe to our Newsletter · Get the latest property updates and market insights delivered to your inbox. · Subscribe

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Homefront · Home For Sale · Open Houses · New Listing · Recently Reduced · Sell

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/homefront/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/homefront/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/homefront` ships on https://homefront.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/homefront/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/homefront/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/homefront/public/CNAME` = `homefront.free.componentdock.com`
  and the package `homepage` = `https://homefront.free.componentdock.com`.
