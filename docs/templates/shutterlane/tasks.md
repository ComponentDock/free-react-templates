# Shutterlane — Implementation Tasks & Design Notes

Source: ColorLib "Photo Gallery" (https://colorlib.com/wp/template/photogallery/)
Preview: https://preview.colorlib.com/theme/photogallery/
New name: shutterlane (apps/shutterlane, @free-react-templates/shutterlane)

## Section order (source fidelity)

1. Preloader (full-screen black overlay with spinning ring)
2. Special controls (fixed top-right: search icon + hamburger)
3. Sidebar (fixed left 455px: logo, nav, social links, copyright)
4. Hero slider (full-height, 2 slides with background images)
   - Slide 1: text box + next-slide preview thumbnail
   - Slide 2: text box + next-slide preview thumbnail
5. Slider nav arrows (bottom-left: prev dark, next white)
6. Slide counter (bottom-right)
7. Search overlay (full-screen black, hidden by default)
8. Footer (Component Dock attribution — new, not in source)

## Component breakdown

- `App.tsx` — Root layout: preloader state, sidebar + main content
- `Preloader.tsx` — Full-screen animated loader, fades on mount
- `Sidebar.tsx` — Fixed left panel (logo, nav, social, copyright)
  - `NavMenu.tsx` — 5 links with active state
  - `SocialLinks.tsx` — Rotated vertical social icons
- `HeroSlider.tsx` — Container for slides with state management
  - `Slide.tsx` — Single slide: bg image, text box, preview thumbnail
  - `SliderNav.tsx` — Prev/next arrows + slide counter
- `SearchOverlay.tsx` — Full-screen search with close button
- `SpecialControls.tsx` — Fixed top-right search + hamburger icons
- `Footer.tsx` — Component Dock attribution

## Design notes

### Layout structure
- Two-column: fixed sidebar (455px) + scrollable content (padding-left: 455px)
- Hero fills viewport height minus 77px bottom padding
- On tablet/mobile: sidebar becomes overlay, content goes full-width

### Typography
- PT Sans 400/700 from Google Fonts (add <link> to index.html)
- Headings are weight 400 (NOT bold) — unusual, must match source
- Category labels: 11px uppercase bold, letter-spacing 2px, #898d90
- Body text: 16px, #898d90, line-height 1.8

### Color palette (monochromatic)
- Primary text: #323232 (dark grey)
- Muted text: #898d90 (medium grey)
- Light text: #c6d7d8 (blue-grey, social/copyright)
- Borders/accents: #000000
- Section backgrounds: #f7f9fb (light grey-blue)
- Overlays: #323232 (gallery hover), #000 (preloader/search)

### Button style (signature)
- Transparent bg, 2px solid #000 border, radius 0 (square)
- 16px bold uppercase, letter-spacing 0.08em
- Min-width 189px, padding 15px 28px 15px 62px
- Right-arrow icon at right 23px top 22px (use lucide ChevronRight)
- Variants: default (dark border), sb-light (white border), sb-solid-dark (#323232 bg)

### Slider mechanics
- Replace Owl Carousel with CSS transitions or Framer Motion
- Two slides with hash-based navigation
- Each slide shows the OTHER slide's thumbnail as preview
- Nav arrows: 111×88px blocks, prev=#323232, next=#fff
- Slide counter: 111×88px block showing current number

### Social links rotation
- Icons rotated -90deg, transform-origin top left
- "Find us on" text also rotated -90deg with translateX(-200px)
- Decorative 101px black line via ::after pseudo-element

### Responsive breakpoints
- ≥992px: full sidebar, preview thumbnails visible, 33% gallery items
- 768–991px: sidebar overlay, centered text 495px, 90×60 arrows, 50% items
- <768px: sidebar overlay, full-width centered text, 90×60 arrows, 50% items
- <480px: 100% gallery items, full-width text boxes

### Placeholder images
- Hero backgrounds: picsum.photos/seed/shutterlane-1/1920/1080 and -2
- Sidebar logo: text-based "Shutterlane" or simple SVG mark
- Next-slide previews: smaller crops of the other slide's background

### Accessibility improvements over source
- Source uses image files for icons → replace with lucide-react
- Source has no ARIA → add nav label, aria-expanded on hamburger,
  aria-live on slider, label on search input
- Source has no focus styles → add focus-visible rings
- Source uses jQuery for all interactivity → React state management

### Files to create
- apps/shutterlane/ (full Vite + React + Tailwind app)
- openspec/specs/template-shutterlane/spec.md (done)
- docs/templates/shutterlane/tasks.md (this file)
