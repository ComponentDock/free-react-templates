# Template: Calio (Multi-View Calendar)

**Source:** Recreation of ColorLib Calendar V20 (https://colorlib.com/wp/template/calendar-20/)
**Preview:** https://preview.colorlib.com/theme/bootstrap/calendar-20/
**Name:** Calio (new, original)

## Purpose

Calio is a multi-view calendar template with a month view, week view, day view, list view and footer. It recreates the ColorLib **Calendar 20** design (https://colorlib.com/wp/template/calendar-20/, preview: https://preview.colorlib.com/theme/bootstrap/calendar-20/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens

- **Background:** #efefef (page), #fff (calendar container)
- **Font:** Roboto (300, 400, 500, 700)
- **Container shadow:** 0 15px 30px 0 rgba(0,0,0,0.2)
- **Brand/accent:** #007bff (links, active states)
- **Text:** #212529 (primary), #666 (secondary)
- **Today highlight:** #007bff background on current day cell
- **Calendar layout:** Fixed-position, fills viewport with 20px margins

## Sections (in order)

1. **Toolbar** — prev/next/today buttons (left), month/year title (center), view toggle buttons (right: Month, Week, Day, List)
2. **Month View** (default) — 7-column grid, weekday headers (Sun–Sat), day cells with event bars, "+N more" overflow
3. **Week View** — 7-column time grid, hourly rows (00:00–23:00), event blocks positioned by time
4. **Day View** — single-column time grid, hourly rows, event blocks positioned by time
5. **List View** — chronological list of events for the current week, grouped by day
6. **Footer** — "Made with Component Dock" link (https://www.componentdock.com/)

## Requirements

### Feature: Renders calendar region

#### Scenario: The calendar container has role="region" with aria-label="Calendar"

- **Given** the page is rendered
- **When** the page is inspected
- **Then** the calendar container has role="region" with aria-label="Calendar"

### Feature: Default view is month

#### Scenario: On initial render, the month grid is visible with weekday headers

- **Given** the page is rendered
- **When** the Default view is month is inspected
- **Then** on initial render, the month grid is visible with weekday headers

### Feature: Switch views

#### Scenario: Clicking Month/Week/Day/List buttons switches the active view

- **Given** the page is rendered
- **When** the page is inspected
- **Then** clicking Month/Week/Day/List buttons switches the active view

#### Scenario: The toolbar title updates to reflect the current view

- **Given** the page is rendered
- **When** the page is inspected
- **Then** the toolbar title updates to reflect the current view

### Feature: Navigate months

#### Scenario: Prev/Next buttons change the displayed month

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Prev/Next buttons change the displayed month

#### Scenario: Today button returns to the current month

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Today button returns to the current month

### Feature: Navigate weeks

#### Scenario: In week view, Prev/Next change the displayed week

- **Given** the page is rendered
- **When** the page is inspected
- **Then** in week view, Prev/Next change the displayed week

#### Scenario: Today button returns to the current week

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Today button returns to the current week

### Feature: Navigate days

#### Scenario: In day view, Prev/Next change the displayed day

- **Given** the page is rendered
- **When** the page is inspected
- **Then** in day view, Prev/Next change the displayed day

#### Scenario: Today button returns to today

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Today button returns to today

### Feature: Display events in month view

#### Scenario: Events appear as colored bars on their respective days

- **Given** the page is rendered
- **When** the Display events in month view is inspected
- **Then** Events appear as colored bars on their respective days

#### Scenario: Multi-day events span across days

- **Given** the page is rendered
- **When** the Display events in month view is inspected
- **Then** Multi-day events span across days

#### Scenario: "+N more" link appears when events exceed the visible limit

- **Given** the page is rendered
- **When** the Display events in month view is inspected
- **Then** "+N more" link appears when events exceed the visible limit

### Feature: Display events in week/day view

#### Scenario: Events appear as positioned blocks in the time grid

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Events appear as positioned blocks in the time grid

#### Scenario: Timed events show with correct vertical position

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Timed events show with correct vertical position

### Feature: Display events in list view

#### Scenario: Events are listed chronologically, grouped by day

- **Given** the page is rendered
- **When** the Display events in list view is inspected
- **Then** Events are listed chronologically, grouped by day

### Feature: Footer

#### Scenario: Footer contains a link to https://www.componentdock.com/

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** Footer contains a link to https://www.componentdock.com/

### Feature: Event click opens URL

#### Scenario: Clicking an event with a URL opens it in a new tab

- **Given** the page is rendered
- **When** the Event click opens URL is inspected
- **Then** clicking an event with a URL opens it in a new tab

### Feature: Accessibility

#### Scenario: Calendar region has aria-label

- **Given** the page is rendered
- **When** the Accessibility is inspected
- **Then** Calendar region has aria-label

#### Scenario: Toolbar buttons have aria-labels

- **Given** the page is rendered
- **When** the Accessibility is inspected
- **Then** Toolbar buttons have aria-labels

#### Scenario: View switcher buttons have aria-labels

- **Given** the page is rendered
- **When** the Accessibility is inspected
- **Then** View switcher buttons have aria-labels

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/calio/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/calio/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Renders calendar region — Given** the page is rendered
- [ ] Default view is month — Given** the page is rendered
- [ ] Switch views — Given** the page is rendered
- [ ] Navigate months — Given** the page is rendered
- [ ] Navigate weeks — Given** the page is rendered
- [ ] Navigate days — Given** the page is rendered
- [ ] Display events in month view — Given** the page is rendered
- [ ] Display events in week/day view — Given** the page is rendered
- [ ] Display events in list view — Given** the page is rendered
- [ ] Event click opens URL — Given** the page is rendered
- [ ] Accessibility — Given** the page is rendered
