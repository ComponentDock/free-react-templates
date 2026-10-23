# Slidespot — Implementation Tasks

Source design: **Carousel 06** (`https://colorlib.com/wp/template/carousel-06/`) → recreation name **slidespot**. Shipped at https://slidespot.free.componentdock.com.

Scope: Recreation of ColorLib "Carousel 06" (https://colorlib.com/wp/template/carousel-06/, live preview at https://preview.colorlib.com/theme/bootstrap/carousel-06/). A split-screen carousel template with gorgeous background imagery, text overlay, contact details, and primary CTA buttons.

## Component breakdown

Render order as composed in `apps/slidespot/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: SlideSpot · Carousel · About · Contact

### 2. Carousel
- The carousel SHALL display split-screen slides with a background image on one side and text content on the other. Users SHALL be able to navigate between slides using Prev/Next arrows and pagination dots.
- Scenario — Default slide display:
  - **GIVEN** the user visits the SlideSpot home page
  - **WHEN** the page loads
  - **THEN** the first slide is displayed with the heading "Define Your Budget", contact information, description text, and two CTA buttons.
- Scenario — Navigate to next slide via arrow:
  - **GIVEN** the user is viewing the first slide
  - **WHEN** the user clicks the Next arrow button
  - **THEN** the carousel transitions to display the second slide with the heading "Kids Collection".
- Scenario — Navigate to previous slide via arrow:
  - **GIVEN** the user is viewing the second slide
  - **WHEN** the user clicks the Previous arrow button
  - **THEN** the carousel transitions back to the first slide.
- Scenario — Navigate to specific slide via dot:
  - **GIVEN** the user is viewing any slide
  - **WHEN** the user clicks a pagination dot
  - **THEN** the carousel transitions to the corresponding slide.
- Scenario — Auto-advance slides:
  - **GIVEN** the user is not hovering over the carousel
  - **WHEN** the interval elapses
  - **THEN** the carousel automatically advances to the next slide.
- Scenario — Pause auto-advance on hover:
  - **GIVEN** the carousel is auto-advancing
  - **WHEN** the user hovers over the dots area
  - **THEN** the auto-advance pauses until the user moves the mouse away.
- Scenario — Wrap around from last to first:
  - **GIVEN** the user is viewing the last slide
  - **WHEN** the user clicks Next
  - **THEN** the carousel wraps around and displays the first slide.

### 3. Footer
- The footer SHALL display a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link:
  - **GIVEN** the user scrolls to the bottom of the page
  - **THEN** the footer displays a "Made with Component Dock" link pointing to https://www.componentdock.com/.

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/slidespot/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/slidespot/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/slidespot` ships on https://slidespot.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/slidespot/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/slidespot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/slidespot/public/CNAME` = `slidespot.free.componentdock.com`
  and the package `homepage` = `https://slidespot.free.componentdock.com`.
