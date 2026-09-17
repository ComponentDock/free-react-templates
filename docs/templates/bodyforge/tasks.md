# BodyForge (ColorLib Fitzone) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-bodyforge`. Recreation name: **BodyForge** (NEW name —
> the ColorLib source keeps its name "Fitzone").

## Source mapping

- **ColorLib item:** "Fitzone" (TEMPLATES.md line 1468; first `- [ ]` item in
  the F section). The slug `fitzone` appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/fitzone/
- **Preview URL — REACHABLE (verified 2026-09-19):**
  **`https://preview.colorlib.com/theme/fitzone/`**
  (HTTP 200, 25,166 bytes HTML).
- **Preview CSS:** `assets/css/style.css` (43,120 bytes — hand-written, Bootstrap 4
  grid only, no component framework). Also references:
  - `assets/css/animate-3.7.0.css` (WOW.js animations)
  - `assets/css/font-awesome-4.7.0.min.css` (FA icons — replace with lucide-react)
  - `assets/fonts/flat-icon/flaticon.css` (flat icons — replace with lucide)
  - `assets/css/bootstrap-4.1.3.min.css` (grid only — use Tailwind grid instead)
  - `assets/css/owl-carousel.min.css` (carousel — use React carousel/slider)
  - `assets/css/nice-select.css` (custom selects — use native or Radix)
- **Fonts:** Google Fonts — Roboto (400, 500, 700) + Rubik (400, 500, 700).
  Link: `https://fonts.googleapis.com/css?family=Roboto:400,500,700` and
  `https://fonts.googleapis.com/css?family=Rubik:400,500,700`.
- **Scripts (original):** jQuery 2.2.4, Bootstrap 4.1.3 JS, WOW.js, Owl Carousel,
  jQuery Nice Select. All replaced with React equivalents.

## Section-by-section design notes

### 1. Header/Navbar
- **Original:** White bg (`#fff`), rounded 5px corners, `margin: 0 5%`, position
  relative z-index 2. Logo left (col-lg-2), nav links right (col-lg-10) floated
  right. Links: uppercase Roboto 14px 600, dark `#222`, padding 15px each.
  Sub-menus: absolute positioned, `#f5f5f5` bg, hidden by default, visible on
  hover. "Book now" button: `.template-btn` class, `margin-left: 60px`.
  Mobile: hamburger bar (`.custom-navbar`) with 3 white spans on `#f61b55` bg,
  border-radius 3px.
- **Recreation:** Use a sticky `<nav>` with Tailwind flex. Use a mobile hamburger
  toggle (lucide Menu icon). Sub-menus as dropdown on hover (or click mobile).
  Footer links to Component Dock.

### 2. Banner/Hero
- **Original:** Full-width, background image (`banner-bg.jpg`), `#b0b0b0` fallback,
  `padding: 200px 0 180px`, `margin-top: -20px` (overlaps header slightly).
  Text positioned right (offset col-xl-6 offset-xl-6): "feel good" (h1, 150px,
  uppercase, white, Roboto 700, line-height 120px) + "breath" (h2, 90px, uppercase,
  white, Roboto 700). CTA "become a member" pink button with `margin-top: 30px`.
  Banner text has `padding-left: 100px`.
- **Recreation:** Use a full-width section with a dark background image
  (picsum.photos/seed/bodyforge-hero/1920/800), overlaid with a dark gradient
  for text readability. Two-column layout: left empty (image shows through),
  right has the headline + CTA. Responsive: stack on mobile.

### 3. About
- **Original:** White bg (default), `section-padding` (130px 0). Two columns:
  left (col-lg-6) with heading h3 "welcome to our best fitness club" (Rubik,
  uppercase, #222), two `<p>` paragraphs (#777), "learn more" pink button
  `margin-top: 16px`. Right (col-lg-5 offset-lg-1) with illustration image.
- **Recreation:** Flex/grid two columns. Heading uses Rubik. Paragraphs use
  Roboto #777. Image from picsum.photos/seed/bodyforge-about/600/500.

### 4. Featured Classes
- **Original:** `#f5f5f5` bg, centered heading h3 "featured classes". Three cards
  in `col-lg-4 col-md-6` grid. Each `.single-feature`: image with `.hover-state`
  overlay (dark `rgba(1,2,12,0.7)`, centered `.template-btn` "details" with
  white bg/transparent hover). Below: white footer card with `padding: 30px 40px`,
  shadow on hover (`0 10px 20px rgba(0,0,0,0.1)`), title h5 (Rubik uppercase #222)
  + paragraph (#777).
- **Recreation:** Tailwind grid (3 cols desktop, 2 tablet, 1 mobile). Each card:
  image container with absolute overlay on hover (group-hover). Footer card
  white bg with shadow transition. Images: picsum.photos/seed/bodyforge-class-{1,2,3}/600/400.

### 5. Our Service
- **Original:** Background image (`service-bg.jpg`), `#b0b0b0` fallback, right
  50% has blue semi-transparent overlay `rgba(108,174,255,0.2)` via `::after`
  pseudo-element. Content in right-offset columns (col-xl-5 offset-xl-7). Heading
  h3 "our service" (white, Rubik). Three service items: each has an icon image
  (`serv-icon{1,2,3}.png`) + h5 title (white, Rubik) + paragraph (white/white).
  Items use flex with icon left, text right.
- **Recreation:** Background image section with dark overlay. Right-aligned content
  column. Icons from lucide-react (Dumbbell, Boxing, Heart or similar). White text.
  Placeholder bg: picsum.photos/seed/bodyforge-service/1920/800.

### 6. Our Fitness Coaches
- **Original:** White bg, centered heading h3 "our fitness coaches". Four cards
  `col-lg-3 col-sm-6`. Each `.single-coaches`: image (`.coaches-img`) with hover
  overlay showing social icons (Facebook, Twitter, LinkedIn) vertically on RIGHT
  side (absolute, right 20px, translateY -50%). Icons: white on `rgba(255,255,255,0.3)`
  circles, hover turns pink `#f61b55`. Below image: `.coaches-footer` card
  (`#f5f5f5` bg, `padding: 40px 30px 30px`, `margin: -50px 10% 0` — overlaps
  image), title h5 (uppercase, `#222` → `#f61b55` on hover) + h6 specialty
  (#777). Card shadow on hover.
- **Recreation:** Grid of 4 coach cards. Each: image with group-hover overlay
  showing social icons. Below: overlapping card with name + specialty.
  Images: picsum.photos/seed/bodyforge-coach-{1,2,3,4}/400/500.

### 7. Discount/Newsletter
- **Original:** Background image (`discount-bg.jpg`), `#b0b0b0` fallback, centered
  text. h3 "25% discount" (white, "discount" span in pink `#f61b55`), h4 subtitle
  (white, Rubik 200). Form: email input (360px wide, `border-radius: 3px`,
  `padding: 13px 20px`) + "subscribe" pink button.
- **Recreation:** Background image section with overlay. Centered form layout.
  Input with rounded corners, pink submit button. Placeholder bg:
  picsum.photos/seed/bodyforge-discount/1920/600.

### 8. BMI Calculator
- **Original:** `#f5f5f5` bg, two columns. Left: heading h3 "calculate your bmi"
  (Rubik), paragraph, form with fields: age, weight, height, gender (all text
  inputs, `padding: 13px 20px`, no border), readonly BMI output field, "What is
  bmi" submit button (`.template-btn`). Right: illustration image (`bmi.png`).
  Form groups are 30% width floated left with 3% margin-right.
- **Recreation:** Two-column layout. Left: interactive BMI form with controlled
  inputs. On submit, calculate BMI = weight(kg) / height(m)^2 and display in
  readonly field. Right: placeholder illustration. Use form state management
  with React useState.

### 9. Client Testimonials
- **Original:** White bg, centered heading h3 "happy client says". Owl Carousel
  of slides. Each `.single-slide`: flex with circular photo (70px, border-radius
  50%) on left + text (quote `#777`, name h5 `#222`, title h6 `#777`) on right.
  Card: `#f5f5f5` bg, `padding: 30px 20px`, margin 0 5px 20px. Hover: white bg
  + shadow.
- **Recreation:** Use a simple React carousel/slider (CSS scroll-snap or a
  lightweight library). 2–3 testimonial cards. Circular avatar images from
  picsum.photos.

### 10. Friend/CTA Area
- **Original:** Background image (`frined-bg.jpg` — note: misspelling in original),
  `#b0b0b0` fallback, centered text. h3 "your gym" (white, Rubik), "become a
  member" pink button.
- **Recreation:** Simple background image section with dark overlay, centered
  heading + CTA button. Placeholder bg: picsum.photos/seed/bodyforge-cta/1920/500.

### 11. Footer
- **Original:** `#f5f5f5` bg (default) or `#080b1c` dark (contact page variant).
  Three widget columns: About Us (text), Contact Us (address + phone numbers
  in pink `.span-style`), Newsletter (email input + arrow button, input has
  `border-radius: 5px`). Bottom bar: copyright text + social icons (Facebook,
  Twitter, Dribbble, Behance) in dark circles with pink hover.
- **Recreation:** Light gray footer with 3 columns. Replace Colorlib copyright
  with "Made with Component Dock" + link to https://www.componentdock.com/.
  Social icons from lucide-react. Newsletter email input (non-functional, just
  UI).

## Implementation order

1. Scaffold `apps/bodyforge/` from simplest existing app, rename package
2. Set up index.css with Tailwind + @theme tokens (brand color, fonts)
3. Build sections top-to-bottom: Header → Banner → About → Featured Classes →
   Service → Coaches → Discount → BMI → Testimonials → CTA → Footer
4. Each section: component file + colocated test file
5. App.tsx composes all sections
6. Run `npm run verify:app bodyforge` for full local gate
7. Update TEMPLATES.md status, commit, push
