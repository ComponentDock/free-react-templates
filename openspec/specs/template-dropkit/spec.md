# Spec: Dropkit — Bootstrap Dropdown Showcase Template

> Recreation of ColorLib "Dropdown 01" (https://colorlib.com/wp/template/dropdown-01/)

## Purpose

A single-page React component showcase displaying four Bootstrap-style dropdown menu variations (dropdown, dropup, dropright, dropleft), each with a regular and split button variant. Serves as a reference implementation for interactive dropdown menus built with React and Tailwind CSS.

## Requirements

### Requirement: Page structure and heading

The page SHALL render a centered heading "Dropdown" at the top, followed by a 4-column responsive grid of dropdown variations, and a footer at the bottom.

#### Scenario: Page renders with all sections

- **WHEN** the user visits the Dropkit page
- **THEN** a heading with text "Dropdown" is visible
- **AND** four variation columns are displayed: Dropdown, Dropup, Dropright, Dropleft
- **AND** a footer with "Component Dock" link is present

### Requirement: Regular dropdown button behavior

Each variation column SHALL contain a regular dropdown button that toggles a dropdown menu on click.

#### Scenario: Clicking dropdown button opens menu

- **WHEN** the user clicks the "Dropdown" button in the Dropdown Variation column
- **THEN** a dropdown menu appears with items: Dropdown, Active, Something else here, Separated link

#### Scenario: Clicking menu item closes menu

- **WHEN** a dropdown menu is open
- **AND** the user clicks a menu item
- **THEN** the menu closes

### Requirement: Split dropdown button behavior

Each variation column SHALL contain a split dropdown with a main action button and a separate caret toggle button.

#### Scenario: Split caret toggles menu

- **WHEN** the user clicks the split dropdown caret button
- **THEN** the dropdown menu toggles open/closed

### Requirement: Dropup, Dropright, Dropleft positioning

The Dropup, Dropright, and Dropleft variations SHALL position their menus in the corresponding direction relative to the button.

#### Scenario: Dropup opens above button

- **WHEN** the user clicks the "Dropup" button
- **THEN** the menu appears above the button

#### Scenario: Dropright opens to the right

- **WHEN** the user clicks the "Dropright" button
- **THEN** the menu appears to the right of the button

#### Scenario: Dropleft opens to the left

- **WHEN** the user clicks the "Dropleft" button
- **THEN** the menu appears to the left of the button

### Requirement: Click outside closes menu

Any open dropdown menu SHALL close when the user clicks outside the dropdown container.

#### Scenario: Click outside closes open menu

- **GIVEN** a dropdown menu is open
- **WHEN** the user clicks outside the menu area
- **THEN** the menu closes

### Requirement: Escape key closes menu

Any open dropdown menu SHALL close when the user presses the Escape key.

#### Scenario: Escape closes open menu

- **GIVEN** a dropdown menu is open
- **WHEN** the user presses Escape
- **THEN** the menu closes

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer has Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to componentdock.com is present with text "Component Dock"
- **AND** the link opens in a new tab

### Requirement: Design token fidelity

The template SHALL use the following design tokens from the original ColorLib preview:

- Font: Poppins (Google Fonts)
- Primary brand color: #0075f6
- Button border-radius: 5px
- Background: #fafafa

#### Scenario: Design tokens applied

- **WHEN** the page renders
- **THEN** the font family includes Poppins
- **AND** primary buttons use the #0075f6 color
