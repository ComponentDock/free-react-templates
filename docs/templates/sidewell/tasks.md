# Sidewell — Implementation Tasks

Source design: **Bootstrap Sidebar 07** (`https://colorlib.com/wp/template/bootstrap-sidebar-07/`) → recreation name **sidewell**. Shipped at https://sidewell.free.componentdock.com.

Scope: Sidewell is a sidebar navigation template featuring a fixed blue sidebar with icon-labeled navigation, a sticky top bar with navigation links, and a clean white content area. Designed for dashboards, portfolios, and documentation sites.

## Component breakdown

Render order as composed in `apps/sidewell/src/App.tsx`:

### 1. Sidebar
- The sidebar SHALL display a logo ("M.") and five navigation items (Home, About, Blog, Services, Contacts) with lucide-react icons on a royal blue (#4361ee) background. The active item SHALL be visually highlighted.
- Scenario — Sidebar renders with logo and nav items:
  - **WHEN** the page loads
  - **THEN** the sidebar displays "M." logo and five nav links with icons
- Scenario — Active nav item is highlighted:
  - **WHEN** the page loads
  - **THEN** the Home link has bold/semibold font weight

### 2. TopBar
- A sticky top bar SHALL display navigation links (Home, About, Portfolio, Contact) right-aligned on a white background. On mobile, a blue hamburger button SHALL be shown on the left.
- Scenario — Top bar renders nav links:
  - **WHEN** the page loads
  - **THEN** four navigation links are visible in the top bar
- Scenario — Mobile hamburger in top bar:
  - **WHEN** the page loads on mobile
  - **THEN** a blue circular hamburger button is visible in the top bar

### 3. MainContent
- The main content area SHALL display a "Sidebar #07" heading and two paragraphs of body text on a white background.
- Scenario — Heading and body text:
  - **WHEN** the page loads
  - **THEN** "Sidebar #07" heading and at least two paragraphs of text are visible

### 4. Footer
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Component Dock link in footer:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to componentdock.com labeled "Component Dock" with target="_blank"

### Cross-cutting requirements

- **Mobile Sidebar Toggle** — The sidebar SHALL be hidden on mobile (below lg breakpoint) and slide in from the left when the hamburger button is tapped. An overlay SHALL appear behind the sidebar and tapping it SHALL close the sidebar.
  - Scenario — Open sidebar on mobile: **WHEN** the user taps the hamburger button; **THEN** the sidebar slides in and an overlay appears
  - Scenario — Close sidebar via overlay: **WHEN** the sidebar is open and the user taps the overlay; **THEN** the sidebar closes and the overlay disappears
- **Design Tokens** — The template SHALL use Poppins font (Google Fonts), royal blue (#4361ee) brand color, white page background, and #212529 heading text.
  - Scenario — Brand color applied: **WHEN** the page loads; **THEN** the sidebar background is blue and the page background is white
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sidewell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sidewell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sidewell` ships on https://sidewell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sidewell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sidewell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidewell/public/CNAME` = `sidewell.free.componentdock.com`
  and the package `homepage` = `https://sidewell.free.componentdock.com`.
