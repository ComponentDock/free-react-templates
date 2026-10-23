# Editorial — Implementation Tasks

Source design: **Megazine** (`https://colorlib.com/wp/template/megazine/`) → recreation name **editorial**. Shipped at https://editorial.free.componentdock.com.

Scope: Editorial is a magazine and blog template with a fixed sidebar navigation, a full-viewport hero slider, an asymmetric post grid and pagination. It recreates the ColorLib **Megazine** design (https://colorlib.com/wp/template/megazine/).

## Component breakdown

Render order as composed in `apps/editorial/src/App.tsx`:

### 1. Sidebar
- The template SHALL render a fixed left sidebar containing a logo ("Editorial"), seven navigation links (Home, Style, Fashion, Travel, Sports, Video, Archives), and a footer with copyright text linking to Component Dock and social media icons.
- Scenario — Logo renders:
  - **WHEN** the page loads
  - **THEN** the text "Editorial" is displayed in the sidebar
- Scenario — Navigation links render:
  - **WHEN** the page loads
  - **THEN** seven navigation links are displayed: Home, Style, Fashion, Travel, Sports, Video, Archives
- Scenario — Active state on first link:
  - **WHEN** the page loads
  - **THEN** the "Home" link has active styling (font-semibold)
- Scenario — Social icons render:
  - **WHEN** the page loads
  - **THEN** four social media links are displayed (Facebook, Twitter, Instagram, LinkedIn)
- Scenario — Footer Component Dock link:
  - **WHEN** the page loads
  - **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is rendered in the sidebar footer

### 2. HeroSlider
- The template SHALL render a full-viewport hero section that auto-advances through slides every 5 seconds, with dot indicators for manual navigation.
- Scenario — First slide renders by default:
  - **WHEN** the page loads
  - **THEN** the first slide's tag, heading, and description are displayed
- Scenario — Auto-advance:
  - **WHEN** 5 seconds elapse
  - **THEN** the next slide is displayed
- Scenario — Manual navigation via indicators:
  - **WHEN** a user clicks a slide indicator dot
  - **THEN** the corresponding slide is displayed
- Scenario — Wrap-around:
  - **WHEN** the last slide is displayed and 5 seconds elapse
  - **THEN** the first slide is displayed again
- Scenario — Correct number of indicators:
  - **WHEN** the slider renders with N slides
  - **THEN** N indicator dots are displayed

### 3. BlogGrid
- The template SHALL render an asymmetric grid of blog post cards, each with a background image, dark overlay, category tag, title, and description.
- Scenario — All posts render:
  - **WHEN** the page loads
  - **THEN** all 13 blog post cards are displayed
- Scenario — Card content:
  - **WHEN** a blog card renders
  - **THEN** it displays a tag, title, and description
- Scenario — Card sizing:
  - **WHEN** a card has size "tall" or "large"
  - **THEN** it renders with height class h-80
  - **WHEN** a card has size "small" or "wide"
  - **THEN** it renders with height class h-48

### 4. Pagination
- The template SHALL render a pagination component with numbered page buttons and previous/next arrows.
- Scenario — Page numbers render:
  - **WHEN** pagination renders with 4 pages
  - **THEN** buttons for pages 1 through 4 are displayed
- Scenario — Current page marked:
  - **WHEN** current page is 2
  - **THEN** the page 2 button has aria-current="page"
- Scenario — Previous disabled on first page:
  - **WHEN** current page is 1
  - **THEN** the previous button is disabled
- Scenario — Next disabled on last page:
  - **WHEN** current page equals total pages
  - **THEN** the next button is disabled

### Cross-cutting requirements

- **Design tokens** — The template SHALL use the following design tokens from the original ColorLib Megazine template: - Brand color: #F75940 (coral/red-orange) - Font: Montserrat (weights 300, 400, 500, 600) - Overlay: rgba(0,0,0,0.45) - Background: white (#fff)
  - Scenario — Brand color applied: **WHEN** the page renders; **THEN** the brand color #F75940 is used for active indicators and accent elements
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/editorial/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/editorial/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/editorial` ships on https://editorial.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/editorial/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/editorial/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/editorial/public/CNAME` = `editorial.free.componentdock.com`
  and the package `homepage` = `https://editorial.free.componentdock.com`.
