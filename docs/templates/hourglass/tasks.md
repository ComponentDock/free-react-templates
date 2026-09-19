# Hourglass (ColorLib Watch) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-hourglass`. Recreation name: **Hourglass** (NEW name
> — the ColorLib source keeps its name "Watch").

## Source mapping

- **ColorLib item:** "Watch" (TEMPLATES.md line 1612; section
  "## Watch / Ecommerce (remaining)" near the end of the Ecommerce section).
- **Source URL:** https://colorlib.com/wp/template/watch/
- **Preview URL — REACHABLE (verified 2026-09-19 by curl):**
  **`https://preview.colorlib.com/theme/watch/`**
  (HTTP 200, full HTML returned with all sections rendered).
- **Preview CSS:** `css/main.css` (Bootstrap-based with custom styles).
  Also loads: `css/linearicons.css`, `css/font-awesome.min.css`,
  `css/bootstrap.css`, `css/magnific-popup.css`, `css/nice-select.css`,
  `css/animate.min.css`, `css/owl.carousel.css`. Fonts: Poppins (Google
  Fonts, weights 100–700). Icons: Linearicons (`.lnr-*`) + Font Awesome
  (`.fa-star`, `.fa-facebook`, etc.) — REPLACE with lucide-react.

## Reference research (done — do not redo)

### Live preview structure (2026-09-19)

**Sections in order:**
1. `<header id="header">` — Navbar: logo left, nav-menu right (Home, About,
   Service, Unique Feature, Review, FAQ, Pages dropdown with Generic/Elements).
   Menu-active class on Home link.
2. `<section class="banner-area" id="home">` — Full-screen hero with
   background image (`img/header-bg.png`). Centered white text: h5 subtitle
   "Now you can feel the Heat" (uppercase), h1 "Smart New Future", white
   `.primary-btn` "Buy Now" (pill shape, border-radius 25px).
3. `<section class="video-sec-area section-gap" id="about">` — Split layout.
   Left: h6 "Brand new app to blow your mind", h1 "We've made a life that
   will change you", two `<p>` descriptions, dark `.primary-btn` "Get Started
   now". Right: video thumbnail with `.overlay.overlay-bg` + `.play-btn`
   (YouTube link).
4. `<section class="top-course-area section-gap">` — Centered title h1 "Top
   Courses That are open for Students" + subtitle. 4 `.single-course` cards
   (2 left col-lg-3, center image col-lg-6, 2 right col-lg-3). Each card:
   Linearicons icon + h4 title link + `<p>` description. All titles are
   "High Performance" (placeholder).
5. `<section class="home-about-area">` — Full-width split (no section-gap).
   Left col-lg-6: image (`img/about-img.jpg`). Right col-lg-6: h1 "Globally
   Connected by Large Network", `<span>` subtitle, `<p>` description, dark
   `.primary-btn` "get details".
6. `<section class="service-area section-gap" id="service">` — Centered title
   h1 "Some Features that Made us Unique" + subtitle. 3 `.single-service`
   cards (col-lg-4 col-md-6). Each: Linearicons icon + h4 title + `<p>`
   description.
7. `<section class="unique-feature-area section-gap" id="unique">` — Dark/
   colored background. White text title. 4 `.single-unique-product` cards
   (col-lg-3 col-md-6). Each: product image (img/u1–u4.jpg), `.desc` with
   h4 name "Apple Watch White", h6 price "£399.00", `.primary-btn` "Pre Order".
8. `<section class="review-area section-gap" id="review">` — Centered title.
   7 `.single-review` cards in 3-col grid (col-lg-4 col-md-6). Each: h4
   reviewer name, `<p>` review text, `.star` div with 5 Font Awesome stars
   (checked = filled). Names: Cody Hines, Chad Herrera, Andre Gonzalez,
   Jon Banks, Landon Houston, Nelle Wade, (7th).
9. `<section class="faq-area section-gap" id="faq">` — Centered title
   "Frequently Asked Questions". Left col-lg-6: Bootstrap accordion with 4
   `.card` items. Each: `.card-header` with gradient background (blue→cyan),
   button with question text, `.collapse` body with answer text. Questions:
   "Are your Templates responsive?", "Does it have all the plugin as
   mentioned?", "Can i use the these theme for my client?", "Are your
   Templates responsive?" (repeated).
10. `<footer class="footer-area section-gap">` — 3 columns: (a) col-lg-5
    "About Us" with description + copyright text, (b) col-lg-5 "Newsletter"
    with email form (`input.form-control` + `.click-btn` arrow button),
    (c) col-lg-2 "Follow Us" with 4 social icons (Facebook, Twitter,
    Dribbble, Behance).

### Design tokens extracted (from main.css)

- **Font:** Poppins (all weights 100–700 loaded via Google Fonts inline)
- **Brand gradient:** `linear-gradient(0deg, #235ee7 0%, #4ae7fa 100%)` —
  used on `.primary-btn`, FAQ `.card-header`, social icon hover
- **Primary blue:** `#235ee7` — button default bg, link color, FAQ header
- **Cyan accent:** `#4cd3e3` (slightly different from gradient endpoint)
  — used on service card icons, review stars area
- **Body text:** `#777777` — paragraph text
- **Heading text:** `#222222` — H1–H6
- **Section alt bg:** `#f9f9ff` — light lavender, used on service area,
  review area, footer
- **White:** `#fff` — banner button, product cards, review cards
- **Button radius:** `25px` (pill shape on `.primary-btn`)
- **Card radius:** `3px` (product cards)
- **Banner:** Background image (`img/header-bg.png`), full-screen height
- **Video overlay:** dark semi-transparent overlay with centered play icon
- **Star color:** gold (Font Awesome `.fa-star.checked`)
- **Footer social:** circle icons with gradient text on hover

### Screenshot analysis

The template shows a dark, tech-forward product landing page. The hero
banner has a dark background image (appears to be a smartwatch or tech
product) with white text and a white rounded CTA button. Below is a clean
white content area with a video feature section (dark video thumbnail on
right), a course/features grid with a centered product image, a split about
section, and service cards on a light lavender background. The unique
features section has a distinct darker/colored background with product cards
showing pricing. Reviews use a card grid with star ratings. FAQ has a
blue-gradient accordion. Footer is light with newsletter signup.

## Implementation tasks

- [ ] Create `apps/hourglass/` from a minimal starter template
- [ ] Set up `package.json` with `@free-react-templates/hourglass`
- [ ] Set `public/CNAME` to `hourglass.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://hourglass.free.componentdock.com`
- [ ] Load Poppins font from Google Fonts in `index.html`
- [ ] Define brand tokens in `index.css` `@theme` block (#235ee7, #4ae7fa, #777, #222, #f9f9ff)
- [ ] Implement Navbar component (sticky, links, mobile menu)
- [ ] Implement Hero/Banner component (full-height, bg image, white text, CTA)
- [ ] Implement VideoSection component (split layout, play overlay)
- [ ] Implement TopCourses component (centered title, 4 cards + center image)
- [ ] Implement AboutSection component (split layout, image + text + CTA)
- [ ] Implement ServiceSection component (3 icon cards on lavender bg)
- [ ] Implement UniqueFeatures component (dark bg, 4 product cards with pricing)
- [ ] Implement ReviewSection component (7 cards in grid with star ratings)
- [ ] Implement FAQSection component (accordion with gradient headers)
- [ ] Implement Footer component (3 columns, newsletter, social, Component Dock link)
- [ ] Compose all sections in App.tsx in correct order
- [ ] Write tests for all components (100% coverage)
- [ ] Run `npm run verify:app hourglass` to pass the local gate
