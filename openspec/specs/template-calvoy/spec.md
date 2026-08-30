# Template: Calvoy (Calendar / Date Picker)

## Purpose

Recreation of ColorLib Calendar 12 (`https://colorlib.com/wp/template/calendar-12/`, preview URL: `https://preview.colorlib.com/theme/bootstrap/calendar-12/`), built with React 19, Tailwind CSS 4, and TypeScript. A clean, minimalist date picker widget application with centered layout and interactive calendar date selection.

## Design Tokens

- **Brand / Accent Colors**: Neutral white background (`#ffffff`), dark charcoal heading/text (`#111827`), subtle gray placeholder/border (`#d1d5db`), focus ring indigo/blue (`#3b82f6`).
- **Typography**: Roboto / sans-serif stack. Clean, modern font weights (300/400/500).
- **Layout / Containers**: Centered vertical stack (`padding: 7rem 0`), single-column card/form layout (`max-w-md`), clean input styling with soft border and clear focus states.
- **Footer**: Includes required Component Dock attribution link (`https://www.componentdock.com/`).

## Requirements & Scenarios

### Requirement 1: Centered Date Picker Interface

- **Scenario**: User opens the app
  - **Given** the app is loaded in the browser
  - **When** the page renders
  - **Then** a centered header ("Calvoy - Date Picker") and a date input field with placeholder "Pick A Date" are displayed.

### Requirement 2: Interactive Date Selection Modal / Dropdown

- **Scenario**: User clicks the date input field
  - **Given** the user is viewing the date input form
  - **When** they click or focus on the "Pick A Date" input
  - **Then** an interactive calendar picker popup/dropdown appears allowing month navigation and date selection.

### Requirement 3: Component Dock Footer Attribution

- **Scenario**: User scrolls to the bottom of the page
  - **Given** the application view
  - **When** the footer is rendered
  - **Then** it displays a copyright notice and a link to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] TypeScript strict compilation passes without errors (`npm run typecheck`).
- [ ] Tailwind CSS 4 compiles correctly with proper theme tokens.
- [ ] Vitest tests pass with 100% coverage across lines, functions, branches, and statements.
- [ ] Footer correctly links to Component Dock.
