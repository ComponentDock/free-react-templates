# Spec: Wayfare — Travel Search Form

Recreation of ColorLib "Search Form V11" (https://colorlib.com/wp/template/colorlib-search-11/).

## Purpose

A travel search form component for hotel booking websites. Features a full-viewport background image with dark overlay, tabbed search type selector, and a search form with destination, dates, travelers, flight/car options, and an orange search button.

## Requirements

### Requirement: SearchTabs

The component SHALL render four tab buttons (HOTEL ONLY, HOTEL+FLIGHT, HOTEL+FLIGHT+CAR, HOTEL+CAR) with appropriate icons, defaulting to HOTEL ONLY as active.

#### Scenario: Default active tab

- **WHEN** the component renders without a controlled activeTab
- **THEN** HOTEL ONLY has aria-selected=true and other tabs have aria-selected=false

#### Scenario: Click changes active tab

- **WHEN** the user clicks a different tab
- **THEN** that tab becomes active (aria-selected=true) and the previous tab becomes inactive

#### Scenario: Controlled mode

- **WHEN** activeTab prop is provided
- **THEN** the specified tab is rendered as active regardless of internal state

#### Scenario: onTabChange callback

- **WHEN** the user clicks a tab
- **THEN** onTabChange is called with the tab id

### Requirement: SearchForm

The component SHALL render a form with destination text input, check-in/check-out date inputs, travelers dropdown, "Add a Flight" and "Add a Car" checkboxes, and a Search button. Flight checkbox SHALL default to checked.

#### Scenario: Form fields render

- **WHEN** the form renders
- **THEN** all fields (destination, check-in, check-out, travelers, checkboxes, search button) are visible

#### Scenario: Destination input

- **WHEN** the user types in the destination field
- **THEN** the field value updates to reflect the typed text

#### Scenario: Travelers dropdown

- **WHEN** the user selects a different option
- **THEN** the dropdown value changes to the selected option

#### Scenario: Checkbox toggling

- **WHEN** the user clicks the flight checkbox (initially checked)
- **THEN** it becomes unchecked

#### Scenario: Form submission

- **WHEN** the user fills in fields and clicks Search
- **THEN** onSubmit is called with the current form data object

### Requirement: Footer

The footer SHALL display the brand name "Wayfare", a tagline, and a link to https://www.componentdock.com/ labeled "Component Dock".

#### Scenario: Component Dock link

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" and target=_blank is present

### Requirement: App composition

The App SHALL compose the search heading, tabs, form, and footer with a full-viewport background image.

#### Scenario: Layout

- **WHEN** the app renders
- **THEN** a heading "Search Hotels", tabs, form, and footer are all present in the document
