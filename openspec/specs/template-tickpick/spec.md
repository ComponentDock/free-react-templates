# Template: Tickpick (Bootstrap Checkbox UI Component)

## Purpose

Tickpick is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 09"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-09/), built under a
DIFFERENT name (Tickpick) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page is a
minimal showcase of a styled checkbox task-list (one heading + three labeled
checkboxes in a tag/chip layout) — a tiny, self-contained demo.

## Requirements

### Requirement: Heading display

The app SHALL render a heading "Checkbox #09" centered on the page.

#### Scenario: Heading is visible

- **WHEN** I load the Tickpick app
- **THEN** I see a heading with text "Checkbox #09"

### Requirement: Checkbox task list

The app SHALL render three labeled checkboxes in a vertical list, with the first
checked by default and the other two unchecked.

#### Scenario: Three checkboxes are rendered

- **WHEN** I load the Tickpick app
- **THEN** I see 3 checkboxes

#### Scenario: Default checked state

- **WHEN** I load the Tickpick app
- **THEN** the first checkbox is checked
- **AND** the second checkbox is unchecked
- **AND** the third checkbox is unchecked

### Requirement: Checkbox interactivity

Users SHALL be able to toggle any checkbox by clicking it.

#### Scenario: Toggling an unchecked checkbox

- **WHEN** I click an unchecked checkbox
- **THEN** it becomes checked

#### Scenario: Toggling a checked checkbox

- **WHEN** I click a checked checkbox
- **THEN** it becomes unchecked

### Requirement: Footer with Component Dock link

The app SHALL display a footer containing a link to https://www.componentdock.com/.

#### Scenario: Footer link is present

- **WHEN** I load the Tickpick app
- **THEN** I see a footer with a link labeled "Component Dock"
- **AND** the link points to "https://www.componentdock.com/"
- **AND** the link opens in a new tab
