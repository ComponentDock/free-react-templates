# Template: Stanza (Accordion UI Component)

## Purpose

Recreation of ColorLib **Accordion 09** (`https://colorlib.com/wp/template/accordion-09/`).
Preview URL: `https://preview.colorlib.com/theme/accordion-09/` (returns 404 — fallback to screenshot analysis).

Stack: Vite + React 19 + TypeScript + Tailwind CSS 4.

This template implements an **interactive FAQ and collapsible section accordion** with modern styling, distinct active states, icon indicators, and responsive padding.

## Design Tokens (extracted from screenshot analysis)

| Token                | Value                                                                          | Usage                              |
| -------------------- | ------------------------------------------------------------------------------ | ---------------------------------- |
| `--color-bg-page`    | `#f1f5f9` / `slate-100`                                                        | Page background                    |
| `--color-bg-card`    | `#ffffff` / `white`                                                            | Accordion card background          |
| `--color-border`     | `#cbd5e1` / `slate-300`                                                        | Border color for items             |
| `--color-text-title` | `#1e293b` / `slate-800`                                                        | Header title text                  |
| `--color-text-body`  | `#334155` / `slate-700`                                                        | Body text inside expanded panel    |
| `--color-accent`     | `#2563eb` / `blue-600`                                                         | Active indicator and accent border |
| `--font-family`      | `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | UI font stack                      |
| `--radius-card`      | `0.75rem` / `rounded-xl`                                                       | Card corner rounding               |

### Visual Notes (from screenshot)

- **Layout**: Centered stack of interactive collapsible accordion panels with clean card separation.
- **Header Structure**: Bold question title on the left, clear plus/minus or chevron indicator on the right.
- **Interactivity**: Clicking any header expands/collapses the corresponding content panel with smooth height/opacity transition.
- **Footer**: Branded footer linking `https://www.componentdock.com/` ("Component Dock").

## Gherkin Requirements & Scenarios

### Feature: Stanza Accordion Display and Interaction

#### Scenario: Display accordion panels in initial collapsed state

- **Given** the Stanza template is loaded in the browser
- **When** the page renders
- **Then** all accordion items are visible with collapsed body content and clear header titles.

#### Scenario: Expand an accordion item

- **Given** an accordion item is collapsed
- **When** the user clicks the accordion header
- **Then** the panel expands to reveal the body text and the toggle indicator updates its orientation.

#### Scenario: Collapse an expanded accordion item

- **Given** an accordion item is expanded
- **When** the user clicks the header again
- **Then** the panel collapses, hiding the body content.

#### Scenario: Component Dock footer presence

- **Given** the user scrolls to the bottom of the page
- **When** the footer is rendered
- **Then** it contains a link pointing to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] App builds successfully (`npm run build`)
- [ ] All tests pass with 100% coverage
