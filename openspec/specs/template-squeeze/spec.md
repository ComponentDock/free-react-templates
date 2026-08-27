# Template: Squeeze (FAQ & Accordion Component)

## Purpose

Recreation of ColorLib Accordion 16 (`https://colorlib.com/wp/template/accordion-16/`), preview URL `https://preview.colorlib.com/theme/bac/accordion-16/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript (strict). Designed as a clean, rounded accordion FAQ/help component.

## Design tokens

- **Brand color**: `#72c02c` (Green accent for active items and plus/minus toggles)
- **Background**: `#efefef` (Page background), `#f9f9f9` (Item background), `#ffffff` (Accordion button background)
- **Text colors**: `#999` / `#888` (Body/muted text), `#333` (Headings)
- **Font family**: "Roboto", sans-serif
- **Border radius**: `rounded-[40px]` (Pill/rounded accordion items)
- **Spacing rhythm**: Generous padding (`py-28 px-4`), vertical stacked items with gap/margin.

## Requirements

### Requirement 1: Header Section

- Display a prominent centered heading "Bootstrap Accordion #6" (or adapted branded heading).
- Clean light background aesthetic.

### Requirement 2: Accordion Items

- Stacked pill-shaped accordion items with `rounded-[40px]` and smooth expansion transitions.
- Each item has a clickable header button with an icon indicator (`+` when collapsed, `-` in green `#72c02c` when expanded).
- Active/expanded item highlights the title text in green `#72c02c`.

### Requirement 3: Component Dock Footer

- Every template footer MUST link `https://www.componentdock.com/` ("Component Dock").

## Gherkin Scenarios

### Scenario: User expands an accordion item

- Given the accordion component is loaded with multiple FAQ items
- When the user clicks the header button for item 1
- Then item 1 expands to reveal its content body
- And the toggle icon changes to minus with green accent `#72c02c`
- And the header title turns green `#72c02c`

### Scenario: User collapses or switches accordion items

- Given item 1 is expanded
- When the user clicks item 2
- Then item 1 collapses and item 2 expands

## Verification Checklist

- [ ] TypeScript strict compilation (`npm run typecheck`)
- [ ] Linting (`npm run lint`)
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links Component Dock (`https://www.componentdock.com/`)
