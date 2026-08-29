# Template: ChronoGrid (Calendar)

## Purpose

Recreation of ColorLib template **Calendar 02** (`https://colorlib.com/wp/template/calendar-02/`), preview URL: `https://preview.colorlib.com/theme/calendar-02/` (fallback to screenshot analysis as preview is currently 404). Built as a modern, accessible React 19 + Tailwind CSS 4 single-page template with interactive calendar views, appointment scheduling cards, event lists, and responsive layout.

## Design tokens

- **Brand primary**: `#4f46e5` (Indigo-600) / `#6366f1`
- **Backgrounds**: `#f8fafc` (Slate-50) for canvas, `#ffffff` for cards, `#1e293b` (Slate-800) for dark contrast header
- **Typography**: Inter / sans-serif system fonts
- **Radii**: `rounded-xl` / `rounded-2xl` for cards, `rounded-lg` for buttons and inputs
- **Shadows**: `shadow-sm` and `shadow-md`

## Gherkin requirements & scenarios

### Feature: Interactive Calendar & Event Management

As a user visiting the ChronoGrid calendar planner,
I want to view the month grid, select dates, inspect scheduled events, and add new appointments,
So that I can efficiently manage my schedule and time.

#### Scenario: Viewing the monthly calendar grid

- Given the user loads the ChronoGrid application
- When the user views the main calendar section
- Then the calendar displays the current month and grid of days with correct weekday headers
- And today's date is highlighted with the primary brand color

#### Scenario: Navigating months

- Given the user is viewing the calendar grid
- When the user clicks the "Next" or "Previous" month navigation buttons
- Then the calendar updates to show the corresponding month's days and events

#### Scenario: Selecting a date and viewing events

- Given the calendar grid is displayed
- When the user clicks on a specific calendar day (e.g., 15th)
- Then the side panel or event list updates to show scheduled events for that date

#### Scenario: Adding a new appointment

- Given the user opens the "Add Appointment" modal or form
- When the user fills in the title, time, and description and clicks Save
- Then the new appointment appears in the day's event list and calendar indicator

### Feature: Footer branding

- Given the user scrolls to the bottom of the page
- When the footer is rendered
- Then it contains the required link to `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [ ] Spec valid via `npm run spec:validate`
- [ ] Tests pass with 100% coverage
- [ ] Responsive design verified on mobile and desktop viewports
- [ ] Footer contains Component Dock attribution link
