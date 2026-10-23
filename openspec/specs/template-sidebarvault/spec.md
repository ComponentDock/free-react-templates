# Template: SidebarVault (ColorLib Sidebar V01)

## Purpose

A social-media-style sidebar navigation template with a profile panel, stats, icon-based nav, and a blog post grid. Recreation of ColorLib Sidebar V01.

Source: https://colorlib.com/wp/template/colorlib-sidebar-v01/
Preview: https://preview.colorlib.com/theme/colorlib-sidebar-v01/

## Requirements

### Requirement: Sidebar profile section

The sidebar SHALL display a circular profile photo, user name, and location.

#### Scenario: Profile is visible on load

- **WHEN** the page loads
- **THEN** a circular profile photo, user name "Alex Morgan", and location "San Francisco, CA" are visible in the sidebar

### Requirement: Stats display

The sidebar SHALL display post count, follower count, and following count.

#### Scenario: Stats are shown

- **WHEN** the page loads
- **THEN** the stats row shows "892 Posts", "22.5k Followers", and "150 Following"

### Requirement: Navigation menu

The sidebar SHALL provide an icon-based navigation menu with Feed, Explore, Notifications, Direct, Stats, and Sign out links.

#### Scenario: All nav items are rendered

- **WHEN** the page loads
- **THEN** the sidebar contains navigation links for Feed, Explore, Notifications, Direct, Stats, and Sign out

#### Scenario: Feed is active by default

- **WHEN** the page loads
- **THEN** the Feed link is highlighted with an accent left border

#### Scenario: Clicking a nav item changes active state

- **WHEN** the user clicks the Explore link
- **THEN** the Explore link becomes the active nav item with accent border

### Requirement: Post grid

The main content area SHALL display blog post cards in a responsive 2-column grid.

#### Scenario: Post cards are rendered

- **WHEN** the page loads
- **THEN** 8 post cards are displayed in a grid layout

#### Scenario: Each card shows title, date, and thumbnail

- **WHEN** the page loads
- **THEN** each post card displays a title, "Posted: Dec 17, 2019", and a thumbnail image

### Requirement: Mobile sidebar toggle

The sidebar SHALL be hidden on mobile and toggleable via a hamburger button.

#### Scenario: Sidebar hidden on mobile

- **WHEN** the page loads on mobile viewport
- **THEN** the sidebar is translated off-screen

#### Scenario: Hamburger opens sidebar

- **WHEN** the user taps the hamburger button
- **THEN** the sidebar slides into view

#### Scenario: Close button closes sidebar

- **WHEN** the sidebar is open and the user taps the close button
- **THEN** the sidebar slides out of view

#### Scenario: Overlay closes sidebar

- **WHEN** the sidebar is open and the user taps the overlay
- **THEN** the sidebar slides out of view

### Requirement: Footer

The sidebar footer SHALL link to Component Dock.

#### Scenario: Component Dock link is present

- **WHEN** the page loads
- **THEN** the sidebar footer contains a link to "https://www.componentdock.com/" with text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sidebarvault/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sidebarvault/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
