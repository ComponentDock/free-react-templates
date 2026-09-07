# Template: OptionVault (Multiselect With Categories)

## Purpose

Recreation of ColorLib "Multiselect V08" — a centered page showcasing a multi-select dropdown with categorized optgroups (NFL teams by division). Built as a React + Tailwind CSS single-page app.

- **Source template:** ColorLib Multiselect 08
- **Source slug:** `multiselect-08`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-08/
- **ColorLib page:** https://colorlib.com/wp/template/multiselect-08/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-08.jpg
- **Category:** Bootstrap Multiselect Templates

## Design tokens (from reference)

| Token | Value | Notes |
|---|---|---|
| Font family | `"Lato", Arial, sans-serif` | Google Fonts Lato (weights 300, 400, 700) |
| Brand primary | `#a7d129` | Lime green — links, borders, highlighted items, bg-primary |
| Body text | `gray` | Default paragraph color |
| Headings | `#000` | Bold black, font-weight 400 |
| Background | `#ffffff` | White page background |
| Body font-size | `16px` | Base size |
| Heading (h2) | `28px` | `.heading-section` |
| List item font | `14px` | Dropdown option text |
| Group header font | `17px` | Optgroup label |
| Border radius | `4px` | Chosen.js container & drop |
| Border color | `#a7d129` | Chosen border & drop border |
| Highlighted bg | `#a7d129` | Selected/hovered dropdown items |
| Group header bg | `rgba(0,0,0,0.05)` | Optgroup background |
| Search choice bg | `rgba(0,0,0,0.1)` | Selected tag chips |

## Visual design (from screenshot)

The page has a clean, minimal white background. A centered section contains a large heading "Multiselect #08" followed by a styled multi-select dropdown. The dropdown shows categorized options grouped by NFL divisions (NFC East, NFC North, etc.). Selected items appear as chip/tag badges below the input. The dropdown border and highlighted items use a distinctive lime-green brand color (#a7d129). Overall aesthetic: clean utility/component demo page, not a full website.

## Structure (section order)

1. **Page wrapper** — full-page centered section with padding (7em vertical)
2. **Heading** — centered "Multiselect #08" (h2, 28px, black)
3. **Multiselect component** — centered container (col-lg-6) with:
   - A multi-select dropdown with search input and placeholder "Your Favorite Football Teams"
   - Category groupings (optgroups) for NFL divisions
   - Selected items shown as removable tag chips
   - Dropdown highlights lime-green on hover/selection
4. **Footer attribution** — "Made with Component Dock" link (required by conventions)

## Gherkin requirements

### Scenario: Page renders heading
- **Given** the user visits the OptionVault page
- **Then** a heading "Multiselect #08" is visible centered at the top

### Scenario: Dropdown placeholder text
- **Given** the page is loaded with no selections
- **Then** the dropdown shows placeholder text "Your Favorite Football Teams"

### Scenario: Category groupings visible
- **Given** the user opens the dropdown
- **Then** options are grouped under category headers: "NFC EAST", "NFC NORTH", "NFC SOUTH", "NFC WEST", "AFC EAST", "AFC NORTH", "AFC SOUTH", "AFC WEST"

### Scenario: Select single option
- **Given** the dropdown is open
- **When** the user clicks "Dallas Cowboys"
- **Then** "Dallas Cowboys" appears as a selected tag/chip below the input
- **And** the option is marked as selected in the dropdown

### Scenario: Select multiple options
- **Given** the user has already selected "Dallas Cowboys"
- **When** the user clicks "New York Giants"
- **Then** both "Dallas Cowboys" and "New York Giants" appear as selected tags

### Scenario: Deselect option
- **Given** the user has selected "Dallas Cowboys"
- **When** the user clicks the remove (×) button on the "Dallas Cowboys" tag
- **Then** "Dallas Cowboys" is removed from the selection

### Scenario: Search/filter options
- **Given** the dropdown is open
- **When** the user types "Packers" in the search field
- **Then** only "Green Bay Packers" is shown in the filtered results

### Scenario: Empty state
- **Given** the user has not selected any options
- **Then** no tag chips are visible below the input

### Scenario: Accessibility — keyboard navigation
- **Given** the dropdown is focused
- **When** the user presses arrow keys
- **Then** focus moves through the options sequentially
- **And** Enter selects the focused option

### Scenario: Footer link
- **Given** the user scrolls to the bottom
- **Then** a link to "https://www.componentdock.com/" labeled "Component Dock" is visible

## Verification checklist

- [ ] Page renders with correct heading text and centered layout
- [ ] Font is Lato (loaded via Google Fonts)
- [ ] Brand color #a7d129 applied to links, borders, and highlighted items
- [ ] Multi-select dropdown shows placeholder text
- [ ] Options grouped under 8 NFL division categories
- [ ] Clicking an option adds it as a tag chip
- [ ] Clicking × on a tag chip removes the selection
- [ ] Search input filters the visible options
- [ ] Keyboard navigation works (arrow keys, Enter, Escape)
- [ ] Footer contains Component Dock link
- [ ] No reference to ColorLib in app code (spec-only provenance)
- [ ] Uses picsum.photos for any placeholder images
- [ ] 100% test coverage on new components
- [ ] Tailwind classes used via cn() utility
