# Matrimony — design notes (replication research)

Recreation of ColorLib **"Wed"** (source slug `wed`, TEMPLATES.md line 3104,
category **Wedding**) → new name **Matrimony**.

- Source page: `https://colorlib.com/wp/template/wed/` — HTTP 200
- Live preview: `https://preview.colorlib.com/theme/wed/` — **HTTP 200**,
  32,821 B, `<title>Wedding | Template</title>`
- Stylesheet: `https://preview.colorlib.com/theme/wed/assets/css/style.css` —
  **HTTP 200**, 57,398 B, sha256
  `4f9429265f14e36dc089c39593d8180abf3128fadaf7405d29fce51f929baa33`
- Behaviour: `assets/js/main.js` (HTTP 200, 7,712 B) — jQuery + owl-carousel
  (hero), slick (registry logo strip), magnific-popup (gallery), WOW/animate.css,
  counter-up, and the `[data-background]` → `background-image` swap that paints
  every patterned band.
- Screenshot: TEMPLATES.md `wed-free-template.jpg` (HTTP 200, **AVIF** despite
  the `.jpg` name, 89,139 B, 1200×946 — converted to PNG with ImageMagick and
  inspected). Live render at 1440 px was captured section by section and agrees
  with the screenshot.
- Preview reachability: **reachable** — no screenshot-only fallback needed.

## Sources of the tokens

Everything below comes from the preview itself, not from imagination:

- colours/typography/radii/paddings → rules read out of `style.css` and
  confirmed with `getComputedStyle` in the live DOM;
- band palette → the four `[data-background]` images fetched and averaged with
  Pillow (`section_bg1.png` 1920×1217 avg `#f9f9f9`; `section_bg2.png`
  1004×160 avg `#ff3535`; `section_bg3.png` 1920×499 avg `#ff3535`;
  `section_bg4.png` 1920×630 avg `rgb(18,21,25)` = `#12151a`);
- the love-story red panel → `story2.jpg` background image, 474×583, avg
  `rgb(252,69,67)`;
- the two digital ornaments → `tittle_img.png` (439×17, avg `rgb(255,42,42)`)
  under every section title, `hero_shape1.png` (36×45) beside the hero eyebrow,
  `hero_shape2.png` (80×84) between the couple names, `shape1.png` (108×61) in
  the gallery captions;
- **font delivery → a legacy `@import` on line 1 of `assets/css/style.css`**:
  `@import url("https://fonts.googleapis.com/css?family=Barlow:300,400,500,600,700|Playfair+Display:400,500,600,700,800,900|Roboto:300,400,500,700&display=swap");`
  — the v1 `css?` form (`|`-separated families, `&display=swap`). **Neither the
  HTML nor any other sheet carries a `fonts.googleapis.com` reference for these
  faces, and the only `@font-face` rules on the page belong to the icon fonts**
  (`Flaticon`, `Font Awesome 5 Free`/`Brands`, `themify`) — all replaced by
  `lucide-react` glyphs. Our recreation links the same three families from Google
  Fonts in `index.html` instead, **with `&display=swap`** so first paint matches
  the reference's swap-in (a link without it blocks text for up to ~3 s).

## Page skeleton (source DOM order → our section order)

| # | Source block | Our component | Notes |
| --- | --- | --- | --- |
| 0 | `#preloader-active > .preloader` | `Preloader.tsx` | full-screen `#f7f7f7` cover, 100 px white circle + logo mark, fades 450 ms after `load` |
| 1 | `.main-header` (white, fixed) | `Header.tsx` | wordmark left, 6 uppercase links, BLOG submenu |
| 2 | `.slider-area .single-slider` ×2 | `Hero.tsx` | owl-carousel with two identical slides → we ship one static slide |
| 3 | love story block | `LoveStory.tsx` | panel + offset photo |
| 4 | `.pricing-card-area.section-padding30.section-bg` | `WeddingInfo.tsx` | 3 cards, middle active |
| 5 | `.count-down-area` | `Countdown.tsx` | pulled up `-73px` |
| 6 | `.gallery-area` | `Gallery.tsx` | no heading, 4 tiles |
| 7 | `.gift-area.gift-padding` | `GiftBand.tsx` | red band + white pill |
| 8 | `.contact-form.section-padding30` | `RsvpForm.tsx` | white card |
| 9 | `.brand-area.section-padding-b` | `Registry.tsx` | 6 placeholder marks |
| 10 | `.contact-sections .d-area` (#map 235 px) | `MapBand.tsx` | keyless OSM embed, grayscale |
| 11 | `<footer> .footer-main` | `Footer.tsx` | dark band, 3 columns, copyright |
| 12 | back-to-top (live render) | `BackToTop.tsx` | red circle bottom-right |

## Section-by-section fidelity notes

### 0. Preloader overlay

The source's first body element is
`<div id="preloader-active"><div class="preloader d-flex align-items-center justify-content-center">`
`<div class="preloader-inner position-relative"><div class="preloader-circle"></div>`
`<div class="preloader-img pere-text"><img src="assets/img/logo/logo.png" alt=""></div></div></div></div>`.

- `.preloader{background-color:#f7f7f7; width:100%; height:100%; position:fixed;
  top:0; left:0; right:0; bottom:0; z-index:999999; transition:.6s; margin:0 auto}`
- `.preloader .preloader-circle{width:100px; height:100px; border-style:solid;
  border-width:1px; border-top-color:#ff2828; border-{bottom,left,right}-color:transparent;
  border-radius:50%; background-color:#ffffff; box-shadow:0 1px 5px 0 rgba(35,181,185,0.15);
  animation:zoom 2000ms infinite ease}` with `@keyframes zoom{0%{rotate(0deg)}100%{rotate(360deg)}}`
  — a **1 px `#ff2828` arc** on an otherwise white disc, so the ring reads as a thin red sweep.
- `.preloader .preloader-img{position:absolute; top:50%; left/right:0; margin:0 auto;
  transform:translateY(-50%); padding-top:6px}` and `.preloader-img img{max-width:55px}` —
  the logo sits inside the disc.
- `.preloader .pere-text strong{font-weight:800; color:#dca73a; text-transform:uppercase}`
  styles a `strong` the markup does **not** contain (dead rule — don't ship a gold caption).
- `assets/js/main.js` (7,712 B): `$(window).on('load', function () { $('#preloader-active').delay(450).fadeOut('slow'); $('body').delay(450).css({'overflow':'visible'}); });`
  The `overflow:'visible'` write is **inert** — nothing in the page ever sets the
  body's overflow to `hidden` (no inline `body{overflow:hidden}` in the head).
- React: ship the repo's existing `Preloader` pattern (`apps/clinica`, `apps/cassini`) —
  `fixed inset-0 z-[999999] bg-[#f7f7f7]`, a 100 px white disc with a `1px` `#ff2828`
  top-border arc (`animate-[spin_2s_linear_infinite]`) and the Matrimony mark inside it,
  removed 450 ms after load, `aria-hidden`, reduced-motion aware.

### 1. Header

- **Not** transparent-over-hero: `.main-header` is `position: fixed`,
  `background: #fff`, `padding: 15px 0`, shadow
  `0 10px 15px rgba(25,25,25,0.1)`. White page top + white bar = the hero photo
  starts *below* the bar (see the screenshot).
- Logo: a serif wordmark + a red wheat/laurel flourish (118×52 image). We render
  the word **Matrimony** in Playfair Display with a small inline-SVG laurel —
  never the source's "WED" lockup.
- Links: `#3c3e48`, `padding: 39px 15px`, hover `#ff2828`; scrolled state
  (`.sticky-bar.sticky`) shrinks them to `26px 20px`.
- BLOG submenu: 14 px `#0b1c39` capitalize items (Blog · Blog Details ·
  Element) opening under the parent, hover `#ff2828`.
- The source is **multi-page** (`index / about / gallery / booking / blog /
  contact`) → single-page recreation with anchors. Mapping used:
  HOME → `#home`, ABOUT → `#story`, GALLERY → `#gallery`, GUESTBOOK → `#rsvp`,
  BLOG dropdown → `#story` / `#registry` / `#rsvp` (closest on-page content),
  CONTACT US → `#contact` (the footer/map band).

### 2. Hero

- Height `.slider-height: 980px` desktop → 600 → 500; `.hero-overly::before`
  is a **very light `rgba(0,0,0,0.1)`** wash — the photo stays bright, so the
  white caption needs a text-shadow-free but photo-backed contrast (the source
  relies on the photo being dark on the left; keep the left third of the
  placeholder image calm).
- Caption (`col-xl-8`, so left-aligned, not centred):
  - eyebrow: Barlow 22 px, white, uppercase, `letter-spacing: 0.3em`,
    `padding-left: 50px` reserving room for the 36×45 flourish mark rendered by
    `::before`;
  - `h1` "Dennis & Judith": Playfair Display **99 px**, white, with an
    ampersand wrapped in `<strong>` and an 80×84 laurel flourish image placed
    between the names (`.hero-shape2`) — reproduce the flourish inline;
  - `p` "will get married": small uppercase letterspaced white.
- Two identical slides in an owl-carousel with fade-in-left WOW animations →
  one static slide, animations off under reduced motion.

### 3. Love Story

- Section title block: centred `h2` Playfair 40 px / 700 `#212121`, then the
  **red flourish divider** (439×17) with `margin-bottom: 25px` and
  `position: relative; top: -5px`, then a 20 px-ish grey paragraph
  (`#2e3c40`/`#636363`).
- Row: `col-lg-5` + `col-lg-5`, `justify-content-center`.
  - Left: `.story-caption` = **background image `story2.jpg`** (red patterned,
    avg `rgb(252,69,67)`), `display: flex; align-items: center`; the text column
    inside is inset `padding-left: 150px → 121px → 94px` across breakpoints.
    Text is white: `h4` Playfair 30 px / 400 capitalize, `p` white.
  - Right: `.story-img img` full width with `.story2 { bottom: -51px;
    left: -30px }` on desktop (reset to `0` on small screens) — the photo hangs
    below and left of the panel.
- Copy kind: a two-paragraph "how we met" blurb under "The Proposal".

### 4. Wedding Info

- Band: `[data-background]=section_bg1.png` (1920×1217, near-white floral
  texture, avg `#f9f9f9`), `padding: 195px 0 170px`. Reproduce as a
  `#f9f9f9` band (optionally a very faint repeating neutral pattern drawn in
  CSS/SVG — no asset copied).
- Title block: `h2` "Wedding Info" + flourish + grey paragraph.
- Cards (`col-xl-4`, `align-items-end`):
  - `.single-card`: white, `padding: 70px 25px 0`, shadow
    `0 0 9px rgba(131,93,248,0.07)`, `border: 1px solid transparent`.
  - `.card-top`: the card glyph (a `50 px` `display:block` span, ink `#212529`)
    above the title, then `border-bottom: 2px solid #f4f4f4; margin-bottom: 46px`.
    **The three flaticon class names are misleading — these are the shapes the
    source actually paints** (verified on the live render, `assets/css/flaticon.css`
    maps them `chart → \f100`, `project → \f105`, `award → \f106`):
    Ceremony = `flaticon-chart` = a **magnifier with connected network nodes**
    (not a bar chart) → lucide `ScanSearch`/`Radar`;
    Reception = `flaticon-project` = a **rocket with a check mark and a download
    arrow** (not a clipboard) → lucide `Rocket`;
    Party = `flaticon-award` = a **ribbon rosette with a star** → lucide `Award`.
  - title `h4`: Playfair 25 px / 700 `#2e3c40`.
  - list rows: `#636363`, weight 300, 16 px, `margin-bottom: 26px`, icon with
    `padding-right: 7px` — date ("April 20, 2016"), time ("5:30 PM"), venue
    ("The Mayflower Hotel"), address ("1127 Connecticut Avenue, NY").
  - "Check out the map" link in brand red; **GET STARTED** = `.btn` red pill
    (radius 30 px, uppercase, white).
  - **Active card** (the middle one in the source): `1px solid #ff2828`,
    `padding-bottom: 70px`, button visible. Hover applies the same border +
    `box-shadow: 0 10px 30px rgba(133,66,189,0.1)`.
  - Copy: three event blocks (ceremony, reception, party) with **our own**
    date/time/venue strings — do not reuse "April 20, 2016", "The Mayflower
    Hotel" or the source address verbatim (paraphrase/normalise).

### 5. Countdown

- `.count-down-area { position: relative; top: -73px }` — the red strip
  overlaps the floral band above it, so the wedding-info section needs
  `padding-bottom` room and the strip must not introduce a horizontal gap.
- `.count-down-wrapper` background = `section_bg2.png` (1004×160, avg
  `#ff3535`) → flat/patterned `#ff3535` band.
- Four `.single-counter` cells: `col-lg-3`, `col-lg-2`, `col-lg-2`, `col-lg-3`
  (3-2-2-3 run) with `padding: 44px 10px 44px 9px`; numeral Barlow 36 px / 600
  uppercase white; label 18 px / 600 uppercase white.
- Values: `23 days · 15 hours · 46 mins · 20 secs`; our version counts down
  live to a configured date.

### 6. Gallery

- Heading-less: `.gallery-area` starts straight with the tile row
  (`col-lg-4 / col-lg-8 / col-lg-8 / col-lg-4`), white band.
- Tile: `.gallery-img` background image, **565 px** tall, `background-size:
  cover`.
- Hover/focus: `::before` wash (brand red) + `.thumb-content` sliding in
  (`opacity`, `translateX`) with a white **24 px / 600** caption
  ("image 01" … "image 04") and `.thumb-content a` = a **2 px white-bordered
  circle** (`ti-plus` glyph, `color: #ff0000`, white bg + red glyph on hover),
  offset `right: -34px`.
- `.thumb-content::before` paints a 108×61 corner flourish at the caption's
  bottom-right → inline SVG flourish.
- Tiles link to the full image (magnific-popup) → accessible lightbox.

### 7. Gift band

- `[data-background]=section_bg3.png` (1920×499, avg `#ff3535`), full-bleed,
  `padding: 120px 0 130px`.
- `h2` Playfair **70 px** / 700 white capitalize; `p` white; button
  `.btn.btn-whit` = **white pill, radius 30 px, `#362d2b` uppercase**.
- Source label "resarve your Seat" is a typo → **"Reserve your seat"**.

### 8. RSVP form

- `.contact-form.section-padding30` (white band) → `.form-wrapper` white card:
  `padding: 125px 70px 115px`, `box-shadow: 0 0 86px rgba(0,0,0,0.06)`,
  `position: relative`; the source overlays `.shape-inner-flower` artwork (a
  pale floral frame + watercolour leaves at the sides). Reproduce with a subtle
  inline-SVG frame and soft shapes — **no copied artwork**.
- Title: `h2` "Are you attending?" (~30 px on `tittle-form`, Playfair) +
  flourish (`tittle_img2.png`, 149×21).
- Fields: `input[type=text]` Name, `input[type=Email]` Email, `select`
  ("1 Guest" … "4 Guest", styled by **nice-select**: `height: 60px`,
  `border-radius: 5px`, `1px solid #d9d9d9`, text `#a3a3a3`, 7×7 2 px chevron
  at `right: 41px`), message textarea, `.btn` **CONFIRM NOW** red pill.
- Keep the source's field *kinds*; use accessible `<label>`s (the source has
  placeholders only).

### 9. Registry Gift

- White band, `padding-bottom: 150px`; centred `h2` "Registry Gift" + flourish +
  grey paragraph.
- `.brand-active` slick strip of six `.single-brand` cards: ~170×170 images on
  white with a light border (grey monochrome marks: ADVANCE, SA CREATIVE,
  CULPA, SAPHIRE, a "W" crest, +1). **Never copy the logos** — render six
  neutral placeholder marks (abstract SVG monograms or seeded picsum tiles).

### 10. Map band

- `.d-area #map` = 235 px Google Maps, grayscaled
  (`saturation: -90`, `lightness: 50`, center `-31.197, 150.744`, zoom 9,
  `scrollwheel: false`), filled by
  `<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSy…&callback=initMap">`
  plus the page's own inline `initMap()` / `new google.maps.Map(…)`.
  In the live render the embed fails on a keyless load ("Oops! Something went
  wrong.") — proof the source needs an API key.
- The same head loads the source's **own analytics**
  (`<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13">`
  + the inline `dataLayer` bootstrap — the preview host's shared UA id); the
  head also declares `<link rel="manifest" href="site.webmanifest">` and
  `<link rel="shortcut icon" href="assets/img/favicon.ico">`.
- Our version: keyless OpenStreetMap iframe (~235 px) + `filter: grayscale`
  and an accessible name; no API key, no external Google script, and **no
  third-party tag of any kind** — the source's analytics id, its key, its
  manifest and its favicon are all dropped, with an own favicon shipped instead
  (guard: `grep -rE 'gtag|dataLayer|googletagmanager|UA-' apps/matrimony` empty).

### 11. Footer

- `.footer-main` `[data-background]=section_bg4.png` (1920×630, avg near-black
  `#12151a`) → dark damask band; `.footer-area` `padding: 135px 0 74px`.
- Columns (`col-xl-2 / col-xl-3 / col-xl-2 / col-xl-2`): white wordmark ·
  **WEDDING INFO** (Why Hire a Planner? · How Can I Make An Appointment? ·
  How to Choose a Venue · Event Catalogue · Accept) · **ABOUT US** (Bridesmaids ·
  November 22, 2020 · Groomsmen · Groomsmen · November 22, 2020 · JEWELRY) ·
  **LOCATION** (site line + `+(123) 456 - 7890 - 456 35 W 46nd Street NY`).
  (The odd list contents are the source's own filler — ours should read as
  sensible wedding-site filler, not a copy of the same oddities.)
- Headings: Roboto 18 px / 500 uppercase **white**, `margin-bottom: 38px`.
  Links: `#cfcfcf`, 14 px, capitalize, weight 300, hover white.
- `.footer-border`: `border-top: 1px solid #26282c; padding: 33px 0`.
- Copyright: 16 px `#cfcfcf`, weight 300, centred, with a **red heart
  `#cd0102`** and a red link. The source links ColorLib (its licence line) —
  **replace with `https://www.componentdock.com/` ("Component Dock")** plus the
  computed current year (AGENTS.md rule 5).

### 12. Back-to-top

- The live render shows a **red circular** up-arrow button pinned bottom-right
  (brand red, white glyph). Implement with an accessible name, `ArrowUp` from
  lucide, smooth scroll (instant under reduced motion).

## Palette summary (source values)

```
brand red            #ff2828   buttons · active card border · link hover · flourish
brand red (hover)    #da1b1b   .btn::before wipe
band red (damask)    #ff3535   countdown strip · gift band · love-story panel
heart / copy link    #cd0102   footer copyright
heading ink          #212121   section titles
card-title ink       #2e3c40   card/event titles, section subtext
body muted           #636363   card rows, paragraphs
body base            #212529
band near-white      #f9f9f9   wedding-info floral band
divider              #f4f4f4   card-top 2px rule
input border         #d9d9d9   / placeholder #a3a3a3
nav ink              #3c3e48   (hover #ff2828)
footer band          #12151a
footer link          #cfcfcf   (hover #fff)
footer hairline      #26282c
hero scrim           rgba(0,0,0,0.1)
card shadow          0 0 9px rgba(131,93,248,0.07)  /  hover 0 10px 30px rgba(133,66,189,0.1)
form-card shadow     0 0 86px rgba(0,0,0,0.06)
header shadow        0 10px 15px rgba(25,25,25,0.1)
preloader cover      #f7f7f7   .preloader (full-screen, z-index 999999)
preloader arc        #ff2828   1px top border of the 100px white disc (@keyframes zoom)
radii                30px pill buttons · 5px inputs
fonts                "Playfair Display", serif · "Roboto", sans-serif · "Barlow", sans-serif
                     delivered by the source via the sheet's line-1 legacy `@import`
                     (v1 `css?` API, `&display=swap`); the only @font-face rules on
                     the page are the icon fonts — see "Sources of the tokens"
```

All three families resolve on Google Fonts (HTTP 200):
`fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700`,
`family=Roboto:wght@300;400;500;700`, `family=Barlow:wght@400;500;600;700`.

## Placeholder assets (nothing copied)

- Images: `https://picsum.photos/seed/matrimony-<n>/<w>/<h>` — hero
  1920×1080, story photo 900×1100, gallery tiles 1200×1400 (4), registry cards
  340×340 (6).
- Ornaments (title flourish, hero eyebrow mark, laurel between the names,
  gallery corner flourish, card icons, map pin/clock/calendar glyphs, plus
  glyph, back-to-top arrow): **inline SVG** or `lucide-react`.
- No ColorLib image, font file, icon font or CSS file is copied; no `colorlib`
  / `wed` / "Wed" string may appear anywhere in `apps/matrimony` (provenance
  lives in this file, the spec, TEMPLATES.md and the PR).

## Deliverable name mapping

| Source (ColorLib) | Ours |
| --- | --- |
| "Wed" — `colorlib.com/wp/template/wed/` | **Matrimony** — `apps/matrimony`, package `@free-react-templates/matrimony` |
| Couple names "Dennis & Judith" | our own couple names |
| Event strings ("April 20, 2016", "The Mayflower Hotel", "1127 Connecticut Avenue, NY", "5:30 PM") | our own date/time/venue/address strings |
| Footer columns "WEDDING INFO / ABOUT US / LOCATION" + filler rows | same column *kinds*, our own filler |
| "resarve your Seat" (typo) | "Reserve your seat" |
| Google Maps embed (API key) | keyless OpenStreetMap embed |
| Google Analytics (`gtag.js?id=UA-23581568-13`) + inline `dataLayer` bootstrap | nothing — the app ships no third-party tag |
| `site.webmanifest` + `assets/img/favicon.ico` | an own manifest/favicon (source files never referenced) |
| Copyright line linking Colorlib | Component Dock link + current year |

## Implementer pass (2026-10-12) — shipped as `apps/matrimony`

The prep research above was reproduced section-for-section. Two things changed
during implementation and are recorded in the spec's `Implementation notes`:

1. **Final seeds.** The seeds named in "Placeholder assets" were reviewed on a
   contact sheet of 20 frames and re-seeded: hero `matrimony-34` (a dark
   coastline — the prepped pick was a flat urban skyline), story photo
   `matrimony-19`, gallery `matrimony-20 / -27 / -38 / -13`, and every `alt` was
   rewritten to describe the frame that actually loads.
2. **Copy supersession.** `tasks.md` (below) forbids the design's navigation
   labels and band headings; `openspec/specs/template-matrimony/spec.md` requires
   them. The spec is the validated contract, so the six labels, the band headings
   and `Are you attending?` ship verbatim, and the provenance guard bans only the
   design's distinctive strings. `site.webmanifest` / `favicon.ico` are replaced
   by the app's own `matrimony.webmanifest` + `favicon.svg`.
