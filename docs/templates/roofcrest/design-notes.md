# Roofcrest — Implementation Notes

ColorLib source: Roofing (roofing)
Preview: https://preview.colorlib.com/theme/roofing/
Spec: openspec/specs/template-roofcrest/spec.md

## Section Order & Fidelity Notes

### 1. Navbar.tsx
- Dark background, sticky on scroll
- Logo: Roof icon (use Home or Building2 from lucide-react) + "Roofcrest" text
- Nav links: Home, About, Services, Project, Blog, Contact
- Hamburger for mobile (Menu icon from lucide-react)

### 2. HeroSlider.tsx
- Full viewport height (100vh), 2-slide carousel
- Each slide: parallax bg image, dark overlay
- Centered text: heading "We care about your home" + paragraph + two buttons
- "Get a quote" (primary #d9ba2b) + "Learn more" (white outline)
- Auto-sliding with dot navigation
- Use picsum.photos/seed/roofcrest-hero-N/1920x1080

### 3. AboutQuote.tsx
- Light bg (#ebecf1), 2-column layout
- Left: heading "We help more than 45 years installing your roof", paragraph
- Tabbed content: "Our Mission", "Our Vision", "Our Value" — each with paragraph
- Right: "Get a Quote" card with golden header bar
  - Form fields: Service (select: Skylights, Waterproofing, etc.), Name, Date, Time, Message
  - Submit button

### 4. CounterSection.tsx
- Brand color bg (#d9ba2b), full-width
- 4 stats in a row:
  - 45 Years of Experienced (Calendar icon)
  - 8500 Project completed (Briefcase icon)
  - 2342 Happy Clients (Users icon)
  - 30 Business Partners (BarChart icon)
- Each: white circle icon (80px, border-radius 50%) + number + label

### 5. Services.tsx
- "Our Best Services" heading centered
- 2-column: left = vertical tab nav, right = tab content
- Tab items: Skylights, Waterproofing, Industrial Roofing, Residential Roofing, Gutter Cleaning, Commercial Roofing
- Each tab: icon (use lucide-react), title, paragraphs, checklist (CheckCircle icons)
- Active tab: white bg with shadow

### 6. Projects.tsx
- "Done Projects" heading centered
- 4-column grid of project images
- Each: background image with dark overlay on hover, expand icon (Maximize2 from lucide-react), title, category "House"
- Use picsum.photos/seed/roofcrest-project-N/400x300

### 7. Testimonials.tsx
- "Testimonial" heading centered
- Carousel of testimonial items
- Each: circular avatar, quote icon (Quote from lucide-react), paragraph, author name + position
- Use picsum.photos/seed/roofcrest-person-N/100x100 for avatars

### 8. Blog.tsx
- 3-column blog entries
- Each: background image, author info row (circular avatar + name + date), title
- Use picsum.photos/seed/roofcrest-blog-N/400x300

### 9. Footer.tsx
- 5-column grid:
  - Logo + description + social links (Twitter, Facebook, Instagram)
  - Services list (6 items with check icons)
  - Business Hours (Opening Days + Vacations)
  - Contact info (address, phone, email)
  - Newsletter subscribe form
- Copyright line at bottom
- "Made with ❤️ by Component Dock" link to https://www.componentdock.com/

## Design Token Summary (for index.css @theme)

```
--color-brand: #d9ba2b;
--color-brand-dark: #c4a625;
--color-bg-light: #ebecf1;
--color-text-dark: #000000;
--color-text-body: #5c5c5c;
--color-text-light: #ffffff;
--color-overlay: rgba(0,0,0,0.5);
--color-counter-bg: #d9ba2b;
--font-family: 'Poppins', sans-serif;
--btn-radius: 4px;
```

## Key Differences from Source

- No owl-carousel: use CSS scroll-snap or a lightweight React carousel
- No Bootstrap datepicker: use native HTML date/time inputs
- No Font Awesome: replace with lucide-react icons
- No Magnific Popup: omit lightbox (simplify)
- No Bootstrap tabs: implement with React state
- Placeholder images via picsum.photos with deterministic seeds
- All copy is paraphrased, not copied verbatim
- Footer links to Component Dock instead of ColorLib
