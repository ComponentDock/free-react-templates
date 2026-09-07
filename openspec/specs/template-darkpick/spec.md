# Template: DarkPick (Bootstrap Multiselect)

## Purpose

DarkPick is a single-page MULTISELECT DROPDOWN component in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Multiselect 09" free template (source: https://colorlib.com/wp/template/multiselect-09/), built under a DIFFERENT name (**DarkPick**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-themed Bootstrap multiselect dropdown list component: a near-black page background with a centered heading and a Select2-powered multiselect widget. The design features a dark (#111) page background, white heading text, golden yellow (#f6c523) accent for selected/highlighted items, semi-transparent dark dropdown cards (rgba(0,0,0,0.8)), and Font Awesome checkmark icons for selected options.

**WHAT MAKES DARKPICK DISTINCT (signature behaviors):**

1. Dark near-black page background (#111) with white heading
2. Golden yellow accent (#f6c523) for selected items and highlights
3. Semi-transparent dark dropdown card (rgba(0,0,0,0.8))
4. Font Awesome checkmark icons for selected items
5. Lato font family (300, 400, 700)
6. Smooth 0.3s transitions on selection state changes
7. Box shadow: `0px 3px 22px -15px rgba(0,0,0, 0.8)`

## Source mapping

- **ColorLib source:** Multiselect 09
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-09/ (fetched successfully)
- **New name:** darkpick
- **Category:** Bootstrap Multiselect Dropdown (Dark Theme)

## Design tokens

Extracted from the live preview HTML + CSS stylesheet analysis.

### Colors

| Token                  | Value                          | Usage                                       |
| ---------------------- | ------------------------------ | ------------------------------------------- |
| `--color-bg`           | `#111` (near-black)            | Page background                             |
| `--color-card`         | `rgba(0, 0, 0, 0.8)`          | Dropdown selection area background          |
| `--color-card-hover`   | `rgba(255, 255, 255, 0.1)`    | Highlighted/hovered option background       |
| `--color-selected-bg`  | `#000`                         | Selected option background                  |
| `--color-text`         | `#fff`                         | Heading and default text color              |
| `--color-text-muted`   | `rgba(255, 255, 255, 0.8)`    | Search field text, secondary text           |
| `--color-accent`       | `#f6c523` (golden yellow)      | Selected items, highlighted items, accents  |
| `--color-border`       | `rgba(0, 0, 0, 0.1)`          | Focus border color                          |
| `--color-checkmark`    | `#f6c523` (via Font Awesome)   | Checkmark icon on selected items            |

### Typography

| Element  | Font                 | Weight | Usage                        |
| -------- | -------------------- | ------ | ---------------------------- |
| Body     | Lato (Google Fonts)  | 400    | Default text                 |
| Heading  | Lato                 | 700    | Component heading ("Multiselect #09") |
| Light    | Lato                 | 300    | Light weight text variants   |
| Icons    | Font Awesome 4.7     | —      | Checkmark icons for selected |

### Shapes & Spacing

| Token           | Value                                             | Usage                            |
| --------------- | ------------------------------------------------- | -------------------------------- |
| Card radius     | 4px                                               | Dropdown container corners       |
| Card shadow     | `0px 3px 22px -15px rgba(0, 0, 0, 0.8)`         | Dropdown elevation               |
| Focus shadow    | `0px 3px 22px -15px rgba(0, 0, 0, 0.63)`         | Dropdown focus state shadow      |
| Border width    | 2px (transparent default, visible on focus)       | Dropdown border                  |
| Section padding | 7em 0                                             | Vertical section spacing         |
| Heading size    | 28px                                              | Section heading font size        |
| Option padding  | 20px right                                         | Dropdown option row spacing      |

## Requirements

### Requirement: Page layout

The system SHALL render a full-height page with a dark near-black background (#111) containing a centered white heading and the multiselect dropdown component.

#### Scenario: Page renders with heading

- **GIVEN** the user visits the DarkPick page
- **THEN** a dark background is visible across the full page
- **AND** a centered heading "DarkPick" is displayed in white (#fff)
- **AND** the page title is "DarkPick — Dark Multiselect Dropdown Template"

#### Scenario: Heading text

- **GIVEN** the page is rendered
- **THEN** the heading SHALL display "DarkPick"
- **AND** the heading SHALL be white (#fff) at 28px font size

### Requirement: Dropdown trigger

The system SHALL render a dark dropdown trigger element that opens the option list on click.

#### Scenario: Dropdown trigger visible

- **GIVEN** the page is rendered
- **THEN** a dropdown trigger element is visible below the heading
- **AND** the trigger has a dark semi-transparent background (rgba(0,0,0,0.8))
- **AND** the trigger has a 4px border radius

#### Scenario: Dropdown opens on click

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the dropdown trigger
- **THEN** a list of options appears below the trigger
- **AND** the trigger reports `aria-expanded="true"`

#### Scenario: Dropdown closes on second click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the dropdown trigger again
- **THEN** the option list is hidden
- **AND** the trigger reports `aria-expanded="false"`

#### Scenario: Dropdown closes on click outside

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown closes

#### Scenario: Dropdown closes on Escape

- **GIVEN** the dropdown is open
- **WHEN** the user presses Escape
- **THEN** the dropdown closes

### Requirement: Option selection with golden accent

The system SHALL allow users to select and deselect individual options, displaying golden yellow (#f6c523) checkmark icons and backgrounds for selected items.

#### Scenario: Single option selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks an unselected option
- **THEN** a golden yellow checkmark icon (Font Awesome \f00c) appears before the option text
- **AND** the option row background changes to #000
- **AND** the option text color changes to #f6c523

#### Scenario: Single option deselection

- **GIVEN** the dropdown is open with an option selected
- **WHEN** the user clicks the selected option
- **THEN** the checkmark icon is removed
- **AND** the option row background returns to transparent
- **AND** the option text returns to default color

#### Scenario: Multiple option selection

- **GIVEN** the dropdown is open
- **WHEN** the user selects multiple options
- **THEN** all selected options show golden yellow checkmarks
- **AND** the dropdown trigger displays the count of selected items

#### Scenario: Highlighted option styling

- **GIVEN** the dropdown is open
- **WHEN** the user hovers over an unselected option
- **THEN** the option background changes to rgba(255, 255, 255, 0.1)
- **AND** the option text color changes to #f6c523

### Requirement: Smooth transitions

The system SHALL apply smooth CSS transitions to selection state changes.

#### Scenario: Selection transition

- **GIVEN** the dropdown is open
- **WHEN** the user selects or deselects an option
- **THEN** the background and color changes animate with a 0.3s transition
- **AND** the transition respects `prefers-reduced-motion: reduce` (no animation)

### Requirement: Search functionality

The system SHALL provide a search input within the dropdown to filter options.

#### Scenario: Search input visible

- **GIVEN** the dropdown is open
- **THEN** a search input field is visible at the top of the option list
- **AND** the search input has white text (rgba(255, 255, 255, 0.8))

#### Scenario: Search filters options

- **GIVEN** the dropdown is open with the search input focused
- **WHEN** the user types a search term
- **THEN** only options matching the search term are displayed

### Requirement: Option list with icons

The system SHALL display options with Font Awesome icons to the left of the option text.

#### Scenario: Option icons visible

- **GIVEN** the dropdown is open
- **THEN** each option row displays an icon to the left of the option text
- **AND** unselected options show a grey/neutral icon
- **AND** selected options show a golden yellow checkmark icon

### Requirement: Accessibility

The system SHALL provide appropriate ARIA attributes for screen readers.

#### Scenario: ARIA attributes

- **GIVEN** the page is rendered
- **THEN** the trigger SHALL have `aria-haspopup="listbox"`
- **AND** the trigger SHALL have `aria-expanded` reflecting open state
- **AND** the option list SHALL have `role="listbox"` and `aria-multiselectable`
- **AND** each option SHALL have `role="option"` and `aria-selected`

### Requirement: Footer

The system SHALL render a footer linking to Component Dock.

#### Scenario: Footer link

- **GIVEN** the page is rendered
- **THEN** a footer is visible with a link to https://www.componentdock.com/
- **AND** the link text is "Component Dock"
- **AND** the link opens in a new tab
