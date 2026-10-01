# Skybound (ColorLib "Beyond") — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | "Beyond" (kept on ColorLib's side only; preview `<title>`: "Beyond \| Free Bootstrap Template") |
| Recreation name | **Skybound** (NEW — sky + bound; evokes travel/horizons; single lowercase word; never "Beyond") |
| Slug | `beyond` |
| Source page | https://colorlib.com/wp/template/beyond/ |
| Live preview | ✅ **REACHABLE** — https://preview.colorlib.com/theme/beyond/ HTTP 200, **29,215 bytes** (verified 2026-10-01). Single page: off-canvas menu + hamburger, split hero, 8 content sections, dark plum footer |
| Stylesheets | `css/style.css` HTTP 200 **81,615 B** (custom theme — canonical tokens) · `css/bootstrap.css` (stock Bootstrap 4 — layout only) · icon fonts `font-awesome.min.css` + `vendors/linericon/style.css` (NEVER copied → lucide-react) · `vendors/owl-carousel` + `vendors/swiper` (slider libs — NEVER copied → React state) · `vendors/nice-select`, `vendors/popup/magnific-popup.css` (lightbox → local popover), `vendors/animate-css`, `vendors/jquery-ui`, `vendors/scroll` (never copied) · Google Fonts import: **Playfair+Display:700 \| Roboto:400,400i,500** |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/beyond-free-template.jpg — real JPEG (reviewed visually 2026-10-01). Shows: white page, hamburger top-left, gold-outline "BOOK A TABLE" ghost button top-right with hanging arrow, split hero — serif "Santorini Island in Greece" + gray lorem + gold "GET STARTED" outline button on the left, Santorini coastal photo on the right with a blue circular play button and white "Watch Intro Video" caption; below, "Popular Places Around The World" serif heading beside overlapping travel photos. Screenshot is authoritative for the DESKTOP hero treatment (dark serif + dark gold-outline button on white); the stylesheet's white-text `.header-right .main_btn` variant applies to the mobile state where the text column takes a photo background |
| TEMPLATES.md | `## Travel (44)` at line 2976; slug `beyond` appears exactly once (checked against origin/main @ 7ceedc3fb) |
| Name collision check | "skybound" = **0 hits** in `ls apps/` (1626 folders), `openspec/specs/` on origin/main (~3150 folders), and TEMPLATES.md claimed-name links; distinct from travel-family names on main: trailquest, roam, wander, quest, voyage, voyagecraft, voyagely, wayfare, wayfarer, skyquest (spec exists), skylark, skyline, sunlodge, luxstay, wavecrest, driftwood, expedition, getaway |
| Stack | Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo) |

## Design token summary (full table in the spec)

- **Fonts:** "Playfair Display" 700 for ALL headings (h1–h6, `#222222`);
  "Roboto" 400 body (14px/27px, `#777777`), 500 for buttons/nav.
  Google Fonts `<link>` only.
- **Brand gold:** `#f8b600` — the signature. `.main_btn` border, hover
  fill, package price text ("$56"), footer newsletter `.click-btn`
  background, blog pagination active, footer-text links, select
  hover/selected color, gallery price. Star/rating gold `#f9af11`
  (review stars on package cards).
- **Brand blue:** `#4681ff` — secondary. Video play-button circle
  (+ shadow `0 10px 30px rgba(39,0,110,0.3)`), counter-card hover flood,
  off-canvas menu link hover + dropdown panel background, package-search
  submit border/hover, side-menu shadow tint `rgba(70,129,255,0.1)`.
- **Text:** headings `#222222`; body `#777777`; footer nav links
  `#777777` (hover `#ffffff`); footer social icons `#cccccc`; newsletter
  input text/placeholder `#cccccc`; hero video caption white.
- **Backgrounds:** page white; hero white; amenities bottom decorative
  band `#f9f9ff` (≈40% section height); blog top decorative band
  `#f9f9ff` (≈60% section height); package-search panel = travel photo
  + black overlay `opacity .5`; footer `#1e1c27` (dark plum);
  footer divider `#333333`; card borders `#eeeeee`; newsletter input
  group underline `#eeeeee`.
- **Radii:** everything is SQUARE (`border-radius: 0`) — `.main_btn`,
  cards, inputs, footer click-btn. Exceptions: circular play button
  (`50%`), white pushpin lightbox button (square 50×50, appears on card
  hover). Do NOT add rounded-* utilities by habit.
- **Buttons (`.main_btn` — reuse via a shared utility/component):**
  - base — `background: transparent; color: #222222; font-size: 12px;
    font-weight: 500; line-height: 48px; border: 1px solid #f8b600;
    border-radius: 0; text-transform: uppercase; letter-spacing: 2px;
    padding: 0 25px;` arrow icon absolutely `right: -30px` (translateY
    -50%), hover `right: -38px`; hover fill `#f8b600` + `#222222` text.
  - hero variant — white text + inverted arrow on mobile photo bg;
    dark text on desktop white.
  - package-search submit — `border-color: #4681ff; color: #fff`;
    hover `background/border: #4681ff`.
  - newsletter "Subscribe" — gold outline, arrow hidden.
  - footer `.click-btn` — `background: #f8b600; border-radius: 0;
    border: 0; padding: 6px 12px`, white arrow icon.
- **Shadows/hovers:** card hover `0 10px 30px rgba(0,0,0,0.1)` +
  transparent border; amenities/blog thumb sheen sweep
  (`rgba(255,255,255,0.4)` slides 110%→-130%, 0.5s); counter hover blue
  flood + icon `brightness(0) invert(1)`; gallery hover black overlay
  0.65 + content slides in (`bottom: -20%→0`, `left: -10%→0`); play
  button pulse ring (white `:before`, 2s infinite).
- **Rhythm:** `.section_gap` = `80px 0`; section h1 48px desktop (36px
  mobile), capitalize, `margin-bottom: 30px`; `.main_title` margin-bottom
  40px; top action bar `padding: 25px 0`; footer top `padding: 120px 0`;
  footer bottom `padding: 26px 0`; card details padding 25px; search
  panel padding 70px 50px; counter cards ~165×180px, padding 30px.

## DOM skeleton (from beyond.html, in order)

```
div.side_menu (off-canvas; left -500px → 0 on .open)
  logo (img → Skybound mark + wordmark)
  ul.menu-left:
    Home · Packages
    Pages ▾ (dropdown: About-us · Amenities · Elements)
    Blog ▾ (dropdown: Blog · Blog Details)
    Contact
div.canvus_menu
  .toggle_icon (3× 2px #222 bars, 30px wide, fixed top-left; open → X)
section.top-btn-area (padding 25px 0, text-right)
  a.main_btn "book a table" + arrow img
section.home-banner-area.relative (bg white)
  .header-right.col-lg-6 (text; LEFT on desktop despite the class name —
    DOM order: text column first)
    h1 "Santorini Island <br> in Greece" (Playfair)
    p.pt-20 lorem
    a.main_btn "Get Started" + arrow (dark on desktop; white <768px
      where column takes photo bg + overlay)
  .header-left.col-lg-6 (photo; hidden <768px)
    img.banner-img (picsum skybound-1)
    .video-popup (absolute bottom 110px, left -15px)
      a.play-video.video-play-button (blue circle + white triangle +
        pulsing ring)
      .watch: h5 "Watch Intro Video" + p "You will love our execution"
div.popular-place-area.section_gap
  .left-content: img1 (80%) + img2 (50%, top 5%) + img3 (right 70%, 50%)
    — overlapping collage (picsum skybound-2..4)
  .right-content:
    .main_title: h1 "Popular <br>Places Around <br>The World" + p lorem
    .counter_area (top-two + bottom-two staggered):
      single_counter ×4: thumb icon + h4 + p —
        London/135 Places · Turkey/75 Places · Paris/150 Places ·
        Thailand/85 Places (hover → #4681ff flood, white text/icon)
section.package-area (container-fluid; mb 125px desktop)
  .col-lg-5: .main_title (padding-left 50% desktop) —
    h1 "Best Tour Plans Recently" + p lorem ×2 +
    a.main_btn "Browse all Packages" + arrow
  .col-lg-6.offset-lg-1:
    .owl-carousel.active-gallery-carousel → .single-gallery ×3:
      img (picsum skybound-5..7) + :after black overlay (hover .65) +
      .gallery-content (hover slide-in): .title: h4 "Proper Guided Tour" +
        span h4 "$56/day" (gold #f8b600) + .review-title: stars
        (#f9af11) + p blurb "Santorini Island Dream Holiday and Fun
        package" + link "Proper Guided Tour" +
      .light-box (white 50×50 pushpin, top-right, fades in on hover)
section.amenities-area.section_gap (relative; :before bottom band ≈40% #f9f9ff)
  .main_title (col-5): h1 "Benifits Get <br>Our Customers" [typo]
  .single-amenities ×3 (col-lg-4): .amenities-thumb (sheen hover) +
    .amenities-details: .amenities-meta span "Within a Shor Time" [typo] +
    h5 titles — "Luxerious Car Rental Service Available" [typo] /
    "Cruise Private Party Booking Available" /
    "Tremendous Options for Food Lovers" — + p lorem
    (border #eeeeee; hover shadow 0 10px 30px rgba(0,0,0,0.1))
section.package-search-area.section_gap
  .main_title (col-5): h1 "Search <br>Suitable & Desired <br>Package
    for You" + p lorem ×2
  .col-lg-6.offset-lg-1:
    .contact-form-section (photo bg + black .5 overlay; padding 70px 50px)
      h4 "Package Search" (white 24px)
      form#myForm.text-right:
        input#name "Destination"
        input#datepicker "Check in Date"
        input#datepicker1 "Check Out Date"
        select "Adults" (options ×5 identical in ref) +
        select "Childs" (same)
        button.main_btn.text-uppercase "Browse all Packages"
          (border #4681ff; hover bg #4681ff)
section.testimonial_area
  .testi_img (col-6) — img present in DOM but **display:none in CSS**
    → do NOT render
  .col-lg-5.offset-lg-1:
    .owl-carousel.active_testimonial → .single_testi ×2:
      .quote img + .testi_content p (24px italic lorem) +
      .testi_author: h4 "Marvel Maison" + p "Chief Executive, Amazon"
section.newsletter-area.section_gap
  .main_title (col-5; padding-left 50% desktop → responsive down):
    h1 "Subscribe <br>to Get Updated for <br>Our Newsletter" + p lorem ×2
    form#mc_embed_signup .subscribe_form:
      .input-group: input (65% width, white bg, square, #ccc placeholder,
        group border-bottom #eeeeee) + a.main_btn "Subscribe" (arrow img
        display:none) + .mt-10.info note
  .col-lg-6.offset-lg-1: img.nw-img — **display:none in CSS** → do NOT render
section.blog-area.section_gap (relative; :before top band ≈60% #f9f9ff)
  .main_title (col-5): h1 "Benifits Get <br>Our Customers" + p lorem
  .single-blog ×3 (col-lg-4): .blog-thumb (sheen hover) + .blog-details:
    .blog-meta: a "13th Dec" (calendar icon) + a heart "15" +
      a bubble "04" (#777777) + h5 titles (same three as amenities) +
    p lorem (border #eeeeee; hover shadow)
footer.footer-area (background #1e1c27)
  .row.footer-top (padding 120px 0):
    widget ×1 col-3: h6 "About Crafted" + p "The world has become so fast
      paced that people don't want to stand by reading a page of
      information, they would much rather look."
    widget ×2 col-3: h6 "Navigation Links" + ul.footer-nav ×2 cols —
      Home · Services · Project | Team Members · Blog · Contact
      (#777777 → white hover)
    widget ×3 col-3: h6 "Newsletter" + form-inline: input.form-control +
      button.click-btn (#f8b600, square, white arrow) + .info note
    widget ×4 col-3: h6 "Instafeed" + ul.instafeed ×8 imgs (4 per row,
      25% width, 5px margin; picsum skybound-15..22)
  .footer-bottom (padding 26px 0; border-top 1px #333333):
    .footer-text "Copyright © <year> All rights reserved | ..." —
      reword for Skybound, gold #f8b600 link → https://www.componentdock.com/
      ("Component Dock"); NO ColorLib attribution
    .footer-social ×4 icons (#cccccc → #f8b600 hover)
```

## Section-by-section fidelity notes

1. **Off-canvas menu** — there is NO fixed navbar in this template; the
   only persistent chrome is the hamburger (top-left, fixed) + the
   "book a table" ghost button (top-right, in normal flow above the
   hero). Keep both. Menu links are 18px/500 #222222 with #4681ff hover;
   dropdown panels are solid #4681ff with white items (a distinctive
   touch — preserve it).
2. **Hero** — the class names are misleading (.header-right holds the
   TEXT and renders LEFT on desktop; .header-left holds the PHOTO and
   renders RIGHT). DOM order: text column first. Play button: blue circle
   with a white triangle plus a pulsing white ring animation and a soft
   purple-tinted shadow — this is the hero's visual anchor on the photo.
3. **Popular places** — the left collage uses absolute offsets
   (img1 max-width 80%, img2 50% at top 5%, img3 50% at right 70%) to
   create an overlapping stack; the counter grid is staggered (top-two
   row, then an offset bottom-two). Hover flood to #4681ff is the
   section's interactive signature.
4. **Best plans carousel** — title block uses `padding-left: 50%` on
   desktop (title pushed toward the carousel); a two-column grid that
   visually matches is fine. Cards reveal detail content on hover, not
   on rest — replicate the slide-in (content starts below-left, settles
   at bottom-left) and the pushpin lightbox button appearing top-right.
5. **Amenities & blog cards** — visually twins (same border, sheen
   sweep, shadow hover, Playfair 18px titles); blog adds the icon meta
   row. The lavender bands are partial-height decorative overlays behind
   the card rows (amenities: bottom ~40%; blog: top ~60%).
6. **Package search** — the dark photo panel is the page's only dark
   content block before the footer; inputs are bottom-border-only on the
   photo. Controlled form with sensible numeric selects (reference
   repeats identical options — recreate 1–5) + local success state.
7. **Testimonials & newsletter** — both have image columns in the DOM
   that the CSS hides (`display:none`). Match the live render: do not
   render them. Testimonial is a simple 2-quote state carousel;
   newsletter is an inline input+button with a bottom-underline group.
8. **Footer** — dark plum `#1e1c27` (not pure black — distinct from
   Alpinora's `#222` footer), generous 120px top padding, 4 widgets
   including the 8-tile instafeed grid; gold is used sparingly here
   (newsletter button, copyright link, social hover). Mandatory
   Component Dock link in the copyright line.
9. **Copy** — keep the same content kinds (destination names + place
   counts, package title + price/day + blurb, amenity/blog titles,
   quote + author + role, "Package Search" form labels). Reference typos
   may be corrected; paraphrase is fine per docs/replication.md.
10. **Assets** — never copy images/fonts/icons/CSS. Picsum seeds
    `skybound-<n>` (hero 1, popular 2–4, packages 5–7, amenities 8–10,
    search bg 11, blog 12–14, instafeed 15–22); lucide-react icons
    (menu, x, arrow-right, play, star, pin, calendar, heart,
    message-circle, socials as inline SVG); Google Fonts link for
    Playfair Display 700 + Roboto 400/500.
