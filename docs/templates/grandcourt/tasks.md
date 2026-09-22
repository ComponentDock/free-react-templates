# GrandCourt — Implementation Tasks & Design Notes

**Source:** ColorLib Luxehotel  
**Preview:** https://preview.colorlib.com/theme/luxehotel/  
**New name:** `grandcourt`  
**App path:** `apps/grandcourt`  
**Package:** `@free-react-templates/grandcourt`

---

## Implementation task order

### Phase 1 — Scaffold
1. Copy simplest existing app as base (e.g., `apps/aurora` or similar small app)
2. Rename package to `@free-react-templates/grandcourt`
3. Set `public/CNAME` → `grandcourt.free.componentdock.com`
4. Set `homepage` in package.json → `https://grandcourt.free.componentdock.com`
5. Add Google Fonts link in `index.html`: Playfair Display (400, 700) + Poppins (300, 400, 500, 700)
6. Add Tailwind theme colors in CSS/`@theme`: `brand-blue: #4586FF`, `brand-orange: #F96D00`, `brand-gold: #F7AF1D`, `brand-footer: #302939`

### Phase 2 — Components (top-to-bottom)
7. **TopBar** — Dark bg strip, flex row: site URL left, phone + 4 social icons (lucide-react) right
8. **Navbar** — Flex row: logo "GrandCourt" (Playfair Display bold, tracking-wide) left, 7 nav links right. Sticky on scroll (use `sticky top-0 z-50 bg-white shadow-sm` on scroll). Active state on Home link.
9. **HeroSlider** — Full-width `relative` container with 4 slides. Each slide: `bg-cover bg-center` with `picsum.photos/seed/grandcourt-hero-<n>` images, `bg-black/70` overlay, centered text (h2 sub-heading in Poppins, h1 in Playfair Display), two buttons (blue solid "View Detail", outlined "Know More"). Dot navigation. Implement with simple useState index + useEffect interval.
10. **ReservationBar** — `bg-brand-footer` strip with flex/grid row: Check-in date input, Check-out date input, Adults select, Children select, blue Search button. Use native HTML date inputs.
11. **Services** — 4-column grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`). Each: circular container (`rounded-full bg-gray-100 p-6`) with blue icon (lucide-react: ConciergeBell, Flower2, Car, Wine), heading in Playfair Display, description in Poppins.
12. **RoomsAndSuites** — `bg-gray-100` section. Centered heading "Rooms & Suites" with 5 gold stars above. Carousel (use simple scroll-snap or CSS-based carousel, or a lightweight library). 6 room cards: image (`picsum.photos/seed/grandcourt-room-<n>`), star rating row, room name, price display, amenities list with checkmarks, "Book now!" blue button. "View all rooms" link with arrow.
13. **DiningAndBar** — Split layout. Left: tabbed menu with 3 tabs (Mains/Desserts/Drinks), each showing 4 food items (thumbnail + price + name + category). Right: full-height background image. Use React state for tab switching.
14. **Blog** — Split layout. Left: featured video/image with play button overlay (`bg-black/50` overlay, centered play icon). Right: 3 blog post entries (thumbnail + date + title + category). "View all blog post" link at bottom right.
15. **Testimonials** — `bg-gray-100` section. Centered heading "Our Satisfied Guests says" with 3 gold stars. 3-column grid: each card has circular avatar (`rounded-full w-20 h-20`), name, "Satisfied Customer" subtitle, blockquote text.
16. **Newsletter** — Full-width `bg-cover bg-center` with `picsum.photos/seed/grandcourt-newsletter` image, `bg-black/60` overlay, centered content: heading, sub-text, email input + blue Subscribe button in a flex row.
17. **Footer** — `bg-brand-footer text-white` 4-column grid. Col 1: brand name + description + social icons. Col 2: Quick Links list. Col 3: Recent Blog Posts list. Col 4: Contact info. Bottom bar: copyright + Component Dock credit link (`https://www.componentdock.com/`). No ColorLib references.
18. **GoToTop** — Fixed-position button bottom-right, appears when `scrollY > 300`, scrolls to top on click. Chevron-up icon.

### Phase 3 — Tests + Polish
19. Write Vitest + Testing Library tests for each component
20. Ensure 100% coverage
21. Run `scripts/verify-app.sh grandcourt`

---

## Design fidelity notes

### Section order (must match exactly)
TopBar → Navbar → HeroSlider → ReservationBar → Services → RoomsAndSuites → DiningAndBar → Blog → Testimonials → Newsletter → Footer

### Color usage
- **Primary blue (#4586FF):** All buttons (except hero "Know More" which is outlined), links, service icons, active states
- **Accent orange (#F96D00):** Price highlights on room cards, hover state for some links
- **Gold (#F7AF1D):** Star rating icons (5-star and 3-star rows above section headings)
- **Footer dark (#302939):** Reservation bar background, footer background
- **Body text (#595959):** Paragraph text, descriptions
- **Light grey (#f7f7f7 / #fafafa):** RoomsAndSuites background, Testimonials background

### Typography
- **Headings (h1, h2):** Playfair Display, serif — elegant luxury feel
- **Body/UI:** Poppins, sans-serif — clean modern readability
- **Logo "GrandCourt":** Playfair Display bold, uppercase tracking-wide

### Layout patterns
- **Hero:** Full-width image carousel with dark overlay, centered text, dot navigation
- **Reservation:** Full-width dark bar spanning edge-to-edge
- **Services:** 4-column grid, centered text per card
- **Rooms:** Horizontal carousel (owl-style scroll)
- **Dining:** 2-column split (tabs left, image right)
- **Blog:** 2-column split (featured media left, post list right)
- **Testimonials:** 3-column grid
- **Newsletter:** Full-width image with overlay
- **Footer:** 4-column grid

### Key visual details
- Service icons use circular light-gray containers (`rounded-full bg-gray-100`)
- Room cards show star ratings using filled/empty gold star icons
- Dining tabs have Bootstrap-style tab UI (active tab has bottom border)
- Blog posts show date in small text, title in bold, category as a tag
- Testimonial cards have circular avatar images with box-shadow
- Newsletter subscribe form is inline (input + button in a row)
- Footer bottom has centered copyright with heart icon

### Avoid
- Do NOT use "Luxehotel" or "luxehotel" anywhere in app code
- Do NOT copy any CSS files, images, or fonts from ColorLib
- Do NOT reference ColorLib in comments or code
- All provenance lives only in this spec and TEMPLATES.md
