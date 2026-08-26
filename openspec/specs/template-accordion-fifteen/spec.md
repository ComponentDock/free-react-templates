# Template: AccordionFifteen (Widget / Accordion)

## Purpose

Recreation of ColorLib Accordion 15 (`https://colorlib.com/wp/template/accordion-15/`, preview: `https://preview.colorlib.com/theme/bac/accordion-15/`). Built as a modern React 19 + Tailwind CSS 4 widget component featuring expandable profile accordion sections (Profile, Messages, Settings, Logout) with nested navigation links and clean typography.

## Design Tokens

- **Font Family**: Roboto, sans-serif
- **Background**: Light gray (`#efefef`)
- **Text Color**: Dark charcoal (`#212529`)
- **Accent / Border**: Clean subtle borders with interactive hover states
- **Radius**: Rounded containers with clean shadow elevation

## Requirements & Scenarios

### Requirement 1: Header Title

- The page shall display a clear widget header ("Bootstrap Accordion #5" / Profile Accordion).
- **Scenario**: User views the accordion widget on initial load.
  - **Given** the user opens the application
  - **Then** the main title and container are visible with correct background and typography.

### Requirement 2: Accordion Sections (Profile, Messages, Settings, Logout)

- The widget shall contain interactive accordion items for Profile, Messages, Settings, and Logout.
- **Scenario**: User expands the Profile section.
  - **Given** the profile section is collapsed
  - **When** the user clicks the profile header/button
  - **Then** it expands to reveal nested links (Profile, Messages, Settings, Sales, Marketing) and collapses other sections or toggles state accordingly.

### Requirement 3: Component Dock Footer

- Every template must include a branded footer linking to Component Dock.
- **Scenario**: User scrolls to the bottom of the page.
  - **Given** the user is viewing the widget
  - **When** looking at the footer area
  - **Then** a visible link points to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to Component Dock
- [ ] CNAME and homepage configured correctly
