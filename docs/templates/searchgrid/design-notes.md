# Searchgrid — Design Notes & Task Outline

## Source

- ColorLib: Search Form Bar 12
- URL: https://colorlib.com/wp/template/search-form-bar-12/
- Preview: 404 (unreachable at prep time)

## Structure (section order)

1. **Navbar** — single section, full-width horizontal bar

## Section-by-Section Fidelity Notes

### Navbar

- White background, thin gray bottom border (1px #e8e8e8)
- Three elements left-to-right: Brand text, Nav links, Search input
- Brand: "Brand" in blue (#2874f0), bold, ~20px
- Nav links: "Home", "About", "Contact" in dark gray (#333), right of brand
- Search input: rounded (border-radius ~20px), magnifying glass icon, placeholder "Search"
- Content centered, max-width ~1200px

### Page Body

- Empty white space below the navbar
- No additional content sections in this template

## Component Breakdown

- `Navbar.tsx` — full navbar component
  - Brand text (could be `<a>` or `<div>`)
  - Navigation links (unordered list of `<a>` tags)
  - Search input with icon

## Design Tokens (from screenshot)

- Brand blue: #2874f0
- Background: #ffffff
- Text dark: #333333
- Border light: #e8e8e8
- Placeholder/muted: #aaaaaa
- Search border: #e0e0e0
- Search radius: 20px (fully rounded)
- Font: system/Inter sans-serif

## Notes

- This is an extremely minimal template — essentially a single component
- The main deliverable is a well-structured, accessible Navbar with search
- Consider making the navbar sticky/fixed as a nice enhancement
