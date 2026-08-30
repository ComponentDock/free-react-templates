# Template: Calio (Calendar)

## Purpose

Recreation of ColorLib calendar-12 (preview URL: https://colorlib.com/wp/theme/calendar-12/), built with Vite, React 19, Tailwind CSS 4, and TypeScript. Styled as a clean, elegant date picker and calendar scheduling interface widget with interactive date selection, month navigation, and event scheduling preview. Footer includes attribution link to https://www.componentdock.com/.

## Design Tokens

- **Colors**:
  - Primary / Accent: `#3b82f6` (Blue-500) / `#2563eb` (Blue-600)
  - Background: `#f8fafc` (Slate-50) container on `#0f172a` (Slate-900) dark page background or clean minimalist white/slate card interface.
  - Text: `#1e293b` (Slate-800) primary, `#64748b` (Slate-500) muted.
  - Highlights / Selected: `#3b82f6` with white text, hover states in `#eff6ff` (Blue-50).
- **Typography**:
  - Font Family: `Inter`, system-ui, sans-serif.
  - Headings: Bold font weights (700), clean sans-serif.
- **Radii & Shadows**:
  - Container Rounded: `rounded-2xl` (16px) with soft shadow `shadow-xl`.
  - Buttons / Inputs: `rounded-lg` (8px).
- **Layout**:
  - Centered modal/card wrapper on responsive background.
  - Header with month/year switcher and arrows.
  - Grid layout for days of the week and date numbers.
  - Bottom panel or sidebar for selected date events/details.

## Requirements & Scenarios

### Requirement 1: Responsive Calendar Container & Header

- **Scenario**: User views the calendar interface on desktop or mobile.
- **Given**: The Calio calendar widget is loaded.
- **When**: The user observes the header.
- **Then**: It displays the current month and year (e.g., "January 2026") with previous/next navigation buttons.

### Requirement 2: Interactive Date Grid

- **Scenario**: User interacts with days of the month.
- **Given**: The calendar grid is visible for the active month.
- **When**: The user clicks on any date number.
- **Then**: The date is selected, highlighted in primary blue, and any scheduled events or reminder notes for that date are displayed in the details panel.

### Requirement 3: Event Scheduling / Note Input

- **Scenario**: User adds a note or event to a selected date.
- **Given**: A date is currently selected.
- **When**: The user types an event title in the input box and clicks "Add Event".
- **Then**: The event appears in the list associated with that date and persists during the session.

### Requirement 4: Footer Attribution

- **Scenario**: User checks the footer of the application.
- **Given**: The page is rendered.
- **When**: The user scrolls to the footer.
- **Then**: It displays the copyright notice and a required link to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] Spec validation (`npm run spec:validate`) passes.
- [ ] All Gherkin requirements covered by unit/component tests.
- [ ] 100% test coverage (`npm run test:coverage`).
- [ ] Component Dock footer link present.
- [ ] Responsive UI verified on mobile and desktop viewports.
