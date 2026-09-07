# Template: SelectHub (Form Element — Multi-Select Category Chooser)

## Purpose

Recreation of ColorLib "Multiselect 19" — a free fancy multi-select snippet
using Bootstrap Framework and Chosen.js.

- **Source**: https://colorlib.com/wp/template/multiselect-19/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-19/
- **Source slug**: `multiselect-19`
- **New name**: `selecthub`
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token            | Value                                       | Notes                          |
| ---------------- | ------------------------------------------- | ------------------------------ |
| Font family      | Roboto (300, 400, 500)                      | Primary typeface               |
| Background       | #efefef                                     | Page background                |
| Text (body)      | #b3b3b3                                     | Paragraph / muted text         |
| Text (headings)  | #444                                        | Primary text                   |
| Border radius    | 4px                                         | Input + dropdown               |
| Input shadow     | 0 1px 4px 0 rgba(0,0,0,0.1)                | Subtle card shadow             |
| Dropdown shadow  | 0 15px 30px 0 rgba(0,0,0,0.2)              | Elevated dropdown              |
| Tag chip bg      | varies by variant                           | Pill-shaped selected items     |
| Variant 1 (tan)  | #e5e4cc                                     | Warm neutral tag chips          |
| Variant 2 (green)| #c7f0db                                     | Green tag chips                 |
| Variant 3 (blue) | #d3f4ff                                     | Blue tag chips                  |
| Placeholder text | "Select Categories"                         | Trigger prompt                 |
| Input height     | 32px                                        | Search field                   |
| Button border    | none                                        | Trigger has no visible border  |
| Button bg        | white                                       | Trigger container              |

### Visual Design (from screenshot)

The template shows a centered heading "Multi-Select #9" above a single
multi-select dropdown. The dropdown has a clean white card-style trigger
with subtle shadow. Selected items appear as colored pill tags (chips)
inside the trigger area, each with a close/remove "×" button. A search
input is embedded in the trigger area when tags are shown. The background
is light gray (#efefef). The overall aesthetic is minimal, modern, and
Bootstrap-flavored — no flashy colors, just clean functional design.

## Requirements

### Requirement: Page renders correctly

The page SHALL display a centered heading "Multi-Select #9" and a multi-select
dropdown trigger below it.

#### Scenario: Page renders correctly

- **GIVEN** the user navigates to the selecthub page
- **THEN** a centered heading "Multi-Select #9" is visible
- **AND** a multi-select dropdown trigger is visible below the heading

### Requirement: Trigger shows placeholder

The trigger SHALL display placeholder text when nothing is selected.

#### Scenario: Trigger shows placeholder

- **GIVEN** no categories are selected
- **THEN** the trigger shows "Select Categories" in muted text

### Requirement: Dropdown opens on click

The dropdown SHALL open when the trigger area is clicked, showing available
categories.

#### Scenario: Dropdown opens on click

- **GIVEN** the user sees the dropdown trigger
- **WHEN** the user clicks the trigger area
- **THEN** a dropdown panel appears below the trigger
- **AND** the panel lists the following categories: Design, HTML5, CSS3, jQuery,
  BS4, Bootstrap, WordPress, FrontEnd

### Requirement: Single category selection

Clicking a category SHALL toggle its selection state and display it as a tag chip.

#### Scenario: Single category selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Design"
- **THEN** "Design" appears as a colored pill tag in the trigger area
- **AND** the trigger text no longer shows the placeholder

### Requirement: Multiple category selection

Multiple categories SHALL be selectable simultaneously.

#### Scenario: Multiple category selection

- **GIVEN** the dropdown is open
- **WHEN** the user selects "Design"
- **AND** the user selects "HTML5"
- **AND** the user selects "CSS3"
- **THEN** all three categories appear as colored pill tags
- **AND** all three are visible in the trigger area

### Requirement: Tag removal via close button

Each tag chip SHALL have a close/remove button (×) that deselects the category.

#### Scenario: Tag removal via close button

- **GIVEN** "Design" is selected and shown as a tag chip
- **WHEN** the user clicks the "×" button on the "Design" tag
- **THEN** the "Design" tag is removed from the trigger area
- **AND** "Design" is no longer selected

### Requirement: Clicking a category in the dropdown deselects it

Clicking an already-selected category in the dropdown SHALL deselect it and
remove its tag.

#### Scenario: Clicking a category deselects it

- **GIVEN** "Design" is selected
- **WHEN** the user clicks "Design" in the dropdown list
- **THEN** "Design" is deselected
- **AND** its tag chip is removed from the trigger

### Requirement: Search filters categories

The search input embedded in the trigger SHALL filter categories in real time.

#### Scenario: Search filters categories

- **GIVEN** the dropdown is open
- **WHEN** the user types "Boot" in the search input
- **THEN** only "Bootstrap" is visible in the dropdown
- **AND** other categories are hidden

#### Scenario: Search with no results

- **GIVEN** the dropdown is open
- **WHEN** the user types "ZZZ" in the search input
- **THEN** no categories are visible in the list

### Requirement: Color variants

The template SHALL support 3 color variants for tag chips.

#### Scenario: Color variant 1 (tan)

- **GIVEN** the variant is set to tan (#e5e4cc)
- **WHEN** a category is selected
- **THEN** the tag chip background is tan (#e5e4cc)

#### Scenario: Color variant 2 (green)

- **GIVEN** the variant is set to green (#c7f0db)
- **WHEN** a category is selected
- **THEN** the tag chip background is green (#c7f0db)

#### Scenario: Color variant 3 (blue)

- **GIVEN** the variant is set to blue (#d3f4ff)
- **WHEN** a category is selected
- **THEN** the tag chip background is blue (#d3f4ff)

### Requirement: Dropdown closes on outside click

Clicking outside the dropdown SHALL close it.

#### Scenario: Dropdown closes on outside click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown panel closes

### Requirement: Keyboard accessibility

The dropdown SHALL support keyboard navigation.

#### Scenario: Keyboard accessibility

- **GIVEN** the dropdown trigger is focused
- **WHEN** the user presses Enter or Space
- **THEN** the dropdown opens
- **AND** the user can close with Escape

### Requirement: Responsive layout

The dropdown SHALL be responsive on mobile viewports.

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device (< 768px)
- **THEN** the heading is centered
- **AND** the dropdown takes full width within its container

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **GIVEN** the page is loaded
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link opens in a new tab

## Verification Checklist

- [ ] Heading matches "Multi-Select #9" (text match)
- [ ] Trigger shows "Select Categories" placeholder when empty
- [ ] Dropdown opens on trigger click
- [ ] 8 categories listed: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
- [ ] Single selection shows tag chip
- [ ] Multiple selections show multiple tag chips
- [ ] Tag chips have close/remove button (×)
- [ ] Clicking close button deselects and removes tag
- [ ] Clicking selected category in dropdown deselects it
- [ ] Search input filters categories in real time
- [ ] "No results" shown for empty search
- [ ] 3 color variants work (tan, green, blue)
- [ ] Dropdown closes on outside click
- [ ] Keyboard: Enter/Space opens, Escape closes
- [ ] Responsive on mobile (< 768px)
- [ ] Footer links to Component Dock
