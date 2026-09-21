# Galleryvue — Photography Gallery Template

Recreation of ColorLib "Capture" (https://colorlib.com/wp/template/capture/)

## Purpose

Galleryvue is a photography gallery website template featuring a fixed sidebar navigation, a 3-column masonry-style image gallery with hover overlays, and a dark footer with categories, archives, and contact information. It recreates the ColorLib "Capture" design faithfully using React, Tailwind CSS, and TypeScript.

## Requirements

### Requirement: Sidebar navigation

The template SHALL display a fixed left sidebar (20% width on desktop, collapsible on mobile) containing a logo, navigation links, and social media icons.

#### Scenario: Desktop sidebar renders with all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the sidebar is visible at the left side with the logo "Galleryvue", navigation links (Home, Gallery, About, Blog, Contact), and social icons (Facebook, Twitter, Instagram, LinkedIn)

#### Scenario: Mobile sidebar collapses

- **WHEN** the page loads on a mobile viewport
- **THEN** the sidebar is hidden and a hamburger menu button is visible

#### Scenario: Mobile sidebar toggles

- **WHEN** the user taps the hamburger menu button
- **THEN** the sidebar slides in from the left

### Requirement: Gallery grid

The template SHALL display a responsive grid of 12 photography items with background images, dark overlays, and hover-revealed text.

#### Scenario: Gallery renders 12 items

- **WHEN** the gallery section loads
- **THEN** 12 gallery items are rendered in a 3-column grid (1 column on mobile, 2 on tablet, 3 on desktop)

#### Scenario: Gallery items show overlay on hover

- **WHEN** the user hovers over a gallery item
- **THEN** the overlay darkens and the work title and tag become visible

### Requirement: Footer

The template SHALL display a dark footer with category links, archive links, contact information, and a Component Dock attribution link.

#### Scenario: Footer renders all columns

- **WHEN** the footer section loads
- **THEN** Category, Archives, and "Have a Questions?" columns are visible

#### Scenario: Footer has Component Dock link

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"
