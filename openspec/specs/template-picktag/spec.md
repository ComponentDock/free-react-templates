# Template: Picktag (Tag-Style Multi-Select with Chips)

## Purpose

Picktag is a single-page multi-select component in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 11" free template (source:
https://colorlib.com/wp/template/multiselect-11/), built under a
DIFFERENT name (**Picktag**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + Select2 (jQuery plugin) snippet: a
centered section with a heading "Multi-Select #1", instructional text
"Tags separate with comma \",\"", and a Select2 multiple-select widget.
Selected items appear as purple chip/pill tags with an "x" remove button.
The dropdown shows a searchable list of options with highlighted selection.

**Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-11/
(Colorlib listing: https://colorlib.com/wp/template/multiselect-11/)

**Design tokens extracted from preview CSS (css/style.css):**

| Token                   | Value                                         |
| ----------------------- | --------------------------------------------- |
| Font family             | "Roboto", sans-serif (weights 300, 400, 500)  |
| Brand / accent          | `#65587f` (muted purple)                      |
| Page background         | `#fff` (white)                                |
| Heading color           | `#000` (black)                                |
| Paragraph text color    | `#b3b3b3` (light gray)                        |
| Tag pill background     | `#65587f`                                     |
| Tag pill text           | `#fff` (white)                                |
| Tag pill border         | `rgba(101, 88, 127, 0.2)`                    |
| Tag pill font-size      | `14px`                                        |
| Tag pill padding        | `2px 10px`                                    |
| Tag remove icon color   | `rgba(255, 255, 255, 0.5)`, hover `#fff`     |
| Dropdown highlighted    | `#65587f` bg, `#fff` text                     |
| Dropdown hover          | `#f4f4f4` bg, `#000` text                     |
| Section padding         | `7rem 0`                                      |
| Heading font-size       | `20px`                                        |
| Input border-bottom     | `1px solid #e6e6e6`                           |
| Icons font              | icomoon (custom icon font for arrow/remove)   |

**Visual design (from TEMPLATES.md screenshot):** Clean white page with
a centered 20px heading "Multi-Select #1" and gray instructional text
below. A Select2-style multi-select dropdown is centered in a col-7
column. Selected items appear as purple `#65587f` pill chips with white
text and a small "x" remove icon. The dropdown list shows options with
a search box; highlighted/selected options get the purple background.

## Design tokens (React / Tailwind mapping)

```css
/* @theme tokens for Tailwind CSS 4 */
--color-brand: #65587f;
--color-page-bg: #ffffff;
--color-text-muted: #b3b3b3;
--font-family-body: "Roboto", sans-serif;
--color-dropdown-hover: #f4f4f4;
```

## Requirements

### Requirement: Page layout

The app SHALL render a single full-viewport section with centered content
containing a heading, instructional text, and the multi-select component.

#### Scenario: Page structure

- **GIVEN** the Picktag app is rendered
- **THEN** the page background SHALL be `#fff` (white)
- **AND** the font family SHALL be "Roboto", sans-serif
- **AND** a centered heading reading "Multi-Select #1" (20px, black)
  SHALL be visible
- **AND** instructional text reading "Tags separate with comma \",\""
  in light gray `#b3b3b3` SHALL be visible below the heading
- **AND** a multi-select component SHALL be centered below the text in
  a `col-7` equivalent column

### Requirement: Multi-select dropdown

The component SHALL render a multi-select dropdown that allows selecting
multiple options from a predefined list.

#### Scenario: Initial state

- **GIVEN** the Picktag app is rendered with no items selected
- **THEN** the dropdown input SHALL be visible showing placeholder text
  (e.g. "Select options..." or similar)
- **AND** no tag chips SHALL be visible
- **AND** the input SHALL have a bottom border (`1px solid #e6e6e6`)

#### Scenario: Dropdown open

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the dropdown input area
- **THEN** a dropdown list SHALL appear below the input
- **AND** the list SHALL show all available options: Design, HTML5, CSS3,
  jQuery, BS4, Bootstrap, WordPress, FrontEnd
- **AND** the list SHALL be searchable (a search input at top of list)

#### Scenario: Selection creates tag chips

- **GIVEN** the dropdown list is open
- **WHEN** the user clicks an option (e.g. "Design")
- **THEN** a purple chip/tag SHALL appear in the input area with text
  "Design" in white on `#65587f` background
- **AND** the chip SHALL have a remove icon ("x") that is semi-transparent
  white (`rgba(255,255,255,0.5)`)
- **AND** hovering the remove icon SHALL make it fully white
- **AND** the option in the dropdown list SHALL be marked as selected
  (highlighted with `#65587f` background)

#### Scenario: Deselection via chip remove

- **GIVEN** "Design" is selected and its chip is visible
- **WHEN** the user clicks the "x" on the Design chip
- **THEN** the chip SHALL be removed from the input area
- **AND** the option SHALL be deselected in the dropdown list
- **AND** the dropdown list SHALL remain open (if it was open)

#### Scenario: Multiple selections

- **GIVEN** the user selects "Design", "HTML5", and "CSS3"
- **THEN** three chips SHALL be visible in the input area
- **AND** the chips SHALL be laid out horizontally with wrapping
- **AND** each chip SHALL have the purple background, white text, and
  remove icon

### Requirement: Search / filtering

The dropdown list SHALL support live search filtering of options.

#### Scenario: Search behavior

- **GIVEN** the dropdown list is open
- **THEN** a search input SHALL be visible at the top of the list
- **WHEN** the user types a query (e.g. "boot")
- **THEN** only options containing the query (case-insensitive) SHALL
  be visible (e.g. "Bootstrap" would match)
- **AND** already-selected options SHALL remain visible as chips even
  when filtered out of the dropdown list
- **WHEN** the user clears the search input
- **THEN** all options SHALL become visible again

### Requirement: Chip styling

Selected items SHALL appear as styled tag/pill chips matching the source's
Select2 choice appearance.

#### Scenario: Chip visual design

- **GIVEN** an item is selected
- **THEN** its chip SHALL have:
  - Background: `#65587f` (muted purple)
  - Text color: `#fff` (white)
  - Font size: `14px`
  - Padding: `2px 10px`
  - Border-radius: small (matching Select2 default, ~3px)
  - A remove button ("x") at the left or right with
    `rgba(255,255,255,0.5)` color
- **AND** hovering the chip's remove button SHALL change color to `#fff`

### Requirement: Option highlighting

The dropdown list SHALL visually distinguish selected vs unselected options.

#### Scenario: Selected option highlight

- **GIVEN** "Design" is selected
- **WHEN** the dropdown list is open
- **THEN** the "Design" option SHALL have a `#65587f` background with
  `#fff` text (highlighted state)
- **AND** unselected options SHALL have a white or light background
- **AND** hovering an unselected option SHALL show `#f4f4f4` background

### Requirement: Keyboard interaction

The component SHALL support basic keyboard interaction.

#### Scenario: Keyboard accessibility

- **GIVEN** the dropdown input is focused
- **WHEN** the user presses Enter or Space
- **THEN** the dropdown list SHALL toggle open/closed
- **WHEN** the user presses Escape while the list is open
- **THEN** the dropdown list SHALL close
- **AND** the user SHALL be able to navigate options with arrow keys
  (if feasible) or at minimum type to search

### Requirement: Responsive behavior

The layout SHALL be responsive and work on mobile viewports.

#### Scenario: Mobile layout

- **GIVEN** the viewport is 375px wide
- **THEN** the heading and multi-select SHALL stack vertically and take
  full width
- **AND** the multi-select SHALL still function correctly (open, search,
  select, remove)

### Requirement: Footer attribution

The template footer MUST link to https://www.componentdock.com/ and be
branded as "Component Dock".

#### Scenario: Footer link

- **GIVEN** the Picktag app is rendered
- **THEN** a footer section SHALL be visible at the bottom of the page
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` with text referencing "Component Dock"
- **AND** the footer SHALL NOT contain any reference to ColorLib

## Verification checklist

- [ ] Page renders with white background and Roboto font
- [ ] Heading "Multi-Select #1" is centered at 20px
- [ ] Instructional text is visible in light gray
- [ ] Dropdown opens on click showing all 8 options
- [ ] Search input filters options in real time
- [ ] Selecting an option creates a purple chip with white text
- [ ] Chip has "x" remove button (semi-transparent white)
- [ ] Clicking "x" removes the chip and deselects the option
- [ ] Multiple selections create multiple chips (horizontal wrapping)
- [ ] Selected options are highlighted in purple in the dropdown
- [ ] Unselected options hover at #f4f4f4
- [ ] Keyboard: Enter/Space toggles, Escape closes
- [ ] Mobile: full-width stacked layout at 375px
- [ ] Footer links to componentdock.com, no ColorLib references
- [ ] No ColorLib references in any app source files
