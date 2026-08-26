# Bellows — Tasks & Design Notes

## Overview

Recreation of ColorLib Accordion 09 (`accordion-09`), renamed to **Bellows**.

## Section Breakdown & Fidelity Notes

1. **Navbar (`Navbar.tsx`)**: Clean sticky header with brand logo ("Bellows"), navigation links (Features, Demos, Documentation, FAQ), and CTA button.
2. **Hero (`Hero.tsx`)**: Centered headline, subtitle, and primary call-to-action buttons showcasing flexible accordion layouts.
3. **Accordion Showcase (`AccordionSection.tsx`)**:
   - Variant 1: Standard FAQ Accordion (single expand mode).
   - Variant 2: Rich Content Accordion (with icons, badges, and detailed descriptions).
   - Variant 3: Nested/Multi-column Collapsible Panels.
4. **Features (`Features.tsx`)**: Grid highlighting accessibility, keyboard navigation, smooth animations, and zero-dependency lightweight design.
5. **Footer (`Footer.tsx`)**: Clean footer with navigation links and mandatory Component Dock attribution linking `https://www.componentdock.com/`.

## Design Tokens Summary

- Palette: Slate & Indigo (`#0f172a`, `#4f46e5`, `#f8fafc`)
- Typography: Inter
- Radii: `rounded-xl`
