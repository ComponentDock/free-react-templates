# Ochre — Implementation Tasks

Source design: **Lifeleck** (`https://colorlib.com/wp/template/lifeleck/`) → recreation name **ochre**. Shipped at https://ochre.free.componentdock.com.

Scope: Ochre is a single-page lifestyle/fashion blog website template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/ochre/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main · Mobile

### 2. Banner
- The system SHALL render three banner image posts, each with an overlapping white card containing a category, a title, and a date.
- Scenario — Banner content:
  - **GIVEN** the page is rendered
  - **WHEN** the banner section is displayed
  - **THEN** it SHALL show three banner posts
  - **AND** each post SHALL show a category line (e.g. "Fashion / Life style")
  - **AND** each post SHALL show a title and a "Posted on" date line

### 3. BlogGrid
- The system SHALL render a two-column grid of blog posts, each with an image and an overlapping white card with a category, a title, and a date.
- Scenario — Post entries:
  - **GIVEN** the page is rendered
  - **WHEN** the blog grid is displayed
  - **THEN** it SHALL show eight posts in a two-column grid
  - **AND** each post SHALL show a category, a title, and a date

### 4. LoadMore
- The system SHALL render a centered "Load More" button and plain-text pagination below the grid.
- Scenario — More content controls:
  - **GIVEN** the blog grid is displayed
  - **WHEN** the user scrolls past the grid
  - **THEN** a "Load More" button SHALL be visible
  - **AND** pagination links (Previous, 1, 2, 3, Next) SHALL be visible with

### 5. Pagination
- The system SHALL render a centered "Load More" button and plain-text pagination below the grid.
- Scenario — More content controls:
  - **GIVEN** the blog grid is displayed
  - **WHEN** the user scrolls past the grid
  - **THEN** a "Load More" button SHALL be visible
  - **AND** pagination links (Previous, 1, 2, 3, Next) SHALL be visible with

### 6. Sidebar
- The system SHALL render a sidebar with a search form, a Categories list, a Popular Feeds list, and a Subscribe form.
- Scenario — Sidebar widgets:
  - **GIVEN** the page is rendered
  - **WHEN** the sidebar is displayed
  - **THEN** it SHALL show a search input with a search button
  - **AND** it SHALL show a "Categories" heading with six category links
  - **AND** it SHALL show a "Popular Feeds" heading with three feed items
  - **AND** it SHALL show a "Subscribe" heading with an email input and a

### 7. SocialConnect
- The system SHALL render a full-width strip of six image tiles with Instagram-style hover overlays.
- Scenario — Social tiles:
  - **GIVEN** the page is rendered
  - **WHEN** the social connect section is displayed
  - **THEN** it SHALL show six square image tiles
  - **AND** each tile SHALL expose an accessible Instagram label

### 8. Footer
- The system SHALL render a light-gray footer with four widget columns and a copyright line.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show widget headings About Us, Contact Info, Important
  - **AND** it SHALL show a copyright line with the site name

### Cross-cutting requirements

- **Header with logo, navigation, search and social icons** — The system SHALL render a white header with the site name, a centered link list, a search icon button, and social icon links.
  - Scenario — Header content: **GIVEN** the Ochre page is rendered; **WHEN** the page loads; **THEN** the header SHALL show the site name "Ochre"; **AND** it SHALL show links Home, Archive, Category, and Contact; **AND** it SHALL show a search icon button with an accessible label; **AND** it SHALL show social icon links (GitHub, X, LinkedIn)
  - Scenario — Dark mode toggle: **GIVEN** the page is rendered; **WHEN** the user presses the dark-mode toggle (repo-standard chrome); **THEN** the `.dark` class SHALL be toggled on the document root element; **AND** the toggle SHALL reflect the current mode
- **Page composition** — The system SHALL compose all sections in a single page with a main landmark and a document title.
  - Scenario — Full page render: **GIVEN** the Ochre app is rendered; **WHEN** the page loads; **THEN** the page SHALL compose the header, banner, blog grid with; **AND** the document title SHALL be "Ochre — Blog Template"
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/ochre/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/ochre/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] `apps/ochre` exists with package name `@free-react-templates/ochre`; [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md); [ ] Fonts Lora (400/700) + Cardo via Google Fonts `<link>` in index.html; [ ] Brand orange `#fc4600`, dark `#2a2a2a`, footer `#f7f7f7`, gray; [ ] Section order matches the reference 1:1 (header → banner (3) → blog; [ ] Overlapping white card pattern on banner and post cards; [ ] Per-app gate passes: `scripts/verify-app.sh ochre` (typecheck + lint +; [ ] `npm run spec:validate` passes for this spec; [ ] TEMPLATES.md: mark BOTH Lifeleck copies (lines 269 and 439); [ ] `npm run readme:status` regenerates README Templates status table; [ ] PR description states: source template (ColorLib Lifeleck), preview; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/ochre` ships on https://ochre.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/ochre/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/ochre/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ochre/public/CNAME` = `ochre.free.componentdock.com`
  and the package `homepage` = `https://ochre.free.componentdock.com`.
