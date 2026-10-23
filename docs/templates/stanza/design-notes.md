# Stanza — Design Notes & Task Outline

- **ColorLib Source**: Accordion 09 (`https://colorlib.com/wp/template/accordion-09/`)
- **Preview URL**: `https://preview.colorlib.com/theme/accordion-09/` (404 fallback)
- **Assigned App Name**: `stanza` (`@free-react-templates/stanza`)

## Section Structure & Order

1. **Header / Title Section**: Centered page title ("Stanza Accordion") explaining the interactive accordion UI.
2. **Accordion Component Container**:
   - 4-5 rich FAQ / content items.
   - Interactive header with chevron / plus-minus toggle.
   - Smooth expand/collapse panels.
3. **Footer**: Branded footer with Component Dock link (`https://www.componentdock.com/`).

## Design Tokens & Styling

- Background: Slate-100 (`#f1f5f9`)
- Cards: White (`#ffffff`) with slate-300 borders (`#cbd5e1`)
- Accent: Blue-600 (`#2563eb`)
- Typography: Clean system font stack, slate-800 headings (`#1e293b`), slate-700 body (`#334155`).

## Implementation Tasks (for Implementer stream)

1. Scaffold app folder `apps/stanza` using an existing template structure.
2. Configure `vite.config.ts` with `injectUiSource()`.
3. Set `public/CNAME` to `stanza.free.componentdock.com`.
4. Implement components (`Navbar`, `Hero`, `AccordionList`, `Footer`).
5. Write Vitest unit/integration tests with 100% coverage.
6. Verify build, test, and lint gates.
