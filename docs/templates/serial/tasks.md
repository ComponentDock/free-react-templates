# Serial (ColorLib Magdesign) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-serial`.

## Design notes (replication findings)

- **Original:** ColorLib "Magdesign" — clean editorial magazine/news blog
  template (source: https://colorlib.com/wp/template/magdesign/).
  TEMPLATES.md has THREE copies (lines 271, 603, 2199 — duplicate rows in
  the Blog, Bootstrap 5, and Magazine sections; one recreation covers all
  three; implementer marks ALL THREE `[x]`).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/magdesign/
  (HTTP 200, 40,729 bytes; title "MagDesign Magazine"). Master stylesheet
  `css/style.min.css` (244 KB) fully extracted; libs: bootstrap 5 (CSS
  vars + grid), tiny-slider (tns), glightbox, aos; font Poppins 400/700.
- **Screenshot:** `magdesign-free-template.jpg` (1200×946, viewed in
  browser) — white header: search field left, centered uppercase
  "MAGDESIGN" logo, social icons (twitter/facebook/instagram) + moon dark
  toggle + burger right; centered "Trending" heading; split hero slide
  (large photo left, content right: "Business Travel — July 2, 2020" meta,
  big serif-style headline, excerpt, circular avatar + author); 3-column
  grid of vertical post cards below; orange accents (active slider dot,
  category underline). Demo brands itself "MagDesign"; recreation uses the
  NEW name **Serial**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, spacious
  editorial magazine on white. Header 3-col row (search left / uppercase
  logo center / socials + dark-mode toggle + burger right) with thin
  border-bottom; nav row below (Home, Categories ▼ Travel/Food/
  Technology/Business, About, Contact). "Trending" hero carousel of 4
  split featured posts; 3-col grid of 6 latest vertical cards; "Most
  Popular Posts" carousel of 6 vertical cards (arrows bottom-right);
  two 6-col category sections Sports + Business (3 horizontal small posts
  each); light-gray newsletter band with orange Subscribe; minimal footer.
  Accent orange **#f79918** (links, primary buttons, active dots, cta
  hover); secondary dark teal **#10495c**; body #212529 on white. Poppins
  400/700. Built-in dark mode via `[data-bs-theme=dark]` toggle (bg
  #212529, text #dee2e6, links #fac274).
- **Structure (1:1, section order):**
  1. `nav.site-nav` (white, border-bottom 1px rgba(0,0,0,.1), padding
     20px 0) — row: `form.search-form` left (input "Search..." 38px
     height, icon left 15px), `a.logo.text-uppercase` center (20px/700/
     #000), right `ul.social` (twitter, facebook, instagram) +
     `button#darkModeToggle.dark-mode-toggle` (moon, aria "Toggle dark
     mode") + burger. Below: `ul.js-clone-nav.site-menu` — Home,
     Categories (`ul.dropdown`: Travel, Food, Technology, Business),
     About, Contact.
  2. `div.section.pt-5.pb-0` — "Trending" (`h2.heading` 40px/700,
     centered) + `div.posts-slide#posts-slide` (tns) 4× `div.item`:
     `div.post-entry.d-lg-flex` — `div.thumbnail` (flex 0 0 440px, img
     radius 7px) + `div.content.align-self-center`: `div.post-meta.mb-3`
     (category links + date), `h3.heading` headline (#222/700), excerpt,
     `a.post-author` (45px round avatar + `strong` name). tns-nav dots
     centered below.
  3. `div.section` — latest grid: 6× `div.col-lg-4` vertical
     `small-post-entry-v` cards (thumb top + meta + headline + author).
  4. `div.section` — "Most Popular Posts" (`h2.heading`) +
     `div.most-popular-slider-wrap` > `div#most-popular-nav` arrows
     (bottom -80px right 20px) + `div.most-popular-slider` 6× vertical
     cards.
  5. `div.section` — `div.row.g-5`: `div.col-lg-6` "Sports" (`h2.h4
.fw-bold` + 3× `div.post-entry.d-md-flex.xsmall-horizontal.mb-5`
     horizontal small: thumb left + meta + `h3.heading` + author) and
     `div.col-lg-6` "Business" (same).
  6. `div.sec-subscribe.py-5.bg-light.mx-md-3` — "Subscribe to
     newsletter" (`h2.h4.fw-bold`) + form: email `input#newsletter-email`
     placeholder "Enter your email" (radius 7px) + `input.btn.btn-primary`
     value "Subscribe" (bg #f79918, radius .375rem).
  7. `footer.site-footer` (14px, #888, padding 70px 0) — centered
     copyright "Copyright © All rights reserved | This template is made
     with ❤ by ColorLib", `ul.social` (facebook, twitter, linkedin,
     youtube-play), credit link, Terms & Conditions / Privacy Policy →
     legal.html.
- **Design tokens (from css/style.min.css):**
  - Font: "Poppins", sans-serif (400 body / 700 headings + logo), Google
    Fonts `wght@400;700`.
  - Brand: **#f79918** (`--bs-primary`, links, `.btn-primary`, active
    dots, cta hover #f8a83b / link hover #c67a13).
  - Secondary: **#10495c** (`--bs-secondary`).
  - Body #212529 on #fff; light #f8f9fa; borders #dee2e6; footer #888;
    dates #999; search icon #ccc.
  - Headings: `.logo` 20px/700 uppercase; `.heading` 40px/700; post
    headlines #222/700; `.category` #222/600; author `strong` #000/700.
  - Images radius 7px; avatar 45px round; hero thumb flex 0 0 440px.
  - Nav links 14px rgba(0,0,0,.7) hover #000; cta pill radius 30px.
  - Buttons: btn-primary #f79918, radius .375rem, padding .375rem .75rem.
  - Carousel dots centered bottom -70px; popular arrows bottom -80px
    right 20px.
  - Dark mode `[data-bs-theme=dark]`: bg #212529, text #dee2e6, links
    #fac274 (hover #fbce90), borders #495057.
  - Rhythm: nav padding 20px 0; trending pt-5 pb-0; grids g-5; newsletter
    py-5; footer 70px 0.
- **Recreation decisions:** seeded picsum placeholders
  (`picsum.photos/seed/serial-<n>/<w>/<h>` — 4 hero + 6 latest + 6
  popular + 6 category + avatars ≈ 22 seeds); lucide-react icons (search,
  moon, menu, chevron-down, arrow-left, arrow-right) + inline SVG brand
  icons for social (twitter/X, facebook, instagram, linkedin, youtube —
  NOT lucide brand icons); Poppins via Google Fonts `<link>`; carousels =
  lightweight React state sliders (index + dots / prev-next) — no tns
  dependency; dark mode persisted via `window.localStorage` (Keyhaven
  pattern: in-memory Storage polyfill in `src/test/setup.ts`); newsletter
  form validated (zod) with success-state swap; mobile nav collapse with
  aria; no glightbox/aos.

## Task outline (implementer)

- [ ] Scaffold app: copy simplest existing app → `apps/serial`, package
      `@free-react-templates/serial`
- [ ] `@theme` tokens: brand #f79918, secondary #10495c, body #212529,
      light #f8f9fa, footer #888, dark-mode palette
- [ ] Poppins 400/700 font link in `index.html`
- [ ] Header: search form left, uppercase centered logo, socials + dark
      toggle (localStorage-persisted) + burger right; responsive
- [ ] Nav row: Home, Categories dropdown (Travel/Food/Technology/
      Business), About, Contact; mobile collapse
- [ ] Trending slider: heading + 4 split featured slides + dots
- [ ] Latest grid: 6 vertical cards in 3 columns
- [ ] Most Popular slider: heading + 6 vertical cards + prev/next arrows
- [ ] Category columns: Sports + Business, 3 horizontal small posts each
- [ ] Newsletter band: bg-light, email input, orange Subscribe, validated
      form with success state
- [ ] Footer: centered copyright + socials + Terms/Privacy links
- [ ] Tests first (Vitest + Testing Library, 100% coverage), then
      implementation
- [ ] `scripts/verify-app.sh serial` green
- [ ] PR to main, immediate squash merge; mark ALL THREE TEMPLATES.md dup
      rows (lines 271, 603, 2199) `[~]`→`[x]` + surge URL;
      `npm run readme:status`
