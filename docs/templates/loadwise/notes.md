# Loadwise — Implementation Tasks & Design Notes

## Tasks / Todo Outline

### Phase 1: Scaffold & Configuration

- [ ] Create `apps/loadwise` from template (copy simplest existing app like `apps/aurora`)
- [ ] Rename package.json to `@free-react-templates/loadwise`
- [ ] Update `vite.config.ts` with `injectUiSource()` helper
- [ ] Add `public/CNAME` → `loadwise.free.componentdock.com`
- [ ] Set `homepage` in package.json → `https://loadwise.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in package-lock.json
- [ ] Verify `grep -c "free-react-templates/loadwise" package-lock.json` returns > 0

### Phase 2: Design Tokens & Global Styles

- [ ] Add Tailwind `@theme` tokens in `src/index.css` matching spec:
  - Colors: brand-primary (#F02930), brand-primary-hover (#db2228), brand-dark (#232F55), brand-light (#7EA0FF), bg-light (#F1FBFF), text-muted (#635c5c), text-light (#A2A6B2), border-light (#eceff8), border-input (#eaeaea)
  - Font family: Raleway (via Google Fonts link in index.html)
  - Spacing: section-padding scale, hero heights
  - Border radius: none (0), sm (5px), pill (25px), circle (50%)
  - Shadows: sticky, backtop, submenu
  - Transitions: base, btn
- [ ] Add Google Fonts `<link>` for Raleway (weights 200-900) in `index.html`

### Phase 3: Shared UI Components (if not existing)

- [ ] Button variants: Primary (btn), Border (border-btn), Header (header-btn2), Hero (hero-btn), Submit (submit-btn, submit-btn2), Boxed (boxed-btn)
- [ ] NiceSelect wrapper (radius 25px, custom arrow)
- [ ] Checkbox/Radio styled (primary-checkbox, primary-radio patterns)
- [ ] Slider/Carousel component (for hero, testimonials)
- [ ] Icon components from lucide-react (replace FontAwesome/themify)

### Phase 4: Section Components (in order)

- [ ] **Navbar** (`src/components/Navbar.tsx`)
  - Sticky header with dual logo (main + sticky)
  - Nav links: Home, Services (dropdown), About, Blog (dropdown), Contact
  - Social icons: FB, IG, LinkedIn with hover Y-rotation
  - "Get Free Quote" CTA button (header-btn2)
  - Mobile hamburger menu
  - Scroll → sticky with logo swap + shadow
- [ ] **Hero** (`src/components/Hero.tsx`)
  - 3-slide carousel with prev/next arrows
  - Split panels: left (brand-primary bg) + right (white bg)
  - Left: h1 "Give your business a flow" (weight 900), border-btn "Our Services"
  - Right: icon + h2 "Transport quality and excellence to enhance your business" (weight 700)
  - Unique background image per slide (picsum seeds: loadwise-hero-1/2/3)
  - Gradient overlay (hero-overly1::before)
  - Responsive heights per breakpoint
- [ ] **Services** (`src/components/Services.tsx`)
  - Section title "Our Services" (centered, h2 weight 700)
  - 3 cards in grid: image, numbered heading (h3), description
  - Card headings as links
  - Images: picsum seeds loadwise-service-1/2/3
- [ ] **Solutions** (`src/components/Solutions.tsx`)
  - Heading "We have a wide range of solutions for your business"
  - "Learn More" link
  - 2 feature boxes: icon + h3 + description
  - Icons: lucide (Tracking → Truck/Search, Warehouses → Warehouse/Box)
- [ ] **Control** (`src/components/Control.tsx`)
  - Headline "We give you complete control of your shipments"
  - 2 "Logistic Solution" blocks: h3, description, "Learn More" link with arrow icon (ChevronRight)
- [ ] **QuoteForm** (`src/components/QuoteForm.tsx`)
  - Heading "Get free quote"
  - Phone link `tel:+10782673565`
  - Form with 13 text inputs + 3 checkboxes (Air Freight pre-checked)
  - Grid layout per original (col-lg-4, col-lg-2, etc.)
  - "Request Quote" button (submit-btn2)
  - Form validation (zod + react-hook-form)
- [ ] **Video** (`src/components/Video.tsx`)
  - Background image (picsum seed loadwise-video)
  - Centered play button → YouTube lightbox (https://www.youtube.com/watch?v=up68UAfH0d0)
- [ ] **Testimonials** (`src/components/Testimonials.tsx`)
  - Section title "Client Testimonial"
  - 2-slide carousel with prev/next
  - Each: quote paragraph, author image (picsum seed loadwise-testimonial), name "Jacson Miller", role "Designer @Colorlib"
- [ ] **MapAddress** (`src/components/MapAddress.tsx`)
  - Google Maps iframe (Burj Khalifa embed URL)
  - Address card: NYC address, phone, email, hours (Mon-Fri 9-19, closed weekends)
- [ ] **Footer** (`src/components/Footer.tsx`)
  - Logo (footer version)
  - Description paragraph
  - 4 social icons: FB, IG, Twitter, Pinterest
  - Quick links column (5 links)
  - Company column (4 links)
  - Copyright: "© {year} Loadwise. Made with Component Dock" → links to https://www.componentdock.com/

### Phase 5: App Composition & Routing

- [ ] `src/App.tsx` composes all sections in order
- [ ] Single-page layout (all sections on one page)
- [ ] Smooth scroll for anchor links

### Phase 6: Tests (TDD — write first)

- [ ] Navbar tests: renders, sticky behavior, mobile menu, social hover
- [ ] Hero tests: 3 slides, content, navigation, responsive heights
- [ ] Services tests: 3 cards, content, images
- [ ] Solutions tests: heading, feature boxes
- [ ] Control tests: headline, 2 blocks
- [ ] QuoteForm tests: all fields, validation, submission
- [ ] Video tests: play button, lightbox trigger
- [ ] Testimonials tests: 2 slides, content, navigation
- [ ] MapAddress tests: iframe, address data
- [ ] Footer tests: all columns, Component Dock link
- [ ] Design token tests: colors, fonts, radii, spacing match spec
- [ ] Responsive tests: mobile breakpoints

### Phase 7: Verification & Polish

- [ ] Run `npm run verify:app loadwise` (typecheck + lint + test:coverage + build + knip + fallow)
- [ ] Fix any failures
- [ ] Visual QA in browser (mobile + desktop)
- [ ] Update TEMPLATES.md: `[ ]` → `[x]` with demo URL
- [ ] Run `npm run readme:status`
- [ ] Commit + push

---

## Design Notes — Section-by-Section Fidelity

### Header / Navbar

- **Sticky behavior**: Original uses `.header-sticky.sticky-bar` with JS adding `.sticky` class on scroll. Implement with `position: sticky; top: 0` + `z-index: 9999` + scroll listener for logo swap.
- **Dual logo**: Two `<img>` elements (logo + logo2), toggle visibility via CSS `.sticky .logo { display: none } .sticky .logo2 { display: block }`.
- **Nav links**: Padding `28px 22px` (desktop), `20px` (sticky), font-weight 600, color `#1D2547` (≈ brand-dark), hover → `#F02930`.
- **Submenus**: Absolute positioned, width 170px, white bg, top border `3px solid #F02930`, border-radius `5px 5px 0 0`, box-shadow, animated opacity/visibility.
- **Social icons**: Color `#A2A6B2`, hover → `#F02930` + `transform: rotateY(180deg)`.
- **Get Free Quote button**: `.header-btn2` — padding `25px 30px`, brand-primary bg, no radius, white text.

### Hero Slider

- **Structure**: `.slider-area` → `.slider-active` (carousel) → 3× `.single-slider.hero-overly1.slider-height.d-flex.align-items-center.slider-bg{N}`
- **Split panels**: Left `.hero-caption-left` (h: 437px, brand-primary bg, padding 79/20/78/45), Right `.hero-caption-right` (h: 437px, white bg, padding 122/70/20/38, margin-left: -24px)
- **Typography**: Left h1: 50px (60px on 1200-1400), weight 900, white, line-height 1.2. Right h2: 34px (29px/26px/22px), weight 700.
- **Button**: `.border-btn.hero-btn` — border white, white text, padding `18px 52px`, hover → white bg, brand-primary text.
- **Backgrounds**: 3 images (slider-bg1/2/3) — use picsum with deterministic seeds.
- **Overlay**: `::before` gradient on `.hero-overly1` — complex multi-stop gradient fading from rgba(139,129,129,0.4) to transparent at 21%.
- **Arrows**: FontAwesome chevrons (use lucide ChevronLeft/Right), positioned absolute left/right.

### Services Section

- **Padding**: `.section-padding` — 120px/100px desktop.
- **Title**: `.section-tittle` — h2 44px (responsive down to 24px), weight 700, centered, mb-22.
- **Cards**: `.properties` → `.properties-card` → `.properties-img` (link + img) + `.properties-caption` (h3 with `<span>01. </span>` + link, p).
- **Grid**: 3 columns lg/md, stacked sm.
- **Images**: services1/2/3.jpg → picsum seeds.

### Solutions Section

- **Continuation of services area** (same section-padding).
- **Heading**: Same section-tittle style.
- **Learn More**: `.more-btn` — color `#F1FBFF`, hover letter-spacing, icon rotate 45deg.
- **Feature boxes**: Side-by-side, each with icon image + h3 (link) + p.
- **Icons**: Original uses images (assets/img/icon/...). Use lucide icons instead.

### Control / About Section

- **Background**: Appears to be a light section (possibly `.gray-bg` / `#F1FBFF`).
- **Headline**: h2 "We give you complete control of your shipments" — split across lines in HTML.
- **Solution blocks**: Two `.col-lg-6` columns, each with h3 "Logistic Solution", p, link "Learn More " (themify icon → lucide ChevronRight).

### Quote Form

- **Section**: `.quote-form-area.section-padding` with `.gray-bg`.
- **Form layout**: Complex bootstrap grid:
  - Row 1: 3 checkboxes (col-lg-4 each) — Ocean Freight, Air Freight (checked), Land Transport
  - Row 2: 3 inputs (col-lg-4) — Cargo Type, Country of Origin, Destination
  - Row 3: 6 inputs (col-lg-2) — QTY, Weight, Width, Height, Length (typo "LEIGHT"), [empty?]
  - Row 4: 3 inputs (col-lg-4) — Name, E-Mail, Phone
  - Submit: col-lg-12, `.submit-btn2` — h: 50px, padding `10px 36px`, brand-primary, no radius.
- **Inputs**: Border `#eaeaea`, height 50px, nice-select style for dropdowns (but these are text inputs).
- **Labels**: Uppercase, above inputs.

### Video Section

- **Class**: `.video-area.section-img-bg.d-flex.align-items-center` with `data-background` attr.
- **Play button**: `.video-icon` → `.popup-video.btn-icon` → `<i class="fas fa-play">` (use lucide Play).
- **YouTube URL**: `https://www.youtube.com/watch?v=up68UAfH0d0`
- **Background**: video-bg.jpg → picsum seed.

### Testimonials

- **Section**: `.testimonial-area.section-bg1` (bg: `#F1FBFF`?).
- **Slider**: `.h1-testimonial-active` (owl-carousel/slick).
- **Single**: `.single-testimonial.text-center` → `.testimonial-caption` (p), `.testimonial-founder.d-flex` → `.founder-img` (img) + `.founder-text` (span name, p role).
- **Arrows**: Custom buttons with themify icons (use lucide ChevronLeft/Right).

### Map & Address

- **Map**: `.map-are` → iframe (Google Maps embed, Burj Khalifa). Width 100%, height 448px.
- **Address overlay**: `.map` → `.container` → `.row.justify-content-end` → `.col-xl-3.col-lg-4` → `.address` → h3 "Address" + `.address-info ul` with 5 lis.

### Footer

- **Padding**: `.footer-padding` — 80px top, 0 bottom.
- **Layout**: 3 columns (5/2/2 with offsets).
- **Col 1**: Logo, description, 4 social icons (FB, IG, Twitter, Pinterest) — hover rotateY(180deg).
- **Col 2**: "Quick links" — 5 links.
- **Col 3**: "Company" — 4 links.
- **Bottom**: `.footer-bottom-area` → `.footer-border` → copyright centered.
- **Copyright**: Original: `Copyright ©{year} All rights reserved | This template is made with <i class="fa fa-heart color-danger"></i> by <a href="https://colorlib.com">Colorlib</a>`
- **MUST CHANGE**: Replace with `© {year} Loadwise. Made with <ComponentDockIcon> <a href="https://www.componentdock.com/">Component Dock</a>`

### Responsive Breakpoints (from CSS)

- **1200-1600px**: Large desktop adjustments
- **992-1199px**: Standard desktop
- **768-991px**: Tablet (header padding changes, hero height 600px)
- **576-767px**: Small tablet (hero height 500px, hero panels stacked)
- **<576px**: Mobile (hero height 750px, header padding 15px, hero panels stacked, mobile menu)

### Placeholder Image Seeds (picsum.photos)

| Usage                | Seed                                | Dimensions |
| -------------------- | ----------------------------------- | ---------- |
| Hero slide 1         | `loadwise-hero-1`                   | 1920×850   |
| Hero slide 2         | `loadwise-hero-2`                   | 1920×850   |
| Hero slide 3         | `loadwise-hero-3`                   | 1920×850   |
| Service 1 (Air)      | `loadwise-service-1`                | 600×400    |
| Service 2 (Logistic) | `loadwise-service-2`                | 600×400    |
| Service 3 (Ground)   | `loadwise-service-3`                | 600×400    |
| Video background     | `loadwise-video`                    | 1920×600   |
| Testimonial author   | `loadwise-testimonial`              | 100×100    |
| Feature icons        | Use lucide-react (no images needed) |

---

## Implementation Gotchas

1. **Hero overlay gradient** — The original uses a complex 22-stop gradient. In Tailwind, approximate with `bg-gradient-to-b from-[rgba(139,129,129,0.4)] via-transparent to-transparent` or use a custom CSS variable.

2. **Slider implementation** — Use a lightweight carousel (embla-carousel-react or custom) rather than owl/slick. Keep prev/next buttons accessible.

3. **Nice-select replacement** — The form uses `.nice-select` for dropdowns but all quote form fields are text inputs. Only need custom styled select if any dropdowns exist (none in quote form).

4. **Checkbox styling** — Original uses custom checkboxes with labels. Implement with accessible native checkbox + custom styled label (peer-checked pattern).

5. **Google Maps iframe** — Use the exact embed URL from preview. Note: may need `allowfullscreen`, `loading="lazy"`, `referrerpolicy="no-referrer-when-downgrade"`.

6. **YouTube lightbox** — Use a simple modal/dialog with iframe, or link directly to YouTube (original uses magnific-popup). Keep it simple: open in new tab or lightbox.

7. **Mobile menu** — Original uses slicknav. Implement with React state + CSS (slide-down/overlay).

8. **Sticky header logo swap** — Use `IntersectionObserver` or scroll listener to toggle `.sticky` class on header.

9. **Font loading** — Add `<link rel="preconnect" href="https://fonts.googleapis.com">` + `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` + Google Fonts link for Raleway.

10. **Component Dock footer link** — Critical: NO colorlib.com references anywhere in app code. Footer must link to https://www.componentdock.com/ with "Component Dock" branding.
