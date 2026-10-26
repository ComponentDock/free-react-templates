# Epistle — design notes (`hero-05`, hero family 5/12)

Measured 2026-10-26 against the live preview (`theme/bootstrap/hero-05/`, HTTP 200) with Playwright Chromium over
a **42-width ladder** plus single-pixel sweeps (600→700, 360→392, 470→521, 1190→1200), motion disabled via
`reducedMotion:'reduce'`, every wrap claim re-read after
`document.fonts.ready`; plus `curl -4` for the paper facts, a canvas A/B for the five weight instances, `pg.hover()`
for the card hover, `pg.keyboard.press('Tab')` for the focus ring, and real clicks/fills for the three form states.

- Live preview: `https://preview.colorlib.com/theme/bootstrap/hero-05/` — **200, 5,440 B**. Slug-only
  `theme/hero-05/` → **404 (9 B)**; `theme/bb/hero-05/` → **404 (9 B)**.
- Stylesheet: `css/style.css?v=5126e0b0` — **17,174 B, 790 lines**, sha256 `e2a17686a4181f4c…`.
- Script: `js/snippet.js?v=6f1b8891` — **3,178 B, 88 lines**, sha256 `1daaab7abbe31919…`; a single IIFE with two
  initialisers: `initMenu` and `initSignup`.
- Archive: `preview.colorlib.com/downloads/free/hero-05.zip` — **200, 244,753 B** (239.0 KiB, matching the
  listing's "239 KB"), **18 entries** = 4 dirs + 14 files. `css/style.css` **and** `js/snippet.js` hash
  **identically** to the live copies → **live preview verified; the archive is its un-versioned twin**. The two
  HTML files differ **only in `<head>`** (the `robots` pair, cdnjs `dns-prefetch`, `fetchpriority`, `?v=`).
- README: advertises an `images/` folder — **false** (no `<img>`, no `images/` in the archive). **Fifth variant in
  the family whose README claims a file it does not ship.**
- Screenshot: `hero-05.jpg` — **45,232 B, 1200 × 972**, **AVIF behind a `.jpg`** (converted with PIL before
  analysis). macOS browser mock-up; the page inside the frame is ~1120 px wide.
- Inner pages: **none**. `index.html` is **200, 5,440 B** and **byte-identical** to the directory URL
  (`sha256 3f3b4953…` both ways); `about.html`, `contact.html`, `archive.html`, `latest.html` all **404 (9 B)**;
  one HTML file in the archive.
- Fonts: **10 `@font-face` over 2 binaries**. All five weights (400/500/600/700/800) point at the *same* two woff2
  files — `latin` **32,228 B** sha256 `92684e4a…` and `latin-ext` **14,760 B** sha256 `9e38b3f1…`. Canvas A/B
  (`64px`, `"Handgloves 0123456789"`) gives **690 / 694 / 707 / 711 / 726** for 400 / 500 / 600 / 700 / 800, so
  each declared weight is a genuinely different rendering out of one file pair — the binaries are a **variable
  cut** (they carry `HVAR`/`MVAR`/`STAT`). Duplicate hashes are not a broken download.
- Google Fonts: `css2?family=Outfit` **200**, `wght@100..900` **200**, `wght@400;500;600;700;800` **200**.
- CSS: **120** `{` blocks, 10 `@font-face`, **0** `@keyframes`, **1** `animation` declaration (the reduced-motion
  kill switch), **4** width queries (**960 / 860 / 520**) + reduced motion, **7** custom properties on the shell,
  **44** `var()` reads, **29** hex literals / **20** distinct + 1 `rgba()` = **21** colours, **3** gradients,
  **4** transitions, **7** `box-shadow`s, **22** `revert`, **2** `!important`.
- Classes: **44** `cl-hero05*` in the markup, **42** with rules, **2** pure containers (`__copy`, `__done-text`);
  `.cl-icon` is the **sixteenth consecutive dead rule**; `is-enhanced` / `is-open` / `is-error` / `is-sent` exist
  only in CSS and are set by the script.
- Controls: **1** `<form>`, **1** `<input type=email>`, **2** `<button>`, **4** inline `<svg>`, **0** `<img>`,
  **5** `<a>` — **all five `href="#"`**; **5** ids; **1** `<h1>`, **0** `<h2>`.

## DOM skeleton (verbatim shape, 45 nodes of markup)

```
div.cl-hero05                          [7 custom props; min-height:100vh; overflow:hidden; ::before = peach glow]
├── header.cl-hero05__bar              [bottom border 1px #ecdcc8; z-index 5]
│   └── div.cl-hero05__bar-inner       [flex, gap 24, max-width 1200, padding 18px gutter]
│       ├── a.cl-hero05__logo[href="#"]
│       │   ├── span.cl-hero05__logo-the   "The"   [coral, italic, 500]
│       │   └── "Sunday Draft"                    [22/800/-.03em]
│       ├── button.cl-hero05__menu-btn[type=button][aria-expanded=false]
│       │   │                        [aria-controls=cl-hero05-nav][aria-label="Open menu"]
│       │   ├── svg.cl-hero05__menu-open   22×22  (three lines)
│       │   └── svg.cl-hero05__menu-close  22×22  (X)
│       └── nav.cl-hero05__nav#cl-hero05-nav[aria-label="Main"]
│           └── ul.cl-hero05__links
│               └── li × 4 → a.cl-hero05__link
│                            Latest[aria-current=page] · Archive · About · Sponsor
├── main.cl-hero05__main               [flex:1; align-items:center]
│   └── section.cl-hero05__hero[aria-labelledby=cl-hero05-title]   [grid 1.15fr / .85fr, gap 6vw, padding 6vw gutter]
│       ├── div.cl-hero05__copy
│       │   ├── p.cl-hero05__tag
│       │   │   ├── span.cl-hero05__dot[aria-hidden]    8px coral + 4px soft ring
│       │   │   └── "Issue #214 lands this Sunday"
│       │   ├── h1.cl-hero05__title#cl-hero05-title
│       │   │   ├── "One thoughtful email about product design, "
│       │   │   └── em → "every Sunday."                [coral + 70% highlight band]
│       │   ├── p.cl-hero05__sub
│       │   ├── div.cl-hero05__signup                 [max-width 540]
│       │   │   ├── form.cl-hero05__form[action="#"][novalidate]
│       │   │   │   ├── label.cl-hero05__label[for=cl-hero05-email]  "Email address"
│       │   │   │   ├── div.cl-hero05__field          [pill, 2px ink, 5px 5px 0 ink]
│       │   │   │   │   ├── svg.cl-hero05__field-icon 20×20 envelope
│       │   │   │   │   ├── input.cl-hero05__input#cl-hero05-email[type=email][required]
│       │   │   │   │   │        [autocomplete=email][placeholder="you@studio.com"]
│       │   │   │   │   │        [aria-describedby="cl-hero05-hint cl-hero05-error"]
│       │   │   │   │   └── button.cl-hero05__submit[type=submit]  "Subscribe free"
│       │   │   │   ├── p.cl-hero05__hint#cl-hero05-hint   "One email a week. Unsubscribe with one click."
│       │   │   │   └── p.cl-hero05__error#cl-hero05-error[role=alert]   empty → display:none
│       │   │   └── div.cl-hero05__done[role=status]
│       │   │       └── div.cl-hero05__done-box[tabindex=-1]
│       │   │           ├── span.cl-hero05__done-icon → svg 22×22 check
│       │   │           └── span.cl-hero05__done-text
│       │   └── div.cl-hero05__readers
│       │       ├── span.cl-hero05__faces[aria-hidden] → span ×4 (AK JM SL RD, --c inline)
│       │       └── "Read by <strong>18,400</strong> designers at studios and startups"
│       └── div.cl-hero05__stack[aria-hidden="true"]
│           ├── div.cl-hero05__card.cl-hero05__card--b   #ffd35c  rotate(7deg) translate(18,8)
│           ├── div.cl-hero05__card.cl-hero05__card--c   #9ad7ff  rotate(-5deg) translate(-14,10)
│           ├── article.cl-hero05__card.cl-hero05__card--a   white, 8px 8px 0 ink, rotate(-1deg)
│           │   ├── div.cl-hero05__mail-head
│           │   │   ├── span.cl-hero05__mail-avatar  "SD"  40px coral tile, radius 12
│           │   │   └── span → strong "The Sunday Draft" + span "Issue #213 · 6 min read"
│           │   ├── p.cl-hero05__mail-title
│           │   ├── div.cl-hero05__mail-art → span ×3   [2fr 1fr / 1fr 1fr grid, height 110]
│           │   └── ul.cl-hero05__mail-list → li ×3 (b 01/02/03 + text)
│           └── span.cl-hero05__sticker  "Free<br>forever"  96px mint disc, rotate(12deg)
└── script[js/snippet.js]
```

## Token block (copy-paste for `index.css`)

```css
@theme {
  --color-ground:        #fff6ea;
  --color-glow:          #ffe2cf;
  --color-ink:           #231a13;
  --color-muted:         #5f5145;
  --color-coral:         #d13f26;
  --color-coral-deep:    #b23117;  /* prescribed fix: small-text coral (4.41 → 6.28 on white) */
  --color-coral-soft:    #ffd9c9;
  --color-line:          #ecdcc8;
  --color-error:         #b42318;
  --color-success:       #e7f6ec;
  --color-success-ink:   #137a3a;
  --color-card-yellow:   #ffd35c;
  --color-card-blue:     #9ad7ff;
  --color-mint:          #c8f0d2;
  --color-placeholder:   #857566;
  --color-art-1:         #f3e7d7;
  --color-art-2:         #ffe39a;
  --color-avatar-1:      #f59e0b;
  --color-avatar-2:      #0ea5e9;
  --color-avatar-3:      #8b5cf6;
  --color-avatar-4:      #10b981;
  --color-avatar-ink:    #1b130c;
  --font-sans:   "Outfit", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --gutter:      clamp(16px, 4vw, 40px);
  --text-display: clamp(2.4rem, 1.3rem + 4.2vw, 4.6rem);
  --text-lede:    clamp(1.05rem, 1rem + .3vw, 1.22rem);
}
```

That is **21 colours** and they are nearly all *used*: unlike the family's product-mock variants, nothing here is a
token that only one nested screen reads. **Seven radii** (999 / 24 / 22 / 20 / 12 / 50 % / 3 px) and **five
shadows**, four of them hard (`Npx Npx 0`). The two clamps cannot come from Tailwind's type scale, and no
`shadow-*` utility matches a 0-blur offset shadow.

## Screenshot analysis (1200 × 972, AVIF behind `.jpg`)

A macOS window on a grey ground with traffic lights, a soft drop shadow and a `preview.colorlib.com` pill. Inside
the frame the page is **~1120 px** wide, i.e. between the 1100 and 961 columns of the ladder — two columns, the
field still one pill with the button inside it, and the readers row on one line.

What it shows: a warm cream page with a peach wash thickening toward the top-right corner; a hairline bar with
**The** in coral italic followed by **Sunday Draft** in heavy sans, and four muted links on the right where
*Latest* carries a short coral underline hanging below the bar's rule. Left column: a white pill with a coral dot
and "Issue #214 lands this Sunday"; the headline in four enormous lines — black with a tight, slightly negative
track — ending in **every Sunday.** in coral sitting on a peach highlighter band; three lines of muted copy; then
the field: a white pill with a black 2 px outline, a hard black offset shadow to its lower right, an envelope
glyph, `you@studio.com` in warm grey and a solid coral **Subscribe free** pill inside the right end. Under it the
hint line, then four overlapping initials (amber, blue, violet, green) and "Read by **18,400** designers at
studios and startups".

Right column: three offset cards fanned behind each other — a yellow one peeking top-right, a blue one peeking
bottom-left, and the white issue card in front, tilted back a degree with a hard black shadow. The white card
reads "SD / The Sunday Draft / Issue #213 · 6 min read", the title *Why good empty states feel like a
conversation*, a three-block illustration (coral gradient tall block, then yellow and sand squares), and three
numbered rows with coral numerals. Over the top-right corner of the stack, slightly overlapping both the yellow
card and the white card's edge, a mint disc reads **Free forever** in two lines, tilted.

**The impression is a hand-set editorial newsletter, not a SaaS page**: cream paper, one accent, hard offset
shadows instead of soft ones, a highlighter band instead of a coloured span, nothing rounded except pills and the
card corners. A port that adds a nav CTA button, a logo cloud, gradient buttons or a soft shadow has lost the
design.

## Section-by-section fidelity notes

**1. The shell and the ground.** Flat `#fff6ea` plus one `::before` radial (`62vw` circle, `right:-12vw;
top:-20vw`, `#ffe2cf → transparent 68%`). `min-height:100vh`, `flex-direction:column`, `overflow:hidden`. The
`overflow` is load-bearing twice: it is what clips the rotated back card at narrow widths, and it is what keeps the
glow's overflow out of the scroll box (`scrollX` is 0 at every width *because* of it).

**2. The bar.** `18px var(--gutter)` padding with a 34.09 px logo line box → **73.8** (72.8 + 1 px border). The
wordmark is one `<a>` with a coral *italic* "The" (500, 22 px, **36.03** wide) followed by the name at 800 weight
and **-.03em**; there is no mark, no tile, no icon. The nav is `margin-left:auto` with `gap:28` and links at
`padding: 6px 0` — so the hover/active affordances are a colour change plus, for the current page only, a 3 px bar
place at `bottom:-19px`, which lands exactly on the bar's 1 px rule (6 + 24.8/2… the link box is 36.8 and the bar
is 73.8; the bar sits 19 px below the link's baseline box, i.e. on the rule, not above it).

**3. The hero grid.** `minmax(0,1.15fr) minmax(0,.85fr)` with `gap: clamp(40px, 6vw, 96px)` and
`padding: clamp(36px, 6vw, 80px) var(--gutter)`. Note the asymmetry: the *horizontal* padding is the gutter
(**40** at 1440), the vertical padding is the 6vw clamp (**80** at 1440), and the column **gap** is the same 6vw
clamp (**86.4** at 1440, capped at 96 from 1600). At 961 all three collapse to **57.66 / 38.44**.

**4. The headline.** `text-wrap: balance` is what produces the 4/2/3/4 line ladder; the `<em>` is `font-style:
normal` with coral text over `linear-gradient(transparent 70%, #ffd9c9 70%)`, so the band covers the lower 30 % of
the line box and stops where the words stop (**431.73** of a 594.31 column). The `<em>` never wraps: it is one
client rect at 1440 (**431.73**), 390 and 320 (**228.05**), because `balance` moves whole words up rather than
splitting the clause.

**5. The field.** The pill is the *field*, not the input: `padding: 6px 6px 6px 18px`, `gap: 8`, `border: 2px`,
`border-radius: 999`, `box-shadow: 5px 5px 0 ink`. Inside, the icon is 20 px, the input is 314 × 48 with
`border:0; background:transparent`, and the submit is 162 × 50 — so the coral button sits *inside* the outline,
7 px from the border, and the shadow belongs to the whole assembly. Focus flips the shadow to coral
(`:focus-within`) and **nothing else** — the input has `outline:none`, and no ring is drawn around the button.

**6. The validation.** `initSignup` reads `input.validity` and then a regex (`/\.[a-z]{2,}$/i`), so
`alchie@studio` is *valid* to the browser but *incomplete* to the page. Two messages, in this order:
valueMissing → "Please enter your email address."; typeMismatch or regex-miss → "That email looks incomplete. Try
something like name@studio.com." The message is written into `#cl-hero05-error` (`role="alert"`,
`:empty{display:none}`), `is-error` is toggled on the form, `aria-invalid` is set/removed on the input, and focus
returns to the input. The `input` listener only clears when the value becomes valid — **that is the bug**: the old
message survives while the user edits an invalid string (see the spec's fixes).

**7. The success state.** `is-sent` on the wrapper hides the form and shows `role="status"`; the text is built with
`createElement('strong')` for the first sentence plus a template string carrying the address; the box
(`tabindex="-1"`) is focused. The signup block drops from **131.38** to **85.59** and the document from **929** to
**900** at 1440 — the page *becomes* the 100vh it never was.

**8. The readers row.** Faces are 36 px circles with `margin-left:-9` and a `2.5px` cream ring (computes 2 px), so
four initials occupy **117** px instead of 144. `flex-wrap` with `gap:12` puts the sentence beside them when it
fits (≥498), under them in one line (361–497) and under them in two (≤360) — three different heights, **36 /
71.25 / 94.5**.

**9. The stack.** `min-height:460` with three absolutely positioned cards sharing `inset: 20px 10px auto 30px` and
`height:420`; only card A has content, `display:flex; column; gap:14; padding:24` and the shadow. B and C are
coloured rectangles whose only job is to peek out at +7° and −5°. The card's *box* is 399 × 420 but its *rect* is
406.57 × 426.9 (A), 447.51 × 465.53 (B), 434.38 × 453.2 (C).

**10. The issue card's internals.** Head (40 px tile, name + muted meta, dashed rule), 25 px title in 2 lines, the
`2fr 1fr` / `1fr 1fr` art grid (110 tall), and three list rows with coral `<b>` numerals. The art is the flex item
that gives when the card overflows — **116.04** at 1440, **60.92** at 961, **8** at 320 (see the traps).

**11. The sticker.** A 96 px mint disc at `right:-6; top:-8` of the stack, `rotate(12deg)`, `line-height:1.05`,
`text-align:center` with a `<br>` — the only two-line label on the page. Its rect is **113.86** at 12°.

**12. The breakpoints.** `960` stacks the hero and shrinks the stack to `min(100%,440px)` / 440; `860` swaps the nav
for the disclosure and grows the bar to 81; `520` wraps the field, drops the cards to 370, the stack to 400 and the
sticker to 80. There is no 640/768 rule — the phone ladder between 520 and 959 is pure fluid type.

## Contrast (computed from the token pairs; the copy column is on flat cream)

| pair                                                              | ratio            |
| ----------------------------------------------------------------- | ---------------- |
| ink `#231a13` / ground `#fff6ea`                                   | **15.97**        |
| muted `#5f5145` / ground                                           | **7.14**         |
| coral `#d13f26` / coral-soft band `#ffd9c9` (73.6 px clause)        | **3.60** (large text ✓) |
| coral / ground (22 px italic "The"; any small coral text)           | **4.41** — **fails AA** |
| coral / white (list numerals, 14.5 px **700**)                      | **4.72** ✓       |
| white / coral (submit label)                                        | **4.72** ✓       |
| error `#b42318` / ground                                            | **6.14** ✓       |
| placeholder `#857566` / white                                       | **4.44** — borderline |
| ink / success `#e7f6ec`, white / `#137a3a`, ink / mint `#c8f0d2`     | 15.29 / 5.42 / 13.71 ✓ |
| avatar ink `#1b130c` on amber / sky / violet / emerald              | 8.54 / 6.62 / **4.33** / 7.23 — violet fails |
| coral focus ring / ground (3 px, UI)                                | 4.41 ✓ (≥3)      |
| coral focus ring / coral button                                     | **1.00** — invisible |

Three fixes, all cheap: use `#b23117` for the wordmark's "The" and any < 18.66 px coral text, darken the violet
avatar (or its initials), and ring the coral submit in ink.

## Source → React adaptation

| source                                              | port                                                                       |
| --------------------------------------------------- | -------------------------------------------------------------------------- |
| `div.cl-hero05` shell                                | `<App>` — cream + glow, `min-h-screen`, `overflow-hidden`                    |
| `header.cl-hero05__bar` + `bar-inner`                 | `<SiteHeader>` — the only navigation state (`isOpen`)                        |
| `button.cl-hero05__menu-btn` + two SVGs               | `<MenuButton>` — `aria-expanded` / `aria-controls` / label derived            |
| `nav` + 4 links                                       | `<Nav>` over `LINKS` (one `current`)                                         |
| `div.cl-hero05__copy`                                 | `<HeroCopy>`                                                                 |
| `p.cl-hero05__tag` + dot                              | `<IssuePill>` — dot stays `aria-hidden`                                      |
| `h1` (text + `em`)                                    | `<Headline>` — the coral clause is an `<em>` so the band ends with the words |
| `p.cl-hero05__sub`                                    | `<Lede>`                                                                     |
| `form` + `label` + `field` + `input` + `submit`        | `<SignupForm>` / `<EmailField>` — the field is the visual, the input inside it |
| `#cl-hero05-hint`, `#cl-hero05-error`                 | `<Hint>`, `<FormError role="alert">`; both in `aria-describedby`             |
| `div.cl-hero05__done[role=status]`                     | `<SuccessBox>` — announce once, no programmatic focus                        |
| `div.cl-hero05__readers` + `faces`                     | `<ReaderProof>` over an `AVATARS` array (4 × `{initials, color}`)            |
| `div.cl-hero05__stack[aria-hidden]`                    | `<IssueStack>` — B/C are empty divs; A is `<IssueCard>`                       |
| `mail-head`, `mail-title`, `mail-art`, `mail-list`     | sub-components of `<IssueCard>`; `ISSUE_ITEMS` array for the three rows       |
| `span.cl-hero05__sticker`                              | `<Sticker>` — absolute, `rotate-12`                                           |
| — (none in the source)                                 | `<Footer>` with the Component Dock link                                       |
| `--cl-hero05-*` (7 props)                              | `@theme` — 21 colour tokens                                                   |
| "The Sunday Draft"                                     | **The Epistle** (12 → 7 characters; the wordmark box shrinks ~45 px)          |
| 5 × `href="#"`                                        | real routes / in-page ids                                                     |
| `initSignup`'s stale message                           | derived message per keystroke (fix)                                           |
| `.mail-art` at `flex-shrink:1`                         | `flex: none` + `height:auto; min-height:420` on the card (fix)                |

## Family context

Variant **5 of 12** in the `hero` family, and the family's **first form-driven entry** — the first whose whole
premise is a single field. Where the family sits: **Proscenium** (v1) a split hero around a perspective dashboard
mock; **Afterglow** (v2) a centred SaaS hero on a four-blob mesh with a logo cloud; **Presswork** (v3) an
editorial, type-only full-height hero with **no script**; **Tendril** (v4) an app-landing hero with a disclosure
menu, a two-phone mock and the family's first state; **Epistle** (v5) a cream newsletter hero with a **validated
email form**, a highlighted clause and a three-card issue stack.

Shared family defects, all present again: the `.cl-icon` dead rule (**16 for 16**), the
`:where(html) … { …: revert }` guard block (**22** declarations), and the README's invented file list (this one
still claims `images/`). Two family claims **do not** carry over: the document is **not** 900 at 1440 (it is 929),
and the page is **not** motion-free of interaction — it is the first variant with a real `<form>`.

New with this variant, worth carrying forward to the remaining seven: **the hero can be taller than the viewport**
(`align-items:center` then has no slack); **a fixed-height flex card's artwork is the flex item that collapses**
(116 → 8 px); **the rotated back card is clipped by the shell at narrow widths** (8.2 px at 390) with
`scrollWidth === clientWidth`, so an overflow probe alone will not find it; **the field is the pill and the button
lives inside the border**, so focus lives on `:focus-within` and the input has no outline at all; and **a coral
focus ring on a coral button is a 1 : 1 ring**.


## Port deltas — measured after the build (2026-10-26, Playwright Chromium, motion disabled)

The shipped app at 1440 × 900, re-measured off `apps/epistle/dist` on `document.fonts.ready`.
The eight numbers hold, with two expected departures and one addition:

| element | reference | port |
| --- | --- | --- |
| bar / inner | 1440 × 73.8 · 1200 × 72.8 at (120, 0) | **identical** |
| wordmark | 173.45 × 34.09 at (160, 19.34) | **104.77** × 34.09 at (160, 19.34) — "The Epistle" is 5 characters shorter |
| nav | 297 × 36.8 at (983, 18) | **287** × 36.8 at (**993**, 18) — right edge still 1280; the Google-served Outfit variable measures ~10px narrower across four labels than the packaged copies |
| hero / copy | 1200 × 854.8 at (120, 73.8) · 594.31 × 694.8 | **identical** |
| issue pill | 242 × 34.47 | **231** × 34.47 (same 11px text-run delta) |
| `h1` | 594.31 × 300.25 at (160, 210.27), 73.6 / 75.072 / 4 lines, −2.944px | **identical** |
| `<em>` | 431.73, one rect | **432.73**, one rect |
| lede | 594.31 × 90.7 (3 lines) | **identical** |
| signup / field / input / submit / hint | 540 × 131.38 · 540 × 66 at (160, 680.91) · 314 × 48 · 162 × 50 at (530, 688.91) · 540 × 21.69 | **identical** heights and positions; input **320** wide, submit **156** wide at (**536**, 688.91) — the label run again |
| readers | 594.31 × 36 at (160, 812.59) | **identical** |
| stack / cards / art / sticker | 439.3 × 460 at (840.7, 271.19) · 399 × 420 each · 110 (116.04 rect) · 113.86² at (1181.07, 254.26) | **identical** — art renders 116.0 rect = 110 box |

- **The document is 991px, not 929, because the port has the mandatory footer.** The
  100vh shell measures **928.6** (73.8 + 854.8) — the reference's 929 — and the footer adds
  **62.4** below it (20 + 20 padding, a 21.69 line and the 1px rule). The same offset applies to
  the two states: **1022** on an empty submit (shell 959.6 = 929 + 30.6 of error + the grown block)
  and **963** on success (shell 900.6, hero **809.02**, block **85.59** — both exact).
- **Ladder re-read:** `h1` 4 lines at 961 (475.22 column) → 2 lines at 960 (883.22); bar 73.8 at 861 →
  **81** at 860; field **66** at 521 → **122** at 520; `h1` **38.4px** and 3 lines at 419 and 390;
  `scrollX === 0` and `scrollWidth === clientWidth` at every step.
- **Below 521 the front card returns to the flow.** Its contents need **454px** at 320 (the art is now a
  fixed 90px, not the reference's collapsed 8), which is taller than the 400px stack — an absolutely
  positioned card would be clipped by the shell's `overflow:hidden`. The rotations also flatten to
  +4° / −3°, which keeps the yellow card's rect at **308.16** of 320 and the sticker at **311.4** —
  inside the viewport, where the reference lost 8.5px.
- **320 is 1432px tall, not 1299.** The 133px difference is the footer (62.4) plus the artwork the port
  refuses to collapse (70) — the spec's prescribed fix, not a regression.
