# Framecast — Implementation Tasks & Design Notes

## Source Mapping
- **ColorLib source:** Portfolio 2
- **Preview URL:** https://preview.colorlib.com/theme/portfolio2/
- **New name:** framecast
- **Category:** Portfolio / Personal Website

## Section-by-Section Implementation Order

### 1. Header/Nav (`Navbar.tsx`)
- Sticky header, dark bg `#040E27`
- Left: "PORTFOLIO" wordmark in white, uppercase, bold, tracking-wide
- Right: nav links (Home, About, Blog, Pages, Contact) in white, hover blue
- Mobile: hamburger toggle, slide-in menu

### 2. Hero/Banner (`Hero.tsx`)
- Full-width, dark bg `#040E27`, centered content
- Subtitle: "Hello Everyone" in blue `#0181f5`, uppercase, letter-spacing
- Main heading: large white text, ~36-42px, centered, max-width ~800px
- Height: ~500-600px on desktop, auto on mobile

### 3. Portfolio Grid (`PortfolioGrid.tsx`)
- Masonry-style grid, no gutters (images touch)
- 9 items total: mix of 1/3 and 2/3 width cards
- Hover overlay: semi-transparent dark overlay with category + title text centered
- "More Works" link centered below grid
- Images: `https://picsum.photos/seed/framecast-<n>/600/400` (deterministic)

### 4. Services (`Services.tsx`)
- Light bg `#f9f9ff`
- Section heading "Services" centered
- 3-column grid, each card: icon (lucide-react), title, description text
- Cards: white bg, subtle shadow, padding ~30px

### 5. Blog (`BlogSection.tsx`)
- Heading "Our Creative Articles" with decorative outline text
- 4 blog post cards in horizontal scroll/carousel
- Each card: image top, date + title below
- "More Blogs" button centered

### 6. Testimonials (`Testimonials.tsx`)
- White bg, centered content
- Quote text (italic or regular), author name, designation
- Slider dots for navigation
- Single testimonial visible at a time

### 7. CTA (`DiscussProjects.tsx`)
- Full-width, bg `#0181f5`
- Centered heading about starting a project
- "Start Talking" button: white bg, blue text, or white text on hover

### 8. Footer (`Footer.tsx`)
- Dark bg `#040E27`
- 4 columns: logo+description, Services links, Useful Links, Follow Us icons
- Copyright bar at bottom: centered, muted text
- MUST link to https://www.componentdock.com/

## Design Fidelity Notes

- **Color palette:** Primary blue `#0181f5`, dark navy `#040e27`, off-white `#f9f9ff`, orange accent `#ff5e13`
- **Typography:** Poppins for headings, Roboto for body, Alata for buttons
- **Button style:** Outlined (border `#0181f5`, white bg), hover fills blue. Radius `3px`
- **Layout:** Full-width sections, container max-width ~1140px
- **Portfolio grid:** Pure CSS masonry (no JS library needed with Tailwind grid-cols)
- **No parallax, no video backgrounds** — clean and minimal
- **Hover effects on portfolio items:** scale or overlay fade-in

## Implementation Checklist

- [ ] Create `apps/framecast/` from simplest existing app
- [ ] Update package.json: `@free-react-templates/framecast`
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Update `public/CNAME` → `framecast.free.componentdock.com`
- [ ] Update `package.json` homepage
- [ ] Add Google Fonts (Poppins, Roboto, Alata) to `index.html`
- [ ] Create `src/index.css` with Tailwind theme tokens
- [ ] Build all 8 components
- [ ] Write `src/App.tsx` composing sections
- [ ] Write tests for each component (100% coverage)
- [ ] Run `npm run spec:validate` if available
- [ ] Run `scripts/verify-app.sh framecast`
- [ ] Commit as `feat: add Framecast (Portfolio 2) template`
- [ ] Open PR, merge, deploy
