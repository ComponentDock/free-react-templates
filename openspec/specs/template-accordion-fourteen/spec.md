# Template: Accordion Fourteen (Interactive FAQ & Accordion System)

## Purpose

Recreation of ColorLib **Accordion 14** (`https://colorlib.com/wp/template/accordion-14/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-14/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

## Design Tokens

- **Brand Colors**: Primary vibrant purple (`#743beb`), Background light neutral (`#efefef`), Item background (`#f8f8fa`), Text primary (`#333333`), Text muted (`#888888` / `#b3b3b3`), Accent highlight (`#743beb`).
- **Font Family**: "Roboto", sans-serif.
- **Button Shapes**: Clean borderless full-width buttons with left padding, icon indicators, and smooth transition states.
- **Section Backgrounds**: Centered content container on light gray background (`#efefef`) with clean stacked accordion items.

## Requirements & Gherkin Scenarios

### Feature: Interactive FAQ Accordion Navigation

As a site visitor, I want to explore collapsible accordion panels so that I can easily find answers to common questions in a clean, organized interface.

#### Scenario: Expanding and collapsing accordion items

- Given the user is on the Accordion Fourteen template home page
- When the user clicks on an accordion item header
- Then the corresponding content panel expands smoothly, and the active indicator highlights with the brand purple color (`#743beb`)
- And clicking another header collapses the previous panel and expands the new one

#### Scenario: Viewing active indicator border highlight

- Given an accordion item is expanded
- When the item is in the active state
- Then a vertical accent border appears on the left side of the item in primary purple (`#743beb`)
