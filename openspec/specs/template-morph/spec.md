# Template: Morph (Animated Checkbox UI Component)

## Purpose

Morph is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 15"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-15/), built under a
DIFFERENT name (Morph) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page is a
minimal showcase of a styled checkbox list with animated square-to-tick
morphing transitions — a tiny, self-contained demo.

## Requirements

### Requirement: Heading display

The app SHALL render a heading "Checkbox #15" centered on the page.

#### Scenario: Heading is visible

- **WHEN** I load the Morph app
- **THEN** I see a heading with text "Checkbox #15"

### Requirement: Checkbox task list

The app SHALL render four labeled checkboxes in a vertical list, with the first
checked by default and the others unchecked.

#### Scenario: Four checkboxes are rendered

- **WHEN** I load the Morph app
- **THEN** I see 4 checkboxes

#### Scenario: Default checked state

- **WHEN** I load the Morph app
- **THEN** the first checkbox is checked
- **AND** the second checkbox is unchecked
- **AND** the third checkbox is unchecked
- **AND** the fourth checkbox is unchecked

#### Scenario: Disabled checkbox

- **WHEN** I load the Morph app
- **THEN** the fourth checkbox is disabled

### Requirement: Toggle behavior

The app SHALL toggle a checkbox's checked state when the user clicks its label.

#### Scenario: Clicking an unchecked checkbox checks it

- **GIVEN** I see an unchecked checkbox labeled "Build the components"
- **WHEN** I click the label "Build the components"
- **THEN** the checkbox becomes checked

#### Scenario: Clicking a checked checkbox unchecks it

- **GIVEN** I see a checked checkbox labeled "Design the mockups"
- **WHEN** I click the label "Design the mockups"
- **THEN** the checkbox becomes unchecked

#### Scenario: Clicking a disabled checkbox does nothing

- **GIVEN** I see a disabled checkbox labeled "Ship to production"
- **WHEN** I click the label "Ship to production"
- **THEN** the checkbox remains unchecked

### Requirement: Animated morphing checkbox

The app SHALL render a custom checkbox with a CSS animation that morphs the
square shape into a rounded shape with a checkmark tick on toggle.

#### Scenario: Checked checkbox shows tick SVG

- **GIVEN** I see a checked checkbox
- **WHEN** I inspect the checkbox element
- **THEN** a tick SVG with a polyline is rendered inside the checkbox

#### Scenario: Unchecked checkbox has no tick visible

- **GIVEN** I see an unchecked checkbox
- **WHEN** I inspect the checkbox element
- **THEN** the tick SVG has zero opacity

### Requirement: Footer with Component Dock link

The app SHALL render a footer with a link to Component Dock.

#### Scenario: Footer displays app name

- **WHEN** I scroll to the footer
- **THEN** I see the text "Morph"

#### Scenario: Footer links to Component Dock

- **WHEN** I scroll to the footer
- **THEN** I see a link to https://www.componentdock.com/
- **AND** the link text contains "Component Dock"

#### Scenario: Footer link opens in new tab

- **WHEN** I inspect the Component Dock link in the footer
- **THEN** the link has target="_blank" and rel="noreferrer"
