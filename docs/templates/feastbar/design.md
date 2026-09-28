# Feastbar — Design Notes & Tasks

Source: ColorLib Foodbar — https://preview.colorlib.com/theme/foodbar/
New name: `feastbar`

## Section Order & Fidelity Notes

### 1. Header/Navbar
- Transparent background, absolute positioned over hero
- Logo left, nav links right: Home, About, Menu, Book a table, Pages (dropdown: Gallery, Elements), Blog (dropdown: Blog, Blog Details), Contact
- Mobile: hamburger toggle → off-canvas side menu from left
- Off-canvas menu: logo + nav list + social icons (FB, Twitter, Dribbble, Behance)
- Fidelity: match transparent header behavior, mobile slide-in menu

### 2. Hero/Banner
- Full viewport height, split 50/50 layout
- Left: `#f9f9ff` background, heading "delicious cupcakes" (Oswald 60px), paragraph text, CTA button "check our menu"
- Right: decorative rotating concentric circles with shape overlays (CSS animations)
- Hero cupcake image overlaid on right side
- Fidelity: match split layout, decorative circles are optional but nice; cupcake image → placeholder from picsum

### 3. Top Rated Dishes
- Section title "Our Top Rated Dishes" with decorative planet circles
- 3-column grid, each card: image thumbnail, dish name, description, price in red
- Fidelity: match 3-col grid, card structure with price styling

### 4. Menu Area
- Section title "Our favourite Menu"
- Two-column layout, each column a vertical list
- Each item: `<h4>` name + `<span>` price right-aligned, `<p>` description
- Fidelity: match two-column list layout, price alignment

### 5. Gallery Area
- Section title "foodbar galleries"
- 7 images in asymmetric grid: rows 7/5, 4/4/4, 5/7
- Hover overlay with icon (picture icon)
- Fidelity: match grid proportions; lightbox → simple modal or skip

### 6. Testimonials
- Dark background (#04091e), section padding 120px
- Carousel: each slide = 4-col image left + 8-col text right
- Name `<h4>`, role `<h5>`, quote `<p>`
- Fidelity: match dark bg, carousel layout, text-image split

### 7. Reservation/Book Table
- Section title "Make Reservation"
- Form: name, email, phone, date/time, event select dropdown, submit button
- Submit button: full-width, red (#f42f2c) bg, white text
- Fidelity: match form fields and button styling

### 8. Footer
- 5 columns: Top Products, Quick Links, Features, Resources (each 2-col), Newsletter (4-col)
- Newsletter: email input + arrow submit button
- Bottom: copyright text + social icons (FB, Twitter, Dribbble, Behance)
- Fidelity: replace Colorlib attribution with Component Dock link

## Implementation Tasks

- [ ] Create `apps/feastbar` workspace (copy base, rename package)
- [ ] Set up `index.html` with Google Fonts (Oswald + Roboto)
- [ ] Create `src/index.css` with Tailwind theme tokens (#f42f2c, #f9f9ff, #04091e)
- [ ] Build `Navbar.tsx` — transparent header, mobile menu toggle
- [ ] Build `Hero.tsx` — split layout, decorative shapes, CTA button
- [ ] Build `TopDishes.tsx` — 3-column dish card grid
- [ ] Build `MenuSection.tsx` — two-column menu list
- [ ] Build `Gallery.tsx` — asymmetric image grid with hover overlay
- [ ] Build `Testimonials.tsx` — dark bg carousel with image+text slides
- [ ] Build `ReservationForm.tsx` — form with all fields
- [ ] Build `Footer.tsx` — 5 columns + newsletter + social + Component Dock
- [ ] Compose `App.tsx` with all sections in order
- [ ] Write tests for each component (Vitest + RTL)
- [ ] Verify 100% coverage, typecheck, lint, build
