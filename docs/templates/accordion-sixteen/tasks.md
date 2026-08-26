# Tasks: Accordion Sixteen (`accordion-sixteen`)

Source: ColorLib Bootstrap Accordion V16 (`https://colorlib.com/wp/template/accordion-16/`)
Preview: `https://colorlib.com/etc/accordion/colorlib-accordion-16/`

## Design Notes & Research

- **Theme**: Deep purple (`#563d7c`), clean rounded accordion boxes.
- **Font**: Open Sans & Roboto Slab.
- **Layout**: Centered container with 5 collapsible accordion items, chevron indicators, smooth expand/collapse behavior.

## Implementation Steps (for Implementer stream)

1. Scaffold `apps/accordion-sixteen` copying structure from an existing accordion app (`apps/accordion-twelve` or similar).
2. Register workspace in root `package.json` / run `npm install`.
3. Create tests (`App.test.tsx`, `Accordion.test.tsx`) covering rendering and toggle interactions.
4. Implement components: `Navbar.tsx`, `Hero.tsx`, `AccordionList.tsx`, `Footer.tsx`.
5. Ensure footer links `https://www.componentdock.com/`.
6. Run `scripts/verify-app.sh accordion-sixteen` (100% coverage).
