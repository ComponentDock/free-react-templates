# Carouseten Implementation Tasks & Design Notes

## Overview

Recreation of ColorLib `carousel-10` as `carouseten`.

## Section Breakdown & Fidelity Notes

1. **Navbar (`src/components/Navbar.tsx`)**:
   - Sticky header with brand logo, navigation links (Home, Features, Showcase, Contact), and a mobile drawer toggle.
2. **Hero (`src/components/Hero.tsx`)**:
   - Clean centered hero with gradient accent title, subheadline, and primary call-to-action buttons.
3. **Carousel Showcase (`src/components/CarouselShowcase.tsx`)**:
   - Interactive multi-item thumbnail carousel featuring high-quality picsum images (`https://picsum.photos/seed/carouseten-1/1200/600`), navigation arrows, dot indicators, title, and description overlay.
4. **Features (`src/components/Features.tsx`)**:
   - 3-column feature card grid highlighting responsiveness, smoothness, and customizability using Lucide icons.
5. **Newsletter (`src/components/Newsletter.tsx`)**:
   - Subscription card with email input validation and success feedback state.
6. **Footer (`src/components/Footer.tsx`)**:
   - Footer links, copyright, and mandatory branded attribution linking `https://www.componentdock.com/` ("Component Dock").

## Design Token Reference

- **Primary Gradient:** `from-indigo-600 to-blue-500`
- **Background:** `bg-slate-50` light / `bg-slate-900` dark
- **Font:** Inter / system sans-serif
