# Template: Advent (Coming Soon / Under Construction)

## Purpose

Advent is a single-screen coming-soon / under-construction page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free "Coming Soon V05" template (source slug `comingsoon_05` — one pink→coral
gradient screen holding a white rounded countdown bar pinned to the very top
(four white cells split by hairline grey dividers, dark bold numbers over tiny
uppercase grey labels), a centred white uppercase "Coming Soon" headline, a
lighter under-construction line, and a single inline get-updates form — a white
Name pill, a white Email pill, one dark pill button — over a small credit line),
built under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_05/
  (page title "Coming Soon V05 - Free Website Template 2026 - Colorlib",
  HTTP 200, 109,324 B, verified 2026-10-11)
- **Preview:** https://preview.colorlib.com/theme/comingsoon_05/ returns
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same
  live-preview gap as the rest of the `comingsoon_*` family), so the live
  preview DOM is unreachable for this slug. Fallback (documented per
  `docs/replication.md`): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_05.zip`
  (HTTP 200, 254,330 B, `application/zip`) was downloaded and extracted to
  `/tmp/cs05/comingsoon_05/` — `index.html` (2,068 B), `css/style.css`
  (10,652 B), `js/snippet.js` (3,069 B), `README.md` (1,260 B),
  `images/icons/favicon.ico`, and the `fonts/Ubuntu-Regular|Bold.woff2` pair
  plus a FontAwesome subset (4,096 B). That zip (the real rendered template's
  own files) is the DOM/CSS/JS reference, together with the TEMPLATES.md
  screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-5.jpg
  (served as AVIF, 1200×972, converted to PNG with `avifdec` and reviewed
  visually 2026-10-11)
- **New name:** `advent` (apps/advent, `@free-react-templates/advent`) — the
  source demo title "Coming Soon 5" / "Coming Soon V05" and the demo footer
  credit are never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

The reference is one full-viewport screen, not a scrolling site. The background
is the brand wash on `.bg-g1`:
`background:#fb5f7e; background:linear-gradient(bottom, #f77062, #fe5196)` —
coral `#f77062` at the BOTTOM, pink `#fe5196` at the TOP, which is exactly what
the screenshot shows (a pink upper half easing into a coral/salmon lower half);
`#fb5f7e` is the solid fallback that stands in where the (legacy-syntax)
gradient declaration is dropped. The recreation must render the same
`to top` two-stop gradient with the `#fb5f7e` fallback.

The screen wrapper is
`.bg-g1.size1.flex-w.flex-col-c-sb.p-l-15.p-r-15.p-b-30` — `width:100%`,
`min-height:100vh`, 15px side padding, 30px BOTTOM padding and NO top padding,
as a flex COLUMN with `justify-content:space-between` and `align-items:center`.
`space-between` plus the flush countdown is what produces the reference layout:
the countdown bar sits hard against the top edge (square top corners), the
middle block floats in the optical centre, and the credit line sits 30px above
the bottom.

The countdown bar is FIRST in the DOM
(`.flex-w.flex-c.cd100.wsize1.bor1`): a wrapping, centre-justified row
(`max-width:100%; width:360px`) with `border-bottom-left-radius:15px;
border-bottom-right-radius:15px; overflow:hidden`, holding four
`.flex-col-c-m.size2.bg0` cells — `width:calc((100% - 3px) / 4)`, `height:92px`,
`background-color:#fff`, 1px `#e6e6e6` right border on the first three (the
fourth cell, `.flex-col-c-m.size2.bg0`, deliberately carries no
`.bor2`). Each cell stacks a number (`span.l1-txt3.p-b-7.days|hours|minutes
|seconds`, initial DOM values 35 / 17 / 50 / 39) over a label
(`span.s1-txt1` — Days / Hours / Minutes / Seconds).

The middle block (`.flex-col-c.w-full.p-t-50.p-b-80`) is a centred full-width
flex column with 50px top / 80px bottom padding, in order: an h3 "Coming Soon"
(`.l1-txt1.txt-center.p-b-10`); a line "Our website is under construction,
follow us for update now!" (`p.txt-center.l1-txt2.p-b-43.wsize2`); and an
inline form (`.flex-w.flex-c-m.w-full.contact100-form.validate-form`) holding a
Name well, an Email well and the submit button, each carrying `.where1`
(`margin:0 10px 20px 10px`) so the three controls sit on one wrapping row with
20px below them.

The form controls share the reference pills: the input wells
(`.wrap-input100.validate-input.where1`) are `width:280px;
max-width:calc(100% - 20px); height:50px; background:#fff; border-radius:25px`,
their `input100` fields `padding:0 20px 0 30px; border-radius:25px` with
`#999999` placeholders ("Name" / "Email") and Ubuntu-Bold 15px `#555555` text,
and a focus bloom `box-shadow:0 0 10px 1px rgba(255,255,255,0.5)` over `.4s`.
The button (`button.flex-c-m.s1-txt4.size3.how-btn.trans-04.where1` — "Get
Updates") is `width:280px; max-width:calc(100% - 20px); height:50px`, dark
`#222222` fill, `border-radius:25px`, white Ubuntu-Bold 15px label, and on hover
its `::before` overlay — `linear-gradient(top, #f65342, #fb3282)` — fades
`opacity:0 → 1` over `.4s` while the base fill goes transparent.

The credit line (`.s1-txt2.txt-center`, source text "@ 2017 Coming Soon
Template. Designed by Colorlib") closes the screen and is replaced in the
recreation by the Component Dock attribution.

The palette is a warm pink/coral brand wash plus two neutrals: brand gradient
`#f77062` (bottom) → `#fe5196` (top) with `#fb5f7e` solid fallback, hover
overlay gradient `#f65342` → `#fb3282`, dark action `#222222`, white surfaces
`#fff` with `#555555` numbers and `#7d8da6` labels plus the `#e6e6e6` divider,
body/placeholder greys `#555555` / `#999999`, and the `#c80000` validation red.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V05" (source:
  https://colorlib.com/wp/template/comingsoon_05/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3036; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/advent` absent, TEMPLATES.md line 3036 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_05/ →
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11; the
  `comingsoon05`, `comingsoon-05`, `comingsoon5` and `comingsoon/05` variants
  are 404 too). Fallback used (documented): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_05.zip` (HTTP 200,
  254,330 B, `application/zip`), downloaded and extracted to
  `/tmp/cs05/comingsoon_05/`. Reference artifacts: `/tmp/cs05/cs05.zip`,
  `/tmp/cs05/comingsoon_05/`, `/tmp/coming-soon-5.png` (converted screenshot,
  1200×972). Research date: 2026-10-11. The source HTML/CSS/JS is authoritative
  for section structure, copy, tokens, and behaviour.
- **Screenshot:** `coming-soon-5.jpg` (AVIF, converted and reviewed visually
  2026-10-11) confirms the layout: the whole viewport is a vertical pink→coral
  gradient (pink `#fe5196` upper half, coral `#f77062` lower half); PINNED TO
  THE VERY TOP EDGE, flush and with square top corners, a single white rounded
  countdown bar holding four cells split by faint vertical hairlines reading
  "35 / DAYS", "17 / HOURS", "59 / MINUTES", "57 / SECONDS" (bold dark-grey
  numbers, tiny uppercase grey-blue labels); then a large empty band; then a
  centred white uppercase "COMING SOON" headline; a thinner white two-line line
  "Our website is under construction, follow us for update now!"; and one
  centred inline row of three pills — white "Name" and "Email" inputs and a
  dark near-black "Get Updates" button, all rounded ends; and at the very
  bottom a small white credit line. No navigation, no imagery, no footer band —
  the gradient and the countdown carry the design.
- **Stylesheets in the reference:** a single `css/style.css` (no framework, no
  jQuery, no CDN dependency at runtime — the sheet even carries a `:where(html)
  … all: revert` guard so a host page's reboot cannot leak in) with two
  self-hosted `@font-face` blocks (Ubuntu-Regular / Ubuntu-Bold) and one
  FontAwesome subset face. The recreation uses Tailwind 4 + React state; the
  revert guard, the reboot, and all source class names are NEVER copied.
- **Key theme rules (verified in `css/style.css`):**
  - Screen: `.size1{width:100%; min-height:100vh}` on
    `.bg-g1.size1.flex-w.flex-col-c-sb.p-l-15.p-r-15.p-b-30` (flex column,
    `flex-wrap:wrap`, `justify-content:space-between`, `align-items:center`,
    15px left/right and 30px bottom padding, NO top padding) — no responsive
    padding override in this sheet
  - Background: `.bg-g1{background:#fb5f7e; background:linear-gradient(bottom,
    #f77062, #fe5196)}` (legacy direction keyword; rendered coral bottom → pink
    top, `#fb5f7e` as the solid fallback)
  - Countdown bar: `.flex-w.flex-c.cd100.wsize1.bor1` with
    `.wsize1{max-width:100%; width:360px}` and
    `.bor1{border-bottom-right-radius:15px; border-bottom-left-radius:15px;
    overflow:hidden}`; cells `.size2{width:calc((100% - 3px) / 4);
    height:92px}` + `.bg0{background-color:#fff}` (last cell only) + three
    `.bor2{border-right:1px solid #e6e6e6}` cells
  - Countdown number: `.l1-txt3{font-family:Ubuntu-Bold; font-size:36px;
    color:#555555; line-height:1}` with `.p-b-7`; label `.s1-txt1{
    font-family:Ubuntu-Regular; font-size:12px; color:#7d8da6; line-height:1;
    text-transform:uppercase}`
  - Middle block: `.flex-col-c.w-full.p-t-50.p-b-80` (column, align-centre,
    `width:100%`)
  - Headline: `.l1-txt1{font-family:Ubuntu-Bold; font-size:60px; color:#fff;
    line-height:1.2; text-transform:uppercase}` with `.txt-center.p-b-10`
  - Sub line: `.l1-txt2{font-family:Ubuntu-Regular; font-size:24px; color:#fff;
    line-height:1.5}` with `.txt-center.p-b-43.wsize2`
    (`.wsize2{max-width:526px}`)
  - Form row: `.flex-w.flex-c-m.w-full.contact100-form.validate-form`
    (wrapping, centre-justified AND centre-aligned, `width:100%`); each control
    spaced by `.where1{margin:0 10px 20px 10px}`
  - Input well: `.wrap-input100{width:280px; max-width:calc(100% - 20px);
    height:50px; background:#fff; border-radius:25px}` +
    `.validate-input{position:relative}`; `input.input100{display:block;
    width:100%; height:100%; padding:0 20px 0 30px; border-radius:25px;
    transition:all .4s}`
  - Input focus bloom: `.input100:focus{box-shadow:0 0px 10px 1px
    rgba(255,255,255,0.5)}`
  - Input text / placeholder: `.s1-txt3{font-family:Ubuntu-Bold; font-size:15px;
    color:#555555; line-height:1.4}`; `.placeholder0` `#999999`
  - Button: `.size3{width:280px; max-width:calc(100% - 20px); height:50px}` +
    `.how-btn{padding:0px 20px; background-color:#222222; border-radius:25px;
    color:#fff; position:relative; z-index:1; overflow:hidden}` +
    `.how-btn::before{content:""; display:block; position:absolute; z-index:-1;
    width:100%; height:100%; top:0; left:0; background:#fb2e57;
    background:linear-gradient(top, #f65342, #fb3282); transition:all .4s;
    opacity:0}` + `.how-btn:hover{background-color:transparent}` +
    `.how-btn:hover:before{opacity:1}`; label `.s1-txt4{font-family:Ubuntu-Bold;
    font-size:15px; color:#fff; line-height:1.4}`; `.trans-04` = all `.4s`
  - Credit line: `.s1-txt2{font-family:Ubuntu-Regular; font-size:14px;
    color:#fff; line-height:1.5}` with `.txt-center`
  - Validation bubble: `.alert-validate::before{content:attr(data-validate);
    max-width:70%; background-color:#fff; border:1px solid #c80000;
    border-radius:15px; padding:4px 25px 4px 10px; top:50%;
    transform:translateY(-50%); right:12px; pointer-events:none;
    font-family:Ubuntu-Regular; color:#c80000; font-size:13px; line-height:1.4;
    text-align:left; visibility:hidden; opacity:0; transition:opacity .4s}` +
    `.alert-validate::after{content:"\f071"; font-family:FontAwesome;
    display:block; position:absolute; color:#c80000; font-size:14px; top:50%;
    transform:translateY(-50%); right:18px}` + `.alert-validate:hover:before{
    visibility:visible; opacity:1}` and, inside `@media (max-width:992px)`,
    `.alert-validate::before{visibility:visible; opacity:1}` — recreation uses
    a lucide-react `AlertTriangle` instead of the icon-font glyph
  - Base type: `body,html{font-family:Arial,sans-serif; font-size:15px;
    color:#666666; background-color:#fff}` (visible type is entirely Ubuntu);
    `input,textarea{display:block; outline:none; border:none}`;
    `button{outline:none; border:none; background:transparent; cursor:pointer}`
  - Fonts (source, self-hosted woff2): Ubuntu-Regular (400) / Ubuntu-Bold
    (700) — recreation loads Ubuntu (400 / 700) from Google Fonts via `<link>`
    in `index.html`
- **Content map (source DOM):**
  `div.bg-g1.size1.flex-w.flex-col-c-sb.p-l-15.p-r-15.p-b-30` containing, in
  order:
  1. `div.flex-w.flex-c.cd100.wsize1.bor1` — four
     `div.flex-col-c-m.size2.bg0(.bor2)` cells, each a
     `span.l1-txt3.p-b-7.days|hours|minutes|seconds` (DOM: 35 / 17 / 50 / 39)
     over a `span.s1-txt1` label (Days / Hours / Minutes / Seconds)
  2. `div.flex-col-c.w-full.p-t-50.p-b-80` —
     - `h3.l1-txt1.txt-center.p-b-10` — "Coming Soon"
     - `p.txt-center.l1-txt2.p-b-43.wsize2` — "Our website is under
       construction, follow us for update now!"
     - `form.flex-w.flex-c-m.w-full.contact100-form.validate-form` —
       `div.wrap-input100.validate-input.where1[data-validate="Name is
       required"] > input.s1-txt3.placeholder0.input100[type=text][name=name]
       [placeholder=Name]`; `div.wrap-input100.validate-input.where1
       [data-validate="Email is required: ex@abc.xyz"] > input.s1-txt3
       .placeholder0.input100[type=text][name=email][placeholder=Email]`;
       `button.flex-c-m.s1-txt4.size3.how-btn.trans-04.where1` — "Get Updates"
       (note: the source e-mail field is `type=text`, never `type=email`)
  3. `span.s1-txt2.txt-center` — the demo credit line (source text "@ 2017
     Coming Soon Template. Designed by Colorlib"; replaced in the recreation by
     the Component Dock attribution)
- **Behaviour (`js/snippet.js`, two framework-free features):**
  1. `.validate-form` submit validation — per field, e-mail fields (and any
     `name="email"`) must match `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`, other fields
     must be non-empty; a failure adds `.alert-validate` to the closest
     `.validate-input` and calls `preventDefault`; the class is removed on
     `focus`. There is NO success path in the source (a valid submit simply
     reloads the demo page) — the recreation shows a React-state confirmation
     instead and must not navigate.
  2. Countdown on `.cd100` (config `{"Y":0,"M":0,"D":35,"h":18,"m":0,"s":0}`):
     the literal target `new Date(0, -1, 35, 18, 0, 0)` is in the past, so the
     source falls back to `Date.now() + 35 days + 18 hours` — the demo must
     never read `00:00:00`; ticks every 1000 ms; the day value is written
     unpadded (`set('days', r.d)`) while hours, minutes and seconds all go
     through `('0' + n).slice(-2)`; the interval clears when the remaining time
     reaches zero and on unmount.

## Design tokens

| Token | Value | Where |
| --- | --- | --- |
| brand gradient (page) | `#f77062` (bottom) → `#fe5196` (top) — source `linear-gradient(bottom, #f77062, #fe5196)` | full-viewport background |
| gradient fallback | `#fb5f7e` | background-color behind the gradient |
| gradient (button wash) | `#f65342` → `#fb3282` — source `linear-gradient(top, #f65342, #fb3282)` | dark pill button hover overlay |
| button overlay fallback | `#fb2e57` | behind the hover overlay gradient |
| dark action | `#222222` | "Get Updates" pill button |
| countdown surface | `#fff` | countdown cells, input wells |
| countdown divider | `#e6e6e6` | 1px right border on cells 1–3 |
| countdown number | `#555555` | countdown numbers (36px bold) |
| countdown label | `#7d8da6` | countdown labels (12px uppercase) |
| headline / sub / button label / credit | `#fff` | hero block and footer over the gradient |
| input text | `#555555` | typed values in both pills |
| placeholder | `#999999` | "Name" / "Email" placeholders |
| error red | `#c80000` | validation bubble border/text/icon |
| fonts | Ubuntu-Bold (headline 60px, countdown numbers 36px, button + input text 15px), Ubuntu-Regular (sub line 24px, countdown labels 12px, credit 14px) | typography |
| radii | 25px (input wells, button, their inner inputs), 15px (countdown bar bottom corners), 15px (validation bubble) | shapes |
| screen | `width:100%`, `min-height:100vh`, padding `0 15px 30px` (no top padding), flex column `space-between` centred, wrapping | layout |
| countdown bar | `width:360px` (`max-width:100%`), four cells `calc((100% - 3px) / 4)` × `92px`, white, `#e6e6e6` right borders on cells 1–3, `border-bottom-radius:15px`, `overflow:hidden`, flush against the top edge | top of screen |
| countdown number | Ubuntu-Bold 36px/1 `#555555`, `7px` bottom padding | cells |
| countdown label | Ubuntu-Regular 12px/1 `#7d8da6` uppercase | cells |
| middle block | centred flex column, `width:100%`, `padding 50px 0 80px` | hero block |
| headline | Ubuntu-Bold 60px/1.2 white uppercase, centred, `10px` bottom padding | hero |
| sub line | Ubuntu-Regular 24px/1.5 white, centred, `max-width:526px`, `43px` bottom padding | hero |
| form row | wrapping, centred, `width:100%`; each control `margin:0 10px 20px 10px` | hero |
| input well | `width:280px` (`max-width:calc(100% - 20px)`), `height:50px`, `background:#fff`, radius 25px, `position:relative` | form |
| input field | `width/height:100%`, `padding:0 20px 0 30px`, radius 25px, Ubuntu-Bold 15px/1.4 `#555555`, `#999999` placeholder, `.4s` transition | form |
| input focus bloom | `box-shadow:0 0 10px 1px rgba(255,255,255,0.5)` | focused field |
| pill button | `width:280px` (`max-width:calc(100% - 20px)`), `height:50px`, `padding:0 20px`, `background:#222222`, radius 25px, white Ubuntu-Bold 15px/1.4 label, `overflow:hidden`; hover → transparent fill with the `#f65342 → #fb3282` overlay at `opacity:1`, both `.4s` | form |
| credit line | Ubuntu-Regular 14px/1.5 white, centred | footer |
| validation bubble | white fill, `1px solid #c80000`, radius 15px, `padding 4px 25px 4px 10px`, right `12px`, vertically centred, `max-width:70%`, Ubuntu-Regular 13px/1.4 `#c80000`, opacity over `.4s`; icon 14px `#c80000` at right `18px` | error state |
| validation visibility | hidden by default; shown on field hover; always shown at ≤992px | error state |
| countdown behaviour | target `{Y:0,M:0,D:35,h:18,m:0,s:0}`; past target → `now + 35 d + 18 h`; 1 s tick; days unpadded, h/m/s padded to 2; interval cleared at zero / on unmount | counter |

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/comingsoon_05/index.html` | HTTP 200 · 2,138 B · title `Coming Soon 5` |
| stylesheet | `https://colorlib.com/etc/cs/comingsoon_05/css/style.css?v=61a959d8` | HTTP 200 · 10,652 B · sha256 `733b4dc65427` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×10,
`#f77062`×4, `#fe5196`×4, `#999999`×4, `#f65342`×4, `#fb3282`×4,
`#c80000`×3, `#555555`×2, `#212529`×1, `#666666`×1.

**Low-chroma values the sheet actually uses** — `#999999`, `#555555`,
`#212529`, `#666666`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Full-viewport gradient screen

The page is one screen, not a scrolling site: a vertical pink→coral gradient
with a space-between flex column, so the countdown bar pins to the very top and
the credit line to the bottom.

#### Scenario: Page renders as one gradient screen
- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** a single wrapper occupies `width:100%; min-height:100vh` with 15px
  side padding and 30px bottom padding (NO top padding) and a
  `linear-gradient(to top, #f77062, #fe5196)` background — coral at the bottom,
  pink at the top, exactly as the screenshot shows — with `#fb5f7e` as the
  solid fallback and no photographic background
- **And** the wrapper is a wrapping flex column with
  `justify-content:space-between` and centre alignment, holding the countdown
  bar, the centred middle block and the footer attribution line, in that order
- **And** the countdown bar therefore sits flush against the top edge with
  square top corners, and the attribution line sits 30px above the bottom
- **And** the middle block is a centred full-width flex column with 50px top and
  80px bottom padding
- **And** there is NO navbar, NO imagery layer and NO scrolling section

### Feature: Countdown bar

One white bar of four hairline-split cells pinned to the top edge, with a live
value per cell.

#### Scenario: Countdown bar renders as the reference group
- **Given** the screen renders
- **When** the countdown bar is visible
- **Then** it renders as ONE wrapping, centre-justified row of `width:360px`
  capped at `max-width:100%`, its bottom corners rounded 15px
  (`overflow:hidden`) and its top corners square against the viewport edge
- **And** it holds four cells of `width:calc((100% - 3px) / 4)` and `height:92px`
  with `background:#fff`, the first three carrying a `1px solid #e6e6e6` right
  border and the fourth carrying none (source `.bor2` on three cells only)
- **And** each cell stacks an Ubuntu-Bold 36px/1 `#555555` number (7px bottom
  padding) above an Ubuntu-Regular 12px/1 uppercase `#7d8da6` label — Days,
  Hours, Minutes, Seconds

#### Scenario: Countdown ticks and never reads zero
- **Given** the countdown bar renders
- **When** time passes
- **Then** the values update once per second toward a target date, with hours,
  minutes and seconds zero-padded to two digits while the DAY value is NOT
  padded (source pads `('0'+n).slice(-2)` for h/m/s only)
- **And** when the configured target is already in the past the countdown runs
  toward `now + 35 days + 18 hours` instead, so it never reads zero of
  everything (source rule), and the interval stops at zero and is cleared on
  unmount

### Feature: Headline block

The white uppercase title plus its lighter subtitle, centred in the middle of
the screen.

#### Scenario: Headline and subtitle render with the reference typography
- **Given** the screen renders
- **When** the middle block is visible
- **Then** a heading renders "Coming Soon"-equivalent copy in Ubuntu-Bold
  60px/1.2 white, uppercase, centred, with 10px bottom padding
- **And** beneath it a line renders in Ubuntu-Regular 24px/1.5 white, centred,
  capped at `max-width:526px`, with 43px bottom padding (source: "Our website
  is under construction, follow us for update now!")
- **And** the copy is the same _kind_ as the source (paraphrasable) and never
  reuses the source demo title "Coming Soon 5" / "Coming Soon V05"

### Feature: Inline get-updates form

Two white pill inputs and one dark pill button on a single wrapping row.

#### Scenario: Form renders the reference pills
- **Given** the screen renders
- **When** the form row is visible
- **Then** the three controls sit on one wrapping, centre-justified row of
  `width:100%`, each with `margin:0 10px 20px 10px`, in order: a Name input
  well, an Email input well, and the "Get Updates" button
- **And** each input well is `width:280px` capped at `max-width:calc(100% - 20px)`,
  `height:50px`, `background:#fff`, `border-radius:25px` and
  `position:relative`, its field filling it with `padding:0 20px 0 30px`,
  `border-radius:25px`, Ubuntu-Bold 15px/1.4 `#555555` text and a `#999999`
  placeholder ("Name" / "Email") over a `.4s` transition
- **And** focusing a field applies the source bloom
  `box-shadow:0 0 10px 1px rgba(255,255,255,0.5)`
- **And** the button is `width:280px` capped at `max-width:calc(100% - 20px)`,
  `height:50px`, `padding:0 20px`, filled `#222222`, `border-radius:25px`,
  `overflow:hidden`, labelled "Get Updates" in Ubuntu-Bold 15px/1.4 white
- **And** hovering the button fades in a `linear-gradient(to bottom, #f65342,
  #fb3282)` overlay from `opacity:0` to `1` over `.4s` while the base fill turns
  transparent, clipped to the pill

#### Scenario: Form validates as in the reference
- **Given** the form renders
- **When** the user submits with an empty Name or a missing/malformed Email
- **Then** the offending field's container reveals a white bubble carrying its
  message (`1px solid #c80000`, `border-radius:15px`,
  `padding:4px 25px 4px 10px`, `max-width:70%`, right `12px` and vertically
  centred, Ubuntu-Regular 13px/1.4 `#c80000`) plus a lucide `AlertTriangle`
  glyph (`#c80000`, 14px, right 18px) replacing the source FontAwesome `\f071`
- **And** the bubble follows the source visibility rule — hidden until an
  invalid submit, then visible while that field is hovered and ALWAYS visible at
  ≤992px — and clears on focus
- **And** the e-mail field accepts the source pattern
  `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` (the source marks it `type=text` and relies
  on that name-based check)
- **And** an invalid submit never navigates, and a valid submit is accepted as
  React state showing a confirmation (the source has no success path at all)

### Feature: Design tokens & typography

The recreation exposes the reference palette and fonts as Tailwind 4 `@theme`
tokens.

#### Scenario: Theme tokens match the reference
- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: gradient stops `#f77062` / `#fe5196` (solid
  `#fb5f7e` fallback), hover overlay `#f65342` / `#fb3282` (solid `#fb2e57`
  fallback), dark `#222222`, surface `#fff`, divider `#e6e6e6`, number
  `#555555`, label `#7d8da6`, input text `#555555`, placeholder `#999999`,
  error `#c80000`
- **And** Ubuntu (400 / 700) loads via a Google Fonts `<link>` in `index.html`
- **And** shapes are radius 25px (input wells, their fields, the button) and
  15px (countdown bar bottom corners, validation bubble); the interactive
  transitions are `.4s` (input, button fill, hover overlay)

### Feature: Footer attribution

A single Component Dock attribution replacing the source credit line.

#### Scenario: Attribution links Component Dock
- **Given** the page renders
- **When** the footer line is visible
- **Then** it renders in Ubuntu-Regular 14px/1.5 white, centred, and reads a
  Component-Dock attribution (e.g. "Made with ♥ by Component Dock") linking
  `https://www.componentdock.com/`, branded "Component Dock" — never ColorLib,
  "Colorlib", the source demo title, the source credit line, or the source slug

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/advent/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/advent/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Layout 1:1 with the reference: one `min-h-screen` wrapping flex-column
      wrapper (`space-between`, centred, `padding 0 15px 30px` — no top padding)
      with a `to top` `#f77062 → #fe5196` gradient (solid `#fb5f7e` fallback);
      countdown bar flush at the top, middle block centred (flex column,
      `padding 50px 0 80px`), attribution 30px above the bottom; no navbar, no
      sections below the fold
- [ ] Block order matches: countdown bar → headline → sub line → form row →
      credit line
- [ ] Countdown bar: `width:360px` capped at `100%`, bottom corners rounded
      15px with `overflow:hidden` and square top corners; four cells
      `calc((100% - 3px) / 4)` × `92px` on `#fff` with `1px solid #e6e6e6`
      right borders on the first three and none on the fourth
- [ ] Countdown values: Ubuntu-Bold 36px/1 `#555555` numbers (7px bottom
      padding) over Ubuntu-Regular 12px/1 uppercase `#7d8da6` labels
      (Days/Hours/Minutes/Seconds); live 1-second tick; days unpadded, h/m/s
      zero-padded; past target falls back to now + 35 d + 18 h; interval cleared
      on unmount/zero
- [ ] Headline: Ubuntu-Bold 60px/1.2 white uppercase, centred, `10px` bottom
      padding; sub line Ubuntu-Regular 24px/1.5 white, centred,
      `max-width:526px`, `43px` bottom padding
- [ ] Form row: wrapping, centred, `width:100%`, controls in order
      Name → Email → "Get Updates", each `margin:0 10px 20px 10px`
- [ ] Input well: `280px` capped at `calc(100% - 20px)`, `height:50px`, white,
      radius 25px, `position:relative`; field `padding:0 20px 0 30px`, radius
      25px, Ubuntu-Bold 15px `#555555`, `#999999` placeholder, `.4s` transition,
      focus bloom `box-shadow:0 0 10px 1px rgba(255,255,255,0.5)`
- [ ] Button: `280px` capped at `calc(100% - 20px)`, `height:50px`,
      `padding:0 20px`, `#222222`, radius 25px, `overflow:hidden`, white
      Ubuntu-Bold 15px/1.4 label; hover turns the fill transparent and fades in
      the `to bottom` `#f65342 → #fb3282` overlay to `opacity:1`, `.4s`
- [ ] Validation: invalid/empty Name or Email → white bubble (`1px solid
      #c80000`, radius 15px, `padding 4px 25px 4px 10px`, `max-width:70%`, right
      12px, Ubuntu-Regular 13px `#c80000`) with a lucide `AlertTriangle` (14px
      `#c80000`, right 18px); hidden until an invalid submit, then visible on
      field hover and always at ≤992px; cleared on focus; invalid submit never
      navigates; valid submit shows a React-state confirmation
- [ ] Ubuntu (400 / 700) via Google Fonts `<link>`; radii 25px / 15px;
      transitions `.4s`
- [ ] No imagery is required by the design; any placeholder used is
      `picsum.photos/seed/advent-*`; the only icon is lucide-react
      `AlertTriangle` (replacing the source FontAwesome `\f071`); no copied
      assets, font files, or CSS; no jQuery, no framework, no CDN runtime
- [x] Component Dock attribution links `https://www.componentdock.com/`
- [x] Zero `colorlib` / source-demo-title / `comingsoon_05` references anywhere
      in `apps/advent` (comments included)
- [x] App folder `apps/advent`, package `@free-react-templates/advent`,
      `homepage` `https://advent.free.componentdock.com`, `public/CNAME`
      `advent.free.componentdock.com`, lockfile registers the workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh advent` passes
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
