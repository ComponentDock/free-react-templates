# Grange — Implementation Tasks & Design Notes

**Source:** ColorLib Farmland (https://colorlib.com/wp/template/farmland/)
**Preview:** https://preview.colorlib.com/theme/farmland/
**New name:** grange
**Category:** Agriculture / Farming / Organic

## Design Notes

### Overall Aesthetic
- Warm, earthy farming theme with forest green (#5d8c55) as the dominant brand color
- Golden yellow (#ecdc67) accent for highlights
- Heavy use of full-width background images with dark overlays
- Handwritten/cursive display font ("Covered By Your Grace") for headings gives an artisanal, organic feel
- Clean Roboto body font for readability
- Image-heavy design — every major section features a background or inline image

### Section Structure (in order)

1. **Navbar**
   - Sticky/fixed top, white background
   - Logo: "Grange" in Covered By Your Grace cursive
   - Nav links: Home, About, Services, Projects, Blog, Contact
   - Social icons row (Twitter, Facebook, Instagram)
   - Mobile: hamburger menu with off-canvas sidebar

2. **Hero**
   - Full-height (100vh) slider, 2 slides with Owl Carousel
   - Each slide: farm background image + semi-transparent dark overlay
   - Heading: "Agriculture is the Most Healthful" (Covered By Your Grace, white, ~60px)
   - Subheading + paragraph text (white, rgba 0.8 opacity)
   - Two CTA buttons: "Our Services" (primary green), "Our Projects" (secondary/outline)
   - Carousel dots at bottom

3. **Services**
   - 4 equal-width cards in a row (grid on mobile)
   - Each card: Flaticon-style icon (use lucide-react), title with line break, description
   - Titles: "Fresh Vegetables", "Agricultural Products", "Organic Products", "Dairy Products"
   - White background, no top padding (flows from hero)

4. **About**
   - Two-column layout: left = stacked images, right = text
   - Heading: "We're Leader In Agricultural Market"
   - Body paragraph with lorem ipsum
   - Two feature items with icons: "Growing Fruits and Vegetables", "Tips for Ripening Fruits"
   - "Learn More" button (secondary style)

5. **Counter/Stats**
   - Full-width bg image with dark overlay
   - Animated counters (count up on scroll into viewport)
   - Stats: projects completed, team members, satisfied clients, awards
   - White text on dark overlay

6. **Projects/Portfolio**
   - Heading: "Explore Projects"
   - 4 cards in a 2x2 or 4-column grid
   - Each card: background image, title overlay at bottom (white text)
   - Titles: "Organic Solution", "Harvest Innovation", "Farm System", "Agricultural Farming"
   - Hover: slight scale or overlay opacity change

7. **Video/CTA**
   - Full-width background image with overlay
   - Centered play button icon (Font Awesome fa-play-circle or lucide Play)
   - Heading: "Watch Modern Agricultural Farming" (Covered By Your Grace)
   - Click opens a video modal or navigates

8. **Testimonials**
   - Heading: "What Our Customers Say"
   - Owl Carousel with 3+ testimonial slides
   - Each slide: circular user avatar, quote paragraph, customer name
   - White/light background

9. **FAQ + Contact**
   - Two-column layout
   - Left: "Request An Estimate" — contact form with fields: Name, Email, Subject, Message, Submit button
   - Right: "Frequently Asked Questions" — accordion with expandable items
   - White background

10. **Blog/Recent Posts**
    - "Recent Post" heading on light gray (#f8f9fa) background
    - 3 blog cards in a row
    - Each card: featured image, category tag, date, title link, excerpt
    - Blog cards have a slight shadow/border

11. **Footer**
    - Dark background (near-black)
    - 4 columns: Brand (logo + description), Quick Links, Services, Newsletter
    - Newsletter: email input + subscribe button
    - Social icons row
    - Copyright bar with "Made with Component Dock" link
    - Separator line above copyright

### Key Fidelity Notes
- The original uses Owl Carousel for hero slider and testimonials — use a React carousel solution (e.g. embla-carousel or swiper)
- The original uses Font Awesome 4.7 for icons — replace with lucide-react
- The original uses Flaticon CSS sprites — replace with lucide-react icons
- The original uses Magnific Popup for video modal — use a React lightbox/modal
- Background images: use picsum.photos with farm-themed seeds (e.g. `seed/grange-hero-1/1920/1080`)
- Counter animation: use Intersection Observer + animated count-up
- FAQ accordion: implement with React state (no external dependency needed)
- The handwritten "Covered By Your Grace" font is loaded from Google Fonts — include in index.html

### Color Palette Summary
```
Primary:      #5d8c55 (forest green)
Secondary:    #ecdc67 (golden yellow)
Dark green:   #3d5c38
Mid green:    #486c42
Text dark:    #212529
Text muted:   #6c757d
White:        #ffffff
Light gray:   #f8f9fa
```

## Implementation Tasks

- [ ] Copy starter app template to `apps/grange/`
- [ ] Rename package to `@free-react-templates/grange`
- [ ] Set up index.html with Google Fonts (Roboto + Covered By Your Grace)
- [ ] Create `src/index.css` with Tailwind @theme tokens for brand colors
- [ ] Implement Navbar component (responsive, hamburger on mobile)
- [ ] Implement Hero section with carousel/slider
- [ ] Implement Services section (4 cards grid)
- [ ] Implement About section (split layout with images)
- [ ] Implement Counter/Stats section (animated counters)
- [ ] Implement Projects/Portfolio section (4-card grid)
- [ ] Implement Video/CTA section
- [ ] Implement Testimonials section (carousel)
- [ ] Implement FAQ + Contact section (form + accordion)
- [ ] Implement Blog/Recent Posts section (3 cards)
- [ ] Implement Footer (4-column, newsletter, social, copyright)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Run `scripts/verify-app.sh grange` to pass local gate
- [ ] Create `public/CNAME` with `grange.free.componentdock.com`
- [ ] Run `npm install` at root to register workspace
