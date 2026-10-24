# Template: Editrix (News / Magazine)
<!-- prep-status: shipped-as=editorial -->
> **SHIPPED-UNDER** — the ColorLib `megazine` design this prep describes already
> ships as `apps/editorial` (<https://editorial.free.componentdock.com>).
> Do not scaffold `apps/editrix`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-editorial/spec.md`.

## Purpose

Recreation of the ColorLib **Megazine** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **Source:** https://colorlib.com/wp/template/megazine/
- **Preview:** https://preview.colorlib.com/theme/megazine/
- **Category:** News / Magazine
- **New name:** `editrix` (apps/editrix, @free-react-templates/editrix)
- **Package homepage:** https://editrix.free.componentdock.com

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) on 2026-09-24.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| brand-primary | `#F75940` | Coral/red-orange accent — links, tag pill fill, selection highlight, hover states |
| brand-secondary | `#f86e58` | Lighter coral variant |
| heading | `#000000` | All heading text (h1–h6) |
| body-text | `rgba(0, 0, 0, 0.7)` | Paragraph and body copy |
| muted-text | `#b3b3b3` | Figure captions, secondary text |
| nav-inactive | `rgba(0, 0, 0, 0.4)` | Sidebar nav links (inactive) |
| nav-active | `#000000` | Sidebar nav link (active) |
| footer-text | `rgba(0, 0, 0, 0.6)` | Sidebar footer copyright text |
| sidebar-bg | `#FFFFFF` | Sidebar background |
| page-bg | `#FFFFFF` / `#F8F8F8` | Main content area background |
| overlay-dark | `rgba(0, 0, 0, 0.7)` | Hero + blog image overlays |
| border-light | `#DBDBDB` | Light dividers/borders |
| border-lighter | `#F0F0F0` | Subtle dividers |

### Typography

| Property | Value |
|----------|-------|
| font-family | `"Montserrat", Arial, sans-serif` |
| body-weight | 300 (light) |
| body-size | 15px (16px on mobile) |
| body-line-height | 1.8 |
| heading-weight | 400 (regular) |
| heading-line-height | 1.3 |
| logo-size | 22px, uppercase, letter-spacing wide |
| nav-size | 14px, uppercase, letter-spacing: 1px |
| tag-size | 13px, uppercase, letter-spacing: 2px |

### Shapes / Radii

| Element | Radius |
|---------|--------|
| Tag pills (.tag span) | 30px (full pill shape) |
| Social icons (footer) | 50% (circle) |

### Layout

- **Sidebar:** Fixed left, 20% width (30% below 1200px), full height, white background, padding 3em. Collapses to 270px off-screen drawer below 768px with hamburger toggle.
- **Main content:** Shifts right to fill remaining space; includes hero slider and blog grid.
- **Hero slider:** Full viewport height (`js-fullheight`), FlexSlider carousel with 3 slides. Each slide: full-bleed background image + dark overlay (0.7 opacity) + vertically centered text with category tag pill, headline (h1, white, 40px+), and description.
- **Blog grid:** CSS grid via Bootstrap rows. Cards have: background image with dark overlay, centered white text (tag pill, headline, description). Mixed column widths: 50/50, 25/25/50, full-width, 33/33/33, 60/40 patterns.
- **Pagination:** Centered numbered links with `«` / `»` arrows, 50% rounded active state.

## Requirements

### Sidebar Navigation

Feature: Editrix sidebar navigation

#### Scenario: Sidebar renders with brand name

- **GIVEN** the page loads
- **THEN** the sidebar displays the site name "Editrix" in uppercase
- **AND** the sidebar is fixed to the left side of the viewport

#### Scenario: Sidebar contains navigation links

- **GIVEN** the sidebar is visible
- **THEN** the following nav links are present: Home, Style, Fashion, Travel, Sports, Video, Archives
- **AND** the "Home" link has an active indicator (underline or bold)

#### Scenario: Sidebar footer shows copyright and social icons

- **GIVEN** the sidebar footer is visible
- **THEN** a copyright notice is displayed
- **AND** social media icons are shown: Facebook, Twitter, Instagram, LinkedIn

#### Scenario: Sidebar collapses on mobile

- **GIVEN** the viewport width is below 768px
- **THEN** the sidebar is hidden off-screen
- **AND** a hamburger toggle button appears
- **WHEN** the hamburger button is clicked
- **THEN** the sidebar slides in from the left

#### Scenario: Clicking a nav link highlights it

- **GIVEN** the sidebar is visible
- **WHEN** the user clicks "Fashion"
- **THEN** "Fashion" becomes the active nav item
- **AND** "Home" is no longer active

### Hero Slider

Feature: Editrix hero slider

#### Scenario: Hero slider displays a full-viewport slide

- **GIVEN** the page loads
- **THEN** the hero section occupies the full viewport height
- **AND** a background image is displayed
- **AND** a semi-transparent dark overlay covers the image

#### Scenario: Slide shows category tag, headline, and description

- **GIVEN** a hero slide is visible
- **THEN** a category tag pill is displayed (e.g. "Fashion")
- **AND** a large headline in white text is shown
- **AND** a description paragraph appears below the headline

#### Scenario: Hero carousel cycles through slides

- **GIVEN** the hero slider has multiple slides
- **WHEN** the page loads
- **THEN** the slider auto-advances through slides
- **AND** carousel navigation dots are visible at the bottom right

#### Scenario: Carousel dots indicate current slide

- **GIVEN** the hero slider is on slide 1
- **THEN** the first dot is filled/active
- **WHEN** the slider advances to slide 2
- **THEN** the second dot becomes active

### Blog Grid

Feature: Editrix blog article grid

#### Scenario: First row shows one large and two small cards

- **GIVEN** the blog grid renders
- **THEN** the first row contains one large card spanning 50% width
- **AND** two smaller cards each spanning 25% width on the right

#### Scenario: Blog cards display image with overlay and text

- **GIVEN** a blog card is rendered
- **THEN** a background image is shown
- **AND** a dark overlay covers the image
- **AND** a category tag pill is centered on the card
- **AND** a headline is centered below the tag
- **AND** a short description appears below the headline

#### Scenario: Full-width card row exists

- **GIVEN** the blog grid renders
- **THEN** at least one row contains a single full-width card

#### Scenario: Grid uses mixed column layouts

- **GIVEN** the blog grid renders
- **THEN** rows use varying column splits: 50/25/25, 100, 40/30/30, 60/40 patterns

### Pagination

Feature: Editrix blog pagination

#### Scenario: Pagination renders below the grid

- **GIVEN** the blog grid has more than one page of content
- **THEN** numbered page links appear below the grid
- **AND** left/right arrow buttons are present

#### Scenario: Current page is visually distinct

- **GIVEN** pagination is visible
- **THEN** the current page number has an active/rounded style
- **AND** other page numbers are plain links

### Responsive Layout

Feature: Editrix responsive behavior

#### Scenario: Sidebar adapts on tablet

- **GIVEN** the viewport is between 768px and 1200px
- **THEN** the sidebar width expands to 30%

#### Scenario: Sidebar collapses on mobile

- **GIVEN** the viewport is below 768px
- **THEN** the sidebar becomes a 270px drawer
- **AND** the hamburger toggle is visible
- **AND** the main content fills the full width

#### Scenario: Blog cards stack on mobile

- **GIVEN** the viewport is below 768px
- **THEN** blog cards stack vertically
- **AND** small blog card images expand to 400px height

## Verification checklist

- [ ] Sidebar renders with "Editrix" branding and all 7 nav links
- [ ] Sidebar footer shows copyright and 4 social icons (Facebook, Twitter, Instagram, LinkedIn)
- [ ] Sidebar collapses to drawer on mobile (<768px) with hamburger toggle
- [ ] Hero slider fills viewport height with background images and dark overlay
- [ ] Hero slides show category tag pill, headline, and description in white
- [ ] Carousel auto-advances and shows navigation dots
- [ ] Blog grid renders with mixed column layouts (50/25/25, 100, 40/30/30, etc.)
- [ ] Blog cards show background image, dark overlay, tag pill, headline, description
- [ ] Pagination renders below the grid with active state
- [ ] Responsive: sidebar width changes at breakpoints, cards stack on mobile
- [ ] Brand color `#F75940` used for links, tag fills, and hover states
- [ ] Font is Montserrat (300 body, 400 headings)
- [ ] Tag pills have border-radius 30px
- [ ] All text uses correct opacity/gray values per token table
- [ ] Footer links to https://www.componentdock.com/
