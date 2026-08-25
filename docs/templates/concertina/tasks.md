# Tasks & Design Notes: Concertina (accordion-05)

## Overview

Recreation of ColorLib `accordion-05` as **Concertina**, an elegant accordion and FAQ showcase template.

## Section Order & Architecture

1. **Navbar (`Navbar.tsx`)**: Sticky header, logo, navigation items, CTA button.
2. **Hero (`Hero.tsx`)**: Bold headline, subtext, CTA buttons, visual graphic placeholder.
3. **Accordion / FAQ (`AccordionSection.tsx`)**: Interactive expandable accordion items with chevron indicators and rich collapse/expand states.
4. **Features (`Features.tsx`)**: 3-column grid with Lucide icons highlighting core benefits.
5. **Testimonials (`Testimonials.tsx`)**: Carousel/grid of client reviews.
6. **Newsletter (`Newsletter.tsx`)**: Email capture form with validation state.
7. **Footer (`Footer.tsx`)**: Multi-column links, copyright, and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Design Tokens & Styling

- Palette: Slate neutrals (`#0f172a`, `#64748b`, `#f8fafc`) with Teal accent (`#0d9488`).
- Font: Inter / sans-serif.
- Interactive States: Smooth transition on accordion expansion, hover states on cards and buttons.
