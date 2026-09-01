# CarouselFlow — Development Tasks & Design Notes

## Overview

- **Source Template**: ColorLib Carousel 12 (`https://colorlib.com/wp/template/carousel-12/`)
- **Live Preview URL**: `https://preview.colorlib.com/theme/bootstrap/carousel-12/`
- **New Template Name**: `carouselflow` (`apps/carouselflow`)

## Section Breakdown & Fidelity Notes

1. **Hero / Header**: Simple centered heading introducing the product showcase.
2. **Product Carousel**:
   - 6 items with distinct product images (`https://picsum.photos/seed/carouselflow-<n>/600/400`) and bold titles (`font-black`, `#6c757d`).
   - Left-half background treatment (`bg-[#f8f9fa]`) on the container.
   - Horizontal pill indicator dots (`width: 15px; height: 3px; background: #cccccc; active: #007bff`).
3. **Footer**:
   - Clean footer with "Made with Component Dock" linking `https://www.componentdock.com/`.

## Tasks

1. Initialize `apps/carouselflow` package workspace with Vite, React 19, Tailwind CSS 4, and TypeScript.
2. Implement unit tests adhering to TDD with 100% coverage.
3. Build responsive carousel component and views.
4. Verify build and per-app gate.
