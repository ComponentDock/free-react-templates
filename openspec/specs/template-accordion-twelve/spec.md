# Template: Accordion Twelve (Interactive Accordion Showcase)
<!-- prep-status: shipped-as=creel -->
> **SHIPPED-UNDER** — the ColorLib `accordion-12` design this prep describes already
> ships as `apps/creel` (<https://creel.free.componentdock.com>).
> Do not scaffold `apps/accordion-twelve`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-creel/spec.md`.

## Purpose

Recreation of ColorLib **Accordion 12** (`https://colorlib.com/wp/template/accordion-12/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-12/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript. Styled as a modern minimalist interactive accordion component showcase featuring smooth collapsible panels, chevron icons, active green state (#72c02c), and clean typography.

## Design Tokens

- **Brand Primary / Active Color:** `#72c02c` (vibrant green)
- **Background Color:** `#ffffff` (white)
- **Text Color (Paragraphs / Body):** `#888888` / `#b3b3b3`
- **Border Color:** `#efefef`
- **Font Family:** `"Roboto", sans-serif`
- **Border Radius:** `4px` (`rounded`)

## Requirements

### Feature: Interactive Accordion Panels

As a visitor, I want to expand and collapse accordion items so that I can read detailed answers cleanly without clutter.

#### Scenario: Default initial state

- **GIVEN** the accordion page is loaded
- **WHEN** the user views the accordion items
- **THEN** the first accordion item ("How to download and register?") is expanded by default with the active green background (`#72c02c`), white text, and a chevron-up icon
- **AND** the other accordion items are collapsed with default border styling (`#efefef`), gray text, and a chevron-down icon

#### Scenario: Expanding a collapsed item

- **GIVEN** the user is viewing the accordion component
- **WHEN** the user clicks on a collapsed accordion item header ("How to create your paypal account?")
- **THEN** that item expands to reveal its content body
- **AND** its header transitions to the active green background (`#72c02c`) with white text and chevron-up icon
- **AND** previously expanded items collapse

#### Scenario: Component Footer attribution

- **GIVEN** the accordion page is rendered
- **WHEN** the user scrolls to the bottom of the page
- **THEN** a footer is visible containing copyright information and a link to `https://www.componentdock.com/` ("Component Dock")

## Verification Checklist

- [ ] Vite + React 19 + Tailwind CSS 4 setup is fully typed and clean
- [ ] Accordion items support smooth open/close toggle state
- [ ] Active item styling matches design tokens (`#72c02c` background, white text)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] 100% test coverage with Vitest & Testing Library
- [ ] Passes per-app verification (`scripts/verify-app.sh accordion-twelve`)
