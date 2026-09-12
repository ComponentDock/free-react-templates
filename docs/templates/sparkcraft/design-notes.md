# SparkCraft — Design Notes & Task Outline

## Source mapping
- **ColorLib source:** Inspire (slug: `inspire`)
- **Preview URL:** https://preview.colorlib.com/theme/inspire/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/inspire-free-template.jpg

## Section order (from live preview DOM)

| # | Section | CSS class | Notes |
|---|---------|-----------|-------|
| 1 | Navbar | `.site-nav` | Transparent sticky nav, links on right, mobile hamburger |
| 2 | Hero | `.untree_co--hero` | Full-width background image, dark overlay, heading "We Inspire You To Create Great Things", description, play button (Vimeo) |
| 3 | Services v1 | `.services-v1.bg-light` | Light gray background. 4 cards: Inspire, Create, Innovate, Publish. Each with icon + title. "See All Services" link. |
| 4 | Why Awesome | (content section) | "Why Are We Awesome?" heading, descriptive paragraph |
| 5 | Services v2 | `.service-v2` grid | 2-column grid, 4 items: Inspire Photography, Find it here, Inspire Photography, Fly Your Dreams. Each: icon + title + description |
| 6 | Our Concept | (content section) | "Our Concept" heading, paragraph with highlighted text, "Get started" blue button |
| 7 | Testimonials | `.untree_co-testimonial` | Carousel with customer photos (person_1-4.jpg). Navigation dots. |
| 8 | Share CTA | `.site-footer` top | "Help Us Spread Our Works" heading, "Share them to social media!" blue button |
| 9 | Footer | `.site-footer` | 3 columns: Contact (address, phone, email), Sources, Links |

## Design token mapping (Tailwind `@theme`)

```css
@theme {
  --color-brand: #1daff3;
  --color-brand-hover: #30b6f4;
  --color-text-primary: #000000;
  --color-bg-white: #ffffff;
  --color-bg-light: #f8f9fa;
}
```

## Section-by-section fidelity notes

### Navbar
- Transparent over hero, becomes opaque on scroll
- Links on right side
- Mobile: hamburger toggle

### Hero
- Full-width background image with dark overlay
- Centered heading: "We Inspire You To Create Great Things"
- Description paragraph below
- Play button for Vimeo video (fancybox lightbox)

### Services v1
- Light gray background
- 4 cards in a row (col-lg-3)
- Each: icon, title (Inspire, Create, Innovate, Publish)
- AOS fade-up animations with staggered delays
- "See All Services" link at bottom

### Why Awesome
- "Why Are We Awesome?" heading
- Descriptive paragraph

### Services v2
- 2-column grid (col-lg-6)
- 4 items with icons (camera, search, home, paper-plane)
- Each: icon, title, description

### Our Concept
- "Our Concept" heading
- Paragraph with highlighted text span
- "Get started" blue button

### Testimonials
- Owl Carousel with customer photos
- Navigation dots
- Auto-advancing

### Share CTA
- "Help Us Spread Our Works" heading
- "Share them to social media!" blue button
- Button links to Colorlib (to be replaced)

### Footer
- 3 columns: Contact, Sources, Links
- Contact: address, phone numbers, email
- Sources and Links: navigation link lists

## Implementation tasks

- [ ] Scaffold `apps/sparkcraft/` from simplest existing app
- [ ] Rename package to `@free-react-templates/sparkcraft`
- [ ] Set up `public/CNAME` → `sparkcraft.free.componentdock.com`
- [ ] Add Rubik font via Google Fonts `<link>` in index.html
- [ ] Configure `@theme` tokens in `src/index.css`
- [ ] Implement `Navbar.tsx` — transparent sticky nav, links, mobile hamburger
- [ ] Implement `Hero.tsx` — full-width hero, background image, dark overlay, heading, play button
- [ ] Implement `ServicesGrid.tsx` — light gray background, 4 service cards with icons
- [ ] Implement `WhyAwesome.tsx` — heading, descriptive paragraph
- [ ] Implement `ServicesList.tsx` — 2-column grid, 4 items with icons and descriptions
- [ ] Implement `OurConcept.tsx` — heading, highlighted text, "Get started" blue button
- [ ] Implement `Testimonials.tsx` — carousel with customer photos
- [ ] Implement `ShareCta.tsx` — heading, "Share" blue button
- [ ] Implement `Footer.tsx` — 3-column layout, contact info, links, copyright with Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write Vitest tests for every component (100% coverage)
- [ ] Run `scripts/verify-app.sh sparkcraft` — typecheck + lint + test:coverage + build
- [ ] Update `docs/templates/sparkcraft/` README with status
- [ ] Run `npm run readme:status` at repo root
- [ ] Commit and push to main
