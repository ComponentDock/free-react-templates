# Antler (ColorLib Moose) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-antler`.

## Design notes (replication findings)

- **Original:** ColorLib "Moose" — minimalist personal blog / digital-news
  theme (source: https://colorlib.com/wp/template/moose/). TEMPLATES.md line
  274, category Blog (60). No duplicate rows for this slug (grep-checked).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/moose/ (HTTP
  200, 22,007 bytes; title "Moose - Free Bootstrap 4 Template by Colorlib").
  Master stylesheet `css/style.css` (59,987 bytes / 2,442 lines) fully
  extracted; libs: Bootstrap 4 navbar/grid, Owl Carousel, animate,
  magnific-popup, flaticon + Font Awesome 4.7 icon fonts; font **Poppins**
  (200–900) via Cloudflare Fonts.
- **Screenshot:** `moose-colorlib-template.jpg` (1200×946, viewed in
  browser) — white minimalist page; subtle navbar (lowercase "moose" left,
  Home/Articles/About/Contact right); hero with a massive bold "Moose"
  wordmark where the first 'o' (CSS spans both o's: `M<span>oo</span>se`) is
  a hollow outline; left-aligned intro "Hello! I'm Giller Moose, I Provide
  Newest News Update About Digital" + right author card (circular photo,
  name, bio); below: featured article split (phone photo left, meta + big
  headline + avatar/name/role right) with a slate-blue accent on meta and
  role text. Cross-checks the live DOM analysis. Demo brands itself "Moose";
  recreation uses the NEW name **Antler**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean minimalist
  personal blog on white. Navbar (`.ftco-navbar-light`): transparent bg over
  the hero on desktop (CSS `background: transparent !important`; hairline
  border-top/bottom rgba(255,255,255,.2)), brand "moose" #000, links #000
  15px weight 500 with `border-left: 1px solid rgba(255,255,255,.2)`
  separators, active #588da8, hover #313b44; ≤991px the navbar becomes solid
  **black** with white brand/links + "Menu" burger. Hero: giant wordmark
  `M<span>oo</span>se` — `.slider-text h1` font-size **16vw**, weight 900,
  color #313b44; the span is hollow (`color: transparent` +
  `-webkit-text-stroke: 1px #313b44`); then h2 (weight 300) intro +
  p (18px/1.5) in col-md-8; author card col-md-4: 70px circle img, h3 18px
  bold #313b44, p 16px. Blog list: `ftco-section ftco-no-pb ftco-no-pt`,
  container-fluid px-md-4 — 6× `col-md-12.blog-wrap` alternating
  white / `.bg-darken` (`background: #313b44 !important`); each row:
  col-md-6 cover image (dark rows add `order-md-last` → image RIGHT) +
  col-md-6 text (`p-md-5 py-5 px-4`): `p.meta` (12px uppercase weight 500,
  #588da8: calendar "Sept. 27, 2020", user "Admin", comment "3"), h2.mb-4
  title (45px weight 800 #313b44; white on dark rows) "Turning a digital
  brand into a real world experience", author row `div.icon.d-flex`: 60px
  circle avatar + `div.position.pl-3` h4.mb-0 name (16px bold; white on dark
  rows) + span role (12px uppercase ls 1px #588da8). After row 6: centered
  `a.btn-custom-blog` "View all articles" + chevron-right (24px weight 500,
  row py-5). Newsletter (`ftco-intro ftco-section bg-light`, centered): h2
  "Subscribe to our Newsletter"; `form.subscribe-form > .form-group.d-flex`:
  input (50px, border 1px #313b44, radius 5px 0 0 5px, text #588da8, focus
  border #588da8 !important) + submit "Subscribe" (bg #313b44, white, radius
  0 5px 5px 0, 16px) — one fused rounded unit. Footer (`.ftco-footer`, bg
  **#141b25**, padding 6em 0 0, white): 3 cols — col-4: h2.logo "Moose"
  (20px/600 white) + blurb rgba(255,255,255,.9) + 3 social circles
  (40×40, radius 50%, bg **#588da8**, white 18px icon: twitter / facebook /
  instagram); col-2: h2 "Info" + 4 links (Blog, Career, Team, Team) with
  chevron-right; col-4: h2 "Have a Questions?" + `block-23` list:
  map-marker "203 Fake St. Mountain View, San Francisco, California, USA",
  phone "+2 392 3929 210", mail "info@yourdomain.com". Copyright bar
  (`container-fluid px-0 py-5 bg-black`, centered white): "Copyright © {year}
  All rights reserved | This template is made with ♥ by Colorlib" — drop the
  Colorlib credit (precedent: Newsprint/Lede/Wire).
- **Structure (1:1, section order):**
  1. `nav#ftco-navbar` — brand "moose" left + burger (≤991px); links Home
     (active) / Articles / About / Contact right, #000 15px/500, hairline
     separators, active #588da8.
  2. `section.hero-wrap.py-md-4` — overlay div; container > row centered >
     col-md-10: `h1.text-center` "M<span>oo</span>se" (16vw/900/#313b44,
     hollow span) + row pb-md-5: col-md-8 h2 (300) intro + p 18px; col-md-4
     author card (70px circle img, h3 18px bold #313b44, p 16px bio).
  3. `section.ftco-section.ftco-no-pb.ftco-no-pt` — container-fluid px-md-4:
     6× blog-wrap alternating white/bg-darken (image left / right via
     order-md-last), each: image col + text col (meta / h2 45px title /
     author icon block); then centered "View all articles" link (py-5).
  4. `section.ftco-intro.ftco-section.bg-light` — h2 "Subscribe to our
     Newsletter" + fused email input + Subscribe button (col-md-5).
  5. `footer.ftco-footer` (#141b25) — col-4 logo + blurb + social circles;
     col-2 "Info" links; col-4 "Have a Questions?" contact block.
  6. `div.bg-black.py-5` — centered copyright line.
- **Design tokens (from `css/style.css` + computed styles):**
  - Brand accent **#588da8** — meta links, role text, active nav, social
    circle bg, input text + focus border.
  - Ink **#313b44** — hero wordmark, blog titles, bg-darken rows, submit
    button, input border, author names, nav hover.
  - Footer bg **#141b25**; copyright bar + mobile navbar **#000**; light
    band **#f8f9fa** (bg-light newsletter).
  - Text: headings #313b44, nav #000, footer rgba(255,255,255,.9), dark-row
    muted rgba(255,255,255,.5), dark-row titles/names #fff.
  - Buttons/inputs: fused unit — input radius 5px 0 0 5px, submit radius
    0 5px 5px 0, both 50px tall, border 1px #313b44, submit bg #313b44.
  - Avatars: 60px circles (blog), 70px (hero author), 40px (footer socials).
  - Font: **Poppins** (Google Fonts in recreation; body 400, titles 800/900,
    meta 500 uppercase, role 500 uppercase ls 1px).
  - Rhythm: blog-wrap margin-bottom 80px; ftco-section 7em 0 (6em mobile);
    footer padding 6em 0 0; footer widget h2 20px/600 mb 30px; hero p 18px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/antler-<n>/<w>/<h>` — 6 blog images (image_1, _2, _3,
  _5, _6, _7; source has no image_4) + 4 author avatars ≈ 10 seeds); icons →
  lucide-react (calendar, user, message-circle, chevron-right, map-pin,
  phone, mail, twitter, facebook, instagram, menu); Poppins via Google Fonts
  `<link>`; hollow wordmark span via CSS text-stroke (transparent fill +
  1px stroke #313b44; for "Antler" hollow a mid-word 2-letter span, e.g.
  "nt"); navbar transparent-on-white desktop / black mobile (width-based
  class, no JS needed); newsletter zod-validated with success state; alt
  text + focus-visible rings; persona/post copy paraphrased (hero author
  e.g. "Avery Antler"; post byline a different name + role).

## Tasks (implementation order, TDD — tests first)

- [ ] Scaffold `apps/antler` (copy simplest existing app, rename package to
      `@free-react-templates/antler`; register `injectUiSource()` in
      `vite.config.ts`; `npm install` at root for lockfile)
- [ ] `src/index.css` — Tailwind theme tokens: brand `#588da8`, ink
      `#313b44`, footer `#141b25`, black `#000`, light `#f8f9fa`; font
      family Poppins
- [ ] `index.html` — Google Fonts `<link>` (Poppins 200–900) + title
      "Antler — Blog Template"
- [ ] `Navbar.tsx` (+ test) — brand + Home/Articles/About/Contact, hairline
      separators, active #588da8, mobile "Menu" burger with aria-expanded,
      black mobile bg
- [ ] `Hero.tsx` (+ test) — 16vw wordmark "Antler" with hollow mid-word
      span (text-stroke), intro h2 + p, author card (circular avatar, name,
      bio)
- [ ] `BlogRow.tsx` (+ test) — one blog row: image col + text col (meta /
      title / author block), `dark` variant flips image side + white text
      (shared by all 6 rows via props)
- [ ] `BlogList.tsx` (+ test) — 6 alternating rows (3 light / 3 dark) +
      centered "View all articles" link with chevron-right
- [ ] `Newsletter.tsx` (+ test) — fused input + Subscribe button, zod
      validation, error + success states
- [ ] `Footer.tsx` (+ test) — logo + blurb + 3 circular social links,
      "Info" links with chevron-right, "Have a Questions?" contact block
- [ ] `CopyrightBar.tsx` (+ test) — black bar, centered copyright with ♥,
      neutral credit
- [ ] `App.tsx` (+ test) — compose all sections in order, document title
- [ ] `scripts/verify-app.sh antler` → green; `TEMPLATES.md` line 274
      "Moose" `[~]`→`[x]` + surge URL; `npm run readme:status`; PR +
      immediate squash merge
