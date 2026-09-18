# Template: Shuttervibe (Photography Portfolio)

## Purpose

Shuttervibe is a photography portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Thumber"
photography portfolio design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design features a fixed black header bar, a full-screen Swiper
image gallery with thumbnail strip, expandable image info panels, a zoom
button per slide, an off-canvas mobile menu, and a responsive photo grid page
with hover overlays. Shuttervibe follows the same section structure and
matches the design tokens (brand pink #e44985, Quicksand font, black
background, white info panels).

- **Source**: ColorLib "Thumber" — https://colorlib.com/wp/template/thumber/
- **Preview**: https://preview.colorlib.com/theme/thumber/

## Requirements

### Requirement: Header bar

The system SHALL render a fixed black header bar at the top with the logo
"Shuttervibe" on the left and a hamburger "Menu" toggle on the right. Desktop
nav links (Home, Photos, About Me, Contact) SHALL be visible on large
screens; the hamburger toggle SHALL be visible on small screens.

#### Scenario: Header renders logo and menu toggle

- **GIVEN** the Shuttervibe page is loaded
- **WHEN** the page renders
- **THEN** a fixed black header bar SHALL be visible at the top
- **AND** the logo "Shuttervibe" SHALL be shown in white, uppercase, bold
- **AND** a hamburger "Menu" toggle SHALL be shown on the right

#### Scenario: Desktop nav links

- **GIVEN** the viewport is wide (lg breakpoint and above)
- **WHEN** the page renders
- **THEN** the nav links Home, Photos, About Me, Contact SHALL be visible
- **AND** the active page link SHALL be highlighted in brand pink (#e44985)

### Requirement: Full-screen image gallery

The system SHALL render a Swiper-based gallery filling the viewport below the
header. The main image area SHALL occupy 80% of the remaining height, and a
thumbnail strip SHALL occupy the remaining 20%.

#### Scenario: Gallery displays main images

- **GIVEN** the home page is active
- **WHEN** the gallery renders
- **THEN** a main image SHALL fill 80% of the viewport height below the header
- **AND** navigation arrows SHALL appear on hover

#### Scenario: Thumbnail strip

- **GIVEN** the gallery is rendered
- **WHEN** the thumbnail strip displays
- **THEN** thumbnails SHALL be 80px tall with 0.4 opacity
- **AND** the active thumbnail SHALL have a 4px solid brand pink (#e44985) border
- **AND** hovering a thumbnail SHALL set opacity to 1.0
- **AND** clicking a thumbnail SHALL navigate the main gallery to that slide

### Requirement: Image info panel

Each gallery slide SHALL have a white info panel at the bottom-left that starts
collapsed at 60×60px showing only an arrow icon. Clicking the arrow SHALL
expand the panel to show the image title and description. Clicking again SHALL
collapse it.

#### Scenario: Expand info panel

- **GIVEN** a gallery slide is displayed
- **WHEN** the user clicks the expand arrow button
- **THEN** the info panel SHALL expand to show the image title and description
- **AND** the arrow icon SHALL rotate 180°

#### Scenario: Collapse info panel

- **GIVEN** the info panel is expanded
- **WHEN** the user clicks the collapse arrow button
- **THEN** the info panel SHALL collapse back to 60×60px

### Requirement: Zoom button

Each gallery slide SHALL have a white 60×60px zoom button at the bottom-right
with a gray (#b3b3b3) search icon. Clicking it SHALL open the full-resolution
image in a new tab.

#### Scenario: Zoom button renders

- **GIVEN** a gallery slide is displayed
- **WHEN** the slide renders
- **THEN** a zoom button SHALL be visible at the bottom-right
- **AND** clicking the zoom button SHALL open the image URL in a new tab

### Requirement: Mobile menu

The system SHALL provide an off-canvas mobile menu that slides in from the
right (300px wide, white background) when the hamburger toggle is clicked.

#### Scenario: Open mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user clicks the "Menu" toggle
- **THEN** a 300px off-canvas menu SHALL slide in from the right
- **AND** the menu background SHALL be white
- **AND** the menu SHALL contain nav links: Home, Photos, About Me, Contact
- **AND** the active link SHALL be highlighted in brand pink (#e44985)

#### Scenario: Close mobile menu

- **GIVEN** the mobile menu is open
- **WHEN** the user clicks the close button or the backdrop
- **THEN** the mobile menu SHALL slide out to the right

### Requirement: Photo grid page

The system SHALL render a responsive photo grid when navigating to the Photos
page. Each photo SHALL show an image at 300px height (200px on mobile) with a
dark overlay on hover showing a centered search icon and category label.

#### Scenario: Photo grid renders

- **GIVEN** the Photos page is active
- **WHEN** the page renders
- **THEN** a responsive grid of photo items SHALL be displayed
- **AND** each photo SHALL show an image at 300px height
- **AND** hovering a photo SHALL show a dark overlay with centered icon + category

#### Scenario: Responsive photo grid

- **GIVEN** the Photos page is active
- **WHEN** the viewport is below the md breakpoint
- **THEN** photo grid images SHALL reduce to 200px height

### Requirement: Footer

The system SHALL render a footer linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** any page is rendered
- **WHEN** the footer displays
- **THEN** it SHALL show "More templates at Component Dock"
- **AND** the "Component Dock" link SHALL point to https://www.componentdock.com/

### Requirement: Navigation between pages

The system SHALL support navigation between the home (gallery) page and the
photos (grid) page via the nav links.

#### Scenario: Navigate to photos

- **GIVEN** the home page is active
- **WHEN** the user clicks "Photos" in the nav
- **THEN** the photo grid SHALL replace the gallery
- **AND** the document title SHALL remain "Shuttervibe — Photography Portfolio"

#### Scenario: Navigate back to home

- **GIVEN** the photos page is active
- **WHEN** the user clicks "Home" in the nav
- **THEN** the gallery SHALL replace the photo grid
