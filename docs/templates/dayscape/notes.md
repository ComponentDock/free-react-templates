# Dayscape — Implementation Tasks

## Structure order (matching screenshot 1:1)

1. **Page wrapper** — min-h-screen, gray-100 background, centered content
2. **Header section** — "Dayscape" (H1) + "Datepicker" (H2/sub-heading)
3. **Datepicker component** — white card with shadow-lg, rounded-lg, p-4
   - Input field: placeholder "MM/DD/YYYY hh:mm:ss", rounded-md, border-gray-200, focus:ring-2 focus:ring-blue-500
   - Calendar dropdown (always visible in this design): month nav + day headers + date grid
   - Month navigation: prev/next arrows (blue-500 circles)
   - Day headers: Su Mo Tu We Th Fr Sa (uppercase, gray-900, font-semibold)
   - Date grid: 6 rows × 7 cols, current month dates in gray-900, adjacent months in gray-400
   - Selected date: blue-500 circle with white text
   - Footer icons row: chevron-up, clock, trash, X (rose-600)
4. **Footer** — "Made with Component Dock" link to https://www.componentdock.com/

## Section-by-section fidelity notes

### Header

- Screenshot shows "Calendar #09" / "Calendar Datepicker" → rename to "Dayscape" / "Datepicker"
- Large heading (text-3xl font-bold), sub-heading (text-lg font-medium)
- Centered, generous margin-bottom (mb-8)

### Datepicker card

- White background, shadow-lg, rounded-lg, p-4
- Width ~320px (max-w-xs) centered
- Input field: full width, h-10, px-3, border-gray-200, rounded-md
- Placeholder text: "MM/DD/YYYY hh:mm:ss" in gray-500

### Calendar dropdown (inline, not popover)

- Month header: flex items-center justify-between
- Prev/next: w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center
- Month label: text-base font-semibold (e.g. "December 2020")
- Day header row: grid grid-cols-7, text-sm font-semibold uppercase tracking-wider text-gray-900
- Date grid: grid grid-cols-7 gap-2
  - Each cell: aspect-square flex items-center justify-center text-base
  - Current month: text-gray-900 hover:bg-gray-100 rounded-full
  - Adjacent month: text-gray-400
  - Selected: bg-blue-500 text-white rounded-full
  - Today (if not selected): ring-2 ring-blue-500
- Footer: flex justify-center gap-4 mt-4
  - Icons: w-5 h-5 text-rose-600 hover:text-rose-700 cursor-pointer

### Interactions (for implementer)

- Click date → updates selected date, updates input
- Click prev/next → changes month, re-renders grid
- Click trash → clears selection, input shows placeholder
- Click X → could close dropdown (but design shows inline)
- Click clock → reset to now
- Click chevron-up → toggle time picker (optional stretch)

### Dark mode

- Background: gray-900
- Card: gray-800
- Text: gray-100 / gray-300
- Borders: gray-700
- Blue/rose accents unchanged

### Responsive

- Mobile: card uses w-full mx-4, input and grid scale down slightly
- Touch targets: min-h-[44px] min-w-[44px] on interactive elements

## Tech notes

- Use `date-fns` or native `Date` for month calculations (no heavy deps)
- State: selectedDate (Date | null), currentMonth (Date)
- Derived: weeks array for grid rendering
- All logic in component, no external state lib needed
- Icons from lucide-react: ChevronLeft, ChevronRight, ChevronUp, Clock, Trash2, X
- Font: system UI (no Google Fonts import needed)
