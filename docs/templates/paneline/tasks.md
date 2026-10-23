# Paneline — Implementation Tasks

Source design: **Bootstrap Sidebar 08** (`https://colorlib.com/wp/template/bootstrap-sidebar-08/`) → recreation name **paneline**. Shipped at https://paneline.free.componentdock.com.

Scope: Paneline is a sidebar navigation template featuring a right-aligned sidebar with collapsible product categories, a tag cloud, and a newsletter subscription form. The sidebar has a clean white design with pink accent color, designed for product catalogs and e-commerce dashboards.

## Component breakdown

Render order as composed in `apps/paneline/src/App.tsx`:

### 1. MainContent
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders Component Dock link:
  - **WHEN** the footer is visible
  - **THEN** it contains a link to https://www.componentdock.com/ labeled "Component Dock"

### 2. Sidebar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle sidebar · Categories · Tag Cloud · Newsletter

### 3. Footer
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders Component Dock link:
  - **WHEN** the footer is visible
  - **THEN** it contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Cross-cutting requirements

- **Two-Column Layout** — The page SHALL display a two-column flex layout with main content on the left and a 270px sidebar on the right. The sidebar SHALL have a white background with a left border of 1px solid rgba(0,0,0,0.05).
  - Scenario — Sidebar renders on the right side: **WHEN** the page loads on desktop; **THEN** the sidebar is visible on the right at 270px width
  - Scenario — Main content fills remaining space: **WHEN** the page loads; **THEN** the main content area fills the remaining horizontal space
- **Collapsible Category Accordion** — The sidebar SHALL contain 4 collapsible category groups: Mens Shoes, Womens Shoes, Accessories, and Clothes. Each category SHALL have sub-items with chevron-right icons. Clicking a category heading SHALL expand or collapse its sub-items.
  - Scenario — Categories render with headings: **WHEN** the sidebar is visible; **THEN** all 4 category headings are shown
  - Scenario — Expand category on click: **WHEN** a user clicks a category heading; **THEN** its sub-items expand and become visible
  - Scenario — Collapse category on second click: **WHEN** a user clicks an expanded category heading; **THEN** its sub-items collapse and become hidden
- **Tag Cloud** — The sidebar SHALL display a tag cloud section below the categories with 8 tags: dish, menu, food, sweet, tasty, delicious, desserts, drinks. Tags SHALL be uppercase with a 1px solid #ccc border and 4px border radius.
  - Scenario — Tag cloud renders all tags: **WHEN** the sidebar is visible; **THEN** the tag cloud section shows all 8 tags in uppercase
- **Newsletter Form** — The sidebar SHALL include a newsletter subscription form below the tag cloud with a send icon and an email input field with placeholder "Enter Email Address".
  - Scenario — Newsletter form renders: **WHEN** the sidebar is visible; **THEN** the newsletter form is shown with a send icon and email input
- **Mobile Responsive** — On mobile viewports (< 768px), the sidebar SHALL collapse and a toggle button SHALL appear. Tapping the toggle SHALL slide the sidebar in from the right. An overlay SHALL appear behind the sidebar and tapping it SHALL close the sidebar.
  - Scenario — Sidebar collapses on mobile: **WHEN** viewport is below 768px; **THEN** the sidebar is hidden and a toggle button is visible
  - Scenario — Toggle opens sidebar on mobile: **WHEN** a user taps the toggle button; **THEN** the sidebar slides in from the right
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/paneline/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/paneline/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/paneline` ships on https://paneline.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/paneline/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/paneline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/paneline/public/CNAME` = `paneline.free.componentdock.com`
  and the package `homepage` = `https://paneline.free.componentdock.com`.
