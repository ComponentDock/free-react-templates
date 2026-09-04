# Template: Tickbox (Bootstrap Checkbox UI Component)

## Purpose

Tickbox is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 10"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-10/), built under a
DIFFERENT name (Tickbox) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page is a
minimal showcase of styled checkboxes — a tiny, self-contained demo.

## Design tokens

- Brand color: `#4f46e5` (indigo)
- Font: Poppins (Google Fonts)
- Layout: centered content, white background
- Checkbox style: custom-styled with indigo accent, card-like appearance
- Dark mode supported via class-based Tailwind dark variant

## Requirements

### Requirement: Heading display

The app SHALL render a heading "Checkbox #10" centered on the page.

#### Scenario: Heading is visible

- **WHEN** I load the Tickbox app
- **THEN** I see a heading with text "Checkbox #10"

### Requirement: Checkbox task list

The app SHALL render three labeled checkboxes in a vertical list, with the first
checked by default and the other two unchecked.

#### Scenario: Three checkboxes are rendered

- **WHEN** I load the Tickbox app
- **THEN** I see 3 checkboxes

#### Scenario: Default checked state

- **WHEN** I load the Tickbox app
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

- **WHEN** I load the Tickbox app
- **THEN** I see a footer with a link labeled "Component Dock"
- **AND** the link points to "https://www.componentdock.com/"
- **AND** the link opens in a new tab
