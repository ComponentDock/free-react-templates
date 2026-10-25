# Plantroom — Design Notes

Recreation of the ColorLib **"Curbline"** commercial-HVAC design
(https://colorlib.com/wp/template/curbline/, live preview
https://preview.colorlib.com/theme/curbline/) as **Plantroom** — React 19 + Vite + Tailwind CSS 4 +
TypeScript, `apps/plantroom`.

Full requirement set: `openspec/specs/template-plantroom/spec.md`. This file is the *how*: the DOM
skeleton with classes verbatim, the paste-ready token block, and the per-band fidelity notes.

## Reference set (all read 2026-10-25, `curl -4`)

| file | bytes | sha256 | why it matters |
| --- | ---: | --- | --- |
| `theme/curbline/index.html` | 75,675 | `b66a8487…` | the DOM: licence strip + header + hero + 7 bands + footer + 3 chrome pieces |
| `_astro/Base.4pe9WVqO.css` | 55,544 | `e7e16b99…` | the only stylesheet — every token, every component class |
| `_astro/Base.…BLoalVWc.js` | 16,233 | `e26cc055…` | the house kit (**identical hash to the Veranda / Stoke / Closeknit reads**): reveal, header shadow, menu, dark toggle, scroll-spy, carousel, FAQ, cookie, back-to-top, progress, forms (only `form[data-validate]`), toast |
| `_astro/ClientRouter…CYDbzu1r.js` | 16,357 | `69eb3ac5…` | Astro view transitions — no design content, ignore |
| inline `<style>` | 12,360 | — | **Inter** 400–800 + **JetBrains Mono** 400–700 `@font-face`, pointing at `/cf-fonts/v/…` (the page has no other font) |
| inline `<script>` ×3 | 442 / 333 / 358 | — | theme boot (`applyTheme`), JSON-LD `HVACBusiness`, preloader removal |
| `assets/img/logo.svg` · `logo-light.svg` | 719 · 719 | `369888fb…` · `f001833b…` | 210×40 wordmark (redraw, don't copy) |
| `assets/img/asset-panel.svg` | 2,429 | `ac34c377…` | the page's **only** illustration — a dark "asset register" panel (redraw as an SVG component) |
| `favicon.svg` | 313 | `4a8e3ac2…` | — |
| `css/style.css`, `js/snippet.js`, `downloads/free/curbline.zip`, `og-image.jpg` | — | — | **404** — no legacy sheet, no archive twin, and the OG image the page advertises is missing |

Fetches need `-4` (the host's IPv6 is banned) and a browser needs
`--host-resolver-rules=MAP preview.colorlib.com 104.26.10.149`. With no Chrome/CDP daemon available in
this container, the measurements below were taken with **Playwright**
(`/root/free-templates-firebase/node_modules/playwright`): `goto(..., {waitUntil:'domcontentloaded'})`
— `networkidle` hangs on this host — then `getComputedStyle` + `getBoundingClientRect` read-backs.

## Document order

```
#preloader                    fixed z-100, 40px spinner ring, removed 300ms after load
a.skip                        → #main-content
#scroll-progress              fixed h-0.5 primary-600
div[data-licence-bar]         bg-ink-800 h-9 text-xs — licence / insurance / county / 4.8 rating
header[data-header]           sticky z-50, h-16 / lg:h-20, white/90 + backdrop-blur-lg, border-b ink-100
  └ a wordmark (210×40 svg) + nav (xl only, SIX links) + location pill (2xl) + phone pill (md)
  └ dark toggle + "Request a site survey" (xl) + burger (xl:hidden)
  └ div[data-mobile-menu]     hidden xl:hidden — six links + 2 pills + full-width CTA
main#main-content
  ├ section (hero)            bg-ink-50, py-14 lg:py-20, lg:grid-cols-12 (7/5): proof column + #quote card
  ├ section#response          bg-ink-900 text-white, .section — 3 tier cards (lg:3)
  ├ section#agreement         white, .section — 6-cell hairline grid (sm:2 / lg:3)
  ├ section#why-us            bg-ink-50, .section — lg:grid-cols-2: asset-register figure + 4 definitions
  ├ section#sectors           white, .section — 6-cell hairline grid (same kit as #agreement)
  ├ section#areas             white, .section — lg:grid-cols-12 (5/7): heading + 12-town list
  ├ section#testimonials      bg-gray-50 py-20 lg:py-28 — 3-slide carousel (3/2/1)
  ├ section#faq               white py-20 lg:py-28 — 5-row exclusive accordion
  └ section#contact           bg-primary-700 py-20 lg:py-28 — flat band, white CTA + white/40 ghost
footer                        bg-gray-900 pt-16 lg:pt-24 — brand + 3 columns + newsletter + legal bar
div#cookie-consent            fixed bottom, role=dialog, slides up after 1.5s
button#back-to-top            fixed 48px disc, opacity 0 until scrollY > 300
```

**There is no sticky mobile CTA bar** — do not copy one from Veranda.

## Paste-ready token block (`src/index.css`)

```css
@import "tailwindcss";

@theme {
  /* brand: a cool corporate blue, defined by the sheet, not a Tailwind stock ramp */
  --color-primary-50:  #edf6ff;
  --color-primary-100: #d7ebff;
  --color-primary-200: #afd7ff;
  --color-primary-300: #7bbcfb;
  --color-primary-400: #479cf0;
  --color-primary-500: #247edc;
  --color-primary-600: #1963b4;   /* brand */
  --color-primary-700: #175090;   /* hover + eyebrows + closing band */
  --color-primary-800: #194375;
  --color-primary-900: #183961;

  /* warm-neutral ink ramp — this is what makes the page read "mechanical" */
  --color-ink-50:  #f5f6f7;
  --color-ink-100: #e9ebed;
  --color-ink-200: #d2d6da;
  --color-ink-300: #a9b0b7;
  --color-ink-400: #78828c;
  --color-ink-500: #57626c;
  --color-ink-600: #3f4951;
  --color-ink-700: #30383f;
  --color-ink-800: #1f252a;
  --color-ink-900: #13171a;

  /* the register illustration's only non-ramp colour */
  --color-amber-panel: #f6bb63;

  --font-sans: Inter, system-ui, sans-serif;
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
    box-shadow: 0 10px 15px -3px #1963b440, 0 4px 6px -4px #1963b440; }
  .btn-primary:hover { background-color: var(--color-primary-700); }

  .nav-active { color: #111827; font-weight: 600; }
}
```

Tailwind 4 compiles `gray` from the default palette — the footer (`bg-gray-900`, `text-gray-300`,
`bg-gray-800` tiles) and the testimonial/FAQ bands (`gray-50`, `gray-100`, `gray-600`) use **stock**
grey, while the hero and the three content grids use **ink**. Keep the split; it is in the reference.

Load the two faces in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap">
```

Both URLs return **200** with a browser UA (`css2` needs the `wght@` axis form — a bare
`family=Inter:400,500` 400s).

## Section-by-section fidelity notes

### Licence strip (`div[data-licence-bar]`)

```html
<div class="w-full border-b bg-ink-800 text-ink-100 border-transparent">
  <div class="container mx-auto flex h-9 items-center justify-between gap-4 px-4 text-xs lg:px-8">
    <ul class="flex min-w-0 items-center gap-x-4 gap-y-1 overflow-hidden">
      <li class="flex shrink-0 items-center gap-1.5 whitespace-nowrap"><span class="opacity-70">Licence</span><span class="font-semibold">TX TACLA #00000C</span></li>
      <li class="flex shrink-0 items-center gap-1.5 whitespace-nowrap hidden sm:flex"><span class="opacity-70">$5M general liability</span></li>
      <li class="flex shrink-0 items-center gap-1.5 whitespace-nowrap hidden sm:flex"><span class="opacity-70">Serving</span><span class="font-semibold">Tarrant County</span></li>
    </ul>
    <p class="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-medium">
      <svg class="h-3.5 w-3.5 text-amber-400">…star…</svg><span>4.8</span>
      <span class="opacity-70">70+ reviews on Google (sample)</span>
    </p>
  </div>
</div>
```

This strip is the page's cheapest trust device and it is **above** the header, not part of it. It does
not scroll away (it is a normal-flow block; only the header is sticky).

### Header

* `h-16` → `lg:h-20`; measured **65 / 81 px** including the 1 px border.
* Nav is `hidden min-w-0 xl:flex xl:items-center xl:gap-7` — **`xl`, not `lg`**. Verified: `display:none`
  at 900 px, `flex` at 1440 px. A recreation that shows the nav at `lg` will look wrong between
  1024–1279 px, where the reference still shows the hamburger.
* Order in the right cluster: location pill (`hidden 2xl:block`, so it appears only ≥1536 px) · phone
  pill (`hidden md:block`) · dark toggle · CTA (`hidden … xl:inline-flex`) · hamburger (`xl:hidden`).
  Four controls, three of which are width-gated — reproduce the gating or the header crowds at 1024 px.
* The wordmark is two `<img>`s (dark logo + `logo-light.svg`), the light one `hidden dark:block`. With
  dark mode dropped (deviation), ship the dark-ink logo only.
* Draw the wordmark: `210×40` viewBox, a `#1f252a` rounded rect (`x5 y9 w28 h22 rx4`), a `#247edc` bar
  inside it (`x9 y19 w20 h8 rx2`), two `#7bbcfb` circles (`cy15 r2.6` at `cx14`/`cx24`), `Plantroom` in
  Inter 700 16 px at `x44 y20` in `#1f252a`, and `MECHANICAL` in JetBrains Mono 500 8 px with 1.8 px
  letter-spacing at `x44 y33` in `#57626c`.

### Hero

```html
<section class="bg-ink-50">
  <div class="container mx-auto px-4 py-14 lg:px-8 lg:py-20">
    <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-7 lg:pt-6">
        <p class="text-sm font-bold uppercase tracking-wide text-primary-700">Fort Worth · TACLA licensed mechanical</p>
        <h1 class="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-5xl lg:text-6xl">
          Every contractor says twenty-four seven.
          <span class="text-primary-600">Ask what happens when they miss it.</span>
        </h1>
        <p class="mt-5 max-w-xl text-lg text-ink-500">A response time with nothing attached to it is marketing. …</p>
        <p class="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600">★★★★★ 4.8 · 70+ reviews on Google · sample data</p>
        <ul class="mt-8 grid gap-3 sm:grid-cols-2">
          <li class="flex gap-2.5 text-base font-medium text-ink-700"><svg class="mt-1 h-4 w-4 shrink-0 text-primary-600">✓</svg><span>Response tiers written into the agreement</span></li>
          …
        </ul>
      </div>
      <div class="lg:col-span-5">… the #quote card …</div>
    </div>
  </div>
</section>
```

Fidelity notes:

* Measured at 1440: `h1` **60 px / 66 px**, tracking **−1.5 px**, colour `rgb(31,37,42)`; the span is
  `rgb(25,99,180)`. The headline is two sentences with **no `<br>`** — it wraps naturally, and at 60 px
  it breaks after `seven.`
* The ledger shape (eyebrow → headline → lede → rating → 2×2 checklist) is the whole above-the-fold
  argument. The checklist is `sm:grid-cols-2`, so on a phone it is four stacked rows.
* No image, no badge pill, no blobs, no gradient — the band is flat `#f5f6f7`. In particular **do not**
  add `.text-gradient` (the class exists in the sheet but the page never uses it).

### Survey card (`#quote`)

* `rounded-2xl border border-ink-100 bg-white p-6 lg:p-8 shadow-md` — measured radius 16, padding 32 at
  `lg`, `shadow-md` = `0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)`.
* Fields: `Your name` (`type=text`, `autocomplete=name`), `Work email` (`type=email`), and
  `What prompted this?` (`<select>` with 7 options, first is the empty `Choose the closest match`).
  Inputs: `rounded-lg border border-ink-200 px-4 py-3 text-base placeholder:text-ink-300
  focus:border-primary-600`; labels `block text-sm font-semibold text-ink-700`.
* Button `w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base font-bold`.
* The card also carries an `h2` — i.e. the page's second heading level appears inside the hero. Keep it
  an `h2` (it is a band heading in the source's own hierarchy) and let `h1` be unique.
* **The reference's form does nothing** (no `data-validate` anywhere on the page, so the kit skips it and
  a submit POSTs to `#`). Wire it locally: required + e-mail checks, inline error under the field,
  reset + toast on success. Reuse the kit's toast recipe exactly — `fixed top-6 right-6 z-[80]`,
  `rounded-lg px-5 py-3 bg-green-600 text-white`, `translateX(120%) → 0`, 4 s, then out.

### Response tiers (`#response`) — the page's spine

* Ground `#13171a`, `text-white`, `.section` (80/112 px). Head is **left-aligned, `max-w-2xl`**, not
  centred: eyebrow `RESPONSE` in `primary-400`, then a 30→36 px `h2`, then `text-lg text-white/70`.
* Cards: `grid gap-6 lg:grid-cols-3`, each `flex min-w-0 flex-col rounded-2xl border p-6 bg-white/5
  border-white/10`. **Card 1 only**: `border-primary-400 bg-white/[0.07]`. That single brighter border is
  the design's only "featured" signal — no ribbon, no badge, no scale.
* Card internals, in order: `h3 text-lg font-bold`; `p.mt-4.font-mono.text-3xl.font-bold.tabular-nums
  .text-primary-300` (30 px JetBrains Mono — the size contrast against the 18 px title is what makes it
  read as an SLA); `p.mt-1.text-xs.font-semibold.uppercase.tracking-wide.text-white/40` (the window);
  then `dl.mt-6.flex-1.space-y-4.border-t.border-white/10.pt-5.text-sm` with two `dt`/`dd` pairs
  (`What qualifies`, `If we miss it`). The `flex-1` on the `dl` is what bottom-aligns the three cards.
* Footer row: `mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between` — the
  sample-data disclaimer on the left, `.btn.btn-primary.shrink-0` on the right.
* Copy is the deliverable here: `2 hours` / `Next working day` / `On the agreed date`, and the remedies
  (a full month credited, half a month, rescheduled inside five working days at our cost).

### Hairline grids (`#agreement`, `#sectors`) — one component, two datasets

```html
<div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
  <div class="flex flex-col bg-white p-6 lg:p-8">
    <h3 class="text-lg font-bold text-ink-800">Scheduled maintenance visits</h3>
    <p class="mt-2 flex-1 text-ink-500">Quarterly or monthly by asset type…</p>
    <p class="mt-4 text-sm font-bold text-primary-700">In the monthly fee</p>
  </div>
  …
</div>
```

The separators are **not borders**: the wrapper is `bg-ink-100` with `gap-px`, the cells are `bg-white`,
and `overflow-hidden rounded-2xl` clips the outer corners (measured: wrapper `rgb(233,235,237)`, cell
`#fff`, cell padding 32 px at `lg`). Build it once and feed it the two datasets — the reference does not
share a component, but the markup is identical and a naive per-cell `border` will look heavier than the
design.

Cell order and badges are load-bearing:

| `#agreement` | badge | | `#sectors` | badge |
| --- | --- | --- | --- | --- |
| Scheduled maintenance visits | In the monthly fee | | Restaurants and kitchens | Priority one by default |
| Filters and belts | In the monthly fee | | Data and comms rooms | Priority one by default |
| Response cover | In the monthly fee | | Offices and multi-tenant | Priority two, upgradeable |
| Asset register | In the monthly fee | | Retail and showrooms | Priority two, upgradeable |
| Statutory logs | In the monthly fee | | Warehouses and light industrial | Quoted per site |
| Quoted repairs | Quoted per job | | Medical and dental | Priority one by default |

Each grid is followed by its own `mt-6 text-sm text-ink-400` sample-data footnote. Keep them.

### Why-us band + the register panel

* `lg:grid-cols-2` with `figure.order-last lg:order-first` — the illustration is on the **left** at
  desktop and drops **below** the text on a phone.
* Definitions are `space-y-6`, each `border-l-2 border-primary-600 pl-5` with an 18 px/700 `dt` and
  `mt-1` `dd` in `text-ink-500`. There are **four**, although the heading says "Three things" — the
  reference's own mismatch. Keep the four rows and keep the heading; do not "fix" it silently (if the
  implementer wants to fix it, it belongs in the PR as a noted deviation).
* The `asset-panel.svg` panel (2,429 B) is worth recreating exactly, because it is the only visual asset
  on the page and it carries the argument ("we tell you when to replace"). Measured geometry on an
  `800×600` viewBox:

| element | geometry | fill |
| --- | --- | --- |
| outer frame | `0 0 800 600` | `#13171a` |
| inner panel | `x32 y32 736×536 rx24` | `#1f252a` |
| title | `x76 y94`, Inter 22/700 | `#ffffff` |
| subtitle | `x76 y122`, Inter 14 | `#78828c` |
| column labels | `x76/250/360/500 y176`, mono 13/600 | `#57626c` |
| rule | `x76 y188 648×2` | `#30383f` |
| rows (5 × 44 px apart, starting `y228`) | `RTU-01 4 yr R-410A Good` · `RTU-02 11 yr R-410A Fair` · `RTU-03 17 yr R-22 Replace` · `SPL-01 6 yr R-410A Good` · `CU-COMMS 9 yr R-410A Good`, mono 14 | asset `#d2d6da`, age/gas `#a9b0b7`, verdict `#7bbcfb` except `Replace` `#f6bb63` |
| call-out box | `x76 y446 648×82 rx12` | `#30383f` |
| call-out text | `x108 y480` Inter 14 `#a9b0b7`; `x108 y506` Inter 14/700 `#f6bb63` | — |

Implement it as a React component with **one `<text>` per cell**, `role="img"` and a sentence-long
`aria-label`; do not inline the downloaded file and do not reference `/theme/curbline/…`.

### Areas band

* `lg:grid-cols-12` → `col-span-5` heading column, `col-span-7` list.
* The list is `grid grid-cols-2 gap-x-6 sm:grid-cols-3` with each `li` a `border-b border-ink-100
  py-2.5 text-base text-ink-700` row. Twelve towns, in this order: Fort Worth, Arlington, Grapevine,
  Southlake, Keller, Bedford, Euless, Hurst, Mansfield, Burleson, Haltom City, North Richland Hills.
* The footnote admits the list is a placeholder. Keep the admission; it is also the local-SEO advice
  the template is really demonstrating.

### Testimonials

* Head block is centred `max-w-3xl` with a **pill** eyebrow (`rounded-full bg-primary-100 px-3 py-1
  text-sm font-medium text-primary-700`) — note this differs from the hero/why-us eyebrow style.
* Cards are `rounded-2xl bg-white p-8 shadow-soft`, 5 `primary-400` stars, `text-lg font-medium`
  quote, then a 48 px `rounded-full bg-primary-100 text-primary-600` initial disc with name and role.
* **Copy the reference's paging shape exactly**: per-view 3 / 2 / 1, slide width = `container / perView`,
  `translateX(-index * width)`, 5 s autoplay paused on hover, one dot per page.
* At ≥1024 px with three slides there is **one page**, so the kit renders **zero dots and hides both
  arrows** — measured `dotCount: 0`, `prevDisplay: none` at 1440 px. A recreation that always shows
  arrows/dots here is visibly different from the reference.
* At 900 px the measured state is `dotCount: 2`, arrows `flex`, slide width 368 px; at 390 px
  `dotCount: 3`, slide width 358 px. The arrows are positioned `-left-4` / `-right-4`, i.e. **outside**
  the card edge, and the kit's inline `display:flex` overrides their `hidden … lg:flex` classes — so on
  a phone they hang 16 px off-screen. Clamp them inside below `sm` (deviation 6).

### FAQ

* `divide-y divide-gray-200` list inside `max-w-3xl`; each row `py-6` with `data-animate` delays
  `100/150/200/250/300`.
* The trigger is `button.flex.w-full.items-center.justify-between.text-left` with an 18 px
  `font-semibold` question and a 32 px `rounded-full bg-gray-100` disc holding a `+` glyph
  (`transition-transform duration-200`). Open state: panel `max-height: scrollHeight` + `opacity 1`,
  disc `rotate(45deg)`.
* The panel wrapper is `overflow-hidden transition-all duration-300` with an inline
  `style="max-height:0px; opacity:0"` — start closed in the markup so the first paint matches.
* **Exclusive**: opening one closes the others (the kit clears every sibling before opening).

### Closing band

Flat, not a gradient: `bg-primary-700 py-20 lg:py-28`, centred `max-w-3xl`, `h2` 30→36 px white, lede
`text-lg text-primary-100`, then `mt-10 flex flex-col items-center gap-4 sm:flex-row` with a **white**
`rounded-lg px-8 py-4 text-base font-bold text-primary-700` button and a
`border-2 border-white/40` ghost with a `h-5 w-5` phone glyph. After the two dark/grey bands above it,
this is the only saturated surface on the page — do not add patterns or blobs.

### Footer

* `bg-gray-900 pt-16 lg:pt-24 text-gray-300`, 12-col grid: brand `col-span-4`, link columns
  `col-span-5` (as `sm:grid-cols-3`), newsletter `col-span-3`.
* Column heads are `text-sm font-semibold uppercase tracking-wider text-white` — different from every
  other heading treatment on the page.
* Newsletter: `flex gap-2`, input `min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4
  py-2.5 text-white placeholder-gray-500`, button `rounded-lg bg-primary-600 px-4 py-2.5 font-medium`.
* The bottom bar is `border-t border-gray-800 py-8` with `text-sm text-gray-500`. **The cookie strip is
  `fixed bottom-0` and covers this bar on first load** (visible in the live capture) — that is a
  reference quirk, not a bug to copy: the bar must be reachable once the strip is dismissed.
* Add the house `Component Dock` link to `https://www.componentdock.com/` in the bottom bar; the
  reference has none, and every template in this repo must have one.

## Source → React adaptation table

| source construct | React shape | note |
| --- | --- | --- |
| `[data-animate]` + kit `IntersectionObserver` | `useReveal()` hook returning a ref with `data-animate`/`data-delay` passthrough, or a `<Reveal>` wrapper | 14 elements, `.6s ease-out`, `translateY(20px)`, `threshold .1`, `rootMargin 0 0 -10%`; no-op under `prefers-reduced-motion` |
| `[data-carousel]` inline width math | `Testimonials` with a `perView` from `matchMedia` + `useEffect` on resize; slides sized in `style.width` | keep `translateX` on the track, dots `w-8`/`w-2.5` |
| `[data-faq-toggle]` + `maxHeight` | `Faq` with `openIndex: number \| null` (single value *is* the exclusivity) and a ref-measured `scrollHeight` | add `aria-expanded`/`aria-controls` |
| `data-form` (inert) | `SurveyForm` with `useState` + a `validate()` returning field errors | no network; toast on success |
| `data-newsletter-form` (inert) | `NewsletterForm`, same validation | share the toast component |
| dark toggle + `applyTheme()` | dropped | deviation 2; keep the measured `dark:` values in the spec only |
| `localStorage` cookie key | `useState` in a `CookieStrip` | deviation 3 |
| `data-licence-bar` | `LicenceBar` component fed by props (licence, insurance, county, rating) | the strip is reusable on every page of a services site |
| two hairline grids | `CellGrid({ items: {title, body, badge}[] })` | one component, two datasets |
| `asset-panel.svg` | `<AssetRegisterPanel />` inline SVG | redraw from the geometry table above |

## Sibling comparison (same generated-template family, different designs)

`coldsnap` → **Stoke**, `circles` → **Closeknit**, `commons` → **Veranda** and this design share the same
Astro build and the same house kit (both `_astro` hashes match), but they are **different designs**:

| | Curbline → Plantroom | Commons → Veranda | Coldsnap → Stoke |
| --- | --- | --- | --- |
| palette | **blue `#1963b4` on warm-neutral ink `#13171a`** + stock grey chrome | indigo `#4f46e5` + rose accent on stock grey | red-led |
| type | **Inter + JetBrains Mono** (two faces) | Outfit only | Outfit only |
| hero | **flat `#f5f6f7`, 7/5 split, a form card, no image** | gradient + 2 parallax blobs + typewriter + hero photo | — |
| signature band | **dark SLA-tier cards with mono numerals** | counters + channel cards | — |
| motion used | reveal + carousel + FAQ only (**no counters, no typewriter, no parallax, no video**) | typewriter + counters + video + parallax + carousel | — |
| page count | 8 routes (7 live + `/`), `elements` 404 | 9 routes, all live | — |
| closing band | **flat `#175090`** | indigo gradient + dot grid | — |

Do not port a sibling's motion inventory just because the kit hash matches: this design's whole
identity is *static credibility* (licence strip, published tiers, an asset register), and adding
counters or a typewriter would contradict the copy.

## Traps (measured, in the order they bite)

1. **Fetch with `curl -4`.** `preview.colorlib.com` answers a banned IPv6 first; a plain `curl` hangs.
2. **`networkidle` hangs** in Playwright on this host — use `domcontentloaded` + a 1.2–1.5 s wait.
3. **The kit's hash is not a design fingerprint.** `e26cc055…` renders four different designs; only the
   *behaviour* transfers.
4. **`data-validate` is absent from this page**, so the hero form and the newsletter are inert in the
   reference. Do not assume the kit validates them.
5. **Carousel arrows leak outside the layout** below `lg` because the kit writes `display:flex` inline
   over `hidden … lg:flex`.
6. **`#service-areas` is a broken fragment** — the band id is `areas`. Two anchors point at it.
7. **The nav appears at `xl` (1280 px)**, while every other sibling switches at `lg`. Check the header at
   1024/1100/1280 before calling it done.
8. **`.section` bumps at `64rem`**, same as the `py-20 lg:py-28` bands — the two spellings resolve
   identically, so do not "normalise" one into the other and expect a visual change.
9. **Tailwind escapes**: `2xl:block` is `.\32 xl\:block` in the sheet, and `bg-white/[0.07]` is
   `bg-white\/\[0\.07\]`. A naive class census reports both as phantom classes.
10. **`text-white/40` micro-labels** (`24 hours, every day`, `What qualifies`) are below 4.5:1 on
    `#13171a`. They are decorative where they repeat a fact, but if one carries the only instance of a
    fact, lift it to `text-white/60`.
