# Mill — Design Notes

## Source mapping

- **ColorLib template:** Industries
- **ColorLib URL:** https://colorlib.com/wp/template/industries/
- **Preview URL:** https://preview.colorlib.com/theme/industries/
- **New app name:** mill
- **App path:** apps/mill

## Section order (top → bottom)

1. **Navbar** — dark bg, brand + 6 links + dropdown, responsive
2. **Hero Slider** — full-width bg images, white centered text, play button
3. **Features (3-col)** — bg-light, 3 icon+heading+text cards
4. **About / Engineering** — heading, image left, 4 feature items (2+2 layout)
5. **About Alternate** — image right, text left, readmore link
6. **Projects Grid** — heading, 3x2 thumbnail grid with hover overlay
7. **Testimonials** — bg-light, carousel of avatar+name+blockquote cards
8. **Blog Posts** — 2-col, 4 items with thumbnail + date + title + readmore
9. **CTA Banner** — orange bg, white text, outline button
10. **Footer** — 4-col (About + social, Contact, Quick Links, empty), copyright

## Fidelity notes per section

### Navbar
- Dark background `#343a40`, white brand text
- Dropdown for Services with 3 sub-links (Architectural Design, Interior, Building)
- Mobile hamburger with collapse
- Implement with Tailwind: `bg-[#343a40]` or custom theme token

### Hero Slider
- Two slides with different bg images and headings
- Play button (fancybox video) — omit or replace with static icon
- Implement as a React carousel (e.g. CSS-only fade or lightweight lib)
- Full-viewport height sections with background-size: cover

### Features (3-column)
- `bg-light` (#f8f9fa) section background
- 3 equal-width cards, centered text
- Icons: Ionicons → replace with lucide-react equivalents
- Each card: icon (orange) → h3 heading → paragraph

### About / Engineering
- Heading centered: "We Are Reliable Engineering In House"
- Image on left (col-lg-4), 4 features stacked in 2 columns
- Features use orange `display-4` sized icons
- Pure CSS layout — no JS needed

### About Alternate
- Image right (col-lg-7), text left (col-md-5)
- Heading + paragraph + "Read More" link with arrow
- `block-41` class styling — recreate with Tailwind

### Projects Grid
- Heading + subtext centered
- 6 items in 3-column no-gutter grid (`row no-gutters`)
- Hover overlay: title + plus icon, slides in from bottom
- Use `picsum.photos/seed/mill-<n>/` for placeholder images

### Testimonials
- `bg-light` section, centered heading
- Horizontal carousel of cards (owl-carousel → React carousel)
- Each card: avatar (circular), name, meta, blockquote

### Blog Posts
- Centered heading + subtext
- 2-column layout, 4 posts total
- Each: thumbnail left, text right (date, title, readmore)

### CTA Banner
- Orange `#fd5f00` background, full width
- White heading + description
- White outline button → `btn-outline-white` → `border border-white text-white`

### Footer
- Dark background, generous padding (7em vertical)
- 4 columns: About Us + social icons, Contact Info, Quick Links, empty
- Copyright with heart icon → Component Dock link
- Social icons: Twitter, Facebook, LinkedIn, Instagram → lucide-react

## Implementation tasks

- [ ] Scaffold `apps/mill` from simplest existing app
- [ ] Set up `@theme` tokens in `index.css`
- [ ] Build Navbar component
- [ ] Build HeroSlider component
- [ ] Build Features component (3-col cards)
- [ ] Build About component (image + features)
- [ ] Build AboutAlternate component
- [ ] Build ProjectsGrid component (hover overlay)
- [ ] Build Testimonials component (carousel)
- [ ] Build BlogPosts component
- [ ] Build CtaBanner component
- [ ] Build Footer component
- [ ] Compose in App.tsx
- [ ] Write tests (100% coverage)
- [ ] Run per-app gate: `npm run verify:app mill`
- [ ] PR and merge
