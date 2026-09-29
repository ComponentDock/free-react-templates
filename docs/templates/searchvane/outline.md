# SearchVane — Implementation Notes

## Template

- **Name:** SearchVane
- **Source:** ColorLib "Search Form Bar 02" (`search-form-bar-02`)
- **Preview:** `https://preview.colorlib.com/theme/search-form-bar-02/` (404 — screenshot used)
- **Category:** Search Form Bar (standalone animated search component)
- **Stack:** React 19 + Vite + Tailwind 4 + TypeScript

## Structure Order

1. Page wrapper (full viewport centered flex)
2. Search card
   2a. Title heading
   2b. Animated search bar component
3. Footer (Component Dock)

## Design Notes

### Visual Design (from screenshot)

- Light gray background (#f5f5f5), vertically + horizontally centered content
- Title "Search" in dark text, Poppins font, ~28px, centered
- Search bar: pill-shaped white input with blue circular magnifying glass button
- The button is blue (#2196f3), circular, positioned inside or overlapping the input
- On hover, the input may expand from the collapsed button state
- Very clean, minimalist aesthetic — single-purpose search widget

### Animation

- On hover or click, the circular search button triggers the input to expand
- The input transitions from collapsed (hidden, just the circle) to full width
- CSS transition on width/opacity for smooth expand effect

### Component Structure

- `App.tsx` — page wrapper with centered layout + title + SearchBar + footer
- `SearchBar.tsx` — the animated search bar (input + circular button)
- `Footer.tsx` — standard Component Dock footer

### Tokens

- Brand blue: #2196f3 (Material Design blue)
- Page bg: #f5f5f5
- Text: #333
- Font: Poppins (Google Fonts)
- Input border-radius: 50px (pill)
- Button: 44px circle, #2196f3 bg, white icon
- Box shadow: 0 2px 8px rgba(0,0,0,0.1)

## Implementation TODO

1. Set up app scaffold from simplest existing app (copy + rename)
2. Create SearchBar component with animated expand behavior
3. Style with Tailwind + CSS transitions for expand animation
4. Add Poppins font via Google Fonts link in index.html
5. Write tests (Vitest + RTL): title, input presence, button, typing, hover state, responsive, footer
6. Run coverage check (100%)
7. Update TEMPLATES.md (implementer handles this)
8. Commit + push
