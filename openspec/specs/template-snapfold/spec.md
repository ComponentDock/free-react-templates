# Template: Snapfold (Photography Gallery Landing)

## Purpose

Snapfold is a photography portfolio gallery landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Photogallery" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a photography portfolio site with a fixed left sidebar
navigation, a full-page hero image slider with project titles, and a
search overlay. Snapfold recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Photogallery" — free photography gallery website
  template (source: https://colorlib.com/wp/template/photogallery/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/photogallery/`
  (HTTP 200, full page HTML 24.7KB). The rendered DOM is the reference
  below; the TEMPLATES.md screenshot (`photogallery-free-template.jpg`)
  confirms the visual design (dark sidebar, large hero photos, minimal
  aesthetic).
- **Structure order (1:1):**
  1. **Preloader:** black screen with spinning loader (animated border
     rotates red #f44336 / purple #673ab7).
  2. **Top-right controls** (fixed, z-999): search icon (black square
     bg #323232) + hamburger menu toggle.
  3. **Sidebar header** (fixed left, 455px wide): logo image, hamburger
     icon, navigation menu (Home, Gallery, Single gallery, Blog, Contact),
     social links (Behance, Dribbble, Twitter, Facebook, Pinterest —
     rotated -90deg, light blue-gray #c6d7d8), "Find us on" text with
     line, copyright bar at bottom.
  4. **Hero slider** (owl-carousel, full-viewport): 2 slides, each with
     a full-bleed background photo, white text box (395px wide) pinned
     to left of slide containing:
     - Small "Photography" label (11px, uppercase, letter-spacing 2px,
       gray #898d90)
     - Large "Project No. N" heading (48px, color #323232)
     - Body paragraph (16px, gray #898d90)
     - "Read More" button (transparent, 2px black border, uppercase,
       bold, arrow icon on right)
     - Next slide preview thumbnail at bottom-right corner with "Next"
       label.
  5. **Navigation arrows** (bottom of hero): prev (dark #323232) and
     next (white) arrows, each 111x88px.
  6. **Slide counter** (bottom-right fixed): current slide number
     (30px, #323232) + total count, white background.
  7. **Search overlay:** fullscreen black overlay, centered search input
     (large 40px text, bottom border), circular close button (#333 bg,
     50% radius).

- **Design tokens extracted from `css/style.css`:**
  - **Primary dark:** #323232 (text, header bg, button text, nav active)
  - **Body text:** #898d90 (paragraphs, slide labels)
  - **Accent light:** #c6d7d8 (social links, copyright)
  - **White:** #fff (header bg, slider text box, nav arrows)
  - **Black:** #000 (preloader bg, button borders, search overlay)
  - **Font:** **PT Sans** (sans-serif) — weights 400 + 700 — loaded
    via Cloudflare Fonts CDN.
  - **Buttons:** transparent background, 2px solid black border,
    border-radius: 0 (sharp/square), uppercase, bold, letter-spacing
    0.08em, with right-aligned arrow icon. Alternate: `.sb-light`
    (white border/text) and `.sb-solid-dark` (solid #323232 bg).
  - **Sidebar:** fixed left, 455px width, white bg, z-index 9999.
  - **Hero slider:** full viewport height, image backgrounds via
    `background-size: cover`.
  - **Section backgrounds:** white (#fff) for text boxes, transparent
    for hero (image fill), black (#000) for preloader/search.

- **Recreation decisions:** repo-standard sidebar Navbar (site name
  "Snapfold", nav links, dark-mode toggle) replacing the fixed 455px
  sidebar with a responsive sidebar that collapses on mobile; hero
  slider using a single-slide display with next-slide preview;
  "Photography" label + "Project No. N" + description + "Read More" CTA;
  search overlay modal; slide counter; all images via picsum-seeded
  (`picsum.photos/seed/snapfold-N/w/h`); Google Fonts via `<link>`.

Snapfold lives in `apps/snapfold` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Sidebar navigation

The system SHALL render a fixed left sidebar containing the site name
"Snapfold", a hamburger menu toggle, navigation links (Home, Gallery,
Blog, Contact), social media icon links (Behance, Dribbble, Twitter,
Facebook, Pinterest), and a copyright bar at the bottom.

#### Scenario: Sidebar visible on desktop

- **GIVEN** the Snapfold page is rendered on a desktop viewport (>= 1024px)
- **WHEN** the page loads
- **THEN** a fixed left sidebar SHALL be visible containing the "Snapfold"
  brand name, navigation links, and social icons

#### Scenario: Sidebar collapsed on mobile

- **GIVEN** the Snapfold page is rendered on a mobile viewport (< 768px)
- **WHEN** the page loads
- **THEN** the sidebar SHALL be hidden by default
- **AND** a hamburger toggle button SHALL be visible to open the sidebar

#### Scenario: Sidebar navigation links

- **GIVEN** the sidebar is visible
- **WHEN** the user inspects the navigation
- **THEN** links for "Home", "Gallery", "Blog", and "Contact" SHALL be
  present
- **AND** the "Home" link SHALL be visually active/highlighted

### Requirement: Hero image slider

The system SHALL render a full-viewport hero section with at least two
image slides. Each slide SHALL display a full-bleed background photo with
a white text box containing a category label ("Photography"), a project
title ("Project No. N"), a description paragraph, and a "Read More" CTA
button.

#### Scenario: Hero slider displays first slide

- **GIVEN** the Snapfold page is loaded
- **WHEN** the hero slider renders
- **THEN** the first slide SHALL be visible with a background image
- **AND** a text box SHALL show "Photography" as a small label
- **AND** a heading "Project No. 1" SHALL be displayed
- **AND** a paragraph of description text SHALL be present
- **AND** a "Read More" button SHALL be visible

#### Scenario: Hero slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user clicks the next navigation arrow
- **THEN** the slider SHALL transition to the next slide
- **AND** the slide counter SHALL update to reflect the current slide

#### Scenario: Next slide preview

- **GIVEN** a slide is active in the hero slider
- **WHEN** the user looks at the bottom-right corner of the slide
- **THEN** a preview thumbnail of the next slide SHALL be visible
- **AND** a "Next" label SHALL overlay the thumbnail

### Requirement: Slide counter

The system SHALL display a fixed slide counter at the bottom-right of the
viewport showing the current slide number and total slide count.

#### Scenario: Slide counter shows current position

- **GIVEN** the hero slider is on slide 1 of 2
- **WHEN** the slide counter renders
- **THEN** the counter SHALL display "01" (or "1") as the current slide
- **AND** the counter SHALL display the total slide count

### Requirement: Search overlay

The system SHALL provide a search icon in the top-right controls area.
Clicking the search icon SHALL open a fullscreen search overlay with a
large centered text input and a circular close button.

#### Scenario: Search overlay opens

- **GIVEN** the Snapfold page is rendered
- **WHEN** the user clicks the search icon (top-right)
- **THEN** a fullscreen black overlay SHALL appear
- **AND** a large text input with placeholder "Search here..." SHALL be
  focused
- **AND** a circular close button SHALL be visible

#### Scenario: Search overlay closes

- **GIVEN** the search overlay is open
- **WHEN** the user clicks the close button or presses Escape
- **THEN** the overlay SHALL be dismissed and the page SHALL return to
  normal

### Requirement: Preloader

The system SHALL display a full-screen black preloader with an animated
spinning loader while the page assets load. The preloader SHALL
automatically dismiss once the page is ready.

#### Scenario: Preloader visible on initial load

- **GIVEN** the Snapfold page begins loading
- **WHEN** assets are still loading
- **THEN** a fullscreen black overlay with a spinning loader animation
  SHALL be visible

#### Scenario: Preloader dismisses after load

- **GIVEN** the page assets have finished loading
- **WHEN** the preloader checks readiness
- **THEN** the preloader overlay SHALL fade out and be removed from view

### Requirement: Dark mode

The system SHALL support dark mode toggled via the sidebar. In dark mode,
backgrounds and text colors SHALL invert appropriately while maintaining
contrast ratios.

#### Scenario: Dark mode toggle

- **GIVEN** the Snapfold page is in light mode
- **WHEN** the user toggles dark mode via the sidebar
- **THEN** the page background SHALL switch to a dark color scheme
- **AND** text SHALL remain legible with appropriate contrast

### Requirement: Footer

The system SHALL render a footer with a "Made with Component Dock" link
pointing to `https://www.componentdock.com/`.

#### Scenario: Footer content

- **GIVEN** the Snapfold page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL be visible with a link to Component Dock

## Verification checklist

- [ ] Sidebar renders with correct nav links and social icons
- [ ] Hero slider cycles through at least 2 slides
- [ ] Each slide has: label, title, description, CTA button
- [ ] Slide counter updates on navigation
- [ ] Search overlay opens/closes correctly
- [ ] Preloader displays and dismisses on load
- [ ] Dark mode toggle works
- [ ] Footer links to Component Dock
- [ ] All images use picsum-seeded URLs (no ColorLib assets)
- [ ] No ColorLib references in app code (comments included)
- [ ] Font loaded via Google Fonts (PT Sans)
- [ ] Responsive: sidebar collapses on mobile
