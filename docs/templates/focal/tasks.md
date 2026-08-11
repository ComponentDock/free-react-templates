# Focal (ColorLib Revive) — Tasks & Design Notes

> Recreation of ColorLib "Revive"
> (https://colorlib.com/wp/template/revive/) under the NEW name **Focal**
> (a photography-themed word — "focal length" — the "camera/lifestyle
> photography" spirit of "Revive" without reusing the source name), per
> the monorepo naming mandate. Category: **Blog (60)**. NOTE: "Revive"
> appears TWICE in TEMPLATES.md (same source slug) — one recreation
> covers both rows.

## Design notes (replication findings)

- **Original:** ColorLib "Revive" — photography/lifestyle blog template
  (source: https://colorlib.com/wp/template/revive/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/revive/`
  (HTTP 200, ~45.8 KB HTML + `css/main.css` ~46.9 KB parsed for tokens).
  The live preview is the authoritative reference.
- **Screenshot:** `revive-free-template-1.jpg` (1200×946) loads and
  matches the DOM: white header with centered serif wordmark + flanking
  hairlines; hero = dark-navy left column (vertical circular social
  icons) + big photography slide + narrow right photo; navy block with
  white serif tagline "Make the world a better place with camera" and
  numbered slider dots (1–5) + arrows; 2-col blog card grid; light-gray
  sidebar with Search Posts + Instagram widgets.
- **Visual design:** elegant editorial magazine aesthetic — deep dark
  navy #13113a + white/#f9f9ff + photography; Playfair Display serif
  headings/logo/nav (italic, bold) with Open Sans body; square buttons
  except pill pagination; photography does the heavy lifting.
- **Structure (1:1, section order):**
  1. Header (`header-area`, white): `header-top` flex — left `menu-left`
     (Home active / Category / Archive, Playfair italic bold 14px #000 →
     #13113a, hidden <992px), center logo (`logo-outer/inner` wordmark
     img + 1px #13113a flanking hairlines 120px/80px → implement as
     "Focal" text + lines), right `navbar` (toggler `lnr-menu`; collapse
     `menu-right`: Home · Category · Pages dropdown [Elements · Blog
     Detail · Contact] · 2 `hide-lg` mobile links; nav-link Playfair
     italic bold 14px #000, padding 38px 0, hover #13113a; dropdown
     links italic capitalized).
  2. Hero (`home-banner-area`): `container-fluid` (padding-left 28%) +
     `::before` = solid **#13113a** band (73% width, full height, shadow
     0 10px 30px rgba(153,153,153,.3)); `owl-carousel.home-banner-owl`
     — 4 slides (`banner-img`: full-width photo + `text-wrapper`
     max-w 700px p 40px 0: h1 white Playfair 36px "Make the world a
     better place<br>with camera"); `owl-dots` numbered 01–04 (right
     25% bottom 8%, #13113a bold) + `owl-nav` arrows (right 22% bottom
     8%, hidden <1300px); left vertical rail `social-icons` (top 56%
     left 17%, rotate(-90deg), hidden <1200px): 3 circular 30px socials
     (bg #424161 white icon, hover invert; inner rotate(90deg)) +
     `li.diffrent` "sharre now" (typo → "Share Now", 13px uppercase 600
     white), 80px #828bb2 hairlines flanking.
  3. Blog posts (`blog-post-area.section-gap`, p 130px 0): row →
     `col-lg-8` inner 2-col grid (`col-lg-6 col-md-6`) of EIGHT
     `single-amenities` cards (bg #f9f9ff, mb 60px; hover → #fff +
     shadow 0 20px 30px rgba(0,35,71,.1), white sweep across thumb
     `::before` left 110% → -130%). Card: thumb img w-100; details
     (p 40px): h5 a title Playfair 18px lh 27px #13113a; meta mb-10
     13px #706f87 (ti-calendar + "20th Nov, 2018", ml-20 ti-comment +
     "05"); excerpt p; footer d-flex justify-between mt-20:
     `blog-post-btn` "Read More" + ti-arrow-right (uppercase 12px 600
     #13113a, arrow slides +10px hover, opacity .9) + `category` a
     (ti-folder + "Travel").
  4. Pagination (`blog-pagination`, centered, pt 10px): links 01 02 03
     04 09 — transparent, p .5rem, mx 2px, #818bb3; active/hover →
     bg #13113a white radius 40px (pill).
  5. Sidebar (`widget-wrap` col-lg-4, mt 80px mobile): SIX
     `single-sidebar-widget` (p 50px 30px, bg #f9f9ff, mb 30px; titles
     20px 700 #13113a + ::after 2px 80px underline):
     - Search: input 80% (h 40px, placeholder "Search Posts" #13113a
       80%) + button 20% white fa-search.
     - Instagram: `instafeed-title` + 3-col grid (li 33%, img m 5px) ×
       6 squares.
     - Categories ("Catgories" typo → fix): `cat-list` 5 li (white bg,
       p 13px 20px, mb 15px, name+count 14px 300 #706f87; hover →
       bg #13113a white): Fashion 59 · Travel 09 · Lifestyle 24 ·
       Shopping 44 · Food 15.
     - Popular Posts: 4 `single-post-list` (thumb + h6 16px lh 26px +
       "Mate Winston | Dec 15").
     - Newsletter: centered p + input (h 50px, radius 0, placeholder
       "Subscribe") + `bbtns` "Subscribe" (bg #13113a white uppercase
       12px 500 p 12px 20px radius 0; hover opacity .9). Source label
       "Subcribe" → fix.
     - Share this post: 4 × 50×50 square icons (1px #706f87 border,
       20px #13113a: fb/tw/pinterest/ig; hover bg #13113a white).
  6. Footer (`footer-area`, bg #000): 4 cols — About Us (lg-3: h6 white
     18px 600 + lorem); Newsletter (lg-4: h6 + "Stay update with our
     latest" + form: input 80% bg #191919 p-l 20px uppercase 12px
     placeholder "Enter Email" #555555 + `click-btn` white bg #13113a
     arrow); Instagram Feed (lg-4: h6 "Instragram Feed" → fix, 4-col
     grid li 25% × 8 imgs); Follow Us (lg-2: h6 + "Let us be social" +
     4 brand links fb/tw/dribbble/behance #555555 → white hover).
     Bottom `footer-bottom`: "Copyright © All rights reserved | This
     template is made with ♥ by Colorlib".

## Design tokens (from `css/main.css` + preview DOM)

| Token         | Value(s)                                                                                                                                                                                                                                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ink / brand   | #13113a (dark navy) — headings, blog-post-btn, primary-btn bg, active pagination, cat-list hover, newsletter bbtns, share hover, hero navy band, logo/widget underlines, ::selection bg                                                                                                                      |
| Body text     | #706f87 — 14px weight 500 lh 24px (body, card meta, category links, cat-list text)                                                                                                                                                                                                                           |
| Card bg       | #f9f9ff (blog cards, sidebar widgets); hover → #fff + shadow 0 20px 30px rgba(0,35,71,0.1)                                                                                                                                                                                                                   |
| Muted grays   | #818bb3 (pagination links) · #828bb2 (share borders, hero rail hairlines)                                                                                                                                                                                                                                    |
| Hero socials  | circle bg #424161, white icon; hover invert (white bg / #13113a icon); rail rotate(-90deg), hairlines 80px #828bb2                                                                                                                                                                                           |
| Footer        | bg #000000 · h6 #fff 18px 600 · input bg #191919 · placeholder #555555 uppercase 12px · social icons #555555 → white                                                                                                                                                                                         |
| Fonts         | Playfair Display serif 700 (h1–h6 #13113a lh 1.2, logo, nav italic bold) · Open Sans sans-serif (body 14/500/24, meta 13px, buttons 12px/600 uppercase) — Google Fonts `<link>`                                                                                                                              |
| Buttons       | blog-post-btn: transparent uppercase 12px 600 #13113a, radius 0, arrow +10px on hover, opacity .9 · primary-btn: bg #13113a white 12px lh 50px px 38px radius 0 · bbtns: bg #13113a white uppercase 12px 500 p 12px 20px · click-btn: white bg #13113a icon. All square except pagination pill (radius 40px) |
| Pagination    | link transparent p .5rem mx 2px #818bb3; active/hover → bg #13113a white radius 40px                                                                                                                                                                                                                         |
| Widgets       | p 50px 30px bg #f9f9ff mb 30px; titles 20px 700 + ::after 2px×80px #13113a underline                                                                                                                                                                                                                         |
| Category list | li white bg p 13px 20px mb 15px; hover bg #13113a white text                                                                                                                                                                                                                                                 |
| Share icons   | 50×50 square, 1px solid #706f87, 20px #13113a; hover bg #13113a white                                                                                                                                                                                                                                        |
| Spacing       | section-gap p 130px 0 (80px < 992px); card mb 60px; sidebar widgets mb 30px                                                                                                                                                                                                                                  |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-ink` = #13113a, `--color-body` = #706f87,
  `--color-card` = #f9f9ff, `--color-muted` = #818bb3,
  `--color-border` = #828bb2, `--color-social` = #424161,
  `--color-input` = #191919, `--color-footer` = #000000,
  `--color-footer-muted` = #555555. Use via Tailwind classes per
  conventions.
- Google Fonts `<link>` in `index.html`:
  `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,700&display=swap`.
- Only dynamic pieces: the mobile nav toggle (React state,
  aria-expanded) and the hero slider (auto-advance + prev/next arrows +
  numbered dots 01–04 — simple useState index + setInterval with
  cleanup, or a tiny manual loop; do NOT add owl-carousel). The nav
  dropdown can be CSS hover/group or a small state toggle (accessible).
- Brand icons (Facebook, Twitter, Pinterest, Dribbble, Behance,
  Instagram): lucide-react REMOVED brand icons — use inline SVG paths
  (simple-icons) per the replication skill. Hero rail: 3 icons (fb, tw,
  pin); sidebar share: 4 (fb, tw, pin, ig); footer: 4 (fb, tw,
  dribbble, behance).
- Lucide mappings (themify/font-awesome → lucide): ti-calendar
  `Calendar`, ti-comment `MessageCircle`, ti-folder `Folder`,
  ti-arrow-right / fa-long-arrow-right `ArrowRight`, fa-search `Search`,
  lnr-menu `Menu`, mail `Mail`.
- Placeholders: `picsum.photos/seed/focal-<n>/<w>/<h>` — hero slides
  1600×900 ×4 (photography-ish seeds), blog cards 600×400 ×8, sidebar
  instagram 200×200 ×6, popular thumbs 120×100 ×4, footer instagram
  200×200 ×8. Logo = text wordmark ("Focal", Playfair bold) + hairline
  divs, no image.
- The hero navy band is `::before` on the container-fluid (73% width,
  full height, left 0, shadow) — implement as an absolutely-positioned
  div behind the slider text (z-index layering), NOT a gradient.
- Vertical social rail: rotate the ul -90deg, counter-rotate each icon
  +90deg, `hidden lg:hidden`-style breakpoint at ~1200px (use
  `max-xl:hidden` or a lg: variant + explicit media query per app
  pattern).
- Slider dots are NUMBERED counters (01, 02, ...) — render the numbers
  as text (padStart), not bullet dots. Arrows hidden below ~1300px.
- Cards: demo repeats 2 titles across 8 cards — use distinct picsum
  seeds, paraphrase the titles (keep: title + date + comment count +
  excerpt + Read More + category). Same for sidebar popular posts (4
  distinct titles + "Mate Winston | Dec 15").
- Source typos to fix in recreation: "sharre now" → "Share Now",
  "Catgories" → "Categories", "Subcribe" → "Subscribe",
  "Instragram Feed" → "Instagram Feed", "There's goting to be a musical
  about meghan" → fix grammar ("There's going to be a musical about
  Meghan").
- Newsletter widget + footer newsletter forms: local state; on submit
  show a success message (per skill pitfall: assert `queryByLabelText`
  absent after submit in tests).
- Do NOT copy the demo's images, fonts files, or CSS — recreate tokens
  in Tailwind. No icon fonts (fontawesome/themify/linearicons) — lucide
  - inline SVG brand icons only.
- The blog-post-btn arrow slides +10px on hover (`group-hover:ml-2.5`
  or translate-x transition). Pagination active + hover both show the
  navy pill (radius 40px) — test both states.
- Header nav links have big vertical padding (38px 0) — keep the tall
  header feel; the left menu-links group is desktop-only (hidden on
  mobile) while nav items collapse into the toggle.

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/focal`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh focal` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md (BOTH "Revive"
      rows — line ~283 and ~2211) + surge URL, `npm run readme:status`,
      PR + immediate squash merge
