# ModelCraft — Implementation Notes

## Source mapping
- ColorLib: "Mona" (model agency template)
- Preview: https://preview.colorlib.com/theme/mona/
- New name: `modelcraft`

## Section-by-section structure (render order in App.tsx)

1. **Navbar** — sticky top, logo + nav links + search icon
2. **HeroSlider** — full-width carousel, 3 model slides, social overlay, pill CTA
3. **AboutSection** — 2 image thumbnails + agency description + 4 service cards
4. **ModelsGallery** — tab bar (All/Model/Actor/Singer) + card carousel with hover flip
5. **TestimonialSlider** — client photo left, quote + stars right, dots/arrows
6. **CtaBand** — pink full-width band with heading + pill button
7. **BlogGrid** — asymmetric 4-post grid (1 left small, 1 featured right, 2 small right)
8. **Footer** — 3-column layout, componentdock.com link

## Fidelity notes

### Navbar
- Logo on left, nav links centered, search icon right
- Pink curve background behind nav on desktop (use a subtle gradient or curve SVG)
- Sticky positioning

### Hero
- Full-viewport-height slides with model photo as background
- Large model name in white, subtitle below, pill "Model details" button
- Social links row at bottom-left of each slide
- Slide pager ("Next: ...") bottom-right

### About
- 3-column row: 2 model images with decorative line accents, text block on right
- Below: 4-column service icons (film, calendar, camera, house)
- Use lucide-react icons: Film, Calendar, Camera, Home

### Models
- Tabbed interface: All / Model / Actor / Singer
- Card grid (carousel or flex grid): model photo with hover flip effect
- Share overlay on hover with social icons
- Name + role below each card
- Use picsum.photos with seed-based URLs for deterministic images

### Testimonials
- Split layout: client photo left, text right
- Star rating display (1-5 stars)
- Quote icon accent in brand pink

### CTA
- Full-width pink (#ed489d) background
- Centered white heading + subtitle + pill button

### Blog
- Asymmetric grid: 1 post on left col-4, featured post top-right col-8, 2 small posts bottom-right col-6 each
- Each post: image thumbnail, title link, date

### Footer
- Dark background
- Col 1: logo + description + copyright
- Col 2: "Our Link" nav list (8 items)
- Col 3: phone + address + social icons (5 platforms)
- Must include ComponentDock link

## Component file list

- `src/App.tsx` — compose all sections
- `src/components/Navbar.tsx`
- `src/components/HeroSlider.tsx`
- `src/components/AboutSection.tsx`
- `src/components/ModelsGallery.tsx`
- `src/components/TestimonialSlider.tsx`
- `src/components/CtaBand.tsx`
- `src/components/BlogGrid.tsx`
- `src/components/Footer.tsx`
