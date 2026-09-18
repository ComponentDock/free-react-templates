# Solflow — Design Notes & Task Outline

**Source:** ColorLib "Yoga Studio" (https://colorlib.com/wp/template/yoga-studio/)
**New name:** Solflow
**Preview:** https://preview.colorlib.com/theme/yoga-studio/ (404 at prep time — fallback to screenshot)

## Implementation task outline

1. Scaffold app: `apps/solflow/` from a minimal existing template (copy base Vite + React + Tailwind setup)
2. Register workspace: run `npm install` at root to update package-lock.json
3. Set theme tokens in `src/index.css` (`@theme` block with brand colors)
4. Implement components in `src/components/`:
   - `Navbar.tsx` — top nav with logo + link groups
   - `Hero.tsx` — full-width carousel with text overlay + CTA
   - `About.tsx` — studio intro section
   - `Classes.tsx` — yoga class offerings grid/cards
   - `Features.tsx` — service/feature cards with icons
   - `Pricing.tsx` — pricing table cards
   - `Testimonials.tsx` — testimonial slider cards
   - `Gallery.tsx` — image grid
   - `Blog.tsx` — recent blog post cards
   - `Contact.tsx` — contact form + map placeholder
   - `Footer.tsx` — footer with Component Dock link
5. Compose in `src/App.tsx`
6. Write tests for each component (Vitest + RTL)
7. Ensure 100% coverage, typecheck, lint, build pass
8. Deploy to `solflow.free.componentdock.com`

## Section-by-section fidelity notes

### Navbar
- Horizontal layout, logo centered, links split left/right
- Semi-transparent background overlaying the hero
- Links: Home, Classes, About Us (left) | Shop, News, Contact (right)
- Logo: uppercase, serif font, decorative dots between words → simplify to "SOLFLOW" in Playfair Display

### Hero
- Full-width image carousel with background cover
- Left/right navigation arrows (chevron icons, semi-transparent backgrounds)
- Text overlay centered vertically:
  - Small uppercase subtitle (e.g. "YOUR INNER CHI" → "YOUR INNER FLOW")
  - Large serif headline ("Find Your Zen" → "Find Your Zen" or similar)
  - Body paragraph text in white
  - Rounded CTA button in muted purple/mauve
- Placeholder images: `https://picsum.photos/seed/solflow-hero/1920/800`

### About
- Split layout: text left, image right (or full-width with image + text overlay)
- Heading + paragraph + optional CTA link
- Use placeholder: `https://picsum.photos/seed/solflow-about/800/500`

### Classes
- Grid of yoga class cards (3-4 columns on desktop)
- Each card: image, class name, description, schedule/time
- Placeholder images: `https://picsum.photos/seed/solflow-class-<n>/400/300`

### Features
- 3-4 feature cards in a row
- Each: icon (lucide-react), title, short description
- Simple white/light background

### Pricing
- 3 pricing tier cards
- Each: plan name, price, feature list (check marks), CTA button
- Middle card slightly elevated or highlighted as "popular"

### Testimonials
- Carousel or static grid of testimonial cards
- Each: quote text, author name, optional avatar image
- Placeholder avatars: `https://picsum.photos/seed/solflow-testi-<n>/80/80`

### Gallery
- 3-4 column image grid
- Hover effect (overlay, zoom, or caption reveal)
- Placeholder images: `https://picsum.photos/seed/solflow-gallery-<n>/600/400`

### Blog
- 2-3 blog post cards in a row
- Each: featured image, title, excerpt, date, "Read More" link
- Placeholder images: `https://picsum.photos/seed/solflow-blog-<n>/600/400`

### Contact
- Two-column: form left, map placeholder right
- Form fields: name, email, subject, message (textarea)
- Submit button "Send Message"
- Map: static placeholder or OpenStreetMap embed

### Footer
- Multi-column: about text, quick links, contact info, social icons
- Bottom bar: copyright + "Made with Component Dock" link to https://www.componentdock.com/
- No external ColorLib attribution

## Color reference (from screenshot analysis)

- Hero overlay: warm golden amber tone
- CTA buttons: muted purple/mauve (~#8b7baa)
- Background sections: white and warm off-white alternating
- Text on dark backgrounds: white
- Text on light backgrounds: dark gray/charcoal
