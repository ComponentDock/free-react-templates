# Skydine (ColorLib Rooftop) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-skydine`. Recreation name: **Skydine** (NEW name —
> the ColorLib source keeps its name "Rooftop").

## Source mapping

- **ColorLib item:** "Rooftop" (TEMPLATES.md line 1791; the `wp/template/rooftop/`
  slug appears exactly ONCE in TEMPLATES.md).
- **Source URL:** https://colorlib.com/wp/template/rooftop/
- **Preview URL — REACHABLE (verified 2026-08-18 by curl):**
  **`https://preview.colorlib.com/theme/rooftop/`**
  (HTTP 200, 566 lines HTML, `<title>Rooftop Restaurant</title>`).
- **Preview CSS:** `css/main.css` (2,484 lines — ALL styles, Bootstrap 4 +
  custom styles). Additional CSS: `css/linearicons.css`, `css/font-awesome.min.css`,
  `css/magnific-popup.css`, `css/nice-select.css`, `css/owl.carousel.css`,
  `css/bootstrap.css`, `css/bootstrap-datepicker.css`. Scripts:
  `vendor/jquery/jquery.min.js`, `vendor/popper.js/popper.min.js`,
  `vendor/bootstrap/bootstrap.min.js`, `vendor/jquery/jquery.magnific-popup.min.js`,
  `vendor/jquery/jquery.nice-select.min.js`, `vendor/owl-carousel/owl.carousel.min.js`,
  `vendor/bootstrap-datepicker/bootstrap-datepicker.min.js`,
  `vendor/parallax/parallax.min.js`, `vendor/jquery/jquery.sticky.js`,
  `js/main.js`. Fonts: Google Fonts Playfair Display (400, 400i) and
  Roboto (400, 500) — **Google Fonts `<link>` in index.html**.

## Reference research (done — do not redo)

### Screenshot (`rooftop-free-template-1.jpg`)

Browsed visually (matches the live preview page). The template is a
full-bleed restaurant site with:
- A dark header with a centered logo and left/right navigation links
- A large dark hero banner with the word "Rooftop" in serif font and
  "A Fine Dinning Restaurant" subtitle, with a downward scroll arrow
- A two-column menu section with large heading "Daily Food Courses with
  Drinks" on the left and priced menu items on the right
- A gallery section with four food/restaurant images in a staggered layout
- A reservation form with multiple input fields on a warm cream background
- A chef's quote section with text and a portrait image
- A call-to-action carousel with food images
- A contact section with map and contact details
- A dark navy footer with multiple columns and newsletter signup
- Aesthetic: elegant, warm restaurant feel; gold accent (#ad9966) on
  dark backgrounds; serif headings; clean, spacious layout

### Design tokens (live stylesheet + rendered page, verified 2026-08-18)

| Token        | Value                            | Use                                                                          |
| ------------ | -------------------------------- | ---------------------------------------------------------------------------- |
| Brand gold   | `#ad9966`                        | Primary button bg, button hover text, accent color, link hover color         |
| Dark brand   | `#000000`                        | Dark button bg (`primary-btn.dark`), heading color                           |
| Light bg     | `#f9f9ff`                        | Menu area background, button default-border background                       |
| Cream form   | `#faf5f0`                        | Booking form background (reservation section)                                |
| Footer bg    | `#04091e`                        | Dark navy footer background                                                  |
| Header bg    | `#ffffff`                        | White header background                                                      |
| Body text    | `#777777`                        | Body paragraph text, form placeholders                                       |
| Heading ink  | `#000`                           | Section title h1, menu item text                                             |
| Secondary ink| `#222`                           | Booking form option text                                                     |
| Placeholder  | `#999999`                        | Contact form placeholder color                                               |
| Fonts        | Playfair Display (serif) headings; Roboto (sans-serif) body | Google Fonts `<link>`; headings 48px line-height 1.5; body 14px |
| Button radius| 0px (square corners)             | `.primary-btn`, form controls                                                 |
| Primary btn  | `#ad9966` bg, `#fff` text       | solid fill; hover: transparent bg + `#ad9966` text + `#ad9966` border        |
| Dark btn     | `#000` bg, `#fff` text          | `primary-btn.dark`; hover: transparent bg + `#ad9966` text + `#ad9966` border|
| Button font  | uppercase, weight 700            | `.primary-btn` text-transform uppercase                                       |
| Gallery hover| scale 1.2 + dark overlay         | `figure img` transform scale; `.overlay` bg rgba(0,0,0,0.5)                  |
| Form inputs  | borderless, white bg             | `.form-control` border-radius 0, bg `#fff`, border 0                         |
| Header fixed | white + box-shadow               | `.header-fixed` box-shadow: -21.213px 21.213px 30px 0 rgba(158,158,158,0.3) |
| Section gap  | default Bootstrap `.section-gap` | Used on contact-area, footer-area                                            |

### Section order (from live preview HTML)

1. **Header** — `<header class="header-area">`: white bg, split layout
   - Left: Home, Menu, About links
   - Center: Logo image (col-3, mx-auto)
   - Right: Navbar with Pages dropdown (Contact, Elements), Blog dropdown
     (Blog, Blog Detail), Gallery link
   - Becomes fixed on scroll with `.header-fixed` class

2. **Hero Banner** — `<section class="home-banner-area">`: full-width
   dark background image (header-bg.png), 750px height (500px mobile),
   centered content: h1 "Rooftop" + hr + p "A Fine Dinning Restaurant"

3. **Fixed Side Buttons** — `.go-down` (left, downward arrow image),
   `.fixed-view-menu` (right, "view menu" link), `.fixed-book-table`
   (right, "book a table" link)

4. **Menu Area** — `<section class="menu-area">`: white bg with
   padding-top, two-column layout:
   - Left (col-lg-5): section-title with h1 "Daily Food Courses with Drinks"
     + paragraph + "See Full Menu" primary button
   - Right (col-lg-7): `.menu-list` with 3 `.single-menu` blocks:
     Appetizer (2 items), Main Courses (2 items), Drinks & Juices (2 items)
     — each item: h3 category + ul.list with li items (p.menu-item with
     dotted leaders + span price + p description)

5. **Gallery Area** — `<section class="gallery-area">`: padding 240px 0 90px,
   2-column masonry grid with staggered vertical offsets:
   - Col 1: g1.jpg (mt--480), g3.jpg (mt--280, offset-lg-1)
   - Col 2: g2.jpg, g4.jpg
   - Each image: `.single-gallery` with `.overlay` div + `<figure>` img +
     `.icon` with cross link (magnific-popup lightbox trigger)

6. **Reservation Area** — `<section class="reservation-area">`: two-column:
   - Left (col-lg-7): `.booking-form` on `#faf5f0` bg, padding 120px 50px
     240px, fields: Event Name, Event Date (datepicker + calendar icon),
     Event Time (nice-select), Number of Guests (nice-select), Budget,
     Contact Name, Email Address, Phone Number, Post a Message (textarea),
     "Send Request" dark button
   - Right (col-lg-4, offset-lg-1): section-title "Book a Table or Rooms
     for private dining" + paragraph

7. **Chef's Quotes Area** — `<section class="chefs-quotes-area">`:
   - Left (col-lg-5): section-title "Chef's Quotes" + paragraph + signature img
   - Right (col-lg-6, offset-lg-1): `.mt--120` chef portrait image

8. **Call-to-Action Area** — `<section class="container section-gap-top">`:
   `.callto-action-area` with owl-carousel, each slide: `.cta-img` (full
   food image) + `.text-box` (centered: h3 "Main Course" + description).
   Prev/next arrow navigation with opacity transitions.

9. **Contact Area** — `<section class="contact-area section-gap">`: two-column:
   - Left (col-lg-6): `#contactMap` div (map placeholder)
   - Right (col-lg-5, offset-lg-1): section-title "Rooftop Fine Dinning
     Restaurant" + address (2 lines) + phone numbers (3 lines) + emails
     (2 lines)

10. **Footer** — `<footer class="footer-area section-gap">`: bg `#04091e`,
    white text, 5 columns:
    - Top Products (4 links), Quick Links (4 links), Features (4 links),
      Resources (4 links), Newsletter (text + email input + submit button)
    - Footer bottom: copyright text + social icons (Facebook, Twitter,
      Dribbble, Behance)
    - Replace Colorlib attribution with Component Dock link

### Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/skydine` from the simplest existing app
       (`cp -r apps/<simplest> apps/skydine`), rename package to
       `@free-react-templates/skydine`, add Playfair Display (400, 400i)
       + Roboto (400, 500) Google Fonts `<link>` in index.html, set
       `public/CNAME` = `skydine.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (logo center, left nav, right
       nav with dropdowns, sticky on scroll), Hero (heading, subtitle,
       background image), SideButtons (view menu, book a table), Menu
       (title, 3 categories with items + prices, CTA button), Gallery
       (4 images, staggered layout, hover overlay), Reservation (form
       fields, date/time selects, send button, cream bg), ChefsQuotes
       (heading, paragraph, signature, portrait), CallToAction (carousel
       items, nav arrows), Contact (map placeholder, address/phone/email),
       Footer (5 columns, newsletter, social icons, Component Dock link),
       App (landmarks, document title "Skydine — Rooftop Dining").

3. [ ] Layout shell: white header with split nav layout, hero section
       with dark background image and centered text, responsive
       container with proper section gaps.

4. [ ] Navbar component: centered logo image, left menu links, right
       nav with dropdown menus (Pages, Blog), sticky behavior on
       scroll. Mobile: hamburger toggle that collapses to single column.

5. [ ] Hero section: full-width dark background image, centered content
       with large Playfair Display heading "Skydine" + subtitle "A Fine
       Dining Restaurant". Fixed side buttons: downward arrow, "view
       menu", "book a table" — visible after scrolling past hero.

6. [ ] Menu section: two-column layout — left column with section title
       "Daily Food Courses with Drinks" in Playfair Display + "See Full
       Menu" primary button; right column with three menu categories
       (Appetizer, Main Courses, Drinks & Juices) each containing two
       priced items with dotted leaders.

7. [ ] Gallery section: four images in a staggered masonry layout with
       vertical offsets (first and third images offset upward). Each
       image has a hover overlay with scale animation and cross icon.
       Use picsum.photos with seed URLs for placeholder images.

8. [ ] Reservation section: booking form on `#faf5f0` cream background
       with all fields (Event Name, Date, Time select, Guests select,
       Budget, Contact Name, Email, Phone, Message textarea) and "Send
       Request" dark button. Right column: "Book a Table or Rooms for
       private dining" title. Form fields: borderless, white bg, no
       border-radius.

9. [ ] Chef's Quotes section: left column with "Chef's Quotes" heading,
       paragraph text, and signature image; right column with chef
       portrait image offset upward with negative margin.

10. [ ] Call-to-Action section: carousel of food images with centered text
       overlays. Each item has a full-width food image + white text box
       with heading and description. Prev/next arrow navigation.

11. [ ] Contact section: left column with map placeholder div; right
       column with restaurant name, address (two lines), phone numbers
       (three lines), email addresses (two lines).

12. [ ] Footer: dark navy `#04091e` background, five columns (Top
       Products, Quick Links, Features, Resources, Newsletter), social
       icons (Facebook, Twitter, Dribbble, Behance — use lucide equivalents
       or remove), copyright with Component Dock link. Newsletter: email
       input + submit arrow button.

13. [ ] Run `npm run verify:app -- skydine` (typecheck → lint → vitest
       100% → build) and fix until green.

14. [ ] Open PR `feat/template-skydine` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL, token list (#ad9966 gold,
       #04091e dark navy, Playfair Display + Roboto, 0px button radius,
       #faf5f0 cream form bg), and what differs (renamed "Skydine",
       Google Fonts, lucide icons, picsum placeholders, no jQuery,
       Component Dock footer, no ColorLib references in app code).

15. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1791 `[x]` + surge
       URL (`https://skydine.free.componentdock.com`), `npm run
       readme:status`, push.

### Picsum placeholder plan

| Source image     | Placeholder seed                              | Size        |
| ---------------- | --------------------------------------------- | ----------- |
| Header bg        | Use solid dark bg or picsum `skydine-hero`    | 1920×1080   |
| Gallery g1       | `picsum.photos/seed/skydine-g1/600/800`       | 600×800     |
| Gallery g2       | `picsum.photos/seed/skydine-g2/500/600`       | 500×600     |
| Gallery g3       | `picsum.photos/seed/skydine-g3/500/700`       | 500×700     |
| Gallery g4       | `picsum.photos/seed/skydine-g4/600/500`       | 600×500     |
| Chef portrait    | `picsum.photos/seed/skydine-chef/600/800`     | 600×800     |
| Signature        | Skip (use styled text signature instead)       | —           |
| CTA food images  | `picsum.photos/seed/skydine-cta/1200/500`     | 1200×500    |
| Go-down arrow    | Skip (use lucide ChevronDown icon)            | —           |
| Logo             | Text logo "SKYDINE" in Playfair Display       | —           |

### Icon mapping (lucide)

| Source glyph              | Recreation             |
| ------------------------- | ---------------------- |
| `lnr-cross` (gallery)     | lucide `X`             |
| `lnr-arrow-right` (newsletter) | lucide `ArrowRight` |
| `lnr-menu` (mobile nav)  | lucide `Menu`          |
| `lnr-heart` (footer)      | lucide `Heart`         |
| `fa-calendar` (datepicker)| lucide `Calendar`      |
| `fa-facebook`             | lucide `Facebook`      |
| `fa-twitter`              | lucide `Twitter`       |
| `fa-dribbble`             | lucide `Dribbble`      |
| `fa-behance`              | Skip or use `ExternalLink` |
| Go-down arrow image       | lucide `ChevronDown`   |
