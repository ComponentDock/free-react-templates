# Template: Tickmark (Custom Checkbox Showcase)

## Purpose

Tickmark is a single-page component showcase template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 01"
checkbox showcase design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a simple, centered page with a heading "Checkbox #01" and
6 custom-styled checkboxes (Primary blue #0075f6, Success green #28a745, Danger
red #dc3545, Warning yellow #ffc107, Info teal #17a2b8, and Disabled gray)
arranged in a 3-column grid on a #fafafa background, using Poppins font. No
navbar, minimal page with just a footer.

Tickmark follows the same structure and adds the repo's standard dark-mode toggle
and accessible patterns.

Tickmark lives in `apps/tickmark` and uses shared components from `packages/ui`
(cn).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Checkbox #01".

#### Scenario: Heading content

- **GIVEN** the Tickmark page is rendered
- **WHEN** the page loads
- **THEN** the heading "Checkbox #01" SHALL be displayed as the main heading

### Requirement: Custom checkboxes

The system SHALL render 6 custom-styled checkboxes arranged in a 3-column grid.

#### Scenario: Checkbox variants

- **GIVEN** the page is rendered
- **WHEN** the checkbox showcase is displayed
- **THEN** there SHALL be 6 checkboxes with labels: "Primary", "Success", "Danger", "Warning", "Info", and "Disabled"
- **AND** each checkbox SHALL have a distinct color scheme (Primary #0075f6, Success #28a745, Danger #dc3545, Warning #ffc107, Info #17a2b8, Disabled gray)
- **AND** checkboxes SHALL be arranged in a responsive 3-column grid

#### Scenario: Checkbox interaction

- **GIVEN** the page is rendered
- **WHEN** the user clicks a non-disabled checkbox
- **THEN** the checkbox SHALL toggle between checked and unchecked states
- **AND** a checkmark indicator SHALL appear when checked

#### Scenario: Disabled checkbox

- **GIVEN** the page is rendered
- **WHEN** the user clicks the disabled checkbox
- **THEN** the checkbox SHALL NOT toggle state

### Requirement: Page background

The system SHALL render the page on a #fafafa background.

#### Scenario: Background color

- **GIVEN** the page is rendered
- **WHEN** the page is displayed
- **THEN** the page background SHALL be #fafafa

### Requirement: Footer

The system SHALL render a minimal footer with the site name and a link to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Tickmark"
- **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Page composition

The system SHALL compose the heading, checkbox showcase, and footer in a single
page with a main landmark and a document title.

#### Scenario: Page structure

- **GIVEN** the Tickmark page is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Tickmark — Checkbox Showcase Template"
- **AND** the page SHALL contain a main landmark
- **AND** the main landmark SHALL contain the checkbox showcase heading
