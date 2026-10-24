# Template: Searchbox (Search Form)
<!-- prep-status: shipped-as=searchpeak -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-search-7` design this prep describes already
> ships as `apps/searchpeak` (<https://searchpeak.free.componentdock.com>).
> Do not scaffold `apps/searchbox`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-searchpeak/spec.md`.

## Purpose

Recreation of ColorLib **Colorlib Search Form V7** — a centered, advanced search form with category dropdowns and a clean, modern card layout.

- **Source:** https://colorlib.com/wp/template/colorlib-search-7/
- **Preview:** https://colorlib.com/etc/searchf/colorlib-search-7/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Search Form / Search Bar
- **Source design:** ColorLib "Colorlib Search 7" — https://colorlib.com/wp/template/colorlib-search-7/

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and screenshot analysis.

| Token | Value | Usage |
|---|---|---|
| `--brand-blue` | `#00b5e9` | Full-screen background |
| `--brand-green` | `#57b846` | Search button, result count accent |
| `--brand-green-hover` | `#4ea63f` | Search button hover |
| `--card-bg` | `#ffffff` | Card/form background |
| `--text-primary` | `#555555` | Input text, delete button |
| `--text-secondary` | `#666666` | Input placeholder context |
| `--text-muted` | `#999999` | Placeholder text, "Advanced Search" label |
| `--border-default` | `#cccccc` | Dropdown underline borders, icon fill |
| `--border-dropdown-open` | `#b7b7b7` | Dropdown open state border |
| `--font-family` | `Roboto, sans-serif` | Entire form |
| `--radius-card` | `3px` | Card, input, buttons |
| `--shadow-card` | `0px 8px 20px 0px rgba(0,0,0,0.15)` | Card elevation |
| `--input-height` | `70px` | Main search input |
| `--button-height` | `40px` | Search / Delete buttons |
| `--select-border` | `2px solid #ccc` | Dropdown underline style |
| `--dropdown-chevron` | Inline SVG, `fill: #999` | Custom chevron icon |

## Section Structure

The template is a single-page, full-viewport search form with two visual sections:

1. **Background** — full-screen cyan/blue fill (`min-height: 100vh`)
2. **Search Card** — centered white card with shadow, containing:
   - **Main Search Bar** — search icon (left), text input, result count (right)
   - **Advanced Search Panel** — label + 6 dropdown selects in 2 rows of 3
   - **Action Buttons** — Search (green) + Delete (text-only)

## Requirements

### Background

#### Scenario: Background

- **GIVEN** the page loads
- **THEN** the viewport is filled with a solid cyan/blue background (#00b5e9)
- **AND** a white card is centered vertically and horizontally
- **AND** the card has a subtle box-shadow

### Main Search Bar

#### Scenario: Main Search Bar

- **GIVEN** the card is displayed
- **THEN** a magnifying glass icon appears on the left side of the input
- **AND** the input has placeholder text "Search..."
- **AND** the input is 70px tall with white background
- **AND** a result count badge shows "108 results" on the right side
- **AND** the number "108" is displayed in green (#57b846)
- **AND** the text "results" is displayed in dark gray (#555)

### Advanced Search Panel

#### Scenario: Advanced Search Panel

- **GIVEN** the main search bar is visible
- **THEN** a label "Advanced Search" appears below the search bar
- **AND** 6 custom dropdown selects are arranged in 2 rows of 3
- **AND** Row 1 contains: ACCESSORIES, COLOR, SIZE
- **AND** Row 2 contains: SALE, TIME, TYPE
- **AND** each dropdown has an underline-style border (2px solid #ccc)
- **AND** each dropdown has a custom chevron icon on the right
- **AND** the dropdowns use transparent background with white text

### Dropdown Interaction

#### Scenario: Dropdown Interaction

- **GIVEN** a dropdown is clicked
- **THEN** the dropdown opens with a list of options
- **AND** the chevron icon flips upward
- **AND** the border color changes to a lighter gray (#b7b7b7)

### Action Buttons

#### Scenario: Action Buttons

- **GIVEN** the advanced search panel is displayed
- **THEN** a green "Search" button is shown on the left
- **AND** the button has white text on green (#57b846) background
- **AND** the button has a 3px border-radius
- **AND** hovering the button darkens it to #4ea63f
- **AND** a "Delete" text button appears to the right of Search
- **AND** the Delete button has no background and dark gray text (#555)
- **AND** hovering the Delete button turns text black (#000)

### Responsive Behavior

#### Scenario: Responsive Behavior

- **GIVEN** the viewport width is less than 768px
- **THEN** the search input padding adjusts for smaller icon
- **AND** the dropdown rows stack vertically (single column)
- **AND** each dropdown takes full width

## Verification checklist

- [ ] Full-screen cyan background (#00b5e9) fills viewport
- [ ] White card centered vertically and horizontally
- [ ] Card has box-shadow (0px 8px 20px rgba(0,0,0,0.15))
- [ ] Search icon (magnifying glass SVG) positioned left inside input
- [ ] Main input is 70px tall, white background, placeholder "Search..."
- [ ] Result count "108 results" on right, number in green
- [ ] "Advanced Search" label in muted gray (#999)
- [ ] 6 dropdown selects in 2×3 grid
- [ ] Dropdowns: ACCESSORIES, COLOR, SIZE, SALE, TIME, TYPE
- [ ] Dropdown underline style (2px solid #ccc, transparent bg)
- [ ] Custom chevron SVG icon on dropdowns
- [ ] Green "Search" button (#57b846, white text, bold, 3px radius)
- [ ] "Delete" text button (no bg, gray text, hover black)
- [ ] Responsive: dropdowns stack on mobile (<768px)
- [ ] Font: Roboto (via Google Fonts)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
