# Spec: Vex — Modern Animated Checkbox Template

Recreation of ColorLib Checkbox 17 (https://colorlib.com/wp/template/checkbox-17/).

## Purpose

A modern, minimal checkbox template featuring smooth animation effects on toggle. The design uses bold geometric checkbox styling with a vibrant indigo accent color, clean typography, and satisfying check/uncheck transitions. Demonstrates accessible checkbox patterns with disabled states.

## Requirements

### Requirement: Animated checkbox rendering

The template SHALL render geometric square checkboxes with rounded corners, an indigo (#6366f1) fill when checked, a light border when unchecked, and a smooth scale + color transition animation on toggle.

#### Scenario: Checked checkbox displays indigo fill and checkmark

- **WHEN** a checkbox is checked
- **THEN** it SHALL display an indigo (#6366f1) square background with rounded corners
- **AND** it SHALL display a white checkmark SVG icon centered inside
- **AND** it SHALL animate with a scale transition from 0.8 to 1.0

#### Scenario: Unchecked checkbox displays bordered empty state

- **WHEN** a checkbox is unchecked
- **THEN** it SHALL display a white background with a gray-300 border
- **AND** it SHALL NOT display a checkmark icon

### Requirement: Checkbox interaction

The template SHALL allow users to toggle checkboxes by clicking the label or the visual indicator.

#### Scenario: User toggles an unchecked checkbox

- **GIVEN** a checkbox is unchecked
- **WHEN** the user clicks the checkbox label
- **THEN** the checkbox SHALL become checked with an animation

#### Scenario: User toggles a checked checkbox off

- **GIVEN** a checkbox is checked
- **WHEN** the user clicks the checkbox label
- **THEN** the checkbox SHALL become unchecked with an animation

### Requirement: Disabled state

The template SHALL support disabled checkboxes that cannot be toggled and appear with reduced opacity.

#### Scenario: Disabled unchecked checkbox cannot be toggled

- **GIVEN** a checkbox is disabled and unchecked
- **WHEN** the user clicks the checkbox
- **THEN** the checkbox SHALL remain unchecked

#### Scenario: Disabled checked checkbox cannot be unchecked

- **GIVEN** a checkbox is disabled and checked
- **WHEN** the user clicks the checkbox
- **THEN** the checkbox SHALL remain checked

#### Scenario: Disabled checkbox has reduced opacity

- **GIVEN** a checkbox is disabled
- **THEN** the checkbox container SHALL have opacity-50 applied

### Requirement: Showcase layout

The template SHALL display a centered showcase section with heading "Checkbox #17", a subtitle, and four checkbox items: Design the mockups (checked), Build the components (unchecked), Write the tests (unchecked), Ship to production (disabled unchecked).

#### Scenario: All checkboxes render with correct labels

- **WHEN** the page loads
- **THEN** four checkboxes SHALL be visible with labels "Design the mockups", "Build the components", "Write the tests", "Ship to production"

#### Scenario: First checkbox is checked by default

- **WHEN** the page loads
- **THEN** the "Design the mockups" SHALL be checked
- **AND** the "Build the components" SHALL be unchecked

### Requirement: Footer with Component Dock link

The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer displays Component Dock link

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" SHALL be visible
- **AND** the link text SHALL be "Component Dock"
- **AND** the link SHALL open in a new tab

### Requirement: Typography and styling

The template SHALL use Inter font via Google Fonts and a white background with dark text.

#### Scenario: Inter font is loaded

- **WHEN** the page loads
- **THEN** the body SHALL use the Inter font family

## Design tokens (extracted from preview CSS)

- **Font**: Inter (400, 500, 600, 700)
- **Background**: white (#fff)
- **Heading**: 28px, font-weight 600, dark color
- **Label text**: 16px, font-weight 500, gray-700
- **Checkbox shape**: square with rounded corners (border-radius: 6px)
- **Checkbox size**: 22px x 22px
- **Unchecked background**: white with gray-300 border
- **Checked background**: #6366f1 (indigo)
- **Checked hover**: #4f46e5
- **Checkmark icon**: white, centered, 14px
- **Disabled opacity**: 0.5
- **Transition**: 0.3s cubic-bezier(0.4, 0, 0.2, 1) for scale + color
