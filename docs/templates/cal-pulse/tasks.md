# CalPulse — Design Notes & Task Outline

## Source Mapping

- **ColorLib Template**: Calendar 11 (`https://colorlib.com/wp/template/calendar-11/`)
- **New App Name**: `cal-pulse`
- **Package Name**: `@free-react-templates/cal-pulse`
- **Deploy Target**: `cal-pulse.free.componentdock.com`

## Section Breakdown & Structure

1. **Header / Navbar**: App title ("CalPulse"), current date indicator, view switcher (Month / Week / Day).
2. **Calendar Header Controls**: Month/Year display dropdown/heading, Previous (`<`) and Next (`>`) navigation buttons, Today button.
3. **Weekday Header Row**: Mon, Tue, Wed, Thu, Fri, Sat, Sun header cells.
4. **Calendar Date Grid**: 6x7 grid of date cells with padding days, active month days, current day highlight (`bg-indigo-600 text-white`), and event indicators (dots).
5. **Pop-up Event Modal**: Modal card that opens when clicking a date, showing events list for that day and an "Add Event" input form.
6. **Footer**: Copyright text and mandatory Component Dock link (`https://www.componentdock.com/`).

## Fidelity Checklist

- Clean modern aesthetic matching the clean pop-up calendar design from ColorLib Calendar 11.
- Fully interactive month navigation and date selection pop-up modal.
- Tailwind CSS 4 styling with indigo accent colors and crisp typography.
