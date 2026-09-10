# WrenchCraft — Design Notes & Implementation Todo

Source: ColorLib Autorepair (https://colorlib.com/wp/template/autorepair/)
Preview: https://preview.colorlib.com/theme/autorepair/

## Section Implementation Order

### 1. Navbar
- Sticky/fixed top navbar
- Logo: "WrenchCraft." (text, not image)
- Links: Home, About, Services, Projects, Blog, Contact
- Primary CTA: "Book an appointment" button (btn-primary blue)
- Mobile: hamburger collapse

### 2. Hero Slider
- Full-width image carousel (2 slides)
- Dark overlay (rgba(0,0,0,0.4))
- Left-aligned text (col-md-6): subtitle (h2, lighter weight) + headline (h1, bold) + primary CTA button
- Use picsum.photos with seed for background images
- Implement with CSS-only carousel or simple state-based auto-advance (no owl.carousel)

### 3. Intro CTA Bar
- Blue background (#064acb) — full-width within container
- Flex layout: wrench icon (lucide-react: Wrench or Settings) + heading text on left
- "Book an Appointment" button on right (orange or blue accent)
- Sits immediately below hero, overlapping slightly in original

### 4. Services
- White section background
- Centered heading: "Our car services" with "We offer Services" subtitle
- 3-column grid, 2 rows = 6 service cards
- Each card: icon (lucide) + title + description paragraph + "Read more" link
- Icons: use lucide equivalents (Droplets, CircleDot, Battery, Wrench, Truck, Settings)
- Mimic the media-object layout (icon left, text right)

### 5. About / Welcome
- Light gray (#f7f7f7) background
- Split layout: left half = video thumbnail area with play button overlay, right half = text content
- Heading: "Welcome to WrenchCraft" + descriptive paragraph
- 3 tabs: Our Mission / Our Vision / Our Value (Bootstrap-like tab behavior)
- Implement with React state for tab switching

### 6. Statistics Counter
- White background
- 4-column grid: Years of Experience (45), Projects Completed (8,500), Happy Customers (2,342), Award Winning (30)
- Animate numbers counting up on scroll into view (useIntersectionObserver + requestAnimationFrame or simple counter hook)

### 7. Appointment Booking
- Full-width section with background image (dark) + semi-transparent overlay
- Form on right half (col-lg-6), white text
- Fields: service select dropdown, name, vehicle number, date, time, message textarea
- "Send message" dark button
- Simple form state with local handler (no backend)

### 8. Testimonials
- Light gray (#f7f7f7) background
- "Testimonies" subtitle + "Happy Clients & Feedbacks" heading
- Horizontal carousel of testimonial cards
- Each card: quote icon (lucide: Quote), testimonial text, user avatar (picsum), name, position
- Auto-scrolling carousel or manual navigation

### 9. Blog
- White background
- "News & Blog" subtitle + "Latest news from our blog" heading
- 3-column grid of blog cards
- Each card: featured image (rounded corners), author avatar + name + date, article title
- Blog images via picsum.photos

### 10. Pricing
- Light gray (#f7f7f7) background
- "Price & Plans" subtitle + "Pricing" heading
- 4-column pricing cards
- Each card: service name, price (with $ superscript), description text, "Get Started" button (btn-secondary)

### 11. Projects Gallery
- White background
- "Projects" subtitle + "Done Projects" heading
- Full-width 4-column image grid (no gaps between images)
- Each image: overlay with category label + title, expand icon on hover
- Images via picsum.photos with seed for determinism

### 12. Footer
- Dark background (#1d2124)
- 4-column layout:
  1. Logo "WrenchCraft." + description + social icons (Twitter, Facebook, Instagram via lucide)
  2. Services list with check icons
  3. Contact information (address, phone, email)
  4. Business Hours (opening days + vacations)
- Bottom copyright bar with Component Dock link

## Fidelity Notes

- Font: Poppins (Google Fonts) — weights 300, 400, 500, 600, 700
- Brand colors: blue #064acb (primary accent), #007bff (Bootstrap primary), #f79f24 (orange accent)
- Dark sections: #1d2124 (footer, appointment bg)
- Light alternating backgrounds: white / #f7f7f7
- Buttons: rounded corners (0.25rem), primary blue, dark variant for forms
- No parallax — simpler hero slider approach
- Owl carousel replaced with React-based carousel or CSS scroll-snap
- Magnific popup replaced with simple lightbox or omitted
- Flaticon icons replaced with lucide-react equivalents
- Bootstrap grid replaced with Tailwind grid/flex utilities

## Component Map

- `src/App.tsx` — Main composition of all sections
- `src/components/Navbar.tsx` — Sticky navbar with mobile hamburger
- `src/components/HeroSlider.tsx` — Image carousel with auto-advance
- `src/components/IntroBar.tsx` — Blue CTA bar below hero
- `src/components/Services.tsx` — 3x2 service card grid
- `src/components/About.tsx` — Split layout with tabs
- `src/components/CounterStats.tsx` — Animated statistics counter
- `src/components/AppointmentForm.tsx` — Booking form with dark bg
- `src/components/Testimonials.tsx` — Carousel testimonial cards
- `src/components/BlogGrid.tsx` — 3-column blog cards
- `src/components/Pricing.tsx` — 4-column pricing cards
- `src/components/ProjectsGallery.tsx` — Image grid with overlays
- `src/components/Footer.tsx` — 4-column footer with Component Dock link
