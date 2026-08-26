# Foldcraft Implementation Plan & Design Notes

Recreation of ColorLib **Accordion 12** (`accordion-12`).

## Structure & Section Order

1. **Header Section**: Centered heading ("Bootstrap Accordion #2" / "Foldcraft Help Center").
2. **Accordion Component**:
   - Item 1: How to download and register? (Default open)
   - Item 2: How to create your paypal account?
   - Item 3: How to link your paypal and bank account?
3. **Footer**: Branded attribution linking to `https://www.componentdock.com/`.

## Design Notes & Fidelity

- **Colors**: Use Tailwind theme color for primary green `#72c02c`.
- **Interactions**: Accordion state management allowing single expanded panel at a time, chevron icon toggle (`Lucide` chevron icons).
- **Testing**: 100% test coverage required across all components (`Accordion.test.tsx`, `App.test.tsx`).
