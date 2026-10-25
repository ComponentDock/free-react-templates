# Template: Tideline (Hospitality & Travel / Coastal Resort)

## Purpose

Tideline is a single-page coastal-resort landing page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Villa"** design, built under a DIFFERENT name (**Tideline** — one
lowercase word for the line the tide leaves on the sand, the coastal register
this page is written in; single word, kebab-case-safe, no collision with
`apps/`, `openspec/specs/template-*`, `docs/templates/`, any bold name in
`TEMPLATES.md`, or any substring in the repository: `git grep -il tideline
origin/main` = **0 hits**; and the name is not a ColorLib slug —
`colorlib.com/wp/template/tideline/`, `preview.colorlib.com/theme/tideline/` and
`preview.colorlib.com/theme/bootstrap/tideline/` all return **404**) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).

- **Source slug**: `villa`
- **ColorLib page**: https://colorlib.com/wp/template/villa/
- **Live preview**: https://preview.colorlib.com/theme/villa/
  (HTTP 200, **22,040 B** HTML, sha256
  `343535413cf59fd75e81509797fe6dd09e2b3c7212f3e73cef006e6c12b44457`;
  `<title>` = **"A slower stay by the water | Villa"**). The theme is the
  **"Villa 3.0.0"** build: its own sheet is `css/style.min.css` (**13,718 B**,
  sha256 `03483841fdfba711ed059877f05e256523110a6ff66e256aa73473d0e7f66c58`),
  overridden by a later theme layer `css/modern.min.css` (**9,628 B**, sha256
  `4f06d292a203df96e8c28f9d7cbdf2117ee5f6338cb4835f6e3f208e4d7bece8`),
  self-hosted faces in `css/fonts.min.css` (**2,941 B**, sha256
  `18c4eed6c895395b7d9b0d0991c06025cd02f9cd8fb91337d1d536a7db49bd1d`) and page
  script `js/main.min.js` (**3,903 B**, sha256
  `2a528d3bee033c2b7bc808238026912cbea60276be26560aab310d2aaa864e8d`).
  Vendor set: **Bootstrap 5.3.8** grid/utilities + **Swiper 14.3.0** + a
  ColorLib "kit" layer (`kit/sliders`, `kit/reveal`, `kit/icons`, `kit/form`).
  `theme/bootstrap/villa/` is **404** and `theme/bb/villa/` is **404**, so the
  slug-only path IS the live design; `/downloads/free/villa.zip` is **404**
  (9-byte `text/plain` body), so **there is no archive** and the live render is
  the only DOM/CSS reference.
- **Screenshot**:
  https://colorlib.com/wp/wp-content/uploads/sites/2/villa-free-template.jpg
  (served **AVIF**, 1200×946 decoded, converted with PIL and inspected: a
  **browser-chrome** shot of the **top fold only** — the white-on-photo "Villa"
  serif wordmark top-left, the hamburger top-right, the sailboat-deck hero under
  a dark wash with "Welcome to *Villa* resort", a pink pill CTA and an outlined
  pill CTA, then the first ~180px of the white band whose eyebrow reads
  "YOU CAN VISIT" over four staggered photo cards). **The card image is an
  OLDER revision of the same design**: its copy is the v2 edit ("YOU CAN VISIT",
  sub-line "Discover our world-class hotel & restaurant resort.", second CTA
  "DOWNLOAD"), while the live v3 page reads "You can explore", "A little room to
  breathe. A little time by the water." and "Find your room" — and the live CTA
  paints a deeper crimson than the card's brighter pink. **The live sheet is
  canonical** (docs/replication.md: CSS values beat screenshots); the copy
  inventory below is taken from the live DOM.
- **Package**: `@free-react-templates/tideline`
- **Deploy target**: `tideline.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/villa/' TEMPLATES.md` = **2** (line **1939** under
`## Hotel (38)` and line **3014** under `## Travel (44)`, both `- [x]
**Villa**`) and
both credit the **`villa`** app. But the `villa` app recreates a DIFFERENT
ColorLib design: its spec names **"Layal"** (`https://colorlib.com/wp/template/layal/`).
So both Villa rows are a false `[x]` (bucket 2, **APP-WRONG-DESIGN**, in
`docs/row-multiplicity.md` §2; measured exclusive-copy evidence
`row-excl / spec-excl` = **1 / 21**). No spec on main claims
`wp/template/villa/` — verified with
`grep -rl 'wp/template/villa/' openspec/specs --include=spec.md` = 0 files.

**The prep stream never moves markers.** The implementer re-opens rows 1939 and
3014 on its `feat/` branch, builds `apps/tideline`, and flips them to `[x]` with
the `tideline.free.componentdock.com` link after merge.

### Why the name is not the source name

| check | result |
|---|---|
| `git grep -il tideline origin/main` | 0 hits (no file path, no spec, no doc, no app) |
| `ls apps/ \| grep tideline` | no match |
| `grep -ic '\*\*[^*]*tideline' TEMPLATES.md` | 0 (not a ColorLib row name) |
| `colorlib.com/wp/template/tideline/` | **404** |
| `preview.colorlib.com/theme/tideline/` | **404** |
| `preview.colorlib.com/theme/bootstrap/tideline/` | **404** |

## Design reference (replication findings)

### What the reference is

A coastal-resort concept page in a **serif-display / light-sans** register: a
translucent white wordmark over a full-height sailing photograph, an editorial
four-card "explore" row, a single-slide photographic gallery, three journal
cards on a **patterned grey band that slides up behind the gallery**, a
three-column principles band, and a near-black four-column footer with an
underline-only newsletter field. There are **no prices, no counters, no team
grid, no testimonial block and no CTA strip** on the home page. The theme behind
it is **fourteen pages** (all live — see the inner-page inventory); the
single-page build maps their nav entry points onto bands and does not invent
their interiors.

### DOM skeleton (live preview `index.html`, document order)

```
a.skip-link[href="#main"]                     fixed, off-screen until focused
header.site-header                            absolute, top 0, padding 60px 0
  .container-fluid (max 1600)
    .site-logo > a[href=index.html] > em      "Villa", 30px serif 700, white
    button.site-menu-toggle                   three 40×2px bars, 48×48 hit area
    .site-navbar (fixed, display:none)         full-screen white overlay
      nav > .container > .row.full-height
        ul.menu                               7 items, 40px serif, #000
        .extra-info
          h2.menu-label "Before you arrive"   + p + a "Read the stay guide"
          h2.menu-label "Explore Villa"       + ul (Classic Room, Courtyard
                                                Studio, Seaside Room,
                                                Start an enquiry)
main#main
  section.site-hero.overlay[data-hero-key=sail]   900px = 100vh (min 700)
    picture.hero-picture > img (sail, 8163×6122)
    .site-hero-inner > .col-md-10.text-center
      h1.heading "Welcome to <em>Villa</em> resort"
      p.sub-heading
      p.hero-actions > a.btn.btn-primary + a.btn.btn-outline-light
  section.section.visit-section#explore           4 × col-lg-3 card
    h2.heading "You can explore"
    .visit > a > picture + h3 + p.visit-detail
  section.section.slider-section                  heading + lead + gallery
    h2.heading + p.lead
    .home-slider.major-caousel[data-owl]          6 .slider-item slides
      .owl-nav (.owl-prev/.owl-next)  .owl-dots (6 × .owl-dot)
  section.section.blog-post-entry.bg-pattern      -500px margin-top, 500px pad
    h2.heading + p.lead
    3 × [data-journal-card] > article.media.media-custom
        picture + .media-body > p.meta-post + h3 + p
  section.section.testimonial-section             (principles, not quotes)
    h2.heading + p.lead
    3 × .col-md-4.text-center > .principle-icon(svg) + h3 + p
footer.section.footer-section                     #1a1a1a
  .row.mb-4
    col: h2.footer-title "Stay a little longer"   + ul.link (3)
    col: h2.footer-title "Useful details"         + ul.link (4)
    col: h2.footer-title "A coastal state of mind"+ p + p.concept-note
    col: h2.footer-title "Notes from Villa"       + form.footer-newsletter
  .row.bordertop > p  "© 2026 Villa. Template by Colorlib."
```

### Band table — measured live (chromium, `getBoundingClientRect`)

1440×900 (document **4,883px**, `scrollWidth == clientWidth == 1440`):

| # | band | top | height | paint |
|---|---|---|---|---|
| 1 | `header.site-header` | 0 | **0** (absolute overlay) | transparent over the hero; logo at (15, 58) **58×33**, toggle **48×48** at (1377, 60) |
| 2 | `section.site-hero` | 0 | **900** (`100vh`, `min-height:700px`) | full-bleed sailing photo, `:before` **rgba(0,0,0,.51)** |
| 3 | `section.visit-section#explore` | 900 | **546** | white, `padding:112px 0` (7em) |
| 4 | `section.slider-section` | 1,446 | **1,217** | white, `padding:112px 0`; frame **1,110×741** at (165, 1,762) |
| 5 | `section.blog-post-entry.bg-pattern` | **2,163** | **1,429** | `#e9ecef` + `img/round.png` tile; `margin-top:-500px`, `padding:500px 0 112px` — it starts **341px above the gallery frame's bottom**, so the photo sits on the pattern |
| 6 | `section.testimonial-section` | 3,592 | **759** | white, `padding:112px 0` |
| 7 | `footer.footer-section` | 4,351 | **531** | `#1a1a1a`, `padding:112px 0` |

Container is **1,140px** at x = 150 (`.container`), the header's
`.container-fluid` runs to **1,600px**.

390×844 (document **6,963px**, `scrollWidth == clientWidth == 390` — **no
horizontal overflow**):

| # | band | top | height |
|---|---|---|---|
| 1 | hero | 0 | **844** (`100vh`) |
| 2 | explore (1 column × 4) | 844 | 1,584 (`padding:80px 0`) |
| 3 | gallery | 2,428 | 733 (frame 360 wide at y 2,741, arrows below it) |
| 4 | journal (`padding:300px 0 80px`, `margin-top:-300px`) | 2,861 | 2,059 |
| 5 | principles (3 stacked) | 4,920 | 1,077 |
| 6 | footer (4 stacked) | 5,997 | 966 (`padding:70px 0`) |

768×1024: the `.section` rhythm drops to **48px** (`3em`), the explore grid is
**2 × 2** (330px images), the gallery frame is **690×568** with its arrows moved
below it (the `≤1270px` rule), the journal cards are **330px** and the footer
columns are 180px in a 2-up grid; `blog-post-entry` keeps `margin-top:-300px`.

### Measured type scale (computed styles, 1440)

| element | size / line-height / weight | family | colour |
|---|---|---|---|
| `body` | 16 / 28.8 (1.8) / **200** | Mukta Mahee, arial, sans-serif | `#50565c` |
| hero `h1` | **80 / 80 / 700** (40px ≤991px) | Times New Roman, Times, serif | `#fff` |
| `.sub-heading` | **30 / 45 / 200** (18px ≤991px) | body face | `#fff` |
| section `h2` (`.heading-serif` group) | **80 / 96 / 500** (40px ≤991px) | serif | `#000` |
| `.visit-section .heading` | **15 / 18 / 500**, uppercase, **letter-spacing 3px** | body face | `#646a70` |
| `.lead` | **20 / 36 / 300** | body face | `#50565c` |
| `.visit h3` | **20 / 24 / 500** | serif | `#000` |
| `.visit-detail` | 14 / 25.2 / 200 | body face | `#646a70` |
| `.meta-post` | 14 / 25.2 / 200, uppercase, **1.4px** | body face | `#686868` |
| `.media-custom h3` | **25 / 30 / 500** | serif | `#000` |
| `.testimonial-section h3` | **26 / 31.2 / 500** | serif | `#000` |
| `.testimonial-section p` | **18 / 32.4 / 300** | body face | `#50565c` |
| `.footer-title` | **17 / 20.4 / 500**, 0.51px | body face | `#fff` |
| footer links | 16 / 28.8 / 200 | body face | `#bababa` |
| footer `.concept-note` | 14 / 22.4 / 200 | body face | `#bababa` |
| `.site-logo a` | **30 / 30 / 700** | serif | `#fff` (`.menu-open` → `#222`) |
| nav overlay links | **40 / 55 / 400** (30px ≤767px) | serif | `#000` |
| `.menu-label` | **17**, `letter-spacing:.03em` | body face | `#555` |

### Reference rules (verbatim, quoted from the live sheets)

These are the declarations the table above is measured from, in the source's own
shorthand — useful as a checksum for the implementer:

```css
body { font-family: Mukta Mahee, arial, sans-serif; font-weight: 200; font-size: 16px; line-height: 1.8 }
h1, h2, h3, h4, h5 { color: #000; font-family: Times New Roman, Times, serif }
.site-hero-inner .heading { font-size: 80px; line-height: 1; font-weight: 700; color: #fff }
.site-hero-inner .sub-heading { font-size: 30px; font-weight: 200; line-height: 1.5 }
.heading-serif, .testimonial-section .heading, .slider-section .heading, .blog-post-entry .heading { font-size: 80px }
.visit-section .heading { font-size: 15px; text-transform: uppercase; letter-spacing: .2em }
.visit-section .visit h3 { font-size: 20px }
.media-custom h3 { font-size: 25px }
.testimonial-section h3 { font-size: 26px }
.site-navbar nav .menu li a { font-size: 40px }
.site-navbar .menu-label, .footer-title { font-size: 17px; letter-spacing: .03em }
.site-logo a { font-size: 30px; font-weight: 700; font-family: Times New Roman, Times, serif }
.section { padding: 7em 0 }
.btn { padding: 10px 30px; border-radius: 50px }
.btn.uppercase { text-transform: uppercase; font-size: 14px; letter-spacing: .2em }
.owl-carousel .slider-item img { aspect-ratio: 1123/750; object-fit: cover }
.visit img, .media-custom img { aspect-ratio: 500/333; object-fit: cover }
.bg-pattern { background: #e9ecef url(../img/round.png) }
.footer-section { background: #1a1a1a; color: #fff }
```

### Font delivery (measured, not assumed)

- The theme **self-hosts** Mukta Mahee: `css/fonts.min.css` declares
  `@font-face` for **200 / 300 / 400 only** (latin, latin-ext, gurmukhi each) —
  `grep -c '@font-face' css/fonts.min.css` = 9. `[...document.fonts]` confirms
  **`Mukta Mahee: 200 / 300 / 400` loaded, nothing else**.
- Every heading face is **`Times New Roman, Times, serif`** — a *system* face,
  no webfont is served for it, and no Google Fonts `<link>` exists anywhere in
  the head. Linux resolves it as **Liberation Serif** (metric-compatible), which
  is what the live screenshots above were rendered with.
- Two consequences for the recreation: (a) the sheet asks **500** on `h2`/`h3`
  and on `.menu-label`/`.footer-title`, a weight neither face family has —
  Times has 400/700 and the delivered Mukta Mahee set stops at 400, so both
  renders are **synthesised**; Tideline SHALL load Mukta Mahee **200/300/400/500**
  so the sans weights are real, and SHALL keep **500** on the serif headings to
  match the measured render. (b) `--font-body: "Mukta Mahee", arial, sans-serif`
  and `--font-heading: "Times New Roman", Times, serif` are the honest tokens —
  no substitute display face is invented for this design.
- Verified loadable URL (HTTP **200**):
  `https://fonts.googleapis.com/css2?family=Mukta+Mahee:wght@200;300;400;500&display=swap`.

### Section geometry at 1440 (measured)

- **Hero**: inner column **950×243** centred at y 329 — `h1` (920×80) at 329,
  sub-heading at 421, `.hero-actions` at 510 with a **12px** gap: filled pill
  **240×46** at x 489 and outlined pill **209×46** at x 742. Hero photo is a
  `<picture>` (AVIF + JPEG at 800/1600/2400/4000/8163px) with
  `object-position: 60% center` and an **empty `alt`** (decorative).
- **Explore**: eyebrow `h2` at y 1,012 (1,110×18, 30px bottom margin), then four
  **285px** columns at y 1,060 with **255×170** photos (aspect **500/333**), a
  15px inset, **20px** serif titles and a 14px grey detail line. Card box is
  285×250. Titles: Food & shared tables · Pool & terrace · Rooms to settle into ·
  Life by the water.
- **Gallery**: `h2` **730×96** at y 1,558 and lead (730×36) at 1,662; the
  single-slide frame is **1,110×741** at (165, 1,762) — slide aspect
  **1123/750**, `object-fit:cover` — with **48×48** circular arrows at
  **x 105 / x 1,287** (60px outside the frame, vertically centred, y 2,099),
  white fill, `1px #c7cbd0` border, 44px glyph; **6 dots** of **10×10** at
  y 2,437 (active `#c0144a` with a white ring, idle `#fff` with a `#666` ring).
  Only the active slide is painted (`visibility:hidden` on the others).
- **Journal**: cards **350px** at x 165 / 545 / 925, y 2,963, image **350×233**,
  body `padding:24px`; card heights are **ragged** (464 / 434 / 493) because the
  copy lengths differ — no equal-height row.
- **Principles**: three **380px** columns at y 4,000; each opens with a
  **70×70** circle (`#fff2f6`) holding a **30px** stroke glyph (`#ad1546`),
  then a 26px serif title and 18px/300 copy.
- **Footer**: four **285px** columns at y 4,463; the newsletter row is
  **255×51** with a `1px #888` bottom rule, a transparent input, and a
  **48×50** arrow button; the bordered copyright row (1,140×70) sits at y 4,701.

### Anchor census (live DOM, every `href` attributed — 38 anchors)

- **37 in-theme/page anchors, 0 dead `href="#"`, 0 empty `href=""`**:
  `hotel.html` ×5, `restaurant.html` ×4, `yacht.html` ×4, `stay-guide.html` ×4,
  `index.html` ×2, `about.html` ×2, `contact.html` ×2, `yacht.html#planner` ×2,
  `journal-slow-weekend.html` ×2, `journal-packing.html` ×2, `blog.html` ×1,
  `room-classic.html` ×1, `room-studio.html` ×1, `room-suite.html` ×1,
  `contact.html#enquiry` ×1, plus **3 in-page** anchors: the skip link
  `#main`, the hero CTA `#explore`, and `Doc/index.html` ×1.
- **1 external**: the copyright "Colorlib" link (`https://colorlib.com`).
- The `.site-menu-toggle` is a `<button>`, not an anchor; `index.html` is
  byte-identical to the directory URL, so it is a no-op link, never a 404.
- **Skip-link pattern**: `<a class="skip-link" href="#main">Skip to content</a>`
  targets `<main id="main">`, which carries **no `tabindex`** in the source — the
  link moves the eye but not the focus (see the defect table).

### Inner-page inventory (not built — recorded so nothing is invented)

The theme is **multi-page**; every sibling is LIVE on the same host with the same
chrome, and each opens with a `page-inside` hero (70vh, `min-height:500px`,
gradient wash `#00000080 → #0000009e 30% 72% → #00000080`) around its `h1`:

| page | status | bytes | `h1` and the bands after it |
|---|---|---|---|
| `hotel.html` | 200 | 18,185 | "Rooms to settle into" → `bg-light` intro pair, a spaces gallery, `#rooms` room cards, footer |
| `restaurant.html` | 200 | 10,139 | "At the Villa table" → "A menu for the moment." (`.menu-dishes` price rows), `bg-light` split, "A table worth taking your time over." |
| `yacht.html` | 200 | 11,782 | "Let the coast set the pace." → "A little outside time.", `#planner` day-planner form, "Leave some space in the plan." |
| `about.html` | 200 | 14,968 | "A coastal state of mind" → gallery band, principles band, "Make the stay your own." |
| `blog.html` | 200 | 11,813 | "Notes from Villa" → `#journal-search` filter + the journal grid |
| `contact.html` | 200 | 10,048 | "Start a conversation." → `contact-section` enquiry form (`#enquiry`) + aside |
| `stay-guide.html` | 200 | 9,627 | "The useful details." → FAQ `<details>` list, checklist with copy button |
| `room-classic.html` | 200 | 12,928 | "Classic Room" → `.detail-panel` + `.room-facts` dl + inquiry CTA |
| `room-studio.html` | 200 | 13,008 | "Courtyard Studio" → same room anatomy |
| `room-suite.html` | 200 | 12,959 | "Seaside Room" → same room anatomy |
| `journal-slow-weekend.html` | 200 | 13,763 | "A weekend without a full schedule" → `.prose` article |
| `journal-packing.html` | 200 | 13,807 | "Pack for a slower coastal stay" → `.prose` article |
| `Doc/index.html` | 200 | 11,702 | "Villa 3.0.0 documentation" — the kit's own docs page (dropped in the recreation) |

So the single-page Tideline keeps **exactly the home page's five bands** and
converts the nav's seven page links into in-page anchors (delta 1 below). It does
**not** build the room detail pages, the menu, the day planner, the RSVP/enquiry
form, the article pages or the documentation page.

### Interaction the React build must reproduce (from `js/main.min.js` + the sheets)

1. **Full-screen navigation overlay.** The toggle adds `menu-open` to `<body>`
   (with `overflow:hidden`), `open` to the button, flips `aria-expanded`,
   swaps `aria-label` ("Open navigation" ⇄ "Close navigation"), sets
   `role`-less `display:block` on the panel and **focuses the first link**.
   `Escape` closes; `Tab` is **trapped** inside
   `[toggle, …panel a/button/input]`; on close focus returns to the toggle. The
   panel is `position:fixed; inset:0`, white, `min-height:300px`, scrollable,
   `nav` text left-aligned, `.full-height` `100vh`/`min-height:100vh` with
   `padding:80px 0`. The active item paints a **`#f9c3d4` block behind the lower
   half** of its label (`:before`, `height:50%`, `width:0 → 100%` on
   hover/active). `.extra-info` is **hidden ≤767px**.
2. **Gallery is a one-up carousel**, `data-owl` = `{items:1, loop:false,
   rewind:true, autoplay:false, nav:true, navText:["‹","›"], margin:0}`; the kit
   boots **Swiper** (`.swiper-initialized` is present, 6 `.slider-item`s,
   `1` visible). Non-active slides get `visibility:hidden`. Arrows are always
   visible on this band (`.major-caousel .owl-nav{opacity:1}`), dots are
   clickable, **no autoplay**, and `rewind` means the arrows never disable but
   never wrap into a loop of the same slide.
3. **Footer newsletter** posts to `mail.php` (`type=email`, `required`,
   `autocomplete=email`, hidden `form=newsletter` decoy, `[data-form-status]`
   status region, note "Demo form: updates are not sent from this preview.").
   The recreation SHALL validate locally and **never** issue a request.
4. **`[data-year]`** writes the current year into the copyright line.
5. **Focus visibility**: `:focus-visible { outline:3px solid #a7103d;
   outline-offset:4px }`, and on the dark hero/footer
   `outline-color:#fff` with a `0 0 0 7px #a7103d` halo.
6. **No scroll reveal on this page** — `data-aos`/`data-reveal`/`.wow` count is
   **0**, so the `kit/reveal` layer never engages; do not invent entrance
   animations.
7. `img[loading=lazy]{content-visibility:auto}` is the reason a **full-page**
   screenshot blanks the gallery and journal photos (the bands are still
   painted in a viewport screenshot). It is a capture artefact, not a design
   decision — do not copy it.

### Source defects and documented deltas (do not copy these)

| source behaviour | delta Tideline ships |
|---|---|
| Skip link targets `<main id="main">`, which has **no `tabindex`** — the focus never lands | `<main id="main" tabindex="-1">` (or `focus()` on the target) so the skip link actually moves focus |
| Footer submit is styled `#c0144a` by `modern.min.css` but **loses** to `.footer-newsletter button[type=submit]{background:none}` (higher specificity) — the rendered button is transparent | keep the **measured** transparent 48×50 button with a white arrow inside the underlined row (state the conflict in the app's token note, not the colour intent) |
| `.site-navbar .menu li a:before` highlight sits behind half the glyph at `z-index:-1`, so it can dip under the page background | keep the half-height highlight, but raise it above the section background (`z-index:0` + `isolation`) |
| Mukta Mahee ships **200/300/400** while `h2.menu-label`/`.footer-title` ask **500** | load **200;300;400;500** from Google Fonts so the sans weights are real |
| Headings ask **500** on a face that only has 400/700 (Times) | keep 500 to match the reference's synthesised render; do not switch to 700 |
| Journal card heights are ragged (464 / 434 / 493) | keep natural heights (align-items:start); do not stretch the cards |
| `Doc/index.html` (the kit's documentation page) is linked from the footer | drop it — a marketplace template does not ship its vendor docs |
| Copyright reads "© 2026 Villa. Template by Colorlib." | "© {currentYear} Tideline — made with **Component Dock**" linking `https://www.componentdock.com/` (AGENTS.md rule 5); no ColorLib string anywhere in `apps/tideline` |
| Screenshot copies the v2 copy ("YOU CAN VISIT", "DOWNLOAD") | use the **live v3** copy inventory below |
| Hero photo has `alt=""` (decorative) but the four card photos carry descriptive alts | keep that distinction |
| Seven nav items and four explore cards all point at sibling pages that are not built | delta 1 + delta 2 (in-page anchors, no dead `#`) |

### Content inventory (live v3 copy — paraphrase, keep the same *kind*)

- **Brand**: `Villa` → **Tideline** everywhere (wordmark, hero `<em>`, footer,
  `<title>`, meta description).
- **Hero**: h1 "Welcome to *Villa* resort" · sub "A little room to breathe. A
  little time by the water." · CTAs "Explore the beauty" / "Find your room".
- **Explore** (h2 "You can explore"): Food & shared tables / Seasonal
  inspiration · Pool & terrace / Time to unwind · Rooms to settle into / Find
  your space · Life by the water / Plan a coastal day.
- **Gallery**: h2 "A place to slow down." · lead "Follow the light from a quiet
  room to the terrace, then out onto the water." · six uncaptioned slides
  (sail, studio, pool, classic, suite, dining).
- **Journal**: h2 "Notes for your next escape." · lead "Small ideas for a more
  thoughtful stay." · cards (meta / title / blurb): "Planning · Villa notes" /
  "A weekend without a full schedule" / "Make room for one good outing, a long
  lunch and the simple pleasure of doing very little."; "Practical · Villa
  notes" / "Pack for a slower coastal stay" / "A short, useful list that makes
  room for the things you will actually use."; "Stay guide · Villa notes" /
  "The details worth asking before you arrive" / "Room layout, arrival plans and
  dietary preferences: a few questions make a stay feel more personal."
- **Principles** (h2 "The small things matter." · lead "Three ideas at the heart
  of the Villa concept."): "A gentler start" / "A table to gather around" /
  "Space to explore" with their one-sentence bodies (sun, utensils, waves
  glyphs).
- **Footer**: "Stay a little longer" (Rooms & spaces · At the table · Coastal
  experiences) · "Useful details" (Stay guide · Our story · Make an enquiry) ·
  "A coastal state of mind" (blurb + the fictional-concept note) · "Notes from
  Villa" (newsletter: label "Email address", placeholder "Your email address",
  arrow submit, demo-form note).

### Delta 1 — seven nav items, one page

| source label | source target | Tideline anchor |
|---|---|---|
| Home | `index.html` | `#top` (hero) |
| Rooms | `hotel.html` | `#explore` |
| Dining | `restaurant.html` | `#principles` ("A table to gather around") |
| Experiences | `yacht.html` | `#gallery` |
| Our story | `about.html` | `#story` (footer "A coastal state of mind" column) |
| Journal | `blog.html` | `#journal` |
| Enquire | `contact.html` | `#newsletter` (footer form) |

Labels stay as the source has them; **no item is a dead `#`**. The overlay's
extra-info maps the same way: "Read the stay guide" → `#journal`, "Start an
enquiry" → `#newsletter`, and the three room names render as **plain list text**
(the room pages are not built).

### Delta 2 — four explore cards, no sibling pages

Cards stay image + serif title + grey detail line, and become in-page links:
**Food & shared tables → `#principles`**, **Pool & terrace → `#gallery`**,
**Rooms to settle into → `#gallery`**, **Life by the water → `#gallery`**. The
hero CTAs keep their source behaviour: "Explore the beauty" → `#explore`,
"Find your room" → `#gallery`.

## Design tokens (from `css/style.min.css` + `css/modern.min.css` + live computed styles)

| token | value | measured evidence |
|---|---|---|
| `--accent` (action) | **`#c0144a`** | `:root{--villa-accent:#c0144a}`; `.btn-primary{--bs-btn-bg:#c0144a}`; measured hero button `rgb(192,20,74)`; active carousel dot |
| `--accent-strong` (hover) | **`#9e103c`** | `.btn-primary` hover/active bg + border |
| `--link` (on light) | **`#a7103d`** | 12 declarations — `.btn-outline-primary`, `.text-link`, `.eyebrow`, `.form-control:focus`, `:focus-visible`, `.nojs-nav a` |
| `--accent-soft` (glyph) | **`#ad1546`** on **`#fff2f6`** | `.principle-icon{color:#ad1546;background:#fff2f6}` |
| `--accent-wash` (nav highlight) | **`#f9c3d4`** | `.site-navbar nav .menu li a:before` |
| `--legacy-pink` | **`#e61c5d`** | the v1 sheet's selection background, `a:hover`, `.visit a:hover`, star colour — still in `style.min.css` and still painted on `::selection` |
| `--ink` | **`#000`** | `h1..h5{color:#000}`; measured section headings |
| `--body` | **`#50565c`** | `modern :root{--villa-text:#50565c}` + `body{color:var(--villa-text)}`; measured `rgb(80,86,92)` |
| `--muted` | **`#646a70`** | `.visit-section .heading` + `.visit-detail` measured |
| `--meta` | **`#686868`** | `.media-custom .meta-post` measured (the older `#ced4da` rule loses) |
| `--surface` | **`#fff`** | hero band, cards, page |
| `--surface-pattern` | **`#e9ecef`** + `img/round.png` | `.bg-pattern{background:#e9ecef url(../img/round.png)}` |
| `--surface-dark` | **`#1a1a1a`** | `.footer-section{background:#1a1a1a}` measured `rgb(26,26,26)` |
| footer ink / link / rule | `#fff` / **`#bababa`** / `rgba(255,255,255,.1)` (`#888` on the newsletter rule) | `.footer-title`, `.footer-section a:hover` vs `a`, `.bordertop` border |
| header overlay wash | **`rgba(0,0,0,.51)`** | `modern .site-hero.overlay:before{background:#00000082}`; measured |
| radii | **50px** on every button (pill), **50%** on the 48px arrows / 10px dots / 70px icon circles, **0** on cards, fields and panels | `.btn{border-radius:50px}`; measured per element |
| buttons | `.btn` = `padding:10px 30px`, `min-height:46px`, `display:inline-flex`, `font-size:14px`, `letter-spacing:.2em (2.8px)`, `text-transform:uppercase`; filled `#c0144a` → `#9e103c`; outline = `1px solid #f8f9fa` on the hero | measured `240×46` / `209×46` |
| section rhythm | padding: 112px 0 (`7em` at a 16px base) → padding: 48px 0 ≤991px → padding: 80px 0 ≤767px (`.modern` override) | measured band heights at 1440 / 768 / 390 |
| gallery frame | **1,110×741**, aspect **1123/750**, `object-fit:cover`, shadow `0 10px 70px -10px rgba(0,0,0,.2)` | `.owl-carousel.major-caousel` + measured |
| card surfaces | `.media-custom` white, `box-shadow:0 2px 5px rgba(0,0,0,.07)`, body `padding:24px`; visit photos `box-shadow:0 2px 3px rgba(0,0,0,.2)` | measured + sheet |

## Requirements

### Requirement: Page shell and document head

Tideline SHALL render **one page** whose bands appear in the source's order —
hero, explore, gallery, journal, principles, footer — inside a document with
`<html lang="en">`, `<title>` and meta description written for **Tideline**, and
a skip link that moves focus into `main`.

#### Scenario: Bands render in source order at 1440

- **GIVEN** Tideline is rendered at 1440×900
- **WHEN** the page has loaded
- **THEN** the bands SHALL appear in the order hero → explore → gallery → journal → principles → footer
- **AND** the document height SHALL be within ±5% of the reference's 4,883px at a 900px viewport (the journal band overlapping the gallery by 500px is part of that height)
- **AND** the header SHALL overlay the hero (`position:absolute`), not push it down

#### Scenario: Skip link reaches the main landmark

- **GIVEN** the page is loaded and the user presses Tab once
- **WHEN** the skip link receives focus
- **THEN** it SHALL become visible (it is fixed off-screen until focused) and read "Skip to content"
- **AND** activating it SHALL move focus to `<main id="main" tabindex="-1">`, not merely scroll

#### Scenario: No ColorLib provenance in app files

- **GIVEN** the built app's source
- **WHEN** any app file is searched for the source brand
- **THEN** no app file SHALL contain the ColorLib name, `preview.colorlib.com` or the source slug (provenance lives only in the spec, `TEMPLATES.md` and the PR)
- **AND** the footer SHALL link `https://www.componentdock.com/` reading "Component Dock"

### Requirement: Translucent header with a full-screen navigation overlay

The header SHALL be an absolute overlay on the hero holding the serif wordmark
(**30px / 700 / white**, at 15, 58) and a **48×48** hamburger whose three
**40×2px** bars open a **full-screen white panel** (`position:fixed; inset:0`)
with seven serif **40px** links, a half-height `#f9c3d4` highlight on the active
item, and two extra-info columns at **17px** label / 18px copy.

#### Scenario: Overlay composition at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the toggle is activated
- **THEN** the panel SHALL cover the viewport on `#fff` with the seven items stacked in source order (Home, Rooms, Dining, Experiences, Our story, Journal, Enquire) at 40px serif, `#000`
- **AND** the active item SHALL show the pink half-height block behind its lower half
- **AND** the two extra-info columns ("Before you arrive", "Explore Villa") SHALL be visible to the right of the link list
- **AND** the wordmark SHALL turn `#222` and the toggle SHALL render as a 48px X

#### Scenario: Overlay is modal and keyboard-operable

- **GIVEN** the panel is open
- **WHEN** the user presses Escape or Shift-Tab from the first control
- **THEN** Escape SHALL close the panel and return focus to the toggle
- **AND** Tab SHALL cycle inside `[toggle, …panel controls]` without leaking to the page behind
- **AND** the toggle SHALL expose `aria-expanded`, `aria-controls` and a label that changes "Open navigation"/"Close navigation"
- **AND** the body SHALL not scroll while the panel is open

#### Scenario: Overlay on mobile

- **GIVEN** a 390px viewport
- **WHEN** the panel opens
- **THEN** the links SHALL shrink to **30px**, the panel SHALL keep 100vh with `padding:100px 10px 40px`, and the extra-info columns SHALL be hidden
- **AND** all seven links SHALL stay reachable by scrolling inside the panel

### Requirement: Full-height hero band

A single **100vh** (`min-height:700px`) hero SHALL paint a coastal photograph
under a **rgba(0,0,0,.51)** wash, with the page's only `h1` — "Welcome to
*Tideline* resort", serif **80px / 80px / 700** white, the brand word in `<em>`
— a **30px/45/200** sub-line, and two pill CTAs (**240×46** filled `#c0144a`
and **209×46** outlined white, 12px apart, uppercase **14px** with 2.8px
tracking).

#### Scenario: Hero composition at 1440

- **GIVEN** a 1440×900 viewport
- **WHEN** the hero renders
- **THEN** the band SHALL be 900px tall and the photo SHALL cover it (`object-fit:cover`, `object-position:60% center`)
- **AND** the centred column SHALL be ~950px wide with the `h1` at 80px, the sub-line 30px below it and the CTA row at y≈510
- **AND** the filled CTA SHALL be `#c0144a` with white text and a 50px radius, darkening to `#9e103c`
- **AND** the outlined CTA SHALL be a 1px white-bordered transparent pill

#### Scenario: Headline reflows on small screens

- **GIVEN** a 390px viewport
- **WHEN** the hero renders
- **THEN** the `h1` SHALL be **40px / 40px** and wrap without clipping inside 360px
- **AND** the sub-line SHALL be 18px/27 and the CTAs SHALL keep `min-width:200px`, stacked, each ≥44px tall

#### Scenario: Hero CTAs have real targets

- **GIVEN** the two hero CTAs
- **WHEN** either is activated
- **THEN** "Explore the beauty" SHALL scroll to `#explore` and "Find your room" to `#gallery`
- **AND** neither SHALL be `href="#"`

### Requirement: Explore band with four photo cards

A white band with **112px** vertical padding SHALL open with an uppercase
**15px/500/3px-tracked** `#646a70` heading ("You can explore") and hold four
**285px** columns at ≥992px (2-up at 768, 1-up at 390), each a **255×170**
photo (aspect 500/333, 15px inset, soft shadow), a **20px** serif title and a
**14px** grey detail line.

#### Scenario: Row composition at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the explore band renders
- **THEN** exactly four cards SHALL sit in one row in the order Food & shared tables, Pool & terrace, Rooms to settle into, Life by the water
- **AND** each photo SHALL be 255×170 with the caption block 70px tall beneath it
- **AND** the heading SHALL be 15px uppercase with 3px tracking in `#646a70`, 30px above the row

#### Scenario: Cards reflow and stay linked

- **GIVEN** a 390px viewport
- **WHEN** the band renders
- **THEN** the four cards SHALL stack one per row with 360px photos and no horizontal overflow
- **AND** every card title SHALL be a link to a real in-page target (`#principles` or `#gallery`), never a dead `#`

### Requirement: Gallery band with a one-up carousel

A white band (**112px** padding) SHALL carry a centred serif heading (**80px /
96 / 500**) and a 20px/300 lead above a single-slide carousel of **six** photos:
a **1,110×741** frame (aspect 1123/750, `object-fit:cover`, deep soft shadow),
**48×48** circular arrows 60px outside the frame on both sides, and **six
10×10** dots beneath it (active `#c0144a` with a white ring, idle white with a
`#666` ring).

#### Scenario: Carousel anatomy at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the gallery renders
- **THEN** exactly one slide SHALL be visible in a 1,110×741 frame centred at x 150–1,290
- **AND** the previous/next controls SHALL be 48px circles at x 105 and x 1,287, vertically centred on the frame
- **AND** six dots SHALL sit below the frame with only the active one filled `#c0144a`
- **AND** non-active slides SHALL be hidden from layout and from the accessibility tree

#### Scenario: Carousel is operable and never autoplays

- **GIVEN** keyboard or assistive-technology use
- **WHEN** next/previous or a dot is activated
- **THEN** the visible slide SHALL change, the dots SHALL update, and each control SHALL expose an accessible name ("Next photo", "Go to photo 3 of 6")
- **AND** no autoplay SHALL run and no slide SHALL advance on its own
- **AND** the controls SHALL remain enabled at both ends (the reference rewinds rather than disabling)

#### Scenario: Gallery on mobile

- **GIVEN** a 390px viewport
- **WHEN** the band renders
- **THEN** the frame SHALL be 360px wide (aspect preserved) and the arrows SHALL move **below** it, centred, as a 48px pair
- **AND** the dots SHALL sit under the arrows with no horizontal overflow

### Requirement: Journal band with a patterned background and three cards

A band painted **`#e9ecef`** with a repeating `round.png`-style circle texture
SHALL rise **500px behind the gallery** (negative margin, 500px top padding;
**300px** at ≤991px) and carry a centred serif heading, a lead, and **three
350px white cards** (photo **350×233**, body `padding:24px`, `box-shadow:0 2px
5px rgba(0,0,0,.07)`) with an uppercase **14px/1.4px-tracked** `#686868` meta
line, a **25px** serif title and a grey blurb — card heights stay **natural**.

#### Scenario: Band overlap and composition at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the journal band renders
- **THEN** the band's top edge SHALL sit ~341px above the gallery frame's bottom, so the pattern shows on both sides of the photo
- **AND** three cards SHALL sit at x 165 / 545 / 925 with 350px widths and unequal heights
- **AND** the meta line SHALL be uppercase, 14px, 1.4px-tracked, `#686868`

#### Scenario: Cards stack on mobile

- **GIVEN** a 390px viewport
- **WHEN** the band renders
- **THEN** the three cards SHALL stack full-width (360px) with the same 24px body padding
- **AND** the band SHALL keep its 300px top padding so the overlap survives

### Requirement: Principles band with three circled glyphs

A white band SHALL carry a centred serif heading ("The small things matter."),
a 20px/300 lead, and **three** columns (**380px** at 1440) each opening with a
**70×70** circle (`#fff2f6`, `border-radius:50%`) holding a **30px** stroke
glyph in `#ad1546`, then a **26px** serif title and **18px/32.4/300** copy.

#### Scenario: Three columns at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the principles band renders
- **THEN** three 380px centred columns SHALL show a sun, a utensils and a waves glyph on 70px pale-pink circles
- **AND** each column SHALL carry a 26px serif title and one 18px paragraph, 25px below its circle
- **AND** the band SHALL carry no card surface, border or shadow

#### Scenario: Glyphs are icons, not images

- **GIVEN** the rendered icons
- **WHEN** the DOM is inspected
- **THEN** they SHALL be `lucide-react` components (`Sun`, `Utensils`, `Waves`) with `aria-hidden="true"` and a 30px box
- **AND** no theme SVG file, PNG or icon font SHALL be copied into the app

### Requirement: Dark footer with newsletter and Component Dock attribution

A **`#1a1a1a`** footer with **112px** padding SHALL hold four **285px** columns —
"Stay a little longer" (3 links), "Useful details" (3 links), "A coastal state
of mind" (blurb + concept note, `id="story"`), "Notes from Villa" (newsletter) —
above a bordered copyright row that credits **Component Dock**.

#### Scenario: Footer composition at 1440

- **GIVEN** a 1440px viewport
- **WHEN** the footer renders
- **THEN** four equal columns SHALL sit on `#1a1a1a` with **17px/500** white titles and **`#bababa`** 16px links
- **AND** the newsletter SHALL be a 255px underlined row (1px `#888`) with a transparent input and a **48×50** arrow submit
- **AND** the bordered row SHALL carry the current year and a live link to `https://www.componentdock.com/` reading "Component Dock"
- **AND** the footer SHALL NOT mention ColorLib or link `Doc/index.html`

#### Scenario: Newsletter validates without a request

- **GIVEN** an empty or malformed address
- **WHEN** the form is submitted
- **THEN** an inline error SHALL appear in the status region, the field SHALL be marked `aria-invalid`, and **no network request** SHALL be made
- **AND** a valid address SHALL show a polite success message and clear the field

#### Scenario: Footer links are real anchors

- **GIVEN** the nine footer links
- **WHEN** each is activated
- **THEN** it SHALL scroll to an existing in-page target (`#explore`, `#principles`, `#gallery`, `#journal`, `#story`, `#newsletter`)
- **AND** no footer link SHALL be `href="#"` or point at a non-existent page

### Requirement: Responsive behaviour and motion

The page SHALL reflow at the measured breakpoints (**991px**: 48px section
rhythm, 2-up explore grid, gallery arrows below the frame, 40px headings;
**767px**: 80px section rhythm, 1-up grids, 30px nav links, extra-info hidden;
**1270px**: gallery arrows and dots move inside/below the frame) with **no
horizontal overflow at 390px**, and SHALL ship no entrance animation.

#### Scenario: No horizontal overflow

- **GIVEN** a 390×844 viewport
- **WHEN** the page has fully laid out
- **THEN** `document.documentElement.scrollWidth` SHALL equal `clientWidth` (390)
- **AND** the document height SHALL be within ±8% of the reference's 6,963px

#### Scenario: Motion is limited to interaction

- **GIVEN** the page at rest
- **WHEN** no control is used
- **THEN** no band SHALL fade, slide or animate in (the reference has zero reveal hooks)
- **AND** with `prefers-reduced-motion: reduce` the hover/press transitions (0.2–0.3s) SHALL be suppressed without hiding content

## Verification checklist

- [ ] `apps/tideline` exists with `package.json` name `@free-react-templates/tideline`, `homepage` `https://tideline.free.componentdock.com`, `public/CNAME` `tideline.free.componentdock.com`
- [ ] Spec passes `/root/free-react-templates/node_modules/.bin/openspec validate template-tideline --type spec`
- [ ] Tests were written first (red), then implementation (green); `scripts/verify-app.sh tideline` is clean (typecheck + lint + 100% coverage + build)
- [ ] Six bands render in source order at 1440 with the measured heights (±5%): hero 900 · explore 546 · gallery 1,217 · journal 1,429 · principles 759 · footer 531 (document ≈4,883px)
- [ ] Header overlays the hero (absolute), wordmark 30px serif white at (15, 58), 48px hamburger; panel is full-screen white with seven 40px serif links and the `#f9c3d4` half-height active highlight
- [ ] Panel is modal: Escape closes, Tab is trapped, focus returns to the toggle, `aria-expanded`/`aria-controls`/label swap, body scroll locked, extra-info hidden ≤767px
- [ ] Hero `h1` is the page's only `h1`, 80px/700 serif with the brand in `<em>`, 40px at 390; wash `rgba(0,0,0,.51)`; filled pill `#c0144a` → `#9e103c`, outlined pill 1px white, both 46px tall, 50px radius
- [ ] Explore: uppercase 15px/3px-tracked `#646a70` heading, four 255×170 photos on the 500/333 ratio, 20px serif titles, 14px grey detail lines, real in-page link targets
- [ ] Gallery: one visible slide in a 1,110×741 (1123/750) frame, 48px circular arrows at x 105/1,287, six 10px dots with the active one `#c0144a`, no autoplay, keyboard operable, arrows move below the frame ≤1270px
- [ ] Journal: `#e9ecef` + repeating circle pattern, 500px overlap of the gallery (300px ≤991px), three 350px white cards with 24px body padding, uppercase `#686868` meta line, ragged heights preserved
- [ ] Principles: three 380px columns, 70px `#fff2f6` circles, 30px `#ad1546` lucide glyphs (`Sun`, `Utensils`, `Waves`), 26px serif titles, 18px/300 copy
- [ ] Footer: `#1a1a1a`, four 285px columns, 17px/500 white titles, `#bababa` links, 255px underlined newsletter row with a transparent 48×50 arrow submit, bordered copyright row
- [ ] Newsletter validates locally (empty/malformed → inline error, `aria-invalid`) and issues **no** network request; success clears the field
- [ ] Footer credits Component Dock with a live `https://www.componentdock.com/` link and the current year; no ColorLib string anywhere in `apps/tideline`
- [ ] No dead anchors: every nav, extra-info, hero, card, footer and copyright link has an existing in-page target (`#top`, `#explore`, `#gallery`, `#journal`, `#principles`, `#story`, `#newsletter`)
- [ ] Skip link is visible on first Tab and actually focuses `<main id="main" tabindex="-1">`
- [ ] Tokens live in `@theme` (`--accent: #c0144a`, `--accent-strong: #9e103c`, `--link: #a7103d`, `--accent-soft: #ad1546` on `#fff2f6`, `--accent-wash: #f9c3d4`, `--ink: #000`, `--body: #50565c`, `--muted: #646a70`, `--meta: #686868`, `--surface-pattern: #e9ecef`, `--surface-dark: #1a1a1a`) and are used through Tailwind classes, not raw hex
- [ ] Fonts: `--font-body: "Mukta Mahee", arial, sans-serif` loaded at 200/300/400/500 from the verified Google Fonts URL; `--font-heading: "Times New Roman", Times, serif` kept as the system serif with weight 500 on section headings
- [ ] Images are `picsum.photos/seed/tideline-<n>/<w>/<h>` placeholders (hero `alt=""`, cards descriptive); no theme assets, no copied SVGs or fonts
- [ ] `packages/ui` components and `cn()` reused where they fit; no new runtime dependency (the carousel is hand-rolled — do not add Swiper)
- [ ] 390px: `scrollWidth === clientWidth`, document ≈6,963px (±8%), 1-up grids, 30px nav links, gallery arrows below the frame
- [ ] `TEMPLATES.md` rows 1939 and 3014 flipped to `[x]` with the `tideline.free.componentdock.com` link by the implementer; README status regenerated
