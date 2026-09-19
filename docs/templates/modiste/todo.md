# Modiste — Implementation Todo

Source: ColorLib Fashiop (https://colorlib.com/wp/template/fashiop/)
Preview: https://preview.colorlib.com/theme/fashiop/

## Section-by-section build order

### 1. Project scaffold
- [ ] Copy simplest existing app (e.g. abjure) as template
- [ ] Rename package to `@free-react-templates/modiste`
- [ ] Set `public/CNAME` → `modiste.free.componentdock.com`
- [ ] Set `homepage` → `https://modiste.free.componentdock.com`
- [ ] Add Roboto font link in `index.html`
- [ ] Configure `@theme` with brand tokens: `--color-brand: #1641ff`, `--color-text-dark: #222222`, `--color-text-muted: #777777`, `--color-lavender: #f9f9ff`

### 2. TopBar component
- [ ] Thin gray bar, phone number left, 3 utility links right
- [ ] Light gray bg, small muted text
- [ ] Responsive: collapse on mobile

### 3. Navbar component
- [ ] Logo left, centered nav links, right-side icon row
- [ ] Icons separated by vertical `hr` dividers
- [ ] Use lucide-react for search, user, heart, shopping-cart icons
- [ ] Mobile: hamburger toggle

### 4. Hero component
- [ ] Full-width section with parallax background image
- [ ] Dark overlay (`bg-black/33`)
- [ ] Centered heading + description + CTA button
- [ ] Button: `bg-[#f9f9ff] text-[#222222] rounded-[5px]`
- [ ] Use `https://picsum.photos/seed/modiste-hero/1920/800` for background

### 5. HotDeals component
- [ ] Two-column grid (col-6 each)
- [ ] Black bg, image at opacity 0.5, white text overlay
- [ ] Hover: bg transitions to brand blue, image opacity 0.2
- [ ] Use `https://picsum.photos/seed/modiste-deal1/600/400` and `modiste-deal2`

### 6. ClientLogos component
- [ ] Horizontal scrolling row of logo placeholders
- [ ] Simple CSS scroll-snap or flex row (no carousel library needed)
- [ ] 5 placeholder logos via picsum

### 7. FeaturedProducts component
- [ ] Section title + subtitle
- [ ] 5-column product card grid (image, name, price)
- [ ] Hover overlay with heart + cart icons
- [ ] Pagination row below grid
- [ ] Product images: `https://picsum.photos/seed/modiste-prodN/400/500`

### 8. Newsletter component
- [ ] `#f9f9ff` background section
- [ ] Centered title + subtitle
- [ ] Pill-shaped email input (border-radius: 25px)
- [ ] "Get Started" button: brand blue bg, white text
- [ ] Button positioned inside/adjacent to input

### 9. Footer component
- [ ] 4-column grid: About Us, Newsletter, Instagram Feed, Follow Us
- [ ] Instagram feed: 8 small thumbnail images in flex-wrap
- [ ] Social icons: facebook, twitter, dribbble, behance (lucide-react or similar)
- [ ] Bottom bar: copyright + heart icon + Component Dock link
- [ ] Replace any ColorLib attribution with "Component Dock"

## Design fidelity notes

- **Color palette:** Primary #1641ff, dark text #222222, muted #777777, lavender #f9f9ff, black #000000
- **Typography:** Roboto, weights 300/400/500/700, base 14px, line-height 24px
- **Buttons:** Main CTA uses `rounded-[5px]` with light bg; newsletter button uses pill shape (full rounded)
- **Hot deals:** Key visual feature — black card with image at half-opacity, text overlay centered, hover transitions to blue
- **Product grid:** 5 columns on desktop, hover reveals icon overlay on image
- **Section spacing:** `section_gap` class = consistent vertical padding (~80-100px)
- **Parallax:** Hero background should use `bg-fixed` or similar technique for parallax effect
