# Template: PushPad (UI Component Library)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 02** (`https://colorlib.com/wp/template/bootstrap-buttons-02/`).
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript · Lucide icons.
New Name: `pushpad` (Package: `@free-react-templates/pushpad`).

## Design Tokens

- **Brand Colors**: Primary blue `#0d6efd`, Success green `#198754`, Danger red `#dc3545`, Warning yellow `#ffc107`, Dark `#212529`, Light `#f8f9fa`
- **Typography**: Font family `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
- **Button Radios**: Default rounded (`border-radius: 0.375rem`), pill/round (`border-radius: 50rem`), square (`border-radius: 0`)
- **Spacing**: Consistent padding scale matching Bootstrap 5 spacing utility classes

## Requirements

### Requirement: Navigation & Header

The app SHALL display a professional sticky navigation bar with a brand logo, navigation links, and a theme toggle.

#### Scenario: User views navigation

- **WHEN** the user visits PushPad
- **THEN** the header shows the brand logo "PushPad" and navigation links (Showcase, Variants, Sizes, States, Code)
- **AND** the sticky bar remains at the top on scroll

### Requirement: Button Showcase Sections

The app SHALL display structured button showcase sections mirroring Bootstrap Buttons 02.

#### Scenario: User views button variants and groups

- **WHEN** the user scrolls through the showcase
- **THEN** they see sections for Standard Buttons, Rounded Buttons, Icon Buttons, Dropdown Buttons, Group Buttons, Checkboxes, Radio Buttons, Toggle Switches, and Social Buttons
- **AND** interactive states (hover, active, disabled) function correctly

### Requirement: Footer

The app SHALL render a footer containing copyright and a mandatory link to Component Dock.

#### Scenario: User views footer

- **WHEN** the user scrolls to the bottom of the page
- **THEN** the footer displays copyright and links to `https://www.componentdock.com/` as "Component Dock"

## Verification Checklist

- [ ] All sections from Bootstrap Buttons 02 rendered
- [ ] Tailwind CSS tokens match design
- [ ] Responsive layout on mobile and desktop
- [ ] 100% test coverage on all components
