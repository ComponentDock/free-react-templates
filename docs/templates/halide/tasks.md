# Halide (ColorLib Yaseen) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-halide`.

## Design notes (replication findings)

- **Original:** ColorLib "Yaseen" — free Bootstrap creative photography /
  portfolio landing page template (source:
  https://colorlib.com/wp/template/yaseen/). TEMPLATES.md has FOUR copies of
  this item (lines 540, 2103, 2480, 2578 — mark EVERY copy `[x]` when done).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/yaseen/` (HTTP
  200, 16.6 KB; master stylesheet `css/main.css` ~30.7 KB, fully extracted).
  Libs: bootstrap, font-awesome (footer social), linearicons (sun icon +
  hamburger), magnific-popup + nice-select (referenced, unused on index),
  jquery.counterup (facts counters). Google Font **Poppins** (inlined
  @font-face in head; weights 100/300/500/600). Cross-checked with the
  TEMPLATES.md screenshot (`yaseen-creative-photography-website-landing-page-
template.jpg` 1200×972, browser-viewed — full page visible). Demo brands
  itself "YASEEN"; recreation uses the NEW name **Halide** (silver halide,
  photographic film chemistry; brand gradient #91d1ff → #a387ff).
- **Visual design (DOM + CSS tokens + screenshot):** light-blue → lavender
  gradient theme over a FIXED background photo (banner-bg.jpg, hooded person,
  blurred — `body { background-attachment: fixed }` + `body:after` full-page
  gradient overlay #91d1ff → #a387ff at opacity 0.6, z-index -1). Header over
  the hero: "YASEEN" logotype (bright blue) left; right nav (Home / Generic /
  Elements, 12px/500 uppercase #777, hover bg #a387ff + white) + hamburger.
  Hero banner: 540px centered row on the gradient overlay — white uppercase
  h1 "YASEEN / What else do you need?" (36px weight 100, span 600) + white
  paragraph, NO button. White About split: left photo with polaroid frame
  (outline 10px solid #777 offset -54px, transparent border 15px 10px 85px
  85px), right sun icon #a387ff + h1 "Visually clean & Perfect" (weight 100
  purple, span black 600) + p + "Learn Details" black link (hover purple).
  GRADIENT features section (6 white cards: Multiple Layouts / Endless
  Features / Responsive View / Clean Coding / Fully Customizables / Flexible
  Design). Facts band (4 counters: 2536 New Followers / 6785 Site Visitors /
  1059 Online now / 2239 New Customers; number 48px/600, caption 24px/100
  purple; counterup count-up). Services (3 cards, alternating img top/bottom;
  demo content is FOOD/chef themed: "The Important of food", "To Hire A
  Personal Chef", "Thrill Friends And Family"; purple "View Details" links).
  Numbered features (01/02/03 purple 48px numerals + uppercase titles with
  "-" dash prefix). GRADIENT subscription ("Subscribe for our Newsletter",
  "We won't send any kind of spam", rounded #f9f9ff email input + white-
  bordered pill "Get Started" w/ arrow). Footer (uppercase menu + 4 social
  icons + copyright). Demo copy = lorem/placeholder — paraphrase into
  photography copy, keep the same kind of content.
- **Structure (1:1, section order):**
  1. Header (`header` in `.hero-area`): `div.logo` `a` (img/logo.png → text
     logotype "HALIDE", Poppins 600 uppercase, purple/dark); `div.main-
menubar`: `nav` Home / Generic / Elements (12px/500 uppercase #777,
     hover bg #a387ff white) + `div.menu-bar` hamburger (lnr-menu 24px
     #222). Mobile: hidden nav → hamburger state toggle (slide-down menu).
  2. Hero banner (`div.banner-area.relative`): `div.overlay.hero-overlay-bg`
     (gradient to bottom right #91d1ff → #a387ff over bg photo) + `div.row
.height` (540px, centered) > col-lg-7 `div.banner-content.text-center`:
     `h1.text-uppercase.text-white` "<span>Halide</span> <br> What else do
     you need?" (36px weight 100 lh 1.25; span 600) + `p.text-white.p-2.mb-
30` (paraphrased intro). No CTA.
  3. About (`section.about-area pt-100 pb-100`, bg #fff): col-lg-6
     `div.about-left` `img.img-fluid` (about.jpg → seeded landscape; frame:
     outline 10px solid #777 offset -54px + transparent border 15px 10px
     85px 85px) + col-lg-6 `div.about-right`: `span.lnr.lnr-sun` (30px
     #a387ff → lucide Sun) + `h1.text-uppercase` "<span>Visually</span> <br>
     clean & Perfect" (36px weight 100 #a387ff; span 600 #000) + `p` (pr
     45px) + `a.learn-btn.text-uppercase` "Learn Details" (#000/600, hover
     #a387ff).
  4. Features (`section.feature-area pt-100 pb-100`, gradient 135deg
     #a387ff → #91d1ff): 6 × `div.single-feature` (col-lg-4 col-md-6; bg
     #fff, padding 40px, mb 30px): `h2.text-uppercase` (1.125em/600, ls 2px,
     mb 20px) + `p` (14px/300 lh 25px). 6 titles listed above (vary the
     demo's repeated lorem).
  5. Facts (`section.facts-area pt-100 pb-100`): 4 × `div.single-fact`
     (col-lg-3 col-md-6, text-center): `h2.counter` 48px/600 (counterup →
     count-up hook or static) + `p.text-uppercase` 24px/100 #a387ff.
  6. Services (`section.secvice-area pt-90 pb-90`): 3 × `div.single-service`
     (col-md-4): `img.img-fluid.d-block.mx-auto` (s1 top, s2 BELOW desc,
     s3 top; mt 20px ≤768px) + `div.desc`: `h2.text-uppercase` (1.125em/600
     ls 2px, padding 20px 20px 0) + `p` (2nd card p min-height 152px) +
     `a.view-details.text-uppercase` (#a387ff). Content: food/chef → adapt
     to photography services (e.g. Wedding Shoots, Portrait Sessions,
     Event Photography) or keep food themes — same kind of content.
  7. Numbered features (`section.feature-bottom-area pt-100 pb-100`): 3 ×
     `div.single-feat2` (col-lg-4, d-flex justify-content-between): `div.count`
     `h1` 48px #a387ff (01/02/03) + `div.desc`: `h2.text-uppercase`
     (1.125em/600 ls 2px, `::before` content "-", mt/mb 10px) + `p` lh 25px.
     Titles: responsive View / Multiple Layouts / Flexible Design.
  8. Subscription (`section.subscription-area pt-100 pb-100`, gradient
     135deg #a387ff → #91d1ff): col-lg-8 `div.section-title.text-center`:
     `h3.text-uppercase.text-white` "<span>Subscribe</span> <br> for our
     Newsletter" (36px weight 100; span 600) + `span.text-white` "We won't
     send any kind of spam" (14px/300); col-lg-6 `form.subscription`:
     `input[type=email]` placeholder "Email address" (lh 50px, padding 0
     180px 0 25px → 0 25px mobile, radius 25px, bg #f9f9ff, 300) +
     `button.primary-btn.hover` "Get Started" (span.mr-10 + lnr-arrow-right
     → lucide ArrowRight).
  9. Footer (`section.footer-area pt-60 pb-60`, mb 90px): `ul.footer-menu`
     (inline-flex 14px/600 uppercase; li padding 0 40px → 0 20px ≤768px;
     hover #a387ff) Home / Generic / Elements; `footer`: `div.footer-social`
     (center, mt/mb 40px; 4 × `a` padding 20px, i #777 hover #a387ff —
     facebook/twitter/dribbble/behance fa → inline SVG brand icons) +
     `div.footer-content` `div.text-center` copyright ("© <year> All rights
     reserved | This template is made with ♥ by ColorLib" → REPLACE ColorLib
     credit with the mandated Component Dock link
     https://www.componentdock.com/).
- **Design tokens (from `css/main.css`):**
  - Brand gradient pair: **#91d1ff** (light blue) ↔ **#a387ff** (lavender).
    Hero + body overlay: linear-gradient(to bottom right, #91d1ff, #a387ff)
    (body overlay opacity 0.6); feature + subscription: linear-gradient
    (135deg, #a387ff, #91d1ff); primary-btn hover fill: 135deg #91d1ff →
    #a387ff.
  - Accent **#a387ff** on light sections: about h1 + icon, fact captions,
    view-details, feat2 numerals, nav hover bg, footer link/social hovers.
  - Text: headings **#222222**; body **#777777** 14px/300 lh 1.5; about
    span/learn-btn **#000**; white on gradient bands.
  - Bgs: white sections (#fff); input **#f9f9ff**; feature-card padding 40px.
  - Font: **Poppins** (100/300/500/600) via Google Fonts
    (`https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;600&display=swap`).
  - Buttons: `.primary-btn` radius 20px (pill), lh 40px, padding 0 30px,
    transparent bg, 1px #fff border, color #222 (500), label #fff; hover
    gradient fill + white + transparent border. `.learn-btn` #000/600
    uppercase link. `.view-details` #a387ff link.
  - Headings: h1 36px (banner weight 100 span 600; about weight 100 #a387ff
    span 600 #000); card h2 1.125em/600 ls 2px; fact number 48px/600;
    feat2 number 48px #a387ff; fact caption 24px/100 #a387ff; subscription
    h3 36px/100 (span 600).
  - Rhythm: 100px vertical padding on about/feature/facts/feat2/subscription
    (pt-100 pb-100), services pt-90 pb-90, footer pt-60 pb-60 + mb 90px;
    banner row height 540px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/halide-<n>/<w>/<h>`); logo → text logotype "HALIDE";
  fixed page bg → fixed-position div with seeded picsum + 60% gradient
  overlay (Tailwind); about photo → seeded landscape; service photos →
  seeded picsum (screen seeds for subject fit); icons → lucide-react (Sun,
  ArrowRight, Menu, X) + inline SVG brand icons for social (facebook,
  twitter, dribbble, behance); Poppins via Google Fonts; counterup → small
  React count-up hook (IntersectionObserver + rAF) or static numbers; no
  magnific-popup/nice-select deps; mobile menu via state toggle; newsletter
  submit → success message per repo conventions.

## Implementation task outline

1. Copy the simplest existing app (e.g. `apps/sweatly` or another recent
   one) → `apps/halide`; rename package to `@free-react-templates/halide`;
   run `npm install` at repo root; register `injectUiSource()` in
   `vite.config.ts`.
2. `@theme` tokens in `src/index.css`: brand gradient stops `#91d1ff` +
   `#a387ff`, heading `#222222`, body `#777777`, black `#000`, input bg
   `#f9f9ff`; fonts Poppins in `index.html`; fixed page background + 60%
   gradient overlay.
3. Components (src/components/): `Header` (logotype + 3 links + hamburger/
   mobile menu), `HeroBanner`, `About`, `Features`, `Facts` (count-up),
   `Services`, `NumberedFeatures`, `Subscription`, `Footer` (menu + social
   SVG + Component Dock link).
4. `src/App.tsx` composes sections in demo order; document title "Halide —
   Photography Template".
5. Tests FIRST (red) per section spec scenarios; then implementation; 100%
   coverage (lines/functions/branches/statements).
6. Verify: `scripts/verify-app.sh halide`; `npm run spec:validate`.
7. PR: `feat/template-halide` → squash-merge to main; PR description
   includes source template, preview URL, design tokens, what differs
   (renames, placeholder images, paraphrased copy, Component Dock footer
   link); mark all FOUR TEMPLATES.md lines (540, 2103, 2480, 2578)
   `[~]`/`[x]`.
