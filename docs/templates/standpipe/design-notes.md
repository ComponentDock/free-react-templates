# Standpipe — design notes (replication of ColorLib `mainline`)

Working reference for the implementer. `openspec/specs/template-standpipe/spec.md` is the authority; this
file is the map — DOM skeleton, the token block to paste into `@theme`, the screenshot analysis and the
per-band fidelity notes. Measured 2026-10-25 against
`https://preview.colorlib.com/theme/mainline/` (200, 69,579 B, `curl -4`) at 1440 × 900 unless stated.

## 1 — The five things that make this design recognisable

1. **A quote form in the hero's right five columns**, visible without scrolling. ColorLib's own premise
   for the design is *"almost no plumbing site asks for the job while the visitor is still on the first
   screen"*. The card is 469 × 510, white, radius 16, `shadow-md`, exactly **three** controls. If the
   form moves below the fold, or grows a fourth field, the template is gone.
2. **The licence bar above the header** — 37 px on `ink-800`, with *"Licence · CCB #000000"*,
   *"Bonded & insured"*, *"Serving · Portland metro"* and a star rating on the right. It is read before
   the logo, on purpose.
3. **A hairline grid, not six cards.** `#services` is one rounded shell (`rounded-2xl overflow-hidden
   border border-ink-100 bg-ink-100`) with `gap: 1px` and white cells: *the gaps are the dividers*. Six
   separately bordered cards is the most likely wrong answer.
4. **The emergency band**: full-bleed `primary-600`, a **pulsing** 8 px dot beside an uppercase label, one
   bold promise, one honest qualifier, and a white `rounded-full` phone pill on the right.
5. **Money before virtue.** Every service carries a `From $…` line, the financing panel names the $500
   threshold and the 12 months, and every price/review block carries a "sample data" caveat. This register
   is the template.

## 2 — DOM skeleton (compressed from the live DOM)

```html
<div id="preloader"> … </div>                      <!-- fixed, z-100, white, spinner -->
<a href="#main-content" class="sr-only focus:…">Skip to content</a>
<div id="scroll-progress">                          <!-- fixed top-0 h-0.5 primary-600 -->

<div class="bg-ink-800 text-ink-100" data-licence-bar>      <!-- 37px -->
  <div class="container flex h-9 items-center justify-between text-xs">
    <ul> Licence CCB #000000 · Bonded &amp; insured (sm+) · Serving Portland metro </ul>
    <p> ★★★★★ 4.9 <span class="opacity-70">200+ reviews on Google (sample)</span> </p>
  </div>
</div>

<header data-header class="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-ink-100">
  <div class="container flex h-16 items-center justify-between lg:h-20">
    <a href="/"><img logo.svg h-8 lg:h-9> <img logo-light.svg hidden dark:block></a>
    <nav class="hidden xl:flex xl:gap-7"> 7 × a.text-sm.font-semibold </nav>   <!-- xl = 1280 -->
    <div class="flex items-center gap-2">
      <span class="hidden 2xl:block"> <a pill>Portland, OR</a> </span>          <!-- 1536 only -->
      <a pill href="tel:5550100100">(555) 010-0100</a>                          <!-- md+ -->
      <button data-dark-toggle aria-label="Toggle dark mode">moon</button>
      <a class="rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold" href="#quote">Get a quote</a>
    </div>
    <button data-mobile-toggle aria-expanded="false" aria-label="Open menu" class="xl:hidden">☰</button>
  </div>
  <div data-mobile-menu class="hidden xl:hidden"> 7 × a.block.py-3 + pills + full-width CTA </div>
</header>

<main id="main-content">
  <section class="bg-ink-50">                                    <!-- 670 -->
    <div class="container py-14 lg:py-20 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div class="lg:col-span-7 lg:pt-6">
        <p eyebrow>Licensed plumbers · Portland and 14 nearby towns</p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
          Plumbers in Portland, Beaverton <span class="text-primary-600">and everywhere between.</span>
        </h1>
        <p class="mt-5 max-w-xl text-lg text-ink-500">Repairs, drain clearing …</p>
        <p class="mt-6 text-sm">★★★★★ 4.9 200+ reviews on Google · sample data</p>
        <ul class="mt-8 grid gap-3 sm:grid-cols-2"> 4 × li  check + promise </ul>
      </div>
      <div class="lg:col-span-5">
        <div id="quote" class="rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8">
          <h2 class="text-xl lg:text-2xl font-bold">Get a quote</h2>
          <p class="mt-2 text-sm text-ink-500">Three fields. We reply within the hour on weekdays.</p>
          <form class="mt-6 space-y-4">
            3 × (label 14/600 + control 50px) ; name / tel / select#qf-problem (8 options)
            <button class="w-full rounded-lg bg-primary-600 py-3.5 text-base font-bold">Request my quote</button>
            <p class="text-center text-xs text-ink-400">No obligation. We never sell your details.</p>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section id="emergency" class="bg-primary-600 text-white">        <!-- 164 -->
    <div class="container py-6 lg:py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p eyebrow>● 24-hour emergency line</p>                     <!-- animate-ping dot -->
        <p class="mt-1 text-lg lg:text-xl font-bold">Burst pipe or no water? We answer at any hour.</p>
        <p class="mt-2 max-w-2xl text-sm opacity-90">Call-out is quoted before we set off …</p>
      </div>
      <a class="rounded-full bg-white px-6 py-3 text-lg font-bold text-primary-700" href="tel:…">(555) 010-0100</a>
    </div>
  </section>

  <section id="services" class="section bg-white">                  <!-- 831 -->
    <div class="container">
      <div class="max-w-2xl"> eyebrow · h2 · lede </div>
      <div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100
                  sm:grid-cols-2 lg:grid-cols-3">                   <!-- THE hairlines -->
        <div class="flex flex-col bg-white p-6 lg:p-8"> 6 × h3 + p.flex-1 + p.price </div>
      </div>
      <p class="mt-6 text-sm text-ink-400">Starting prices shown are sample data …</p>
    </div>
  </section>

  <section id="why-us" class="section bg-ink-50">                   <!-- 776 -->
    <div class="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <figure class="order-last lg:order-first"> img 576×432 rounded-2xl + figcaption </figure>
      <div> eyebrow · h2 · lede · <dl> 4 × (div.border-l-2.border-primary-600.pl-5 > dt + dd) </dl> </div>
    </div>
  </section>

  <section id="process" class="section bg-white">                   <!-- 564 -->
    <div class="container">
      <div class="max-w-2xl"> eyebrow · h2 · lede </div>
      <ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
        3 × li > div.flex.items-baseline.gap-3 > span.tabular-nums "01" + span.h-px.flex-1.bg-ink-100
              > h3 + p + p.text-sm.font-semibold.text-primary-700
      </ol>
    </div>
  </section>

  <section id="service-areas" class="section bg-white">             <!-- 513 -->
    <div class="container grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-5"> h2 + lede </div>
      <div class="lg:col-span-7"> <ul class="grid grid-cols-2 gap-x-6 sm:grid-cols-3"> 15 × li.border-b.py-2.5 </ul>
        <p class="mt-6 text-sm">Replace this list with your own towns …</p> </div>
    </div>
  </section>

  <section id="financing" class="bg-white py-12">                   <!-- 278 -->
    <div class="container">
      <div class="flex flex-col gap-5 rounded-2xl border border-primary-200 bg-primary-50 p-6
                  lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-2xl"> h2 24px · p · p.text-sm.text-ink-400 </div>
        <a class="rounded-lg bg-primary-600 px-6 py-3 text-sm font-bold">See financing options</a>
      </div>
    </div>
  </section>

  <section id="testimonials" class="bg-gray-50 py-20 lg:py-28">     <!-- 768 -->
    <div class="container">
      <div class="mx-auto max-w-3xl text-center"> pill "Reviews" · h2 · lede </div>
      <div class="relative mt-16" data-carousel>
        <div class="overflow-hidden"><div class="flex" data-carousel-track>
          3 × div.flex-shrink-0.px-3 > div.rounded-2xl.bg-white.p-8.shadow-soft
                ★★★★★ (primary-400) · blockquote · avatar disc 48px · name · city
        </div></div>
        <button data-carousel-prev> hidden at ≥1024 </button>
        <button data-carousel-next> hidden at ≥1024 </button>
        <div data-carousel-dots class="mt-8 flex justify-center gap-2"></div>   <!-- 0 dots at ≥1024 -->
      </div>
    </div>
  </section>

  <section id="faq" class="bg-white py-20 lg:py-28">                <!-- 820 -->
    <div class="container">
      <div class="mx-auto max-w-3xl text-center"> pill "Questions" · h2 · lede </div>
      <div class="mx-auto mt-16 max-w-3xl"><div class="divide-y divide-gray-200">
        5 × div.py-6 > button[aria-expanded] (span 18/600 + span.disc 32px plus)
                    > div.overflow-hidden[style="max-height:0;opacity:0"] > p.pt-4
      </div></div>
    </div>
  </section>

  <section id="contact" class="bg-primary-700 py-20 lg:py-28">      <!-- 480 -->
    <div class="container"><div class="mx-auto max-w-3xl text-center">
      h2 white · p.text-primary-100 · 2 CTAs (white solid / 2px white-40 outline)
    </div></div>
  </section>
</main>

<footer class="bg-gray-900 pt-16 text-gray-300 lg:pt-24">          <!-- 543 -->
  <div class="container"><div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
    <div class="lg:col-span-4"> logo-light · blurb · 3 social squares · address/tel/mail </div>
    <div class="grid gap-8 sm:grid-cols-3 lg:col-span-5"> Services · Company · Support </div>
    <div class="lg:col-span-3"> Stay Updated · p · form[email + Subscribe] </div>
  </div>
  <div class="mt-16 flex …sm:flex-row border-t border-gray-800 py-8"> © 2026 … · Privacy · Terms </div>
</footer>

<div data-sticky-call class="fixed inset-x-0 bottom-0 z-40 p-3 lg:hidden"> full-width pill </div>
<div id="cookie-consent" class="fixed bottom-0 z-50 bg-white"> Decline · Accept All </div>
<button id="back-to-top" class="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-primary-600"> ↑ </button>
```

## 3 — Token block to paste into `@theme`

```css
@theme {
  /* the brand — a custom ten-step blue around #1a8fd8 */
  --color-primary-50:  #f0f9fe;
  --color-primary-100: #dcf0fc;
  --color-primary-200: #b6e1f8;
  --color-primary-300: #85cef3;
  --color-primary-400: #49b3ec;
  --color-primary-500: #289de6;
  --color-primary-600: #1a8fd8;
  --color-primary-700: #1576b2;
  --color-primary-800: #145d8a;
  --color-primary-900: #134a6c;

  /* the structure — a custom blue-grey (NOT stock slate/blue-grey) */
  --color-ink-50:  #f4f7fa;
  --color-ink-100: #e6edf4;
  --color-ink-200: #c6d6e5;
  --color-ink-300: #9db4cc;
  --color-ink-400: #5f7e9f;
  --color-ink-500: #3a5b7f;
  --color-ink-600: #22405f;
  --color-ink-700: #16304a;
  --color-ink-800: #0f2237;
  --color-ink-900: #0a1827;

  --font-sans: "Manrope", system-ui, sans-serif;   /* 400/500/600/700/800 */

  --radius-lg: 0.5rem;    /* buttons + fields */
  --radius-2xl: 1rem;     /* every card / panel / image */
}

@utility shadow-soft { box-shadow: 0 4px 16px -4px rgb(0 0 0 / 0.1); }
```

Reference-only literals (Tailwind stock, keep them as utilities rather than new tokens): `gray-50
#f9fafb` (testimonials band), `gray-100 #f3f4f6` (FAQ disc), `gray-200 #e5e7eb` (FAQ rules), `gray-300
#d1d5db`, `gray-400 #9ca3af`, `gray-600 #4b5563`, `gray-700 #374151`, `gray-800 #1f2937`, `gray-900
#111827` (footer), `gray-950 #030712` (dark body), `amber-400 #fbbf24` (hero stars **only**).

## 4 — Screenshot analysis (`mainline-template.jpg` — 2400 × 1892, JPEG, 349,392 B)

Above-the-fold composition inside a macOS browser frame. Reading it top to bottom: the **near-black
licence strip** (licence number left, metro centre, amber stars and "4.9 · 200+ reviews on Google
(sample)" right); the **white header** with a blue pipe mark and a two-line `Mainline / PLUMBING` lockup,
seven small labels, then location pill → phone pill → moon button → solid blue **Get a quote**; the
**pale blue-grey hero** with a small blue uppercase eyebrow, a three-line headline whose last line *"and
everywhere between."* is blue, a two-line lede, a 5-star row, a 2 × 2 check list, and the **white floating
quote card** on the right (three labelled fields, a select, a full-width blue submit, a whisper of a
footnote); the **saturated blue emergency band** with its dot-prefixed eyebrow and the white phone pill
right-aligned; and the first screenful of **services** — eyebrow, 36 px heading, lede, then a
three-column run whose cell separators read as **single hairlines**.

What the screenshot cannot be trusted for: (a) it is a composition at ~1200 px, so it shows the **city pill
even though the markup hides it below 1536 px**; (b) it stops above the fold, so bands 4–10 (hairline grid
detail, why-us, process, towns, financing, reviews, FAQ, contact) have **no screenshot reference** — the
DOM and the spec are the only reference for those; (c) it shows no dark mode; (d) the macOS frame, traffic
lights and grey backdrop are explicitly **not** part of the design.

Live-render gotcha: 14 `[data-animate]` elements start at `opacity: 0`, so a full-page screenshot of the
preview taken without scrolling shows the reviews/FAQ bands as **blank space**. That is a capture
artifact, not an empty design — scroll the page before believing a full-page capture.

## 5 — Section-by-section fidelity notes

| band | must match | easy to get wrong |
| ---- | ---------- | ----------------- |
| licence bar | 37 px, `ink-800`, 12 px text, three label/value pairs, star block right | using `gray-900` instead of `ink-800` `#0f2237`; hiding items below `sm` |
| header | 81 px, `bg-white/90` + `blur(16px)`, 1 px `ink-100`, `xl` nav, `2xl` city pill, `md` phone pill | switching the nav at `lg` (1024) — the source comments say `xl` deliberately; dropping the separate dark-toggle button |
| hero | 7/5 twelve-column split, `h1` 60/66/−1.5, accent clause in `primary-600`, 4 checks in 2 columns, card 469 wide | making the split 6/6 or 8/4; putting the card below the copy at desktop; a 4th form field |
| quote card | 32 px padding, radius 16, `shadow-md`, 3 controls at 50 px, select with **8** job types, 12 px footnote | `shadow-lg`/`shadow-soft`; `rounded-xl`; a text input where the select belongs |
| emergency | `primary-600`, 164 px, 32 px padding, `ping` dot, 20 px bold line, white `rounded-full` pill in `primary-700` text | using `primary-700` for the band (that's the contact band); a rectangular button |
| services | ONE shell, `gap:1px` over `ink-100`, radius 16, 371 px tall, 6 white cells, price line at the bottom | six bordered cards (the single most likely error); prices in `ink-400` instead of `primary-700`; a 2 × 3 grid at desktop |
| why-us | `ink-50`, 2 cols, image 576 × 432 radius 16 **after** the copy on mobile, `<dl>` of exactly 4 with 2 px `primary-600` rules | 3 or 6 promises; an ordered list instead of `<dl>`; image first on mobile |
| process | `<ol>`, 3 steps, `01/02/03` in `tabular-nums`, `h-px flex-1` rule beside each number, small `primary-700` note | dropping the rule (it is the band's whole graphic language); a 4th step |
| towns | 15 rows, `grid-cols-2 sm:grid-cols-3`, 45 px rows with 1 px `ink-100` bottoms, text `ink-700` | cards/chips instead of text rows; 3 columns on mobile; 12 or 16 towns |
| financing | inset `primary-50` panel with `primary-200` border and 48 px section padding; **not** full-bleed | making it a band; using the `primary-600` ground; forgetting the sample-offer caveat |
| reviews | `gray-50`, pill + centred header, 3 white cards radius 16 `shadow-soft`, **blue** stars, 48 px avatar | amber stars; arrows/dots visible at desktop (the reference hides them); 4+ cards |
| FAQ | `max-w-3xl`, `divide-y` `gray-200`, 5 rows, single-open, 45° glyph, collapsed on first paint | `<details>` (kills the 300 ms transition); all rows open on load; missing `aria-expanded` |
| contact | `primary-700`, 480 px, white `h2`, `primary-100` lede, white solid + 2 px `white/40` outline CTA | `primary-600`; only one CTA; square corners |
| footer | `gray-900`, brand(4) + links(5) + newsletter(3) on a 12-col grid, 14 px uppercase heads, 46 px `gray-800` field | four link columns; an ink-ramp ground; a missing Component Dock link |
| chrome | preloader, skip link, 2 px progress, 1.5 s cookie strip, 48 px back-to-top past 300 px, `lg:hidden` call bar | leaving the cookie strip over the call bar's buttons at 390 px |

## 6 — Source → React adaptation

| reference | recreation |
| --------- | ---------- |
| Astro `.astro` page + `Base.astro` kit | one `App.tsx` composing band components under `src/sections/` |
| 325 utility classes hand-written in markup | Tailwind 4 utilities + the `@theme` block above; extract `Button`/`Field`/`Pill`/`Badge`/`Eyebrow`/`SectionHeading`/`StarRow` |
| `data-animate` + `IntersectionObserver` | one `useReveal()` hook (or `packages/ui`) that bails out under `prefers-reduced-motion` and never leaves `opacity: 0` |
| `data-faq-toggle` DOM surgery (`maxHeight` px, `opacity`, `rotate`) | `useState<number \| null>` + per-panel `style={{ maxHeight, opacity }}`; `aria-expanded`/`aria-controls` |
| `data-carousel` with manual `offsetWidth` maths | `perView` from a `matchMedia` hook (1024/640), `index` state, `maxIndex = slides − perView`, arrows/dots rendered only when `maxIndex > 0` |
| inline `<script>` theme resolution | inline script in `index.html` (must stay pre-paint) + `useTheme` context for the toggle |
| `localStorage` cookie keys (`cookie-consent`) | same key names, guarded for SSR-less Vite only |
| `form action="#" method="post"` (no handler) | local validation + confirmation, `preventDefault`, `aria-live` |
| `assets/img/logo.svg` | authored SVG/text lockup (pipe mark + name), two inks: `ink-800` on light, `primary-300` in dark |
| Unsplash photograph | `https://picsum.photos/seed/standpipe-1/1152/864` |
| JSON-LD `Plumber` | keep the type, the recreation's own name/phone/area |
| nine inner Astro routes | in-page anchors or omitted — no 404 routes |

## 7 — Sibling comparison (same 2026 Astro trade family)

Standpipe is the **fourth** design in this house kit, and it is close enough to two of them that
copy-paste will be tempting and subtly wrong.

| | **Standpipe** (`mainline`) | **Emberly** (`heatline`) | **Brassworks** (`fixtura`) | **Thermly** (`airwise`) |
| --- | --- | --- | --- | --- |
| trade | plumbing repairs, emergency line | boiler cover plans | plumbing **supply counter** | HVAC booking |
| face | **Manrope** 400–800 | DM Sans 300–700 | Poppins | Plus Jakarta Sans 400–800 |
| brand | **`#1a8fd8`** bright blue | `#1e6fa8` duller blue + ember `#f0705a` | terracotta `#b5652f` | teal |
| hero device | **3-field quote card** in cols 8–12 | three plan cards, one ringed | catalogue search | 3-step booking widget |
| licence strip | **yes** — 37 px `ink-800` | **yes** — `ink-800` | 40 px `ink` utility bar | no |
| services | **6-cell hairline grid**, from-prices | 6-cell hairline grid | hairline mosaic brand grid | season-swapped grid |
| towns | **15** | 12 | — | 16 |
| reviews | 3-slide carousel, **blue** stars, static ≥1024 | 3-slide carousel, 15 `primary-400` stars | — | 3 cards |
| FAQ | 5 rows, single-open | 5 rows | — | 5 rows |
| closing band | `primary-700` | `primary-700` | near-black trade band | full-width teal |

Two traps this table exists to prevent:

* **The `ink` ramps are not interchangeable.** Emberly's is `#f4f8fb / #e5eef4 / #3d5e76 / #1a3a4e /
  #14324a`; Standpipe's is `#f4f7fa / #e6edf4 / #3a5b7f / #16304a / #0f2237`. Copying Emberly's values
  gives a page that is 2–4 units off on every surface — visible side by side, invisible alone.
* **Plumbing does not mean Brassworks.** Brassworks sells stock over a counter in warm neutrals and
  Poppins; Standpipe sells **a visit** in cool blues and Manrope. Only the trade overlaps.

What is *shared* and should be reused rather than rebuilt: the hairline-grid shell (`gap-px` over an
`ink-100` ground), the numbered-step `<ol>` with `h-px` fill rules, the town-row list, the three-slide
carousel's per-view maths, and the single-open FAQ. Pull them from `packages/ui` if they are already
there; otherwise build them once here in the same shape.

## 8 — Verification gotchas found while measuring

* `curl` on this host must be **`curl -4`** (colorlib answers 200 over IPv4, hangs/403s otherwise). All
  URLs in the spec were read that way.
* The behaviour bundle (`…BLoalVWc.js`, 16,233 B) is the **house kit** — it contains handlers for
  dark-toggle, mobile menu, header elevation, reveal, scroll-spy, anchor scroll, billing toggle, FAQ,
  cookie, carousel, counter, back-to-top, `form[data-validate]`, video modal, typewriter, progress,
  lightbox, blog filters/search/parallax and lazy images. Only a dozen are wired on this page; the
  `data-form`/`data-newsletter-form`/`data-phone`/`data-sticky-call`/`data-licence-bar`/`data-emergency`
  hooks are **inert** (verified: absent from the bundle).
* Class census: **325/325** classes have a rule. `2xl:block` compiles as `.\32 xl\:block` inside
  `@media (width>=96rem)` — a naive `.2xl\:block` grep reports it missing.
* The FAQ's collapsed state is an **authored inline style** (`max-height: 0; opacity: 0`), not CSS and not
  JS. Reimplement as state; do not "discover" a missing stylesheet rule.
* The carousel at ≥1024 renders **zero dots and no arrows** because `maxIndex = 0`. Verified by DOM
  count, not by eye.
* `tel:(555) 010-0100` in the contact band is a real malformed href in the source; normalise it.
