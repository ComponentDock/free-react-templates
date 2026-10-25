# Template: Patina (Premium bathroom-renovation studio — a dark brass-and-ink page that sells sequencing, not cheapness)

## Purpose

A **design-and-build bathroom studio in Chicago whose argument is the programme, not the price**, and whose
own copy states the thesis in the closing band of `#owner`:

> "If you want the cheapest bathroom in Chicago we are emphatically not it, and we would rather say so on
> this page than during a consultation you have taken an afternoon off for."

Everything above that line earns it. The hero is not "welcome to our company": it is *"The room you stand in
first thing, done properly once."* — the value proposition is **frequency of use**, and the offer is
**one studio running design, first fix, second fix and the trades in between**, because *"nobody hands the
problem to somebody else."* The page then proves the claim four ways: **three finished rooms** (portfolio,
captions hidden until hover), **a drag-to-compare before/after of one of them with an eleven-week programme
and a structural reason for it** ("the wet room floor was built up over the existing joists rather than cut
into them"), **three stages with a price and a duration on each** (`From $300, credited` / `Two to three
weeks` / `6 - 14 weeks`), and **two long testimonials** under the heading *"Two long ones rather than six
short ones"* — the copy arguing against its own genre while being it.

**Scarcity is content, not decoration**: *"Onyx runs four bathroom projects at a time and no more. Each has
one site manager who is there for its whole duration, which is why we cannot run eight."* A recreation that
swaps the process band for a feature grid, drops the durations, or turns the two quotes into a six-card
logo carousel has deleted the template.

The register is **restrained, literary, and caveated**: full sentences with subordinate clauses, no
exclamation marks, no "Welcome to", sample-data disclaimers left in place (*"Sample projects for template
demonstration. Add one YAML file per project in `src/content/portfolio`."*, *"Sample reviews for
demonstration. Replace with your own."*, *"Sample details for template demonstration."*). This is a **2026
Astro build whose content is sample data by design** — keep those lines.

Composition: **one full-bleed photographic hero under a 65 % ink wash, then alternating near-black
(`#0b0b0b`) and slightly-lifted (`#101010`) bands, one cool-navy testimonials band (`#111827`) — the only
band on the page that is not warm — and a `#101010` footer.** Measured at 1440 × 900:

| #  | band                                      | id / hook            | ground              |   top | height |
| -- | ----------------------------------------- | -------------------- | ------------------- | ----: | -----: |
| 0  | `<header>` transparent over the hero      | `[data-onyx-header]` | `transparent`       |     0 |     97 |
| 1  | hero — full-bleed photo, copy bottom-left | (1st `<section>`)    | photo + `ink-900/65`|     0 |    792 |
| 2  | three rooms (portfolio)                   | `#portfolio`         | `ink-900` `#0b0b0b` |   792 |    903 |
| 3  | before / after drag-compare               | *(no id)*            | `ink-800` `#101010` | 1,695 |  1,092 |
| 4  | three stages (process)                    | `#process`           | `ink-800` `#101010` | 2,787 |    632 |
| 5  | the studio (owner)                        | `#owner`             | `ink-900` `#0b0b0b` | 3,419 |    868 |
| 6  | two testimonials, carousel                | `#testimonials`      | `gray-900` `#111827`| 4,287 |    936 |
| 7  | book a consultation                       | `#contact`           | `ink-800` `#101010` | 5,223 |    430 |
| 8  | footer, four columns                      | `<footer>`           | `ink-800` `#101010` | 5,653 |    544 |

**Document height 6,197 px** at 1440 × 900; **6,386 px** at 768, **6,876 px** at 390 and **7,359 px** at 320.
The eight in-flow bands (hero → footer) sum to exactly **6,197 px**; the header is `absolute`, so it
overlaps the hero and adds nothing to the document height. Every `.section` band is `py-20` → `lg:py-28` (**80 px**, then **112 px**); `#testimonials` and
`#contact` use the same padding as utilities (`py-20 lg:py-28`) rather than the `.section` class; the footer
is `pt-16` → `lg:pt-24` (**64 / 96 px**) with **no** bottom padding on the plate itself.

The palette is **one warm-grey `ink` ramp, one brass `primary` ramp and stock Tailwind greys in the
testimonial band only**. The jobs are load-bearing: `ink-900` `#0b0b0b` is the **body ground** (`body{
background-color:#0b0b0b; color:#ede9e0 }`), the hero wash (`ink-900/65`) and the portfolio/owner grounds;
`ink-800` `#101010` the **compare, process, contact and footer grounds** (a 5-point lift you can only see
side by side); `ink-200` `#ada69a` **every paragraph on a dark band**, `ink-100` `#d7d2c6` the **hero lead
and nav labels**, `ink-300` `#7e786e` the **city line under the signature and input placeholders**;
`primary-400` `#cfb143` **every eyebrow, every step numeral, every star, the hero CTA label and every
`border-primary-500` outline**; `primary-600` `#ac8a1f` the **cookie Accept button, the footer phone pill,
the back-to-top disc and the scroll-progress bar**; `primary-500` `#c9a227` the **outline of the hero and
contact CTAs and every focus ring**; `primary-100` `#f5edd0` the **testimonial pill** and the avatar disc
ground in light mode (unreachable — see §Dark-only).

Two traps in the palette. **`#testimonials` is the only cool band** (`gray-900` `#111827`, reached through
the `dark:bg-gray-900` half of `bg-gray-50 dark:bg-gray-900`) and it also keeps Tailwind-grey text classes
(`text-gray-900 dark:text-white`, `text-ink-200`), so "unifying" its navy into the ink ramp flattens the one
tonal break the page has. **Brass is never a gradient** — there is no gradient anywhere in the 55,410 B
sheet; every brass surface is a flat `background-color` and the only alpha brass is
`shadow-primary-600/25` under the back-to-top disc and `shadow-primary-600/30` on hover.

The type is **Playfair Display for display serif and Manrope for everything else**, and the switch inside the
page is **deliberate and mid-document**: `#portfolio`'s and the compare band's `h2` are Playfair 400 36 px;
`#process`'s and `#testimonials`' `h2` are **Manrope 700 36 px with `−0.9 px` tracking**. `#contact` returns
to Playfair. A recreation that puts every heading in one face loses the page's only rhythm device. Both
faces arrive from Cloudflare's font service (`/cf-fonts/v/playfair-display/5.2.8/…`,
`/cf-fonts/v/manrope/5.2.8/…`) as **variable** `wght` woff2 with `font-display: swap`, declared in one inline
`<style>` block — **36 `@font-face` rules, no `<link>`, no stylesheet rule**. Playfair ships **upright only**
(400/500/600 — there is no italic face on the page), Manrope 400/500/600/700.

Recreation of the ColorLib "Onyx" design (https://colorlib.com/wp/template/onyx/, live preview
https://preview.colorlib.com/theme/onyx/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `onyx`
- **ColorLib page:** https://colorlib.com/wp/template/onyx/ — **HTTP 200, 111,833 B**, `<title>`
  **"Onyx - Premium Bathroom Renovation Template 2026 - Colorlib"**, categories **Astro · Home Services ·
  Tailwind CSS**. Its listing screenshot is `onyx-template.jpg` (**70,617 B**, served `image/avif` despite
  the `.jpg` name, **2400 × 1892** — see §Screenshot analysis).
- **Live preview:** https://preview.colorlib.com/theme/onyx/ — **HTTP 200, 44,519 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4`. `<title>` is **"Bathroom design and renovation
  plumbing in Chicago | Onyx"**. A 2026 **Astro** build: one hashed stylesheet
  `_astro/Base.uMnk8nAC.css` (**55,410 B**, `/*! tailwindcss v4.3.3 */`), one behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B**, sha256
  `e26cc055dec2…` — **byte-identical to the house kit in the `conduit`, `nightwatch` and `drainwise`
  preps**), and the router `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js`
  (**16,357 B**, the same file as every sibling in this 2026 set).
- **Page-specific logic is three inline `<script>` bodies** (**274 B** sticky-header attribute,
  **407 B** before/after clip-path, **370 B** preloader teardown) plus one `application/ld+json` block
  (**267 B**). No calculator, no form handler — the page has **no `<form>` at all**.
- **No archive, no alternate family path:** `downloads/free/onyx.zip` → **404**,
  `etc/cs/onyx/index.html` → **404**, `theme/bootstrap/onyx/` and `theme/bb/onyx/` → **404**. Unlike the
  rest of this 2026 set there is **no archived twin to hash-compare**, so every token below is read from the
  live sheet and from `getComputedStyle`.
- **Single-page?** No. **Eleven inner routes are live** (`bathrooms`, `renovations`, `portfolio`, `process`,
  `studio`, `contact`, `privacy`, `terms` and three case studies `portfolio/linden-house`,
  `portfolio/walnut-court`, `portfolio/harper-loft`), all HTTP 200 **only with a trailing slash** — the bare
  path answers **308** with an empty body. See §Inner-page inventory.
- **Fonts:** no `<link>` to Google Fonts and **no `@font-face` in the stylesheet**; the only faces are the 36
  rules in the inline `<style>` block naming `'Playfair Display'` (400/500/600, upright) and `'Manrope'`
  (400/500/600/700), pointing at `/cf-fonts/v/{playfair-display,manrope}/5.2.8/{latin,latin-ext,cyrillic,…}/wght/normal.woff2`
  — **variable weight**. The recreation loads both from Google Fonts explicitly.
- **Recreation name:** `patina` — one lowercase word, the aged-brass/craft reading of the design and *not*
  the source name, with no collision anywhere: `git grep -il patina origin/main` → **no matches**, no
  `apps/patina`, no `openspec/specs/template-patina`, no `docs/templates/patina`, no bold name in
  `TEMPLATES.md`, and `colorlib.com/wp/template/patina/`, `preview.colorlib.com/theme/patina/`,
  `preview.colorlib.com/theme/bootstrap/patina/` all → **404**. (Two other candidates were rejected on the
  same scan: `gilt` — 3 repo hits plus an already-prepped `openspec/specs/template-gilt/` — and `terrazzo`,
  which was clean but reads as a tile surface rather than a finish that improves with time.) The recreation
  lives
  at `apps/patina`, package `@free-react-templates/patina`, `patina.free.componentdock.com`.
  **No ColorLib string may appear in the app** — provenance lives in this spec, the `TEMPLATES.md` row and
  the PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, `[~]` count **0**), so this design comes from
`docs/catalog-coverage.md` — the **42 standalone designs** on colorlib.com's listing that the checklist never
recorded. This is the row **`onyx`**, whose status column reads *"orphan prep (other design)"*: the folder
`openspec/specs/template-onyx/` already exists for a **different** ColorLib design (a `colorlib-error-404-*`
dark 404 page, never shipped — `apps/onyx` does not exist), which is exactly why this design needs the new
name `patina` rather than `onyx`. When the app ships, append a row under the best-fit category —
**`## Business`** — **in source-name alphabetical order** (between the `onyx`-class neighbours; re-read the
section rather than trusting this line, a concurrent prep may have landed first) and bump that heading's
count.

## Reference readings (2026-10-25, `curl -4`)

| what                                  | value                                                                                                                       |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| preview HTML                          | 200, **44,519 B**, `text/html; charset=utf-8`, sha256 `c17479acf5e9ce46…`                                                    |
| stylesheet `_astro/Base.uMnk8nAC.css` | 200, **55,410 B**, `/*! tailwindcss v4.3.3 */`, sha256 `b10fe5542cbf36dc…`                                                   |
| behaviour kit `…_lang.BLoalVWc.js`    | 200, **16,233 B**, sha256 `e26cc055dec23e63…` (identical to the `conduit`/`nightwatch`/`drainwise` kit)                        |
| router `…CYDbzu1r.js`                 | 200, **16,357 B** (the same house router as every sibling in this set)                                                       |
| inline `<script>` bodies              | **3** (header 274 B · compare 407 B · preloader 370 B) + one JSON-LD block, 267 B — **no form, no calculator**                 |
| logo                                  | `assets/img/logo.svg` and `assets/img/logo-light.svg` are **byte-identical** (`sha256 fd0cfbb3…`, **506 B**, `viewBox 0 0 180 42`): the wordmark is **live `<text>`**, not paths — "ONYX" in `Playfair Display` 26 px / 500, `letter-spacing 3`, `fill #EDE9E0`, an 86 × 1 `#C9A227` rule, and a Manrope subtitle; header renders **171 × 40** (`h-10`), footer the same asset at `h-10` |
| favicon                               | `favicon.svg`, 200, 377 B                                                                                                    |
| social card                           | `og:image` = `/og-image.jpg` → **404** (see §Known reference defects)                                                        |
| archive                               | `downloads/free/onyx.zip` → **404**; `/etc/cs/onyx/index.html` → **404**                                                      |

`<meta name="description">`, `og:title` and the `h1`'s promise are the same sentence family:
*"Bathroom design and renovation plumbing in Chicago. Design, first fix, second fix and the trades around
them, run by one studio."* — reused verbatim as the hero lead, the footer blurb and the meta description.
JSON-LD is `@type: "Plumber"`, `name: "Onyx Bath & Plumbing"`, `areaServed: "Chicago, Illinois"`,
`priceRange: "$$$"`, `telephone: "+1-555-0244"` — which disagrees with **both** `tel:` hrefs on the page
(`tel:5550100244` and the malformed `tel:(555) 010-0244`). A delta, not a spec.

## Design tokens (reconstructed from `Base.uMnk8nAC.css`, 55,410 B, and `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal hex values** in
> the compiled utilities. `grep -- '--color-ink'` on this sheet returns **0**, so neither the `ink` nor the
> `primary` ramp exists as a custom property — the ramps below were rebuilt by parsing every `*-ink-<n>` /
> `*-primary-<n>` utility rule. Declare them in the app's own `@theme`.

### `ink` — warm-grey neutral ramp (all structure)

| step | hex       | used for                                                                                     |
| ---- | --------- | -------------------------------------------------------------------------------------------- |
| 50   | `#ede9e0` | `<body>` text colour (the default text colour of the whole page)                              |
| 100  | `#d7d2c6` | hero lead, nav labels, mobile-panel rows, `bg-ink-100` (sheet only)                            |
| 200  | `#ada69a` | **every paragraph on a dark band**, testimonial location line, footer text                     |
| 300  | `#7e786e` | signature city line (`Chicago, since 2014`), input placeholders                                |
| 400  | `#565149` | sheet only                                                                                     |
| 500  | `#3a3631` | sheet only                                                                                     |
| 600  | `#26231f` | sheet only                                                                                     |
| 700  | `#161616` | sheet only                                                                                     |
| 800  | `#101010` | **compare, process, contact and footer grounds**                                               |
| 900  | `#0b0b0b` | **body ground**, hero wash (`/65`), portfolio and owner grounds, header ground when stuck (`/95`)|

### `primary` — brass ramp (eyebrows, outlines, discs)

| step | hex       | used for                                                                                       |
| ---- | --------- | ---------------------------------------------------------------------------------------------- |
| 50   | `#fbf7ea` | light-mode hover ground (`hover:bg-primary-50`)                                                 |
| 100  | `#f5edd0` | testimonial pill ground (light mode), avatar disc ground (light mode)                            |
| 200  | `#eadca2` | `border-primary-200` (sheet only)                                                               |
| 300  | `#dcc66d` | `dark:hover:text-primary-300` — the "More about the studio" link hover, pill text in dark         |
| 400  | `#cfb143` | **every eyebrow, every step numeral, every star, the hero CTA label, the active carousel dot**   |
| 500  | `#c9a227` | **the 1 px outline of the hero and contact CTAs**, focus rings, hover ground of those CTAs        |
| 600  | `#ac8a1f` | **cookie Accept**, footer phone pill, back-to-top disc, scroll-progress bar, hover ground        |
| 700  | `#8a6e19` | hover for `bg-primary-600` surfaces                                                             |
| 800  | `#6b5514` | `dark:border-primary-800` (sheet only)                                                          |
| 900  | `#54430f` | dark-mode avatar disc (`dark:bg-primary-900`)                                                   |

### Stock Tailwind greys (testimonials band, footer body, cookie strip)

`gray-50 #f9fafb` (testimonials band in the **unreachable** light theme) · `gray-100 #f3f4f6` ·
`gray-200 #e5e7eb` · `gray-300 #d1d5db` (inactive carousel dots, Decline border) · `gray-400 #9ca3af`
(**footer body copy**, social chips) · `gray-500 #6b7280` (bottom bar) · `gray-600 #4b5563` (cookie copy in
light mode) · `gray-700 #374151` · `gray-800 #1f2937` (**testimonial card ground in dark mode**, social chip
ground) · `gray-900 #111827` (**testimonials band ground**) · `gray-950 #030712` (sheet only). `amber-400`
compiles to a single unused utility (`.text-amber-400`); the stars are **`primary-400` `#cfb143`**, not amber.

### Dark-only (there is no toggle)

`<html lang="en" class="dark">` is **hard-coded** and the page has **zero** `[data-dark-toggle]` elements —
the kit's theme switcher never binds. The sheet still compiles the light half of every `dark:` pair
(`bg-gray-50`, `text-gray-900`, `bg-white`, `bg-primary-100`), which **can never render**. Two consequences
the implementer must decide explicitly:

- **Ship the dark palette only.** Do not add a theme toggle the reference does not have, and do not
  implement the unreachable light values.
- **Watch the `text-white` in the testimonial card.** The blockquote is `text-lg font-medium text-white`
  inside a `bg-white … dark:bg-gray-800` card with **no `dark:` prefix on the text** — in the light theme it
  would be white on white. It is invisible-by-design only because the theme is pinned.

### Typography (measured)

| role                     | size / line-height / weight          | tracking    | colour                                  |
| ------------------------ | ------------------------------------ | ----------- | --------------------------------------- |
| `h1` (hero)              | **60 / 69 / 400** Playfair (`1.15`)  | `normal`    | `#ffffff`, `max-w-3xl` (**768 px**)     |
| `h1` at 768 / at 390     | 48 / 55.2 · 36 / 41.4                | `normal`    | same                                    |
| `h2` serif (`#portfolio`, compare, `#contact`) | **36 / 40 / 400** Playfair | `normal` | `#ffffff`, `max-w-2xl` on intro columns |
| `h2` sans (`#process`, `#testimonials`) | **36 / 40 / 700** Manrope | `−0.9 px` (`−0.75 px` at 30 px) | `#ffffff` |
| `h3` (process steps)     | 18 / 28 / 700 Manrope                | `normal`    | `#ffffff`                               |
| `h3` (footer columns)    | 14 / 20 / 600 **uppercase**          | `+0.7 px`   | `#ffffff`                               |
| eyebrow / kicker         | **12 / 16 / 600 uppercase**          | `+3.36 px` (`.28em`) | `primary-400` `#cfb143`        |
| nav label                | 12 / 16 / 600 uppercase              | `+2.16 px` (`.18em`) | `ink-200` `#ada69a` → `primary-400` on hover |
| hero lead                | 18 / 28 / 400                        | `0`         | `ink-100` `#d7d2c6`, `max-w-xl` (**576 px**) |
| band paragraph           | 18 / 28 / 400                        | `0`         | `ink-200` `#ada69a` (process body is `white/70`) |
| `#owner` lead            | **30 / 37.5 / 400** Playfair (`24 px` at 390) | `0` | `#ffffff` (`text-white` wins over the leftover `text-ink-200`) |
| signature                | 20 / 28 / 400 Playfair               | `0`         | `#ffffff`                               |
| testimonial quote        | 18 / 28 / **500** Manrope            | `0`         | `#ffffff`                               |
| testimonial name / city  | 16 / 24 / 600 · 14 / 20 / 400        | `0`         | `#ffffff` · `ink-200`                   |
| footer body              | 16 / 24 / 400                        | `0`         | `gray-400` `#9ca3af`                    |
| bottom bar               | 14 / 20 / 400                        | `0`         | `gray-500` `#6b7280`                    |

`font-family: Manrope, system-ui, sans-serif` sits on **`html`** (Tailwind preflight, not a utility);
`body { color:#ede9e0; background:#0b0b0b; -webkit-font-smoothing: antialiased }`. `.font-serif` =
`Playfair Display, Georgia, serif`. Step numerals carry `tabular-nums`. **No heading in the page uses
italic**, and no face ships an italic file.

### Radii — four different ones on one page, and the choice is per-component

- **0** — the header CTA (`rounded-none`) and the hero CTA (`border` with no radius class). The hero's
  primary action is a **square brass outline**, 242 × 50.
- **8 px** (`--radius-lg`) — every field/button in the cookie strip, the two `#contact` CTAs (`rounded-lg`,
  also 242 × 50), the footer social chips.
- **16 px** (`--radius-2xl`) — the before/after figure and the testimonial cards.
- **full** — the testimonial "Clients" pill (69 × 28), the avatar discs (48 px), the footer phone pill
  (161 × 48) and the back-to-top disc (48 px).

### Shadows, spacing, container

- `--shadow-soft: 0 4px 16px -4px #0000001a` — the **testimonial cards** only (`shadow-soft`). The kit also
  defines `.card:hover{box-shadow:0 12px 32px -8px #00000024}`; no element on this page uses `.card`.
- `shadow-lg` — the cookie strip, the back-to-top disc, and the header **past 50 px of scroll** (the kit's
  `[data-header]` handler adds/removes `shadow-lg`; the page's own handler adds a `data-stuck` attribute at
  80 px — **both run**, see §Behaviour).
- `shadow-primary-600/25` → `0 20px 25px -5px #ac8a1f40, 0 8px 10px -6px #ac8a1f4d` on the back-to-top disc
  (the `.btn-primary` hover rule, not used by this page's own buttons).
- `.section { padding-block: 5rem }` → `lg: 7rem` (**80 / 112 px**).
- `.container { width:100%; margin-inline:auto; padding-inline:1rem }` → `1.5rem` → `2rem` → `2.5rem` →
  **`3rem` at 1440** (the page's own `px-4 lg:px-8` wins where both apply) — measured content width
  **1,216 px** at 1440 and 358 px at 390.
- `.card` = radius 16 + white + `p-6` + `shadow-soft`; `.btn` = radius 8 + `px-5 py-2.5` + 14/500 — both are
  **shared-kit classes this page never uses** (its buttons are hand-rolled utility strings).

## Reference document order

`header` → `hero` → `#portfolio` → *(unlabelled)* before/after → `#process` → `#owner` → `#testimonials` →
`#contact` → `footer`, plus five fixed/overlay pieces that sit outside the flow: `#preloader`,
`#scroll-progress`, the skip link (`#main-content`), the cookie strip (`#cookie-consent`) and the
back-to-top disc (`#back-to-top`).

## Band-by-band content (the reference's real copy — reproduce order, paraphrase lightly)

### 0 — Header (97 px at 1440, 81 px below `lg`; `absolute`, transparent)

`<header class="absolute inset-x-0 top-0 z-50 w-full border-b border-white/10 …">` with
`data-header` + `data-onyx-header`, inner row `flex h-20 items-center justify-between gap-6 lg:h-24`. Three
zones:

- **Left `<nav>`** (`hidden flex-1 xl:flex xl:gap-8`): `Bathrooms` · `Renovations` · `Portfolio` — 12/600
  uppercase `+2.16 px`, `ink-200`, hover `primary-400`, `whitespace-nowrap`.
- **Centre** (`shrink-0 lg:mx-6`): the `ONYX` wordmark, 171 × 40, `fetchpriority="high"`,
  `decoding="sync"` — a **text SVG** that needs Playfair Display loaded to look right.
- **Right `<nav>`** (`hidden flex-1 xl:flex xl:justify-end xl:gap-8`, `aria-label="Main navigation"`):
  `Process` · `Studio` · then the CTA `Book a consultation` — 12/600 uppercase, `rounded-none`,
  `border border-primary-500`, `px-5 py-2.5`, `primary-400`, hover `bg-primary-500 text-ink-900`
  (**measured 218 × 38**).
- **`<button data-mobile-toggle>`** — `ml-auto rounded p-2 text-ink-100 … xl:hidden`, `aria-label` +
  `aria-expanded`, hamburger glyph swapped for an X by the kit.

The nav switches on at **1280 (`xl`)**, not 1024 — between 1024 and 1279 there is a logo and a hamburger and
nothing else, at a 97 px header height (the `lg:h-24` step is tied to `lg`, the nav to `xl`).

### 1 — Hero (792 px at 1440 = `88vh`; 591 px at 390 = `70vh`)

`<section class="relative isolate flex min-h-[70vh] items-end overflow-hidden lg:min-h-[88vh]">`:

- background `<img>` `photo-1620626011761-996317b8d101` at `1920 × 1080`, `absolute inset-0 -z-10 h-full
  w-full object-cover`, `fetchpriority="high"`, alt `A finished bathroom in low light`;
- overlay `<div class="absolute inset-0 -z-10 bg-ink-900/65">` (**65 % ink wash**, `aria-hidden`);
- copy container `container mx-auto px-4 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40`, **bottom-aligned**:
  - eyebrow `Chicago · Bathroom design and renovation plumbing` — 12/600 uppercase `+3.36 px`, `primary-400`;
  - `h1` *"The room you stand in first thing, done properly once."* — Playfair 400 60/69 white,
    `mt-6 max-w-3xl`, measured **768 × 138** at 1440 (two lines);
  - lead *"Design, first fix, second fix and the trades in between, run by one studio so nobody hands the
    problem to somebody else."* — 18/28 `ink-100`, `mt-6 max-w-xl`, measured **576 × 56**;
  - CTA `Book a consultation` → `/contact` — `mt-10 inline-flex border border-primary-500 px-8 py-4`, 12/600
    uppercase `+2.16 px` `primary-400`, hover `bg-primary-500 text-ink-900`; **measured 242 × 50 at
    `(112, 646)`, radius 0**.

At 320 the band grows to **640 px**: `70vh` is 560, so the copy column sets the height.

### 2 — `#portfolio` — "Three rooms" (903 px, `#0b0b0b`)

Intro column `max-w-2xl`, left-aligned: eyebrow `Recent work` (`.28em`, `primary-400`); `h2` **Playfair 400
36/40** *"Three rooms"*; lead 18/28 `ink-200` *"Sample projects for template demonstration. Add one YAML file
per project in `src/content/portfolio`."*

`<ul class="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">` of three `<li>` — each an
`<a class="group relative block overflow-hidden">` wrapping:

- `<img>` `aspect-[4/5] w-full object-cover transition-transform duration-500
  group-hover:scale-[1.03]` (measured **389 × 487** at 1440, **171 × 214** at 390);
- `<span class="absolute inset-0 flex items-end bg-ink-900/0 p-5 opacity-0 … group-hover:bg-ink-900/55
  group-hover:opacity-100 group-focus-visible:…">` holding the caption: project name in **Playfair 18**
  white + city in 12/600 uppercase `+0.18em` `primary-400`.

The three entries (name · city · href):

| # | name          | city        | href                                    |
| - | ------------- | ----------- | --------------------------------------- |
| 1 | Linden House  | Lincoln Park| `/theme/onyx/portfolio/linden-house/`   |
| 2 | Walnut Court  | Oak Park    | `/theme/onyx/portfolio/walnut-court/`   |
| 3 | Harper Loft   | West Loop   | `/theme/onyx/portfolio/harper-loft/`    |

**The captions are invisible at rest** (`opacity-0`) — at every viewport the band renders as three
unlabelled photographs until the pointer enters or the link takes focus. Copy that behaviour or label the
cards permanently; do not leave a screen-reader-only caption with no visible affordance *and* no
`aria-label`.

At 390 the grid is **two columns of 171 px** and the third card sits alone on row 2 at `(16, 1117)`, leaving a
171 × 214 hole to its right — see §Known reference defects.

### 3 — Before / after (1,092 px, `#101010`, **no id**)

`<section class="section bg-ink-800">` containing a `max-w-2xl` intro and a `figure`:

- eyebrow — **none**; `h2` **Playfair 400 36/40** *"Before, and after eleven weeks"*;
- lead 18/28 `ink-200` *"Drag to compare. The wet room floor was built up over the existing joists rather
  than cut into them, which is what kept the programme at eleven weeks."*;
- `<figure class="relative overflow-hidden rounded-2xl mt-10" data-before-after>` — **1,216 × 684** at 1440
  (16:9), **358 × 201** at 390:
  - `<img>` before (`photo-1584622650111…`, `1600 × 900`, `block w-full`);
  - `<img>` after (`photo-1620626011761…`, `absolute inset-0 h-full w-full object-cover`,
    `data-after-image`, inline `clip-path: inset(0 0 0 50%)`);
  - `<span data-divider>` — `absolute inset-y-0 w-0.5 bg-white/90`, inline `left: 50%`;
  - `<figcaption>` — `absolute inset-x-0 top-0 flex justify-between p-4` with two chips `Before` / `After`
    (12/700 uppercase, `rounded bg-black/50 px-2 py-1`, white);
  - `<label class="sr-only" for="ba-range">Reveal the finished work</label>` +
    `<input type="range" id="ba-range" min="0" max="100" value="50" data-range
    class="absolute inset-x-0 bottom-4 mx-auto block w-[85%] cursor-ew-resize accent-white">`.

The 407 B inline script binds `input` → `clipPath = inset(0 0 0 ${value}%)` and `divider.style.left =
${value}%`, and runs once on load (so the initial 50 % state is authored **and** recomputed).

### 4 — `#process` — "Three stages…" (632 px, `#101010`)

Intro `max-w-2xl`: eyebrow `How it runs` (**14/700 uppercase `tracking-wide`** — note this one is 14 px, not
12, and `+0.35 px`, not `.28em`); `h2` **Manrope 700 36/40, `−0.9 px`** *"Three stages, and you see the
drawings before anyone lifts a floorboard"*; lead 18/28 **`white/70`** *"A bathroom is between six and
fourteen weeks of somebody in your house. The sequencing is the service."*

`<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">` of three `<li>`, each **389 × 176** at 1440 and
**358 × 176** at 390 (single column below `sm`):

| # | numeral | title                       | body                                                                                                 | meta                 |
| - | ------- | --------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------- |
| 1 | `01`    | Consultation and survey     | Two hours at the property. We look at the existing pipework, the joist direction and the soil stack, because those decide what is actually possible. | `From $300, credited` |
| 2 | `02`    | Design and fixed quote      | Drawings, a fixture schedule and a fixed price covering our trades. You approve it before anything is ordered. | `Two to three weeks` |
| 3 | `03`    | Build and hand over         | One site manager, a named start date and a working bathroom at the end. We are the last trade out and we take the skip with us. | `6 - 14 weeks`        |

Each step's header is a flex row: `span` numeral (14/700 `tabular-nums` `primary-400`) + a
`span.h-px.flex-1.bg-white/15` rule that runs to the column edge. Then `h3` 18/700 white (`mt-4`), body
18/28 `white/70` (`mt-2`), and the meta line 14/600 `primary-400` (`mt-3`). The bottom lines are **uneven by
design** — durations, a price and a range answer different questions.

### 5 — `#owner` — "The studio" (868 px, `#0b0b0b`, centred)

`max-w-3xl mx-auto text-center`, in order:

1. portrait `<img>` `photo-1573496359142-b8d87734a5a2` (**112 × 112**, `rounded-full object-cover`,
   `mx-auto h-28 w-28`), alt `Portrait of the studio director`;
2. eyebrow `The studio` (12/600, `.28em`, `primary-400`, `mt-6`);
3. **Playfair 30/37.5 white** lead — *"We are a plumbing studio that took on design because the handover
   between the two was where every bathroom project went wrong."* (`mt-5`, class list carries a leftover
   `text-ink-200` that `text-white` overrides);
4. 18/28 `ink-200` paragraph — *"Onyx runs four bathroom projects at a time and no more. Each has one site
   manager who is there for its whole duration, which is why we cannot run eight. The tiling, electrics and
   joinery are subcontracted to the same three firms we have used for a decade, and they are named in your
   quote."*;
5. 18/28 `ink-200` paragraph — *"If you want the cheapest bathroom in Chicago we are emphatically not it, and
   we would rather say so on this page than during a consultation you have taken an afternoon off for."*;
6. signature — **Playfair 20** white *"Onyx Bath & Plumbing"* (`mt-8`);
7. city line — 12/600 uppercase `+2.16 px` `ink-300` *"Chicago, since 2014"* (`mt-1`);
8. link `More about the studio` → `/studio` — `mt-8 inline-flex items-center gap-2 border-b border-primary-500
   pb-1`, 12/600 uppercase `+0.18em` `primary-400`, hover `primary-300` (**193 × 21** measured). This is the
   only **underlined** action on the page.

### 6 — `#testimonials` — "Two long ones rather than six short ones" (936 px, `#111827`)

Centred intro `max-w-3xl`: pill `Clients` (`rounded-full bg-primary-100 px-3 py-1`, 14/500 `primary-700`, dark
pair `dark:bg-primary-900/50 dark:text-primary-300`, measured **69 × 28**); `h2` **Manrope 700 36/40**; lead
*"Sample reviews for demonstration. Replace with your own."* All three carry `data-animate="fade-in-up"` with
`data-delay` 0 / 100 / 200.

Carousel `div.relative.mt-16[data-carousel]` → `div.overflow-hidden` → `div.flex.transition-transform
.duration-500.ease-out[data-carousel-track]` → **two** `div.flex-shrink-0.px-3[data-carousel-slide]`, each
containing a `rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-800` card (**381 × 488** and **381 × 376** at
1440 — the heights differ because the quotes do; **334 px** wide at 390):

- five star glyphs, `h-5 w-5` `primary-400`, `fill="currentColor"`, `viewBox="0 0 20 20"`;
- `<blockquote class="text-lg font-medium text-white">` with the curly-quoted review;
- author row: 48 px circle `rounded-full bg-primary-100 text-lg font-semibold text-primary-600
  dark:bg-primary-900 dark:text-primary-400` holding the **initial** (`E`, `D`), then name 16/600 white and
  city 14/400 `ink-200`.

| # | name                 | city        | initial |
| - | -------------------- | ----------- | ------- |
| 1 | Eleanor and James R. | Lincoln Park| `E`     |
| 2 | Devansh M.           | West Loop   | `D`     |

Arrows: two 40 px round buttons (`data-carousel-prev/next`), **`display:none` at ≥768** because two slides fit
the 3-up / 2-up view. Dots container `data-carousel-dots` is **empty at 1440 and 768** and holds **two** dots
at 390/320 (active = 32 px brass pill, inactive = 10 px `gray-300`/dark `bg-gray-600`).

### 7 — `#contact` — "Book a consultation" (430 px, `#101010`, centred)

`max-w-3xl mx-auto text-center`: `h2` **Playfair 400 36/40** *"Book a consultation"*; lead 18/28 `ink-200`
`max-w-xl` *"Two hours at the property, and drawings you own whether or not you go ahead with us."*; then a
`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row` row of **two** CTAs:

- `Book a consultation` — `rounded-lg border border-primary-500 bg-transparent px-8 py-4`, 12/600 uppercase
  `+0.18em` `primary-400`, hover `bg-primary-500 text-ink-900` — **242 × 50**;
- `See the portfolio` — same geometry with `border-white/30 text-white`, hover `border-white` —
  **217 × 50**.

Below `sm` both are `w-full` (358 px) and stack.

**There is no `<form>` on this page** — `document.querySelector('form')` is `null`, and both CTAs point at the
`/contact` route. See §Deliberate deviations for the single-page merge.

### 8 — Footer (544 px, `#101010`)

`<footer class="border-t border-white/10 bg-ink-800 pt-16 text-ink-200 lg:pt-24">` →
`container` → `grid gap-12 lg:grid-cols-12 lg:gap-8`:

- **Brand column** (`lg:col-span-4`, measured 384): `logo-light.svg` at `h-10` (171 × 40); `max-w-xs`
  `gray-400` blurb *"Bathroom design and renovation plumbing in Chicago. Design, first fix, second fix and
  the trades around them, run by one studio."*; three social chips (`rounded-lg bg-gray-800 p-2.5`, 20 px
  glyph, `aria-label` Twitter / Instagram / LinkedIn) whose `href` is **`#`**; then `space-y-2 text-sm
  gray-400` contact block — `1140 West Fulton Market, Chicago, IL 60607`, `(555) 010-0244` (link
  `tel:(555) 010-0244` — **malformed**), `studio@onyxbath.example` (`mailto:`).
- **Three link columns** (`grid gap-8 sm:grid-cols-3 lg:col-span-5`, 141 px each at 1440):
  `Studio` → Bathrooms · Renovations · Fixture installation · Wet rooms; `Company` → Portfolio · Process ·
  Studio · Contact; `Support` → Privacy · Terms. Headings 14/600 uppercase `+0.7 px` white, links
  `gray-400` hover white, `space-y-3`.
- **`Licensed` column** (`lg:col-span-3`, 280 px): *"IL licence #000000, insured and bonded. Sample details
  for template demonstration."* + a **full-radius brass phone pill** (`bg-primary-600 px-5 py-3`, 16/700
  white, hover `primary-700`)**161 × 48**, `href="tel:5550100244"` (well formed — unlike the one 200 px above
  it).
- **Bottom bar**: `mt-16 flex … justify-between border-t border-gray-800 py-8` — `© 2026 Onyx. All rights
  reserved.` (14 `gray-500`) and `Privacy Policy` / `Terms of Service`.

The footer carries **no attribution link** in the reference. Ours must add the Component Dock line
(AGENTS.md rule 5) — see §Deliberate deviations.

### Chrome (outside the flow)

- **`#preloader`** — `fixed inset-0 z-[100] flex items-center justify-center bg-ink-900`, a 40 px
  `animate-spin` ring (`border-4 border-gray-200 border-t-primary-600 dark:border-gray-700
  dark:border-t-primary-400`); removed by the 370 B `load` handler with a 300 ms opacity fade.
- **`#scroll-progress`** — `fixed top-0 left-0 z-[60] h-0.5 bg-primary-600`, inline `width: 0%`, grown to
  `scrolledHeight / scrollableHeight` by the kit.
- **Skip link** — `href="#main-content"`, `sr-only focus:…`, first focusable element.
- **`#cookie-consent`** — `fixed bottom-0 inset-x-0 z-50 border-t … bg-white py-4 sm:py-6 dark:bg-gray-900`,
  `role="dialog" aria-label="Cookie consent"`, inline `transform: translateY(100%)`; copy *"We use cookies to
  enhance your experience. By continuing to visit this site you agree to our use of cookies."* + `Decline`
  (outline) and `Accept All` (`bg-primary-600`) storing `essential` / `accepted` in
  `localStorage['cookie-consent']`. **Measured `translateY(0)` on load** — it is visible immediately, 87 px
  tall at 1440 and 147 px at 390.
- **`#back-to-top`** — `fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-primary-600 text-white
  shadow-lg shadow-primary-600/25`, inline `opacity:0; pointer-events:none; transform:translateY(16px)` until
  `scrollY > 300`, then fades in; click scrolls smoothly to top.

## Behaviour the recreation must reproduce

Abstracted from the three page scripts **plus** the shared kit (only the handlers whose hooks exist here):

1. **Header state machine, two handlers on one element.** The kit's `[data-header]` adds/removes
   `shadow-lg` past **50 px**; the page's own script sets/removes the **`data-stuck` attribute** past
   **80 px**, which is what turns the header from `absolute` into `fixed` with `bg-ink-900/95` +
   `backdrop-blur` (measured at `scrollY = 400`: `position: fixed`, ground `oklab(… / 0.95)`, border 1 px
   `white/10`, `top: 0`). Both thresholds are observable; keep both.
2. **Scroll progress** — `#scroll-progress.style.width` follows scroll fraction; 2 px, `primary-600`.
3. **Mobile disclosure** — `[data-mobile-toggle]` flips `hidden` on `[data-mobile-menu]`, swaps the
   hamburger path for an X path, and maintains `aria-expanded`; it fires on `astro:page-load` too, so
   re-initialisation after navigation is part of the contract.
4. **Before/after slider** — `input` → after-image `clip-path` + divider `left`, initial value 50.
5. **Carousel** — per-view **3 at ≥1024, 2 at ≥640, 1 below**; `maxIndex = slides − perView`; arrows
   `display:none` when `maxIndex ≤ 0`; dots built only when `maxIndex > 0` (active dot a 32 px pill);
   track translated by `index × slideWidth`; arrows are `hidden … lg:flex` in markup but the kit writes
   `display` inline, so the **inline style decides**.
6. **Reveal on scroll** — only the five `[data-animate]` elements in `#testimonials`: set `opacity:0;
   translateY(20px); transition .6s`, stagger by `data-delay`, reveal at IO `threshold .1` /
   `rootMargin 0 0 -10%`, and **bail out entirely** when `prefers-reduced-motion: reduce`.
7. **Cookie strip** — shown on load when `localStorage['cookie-consent']` is absent, slides out and is
   removed within 300 ms on either button.
8. **Back-to-top** — appears past 300 px (opacity + `pointer-events` + `translateY`), smooth-scrolls up.
9. **Preloader** — removed on `window.load` + 300 ms fade; must never trap content when `load` has already
   fired (see `docs/conventions.md` §Document readiness).

## Data-attribute inventory (measured on the live index)

| attribute | count | element | owner |
| --------- | ----: | ------- | ----- |
| `data-header` | 1 | `<header>` | kit — adds `shadow-lg` past 50 px |
| `data-onyx-header` | 1 | `<header>` | page — sets `data-stuck` past 80 px |
| `data-mobile-toggle` / `data-mobile-menu` | 1 / 1 | header button / panel | kit |
| `data-carousel`, `-track`, `-slide`, `-prev`, `-next`, `-dots` | 1/1/**2**/1/1/1 | testimonials | kit |
| `data-before-after`, `data-range`, `data-after-image`, `data-divider` | 1 each | compare figure | page |
| `data-animate` / `data-delay` | **5** / **4** | testimonials only | kit |
| `data-cookie-accept` / `data-cookie-decline` | 1 / 1 | cookie strip | kit |
| `data-dark-toggle`, `data-nav-link`, `data-counter`, `data-faq-toggle`, `data-lightbox`, `data-parallax`, `data-validate`, `data-typewriter`, `data-billing-*`, `data-blog-*`, `data-video-*`, `data-accordion-toggle` | **0** | — | kit handlers present, **no hooks on this page** — do not implement them |

## Anchor map (all 40 `a[href]`)

| href | count | labels |
| ---- | ----: | ------ |
| `/theme/onyx/bathrooms` | 5 | Bathrooms ×3, Fixture installation, Wet rooms |
| `/theme/onyx/contact` | 5 | Book a consultation ×4, Contact |
| `/theme/onyx/portfolio` | 4 | Portfolio ×3, See the portfolio |
| `/theme/onyx/studio` | 4 | Studio ×3, More about the studio |
| `/theme/onyx/renovations` | 3 | Renovations |
| `/theme/onyx/process` | 3 | Process |
| `/theme/onyx/` | 2 | logo (header, footer) |
| `/theme/onyx/privacy` | 2 | Privacy, Privacy Policy |
| `/theme/onyx/terms` | 2 | Terms, Terms of Service |
| `/theme/onyx/portfolio/{linden-house,walnut-court,harper-loft}/` | 3 | the three project cards |
| `#` | **3** | three social chips (dead) |
| `#main-content` | 1 | Skip to content |
| `mailto:studio@onyxbath.example` | 1 | contact line |
| `tel:5550100244` | 1 | footer phone pill (valid) |
| `tel:(555) 010-0244` | 1 | footer contact line (**invalid**) |

That is **30** route anchors + **3** case studies + **3** dead `#` + 1 skip link + 1 `mailto:` + 2 `tel:` =
40. Every internal route answers **308** on the bare path and **200** with the trailing slash, so the header
links as authored each cost a redirect.

## Inner-page inventory (11 routes, all HTTP 200 with a trailing slash, 2026-10-25)

| route | bytes | holds |
| ----- | ----: | ----- |
| `/bathrooms/` | 30,057 | service page |
| `/renovations/` | 29,703 | service page |
| `/portfolio/` | 28,475 | project index |
| `/portfolio/linden-house/` | 29,369 | case study |
| `/portfolio/walnut-court/` | 29,343 | case study |
| `/portfolio/harper-loft/` | 29,317 | case study |
| `/process/` | 30,256 | the three stages, expanded |
| `/studio/` | 29,177 | about |
| `/contact/` | 31,587 | **the only `<form>` in the site** |
| `/privacy/` | 33,615 | legal |
| `/terms/` | 32,339 | legal |

`/contact/` carries `form.mt-8.space-y-6[data-validate][data-contact-form]` with four required-ish controls —
`text name` (placeholder `John Doe`), `email email` (`john@example.com`), `text subject` (placeholder
`Membership inquiry, event space, tour request...`), `textarea message` (`Tell us what you're looking for in
a workspace...`). **Two of those placeholders belong to a different (coworking) template** — the reference's
own copy pollution, see §Known reference defects.

## Class census (1440 px)

**278 distinct class tokens** in the markup; the 55,410 B sheet defines **523 distinct class selectors**, of
which **248 are unused by this page** (the shared kit's `.btn`/`.card`/`.container-narrow`, other templates'
light-mode pairs, `aria-pressed:`/`data-` variants the kit supports). Traffic litmus: **0 phantom classes** —
every token either has a rule or is a variant marker. Two escaping traps when re-running this:

- `group` (1 use, three times) has **no rule of its own** — it exists only to drive `group-hover:` /
  `group-focus-visible:` variants, so a "class with no rule" scan must whitelist it.
- `space-y-2` and `space-y-3` appear in the sheet only as `:where(…)`-wrapped selectors
  (`.space-y-2>:not(:last-child)`), so a naive `.class{` grep reports them as phantom. They are real.

## Screenshot analysis (`onyx-template.jpg`)

**70,617 B, served `image/avif` despite the `.jpg` name, 2400 × 1892** (`colorlib.com/wp/wp-content/uploads/
sites/2/onyx-template.jpg`; the catalogue also references `onyx-template.avif` and a
`onyx-template-1024x807.jpg` variant). It is a **composed browser-window mockup, not a raw capture**: a
macOS-chrome frame with traffic lights on a white ground, cropped to roughly the first two screens — the hero
(photo, eyebrow, two-line Playfair headline, lead, square brass outline) and the top of "Three rooms" with
**three** portrait cards visible in one row.

It confirms three things the DOM alone does not: (a) the hero copy sits **bottom-left with a generous left
gutter**, and the 65 % wash leaves the photograph readable as a room rather than a texture; (b) the three
portfolio cards read as one row of **4:5 portraits**, not a slideshow; (c) brass appears **only** as thin
rules, outlines and small caps — there is no brass fill anywhere above the fold.

**Do not adopt** the white ground, the window chrome, or the rounded window corners: they are catalogue
furniture. Also note the screenshot shows the **"Recent work / Three rooms" intro and the card row**, so the
reference's hover-only captions are invisible in it too — a reviewer comparing screenshot to build will not
see the project names, which is why the spec states them explicitly.

## Known reference defects — measure them, do not reproduce them

1. **`tel:(555) 010-0244`** in the footer contact block is an invalid URI (spaces and parentheses). The
   identical number 200 px to its right uses `tel:5550100244`. Emit one well-formed `tel:` in both places.
2. **`og:image` points at `/og-image.jpg` → 404.** Ship a real social card or drop the tag.
3. **The preloader is dismissed only on `window.load`.** With the seven remote Unsplash images (all
   `images.unsplash.com`, 200 OK but 97–156 KB each) the first paint is a **black plate with a brass
   spinner** — measured still present 2 s after `domcontentloaded`. Derive readiness from
   `document.readyState === 'complete'` as well, per `docs/conventions.md`.
4. **The third portfolio card leaves a hole at 390** — `grid-cols-2` with three items puts *Harper Loft* alone
   on row 2 with a 171 × 214 gap beside it. Let the last card span both columns below `lg` (or go single
   column).
5. **Portfolio captions are invisible at rest** (`opacity-0`, hover/focus-visible only). Keep the hover
   treatment but give the cards a visible label or an `aria-label`, so the band is not three anonymous
   photographs.
6. **The desktop carousel reserves three columns for two slides** — at ≥1024 the track is 1,216 px wide with
   two 405 px slides, so a **406 px empty third** sits to the right, and with `maxIndex 0` there are **no dots
   and no arrows**. It reads as a static left-aligned pair, not a carousel. Either centre the pair or make the
   per-view honest (`min(3, slides)`).
7. **The compare band has no `id`** while every other band does, so the page's most distinctive interactive
   element cannot be linked to. Give it `id="compare"`.
8. **The testimonial card's `text-white` has no `dark:` prefix** inside `bg-white … dark:bg-gray-800`. It is
   only legible because the theme is pinned dark; the same trap sits in the pill (`bg-primary-100` +
   `primary-700`) and the avatar discs. Do not port the light half.
9. **`#owner`'s lead paragraph carries both `text-ink-200` and `text-white`** — duplicate colour classes whose
   winner is decided by sheet order (measured: `rgb(255,255,255)`). Pick one.
10. **Copy pollution in the inner contact form** — `Membership inquiry, event space, tour request...` and
    `Tell us what you're looking for in a workspace...` are from a coworking template. If the single-page
    recreation merges that form (see below), rewrite both placeholders.
11. **Three button radii for one action** — the header CTA is `rounded-none`, the `#contact` CTA is
    `rounded-lg`, the footer phone is `rounded-full`, and the hero CTA has no radius at all. Keep the
    *deliberate* pairs (square in the hero/header, 8 px in the closing band, pill for the phone) but do not
    let a fourth one appear.
12. **The cookie strip shows on every load and covers the footer's bottom bar** (147 px of a 390 px viewport).
    Show it once per stored decision, and never over the last row of the page.

## Deliberate deviations from the reference (single-page recreation)

Recorded here so the implementer does not "restore fidelity" by re-breaking them:

- **D1 — nav targets.** The reference's five labels are *pages*. One page has bands, so the nav becomes
  `Bathrooms` → `#portfolio`, `Renovations` → `#process`, `Before & after` → `#compare`, and on the right
  `Studio` → `#owner`, `Contact` → `#contact` + the CTA → `#contact`. `Portfolio` is dropped as a label because
  it duplicates `Bathrooms`; `Before & after` is added because the reference has that band but no way to reach
  it. Keep the **3-left / logo-centre / 2-right + CTA** geometry.
- **D2 — the enquiry form.** The home page has **no form**; the form lives on `/contact`. A one-page template
  with four dead CTAs is a broken artefact, so the `#contact` band gains the reference's four-field enquiry
  (`name`, `email`, `subject`, `message`) beneath its two CTAs, with client-side validation and a visible
  success state (no backend). The band's `h2`, lead and both CTAs stay exactly as authored.
- **D3 — Component Dock footer link.** AGENTS.md rule 5 requires
  `https://www.componentdock.com/` ("Component Dock") in the footer; the three dead `#` social chips are
  replaced by one such link (keep the chip styling, point it at Component Dock, `rel="noopener"`).
- **D4 — zero dead links.** No `href="#"` anywhere: every nav item, footer link, CTA and project card targets
  a real band.
- **D5 — images.** All seven photographs become placeholders
  (`https://picsum.photos/seed/patina-<n>/<w>/<h>` at the reference's intrinsic sizes: hero 1920 × 1080,
  cards 960 × 1200, compare 1600 × 900, portrait 320 × 320). Never hotlink Unsplash.
- **D6 — the wordmark.** It is a **text** SVG (Playfair "ONYX", brass rule, Manrope subtitle) — recreate it as
  styled text/inline SVG; do not ship a rasterised logo and do not depend on a file we do not have.
- **D7 — dark only, no toggle.** See §Dark-only. Light-mode values are not implemented.

## Requirements

### Requirement 1: Page chrome (preloader, progress bar, skip link, cookie strip, back-to-top)

The app SHALL render the reference's out-of-flow chrome: a self-dismissing preloader, a 2 px brass
scroll-progress bar, a skip link to `#main-content`, a bottom cookie strip and a 48 px back-to-top disc.

#### Scenario: Preloader never traps content

- **GIVEN** the app mounts in jsdom, or in a browser whose document is already `complete`
- **WHEN** no further `load` event will fire
- **THEN** the preloader is treated as finished (`loaded || document.readyState === 'complete'`)
- **AND** in a real browser it fades over 300 ms and is removed from the DOM

#### Scenario: Progress bar and back-to-top

- **GIVEN** the page scrolled to 50 % of its scrollable height
- **THEN** `#scroll-progress` is **2 px** tall, `primary-600` `#ac8a1f`, and about half the viewport wide
- **AND** below **300 px** of scroll the back-to-top disc is `opacity: 0` / `pointer-events: none`; above it,
  `opacity: 1`, `translateY(0)`, and activating it scrolls smoothly to the top
- **AND** the disc is 48 × 48, `rounded-full`, `primary-600`, fixed `bottom-6 right-6`

#### Scenario: Cookie strip

- **GIVEN** no stored consent
- **WHEN** the page loads
- **THEN** the strip is visible (`translateY(0)`) as `role="dialog"` `aria-label="Cookie consent"`
- **AND** `Accept All` stores `accepted` and `Decline` stores `essential` in `localStorage['cookie-consent']`,
  and either removes the strip within 300 ms
- **AND** it never covers the footer's bottom bar, and never reappears once a decision is stored

#### Scenario: Skip link and landmarks

- **THEN** the first focusable element is "Skip to content" → `#main-content`, hidden until focused
- **AND** the document has exactly one `<h1>`, one `<main id="main-content">`, and `<header>`/`<footer>`
  landmarks

### Requirement 2: Header — transparent over the hero, fixed past 80 px, nav only from 1280

The app SHALL render a header that starts `absolute`/transparent over the hero, becomes `fixed` with
`ink-900/95` + blur + `shadow-lg` after scrolling, and shows its split nav only at ≥ 1280 px.

#### Scenario: At rest at 1440

- **GIVEN** a 1440 px viewport at `scrollY = 0`
- **THEN** the header is **97 px** tall (`h-24` + 1 px border), `position: absolute`, ground transparent,
  bottom border 1 px `white/10`
- **AND** the layout is `3 labels · centred wordmark · 2 labels + CTA`, the nav at 12/600 uppercase
  `+2.16 px` `ink-200`, the wordmark **171 × 40**
- **AND** the CTA is `Book a consultation`, `rounded-none`, 1 px `primary-500`, `px-5 py-2.5`, 12/600
  `primary-400`, measured **218 × 38**

#### Scenario: Stuck state

- **GIVEN** `scrollY = 400`
- **THEN** the header is `position: fixed`, `top: 0`, ground `ink-900` at 95 % with `backdrop-filter: blur`
- **AND** it also carries `shadow-lg` (the > 50 px behaviour), i.e. both thresholds are implemented
- **AND** the page content underneath does not jump on the absolute→fixed switch

#### Scenario: Breakpoints

- **GIVEN** widths 1024 and 1279
- **THEN** the desktop nav, the CTA and the wordmark's `lg:mx-6` gaps are hidden, the hamburger is shown, and
  the header is **81 px**
- **AND** at 1280 the five labels + CTA appear with no clipping or overlap (the nav is `xl`, not `lg`)

#### Scenario: Mobile panel

- **GIVEN** a 390 px viewport
- **WHEN** the hamburger is activated
- **THEN** `aria-expanded` flips, the hamburger glyph becomes an X, and a panel of the same five labels plus a
  full-width CTA is revealed (`hidden` → visible)
- **AND** activating it again closes the panel

### Requirement 3: Hero — full-bleed photograph, 65 % ink wash, bottom-left copy

The app SHALL render the hero as a `min-h-[70vh] lg:min-h-[88vh]` band with a full-bleed background
photograph, a `ink-900/65` overlay, and the copy bottom-aligned inside the container.

#### Scenario: Geometry at 1440

- **THEN** the band is **792 px** (`88vh`), the copy column starts at `x = 112`
- **AND** the eyebrow sits at `y = 348`, the `h1` at `388` (**768 × 138**), the lead at `550`
  (**576 × 56**), the CTA at `646` (**242 × 50**)
- **AND** the `h1` is Playfair 400 **60 / 69**, white, `max-w-3xl`, and the lead is 18/28 `ink-100`
- **AND** the overlay is `bg-ink-900/65` — a wash, not a scrim to black

#### Scenario: At 390 and 320

- **THEN** at 390 the band is **591 px** (`70vh`), the `h1` is 36/41.4 on two-to-three lines, and the lead and
  CTA stack below it
- **AND** at 320 the band grows to content (**640 px**) instead of clipping, and the CTA (242 px) still fits

### Requirement 4: `#portfolio` — three rooms, captions on hover/focus

The app SHALL render three 4:5 project cards in a 3-up grid at `lg` and a 2-up grid below, each linking to a
real band target, with a hover/focus caption carrying name + city.

#### Scenario: Grid at 1440

- **THEN** the intro column is `max-w-2xl` with eyebrow `Recent work`, Playfair `h2` "Three rooms" and a
  sample-data lead
- **AND** three cards measure **389 × 487** at `y = 1096`, `x = 112 / 525 / 939` (`gap 24`)
- **AND** each caption is Playfair 18 white + 12/600 uppercase `+0.18em` `primary-400`, revealed at
  `bg-ink-900/55` with the image scaled to `1.03`

#### Scenario: Cards at 390

- **THEN** the grid is **two columns of 171 px** with `gap 16`, cards **171 × 214**
- **AND** the third card spans the remaining width (deviation from the reference's empty cell)

#### Scenario: Accessible names

- **THEN** every card exposes "project name + city" as its accessible name whether or not it is hovered
- **AND** there are no bare `#` links

### Requirement 5: `#compare` — drag-to-compare before/after

The app SHALL render the before/after figure as an `overflow-hidden rounded-2xl` plate with two stacked
images, a white divider and a full-width range control, wired so the range drives both the clip and the
divider.

#### Scenario: Figure at 1440

- **THEN** the band is `ink-800` `#101010`, **1,092 px**, no eyebrow, Playfair `h2` "Before, and after eleven
  weeks" and an 18/28 lead
- **AND** the figure measures **1,216 × 684**, the after image is clipped `inset(0 0 0 50%)`, the divider is
  **2 px** `white/90` at `left: 50%`
- **AND** the `Before` / `After` chips are 12/700 uppercase on `black/50` at the top corners
- **AND** the range is labelled `Reveal the finished work` (`sr-only`) and sits at `bottom-4`, `w-[85%]`

#### Scenario: Dragging

- **GIVEN** the range is moved to 20
- **THEN** the after image is `clip-path: inset(0 0 0 20%)` and the divider is at `left: 20%`
- **AND** at `0` the after image is fully hidden and at `100` fully shown, with no layout shift

### Requirement 6: `#process` — three stages with a price and a duration

The app SHALL render the three stages as an `<ol>` of three `<li>` with a numeral + hairline rule header, an
`h3`, a body and a brass meta line, in one column below `sm`.

#### Scenario: Steps at 1440

- **THEN** the band is `ink-800`, **632 px**, its `h2` is **Manrope 700 36/40** (`−0.9 px`) — not Playfair
- **AND** each item is **389 × 176** in a 3-column grid with `gap 24`
- **AND** numerals `01`–`03` are `tabular-nums` `primary-400`, each followed by a `flex-1` 1 px `white/15` rule
- **AND** the meta lines read `From $300, credited`, `Two to three weeks`, `6 - 14 weeks`

#### Scenario: Steps at 390

- **THEN** the grid collapses to one column of **358 × 176** items, stacked with `gap 32`
- **AND** no rule or numeral overflows its column

### Requirement 7: `#owner` — centred studio statement with signature

The app SHALL render the studio band centred on `max-w-3xl` with a 112 px round portrait, a brass eyebrow, a
Playfair lead, two Manrope paragraphs, a signature, a city line and one underlined link.

#### Scenario: Composition at 1440

- **THEN** the band is `ink-900`, **868 px**; the portrait is **112 × 112** `rounded-full` at `y = 3531`
- **AND** the lead is Playfair **30 / 37.5** white (24 px at 390), `text-white` only — no duplicate
  `text-ink-200`
- **AND** the two paragraphs are 18/28 `ink-200` and include both the four-projects-at-a-time line and the
  "we are emphatically not it" line verbatim in substance
- **AND** the signature is Playfair 20 white, the city line 12/600 uppercase `+0.18em` `ink-300`
- **AND** `More about the studio` is the page's only `border-b border-primary-500` link, measured
  **193 × 21**

### Requirement 8: `#testimonials` — two long quotes, carousel that is static at 1440

The app SHALL render the testimonial band on the page's only cool ground with a `Clients` pill, a
Manrope-bold `h2` and a two-slide carousel whose arrows and dots follow `slides − perView`.

#### Scenario: Band at 1440

- **THEN** the band ground is `gray-900` **`#111827`**, **936 px**, and it is the only non-warm band
- **AND** the pill measures **69 × 28** (`rounded-full bg-primary-100`, 14/500), the `h2` is Manrope 700 36
- **AND** the cards are **381 × 488** and **381 × 376** (unequal heights by design), radius **16**, `p-8`,
  ground `#1f2937`, `shadow-soft`
- **AND** each card carries five `primary-400` stars, an 18/28/500 white quote, a 48 px initial disc, a 16/600
  white name and a 14/400 `ink-200` city

#### Scenario: Carousel geometry per width

- **GIVEN** two slides
- **THEN** at 1440 and 768 the arrows are hidden and there are **0 dots** (`maxIndex = 0`), and the pair is
  centred rather than pinned left with an empty third
- **AND** at 390 the per-view is 1, the arrows are visible outside the card, and there are **2 dots** (active
  = 32 px brass pill, inactive = 10 px)
- **AND** advancing translates the track by exactly one slide width

#### Scenario: Reveal respects reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** no element is left at `opacity: 0` and no transform transition runs

### Requirement 9: `#contact` — closing band, two CTAs, merged enquiry form

The app SHALL render the closing band with a Playfair `h2`, a one-sentence lead, two CTAs (brass outline +
white outline) and — as the single-page merge — the reference's four-field enquiry form.

#### Scenario: Band at 1440

- **THEN** the band is `ink-800`, **430 px**, `h2` Playfair 400 36/40, lead 18/28 `ink-200` on `max-w-xl`
- **AND** the two CTAs are **242 × 50** and **217 × 50** side by side (`gap 16`), both `rounded-lg`
- **AND** below `sm` both are full-width (358 px) and stacked

#### Scenario: Enquiry form

- **THEN** the form has `name` (text), `email` (email), `subject` (text) and `message` (textarea), each with a
  `<label>`
- **AND** submitting with an empty required field shows a per-field error and does not submit; a valid submit
  shows a visible success state without a reload or a backend call
- **AND** no placeholder mentions a workspace, a tour or a membership

### Requirement 10: Footer — four-zone plate, valid contact links, Component Dock

The app SHALL render the footer as a 12-column plate (brand 4 / links 5 / licence 3) with valid contact
targets, the brass phone pill, the bottom bar and the Component Dock attribution.

#### Scenario: Plate at 1440

- **THEN** the footer is `ink-800`, **544 px**, `pt-24`, top border 1 px `white/10`
- **AND** the brand column (384 px) holds the 171 × 40 wordmark, a `max-w-xs` blurb, one Component Dock chip
  and the address / phone / email lines
- **AND** the three link columns (141 px each) hold Studio (4), Company (4) and Support (2) with 14/600
  uppercase `+0.7 px` headings
- **AND** the `Licensed` column (280 px) holds the licence line and a **161 × 48** `rounded-full` `primary-600`
  phone pill
- **AND** the bottom bar is `mt-16 border-t border-gray-800 py-8` with the copyright and two legal links

#### Scenario: Corpus rules

- **THEN** every `tel:` is well formed (`tel:+15550100244`) and the email is a real `mailto:`
- **AND** the footer links `https://www.componentdock.com/` with the label "Component Dock"
- **AND** no app file contains the string "ColorLib" or the source slug

### Requirement 11: Responsive integrity from 320 to 1440

The app SHALL have no horizontal overflow at any width the reference supports, and the reference's own
overflow must not be inherited.

#### Scenario: No horizontal scroll

- **GIVEN** widths 320, 390, 768, 1024, 1280 and 1440
- **THEN** `document.documentElement.scrollWidth === clientWidth` at every width
- **AND** the hero CTA (242 px) and the contact CTAs never exceed the container at 320

#### Scenario: Document height tracks the reference

- **THEN** heights are within ~5 % of **6,197 px** at 1440, **6,386** at 768, **6,876** at 390 and
  **7,359** at 320

### Requirement 12: Accessibility and semantics

#### Scenario: Structure

- **THEN** one `<h1>` in the hero, headings descend without skipping, and every `<section>` has an accessible
  name (`aria-labelledby` or a heading)
- **AND** the compare figure is a `<figure>` with a `<figcaption>` or an `aria-label`
- **AND** the range input has a visible-on-focus label and `aria-valuetext` describing the reveal

#### Scenario: Interaction

- **THEN** every interactive element has a visible `focus-visible` ring (`primary-500`)
- **AND** the carousel arrows and dots are `<button type="button">` with `aria-label`s, and the dots expose
  the active one via `aria-current`
- **AND** the mobile toggle exposes `aria-expanded` and `aria-controls`
- **AND** nothing relies on hover alone to be operable (the captions also show on `focus-visible`)

### Requirement 13: Copy fidelity

#### Scenario: Voice preserved

- **THEN** the hero, the three stage bodies, the two testimonials, the studio paragraphs and the licence line
  appear in substance as quoted in §Band-by-band content — no "Welcome to", no exclamation marks, no
  "why choose us"
- **AND** the sample-data disclaimers stay ("Sample projects for template demonstration…", "Sample reviews for
  demonstration…", "Sample details for template demonstration.")
- **AND** the two testimonials are long (100+ words each); they are the design's argument, not filler

## Verification checklist

- [ ] `apps/patina` exists, `@free-react-templates/patina` in `package.json`, `public/CNAME` =
      `patina.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string and no "Onyx" in any app file
      (comments included)
- [ ] bands in this order: header → hero → `#portfolio` → `#compare` → `#process` → `#owner` →
      `#testimonials` → `#contact` → footer
- [ ] header **97 px** at 1440 / **81 px** below `lg`, `absolute` transparent at rest, `fixed` +
      `ink-900/95` + blur + `shadow-lg` past 80 px; nav **only at ≥1280**; wordmark **171 × 40**; CTA
      **218 × 38** `rounded-none`
- [ ] hero **792 px** at 1440 (`88vh`) / **591** at 390 (`70vh`) / **640** at 320; `ink-900/65` wash;
      `h1` Playfair 400 60/69 `max-w-3xl`; lead 18/28 `ink-100` `max-w-xl`; CTA **242 × 50** radius 0
- [ ] `#portfolio` **903 px** `#0b0b0b`: Playfair `h2` 36, three cards **389 × 487** at `y = 1096`,
      captions on hover **and** focus, third card spans both columns at 390
- [ ] `#compare` **1,092 px** `#101010`, figure **1,216 × 684**, divider 2 px `white/90` at 50 %, range
      labelled, `Before`/`After` chips, drag updates clip + divider
- [ ] `#process` **632 px** `#101010`: `h2` **Manrope 700** 36 `−0.9 px`, three items **389 × 176**,
      `01`–`03` `tabular-nums` + `flex-1` hairline, three meta lines
- [ ] `#owner` **868 px** `#0b0b0b`, 112 px portrait, Playfair lead **30/37.5**, two 18/28 paragraphs,
      signature 20, city line 12/600 `ink-300`, one `border-b` link (**193 × 21**)
- [ ] `#testimonials` **936 px** `#111827` (the only cool band), pill **69 × 28**, Manrope-bold `h2`,
      two cards radius 16 `p-8` `#1f2937` `shadow-soft` with 5 brass stars; **0 dots + hidden arrows at
      1440/768**, 2 dots + visible arrows at 390; pair centred
- [ ] `#contact` **430 px** `#101010`: Playfair `h2`, lead, CTAs **242 × 50** + **217 × 50** (`rounded-lg`,
      full width below `sm`), four-field enquiry form with validation and a visible success state
- [ ] footer **544 px** `#101010` `pt-24`, 12-col 4/5/3, Contact-block links valid, phone pill
      **161 × 48** `rounded-full`, bottom bar `mt-16 border-t py-8`, Component Dock link present
- [ ] chrome: preloader self-dismissing and non-blocking, 2 px brass progress bar, skip link, 48 px
      back-to-top past 300 px, cookie strip with `accepted`/`essential` and no repeat cover
- [ ] dark only: single dark palette, **no** theme toggle, no unreachable light-mode branch shipped
- [ ] fonts: Playfair Display 400/500/600 + Manrope 400/500/600/700 from Google Fonts with `display=swap`;
      the mid-page serif→sans switch at `#process` preserved; no italic heading
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440; document height within ~5 % of
      the reference at all four measured widths
- [ ] zero bare `#` anchors; one well-formed `tel:`; every image has an accessible name; the wordmark is a
      text/inline SVG, not a raster
- [ ] reduced motion: no element stuck at `opacity: 0`, no transform transitions, no smooth scrolling
- [ ] 100 % coverage on the new app and `scripts/verify-app.sh patina` green
