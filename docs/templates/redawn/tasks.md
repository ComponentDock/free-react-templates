# Redawn — Implementation Tasks

Source design: **Rea** (`https://colorlib.com/wp/template/rea/`) → recreation name **redawn**. Shipped at https://redawn.free.componentdock.com.

Scope: A creative portfolio and blog grid layout with animated headline, masonry-style image grid, hover overlays, and a full-screen navigation overlay. Recreation of the ColorLib "Rea" template.

## Component breakdown

Render order as composed in `apps/redawn/src/App.tsx`:

### 1. NavOverlay
- The page SHALL display a full-screen navigation overlay with menu links, social icons, and a search field.
- Scenario — Overlay menu navigation:
  - **GIVEN** the full-screen overlay is open
  - **WHEN** the user clicks a nav link
  - **THEN** the overlay should close

### 2. Header
- The page SHALL display a header with a logo and an animated headline that cycles through "web resources", "psd files", and "mockups".
- Scenario — Page loads with header and animated headline:
  - **WHEN** the user visits the Redawn homepage
  - **THEN** a logo and animated headline should be visible in the header
  - **AND** the headline cycles through "web resources", "psd files", "mockups"

### 3. HamburgerToggle
- The page SHALL display a 4-line hamburger toggle that animates to an X when the menu is open.
- Scenario — Hamburger menu toggle:
  - **WHEN** the user clicks the hamburger menu icon
  - **THEN** a full-screen navigation overlay should appear

### 4. BlogGrid
- The page SHALL display a masonry-style grid of portfolio cards with images, category tags, titles, and like buttons.
- Scenario — Grid card hover effect:
  - **GIVEN** a portfolio card is visible in the grid
  - **WHEN** the user hovers over the card image
  - **THEN** the image should swap to show the hover/alternate image
- Scenario — Like button interaction:
  - **GIVEN** a portfolio card is visible
  - **WHEN** the user clicks the heart/like button
  - **THEN** the like count should increment by 1

### 5. LoadMore
- The page SHALL display a load more arrow button.
- Scenario — Load more items:
  - **WHEN** the user clicks the load more arrow
  - **THEN** additional portfolio cards should be loaded into the grid

### 6. Footer
- The page SHALL display a 3-column footer with categories, page links, social icons, and a Component Dock attribution link.
- Scenario — Footer content:
  - **WHEN** the user scrolls to the bottom of the page
  - **THEN** a footer should be visible with three columns: categories, page links, social icons
  - **AND** a copyright line with "Component Dock" link to https://www.componentdock.com/

### Cross-cutting requirements

- **Mobile responsiveness** — The page SHALL be responsive and stack grid items in a single column on mobile.
  - Scenario — Mobile responsiveness: **WHEN** the user views the page on a mobile device; **THEN** the grid should stack items in a single column; **AND** the hamburger menu should remain accessible
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/redawn/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/redawn/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Font `Lato` loaded via Google Fonts; [ ] Brand color `#f271ab` used for CTAs, hover states; [ ] Animated headline cycles through 3 phrases; [ ] 4-line hamburger toggle animates to X when open; [ ] Full-screen overlay nav with search and social icons; [ ] Masonry-style grid with mixed card widths; [ ] Image hover swap effect on grid cards; [ ] Heart/like button with count; [ ] Category tags on each card; [ ] Load more arrow; [ ] 3-column footer with categories, links, social; [ ] Footer links to componentdock.com; [ ] No ColorLib references in app code; [ ] CNAME: `redawn.free.componentdock.com`; [ ] homepage in package.json: `https://redawn.free.componentdock.com`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/redawn` ships on https://redawn.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/redawn/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/redawn/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/redawn/public/CNAME` = `redawn.free.componentdock.com`
  and the package `homepage` = `https://redawn.free.componentdock.com`.
