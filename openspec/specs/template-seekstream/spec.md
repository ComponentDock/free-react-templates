# Seekstream — Advanced Search Form

Recreation of ColorLib Search 8 (https://colorlib.com/wp/template/colorlib-search-8/)

## Purpose

Seekstream provides a full-viewport advanced search form with keyword input and six category filter dropdowns, styled with a split white/dark card over a gray background. Users SHALL be able to type keywords, filter by category, view result counts, and trigger search/reset actions.

## Requirements

### Requirement: Search form rendering

The page SHALL render a search form with aria-label "Search form" centered on a gray background.

#### Scenario: Page loads with search form

- **WHEN** the page loads
- **THEN** a form element with aria-label "Search form" is visible
- **AND** the document title is "Seekstream — Advanced Search Form"

### Requirement: Search bar

The search bar SHALL display a text input with "Type Keywords" placeholder and a magnifying glass icon.

#### Scenario: User types in search input

- **WHEN** the user types "shoes" in the search input
- **THEN** the input value updates to "shoes"

#### Scenario: Search icon is visible

- **WHEN** the page renders
- **THEN** a magnifying glass icon is displayed to the right of the input

### Requirement: Advanced search panel

The advanced search panel SHALL display "Advanced Search" heading, six filter dropdowns, result count, Reset button, and Search button.

#### Scenario: Filter dropdowns are rendered

- **WHEN** the page renders
- **THEN** six select elements are visible
- **AND** filter labels ACCESSORIES, COLOR, SIZE, SALE, TIME, and TYPE are displayed

#### Scenario: Default filter option

- **WHEN** the page renders
- **THEN** each dropdown has "All" as the default selected option

#### Scenario: Result count displayed

- **WHEN** the page renders
- **THEN** "108 results" text is displayed in the accent color

### Requirement: User interactions

The form SHALL support search, reset, and keyboard interactions.

#### Scenario: Search button triggers callback

- **WHEN** the user clicks the "Search" button
- **THEN** the onSearch callback is invoked

#### Scenario: Reset button triggers callback

- **WHEN** the user clicks the "Reset" button
- **THEN** the onReset callback is invoked

#### Scenario: Enter key is prevented

- **WHEN** the user presses Enter in the search input
- **THEN** form submission is prevented

#### Scenario: Filter selection fires onChange

- **WHEN** the user selects "Black" from the COLOR dropdown
- **THEN** the onChange callback is called with "Black"

### Requirement: Footer

The footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** the page renders
- **THEN** a "More templates at Component Dock" link points to https://www.componentdock.com/
