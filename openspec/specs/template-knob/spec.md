# Template: Knob

Recreation of ColorLib Checkbox V18 (https://colorlib.com/wp/template/checkbox-18/)

## Purpose

A toggle buttons template showcasing smooth, pill-shaped toggle switches in
various states (on/off, disabled, color variants). Clean centered layout with
a heading, subtitle, and a vertical stack of toggle controls.

## Requirements

### Requirement: Toggle switch component

The template SHALL provide a reusable toggle switch component (KnobToggle) that
renders an accessible checkbox input with a visible pill-shaped track and sliding knob.

#### Scenario: renders with label

- **WHEN** a KnobToggle is rendered with label "Notifications"
- **THEN** a checkbox input with accessible name "Notifications" is present

#### Scenario: unchecked by default

- **WHEN** a KnobToggle is rendered without defaultChecked
- **THEN** the checkbox is not checked

#### Scenario: toggles on click

- **WHEN** a KnobToggle is rendered
- **AND** the user clicks the toggle
- **THEN** the checkbox becomes checked
- **AND** when clicked again the checkbox becomes unchecked

#### Scenario: respects defaultChecked

- **WHEN** a KnobToggle is rendered with defaultChecked=true
- **THEN** the checkbox is checked

#### Scenario: disabled state

- **WHEN** a KnobToggle is rendered with disabled=true
- **THEN** the checkbox is disabled
- **AND** clicking the toggle does not change its state

### Requirement: Toggle showcase section

The template SHALL display a showcase section with a heading, subtitle, and
a vertical stack of 4 toggle switches in different states.

#### Scenario: renders heading

- **WHEN** the ToggleShowcase is rendered
- **THEN** a heading "Checkbox #18" is present

#### Scenario: renders subtitle

- **WHEN** the ToggleShowcase is rendered
- **THEN** the text "Toggle Buttons" is present

#### Scenario: renders all toggles

- **WHEN** the ToggleShowcase is rendered
- **THEN** 4 toggle inputs are present

#### Scenario: Notifications is checked by default

- **WHEN** the ToggleShowcase is rendered
- **THEN** "Notifications" is checked

#### Scenario: Dark mode is unchecked by default

- **WHEN** the ToggleShowcase is rendered
- **THEN** "Dark mode" is not checked

#### Scenario: Marketing emails is disabled

- **WHEN** the ToggleShowcase is rendered
- **THEN** "Marketing emails" is disabled

### Requirement: App composition

The App component SHALL compose the ToggleShowcase and Footer, set the document
title, and render inside a full-height flex column.

#### Scenario: composes showcase and footer

- **WHEN** the App is rendered
- **THEN** the main element contains the showcase heading
- **AND** the footer is present

#### Scenario: sets document title

- **WHEN** the App is rendered
- **THEN** the document title is "Knob — Toggle Buttons Template"

#### Scenario: footer links to Component Dock

- **WHEN** the App is rendered
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is present

### Requirement: Footer with Component Dock link

The Footer component SHALL display the template name and a link to Component Dock.

#### Scenario: renders template name

- **WHEN** the Footer is rendered
- **THEN** the text "Knob" is present

#### Scenario: renders Component Dock link

- **WHEN** the Footer is rendered
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link has target="_blank"
- **AND** the link has rel="noreferrer"
