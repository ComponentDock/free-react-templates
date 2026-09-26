# Pictura — Implementation Tasks

> Recreation of ColorLib "Mostudio" (https://colorlib.com/wp/template/mostudio/)
> Preview: https://preview.colorlib.com/theme/mostudio/

## Structure Order

1. Sidebar (left, fixed on desktop, slide-in on mobile)
2. Portfolio Grid (alternating image-text rows, 9 items)
3. Load More Button (full-width at bottom of grid)

## Section-by-Section Fidelity Notes

### Sidebar

- Fixed left sidebar: 25% width on desktop (>992px), 270px slide-in on mobile
- Logo/brand name "Pictura" with background image (use picsum.photos seed)
- Font: "Abril Fatface" via Google Fonts for logo text
- Navigation: Home, Gallery, About, Pricing, Contact (5 links)
- Active nav: golden yellow (`#f3c623`) underline bar (scaleX animation)
- Nav link color: `rgba(255,255,255,0.8)`, hover: `#f3c623`
- Newsletter subscribe form: "Subscribe for newsletter" heading, email input with paper-plane icon, no border-radius (sharp corners)
- Copyright footer at bottom of sidebar
- Sidebar background: `#000` black with decorative background image (use placeholder)
- Mobile: hamburger toggle (`js-colorlib-nav-toggle`), sidebar slides in from left

### Portfolio Grid

- Full-width rows, no gutters (`no-gutters` grid)
- 9 portfolio items in alternating layout:
  - Odd items (1,3,5,7,9): image LEFT, text RIGHT
  - Even items (2,4,6,8): image RIGHT, text LEFT (use `order-md-last`)
- Each row: `col-md-6` image + `col-md-6` text content
- Image: full-height (`js-fullheight`), background-image, expand icon overlay on hover
- Text content (inside `.text` wrapper with padding):
  - Category subheading (e.g. "Portrait", "Nature", "Fashion", "Animals")
  - Title heading (h2 with link to gallery)
  - Description paragraph (placeholder lorem ipsum)
  - "View Portfolio" pill button (`.custom-btn`)
- Alternating text alignment: odd items left-aligned, even items right-aligned (`.text-md-right`)
- Image overlay: white expand icon, golden background on hover

### Portfolio Items (9 total)

1. Category: "Portrait" — Title: "Black & Gold Paint Face" — Image: seed `mostudio-1`
2. Category: "Nature" — Title: "Green Leaves" — Image: seed `mostudio-2`
3. Category: "Nature" — Title: "Coal" — Image: seed `mostudio-3`
4. Category: "Nature" — Title: "Top Leaf" — Image: seed `mostudio-4`
5. Category: "Portrait" — Title: "Building" — Image: seed `mostudio-5`
6. Category: "Fashion" — Title: "Black Girl Model" — Image: seed `mostudio-6`
7. Category: "Animals" — Title: "Pug Puppy" — Image: seed `mostudio-7`
8. Category: "Nature" — Title: "White Flower" — Image: seed `mostudio-8`
9. Category: "Animals" — Title: "Turtle" — Image: seed `mostudio-9`

### Load More Button

- Full-width block at bottom of portfolio grid
- Text: "Load more" with refresh icon (`fa-refresh` or lucide `RefreshCw`)
- Styled as a block-level link with padding

## Design Tokens to Use

- `--brand: #f3c623` (golden yellow — accent, buttons, nav hover)
- `--bg-dark: #111111` (body background)
- `--bg-sidebar: #000000` (sidebar background)
- `--text: #ffffff` (white text on dark)
- Fonts: Poppins (body), Abril Fatface (logo/display)
- Button: border-radius 30px, bg `#f3c623`, border `1px solid #f3c623`
- Button hover: transparent bg, `#f3c623` text and border

## Notes

- Sidebar layout is distinctive — most templates use top nav; this one uses a fixed left sidebar
- Use `lucide-react` icons: `Expand` for image overlay, `Send` for newsletter paper-plane, `RefreshCw` for load-more
- Use `picsum.photos` for all placeholder images (deterministic seeds)
- The alternating layout is key to fidelity — odd = image-left, even = image-right
- Footer must link `https://www.componentdock.com/` (Component Dock)
- No ColorLib references in any app code — provenance lives only in this spec and TEMPLATES.md
- Google Fonts: load Poppins (300,400,500,600,700) and Abril Fatface via `<link>` in index.html
