# Template: Sidekick (Sidebar Layout)

## Purpose

Recreation of ColorLib **Bootstrap Sidebar 10** (slug: `bootstrap-sidebar-10`).
Source: https://colorlib.com/wp/template/bootstrap-sidebar-10/
Preview: https://colorlib.com/etc/bootstrap-sidebar/sidebar-10/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170724.jpg

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.
Tests: Vitest + Testing Library with 100% coverage.

**Layout archetype:** Collapsible sidebar (fixed 300px left panel, full-width
main content area). The sidebar has a background image, navigation links,
a newsletter subscription form, and a footer. A hamburger button toggles the
sidebar open/closed.

## Design Tokens

| Token | Value | Notes |
| --- | --- | --- |
| Font family | Poppins (400, 500, 700) | Google Fonts, loaded via index.html `<link>` |
| Sidebar width | 300px | Fixed; `min-width` and `max-width` |
| Sidebar bg | Background image (`picsum.photos/seed/sidekick/300/1200`) | Dark overlay on background image |
| Sidebar text color | `#fff` | Links use `rgba(255, 255, 255, 0.9)` |
| Sidebar border-bottom | `1px solid rgba(255, 255, 255, 0.1)` | On nav links |
| Active link color | `#2f89fc` (brand blue) | Background on hover/active |
| Content bg | `#ffffff` | White |
| Body text color | `#212529` | Standard dark text |
| Link color | `#007bff` | Anchor default |
| Link hover color | `#0056b3` | Anchor hover |
| Button radius | `0.25rem` | Standard Bootstrap |
| Sidebar transition | `all 0.3s` | Smooth toggle animation |

## Visual Reference (Screenshot Analysis)

The template shows a split layout:
- **Left sidebar** (dark, with background image and dark overlay):
  - Logo at top: "Kenitic" (large) + "Blog Agency" (smaller subtitle)
  - Navigation links with icons (Home, About, Blog, Services, Contacts)
  - Newsletter subscription form (email input + submit)
  - Copyright footer
- **Main content area** (white, full width minus sidebar):
  - Heading "Sidebar #04"
  - Two paragraphs of lorem ipsum text
- **Hamburger button** (top-left of main area, overlapping sidebar edge)

The sidebar is collapsible — on mobile or when toggled, it slides out to the
left (negative margin) and the content takes full width.

## Requirements

### Sidebar Structure

Feature: Sidebar navigation panel

#### Scenario: Sidebar renders with logo

- **GIVEN** the app is loaded
- **THEN** the sidebar displays a logo text "Sidekick"
- **AND** the sidebar displays a subtitle text

#### Scenario: Sidebar displays navigation links

- **GIVEN** the app is loaded
- **THEN** the sidebar shows links for "Home", "About", "Blog", "Services", "Contacts"
- **AND** each link has an icon beside it
- **AND** each link has a bottom border separator

#### Scenario: Sidebar has newsletter subscription form

- **GIVEN** the app is loaded
- **THEN** the sidebar shows a newsletter subscription section
- **AND** it contains an email input field with placeholder text
- **AND** it contains a subscribe button

#### Scenario: Sidebar has copyright footer

- **GIVEN** the app is loaded
- **THEN** the sidebar shows a copyright footer at the bottom

### Sidebar Toggle

Feature: Sidebar collapse/expand

#### Scenario: Sidebar starts open on desktop

- **GIVEN** the screen width is at least 768px
- **THEN** the sidebar is visible at 300px width

#### Scenario: Toggle button collapses sidebar

- **GIVEN** the sidebar is open
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the sidebar slides out to the left with a 0.3s transition
- **AND** the main content expands to fill the viewport

#### Scenario: Toggle button expands sidebar

- **GIVEN** the sidebar is collapsed
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the sidebar slides back into view at 300px width
- **AND** the main content shrinks to accommodate the sidebar

### Main Content Area

Feature: Main content display

#### Scenario: Content area displays heading

- **GIVEN** the app is loaded
- **THEN** the main content area shows a heading

#### Scenario: Content area displays paragraphs

- **GIVEN** the app is loaded
- **THEN** the main content area shows descriptive text paragraphs

#### Scenario: Content area fills remaining width

- **GIVEN** the sidebar is open
- **THEN** the content area occupies the remaining viewport width

### Responsive Behavior

Feature: Mobile responsive sidebar

#### Scenario: Sidebar hides on small screens

- **GIVEN** the screen width is less than 768px
- **THEN** the sidebar is hidden off-screen by default
- **AND** the content takes full width

#### Scenario: Sidebar can be opened on mobile

- **GIVEN** the screen width is less than 768px
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the sidebar slides in from the left

## Verification Checklist

- [ ] Sidebar renders with logo, nav links with icons, newsletter form, footer
- [ ] Toggle button opens/closes sidebar with smooth 0.3s transition
- [ ] Active nav link highlighted in brand blue (#2f89fc)
- [ ] Sidebar uses background image with dark overlay
- [ ] Newsletter form has email input + subscribe button
- [ ] Content area fills remaining space beside sidebar
- [ ] Responsive: sidebar hidden on mobile, toggleable
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
- [ ] spec:validate passes
