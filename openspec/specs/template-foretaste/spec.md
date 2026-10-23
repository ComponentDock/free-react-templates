# Template: Foretaste (Coming Soon / Under Construction)

## Purpose

Foretaste is a single-screen coming-soon page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Coming Soon
V15" template (source slug `comingsoon_15` — the family's **gradient skyline**
page: the entire viewport is ONE static city-skyline photograph
(`background-position:center; background-repeat:no-repeat; background-size:cover`)
under a **violet brand gradient wash**
(`linear-gradient(top, #b224ef, #7579ff)` at `opacity:0.8`), and the page holds
exactly three stacked bands, centred: a white monogram lockup, the letterspaced
thin uppercase headline `COMING SOON`, and a **4-group flip-clock countdown**
(Days · Hrs · Min · Sec) of dark-navy rounded digit tiles separated by oversized
colon glyphs with small bold captions underneath, plus a row of three white
hairline social circles pinned under the clock).

There is NO navbar, NO subscription form, NO footer band and no second section —
at desktop the page is one viewport (measured 938px of content in a 900px
viewport at 1440×900, i.e. a 38px scroll from the shell's own padding).

The countdown is live: the source's `js/snippet.js` sets
`end = Date.now() + 35 days + 18 hours` and re-paints the digits once a second,
flipping each card whose digit changes (0.5s CSS `turn`/`turn2` animations that
are retriggered by re-adding the `play` class). The static markup ships the
values `35 : 17 : 59 : 57` baked in, so the page reads correctly before JS runs.

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_15/
  (HTTP 200, 109,152 B, `text/html; charset=UTF-8`, verified 2026-10-11; page
  title "Coming Soon V15 - Free Gradient Website Template 2026 - Colorlib",
  description "Build an under construction page and spice things up with this
  free coming soon website template with gradient effect.")
- **Preview:** `https://preview.colorlib.com/theme/comingsoon_15/` returns
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same
  family-wide live-preview gap the other `comingsoon_*` slugs have). The REAL
  rendered page is reachable though: `https://preview.colorlib.com/#comingsoon_15`
  (the ColorLib preview wrapper, HTTP 200) embeds the template in a
  `product-iframe` whose `src` is
  **`https://colorlib.com/etc/cs/comingsoon_15/index.html`** (HTTP 200, 7,597 B,
  `text/html`, verified 2026-10-11). That URL **is** the live preview DOM and was
  used as the primary reference: its HTML was fetched and parsed, its stylesheet
  `https://colorlib.com/etc/cs/comingsoon_15/css/style.css` (HTTP 200, 19,543 B)
  was tokenized, and the page was then opened in Chrome and measured
  (`getComputedStyle` + `getBoundingClientRect`) at 1440×900 and at 765×437.
- **Source zip (corroborating):**
  `https://preview.colorlib.com/downloads/free/comingsoon_15.zip`
  (HTTP 200, 364,971 B, `application/zip`) extracted to
  `/tmp/cs15/comingsoon_15/` — `index.html` (7,527 B), `css/style.css`
  (19,543 B), `js/snippet.js` (1,516 B), `README.md` (1,261 B),
  `images/bg01.jpg` (**1900×900**, 230,688 B — the washed NYC skyline),
  `images/icons/logo.png` (**101×44** RGBA, 1,968 B — the white two-letter
  monogram), `images/icons/favicon.ico` (32,038 B) and three self-hosted faces
  `fonts/Montserrat-Thin.woff2` (57,316 B), `fonts/Montserrat-Bold.woff2`
  (59,716 B), `fonts/Quantico-Regular.woff2` (7,688 B). All three faces exist on
  Google Fonts, so the recreation loads them as webfonts and copies nothing.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-15.jpg
  (HTTP 200, 49,215 B, served as `image/avif` — NOT JPEG for this slug —
  **1200×972**, converted to PNG with ImageMagick and reviewed visually
  2026-10-11; the live Chrome render matches it section for section)
- **New name:** `foretaste` (apps/foretaste, `@free-react-templates/foretaste`) —
  the source demo title "Coming Soon 15", its `bg01.jpg` photograph, its 101×44
  `logo.png` monogram, its self-hosted woff2 faces, its inlined fa SVG icon
  paths, its "Coming Soon" headline and its `Coming Soon 15` favicon are never
  reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V15" (source:
  https://colorlib.com/wp/template/comingsoon_15/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3046; the slug `comingsoon_15` appears exactly
  once (no duplicate `- [ ]` line). No implementation exists for this item
  (`apps/foretaste` absent, no spec on main before this one).
- **Preview URL:** `https://preview.colorlib.com/theme/comingsoon_15/` →
  **HTTP 404** (verified 2026-10-11). Fallback chain actually used (documented
  per `docs/replication.md`): (1) the live demo the preview wrapper embeds,
  `https://colorlib.com/etc/cs/comingsoon_15/index.html` — the rendered DOM and
  its `css/style.css`; (2) the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_15.zip`; (3) the
  ColorLib marketing page `https://colorlib.com/wp/template/comingsoon_15/` for
  title/description metadata; (4) the TEMPLATES.md screenshot. Reference
  artifacts (research date 2026-10-11): `/tmp/c15.html` (ColorLib template page
  probe), `/tmp/t15.html` (ColorLib page), `/tmp/d15.html` (live demo HTML),
  `/tmp/s15.css` (live stylesheet), `/tmp/cs15.zip` +
  `/tmp/cs15/comingsoon_15/` (extracted source), `/tmp/c15.jpg` → `/tmp/c15.png`
  (the 1200×972 screenshot). Source HTML/CSS/JS are authoritative for section
  structure, copy, tokens and behaviour.
- **Screenshot:** `coming-soon-15.jpg` (served as `image/avif`, converted and
  reviewed, 1200×972): a violet/purple gradient field washing a downtown
  skyline (one tall spire centre, dense mid-rise blocks either side); a white
  two-letter monogram centred in the upper third; the thin, very widely
  letterspaced uppercase headline `COMING SOON` under it; a centred countdown of
  four `NN` groups in near-black rounded tiles separated by oversized colons;
  small uppercase captions `DAYS · HRS · MIN · SEC` under each group; and three
  white hairline social circles centred near the bottom edge. Nothing else — no
  logo bar, no form, no footer text.
- **Visual design summary:** flat single-screen poster. One photographic
  background, one full-bleed gradient wash, white type throughout, and the only
  non-white colour on screen is the gradient itself plus the near-navy
  `#0d1629` digit tiles (the tiles read as black in the screenshot).
- **Measured render (Chrome, 1440×900, dsf 1):**
  - outer shell `.bg-img1.size1.overlay1`: `x0 y0 w1425 h938`
    (`padding: 0px 15px 35px`, `min-height:100vh`, `background-size:cover`),
    `scrollHeight 938` vs `clientHeight 900` → the page scrolls 38px
  - inner column `.flex-col-c` (flex column, `align-items:center`):
    `x15 y0 w1395 h827`, `padding: 160px 0px 215px`
  - logo lockup `.wrappic1`: `x662 y160 w101 h44` (the `101×44` PNG,
    `flex-grow:1` on the wrapper is inert because the column's height is auto)
  - headline `.l1-txt1`: `x468 y204 w490 h185` — 185 = 30px padding-top + 55px
    line box (50px at `line-height:1.1`) + 100px padding-bottom
  - countdown wrapper `.flip-clock-wrapper`: `x15 y389 w1395 h203` (full width,
    `display:flex; flex-wrap:wrap; justify-content:center`, 100px of it is the
    `ul` `margin-bottom:80px`)
  - digit tiles (90×120, `border-radius:10px`, `background:#0d1629`,
    `margin:3px 3px 80px` — the 80px bottom margin is what spaces wrapped rows
    into the reference's 203px row step, `y389` → `y592` at 765×437) at
    `x230 x326` (days), `x490 x586` (hrs), `x750 x846` (min), `x1010 x1106`
    (sec) — 6px between the pair (3px margins), `y392`
  - the 68px colon dividers sit between the pairs: hours divider at `x419`
    `w68 h120`, its `::before` computes to `120px "Quantico-Regular"` with
    `content:":"`; the days divider keeps `width:0` so the `DAYS` caption hangs
    under the first pair
  - caption rule `.flip-clock-divider::after`: `14px Montserrat-Bold`,
    `letter-spacing:3px`, `text-transform:uppercase`, white, box `193px` wide,
    `left:100%; top:100%; padding-top:23px`, centered
  - social row `.flex-w.flex-c-m.p-b-35`: `x15 y827 w1395 h76` (36px button +
    5px bottom margin + 35px padding); first circle at `x653 y827 w36 h36`
  - computed gradient overlay: `linear-gradient(rgb(178,36,239), rgb(117,121,255))`
    at `opacity 0.8` on `.overlay1::before`
  - countdown digits read `35 17 59 57` in the static markup, then tick down
    from `now + 35d 18h` (the live page showed `35 : 17 : 59 : 58` at capture)
- **Behaviour (from `js/snippet.js`):** `FLIP = {"D":35,"h":18}` →
  `end = Date.now() + D*864e5 + h*36e5`; every 1000ms it computes
  `d|h|m|s`, zero-pads each to two digits, and writes each digit into the card
  whose visible `.inn` differs, after copying the old digit into the
  `.flip-clock-before` card and re-triggering the flip by toggling the `play`
  class on that `ul`. No jQuery, no framework, no other behaviour on the page.
- **Sibling comparison (why this slug is its own design):** the other
  `comingsoon_*` recreations in this repo are light/white pages (a split-screen
  `prologue` V14, dark poster variants, etc.). This one is the family's
  **full-bleed gradient-over-photo** variant: a single photographic viewport,
  a brand gradient at 80% opacity as the only colour, a thin letterspaced
  headline (Montserrat Thin, 10px tracking — no other sibling uses this), and a
  flip-clock of rounded navy tiles with oversized colon separators rather than
  white/bordered boxes. Do not borrow a sibling's white panel, subscribe bar or
  Playfair/ Poppins type — none of that exists here.

## Design tokens

| Token             | Value                                                                                                                                                                                                                                                                                                            | Where                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| page shell        | `width:100%`, `min-height:100vh`, `padding:0 15px 35px`, `background-image:url(...)`, `background-position:center`, `background-repeat:no-repeat`, `background-size:cover`, `position:relative`, `z-index:1`                                                                                                     | the whole page (one screen)                       |
| gradient overlay  | ONE `.overlay1::before` layer: `linear-gradient(top, #b224ef, #7579ff)` at **`opacity:0.8`**, `position:absolute; inset:0; z-index:-1` (measured computed `linear-gradient(rgb(178,36,239), rgb(117,121,255))`, `opacity 0.8`)                                                                                   | over the photograph                               |
| brand gradient    | `#b224ef` (magenta-violet) → `#7579ff` (periwinkle) — the ONLY brand colour; flat `#7579ff` fallback where gradients are unsupported                                                                                                                                                                             | overlay, CTA-free palette                         |
| photograph        | ONE static cover image, `center`, no-repeat, never the source's `1900×900` `bg01.jpg`; recreation placeholder `https://picsum.photos/seed/foretaste-skyline/1900/900`                                                                                                                                            | page background                                   |
| content column    | `display:flex; flex-direction:column; align-items:center`, `padding:160px 0 215px`; `80px 0 100px` at ≤576px (source `.respon1`)                                                                                                                                                                                 | the single centred column                         |
| monogram lockup   | wrapper `display:block`, `flex-grow:1` (inert), `img { max-width:100% }`; the source PNG is **101×44** white letters — the recreation renders its OWN wordmark/monogram in white, ≤44px tall                                                                                                                     | column, top band                                  |
| headline          | **Montserrat Thin (100), 50px, `line-height:1.1`, `#fff`, `text-transform:uppercase`, `letter-spacing:10px`**, `padding:30px 0 100px`; size does NOT change at ≤576px (the source re-declares 50px)                                                                                                              | column, middle band                               |
| countdown wrapper | `display:flex; flex-wrap:wrap; justify-content:center`, `width:100%`, `max-width:100%`, `margin-bottom:20px`; `max-width:470px; margin-right:10px` at ≤1200px; `max-width:210px; margin-right:10px` at ≤576px                                                                                                    | column, under the headline                        |
| digit tile        | `90×120`, `border-radius:10px`, `background:#0d1629`, `margin:3px 3px 80px` (the 80px bottom margin is the band the group captions hang in once the groups wrap), four groups of two tiles (= 8 tiles)                                                                                                           | countdown                                         |
| digit glyph       | **Quantico 400, 120px, `#fff`**, centred in the tile, `line-height` unset/flex-centred; zero-padded two digits per group                                                                                                                                                                                         | inside each tile                                  |
| colon separator   | `.flip-clock-divider`, `68px × 120px`, `::before` `content:":"` in **Quantico 400, 120px, `#fff`**, flex-centred; the FIRST divider (days) keeps `width:0` and renders no colon; `width:10px` at ≤1200px for the days+minutes dividers (minutes colon hidden) and for ALL dividers at ≤576px (all colons hidden) | between the four groups                           |
| group captions    | `::after` content `"days" / "hrs" / "min" / "sec"`, **Montserrat Bold (700), 14px, `#fff`, `text-transform:uppercase`, `letter-spacing:3px`**, box `193px` wide, `position:absolute; left:100%; top:100%; padding-top:23px`, centred                                                                             | under the colons                                  |
| social row        | `display:flex; flex-wrap:wrap; justify-content:center; align-items:center`, `padding-bottom:35px`                                                                                                                                                                                                                | column, bottom band                               |
| social circle     | `36px × 36px`, `border-radius:50%`, transparent fill, `border:1px solid #fff`, centred 18px `#fff` glyph, `margin:0 3px 5px`, `transition:all .4s`                                                                                                                                                               | social row (×3)                                   |
| social hover      | fill → `#fff`, glyph → `#0d1629`                                                                                                                                                                                                                                                                                 | over `.4s`                                        |
| social glyphs     | Facebook, Twitter/X and YouTube — source inlines `fa-facebook` / `fa-twitter` / `fa-youtube-play` SVG paths; the recreation uses `lucide-react` equivalents and NEVER copies the paths                                                                                                                           | social row (×3)                                   |
| countdown logic   | target = `now + 35 days + 18 hours` (source `FLIP = {"D":35,"h":18}`), recomputed every **1000ms**, each changed digit flips its card with a 0.5s turn animation; digits zero-padded, `Math.max(0, …)` clamp at zero                                                                                             | countdown                                         |
| radii             | `10px` on every digit tile and its shadow layer; `50%` on the three social circles only; nothing else is rounded                                                                                                                                                                                                 | shapes                                            |
| fonts             | Montserrat **100** (headline) · Montserrat **700** (group captions) · Quantico **400** (digits + colons) — no other face on the page                                                                                                                                                                             | typography                                        |
| Google Fonts map  | `Montserrat:wght@100;700` + `Quantico:wght@400` via `<link>` — **no substitution needed** (all three source faces are on Google Fonts); no icon font (lucide-react)                                                                                                                                              | `index.html` `<link>`                             |
| base type         | source `body` is the system stack (`-apple-system, … Arial, sans-serif`) 1rem/1.5 `#212529` — but every VISIBLE glyph is Montserrat Thin, Montserrat Bold or Quantico                                                                                                                                            | typography                                        |
| transitions       | `all .4s` (social circles); the flip animation is `turn`/`turn2` 0.5s linear, retriggered per changed digit                                                                                                                                                                                                      | interaction                                       |
| attribution       | a small low-emphasis line linking `https://www.componentdock.com/` ("Component Dock"), pinned absolutely near the bottom edge of the shell so the three-band stack is untouched                                                                                                                                  | ADDED vs the reference (the source has no credit) |
| Brand (stated in this prep) | `#b224ef` | live sheet paints it ×4 — `background` on `.overlay1::before`; style.css?v=a16d4cd3 (19,543 B, sha256 d7ba9df8bff4) · <https://colorlib.com/etc/cs/comingsoon_15/index.html> |

## Requirements

### Feature: Full-bleed gradient skyline shell (one 100vh photo, one gradient wash)

The page is one `min-height:100vh` container showing a single cover photograph
with one `#b224ef → #7579ff` gradient wash at 80% opacity over it.

#### Scenario: Page renders as one full-viewport poster

- **Given** the page loads at desktop width (1440×900)
- **When** the layout renders
- **Then** a single shell element occupies `width:100%; min-height:100vh`,
  `position:relative; z-index:1`, with `padding:0 15px 35px`, and its background
  is ONE cover image (`center`, `no-repeat`, `cover`)
- **And** there is NO navbar, NO video panel, NO subscription form, NO footer
  band, NO modal, NO second section and no navigation links
- **And** the document's content is `min-height:100vh` plus the shell padding,
  so at 1440×900 the page scrolls by 38px (`scrollHeight 938` vs
  `clientHeight 900`) — this is the reference's own geometry, not a bug

#### Scenario: The gradient overlay is the only wash and the only brand colour

- **Given** the page renders
- **When** the overlay is inspected
- **Then** exactly ONE full-bleed layer is drawn over the photograph: the
  shell's `::before` with `background:linear-gradient(top, #b224ef, #7579ff)`
  and `opacity:0.8`, `position:absolute; inset:0; z-index:-1` (so it sits above
  the shell's own background image and below all content)
- **And** there is no second overlay, no dark scrim, no blur and no
  dark-mode treatment
- **And** the gradient's two stops are the app's `@theme` brand colours
  (`#b224ef` → `#7579ff`), the only non-white colours on the page besides the
  digit tiles

#### Scenario: Background photograph is a stood-in placeholder

- **Given** the shell renders
- **When** its background image is inspected
- **Then** it resolves to the recreation's own deterministic placeholder
  (`https://picsum.photos/seed/foretaste-skyline/1900/900`)
- **And** it is never the source's `images/bg01.jpg` file, and no source image
  is copied into `apps/foretaste`

### Feature: Centred column (monogram · thin headline · countdown · socials)

The shell holds one centred flex column whose children are, in order: the
monogram lockup, the headline, the countdown, and the social row.

#### Scenario: Three visible bands stack in reference order

- **Given** the page renders at 1440×900
- **When** the column is inspected
- **Then** it is `display:flex; flex-direction:column; align-items:center` with
  `padding:160px 0 215px` (`80px 0 100px` at ≤576px)
- **And** its children are, in order, the monogram lockup, the headline, the
  countdown wrapper and the social row — nothing else
- **And** the monogram lockup sits at `y160`, the headline at `y204`, the
  countdown at `y389` and the social row at `y827`

#### Scenario: Monogram lockup is the app's own wordmark

- **Given** the column renders
- **When** the top band is inspected
- **Then** it is a `display:block` wrapper (`flex-grow:1`, inert on an
  auto-height column) containing the app's OWN monogram/wordmark in white, at
  most 44px tall and `max-width:100%`
- **And** it never reuses the source's `101×44` `logo.png` file or its letter
  shapes
- **And** it is a non-interactive brand lockup (the source wraps it in a bare
  `href="#"`; the recreation renders it without a dead link)

#### Scenario: Headline is Montserrat Thin, 50px, widely letterspaced

- **Given** the headline renders
- **When** it is inspected
- **Then** it is an `h3`-level heading, `font-family:"Montserrat"`,
  `font-weight:100`, `font-size:50px`, `line-height:1.1`,
  `letter-spacing:10px`, `text-transform:uppercase`, `color:#fff`,
  `text-align:center`, with `padding:30px 0 100px`
- **And** it carries the app's own "coming soon" copy (never the source's exact
  string layout/images), in a shrink-to-fit box centred in the column
  (~490px wide at 1440×900)
- **And** its size does NOT change at any breakpoint — the source's ≤576px rule
  merely re-declares `50px`

### Feature: Flip-clock countdown (four groups, eight tiles, big colons, captions)

Four countdown groups — Days, Hours, Minutes, Seconds — each rendered as two
`90×120` rounded `#0d1629` tiles of `120px` Quantico digits, separated by
oversized Quantico colons with a bold uppercase caption beneath each group.

#### Scenario: Countdown renders eight tiles in four groups

- **Given** the page renders at 1440×900
- **When** the countdown is inspected
- **Then** it is one flex wrapper (`flex-wrap:wrap; justify-content:center;
width:100%; margin-bottom:20px`) containing eight digit tiles of exactly
  `90×120`, `border-radius:10px`, `background:#0d1629`, `margin:3px 3px 80px`
- **And** the tiles read, left to right, two digits for days, two for hours, two
  for minutes, two for seconds — zero-padded at all times
- **And** each digit is `font-family:"Quantico"; font-weight:400; font-size:120px;
color:#fff`, flex-centred inside its tile

#### Scenario: Groups are separated by oversized colon glyphs

- **Given** the countdown renders at desktop width
- **When** the separators are inspected
- **Then** between each pair of groups sits a `68px × 120px` divider whose
  `::before` paints a `":"` in `120px Quantico` white
- **And** the FIRST divider (before the days group) is `width:0` and paints no
  colon, so the caption hangs under the first pair
- **And** at ≤1200px the days and minutes dividers narrow to `10px` and the
  minutes colon is hidden; at ≤576px every divider is `10px` and every colon is
  hidden

#### Scenario: Each group is captioned in bold uppercase Montserrat

- **Given** the countdown renders
- **When** the captions are inspected
- **Then** each divider paints an `::after` caption
  (`days` / `hrs` / `min` / `sec`) in `14px Montserrat` at `font-weight:700`,
  `letter-spacing:3px`, `text-transform:uppercase`, white, in a `193px`-wide
  box at `left:100%; top:100%` with `padding-top:23px`, centred
- **And** the recreation renders them as real elements (with the same type
  tokens) rather than pseudo-content strings, keeping the same offsets

#### Scenario: Countdown ticks down once a second and flips changed cards

- **Given** the page is loaded
- **When** one second passes
- **Then** the component recomputes the remaining time to a target of
  `load time + 35 days + 18 hours`, clamps it at zero with `Math.max`, and
  zero-pads days (≥2 digits), hours, minutes and seconds
- **And** only the cards whose digit changed animate, each with a 0.5s flip
  transition (the CSS `turn`/`turn2` behaviour re-triggered per changed digit)
- **And** the initial render shows non-zero values (days, hours, minutes and
  seconds) so the page is never blank before the first tick
- **And** no network request, no `setInterval` leak (the interval is cleared on
  unmount) and no page navigation happens

### Feature: Social row (three white hairline circles)

Three `36×36` transparent circles ringed in white, centred under the countdown.

#### Scenario: Social links render as hairline rings

- **Given** the page renders
- **When** the social row is inspected
- **Then** it is a flex row (`flex-wrap:wrap; justify-content:center;
align-items:center; padding-bottom:35px`) holding exactly three links
- **And** each link is `36×36`, `border-radius:50%`, transparent fill,
  `border:1px solid #fff`, with a centred 18px `#fff` glyph and
  `transition:all .4s`
- **And** the glyphs are the `lucide-react` equivalents of Facebook, Twitter/X
  and YouTube — never the source's inlined SVG paths

#### Scenario: Hover inverts the circles

- **Given** a social circle is rendered
- **When** it is hovered or focused
- **Then** its fill becomes `#fff` and its glyph becomes `#0d1629`, over `.4s`
- **And** each circle carries an `aria-label` (the source's links are bare
  `href="#"`) and is reachable by keyboard with a visible focus ring

### Feature: Responsive behaviour

Only two breakpoints move anything: ≤1200px and ≤576px.

#### Scenario: Countdown narrows at the two breakpoints

- **Given** the page renders at ≤1200px
- **When** the countdown is measured
- **Then** the wrapper is capped at `max-width:470px` with `margin-right:10px`
  and still keeps the four groups on one row
- **And** at ≤576px the wrapper is capped at `max-width:210px` with
  `margin-right:10px` and the groups wrap

#### Scenario: Column padding and colons collapse on small screens

- **Given** the page renders at ≤576px
- **When** the shell is inspected
- **Then** the column's padding becomes `80px 0 100px`
- **And** all four colon dividers are `10px` wide and paint no colon
- **And** the headline stays 50px with its 10px tracking (unchanged), the tiles
  stay `90×120` and the social circles stay `36×36`

### Feature: Component Dock attribution

#### Scenario: Footer credit links Component Dock

- **Given** the page renders
- **When** the bottom of the shell is inspected
- **Then** one small low-emphasis line links `https://www.componentdock.com/`
  branded "Component Dock"
- **And** it is absolutely positioned so the reference's three-band geometry is
  untouched, and it is the only element added vs the reference

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/foretaste/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/foretaste/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-foretaste`
- [ ] `scripts/verify-app.sh foretaste` passes: typecheck + lint + knip + fallow + vitest at 100% coverage + build (~2–3 min)
- [ ] Every scenario above has at least one matching test (scenario-style `it`
      blocks), with 100% lines/functions/branches/statements on the app
- [ ] Screenshot match against `coming-soon-15.jpg` (1200×972): violet→periwinkle
      gradient field over a washed city skyline; white monogram upper third; thin
      widely letterspaced uppercase `COMING SOON`; four groups of two dark
      rounded tiles with oversized colon separators; `DAYS · HRS · MIN · SEC`
      captions under the groups; three white hairline social circles centred
      near the bottom
- [ ] Geometry at 1440×900: shell `padding:0 15px 35px`; column
      `padding:160px 0 215px`; lockup `y160`; headline `y204` (50px/1.1 +
      30/100 padding); countdown wrapper `x15 y389 w1395 h203`; tiles `90×120`
      with `3px` margins (6px between a pair) and `68px` colon dividers between
      groups; social row `y827`, first circle `x653 y827 36×36`
- [ ] Tokens present in `@theme` / components: gradient `#b224ef → #7579ff` at
      `opacity .8`, tile `#0d1629`, radii `10px` (tiles) / `50%` (circles),
      Montserrat 100 (headline, 50px, `letter-spacing:10px`), Montserrat 700
      14px/3px (captions), Quantico 400 120px (digits and colons), `1px solid
    #fff` rings, `transition:all .4s`
- [ ] Responsive check: ≤1200px wrapper `470px`, ≤576px wrapper `210px` +
      column `80px 0 100px` + all colons hidden; headline 50px and tiles
      `90×120` at every width
- [ ] Countdown behaviour: initial render non-zero, ticks every 1000ms toward
      `now + 35d 18h`, clamps at zero, flips only changed cards, clears its
      interval on unmount, makes no network call
- [ ] Accessibility: heading is a real heading element; each tile group is
      labelled for assistive tech (Days/Hours/Minutes/Seconds); social links
      have `aria-label`s and visible focus rings
- [x] `public/CNAME` = `foretaste.free.componentdock.com`; `"homepage"` matches;
      `npm install` run at the repo root so the lockfile registers
      `@free-react-templates/foretaste`
- [x] Zero `colorlib` / "Coming Soon 15" / `comingsoon_15` / "Montserrat-Thin" /
      "Quantico-Regular" references anywhere in `apps/foretaste` (comments
      included — record the palette as design notes, not provenance)
- [ ] No copied assets: no `bg01.jpg`, no 101×44 `logo.png`, no favicon, no
      `fonts/*.woff2`, no `css/style.css` (including its `all: revert` guard and
      the Bootstrap reboot), no inlined fa SVG paths; photos come from picsum
      and icons from `lucide-react`
- [ ] PR description includes: source template (ColorLib Coming Soon V15),
      preview URL (`https://preview.colorlib.com/theme/comingsoon_15/` → HTTP
      404 → live demo `https://colorlib.com/etc/cs/comingsoon_15/index.html` +
      source-zip fallback), the design tokens used (`#b224ef → #7579ff` gradient
      at `opacity .8`, `#0d1629` tiles, `10px`/`50%` radii, Montserrat 100/700,
      Quantico 400, `1px solid #fff` rings, `all .4s`), the measured geometry
      (160/215 column padding, `90×120` tiles, `68px` colons, `y827` social row)
      and what differs (new name, picsum skyline placeholder, own monogram and
      copy, lucide icons, real caption elements with `aria-label`s, added
      keyboard focus states and the Component Dock attribution line)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
