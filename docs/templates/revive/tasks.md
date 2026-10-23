# Revive — Implementation Tasks

Source design: **Rea** (`https://colorlib.com/wp/template/rea/`) → recreation name **revive**. Shipped at https://revive.free.componentdock.com.

Scope: A creative portfolio and blog template with a masonry grid layout, animated typing headline, and clean pink-accent aesthetic. Recreation of ColorLib's **Rea** template.

## Component breakdown

Render order as composed in `apps/revive/src/App.tsx`:

### 1. Header
- The template SHALL display a header with a logo and an animated typing headline.
- Scenario — Header renders with logo and animated headline:
  - **WHEN** the user loads the page
  - **THEN** the header displays a logo element
  - **AND** the headline shows "pixel precise" with an animated word cycling through "web resources", "psd files", "mockups"
  - **AND** the subline reads "to suit all your needs."

### 2. PortfolioGrid
- The template SHALL display portfolio items in a masonry grid layout with mixed column sizes.
- Scenario — Portfolio grid displays masonry layout:
  - **WHEN** the user views the portfolio section
  - **THEN** items are displayed in a masonry grid layout
  - **AND** items have varying widths (full, half, quarter)
- Scenario — Grid item hover reveals overlay and secondary image:
  - **WHEN** the user hovers over a grid item
  - **THEN** a semi-transparent dark overlay appears on the image
  - **AND** the hover image fades in
  - **AND** view/download count badges become visible

### 3. LoadMore
- The template SHALL display a load-more trigger at the bottom of the grid.
- Scenario — Load more button visible:
  - **WHEN** the user scrolls to the bottom of the grid
  - **THEN** a load-more arrow button is visible

### 4. Footer
- The template SHALL display a footer with categories, navigation, social icons, and a Component Dock attribution.
- Scenario — Footer displays three columns:
  - **WHEN** the user reaches the footer
  - **THEN** categories are listed (Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video)
  - **AND** navigation links are shown (About, Features, Contact)
  - **AND** social icons appear with copyright text
  - **AND** the footer links to Component Dock (https://www.componentdock.com/)
- Scenario — Footer social icons are interactive:
  - **WHEN** the user hovers over a social icon
  - **THEN** the icon color transitions to the brand pink

### Cross-cutting requirements

- **Hamburger menu opens full-screen overlay** — The template SHALL provide a hamburger toggle that opens a full-screen navigation overlay.
  - Scenario — Hamburger menu opens full-screen overlay: **WHEN** the user clicks the hamburger toggle icon; **THEN** a full-screen white overlay appears; **AND** navigation links (Home, About, Contact, Features) are displayed centered; **AND** social media icons (Twitter, Dribbble, Facebook, RSS) appear below the nav; **AND** a search input is available
  - Scenario — Hamburger menu closes: **WHEN** the menu overlay is open and the user clicks the close button; **THEN** the overlay disappears
- **Like heart interaction** — The template SHALL provide a heart icon interaction that increments a like count.
  - Scenario — Like heart interaction: **WHEN** the user clicks the heart icon on a grid item; **THEN** the like count increments; **AND** the heart fills with the brand pink color
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/revive/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/revive/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/revive` ships on https://revive.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/revive/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/revive/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/revive/public/CNAME` = `revive.free.componentdock.com`
  and the package `homepage` = `https://revive.free.componentdock.com`.
