# Luminary — Implementation Tasks & Design Notes

**Source:** ColorLib Inspire (https://preview.colorlib.com/theme/inspire/)
**New name:** luminary
**Stack:** React 19 + Vite + Tailwind 4 + TypeScript

## Task Outline

### 1. Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/abode` or similar minimal template)
- [ ] Rename package to `@free-react-templates/luminary`
- [ ] Update `public/CNAME` → `luminary.free.componentdock.com`
- [ ] Update `homepage` in package.json
- [ ] Run `npm install` at repo root

### 2. Navbar Component
- [ ] Sticky top nav with logo "Luminary" + colored dot accent
- [ ] Desktop menu: Home, Services, FAQ, About, Contact
- [ ] Mobile hamburger toggle
- [ ] Use `packages/ui` components where possible

### 3. Hero Component
- [ ] Full-width background image via `picsum.photos/seed/luminary-hero/1920/1080`
- [ ] Centered headline: "We Inspire You To Create Great Things"
- [ ] Subtext paragraph
- [ ] Circular play button (radius: 50%, brand color)
- [ ] Social icons (Instagram, Twitter, Facebook) on left side
- [ ] AOS-style fade-up animations (optional, use framer-motion or CSS)

### 4. Services Component
- [ ] `bg-light` section background
- [ ] 4-column grid: Inspire, Create, Innovate, Publish
- [ ] Each card: circular icon-wrap (40% radius, 50px), heading, description
- [ ] "See All Services" link below grid
- [ ] Use lucide-react icons (screen_share → Monitor, settings_brightness → Sun, lightbulb_outline → Lightbulb, highlight → Highlighter)

### 5. About/Features Component
- [ ] "Why Are We Awesome?" heading
- [ ] Left column: excerpt text with highlighted `<span>` phrases
- [ ] Right column: image (`picsum.photos/seed/luminary-about/600/400`)
- [ ] 2x2 grid of service-v2 items below text (Photography, Find It Here, Photography, Fly Your Dreams)
- [ ] Each service-v2: icon + heading in a flex row

### 6. Concept (Parallax) Component
- [ ] Full-width parallax background image (`picsum.photos/seed/luminary-concept/1920/800`)
- [ ] "Our Concept" heading centered
- [ ] Description text with highlighted phrases
- [ ] "Get started" primary button (pill shape, brand color)

### 7. Testimonials Component
- [ ] Carousel/grid of testimonial cards
- [ ] Each card: person image (`picsum.photos/seed/luminary-person-N/150/150`), quote, author name
- [ ] Prev/next navigation arrows
- [ ] Responsive: stack on mobile, carousel on desktop

### 8. Feature/CTA Component
- [ ] `bg-light` section background
- [ ] "Help Us by Sharing Our Works" heading
- [ ] Description text
- [ ] Author attribution ("Carl Anderson, Co-Founder & CEO")
- [ ] Right column: image (`picsum.photos/seed/luminary-feature/600/400`)

### 9. Footer Component
- [ ] Dark background
- [ ] Top: "Help Us Spread Our Works" heading + "Share them to social media!" button
- [ ] 3-column layout: Contact (phone, email), Sources (links), Links (links)
- [ ] Social icons row (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble)
- [ ] Copyright: "Made with Component Dock" linking to componentdock.com

### 10. Styling & Tokens
- [ ] Load Rubik font via Google Fonts in `index.html`
- [ ] Brand color `#1daff3` in `@theme` block
- [ ] Hover color `#30b6f4`
- [ ] Button radius: 30px (pill)
- [ ] Icon wraps: 40% radius
- [ ] Play button & social icons: 50% radius
- [ ] Section backgrounds: white (default), light gray (services, feature)

### 11. Tests
- [ ] Write Vitest + RTL tests for each component
- [ ] Cover all sections, interactions, responsive behavior
- [ ] Achieve 100% lines/functions/branches/statements coverage

### 12. Verification
- [ ] Run `scripts/verify-app.sh luminary`
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] 100% coverage
- [ ] Build succeeds

## Design Fidelity Notes

- **Section order matches 1:1:** Navbar → Hero → Services → About → Concept → Testimonials → Feature/CTA → Footer
- **Color palette:** Predominantly white with brand blue (#1daff3) accents. Light gray (#f8f9fa) for services and feature sections. Dark footer.
- **Typography:** Rubik font, weights 300/400/700. Clean, modern look.
- **Buttons:** Pill-shaped (30px border-radius), blue primary with white text.
- **Icons:** Lucide equivalents for icomoon icons. Circular icon wraps for services.
- **Layout:** Bootstrap-style grid (col-lg-3 for services, col-lg-6 for about, etc.). Responsive with mobile-first approach.
- **Parallax:** CSS `background-attachment: fixed` on concept section.
- **Animations:** Original uses AOS (Animate on Scroll). Consider framer-motion or CSS animations.
