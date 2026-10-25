# Nightwatch — design notes

Source: ColorLib **Nightshift** (`nightshift`), live preview `https://preview.colorlib.com/theme/nightshift/`
(HTTP 200, 84,493 B, read 2026-10-25 with `curl -4`). Recreation name `nightwatch`. Spec:
`openspec/specs/template-nightwatch/spec.md`. Tasks: `docs/templates/nightwatch/tasks.md`.

A 2026 **Astro 7 + Tailwind 4** build (`/*! tailwindcss v4.3.3 */`, one 59,639 B sheet). Its own catalogue
copy states the brief: *"Across 49 commercial cleaning sites, 23 lead with 'get a quote' and not one shows
a price… Nightshift puts an estimator in the first screen."* Build to that sentence — the estimator is the
design, not a section in it.

## Structure order (measured at 1440 × 900)

| #  | band                         | id / hook           | ground              |   top | height |
| -- | ---------------------------- | ------------------- | ------------------- | ----: | -----: |
| 0  | licence bar                  | `[data-licence-bar]`| `#162135`           |     0 |     37 |
| 1  | header (sticky)              | `[data-header]`     | `white / 90 %`      |    37 |     81 |
| 2  | hero + estimator             | `#proposal`         | `#0d1522`           |   118 |  1,028 |
| 3  | scope table                  | `#scope`            | `#ffffff`           | 1,146 |  1,190 |
| 4  | six rates                    | `#industries`       | `#ffffff`           | 2,336 |    999 |
| 5  | roster panel + four rules    | `#why-us`           | `#f4f6fa`           | 3,335 |    876 |
| 6  | four steps                   | `#process`          | `#ffffff`           | 4,211 |    788 |
| 7  | fourteen towns               | `#areas`            | `#ffffff`           | 4,999 |    513 |
| 8  | carousel                     | `#testimonials`     | `#f9fafb`           | 5,512 |    812 |
| 9  | six answers                  | `#faq`              | `#ffffff`           | 6,324 |    901 |
| 10 | closing CTA                  | `#contact`          | `#cb6e17`           | 7,225 |    440 |
| 11 | footer                       | `<footer>`          | `#111827`           | 7,665 |    567 |

Document **8,232 px** at 1440; **12,719 px** at 390. Every `.section` is `py-20` → `lg:py-28` (**112 px**);
the hero container is `py-16` → `lg:py-24` (**96 px**) and the estimator card is **836 px**, which is what
sets the hero's height.

## Section-by-section fidelity notes

### 0 — Licence bar

The first thing on the page is a **trust strip, not a nav**: three facts and a sample Google rating at 12 px
on `#162135`. Items 2 and 3 are `hidden sm:flex`; the rating survives at every width. It scrolls away —
only the header is sticky — so on a long page the trust strip is gone by the time the reader reaches the
price. That is the reference's behaviour; keep it.

### 1 — Header

Seven labels is one more than a typical trade header, and the markup carries an explicit rationale for
switching at **`xl` (1280) instead of `lg`**: between 1024 and 1279 a `lg` nav shrinks (it has `min-w-0`)
and its last links render *under* the phone pill. The city pill is held back to **`2xl` (1536)** for the
same reason. Both are measurable: at 1024 the nav is `display: none`; at 1280 it is `flex` with a 595 px
box; the city pill is only `block` at 1600.

Two tap targets, deliberately: city (where we work) and phone (call now) are separate pills with different
weights (medium vs semibold, `#22304a` vs `#162135`), then the sun/moon toggle, then the amber CTA.

### 2 — Hero

- **No photograph.** The right 7/12 is the estimator card; the left 5/12 is copy. The whole above-fold is
  type + form on navy, which is why the page reads as a tool rather than a brochure.
- The `h1` is one sentence in two colours: "Square footage in." white, "A number out." `#f7c948` in a span.
  At 469 px the line breaks after "footage" and after "A number" — three lines, 194 px tall. Do not
  `text-balance` it into two lines; the height is what holds the card and the copy level.
- The decorative circle is `460 × 460`, `#f0b429` at **10 %**, `blur-3xl`, at `-left-40 top-1/3`, clipped
  by `overflow-hidden`. It is the only soft edge on the page.
- Amber is used for *exactly three* things here: eyebrow, second sentence, the four ticks. Not the CTA —
  the CTA lives in the white card (see below), which inverts the usual hero hierarchy on purpose.

### 3 — Estimator card (the design)

- Card 683 × 836, white, radius 16, 1 px `#cad3e4`, `p-8`. Sub-heading says the interaction out loud:
  *"Four answers. The range updates as you type."*
- The four answers, in order: **type of building** (select), **cleanable square footage** (numeric, mono,
  default 12000, `step 500`), **how often** (four pills), **anything on top** (four pills). Name + email
  come *after* the range — the range is the reward, the contact details are the price of the proposal.
- Frequency scales **sub-linearly** (0.32 / 0.52 / 0.70 / 1.00), never 1/5–5/5. This is a domain claim the
  copy repeats on the pricing page; a linear table makes three nights cost 60 % of five nights, which is
  the one number a facilities manager would check.
- Range maths, verbatim from the page's inline script:

  ```
  monthly = (rate_cents / 100) × sqft × factor + Σ extras
  range   = "$" + round50(monthly × 0.85).toLocaleString("en-US")
          + " to $" + round50(monthly × 1.15).toLocaleString("en-US")
  ```

  `round50 = v => Math.round(v / 50) * 50`. Missing rate, sqft or factor → the em dash `—`.
- Verified readings: defaults **$2,050–$2,750**; Medical 20,000 **$5,800–$7,800**; + floor care
  **$6,050–$8,200**. If your implementation prints $2,040/$2,760 you skipped the rounding.
- The boxes are real `<fieldset>`/`<legend>` with visually hidden radios and checkboxes (`peer sr-only`) and
  a `peer-checked` pill — so keyboard users get a focus ring on the pill. Reimplement it that way, not with
  buttons and state-only selection.
- The `—` seed is written into the markup for the same reason the reference's counters seed `0`: it is the
  no-JS / pre-hydration state. Do not render `$0 to $0`.

### 4 — `#scope`

The design's second-best idea and the one an implementer is most likely to soften: an **eleven-row
definition list** stating a frequency against every task, published before anyone asks. Two deliberate
details:

- the eyebrow is **`#465a80` (neutral)** — the only band on the page whose kicker is not amber. It is a
  document, not a pitch.
- the `<dd>` column is **JetBrains Mono 14 px** so three bids line up column-wise when a procurement person
  pastes them into a spreadsheet. The catalogue copy says exactly this: *"Specification values set in mono
  so three bids line up."* Sans-serif here undoes the argument.

The wrapper is a rounded 16 box with a `#f4f6fa` header row and zebra tinting at 60 % — cheap, and it holds
eleven rows without looking like a table.

### 5 — `#industries`

Same hairline-grid construction as the sibling Drainwise prep: one wrapper whose ground **is** the border
colour, `gap-px`, and white cells with no borders of their own. Six cells, 404 × 208, `p-8`. The blurb is
`flex-1`, so the six rate lines share a baseline per row — that alignment is the whole point of the band.

### 6 — `#why-us`

The band's image is **`people-panel.svg`: a drawn roster**, not a photo of a cleaner — a navy panel with a
MON–FRI header and 25 shift chips, amber for the named crew (`AK`) and dark for relief (`rl f`), footnoted
"Yellow is your named crew. Grey is relief, and you are told in advance." It makes the turnover argument
visible in one glance. The catalogue copy sells the same thing: *"a staffing page, because only 2 of 49
sites say if cleaners are employees."*

The four arguments use a 2 px amber left rule and 20 px indent — the page's only "blockquote" treatment,
used four times and nowhere else.

### 7 — `#process`

Four steps in a **three-column** grid: row one is 01/02/03, row two is 04 alone at the left. This is the
reference's measured layout at every width (`.sm:grid-cols-3` over four `<li>`), and the spec records it so
nobody "balances" it into four columns. The number + hairline rule row is the signature: tabular amber
figure, 1 px `#e6eaf2` rule taking the remaining width.

### 8 — `#areas`

The cheapest band on the page and the most useful for local SEO — fourteen towns as **plain text** in a
`<ul>` (2 columns at base, 3 at `sm`), no map, no pins, with a closing note telling the owner to replace the
list. `5 / 7` split, no eyebrow.

### 9 — `#testimonials`

The only band using **stock Tailwind greys** instead of the `ink` ramp (`gray-900` heading and quote, `gray-600` roles). Three slides at 405 px on a 1,216 px track, each card 381 × 336, `p-8`, `shadow-soft`.

At 1440 the carousel is **static and shows nothing carousel-like**: `perView = 3`, three slides,
`maxIndex = 0` → arrows `display: none` and zero dots. The same component becomes a real carousel at 390
(1 per view, 36 px discs, three dots, 5 s autoplay). Do not "add" arrows on desktop because it feels
unfinished — the reference's own kit hides them by arithmetic.

### 10 — `#faq`

Six questions written for a procurement reader ("Are your staff employees or subcontractors?", "What
insurance do you carry?"). Row 81 px closed, 1 px `gray-200` dividers, 32 px `#f3f4f6` disc with a plus that
**rotates 45°** into a close mark; one answer open at a time, `max-height` + `opacity` 300 ms. Answers stay
in the DOM — an accordion hides text, it does not delete it.

### 11 — `#contact`

The page's only saturated band: `primary-700` `#cb6e17` (not the CTA amber `#f0b429`, not the hero navy).
440 px, centred, one white button back to the estimator and one 2 px outline phone button — the same two
choices as the hero and the header, restated at the bottom.

### 12 — Footer

12-column grid, 4 / 5 / 3: brand, three link columns, "Stay Updated". The newsletter form is **dead markup**
in the reference (no `action`, no handler anywhere) — the recreation must either wire it or not imply a
promise it does not keep. Bottom bar carries the copyright and two legal links; the Component Dock link
(`https://www.componentdock.com/`) belongs here (AGENTS.md rule 5).

## Cross-cutting

- **Two faces only.** Inter everywhere, JetBrains Mono for specification values (estimate, scope `<dd>`,
  process numbers). All figures are tabular by construction; do not let Inter render the estimate.
- **Tracking pair.** Headings `−0.9 px` (36 px) / `−1.5 px` (60 px); eyebrows **`+0.35 px` uppercase**;
  micro labels `+0.3 px`; footer headings `+0.7 px`. Losing either half of the pair makes a pixel-correct
  palette look like a different design.
- **Amber is a mid-tone.** `500` for CTAs, `400` for hero/stars, `600` for figures and the back-to-top disc,
  `700` for eyebrows, rates and the contact band, `100/50` only as tints inside pills and on the contact
  band. There is no gradient.
- **`ink` vs `gray`.** `#testimonials` and `#faq` are grey; everything else is `ink`. This is easy to
  "fix" and wrong to fix.
- **Rhythm.** 112 px band padding, 40–64 px head-to-content gaps, 24 px card padding at mobile / 32 at `lg`.
- **Dark mode** is real and pre-paint: `#030712` body, `#111827` tinted bands, `#374151` borders, hero /
  contact / footer unchanged. Two amber tones get added for dark (`primary-300 #fadb5f`, `primary-900
  #8d2b0b`) — use them only where the reference does (`dark:text-primary-300`, `dark:bg-primary-900/50`).

## Traps (measured on the live page)

1. `document.documentElement.scrollWidth` is **401 px at 320 and 390** while `clientWidth` is 320/390. The
   cause is the **footer's** single-column track (**385 px**, pinned by the newsletter row's min-content) —
   *not* the carousel, whose over-wide slides are clipped by `overflow-hidden`. The recreation must pass
   `scrollWidth === clientWidth` at every width.
2. **`#service-areas` does not exist.** Both city pills link to it. Point them at `#areas`.
3. **Three dead `#` social chips** and one **malformed** `tel:(555) 050-0500` (spaces + parentheses).
4. **The newsletter form is dead.** No `action`, no handler in the bundle or the inline scripts.
5. **The nav scrollspy never activates:** every `data-nav-link` value is a route path (`/services`), so
   `getElementById` finds nothing. Point the recreation's scrollspy at the mapped ids.
6. **The address contradicts the page:** "1230 North Capitol Avenue, Indianapolis, **OH** 43215" — 43215 is
   Columbus, while everything else is Indianapolis, IN.
7. **`#process` is 3 + 1**, not a bug.
8. **The screenshot is hero-only and is a marketing composition** (macOS window on a grey ground, 2400 ×
   1892, AVIF despite the `.jpg` name). It shows roughly the first 900 px of the page — everything below
   `#industries` comes from the DOM alone.
9. **The preloader removes itself**, so a later DOM read finds no `#preloader`; the estimator's inline script
   re-runs on `astro:page-load` and is idempotent via `data-proposal-ready`.
10. **The house kit is shared byte-for-byte with the sibling 2026 preps** (16,233 B, same hash) and contains
    handlers this page never uses (billing toggle, counters, lightbox, blog filter, parallax). Port only the
    handlers listed in the spec.

## Placeholder policy for the recreation

- All copy is sample data in the reference and the caveats are part of the artefact — keep the "sample" /
  "replace with your own" lines.
- The roster panel is **drawn** (inline SVG or CSS grid), never a stock photo of a cleaner.
- No other images exist on the page: no hero photo, no gallery, no avatars beyond the three initial discs.
  If the recreation needs an image slot it has invented one.
- Phone, address and email are obviously fake (`(555) 050-0500`, `example`) — mirror that, do not invent a
  real-looking business identity.
