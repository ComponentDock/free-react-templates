# Template: SearchGate (Search Form)

## Purpose

Recreation of ColorLib **Search Form V5** (`colorlib-search-5`).
Preview: https://colorlib.com/etc/searchf/colorlib-search-5/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-5.jpg
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

A full-viewport hero search component: a bold heading, a black rectangular
search input with an embedded magnifying-glass icon button, and clickable
suggestion tags below. Designed as an embeddable eCommerce search snippet with
a background image.

**Preview note:** The ColorLib preview page (preview.colorlib.com/theme/colorlib-search-5/) returns 404. The demo was reachable via https://colorlib.com/etc/searchf/colorlib-search-5/ and the CSS was fetched from that page. The screenshot image was analyzed for visual fidelity.

## Design Tokens

| Token                | Value                              | Source                   |
|----------------------|------------------------------------|--------------------------|
| Background           | Image (`Searchs_005.png`), cover, centered | `.s005` background |
| Font family          | Poppins, sans-serif (400 + 800)    | `@font-face` + `.s005`   |
| Heading font-size    | `36px`                             | `legend` font-size       |
| Heading font-weight  | `800` (extra-bold)                 | `legend` font-weight     |
| Heading color        | `#ffffff`                          | `legend` color           |
| Heading margin-bottom| `50px`                             | `legend` margin-bottom   |
| Heading text-transform| `uppercase`                       | visible in screenshot    |
| Search bar background| `#000000` (black)                  | `.choices__inner` bg     |
| Search bar radius    | `0` (sharp/square corners)         | `.choices__inner` border-radius: 0 |
| Search bar border    | `0` (no border)                    | `.choices__inner` border: 0 |
| Search bar min-height| `70px`                             | `.choices__inner` min-height |
| Search bar padding   | `10px 70px 6.25px 32px`           | `.choices__inner` padding |
| Input text color     | `#ffffff` (white)                  | `.choices__inner` color  |
| Input font-size      | `18px`                             | `.choices__inner` font-size |
| Placeholder color    | `rgba(255,255,255,0.5)` (light gray/white, browser default on black bg) | visual |
| Search icon fill     | `#cccccc` (default) / `#ffffff` (hover) | `.btn-search svg`  |
| Search icon size     | `40px × 40px`                      | `.btn-search svg`        |
| Search button width  | `70px`                             | `.btn-search` width      |
| Search button position | `absolute`, right: 0, top: 0     | `.btn-search`            |
| Suggestion font      | Helvetica, sans-serif, `14px`      | `.suggestion-wrap span`  |
| Suggestion color     | `#ffffff` (white)                  | `.suggestion-wrap span` color |
| Suggestion line-height| `32px`                            | `.suggestion-wrap span` line-height |
| Suggestion margin    | `0 35px 10px 0`                    | `.suggestion-wrap span` margins |
| Form max-width       | `790px`                            | `form` max-width         |

## Structure

Full-viewport section (`.s005`):
1. **Background image** — full-viewport, cover, centered (fashion photo)
2. **Heading** — "WHAT ARE YOU LOOKING FOR?" in bold white uppercase text, centered
3. **Search form** — centered, max-width 790px
   a. **Inner form** — contains the input field
   b. **Search input** — black rectangular bar, text input with placeholder "Type to search."
   c. **Search icon button** — absolutely positioned inside the bar, gray magnifying glass SVG (white on hover)
4. **Suggestion tags** — row of white text links below the search bar: "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"

## Gherkin Requirements

### Scenario: Page renders with background image
```
Given the user opens the SearchGate page
Then the viewport is filled with a background image
And the background is centered and covers the full viewport
```

### Scenario: Heading is displayed
```
Given the user opens the SearchGate page
Then the heading "WHAT ARE YOU LOOKING FOR?" is visible
And the heading is white, bold (weight 800), uppercase, and centered
And the heading font size is 36px
```

### Scenario: Search bar renders as black rectangle
```
Given the user opens the SearchGate page
Then a black search bar is centered below the heading
And the search bar has sharp corners (border-radius 0)
And the search bar has no visible border
And the search bar has a minimum height of 70px
```

### Scenario: Text input accepts search query
```
Given the user opens the SearchGate page
Then a text input with placeholder "Type to search." is visible inside the search bar
When the user types "shoes" into the input
Then the input value is "shoes"
```

### Scenario: Search icon button is interactive
```
Given the user opens the SearchGate page
Then a magnifying glass icon is visible on the right side of the search bar
And the icon fill color is #cccccc
When the user hovers over the search icon
Then the icon fill color changes to #ffffff
```

### Scenario: Suggestion tags are displayed
```
Given the user opens the SearchGate page
Then 5 suggestion tags are visible below the search bar
And the tags read: "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"
And the tags are white, 14px Helvetica, inline with spacing
```

### Scenario: Responsive layout on mobile
```
Given the user opens the SearchGate page on a viewport narrower than 768px
Then the search bar and heading remain centered
And the search bar adapts to the smaller width
```

## Verification Checklist

- [ ] Background image covers the full viewport (centered, cover)
- [ ] Font is Poppins (loaded via Google Fonts link in index.html)
- [ ] Heading "WHAT ARE YOU LOOKING FOR?" is visible, white, bold, uppercase, centered, 36px
- [ ] Search bar has black background (#000), `0` border-radius (square), `70px` min-height, no border
- [ ] Input has placeholder "Type to search." in white/light color
- [ ] Search icon is `40x40px` SVG, `#ccc` fill, `#fff` on hover
- [ ] 5 suggestion tags visible below: New Arrivals, Ladies, Mens, Accessories, Sale
- [ ] Suggestion tags are white, `14px` Helvetica, with right margin spacing
- [ ] Form max-width is `790px`
- [ ] No reference to ColorLib anywhere in app code
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
