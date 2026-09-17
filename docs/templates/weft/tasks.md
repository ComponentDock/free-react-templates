# Weft — Implementation Tasks & Design Notes

**Source:** ColorLib Cocoon (https://colorlib.com/wp/template/cocoon/)
**Preview:** https://preview.colorlib.com/theme/cocoon/
**New name:** weft
**Deploy:** https://weft.free.componentdock.com

## Section Order (replicate 1:1)

1. Sidebar (fixed left, dark)
   - Logo
   - Main nav (Home, About Us, Services, Portfolio, Blog, Contact)
   - Filter menu (All, Branding, Design, Photography, Architecture)
   - Social icons (Instagram, Facebook, Twitter, Pinterest)
   - Copyright / Component Dock credit
2. Main content area (scrollable right)
   - Home / Portfolio grid (masonry, Isotope-style filtering)
   - About section
   - Services section
   - Blog section
   - Contact section

## Fidelity Notes

### Sidebar (Left, Fixed)

- **Background:** `#18181c` (dark charcoal), `min-height: 100vh`
- **Width:** ~16.67% on desktop (Bootstrap `col-lg-2 col-md-3`)
- **Logo:** centered at top, padding `25px 10px`, image or text "Weft"
- **Nav links:** vertical list, each link `padding: 12px 25px 12px 50px`,
  white text on transparent bg. Active/hover: `#99896e` bg, white text.
  Font: Montserrat 400, 13px.
- **Filter label:** "Filter By:" in `#99896e`, `padding-left: 50px`,
  `font-size: 15px`, weight 500, `margin-bottom: 25px`
- **Filter items:** `padding: 8px 15px 8px 50px`, white text. Active/hover:
  `#99896e` bg. Font: Montserrat, `text-transform: capitalize`.
- **Social icons:** `margin-top: 100px`, centered, `font-size: 20px`,
  `#99896e` color. Hover: white. List inline-block.
- **Copyright:** `padding: 25px`, `#99896e`, `font-size: 12px`, weight 500,
  centered. Text: "Copyright ©2024 All rights reserved | Made with Component Dock"
  → link to https://www.componentdock.com/

### Mobile Sidebar

- At ≤768px: sidebar gets `max-width: 250px`, `position: fixed`, hidden with
  `margin-left: -250px`. Transition: `all 0.4s ease-in-out`.
- Body gets `.sidebar_closed` class to show/hide.
- Floating menu button: `position: fixed; right: 30px; bottom: 30px;`
  60×60px circle, white bg, `#99896e` icon, `border-radius: 50px`,
  shadow `0 0 42px rgba(0,0,0,0.1)`. Hover: lighter shadow, `#18181c` icon.

### Portfolio Grid (Home)

- **Layout:** Masonry/grid with items of varying heights
- **Images:** full-width within their grid cells, `background-size: cover`
- **Hover overlay:** shows on hover with project title/category
- **Filtering:** Isotope.js style — clicking a filter hides/shows items
  with smooth transition. Categories: branding, design, photography, architecture.
- **Item categories:** each item has a data attribute or class matching a
  filter category (e.g., `.branding`, `.design`)
- **Placeholder images:** use `picsum.photos/seed/weft-N/600/800` with
  varying dimensions for masonry effect

### About Section

- White background, `padding: 50px 30px`
- Section title with `#99896e` accent underline (2px × 30px, positioned
  absolute below heading)
- Content: agency description text
- Include images (picsum.photos/seed/weft-about/800/500)

### Services Section

- Same white background style
- Section title with accent underline
- Service items with icons (lucide-react), titles, descriptions
- Could be a grid or list layout

### Blog Section

- Blog post cards with images, titles, dates, excerpts
- Images use `background-size: cover`
- Post titles in Montserrat 400, `#18181c`
- Excerpt text in Montserrat 300, `#9c9ca9`

### Contact Section

- Form: Name, Email, Subject, Message, Submit button
- Submit button: primary style (`#99896e` bg, white text, square)
- Contact info: address, phone, email

### Button Reference

```
Default:    bg #18181c, color #fff, padding 15px 50px, radius 0, letter-spacing 1px
Primary:    bg #99896e, color #fff, border 1px solid #99896e
Outline:    bg transparent, border 1px solid #99896e, color #99896e
Rounded:    add border-radius 50px to any above
Hover def:  bg #fff, color #18181c
Hover pri:  bg #18181c, color #fff, border #18181c
Hover out:  bg #99896e, color #fff
```

## Design Token Reference

```
Sidebar bg:       #18181c
Accent:           #99896e (warm taupe/gold-brown)
Body text:        #9c9ca9
Headings:         #18181c
Content bg:       #ffffff
Font:             'Montserrat', sans-serif
Font weights:     300 (body), 400 (headings), 500 (labels/titles)
Section accent:   2px × 30px #99896e underline on h4
Button padding:   15px 50px
Button radius:    0 (default), 50px (rounded variant)
Letter spacing:   1px (buttons)
Text transform:   capitalize (buttons, filter labels)
Sidebar width:    ~16.67% (col-lg-2)
Mobile sidebar:   250px fixed, hidden by default
```

## Implementation Priority

1. **P0 (must match exactly):** Sidebar (nav, filters, social, copyright), Portfolio grid with filtering
2. **P1 (core sections):** About, Contact, Mobile sidebar toggle
3. **P2 (standard patterns):** Services, Blog

## Technical Notes

- The original uses Bootstrap 3 grid + Isotope.js for masonry + filtering
- React recreation should use CSS Grid or Masonry layout (CSS columns or
  a masonry library) + client-side filtering (no Isotope dependency needed)
- The original is multi-page (index.html, about.html, etc.) — combine into
  a single SPA with section-based navigation via sidebar links
- Sidebar is position:fixed on desktop, slides in/out on mobile
- Smooth scroll to sections when clicking nav links
