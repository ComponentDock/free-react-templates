# Campusly Template Tasks & Design Notes

## Overview

Recreation of ColorLib **Universityedu** (`https://colorlib.com/wp/template/universityedu/`) as **Campusly** (`apps/campusly`).

## Section Implementation Plan

1. **Setup App Workspace**: Copy structure from an existing template (e.g. `aurora`), update `package.json` to `@free-react-templates/campusly`, register in root `package.json` workspaces.
2. **Design Tokens (`src/index.css`)**:
   - Define Chivo font import
   - Configure Tailwind v4 `@theme` with brand primary `#007A5C` and accent `#F15B43`.
   - Register `injectUiSource()` in `vite.config.ts`.
3. **Components (`src/components/`)**:
   - `Navbar.tsx`: Sticky navigation with mobile menu toggle.
   - `Hero.tsx`: Headline "SHOWCASE COURSES, EVENTS AND MORE!" with buttons.
   - `About.tsx`: "A comprehensive teaching approach" dual-column layout.
   - `Programs.tsx`: Academic faculties and top stories grid.
   - `Resources.tsx`: Essential student resources (First year, Tuition, International).
   - `StatsAndBrands.tsx`: 6000+ students trusted counter + partner logos.
   - `Newsletter.tsx`: Subscription form.
   - `Footer.tsx`: Multi-column links + mandatory Component Dock attribution (`https://www.componentdock.com/`).
4. **Tests (`src/App.test.tsx` / components)**:
   - Ensure 100% test coverage across all components and App.tsx.
5. **Verification**:
   - Run `scripts/verify-app.sh campusly`.
