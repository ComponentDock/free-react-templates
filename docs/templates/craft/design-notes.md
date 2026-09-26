# Craft — Design Notes & Task Outline

## Source

- ColorLib slug: `beckham`
- Preview URL: https://preview.colorlib.com/theme/beckham/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/beckham-free-template.jpg
- New name: `craft`
- Package: `@free-react-templates/craft`

## Section Order (top to bottom)

1. **Side Navigation** — Full-height dark (#121212) slide-in from right:
   - Left 30%: author photo with dark overlay
   - Right side: circular author photo, uppercase logo, 6 numbered menu items (01–06)
   - Toggled by hamburger icon in header

2. **Fixed Header** — Transparent/fixed at top:
   - Circular 50×50px author photo (border-radius: 50%)
   - Uppercase white logo text ("Craft")
   - Hamburger nav toggle (right side)

3. **Hero Slider** — Fullscreen, Owl Carousel with 2 slides:
   - Each slide: background image + dark overlay
   - Centered text: small uppercase subtitle ("Hello! I'm") + large h1 ("Craft" / "A Web Designer")
   - Parallax scroll effect via scrollax.js (recreate with IntersectionObserver + transform)

4. **About Section** — Split layout:
   - Left 4-col: author image (background-image)
   - 2-col spacer
   - Right 6-col: content with oversized "About" watermark text (10em, positioned absolutely behind content)
   - Content: h2 "Hi! I'm Craft", paragraph, "Checkout my resume" link, social icons, contact info
   - Watermark hidden on mobile (< 992px)

5. **Services** — 3-column centered:
   - Section heading: uppercase subtitle "What i do" + h2 "My services"
   - Three cards with centered icons (layers, gears, code → use lucide-react)
   - Each card: icon + list of 3 service items as h3 headings

6. **Portfolio** — Alternating layout, 6 items:
   - Section heading: uppercase subtitle "Portfolio" + h2 "Checkout a few of my works"
   - Items alternate: image-left/text-right then text-left/image-right
   - Each item: background image (parallax) + search icon overlay on hover
   - Text side: category subheading, h2 title, paragraph, "View Project" link

7. **Counters** — Asymmetric layout:
   - Section heading: "I love to share my achievements"
   - Three counters in staggered rows: left (Clients: 420), center (Projects: 890), right (Coffee: 1000)
   - Large bold numbers with small labels

8. **Footer** — Dark brown (#3c312e):
   - Centered social icons (Twitter, Facebook, Instagram)
   - Contact email link
   - Copyright line + Component Dock link

## Implementation Tasks

- [ ] Create `apps/craft/` from a simple existing app (copy + rename)
- [ ] Set up package.json, vite.config.ts, index.html with Montserrat + Poppins font links
- [ ] Create `src/index.css` with Tailwind v4 + theme tokens (#79efb4 primary, etc.)
- [ ] Build `SideNav.tsx` — slide-in nav with author photo + numbered links
- [ ] Build `Header.tsx` — fixed header with circular photo + logo + hamburger toggle
- [ ] Build `HeroSlider.tsx` — fullscreen slider with overlay + parallax text
- [ ] Build `About.tsx` — split layout with oversized watermark + content
- [ ] Build `Services.tsx` — 3-column cards with icons + service lists
- [ ] Build `Portfolio.tsx` — alternating grid with parallax images + hover overlay
- [ ] Build `Counters.tsx` — asymmetric stat counters with animated count-up
- [ ] Build `Footer.tsx` — dark footer with social + contact + Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests for every component (100% coverage)
- [ ] Run `npm run verify:app -- craft`
- [ ] Commit, push, deploy

## Deviations from Source (planned)

- Replace icon fonts (ionicons, flaticon, icomoon, open-iconic) with `lucide-react`
- Replace jQuery plugins (owlCarousel, scrollax, magnificPopup, animateNumber, waypoints) with React equivalents or CSS-only
- Replace hardcoded ColorLib assets with picsum.photos placeholders
- Replace Colorlib footer attribution with Component Dock
- Parallax: use IntersectionObserver + CSS transform instead of scrollax.js
- Counter animation: use requestAnimationFrame instead of jQuery animateNumber
- Side nav: use React state + CSS transitions instead of jQuery toggle
