# Pings — Implementation Tasks

Source design: **Dropdown 15** (`https://colorlib.com/wp/template/dropdown-15/`) → recreation name **pings**. Shipped at https://pings.free.componentdock.com.

Scope: Pings is a single-page UI-component demo template showcasing a notifications dropdown menu. A bell icon with a badge count triggers a dropdown panel listing notification items with avatars and text descriptions, some marked as unread. The design uses Bootstrap-style dropdown mechanics with smooth opacity/margin transitions.

## Component breakdown

Render order as composed in `apps/pings/src/App.tsx`:

### 1. NotificationsDropdown
- Users SHALL be able to open and close the notifications dropdown by clicking the bell icon.
- Scenario — Click opens dropdown:
  - **WHEN** I click the bell icon
  - **THEN** the notifications panel is visible
  - **AND** the heading "Notifications" is shown
  - **AND** the "Mark all as read" link is shown
- Scenario — Click closes dropdown:
  - **GIVEN** the dropdown is open
  - **WHEN** I click the bell icon again
  - **THEN** the notifications panel is hidden

### 2. Footer
- Users SHALL see a page titled "Dropdown" with a "Pings" branded footer linking to Component Dock.
- Scenario — Heading is visible:
  - **WHEN** the page loads
  - **THEN** the heading "Dropdown" is visible
  - **AND** the footer shows "Pings"
  - **AND** the footer has a link to componentdock.com

### Cross-cutting requirements

- **Bell icon with badge count** — Users SHALL see a bell icon with a circular blue badge showing the notification count.
  - Scenario — Badge displays count: **WHEN** the page loads; **THEN** a bell icon is visible; **AND** a badge with the number "5" is displayed on the bell icon
- **Notification items displayed** — Users SHALL see a list of notification items with avatars, names, and descriptions.
  - Scenario — Five notifications shown: **WHEN** the dropdown is open; **THEN** five notification items are visible; **AND** each item has an avatar image; **AND** each item has a bold name and description text
- **Unread items highlighted** — Users SHALL see unread notification items with a distinct background color.
  - Scenario — Unread styling applied: **WHEN** the dropdown is open; **THEN** unread items have a light yellow background (#fffaef); **AND** read items have the default background
- **View All link** — Users SHALL see a "View All" link at the bottom of the notification list.
  - Scenario — View All visible: **WHEN** the dropdown is open; **THEN** a "View All" link is visible at the bottom of the list
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pings/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pings/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/pings` ships on https://pings.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pings/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pings/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pings/public/CNAME` = `pings.free.componentdock.com`
  and the package `homepage` = `https://pings.free.componentdock.com`.
