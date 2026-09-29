# QueryBar — Design Notes

**Source:** Colorlib Search Form V18
**Preview:** https://colorlib.com/etc/searchf/colorlib-search-18/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-18.jpg

## Structure Order (top to bottom)

1. Full-viewport background image (beach sunset landscape)
2. Centered card wrapper (max-width 900px, centered with auto margins)
3. Tab navigation row (Hotels | Car | Flight)
4. Tab content panels (one visible at a time)

## Section-by-Section Fidelity Notes

### Background
- Full-screen travel/landscape image, `background: cover` center-aligned
- Image should be a beach/sunset scene — use a deterministic picsum seed or similar travel photo
- Card floats on top; no separate content below the card

### Search Card (`.card-4`)
- Dark background (#1a1a2e or similar dark navy/charcoal)
- Border-radius: 4px on the card
- Contains all tabs and their forms
- Max-width ~900px, horizontally centered, with generous top padding (~200px from viewport top)

### Tab Bar
- Horizontal list of three tab links: "Hotels", "Car", "Flight"
- Text is uppercase, no background, no underline
- Active tab: white text, bold, with a subtle bottom border or underline
- Inactive tabs: light gray (#ccc) text
- Tabs are clickable to switch panels

### Hotels Tab (Default)
- **Where input:** Full-width text input, label "Where:" on the left inside the input area, placeholder "City, region or specific hotel", search magnifying glass icon on the right
- **Check-In / Check-Out:** Two date inputs side-by-side, labels "Check-In:" and "Check-Out:" inside the input, placeholder format "mm/dd/yyyy"
- **Travellers + Search:** Travellers dropdown on the left (showing "1 Adult, 0 Children, 1 Room" with a chevron), Search button on the right

### Car Tab
- **Location input:** Full-width, same style as Where input, placeholder "Destination, hotel name"
- **Driver Age / Car Group:** Two styled selects side-by-side
- **Pick Up / Time:** Date input + time select side-by-side
- **Drop Off / Time:** Date input + time select side-by-side
- **Search button:** Full-width at the bottom

### Flight Tab
- **Origin input:** Full-width, label "Origin:", placeholder "City or airport"
- **Destination input:** Full-width, label "Destination:", placeholder "City or airport"
- **Departure / Return:** Date inputs side-by-side
- **Passengers / Class:** Select dropdowns side-by-side
- **Search button:** Full-width at the bottom

### Common Input Styles
- White background, light border (#aaa), 4px border-radius
- Labels appear as inline labels (left side of input area), uppercase/lowercase mix, small font
- Search icon: magnifying glass SVG, positioned right inside the input group
- All inputs use Lato font

### Submit Button
- Background: #6c7ae0 (indigo)
- Text: white, uppercase "SEARCH"
- Border-radius: 10px (pill-like)
- Hover: darkens to #5866cc
- Full-width when standalone (car/flight), half-width when beside travellers (hotels)

## Component Decomposition

- `QueryBar` — main page wrapper (background + card)
- `SearchCard` — the dark card container
- `TabBar` — tab navigation with active state
- `HotelsForm` — hotels search form
- `CarForm` — car rental search form
- `FlightForm` — flight search form
- `SearchInput` — reusable input with label + search icon
- `DateInput` — date picker with inline label
- `SelectField` — styled select dropdown with inline label
- `TravellersDropdown` — custom dropdown for room/guest selection
- `SubmitButton` — styled search button

## Fidelity Notes
- This is a standalone widget (no header, no hero, no footer sections) — it's a single card on a background image
- Keep the same section order and field labels as the original
- The "Travellers" dropdown in the hotels tab can be simplified (just show the default text, don't need full room picker UI for initial implementation)
- Use placeholder text to match the original exactly
- The search icon SVGs can be replaced with lucide-react's Search icon
