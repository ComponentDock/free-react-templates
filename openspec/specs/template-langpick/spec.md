# Template: LangPick (Multiselect Dropdown)

## Purpose

Recreation of ColorLib "Multiselect 03" — a minimalist Bootstrap 4 multiselect
dropdown snippet for selecting programming languages. The original uses Semantic UI
for a clean, centered dropdown component with a blue accent palette.

- **Source slug:** `multiselect-03`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-03/
- **ColorLib page:** https://colorlib.com/wp/template/multiselect-03/
- **Stack:** React 19, Tailwind CSS 4, TypeScript (strict), Vite

## Design tokens

| Token            | Value                                 | Notes                                         |
| ---------------- | ------------------------------------- | --------------------------------------------- |
| brand-color      | `#3e64ff`                             | Blue — links, dropdown hover, active items    |
| text-color       | `#000000`                             | Headings and body text                        |
| body-text        | `gray`                                | Body paragraph color                          |
| bg-color         | `#ffffff`                             | Section and page background                   |
| border-color     | `#e6e6e6`                             | Dropdown borders and menu item separators     |
| font-family      | `"Lato", Arial, sans-serif`           | Loaded via Google Fonts (weights 300/400/700) |
| font-size-base   | `16px`                                | Body text                                     |
| line-height      | `1.8`                                 | Body line height                              |
| heading-size     | `28px`                                | Section heading                               |
| dropdown-shadow  | `0px 3px 19px -15px rgba(0,0,0,0.41)` | Active dropdown menu shadow                   |
| section-padding  | `7em 0`                               | Top/bottom section padding                    |
| item-font-size   | `13px`                                | Dropdown menu item text size                  |
| item-hover-bg    | `transparent`                         | Dropdown item hover background                |
| item-hover-color | `#3e64ff`                             | Dropdown item hover text color                |

## Gherkin requirements

### Scenario: Section renders with centered heading

- Given the page loads
- Then the section heading "Multiselect #03" is visible
- And the heading is centered horizontally
- And the heading text is 28px and black (#000)

### Scenario: Multiselect dropdown renders with language options

- Given the page loads
- Then a multiselect dropdown is visible
- And the dropdown label reads "Select Language"
- And the dropdown contains options "All", "PHP", "Javascript", "Java", "jQuery", "SQL", "Wordpress", "Python", ".Net", "HTML", "CSS"
- And the dropdown supports multiple selection

### Scenario: Dropdown opens on click

- Given the multiselect dropdown is closed
- When the user clicks the dropdown
- Then the dropdown menu expands
- And all language options are visible
- And the menu has a shadow (`0px 3px 19px -15px rgba(0,0,0,0.41)`)

### Scenario: Option selection and tag rendering

- Given the dropdown is open
- When the user selects "PHP"
- Then a blue (#3e64ff) label tag appears for "PHP"
- And the tag has white text
- And clicking the tag's remove icon deselects the option

### Scenario: Multiple selections

- Given "PHP" is selected
- When the user selects "Javascript" and "Python"
- Then three label tags are visible
- And each tag is blue (#3e64ff) with white text

### Scenario: All option behavior

- Given the dropdown is open
- When the user selects "All"
- Then all language options are selected
- And tags appear for every language

### Scenario: Dropdown item hover style

- Given the dropdown is open
- When the user hovers over a language option
- Then the item text turns blue (#3e64ff)
- And the item background stays transparent

### Scenario: Responsive layout

- Given the viewport is less than 768px wide
- Then the dropdown takes full width
- And the section heading remains centered

## Verification checklist

- [ ] Section renders with centered "Multiselect #03" heading at 28px
- [ ] Multiselect dropdown shows "Select Language" label
- [ ] All 11 language options (All + 10 languages) are present
- [ ] Multiple selection works with tag rendering
- [ ] Tags are blue (#3e64ff) with white text and remove icon
- [ ] Dropdown menu has shadow when open
- [ ] Hover on items shows blue text on transparent background
- [ ] Responsive: full-width on mobile, centered on desktop
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
