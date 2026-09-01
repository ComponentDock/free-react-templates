# CarouselFlow (Carousel 12) — Implementation Outline & Design Notes

## Overview

Recreation of ColorLib Carousel 12 (`carousel-12`) as `carouselflow`. Clean product carousel showcasing items with thumbnail images and bold titles against a half-width background split.

## Section Structure & Order

1. **Navbar / Header**: Simple centered title header ("Carousel #2").
2. **Products Section**:
   - Container with `.bg-left-half` styling (`#f8f9fa` background split).
   - Section heading: "Our Products".
   - Carousel/Grid of 6 items (each with responsive image, hover effect, and bold title).
   - Pagination dots / controls.
3. **Footer**:
   - Standard template footer with attribution link to `https://www.componentdock.com/` ("Component Dock").

## Design Notes & Tokens

- **Font**: Roboto (`font-sans`).
- **Colors**: Primary blue (`#007bff`), text muted (`#b3b3b3`), title gray (`#6c757d`), section bg (`#f8f9fa`).
- **Images**: Picsum placeholder seed `carouselflow-1` to `carouselflow-6`.
