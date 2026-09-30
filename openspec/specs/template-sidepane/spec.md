# Template: SidePane (ColorLib Sidebar V06)

## Purpose

Recreation of ColorLib Sidebar V06 — a sidebar navigation template with a
branded logo, search input, icon-based nav menu, and a two-column blog post
grid in the main content area.

Source: https://colorlib.com/wp/template/colorlib-sidebar-v06/
Preview: https://preview.colorlib.com/theme/colorlib-sidebar-v06/ (unreachable — 404; spec based on screenshot)

## Design tokens (from screenshot analysis)

| Token        | Value                     | Notes                                                        |
| ------------ | ------------------------- | ------------------------------------------------------------ |
| Sidebar bg   | `#fff` (white)            | Left fixed sidebar, full height                              |
| Content bg   | `#f5f5f5` (light gray)    | Main content area background                                 |
| Brand accent | `#25D366` (green/teal)    | Logo circle bg; active nav indicator                         |
| Ink primary  | `#212529` (near-black)    | Headings, nav text                                           |
| Ink secondary| `#6c757d` (gray)          | Dates, muted text                                            |
| Font family  | 'Poppins', sans-serif      | Consistent with other ColorLib sidebar templates              |
| Logo circle  | 40px diameter, 50% radius | Green bg with white "C" initial                              |
| Card avatars | ~50px circular            | Article card thumbnails, rounded                             |
| Nav icons    | ~20px                     | Home, video, book, store, pie-chart, settings icons          |
| Close button | X icon at content top-left| Toggle sidebar on mobile                                     |
| Section order | Sidebar → Content grid    | No footer visible in source screenshot                       |

## Requirements

### Requirement: Sidebar rendering

The template SHALL render a fixed left sidebar with a white background, containing a logo, search input, and navigation menu.

#### Scenario: Sidebar visible on desktop

- **WHEN** the page loads on a desktop viewport
- **THEN** a white sidebar is visible on the left side of the page

#### Scenario: Logo displays correctly

- **WHEN** the page loads
- **THEN** a green circular logo with the letter "C" is visible at the top of the sidebar
- **AND** the text "Colorlib" is displayed next to the logo

#### Scenario: Search input is present

- **WHEN** the page loads
- **THEN** a search input field with placeholder text "Search..." is visible in the sidebar
- **AND** a magnifying glass icon is displayed inside or beside the search input

### Requirement: Navigation menu

The sidebar SHALL provide an icon-based navigation menu with Home, Videos, Books, Store, Analytics, and Settings links.

#### Scenario: All nav items rendered

- **WHEN** the page loads
- **THEN** the sidebar contains navigation links for Home, Videos, Books, Store, Analytics, and Settings

#### Scenario: Home is active by default

- **WHEN** the page loads
- **THEN** the Home link is visually highlighted (bold text) as the active nav item

#### Scenario: Clicking a nav item changes active state

- **WHEN** the user clicks the Videos link
- **THEN** the Videos link becomes the active nav item and Home is no longer highlighted

### Requirement: Main content grid

The main content area SHALL display blog post cards in a responsive two-column grid.

#### Scenario: Post cards rendered

- **WHEN** the page loads
- **THEN** multiple article cards are displayed in a two-column grid layout
- **AND** each card contains a circular avatar image, a title, and a date

#### Scenario: Each card shows title and date

- **WHEN** the page loads
- **THEN** each post card displays an article title in bold dark text
- **AND** each card displays "Posted: Dec 17, 2019" or similar date text in gray

#### Scenario: Responsive single column on mobile

- **WHEN** the page is viewed on a mobile viewport (<=768px)
- **THEN** the post grid switches to a single-column layout

### Requirement: Mobile sidebar toggle

The sidebar SHALL be hidden on mobile and toggleable via a button.

#### Scenario: Sidebar hidden on mobile

- **WHEN** the page loads on a mobile viewport
- **THEN** the sidebar is not visible (translated off-screen or hidden)

#### Scenario: Hamburger opens sidebar

- **WHEN** the user taps the hamburger/menu button on mobile
- **THEN** the sidebar slides into view

#### Scenario: Close button closes sidebar

- **WHEN** the sidebar is open and the user taps the close (X) button
- **THEN** the sidebar slides out of view

#### Scenario: Overlay closes sidebar

- **WHEN** the sidebar is open and the user taps the overlay backdrop
- **THEN** the sidebar slides out of view

### Requirement: Footer with Component Dock link

The template SHALL render a footer that links to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link present

- **WHEN** the page loads
- **THEN** a footer link to https://www.componentdock.com/ is visible with text "Component Dock"

### Requirement: Accessibility

The template SHALL provide accessible labels, alt text, and semantic HTML elements.

#### Scenario: Sidebar accessible label

- **WHEN** the page loads
- **THEN** the sidebar has an aria-label

#### Scenario: Navigation items accessible

- **WHEN** the page loads
- **THEN** all navigation items are rendered as semantic links with descriptive text

#### Scenario: Images have alt text

- **WHEN** the page loads
- **THEN** all avatar images have descriptive alt text

## Verification checklist

- [ ] Sidebar renders with logo, search, and 6 nav items
- [ ] Home active state shown on load
- [ ] Nav item click changes active state
- [ ] Content grid renders post cards with avatar + title + date
- [ ] Grid is responsive (2-col desktop, 1-col mobile)
- [ ] Mobile sidebar toggle works (hamburger → open, X → close, overlay → close)
- [ ] Footer links to Component Dock
- [ ] All images have alt text
- [ ] Sidebar has aria-label
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] 100% test coverage
- [ ] Build succeeds
