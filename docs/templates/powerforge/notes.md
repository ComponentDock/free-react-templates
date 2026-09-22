# PowerForge — Design Notes & Task Outline

## Source
- ColorLib: Ironmuscle (https://colorlib.com/wp/template/ironmuscle/)
- Preview: https://preview.colorlib.com/theme/ironmuscle/

## Task outline

### Phase 1: Project scaffolding
- [ ] Copy simplest existing app as base
- [ ] Rename package to `@free-react-templates/powerforge`
- [ ] Set up `public/CNAME` → `powerforge.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add Nunito Sans + Roboto Mono to `index.html`
- [ ] Set brand color `#f23a2e` in Tailwind `@theme`

### Phase 2: Components (section-by-section)
- [ ] `Navbar.tsx` — sticky white navbar, logo, nav links, mobile hamburger
- [ ] `HeroSlider.tsx` — 2-slide carousel, dark overlay, CTAs (use picsum for bg)
- [ ] `About.tsx` — "All About Us" text section
- [ ] `FeaturedClasses.tsx` — light bg, 4 class cards grid
- [ ] `ClassBlocks.tsx` — 4 alternating icon+text+image blocks
- [ ] `Schedule.tsx` — dark overlay, weekly schedule grid
- [ ] `Testimonials.tsx` — testimonial carousel (3+ cards)
- [ ] `Trainers.tsx` — trainer cards grid with hover overlay
- [ ] `Footer.tsx` — 4-column dark footer, componentdock link

### Phase 3: Testing
- [ ] Write tests for each component (TDD)
- [ ] Verify 100% coverage

### Phase 4: Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
- [ ] All tests green at 100% coverage
- [ ] Visual check vs preview

## Fidelity notes

### Color mapping
- Brand red `#f23a2e` → Tailwind custom color `brand` or `primary`
- Dark overlays → `bg-black/50` or custom overlay class
- Light sections → `bg-gray-50` or `bg-[#f8f9fa]`

### Typography
- Headings: Nunito Sans, bold/uppercase for section headings
- Body: Nunito Sans regular
- Schedule times: Roboto Mono

### Button style
- Pill shape: `rounded-full px-6 py-2`
- Primary variant: `bg-brand text-white hover:bg-red-700`

### Section structure
1. Navbar (sticky, white bg)
2. Hero (2 slides, dark overlay, centered text)
3. About (text only, no images)
4. Featured Classes (light bg, 4 cards)
5. Class Blocks (4 alternating blocks)
6. Schedule (dark bg overlay, weekly grid)
7. Testimonials (carousel)
8. Trainers (grid, hover overlay)
9. Footer (dark bg, 4 columns)

### Images
- Hero backgrounds: `picsum.photos/seed/powerforge-hero-1/1920/1080`
- Class cards: `picsum.photos/seed/powerforge-class-{1-4}/600/400`
- Trainer avatars: `picsum.photos/seed/powerforge-trainer-{1-6}/300/300`

### Icons
- Use `lucide-react` for feature icons (Dumbbell, Heart, Timer, etc.)
- Replace Icomoon/Flaticon icons
