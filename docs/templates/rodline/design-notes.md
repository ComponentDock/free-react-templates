# Rodline — Design Notes

Recreation of the ColorLib **"Flowpage"** design (https://colorlib.com/wp/template/flowpage/, live preview
https://preview.colorlib.com/theme/flowpage/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript app under
the name **Rodline** (`apps/rodline`). The spec is `openspec/specs/template-rodline/spec.md`; the task list
is `docs/templates/rodline/tasks.md`.

**Read this first:** the source is a **four-page Astro site** (landing + privacy + terms + thank-you) and
the recreation is **one page** — the landing page, with the thank-you copy folded into the quote card.
There is **no navigation anywhere** (the header is a wordmark and one phone button), **no hero image**
(one photograph total, in the second band), and **no theme toggle** (dark mode follows the OS). Seven
behaviours run; three hooks that look present are dormant — see *Behaviour*.

## Reference set (all read 2026-10-25, `curl -4`)

| artefact | bytes | sha256 | role |
| --- | ---: | --- | --- |
| `theme/flowpage/` page | 45,731 | `c49ae422…fb53e` | **DOM authority** (Astro build) |
| `_astro/Base.DIpRwtfA.css` | 46,310 | `9df9388e…dad` | **token authority** (Tailwind 4.3.3, no `@font-face`) |
| `_astro/Base.…BLoalVWc.js` | 16,233 | `e26cc055…92f2` | behaviour authority — **byte-identical to the Brassworks prep's bundle** |
| `_astro/ClientRouter…CYDbzu1r.js` | 16,357 | `69eb3ac5…399c` | Astro view-transition router — **not** reproduced (single page) |
| `flowpage-template.jpg` | 364,662 | `78cd21dc…3076` | catalogue capture, JPEG **2400×1892**, macOS browser window |
| `wp/template/flowpage/` | 111,768 | `709ca7c7…32e4` | catalogue entry (`og:image` names the screenshot) |
| `privacy/` · `terms/` · `thank-you/` | 24,163 · 22,952 · 16,593 | `c2d98edd…` · `dd3ff66f…` · `9b7f5232…` | live inner pages, **not built** |
| `sitemap.xml` · `robots.txt` | 425 · 65 | — | **generic placeholders** (`https://example.com/…`) — the source's sitemap is not this site |

Path ladder: `theme/flowpage/` **200**; `theme/flowpage/index.html` **200** with the same 45,731 B;
`services`, `contact`, `about`, `404` all **404**; `theme/bootstrap/flowpage/` not needed (the slug-only
path is the catalogue's own link). Live render measured with Playwright (Chromium) at
**1440 / 1280 / 1024 / 992 / 768 / 576 / 390 / 360**.

## Document order and DOM skeleton

```html
<body class="min-h-screen">
<a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 …">Skip to content</a>
<div id="scroll-progress" class="fixed top-0 left-0 z-[60] h-0.5 bg-primary-600"></div>
<div id="preloader" class="fixed inset-0 z-[100] flex items-center justify-center bg-white">   <!-- spinner -->
<div class="bg-ink-800 text-white" data-offer-bar>                        <!-- 44 px, NOT sticky -->
  <div class="container mx-auto flex items-center justify-between gap-4 px-4 py-2.5 lg:px-8">
<header class="sticky top-0 z-50 w-full border-b border-ink-100 bg-white/95 backdrop-blur">
  <div class="container mx-auto flex h-16 items-center justify-between gap-4 px-4 lg:h-18 lg:px-8">
    <a href="/"><img logo.svg class="h-8 w-auto dark:hidden"><img logo-light.svg class="hidden dark:block"></a>
    <a href="tel:…" class="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 …">
<main id="main-content">
  <section class="bg-ink-50">                                  <!-- 1 HERO: grid lg:grid-cols-12 -->
    <div class="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
      <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div class="lg:col-span-7">  h1 (two-tone) · p · ul(4) · tel + rating
        <div class="lg:col-span-5">  div.rounded-2xl.border.bg-white.p-6.shadow-md → h2 · p · form
  <section id="why-us" class="section bg-ink-50">              <!-- 2 figure(order-last lg:order-first) + copy + dl(3) -->
  <section id="services" class="section bg-white">             <!-- 3 head + mosaic (gap-px over bg-ink-100) -->
  <section id="testimonials" class="bg-gray-50 py-20 lg:py-28"> <!-- 4 head + carousel track, 3 slides -->
  <section id="faq" class="bg-white py-20 lg:py-28">            <!-- 5 head + divide-y, 5 rows -->
  <section id="emergency" class="bg-primary-600 text-white">    <!-- 6 pulsing dot + line + white pill CTA -->
<div class="fixed inset-x-0 bottom-0 z-40 … lg:hidden" data-sticky-call>   <!-- 73 px mobile call bar -->
<footer class="border-t border-ink-100 bg-white py-10">        <!-- one flex row + 12 px notice -->
```

**Nowhere in this document**: `<nav>`, a hamburger, a dark-mode button, a search field, a cookie panel,
a back-to-top disc, a counter, a lightbox, a newsletter field. `grep -c '<nav'` = **0**. That absence is
the design: a paid-traffic landing page with exactly one action.

## Paste-ready token block (`src/index.css`)

The palette is emitted as **literal hex per utility** in the reference — there is no `:root` palette
block to copy. These are the measured values:

```css
@import 'tailwindcss';
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: 'Inter', system-ui, sans-serif;

  /* brand: royal blue */
  --color-primary-50: #eef1fe;
  --color-primary-100: #dde3fd;
  --color-primary-200: #bac6fb;
  --color-primary-300: #8e9ff8;
  --color-primary-400: #5e72f6;   /* review stars + dark eyebrows */
  --color-primary-500: #3854f4;   /* focus ring */
  --color-primary-600: #2447f2;   /* BRAND */
  --color-primary-700: #1734c8;   /* eyebrows, price lines, CTA label on white */
  --color-primary-900: #0f2179;   /* dark badge ground at 50% */
  /* primary-800 does not exist in the reference */

  /* cool neutral ink */
  --color-ink-50: #f6f7fb;   /* hero + why band ground */
  --color-ink-100: #eceef4;  /* hairlines, mosaic gutter */
  --color-ink-200: #d6dae4;
  --color-ink-300: #aeb5c6;
  --color-ink-400: #727c93;
  --color-ink-500: #4b5468;  /* body copy */
  --color-ink-600: #2e3648;
  --color-ink-700: #1c2333;
  --color-ink-800: #101828;  /* headings + offer bar */
  --color-ink-900: #0a101c;

  /* the greys the bands and the dark variant actually use (Tailwind defaults) */
  --color-gray-50: #f9fafb;   /* reviews band — NOT ink-50 */
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;

  --color-amber-400: #fbbf24; /* hero stars ONLY */

  --shadow-soft: 0 4px 16px -4px rgb(0 0 0 / 0.1);
}

html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

`<head>` — the theme bootstrap must be inline (before the CSS paints):

```html
<script>
  (function () {
    var t = localStorage.theme;
    var dark = t === 'dark' || (!t && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  })();
</script>
```

No toggle button writes `localStorage.theme` on this page — but the read still belongs in the bootstrap,
because that is exactly what the reference's inline script does.

## Measured layout at eight widths (Playwright, live preview)

| viewport | doc height | offer bar | header | hero | `h1` | quote form | service cell | review slide |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: |
| 1440 | 3,904 | 44 | 73 | 656 | 60 / 66 | 408 | 404 | 405 |
| 1280 | 3,904 | 44 | 73 | 656 | 60 / 66 | 408 | 404 | 405 |
| 1024 | 4,048 | 44 | 73 | 692 | 60 (3 lines) | 301 | 319 | 320 |
| 992 | 4,895 | 60 | 65 | 1,056 | 48 | 686 (full) | 366.5 | 368 |
| 768 | 4,895 | 60 | 65 | 1,056 | 48 | 686 | 366.5 | 368 |
| 576 | 5,005 | 44 | 65 | 1,085 | 36 | 393 | 441 | 443 |
| 390 | 5,333 | 44 | 65 | 1,225 | 36 | 308 | 356 | 358 |
| 360 | 5,455 | 60 | 65 | 1,273 | 36 | 278 | 326 | 328 |

Band heights: **1440** — offer 44 · header 73 · hero 656 · why 688 · services 626 · reviews 740 · FAQ
820 · availability 116 · footer 141 = **3,904**. **992** — 60 · 65 · 1,056 · 1,220 · 715 · 714 · 756 ·
168 · 141 = **4,895**. **390** — 44 · 65 · 1,225 · 1,113 · 972 · 774 · 780 · 168 · 193 = 5,334 against a
5,333 document (1 px rounding).

Breakpoints are Tailwind defaults: **sm 640**, **md 768**, **lg 1024**, **xl 1280**. `section` bands are
`py-20` → **`lg:py-28`** (80 → 112). The container is Tailwind's default `.container`: **1280 px max with
32 px padding at 1440**, **768 with 16 px at 992**, full width with 16 px at 390.

## Section-by-section fidelity notes

**Offer bar.** First band on the page and **not sticky** — `bg-ink-800 text-white`, container
`justify-between`, `py-2.5`. Left `<p class="min-w-0 text-sm">` holds a bold `<span>` and a
`<span class="ml-2 hidden text-white/70 sm:inline">`; right group `flex shrink-0 items-center gap-3` with
the phone (`text-sm font-bold hover:text-primary-300`) and a `rounded p-1 text-white/50` ✕
(`data-offer-dismiss`) that **removes the node**. At 992 the qualifier is still `sm:inline` and the bar
measures 60 px because the sentence wraps; at 576 it is 44 px again. Do not persist the dismissal.

**Header.** `sticky top-0 z-50`, `border-b border-ink-100`, `bg-white/95 backdrop-blur` (dark
`gray-950/95`); row `h-16 lg:h-18` (`lg:h-18` = 72 px — not `h-20`) → measured **73 px / 65 px**. Two
children only: the logo anchor and the phone CTA. The logo is **two `<img>`s** (`logo.svg` +
`logo-light.svg`, 369 B each, `dark:hidden` / `dark:block`); the mark is an `F` path in `#101828`, a
`circle r=6` in `#2447F2` and a `<text>` run in `Inter 700` — redraw it as inline SVG, never copy the
file. The CTA is `rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-bold sm:px-5 sm:text-base` with a
20 px phone glyph; the label swaps `(555) 010-0163` ⇄ `Call now` at 640. **The header never gains a
shadow**: the bundle's `[data-header]` handler has nothing to bind to (verified: `box-shadow: none` at
`scrollY 200`).

**Hero.** `bg-ink-50`, container `py-12 lg:py-16`, grid `items-start gap-10 lg:grid-cols-12 lg:gap-14`.
Copy column `lg:col-span-7`: `h1` at `text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl
lg:text-6xl` with the last two words inside `<span class="text-primary-600 dark:text-primary-400">`; lede
`mt-5 max-w-xl text-lg text-ink-500`; four ticks in a `mt-7 space-y-2.5` `<ul>`, each
`flex gap-3 text-base font-medium text-ink-700` with a `#2447f2` check glyph; then `mt-8 flex flex-wrap
items-center gap-5` holding the `tel:` link (`text-2xl sm:text-3xl font-bold tracking-tight`) and the
rating `<p class="… text-sm text-ink-600">` — five **amber** stars 16 px, `4.8` bold, then
`opacity-80` qualifier text. At 1024 the copy column is narrow enough that the `h1` takes three lines
(198 px) and the band grows to 692.

**Quote card.** `lg:col-span-5` → `rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8`
(dark `gray-800` border / `gray-900` ground). `h2 text-xl font-bold lg:text-2xl`; a `mt-2 text-sm
text-ink-500` sub-line; `form.space-y-4.mt-6`. Each field group is a bare `<div>` with
`label.block.text-sm.font-semibold.text-ink-700` (`mt-1.5` on the control) and a control at `block w-full
rounded-lg border border-ink-200 bg-white px-4 py-3 text-base text-ink-800` + focus
`border-primary-500`/`ring-2 ring-primary-500/20`. The `<select>` is the same shape (48 px, `py-3`,
`lh: normal`) with a value-less placeholder option. Submit: `w-full rounded-lg bg-primary-600 px-6 py-3.5
text-base font-bold` (52 px) + `focus:ring-2 ring-primary-500 ring-offset-2`. Fine print
`text-center text-xs text-ink-400`. Inner form width is **408 px** at 1440 — the card is the smallest
element on the page and that is deliberate.

**Why band.** `section bg-ink-50` (112 px), 2 columns `gap-12 lg:gap-16`, and the `<figure>` is
**`order-last lg:order-first`**: at every width under 1024 the photograph moves *below* the copy. Image
is a single `unsplash` URL in the reference (`?w=800&h=600&fit=crop&q=80`, `loading="lazy"`) →
`picsum.photos/seed/rodline-1/800/600`, `w-full rounded-2xl object-cover`, measured 576×432 / 448×336 /
736×552 / 358×269. A 14 px `text-ink-400` `<figcaption>` sits `mt-3` under it — keep a caption slot, it
is part of the layout. Copy: eyebrow `text-sm font-bold uppercase tracking-wide text-primary-700` →
`h2 mt-3 text-3xl font-bold tracking-tight sm:text-4xl` → `p mt-4 text-lg text-ink-500` → `<dl class="mt-8
space-y-6">` with three `<div class="border-l-2 border-primary-600 pl-5">`, `dt text-base font-bold` and
`dd mt-1 text-ink-500`.

**Services mosaic.** Head is `max-w-2xl` (left-aligned, no badge). The grid is the design:
`mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2
lg:grid-cols-3` — the `bg-ink-100` ground *is* the gutter, so the three white cells read as one ruled
table. Cells: `flex flex-col bg-white p-6 lg:p-8`, `h3 text-lg font-bold`, blurb `mt-2 flex-1 text-ink-500`
(the `flex-1` is what aligns the price lines), price `mt-4 text-sm font-bold text-primary-700`. At 992 the
mosaic is 2-up with the third cell starting a second row; at 576 it is 1-up — **never** three rounded
cards, and **never** a 16/24 px gap.

**Reviews band.** Ground is **`bg-gray-50` `#f9fafb`** — one step cooler than the hero's `#f6f7fb`; the two
are 3 hex digits apart and that difference is intentional. Head: `mx-auto max-w-3xl text-center` with a
pill badge (`mb-4 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium
text-primary-700`), `h2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900` (note: `gray-900`,
not `ink-800`, in this band) and a `mt-4 text-lg text-gray-600` lede. The track is
`div.relative[data-carousel] > div.overflow-hidden > div.flex.transition-transform.duration-500.ease-out`,
each slide `flex-shrink-0 px-3` with widths written by JS (`parentWidth / perView`), the card
`rounded-2xl bg-white p-8 shadow-soft`, five **`text-primary-400`** 20 px stars (`mb-6 flex gap-1`), the
quote `text-lg font-medium` in `gray-900`, then `mt-6 flex items-center gap-4` with a 48 px
`rounded-full bg-primary-100` disc (initial, `text-lg font-semibold text-primary-600`), a
`font-semibold text-gray-900` name and `text-sm text-gray-600` city.

**FAQ band.** Same head pattern with the `Questions` badge; list `mx-auto mt-16 max-w-3xl` (768 px),
`divide-y divide-gray-200` (dark `gray-800`), rows `py-6`. Each row: `<button class="flex w-full
items-center justify-between text-left">` with `span.text-lg.font-semibold.text-gray-900` and a
`span.ml-4.flex.h-8.w-8.rounded-full.bg-gray-100` plus glyph (`M12 6v12M6 12h12`), then
`div.overflow-hidden.transition-all.duration-300` with **inline `max-height: 0px; opacity: 0`** and
`p.pt-4.text-gray-600`. Open state = `max-height: scrollHeight px`, `opacity: 1`, icon `rotate(45deg)`;
opening one closes the rest. All five start closed.

**Availability band.** `bg-primary-600 text-white`, `py-6 lg:py-8`, container flex
`lg:flex-row lg:items-center lg:justify-between`. Label: `flex items-center gap-2 text-sm font-semibold
uppercase tracking-wide opacity-90` plus an 8 px dot built from `span.relative.flex.h-2.w-2` containing
`span.absolute.inline-flex.h-full.w-full.animate-ping.rounded-full.bg-current.opacity-60` and
`span.relative.inline-flex.h-2.w-2.rounded-full.bg-current`. Line: `mt-1 text-lg font-bold lg:text-xl`.
CTA: `inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-lg font-bold bg-white
text-primary-700 hover:bg-primary-50` (211×52). 116 px tall at ≥1024; 168 px below, where the CTA drops
to its own row.

**Mobile call bar.** `fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white p-3 lg:hidden`
(dark `gray-900`), one full-width `rounded-full bg-primary-600 py-3 text-base font-bold` link with the
glyph and `Same-day availability · (555) 010-0163`. It is **73 px** and it **covers the last 33 px of the
footer** at 390 px. Reproduce it; note it in the PR.

**Footer.** `border-t border-ink-100 bg-white py-10`; one row `flex flex-col gap-4 text-sm text-ink-400
sm:flex-row sm:items-center sm:justify-between` — `<p>© 2026 …</p>` and a
`flex flex-wrap items-center gap-x-6 gap-y-2` group (phone `font-bold text-ink-700`, `Privacy`, `Terms`),
then a `mt-6 text-xs text-ink-300` notice line. Add the Component Dock link to that group.

## Behaviour (what runs, what is dormant)

| hook | live? | what it does |
| --- | --- | --- |
| inline `applyTheme()` | **yes** | `localStorage.theme` / `prefers-color-scheme` → `html.dark`, re-applied on `astro:after-swap` |
| `#preloader` | **yes** | fades then `remove()` 300 ms after `load` |
| `#scroll-progress` | **yes** | width % on passive scroll (6.56 % at `scrollY 200`) |
| `[data-animate]` ×14 + `[data-delay]` | **yes** | reveal from `opacity 0 / +20px` over 600 ms, IO `threshold .1`, `rootMargin 0 0 -10% 0`, skipped under reduced motion |
| `[data-offer-dismiss]` | **yes** | removes `[data-offer-bar]` |
| `[data-faq-toggle]` ×5 | **yes** | `max-height` + `opacity` + 45° icon, exclusive |
| `[data-carousel]` | **live but inert** | 3 slides = one page at every width → both arrows `display: none`, **0 dots**; the 5 s interval runs and does nothing |
| `[data-header]` | **dormant** | attribute absent → the "shadow past 50 px" rule never binds |
| `[data-dark-toggle]` | **absent** | no toggle control exists in the markup |
| `[data-form]` | **dormant** | the validator binds `form[data-validate]`; this form says `data-form`, so no `[data-error]` node is ever created and submit is native (POST → `/theme/flowpage/thank-you`) |
| `data-phone`, `data-emergency`, `data-sticky-call` | **inert markers** | referenced by no function in the bundle |

## Source → React adaptation

| reference | recreation |
| --- | --- |
| Astro `.astro` pages + `ClientRouter` view transitions | one Vite SPA, no router; in-page anchors only |
| Shared 16,233 B behaviour bundle (dark toggle, mobile menu, counters, lightbox, typewriter, billing toggle, blog filters, cookie panel, back-to-top, video modal) | React hooks/components for the **seven** behaviours this page uses; the rest are not ported (they have no DOM to bind to) |
| `data-animate` + IO reveal | `useReveal()` hook or `<Reveal>` wrapper, same thresholds/delays, same reduced-motion skip |
| FAQ accordion with inline `max-height` | `useState<number \| null>` + `aria-expanded`/`aria-controls`; animate with `max-height` for fidelity |
| Carousel script (perView 3/2/1, arrows, dots) | a static 3-up / 2-up / 1-up grid of the same three cards — the reference shows no controls, so no controls are built |
| `form action="/thank-you" method="post"` (native) | `onSubmit` → `preventDefault()`; card swaps to the thank-you copy; no network |
| `assets/img/logo.svg` (369 B, path + circle + text) | inline SVG component `Wordmark` in the brand colours; a `light` variant for dark mode |
| `unsplash` photograph | `https://picsum.photos/seed/rodline-1/800/600` |
| inline icon paths (phone ×5, check, star, plus, ✕) | `lucide-react` equivalents at the same sizes |
| Tailwind utilities compiled to literal hex | same utilities, but backed by an `@theme` block so `bg-ink-50` etc. exist in our build |

## Sibling comparison — read these before you write

* **`apps/flowcert` (shipped, prep 2026-10-24) is the nearest neighbour and the biggest trap.** It is the
  same *genre* from the same Astro family: a home-services landing with a three-field quick-book card, a
  hairline-divided price block, a three-review carousel and a five-row exclusive FAQ. But its palette is a
  *different* indigo (`primary-600 #2d4fd0`, `ink-50 #f6f7f9`, `ink-200 #d8dce4`) and its page has a
  licence strip + full navigation + six services + a coverage list + a newsletter footer. Rodline's are
  `#2447f2` / `#f6f7fb` / `#d6dae4`, with **no navigation at all**, a dismissible offer bar, an
  amber-vs-blue split on the two star rows, three services and a one-row footer. Do not copy its CSS
  variables "because they look the same" — they are 20–40° apart in hue and the audit's live-token check
  compares the *reference* hexes.
* **Brassworks (pending prep 2026-10-25)** is the same engine (identical behaviour bundle hash) and the
  same trade, but a supply house: two-row header with a catalogue search, hairline brand mosaic, dark
  bands, clay palette. Its lessons that transfer: the header shadow hook can be dormant; the mosaic
  `gap: 1px` technique is the family's signature; the Astro siblings all ship their palette as literal hex
  with **no** `@font-face`.
* **`apps/pipeflow` (shipped, ColorLib Plumber)** is the repo's other plumbing design and a much older
  layout: full navbar, red `#f53f51` brand, navy bands, a map + contact form. Useful only as a house-style
  reference for how a form is wired (`onSubmit` + `preventDefault`, no network).

## Traps

1. **The heading count.** `## Business (371)` → **372**; the row goes between `Florist` and
   `Foundation2`, sorted by source name. Re-count before writing.
2. **`gray-50` vs `ink-50`.** The reviews band is Tailwind `gray-50 #f9fafb`; the hero and why bands are
   `ink-50 #f6f7fb`. Swapping them is invisible in a screenshot diff and wrong in a token audit.
3. **Amber hero stars, blue review stars.** `text-amber-400 #fbbf24` in the rating line,
   `text-primary-400 #5e72f6` in the cards. Same glyph, two colours.
4. **No navigation.** Adding a nav (or a mobile menu) is the single most likely infidelity: the reference's
   `grep -c '<nav'` is 0.
5. **No header shadow.** The hook exists in the bundle; the attribute does not. A shadow on scroll is a
   deviation, not a restore.
6. **The form does not navigate.** Native `required` blocking must survive; the confirmation is *in the
   card*. No fake API call, no `action="#"` that reloads the page.
7. **The carousel has no controls.** Arrows/dots would be dead UI — the bundle hides them at every width.
8. **`lg:h-18`, not `lg:h-20`.** The header is 72 px + 1 px border = **73 px**; a 80 px row breaks the
   whole vertical rhythm and every band height in the table.
9. **The mobile bar overlaps the footer** by design. Keep the 73 px bar and do not "fix" the overlap unless
   the document heights in the spec's Requirement 14 are re-measured.
10. **`shadow-soft` is real** (`0 4px 16px -4px`), and it belongs to the review cards. The quote card uses
    `shadow-md`. Those are the only two shadows on the page.
11. **`--color-primary-800` does not exist.** Do not interpolate one; the sheet never emits it.
12. **Inter is declared, not delivered.** Load it from Google Fonts (`css2?family=Inter:wght@400;500;600;700`
    → 200). Without the link, every glyph falls back to `system-ui`, which is what the preview itself
    renders — so a screenshot comparison will *not* catch a missing font.
