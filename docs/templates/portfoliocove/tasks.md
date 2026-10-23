# Portfoliocove — Implementation Tasks

Source design: **Po Portfolio** (`https://colorlib.com/wp/template/po-portfolio/`) → recreation name **portfoliocove**. Shipped at https://portfoliocove.free.componentdock.com.

Scope: A Minimalist Portfolio template with breadcrumb navigation, portfolio grid and document title sections. PortfolioCove is a minimalist portfolio template recreation of ColorLib's "Po Portfolio" template.

## Component breakdown

Render order as composed in `apps/portfoliocove/src/App.tsx`:

### 1. Sidebar
- The sidebar is fixed to the left side of the viewport with brand logo and navigation toggle.
- Scenario — Sidebar displays brand logo:
  - **WHEN** the page loads
  - **THEN** the sidebar shows "Plinth." as the brand text
  - **AND** the brand text is bold and dark colored
- Scenario — Sidebar displays hamburger menu:
  - **WHEN** the page loads
  - **THEN** the sidebar shows a hamburger menu icon button
  - **AND** the button has aria-label "Toggle menu"
  - **AND** clicking the button toggles the navigation panel open/closed
- Scenario — Sidebar navigation links:
  - **WHEN** the hamburger menu is clicked open
  - **THEN** navigation links are displayed (Home, Portfolio, About, Contact)
  - **AND** each link is clickable
- Scenario — Fixed sidebar layout:
  - **WHEN** the page loads
  - **THEN** the sidebar is fixed to the left
  - **AND** scrolling does not move the sidebar
  - **AND** the main content area fills the remaining width

### 2. Breadcrumb
- A breadcrumb shows the current page location at the top of the main content area.
- Scenario — Breadcrumb shows current location:
  - **WHEN** the page loads
  - **THEN** a breadcrumb shows "Home / Portfolio"
  - **AND** "Home" is a clickable link with href "/"
  - **AND** "Portfolio" is plain text (current page)

### 3. PortfolioGrid
- A responsive grid of portfolio items displays images in a clean layout.
- Scenario — Portfolio grid displays items:
  - **WHEN** the page loads
  - **THEN** a grid of 12 portfolio items is visible
  - **AND** each item shows an image on a light gray background
  - **AND** each image has descriptive alt text
- Scenario — Portfolio grid is responsive:
  - **WHEN** the viewport is desktop-width (>= 1024px)
  - **THEN** the grid shows 4 columns
  - **WHEN** the viewport is tablet-width (>= 640px)
  - **THEN** the grid shows 2 columns
  - **WHEN** the viewport is mobile-width (< 640px)
  - **THEN** the grid shows 1 column
- Scenario — Portfolio items are interactive:
  - **WHEN** the page loads
  - **THEN** each portfolio item is a clickable button

### 4. Footer
- The footer displays copyright and a Component Dock attribution link.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the page loads
  - **THEN** the footer is present with contentinfo role
  - **AND** it contains a link to "https://www.componentdock.com/" labeled "Component Dock"
  - **AND** the link opens in a new tab
- Scenario — Footer shows copyright:
  - **WHEN** the page loads
  - **THEN** the footer displays copyright text with "Plinth"

### Cross-cutting requirements

- **Document Title** — The page sets a descriptive title for the browser tab.
  - Scenario — Title is set on mount: **WHEN** the app renders; **THEN** the document title is "Plinth — Minimalist Portfolio Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/portfoliocove/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/portfoliocove/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/portfoliocove` ships on https://portfoliocove.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/portfoliocove/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/portfoliocove/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/portfoliocove/public/CNAME` = `portfoliocove.free.componentdock.com`
  and the package `homepage` = `https://portfoliocove.free.componentdock.com`.
