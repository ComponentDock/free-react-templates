# Flightseek — Implementation Notes

## Template overview

- **New name:** flightseek
- **ColorLib source:** Colorlib Search Form V20 (`colorlib-search-20`)
- **Category:** Search Form
- **Preview URL:** https://colorlib.com/etc/searchf/colorlib-search-20/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section order (top to bottom)

1. **Background** — full-viewport background image (travel/flight themed)
2. **Search card** — centered translucent card with purple-to-blue gradient
3. **Form fields** — 2-column grid:
   - Row 1: From / To text inputs
   - Row 2: Depart / Return date pickers
   - Row 3: Passengers selector / Search button

## Design fidelity notes

### Background
- Full-viewport section with `background: center/cover` image
- Use `picsum.photos/seed/flightseek-1/1920/1080` for placeholder

### Card
- Purple-to-blue gradient: `linear-gradient(to top, #3d2161, #004d91)`
- Opacity: 0.9 (semi-transparent overlay on background)
- Border-radius: 10px
- Max-width: 900px, centered with `mx-auto`
- Padding: 60px 55px desktop, 40px 30px mobile

### Labels
- White (#fff), bold (700), 18px, capitalized
- Margin-bottom: 12px
- Use `<label>` elements with `htmlFor` for accessibility

### Text inputs (From / To)
- White background, 18px font, padding 16.5px 20px
- Placeholder color: #ccc
- Use `Poppins` via Google Fonts link in `index.html`

### Date pickers (Depart / Return)
- Native `<input type="date">` styled to match text inputs
- Same padding and font as text inputs

### Passengers selector
- Read-only input showing "1 Adult, 0 Children, 1 Room"
- Dropdown with room-based layout:
  - "Room 1" heading (bold, #999)
  - Adults counter with +/- buttons
  - Children counter with +/- buttons
  - "Add room" link at bottom (border-top: 1px solid #e5e5e5)
- Plus icon (#808080) triggers dropdown toggle

### Search button
- Coral-red (#ff4b5a) background, white text
- Full width of its column, line-height 60px
- Border-radius: 10px, uppercase, bold, 18px
- Hover: darken to #eb3746

### Responsive behavior
- Breakpoint: 767px
- Mobile: card full-width, columns stack vertically
- Desktop: 2-column grid layout

## Component structure

```
src/
  App.tsx                    — composes Background + SearchCard
  components/
    Background.tsx           — full-viewport background section
    SearchCard.tsx           — the gradient card container
    FlightSearchForm.tsx     — the form with all fields
    FromToFields.tsx         — from/to text inputs (row 1)
    DateFields.tsx           — depart/return date pickers (row 2)
    PassengersSelector.tsx   — passengers dropdown with counters
    SearchButton.tsx         — coral-red search button
```

## Implementation tasks

1. [ ] Set up app folder `apps/flightseek/` (copy simplest existing app, rename)
2. [ ] Create `src/index.css` with Tailwind + theme tokens (Poppins font, brand colors)
3. [ ] Create `Background.tsx` — full-viewport bg image section
4. [ ] Create `SearchCard.tsx` — gradient card container (900px max, 10px radius)
5. [ ] Create `FromToFields.tsx` — from/to text inputs in 2-col grid
6. [ ] Create `DateFields.tsx` — depart/return date pickers in 2-col grid
7. [ ] Create `PassengersSelector.tsx` — dropdown with +/- counters
8. [ ] Create `SearchButton.tsx` — coral-red full-width button
9. [ ] Create `FlightSearchForm.tsx` — compose all form sections
10. [ ] Create `App.tsx` — compose Background + SearchCard
11. [ ] Write tests for all components (100% coverage)
12. [ ] Run `npm run spec:validate` to verify spec
13. [ ] Run per-app verification gate
