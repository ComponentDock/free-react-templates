# Penumbra (ColorLib "Eclipse") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-penumbra` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Eclipse" — free education / course-platform HTML
  template (source: https://colorlib.com/wp/template/eclipse/). Listed in
  TEMPLATES.md line 379 under **Bootstrap (216)**.
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/eclipse/`.
  DOM fetched (`/tmp/eclipse-preview.html`, 48,822 bytes) + stylesheet
  `css/main.css` (`/tmp/eclipse-main.css`, 74,292 bytes) + TEMPLATES.md
  screenshot (`eclipse-free-template.jpeg`, 1200×946, viewed in the browser)
  - live page visually inspected (hero, feature row, course cards, video
    area, features grid, testimonials, registration, footer).
- **Aesthetic:** modern education-platform look on a vibrant purple/violet
  gradient brand. Purple `#7c32ff` → pink-violet `#c738d8` gradient hero
  with white Playfair Display serif headlines and a white wave curve along
  the bottom edge; three white feature cards overlap the wave; white content
  sections with `#222222` ink headings and `#828bb2` muted body text;
  purple-gradient action buttons (form Submit, newsletter subscribe, search
  box, footer social hover); `#f9f9fb` course-card panels; deep-purple
  registration area with a white form card (purple glow shadow); `#828bb2`
  blog meta boxes; dark `#222222`-family footer with `#363a4b` social
  squares.
- **Carousels/menus are jQuery plugins in the source** (owl-carousel for
  course + testimonial sliders, Bootstrap collapse for the nav, magnific-popup
  for the video) — implement with React state: a PREV/NEXT carousel for the 8
  course cards (show ~4 per view, or a simple horizontally scrollable row),
  a 2-slide testimonial slider with PREV/NEXT, a hamburger-collapse mobile
  nav with the two dropdowns, decorative round play buttons.
- **Fonts:** source uses Google 'Playfair Display' (serif headings: hero h1,
  section h2s) + 'Roboto' (body/nav/buttons) — load both via `<link>` in
  `index.html`.
- **Buttons:** square-ish (radius 0), uppercase, white text, purple gradient
  `linear-gradient(90deg, #7c32ff 0%, #c738d8 100%)`. Footer `.click-btn`:
  padding 8px 12px, 12px, weight 500. Form Submit: `btn text-uppercase`
  (gradient). Implement the gradient as a Tailwind `bg-[linear-gradient(...)]`
  or `@theme` utility — no jQuery.
- **Copy is placeholder/Lorem and heavily duplicated** (the same
  astronomy/Hubble paragraph appears in the hero, section intros, video
  cards, and blog intro; all 8 course cards repeat "Learn Angular JS Course
  for Legendary Persons" / "programming language" / $150 / 25 Reviews; the
  blog title duplicates the features title "Features That Can Avail By
  Everyone"; footer "Features" column duplicates "Quick Links") —
  paraphrase freely, FIX the typos ("consec tetur", "oncerned", "Paup ers"),
  keep the same kinds: nav (Home / About / Courses / Pages ▾ [Elements,
  Course Details] / Blog ▾ [Blog Home, Blog Details] / Contacts), hero
  ("Take the first step to learn with us"), features (New Classes / Top
  Courses / Full E-Books), courses ("Popular Courses / Available Right
  Now"), video ("Watch Our Trainers in Live Action" + 2 course-titled
  videos), features grid (Lifetime Access / Source File Included / Student
  Membership / 35000+ Courses / Expert Mentors / Live Supports),
  testimonials (quote + "Fanny Spencer" / "Chief Executive, Amazon"),
  registration ("Courses for Free" / "It is high time for learning" + Name /
  Phone Number / Email Address + Submit), blog (3 × date "29th, oct, 2018" /
  "121 likes" / "05 comments" + "Smart Kitchen Setup" + "View Details"),
  footer (Top Products: Managed Website / Manage Reputation / Power Tools /
  Marketing Service; Quick Links: Jobs / Brand Assets / Investor Relations /
  Terms of Service; Resources: Guides / Research / Experts / Agencies;
  Newsletter: "You can trust us. we only send promo offers," + subscribe).
- **DOM oddities to note:** blog section title = same string as the features
  grid title (implement a distinct blog title, e.g. "Latest From Our Blog",
  and flag the deviation in the PR); footer "Features" widget duplicates
  "Quick Links" (vary the links or keep — flag in PR); testimonials section
  has NO title in the DOM (match that or add a subtle one — matching the
  source means no title).

## Structure (top → bottom, single page)

1. **Header** (`.default-header`, transparent over the purple hero) — brand
   logo (source img "Eclipse Education" → render the "Penumbra" wordmark),
   uppercase nav: HOME / ABOUT / COURSES / PAGES ▾ (Elements, Course
   Details) / BLOG ▾ (Blog Home, Blog Details) / CONTACTS, right search icon
   → expands `#search-input-box` (purple gradient). After scroll
   (`.is-sticky`): white bg + shadow `rgba(158,158,158,0.3)`. Mobile:
   hamburger (navbar-toggler) collapses the nav (Bootstrap collapse in
   source).
2. **Hero** (`.home-banner-area`, fullscreen, max-height 1200px) — purple
   gradient bg (source `home-banner-bg.png`; recreate as CSS gradient
   `linear-gradient(90deg, #7c32ff, #c738d8)`-family + white SVG wave along
   the bottom edge, or a rounded/layered bottom edge) — left
   `.home-banner-left`: h1 48px white Playfair "Take the first step to
   learn with us" (two lines, `<span>` 900 weight available) + white p
   (mt-20 mb-40); right `.home-banner-right`: flat vector illustration
   (person at a computer, light purple circle — substitute a
   subject-screened picsum photo; note the deviation), hidden below lg.
3. **Feature row** (`.feature-area`, `margin-top: -210px` — OVERLAPS the
   hero's wave edge; container-fluid) — 3 `.feature-item` (col-lg-2
   col-md-6): themify icon 30px `#828bb2` + h4 18px + p; thin right border
   `rgba(130,139,178,0.2)`. Titles: New Classes (book), Top Courses
   (graduation cap), Full E-Books (monitor) → lucide Book, GraduationCap,
   Monitor.
4. **Popular Courses** (`.popular-course-area.section-gap`, padding 120px 0)
   — `.section-title.text-left`: h2 42px `#222` Playfair "Popular Courses
   <br> Available Right Now" + intro p (max-width 620px); owl carousel with
   8 duplicated `.single-popular-course` cards (~4 visible, PREV/NEXT):
   `.thumb` img (hover scale ~1.03) + `.details` (`#f9f9fb`, padding 40px
   30px): uppercase 12px `.name` + `#222` 700 `.value` price ($150) + h4
   link (27px line-height) + 5 gold stars + "25 Reviews".
5. **Video area** (`.video-area.section-gap-bottom`, pb 120px) — light
   lavender/purple bg shape (source `video-area-bg.png`; mobile fallback
   `#828bb2`); `.section-title.text-white` h2 "Watch Our Trainers <br> in
   Live Action" + p; 2 `.single-video` (col-lg-6): `.video-part` — thumbnail
   img + overlay `rgba(0,0,0,0.3)` + round purple `.play-icon` (popup-youtube
   link, centered) + h4 title + p paragraph.
6. **Features grid** (`.other-feature-area`, padding-top 100px) —
   `.section-title.text-left` h2 "Features That <br> Can Avail By Everyone"
   - p (max-width 300px); 6 `.other-feature-item` (col-lg-4 col-md-6 with
     staggered `mt--160`/`mt--260` offsets on desktop — masonry look): padding
     50px 40px, light grey/off-white card bg, themify icon + h4 + p. Titles:
     Lifetime Access (key), Source File Included (files), Student Membership
     (users), 35000+ Courses (award/monitor), Expert Mentors (coffee? — the
     vision pass saw key/crown/pin/mug icons; pick sensible lucide icons),
     Live Supports (life buoy).
7. **Testimonials** (`.testimonials-area.section-gap`) — NO section title;
   owl `.testi-slider` with 2 slides; each: row align-items-center: col-lg-5
   `.testi-item` (quote img + p quote + h4 18px name "Fanny Spencer" + p
   "Chief Executive, Amazon" + 5 gold `#ffc000` stars) + col-lg-7 photo;
   PREV/NEXT owl controls bottom-center.
8. **Registration** (`.registration-area`, padding 157px 0; mobile bg
   `#7c32ff`) — deep-purple wave bg (source `registration-bg.png`): left col
   `.section-title.text-left.text-white` h2 "Watch Our Trainers <br> in
   Live Action" + p (max-width 300px); right col (offset): `.course-form-section`
   — transparent card, padding 70px 35px, glow shadow
   `0 0 50px rgba(185,55,223,0.45)`: h3 24px white "Courses for Free" + p
   white "It is high time for learning" + form: Name / Phone Number / Email
   Address (`.form-control`) + `.btn.text-uppercase` "Submit" (purple
   gradient).
9. **Blog** (`.blog-post-area.section-gap`, container-fluid) —
   `.section-title.text-left` (use a DISTINCT title — the source duplicates
   the features title) + intro p; 3 `.single-blog-post` (col-lg-4):
   image + `.overlay` `rgba(0,0,0,0.5)` + `.top-text` box (absolute
   `top: -30px; right: 30px`, bg `#828bb2`, padding 30px, text-center, 12px
   uppercase: "29th, oct, 2018" / "121 likes" / "05 comments") + h4 "Smart
   Kitchen Setup" + p + "View Details" link.
10. **Footer** (`.footer-area.section-gap`, dark bg image; mobile fallback
    `#222222`; padding 339px 0 120px) — widget columns (`h4` white, mb 35px;
    links mb 15px): Top Products, Quick Links, Features (duplicated links in
    source — vary or keep), Resources; Newsletter (col-lg-4): p + email
    input + `.click-btn` "subscribe" (purple gradient, radius 0, padding 8px
    12px). `.footer-bottom` (mt 90px): left `.footer-text` white p
    "Copyright © <year> All rights reserved | This template is made with ♥
    by **Component Dock**" (→ https://www.componentdock.com/, replaces
    Colorlib credit); right `.footer-social`: 5 links, 40px `#363a4b`
    squares, white icons, hover purple gradient.

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/penumbra`; `npm install` at repo root; CNAME +
      homepage `penumbra.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#7c32ff`, brandend `#c738d8`,
      ink `#222222`, muted `#828bb2`, panel `#f9f9fb`, star `#ffc000`,
      sociabg `#363a4b`, paper `#ffffff`; Google Fonts `<link>` (Playfair
      Display 400/600/700 + Roboto 400/500/700)
- [ ] `src/data.ts` — nav links (6 + 2 dropdowns), hero, features (3),
      courses (8), videos (2), feature grid (6), testimonials (2),
      registration, blog posts (3), footer widgets + newsletter + socials
- [ ] Components: `Navbar` (transparent→sticky, dropdowns, search expand,
      hamburger collapse), `Hero` (purple gradient + white wave edge + right
      illustration), `FeatureRow` (3 overlapping cards), `PopularCourses`
      (PREV/NEXT carousel of 8, ~4 visible), `VideoArea` (2 cards + round
      play buttons), `FeaturesGrid` (6 staggered cards), `Testimonials`
      (2-slide PREV/NEXT), `Registration` (title + form card with 3
      labelled inputs + Submit), `BlogPosts` (3 cards + meta box),
      `Footer` (4 columns + newsletter + bottom bar + socials)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100% coverage
      (sticky header, dropdowns, mobile menu, carousel navigation, form
      labels)
- [ ] Subject-screen picsum seeds (hero illustration, 8 course, 2 video, 1
      testimonial, 3 blog) — pixel metric + browser verify, pin seeds in PR
- [ ] `bash scripts/verify-app.sh penumbra` green; PR with source, preview
      URL, tokens, deviations (React carousels/collapse, CSS-gradient hero,
      picsum hero illustration, distinct blog title, Component Dock credit);
      squash-merge immediately

## Verification notes / pitfalls

- The header is transparent over the purple hero — white nav text; after
  scroll it becomes white with dark text. Test both states (jsdom can't
  scroll — simulate via a `scrolled` state flag in tests, e.g. after a
  scroll event handler fires).
- Desktop nav + mobile collapse may render duplicate links in the DOM —
  use `getAllByRole` and index, or `{ hidden: true }` queries for the
  desktop-only list (jsdom applies the injected Tailwind CSS, so
  `hidden lg:flex` lists are `display:none` and getByRole excludes them).
- CSS `uppercase` does NOT change accessible names — query raw text
  ('Home'), not 'HOME'.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- Carousel PREV/NEXT: pure React state (index offset), no jQuery/owl.
  The source renders ~8 duplicated cards with ~4 visible — either render
  all 8 in a translate-x track with button-stepped index, or a simpler
  paged grid of 4 with PREV/NEXT cycling; keep it testable.
- Hero white wave edge: source bg image has it baked in — recreate as an
  SVG wave (`<svg viewBox>` path) positioned at the hero bottom, or a
  `rounded-b-[50%]`-style pseudo-element; flag the approach in the PR.
- The purple gradient is the ONLY button treatment in the source — put it
  in `@theme` (e.g. `--color-brand` + a gradient utility) and reuse.
- Video play buttons are decorative (magnific-popup in source) — a button
  with `aria-label="Play video"` that does nothing (or a placeholder) is
  fine; make it focusable.
- No `tel:` literals anywhere (secret-scan rewrites them) — the source has
  no phone number; if implementers add contact copy, plain text only.
- The footer is dark — make sure the Component Dock credit link is white
  and readable, and that the `♥` renders (use the literal heart like other
  templates).
- Testimonial stars and course stars: gold `#ffc000` on testimonials; use
  lucide `Star` with `fill` for a solid gold star.
