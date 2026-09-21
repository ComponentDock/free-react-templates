# Luma — Photography Portfolio Template

Recreation of ColorLib "Photon" (https://colorlib.com/wp/template/photon/).

## Purpose

Luma is a photography portfolio single-page template featuring a full-screen image carousel with category slides, a sticky navbar with social links, and a branded footer. The design uses a teal (#20c997) accent, Josefin Sans font, and dark overlay on hover.

## Requirements

### Requirement: Navbar renders with brand and navigation

The template SHALL display a sticky navbar with the brand name "Luma", navigation links (Home, Gallery, Services, Blog, About, Reviews, Contact), and social icon links (Facebook, Twitter, Instagram, YouTube).

#### Scenario: Desktop navbar elements

- **WHEN** the page loads
- **THEN** the navbar displays the brand name "Luma"
- **AND** all 7 navigation links are visible
- **AND** all 4 social icon links are rendered

#### Scenario: Mobile menu toggle

- **WHEN** the mobile toggle button is clicked
- **THEN** the mobile menu opens with navigation links
- **AND** clicking a navigation link closes the mobile menu

### Requirement: Hero carousel displays photography categories

The template SHALL display a full-screen image carousel with 7 category slides (Nature, Portrait, People, Architecture, Animals, Sports, Travel), each with a background image, centered title, and "More Photos" button. Navigation arrows and pagination dots SHALL be provided.

#### Scenario: Carousel renders all slides

- **WHEN** the page loads
- **THEN** 7 category slides are rendered in the DOM
- **AND** prev/next navigation buttons are visible
- **AND** 7 pagination dots are rendered

#### Scenario: Carousel navigation

- **WHEN** the next button is clicked
- **THEN** the carousel advances to the next slide
- **WHEN** the previous button is clicked
- **THEN** the carousel wraps to the previous slide

#### Scenario: Pagination dot navigation

- **WHEN** a pagination dot is clicked
- **THEN** the corresponding slide becomes visible

### Requirement: Footer displays copyright and Component Dock link

The template SHALL display a dark footer with copyright text and a "Component Dock" link pointing to https://www.componentdock.com/ that opens in a new tab.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer displays copyright text with "Luma Photography"
- **AND** a "Component Dock" link is rendered with href "https://www.componentdock.com/"
- **AND** the link opens in a new tab (target="_blank" rel="noopener noreferrer")

### Requirement: App composes all sections

The App component SHALL render Navbar, Hero carousel, and Footer in the correct order.

#### Scenario: Full page render

- **WHEN** the App renders
- **THEN** the navbar with brand name is visible
- **AND** the hero carousel is visible
- **AND** the footer with Component Dock link is visible
