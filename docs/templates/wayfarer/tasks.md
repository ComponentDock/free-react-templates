# Wayfarer (ColorLib "Travelo") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-wayfarer` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Travelo" — free travel & tourism HTML template
  (source: https://colorlib.com/wp/template/travelo/). Listed in
  TEMPLATES.md under **Bootstrap (216)** at line 519; duplicate row at
  line 3009 under **Travel (44)** — same template, ONE app only. Mark
  BOTH rows `[x]` after merge.
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/travelo/`. DOM fetched
  (`/tmp/prep-travelo/preview.html`, 44,119 bytes, title "Travelo -
  Travel & Tourism Template") + stylesheet `css/style.css`
  (`/tmp/prep-travelo/style.css`, 390,618 bytes — contains Bootstrap 5
  vars + per-page styles for index/about/destination/elements; only the
  index-page rules matter) + fontawesome (`css/fontawesome-all.min.css`,
  74,320 bytes) + TEMPLATES.md screenshot (`travelo-free-template.jpg`,
  AVIF 249,949 bytes → PNG 1200×946, viewed in browser: hero photo of
  green terraced hills + paraglider, white cursive "Switzerland" over it,
  teal "Explore Now", navy search strip, 3-up destination cards with
  country names + teal place pills).
- **Aesthetic:** clean modern travel-agency look. Transparent header over
  the hero; giant WHITE CURSIVE country headline ("Nothing You Could Do"
  font) on the hero photo; section titles are navy Rubik 38px weight 400
  with a 16px grey `#7A838B` subtitle paragraph. Body alternates white /
  light `#F7FAFD`. Accents: **teal `#1EC6B6`** (Explore Now, price pills,
  destination place pills, video play circle, nav hover) and **red
  `#FF4A52`** (Search / More Places / Subscribe, hovers, phone icon,
  copyright heart); stars gold `#FDAE5C`; dark sections navy `#040E27`
  (search strip, footer, overlays).
- **Slider implementation in the source:** markup says `owl-carousel`
  but the bundled JS is **Swiper** (`.slider_active.swiper { height:
650px }`, swiper-button-prev/next + swiper-pagination). Testimonials
  use the same Swiper controls. Implement with React state: 3-slide hero
  slider + testimonial carousel with white circular arrows (50px,
  `rgba(255,255,255,0.9)` bg, `#1F1F1F` icon, hover → `#ff5e13` bg white
  icon) and 12px bullets (`#ccc`, active `#ff5e13`). NOTE: the swiper
  accent is orange `#ff5e13` — different from the teal/red pair, keep it
  for arrows/dots fidelity.
- **jQuery/Bootstrap plugins:** Bootstrap 5 grid + modal (search popup),
  Swiper (hero + testimonials), glightbox (video popup), AOS, isotope —
  implement with React: hamburger mobile nav, search modal (state),
  state-indexed slider/carousel, play button (decorative, no popup
  needed).
- **Fonts:** Google **Rubik** (300/300i/400/400i/500/500i/700/700i/
  900/900i) for everything except cursive accents; **"Nothing You Could
  Do"** for the hero h3 (94px desktop, white, lh .5) and video h3 (80px,
  white). Load both via `<link>`s in `index.html`.
- **Buttons:** radius 5px, Rubik 16px weight 500, capitalize. Teal
  `.boxed-btn3` (padding 18px 41px) ↔ red `.boxed-btn4` (padding 13px
  39px); hover swaps teal↔red.
- **Copy is placeholder/Lorem with typos:** "Pixel perfect design with
  awesome contents" ×3 (slider), "Suffered alteration in some form, by
  injected humour…" ×2 (section subtitles), "A wonderful serenity has
  taken to the possession of my entire soul." ×3 (variations), "Working
  in conjunction with humanitarian aid agencies…" ×3 (testimonials),
  "Journeys Are Best Measured In New Friends" ×3 (trips), "United State
  of America" ×6, "$500" ×6, "(20 Review)" ×6, "5 Days" ×6, "Franch"
  (typo → "France"), author names "Micky Mouse" / "Tom Mouse" / "Jerry
  Mouse". Paraphrase freely, FIX typos, vary repeats, keep the kinds.
- **DOM oddities:** (1) the header nav + phone/socials are desktop-only
  (`d-none d-lg-block` / `d-none d-xl-block`), mobile menu is
  JS-injected — render desktop bar + hamburger toggle with the same
  links; (2) the search icon opens a Bootstrap modal — implement a React
  dialog (input + red "search" button); (3) the newsletter band sits
  BETWEEN Popular Destination and Popular Places (unusual early
  placement — keep the order!); (4) the slider overlays are subtle
  (opacity .1 default, .7 newsletter, .2 video) — keep text legible;
  (5) place cards 3 and 5 are both "California" — vary names;
  (6) "Popular destination" footer link list has the "Franch" typo.

## Structure (top → bottom, single page)

1. **Header** (`.main-header-area`, transparent over hero, padding 25px
   100px 25px 35px) — brand logo left (compass mark + wordmark; lucide
   Compass + text is fine); centered nav (Rubik 16px capitalize navy
   `#040E27`, hover teal `#1EC6B6`): Home (active) / About / Destination
   / Pages ▾ (Destinations details, elements) / Blog ▾ (blog,
   single-blog) / Contact; right: phone "10(256)-928 256" (navy 16px
   with red Phone icon, plain text — NO `tel:`) + 4 socials (Instagram /
   Linkedin / Facebook / airbnb — lucide has no Airbnb; use `Plane` or
   drop to 3) + search icon (lucide Search) → modal. Mobile: hamburger
   (lucide Menu/X) → nav toggle.
2. **Hero slider** (`.slider_area .slider_active`, 650px / 600px mobile)
   — 3 slides (Indonesia / Australia / Switzerland): travel photo + navy
   overlay, centered `.slider_text`: cursive h3 (white, capitalize) + p
   "Pixel perfect design with awesome contents" (white 20px) + teal
   "Explore Now" (boxed-btn3). Swiper arrows + dots as above.
3. **Where you want to go?** (`.where_togo_area`, bg `#040E27`, padding
   50px 0) — left col-lg-3 h3 "Where you want to go?" (white 24px);
   right col-lg-9 `.search_form` (flex space-between; stacks below md):
   "Where to go?" text input + date input (`type="date"`, inverted
   picker) + "Travel type" select (Some option / Another option) + red
   "Search" (boxed-btn4). Inputs: 50px, transparent, 1px `#363E52`
   border, radius 5, white text, placeholder `#AAB1B7` weight 300, focus
   border `#ff5e13`.
4. **Popular Destination** (white, padding 140px 0 120px) — centered
   `.section_title`: h3 "Popular Destination" (38px navy w400) + grey p;
   6 `.single_destination` cards (3-up / 2-up tablet): photo (radius 5,
   hover translateY(-10px)) + `.content` absolute (left 30 bottom 30):
   country (22px white, hover red) + teal pill "0N Places" (12px, radius
   30px, h 25px, ml 10). Countries: Italy 07 / Brazil 03 / America 10 /
   Nepal 02 / Maldives 02 / Indonesia 05.
5. **Newsletter band** (`.newletter_area.overlay`, photo bg + navy
   overlay .7, padding 67px 0) — left: h4 "Subscribe Our Newsletter"
   (white 24px) + p "Subscribe newsletter to get offers and about new
   places to discover."; right: `.mail_form` — white email input ("Your
   mail", 50px, radius 5, Rubik 300) + red "Subscribe" (boxed-btn4
   padding 13px 40px).
6. **Popular Places** (bg `#F7FAFD`, padding 142px 0 150px) — centered
   "Popular Places" + grey p; 6 `.single_place` cards (3-up, white,
   radius 5, hover `box-shadow 0 10px 20px rgba(0,0,0,0.05)`): photo +
   teal `$500` pill (absolute top 20 left 20, radius 18px, padding 7px
   18px 4px) + `.place_info` (padding 27px 20px 25px): h3 (22px navy,
   hover red) + p (14px grey) + `.rating_days` row: 5 gold stars (12px)
   - "(20 Review)" + "5 Days" (14px grey); below: centered red "More
     Places" (boxed-btn4). Names: California / Korola Megna / London /
     Miami Beach / California / Saintmartine Iceland → vary.
7. **Enjoy Video** (`.video_area.video_bg.overlay`, photo + navy overlay
   .2, padding 190px 0) — centered cursive h3 "Enjoy Video" (80px white,
   mb 55) + 84px teal circle (radius 50%, white play icon). Decorative
   button (no popup).
8. **Travel Variation** (white, padding 150px 0 114px) — 3 items
   (col-lg-4 col-md-6, text-center): lucide icon + h3 (22px navy, mt 41
   mb 10): Comfortable Journey / Luxuries Hotel / Travel Guide + grey p.
9. **Testimonials** (bg `#F7FAFD`, padding 100px 0 118px) — carousel of
   3 `.single_testmonial` (text-center): circular photo + quote (navy
   18px lh 32) + "- Micky Mouse" / "- Tom Mouse" / "- Jerry Mouse"
   (16px grey). Swiper arrows/dots like the hero.
10. **Recent Trips** (white, padding 150px 0 120px) — centered "Recent
    Trips" (NO subtitle p); 3 `.single_trip` cards (3-up): photo (radius 5) + `.info` (pt 16): date (14px grey: Mar 15, 2032 / Apr 22, 2032 /
    May 8, 2032) + h3 (22px navy, mt 10, hover red) "Journeys Are Best
    Measured In New Friends" → vary.
11. **Footer** (bg `#040E27`, `.footer_top` padding 115px 0 129px) — 4
    widgets: (1) logo; (2) "Company" 4 links (Pricing / About / Gallery /
    Contact); (3) "Popular destination" 8 links 2-col (Indonesia /
    America / India / Switzerland / Italy / Canada / France [fix] /
    England); (4) "Instagram" `.instagram_feed` 3×2 grid of 6 small
    squares (padding 7.5px); `.footer_border` divider; bottom
    `.copy_right` bar: "Copyright © <year> All rights reserved | This
    template is made with ♥ by **Component Dock**" →
    https://www.componentdock.com/ (heart red `#FF4A52`; replaces
    Colorlib credit, NO ColorLib credit).
12. **Search modal** — React dialog: text input + red "search" submit
    (source: `.custom_search_pop` Bootstrap modal).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/wayfarer`; `npm install` at repo root; CNAME + homepage `wayfarer.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: teal `#1EC6B6`, coral/red
      `#FF4A52`, navy `#040E27`, soft `#F7FAFD`, muted `#7A838B`, star
      `#FDAE5C`, field-line `#363E52`, placeholder `#AAB1B7`, swiper
      accent `#ff5e13`; Google Fonts `<link>`s (Rubik 300–900 + "Nothing
      You Could Do")
- [ ] `src/data.ts` — nav (6 + 2 dropdowns), hero slides (3), search
      strip (3 fields + options), destinations (6), newsletter,
      places (6 with price/stars/reviews/days), variation (3), trips (3
      with dates), footer (Company 4 / Popular destination 8 / Instagram
      6), testimonials (3)
- [ ] Components: `Header` (transparent bar + hamburger + search modal),
      `HeroSlider` (3 slides, arrows, dots), `SearchStrip` (Where to go /
      date / Travel type + Search), `Destinations` (6 cards + pills),
      `Newsletter` (band), `Places` (6 cards + More Places), `VideoSection`
      (cursive h3 + play circle), `Variation` (3 features), `Testimonials`
      (carousel), `Trips` (3 cards), `Footer` (4 widgets + Component Dock
      credit)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (hero slider next/prev, mobile nav toggle, search modal
      open/close, search-strip submit, newsletter submit — assert input
      unmounts via `queryByLabelText` if the form swaps to a success
      message)
- [ ] Subject-screen picsum seeds (slider — mountain/coast travel scenes,
      3; destination 1–6; place 1–6; video bg wide; trip 1–3; square
      portrait + 6 square instagram thumbs) — pixel metric + browser
      verify; pin seeds in PR
- [ ] `bash scripts/verify-app.sh wayfarer` green; PR with source,
      preview URL, tokens, deviations (React slider/carousel / mobile
      nav / search modal / Component Dock credit); squash-merge
      immediately
- [ ] After merge: mark BOTH TEMPLATES.md Travelo rows `[x]` + surge URL
      (lines 519 and 3009 — Bootstrap 216 / Travel 44);
      `npm run readme:status`

## Verification notes / pitfalls

- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies the injected Tailwind CSS, so `hidden lg:flex` desktop
  nav lists are `display:none` and getByRole excludes them — query
  desktop-only links with `{ hidden: true }`; CSS `capitalize` does NOT
  change accessible names, query raw text ('Home'), not 'HOME'.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- The hero + testimonials are Swiper in the source (markup says
  owl-carousel but the JS is swiper) — implement state-indexed sliders
  with prev/next circular arrows + pagination dots; assert the active
  slide's headline changes. The swiper arrow/dot accent is orange
  `#ff5e13` (NOT the teal/red pair).
- The newsletter band comes EARLY (between Popular Destination and
  Popular Places) — preserve that order; it is not a footer band.
- Header is transparent over the hero (no solid bg) — the nav links and
  phone are navy `#040E27` and sit on the photo; keep the overlay dark
  enough for contrast (source uses opacity .1 wash + dark photo).
- Search-strip inputs are transparent with a 1px `#363E52` border and
  radius 5 — do NOT give them solid white boxes; date input uses
  `type="date"` with an inverted picker indicator; select uses a custom
  chevron (appearance: none) and navy options.
- No `tel:` literals anywhere (secret-scan rewrites them) — the source
  phone is "10(256)-928 256"; render as plain text.
- The source repeats copy everywhere ("$500" ×6, "United State of
  America" ×6, "A wonderful serenity…" ×3, "Journeys Are Best Measured
  In New Friends" ×3, "Working in conjunction…" ×3, "(20 Review)" ×6,
  "5 Days" ×6) — vary titles/text, fix "Franch" → "France".
- lucide has no Airbnb icon — use `Plane` (or skip) for the 4th social;
  keep the other three (Instagram / Linkedin / Facebook).
- Footer widget spacing: `.footer_title` 20px white with `margin-bottom:
45px` (20px on mobile); the Instagram feed is a 3×2 grid of small
  squares with 7.5px gutters.
- Section titles have NO decorative underline/pseudo-element — plain
  navy 38px weight 400 text with 7px bottom padding, centered.
