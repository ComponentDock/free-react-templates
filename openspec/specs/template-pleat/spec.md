# Template: Pleat (Interactive Accordion Showcase)

## Purpose

Recreation of ColorLib **Accordion 13** (`https://colorlib.com/wp/template/accordion-13/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-13/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript. Styled as a modern minimalist interactive accordion component showcase featuring smooth collapsible panels, chevron icons, active green state (#72c02c), and clean Roboto typography.

## Design Tokens

- **Brand Primary / Active Color:** `#72c02c` (vibrant green)
- **Background Color:** `#ffffff` (white)
- **Text Color (Body / Paragraphs):** `#b3b3b3` (light gray)
- **Text Color (Headings):** `#333333`
- **Border Color (Inactive):** `#efefef`
- **Border Color (Active):** `#72c02c`
- **Font Family:** `"Roboto", sans-serif`
- **Border Radius:** `4px` (`rounded`)
- **Accordion Body Text:** `#888888`

## Requirements

### Feature: Interactive Accordion Panels

As a visitor, I want to expand and collapse accordion items so that I can read detailed answers cleanly without clutter.

#### Scenario: Default initial state

- **GIVEN** the accordion page is loaded
- **WHEN** the user views the accordion items
- **THEN** all accordion items are collapsed by default
- **AND** each item shows a down-chevron icon and gray border (`#efefef`)

#### Scenario: Expanding a collapsed item

- **GIVEN** the user is viewing the accordion component
- **WHEN** the user clicks on a collapsed accordion item header
- **THEN** that item expands to reveal its content body
- **AND** its header transitions to the active green border (`#72c02c`) with green text and up-chevron icon
- **AND** other items remain in their previous state (multiple items can be open)

#### Scenario: Collapsing an expanded item

- **GIVEN** the user has expanded an accordion item
- **WHEN** the user clicks on the expanded item header again
- **THEN** the item collapses and the content is hidden
- **AND** the header returns to gray border and gray text with down-chevron

#### Scenario: Component Footer attribution

- **GIVEN** the accordion page is rendered
- **WHEN** the user scrolls to the bottom of the page
- **THEN** a footer is visible containing copyright information and a link to `https://www.componentdock.com/` ("Component Dock")

## Verification Checklist

- [ ] Vite + React 19 + Tailwind CSS 4 setup is fully typed and clean
- [ ] Accordion items support smooth open/close toggle state
- [ ] Active item styling matches design tokens (`#72c02c` border/text, green chevron)
- [ ] First accordion item expanded by default (matching original)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] 100% test coverage with Vitest & Testing Library
- [ ] Passes per-app verification (`scripts/verify-app.sh pleat`)
