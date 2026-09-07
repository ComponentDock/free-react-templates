# Template: Tagpick (Form Element — Multi-Select Tag Picker)

## Purpose

Recreation of ColorLib "Multiselect 19" — a free multi-select category picker
using the Chosen jQuery plugin and Bootstrap Framework.

- **Source**: https://colorlib.com/wp/template/multiselect-19/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-19/
- **Source slug**: `multiselect-19`
- **New name**: `tagpick`
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the preview's `css/style.css` and `css/chosen.css`:

### Colors

| Token               | Value                      | Usage                                      |
|----------------------|----------------------------|--------------------------------------------|
| page-bg              | `#efefef`                  | Body / page background                     |
| text-heading         | `#26282b` (default)        | h2 heading text                            |
| text-secondary       | `#b3b3b3`                  | Paragraph text, font-weight 300            |
| input-bg             | `#ffffff`                  | Multi-select input background              |
| input-shadow         | `0 1px 4px rgba(0,0,0,0.1)`| Box shadow on choices container            |
| tag-bg-color-1       | `#e5e4cc`                  | Tag chip background — muted yellow-green   |
| tag-bg-color-2       | `#c7f0db`                  | Tag chip background — mint green           |
| tag-bg-color-3       | `#d3f4ff`                  | Tag chip background — light blue           |
| dropdown-shadow      | `0 15px 30px rgba(0,0,0,0.2)` | Elevated dropdown panel shadow          |

### Typography

| Token         | Value      | Usage                      |
|---------------|------------|----------------------------|
| body-font     | `Roboto`   | Body text (weight 300–400) |
| heading-font  | `Roboto`   | Headings (same family)     |
| input-font    | `Roboto`   | Search input (14px)        |

### Spacing and Radii

| Token              | Value  | Usage                         |
|--------------------|--------|-------------------------------|
| container-padding  | `7rem` | Vertical padding on `.content`|
| tag-padding        | `7px 10px 7px 26px` | Tag chip internal padding |
| input-height       | `32px` | Search text input height      |
| border-radius      | `4px`  | Choices container, dropdown   |

### Layout

- Single centered column (`col-md-5` in Bootstrap → `max-w-md mx-auto` in Tailwind)
- No navbar, no footer in the original (pure form snippet)
- Full-width select component within its column

## Requirements

### Requirement: Page renders correctly

The page SHALL display a centered heading and a multi-select tag picker below it.

#### Scenario: Page renders correctly

- **GIVEN** the user navigates to the tagpick page
- **THEN** a centered heading "Category Picker" is visible
- **AND** a multi-select input container is visible below the heading
- **AND** the page background is light gray (#efefef)

### Requirement: Multi-select input displays placeholder

The multi-select input SHALL show a placeholder prompt when no tags are selected.

#### Scenario: Empty state placeholder

- **GIVEN** the user loads the page with no selections
- **THEN** the input area shows "Select Categories" as placeholder text
- **AND** no tag chips are visible

### Requirement: Dropdown opens to show options

Clicking the input area SHALL open a dropdown panel listing available categories.

#### Scenario: Dropdown opens on click

- **GIVEN** the user sees the multi-select input
- **WHEN** the user clicks on the input area
- **THEN** a dropdown panel appears below the input
- **AND** the dropdown lists category options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd

### Requirement: Single category selection

Selecting a category SHALL add it as a tag chip inside the input area.

#### Scenario: Single category selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Design"
- **THEN** a tag chip labeled "Design" appears in the input area
- **AND** the dropdown remains open for further selections
- **AND** "Design" is removed from the dropdown option list (or shown as selected)

### Requirement: Multiple category selection

Multiple categories SHALL be selectable simultaneously, each shown as a separate tag chip.

#### Scenario: Multiple category selection

- **GIVEN** the dropdown is open
- **WHEN** the user selects "Design"
- **AND** the user selects "CSS3"
- **AND** the user selects "jQuery"
- **THEN** three tag chips are visible in the input area
- **AND** each chip has its own background color from the color palette

### Requirement: Tag color cycling

Selected tags SHALL cycle through the three brand tag colors in order.

#### Scenario: Tag color cycling

- **GIVEN** the user selects "Design"
- **THEN** the tag chip background is #e5e4cc (color-1)
- **WHEN** the user selects "HTML5"
- **THEN** the tag chip background is #c7f0db (color-2)
- **WHEN** the user selects "CSS3"
- **THEN** the tag chip background is #d3f4ff (color-3)
- **WHEN** the user selects "jQuery"
- **THEN** the tag chip background wraps back to #e5e4cc (color-1)

### Requirement: Tag removal via close button

Each tag chip SHALL have a close (×) button that removes the tag when clicked.

#### Scenario: Tag removal via close button

- **GIVEN** the user has selected "Design" and "CSS3"
- **WHEN** the user clicks the close button on the "Design" tag
- **THEN** the "Design" tag is removed from the input area
- **AND** only the "CSS3" tag remains

### Requirement: Search filters options

The input area SHALL accept text input to filter the dropdown options.

#### Scenario: Search filters options

- **GIVEN** the dropdown is open
- **WHEN** the user types "Boot" in the search field
- **THEN** only options containing "Boot" are visible (Bootstrap)
- **AND** other options are hidden

#### Scenario: Search with no results

- **GIVEN** the dropdown is open
- **WHEN** the user types "ZZZ" in the search field
- **THEN** no options are visible in the dropdown

### Requirement: Dropdown closes on outside click

Clicking outside the multi-select component SHALL close the dropdown.

#### Scenario: Dropdown closes on outside click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the component area
- **THEN** the dropdown panel closes

### Requirement: Keyboard accessibility

The multi-select SHALL support keyboard navigation.

#### Scenario: Keyboard accessibility

- **GIVEN** the multi-select input is focused
- **WHEN** the user presses Enter or Space
- **THEN** the dropdown opens
- **AND** the user can navigate options with arrow keys
- **AND** the user can close with Escape

### Requirement: Responsive layout

The component SHALL be responsive on mobile viewports.

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device (< 768px)
- **THEN** the heading is centered
- **AND** the multi-select component takes full width within its container

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **GIVEN** the page is loaded
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link opens in a new tab

## Verification checklist

- [ ] Page renders with light gray (#efefef) background
- [ ] Centered heading "Category Picker" in Roboto font
- [ ] Multi-select input with "Select Categories" placeholder
- [ ] Dropdown opens showing 8 categories (Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd)
- [ ] Selecting a category adds a colored tag chip
- [ ] Tags cycle through #e5e4cc → #c7f0db → #d3f4ff colors
- [ ] Tag close button (×) removes the tag
- [ ] Search input filters dropdown options in real time
- [ ] Dropdown closes on outside click
- [ ] Keyboard navigation works (Enter/Space to open, Escape to close)
- [ ] Responsive: full-width on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
