# Cookwell — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Luto" — https://colorlib.com/wp/template/luto/
- **Preview:** https://preview.colorlib.com/theme/luto/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/luto-free-template.jpg
- **Preview fetched:** Yes (1,079 lines HTML, 200+ lines main CSS analyzed)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, section backgrounds

## Section Order (top → bottom)

1. **Navbar** — sticky, logo with cutlery icon + "Cookwell" brand, hamburger → dark overlay menu
2. **Hero Slider** — 4-slide FlexSlider with parallax bg + dark overlay + "Book a table" CTA + mouse scroll indicator
3. **Info Bar** — 4-column: Address, Opening Time, Phone, Email — dark purple (#302939) background
4. **About** — 2-column: left text ("Welcome to Cookwell" + heading + description), right 2 food images
5. **Specialties 1** — 3-column dish card grid with background images + names
6. **Video Introduction** — parallax bg + dark overlay + "Foods you love to taste" heading + "Watch Video" outline button
7. **Specialties 2** — same 3-column dish card grid (repeated)
8. **Testimonials** — parallax bg + dark overlay + "Our Customer Says" + carousel with 3 blockquote testimonials
9. **Menu** — tabbed (Main/Desserts/Drinks), 2-column grid per tab, dish image + price + name + ingredients
10. **Reservation** — form: Name, Phone, Date (calendar icon), Time (dropdown 6:30am–10:30pm), Person (1–5+), "Book a table" button
11. **Footer** — 4-column: Brand+social, Latest Blog (3 entries), Instagram (4 images), Newsletter (email+subscribe) + copyright

## Fidelity Notes

### Navbar
- Transparent over hero, transitions to dark on scroll
- Logo: cutlery icon (use `lucide-react` Utensils or similar) + "Cook" in dark + "well" in lighter color (split)
- Hamburger → full-screen dark overlay (rgba(0,0,0,0.8)) with centered nav list
- Mobile overlay includes search input

### Hero Slider
- Replace FlexSlider with a React carousel (embla-carousel or custom)
- 4 slides with different background images + dark overlay (#303030)
- Each slide: cutlery icon → headline → description → "Book a table" CTA
- CTA: transparent bg, white 2px border, pill shape (30px radius), white text
- Mouse scroll indicator (animated wheel) at bottom

### Info Bar
- Dark purple (#302939) background
- 4 columns with white icons (use `lucide-react`: MapPin, Clock, Phone, Mail)
- Each column: icon → h2 heading → description text
- White text on dark bg

### About Section
- Left: subtitle "Welcome to Cookwell", heading about Italian food/delicious, description
- Right: 2 food images in offset/stacked layout
- White/light (#FBFBFB) background

### Specialties Grid
- Centered heading with cutlery icon: "Our Delicious Specialties"
- 3-column grid, each card: bg-image dish photo (400px height), heading below
- Hover: slight zoom or overlay effect on images
- Two instances of this section (sections 5 and 7)

### Video Introduction
- Full-width parallax bg image + dark overlay (#303030)
- "Foods you love to taste" heading + description
- "Watch Video" button: outlined (white border, transparent bg, play icon, square corners)
- This section should NOT actually play video (link to external or skip)

### Testimonials
- Parallax bg + dark overlay
- "Our Customer Says" heading
- Carousel with 3 items, each: centered blockquote + author name with em-dash
- Use simple CSS carousel or embla-carousel

### Menu (Tabbed)
- Centered heading with cutlery icon: "Menu"
- Tab bar: Main | Desserts | Drinks (Bootstrap-style tabs → React state)
- 2-column grid per tab, 6 items per column = 12 items per tab
- Each item: thumbnail image (small, left) + price badge (top-right, orange) + dish name + ingredient text
- Tab switching: content swap via state

### Reservation Form
- Form with 2-column layout (2 fields per row, submit full width)
- Name (text input), Phone (text input), Date (with calendar icon, date picker), Time (select dropdown), Person (select dropdown)
- Time: 6:30am to 10:30pm in 30-min increments (use native select or custom)
- Person: 1, 2, 3, 4, 5+ (use native select)
- Submit: "Book a table" button, primary orange, pill shape, centered

### Footer
- Dark gray (#303030) background
- 4-column layout:
  - Brand name + description + social icons (Facebook, Twitter, Google+, Dribbble → use `lucide-react`)
  - Latest Blog: 3 entries (thumbnail + date + title) — use placeholder data
  - Instagram: 4 images in 2x2 grid (use placeholder images)
  - Newsletter: email input + "Subscribe" button (orange border, square corners)
- Copyright bar: "© [year] All rights reserved" + "Made with Component Dock" link
- No ColorLib attribution (replace with ComponentDock)

## Component Plan

- `src/App.tsx` — compose all sections
- `src/components/Navbar.tsx` — sticky nav with hamburger overlay
- `src/components/HeroSlider.tsx` — 4-slide carousel with parallax
- `src/components/InfoBar.tsx` — 4-column contact info
- `src/components/About.tsx` — text + images
- `src/components/SpecialtiesGrid.tsx` — reusable 3-column dish grid
- `src/components/VideoIntro.tsx` — parallax bg + CTA
- `src/components/Testimonials.tsx` — carousel with blockquotes
- `src/components/MenuTabs.tsx` — tabbed menu with dish listings
- `src/components/ReservationForm.tsx` — form with validation
- `src/components/Footer.tsx` — 4-column footer + copyright

## Design Token Usage in Tailwind

In `src/index.css` `@theme` block:
- `--color-brand: #FF6107` (orange primary)
- `--color-dark-purple: #302939` (info bar)
- `--color-dark-gray: #303030` (footer, overlays)
- `--color-body: #FBFBFB` (page bg)
- `--color-muted-bg: #f7f7f7` (alt sections)
- `--color-heading: #404044` (headings)
- `--color-body-text: #7d7d7d` (paragraphs)
