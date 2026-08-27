# BtnCraft (`bootstrap-buttons-01`) — Implementation Tasks & Design Notes

## Overview

- **Source Template**: ColorLib Bootstrap Buttons 01 (`https://colorlib.com/wp/template/bootstrap-buttons-01/`)
- **Live Preview Status**: 404 Not Found (Fidelity sourced from ColorLib screenshot and standard modern Bootstrap design principles).
- **Assigned New Name**: `btncraft`
- **Workspace Package**: `@free-react-templates/btncraft`
- **Surge Target**: `btncraft.free.componentdock.com`

## Section Breakdown & Implementation Plan

1. **Navbar (`Navbar.tsx`)**: Responsive header with logo, section links, theme toggle, and GitHub link.
2. **Hero (`Hero.tsx`)**: High-impact introduction with title, description, and preview CTA buttons.
3. **SolidButtons (`SolidButtons.tsx`)**: Grid of standard solid buttons across all semantic tones.
4. **OutlineButtons (`OutlineButtons.tsx`)**: Outline variant showcase.
5. **ShapeVariants (`ShapeVariants.tsx`)**: Pill (`rounded-full`) and square (`rounded-none`) buttons.
6. **SizesAndStates (`SizesAndStates.tsx`)**: Sm/Md/Lg sizes, active, disabled, and loading spinner states.
7. **IconButtons (`IconButtons.tsx`)**: Buttons with Lucide icons (leading/trailing).
8. **Playground (`Playground.tsx`)**: Interactive generator with live preview and code snippet copy.
9. **Footer (`Footer.tsx`)**: Footer with copyright and mandatory `https://www.componentdock.com/` link ("Made with Component Dock").

## Design Tokens & Styling

- Tailwind v4 `@theme` configuration for primary (`#0d6efd`), secondary (`#6c757d`), success (`#198754`), danger (`#dc3545`), warning (`#ffc107`), info (`#0dcaf0`).
- Consistent interactive focus rings and smooth transitions.
