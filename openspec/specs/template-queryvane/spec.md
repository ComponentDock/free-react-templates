# Queryvane — Search Form Bar Template

## Purpose

Recreation of ColorLib "Search Form Bar 17"
(https://colorlib.com/wp/template/search-form-bar-17/).
A toggleable search form bar with a navbar, overlay search panel, and
Component Dock footer. Preview was unreachable; design based on screenshot analysis.

## Requirements

### Requirement: Navbar displays brand and navigation

The navbar SHALL display the brand name "Queryvane" on the left and navigation links (Home, About, Contact) on the right, with a search icon toggle button.

#### Scenario: Navbar renders correctly

- **GIVEN** the page loads
- **THEN** the navbar displays "Queryvane" as the brand name
- **AND** the navbar shows Home, About, and Contact links
- **AND** a search icon button is visible

### Requirement: Search overlay toggles on icon click

The search overlay SHALL appear below the navbar when the search icon is clicked, and SHALL hide when the close button is clicked.

#### Scenario: Opening the search overlay

- **GIVEN** the search overlay is hidden
- **WHEN** the user clicks the search icon
- **THEN** the search overlay becomes visible
- **AND** the search input receives focus

#### Scenario: Closing the search overlay

- **GIVEN** the search overlay is visible
- **WHEN** the user clicks the close button
- **THEN** the search overlay becomes hidden

### Requirement: Search form functionality

The search form SHALL contain an input field with "Search..." placeholder and a "Search" submit button. Submitting with a query clears the input.

#### Scenario: Typing in search input

- **GIVEN** the search overlay is visible
- **WHEN** the user types in the search input
- **THEN** the input displays the typed text

#### Scenario: Submitting search form

- **GIVEN** the search overlay is visible with text in the input
- **WHEN** the user clicks the Search button
- **THEN** the input is cleared

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **GIVEN** the page loads
- **THEN** the footer displays a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"
- **AND** the link opens in a new tab
