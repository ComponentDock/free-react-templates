# Photolens Task Outline & Implementation Plan

## Overview

- **Source Template**: ColorLib Photosen (`https://colorlib.com/wp/template/photosen/`)
- **New Name**: Photolens (`apps/photolens`)
- **Preview URL**: `https://preview.colorlib.com/theme/photosen/`
- **Deploy Target**: `https://photolens.free.componentdock.com`

## Section Order & Structure

1. **Navbar (`Navbar.tsx`)**:
   - Brand title "Photolens" (`h1`)
   - Navigation links: Home, Gallery, Services, About, Contact (with dropdown support for Gallery categories)
   - Social icons (Facebook, Twitter, Instagram, YouTube)
   - Mobile off-canvas menu toggle
2. **Gallery Grid (`GalleryGrid.tsx`)**:
   - 3-column responsive grid
   - `.image-wrap-2` items with grayscale images, hover scale, dark overlay (`rgba(0,0,0,0.4)`), category titles (Nature, Portrait, People, Architecture, Animals, Sports, Travel), and "More Photos" buttons.
3. **Footer (`Footer.tsx`)**:
   - Dark background (`#333333`)
   - Copyright text and Component Dock attribution link (`https://www.componentdock.com/`).

## Design Notes & Fidelity

- Background color: `#000000` (black body background).
- Font family: `Josefin Sans` for headings/nav, sans-serif body.
- Sharp buttons (`border-radius: 0`), uppercase text, letter spacing.
