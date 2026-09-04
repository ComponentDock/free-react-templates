# Template: Checkly (Custom Checkbox Showcase)

## Purpose

Checkly is a single-page component showcase template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 02"
checkbox showcase design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a simple, centered page with heading "Checkbox #02",
a sub-heading "Choose your favorite sports", and 3 custom-styled checkboxes
(Basketball, Baseball, Badminton) with circular icon indicators — unchecked
shows a gray circle, checked shows a coral (#f76262) circle with a rotation
animation. Poppins font, white background, centered single-column layout.

Checkly follows the same structure and adds the repo's standard dark-mode toggle
and accessible patterns.

Checkly lives in `apps/checkly` and uses shared components from `packages/ui`
(cn).

## Requirements

### Requirement: Page heading

The system SHALL render a centered page heading "Checkbox #02".

#### Scenario: Heading content

- **GIVEN** the Checkly page is rendered
- **WHEN** the page loads
- **THEN** the heading "Checkbox #02" SHALL be displayed as the main heading

### Requirement: Sub-heading

The system SHALL render a sub-heading "Choose your favorite sports" below
the main heading.

#### Scenario: Sub-heading content

- **GIVEN** the page is rendered
- **WHEN** the checkbox section is displayed
- **THEN** the sub-heading "Choose your favorite sports" SHALL be shown

### Requirement: Custom checkboxes

The system SHALL render 3 custom-styled circular checkboxes.

#### Scenario: Checkbox labels

- **GIVEN** the page is rendered
- **WHEN** the checkbox showcase is displayed
- **THEN** there SHALL be 3 checkboxes with labels: "Basketball", "Baseball", and "Badminton"

#### Scenario: Checkbox interaction

- **GIVEN** the page is rendered
- **WHEN** the user clicks a checkbox
- **THEN** the checkbox SHALL toggle between checked and unchecked states
- **AND** the checked state SHALL display a coral (#f76262) circle icon
- **AND** the unchecked state SHALL display a gray circle icon

#### Scenario: Default state

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** "Basketball" SHALL be checked by default
- **AND** "Baseball" and "Badminton" SHALL be unchecked by default

### Requirement: Checkbox icon style

The system SHALL render circular checkbox indicators (not square).

#### Scenario: Unchecked icon

- **GIVEN** a checkbox is unchecked
- **WHEN** the checkbox is rendered
- **THEN** the indicator SHALL be a gray (#rgba(0,0,0,0.3)) circle

#### Scenario: Checked icon

- **GIVEN** a checkbox is checked
- **WHEN** the checkbox is rendered
- **THEN** the indicator SHALL be a coral (#f76262) circle with a checkmark
- **AND** the indicator SHALL animate with a rotation effect

### Requirement: Page background

The system SHALL render the page on a white background.

#### Scenario: Background color

- **GIVEN** the page is rendered
- **WHEN** the page is displayed
- **THEN** the page background SHALL be white

### Requirement: Footer

The system SHALL render a minimal footer with the site name and a link to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Checkly"
- **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Page composition

The system SHALL compose the heading, sub-heading, checkbox showcase, and footer
in a single page with a main landmark and a document title.

#### Scenario: Page structure

- **GIVEN** the Checkly page is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Checkly — Checkbox Showcase Template"
- **AND** the page SHALL contain a main landmark
- **AND** the main landmark SHALL contain the checkbox showcase
