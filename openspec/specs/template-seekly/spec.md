# Seekly — Search Form Hero Template

Recreation of ColorLib **Colorlib Search 1** (https://colorlib.com/wp/template/colorlib-search-1/).

## Purpose

A single-page search form hero template featuring a full-screen background image with a semi-transparent dark overlay, large heading text, and a search bar with two input fields and a search button. Minimal footer with Component Dock branding.

## Requirements

### Requirement: Hero section with background and heading

The template SHALL display a full-screen hero section with a background image, dark overlay, and the heading "Discover the Amazing City".

#### Scenario: Heading renders correctly

- **WHEN** the page loads
- **THEN** the heading "Discover the Amazing City" SHALL be visible

### Requirement: Search form with inputs and button

The template SHALL provide a search form with two text inputs and a search button.

#### Scenario: Search inputs have correct placeholders

- **WHEN** the page loads
- **THEN** the first input SHALL have placeholder "What are you looking for?"
- **AND** the second input SHALL have placeholder "location"
- **AND** a "Search" button SHALL be visible

#### Scenario: Form submission is handled

- **WHEN** the user clicks the Search button
- **THEN** the form SHALL prevent default submission

### Requirement: Footer with Component Dock link

The template SHALL include a footer with the site name and a link to Component Dock.

#### Scenario: Footer renders correctly

- **WHEN** the page loads
- **THEN** the footer SHALL show "Seekly"
- **AND** a link to https://www.componentdock.com/ SHALL be present with text "Component Dock"
