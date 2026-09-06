# Template: LangBox (Bootstrap Multiselect Dropdown)

## Purpose

LangBox is a single-page MULTISELECT DROPDOWN component in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Multiselect 03" free template (source: https://colorlib.com/wp/template/multiselect-03/), built under a DIFFERENT name (**LangBox**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap multiselect dropdown list component using Semantic UI's fluid selection dropdown: a centered page with a heading ("Multiselect #03"), a label ("Select Language"), and a multi-select dropdown that lets users select multiple programming languages via checkboxes. The design features a clean white background, Lato font, blue accent color (#3e64ff), and subtle grey borders (#e6e6e6) on the dropdown.

**WHAT MAKES LANBOX DISTINCT (signature behaviors):**

1. Centered page layout with Semantic UI-style fluid multiselect dropdown
2. Blue accent color (#3e64ff) for active/selected items and links
3. Multi-select with tag display showing selected items
4. Keyboard navigation (ArrowUp/Down, Space, Escape)
5. Click outside to close
6. "All" option that selects all languages

## Source mapping

- **ColorLib source:** Multiselect 03
- **Preview URL:** https://preview.colorlib.com/theme/multiselect-03/ (404 — preview unreachable, fell back to live DOM at https://preview.colorlib.com/theme/bootstrap/multiselect-03/ + CSS analysis)
- **New name:** langbox
- **Category:** Bootstrap Multiselect Dropdown

## Design tokens

Extracted from live preview DOM + CSS stylesheet analysis (preview at https://preview.colorlib.com/theme/bootstrap/multiselect-03/).

### Colors

| Token                  | Value     | Usage                                     |
| ---------------------- | --------- | ----------------------------------------- |
| `--color-bg`           | `#fff`    | Page background (white)                   |
| `--color-card`         | `#fff`    | Dropdown background                       |
| `--color-border`       | `#e6e6e6` | Dropdown borders and menu separators      |
| `--color-text`         | `gray`    | Default text color                        |
| `--color-text-heading` | `#000`    | Heading text color                        |
| `--color-accent`       | `#3e64ff` | Brand blue for active items, links        |
| `--color-hover`        | `#3e64ff` | Hover state color (same as accent)        |
| `--color-menu-shadow`  | `rgba(0,0,0,0.41)` (blur 19px offset -15px) | Active dropdown shadow |

### Typography

| Element | Font                 | Weight | Usage                   |
| ------- | -------------------- | ------ | ----------------------- |
| Body    | Lato (Google Fonts)  | 400    | Default text            |
| Labels  | Lato                 | 400    | Dropdown option labels  |
| Heading | Lato                 | 400    | Component heading       |
| Dropdown items | Lato           | 400    | Menu item text (13px)   |
| Active selected | Lato           | 700    | Bold for selected text  |

### Shapes & Spacing

| Token           | Value                            | Usage                  |
| --------------- | -------------------------------- | ---------------------- |
| Section padding | 7em top/bottom                   | Main section spacing   |
| Dropdown padding | 10px                           | Internal dropdown spacing |
| Menu item border | 1px solid #e6e6e6 (top)        | Separator between items |
| Menu item font  | 13px                             | Individual option rows |
| Dropdown active shadow | 0px 3px 19px -15px rgba(0,0,0,0.41) | Open dropdown shadow |
| Dropdown border radius | Default Semantic UI          | Rounded corners        |

## Requirements

### Requirement: Page layout

The system SHALL render a full-height page with a white background (#fff) containing a centered section with the multiselect dropdown component.

#### Scenario: Page renders with dropdown

- **GIVEN** the user visits the LangBox page
- **THEN** a centered section is visible on a white background
- **AND** the section contains a heading and a dropdown component
- **AND** the page title is "LangBox — Multiselect Dropdown Template"

#### Scenario: Heading text

- **GIVEN** the page is rendered
- **THEN** the section SHALL display the heading "Select Language"

### Requirement: Dropdown shows options

The dropdown SHALL display 10 programming language options plus an "All" option: PHP, Javascript, Java, jQuery, SQL, Wordpress, Python, .Net, HTML, CSS.

#### Scenario: Dropdown displays all options

- **GIVEN** the page loads
- **WHEN** the user views the dropdown
- **THEN** the trigger shows "All" as default text
- **AND** the label "Select Languages" is visible above the dropdown

#### Scenario: Dropdown opens and shows options

- **GIVEN** the user clicks the dropdown trigger
- **WHEN** the dropdown opens
- **THEN** all 10 language options are visible
- **AND** "All" option is at the top of the list
- **AND** each option is separated by a light grey border (#e6e6e6)

### Requirement: User can select multiple languages

The dropdown SHALL support selecting multiple languages simultaneously. Selected items SHALL display with bold text in blue (#3e64ff).

#### Scenario: User selects multiple languages

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "PHP"
- **THEN** "PHP" is selected and shown in blue bold
- **WHEN** the user clicks "Java"
- **THEN** both "PHP" and "Java" are selected
- **AND** the trigger text updates to reflect the selection count

#### Scenario: User deselects a language

- **GIVEN** "PHP" is selected
- **WHEN** the user clicks "PHP" again
- **THEN** "PHP" is deselected

### Requirement: All option selects all languages

The "All" option SHALL select all 10 language options when clicked.

#### Scenario: Select All via All option

- **GIVEN** the dropdown is open with no selections
- **WHEN** the user clicks "All"
- **THEN** all 10 language options are selected
- **AND** the trigger reflects all items selected

### Requirement: Dropdown closes on outside click

The dropdown SHALL close when the user clicks outside the dropdown area.

#### Scenario: Click outside closes dropdown

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown closes
- **AND** the selected items remain selected

### Requirement: Keyboard navigation

The dropdown SHALL support keyboard navigation for accessibility.

#### Scenario: Arrow keys navigate options

- **GIVEN** the dropdown is open
- **WHEN** the user presses ArrowDown
- **THEN** focus moves to the next option
- **WHEN** the user presses ArrowUp
- **THEN** focus moves to the previous option

#### Scenario: Space selects and Escape closes

- **GIVEN** the dropdown is open with focus on an option
- **WHEN** the user presses Space
- **THEN** the focused option is toggled (selected/deselected)
- **WHEN** the user presses Escape
- **THEN** the dropdown closes

### Requirement: Footer with Component Dock link

The page SHALL include a footer linking to https://www.componentdock.com/.

#### Scenario: Footer renders

- **GIVEN** the page is loaded
- **THEN** a footer element is visible
- **AND** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"

## Verification checklist

- [ ] Page renders with white background and centered section
- [ ] Heading "Select Language" is displayed
- [ ] Dropdown shows "All" as default text
- [ ] Dropdown opens on click showing 10 language options
- [ ] Multiple options can be selected simultaneously
- [ ] Selected items display in blue bold (#3e64ff)
- [ ] "All" option selects all languages
- [ ] Dropdown closes on outside click
- [ ] Keyboard navigation works (ArrowUp/Down, Space, Escape)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where possible
- [ ] 100% test coverage maintained
