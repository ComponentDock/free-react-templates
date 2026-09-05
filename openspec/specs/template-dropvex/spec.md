# Spec: DropVex — Split-Button Dropdown Navbar

> Recreation of ColorLib Dropdown 08 (https://colorlib.com/wp/template/dropdown-08/)

## Purpose

Provide a clean, minimal split-button dropdown navbar component featuring a brand bar on the left, a hamburger toggle on the right, and a smooth dropdown panel with navigation items.

## Requirements

### Requirement: Page renders with heading and footer

Users SHALL see a page titled "Dropdown Navbar" with a "DropVex" branded footer linking to Component Dock.

#### Scenario: Heading is visible

- **WHEN** the page loads
- **THEN** the heading "Dropdown Navbar" is visible centered on the page
- **AND** the footer shows "DropVex"
- **AND** the footer has a link to componentdock.com

### Requirement: Navigation bar visible with brand and hamburger

Users SHALL see a full-width blue navigation bar with the brand name "Splash" on the left and a hamburger icon button on the right.

#### Scenario: Brand and hamburger are rendered

- **WHEN** the page loads
- **THEN** the brand name "Splash" is displayed in white uppercase text
- **AND** a hamburger menu icon button is displayed on the right side of the bar

### Requirement: Hamburger toggle opens and closes dropdown

Users SHALL be able to open and close the dropdown menu by clicking the hamburger button.

#### Scenario: Click opens menu

- **WHEN** I click the hamburger menu button
- **THEN** a dropdown menu appears below the navigation bar
- **AND** the menu contains items: Home, About, Services, Blog, Contact

#### Scenario: Click closes open menu

- **GIVEN** the dropdown menu is open
- **WHEN** I click the hamburger button again
- **THEN** the dropdown menu is not visible

### Requirement: Dropdown items show arrow icons

Each dropdown item SHALL have label text on the left and a right-arrow icon on the right.

#### Scenario: Items have arrow indicators

- **GIVEN** the dropdown menu is open
- **THEN** each menu item has label text on the left
- **AND** each menu item has a chevron-right icon on the right

### Requirement: Dropdown closes on outside click

Users SHALL be able to close the dropdown by clicking outside of it.

#### Scenario: Click outside closes menu

- **GIVEN** the dropdown menu is open
- **WHEN** I click outside the dropdown area
- **THEN** the dropdown menu is not visible

### Requirement: Dropdown closes on Escape key

Users SHALL be able to close the dropdown by pressing the Escape key.

#### Scenario: Escape closes menu

- **GIVEN** the dropdown menu is open
- **WHEN** I press the Escape key
- **THEN** the dropdown menu is not visible

#### Scenario: Non-Escape key does not close menu

- **GIVEN** the dropdown menu is open
- **WHEN** I press a key other than Escape
- **THEN** the dropdown menu remains visible

### Requirement: Brand name styling

The brand name SHALL be styled in uppercase white text.

#### Scenario: Brand is uppercase

- **WHEN** the page loads
- **THEN** the brand name is displayed in uppercase white text
