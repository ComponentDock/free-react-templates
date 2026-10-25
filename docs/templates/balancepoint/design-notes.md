# Balancepoint — design notes

Prep research for `apps/balancepoint`, recreating the ColorLib **Switchover** design (`switchover`).
Live preview: https://preview.colorlib.com/theme/switchover/ (200, 72,073 B, read 2026-10-25).
Spec: `openspec/specs/template-balancepoint/spec.md`. Tasks: `docs/templates/balancepoint/tasks.md`.

## The thesis, in one paragraph

The site sells a **number**, and it puts the number where a hero photograph would normally go. A split hero
carries the promise (*"The rebates are real. Here they are, itemised."*) on the left and a **three-field quote
card** on the right; the very next band is a **near-black ledger** in which six incentive programmes appear as
ticked lines — `−$2,000`, `−$1,600`, `−$1,800`, `−$800`, `−$900`, `−$1,200` — each with the condition that
usually disqualifies people written underneath it in 14 px, and a summary card that resolves to
**`$14,800 − $4,400 = $10,400`** in 36 px mono. Everything after that is defence: the chart band explains what
happens below the balance point, the services grid prices each route *"From $12,400 installed"*, the FAQ refuses
to oversell, and the closing lime band asks *"Want your actual net figure?"*. The design's argument is that a
trade site can win on **arithmetic and candour** rather than on stock photography — which is why there is not one
photograph on the page.

## Structure order (measured at 1440 × 900)

| # | band | px range | height | ground | what carries it |
| - | ---- | -------- | -----: | ------ | --------------- |
| 0 | licence strip | 0 – 37 | 37 | `#1f262c` | licence no. · rebate paperwork · county · 4.9 rating |
| 1 | header (sticky) | 37 – 118 | 81 | white 90 % + blur | six nav labels, phone pill, dark toggle, lime CTA |
| 2 | hero | 118 – 802 | 684 | `#f5f7f8` | `h1` + 4 ticks / quote card 469 × 524 |
| 3 | `#incentives` | 802 – 2,002 | 1,200 | `#13181c` | 6 checkbox rows + summary `dl` + 36 px net |
| 4 | `#why-us` | 2,002 – 2,938 | 936 | `#f5f7f8` | SVG chart + four 2 px-bordered `dl` entries |
| 5 | `#services` | 2,938 – 3,841 | 903 | `#ffffff` | hairline 3 × 2 grid, six prices |
| 6 | `#areas` | 3,841 – 4,309 | 468 | `#ffffff` | 12 towns, 3 columns, 1 px rules |
| 7 | `#testimonials` | 4,309 – 5,077 | 768 | `#f9fafb` | 3 × 405 cards, lime stars, initial discs |
| 8 | `#faq` | 5,077 – 5,897 | 820 | `#ffffff` | 5 rows × 81 px — answers collapsed to **0** |
| 9 | `#contact` | 5,897 – 6,337 | 440 | `#4a6918` | white pill + 2 px outline pill |
| 10 | footer | 6,337 – 6,904 | 567 | `#111827` | 4 / 5 / 3 columns, newsletter, bottom bar |

Document: **6,904 px** at 1440 **and** 1280; 7,198 at 1024; 8,504 at 768; 10,586 at 390; 11,726 at 320 (where it
also **overflows horizontally**: `body.scrollWidth` 389 — see spec §Reference defects 5).

## DOM skeleton

```txt
<div id="preloader">                      fixed inset-0 z-[100] · 40 px spin ring
<a class="sr-only focus:not-sr-only……">   Skip to content → #main-content
<div id="scroll-progress">                fixed top-0 · h-0.5 · #5d861b
<div class="bg-ink-800 border-b">         LICENCE STRIP · h-9
  <ul> Licence · WA …#000AA | Rebate paperwork filed for you | Serving · Spokane County </ul>
  <p> ★ 4.9 · 190+ reviews on Google (sample) </p>
<header data-header class="sticky top-0 z-50 …">   HEADER · h-16 lg:h-20
  <a href="/"> logo.svg (+ logo-light.svg in dark) </a>
  <nav aria-label="Main navigation"> 6 × a[data-nav-link] </nav>
  <div> location pill (2xl) · phone pill (md) · button[data-dark-toggle] · CTA · button[data-mobile-toggle] </div>
  <div data-mobile-menu class="hidden xl:hidden"> 6 links + pills + full-width CTA </div>
</header>
<main id="main-content">
  <section class="bg-ink-50">                     HERO
    <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div class="lg:col-span-7"> eyebrow · h1 (+ span.text-primary-600) · lede · rating · ul 4 ticks </div>
      <div class="lg:col-span-5"> <div id="quote" class="rounded-2xl … shadow-md p-8">
        h2 · p · form: 2 × label+input, 1 × label+select(7) · submit · caveat </div></div>
    </div>
  </section>
  <section id="incentives" data-incentives class="section bg-ink-900 text-white">   LEDGER
    header (eyebrow · h2 · lede) · grid lg:grid-cols-12 gap-12
      <ul class="space-y-3"> 6 × <li><label class="… has-[:checked]:…">
            <input type=checkbox name=incentive data-amount="…" [checked]>
            <span> name · <span class="font-mono text-primary-300">−$…</span>
                   <span class="uppercase text-white/35">source</span>
                   <span class="text-white/50">condition</span> </span></label></li> </ul>
      <div class="rounded-2xl border-white/10 bg-white/5 p-8">
        <dl> Installed price · Incentives selected[data-incentive-total] </dl>
        <div class="border-t border-white/10"> What you actually pay · p[data-net-total][aria-live=polite] </div>
        <p> paperwork note </p> <a class="btn btn-primary"> Check what I qualify for </a>
        <p class="text-white/35"> sample caveat </p> </div>
  </section>
  <section id="why-us" class="section bg-ink-50">   CHART BAND
    <div class="grid lg:grid-cols-2 gap-16"> <figure order-last lg:order-first> img(800×600 svg) + figcaption </figure>
      <div> eyebrow · h2 · lede · <dl class="space-y-6"> 4 × div.border-l-2 border-primary-600 pl-5 </dl> </div></div>
  </section>
  <section id="services" class="section bg-white">  SERVICES
    header · <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 rounded-2xl border overflow-hidden">
      6 × <div class="flex flex-col bg-white p-6 lg:p-8"> h3 · p.flex-1 · p.text-primary-700 price </div></div>
    <p class="text-sm text-ink-400"> sample-price caveat </p>
  </section>
  <section id="areas" class="section bg-white">      AREAS
    grid lg:grid-cols-12 gap-16 → 5 cols (h2, lede) | 7 cols (<ul class="grid grid-cols-2 sm:grid-cols-3 gap-x-6"> 12 × li)
  </section>
  <section id="testimonials" class="bg-gray-50 py-20 lg:py-28">  REVIEWS
    centred header + pill · <div class="relative mt-16"><div class="overflow-hidden">
      <div class="flex transition-transform"> 3 × <div class="flex-shrink-0 px-3"> card </div></div></div>
      <button aria-label="Previous testimonial"> · <button aria-label="Next testimonial"> · <div dots (empty)></div>
  </section>
  <section id="faq" class="bg-white py-20 lg:py-28">  FAQ
    <div class="divide-y"> 5 × <div class="py-6"><button> question + round chevron </button>
      <div class="overflow-hidden transition-all"> <p> answer </p></div></div></div>
  </section>
  <section id="contact" class="bg-primary-700 py-20 lg:py-28">  CTA BAND · 2 buttons
</main>
<footer class="bg-gray-900 pt-16 lg:pt-24"> 4/5/3 columns · bottom bar </footer>
<div id="cookie-consent" role="dialog"> · <button id="back-to-top">
```

## CSS token reference block (declare in `@theme`)

```css
@theme {
  --color-primary-50:  #f4fbe8;
  --color-primary-100: #e6f6cb;
  --color-primary-200: #ceec9c;
  --color-primary-300: #b0dc66;
  --color-primary-400: #93c63c;
  --color-primary-500: #78a926;
  --color-primary-600: #5d861b;   /* CTAs, progress bar, h1 second line, ticks */
  --color-primary-700: #4a6918;   /* #contact ground, eyebrows, prices, CTA hover */

  --color-ink-50:  #f5f7f8;   /* hero + #why-us ground */
  --color-ink-100: #e8ecef;   /* header border, services hairline ground, town rules */
  --color-ink-200: #d0d8dd;   /* pill borders, form borders */
  --color-ink-300: #a6b3bc;   /* placeholders only */
  --color-ink-400: #748592;   /* sample-data footnotes, figcaption */
  --color-ink-500: #546472;   /* ledes / body prose */
  --color-ink-600: #3e4b56;   /* nav labels */
  --color-ink-700: #303a43;   /* tick labels, town items, form labels */
  --color-ink-800: #1f262c;   /* every heading + licence strip ground */
  --color-ink-900: #13181c;   /* the ledger ground */

  --font-sans: "Outfit", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", Consolas, monospace;

  --radius-lg:  .5rem;   /* buttons, inputs */
  --radius-xl:  .75rem;  /* ledger rows */
  --radius-2xl: 1rem;    /* quote card, summary card, services shell, review cards */

  --shadow-soft: 0 4px 16px -4px rgb(0 0 0 / 0.10);
}
```

Stock Tailwind greys do five jobs and nothing else: `gray-50 #f9fafb` (reviews ground), `gray-900 #111827`
(footer), `gray-950 #030712` (dark-mode ground), `amber-400` (the hero rating stars **only** — the review cards use
`primary-400`), and the `white/70 · white/55 · white/45 · white/35` opacity ladder on the ledger band.

## Screenshot analysis (`switchover-template.jpg`, 2,400 × 1,892, real `image/jpeg`, 321,270 B)

The catalogue card is a **whole-page render**, so it is a colour-and-rhythm map rather than a hero crop. Reading it
top-down: a thin dark line (licence strip) → white header → **pale grey hero with a two-line headline left and a
white card right** → **a long, very dark band occupying roughly a third of the card**, in which six rows and their
lime `−$…` amounts are still legible at this scale → pale bands with a **dark chart panel** on the left (chart
inside a card, not a photo) → a **3 × 2 card grid** with hairline rules → a **three-column text list** → three
**white cards** with lime stars → five thin **collapsed rows** → a **solid lime band** with two buttons → a **black
footer**. Colour census of the render: `#f5f7f8` · `#ffffff` · `#13181c` · `#5d861b` / `#93c63c` · `#4a6918` ·
`#111827`.

Three things the card makes obvious that the DOM alone does not:

1. **The dark ledger is the page's centre of gravity.** It is the only saturated dark surface, it sits directly
   under the hero, and it is taller than any other band except the hero at small widths (1,200 px vs 684).
2. **There is no photography.** The chart panel and the ledger rows carry all the visual weight, so a recreation
   that substitutes a hero photo has removed the design's argument, not just its texture.
3. **The lime is rationed.** Three or four touches per band — a CTA, a price line, a tick, a star row. Used as a
   ground in more than one band, the page stops reading as grey-and-white-with-green-signals.

## Section-by-section fidelity notes

### Licence strip (0 – 37 px)

`h-9`, `bg-ink-800`, 1 px transparent bottom border (`border-b`), `text-xs`, `text-ink-100`. Three pairs with
`opacity-70` labels and 600-weight values; pairs 2 and 3 are `hidden sm:flex`, so at 390 only the licence number
survives. The right side is a rating, not a link: an `amber-400` star + **4.9** + `opacity-70` *190+ reviews on
Google (sample)*. **In flow, not fixed** — it scrolls away and the sticky header's top edge follows it. The
licence number is the one place the source brand leaks (`WA SWITCHO#000AA`): invent `WA BALANCE#000AA` and keep the
shape.

### Header (37 – 118 px, sticky)

80 px row + 1 px `#e8ecef` border; **65 px below `xl`** (64 px row). Ground white at 90 % with
`backdrop-filter: blur(16px)` — the page scrolls under it, and the `#13181c` ledger passing beneath the blurred
white is a genuine part of the look. Six labels at 14/600 `#3e4b56` with `gap-7`; **location pill only at
≥ 1536**, **phone pill from `md`**, dark toggle, lime CTA (`px-5 py-2.5`, radius 8), burger at `xl:hidden`. Nav
collapses at **1280**, not 1024 — the same breakpoint discipline as the sibling builds. `shadow-lg` appears past
50 px of scroll.

### Hero (118 – 802 px)

12 columns, **7 / 5**, `gap: 64px`; the copy column has `lg:pt-6` so the headline's cap-height aligns with the
card's top edge. `h1` **60/66, 700, −1.5 px**: sentence one in `#1f262c`, sentence two (`Here they are,
itemised.`) in `#5d861b` — the colour break lands exactly on the promise, which is why the copy must stay split in
two. Eyebrow 14/700 uppercase `#4a6918`. Lede 18/28 `#546472` at `max-w-xl`. Rating line: five 16 px `amber-400`
stars, then `4.9` in 700, then the caveat at `opacity-80`. Four ticks in `sm:grid-cols-2`, each a 16 px
`primary-600` check with `mt-1` optical alignment and a 16 px `#303a43` label.

The **quote card** is the 5-column rail: `rounded-2xl`, 1 px `#e8ecef`, `shadow-md`, `p-8` (**469 × 524**). Three
fields only — that is the promise in its own subhead (*"Three fields. We reply within the hour on weekdays."*) —
so adding a fourth (e-mail, postcode) breaks the design's best line. Inputs are `rounded-lg border-ink-200 px-4
py-3 text-base` with `focus:ring-2 ring-primary-500/20`; the select's first option is the placeholder
(*Choose the closest match*) and must be `disabled selected` in the port so it cannot be submitted as an answer.
The submit is the widest lime object above the fold; the caveat under it (*"No obligation. We will tell you if a
heat pump is the wrong answer for your house."*) is 12 px `#748592` and is content, not legal boilerplate — it is
the same honesty the ledger enforces.

### `#incentives` (802 – 2,002 px) — the band that is the template

`#13181c`, `padding-block: 112px`, 12-col **7 / 5**, `gap: 48px`. The header block is capped at `max-w-2xl`. Each
row is a `<label>` wrapping the checkbox and its text, `rounded-xl border border-white/10 p-4`, so the whole row is
a hit target — reproduce that. Inside: name (600 white) and amount (mono, `#b0dc66`) sit on one baseline via
`flex flex-wrap items-baseline justify-between gap-2`; the source label is `text-xs font-semibold uppercase
tracking-wide text-white/35`; the condition is `text-sm text-white/50` at `mt-2`. The selected row is
`has-[:checked]:border-primary-400/60` + `has-[:checked]:bg-primary-400/5` — a 1 px lime edge and a 5 % lime wash,
nothing more.

The summary card is `bg-white/5` with a `white/10` border: a two-row `dl` (installed price, selected incentives in
lime) with space-between values in mono, a `border-t` rule, the uppercase *What you actually pay* label, and the
**36 px mono `tabular-nums` net figure** with `aria-live="polite"`. Then the paperwork paragraph at
`text-sm white/45`, the lime **Check what I qualify for** CTA (full width, `justify-center`), and the
`text-sm white/35` caveat. Measured arithmetic: load **−$4,400 / $10,400**; all ticked **−$8,300 / $6,500**; none
ticked **−$0 / $14,800**; the source script floors the net at `Math.max(…, 0)` and prints `'−'` (U+2212) + the
grouped amount. Copy the floor, the minus and the grouping exactly — a plain hyphen looks like a hyphenated word
in mono.

### `#why-us` (2,002 – 2,938 px)

Two columns `gap: 64px`, **figure left** (`order-last lg:order-first`), so below `lg` the reader meets the claim
before the evidence. The figure is a **chart, not a photograph**: `#13181c` ground, `#1f262c` inner card,
`Output against temperature` at 24/700, `#303a43` axes, a `#93c63c` rising curve, a lime dot labelled
**balance point** with *"What the house loses"* and *"Below here, backup makes up the difference"*, mono
`5°F / 20°F / 35°F / 50°F` axis labels, and a footer line *"Where it sits is a property of your house, not of the
brochure."* Below it, the figcaption invites replacement — that is a launch decision for the buyer, not a licence
to swap the chart for a stock living room.

The four `dl` entries are the page's argument in prose: each opens with a **2 px `#5d861b` left border** (`pl-5`),
`space-y-6` between them, `dt` 16/700 white-ish (`#1f262c`), `dd` 16/28 `#546472`. Copy verbatim — the
*"The switchover point is a setting, not a limit"* entry is the one the whole brand is named after.

### `#services` (2,938 – 3,841 px)

Six cells, three across at `lg`, two at `sm`, one below — with **`gap: 1px` on `bg-ink-100`** inside a
`rounded-2xl border border-ink-100 overflow-hidden` shell, so the rules are the page showing through. Cells are
`flex flex-col bg-white p-6 lg:p-8` (**404 × 208** at 1440), `h3` 18/700, blurb 16/24 `#546472` with `flex-1`
(this is what pins every price line to the same baseline), price 14/700 `#4a6918`. The `h2` in the source says
**four** routes over six cells: cells 5 and 6 (*Panel and service assessment*, *Insulation and air sealing*) are
things to do first, not routes. Fix the count in the copy (*"Four routes, and two things to do first"*) rather than
deleting two honest entries.

### `#areas` (3,841 – 4,309 px)

A 5/7 split: claim left, plain-text town list right. Twelve `<li>`s at 16 px `#303a43` in `grid-cols-2
sm:grid-cols-3` with `gap-x-6`, each `border-b border-ink-100 py-2.5` (**211 × 45** at 1440). No map, no pins, no
chips — the reference's own footnote argues the point: *"Written as plain text it is the cheapest local search
signal a trade site has."* Keep it plain. The header's location pill must point here (`#areas`), not at the
reference's dead `#service-areas`.

### `#testimonials` (4,309 – 5,077 px)

`#f9fafb`, `py-20 lg:py-28`, centred `max-w-3xl` header with a `bg-primary-100 text-primary-700` *Reviews* pill.
Three slides `405 × 320` (exactly a third of the 1,216 track) each `px-3`, the card `rounded-2xl bg-white p-8
shadow-soft`; five `primary-400` stars at 20 px, quote at 18/24 **500** `#111827`, then a 48 px `bg-primary-100`
disc holding the initial in 18/600 `primary-600`, name 600 and town 14 px `#6b7280`. **The controls are dead on the
reference** (arrows do nothing, the dot row is empty): either ship a real one-per-view slider below `lg` or drop
both. The reviews are explicitly sample data and the caveat must survive.

### `#faq` (5,077 – 5,897 px)

Five rows, 768 wide, 81 px each, `divide-y` 1 px `#e5e7eb`. Question 18/24 600 `#111827`, plus a 32 px
`bg-gray-100` round chevron. **On the reference every answer measures 0 px**: no `aria-expanded`, no
`aria-controls`, no handler — the kit's accordion only binds inside the mobile menu. This is the highest-value fix
in the recreation: the five answers are the honest material the rest of the page sets up. Open the first on load,
animate height ≤ 200 ms, expose the state properly, and rotate the chevron.

### `#contact` (5,897 – 6,337 px)

`#4a6918` at `padding-block: 112px`, `max-w-3xl` centred. `h2` 36/40 white, lede 18/28 `#e6f6cb`. Two buttons:
the white pill (white ground, `#4a6918` label, `px-8 py-4`, radius 8) and the 2 px `white/40` outline pill with a
phone glyph; side by side at `sm`, stacked below, each `w-full sm:w-auto`. Both are large — this band is the
page's second-strongest object after the net figure.

### Footer (6,337 – 6,904 px)

`#111827`, `pt-16 lg:pt-24`, 12-col **4 / 5 / 3**. Column 1: 190 × 40 light wordmark, the meta-description blurb,
three 40 px `bg-gray-800` social chips, address / phone / e-mail. Columns 2–4 (`sm:grid-cols-3`): **Services**,
**Company**, **Support** with `text-sm font-semibold uppercase tracking-wider` heads and `space-y-3` links.
Column 5-ish (**Stay Updated**) holds the blurb, the e-mail input and the lime **Subscribe** — the row that
overflows at 320 on the reference because it refuses to shrink below 373 px. Bottom bar: `mt-16 border-t
border-gray-800 py-8`, copyright left, Privacy/Terms right.

## Source → React adaptation table

| source construct | reference behaviour | React port |
| ---------------- | ------------------- | ---------- |
| `[data-incentives]` + six `input[data-amount]` + `[data-incentive-total]` / `[data-net-total]` | vanilla re-sums on `change`, prints `'−' + toLocaleString`, floors at 0 | `incentives` data module + `useState<Set<id>>` + `useMemo` totals; render the same strings; `aria-live` on the net figure |
| `has-[:checked]` selected-row styling | pure CSS `:has()` | keep as `has-[:checked]:…` utilities; do **not** add a `data-selected` state class |
| `[data-dark-toggle]` + `localStorage.theme` + inline FOUC guard | class on `<html>`, OS default when the key is absent | `useTheme()` hook + an inline `<script>` in `index.html` that runs before paint (same guard), `aria-pressed` on the button |
| `[data-mobile-toggle]` / `[data-mobile-menu]` | toggles `hidden` + `aria-expanded`, swaps glyph | disclosure component with focus return and `Escape` close |
| `[data-accordion-toggle]` (bound only inside the mobile menu) | **FAQ never opens** | real accordion: `aria-expanded` / `aria-controls`, first open, height transition, reduced-motion |
| `[data-header]` scroll listener | adds `shadow-lg` past 50 px | `useScrollShadow(50)` |
| `#scroll-progress` | width = scroll fraction, 2 px | same, `aria-hidden`, no smoothing |
| carousel arrows + empty dot row | inert | drop them, or a working one-per-view slider below `lg` with `aria-live` |
| `<img src="…panel.svg">` chart | static SVG asset | author an inline SVG component in the same tokens (dark panel, lime curve, mono ticks, marked balance point) |
| cookie dialog | present but unbound | functional dialog: 1.5 s delay, `localStorage['cookie-consent']`, `essential` / `accepted` |
| JSON-LD inline | broken (`"@context":"https://***`) | valid `HVACBusiness` JSON-LD, or omit |
| Outfit + JetBrains Mono via host proxy `@font-face` | faces from `/cf-fonts/…` | one Google Fonts `<link>` (outfit 400–800 + JetBrains Mono 500/700, verified 200) |

## Sibling comparison (the 2026 Astro house kit)

Same kit, same router, **byte-identical behaviour bundle** (`e26cc055dec23e63…`) as *Mandrel* (mechanical
contractor), *Headwater* (water treatment), *Cresting* (roofing), *Nightwatch*, *Conduit* and *Jetline* — only the
stylesheet is rebuilt per design. What is different here, and worth telling the implementer:

| axis | this design | nearest sibling |
| ---- | ----------- | --------------- |
| photography | **zero photographs**; the only image slot is a chart | Mandrel has 3 photos; Headwater has a square hero photo |
| interactivity | **a live calculator** (six checkboxes → a floored net total) — the only page-specific behaviour in the kit | Jetline has an `aria-pressed` triage; Headwater a three-question quiz; none does arithmetic |
| forms | **2** (three-field quote card + footer newsletter) | Mandrel ships **no** `<form>` at all |
| palette | **lime** `#5d861b` on cool slate ink, one lime band | Mandrel: steel blue on cool slate; Headwater: sage on warm paper |
| reveals | **14** `fade-in-up` elements (testimonials + FAQ only) | Mandrel: **0** reveals — do not copy its "no motion" rule here |
| money type | **mono as a semantic token** (JetBrains Mono on every figure) | siblings use one sans throughout (Mandrel: Manrope only) |
| dense device | **a six-row ledger** with per-row conditions | Mandrel: a 7 × 5 tick matrix; Headwater: a quiz |
| layout quirk | 37 px in-flow licence strip above a sticky header (header top edge moves) | same quirk on Mandrel — remember `scroll-margin-top` needs +37 |
| files on disk | 4 `<img>` (3 distinct local SVGs), 44 inline `<svg>` | Mandrel: 7 `<img>`, 36 inline `<svg>` |

## Open questions / decisions for the implementer

1. **Review carousel:** build it or delete it? The reference has the shell of one and no behaviour. Recommendation:
   static three-up at `lg`, one-per-view slider with working arrows + dots below `lg` — the cards are too tall to
   stack three deep on a phone.
2. **Copy fix on the services `h2`:** *"Four routes, and two things to do first"* keeps the honesty and matches six
   cells; alternatively keep *four* and fold cells 5–6 into a two-item aside. Recommendation: change the heading.
3. **Dark mode scope:** the reference ships a full `dark:` ladder. Port it (the kit has it everywhere) but keep the
   ledger ground at `#13181c` — a "dark mode" that turns the ledger light destroys the page.
4. **The chart:** author it inline (recommended) or ship a static SVG in `public/`? Inline keeps the tokens and the
   `role="img"` label in one place; a static asset risks drifting from the palette.
5. **Sample data:** five caveats exist (rating, incentive amounts, starting prices, reviews, town list) plus the
   figcaption. Keep all six strings; they are the design's credibility and the buyer's legal cover.
6. **`TEMPLATES.md` row:** the exact line to paste (under `## Business`, after *Supreme*, before *Tailor*) is in the
   spec §Why this design has no row. Prep does not write to `TEMPLATES.md` — the implementer claims it.
