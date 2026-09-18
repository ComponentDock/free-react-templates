# AeroWorks — Implementation Notes

**Source:** ColorLib Hvac → https://colorlib.com/wp/template/hvac/
**Preview:** https://preview.colorlib.com/theme/hvac/
**New name:** aeroworks

## Section Order & Fidelity Notes

### 1. Header
- **Structure:** Two-tier header. Top bar (dark `#323232`) with phone, email, social icons. Main bar below with logo (left), nav links (center), "Add Car" button (right).
- **Fidelity:** Match the two-tier layout. Top bar can be simplified (social icons from lucide-react). Nav uses horizontal links with hover underline effect.
- **Tailwind:** `bg-[#323232]` for top bar, white bg for main nav.

### 2. Hero
- **Structure:** Full-width background image (use `picsum.photos/seed/aeroworks-hero-1/1920/1080`). Overlay with "Find Your Dream Car" headline (white, bold, large), car model name, monthly price, two CTA buttons. Below: tabbed search form (Car Rental / Buy Car) with select dropdowns.
- **Fidelity:** The hero bg image covers the full width. Tabs switch between rental/buy forms. Form fields are styled selects inside a white card (`border-radius: 2px`).
- **Tailwind:** Use `bg-cover bg-center` for hero image. Tab form: `bg-white rounded-[2px] p-10`.

### 3. Services
- **Structure:** 4 service items in a row (CSS grid / flex 4-col). Each: icon (top), title, description. White card with `1px solid #ebebeb` border, `border-radius: 2px`, centered text.
- **Fidelity:** Match the card style exactly — thin border, generous padding (`36px 35px 40px`). Icons from lucide-react.
- **Tailwind:** `border border-[#ebebeb] rounded-[2px] p-9 text-center`.

### 4. Feature
- **Structure:** Two-column layout. Left: heading, paragraph, two buttons ("About Us", "Our Partners"). Right: 6 feature items in 2×3 grid with circular icons. Background `#f7f7f7`.
- **Fidelity:** Icons should be circular with red (`#db2d2e`) accent. Grid layout on right side. Buttons: primary (red) and outline.
- **Tailwind:** `bg-[#f7f7f7]`. Left column text, right column `grid grid-cols-2 gap-6`.

### 5. Car Listings
- **Structure:** "Best Vehicle Offers" heading + filter row (car type buttons). Grid of car cards, each with image (owl-carousel in original — simplify to static or simple slider), car name, price, brief specs.
- **Fidelity:** Cards have image on top, text below. Price shown prominently (monthly or full). Cards have hover overlay effect.
- **Tailwind:** `grid grid-cols-3 gap-8`. Card: `rounded-[2px] overflow-hidden`. Image with hover opacity transition.

### 6. Choose Us
- **Structure:** Split layout. Left: "Why People Choose Us" heading + paragraph + "About Us" button. Right: video thumbnail with play button overlay. Background `#f7f7f7`.
- **Fidelity:** Match the split 50/50 layout. Video placeholder can be a styled div with play icon.
- **Tailwind:** `bg-[#f7f7f7]`, two-column flex/grid.

### 7. Latest News
- **Structure:** "Latest News Updates" heading. 3 blog cards in a row: background image thumbnail, date badge, title, excerpt.
- **Fidelity:** Cards have image bg with overlay text. Date shown as badge or text above title.
- **Tailwind:** `grid grid-cols-3 gap-8`. Card image: `bg-cover bg-center` with dark overlay for text readability.

### 8. Footer
- **Structure:** Dark background (use `picsum.photos/seed/aeroworks-footer/1920/600` as bg or solid dark). Three columns: Contact (phone, email, address), About (logo + social icons), Information (links). Bottom: brand logos row + copyright.
- **Fidelity:** Footer text is white/light on dark bg. Border-top separator between main footer and copyright. Must include Component Dock link.
- **Tailwind:** `bg-[#1a1a1a]` or similar dark. Text `text-white`. Links `text-[#8d8d8d]` hover to white.

## Shared Components to Reuse from packages/ui
- `Button` / `ButtonLink` — for CTAs (primary variant with `#db2d2e` bg)
- `Card` — for service cards, car cards, blog cards
- `cn()` — for all class merging

## Placeholder Images
- Hero bg: `https://picsum.photos/seed/aeroworks-hero/1920/1080`
- Car images: `https://picsum.photos/seed/aeroworks-car-1/600/400` through `-car-8`
- Blog images: `https://picsum.photos/seed/aeroworks-blog-1/600/400` through `-blog-3`
- Video placeholder: solid color div or `https://picsum.photos/seed/aeroworks-video/800/500`
- Footer bg: `https://picsum.photos/seed/aeroworks-footer/1920/600`

## Implementation Priority
1. Header (nav + top bar)
2. Hero (bg image + search form)
3. Services (4 cards)
4. Feature (split layout)
5. Car Listings (card grid)
6. Choose Us (split + video)
7. Latest News (blog cards)
8. Footer (dark, multi-column)
