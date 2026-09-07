# Template: Multicheck (Multi-Select Form — Tag-Based Selection)

## Purpose

Multicheck is a single-page multi-select FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 19"
free template (source: https://colorlib.com/wp/template/multiselect-19/),
built under a DIFFERENT name (**Multicheck**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Chosen.js plugin (`chosen.jquery.min.js` +
jQuery 3.3.1 + Bootstrap 4) rendered on a light-grey page: a centered
`col-md-5` container with a single `<select multiple>` element containing
8 flat category options (Design, HTML5, CSS3, jQuery, BS4, Bootstrap,
WordPress, FrontEnd). The page title is "Multi Select #9". The design is
minimal — a centered heading ("Multi-Select #9") and a functional
multi-select tag/chip dropdown widget. Selected options appear as colored
tags inside the input area.

Preview URL: https://preview.colorlib.com/theme/bootstrap/multiselect-19/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-19.jpg

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`) and font declarations:

| Token             | Value                                          |
| ----------------- | ---------------------------------------------- |
| Font family       | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` |
| Font weights      | 300 (body), 400 (headings)                     |
| Heading size      | 20px                                           |
| Body background   | `#efefef` (light grey)                         |
| Paragraph color   | `#b3b3b3` (medium grey)                        |
| Tag background    | `#e5e4cc` (tan/olive — color-1 variant)        |
| Tag background 2  | `#c7f0db` (mint — color-2 variant)             |
| Tag background 3  | `#d3f4ff` (sky blue — color-3 variant)         |
| Tag shadow        | `none` (flat tags)                             |
| Container shadow  | `0 1px 4px 0 rgba(0, 0, 0, 0.1)` (on input)  |
| Dropdown shadow   | `0 15px 30px 0 rgba(0, 0, 0, 0.2)`            |
| Border radius     | `4px` (input and dropdown)                     |
| Input padding     | `7px`                                          |
| Search field height | `32px`                                        |
| Search field font size | `14px`                                     |
| Transition        | `0.3s all ease` (links)                       |

### Fonts loaded via Google Fonts / Cloudflare
- Roboto (300, 400)
- Poppins (300, 400, 500) — loaded but not referenced in custom CSS
- Source Serif Pro (400, 600) — loaded but not referenced in custom CSS

## Requirements

### Requirement: Page renders with centered heading and multi-select widget

The template SHALL render a centered heading and a single multi-select tag
dropdown widget on a light-grey background.

#### Scenario: Page renders with heading and widget

- **WHEN** the user navigates to the Multicheck page
- **THEN** the heading "Multi-Select #9" is visible and centered
- **AND** a multi-select input area is visible showing "Select Categories"
  as placeholder text
- **AND** the page background is light grey (#efefef)

### Requirement: Dropdown opens with all category options

Clicking the multi-select input SHALL open a dropdown panel listing all 8
category options with a search input.

#### Scenario: Dropdown opens with category options

- **WHEN** the user clicks the multi-select input area
- **THEN** a dropdown panel appears below the input
- **AND** a search input is visible at the top of the dropdown
- **AND** 8 options are listed: Design, HTML5, CSS3, jQuery, BS4,
  Bootstrap, WordPress, FrontEnd
- **AND** all options are unchecked by default

### Requirement: Selecting an option adds a tag chip

Selecting an option SHALL add a colored tag chip inside the input area and
check the option in the dropdown.

#### Scenario: Selecting a single option

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Design"
- **THEN** a tag chip labeled "Design" appears inside the input area
- **AND** the tag has a close button (×) on the right side
- **AND** "Design" is checked in the dropdown list

#### Scenario: Selecting multiple options

- **GIVEN** "Design" is already selected
- **WHEN** the user clicks "HTML5"
- **THEN** a second tag chip labeled "HTML5" appears next to "Design"
- **AND** both tags are visible in the input area
- **AND** the placeholder "Select Categories" is hidden

### Requirement: Deselecting an option removes its tag chip

Clicking the close button (×) on a tag chip SHALL remove it and uncheck
the corresponding option.

#### Scenario: Deselecting via close button

- **GIVEN** "Design" and "HTML5" are selected
- **WHEN** the user clicks the close button on the "Design" tag
- **THEN** the "Design" tag chip is removed from the input area
- **AND** "Design" is unchecked in the dropdown list
- **AND** the "HTML5" tag remains visible

### Requirement: Search filtering within dropdown

Typing in the search input SHALL filter the dropdown options to show only
matching items.

#### Scenario: Search filters options

- **GIVEN** the dropdown is open
- **WHEN** the user types "boot" in the search input
- **THEN** only "Bootstrap" is visible in the dropdown list
- **AND** other options are hidden

#### Scenario: Search with no matches

- **GIVEN** the dropdown is open
- **WHEN** the user types "xyz" in the search input
- **THEN** no options are visible in the dropdown list
- **AND** a "No results" message is displayed

### Requirement: Keyboard navigation

The widget SHALL support keyboard navigation for accessibility.

#### Scenario: Keyboard navigation through options

- **GIVEN** the dropdown is open
- **WHEN** the user presses the Down Arrow key
- **THEN** focus moves to the next option
- **AND** pressing Enter selects/deselects the focused option

### Requirement: Closing dropdown

The dropdown SHALL close when clicking outside the widget or pressing Escape.

#### Scenario: Close on outside click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the widget
- **THEN** the dropdown panel is hidden

#### Scenario: Close on Escape key

- **GIVEN** the dropdown is open
- **WHEN** the user presses the Escape key
- **THEN** the dropdown panel is hidden

### Requirement: Footer with Component Dock link

The template SHALL include a footer linking to Component Dock.

#### Scenario: Footer is visible

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a footer is visible containing a link to
  "https://www.componentdock.com/" branded as "Component Dock"

## Verification checklist

- [ ] Heading "Multi-Select #9" renders centered on #efefef background
- [ ] Multi-select input shows "Select Categories" placeholder
- [ ] Dropdown opens with 8 category options
- [ ] Selecting an option adds a colored tag chip
- [ ] Tag chips have close buttons that remove the selection
- [ ] Search input filters dropdown options
- [ ] Keyboard navigation works (arrows + Enter)
- [ ] Dropdown closes on outside click and Escape
- [ ] Footer links to Component Dock
- [ ] Responsive: works on mobile viewports
- [ ] No references to ColorLib in app code (provenance in spec only)
- [ ] `public/CNAME` contains `multicheck.free.componentdock.com`
- [ ] `homepage` in package.json set to `https://multicheck.free.componentdock.com`
