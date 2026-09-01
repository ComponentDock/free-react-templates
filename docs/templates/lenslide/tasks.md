# Lenslide — Task Outline & Implementation Plan

## Overview

- **Source Template**: ColorLib Carousel 14 (`https://colorlib.com/wp/template/carousel-14/`)
- **Assigned New Name**: `lenslide`
- **Design Category**: Testimonial & Image Carousel Showcase

## Implementation Steps

1. **App Scaffold**:
   - Create `apps/lenslide` as a Vite + React 19 + Tailwind CSS 4 workspace.
   - Configure `package.json` with `@free-react-templates/lenslide`, dependencies, and workspace links.
   - Add `public/CNAME` with `lenslide.free.componentdock.com`.
2. **Components & Layout**:
   - `Navbar.tsx`: Sticky navigation header.
   - `TestimonialCarousel.tsx`: Interactive slide component matching the `.testimony-29101` split layout (image + quote) with next/previous controls and pagination dots.
   - `Footer.tsx`: Footer with mandatory Component Dock link (`https://www.componentdock.com/`).
3. **Styling & Design Tokens**:
   - Apply Roboto font stack, Bootstrap blue accent (`#007bff`), and `#f8f9fa` backgrounds via Tailwind utilities.
4. **Testing & Verification**:
   - Write comprehensive unit tests achieving 100% test coverage.
   - Run typecheck, lint, test coverage, and build successfully.
