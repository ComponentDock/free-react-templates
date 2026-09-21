# PixVault — Implementation Notes

Source: ColorLib Capture — https://preview.colorlib.com/theme/capture/

## Section order (top to bottom)

1. **Sidebar** (fixed left)
   - Camera icon (lucide-react `Camera`) + "PixVault" logo text (Poppins 700, 24px)
   - Nav links: Home, Gallery, About, Blog, Contact (Montserrat 700, 16px)
   - Active link: full-width underline accent
   - Social icons row: Facebook, Twitter, Instagram, LinkedIn (lucide-react)
   - Mobile: off-canvas slide-in (270px), hamburger toggle top-left

2. **Photo Gallery** (main content area, ftco-section-2)
   - 3-column grid, no gutters (Bootstrap `row no-gutters` → Tailwind `grid grid-cols-3 gap-0`)
   - Each item: 280px height, background-image via `picsum.photos/seed/pixvault-N/400/280`
   - Overlay: absolute black, opacity 0 → 0.7 on hover (transition 0.3s)
   - Text: "Work 0N" title (white, 20px) + category tag (white 80%, uppercase, 12px, letter-spacing 2px)
   - Click: lightbox popup (use a simple React state modal or react-lightbox pattern)
   - Categories used: Model, Nature, Fashion, Travel, Technology, Photography

3. **Footer** (dark background #242423)
   - 3-column layout inside container
   - Column 1: "Category" heading + list (Photography (6), Fashion (8), Technology (2), Travel (2))
   - Column 2: "Archives" heading + list (months with counts)
   - Column 3: additional widget area (newsletter or about text)
   - Footer headings: white, 17px, 700 weight, 1px letter-spacing
   - Footer links: rgba(255,255,255,0.5) → white on hover
   - Category list items: bottom border rgba(255,255,255,0.1)
   - Must include "Component Dock" link

## Fidelity notes

- **Sidebar-first layout**: Unlike most ColorLib templates with a top navbar, Capture uses a persistent left sidebar (20% width). This is the defining visual characteristic.
- **No gutters on gallery**: The `row no-gutters` pattern creates a seamless grid. Use Tailwind `gap-0` or negative margins.
- **Overlay transition**: The overlay and text both use opacity transitions (0.3s ease). On mobile (<768px), overlay is 30% opaque and text is always visible.
- **Fonts**: Three Google Fonts loaded — Poppins (headings/logo), Montserrat (nav), Work Sans (body). Keep all three for fidelity.
- **Color palette is minimal**: Nearly all black/white with transparency variations. The only accent color is the subtle hover underline on nav links.
- **Lightbox**: Original uses Magnific Popup. Recreate with a lightweight React solution (state-controlled modal with image display).
- **Placeholder images**: Use `https://picsum.photos/seed/pixvault-1/400/280` through `pixvault-12/400/280` for deterministic placeholders.

## Component tree

```
App
├── Sidebar (fixed, left)
│   ├── Logo (Camera icon + "PixVault")
│   ├── NavMenu (ul > li > a × 5)
│   ├── SocialIcons (4 icon links)
│   └── MobileToggle (hamburger button, shown <992px)
├── MainContent (margin-left: 20%)
│   └── PhotoGallery (grid, 12 items)
│       └── GalleryItem × 12
│           ├── BackgroundImage
│           ├── Overlay (absolute, transition)
│           └── Text (title + tag)
└── Footer (dark bg)
    ├── CategoryWidget
    ├── ArchivesWidget
    └── AdditionalWidget
```
