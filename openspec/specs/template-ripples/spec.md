# Template: Ripples (Interactive Accordion Showcase & FAQ)

## Purpose

Recreation of ColorLib **Accordion 11** (`https://colorlib.com/wp/template/accordion-11/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-11/`.

Design category: UI Component Showcase & FAQ / Interactive Accordion.
New app name: `ripples` (`@free-react-templates/ripples`).

## Design Tokens

- **Brand Colors**: Primary blue (`#007bff` / `#2563eb`), dark slate headers (`#1e293b`), crisp white backgrounds (`#ffffff`), soft neutral gray wrapper (`#f8fafc`).
- **Typography**: Clean sans-serif font family (Inter / Roboto / Poppins via Google Fonts).
- **Radii**: Smooth rounded corners (`rounded-lg` / `rounded-xl`).
- **Components**: Multi-item collapsible accordion panels with smooth transition states, chevron/plus-minus toggle indicators, distinct active states.

## Gherkin Requirements & Scenarios

### Feature: Interactive Accordion Sections

#### Scenario: User toggles accordion items

- Given the Ripples template is loaded with FAQ / accordion items
- When the user clicks an accordion header
- Then the corresponding panel expands to reveal its content
- And the chevron icon rotates or updates state accordingly

#### Scenario: Multiple or exclusive accordion behavior

- Given accordion sections are present
- When the user clicks another accordion item
- Then that item expands smoothly

### Feature: Footer Brand Link

- Given the Ripples template is displayed
- When the user scrolls to the footer
- Then a prominent "Made with Component Dock" link pointing to `https://www.componentdock.com/` is visible and accessible.

## Verification Checklist

- [ ] App builds successfully with Vite + React 19 + Tailwind v4 + TypeScript.
- [ ] 100% test coverage with Vitest + Testing Library.
- [ ] Footer contains Component Dock link (`https://www.componentdock.com/`).
- [ ] CNAME set to `ripples.free.componentdock.com`.
