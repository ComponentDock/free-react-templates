# Jetline — design notes

Recreation of ColorLib **Rooter24** (`rooter24`) — https://colorlib.com/wp/template/rooter24/ ·
live preview https://preview.colorlib.com/theme/rooter24/ · read 2026-10-25 with `curl -4`,
plus `getComputedStyle` / `getBoundingClientRect` at 1440 × 900, 1280, 1024, 768, 390 and 320 in Playwright
(Chromium from `/root/free-templates-firebase/node_modules/playwright`).

Everything here is measured. Where a value is a reconstruction (Tailwind inlines theme colours, so the sheet
has no `--color-*` custom properties for `ink`/`primary`), the provenance is stated.

## Structure order (measured at 1440 × 900)

| # | band               | element                                        | ground              |  top | height | notes |
| - | ------------------ | ---------------------------------------------- | ------------------- | ---: | -----: | ----- |
| 0 | header             | `<header data-header>` sticky                  | `#111` @ 95 %, blur |    0 |     81 | 1 px `white/10` bottom border |
| 1 | hero               | `<section class="bg-ink-900">` (no id)         | `#111111`           |   81 |    735 | `h1` + 60 px phone + 2 CTAs + 4 ticks |
| 2 | triage             | `<section id="problems" class="section">`       | `#111111`           |  816 |    710 | 6 chips + 1 card |
| 3 | how it works       | `<section id="process" class="section">`        | `#111111`           | 1526 |    604 | `<ol>` 3 × 389 |
| 4 | pricing            | `<section id="pricing" class="section">`        | `#111111`           | 2130 |    821 | `<table>` 1,216 × 349 |
| 5 | coverage           | `<section id="areas" class="section">`          | `#141414`           | 2951 |    448 | 5/7 split |
| 6 | reviews            | `<section id="testimonials">`                   | `#111827`           | 3399 |    768 | carousel 3/2/1 |
| 7 | emergency band     | `<section id="call" data-emergency>`            | `#e5322d`           | 4167 |    164 | white pill |
| 8 | footer             | `<footer>`                                     | `#111111`           | 4331 |    568 | `pt-96`, 4/5/3 |

Fixed chrome (out of flow): `#scroll-progress` (2 px, `top-0`, `z-[60]`), `[data-sticky-call]`
(`bottom-0`, `z-40`, `lg:hidden`, **73 px** at 390), `#back-to-top` (`bottom-6 right-6`, 48 px),
`#cookie-consent` (`bottom-0`, `z-50`).

Document height: **4,899** at 1440 and 1280 · 5,035 at 1024 · 5,150 at 768 · 6,771 at 390 · 7,198 at 320.
No licence bar, no offer bar, no announcement strip — the hero is the first band after the header.

## DOM skeleton

```
<html lang="en" class="dark">                 ← dark is authored in; no toggle exists on this page
  <a href="#main-content" class="sr-only focus:not-sr-only …">Skip to content</a>
  <div id="scroll-progress" class="fixed top-0 left-0 z-[60] h-0.5 bg-primary-600"></div>

  <header data-header class="sticky top-0 z-50 w-full border-b border-white/10 bg-ink-900/95 backdrop-blur">
    <div class="container mx-auto flex h-16 items-center justify-between gap-6 px-4 lg:h-20 lg:px-8">
      <a href="/"> <img logo h-8 lg:h-9 /> </a>
      <nav class="hidden xl:flex xl:items-center xl:gap-8" aria-label="Main navigation">
        5 × <a data-nav-link="…" class="text-sm font-bold text-white/70 hover:text-white">
      </nav>
      <div class="flex shrink-0 items-center gap-3">
        <a data-phone href="tel:…" class="rounded-full bg-primary-600 px-4 py-2.5 …">
          <svg phone /> <span class="hidden sm:inline">(555) 010-0124</span><span class="sm:hidden">Call</span>
        </a>
        <button data-mobile-toggle aria-expanded="false" aria-label="Open menu" class="rounded-lg p-2 xl:hidden">
      </div>
    </div>
    <div data-mobile-menu class="hidden xl:hidden"> <nav class="border-t bg-ink-900 px-4 py-4"> 5 rows </nav> </div>
  </header>

  <main id="main-content">
    <section class="bg-ink-900">                                  ← hero
      <div class="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <p class="…uppercase tracking-[0.2em] text-primary-500"><span ping dot />Open now · someone is awake</p>
        <h1 class="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Blocked drain? <span class="block text-primary-500">Burst pipe? Call.</span>
        </h1>
        <p class="mt-6 max-w-xl text-lg text-white/70">…</p>
        <a data-phone href="tel:…" class="mt-10 block text-4xl font-extrabold … sm:text-5xl lg:text-6xl">(555) 010-0124</a>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row"> <a pill red /> <a pill outline /> </div>
        <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/60"> 4 × <li><span dot /></li> </ul>
      </div>
    </section>

    <section id="problems" class="section bg-ink-900">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="mx-auto max-w-3xl text-center"> h2 + p </div>
        <div class="mx-auto mt-10 max-w-3xl" data-problem-selector>
          <div class="flex flex-wrap justify-center gap-3" role="group" aria-label="Choose your problem">
            6 × <button data-problem="…" aria-pressed class="rounded-full border px-5 py-2.5 … aria-pressed:bg-primary-600">
          </div>
          <div class="mt-8 rounded-2xl border p-6 text-center lg:p-8 border-white/10 bg-white/5">
            6 × <div data-problem-panel="…" class="hidden"> p.title + p.body </div>
            <a data-phone class="rounded-full bg-primary-600 px-6 py-3 …"><svg phone /></a>
          </div>
        </div>
      </div>
    </section>

    <section id="process" class="section bg-ink-900">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-3xl"> kicker + h2 + lede </div>
        <ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
          3 × <li> <div class="flex items-baseline gap-3"><span>01</span><span class="h-px flex-1 bg-white/15"/></div>
                  <h3/> <p/> <p class="tag"/> </li>
        </ol>
      </div>
    </section>

    <section id="pricing" class="section bg-ink-900">
      <div class="container mx-auto px-4 lg:px-8">
        kicker + h2 (extrabold) + lede
        <div class="mt-10 overflow-x-auto">
          <table class="w-full min-w-[540px] border-collapse text-left">
            <thead><tr class="border-b border-white/15"> 3 × th </tr></thead>
            <tbody> 4 × <tr class="border-b border-white/10"> <td>label+sub</td><td>$89</td><td>arrival</td> </tr> </tbody>
          </table>
        </div>
        <p class="mt-6 max-w-3xl text-sm text-white/50">sample-pricing footnote</p>
      </div>
    </section>

    <section id="areas" class="section bg-ink-800 text-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5"> h2 + lede </div>
          <div class="lg:col-span-7"> <ul class="grid grid-cols-2 gap-x-6 sm:grid-cols-3"> 12 × <li class="border-b py-2.5 …"> </ul>
                                       <p class="mt-6 text-sm text-white/70">note</p> </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <div class="mb-4 inline-flex rounded-full bg-primary-100 px-3 py-1 … dark:bg-primary-900/50 dark:text-primary-300">Reviews</div>
          h2 + lede
        </div>
        <div class="relative mt-16">
          <div class="overflow-hidden"><div data-carousel-track class="flex transition-transform duration-500">
            3 × <div class="flex-shrink-0 px-3"><div class="rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-800">
                  stars × 5, blockquote, initials disc, name, town
            </div></div>
          </div></div>
          <button data-carousel-prev …/> <button data-carousel-next …/>
          <div class="mt-8 flex justify-center gap-2" data-carousel-dots></div>
        </div>
      </div>
    </section>

    <section id="call" class="bg-primary-600 text-white" data-emergency>
      <div class="container mx-auto px-4 py-6 lg:px-8 lg:py-8">
        <div class="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div class="min-w-0"> Open now (ping) · 20/700 line · 14/24 paragraph </div>
          <a data-phone class="pill white, text primary-700" />
        </div>
      </div>
    </section>

    <div data-sticky-call class="fixed inset-x-0 bottom-0 z-40 border-t p-3 lg:hidden dark:bg-gray-900">
      <a data-phone class="flex w-full … rounded-full bg-primary-600 py-3">(555) 010-0124</a>
    </div>
  </main>

  <footer class="border-t border-white/10 bg-ink-900 pt-16 text-white/70 lg:pt-24"> … 12-col 4/5/3 … </footer>

  <div id="cookie-consent" role="dialog" aria-label="Cookie consent" style="transform: translateY(100%)"> … </div>
  <button id="back-to-top" aria-label="Back to top" style="opacity: 0; pointer-events: none"> … </button>
</html>
```

Counted on the live document: **279** elements with a `class` (**270** distinct utilities), **9** ids,
**27** inline `<svg>`, **10** `<button>` at ≥ 1280 (6 chips + burger + 2 carousel arrows + back-to-top; the dot
container is empty when all slides fit), **0** `<input>`, **0** `<form>`, **0** `<select>`, **38** `<a href>`.

## CSS token reference (copy into `@theme`)

```css
@theme {
  /* warm-neutral structure ramp */
  --color-ink-50:  #f6f6f6;
  --color-ink-100: #e6e6e6;
  --color-ink-200: #c9c9c9;
  --color-ink-400: #6e6e6e;
  --color-ink-500: #4a4a4a;
  --color-ink-600: #2e2e2e;
  --color-ink-700: #1b1b1b;
  --color-ink-800: #141414;   /* #areas ground */
  --color-ink-900: #111111;   /* page ground */

  /* red ramp */
  --color-primary-50:  #fef2f2;
  --color-primary-100: #fde3e2;
  --color-primary-200: #fbc7c5;
  --color-primary-300: #f79c99;
  --color-primary-400: #f06b67;   /* process kicker / tags / stars */
  --color-primary-500: #e5443f;   /* hero accent / prices / eyebrow */
  --color-primary-600: #e5322d;   /* every solid CTA + #call ground + logo ring */
  --color-primary-700: #be221e;   /* CTA hover / call-band pill label */
  --color-primary-900: #731614;   /* Reviews pill fill, initials disc */

  /* the only shadow the design uses */
  --shadow-soft: 0 4px 16px -4px rgb(0 0 0 / 0.1);
}
```

Stock Tailwind greys are used verbatim: `gray-50 #f9fafb`, `gray-500 #6b7280`, `gray-700 #374151`,
`gray-800 #1f2937`, `gray-900 #111827`. No other colour exists on the page.

`.section` = `padding-block: 80px`, then `112px` from `lg`. Container = `max-width: 80rem`, `padding-inline`
16 → 32 px, so **1,216 px** of content at 1440 and 1280. There is **no gradient**, **no `backdrop-blur`**
except the header, and the only `shadow-*` tokens in use are `shadow-soft`, `shadow-lg` and the red
`shadow-primary-600/25`.

## Screenshot analysis (`rooter24-template.jpg`, 2400 × 1892, JPEG, 233,239 B)

Catalogue capture, framed as a **macOS browser window** (traffic lights, grey desk ground) at roughly 2× the
1440 layout. It shows the page from the header down to the bottom edge of the `#problems` card, and it agrees
with the live render on every point it covers:

- **Header**: near-black bar, red clock-ring wordmark on the left (`Rooter` white + `24` red), five small bold
  nav labels centred, red full-radius phone pill on the right. No burger at this width.
- **Hero**: the red `OPEN NOW · SOMEONE IS AWAKE` eyebrow with its dot; `Blocked drain?` in white over
  `Burst pipe? Call.` in red — **one solid red**, not two tones; the lede in grey-white at roughly half the
  width; then `(555) 010-0124` at headline scale; then the red `Call now` pill (with phone glyph) and the
  outline `What it costs` pill; then the four bullet ticks. No image, no illustration, no background.
- **`#problems`**: centred `What is happening right now?`, the grey lede, the chips in a **4 + 2** wrap with the
  first chip filled red, and the card below with its title, its two centred lines of advice and the red pill.
- The capture stops inside the card, so `#process`, `#pricing`, `#areas`, `#testimonials`, `#call` and the
  footer are **not** in the screenshot — the live DOM is the authority for those, and every number in this
  note comes from the live render, not the image.

The screenshot's only additional information is **confirmation of the dark-only treatment** and the fact that
the hero is genuinely empty space: at 2400 px wide the hero is mostly empty ground — the copy occupies the left half and the band has no
image to fill the right.

## Section-by-section fidelity notes

### 0 — Header

`sticky top-0 z-50`, `bg-ink-900/95` + `backdrop-blur` (measured `81 px` including the 1 px `white/10`
border; `65 px` below `lg`). Logo **180 × 36** (`h-8 lg:h-9`), footer **190 × 40** (`h-10`).
Nav = `hidden xl:flex … gap-8`, labels 14/**700** `white/70`, total width **441 px**, right-aligned phone pill
**186 × 44** (`px-4 py-2.5 sm:px-5`, 16/**800**, full radius, `#e5322d`, `hover:bg-primary-700`) with the
number hidden below `sm` and replaced by the word `Call`. Burger is `rounded-lg p-2` (8 px radius — the only
8 px control in the header) and swaps its SVG glyph for an ✕. The **nav collapses at 1280 (`xl`)**, not 1024,
which is why 1280 and 1440 share the same 81 px header and 4,899 px document.

### 1 — Hero

`container px-4 py-16 lg:px-8 lg:py-24` → **96 px** top/bottom inside 1,216. There is **no grid**: one
left-aligned column, `max-w-4xl` for the `h1`, `max-w-xl` for the lede, then everything full width.
The `h1` is `text-5xl → sm:text-6xl → lg:text-7xl` with `leading-[0.95]` and `tracking-tight`, so
**72 / 68.4 / −1.8** at 1440 and **48 / 45.6** at 390 (three lines). The red span is `block` — the break is
authored, not wrapped. The number is a `tel:` anchor at `lg:text-6xl` (60 px), `font-extrabold`,
`hover:text-primary-400`. CTAs: red pill **168 × 60** and outline pill **182 × 62** (`border-white/25`,
`hover:border-white/60`), `flex-col` → `sm:flex-row`. Ticks: `flex-wrap`, `gap-x-6 gap-y-2`, 14/**600**
`white/60`, each with a 4 px red dot (`h-1 w-1 rounded-full bg-primary-500`), and the fourth reads
`Average arrival 45 minutes (sample)` — the sample marker is part of the copy.

### 2 — `#problems`

Heading block `mx-auto max-w-3xl text-center` (no kicker). Chips live in a `flex flex-wrap justify-center gap-3`
inside `mx-auto mt-10 max-w-3xl`, wrapped in `role="group" aria-label="Choose your problem"`. Each chip:
`rounded-full border px-5 py-2.5 text-base font-semibold` = **46 px** tall, `white/20` border, `white/80`
label, `hover:border-white/50`, and the *active* state is expressed entirely through `aria-pressed:` variants
(`aria-pressed:border-primary-500 aria-pressed:bg-primary-600 aria-pressed:text-white`) — **that is the
idiomatic part of this design and Tailwind 4 supports the variant natively**; do not swap it for a class toggle.
The card is `rounded-2xl border p-6 lg:p-8` on `bg-white/5` with `border-white/10`, `max-w-3xl` (**768**),
centred text, title 18/700, body 16/24 `white/70` at `max-w-xl` (576), and the phone pill
`mt-6 inline-flex … rounded-full bg-primary-600 px-6 py-3` (18/700). Panels are siblings with `hidden`, driven
by one pressed key. Reserve height: the six bodies run 148–226 characters, so a shorter panel collapses the
card unless the tallest is reserved.

### 3 — `#process`

Kicker `How it works` (14/700 `+0.35 px` `#f06b67`), `h2` in a **672 px** column (so it wraps to two lines at
1440: *"Three steps, and you know the price"* / *"at the second one"*), lede `max-w-3xl`.
`<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">` → three **389**-wide items (`gap-24`), each opening
with `flex items-baseline gap-3` holding the 14/700 `tabular-nums` red `01` and an `h-px flex-1 bg-white/15`
rule that makes the number a labelled divider rather than a badge. Then `h3` (`mt-4`), body (`mt-2`), tag
(`mt-3`, 14/600 `#f06b67`). Column, not card: there is **no background, no border, no radius** on a step —
the only shape in the band is the 1 px rule.

### 4 — `#pricing`

The only table on the page and the only `font-extrabold` `h2` (800 vs 700 elsewhere). A real `<table>`
(`border-collapse`, `text-left`, `min-w-[540px]`) inside `mt-10 overflow-x-auto`, so the **wrapper** scrolls
below 640 and the page does not. Column widths at 1,216: **627 / 219 / 370**. `th` 14/700 uppercase `+0.35`
`white/50` with `padding: 12px 16px 12px 0`; the header rule is `white/15` (one step stronger than the body
rules `white/10`); label cell 16/700 white with a 14/24 `white/50` sub-label `mt-1`; price cell 18/**800**
`#e5443f`; arrival 16/600 `white/80`. No zebra striping, no card, no hover row state — it reads as a printed
tariff. Footnote `mt-6 max-w-3xl text-sm text-white/50`, one sentence of legal-ish caveat plus the
city's-side-of-the-line promise.

### 5 — `#areas`

`bg-ink-800` (**#141414**, one step up from the ground — the whole band, not a card), `text-white`.
`grid gap-10 lg:grid-cols-12 lg:gap-16` with **5 / 7** columns (**469 / 683**). Left: `h2` + lede, no kicker,
nothing else. Right: `<ul class="grid grid-cols-2 gap-x-6 sm:grid-cols-3">` of **twelve** `<li>` at 16 px
`white/90`, each `border-b border-white/10 py-2.5` (10 px) — an underlined list, no pins, no map, no chips.
The note under the list is 14/24 `white/70`. This is the page's only "coverage" claim and it is deliberately
textual: *"Written out rather than drawn on a map, so you can find your own town without squinting."* (the
`/areas/` route's line, quoted in §Inner-page inventory of the spec).

### 6 — `#testimonials`

The one band that is **not** `#111`: `bg-gray-900` (`#111827`) via `dark:bg-gray-900`, `py-20 lg:py-28`.
Centred head, `Reviews` pill (81 × 28, `padding: 4px 12px`, fill `#731614` at 50 %, label `#f79c99` 14/500 —
the `dark:` pair is what renders, the `bg-primary-100` light pair is dead). Cards **381 × 320**, radius 16,
`p-8`, ground `#1f2937` (`#111827` + one step), `shadow-soft`; five 20 px `#f06b67` stars; quote 18/**500**
white (three to four lines); then a **48 px** initials disc (`bg-primary-900`, glyph `#f06b67` 18/600), a
16/600 name and a 14/24 `gray-400` town. Track: `flex` + `transition-transform duration-500`, slides
`flex-shrink-0 px-3`, widths set in JS to `container / perView` — so the card is `perView`-dependent, not a
CSS grid. Arrows appear only when `maxIndex > 0` (never at ≥ 1024 with three slides); dots likewise.

### 7 — `#call`

`bg-primary-600` with `py-6 lg:py-8` → **164 px** at 1440, **256 px** at 390 (copy stacks above the pill).
Left: `Open now` (10 px ping dot, 14/600 uppercase `tracking-wide`, 90 % opacity), a 20/700 white line, then
14/24 at 90 % capped at `max-w-2xl`. Right: the **only white-ground button** on the page —
`bg-white text-primary-700` (label `#be221e`), **210 × 52**, full radius, `padding: 12px 24px`, 18/700,
`hover:bg-primary-50`-ish. It is the page's second phone CTA and it is intentionally the quietest-looking and
most contrasted at once.

### 8 — Footer

`bg-ink-900`, `pt-16 lg:pt-24` (**96**), top border `white/10`. `grid gap-12 lg:grid-cols-12 lg:gap-8` with
**4 / 5 / 3** (**384 / 488 / 280**). Brand column: 190 × 40 logo, `mt-4 max-w-xs text-gray-400` blurb, four
**40 px** social chips (`rounded-lg bg-gray-800 p-2.5`, `hover:bg-gray-700`), then address / phone / email
stacked as `gray-400` links. Middle five: `grid gap-8 sm:grid-cols-3` of three link columns, heads 14/600
uppercase `+0.5 px` white, links 16/400 `gray-400` `space-y-3`. Last three: the **Licensed** box — the
sample-licence sentence plus a red phone pill (`rounded-full px-5 py-3`, 16/800). Bottom bar:
`mt-16 flex … border-t border-gray-800 py-8`, 14 px `gray-500`: copyright left, `Privacy Policy` /
`Terms of Service` right, both `hover:text-gray-300`.

## Source → React adaptation

| source construct                                   | React port                                                                                                        |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| inline `<script>` chip switcher (`[data-problem]`) | `useState<ProblemKey>('burst')`; buttons carry `aria-pressed={key === active}`; panels render `hidden` when not active |
| `aria-pressed:` Tailwind variants for the chip skin | keep the attributes; style with `aria-pressed:` variants (no class toggling, no `active` prop)                     |
| kit's `[data-mobile-toggle]` + `innerHTML` glyph swap | `useState(open)`; render `<Menu/>` / `<X/>` from `lucide-react` — do not inject SVG strings                      |
| kit's `[data-header]` scroll listener               | one `useEffect` scroll handler (passive) adding `shadow-lg` past 50 px; clean up on unmount                       |
| kit's carousel (transform + JS-measured widths)     | `useState(index)` + `useRef` width measurement; `perView` from a resize listener (3 / 2 / 1); arrows and dots rendered only when `maxIndex > 0`; autoplay `setInterval(5000)` paused on hover and disabled under `prefers-reduced-motion` |
| kit's reveal-on-scroll                              | one `IntersectionObserver` over the six reveal wrappers, `threshold .1`, `rootMargin '0px 0px -10% 0px'`, unobserve after first hit, bail out entirely under reduced motion |
| cookie strip with `localStorage`                    | `useState` + `useEffect` 1,500 ms timer + a small `storage` helper; `role="dialog"` and the two buttons keep their 8 px radius |
| `#scroll-progress` / `#back-to-top`                 | one scroll handler feeding a CSS width %, and a `scrollY > 300` boolean for the disc                            |
| Astro `<table>`                                     | plain `<table>` inside `div.overflow-x-auto`; **not** a card grid — the design is a tariff, not a pricing card  |
| `logo.svg`                                          | **new original mark** (lucide glyph + two-tone wordmark) as a React component; never copy the asset             |
| `/cf-fonts` inline `@font-face`                     | one Google Fonts `<link>` for `Inter:wght@400;500;600;700;800` + `preconnect`; body stack `Inter, system-ui, sans-serif` |
| Astro inner routes                                  | out of scope for a single-page port; the copy lives in the spec's inner-page inventory if it is ever added      |

## Sibling comparison (same 2026 Astro set, same 16,233 B behaviour kit)

| template                | source       | trade                     | ground                        | hero                          | the distinctive band                              | form? |
| ----------------------- | ------------ | ------------------------- | ----------------------------- | ----------------------------- | ------------------------------------------------- | ----- |
| **Jetline** (this)      | `rooter24`   | emergency plumber, 24 h   | **dark `#111` + red `#e5322d`** | **no image — 60 px phone**    | **`#problems` six-chip triage, one card**         | no (home page) |
| Rodline                 | `flowpage`   | drain clearing, flat $49  | light paper + royal blue      | 7-col copy vs 5-col quote card | ruled services grid on a `gap-px` plate           | **yes, hero card** |
| Pipewright              | `journeyman` | one-van plumber, a person | light + bronze, Playfair      | 5-col portrait vs 7-col text  | `<dl>` of six priced services on hairlines        | no |
| Cresting                | `ridgeline`  | storm-damage roofing      | dark navy + burnt orange      | 6/6 photo vs inspection form  | `#claim` six-stage insurance sequence             | yes, hero card |

Read that table as the design brief: three of the four siblings are **light, photograph-led, form-led**, and
the two plumbing ones both sell a *price*. Rooter24 is the odd one — **dark, type-only, formless, and selling a
phone number** — so the parts that must not be "harmonised" toward the siblings are: the flat `#111` ground, the
absence of any hero image, the absence of a hero form, the tariff-style `<table>`, and the chip triage that
answers before it asks for anything.

Shared with Pipewright by coincidence rather than by copy: the 12-town areas list in a 5/7 split, the 164 px
emergency band, and the `py-20 / lg:py-28` rhythm. Keep those numbers — they make the band map match a
familiar sibling and are what the reference actually measures.

## Reference defects (fix in the port, do not reproduce)

1. **Horizontal overflow at 320 px** — document `scrollWidth` 334 vs viewport 320; the header's
   `flex shrink-0 items-center gap-3` (phone pill + burger) cannot shrink. Let it shrink, or drop the number to
   an icon-only control below `sm`.
2. **The fixed mobile call bar covers the footer** — 73 px fixed tray, no compensating bottom padding; the
   copyright line sits behind it. Add `pb-[73px] lg:pb-0` to the page shell.
3. **Malformed `tel:` link** — the footer's licence box emits `href="tel:(555) 010-0124"` while the other seven
   emit `tel:5550100124`. Every `tel:` must be digits only.
4. **Three bare `#` anchors** — the social chips and one footer link go nowhere. Point them at real
   destinations (or keep them as `#`-less buttons); zero bare `#` is the rule.
5. **Dead light-mode utilities** — the page hardcodes `<html class="dark">` and never offers a toggle, so every
   `bg-gray-50` / `bg-white` / `text-gray-900` / `border-gray-200` class in the markup is unreachable. Port the
   **rendered** values only; do not ship a light theme that the reference does not have.
6. **Unused kit handlers** — billing toggle, FAQ accordion, blog filters, lightbox, video modal, counters,
   typewriter, `#preloader` teardown. None of them have a target on this page; port only the eight behaviours
   listed in §Interaction inventory, and do not ship a `#preloader` element to justify a teardown script.
7. **`h1` block height is fixed at 137 px across breakpoints by accident** (two lines at 72 px, three at 48 px).
   Keep the metrics, but do not hardcode a height: it happens to match and will drift if the copy is
   paraphrased.
8. **JSON-LD telephone disagrees with the `tel:` links** (`+1-555-0124` vs `5550100124`). If structured data
   ships, make it match.
9. **`aria-label="Open menu"` never changes** to "Close menu" when the panel opens (`aria-expanded` flips, the
   label does not). Fix in the port.
