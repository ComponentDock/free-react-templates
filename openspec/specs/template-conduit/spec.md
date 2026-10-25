# Template: Conduit (Trenchless pipe-relining trade brand — an honest comparison table, and a camera survey before any quote)

## Purpose

A **local trade brand for trenchless sewer repair whose argument is a comparison table it does not always
win**, and ColorLib's own copy names the thesis:

> "Fix the pipe. Keep the driveway." — the hero promise is *less* disruption, not *cheaper work*. The page
> then does the thing most trade sites avoid: it publishes a row-by-row comparison of **relining against
> open-cut digging**, and in three of the nine rows the dig wins.

The organising idea is **evidence before the sale**. The hero's right-hand column is not a newsletter box
and not a photograph: it is a **three-field camera-survey request** ("Book a camera survey", *"Three
fields. We reply within the hour on weekdays."*) whose footnote gives away the artefact —
*"No obligation. The footage is yours whether or not you hire us."* Every band after it exists to make
that promise credible: a **9-row comparison** where the losing column is still bold when it is right, a
**4-step process** that explicitly says *"you can stop after the second with the footage in hand"*, **six
services** with *starting* prices and one *"Quoted after survey"*, a **"we will talk you out of the
expensive one"** band that admits relining pays the firm better, a **12-town** service list, three reviews,
a five-question FAQ, and an emergency band that separates *clearing the blockage today* from *quoting the
repair*.

A recreation that swaps the comparison for a feature grid, hides the prices behind a CTA, or softens
*"we will talk you out of the expensive one"* into *"why choose us"* has deleted the template. The
comparison's **emphasis pattern is content**: in each row exactly one column carries `font-semibold`, and
the footer arithmetic (*"relining wins 5 rows and open cut wins 3"*) is measurable — 5 + 3 + **1 deliberately
neutral row** (*Life expectancy*) = the 9 rows on the page.

The register is **plain-spoken trade copy with the caveats left in**: *"Starting prices are sample data for
demonstration"*, *"Sample reviews for demonstration"*, *"180+ reviews on Google · sample data"*, *"Replace
this list with your own towns."*, *"Figures are illustrative for a typical single-family lateral in this
region."* Those lines are part of the artefact — this is a 2026 Astro build whose content is sample data by
design. Keep them.

Composition: **one warm off-white hero, one terracotta emergency strip, then alternating white /
`ink-50` information bands, one stock-grey testimonial carousel, one white FAQ, one terracotta closing band
and one near-black footer.** At 1440 × 900 (measured, `getBoundingClientRect`):

| #  | band                                         | ground                |   top | height |
| -- | -------------------------------------------- | --------------------- | ----: | -----: |
| 0  | licence bar (`[data-licence-bar]`)            | `ink-800` `#242420`   |     0 |     37 |
| 1  | `<header>` sticky, translucent white          | `#ffffff / 90 %`      |    37 |     81 |
| 2  | hero + `#quote` survey card                   | `ink-50` `#f6f6f4`    |   118 |    668 |
| 3  | `#emergency` terracotta strip                 | `primary-600` `#974e2c` | 786 |    164 |
| 4  | `#compare` — nine rows, two columns           | `#ffffff`             |   950 |  1,371 |
| 5  | `#process` — four numbered steps              | `#ffffff`             | 2,321 |    780 |
| 6  | `#services` — six hairline cells + prices     | `#ffffff`             | 3,101 |    927 |
| 7  | `#why-us` — pipe panel + four rules           | `ink-50` `#f6f6f4`    | 4,028 |    864 |
| 8  | `#areas` — twelve towns                       | `#ffffff`             | 4,892 |    468 |
| 9  | `#testimonials` — carousel of three           | `gray-50` `#f9fafb`   | 5,360 |    768 |
| 10 | `#faq` — five answers                         | `#ffffff`             | 6,128 |    820 |
| 11 | `#contact` — closing CTA band                 | `primary-700` `#7b3f26` | 6,948 |    440 |
| 12 | `<footer>`                                    | `gray-900` `#111827`  | 7,388 |    567 |

**Document height 7,955 px** at 1440 × 900; **7,727 px** at 1600, **8,291 px** at 1024, **9,473 px** at 768,
**12,592 px** at 390 and **13,659 px** at 320. Hero top offset is **118 px** (37 licence bar + 81 header) and
the header is `sticky` — every in-page anchor needs `scroll-margin-top ≥ 101 px` or the heading lands under
it. Every `.section` band is `py-20` → `lg:py-28` (**80 px**, then **112 px**); the hero's container is
`py-14` → `lg:py-20` (**56 px**, then **80 px**).

The palette is **one warm-grey `ink` ramp, one terracotta `primary` ramp and stock Tailwind greys**. The
jobs are not interchangeable: `ink-800` `#242420` is the **licence bar and every heading on a light band**,
`ink-50` `#f6f6f4` the **hero and `#why-us` ground**, `ink-500` `#636356` every paragraph, and `ink-100`
`#ebebe7` every hairline and the services grid's 1 px *background* (the cells are white, so the wrapper
draws the dividers); `primary-600` `#974e2c` is **every solid CTA, the emergency strip, the scroll-progress
bar and the back-to-top disc**, `primary-700` `#7b3f26` the **contact-band ground and every eyebrow/price
line on a light band**, `primary-400` `#c97f55` the **testimonial stars and the emergency band's dark-mode
text**, `primary-100` `#f5e5d9` the **testimonial badge pill, avatar discs and the contact band's lead**.
Terracotta is a *warm middle* tone, never a gradient — there is no gradient anywhere in the sheet.

Three traps in the palette: **`#testimonials` and `#faq` use stock Tailwind greys** (`gray-900` headings,
`gray-600` body, `gray-50` band) while every other light band uses the `ink` ramp — sampling both and
"unifying" them is the fastest way to make the page look wrong in a way nobody can name; **the emergency
strip's call button is a full-radius pill on white**, unlike every other button on the page (radius 8); and
**`#emergency` is the only band with no eyebrow, no `h2` and no section padding** (it is a 6 px-padded
strip, `py-6 lg:py-8`).

The type is **Inter for everything, plus Fraunces held in reserve**. Inter ships 400/500/600/700 from
Cloudflare's automatic font service (`/cf-fonts/v/inter/5.2.8/…`, **variable `wght` woff2**, no `<link>`, no
`@font-face` in the stylesheet). **Fraunces** is loaded at 500/600/700 and the sheet defines
`.font-display{Fraunces,Georgia,serif}` — but **zero elements in the home-page markup carry that class**: the
serif renders exactly once, as the `<text>` inside `assets/img/liner-panel.svg` ("A pipe inside the pipe",
26 px / 700). So the display face is an *artwork* font here, not a heading font. Headings are 700 with
**tight negative tracking** (`−1.5 px` on the 60 px `h1`, `−0.9 px` on the 36 px `h2`) and eyebrows are
700 **uppercase with positive tracking** (`+0.35 px`); that pairing — plus `tabular-nums` on every numeral
that appears in a column — is the page's typographic signature.

Recreation of the ColorLib "Nodig" design (https://colorlib.com/wp/template/nodig/, live preview
https://preview.colorlib.com/theme/nodig/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `nodig`
- **ColorLib page:** https://colorlib.com/wp/template/nodig/ — **HTTP 200, 111,917 B**, `<title>`
  **"Nodig - Trenchless Pipe Relining Website Template 2026 - Colorlib"**, categories **Astro · Home
  Services · Tailwind CSS**. The listing's screenshot is `nodig-template.jpg` (**105,548 B**, served
  `image/avif` despite the `.jpg` name, **2400 × 1892** — see §Screenshot analysis).
- **Live preview:** https://preview.colorlib.com/theme/nodig/ — **HTTP 200, 79,808 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4`. `<title>` is **"Trenchless sewer repair in
  Tampa, compared honestly against digging | Nodig Pipe Relining"**. A 2026 **Astro** build: one hashed
  stylesheet `_astro/Base.C5mjsadR.css` (**55,793 B**, `/*! tailwindcss v4.3.3 */`), one behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B** — the *same* house kit
  as the Nightshift/Nightwatch and Metroflow/Drainwise preps; it carries carousel/pricing/blog-filter/
  lightbox/typewriter handlers this page never uses), and the router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js` (**16,357 B**, the same file as
  every sibling in this 2026 set).
- **Two inline `<script>` bodies only** (**454 B** + **370 B**): the pre-paint theme resolver
  (`localStorage.theme` → `prefers-color-scheme`) and the `load` handler that fades and removes
  `#preloader`. **There is no page-specific arithmetic on this page** — unlike Nightshift, its harness has
  no calculator. The hero form is inert markup (§Known reference defects).
- **JSON-LD:** one `application/ld+json` block, `@type: "Plumber"`, `name: "Nodig Pipe Relining"`,
  `telephone: "+1-555-0700"`, `areaServed: "Tampa, Florida"`, `priceRange: "$$$"`, `url: "/"`. Note the
  telephone disagrees with every `tel:` link on the page (`5550700700`) — a delta, not a spec.
- **No archive, no alternate family path:** `downloads/free/nodig.zip` → **404**, and `theme/bootstrap/nodig/`,
  `theme/bb/nodig/` → **404**. The slug-only preview path is the live build, as expected for this family.
- **Single-page?** No. **Seven inner routes are live** (`how-it-works`, `services`, `service-areas`,
  `about`, `contact`, `privacy`, `terms`), all HTTP 200 **only with the trailing slash** — the bare path
  answers **308** with an empty body. See §Inner-page inventory.
- **Fonts:** no `<link>` to Google Fonts and **no `@font-face` in the stylesheet**; the only font rules are
  inline `<style>` blocks naming `'Inter'` (400/500/600/700) and `'Fraunces'` (500/600/700) and pointing at
  `/cf-fonts/v/{inter,fraunces}/5.2.{8,9}/{latin,latin-ext,greek,…}/wght/normal.woff2` — **variable weight**.
  The recreation loads both from Google Fonts explicitly.

- **Recreation name:** `conduit` — one lowercase word, pipe-adjacent and *not* the source name, no collision
  with `apps/`, `openspec/specs/`, `docs/templates/`, any bold name in `TEMPLATES.md` or any existing row
  (`git grep -il conduit origin/main` → **no matches**, so zero substring hits and the `navpane`/`navpanel`
  trap does not apply), and `colorlib.com/wp/template/conduit/`, `preview.colorlib.com/theme/conduit/`,
  `preview.colorlib.com/theme/bootstrap/conduit/`, `preview.colorlib.com/theme/bb/conduit/` all →
  **404**. The recreation lives at `apps/conduit`, package `@free-react-templates/conduit`,
  `conduit.free.componentdock.com`. **No ColorLib string may appear in the app** — provenance lives in this
  spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**), so this design comes from `docs/catalog-coverage.md` —
the **42 standalone designs** on colorlib.com's listing that the checklist never recorded. This is row
**`nodig`** of 42 (*preview 200, 79,808 B*), the row after `nightshift`. When the app ships, append the row
under the best-fit category — **`## Business`** — **in source-name alphabetical order** (between the
`nightshift`-class and `nimbus`-class neighbours; re-read the section rather than trusting this line, a
concurrent prep may have landed first) and bump that heading's count.

## Reference readings (2026-10-25, `curl -4`)

| what                                     | value                                                                                                                        |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| preview HTML                             | 200, **79,808 B**, `text/html; charset=utf-8`                                                                                 |
| stylesheet `_astro/Base.C5mjsadR.css`    | 200, **55,793 B**, `/*! tailwindcss v4.3.3 */`, sha256 `90b07b08…`                                                            |
| behaviour kit `…_lang.BLoalVWc.js`       | 200, **16,233 B** (identical to the Nightshift/Drainwise/Metroflow preps), sha256 `e26cc055…`                                 |
| router `…CYDbzu1r.js`                    | 200, **16,357 B** (same house router as every sibling)                                                                        |
| inline `<script>` bodies                 | **2** (theme 454 B · preloader teardown 370 B) — **no page logic**                                                            |
| logo                                     | `assets/img/logo.svg` (dark on light, header light theme) + `assets/img/logo-light.svg` (header dark theme **and** footer); natural **150 × 32**, header renders **h-8** → 32 px tall (`lg:h-9` → 36), footer **h-10** → 40 px |
| content images                           | **1** — `assets/img/liner-panel.svg` (**1,507 B**, `viewBox 0 0 800 600`), a **drawn cross-section** panel, rendered **576 × 432**, radius 16 |
| favicon / OG                             | `favicon.svg`; `og:title`, `og:description`, `og:type`, `og:site_name`, `og:image=/og-image.jpg`; **no canonical**; `<meta name="robots" content="noindex, nofollow">` |
| inner routes                             | **7** top-level, all 200 with trailing slash, **308** without (see §Inner-page inventory)                                      |
| document height                          | **7,955 px** at 1440 × 900; 7,727 at 1600; 8,291 at 1024; 9,473 at 768; 12,592 at 390; 13,659 at 320                          |
| anchors                                  | **43** `a[href]` — 29 path links, 3 `#compare`-with-path, 2 `#service-areas` (**dead id**), 3 bare `#`, 1 skip-link `#main-content`, 6 `tel:` (one malformed), 1 `mailto:` |
| inline `<svg>`                           | **46** (0 icon font, 0 sprite sheet); 20 are testimonial stars, 2 the carousel arrows                                          |
| headings                                 | 1 × `h1`, 9 × `h2` (the hero card owns one), 14 × `h3`                                                                        |
| structure                                | **464** `class="…"` attributes, **344** distinct utility names, **18** ids, 3 `<input>` + 1 `<select>` (8 `<option>`) + 14 `<button>` |

## Design tokens (measured from `Base.C5mjsadR.css`, 55,793 B, and from `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal hex values** in
> the compiled utilities, so the sheet contains **no `--color-ink-*` or `--color-primary-*` custom
> properties at all** (only Tailwind's generated `:root` defaults such as `--color-white` and
> `--color-gray-50`). The ramps below were reconstructed by parsing every `*-ink-<n>` / `*-primary-<n>`
> utility rule — that is the authority, and the values are complete 10-step ramps. Declare them in the
> app's own `@theme`.

### `ink` — warm-grey neutral ramp (all structure)

| step | hex       | used for                                                                                       |
| ---- | --------- | ---------------------------------------------------------------------------------------------- |
| 50   | `#f6f6f4` | hero ground, `#why-us` ground, `bg-ink-50/60` zebra rows in `#compare`                          |
| 100  | `#ebebe7` | every hairline on a light band, `#services` grid background (draws the 1 px dividers), header border |
| 200  | `#d6d6ce` | form field borders, comparison-table outer border, sticky-call-bar border                        |
| 300  | `#b2b2a6` | input placeholder text                                                                          |
| 400  | `#848475` | fine print (`#compare` footnote, `#services` sample-price note, figure caption), inactive column label |
| 500  | `#636356` | every paragraph on a light band                                                                 |
| 600  | `#4a4a40` | desktop nav labels                                                                              |
| 700  | `#383830` | form labels, `#areas` town text, hero tick text                                                 |
| 800  | `#242420` | **licence bar ground**, every heading on a light band, the emphasized comparison cell             |
| 900  | `#161614` | panel ground inside `liner-panel.svg` (`fill="#161614"`)                                        |

### `primary` — terracotta ramp (CTAs, eyebrows, bands)

| step | hex       | used for                                                                                        |
| ---- | --------- | ----------------------------------------------------------------------------------------------- |
| 50   | `#fbf4ef` | hover ground of the white buttons (`hover:bg-primary-50`)                                        |
| 100  | `#f5e5d9` | testimonial badge pill, avatar discs, `#contact` lead text (`text-primary-100`)                   |
| 200  | `#e9c8b1` | `border-primary-200` (sheet only; no markup use on this page)                                    |
| 300  | `#dba582` | dark-mode link/label accents (`dark:text-primary-300`)                                            |
| 400  | `#c97f55` | **testimonial stars**, `dark:text-primary-400` for eyebrows/step numbers/prices                   |
| 500  | `#b4643b` | focus rings (`ring-primary-500`, `ring-primary-500/20`) and the liner fill inside the SVG          |
| 600  | `#974e2c` | **every solid CTA**, `#emergency` ground, scroll-progress bar, back-to-top disc, `h1` accent span  |
| 700  | `#7b3f26` | **`#contact` ground**, every eyebrow on a light band, every service price line, `#emergency` button label |
| 800  | `#653624` | hover only (`hover:bg-primary-800` in the sheet)                                                  |
| 900  | `#553021` | dark-mode pill grounds (`dark:bg-primary-900`)                                                    |

### Stock Tailwind greys (only `#testimonials`, `#faq`, the footer and the chrome)

`gray-50 #f9fafb` (`#testimonials` ground) · `gray-100 #f3f4f6` (FAQ icon disc, Decline button hover) ·
`gray-200 #e5e7eb` (FAQ divider, cookie-strip border) · `gray-300 #d1d5db` (inactive carousel dots,
Decline border) · `gray-400 #9ca3af` (dark-mode body text, footer body) · `gray-600 #4b5563` (testimonial
lead and location, cookie copy) · `gray-700 #374151` (footer newsletter input border) · `gray-800 #1f2937`
(footer social chips and input ground, dark-mode cards) · `gray-900 #111827` (**footer ground**, body text
colour, `#testimonials`/`#faq` headings) · `gray-950 #030712` (dark-mode body and dark:bg-gray-950 bands).
`amber-400` (oklch 82.8 % .189 84.429 → `#fbbf24`) is used for exactly **two** star rows: the licence bar's
single star and the hero's five stars. The testimonial stars are **`primary-400` `#c97f55`**, not amber.

### Dark mode (`.dark` on `<html>`, measured by clicking the toggle and re-reading `getComputedStyle`)

| surface                          | light                     | dark (`<html class="dark">`)            |
| -------------------------------- | ------------------------- | --------------------------------------- |
| `<body>`                         | `#ffffff`, text `#111827`  | `#030712`, text `#f3f4f6`               |
| hero band                        | `#f6f6f4`                  | `gray-900` `#111827`                    |
| `#compare` / `#process` / `#services` / `#areas` / `#faq` | `#ffffff` | `gray-950` `#030712`       |
| `#why-us`                        | `#f6f6f4`                  | `gray-900` `#111827`                    |
| `#testimonials`                  | `gray-50` `#f9fafb`        | `gray-900` `#111827`                    |
| `#contact`                       | `primary-700` `#7b3f26`    | **unchanged** `#7b3f26`                 |
| `#emergency`                     | `primary-600` `#974e2c`    | **unchanged** `#974e2c`                 |
| footer                           | `gray-900` `#111827`       | **unchanged** `#111827`                 |
| quote card                       | white, border `#ebebe7`    | `gray-900` `#111827`, border `#1f2937`   |
| header                           | `white/90`                 | `gray-950/90`                            |
| headings / paragraphs            | `#242420` / `#636356`      | `#ffffff` / `#9ca3af`                    |

The theme is resolved **before first paint** by the inline 454 B script and persisted in
`localStorage.theme` (`'dark'` / `'light'`); with no stored value it follows `prefers-color-scheme`.

### Typography (measured)

| role                | size / line-height / weight | tracking   | colour (light)          |
| ------------------- | --------------------------- | ---------- | ----------------------- |
| `h1`                | 60 / 66 / 700 (`sm` 48, base 36) | `−1.5 px` | `ink-800` `#242420`     |
| `h2`                | 36 / 40 / 700               | `−0.9 px`  | `ink-800` (or `gray-900` in `#testimonials`/`#faq`) |
| `h3` (steps, cells) | 18 / 28 / 700               | `−0.45 px` | `ink-800`               |
| lead paragraph      | 18 / 28 / 400               | 0          | `ink-500` `#636356`     |
| body paragraph      | 16 / 24 / 400               | 0          | `ink-500`               |
| eyebrow             | 14 / 20 / 700 uppercase     | `+0.35 px` | `primary-700` `#7b3f26` |
| nav label           | 14 / 20 / 600               | 0          | `ink-600` `#4a4a40`     |
| licence bar         | 12 / 16 / 400 (facts 600)   | 0          | `ink-100` `#ebebe7`     |
| testimonial quote   | 18 / 28 / **500**           | 0          | `gray-900` `#111827`    |
| FAQ question        | 18 / 28 / 600               | 0          | `gray-900` `#111827`    |

`font-family: Inter, system-ui, sans-serif` on `html`; body 16/24. `.font-display` = `Fraunces, Georgia,
serif` — **0 elements use it**; the serif renders only inside `liner-panel.svg`. Numerals that sit in a
column (process steps `01`–`04`) carry `tabular-nums`.

### Radii, shadows, spacing, container

- radii: `--radius-lg` **8 px** (buttons, fields, social chips), `--radius-xl` **12 px** (sheet only),
  `--radius-2xl` **16 px** (hero card, comparison wrapper, services wrapper, why-us figure, testimonial
  cards, FAQ? no — FAQ has none).
- shadows: `shadow-md` on the hero card (`0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a`),
  `--shadow-soft: 0 4px 16px -4px #0000001a` (testimonial cards), `shadow-soft-lg`/`hover:shadow-xl`
  (`0 12px 32px -8px #00000024`) on hover, `shadow-lg` on the header past 50 px of scroll, arrows and the
  back-to-top disc.
- `.section { padding-block: 5rem }` → `lg: 7rem` (**80 / 112 px**); hero container `py-14` → `lg:py-20`.
- `.container { width: 100% }`, max **1280 px** (80 rem) from `lg`, padding-inline **32 px** (48 px at
  `2xl`) — measured content width **1,216 px** at 1440 with `px-8`.
- `.card` = radius 16 + white + `p-6` + `shadow-soft`, hover `shadow-soft-lg`; `.btn` = radius 8 +
  `px-5 py-2.5` + 14/500 (the page's own buttons are 16/700 with `px-6 py-3.5`, so the utility classes win).

## Reference document order

`licence bar` → `header` → `hero + #quote card` → `#emergency` → `#compare` → `#process` → `#services` →
`#why-us` → `#areas` → `#testimonials` → `#faq` → `#contact` → `footer`, plus five fixed/overlay pieces
(`#preloader`, `#scroll-progress`, skip link, sticky call bar `< lg`, cookie strip, back-to-top) that sit
outside the flow.

## Band-by-band content (the reference's real copy — reproduce order, paraphrase lightly)

### 0 — Licence bar (37 px, `#242420`)

`[data-licence-bar]` — a `div.w-full.border-b`, ground `bg-ink-800`, text `bg-ink-100`, `h-9` (36 + 1 px
border = **37 measured**), 12 px inside a 1,280 px container. Left `<ul>` (`min-w-0`, `overflow-hidden`,
`gap-x-4`):

1. `Licence` (70 % opacity) + **`FL CFC #0000000`** (semibold)
2. `Liner manufacturer certified` — `hidden sm:flex`
3. `Serving` (70 %) + **`Hillsborough & Pinellas`** — `hidden sm:flex`

Right `<p>` (shrink-0, `font-medium`): one `amber-400` star, **`4.9`**, then
`180+ reviews  on Google (sample)` at 70 % opacity (the double space is in the reference markup).
**At 390 px the left list is clipped, not wrapped** (`overflow-hidden`
on the `ul`): measured, the bar reads `Licence FL CFC #` and the rating still takes the right third. That
truncation is reference behaviour (§Known defects item 8): a recreation should let the facts wrap or drop
cleanly instead.

### 1 — Header (81 px, `sticky`, `bg-white/90` + `backdrop-blur-lg`)

`sticky top-0 z-50`, 1 px bottom border `ink-100`, `h-16 lg:h-20` (**65 px** below `lg`, **81 px** at and
above `lg`). Contents:

- **logo** `<a href="/">` + two `<img>` (dark-on-light shown, `logo-light` in dark mode), `h-8 lg:h-9`.
- **desktop nav** `hidden xl:flex gap-7` (**≥ 1280**) — six labels 14/600 `ink-600`:
  `How it works` (`/how-it-works`), `Compare` (`/#compare`), `Services`, `Service areas`, `About`,
  `Contact`. Every one carries `data-nav-link` with a **route** value (`/how-it-works`, `compare`,
  `/services`, …), which is why the scrollspy never activates (§Known defects item 5).
- **actions** (right, `gap-2`): city pill `hidden 2xl:block` → `Tampa, FL` linking `#service-areas`
  (**a dead id**, §Known defects item 1); phone pill `hidden md:block` → `tel:5550700700`,
  `(555) 070-0700`; dark toggle `[data-dark-toggle]`; **CTA** `Book a camera survey`
  (`hidden xl:inline-flex`, `bg-primary-600`, white, radius 8, `px-5 py-2.5`, 14/700); hamburger
  `[data-mobile-toggle]` `xl:hidden` with `aria-expanded="false"`.
- **mobile panel** `[data-mobile-menu]` (`hidden xl:hidden`): six full-width 16/600 rows `py-3`, then a
  wrapping row with the phone pill and the city pill, then a full-width CTA `Book a camera survey`.

Two long HTML comments ship **inside** the header and explain the two breakpoints — copy their intent into
the app (not the text): *the nav switches on at `xl`, not `lg`, because a six-item nav plus phone pill,
theme toggle and CTA does not fit until ~1280*, and *the city pill is held to `2xl` because a long city
string ("Colorado Springs, CO") collides at 1280*.

### 2 — Hero + `#quote` survey card (668 px, `#f6f6f4`)

Container `py-14 lg:py-20` → **80 px** vertical at 1440; 12-column grid, `gap-10 lg:gap-16` (**64 px**),
copy in `lg:col-span-7` (**683 px** measured) with `lg:pt-6` (**24 px**), card in `lg:col-span-5`
(**469 px**). Copy:

- eyebrow `Tampa · Licensed CFC contractor`
- `h1` — **"Fix the pipe. <span>Keep the driveway.</span>"** (the span is `primary-600` `#974e2c`; wraps to
  two lines at 1440, `h1` box 683 × 132)
- lead — *"Most collapsed sewer lines under a Tampa house can be relined from two small access points. No
  trench across the lawn, no three days of a machine on your drive, and the oak stays where it is."*
- rating line — five `amber-400` stars, **`4.9`** (bold), `180+ reviews on Google · sample data` at 80 %
- four ticked promises (`ul`, `mt-8`, `sm:grid-cols-2`, gap 12): *Camera survey before anyone quotes a
  repair* · *You see the footage, not a description of it* · *We will tell you when digging is the better
  answer* · *Fifty-year liner warranty in writing*

**The card** `#quote`: white, radius 16, 1 px `ink-100`, `shadow-md`, `p-6 lg:p-8` → measured **469 × 508**.

- `h2` 20/700 (`lg` 24) — **"Book a camera survey"**
- `p` 14 `ink-500` — *"Three fields. We reply within the hour on weekdays."*
- `<form>` `space-y-4` `action="#"` `method="post"` `data-form` (**inert**, §Known defects item 2):
  1. label `Your name` + `input[type=text][name=name][required]` placeholder `First and last name`, `mt-1.5`,
     radius 8, `px-4 py-3` (**403 × 50** measured), 16 px
  2. label `Phone` + `input[type=tel][name=phone][required]` placeholder `(555) 000-0000`
  3. label `What is happening?` + `select[name=problem][required]` with a placeholder option
     `Choose the closest match` and seven values: `Sewage backing up`, `Repeated blockages`,
     `Slow drains across the house`, `Roots in the line`, `Wet patch or sinkhole in the yard`,
     `Failed inspection on a sale`, `Something else`
- submit — full width, `bg-primary-600`, white, 16/700, radius 8, `py-3.5` (**403 × 52**), label
  **"Book the survey"**
- footnote — 12 px `ink-400`, centred: *"No obligation. The footage is yours whether or not you hire us."*

Field styling: border `ink-200`, `px-4 py-3`, 16 px, placeholder `ink-300`; focus `border-primary-500` +
`ring-2 ring-primary-500/20`.

### 3 — `#emergency` (164 px, `#974e2c`)

The page's only strip with no heading. `container py-6 lg:py-8`, `flex-col lg:flex-row
lg:items-center lg:justify-between`, white text:

- left: a **pulsing dot** (`relative flex h-2 w-2` + `animate-ping` on a `bg-current` twin) then
  `Sewage backing up? Call today` (14/600 uppercase, 90 % opacity); `p` 18/700 (`lg` 20) —
  *"We clear and camera the same day, then quote the repair properly."*; then 14 px at 90 % —
  *"Clearing the blockage and diagnosing the cause are two different jobs. We do the first today so you can
  use the house, then show you the camera footage before anyone talks about a repair."*
- right: a **white pill**, full radius, `px-6 py-3`, 18/700 `primary-700`, `hover:bg-primary-50`, with a
  phone glyph and `(555) 070-0700` — **215 × 52 measured**, the only full-radius button on the page.

Directly after it in the DOM (still inside `<main>`): the **sticky call bar** `[data-sticky-call]` —
`fixed inset-x-0 bottom-0 z-40 lg:hidden`, white, `border-t ink-200`, `p-3`, containing a full-width
`primary-600` pill: `Sewage backing up? Call today · (555) 070-0700`. Measured **97 px** tall at 390.

### 4 — `#compare` (1,371 px, white) — the design's argument

`section` (112 px padding). Header block `max-w-2xl`: eyebrow `The decision`; `h2` **"Relining against
digging, row by row"**; lead — *"Both are real repairs and we do both. This is the comparison we would want
if it were our house, including the rows where the digger wins."*

Then a wrapper `mt-10 overflow-hidden rounded-2xl border border-ink-200` containing:

- **column header row** — `hidden md:grid md:grid-cols-12 md:gap-6`, ground `ink-50`, `px-6 py-4`,
  1 px bottom border, **53 px measured**; spans: 4 empty, 4 `Relining` (14/700 `primary-700`),
  4 `Open cut` (14/700 `ink-600`). Hidden below `md`, where each row labels itself.
- **nine rows**, each `grid gap-3 px-6 py-5 md:grid-cols-12 md:gap-6` (**88 px** measured), every odd row
  (2nd, 4th, …) carrying `bg-ink-50/60`. Each row: label (`md:col-span-4`, 16/600 `ink-800`), then two
  cells (`md:col-span-4`) whose mobile-only label is `text-xs font-bold uppercase` (`Relining` in
  `primary-700`, `Open cut` in `ink-400`), then the cell text. **Exactly one cell per row is
  `font-semibold ink-800`; the other is `ink-500`.** The nine rows, with the bolded side:

| # | row (label)                      | relining (bold ✓)                                                              | open cut (bold ✓)                                                        |
| - | -------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 1 | Days on site                     | ✓ *One day for most laterals, two if there are several bends.*                  | *Two to five, longer if the run passes under a drive or a wall.*         |
| 2 | What happens to the surface      | ✓ *Two access points, usually under a metre square each.*                       | *A trench the length of the pipe, plus room for spoil and the machine.*  |
| 3 | Reinstating the surface          | ✓ *Nothing to reinstate beyond the access points.*                              | *Driveway, path or lawn rebuilt. Often the largest line on the invoice.* |
| 4 | Mature trees                     | ✓ *Roots are cut out of the pipe and the root plate is left alone.*             | *A trench within the root plate can kill a mature tree two seasons later.* |
| 5 | Headline price                   | *Higher per foot before reinstatement is counted.*                              | ✓ *Lower per foot, and genuinely cheaper on a short run in open ground.* |
| 6 | A collapsed or badly offset pipe | *A liner needs a host pipe. Where there is nothing left to line, it is not an option.* | ✓ *Works regardless of what is left, which is sometimes the whole point.* |
| 7 | Changing the route or the fall   | *Follows the existing pipe exactly, including a bad gradient.*                   | ✓ *The only way to correct a fall or move a line.*                       |
| 8 | Life expectancy                  | *Fifty-year liner warranty, jointless, so roots have nothing to enter.*          | *Comparable with modern pipe, with joints that roots can eventually find.* |
| 9 | Disruption to neighbours         | ✓ *A van and a small rig for a day.*                                            | *Machine, spoil heap and usually a shared drive blocked.*                |

**Row 8 is deliberately neutral — neither cell is bold.** That is how the footnote's arithmetic works out:
*"On this comparison relining wins 5 rows and open cut wins 3. We do both, and which one we quote depends on
your pipe rather than on which pays better."* (5 bold-relining + 3 bold-open-cut + 1 neutral = the nine rows
on the page. A test can assert exactly this.)

Below the table, inside the wrapper: the counting note (14 px `ink-500`, `max-w-3xl`) and fine print (14 px
`ink-400`, `mt-3`): *"Figures are illustrative for a typical single-family lateral in this region. Your
pipe, its depth and what is on top of it change all of them."*

### 5 — `#process` (780 px, white) — four steps in a three-column grid

Header block `max-w-2xl`: eyebrow `How a job goes`; `h2` **"Nobody quotes a repair before the camera"**;
lead — *"Four steps, and you can stop after the second with the footage in hand."*

`<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">` with **four** `<li>` → **3 + 1 at every width from
640 up** (measured: x = 112 / 525 / 939, then 112 on the next row; each **389 px**). Each item:

- a `flex items-baseline gap-3` head: the number `01`–`04` (14/700 `primary-600`, `tabular-nums`) and a
  `h-px flex-1 bg-ink-100` rule
- `h3` 18/700 `ink-800`
- body 16 `ink-500`
- a timing tag, 14/600 `primary-700`

Copy: **01 Clear it, if it needs clearing** — *"If sewage is backing up we deal with that today. You cannot
make a decision about a repair while the house is unusable."* → `Same day`; **02 Camera survey and a
recording** — *"We run the camera the length of the line, measure the depth and mark the faults on a plan.
You get the recording, not a summary of it."* → `60 to 90 minutes`; **03 You get both prices** — *"Relining
and open cut, itemised, with reinstatement included in the dig price so the comparison is real."* →
`Within 1 working day`; **04 We do the work** — *"Most laterals are a one-day reline. We camera it again
afterwards and that recording is yours too."* → `Usually 1 day`.

### 6 — `#services` (927 px, white) — six cells, hairline dividers

Header block: eyebrow `What we do`; `h2` **"Trenchless, and the things around it"**; lead — *"Relining is
one method among several. Which one we quote depends on your pipe."*

Wrapper: `mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2
lg:grid-cols-3` — **the 1 px `gap` over an `ink-100` ground is what draws the dividers** (measured wrapper
ground `#ebebe7`, cells **404 × 232**, `p-6 lg:p-8`). Each cell is `flex flex-col bg-white`, so the six
tiles read as one ruled plate. Cells: `h3` 18/700, blurb `mt-2 flex-1` 16 `ink-500` (**`flex-1` keeps the
price lines on one baseline**), price `mt-4` 14/700 `primary-700`.

| cell                            | blurb                                                                                                  | price line         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------ |
| Cured-in-place lining           | A resin liner pulled through the existing pipe and cured in place, forming a new jointless pipe inside the old one. | `From $135 per foot` |
| Pipe bursting                   | For pipes too far gone to line. The old pipe is split outwards and a new one pulled through behind it, with two access pits rather than a trench. | `From $165 per foot` |
| Camera survey and report        | The recording, a plan with the faults marked, and depths. Yours to keep and to show another contractor. | `From $295`        |
| Hydro jetting and root cutting  | Clearing what is in the pipe before anything is decided. On a line with years left in it, sometimes this is the whole job. | `From $395`        |
| Spot repairs                    | A short liner over a single fault where the rest of the run is sound. The cheapest honest answer when it applies. | `From $1,450`      |
| Open cut replacement            | We dig when digging is right: collapsed lines, bad gradients and reroutes. Reinstatement is quoted in, not added afterwards. | `Quoted after survey` |

Footnote (`mt-6`, 14 px `ink-400`): *"Starting prices are sample data for demonstration. Replace with your
own before launch."*

### 7 — `#why-us` (864 px, `#f6f6f4`) — the drawn pipe panel and four rules

`grid items-center gap-12 lg:grid-cols-2 lg:gap-16`. The `<figure>` is **`order-last lg:order-first`** — so
the panel sits on the **left** at 1440 and **below** the copy on mobile.

- figure: `img` `assets/img/liner-panel.svg`, rendered **576 × 432** (`w-full rounded-2xl object-cover`),
  `loading="lazy"`, `alt` "A diagram of a liner inside an existing pipe, with two access points". The artwork
  is a **drawn cross-section on a near-black panel**: outer plate `#242420` (radius 24) on a `#161614`
  ground, title "A pipe inside the pipe" in **Fraunces 26/700 white**, a grey `#4A4A40` ground-level bar
  labelled "Ground level" (`#848475`), the old pipe as `#383830` with a `#B4643B` cured liner inside it and a
  `#161614` bore, two white `#F6F6F4` access shafts labelled "access point", and a two-item legend
  (`#383830` "the old pipe, left in the ground" · `#B4643B` "the cured liner, jointless"). **Redraw it; do
  not photograph it** — it is 1.5 KB of rectangles and text, and it is the only image on the page.
- `figcaption` (`mt-3`, 14 px `ink-400`): *"Replace with a still from one of your own camera surveys before
  launch. It is the most persuasive image this business has."*
- copy column: eyebrow `Why us`; `h2` **"We will talk you out of the expensive one"**; lead — *"Relining
  pays us better than jetting. That is exactly why the camera comes before the quote."*; then a `<dl>`
  (`mt-8 space-y-6`) of **four** entries, each `border-l-2 border-primary-600 pl-5` (measured 2 px `#974e2c`,
  **576 px** wide, heights 100 / 100 / 76 / 76): `dt` 16/700 `ink-800`, `dd` 16 `ink-500`.

  1. **The footage is yours** — *"Recording and plan, sent to you, whether or not you hire us. Take it to
     two other contractors. We would rather compete on the same evidence than on who describes it most
     alarmingly."*
  2. **Both prices, every time** — *"Reline and open cut, with reinstatement included in the dig figure. A
     trenchless quote that hides the cost of putting your driveway back is not a comparison."*
  3. **Sometimes the answer is jetting** — *"Plenty of lines we survey have years left and need clearing
     rather than replacing. We say so, and it costs us the bigger job."*
  4. **We camera it afterwards too** — *"The same line, filmed again after the work, sent to you with the
     warranty. Very little in this trade is checkable. This is."*

### 8 — `#areas` (468 px, white) — twelve towns

`grid gap-10 lg:grid-cols-12 lg:gap-16`; left `lg:col-span-5` (**no eyebrow** — the one band whose heading
has none): `h2` **"Where we work"** + lead — *"Hillsborough and Pinellas counties. The rig travels, but a
same-day camera survey realistically reaches the towns on this list."*; right `lg:col-span-7`:
`ul.grid grid-cols-2 gap-x-6 sm:grid-cols-3` of **twelve** `<li>` (16 px `ink-700`, `border-b border-ink-100`,
`py-2.5` → 10 px, measured 3 × 211 px at 1440): Tampa · St. Petersburg · Clearwater · Brandon · Riverview ·
Temple Terrace · Plant City · Largo · Pinellas Park · Lutz · Valrico · Apollo Beach. Below
(`mt-6`, 14 px `ink-500`): *"Replace this list with your own towns. Written as plain text it is the cheapest
local search signal a trade site has."*

### 9 — `#testimonials` (768 px, `gray-50`) — a carousel that is static at 1440

Note the **stock-grey palette**: `bg-gray-50 py-20 lg:py-28`, headings `gray-900`, lead `gray-600`.
Header `mx-auto max-w-3xl text-center`: badge pill (`bg-primary-100` `#f5e5d9`, text `primary-700`,
14 px, `px-3 py-1`, radius full) reading **`Reviews`** — the eyebrow is a *pill* here, not uppercase text;
`h2` **"What people say afterwards"**; lead — *"Sample reviews for demonstration. Replace with your own,
ideally pulled from Google."*

Carousel `[data-carousel]` (`relative mt-16`): `overflow-hidden` → `flex transition-transform duration-500
ease-out` track → **three** `[data-carousel-slide]` (`flex-shrink-0 px-3`). Each card: white, radius 16,
`p-8`, `shadow-soft` (**381 × 320** measured at 1440), five `primary-400` stars, then a `blockquote`
18/28 **500** `gray-900` with typographic quotes, then `mt-6` a **48 px** avatar disc (`h-12 w-12`,
`rounded-full`, `bg-primary-100`, `text-primary-600`, the initial) beside the name (16/600 `gray-900`) and
location (14 `gray-600`).

| # | quote (abridged)                                                                                      | name          | location         |
| - | ----------------------------------------------------------------------------------------------------- | ------------- | ---------------- |
| 1 | "Two companies quoted to dig up the drive. Nodig put a camera down, showed me it was roots at one joint, cut them out and lined eight feet. A fifth of the price." | Marguerite O. | Seminole Heights |
| 2 | "They told me my line was too far gone to reline and quoted the dig. I appreciated that more than the work." | Danny K.      | Brandon          |
| 3 | "The before and after footage arrived by email with the warranty. I have never had a contractor hand me evidence before." | Priya S.      | Clearwater       |

Controls: two absolutely-positioned 36 px white discs (`-left-4` / `-right-4`, `top-1/2`, `shadow-lg`,
`lg:flex`) and an **empty** `[data-carousel-dots]` container (`mt-8 flex justify-center gap-2`) that the kit
fills. Geometry at each width (measured): **3 slides per view at ≥ 1024** → max index 0 → **0 dots and both
arrows `display: none`**; **2 per view at 640–1023** → 2 dots, arrows visible (the kit inline-styles
`display:flex`, which **beats the `hidden lg:flex` class**); **1 per view below 640** → 3 dots, arrows
visible. Active dot is a **32 px pill** (`w-8 bg-primary-600`), inactive dots are **10 px** (`w-2.5
bg-gray-300`); the track moves by one slide width per click (`translateX(-358px)` at 390).

### 10 — `#faq` (820 px, white) — five answers

Head block centred `max-w-3xl`: pill **`Questions`**, `h2` **"Before you decide"**, lead — *"The things
people ask once they have two very different quotes in front of them."* List `mx-auto mt-16 max-w-3xl` of
five rows inside `divide-y divide-gray-200`: each row `py-6` (**81 px closed**, measured), a
`button[data-faq-toggle]` (full width, `flex items-center justify-between text-left`) with the question
(18/600 `gray-900`) and a **32 px** disc (`bg-gray-100`, `data-faq-icon`) holding a plus; then the panel
`div.overflow-hidden.transition-all.duration-300` with inline `max-height: 0px; opacity: 0;`.

Questions and answers:

1. **Is relining always cheaper?** — *"No. On a short run in open ground with nothing on top of it, digging is
   often cheaper and we will say so. Relining wins when the pipe runs under a driveway, a slab, a mature
   tree or a neighbour's access, because that is where reinstating the surface costs more than the pipe."*
2. **How long does a liner last?** — *"The manufacturer warranty on the liners we fit is fifty years. The more
   useful point is that it is jointless, and joints are where roots get in, so the failure mode that put you
   here does not apply to it."*
3. **Does it make the pipe narrower?** — *"Slightly, and it does not matter. The liner is a few millimetres
   thick and its inside surface is far smoother than old clay or cast iron, so flow is usually better
   afterwards, not worse."*
4. **Can you line any pipe?** — *"No. A liner needs a host pipe to form against. If the line has collapsed, is
   badly offset or has lost its shape, there is nothing to line and we will quote the dig instead."*
5. **Will you fix a bad gradient?** — *"Not by relining. A liner follows the existing pipe exactly, including a
   fall that is too shallow. Correcting a gradient means digging, and any company telling you otherwise is
   selling you a repair that will back up again."*

Behaviour (measured): **one open at a time** — opening a second row closes the first; the panel's
`max-height` is set to its own `scrollHeight` (184 / 136 / 112 px seen), `opacity` to 1, and the plus
rotates **45°**.

### 11 — `#contact` (440 px, `#7b3f26`) — the closing band

Centred `max-w-3xl`: `h2` 36/40 700 white — **"Two quotes that do not agree?"**; lead 18 `primary-100`
(`#f5e5d9`), `max-w-xl`, `mt-5` — *"Book the camera survey and we will send you the footage, both prices
and an honest recommendation."*; then `mt-10 flex flex-col sm:flex-row gap-4`:

- **white** button → `/contact`, radius 8, `px-8 py-4`, 16/700, label `primary-700`, **240 × 56**
- **outline** button → `tel:5550700700`, radius 8, **2 px** `white/40` border, `px-8 py-4`, 16/700 white,
  **255 × 60**, with a phone glyph, label `Call (555) 070-0700`

### 12 — Footer (567 px, `#111827`, `pt-16 lg:pt-24`)

`grid gap-12 lg:grid-cols-12 lg:gap-8`:

- **brand** `lg:col-span-4`: `logo-light.svg` (`h-10` → 40 px), blurb (`mt-4 max-w-xs`, `gray-400`) —
  *"Trenchless sewer and drain repair in Tampa. We reline the pipe you have instead of removing your
  driveway, and we say when digging is the better answer."*; three social chips (`mt-6 flex gap-4` — radius 8,
  `bg-gray-800`, `p-2.5`, 20 px glyphs: Twitter · Instagram · LinkedIn, **all `href="#"`**); contact block
  (`mt-6 space-y-2 text-sm`) — `3110 North Florida Avenue, Tampa, FL 33603` ·
  `tel:(555) 070-0700` (**malformed URI**) · `office@nodigrelining.example`.
- **three link columns** `sm:grid-cols-3` inside `lg:col-span-5`, each with a 14/600 uppercase
  `tracking-wider` white `h3` and `mt-4 space-y-3` links (`gray-400`, hover white):
  **Services** — Pipe relining · Pipe bursting · Camera surveys · Open-cut replacement (all → `/services`);
  **Company** — How it works · Compare methods (`/#compare`) · Service areas · About; **Support** — Contact ·
  Privacy · Terms.
- **newsletter** `lg:col-span-3`: `h3` **Stay Updated**, blurb — *"Seasonal maintenance reminders and
  plain-English notes on what actually needs doing before winter."*, then a `flex gap-2` row: email input
  (`bg-gray-800`, border `gray-700`, `px-4 py-2.5`, placeholder `Enter your email`, `required`) and a
  `Subscribe` button (`primary-600`, `px-4 py-2.5`, `font-medium`). **No `action`, no handler**
  (§Known defects item 3).
- **bottom bar** `mt-16 flex-col sm:flex-row border-t border-gray-800 py-8`: `© 2026 Nodig Pipe Relining. All
  rights reserved.` (14 `gray-500`) and `Privacy Policy` / `Terms of Service` (`gap-6`, 14 `gray-500`).

**The footer is where the reference overflows horizontally** (measured 401 px document width at 320 *and*
390 — see §Known defects item 7). Reproduce the layout, not the overflow.

## Behaviour the recreation must reproduce

### The house kit (16,233 B) — which handlers this page actually uses

The bundle is shared with every design in this 2026 family and binds by **attribute or id**, so a page only
gets the behaviours whose hooks it ships. This page uses:

| hook                          | behaviour (read from the bundle, verified in the browser)                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `[data-dark-toggle]`          | toggles `.dark` on `<html>`, writes `localStorage.theme` = `'dark'` / `'light'`                               |
| `[data-mobile-toggle]` / `[data-mobile-menu]` | flips `aria-expanded`, toggles `hidden` on the panel, swaps the glyph between ☰ and ✕           |
| `[data-header]`               | adds `shadow-lg` once `scrollY > 50`                                                                          |
| `[data-animate]` + `[data-delay]` | below 80 % of the viewport at load: `opacity: 0`, `translateY(20px)`, `transition 0.6s ease-out`, delay = `data-delay` ms; an `IntersectionObserver` (`threshold .1`, `rootMargin 0 0 -10%`) reveals each once. **Bails out entirely under `prefers-reduced-motion: reduce`** |
| `[data-carousel]` + `-track` / `-slide` / `-dots` / `-prev` / `-next` | per-view **1 / 2 / 3** at `<640 / ≥640 / ≥1024`; max index `slides − perView`; moves `translateX(−index × slideWidth)`; builds dots only when `max > 0`; **inline-styles the arrows' `display`** |
| `[data-faq-toggle]` + `[data-faq-icon]` | single-open accordion; `max-height` = panel `scrollHeight`, `opacity` 1, icon `rotate(45deg)`; closes siblings |
| `[data-cookie-accept]` / `-decline` | reveals `#cookie-consent` after **1,500 ms** (`translateY(0)` → `translateY(100%)` on choice); stores `accepted` / `essential` |
| `#scroll-progress`            | sets `width` = `scrollY / (scrollHeight − innerHeight) × 100 %`                                               |
| `#back-to-top`                | past **300 px** of scroll: `opacity 1`, `pointer-events auto`, `translateY(0)`; else the reverse; click → smooth top |

Handlers in the bundle that this page **never triggers** (do not port them): pricing toggle, blog
filter/search, typewriter, counters, lightbox, video modal, form validation/toast, parallax, `accordion`
(separate from FAQ), billing toggle.

### Chrome geometry

- `#preloader`: `fixed inset-0 z-[100]`, white (dark: `gray-950`), a 40 px `animate-spin` ring with a
  `primary-600` top border; the inline 370 B script fades it (`opacity 0`, 300 ms) on `load` and removes it.
- `#scroll-progress`: `fixed top-0 left-0 z-[60] h-0.5` (**2 px**) `bg-primary-600`, inline `width: 0%`.
- skip link: `sr-only focus:not-sr-only` → `#main-content`, `focus:bg-primary-600`, `focus:px-4 py-2`.
- `#back-to-top`: 48 px disc, `primary-600`, `shadow-primary-600/25`, `bottom-6 right-6`, inline
  `opacity: 0; pointer-events: none; transform: translateY(16px)`.
- `#cookie-consent`: `fixed bottom-0 inset-x-0 z-50`, white, `py-4 sm:py-6`, `role="dialog"`,
  `aria-label="Cookie consent"` , inline `transform: translateY(100%)`; copy — *"We use cookies to enhance
  your experience. By continuing to visit this site you agree to our use of cookies."*; buttons `Decline`
  (1 px `gray-300`) and `Accept All` (`primary-600`), both radius 8, `px-4 py-2`.

## Data-attribute inventory (measured on the live index)

| attribute                | count | notes                                                                    |
| ------------------------ | ----: | ------------------------------------------------------------------------ |
| `data-animate`           | 10    | all `fade-in-up`; delays 100–300 in 50 ms steps; `#testimonials` + `#faq` heads and cards |
| `data-delay`             | 10    | paired with the above                                                    |
| `data-carousel*`         | 8     | container, track, 3 slides, dots, prev, next                             |
| `data-faq-toggle` / `-icon` | 5 / 5 | one pair per FAQ row                                                   |
| `data-dark-toggle`       | 1     | header                                                                   |
| `data-mobile-toggle` / `[data-mobile-menu]` | 1 / 1 | header + panel                                      |
| `data-header`            | 1     | sticky header                                                            |
| `data-nav-link`          | 6     | **values are routes, not ids** → the scrollspy never activates            |
| `data-phone`             | 5     | **no handler in the kit** — inert                                        |
| `data-form`              | 1     | hero survey form — **inert**, `action="#"`                               |
| `data-newsletter-form`   | 1     | footer — **inert**, no `action`                                          |
| `data-sticky-call`       | 1     | mobile call bar — **inert** (pure CSS visibility)                        |
| `data-emergency`         | 1     | **inert**                                                                |
| `data-licence-bar`       | 1     | **inert** (the kit has no such hook)                                      |
| `data-cookie-accept` / `-decline` | 1 / 1 | handled                                                        |

## Anchor map (all 43 `a[href]`)

| target                                   | count | kind                    |
| ---------------------------------------- | ----: | ----------------------- |
| `/theme/nodig/services`                  | 6     | inner page              |
| `/theme/nodig/contact`                   | 6     | inner page              |
| `tel:5550700700`                         | 5     | telephone               |
| `/theme/nodig/how-it-works`              | 3     | inner page              |
| `/theme/nodig/#compare`                  | 3     | inner page + fragment   |
| `/theme/nodig/service-areas`             | 3     | inner page              |
| `/theme/nodig/about`                     | 3     | inner page              |
| `#`                                      | 3     | **dead** (footer socials) |
| `/theme/nodig/`                          | 2     | home                    |
| `#service-areas`                         | 2     | **dead id** (city pills) |
| `/theme/nodig/privacy`                   | 2     | inner page              |
| `/theme/nodig/terms`                     | 2     | inner page              |
| `#main-content`                          | 1     | skip link               |
| `tel:(555) 070-0700`                     | 1     | **malformed** telephone |
| `mailto:office@nodigrelining.example`    | 1     | email                   |

Ids present (18): `areas`, `back-to-top`, `compare`, `contact`, `cookie-consent`, `emergency`, `faq`,
`main-content`, `preloader`, `process`, `qf-name`, `qf-phone`, `qf-problem`, `quote`, `scroll-progress`,
`services`, `testimonials`, `why-us`.

## Inner-page inventory (7 routes, all HTTP 200 with trailing slash, 2026-10-25)

Bare paths answer **308** (empty body) → always probe with the slash. These pages are the authoritative
reference for anything the single-page recreation must invent; read them before inventing copy.

| route             | bytes  | `<title>`                                                | `h1`                                     | section ids                |
| ----------------- | -----: | -------------------------------------------------------- | ---------------------------------------- | -------------------------- |
| `how-it-works/`   | 54,087 | How trenchless pipe relining works \| Nodig Pipe Relining | A new pipe, formed inside the old one    | `process`, `compare`, `faq`, `contact` |
| `services/`       | 48,226 | Trenchless and open-cut sewer repair in Tampa \| …        | Six answers, and the survey decides which | `emergency`, `contact`    |
| `service-areas/`  | 38,054 | Trenchless sewer repair across Tampa Bay \| …             | Hillsborough and Pinellas                | `service-areas`, `contact` |
| `about/`          | 40,550 | About Nodig Pipe Relining \| …                            | About Nodig Pipe Relining                | —                          |
| `contact/`        | 39,161 | Contact Nodig Pipe Relining \| …                          | Contact Nodig Pipe Relining              | —                          |
| `privacy/`        | 41,122 | Privacy Policy \| …                                       | Privacy Policy                           | —                          |
| `terms/`          | 39,921 | Terms of Service \| …                                     | Terms of Service                         | —                          |

`/theme/nodig/compare/` and `/theme/nodig/index/` are **404** — `#compare` is an in-page anchor, not a
route.

## Class census

**344** distinct class names appear in the body markup and **every one has a rule in the compiled sheet**
(0 phantom utilities — the only false negative a naive grep produces is `2xl:block`, which Tailwind escapes
as `.\32 xl\:block`). 18 ids; 464 `class` attributes; 46 inline `<svg>`; 3 `<input>`, 1 `<select>`, 14
`<button>`. Anything in the recreation that cannot be mapped to one of those 344 utilities, or to the tokens
above, is invented — check it against this list before adding it.

## Screenshot analysis (`nodig-template.jpg`)

The catalogue image is **105,548 B served as AVIF** despite the `.jpg` extension (PIL opens it after
renaming; `vision_analyze` rejects the raw file — convert with
`python3 -c "from PIL import Image; Image.open('shot.jpg').convert('RGB').save('shot.png')"`), **2400 ×
1892**.

It is **a browser-window capture on a flat grey ground** (macOS window chrome with a rounded top bar), not a
full-page capture: it stops in the hero, right below the four ticked promises. What it confirms that the DOM
alone does not make obvious:

- the **licence bar sits above the logo** and is the darkest thing on the page — a 37 px strip that reads as
  a fine-print rule, not a second nav;
- the `h1`'s **second sentence is terracotta** and wraps as **"Fix the pipe. Keep the / driveway."** — the
  colour break happens mid-phrase, not between sentences;
- the hero card's **white on `#f6f6f4`** separation is carried by the shadow and the 1 px border, not by a
  colour jump; on a laptop screen the card reads as a lifted sheet;
- the header at this width shows **six nav labels, the phone pill, the theme toggle and the terracotta CTA** —
  it is a *desktop* capture at roughly 1,440 logical px;
- there is **no photography anywhere** — the only image on the whole page is the drawn pipe panel further
  down, which the screenshot does not reach.

Do **not** adopt the grey ground or the window chrome into the app: the ground is the catalogue's own
backdrop.

## Known reference defects — measure them, do not reproduce them

1. **`#service-areas` does not exist.** Both city pills (header `2xl` pill and the mobile panel pill) link to
   it; the section is `#areas`. Map them to `#areas`.
2. **The hero survey form is inert.** `data-form` has no handler in the kit and the `action` is `"#"`, so
   submitting reloads the page with the values in the query string and no confirmation. Wire it (or make the
   submit an explicit `no-op` with a real success state) — a silent reload is the one thing a three-field
   form must not do.
3. **The footer newsletter is dead markup** — no `action`, no handler, no message. Same family trap as
   Tidewater and Nightwatch.
4. **Two dead `tel:` URIs.** The footer prints `tel:(555) 070-0700` (spaces and brackets inside the URI) while
   every other link uses `tel:5550700700`; and the JSON-LD says `+1-555-0700`, which does not match either.
   Pick one number and one format.
5. **The scrollspy never activates.** Each `data-nav-link` holds a *route* (`/how-it-works`, `compare`,
   `/services`), while the handler compares them to section ids. If the recreation implements a scrollspy,
   point it at `#compare`, `#process`, `#services`, `#why-us`, `#areas`, `#faq`, `#contact`.
6. **Three dead `#` social chips** in the footer (Twitter, Instagram, LinkedIn).
7. **The footer overflows the viewport below ~430 px, and the overflow is constant.** Measured
   `documentElement.scrollWidth` = **401 px at 320 and at 390** (client 320 / 390). Bisecting `body`'s
   children drops it back to the viewport when `<footer>` is hidden; inside the footer the culprit is the
   newsletter row: the single-column grid track resolves to **385 px** inside a **358 px** container
   (`input 268 + gap 8 + button 109`), and the grid item has no `min-w-0`. Two-pass triage matters: a naive
   "elements wider than the viewport" scan reports only carousel slides, which are clipped by
   `overflow-hidden` and are innocent.
8. **The licence bar clips instead of wrapping.** At 390 the left `<ul>` (`overflow-hidden`) cuts its own
   text mid-fact — it renders `Licence FL CFC #` — while the rating keeps a third of the bar. Let the facts
   wrap or hide whole items by breakpoint; never clip mid-token.
9. **`#process` is a four-item `<ol>` in a three-column grid** (3 + 1). Measured at 768, 1280 and 1600 — it is
   consistent, so keep it; do not "balance" it to four columns, which changes the band's rhythm.
10. **`data-phone`, `data-emergency`, `data-sticky-call` and `data-licence-bar` are dead attributes** in this
    family (no handler in the 16,233 B kit). Treat them as documentation, not behaviour.
11. **`<meta name="robots" content="noindex, nofollow">`** and **no canonical** — the live preview is a demo.
    The recreation should ship neither the noindex nor a demo caveat in `<head>`.
12. **Fraunces is loaded but no element uses it.** If the pipe panel is redrawn as inline SVG/CSS, the serif is
    needed for exactly one line of artwork text; do not apply `.font-display` to headings "because it is
    defined".

## Requirements

### Requirement 1: Page chrome (licence bar, skip link, preloader, progress bar, back-to-top, cookie strip)

The app SHALL render the fixed/licence chrome in the reference's order and geometry: a 37 px `#242420`
licence bar above a sticky header, a skip link, a 2 px terracotta scroll-progress bar, a 48 px back-to-top
disc, a mobile call bar below `lg` and a 1,500 ms-delayed cookie strip.

#### Scenario: Licence bar at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the licence bar is measured
- **THEN** it is **37 px** tall (`36 + 1 px` border), ground **`#242420`**, text **`#ebebe7`** 12/16
- **AND** it reads `Licence` + **`FL CFC #0000000`**, then `Liner manufacturer certified` and
  `Serving Hillsborough & Pinellas` (the last two hidden below `sm`)
- **AND** the right side shows one `amber-400` star, **`4.9`** and `180+ reviews on Google · sample data`
- **AND** it is **not sticky** — it scrolls away, and the header sticks at `top: 0` in its place

#### Scenario: Skip link and landmarks

- **GIVEN** the page is loaded
- **THEN** the first focusable element is "Skip to content" targeting `#main-content`, hidden until focused
- **AND** the document has exactly one `<h1>`, a `<main id="main-content">`, and `<header>`/`<footer>`
  landmarks
- **AND** the `h1` is inside the hero copy column, not the survey card

#### Scenario: Preloader is not a blocker

- **GIVEN** an environment where `window.load` never fires again (already-complete document) or jsdom
- **WHEN** the app mounts
- **THEN** the preloader is treated as finished (`loaded || document.readyState === 'complete'`) so content is
  never trapped behind it
- **AND** in a real browser it fades out over 300 ms and is removed from the DOM

#### Scenario: Progress bar, back-to-top and call bar

- **GIVEN** the page scrolled to 50 % of its scrollable height
- **THEN** `#scroll-progress` is **2 px** tall, `#974e2c`, and about **50 %** of the viewport wide
- **AND** below **300 px** of scroll the back-to-top disc has `opacity: 0` and `pointer-events: none`; above it,
  `opacity: 1`, `translateY(0)`, and clicking it scrolls to the top
- **AND** the sticky call bar is present but **hidden at ≥ 1024** and **97 px** tall at 390 (fixed, bottom 0)

#### Scenario: Cookie strip

- **GIVEN** no `localStorage['cookie-consent']`
- **WHEN** 1,500 ms have passed
- **THEN** the strip has slid up (`translateY(0)`) as a `role="dialog"` with `aria-label="Cookie consent"`
- **AND** `Accept All` stores `accepted` and `Decline` stores `essential`, and either slides it out and removes
  it within 300 ms
- **AND** with the key already set, it never appears

### Requirement 2: Sticky header with six labels, phone pill, city pill, dark toggle and mobile disclosure

The app SHALL render the header as a translucent sticky bar whose desktop nav appears at **1280 px**, not
1024, with the city pill held back to **1536 px**, and a hamburger panel below 1280.

#### Scenario: Desktop header at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the header is **81 px** tall (`h-16 lg:h-20` plus border), `position: sticky`, `top: 0`, ground
  `rgb(255 255 255 / 0.9)` with `backdrop-filter: blur(16px)`, bottom border 1 px `#ebebe7`
- **AND** the logo renders **150 × 32** (`lg:h-9` → 36 tall) with the dark-on-light asset, and the light
  asset in dark mode
- **AND** six labels at 14/20 **600** `#4a4a40`, `gap: 28px`: How it works, Compare, Services, Service areas,
  About, Contact
- **AND** the phone pill (full radius, 1 px `#d6d6ce`, `px-3 py-1.5`, 14/600) is visible from `md`, the theme
  toggle is visible, and the terracotta CTA (`#974e2c`, white, radius 8, `px-5 py-2.5`, 14/700) is visible
- **AND** the city pill is **not** visible at 1440 (it appears at ≥ 1536)

#### Scenario: The nav collapses at 1280, not 1024

- **GIVEN** widths 1024 and 1279
- **THEN** the desktop nav, the phone pill's CTA and the city pill are hidden and the hamburger is shown
- **AND** at 1280 the six-label nav and the CTA appear without any label being clipped or overlapped
- **AND** the header height changes from **65 px** below `lg` to **81 px** at `lg`

#### Scenario: Mobile panel

- **GIVEN** a 390 px viewport
- **WHEN** the hamburger is activated
- **THEN** the panel opens below the header with six full-width 16/600 rows, the phone pill, the city pill and
  a full-width terracotta CTA
- **AND** `aria-expanded` flips to `true` and the glyph becomes ✕; activating again closes it

#### Scenario: Header shadow and dark toggle

- **GIVEN** the page scrolled past 50 px
- **THEN** the header gains `shadow-lg` and keeps its height
- **AND** the theme toggle flips `.dark` on `<html>`, persists `'dark'`/`'light'` in `localStorage.theme`, and
  the choice is applied **before first paint** (no light flash on reload)

### Requirement 3: Hero copy column — the promise, in seven twelfths

The app SHALL render the hero as a 12-column grid with copy in 7 columns and the survey card in 5, on the
`ink-50` ground, with a terracotta eyebrow, a two-line headline whose second sentence is terracotta, a
rating line, four ticked promises, and one decorative element.

#### Scenario: Hero geometry at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the hero is measured
- **THEN** the band is **668 px** tall on **`#f6f6f4`**, top offset **118 px**, container padding
  **80 px** vertical / **32 px** horizontal inside a 1,280 px container
- **AND** the grid is **1,216 px** wide with a **64 px** gap; the copy column is **683 px** (`lg:pt-6` →
  24 px top padding), the card **469 px**
- **AND** the hero has **no background image and no gradient**

#### Scenario: Headline and lead

- **GIVEN** the hero copy column
- **THEN** the eyebrow computes **14/20 700**, uppercase, **+0.35 px** tracking, `#7b3f26`, reading
  `Tampa · Licensed CFC contractor`
- **AND** the `h1` computes **60 / 66 700**, tracking **−1.5 px**, `#242420`, and wraps to **two lines** at
  1440 with a box of **683 × 132**
- **AND** "Keep the driveway." is `#974e2c` (a span inside the `h1`), and the break falls inside that phrase
- **AND** the lead is **18/28** `#636356`, capped at `max-w-xl`
- **AND** the `h1` steps to 48 px at `sm` and 36 px at base

#### Scenario: Rating line and four promises

- **GIVEN** the block under the lead
- **THEN** it shows five `amber-400` stars, **`4.9`** in 600 weight, and `180+ reviews on Google · sample data`
  at 80 % opacity
- **AND** the promise list is a `<ul>` with `margin-top: 32px`, `sm:grid-cols-2`, `row-gap: 12px`
- **AND** each item is a 16 px `#974e2c` tick plus 16/24 `#383830` text: "Camera survey before anyone quotes a
  repair", "You see the footage, not a description of it", "We will tell you when digging is the better
  answer", "Fifty-year liner warranty in writing"

### Requirement 4: The `#quote` survey card — three fields and an honest footnote

The app SHALL render a 469 × 508 white card with radius 16 in the hero's five-column slot, holding a heading,
a one-line promise, three required fields, one full-width submit and a 12 px footnote.

#### Scenario: Card anatomy at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the card is **469 × 508**, white, radius **16**, border 1 px `#ebebe7`, `shadow-md`, padding **32 px**
- **AND** its `h2` is **20/28 700** (`lg` 24) `#242420` reading "Book a camera survey"
- **AND** the line under it is 14 `#636356`: "Three fields. We reply within the hour on weekdays."

#### Scenario: Fields and submit

- **GIVEN** the form
- **THEN** it is a real `<form>` with three controls in order: name (`type=text`, `autocomplete=name`, required,
  placeholder "First and last name"), phone (`type=tel`, `autocomplete=tel`, required, placeholder
  "(555) 000-0000"), and problem (`<select>`, required) with a `Choose the closest match` placeholder plus the
  seven reference options
- **AND** each control is **403 × 50**, radius 8, 1 px `#d6d6ce`, `px-4 py-3`, 16 px, with a 14/600 `#383830`
  label above at `mt-1.5`
- **AND** focus is `border #b4643b` + a 2 px ring at 20 % opacity
- **AND** the submit is **403 × 52**, full width, `#974e2c`, white 16/700, radius 8, `py-3.5`, labelled
  "Book the survey"

#### Scenario: The form is not inert

- **GIVEN** the user submits with valid values
- **THEN** nothing reloads the page (`action="#"` must not be reproduced as a real GET to `/`)
- **AND** the app shows a confirmation state or an explicit error, and never a silent no-op
- **AND** the footnote under the button is 12 px `#848475` centred: "No obligation. The footage is yours
  whether or not you hire us."

### Requirement 5: The `#emergency` strip and the mobile call bar

The app SHALL render a 164 px terracotta strip with a pulsing dot, two lines of copy and one white
full-radius call button, plus a fixed bottom call bar below `lg`.

#### Scenario: Strip at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **164 px** tall, ground `#974e2c`, white text, `py-8`, no heading, no eyebrow
- **AND** the first line is a **pulsing 8 px dot** (`animate-ping` twin at 60 % opacity) plus
  `Sewage backing up? Call today` at 14/600 uppercase / 90 %
- **AND** the second line is 18/700 (`lg` 20): "We clear and camera the same day, then quote the repair
  properly."
- **AND** the third is 14 px at 90 %, capped at `max-w-2xl`
- **AND** the button is **215 × 52**, white, **full radius**, `px-6 py-3`, 18/700 `#7b3f26`, `hover:bg-primary-50`,
  with a phone glyph, labelled `(555) 070-0700`

#### Scenario: Call bar below lg

- **GIVEN** a 390 px viewport
- **THEN** a fixed bar sits at `bottom: 0` across the viewport, white, `border-t #d6d6ce`, `p-3`, **97 px** tall
- **AND** it contains one full-width `#974e2c` pill reading `Sewage backing up? Call today · (555) 070-0700`
- **AND** at **≥ 1024** the bar is `display: none` and does not occupy space

### Requirement 6: The `#compare` table — nine rows, one emphasised column per row

The app SHALL render the design's central artefact: a 12-column comparison with a header row that hides below
`md`, nine zebra rows, per-cell mobile labels, and **exactly one `font-semibold` cell per row** except the
deliberately neutral eighth.

#### Scenario: Table frame at 1440

- **GIVEN** a 1440 px viewport
- **THEN** `#compare` is **1,371 px** tall on white with 112 px padding, and its wrapper is `mt-10`, radius
  **16**, 1 px `#d6d6ce`, `overflow-hidden`
- **AND** the column header row is **53 px**, ground `#f6f6f4`, `px-6 py-4`, with `Relining` in 14/700
  `#7b3f26` and `Open cut` in 14/700 `#4a4a40`, each `md:col-span-4`
- **AND** each of the nine rows is **88 px**, `px-6 py-5`, `md:grid-cols-12`, and even rows carry
  `bg-ink-50/60` (`#f6f6f4` at 60 %)

#### Scenario: Copied emphasis

- **GIVEN** the nine rows in the reference's order
- **THEN** rows 1–4 and 9 emphasise **relining** (`font-semibold #242420`) and leave open cut at `#636356`
- **AND** rows 5–7 emphasise **open cut** and leave relining muted
- **AND** row 8 ("Life expectancy") is **neutral** — neither cell is bold
- **AND** the counting note under the table reads "relining wins 5 rows and open cut wins 3", which matches
  5 + 3 + 1 neutral

#### Scenario: Mobile stacking

- **GIVEN** a 390 px viewport
- **THEN** the column header row is `display: none`
- **AND** every row stacks with its label first (16/600 `#242420`) and each cell carrying its own
  12/700 uppercase label — `RELINING` in `#7b3f26`, `OPEN CUT` in `#848475`
- **AND** the row background alternation survives the stacking

#### Scenario: Fine print

- **GIVEN** the bottom of the wrapper
- **THEN** two notes follow the table at `mt-6` / `mt-3`: the counting sentence in 14 `#636356` and the
  "Figures are illustrative for a typical single-family lateral in this region…" caveat in 14 `#848475`

### Requirement 7: `#process` — four steps in a three-column grid

The app SHALL render four numbered steps in `sm:grid-cols-3`, leaving the fourth alone on its second row.

#### Scenario: Step anatomy

- **GIVEN** a 1440 px viewport
- **THEN** the list is `<ol>` with `mt-12`, `gap-8 sm:gap-6`, each item **389 px** wide
- **AND** items sit at x = 112 / 525 / 939, and item 4 starts a second row at x = 112 (3 + 1, measured)
- **AND** each head is a `flex items-baseline gap-3` pair: the number (`01`…`04`) at 14/700 `#974e2c`
  `tabular-nums`, then a 1 px `#ebebe7` rule filling the rest
- **AND** the `h3` is 18/700 `#242420`, the body 16 `#636356`, and the tag 14/600 `#7b3f26`
  ("Same day", "60 to 90 minutes", "Within 1 working day", "Usually 1 day")

### Requirement 8: `#services` — six cells on a hairline plate

The app SHALL render six services as white cells separated by a 1 px `ink-100` grid gap inside a radius-16
wrapper, with `flex-1` blurbs so the price lines share a baseline.

#### Scenario: Plate at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the wrapper is `mt-12`, radius **16**, 1 px `#ebebe7` border, `gap-px`, ground `#ebebe7`,
  `lg:grid-cols-3`
- **AND** each cell is white, **404 × 232**, `p-8`, and the six fill two rows at x = 113 / 518 / 923
- **AND** each cell is `flex flex-col`: `h3` 18/700, blurb `mt-2 flex-1` 16 `#636356`, price `mt-4` 14/700
  `#7b3f26`
- **AND** the six prices read "From $135 per foot", "From $165 per foot", "From $295", "From $395",
  "From $1,450", "Quoted after survey"
- **AND** the footnote under the plate is 14 `#848475`: "Starting prices are sample data for demonstration.
  Replace with your own before launch."

#### Scenario: Column steps

- **GIVEN** widths 390, 768 and 1440
- **THEN** the plate is **1 / 2 / 3** columns respectively, measured

### Requirement 9: `#why-us` — the drawn pipe panel and four rules

The app SHALL render a near-black drawn cross-section panel on the left (below the copy on mobile) and four
left-ruled rules on the right.

#### Scenario: Panel

- **GIVEN** a 1440 px viewport
- **THEN** the panel renders **576 × 432**, radius **16**, on an `ink-50` band, positioned **left**
  (`order-last lg:order-first`)
- **AND** it is drawn — outer plate `#242420` radius 24 on a `#161614` ground, a `#4A4A40` ground-level bar,
  the old pipe `#383830` with a `#b4643b` liner and a `#161614` bore, two `#f6f6f4` access shafts, and a
  two-item legend (`#383830` old pipe · `#b4643b` cured liner)
- **AND** its title "A pipe inside the pipe" is the page's **only** serif text (Fraunces 26/700 white)
- **AND** the `img` carries the reference's `alt` and the caption under it (14 `#848475`) reads "Replace with a
  still from one of your own camera surveys before launch…"

#### Scenario: The four rules

- **GIVEN** the copy column
- **THEN** the eyebrow is `Why us`, the `h2` is "We will talk you out of the expensive one", and the lead is
  18/28 `#636356`
- **AND** the list is a `<dl>` with `space-y-6`, each entry `border-l-2 #974e2c pl-5` and **576 px** wide
- **AND** each `dt` is 16/700 `#242420` and each `dd` 16 `#636356`: "The footage is yours" · "Both prices, every
  time" · "Sometimes the answer is jetting" · "We camera it afterwards too"

### Requirement 10: `#areas` — twelve towns in plain text

The app SHALL render a 5/7 split with no eyebrow, twelve town names in a ruled 2/3-column list, and the
local-search note.

#### Scenario: Split at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **468 px** tall, `lg:grid-cols-12` with `gap-16`; the heading block is `lg:col-span-5`
  and the list `lg:col-span-7`
- **AND** the `h2` reads "Where we work" with **no eyebrow** above it and a 18/28 `#636356` lead
- **AND** the list is `grid-cols-2 sm:grid-cols-3`, twelve `<li>` at 16 px `#383830`, each `py-2.5` with a
  1 px `#ebebe7` bottom border (measured 3 × 211 px at 1440)
- **AND** the towns are Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Temple Terrace, Plant City,
  Largo, Pinellas Park, Lutz, Valrico, Apollo Beach, followed by the 14 px note "Replace this list with your
  own towns…"

### Requirement 11: `#testimonials` — a stock-grey carousel that is static at 1440

The app SHALL render three review cards in a carousel that shows all three at `lg` (no dots, no arrows),
two at `md` and one below `sm`, on the stock `gray-50` ground.

#### Scenario: Header and cards

- **GIVEN** a 1440 px viewport
- **THEN** the band is **768 px** on `#f9fafb`, header centred in `max-w-3xl`
- **AND** the badge is a **pill** (`#f5e5d9` ground, `#7b3f26` text, 14 px, `px-3 py-1`) reading "Reviews" —
  not uppercase text
- **AND** the `h2` is `#111827` and the lead `#4b5563` (stock greys, unlike every other light band)
- **AND** each card is **381 × 320**, white, radius 16, `p-8`, `shadow-soft`, with five `#c97f55` stars, a
  18/28 **500** `#111827` blockquote, a **48 px** `primary-100` avatar disc with the initial, a 16/600 name
  and a 14 `#4b5563` location

#### Scenario: Carousel geometry per width

- **GIVEN** widths 1440, 768 and 390
- **THEN** per-view is **3 / 2 / 1** and the slide width is **405 / 368 / 358** px
- **AND** at 1440 there are **0 dots** and both arrows are `display: none`
- **AND** at 768 there are **2 dots** and the arrows are visible; at 390 there are **3 dots** and the arrows
  are visible
- **AND** the active dot is a **32 px** pill (`#974e2c`), inactive dots are **10 px** (`#d1d5db`)
- **AND** pressing next translates the track by exactly one slide width (measured `translateX(-358px)` at 390)
  and the transform transition is 500 ms

### Requirement 12: `#faq` — five rows, one open at a time

The app SHALL render five question rows divided by 1 px rules, each 81 px closed, opening to its own content
height with a 45°-rotated plus, and closing any sibling.

#### Scenario: Closed rows

- **GIVEN** a 1440 px viewport
- **THEN** each row is **81 px** (`py-6`), divided by 1 px `#e5e7eb`, inside `mx-auto max-w-3xl`
- **AND** the question is 18/600 `#111827` and the disc is **32 px**, `#f3f4f6`, holding a plus icon
- **AND** the panel has `max-height: 0`, `opacity: 0`, `overflow: hidden`, transition 300 ms

#### Scenario: Opening and switching

- **GIVEN** all rows closed
- **WHEN** row 1 is activated
- **THEN** its panel gets `max-height` = its `scrollHeight` (measured **184 px** for row 1, 136 and 112 for
  others), `opacity: 1`, and its icon rotates **45°**
- **AND** activating row 3 closes row 1 and opens row 3 (single-open, measured)
- **AND** activating an open row again closes it and resets the icon to 0°

### Requirement 13: `#contact` — the closing band

The app SHALL close the page with a 440 px `primary-700` band, a white heading, a `primary-100` lead and two
buttons that are different shapes on purpose (solid vs 2 px outline).

#### Scenario: Band at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **440 px**, ground `#7b3f26`, content centred in `max-w-3xl`, `py-28`
- **AND** the `h2` is 36/40 700 white: "Two quotes that do not agree?"
- **AND** the lead is 18/28 `#f5e5d9`, `max-w-xl`, `mt-5`
- **AND** the solid button is **240 × 56**, white, radius 8, `px-8 py-4`, 16/700 `#7b3f26`
- **AND** the outline button is **255 × 60**, transparent, **2 px** `white/40`, radius 8, 16/700 white, and
  reads `Call (555) 070-0700`
- **AND** below `sm` both are full width and stack with a 16 px gap

### Requirement 14: Footer — four-column plate, live-looking newsletter, plain bottom bar

The app SHALL render a 567 px `gray-900` footer with a brand column, three link columns, a newsletter column
and a bottom bar, and it SHALL link Component Dock.

#### Scenario: Plate at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the footer is **567 px** with `pt-24` (96 px), `lg:grid-cols-12`, `gap-8`
- **AND** the brand column is `lg:col-span-4`: `logo-light` at **40 px** tall, the blurb, **three** social
  chips (radius 8, `#1f2937`, `p-2.5`), then address, phone and email at 14 px
- **AND** the middle block is `sm:grid-cols-3` inside `lg:col-span-5` with columns **Services** (4 links),
  **Company** (4), **Support** (3), each headed by a 14/600 uppercase white label
- **AND** the last column is `lg:col-span-3`: "Stay Updated", the blurb, and an email field + `Subscribe`
  button on one 8 px-gap row
- **AND** the bottom bar is `mt-16 border-t #1f2937 py-8` with the copyright and two legal links

#### Scenario: Attribution and a working newsletter

- **GIVEN** the shipped footer
- **THEN** it contains a link to **https://www.componentdock.com/** labelled "Component Dock" (AGENTS.md rule 5)
- **AND** no ColorLib string appears in any app file, including comments and alt text
- **AND** the newsletter submit does something observable (a stored address or a visible confirmation) — the
  reference's dead form is not a behaviour to copy

#### Scenario: The footer does not widen the page

- **GIVEN** widths 320 and 390
- **THEN** the footer's grid track is never wider than its container (the reference resolves to 385 px inside
  358 px and pushes the document to 401 px)
- **AND** the newsletter row wraps (`flex-wrap`) or the button shrinks rather than pinning the track

### Requirement 15: Responsive, dark-mode, reduced-motion and anchor fidelity

The app SHALL hold its layout at every common width without horizontal scroll, honour
`prefers-reduced-motion`, implement the reference's dark palette, and present the reference's seven routes as
in-page anchors that clear the sticky header.

#### Scenario: No horizontal scroll

- **GIVEN** widths 320, 390, 768, 1024, 1280, 1440 and 1600
- **THEN** `document.documentElement.scrollWidth === clientWidth` at every one — including 320 and 390, where
  the **reference itself reports 401 px** (do not copy that defect)
- **AND** the hero stacks below `lg`, the comparison header appears at `md`, the services plate is 1/2/3
  columns at 390/768/1440, and the footer's newsletter row wraps

#### Scenario: Dark mode

- **GIVEN** `.dark` on `<html>`
- **THEN** the body is `#030712` with `#f3f4f6` text, `#f6f6f4` bands become `#111827`, white bands become
  `#030712`, the quote card becomes `#111827` with a `#1f2937` border
- **AND** `#emergency` (`#974e2c`), `#contact` (`#7b3f26`) and the footer (`#111827`) are **unchanged**
- **AND** the header is `gray-950/90`, headings are white, paragraphs `#9ca3af`, and the choice survives a
  reload with no flash of light theme

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads
- **THEN** no `[data-animate]` element is left at `opacity: 0` or translated
- **AND** the carousel does not autoplay, smooth scrolling is disabled, and the preloader does not animate into
  view

#### Scenario: Anchors resolve

- **GIVEN** the single-page recreation
- **THEN** the six nav labels, both city pills, the hero CTA and the closing-band buttons resolve to existing
  ids among `#quote`, `#compare`, `#process`, `#services`, `#why-us`, `#areas`, `#testimonials`, `#faq`,
  `#contact`
- **AND** `#service-areas` is replaced by `#areas` everywhere (two pills in the reference point at a dead id)
- **AND** every `id` target sits below the 81 px sticky header (`scroll-margin-top ≥ 101px`)
- **AND** every `tel:` is well formed (`tel:5550700700`) and the email is a real `mailto:`

## Verification checklist

- [ ] `apps/conduit` exists, `@free-react-templates/conduit` in `package.json`, `public/CNAME` =
      `conduit.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments
      included); the app never says "Nodig"
- [ ] bands in this order: licence bar → header → hero + `#quote` → `#emergency` → `#compare` → `#process` →
      `#services` → `#why-us` → `#areas` → `#testimonials` → `#faq` → `#contact` → footer
- [ ] licence bar **37 px** `#242420`, 12 px `#ebebe7`, three facts + one amber star and `4.9`, not sticky
- [ ] header **81 px** sticky, `white/90` + `blur(16px)`, 1 px `#ebebe7`; six labels 14/600 `#4a4a40`;
      phone pill ≥ `md`; CTA and nav ≥ **1280**; city pill ≥ **1536**; hamburger below 1280; `shadow-lg`
      past 50 px
- [ ] hero `#f6f6f4`, **668 px**, 12-col 7/5 with a 64 px gap; eyebrow 14/700 `#7b3f26`; `h1` 60/66 700
      −1.5 px with "Keep the driveway." in `#974e2c`; lead 18/28 `#636356`; five amber stars + `4.9`; four
      `#974e2c` ticks in a `sm:grid-cols-2` list
- [ ] `#quote` card **469 × 508** radius 16 `p-8` `shadow-md`; three required controls 403 × 50; submit
      403 × 52 `#974e2c`; 12 px footnote; **submitting produces a visible result, never a reload**
- [ ] `#emergency` **164 px** `#974e2c` with an `animate-ping` dot, 14/600 uppercase kicker, 18/700 line and a
      white **full-radius** 215 × 52 pill; call bar visible only below `lg` (**97 px** at 390)
- [ ] `#compare` **1,371 px**; wrapper radius 16 + 1 px `#d6d6ce`; header row **53 px** `#f6f6f4` hidden below
      `md`; **nine** rows **88 px** with `bg-ink-50/60` zebra; **relining bold in rows 1–4 and 9, open cut bold
      in 5–7, row 8 neutral**; both notes under the table
- [ ] `#process` **780 px**: `<ol>` of **4** in `sm:grid-cols-3` (3 + 1 measured), numbers `tabular-nums`
      `#974e2c` + 1 px `#ebebe7` rule, tags 14/600 `#7b3f26`
- [ ] `#services` **927 px**: `gap-px` plate on `#ebebe7`, radius 16, six white **404 × 232** cells `p-8`,
      `flex-1` blurbs, six price lines, sample-price footnote
- [ ] `#why-us` **864 px** on `#f6f6f4`: **576 × 432** drawn panel (left at `lg`, below at mobile) with the
      `#161614`/`#242420`/`#b4643b` artwork redrawn, plus four `border-l-2 #974e2c pl-5` rules
- [ ] `#areas` **468 px**: 5/7 split, **no eyebrow**, **twelve** towns in 2 / 3 columns with `border-b #ebebe7`,
      plain text, local-search note
- [ ] `#testimonials` **768 px** on `gray-50`: "Reviews" **pill** `#f5e5d9`/`#7b3f26`, stock-grey headings,
      three cards **381 × 320** `shadow-soft`, five `#c97f55` stars, 48 px initials; carousel 3/2/1 with
      **0 dots + hidden arrows at 1440**, 2 dots at 768, 3 dots at 390; active dot a 32 px pill
- [ ] `#faq` **820 px**: "Questions" pill, five rows **81 px** divided by 1 px `#e5e7eb`, 32 px disc whose plus
      rotates 45°, one open at a time
- [ ] `#contact` **440 px** `#7b3f26`: white `h2` 36/40, `#f5e5d9` lead, solid 240 × 56 + 2 px outline
      255 × 60, stacked full width below `sm`
- [ ] footer **567 px** `#111827`, `pt-24`, 12-col 4/5/3, three social chips, three link columns, newsletter
      row that wraps, bottom bar `mt-16 border-t #1f2937 py-8`
- [ ] fixed chrome: preloader (spinner, self-removing, non-blocking), 2 px `#974e2c` progress bar, skip link,
      48 px back-to-top past 300 px, cookie strip after 1,500 ms with `accepted` / `essential`
- [ ] dark mode: `#030712` body, `#111827` tinted bands, emergency/contact/footer unchanged, pre-paint
      resolution, persisted toggle, no white flash
- [ ] reduced motion: no reveal stuck at `opacity: 0`, no carousel autoplay, no smooth scroll
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600 (the reference fails at
      320 and 390 with 401 px — the recreation must not)
- [ ] zero bare `#` anchors; `#service-areas` replaced by `#areas`; every `tel:` well formed; every image and
      SVG has an accessible name; the pipe panel is an inline SVG/CSS composition, not a photo
- [ ] 100% coverage on the new app, `scripts/verify-app.sh conduit` green

## Recreation decisions (implementation, 2026-10-25)

Built at `apps/conduit` as a single-page app. Where the reference and the contract disagreed, the
contract won; everything else follows the measurements above.

- **Routes become anchors.** The seven inner routes are not built: the six nav labels, both city
  pills, the hero CTA and the closing-band buttons all resolve to ids on the page (`#process`,
  `#compare`, `#services`, `#areas`, `#why-us`, `#contact`, `#quote`). `#service-areas` is gone —
  both pills point at `#areas` (defect 1).
- **The survey form is wired.** Submitting with all three answers swaps the form for a confirmation
  naming the caller and the number we will ring; submitting with a gap shows an inline `role="alert"`
  and clears it on the next edit. Nothing reloads, and `action` is not reproduced (defect 2). The
  full form stays mounted under `noValidate` so the app owns every message.
- **The newsletter is wired.** `Subscribe` stores the address under `localStorage['newsletter']` and
  replaces the row with a one-line confirmation; a blank submit is ignored (defect 3). Both forms net
  the app 100 % branch coverage without a test-only seam.
- **One phone number, one format.** Every `tel:` is `tel:5550700700` and the address block links
  `mailto:office@conduitrelining.example` (defect 4). The malformed `tel:(555) 070-0700` and the
  mismatched JSON-LD number are not reproduced.
- **No dead anchors at all.** The three footer social chips link `#contact` rather than `#`
  (defect 6), asserted by a test that walks every `a[href]` on the page.
- **The licence bar wraps.** Facts are `flex-wrap` with whole items hidden below `sm`, so the strip
  reads as fine print at 390 instead of clipping mid-token (defect 8).
- **The footer newsletter row wraps.** `flex-wrap` on the input/button row means the track never
  exceeds its container: measured `scrollWidth === clientWidth` at **320, 390, 768, 1024, 1280,
  1440 and 1600**, where the reference reports 401 px at 320 and 390 (defect 7).
- **The panel is drawn, not photographed.** `LinerPanel` is an inline `<svg viewBox="0 0 800 600">`
  with `role="img"` and the reference's `alt` text: `#161614` ground, `#242420` plate, `#4a4a40`
  ground bar, `#383830` old pipe, `#b4643b` liner, `#161614` bore, two `#f6f6f4` shafts, a two-item
  legend and the title in Fraunces 26/700. The two `access point` labels were moved out of the pipe
  body to sit beside the shafts — the reference draws them on top of the artwork where they are
  illegible at 576 px wide.
- **Brand marks are inline SVG.** The icon library no longer ships brand glyphs, so X, Instagram and
  LinkedIn live in `BrandIcons.tsx` and inherit `currentColor`.
- **`#process` keeps its 3 + 1 rhythm** (defect 9), the review carousel renders **no dots and no
  arrows at `lg`** because `maxIndex` is 0 there (11), and `.font-display` is applied to nothing but
  the artwork (12).
- **Measured after build (Playwright, 1440 × 900):** document 7,948 px; hero 668, `#emergency` 168,
  `#compare` 1,404, `#process` 780, `#services` 927, `#why-us` 864, `#areas` 468, `#testimonials`
  728, `#faq` 820, `#contact` 440 — within 33 px of every reference band, and the four bands that
  differ are the ones whose copy the recreation shortened.
