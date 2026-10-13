# Template: NavPanel (Sidebar Layout)

## Purpose

Recreation of ColorLib **Bootstrap Sidebar V04**.
- Source: https://colorlib.com/wp/template/bootstrap-sidebar-04/
- Preview (downloadable): https://preview.colorlib.com/downloads/free/bootstrap-sidebar-04.zip
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170630.jpg

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.

## Design Tokens (extracted from source CSS)

| Token               | Value                          | Notes                                       |
| ------------------- | ------------------------------ | ------------------------------------------- |
| font-family         | Poppins, Arial, sans-serif     | Google Fonts Poppins (400, 500, 700)       |
| body-font-size      | 14px                           |                                             |
| body-line-height    | 1.8                            |                                             |
| body-color          | gray (#808080)                 |                                             |
| body-background     | #fff                           |                                             |
| heading-color       | #000                           | h1, h2                                       |
| link-color          | #2f89fc                        | Brand blue                                  |
| sidebar-background | #212121                        | Dark gray / near-black                      |
| sidebar-width       | 250px                          | Fixed, min & max                            |
| sidebar-text        | rgba(255,255,255,0.6)          | Inactive nav link color                     |
| sidebar-hover       | #2f89fc                        | Hover/active nav background + text          |
| sidebar-border      | rgba(255,255,255,0.1)          | Bottom border on nav items                  |
| logo-background     | #2f89fc                        | Blue bar at top of sidebar                  |
| logo-text-color     | #fff                           |                                             |
| button-primary      | #2f89fc                        | Toggle button                               |
| content-background  | #fff                           | White main content area                     |

## Layout Structure

Two-panel flex layout: fixed-width sidebar (left) + fluid content area (right).

```
┌──────────────────────────────────────────────────────┐
│ SIDEBAR (250px)        │ CONTENT (fluid)              │
│                        │                              │
│ ┌────────────────────┐ │  [☰ hamburger]              │
│ │ Project Name       │ │                              │
│ │ (blue bg, white)   │ │  Sidebar #04                │
│ ├────────────────────┤ │                              │
│ │ 🏠 Homepage  [act] │ │  Lorem ipsum paragraph 1... │
│ ├────────────────────┤ │                              │
│ │ 👤 Dashboard       │ │  Lorem ipsum paragraph 2... │
│ ├────────────────────┤ │                              │
│ │ 📋 Friends         │ │                              │
│ ├────────────────────┤ │                              │
│ │ 📋 Subcription     │ │                              │
│ ├────────────────────┤ │                              │
│ │ ✈️ Settings        │ │                              │
│ ├────────────────────┤ │                              │
│ │ ✈️ Information     │ │                              │
│ └────────────────────┘ │                              │
└──────────────────────────────────────────────────────┘
```

### Responsive Behavior
- **>= 992px**: Sidebar visible by default (margin-left: 0)
- **< 992px**: Sidebar hidden off-screen (margin-left: -250px), toggle button visible to show/hide
- Toggle: clicking hamburger collapses/expands sidebar with 0.3s transition

## Requirements

### Sidebar Navigation

Feature: Sidebar navigation

#### Scenario: Sidebar displays brand logo at top

- **GIVEN** the sidebar is visible
- **THEN** a logo/brand name "Project Name" is displayed at the top
- **AND** the logo has a blue (#2f89fc) background with white text

#### Scenario: Sidebar shows navigation menu items

- **GIVEN** the sidebar is visible
- **THEN** 6 navigation links are displayed vertically
- **AND** each link has an icon on the left and label text
- **AND** inactive links have semi-transparent white text (rgba(255,255,255,0.6))

#### Scenario: Navigation items have proper labels

- **GIVEN** the sidebar is visible
- **THEN** the navigation items are:
| label        | icon type |
| Homepage     | home      |
| Dashboard    | user      |
| Friends      | note      |
| Subcription  | note      |
| Settings     | plane     |
| Information  | plane     |

#### Scenario: Hovering a nav item highlights it

- **GIVEN** the sidebar is visible
- **WHEN** I hover over a navigation link
- **THEN** the link background becomes #2f89fc
- **AND** the link text becomes white

#### Scenario: Active nav item is visually distinct

- **GIVEN** the sidebar is visible
- **AND** "Homepage" is the active item
- **THEN** "Homepage" link text is white (#fff)
- **AND** "Homepage" has no background highlight by default

### Sidebar Toggle

Feature: Sidebar collapse/expand

#### Scenario: Toggle button is visible on desktop

- **GIVEN** the viewport is >= 992px wide
- **AND** the sidebar is open
- **THEN** a hamburger toggle button is visible at the top-right edge of the sidebar

#### Scenario: Toggle button collapses the sidebar

- **GIVEN** the viewport is >= 992px wide
- **AND** the sidebar is open
- **WHEN** I click the toggle button
- **THEN** the sidebar slides left out of view (margin-left: -250px)
- **AND** the content area expands to full width

#### Scenario: Toggle button expands the sidebar

- **GIVEN** the sidebar is collapsed
- **WHEN** I click the toggle button
- **THEN** the sidebar slides back into view (margin-left: 0)

#### Scenario: Mobile view hides sidebar by default

- **GIVEN** the viewport is < 992px wide
- **THEN** the sidebar is hidden off-screen
- **AND** a toggle button is visible in the content area

#### Scenario: Mobile toggle shows/hides sidebar

- **GIVEN** the viewport is < 992px wide
- **AND** the sidebar is hidden
- **WHEN** I click the toggle button
- **THEN** the sidebar slides into view
- **WHEN** I click the toggle button again
- **THEN** the sidebar slides back out of view

### Content Area

Feature: Main content area

#### Scenario: Content area displays page heading

- **GIVEN** the page is loaded
- **THEN** a heading "Sidebar #04" is displayed in the content area
- **AND** the heading has margin-bottom of 1.5rem

#### Scenario: Content area displays body text

- **GIVEN** the page is loaded
- **THEN** two paragraphs of body text are displayed below the heading
- **AND** the text color is gray
- **AND** the font is Poppins at 14px

#### Scenario: Content area fills remaining width

- **GIVEN** the sidebar is visible
- **THEN** the content area occupies the remaining horizontal space
- **AND** the content area has padding of 1.5rem (mobile) / 3rem (desktop)

#### Scenario: Content area has full viewport height

- **GIVEN** the page is loaded
- **THEN** the content area has a minimum height of 100vh

### Responsive Layout

Feature: Responsive sidebar layout

#### Scenario: Desktop layout shows sidebar and content side by side

- **GIVEN** the viewport is >= 992px wide
- **THEN** the sidebar is visible at 250px width
- **AND** the content area fills the remaining width

#### Scenario: Transition animation on sidebar toggle

- **GIVEN** the sidebar is visible
- **WHEN** I click the toggle button
- **THEN** the sidebar animates over 0.3s ease

## Verification Checklist

- [ ] Sidebar renders with #212121 background, 250px width
- [ ] Logo bar shows "Project Name" on #2f89fc background
- [ ] 6 nav items with icons, correct labels, semi-transparent text
- [ ] Hover state: background #2f89fc, text white
- [ ] Active item: white text, no background highlight
- [ ] Hamburger toggle button visible and functional
- [ ] Sidebar collapse/expand animation (0.3s transition)
- [ ] Mobile (<992px): sidebar hidden by default, toggleable
- [ ] Content area: heading + paragraphs, white background, full height
- [ ] Poppins font family loaded
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
