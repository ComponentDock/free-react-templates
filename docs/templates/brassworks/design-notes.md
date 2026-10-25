# Brassworks — Design Notes

Recreation of the ColorLib **"Fixtura"** design (https://colorlib.com/wp/template/fixtura/, live preview
https://preview.colorlib.com/theme/fixtura/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript app
under the name **Brassworks** (`apps/brassworks`). The spec is
`openspec/specs/template-brassworks/spec.md`; the task list is `docs/templates/brassworks/tasks.md`.

**Read this first:** the source is a **twelve-page Astro site** (landing + catalogue + four category
listings + brands + trade accounts + showroom + contact + privacy + terms). The recreation is **one
page** — the landing page. And unlike most of the Astro siblings it ships **working dark mode**, a
**preloader**, a **scroll-progress bar**, a **cookie panel** and a **back-to-top disc**; all five are in
scope.

## Reference set (all read 2026-10-25, `curl -4`)

| artefact | bytes | sha256 | role |
| --- | ---: | --- | --- |
| `theme/fixtura/` page | 41,456 | `2e6b8461…a226` | **DOM authority** (Astro build) |
| `_astro/Base.Cf1ozeHK.css` | 54,868 | `50837b00…14e5` | **token authority** (one Tailwind 4 sheet, no `@font-face`) |
| `_astro/Base.…BLoalVWc.js` | 16,233 | `e26cc055…92f2` | behaviour authority (7 live behaviours) |
| `_astro/ClientRouter…CYDbzu1r.js` | — | — | Astro view-transition router — **not** reproduced (single page) |
| `fixtura-template.jpg` | 375,189 | `4cafc707…7e20` | catalogue capture, JPEG **2400×1892**, a macOS browser window |
| `fixtura.jpg` | 146 | — | **404** — the obvious name is wrong, use `-template.jpg` |
| `wp/template/fixtura/` | 111,654 | `d49218dd…62a6` | catalogue entry (`og:image` names the screenshot) |
| `catalogue/`, `catalogue/fixtures/`, `catalogue/water-heaters/`, `catalogue/pipe-and-fittings/`, `catalogue/tools/`, `brands/`, `trade-accounts/`, `showroom/`, `contact/`, `privacy/`, `terms/` | 26,729–38,947 | — | eleven inner pages, all **200**, **not built** |

Path ladder: `theme/fixtura/` **200**; the extension-less page forms 308 → trailing slash, all 200. Live
render measured with Playwright (Chromium) at **1440 / 1280 / 1024 / 992 / 768 / 576 / 390 / 360**.

## Document order and DOM skeleton

```html
<a href="#main-content" class="sr-only focus:not-sr-only …">Skip to content</a>
<div id="scroll-progress" class="fixed top-0 left-0 z-[60] h-0.5 bg-primary-600"></div>
<div id="preloader" class="fixed inset-0 z-[100] …">                      <!-- spinner, removed on load -->
<div class="bg-ink-800 text-ink-100">                                     <!-- 40 px utility bar -->
<header data-header class="sticky top-0 z-50 … backdrop-blur">
  <div class="container flex h-16 lg:h-20 …">                             <!-- logo · search · toggle · CTA · burger -->
  <nav aria-label="Catalogue navigation" class="hidden lg:block …">        <!-- 49 px rail, 5 links -->
  <div data-mobile-menu class="hidden xl:hidden">                          <!-- search + 5 links + CTA -->
<main id="main-content">
  <section>                        <!-- 1 hero: eyebrow · h1 · lede · CTA · 4 category cards -->
  <section id="featured">          <!-- 2 serif h2 · lede · 4 product cards · notice -->
  <section id="brands">            <!-- 3 eyebrow · h2 · 8-tile hairline mosaic · notice -->
  <section id="trade">             <!-- 4 bg-ink-800 · 5/7 split · 3-column <dl> -->
  <section id="showroom">          <!-- 5 5/7 split · address · hours <dl> · 2:1 photo -->
  <section id="contact">           <!-- 6 bg-primary-700 · centred · 2 CTAs -->
<footer class="bg-gray-900 …">     <!-- brand+socials | 3 link columns | trade block | bottom bar -->
<div id="cookie-consent" role="dialog" aria-label="Cookie consent">        <!-- 1.5 s delay -->
<button id="back-to-top">                                                  <!-- 300 px threshold -->
```

## Paste-ready token block (`src/index.css`)

```css
@import 'tailwindcss';
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: 'Poppins', system-ui, sans-serif;
  --font-serif: Georgia, 'Gelasio', 'Times New Roman', serif;

  /* brand clay */
  --color-primary-50: #fbf3ee;
  --color-primary-100: #f6e5d9;
  --color-primary-200: #ebc8b0;
  --color-primary-300: #dea481;
  --color-primary-400: #cc7e51;
  --color-primary-500: #be6b38;
  --color-primary-600: #b5652f;
  --color-primary-700: #925026;

  /* graphite neutrals */
  --color-ink-50: #fafaf9;
  --color-ink-100: #f0f0ee;
  --color-ink-200: #dededb;
  --color-ink-300: #b5b5b0;
  --color-ink-400: #7c7c76;
  --color-ink-500: #57574f;
  --color-ink-600: #3a3a34;
  --color-ink-700: #2a2a26;
  --color-ink-800: #1f2328;
  --color-ink-900: #14171a;

  /* the band that is *not* on the ink ramp, and the sand the sheet never emitted */
  --color-sand-50: #fafaf9; /* rendered value: the reference has no rule for bg-sand-50 */

  /* dark mode greys (Tailwind defaults, recorded so dark: utilities are explicit) */
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

`<head>` — the theme bootstrap **must** be inline (before the CSS paints) or dark mode flashes:

```html
<script>
  (function () {
    var t = localStorage.theme;
    var dark = t === 'dark' || (!t && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  })();
</script>
```

## Measured layout at eight widths (Playwright, live preview)

| viewport | doc height | header | `h1` | band `h2` | hero cards | products | brand tiles | `section` pad |
| --- | ---: | ---: | ---: | ---: | --- | --- | --- | ---: |
| 1440 | 4,831 | 130 | 48 | 36 | 286 × 4 | 286 × 4 | 303 × 4 | 112 |
| 1280 | 4,831 | 130 | 48 | 36 | 286 × 4 | 286 × 4 | 303 × 4 | 112 |
| 1024 | 4,907 | 130 | 48 | 36 | 222 × 4 | 222 × 4 | 239 × 4 | 112 |
| 992 | 6,641 | 65 | 48 | 36 | 360 × 2 | 356 × 2 | 367 × 2 | 80 |
| 768 | 6,641 | 65 | 48 | 36 | 360 × 2 | 356 × 2 | 367 × 2 | 80 |
| 576 | 9,187 | 65 | 36 | 30 | 213 × 2 | 443 × 1 | 443 × 1 | 80 |
| 390 | 9,130 | 65 | 36 | 30 | 171 × 2 | 358 × 1 | 358 × 1 | 80 |
| 360 | 9,164 | 65 | 36 | 30 | 156 × 2 | 328 × 1 | 328 × 1 | 80 |

Band heights at 1440: utility **40** · header **130** · hero **786** · featured **1,073** · brands
**431** · trade **516** · showroom **847** · closing **440** · footer **568** (= 4,831).

Grid breakpoints are Tailwind defaults: **sm 640**, **md 768**, **lg 1024**, **xl 1280**. The hero card row
is `grid-cols-2 lg:grid-cols-4`; products `sm:grid-cols-2 lg:grid-cols-4`; brands `sm:grid-cols-2
lg:grid-cols-4`; both 12-column splits are `lg:grid-cols-12` with `gap-10 lg:gap-16`.

## Section-by-section fidelity notes

**Utility bar.** 40 px, `#1f2328`, 12 px `#f0f0ee`. The left `<p>` is `min-w-0 truncate` — the hours are
one `<span>`, the "Next-day collection on stocked lines" sentence a second `<span class="ml-3 hidden
sm:inline">` in `ink-300`. Right side: `Trade accounts` (hidden <640) and the phone as `tel:` with
`data-phone`. At 360 the bar is the page's likeliest horizontal-overflow source — keep the truncate.

**Header.** `sticky top-0 z-50`, `bg-white/95` + `backdrop-blur`, `border-b` `ink-200`; `shadow-lg` is
added by script at `scrollY > 50`. Row 1 = `container flex h-16 lg:h-20` with the logo (36 px tall at
≥1024, and a **light-variant logo for dark mode** — swap with `dark:hidden` / `dark:block`, not a CSS
filter), the search form (`hidden md:block flex-1`, so it is absent at 390), and three actions with exact
visibility: dark toggle `hidden sm:block`, `Request a quote` CTA `hidden xl:inline-flex`, hamburger
`xl:hidden`. That means **between 1024 and 1279 the rail and the hamburger are both visible** — a
reference quirk; reproduce it rather than "fixing" it, and note it in the PR. The rail is a separate
`<nav aria-label="Catalogue navigation">` with `border-t border-ink-100`, `h-12`, `gap-8`, five
`14px/600` links, each with `data-nav-link`.

**Hero.** No photo — the band is copy over a card row. Copy column `max-w-2xl` (672). Eyebrow
`text-sm font-semibold uppercase tracking-wide text-primary-700`; `h1` `text-4xl leading-tight
tracking-tight sm:text-5xl` (36 → 48, measured `-1.2px` tracking); lede `text-lg text-ink-500`; CTA
`rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold`. The four cards are `<li><a>` — the `<a>` is
the card (`block overflow-hidden rounded-xl border border-ink-200 bg-ink-50`, hover `border-primary-500`),
the `<img>` is `aspect-[4/3]`, and the caption is a `<span class="block p-4">` holding a 16/600 name and
a 14 `ink-400` count. Card hover also moves the name to `primary-700`.

**Featured products.** The band's `h2` and every card `h3` are **serif** — the only serif on the page
besides nothing else. (`--font-serif` = `ui-serif, Georgia, …`.) Cards are `flex flex-col
overflow-hidden rounded-2xl border border-ink-100 bg-white` with a **square** photo; the body is
`flex flex-1 flex-col p-5`; the `<dl>` is `mt-4 space-y-1.5 border-t border-ink-100 pt-4 text-sm` with
`flex justify-between` rows (`dt` `ink-400`, `dd` `text-right font-medium ink-700`); the price line is
`text-sm font-semibold text-primary-700`; the CTA is a **full-width outlined** `block rounded-lg border
border-ink-200 px-4 py-2.5 text-center text-sm font-semibold` — not the brand button. Card 4's price
line reads a hire rate instead of "Trade price on account"; keep that asymmetry.

**Brands mosaic.** Eight tiles in **one** surface: `<ul class="grid gap-px overflow-hidden rounded-lg
bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">` with `<li class="bg-white p-5">`. The 1 px gutter *is* the
`bg-ink-200` showing through `gap-px` — do not add borders to the tiles, and do not give the `<ul>` a
border. Each tile: name `text-base font-bold tracking-tight`, range `mt-1 text-sm text-ink-400`.

**Trade band.** `bg-ink-800 py-16 lg:py-20`, 12 columns (left 5, right 7). This is the only band whose
eyebrow is **`primary-400`** (clay on graphite), and the only place the page argues rather than lists.
The right side is a `<dl>` in three equal columns (`grid gap-8 sm:grid-cols-3`) — `dt`
`text-base font-semibold text-white`, `dd` `mt-2 text-ink-200`. No cards, no radii.

**Showroom band.** Same 12-column split as the trade band but on white with `.section` padding. The left
column carries a real `<address>` (`mt-6 not-italic text-ink-600`, three `<p>` lines) and a
`<dl class="mt-6 max-w-sm">` of hours — rows `flex justify-between border-b border-ink-100 py-2.5`
(`dt` `ink-500`, `dd` 600 `ink-800`). The photo is `aspect-[2/1] w-full rounded-xl object-cover` in the
right seven columns (683 × 341 at 1440).

**Closing band.** `bg-primary-700 py-20 lg:py-28`, centred in `max-w-3xl`; lede is `primary-100` and
`max-w-xl`; the CTAs are a **white** button (text `primary-700`, `px-8 py-4 text-base font-bold`) and a
2 px `border-white/40` outlined one with a phone glyph, `flex-col` → `sm:flex-row`, 16 px gap.

**Footer.** `bg-gray-900` = **`#111827`**, which is deliberately not `ink-800` (`#1f2328`) — the footer is
cooler than the trade band. `pt-16 lg:pt-24`, 12 columns (4 / 5 / 3): brand block (light logo 40 px, blurb
`max-w-xs` `gray-400`, three 40 px social discs `rounded-lg bg-gray-800 p-2.5` with `aria-label`s,
address / phone / email at 14 px), three link columns (`text-sm font-semibold uppercase tracking-wider`
heads, `mt-4 space-y-3` links), and a "Trade accounts" block with a solid CTA. The bottom bar is
`mt-16 border-t border-gray-800 py-8` — copyright and two policy links, **plus the Component Dock link
the reference does not have**.

**Three floating surfaces.** Preloader (`fixed inset-0 z-[100]`, white / dark `gray-950`, 40 px spinner);
scroll-progress (`fixed top-0 h-0.5 bg-primary-600 z-[60]`, sits *above* the sticky header); back-to-top
(`fixed bottom-6 right-6 h-12 w-12 rounded-full bg-primary-600 shadow-lg shadow-primary-600/25`, hidden
until 300 px). The cookie panel is a fourth (`z-50`, bottom-fixed, `border-t`, `shadow-lg`).

## Source → React adaptation table

| source | React |
| --- | --- |
| Astro components + `Base.astro` layout | `App.tsx` composing 12 section components |
| `data-dark-toggle` + inline `applyTheme()` | a `useTheme()` hook + the inline head script (kept, for no-flash) |
| `[data-mobile-toggle]` / `[data-mobile-menu]` | `useState` + `aria-expanded`; add `Escape` + focus return |
| `#scroll-progress` width from `scroll` | `useEffect` with a passive listener, width written to a ref's style |
| `#back-to-top` at `scrollY > 300` | `useEffect` + `useState<'hidden'|'shown'>`, smooth `scrollTo({ top: 0 })` |
| `#cookie-consent` 1,500 ms `setTimeout` | `useEffect` timer + `localStorage['cookie-consent']` gate, `null` render when answered |
| `GET /catalogue?q=` search form | non-navigating: `onSubmit` prevented (the catalogue page is not built) |
| `.astro` `fetchpriority` / `decoding` attrs | drop; keep `loading="lazy"` on below-fold images |

## Sibling comparison (the other catalogue-gap preps)

Every other prepped design in this family is an Astro build (Thermly, Kettle, Plantroom, Flowcert,
Emberly, Percline), so the header/utility-bar/preloader/cookie/back-to-top vocabulary is shared — but
Quarto is a hand-written static site and shares none of it.

| design | brand | ground | dark mode | signature |
| --- | --- | --- | --- | --- |
| Thermly | warm ember | cream | yes | heat-pump sizing calculator |
| Kettle | amber | `#f7f7f7` | yes | sizing decision in the hero |
| Plantroom | — | — | yes | plant-room service plans |
| **Brassworks** | **clay `#b5652f`** | **`#fafaf9`** | **yes** | **hairline brand mosaic + square product cards with a spec `<dl>`** |

What is unique here and must not be generalised away: **two stacked nav rows** (utility bar + header row
+ rail = 130 px), the **hairline mosaic** (`gap-px` over a tinted container), the **serif appearing only
in the featured band**, and a **closing band on `primary-700` rather than `primary-600`** (the deeper clay
is the band colour, the lighter one is the button colour — do not swap them).

## Traps (measured, in the order they bite)

1. **`bg-sand-50` has no rule.** The featured band renders `rgba(0,0,0,0)` over the body's `#fafaf9`. If
   you "restore" a sand tint the page gains a fourth neutral and the brands band's hairlines stop
   separating. Use `#fafaf9`.
2. **Poppins is declared, not loaded.** No `@font-face`, no `<link>` — the preview renders `system-ui`
   unless the machine has Poppins. Load it from Google Fonts; expect a slightly wider `h1`.
3. **Serif is `ui-serif`.** On Linux CI that resolves to nothing useful — ship `Georgia, 'Gelasio', …`
   and load Gelasio, or the featured `h2` and every `h3` change width.
4. **The header CTA only exists at ≥1280** (`xl:inline-flex`) while the rail appears at **1024** and the
   hamburger dies at **1280** — so 1024–1279 shows both rail and hamburger. Reproduce it.
5. **Rounded card corners hide an image that is not rounded.** The hero card is `overflow-hidden` so the
   `4:3` photo takes the 12 px top corners; the product card is `overflow-hidden` + `rounded-2xl`. Do not
   put the radius on the `<img>`.
6. **The mosaic's gutter is a background, not a border.** `gap-px` + `bg-ink-200` on the `<ul>`, white
   `<li>`s. Adding `border` to the tiles double-rules them.
7. **The dark theme needs a light wordmark.** Two `<img>`s (`dark:hidden` / `dark:block`), or the logo
   disappears on `gray-950`.
8. **`shadow-lg` on the header is state, not style.** It must be absent at the top of the page —
   otherwise the hero's hairline reads as a shadow.
9. **`html { scroll-behavior: smooth }` ships, `prefers-reduced-motion` does not.** Keep the rule (the
   back-to-top depends on it) and add the guard yourself.
10. **The screenshot only covers the top third.** It is a macOS window capture of the hero; the dark
    bands, the mosaic and the footer have no screenshot at all — the live DOM and the measurements above
    are the only reference for them.
