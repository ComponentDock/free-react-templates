# Molarcraft (ColorLib Dentist) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-molarcraft`. Recreation name: **Molarcraft** (NEW
> name — the ColorLib source keeps its name "Dentist").

## Source mapping

- **ColorLib item:** "Dentist" (TEMPLATES.md line 1510; first unchecked `- [ ]` item).
- **Source URL:** https://colorlib.com/wp/template/dentist/
- **Preview URL — REACHABLE (verified 2026-09-18 by direct fetch):**
  **`https://preview.colorlib.com/theme/dentist/`** (HTTP 200, 708 lines).
- **Preview CSS:** `css/main.css` (minified, single line — tokens extracted below)
  + `css/linearicons.css`, `css/font-awesome.min.css`, `css/bootstrap.css`,
    `css/magnific-popup.css`, `css/nice-select.css`, `css/animate.min.css`,
    `css/owl.carousel.css`. Scripts: jQuery, Bootstrap, Owl Carousel,
    Magnific Popup, Superfish, ajaxchimp. Font: **Poppins** (Google Fonts,
    weights 300–700).

## Reference research (done — do not redo)

### Screenshot analysis

Browsed via the TEMPLATES.md screenshot URL:
`https://colorlib.com/wp/wp-content/uploads/sites/2/dentist-free-template-1.jpg`
(LINK TO PREVIEW FOR IMPLEMENTER: https://preview.colorlib.com/theme/dentist/)

Visual: Clean dental clinic design with a green brand palette. The hero
shows a dark overlay on a dental office photo with large white headline
text. A floating white card sits below the hero showing opening hours.
Below that are 4 service cards in a row, followed by a dark-background
"About" split section. Team members display on a light grey background
with hover effects. An appointment form uses dark navy with a split
layout. Blog posts and a comprehensive footer round out the page.

### Design tokens from live CSS (css/main.css)

```css
/* Brand */
selection: background #67bc00, color #fff
primary-btn / nav-bar / team-overlay: gradient linear-gradient(0deg, #ade600, #62b900)

/* Typography */
body: font-family "Poppins", sans-serif, size 14px, weight 300, color #777
h1–h6: font-family "Poppins", sans-serif, weight 600, color #222

/* Backgrounds */
banner-area: background-image url(../img/banner-bg.jpg), center, cover, fixed
banner overlay: rgba(4,9,30,0.85)
open-hour-wrap: background #fff, border-radius 10px, box-shadow 0 10px 30px rgba(0,0,0,0.05)
team-area: background #f9f9ff
appoinment-area: background #04091e
appoinment-area::after: background image, left 48%, cover

/* Buttons */
.primary-btn: line-height 42px, padding 0 30px, border-radius 25px, no border,
              gradient background, white text, weight 500
.genric-btn.primary: color #fff, background #67bc00, border transparent,
                     radius 0 (square, NO rounding)
.appoinment .primary-btn: border-radius 0, border 1px solid transparent

/* Open Hours */
.open-btn: background #f9f9ff, color #222, weight 600, padding 8px 30px
.circle: 10×10px, background #67bc00, border-radius 20px

/* Appointment form */
.appoinment-area .form-control: color #ccc, font-size 13px, border #505362,
                                border-radius 0, background transparent

/* Footer */
.footer-area: section-gap
.single-footer-widget h3: gradient text (#ade600 → #62b900, background-clip text)
.footer-social a:hover: gradient background
```

### Section order (from DOM)

```
header (#header)
  ├─ .header-top (phone + email links)
  └─ .main-menu (nav links + social icons)
banner-area (#home) — fullscreen hero with overlay
open-hour-area — floating card with schedule
service-area — 4 service cards
home-about-area — split: image + dark bg with features
testomial-area — testimonial carousel
team-area (#team) — 4 team cards with hover
feature-area — 2×3 feature grid with icons
appoinment-area — dark split with form
blog-area (#blog) — 4 blog cards
footer-area — 4-column footer
```

## Implementation tasks

### 1. Scaffold app
- [ ] Copy simplest existing app to `apps/molarcraft/`
- [ ] Rename package to `@free-react-templates/molarcraft`
- [ ] Update `public/CNAME` to `molarcraft.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://molarcraft.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### 2. Set up Tailwind theme tokens
- [ ] Add `@theme` block in `src/index.css` with brand green `#67bc00`,
      gradient colors `#ade600`/`#62b900`, dark navy `#04091e`, overlay
      `rgba(4,9,30,0.85)`, light bg `#f9f9ff`
- [ ] Add Poppins font via `<link>` in `index.html` (weights 300, 400, 500, 600, 700)
- [ ] Import lucide-react icons for features, Linearicons replacements

### 3. Header component
- [ ] Top bar: logo placeholder left, phone + email right
- [ ] Nav bar: green gradient background, links (Home, About, Services, etc.)
- [ ] Social icons in nav (Facebook, Twitter, Dribbble, Behance)
- [ ] Mobile hamburger menu

### 4. Hero banner
- [ ] Fullscreen section with picsum.photos/seed/molarcraft-hero background
- [ ] Dark overlay (rgba(4,9,30,0.85))
- [ ] White headline "Authentic Dental Service" (48px bold)
- [ ] Uppercase subheadline with letter-spacing
- [ ] Green gradient pill "Get Started" CTA button

### 5. Opening Hours card
- [ ] White card with 10px radius + box-shadow
- [ ] Margin-top: -100px to overlap hero
- [ ] "Opening Hours" title, "We are open Now" badge with green dot
- [ ] Two-column schedule: days | times

### 6. Services section
- [ ] Section heading "What we Offer to our Customers"
- [ ] 4-column grid: image + linked title + description per card
- [ ] Images: picsum.photos/seed/molarcraft-s1–s4

### 7. About section
- [ ] Split layout: image left, dark right
- [ ] White heading "Who we are to Serve the nation"
- [ ] 2 feature boxes: "Expert Services" + "Great Support" with lucide icons

### 8. Testimonials carousel
- [ ] Section heading "Feedback from our real clients"
- [ ] Circular avatar images (picsum.photos/seed/molarcraft-t1–t3)
- [ ] Quote text, name, role for each testimonial
- [ ] Auto-rotating carousel (use a simple state-based carousel)

### 9. Team section
- [ ] Light #f9f9ff background
- [ ] 4 team cards: image + hover overlay with gradient
- [ ] Hover reveals name + role on gradient overlay

### 10. Features section
- [ ] Section heading "Features that make us unique"
- [ ] 2×3 grid of feature items: lucide icon + title + description
- [ ] Items: 24/7 Emergency, Expert Consultation, X-Ray Service, Dental Science, Intensive Care, Family Planning

### 11. Appointment section
- [ ] Dark navy (#04091e) background
- [ ] Left side: background image (picsum.photos/seed/molarcraft-apt)
- [ ] Right side: form with fields (Patient Name, Phone, Email, DOB, Appointment Date, Message)
- [ ] Form styling: transparent bg, #ccc text, #505362 border, no radius
- [ ] "Confirm booking" button: no border-radius, transparent background

### 12. Blog section
- [ ] Section heading "Latest From Our Blog"
- [ ] 4 blog cards: image, date, linked title, excerpt, likes + comments meta

### 13. Footer
- [ ] 4-column layout: Top Products, Contact Us, Newsletter, Copyright
- [ ] Newsletter: email input + green "Subscribe" button
- [ ] Copyright links to Component Dock (not Colorlib)
- [ ] Social icons row

### 14. Responsive
- [ ] Mobile: hero text → 25px, grids → single column, hamburger nav
- [ ] Appointment: image hidden, form full-width
- [ ] Testimonials: single-card view

### 15. Tests & verification
- [ ] Write Vitest + RTL tests for each component
- [ ] Achieve 100% line/function/branch/statement coverage
- [ ] Run `npm run verify:app molarcraft` — must pass
- [ ] Ensure no Colorlib references in app code
- [ ] Footer links to https://www.componentdock.com/
