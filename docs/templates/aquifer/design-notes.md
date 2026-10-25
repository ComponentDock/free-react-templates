# Aquifer — Design Notes

Recreation of the ColorLib **"Dowser"** leak-detection design
(https://colorlib.com/wp/template/dowser/, live preview
https://preview.colorlib.com/theme/dowser/) as **Aquifer** — React 19 + Vite + Tailwind CSS 4 +
TypeScript, `apps/aquifer`.

Full requirement set: `openspec/specs/template-aquifer/spec.md`. This file is the *how*: the DOM
skeleton with classes verbatim, the paste-ready token block, and the per-band fidelity notes.

## Reference set (all read 2026-10-25, `curl -4`)

| file | bytes | sha256 | why it matters |
| --- | ---: | --- | --- |
| `theme/dowser/index.html` | 70,377 | `14320426…` | the DOM: licence strip + header + hero + 9 bands + sticky bar + footer + 3 chrome pieces |
| `_astro/Base.DWnf_ikV.css` | 54,751 | `0c734ab6…` | the only stylesheet (Tailwind **v4.3.3** output) — every token, every component class |
| `_astro/Base.…BLoalVWc.js` | 16,233 | `e26cc055…` | the house kit (**identical hash to the Plantroom / Veranda / Stoke / Closeknit reads**): reveal, header shadow, menu, dark toggle, scroll-spy, carousel, FAQ, cookie, back-to-top, progress, forms (only `form[data-validate]`), toast |
| `_astro/ClientRouter…CYDbzu1r.js` | 16,357 | `69eb3ac5…` | Astro view transitions — no design content, ignore |
| inline `<style>` | 7,444 | — | **Space Grotesk** 400/500/600/700 + **JetBrains Mono** 500/700 `@font-face`, pointing at `/cf-fonts/v/…` (the page has no other font) |
| inline `<script>` ×3 | — | — | `applyTheme()`, preloader removal, JSON-LD `Plumber` (**corrupt — do not copy**, see Traps) |
| `assets/img/logo.svg` · `logo-light.svg` | 790 · 790 | `9713bc06…` · `9640db76…` | wordmark, rendered **180×36** in the header and 40 px tall in the footer (redraw, don't copy) |
| `assets/img/locate-panel.svg` | 1,599 | `916e7fd2…` | the page's **only** illustration, 800×600 — a slab with one marked point (redraw as an SVG component) |
| `favicon.svg` | 387 | `bd0095cc…` | — |
| `css/style.css`, `js/snippet.js`, `downloads/free/dowser.zip`, `og-image.jpg` | — | — | **404** — no legacy sheet, no archive twin, no OG image |

Fetches need `-4` (the host's IPv6 is banned). With no Chrome/CDP daemon available in this container,
the measurements below were taken with **Playwright**
(`/root/free-templates-firebase/node_modules/playwright`): `goto(..., {waitUntil:'domcontentloaded'})`
— `networkidle` hangs on this host — then `getComputedStyle` + `getBoundingClientRect` read-backs at
1440 / 900 / 390 px.

The page is a **single-page Astro build with nine routes**; of the eight inner pages, `/how-we-find-it`,
`/insurance`, `/services` and `/service-areas` are the authoritative source for copy the landing page
compresses. `/elements` is a 404 — there is no style guide to mine.

## Document order

```
#preloader                    fixed z-100, 40px spinner ring, removed 300ms after load
a.skip                        → #main-content
#scroll-progress              fixed h-0.5 bg-primary-600, width = scroll ratio
div[data-licence-bar]         bg-ink-800 h-9 text-xs — licence / certified / county / 4.9 (sample)
header[data-header]           sticky z-50, h-16 lg:h-20, white/90 + backdrop-blur-lg, border-b ink-100
  └ logo img (180×36) + nav (xl only, SIX links) + location pill (2xl) + phone pill (md)
    + dark toggle + CTA (xl) + hamburger (xl:hidden)
div[data-mobile-menu]         hidden xl:hidden panel — six rows + pills + full-width CTA
main#main-content
  section (hero)               bg-ink-50, py-14 lg:py-20, lg:grid-cols-12 (7 copy / 5 card, gap-16)
    └ eyebrow / h1 (+span) / lede / rating line / 2×2 checklist
    └ div#quote card           rounded-2xl border ink-100 bg-white p-8 shadow-md — h2 + 3 fields + CTA
  section#emergency            bg-primary-600 text-white, container py-6 lg:py-8 — dot + copy + pill
  div[data-sticky-call]        lg:hidden fixed bottom-0 z-40, white, p-3 — one teal pill
  section#process.section      white — eyebrow / h2 / lede / ol 3-col of six li
  section#why-us.section       bg-ink-50 — figure (order-last lg:order-first) + dl of four rows
  section#services.section     white — eyebrow / h2 / lede / gap-px hairline grid (6 cells)
  section#areas.section        white — 12-col 5/7: heading + 12-town list
  section#testimonials         bg-gray-50 py-20 lg:py-28 — centred header + carousel (3 slides)
  section#faq                  white py-20 lg:py-28 — centred header + divide-y accordion (5)
  section#contact              bg-primary-700 py-20 lg:py-28 — centred h2/p + two buttons
  footer                       bg-gray-900 pt-16 lg:pt-24 — 12-col: 4 brand / 5 links / 3 newsletter
div#cookie-consent             fixed bottom-0 z-50 role=dialog, slides up 1.5s
button#back-to-top             fixed bottom-6 right-6 z-50, 48px disc primary-600
```

## Paste-ready token block (`src/index.css`)

```css
@import "tailwindcss";

@theme {
  /* brand: a cyan/teal ramp defined by the sheet, not a Tailwind stock ramp */
  --color-primary-50:  #ecfdff;
  --color-primary-100: #cff8fe;
  --color-primary-200: #a5effc;
  --color-primary-300: #67e0f9;   /* dark mode only in the reference */
  --color-primary-400: #22c8ee;   /* testimonial stars */
  --color-primary-500: #06a8d4;   /* input focus ring */
  --color-primary-600: #0886b2;   /* brand */
  --color-primary-700: #0e6b90;   /* hover + eyebrows + closing band */
  --color-primary-800: #155875;   /* dark mode only */
  --color-primary-900: #164a63;   /* dark mode only */

  /* blue-grey ink ramp — this is what keeps the cyan from reading "SaaS" */
  --color-ink-50:  #f5f6fa;
  --color-ink-100: #e9ebf3;
  --color-ink-200: #d2d6e6;
  --color-ink-300: #a9b0cc;
  --color-ink-400: #7a84a8;
  --color-ink-500: #59628a;
  --color-ink-600: #414970;
  --color-ink-700: #323858;
  --color-ink-800: #20243a;
  --color-ink-900: #141726;

  --font-sans: "Space Grotesk", system-ui, sans-serif;
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
    box-shadow: 0 10px 15px -3px #0886b240, 0 4px 6px -4px #0886b240; }
  .btn-primary:hover { background-color: var(--color-primary-700); }

  .nav-active { color: var(--color-ink-800); font-weight: 600; }
}
```

Tailwind 4 compiles `gray` from the default palette — the footer (`bg-gray-900`, `text-gray-300`,
`bg-gray-800` tiles), the testimonial ground (`bg-gray-50`) and the FAQ rules (`divide-gray-200`,
`bg-gray-100` discs) use **stock** grey, while the hero, the emergency band, the why-us panel and every
card border use **ink**. Keep the split; it is in the reference.

Load the two faces in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap">
```

Both URLs return **200** with a browser UA (`css2` needs the `wght@` axis form — a bare
`family=Space+Grotesk:400,500` 400s). JetBrains Mono ships **only 500 and 700** on this page; do not
add 400.

## Section-by-section fidelity notes

### Licence strip (`div[data-licence-bar]`)

`w-full border-b bg-ink-800 text-ink-100` — measured **37 px** including the 1 px border, `text-xs`.
Inner `container mx-auto flex h-9 items-center justify-between gap-4 px-4 lg:px-8`. Left is a `<ul>`
with `gap-x-4`: `Licence` (`opacity-70`) + `KY MP #00000` (`font-semibold`), then
`Acoustic and thermal certified` and `Serving Jefferson County` — **both `hidden sm:flex`**. Right is a
`p` with an `amber-400` 14 px star, `4.9` and `220+ reviews on Google (sample)` at `opacity-70`.
The strip is near-black **ink**, not grey — it is the page's only dark chrome above the fold.

### Header (`header[data-header]`)

`sticky top-0 z-50 w-full border-b border-ink-100 bg-white/90 backdrop-blur-lg`. Inner
`container mx-auto flex h-16 items-center justify-between gap-6 px-4 lg:h-20 lg:px-8` → measured
**65 / 81 px**. Logo is an `<img>` at `h-8 lg:h-9` (rendered **180×36**) with a dark-mode twin
(`dark:hidden` / `dark:block`) that the recreation drops.

Nav is `hidden min-w-0 xl:flex xl:items-center xl:gap-7` — **six** links at `text-sm font-semibold
text-ink-600 hover:text-primary-700`. The markup carries an in-source comment explaining the `xl`
threshold (*"a trade header carries a six or seven item nav plus a phone pill, a theme toggle and a
CTA… does not fit until about 1280"*): keep `xl`, not `lg`.

Right cluster: location pill (`hidden 2xl:inline-flex`, pin glyph + `Louisville, KY`), phone pill
(`hidden md:inline-flex`, `(555) 130-1300`), dark toggle (`hidden lg:flex`, 20 px moon), CTA
(`hidden xl:inline-flex rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-bold`), hamburger
(`xl:hidden`, 24 px). Past 50 px of scroll the header gains `shadow-lg`.

### Hero (`section` — no id)

`bg-ink-50`, inner `container mx-auto px-4 py-14 lg:px-8 lg:py-20` (**80 px measured at 1440**), grid
`grid items-start gap-10 lg:grid-cols-12 lg:gap-16` (**64 px gutters**), copy `lg:col-span-7 lg:pt-6`,
card `lg:col-span-5` (**469 px** wide).

Copy column: eyebrow `text-sm font-bold uppercase tracking-wide text-primary-700` (measured 14 px,
0.35 px tracking) → `mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-5xl
lg:text-6xl` (**60/66/−1.5 at 1440**) with the second sentence in a `span.text-primary-600` → `mt-5
max-w-xl text-lg text-ink-500` lede → `mt-6` rating line (five 16 px `amber-400` stars, `4.9` bold,
`220+ reviews on Google · sample data` at `opacity-80`) → `mt-8 grid gap-3 sm:grid-cols-2` checklist of
four `flex gap-2.5 text-base font-medium text-ink-700` items with 20 px `primary-600` ticks.

**The ledger the design is built on** — keep these four strings verbatim, they are the value
proposition:

```
Located before anything is opened
Marked on the floor, with the depth
Written report your insurer will accept
Fee credited if we do the repair
```

### Booking card (`#quote`)

`rounded-2xl border border-ink-100 bg-white p-6 lg:p-8 shadow-md` — measured **469×509**, 16 px radius,
32 px padding, `1px #e9ebf3`. Content: `h2 text-xl lg:text-2xl font-bold text-ink-800`
(`Book a leak location`), `mt-2 text-sm text-ink-500` (`Three fields. We reply within the hour on
weekdays.`), then `form.space-y-4.mt-6` with `action="#" method="post" data-form`.

Fields are one column: label `block text-sm font-semibold text-ink-700`, control `mt-1.5 block w-full
rounded-lg border border-ink-200 bg-white px-4 py-3 text-base` (**50 px** tall, 8 px radius),
placeholder `text-ink-300`, focus `border-primary-500` + `ring-2 ring-primary-500/20`. The select's
first option is `Choose the closest match` (`value=""`), then **seven** symptom options in the
reference order. Button `w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base font-bold` →
`Book the location`. Footnote `text-center text-xs text-ink-400`.

### Emergency band (`#emergency` + `[data-sticky-call]`)

A **thin** band, not a `.section`: `bg-primary-600 text-white`, container `py-6 lg:py-8` — measured
**164 px** tall. Flex `flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between`.
Left: an eyebrow `p` at `text-sm font-semibold uppercase tracking-wide opacity-90` whose **first child
is the live dot** — `<span class="relative flex h-2 w-2">` with an inner `animate-ping` span at
`opacity-60` behind a static `h-2 w-2 rounded-full bg-current`; then `mt-1 text-lg font-bold lg:text-xl`
headline; then `mt-2 max-w-2xl text-sm opacity-90` paragraph. Right: `rounded-full bg-white
text-primary-700 px-6 py-3 text-lg font-bold` with a 20 px phone glyph, `hover:bg-primary-50`.

The mobile bar (`lg:hidden`, fixed bottom, `z-40`, white, `p-3`, `1px #d2d6e6` top border) holds **one**
`rounded-full bg-primary-600 py-3 text-base font-bold text-white` pill with the glyph and the string
`Water running with everything off? · (555) 130-1300`. It sits **under** the cookie strip (`z-50`).

### Six signs (`#process`)

`.section` on white. Header block `max-w-2xl`: eyebrow `What you are seeing`, `mt-3 text-3xl
font-bold tracking-tight sm:text-4xl` `h2`, `mt-4 text-lg text-ink-500` lede. Then
`<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">` — **24 px gaps at `sm`**, one column below.

Each `<li>`: a flex row `flex items-baseline gap-3` holding `span.text-sm font-bold tabular-nums
text-primary-600` (`01`…`06` — this is the only place JetBrains Mono appears above the fold) and
`span.h-px flex-1 bg-ink-100` (the hairline that runs to the column edge); then `mt-4 text-lg font-bold
text-ink-800` `h3`; `mt-2 text-ink-500` body; `mt-3 text-sm font-semibold text-primary-700` label.
There is **no card, no border, no icon** — the rule and the numeral are the whole design.

Copy order (keep it; the labels are the argument):

| # | symptom | label |
| --- | --- | --- |
| 01 | The bill jumped with no change in habits | Strong sign |
| 02 | A warm patch on the floor | Usually a hot line |
| 03 | Running water with everything off | Check the meter |
| 04 | Damp carpet or a buckling floor | Photograph it now |
| 05 | A pool that keeps dropping | Do the bucket test |
| 06 | Nothing visible at all | Still findable |

### Why-us (`#why-us`) — the four instruments

`bg-ink-50 .section`, `grid items-center gap-12 lg:grid-cols-2 lg:gap-16`. The `<figure>` is
`order-last lg:order-first` — on a phone the copy comes first, on desktop the drawing does. Inside:
`img.w-full rounded-2xl object-cover` (the 1,599 B `locate-panel.svg`, 800×600) plus
`figcaption.mt-3 text-sm text-ink-400` telling you to replace it with a photograph.

Right column: eyebrow `How it works` → `h2 Four instruments, and none of them is a jackhammer` →
lede `The order matters. Each step narrows the area so the next one has less ground to cover.` →
`<dl class="mt-8 space-y-6">` of four rows, each `div.border-l-2.border-primary-600.pl-5` with
`dt.text-base font-bold text-ink-800` and `dd.mt-1 text-ink-500`:
`Isolate and pressure test`, `Acoustic listening`, `Thermal imaging`, `Tracer gas where needed`.

**The figure is redrawn, not copied.** The reference SVG is a slab cross-section: a wide grey band, a
single marked point with a call-out, a depth note and a mono label. Draw it as an inline React SVG with
`role="img"` + an accessible name, using only the tokens above (`ink-100` band, `primary-600` marker,
`ink-400` annotations). Nothing is fetched from the preview at runtime.

### Services grid (`#services`)

`.section` on white. Header block `max-w-2xl`. Then the house hairline grid:
`mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100
sm:grid-cols-2 lg:grid-cols-3` — the `gap-px` over an `ink-100` block **is** the divider; do not draw
borders on the cells. Each cell `flex flex-col bg-white p-6 lg:p-8` with
`h3.text-lg font-bold text-ink-800`, `p.mt-2.flex-1.text-ink-500` (the `flex-1` is what pushes the price
to the bottom, so cells of unequal copy still align), and `p.mt-4 text-sm font-bold text-primary-700`.

| service | price line |
| --- | --- |
| Slab leak location | From $395 |
| Pool leak location | From $445 |
| Irrigation and service line | From $345 |
| Sewer and drainage leaks | From $395 |
| Repair after location | Quoted after location |
| Insurance documentation | Included with location |

Footnote (reference wording, keep it): *Starting prices are sample data for demonstration. Replace with
your own before launch.*

### Areas (`#areas`)

`container` → `grid gap-10 lg:grid-cols-12 lg:gap-16`; heading block `lg:col-span-5`, list
`lg:col-span-7`. Heading `h2 text-3xl font-bold tracking-tight sm:text-4xl` + `mt-4 text-lg
text-ink-500` lede. List `ul.grid.grid-cols-2.gap-x-6.sm:grid-cols-3` with each
`li.border-b.py-2.5.text-base.text-ink-700.border-ink-100` — **two columns on a phone**, three from
`sm`, and the borders are the only structure.

Twelve towns, in order: Louisville, Jeffersontown, St. Matthews, Middletown, Shively, Prospect,
Anchorage, Fern Creek, Okolona, Lyndon, Shelbyville, La Grange. Footnote: *Replace this list with your
own towns. Written as plain text it is the cheapest local search signal a trade site has.*

### Testimonials (`#testimonials`)

`bg-gray-50 py-20 lg:py-28` (**stock grey**, not ink). Centred header in `max-w-3xl`:
`inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700` pill
(`Reviews`), then `h2.text-3xl.font-bold.tracking-tight.text-gray-900.sm:text-4xl`, then
`mt-4 text-lg text-gray-600` lede (`Sample reviews for demonstration…`).

Carousel `relative mt-16`: `overflow-hidden` wrapper → `flex transition-transform duration-500 ease-out`
track → three `flex-shrink-0 px-3` slides whose width the kit sets to
`track.parentElement.offsetWidth / perView` (**405.3 px** at 1440). Card `rounded-2xl bg-white p-8
shadow-soft`, five 20 px `text-primary-400` stars, `mb-6` gap, quote, then the attribution block with a
48 px `rounded-full bg-primary-100 text-primary-600` initials disc and name + town in `gray-600`.

Quotes and attributions (keep verbatim): `Yvonne P.` / St. Matthews, `Grant M.` / Prospect,
`Denise O.` / Fern Creek. Arrows are round, `-left-4`/`-right-4`, labelled
`Previous testimonial`/`Next testimonial`; the kit hides them by inline `display` at 1024 px+ because
three slides make one page — so **at desktop this band is a static three-up row**.

### FAQ (`#faq`)

White, `py-20 lg:py-28`. Centred header `max-w-3xl` with the same pill/`h2`/lede pattern (`Questions`,
`Before you book`). Then `mx-auto mt-16 max-w-3xl` → `divide-y divide-gray-200` list.

Each row is `div.py-6` (with `data-animate` + delay) containing a full-width `button[data-faq-toggle]`
laid out as question + `[data-faq-icon]` disc: **32 px**, `rounded-full bg-gray-100 text-gray-600`
(`#f3f4f6` / `#4b5563`), 16 px glyph, `transition-transform` to `rotate(45deg)` when open. The panel is a
`max-height:0; overflow:hidden; opacity:0` div, expanded to `scrollHeight` by the kit. **Exclusive** —
opening one closes the others.

### Closing band (`#contact`)

`bg-primary-700 py-20 lg:py-28` — measured **112 px** pad, flat `#0e6b90`, **no gradient, no dot grid,
no image**. Centred `h2.text-3xl.font-bold.sm:text-4xl.text-white` (36 px), `mt-4 text-lg
text-primary-100` lede, then a `mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center` pair:
`rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700` and
`rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white` with a phone glyph.

### Footer

`bg-gray-900 pt-16 text-gray-300 lg:pt-24` (**96 px** measured). `grid gap-12 lg:grid-cols-12 lg:gap-8`:

* brand `lg:col-span-4` — `logo-light.svg` at `h-10` (40 px), `mt-4 max-w-xs text-gray-400` blurb,
  `mt-6 flex gap-4` of three `rounded-lg bg-gray-800 p-2.5 text-gray-400` **40 px** tiles
  (`hover:bg-gray-700 hover:text-white`, `aria-label` Twitter / Instagram / LinkedIn), then the three
  contact lines (address, phone, mail).
* a **nested** `sm:grid-cols-3 lg:col-span-5` block holding `Services`, `Company`, `Support`
  (14 px uppercase `tracking-wider` white heads, 14 px `#9ca3af` links).
* `lg:col-span-3` — `Stay Updated`, a `text-gray-400` line, then `input` on `#1f2937` with a `#374151`
  border, 8 px radius, **46 px** tall + a `Subscribe` button.

Bottom bar `border-t border-gray-800`: `© 2026`, then `Privacy Policy` / `Terms of Service` — **and the
house `Component Dock` link to `https://www.componentdock.com/`**, which the reference does not have.

## Source → React adaptation table

| reference | Aquifer component |
| --- | --- |
| `header[data-header]` + `[data-mobile-menu]` | `SiteHeader` + `MobileMenu` (one `useState` for open, `aria-expanded`) |
| hero `<section>` + `.rounded-2xl` card | `Hero` + `BookingCard` |
| `[data-form]` (inert) | `BookingCard` with local validation + house toast |
| `#emergency` | `EmergencyBand` (ping dot as a `motion-safe:animate-ping` span) |
| `[data-sticky-call]` | `StickyCallBar` (`lg:hidden`) |
| `#process` `<ol>` | `SignsList` (data array of six `{ n, title, body, label }`) |
| `#why-us` figure + `<dl>` | `InstrumentsBand` + `LocatePanel` (inline SVG) |
| `#services` hairline grid | `ServicesGrid` (data array of six `{ title, body, price }`) |
| `#areas` | `AreasBand` (towns array of twelve) |
| `#testimonials` `[data-carousel]` | `Testimonials` (index state, 5 s interval, 3/2/1 per view) |
| `#faq` `[data-faq-toggle]` | `Faq` (single `openIndex`, `aria-expanded`/`aria-controls`) |
| `#contact` | `ClosingBand` |
| `footer` + `[data-newsletter-form]` | `SiteFooter` + wired newsletter |
| `#cookie-consent` | `CookieStrip` (`useState`, `role="dialog"`, `z-50`) |
| `#scroll-progress` / `#back-to-top` | `useScrollProgress` hook + `BackToTop` |
| — (dropped) | preloader, dark toggle, `applyTheme` — not mounted at all |

## Sibling comparison (same generated-template family, different designs)

Same house kit hash (`e26cc055…`) as **Plantroom** (Curbline), **Veranda** (Commons), **Stoke**
(Coldsnap) and **Closeknit** (Circles), so the *behaviour* inventory transfers exactly — reveal, header
shadow, mobile disclosure, scroll-spy, carousel maths, exclusive FAQ, cookie strip, back-to-top,
progress bar, toast. What does **not** transfer:

| | Dowser → Aquifer | Curbline → Plantroom |
| --- | --- | --- |
| brand | cyan `#0886b2` | blue `#1963b4` |
| sans | **Space Grotesk** | Inter |
| neutral | blue-grey `ink` (#f5f6fa…) | warm-neutral `ink` (#f5f6f7…) |
| hero | 7/5 split **with** a three-field booking card | 7/5 split with a three-field survey card |
| fixed mobile bar | **yes** (`lg:hidden` call bar) | **no** |
| band count | 9 + licence strip | 7 + licence strip, no licence-adjacent strip |
| illustration | one 1,599 B located-slab SVG | one 2,429 B asset-register SVG |
| tiers/prices | 6 services with `From $…` lines | 3 SLA tiers + 6 inclusions |
| nav | six **routes**, no in-page target | six routes + one in-page (`#response`) |

Copy the *mechanics*, never the tokens or the copy.

## Traps (measured, in the order they bite)

1. **`data-nav-link` holds route paths, not band ids.** `data-nav-link="/how-we-find-it"` etc. — so a
   literal port of the spy marks **nothing**. Map labels to bands first (Requirement 15), then spy.
2. **The last two bottom-fixed layers overlap.** On a phone, `[data-sticky-call]` (`z-40`) and
   `#cookie-consent` (`z-50`) both own the bottom edge. Port the stacking order or the call bar becomes
   unclickable for the first 1.5 s.
3. **The carousel disappears into a static row at desktop.** Three slides at three-per-view = one page,
   so the kit writes `display:none` on both arrows and generates zero dots. Do not "fix" it by adding
   arrows at `lg` — that is the reference.
4. **The services grid's divider is the gap.** `gap-px` over `bg-ink-100` with `overflow-hidden
   rounded-2xl`. Give the cells a border instead and you get doubled 2 px rules at every seam.
5. **`flex-1` on the service blurb is load-bearing.** It pushes every price line to the same baseline;
   remove it and a two-line cell misaligns its neighbours.
6. **JetBrains Mono is 500/700 only** on this page (no 400). Loading 400 renders the `01`–`06` numerals
   lighter than the reference — that is the only place the mono face appears above the fold.
7. **`#service-areas` does not exist.** The header location pill and its mobile twin point at it; the
   band is `areas`. Two broken anchors, not a missing band.
8. **The JSON-LD block is corrupt in the reference** (`"@context":"https://***@type"` — a slider
   rewrote `schema.org`). Copying it would ship broken structured data; write the app's own or omit.
9. **`og:image=/og-image.jpg` is a 404.** Same defect as the Curbline build: generate one for the app or
   drop the tag.
10. **Both forms are inert** (`data-form`, `data-newsletter-form`, and no `data-validate` anywhere), so
    a submit navigates to `/#`. Wire them locally; do not assume any reference behaviour to copy.
11. **`primary-300/800/900` exist only inside `dark:` rules** (#67e0f9 / #155875 / #164a63). Do not use
    them on the light page — the light ramp stops at 700.
12. **The star colour changes between bands.** Hero and licence strip use `amber-400`; testimonials use
    `primary-400` (#22c8ee). Painting the testimonials amber is the single most common sibling-port
    error in this family.
