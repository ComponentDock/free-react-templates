# Template: Aquifer (Business — leak-detection specialist selling a location visit before any excavation)

## Purpose

A one-page site for a **leak-detection company whose product is knowing where to dig**. The page is
built as a single argument in the order a worried homeowner reads it: the hero says the expensive part
out loud (*a slab leak is not expensive because of the pipe — it is expensive because of what gets
opened looking for it*) beside a **three-field booking card**; a flat teal band converts the emergency
case (*water running with everything off?*) into one phone call; six numbered symptom cards tell the
reader what each sign usually means; a two-column band explains the **four instruments, in the order
they are used** around a diagram of a floor marked once instead of opened six times; a six-cell hairline
grid prices the six services (`From $395` … `Included with location`); a twelve-town list keeps the
service radius honest; three reviews, five booking questions, and a deep-teal closing band close it out.
There is **no photography anywhere** — the only illustration is a 1,599-byte SVG "located slab" panel —
and the palette is a single cyan ramp on a blue-grey neutral ramp, typeset in **Space Grotesk** with
**JetBrains Mono** reserved for numbers and machine labels.

Recreation of the ColorLib **"Dowser"** design (https://colorlib.com/wp/template/dowser/, live preview
https://preview.colorlib.com/theme/dowser/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `dowser`
* **ColorLib page:** https://colorlib.com/wp/template/dowser/ — HTTP 200, 111,366 B,
  `<title>` **"Dowser - Leak Detection Website Template 2026 - Colorlib"**; its
  `<meta name="description">` sells the same idea (*"Dowser sells location before excavation: four
  instruments in order, one mark on the floor, and the report an insurer will accept"*)
* **Live preview:** https://preview.colorlib.com/theme/dowser/ — HTTP 200, 70,377 B, page
  `<title>` **"Leak detection in Louisville, located before anything is opened | Dowser Leak
  Detection"** (read 2026-10-25 with `curl -4`; this host resolves an IPv6 address that is banned, so
  every fetch needs `-4`, and a browser needs no special host rule — Playwright reached it directly)
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dowser-template.jpg — served as
  **AVIF** despite the `.jpg` extension, 118,083 B, **2400×1892**, a macOS-Safari-window-framed capture
  of the licence strip, the header, the whole hero, the teal emergency band and the first row of the
  six-signs band (convert with PIL before vision — `Image.open('shot.jpg').save('shot.png')`)
* **New name:** `aquifer` (apps/aquifer, `@free-react-templates/aquifer`) — one lowercase word, the
  underground water body the whole trade is about; the promised *"one mark on the floor"* is a claim
  about what is under it. Differs from the source slug; `git grep -il aquifer origin/main` prints
  **nothing**; no `apps/aquifer`, no `openspec/specs/template-aquifer/`, no `docs/templates/aquifer/`;
  and the three ColorLib URL forms (`wp/template/aquifer/`, `theme/aquifer/`,
  `theme/bootstrap/aquifer/`) all return **404** (probed 2026-10-25)
* **Deploy target:** https://aquifer.free.componentdock.com (`apps/aquifer/public/CNAME`, `homepage`
  in `apps/aquifer/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: `## Business (366)` (line 880), the commercial-services section that already holds
  the sibling catalogue-gap preps of this same 2026 generation (`airwise` → **Thermly**, `curbline` →
  **Plantroom**, `backstop` → **Flowcert**, `commons` → **Veranda**, `circles` → **Closeknit**).
  ⚠️ **The Business heading is already off by one**: on `main` `a6da63d45` it reads `(366)` over
  **367** rows, because Thermly's row was added without bumping the parenthetical. Adding Dowser makes
  **368** rows — write `(368)`, measured. **But re-measure before you write it**: if Plantroom's row
  has landed in the meantime the honest value is `(369)`. Count the rows, do not copy this number.

### Why this design has no row (catalogue gap, measured 2026-10-24)

`TEMPLATES.md` is exhausted — 0 `- [ ]`, 2,860 `[x]`, every row resolving to an app and a spec — but
the **catalogue is not complete**: all 40 pages of https://colorlib.com/wp/templates/ were crawled and
compared with the 1,631 slugs the checklist cites, and **256 designs are on the listing that the
checklist never recorded** (42 standalone + 214 snippet variants). The census, its commands, the open
decision and both buckets are recorded in `docs/catalog-coverage.md`.

`dowser` is one of the 42 standalone designs (a row of that table: `dowser` — preview 200, 70,377 B).
Five of the 42 were prepped before this run — `airwise` → **Thermly** (shipped), `backstop` →
**Flowcert**, `circles` → **Closeknit**, `coldsnap` → **Stoke**, `commons` → **Veranda** — plus
`curbline` → **Plantroom** in the immediately preceding prep run; they established the hand-off
pattern this spec follows. No spec on main names `theme/dowser` (`grep -rl 'theme/dowser/'
openspec/specs` → nothing) and no app named `dowser` exists, so this prep is not a duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR claims a row — paste this
line into `## Business` **in source-name alphabetical order** (the section is ordered by the ColorLib
source name, so `Dowser` sits between the `Domain…`/`D…` rows and the next `E…` row), and change the
heading to the re-measured count described above:

```
- [~] **Dowser** — [colorlib](https://colorlib.com/wp/template/dowser/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/dowser-template.jpg) · [aquifer](https://aquifer.free.componentdock.com)
```

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/dowser/` page (DOM authority) | 70,377 | `14320426d699569745a72b6c45ec5fc395213fc9f726dead0242b5ce82601a66` |
| `theme/dowser/_astro/Base.DWnf_ikV.css` (token authority) | 54,751 | `0c734ab61b581a14abd614db176155e707c912318e1bb2f3f5b553e2fec3ebcd` |
| `theme/dowser/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` (house kit) | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `theme/dowser/_astro/ClientRouter…CYDbzu1r.js` (view-transition router) | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` |
| inline `<style>` (`@font-face` for **Space Grotesk** 400/500/600/700 + **JetBrains Mono** 500/700) | 7,444 | — |
| inline `<script>`: `applyTheme()` + preloader removal + JSON-LD `Plumber` | — | — |
| `assets/img/logo.svg` (180×36 rendered) | 790 | `9713bc067aae78e7ef47bf92b24f63b956c8bfde49036ca20f3d8ec450a87a4f` |
| `assets/img/logo-light.svg` | 790 | `9640db76735aaa3e0274183263e4b386a815dd0f9f938e780f6d4f530f559813` |
| `assets/img/locate-panel.svg` (the only illustration, 800×600) | 1,599 | `916e7fd243c5673e87197edc464d63512f975af47d4af96c2fab279ba1775f6c` |
| `favicon.svg` | 387 | `bd0095ccb3f684702f482bf914cbf589745c94bc14698135d272649496ed58bb` |
| catalog screenshot `dowser-template.jpg` | 118,083 | `9fb217a1a6260ca767060ef00e13edf9203d509ba90e72cf0801eea89ff85379` (real **AVIF**, 2400×1892) |
| `colorlib.com/wp/template/dowser/` (catalog entry) | 111,366 | `36e0efb130ddaf243d13f28f9acfebcf13d17471abb35503ce9b1df84886bb5d` |
| `css/style.css`, `js/snippet.js`, `downloads/free/dowser.zip`, `og-image.jpg` | — | **HTTP 404** — Astro build, so the live preview is the sole DOM/CSS reference and the OG image it advertises (`og:image=/og-image.jpg`) does not exist |

The preview is an **Astro build with Tailwind 4 output** (sheet header: `tailwindcss v4.3.3`): one
stylesheet, one kit script, one client router. **Both `_astro` scripts are byte-identical to the ones
the Plantroom (Curbline), Veranda (Commons), Stoke (Coldsnap) and Closeknit (Circles) preps measured** —
the same house kit renders every one of these 2026 designs, so the *behaviour* inventory transfers while
the markup, palette and band order do not. Do not copy a sibling's tokens because the kit hash matches:
Dowser is **cyan on blue-grey in Space Grotesk**, not Curbline's blue Inter.

The catalog entry's `meta description` agrees with the live page's positioning, but its prose is
different. The **live preview is the authority**; where the two disagree, the DOM wins.

## Design tokens (measured from `_astro/Base.DWnf_ikV.css`, 54,751 B, and the live render at 1440 px)

### Brand ramp — `primary` (a cyan/teal, not a Tailwind stock ramp)

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#ecfdff` | `hover:bg-primary-50` on the emergency band's white pill |
| `primary-100` | `#cff8fe` | **the testimonial / FAQ eyebrow pills** (`bg-primary-100`), the closing band's lede text, the initials discs |
| `primary-200` | `#a5effc` | available in the sheet (border tint), unused on this page |
| `primary-300` | `#67e0f9` | **dark mode only** (`dark:text-primary-300`) — record it, do not paint it |
| `primary-400` | `#22c8ee` | **the five testimonial stars** (`text-primary-400`), `dark:` accent text |
| `primary-500` | `#06a8d4` | input focus border + ring (`focus:border-primary-500`, `ring-primary-500/20`) |
| `primary-600` | `#0886b2` | **brand** — every solid button, the `h1` span, the six-sign numerals, the scroll-progress bar, the teal emergency band, the checklist ticks, the why-us `border-l-2`, the preloader arc, back-to-top, the mobile call bar |
| `primary-700` | `#0e6b90` | **every eyebrow on a light ground**, service prices, FAQ/why-us `text-primary-700`, `.btn-primary:hover`, the **closing band ground**, the emergency pill's label |
| `primary-800` | `#155875` | **dark mode only** (`dark:border-primary-800`) |
| `primary-900` | `#164a63` | **dark mode only** (`dark:bg-primary-900/50` on the pills) |

### Neutral ramp — `ink` (the blue-grey the sheet defines itself; this is what keeps the cyan from reading "SaaS")

| token | hex | where |
| --- | --- | --- |
| `ink-50` | `#f5f6fa` | **hero ground** (measured `rgb(245,246,250)`), `#why-us` ground |
| `ink-100` | `#e9ebf3` | every card border, header border, the hairline grid's gutter, the six-signs rule, area row borders, the sticky bar's border |
| `ink-200` | `#d2d6e6` | **input borders**, the sticky call bar's border |
| `ink-300` | `#a9b0cc` | input placeholders (`placeholder:text-ink-300`) |
| `ink-400` | `#7a84a8` | form footnote, `figcaption` |
| `ink-500` | `#59628a` | **body copy on light grounds** (measured `rgb(89,98,138)`), card blurbs |
| `ink-600` | `#414970` | header nav links, the hero rating line |
| `ink-700` | `#323858` | checklist text, form labels, area town labels |
| `ink-800` | `#20243a` | **`h1`/`h2`/`h3` on light grounds** (measured `rgb(32,36,58)`), the licence strip's ground |
| `ink-900` | `#141726` | available in the sheet; this page's dark grounds come from the kit's `bg-ink-900` on the why-us panel instead |

### Chrome grey, status colours, grounds

| token | value | where |
| --- | --- | --- |
| `gray-50` | `#f9fafb` | **`#testimonials` ground**, `.btn-secondary:hover` |
| `gray-100` | `#f3f4f6` | FAQ icon discs (`bg-gray-100`) |
| `gray-200` | `#e5e7eb` | FAQ `divide-y` rule, the sticky call bar's border, preloader ring |
| `gray-300` | `#d1d5db` | cookie `Decline` border, inactive carousel dots |
| `gray-400` | `#9ca3af` | footer body copy, footer link default, social glyphs |
| `gray-500` | `#6b7280` | footer legal text, FAQ icon glyph |
| `gray-600` | `#4b5563` | testimonial town lines, cookie copy, carousel arrows |
| `gray-700` | `#374151` | footer input border, dark-mode grounds |
| `gray-800` | `#1f2937` | footer social tiles + footer input ground |
| `gray-900` | `#111827` | **footer ground** (measured `rgb(17,24,39)`), `body` colour, testimonial/FAQ headings |
| `amber-400` | `oklch(82.8% .189 84.429)` = `#fbbf24` | the five hero rating stars **and** the licence strip's star (measured `oklch(0.828 0.189 84.429)`) |
| white | `#fff` | hero card, `#process`/`#services`/`#areas`/`#faq` grounds, the closing band's solid button |

**Note the mixed house kit vs page palette:** the footer, the testimonial ground and the FAQ rules use
stock Tailwind `gray`, while the hero, the emergency band, the why-us panel and every card border use
`ink`. That split is in the reference (dark chrome recedes, blue-greys carry content) — keep both
ramps, do not "normalise" one into the other.

### Typography

Two faces, both delivered from the preview's own `/cf-fonts/v/…` cache inside the 7,444-byte inline
`<style>` (which is why grepping the sheet for `@font-face` finds nothing):

* **Space Grotesk** — the whole page. `body` sets `font-family: "Space Grotesk", system-ui, sans-serif`
  (measured). Weights in use: **400, 500, 600, 700**.
* **JetBrains Mono** — reserved for numerals and machine-ish labels: the six-sign `01`…`06` markers
  (`tabular-nums`), the licence strip's `KY MP #00000`, the locate panel's mono label. `font-family:
  JetBrains Mono, Consolas, monospace`. Weights present: **500, 700**.

| role | measured | notes |
| --- | --- | --- |
| `h1` | `text-4xl` 36 → `sm:text-5xl` 48 → `lg:text-6xl` **60 px** (measured at 1440), `font-bold`, `leading-[1.1]` (66 px), `tracking-tight` (**−1.5 px**), `text-ink-800` | two sentences; the second (`Then open one hole, not six.`) is a `<span class="text-primary-600">` — **not** a gradient |
| `h2` | 30 px `text-3xl` → `sm:text-4xl` 36 px, `font-bold`, `tracking-tight` | every band heading; the booking card's heading is `text-xl lg:text-2xl` (20/24 px) |
| `h3` | 18 px `text-lg font-bold`, `text-ink-800` | six signs, six services, footer column heads are 14 px `uppercase tracking-wider` instead |
| lede | 18 px `text-lg` / 28 px line, `text-ink-500` on light grounds, `text-gray-600` in testimonials/FAQ, `text-primary-100` on the closing band | — |
| eyebrow | 14 px `text-sm font-bold uppercase tracking-wide` (0.35 px measured), `text-primary-700` | hero + `#process` + `#why-us` + `#services`; the testimonial/FAQ eyebrows are pills instead (`rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700`) |
| mono numerals | **JetBrains Mono** 14 px / 700, `tabular-nums`, `text-primary-600` | `01`–`06` only |
| badges | 14 px `text-sm font-semibold text-primary-700` | six-sign labels (`Strong sign`, `Usually a hot line`, …) and service prices |

Load them with two `<link>`s in `index.html` (both `css2` URLs return 200 with a browser UA):

```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap
https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap
```

### Buttons, radii, shadows

| token | value | where |
| --- | --- | --- |
| `.btn` (kit) | `inline-flex`, centre, `gap:8px`, `border-radius:.5rem` (8 px), `padding:10px 20px`, `font-size:14px`, `font-weight:500`, `transition:all` | `See how it works` in the why-us band |
| `.btn-primary` | `background:#0886b2`, white, `shadow-lg` tinted `#0886b240`; hover `#0e6b90` + `shadow-xl` | ditto |
| `.btn-secondary` | white ground, `1px #d1d5db` border, label `#374151`, `hover:bg-gray-50` — **defined in the sheet but unused on this page** | — |
| header CTA | `rounded-lg px-5 py-2.5` (20/10 px), 14 px `font-bold`, `bg-primary-600`, hover `primary-700` | `Book a leak location` |
| hero/form CTA | `rounded-lg px-6 py-3.5` (24/14 px), 16 px `font-bold`; full width inside the card | `Book the location` |
| emergency pill | `rounded-full px-6 py-3`, 18 px `font-bold`, **white ground, `text-primary-700`**, hover `primary-50`; leading phone glyph 20 px | `(555) 130-1300` |
| closing CTA pair | `rounded-lg px-8 py-4` (32/16 px), 16 px `font-bold`; solid white with `text-primary-700`, ghost `border-2 border-white/40` | `Book a leak location` / `Call (555) 130-1300` |
| radii | `lg` .5 rem (8) · `xl` .75 rem (12) · `2xl` 1 rem (16) · `full` | `lg` = buttons/inputs, `2xl` = the booking card, service grid, figure, testimonial cards, `full` = pills, dots, the 32 px FAQ discs, the mobile call pill |
| `shadow-soft` | `0 4px 16px -4px #0000001a` | testimonial cards |
| `shadow-md` | stock Tailwind | **booking card** (`0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a`) |
| `shadow-lg` / `shadow-xl` | stock Tailwind; header gains `shadow-lg` past 50 px | header, back-to-top (tinted `shadow-primary-600/25`), carousel arrows, cookie strip |
| `.section` | `padding-block` **80 px → 112 px at ≥64rem** (measured 112 px at 1440) | `#process`, `#why-us`, `#services`, `#areas`; `#testimonials`, `#faq`, `#contact` use `py-20 lg:py-28` instead (same 80/112) |
| keyframes present | `hero-float`, `shimmer`, `ping`, `spin` | only **`ping`** (the emergency dot) and **`spin`** (preloader) are reachable from this DOM; there is **no** float, blob, typewriter or counter on this page |

### Rhythm and containers

* Hero: `py-14` (56 px) → `lg:py-20` (**80 px measured at 1440**), `bg-ink-50`, no border.
* Licence strip: `h-9` (36 px box) — **measured 37 px including the 1 px border**, `bg-ink-800`,
  `text-ink-100`, `text-xs`.
* Header: `h-16` (64) → `lg:h-20` (80) — measured **65 / 81 px including the border**; sticky,
  `bg-white/90` + `backdrop-blur-lg`, `border-b border-ink-100`.
* Emergency band: `bg-primary-600`, container `py-6 lg:py-8` (24/32 px) — a thin band, **not** a
  `.section`; measured height 164 px at 1440.
* Containers: `container mx-auto px-4 lg:px-8` everywhere; `max-width` measured **1280 px**, i.e.
  1,216 px of content at 1440. Hero splits `lg:grid-cols-12` with **7 / 5** (`gap-16` = 64 px), the
  booking card measures **469 px** wide; `#why-us` is a plain `lg:grid-cols-2` (figure 576 px);
  `#areas` splits `lg:col-span-5` / `lg:col-span-7`; the two hairline grids are
  `sm:grid-cols-3` (six signs) and `sm:grid-cols-2 lg:grid-cols-3` (services).

## Reference document order (three chrome pieces before the header, ten bands, three after the footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `#preloader` | white (`dark:gray-950`) | fixed `z-[100]`, 40 px `animate-spin` ring `border-4 border-gray-200 border-t-primary-600`; removed 300 ms after `load` |
| — | skip link | — | `sr-only focus:not-sr-only`, targets `#main-content` |
| — | `#scroll-progress` | `primary-600` | `fixed top-0 left-0 z-[60] h-0.5`, width = scroll ratio |
| — | `[data-licence-bar]` | **`bg-ink-800` `#20243a`, `text-ink-100`**, `h-9`, `text-xs` | left: `Licence` / **`KY MP #00000`**, `Acoustic and thermal certified`, `Serving` / **`Jefferson County`** (the middle two hidden below `sm`); right: an `amber-400` star + **`4.9`** + `220+ reviews on Google (sample)` |
| — | `header[data-header]` | `bg-white/90` + `backdrop-blur-lg`, `border-b border-ink-100` | sticky `z-50`, 64/80 px: logo (measured 180×36) · **six** nav links from `xl` (`How we find it`, `Insurance`, `Services`, `Service areas`, `About`, `Contact`) · location pill (`Louisville, KY`, `2xl` only) · phone pill (`(555) 130-1300`, `md`+) · dark toggle · solid `Book a leak location` (`xl`+) · hamburger (`xl:hidden`) |
| — | `[data-mobile-menu]` | white (`dark:gray-950`), `border-t` | `hidden xl:hidden` panel: the six links as `block py-3` rows, then phone + location pills and a full-width CTA |
| 1 | (hero, no id) | **`bg-ink-50` `#f5f6fa`** | `lg:grid-cols-12`, left `col-span-7 lg:pt-6` — eyebrow `Louisville · Licensed master plumber`, `h1` (second sentence in `primary-600`), 18 px lede, 5 `amber-400` stars + `4.9` + `220+ reviews on Google · sample data`, then a **2×2 checklist** (`sm:grid-cols-2`, `primary-600` ticks): `Located before anything is opened`, `Marked on the floor, with the depth`, `Written report your insurer will accept`, `Fee credited if we do the repair`; right `col-span-5` — the **booking card** (`rounded-2xl border-ink-100 bg-white p-8 shadow-md`, measured 469×509) with `h2 Book a leak location`, `Three fields. We reply within the hour on weekdays.`, a 3-field form and a full-width `Book the location` button plus the `No obligation…` footnote. **No image in the hero.** |
| 2 | `#emergency` | **`bg-primary-600` `#0886b2`, `text-white`** | a thin band (`py-6 lg:py-8`): a **pinging dot** + uppercase eyebrow `Water running with everything off?`, `Same-day location when the meter is spinning and you cannot find it.` at 18/20 px bold, a `text-sm opacity-90` paragraph, and one white **pill** `(555) 130-1300` with a phone glyph, right-aligned from `lg` |
| — | `[data-sticky-call]` | white (`dark:gray-900`), `border-t border-ink-200`, `p-3` | **`lg:hidden`** fixed bottom bar, `z-40`: a full-width **teal pill** `data-phone` link `Water running with everything off? · (555) 130-1300` with a phone glyph |
| 3 | `#process` | white | eyebrow `What you are seeing`, `h2 Six signs, and what each one usually means`, lede; an `<ol>` (`gap-8 sm:grid-cols-3 sm:gap-6`) of **six** `<li>`: a mono numeral (`01`…`06`, `tabular-nums`, `primary-600`) + a `h-px flex-1 bg-ink-100` rule, `h3` symptom, body, and a `text-sm font-semibold text-primary-700` label (`Strong sign`, `Usually a hot line`, `Check the meter`, `Photograph it now`, `Do the bucket test`, `Still findable`) |
| 4 | `#why-us` | **`bg-ink-50` `#f5f6fa`** | `lg:grid-cols-2` (`gap-16`), figure **first on `lg`** (`order-last lg:order-first`): `locate-panel.svg` in `rounded-2xl` + a `text-sm text-ink-400` `figcaption` telling you to replace it with a photograph; right: eyebrow `How it works`, `h2 Four instruments, and none of them is a jackhammer`, lede, then a `<dl class="space-y-6">` of **four** `border-l-2 border-primary-600 pl-5` rows (`dt` = `Isolate and pressure test`, `Acoustic listening`, `Thermal imaging`, `Tracer gas where needed`; `dd` = `mt-1 text-ink-500`) |
| 5 | `#services` | white | eyebrow `What we do`, `h2 Location, and the repair if you want it`, lede; a **6-cell hairline grid** (`grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100`, `sm:grid-cols-2 lg:grid-cols-3`, cells `flex flex-col bg-white p-6 lg:p-8`): `Slab leak location` / `Pool leak location` / `Irrigation and service line` / `Sewer and drainage leaks` / `Repair after location` / `Insurance documentation`, each with a blurb and a `text-primary-700` price line (`From $395`, `From $445`, `From $345`, `From $395`, `Quoted after location`, `Included with location`); sample-data footnote |
| 6 | `#areas` | white | `lg:grid-cols-12` (`gap-16`): left `col-span-5` `h2 Where we work` + lede; right `col-span-7` a `grid-cols-2 sm:grid-cols-3` list of **12 towns** as `border-b border-ink-100 py-2.5` rows: Louisville, Jeffersontown, St. Matthews, Middletown, Shively, Prospect, Anchorage, Fern Creek, Okolona, Lyndon, Shelbyville, La Grange + a replace-me footnote |
| 7 | `#testimonials` | **`bg-gray-50`**, `py-20 lg:py-28` | centred pill eyebrow `Reviews`, `h2 What people say afterwards`, sample-data lede; **3-slide carousel** (`[data-carousel]`): `rounded-2xl bg-white p-8 shadow-soft` cards with 5 **`primary-400`** stars, a 18 px quote, a 48 px `bg-primary-100 text-primary-600` initial disc + name + town; round arrows at `-left-4`/`-right-4` and a `[data-carousel-dots]` div the kit fills |
| 8 | `#faq` | white, `py-20 lg:py-28` | pill eyebrow `Questions`, `h2 Before you book`, lede; `divide-y divide-gray-200` list of **five** rows: full-width `button` + `py-6` + 16 px semibold question + a 32 px `rounded-full bg-gray-100 text-gray-600` plus-icon disc that rotates 45° when open, and a `max-height:0` panel |
| 9 | `#contact` | **`bg-primary-700` `#0e6b90`**, `py-28` (112 px) | centred white `h2 Meter spinning with everything off?` (36 px), `text-primary-100` lede (`Meter spinning…shut it at the main, then call…`), then a **white** solid `Book a leak location` + a `border-2 border-white/40` ghost `Call (555) 130-1300` with a phone glyph. Flat brand band — no gradient, no blobs |
| — | `footer` | **`bg-gray-900` `#111827`**, `text-gray-300`, `pt-16 lg:pt-24` (96 px measured) | 12-col grid: brand block `col-span-4` (`logo-light.svg` 40 px, blurb, **three** `rounded-lg bg-gray-800 p-2.5` 40 px social tiles — Twitter / Instagram / LinkedIn, address `2210 Frankfort Avenue, Louisville, KY 40206`, phone, `office@dowserleak.example`) · a nested `sm:grid-cols-3 lg:col-span-5` block with `Services` (Slab leak location, Pool leaks, Service lines, Repair after location), `Company` (How we find it, Insurance, Service areas, About) and `Support` (Contact, Privacy, Terms) · `Stay Updated` `col-span-3` with an email field + `Subscribe`; bottom bar `border-t border-gray-800`: `© 2026 …` + `Privacy Policy` / `Terms of Service` |
| — | `#cookie-consent` | white (`dark:gray-900`), `border-t`, `shadow-lg` | fixed bottom `role="dialog"` `aria-label="Cookie consent"`, slides up after 1.5 s, `Decline` (outline) + `Accept All` (primary) |
| — | `#back-to-top` | `primary-600` + `shadow-primary-600/25` | 48 px disc, `bottom-6 right-6`, appears past 300 px |

**On mobile the bottom edge carries two fixed layers**: the `lg:hidden` call bar (`z-40`) and the cookie
strip (`z-50`). The cookie strip is painted over the call bar until it is dismissed — copy that order.

## Behaviour the recreation must reproduce

All handlers live in the **house kit** (`Base…BLoalVWc.js`, 16,233 B, the same hash as the Plantroom,
Veranda, Stoke and Closeknit reads); only `applyTheme`, the preloader removal and the JSON-LD block are
page-local. The page wires **14 `data-animate` elements** and the hooks in §Data-attribute inventory — it
uses *none* of the kit's typewriter, counter, parallax, video, lightbox, billing or blog-filter
branches, so those must not be invented into the build.

1. **Reveal on scroll** (`[data-animate]`, 14 elements, delays 100–300 ms) — `fade-in-up`, skipped
   entirely under `prefers-reduced-motion: reduce`; elements start at `opacity:0`, `translateY(20px)`,
   `.6s ease-out`, revealed once at `threshold .1` / `rootMargin 0 0 -10%`.
2. **Header shadow** past `scrollY > 50`; mobile disclosure with `aria-expanded` + glyph swap
   (hamburger ↔ close) and `hidden` on the panel.
3. **Scroll spy** — `[data-nav-link]` carries a **route path** (`/how-we-find-it`, `/insurance`,
   `/services`, `/service-areas`, `/about`, `/contact`), **not** a band id. Every one of the six nav
   links is an inner route, so on this page the spy has **zero live targets** and never paints
   `.nav-active`. The recreation maps the labels onto bands (Requirement 15) and may then run the spy
   against those ids — that is the one behavioural place where it is *better* than the reference.
4. **Carousel** (`[data-carousel]`) — per-view **3 ≥1024 px, 2 ≥640 px, 1 below**; each slide's width
   is `track.parentElement.offsetWidth / perView`; advances every **5 s**, wrapping; paused on
   `mouseenter`, resumed on `mouseleave`; dots are `h-2.5 w-8 bg-primary-600` when active and
   `w-2.5 bg-gray-300` otherwise, one per page. **Measured: 1440 px → 0 dots and both arrows
   `display:none` (one page, a static 3-up row); 900 px → 2 dots, arrows `flex`; 390 px → 3 dots,
   arrows `flex`.**
5. **FAQ** (`[data-faq-toggle]` + `[data-faq-icon]`) — **exclusive**: opening one sets every other
   panel to `max-height:0`/`opacity:0` and every other icon back to `rotate(0)`; the open row gets
   `max-height: scrollHeight` + `opacity:1` and `rotate(45deg)` on its disc.
6. **Cookie strip** (`[data-cookie-accept]` / `[data-cookie-decline]`) — slides up 1.5 s after load,
   slides down and removes itself on either choice; the kit stores `cookie-consent` in `localStorage`
   (dropped in the recreation, Deviation 3).
7. **Back-to-top** — `scrollY > 300` sets `opacity:1; pointer-events:auto; translateY(0)`, otherwise
   `opacity:0; pointer-events:none; translateY(16px)`; click smooth-scrolls to `top:0`.
8. **Scroll progress** — `width = scrollY / (scrollHeight - innerHeight) × 100` %, passive listener.
9. **Dark toggle** (`[data-dark-toggle]`) — toggles `.dark` on `documentElement` + `localStorage.theme`;
   boots from `applyTheme()`. Dropped in the recreation (Deviation 2); every measured dark value is
   recorded above so the decision is reversible.
10. **Emergency ping** — the `#emergency` dot is two stacked spans, the outer `animate-ping`
    (`opacity-60`) behind a static 8 px dot; it is the only looping animation on the page and it must
    stop under `prefers-reduced-motion`.
11. **Chrome**: preloader removed 300 ms after `load`; smooth in-page scrolling with a header offset
    for `a[href^="#"]`.
12. **Forms — the reference's forms are inert.** The booking form is `<form data-form action="#"
    method="post">` and the footer newsletter is `<form data-newsletter-form>`; the kit only binds
    `form[data-validate]`, which **neither** uses (`grep -c 'data-validate'` = 0 on the page), so a
    submit navigates to `/#` with no validation. The recreation must wire both forms itself
    (Requirement 5): required + phone/email checks on submit and on blur, inline error text, a reset on
    success, and the kit's own toast (`bg-green-600` / `bg-red-600`, `top-6 right-6`,
    `translateX(120%)` → 0, auto-dismissed after 4 s) — no network call, no navigation.

### Data-attribute inventory (measured on the live page)

| hook | count | what it drives |
| --- | ---: | --- |
| `data-animate` (12 with `data-delay`) | 14 | reveal |
| `data-nav-link` | 6 | scroll-spy (all six are route paths → no live target) |
| `data-faq-toggle` / `data-faq-icon` | 5 / 5 | exclusive accordion |
| `data-phone` | 5 | `tel:` links (header pill, mobile panel, emergency pill, sticky bar, closing band) |
| `data-carousel` / `-track` / `-slide` / `-prev` / `-next` / `-dots` | 1 / 1 / 3 / 1 / 1 / 1 | testimonials |
| `data-header`, `data-mobile-toggle`, `data-mobile-menu`, `data-dark-toggle` | 1 each | sticky chrome |
| `data-licence-bar`, `data-emergency`, `data-sticky-call`, `data-form`, `data-newsletter-form`, `data-cookie-accept`, `data-cookie-decline` | 1 each | the page-specific pieces |

`data-counter`, `data-typewriter`, `data-parallax`, `data-video-modal`, `data-lightbox`,
`data-billing-toggle`, `data-blog-*`, `data-accordion-toggle`, `data-validate` are **absent** even
though the shared kit supports them.

## Link and destination census (LT axis, measured 2026-10-25)

The live landing page holds **43 anchors** over **15 distinct `href` values** (counted in the DOM, not
eyeballed):

| count | href | kind |
| ---: | --- | --- |
| 6 | `/theme/dowser/services` | live route → `200` (43,814 B) — header, mobile menu, four footer service links |
| 6 | `/theme/dowser/contact` | live route → `200` (36,683 B) — header, mobile menu, hero CTA, footer, closing band |
| 5 | `tel:5551301300` | valid — the emergency pill, the mobile call bar, the closing band, the phone pills |
| 3 | `/theme/dowser/how-we-find-it` | live route → `200` (41,968 B) |
| 3 | `/theme/dowser/insurance` | live route → `200` (42,675 B) |
| 3 | `/theme/dowser/service-areas` | live route → `200` (35,424 B) |
| 3 | `/theme/dowser/about` | live route → `200` (38,163 B) |
| 3 | `#` | **dead** — the three footer social tiles (Twitter / Instagram / LinkedIn) |
| 2 | `/theme/dowser/` | the wordmark (header + footer), a no-op self-link |
| 2 | `#service-areas` | **broken fragment** — the band id is `areas`, and `grep -c 'id="service-areas"'` = **0** (header location pill + its mobile twin) |
| 2 | `/theme/dowser/privacy` | live route → `200` (38,611 B) |
| 2 | `/theme/dowser/terms` | live route → `200` (37,420 B) |
| 1 | `#main-content` | skip link → exists |
| 1 | `tel:(555) 130-1300` | **malformed** `tel:` (spaces, parentheses) — the footer's copy |
| 1 | `mailto:office@dowserleak.example` | `.example` placeholder mailbox |

**Inner-page inventory (all live; the bare path `308`s, the trailing-slash path `200`s — follow
redirects):**

| page | bytes | `<title>` | `<h1>` |
| --- | ---: | --- | --- |
| `how-we-find-it/` | 41,968 | How leak detection actually works \| Dowser Leak Detection | Four instruments, used in order |
| `insurance/` | 42,675 | Leak damage and your insurance claim \| Dowser Leak Detection | The pipe is usually the cheap part |
| `services/` | 43,814 | Leak detection services in Louisville \| Dowser Leak Detection | We find them. Repairing is optional. |
| `service-areas/` | 35,424 | Leak detection across Jefferson County \| Dowser Leak Detection | Jefferson County and the ring around it |
| `about/` | 38,163 | About Dowser Leak Detection \| Dowser Leak Detection | About Dowser Leak Detection |
| `contact/` | 36,683 | Contact Dowser Leak Detection \| Dowser Leak Detection | Contact Dowser Leak Detection |
| `privacy/` | 38,611 | Privacy Policy \| Dowser Leak Detection | Privacy Policy |
| `terms/` | 37,420 | Terms of Service \| Dowser Leak Detection | Terms of Service |
| `elements/` | — | — | **404** (no style-guide page) |

The multi-page shell is the authoritative reference for the copy the single-page recreation folds in:
`/how-we-find-it` carries **What each instrument does, and does not** + **Four things that make a
location accurate** (the why-us band's four rows are the landing page's summary of it), `/insurance`
carries **What policies typically do and do not cover** + **Four things to do before anybody moves
anything** (the landing page has no insurance band at all — see Deviation 1), `/services` carries the
six categories the footer links into, and `/service-areas` carries the town-by-town reasoning. **The
recreation does not rebuild those pages.**

## Class census (no phantom-class delta)

The page uses **327 distinct class tokens** (391 `class` attributes) and **every one compiles** to a rule
in `Base.DWnf_ikV.css`. Six tokens look missing to a naive `.token{` grep — `divide-y`,
`divide-gray-200`, `space-y-2`, `space-y-3`, `space-y-4`, `space-y-6` — and all six are **false misses**:
Tailwind compiles them as child combinators (`:where(& > :not(:last-child))`), so the literal `.divide-y`
selector exists with a `>` in it, not with a `{` after the name. `grep -c '\.divide-y'` = 1 each. There
is therefore **no phantom-class delta** to floor into this spec.

⚠️ Three traps when re-running this census:

1. Variants are escaped in the sheet (`sm\:grid-cols-3`, `bg-white\/90`, `lg\:col-span-5`) — grep the
   escaped form, and leading digits escape as `\32 ` / `\33 `.
2. `dark:` utilities compile as `:is(.dark *)` suffixes, so a `.token{` search misses them entirely.
3. Breakpoints ship as `@media (width>=40rem)` (not `min-width:`): 40rem `sm`, 48rem `md`, 64rem `lg`,
   80rem **`xl`** (where the nav appears), 96rem `2xl` (where the location pill appears).

## Screenshot analysis (2400×1892, macOS-Safari window frame, AVIF)

The capture is a light-mode desktop view framed in Safari chrome (traffic lights, empty address bar), so
the top ~90 px and the outer ~60 px are browser, not design. Inside it, top to bottom:

* the **near-black licence strip**: `Licence KY MP #00000` · `Acoustic and thermal certified` ·
  `Serving Jefferson County`, and on the right an amber star with `4.9` and
  `220+ reviews on Google (sample)`;
* the **white header**: a teal circular droplet glyph beside the `Dowser` wordmark with a letterspaced
  `LEAK DETECTION` under it, the six nav labels, a `Louisville, KY` pill with a pin glyph, a
  `(555) 130-1300` phone pill, a moon toggle, and the solid teal `Book a leak location`;
* the **pale blue-grey hero** (`#f5f6fa`, not white): the letterspaced teal eyebrow
  `LOUISVILLE · LICENSED MASTER PLUMBER`, a 60 px near-black headline **`Find the leak first.`** whose
  next sentence **`Then open one hole, not six.`** is solid brand cyan and wraps onto its own two lines,
  the four-line grey lede, five amber stars + `4.9` + `220+ reviews on Google · sample data`, then a
  **2×2 checklist with teal ticks** (`Located before anything is opened`, `Marked on the floor, with the
  depth`, `Written report your insurer will accept`, `Fee credited if we do the repair`);
* the **white booking card** on the right, floating on the grey: `Book a leak location`, the
  `Three fields. We reply within the hour on weekdays.` line, three labelled fields in a single column
  (`Your name`, `Phone`, `What have you noticed?` with `Choose the closest match`) and a full-width teal
  button, plus the tiny `No obligation…` footnote;
* the **flat teal band**: a bullet dot, `WATER RUNNING WITH EVERYTHING OFF?`, the bold
  `Same-day location when the meter is spinning and you cannot find it.`, the two-line
  `opacity-90` paragraph and the **white pill** with its phone glyph on the right;
* the **start of the six-signs band** on white: `WHAT YOU ARE SEEING`,
  `Six signs, and what each one usually means`, the two-line lede and the first row of three numbered
  columns (`01`, `02`, `03`) with their hairline rules, headings and two-line bodies.

Everything below that first row — the other three signs, the why-us figure, the six services, the towns,
the carousel, the FAQ, the closing band and the footer — is **not in the screenshot**: read those from
the DOM and the sheet (which is what §Reference document order and the design notes do). The screenshot
is authoritative for three things: the licence-strip composition, the hero's vertical rhythm (eyebrow →
headline → lede → rating → checklist), and the fact that the design is **light with no photography**.

## Requirements

### Requirement 1: Page chrome (preloader, skip link, scroll progress, back to top, cookie strip)

The app SHALL render a skip link as the first focusable element, a 2 px scroll-progress bar at the very
top of the document, a 48 px back-to-top disc that appears past 300 px, and a cookie strip that slides
up 1.5 s after load and dismisses into component state. It SHALL NOT leave any overlay in front of the
content once the document is ready.

#### Scenario: Visitor loads the page

- **GIVEN** the page is loading
- **WHEN** the document reaches `readyState === "complete"`
- **THEN** no white spinner overlay is painted at all, because the recreation never mounts one
- **AND** the page is fully readable with JavaScript disabled

#### Scenario: Visitor scrolls

- **GIVEN** the page is at the top
- **WHEN** the visitor scrolls past 300 px
- **THEN** the progress bar's width equals `scrollY / (scrollHeight - innerHeight)` as a percentage and
  the back-to-top disc fades in (`opacity 1`, `translateY(0)`, 48 px, `#0886b2`, tinted shadow)
- **AND** below 300 px the disc is `opacity: 0` with `pointer-events: none`, and activating it
  smooth-scrolls to the top

#### Scenario: Visitor answers the cookie strip on a phone

- **GIVEN** the viewport is below `lg`, so the sticky call bar is also fixed to the bottom edge
- **WHEN** the strip slides up
- **THEN** it is painted **over** the call bar (`z-50` vs `z-40`) and either `Decline` or `Accept All`
  slides it away and removes it, leaving the call bar reachable
- **AND** the choice is held in component state (no invented storage key — Deviation 3)
- **AND** the strip is a `role="dialog"` with the accessible name `Cookie consent`

### Requirement 2: Licence strip

The app SHALL render the dark credibility strip above the header with the licence number, the
certification line, the service county and the sample rating, collapsing the middle facts below `sm`.

#### Scenario: Visitor inspects the top of the page at desktop width

- **GIVEN** the page is rendered at ≥640 px
- **WHEN** the strip is inspected
- **THEN** it is 36 px tall on `#20243a` with `text-xs` copy in `#e9ebf3`, reading `Licence`
  `KY MP #00000` · `Acoustic and thermal certified` · `Serving` `Jefferson County` on the left, and an
  `amber-400` star, `4.9` and `220+ reviews on Google (sample)` on the right
- **AND** below `sm` only the licence pair and the rating remain, and the strip does not wrap

#### Scenario: Visitor reads the rating claim

- **GIVEN** the strip and the hero both show `4.9` / `220+ reviews`
- **WHEN** either is inspected
- **THEN** both carry an explicit sample disclosure (`(sample)` / `· sample data`) — the reference's own
  wording, which the recreation must not turn into a factual claim (Deviation 8)

### Requirement 3: Header, mobile disclosure and scroll spy

The app SHALL render a sticky translucent header with **six** nav labels from `xl`, two utility pills, a
theme control the recreation drops, and a disclosure menu below `xl`.

#### Scenario: Visitor inspects the header at desktop width

- **GIVEN** the page is rendered at ≥1280 px
- **WHEN** the header is inspected
- **THEN** it reads the wordmark, then `How we find it`, `Insurance`, `Services`, `Service areas`,
  `About`, `Contact`, then the `Louisville, KY` location pill (only ≥1536 px), the phone pill, the
  `Book a leak location` CTA, and the hamburger is hidden
- **AND** the bar is 81 px tall (65 px below `lg`) on `white/90` with a `backdrop-blur` and a
  `1px #e9ebf3` bottom border, and gains `shadow-lg` past 50 px of scroll

#### Scenario: Visitor opens the menu on a phone

- **GIVEN** the viewport is below `xl`
- **WHEN** the hamburger is activated
- **THEN** `aria-expanded` flips to `true`, the glyph becomes a close icon, and the panel shows the six
  links as full-width rows plus the phone pill, the location pill and a full-width CTA
- **AND** the panel closes on a second activation and on any link activation

#### Scenario: Scroll spy

- **GIVEN** the reference's six `data-nav-link` values are route paths, not band ids
- **WHEN** the recreation maps the labels to bands (Requirement 15)
- **THEN** the active link is marked against the band currently in view, using the hybrid
  `rootMargin: -20% 0 -70% 0` observer
- **AND** exactly one link carries the active treatment at any scroll position, and none before the
  first band is crossed

### Requirement 4: Hero

The app SHALL render the hero as a 12-column split (7 / 5) on `#f5f6fa` with the headline's second
sentence in `#0886b2`, a sample rating line, a 2×2 tick checklist and the booking card, and **no image**.

#### Scenario: Visitor reads the hero at 1440 px

- **GIVEN** the page is rendered at 1440 px
- **WHEN** the hero is inspected
- **THEN** the eyebrow reads `Louisville · Licensed master plumber` in 14 px `#0e6b90` uppercase with
  0.35 px tracking, the `h1` measures **60 px / 66 px / −1.5 px** in `#20243a`, and its second sentence
  `Then open one hole, not six.` is `#0886b2`
- **AND** the lede is 18 px / 28 px in `#59628a`, the rating line shows five `amber-400` stars, `4.9`
  and `220+ reviews on Google · sample data`, and the checklist is two columns of two with `#0886b2`
  ticks
- **AND** the left column carries `lg:pt-6` so it sits 24 px below the card's top edge, and the section
  pad is 80 px top and bottom

#### Scenario: Visitor reads the hero on a phone

- **GIVEN** the viewport is 390 px
- **WHEN** the hero is inspected
- **THEN** the `h1` measures **36 px / 39.6 px / −0.9 px**, the checklist is a single column, the
  booking card stacks below the copy, and the fixed call bar covers the bottom 87 px — the page's last
  element must not hide behind it

### Requirement 5: Booking form (the reference's inert form, wired)

The app SHALL render the booking card with the reference's three fields and validate them locally on
submit and on blur, confirming with the kit's toast. Nothing SHALL be sent anywhere.

#### Scenario: Visitor submits an incomplete form

- **GIVEN** the card's fields are `Your name`, `Phone` and `What have you noticed?` (a select whose first
  option is `Choose the closest match` and whose other **seven** options are `Water bill jumped`,
  `Warm patch on the floor`, `Sound of running water`, `Damp carpet or buckling floor`,
  `Meter spins with everything off`, `Pool losing water`, `Insurance asked for a leak report`)
- **WHEN** `Book the location` is activated with any field empty
- **THEN** each empty field shows an inline error, carries `aria-invalid="true"` and an
  `aria-describedby` that names its message, and the first invalid field receives focus
- **AND** nothing navigates and no request is made

#### Scenario: Visitor submits a complete form

- **GIVEN** a name, a phone number of at least ten digits and one symptom option
- **WHEN** the form is submitted
- **THEN** the fields reset, the success toast appears in the kit's green (`#16a34a`-family) at
  `top-6 right-6`, and it auto-dismisses after 4 s
- **AND** the card keeps its `rounded-2xl` 16 px radius, `1px #e9ebf3` border, 32 px padding and
  `shadow-md`, and its footnote `No obligation. You keep the report and the photographs either way.`
  stays in 12 px `#7a84a8`

### Requirement 6: Emergency band and the mobile call bar

The app SHALL render the thin teal band with a pinging status dot, the emergency headline, the shut-off
advice and a white phone pill, plus a `lg`-only sticky call bar.

#### Scenario: Visitor reads the band

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** `#emergency` is inspected
- **THEN** its ground is `#0886b2` with white copy, its container pads 32 px vertically, and it reads a
  **pinging 8 px dot** + `Water running with everything off?` in 14 px uppercase `opacity-90`, then
  `Same-day location when the meter is spinning and you cannot find it.` in 18/20 px bold, then the
  `text-sm opacity-90` paragraph about shutting the main off
- **AND** the right-hand pill is `rounded-full`, white, 18 px bold in `#0e6b90`, 20 px `px-6 py-3`, and
  dials `tel:5551301300`

#### Scenario: Visitor loads the page on a phone

- **GIVEN** the viewport is below `lg`
- **WHEN** the page has finished loading
- **THEN** a fixed `z-40` white bar with a `1px #d2d6e6` top border and 12 px padding sits at the bottom,
  holding one full-width `rounded-full` `#0886b2` pill that reads
  `Water running with everything off? · (555) 130-1300` and dials the same number
- **AND** the bar is not rendered at or above `lg`, and the ping animation is disabled under
  `prefers-reduced-motion: reduce`

### Requirement 7: Six-signs band

The app SHALL render the six symptoms as a numbered three-column list whose numerals are JetBrains
Mono with hairline rules, each with a plain-language label.

#### Scenario: Visitor reads the band

- **GIVEN** the page is rendered at ≥640 px
- **WHEN** `#process` is inspected
- **THEN** the eyebrow reads `What you are seeing`, the `h2` reads
  `Six signs, and what each one usually means` at 36 px, and the lede sits in 18 px `#59628a`
- **AND** the list is an `<ol>` in three columns with 24 px gaps whose six items appear in the reference
  order — `The bill jumped with no change in habits`, `A warm patch on the floor`,
  `Running water with everything off`, `Damp carpet or a buckling floor`, `A pool that keeps dropping`,
  `Nothing visible at all` — each headed by a mono numeral `01`…`06` in `#0886b2` followed by a 1 px
  `#e9ebf3` rule that stretches to the column's end
- **AND** each item's label is `Strong sign`, `Usually a hot line`, `Check the meter`,
  `Photograph it now`, `Do the bucket test`, `Still findable` in 14 px 600 `#0e6b90`
- **AND** below `sm` the list is one column

### Requirement 8: Why-us band and the located-slab figure

The app SHALL render the four instruments as a definition list with 2 px brand rules beside a figure
whose SVG is redrawn from the reference's geometry.

#### Scenario: Visitor reads the band

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** `#why-us` is inspected
- **THEN** the ground is `#f5f6fa`, the figure is the left column, and the right column reads the
  eyebrow `How it works`, `Four instruments, and none of them is a jackhammer`, the lede
  `The order matters. Each step narrows the area so the next one has less ground to cover.`, then four
  rows (`Isolate and pressure test`, `Acoustic listening`, `Thermal imaging`, `Tracer gas where needed`)
  each with a `border-l-2` `#0886b2` left rule, 20 px of left padding, an 18 px bold `dt` and a
  `#59628a` `dd`
- **AND** the figure carries a `text-sm #7a84a8` caption reading
  `Replace with a photograph of your own equipment and a marked floor before launch.`
- **AND** below `lg` the figure moves **after** the copy (`order-last`), which is the reference's order

#### Scenario: The figure is inspected for provenance

- **GIVEN** the reference ships a 1,599 B `locate-panel.svg` (800×600)
- **WHEN** the implementation is reviewed
- **THEN** the panel is redrawn as an inline React SVG — a slab cross-section with one marked point, a
  depth call-out and no copied paths — and no file from the preview is downloaded at runtime
- **AND** the drawing carries `role="img"` with an accessible name, and its inner labels are
  `aria-hidden`

### Requirement 9: Services grid

The app SHALL render the six services as a single hairline-bordered block divided into six cells, each
with a price line.

#### Scenario: Visitor reads the grid

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** `#services` is inspected
- **THEN** the block is `rounded-2xl`, `1px #e9ebf3` bordered, filled `#e9ebf3`, split by 1 px gaps into
  three columns and two rows of white cells padded 32 px
- **AND** the six cells appear in the reference order with their price lines — `Slab leak location`
  `From $395`, `Pool leak location` `From $445`, `Irrigation and service line` `From $345`,
  `Sewer and drainage leaks` `From $395`, `Repair after location` `Quoted after location`,
  `Insurance documentation` `Included with location` — the price in 14 px bold `#0e6b90`
- **AND** the band carries the reference's footnote that the starting prices are sample data
- **AND** at `sm` the grid is two columns and below `sm` one

### Requirement 10: Service areas

The app SHALL render the twelve towns as a hairline list beside the band's heading.

#### Scenario: Visitor reads the band

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** `#areas` is inspected
- **THEN** the heading column takes 5 of 12 columns and the list 7, separated by 64 px
- **AND** the list is two columns below `sm`, three from `sm`, and reads Louisville, Jeffersontown,
  St. Matthews, Middletown, Shively, Prospect, Anchorage, Fern Creek, Okolona, Lyndon, Shelbyville,
  La Grange in that order, each a `border-b #e9ebf3` row with 10 px vertical padding in `#323858`
- **AND** the replace-me footnote is present

### Requirement 11: Testimonials carousel

The app SHALL render the three reviews in the kit's carousel with 3 / 2 / 1 per view.

#### Scenario: Visitor reads the band at desktop width

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** `#testimonials` is inspected
- **THEN** the ground is `#f9fafb`, the header block is centred, the pill eyebrow reads `Reviews` on
  `#cff8fe` in `#0e6b90`, and the band renders as a **static three-up row with no dots and no visible
  arrows** (one page at this width)
- **AND** each card is `rounded-2xl` white with 32 px padding, `0 4px 16px -4px #0000001a` shadow, five
  20 px `#22c8ee` stars, the quote, and a 48 px `#cff8fe` initials disc in `#0e6b90` with the name and
  the town
- **AND** the three quotes and their attributions (`Yvonne P.` / St. Matthews, `Grant M.` / Prospect,
  `Denise O.` / Fern Creek) are the reference's, and the sample-data disclaimer is kept

#### Scenario: Visitor reads the band on a phone

- **GIVEN** the viewport is 390 px
- **WHEN** the carousel is inspected
- **THEN** one slide fills the track, three dots are generated (`w-8` `#0886b2` for the active one,
  `w-2.5 #d1d5db` otherwise), both round arrows are operable, and the slide advances every 5 s, paused
  while the pointer is over the track
- **AND** the arrows stay inside the viewport, and no auto-advance runs under
  `prefers-reduced-motion: reduce`

### Requirement 12: FAQ accordion (exclusive)

The app SHALL render the five booking questions as an exclusive accordion with a rotating plus disc.

#### Scenario: Visitor opens a question

- **GIVEN** the five questions `Can you really find it without breaking anything?`,
  `How accurate is the location?`, `Will my insurance cover it?`, `Should I repair or reroute?`,
  `Do I have to use you for the repair?`
- **WHEN** one is activated
- **THEN** its panel expands to its scroll height with `opacity 1` while every other panel collapses to
  `max-height: 0`, and its 32 px `#f3f4f6` disc rotates 45° while the others return to 0°
- **AND** the button carries `aria-expanded` and `aria-controls`, the panel is the controlled region,
  and the rows are separated by 1 px `#e5e7eb` rules inside a `max-w-3xl` column

### Requirement 13: Closing band

The app SHALL render the closing call to action as a flat `#0e6b90` band with a solid and a ghost
button.

#### Scenario: Visitor reaches the end of the page

- **GIVEN** the page is rendered at any width
- **WHEN** `#contact` is inspected
- **THEN** the ground is `#0e6b90` and the section pads 112 px vertically, the heading
  `Meter spinning with everything off?` is 36 px white and centred, and the lede is 18 px `#cff8fe`
- **AND** the solid button is white on 32/16 px padding with 16 px bold `#0e6b90` label, the ghost is
  `border-2 border-white/40` with a phone glyph, both are `rounded-lg`, and there is no gradient, dot
  grid or image in the band

### Requirement 14: Footer

The app SHALL render the four-part footer on `#111827` with a working newsletter field and the house
provenance link.

#### Scenario: Visitor inspects the footer

- **GIVEN** the page is rendered at ≥1024 px
- **WHEN** the footer is inspected
- **THEN** the 12-column grid reads a brand block across 4 columns (light wordmark at 40 px, the
  `Non-invasive leak detection in Louisville…` blurb in `#9ca3af`, three 40 px `#1f2937` social tiles
  for Twitter / Instagram / LinkedIn, then the address `2210 Frankfort Avenue, Louisville, KY 40206`,
  the phone and `office@dowserleak.example`), a three-column block across 5 columns headed `Services`,
  `Company`, `Support`, and a `Stay Updated` column across 3 columns with an email field on `#1f2937`
  with a `#374151` border and a `Subscribe` button
- **AND** the column heads are 14 px uppercase `tracking-wider` white, the links `#9ca3af` at 14 px, and
  the bottom bar is separated by a `1px #1f2937` rule carrying `© 2026`, `Privacy Policy`,
  `Terms of Service`, **and a `Component Dock` link to `https://www.componentdock.com/`** (house rule;
  the reference has no such link)

#### Scenario: Visitor subscribes

- **GIVEN** the newsletter field is empty or invalid
- **WHEN** `Subscribe` is activated
- **THEN** the field shows the same inline error treatment as the booking form and nothing navigates
- **AND** with a valid address the field clears and the success toast appears — the reference's
  newsletter form is inert (Deviation 5)

### Requirement 15: Navigation mapping (single page)

The app SHALL resolve the reference's six nav labels and its route links against bands that exist on the
page, and SHALL NOT introduce a band the landing page does not have.

#### Scenario: Visitor uses the navigation

- **GIVEN** the header is rendered at a desktop width
- **WHEN** each nav item is followed
- **THEN** `How we find it` targets the why-us band, `Insurance` targets the FAQ band (the page's only
  insurance content is the `Will my insurance cover it?` answer plus the services cell
  `Insurance documentation` — see Deviation 1), `Services` the services band, `Service areas` the areas
  band, `About` the six-signs band and `Contact` the closing band
- **AND** the location pill targets the areas band (the reference's `#service-areas` fragment is broken —
  Deviation 6), the phone pills dial the footer number, and the `Book a leak location` CTAs target the
  booking card
- **AND** every target id exists, no anchor is left pointing at `#`, and in-page links offset by
  `header.offsetHeight + 20`

### Requirement 16: Accessibility and provenance

The app SHALL meet the house accessibility baseline and SHALL NOT reference the source design anywhere
in `apps/aquifer`.

#### Scenario: Keyboard and screen-reader use

- **GIVEN** a keyboard-only visitor
- **WHEN** they tab from the top
- **THEN** the first stop is the skip link, and the disclosure, the carousel, the FAQ rows, both forms
  and the sticky call bar are operable from the keyboard with a visible focus ring against every ground
  (including `#0886b2`, `#0e6b90` and `#111827`)
- **AND** `role="dialog"` is set on the cookie strip only, `aria-expanded` on the menu and the FAQ
  buttons, `aria-invalid` + `aria-describedby` on invalid fields, the live dot is `aria-hidden`, and
  every decorative glyph (stars, ticks, phone, arrows) is `aria-hidden` while the located-slab figure
  keeps `role="img"` and a name
- **AND** no text sits below 4.5:1 against its ground — the pairs the design uses are white on
  `#0886b2`, white on `#0e6b90`, `#20243a`/`#59628a` on `#f5f6fa`, `#0886b2` on white, `#0e6b90` on
  `#cff8fe` and `#9ca3af` on `#111827`; **the closing band's `#cff8fe` lede and the emergency band's
  `opacity-90` paragraph are the two to check first**

#### Scenario: Provenance audit

- **GIVEN** the implementation is complete
- **WHEN** `grep -ril "colorlib" apps/aquifer` runs
- **THEN** it prints nothing
- **AND** no file contains the source brand (`Dowser`, `Dowser Leak Detection`), its
  `office@dowserleak.example` mailbox, its wordmark SVGs, its `locate-panel.svg` or its stylesheet; the
  wordmark and the panel are redrawn from the documented geometry, and the footer links
  `https://www.componentdock.com/`

## Deliberate deviations from the reference

1. **Multi-page → one page.** The preview is a nine-route Astro site (`/how-we-find-it`, `/insurance`,
   `/services`, `/service-areas`, `/about`, `/contact`, `/privacy`, `/terms` and `/`, all live;
   `/elements` is a 404 — see §Link and destination census). The recreation is the single landing page
   described here. Route links become in-page fragments per Requirement 15. **The insurance route is
   the one real loss**: `/insurance` carries *What policies typically do and do not cover* and *Four
   things to do before anybody moves anything*, which the landing page compresses to one FAQ answer and
   one services cell. Record that in the PR rather than inventing an insurance band the reference does
   not have.
2. **Dark mode dropped.** The source compiles a complete dark palette (`dark:` on most utilities, plus
   `primary-300/800/900` which exist *only* in dark), a `localStorage` toggle and an `applyTheme()`
   boot script. The recreation is light-only (house convention) and drops the toggle, so the header
   cluster is the two pills plus the CTA. Every dark value measured is recorded above so the decision is
   reversible.
3. **Cookie persistence.** The source stores `cookie-consent` in `localStorage`; the recreation keeps
   the dismissed state in component state so no test depends on an invented storage key.
4. **Copy and identity re-branded.** Aquifer replaces the source brand everywhere: the wordmark (redrawn
   from the same idea — a teal droplet disc beside `Aquifer` in Space Grotesk 700 with a letterspaced
   `LEAK DETECTION` in JetBrains Mono), the `© 2026` line, the mailbox (`office@aquifer.example`), the
   document title, the OG/meta set and every URL. The fictional Louisville address, the `(555) …`
   numbers, the `KY MP #00000` licence string, the town list, the prices and the testimonial names are
   kept — they are already fictional and they are the page's content.
5. **The inert forms are wired.** Both reference forms (`data-form`, `data-newsletter-form`) bind to no
   handler at all, so submit navigates to `/#` with no validation. The recreation validates locally and
   confirms with the kit's own toast. Nothing is sent anywhere; if the implementer prefers a real
   endpoint, that is a product decision and must be noted in the PR.
6. **`#service-areas` fragment repaired.** Two anchors (the header location pill and its mobile twin)
   point at `#service-areas`, an id the landing page does not have; its band id is `areas`. The
   recreation points them at the band that exists (Requirement 15).
7. **Reference defects not reproduced.** The three `href="#"` social tiles get real external hrefs with
   `rel="noreferrer"`; the footer's malformed `tel:(555) 130-1300` becomes `tel:5551301300`; the
   `.example` mailbox stays `.example` (it must never resolve); `og-image.jpg` (a `404` on the reference)
   is generated for the app or dropped from the meta set; and the **JSON-LD block is not copied** — the
   reference emits a corrupt one (`"@context":"https://***@type"`, a slider that rewrote `schema.org`),
   so the app writes its own `LocalBusiness`-style block or omits it.
8. **Sample-data disclosures are kept and strengthened.** The reference labels its rating
   `(sample)` / `· sample data`, its reviews `Sample reviews for demonstration…` and its prices
   `Starting prices are sample data for demonstration.` The recreation keeps those strings verbatim —
   they are the honest part of the design and removing them would turn a template into a false claim.
9. **Accessibility attributes added.** The reference's FAQ buttons have no `aria-expanded`, its panels no
   `aria-controls`, its carousel arrows have labels but no live region, and its form errors never
   render. The recreation adds them, plus a visible focus ring on all three dark grounds.
10. **The located-slab figure is redrawn, not copied.** The source ships a 1,599 B
    `locate-panel.svg`. The recreation reimplements the same panel as an inline React SVG using the
    measured geometry and palette above. Nothing is downloaded from the preview at runtime.
11. **Scroll-spy actually works.** The reference's `data-nav-link` values are route paths, so the spy
    never fires on the landing page. The recreation maps labels to bands and runs the same observer, so
    the header highlights the current band — the one place the build deliberately improves on the
    reference. Document it in the PR so it is not mistaken for a fidelity miss.

## Verification checklist

- [ ] Spec validates: `openspec validate template-aquifer --type spec` prints
      `Specification 'template-aquifer' is valid`
- [ ] `apps/aquifer` scaffolded from the simplest existing app, package renamed
      `@free-react-templates/aquifer`, `public/CNAME` = `aquifer.free.componentdock.com`, `homepage` =
      `https://aquifer.free.componentdock.com`
- [ ] Tokens: `primary` `#ecfdff` → `#164a63` with **`#0886b2`** as the brand and `#0e6b90` as its
      hover/ground, `ink` `#f5f6fa` → `#141726`, stock `gray` 50–900 for the footer and the
      testimonial/FAQ bands, `amber-400` for the hero/licence stars and **`primary-400` `#22c8ee`** for
      the testimonial stars; radii 8/12/16 px; `shadow-soft` `0 4px 16px -4px #0000001a`
- [ ] Fonts: **Space Grotesk 400–700** and **JetBrains Mono 500/700** via two `<link>`s;
      `tabular-nums` on the `01`–`06` numerals; no third family
- [ ] `.section` / `.btn` / `.btn-primary` / `.nav-active` reproduced; the **ping** dot and the
      **spin** preloader are the only keyframes used — no float, no typewriter, no counter
- [ ] Licence strip: 36 px `#20243a`, licence + certification + county + `4.9`/`220+ (sample)` rating,
      two middle facts hidden below `sm`
- [ ] Header: sticky `white/90` + blur, 64/80 px, **six** links from **`xl`**, phone pill from `md`,
      location pill only at `2xl`, CTA from `xl`, hamburger below `xl`, `shadow-lg` past 50 px
- [ ] Hero: `#f5f6fa` ground, 12-col split (7/5), eyebrow, 60 px `h1` with `Then open one hole, not
      six.` in `#0886b2`, 18 px lede, five amber stars + sample rating, 2×2 tick checklist, **no image**
- [ ] Booking card: `rounded-2xl`/16 px, white, `1px #e9ebf3`, 32 px padding, `shadow-md`, 3 fields with
      the seven-option symptom select, full-width CTA, footnote
- [ ] Forms: local validation (required + phone/email), inline errors with
      `aria-invalid`/`aria-describedby`, reset on success, kit-styled green toast, **no navigation and
      no network**
- [ ] Emergency band: `#0886b2`, pinging 8 px dot, 14 px uppercase eyebrow, bold 18/20 px headline,
      `opacity-90` paragraph, white `rounded-full` pill on the right from `lg`
- [ ] Sticky call bar: `lg:hidden`, fixed `z-40`, white, 12 px padding, one full-width teal pill; hidden
      from `lg` up; cookie strip paints over it
- [ ] Six signs: `<ol>` 3/1 columns, mono `01`–`06` + hairline rule, the six headings in order, the six
      labels in order, 36 px `h2`
- [ ] Why-us: `#f5f6fa`, figure left from `lg` (below the copy under `lg`), redrawn located-slab SVG
      with `role="img"`, caption, four `border-l-2 border-primary-600` rows
- [ ] Services grid: 6 cells in the reference order, `gap-px` over an `#e9ebf3` block, prices
      `From $395` / `From $445` / `From $345` / `From $395` / `Quoted after location` /
      `Included with location`, sample-data footnote
- [ ] Areas: 12 towns in order, `grid-cols-2 sm:grid-cols-3`, hairline rows, replace-me footnote
- [ ] Testimonials: 3 quotes with initials discs and towns; **static 3-up with no dots/arrows at
      ≥1024 px**, 2-up/1-up with dots + arrows below; 5 s autoplay paused on hover, off under reduced
      motion; arrows inside the viewport below `sm`
- [ ] FAQ: five rows, **exclusive**, `aria-expanded`/`aria-controls`, 32 px disc rotates 45°,
      `max-height` transition, the five questions in the reference order
- [ ] Closing band: flat `#0e6b90`, 112 px pad, white solid CTA + `border-2 border-white/40` ghost with
      phone glyph
- [ ] Footer: brand block + `Services`/`Company`/`Support`/`Stay Updated`, working newsletter
      validation, legal bar with the `Component Dock` link to `https://www.componentdock.com/`
- [ ] Chrome: no preloader overlay, skip link, 2 px progress bar, 48 px back-to-top, cookie strip in
      state and `role="dialog"`
- [ ] No `colorlib` string, no source brand, no `office@dowserleak.example`, no copied SVG or stylesheet
      under `apps/aquifer`; wordmark and located-slab panel redrawn; no copied JSON-LD
- [ ] Row added for the design under `## Business` **in source-name alphabetical order** with the heading
      re-measured (`(368)`, or `(369)` if Plantroom landed first) and flipped to `[x]` with the
      bookkeeping commit (the exact line is in §Purpose)
- [ ] `npm run spec:validate`, `scripts/verify-app.sh aquifer` and the CI gate are green
