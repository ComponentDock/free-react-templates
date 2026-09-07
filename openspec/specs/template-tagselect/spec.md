# Template: TagSelect (Multiselect Snippet)

## Purpose

TagSelect is a snippet/component template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Multiselect V20"
multi-select snippet (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a centered page with a heading and three stacked
multi-select dropdowns, each with distinct tag colors (cream/yellow, green,
blue). The page uses the jQuery Chosen.js plugin; TagSelect replaces it with
a custom React multi-select component, matching the visual presentation.

- **Source slug:** `multiselect-20`
- **Source URL:** https://colorlib.com/wp/template/multiselect-20/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-20/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-20.jpg

## Design tokens (from preview CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `"Roboto", sans-serif` | style.css body |
| Background | `#efefef` (light gray) | style.css body |
| Heading color | `#333` (default) | style.css h2 |
| Tag color 1 (cream) | `#e5e4cc` | style.css `.color-1 .search-choice` |
| Tag color 2 (green) | `#c7f0db` | style.css `.color-2 .search-choice` |
| Tag color 3 (blue) | `#d3f4ff` | style.css `.color-3 .search-choice` |
| Container border-radius | `4px` | style.css `.chosen-choices` |
| Container box-shadow | `0 1px 4px 0 rgba(0,0,0,0.1)` | style.css |
| Dropdown shadow | `0 15px 30px 0 rgba(0,0,0,0.2)` | style.css |
| Dropdown border-radius | `4px` | style.css `.chosen-drop` |
| Tag border-radius | `3px` | chosen.css `.search-choice` |
| Tag padding | `7px 10px 7px 10px` (top/right/bottom/left) | style.css |
| Heading font size | `20px` | style.css h2 |

## Visual notes from screenshot

The screenshot shows a centered page with a bold heading "Multi-Select #10
(Limit to 5)" at top. Below are three stacked multi-select dropdowns, each
in a `col-md-5` width container. Each dropdown has a search input with
"Select Categories" placeholder. Selected items appear as colored tags:

1. First dropdown: cream/yellow tags (`#e5e4cc`)
2. Second dropdown: green tags (`#c7f0db`)
3. Third dropdown: light blue tags (`#d3f4ff`)

The page background is light gray (#efefef). The dropdowns have a white
background with subtle box-shadows. The overall aesthetic is clean and
minimal, centered on the page.

## Requirements

### Requirement: Page layout

The system SHALL render a centered page with a light gray (#efefef) background
and a heading "Multi-Select #10 (Limit to 5)" in Roboto font.

#### Scenario: Heading renders centered

- **GIVEN** the user loads the page
- **WHEN** the page finishes rendering
- **THEN** a heading "Multi-Select #10 (Limit to 5)" is visible
- **AND** the heading is centered horizontally

#### Scenario: Light gray background

- **GIVEN** the user loads the page
- **WHEN** the body background is inspected
- **THEN** the background color is approximately #efefef

### Requirement: Three multi-select dropdowns

The system SHALL render three multi-select components stacked vertically,
each centered and each with a distinct tag color scheme.

#### Scenario: Three dropdowns render

- **GIVEN** the user loads the page
- **WHEN** the page finishes rendering
- **THEN** three multi-select dropdown components are visible
- **AND** each dropdown is centered horizontally
- **AND** each dropdown has a "Select Categories" placeholder

#### Scenario: Each dropdown has correct options

- **GIVEN** the user loads the page
- **WHEN** any dropdown is opened
- **THEN** it lists: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd

### Requirement: Multi-select component behavior

Each multi-select component SHALL support searching, selecting multiple
options as tags, and removing selected tags.

#### Scenario: Selecting an option adds a tag

- **GIVEN** a dropdown is open
- **WHEN** the user clicks the "Design" option
- **THEN** a tag labeled "Design" appears inside the input area
- **AND** the dropdown remains open for further selections

#### Scenario: Removing a selected tag

- **GIVEN** the user has selected "Design" and "HTML5"
- **WHEN** the user clicks the close button on the "Design" tag
- **THEN** the "Design" tag is removed from the input area
- **AND** "Design" reappears in the dropdown options
- **AND** the "HTML5" tag remains

#### Scenario: Search filters options

- **GIVEN** a dropdown is open with all options visible
- **WHEN** the user types "Boot" in the search field
- **THEN** only "Bootstrap" is shown in the dropdown list

#### Scenario: Limit selection to 5 items

- **GIVEN** a dropdown where 5 items are already selected
- **WHEN** the user attempts to select a 6th item
- **THEN** the 6th item is not added as a tag
- **AND** a visual indicator shows the limit has been reached (optional)

### Requirement: Distinct tag colors per dropdown

The system SHALL render each dropdown's tags with a unique background color.

#### Scenario: First dropdown has cream tags

- **GIVEN** the user selects items in the first dropdown
- **WHEN** tags are rendered
- **THEN** each tag has background color #e5e4cc (cream/yellow)

#### Scenario: Second dropdown has green tags

- **GIVEN** the user selects items in the second dropdown
- **WHEN** tags are rendered
- **THEN** each tag has background color #c7f0db (green)

#### Scenario: Third dropdown has blue tags

- **GIVEN** the user selects items in the third dropdown
- **WHEN** tags are rendered
- **THEN** each tag has background color #d3f4ff (light blue)

### Requirement: Dropdown styling

The system SHALL style dropdown containers with rounded corners, box-shadows,
and a clean white background.

#### Scenario: Container has rounded corners

- **GIVEN** the user inspects a multi-select container
- **WHEN** the border-radius is checked
- **THEN** it is approximately 4px

#### Scenario: Container has box shadow

- **GIVEN** the user inspects a multi-select container
- **WHEN** the box-shadow is checked
- **THEN** it has a subtle shadow (approximately 0 1px 4px rgba(0,0,0,0.1))

#### Scenario: Dropdown has deeper shadow

- **GIVEN** a dropdown is open
- **WHEN** the dropdown panel is inspected
- **THEN** it has a deeper shadow (approximately 0 15px 30px rgba(0,0,0,0.2))

## Verification checklist

- [ ] Page renders with #efefef background
- [ ] Heading "Multi-Select #10 (Limit to 5)" is centered
- [ ] Three multi-select dropdowns are visible, centered
- [ ] Each dropdown shows "Select Categories" placeholder
- [ ] Clicking a dropdown opens a list of 8 options
- [ ] Selecting an option creates a colored tag
- [ ] First dropdown tags are cream (#e5e4cc)
- [ ] Second dropdown tags are green (#c7f0db)
- [ ] Third dropdown tags are blue (#d3f4ff)
- [ ] Tags have close/remove buttons that work
- [ ] Search filters options in each dropdown
- [ ] Dropdown containers have 4px border-radius and box-shadow
- [ ] No reference to ColorLib in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME and homepage set correctly
- [ ] 100% test coverage
- [ ] Typecheck + lint pass
