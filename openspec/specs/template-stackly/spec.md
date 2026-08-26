# Template: Stackly (Accordion UI Component)

## Purpose

Recreation of ColorLib **Accordion 08** (`https://colorlib.com/wp/template/accordion-08/`).
Preview URL: `https://preview.colorlib.com/theme/accordion-08/` (returns 404 — fallback to screenshot analysis).

Stack: Vite + React 19 + TypeScript + Tailwind CSS 4.

This template implements an **interactive vertical accordion component** — multiple collapsible panels with styled headers, custom toggle buttons, and smooth state transitions, designed for FAQ and information disclosure patterns.

## Design Tokens (extracted from screenshot analysis)

| Token                  | Value                                                                          | Usage                                  |
| ---------------------- | ------------------------------------------------------------------------------ | -------------------------------------- |
| `--color-bg-page`      | `#f8fafc` / `slate-50`                                                         | Page background (light/neutral)        |
| `--color-bg-accordion` | `#ffffff` / `white`                                                            | Accordion item backgrounds             |
| `--color-border`       | `#e2e8f0` / `slate-200`                                                        | Accordion row borders                  |
| `--color-text-primary` | `#0f172a` / `slate-900`                                                        | Accordion headers / questions          |
| `--color-text-body`    | `#475569` / `slate-600`                                                        | Expanded panel body text               |
| `--color-accent`       | `#0ea5e9` / `sky-500`                                                          | Active accordion indicator / accent    |
| `--font-family`        | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | All text                               |
| `--radius-panel`       | `0.5rem` / `rounded-lg`                                                        | Accordion container/item border radius |

### Visual Notes (from screenshot)

- **Page background**: Clean neutral light gray (`#f8fafc`), fills viewport
- **Accordion container**: Centered horizontally, max-width ~700px, generous vertical padding
- **Heading**: "Accordion #08" centered above accordion, dark text, clean typography
- **Accordion items**: Multiple vertical stacked cards with subtle borders and shadows
- **Header row**: Flex layout — question text left, chevron/toggle indicator right
- **Question text**: Dark slate (`#0f172a`), bold/medium weight, left-aligned
- **Toggle indicator**: Clean chevron icon that rotates upon expansion
- **Expanded panel**: White background, padded content area with body text in neutral slate (`#475569`)
- **Footer**: Required Component Dock attribution link (`https://www.componentdock.com/`)

## Requirements

### Requirement: The page SHALL render with a heading and accordion items

The page SHALL render with a centered heading "Accordion #08" and a series of interactive accordion items vertically stacked on a neutral light background.

#### Scenario: Initial state

- **WHEN** the page loads
- **THEN** all accordion items are rendered
- **AND** items are collapsed by default or the first item is expanded
- **AND** toggle icons indicate the current state

#### Scenario: Toggling accordion item

- **WHEN** the user clicks an accordion header
- **THEN** the corresponding panel expands or collapses
- **AND** the chevron icon rotates smoothly
- **AND** other panels maintain their current state

#### Scenario: Footer attribution

- **WHEN** the page renders
- **THEN** the footer contains a link to `https://www.componentdock.com/` ("Component Dock")
