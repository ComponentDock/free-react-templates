# Showpiece — Implementation Notes

Source: ColorLib Portfolio 2 (slug: portfolio-2)
Preview: https://preview.colorlib.com/theme/portfolio2/
New name: showpiece

## Section order (from live DOM)

1. Header (sticky, logo left, nav right with dropdowns)
2. Hero (full-width, background image, outline text watermark "Portfolio")
3. Portfolio gallery (masonry grid, 9 items, hover overlay)
4. "More Works" dark bar
5. Services (3 cards, outline text watermark "Services")
6. Blog carousel (articles with author info, outline text watermark "Blog")
7. Footer (dark navy, 4 columns, copyright)

## Structure notes

### Header
- Logo image on left (col-xl-3)
- Desktop nav on right (col-xl-9), hidden on mobile
- Mobile hamburger menu (d-lg-none)
- Sticky positioning via `#sticky-header`

### Hero
- Full-width, 725px height, background image
- Large outlined text "Portfolio" as decorative overlay (position: absolute, huge font, text-stroke)
- "Hello Everyone" subtitle in brand blue (#0181F5)
- Heading paragraph about design capabilities

### Portfolio gallery
- Not a standard CSS grid — uses float-based masonry
- Items: 35% width (normal) or 30% width (small_width variant)
- Each item: image thumb + gallery_hover overlay
- Hover: blue circle (::before pseudo, 351px, #0181F5) slides in from left
- Category label (#B3D9FC) and title (#fff) appear on hover

### Services section
- 3 columns (col-xl-4)
- Each: SVG icon + h3 title + paragraph
- Decorative outlined "Services" text (#EFEFF1 stroke)

### Blog section
- Owl carousel of blog articles
- Each: thumbnail image, date, title, author avatar + name + role
- "More Blogs" button (#0181F5)
- Decorative outlined "Blog" text (#349AF7 stroke)

### Footer
- Dark navy (#040E27) background
- 4 columns: Logo, Services links, Useful Links, Follow Us
- Copyright text (#596672)
- Social: Dribbble, Behance, Instagram, Facebook

## Implementation tasks

1. Scaffold app (copy base template, rename package, set up vite config with injectUiSource)
2. Set up Tailwind theme tokens (primary blue, dark bg, fonts)
3. Build Header component (sticky, responsive nav with dropdowns)
4. Build Hero section (background image, outline text, subtitle, heading)
5. Build Portfolio gallery (masonry grid, hover overlay animation)
6. Build "More Works" bar
7. Build Services section (3 cards, outline text watermark)
8. Build Blog carousel (article cards, author info)
9. Build Footer (4 columns, social links, copyright)
10. Wire up App.tsx to compose all sections
11. Add responsive breakpoints
12. Write tests for all components (100% coverage)
13. Run verification gate

## Key implementation decisions

- Use Tailwind's `@theme` for brand tokens (#0181F5, #040E27, Alata font)
- Portfolio grid: CSS Grid with auto-fill or manual columns (not float)
- Gallery hover: Tailwind group-hover with transition
- Outline text: CSS `text-stroke` / `-webkit-text-stroke` utility
- Blog carousel: Consider using a simple scrollable container or a lightweight carousel
- Mobile: Stack gallery items vertically, collapse nav to hamburger
