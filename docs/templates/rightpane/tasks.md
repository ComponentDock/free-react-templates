# Rightpane — Implementation Tasks

Source design: **Bootstrap Sidebar 10** (`https://colorlib.com/wp/template/bootstrap-sidebar-10/`) → recreation name **rightpane**. Shipped at https://rightpane.free.componentdock.com.

Scope: A Sidebar Navigation template with brand header, navigation items, mountain landscape and main sections. Recreation of **ColorLib Bootstrap Sidebar 10** (`bootstrap-sidebar-10`) as a right-side sidebar navigation template with a mountain landscape background, brand header, nav links, newsletter signup, and footer.

## Component breakdown

Render order as composed in `apps/rightpane/src/App.tsx`:

### 1. MainContent
- The main content area SHALL display a heading "Sidebar #04" and body text paragraphs on a white background.
- Scenario — Content display:
  - **WHEN** the sidebar is visible
  - **THEN** a heading "Sidebar #04" is displayed
  - **AND** body text paragraphs are shown below the heading
  - **AND** the content area has a white background

### 2. Sidebar
- The template SHALL display a fixed right-side sidebar at approximately 300px width spanning full viewport height.
- Scenario — Sidebar visible on right side:
  - **WHEN** the user loads the Rightpane template
  - **THEN** the right sidebar is visible on the right side of the viewport
  - **AND** the main content area occupies the remaining space on the left

### Cross-cutting requirements

- **Brand header** — The sidebar SHALL display a brand name "Kenitic" in bold white text with a "Blog Agency" subtitle.
  - Scenario — Brand header display: **WHEN** the sidebar is visible; **THEN** "Kenitic" is displayed in bold white text at the top; **AND** "Blog Agency" is displayed below the brand name
- **Navigation items** — The sidebar SHALL display 5 navigation items (Home, About, Blog, Services, Contacts) each with a lucide-react icon and white text label.
  - Scenario — Navigation items rendered: **WHEN** the sidebar is visible; **THEN** the following navigation items are displayed in order: Home, About, Blog, Services, Contacts; **AND** each item shows an icon on the left and a text label on the right; **AND** all items have white text
- **Newsletter section** — The sidebar SHALL include a newsletter subscription section with a heading and email input field.
  - Scenario — Newsletter form: **WHEN** the sidebar is visible; **THEN** a "Subscribe for newsletter" heading is displayed below the navigation; **AND** an email input field with placeholder "Enter Email Address" is shown; **AND** a subscribe button is displayed
- **Footer with Component Dock link** — The sidebar footer SHALL display copyright text and a link to https://www.componentdock.com/.
  - Scenario — Footer content: **WHEN** the sidebar is visible; **THEN** a copyright line "Copyright ©2019 All rights reserved" is displayed; **AND** a "More templates at Component Dock" link points to https://www.componentdock.com/
- **Toggle button** — The main content area SHALL include a blue toggle button that collapses or expands the sidebar.
  - Scenario — Toggle sidebar visibility: **WHEN** the user clicks the toggle button; **THEN** the sidebar collapses or expands; **AND** the main content area adjusts its width accordingly
- **Mountain landscape background** — The sidebar SHALL display a mountain landscape background image with a blue gradient overlay for text readability.
  - Scenario — Background styling: **WHEN** the sidebar is visible; **THEN** a mountain landscape background is visible behind a blue gradient overlay; **AND** all text on the sidebar is readable against the background
- **Responsive layout** — The sidebar SHALL be responsive — on mobile viewports it may be hidden by default with the toggle button accessible to reveal it.
  - Scenario — Mobile viewport: **WHEN** the user is on a mobile viewport; **THEN** the sidebar may be hidden by default; **AND** the toggle button is accessible to reveal the sidebar
- **Accessibility** — The sidebar navigation SHALL be accessible with proper ARIA labels and semantic HTML.
  - Scenario — Accessible navigation: **WHEN** the sidebar renders; **THEN** the navigation has an appropriate aria-label; **AND** icons have aria-hidden="true"; **AND** form inputs have associated labels
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/rightpane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/rightpane/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/rightpane` ships on https://rightpane.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/rightpane/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/rightpane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rightpane/public/CNAME` = `rightpane.free.componentdock.com`
  and the package `homepage` = `https://rightpane.free.componentdock.com`.
