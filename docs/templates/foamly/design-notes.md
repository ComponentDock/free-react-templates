# Foamly — Design Notes & Implementation Tasks

## Template Identity
- **New Name:** Foamly
- **ColorLib Source:** Carwash (slug: `carwash`)
- **Preview URL:** https://preview.colorlib.com/theme/carwash/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carwash-free-template.jpg
- **Category:** Car Wash / Detailing Service Landing

## Design Tokens (from preview CSS)

- **Primary blue:** #007AFF (borders, accents)
- **Primary dark:** #1f2b7b (buttons, footer bg)
- **CTA gradient:** linear-gradient(0deg, #0d43b6, #0f66f8)
- **Success teal:** #4cd3e3 (alternate button)
- **Section bg light:** #EEF6FF
- **Section bg pale:** #fbf9ff
- **Text dark:** #25262a
- **Font primary:** Poppins (headlines, UI)
- **Font secondary:** Work Sans (body)
- **Button radius:** 30px (pill shape)
- **Button padding:** 13px 33px (header), 10px 64px (borders)

## Section Order & Fidelity Notes

### 1. Navbar
- Sticky white header with subtle box-shadow
- Left: Logo (car wash icon + "Car Wash" text)
- Center: Nav links (Home, About, Services, Blog, Contact)
- Right: Blue gradient phone CTA button ("10 (87) 256-2903")
- Becomes sticky on scroll (add class `header-bottom header-sticky`)
- Use lucide-react icon for car wash (e.g. Droplets or Car)

### 2. Hero Slider
- Full-viewport height (100vh), background image with dark overlay
- Center-aligned white text: "Car Wash & Detailing" (bold, large)
- Subtitle paragraph below
- "Our Services" CTA button (gradient blue, pill, uppercase)
- Placeholder image: `https://picsum.photos/seed/foamly-hero/1920/1080`

### 3. About / Office Environments
- Light blue section background (#EEF6FF or similar)
- Two-column layout: image left, white card right
- Heading: "We offer best services to our customer"
- Body text + "About Us" CTA button
- Small decorative geometric accent (triangle shape)
- Placeholder image: `https://picsum.photos/seed/foamly-about/800/600`

### 4. Pricing Cards
- Three equal-width cards in a row
- Each card: colored header bar, price display, feature list with check icons, CTA button
- Card 1: "Car Wash" — $50.00
- Card 2: "Detailing" — $100.00
- Card 3: "Wash & Detailing" — $200.00
- Feature lists: "2 TB of space", "unlimited bandwidth", "full backup systems", "free domain", "unlimited database" (placeholder text from original)
- Buttons: "Get Started" — gradient blue pill

### 5. Testimonials
- Dot-style carousel/slider
- Each slide: circular founder photo (50x50px, border-radius 50%), name, role, quote text
- White background section
- Use `https://picsum.photos/seed/foamly-avatar-{n}/100/100` for avatars

### 6. Why Us / Features
- 4 feature items in a grid
- Each: icon (use lucide-react), title, description paragraph
- Features: "Car wash 100% without detergents", "Efficient surface drying machines", "We have an application", "Safe lacquer protection"
- Light section background

### 7. Video CTA
- Full-width background image with dark overlay
- Centered play button icon (circular, white, with rotation animation on hover)
- Heading: "Your car will look as your new one"
- Subtitle text
- Placeholder image: `https://picsum.photos/seed/foamly-video/1920/800`

### 8. Contact / Maps
- Contact info layout: phone, email, opening hours
- Phone: "(80) 783 367-3904"
- Email: "contact@carwash.com" → use a generic email
- Hours: Mon-Fri (9.00-19.00), Sat (12.00-19.00), Sun (Closed)
- Navigation links

### 9. Footer
- Dark navy background (#1f2b7b)
- Logo, about text, social links (Facebook, Pinterest, Twitter via lucide-react)
- Contact info, opening hours, navigation links
- Component Dock attribution link
- Copyright notice

## Implementation Tasks

- [ ] Scaffold app from simplest existing template (copy + rename)
- [ ] Set up vite.config.ts with injectUiSource()
- [ ] Set up index.css with Tailwind v4 theme tokens (blue gradient, Poppins/Work Sans fonts)
- [ ] Add Google Fonts link in index.html (Poppins + Work Sans)
- [ ] Implement Navbar component (sticky, logo, nav, phone CTA)
- [ ] Implement Hero component (full-viewport, overlay, headline, CTA)
- [ ] Implement About component (two-column, image + card)
- [ ] Implement PricingCards component (3 tier cards)
- [ ] Implement Testimonials component (carousel with dots)
- [ ] Implement WhyUs component (4 feature grid)
- [ ] Implement VideoCTA component (background image, play button)
- [ ] Implement Contact component (info layout)
- [ ] Implement Footer component (dark bg, links, Component Dock)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests for each component (100% coverage)
- [ ] Run typecheck, lint, test:coverage, build
- [ ] Verify no ColorLib references in app code
- [ ] Add CNAME and homepage for Surge deploy
