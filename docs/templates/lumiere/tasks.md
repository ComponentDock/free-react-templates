# Lumiere — Implementation Tasks & Design Notes

Source: ColorLib Rea → https://preview.colorlib.com/theme/rea/

## Section order (match 1:1)

1. Header (logo + animated headline + hamburger toggle)
2. Full-screen navigation overlay (menu + social icons)
3. Portfolio masonry grid (isotope-style varying column widths)
4. Load-more button (centered arrow)
5. Footer (three columns: categories, nav, social + copyright)

## Component breakdown

### Header.tsx
- Logo image (left) — use placeholder or SVG monogram
- AnimatedHeadline component: typewriter effect cycling words with pink highlight
  - Words: ["web resources", "psd files", "mockups"]
  - Highlight: `background: #f271ab; color: #fff`
  - Font: Lato 300 weight, 28px
- HamburgerToggle: three black bars of decreasing width, animates to X on open
- Position: relative, centered content 1170px max-width

### NavOverlay.tsx
- Full-screen white overlay, z-index 100
- Centered nav links: Home, About, Contact, Features
- Social icons row below: Twitter, Behance, Dribbble, Facebook, RSS
- Opens/closes with hamburger toggle (animated bars → X)

### PortfolioGrid.tsx
- Light gray (#F5F5F5) background section
- Masonry layout with CSS grid or flexbox (varying widths: full, half, quarter)
- Grid items: `p_one` (full), `p_one_half` (half), `p_one_fourth` (quarter)
- Each PortfolioItem:
  - Image with hover overlay (rgba(22,31,50, 0.5))
  - Overlay shows view count + download count
  - White content card below (padding 25px, border-radius 2px)
  - Uppercase category tag (letter-spacing 3px, font-size 13px)
  - Article title (Lato 400, 20px)
  - Heart/like icon + count (absolute bottom-right of card)

### LoadMore.tsx
- Centered arrow image/icon below grid
- 85x85px clickable area

### Footer.tsx
- Three-column layout (1170px max-width, centered)
- Column 1: Categories list (Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video)
- Column 2: Navigation links (About, Features, Contact)
- Column 3: Social icons (Twitter, Behance, Dribbble, Facebook, RSS) + copyright
- Footer text color: #7e7e7e
- Font size: 16px, line-height: 36px
- Social icon size: 23px
- Replace Colorlib attribution with Component Dock link

## Design fidelity notes

- **Typography**: Lato font family (300/400/700). Load via Google Fonts link in index.html.
- **Brand color**: #f271ab (pink/rose). Use as Tailwind theme color.
- **Cards**: White bg, 2px border-radius, 25px padding. Minimal shadows.
- **Image hover**: Dark overlay (rgba 22,31,50 0.5) with white text for counts.
- **Category tags**: Uppercase, letter-spacing 3px, small font (13px).
- **Like heart**: Background image heart icon; on hover shifts to "active" state.
- **Grid**: Use CSS Grid with named layout classes. Items span different column counts.
- **Animations**: Headline typewriter effect (JS-driven), hamburger bar transitions (CSS transforms).

## Implementation order

1. Scaffold app from simplest existing template
2. Set up theme tokens in index.css (@theme block)
3. Build Header + AnimatedHeadline
4. Build NavOverlay
5. Build PortfolioGrid + PortfolioItem
6. Build LoadMore
7. Build Footer
8. Write tests for each component (TDD)
9. Run coverage + build verification
