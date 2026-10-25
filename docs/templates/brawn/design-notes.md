# Brawn — design notes (replication of ColorLib "Vigor")

Prep research for `openspec/specs/template-brawn/spec.md`. Everything below was
measured — nothing is a guess dressed as a token:

- Preview HTML fetched with `curl -4` (UA `Chrome/124`): **22,653 B**, sha256
  `5c09921d5d66b35821a2a6b31e16ab3b7e1ec6c8dabc9784d63acab407f182e1`.
- `css/style.css` **52,074 B**, sha256
  `6a984e823b17ebbd2fc298a509569df69662f02f5c52bd8277be6a53c64aa534`
  (409 top-level rules; colours/radii counted by brace-walking the sheet).
- `js/main.js` **4,263 B**, sha256
  `5c0398c8d8bc76f0f97a4b65d0e3ab6cadde6a4e4dd2972473c601bbee3b8a3b`.
- Live render measured with headless chromium (Playwright) at **1440×900**,
  **1200×900**, **768×1024** and **390×844**: per-band
  `getBoundingClientRect`, `getComputedStyle` per element, `document.fonts`,
  `scrollWidth` vs `clientWidth`, full-page screenshots.
- Screenshot card: `vigor-free-template.jpg` served as **AVIF** (78,567 B),
  decoded 1200×946 with PIL, inspected.

## What the reference is

A single-page crossfit/gym landing page: white in-flow header, one full-height
photo hero, a four-card icon row, two half-bleed photo/text splits, a blue
three-column program band, a grey testimonial carousel, a blue CTA strip and a
dark four-block footer. **No hero carousel, no counters, no pricing, no blog.**
The theme behind it is six pages (`about`, `services`, `gallery`, `coaches`,
`contact` are live; `elements`, `blog` 404), which the single-page build maps to
anchors — it does not invent those pages' bands.

## Screenshot analysis (TEMPLATES.md card image)

A **browser-chrome** capture (Safari-style dots + address bar), **top fold
only**, 1200×946 including ~90px of chrome:

- White header, no shadow, no border: blue "VIGOR" wordmark tracked wide at the
  left, grey nav row (Home, About, Services ▾, Gallery, Coaches, Contact) with
  "Home" in blue and underlined, and a right-aligned underlined search line with
  a magnifier.
- Hero photo of a gym class (man mid-jump-squat, two women squatting, racks and
  yellow wall behind) flattenned by a dark wash — text sits on it comfortably.
- Headline "BEST FITNESS IN THE CITY" across two centred lines, break after
  "IN", heavy uppercase, generous tracking-free white.
- White circular play disc with a small black triangle; "Watch Video" in white
  under it, no button chrome.
- The band ends hard at the photo's bottom edge; the services row begins with
  **four diamond outlines** in blue, evenly spaced across the container — the
  screenshot stops ~140px into that row, so it shows the diamonds (and the top
  of their glyphs) but **no titles or copy**.

Screenshot-vs-DOM disagreements: none. The card image is a true top-fold view;
everything below it came from the live render.

## DOM skeleton (live preview, 1440×900)

```
header                                      85px, white, position: relative
  nav.navbar.navbar-expand-lg.bg-dark       (.bg-dark overridden: background:none)
    a.navbar-brand                          "Vigor", 20px/400, ls 4px, #007bff
    button.navbar-toggler                   shown <992px
    ul.navbar-nav                           6 items; Services = .dropdown (6 items)
    .navbar-nav.ml-auto > form.search-form  234×44, 1px underline, ion-search glyph
div.slider-item.overlay (bg hero_2.jpg)      900px = 100vh (min 700); :before #000 .4
  .container > .row.slider-text …
    .col-lg-9.text-center.element-animate   855×346
      h1                                     80px/96px/700/UPPERCASE white
      .btn-play-wrap > p > a.btn-play        60×60 white disc → 80×80 hover
      span                                    "Watch Video", 16.8px white
div.section                                  540px white (padding 7em 0)
  4 × .col-md-6.col-lg-3 > .service-box
      .square-figure > span.flaticon-*       90×90, rotate 45°, 2px #007bff, r7
      .service-text > h3 + p                 19.2px/900 · 16.8/30.24 #6c757d
div.site-section.position-relative           504px, "Enjoy The Fitness"
  .img-1 (bg hero_1.jpg)                     abs, 720×504 @ x0
  .col-lg-5.ml-auto > .padding-tb            445px @ x830, padding 64px 0
      h2.heading + 2 × p                     48px/48px/900
div.section.bg-primary                       449px #007bff
  3 × .col-md-6.col-lg-4.element-animate
      .icon span (white) + h3 + p            20px/900 white, 16.8px white
div.site-section.position-relative           504px, "Be Fit & Healthy"
  .img-2 (bg hero_2.jpg)                     abs, 720×504 @ x720
  .col-lg-5.mr-auto > .padding-tb            445px @ x165
div.section.bg-light.block-11                717px #f8f9fa
  h2 "Testimonial"                           48px/900, centred, y 3,099
  .nonloop-block-11.owl-carousel             1 visible × .block-33 (700×242, p40)
      .vcard (img 60px circle + h2.name + .meta)
      .text > blockquote > p
  .owl-nav                                   abs, bottom -40px, centred, 110×54
div.bg-primary.py-5                          312px #007bff, padding 48px 0
  h3 28px/900 white + p.lead 20px/36px/300 + a.btn.btn-warning
footer.site-footer                           730px #333, padding 7em 0
  .row.mb-5 > md-4 (About + 4 social) / md-5 (Contact Info + Subscribe) /
              md-3 (Quick Links) / md-3 (EMPTY — drop it)
  .row > .col-12.text-md-center > p          copyright, source credits Colorlib
```

## CSS token reference (verbatim from `css/style.css`)

```css
body                     { font-family: "Oxygen", …; font-size: 1.05rem; line-height: 1.8;
                           color: #6c757d; background-color: #fff; }
h1, h2, h3               { color: #000; line-height: 1.5; font-family: "Montserrat", sans-serif;
                           font-weight: 900; }
.heading                 { color: #000; font-size: 3rem; line-height: 1; }   /* 48px/48px */
.bg-primary              { background-color: #007bff !important; }
.bg-light                { background-color: #f8f9fa !important; }
.btn                     { font-size: 13px; text-transform: uppercase; letter-spacing: .2em;
                           font-weight: 900; padding: .375rem .75rem; border-radius: .25rem; }
.btn-warning             { color: #212529; background-color: #ffc107; border-color: #ffc107; }
.btn-warning:hover       { background-color: #e0a800; border-color: #d39e00; }
.section                 { padding: 7em 0; }
header                   { position: relative; top: 0; left: 0; width: 100%; z-index: 5;
                           background: #fff; }
header .navbar           { padding-top: 0; padding-bottom: 0; background: none !important;
                           position: relative; font-family: "Montserrat", sans-serif; }
header .navbar-brand     { text-transform: uppercase; letter-spacing: .2em; font-weight: 400; }
header .navbar .nav-link { padding: 1.7rem 1rem; font-size: 1.05rem; font-weight: 300;
                           color: #666666; }
header .navbar .nav-link.active { color: #007bff; }
header .navbar .dropdown-menu { font-size: 14px; border-radius: 4px; border: none;
                           box-shadow: 0 2px 30px 0 rgba(0,0,0,.2); min-width: 13em; margin-top: -10px; }
header .navbar .dropdown-menu .dropdown-item:hover { background: #007bff; color: #000; }
header .search-form .form-control { padding-left: 30px; border: none; height: 44px; border-radius: 0;
                           background: transparent; border-bottom: 1px solid rgba(0,0,0,.3); color: #000; }
header .search-form .icon { position: absolute; top: 50%; font-size: 1.2rem; left: 0; }
.slider-item             { background-size: cover; background-repeat: no-repeat;
                           background-position: top center; height: calc(100vh);
                           min-height: 700px; position: relative; }
.slider-item:before      { content: ""; position: absolute; inset: 0; background: #000; opacity: .4; }
.slider-item .slider-text h1 { font-size: 5rem; color: #fff; line-height: 1.2;
                           font-weight: 700 !important; text-transform: uppercase;
                           margin-bottom: 30px; margin-left: 0.5em; }
.slider-item .slider-text p  { font-size: 20px; line-height: 1.5; font-weight: 300; color: #fff; }
.slider-item .slider-text h1 span { color: #fff; background-color: #007bff;
                           box-shadow: .5em 0 0 #007bff, -.5em 0 0 #007bff; }   /* UNUSED: no span in markup */
.btn-play                { width: 60px; height: 60px; background: #fff; border-radius: 50%;
                           position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
                           transition: .3s all ease-in-out; }
.btn-play:hover          { width: 80px; height: 80px; }
.service-box .square-figure { width: 90px; height: 90px; border: 2px solid #007bff;
                           display: inline-block; border-radius: 7px; transform: rotate(45deg);
                           margin-bottom: 2rem; }
.service-box .square-figure span { font-size: 3rem; transform: translate(-50%,-50%) rotate(-45deg); }
.service-box h3          { font-size: 1.2rem; }                              /* 19.2px */
.block-6 .media-body .heading { font-size: 20px; }
.block-6 .media-body p        { font-size: 16px; }
.img-1, .img-2           { position: absolute; left: 0; top: 0; width: 50%; bottom: 0;
                           background-size: cover; background-position: center center; }
.img-2                   { right: 0; left: auto !important; }
.padding-tb              { padding-top: 4rem; padding-bottom: 4rem; }
.block-33                { background: #fff; max-width: 700px; margin: 0 auto; padding: 40px; }
.block-33 .vcard .image img   { border-radius: 50%; }
.block-33 .vcard .name-text .heading { font-size: 18px; font-weight: 300; line-height: 1.5; }
.block-33 .vcard .name-text .meta    { color: #a6a6a6; }
.block-33 .text blockquote { padding: 0; margin-bottom: 0; border: none !important; font-size: 16px; }
.block-11 .owl-nav       { position: absolute; bottom: -40px; left: 50%; transform: translateX(-50%); }
.block-11 .owl-nav .owl-prev span, .block-11 .owl-nav .owl-next span { font-size: 30px; padding: 20px; }
.block-11 .owl-nav .disabled { opacity: .2; }
.element-animate         { opacity: 0; visibility: hidden; }                 /* waypoint gates it */
.site-footer             { padding: 7em 0; background: #333; }
.site-footer h3          { font-size: 1rem; letter-spacing: .1em; font-weight: bold; color: #fff; }
.site-footer a           { color: rgba(255,255,255,.7); text-decoration: underline; }
.site-footer a:hover     { color: #fff; text-decoration: none; }
.form-control            { height: 50px; border-width: 2px; }                /* footer subscribe */
```

Colour census (literals, count of declarations): `#fff` 41 · **`#007bff` 23** ·
`#000` 15 · **`#6c757d` 12** · `#212529` 8 · **`#ffc107` 6** · `#dee2e6` 4 ·
`#dc3545` 3 · `#343a40` 3 · `#f8f9fa` 3 · `#495057` 3 · `#0062cc` 3 · then
Bootstrap's remaining stock colours at 1–2 each (`#e83e8c`, `#28a745`,
`#17a2b8`, `#e9ecef`, `#d39e00`, `#3395ff`, `#6610f2`, …). Radii:
`0.25rem` ×7 · `50%` ×4 · `0` ×3 · `4px` ×3 · `0.3rem` 1 · **`7px` 1 (the
diamond)** · `16px` 1 · `0` ×1. `@font-face` count in the sheet: **0**.

## Band table (measured live)

Legend: top/height in CSS px at the stated viewport.

| band | 1440×900 | 390×844 |
|---|---|---|
| header | 0 → 85 | 0 → 62 (hamburger) |
| hero `.slider-item` | 85 → 900 | 62 → 844 |
| services `.section` | 985 → 540 | 906 → 1,430 (1 column) |
| Enjoy The Fitness | 1,525 → 504 | 2,336 → 1,043 (image 390×400 on top) |
| program `.bg-primary` | 2,029 → 449 | 3,379 → 876 |
| Be Fit & Healthy | 2,478 → 504 | 4,255 → 1,043 |
| testimonials `.bg-light` | 2,982 → 717 | 5,298 → 889 |
| CTA `.py-5` | 3,698 → 312 | 6,187 → 348 |
| footer | 4,010 → 730 | 6,535 → 1,286 |
| **document** | **4,739** (`scrollH`) | **7,821** |

At 768×1024 the split bands put a **768×400** image above the text (image y
1,919 / text y 2,319), the nav is collapsed and the header search form measures
**0×0** (removed from the layout, not merely hidden). `scrollWidth ===
clientWidth` at every width tested — the Owl `.owl-stage` overflows to the right
(1,535px on a 390px screen) but is clipped, so **there is no page-level
horizontal scroll**; do not "fix" a defect that is not there.

## Section-by-section fidelity notes

1. **Header.** White, `position: relative`, so the hero begins *below* it —
   the single most common way to get this template wrong is to make the bar
   absolute. The `.bg-dark` class on `nav` is dead (overridden by
   `background: none !important`). Measured: brand 86×46 at (31,19) with
   `letter-spacing: 4px`; each nav item 69×85 (padding 27.2px 8px) so the links
   are the full bar height; the active item is blue, the rest `#666`. Search
   sits at x 1,175 (234×44) with a 30px glyph gutter and only a bottom rule.
2. **Hero.** One band, `100vh` with a 700px floor, photo `top center / cover`,
   `:before` black at **.4** (the `.overlay` class does nothing on this page —
   the wash comes from `.slider-item:before`). The h1 is 80px at desktop and
   **40px** below 768 (media query), uppercase, weight 700, `margin-left: .5em`
   so the two-line lockup sits slightly right of centre — keep it, it is
   visible in the screenshot. The play disc is absolutely centred inside a
   wrapper and grows on hover; the "Watch Video" label is plain 16.8px white,
   not a button.
3. **Services.** `padding: 7em 0` (117.6px) gives the 540px band with 305px of
   content. The diamond is the whole identity of this row: 90px square,
   `rotate(45deg)`, 2px blue border, **7px** radius, glyph rotated back −45° and
   **grey** (`#6c757d` from `body`, no colour rule of its own — the blue is the
   border only), 32px below it the 19.2px title, then the copy. One row of four
   at ≥992, two at 768, one at 390 (measured 1,430px tall).
4. **Enjoy The Fitness.** The image is `position:absolute; width:50%` anchored
   to the left edge — it is **not** a grid column and it is not inside the
   container, so it bleeds. The text column is `.col-lg-5` with `ml-auto`
   (445px at 1440) and carries its own `padding: 64px 0`; the band itself has
   no vertical padding, so its height is the text column's.
5. **Program band.** `#007bff` with the standard 7em rhythm, three `.col-lg-4`
   columns, icon glyph 50px white, titles 20px/900 white, copy 16.8px white,
   **no card, no border, no shadow** — a flat paint. All three are
   `.element-animate`, i.e. invisible until the waypoint fires 95% of the way
   up the viewport.
6. **Be Fit & Healthy.** Mirror of #4: `.img-2` right-anchored, `mr-auto` text.
   Same 64px text padding, same 48px heading, same two-paragraph rhythm.
7. **Testimonials.** A plain `bg-light` band with a centred heading and a
   **single-card** Owl carousel (`items: 1`, `stagePadding: 20`, `margin: 50`,
   `loop: false`). The card is 700px, white, 40px padded, no shadow; avatar
   60px round, 20px gutter; name 18px/300 `#000`; meta 16.8px `#a6a6a6`; quote
   16px/28.8 in typographic quotes. Arrows: 110×54 block centred **40px below**
   the band's content, 30px glyphs with 20px padding, `.disabled` at .2 opacity.
   The source repeats "John Smith" three times — Brawn ships four distinct
   people.
8. **CTA.** `#007bff` with only `py-5` (48px) — noticeably tighter than the
   7em bands. Heading is an `h3` at the **28px** base size (not the 19.2px the
   services cards use, and not the 48px `.heading`), 900 white; the lead is
   20px/36px at weight **300** (that weight is why Oxygen needs a 300 face);
   the button is 174×54 with 16px/24px padding.
9. **Footer.** `#333`, 7em padding, 4/5/3 columns of the 1,110px container plus
   an empty fourth column the source never fills — drop it and let the three
   columns breathe. Headings are 1rem/700 white with 1.6px tracking; links are
   white at .7 with an underline that disappears on hover. The subscribe field
   is 295×50 with a **2px** `#6c757d` border (Bootstrap's default is 1px —
   `border-width: 2px` is set) and square on the right where the button butts
   against it. The copyright line is the only place the source brands itself;
   Brawn credits **Component Dock** with the year rendered in React.

## Source → React adaptation table

| source construct | React build |
|---|---|
| `header .navbar .dropdown` hover via jQuery (`.hover()` adds `.show`) | `Header` with hover-open on `pointer: fine`, click/keyboard-open otherwise (`aria-expanded`, Escape closes, focus returns) |
| `.slider-item` single static band | `<section>` with `min-h-screen min-h-[700px]` + `bg-[url(picsum)]` + `before:` overlay `bg-black/40` |
| `a.btn-play` → fancybox lightbox | `<a href={videoUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch the Brawn video">` with hover scale (or a focus-visible ring, same disc) |
| `.service-box .square-figure` rotate transform | `rotate-45 rounded-[7px] border-2 border-brand` wrapper + inner `-rotate-45` glyph (`lucide-react` icons: dumbbell / weight / bike / activity) |
| `.img-1` / `.img-2` absolute half-bleed | `SplitBand` component, `absolute inset-y-0 left-0 w-1/2` (or `right-0`), image `bg-cover bg-center`, text `lg:col-span-5` with `ml-auto`/`mr-auto` |
| `.element-animate` + waypoints + 100ms stagger | `useReveal` (IntersectionObserver) adding a class once; `motion-reduce:` variant disables transform/opacity; default state visible when JS is off (render the class only after mount, or gate on a `hasJS` attribute) |
| Owl `.nonloop-block-11` (one card, arrows, no autoplay) | accessible carousel: `role="group" aria-roledescription="carousel"`, slides `aria-roledescription="slide" aria-label="1 of 4"`, prev/next buttons with `aria-disabled` at the ends, `translate-x` transition ~1s |
| Bootstrap `input-group` subscribe (input + `.btn-warning`) | `<form>` with `type="email"`, `aria-invalid`, inline message, button `type="submit"`; no network call, show a success line |
| `.btn.btn-warning.px-4.py-3` | `Button` from `packages/ui` styled with `bg-action text-[#212529] uppercase tracking-[.2em] text-[13px] font-black px-6 py-4 rounded` |
| flaticon / ionicons / fontawesome glyphs | `lucide-react` (dumbbell, bike, activity, watch, twitter/facebook/linkedin/instagram, search, play) |
| theme JPEGs (`hero_1`, `hero_2`, `person_1..3`) | `https://picsum.photos/seed/brawn-{hero,split-a,split-b,avatar-1..4}/…` |

## Documented deltas (recap)

1. Hero is a **static band**, not a slider (`.home-slider` count = 0 while
   `main.js` binds one).
2. `.element-animate` opacity-0 gate → progressive enhancement, never a blank
   band for reduced-motion or no-JS users.
3. Header search: placeholder-only, label-less, dropped below 992px → labelled,
   real submit, present in the mobile drawer.
4. Footer: empty `md-3` spacer dropped; subscribe heading/button duplication
   disambiguated with an `aria-label`.
5. Copyright bar → Component Dock (AGENTS.md rule 5), year in React (no
   `document.write`).
6. `.slider-text h1 span` blue-highlighter rule is unused by the markup — do not
   resurrect it.
7. Testimonials: 4 distinct people instead of "John Smith" ×3.
8. `body` base 16.8px (1.05rem) is kept as the reference rhythm even though
   Tailwind's default is 16px — the whole page's spacing was measured against it.
9. Fonts: the sheet declares Montserrat/Oxygen but ships **no** `@font-face`;
   the preview host injects 14 `/cf-fonts/` faces (400/700 only), so the live
   900-weight headings are **synthesised**. Brawn loads real 400/700/900 (plus
   Oxygen 300 for the CTA lead).

## Sibling comparison (same category, different designs)

| app / prep | source | palette | shape |
|---|---|---|---|
| `stryve` | ColorLib **Topgym** | indigo `#233EDE` | long marketing page, hero-first |
| `grithaus` | ColorLib **Fitnessgym** | green `#38b143` | gym site with program cards |
| `vigor` (app) / `stamina` (prep) | ColorLib **Endurance** | yellow `#fcd307` + orange `#fc6b29` + pink `#fd0054`, Roboto | **11 bands**: navbar → hero → about → services → classes → pricing → testimonies → appointment → blog → counter → footer |
| **`brawn` (this prep)** | ColorLib **Vigor** | Bootstrap primary `#007bff` + amber `#ffc107`, Montserrat/Oxygen | **9 bands**, no pricing/counter/blog, two half-bleed splits, one-card testimonial carousel |

The `vigor` app is **Endurance** — same Bootstrap blue in its palette but a
different page: different typography (Roboto), different band set, different
hero treatment. Do not port any component from `apps/vigor` believing it is the
same design; only the palette overlaps.
