# Closeknit — Design Notes

Recreation of ColorLib **"Circles"** — https://colorlib.com/wp/template/circles/ , live preview
https://preview.colorlib.com/theme/circles/ (HTTP 200, 92,289 B, `<title>Home | Circles</title>`) — as
a React 19 + Vite + Tailwind CSS 4 + TypeScript app called **Closeknit** (`apps/closeknit`,
`@free-react-templates/closeknit`, `https://closeknit.free.componentdock.com`).

Prepared by the prep stream on **2026-10-25** from the live DOM, the compiled stylesheet, the kit
script and the catalogue screenshot. Every number below was measured with `curl -4` (this host resolves
an IPv6 address that is banned, so every fetch needs `-4`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `circles` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under
> `## App Landing Page (35)` *before* opening the PR — the exact line is in the spec, §Purpose.

## Reference set

| artefact | bytes | sha256 / note |
| --- | ---: | --- |
| `theme/circles/` (DOM authority) | 92,289 | `c634579cd48e0176a68ca1a0f054130ef7acc8374019b8573853014e04ad37e0` |
| `_astro/Base.D79t8nIj.css` (token authority) | 63,718 | `db40d037cec30cbdd660896b89c6f73b175ebd187c76aa39151d63707f5759fa` |
| `_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `_astro/ClientRouter.astro…CYDbzu1r.js` | 16,357 | view-transition router; no design content |
| inline `<style>` in the page | 9,816 | the **only** font source: Manrope 300–800, `@font-face` → `/cf-fonts/v/manrope/5.2.8/…`, `display: swap` |
| `assets/img/logo.svg` | 487 | three overlapping circles (`#0284c7`, `#c026d3`, `#38bdf8`) + Manrope wordmark — **not copied** |
| `assets/img/logo-light.svg` | 487 | dark-mode twin of the same mark |
| `favicon.svg` | 377 | — |
| `circles-template.jpg` | 311,833 | real JPEG, 2400×1892 (hero only — see §Screenshot analysis) |
| `colorlib.com/wp/template/circles/` | 111,467 | catalog entry |
| `downloads/free/circles.zip` | — | **HTTP 404** — no archive twin; the live preview is the sole reference |

Live inner routes (all **308 → `/page/` → 200**, own `<title>`): `/about/` 35,391 · `/blog/` 40,917 ·
`/contact/` 34,386 · `/elements/` 54,989 · `/pricing/` 45,192 · `/privacy/` 36,449 · `/terms/` 35,188.

Class census: **393** distinct class tokens, 391 matched verbatim by a compiled rule, and the two
"misses" are only the entity-escaped `[&amp;&gt;*]` arbitrary variants of rules that do exist. No
phantom-class delta.

## Document order

```
#preloader
a[href="#main-content"]  (skip link)
#scroll-progress
header[data-header]                 sticky, white/80, blur, h-16 / lg:h-20
main#main-content
  section.hero                      primary-50 → white gradient + 2 blobs + parallax
  section.stats                     gray-50, border-y, 4 counters
  section#feed                      white, accent pill, masonry ×5
  section#circles                   gray-50, primary pill, grid ×6
  section#people                    white, accent pill, grid ×4
  section#privacy                   gray-50, primary pill, grid ×6 + call-out
  section#pricing                   white, primary pill, 3 tiers + billing switch
  section#testimonials              gray-50, primary pill, carousel ×3
  section#faq                       white, primary pill, 5 exclusive rows
  section#contact                   primary-600 → primary-800 + dot grid
footer                              gray-900, 12-col grid, newsletter, legal bar
#mobile-cta                         fixed bottom, lg:hidden
#cookie-consent                     role=dialog, slides in after 1.5 s
#back-to-top                        48 px circle, > 300 px
```

## DOM skeleton (abridged, classes verbatim)

### Header

```html
<header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all" data-header>
  <div class="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-8">
    <a href="/" class="flex items-center gap-2">…logo mark + wordmark…</a>
    <nav class="hidden lg:flex lg:items-center lg:gap-8" aria-label="Main navigation">
      <a href="#feed"     data-nav-link="feed"     class="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">Feed</a>
      <a href="#circles"  data-nav-link="circles"  …>Circles</a>
      <a href="#people"   data-nav-link="people"   …>People</a>
      <a href="#privacy"  data-nav-link="privacy"  …>Privacy</a>
      <a href="#about"    data-nav-link="about"    …>About</a>
      <a href="#pricing"  data-nav-link="pricing"  …>Plans</a>
      <a href="#blog"     data-nav-link="blog"     …>Blog</a>
      <a href="#contact"  data-nav-link="contact"  …>Contact</a>
    </nav>
    <div class="flex items-center gap-4">
      <button data-dark-toggle …>…moon…</button>                     <!-- dropped: light-only -->
      <a href="#pricing" class="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 sm:inline-flex">Create your circle</a>
      <button data-mobile-toggle aria-expanded="false" class="rounded-lg p-2 text-gray-600 lg:hidden" aria-label="Open menu">…</button>
    </div>
  </div>
  <div class="hidden lg:hidden" data-mobile-menu>
    <nav class="border-t border-gray-200 bg-white px-4 py-4">…8 links + CTA…</nav>
  </div>
</header>
```

### Hero

```html
<section class="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
  <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div class="animate-hero-float absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-200/50 blur-3xl" data-parallax="0.15"></div>
    <div class="animate-hero-float-reverse absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary-100/40 blur-3xl" data-parallax="-0.1"></div>
  </div>
  <div class="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
    <div class="mx-auto max-w-4xl text-center">
      <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
        </span>
        No public feed. No follower count. No algorithm.
      </div>
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        Share with the people<br>
        <span class="text-gradient" data-typewriter='["you actually meant","who were there","who will care"]'>you actually meant</span>
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">…</p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="#pricing" class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-primary-600/25 …">Create your circle <svg…/></a>
        <a href="#circles" class="… rounded-lg border border-gray-300 bg-white px-6 py-3 …">See how it works</a>
        <button type="button" data-video-modal="…" class="inline-flex items-center gap-3 text-sm font-medium text-gray-700">
          <span class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25">▶</span>
          Watch Demo
        </button>
      </div>
      <div class="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4">
        <!-- 9 avg / People per circle · 0 / Ads served · 100% / Chronological · 2.8k / Circles created -->
      </div>
    </div>
    <div class="mt-16 lg:mt-24">
      <div class="relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
        <img src="…" alt="Friends sharing a moment together outdoors" class="h-auto w-full object-cover">
      </div>
    </div>
  </div>
</section>
```

### Counter band

```html
<section class="border-y border-gray-200 bg-gray-50 py-16 lg:py-20">
  <div class="container mx-auto px-4 lg:px-8">
    <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
      <div class="text-center">
        <div class="text-4xl font-bold text-primary-600 lg:text-5xl"><span data-counter="9">0</span></div>
        <div class="mt-2 text-sm font-medium text-gray-600">Average circle size</div>
      </div>
      <!-- 100% / Chronological feed · 0 / Ads, ever · 31 sec / Median export time -->
    </div>
  </div>
</section>
```

### Feed post (masonry child)

```html
<div class="columns-1 gap-5 sm:columns-2 [&>*]:mb-5 [&>*]:break-inside-avoid">
  <article class="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
    <header class="flex items-center gap-3">
      <span class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-accent-500 text-xs font-bold text-white">LM</span>
      <div class="min-w-0 flex-1">
        <div class="truncate text-sm font-bold">Léa Moreau</div>
        <div class="truncate text-xs text-gray-500">in <span class="font-semibold text-primary-600">Sunday Climbers</span> · 2h</div>
      </div>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-600">Photo</span>
    </header>
    <p class="mt-4 text-sm leading-relaxed text-gray-700">…</p>
    <img src="…" alt="" loading="lazy" class="mt-4 aspect-[4/3] w-full rounded-2xl object-cover">
    <footer class="mt-4 flex items-center gap-5 border-t border-gray-100 pt-3 text-sm text-gray-500">
      <span class="inline-flex items-center gap-1.5"><svg class="h-4 w-4 text-accent-500">…heart…</svg><span class="font-semibold tabular-nums">24</span></span>
      <span class="inline-flex items-center gap-1.5"><svg class="h-4 w-4">…bubble…</svg><span class="font-semibold tabular-nums">7</span></span>
    </footer>
  </article>
  …
</div>
```

### Circle card / person card / privacy item

```html
<li class="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
  <div class="relative h-32 overflow-hidden">
    <img class="h-full w-full object-cover transition duration-500 group-hover:scale-105" …>
    <span class="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-700 backdrop-blur">Private</span>
  </div>
  <div class="p-5">
    <h3 class="text-lg font-bold"><a href="#circles" class="after:absolute after:inset-0">Sunday Climbers</a></h3>
    <p class="mt-1.5 text-sm leading-relaxed text-gray-600">…</p>
    <div class="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
      <span class="font-bold tabular-nums text-gray-700">6 members</span>
      <span class="text-primary-600">Active today</span>
    </div>
  </div>
</li>

<li class="flex flex-col items-center rounded-3xl border border-gray-200 bg-white p-6 text-center">
  <span class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-accent-500 text-lg font-extrabold text-white">LM</span>
  <h3 class="mt-4 font-bold">Léa Moreau</h3>
  <p class="text-sm text-gray-500">@lea</p>
  <p class="mt-3 text-sm leading-relaxed text-gray-600">…</p>
  <ul class="mt-4 flex flex-wrap justify-center gap-1.5">
    <li class="rounded-full bg-primary-50 px-2 py-0.5 text-[11px] font-semibold text-primary-700">Sunday Climbers</li>
  </ul>
  <p class="mt-4 text-xs text-gray-500">In 2 circles with you</p>
  <button type="button" class="btn-primary mt-4 w-full">Follow</button>
</li>

<li class="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
  <span class="mt-0.5 flex h-6 w-11 flex-none items-center rounded-full p-1 transition justify-end bg-primary-600" role="img" aria-label="On by default">
    <span class="block h-4 w-4 rounded-full bg-white shadow"></span>
  </span>
  <div class="min-w-0">
    <h3 class="font-bold">Posts default to one circle</h3>
    <p class="mt-1 text-sm leading-relaxed text-gray-600">…</p>
    <p class="mt-2 text-xs font-semibold uppercase tracking-wide text-primary-600">On by default</p>
  </div>
</li>
```

### Pricing tier + switch

```html
<div class="mt-10 flex items-center justify-center gap-4">
  <span class="text-sm font-medium text-gray-900" data-billing-label="monthly">Monthly</span>
  <button type="button" role="switch" aria-checked="false" aria-label="Toggle annual billing"
          class="relative h-7 w-14 cursor-pointer rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          data-billing-toggle>
    <span class="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200" data-billing-knob></span>
  </button>
  <span class="text-sm font-medium text-gray-500">Yearly <span class="ml-1.5 inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Save 20%</span></span>
</div>

<div class="relative rounded-2xl p-8 shadow-soft ring-2 ring-primary-600 bg-white">   <!-- featured -->
  <div class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">Most Popular</div>
  <h3 class="text-xl font-semibold text-gray-900">Member</h3>
  <p class="mt-2 text-sm text-gray-600">…</p>
  <div class="mt-6 text-center">
    <div class="flex items-baseline justify-center gap-1">
      <span class="text-5xl font-bold text-gray-900" data-price-monthly="5" data-price-yearly="50">$5</span>
      <span class="text-gray-600">/month</span>
    </div>
    <p class="mt-1 text-sm text-gray-500" data-billing-note>
      <span data-show-monthly>Billed monthly</span>
      <span data-show-yearly class="hidden">Billed annually ($50/year)</span>
    </p>
  </div>
  <ul class="mt-8 space-y-4">
    <li class="flex items-start gap-3"><svg class="h-5 w-5 flex-shrink-0 text-primary-600">✓</svg><span class="text-gray-700">…</span></li>
    <li class="flex items-start gap-3"><svg class="h-5 w-5 flex-shrink-0 text-gray-400">×</svg><span class="text-gray-500">…</span></li>
  </ul>
  <div class="mt-8"><a href="#contact" class="block w-full rounded-lg py-3 text-center font-medium …">Become a member</a></div>
</div>
```

The dollar sign is **inside** the `<span>` the script rewrites (`e.textContent = '$' + value`), so the
recreation must keep the symbol in the same node or format it in the component instead.

## CSS token reference (paste-ready `@theme` for `apps/closeknit/src/index.css`)

```css
@import "tailwindcss";

@theme {
  /* brand — the source uses Tailwind's sky ramp, not a custom blue */
  --color-primary-50:  #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;   /* brand: buttons, rings, progress */
  --color-primary-700: #0369a1;   /* hover, pill text, closing-CTA label */
  --color-primary-800: #075985;   /* closing-CTA gradient end */

  /* second brand hue — heart icon, avatar gradients, two eyebrow pills */
  --color-accent-100: #fae8ff;
  --color-accent-300: #f0abfc;
  --color-accent-400: #e879f9;
  --color-accent-500: #d946ef;
  --color-accent-700: #a21caf;

  --font-sans: "Manrope", system-ui, sans-serif;

  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;

  --shadow-soft: 0 4px 16px -4px #0000001a;
  --shadow-soft-lg: 0 12px 32px -8px #00000024;
}

/* the gradient headline — the only place a gradient is clipped to text */
.text-gradient {
  background-image: linear-gradient(to right, #0284c7, #38bdf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* the two shared button shapes, measured from the sheet */
@utility btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var(--radius-lg);
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  background-color: #0284c7;
  box-shadow: 0 10px 15px -3px #0284c740, 0 4px 6px -4px #0284c740;
  transition: all 150ms;
}
@utility btn-primary-hover { background-color: #0369a1; }
@utility btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var(--radius-lg);
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  background-color: #fff;
  border: 1px solid #d1d5db;
}

/* band rhythm — 20/28 rem is the house scale the source uses on 8 of 10 bands */
@utility section-band { padding-block: 5rem; }
@utility section-band-lg { padding-block: 5rem; }
```

Base layer facts worth keeping: `body { color: #111827; -webkit-font-smoothing: antialiased }`, html
`line-height: 1.5`, `--spacing: 0.25rem`.

## Screenshot analysis (2400 × 1892, macOS-window framed)

- **Ground:** the window sits on `#f9fafb`; inside, a white header and a hero that opens in `#f0f9ff`
  and fades to white by the stats row.
- **Header:** three overlapping circles (blue, light blue, fuchsia) + `Circles` wordmark; eight small
  `gray-600` links in one row; a moon glyph; a solid `#0284c7` rounded-8 button.
- **Badge:** small pill, `#f0f9ff` fill, `#bae6fd` hairline, `#0369a1` 12 px text, 2 px blue dot that
  pulses.
- **Headline:** two centred lines at ~60 px, Manrope bold, tight tracking — line 1 `#111827`,
  line 2 a left-to-right `#0284c7 → #38bdf8` gradient clipped to the glyphs. Reading order implies the
  second line is *the* promise, which is why the accent is on it and nowhere else in the hero.
- **Lede:** one 18–20 px `gray-600` paragraph at ~`max-w-2xl`, three lines.
- **Controls:** solid blue (arrow), white with 1 px grey edge, then a 48 px blue play disc + label —
  the third control reads as a link, not a button.
- **Stats:** four columns above a full-width hairline; 28–32 px bold values, 14 px `gray-600` labels.
- **Figure:** one landscape photograph inside a 16 px-radius frame with a 1 px grey ring and a strong
  soft shadow (~1000 px wide, centred). Warm/cool contrast in the image is the page's only colour
  outside the palette.
- **Below the fold (not in the capture, read from the DOM):** the masonry feed, then alternating
  `gray-50`/white bands, then a saturated blue closing block. The repeat device is a **pill eyebrow**
  (primary or accent) above an `h2` above a one-line lede, always centred, always followed by a grid
  or a masonry — that is the page's structural signature and it must not be flattened into plain
  headings.

## Section-by-section fidelity notes

1. **Hero.** No card, no split: it is a centred column on a gradient. Keep the `border-t` statistic row
   *inside* the same container as the copy and give the figure its own `mt-16 lg:mt-24` step — the
   source's hero is ~1.4 viewports tall at desktop and the figure is what pushes its height. The
   typewriter must write into a `span` whose width changes; centre it without letting the layout jump
   (reserve line height, not width).
2. **Counter band.** Only the numbers are coloured (`primary-600`); labels are `gray-600` at 14 px. The
   source starts these at `0` in the markup — with JavaScript off the page would show four zeros, so the
   recreation must render the final values server-side/first-paint and animate *down-to-up* only as an
   enhancement.
3. **Feed.** A true CSS masonry (`columns-1 sm:columns-2`), not a grid — the five cards have unequal
   heights (two carry 4:3 images, one carries a poll badge) and a grid would expose ragged gaps. Post 2
   and post 4 have **no type badge**; that asymmetry is real, not an omission.
4. **Circles.** Cards are one link target via `after:absolute after:inset-0`; keep that pattern (and a
   focus ring on the `li`) rather than nesting a button. The pill over the image is `white/90` with
   `backdrop-blur` — the only translucent element outside the header.
5. **People.** Avatars are *gradients* here (three stops) but *solid* in the feed (two stops) and in the
   testimonials (`primary-100`); that is three different avatar treatments on one page and each is
   correct in its band.
6. **Privacy.** The switch glyphs are `role="img"` + `aria-label`, **not** controls — the page sells
   defaults, it does not offer settings. Reproducing them as focusable toggles would be a fidelity bug
   *and* an accessibility lie.
7. **Pricing.** The featured card is the middle one: `ring-2 ring-primary-600`, white ground (the other
   two are `gray-50`), plus the ribbon hanging 16 px above the card. Included/excluded features share
   one list; the exclusion is carried by the `×` icon **and** two grey text tokens.
8. **Testimonials.** Initially only three cards render — the arrows are hidden because there is no
   second page of slides. The carousel code still builds the dot row and the 5 s timer, so a faithful
   recreation has a timer that does nothing; keep the code path but no visible motion.
9. **FAQ.** Exclusive accordion, `max-height` transition, 45° disc rotation. The reference ships the
   first row **closed**; keep it closed.
10. **Closing CTA.** The gradient runs from `#0284c7` to `#075985` (135°) with a 10 %-opacity white dot
    grid at 40 px pitch and two blurred white blobs. Without the dot grid the band reads flat — it is
    a `background-image` on an `aria-hidden` overlay, not a texture image.
11. **Footer.** Brand column is 4 of 12, the three link columns share 5, the newsletter takes 3. The
    legal bar is a separate row with a top border. Note the source's `gray-400` body copy over
    `gray-900`: 4.6:1 — keep both tokens, do not "improve" the ground.
12. **Mobile bar.** Two equal buttons, secondary left. It is `lg:hidden`, and the cookie strip is
    `z-50` above it, so the two never fight for the bottom edge.

## Source → React adaptation

| reference | recreation |
| --- | --- |
| Astro `.astro` page + `_astro` kit script | React 19 components + hooks, one `src/App.tsx` composition |
| `[data-*]` jQuery-style behaviour wiring on `astro:page-load` | `useEffect` hooks per concern (`useReveal`, `useCounters`, `useTypewriter`, `useBilling`, `useCarousel`, `useFaq`) |
| inline `<style>` `@font-face` → `/cf-fonts` | `<link>` to Google Fonts Manrope 300–800 in `index.html` |
| Tailwind 4.3.3 compiled sheet (63,718 B) | `@theme` block above + Tailwind utilities |
| `localStorage` for theme + cookie consent | component state; no storage keys invented |
| YouTube iframe in the demo modal | local placeholder panel, same modal mechanics |
| Unsplash hotlinks | `https://picsum.photos/seed/closeknit-<n>/<w>/<h>` |
| logo / favicon SVGs | inline SVG drawn in the app (three circles, brand hexes) |
| scroll-spy via `IntersectionObserver` | `useScrollSpy(ids)` returning the active id |
| `.nav-active { color:#111827; font-weight:600 }` | `aria-current="page"` + the same two declarations |

## Sibling comparison

ColorLib ships this design as a **single Astro product landing**, not part of the older `bootstrap-*`
demo families: the neighbours on the catalogue listing that have already been prepped (`backstop` →
**Flowcert**, `airwise` → **Thermly**) come from the same 2026 Astro/Tailwind kit, so the *kit* is
shared but the *design* is not —
`backstop` (prepped as **Flowcert**) is a cool `ink`/`indigo` trade page with hairline grids and no
gradients, while `circles` is a **sky + fuchsia** consumer product page built on pills, rounded cards,
masonry and two gradient grounds. Nothing but the Astro/Tailwind house style (`container` caps,
`py-20 sm:py-28` rhythm, `shadow-soft`, `data-animate`) should be carried across — do not reuse
Flowcert's `ink` ramp or its hairline-cell motif here.

Within the page, the palette discipline is: **`primary` for actions and structure, `accent` for
people and warmth** (hearts, avatars, two eyebrow pills). Reversing those roles is the fastest way to
make the page look wrong while every measurement still matches.
