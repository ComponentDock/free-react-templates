# Drip — Design Notes & Implementation Tasks

**Source:** ColorLib "Coffee Blend" (https://colorlib.com/wp/template/coffee-blend/)
**New name:** Drip
**Preview:** https://preview.colorlib.com/theme/coffee-blend/ (404 — using GitHub source + screenshot)
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section-by-section fidelity notes

### 1. Navbar

- Fixed top, transparent background becoming solid on scroll
- Logo left (text-based "Drip" or similar in Poppins 700)
- Nav links: Home, About, Menu, Specialties, Blog, Contact
- CTA button "Book a Table" right-aligned
- Cart icon
- Mobile: hamburger → slide-in drawer or dropdown

### 2. Hero Slider

- Full viewport height (100vh)
- 3 slides with background images + dark overlay (~50% opacity)
- Centered text: subheading "Welcome", h1 large white, subtitle paragraph
- Two buttons: "Order Now" (solid primary #78d5ef) + "View Menu" (white outline)
- Auto-rotating carousel (use CSS-only or minimal JS interval)
- Source text: "The Best Coffee Testing Experience" / "Amazing Taste & Beautiful Place" / "Creamy Hot and Ready to Serve"

### 3. Intro / Contact Bar

- Dark background strip (bg-dark #343a40 or similar)
- Left side: 3 columns — phone + number, location + address, clock + hours
- Right side: reservation form (First Name, Last Name, Date, Time, Phone, Message, Submit)
- Uses icons (replace flaticon with lucide-react: Phone, MapPin, Clock)

### 4. About (Our Story)

- Split layout: left = background image, right = text content
- Heading: "Discover" (subheading) + "Our Story" (h2)
- Paragraph text below
- Uses flexbox d-md-flex pattern — stacks on mobile

### 5. Services

- White background, 3-column grid
- Each card: icon (centered, large) + heading + paragraph
- Cards: "Easy to Order", "Fastest Delivery", "Quality Coffee"
- Replace flaticon icons with lucide-react (CheckCircle, Truck, Coffee)

### 6. Our Menu

- White background, split layout
- Left: heading "Our Menu" + description + "View Full Menu" outline button
- Right: 2×2 grid of menu items — image + name + price + description
- Menu items: Coffee Capuccino (×4 in source — differentiate with real names)

### 7. Counter / Stats

- Full-width dark parallax section with background image + overlay
- 4 statistics in a row: number + label
- Numbers animate counting up when scrolled into view
- Stats: e.g. 100+ Happy Customers, 500+ Coffee Drinks, 25+ Staff Members, 10+ Awards

### 8. Best Coffee Sellers

- White background, centered heading
- 4 product cards in a row: image + title + price + description
- Cards have hover effect (subtle scale or shadow)

### 9. Gallery

- Full-width row of 4 images
- Each image: background-image with dark overlay on hover
- Hover shows a link/zoom icon centered
- Images link to a gallery page (or lightbox in React)

### 10. Testimonials

- Dark parallax section with background image + overlay
- Centered heading "Customers Says" + subtitle
- Horizontal row of 5 testimonial cards
- Each card: blockquote text + author photo + author name + position
- Cards overlap/stagger at bottom edge
- Can use a simple CSS horizontal scroll or carousel

### 11. Footer

- Dark parallax background image + overlay
- 4-column layout: About + social, Recent Blog (2 posts), Services links, Contact info
- Social icons: Twitter, Facebook, Instagram (use lucide-react)
- Blog previews: thumbnail + title + meta (date, author, comments)
- Contact: address, phone, email
- Copyright bar: "Made with Component Dock" link
- No ColorLib attribution in the React version

## Design tokens to define in index.css @theme

```
--color-primary: #78d5ef;
--color-primary-hover: #34c0e7;
--color-dark: #343a40;
--color-body: #212529;
--color-muted: #6c757d;
--color-light: #f8f9fa;
--font-heading: "Poppins", sans-serif;
--font-body: "Work Sans", sans-serif;
--font-script: "Great Vibes", cursive;
```

## Implementation tasks

1. [ ] Create `apps/drip/` — copy simplest existing app, rename package
2. [ ] Set up `src/index.css` with Tailwind @theme tokens
3. [ ] Set up Google Fonts link in `index.html` (Poppins, Work Sans, Great Vibes, Josefin Sans)
4. [ ] Implement Navbar component
5. [ ] Implement HeroSlider component (3 slides, auto-rotate)
6. [ ] Implement IntroContact component (info bar + reservation form)
7. [ ] Implement About component (split layout)
8. [ ] Implement Services component (3 feature cards)
9. [ ] Implement Menu component (split with menu grid)
10. [ ] Implement Counter component (animated stats)
11. [ ] Implement BestSellers component (product cards)
12. [ ] Implement Gallery component (image grid with hover)
13. [ ] Implement Testimonials component (staggered cards)
14. [ ] Implement Footer component (4-column + copyright)
15. [ ] Write tests for each component (100% coverage)
16. [ ] Verify: typecheck + lint + build + test:coverage
17. [ ] Set up `public/CNAME` with `drip.free.componentdock.com`
18. [ ] Commit and push as feat branch, open PR
