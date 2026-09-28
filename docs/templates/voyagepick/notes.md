# Voyagepick — Implementation Notes

## Source
- ColorLib template: Search Form V16 (`colorlib-search-16`)
- Preview URL: https://colorlib.com/wp/template/colorlib-search-16/
- Source downloaded from: https://preview.colorlib.com/downloads/free/colorlib-search-16.zip

## Structure (component tree)

```
App.tsx
├── Background (full-viewport image)
└── Card (centered, max-w-680px, rounded, shadow)
    ├── TabBar (red bg, 3 tabs: Hotels, Car, Flight)
    ├── TabIndicator (red triangle caret below active tab)
    └── TabPanels
        ├── HotelsPanel
        │   ├── WhereInput (text)
        │   ├── DateRow (Check-in + Check-out, side-by-side)
        │   ├── TravellersDropdown
        │   │   ├── TriggerInput (readonly, shows count summary)
        │   │   └── PopoverDropdown
        │   │       ├── RoomList (rooms with person counters)
        │   │       └── AddRoomButton
        │   ├── CheckboxRow (Add flight, Add car)
        │   └── SearchButton
        ├── CarPanel
        │   ├── LocationInput (text)
        │   ├── SelectRow (Driver age + Car group)
        │   ├── DateTimeRow (Pick up date + Time)
        │   ├── DateTimeRow (Drop off date + Time)
        │   └── SearchButton
        └── FlightPanel (default active)
            ├── OriginInput (text)
            ├── DestinationInput (text)
            ├── DateRow (Departing + Returning)
            ├── ClassCheckboxRow (First Class, Business, Economy)
            └── SearchButton
```

## Section-by-section fidelity notes

### 1. Background
- Original: CSS `background: url('bg-img-01.jpg') center center/cover no-repeat`
- React: `min-h-screen bg-cover bg-center` with picsum placeholder
- Image seed: `https://picsum.photos/seed/voyagepick/1920/1080`

### 2. Card wrapper
- Original: `.wrapper--w680` (max-width 680px, margin auto) + `.cl-card.card-1`
- React: `max-w-[680px] mx-auto` with `rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)]`
- Card body: white bg, padding varies (44px 55px desktop, 30px mobile)

### 3. Tab bar
- Original: `<ul class="tab-list">` with `background: #fa4251`, top-radius 10px
- React: flexbox row, `bg-[#fa4251] rounded-t-[10px] px-5`
- Tab links: Poppins 500 22px uppercase, color transitions
- Active: `text-white`, inactive: `text-white/60`, hover: `text-white`

### 4. Tab caret indicator
- Original: CSS `::after` pseudo-element on `.cl-active` with border trick
- React: absolutely positioned div with `border-[8px] border-t-[#fa4251] border-transparent`, centered under active tab

### 5. Input groups
- Original: `.cl-input-group` with `border-bottom: 2px solid #ccc`, margin-bottom 34px
- React: `border-b-2 border-[#ccc] mb-[34px]`, inputs: `font-bold text-lg text-[#555] py-[11px]`
- Labels: `text-xs font-bold uppercase text-[#999]`

### 6. Date pickers
- Original: native `<input type="date">` with no custom styling (just inherits font)
- React: `<input type="date" className="input--style-1" />` or similar

### 7. Travellers dropdown
- Original: Custom JS-driven dropdown, `.dropdown-select` with absolute positioning
- React: State-driven popover using absolute positioning, `rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)]`
- Room counter: minus/plus circular buttons (32x32px, `border: 2px solid #ccc`, border-radius 50%)
- Hover: background `#ccc`, text `#fff`
- "Add room" link: `text-[#00ad5f] font-bold`, hover: underline

### 8. Checkboxes
- Original: Custom CSS checkboxes using hidden input + `.checkmark` span with `::after` for checkmark
- React: Hidden input + visual span, checked state shows green `#00ad5f` checkmark via CSS rotate(45deg)
- Unchecked: `border: 2px solid #ccc`, 3px border-radius

### 9. Search button
- Original: `.btn-submit`, full-width, line-height 50px, `background: #00ad5f`, uppercase, bold, 16px
- React: `w-full h-[50px] bg-[#00ad5f] hover:bg-[#00994b] text-white font-bold text-base uppercase`
- margin-top: 32px

### 10. Select dropdowns (Car panel)
- Original: Uses select2 styling, native `<select>` with custom arrow icon
- React: Custom select component or native select with Tailwind styling
- Height: 44px, font: Lato 18px bold, color: `rgb(85,85,85)`
- Arrow: chevron-down icon, color `#808080`

### 11. Responsive behavior
- Original: columns stack at < 768px, tab padding adjusts at < 576px
- React: `grid grid-cols-1 sm:grid-cols-2` for side-by-side fields
- Padding: responsive with `p-[30px] sm:p-[44px] sm:px-[55px]`

## Implementation task outline

1. Create `apps/voyagepick/` — copy simplest existing app, rename package
2. Install dependencies (if needed — should be minimal)
3. Create `src/components/`:
   - `TabBar.tsx` — tab strip with active state + caret indicator
   - `HotelsPanel.tsx` — hotels form
   - `CarPanel.tsx` — car rental form
   - `FlightPanel.tsx` — flight search form
   - `InputField.tsx` — reusable underline input with label
   - `DateField.tsx` — date input with label
   - `SelectField.tsx` — dropdown select with label
   - `TravellersDropdown.tsx` — room/person quantity selector
   - `CheckboxField.tsx` — custom styled checkbox
   - `SearchButton.tsx` — full-width green submit button
4. Create `src/App.tsx` — compose all sections
5. Add theme tokens to `src/index.css` (`@theme` block)
6. Write tests (Vitest + Testing Library) — 100% coverage
7. Verify: typecheck + lint + test:coverage + build
