# Template: CalPulse (Calendar)

## Purpose

Recreation of ColorLib Calendar 11 (`https://colorlib.com/wp/template/calendar-11/`).
Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict).
Preview URL (source): `https://colorlib.com/wp/template/calendar-11/`

## Design tokens

- Primary Accent: Indigo / Blue (`#4f46e5` / `bg-indigo-600`)
- Neutral Background: Clean white `#ffffff` and subtle gray `#f9fafb`
- Text Colors: Dark slate `#1f2937` for headings, muted gray `#6b7280` for secondary text
- Typography: Inter / system sans-serif font family
- Borders & Radii: Rounded corners (`rounded-xl`, `rounded-lg`), subtle borders (`border-gray-200`)

## Gherkin requirements & scenarios

### Feature: Interactive Calendar & Event Popup

As a user, I want to view a monthly calendar, navigate between months, select dates, and view/add popup event notes so I can manage my schedule efficiently.

#### Scenario: Month Navigation

- Given the calendar is displaying the current month
- When the user clicks the "Next" or "Previous" month buttons
- Then the calendar updates to display the corresponding month and year correctly.

#### Scenario: Date Selection & Event Popup

- Given the calendar grid is displayed
- When the user clicks on a specific date (e.g. 15th)
- Then a pop-up modal or card appears showing scheduled events for that date and allowing the user to add a new event.

#### Scenario: Component Dock Footer Branding

- Given the calendar view is rendered
- When the user scrolls to the bottom footer
- Then a "Made with Component Dock" link pointing to `https://www.componentdock.com/` is displayed.

## Verification checklist

- [ ] Spec validated with `npm run spec:validate`
- [ ] 100% test coverage with Vitest & Testing Library
- [ ] Component Dock footer link present and correct
- [ ] Responsive layout across mobile and desktop viewports
