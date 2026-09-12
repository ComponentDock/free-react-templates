# Hrforge (ColorLib Humanresources) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-hrforge`. Recreation name: **Hrforge** (NEW name —
> the ColorLib source keeps its name "Humanresources").

## Source mapping

- **ColorLib item:** "Humanresources" (TEMPLATES.md line 1047; first `- [ ]` item).
- **Source URL:** https://colorlib.com/wp/template/humanresources/
- **Preview URL:** https://preview.colorlib.com/theme/humanresources/
  (reachable, verified 2026-09-12 — 541-line HTML, CSS at `css/style.css`).
- **Preview CSS:** `css/style.css` (132K+ chars — includes full Bootstrap 4
  bundle + theme styles). Bootstrap variables are overridden in `:root` and
  theme-specific classes. Font loaded via Google Fonts: Work Sans 300/400/700.
- **Screenshot:** `humanresources-free-template.jpg` — professional HR agency
  layout, blue brand on white, clean corporate aesthetic.

## Reference research (done — do not redo)

### Screenshot analysis

The template presents a clean corporate HR agency website with:
- Blue (#0389FF) navbar (transparent on desktop overlaying the hero)
- Full-width hero with a cityscape/office background image, dark overlay,
  white heading and text
- Three white feature cards overlapping the hero bottom with soft shadows
- Two-column section: image carousel (left) + accordion FAQ (right)
- Light-grey counter strip with 3 animated stats in blue
- Team section with 3 photo cards that reveal bios on hover
- Testimonial carousel with centered quotes
- 6-service grid on light background with a black CTA button
- Asymmetric blog thumbnail grid (1/3 + 2/3 then reversed)
- Multi-column footer with links and social icons

Overall aesthetic: corporate-professional, clean, spacious, modern.

### CSS token extraction

**Brand colors:**
- Primary: `#0389FF` (buttons, links, counters, accordion active, mobile navbar)
- Hover: `#0075dc` / `#36a1ff`
- Black: `#000` (headings, btn-black, body links)
- Body text: `#999999`
- Light bg: `#f8f9fa` (counter, services, footer)
- Footer headings: `#cccccc`

**Typography:**
- Family: `"Work Sans", arial, sans-serif` (Google Fonts, weights 300/400/700)
- Body: 15px, line-height 1.8
- Headings: inherit family, 500 weight, `#000`
- Lead: 18px, weight 300

**Buttons:**
- All: border-radius 0, text-transform uppercase, 14px, letter-spacing 0.1em
- Primary: `#0389FF` bg, white text, hover → `#36a1ff`
- Black: `#000` bg, white text
- Large: padding 0.5rem 1rem, 1.25rem font

**Layout:**
- Container: Bootstrap 4 max-widths (540/720/960/1140px)
- Section padding: 7em 0
- Hero: min-height 800px, bg-cover, overlay rgba(0,0,0,0.3)
- Overlap cards: absolute position -200px top, white bg, shadow 0 15px 30px 0 rgba(0,0,0,0.1)

**Components:**
- Navbar: transparent on desktop (absolute), #0389FF on mobile
- Accordion: border-left 30px solid #f8f9fa on body, plus/minus icon swap via icomoon
- Staff cards: 400px height, bg-cover, white info card overlays bottom, expands on hover
- Blog thumbnails: 500px height, 1/3 + 2/3 split grid, dark overlay on hover
- Counter: 50px #0389FF number, uppercase label with opacity 0.5

## Section-by-section design notes

### 1. Navbar
- Desktop (>768px): absolute position, transparent bg, white text/logo
- Mobile (<768px): #0389FF solid bg, hamburger toggle
- Logo: text link "Hrforge" (22px, white)
- Nav items: Home, About, Services (with 3-level dropdown), Blog, Contact
- Dropdowns: white bg, box-shadow 0px 1px 2px 0 rgba(0,0,0,0.2), border-radius 4px
- Dropdown font: 14px, #999999, hover → #000
- Mobile menu: #595959 bg, full-width white links
- Replace: use lucide-react icons for hamburger; no icomoon dependency

### 2. Hero / Cover
- Full-width background image (use picsum.photos/seed/hrforge-hero/1920/800)
- Dark overlay: rgba(0,0,0,0.3) via ::before pseudo
- Content aligned to left half (col-lg-6, order-lg-1)
- Heading: "We Are Your Partners in Human Resource" (50px desktop, 30px mobile, white)
- Lead paragraph: 18px white, lorem ipsum style
- CTA row: "Get Started" btn-primary (py-3 px-4) + "Learn More" text link (white)

### 3. Overlap Feature Cards
- 3 cards in a row (col-md-4 each), overlapping hero by ~200px (margin-top: -200px)
- White bg, padding 30px, shadow 0 15px 30px 0 rgba(0,0,0,0.1)
- Each: icon (img 70px) + h3 title (h5, 18px) + description + "Learn More" link
- Cards: "Corporate Collaboration", "Strategic Partners", "Infinite Posibilities"
- Icons: use lucide-react equivalents (Users, Handshake, Sparkles or similar)

### 4. Our Agency + Why Us
- Two columns: col-lg-7 (left) + col-lg-5 (right)
- Left: "Our Agency" heading + owl-carousel with 3 images → use a simple React
  carousel or static image stack (simplify: 3 picsum images)
- Right: "Why Us?" heading + 4-item accordion
- Accordion behavior: only one open at a time, active heading turns #0389FF
- Accordion body: left border 30px solid #f8f9fa, padding 10px 30px
- Accordion items: "Provident alias", "Debitis ad similique tempore",
  "Lorem ipsum dolor sit amet", "Modi natus suscipit"

### 5. Counter Section
- Full-width #f8f9fa bg, py-5
- 3 counters in a row (col-md each)
- Each: number (50px, #0389FF, animated count-up) + label (uppercase, black, opacity 0.5)
- Stats: 99399 Clients, 199 Personnel, 24 Years Experience
- Animation: count from 0 to target on scroll into view (use Intersection Observer)

### 6. Leadership Team
- "The Leadership" heading, centered
- 3 staff cards in a row (col-lg-4)
- Each: 400px height, background image (use picsum.photos/seed/hrforge-person-N)
- White info card at bottom: name (h3, 20px uppercase), title (14px, #b3b3b3), bio paragraph
- Default: 105px card height, bio hidden (opacity 0)
- Hover: card expands to 210px, bio fades in (opacity 1)
- Staff: "Bob Miller" (CEO), "Jean Smith" (CEO), "David Wilson" (CEO)

### 7. Testimonials
- "Happy Customers" heading, centered
- Large quote mark ("100px, black, centered)
- Centered carousel with 3 testimonial slides
- Each: blockquote with quote text (18px, black, line-height 2) + cite
- Simplify: use React state carousel with prev/next (no owl-carousel dependency)

### 8. Our Services
- #f8f9fa bg
- "Our Services" heading, centered
- 6 service cards in 3-column grid (2 rows, col-md-4)
- Each: icon (img 70px, centered), title (h5), description
- Cards: "Regular Update", "Infinite Posibilities", "Good Security",
  "HR Management", "Intuitive Thinking", "Play Video"
- "More Features" button: btn-black (py-3 px-4), centered below grid
- Icons: use lucide-react (RefreshCw, Infinity, Shield, Users, Lightbulb, Play)

### 9. Blog Thumbnails
- "Our Blog" heading + subtitle paragraph, centered
- Row 1: 1/3 (small) + 2/3 (large) — flex children with appropriate widths
- Row 2: 2/3 (large) + 1/3 (small) — reversed
- Each: 500px height, bg-cover, dark overlay (opacity 0.1 default, 0.5 on hover)
- Title (22px white) + post metadata (date + author), positioned at top
- Content fades in on hover (opacity 0→1, top 50px→20px)
- Blog posts: "When she reached the first", "Duden flows by their place",
  "Italic Mountains", "Behind the word mountains"

### 10. Footer
- #f8f9fa bg, section padding 7em 0
- Row 1: col-md-4 (About text) + col-md-8 (3 link columns + social)
- "About" column: heading + description paragraph
- Link columns (col-md-3 each): "Learn More", "Support", "About Us" with 4 links each
- "Connect With Us": social media icon links (use lucide-react: Twitter, Facebook, Instagram, LinkedIn)
- Footer MUST link https://www.componentdock.com/ ("Component Dock")

## Implementation tasks

1. **Copy scaffold** from simplest existing app, rename package to
   `@free-react-templates/hrforge`
2. **Create `src/index.css`** with Tailwind v4.3 entry + `@theme` tokens:
   --color-brand: #0389FF, --color-brand-hover: #0075dc
3. **Build `src/App.tsx`** composing all 10 section components
4. **Build components in order:**
   - `Navbar.tsx` — transparent desktop / solid mobile, hamburger toggle, dropdown
   - `Hero.tsx` — bg image, overlay, heading, lead, CTA buttons
   - `OverlapFeatures.tsx` — 3 overlapping cards with icons
   - `AgencyFaq.tsx` — two-column: carousel + accordion
   - `Counter.tsx` — 3 animated stat counters with Intersection Observer
   - `Team.tsx` — 3 staff cards with hover-expand
   - `Testimonials.tsx` — quote carousel (React state, no jQuery)
   - `Services.tsx` — 6-card grid + CTA button
   - `BlogThumbnails.tsx` — asymmetric 4-card grid with hover effects
   - `Footer.tsx` — multi-column with Component Dock link
5. **Write tests** for each component (Vitest + Testing Library, 100% coverage)
6. **Run `npm run verify:app hrforge`** — typecheck + lint + tests + build
7. **Commit** as `feat: add Hrforge template (ColorLib Humanresources)`
