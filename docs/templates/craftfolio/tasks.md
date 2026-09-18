# Craftfolio — Implementation Tasks & Design Notes

Source: ColorLib "Portfolio" (https://colorlib.com/wp/template/portfolio/)
Preview: https://preview.colorlib.com/theme/portfolio/
New name: craftfolio (apps/craftfolio, @free-react-templates/craftfolio)

## Section order (source fidelity)

1. Page wrapper (50px/30px/10px margin inset)
2. Navbar (transparent over hero, sticky on scroll)
3. Hero banner (dark overlay, green subtitle, white h1, green pill CTA)
4. Portfolio section (title + filter tabs + 3-column grid with 12 items)
5. Services section (dark parallax bg + 3 overlapping white cards)
6. Testimonials (2-column, 4 reviews with star ratings)
7. Footer (dark bg: About Us + Newsletter + Social links)
8. Component Dock attribution (replaces Colorlib copyright)

## Component breakdown

- `App.tsx` — Root layout with wrapper, sections in order
- `Navbar.tsx` — Transparent/sticky navbar with links + dropdown
  - `DropdownMenu.tsx` — Pages dropdown (Generic, Elements)
- `HeroBanner.tsx` — Full-height hero with overlay, content, CTA
- `PortfolioSection.tsx` — Title + filters + grid container
  - `FilterTabs.tsx` — 5 filter tabs with active state
  - `PortfolioGrid.tsx` — 3-column grid of portfolio items
  - `PortfolioItem.tsx` — Single item: image + title + category + hover
- `ServicesSection.tsx` — Dark parallax bg with overlapping cards
  - `ServiceCard.tsx` — White card: icon + title + description
- `TestimonialsSection.tsx` — Title + 2-column review grid
  - `ReviewCard.tsx` — Avatar + name + stars + text
  - `StarRating.tsx` — 5-star rating display
- `Footer.tsx` — Dark bg, 3 columns: About, Newsletter, Social

## Design notes

### Layout structure
- Page wrapper with responsive margin (50/30/10px) — unique inset effect
- Standard Bootstrap-like grid via Tailwind equivalents
- Sections separated by 120px vertical padding

### Typography
- Poppins 100-700 from Google Fonts (add <link> to index.html)
- Headings: weight 600, color #222222
- Body: weight 300, color #777777, line-height 1.625em
- Hero h1: 72px weight 700 white (scales: 45px/36px/40px)
- Hero subtitle: 12px uppercase green, letter-spacing 3px
- Nav links: 12px uppercase weight 500 white
- Filter tabs: uppercase weight 500 #222

### Color palette
- Brand/accent: #8ab92d (lime green) — buttons, active states, hover, selection
- Text headings: #222222
- Text body: #777777
- Dark navy: #04091e (footer, overlays, sticky header)
- Overlay light: rgba(4, 9, 30, 0.5) — hero banner
- Overlay dark: rgba(4, 9, 30, 0.8) — services, sticky header
- Card bg: #ffffff
- Star filled: orange
- Social icons: #cccccc (hover → green)
- Footer input: #191919

### Button style (primary CTA)
- Green (#8ab92d) bg, white text, radius 50px (pill)
- Weight 500, uppercase, padding 0 40px, line-height 36px
- Hover: transparent bg, white 1px border, white text
- Submit button in footer: green bg, radius 0, arrow icon

### Portfolio grid mechanics
- Replace Isotope.js with React state-based filtering
- 3 columns (col-sm-4), 12 items total
- Filter categories: corporate, personal, agency, portal
- Filter tabs: underline animation on hover (width transition 350ms)
- Active tab: green color
- Items: image (100% width, radius 10px) + title (15px) + category (13px)
- Hover: overlay with title/category (opacity/transform transition)

### Services section
- Dark parallax background with 10px radius
- 3 white cards overlapping by -120px (negative margin)
- Cards: radius 10px, 30px padding, green box-shadow
- Icons: PNG images → replace with lucide-react icons

### Testimonials
- 2-column layout (col-lg-6), 2 reviews per column
- Each: avatar, name (linked), 5-star rating (orange filled), text
- Star rating: filled = orange, unfilled = default color

### Footer
- Dark navy #04091e bg, 100px top padding
- 3 columns: About Us, Newsletter, Follow Us
- Newsletter: email input (#191919 bg) + green submit button
- Social: 4 icons (Facebook, Twitter, Dribbble, Behance) grey → green hover

### Responsive breakpoints
- ≥1200px: full layout, 72px hero h1
- 992–1199px: hero h1 45px, service cards still 3-col
- 768–991px: hero h1 36px, nav collapses, wrapper 30px margin
- <768px: portfolio 2-col, service cards stack, wrapper 10px margin
- <576px: portfolio 1-col, hero h1 40px

### Placeholder images
- Hero bg: picsum.photos/seed/craftfolio-hero/1920/1080
- Portfolio items: picsum.photos/seed/craftfolio-N/600/400 (N=1..12)
- Service icons: lucide-react (Palette, Building2, Compass)
- Testimonial avatars: picsum.photos/seed/craftfolio-avatar-N/100/100

### Accessibility improvements over source
- Source uses linearicons/font-awesome PNGs → replace with lucide-react
- Source has no ARIA on filter tabs → add role="tablist"/"tab"/"tabpanel"
- Source has no focus styles → add focus-visible rings
- Source uses jQuery for sticky nav → React state + scroll listener
- Source uses Isotope for filtering → React state-based filtering

### Files to create
- apps/craftfolio/ (full Vite + React + Tailwind app)
- openspec/specs/template-craftfolio/spec.md (done)
- docs/templates/craftfolio/tasks.md (this file)
