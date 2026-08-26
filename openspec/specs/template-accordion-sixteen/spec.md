# Template: Accordion Sixteen (UI Components)

## Purpose

Recreation of ColorLib **Bootstrap Accordion V16** (`https://colorlib.com/wp/template/accordion-16/`), previewed at `https://colorlib.com/etc/accordion/colorlib-accordion-16/`. Built as a modern, responsive React component showcasing collapsible accordion items with smooth transitions, clean typography (Open Sans & Roboto Slab), and themed styling.

## Requirements

### Requirement: Accordion shows default expanded item on load

The accordion SHALL display Item 1 ("How to download and register?") expanded by default, with Items 2 through 5 collapsed.

#### Scenario: User views the accordion list on load

- **WHEN** the user visits the Concertina template page
- **THEN** the main heading "Bootstrap Accordion #6" is visible
- **AND** Item 1 ("How to download and register?") is expanded showing its content
- **AND** Items 2 through 5 are collapsed

### Requirement: Accordion items toggle on click

Each accordion item header SHALL toggle its expanded state when clicked.

#### Scenario: User toggles accordion items

- **WHEN** the user clicks on Item 2 ("How to create your paypal account?") header
- **THEN** Item 2 expands to reveal its description
- **AND** the chevron icon rotates to indicate expanded state

#### Scenario: User collapses an expanded item

- **WHEN** the user clicks on an already-expanded Item 1 header
- **THEN** Item 1 collapses and its content is hidden

#### Scenario: Multiple items can be open simultaneously

- **WHEN** the user expands Item 1 and Item 3
- **THEN** both items show their content simultaneously
- **AND** other items remain collapsed

### Requirement: Footer displays Component Dock attribution

The footer SHALL display a link to `https://www.componentdock.com/` with "Component Dock" text.

#### Scenario: Footer renders Component Dock link

- **WHEN** the user scrolls to the bottom of the page
- **THEN** a link pointing to `https://www.componentdock.com/` with anchor text containing "Component Dock" is present

### Requirement: Accessibility

All accordion interactions SHALL be keyboard accessible and use proper ARIA attributes.

#### Scenario: Toggle buttons support keyboard interaction

- **WHEN** the user focuses an accordion toggle button and presses Enter or Space
- **THEN** the accordion item toggles its expanded state

#### Scenario: ARIA attributes are correct

- **WHEN** an accordion item is expanded
- **THEN** the toggle button has `aria-expanded="true"` and `aria-controls` pointing to the panel
- **AND** the panel has `role="region"` and `aria-labelledby` pointing to the toggle button

## Design Tokens & Styling

- **Primary Color**: `#563d7c` (Deep Purple theme brand accent)
- **Neutral Text**: `#6B6B6B` (Body text)
- **Background**: Light/clean container background with rounded accordion panel cards
- **Typography**: Open Sans for body / Roboto Slab for headings
- **Radius**: Rounded interactive accordion panels (`rounded-lg`)
- **Footer Attribution**: Must link to `https://www.componentdock.com/` (\"Component Dock\").

## Verification Checklist

- [x] Spec validated via `npm run spec:validate`
- [x] App workspace `@free-react-templates/concertina` created in `apps/concertina`
- [x] 100% test coverage (`npm run test:coverage`)
- [x] Verification gate passes successfully (`scripts/verify-app.sh concertina`)
