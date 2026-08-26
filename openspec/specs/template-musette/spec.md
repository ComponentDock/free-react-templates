# Template: Musette (Interactive Accordion Showcase & FAQ)

## Purpose

Recreation of ColorLib **Accordion 13** (`https://colorlib.com/wp/template/accordion-13/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-13/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript. Styled as a modern minimalist interactive accordion component showcase featuring smooth collapsible panels, chevron icons, active green highlight state (`#72c02c`), and clean Roboto typography.

## Design tokens

- **Brand color:** Green accent `#72c02c`, neutral text `#999`, body `#fff`, border `#efefef`.
- **Font family:** `Roboto`, sans-serif.
- **Radius:** 4px (`rounded`).
- **Section structure:** Header navigation / title area, main content container with multiple interactive accordion item cards.

## Requirements & Scenarios

### Requirement 1: Accordion Panel State Management

- **Scenario:** User clicks an accordion item header to toggle its open/closed state.
- **Scenario:** Active open items highlight with the green accent border (`#72c02c`) and matching active text color.
- **Scenario:** Chevron icons toggle between down/up states accordingly.

### Requirement 2: Footer Branding

- **Scenario:** The page footer links to `https://www.componentdock.com/` ("Component Dock").

## Verification checklist

- [ ] Vite + React 19 + Tailwind CSS 4 + TypeScript build passes without errors.
- [ ] 100% test coverage on all components.
- [ ] Responsive design rendering correctly on mobile and desktop viewports.
- [ ] Footer links to Component Dock.
