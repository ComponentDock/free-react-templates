# Photopia — Design Notes & Task Outline

**Source:** ColorLib "Photosen" — https://preview.colorlib.com/theme/photosen/
**New name:** photopia
**Date:** 2026-08-24

## Section Order (fidelity to source)

| #   | Section      | Source Class            | Notes                                                                  |
| --- | ------------ | ----------------------- | ---------------------------------------------------------------------- |
| 1   | Header/Nav   | `.site-navbar`          | Transparent navbar, white logo, nav links, social icons, mobile toggle |
| 2   | Gallery Grid | `.container-fluid .row` | 3-col grid (col-lg-4), 9 photo category cards                          |
| 3   | Footer       | `.footer`               | Simple centered copyright with Component Dock link                     |

## Fidelity Notes

- **Color palette:** Minimal — dark backgrounds (#1a1d20), white text on images, grayscale images
- **Typography:** Josefin Sans (body/headings), Roboto Mono (monospace accents)
- **Buttons:** White outline only (btn-outline-white), uppercase, 11px, letter-spacing 0.1em
- **Images:** Grayscale by default, color on hover (CSS filter transition)
- **Image overlay:** Centered text with heading + button, appears on hover with rgba(0,0,0,0.4) overlay
- **Layout:** Full-width fluid container, 3-column masonry-like grid
- **Navbar:** Transparent background, absolute positioning, white text
- **Footer:** Simple centered single-line copyright
- **Mobile:** Hamburger menu toggle, slide-in mobile menu
- **No ColorLib refs:** Provenance lives only in spec + TEMPLATES.md

## Component Outline

1. `Navbar.tsx` — transparent header with logo, nav links (Home, Gallery dropdown, Services, About, Contact), social icons, mobile hamburger
2. `GalleryGrid.tsx` — 3-column grid of photo category cards with grayscale images + hover effects
3. `PhotoCard.tsx` — individual card: image with grayscale filter, centered overlay (heading + button)
4. `Footer.tsx` — simple centered copyright with Component Dock link

## Implementation Tasks

- [ ] Scaffold apps/photopia from existing template (copy simplest app, rename package)
- [ ] Set up index.css with Tailwind theme tokens (Josefin Sans, Roboto Mono)
- [ ] Implement Navbar component (transparent, white text, social icons)
- [ ] Implement PhotoCard component (grayscale → color hover, overlay)
- [ ] Implement GalleryGrid component (3-col grid, 9 cards)
- [ ] Implement Footer component
- [ ] Compose App.tsx with all sections
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh and fix any issues
- [ ] Deploy and verify on phone
