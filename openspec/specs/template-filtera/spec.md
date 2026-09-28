# Template: Filtera (Fancy Search Form with Advanced Filters)

## Purpose

Filtera is a single-page fancy search form template in the free-react-templates
monorepo. It recreates the ColorLib "Search Form V10" template
(https://colorlib.com/wp/template/colorlib-search-10/) under a different name.

## Requirements

### Requirement: Search input bar

The template SHALL display a full-width gradient search bar (blue-to-pink)
with a "Type Keywords" placeholder, a white search icon, and rounded pill shape.

#### Scenario: User types in search bar

- **WHEN** the user visits the page
- **THEN** a text input with placeholder "Type Keywords" is visible
- **AND** a search icon is displayed to the right of the input

#### Scenario: Search input accepts text

- **WHEN** the user types "shoes" into the search input
- **THEN** the input value updates to "shoes"

### Requirement: Advanced search panel

The template SHALL display an "ADVANCED SEARCH" panel below the search bar
with 6 filter dropdowns arranged in a 3-column grid (2 rows).

#### Scenario: Filter dropdowns are present

- **WHEN** the user visits the page
- **THEN** 6 filter dropdowns are visible: Category, Color, Size, Sale, Time, Type

#### Scenario: User selects a filter value

- **WHEN** the user selects "Red" from the Color dropdown
- **THEN** the Color dropdown value updates to "Red"

### Requirement: Result count display

The template SHALL display a result count (e.g. "108 results") in the
advanced search panel.

#### Scenario: Result count is visible

- **WHEN** the user visits the page
- **THEN** the text "108" and "results" are displayed

### Requirement: Reset functionality

The template SHALL provide a RESET button that clears all filter selections.

#### Scenario: Reset clears all filters

- **WHEN** the user selects values in the Color and Size dropdowns
- **AND** clicks the "RESET" button
- **THEN** all dropdowns return to their default empty values
- **AND** the search input is cleared

### Requirement: Search submission

The template SHALL provide a SEARCH button that triggers form submission
without page reload.

#### Scenario: Search button submits form

- **WHEN** the user clicks the "SEARCH" button
- **THEN** the form submission is handled without page navigation

### Requirement: Footer

The template SHALL display a footer with the template name and a link to
Component Dock (https://www.componentdock.com/).

#### Scenario: Footer link to Component Dock

- **WHEN** the user visits the page
- **THEN** a footer is visible with a link to "https://www.componentdock.com/"
- **AND** the link opens in a new tab
