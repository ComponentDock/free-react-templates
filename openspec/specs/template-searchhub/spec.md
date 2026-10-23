# Template: SearchHub (Search Form & Bar)

## Purpose

Recreation of ColorLib **Search Form V4** (`colorlib-search-4`).
Preview: https://colorlib.com/etc/searchf/colorlib-search-4/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-4.jpg
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

A full-viewport hero search component: a bold heading, a pill-shaped search
input with an embedded search icon button, and clickable suggestion tags
below. Designed as an embeddable eCommerce search snippet with a background
image.

## Design Tokens

| Token                | Value                              | Source                   |
|----------------------|------------------------------------|--------------------------|
| Background           | Image (`Searchs_004.png`), cover, centered | `.s004` background |
| Font family          | Poppins, sans-serif (400 + 800)    | `@font-face` + `.s004`   |
| Heading font-size    | `36px`                             | `legend` font-size       |
| Heading font-weight  | `800` (extra-bold)                 | `legend` font-weight     |
| Heading color        | `#ffffff`                          | `legend` color           |
| Heading margin-bottom| `50px`                             | `legend` margin-bottom   |
| Search bar background| `#ffffff`                          | `.choices__inner` bg     |
| Search bar radius    | `34px` (pill shape)                | `.choices__inner` border-radius |
| Search bar min-height| `70px`                             | `.choices__inner` min-height |
| Search bar padding   | `10px 70px 10px 32px`             | `.choices__inner` padding |
| Input text color     | `#666666`                          | `.choices__inner` color  |
| Input font-size      | `18px`                             | `.choices__inner` font-size |
| Placeholder color    | (browser default, light gray)      | Input placeholder        |
| Search icon fill     | `#333333` (default) / `#000000` (hover) | `.btn-search svg`  |
| Search icon size     | `40px × 40px`                      | `.btn-search svg`        |
| Search button width  | `70px`                             | `.btn-search` width      |
| Suggestion font      | Helvetica, sans-serif, `14px`      | `.suggestion-wrap span`  |
| Suggestion color     | `#ffffff`                          | `.suggestion-wrap span` color |
| Suggestion radius    | `16px`                             | `.suggestion-wrap span` border-radius |
| Suggestion padding   | `0 15px`                           | `.suggestion-wrap span` padding |
| Suggestion margin    | `0 10px 10px 0`                    | `.suggestion-wrap span` margins |
| Form max-width       | `790px`                            | `form` max-width         |
| Suggestion padding-left/right | `15px`                    | `.suggestion-wrap` padding |

## Structure

Full-viewport section (`.s004`):
1. **Heading** — "WHAT ARE YOU LOOKING FOR?" in bold white text, centered
2. **Search form** — centered, max-width 790px
   a. **Inner form** — contains the input field
   b. **Search input** — pill-shaped white bar, text input with placeholder "Type to search..."
   c. **Search icon button** — absolutely positioned inside the bar, dark magnifying glass SVG
3. **Suggestion tags** — row of white pill-shaped tags below the search bar: "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"

## Requirements

### Feature: SearchHub template behaviour

#### Scenario: Page renders with background image

- **GIVEN** the user opens the SearchHub page
- **THEN** the viewport is filled with a background image
- **AND** the background is centered and covers the full viewport

#### Scenario: Heading is displayed

- **GIVEN** the user opens the SearchHub page
- **THEN** the heading "WHAT ARE YOU LOOKING FOR?" is visible
- **AND** the heading is white, bold (weight 800), and centered
- **AND** the heading font size is 36px

#### Scenario: Search bar renders as pill shape

- **GIVEN** the user opens the SearchHub page
- **THEN** a white search bar is centered below the heading
- **AND** the search bar has fully rounded corners (border-radius 34px)
- **AND** the search bar has a minimum height of 70px

#### Scenario: Text input accepts search query

- **GIVEN** the user opens the SearchHub page
- **THEN** a text input with placeholder "Type to search..." is visible inside the search bar
- **WHEN** the user types "shoes" into the input
- **THEN** the input value is "shoes"

#### Scenario: Search icon button is interactive

- **GIVEN** the user opens the SearchHub page
- **THEN** a magnifying glass icon is visible on the right side of the search bar
- **AND** the icon fill color is #333333
- **WHEN** the user hovers over the search icon
- **THEN** the icon fill color changes to #000000

#### Scenario: Suggestion tags are displayed

- **GIVEN** the user opens the SearchHub page
- **THEN** 5 suggestion tags are visible below the search bar
- **AND** the tags read: "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"
- **AND** the tags are white with rounded corners (border-radius 16px)

#### Scenario: Responsive layout on mobile

- **GIVEN** the user opens the SearchHub page on a viewport narrower than 768px
- **THEN** the search bar and heading remain centered
- **AND** the search bar adapts to the smaller width

## Verification checklist

- [ ] Background image covers the full viewport (centered, cover)
- [ ] Font is Poppins (loaded via Google Fonts link in index.html)
- [ ] Heading "WHAT ARE YOU LOOKING FOR?" is visible, white, bold, centered, 36px
- [ ] Search bar has white background, `34px` border-radius (pill shape), `70px` min-height
- [ ] Input has placeholder "Type to search..." in `#666`
- [ ] Search icon is `40x40px` SVG, `#333` fill, `#000` on hover
- [ ] 5 suggestion tags visible below: New Arrivals, Ladies, Mens, Accessories, Sale
- [ ] Suggestion tags are white, `14px` Helvetica, `16px` border-radius
- [ ] Form max-width is `790px`
- [ ] No reference to ColorLib anywhere in app code
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
