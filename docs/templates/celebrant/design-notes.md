# Celebrant — design notes (replication research)

Recreation of ColorLib **"Wedding Officiant"** (source slug `wedding-officiant`,
TEMPLATES.md line 3106, category **Wedding**) as the **Celebrant** app
(`apps/celebrant`, package `@free-react-templates/celebrant`).

A mint-and-white one-page wedding-officiant site: a **white sticky header**, a
full-width **cover-photo hero with no text** and a **mint `#cae8d5` band**
peeking out behind it, **Amiri serif** headings (section titles set **italic**)
over **Quicksand** body text, an alternating image/text services list, a
three-slide **photo carousel on a mint panel**, **six icon cards** with mint
icon discs, a seven-item **FAQ accordion**, and a flat **`#333333` footer** with
a mint "Send" pill.

## Sources of the tokens

| Source | URL | Result |
| --- | --- | --- |
| Source (ColorLib) page | `https://colorlib.com/wp/template/wedding-officiant/` | HTTP 200 |
| Preview — canonical slug | `https://preview.colorlib.com/theme/wedding-officiant/` | **HTTP 404** |
| Preview — **actual demo** | `https://preview.colorlib.com/theme/weddingofficiant/` | **HTTP 200**, 28,350 B, `<title>Wedding Officiant &mdash; Website by Colorlib</title>`; **no reproducible raw page hash** (see the stability note below) |
| Stylesheet | `https://preview.colorlib.com/theme/weddingofficiant/css/style.css` | HTTP 200, 24,244 B, sha256 `e8fb899c61fd254d91b06b551ab5f277d71e10f9f664de8ee4b486d41f48072d` |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/weddingofficiant-free-template.jpg` | HTTP 200, **AVIF** despite `.jpg`, 118,200 B, 1200×946 → converted to PNG and inspected |

- The hyphenated preview path **404s**; the real demo is the un-hyphenated one.
  Always confirm the preview before falling back to the screenshot alone.
- **Preview HTML stability (re-verified 2026-10-12):** the page's **raw sha256
  is request-unstable** — the preview host injects a `media="print"`
  `@font-face` `<style>` block (Amiri + Quicksand from `/cf-fonts/…`) and
  reorders its rules per request, so three consecutive fetches give three
  digests at an identical **28,350 B**. ⚠️ **The raw byte count is not a stable
  handle either** (re-measured 2026-10-12): the host also appends an extra
  **361 B** Cloudflare Insights beacon
  (`<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js/…"
  data-cf-beacon='…'>`) before `</body>` for some client signatures, so a fetch
  whose headers differ from a plain `curl -sS <url>` sees **28,711 B** (python
  `urllib` + a Chrome UA) — the byte count *is* stable only for a fixed request
  signature, so cite neither a raw hash nor the raw size. The
  canonical handle — sha256 of the page after removing **both**
  the injected `@font-face` block **and** that beacon script — is **22,155 B**,
  sha256 `cfcdf23e08945ebe324f2f8fdba5147658909ac1c04af42540a635a06e9decc9` —
  byte-identical across `curl -sS`, `curl -A <chrome UA>` and `urllib` with a
  Chrome UA (3 profiles × 3 fetches, 2026-10-12). A client that *additionally*
  sends `Accept`/`Accept-Language` receives a further **416 B** Cloudflare
  first-party Google-tag script (`google_tags_first_party` / `/s9cc/`,
  `gtag('config', 'G-…')`) that this handle does **not** strip, so always state
  the measurement basis (`curl -sS`) beside any such number. The same instability affects the other four
  Google-Font-driven preps in the wedding tail; the stylesheet
  (`css/style.css`, `e8fb899c…`) is stable and remains the token authority.
- The stylesheet loads **after** `css/bootstrap/bootstrap.css`, so its `.btn`,
  `.site-section`, `.border-top` etc. are overrides of Bootstrap 4 defaults.
  Anything not re-declared (e.g. `.btn.btn-secondary`) stays Bootstrap's own
  value — that is where the grey **`#6c757d`** "Get Quote" pill comes from.
- The source's font stack is **inlined `@font-face`** (Amiri 400/700 + italic,
  Quicksand 400/700) — there is no `fonts.googleapis.com` `<link>` in the HTML.
  We load both families from Google Fonts instead of copying font files.
  Quicksand's Google Fonts axis is **300–700**: `Quicksand:wght@900` returns
  HTTP 400 and a single invalid axis 400s the whole `css2` request (Amiri
  included), so the link stays `Quicksand:wght@400;500;700` and the wordmark's
  `font-weight:900` is synthesised — in the live preview too, since the source
  has no Quicksand 900 face either.
- Behaviour references (not reimplemented, only noted): `js/jquery.sticky.js`
  (`js-sticky-header`), `js/owl.carousel.min.js`, `js/aos.js`,
  `js/jquery.countdown.min.js` (loaded but unused on this page),
  `fonts/flaticon/font/flaticon.css` (the six card glyphs).
- Local research artefacts: `/tmp/wedoff/preview.html`, `style.css`,
  `shot.png`.

## Page skeleton (source DOM order → our section order)

Source (single `<body>`; `div#overlayer` + `div.loader` precede `.site-wrap`):

0. `div#overlayer` + `div.loader > img[src=images/loader.gif]` — the first-paint
   cover: a full-screen `#fff` sheet (`position:fixed`, `z-index:7100`) with the
   loader mark centred above it (`position:fixed`, `z-index:7700`, `top:50%`,
   `left:50%`, `translate(-50%,-50%)`); `js/main.js` fades **both** out 200 ms
   after `jQuery(document).ready` (`$(".loader").delay(200).fadeOut("slow");
   $("#overlayer").delay(200).fadeOut("slow")`)
1. `header.site-navbar.py-4.js-sticky-header` — logo + `nav.site-navigation`
   (Home · About · Services · FAQ · Blog · Contact · "Get Quote" pill) +
   `a.site-menu-toggle` for mobile
2. `div.site-section.cover-wrap-v2` (inline `padding-top: 120px`) —
   `div.container > div.bg-1 + div.cover` (background photo, `height: 100vh`)
3. `div.site-section` — `.section-title-v37 > h2 "Our Services"` +
   `div.row` with two `col-lg-6` columns, each holding two
   `div.d-flex.align-items-center.media-v37` rows (image + title link +
   paragraph); rows 2 and 4 use `.img.order-lg-2`
4. `div.site-section` — `.section-title-v37 > h2 "Marriages I Officiate"` +
   `div.container.video-wrap-v37 > div.bg + div.owl-carousel.sliderOne` with
   three `.item` slides (`.bg-image-v37` 500 px photo + centred caption:
   date line, `h3` couple name, paragraph)
5. `div.container > div.row` — six `col-md-6 > div.service-92655.d-flex` cards
   (icon disc + `h3` + paragraph). Note: in the source this row sits **between**
   the carousel section and the FAQ section as a bare `.container`, not inside a
   `.site-section` — we keep the visual position and give it the standard
   section rhythm
6. `div.site-section` — `.section-title-v37 > h2 "Frequently Ask Questions"` +
   `#accordion-v1` with seven `.card.mb-2` collapse items (first one `.show`)
7. `footer.site-footer` — `col-md-8` (About Us + Quick Links) and `col-md-4`
   (Subscribe Newsletter + Follow Us), then `.border-top` + centred copyright

Our recreation renders exactly that order, single-page, with every nav entry
anchored on-page.

## Section-by-section fidelity notes

### 1. Header

- `.site-navbar` is `position: relative; z-index: 1999; margin-bottom: 0` in the
  source; **stickiness comes from jQuery sticky** — `.sticky-wrapper.is-sticky
  .site-navbar { background: #fff }`. Implement as `position: sticky; top: 0`
  with a white background (plus a hairline/shadow only if it reads as too flat,
  since the source adds none).
- Wordmark: `.site-logo` → **Quicksand, `font-size: 1.2rem`, `font-weight: 900`,
  `text-transform: uppercase`, colour `#000`** (via `.site-logo a`); 900 is a
  **synthesised** faux-bold (Quicksand has no 900 — see the fonts note above),
  so ship it as `font-black`/`font-weight:900` with the 400;500;700 link. Source
  text "Wedding Officiant." → ours **"Celebrant"** (keep the trailing period
  styling only if it reads well; the source's period is part of its wordmark).
- Nav links: `.site-menu > li > a` — `padding: 5px 10px`,
  `color: rgba(0, 0, 0, 0.5)`, no underline, hover `#000`. The **active** item
  (`.active > a`) is `#000` and carries a `:before` **2 px bar, `left: 10px`,
  `background: #cae8d5`** — this is the mint underline seen under "Home".
- CTA: `<a class="nav-link btn btn-secondary btn-sm text-white py-2 px-4">Get
  Quote</a>` — Bootstrap `.btn-secondary` = **`#6c757d`**, `.btn` radius
  **30 px**, `padding: 10px 30px` overridden by `py-2 px-4`. Recreate as a
  30 px-radius pill with a white label.
- Mobile: `.site-menu-toggle.js-menu-toggle` shows a hamburger below `xl`
  (`d-none d-xl-block` on the nav). Source opens an offcanvas menu
  (`.site-wrap:before` scrim `rgba(0,0,0,0.6)`); ours is a simple accessible
  disclosure.

### 2. Cover hero

- Wrapper: `div.site-section.cover-wrap-v2` with **inline `padding-top: 120px`**
  (clears the header) and `overflow: hidden` from CSS.
- `.cover`: `background-size: cover`, `background-position: center center`,
  **`height: 100vh`, `min-height: 450px`** — the photo fills the viewport below
  the header. **No caption, no CTA, no scrim.** Source image `images/hero_1.jpg`;
  ours is a seeded picsum placeholder.
- `.bg-1` / `.bg-1:before`: the decorative mint band. Positioned inside
  `.container` (`position: relative`), the pseudo-element is
  `top: 30%; right: -150%; width: 200%; height: 100%; background: #cae8d5;
  z-index: -1` — a huge mint rectangle that starts at 30 % of the hero height
  and extends far past the right edge of the photo, clipped by the wrapper's
  `overflow: hidden`. This is the design's signature accent (visible to the
  right of the photo in the TEMPLATES.md screenshot).
- Watch out: `100vh` + a sticky header can cause a scrollbar/overflow fight on
  small screens — use `min-height: 450px`, `width: 100%` and no negative
  offsets that could introduce horizontal scroll.

### 3. Our Services

- Title: `.section-title-v37` (`margin-bottom: 30px`) → `h2 { font-size: 2rem;
  font-style: italic }` in **Amiri** (the `h1,h2,h3,h5` rule). The italic serif
  title is the template's second signature — keep it.
- Layout: a Bootstrap `row` with two `col-lg-6` columns; each column stacks two
  `.media-v37.d-flex.align-items-center` rows (`mb-4`). Row anatomy:
  `div.img` (**`flex: 0 0 250px`**) + `div.text`
  (`padding-left/right: 30px`) with `h3 > a` (Amiri, **20 px, 700, `#000`**) and
  a paragraph.
- Alternation: rows 2 and 4 add **`order-lg-2`** to `.img`, so in the source the
  reading order down the left column is image-left → image-right; the right
  column repeats the pattern. Keep the alternation (`lg:` order utilities) and
  reset it to image-first on small screens.
- Hover: `.media-v37.active { background: #cae8d5 }` with
  `transition: .3s background ease`; `.media-v37:hover { background: none }`
  (only the `.active` variant paints). In our recreation the mint wash is the
  hover/focus treatment on each row.
- Copy kind: each row is one service (consultation, ceremony editing, the
  marriage licence, the planning meeting) with a one-sentence blurb — paraphrase,
  never copy.

### 4. Marriages I Officiate

- Title: same italic Amiri treatment.
- Mint panel: `.video-wrap-v37` is `position: relative`; `.bg:before` is
  `position: absolute; left: 15px; right: 15px; bottom: -5%; height: 100vh;
  background: #cae8d5` — a mint block that starts at the top of the slider and
  bleeds far below it. In the live render it reads as a mint slab behind the
  carousel, with the photo inset inside it and the caption sitting on the mint.
  Reproduce as a mint panel (rounded corners: none — it is a hard-edged
  rectangle) with the photo and caption stacked inside.
- Slide: `.bg-image-v37` — **`height: 500px; width: 100%; background-size:
  cover; background-position: center center`** (`hero_2/3/4.jpg`). Caption below
  (`mt-5`, centred, `col-lg-8`): `p.mb-0.text-black` "Wedding Date: July 20th,
  2019" (Quicksand, small), `h3` couple name (Amiri), paragraph.
- Controls: `.sliderOne .owl-nav` sits at `top: 50%`; the prev/next buttons are
  **40 × 40 px white circles** (`border-radius: 50%`) pinned `left: 27px` /
  `right: 27px`, with a glyph centred by translate. Dots (`.owl-dots`) are
  **8 px circles**, `margin: 5px`, inactive `rgba(0, 0, 0, 0.3)`, active
  `black`.
- Source content: all three slides repeat the **same** caption ("Joshua &
  Selene", the same date, the same lorem paragraph) with three different photos.
  We ship three distinct entries instead — same *kind* of content, real data.
- Owl carousels autoplay by default in this theme's `main.js`; ours advances no
  faster than every 5 s and stops under `prefers-reduced-motion`.

### 5. Six feature cards

- Container: a bare `.container > .row` of six `col-md-6` cells → **2 × 3 grid**.
- `.service-92655`: `position: relative; padding: 30px; background: #fff`. The
  card has **no border and no shadow** — separation comes from whitespace only.
- Icon disc: `.icon-wrap:before` — `width: 70px; height: 70px;
  border-radius: 50%; background: #cae8d5; left: -10px` behind the glyph
  (`z-index: 1`), with the glyph itself `z-index: 2`, **`color: #000`** and the
  Bootstrap `.display-3` size (`4.5rem` in Bootstrap 4 — visually the icon
  overflows the disc in the live render, which is the intended look).
- Titles: `h3 { font-size: 1.5rem; color: #000; font-weight: 700 }` (Amiri).
  Copy: `p { color: rgba(0, 0, 0, 0.8) }`.
- Source glyph set (flaticon) and the lucide equivalents we use (nothing is
  copied — the flaticon font is not redistributable):
  `flaticon-ring` → `Gem`/`CircleDot`, `flaticon-wedding-arch` → `Church`,
  `flaticon-loving-home` → `Home`, `flaticon-invitation` → `Mail`,
  `flaticon-alcohol` → `Wine`, `flaticon-wedding-planner` → `CalendarCheck`.
- Source typos to fix: **"Inivitation" → "Invitation"**, **"Red Wine Tast" →
  "Red Wine Tasting"**. The Honeymoon card also has an empty `<span>` between
  the `h3` and the paragraph — drop it.

### 6. FAQ accordion

- Title: italic Amiri "Frequently Ask Questions" (the source's own wording, with
  its missing "ed"), `mb-5`. Reproduce the *kind* of heading — if the implementer
  prefers grammatical copy, use "Frequently Asked Questions" and record it here.
- Cards: `#accordion-v1 .card { border-color: #dee3e2 }`, `mb-2` spacing.
- Question: `h5 > a.btn.btn-link` — `display: block; text-align: left;
  text-decoration: none; color: #000; position: relative; font-size: 20px;
  border-radius: 0; padding-left/right: 15px; border: none`. Collapsed state
  (`.collapsed`) turns the text **gray** and drops the box-shadow.
- Chevron: `.icon` absolutely positioned `right: 20px`, vertically centred,
  **`rotate(-180deg)` while open** and unrotated when collapsed, `transition:
  0.3s all ease`.
- Behaviour: Bootstrap collapse with group semantics (`data-parent="#accordion-v1"`)
  — only one panel open at a time; **the first panel is `.collapse.show` on
  load**. Our recreation keeps single-open behaviour with real `<button>`s,
  `aria-expanded` / `aria-controls`.
- Body: `.card-body { padding-top: 0 }`.
- Source duplicates: question 2 and 7 are the same string, and questions 4 and 6
  are both "Inivitation Letters How?" → we ship **seven distinct questions**.

### 7. Footer

- `footer.site-footer { background: #333333 }` — **flat, no pattern**. Text:
  `p { color: #737373 }`, `h2/h3/h5 { color: #fff }`, `a { color: #999999 }`
  with `a:hover { color: white }`, `.footer-heading` is `#fff` (Amiri).
- Left `col-md-8`: inner `col-md-6` "About Us" (heading + one short paragraph)
  and `col-md-4.ml-auto` "Quick Links" — `.list-unstyled` with About Us ·
  Services · Testimonials · Contact Us.
- Right `col-md-4`: "Subscribe Newsletter" — Bootstrap `input-group` with
  `input.form-control.border-secondary.text-white.bg-transparent`
  (`placeholder="Enter Email"`, `aria-label="Enter Email"`) and a
  `button.btn.btn-primary.text-black` **"Send"** — `.btn-primary` is mint
  **`#cae8d5`** with `color: #fff` overridden by `.text-black`, radius 30 px.
  Then "Follow Us" with four `<span class="icon-…">` glyphs
  (facebook · twitter · instagram · linkedin) at `pl-0 pr-3` / `pl-3 pr-3`.
- Copyright bar: `.row.pt-5.mt-5.text-center` → `.border-top.pt-5` with
  `.border-top { border-top: 1px solid #edf0f5 }` and a centred line: "Copyright
  © All rights reserved | This template is made with ♥ by …". The source links
  ColorLib — **ours links https://www.componentdock.com/ ("Component Dock")**
  per AGENTS.md rule 5, with the computed current year.

## Palette summary (source values)

| Role | Value |
| --- | --- |
| Brand mint (bands, discs, button fill, active-nav underline, active dot) | `#cae8d5` |
| Mint link accent | `#95d1ab` |
| Dark slate (`.btn-primary:hover`) | `#343a40` |
| CTA pill (Bootstrap secondary) | `#6c757d` |
| Ink / active nav / logo | `#000` |
| Muted nav links | `rgba(0,0,0,0.5)` |
| Body text | `gray` (`#808080`) |
| Card copy | `rgba(0,0,0,0.8)` |
| FAQ card border | `#dee3e2` |
| Divider (`.border-top`) | `#edf0f5` |
| Footer band | `#333333` |
| Footer paragraph / links | `#737373` / `#999999` |
| Carousel inactive dot | `rgba(0,0,0,0.3)` |
| Hover surfaces | `#f4f5f9`, `#f8f9fa`, `#e6e6e6` (owl dots in the theme) |
| Radii | 30 px pills · 50 % circles · 0 accordion headers |
| Fonts | Amiri (headings, italic section titles) · Quicksand (body/nav/logo/footer; **axis 400–700 only** — the logo's 900 is synthesised) |

## Placeholder assets (nothing copied)

- Images: `https://picsum.photos/seed/celebrant-<n>/<w>/<h>` — hero 1920×1080,
  the four service rows 600×600, the three carousel slides 1400×900.
- Icons: `lucide-react` for the nav toggle, the phone glyph, the six card
  glyphs, the carousel arrows + chevron and the footer heart; the four social
  brand marks are **inline SVG** (lucide-react exports no brand icons).
- Fonts: Google Fonts `<link>` (Amiri + Quicksand).
- Decorative mint bands and discs are CSS/`@theme` colours, not images.

## Deliverable name mapping

| Source | Ours |
| --- | --- |
| ColorLib "Wedding Officiant" (slug `wedding-officiant`) | **Celebrant** |
| App folder `apps/wedding-officiant` (n/a) | `apps/celebrant` |
| Package | `@free-react-templates/celebrant` |
| Wordmark "Wedding Officiant." | "Celebrant" |
| Homepage | `https://celebrant.free.componentdock.com` |

Never reuse in `apps/`: the source slug `wedding-officiant`, the wordmark
"Wedding Officiant", the sample couple names "Joshua & Selene", the date string
"July 20th, 2019", the section title "Marriages I Officiate", the source's
lorem copy, or the string `Colorlib` (the footer links **Component Dock**
instead). Nav labels may be reused only as generic, unprotectable words
(Home / About / Services / FAQ / Blog / Contact).

## Implementation addendum (what shipped)

Built as `apps/celebrant` on `feat/template-celebrant`. The deltas from this research, and the
frames the placeholder photography actually uses, are recorded in the spec's own
**Implementation notes** section (`openspec/specs/template-celebrant/spec.md`). In short:

- The heading above the couples band ships as **"Couples I Have Joined"** and the question band as
  **"Frequently Asked Questions"**: this document's own list of strings the app must not carry
  includes the design's verbatim heading, and the document title ships as
  **"Celebrant — Wedding Ceremony Template"** for the same reason.
- The services rows take the mint wash on hover/focus (the design only paints its `.active` rows),
  and the services columns carry the design's own 30px gutter.
- Photography, reviewed on a contact sheet before shipping (the blind picks included a misty railway
  track for the cover, a rock band and a flat sunset):
  `celebrant-30` (cover) · `celebrant-7`, `-62`, `-43`, `-38` (service rows) ·
  `celebrant-3`, `-35`, `-33` (the three couples), with each caption rewritten to describe the frame
  that loads.
