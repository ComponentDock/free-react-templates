# Seekform — Full-page Search Form Template

## Purpose

Recreation of ColorLib "Search Form 6" (https://colorlib.com/wp/template/colorlib-search-6/) — a full-page search hero with a prominent search input, category pills, and a lifestyle background image.

## Requirements

### Requirement: Heading display

The template SHALL display a bold white heading "What are you looking for?" centered over the hero background.

#### Scenario: Heading is visible

- **WHEN** the user visits the Seekform page
- **THEN** a heading "What are you looking for?" is visible

### Requirement: Search input

The template SHALL provide a large, rounded search input with a magnifying glass icon that accepts user text.

#### Scenario: Search input is present and interactive

- **WHEN** the user visits the Seekform page
- **THEN** a search input is visible
- **WHEN** the user types "shoes" in the search input
- **THEN** the search input displays "shoes"

#### Scenario: Search submission

- **WHEN** the user types "test query" in the search input
- **AND** the user presses Enter
- **THEN** the search form is submitted

### Requirement: Category pills

The template SHALL display 5 category filter pills (New Arrivals, Ladies, Mens, Accessories, Sale) below the search input.

#### Scenario: All category pills are rendered

- **WHEN** the user visits the Seekform page
- **THEN** 5 category pills are visible: "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"

#### Scenario: Pill click triggers callback

- **WHEN** the user clicks a category pill
- **THEN** the onSelect callback is called with the category name

### Requirement: Background image

The template SHALL display a full-screen background image with a dark overlay for text readability.

#### Scenario: Background is displayed

- **WHEN** the user visits the Seekform page
- **THEN** a full-screen background image is displayed

### Requirement: Footer

The template SHALL include a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer contains Component Dock link

- **WHEN** the user visits the Seekform page
- **THEN** a link to "https://www.componentdock.com/" is present in the footer
- **AND** the text "Component Dock" is visible
