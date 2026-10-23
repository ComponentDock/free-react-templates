# Sidebarvault — Implementation Tasks

Source design: **Colorlib Sidebar V01** (`https://colorlib.com/wp/template/colorlib-sidebar-v01/`) → recreation name **sidebarvault**. Shipped at https://sidebarvault.free.componentdock.com.

Scope: A social-media-style sidebar navigation template with a profile panel, stats, icon-based nav, and a blog post grid. Recreation of ColorLib Sidebar V01. Source: https://colorlib.com/wp/template/colorlib-sidebar-v01/ Preview: https://preview.colorlib.com/theme/colorlib-sidebar-v01/

## Component breakdown

Render order as composed in `apps/sidebarvault/src/App.tsx`:

### 1. Sidebar
- The sidebar SHALL display a circular profile photo, user name, and location.
- Scenario — Profile is visible on load:
  - **WHEN** the page loads
  - **THEN** a circular profile photo, user name "Alex Morgan", and location "San Francisco, CA" are visible in the sidebar

### 2. PostCard
- The main content area SHALL display blog post cards in a responsive 2-column grid.
- Scenario — Post cards are rendered:
  - **WHEN** the page loads
  - **THEN** 8 post cards are displayed in a grid layout
- Scenario — Each card shows title, date, and thumbnail:
  - **WHEN** the page loads
  - **THEN** each post card displays a title, "Posted: Dec 17, 2019", and a thumbnail image

### Cross-cutting requirements

- **Stats display** — The sidebar SHALL display post count, follower count, and following count.
  - Scenario — Stats are shown: **WHEN** the page loads; **THEN** the stats row shows "892 Posts", "22.5k Followers", and "150 Following"
- **Navigation menu** — The sidebar SHALL provide an icon-based navigation menu with Feed, Explore, Notifications, Direct, Stats, and Sign out links.
  - Scenario — All nav items are rendered: **WHEN** the page loads; **THEN** the sidebar contains navigation links for Feed, Explore, Notifications, Direct, Stats, and Sign out
  - Scenario — Feed is active by default: **WHEN** the page loads; **THEN** the Feed link is highlighted with an accent left border
  - Scenario — Clicking a nav item changes active state: **WHEN** the user clicks the Explore link; **THEN** the Explore link becomes the active nav item with accent border
- **Mobile sidebar toggle** — The sidebar SHALL be hidden on mobile and toggleable via a hamburger button.
  - Scenario — Sidebar hidden on mobile: **WHEN** the page loads on mobile viewport; **THEN** the sidebar is translated off-screen
  - Scenario — Hamburger opens sidebar: **WHEN** the user taps the hamburger button; **THEN** the sidebar slides into view
  - Scenario — Close button closes sidebar: **WHEN** the sidebar is open and the user taps the close button; **THEN** the sidebar slides out of view
  - Scenario — Overlay closes sidebar: **WHEN** the sidebar is open and the user taps the overlay; **THEN** the sidebar slides out of view
- **Footer** — The sidebar footer SHALL link to Component Dock.
  - Scenario — Component Dock link is present: **WHEN** the page loads; **THEN** the sidebar footer contains a link to "https://www.componentdock.com/" with text "Component Dock"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/sidebarvault/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/sidebarvault/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/sidebarvault` ships on https://sidebarvault.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/sidebarvault/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sidebarvault/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sidebarvault/public/CNAME` = `sidebarvault.free.componentdock.com`
  and the package `homepage` = `https://sidebarvault.free.componentdock.com`.
