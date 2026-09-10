# Roadwise — Design Notes & Implementation Tasks

**Source:** ColorLib Autoroad (https://preview.colorlib.com/theme/autoroad/)
**New name:** Roadwise
**Category:** Business (car rental)

## Design Notes

### Overall Aesthetic

Professional, adventure-focused car rental site. Warm orange accent (#fc983c) against dark/white sections. Poppins font gives a clean, modern feel. Desktop-first layout with full-width sections.

### Color Strategy

- Dark sections (hero, services, workflow): black bg with semi-transparent overlay
- Light sections (search bar, car grid, testimonials, blog): white bg
- Orange accent for all interactive CTAs and section labels
- Footer: solid black

### Key Visual Elements

1. **Hero play button:** 70px circle, orange bg, centered white play icon — distinctive interaction cue
2. **Booking form card:** White floating card on hero, rounded corners (5px), subtle drop shadow
3. **Service icons:** Circular with orange border, white text on dark background
4. **Workflow steps:** Numbered circular icons on dark section
5. **Car pricing cards:** Image + "From $X/day" with "Book Now" + "Details" buttons

### Section-by-Section Fidelity Notes

1. **Navbar:** Dark/transparent, becomes visible on scroll. Brand text "Roadwise" with accent styling on second word. Mobile hamburger menu. Active item highlighted.

2. **Hero:** Full-width background image (car in sunset landscape), black overlay 40%. Left: h1 headline (60px, weight 200) + paragraph + play CTA. Right: floating white booking form card with shadow. Form has 5 fields + submit button.

3. **Advanced Search:** White section below hero. 5-column grid: Model dropdown, Brand dropdown, Year dropdown, Price Limit, Search button. Bootstrap `.form-control` styled inputs.

4. **Our Services:** Dark section with black overlay (70%). Centered heading "Our Services". 4-column grid of service cards: each has circular orange-bordered icon, title, description. Cards transition on hover.

5. **Choose Your Car:** White section. Car cards in grid. Each card: car image, model name, brand, "From $X/Day" pricing, "Book Now" + "Details" buttons.

6. **How it works:** Dark section. 4-step workflow with circular numbered icons and connecting lines. Steps: Pick Destination → Select Term → Choose A Car → Enjoy The Ride.

7. **Testimonials:** White section. Owl-carousel with client quotes. Client name + role below quote. Navigation dots.

8. **About Us:** Split layout. Left: car image. Right: heading "Choose A Perfect Car" + paragraph + counter stats (years, fleet size, etc.).

9. **Blog:** White section. 3-column grid of blog cards. Each: image, date/author/comment meta, title, excerpt text.

10. **Footer:** Black background. 4 columns: About, Information, Customer Support, Contact. Social icon circles. Copyright line.

## Implementation Tasks

### Phase 1: Scaffolding

- [ ] Copy simplest existing app as base
- [ ] Rename package to `@free-react-templates/roadwise`
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `roadwise.free.componentdock.com`
- [ ] Update `package.json` homepage

### Phase 2: Component Structure

- [ ] `src/components/Navbar.tsx` — dark navbar with brand + nav links
- [ ] `src/components/Hero.tsx` — bg image, overlay, headline + booking form
- [ ] `src/components/SearchBar.tsx` — advanced filter section (5-column grid)
- [ ] `src/components/Services.tsx` — 4 service cards on dark bg
- [ ] `src/components/CarGrid.tsx` — car pricing cards
- [ ] `src/components/Workflow.tsx` — 4-step process section
- [ ] `src/components/Testimonials.tsx` — owl-carousel testimonials
- [ ] `src/components/AboutUs.tsx` — split layout with image + text
- [ ] `src/components/Blog.tsx` — 3-column blog cards
- [ ] `src/components/Footer.tsx` — 4-column black footer

### Phase 3: Styling

- [ ] Apply Tailwind theme tokens: `--color-brand: #fc983c`
- [ ] Load Poppins from Google Fonts in `index.html`
- [ ] Style dark section backgrounds with overlays
- [ ] Style booking form card with shadow + rounded corners
- [ ] Style circular play button and service icons
- [ ] Footer: black bg, white links, social icon circles

### Phase 4: Tests (TDD)

- [ ] Test each component renders with correct content
- [ ] Test navbar links
- [ ] Test booking form has all fields
- [ ] Test service cards render 4 items
- [ ] Test workflow steps render 4 items
- [ ] Test footer columns + Component Dock link
- [ ] Achieve 100% coverage

### Phase 5: Verification

- [ ] Run `scripts/verify-app.sh roadwise`
- [ ] Visual check against screenshot
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Commit as `feat: roadwise (ColorLib autoroad)`
