# Carosle — Implementation Tasks

Source design: **Carousel 04** (`https://colorlib.com/wp/template/carousel-04/`) → recreation name **carosle**. Shipped at https://carosle.free.componentdock.com.

Scope: - Recreation of ColorLib **Carousel V04** (`https://colorlib.com/wp/template/carousel-04/`).

## Component breakdown

Render order as composed in `apps/carosle/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Revolve · Home · Slides · About · Contact

### 2. Carousel
- #### Scenario: Testimonial Carousel Section - The template must display a clean, centered testimonial carousel featuring quote cards with quotation marks icon, descriptive quote text, author name, and role/title. - Interactive slide navigation (prev/next controls and clickable pagination dots).
- Scenario — Testimonial Carousel Section:
  - The template must display a clean, centered testimonial carousel featuring quote cards with quotation marks icon, descriptive quote text, author name, and role/title.
  - Interactive slide navigation (prev/next controls and clickable pagination dots).

### 3. Footer
- #### Scenario: Footer Component - Professional footer featuring brand info, quick navigation links, newsletter signup, and mandatory Component Dock attribution (`https://www.componentdock.com/`).
- Scenario — Footer Component:
  - Professional footer featuring brand info, quick navigation links, newsletter signup, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/carosle/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/carosle/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] TypeScript strict compilation passes without errors.; [ ] Tailwind CSS v4 styling and `@theme` tokens correctly applied.; [ ] Responsive design verified for mobile, tablet, and desktop viewports.; [ ] 100% test coverage on all components.; [ ] Footer correctly includes link to `https://www.componentdock.com/`.; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/carosle` ships on https://carosle.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/carosle/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/carosle/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carosle/public/CNAME` = `carosle.free.componentdock.com`
  and the package `homepage` = `https://carosle.free.componentdock.com`.
