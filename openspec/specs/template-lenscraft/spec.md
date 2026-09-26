# Template: Lenscraft (Photography Portfolio)

## Purpose

Recreation of ColorLib's "Proshoot" photography portfolio template.

- **Source slug:** `proshoot`
- **ColorLib URL:** https://colorlib.com/wp/template/proshoot/
- **Preview URL:** https://preview.colorlib.com/theme/proshoot/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **App folder:** `apps/lenscraft`
- **Package:** `@free-react-templates/lenscraft`

## Requirements

### Requirement: Navbar renders with navigation links

The navbar SHALL display the "Lenscraft" logo and navigation links (Home, About, Projects, Services, Blog). The navbar SHALL collapse to a hamburger menu on mobile viewports.

#### Scenario: Desktop navbar displays links

- **WHEN** the user visits the Lenscraft homepage on a desktop viewport
- **THEN** the navbar displays "Lenscraft" logo
- **AND** navigation links: Home, About, Projects, Services, Blog are visible

#### Scenario: Mobile hamburger menu toggles

- **WHEN** the user views on a mobile viewport (< 768px)
- **AND** clicks the hamburger menu button
- **THEN** the mobile navigation menu expands
- **AND** clicking a link closes the menu

### Requirement: Hero banner displays with headline and image

The hero section SHALL display the headline "Images matter", a subtitle paragraph, an "Explore More" pill button, a hero image on the right, and social media icons on the side.

#### Scenario: Hero section renders all elements

- **WHEN** the user visits the homepage
- **THEN** a hero section displays with headline "Images matter"
- **AND** a subtitle quote about photography is visible
- **AND** an "Explore More" button is visible with pill shape
- **AND** a hero image is displayed on the right
- **AND** social media icons (Facebook, Twitter, Instagram) are visible

### Requirement: About section renders with image and text

The about section SHALL display a title "Let's Introduce About Myself", a portrait image, descriptive text, and a "Read More" button.

#### Scenario: About section content

- **WHEN** the user scrolls to the about section
- **THEN** a section title "Let's Introduce About Myself" is visible
- **AND** a portrait/photography image is displayed
- **AND** descriptive text about the photographer is visible
- **AND** a "Read More" button is visible

### Requirement: Services section displays 6 service cards

The services section SHALL display a "What We Offer" heading and 6 service cards in a 3-column grid, each with an icon, title, and description.

#### Scenario: Services grid renders all cards

- **WHEN** the user scrolls to the services section
- **THEN** a "What We Offer" heading is visible
- **AND** 6 service cards display in a 3-column grid
- **AND** each card has an icon, title, and description
- **AND** the services are: Fashion Photography, Nature Photography, Event Coverage, Property Tours, Multimedia Services, Wedding Photography

### Requirement: Portfolio gallery shows work items

The portfolio section SHALL display a "Check Our Work" heading, portfolio items in an asymmetric masonry grid with hover overlays showing title and category, and a "View More" button.

#### Scenario: Portfolio grid renders items

- **WHEN** the user scrolls to the portfolio section
- **THEN** a "Check Our Work" heading is visible
- **AND** portfolio items display in an asymmetric masonry grid
- **AND** hovering an item reveals a title and category overlay
- **AND** a "View More" button is visible

### Requirement: Pricing section shows 3 packages

The pricing section SHALL display a "Choose Your Package" heading and 3 pricing cards (Wedding $46, Studio $76, Fashion $96) with feature lists and "Book Now" buttons.

#### Scenario: Pricing cards render correctly

- **WHEN** the user scrolls to the pricing section
- **THEN** a "Choose Your Package" heading is visible
- **AND** 3 pricing cards display: Wedding ($46), Studio ($76), Fashion ($96)
- **AND** each card shows included/excluded features with check/cross icons
- **AND** a "Book Now" button is on each card

### Requirement: Blog section shows recent posts

The blog section SHALL display a "Latest Good Story" heading, 1 large featured blog post, and 3 smaller blog posts, each with an image, title, author, date, and excerpt.

#### Scenario: Blog posts render correctly

- **WHEN** the user scrolls to the blog section
- **THEN** a "Latest Good Story" heading is visible
- **AND** 1 large featured blog post is displayed
- **AND** 3 smaller blog posts are displayed
- **AND** each post shows an image, title, author, date, and excerpt

### Requirement: Footer renders with Component Dock link

The footer SHALL display About Us text, a newsletter signup form, social media follow icons, and copyright text with a "Component Dock" attribution link.

#### Scenario: Footer content and attribution

- **WHEN** the user scrolls to the footer
- **THEN** an "About Us" section is visible
- **AND** a newsletter signup form is visible
- **AND** social media follow icons are visible (Facebook, Twitter, Dribbble, LinkedIn)
- **AND** copyright text with "Component Dock" attribution link pointing to https://www.componentdock.com/ is present

### Requirement: Mobile responsive layout

The template SHALL be fully responsive with hamburger navigation, stacked layouts, and single-column grids on mobile viewports.

#### Scenario: Mobile viewport layout

- **WHEN** the user views on a mobile viewport (< 768px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero section stacks vertically
- **AND** the services grid switches to 1 column
- **AND** the portfolio grid switches to 1 column
- **AND** the pricing grid switches to 1 column

### Requirement: Design tokens applied correctly

The template SHALL use brand color #fc6060 for buttons and accents, Oswald for headings, Roboto for body text, and pill-shaped buttons with 60px border-radius.

#### Scenario: Design tokens verification

- **WHEN** the template is rendered
- **THEN** brand color #fc6060 is applied to buttons and accents
- **AND** Oswald font is used for headings
- **AND** Roboto font is used for body text
- **AND** buttons have pill shape (60px border-radius)
- **AND** placeholder images use picsum.photos/seed/lenscraft-*
- **AND** no ColorLib references exist in app code
