# Template: SidePanel

## Purpose

Recreation of ColorLib "Bootstrap Sidebar 01" (https://colorlib.com/wp/template/bootstrap-sidebar-01/).
A sidebar navigation template with a dark fixed sidebar, profile section, expandable nav, and a light main content area.

## Requirements

### Requirement: Sidebar Navigation

The template SHALL display a fixed dark sidebar on the left with navigation links.

#### Scenario: Sidebar visibility on desktop

- **WHEN** the page loads on a desktop viewport (>= 1024px)
- **THEN** the sidebar is always visible with a dark background

#### Scenario: Sidebar toggle on mobile

- **WHEN** the page loads on a mobile viewport (< 1024px)
- **THEN** the sidebar is hidden by default
- **AND** a hamburger button is visible in the top-left corner
- **WHEN** the user taps the hamburger button
- **THEN** the sidebar slides in from the left
- **AND** an overlay covers the main content

#### Scenario: Overlay dismiss

- **WHEN** the sidebar is open on mobile
- **AND** the user taps the overlay
- **THEN** the sidebar slides out

### Requirement: Profile Section

The sidebar SHALL display a circular profile image at the top.

#### Scenario: Profile image renders

- **WHEN** the page loads
- **THEN** a circular profile image is displayed in the sidebar header

### Requirement: Expandable Navigation Items

Navigation items with submenus SHALL expand/collapse on click.

#### Scenario: Dropdown expansion

- **WHEN** the user clicks a nav item with children (e.g. "Pages")
- **THEN** the submenu items appear below the parent
- **AND** the parent item shows a down-arrow icon

#### Scenario: Dropdown collapse

- **WHEN** the user clicks an expanded parent item again
- **THEN** the submenu items are hidden

### Requirement: Active State Highlighting

The currently active nav item SHALL be highlighted with an accent color.

#### Scenario: Active item styling

- **WHEN** the page loads
- **THEN** the "Home" link in the sidebar has an orange/amber left border and text color

### Requirement: Top Navigation Bar

The main content area SHALL display a top bar with a hamburger icon and horizontal nav links.

#### Scenario: Topbar on desktop

- **WHEN** the page loads on desktop
- **THEN** horizontal navigation links (Home, About, Portfolio, Contact) are visible in the top bar

#### Scenario: Topbar on mobile

- **WHEN** the page loads on mobile
- **THEN** a hamburger menu button is visible in the top bar

### Requirement: Main Content Area

The main content area SHALL display a heading and descriptive paragraphs.

#### Scenario: Page heading

- **WHEN** the page loads
- **THEN** a heading "SidePanel" is displayed in the main content area

### Requirement: Footer Attribution

The sidebar footer SHALL link to Component Dock.

#### Scenario: Component Dock link

- **WHEN** the page loads
- **THEN** the sidebar footer contains a link to https://www.componentdock.com/ labeled "Component Dock"
- **AND** the link opens in a new tab

### Requirement: Responsive Layout

The template SHALL be fully responsive with proper sidebar offset on desktop.

#### Scenario: Desktop layout

- **WHEN** the page renders on desktop
- **THEN** the main content area is offset by the sidebar width (64 tailwind units = 16rem)
