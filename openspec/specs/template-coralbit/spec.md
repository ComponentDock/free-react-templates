# Spec: Coralbit — Bootstrap Custom Checkbox Template

Recreation of ColorLib Checkbox 13 (https://colorlib.com/wp/template/checkbox-13/).

## Purpose

A lightweight, circular custom checkbox component showcase with coral pink (#f67280) accent color, box-shadow depth, and Roboto typography. Demonstrates accessible checkbox patterns with disabled states.

## Requirements

### Requirement: Circular checkbox rendering

The template SHALL render circular checkboxes with a 20px diameter, coral pink (#f67280) fill when checked, light gray (#e6e6e6) fill when unchecked, and a box-shadow for depth.

#### Scenario: Checked checkbox displays coral fill and checkmark

- **WHEN** a checkbox is checked
- **THEN** it SHALL display a coral pink (#f67280) circular background
- **AND** it SHALL display a white checkmark SVG icon centered inside

#### Scenario: Unchecked checkbox displays gray fill

- **WHEN** a checkbox is unchecked
- **THEN** it SHALL display a light gray (#e6e6e6) circular background
- **AND** it SHALL NOT display a checkmark icon

### Requirement: Checkbox interaction

The template SHALL allow users to toggle checkboxes by clicking the label or the visual indicator.

#### Scenario: User toggles an unchecked checkbox

- **GIVEN** a checkbox is unchecked
- **WHEN** the user clicks the checkbox label
- **THEN** the checkbox SHALL become checked

#### Scenario: User toggles a checked checkbox off

- **GIVEN** a checkbox is checked
- **WHEN** the user clicks the checkbox label
- **THEN** the checkbox SHALL become unchecked

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
- **THEN** the checkbox container SHALL have opacity-60 applied

### Requirement: Showcase layout

The template SHALL display a centered showcase section with heading "Checkbox #13", a subtitle, and four checkbox items: First checkbox (checked), Second checkbox (unchecked), Disabled (unchecked), Disabled & checked.

#### Scenario: All checkboxes render with correct labels

- **WHEN** the page loads
- **THEN** four checkboxes SHALL be visible with labels "First checkbox", "Second checkbox", "Disabled", "Disabled & checked"

#### Scenario: First checkbox is checked by default

- **WHEN** the page loads
- **THEN** the "First checkbox" SHALL be checked
- **AND** the "Second checkbox" SHALL be unchecked

### Requirement: Footer with Component Dock link

The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer displays Component Dock link

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" SHALL be visible
- **AND** the link text SHALL be "Component Dock"
- **AND** the link SHALL open in a new tab

### Requirement: Typography and styling

The template SHALL use Roboto font via Google Fonts and a white background with dark text.

#### Scenario: Roboto font is loaded

- **WHEN** the page loads
- **THEN** the body SHALL use the Roboto font family

## Design tokens (extracted from preview CSS)

- **Font**: Roboto (300, 400, 500, 700)
- **Background**: white (#fff)
- **Heading**: 20px, default dark color
- **Label text**: 18px, default dark
- **Checkbox shape**: circular (border-radius: 50%)
- **Checkbox size**: 20px × 20px
- **Unchecked background**: #e6e6e6 (light gray)
- **Checked background**: #f67280 (coral pink)
- **Checked hover**: #f88a96
- **Box shadow**: 0 1px 2px 0 rgba(0, 0, 0, 0.5)
- **Checkmark icon**: white, centered
- **Disabled opacity**: 0.6 (unchecked), 0.2 (checked)
- **Transition**: 0.3s all ease
