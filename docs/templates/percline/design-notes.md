# Percline — Design Notes

Implementation notes for `apps/percline`, which recreates the ColorLib "Fieldline" design
(https://colorlib.com/wp/template/fieldline/, preview https://preview.colorlib.com/theme/fieldline/).

The full contract is `openspec/specs/template-percline/spec.md`. This file is the working sheet: document
order, a paste-ready token block, section-by-section geometry, the component map, and the traps that cost
time if you find them the hard way.

## Reference set (all read 2026-10-25, `curl -4`)

| file | bytes | what it gives you |
| --- | ---: | --- |
| `theme/fieldline/` | 70,376 | **DOM authority** — section order, every string, every class, the seven timeline rows |
| `_astro/Base.v6AZTsRx.css` | 56,139 | **token authority** — Tailwind 4.3.3 output; the ramps below are grepped from it |
| `_astro/Base…BLoalVWc.js` | 16,233 | house kit (reveal, header, disclosure, scroll-spy, carousel, FAQ, cookie, back-to-top, toast) — **byte-identical to the Aquifer / Plantroom / Veranda / Stoke / Closeknit / Kettle / Smallpaw reads** |
| `_astro/ClientRouter…CYDbzu1r.js` | 16,357 | view-transition router; not needed in a single-page SPA |
| inline `<style>` | 5,408 | `@font-face` for **DM Sans 400/500/700** + **JetBrains Mono 500/700** (18 `woff2` from `/cf-fonts/v/…`) — the reason grepping the sheet for `@font-face` finds nothing |
| inline `<script>` (preloader removal) | 370 | removes `#preloader` 300 ms after `load` |
| inline `<script>` (JSON-LD) | 325 | **corrupt** (`"@context":"https://***@type"`) — do not copy |
| `assets/img/field-panel.svg` | 2,234 | 800×600 diagram, the only illustration — **redraw, do not copy** |
| `assets/img/logo.svg` / `logo-light.svg` | 829 / 829 | wordmark (dark ink square + three green strokes + mono sub-label) — redraw |
| catalog screenshot `fieldline-template.jpg` | 113,977 | 2400×1892 AVIF (`.jpg` name), macOS Safari frame; **not** `fieldline.jpg` (404) |

Everything below the third timeline row is DOM-only. `css/style.css`, `js/snippet.js`,
`downloads/free/fieldline.zip` and `og-image.jpg` are **404** — there is no archive twin to compare
against.

## Document order

```
#preloader                     fixed inset-0 z-100 bg-white, 40px animate-spin ring, removed 300ms after load
skip link                      sr-only focus:not-sr-only → #main-content
#scroll-progress               fixed top-0 left-0 z-60 h-0.5 bg-primary-600, width = scroll ratio
div[data-licence-bar]          h-9 bg-ink-800 text-ink-100 text-xs        ← 37px measured
header[data-header]            sticky z-50 h-16 lg:h-20 bg-white/90 backdrop-blur-lg border-b ink-100
div[data-mobile-menu]          xl:hidden panel: six rows + phone + location + full-width CTA
section (hero, no id)          bg-ink-50 py-14 lg:py-20   grid lg:grid-cols-12  copy 7 / card 5
section#timeline               section bg-ink-900 text-white               ← near-black, 1334px tall
section#emergency              bg-primary-600 text-white py-6 lg:py-8      ← 164px, NOT a .section
div[data-sticky-call]          lg:hidden fixed bottom-0 z-40 bg-white p-3   ← 73px at 390
section#services               section bg-white
section#why-us                 section bg-ink-50
section#areas                  section bg-white
section#testimonials           bg-gray-50 py-20 lg:py-28
section#faq                    bg-white py-20 lg:py-28
section#contact                bg-primary-700 py-20 lg:py-28               ← #365a28
footer                         bg-gray-900 pt-16 lg:pt-24 — 12-col: 4 brand / 5 links / 3 newsletter
div#cookie-consent             fixed bottom-0 z-50 role=dialog, slides up 1.5s
button#back-to-top             fixed bottom-6 right-6 z-50, 48px disc primary-600
```

Two grounds are dark (`#191713`, `#111827`) and two are brand green (`#41712f`, `#365a28`). Nothing else
is saturated. That is the whole palette strategy — resist adding a third accent.

## Paste-ready token block (`src/index.css`)

```css
@import "tailwindcss";

@theme {
  /* brand: a grass-green ramp defined by the sheet, not a Tailwind stock ramp */
  --color-primary-50:  #f1f7ee;
  --color-primary-100: #deedd6;   /* pill eyebrows, closing-band lede, timeline callout text */
  --color-primary-200: #bedcaf;   /* in the sheet, unused on this page */
  --color-primary-300: #95c47f;   /* every timeline day label, dark-band eyebrow */
  --color-primary-400: #6ea857;   /* testimonial stars, field panel, callout ring/ground */
  --color-primary-500: #548d3d;   /* input focus border + ring, focus rings */
  --color-primary-600: #41712f;   /* brand */
  --color-primary-700: #365a28;   /* eyebrows, prices, hover, closing band */
  --color-primary-800: #2e4a24;   /* dark mode only */
  --color-primary-900: #283e21;   /* dark mode only */

  /* warm stone ink ramp — this is what keeps the green from reading "municipal" */
  --color-ink-50:  #f7f6f4;
  --color-ink-100: #edebe6;
  --color-ink-200: #dcd8cf;
  --color-ink-300: #b9b2a4;       /* placeholder colour only */
  --color-ink-400: #8d8574;
  --color-ink-500: #6b6454;
  --color-ink-600: #514c3f;
  --color-ink-700: #3d3931;
  --color-ink-800: #282520;
  --color-ink-900: #191713;

  --font-sans: "DM Sans", system-ui, sans-serif;
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
    box-shadow: 0 10px 15px -3px #41712f40, 0 4px 6px -4px #41712f40; }
  .btn-primary:hover { background-color: var(--color-primary-700);
    box-shadow: 0 20px 25px -5px #41712f4d, 0 8px 10px -6px #41712f4d; }

  .nav-active { color: var(--color-ink-800); font-weight: 600; }
}
```

Tailwind 4 compiles `gray` from the default palette — the footer (`bg-gray-900`, `text-gray-300`,
`bg-gray-800` tiles), the testimonial ground (`bg-gray-50`) and the FAQ rules (`divide-gray-200`,
`bg-gray-100` discs) use **stock** grey, while the hero, the timeline band, every card border and the
areas rules use **ink**. Keep the split; it is in the reference.

Load the two faces in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap">
```

Both URLs return **200**. DM Sans ships **only 400/500/700** on this page — do not add 600 or 800.
JetBrains Mono ships **500/700**.

## Section-by-section fidelity notes

### Licence strip (`div[data-licence-bar]`)

36 px box, **37 px measured** with the 1 px bottom border, `bg-ink-800` `#282520`, `text-ink-100`
`#edebe6`, 12 px. Left `<ul>`: `Licence` (70 % opacity) + **`KDHE #00000`** semibold; then
`Certified septic inspector` and `Serving` + **`Sedgwick County`**, both `hidden sm:flex`. Right: an
`amber-400` 14 px star, `4.9` medium, `240+ reviews on Google (sample)`. Replace the licence number and
county with invented sample values — it is a real state agency abbreviation, so do not ship `KDHE` in the
app.

### Header (`header[data-header]`)

`sticky top-0 z-50`, `h-16 lg:h-20` (**65 / 81 px measured**), `bg-white/90 backdrop-blur-lg`,
`border-b border-ink-100`. Wordmark 150×32 (`h-8 lg:h-9`) then six `text-sm font-semibold text-ink-600`
links from **`xl`** (not `lg` — the reference's own comment explains that a six-item trade nav plus pills
does not fit at 1,024), `gap-7`. Then: location pill (`hidden 2xl:block`, `rounded-full border-ink-200
px-3 py-1.5 text-sm font-medium` with a 16 px pin), phone pill (`hidden md:block`, same shape but
`font-semibold` and `text-ink-800`), dark toggle, then the CTA `hidden xl:inline-flex rounded-lg
bg-primary-600 px-5 py-2.5 text-sm font-bold`. Hamburger `xl:hidden`. Past 50 px gained `shadow-lg`.

Mobile panel: `hidden xl:hidden` → six `block py-3 text-base font-semibold text-ink-800` rows, then a
`flex flex-wrap gap-2 border-t border-ink-100 pt-4` block with both pills and a full-width
`px-5 py-3 text-sm font-bold` CTA.

### Hero (`section` — no id)

`bg-ink-50` `#f7f6f4`, container `py-14 lg:py-20` (56 / **80**), `grid items-start gap-10 lg:grid-cols-12
lg:gap-16`, copy `lg:col-span-7 lg:pt-6`, card `lg:col-span-5`. Measured 805 px tall at 1440.

* eyebrow `text-sm font-bold uppercase tracking-wide text-primary-700` — `Wichita · KDHE licensed`
  (14 px / 0.35 px tracking / `#365a28`)
* `h1 mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink-800` —
  measured **60 / 66 / −1.5 px**, 683 px wide. The span `text-primary-600` holds the second sentence and
  wraps onto two lines by itself; **no gradient, no highlight**.
* lede `mt-5 max-w-xl text-lg text-ink-500` — 18 / 28, `#6b6454`
* rating row `mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600`: five
  `h-4 w-4 text-amber-400` stars in an `aria-hidden` span, `4.9` bold, then `240+ reviews on Google ·
  sample data` at `opacity-80`
* checklist `mt-8 grid gap-3 sm:grid-cols-2`: four `li` of `flex gap-2.5 text-base font-medium
  text-ink-700` with an `mt-1 h-4 w-4 shrink-0 text-primary-600` check path (`stroke-width 2.5`)

### Quote card (`#quote`)

`rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8` — **469×509** at 1440 (32 px padding),
**358×525** at 390 (24 px padding), 16 px radius.

* `h2 text-xl font-bold text-ink-800 lg:text-2xl` — **24 px at 1440**, 20 px at 390
* `p mt-2 text-sm text-ink-500` — `Three fields. We reply within the hour on weekdays.`
* `form.space-y-4.mt-6`:
  * `Your name` → `input[type=text]` `rounded-lg border-ink-200 px-4 py-3 text-base placeholder:text-ink-300`
  * `Phone` → `input[type=tel]`, placeholder `(555) 000-0000`
  * `What do you need?` → `select` with a `value=""` placeholder option `Choose the closest match` and the
    six options in the spec's order (Inspection for a sale → Buying a house with septic)
  * submit `w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base font-bold text-white
    hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2` — `Book the inspection`
  * footnote `text-center text-xs text-ink-400`
* every field's focus state is `focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20`

### Timeline band (`#timeline`)

`section bg-ink-900 text-white`, **1,334 px** tall at 1440, `max-w-2xl` header block, `<ol class="mt-12
space-y-0">`.

Each `<li>`: `grid gap-3 border-l-2 border-white/15 pb-8 pl-6 last:pb-0 sm:grid-cols-12 sm:gap-6`;
left `sm:col-span-3` holds `p.font-mono.text-sm.font-bold.text-primary-300` (the day) and
`p.mt-1.text-xs.font-semibold.uppercase.tracking-wide.text-white/40` (the actor); right
`sm:col-span-9` holds `h3.font-bold.text-white` with a `span.mr-2.font-mono.text-sm.text-white/30` index,
then `p.mt-1.5.text-white/65`.

Callouts (rows 1 and 5 only): `mt-3 rounded-lg border border-primary-400/40 bg-primary-400/10 px-4 py-3
text-sm text-primary-100` with a bold `Where deals slip.` lead-in.

After the list: `mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between` — footnote
`max-w-3xl text-sm text-white/40`, then `a.btn.btn-primary.shrink-0` reading `Book the inspection`.

The seven rows' labels, actors, names, callouts and body copy are tabulated verbatim in the spec
(§The seven timeline rows). **Copy them; do not invent steps** — the seven-row sequence is the design's
whole argument.

### Emergency band (`#emergency` + `[data-sticky-call]`)

`bg-primary-600 text-white`, container `py-6 lg:py-8` (**164 px** measured), `flex flex-col gap-4
lg:flex-row lg:items-center lg:justify-between`.

* eyebrow row `flex items-center gap-2 text-sm font-semibold uppercase tracking-wide opacity-90` starting
  with the ping dot: `span.relative.flex.h-2.w-2` containing an absolute `animate-ping opacity-60` ring and
  a static 8 px dot
* `p.mt-1.text-lg.font-bold.lg:text-xl` — `Same-day pumping when sewage is backing up indoors.`
* `p.mt-2.max-w-2xl.text-sm.opacity-90` — the honest paragraph (pumping is not the repair)
* white pill `rounded-full bg-white px-6 py-3 text-lg font-bold text-primary-700 hover:bg-primary-50` with a
  20 px phone glyph — measured **204×52**

Sticky bar `lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white p-3`, **73 px** at
390, containing one `rounded-full bg-primary-600 py-3 text-base font-bold text-white` full-width link.

### Services grid (`#services`)

`section bg-white`; header block `max-w-2xl` (eyebrow `What we do`, `h2`, lede). Grid
`mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2
lg:grid-cols-3`; each cell `flex flex-col bg-white p-6 lg:p-8` with
`h3.text-lg.font-bold.text-ink-800`, `p.mt-2.flex-1.text-ink-500` and
`p.mt-4.text-sm.font-bold.text-primary-700` (the price). Footnote `mt-6 text-sm text-ink-400`.

Prices in order: `From $425`, `From $375`, `From $295`, `Quoted after evaluation`, `From $240`,
`From $495`.

### Why-us (`#why-us`) — the four causes

`section bg-ink-50`, `grid items-center gap-12 lg:grid-cols-2 lg:gap-16`.
`figure.order-last lg:order-first` holds the redrawn panel `w-full rounded-2xl object-cover` plus
`figcaption.mt-3.text-sm.text-ink-400`. Right: eyebrow `How it works`, `h2`, lede, then
`dl.mt-8.space-y-6` of four `div.border-l-2.border-primary-600.pl-5` pairs (`dt.text-base.font-bold
.text-ink-800`, `dd.mt-1.text-ink-500`).

**The panel to redraw** (2,234 B, 800×600): `#191713` full-bleed ground; an inner `#282520` card at
32/32/736/536, `rx 24`; white 24 px headline `Two parts, one of them expensive`; a `#41712f` 26 px bar
labelled `Lawn` in `#8d8574`; a `#514c3f` tank rect with a `#3d3931` inner, captioned
`Tank` / `separates. Pumped every 3-5 yr.`; a `#6ea857` d-box `62×48` captioned `D-box` / `splits the
flow evenly.`; three `#6ea857` 9 px drain-field strokes captioned `Drain field` / `disposes. Cannot be
pumped.`; a `#3d3931` footer card with `#b9b2a4` body and one `#95c47f` bold line
`Which is why the tank gets pumped, and why pumping a dead field buys a fortnight.` Labels use DM Sans
15/13 px; **do not copy the file** — rebuild the same information as your own SVG with `role="img"` and an
accessible name.

The band's heading says **three** things and lists **four** rows. That is the reference's own
inconsistency; the spec keeps the wording (Deviation 9).

### Areas (`#areas`)

`section bg-white`, `grid gap-10 lg:grid-cols-12 lg:gap-16`; left `lg:col-span-5` (`h2` + lede), right
`lg:col-span-7` with `ul.grid.grid-cols-2.gap-x-6.sm:grid-cols-3`; each `li.border-b.py-2.5.text-base
.text-ink-700.border-ink-100`. Twelve towns, reference order, then `p.mt-6.text-sm.text-ink-500`
replace-me note.

### Testimonials (`#testimonials`)

`bg-gray-50 py-20 lg:py-28`; centred `max-w-3xl` header — pill
`rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700`, `h2 text-gray-900`,
`p text-gray-600`. Carousel `relative mt-16 [data-carousel]` → `overflow-hidden` → `flex
transition-transform duration-500 ease-out [data-carousel-track]` → three `flex-shrink-0 px-3
[data-carousel-slide]`, each wrapping `rounded-2xl bg-white p-8 shadow-soft`.

Card internals: five `h-5 w-5 text-primary-400` stars, `blockquote.text-lg.font-medium.text-gray-900`,
then `mt-6 flex items-center gap-4` with a `h-12 w-12 rounded-full bg-primary-100 text-lg font-semibold
text-primary-600` initials disc and name + town (`text-sm text-gray-600`).

Quotes are sample data **and name the source brand** — rewrite all three for Percline.

### FAQ (`#faq`)

`bg-white py-20 lg:py-28`, `max-w-3xl` centred header (pill `Questions`), then
`mx-auto mt-16 max-w-3xl` → `divide-y divide-gray-200` → five `div.py-6` rows. Each: a full-width
`button.flex.w-full.items-center.justify-between.text-left` with an 18 px semibold question and an
`h-8 w-8 rounded-full bg-gray-100 text-gray-600` plus-disc; the panel below is
`overflow-hidden transition-all duration-300` with inline `max-height: 0; opacity: 0` and a
`p.pt-4.text-gray-600`.

### Closing band (`#contact`)

`bg-primary-700 py-20 lg:py-28` (**452 px**, 112 px padding), centred `max-w-3xl`: white 36 px `h2`,
`mt-5 max-w-xl text-lg text-primary-100` lede, then `mt-10 flex flex-col items-center gap-4 sm:flex-row`:
`rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700 hover:bg-primary-50` and
`rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white hover:border-white
hover:bg-white/10` with a 20 px phone glyph.

### Footer

`bg-gray-900 pt-16 lg:pt-24 text-gray-300`, **592 px** at 1440 (96 px top padding),
`grid gap-12 lg:grid-cols-12 lg:gap-8`.

* brand `lg:col-span-4`: logo-light `h-10`, `mt-4 max-w-xs text-gray-400` blurb, `mt-6 flex gap-4` with
  three `rounded-lg bg-gray-800 p-2.5 text-gray-400 hover:bg-gray-700 hover:text-white` 40 px tiles
  (Twitter / Instagram / LinkedIn), then `mt-6 space-y-2 text-sm text-gray-400` for address, phone, mail
* links `grid gap-8 sm:grid-cols-3 lg:col-span-5` — `Services` (4), `Company` (4), `Support` (3), each
  `h3.text-sm.font-semibold.uppercase.tracking-wider.text-white` over `ul.mt-4.space-y-3`
* newsletter `lg:col-span-3`: `h3 Stay Updated`, `mt-4 text-gray-400` blurb,
  `form.mt-4 [data-newsletter-form]` → `flex gap-2` with
  `min-w-0 flex-1 rounded-lg border-gray-700 bg-gray-800 px-4 py-2.5` input and
  `rounded-lg bg-primary-600 px-4 py-2.5 font-medium` Subscribe
* bottom `mt-16 border-t border-gray-800 py-8 flex flex-col sm:flex-row` — © line in
  `text-sm text-gray-500` and two 14 px `text-gray-500 hover:text-gray-300` links

The recreation's bottom bar carries the **Component Dock** link (`https://www.componentdock.com/`) as the
spec requires.

## Source → React adaptation table

| reference | recreation |
| --- | --- |
| `<a href="/theme/fieldline/services">` × 6 | `href="#services"` on the same band; nav labels map per spec Requirement 15 |
| `<a href="/theme/fieldline/selling">` | `#timeline` (the band IS the selling argument) |
| `<a href="/theme/fieldline/how-septic-works">` | `#why-us` |
| `<a href="/theme/fieldline/service-areas">` **and** the broken `#service-areas` pills | `#areas` — one id, three entry points |
| `<a href="/theme/fieldline/about">` | `#why-us` lede block (no separate band exists) |
| `<a href="/theme/fieldline/contact">` × 7 | `#contact` band, plus the quote card `#quote` |
| `<a href="/theme/fieldline/privacy">`, `/terms` | plain footer links to `#` or omit; no legal pages ship |
| kit `[data-reveal]`, `[data-carousel]`, `[data-faq-toggle]`, `[data-cookie-*]` | React state + one `useEffect` per behaviour (reveal, header shadow, progress, spy, carousel timer, cookie timer, back-to-top) |
| `applyTheme()` + `[data-dark-toggle]` | dropped (Deviation 2) |
| inline `#preloader` script | not mounted; no spinner overlay at all |
| `data-form` / `data-newsletter-form` (inert) | controlled React forms with local validation + toast |

## Sibling comparison (same generated-template family, different designs)

| | Fieldline → **Percline** | Everhot → **Kettle** | Fernhill → **Smallpaw** |
| --- | --- | --- | --- |
| kit hashes | identical | identical | identical |
| ground ramp | warm stone `ink` `#f7f6f4`→`#191713` | warm grey `#f7f7f7`→`#161616` | warm pink + plum |
| brand | green `#41712f` | burnt orange `#ae6211` | plum `#a83a6f` + amber |
| face | **DM Sans** 400/500/700 | Manrope 400–800 + JetBrains Mono | Plus Jakarta Sans |
| dark grounds | 2 (`#191713`, `#111827`) | 2 (`#161616`, `#111827`) | 2 (`#6f284b`, `#111827`) |
| brand bands | 2 (`#41712f`, `#365a28`) | 2 (`#ae6211`, `#8d4e12`) | plum gradient |
| signature band | **7-row contingency timeline with 2 marked slips** | live sizing calculator | fee-guide table |
| photography | none | none | one hero photo |
| page-local JS | none (chrome only) | the sizing tool (3,554 B) | stats counters |

The shared kit makes the *behaviour* list identical across all four; what differs is band order, palette,
face and the one band that carries the argument. Copying a sibling's tokens because the kit hash matches is
the single most expensive mistake available here.

## Traps (measured, in the order they bite)

1. **`xl`, not `lg`, for the nav.** The header's six links, both pills, the toggle and the CTA do not fit
   at 1,024 px; the reference switches the desktop nav on at 1,280 and the location pill at 1,536. If you
   use `lg` the last links render under the phone pill between 1,024 and 1,279.
2. **No page-local tool.** Unlike Kettle there is no calculator, counter or countdown to port. If a build
   starts with a "10-day clock" widget, it was invented.
3. **The `h1` span is a colour, not a gradient.** `text-primary-600` on a plain span. Gradients here are a
   different template's signature.
4. **`Fieldline` appears in body copy.** Two of the three testimonial quotes name the brand, and the footer
   and JSON-LD carry `fieldlineseptic.example`. `grep -ri fieldline apps/percline` must be empty before the
   PR — provenance lives only in the spec and the PR body.
5. **`KDHE` is a real agency.** Ship an invented licence string (`Licence #00000`) so the sample site
   cannot be mistaken for a licensed contractor.
6. **`#service-areas` is a dead fragment** in the reference (the band id is `areas`) — do not reproduce the
   broken link.
7. **The corrupt JSON-LD** (`"@context":"https://***@type"`) and the 404 `og:image` are defects, not
   content. Omit both or write valid replacements.
8. **The `2xl:block` census trap.** `2xl:block` compiles to `.\32 xl\:block`; a naive `.token{` grep
   reports it as missing. It is not.
9. **`.section` is 80 px, not 112, below `lg`** — the hero is not a `.section` at all (`py-14 lg:py-20`),
   and the emergency band is a thin `py-6 lg:py-8` strip. Three different vertical rhythms; do not unify
   them.
10. **`primary-800`/`900` exist but are dark-only.** Using `#2e4a24` on a light ground makes the eyebrows
    unreadable; the light eyebrow is `#365a28`.
11. **Both forms are inert in the reference.** A submit navigates to `/#` with no validation — the
    recreation must wire them (spec Requirement 5), and must not call a backend.
12. **Arrows are bounds-driven here.** The kit hides an arrow when there is nothing to scroll to
    (`display:none`), unlike Everhot's `hidden lg:flex`. At desktop with three slides and three visible,
    neither arrow shows.
13. **The why-us heading says three, the list has four.** Keep the wording (spec Deviation 9) or record the
    copy change in the PR.
14. **`ink-300` is only a placeholder colour.** It exists in the sheet and appears exactly once
    (`placeholder:text-ink-300`); it is not a body or border colour.
