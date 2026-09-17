# Chrysalis — Template Prep Notes

**Source**: ColorLib "Cocoon" — https://colorlib.com/wp/template/cocoon/
**Preview analyzed**: https://preview.colorlib.com/theme/cocoon/
**Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/cocoon-free-template.jpg

## Template overview

Portfolio masonry grid template with fixed sidebar navigation. Two-column layout:
- Left sidebar (~20% width): dark background, logo, vertical nav, filter menu, social icons, copyright
- Right content (~80% width): masonry grid of portfolio images with hover overlays

## Section structure (order)

1. **Sidebar** — persistent left column
   - Logo (centered, white text on dark bg)
   - Navigation menu (vertical, 6 items)
   - Filter menu (5 items: All, Branding, Design, Photography, Architecture)
   - Social icons (Pinterest, Facebook, Twitter, Dribbble)
   - Copyright (gold text, 12px)
2. **Portfolio grid** — masonry layout filling main area
   - Isotope-style filter animations
   - Grid items: 1-col, 2-col, or 3-col span
   - Hover overlay: translucent dark bg + "+" icon + "project name"
   - Lightbox on click (magnific-popup style)
3. **Mobile menu** — floating pill button, bottom-right corner
   - Triggers overlay sidebar on small screens

## Fidelity notes

- **Font**: Montserrat, weights 300 (body), 400 (headings, nav), 500 (filter titles, bold text)
- **Brand accent**: #99896e — warm gold/tan, used on active filter indicator, social icons, menu-btn color, hover states, loader border
- **Sidebar bg**: #18181c near-black, full height (min-height: 100vh)
- **Body text**: #9c9ca9 muted purple-gray
- **Headings**: #18181c near-black
- **Transition**: all 0.4s ease-in-out on all interactive elements
- **Grid**: Isotope.js style — masonry layout with category filter, animated reposition
- **Hover overlay**: translucent dark background with centered "+" icon and project name text
- **Mobile**: sidebar hidden, floating button with border-radius: 50px, white bg, gold icon
- **No blog/counter/testimonial/contact sections** visible in the index page — these are on separate pages in the original but we focus on the portfolio view

## Implementation approach

1. Create `Sidebar.tsx` component with logo, nav, filter, social icons, copyright
2. Create `PortfolioGrid.tsx` with masonry layout using CSS Grid or a lightweight masonry lib
3. Create `PortfolioItem.tsx` with hover overlay state
4. Create `FilterMenu.tsx` — controlled filter state, passes to grid
5. `App.tsx` composes Sidebar + PortfolioGrid in a flex/grid two-column layout
6. Mobile: use Tailwind `hidden lg:block` for sidebar, show floating button below lg breakpoint
7. Lightbox: simple React modal overlay, no heavy dependency needed
8. Use picsum.photos with seed `chrysalis-1`, `chrysalis-2`, etc. for portfolio images
