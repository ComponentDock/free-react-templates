# Spec: Searchpeak

## Purpose

Recreation of ColorLib "Colorlib Search 7" — an advanced search form with dropdown filters centered on a sky blue background. The form includes a search bar with result count, six filter dropdowns in a 2×3 grid, and Search/Delete action buttons.

> Source: https://colorlib.com/wp/template/colorlib-search-7/
> Preview: https://preview.colorlib.com/theme/colorlib-search-7/ (unavailable; design based on screenshot)

## Requirements

### Requirement: Page layout and background

The page SHALL render a centered, full-viewport container with a sky blue (#5BC0DE) background and Poppins font.

#### Scenario: Page loads with correct background

- **WHEN** the page loads
- **THEN** the viewport background color is sky blue
- **AND** the form card is centered both vertically and horizontally

### Requirement: Search bar with result count

The form SHALL contain a search bar with a magnifying glass icon, a "Search..." placeholder input, and a "108 results" count displayed on the right side in green text.

#### Scenario: Search input is visible

- **WHEN** the page loads
- **THEN** a search input with placeholder "Search..." is visible
- **AND** the text "108 results" is displayed next to the input
- **AND** a search icon is visible

#### Scenario: Search input is controlled

- **WHEN** I type "test" in the search input
- **THEN** the input value is "test"

### Requirement: Advanced Search section with six filters

The form SHALL contain an "Advanced Search" section with six dropdown filter selects arranged in a 2×3 grid: ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE. Each filter SHALL display an uppercase label and a select element with a down chevron icon.

#### Scenario: All six filter dropdowns are visible

- **WHEN** the page loads
- **THEN** six dropdown selects are visible
- **AND** the filter labels are ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE

#### Scenario: FilterSelect has "All" default option

- **WHEN** a filter select renders
- **THEN** the first option is "All"

#### Scenario: FilterSelect calls onChange

- **WHEN** I select an option in a FilterSelect with an onChange handler
- **THEN** the onChange callback is called with the selected value

### Requirement: Action buttons

The form SHALL contain a green rounded "Search" button and a dark "Delete" text link.

#### Scenario: Search button is clickable

- **WHEN** I click the "Search" button
- **THEN** no error occurs

#### Scenario: Delete button is clickable

- **WHEN** I click the "Delete" button
- **THEN** no error occurs

### Requirement: Form submission prevention

The form SHALL prevent default submission when the user presses Enter in the search input.

#### Scenario: Enter key does not navigate

- **WHEN** I press Enter in the search input
- **THEN** the form does not navigate away from the page

### Requirement: Footer with Component Dock link

The footer SHALL display "More templates at Component Dock" with a link to https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** a link to componentdock.com is visible
- **AND** the link text contains "Component Dock"

### Requirement: Document title

The app SHALL set the document title to "Searchpeak — Advanced Search Form" on mount.

#### Scenario: Title is set correctly

- **WHEN** the page loads
- **THEN** the document title is "Searchpeak — Advanced Search Form"
