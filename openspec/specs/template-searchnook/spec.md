# Template: Searchnook (Expandable Search Bar)

## Purpose

Searchnook is a minimal, centered expandable search bar in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free "Search Form/Bar V10" design, built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/search-form-bar-10/
Preview: https://preview.colorlib.com/theme/search-form-bar-10/ (404 at time of
prep — design captured from screenshot + ColorLib page meta).

The original design is a minimal page with a title heading and a pill-shaped
expandable search bar. The search bar sits centered on a light gray background.
It consists of a rounded lavender input field and a circular purple toggle/close
button on the right. The bar animates open when toggled. The description reads:
"Grab users' attention with animated elements using this free expandable search bar
template. Works with or without Bootstrap."

Searchnook lives in `apps/searchnook` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Design tokens (from screenshot analysis)

| Token             | Value        | Notes                                      |
| ----------------- | ------------ | ------------------------------------------ |
| brand-primary     | #c084d6      | Purple — toggle button, accents            |
| brand-light       | #e8c8f0      | Light lavender — search input background   |
| page-bg           | #f5f5f5      | Very light gray — full-page background     |
| text-color        | #333333      | Dark gray — heading and placeholder text   |
| button-radius     | 50%          | Circular toggle button                     |
| input-radius      | 9999px       | Pill-shaped search input                   |
| font-family       | system sans  | -apple-system, BlinkMacSystemFont, sans-serif |
| animation         | expand/collapse | Search bar slides open/closed on toggle |

## Requirements

### Requirement: Page background

The system SHALL render a full-viewport light gray background.

#### Scenario: Background color

- **GIVEN** the Searchnook page is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be light gray (#f5f5f5 or similar)

### Requirement: Title heading

The system SHALL render a centered title heading above the search bar.

#### Scenario: Heading text

- **GIVEN** the Searchnook page is rendered
- **WHEN** the heading is displayed
- **THEN** it SHALL show the text "Searchnook"
- **AND** it SHALL be centered horizontally

#### Scenario: Heading style

- **GIVEN** the Searchnook page is rendered
- **WHEN** the heading is displayed
- **THEN** it SHALL use a dark text color and a legible font size

### Requirement: Expandable search bar

The system SHALL render a pill-shaped expandable search bar centered on the page.

#### Scenario: Collapsed state

- **GIVEN** the Searchnook page is rendered
- **WHEN** the search bar is in collapsed state
- **THEN** only the circular purple toggle button SHALL be visible
- **AND** the search input SHALL be hidden or collapsed to zero width

#### Scenario: Expanded state

- **GIVEN** the Searchnook page is rendered
- **WHEN** the user clicks the toggle button
- **THEN** the search input SHALL expand smoothly (animated transition)
- **AND** the input SHALL have placeholder text "Search..."

#### Scenario: Toggle back to collapsed

- **GIVEN** the Searchnook page is rendered with the search bar expanded
- **WHEN** the user clicks the toggle/close button (X icon)
- **THEN** the search input SHALL collapse smoothly (animated transition)
- **AND** only the circular toggle button SHALL remain visible

#### Scenario: Typing in search input

- **GIVEN** the Searchnook page is rendered with the search bar expanded
- **WHEN** the user types "hello world" in the search input
- **THEN** the input value SHALL be "hello world"

### Requirement: Toggle button

The system SHALL render a circular purple toggle button with a search/X icon.

#### Scenario: Button shape and color

- **GIVEN** the Searchnook page is rendered
- **WHEN** the toggle button is displayed
- **THEN** it SHALL be circular (50% border-radius)
- **AND** it SHALL have a purple background (#c084d6 or similar)
- **AND** it SHALL display a search icon (magnifying glass) when collapsed

#### Scenario: Button icon swap

- **GIVEN** the Searchnook page is rendered
- **WHEN** the search bar is expanded
- **THEN** the button icon SHALL change to a close icon (X)

#### Scenario: Button accessibility

- **GIVEN** the Searchnook page is rendered
- **WHEN** the toggle button is rendered
- **THEN** it SHALL have an aria-label "Toggle search"
- **AND** it SHALL be focusable via keyboard

### Requirement: Search input styling

The system SHALL style the search input as a pill-shaped field with lavender background.

#### Scenario: Input shape

- **GIVEN** the Searchnook page is rendered with the search bar expanded
- **WHEN** the search input is visible
- **THEN** it SHALL have fully rounded corners (pill shape)
- **AND** it SHALL have a light lavender background (#e8c8f0 or similar)

#### Scenario: Input placeholder

- **GIVEN** the Searchnook page is rendered with the search bar expanded
- **WHEN** the search input is empty
- **THEN** it SHALL display placeholder text "Search..."

### Requirement: Footer

The system SHALL render a footer with copyright text and a Component Dock link.

#### Scenario: Copyright text

- **GIVEN** the Searchnook page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show copyright text including "Searchnook. All rights reserved."

#### Scenario: Component Dock link

- **GIVEN** the Searchnook page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to https://www.componentdock.com/
- **AND** the link SHALL open in a new tab
- **AND** the link SHALL have rel="noopener noreferrer"

### Requirement: Document title

The system SHALL set the document title to "Searchnook — Expandable Search Bar".

#### Scenario: Title on load

- **GIVEN** the Searchnook page is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Searchnook — Expandable Search Bar"

## Verification checklist

- [ ] Page renders centered title + expandable search bar on light background
- [ ] Search bar animates open/closed on toggle button click
- [ ] Toggle button shows search icon (collapsed) / X icon (expanded)
- [ ] Search input is pill-shaped with lavender background
- [ ] Input accepts text and shows placeholder
- [ ] Footer has Component Dock link (new tab, noopener noreferrer)
- [ ] Document title matches spec
- [ ] Keyboard accessible: toggle button focusable, input focusable when expanded
- [ ] No ColorLib references in app code
