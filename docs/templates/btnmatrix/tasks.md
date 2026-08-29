# Tasks & Design Notes: BtnMatrix (Bootstrap Buttons 20)

## Overview

Recreation of ColorLib Bootstrap Buttons 20 as **BtnMatrix**, showcasing an extensive library of button styles, color variants, social buttons, and pill badges.

## Tasks Outline

1. **Scaffold Workspace**:
   - Create `apps/btnmatrix/` using simple existing app copy pattern (`apps/btnflow` or similar).
   - Set package name `@free-react-templates/btnmatrix`.
   - Set `public/CNAME` to `btnmatrix.free.componentdock.com`.
2. **Design Tokens & Theme Setup (`src/index.css`)**:
   - Configure Poppins font.
   - Set up Tailwind v4 theme tokens for primary (`#007bff`), secondary (`#6c757d`), tertiary (`#ff4893`), quarternary (`#01d28e`), and social brand colors (Facebook `#4f69a2`, Twitter `#69b6f0`, LinkedIn `#2884ba`, Pinterest `#d03940`, Dribbble `#ea6294`).
   - Include `injectUiSource()` in `vite.config.ts`.
3. **Component Structure**:
   - `Navbar.tsx` (or top header)
   - `StyleShowcase.tsx` ("Pick Your Style" section)
   - `ColorShowcase.tsx` ("Pick Your Color" section)
   - `SocialGrid.tsx` (4-column grid of social buttons)
   - `SocialBadges.tsx` (Detailed social share & connect buttons)
   - `Footer.tsx` (Component Dock attribution link)
4. **TDD & Verification**:
   - Write Vitest tests for all sections and interactive states.
   - Achieve 100% test coverage across lines, functions, branches, statements.
   - Verify build and per-app gate `scripts/verify-app.sh btnmatrix`.

## Fidelity Notes

- Matches ColorLib Bootstrap Buttons 20 1:1 in section order, button variants, and iconography (`lucide-react` matching IonIcons).
- No ColorLib provenance in app code; Component Dock footer link included.
