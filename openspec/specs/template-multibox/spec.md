# Template: Multibox (Multiselect Snippet)

## Purpose

Recreation of ColorLib **Multiselect V19** (`multiselect-19`), a fancy multi-select snippet built with Chosen.js and Bootstrap. This is a **snippet/component template**, not a full-page layout — it renders a centered heading and a styled multi-select dropdown with tag-style selections.

- **Source slug:** `multiselect-19`
- **Source URL:** https://colorlib.com/wp/template/multiselect-19/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-19/ (returns 404 at time of research; screenshot and fallback CSS used)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-19.jpg (1200×972, AVIF)
- **Category:** Bootstrap Multiselect Snippet
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from `css/style.css` and `css/chosen.css` of the ColorLib preview (fetched 2026-09-07):

| Token | Value | Source |
|-------|-------|--------|
| Body font | `"Roboto", sans-serif` (weights 300, 400) | style.css |
| Heading font | `"Roboto", sans-serif` | style.css |
| Body background | `#efefef` (light gray) | style.css |
| Heading size (h2) | `20px`, centered | style.css |
| Content padding | `7rem 0` (top/bottom) | style.css |
| Paragraph color | `#b3b3b3`, font-weight 300 | style.css |
| Multi-select container | border: none, border-radius: 4px, box-shadow: 0 1px 4px rgba(0,0,0,0.1) | style.css |
| Selected tag background | `#e5e4cc` (cream/yellow) | style.css `.color-1` |
| Tag border-radius | 3px (Chosen.js default) | chosen.css |
| Dropdown shadow | `0 15px 30px rgba(0,0,0,0.2)` | style.css |
| Dropdown border-radius | 4px | style.css |
| Active border | `#5897fb` (blue) | chosen.css |
| Highlighted item | `#3875d7` → `#2a62bc` gradient | chosen.css |
| Search input height | 32px, font-size 14px | style.css |
| Link transition | 0.3s ease | style.css |
| Text no-decoration | enforced via `!important` | style.css |

## Replication notes

- The original uses **Chosen.js** (jQuery plugin) to style the `<select multiple>` element. In React, we replace this with a **custom multi-select component** — no jQuery dependency.
- The original is a **snippet**, not a full-page template. The React app will have a centered page layout with the heading and the multiselect component, matching the original's visual presentation.
- The preview URL returned 404; design tokens were extracted from the CSS files fetched from the preview domain. The screenshot (AVIF 1200×972) shows a light gray (#efefef) background with centered content.
- The original has three color variants (`.color-1` cream `#e5e4cc`, `.color-2` green `#c7f0db`, `.color-3` blue `#d3f4ff`). The React version should support variant switching.

## Gherkin requirements

### Feature: Multibox — styled multi-select snippet

#### Scenario: Page renders with heading
- **Given** the user loads the page
- **When** the page finishes rendering
- **Then** a heading "Multi-Select #9" (or equivalent) is visible
- **And** the heading is centered horizontally

#### Scenario: Page has light gray background
- **Given** the user loads the page
- **When** the body background is inspected
- **Then** the background color is approximately `#efefef`

#### Scenario: Multi-select component renders
- **Given** the user loads the page
- **When** the multi-select area is visible
- **Then** an input field with placeholder "Select Categories" is shown
- **And** the container has rounded corners (border-radius ~4px)
- **And** the container has a subtle box-shadow

#### Scenario: Multi-select opens dropdown on click
- **Given** the user has not selected any options
- **When** the user clicks the multi-select input
- **Then** a dropdown appears below the input
- **And** the dropdown lists all available options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd

#### Scenario: Selecting an option adds a tag
- **Given** the dropdown is open
- **When** the user clicks the "Design" option
- **Then** a tag labeled "Design" appears inside the input area
- **And** the "Design" option is removed from the dropdown list
- **And** the dropdown remains open for further selections

#### Scenario: Selected tags have distinct styling
- **Given** the user has selected one or more options
- **When** the tags are rendered
- **Then** each tag has a cream/yellow background (`#e5e4cc`)
- **And** each tag has rounded corners (~3px border-radius)
- **And** each tag has a close/remove button (×)

#### Scenario: Removing a selected tag
- **Given** the user has selected "Design" and "HTML5"
- **When** the user clicks the × on the "Design" tag
- **Then** the "Design" tag is removed from the input area
- **And** "Design" reappears in the dropdown options
- **And** the "HTML5" tag remains

#### Scenario: Search/filter within multi-select
- **Given** the user has opened the dropdown
- **When** the user types "Boot" in the search input
- **Then** only the "Bootstrap" option is shown in the dropdown
- **And** other non-matching options are hidden

#### Scenario: Component supports variant colors
- **Given** the component is rendered with the default variant
- **When** the variant is changed to variant-2
- **Then** the selected tag background changes to green (`#c7f0db`)
- **When** the variant is changed to variant-3
- **Then** the selected tag background changes to blue (`#d3f4ff`)

#### Scenario: Responsive layout
- **Given** the user views the page on a narrow viewport (< 768px)
- **When** the layout adjusts
- **Then** the heading and multi-select remain centered
- **And** the multi-select container fills available width up to its max

## Verification checklist

- [ ] Heading renders centered with correct font (Roboto)
- [ ] Body background is `#efefef`
- [ ] Multi-select container has border-radius 4px and subtle shadow
- [ ] Dropdown opens on click, lists all 8 options
- [ ] Selecting an option creates a tag with cream background
- [ ] Tags have close buttons and are removable
- [ ] Dropdown remains open for multi-selection
- [ ] Search/filter works within the dropdown
- [ ] Variant color switching works (cream/green/blue)
- [ ] Responsive on narrow viewports
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] Tests pass with 100% coverage
