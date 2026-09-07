# Template: Tagpool (Form — Multiselect Dropdown with Selection Limit)

## Purpose

Tagpool is a single-page multi-select FORM snippet in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 20"
free template (source: https://colorlib.com/wp/template/multiselect-20/),
built under a DIFFERENT name (**Tagpool**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Chosen.js jQuery plugin multi-select rendered on a light-grey
page: a centered container with `<select multiple>` elements containing 8
tech-category options (Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress,
FrontEnd). The key differentiator from Multiselect 19 is a **selection limit
of 5** — once 5 items are selected, additional options become unselectable.
Three color themes are demonstrated (default grey, green, blue) arranged
vertically.

## Design tokens

### Colors (from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#efefef` | Page background (light grey) |
| `--text` | `#b3b3b3` | Paragraph text, weight 300 |
| `--heading` | `#212529` (Bootstrap default) | Heading color |
| `--chip-default` | `#eee` / `#e5e4cc` | Default chip background (color-1) |
| `--chip-green` | `#c7f0db` | Green variant chip background (color-2) |
| `--chip-blue` | `#d3f4ff` | Blue variant chip background (color-3) |
| `--chip-border` | `#aaa` (Chosen default) | Chip border color |
| `--dropdown-shadow` | `0 15px 30px 0 rgba(0,0,0,0.2)` | Dropdown box shadow |
| `--input-shadow` | `0 1px 4px 0 rgba(0,0,0,0.1)` | Input container shadow |

### Typography

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `Roboto` (Google Fonts, weights 300/400/500) | Body + headings |
| Heading size | `20px` | H2 page heading |

### Layout

| Token | Value | Usage |
|-------|-------|-------|
| Container | Bootstrap `col-md-5` centered via `row justify-content-center` | Widget container |
| Content padding | `7rem 0` | Vertical padding on wrapper |
| Border radius (input) | `4px` | Rounded input container |
| Row spacing | `mb-3` | Between the three color-variant rows |
| Selection limit | 5 | Maximum selectable items per widget |

### Buttons / interactive

- No explicit buttons — the widget IS the interaction (dropdown + chip tags)
- Chosen.js multi-select pattern: click to open dropdown, select options,
  chips appear inline in the input area, each with an × close button
- Dropdown has heavy drop shadow (`0 15px 30px 0 rgba(0,0,0,0.2)`)
- **Selection limit**: once 5 items are chosen, the remaining options are
  disabled/greyed out and cannot be selected

## Requirements

### Requirement: Widget renders in collapsed state with placeholder

The multi-select widget SHALL render with a collapsed input area showing a placeholder prompt and the dropdown panel hidden.

#### Scenario: Widget renders in collapsed state

- **GIVEN** the page is loaded with the Tagpool multi-select widget
- **WHEN** the widget renders
- **THEN** the input area shows the placeholder text "Select Categories"
- **AND** no chips are visible
- **AND** the dropdown panel is not visible
- **AND** the heading reads "Multi-Select #10 (Limit to 5)"

### Requirement: Opening the dropdown reveals options

Clicking the input area SHALL open a dropdown panel with a scrollable list of 8 category options.

#### Scenario: Opening the dropdown reveals options

- **GIVEN** the page is loaded
- **WHEN** I click the input area
- **THEN** a dropdown panel appears below the input
- **AND** I see a scrollable list of 8 options
- **AND** the options are: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd

### Requirement: Selecting an option adds a chip tag

Selecting an option SHALL display a colored chip/tag inside the input area with the option label and an × close button.

#### Scenario: Selecting an option adds a chip tag

- **GIVEN** the dropdown is open
- **WHEN** I click the "Design" option
- **THEN** a chip tag with label "Design" and an × close button appears in the input area
- **AND** the "Design" option is removed from the dropdown list
- **AND** the input area background remains visible

### Requirement: Selecting multiple options shows multiple chips

Selecting multiple options SHALL display all selected items as individual chip tags.

#### Scenario: Selecting multiple options shows multiple chips

- **GIVEN** the dropdown is open
- **WHEN** I select "Design"
- **AND** I select "HTML5"
- **AND** I select "CSS3"
- **THEN** three chip tags appear in the input area: "Design", "HTML5", "CSS3"
- **AND** each chip has its own × close button

### Requirement: Selection limit of 5 items

The widget SHALL enforce a maximum of 5 selected items. Once 5 items are selected, remaining options SHALL be disabled and unselectable.

#### Scenario: Reaching the selection limit

- **GIVEN** I have selected 4 items as chips
- **WHEN** I select a 5th item
- **THEN** five chip tags appear in the input area
- **AND** all remaining unselected options in the dropdown are disabled/greyed out

#### Scenario: Cannot exceed selection limit

- **GIVEN** I have selected 5 items (the limit)
- **WHEN** I attempt to select another option
- **THEN** the option is not added
- **AND** only 5 chips remain visible

#### Scenario: Removing a chip frees a slot

- **GIVEN** I have 5 items selected (at the limit)
- **WHEN** I click the × on one chip to remove it
- **THEN** that chip disappears
- **AND** 4 chips remain
- **AND** the previously disabled options become selectable again

### Requirement: Removing a chip via close button

Clicking the × button on a chip SHALL remove that chip from the selection and re-add the option to the dropdown.

#### Scenario: Removing a chip via close button

- **GIVEN** "Design" and "HTML5" are selected as chips
- **WHEN** I click the × on the "Design" chip
- **THEN** the "Design" chip disappears
- **AND** "HTML5" remains as a chip
- **AND** "Design" reappears in the dropdown option list

### Requirement: Closing the dropdown

Clicking outside the widget or pressing Escape SHALL close the dropdown panel while preserving selected chips.

#### Scenario: Closing the dropdown

- **GIVEN** the dropdown is open with some options selected
- **WHEN** I click outside the widget
- **THEN** the dropdown panel closes
- **AND** the selected chip tags remain visible in the input area

### Requirement: Three color themes are demonstrated

The page SHALL display three instances of the multi-select widget, each with a different chip color theme: default (grey), green, and blue.

#### Scenario: Three color themes are demonstrated

- **GIVEN** the page is loaded
- **WHEN** I view the page
- **THEN** I see three multi-select widgets arranged vertically with `mb-3` spacing
- **AND** the first widget uses default grey chip styling (`#e5e4cc`)
- **AND** the second widget uses green chip styling (`#c7f0db`)
- **AND** the third widget uses blue chip styling (`#d3f4ff`)

## Verification checklist

- [ ] `openspec/specs/template-tagpool/spec.md` exists with all sections
- [ ] `docs/templates/tagpool/tasks.md` exists
- [ ] Source mapping recorded: ColorLib "Multiselect 20" → "Tagpool"
- [ ] Preview URL: `https://preview.colorlib.com/theme/bootstrap/multiselect-20/`
- [ ] Design tokens documented: Roboto font, #efefef bg, chip colors
- [ ] Three color themes (grey, green, blue) are the key visual feature
- [ ] Selection limit of 5 is enforced and tested
- [ ] All 8 category options present: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
- [ ] No `colorlib.com` or `preview.colorlib.com` strings in `apps/` code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `tagpool.free.componentdock.com`
- [ ] `homepage` set to `https://tagpool.free.componentdock.com`
