# Template: Seekbar (Search Form Bar)

## Purpose

Seekbar is a full-page search form overlay on a background image in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free "Search Form Bar 24" design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a minimal, centered search bar with a text input,
category dropdown, and a blue search button — all overlaid on a scenic
background image. Seekbar follows the same structure and adds the repo's
standard dark-mode toggle and accessible patterns.

Seekbar lives in `apps/seekbar` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Background

The system SHALL render a full-viewport background image with a dark overlay
for readability.

#### Scenario: Background image

- **GIVEN** the Seekbar page is rendered
- **WHEN** the page loads
- **THEN** a background image element SHALL be present with aria-hidden="true"
- **AND** a dark overlay SHALL be present with aria-hidden="true"

### Requirement: Search form

The system SHALL render a centered search form with a text input, a category
dropdown, and a search button.

#### Scenario: Form structure

- **GIVEN** the Seekbar page is rendered
- **WHEN** the search form is displayed
- **THEN** it SHALL contain a form element with aria-label "Search form"
- **AND** it SHALL contain a text input with placeholder "What are you looking for?"
- **AND** it SHALL contain a category dropdown
- **AND** it SHALL contain a button labeled "Search"

#### Scenario: Search input accessible label

- **GIVEN** the Seekbar page is rendered
- **WHEN** the search input is displayed
- **THEN** the text input SHALL have an accessible label "Search query"

#### Scenario: Typing in search input

- **GIVEN** the Seekbar page is rendered
- **WHEN** the user types "modern furniture" in the search input
- **THEN** the input value SHALL be "modern furniture"

#### Scenario: Form submission prevention

- **GIVEN** the Seekbar page is rendered
- **WHEN** the user types "query" and presses Enter
- **THEN** the form SHALL not navigate away
- **AND** the input value SHALL remain "query"

#### Scenario: onSearch callback

- **GIVEN** the Seekbar page is rendered with an onSearch handler
- **WHEN** the user clicks the Search button
- **THEN** the onSearch handler SHALL be called with the query and selected category

### Requirement: Category dropdown

The system SHALL render a category dropdown with predefined options.

#### Scenario: Default category

- **GIVEN** the Seekbar page is rendered
- **WHEN** the category dropdown is displayed
- **THEN** it SHALL default to "All Categories"

#### Scenario: Category options

- **GIVEN** the Seekbar page is rendered
- **WHEN** the category dropdown options are listed
- **THEN** it SHALL contain options: All Categories, Furniture, Electronics, Clothing, Home & Garden, Sports

#### Scenario: Changing category

- **GIVEN** the Seekbar page is rendered
- **WHEN** the user selects "Electronics" from the dropdown
- **THEN** the dropdown value SHALL be "Electronics"

#### Scenario: Category passed to onSearch

- **GIVEN** the Seekbar page is rendered with an onSearch handler
- **WHEN** the user selects "Electronics" and clicks Search
- **THEN** the onSearch handler SHALL be called with the category "Electronics"

### Requirement: Footer

The system SHALL render a footer with copyright text and a Component Dock link.

#### Scenario: Copyright text

- **GIVEN** the Seekbar page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show copyright text including "Seekbar. All rights reserved."

#### Scenario: Component Dock link

- **GIVEN** the Seekbar page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to https://www.componentdock.com/
- **AND** the link SHALL open in a new tab
- **AND** the link SHALL have rel="noopener noreferrer"

### Requirement: Document title

The system SHALL set the document title to "Seekbar — Search Form Bar".

#### Scenario: Title on load

- **GIVEN** the Seekbar page is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Seekbar — Search Form Bar"
