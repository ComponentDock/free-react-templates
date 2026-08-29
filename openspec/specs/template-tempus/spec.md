# Template: Tempus (Calendar & Event Management)

## Purpose

Recreation of ColorLib Calendar 03 (`https://colorlib.com/wp/template/calendar-03/`), renamed to **Tempus**, built as a responsive React 19 + Tailwind CSS 4 template for calendar scheduling, event management, and upcoming schedule organization.

## Design Tokens (Extracted from Reference & Visual Inspection)

- **Brand Colors:**
  - Primary: Indigo-600 (`#4f46e5`), Hover: Indigo-700 (`#4338ca`)
  - Accent: Blue-500 (`#3b82f6`)
  - Neutral Dark: Gray-900 (`#111827`)
  - Neutral Muted: Gray-600 (`#4b5563`)
  - Surface Light: Gray-50 (`#f9fafb`), White (`#ffffff`)
- **Typography:**
  - Font Family: Inter / system-ui, sans-serif
  - Heading Weights: Bold (700), Semibold (600)
- **Radii & Spacing:**
  - Card Border Radius: Rounded-xl (`0.75rem`)
  - Button Radius: Rounded-lg (`0.5rem`)
  - Spacing Rhythm: Standard Tailwind spacing (`space-y-6`, `gap-6`)

## Gherkin Requirements & Scenarios

### Feature: Header & Navigation

As a user visiting Tempus, I want clear navigation to access calendar views, events, categories, and account actions.

- **Scenario: Desktop navigation renders links and action button**
  - Given the user views the header
  - Then the logo "Tempus" is displayed
  - And navigation links ("Calendar", "Events", "Categories", "Pricing") are visible
  - And a "Sign In" button is present

- **Scenario: Mobile hamburger menu toggles navigation drawer**
  - Given the user is on a mobile device
  - When they click the hamburger toggle
  - Then the mobile navigation drawer opens with all menu items

### Feature: Hero Section

As a user, I want a welcoming hero section with quick calendar search and date filtering.

- **Scenario: Hero banner displays title and search controls**
  - Given the user views the hero section
  - Then the headline "Manage Your Schedule Seamlessly" is displayed
  - And a quick search input with date picker filter is rendered

### Feature: Monthly Calendar Grid View

As a user, I want an interactive monthly calendar view to inspect days and scheduled events.

- **Scenario: Calendar grid renders days of the week and date cells**
  - Given the user views the calendar grid section
  - Then days of the week (Sun to Sat) are displayed as column headers
  - And calendar day cells show date numbers with event badges where applicable
  - When the user clicks a day cell
  - Then event details for that day are highlighted

### Feature: Upcoming Events List

As a user, I want to see upcoming events with time, location, and RSVP options.

- **Scenario: Upcoming events cards display event meta**
  - Given the user views the upcoming events section
  - Then event cards show time, title, location, and an "RSVP" / "Details" button

### Feature: Event Categories

As a user, I want to browse event categories to filter schedules.

- **Scenario: Category cards render with icons and item counts**
  - Given the user views the event categories section
  - Then category cards (Work, Conference, Social, Personal) display icons and item counts

### Feature: Newsletter Subscription

As a user, I want to subscribe to event updates and reminders.

- **Scenario: Newsletter form submits email address**
  - Given the user enters a valid email in the newsletter input
  - When they click "Subscribe"
  - Then a success confirmation message is displayed

### Feature: Footer

As a user, I want standard footer links and Component Dock attribution.

- **Scenario: Footer displays brand info and required attribution**
  - Given the user scrolls to the footer
  - Then copyright info, navigation links, and "More templates at Component Dock" linking `https://www.componentdock.com/` are visible

## Verification Checklist

- [ ] TypeScript strict check passes
- [ ] Vitest coverage at 100%
- [ ] Responsive across mobile, tablet, desktop
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No reference to ColorLib in app code
