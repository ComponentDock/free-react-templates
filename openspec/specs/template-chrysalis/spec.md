# Template: Chrysalis (Portfolio)

## Purpose

Recreation of ColorLib "Cocoon" — a masonry portfolio template with fixed sidebar navigation.

- **Source**: https://colorlib.com/wp/template/cocoon/
- **Preview**: https://preview.colorlib.com/theme/cocoon/
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Package**: `@free-react-templates/chrysalis`

## Design tokens

Extracted from the live preview stylesheet (`assets/css/main.css`):

| Token | Value | Notes |
|---|---|---|
| `fontFamily` | `"Montserrat", sans-serif` | Weights 300, 400, 500 |
| `textBody` | `#9c9ca9` | Muted purple-gray body text |
| `textHeading` | `#18181c` | Near-black headings |
| `accent` | `#99896e` | Warm gold/tan — brand color, active states, hover overlays, social icons |
| `sidebarBg` | `#18181c` | Near-black sidebar background |
| `surfaceLight` | `#ffffff` | Main content area background |
| `loaderBg` | `#f7f7f7` | Light gray loader overlay |
| `btnRadius` | `50px` | Pill-shaped mobile menu button |
| `btnAccentBg` | `#99896e` | Accent button background |
| `btnAccentText` | `#ffffff` | White button text |
| `transition` | `all 0.4s ease-in-out` | Global hover transition |

## Visual reference (screenshot)

![Cocoon preview](https://colorlib.com/wp/wp-content/uploads/sites/2/cocoon-free-template.jpg)

**Visual summary**: Two-column fixed layout. Left sidebar (~20% width) has near-black background, centered logo at top, vertical nav menu (Home, About Us, Services, Portfolio, Blog, Contact), filter menu (All, Branding, Design, Photography, Architecture) with gold accent on active item, social icons row (Pinterest, Facebook, Twitter, Dribbble), and copyright text at bottom. Right content area has white background with a masonry grid of portfolio images of varying sizes (1-column, 2-column spans). Hover overlay on each item shows a translucent dark background with a "+" icon and "project name" text. Overall aesthetic is minimal, dark sidebar with light content, warm gold accent. Portfolio items filter by category with an Isotope-style layout.

## Requirements

### Scenario: Sidebar navigation
- **GIVEN** the page loads
- **WHEN** the viewport is desktop (>1024px)
- **THEN** a fixed left sidebar is visible with logo at top, vertical navigation menu, filter menu, social icons, and copyright

### Scenario: Sidebar logo
- **GIVEN** the sidebar is visible
- **WHEN** the user views the sidebar
- **THEN** the logo is centered at the top with white text on the dark background

### Scenario: Vertical navigation
- **GIVEN** the sidebar is visible
- **WHEN** the user views the nav menu
- **THEN** six navigation links are displayed vertically: Home, About Us, Services, Portfolio, Blog, Contact
- **AND** the active link has a gold accent (#99896e) left border or underline indicator

### Scenario: Filter menu
- **GIVEN** the sidebar is visible
- **WHEN** the user views the filter section below the nav
- **THEN** filter options are displayed: All, Branding, Design, Photography, Architecture
- **AND** the "All" filter is active by default with a gold accent indicator

### Scenario: Filter portfolio by category
- **GIVEN** the portfolio grid is displayed
- **WHEN** the user clicks a filter category (e.g. "Branding")
- **THEN** only portfolio items matching that category are shown
- **AND** items animate into position

### Scenario: Masonry portfolio grid
- **GIVEN** the content area is visible
- **WHEN** "All" is selected
- **THEN** a 4-column masonry grid displays portfolio items with varied heights
- **AND** items span 1, 2, or 3 columns based on their aspect ratio

### Scenario: Portfolio item hover
- **GIVEN** a portfolio item is displayed in the grid
- **WHEN** the user hovers over an item
- **THEN** a translucent dark overlay appears covering the item image
- **AND** a "+" icon is centered on the overlay
- **AND** "project name" text appears below the icon
- **AND** the transition is smooth (0.4s ease-in-out)

### Scenario: Portfolio lightbox
- **GIVEN** a portfolio item is hovered
- **WHEN** the user clicks the item
- **THEN** the full-size image opens in a lightbox modal
- **AND** the background is dimmed
- **AND** the image can be closed by clicking outside or pressing Escape

### Scenario: Social icons
- **GIVEN** the sidebar is visible
- **WHEN** the user scrolls to the bottom of the sidebar
- **THEN** four social media icons are displayed: Pinterest, Facebook, Twitter, Dribbble
- **AND** icons are gold-colored (#99896e)
- **AND** icons change color on hover

### Scenario: Copyright footer
- **GIVEN** the sidebar is visible
- **WHEN** the user views the bottom of the sidebar
- **THEN** copyright text is displayed in gold (#99896e), small font (12px)
- **AND** the text references "Component Dock" as the template source

### Scenario: Mobile responsive
- **GIVEN** the viewport is ≤768px
- **WHEN** the page loads
- **THEN** the sidebar is hidden
- **AND** a floating pill-shaped menu button (border-radius: 50px) appears in the bottom-right corner
- **AND** clicking the button toggles an overlay sidebar

### Scenario: Page loader
- **GIVEN** the page is loading
- **WHEN** the DOM is not yet ready
- **THEN** a full-screen loader with a spinning border circle (gold #99896e) is shown on #f7f7f7 background
- **AND** the loader fades out when the page is ready

## Verification checklist

- [ ] Sidebar matches original: dark background (#18181c), vertical layout, logo centered
- [ ] Navigation links match: Home, About Us, Services, Portfolio, Blog, Contact
- [ ] Filter menu matches: All, Branding, Design, Photography, Architecture
- [ ] Filter functionality works with animated transitions (Isotope-style)
- [ ] Masonry grid displays portfolio items with varied column spans
- [ ] Hover overlay shows translucent dark background + "+" icon + project name
- [ ] Lightbox opens on click with background dimming
- [ ] Social icons (Pinterest, Facebook, Twitter, Dribbble) in gold accent
- [ ] Copyright text references Component Dock (not ColorLib)
- [ ] Font: Montserrat (300, 400, 500)
- [ ] Brand accent: #99896e used consistently
- [ ] Mobile: sidebar hidden, floating menu button appears
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use https://picsum.photos/seed/chrysalis-<n>/<w>/<h>
