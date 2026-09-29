# Travelgate — Implementation Tasks & Design Notes

## Source
- **ColorLib:** Search Form V17
- **Slug:** `colorlib-search-17`
- **Preview:** https://colorlib.com/etc/searchf/colorlib-search-17/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-17.jpg

## Structure (top to bottom)

1. **Page wrapper** — full-screen light mint background (#e2fbfd), centered card
2. **Card container** — white, 680px max-width, 10px border-radius, box-shadow
3. **Tab bar** — horizontal list of 3 tabs (HOTELS | CAR | FLIGHT), uppercase Poppins, active tab in orange
4. **Tab content panels** — three `<div>` panels, only active panel visible
   - **Hotels panel:** Where input, Check-In/Check-Out dates (side-by-side), Traveller selector, checkboxes, submit
   - **Car panel:** Location input, Driver Age + Car Group selects, Pick Up + Drop Off dates with times, submit
   - **Flight panel:** Origin + Destination inputs, Departing + Returning dates, class checkboxes, submit
5. **Traveller dropdown** — floating panel with room/occupancy counters, +/- buttons, "Add room" link

## Section-by-Section Fidelity Notes

### Page Background
- Full viewport height, `background: #e2fbfd`
- Vertical padding: `padding-top: 165px; padding-bottom: 100px` (responsive: 120px/250px on mobile)

### Card
- White background (`#fff`), max-width 680px, centered
- Box-shadow: `0px 8px 20px 0px rgba(0,0,0,0.15)`
- Border-radius: 10px (from tab-list corner rounding)
- No visible border

### Tab Bar
- Poppins font, 22px, weight 500, uppercase
- Inactive: `rgba(85,85,85,0.6)` — muted gray
- Active: `#ff8300` — orange
- Hover: transitions to orange (0.4s ease)
- Padding: 45px top, 34px sides

### Input Fields
- Label: Lato 18px, bold, `#333`, capitalize text-transform, 30px right margin
- Input: Lato 18px, bold, `#666`, 15px vertical padding, no border except bottom
- Underline: 2px solid `#cccccc`, 41px margin-bottom per group
- Placeholder: `#cccccc`
- Date inputs: native browser date pickers

### Traveller Dropdown
- Read-only text input showing summary (e.g. "1 Adult, 0 Children, 1 Room")
- Chevron icon on right (SVG arrow down)
- Dropdown panel: white, border-radius 10px, shadow `0px 8px 20px rgba(0,0,0,0.15)`
- Room sections with Adults/Children counters (number inputs)
- +/- circular buttons: 32px diameter, 2px solid #ccc border, hover fills with #ccc
- "Add room" link: #00ad5f green, underline on hover

### Checkboxes
- Custom styled: hidden native checkbox + visible `.checkmark` span
- Checkmark: 20px, 2px solid #ccc border, 3px border-radius
- Checked state: green checkmark (`#00ad5f`) via CSS transform

### Submit Button
- Full-width block, 50px line-height
- Background: `#ff8300` (orange), white text
- 16px, bold, uppercase, `text-transform: uppercase`
- Hover: `#eb6f00` (darker orange)
- 32px top margin

## Responsive Behavior
- Below 768px: padding reduces, two-column fields stack to full width
- Below 576px: tab items stack vertically (no float), tab underline hidden on active

## Implementation Notes
- Use React state for tab switching (no CSS-only tab toggle — needs controlled state)
- Traveller dropdown: React state for open/closed, room list, and counter values
- Counter min=0, no max enforcement (matches original)
- Date inputs: use native `<input type="date">` (browser's own picker)
- Select dropdowns: use native `<select>` with custom styling (appearance: none)
- Checkboxes: custom styled with hidden input + visible checkmark div
- Use Tailwind classes matching the design tokens; put brand color in `@theme`
- Use picsum.photos for any placeholder images if needed
- Icon: use lucide-react ChevronDown for the traveller dropdown arrow
