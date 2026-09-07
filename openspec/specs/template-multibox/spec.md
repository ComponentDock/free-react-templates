# Template: Multibox (Multiselect Snippet)

## Purpose

Multibox is a snippet/component template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Multiselect V19"
multi-select snippet (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a centered page with a heading and a styled multi-select
dropdown with tag-style selections. Multibox replaces the jQuery Chosen.js plugin
with a custom React multi-select component, matching the visual presentation.

- **Source slug:** `multiselect-19`
- **Source URL:** https://colorlib.com/wp/template/multiselect-19/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-19/ (404; screenshot + CSS used)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-19.jpg

## Requirements

### Requirement: Page layout

The system SHALL render a centered page with a light gray (#efefef) background
and a heading "Multi-Select #9" in Roboto font.

#### Scenario: Heading renders centered

- **GIVEN** the user loads the page
- **WHEN** the page finishes rendering
- **THEN** a heading "Multi-Select #9" is visible
- **AND** the heading is centered horizontally

#### Scenario: Light gray background

- **GIVEN** the user loads the page
- **WHEN** the body background is inspected
- **THEN** the background color is approximately #efefef

### Requirement: Multi-select component

The system SHALL render a multi-select component with a search input, tag-style
selections, and a dropdown list of options.

#### Scenario: Component renders with placeholder

- **GIVEN** the user loads the page with no selections
- **WHEN** the multi-select area is visible
- **THEN** an input field with placeholder "Select Categories" is shown
- **AND** the container has rounded corners and a subtle box-shadow

#### Scenario: Dropdown opens on click

- **GIVEN** the user has not selected any options
- **WHEN** the user clicks the multi-select input
- **THEN** a dropdown appears below the input
- **AND** the dropdown lists all available options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd

#### Scenario: Selecting an option adds a tag

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the "Design" option
- **THEN** a tag labeled "Design" appears inside the input area
- **AND** the dropdown remains open for further selections

#### Scenario: Selected tags have distinct styling

- **GIVEN** the user has selected one or more options
- **WHEN** the tags are rendered
- **THEN** each tag has a cream/yellow background (#e5e4cc)
- **AND** each tag has rounded corners (~3px border-radius)
- **AND** each tag has a close/remove button

#### Scenario: Removing a selected tag

- **GIVEN** the user has selected "Design" and "HTML5"
- **WHEN** the user clicks the close button on the "Design" tag
- **THEN** the "Design" tag is removed from the input area
- **AND** "Design" reappears in the dropdown options
- **AND** the "HTML5" tag remains

#### Scenario: Search/filter within multi-select

- **GIVEN** the user has opened the dropdown
- **WHEN** the user types "Boot" in the search input
- **THEN** only the "Bootstrap" option is shown in the dropdown
- **AND** other non-matching options are hidden

#### Scenario: No results found

- **GIVEN** the user has opened the dropdown
- **WHEN** the user types "zzz" in the search input
- **THEN** a "No results found" message is displayed

### Requirement: Variant color switching

The system SHALL support three color variants for selected tags: cream (#e5e4cc),
green (#c7f0db), and blue (#d3f4ff).

#### Scenario: Switching variant colors

- **GIVEN** the component is rendered with the default cream variant
- **WHEN** the user clicks the green variant button
- **THEN** the selected tag background changes to green (#c7f0db)
- **WHEN** the user clicks the blue variant button
- **THEN** the selected tag background changes to blue (#d3f4ff)

### Requirement: Responsive layout

The system SHALL maintain a centered layout on narrow viewports.

#### Scenario: Narrow viewport

- **GIVEN** the user views the page on a narrow viewport (< 768px)
- **WHEN** the layout adjusts
- **THEN** the heading and multi-select remain centered
- **AND** the multi-select container fills available width up to its max

### Requirement: Footer

The system SHALL render a footer linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the user loads the page
- **WHEN** the footer is visible
- **THEN** a "More templates at Component Dock" link points to https://www.componentdock.com/

### Requirement: Closing dropdown on outside click

The system SHALL close the dropdown when the user clicks outside the component.

#### Scenario: Outside click closes dropdown

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the multi-select component
- **THEN** the dropdown closes
