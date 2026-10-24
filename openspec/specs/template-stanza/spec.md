# Template: Stanza (Accordion UI Component)

## Purpose

Recreation of ColorLib "Accordion 09" (`https://colorlib.com/wp/template/accordion-09/`).
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
| Surface (measured) | `#37c46f` | paints it ×4 — `background` on `button[aria-expanded="true"]`; style.css?v=597df3f1 (17,341 B, sha256 dbcf30b1b9b5) · <https://preview.colorlib.com/theme/bac/accordion-09/> |

### Visual Notes (from screenshot)

- **Layout**: Centered stack of interactive collapsible accordion panels with clean card separation.
- **Header Structure**: Bold question title on the left, clear plus/minus or chevron indicator on the right.
- **Interactivity**: Clicking any header expands/collapses the corresponding content panel with smooth height/opacity transition.
- **Footer**: Branded footer linking `https://www.componentdock.com/` ("Component Dock").

## Requirements

### Requirement: The page SHALL render with a heading and accordion items

The page SHALL render with a centered heading "Frequently Asked Questions" and a series of interactive accordion items vertically stacked on a neutral light background.

#### Scenario: Initial state

- **WHEN** the page loads
- **THEN** all accordion items are rendered
- **AND** items are collapsed by default
- **AND** toggle icons indicate the current state

#### Scenario: Toggling accordion item

- **WHEN** the user clicks an accordion header
- **THEN** the corresponding panel expands or collapses
- **AND** the chevron icon rotates smoothly
- **AND** other panels maintain their current state

#### Scenario: Footer attribution

- **WHEN** the page renders
- **THEN** the footer contains a link to `https://www.componentdock.com/` ("Component Dock")

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/stanza/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/stanza/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Initial state — all accordion items are rendered
- [ ] Toggling accordion item — the corresponding panel expands or collapses
