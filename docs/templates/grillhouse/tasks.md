# Grillhouse (ColorLib Steakshop) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-grillhouse`. Recreation name: **Grillhouse** (NEW name —
> the ColorLib source keeps its name "Steakshop").

## Source mapping

- **ColorLib item:** "Steakshop" (TEMPLATES.md line 1792; the `wp/template/steakshop/`
  slug appears exactly ONCE in TEMPLATES.md).
- **Source URL:** https://colorlib.com/wp/template/steakshop/
- **Preview URL — REACHABLE (verified 2026-08-18 by curl):**
  **`https://preview.colorlib.com/theme/steakshop/`**
  (HTTP 200, 526 lines HTML, `<title>Steak Shop</title>`).
- **Preview CSS:** `css/style.css` (2,589 lines — ALL custom styles, Bootstrap 4
  base). Additional CSS: `css/bootstrap.css`, `vendors/linericon/style.css`,
  `css/font-awesome.min.css`, `css/magnific-popup.css`, `vendors/owl-carousel/owl.carousel.min.css`,
  `vendors/lightbox/simpleLightbox.css`, `vendors/nice-select/css/nice-select.css`,
  `vendors/jquery-ui/jquery-ui.css`, `vendors/animate-css/animate.css`. Scripts:
  `vendor/jquery/jquery.min.js`, `vendor/popper.js/popper.min.js`,
  `vendor/bootstrap/bootstrap.min.js`, `vendor/jquery/jquery.magnific-popup.min.js`,
  `vendor/owl-carousel/owl.carousel.min.js`, `vendor/lightbox/lightbox.min.js`,
  `vendor/nice-select/js/jquery.nice-select.min.js`, `vendor/jquery-ui/jquery-ui.min.js`,
  `vendor/waypoints/jquery.waypoints.min.js`, `vendor/counterup/jquery.counterup.min.js`,
  `vendor/parallax/parallax.min.js`, `vendor/stellar/jquery.stellar.min.js`,
  `vendor/bootstrap-datepicker/bootstrap-datepicker.min.js`,
  `vendor/isotope/isotope.pkgd.min.js`, `vendor/isotope/packery-mode.pkgd.js`,
  `vendor/hoverIntent/hoverIntent.js`, `vendor/avgrund/avgrund.js`,
  `vendor/mailchimp/subscribe.js`, `js/theme.js`, `js/main.js`.
  Fonts: Google Fonts Pacifico (400) and Roboto (300, 400, 500, 700).

## Reference research (done — do not redo)

### Screenshot (`steakshop-free-template.jpg`)

Browsed visually (matches the live preview page). The template features:
- A dark/full-bleed hero banner with a meat/steak background image and
  a video play button overlay
- A unique right-side fixed navigation sidebar (white, vertical, narrow)
- Overlapping food image layouts in the content sections
- A reservation form on a photo background with a white card overlay
- A chef portrait section with signature
- A food image carousel
- A dark footer with photo background and social icons
- Aesthetic: bold, warm restaurant feel; red accent (#f42f2c) for CTAs;
  serif/display font (Pacifico) for logo; overlapping image layouts
  creating depth

### Design tokens (live stylesheet + rendered page, verified 2026-08-18)

| Token        | Value                            | Use                                                                          |
| ------------ | -------------------------------- | ---------------------------------------------------------------------------- |
| Brand red    | `#f42f2c`                        | Primary brand color, button hover bg, nav active/hover bg, gradient start    |
| Coral accent | `#f48464`                        | Gradient end (primary-btn: linear-gradient 90deg #f42f2c → #f48464)         |
| Dark ink     | `#222222`                        | Body text, headings, primary button default text, hamburger spans            |
| Body text    | `#777777`                        | Body paragraph text                                                          |
| White        | `#fff`                           | Primary button default bg, sidebar bg, form card bg                          |
| Footer overlay| `#000` at 75% opacity          | `.footer-area.overlay:after`                                                 |
| Hero overlay | `#000` at 60% opacity           | `.home_banner_area.overlay:after`                                            |
| Fonts        | Pacifico (cursive) for logo/display; Roboto (sans-serif) for body | Google Fonts `<link>` |
| Nav font     | Roboto 12px, capitalize          | Sidebar navigation links                                                     |
| Button radius| 2px                              | `.primary-btn` border-radius                                                 |
| Primary btn  | Gradient `#f42f2c → #f48464`, white text | default; hover: solid `#f42f2c`, white text                       |
| Nav active   | `#f42f2c` bg + `#fff` text     | `box-shadow: 0 20px 20px rgba(244,47,44,0.1)`                               |
| Social icons | `rgba(255,255,255,0.15)` bg    | white text; hover: `#f42f2c` bg                                              |
| Brand logos  | 20% opacity, hover 80%          | `.single-brand-item img`                                                     |
| Form inputs  | Borderless + bottom border 1px `#eee` | `padding: 25px 20px; font-size: 13px`                               |
| Form card    | White bg, `box-shadow: 0 20px 50px rgba(0,0,0,0.1)` | `.contact-form-section`, padding 70px 50px |
| Sidebar width| 150px fixed right                | `.fixed-menu`; mobile ≤570px: off-screen + hamburger trigger                 |

### Section order (from live preview HTML)

1. **Sidebar Menu Trigger** — `.menu-trigger`: three `<span>` bars,
   fixed position, visible on mobile (≤570px), hidden on desktop
   (≥1920px menu-close hidden, ≤570px shown)

2. **Fixed Sidebar** — `<header class="fixed-menu">`: 150px wide, white bg,
   fixed right, full height, z-index 999, box-shadow left
   - Logo image centered at top
   - Close button (X icon, visible on mobile)
   - Vertical nav: Home, About, Menu, Book Table, Chefs, Pages (dropdown → Element),
     Blog (dropdown → Blog, Blog Details), Contact
   - Each link has an icon image prefix (nav-icon1.png through nav-icon8.png)
   - Active/hover: red `#f42f2c` bg + white text + red shadow

3. **Hero Banner** — `<section class="home_banner_area">`: fullscreen
   background image (`home-banner.jpg`) with dark overlay, height 100vh

4. **Banner Bottom** — `.banner-bottom`: two-column row below hero:
   - Left (col-lg-4): video popup — play icon button (zoomIn animation) +
     "Watch video" text + "You will love our execution" subtitle
   - Right (col-lg-8): white `.banner_content` box with:
     - `.top-text` "Steak Shop offers best steak in town"
     - h1 "Steak Shop offers best steak in town"
     - Paragraph description
     - "Explore Menu" primary button

5. **Breakfast Area** — `.breakfast-area.section_gap_top`: two-column:
   - Left (col-lg-5): heading "Daily Food Courses with Drinks", two
     paragraphs, "See Full Menu" primary button
   - Right (col-lg-6, offset-lg-1): two overlapping food images
     (`img1` + `img2` with absolute positioning offset)

6. **Lunch Area** — `.breakfast-area.lunch-area.section_gap`: reversed layout:
   - Left (col-lg-6): two overlapping food images
   - Right (col-lg-5, offset-lg-1): heading + paragraphs + chef attribution
     card (`.chef-title`: avatar thumb + "Marvel Maison" + "Chief Executive, Amazon")

7. **Reservation Area** — `<section class="reservation-area.section_gap_top">`:
   Background photo (`reservation-bg.jpg`), max-height 600px, margin-bottom 150px:
   - Centered white card (`.contact-form-section`): padding 70px 50px, shadow
   - h1 "Reservation Form"
   - Form fields: Name, Email, Phone Number, Number of People (select),
     Date & Time (datepicker input), Select Event (select)
   - "Make Reservation" primary button (centered)
   - Form inputs: borderless, bottom border only, padding 25px 20px

8. **Chef Area** — `.chef-area.section_gap_top`: two-column + overlapping items:
   - Left (col-lg-6): chef portrait image (`chef1.jpg`)
   - Right (col-lg-5, offset-lg-1): heading + paragraphs + signature image
   - Below: `.chef-items` row of 4 thumbnails with `margin-top: -200px`
     (overlaps chef portrait); each thumbnail links to a food image (lightbox)
   - Hidden on mobile ≤767px

9. **Food Gallery** — `<section class="section_gap_top food-gallery-area">`:
   Full-width owl-carousel of 6 food images (food5-8.jpg, repeated)
   - No visible controls, auto-scrolling

10. **Brands Area** — `<section class="brands-area section_gap">`:
    - Centered heading "In associasion with" + paragraph
    - Owl-carousel of 6 brand logo images at 20% opacity (hover 80%)

11. **Footer** — `<footer class="footer-area overlay">`:
    Background photo (`footer-bg.jpg`) with black 75% overlay:
    - 5 columns: Top Products, Quick Links, Features, Resources, Newsletter
    - Newsletter: email input + arrow submit button
    - Footer bottom: copyright text + social icons (Facebook, Twitter, Dribbble, Behance)
    - Replace Colorlib attribution with Component Dock link

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/grillhouse` from the simplest existing app
       (`cp -r apps/<simplest> apps/grillhouse`), rename package to
       `@free-react-templates/grillhouse`, add Pacifico (400) + Roboto
       (300, 400, 500, 700) Google Fonts `<link>` in index.html, set
       `public/CNAME` = `grillhouse.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Sidebar (logo, vertical nav links with
       icons, active state, mobile collapse + hamburger toggle), Hero
       (fullscreen bg image, dark overlay), BannerBottom (video popup,
       heading, description, CTA button), Breakfast (heading, text, 2
       overlapping images, "See Full Menu" button), Lunch (reversed
       layout, chef attribution card), Reservation (form card on photo
       bg, all fields, "Make Reservation" button), Chef (portrait,
       heading, signature, 4 overlapping item thumbnails), FoodGallery
       (carousel of images), Brands (heading, logo carousel at low
       opacity), Footer (5 columns, newsletter, social icons, Component
       Dock link), App (landmarks, document title "Grillhouse — Steak House").

3. [ ] Layout shell: right sidebar (150px, fixed, white, z-999), main
       content area, responsive hamburger trigger for mobile.

4. [ ] Sidebar component: 150px fixed right sidebar with centered logo,
       vertical nav links with icon prefixes, Pages/Blog dropdowns,
       active/hover red (#f42f2c) background. Mobile (≤570px): sidebar
       off-screen, hamburger trigger reveals it with slide-in.

5. [ ] Hero section: fullscreen background image with dark overlay
       (rgba(0,0,0,0.6)), responsive (no bg image on mobile).

6. [ ] Banner-bottom: two-column — left video popup (play icon with
       zoomIn animation, "Watch video" text), right white content box
       with heading + description + "Explore Menu" primary button.

7. [ ] Breakfast section: text left (heading "Daily Food Courses with
       Drinks", paragraphs, "See Full Menu" button), overlapping food
       images right (two images with absolute offset positioning).

8. [ ] Lunch section: reversed layout — overlapping food images left,
       text + chef attribution card right (avatar + name + title).

9. [ ] Reservation section: background photo, white card overlay
       (padding 70px 50px, box-shadow), form with all fields (Name,
       Email, Phone, People select, Date, Event select), "Make
       Reservation" gradient button. Form inputs: borderless, bottom
       border only.

10. [ ] Chef section: portrait image left, heading/signature right,
       four item thumbnails row below with negative margin overlap
       (hidden on mobile ≤767px).

11. [ ] Food gallery: full-width owl-carousel of 6 food images, auto-
       scrolling, no visible controls.

12. [ ] Brands section: centered heading "In associasion with" + paragraph,
       carousel of 6 logo images at 20% opacity (hover 80%).

13. [ ] Footer: dark photo background + black 75% overlay, 5 columns
       (Top Products, Quick Links, Features, Resources, Newsletter),
       newsletter email input + arrow button, copyright + social icons
       (use lucide equivalents), Component Dock link.

14. [ ] Run `npm run verify:app -- grillhouse` (typecheck → lint → vitest
       100% → build) and fix until green.

15. [ ] Open PR `feat/template-grillhouse` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL, token list (#f42f2c red,
       #f48464 coral gradient, Pacifico + Roboto, 2px button radius,
       150px fixed sidebar), and what differs (renamed "Grillhouse",
       Google Fonts, lucide icons, picsum placeholders, no jQuery,
       Component Dock footer, no ColorLib references in app code).

16. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1792 `[x]` + surge
       URL (`https://grillhouse.free.componentdock.com`), `npm run
       readme:status`, push.

### Picsum placeholder plan

| Source image       | Placeholder seed                                  | Size        |
| ------------------ | ------------------------------------------------- | ----------- |
| Hero bg            | `picsum.photos/seed/grillhouse-hero/1920/1080`    | 1920×1080   |
| Breakfast food 1   | `picsum.photos/seed/grillhouse-food1/500/600`     | 500×600     |
| Breakfast food 2   | `picsum.photos/seed/grillhouse-food2/400/300`     | 400×300     |
| Lunch food 1       | `picsum.photos/seed/grillhouse-food3/500/600`     | 500×600     |
| Lunch food 2       | `picsum.photos/seed/grillhouse-food4/400/300`     | 400×300     |
| Reservation bg     | `picsum.photos/seed/grillhouse-reserv/1920/1080`  | 1920×1080   |
| Chef portrait      | `picsum.photos/seed/grillhouse-chef/600/800`      | 600×800     |
| Signature          | Skip (use styled text signature instead)           | —           |
| Chef item 1-4      | `picsum.photos/seed/grillhouse-item{1-4}/200/200` | 200×200     |
| Food gallery 1-6   | `picsum.photos/seed/grillhouse-gallery{1-6}/600/400` | 600×400  |
| Brand logos        | Skip (use text-based placeholder logos)             | —           |
| Footer bg          | `picsum.photos/seed/grillhouse-footer/1920/800`   | 1920×800    |
| Play icon          | Skip (use lucide Play icon)                       | —           |
| Nav icons          | Skip (use lucide icons: Home, BookOpen, UtensilsCrossed, Users, FileText, MessageSquare, Mail) | — |

### Icon mapping (lucide)

| Source glyph              | Recreation                    |
| ------------------------- | ----------------------------- |
| `menu-trigger` bars       | lucide `Menu`                 |
| `menu-close` X            | lucide `X`                    |
| nav-icon1 (home)          | lucide `Home`                 |
| nav-icon2 (about)         | lucide `BookOpen`             |
| nav-icon3 (menu)          | lucide `UtensilsCrossed`      |
| nav-icon4 (book table)    | lucide `CalendarCheck`        |
| nav-icon5 (chefs)         | lucide `ChefHat`              |
| nav-icon6 (pages)         | lucide `FileText`             |
| nav-icon7 (blog)          | lucide `PenLine`              |
| nav-icon8 (contact)       | lucide `Mail`                 |
| play-icon (video popup)   | lucide `Play`                 |
| fa-long-arrow-right (newsletter) | lucide `ArrowRight`    |
| fa-heart-o (footer)       | lucide `Heart`                |
| fa-times (mobile close)   | lucide `X`                    |
| fa-facebook               | lucide `Facebook`             |
| fa-twitter                | lucide `Twitter`              |
| fa-dribbble               | lucide `Dribbble`             |
| fa-behance                | Skip or use `ExternalLink`    |
