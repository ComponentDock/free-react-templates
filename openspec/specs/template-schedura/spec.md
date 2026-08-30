# Spec: Schedura (Calendar 13 Recreation)

Recreation of ColorLib Calendar 13 (`https://colorlib.com/wp/template/calendar-13/`), a clean date range picker template featuring a centered form with "From" and "To" date selection inputs and interactive calendar dropdowns.

## Requirements

### R1. Navbar & Header

- Feature a clean header with title "Schedura — Date Range Picker" and subtitle.
- Include a top navigation bar with branding and links.

### R2. Date Range Picker Form

- Centered card layout with two columns for "From" (Start Date) and "To" (End Date).
- Interactive date pickers allowing users to select start and end dates.
- Display month/year header with previous/next navigation buttons.
- Calendar grid displaying days of the week and days of the month with out-of-focus days for adjacent months.
- Highlight today's date and selected date range.

### R3. Component Dock Footer

- Every template's footer MUST link `https://www.componentdock.com/` ("Component Dock") with a message like "More templates at Component Dock" or "Made with Component Dock".

## Scenarios

### S1. Interactive Date Range Selection

- Given the user is viewing the Schedura date range picker form,
- When they click the "From" input, the start date calendar dropdown opens,
- And when they select a start date and then click the "To" input, the end date calendar dropdown opens and allows selecting an end date.

### S2. Footer Branding

- Given the page is scrolled to the bottom,
- When the footer is rendered,
- Then it contains a link to `https://www.componentdock.com/` branded as "Component Dock".
