# Kettle — Design Notes

Implementation notes for `apps/kettle`, which recreates the ColorLib **"Everhot"** design
(https://colorlib.com/wp/template/everhot/, preview https://preview.colorlib.com/theme/everhot/).

The full contract is `openspec/specs/template-kettle/spec.md`. This file is the working sheet: document
order, a paste-ready token block, section-by-section geometry, the component map, and the traps that cost
time if you find them the hard way.

## Reference set (all read 2026-10-25, `curl -4`)

| file | bytes | what it gives you |
| --- | ---: | --- |
| `theme/everhot/` | 85,846 | **DOM authority** — section order, every string, every class, the sizing tool's inline script |
| `_astro/Base.JYuhjam6.css` | 56,390 | **token authority** — Tailwind 4.3.3 output; the ramps below are grepped from it |
| `_astro/Base…BLoalVWc.js` | 16,233 | house kit (reveal, header, disclosure, scroll-spy, carousel, FAQ, cookie, back-to-top, toast) — **byte-identical to the Aquifer / Plantroom / Veranda / Stoke / Closeknit reads** |
| `_astro/ClientRouter…CYDbzu1r.js` | 16,357 | view-transition router; not needed in a single-page SPA |
| inline `<style>` | 11,620 | `@font-face` for Manrope 400–800 + JetBrains Mono 500/700 (12 `woff2` from `/cf-fonts/v/…`) — the reason grepping the sheet for `@font-face` finds nothing |
| inline `<script>` (sizing tool) | 3,554 | **the product** — copy the arithmetic exactly, see spec §The sizing tool |
| `assets/img/flow-panel.svg` | 1,739 | 800×600 diagram — **redraw, do not copy** |
| `assets/img/logo.svg` / `logo-light.svg` | 678 / 678 | wordmark — redraw as inline SVG or letterspaced text |
| catalog screenshot `everhot-template.jpg` | 318,790 | 2400×1892 JPEG, macOS Safari frame; **not** `everhot.jpg` (404) |

Everything below the screenshot's fold is DOM-only. `css/style.css`, `js/snippet.js`,
`downloads/free/everhot.zip` and `og-image.jpg` are **404** — there is no archive twin to compare against.

## Document order

```
#preloader                     fixed inset-0 z-100 bg-white, 40px animate-spin ring, removed 300ms after load
skip link                      sr-only focus:not-sr-only → #main-content
#scroll-progress               fixed top-0 left-0 z-60 h-0.5 bg-primary-600, width = scroll ratio
div[data-licence-bar]          h-9 bg-ink-800 text-ink-100 text-xs        ← 37px measured
header[data-header]            sticky z-50 h-16 lg:h-20 bg-white/90 backdrop-blur-lg border-b ink-100
div[data-mobile-menu]          xl:hidden panel: six rows + phone + location + full-width CTA
section (hero, no id)          bg-ink-50 py-14 lg:py-20   grid lg:grid-cols-12  copy 7 / card 5
section#size                   section bg-ink-900 text-white               ← near-black, 1073px tall
section#emergency              bg-primary-600 text-white py-6 lg:py-8      ← 164px, NOT a .section
div[data-sticky-call]          lg:hidden fixed bottom-0 z-40 bg-white p-3   ← 97px at 390
section#options                section bg-white
section#why-us                 section bg-ink-50
section#process                section bg-white
section#areas                  section bg-white
section#testimonials           bg-gray-50 py-20 lg:py-28
section#faq                    bg-white py-20 lg:py-28
section#contact                bg-primary-700 py-20 lg:py-28               ← #8d4e12
footer                         bg-gray-900 pt-16 lg:pt-24 — 12-col: 4 brand / 5 links / 3 newsletter
div#cookie-consent             fixed bottom-0 z-50 role=dialog, slides up 1.5s
button#back-to-top             fixed bottom-6 right-6 z-50, 48px disc primary-600
```

Two grounds are dark (`#161616`, `#111827`) and two are brand orange (`#ae6211`, `#8d4e12`). Nothing else
is saturated. That is the whole palette strategy — resist adding a third accent.

## Paste-ready token block (`src/index.css`)

```css
@import "tailwindcss";

@theme {
  /* brand: a burnt-orange ramp defined by the sheet, not a Tailwind stock ramp */
  --color-primary-50:  #fff8ec;
  --color-primary-100: #ffedd0;
  --color-primary-200: #fcd79e;
  --color-primary-300: #f6bb63;   /* the tankless output number */
  --color-primary-400: #e99c31;   /* selected chips, testimonial stars, flow-panel bars */
  --color-primary-500: #d07e16;   /* input focus ring */
  --color-primary-600: #ae6211;   /* brand */
  --color-primary-700: #8d4e12;   /* eyebrows, prices, hover, closing band */
  /* primary-800 / -900 do not exist in the reference sheet — do not invent them */

  /* warm grey ink ramp — this is what keeps the orange from reading "utility company" */
  --color-ink-50:  #f7f7f7;
  --color-ink-100: #ededed;
  --color-ink-200: #dadada;
  --color-ink-300: #b4b4b4;       /* NOT in the sheet, but placeholder:text-ink-300 is used — see Traps */
  --color-ink-400: #858585;
  --color-ink-500: #636363;
  --color-ink-600: #494949;
  --color-ink-700: #373737;
  --color-ink-800: #242424;
  --color-ink-900: #161616;

  --font-sans: "Manrope", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", Consolas, monospace;

  --shadow-soft: 0 4px 16px -4px #0000001a;
}

@layer base {
  body { background-color: #fff; color: #111827; -webkit-font-smoothing: antialiased; }
  html { scroll-behavior: smooth; }
}

@layer components {
  .section { padding-block: calc(var(--spacing) * 20); }
  @media (width >= 64rem) { .section { padding-block: calc(var(--spacing) * 28); } }

  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    border-radius: .5rem; padding: 10px 20px; font-size: .875rem; font-weight: 500;
    transition: all .15s;
  }
  .btn-primary { background-color: var(--color-primary-600); color: #fff;
    box-shadow: 0 10px 15px -3px #ae621140, 0 4px 6px -4px #ae621140; }
  .btn-primary:hover { background-color: var(--color-primary-700); }

  .nav-active { color: var(--color-ink-800); font-weight: 600; }

  /* the sizing chips: hidden input + peer-driven sibling, as in the reference */
  .chip {
    display: inline-flex; align-items: center; gap: 8px; border-radius: 9999px;
    border: 1px solid rgb(255 255 255 / .2); padding: 8px 16px;
    font-size: .875rem; font-weight: 600; color: rgb(255 255 255 / .7);
    transition: color .15s, background-color .15s, border-color .15s;
  }
  .chip-unit { font-family: var(--font-mono); font-size: .75rem; opacity: .7; }
}
```

Tailwind 4 compiles `gray` from the default palette — the footer (`bg-gray-900`, `text-gray-300`,
`bg-gray-800` tiles), the testimonial ground (`bg-gray-50`) and the FAQ rules (`divide-gray-200`,
`bg-gray-100` discs) use **stock** grey, while the hero, the sizing band, the why-us panel and every card
border use **ink**. Keep the split; it is in the reference.

Load the two faces in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap">
```

Both URLs return **200** with a browser UA. Manrope genuinely uses **800** on this page — inside the
flow-panel SVG's headline (`font-weight="800"`), which you are redrawing; keep 800 in the link anyway so
the redrawn panel can use it. JetBrains Mono ships **only 500 and 700**; do not add 400.

## Section-by-section fidelity notes

### Licence strip (`div[data-licence-bar]`)

`w-full border-b bg-ink-800 text-ink-100` — measured **37 px** including the 1 px border, `text-xs`.
Inner `container mx-auto flex h-9 items-center justify-between gap-4 px-4 lg:px-8`. Left is a `<ul>` with
`gap-x-4`: `Licence` (`opacity-70`) + `VA DPOR #0000000000` (`font-semibold`), then
`Gas fitting certified` and `Serving Greater Richmond` — **both `hidden sm:flex`**. Right is a `p` with an
`amber-400` 14 px star, `4.9` and `410+ reviews on Google (sample)` at `opacity-70`.

The strip is warm-black **ink** (`#242424`), not grey — it is the page's only dark chrome above the fold,
and it sits directly above a white header, which is what gives the header its edge.

### Header (`header[data-header]`)

`sticky top-0 z-50 w-full border-b border-ink-100 bg-white/90 backdrop-blur-lg transition-all`. Inner
`container mx-auto flex h-16 items-center justify-between gap-6 px-4 lg:h-20 lg:px-8` → measured
**65 / 81 px**. Logo is an `<img>` at `h-8 lg:h-9` (rendered **150×32 / 150×36**) with a dark-mode twin
(`dark:hidden` / `dark:block`) that the recreation drops.

Nav is `hidden min-w-0 xl:flex xl:items-center xl:gap-7` — **six** links at
`whitespace-nowrap text-sm font-semibold text-ink-600 hover:text-primary-700`. The markup carries an
in-source comment explaining the `xl` threshold (*"a trade header carries a six or seven item nav plus a
phone pill, a theme toggle and a CTA. That does not fit until about 1280… between 1024 and 1279 the nav
was shrinking (it has min-w-0) and its last links rendered underneath the pill"*): keep `xl`, not `lg`.

Right cluster: location pill (`hidden 2xl:block`, `rounded-full border border-ink-200 px-3 py-1.5 text-sm`
+ 16 px pin glyph + `Richmond, VA`), phone pill (`hidden md:block`, `rounded-full` + phone glyph +
`(555) 090-0900`, `font-semibold`), dark toggle (`hidden lg:flex`, 20 px moon), CTA
(`hidden xl:inline-flex rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold` → `Size mine`),
hamburger (`xl:hidden`, 24 px). Past 50 px of scroll the header gains `shadow-lg`.

### Hero (`section` — no id)

`bg-ink-50`, inner `container mx-auto px-4 py-14 lg:px-8 lg:py-20` (**80 px measured at 1440**), grid
`grid items-start gap-10 lg:grid-cols-12 lg:gap-16` (**64 px gutters**), copy `lg:col-span-7 lg:pt-6`,
card `lg:col-span-5` (**469 px** wide). Section height **670 px** at 1440.

Copy column: eyebrow `text-sm font-bold uppercase tracking-wide text-primary-700` (measured 14 px,
0.35 px tracking, `rgb(141,78,18)`) → `mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink-800
sm:text-5xl lg:text-6xl` (**60/66/−1.5 at 1440**) with the second sentence in `span.text-primary-600` →
`mt-5 max-w-xl text-lg text-ink-500` lede → `mt-6` rating line (five 16 px `amber-400` stars, `4.9` bold,
`410+ reviews on Google · sample data` at `opacity-80`) → `mt-8 grid gap-3 sm:grid-cols-2` checklist of
four `flex gap-2.5 text-base font-medium text-ink-700` items with 20 px `primary-600` ticks.

**The four claims the design is built on** — keep these strings verbatim; they are the value proposition:

```
Sized on simultaneous demand, not on square footage
Incoming water temperature actually accounted for
Common sizes on the truck for same-day swaps
We will tell you when a repair is the better answer
```

### Quote card (`#quote`)

`rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8` — measured **469×510** at 1440,
**358×510** at 390, 16 px radius, 32 / 24 px padding, `1px #ededed`. Content:
`h2 text-xl font-bold text-ink-800 lg:text-2xl` (`Prefer to just ask?`), `mt-2 text-sm text-ink-500`
(`Three fields. We reply within the hour on weekdays.`), then `form.space-y-4.mt-6` with
`action="#" method="post" data-form`.

Fields are one column: label `block text-sm font-semibold text-ink-700`, control `mt-1.5 block w-full
rounded-lg border border-ink-200 bg-white px-4 py-3 text-base` (8 px radius),
placeholder `text-ink-300`, focus `border-primary-500` + `ring-2 ring-primary-500/20`. The select's first
option is `Choose the closest match` (`value=""`), then **six** options in the reference order. Button
`btn btn-primary mt-6 w-full justify-center` → `Get my answer`. Footnote
`text-center text-xs text-ink-400` (`No obligation. We never sell your details.`).

⚠️ The screenshot's button says `Get my answer`; if you find yourself writing `Book a survey` or
`Get my quote`, you are paraphrasing a CTA that this design deliberately phrases as an answer.

### Sizing band (`#size`) — the reason the template exists

`section bg-ink-900 text-white` (measured `rgb(22,22,22)`, **1073 px** tall, `padding-block: 112px`).
Header block is `max-w-2xl`: eyebrow `text-sm font-bold uppercase tracking-wide text-primary-400`
(`Sizing`) → `mt-3 text-3xl font-bold tracking-tight sm:text-4xl` (**36/40/−0.9 measured**) →
`mt-4 text-lg text-white/70` lede.

Then `mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12`: **form 7 cols (689 px)**, **output panel 5 cols
(479 px)**.

Form: three `<fieldset>`s, each `mt-8` after the first, `min-w-0`. Legend
`text-sm font-bold text-white/80` with the number in `<span class="text-primary-400">1.</span>`, hint
`mt-1 text-sm text-white/45`, chip row `mt-4 flex flex-wrap gap-2`. Every chip is a
`<label class="cursor-pointer">` wrapping `<input class="peer sr-only">` and a styled
`<span class="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm
font-semibold text-white/70 transition-colors peer-checked:border-primary-400 peer-checked:bg-primary-400
peer-checked:text-ink-900 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-300">`. The people
chips are the same but `inline-flex w-12 items-center justify-center ... py-2 text-sm font-bold` (no unit
suffix). Fieldset 2's chips are **radios**; fieldsets 1 and 3 are checkboxes/radios respectively — copy the
input types, the `name` attributes (`fixture`, `climate`, `people`) and the `data-*` numbers from the spec
table or the arithmetic silently zeroes.

Output panel: `rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8`. Structure:

```
p  text-xs font-bold uppercase tracking-wide text-white/40        "If you go tankless"
p  mt-1 font-mono text-4xl font-bold tabular-nums text-primary-300  data-gpm-out aria-live=polite
p  mt-2 text-sm text-white/55                                       data-rise-out
div mt-7 border-t border-white/10 pt-6
p  ... text-white/40                                               "If you stay with a tank"
p  ... font-mono text-4xl font-bold tabular-nums text-white          data-tank-out aria-live=polite
p  mt-2 text-sm text-white/55                                       data-tank-note
p  mt-7 rounded-lg border border-primary-400/40 bg-primary-400/10 px-4 py-3 text-sm text-primary-100
                                                                    data-verdict  (measured 413×86)
a  btn btn-primary mt-6 w-full justify-center                        "Get a fixed quote" → /contact
```

Band footnote, full width, after the grid: `mt-6 text-sm text-white/35` —
*Illustrative sizing for demonstration. Flow rates and first-hour ratings vary by fixture, by model and by
how the system is plumbed. Replace these figures and have the logic reviewed against your own products
before launch.*

The arithmetic, in one paragraph: `targetTemp = 120`; sum `data-gpm` and `data-gallons` over checked
fixtures; `incoming` from the checked climate (default **55** if none); `rise = 120 − incoming`;
`people` from the checked chip (default **4**); `peakHour = round(gallons + people × 3)`;
`tank = 40 | 50 | 65 | 80` for `peakHour ≤ 70 | ≤ 85 | ≤ 105 | else`; with no fixture checked everything
falls to `—` / `Pick at least one fixture.` / the "choose what might run" verdict. The verdict has three
branches keyed on `rise ≥ 70 && gpm ≥ 5`, else `gpm ≤ 3.5`, else the middle sentence. Defaults produce
**4.0 gpm / 68° rise / 40 gallon / 52 gallons peak hour**.

### Emergency band (`#emergency` + `[data-sticky-call]`)

`bg-primary-600 text-white` (measured `rgb(174,98,17)`, **164 px** tall), container `py-6 lg:py-8`, inner
`flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between`. Left block: a status line
(`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide`) whose dot is two stacked
spans — `inline-flex h-2 w-2 rounded-full bg-current` inside an `animate-ping` sibling at `opacity-60` —
reading `No hot water, or a leaking tank?`; then `mt-1 text-lg font-bold lg:text-xl`
(`A leaking tank is a same-day call. We carry the common sizes on the truck.`); then
`mt-2 max-w-2xl text-sm opacity-90` with the "if the water is coming from the tank itself" paragraph.
Right: `inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-bold
text-primary-700 hover:bg-primary-50` with a 20 px phone glyph → `(555) 090-0900`.

Sticky bar: `fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white p-3 lg:hidden` with one
`flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 py-3 text-base font-bold
text-white` link. Measured **97 px** tall at 390 — reserve that much bottom padding on the page.

### Options grid (`#options`)

`section bg-white` (**927 px**, `p-8` cells). Header `max-w-2xl`: eyebrow `The honest version` →
`h2 Tankless is not automatically better` → `mt-4 text-lg text-ink-500` lede.

Grid: `mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2
lg:grid-cols-3` — the `bg-ink-100` is the hairline colour and `gap-px` lets it show through (measured 3 ×
404 px columns, 232 px cells). Each cell `flex flex-col bg-white p-6 lg:p-8` with
`h3 text-lg font-bold text-ink-800`, `mt-2 flex-1 text-ink-500` blurb (**`flex-1` is what aligns the six
price lines** — drop it and the grid looks ragged), and
`mt-4 text-sm font-bold text-primary-700` price.

Six cells, in this order: `Tank, replaced like for like` / `Tank, upsized` / `Heat pump water heater` /
`Tankless, gas` / `Tankless, electric` / `Repair rather than replace` at `$1,450` / `$1,750` / `$2,900` /
`$3,600` / `$2,200` / `$180`. Footnote: *Starting prices are sample data for demonstration. Replace with
your own before launch.*

### Why-us (`#why-us`) — the four sizing questions

`section bg-ink-50` (**872 px**), inner `grid items-center gap-12 lg:grid-cols-2 lg:gap-16`.
Figure `order-last lg:order-first`: `<img class="w-full rounded-2xl object-cover">` at 800×600 (measured
**576 px** wide) + `mt-3 text-sm text-ink-400` caption (*Replace with a photograph of your own installation
work before launch.*). The recreation replaces the `<img>` with an inline SVG redrawn from the panel's
geometry: `#161616` ground, `#242424` inner card inset 32 px at 24 px radius, a 24 px/800 white headline
`What runs at the same time`, three labelled rows (`Shower`, `Second shower`, `Dishwasher`) whose orange
(`#e99c31`) bars are 160/160/120 px wide at 26 px tall and 6 px radius, their `2.0 gpm` / `1.5 gpm` values
in 15 px JetBrains Mono `#f7f7f7`, then a `#373737` 2 px divider and the summation caption. Labels
`#b4b4b4`.

Copy: eyebrow `How we work` → `h2 The sizing is the product` → lede *Anybody can carry a tank up your
stairs. What you are paying for is that it is the right one.* → `dl.mt-8.space-y-6` of four
`border-l-2 border-primary-600 pl-5` rows: `dt text-base font-bold text-ink-800`, `dd mt-1 text-ink-500`.

### Three steps (`#process`)

`section bg-white` (**564 px**). `<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">` (measured ~389 px
columns) of three `<li>`: a header row (`flex items-center gap-3`) with a mono numeral
(`text-sm font-bold tabular-nums text-primary-600`) plus `h-px flex-1 bg-ink-100`, then
`mt-4 text-lg font-bold` name, `mt-2 text-ink-500` body, `mt-3 text-sm font-semibold text-primary-700`
duration.

`01 Size it — Two minutes` · `02 Fixed quote, including the awkward bits — Same day` ·
`03 We fit it — Half a day to one day`. The duration is the persuasive part; keep the exact phrasing.

### Areas (`#areas`)

`section bg-white` (**468 px**), `grid gap-10 lg:grid-cols-12 lg:gap-16`, left `lg:col-span-5` heading +
lede, right `lg:col-span-7` `ul.grid.grid-cols-2.gap-x-6.sm:grid-cols-3` of twelve
`li.border-b.py-2.5.text-base.text-ink-700.border-ink-100` rows. No cards, no map, no pins — this is
deliberately the cheapest local-SEO block a trade site can have, and the footnote says so.

### Testimonials (`#testimonials`)

`bg-gray-50 py-20 lg:py-28` (**796 px**). Centred header: pill eyebrow
(`rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700`), `h2`, `mt-4 text-lg
text-gray-600` sample-data lede. Carousel wrapper `relative mt-16` → `overflow-hidden` → `flex
transition-transform duration-500 ease-out` track; each slide `flex-shrink-0 px-3` holding
`rounded-2xl bg-white p-8 shadow-soft` (measured **381×348** at 1440, 334×404 at 390): `mb-6 flex gap-1`
of five 20 px `text-primary-400` stars, `blockquote text-lg font-medium text-gray-900`, then
`mt-6 flex items-center gap-4` with a 48 px `rounded-full bg-primary-100 text-lg font-semibold
text-primary-600` initial disc and the name (`font-semibold`) over the town (`text-sm text-gray-600`).

Arrows: `absolute -left-4 / -right-4 top-1/2 hidden -translate-y-1/2 ... lg:flex` — **`hidden lg:flex`**,
i.e. no arrows below 1024 px. Dots come from `[data-carousel-dots]`, styled `h-2.5 w-8` active /
`w-2.5` inactive.

### FAQ (`#faq`)

`bg-white py-20 lg:py-28` (**820 px**). `mx-auto mt-16 max-w-3xl` (**768 px**) →
`divide-y divide-gray-200`. Each row `py-6`: `button.flex.w-full.items-center.justify-between.text-left`
with `span.text-lg.font-semibold.text-gray-900` question and a
`ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600`
disc (32 px, rotates 45°) holding a plus glyph; panel `overflow-hidden transition-all duration-300`
starting at `max-height: 0; opacity: 0`, answer `pt-4 text-gray-600`.

### Closing band (`#contact`)

`bg-primary-700 py-20 lg:py-28` (`rgb(141,78,18)`, **440 px**), `mx-auto max-w-3xl text-center`:
`h2 text-3xl font-bold tracking-tight text-white sm:text-4xl` → `mx-auto mt-5 max-w-xl text-lg
text-primary-100` → `mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row` of two CTAs:
`rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700 hover:bg-primary-50` (`Size mine`)
and `rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white hover:border-white
hover:bg-white/10` with a phone glyph (`Call (555) 090-0900`). Flat — no gradient, no image, no pattern.

### Footer

`bg-gray-900 pt-16 text-gray-300 lg:pt-24` (**567 px**, 96 px top pad). `grid gap-12 lg:grid-cols-12
lg:gap-8`: brand `lg:col-span-4` (light wordmark at `h-10`, `mt-4 max-w-xs text-gray-400` blurb,
`mt-6 flex gap-4` of three `rounded-lg bg-gray-800 p-2.5 text-gray-400` 40 px tiles, then
`mt-6 space-y-2 text-sm text-gray-400` with address / phone / mailbox) · links block
`sm:grid-cols-3 lg:col-span-5` in a nested grid · newsletter `lg:col-span-3`. Column heads
`text-sm font-semibold uppercase tracking-wider text-white`, links `text-gray-400 hover:text-white`.
Input `rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-white placeholder-gray-500`, button
`rounded-lg bg-primary-600 px-4 py-2.5 font-medium`. Bottom bar `mt-16 flex ... border-t border-gray-800
py-8`, `text-sm text-gray-500`.

**House rule:** the bottom bar gains a `Component Dock` link to `https://www.componentdock.com/`. The
reference has no such link; add it there (not in the brand column) so the parity is obvious.

## Source → React adaptation table

| reference | recreation | notes |
| --- | --- | --- |
| `astro` page + client router | `src/App.tsx` | single page, no router |
| inline kit (reveal, header, carousel, FAQ, cookie) | hooks / small components | `useReveal`, `useHeaderShadow`, `Carousel`, `Faq`, `CookieStrip` |
| inline `initSizeIt()` + `textContent` writes | `Sizing` component with `useState` | derive the five outputs during render; no effect writes |
| `[data-licence-bar]` | `LicenceBar.tsx` | static |
| `header[data-header]` + `[data-mobile-menu]` | `Navbar.tsx` | disclosure state |
| hero + `#quote` | `Hero.tsx` + `QuoteCard.tsx` | form validation lives in the card |
| `#size` | `Sizing.tsx` (+ `Chip` sub-component) | the tested core |
| `#emergency` + `[data-sticky-call]` | `EmergencyBand.tsx` + `StickyCall.tsx` | |
| `#options` | `Options.tsx` | six cells from a typed array |
| `#why-us` | `WhyUs.tsx` + `FlowPanel.tsx` (SVG) | figure `order-last lg:order-first` |
| `#process` | `Process.tsx` | `<ol>` |
| `#areas` | `Areas.tsx` | twelve towns |
| `#testimonials` | `Testimonials.tsx` | carousel 3/2/1, 5 s |
| `#faq` | `Faq.tsx` | exclusive |
| `#contact` | `ClosingBand.tsx` | |
| `footer` | `Footer.tsx` | newsletter validation |
| logo / flow-panel SVGs | inline SVG components | redrawn, not copied |

Data lives in `src/data.ts` (or per-component consts): fixtures with `gpm`/`gallons`, climates with
`incoming`, people options, six options with prices, twelve towns, three reviews, five FAQs. Keeping the
sizing numbers in data — not inline in JSX — is what lets a test assert the reference's `4.0 / 68 / 40 / 52`
checksum without rendering the whole band.

## Sibling comparison (same generated-template family, different designs)

| | Everhot → **Kettle** | Dowser → Aquifer | Curbline → Plantroom |
| --- | --- | --- | --- |
| brand | burnt orange `#ae6211` | cyan `#0886b2` | blue |
| neutrals | warm grey `#f7f7f7`→`#161616` | blue-grey `#f5f6fa`→`#141726` | grey |
| type | **Manrope** + JetBrains Mono | Space Grotesk + JetBrains Mono | Inter |
| killer feature | **live sizing calculator** (inline JS, 3.5 KB) | four-instrument argument + located-slab SVG | response-tier explainer |
| dark bands | `#161616` (sizing) + `#111827` (footer) | why-us panel + footer | — |
| kit hash | `e26cc055…` | `e26cc055…` | `e26cc055…` |

Identical kit hash, completely different page. Do not import a sibling's tokens, breakpoints or copy —
only the *behaviour* inventory transfers.

## Traps (measured, in the order they bite)

1. **`everhot.jpg` 404s; the screenshot is `everhot-template.jpg`.** Same for `og-image.jpg` and
   `downloads/free/everhot.zip` — the build is Astro, there is no archive twin.
2. **`ink-300` is used but never defined.** `placeholder:text-ink-300` appears on six inputs, and the
   sheet has no `--color-ink-300`. Either define it (`#b4b4b4`, the flow panel's label grey) or drop the
   class; a silent fallback is the one outcome to avoid documenting as intentional.
3. **The nav breakpoint is `xl` (1280), not `lg`.** The reference's own comment explains that 1024–1279
   buried the last links. Keep `xl`; the location pill is `2xl`.
4. **`#service-areas` does not exist.** Two anchors point at it; the band id is `areas`. This is the same
   defect as the sibling preps — repair it, do not reproduce it.
5. **There is no `[data-animate]` rule in the stylesheet.** The reveal's `opacity:0` start state is applied
   by the kit at runtime, so grepping the sheet for it finds nothing and a static DOM read shows full
   content. Do not conclude "no reveal".
6. **The sizing numbers are `data-gpm` / `data-gallons` / `data-incoming`.** A rename to `data-flow` or
   `data-temp` yields `0` and the whole band silently reads `0.0 gpm`. Type the data, do not retype it.
7. **`people` defaults to 4 when nothing is checked**, and `incoming` to 55 when no climate is checked —
   even though the reference *marks* `Virginia average` as checked, so the 55 branch is unreachable in the
   default render. Implement both branches anyway; a test can deselect the climate.
8. **`rise ≥ 70 && gpm ≥ 5` is the first verdict branch, and it is checked before `gpm ≤ 3.5`.** Reordering
   the branches changes the copy for a bath + hard winter (4 gpm, 78° rise): the reference says "either
   works", the reordered version says "will struggle". Nothing about that reads wrong in isolation, which
   is why it needs a test.
9. **The `flex-1` blurb in each options cell aligns the price lines.** Remove it and the six prices float.
10. **Carousel arrows are `hidden lg:flex`.** Copying a sibling's `flex` puts arrows over the card on a
    390 px phone.
11. **Two different star colours.** `amber-400` in the licence strip, `primary-400` `#e99c31` in the
    testimonials. Unifying them is the most tempting "cleanup" on this page and it is wrong.
12. **`@font-face` is not in the stylesheet** — it is in an 11,620-byte inline `<style>` served from
    `/cf-fonts/v/…`. Grepping the CSS for the family name only finds the two `font-family` declarations.
13. **The JSON-LD block is corrupt** (`"@context":"https://***@type"` — a slider rewrote `schema.org`).
    Do not copy it; write your own or omit it.
14. **`white/35` and `white/45` on `#161616` are borderline for contrast.** The reference uses them for
    the sizing band's footnote and hints. If the a11y check fails, raise them and record the deviation
    rather than shipping a 3.5:1 footnote.
