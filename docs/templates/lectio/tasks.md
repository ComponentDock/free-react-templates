# Lectio — Implementation Tasks & Design Notes

## Source
- ColorLib: Academica (https://colorlib.com/wp/template/academica/)
- Preview: https://preview.colorlib.com/theme/academica/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/academica-free-template.jpg

## Implementation Order

### Phase 1: Scaffolding
- [ ] Create `apps/lectio/` from simplest existing app (copy + rename)
- [ ] Set package name to `@free-react-templates/lectio`
- [ ] Set `public/CNAME` to `lectio.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://lectio.free.componentdock.com`
- [ ] Run `npm install` at repo root to update lockfile
- [ ] Set up `src/index.css` with Tailwind + Raleway font import + theme tokens
- [ ] Verify Vite config has `injectUiSource()` pattern

### Phase 2: Tests (TDD — RED)
- [ ] Navbar: renders logo, nav links (Home, About, Courses, News, Contact), login link
- [ ] Hero: renders headline, description, author info, CTA button
- [ ] CourseSearch: renders search form with 5 fields + Search button
- [ ] Services: renders 6 Training Center cards in grid
- [ ] Testimonials: renders carousel with quotes and author info
- [ ] Courses: renders course carousel with 6 course cards
- [ ] Stats: renders 4 stat items with numbers and labels
- [ ] Newsletter: renders heading + email input + subscribe button
- [ ] Footer: renders 4 columns with category links, copyright, Component Dock link
- [ ] App: renders all sections in correct order

### Phase 3: Implementation (GREEN)
- [ ] Navbar.tsx — dark navy bg, yellow bottom border, flex layout
- [ ] Hero.tsx — background image with dark overlay, text, CTA
- [ ] CourseSearch.tsx — white card with 5-field form, gradient button
- [ ] Services.tsx — 3x2 grid of icon cards
- [ ] Testimonials.tsx — gradient bg carousel
- [ ] Courses.tsx — carousel of course cards
- [ ] Stats.tsx — 4-column stat display
- [ ] Newsletter.tsx — dark bg, email input
- [ ] Footer.tsx — 4-column footer + copyright
- [ ] App.tsx — compose all sections

### Phase 4: Verification
- [ ] 100% test coverage
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
- [ ] Visual match to screenshot

## Design Notes

### Color System
- Primary: `#185dd0` (deep blue — buttons, links, course cards)
- Gradient: `#185dd0 → #7076fc` (blue-to-purple — course card headers, CTA)
- Accent: `#fbb710` (gold — navbar underline, author links)
- Dark: `#0e2040` (header), `#1d1d1d` (footer)
- Neutral: `#333` (body), `#838383` (muted), `#f8fafc` (light bg)

### Typography
- Font: Raleway (Google Fonts, weights 300-700)
- Headings: Raleway 600-700, dark (#1d1d1d) or white on dark bg
- Body: Raleway 400, #333
- Buttons: Raleway 500-600, white on blue

### Section Backgrounds
1. Navbar: `#0e2040` solid
2. Hero: Image + dark overlay (rgba)
3. Search: White card
4. Services: White or `#f8fafc`
5. Testimonials: Blue gradient (`#7076fc → #185dd0`)
6. Courses: White
7. Stats: Image/pattern or dark bg
8. Newsletter: Dark/image bg
9. Footer: `#1d1d1d` solid

### Key Patterns
- Buttons: `border-radius: 25px`, blue gradient bg, white text, arrow icon
- Cards: `border-radius: 15px`, box-shadow
- Avatars: `border-radius: 50%` (circular)
- Hero overlay: dark semi-transparent overlay on background image
- Carousel/slider for testimonials and courses (CSS-only or minimal JS)

### Placeholder Images
Use `https://picsum.photos/seed/lectio-<n>/<w>/<h>` for all images:
- Hero: `picsum.photos/seed/lectio-hero/1920/800`
- Course cards: `picsum.photos/seed/lectio-course-<1-6>/400/250`
- Service icons: lucide-react icons (BookOpen, GraduationCap, Monitor, etc.)
- Author avatars: `picsum.photos/seed/lectio-author-<n>/80/80`
- Testimonial avatars: `picsum.photos/seed/lectio-testimonial-<n>/80/80`
