# Corona (ColorLib "Eclipse") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-corona` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Eclipse" — Eclipse Education, Free Bootstrap
  Education Website Template (source:
  https://colorlib.com/wp/template/eclipse/). Listed in TEMPLATES.md
  under **Bootstrap (216)** (line 379; duplicate rows at line 1627 under
  Education (43) and line 2040 under Landing Page (96) — same template,
  one app only).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/eclipse/`. The root IS the
  template home page (`<title>Eclipse Education</title>`) — no gallery
  portal (unlike e.g. Drimo). DOM fetched (`/tmp/eclipse-preview.html`,
  48.8 KB) + stylesheet (`/tmp/eclipse-main.css`, 74.3 KB, pretty-printed
  `css/main.css`) + screenshot (`eclipse-free-template.jpeg`, 1200×946,
  viewed in browser). All references verified live.
- **Visual design:** purple-gradient education one-pager. Hero: deep
  violet background, "Eclipse" serif wordmark top-left, centered uppercase
  menu (HOME ABOUT COURSES PAGES BLOG CONTACTS + search icon), white serif
  headline "Take the first step to learn with us" + sans paragraph + flat
  two-student illustration right, sweeping white wave bottom edge into
  white content. Below: 3-icon feature strip (New Classes / Top Courses /
  Full E-Books), "Popular Courses Available Right Now" carousel. Academic,
  spacious, whitespace-heavy; brand = violet `#7c32ff`, content = white,
  supporting = muted gray-blue `#828bb2`.
- **Structure (1:1 from the preview DOM):**
  1. Header `header.default-header` → `nav.navbar` (padding 25px 15px;
     absolute, top 0, z-index 9, transparent): brand "Eclipse" (Playfair
     serif); right-aligned links Home (active), About, Courses, Pages
     ▾ (Elements, Course Details), Blog ▾ (Blog Home, Blog Details),
     Contacts; burger (lnr-menu, white); sticky → white bg + shadow
     `-21.213px 21.213px 30px rgba(158,158,158,0.3)`; mobile collapse
     panel bg `#222`.
  2. Hero `section.home-banner-area` (bg `home-banner-bg.png` no-repeat
     cover center, max-height 1200px; `.fullscreen` padding-top 250px /
     height 700px): left `home-banner-left` — `h1.text-white` "Take the
     first step / to learn with us" + `p.text-white.mt-20.mb-40` (Hubble
     copy); right `offset-lg-2 col-lg-5` — illustration
     `img/header-img.png`; white wave bottom edge (screenshot).
  3. Features `section.feature-area` (container-fluid → `feature-inner
row`): 3 × `col-lg-2` `feature-item.d-flex` (margin 30px 0,
     `border-right: 1px solid rgba(130,139,178,0.2)`, padding-right 20px):
     `ti-book`/`ti-cup`/`ti-desktop` icons (30px, `#828bb2`) + h4 18px
     New Classes / Top Courses / Full E-Books + Hubble blurb + Read More.
  4. Popular courses `section.popular-course-area.section-gap` (gap =
     120px 0 desktop / 60px mobile; container max-width 1140px):
     section-title `h2` 42px `#222` "Popular Courses / Available Right
     Now" + lorem; owl carousel → 4 `single-popular-course`: `thumb` (img
     full-width, overflow hidden) + `details` (padding 40px 30px, bg
     `#f9f9fb`): `p.name` uppercase 12px 500 "programming language" +
     `p.value` `$150` `#222` 700; `a>h4` (line-height 27px) "Learn
     Angular JS Course for Legendary Persons"; 5 × `fa-star` + "25
     Reviews".
  5. Video `section.video-area.section-gap-bottom` (bg `#828bb2` +
     `video-area-bg.png` center, padding 60px 0): left col-lg-5
     `section-title.text-white` "Watch Our Trainers / in Live Action" +
     p; right `offset-lg-1 col-md-6 video-left` owl video-carousel → 2
     `single-video` → `video-part` (relative): img + overlay
     `rgba(0,0,0,0.3)` + centered `popup-youtube.play-btn` play-icon.
  6. Other features `section.other-feature-area`: section-title
     "Features That Can Avail By Everyone" + "blank cassettes" p; 6 ×
     `col-lg-4` `other-feature-item` (padding 50px 40px, bg `#f2f3f7`,
     margin-bottom 30px): `ti-key` Lifetime Access, `ti-files` Source
     File Included, `ti-medall-alt` Student Membership, `ti-briefcase`
     35000+ Courses, `ti-crown` Expert Mentors, `ti-headphone-alt` Live
     Supports + lorem.
  7. Registration `section.registration-area` (bg `registration-bg.png`
     center, padding 157px 0; mobile: `#7c32ff`, 60px 0):
     `section-title.text-white` "Courses for Free" + p "It is high time
     for learning"; `course-form-section` (transparent, center, padding
     70px 35px, `box-shadow: 0 0 50px rgba(185,55,223,0.45)`, margin-top
     50px): form `course-form-area.contact-page-form.course-form.text-
right`: 3 × `form-group.col-md-12` `input.form-control`
     (transparent, border 0, `border-bottom: 1px solid #828bb2`, padding
     20px, 13px, radius 0, `color: #fff`; placeholders Name / Phone
     Number / Email Address) + `button.btn.text-uppercase` "Submit"
     (gradient `90deg, #7c32ff 0%, #c738d8 100%`).
  8. Testimonials `section.testimonials-area.section-gap`: `testi-slider
owl-carousel`, each slide `row.align-items-center`: left col-lg-5
     `testi-item` — quote icon `img/quote.png` + p "As conscious
     traveling Paup ers we must always be oncerned about our dear Mother
     Earth..." + h4 "Fanny Spencer" + p "Chief Executive, Amazon"; right
     `offset-lg-1 col-lg-6` testimonial photo `t1.jpg`.
  9. Blog posts `section.blog-post-area.section-gap` — **demo quirk:** the
     shipped demo repeats the other-feature title "Features That Can
     Avail By Everyone" (telescope copy) — the canonical ColorLib blog
     heading is "Latest Posts From Our Blog"; pick one and note it in the
     PR. 3 × `single-blog` cards: img + overlay + `top-text` meta
     ("29th, oct, 2018" / "121 likes" / "05 comments") + `text`:
     `h4.text-white` "Smart Kitchen Setup" + lorem + `a.primary-btn`
     "View Details" + `fa-long-arrow-right`.
  10. Footer `footer.footer-area` (bg `footer-bg.png` center, padding
      339px 0 120px; mobile: `#222222`, 60px 0): 5 ×
      `single-footer-widget` (h4 `#fff` 18px, margin-bottom 35px): Top
      Products (Managed Website, Manage Reputation, Power Tools,
      Marketing Service) / Quick Links (Jobs, Brand Assets, Investor
      Relations, Terms of Service) / Features (same 4 links) / Resources
      (Guides, Research, Experts, Agencies) / Newsletter ("You can trust
      us. we only send promo offers, subscribe" + email input "Your
      Email Address" + subscribe button); copyright "All rights reserved
      | This template is made with by Colorlib" → replace with neutral
      credit.
- **Design tokens (from `css/main.css`):** brand violet `#7c32ff` +
  magenta `#c738d8`, signature gradient `linear-gradient(90deg, #7c32ff
0%, #c738d8 100%)` (submit buttons); playful accents `#4cd3e3`,
  `#f4e700`, `#f44a40`, `#38a4ff` (iconography only); text `#222222`
  (headings/prices), `#828bb2` (icons, form underlines, video band),
  `#777777`; section bgs: white, `#f9f9fb` (course details), `#f2f3f7`
  (feature cards), `#828bb2` (video), `#222222` (footer mobile), image
  bgs (hero/registration/footer/video); fonts Playfair Display 900
  (headings) + Roboto 400/500/700 (body) — demo loads via inline
  Cloudflare @font-face block → recreate with Google Fonts `<link>`;
  flat squared corners (radius 0 form controls), no pills; spacing:
  section-gap 120px/60px, section-title h2 42px/30px, registration
  157px/60px, footer 339px 0 120px/60px, course details 40px 30px,
  feature cards 50px 40px, navbar padding 25px 15px.

## Implementation tasks (for the implementer stream)

1. Scaffold `apps/corona` from the simplest existing app; rename
   package to `@free-react-templates/corona`; register
   `injectUiSource()` in `vite.config.ts`; `npm install` at root and
   verify the lockfile entry.
2. TDD: write Vitest + Testing Library tests first (100% coverage
   enforced) for each section, then implement:
   - Header/navbar (wordmark, links, Pages/Blog dropdowns, sticky
     white state, mobile menu)
   - Hero (violet cover, headline, paragraph, illustration, wave edge)
   - Feature strip (3 icon items, border separators, Read More)
   - Popular courses (title + 4 cards: thumb, category, price, title,
     stars, reviews; `#f9f9fb` details)
   - Video band (`#828bb2`, title + 2 thumbnail panels with play
     buttons)
   - Other features (6 `#f2f3f7` cards)
   - Registration (violet band, glassy form panel, 3 underline inputs,
     gradient Submit)
   - Testimonials (quote + author + photo)
   - Blog (3 cards with meta + View Details)
   - Footer (5 widgets + newsletter + neutral copyright)
3. Styling: Tailwind v4 `@theme` tokens — violet `#7c32ff`, magenta
   `#c738d8`, brand gradient `linear-gradient(90deg, #7c32ff, #c738d8)`,
   text `#222222` / `#828bb2` / `#777777`, card bg `#f9f9fb`, feature
   card bg `#f2f3f7`, video band `#828bb2`, footer `#222222`; Google
   Fonts Playfair Display 900 + Roboto 400/500/700.
4. Images: seeded picsum (`picsum.photos/seed/corona-<n>/<w>/<h>`:
   hero cover 1920×1100, hero illustration 500×500, course 400×250,
   video 600×400, testimonial 400×400, blog 600×400); image
   backgrounds approximated with solids/gradients or picsum covers;
   icons from lucide-react (BookOpen, Award, Monitor, Key, Files,
   Medal, Briefcase, Crown, Headphones, Star, Search, Menu, X,
   ChevronDown, Quote, ArrowRight, Play, Send, Mail, Heart,
   MessageCircle); logo = text wordmark "Corona".
5. Run `bash scripts/verify-app.sh corona` (typecheck + lint + knip +
   fallow + 100% coverage tests + build). Fix root causes, re-run.
6. Visual QA: `npx vite preview` + browser, compare against the
   reference (preview DOM/CSS + screenshot) — section order, violet
   gradient language, wave hero edge, flat squared buttons, spacing
   rhythm.
7. Push `feat/template-corona`, open PR with source/preview/tokens/
   diffs, merge immediately, `[~]` → `[x]` bookkeeping + surge URL +
   `npm run readme:status`.

## Fidelity notes / pitfalls

- The preview root is the template home page itself — no portal/demo
  split to worry about (build the root page 1:1).
- Multi-page nav (about/courses/course-details/elements/blog pages)
  → one-pager: cross-page links become "#" placeholders or section
  anchors. Do not build the other pages.
- Blog section title is a demo copy-paste quirk (repeats "Features
  That Can Avail By Everyone"); decide canonical "Latest Posts From
  Our Blog" vs. demo copy and note in the PR.
- Registration/footer/video/hero use background IMAGES in the demo;
  approximate with flat solids (`#7c32ff` / `#222222` / `#828bb2`) or
  subtle CSS gradients, or picsum covers — never copy the images.
- This template is flat/squared (radius 0) — no pill buttons; don't
  add rounding from other templates.
- Fonts: only Playfair Display 900 is used for headings (no 400/700
  heading weights needed), Roboto 400/500/700 for body/nav.
- Form inputs are underline-only (transparent bg, bottom border
  `#828bb2`, white text) — implement with `bg-transparent
border-b`-style classes, not default input chrome.
- Demo copy is lorem/Hubble placeholder repeated everywhere — vary
  per-card copy for realism, keep the same content kinds.
- jsdom 30: no `localStorage` in tests — irrelevant here (no dark
  mode), but keep `window.*` prefixed if any storage is used.
- Nav renders desktop links + dropdowns; mobile menu panel duplicates
  them — use `getAllByRole` and index the mobile one last in tests.
