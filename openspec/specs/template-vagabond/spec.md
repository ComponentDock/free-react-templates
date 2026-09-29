# Template: Vagabond (Sidebar Layout)

## Purpose

Recreation of ColorLib "Bootstrap Sidebar V06" — a two-column sidebar layout
template designed for a travel agency site. Fixed left sidebar with gradient
background, icon-based navigation, newsletter signup, and a clean white
content area.

- **Source:** [ColorLib Bootstrap Sidebar V06](https://colorlib.com/wp/template/bootstrap-sidebar-06/)
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap-sidebar-06/ (404 at prep time — design captured from screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-sidebar-170649.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Sidebar renders with brand identity

The sidebar SHALL display "Travel" as the brand name and "Travel Agency" as a subtitle in bold white text on a gradient background.

#### Scenario: Brand text renders

- **WHEN** the user loads the page
- **THEN** the sidebar displays "Travel" as the brand name
- **AND** the sidebar displays "Travel Agency" as a subtitle below the brand
- **AND** the sidebar text is white

### Requirement: Sidebar navigation items

The sidebar SHALL contain six navigation links with icons: Home, About, Destination, Blog, Services, Contacts.

#### Scenario: All nav items render

- **WHEN** the user loads the page
- **THEN** the sidebar contains navigation links: Home, About, Destination, Blog, Services, Contacts
- **AND** each nav item has an icon to its left
- **AND** all nav items are white text on the gradient background

### Requirement: Sidebar newsletter section

The sidebar SHALL include a newsletter subscription form with an email input and submit button.

#### Scenario: Newsletter form renders

- **WHEN** the sidebar is visible
- **THEN** a "Subscribe for newsletter" heading is displayed below the nav
- **AND** an email input with placeholder "Enter Email Address" is shown
- **AND** a submit button is present

### Requirement: Sidebar footer

The sidebar footer SHALL display a copyright notice and a link to Component Dock.

#### Scenario: Footer renders

- **WHEN** the sidebar footer is visible
- **THEN** a copyright notice is displayed at the bottom of the sidebar
- **AND** a link to Component Dock is present in the footer

### Requirement: Sidebar gradient background

The sidebar SHALL have a purple-to-pink gradient overlay over a landscape image.

#### Scenario: Gradient renders

- **WHEN** the sidebar is visible
- **THEN** the sidebar has a purple-to-pink gradient overlay
- **AND** a landscape image is visible behind the gradient

### Requirement: Content area layout

The content area SHALL fill the remaining viewport width to the right of the sidebar with a white background.

#### Scenario: Content area renders

- **WHEN** the user loads the page
- **THEN** a right content area fills the remaining viewport width
- **AND** the content area has a white background
- **AND** a heading is displayed at the top
- **AND** body text paragraphs are displayed below the heading

### Requirement: Responsive sidebar toggle

The sidebar SHALL collapse on mobile viewports and be toggleable via a hamburger button.

#### Scenario: Mobile toggle works

- **WHEN** the viewport is narrower than 768px
- **THEN** the sidebar is hidden by default
- **AND** a hamburger menu icon appears to toggle the sidebar
- **AND** clicking the hamburger shows the sidebar
- **AND** clicking the overlay closes the sidebar

### Requirement: Component Dock attribution

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock". No ColorLib references SHALL appear in app code.

#### Scenario: Footer link renders

- **WHEN** the sidebar footer is visible
- **THEN** a "Component Dock" link points to https://www.componentdock.com/
- **AND** no reference to ColorLib appears in the app code or UI
