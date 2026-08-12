# Stills (ColorLib Boto) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-stills` by an implementer stream.

## Design notes

- **Original:** ColorLib "Boto" — free photography HTML template.
  Source: https://colorlib.com/wp/template/boto/. Single-page homepage;
  subpages (about.html, gallery.html, blog.html, blog-single.html,
  contact.html) are linked from the nav but NOT recreated.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/boto/`
  (HTTP 200, 6.4KB) + stylesheets `css/style.css` (15.9KB),
  `css/slick.css`, `css/slicknav.min.css`, `css/fresco.css`,
  `css/bootstrap.min.css`, `css/font-awesome.min.css`; scripts
  `js/main.js` (slick config). Full DOM + CSS extracted to `/tmp/boto.html`,
  `/tmp/boto.css`. Screenshot `boto-photography-website-template.jpeg`
  (1200×946) confirms: stark white portfolio page — thin top strip with
  Facebook/Twitter/Instagram left and search/cart right, centered bold
  black "#Boto" logo, centered uppercase nav (HOME marked with a green
  highlight bar), hero = row of five photos with the center image large
  (lavender field under a starry Milky Way), left photos: photographer
  with camera + abstract neon swirl; right: moody blue portrait + dark
  portrait with star-speckle lighting; caption "Nature / Photography"
  under the center image; simple centered copyright footer. Aesthetic:
  elegant gallery on white/black/gray with green #8DB952 accent; photos
  supply color.
- **Structure observed (1:1):**
  1. `div#preloder` — fixed white overlay + 40px spinner (4px border
     cycling #f44336 → #673ab7). Omit in React (instant load); note it.
  2. `header.header` (padding 40px 45px 0; 40px 0 0 ≤576px) >
     `div.container-fluid` > `div.row` (Bootstrap 3-col):
     - `.col-sm-4.col-md-3` > `.header__social`: 3 × `a` 16px #222222
       (margin-right 15px): fa-facebook, fa-twitter, fa-instagram.
       Hidden ≤576px.
     - `.col-sm-4.col-md-6.text-center` > `a.site-logo` > `img`
       (logo.png 102×41 — bold black "#Boto", hash prefix included).
     - `.col-sm-4.col-md-3` > `.header__switches` (text-right; centered
       - padding-top 20px ≤576px): `a.search-switch` (fa-search),
         `a.nav-switch` (fa-bars; hidden on desktop; ≤576px a 40px circle,
         bg #e1e1e1), `a` (fa-shopping-cart — decorative).
     - `nav.main__menu` (padding-top 25px, centered) > `ul.nav__menu`
       (inline-block li): Home (`menu--active`), About, Gallery, Blog
       (`ul.sub__menu` dropdown: "Blog Single"), Contact. Links 16px 700
       uppercase #7E858B, margin-right 40px; `a:after` = 6px #8DB952 bar
       bottom 8px, width 0 → 100% on active/hover (0.3s); text → #222222.
       Submenu: absolute white 170px, padding 10px 0, shadow
       0 9px 50px rgba(0,0,0,0.1), links 14px 700 #7E858B (hover
       #222222), 25px hover bridge. `ul.nav__menu` hidden ≤576px →
       slicknav off-canvas.
  3. `section.hero__section` (padding-top 120px, margin-bottom 90px;
     30px ≤576px):
     - `div.hero-slider` (slick: dots false, infinite, speed 300,
       slidesToShow 1, centerMode true, variableWidth true, autoplay
       3000ms pauseOnHover false, asNavFor .hero-text-slider, wheel →
       prev/next, click slide → go): 7 × `div.slide-item` (padding 0 5px,
       cursor pointer) > `a.fresco` (lightbox) > `img` (height 570px,
       padding 65px 0; `.slick-center img` padding 0). Slides:
       img/hero-slider/1..7.jpg.
     - `div.hero-text-slider` (dots false, infinite false, arrows false,
       asNavFor .hero-slider; centered, padding-top 50px, max-width
       800px): 7 × `div.text-item`: `h2` title (36px, line-height 1.4,
       Arimo 700, #222222) + `p` "Photography" (16px #7E858B). Titles:
       Nature, Red Heartbeat, Blue Dreem, Christian Church, Red Darkness,
       Beauty with Brain, Remarkable.
  4. `footer.footer__section` > `.container` > `.footer__copyright__text`
     (centered, padding-bottom 5px): `p` 16px copyright + heart
     (fa-heart #d32a2a) + Colorlib link (#7E858B underline, hover
     #8DB952) → repo-standard credit.
  5. `div.search-model` — fixed full-screen white (z-index 99999): centered
     `form.search-model-form` > `input` (500px, 34px, bottom border 2px
     #ededed, #999, placeholder "Search here.....") + `.search-close-switch`
     (50px circle bg #333 white rotated "+", top 30px). Toggled by search
     icon. Optional.
- **Design tokens (`css/style.css`):**
  - Brand: **#8DB952** green (nav active/hover underline bar, .site-btn
    bg, footer link hover).
  - Fonts: **Arimo** (Google font; body + headings; headings 700 #222222;
    body p 16px #7E858B line-height 1.8). Raleway only on subpage blog
    tags. Preview HTML omits the Google Fonts link (falls back to system
    sans) — load Arimo via `<link>` in index.html or keep repo default.
  - Colors: #222222 (headings, nav active/hover, social/switches, logo),
    #7E858B (body, nav idle, footer links), #fff (page bg), #e1e1e1
    (nav-switch circle), #ededed (search underline), #999 (search text),
    #d32a2a (footer heart), #f44336/#673ab7 (preloader spinner).
  - Buttons: .site-btn — #8DB952 bg, white 700 16px, padding 16px 15px,
    min-width 180px, radius 2px, line-height 1.
  - Shapes: 6px nav highlight bar; 40px circle (nav-switch); 50px circle
    (search close); radius 2px buttons; slider images 570px tall + 65px
    vertical padding (center slide padding 0).
  - Section bgs: all white (hero = photo slider on white, no overlay).
  - Spacing: header 40px 45px 0; menu padding-top 25px; nav margin-right
    40px; hero 120px top / 90px bottom; text slider padding-top 50px.
- **Recreation decisions:** 3-part header grid (socials left / logo center
  / switches right); wordmark "#Stills" bold black; cart icon decorative
  (keep or drop — note choice); centered uppercase menu with green marker
  on active/hover; Blog dropdown simplified to "Blog Single" or dropped;
  subpage links → `#` anchors; mobile: hide socials, 40px #e1e1e1
  hamburger circle, state-toggle menu panel; hero = hand-rolled center-mode
  carousel (React state, no slick): 7 photos, large center + neighbors
  peeking, ~3s autoplay, click-to-advance, synced caption (title +
  "Photography"); fresco lightbox → optional simple modal or no-op;
  search modal optional (include if straightforward); preloader omitted;
  lucide-react icons + inline SVG brand icons (facebook, twitter,
  instagram); picsum-seeded photos (portrait-ish center slide,
  `picsum.photos/seed/stills-N/w/h`); footer = centered repo-standard
  credit.

## Tasks (implementer checklist)

- [ ] Scaffold `apps/stills` (copy simplest existing app; package
      `@free-react-templates/stills`; register workspace).
- [ ] index.html: title "Stills — Photography Portfolio"; Arimo Google
      Fonts `<link>` (or repo default stack — note choice).
- [ ] `@theme` tokens: `--color-brand: #8DB952` (green), `--color-ink:
  #222222`, `--color-body: #7E858B`, `--color-muted: #999999`,
      `--color-switch: #e1e1e1`, `--color-heart: #d32a2a`.
- [ ] Header: 3-part flex/grid row — social icon links left (facebook,
      twitter, instagram inline SVGs), centered "#Stills" wordmark, search + hamburger + cart icon links right; mobile: hide socials, hamburger
      becomes a 40px #e1e1e1 circle, switches centered below logo.
- [ ] Nav menu: centered uppercase 16px/700 links (Home active, About,
      Gallery, Blog, Contact) in #7E858B; 6px #8DB952 underline bar
      growing on active/hover, text → #222222; Blog dropdown (white, soft
      shadow, "Blog Single") or simplified; mobile hamburger toggles the
      menu list.
- [ ] Hero slider: 7 photos carousel, center-mode (large center slide,
      neighbors partially visible), ~3s autoplay, click adjacent photo →
      advance, synced caption below (36px bold #222222 title + "Photography"
      16px #7E858B); hand-rolled with React state (no slick dep); lightbox
      modal optional.
- [ ] Footer: single centered copyright bar with repo-standard credit
      (muted gray links, green hover).
- [ ] Search modal (optional): full-screen white overlay, large input
      (34px, 2px #ededed bottom border, #999, "Search here....."), 50px
      #333 circular close; toggled by header search icon.
- [ ] Tests: 100% coverage (header content + mobile variant, nav menu +
      active marker + hover + dropdown + mobile toggle, hero slider render + autoplay/advance + caption sync, footer, composition, document
      title; search modal if implemented).
- [ ] Gate: `npm run verify:app -- stills` (typecheck → lint → vitest
      100% → build).
- [ ] PR description: source Boto, preview URL, tokens, renames, icon
      substitution note (lucide/inline SVG for font-awesome), picsum
      note, and the preloader/lightbox/cart/search decisions.
- [ ] After merge: verify live surge URL + bundle; bookkeeping `[x]` +
      URL on the Boto row (line 350).
