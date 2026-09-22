# Timbercraft — Implementation Notes

ColorLib source: Woodwork (woodwork)
Preview: https://preview.colorlib.com/theme/woodwork/
Spec: openspec/specs/template-timbercraft/spec.md

## Section Order & Fidelity Notes

### 1. Navbar.tsx
- Logo image (use text "Timbercraft" with wood/craft styling)
- Nav links: Home, About, Services, Blog, Contact
- Hamburger for mobile (Menu icon from lucide-react)
- Sticky on scroll

### 2. HeroSlider.tsx
- 2-slide carousel with background images
- Centered text: heading "New construction remodeling, additions"
- "Contact us" button (pill-shaped, #bfb332, border-radius 60px)
- Auto-sliding
- Use picsum.photos/seed/timbercraft-hero/1920x800

### 3. About.tsx
- 2-column layout:
  - Left: 3 images (1 large + 2 small stacked in flex)
  - Right: "About woodworking" label (span), "30 years of woodworking experience" heading (h2), paragraph
- Counter stats below: 3 items in a row
  - 1800+ Projects
  - 1200+ Clients
  - 150+ Awards
- Use picsum.photos/seed/timbercraft-about-N/400x300

### 4. Services.tsx
- Full-width carousel of 4 service cards
- Each: background image with text overlay (title on shape background)
- Services: Design Solutions, Exterior Design, Moldings & Trim, Office Furniture
- Use picsum.photos/seed/timbercraft-service-N/400x400

### 5. Testimonials.tsx
- Slider with testimonial items
- Each: large quote icon ("), paragraph, author name + location, 5-star rating
- Auto-rotating with dot navigation
- Use lucide-react Quote icon

### 6. Portfolio.tsx
- 3-column grid of project images
- Each: background image with text overlay (shape background)
  - Project title
  - Location pin icon + address
- Use picsum.photos/seed/timbercraft-portfolio-N/600x400

### 7. ChooseUs.tsx
- "Why choose us?" heading + "High quality is the standard" subheading
- 3 feature items in a row
- Each: icon on shape background, title, paragraph
- Features: Highly Professional Staff, Using Latest Mechanical System, Certified Material in a Timely
- "Contact us" border button (transparent bg, dark text)

### 8. Footer.tsx
- 2-column:
  - Left: logo + description + contact info (address, phone, email)
  - Right: embedded Google Map (use placeholder or static map)
- Copyright line + social links (Facebook, Twitter, Instagram, YouTube)
- "Made with ❤️ by Component Dock" link to https://www.componentdock.com/

## Design Token Summary (for index.css @theme)

```
--color-brand: #bfb332;
--color-brand-dark: #a99e2d;
--color-dark: #111111;
--color-text-body: #333333;
--color-text-light: #ffffff;
--font-body: 'Josefin Sans', sans-serif;
--font-heading: 'Rajdhani', sans-serif;
--btn-radius: 60px;
```

## Key Differences from Source

- No owl-carousel: use CSS scroll-snap or a lightweight React carousel
- No Font Awesome: replace with lucide-react icons
- No flaticon icons: replace with lucide-react equivalents
- No Google Maps embed: use a placeholder map or static image
- No image set-bg JS: use React background-image style directly
- Placeholder images via picsum.photos with deterministic seeds
- All copy is paraphrased, not copied verbatim
- Footer links to Component Dock instead of ColorLib
