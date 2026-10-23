# Template: Incoming (Coming Soon)

## Purpose

Incoming is a coming-soon / under-construction page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Coming Soon
V03" template (source slug `comingsoon_03` — a single centred translucent white
card over a full-bleed light photo, holding a small logo wordmark, one grey
under-construction line, a row of four dark rounded countdown tiles, and a
compact grey email input plus purple "Get Notified" button), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_03/
  (page title "Coming Soon V03 - Free Under Construction Template 2026",
  HTTP 200, 109,371 B, verified 2026-10-11)
- **Preview:** https://preview.colorlib.com/theme/comingsoon_03/ returns
  **HTTP 404** (9 B, `text/plain`, verified 2026-10-11);
  `.../theme/comingsoon_03/index.html` is 404 too, and the ColorLib template — **re-probed 2026-10-23: the demo serves** (measured record below)
  page exposes only the anchor preview
  `https://preview.colorlib.com/#comingsoon_03` and a downloadable source zip
  (`https://preview.colorlib.com/downloads/free/comingsoon_03.zip`, HTTP 200,
  154,001 B, `application/zip`). Replication therefore used that official
  source zip (`index.html` + `css/style.css` + `js/snippet.js`) as the
  DOM/CSS/behaviour reference, plus the TEMPLATES.md screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-3.jpg
  (served as AVIF, 1200×972; reviewed visually 2026-10-11)
- **New name:** `incoming` (apps/incoming, `@free-react-templates/incoming`) —
  the source demo brand "Coming Soon 3" / "Coming Soon V03" (and the demo
  wordmark rendered in the design) is never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cs/comingsoon_03/index.html` — HTTP 200, 2,103 B, title `Coming Soon 3`.
>
> Sheet: `https://colorlib.com/etc/cs/comingsoon_03/css/style.css?v=1c38656d` (10,104 B).
> Faces it actually declares: `Barlow-Bold`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

The reference is a single full-viewport screen, not a scrolling site. A
full-bleed light photograph fills the viewport (`background-position:center`,
`background-repeat:no-repeat`, `background-size:cover`); the page is one
`min-height:100vh` flex row that centres its content both axes, with 55px
vertical and 15px horizontal padding. Centred on top of the photo is ONE card:
`880px` wide (capped at `100%`), `border-radius:18px`, background
`rgba(255,255,255,0.8)`, padded `175px` top / `45px` bottom / `15px` sides
(80px top at ≤576px). Inside the card, in order: a centred logo image; a grey
Barlow-Bold 25px line "Our website is under construction" (`33px` top, `68px`
bottom padding); a `min-height:230px` centred, wrapping row of four `90×100px`
tiles (`background #333333`, `border-radius:10px`, `margin 0 18px 25px`), each
stacking a white Barlow-Medium 40px number over a white Barlow-Regular 14px
label (Days / Hours / Minutes / Seconds); a wrapping centred form row (`55px`
top padding) with a `220px` (`max-width: calc(100% - 10px)`) `40px`-tall
`#e6e6e6` input (radius 5px, purple `#846add` text, `#999999` "Your Email"
placeholder) beside a purple `#846add` "Get Notified" button (`min-width:120px`,
`40px` tall, radius 5px, 20px side padding, hover `#333333`); and a small grey
line "I promise to **never** spam" with `never` underlined.

The palette is two accents plus neutrals: the brand purple `#846add` (input
text, button fill, focus ring) and dark slate `#333333` (countdown tiles, button
hover) over grey neutrals (`#e6e6e6` input well, `#999999` headline + placeholder
+ small print, `#666666` body), all on the translucent white card. The only red
is the `#c80000` validation bubble.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V03" (source:
  https://colorlib.com/wp/template/comingsoon_03/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3034; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/incoming` absent, TEMPLATES.md line 3034 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_03/ →
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11).
  Fallback (documented): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_03.zip` (HTTP 200,
  154,001 B, `application/zip`) was downloaded and extracted to
  `/tmp/prep3/src03/comingsoon_03/` (`index.html`, 2,033 B; `css/style.css`,
  10,104 B; `js/snippet.js`, 3,069 B; `README.md`, 1,260 B; plus
  `images/bg01.jpg`, `images/icons/logo.png`, `images/icons/favicon.ico` and
  the `fonts/Barlow-Regular|Medium|Bold.woff2` set). Reference artifacts:
  `/tmp/prep3/comingsoon_03.zip`, `/tmp/prep3/src03/`, `/tmp/prep3/shot3.png`
  (converted screenshot). Research date: 2026-10-11. The source HTML/CSS/JS is
  authoritative for section structure, copy, tokens, and behaviour.
- **Screenshot:** `coming-soon-3.jpg` (reviewed visually 2026-10-11) confirms
  the layout: a wide translucent white rounded card floating on a light,
  softly blurred photograph (a large green leaf — an anthurium/peace-lily leaf
  — entering from the left, a clear glass and a white plinth low-left); near
  the card's upper third a small dark wordmark with a tiny purple sun/asterisk
  glyph; below it the grey line "Our website is under construction"; then a
  centred row of four dark rounded tiles reading "35 Days", "17 Hours",
  "59 Minutes", "57 Seconds" (large white numbers, small white labels); after
  a wide vertical gap, a light grey input reading "Your Email" next to a
  purple button reading "Get Notified"; and directly under them the small grey
  line "I promise to never spam". No navigation and no footer band.
- **Stylesheets in the reference:** a single `css/style.css` (no framework, no
  jQuery, no CDN — the snippet is self-contained: a Bootstrap-4-style reboot,
  its own namespaced utility classes, one `@font-face` block for
  Barlow-Regular/Medium/Bold and one FontAwesome subset face). The recreation
  uses Tailwind 4 (which resets itself) + React state; the reboot and all
  source class names are NEVER copied.
- **Key theme rules (verified in `css/style.css`):**
  - Card: `.wsize1{max-width:100%;width:880px}` +
    `.bor1{border-radius:18px}` + `.bg1{background-color:rgba(255,255,255,0.8)}`
    + `.p-t-175.p-b-45.p-l-15.p-r-15` (`.respon1` → `padding-top:80px` at
    ≤576px)
  - Screen: `.size1{width:100%;min-height:100vh}` on both the outer wrapper
    (`.bg-img1.size1.flex-w.flex-c-m.p-t-55.p-b-55.p-l-15.p-r-15`, inline
    `background-image:url('images/bg01.jpg')`, `.bg-img1` =
    `background-position:center;background-repeat:no-repeat;
    background-size:cover`) and the card
  - Headline: `.m1-txt1{font-family:Barlow-Bold;font-size:25px;color:#999999;
    line-height:1.2}` with `.p-t-33.p-b-68` and `.txt-center`
  - Countdown tile: `.how-countdown{background-color:#333333;
    border-radius:10px;margin:0px 18px 25px 18px}` + `.size2{width:90px;
    height:100px}`; row `.wsize2`+`.hsize1{min-height:230px}` (wrapping,
    centred: `.flex-w.flex-c`)
  - Countdown number: `.l1-txt1{font-family:Barlow-Medium;font-size:40px;
    line-height:1;color:#fff}` with `.p-b-9`; label `.s1-txt1{
    font-family:Barlow-Regular;font-size:14px;color:#fff;line-height:1}`
  - Input well: `.wrap-input100{width:220px;max-width:calc(100% - 10px);
    position:relative;background-color:#e6e6e6;height:40px;
    border-radius:5px}`; `input.input100{height:100%;padding:0 20px}`; text
    `.s1-txt2{font-family:Barlow-Regular;font-size:15px;color:#846add;
    line-height:1.4}`; placeholder `.placeholder0` `#999999`
  - Focus ring: `.focus-input100{position:absolute;width:100%;height:100%;
    top:0;left:0;pointer-events:none;border:1px solid #846add;
    border-radius:5px;visibility:hidden;opacity:0;transition:all .4s;
    transform:scaleX(1.1) scaleY(1.2)}` and
    `.input100:focus + .focus-input100{visibility:visible;opacity:1;
    transform:scale(1)}`
  - Button: `.size3{min-width:120px;height:40px}` +
    `.how-btn{padding:0 20px;background-color:#846add;border-radius:5px}` +
    `.how-btn:hover{background-color:#333333}` + label `.s1-txt3{
    font-family:Barlow-Regular;font-size:15px;color:#fff;line-height:1.4}` +
    `.trans-04{transition:all .4s}`; row `.contact100-form{width:100%}` with
    `.p-t-55` and `.where1{margin:20px 5px 0px 5px}` on both controls
  - Small print: `.s1-txt4{font-family:Barlow-Regular;font-size:14px;
    color:#999999;line-height:1.5}` with `.p-t-10`; the underlined word is
    `.bor2{border-bottom:1px solid #999999}`
  - Validation bubble: `.alert-validate::before{content:attr(data-validate);
    max-width:70%;background-color:#fff;border:1px solid #c80000;
    border-radius:2px;padding:4px 25px 4px 10px;top:50%;transform:
    translateY(-50%);right:12px;pointer-events:none;font-family:Barlow-Regular;
    color:#c80000;font-size:13px;line-height:1.4;text-align:left;
    visibility:hidden;opacity:0;transition:opacity .4s}` +
    `.alert-validate::after{content:"\f071";font-family:FontAwesome;
    color:#c80000;font-size:14px;top:50%;transform:translateY(-50%);
    right:18px}`, revealed by `.alert-validate:hover:before` and always inside
    `@media (max-width:992px)` — recreation uses a lucide-react `AlertTriangle`
    instead
  - Logo: `.wrappic1{display:block;width:100%;text-align:center}` +
    `.wrappic1 img{max-width:100%}` (source renders `images/icons/logo.png`)
  - Base type: `body,html{font-family:Arial,sans-serif;font-size:15px;
    color:#666666;background-color:#fff}` over the `#212529` reboot
  - Fonts (source, self-hosted `@font-face` woff2): Barlow-Regular /
    Barlow-Medium / Barlow-Bold — recreation loads Barlow from Google Fonts via
    `<link>` in `index.html`
- **Content map (source DOM):**
  `div.bg-img1.size1.flex-w.flex-c-m.p-t-55.p-b-55.p-l-15.p-r-15`
  (inline `background-image:url('images/bg01.jpg')`) →
  `div.wsize1.bor1.bg1.p-t-175.p-b-45.p-l-15.p-r-15.respon1` (the card)
  containing, in order:
  1. `div.wrappic1 > img[alt=LOGO]` (`images/icons/logo.png`)
  2. `p.txt-center.m1-txt1.p-t-33.p-b-68` — "Our website is under
     construction"
  3. `div.wsize2.flex-w.flex-c.hsize1.cd100` — four
     `div.flex-col-c-m.size2.how-countdown` cells, each a
     `span.l1-txt1.p-b-9.days|hours|minutes|seconds` (DOM: 35 / 17 / 50 / 39)
     over a `span.s1-txt1` label (Days / Hours / Minutes / Seconds)
  4. `form.flex-w.flex-c-m.contact100-form.validate-form.p-t-55` —
     `div.wrap-input100.validate-input.where1[data-validate="Email is
     required: ex@abc.xyz"]` (`input.s1-txt2.placeholder0.input100[type=text
     name=email placeholder="Your Email"]` + `span.focus-input100`) and
     `button.flex-c-m.s1-txt3.size3.how-btn.trans-04.where1` — "Get Notified"
  5. `p.s1-txt4.txt-center.p-t-10` — "I promise to <span
     class="bor2">never</span> spam"

  `js/snippet.js` drives two behaviours, both framework-free: `.validate-form`
  submit validation (per-field `email` regex
  `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` — or non-empty for other fields — adding
  `.alert-validate` to the closest `.validate-input`, removed on focus;
  `preventDefault` when invalid), and a per-second countdown on `.cd100`
  (config `{"Y":0,"M":0,"D":35,"h":18,"m":0,"s":0}`; a target in the past falls
  back to `now + D days + h hours`; `days` is unpadded while hours, minutes and
  seconds are zero-padded via `('0'+n).slice(-2)`; the interval clears at
  zero). There is no slideshow — the reference has a single static background
  image.

## Design tokens

| Token | Value | Where |
| --- | --- | --- |
| brand purple | `#846add` | button fill, input text, focus ring border |
| dark slate | `#333333` | countdown tile background, button hover |
| card | `rgba(255,255,255,0.8)` | card background over the photo |
| input well | `#e6e6e6` | input background |
| muted grey | `#999999` | headline, placeholder, small print |
| body text | `#666666` | page text (on `#212529` reboot) |
| label / number | `#fff` | countdown numbers + labels, button label |
| error red | `#c80000` | validation bubble border/text/icon |
| fonts | Barlow-Bold (headline), Barlow-Medium (numbers), Barlow-Regular (labels, input, button, small print) | typography |
| radii | 18px (card), 10px (countdown tiles), 5px (input + button), 2px (validation bubble) | shapes |
| card | `880px` wide (`max-width:100%`), `padding 175px 15px 45px`, 80px top at ≤576px | layout |
| screen | `width:100%`, `min-height:100vh`, `padding 55px 15px` | layout |
| photo | `background-position:center`, `no-repeat`, `size:cover` (single image) | background |
| countdown tile | `90px × 100px`, `margin 0 18px 25px`, row `min-height:230px` | four tiles |
| countdown number | Barlow-Medium 40px/1, `9px` bottom padding | tiles |
| countdown label | Barlow-Regular 14px/1 white | tiles |
| headline | Barlow-Bold 25px/1.2 `#999999`, `33px` top + `68px` bottom padding | card |
| input | `220px` (`max-width: calc(100% - 10px)`), `40px` tall, `padding 0 20px`, radius 5px | form |
| button | `min-width:120px`, `40px` tall, `padding 0 20px`, radius 5px | form |
| form row | `width:100%`, `55px` top padding, controls `margin 20px 5px 0` | form |
| focus ring | `1px solid #846add`, radius 5px, `scaleX(1.1) scaleY(1.2)` → `scale(1)`, `visibility/opacity` over `.4s` | input focus |
| small print | Barlow-Regular 14px/1.5 `#999999`, `10px` top padding, one word underlined `1px solid #999999` | card |
| transitions | `all .4s` (button), `opacity .4s` (validation bubble) | interaction |
| validation bubble | white fill, `1px solid #c80000`, radius 2px, `padding 4px 25px 4px 10px`, right `12px`, Barlow-Regular 13px/1.4 `#c80000`; icon 14px `#c80000` at right `18px` | error state |
| validation visibility | hidden by default; shown on field hover; always shown at ≤992px | error state |
| countdown behaviour | target `{Y:0,M:0,D:35,h:18,m:0,s:0}`; past target → `now + 35 d + 18 h`; 1 s tick; days unpadded, h/m/s padded | counter |

## Requirements

### Feature: Full-screen photo backdrop and centred card

The page is one full-viewport screen over a static photo, with a single
translucent white card centred on it.

#### Scenario: Page renders as one full-height screen over a photo
- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** a single wrapper occupies `min-height:100vh` with 55px vertical and
  15px horizontal padding, centring its content both axes
- **And** behind it one full-bleed photo renders (a deterministic placeholder,
  e.g. `picsum.photos/seed/incoming-bg-1/1600/1000`, `object-cover`, centred) —
  a SINGLE static image, no slideshow or cross-fade (source behaviour)
- **And** a card renders centred on the photo: `880px` wide capped at `100%`,
  `border-radius:18px`, background `rgba(255,255,255,0.8)`, padded `175px`
  15px `45px` (80px top at ≤576px)
- **And** there is NO navbar, NO logo bar and NO scrolling section below the
  fold

### Feature: Logo wordmark

The small centred mark at the top of the card.

#### Scenario: Wordmark renders without copying the source asset
- **Given** the card renders
- **When** the top of the card is visible
- **Then** a centred brand wordmark renders (own brand, e.g. the text
  "Incoming" in Barlow-Bold with a small lucide-react accent icon, mirroring
  the source's mark-plus-word shape)
- **And** the source logo image is NOT copied (no `logo.png`, no favicon
  asset) and the source demo wordmark / "Coming Soon 3" / "Coming Soon V03"
  strings never appear
- **And** the mark is horizontally centred and capped at 100% width

### Feature: Under-construction headline

The single grey line under the logo.

#### Scenario: Headline renders with the reference typography
- **Given** the card renders
- **When** the headline is visible
- **Then** it reads a single under-construction sentence (source: "Our website
  is under construction") in Barlow-Bold 25px/1.2 `#999999`, centred, with
  33px top and 68px bottom padding
- **And** the copy is the same _kind_ as the source (paraphrasable) and never
  reuses the source demo brand

### Feature: Countdown tiles

Four dark rounded tiles in one wrapping row, each with a live value.

#### Scenario: Countdown renders and ticks
- **Given** the card renders
- **When** the countdown is visible
- **Then** four tiles render in a centred wrapping row with `min-height:230px`,
  each `90px × 100px` with `background #333333`, `border-radius:10px` and
  `margin 0 18px 25px`
- **And** each tile stacks a white Barlow-Medium 40px/1 number (9px bottom
  padding) above a white Barlow-Regular 14px/1 label — Days, Hours, Minutes,
  Seconds
- **And** the values update once per second toward a target date, with hours,
  minutes and seconds zero-padded to two digits while days are NOT padded
  (source pads `('0'+n).slice(-2)` for h/m/s only)
- **And** when the configured target is already in the past the countdown runs
  toward `now + 35 days + 18 hours` instead, so it never reads zero of
  everything (source rule), and the interval stops at zero

### Feature: Notify form

A compact grey input beside a purple button, with inline validation.

#### Scenario: Form renders and validates as in the reference
- **Given** the card renders
- **When** the form row is visible
- **Then** a wrapping centred row renders with `width:100%` and 55px top
  padding, both controls carrying `margin 20px 5px 0`
- **And** a `#e6e6e6` input renders ("Your Email" placeholder), 220px wide
  capped at `calc(100% - 10px)`, 40px tall, radius 5px, 20px horizontal
  padding, `#846add` Barlow-Regular 15px/1.4 text and `#999999` placeholder
- **And** a purple `#846add` button "Get Notified" renders beside it (wrapping
  below on narrow widths), `min-width:120px`, 40px tall, radius 5px, 20px
  horizontal padding, white Barlow-Regular 15px/1.4 label, darkening to
  `#333333` on hover with a `.4s` transition
- **And** focusing the input reveals the source's focus ring — a full-size
  `1px solid #846add` layer, radius 5px, animating from
  `scaleX(1.1) scaleY(1.2)` to `scale(1)` with visibility/opacity over `.4s`,
  sending no pointer events
- **And** submitting with an empty or malformed e-mail addresses the field
  with a white bubble (`1px solid #c80000`, radius 2px, `padding 4px 25px 4px
  10px`, positioned right 12px and vertically centred, Barlow-Regular 13px/1.4
  `#c80000` text) plus a lucide `AlertTriangle` warning glyph (`#c80000`, 14px,
  right 18px) replacing the source FontAwesome `\f071`
- **And** the bubble follows the source visibility rule — hidden until an
  invalid submit, then visible while the field is hovered and ALWAYS visible at
  ≤992px — and clears on focus; a valid submit is accepted (React state, no
  navigation)
- **And** the button keeps an accessible label and the input a
  `<label>`/`aria-label`

### Feature: Small print

The reassurance line under the form.

#### Scenario: Small print renders with the underline
- **Given** the card renders
- **When** the small print is visible
- **Then** it reads a short no-spam reassurance line (source: "I promise to
  never spam") in Barlow-Regular 14px/1.5 `#999999`, centred, with 10px top
  padding
- **And** one word (source: "never") carries a `1px solid #999999` bottom
  border

### Feature: Design tokens & typography

The recreation exposes the reference palette and fonts as Tailwind 4
`@theme` tokens.

#### Scenario: Theme tokens match the reference
- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: brand `#846add`, dark slate `#333333`, card
  `rgba(255,255,255,0.8)`, input well `#e6e6e6`, muted `#999999`, body
  `#666666`, error `#c80000`, white text roles
- **And** Barlow (Regular 400 / Medium 500 / Bold 700) loads via a Google Fonts
  `<link>` in `index.html`
- **And** shapes are radius 18px (card), 10px (tiles), 5px (input, button) and
  2px (validation bubble); transitions are `.4s` (button, focus ring, bubble)

### Feature: Footer attribution

A single Component Dock attribution, per the monorepo rule.

#### Scenario: Attribution links Component Dock
- **Given** the page renders
- **When** the attribution is visible
- **Then** it reads a Component-Dock attribution (e.g. "Made with ♥ by
  Component Dock") linking `https://www.componentdock.com/`, branded
  "Component Dock" — never ColorLib, "Colorlib", the source demo brand, or the
  source slug

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/incoming/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/incoming/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Layout 1:1 with the reference: one `min-height:100vh` centred screen
      (55px/15px padding) over a single static full-bleed photo; one centred
      card (`880px` capped at `100%`, radius 18px, `rgba(255,255,255,0.8)`,
      `padding 175px 15px 45px`; 80px top at ≤576px); no navbar, no sections
      below the fold
- [ ] Card order matches: logo wordmark → under-construction line → countdown
      row → notify form → small print
- [ ] Wordmark: own brand only, centred, no copied `logo.png`/favicon asset,
      no source demo wordmark or slug anywhere
- [ ] Headline: Barlow-Bold 25px/1.2 `#999999`, centred, `33px` top / `68px`
      bottom padding
- [ ] Countdown: four `90×100px` tiles (`#333333`, radius 10px, `margin 0 18px
      25px`) in a centred wrapping row with `min-height:230px`; white
      Barlow-Medium 40px numbers above white Barlow-Regular 14px labels
      (Days/Hours/Minutes/Seconds); live 1-second tick; days unpadded, h/m/s
      zero-padded; past target falls back to now + 35 d + 18 h; interval
      cleared on unmount/zero
- [ ] Form row: `width:100%`, `55px` top padding, controls `margin 20px 5px 0`;
      input `220px` / `calc(100% - 10px)`, 40px tall, radius 5px, `#e6e6e6`
      with `#846add` 15px text and `#999999` "Your Email" placeholder
- [x] Button "Get Notified": `min-width:120px`, 40px tall, radius 5px, 20px
      padding, `#846add` fill with white 15px label, `#333333` hover, `.4s`
- [ ] Focus ring: full-size `1px solid #846add` layer at radius 5px animating
      `scaleX(1.1) scaleY(1.2)` → `scale(1)`, `pointer-events:none`, `.4s`
- [ ] Validation: invalid/empty e-mail → white bubble (`1px solid #c80000`,
      radius 2px, `padding 4px 25px 4px 10px`, right 12px, Barlow-Regular 13px
      `#c80000`) with a lucide `AlertTriangle` (14px `#c80000`, right 18px);
      hidden until an invalid submit, then visible on field hover and always at
      ≤992px; cleared on focus; valid submit accepted (React state, no
      navigation)
- [ ] Small print: Barlow-Regular 14px/1.5 `#999999`, 10px top padding, one
      word underlined `1px solid #999999`
- [ ] Barlow (400/500/700) via Google Fonts `<link>`; radii 18px / 10px / 5px /
      2px; transitions `.4s`
- [ ] All images are `picsum.photos/seed/incoming-*` placeholders; icons from
      `lucide-react` (`AlertTriangle` replaces the source FontAwesome
      `\f071`); no copied assets, font files, or CSS; no jQuery, no framework,
      no CDN
- [x] Component Dock attribution links `https://www.componentdock.com/`
- [x] Zero `colorlib` / source-demo-brand / `comingsoon_03` references anywhere
      in `apps/incoming` (comments included)
- [x] App folder `apps/incoming`, package `@free-react-templates/incoming`,
      `homepage` `https://incoming.free.componentdock.com`, `public/CNAME`
      `incoming.free.componentdock.com`, lockfile registers the workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh incoming` passes
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
