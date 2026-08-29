# Template: Calendo (Calendar & Scheduling)

## Purpose

Recreation of Colorlib **Calendar V05** (`https://colorlib.com/wp/template/calendar-05/`), implemented as a modern React 19 + TypeScript + Tailwind CSS 4 application (`apps/calendo`).

## Design Tokens (Reference Extraction)

- **Brand Colors**:
  - Primary Indigo: `#4f46e5` (`indigo-600`)
  - Primary Hover: `#4338ca` (`indigo-700`)
  - Accent Teal: `#14b8a6` (`teal-500`)
  - Background Light: `#f8fafc` (`slate-50`)
  - Text Dark: `#0f172a` (`slate-900`)
  - Text Muted: `#64748b` (`slate-500`)
- **Typography**:
  - Font Family: `"Poppins", system-ui, sans-serif`
  - Headings: Bold sans-serif (`font-semibold`, `font-bold`)
- **Border Radius**:
  - Cards & Buttons: `rounded-xl` (`0.75rem`)
- **Shadows**:
  - Soft elevations: `shadow-sm`, `shadow-md`

## Sections & Layout Structure

1. **Navbar**: Brand title ("Calendo"), Quick Date indicator, View switcher (Month / Week / Day), Add Event button, User Avatar.
2. **Date Ribbon**: Horizontal display of yesterday, today, and tomorrow with quick date navigation and status highlights.
3. **Monthly Calendar Grid**: Full interactive calendar grid with days of the week header, date numbers, current day highlight, and event badges.
4. **Events / Schedule Sidebar**: Daily agenda list showing scheduled meetings, reminders, time slots, and quick actions.
5. **Footer**: Clean minimal footer with copyright and mandatory link to [Component Dock](https://www.componentdock.com/).

## Gherkin Requirements & Scenarios

### Feature: Interactive Calendar Grid & Navigation

- **Scenario**: User views the current month's grid
  - **Given** the user opens Calendo
  - **Then** the calendar grid displays all days of the current month with correct weekday alignment
  - **And** today's date is prominently highlighted

- **Scenario**: User navigates between months
  - **Given** the user is viewing the current month
  - **When** the user clicks the Next or Previous month buttons
  - **Then** the calendar updates to display the corresponding month and year

### Feature: Date Ribbon & Quick Selection

- **Scenario**: User reviews the date ribbon
  - **Given** the calendar is loaded
  - **Then** a date ribbon displays yesterday, today, and tomorrow
  - **When** the user clicks on any date in the ribbon
  - **And** the view centers or highlights events for that date

### Feature: Event Management & Agenda

- **Scenario**: User views daily schedule
  - **Given** the user is on the main calendar dashboard
  - **Then** the sidebar displays scheduled events with times, titles, and category tags

- **Scenario**: User adds a new event
  - **Given** the user clicks the "Add Event" button
  - **When** the user fills out the event title, time, and date and submits
  - **Then** the new event appears in both the calendar grid and sidebar agenda
