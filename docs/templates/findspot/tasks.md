# Findspot — Implementation Tasks

Source: ColorLib Search Form 23
Preview: https://preview.colorlib.com/theme/colorlib-search-23/ (404 at prep time)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-23.jpg

## Structure order

1. **Background layer** — full-viewport white page with background image (dog photo → picsum placeholder) positioned bottom-right
2. **Search bar** — centered horizontally, upper-third vertical position
   - Pill/capsule shape (large border-radius)
   - Light sage green background (#e8f0ea)
   - Left: magnifying glass icon (lucide-react `Search`)
   - Center: text input with placeholder "What are you looking for?"
   - Right: green "SEARCH" button (#5cb85c, white text, uppercase)
3. **Hint text** — below search bar, "ex. Game, Music, Video, Photography" in light gray
4. **Footer** — Component Dock attribution (per conventions)

## Section-by-section fidelity notes

### Background
- Full-viewport (`min-h-screen`) white background
- Background image: original uses a dog photo in the bottom-right corner
  → Use `https://picsum.photos/seed/findspot/800/600` as placeholder
- Image should not obscure the search bar
- Consider `bg-no-repeat bg-bottom bg-contain` or absolute positioning

### Search bar container
- Horizontally centered (`mx-auto` + max-width)
- Vertical position: upper 30-40% of viewport
- Pill shape: `rounded-full` or large `rounded-[24px]`
- Background: light sage green (#e8f0ea)
- Padding: generous internal padding
- Flexbox row layout: icon | input | button

### Search icon
- Magnifying glass icon (lucide-react `Search`)
- Gray color (~#666)
- Positioned left inside the search bar

### Text input
- Transparent background (shows pill background through)
- No visible border
- Placeholder: "What are you looking for?" in gray
- Font: inherit from body (system sans-serif)
- Fills available space between icon and button

### Search button
- Green background (#5cb85c)
- White text, uppercase, "SEARCH"
- Rounded right end (matches pill shape)
- Padding: horizontal ~24px, vertical ~12px
- No border
- Cursor pointer, hover: slightly darker green

### Hint text
- Below the search bar
- "ex. Game, Music, Video, Photography"
- Light gray color (~#aaa)
- Font size: small (~14px)
- Left-aligned with search bar start

### Footer
- Per conventions: link to componentdock.com
- Minimal, consistent with other search templates
