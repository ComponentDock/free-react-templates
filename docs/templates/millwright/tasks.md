# Millwright (ColorLib Industries) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-millwright`.

## Design notes (replication findings)

- **Original:** ColorLib "Industries" — industrial / engineering company
  website, "Free Bootstrap 4 Template by Free-Template.co"
  (source: https://colorlib.com/wp/template/industries/).
- **Preview analyzed:** https://preview.colorlib.com/theme/industries/
  (HTTP 200, ~27.6 KB HTML + `css/style.css` ~56.1 KB parsed; live DOM
  rendered in browser, computed styles verified via JS, screenshots
  reviewed).
- **Visual design:** hero photo of industrial pipes against blue sky +
  white building facade, dark gradient overlay; centered white uppercase
  headline; white circular play button with black icon; orange `#fd5f00`
  single brand accent (icons, dropdown hover, CTA band, footer links, nav
  brand span). Sections alternate white / `#f8f9fa` light grey. Projects =
  full-bleed 3×2 tile grid with hover overlay + slide-up titles. Footer
  LIGHT (computed: transparent bg, `#6c757d` text, orange links — the dark
  look in some renders is the hero gradient behind the transparent header).
- **Structure (1:1, section order, home page):**
  1. Navbar `header` (absolute, top 30px, z-5, transparent over hero;
     solid black <1200px; `nav.navbar.navbar-expand-lg.navbar-dark.bg-dark`
     with `background: none !important` on desktop): brand "Industries"
     (Montserrat uppercase ls .2em w400, orange span); links HOME (active)
     / ABOUT / PROJECTS / SERVICES (dropdown: Architectural Design,
     Interior, Building) / BLOG / CONTACT (Montserrat 12px uppercase ls
     .2em, padding 1.7rem 1rem, active white). **NO search form.** Dropdown:
     white card radius 4px, shadow `0 2px 30px rgba(0,0,0,.2)`, caret,
     hover/active item orange bg white text. Mobile toggler collapse.
  2. Hero slider `section.home-slider.owl-carousel`: 2 `slider-item`
     (`calc(100vh)`, min 700px, bg `hero_1.jpg` / `hero_2.jpg`, `:before`
     black→transparent gradient top 500px; inactive slides opacity .4):
     centered col-lg-7 — `btn-play-wrap` (100px) + `a.btn-play` (60px WHITE
     circle, black play icon, Vimeo fancybox) + h1 uppercase 50px w300
     white + p 20px w300 white. **NO orange highlight span on headline.**
     Owl arrows + dots (7px white pills, bottom 100px). Slides: "We Are
     Industrial Company" / "Create, Enhance and Sustain".
  3. Features `section.section.bg-light` (`#f8f9fa`): NO heading; 3
     centered `media.block-6 d-block text-center` — icon.mb-3 orange 50px +
     h3.heading 20px + p 16px: **Automotive Parts** (ion-bookmark),
     **Maintenance Services** (ion-heart), **Green Energy** (ion-leaf).
  4. Services `section.section`: centered h2 "We Are Reliable Engineering
     In House"; asymmetric row: `col-lg-4 order-lg-1` feature image
     (`feature-img-bg h-100`, `about_1.jpg`) + two `feature-1-wrap` columns
     (order-lg-1 / order-lg-3) of 2 `feature-1 d-md-flex` items each:
     `span.ion.display-4.text-primary` orange + h3 + blurb. Items:
     **Green Energy** (ion-leaf), **Precision Mechanics**
     (ion-android-bulb), **Construction Machines** (ion-alert-circled),
     **Reliable and Stable** (ion-android-happy).
  5. Split block `section.section.element-animate` "Create, Enhance and
     Sustain": text `col-md-5 pr-md-5` (`block-41`: heading 50px lh 1.2 +
     TWO paragraphs 20px + `a.readmore` arrow "Read More") + image
     `col-lg-7 order-md-2` (`frame > img`, `about_2.jpg`).
  6. Projects `section.section.border-t.pb-0` (border-t = 1px solid
     `#f8f9fa`): centered h2 "Our Latest Projects" + `p.lead`;
     `container-fluid row.no-gutters` of SIX `a.link-thumbnail` (col-md-4):
     h3 + `ion-plus.icon` + img (img_1..4 then img_1, img_2 again). Hover:
     overlay `rgba(0,0,0,.6)`, h3 white 18px slides to bottom 30px, plus
     icon white centered, img zoom 1.1. Titles: Ducting Design in Colorado
     · Tanks Project In California · Structural Design in New York · Stacks
     Design · Intercate Custom [sic] · Banker Design.
  7. Testimonial `section.section.bg-light.block-11`: centered h2 "Happy
     Clients"; carousel of FOUR WHITE `block-33` cards (max-w 700px, padding
     40px): avatar 60px circle (`person_2/3.jpg`) + h2.heading 18px w300
     name + span.meta `#a6a6a6` "Companies Client" + blockquote 16px. Names:
     John Smith · Joshua Darren · John Smith · John Smith. Arrows below.
  8. Blog `section.section.blog`: centered h2 "Blog Posts" + `p.lead`;
     FOUR `media mb-4 d-md-flex d-block` entries (2 left, 2 right): image
     (`a.mr-5`, img_2/img_3 alternating) + media-body: `span.post-meta`
     "Feb 26th, 2018" (12px uppercase ls .2em `#b3b3b3`) + h3 20px title
     (all four use the SAME demo title "Separated they live in
     Bookmarksgrove right") + excerpt + `a.readmore` "Read More".
  9. CTA band `section.section.bg-primary` (`#fd5f00`): col-lg-8 h2 white
     "Create, Enhance and Sustain" + p white lead; col-lg-4 text-lg-right
     `a.btn.btn-outline-white.px-4.py-3` "Download This Template" (→
     free-template.co).
  10. Footer `footer.site-footer` (LIGHT — computed transparent bg, text
      `#6c757d`, `border-top: #eee`, padding 7em 0): col-md-4 h3 "About Us"
      - p + `footer-social d-flex` (4 social circles 30px); col-md-5
        pl-md-5 h3 "Contact Info" (Address: 34 Street Name, City Name Here,
        United States · Telephone:+1 242 4942 290 · Email:info@yourdomain.com);
        col-md-3 h3 "Quick Links" (About / Terms of Use / Disclaimers /
        Contact); centered copyright bar. Footer links `#fd5f00` → `#000`
        hover; h3 12px uppercase ls .1em bold.
- **Design tokens:** brand orange `#fd5f00` (18 uses) + shades `#d75100`
  (btn hover), `#ca4c00` (active/text hover), `#bd4700` (active border),
  `#ff7e31` (.btn.btn-primary hover); neutrals `#212529` text, `#6c757d`
  muted, `#b3b3b3` post-meta, `#a6a6a6` testimonial meta, `#f8f9fa` light
  sections, `#eee` footer border-top; fonts Oxygen (body) + Montserrat
  (headings/navbar; h1-h3 w900, hero h1 w300 white); `.btn` 13px uppercase
  ls .2em w900; `.btn-primary` 2px border hover `#ff7e31`;
  `.btn-outline-white` 2px white border → white bg black text on hover;
  `.section` 7em 0; `block-41-heading` 50px lh 1.2; hero h1 50px w300
  uppercase white; `btn-play` 60px white circle black icon; `link-thumbnail`
  hover overlay `rgba(0,0,0,.6)` + h3 bottom 30px + img scale 1.1;
  `block-33` white card max-w 700px padding 40px avatar 60px circle;
  `post-meta` 12px uppercase ls .2em `#b3b3b3`; navbar transparent over
  hero (black <1200px).
- **vs. Ingot (ColorLib Industrial — same base, different variant):** no
  search form; no orange hero-headline highlight block; features =
  Automotive Parts / Maintenance Services / Green Energy; services heading
  "We Are Reliable Engineering In House" with Green Energy / Precision
  Mechanics / Construction Machines / Reliable and Stable; ONE split block;
  "Our Latest Projects"; "Happy Clients" + 4 cards, meta "Companies
  Client"; 4 blog posts all sharing one demo title; CTA reuses "Create,
  Enhance and Sustain"; footer h3s About Us / Contact Info / Quick Links.

## Task outline (implementer)

1. Scaffold `apps/millwright` (copy simplest existing app, rename package
   to `@free-react-templates/millwright`; register in package-lock.json).
2. `@theme` in `src/index.css`: `--color-brand: #fd5f00` (+ hover shades
   `#d75100`, `#ca4c00`, `#ff7e31`); fonts: Montserrat (headings/navbar) +
   Oxygen (body) via Google Fonts `<link>` in `index.html`.
3. Data module `src/data.ts`: nav links + services dropdown, hero slides
   (2), features (3), services (4), split block copy (2 paragraphs), 6
   project tiles (fix "Intercate" → "Intricate"), 4 testimonials, 4 blog
   posts (paraphrase the repeated demo title so all four differ), footer
   columns. Picsum seeds `millwright-<n>`.
4. Components (TDD, 100% coverage):
   - `Navbar` — brand + links + SERVICES dropdown + mobile toggle; NO
     search form; transparent over hero (bg-black on mobile via `lg:`).
   - `HeroSlider` — auto-advancing 2-slide slider, play button (white
     circle, black icon), arrows + dots, dark overlay.
   - `Features` — 3 centered block-6 cards (orange icons).
   - `Services` — h2 + image column + 2×2 feature grid.
   - `SplitBlock` — block-41 heading/text/readmore + image.
   - `ProjectsGrid` — 6 tiles, hover overlay + slide-up titles.
   - `Testimonials` — "Happy Clients" carousel, white cards, arrows.
   - `BlogSection` — 4 media entries (2+2 layout), post-meta + readmore.
   - `CtaBand` — orange band, white h2/lead + outline-white button.
   - `Footer` — 3 light columns + copyright bar; orange links.
5. Compose in `App.tsx`; document title "Millwright — Industries Template".
6. Verify: `bash scripts/verify-app.sh millwright` (typecheck + lint +
   100% coverage + build). PR lists source (ColorLib Industries), preview
   URL, tokens, and what differs.
