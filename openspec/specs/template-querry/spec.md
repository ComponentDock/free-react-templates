# Querry — Fashion Search Form Hero Template

Recreation of ColorLib **Colorlib Search 4** (https://colorlib.com/wp/template/colorlib-search-4/).

## Purpose

A single-page fashion search form hero template featuring a full-screen background image, large bold uppercase heading, a white rounded search bar with a magnifying glass icon, and a horizontal category navigation strip below the search bar. Clean, bright, fashion e-commerce aesthetic. Minimal footer with Component Dock branding.

## Design tokens (from original)

- **Background**: full-screen fashion photograph (light gray tones)
- **Heading**: large bold uppercase white text, centered
- **Search input**: white rounded pill, placeholder "Type to search.", magnifying glass icon button on right
- **Category nav**: horizontal row of white text links below search bar; active item ("Accessories") bold/underlined
- **Overlay**: none — the image is bright and readable
- **Font**: Poppins (Google Fonts), weights 400/600/700
- **Brand colors**: white (#ffffff) primary, dark gray (#333333) text on hover/active

## Requirements

### Requirement: Hero section with background image and heading

The template SHALL display a full-screen hero section with a background image and a large bold uppercase heading.

#### Scenario: Heading renders correctly

- **WHEN** the page loads
- **THEN** a heading "WHAT ARE YOU LOOKING FOR?" SHALL be visible
- **AND** the heading SHALL be rendered as an `<h1>` element

#### Scenario: Background image is present

- **WHEN** the page loads
- **THEN** a background image SHALL fill the hero section
- **AND** the image source SHALL contain "picsum.photos"

### Requirement: Search form with input and icon button

The template SHALL provide a search form with a single text input and an icon-based search button.

#### Scenario: Search input has correct placeholder

- **WHEN** the page loads
- **THEN** the search input SHALL have placeholder "Type to search."
- **AND** the search input SHALL have an accessible label "Search"

#### Scenario: Search button renders with icon

- **WHEN** the page loads
- **THEN** a search button SHALL be visible
- **AND** the button SHALL contain a magnifying glass icon (aria-hidden)

#### Scenario: Form submission is handled

- **WHEN** the user clicks the search button
- **THEN** the form SHALL prevent default submission

#### Scenario: Typing in the search input

- **WHEN** the user types "dress" into the search input
- **THEN** the input value SHALL be "dress"

### Requirement: Category navigation strip

The template SHALL display a horizontal navigation strip below the search bar with category links.

#### Scenario: Category links render correctly

- **WHEN** the page loads
- **THEN** category links "New Arrivals", "Ladies", "Mens", "Accessories", and "Sale" SHALL be visible

#### Scenario: Active category is visually distinct

- **WHEN** the page loads
- **THEN** the "Accessories" link SHALL have a bold or underlined style to indicate it is active

### Requirement: Footer with Component Dock link

The template SHALL include a footer with the site name and a link to Component Dock.

#### Scenario: Footer renders correctly

- **WHEN** the page loads
- **THEN** the footer SHALL show "Querry"
- **AND** a link to https://www.componentdock.com/ SHALL be present with text "Component Dock"

### Requirement: Responsive design

The template SHALL be responsive across mobile and desktop viewports.

#### Scenario: Mobile layout stacks elements

- **WHEN** the viewport is 375px wide
- **THEN** the heading, search bar, and category nav SHALL all be visible
- **AND** the search input SHALL not overflow the viewport
