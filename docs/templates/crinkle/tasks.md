# Tasks & Implementation Outline: Crinkle (Accordion 04 Recreation)

## Overview

Recreation of ColorLib `accordion-04` under the original name `crinkle`.

## Section Breakdown & Tasks

1. **Setup & Configuration**
   - Create app folder `apps/crinkle` using template structure (e.g. copied from `apps/bellows`).
   - Configure `package.json` with name `@free-react-templates/crinkle`.
   - Update `vite.config.ts` with `injectUiSource()`.
   - Set up `public/CNAME` with `crinkle.free.componentdock.com`.

2. **Components**
   - `Navbar.tsx`: Responsive navigation bar with mobile menu toggle.
   - `Hero.tsx`: Engaging hero banner with title, subtitle, and CTA.
   - `AccordionShowcase.tsx`: Interactive multi-category accordion component with state management for expanded items and animated chevron icons.
   - `FeatureGrid.tsx`: 3-column or 4-column feature highlights using Lucide icons.
   - `CtaBanner.tsx`: Conversion-focused banner block.
   - `Footer.tsx`: Footer with navigation links and mandatory Component Dock attribution (`https://www.componentdock.com/`).

3. **Testing & Coverage**
   - Write comprehensive unit/integration tests for each component using Vitest + Testing Library.
   - Ensure 100% test coverage across lines, functions, branches, and statements.

4. **Verification**
   - Run `scripts/verify-app.sh crinkle` to verify linting, typechecking, 100% test coverage, and build.
