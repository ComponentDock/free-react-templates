# Dropnest — Courses Dropdown (ColorLib Dropdown 19)

> Recreation of ColorLib Dropdown 19 (https://colorlib.com/wp/template/dropdown-19/).

## Purpose

A dropdown menu designed for online education platforms. The dropdown displays
a trigger button labeled "Courses" and, when opened, reveals three category
columns: Design, Development, and Marketing. Each category has a heading and
a list of course links. The design uses a clean white card with subtle
shadow, category headings in brand color, and muted link text.

Design tokens: Roboto font (300/400/500/700), brand #3fc5f0, hover #12b5ea,
background #fafafa, card #ffffff, text #6c757d, heading #000000,
border rgba(0,0,0,0.1), shadow 0 15px 30px rgba(0,0,0,0.2).

## Requirements

### Requirement: Rendering

The page SHALL render a heading, a Courses trigger button, and a footer with Component Dock branding.

#### Scenario: Page renders correctly

- **WHEN** the app loads
- **THEN** the heading "Dropdown #19" is visible
- **AND** a "Courses" button is visible
- **AND** the footer shows "Dropnest" and a Component Dock link
- **AND** the document title is "Dropnest — Courses Dropdown"

### Requirement: Dropdown open and close

The dropdown SHALL open on trigger click, close on second click, outside click, or Escape key.

#### Scenario: Open dropdown

- **WHEN** the user clicks the Courses trigger
- **THEN** three category columns appear (Design, Development, Marketing)
- **AND** aria-expanded is "true" on the trigger

#### Scenario: Close on second click

- **WHEN** the dropdown is open and the user clicks the trigger again
- **THEN** the dropdown closes and categories are hidden

#### Scenario: Close on outside click

- **WHEN** the dropdown is open and the user clicks outside
- **THEN** the dropdown closes

#### Scenario: Close on Escape

- **WHEN** the dropdown is open and the user presses Escape
- **THEN** the dropdown closes

### Requirement: Category content

Each category SHALL display a heading and at least three course links.

#### Scenario: Course links visible

- **WHEN** the dropdown is open
- **THEN** each category shows its heading and course links
- **AND** all links have href="#"

### Requirement: Customization

The component SHALL accept custom category data via props.

#### Scenario: Custom categories

- **WHEN** custom categories are passed via the categories prop
- **THEN** only those categories are displayed
