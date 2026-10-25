# Quarto — Design Notes

Recreation of the ColorLib **"Fieldnotes Student"** design
(https://colorlib.com/wp/template/fieldnotes-student/, live preview
https://preview.colorlib.com/theme/fieldnotes-student/) as a React 19 + Vite + Tailwind CSS 4 +
TypeScript app under the name **Quarto** (`apps/quarto`). The spec is
`openspec/specs/template-quarto/spec.md`; the task list is `docs/templates/quarto/tasks.md`.

**Read this first:** the source is a **five-page static site** (landing + résumé + two case studies +
a writing guide). The recreation is **one page** — the landing page, which is already content-complete.
The four inner pages are inventoried in the spec so nothing is a surprise, but they are out of scope.

## Reference set (all read 2026-10-25, `curl -4`)

| artefact | bytes | sha256 | role |
| --- | ---: | --- | --- |
| `theme/fieldnotes-student/` | 7,216 | `e202abae…50f3` | DOM authority (hand-written static site) |
| `assets/style.css` | 10,112 | `667e2fec…59a2` | **token authority** (7 custom properties + 115 rules) |
| `assets/app.js` | 1,494 | `7c89692c…f570` | behaviour authority (menu + filters only) |
| `assets/vendor/bootstrap.min.css` | 232,111 | `d85327d9…bdede` | **Bootstrap v5.3.8** — grid + `.visually-hidden` only |
| `assets/fonts/inter.woff2` | 48,256 | `3100e775…4c62` | Inter variable (100–900), referenced but **not copied** |
| `assets/mark.svg` | 225 | `78ea57e4…43dd` | favicon: `#244b3b` disc + `#e7ed92` italic `a` |
| `assets/wayfinding.svg` | 2,054 | `0bf83388…2194` | card 1 concept art (sage ground) |
| `assets/pantry.svg` | 2,301 | `d4ebef24…ad18` | card 2 concept art (clay ground) |
| `resume.html` / `campus-path.html` / `pantry-notes.html` / `setup.html` | 4,228 / 5,510 / 5,407 / 7,792 | — | inner pages, **not built** |
| `fieldnotes-student-featured.jpg` | 87,898 | `48e5672e…4ca7` | catalogue capture — **AVIF** behind `.jpg`, 2400×1892, a *marketing composition* |
| `wp/template/fieldnotes-student/` | 114,006 | `31dc458b…8f2f` | catalogue entry (says "Bootstrap 5") |
| `downloads/free/fieldnotes-student.zip` | — | **404** | no archive exists; the live preview is the only reference |

Preview-path ladder, all probed: `theme/<slug>/` **200** · `theme/bootstrap/<slug>/` **404** ·
`theme/bb/<slug>/` **404** · `etc/cs/<slug>/index.html` **404**. This is *not* a Bootstrap-family demo —
the plain path is the live preview.

Live render measured with Playwright (Chromium) at **1440 / 1280 / 1024 / 992 / 768 / 576 / 390 / 360**;
screenshots at `/tmp/fieldnotes-student/{desk-full,mobile-full,mobile-menu}.png` on the prep machine.

## Document order and DOM skeleton

```html
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container header-row">
    <a class="brand"><span class="brand-mark">a</span>Name<span class="visually-hidden"> — home</span></a>
    <button class="menu-toggle" aria-controls="site-nav" aria-expanded="false">Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Main navigation">
      a ×3 (#work / #about / résumé) + a.contact-link ("Let's talk ↗")
    </nav>
  </div>
</header>
<main id="main"><div class="container">
  <section class="hero">                     <!-- row.align-items-center.g-lg-5 -->
    <div class="col-lg-8">availability · h1 · p.hero-intro · div.hero-actions (2 buttons)</div>
    <div class="col-lg-4"><aside class="notebook">…</aside></div>
  </section>
  <section class="section" id="work">
    div.section-head (h2.section-title > span.section-number + text) + p
    div.filters (3 × button[data-filter][aria-pressed]) · p#project-status[role=status]
    div.row.g-4 > article.col-md-6.project-card ×2
  </section>
  <section class="section" id="about">     <!-- row.g-4.g-lg-5 : col-lg-5 + col-lg-7 -->
  <section class="section" id="experience"><!-- row.g-4.g-lg-5 : col-lg-5 + col-lg-7 -->
  <section id="contact" class="contact-panel">eyebrow · h2 · p · a.button.secondary · p.sample-notice</section>
</div></main>
<footer class="site-footer"><div class="container">…</div></footer>
```

React shape (house conventions): `App.tsx` composes `Navbar`, `Hero`, `NotebookNote`, `Work`,
`ProjectCard`, `About`, `Experience`, `ContactPanel`, `Footer` under `src/components/`.

## Paste-ready token block (`src/index.css`)

```css
@import "tailwindcss";

@theme {
  /* the seven-value sheet — these ARE the design */
  --color-paper:  #f7f5ef;  /* body + header ground */
  --color-ink:    #262923;  /* text, headings, active pill ground */
  --color-muted:  #62675d;  /* secondary copy, eyebrows, meta, dates, footer */
  --color-line:   #d8dbcf;  /* EVERY hairline: header, section tops, timeline, chips, pills */
  --color-green:  #244b3b;  /* brand: solid button, links, availability dot */
  --color-yellow: #e7ed92;  /* contact panel ground — the only saturated surface */
  --color-cream:  #fffef8;  /* declared in the reference, used by zero rules — keep, don't use */

  /* reacting colours are literals in the reference; name them anyway */
  --color-green-hover: #0e3020;  /* a:hover */
  --color-green-deep:  #163a2a;  /* .button:hover ground */
  --color-focus:       #9d461d;  /* :focus-visible ring — the only warm orange */

  /* notebook card */
  --color-note:        #e5e8dc;
  --color-tape:        #e6cf99b0; /* 72 % alpha */
  --color-note-rule:   #b3baa7;
  --color-stamp:       #65785f;

  /* image mats + concept-art grounds */
  --color-mat:         #e9e8df;
  --color-art-sage:    #e2e7dc;
  --color-art-clay:    #eedfcd;
  --color-art-chrome:  #f5f4ed;
  --color-art-dots:    #c6cbbb;
  --color-art-route:   #527f61;

  --font-sans:  Inter, Arial, sans-serif;
  --font-serif: Georgia, "Gelasio", "Times New Roman", serif;  /* the voice — italics only */

  --radius-btn:  3px;   /* buttons, notebook */
  --radius-panel: 4px;  /* contact panel, art frames, chips */
  --radius-pill: 30px;  /* filter pills */
}
```

`font-serif` is used **only** inside `em` runs (`h1`, `.section-title`, `.notebook h2`) and for the
monogram. There is **no shadow token** — the reference has zero `box-shadow` declarations; do not add
`shadow-sm` "for depth".

## Measured layout at eight widths (Playwright, live preview)

| viewport | doc height | container | `h1` | section `h2` | contact `h2` | hero cols | card w | nav |
| --- | ---: | --- | ---: | ---: | ---: | --- | ---: | --- |
| 1440 | 3,336 | x 92 / 1256 | 96.48 | 57.6 | 68.8 | 853 / 427 | 628 | inline |
| 1280 | 3,314 | x 12 / 1256 | 85.76 | 51.2 | 64 | 853 / 427 | 628 | inline |
| 1024 | 3,307 | 1024 | 68.61 | 40.96 | 51.2 | 699 / 349 | 512 | inline |
| 992 | 3,340 | 992 | 66.46 | 39.68 | 49.6 | 677 / 339 | 496 | inline |
| 768 | 3,594 | 768 | 51.46 | 32 | 40 | stacked | 384 | inline |
| 576 | 4,265 | 576 | 48 | 32 | 40 | stacked | 576 | inline |
| 390 | 4,670 | 390 | 53.6 | 32 | 40 | stacked | 370 | **toggle** |
| 360 | 4,812 | 360 | 53.6 | 32 | 40 | stacked | 340 | **toggle** |

Band heights at 1440: header **78** · hero **643** · work **991** · about **416** · experience **571** ·
contact **467** · footer **106**.

Breakpoints inherited from Bootstrap: **`lg` = 992** (hero + both 5/7 splits stack below it),
**`md` = 768** (project cards stack below it), **575** (the reference's own `max-width: 575px` block:
mobile menu, 22 px gutters, section head parsed to block, notebook tilt softened).

## Section-by-section fidelity notes

### Ground and container

`body` is `--paper` at 16 px / **1.75**; `.container` is 1256 px + 12 px inline padding (Bootstrap),
which at 1440 puts **92 px of air** either side (1232 px content). Below 576 the padding is 22 px, i.e.
346 px content at 390. Everything — header row, all five bands, the yellow panel, the footer — sits on
that one column. There is no full-bleed element on the page **except** the header's bottom hairline and
the footer's top hairline.

### Header (`header.site-header`)

* Height **78 px**: `padding: 22px 0` + 33 px tall brand + 1 px bottom border. **Static** (no sticky, no
  scroll state) — this is the difference from most of the corpus.
* Brand: 33 × 33 px circle, `1px solid ink`, Georgia italic monogram; wordmark 18.08 px / 700 /
  `−0.045em`; 10 px gap between them.
* Nav: `gap: 34px`, links 14.08 px ink with **no underline**; the current page is underlined
  (`a[aria-current=page]`); the last item has a 1 px bottom border and 3 px bottom padding.
* The toggle exists in the markup on **every** page but is `display: none` until `≤575`.

### Hero copy column (`.col-lg-8`)

Vertical rhythm, measured at 1440: band top 78 → `.availability` at 195 → `h1` at 248 → intro at 482 →
buttons at 573 → band ends 721. So: 85 px band padding, 32 px below the availability line, 27 px below
the `h1` (its own `margin`), 20 px below the intro, 30 px above the buttons.

* `.availability` — 12 px, `--green`, `inline-flex`, 8 px gap to a **7 px** `border-radius:50%` dot
  drawn with `:before`. It is the only green text in the hero.
* `h1` — `clamp(3rem, 6.7vw, 6.1rem)`, **1.06**, `−0.055em`, 600, max-width 760. At 1440 that is
  96.48 / 102.27 / −5.31 and it breaks into two lines via an explicit `<br>` after `Curious mind.`
  The italic run is the `<em>` `in progress.` — Georgia 400, **same** 96.48 px and same letter-spacing.
* `.hero-intro` — 17.28 px (1.08rem), `--muted`, max 440, line-height 30.24.
* `.hero-actions` — `flex`, 12 px gap, wraps at 390 into two 116 px rows.

### The notebook card (`aside.notebook`) — the design's identity

* Ground `#e5e8dc`, radius **3 px**, padding `42px 30px`, `min-height: 430px`, `margin-left: 15px`,
  `transform: rotate(2deg)` (measured matrix `0.999391 / 0.0348995`). At 1440 the box is **380 × 500**.
* Tape: `.notebook:before`, **130 × 28 px**, `#e6cf99` @ **72 %**, `top: -12px`,
  `left: calc(50% - 65px)`, `rotate(-6deg)` — it must overhang the card's top edge, which is why the
  card needs no `overflow: hidden`.
* Top row: two spans, `space-between`, 10.08 px, `0.12em`, uppercase, 15 px above a 1 px `#b3baa7` rule.
* `h2`: **48 px Georgia italic 400**, `−0.05em`, line-height 1.06, `margin: 28px 0 16px`, with a `<br>`
  after `Always asking`. Note the `“ ”` are **typographic** quotes, not `"`.
* `.note-lines span`: `display: block`, 12.8 px, `padding: 10px 0`, 1 px `#b3baa7` bottom rule, each
  starting with `↳`.
* Stamp: 62 px circle, 1 px `#65785f`, 9.92 px / 1.4 centred on three lines, `rotate(-14deg)`,
  `margin-left: auto`. Its **bounding box measures 74 px** because of the rotation — do not "fix" the
  width to 74.
* At 390: `rotate(1deg)`, `margin: 35px 2px 0`, `padding: 30px 22px`, `min-height: 350px`, `h2` 38.4 px.

### Work band head

`display: flex; justify-content: space-between; align-items: flex-end`, `margin-bottom: 36px`.
Left: `.section-number` (11.84 px, `0.04em`, muted, 14 px above the title) then the `h2` at 57.6 px with
`I’ve <em>worked on.</em>`. Right: a two-line lede, **max-width 320**, `14.4 px`, muted, whose last line
aligns with the `h2`'s last line — that baseline alignment is the whole point of `align-items: end`.
At ≤575 the head becomes `display: block` and the lede drops 18 px below the title.

### Filter row and the live status

Three `<button>`s, `gap: 8px`, `border-radius: 30px`, `1 px --line`, `padding: 8px 17px`,
`min-height: 42px`, 12.16 px. Active = **ink ground**, white text, ink border. The row is 24 px below
the head and 24 px above the cards.

The reference ships `.filters[hidden]` and `app.js` removes the attribute; React renders it immediately
(Deviation 4). The status `<p>` is `.visually-hidden-status` (1 px, clipped) with
`role="status" aria-live="polite"`; the script writes `"N projects shown"`, singular at 1.

### Project cards

`div.row.g-4` with `article.col-md-6` (628 px each at 1440, 24 px gutter). Structure:
`a.project-image > img` · `p.project-meta` · `h3 > a` · `p` blurb.

* `.project-image` — `display: block`, `overflow: hidden`, `border-radius: 4px`, mat `#e9e8df`; the art
  is 900×590 (measured 604 × 396 = **1.525**).
* `img` transitions `transform .25s ease`; hover scales the **image** (not the frame) to `1.025`.
* `.project-meta` is declared `.69rem` but **renders 14.4 px**: `.project-card p { font-size: .9rem }`
  wins on specificity (0,1,1 beats 0,1,0). Uppercase, `0.06em`, muted, `margin: 20px 0 10px`.
* `h3 a` — 25.6 px / 600 / `−0.055em` ink, `display: flex; justify-content: space-between; gap: 15px`, so
  the `↗` sits flush right of the card measure. Hover underlines.
* blurb — `.9rem`, muted, max 490, `margin: 15px 0`.

Art direction (do **not** photograph this): card 1 = sage `#e2e7dc` ground, a `#f5f4ed` window bar with
three `#c6cbbb` dots, a 400 × 250 inner "map" panel, a dashed `#527f61` route (`5px`, `9 6`) and a dark
`#244b3b` phone; card 2 = clay `#eedfcd` ground, the same window chrome, a four-bar chart
(`#244b3b`, `#7f9a6f`, `#e7ed92`, `#d8dbcf`) and a small pantry card. Both are **original inline SVG**
(Deviation 6), `role="img"`, ~15–25 nodes each — deliberately cheap.

### About band

`row.g-4.g-lg-5`: left `col-lg-5` (533 px) holds `.section-number` + `h2` (italic tail on line two);
right `col-lg-7` (747 px) holds two paragraphs + `ul.skill-list`.

* First paragraph carries `.about-copy` → **1.12rem / 1.765**, max 640. The second is plain `p` at 16 px.
* `.skill-list` is a flex-wrap list, 8 px gap; each chip `5px 12px`, **12 px**, `1 px --line`,
  **4 px** radius, no background. Five chips: `Interview planning`, `Prototyping`, `HTML & CSS`,
  `Figma`, `Data visualization`.

### Experience band

Same 5/7 split. Left: `.section-number`, `h2` (`Inside &` / `outside class.`), then
`Read my full résumé →` in a `p.mt-4` (24 px). Right: `ol.timeline` with **three** `li`s.

* `ul/ol.reset` — `list-style: none`, `padding: 0`.
* Each `li`: `border-top: 1px --line`, `padding: 23px 0` (the first row gets a rule too, which is what
  makes it read as a ledger).
* `.date` — 11.52 px muted, `display: block`, `margin-bottom: 6px`.
* `h3` — 18.4 px / 600 / `−0.02em`, `margin: 0 0 8px` (note: **not** the 25.6 px card size).
* `p` — 13.76 px muted, `margin: 0`.

### Contact panel

The only saturated surface. `background: #e7ed92`, `border-radius: 4px`, `padding: 55px`,
`margin-bottom: 65px`, **inside** the container (so 1232 px wide at 1440, x = 104) — it is a
highlighter mark on the page, not a full-bleed band. No border, no shadow.

Order: `.eyebrow` (11.52 px, `0.12em`, uppercase, muted, `margin-bottom: 25px`) → `h2`
`clamp(2.5rem, 5vw, 4.3rem)` / 1.06 / `−0.055em`, max 650, italic tail → lede (max 520) →
`a.button.secondary` (transparent, 1 px `--green`, **green** label, `↗`) → `.sample-notice` (11.52 px,
`margin-top: 10px`).

⚠️ **Specificity trap:** `.contact-panel a { color: var(--ink) }` is (0,1,1) and loses to
`.button.secondary` (0,2,0) — the email button measures **green**, not ink. Keep green.

At ≤991 the padding is 35 px; at ≤575 it is `30px 24px` with a 40 px bottom margin.

### Footer

`border-top: 1px --line`, `padding: 25px 0 30px`, 11.2 px muted. `.footer-row` is `space-between`,
18 px gap, wraps. Left: `<Name> · A portfolio in progress.` Right: the Component Dock link (replacing
`Setup & writing guide · Template by Colorlib`). Below: `.sample-notice` at 11.52 px.

### What the source does NOT have (guard list)

No preloader, cookie strip, scroll-progress bar, back-to-top disc, sticky header, scroll spy, dark mode,
carousel, accordion, tabs, modal/lightbox, counters, reveal-on-scroll, parallax, icon font, SVG sprite,
analytics, JSON-LD, OG image, `localStorage`, form, phone number or social links. If you find yourself
importing `lucide-react`, an observer or a `setTimeout` for this template, one of the notes above was
skipped.

## Source → React adaptation table

| reference | React recreation | note |
| --- | --- | --- |
| `bootstrap.min.css` grid (`row`, `col-lg-8/4`, `col-lg-5/7`, `col-md-6`, `g-4`, `g-lg-5`) | Tailwind `grid`/`flex` + `gap-*` | 12-col arithmetic preserved as the measured widths (853/427, 533/747, 628+24, 384+24) |
| `.visually-hidden` (Bootstrap) | `sr-only` | keep the `— home` and the skill-list label |
| `.js` class on `<html>` | none | breakpoint CSS renders the toggle; no FOUC risk in React |
| `.menu-toggle` + `.open` + `aria-expanded` | `useState(open)` + `useEffect` for `Escape` | close on link click, restore focus to the toggle |
| `.filters[hidden]` + attribute flip | always rendered; `useState<'all'|'coursework'|'personal'>` | derive visible cards, never mutate `hidden` |
| `#project-status` textContent | `{n} project{s} shown` derived in render | `role="status" aria-live="polite"` |
| `mailto:` CTA | same `href` | no form |
| résumé / case-study pages | **not built** | nav `Résumé` → `#experience`; card CTAs non-navigating (spec Deviation 1) |
| Inter woff2 (self-hosted) | Google Fonts `<link>` `Inter:wght@100..900` | verified 200 |
| `Georgia, serif` | `Georgia, "Gelasio", "Times New Roman", serif` + Gelasio `<link>` | Linux/CI has no Georgia |
| `assets/*.svg` illustrations | original inline SVG components | same palettes, `role="img"` |
| `html { scroll-behavior: smooth; scroll-padding-top: 95px }` | `index.css` base layer | + `prefers-reduced-motion` override |
| `assets/app.js` print button | **not built** | résumé-only feature |

## Sibling comparison (the other catalogue-gap preps)

Quarto is the **thirteenth** catalogue-gap prep and the **first non-Astro** one. The twelve before it
(Thermly, Plantroom, Veranda, Aquifer, Smallpaw, Flowcert, Kettle, Chalkline, Closeknit, Stoke, Percline,
Emberly) are 2026 Astro builds sharing one Tailwind-4 kit: a 60 KB `_astro` stylesheet, a 16 KB house
kit script, a client router, cookie strip, reveal-on-scroll, back-to-top, dark-mode toggle. **None of
that applies here.** This design ships 10 KB of hand-written CSS, 1.5 KB of vanilla JS, Bootstrap 5.3.8
for the grid, and no framework. Practical consequences:

* **Do not** look for `_astro/` hashes, `base` stylesheet tokens, or a kit behaviour inventory — there
  are none, and a matching kit hash cannot be used as an argument for anything.
* The design language is **editorial/stationery**, not the siblings' 2026 SaaS-trade look: hairline
  rules instead of soft shadows, Georgia italic instead of a second sans, a tilted taped card instead of
  a rounded panel, one highlighter yellow instead of a dark accent band.
* Its **only** shared trait with the siblings is provenance: same catalogue gap, same one-page
  recreation, same "no copied assets" discipline.
* Closest *design* cousins in the shipped corpus are the print-leaning portfolio apps (e.g. the
  `Portfolio` section designs that use serif italics + paper grounds) — but none of them has the taped
  card, so this page's hero is genuinely new to the marketplace.

## Traps (measured, in the order they bite)

1. **`−0.055em` is the design.** Every `h1`/`h2`/`h3` is tracked *tightly negative* while every
   micro-label is tracked positive (`0.04 / 0.06 / 0.12em`). With default tracking the page reads like
   a generic clean template — the reference's whole personality is in those two numbers.
2. **The `.project-meta` cascade.** Declared `.69rem`, renders **14.4 px** because `.project-card p`
   (0,1,1) outranks `.project-meta` (0,1,0). Copy the *rendered* size; do not "restore" 11 px.
3. **The `.contact-panel a` cascade.** `.contact-panel a{color:ink}` (0,1,1) loses to
   `.button.secondary` (0,2,0) → the email CTA is **green**. Measured, not assumed.
4. **The notebook's rotation changes the box.** The stamp is 62 px but its bounding rect is 74 px
   (`rotate(-14deg)`); the card is 380 wide but its painted corners overhang. If you clamp the card with
   `overflow-hidden` you cut the tape; if you measure the DOM you get squares that don't match.
5. **The tape overhangs the card by 12 px.** `top: -12px` with a 2° card rotation means the parent
   layout can never use `overflow: hidden` — put the clip on the page, not on the hero.
6. **575, not 767, is the nav breakpoint.** Bootstrap `lg` (992) stacks the hero; Bootstrap `md` (768)
   stacks the cards; the reference's *own* media block at **575** is the only place the nav collapses and
   the gutters change to 22 px. Three different numbers — read them off the sheet.
7. **`scroll-padding-top: 95px` is load-bearing.** The page is only 3,336 px tall and every nav item is
   an in-page jump; without the padding the jumped-to `h2` lands under nothing (the header is static) and
   the anchor looks 95 px "off" from the reference's screenshots.
8. **The h1 grows again at 390.** `clamp(3rem, 6.7vw, 6.1rem)` bottoms out at 48 px at 576, then the
   `≤575` block **raises** it to `3.35rem` = 53.6 px. It is not a bug in the sheet; reproduce it.
9. **Two different art grounds.** Sage `#e2e7dc` and clay `#eedfcd`. Unifying them (or replacing both
   with photographs) destroys the "two different notebooks" reading of the grid.
10. **No icons anywhere.** Every arrow is a text glyph (`↗ ↓ → ↳ ✳`), `aria-hidden` on each. An icon
    library would change both the metrics and the stationery voice.
11. **Georgia is the voice, not a fallback.** If the italic tail renders in Inter italic, the page is
    wrong even if every colour matches. Load Gelasio and keep the stack order.
12. **The catalogue screenshot is not the page.** Its `#e8ebe0` ground, letterspaced kicker and browser
    frames belong to ColorLib's marketing composition (three windows on sage). Do not adopt them.
13. **The source's own `hidden` filters.** If you copy the `hidden` attribute into JSX for "fidelity",
    a no-JS render (and jsdom) hides the pill row and the interaction tests fail for the wrong reason.
