# Charhouse (ColorLib Steak) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-charhouse`. Recreation name: **Charhouse** (NEW name —
> the ColorLib source keeps its name "Steak").

## Source mapping

- **ColorLib item:** "Steak" (TEMPLATES.md line 2701)
- **Source URL:** https://colorlib.com/wp/template/steak/
- **Preview URL:** https://preview.colorlib.com/theme/steak/ (REACHABLE, verified 2026-09-28)
- **Preview CSS:** `css/style.css` (143KB, Bootstrap 4 + custom TemplateUX)
- **Fonts:** "Playfair Display" (Google Fonts headings), system sans-serif (body)
- **Icons:** Flaticon food icons → REPLACE with lucide-react
- **Reference screenshots:** `steak-free-template.jpg` (TEMPLATES.md)

## Section-by-section fidelity notes

### 1. Navbar
- Sticky/fixed top, transparent on hero → solid on scroll
- Logo "Charhouse" left (Playfair Display)
- Center nav: Home, About, Menu, Gallery, Contact
- Right: "Reserve Now" CTA (amber #fba83b bg, white text, 4px radius)
- Mobile: hamburger spin animation toggle, full-width mobile menu overlay

### 2. Hero
- Full viewport height, parallax background image
- Dark overlay (#313137) at ~60% opacity
- Centered white text: "Welcome To Charhouse Food & Restaurant" (Playfair Display, large display heading)
- "Play Video" button: white outline, 3px padding horizontal
- Mouse scroll indicator at bottom (animated bounce)

### 3. About
- Split layout: left half = food image with parallax scroll effect, right half = text
- Display heading "Welcome To Charhouse Food & Restaurant" (Playfair Display)
- Two paragraphs of body copy
- "Read More" button: black outline (#000 border, transparent bg → black fill on hover)
- Image overlaps from left into the layout

### 4. Services
- Light background (#f8f9fa)
- Centered heading "Our Services" + lead paragraph
- 3×2 grid of food category cards:
  - Icon (lucide: Utensils, Beef, Drumstick, Salad, Chicken, Beef)
  - Title (h5 weight)
  - Description paragraph
- Cards centered with icon on top, text below
- AOS fade-in animation on scroll

### 5. Menu
- White background
- Centered heading "Our Menu" + lead text
- Pill-style tab navigation (nav-pills): Breakfast, Lunch, Dinner
  - Active tab: brand-primary bg (#fba83b)
  - Inactive: light bg, dark text
- Each tab: 2-column grid of menu items
  - Each item: thumbnail image (left) + name + description + price
  - Price in brand-primary color (#fba83b), larger font
- Items have a subtle bottom border separator

### 6. Testimonials
- White background
- Carousel/slider (can be auto-rotating or manual nav dots)
- Each slide: circular avatar (50% radius, ~80px), quote text, customer name, position
- Centered layout
- Quote may have quotation mark styling

### 7. Reservation
- Two-column layout
- Left: Opening hours block
  - Dark bg (#313137 or similar), white text
  - Monday-Friday hours, Saturday (CLOSED), Sunday hours
  - Phone number link
- Right: Reservation form
  - Fields: party size (dropdown), date (datepicker), time (timepicker), name, phone, email
  - Bottom-border-only inputs (no box border)
  - "Reserve Now" submit button: black bg, white text, full-width on mobile

### 8. Footer
- Dark background (#212529 or similar)
- 4-column layout:
  - Col 1: "About Charhouse Restaurant" + description + "About Us" button
  - Col 2: Quick Links (Home, Menu, Gallery, Reservation)
  - Col 3: Support (FAQ, Contact Us, Call Us)
  - Col 4: Connect With Us (social icons: Facebook, Twitter, Instagram, YouTube)
- Bottom copyright row with "Component Dock" link (replacing ColorLib attribution)
- Centered text

## Design tokens (extracted from CSS)

- `brand-primary`: #fba83b — buttons, links, prices, active tabs
- `brand-hover`: #fa9209 / #fa9716 — button hover states
- `hero-overlay`: #313137 — hero dark overlay
- `black`: #000 — buttons, borders
- `white`: #fff — hero text, button text
- `body-text`: #212529
- `muted-text`: #6c757d
- `light-bg`: #f8f9fa — services section
- `heading-font`: "Playfair Display", serif — display headings
- `button-radius`: 0.25rem (4px)
- `circle-radius`: 50% — avatars

## Implementation notes

- Use picsum.photos for placeholder images (hero, about, menu items, avatars)
- Use lucide-react for icons (replace Flaticon food icons)
- Google Fonts link for Playfair Display
- Parallax effect via CSS transform or scroll-based JS (consider using intersection observer)
- Tab component: controlled state, no external dependency needed
- Testimonial carousel: simple state-managed slider
- Reservation form: controlled inputs, no backend needed
- Mobile responsive: hamburger nav, stacked layouts, full-width form fields
