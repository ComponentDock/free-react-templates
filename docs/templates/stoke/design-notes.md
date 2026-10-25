# Stoke — Design Notes

Recreation of the ColorLib **"Coldsnap"** emergency-HVAC design
(https://colorlib.com/wp/template/coldsnap/, live preview
https://preview.colorlib.com/theme/coldsnap/) as **Stoke** — React 19 + Vite + Tailwind CSS 4 +
TypeScript, `apps/stoke`.

Full requirement set: `openspec/specs/template-stoke/spec.md`. This file is the *how*: the DOM
skeleton with classes verbatim, the paste-ready token block, and the per-band fidelity notes.

## Reference set (all read 2026-10-25, `curl -4`)

| file | bytes | why it matters |
| --- | ---: | --- |
| `theme/coldsnap/index.html` | 74,998 | the DOM: 9 bands + licence strip + header + footer + 4 chrome pieces |
| `_astro/Base.h47zVCKl.css` | 58,651 | the only stylesheet — every token, every component class |
| `_astro/Base.…BLoalVWc.js` | 16,233 | the house kit (identical hash to Circles' — reveal, header shadow, menu, FAQ, carousel, cookie, progress, back-to-top) |
| `_astro/ClientRouter…CYDbzu1r.js` | 16,357 | Astro view transitions — no design content, ignore |
| inline `<style>` (12,360 B) | — | Inter + JetBrains Mono `@font-face` pointing at `/cf-fonts/…` |
| inline `<script>` ×3 | 454 / 2,391 / 370 B | theme boot, **the response clock**, preloader removal |
| `assets/img/window-panel.svg` | 1,806 | the "day by window" diagram (redraw, don't copy) |
| `assets/img/logo.svg` / `logo-light.svg` | 739 / 739 | wordmark (redraw) |
| `css/style.css`, `js/snippet.js`, `downloads/free/coldsnap.zip` | 404 | no legacy sheet, no kit snippet, no archive twin |

Fetches need `-4` (the host's IPv6 is banned) and the browser needs
`--host-resolver-rules=MAP preview.colorlib.com 104.26.10.149`.

## Document order

```
#preloader                    fixed z-100, spinner
a.skip                        → #main-content
#scroll-progress              fixed h-0.5 primary-600
div[data-licence-bar]         ink-800, h-9, text-xs
header[data-header]           sticky z-50, h-16 / lg:h-20, white/90 + blur
  └ nav (xl only) + city pill (2xl) + phone pill (md) + dark toggle + Call now (xl) + burger (xl:hidden)
  └ div[data-mobile-menu]     hidden xl:hidden
main#main-content
  ├ section (hero)            ice-50 + blurred ice-200/50 disc
  ├ section#response          ink-900, 12-col 5/7 split, [data-response-clock]
  ├ section#process           white, 4 items, sm:grid-cols-3
  ├ section#services          white, 6-cell hairline grid
  ├ section#why-us            ink-50, figure + 4 dl items
  ├ section#areas             white, 12-col 5/7, 12 towns
  ├ section#testimonials      gray-50, 3-slide carousel
  ├ section#faq               white, 5-row exclusive accordion
  └ section#contact           primary-700
footer                        gray-900, 4 blocks + bottom bar
div#cookie-consent            fixed bottom, role=dialog
button#back-to-top            fixed 48px disc
```

## DOM skeleton (abridged, classes verbatim)

### Licence strip

```html
<div class="w-full border-b bg-ink-800 text-ink-100 border-transparent" data-licence-bar>
  <div class="container mx-auto flex h-9 items-center justify-between gap-4 px-4 text-xs lg:px-8">
    <ul class="flex min-w-0 items-center gap-x-4 gap-y-1 overflow-hidden">
      <li class="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
        <span class="opacity-70">Licence</span><span class="font-semibold">OK MECH #00000</span>
      </li>
      <li class="… hidden sm:flex"><span class="opacity-70">NATE-certified on every truck</span></li>
      <li class="… hidden sm:flex"><span class="opacity-70">Serving</span><span class="font-semibold">Tulsa metro</span></li>
    </ul>
    <p class="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium">
      <!-- star svg --><span>4.9</span><span class="opacity-70">260+ reviews on Google (sample)</span>
    </p>
  </div>
</div>
```

### Header

```html
<header class="sticky top-0 z-50 w-full border-b border-ink-100 bg-white/90 backdrop-blur-lg transition-all" data-header>
  <div class="container mx-auto flex h-16 items-center justify-between gap-6 px-4 lg:h-20 lg:px-8">
    <a href="/" class="flex shrink-0 items-center gap-2"><img src="logo.svg" class="h-8 w-auto lg:h-9 dark:hidden" …></a>
    <nav class="hidden min-w-0 xl:flex xl:items-center xl:gap-7" aria-label="Main navigation">
      <a href="#response" data-nav-link="response" class="whitespace-nowrap text-sm font-semibold text-ink-600 transition-colors hover:text-primary-700">Emergency</a>
      <!-- Services · Rates · Service areas · About · Contact, same classes, data-nav-link = <band id> -->
    </nav>
    <div class="flex shrink-0 items-center gap-2">
      <span class="hidden 2xl:block"><a href="#areas" class="inline-flex items-center rounded-full border border-ink-200 font-medium text-ink-700 … px-3 py-1.5 text-sm gap-1.5"><!-- pin --><span>Tulsa, OK</span></a></span>
      <span class="hidden md:block"><a href="tel:5550600600" data-phone class="… rounded-full font-semibold border border-ink-200 text-ink-800 … px-3 py-1.5 text-sm gap-1.5"><span>(555) 060-0600</span></a></span>
      <button type="button" data-dark-toggle class="rounded-lg p-2 text-ink-500 …" aria-label="Toggle dark mode"><!-- sun/moon --></button>
      <a href="tel:5550600600" class="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-700 xl:inline-flex">Call now</a>
      <button type="button" data-mobile-toggle class="rounded-lg p-2 text-ink-600 … xl:hidden" aria-label="Open menu" aria-expanded="false"><!-- burger --></button>
    </div>
  </div>
  <div class="hidden xl:hidden" data-mobile-menu>
    <nav class="border-t border-ink-100 bg-white px-4 py-4">
      <a href="#response" class="block py-3 text-base font-semibold text-ink-800">Emergency</a> …
      <div class="mt-4 flex flex-wrap gap-2 border-t border-ink-100 pt-4">
        <a href="tel:5550600600" data-phone class="… rounded-full …">(555) 060-0600</a>
      </div>
    </nav>
  </div>
</header>
```

### Hero

```html
<section class="relative overflow-hidden border-b border-ink-100 bg-ice-50">
  <div class="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-ice-200/50 blur-3xl" aria-hidden="true"></div>
  <div class="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24">
    <div class="max-w-3xl">
      <p class="text-sm font-bold uppercase tracking-wide text-ice-700">Tulsa · Licensed mechanical contractor</p>
      <h1 class="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
        We will not tell you we are fast.
        <span class="block text-primary-600">We will tell you when.</span>
      </h1>
      <p class="mt-6 max-w-2xl text-lg text-ink-600">Every HVAC company in this city says twenty-four seven. …</p>
      <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a href="tel:5550600600" class="btn btn-primary justify-center text-base">Call (555) 060-0600</a>
        <a href="#response" class="inline-flex items-center justify-center rounded-lg border border-ink-300 px-5 py-2.5 text-sm font-bold text-ink-700 no-underline transition-colors hover:border-ink-500">What time can you be here?</a>
      </div>
      <p class="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600 mt-8">
        <!-- 5 × star svg h-4 w-4 text-amber-400 -->
        <span class="font-bold">4.9</span><span class="opacity-80">260+ reviews on Google · sample data</span>
      </p>
      <ul class="mt-8 grid gap-3 sm:grid-cols-2">
        <li class="flex gap-2.5 font-medium text-ink-700"><!-- check svg mt-1 h-4 w-4 text-primary-600 --><span class="min-w-0">The arrival window, published by time of day</span></li>
        <!-- ×3 more -->
      </ul>
    </div>
  </div>
</section>
```

### Response band (the clock)

```html
<section id="response" class="section bg-ink-900 text-white" data-response-clock>
  <div class="container mx-auto px-4 lg:px-8">
    <div class="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div class="min-w-0 lg:col-span-5">
        <p class="text-sm font-bold uppercase tracking-wide text-primary-400">Response</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The window, by the hour</h2>
        <p class="mt-4 text-lg text-white/70">Our crews are not the same size at nine in the morning …</p>
        <ol class="mt-10 space-y-3">
          <li data-window-row="7-17" class="group flex min-w-0 items-baseline justify-between gap-4 border-l-2 border-white/15 py-2 pl-4 transition-colors data-[active]:border-primary-500">
            <span class="min-w-0">
              <span class="block font-semibold text-white/55 transition-colors group-data-[active]:text-white">Weekday daytime</span>
              <span class="mt-0.5 block text-xs text-white/30 transition-colors group-data-[active]:text-white/55">Six trucks out. Most calls are reached well inside the window.</span>
            </span>
            <span class="shrink-0 font-mono text-sm text-white/45 transition-colors group-data-[active]:text-primary-300">within 2 hours</span>
          </li>
          <!-- 17-22 Evenings to 10pm / within 3 hours · 22-7 Overnight / first call at 7am -->
        </ol>
      </div>
      <div class="min-w-0 lg:col-span-7">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p class="text-xs font-bold uppercase tracking-wide text-white/40">Right now</p>
          <p class="mt-2 font-mono text-4xl font-bold tabular-nums text-primary-400 sm:text-5xl" data-clock-promise aria-live="polite">within 2 hours</p>
          <p class="mt-3 text-lg text-white/80" data-clock-label>Weekday daytime crew</p>
          <p class="mt-2 min-h-[1.5rem] text-sm text-white/45" data-clock-note>Six trucks out, dispatch answers on the first ring.</p>
          <div class="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <a href="tel:5550600600" class="btn btn-primary justify-center text-base">Call (555) 060-0600</a>
            <p class="min-w-0 text-sm text-white/40">Answered by a technician, not an answering service.</p>
          </div>
        </div>
        <p class="mt-6 text-sm text-white/35">Sample windows, shown for the demo.</p>
      </div>
    </div>
  </div>
</section>
```

The window table the script resolves (verbatim from the page's inline script):

```js
const windows = [
  { from: 7,  to: 17, label: 'Weekday daytime', promise: 'within 2 hours', note: 'Six trucks out. Most calls are reached well inside the window.' },
  { from: 17, to: 22, label: 'Evenings to 10pm', promise: 'within 3 hours', note: 'Three trucks. After-hours rate applies and is quoted on the phone.' },
  { from: 22, to: 7,  label: 'Overnight', promise: 'first call at 7am', note: 'Two technicians on call overnight for no-heat below freezing and for anything unsafe. Everything else is booked first thing.', overnight: true },
];
// wrap-aware: from <= to ? h >= from && h < to : h >= from || h < to
// promise colour: !overnight ? 'text-primary-400' : 'text-ice-300'
// rows: row.dataset.windowRow === `${current.from}-${current.to}` → data-active
// re-run: setInterval(render, 60000)
```

### Process item

```html
<li>
  <div class="flex items-baseline gap-3">
    <span class="text-sm font-bold tabular-nums text-primary-600">01</span>
    <span class="h-px flex-1 bg-ink-100" aria-hidden="true"></span>
  </div>
  <h3 class="mt-4 text-lg font-bold text-ink-800">Check the breaker and the switch</h3>
  <p class="mt-2 text-ink-500">There is usually a plain light switch near the furnace …</p>
  <p class="mt-3 text-sm font-semibold text-primary-700">Fixes it more often than you would think</p>
</li>
```

Wrapper: `<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">` — four children.

### Service cell / hairline grid

```html
<div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
  <div class="flex flex-col bg-white p-6 lg:p-8">
    <h3 class="text-lg font-bold text-ink-800">No cooling</h3>
    <p class="mt-2 flex-1 text-ink-500">Capacitor, contactor, fan motor or refrigerant. …</p>
    <p class="mt-4 text-sm font-bold text-primary-700">From $119 after hours</p>
  </div>
  <!-- ×5 -->
</div>
```

### Why-us figure + claims

```html
<section id="why-us" class="section bg-ink-50">
  <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
    <figure class="order-last lg:order-first">
      <!-- inline SVG: 800×600, rect #14171D ground, inner #20242D rx-24, three bars rx-12
           #EE3B3B "Weekday daytime / within 2 hours", #B11717 "Evenings to 10pm / within 3 hours",
           #285A7C "Overnight / first call at 7am", mono ticks 07:00 17:00 22:00 07:00 -->
      <figcaption class="mt-3 text-sm text-ink-400">Sample crew schedule shown.</figcaption>
    </figure>
    <div>
      <p class="text-sm font-bold uppercase tracking-wide text-primary-700">Why publish a window</p>
      <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">A promise you can check is worth more than one you cannot</h2>
      <dl class="mt-8 space-y-6">
        <div class="border-l-2 border-primary-600 pl-5">
          <dt class="text-base font-bold text-ink-800">The window is by shift, not one number</dt>
          <dd class="mt-1 text-ink-500">Two hours in the daytime and first thing in the morning overnight. …</dd>
        </div>
        <!-- ×3 -->
      </dl>
    </div>
  </div>
</section>
```

### Testimonial card + FAQ row

```html
<div class="flex-shrink-0 px-3" data-carousel-slide>
  <div class="rounded-2xl bg-white p-8 shadow-soft">
    <div class="mb-6 flex gap-1"><!-- 5 × star, text-amber-400 --></div>
    <blockquote class="text-lg font-medium text-gray-900">“Furnace died on the coldest night of the year. …”</blockquote>
    <div class="mt-6 flex items-center gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-600">E</div>
      <div><div class="font-semibold text-gray-900">Ellis W.</div><div class="text-sm text-gray-600">Broken Arrow</div></div>
    </div>
  </div>
</div>

<div class="py-6">
  <button type="button" data-faq-toggle class="flex w-full items-center justify-between text-left">
    <span class="text-lg font-semibold text-gray-900">What counts as an emergency?</span>
    <span class="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200" data-faq-icon><!-- plus --></span>
  </button>
  <div class="overflow-hidden transition-all duration-300" style="max-height: 0px; opacity: 0;">
    <p class="pt-4 text-gray-600">No heat when it is below freezing, …</p>
  </div>
</div>
```

## CSS token reference (paste-ready `@theme` for `apps/stoke/src/index.css`)

```css
@theme {
  /* brand: red ramp (measured literals, not stock tailwind red) */
  --color-primary-50: #fff1f1;
  --color-primary-100: #ffdfdf;
  --color-primary-200: #ffc4c4;
  --color-primary-300: #ff9b9b;
  --color-primary-400: #fb6363;
  --color-primary-500: #ee3b3b;
  --color-primary-600: #d41f1f; /* brand */
  --color-primary-700: #b11717;
  --color-primary-800: #921717;
  --color-primary-900: #7a1a1a;

  /* neutral: blue-cast, not tailwind gray */
  --color-ink-50: #f6f7f8;
  --color-ink-100: #eceef1;
  --color-ink-200: #d6dae0;
  --color-ink-300: #b0b7c2;
  --color-ink-400: #7e8898;
  --color-ink-500: #5d6879;
  --color-ink-600: #454e5e;
  --color-ink-700: #333a47;
  --color-ink-800: #20242d;
  --color-ink-900: #14171d;

  /* cold half */
  --color-ice-50: #f2f8fb;
  --color-ice-200: #c4e0ee;
  --color-ice-300: #95c9e0;
  --color-ice-700: #285a7c;

  --font-sans: Inter, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', Consolas, monospace;

  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;

  --shadow-soft: 0 4px 16px -4px rgb(0 0 0 / 0.1);
  --shadow-brand: 0 10px 15px -3px rgb(212 31 31 / 0.25), 0 4px 6px -4px rgb(212 31 31 / 0.25);
}

/* the kit's component layer, verbatim values */
@layer components {
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: var(--radius-lg);
    padding: 0.625rem 1.25rem;   /* 10px 20px */
    font-size: 0.875rem;         /* 14px; CTAs add text-base */
    font-weight: 500;
    transition: all 0.15s;
  }
  .btn-primary {
    background-color: var(--color-primary-600);
    color: #fff;
    box-shadow: var(--shadow-brand);
  }
  .btn-primary:hover { background-color: var(--color-primary-700); }
  .nav-active { color: var(--color-ink-900); font-weight: 600; }
}
```

Rhythm helpers: `.section { padding-block: 5rem } @media (min-width:64rem){ .section { padding-block: 7rem } }`
→ 80 px / 112 px, which is what the live page measures on every band except the hero.

## Screenshot analysis (2400 × 1892, real JPEG, 304,360 B)

macOS-Safari window frame; light mode; captured during weekday daytime. Visible: licence strip →
header → the whole ice-blue hero → the top of the dark response band, cut off inside the first card.
Colour confirmation from the pixels: hero ground is a very pale blue (not white), the `h1`'s second
sentence is a strong red (not orange), the `Call now` button and the hero CTA are the same red, the
stars are amber, the ticks are red glyphs. The blurred ice disc is visible as a soft bloom at the
hero's top-right corner and does not intrude on the text column.

Not visible: process, services, why-us, areas, testimonials, FAQ, closing band, footer. For those,
the DOM + sheet are the only reference — do not guess a layout from the sibling templates.

## Section-by-section fidelity notes

1. **Licence strip** — `h-9` (36 px) on `#20242d`, 12 px text, `opacity-70` on the labels and
   `font-semibold` on the two values. `NATE-certified` and `Serving Tulsa metro` are `hidden sm:flex`,
   so at 390 px only `Licence OK MECH #00000` and the rating survive. It scrolls away — only the
   header is sticky.
2. **Header** — `h-16 lg:h-20`; the nav switches at **`xl`**, the city pill at **`2xl`**, the phone
   pill at **`md`**, `Call now` at `xl`, burger `xl:hidden`. The source carries a long comment
   explaining why: at 1024–1279 px the six-link nav plus pills plus CTA does not fit and links
   rendered *under* the pill. Reproduce the breakpoints, not a tidier `lg` nav — the header is one of
   the two places a screenshot comparison will show drift instantly.
3. **Hero** — one column, `max-w-3xl`, `py-16 lg:py-24`; the blurred disc is `-right-32 -top-40`,
   520 × 520, `blur-3xl`, clipped by the section's `overflow-hidden`. `h1` is `text-4xl → sm:text-5xl
   → lg:text-6xl` with `leading-[1.05]`; measured 60 px / 63 px at 1600. The second sentence is a
   `block` span, so it always starts a new line — at 1600 the first sentence itself wraps, giving the
   three-line `h1` the screenshot shows.
4. **Response band** — the only dark band. `text-white/70` lede, `white/55` labels, `white/30` notes,
   `white/45` promises, `white/15` hairlines — five steps of white opacity is the band's whole
   texture; flattening them to two looks wrong. The card is `white/5` on `ink-900` with a `white/10`
   border, not a solid card. The promise is the only 48 px type on the page.
5. **Process** — ordinals are `01`–`04` (zero-padded, `tabular-nums`) with a rule that grows; the
   takeaway line is `primary-700`, not grey — it is the item's punchline. Four items in a three-column
   grid leaves the fourth alone on row two at ≥640 px; on mobile all four stack.
6. **Services** — hairlines come from `gap-px` + `bg-ink-100`, so the cells must stay `bg-white` and
   the wrapper must keep `overflow-hidden rounded-2xl`. Blurb is `flex-1` so every price line sits on
   the same baseline within a row. Six cells means `lg:grid-cols-3` = two clean rows.
7. **Why-us** — figure is a **diagram on `ink-900`**, so it reads as a dark plate against the
   `ink-50` band; it is 4:3 (800×600). `items-center` on the grid, `order-last lg:order-first` puts it
   after the text on mobile.
8. **Areas** — the only band with an `h2` and no eyebrow. Towns are plain text in bordered rows, not
   chips — the source's own note explains why ("the cheapest local search signal a trade site has").
9. **Testimonials** — `gray-50` ground so the white `shadow-soft` cards separate; the eyebrow is a
   filled pill here (`bg-primary-100`), while every other light band uses bare `primary-700` caps.
   Arrows are `hidden lg:flex` and only render when there is more than one page.
10. **FAQ** — `divide-y divide-gray-200`, `py-6` rows, icon disc `h-8 w-8 bg-gray-100`. The panel is
    animated with inline `max-height`, so the closed state must be `max-height: 0; opacity: 0` in the
    markup or there is a flash of open content on first paint.
11. **Closing band** — no eyebrow, no card, no image: `#b11717` full width, white `h2`, `primary-100`
    lede, white button (`pad 16/32`, radius 8, `text-base font-bold`) and a `border-2 white/40` ghost.
    Both buttons are full width below `sm`.
12. **Footer** — `pt-16 lg:pt-24`, `gray-900`; social tiles are `rounded-lg bg-gray-800 p-2.5` squares
    (not circles); the input is `bg-gray-800` with a `gray-700` border and a `primary-500` focus ring;
    the third column block is one `sm:grid-cols-3` sub-grid inside the `lg:col-span-5` cell.

## Source → React adaptation

| reference | recreation |
| --- | --- |
| Astro `.astro` page + `_astro` kit script | React 19 components + hooks, one `src/App.tsx` composition |
| page-local inline script resolving the window table | `useArrivalWindow(now = new Date())` → `{ label, promise, note, overnight, key }`, with the table above as a module constant; a 60 s interval drives `now` |
| `[data-window-row]` + `data-active` + `group-data-[active]:*` | `data-active` attribute on the matching `<li>` with the same `group-data-[active]:` utilities (Tailwind 4 supports `data-[active]:` natively) |
| `text-primary-400` ↔ `text-ice-300` class swap in JS | conditional class on the promise element |
| `[data-animate]` reveal observer (`.6s`, `translateY(20px)`, `data-delay`) | `useReveal()` — one observer, `IntersectionObserver`, skipped under `prefers-reduced-motion` |
| header `shadow-lg` past 50 px | `useHeaderShadow(50)` |
| `[data-nav-link]` scroll-spy (`-20% 0 -70% 0`) | `useScrollSpy(ids)` → `aria-current="page"` + the `.nav-active` declarations |
| mobile `aria-expanded` disclosure + glyph swap | `useState` + two inline SVG paths |
| `localStorage.theme` + `prefers-color-scheme` boot | **dropped** (light only, house convention) |
| FAQ `max-height` + icon `rotate(45deg)`, exclusive | `useFaq()` with a single open index |
| carousel: per-view 3/2/1, `translateX(index * width)`, dots, 5 s autoplay | `useCarousel({ perView: { base: 1, sm: 2, lg: 3 }, autoplayMs: 5000 })` |
| cookie strip `localStorage['cookie-consent']`, 1.5 s slide | `useState` only |
| inline `@font-face` → `/cf-fonts` | `<link>` to Google Fonts: Inter 400–800 + JetBrains Mono 500/700 |
| Tailwind 4.3.3 compiled sheet (58,651 B) | the `@theme` block above + utilities |
| `window-panel.svg` (1,806 B) | inline `<svg>` redrawn in the app, same three bars and tick labels |
| `logo.svg` / `logo-light.svg` (739 B each, identical) | inline SVG wordmark drawn in the app |
| `/services`, `/rates`, `/service-areas`, `/about`, `/contact`, `/privacy`, `/terms` | in-page fragments (see the spec's Requirement 13 and Deviation 1) |

## Sibling comparison

Four designs on this catalogue have now been prepped from the *same 2026 Astro/Tailwind kit* —
`airwise` → **Thermly**, `backstop` → **Flowcert**, `circles` → **Closeknit**, `coldsnap` → **Stoke** —
and the kit scripts are byte-identical across them, so the shared vocabulary is large: `container`
caps at 96 rem, `py-20 lg:py-28`, `rounded-2xl`, `shadow-soft`, hairline cell grids, the four-block
near-black footer with `Stay Updated`, the exclusive FAQ accordion, the 3/2/1 carousel.

That makes copy-paste the real risk. The differences that *must* survive:

| | Thermly (`airwise`) | Flowcert (`backstop`) | Stoke (`coldsnap`) |
| --- | --- | --- | --- |
| vertical | HVAC booking | backflow/trade compliance | emergency HVAC |
| brand | teal `#187e83` (+ amber season swap) | blue `#2d4fd0` | **red `#d41f1f`** |
| hero ground | `ink-50`, split hero with a booking widget | `ink-50`, split hero with a quick-book card | **`ice-50`, single column, no widget** |
| argument device | a two-hour window you *pick* | a published price list you *read* | **a window that changes with the clock in your browser** |
| signature band | season-swapped services grid | hairline six-cell price list | **the `ink-900` response band with the live mono clock** |
| footer blocks | brand + Services/Company/Support + newsletter | four blocks + newsletter | brand + Services/Company/Support + newsletter |

Two rules for the implementer: **do not reuse Thermly's teal or its season switch**, and **do not
reuse Flowcert's `ink`-only palette or its "published price list" framing** — Stoke's price lines are
six short "from" figures inside the services grid, and its proof is temporal, not monetary. The one
thing that must be *identical to the reference and to no sibling* is the three-window clock table.
