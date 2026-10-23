# Template: Skyvault (Web Hosting)

## Purpose

Skyvault is a full single-page **web-hosting marketing site** in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Hostspace"** template (source slug `hostspace` — the Web Hosting
family's **violet night-sky** page: a transparent nav floating over an
`821px` hero painted with a `#200e35 → #4d1d85` vertical gradient, a violet
line-art city skyline pinned to the hero's bottom edge and **four clouds that
drift across the band on infinite 60 s loops**, a centred white 60 px headline
("The Best Hosting Offers") above a **wide white pill search bar** whose right
half is a `#7836c6` TLD picker (`.io` / `.com` / `.net`) and whose action is a
**mint `#1befc5` "Search" button**, then a white three-step "how to get started"
row with **143 px circle icon badges** (the middle one mint) over a dotted
arc ornament, a violet-photo parallax band of three white **`12px`-radius
service cards** each carrying a floating "Read More" chip that hangs 32 px below
the card, a **single bordered four-column pricing table** (`#4d1d85` header bars,
2 px `#d5dfe3` rules, mint "Buy Now" buttons), a `#f6f8fb` 6/6 split with a
full-bleed presenters photo and a four-icon "Why Choose us?" list, a 135 px
`#715691` CTA strip (`#1befc5` price + mint button), and a `#26064c` footer
carrying the wordmark, a working contact form on `#715691` fields and four link
columns).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches section structure, order,
copy kind and design tokens 1:1 but copies no asset (no images, no fonts, no CSS
files, no icon paths, no brand marks) and never reuses the source name or copy
verbatim.

- **Source:** https://colorlib.com/wp/template/hostspace/ (listed in
  TEMPLATES.md `## Web Hosting (20)` at line 3061; the slug `hostspace` appears
  exactly once and in no spec on main before this one)
- **Preview:** `https://preview.colorlib.com/theme/hostspace/` returns
  **HTTP 200**, `text/html; charset=utf-8`, **24,890 B** and
  `<title>HostSpace</title>` (verified 2026-10-11). Its DOM was fetched and
  parsed, and its stylesheets
  `https://preview.colorlib.com/theme/hostspace/styles/main_styles.css`
  (HTTP 200, **22,550 B**) and `.../styles/responsive.css` (HTTP 200,
  **5,731 B**) plus its script `.../js/custom.js` (HTTP 200, **3,269 B**) were
  tokenized. Live preview is the primary reference; no fallback was needed.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/hostspace-free-template.jpg
  (HTTP 200, 45,375 B, served as **AVIF** → decoded to PNG with
  `ffmpeg -i shot.avif shot.png`, 1200×946, reviewed visually 2026-10-11).
- **New name:** `skyvault` (apps/skyvault, `@free-react-templates/skyvault`) —
  taken from the source's own night-sky/cloud/cloud-storage motif; the source
  name "Hostspace", its wordmark, its logo, its hero/illustration/photo assets
  and its copy are never reused. `skyvault` collides with no `apps/` folder, no
  `openspec/specs/` folder, no `docs/templates/` folder and no TEMPLATES.md slug
  (verified 2026-10-11).
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Hostspace" (source slug `hostspace`,
  https://colorlib.com/wp/template/hostspace/). It is a Bootstrap 4.1.2 page
  (the reference ships `styles/bootstrap-4.1.2/bootstrap.min.css` — the
  recreation uses Tailwind utilities instead and copies nothing).
- **Preview URL:** `https://preview.colorlib.com/theme/hostspace/` → **HTTP
  200** (24,890 B). Reference artifacts (research date 2026-10-11):
  `/tmp/hostspace/preview.html`, `/tmp/hostspace/main_styles.css`,
  `/tmp/hostspace/responsive.css`, `/tmp/hostspace/custom.js`. Other CSS the
  preview loads (never copied): OwlCarousel 2.2.1 `owl.carousel.css` +
  `owl.theme.default.css` + `animate.css`, `font-awesome-4.7.0/css/font-awesome.min.css`,
  `bootstrap-4.1.2/bootstrap.min.css`. Scripts referenced (never copied):
  `js/jquery-3.2.1.min.js`, `js/custom.js`, Greensock `TweenMax.min.js` +
  `TimelineMax.min.js` + `ScrollToPlugin.min.js` + `animation.gsap.min.js`,
  `scrollmagic/ScrollMagic.min.js`, `parallax-js-master/parallax.min.js`,
  `progressbar/progressbar.min.js`, `easing/easing.js`, `owl.carousel.js`.
  Every token below was cross-checked against the **live render** in a browser
  (computed styles + `getBoundingClientRect` at a 1440 px desktop viewport, plus
  a 780 px narrow pass).
- **Screenshot (1200×946):** a browser-chrome mock of the top of the page. The
  header is **transparent over the hero**: the wordmark "Host**Space**" (the
  second half in mint `#1befc5`) sits at the left in white 24 px/600, a white
  16 px/600 menu (HOME · ABOUT US · SERVICES · NEWS · CONTACT) at the centre
  with the current item mint, and white "LOGIN / REGISTER" links at the right.
  The hero band is a **deep-violet vertical gradient** (`#200e35` → `#4d1d85`)
  carrying a **violet line-art city skyline** silhouetted along its bottom edge
  (buildings outlined in light violet with mint/white window-dot grids) and a
  few soft **white cloud shapes** floating in the upper half. Centred over the
  skyline: a white 60 px/600 headline "The Best Hosting Offers", a short white
  paragraph (max-width 750 px), and a **wide white search bar**: a white
  24 px/500 input with the placeholder "yourdomain", a **`#7836c6` violet TLD
  chip** showing ".io" with a chevron, and a **mint `#1befc5` "Search" button**
  with a magnifier glyph. Everything is softly rounded (`12px`). The screenshot
  ends just below the search bar.
- **Section order (measured from the live DOM, top to bottom):**
  1. `header.header.trans_400` — `position:fixed; top:0; left:0;
     width:100vw; background:transparent; z-index:100`, containing
     `.header_content` (`height:124px`, flex row, vertically centred) with an
     absolutely positioned `.logo` at the left (`.logo a` 24 px/600 white,
     `.logo a span` mint), a centred `nav.main_nav` (`ml-auto mr-auto`, `ul`
     flex) of **five** links (16 px/600 white, `li:not(:last-child)
     {margin-right:48px}`, active/hover mint) — Home · About us · Services ·
     News · Contact — an absolutely positioned `.log_reg` at the right holding
     "Login" and "Register" separated by a `/` pseudo-element (16 px/600 white,
     4 px margins), and a `.hamburger` (`display:none` above 991 px; a 20 px
     FontAwesome bars glyph with `border-radius:7px` and a
     `rgba(255,255,255,.15)` hover border). `scrollTop > 91` adds
     `.header.scrolled`: `background:#200e35; padding-top:6px` and
     `.header_content{height:80px}` — a 400 ms collapse.
  2. `.menu_overlay` + `.menu` — an off-canvas panel: the overlay is fixed
     full-viewport `rgba(255,255,255,.55)` (`z-index:101`, hidden→visible), the
     panel is fixed `right:-350px; width:350px; height:100vh;
     background:#200e35; z-index:102; padding:50px 30px 0`, sliding to
     `right:0` when active. Inside: a 45°-rotated 18×18 close control at
     `top:41px; left:28px` (two 2 px white bars, hover mint), a right-aligned
     "Login / Register" pair, and `nav.menu_nav` (`margin-top:50px`) with the
     same five links at 24 px/500 `rgba(255,255,255,.75)` (hover mint, 3 px
     gaps).
  3. `.home` — the hero, a **fixed 821 px** band (`75vh` at ≤575 px):
     - `.home_background` — `linear-gradient(to bottom, #200e35, #4d1d85)`
       (`z-index:1`).
     - `.background_image.background_city` — the reference's `images/city.png`
       (`1920×821`, cover/centre, `z-index:3`): a transparent-background violet
       skyline drawn in `#4d1d85` fills with light-violet outlines and
       mint/white window dots, buildings bottom-aligned.
     - **four** `.cloud` elements (138×57; `cloud_1/2/4` use `cloud.png`,
       `cloud_3` the wider `cloud_full.png`) at `top:147px/204px/332px/353px`
       and `left:-138px`, each running `cloud_anim 60s linear infinite`
       (`left:-138px` → `calc(100vw + 138px)`) with negative delays of
       `-39s/-6s/-45s/-15s`; `cloud_4` is behind at `z-index:2`.
     - `.home_container` — `position:absolute; left:0; top:31.9%; z-index:5`,
       holding `.home_content.text-center`: `.home_title` (60 px/600 white,
       `line-height:1.2` — 48 px ≤767 px, 36 px ≤575 px) and `.home_text`
       (`max-width:750px; font-size:14px; color:#fff; line-height:2.14;
       margin-top:9px`).
     - `.domain_search_form_container` (`margin-top:69px`) in a
       `col-lg-10 offset-lg-1`, wrapping `form.domain_search_form` (flex, row at
       ≥768 px): a `div` (`width:calc(100% - 196px); margin-right:30px`) with
       `input.domain_search_input` (`height:60px; background:#fff;
       border-radius:12px 0 0 12px; padding-left:30px; font-size:24px;
       font-weight:500; color:#1f1d22`, placeholder "yourdomain") plus
       `.domain_search_dropdown` (`position:absolute; right:0; width:141px;
       height:60px; background:#7836c6; border-radius:0 12px 12px 0;
       padding-left:19px`) showing a white chevron, a `.domain_search_selected`
       label (24 px/500 white, `margin-left:28px`) and a white `ul` of **three**
       TLDs (`.io`, `.com`, `.net`; 24 px/500 `#1f1d22`, hover mint) revealed by
       `.active`; and `button.domain_search_button` (`width:166px; height:60px;
       background:#1befc5; border-radius:12px; font-size:24px; font-weight:600;
       color:#1f1d22`, magnifier glyph + "Search", hover white). The input,
       the TLD chip and the button all shrink to 50 px at ≤991 px and 40 px at
       ≤575 px, and the button drops below the field (`margin-top:18px`) at
       ≤767 px.
  4. `.intro` — white, `padding:96px 0 97px`, centred `.section_title` `h2`
     (36 px/700 `#1f1d22`, `line-height:0.75`) "How to get started", then
     `.intro_row` (`margin-top:98px`) with `.intro_dots` (an absolute ornamental
     dotted-arc image, `top:-137px`, `background-size:contain`, hidden at
     ≤991 px) and **three** `col-lg-4 .intro_col` items, each a centred
     `.intro_item`: `.intro_icon_container` (143×143 `border-radius:50%`
     `background:#d5dfe3`, with an `::before` 188 px halo at
     `rgba(213,223,227,.25)`; `:nth-child(3)` uses mint `#1befc5` and a
     `rgba(27,239,197,.25)` halo), a 56 px `.intro_icon`, then
     `.intro_item_content` (`padding-top:66px`) with `.intro_item_title`
     (24 px/700 `#1f1d22`) and `.intro_item_text` (`margin-top:27px`) over a
     `p`. The three steps are "Buy your Domain", "Get your Hosting" and
     "Set your Website". Below the row a centred `.intro_button`
     (257×63, `border-radius:12px`, `background:#715691`, `margin-top:86px`,
     hover mint) holds a 16 px/700 white label (source text
     "Start from $9.90/month"). At ≤991 px the dots are hidden and the columns
     gain `margin-bottom:80px`; at ≤575 px the circles become 100 px (halo
     133 px), the icons 40 px and the button 227×53.
  5. `.services` — a **photo band** (`padding:96px 0 127px`) whose
     `.parallax_background.parallax-window` element carries
     `data-parallax="scroll" data-image-src="images/services.jpg"
     data-speed="0.8"`; the reference's `services.jpg` (`1920×1080`) is a photo
     of hands sketching at a desk between two laptops **with the violet tint
     baked into the asset** (mean colour `#5e3a8c`), so the band reads as a
     violet field. The centred `h2` "Our Services" is **white**
     (`.services .section_title h2{color:#FFFFFF}`) and depends entirely on that
     band; then `.services_row` (`margin-top:95px`) with **three**
     `col-lg-4 .service_col` cards, each `.service` (white,
     `border-radius:12px`, `padding:58px 30px 66px`, `border:2px solid
     transparent` → hover `border-color:#1befc5`) containing a 75 px
     `.service_icon` (inline SVG whose `path/rect/polygon` fill is `#778990`
     → hover mint), `.service_title` `h3` (`margin-top:39px`) and
     `.service_text` (`margin-top:19px`) over a `p`, plus a **floating**
     `.service_button` (`position:absolute; bottom:-32px; left:50%;
     transform:translateX(-50%); width:157px; height:63px;
     background:#f4f7f8; border-radius:12px`, hover mint) holding a 16 px/600
     `#656566` "Read More" link (hover `#1f1d22`). The three topics are
     "Cloud Backup", "Data Migration" and "VPS Hosting". At ≤991 px the columns
     gain `margin-bottom:95px`.
  6. `.pricing` — white, `padding:94px 0 98px`, **no section title**: one
     `.pricing_container` (`border-radius:12px; border:2px solid #d5dfe3;
     overflow:hidden`) holding **four** flex `.pricing_item`s of `width:25%`,
     each with `border-right:2px solid #d5dfe3` (last one none) and:
     - `.pricing_title` — 129 px tall, `background:#4d1d85`, 30 px/700 white,
       `line-height:129px`; on card hover the text turns mint.
     - `.pricing_content` (`padding:50px 0 37px`) → `.package_price`
       (36 px/700 `#715691`) with a `span` (`font-size:14px; font-weight:500;
       color:#1f1d22; transform:translate(-5px,12px)`) carrying the period
       label, then `.pricing_list` (`margin-top:89px`) with a **five**-item `ul`
       (26 px gaps, `span` 16 px/500 `#656566` `margin-left:10px`); included
       rows are `.pack_ok` with an ok glyph and a `#1f1d22` 600-weight label,
       excluded rows an x glyph.
     - `.pricing_button` (`width:132px; height:53px; margin-top:75px;
       background:#1befc5; border-radius:12px`, hover `#7836c6`) holding a
       16 px/700 `#35214d` "Buy Now" link (hover white).
     Packs: **Starter Pack** `$9.90/Month` (3 included / 2 excluded), **Basic
     Pack** `$19.90/Month` (3/2), **Premium Pack** `$39.90/Month` (4/1), **Pro
     Pack** `$59.90/Month` (5/0). At ≤991 px the table becomes 2×2
     (`width:50%`, `nth-child(odd)` keeps the right rule) and at ≤575 px 1×4
     with no rules.
  7. `.choice` — a `#f6f8fb` 6/6 split (`.row-lg-eq-height`): the left
     `col-lg-6 .choice_col` holds `.choice_image` (`position:absolute;
     bottom:0; left:25px`, `display:none` at ≤991 px) — the reference's
     `choice.png` (`397×556`): a cut-out photo of a smiling businesswoman in a
     black blazer presenting with an open palm — and the right `col-lg-6` holds
     `.choice_content` (`padding:94px 0 91px`) with a left-aligned
     `.section_title` `h2` "Why Choose us?", `.choice_text`
     (`margin-top:51px`, `p{font-weight:500}`) and `.choice_list`
     (`margin-top:52px`) — a flex `ul` with `justify-content:space-between`
     holding **four** centred items, each a 64 px `.choice_icon` over a
     `.choice_title` (18 px/500 `#1f1d22`, `margin-top:20px`): "Marketing",
     "Stats", "Servers", "Quality" (icons 48 px / titles 15 px at ≤575 px).
  8. `.cta` — a `#715691` 135 px strip: `.cta_content` (flex, `height:135px;
     padding-left:5px`, `justify-content-lg-between` at ≥lg) with
     `.cta_title` (36 px/700 white "Start building your website now!";
     30 px ≤1199 px, 24 px ≤575 px), `.cta_price` (48 px/700 mint,
     `transform:translateY(-8px)`, `span` 16 px — "from $9.90 /month";
     36 px ≤1199 px, 24 px ≤575 px) and `.cta_button`
     (`width:148px; height:63px; background:#1befc5; border-radius:12px;
     transform:translateY(4px)`, hover `#26064c`) with a 16 px/700 `#35214d`
     "Start Now" link (hover white). At ≤991 px the strip becomes a 300 px
     column (258 px ≤575 px) with the price and button 11 px apart.
  9. `footer.footer` — `background:#26064c; padding:95px 0`, a 6/6 split:
     - Left `col-lg-6 .footer_about`: `.footer_logo` (47 px/600 white, mint
       `span`; 36 px ≤575 px), `.copyright` (11 px/400 `#715691`,
       `margin-top:17px` — the reference's Colorlib credit line, replaced here
       by the Component Dock attribution), `.footer_text` (`margin-top:33px`,
       white `p`) and `.contact_container` (`margin-top:38px`) wrapping
       `form.contact_form`: two `col-md-6` fields (name, e-mail) plus a
       `.contact_textarea` (`height:142px; padding-top:15px`), every control a
       `.contact_input` (`height:49px; background:#715691; border:none;
       border-radius:12px; padding-left:29px; color:#fff`, 12 px/400 white
       placeholders, rows 21 px apart) and a `.contact_button` (108×52, mint,
       `border-radius:12px`, 16 px/700 `#35214d`, `margin-top:23px`) "Send".
     - Right `col-lg-6 .footer_links` (`padding-top:13px`) — **four**
       `col-sm-6 .footer_list_col` link columns, each with a
       `.footer_list_title` (20 px/700 mint) over `ul.footer_list`
       (`margin-top:36px`, 14 px gaps, links 15 px/400 white → hover mint):
       **Hosting Options** (6 links: Web Hosting, WordPress Hosting, VPS
       Hosting, Cloud Server, Reseller Package, Dedicated Hosting), **Domains**
       (5: Buy a Domain, Premium Domain Names, Web Hosting, Transfer Your
       Domain, Domain Marketplace), **Resellers** (4: VPS Hosting, Cloud
       Server, Reseller Package, Dedicated Hosting), **Support** (3: Buy a
       Domain, Premium Domain Names, Web Hosting). The first two columns carry
       `margin-bottom:45px` at ≥lg.
     At ≤991 px the two halves stack (`margin-bottom:95px`), and at ≤575 px
     every link column but the last gains `margin-bottom:60px`.
- **Live-render deltas found (must be reproduced deliberately, not by
  accident):**
  - **Every animated block starts invisible.** `.magic_fade_in` elements render
    at `opacity:0; visibility:hidden` and are faded in by `js/custom.js`
    through ScrollMagic + `TweenMax.from(ele, 0.5, {autoAlpha:0,
    ease:Power1.easeIn})` with `triggerHook:'onEnter'`, `offset:130`,
    `reverse:false`. Verified live (`getComputedStyle` → `opacity:0;
    visibility:hidden`) before scrolling: the intro row, service cards, pricing
    items, choice list and footer are all empty until they enter the viewport.
    The recreation must express the same intent accessibly — a
    `prefers-reduced-motion` fallback renders everything visible immediately,
    and content must be present in the DOM at all times (never
    `visibility:hidden` for crawlers/keyboard users).
  - **The services band's photo is a runtime parallax.** The
    `.parallax-window` element carries `data-parallax="scroll"
    data-image-src="images/services.jpg" data-speed="0.8"`; pixelcog's plugin
    auto-initialises on document ready
    (`$('[data-parallax="scroll"]').parallax()`). Note that
    `getComputedStyle(...).backgroundImage` then still read `none` while the
    live page clearly showed the violet photo — read the band from the
    screenshot, not from the computed value.
  - **The photo's violet tint is baked into the asset** (mean `#5e3a8c`), not
    applied by CSS — there is no `.services .overlay` rule. The recreation must
    build its own tinted band (a neutral placeholder photo under a violet
    overlay/gradient) because the asset is never copied, and must keep a solid
    dark/violet fill under the white "Our Services" heading so the heading
    stays legible even if the image fails.
  - **The `.services` heading is white** and sits on a white page body; if the
    band background is dropped, the heading becomes invisible. That dependency
    is the reference's real behaviour and must be handled by the band fill.
  - The hero is a **fixed 821 px** band (`75vh` at ≤575 px) with its content
    absolutely placed at `top:31.9%` — not a viewport-height flex hero.
  - The TLD dropdown is script-driven: `custom.js` toggles `.active` on the
    chip and copies the clicked `li`'s text into `.domain_search_selected`.
    The form's `action="#"` posts nowhere (no backend) — the recreation keeps
    it local-only with validation, and the TLD choice must be a real, keyboard
    operable control with the selection exposed to assistive tech.
  - `.form-control{color:#db5246}`, the inline-link underline `#ffa07f`, the
    pressed-link colour `#ff6347` and the `::selection` tint
    `rgba(27,239,197,.75)` are theme-wide rules for the source's other pages;
    **none of them appear on this home page** — the recreation keeps those hues
    out of the palette.
  - `.pricing_item:nth-child(odd)` only matters in the ≤991 px 2×2 layout,
    where the odd column keeps the 2 px right rule; the ≤575 px single-column
    layout removes all rules.
  - The four cloud animations are `infinite` with **negative** delays
    (`-39s/-6s/-45s/-15s`), so the clouds are already mid-flight at load and
    never restart; they are decorative and must be hidden from the a11y tree
    and stopped under `prefers-reduced-motion`.
  - The reference's `<title>` is `HostSpace` and there are no favicons; the
    live document title reported one extra glyph — read the served HTML as
    authoritative.
- **Interactive behaviour to reproduce (from `js/custom.js`):**
  fixed-header scroll state at `scrollTop > 91` (class `scrolled`, 400 ms);
  the off-canvas menu toggled by `.hamburger`, `.menu_overlay` and the rotated
  close control (all three flip `active` on both the panel and the overlay);
  the TLD dropdown toggle + label copy; an inline-SVG replacement routine
  (`jQuery('img.svg')` fetches each icon file and swaps in the markup — the
  reference's own icons are **not** reused, `lucide-react` stands in); and the
  ScrollMagic fade-in described above.
- **Mesh of measured section geometry at a 1440 px viewport (top offsets /
  heights):** `.home` 0/821 · `.intro` 821/824 · `.services` 1645/735 ·
  `.pricing` 2380/907 · `.choice` 3287/538 · `.cta` 3824/135 ·
  `.footer` 3959/735 (page ≈ 4,694 px). Pricing columns measured 277 px each
  (25 % of the 1 110 px container, 4 across); `.choice_list ul` 540 px wide with
  `space-between`; `.home_text` 14 px / `line-height:29.96px`; `.home_title`
  60 px; `.section_title h2` 36 px with a 27 px line box
  (`line-height:0.75` × 36 px).
- **Brand colour census (from `main_styles.css`, by frequency):** `#ffffff` (34),
  `#1befc5` (20), `#1f1d22` (15), `rgba(0,0,0,.01)` (8, a text-shadow artefact),
  `#715691` (5), `#4d1d85` (5), `#200e35` (4), `#d5dfe3` (3), `#656566` (3),
  `#35214d` (3), `#ffa07f` (2), `#7836c6` (2), `#26064c` (2), then
  `rgba(27,239,197,.75)`, `rgba(27,239,197,.25)`, `rgba(255,255,255,.75)`,
  `rgba(255,255,255,.55)`, `rgba(255,255,255,.15)`, `rgba(213,223,227,.25)`,
  `#ff6347`, `#f6f8fb`, `#f4f7f8`, `#db5246`, `#a5a5a5`, `#778990` (one each).
  The home page itself uses only **mint `#1befc5`**, the **violet ramp
  `#200e35`/`#4d1d85`/`#26064c`/`#35214d`/`#715691`/`#7836c6`**, the neutrals
  `#ffffff`/`#f6f8fb`/`#f4f7f8`/`#d5dfe3` and the text tones
  `#1f1d22`/`#656566`/`#a5a5a5`/`#778990` — the salmon `#ffa07f`/`#ff6347` and
  `#db5246` accents belong to the source's other pages and stay out.
- **Sibling comparison (why this slug is its own design):** this is the Web
  Hosting category's **violet night-sky** page. The family's other
  recreations use entirely different palettes — serverly (Bhost) magenta
  `#b632fa` / `#487fee` on `#21263a`, stratus (Cloud83) `#25ae88`/`#7fabda`,
  stratos (Cloudnest) indigo `#6366f1`, nebuly (Cloudtemplate)
  `#3f52e3`/`#21bf73`, hostcraft (Cohost) `#6927ff`, upnode (Hami) `#1c66de`,
  uplink (Hosthub) `#6247ea`/`#ec9d5f`, sitewise (Hostza) `#26064c`/`#00d363`,
  skyward (Ignite) `#207dff`/`#a1dd70`, upsurge (Ithost) `#eb2b63` on `#200545`,
  hostpeak (Lorahost) `#2926ac` → `#6128be`, soar (Raptor) `#2ebdc4`, netrise
  (Webhost) `#12e6ca`/`#8be55d` on `#233142`, skyport (Hosting) azure
  `#3898f8`, presto (Fastes) coral `#FA8F77` on `#73469F`, ecohive (Ecohosting)
  `#f067ff`/`#9f78ff` on `#2d0a31`. **No prepped spec anywhere in the repo
  mentions the mint `#1befc5`, the violet ramp `#4d1d85`/`#715691` or the
  `#200e35` gradient (verified by a repo-wide grep on 2026-10-11)**, and no
  sibling combines a gradient night-sky hero with drifting cloud sprites, a
  dotted-arc three-step row with a **mint middle badge**, a single
  four-column bordered pricing table with `#4d1d85` header bars, floating
  "Read More" chips that hang outside their cards, and a `#26064c` footer with
  a `#715691`-field contact form. Do not borrow a sibling's palette or
  geometry.

## Design tokens

| Token                     | Value                                                                                                                    | Where                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| brand (mint)              | `#1befc5`                                                                                                                 | search button, middle intro badge + halo, service-icon hover, price & CTA buttons, footer column titles, link hover, `::selection` |
| violet ramp — deepest     | `#200e35`                                                                                                                 | scrolled header bar, hero gradient top stop, off-canvas menu panel |
| violet ramp — header bar  | `#4d1d85`                                                                                                                 | hero gradient bottom stop, pricing header bars              |
| violet ramp — footer/hover| `#26064c` (footer band, CTA button hover) · `#35214d` (label on mint buttons)                                             | dark chrome                                                 |
| violet ramp — mid         | `#715691` (intro button, CTA band, contact field fill, package price, copyright) · `#7836c6` (TLD chip, pricing button hover) | accents                                                     |
| neutral surfaces          | `#ffffff` (page, cards, search field) · `#f6f8fb` (choice band) · `#f4f7f8` (floating service chip) · `#d5dfe3` (intro badge, pricing rules/border) | surfaces |
| text                      | `#1f1d22` (headings, badges' titles, dark labels) · `#656566` (`p` copy, chip label) · `#a5a5a5` (body colour) · `#778990` (service-icon SVG fill) | typography |
| text on dark/brand        | `#ffffff` (hero, band, footer copy; button labels on mint are `#1f1d22`/`#35214d`) · `rgba(255,255,255,.75)` (menu panel links) · `rgba(255,255,255,.55)` (menu overlay) | dark bands |
| borders / rules           | `2px solid #d5dfe3` (pricing container + column rules) · `2px solid transparent` → `#1befc5` (service card hover) · `rgba(255,255,255,.15)` (hamburger hover) | dividers |
| overlay / tint            | violet overlay built from the ramp for the service photo band (`#5e3a8c` is the source asset's own mean); no black overlays anywhere | band treatment |
| font family               | `Raleway, sans-serif` (body, headings, buttons, forms)                                                                     | whole page                                                  |
| font weights              | `400` (body, footer links) · `500` (search input/TLD, choice titles, menu panel links) · `600` (logo, nav, search button, ok-labels) · `700` (all headings, buttons, footer titles) — `300/800/900` are imported by the source but unused on this page | typography |
| base type                 | `body` 14 px/400 `#a5a5a5`; `p` 15 px/400 `line-height:1.8666` (`28px` measured) `#656566`; `h1`–`h6` `#1f1d22`, `700`, `line-height:1.2`; h1 48 / h2 36 / h3 24 / h4 18 / h5 14 px; `.section_title h2{line-height:0.75}` (27 px box); `.home_title` 60 px/600 → 48 px ≤767 px → 36 px ≤575 px; `.home_text` 14 px/`line-height:2.14`/`max-width:750px`; `.intro_item_title` 24 px/700; `.pricing_title` 30 px/700; `.package_price` 36 px/700 (+`span` 14 px/500); `.package_price` 30 px ≤575 px; `.cta_title` 36 → 30 → 24 px; `.cta_price` 48 → 36 → 24 px (+`span` 16 px → 14 px); `.footer_logo` 47 px → 36 px; `.copyright` 11 px/400; `.footer_list_title` 20 px/700; `.footer_list li a` 15 px/400 | typography |
| radius                    | `12px` on every button, input, card, pricing container and chip · `50%` on the intro badges (143 px, halo 188 px; 100/133 px ≤575 px) · `7px` on the hamburger hover outline · `0` elsewhere | shape language |
| shadows                   | **none** — the source uses zero box-shadows; depth comes from the violet ramp and 2 px rules                               | elevation |
| transitions               | `200ms` (buttons, chips, links, pricing title/price) · `300ms` (unused on this page) · `400ms` (header + header content + off-canvas panel/overlay) · `500ms` (unused) | interaction |
| motion                    | `.magic_fade_in` — fade-in 0.5 s `Power1.easeIn` on enter (+130 px offset, no reverse), elements start `opacity:0; visibility:hidden`; clouds — `cloud_anim 60s linear infinite` (−39/−6/−45/−15 s delays) | animation |
| search bar                | container `col-lg-10 offset-lg-1`, `margin-top:69px`; field `calc(100% - 196px) - 30px` gap; input 60 px white, left 12 px radius, `padding-left:30px`, 24 px/500; TLD chip 141×60 `#7836c6` right 12 px radius, 24 px/500 white, three options; button 166×60 mint, 24 px/600 `#1f1d22`; 50 px at ≤991 px, 40 px at ≤575 px, stacked button at ≤767 px | hero form |
| logo + nav                | `.logo a` 24 px/600 white with a mint `span`; `nav` centred via auto margins; links 16 px/600 white, 48 px gaps (40 px ≤1199 px), active/hover mint; "Login/Register" 16 px/600 with a `/` separator; `.header_content` 124 px → 80 px scrolled | header |
| hamburger / off-canvas    | `.hamburger` hidden above 991 px (20 px glyph, 5 px padding, `border-radius:7px`, hover `rgba(255,255,255,.15)` border); panel 350 px wide `#200e35` from `right:-350px`, `height:100vh`, `padding:50px 30px 0`; close control 18×18 rotated 45° at `41px/28px` (2 px white bars, hover mint); panel links 24 px/500 `rgba(255,255,255,.75)`, 3 px gaps | navigation |
| hero band                 | `.home` height 821 px (`75vh` ≤575 px); `.home_background` gradient `to bottom, #200e35, #4d1d85`; skyline image `cover/center` on top; four 138×57 clouds at `top:147/204/332/353px`, `cloud_4` behind; content column at `top:31.9%` | hero |
| intro row                 | `padding:96px 0 97px`; `.intro_row{margin-top:98px}`; dots ornament `top:-137px`, `contain/center` (hidden ≤991 px); badge 143 px circle `#d5dfe3` + 188 px halo `rgba(213,223,227,.25)`, `:nth-child(3)` mint with a `rgba(27,239,197,.25)` halo; icon 56 px; content `padding-top:66px`; text `margin-top:27px`; button 257×63 `#715691` `margin-top:86px` | how-to row |
| service card              | white, `border-radius:12px`, `padding:58px 30px 66px`, `border:2px solid transparent`, hover border mint; icon 75 px (SVG fill `#778990` → mint); title `margin-top:39px`; text `margin-top:19px`; chip `position:absolute; bottom:-32px; left:50%; translateX(-50%); 157×63; background:#f4f7f8`, hover mint with a `#1f1d22` label; grid 3 → 1 with 95 px stacking gaps | service cards |
| pricing table             | container `border-radius:12px; border:2px solid #d5dfe3; overflow:hidden`; 4 × `width:25%` with 2 px right rules (2×2 at ≤991 px keeping the odd-column rule, 1×4 rule-less at ≤575 px); title bar 129 px `#4d1d85` 30 px/700 (mint on hover); content `padding:50px 0 37px`; price 36 px/700 `#715691`; list `margin-top:89px`, 26 px gaps, 16 px/500 `#656566` labels with `margin-left:10px`; button 132×53 mint `margin-top:75px` (hover `#7836c6`) | pricing |
| choice split              | band `#f6f8fb`; 6/6 (`row-lg-eq-height`); image `absolute; bottom:0; left:25px` (hidden ≤991 px); content `padding:94px 0 91px`; text `margin-top:51px` with `p{font-weight:500}`; list `margin-top:52px`, flex `space-between` (540 px measured), 4 items of a 64 px icon + 18 px/500 `#1f1d22` title `margin-top:20px` (48 px icon / 15 px title ≤575 px) | why-choose |
| CTA strip                 | `#715691`, `.cta_content` 135 px tall, `padding-left:5px`, `justify-content-lg-between`; title 36 px/700 white; price 48 px/700 mint `translateY(-8px)` with 16 px spans; button 148×63 mint `translateY(4px)` (hover `#26064c`); 300 px (258 px ≤575 px) stacked column at ≤991 px | CTA strip |
| footer                    | `#26064c`, `padding:95px 0`; logo 47 px/600 white (mint span); copyright 11 px/400 `#715691` `margin-top:17px`; text `margin-top:33px`; form `margin-top:38px` — fields 49 px `#715691` `border-radius:12px` `padding-left:29px` white 12 px/400 placeholders, 21 px row gaps, textarea 142 px, submit 108×52 mint (16 px/700 `#35214d`) `margin-top:23px`; 4 link columns (`padding-top:13px`, titles 20 px/700 mint, lists `margin-top:36px`, 14 px gaps, links 15 px/400 white → mint, first two columns `margin-bottom:45px`); halves stack at ≤991 px (95 px gap), columns 60 px apart at ≤575 px | footer |
| Google Fonts map          | `Raleway:wght@400;500;600;700` via `<link>` in `index.html` (`https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap`), mirroring the source's `@import` of `Raleway:300,400,500,600,700,800,900`; icons from `lucide-react` (never the source's FontAwesome CSS or its SVG files) | `index.html` |
| placeholders (own assets) | hero skyline = own inline SVG line-art skyline; clouds = own SVG blobs; service band photo = `https://picsum.photos/seed/skyvault-band/1920/1080` under a violet overlay; choice photo = `https://picsum.photos/seed/skyvault-choice/800/1100`; icons = `lucide-react`; ok/x glyphs = `lucide-react` | ADDED vs the reference |
| attribution               | footer line links `https://www.componentdock.com/` ("Component Dock") replacing the source's Colorlib credit              | ADDED vs the reference |

## Requirements

### Feature: Header (transparent floating nav with a scrolled violet state)

#### Scenario: Transparent header renders wordmark, centred menu and auth links

- **Given** the page loads
- **When** the header renders
- **Then** it is `position:fixed; top:0; left:0; width:100vw; background:transparent; z-index:100`
  so the hero's gradient shows through it, and its `.header_content` row is
  124 px tall with the logo, nav and auth links vertically centred
- **And** the app's own two-tone wordmark sits at the left (24 px/600 white with
  the second half in mint `#1befc5`) — never the source's "HostSpace" string or
  the split "Host/Space" lettering
- **And** a centred nav carries the source's **five** destinations (home, about,
  services, news, contact) at 16 px/600 white with 48 px gaps (40 px ≤1199 px),
  the current one and the hovered one mint, and the right edge carries two auth
  links (16 px/600 white) split by a `/` separator
- **And** every link is a real, focusable control with a visible `focus-visible`
  ring, and the source's `index.html`/`about.html` file links are replaced by
  in-page anchors (or the app's own routes)

#### Scenario: Header collapses and gains a violet bar after scrolling

- **Given** the page is at the top
- **When** the user scrolls past 91 px
- **Then** the header gains `background:#200e35` and `padding-top:6px` while
  `.header_content` collapses from 124 px to 80 px over a 400 ms transition
- **And** the state is removed again at the top of the page, and the transition
  is skipped under `prefers-reduced-motion`

#### Scenario: Off-canvas menu opens, closes and traps focus below 991 px

- **Given** the viewport is ≤991 px so the desktop nav and auth links are hidden
- **When** the hamburger control is activated
- **Then** it toggles an off-canvas panel in from the right
  (`right:-350px` → `right:0`, 350 px wide, `#200e35`, `height:100vh`,
  `padding:50px 30px 0`, `z-index:102`) together with a full-viewport
  `rgba(255,255,255,.55)` overlay at `z-index:101`, exhibiting
  `aria-expanded` on the trigger
- **And** the panel holds a 45°-rotated 18×18 close control (two 2 px white
  bars at `top:41px; left:28px`, hover mint), a right-aligned auth pair and the
  same five links at 24 px/500 `rgba(255,255,255,.75)` (hover mint)
- **And** clicking the overlay, activating close, or pressing `Escape` closes
  it and returns focus to the trigger, and focus stays inside the open panel

### Feature: Hero (violet gradient night sky with a drifting-cloud skyline)

#### Scenario: Gradient band, skyline and clouds paint the hero

- **Given** the page loads
- **When** the hero renders
- **Then** it is a **fixed 821 px** band (`75vh` at ≤575 px) whose backdrop is a
  vertical `linear-gradient(to bottom, #200e35, #4d1d85)` with the app's **own
  SVG line-art skyline** (bottom-aligned buildings with window-dot grids) drawn
  over it — never the source's `images/city.png`
- **And** **four** decorative cloud shapes (roughly 138×57, from the app's own
  SVG artwork) sit at `top:147/204/332/353px` and drift left→right across the
  band with `cloud_anim` at `60s linear infinite`, negative delays
  (`-39s/-6s/-45s/-15s`) so they are already mid-flight at load, the lowest one
  (353 px) layered behind the skyline
- **And** the clouds and skyline are `aria-hidden` and get `animation:none` under
  `prefers-reduced-motion`

#### Scenario: Centred caption renders over the band

- **Given** the hero renders
- **When** its caption is inspected
- **Then** it is horizontally centred and absolutely placed at
  `top:31.9%` of the band: a 60 px/600 white headline (48 px ≤767 px, 36 px
  ≤575 px) over a paragraph limited to `max-width:750px` at 14 px with
  `line-height:2.14` and a 9 px gap
- **And** the headline and paragraph are the app's own paraphrases (a hosting
  offer statement plus a short supporting line) and never the source's
  "The Best Hosting Offers" / lorem strings verbatim

#### Scenario: Domain search bar renders field, TLD chip and mint action

- **Given** the hero renders
- **When** the search form is inspected
- **Then** it occupies `col-lg-10 offset-lg-1` with a 69 px top margin and is a
  single flex row at ≥768 px: a **white** field (60 px tall, `padding-left:30px`,
  left `12px` radius, 24 px/500 `#1f1d22`, placeholder "yourdomain"), a
  **`#7836c6` TLD chip** (141×60, right `12px` radius, 24 px/500 white label,
  chevron glyph) and a **mint `#1befc5` action** (166×60, `12px` radius,
  24 px/600 `#1f1d22`, magnifier glyph + label, hover white)
- **And** the chip opens a white list of exactly three TLD options
  (`.io`, `.com`, `.net` — 24 px/500 `#1f1d22`, hover mint), the chosen option
  becomes the chip label and is exposed to assistive technology (e.g. a
  `listbox`/`option` pattern or a labelled `<select>`), and the control is
  keyboard operable (`Escape` closes, focus returns to the trigger)
- **And** submitting validates the field locally (empty input shows an inline
  error, a valid name shows a confirmation in a polite live region), never
  navigates away, and no source endpoint (`action="#"` or any
  `mail.php`/Mailchimp URL) is reused
- **And** the field, chip and button shrink to 50 px at ≤991 px and 40 px at
  ≤575 px, the button drops below the field (`margin-top:18px`) at ≤767 px, and
  there is no horizontal overflow at 320 px

### Feature: How-to row (three badges over a dotted arc)

#### Scenario: Section title and three step items render centred

- **Given** the page renders
- **When** `.intro` is inspected
- **Then** it is a white band with `padding:96px 0 97px`, a centred 36 px/700
  `#1f1d22` title whose line box is compressed (`line-height:0.75`), and a row
  with a 98 px top margin holding exactly **three** `col-lg-4` items, each a
  centred column of a **143 px circular badge** (`background:#d5dfe3`) with a
  decorative **188 px halo** at `rgba(213,223,227,.25)`, a 56 px
  `lucide-react` icon, a 24 px/700 `#1f1d22` step title and a paragraph with a
  27 px gap
- **And** an ornamental dotted-arc graphic (the app's own SVG/CSS treatment,
  `top:-137px`, centred, `contain`) sits behind the row at ≥992 px and is hidden
  below, never the source's `images/dots.png`
- **And** the **middle** item's badge is mint `#1befc5` with a
  `rgba(27,239,197,.25)` halo (the source's `:nth-child(3)` rule) and the step
  labels are the app's own paraphrases of "buy a domain → get hosting → publish
  your site"

#### Scenario: Row reflows and the step button keeps its violet pill

- **Given** the viewport narrows to ≤991 px
- **When** the row is measured
- **Then** the three items stack with 80 px gaps, the dots ornament is hidden
  and the per-item content padding tightens, with no horizontal overflow
- **And** the centred CTA below the row is a **257×63 violet `#715691` pill**
  (`border-radius:12px`, `margin-top:86px`, 16 px/700 white label, hover mint;
  227×53 at ≤575 px) carrying the app's own price-led label rather than the
  source's exact string
- **And** at ≤575 px the badges measure 100 px with 133 px halos and 40 px icons

### Feature: Service band (violet photo band with floating chips)

#### Scenario: Three white cards render over a violet band

- **Given** the page renders
- **When** `.services` is inspected
- **Then** the band carries `padding:96px 0 127px`, a **white** centred title
  (`h2`, the source's `.services .section_title h2{color:#FFFFFF}`) and a
  dark/violet band treatment underneath it built from the app's own photo
  placeholder (`https://picsum.photos/seed/skyvault-band/1920/1080`) plus a
  violet overlay from the ramp — never the source's violet-tinted
  `images/services.jpg`
- **And** the heading stays legible even if the image fails (a solid
  ramp-coloured fill backs the band), so the white-on-white dependency of the
  reference is handled deliberately
- **And** a row with a 95 px top margin holds exactly **three** `col-lg-4`
  cards, each white with `border-radius:12px`, `padding:58px 30px 66px` and a
  `2px solid transparent` border that turns **mint** on hover, containing a
  75 px `lucide-react` icon (muted `#778990`, mint on hover), a 24 px/700
  `#1f1d22` `h3` with a 39 px top gap and a paragraph with a 19 px gap
- **And** the three topics paraphrase the source's kinds (backups, migration,
  virtual servers) and never reuse source strings

#### Scenario: Read More chip floats 32 px below its card

- **Given** a service card is rendered
- **When** its action is inspected
- **Then** it is a **floating chip**: `position:absolute; bottom:-32px;
  left:50%; transform:translateX(-50%); width:157px; height:63px;
  background:#f4f7f8; border-radius:12px` with a 16 px/600 `#656566` label
  (hover: chip mint, label `#1f1d22`), so it visually hangs out of the card
- **And** the card and the chip expose the hover promotion on `focus-within`,
  the icon is `aria-hidden`, and at ≤991 px the cards stack with 95 px gaps and
  the protruding chips never overlap the next card's content

### Feature: Pricing table (one bordered four-column block)

#### Scenario: Four plans render inside a single bordered table

- **Given** the page renders
- **When** `.pricing` is inspected
- **Then** the band is white with `padding:94px 0 98px` and **no section title**,
  holding one `.pricing_container` (`border-radius:12px;
  border:2px solid #d5dfe3; overflow:hidden`) with exactly **four**
  `width:25%` columns separated by `2px solid #d5dfe3` rules (none after the
  last)
- **And** each column carries a **129 px `#4d1d85` header bar** (30 px/700 white,
  the text centred on a 129 px line box and turning mint on hover), then a
  padded body with a 36 px/700 `#715691` price whose period label is a 14 px/500
  `#1f1d22` span nudged down-right (`translate(-5px,12px)`), then a
  **five-row** feature list with 26 px gaps and 89 px of separation from the
  price — rows included in the plan marked with a check glyph and an 18 px/600
  `#1f1d22` label, rows excluded with a cross glyph and a 16 px/500 `#656566`
  label
- **And** each column ends in a centred **132×53 mint** action
  (`border-radius:12px`, 75 px above, 16 px/700 `#35214d` label) that turns
  `#7836c6` with white text on hover/focus
- **And** the plan names, prices and list items are the app's own paraphrases of
  the source's kinds (a starter / basic / premium / pro tier with storage,
  sub-domain, mailbox, support and control-panel rows), the currency is stated
  once and consistently, and the checks/crosses are `lucide-react` icons

#### Scenario: Table reflows to two columns and then one

- **Given** the viewport narrows
- **When** the table is measured at ≤991 px and ≤575 px
- **Then** it becomes a **2×2** grid (`width:50%`) where only the odd column
  keeps its 2 px right rule (the source's `nth-child(odd)` behaviour), and then
  a rule-less single column at ≤575 px
- **And** the bordered container keeps its `12px` radius and never clips a
  hovered/focused action's focus ring, and no text overflows at 320 px

### Feature: Why-choose split (photo left, four-icon list right)

#### Scenario: Background band splits 6/6 with the photo pinned bottom-left

- **Given** the page renders
- **When** `.choice` is inspected
- **Then** the band is `#f6f8fb` and splits 6/6: the left column holds an
  absolutely positioned, bottom-aligned image (`bottom:0; left:25px`) using the
  app's own placeholder (`https://picsum.photos/seed/skyvault-choice/800/1100`)
  instead of the source's cut-out portrait, and it is hidden at ≤991 px
- **And** the right column carries `padding:94px 0 91px` with a left-aligned
  36 px/700 title (the source's "Why Choose us?" is paraphrased) and a
  `margin-top:51px` paragraph at `font-weight:500`

#### Scenario: Four icon items spread across the column

- **Given** the split renders
- **When** its list is inspected
- **Then** it is a `margin-top:52px` flex row with `justify-content:space-between`
  holding exactly **four** centred items — each a 64 px `lucide-react` icon over
  an 18 px/500 `#1f1d22` title with a 20 px gap — paraphrasing the source's
  four labels (marketing / stats / servers / quality)
- **And** the icons are `aria-hidden` so each item's accessible name is its
  title, at ≤575 px the icons shrink to 48 px and titles to 15 px, and the four
  items wrap without horizontal overflow on a 320 px viewport

### Feature: Call-to-action strip (violet with a mint price and button)

#### Scenario: A single 135 px strip pairs a heading, a price and a mint action

- **Given** the page renders
- **When** `.cta` is inspected
- **Then** the band is `#715691`, `.cta_content` is 135 px tall with
  `padding-left:5px` and spreads its three parts with `justify-content:between`
  at ≥lg: a 36 px/700 white heading, a **mint 48 px/700 price**
  (`transform:translateY(-8px)` with 16 px `from`/`/month` spans) and a
  **148×63 mint** action (`border-radius:12px`, `translateY(4px)`, 16 px/700
  `#35214d` label) that turns `#26064c` with white text on hover/focus
- **And** the strip's copy is the app's own paraphrase of the source's
  "start building your website now" message and the price-led CTA
- **And** at ≤991 px the strip becomes a stacked 300 px column with the price and
  button 11 px apart (258 px and 24 px/24 px type at ≤575 px), never clipping or
  overflowing

### Feature: Footer (violet band: contact form plus four link columns)

#### Scenario: Wordmark, credit and working contact form render on #26064c

- **Given** the page renders
- **When** `footer.footer` is inspected
- **Then** it is `background:#26064c; padding:95px 0` and its left half holds a
  47 px/600 two-tone wordmark (second half mint), an 11 px/400 `#715691` credit
  line, a `margin-top:33px` paragraph and a `margin-top:38px` contact form:
  two name/e-mail fields plus a message textarea, each a `49`/`142` px
  `#715691` control with a `12px` radius, `padding-left:29px` and 12 px white
  placeholders, and a **108×52 mint** submit (16 px/700 `#35214d` label)
- **And** every field has its own visible label, the e-mail field is
  `type="email"`, submitting validates locally (per-field messages, a success
  message in a polite live region, no navigation), and the source's
  `contact_form`/mail endpoint is not reused
- **And** the credit line is the **Component Dock** attribution (see below) and
  no Colorlib credit or source URL remains

#### Scenario: Four link columns render with mint titles

- **Given** the footer renders
- **When** its right half is inspected
- **Then** it is `padding-top:13px` with **four** columns, each a 20 px/700 mint
  title over a `margin-top:36px` list of 15 px/400 white links with 14 px gaps
  that turn mint on hover — the source's link sets: **6** hosting options,
  **5** domain links, **4** reseller links and **3** support links (labels are
  the app's own, never the source's exact strings)
- **And** the first two columns carry a 45 px bottom margin at ≥lg, the halves
  stack with a 95 px gap at ≤991 px, and at ≤575 px every column but the last
  gains a 60 px gap with no horizontal overflow

### Feature: Scroll-reveal motion

#### Scenario: Sections fade in as they enter the viewport, accessibly

- **Given** the page loads with motion allowed
- **When** the user scrolls
- **Then** the reveal blocks (intro items, cards, table columns, list items,
  footer) start at `opacity:0` and fade to full over ~0.5 s with an ease-in
  curve as they cross roughly 130 px into the viewport, and they do **not**
  reverse when scrolled back (mirroring the source's ScrollMagic
  `reverse:false` setup)
- **And** the content is always present in the DOM (`opacity` only — never
  `display:none`/`visibility:hidden` for the revealed blocks once mounted), no
  layout shift occurs, and the whole page renders fully and immediately when
  `prefers-reduced-motion: reduce` is set

### Feature: Responsive behaviour

#### Scenario: Grids, table and bands reflow on smaller screens

- **Given** the page renders at `lg` (≤1199 px), `md` (≤991 px) and
  `sm` (≤767 px / ≤575 px)
- **When** the layout is measured
- **Then** the nav collapses into the off-canvas panel at ≤991 px (auth links
  hidden), the search bar's controls shrink 60 → 50 → 40 px and the action
  stacks at ≤767 px, the hero headline steps 60 → 48 → 36 px with the band
  becoming `75vh` at ≤575 px, the intro row stacks (badges 143 → 100 px), the
  service cards stack with 95 px gaps, the pricing table goes 4 → 2×2 → 1, the
  choice split hides its photo and stacks, the CTA strip becomes a 300 px (258
  px) column and the footer stacks
- **And** the dots ornament is hidden below 992 px, the protruding service chips
  never collide with the next card, and the page scrolls horizontally **nowhere**
  at 320 px

### Feature: Component Dock attribution

#### Scenario: Footer links Component Dock exactly once

- **Given** the page renders
- **When** the footer is inspected
- **Then** exactly one clear link points to `https://www.componentdock.com/`
  branded "Component Dock" (replacing the source's Colorlib credit)
- **And** no `colorlib` / "Hostspace" / "HostSpace" / `hostspace` provenance
  string appears anywhere in `apps/skyvault` (comments included — record the
  palette as design-token notes instead)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/skyvault/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/skyvault/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-skyvault`
- [ ] `scripts/verify-app.sh skyvault` passes: typecheck + lint + knip + fallow +
      vitest at 100 % coverage + build (~2–3 min)
- [ ] Every scenario above has at least one matching test (scenario-style `it`
      blocks), with 100 % lines/functions/branches/statements on the app
- [ ] Screenshot match against `hostspace-free-template.jpg` (1200×946, AVIF
      decoded): transparent header with a two-tone mint/white wordmark, a white
      centred five-link menu and a white auth pair; a deep-violet gradient hero
      with a violet line-art skyline along its bottom edge, floating white
      clouds, a centred 60 px white headline over a ≤750 px paragraph, and a wide
      rounded search bar (white 24 px field + `#7836c6` TLD chip + mint
      `#1befc5` "Search" button)
- [ ] Section order at desktop matches the reference: header (transparent, with
      a scrolled `#200e35` state 91 px down) → off-canvas menu (≤991 px) → 821 px
      gradient hero with skyline + four drifting clouds + search bar → white
      three-step row (143 px badges, mint middle badge, dotted arc, violet pill
      CTA) → `#715691`-tinted photo band with three white `12px`-radius service
      cards and floating "Read More" chips → single bordered four-column pricing
      table (`#4d1d85` header bars, 2 px `#d5dfe3` rules) → `#f6f8fb` 6/6
      why-choose split with a bottom-left photo and four icons → 135 px `#715691`
      CTA strip → `#26064c` footer (wordmark, credit, `#715691` contact form,
      four link columns)
- [ ] Tokens present in `@theme` / components: mint `#1befc5`, ramp `#200e35`,
      `#4d1d85`, `#26064c`, `#35214d`, `#715691`, `#7836c6`, surfaces `#fff` /
      `#f6f8fb` / `#f4f7f8` / `#d5dfe3`, text `#1f1d22` / `#656566` / `#a5a5a5` /
      `#778990`, `rgba(255,255,255,.75)` and `rgba(255,255,255,.55)` for the
      menu, `12px` radius everywhere (plus a 7 px hamburger outline and 50 %
      circles), Raleway 400/500/600/700, transitions 200 ms / 400 ms, the
      0.5 s reveal and the 60 s cloud loop, **no box-shadows**
- [ ] Hero: own gradient + own SVG skyline + own four cloud shapes with the
      `60s linear infinite` drift and negative delays (lowest cloud behind the
      skyline), fixed 821 px band (`75vh` ≤575 px), caption at `top:31.9%`,
      headline 60/48/36 px, paragraph `max-width:750px` / `line-height:2.14`
- [ ] Search bar: `col-lg-10 offset-lg-1`, 69 px top margin, white 60 px field
      with a 12 px left radius and a 24 px/500 "yourdomain" placeholder, a
      141×60 `#7836c6` TLD chip with three keyboard-operable options and a mint
      166×60 action with a magnifier icon, 50/40 px sizes and the ≤767 px stack,
      local-only validation with no source endpoint
- [ ] How-to row: `padding:96px 0 97px`, centred compressed title
      (`line-height:0.75`), three 143 px `#d5dfe3` badges with 188 px halos and a
      **mint middle badge/halo**, own dots ornament (`top:-137px`, hidden
      ≤991 px), 80 px stacking gaps, 257×63 `#715691` pill CTA (227×53 ≤575 px,
      badges 100 px / icons 40 px)
- [ ] Service band: own placeholder photo + violet overlay (the source's tint is
      baked into its asset), white section title kept legible by a ramp-coloured
      band fill, three white `border-radius:12px` `padding:58px 30px 66px` cards
      with a mint hover border, 75 px icons (`#778990` → mint), and the
      `bottom:-32px` 157×63 `#f4f7f8` chips (hover mint with a `#1f1d22` label)
- [ ] Pricing: single `border:2px solid #d5dfe3` `border-radius:12px` container,
      four 25 % columns with 2 px rules, 129 px `#4d1d85` title bars, 36 px
      `#715691` prices with 14 px/500 shifted spans, five-row lists with
      check/cross glyphs, 132×53 mint actions (hover `#7836c6`), and the
      2×2 (odd-column rule) → 1×4 reflow
- [ ] Choice split: `#f6f8fb` band, 6/6 with a bottom-left own photo hidden at
      ≤991 px, `padding:94px 0 91px`, 51 px text gap (`font-weight:500`),
      52 px list with four `space-between` items (64 px icon + 18 px/500 title),
      48 px icons and 15 px titles at ≤575 px
- [ ] CTA strip: `#715691`, 135 px `.cta_content` with a 5 px left padding,
      36 px/700 white heading, 48 px/700 mint price (`translateY(-8px)`, 16 px
      spans) and a 148×63 mint button (`translateY(4px)`, hover `#26064c`), plus
      the ≤991 px 300 px column
- [ ] Footer: `#26064c` with `padding:95px 0`, 47 px two-tone wordmark, 11 px
      `#715691` Component Dock credit, `#715691` `12px`-radius contact fields
      (49/142 px, 12 px white placeholders) with a 108×52 mint submit and local
      validation, four link columns (20 px/700 mint titles, 15 px/400 white
      links with mint hover; 6/5/4/3 links; 45 px and 60 px stacking gaps)
- [ ] Motion: reveal blocks fade in ~0.5 s as they enter (+130 px, no reverse)
      with content always in the DOM and a fully static page under
      `prefers-reduced-motion`; cloud drift stops under reduced motion
- [ ] Accessibility: semantic landmarks (`header`/`nav`/`main`/`footer`), one
      `h1` (the hero headline), ordered heading levels, real labels on every
      field, `aria-label` on icon-only controls, `aria-expanded` on the
      hamburger and dropdown, focus-visible rings, decorative art and the
      drifting clouds hidden from the tree, and a working skip-to-content link
- [ ] Anchors: in-page nav targets carry `scroll-margin-top` so headings clear
      the fixed header (124 px, 80 px scrolled), verified by following a nav link
- [x] `public/CNAME` = `skyvault.free.componentdock.com`; `"homepage"` matches;
      `npm install` run at the repo root so the lockfile registers
      `@free-react-templates/skyvault`
- [x] Zero `colorlib` / "Hostspace" / `hostspace` provenance references anywhere
      in `apps/skyvault` (comments included — record the palette as design
      notes)
- [ ] No copied assets: no `city.png`, `cloud.png`, `cloud_full.png`,
      `services.jpg`, `choice.png`, `dots.png`, `search.png`, `ok.png`, `x.png`,
      `icon_1–10.svg`, no Bootstrap/OwlCarousel/FontAwesome/parallax CSS or JS,
      no Greensock/ScrollMagic bundles; photos come from picsum, icons from
      `lucide-react`, artwork is drawn as own SVG
- [ ] PR description includes: source template (ColorLib Hostspace), preview URL
      (`https://preview.colorlib.com/theme/hostspace/` → HTTP 200, 24,890 B;
      `styles/main_styles.css` 22,550 B; `styles/responsive.css` 5,731 B;
      `js/custom.js` 3,269 B), the design tokens used (mint `#1befc5`, the
      violet ramp `#200e35`/`#4d1d85`/`#26064c`/`#35214d`/`#715691`/`#7836c6`,
      surfaces `#fff`/`#f6f8fb`/`#f4f7f8`/`#d5dfe3`, text
      `#1f1d22`/`#656566`/`#a5a5a5`/`#778990`, 12 px radii, Raleway, no
      shadows), the measured structure and geometry (821 px gradient hero with
      four drifting clouds and a `top:31.9%` caption, 69 px search-bar offset,
      143 px badges with a mint middle one, `padding:58px 30px 66px` cards with
      `bottom:-32px` chips, 129 px `#4d1d85` pricing headers in a single
      2 px-bordered container, 135 px `#715691` CTA strip, `#26064c` footer with
      a `#715691`-field form), and what differs (new name, own
      skyline/cloud/photo/icon/copy assets, a violet overlay standing in for the
      source's pre-tinted photo, lucide icons instead of FontAwesome,
      `prefers-reduced-motion` handling for the reveal and cloud loops, added
      keyboard/aria states, local-only forms, and the Component Dock
      attribution)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

<!-- live-palette-revalue:start -->
**Live palette re-value (2026-10-23)** — the demo `https://preview.colorlib.com/theme/hostspace/` answers **HTTP 200** (24,890 B); the declarations below are quoted from its own stylesheets.

| claimed | painted | d | sheet (bytes, sha256) | declaration |
| --- | --- | --- | --- | --- |
| `#2e004b` | `#26064c` ×2 | 10 | `main_styles.css` (22,550 B, `fd9f7b1a5a85…`) | `background: #26064c;` |

The claimed hex was a screenshot sample of the same hue; the sheet value is canonical (`docs/replication.md`).
<!-- live-palette-revalue:end -->

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/hostspace/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#6247ea` — nearest `#6f42c1` (d=43)
- `#ec9d5f` — nearest `#ffa07f` (d=37)
- `#00d363` — nearest `#34ce57` (d=54)
- `#5e3a8c` — nearest `#715691` (d=34)
<!-- live-palette-unverified:end -->
