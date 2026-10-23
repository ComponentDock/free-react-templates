# Template: Tagbox (Multi-Select Dropdown Component)
<!-- prep-status: shipped-as=picktag -->
> **SHIPPED-UNDER** — the ColorLib `multiselect-11` design this prep describes already
> ships as `apps/picktag` (<https://picktag.free.componentdock.com>).
> Do not scaffold `apps/tagbox`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-picktag/spec.md`.

## Purpose

Recreation of ColorLib "Multiselect 11" — a clean, centered multi-select dropdown
component with live search and tag-style selected items.

- **Source slug:** `multiselect-11`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-11/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-11.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from preview CSS)

### Colors
- **Brand / accent:** `#65587f` (muted purple) — used for selected tags background and highlighted dropdown items
- **Body text:** `#000000` (default, via browser)
- **Paragraph text:** `#b3b3b3` (light gray, weight 300)
- **Background:** `#ffffff` (white)
- **Selected option background:** `#f4f4f4` (light gray), hover `#ddd`
- **Tag text color:** `#ffffff` (white on purple)
- **Tag remove button:** `rgba(255,255,255,0.5)`, hover `#fff`
- **Tag border:** `rgba(101,88,127,0.2)` (purple-tinted)

### Typography
- **Primary font:** "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Weights used:** 300 (light, for paragraphs), 400 (normal body)
- **Heading font:** Same Roboto family
- **Title size:** 20px for h2

### Layout
- **Centered container:** max-width ~7 columns (Bootstrap grid), centered with `justify-content-center`
- **Vertical padding:** 7rem top + bottom (`.content { padding: 7rem 0 }`)
- **Text alignment:** Centered heading, left-aligned select area

### Component Styling
- **Select input:** Bootstrap `.form-control` class (border, padding, font)
- **Selected tags:** Rounded pills, purple background `#65587f`, white text, 14px font, `padding: 2px 10px`
- **Dropdown highlight:** Purple `#65587f` background, white text
- **Selected option in dropdown:** `#f4f4f4` background
- **Transitions:** 0.3s all ease on links and interactive elements
- **No box-shadow on tags**

## Requirements

### Feature: Tagbox template behaviour

#### Scenario: Page renders with title

- **GIVEN** the user visits the Tagbox page
- **THEN** a centered heading "Multi-Select #1" is visible
- **AND** a paragraph "Tags separate with comma \",\"" is visible below the heading

#### Scenario: Dropdown opens on click

- **GIVEN** the user sees the multi-select input
- **WHEN** the user clicks on the select field
- **THEN** a dropdown menu appears with all available options

#### Scenario: Options are displayed

- **GIVEN** the dropdown is open
- **THEN** the following options are visible: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd

#### Scenario: Single selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Design"
- **THEN** a purple tag pill "Design" appears in the select field
- **AND** the dropdown remains open for further selections

#### Scenario: Multiple selections

- **GIVEN** "Design" is already selected
- **WHEN** the user clicks "HTML5"
- **THEN** both "Design" and "HTML5" tag pills are visible in the select field

#### Scenario: Remove a selected tag

- **GIVEN** "Design" and "HTML5" are selected
- **WHEN** the user clicks the remove button (×) on the "Design" tag
- **THEN** only "HTML5" remains selected
- **AND** "Design" is no longer shown as a tag

#### Scenario: Search/filter options

- **GIVEN** the dropdown is open with all options visible
- **WHEN** the user types "boot" in the search field
- **THEN** only "Bootstrap" is visible in the filtered dropdown

#### Scenario: Keyboard navigation

- **GIVEN** the dropdown is open
- **WHEN** the user presses the down arrow key
- **THEN** the next option is highlighted
- **AND** the highlighted option has a purple background

## Verification checklist

- [ ] Heading "Multi-Select #1" renders centered, Roboto font
- [ ] Paragraph text is light gray (#b3b3b3), weight 300
- [ ] Select field is Bootstrap-styled with form-control appearance
- [ ] Clicking opens dropdown with all 8 options
- [ ] Selecting an option creates a purple (#65587f) tag pill
- [ ] Tags have white text, 14px font, no border, subtle purple border
- [ ] Remove button (×) on tags removes the selection
- [ ] Search field filters options in real-time
- [ ] Keyboard navigation (up/down arrows) highlights options
- [ ] Highlighted option has purple background, white text
- [ ] Selected option in dropdown has #f4f4f4 background
- [ ] Page has white background, centered layout, 7rem vertical padding
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] Tests pass with 100% coverage
