# CitySeek — Implementation Notes

Source: ColorLib Search Form 1 (`colorlib-search-1`)
Preview: https://preview.colorlib.com/theme/colorlib-search-1/ (unreachable — design from screenshot)

## Structure Order

1. **Hero Section** — full-viewport background image + dark overlay
2. **Heading** — "Discover the Amazing City" (large, white, centered)
3. **Search Bar** — semi-transparent dark container
   - Input 1: "What are you looking for?" (text input)
   - Input 2: "Location" (text input)
   - Search button (blue, white text)
4. **Footer** — Component Dock attribution link

## Section-by-Section Fidelity Notes

### Hero
- Full viewport height (`min-h-screen`)
- Background image: use `picsum.photos/seed/cityseek-harbor/1920/1080` for a harbor/port cityscape
- Dark overlay via `bg-black/40` or `bg-gradient-to-b from-black/30 to-black/50`
- No navbar — clean landing page

### Search Bar
- Positioned below heading, centered horizontally
- Background: semi-transparent dark (`bg-black/50 rounded`)
- Two inputs side-by-side on desktop, stacked on mobile
- Inputs: white background, generous padding, placeholder text
- Search button: blue (`bg-[#4a7cbe]`), full height of bar, white bold text, no border radius on right side (or slight rounding)

### Responsive
- Desktop: inputs side-by-side with button
- Mobile (< 768px): inputs stack vertically, button full-width

### Footer
- Simple footer with "Made with Component Dock" linking to componentdock.com
- Minimal, matches the clean aesthetic
