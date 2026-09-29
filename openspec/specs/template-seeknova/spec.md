# Template: SeekNova (Search Form)

## Purpose

Recreation of ColorLib **Colorlib Search 6** (`colorlib-search-6`).

- **Source:** https://colorlib.com/wp/template/colorlib-search-6/
- **Preview:** https://colorlib.com/etc/searchf/colorlib-search-6/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-6.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript.

A full-viewport hero search component with a photographic background, a bold
white heading, a pill-shaped search input with an inline magnifying-glass
icon, and a row of dark category-filter suggestion pills below the input.

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token              | Value                          | Notes                                            |
| ------------------ | ------------------------------ | ------------------------------------------------ |
| Font family        | `'Poppins', sans-serif`        | Weights 400 (body) and 800 (heading)             |
| Suggestion font    | `'Helvetica', sans-serif`      | 14 px, used on category pills only               |
| Heading color      | `#ffffff`                      | 36 px, font-weight 800, italic bold              |
| Input background   | `#ffffff`                      | Solid white, no border                           |
| Input text color   | `#666666`                      | 18 px                                            |
| Placeholder color  | `#cccccc`                      | 18 px                                            |
| Input border-radius| `34px`                         | Fully pill-shaped                                |
| Input height       | `70 px` (desktop), `50 px` (mobile) | Vertical centering                     |
| Input padding      | `10px 32px 10px 70px`          | Left padding clears the 70px icon column         |
| Search icon fill   | `#cccccc` → `#666666` on hover | 30×30 px SVG, transitions 0.2 s                  |
| Suggestion bg      | `rgba(0, 0, 0, 0.6)`          | Semi-transparent dark overlay                    |
| Suggestion color   | `#ffffff`                      | 14 px, Helvetica                                |
| Suggestion radius  | `16px`                         | Pill-shaped                                      |
| Suggestion padding | `0 15px`                       | Horizontal only; line-height 32 px               |
| Suggestion margin  | `10px right, 10px bottom`      | Horizontal gap + vertical wrap                   |
| Background image   | `../images/Searchs_006.png`    | Full-viewport cover, centered                   |
| Form max-width     | `790 px`                       | Centered via flexbox                             |
| Container padding  | `15 px`                        | On `.s006` wrapper                               |

## Visual Description (from screenshot)

Full-viewport photographic background: a fashion/lifestyle image of a woman
with a teal/mint background and scattered confetti shapes. Centered vertically
and horizontally on the page:

1. **Heading:** bold italic white text — "What are you looking for?"
2. **Search input:** white pill-shaped bar with a gray magnifying-glass icon
   anchored to the left inside the input. Placeholder/value text in dark gray.
3. **Category pills:** a horizontally-wrapped row of dark semi-transparent
   rounded pills with white text — "New Arrivals", "Ladies", "Mens",
   "Accessories", "Sale". Each pill is clickable/interactive.

No footer, no navigation, no additional sections — this is a single-section
search form widget.

## Gherkin Requirements

### Scenario: Full-viewport search hero renders

```gherkin
Given the user opens the SeekNova page
Then a full-viewport container is visible
  And the container has a photographic background image covering the viewport
  And the content is centered both vertically and horizontally
```

### Scenario: Heading displays correctly

```gherkin
Given the user opens the SeekNova page
Then a heading is visible with text "What are you looking for?"
  And the heading is white, bold, and italic
  And the heading uses the Poppins font at 36px / weight 800
```

### Scenario: Search input renders with pill shape

```gherkin
Given the user opens the SeekNova page
Then a text input is visible inside a white pill-shaped container
  And the input has a border-radius of 34px (fully rounded)
  And the input height is 70px on desktop viewports
  And the input placeholder text is light gray (#cccccc)
```

### Scenario: Search icon is visible inside input

```gherkin
Given the user opens the SeekNova page
Then a magnifying-glass SVG icon is visible inside the search input
  And the icon is positioned on the left side of the input
  And the icon fill color is light gray (#cccccc)
  And on hover the icon fill darkens to #666666
```

### Scenario: User can type in the search input

```gherkin
Given the user opens the SeekNova page
When the user clicks the search input
  And types "shoes"
Then the input displays "shoes"
  And the input text color is #666666
```

### Scenario: Category suggestion pills render

```gherkin
Given the user opens the SeekNova page
Then 5 suggestion pills are visible below the search input
  And the pills read "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"
  And each pill has a dark semi-transparent background (rgba(0,0,0,0.6))
  And each pill has white text in Helvetica at 14px
  And each pill has a border-radius of 16px (pill-shaped)
```

### Scenario: Suggestion pills wrap on narrow viewports

```gherkin
Given the user opens the SeekNova page on a mobile viewport (width < 768px)
Then the search input height reduces to 50px
  And the search icon size reduces to 26px
  And the suggestion pills wrap to multiple rows if needed
```

### Scenario: Form submits on Enter

```gherkin
Given the user opens the SeekNova page
When the user types "jacket" in the search input
  And presses Enter
Then the form submit event fires
  And the search query is accessible
```

## Verification Checklist

- [ ] Full-viewport container with background image (use `picsum.photos` placeholder)
- [ ] Heading: "What are you looking for?" — white, bold, italic, Poppins 36px/800
- [ ] Pill-shaped search input: white bg, border-radius 34px, height 70px
- [ ] Magnifying-glass SVG icon inside input, left-aligned, gray → darker on hover
- [ ] Input accepts text, placeholder visible when empty
- [ ] 5 category pills: "New Arrivals", "Ladies", "Mens", "Accessories", "Sale"
- [ ] Pills: dark semi-transparent bg, white text, Helvetica 14px, border-radius 16px
- [ ] Responsive: input shrinks to 50px height on mobile (< 768px)
- [ ] Form fires submit event on Enter key
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `seeknova.free.componentdock.com`
- [ ] `package.json` homepage is `https://seeknova.free.componentdock.com`
- [ ] Tests pass at 100% coverage
