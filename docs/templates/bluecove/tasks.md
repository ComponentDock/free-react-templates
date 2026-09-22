# BlueCove — Template Tasks & Design Notes

## Implementation order

1. **Project scaffolding**
   - Copy simplest existing app (small hotel template)
   - Rename package to `@free-react-templates/bluecove`
   - Update `vite.config.ts` with `injectUiSource()`
   - Set `public/CNAME` → `bluecove.free.componentdock.com`
   - Set `"homepage"` in `package.json`
   - Run `npm install` at root

2. **Design tokens (`src/index.css`)**
   - `@theme` block with brand colors:
     - `--color-brand-dark: #06151a` (deep ocean teal)
     - `--color-brand: #0891b2` (cyan accent)
     - `--color-brand-hover: #0e7490`
     - `--color-gold: #d6a85d` (gold accent for prices)
     - `--color-gold-light: #f0c572`
     - `--color-body: #111`
     - `--color-muted: #6c777a`
     - `--color-light-bg: #f7f4ec`
   - Google Fonts link in `index.html`: Playfair Display + Manrope

3. **Components (section order)**
   - `Navbar.tsx` — fixed top, brand icon + "BlueCove", nav links, "Book Now" CTA, mobile hamburger
   - `Hero.tsx` — full-viewport, dark overlay, heading, booking form (date inputs, room select), two CTA buttons
   - `StatsBar.tsx` — 4 stats in a row (48 suites, 4.9 rating, 120m beach, 24/7 concierge)
   - `About.tsx` — two-column: text left, image right
   - `Rooms.tsx` — 3 room cards: Ocean Panorama Suite ($299), Private Garden Villa ($499), Azure Loft ($399). Each: image, name, price, amenity icons, "Book Now"
   - `Amenities.tsx` — 4 cards: Infinity pool, Azure spa, Fine dining, Fitness club. Each: icon, name, description
   - `Offers.tsx` — two-column: package description left, pricing card right ($699/3 nights)
   - `Gallery.tsx` — 6-image grid with hover overlay
   - `Reviews.tsx` — slider with review cards (5-star, quote, avatar, name, location), prev/next controls
   - `Contact.tsx` — two-column: info left (address, phone, email), form right (name, email, message, submit)
   - `Footer.tsx` — dark bg, 4 columns (brand, Explore, Social, Newsletter), bottom bar with copyright + Component Dock link

4. **App composition (`src/App.tsx`)**
   - Render all sections in order

5. **Tests (TDD)**
   - One `*.test.tsx` per component
   - 100% coverage enforced
   - Query by role/text, user-event for interactions

## Fidelity notes

### ColorLib "The Grand Azure" → React "BlueCove"

| Aspect | ColorLib Original | React Recreation |
|--------|-------------------|------------------|
| CSS framework | Tailwind CSS (original) | Tailwind CSS 4 |
| Icons | Remix Icons (`ri-*`) | lucide-react |
| Images | Unsplash | picsum.photos/seed/bluecove-N/W/H |
| Fonts | Playfair Display + Manrope | Same — loaded via link tag |
| Slider | Custom JS slider | React state-based slider |
| Booking form | Date pickers, select | HTML date inputs + select |
| Hover effects | CSS transitions | Tailwind hover utilities |
| Newsletter | Form with JS validation | React form with validation |

### Key design details

- Brand palette: deep ocean teal `#06151a` for dark sections, cyan `#0891b2` for accents, gold `#d6a85d` for prices
- Hero: dark overlay over background image, booking form integrated
- Stats bar: clean row of 4 key numbers with labels
- Room cards: rounded corners, price in gold, amenity icon row
- Amenities: icon cards with descriptions
- Offers: split layout with pricing card on right
- Gallery: grid layout with hover overlay (dark tint + zoom)
- Reviews: slider with avatar, star rating, quote
- Contact: form + contact info side by side
- Footer: dark bg, 4-column grid, newsletter signup

### Sections to replicate (DOM order)

1. Navbar (fixed, brand + nav + CTA)
2. Hero (full-screen, overlay, booking form)
3. Stats Bar (4 stats row)
4. About (2-column, text + image)
5. Rooms (3 cards, pricing, icons)
6. Amenities (4 cards, icons + descriptions)
7. Offers (2-column, package + pricing card)
8. Gallery (6-image grid, hover overlay)
9. Reviews (slider, 5-star, avatars)
10. Contact (info + form)
11. Footer (dark, 4-column, newsletter, Component Dock)
