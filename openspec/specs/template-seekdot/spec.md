# SeekDot — Search Form Bar Template

## Purpose

Recreate the ColorLib "Search Form Bar 03" design as a React 19 + Tailwind CSS 4 component. The template features a minimal search form with a distinctive coral circular search icon button, white rounded search bar with shadow, centered on a light gray background.

## Requirements

### Requirement: Page shell

The app SHALL render a full-viewport centered layout with light gray background (#f5f5f5) using Poppins font.

#### Scenario: Renders the page structure

- **WHEN** the app loads
- **THEN** a main container with class `bg-seekdot-bg` is rendered
- **AND** the heading "SeekDot" is displayed at the top center
- **AND** the document title is set to "SeekDot — Search Form"

### Requirement: Search bar

The app SHALL render a search form with a coral circular icon button and white rounded input with drop shadow.

#### Scenario: Default search form

- **WHEN** the app loads
- **THEN** a form with aria-label "Search form" is present
- **AND** a search input with placeholder "Search..." is visible
- **AND** a search icon button with aria-label "Search" is visible

#### Scenario: Coral circular icon button

- **WHEN** the app loads
- **THEN** the search icon button has a coral background (#e86c5e)
- **AND** the button is circular (rounded-full, 50x50px)
- **AND** the icon inside is white

#### Scenario: User types in search input

- **WHEN** the user types "hello" into the search input
- **THEN** the input value updates to "hello"

#### Scenario: Form submission

- **WHEN** the user types "test query" and presses Enter
- **THEN** the onSubmit callback is called with "test query"

#### Scenario: Empty submission

- **WHEN** the user presses Enter without typing
- **THEN** the onSubmit callback is called with empty string

#### Scenario: Icon click focuses input

- **WHEN** the user clicks the search icon button
- **THEN** the search input receives focus

#### Scenario: Custom placeholder

- **WHEN** the SearchBar receives placeholder="Find something..."
- **THEN** the input shows "Find something..." as placeholder

### Requirement: Footer

The app SHALL render a footer with copyright text and a link to Component Dock.

#### Scenario: Footer content

- **WHEN** the app loads
- **THEN** the footer displays "SeekDot. All rights reserved."
- **AND** a link to https://www.componentdock.com/ is present
- **AND** the link text is "Component Dock"
- **AND** the link opens in a new tab
