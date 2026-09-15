# Stark (ColorLib Whitespace) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-stark`. Recreation name: **Stark** (NEW name —
> the ColorLib source keeps its name "Whitespace").

## Source mapping

- **ColorLib item:** "Whitespace" (TEMPLATES.md line 1230; section
  "## Business" or similar). The `wp/template/whitespace/` slug appears
  in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/whitespace/
- **Preview URL — REACHABLE:** `https://preview.colorlib.com/theme/whitespace/`
  (verified 2026-09-15, 38KB HTML, `<title>Whitespace - Free Bootstrap 4 Template by Colorlib</title>`).
- **Preview CSS:** `css/style.css` (73KB, hand-written Bootstrap 4 overrides)
  + `css/bootstrap.min.css` + multiple plugin CSS (owl-carousel, animate, aos, magnific-popup).
  **Fonts:** Poppins (Google Fonts, inline @font-face from Cloudflare CDN, weights 300–900).
  **Scripts:** jQuery, Bootstrap, owl.carousel, aos, stellar.js, magnific-popup, counters.
  All JS libraries to be replaced with React equivalents; CSS tokens extracted.

## Reference research (done — do not redo)

### Screenshot analysis (whitespace-free-template.jpg, 1200×946 AVIF)

Browsed visually. The screenshot shows:
- **Navbar:** Dark background, white "Whitespace" brand text (bold, left), nav links (Home underlined, About, Work, Pricing, Blog, Contact) on the right
- **Hero:** Split layout — left 20% is solid black with white text ("WELCOME" subheading, large bold "We Help to Build You the Product", "Business Solution" subheading, "Get in touch" button with bottom-border accent); right 80% is a photo of a business team brainstorming around a table
- **About section:** Below hero — white background, "PROVIDING" subheading in cyan, "What We Can Do for You" heading, service list items with circular icons (Market Research, etc.) on the left, image on the right
- **Overall aesthetic:** Clean, corporate, dark-and-white contrast, cyan accents, generous whitespace, professional

### CSS token extraction

| Token | Value | Source |
|-------|-------|--------|
| Primary brand | `#78d5ef` (sky blue/cyan) | `.btn-primary` bg |
| Primary hover | `#56caeb` | `.btn-primary:hover` |
| Body text | `#212529` | `body` color |
| Muted text | `#6c757d` | Bootstrap muted |
| Hero bg (left) | `#000000` | `.hero-wrap` bg |
| Navbar bg | `#343a40` | Bootstrap `.bg-dark` |
| Counter parallax | background image | `images/bg_3.jpg` |
| Pricing bg | `#f8f9fa` | `.bg-light` |
| Footer bg | `#141313` | `.ftco-footer` bg |
| Font | Poppins (300–900) | Inline @font-face (Cloudflare) |
| Fallback font | Work Sans → system stack | Bootstrap default |
| Button radius | 0 (square) | Bootstrap default `.btn` |
| Subheading style | 14px, 600 weight, uppercase, 3px letter-spacing | `.hero-wrap .subheading` |

## Section order (from original HTML)

1. **Navbar** — dark bg, brand "Whitespace" → "Stark", 6 nav links
2. **Hero** — split: 20% black text panel + 80% image/video panel, 750px height
3. **About / Services (list)** — "What We Can Do for You" + 4 service items with icons
4. **Services (grid)** — 4 icon cards in a row (Business Strategy, Data Analysis, Graphic Design, Creative)
5. **Counter / Stats** — parallax bg image, "Interesting Facts", 4 stat counters with animated numbers
6. **Projects** — "Recent Projects", 6 project cards in a grid with images
7. **Testimonials** — owl-carousel with customer quotes, names, avatars
8. **Case Study** — 3 blog-style cards (image, date, author, comment count, title)
9. **Pricing** — 4 tiers (Free/$0, Startup/$19, Premium/$49, Pro/$79), feature lists, Get Started buttons
10. **Partners** — 5 logo images in a row
11. **Footer** — dark bg, 4 columns (brand+social, Useful Links, Quick Links, Contact info), Component Dock attribution

## Fidelity notes per section

### Navbar
- Dark bg, white brand text bold, white nav links
- Active link has yellow/gold underline (visible in screenshot for "Home")
- Mobile: hamburger toggler with "Menu" text
- **React:** Use `packages/ui` Navbar if available, or create `src/components/Navbar.tsx`

### Hero (split layout)
- Left panel: 20% width, solid black, white text
  - Subheading: "Welcome" — uppercase, 14px, 600 weight, cyan, 3px letter-spacing, with bottom border accent
  - H1: "We Help to Build You the Product" — large, white, bold
  - H2: "Business Solution" — white
  - CTA button: "Get in touch" — white text, bottom cyan border accent
- Right panel: 80% width, full-bleed background image (use `https://picsum.photos/seed/stark-hero/1200/750`)
- Total height: 750px
- **Key detail:** The left panel's `bg-after` pseudo-element creates a dark overlay extending to full width

### About / Services (list)
- Split: image right (60%), services list left (40%)
- Services: Market Research, Financial Services, Online Marketing, 24/7 Support
- Each has a circular icon (flaticon → replace with lucide-react) + heading + description
- Right-aligned text on desktop

### Services (grid)
- 4 equal-width columns with circular icon containers
- Items: Business Strategy, Data Analysis, Graphic Design, Creative
- Icons in rounded containers

### Counter / Stats
- Full-width parallax background image (use `https://picsum.photos/seed/stark-counter/1920/600`)
- 4 stats in a row: 2000 Done Works, 300 Happy Customers, 100 Coffee, 1000 Work Hours
- White large numbers (40px, 500 weight) with white labels
- Animated count-up on scroll (use intersection observer + state)

### Projects
- "Recent Projects" heading with "Projects" subheading
- 6 project cards in 2-col or 3-col grid
- Each card: background image with overlay, title "Branding & Illustration Design"
- Hover effect: image scales up

### Testimonials
- Owl-carousel replaced with React carousel
- Each slide: quote paragraph, customer name, avatar image
- Heading: "My satisfied customer says"

### Case Study
- 3 blog-style cards in a row
- Each: background image thumbnail, meta (date, author, comment count), title heading
- Use picsum for card images

### Pricing
- Light grey (`#f8f9fa`) background section
- 4 cards in a row: Free/$0, Startup/$19, Premium/$49, Pro/$79
- Each: plan name, price (superscript $), description, feature list, Get Started button
- Free tier: solid primary button; others: outline primary button

### Partners
- 5 partner logo images in a horizontal row
- Use placeholder logos or SVG text logos

### Footer
- Dark bg (`#141313`), 6em padding
- 4 columns: brand + social icons, Useful Links, Quick Links, Have a Questions?
- Social: Twitter, Facebook, Instagram (lucide-react icons)
- Contact: address, phone, email
- Must include Component Dock attribution link

## Implementation checklist

- [ ] Create `apps/stark/` (copy simplest existing app, rename package)
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Add Poppins to `index.html` via Google Fonts `<link>`
- [ ] Create `src/components/Navbar.tsx`
- [ ] Create `src/components/Hero.tsx`
- [ ] Create `src/components/AboutServices.tsx` (list variant)
- [ ] Create `src/components/ServicesGrid.tsx` (grid variant)
- [ ] Create `src/components/StatsCounter.tsx`
- [ ] Create `src/components/Projects.tsx`
- [ ] Create `src/components/Testimonials.tsx`
- [ ] Create `src/components/CaseStudy.tsx`
- [ ] Create `src/components/Pricing.tsx`
- [ ] Create `src/components/Partners.tsx`
- [ ] Create `src/components/Footer.tsx`
- [ ] Compose all sections in `src/App.tsx`
- [ ] Write tests (100% coverage)
- [ ] Add `public/CNAME` with `stark.free.componentdock.com`
- [ ] Run `npm install` at root to register workspace
- [ ] Run `scripts/verify-app.sh stark`
