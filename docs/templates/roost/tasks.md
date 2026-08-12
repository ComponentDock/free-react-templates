# Roost (ColorLib Realtors) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-roost` by an implementer stream.

## Design notes

- **Original:** ColorLib "Realtors" — free real-estate HTML template.
  Source: https://colorlib.com/wp/template/realtors/. Single-page
  homepage; subpage property-single.html linked from property card images
  but NOT recreated.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/realtors/`
  (HTTP 200, 32.5KB) + stylesheets `css/style.css` (26KB — the design
  source), bootstrap.min.css, bootstrap-datepicker.css, jquery.fancybox,
  owl.carousel + theme, icomoon/flaticon icon fonts, aos; scripts
  js/main.js (owl configs), jquery, bootstrap, sticky, animateNumber,
  fancybox, stellar (parallax), easing, datepicker, aos. Full DOM + CSS
  extracted to `/tmp/realtors.html`, `/tmp/realtors.css`, `/tmp/realtors-main.js`.
  Screenshot `realtors-free-template.jpg` (1200×946, AVIF source converted
  to PNG) confirms: hero photo = luxury living-room interior (vaulted
  ceiling, exposed wooden beams, large window, grey sectional sofa,
  fireplace, framed art); transparent navbar with white uppercase
  "REALTORS" wordmark left + white menu links right; centered over the
  hero: "$1,570,000" in bright lime green, "Beautiful House In Australia"
  in large white type, address with pin, stats "2,611 Sq Ft. / 2 / 2",
  lime-green "Learn More" button; below: vibrant lime-green band with
  "For Rent" (active, darker green) / "For Sale" tabs, white dropdowns +
  inputs, black "Submit" button. Screenshot cuts off below the search
  band — sections below documented from the live DOM only. (Screenshot
  address says "Spring Street"; DOM says "Sapling Street" — use DOM copy.)
  Aesthetic: minimalist, high-contrast white/black + single olive-lime
  green #91b029, DM Sans.
- **Structure observed (1:1):**
  1. `div.site-mobile-menu` — off-canvas right panel, 300px, white,
     full-height, shadow -10px 0 20px -10px rgba(0,0,0,...),
     translateX(110%) closed; header + nav link list; toggled by navbar
     hamburger (`span.icon-menu h3 text-white`).
  2. `header.site-navbar` (absolute top 0, width 100%, z-index 1999,
     padding 1rem; wrapped in sticky-wrapper) > container > row:
     - `.col-3` > `.site-logo a` — uppercase wordmark 1.7rem, white.
     - `.col-9.text-right` > `nav.site-navigation` (d-none d-lg-block) >
       `ul.site-menu` — Home, Agents, Property, About, Blog, Contact:
       inline-block, margin 0 15px, padding 20px 0, white; active/hover
       → #91b029.
  3. `div.ftco-blocks-cover-1` > `div.site-section-cover.overlay` —
     hero bg `images/hero_1.jpg` (living room), stellar parallax 0.5,
     centered col-md-7: green price "$1,570,000"; `h1.mb-2` "Beautiful
     House In Australia" (3rem/2rem, white, line-height 1, weight 300);
     `div.media-38289.justify-content-around.mb-5` stat row — sq/bed/bath
     icons (green wrap-icon) + "2911 Sq Ft." / "2" / "2" (13px white);
     address "156/10 Sapling Street, Harrison, ACT 2914" with green
     icon-room pin; "Learn More" `btn.btn-primary` (green).
  4. `div.realestate-filter` (bg #91b029; wrap `translateY(-100%)`,
     z-index 6 — overlaps hero bottom) > container:
     - `.realestate-filter-wrap.nav` — tabs `a#rent-tab.active` "For
       Rent" (green bg, white text) + `a#sale-tab` "For Sale" (white bg,
       green text); padding 10px 20px.
     - `.realestate-tabpane.pb-5` (bg #91b029) > .tab-content:
       `#for-rent.tab-pane.active` + `#for-sale.tab-pane` (identical):
       selects Type (All Types/Townhouses/Duplexes/Quadplexes/
       Condominiums), Bedrooms (Any/0/1/2/3+), Bathrooms (Any/0/1/2/3+),
       Min Price ($100/$200/$300/$400), Max Price ($25,000/$50,000/
       $75,000/$100,000/$100,000,000); inputs "Title", "Address"
       (placeholders); submit `input.btn.btn-black.py-3.btn-block`
       "Submit". `.form-control`: height 55px, white, focus border
       #91b029.
  5. `div.site-section` (2.5em/5em padding) > row.align-items-stretch:
     - `.col-lg-6` > `.h-100.p-5.bg-black` — 2×2 grid of 4 ×
       `.service-38201`: `span` icon (3rem, #91b029) + `h3` (15px
       uppercase white) + small caption. Services: Estate Insurance,
       Elegant Bathtub, Fresh Air, Estate Calculator (caption "Estate
       Management" ×4 in DOM — paraphrase).
     - `.col-lg-5.ml-auto` — `h3.heading-29201` "About Us" (22px
       uppercase, 70×2px green top bar) + p + 2 × `.service-39290`
       (d-flex): `.media-icon` span (4rem, #91b029) + h3 + p: Mission,
       Vission (sic).
  6. `div.site-section.bg-black.block-14` — "Latest Properties"
     (`h3.heading-29201.text-white` + p) + `.nonloop-block-14.owl-carousel`
     (items 1→2→3, loop, autoplay, nav hidden, dots bottom -30px): 6
     slides = 3 unique `.media-38289` cards: image link; stats row
     (sq/bed/bath, 13px white, green wrap-icons): "2911 Sq Ft." / "2."
     / "2"; `h3.mb-3 > a` price — $570,000 / $1,570,000 / $980,000;
     `.address` (icon-room text-primary + text, rgba(255,255,255,0.7)):
     "156/10 Sapling Street, Harrison, ACT 2914".
  7. `div.site-section` — "Our Agents" (heading-29201 + p) + 3 ×
     `.col-md-4` > `.person-29381`: `.media-39912` photo (mb 20px;
     `:before` = 2px #91b029 frame, top/left -20px, height 100%, width
     50%) + h3 name (Josh Long, Melinda David, Jessica Soft) + span "4
     Properties"/"10"/"18" + `.social-32913` — 3 × 40px circle #efefef
     (facebook/twitter/instagram).
  8. `div.site-section.bg-primary` (green) — `.nonloop-block-13.owl-carousel`
     (items 1, loop, autoplay, nav hidden, dots -30px): 3 ×
     `.testimonial-38920` (d-flex): `.pic.mr-4` avatar + p quote +
     `h3.mb-4` 20px white name (Josh Long, Jean Doe ×2) + `.mt-4` >
     `.meta` uppercase rgba(255,255,255,0.3) ("Business Man"/"Business
     Woman").
  9. `div.site-section.bg-light` (#f6f5f5) — "Blog Posts" heading + 3 ×
     `.post-entry-1.h-100`: image + `.post-entry-1-contents` (white,
     padding 20px): `.meta` 13px uppercase ls .1em #ccc ("July 17, 2019
     by Admin") + `h2` 22px > a (hover #91b029) + p excerpt.
  10. `footer.site-footer` (#000, 4em/8em padding) > container row:
      - `.col-md-4`: h3 "Subscribe" + form.d-flex: input (placeholder
        "Enter your email", mr-3) + input.btn.btn-primary.text-white
        "Send Now".
      - `.col-md-3.ml-auto`: h3 "About Us" + ul.menu-arrow (green :before
        arrow): About Us, Testimonials, Terms of Service, Privacy,
        Contact Us.
      - `.col-md-4`: h3 "About" + p blurb.
      - bottom row pt-5 mt-5 center > .border-top.pt-5: copyright "©
        [year] All rights reserved | made with ♥ by Colorlib" → repo
        credit.
- **Design tokens (`css/style.css` + screenshot):**
  - Brand: **#91b029** olive-lime green — filter band + tabpane bg,
    active tab, .btn-primary (Learn More/Send Now), hero price, nav
    active/hover, sticky logo, service icons (3rem/4rem), card stat
    icons, address pin, heading marker 70×2px, person frame 2px, footer
    arrows, focus borders, blog hover, testimonial section bg.
  - Fonts: **DM Sans** (Google font; body + headings; headings weight
    300, base color #364d59; hero h1 3rem white lh 1; heading-29201 22px
    uppercase #000; service h3 15px uppercase white; testimonial h3 20px
    white; blog h2 22px; meta 13px uppercase ls .1em). Preview HTML lacks
    the Google Fonts link — load DM Sans via index.html `<link>` or keep
    repo default (note choice).
  - Colors: #000 (footer, properties bg, services box, btn-black, section
    headings), #364d59 (base headings), #fff (text on dark, nav, logo,
    inputs), #f6f5f5 (blog bg), #efefef (social circles), #ccc (meta),
    rgba(255,255,255,0.7) (card address), rgba(255,255,255,0.3)
    (testimonial meta).
  - Buttons: .btn padding 10px 20px; .btn-black #000; .btn-primary
    #91b029 (theme override of bootstrap blue — define explicitly); sharp
    corners (no radius); py-3 btn-block tall submit.
  - Shapes: 70×2px heading marker; 2px green offset person frame (-20px
    top/left, 50% width); 40px social circles; 55px form-control; 300px
    off-canvas panel.
  - Section bgs: hero photo + dark overlay; filter #91b029 overlapping
    hero; services white + black p-5 box; properties #000; agents white;
    testimonials #91b029; blog #f6f5f5; footer #000.
  - Spacing: navbar padding 1rem; nav margin 0 15px / padding 20px 0;
    site-section 5em/2.5em; filter translateY(-100%); footer 8em/4em +
    pt-5 mt-5 border-top.
- **Recreation decisions:** sticky navbar (transparent over hero → white
  sticky on scroll); wordmark "ROOST" uppercase; hamburger → 300px
  off-canvas right panel; hero = picsum living-room-style photo + dark
  overlay, green price, big light headline, stats, green Learn More;
  parallax → static bg (note choice); filter band overlaps hero bottom
  (negative margin), tabs switch panes via state (identical fields —
  note choice), black full-width Submit; services black 2×2 box + About
  column (Mission/Vision — fix "Vission" typo, note it); properties
  carousel hand-rolled (React state, no owl): 3 unique cards, ~3s
  autoplay, dots; agents with 2px green offset frame div + circular
  social buttons; green testimonial carousel (3 slides, autoplay, dots);
  blog 3 cards, title hover green; footer 3 columns + repo credit;
  lucide/inline-SVG icons (icomoon/flaticon not copyable); picsum-seeded
  photos (`picsum.photos/seed/roost-N/w/h`); nav + card links `#`.

## Tasks (implementer checklist)

- [ ] Scaffold `apps/roost` (copy simplest existing app; package
      `@free-react-templates/roost`; register workspace).
- [ ] index.html: title "Roost — Real Estate Website"; DM Sans Google
      Fonts `<link>` (or repo default stack — note choice).
- [ ] `@theme` tokens: `--color-brand: #91b029`, `--color-slate:
#364d59`, `--color-soft: #f6f5f5`, `--color-circle: #efefef`,
      `--color-meta: #ccc`.
- [ ] Navbar: absolute/transparent over hero, white uppercase "ROOST"
      wordmark left, 6 links right (Home, Agents, Property, About, Blog,
      Contact) white → green on active/hover; sticky white bar on scroll;
      mobile hamburger toggles 300px off-canvas right panel with close.
- [ ] Hero: full-width picsum interior photo + dark overlay, centered:
      green price "$1,570,000", h1 "Beautiful House In Australia" (3rem/2rem
      light white), address with green pin, sq/bed/bath stat row (green
      icons, 13px white labels), green "Learn More" button.
- [ ] Filter band: green #91b029 band overlapping hero bottom; For Rent
      (active) / For Sale tabs (active = green bg/white text, idle =
      white bg/green text); form grid: Type / Bedrooms / Bathrooms /
      Min Price / Max Price selects + Title / Address inputs (55px white) + black full-width Submit; tab switch swaps panes.
- [ ] Services: left black p-5 box, 2×2 grid — Estate Insurance, Elegant
      Bathtub, Fresh Air, Estate Calculator (3rem green icons, 15px
      uppercase white titles, small captions); right "About Us" column
      with 70×2px green marker + Mission / Vision rows (4rem green icons).
- [ ] Properties: black section, "Latest Properties" heading (white,
      green marker), hand-rolled carousel of 3 cards (photo, stats 2911
      Sq Ft./2/2, price $570,000/$1,570,000/$980,000, address with green
      pin, 70%-white text), ~3s autoplay, dots.
- [ ] Agents: 3 cards (Josh Long 4 / Melinda David 10 / Jessica Soft 18
      Properties) — photo with 2px green offset frame div (top/left
      -20px, 50% width), name, caption, 3 × 40px #efefef circular social
      buttons (facebook, twitter, instagram).
- [ ] Testimonials: green section, carousel of 3 (avatar, quote, 20px
      white name Josh Long/Jean Doe, uppercase meta Business Man/Woman),
      autoplay + dots.
- [ ] Blog: #f6f5f5 section, 3 cards (thumb, white content box: meta
      "July 17, 2019 by Admin" 13px #ccc, 22px title link → green hover,
      excerpt).
- [ ] Footer: #000, Subscribe column (email input + green Send Now),
      About Us link column (green arrow bullets), About blurb column,
      bottom copyright bar with repo-standard credit.
- [ ] Tests: 100% coverage (navbar content + active/hover + sticky +
      mobile off-canvas toggle, hero content, filter tabs + fields + tab
      switch, services boxes + about column, property carousel render +
      autoplay + dots, agents cards + socials, testimonial carousel,
      blog cards + hover, footer columns + credit, composition, document
      title).
- [ ] Gate: `npm run verify:app -- roost` (typecheck → lint → vitest
      100% → build).
- [ ] PR description: source Realtors, preview URL, tokens, renames,
      icon substitution note (lucide/inline SVG for icomoon/flaticon),
      "Vission"→"Vision" fix, parallax→static choice, single-page anchor
      links, picsum note.
- [ ] After merge: verify live surge URL + bundle; bookkeeping `[x]` +
      URL on the Realtors row (line 485).
