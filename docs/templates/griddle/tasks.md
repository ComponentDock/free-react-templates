# Griddle — Implementation Tasks & Design Notes

Source: ColorLib Eatery (https://preview.colorlib.com/theme/eatery/)

## Task Breakdown

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. apps/griddle from apps/bistro or similar)
- [ ] Rename package to `@free-react-templates/griddle`
- [ ] Update `public/CNAME` to `griddle.free.componentdock.com`
- [ ] Update `homepage` in `package.json`
- [ ] Run `npm install` at repo root to register workspace

### Phase 2: Components (TDD)
- [ ] `Navbar.tsx` — dark transparent header, brand "Griddle", nav links, Services dropdown, Contact Us CTA
- [ ] `HeroSlider.tsx` — carousel with 2 slides, background images, centered text, outline-white buttons
- [ ] `FeaturesGrid.tsx` — 4-column grid: icon + title (primary) + description
- [ ] `DishesCarousel.tsx` — horizontal carousel of dish cards with image overlay, circular price badge, dish name
- [ ] `OurMenu.tsx` — 2-column grid of menu items (image + text per item)
- [ ] `Testimonials.tsx` — 3-column blockquote cards with circular author photos
- [ ] `Blog.tsx` — 2-column blog cards with side-by-side image + text
- [ ] `Newsletter.tsx` — centered form with heading, email input, subscribe button
- [ ] `Footer.tsx` — 3 columns (About+social, Hours+Contact, Quick Links), copyright with Component Dock
- [ ] `App.tsx` — compose all sections in order
- [ ] `index.css` — Tailwind entry + custom theme tokens

### Phase 3: Polish
- [ ] Responsive behavior: navbar hamburger on mobile, sections stack vertically
- [ ] Placeholder images: `picsum.photos/seed/griddle-<n>/<w>/<h>`
- [ ] Lucide-react icons for social + feature icons
- [ ] Accessibility: semantic elements, aria-labels, focus-visible rings

## Design Notes

### Structure Order (must match original)
1. Navbar (absolute, overlays hero)
2. Hero Slider (owl-carousel → use embla or swiper or custom)
3. Features Grid (4-col, bg-light)
4. Special Dishes Carousel (heading + carousel)
5. Our Menu (bg-light, 2-col image+text)
6. Testimonials (3-col blockquotes)
7. Blog (heading + 2-col cards)
8. Newsletter (bg-light, centered form)
9. Footer (dark, 3-col + copyright)

### Key Fidelity Details

**Navbar:**
- Desktop: transparent background, absolute positioned, white text
- Mobile: solid black background, hamburger toggle
- Brand: uppercase, letter-spacing 0.2em
- CTA "Contact Us": solid #cf1d16 bg, white text, bold, uppercase, padding 15px 20px
- CTA hover: white bg, #cf1d16 text
- Dropdown: white bg, shadow, items highlight #cf1d16 on hover

**Hero Slider:**
- Two slides with full-width background images
- Centered content: large heading (h1), paragraph, outline-white button
- Auto-advancing carousel with dot indicators
- Suggested implementation: embla-carousel-react

**Features Grid:**
- 4 equal columns on desktop, 2x2 on tablet, stacked on mobile
- Each: icon (48px, black), title (primary #cf1d16, h4), short paragraph
- Section bg: #f7f7f7

**Dishes Carousel:**
- Section heading: "Special Dishes" with decorative back-text "Dishes" (200px font, #f7f7f7)
- Red underline (80px × 2px, #cf1d16) above heading
- Carousel: horizontal scroll of dish cards
- Each card: food image, dark overlay (opacity 0.3), text overlay with:
  - Circular price badge: 100×100px, border-radius 50%, #cf1d16 bg, white text, font-weight 700
  - On hover: badge → transparent with white border
  - Dish name: white, uppercase, 30px, font-weight 700
  - Image hover: scale(1.1)

**Our Menu:**
- Section bg: #f7f7f7
- Heading "Menu" with back-text "Menu" (#e3e3e3)
- 2-column grid; each item:
  - Left: text (title h3, description, price in #cf1d16 h3)
  - Right: background image
  - Side-by-side on desktop, stacked on mobile

**Testimonials:**
- 3 blockquotes in a row
- Each: quote text (20px, #000), author photo (circular 80×80), author name (h4), role (#cccccc, 14px)

**Blog:**
- Heading "Blog" with back-text "Our Blog"
- 2 blog cards; each: side-by-side image + text
- Text: title (h3, 20px), date (13px, #999), excerpt, "Read More" primary btn (sm)

**Newsletter:**
- Centered, bg-light (#f7f7f7), py-5
- Heading "Subscribe to Newsletter"
- Row: email input (col-8) + Subscribe button (col-4, primary, btn-block)

**Footer:**
- Dark background
- Col 1: "About Us" + description + social icons (lucide: Twitter, Facebook, Linkedin, Instagram)
- Col 2: "Opening Hours" (Sunday-Thursday 5AM-10PM) + "Contact Info" (address, phone, email)
- Col 3: "Quick Links" (About, Terms, Disclaimers, Contact)
- Copyright line: "Made with ♥ by Component Dock" (replacing Colorlib credit)
