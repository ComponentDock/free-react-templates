# Template: AccordionFifteen (Widget / Accordion)

## Purpose

Recreation of ColorLib Accordion 15 (`https://colorlib.com/wp/template/accordion-15/`, preview: `https://preview.colorlib.com/theme/bac/accordion-15/`). Built as a modern React 19 + Tailwind CSS 4 widget component featuring expandable profile accordion sections (Profile, Messages, Settings, Logout) with nested navigation links and clean typography.

## Design Tokens

- **Font Family**: Roboto, sans-serif
- **Background**: Light gray (`#efefef`)
- **Text Color**: Dark charcoal (`#212529`)
- **Accent / Border**: Clean subtle borders with interactive hover states
- **Radius**: Rounded containers with clean shadow elevation

## Requirements

### Requirement 1: Header Title

The page shall display a clear widget header ("FoldKit Widget") with a subtitle describing the interface.

#### Scenario: User views the accordion widget on initial load

- **WHEN** the user opens the application
- **THEN** the main title "FoldKit Widget" and subtitle are visible with correct background and typography

### Requirement 2: Accordion Sections (Profile, Messages, Settings, Logout)

The widget shall contain four interactive accordion items for Profile, Messages, Settings, and Logout. Each section expands to reveal nested navigation links (Profile, Messages, Settings, Sales, Marketing). Only one section may be open at a time.

#### Scenario: User expands the Profile section

- **WHEN** the user clicks the Profile header/button
- **THEN** it expands to reveal nested links and collapses any previously open section

#### Scenario: User collapses an expanded section

- **WHEN** the user clicks an already-expanded section header
- **THEN** it collapses and no sections are open

### Requirement 3: Accessibility

All accordion toggle buttons shall have proper ARIA attributes (`aria-expanded`, `aria-controls`) and expanded panels shall have `aria-labelledby` linking back to their toggle.

#### Scenario: User navigates via keyboard

- **WHEN** the user focuses a toggle button and presses Enter or Space
- **THEN** the corresponding section expands or collapses

### Requirement 4: Component Dock Footer

Every template must include a branded footer linking to Component Dock.

#### Scenario: User scrolls to the bottom of the page

- **WHEN** the user is viewing the widget
- **THEN** a visible link points to `https://www.componentdock.com/`

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to Component Dock
- [ ] CNAME and homepage configured correctly
