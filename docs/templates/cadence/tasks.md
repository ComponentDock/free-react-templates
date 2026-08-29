# Cadence Template Tasks & Design Notes

## Source & Research

- **Source:** Colorlib Calendar 04 (`https://colorlib.com/wp/template/calendar-04/`)
- **Screenshot Reference:** `https://colorlib.com/wp/wp-content/uploads/sites/2/calendar-04.jpg`
- **Live Preview:** Unreachable (404), recreated faithfully from official screenshot and calendar design best practices.
- **New Name:** Cadence (`apps/cadence`)

## Structure Order

1. **Header / Navbar:** Minimal branding + view toggle / quick search.
2. **Main Section:**
   - Left / Main: Monthly Calendar grid with month/year header and navigation chevrons.
   - Sidebar / Event Panel: Selected date overview and event list.
3. **Footer:** Copyright + Component Dock link (`https://www.componentdock.com/`).

## Design Tokens

- **Brand Colors:** Indigo (`#4f46e5`), Slate gray text, neutral background.
- **Typography:** Inter / system sans-serif.
- **Accessibility:** Full ARIA labels for navigation buttons and date cells.
