# Tasks & Design Notes: Foldout (accordion-04)

## Overview

- **Source**: ColorLib `accordion-04` (`https://preview.colorlib.com/theme/bac/accordion-04/`)
- **New Name**: `foldout`
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript, Vitest + Testing Library

## Section Breakdown & Fidelity Notes

1. **Header**: Centered typography with Poppins font and gold accent underline/badge.
2. **Accordion Cards**:
   - Container with rounded cards (`rounded-[40px]` or `rounded-lg`).
   - Header with custom number badge (`01`, `02`, etc.) in gold (`#f2dc63`), bold title, and toggle icon.
   - Expandable body area with clean typography and spacing.
3. **Footer**: Minimalist dark/light footer with copyright and Component Dock link.

## Implementation Tasks (for implementer)

1. Scaffold `apps/foldout` copying from existing template structure.
2. Register workspace in root `package.json` and run `npm install`.
3. Configure `vite.config.ts` with `injectUiSource()`.
4. Create `src/components/Navbar.tsx`, `src/components/AccordionShowcase.tsx`, `src/components/Footer.tsx`.
5. Write comprehensive unit tests in `src/test/` to maintain 100% test coverage.
6. Verify app with `scripts/verify-app.sh foldout`.
