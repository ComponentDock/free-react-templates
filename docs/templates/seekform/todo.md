# SeekForm — Implementation Notes

## Source
- **ColorLib:** Search Form 12 — https://colorlib.com/wp/template/colorlib-search-12/
- **Preview:** https://colorlib.com/etc/searchf/colorlib-search-12/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-12.jpg

## Structure (single section)

This is a **single-section template** — just the hero search form. No navbar,
no additional content sections, no traditional footer beyond the ComponentDock
link.

### Section Order

1. **Full-viewport hero** — background image (travel/scenic), centered card
2. **Search form card** — gradient overlay (blue-to-cyan), contains all form elements

### Form Elements (inside card)

1. Heading: "Search Hotels" (legend, Poppins 700)
2. Travel type tabs (4 tabs, flexbox row):
   - HOTEL ONLY (bed icon) — active by default
   - HOTEL + FLIGHT (bed + plane icons)
   - HOTEL + FLIGHT + CAR (bed + plane + car icons)
   - HOTEL + CAR (bed + car icons)
3. "Going To" input — location pin icon, placeholder "Destination, hotel name"
4. Date row (3 columns):
   - CHECK-IN — date input, placeholder "mm/dd/yy"
   - CHECK-OUT — date input, placeholder "mm/dd/yy"
   - TRAVELERS — dropdown select, default "1 adult"
5. Checkbox row:
   - ADD A FLIGHT (checked by default)
   - ADD A CAR (unchecked by default)
6. Search button — orange (#ff8300), text "Search"

## Fidelity Notes

### Colors to match exactly
- Gradient overlay: `linear-gradient(rgba(79, 172, 254, 0.8), rgba(0, 242, 254, 0.8))`
- Active tab: `#002c71` navy
- Button: `#ff8300` orange, hover `#e67600`
- Text: `#333` primary, `#555` secondary, `#808080` placeholder
- Checkbox check: `#00ad5f` green

### Layout specifics
- Form card: max-width 940px, padding 50px 70px 80px 70px, border-radius 10px
- Input fields: 60px height, white background, 3px border-radius
- Button: 50px height, min-width 100px, 3px border-radius
- Travel tabs: flex row, each tab has icon group + label, 3px border-radius
- Active tab has downward triangle arrow (CSS border trick)

### Icons
- Use lucide-react for: Bed, Plane, Car, MapPin, Calendar, Users
- Original uses inline SVGs; lucide-react equivalents are fine

### Background
- Use `https://picsum.photos/seed/seekform/1920/1080` for the hero background
- `background-size: cover; background-position: center`

### Responsive behavior (< 768px)
- Form padding reduces to 30px 15px
- Heading centered
- Travel tabs overflow-x scroll
- Date/travelers row stacks vertically (block display)
- Checkbox items get bottom margin

### Fonts
- Load Lato (400, 700, 900) and Poppins (700) via Google Fonts in index.html
- Body: Lato, Heading: Poppins

## Component Structure

```
src/
  App.tsx          — Single SearchHero section + footer
  components/
    SearchHero.tsx — Full hero with background + form card
    TravelTabs.tsx — 4-tab travel type selector
    SearchForm.tsx — Form fields: destination, dates, travelers, checkboxes
```

## Implementation Priority

1. SearchHero (background + card layout)
2. TravelTabs (tab selector with active state)
3. SearchForm (inputs, dates, dropdown, checkboxes, button)
4. Responsive styles
5. Tests (Vitest + Testing Library)
