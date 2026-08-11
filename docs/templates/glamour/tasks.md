# Glamour (ColorLib Look) — Tasks & Design Notes

> Recreation of ColorLib "Look" — free Bootstrap 4 model agency website
> template (https://colorlib.com/wp/template/look/) under the NEW name
> **Glamour** (allure/beauty — the fashion-model theme; single lowercase
> word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md — verified 2026-08-11), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Look" — free Bootstrap 4 model agency website
  template (page title: "Look - Free Bootstrap 4 Template by Colorlib"),
  listed in TEMPLATES.md under **Bootstrap (216)** line 443. ⚠ THREE
  identical dup rows exist: lines 443 / 1085 / 1716 (all `- [ ]`, none
  shipped) — when shipped, mark ALL THREE `[x]` with the glamour surge
  URL. The recreation brands itself **Glamour**.
- **Preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/look/` — HTTP 200, 48.8 KB HTML +
  `css/style.css` 73.6 KB (Bootstrap 4, owl.carousel, magnific-popup,
  scrollax/AOS, flaticon/icomoon/ionicons icon fonts, Google Fonts
  Josefin Sans + Rubik). Screenshot `look-free-template.jpg`
  (1200×946; the uploaded file is AVIF-encoded, convert before viewing
  — ffmpeg works) browser-verified: matches the live render — dark
  moody hero portrait, pink "SUPER MODEL" tag, huge condensed white
  model name, uppercase stats row, solid pink "Read more" + pink
  outline "View Gallery"; white split section with photo left and
  "LOOK A MODEL AGENCY" + pink checkmarks right.
- **⚠ KEY TRAPS:**
  - `#79efb4` mint green in style.css is ONLY the stock Bootstrap 4
    `.btn-primary` override (base bootstrap block) — the template's own
    `.btn.btn-primary` overrides it back to `#f62a66` pink. Visible
    brand accent everywhere is the PINK. Do not build the theme around
    mint.
  - Single-page landing only: nav links (About/Models/Blog/Contact)
    point to out-of-scope sibling pages — recreate as
    anchors/placeholders, never build the extra pages. No forms on the
    page — nothing to validate.
  - The model grid is 9 cards (all reuse the same name "Coleen Husaff"
    - identical stats in the source) — vary names/stats slightly for
      realism; keep card structure identical.
  - Hero slider images are full-viewport CSS backgrounds
    (`height: calc(100vh)`, min 750px) — use picsum portrait seeds
    sized 1600×1000, NOT tiny thumbs.
  - No `<img>` tags anywhere in the preview — ALL imagery is
    `background-image` (slider, split blocks, model cards, blog, nav
    overlay, testimonial avatars). Recreate with `<img>` or CSS bg but
    keep the visual behavior (cover, position center).
- **Visual design (screenshot + live render):** high-fashion editorial
  aesthetic — black fullscreen overlay nav with numbered links (01–05)
  over a half background photo; full-viewport dark moody hero portraits;
  hot pink `#f62a66` accent (position labels, buttons, checkmarks, icon
  circles, testimonial names, hover panels); huge condensed white
  uppercase names (Josefin Sans); stats rows in bordered cells; light
  gray `bg-light` model-grid heading; photo-background testimonials
  with white overlay; dark `#252525` footer.
- **Section order (1:1, verified from live DOM):**
  1. **Off-canvas nav** (`nav#colorlib-main-nav`, role navigation) —
     fixed fullscreen black overlay (inset 0, 100%×100%, z-index 1002,
     text-align center, hidden: `visibility:hidden; opacity:0`, shown
     via `body.menu-show`, transition 0.8s cubic-bezier(0.175,0.885,
     0.32,1.275)): toggle (44×44 hamburger→close, top 40 right 40) +
     `.img` bg photo left half (`images/bg_2.jpg`) + centered
     `h1.logo.mb-4` "Look<br><span>Model Agency</span>" + `ul` links:
     `li.active` "01 Home" (pink text + pink underline via
     `span:before` bg `#f62a66`) · "02 About" · "03 Models" ·
     "04 Blog" · "05 Contact". **Header** (fixed): `.colorlib-logo`
     "Look" 30px Josefin Sans uppercase ls 2px white + span 11px w300
     `rgba(255,255,255,0.8)` "Model Agency" + hamburger toggle
     (3-line icon).
  2. **Hero slider** (`section.home-slider.owl-carousel`) — 4
     `.slider-item` (bg `images/bg_1..4.jpg`, cover center, 100vh/min
     750px): `.col-md-8.col-lg-7` → `span.position` (20px uppercase
     pink w300: "Top Model's"/"Super Model's"/"Photo Model's") +
     `h1.mb-3` name (50px white uppercase ls 1px lh 1.2: Kate
     Henderson / Samantha Lewis / Jessica Alba / Michael Buff) +
     `.d-md-flex.models-info.mt-5.mb-5` (7 cells, 14% width, border-left
     1px `rgba(255,255,255,0.2)`, padding 5px 10px; mobile 20%
     inline-block): Height 185 · Bust 79 · Waist 40 · Hips 87 · Shoe 40
     · Eyes Blue · Hair Brunet + `p` CTAs: `a.btn.btn-primary.px-4.py-3`
     "Read more" (solid `#f62a66`, white; hover transparent + pink
     text) + `a.btn.btn-primary.btn-outline-primary.px-4.py-3` "View
     Gallery" (1px pink border, pink text; hover solid pink). Owl dots
     bottom center, active pink.
  3. **Split 1 — "Look A Model Agency"** (`section.ftco-section-2` >
     `.container-fluid` > `.section-2-blocks-wrapper.d-flex.row.no-
gutters`): `.img.col-md-6` (bg `images/bg_5.jpg`) + `.text.col-md-6`
     (padding 7% ≥768px / 15px mobile, bg `rgba(0,0,0,0.02)`) >
     `.text-inner.align-self-start`: `h3.heading` (Josefin Sans,
     uppercase, ls 1px, mb 30px) "Look A Model Agency" + lorem p (with
     `<strong>` words) + `ul.my-4` 3 rows `li > span.ion-ios-
checkmark-circle.mr-2` (pink): "Even the all-powerful Pointing" ·
     "Behind the word mountains" · "Separated they live in
     Bookmarksgrove" + `.row`: `.col-md-7` `.img-2` (bg
     `images/bg_1.jpg`, d-flex centered) > `a.button.popup-vimeo`
     (pink 30px play icon, pulse animation 2s infinite; links Vimeo 45830194) + `.col-md-4.d-md-flex.align-items-center` >
     `h3.watchvideo-heading` (16px w300, mb 0) `a` (black, play icon)
     "Watch our video promo".
  4. **Split 2 — "Our Tops Model's"** (same wrapper): `.col-md-6.d-flex
.align-items-center.heading-section.bg-light` > `.col-md-9` >
     `.p-5`: `h2.mb-4` "Our Tops Model's" (28px uppercase ls 1px
     Josefin Sans) + lorem p; then 9 × `.col-md-3.model-entry` >
     `.model-img` (430px cover bg `images/image_1..9.jpg`): `.name`
     (absolute bottom 0 left 0 z-1: `h3 > a` model name, links
     model-single.html) + `.text` hover panel (absolute bottom -30%
     inset-x-0, bg `#f62a66`, padding 20px, white, opacity 0 → 1,
     transition .2s): name + `.d-flex.models-info` 5 cells
     (pr-md-3): Height 185 · Bust 79 · Waist 40 · Hips 87 · Shoe 40.
  5. **Testimonials** (`section.testimony-section.img`, bg
     `images/bg_7.jpg` + `.overlay` white opacity .92): heading
     "Clients Says" (28px uppercase) + `.carousel-testimony.owl-
carousel` of `.testimony-wrap` (text-center): `.user-img` (100×100
     round, bg `images/person_1.jpg`, margin 0 auto) + `.quote` (40×40
     round pink bg, quote icon, absolute bottom -10 right 0) + quote p
     (lorem) + `.name` pink ("Mike Lewis", "Dennis Green") +
     `.position` "Architect". Owl dots active pink.
  6. **Split 3 — "Our services"** (same wrapper; image left
     `images/bg_6.jpg` / text right): `h3.heading` "Our services" + 4 ×
     `.services.d-flex` (icon 70×70 round `#f62a66` bg, white 40px
     icon span; `.info.ml-4` `h3` 18px + lorem p): **Fashion Shows**
     (flaticon-quality) · **Corporate Events** (flaticon-megaphone) ·
     **Commercial Photo Shots** (flaticon-shopping-bag) ·
     **Exhibitions/Trade Shows Shows** (flaticon-photo-camera).
  7. **Quote strip** (`section.ftco-quote` > `.req-quote`):
     `margin-bottom: -60px` (overlaps footer; ≥768px shadow 0 18px
     37px -28px rgba(0,0,0,0.75); ≤767px text-center): `h3` white
     uppercase 24px ls 3px "Wanna be a Model?" + p + `span > a`
     (bg `#f62a66`, white, padding 5px 10px) "Call us now to know
     how!".
  8. **Recent Blog** (`section.ftco-section`, 7em padding): `.row` of 4
     `.col-md-3` — a) `.heading-section` col: `h2.mb-4` "Recent Blog"
     - p.mb-5 lorem + `.btn-view` `a` (2px pink border, pink text,
       padding 14px 20px 10px) "View more"; b–d) `.blog-entry` cards:
       `a.block-20` (cover bg `images/image_1..3.jpg`, ~240px) + `.text
.pt-4.d-block`: `.meta.mb-3` (3 divs: "August 12, 2018" · "Admin"
       · chat icon "3") + `h3.heading.mt-3` `a` "Asia's Next Top Model"
       (hover `#f62a66`).
  9. **Footer** (`footer.ftco-footer.ftco-section`, bg `#252525`,
     padding 7em 0, font 16px): `.row.mb-5` 4 × `.col-md` — a) brand
     "Look" (24px w900 white) + blurb (`rgba(255,255,255,0.7)`) +
     social icon links (inline SVG — lucide has NO brand icons); b)
     "Recent Blog" `.block-21` × 2 (80px thumb + `.text`: `.heading`
     18px `a` `rgba(255,255,255,0.8)` hover pink "Even the
     all-powerful Pointing has no control about" + `.meta` 12px
     "July 12, 2018 · Admin · 19"); c) "Site Links" `ul.list-unstyled`:
     Home · About · Model · Services · Blog (text
     `rgba(255,255,255,0.4)`); d) "Have a Questions?" `.block-23`:
     map-marker + "203 Fake St. Mountain View, San Francisco,
     California, USA" · phone +2 392 3929 210 · envelope
     info@yourdomain.com. Widget h2 18px white uppercase ls 1px,
     `:after` 70px 1px white underline 15px below. Bottom
     `.col-md-12.text-center` © bar: "Copyright © All rights reserved
     | This template is made with ♥ by Colorlib" → reword credit
     (Component Dock), keep © line + heart.
- **Icon font mapping (source flaticon/ionicons → lucide-react):**
  ion-ios-play → `Play` · ion-ios-checkmark-circle → `CheckCircle2` ·
  flaticon-quality → `Sparkles` · flaticon-megaphone → `Megaphone` ·
  flaticon-shopping-bag → `ShoppingBag` · flaticon-photo-camera →
  `Camera` · icon-map-marker → `MapPin` · icon-phone → `Phone` ·
  icon-envelope → `Mail` · icon-chat → `MessageCircle` · quote icon →
  `Quote`. Social (twitter/facebook/instagram) → inline SVG brand
  icons.
- **Neighbor check (2026-08-11):** sibling model/fashion preps in the
  repo: catwalk (source?), pose (source?), podium (source?) — verify
  against `grep -l colorlib.com/wp/template/ openspec/specs/*/spec.md`
  before implementation to avoid token collision; the `#f62a66` pink +
  Josefin Sans/Rubik + fullscreen numbered overlay-nav combo is unique
  to this template so far — keep Glamour exact.

## Tasks (implementation order)

- [ ] Scaffold `apps/glamour` (copy simplest existing app, rename
      package to `@free-react-templates/glamour`; NOT `apps/look`);
      `npm install` at root so package-lock.json registers the
      workspace
- [ ] `@theme` tokens: `--color-brand: #f62a66`, `--color-ink:
    #000000`, `--color-coal: #252525`, `--color-mist: #f8f9fa` (etc.
      per spec); radii 0.25rem buttons / 50% circles
- [ ] `index.html`: Josefin Sans (headings) + Rubik (body) Google
      Fonts `<link>`, title "Glamour — Model Agency Template"
- [ ] Header + off-canvas nav: fixed brand "Glamour/Model Agency" +
      hamburger (`aria-expanded`); fullscreen black overlay with
      centered logo + numbered links 01–05 (Home active, pink
      underline), half background photo, close toggle; smooth open
      transition
- [ ] Hero slider: 4 full-viewport slides (`picsum.photos/seed/
    glamour-slide-<n>/1600/1000`), pink position label, 50px white
      uppercase name, 7-cell stats row with light dividers, solid +
      outline pink buttons; index-based slider with pink dots +
      next/prev
- [ ] Split 1: photo left + "Glamour A Model Agency" text right (7%
      padding, subtle gray bg), 3 pink checkmark rows, pulsing round
      play button + "Watch our video promo" link (modal/external
      Vimeo)
- [ ] Models grid: bg-light heading col + 9 portrait cards
      (`glamour-model-<n>/600/860`, 430px tall), name overlay bottom,
      hover slides up pink stats panel (Height/Bust/Waist/Hips/Shoe);
      responsive 4→3→2 cols
- [ ] Testimonials: photo bg + white overlay .92, "Clients Says",
      carousel of quote + 100px round avatar + pink quote badge +
      pink name + position
- [ ] Services: photo left + "Our services" + 4 rows (70px round pink
      icons, titles + blurbs)
- [ ] Quote strip: "Wanna be a Model?" uppercase + pink pill link,
      -60px overlap onto footer, shadow; centered on mobile
- [ ] Blog: heading col ("Recent Blog" + blurb + outlined "View more") + 3 cards (image, meta date/Admin/3, "Asia's Next Top Model",
      hover pink)
- [ ] Footer: `#252525`, 4 widgets (brand + blurb + social inline SVGs
      · Recent Blog block-21 · Site Links · Have a Questions?) + © bar
      with reworded credit; 4→1 cols responsive
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh glamour` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs
      (placeholder images, reworded footer credit, lucide icon
      mapping); merge immediately; mark ALL THREE TEMPLATES.md "Look"
      rows (lines 443 / 1085 / 1716) `[x]` + surge URL + `npm run
    readme:status`
