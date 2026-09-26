# Polity — Design Notes & Task Outline

## Source

- ColorLib slug: `politics`
- Preview URL: https://preview.colorlib.com/theme/politics/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/politics-free-template-1.jpg
- New name: `polity`
- Package: `@free-react-templates/polity`

## Section Order (top to bottom)

1. **Header** — Fixed, two-tier:
   - Top bar: dark #222222, social icons (FB, Twitter, Dribbble, Behance), phone + email right-aligned
   - Main nav: white bg, logo left, nav links right (Home, About, Service, Team, Blog dropdown, Contact)
   - Scrolled state: box-shadow + rgba(255,255,255,0.9) background

2. **Hero Banner** — Fullscreen, background image, dark overlay (rgba(0,0,0,0.5)):
   - Uppercase subtitle: "Don't look further, This is our Leader"
   - H1: "Support Our Party" (white, 48px, bold)
   - Paragraph description
   - CTA button: "Get Started" — pill (25px radius), #3898f8, white text

3. **Countdown** — Split card on #f9f9ff background:
   - Left: "Election is knocking at door" heading + paragraph
   - Right: solid #3898f8 block with countdown timer (days, hours, minutes, seconds in white)
   - Need a countdown JS hook (days until a configurable date)

4. **Services** — 3-column grid, centered heading "What we Offer":
   - Each card: image thumbnail, h4 title, paragraph
   - Hover: image scale(1.1) rotate(-2deg), title turns #3898f8

5. **About** — Split layout on #f9f9ff:
   - Left: full-height background image (CSS ::after pseudo)
   - Right: heading "Who we are to Serve the nation", paragraph
   - Two sub-service items in horizontal row: icon + h4 link + paragraph

6. **Gallery** — Masonry grid, centered heading "Our Gallery Archieve":
   - Row 1: 8-col + 4-col images
   - Row 2: 6-col + 6-col images
   - Hover: opacity transition to 0.7

7. **Counter** — Dark overlay (rgba(0,0,0,0.7)) over background image:
   - 4 stat counters in a row
   - Each: circular blue (#3898f8) indicator ring, white number + suffix, white label
   - Need animated count-up on scroll (intersection observer + requestAnimationFrame)

8. **Goals/Feedback** — Split layout:
   - Left: 4 accordion items (Success, Info, Danger, Warning)
     - Closed: #f9f9ff heading bg, black text, chevron icon
     - Open: #3898f8 heading bg, white text, rotated chevron
   - Right: background image with dark overlay + centered play button (video link)

9. **Brands** — Logo carousel strip on #f9f9ff:
   - 5+ logos, grayscale by default
   - Hover: grayscale(0) opacity(1)
   - Can implement as CSS-only marquee or simple flex row

10. **Blog** — 4-column grid, centered heading "Latest From Our Blog":
    - Each card: image (hover zoom), black date badge, h4 title, paragraph, bottom bar (heart + bubble icons with counts)
    - Hover: image scale(1.1), title turns #3898f8

11. **Footer** — Dark navy #04091e:
    - 3 columns: links list, newsletter (email + subscribe button), Instagram feed (3×3 grid)
    - Bottom row: copyright text + social icon squares (#111111 bg, #3898f8 hover)
    - MUST include Component Dock link

## Implementation Tasks

- [ ] Create `apps/polity/` from a simple existing app (copy + rename)
- [ ] Set up package.json, vite.config.ts, index.html with Poppins font link
- [ ] Create `src/index.css` with Tailwind v4 + theme tokens (#3898f8 primary, etc.)
- [ ] Build `Header.tsx` — top bar + nav with scroll effect
- [ ] Build `Hero.tsx` — fullscreen banner with overlay + CTA
- [ ] Build `Countdown.tsx` — split card with countdown timer logic
- [ ] Build `Services.tsx` — 3-column cards with hover effects
- [ ] Build `About.tsx` — split layout with CSS background + sub-services
- [ ] Build `Gallery.tsx` — masonry grid with hover opacity
- [ ] Build `Stats.tsx` — counters with animated count-up on scroll
- [ ] Build `Goals.tsx` — accordion + video play area
- [ ] Build `Brands.tsx` — logo carousel strip
- [ ] Build `Blog.tsx` — 4-column blog cards
- [ ] Build `Footer.tsx` — dark footer with newsletter + social + Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests for every component (100% coverage)
- [ ] Run `npm run verify:app -- polity`
- [ ] Commit, push, deploy

## Deviations from Source (planned)

- Replace Font Awesome + Linearicons with `lucide-react`
- Replace jQuery plugins (counterUp, owlCarousel, magnificPopup, niceSelect, accordion) with React equivalents or CSS-only
- Replace hardcoded ColorLib assets with picsum.photos placeholders
- Replace Colorlib footer attribution with Component Dock
- Countdown target date: make configurable (default: 30 days from now)
- Accordion: use native React state instead of jQuery mn-accordion
