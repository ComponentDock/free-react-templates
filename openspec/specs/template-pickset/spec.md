# Template: PickSet (Bootstrap Multiselect)

## Purpose

PickSet is a single-page MULTISELECT DROPDOWN component in the free-react-templates monorepo. It is a React recreation of the ColorLib "Multiselect 10" free template (source: https://colorlib.com/wp/template/multiselect-10/), built under a DIFFERENT name (**PickSet**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap multiselect dropdown list component: a clean, minimal card-based layout with a custom dropdown that allows users to select multiple options via checkboxes with live search filtering. The design features a very light blue-white background (#f8f9fd), clean white cards with rounded corners and drop shadows, and a red accent color (#ff5959) for selected item counts and checkmarks.

**WHAT MAKES PICKSET DISTINCT (signature behaviors):**
1. Card-based dropdown with subtle drop shadow on a light blue-white page background
2. Red accent checkmarks (#ff5959) for selected items (distinct from OptPick's green)
3. Live search input with filtering (type to narrow options)
4. Keyboard navigation (ArrowUp/Down, Space, Escape)
5. Click outside to close

## Source mapping

- **ColorLib source:** Multiselect 10
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-10/ (reachable — 3,665 bytes HTML)
- **New name:** pickset
- **Category:** Bootstrap Multiselect Dropdown

## Design tokens

Extracted from the live preview CSS (`css/style.css`, 221KB bundled with Bootstrap 4.3.1).

### Colors

| Token                  | Value                    | Usage                                     |
| ---------------------- | ------------------------ | ----------------------------------------- |
| `--color-bg`           | `#f8f9fd`                | Page background (very light blue-white)   |
| `--color-card`         | `#fff`                   | Card/dropdown background                  |
| `--color-text`         | `gray`                   | Default body text color                   |
| `--color-text-heading` | `#000`                   | Heading text color                        |
| `--color-accent`       | `#ff5959`                | Brand red accent (links, checkbox, chevron, count) |
| `--color-hover`        | `#ff5959` (link hover)   | Interactive hover state                   |
| `--color-search-bg`    | `rgba(0,0,0,0.05)`       | Search input background                   |

### Typography

| Element | Font                       | Weight | Usage                   |
| ------- | -------------------------- | ------ | ----------------------- |
| Body    | Lato (Cloudflare Fonts)    | 400    | Default text            |
| Heading | Lato                       | 400    | Component heading/title |
| Labels  | Lato                       | 700    | Dropdown button label   |

### Shapes & Spacing

| Token           | Value                                    | Usage                  |
| --------------- | ---------------------------------------- | ---------------------- |
| Card radius     | 5px                                      | Dropdown container     |
| Card shadow     | `0px 10px 30px -4px rgba(0,0,0,0.15)`   | Subtle dropdown shadow |
| Card padding    | 15px 20px                                | Dropdown button padding|
| Search radius   | 4px                                      | Search input corners   |
| Section padding | 7em 0                                    | ftco-section padding   |

## Requirements

### Requirement: Page layout

The system SHALL render a full-height page with a light blue-white background (#f8f9fd) containing a centered section with the multiselect dropdown component.

#### Scenario: Page renders with dropdown

- **GIVEN** the user visits the PickSet page
- **THEN** a section container is visible on a light blue-white background
- **AND** the section contains a dropdown trigger element
- **AND** the page title is "PickSet — Multiselect Dropdown Template"

#### Scenario: Heading text

- **GIVEN** the page is rendered
- **THEN** the section SHALL display the heading "Multiselect #10"

### Requirement: Dropdown open and close

The system SHALL toggle the dropdown option list when the trigger button is clicked or activated via keyboard.

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

### Requirement: Live search filtering

The system SHALL provide a search input that filters the option list in real time.

#### Scenario: Search filters options

- **GIVEN** the dropdown is open with multiple options
- **WHEN** the user types in the search input
- **THEN** only options matching the typed text are displayed
- **AND** non-matching options are hidden

#### Scenario: Empty search shows all

- **GIVEN** the dropdown is open with text in the search input
- **WHEN** the user clears the search input
- **THEN** all options are displayed again

### Requirement: Option selection

The system SHALL allow users to select and deselect individual options via checkboxes with red checkmark indicators.

#### Scenario: Single option selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks an unchecked option
- **THEN** the checkbox becomes checked with a red checkmark (#ff5959)

#### Scenario: Single option deselection

- **GIVEN** the dropdown is open with an option selected
- **WHEN** the user clicks the checked option
- **THEN** the checkbox becomes unchecked

#### Scenario: Multiple option selection

- **GIVEN** the dropdown is open
- **WHEN** the user selects multiple options
- **THEN** all selected options show red checkmarks
- **AND** the dropdown trigger displays the count of selected items

### Requirement: Keyboard navigation

The system SHALL support full keyboard navigation within the dropdown.

#### Scenario: Arrow keys navigate options

- **GIVEN** the dropdown is open
- **WHEN** the user presses ArrowDown
- **THEN** focus moves to the next option
- **WHEN** the user presses ArrowUp
- **THEN** focus moves to the previous option

#### Scenario: Space and Enter toggle selection

- **GIVEN** the dropdown is open
- **WHEN** the user presses Space or Enter on a focused option
- **THEN** the option's selection is toggled

#### Scenario: Keyboard opens dropdown

- **GIVEN** the dropdown is closed and the trigger is focused
- **WHEN** the user presses ArrowDown, ArrowUp, Enter, or Space
- **THEN** the dropdown opens with focus on the first option

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

## Verification checklist

- [ ] Light blue-white page background (#f8f9fd)
- [ ] Centered section with heading "Multiselect #10"
- [ ] Dropdown trigger shows "States (Any)" label with chevron icon
- [ ] Dropdown opens/closes on click
- [ ] Dropdown closes on click outside
- [ ] Dropdown closes on Escape key
- [ ] Search input filters options in real time
- [ ] Clearing search shows all options
- [ ] Red checkbox checkmarks (#ff5959) on selected items
- [ ] Count updates on trigger when items selected/deselected
- [ ] Keyboard navigation (ArrowUp/Down, Space/Enter, Escape)
- [ ] ARIA attributes (aria-haspopup, aria-expanded, role="listbox", aria-multiselectable)
- [ ] Footer with Component Dock link
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains pickset.free.componentdock.com
