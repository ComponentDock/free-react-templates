# Dayloom (Calendar 04) Implementation Tasks & Design Notes

Recreation of ColorLib Calendar 04 (`https://colorlib.com/wp/template/calendar-04/`).

## Architecture & Components

- `src/App.tsx`: Main container managing selected date, events state, view mode (month/week), and sidebar state.
- `src/components/Navbar.tsx`: Top bar with search, view toggles, and user profile.
- `src/components/CalendarGrid.tsx`: Month grid rendering days, headers, weekend highlights, and event badges.
- `src/components/EventSidebar.tsx`: Side panel showing selected date details, event list, and add-event form.
- `src/components/Footer.tsx`: Footer with brand links and mandatory Component Dock credit (`https://www.componentdock.com/`).

## Fidelity Notes

- Matches Calendar 04 grid layout and clean administrative aesthetic.
- Uses Tailwind CSS 4 theme tokens and Lucide React icons.
- Fully interactive date selection and event addition.
