# Template: Calstack (Calendar & Scheduling)

## Purpose

Recreation of ColorLib `calendar-15` (Calendar V15, a calendar range picker and event scheduling interface).

- **Preview URL**: `https://preview.colorlib.com/theme/calendar-15/`
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

## Design Tokens

- **Brand Colors**: Primary indigo/violet (`#6366f1` / `indigo-600`), neutral slate background (`#f8fafc` / `slate-50`), card background (`#ffffff`), dark slate text (`#1e293b` / `slate-800`), muted gray (`#64748b` / `slate-500`).
- **Font Family**: Inter / System Sans-serif (`font-sans`).
- **Button Shapes**: Rounded-xl, smooth transition, subtle shadow (`shadow-sm hover:shadow-md`).
- **Section Backgrounds**: Clean white container cards centered on a light neutral gradient background.

## Gherkin Requirements & Scenarios

### Feature: Interactive Calendar Range Picker

As a user visiting the Calstack scheduling interface, I want to pick date ranges and view events so I can plan my schedule.

#### Scenario: View month calendar grid

- **Given** the user opens the calendar view
- **Then** the current month grid is displayed with days of the week and dates correctly aligned
- **And** interactive controls allow navigating to previous and next months

#### Scenario: Select a date range

- **Given** the calendar grid is displayed
- **And** the user clicks a start date and an end date
- **Then** all dates within the selected range are highlighted as active/selected
- **And** the selected range summary is updated in the scheduling panel

#### Scenario: Add or schedule an event

- **Given** a date range is selected
- **And** the user enters event title and details in the side panel
- **And** clicks "Schedule Event"
- **Then** the event is added to the upcoming schedule list
- **And** a success confirmation message appears

## Verification Checklist

- [ ] Responsive layout across mobile, tablet, and desktop viewports.
- [ ] Calendar grid correctly computes leap years and month start days.
- [ ] Component Dock footer link present (`https://www.componentdock.com/`).
- [ ] 100% test coverage with Vitest.
