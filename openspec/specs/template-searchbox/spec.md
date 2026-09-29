# Template: Searchbox (Search Form)

## Purpose

Recreation of ColorLib **Colorlib Search Form V7** — a centered, advanced search form with category dropdowns and a clean, modern card layout.

- **Source:** https://colorlib.com/wp/template/colorlib-search-7/
- **Preview:** https://colorlib.com/etc/searchf/colorlib-search-7/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Search Form / Search Bar

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

## Gherkin Scenarios

### Background
```
Given the page loads
Then the viewport is filled with a solid cyan/blue background (#00b5e9)
And a white card is centered vertically and horizontally
And the card has a subtle box-shadow
```

### Main Search Bar
```
Given the card is displayed
Then a magnifying glass icon appears on the left side of the input
And the input has placeholder text "Search..."
And the input is 70px tall with white background
And a result count badge shows "108 results" on the right side
And the number "108" is displayed in green (#57b846)
And the text "results" is displayed in dark gray (#555)
```

### Advanced Search Panel
```
Given the main search bar is visible
Then a label "Advanced Search" appears below the search bar
And 6 custom dropdown selects are arranged in 2 rows of 3
And Row 1 contains: ACCESSORIES, COLOR, SIZE
And Row 2 contains: SALE, TIME, TYPE
And each dropdown has an underline-style border (2px solid #ccc)
And each dropdown has a custom chevron icon on the right
And the dropdowns use transparent background with white text
```

### Dropdown Interaction
```
Given a dropdown is clicked
Then the dropdown opens with a list of options
And the chevron icon flips upward
And the border color changes to a lighter gray (#b7b7b7)
```

### Action Buttons
```
Given the advanced search panel is displayed
Then a green "Search" button is shown on the left
And the button has white text on green (#57b846) background
And the button has a 3px border-radius
And hovering the button darkens it to #4ea63f
And a "Delete" text button appears to the right of Search
And the Delete button has no background and dark gray text (#555)
And hovering the Delete button turns text black (#000)
```

### Responsive Behavior
```
Given the viewport width is less than 768px
Then the search input padding adjusts for smaller icon
And the dropdown rows stack vertically (single column)
And each dropdown takes full width
```

## Verification Checklist

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
