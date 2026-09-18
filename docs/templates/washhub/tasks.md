# WashHub (ColorLib Laundry) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-washhub`. Recreation name: **WashHub** (NEW name —
> the ColorLib source keeps its name "Laundry").

## Source mapping

- **ColorLib item:** "Laundry" (TEMPLATES.md line 1076; first unchecked item in the L section).
- **Source URL:** https://colorlib.com/wp/template/laundry/
- **Live demo (ThemeWagon/Technext):** https://technext.github.io/laundry/ (verified reachable)
- **ColorLib preview:** https://preview.colorlib.com/theme/laundry/ (returns 200, but no direct HTML content — demo used as primary reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/laundry-free-template.jpg
- **CSS source:** `assets/css/style.css` (95,581 bytes) — hand-written, Bootstrap grid, OwlCarousel, SlickNav, Magnific Popup, Gijgo datepicker, progressbar, animated headlines, nice-select. Fonts: Raleway + Muli via Google Fonts `<link>`.

## Reference research (done — do not redo)

### Live demo analysis (technext.github.io/laundry/)
- Hero: dark navy gradient overlay (left-to-right fade from rgba(29,37,70,0.78) to transparent), "Quality laundry service in your city" H1 in white, two CTAs
- How We Work: 3-step horizontal flow (collect → wash → deliver)
- Service categories: 3 cards with circular teal icons
- Testimonials: carousel with star ratings, avatars, dot navigation
- Additional services: 3-column grid
- About: two-column (image left, text right)
- Footer: blue `#6785FF` background, 4-column layout

### Design tokens extracted
- Primary blue: `#072366` (headings)
- Accent blue: `#6785FF` (footer, buttons, section tags)
- Green: `#09cc7f` (secondary accents)
- Dark navy: `#1c165c` (offer card text)
- Body bg: `#F5F9FB` / `#f7f7f7`
- Body text: `#7a8290` / `#707b8e`
- Dark text: `#212025`
- Fonts: Raleway (headings), Muli (body)
- Button radius: 30px (pill-shaped)
- Section tag: light blue `rgba(103,133,255,0.1)` bg + `#6785FF` text

## Section-by-section design notes

### 1. Navbar
- White background, sticky, shadow on scroll
- Logo: text "WashHub" (was "Laundry")
- Nav: Home, About, Services, Blog, Contact
- Right side: call-to-action button with phone icon (green accent `#09cc7f`)
- Responsive: hamburger menu at lg breakpoint
- Mobile menu: full-width dropdown with all nav items

### 2. Hero
- Full-width slider (can use a single slide with auto-rotate or multiple)
- Dark navy gradient overlay: `linear-gradient(to right, rgba(7,35,102,0.78), transparent)`
- Background image: use `picsum.photos/seed/washhub-hero/1920/765`
- Content: H1 "Quality laundry service in your city" (white, Raleway, bold)
- Subtitle: "We provide premium laundry services..." (white, Muli)
- Two CTAs: "Get a quote" (solid blue `#072366` or `#6785FF`, pill radius 30px) + "Learn more" (outlined white)
- Slider height: 765px desktop, responsive down to 400px mobile

### 3. How We Work
- White background
- Section tag: "This is how we work" (light blue bg `rgba(103,133,255,0.1)`, blue text `#6785FF`)
- H2 heading (Raleway, `#072366`)
- 3 steps in a row (col-lg-4):
  - Step 1: Circle icon (green `#09cc7f` bg), "We collect your clothes", description
  - Step 2: Circle icon, "Wash your clothes", description
  - Step 3: Circle icon, "Get delivery", description
- Steps connected by arrow/line decoration between them
- Each step: centered text, icon above title

### 4. Service Categories
- White background
- Section tag: "Services we offer"
- H2 heading
- 3 category cards (col-lg-4):
  - "Cloth laundry" — icon, title, description, hover lift effect
  - "Cloth ironing" — icon, title, description
  - Third service (e.g. "Dry cleaning") — icon, title, description
- Cards: white bg, subtle shadow, rounded corners (12px), icon in circular container

### 5. Promotional Banner
- Dark navy/gradient background (similar to hero overlay)
- Left-aligned content: "Call us for a service" heading (white)
- Phone number displayed prominently
- CTA button (green `#09cc7f` or blue)
- Right side: decorative element or image
- Full-width, generous padding

### 6. Testimonials
- Light background (`#f7f7f7`), border-bottom separator
- Section tag + heading
- OwlCarousel/Slick of testimonials:
  - Star rating (5 stars, yellow/gold)
  - Quote text (italic or styled)
  - Client avatar (circular, use `picsum.photos/seed/washhub-client-<n>/100/100`)
  - Client name
- Navigation dots below carousel
- Semi-transparent overlay on background image

### 7. Additional Services
- White background
- Section tag + heading
- 3-column grid of service items:
  - Each: icon (circular container), service title, description
  - Similar visual style to categories section
  - Different services (e.g. "Online booking", "Express wash", "Eco-friendly")

### 8. Company Achievement
- Decorative section with statistics or promotional content
- Could be: years in business, customers served, items cleaned, etc.
- Visual: large numbers, icons, background treatment

### 9. About Company
- White background
- Two-column layout (col-lg-6 each):
  - Left: image (`picsum.photos/seed/washhub-about/600/400`)
  - Right: H2 "About company", 2–3 paragraphs of descriptive text, CTA link
- Body text: `#212025`, 16px, weight 300

### 10. Footer
- Blue `#6785FF` background
- 4-column layout:
  - Column 1: Brand logo "WashHub" + short description + social icons (Facebook, Twitter, Instagram, LinkedIn via lucide-react)
  - Column 2: "Services" heading + service links (Dry cleaning, Laundry, Ironing, etc.)
  - Column 3: "Quick links" heading + nav links (Home, About, Services, Blog, Contact)
  - Column 4: "Get in touch" heading + address, phone, email
- Bottom bar: slightly darker blue, copyright text "© 2026 WashHub. Made with Component Dock." + social icons
- Link to https://www.componentdock.com/

## Implementation task order

1. Scaffold app: `apps/washhub` (copy simplest existing app, rename package)
2. Create `src/index.css` with Tailwind + `@theme` tokens (primary blue, accent blue, green)
3. Implement Navbar component (responsive, sticky, call button)
4. Implement Hero section (gradient overlay, heading, two CTAs)
5. Implement How We Work section (3-step flow with icons)
6. Implement Service Categories section (3 cards)
7. Implement Promotional Banner section (dark bg, call CTA)
8. Implement Testimonials section (carousel, ratings, avatars)
9. Implement Additional Services section (3 items)
10. Implement About section (two-column, image + text)
11. Implement Footer (blue bg, 4-column, Component Dock link)
12. Compose in App.tsx, add dark mode toggle
13. Write tests (100% coverage)
14. Run per-app gate, fix issues
15. Commit, push, open PR
