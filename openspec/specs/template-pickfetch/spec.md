# Template: Pickfetch (Tag-Style Multi-Select with Search and Chips)

## Purpose

Pickfetch is a single-page multi-select component in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Multiselect 12" free template (source:
https://colorlib.com/wp/template/multiselect-12/), built under a
DIFFERENT name (**Pickfetch**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 + Select2 (jQuery plugin) snippet: a
centered section with a heading "Multi-Select #2", instructional text
"State separate with comma \",\"", and a Select2 multi-select widget.
Selected items appear as pink/coral chip/pill tags with an "x" remove
button. The dropdown shows a searchable list of options with highlighted
selection.

**Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-12/
(Colorlib listing: https://colorlib.com/wp/template/multiselect-12/)

**Design tokens extracted from preview CSS (css/style.css):**

| Token                  | Value                                         |
| ---------------------- | --------------------------------------------- |
| Font family            | "Roboto", sans-serif (weights 300, 400, 500)  |
| Brand / accent         | `#f67280` (coral pink)                        |
| Page background        | `#efefef` (light gray)                        |
| Heading color          | default (black)                               |
| Paragraph text color   | `#b3b3b3` (light gray)                        |
| Tag pill background    | `#f67280`                                     |
| Tag pill text          | `#fff` (white)                                |
| Tag pill border        | `rgba(246, 114, 128, 0.2)` (near-transparent) |
| Tag pill font-size     | `14px`                                        |
| Tag pill padding       | `2px 10px`                                    |
| Tag remove icon color  | `rgba(255, 255, 255, 0.5)`, hover `#fff`      |
| Dropdown highlighted   | `#f67280` bg, `#fff` text                     |
| Dropdown hover         | `#f4f4f4` bg, `#000` text                     |
| Section padding        | `7rem 0`                                      |
| Heading font-size      | `20px`                                        |
| Input border           | none (Select2 default)                        |
| Dropdown border-radius | `7px`                                         |
| Dropdown box-shadow    | `0 15px 30px 0 rgba(0, 0, 0, 0.2)`            |
| Dropdown border        | `none`                                        |

**Visual design (from TEMPLATES.md screenshot):** Clean light-gray
page (#efefef) with a centered 20px heading "Multi-Select #2" and gray
instructional text below. A Select2-style multi-select dropdown is
centered in a col-7 column. Selected items appear as coral pink
`#f67280` pill chips with white text and a small "x" remove icon. The
dropdown list shows options (Alaska, Hawaii, California, Nevada, Oregon,
Washington, Alabama, Utah) with a search box; highlighted/selected
options get the coral pink background. The dropdown has rounded corners
(7px radius) with a soft box-shadow.

## Design tokens (React / Tailwind mapping)

```css
/* @theme tokens for Tailwind CSS 4 */
--color-brand: #f67280;
--color-page-bg: #efefef;
--color-text-muted: #b3b3b3;
--font-family-body: 'Roboto', sans-serif;
--color-dropdown-hover: #f4f4f4;
--color-dropdown-highlight: #f67280;
--color-dropdown-shadow: rgba(0, 0, 0, 0.2);
```

## Requirements

### Requirement: Page layout

The app SHALL render a single full-viewport section with centered content
containing a heading, instructional text, and the multi-select component.

#### Scenario: Page structure

- **GIVEN** the Pickfetch app is rendered
- **THEN** the page background SHALL be `#efefef` (light gray)
- **AND** the font family SHALL be "Roboto", sans-serif
- **AND** a centered heading reading "Multi-Select #2" (20px) SHALL be
  visible
- **AND** instructional text reading "State separate with comma \",\""
  in light gray `#b3b3b3` SHALL be visible below the heading
- **AND** a multi-select component SHALL be centered below the text in
  a `col-7` equivalent column

### Requirement: Multi-select dropdown

The component SHALL render a multi-select dropdown that allows selecting
multiple options from a predefined list.

#### Scenario: Initial state

- **GIVEN** the Pickfetch app is rendered with no items selected
- **THEN** the dropdown input SHALL be visible showing placeholder text
  (e.g. "Select options..." or similar)
- **AND** no tag chips SHALL be visible
- **AND** the input SHALL have no visible border (or a very subtle one)

#### Scenario: Dropdown open

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the dropdown input area
- **THEN** a dropdown list SHALL appear below the input
- **AND** the list SHALL show all available options: Alaska, Hawaii,
  California, Nevada, Oregon, Washington, Alabama, Utah
- **AND** the list SHALL be searchable (a search input at top of list)
- **AND** the dropdown SHALL have a rounded shape (`7px` border-radius)
  and a soft box-shadow (`0 15px 30px 0 rgba(0, 0, 0, 0.2)`)

#### Scenario: Selection creates tag chips

- **GIVEN** the dropdown list is open
- **WHEN** the user clicks an option (e.g. "Alaska")
- **THEN** a coral pink chip/tag SHALL appear in the input area with
  text "Alaska" in white on `#f67280` background
- **AND** the chip SHALL have a remove icon ("x") that is semi-transparent
  white (`rgba(255,255,255,0.5)`)
- **AND** hovering the remove icon SHALL make it fully white
- **AND** the option in the dropdown list SHALL be marked as selected
  (highlighted with `#f67280` background)

#### Scenario: Deselection via chip remove

- **GIVEN** "Alaska" is selected and its chip is visible
- **WHEN** the user clicks the "x" on the Alaska chip
- **THEN** the chip SHALL be removed from the input area
- **AND** the option SHALL be deselected in the dropdown list
- **AND** the dropdown list SHALL remain open (if it was open)

#### Scenario: Multiple selections

- **GIVEN** the user selects "Alaska", "Hawaii", and "California"
- **THEN** three chips SHALL be visible in the input area
- **AND** the chips SHALL be laid out horizontally with wrapping
- **AND** each chip SHALL have the coral pink background, white text,
  and remove icon

### Requirement: Search / filtering

The dropdown list SHALL support live search filtering of options.

#### Scenario: Search behavior

- **GIVEN** the dropdown list is open
- **THEN** a search input SHALL be visible at the top of the list
- **WHEN** the user types a query (e.g. "cal")
- **THEN** only options containing the query (case-insensitive) SHALL
  be visible (e.g. "California" would match)
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
  - Background: `#f67280` (coral pink)
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

- **GIVEN** "Alaska" is selected
- **WHEN** the dropdown list is open
- **THEN** the "Alaska" option SHALL have a `#f67280` background with
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

- **GIVEN** the Pickfetch app is rendered
- **THEN** a footer section SHALL be visible at the bottom of the page
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` with text referencing "Component Dock"
- **AND** the footer SHALL NOT contain any reference to ColorLib

## Verification checklist

- [ ] Page renders with light gray background (#efefef) and Roboto font
- [ ] Heading "Multi-Select #2" is centered at 20px
- [ ] Instructional text is visible in light gray
- [ ] Dropdown opens on click showing all 8 state options
- [ ] Search input filters options in real time
- [ ] Selecting an option creates a coral pink chip with white text
- [ ] Chip has "x" remove button (semi-transparent white)
- [ ] Clicking "x" removes the chip and deselects the option
- [ ] Multiple selections create multiple chips (horizontal wrapping)
- [ ] Selected options are highlighted in coral pink in the dropdown
- [ ] Unselected options hover at #f4f4f4
- [ ] Dropdown has 7px border-radius and box-shadow
- [ ] Keyboard: Enter/Space toggles, Escape closes
- [ ] Mobile: full-width stacked layout at 375px
- [ ] Footer links to componentdock.com, no ColorLib references
- [ ] No ColorLib references in any app source files
