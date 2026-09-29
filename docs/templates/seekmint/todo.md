# Seekmint — Implementation Notes

Source: ColorLib Search Form Bar 04 (search-form-bar-04)
New name: seekmint
Preview: https://preview.colorlib.com/theme/search-form-bar-04/ (unreachable — design from screenshot)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-04.jpg

## Section Order (top to bottom)

1. **Full-viewport hero** — diagonal gradient bg (blue-purple → pink-purple), flex center
2. **Heading** — "Search Form/Bar #04" (or customized), white, semi-bold, centered
3. **Search form** — white pill input + embedded circular purple search button
4. **Footer** — Component Dock branding

## Component Structure

```
src/
  App.tsx              — page layout (full-viewport gradient bg + centered content)
  components/
    SearchHero.tsx     — the hero section with heading + search form
    SearchForm.tsx     — pill-shaped input with embedded circular button
    Footer.tsx         — Component Dock link
```

## Fidelity Notes

- Single-section template: one gradient hero, one search form, minimal chrome
- Background is a diagonal linear-gradient, NOT a solid color
  - Blue-purple (#4a3af5) top-left to pink-purple (#c850c0) bottom-right
  - Use Tailwind `bg-gradient-to-br from-[#4a3af5] to-[#c850c0]`
- Search input is pill-shaped: border-radius ~30px, white background
  - Placeholder: "Search..." in light gray (#999)
  - Padding: left ~24px for text, right ~64px to leave room for button
- Search button: circular (48×48), purple (#7c3aed) bg, white magnifying glass icon
  - Positioned at the right end of the input, overlapping the border-radius
  - Use absolute positioning or negative margin to sit inside the input edge
  - Hover: darken to #6d28d9
- Heading: white, ~40px, semi-bold, centered, ~24px gap above the form
- Content centered with `flex flex-col items-center justify-center min-h-screen`
- No parallax, no sections beyond the hero — very minimal template
- Footer: simple "Made with Component Dock" link at the bottom
- Use lucide-react `Search` icon for the magnifying glass
- Google Fonts: Poppins (400, 600 weights)
