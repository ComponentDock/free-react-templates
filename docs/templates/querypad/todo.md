# Querypad — Prep Notes

## Source

- ColorLib: "Colorlib Search Form V15"
- URL: https://colorlib.com/wp/template/colorlib-search-15/
- Preview: https://colorlib.com/etc/searchf/colorlib-search-15/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-15.jpg

## Structure (section order)

1. Full-viewport background image wrapper
2. Centered card (720px max, dark navy semi-transparent bg)
3. Tab bar: hotels | car | flight
4. Hotels tab pane — destination, check-in/out, traveller dropdown, checkboxes, search btn
5. Car tab pane — location, driver age, car group, pick-up/drop-off dates+times, search btn
6. Flight tab pane — origin, destination, dates, class radios, search btn

## Fidelity Notes

- **Background:** Full-viewport cover image (travel scene). Use `picsum.photos` placeholder.
- **Card:** `rgba(17, 25, 54, 0.9)` bg, 10px border-radius, 720px max-width centered.
- **Tabs:** Horizontal, left-aligned. Active = white text, inactive = #999. Font: Poppins 500 24px. Top corners of card are rounded.
- **Input groups:** White bg, 10px border-radius, padding 9px 48px 3px 20px. Each has a label (12px bold #555) and input (16px uppercase #808080). Left icon in #ccc.
- **Date inputs:** Use native browser date picker (`input type="date"`). No custom datepicker.
- **Traveller dropdown:** Custom dropdown with adults/children counters (+/- buttons) and "Add room" link. Appears below the travellers input field.
- **Select dropdowns (car form):** Use `<select>` elements styled with Tailwind (not select2). Custom arrow icon.
- **Checkboxes/Radios:** Custom styled with white bg, rounded corners.
- **Search button:** Full-width, 50px line-height, bg #00ad5f, text white, font 16px bold, 10px border-radius. Hover: #00994b.
- **Font:** Poppins from Google Fonts (weights 400, 500, 700).
- **Icons:** Use `lucide-react` (MapPin for pin, Calendar for calendar, Clock for clock, Users for traveller, ChevronDown for dropdown).
- **Responsive:** 2-col rows → 1-col on <767px. Card padding adjusts. Tab links shrink to 22px.

## Component Plan

- `App.tsx` — background wrapper + card container
- `components/TabBar.tsx` — tab navigation (hotels, car, flight)
- `components/HotelsForm.tsx` — hotels search form
- `components/CarForm.tsx` — car search form
- `components/FlightForm.tsx` — flight search form
- `components/TravellerDropdown.tsx` — custom dropdown with room/person counters
- `components/SearchButton.tsx` — shared green search button
- `components/FormField.tsx` — reusable input group (label + input + icon)
- `components/SelectField.tsx` — reusable select with custom arrow
- `components/DateField.tsx` — reusable date input with icon
- `components/CheckboxRow.tsx` — custom checkboxes
- `components/RadioRow.tsx` — custom radio buttons

## Dependencies

- No new npm packages needed
- `lucide-react` for icons (already in repo)
- Poppins font via Google Fonts `<link>` in index.html
