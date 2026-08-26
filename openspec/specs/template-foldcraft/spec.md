# Template: Foldcraft (UI Component / Accordion Category)

## Purpose

Recreation of ColorLib **Accordion 12** (`https://colorlib.com/wp/template/accordion-12/`, live preview `https://preview.colorlib.com/theme/bac/accordion-12/`), built with Vite, React 19, Tailwind CSS 4, and TypeScript.
Provides a clean, elegant vertical accordion widget with smooth expand/collapse states, distinct active styling, and responsive layout.

## Design tokens

- **Colors**:
  - Primary / Active background: `#72c02c` (green)
  - Text / Content: `#888` / `#b3b3b3`
  - Border: `#efefef`
  - Surface: `#fff`
- **Typography**:
  - Font Family: `"Roboto", sans-serif`
  - Headings: 20px (`h2`)
- **Spacing & Layout**:
  - Centered container with generous padding (`7rem 0`)
  - Stacked accordion items with 10px spacing and rounded corners (`4px`)

## Gherkin Requirements & Scenarios

### Feature: Foldcraft Interactive Accordion

As a site visitor, I want to click accordion headers to expand or collapse content panels so that I can read information progressively.

#### Scenario: Initial render shows first panel expanded

- **Given** the Foldcraft accordion page is loaded
- **Then** the first accordion item ("How to download and register?") should be expanded and show its body content
- **And** items 2 and 3 should be collapsed

#### Scenario: Clicking a collapsed accordion header expands it and highlights active state

- **Given** item 2 ("How to create your paypal account?") is collapsed
- **When** the user clicks item 2's header
- **Then** item 2 expands to show its body content
- **And** item 2's header gets the primary accent background (`#72c02c`) and white text
- **And** previously expanded item 1 collapses

#### Scenario: Footer displays required Component Dock attribution

- **Given** the Foldcraft page is rendered
- **Then** the footer must contain a link to `https://www.componentdock.com/` with branded text

## Verification Checklist

- [ ] TypeScript compilation succeeds (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% lines/functions/branches/statements
- [ ] Production build succeeds (`npm run build`)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] CNAME points to `foldcraft.free.componentdock.com`
