# Template: OptFlow (Multiselect Snippet)

## Purpose

Recreation of ColorLib **Multiselect V20** (`multiselect-20`), a multi-select snippet showing three color-variant dropdowns with a max-selection limit. This is a **snippet/component template**, not a full-page layout — it renders a centered heading and three styled multi-select dropdowns, each with a distinct tag color.

- **Source slug:** `multiselect-20`
- **Source URL:** https://colorlib.com/wp/template/multiselect-20/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-20/ (accessible)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-20.jpg
- **Category:** Bootstrap Multiselect Snippet
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from `css/style.css` and `css/chosen.css` of the ColorLib preview (fetched 2026-09-07):

| Token                  | Value                                                                   | Source               |
| ---------------------- | ----------------------------------------------------------------------- | -------------------- |
| Body font              | `"Roboto", sans-serif` (weights 300, 400)                               | style.css            |
| Heading font           | `"Roboto", sans-serif`                                                  | style.css            |
| Body background        | `#efefef` (light gray)                                                  | style.css            |
| Heading size (h2)      | `20px`, centered                                                        | style.css            |
| Content padding        | `7rem 0` (top/bottom)                                                   | style.css            |
| Paragraph color        | `#b3b3b3`, font-weight 300                                              | style.css            |
| Multi-select container | border: none, border-radius: 4px, box-shadow: 0 1px 4px rgba(0,0,0,0.1) | style.css            |
| Tag color-1 (cream)    | `#e5e4cc`                                                               | style.css `.color-1` |
| Tag color-2 (green)    | `#c7f0db`                                                               | style.css `.color-2` |
| Tag color-3 (blue)     | `#d3f4ff`                                                               | style.css `.color-3` |
| Tag border-radius      | 3px (Chosen.js default)                                                 | chosen.css           |
| Dropdown shadow        | `0 15px 30px rgba(0,0,0,0.2)`                                           | style.css            |
| Dropdown border-radius | 4px                                                                     | style.css            |
| Active border          | `#5897fb` (blue)                                                        | chosen.css           |
| Highlighted item       | `#3875d7` → `#2a62bc` gradient                                          | chosen.css           |
| Search input height    | 32px, font-size 14px                                                    | style.css            |

## Replication notes

- The original uses **Chosen.js** (jQuery plugin) to style `<select multiple>` elements. In React, replace with a **custom multi-select component** — no jQuery dependency.
- This is a **snippet**, not a full-page template. The React app renders a centered page layout with the heading and three multiselect components.
- Key difference from Multiselect V19 (prepped as "Multibox"): V20 shows **three dropdowns** stacked vertically, each wrapped in a different color variant class (`.color-1`, `.color-2`, `.color-3`), and the heading includes "(Limit to 5)" indicating a max-selection feature.
- The heading text is "Multi-Select #10 (Limit to 5)" — the React version should paraphrase this (e.g., "Multi-Select Showcase (Limit 5)") but keep the same structure.
- All three dropdowns share the same options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd.
- Each dropdown is limited to 5 selections (max). The React version must enforce this limit and provide visual feedback when the limit is reached.
- The preview URL is accessible; design tokens were extracted from the live CSS files.

## Requirements

### Requirement: Multi-variant multi-select snippet with selection limit

The application SHALL render three independently-operating multi-select dropdowns with distinct color-variant tags, a max-selection limit of 5 per dropdown, search/filter functionality, and a centered heading.

#### Scenario: Page renders with heading

- **Given** the user loads the page
- **When** the page finishes rendering
- **Then** a heading is visible containing "Multi-Select" and "Limit" text
- **And** the heading is centered horizontally

#### Scenario: Page has light gray background

- **Given** the user loads the page
- **When** the body background is inspected
- **Then** the background color is approximately `#efefef`

#### Scenario: Three multi-select components render

- **Given** the user loads the page
- **When** the multi-select areas are visible
- **Then** three separate multi-select inputs are shown
- **And** each input has placeholder text "Select Categories"
- **And** each container has rounded corners (border-radius ~4px)
- **And** each container has a subtle box-shadow

#### Scenario: Color variants are distinct

- **Given** the user loads the page
- **When** the three multi-select components are visible
- **Then** the first component uses cream/yellow tag color (`#e5e4cc`)
- **And** the second component uses green tag color (`#c7f0db`)
- **And** the third component uses blue tag color (`#d3f4ff`)

#### Scenario: Multi-select opens dropdown on click

- **Given** the user has not selected any options
- **When** the user clicks a multi-select input
- **Then** a dropdown appears below the input
- **And** the dropdown lists all available options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd

#### Scenario: Selecting an option adds a tag

- **Given** the dropdown is open
- **When** the user clicks the "Design" option
- **Then** a tag labeled "Design" appears inside the input area
- **And** the "Design" option is removed from the dropdown list
- **And** the dropdown remains open for further selections

#### Scenario: Selection limit is enforced at 5

- **Given** the user has selected 5 options in a dropdown
- **When** the user attempts to select a 6th option
- **Then** the 6th option cannot be selected
- **And** the dropdown shows a visual indication that the limit is reached
- **And** only 5 tags are visible in the input area

#### Scenario: Deselecting a tag frees a slot

- **Given** the user has selected 5 options in a dropdown
- **When** the user clicks the close button on one of the selected tags
- **Then** the tag is removed
- **And** the deselected option reappears in the dropdown list
- **And** the user can now select another option

#### Scenario: Each dropdown operates independently

- **Given** the user has selected 5 options in the first dropdown
- **When** the user interacts with the second dropdown
- **Then** the second dropdown allows independent selections
- **And** the first dropdown's selections are unchanged

#### Scenario: Search field works within dropdown

- **Given** a dropdown is open
- **When** the user types in the search input field
- **Then** the option list is filtered to match the search text
- **And** only matching options remain visible

#### Scenario: Accessibility — semantic elements

- **Given** the user loads the page
- **When** the page is inspected for accessibility
- **Then** each multi-select has an associated label element
- **And** the heading uses a semantic heading element (h2)
- **And** interactive elements have appropriate ARIA attributes

## Verification checklist

- [ ] Heading renders centered with "Multi-Select" and "Limit" text
- [ ] Background color matches `#efefef`
- [ ] Three multi-select components render vertically stacked
- [ ] Each component shows placeholder "Select Categories"
- [ ] Color variant 1: cream tags `#e5e4cc`
- [ ] Color variant 2: green tags `#c7f0db`
- [ ] Color variant 3: blue tags `#d3f4ff`
- [ ] Dropdown opens on click with all 8 options
- [ ] Selecting an option adds a colored tag
- [ ] Max 5 selections enforced per dropdown
- [ ] Visual feedback when limit is reached
- [ ] Deselecting frees a slot
- [ ] Each dropdown operates independently
- [ ] Search/filter works within dropdown
- [ ] Accessibility: labels, semantic HTML, ARIA
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
