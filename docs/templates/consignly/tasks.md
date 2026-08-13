# Consignly (ColorLib Foundation2) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-consignly`.

## Source mapping

- **ColorLib item:** "Foundation2" (TEMPLATES.md — appears 3×: lines 583,
  1019, 2958; all three rows point to the same source, one prep covers all;
  verified with `grep -c 'wp/template/foundation2/'` = 3). Distinct from
  ColorLib "Foundation" (charity) which shipped here as `benevol`.
- **Source URL:** https://colorlib.com/wp/template/foundation2/
- **Preview URL:** https://preview.colorlib.com/theme/foundation2/ — **HTTP 200,
  live** (confirmed 2026-08-13, ~32.5 KB HTML fetched + parsed). Do not redo
  this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/foundation2/css/style.css
  (~47.7 KB — Bootstrap 5 theme CSS; brand tokens verified in it) + vendor
  sheets (bootstrap 5 bundled, tiny-slider, aos, glightbox) + icon font
  `fonts/icomoon/style.css`. JS: bootstrap.bundle, tiny-slider, counter.js
  (count-up), aos.js, glightbox, navbar.js. jQuery-free Bootstrap 5 —
  NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`foundation2-free-template.jpg`, 1200×946; verified via browser vision)

Deep navy hero with a low-opacity dot-matrix world map, centered white
headline "Find logistic services", a search input + bright cyan "Search"
button, and a 4-metric counter row (2,917 No. of Companies / 3,918 No. of
Ship Freight / 39,928 No. of Air Freight / 7,192 No. of Sea Freight); three
white service cards (Air/Sea/Land Freight, cyan icons) overlapping the hero
bottom edge; About section with label + heading + paragraph + feature list
left and a warehouse photo right. Corporate, clean, modern B2B freight
aesthetic: dark navy + cyan accent on white.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Navbar** `div.site-nav` (`position: absolute; top: 0; z-index: 9;
width: 100%; padding: 20px 0`)
   - `a.logo` white Montserrat 700 24px "Foundation" (recreate as
     "Consignly"); `nav.site-navigation .site-menu > li > a` 14px,
     `color: rgba(255,255,255,.7)`, `padding: 10px 15px`, hover/active →
     `#fff`. Links: Home, Dropdown ▾, Services, About, Contact Us.
   - Dropdown: `li.has-children` with `ul.dropdown` — white, `box-shadow:
0 2px 10px -2px rgba(0,0,0,.1)`, `padding: 20px 0`, items min-width
     180px, `a` #000 → hover #081158: Menu One, Menu Two (nested ▸: Sub
     Menu One, Sub Menu Two, Sub Menu Three), Menu Three. Open on hover
     (CSS-only, margin-top 0 + visibility visible); recreate with React
     state + aria-expanded + close on outside click/Escape.
   - Mobile: `.burger` (3 white 2px bars, 28×32px) toggles
     `.site-mobile-menu` — 300px fixed right, white, `translateX(100%)` →
     `translateX(0)` via cubic-bezier(0.23,1,0.32,1) 0.8s; header × close
     (30px), body links (14px #000, hover #081158), submenu indented
     (40px/60px) with `.arrow-collapse` circle toggles.
2. **Hero** `div.hero` (`background: #070d59; height: 100vh;
min-height: 600px; padding: 12rem 0`)
   - `div.map` absolute top 10% left 50% translateX(-50%), width 80%,
     z-index 1: `img world-dotted-map.png` → **inline SVG dotted world
     map** (do not copy the PNG; a low-opacity dot grid/continents in a
     lighter blue on #070d59).
   - `div.container` z-index 2, centered `col-lg-7`: `h1.heading` 60px/700
     white Montserrat "Find logistic services"; `p.lead` 14px white; form
     `.form-search.d-flex.align-items-stretch.mb-5`: input `.form-control`
     (borderless, height 45px, `border-bottom: 1px solid #2c3237`,
     placeholder "Your ZIP code or City. e.g. New York", focus border
     #081158) + `button.btn.btn-primary` "Search" (`background: #00eaff;
color: #081158; padding: 12px 30px`).
   - `.row.section-counter` 4× `.counter-wrap` (col-6/col-lg-3): `span.number`
     30px Montserrat 700 white + `:after` 30×2px #00eaff underline; `span.caption`
     `rgba(255,255,255,.5)`. Values: 2917 # of Companies / 3918 # of Road
     Freight / 38928 # of Air Freight / 7192 # of Sea Freight. Count-up on
     scroll (counter.js) → `useInView` hook + requestAnimationFrame count.
3. **Services** `div.section.section-1` (`margin-top: -200px`; `.section`
   = `padding: 7rem 0`)
   - 3× `div.feature.box-shadow.d-flex` (col-lg-4): white, `box-shadow:
0 15px 30px 0 rgba(0,0,0,.1)`, `border-radius: 4px`, `padding: 30px`,
     `margin-bottom: 30px`. `.icon` (flex 0 0 80px, mr 20px) svg
     (airplane/cargo-ship/truck → lucide Plane/Ship/Truck, cyan #29eafd).
     `.text`: `h3.heading` 16px/700 #000 title + p + `a.more` "Read more"
     (11px/700 uppercase, letter-spacing .1rem, `span` arrow 15px square,
     hover → bg #081158 white arrow).
4. **About** `div.section.pt-0` — `.row.justify-content-between`
   - Right `col-lg-6.order-lg-2`: `a.video-wrap.glightbox` → img-fluid
     rounded photo + `.play-wrap` 50px circle `rgba(0,0,0,.2)` with white
     play icon, hover → 60px. In React: accessible `button` (aria-label
     "Play video") toggling an inline player/modal (poster + sample video;
     no new deps).
   - Left `col-lg-5`: `span.subheading` "Mission" (11px/700 uppercase,
     letter-spacing .1rem, #adb5bd), `h2.heading` "About Us", p, 2×
     `.feature.d-flex.mb-5` (icon 80px + `h3.heading` + p): Air Freight
     (Plane), Sea Freight (Ship).
5. **CTA band** `div.section.pt-0.bg-img.py-5.overlay`
   (`background-image: hero_bg_1.jpg; background-attachment: fixed;
:before rgba(8,17,88,.8); height: 50vh; min-height: 650px`)
   - Centered `col-lg-7`: `h2.text-white` 45px/700 Montserrat (line-height
     1.4) "Delivering Results for Industry Leaders", white paragraph,
     `a.btn.btn-primary` "Get started" (navy bg #081158, white text).
6. **Testimonials + Why Choose Us** `div.section.bg-light` (#f8f9fa), one
   row:
   - Left `col-lg-5 .testimonial-slide-wrap`: `span.subheading`
     "Testimonials" + `h2.heading` "Happy Customer"; tiny-slider of 3
     `.testimonial-slide > .block-testimonial`: `span.author` img 80px
     circle + `h3` 18px/700 #000 name + `.position` 14px + `blockquote`
     18px/2 #000. Slides: John Doe — CEO, Founder; James Woodland —
     Designer at Facebook; Rob Smith — Product Designer at Twitter. Dot nav
     (`.tns-nav` 7px #ccc circles → active #081158) + `#prevnext-testimonial`
     prev/next 40px #efefef squares (radius 4px, #081158 icons, hover →
     bg #081158 / white icons). Recreate as state-based slider.
   - Right `col-lg-6`: `span.subheading` "Why Us" + `h2.heading.mb-5` "Why
     Choose Us" + `.custom-accordion` — 3 `.accordion-item` (radius 0):
     `h2.mb-0 > button.btn.btn-link` (bold #000, padding 15px 0 15px 40px,
     plus icon at left 15px; hover bg #efefef; `[aria-expanded=true]` →
     `background: #081158; color: #fff; font-weight: 700` + minus glyph);
     `.accordion-body` padding 20px. Items: **Easily Find Logistics**
     (open by default), **Delivering Results for Industry Leaders**,
     **Fast and Secure Transportation** — lorem bodies (see spec).
7. **Blog** `div.section` (white) — `span.subheading` "News" + `h2.heading`
   "Latest News"; 4× `div.col-sm-6.col-md-6.col-lg-3.blog-entry`:
   `a.media-thumb` img (hover `scale(1.07)` + `:after rgba(8,17,88,.8)`),
   `h3.post-title` 18px/700 #000 "Far far away, behind the word mountains",
   date "Aug 20, 2020", excerpt, "Read more".
8. **Footer** `div.site-footer` (`background: #efefef; color: #888;
font-size: 14px; padding: 70px 0`)
   - Widgets (col-lg-3/col-lg-2): "About Consignly ." (brand + about p);
     "Connect" — 6 social circles 30px `background: #777` white icon,
     radius 50%, hover `#0c1a87` (instagram, twitter, facebook, linkedin,
     pinterest, dribbble — inline SVG brand icons); "Links" + "Company"
     (About us, Services, News, Careers, Contact — #777, hover #081158);
     "Contact" (43 Raymouth Rd. Baltemoer, London 3910 / two phones /
     info@mydomain.com).
   - Copyright: "© <year> All rights reserved | This template is made with
     ❤ by Colorlib" → **Component Dock attribution** linking
     https://www.componentdock.com/ (mandatory).

## Design tokens (→ `@theme`)

| Token         | Value            | Use                                                         |
| ------------- | ---------------- | ----------------------------------------------------------- |
| brand         | #081158          | primary navy: buttons, links, accordion open bg, dot active |
| brand-deep    | #070d59          | hero background                                             |
| brand-darker  | #060e46          | link/button hover                                           |
| accent        | #29eafd          | service icons (secondary)                                   |
| accent-bright | #00eaff          | hero Search button bg, counter underline                    |
| accent-hover  | #49edfd          | accent hover                                                |
| ink           | #212529          | body text                                                   |
| muted         | #6c757d          | secondary text                                              |
| label         | #adb5bd          | subheadings (11px/700/uppercase/ls .1rem)                   |
| light         | #f8f9fa          | testimonials/why-us band                                    |
| mist          | #efefef          | footer bg, accordion hover, prev/next bg                    |
| footer-text   | #888 / #777      | footer copy / links                                         |
| social-hover  | #0c1a87          | social circle hover                                         |
| overlay       | rgba(8,17,88,.8) | CTA band, blog image hover                                  |

Fonts: Montserrat (headings/logo/numbers, 700) + Open Sans (body 14px) via
Google Fonts `<link>` in `index.html`.

Buttons: padding 12px 30px, 14px, radius 4px. Cards: radius 4px, shadow
`0 15px 30px 0 rgba(0,0,0,.1)`. `.more` links: 11px/700 uppercase, ls .1rem.
Circles: 50% (social, avatars, play overlay).

## Implementation todo

- [ ] Scaffold `apps/consignly` (copy simplest existing app; package
      `@free-react-templates/consignly`; CNAME `consignly.free.componentdock.com`;
      homepage `https://consignly.free.componentdock.com`); `npm install`
      at root to register the workspace; copy MemoryStorage polyfill in
      `src/test/setup.ts` (jsdom 30 has no localStorage).
- [ ] `index.css` `@theme` tokens (table above) + Montserrat/Open Sans
      fonts in `index.html` + `injectUiSource()` in vite.config.ts.
- [ ] Components (colocated tests, 100% coverage): `Navbar` (desktop menu +
      dropdown + mobile off-canvas), `Hero` (map SVG, headline, search form,
      `CountUp` counters), `Services`, `About` (video play control),
      `CtaBand`, `Testimonials` (state slider + dots + prev/next), `WhyUs`
      (accordion, first item open), `Blog`, `Footer` (Component Dock link),
      `data.ts` (copy + counters + accordion bodies).
- [ ] Assets: picsum seeds `consignly-1..9` (screen seeds for
      subject-critical photos: warehouse/cargo for the about image; use
      verified person ids 1027/64/823 for avatars); inline SVG dotted world
      map; lucide icons (Plane, Ship, Truck, Search, ArrowRight, Play,
      ChevronLeft/Right, Plus, Minus, Menu, X) + inline SVG brand icons.
- [ ] Tests first (red), then implementation (green); per-app gate
      `npm run verify:app -- consignly`; then PR + immediate squash merge;
      bookkeeping `[x]` for ALL THREE Foundation2 rows (583, 1019, 2958) + surge URL + `npm run readme:status`.
- [ ] Fidelity check: section order 1:1; hero overlap (-200px) on
      services; navy overlay on CTA/blog hover; accordion open state
      navy/white; verify with browser_vision on the built app.
