# Template: Enthalpy (HVAC replacement trade brand — a ten-year cost calculator is the page)

## Purpose

A **Phoenix HVAC replacement contractor whose product is the *number*, not the equipment**, and whose own copy
states the thesis above the fold:

> *"The cheapest system to buy is **rarely the cheapest to own.**"*

The `#cost` band is the template. It is a **three-system, four-horizon total-cost calculator** on a near-black
ground: a header with an eyebrow, an `h2` and a lead on the left and a **four-pill horizon group** on the right
(*5 yr · 10 yr · 15 yr · 20 yr*, `role="group"`, `aria-pressed`, **10 yr selected on load**), then **three
comparison cards** — builder grade, mid efficiency, variable speed — each carrying `data-price`, `data-running`,
`data-upkeep` and `data-life` on the `<article>`, a five-row `<dl>` of money, a **mono total** in `primary-300`
and a **rank pill** that re-sorts itself. The arithmetic is `price + (running + upkeep) × years`, plus
`price × floor((years − 1) / life)` when the horizon outlives the equipment, rounded to the nearest $50, and the
cheapest card takes the pill text **"Cheapest to own"** on `primary-500` while the other two show `#2` / `#3`.
Measured, the winner moves twice as the horizon moves: builder grade at 5 years, mid efficiency at 10 and 20,
variable speed at 15.

The rest of the page exists to make that band credible and every band keeps a caveat in it. The hero's right
column is **not a photograph** — it is a three-field request card (*Your name*, *Phone*, *Where are you up to?*
as a **native `<select>`** with six reasons) under the promise *"Three fields. We reply within the hour on
weekdays."* `#why-us` argues **against** the usual upgrade pitch (*"Yours is probably smaller than what you
have"*) in four left-ruled rules beside an **SVG diagram**, not a photo. `#rebates` is **six incentive cells on a
1 px hairline plate** totalling *"Up to $600"* / *"Up to $1,200"* / *"Up to $1,000"* / *"Up to $150"* /
*"Up to $400"* / *"From 0% for 12 months"*, with the note *"Programmes change. Every figure here is illustrative
and must be replaced with current amounts and eligibility before this page goes live."* `#process` is **four
steps in a three-column grid** (01–04, the fourth dropping alone onto a second row). `#areas` is **twelve town
names as plain text** with no map, and the page's own note says why. The FAQ answers include *"Otherwise we will
tell you to keep it, which costs us a sale and wins the maintenance."*

Composition: **one warm off-white hero, one near-black calculator band, then alternating `ink-50` / white
information bands, one stock-grey review carousel, one white FAQ, one `primary-700` closing band and one
`gray-900` footer.** At 1440 × 900 (measured, `getBoundingClientRect`):

| #  | band                                  | ground               |   top | height |
| -- | ------------------------------------- | -------------------- | ----: | -----: |
| 0  | licence bar `[data-licence-bar]`       | `ink-800` `#252522`  |     0 |     37 |
| 1  | `<header>` sticky, translucent white   | `#ffffff / 90 %`     |    37 |     81 |
| 2  | hero + the request card                | `ink-50` `#f7f7f6`   |   118 |    710 |
| 3  | `#cost` — the ten-year calculator      | `ink-900` `#171715`  |   828 |    995 |
| 4  | `#why-us` — diagram + four rules       | `ink-50` `#f7f7f6`   | 1,823 |    940 |
| 5  | `#rebates` — six cells on a plate      | `#ffffff`            | 2,763 |    931 |
| 6  | `#process` — four steps, three columns | `#ffffff`            | 3,694 |    764 |
| 7  | `#areas` — twelve towns                | `#ffffff`            | 4,458 |    468 |
| 8  | `#testimonials` — carousel of three    | `gray-50` `#f9fafb`  | 4,926 |    796 |
| 9  | `#faq` — five answers                  | `#ffffff`            | 5,722 |    820 |
| 10 | `#contact` — closing CTA               | `primary-700` `#1c5f55` | 6,542 | 440 |
| 11 | `<footer>`                             | `gray-900` `#111827` | 6,982 |    567 |

**Document height 7,549 px** at 1440 × 900 and at 1280; **7,312 px** at 1600; **7,959 px** at 1024; **9,609 px**
at 768; **12,153 px** at 390; **13,116 px** at 320. Hero top offset is **118 px** (37 licence bar + 81 header)
and the header is `sticky`, so every in-page anchor needs `scroll-margin-top ≥ 101 px`. `.section` is `py-20` →
`lg:py-28` (**80 px**, then **112 px**); the hero's container is `py-14` → `lg:py-20` (**56 px**, then **80 px**).
The container is `max-width: 80rem` with `px-4` / `lg:px-8`, so the content column is **1,216 px** at 1440 (box
1,280 px at x = 80) and the page is fluid below that.

The palette is **one warm-grey `ink` ramp, one teal-green `primary` ramp and stock Tailwind greys for four bands
and all chrome**. The jobs are not interchangeable: `ink-50` `#f7f7f6` is the **hero and `#why-us` ground**,
`ink-900` `#171715` the **`#cost` ground**, `ink-800` `#252522` the **licence bar and every heading on a light
band**, `ink-100` `#ededea` every hairline *and* the `#rebates` plate's 1 px background (the cells are white, so
the wrapper draws the dividers), `ink-500` `#67675c` every paragraph on a light band, `ink-400` `#8a8a7e` every
footnote, `ink-600` `#4d4d45` the desktop nav labels, `ink-700` `#3a3a34` form labels and the town list;
`primary-600` `#1f7668` is **every solid CTA, the scroll-progress bar, the back-to-top disc, the step numbers and
the `h1` accent span**, `primary-700` `#1c5f55` the **`#contact` ground and every eyebrow on a light band**,
`primary-500` `#2a9381` the **selected horizon pill and the "Cheapest to own" pill**, `primary-400` `#45b09b` the
**`#cost` eyebrow, the dark-mode eyebrows and the five review stars**, `primary-300` `#79cdba` the **three
totals**, `primary-200` `#aee3d5` every input border in dark mode, `primary-100` `#d8f2ea` the **`#contact`
lead and the `Reviews`/`Questions` badge ground**.

Teal is a **flat fill, never a gradient** — the page has **no gradient anywhere** except `dark:bg-primary-900/50`
on the review badge. Two products carry the warm/cool split deliberately: headings and body are **warm grey**
(`#252522`, `#67675c`), and every number that lines up in a column is **JetBrains Mono** on a cool teal tint.

The type is **two faces**. **Plus Jakarta Sans** (400/500/600/700/800) for everything, and **JetBrains Mono**
(500/700) **only for figures**: the four `dd` values in each cost card, the three totals, the `tabular-nums`
step numbers and the `tabular-nums` total line. Both arrive from Cloudflare's automatic font service
(`/cf-fonts/v/plus-jakarta-sans/5.2.8/{latin,latin-ext,vietnamese,cyrillic-ext}/wght/normal.woff2` and
`/cf-fonts/v/jetbrains-mono/5.2.8/…`, **variable `wght`**) in a `media="print"` inline `<style>` that flips itself
to `all` on load — **there is no Google Fonts `<link>` and no `@font-face` in the stylesheet**. Headings are 700
with **tight negative tracking** (`−1.5 px` on the 60 px `h1`, `−0.9 px` on the 36 px `h2`) and every eyebrow and
micro-label is 700 **uppercase with positive tracking** (`+0.35 px` on section eyebrows, `+0.7 px` on footer
headings). The pairing is the page's typographic signature: lose the negative tracking on headings and the mono
figures on the cards and a pixel-correct palette still looks like a different template.

Recreation of the ColorLib **"Rightsize"** design (https://colorlib.com/wp/template/rightsize/, live preview
https://preview.colorlib.com/theme/rightsize/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `rightsize`
- **ColorLib page:** https://colorlib.com/wp/template/rightsize/ — **HTTP 200, 111,844 B**, `<title>`
  **"Rightsize - HVAC Replacement Website Template 2026 - Colorlib"**. The listing's screenshot is
  `rightsize-template.jpg` (**118,154 B**, served as **`image/avif`** despite the `.jpg` extension,
  **2400 × 1892** — see §Screenshot analysis). `rightsize-template-1024x807.jpg` is offered beside it.
- **Live preview:** https://preview.colorlib.com/theme/rightsize/ — **HTTP 200, 77,779 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4`. `<title>` is **"HVAC replacement in Phoenix,
  priced on ten-year cost of ownership | Rightsize Air"**. A 2026 **Astro** build: one hashed stylesheet
  `_astro/Base.1gz22C_W.css` (**55,915 B**, `/*! tailwindcss v4.3.3 */`), one behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B** — byte-identical in size to
  the Conduit/Nightwatch/Drainwise/Cresting kit, which carries carousel/pricing/blog-filter/lightbox/typewriter
  handlers this page never uses), and the router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js` (**16,357 B**, the same file as
  every sibling in this 2026 set).
- **Four inline `<script>` bodies** (**442 B** pre-paint theme resolver · **1,382 B** the ten-year calculator ·
  **358 B** preloader teardown · **313 B** the JSON-LD data block). The calculator is the page's only
  page-specific logic: it reads `[data-tenyear]`, its `[data-horizon]` buttons and its `[data-system]` articles,
  and writes `[data-total]`, `[data-rank]`, `[data-life-note]` and `[data-horizon-label]`.
- **JSON-LD:** one `application/ld+json` block, `@type: "HVACBusiness"`, `name: "Rightsize Air"`,
  `telephone: "+1-555-0800"`, `areaServed: "Phoenix, Arizona"`, `priceRange: "$$"`, `url: "/"`. The telephone
  disagrees with every `tel:` link on the page (`5550800800`) — a delta, not a spec.
- **No archive, no alternate family path:** `theme/bootstrap/rightsize/` → **404**, `theme/bb/rightsize/` →
  **404**, `downloads/free/rightsize.zip` → **404**, `colorlib.com/etc/cs/rightsize/index.html` → **404**. The
  slug-only preview path is the live build, as expected for this family.
- **Single-page?** No. **Seven inner routes are live**, all HTTP 200 **with a trailing slash** (the bare path
  308s): `services` (45,715 B), `sizing` (45,480 B), `about` (40,444 B), `privacy` (40,946 B), `terms`
  (39,715 B), `contact` (39,165 B), `service-areas` (37,918 B). They are the authoritative reference for
  anything the home page only summarises (see §Inner-page inventory). `index.html` is the page itself.
- **Fonts:** **Plus Jakarta Sans** 400/500/600/700/800 + **JetBrains Mono** 500/700, both variable, from
  `/cf-fonts/` in the print-media inline `<style>`. The recreation loads them from Google Fonts explicitly
  (`css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap`).
- **Motion:** **14** elements carry `[data-animate]` with **12** `data-delay` values (0–300 ms). The kit fades
  them in on `IntersectionObserver` (`threshold .1`, `rootMargin 0 0 -10% 0`) and **bails out entirely** under
  `prefers-reduced-motion: reduce`.
- **Images:** exactly **four** `<img>` tags — `assets/img/logo.svg` (dark-on-light, header light theme),
  `assets/img/logo-light.svg` (header dark theme **and** footer), and **one authored SVG diagram**,
  `assets/img/sizing-panel.svg` (**800 × 600**, `alt` "A diagram showing an oversized system short cycling
  against a right-sized one running longer"). **There is no photograph on the page at all** — the only
  photographic slot is the `#why-us` `<figure>`, occupied by that diagram.

- **Recreation name:** `enthalpy` — one lowercase word, HVAC-adjacent (enthalpy is the total heat content of
  air, which is what a load calculation is estimating) and *not* the source name; no collision with `apps/`,
  `openspec/specs/`, `docs/templates/`, any bold name in `TEMPLATES.md` or any existing row
  (`git grep -il enthalpy origin/main` → **0 matches**, so zero substring hits and the `navpane`/`navpanel` trap
  does not apply), and `colorlib.com/wp/template/enthalpy/`, `preview.colorlib.com/theme/enthalpy/`,
  `preview.colorlib.com/theme/bootstrap/enthalpy/`, `preview.colorlib.com/theme/bb/enthalpy/`,
  `downloads/free/enthalpy.zip` and `colorlib.com/etc/cs/enthalpy/index.html` all → **404**. The recreation
  lives at `apps/enthalpy`, package `@free-react-templates/enthalpy`,
  `enthalpy.free.componentdock.com`. **No ColorLib string may appear in the app** — provenance lives in this
  spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5). `rightsized`, `rightsize`, `sized` and
  `airwise` were rejected: source, source, source-adjacent, and already the shipped *Thermly* design.
  `tonnage`, `drybulb` and `loadline` were checked and are free, but they read as jargon or as a shipping
  company rather than as the template's idea (the *energy* in the house).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**), so this design comes from `docs/catalog-coverage.md` — the
**42 standalone designs** on colorlib.com's listing that the checklist never recorded. This is row
**`rightsize`** of 42 (*preview 200, 77,779 B*), one row after `ridgeline`/**Cresting** and two after
`relay-auth`/**Gatehouse**. When the app ships, append this line under **`## Business`** — currently headed
`## Business (378)`, bump it to **379** — **in source-slug alphabetical order**, i.e. after **Repeat**
(`repeat`) and before **Roberto** (`roberto`); note that **Ridgeline** (`ridgeline`) sorts between them, so
re-read the section rather than trusting this line — a concurrent prep may have landed first:

```markdown
- [x] **Rightsize** — [colorlib](https://colorlib.com/wp/template/rightsize/) · [enthalpy](https://enthalpy.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/rightsize-template.jpg)
```

## Reference readings (2026-10-25, `curl -4`)

| what                                       | value                                                                                                       |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| preview HTML                                | 200, **77,779 B**, `text/html; charset=utf-8`                                                                |
| stylesheet `_astro/Base.1gz22C_W.css`       | 200, **55,915 B**, `/*! tailwindcss v4.3.3 */`                                                               |
| behaviour kit `…_lang.BLoalVWc.js`          | 200, **16,233 B** (the house kit; carousel/pricing/blog/lightbox handlers unused here)                        |
| router `…CYDbzu1r.js`                       | 200, **16,357 B** (same house router as every sibling)                                                       |
| inline `<script>` bodies                    | **4**: theme 442 B · ten-year calculator 1,382 B · preloader 358 B · JSON-LD 313 B                            |
| logo                                       | `assets/img/logo.svg` + `assets/img/logo-light.svg`; natural **150 × 32**, header `h-8` → 32 (`lg:h-9` → 36), footer **190 × 40** (`h-10`) |
| content images                              | **1** authored SVG diagram `assets/img/sizing-panel.svg` (**800 × 600**) — **no photographs**                 |
| favicon / OG                                | `favicon.svg`; `og:title`, `og:description`, `og:type`, `og:site_name`, `og:image=/og-image.jpg` (**404**, the file is not in the build), `twitter:card=summary_large_image`; **no canonical**; `<meta name="robots" content="noindex, nofollow">` |
| inner routes                                | **7** top-level, all 200 only with a trailing slash (see §Inner-page inventory)                              |
| document height                             | **7,549 px** at 1440 × 900 and at 1280; 7,312 at 1600; 7,959 at 1024; 9,609 at 768; 12,153 at 390; 13,116 at 320 |
| anchors                                     | **42** `a[href]` — 30 path links, 3 path + `#cost`, 4 `tel:` (**one malformed**), 1 `mailto:`, 2 `#service-areas` (**dead id**), 3 bare `#`, 1 skip-link `#main-content` |
| inline `<svg>`                              | **44** (0 icon font, 0 sprite sheet): 5 hero stars, 1 licence-bar star, 15 review stars, the rest chrome/social |
| headings                                    | 1 × `h1`, **9** × `h2` (the request card owns one), **17** × `h3`                                            |
| structure                                   | **335** distinct utility names across `class="…"` attributes (**330** in the live DOM), **16** ids, 3 `<input>`, **1** `<select>`, 18 `<button>`, 4 `<dl>` |
| class census (measured)                     | **0 phantom** — every markup class resolves to a rule in the compiled sheet. The single apparent miss, `2xl:block`, is emitted as `.\32 xl\:block`; a naive `grep` reports it as missing (the escape trap) |

## Design tokens (measured from `Base.1gz22C_W.css`, 55,915 B, and `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal hex values** in the
> compiled utilities, so the sheet contains **no `--color-ink-*` or `--color-primary-*` custom properties** (only
> Tailwind's generated defaults — `--color-white`, `--color-green-600`, `--spacing: .25rem`,
> `--radius-lg/xl/2xl`). The ramps below were reconstructed by parsing every `*-ink-<n>` / `*-primary-<n>`
> utility rule, then confirmed against `getComputedStyle` on the rendered page. That is the authority; declare
> the ramps in the app's own `@theme`. Dark variants are emitted as `.dark\:bg-gray-900:is(.dark *)` (**17**
> `:is(.dark *)` selectors), so a class-based `dark` variant is what the reference actually uses — not a media
> query.

### `ink` — warm-grey neutral ramp (all structure, all text on light bands)

| step | hex       | used for                                                                                    |
| ---- | --------- | ------------------------------------------------------------------------------------------- |
| 50   | `#f7f7f6` | **hero + `#why-us` ground**, `hover:bg-ink-50` on the theme toggle and hamburger               |
| 100  | `#ededea` | every hairline on a light band, header bottom border, **`#rebates` plate background** (draws the 1 px gaps), step rules, town-list rules, licence-bar text |
| 200  | `#dbdbd5` | form field and select borders (`border-ink-200`), the city/phone pill borders                  |
| 300  | `#b7b7ad` | **placeholder text only** (`placeholder:text-ink-300`)                                        |
| 400  | `#8a8a7e` | every **footnote** (rebate note, area note, form footnote), the `#why-us` figcaption           |
| 500  | `#67675c` | every paragraph / section lead on a light band, the theme-toggle icon                          |
| 600  | `#4d4d45` | desktop nav labels, the rating line, the hamburger icon                                        |
| 700  | `#3a3a34` | form labels, the ticked promises, the twelve town names                                        |
| 800  | `#252522` | **licence-bar ground, every `h2`/`h3` on a light band**, the request card's `h2`, the select value |
| 900  | `#171715` | **`#cost` ground** (the calculator band)                                                      |

### `primary` — teal-green ramp (CTAs, eyebrows, the numbers)

| step | hex       | used for                                                                                                     |
| ---- | --------- | ------------------------------------------------------------------------------------------------------------ |
| 50   | `#f0faf7` | `hover:bg-primary-50` ground of the white closing button                                                       |
| 100  | `#d8f2ea` | **`Reviews` / `Questions` badge ground**, the 48 px review avatar disc, the `#contact` lead                     |
| 200  | `#aee3d5` | dark-mode input borders (`dark:border-primary-200`), `border-primary-200` on the pills' hover                    |
| 300  | `#79cdba` | **the three totals** (`text-primary-300`) and dark-mode link accents                                           |
| 400  | `#45b09b` | **`#cost` eyebrow**, the **five review stars** (`text-primary-400`), every dark-mode eyebrow (`dark:text-primary-400`) |
| 500  | `#2a9381` | **selected horizon pill** (`aria-pressed:bg-primary-500`), **"Cheapest to own" rank pill**, focus rings (`ring-primary-500/20`), the mid card's border |
| 600  | `#1f7668` | **every solid CTA** (header, card submit, footer Subscribe, back-to-top), the **`h1` accent span**, the five tick glyphs, scroll-progress bar, step numbers and the process rules' text |
| 700  | `#1c5f55` | **`#contact` ground**, **every eyebrow on a light band**, rebate amounts, step duration tags, CTA hover         |
| 800  | —         | **not emitted** on this page                                                                                  |
| 900  | `#193f3a` | dark-mode `dark:bg-primary-900` (avatar disc) and `dark:bg-primary-900/50` (review badge)                      |

### Stock Tailwind greys (only `#testimonials`, `#faq`, the footer and the chrome)

`gray-50 #f9fafb` (**`#testimonials` ground**, `hover:bg-gray-50` on the cookie Decline) · `gray-100 #f3f4f6`
(**FAQ icon disc**) · `gray-200 #e5e7eb` (FAQ divider, cookie top border, preloader ring) · `gray-300 #d1d5db`
(cookie Decline border, inactive carousel dots) · `gray-400 #9ca3af` (footer body/notes, dark-mode body) ·
`gray-500 #6b7280` (footer bottom-bar text, footer input placeholder) · `gray-600 #4b5563` (FAQ panel text,
testimonial town, cookie sentence) · `gray-700 #374151` (footer input border) · `gray-800 #1f2937` (footer input
ground, footer social chips, footer bottom border, dark-mode review cards) · `gray-900 #111827` (**footer
ground**, `#testimonials`/`#faq` headings) · `gray-950 #030712` (dark-mode body and `dark:bg-gray-950` bands).
`amber-400` `#fbbf24` is used for exactly **two** star rows — the licence bar's single star and the hero's five;
**the review-carousel stars are `primary-400` `#45b09b`, not amber.**

### Type scale (Plus Jakarta Sans + JetBrains Mono)

| role                          | size / line-height            | weight     | tracking   | colour                                                     |
| ----------------------------- | ----------------------------- | ---------- | ---------- | ---------------------------------------------------------- |
| `h1` (hero)                    | **60 / 66** (1.1), 48 at `sm`, 36 at base | **700** | **−1.5 px** | `ink-800` `#252522`, accent span `#1f7668`                 |
| `h2` (section)                 | **36 / 40**, 30 at `sm`, 24 at base | **700** | **−0.9 px** | `#252522` light band · `#ffffff` on `#cost`/`#contact` · `#111827` on `#testimonials`/`#faq` |
| `h2` (request card)            | **24 / 32** (20/28 on mobile)  | **700**    | normal     | `#252522`                                                   |
| `h3` (cost card)               | **20 / 28**                    | **700**    | normal     | `#ffffff`                                                   |
| `h3` (rebate / step / rule)    | **18 / 28**                    | **700**    | normal     | `#252522`, white on the cost band                           |
| eyebrow / kicker               | **14 / 20**, uppercase         | **700**    | **+0.35 px** | `#1c5f55` on light bands · `#45b09b` on `#cost`            |
| section lead                   | **18 / 28**                    | 400        | normal     | `#67675c` light · `white/70` on `#cost`                     |
| body / card copy               | **16 / 24**                    | 400        | normal     | `#67675c` (`text-sm` 14/20 on card notes)                   |
| cost `dt`                      | **14 / 20**                    | 400        | normal     | `white/50`                                                  |
| cost `dd` (figures)            | **14 / 20**                    | **600**    | normal     | `#ffffff`, **JetBrains Mono**                               |
| cost total                     | **30 / 36**                    | **700**    | normal     | `#79cdba`, **JetBrains Mono**, `tabular-nums`                |
| rank pill                      | **12 / 16**                    | **700**    | normal     | `white/60` on `white/10`, or `#171715` on `#2a9381`          |
| hero promise list              | **16 / 24**                    | **500**    | normal     | `#3a3a34`                                                   |
| reviewer quote                 | **18 / 28**                    | **500**    | normal     | `#111827`                                                    |
| footer heading                 | **14 / 20**, uppercase         | **600**    | **+0.7 px** | `#ffffff`                                                   |
| fine print                     | **12 / 16**                    | 400        | normal     | `#ededea` on the licence bar · `#8a8a7e` on white            |

### Spacing, radii, shadow, chrome

- `--spacing: .25rem`; `.section{padding-block: 5rem}` → `7rem` at `≥ 64rem` (**80 → 112 px**, measured). Hero
  container `py-14` → `lg:py-20` (**56 → 80 px**).
- Container: `max-width: 80rem` (1,280 px), `padding-inline: 1rem` → `2rem` at `lg`. Measured **1,280 px** box /
  **1,216 px** content at 1440 (x = 80 / 112).
- Radii: **8 px** (`--radius-lg`) on every button, input, select, social chip and the theme toggle; **16 px**
  (`--radius-2xl`) on the request card, each cost card, the `#rebates` plate, each review card and the `#why-us`
  figure; **full** on every pill (horizon group, rank pill, badges, avatar disc, back-to-top disc, tag pills).
- Shadow: `.shadow-soft{--tw-shadow: 0 4px 16px -4px #0000001a}` — the **request card** and the **review
  cards**. `shadow-lg` on the header past 50 px of scroll, on the cookie strip and on the carousel arrows;
  `shadow-primary-600/25` under the back-to-top disc. The cost cards carry **no shadow** (border + `white/5`
  fill only).
- Chrome: `#preloader` (white overlay, 40 px `border-4` spinner, top segment `primary-600`), `#scroll-progress`
  (**2 px**, `primary-600`, `z-60`), skip link (`focus:fixed` top-left `primary-600` chip), `#back-to-top`
  (**48 px** disc, `primary-600`, fixed `bottom-6 right-6`, `opacity: 0` until 300 px), `#cookie-consent`
  (**87 px** white strip, `border-t gray-200`, `py-4 sm:py-6`, `translateY(100%)` until 1,500 ms,
  `role="dialog"` + `aria-label="Cookie consent"`).

### Dark mode (`.dark` on `<html>`, measured by clicking the toggle and re-reading `getComputedStyle`)

| surface                          | light                    | dark (`<html class="dark">`)                     |
| -------------------------------- | ------------------------ | ------------------------------------------------ |
| `<body>`                         | `#ffffff`, text `#111827` | `#030712`, text `#f3f4f6`                        |
| licence bar                      | `#252522` (unchanged look) | `gray-900` `#111827`                            |
| `<header>`                       | `#ffffff / 90 %`          | `gray-950 / 90 %`, border `gray-800`             |
| hero                             | `#f7f7f6`                | `gray-900` `#111827`                             |
| `#cost`                          | `#171715` (unchanged)     | `#171715` — the cards' `white/5` fill stays      |
| `#why-us`                        | `#f7f7f6`                 | `#111827`                                        |
| `#rebates` / `#process` / `#areas` / `#faq` | `#ffffff`       | `gray-950` `#030712`                             |
| `#rebates` plate                 | `#ededea` gaps            | `gray-800` gaps                                  |
| `#testimonials`                  | `#f9fafb`                 | `gray-900` `#111827`, cards `gray-800`           |
| `#contact`                       | `#1c5f55` (unchanged)     | `#1c5f55` — white text stays                     |
| `<footer>`                       | `#111827` (unchanged)     | `#111827`                                        |
| request card                     | `#ffffff`                 | `gray-950` `#030712` with `gray-700` borders      |
| headings on light bands          | `#252522`                 | `#ffffff`                                        |
| paragraphs on light bands        | `#67675c`                 | `#9ca3af` — **never both greys at once**          |

## Band map and geometry (measured at 1440 × 900, `getBoundingClientRect`)

| band            | geometry                                                                                                        |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| licence bar     | **37 px**, `#252522`, one row `h-9` (`flex items-center justify-between gap-4`), left `<ul>` **`overflow-hidden`** with 3 facts at 12/400 `#ededea` (`Licence` / `AZ ROC #000000`, `Manual J on every quote`, `Serving` / `Maricopa County`; items 2–3 `hidden sm:flex`, labels `opacity-70`, values `font-semibold`), right: one `amber-400` star + `4.9` + `300+ reviews on Google (sample)` at `opacity-70` |
| header          | **81 px** (`h-16` → `lg:h-20` + 1 px border), `sticky top-0`, `white/90` + `backdrop-blur-lg`, border `#ededea`; container `gap-6`; logo **h-8** (`lg:h-9`); nav **6 labels** 14/600 `#4d4d45` `gap-7` (`xl:flex` only); city pill (`#service-areas`, **dead**), phone pill, theme toggle **36 × 36** radius 8, CTA `#1f7668` `px-5 py-2.5` 14/700 (`xl:inline-flex`); hamburger `xl:hidden` |
| hero            | **710 px**, `ink-50`; container `py-20` (80) `px-8`, **1,280 px** box; grid **12 cols, 64 px gap**, **550 px** tall at y = 198; copy **683 px** (`lg:col-span-7`, `lg:pt-6`), card **469 px** (`lg:col-span-5`) at x = 859 |
| hero copy       | eyebrow 14/700 `#1c5f55` +0.35 uppercase at y = 222; `h1` **683 × 198** at y = 258, 60/66 **700** −1.5 `#252522` with the second sentence in `#1f7668`; lede `max-w-xl` **576 × 84** 18/28 `#67675c`; rating row `inline-flex` 14 `#4d4d45` (5 `amber-400` stars, bold `4.9`, `opacity-80` label); `<ul>` `mt-8` `sm:grid-cols-2` `gap-3`, four items **335 px** 16/24 **500** `#3a3a34` with a 16 px `#1f7668` tick (`gap-2.5`) |
| request card    | **469 × 509** at x = 859, y = 198; white, radius **16**, `p-8`, `shadow-soft`, **no border**; `h2` **403 × 32** 24/32 700 `#252522`; sub-line 14 `#67675c`; `form` `mt-6 space-y-4` → fields **403 × 50** radius 8 border `#dbdbd5` `px-4 py-3` 16 (`select` 403 × 49); labels 14/600 `#3a3a34` (`mt-1.5` gap); submit **403 × 52** radius 8 `#1f7668` 16/700 `py-3.5`; footnote 12 `#8a8a7e` centred |
| `#cost`         | **995 px**, `#171715`, white text, `py-28`; header row `flex … sm:items-end sm:justify-between` **1,216 × 212** at y = 940: text block `max-w-2xl` (**672 px**) + pill group **256 × 46** at x = 1,072; cards grid **3 × 389 px**, `gap: 24px`, **439 px** tall at y = 1,200 |
| cost card       | **389 × 439**, radius 16, `p-6`, 1 px `white/10`, ground `white/5`; the **middle card is the featured one**: `border-primary-500` + `bg-white/[0.07]`; `h3` 20/28 700 white + rank pill top-right (28 × 24 · `px-2.5 py-1` · 12/700); blurb `mt-2 flex-1` 14 `white/60`; `dl` `mt-6 space-y-3 border-t white/10 pt-5` of five rows (14 `white/50` `dt` / **mono** 14/600 white `dd`); then `border-t white/10 pt-5`: 12/700 uppercase `white/40` label `Total over N years`, **mono 30/36 700** `#79cdba` total, and a `min-h-[1.25rem]` 12 `white/40` replacement note |
| `#why-us`       | **940 px**, `#f7f7f6`; grid **2 cols**, `gap: 48px` → `lg:gap-16` (64), `items-center`; figure **`order-last lg:order-first`** with the SVG at full width (radius 16) + 14 `#8a8a7e` figcaption; right column: eyebrow `Sizing`, `h2` **672 px**, lead, then `<dl>` `space-y-6` of four entries each `border-l-2 #1f7668 pl-5` (16/700 title + 16/24 `#67675c` body) |
| `#rebates`      | **931 px**, white; header `max-w-2xl` **672 × 172** at y = 2,875; plate **1,216 px** at y = 3,095, **443 px** tall, radius 16, 1 px `#ededea`, `gap: 1px`, ground `#ededea`, `sm:grid-cols-2 lg:grid-cols-3` → cells **404 × 232** (two rows of three) `p-6 lg:p-8`, white; `h3` 18/28 700 `#252522`, copy `mt-2 flex-1` 16 `#67675c`, amount `mt-4` 14/700 **`#1c5f55`**; footnote 14 `#8a8a7e` full width at y = 3,562 |
| `#process`      | **764 px**, white; header `max-w-2xl`; `<ol>` **1,216 px** at y = 3,970, **376 px** tall, `grid gap-8 sm:grid-cols-3 sm:gap-6` → **389 px** columns; **four** `<li>`: 01/02/03 in row 1, **04 alone in row 2**; each head `flex items-baseline gap-3` (14/700 `tabular-nums` `#1f7668` number + a `h-px flex-1 bg-ink-100` rule), `h3` `mt-4` 18/700, body `mt-2` 16 `#67675c`, duration `mt-3` 14/600 `#1c5f55` |
| `#areas`        | **468 px**, white; grid **12 cols, 64 px gap**; `h2` in `lg:col-span-5` (**469 px**, `#252522`, **no eyebrow**), list **683 px** in `lg:col-span-7` at x = 645; `<ul>` `grid-cols-2 sm:grid-cols-3` → **212 px** items, `py-2.5`, 16 `#3a3a34`, 1 px `#ededea` bottom border, 12 items; note `mt-6` 14 `#67675c` |
| `#testimonials` | **796 px**, `#f9fafb`, `py-20 lg:py-28`; header centred `max-w-3xl` (**768 px**): `Reviews` **pill** (`#d8f2ea` / `#1c5f55`, 14/**500**, `px-3 py-1`) then `h2` `#111827` 36/40 −0.9 and lead 18 `#4b5563`; carousel **1,216 × 380** at y = 5,230; three slides **405 px** (`px-3`), each card **381 × 348** white radius 16 `p-8` `shadow-soft`; **0 dots, arrows `display: none` at ≥ 1024** |
| `#faq`          | **820 px**, white; `max-w-3xl` **768 px** at x = 336; badge `Questions`; `h2` at y = 5,898 `#111827`; list `divide-y #e5e7eb`, five rows `py-6`; button **768 × 32**, question 18/600 `#111827`, disc **32 px** `#f3f4f6` with a `#4b5563` plus; panel `overflow-hidden transition-all duration-300` with `max-height: 0; opacity: 0` |
| `#contact`      | **440 px**, `#1c5f55`, `py-28`; inner `max-w-3xl` **768 × 216** at x = 336, centred; `h2` 36/40 −0.9 white; lead `mx-auto max-w-xl` 18/28 **`#d8f2ea`** `mt-5`; button row `mt-10 flex flex-col sm:flex-row gap-4`: solid white **241 × 56** radius 8 `px-8 py-4` 16/700 `#1c5f55`, and outline **2 px `white/40`** **259 × 60** transparent white 16/700 with a phone glyph |
| footer          | **567 px**, `#111827`, `pt-24` (`lg:pt-24`, 96 px); container grid **12 cols, 32 px gap**, **322 px** tall at y = 7,078; brand `lg:col-span-4` (40 px light logo, `max-w-xs` blurb 16 `gray-400`, **three 40 × 40** `#1f2937` social chips with `aria-label`s, then address/phone/email 14 `gray-400`); link columns `sm:grid-cols-3` inside `lg:col-span-5` (headings 14/600 uppercase white `+0.7 px`, links 16 `gray-400` `space-y-3`); newsletter `lg:col-span-3` (blurb, one row: input **161 × 46** `#1f2937` border `#374151` + `Subscribe` `#1f7668`); bottom bar `mt-16 border-t #1f2937 py-8` (**85 px**, `flex-col sm:flex-row`), copyright 14 `gray-500` + two legal links |

## Content inventory (use this copy verbatim — do not re-invent, do not "improve")

**Licence bar** — `Licence` `AZ ROC #000000` · `Manual J on every quote` · `Serving` `Maricopa County`
(items 2–3 `hidden sm:flex`); right: ★ `4.9` `300+ reviews on Google (sample)`.

**Header nav** — Compare systems (`#cost`) · Sizing · Services · Service areas · About · Contact; city pill
`Phoenix, AZ` (`#service-areas`, **dead**); phone pill `(555) 080-0800`; theme toggle; CTA
`Book a load calculation`.

**Hero** — eyebrow `Phoenix · Licensed ROC contractor`; `h1` *"The cheapest system to buy* **is rarely the
cheapest to own.***"* (accent span starts at *"is rarely"*); lede *"In a Phoenix summer the difference between a
builder-grade unit and a good one is about nine hundred dollars a year. Over the life of the system that is not a
rounding error, it is the decision."*; rating `4.9` `300+ reviews on Google · sample data`; four promises
*"Manual J load calculation on every quote" · "Three systems compared on total cost of ownership" · "Rebates and
tax credits itemised, and filed for you" · "We will tell you if yours has years left"*.

**Request card** — `Book a load calculation` / *"Three fields. We reply within the hour on weekdays."*; fields
`Your name` (`placeholder="First and last name"`, `autocomplete="name"`, required), `Phone`
(`type="tel"`, `placeholder="(555) 000-0000"`, `autocomplete="tel"`, required), `Where are you up to?`
(`<select name="problem" required>` with `Choose the closest match` (`value=""`), *My system has failed*,
*It still runs but it is old*, *I have quotes and want a second opinion*, *Rooms will not cool evenly*,
*My bills have climbed*, *Building or renovating*); submit `Book the calculation`; footnote *"No obligation. You
keep the calculation whether or not you buy from us."*

**`#cost`** — eyebrow `Total cost of ownership`; `h2` *"Move the slider and watch the winner change"*; lead
*"Purchase, running and upkeep added together over a horizon you choose. At five years the cheap unit usually
wins. At fifteen it usually does not, and if it needs replacing inside your horizon the totals include buying it
twice."* Horizon group `aria-label="Choose how many years to total"`, buttons `5 yr` · `10 yr` (**pressed**) ·
`15 yr` · `20 yr`. Three `<article data-system=…>`:

| # | title | blurb | installed | running/yr | upkeep/yr | life | efficiency | data (`price/running/upkeep/life`) |
| - | ----- | ----- | --------: | ---------: | --------: | ---: | ---------- | ---------------------------------- |
| 0 | Builder grade | *"The unit most quotes lead with. Single stage, minimum efficiency, cheapest on the invoice."* | `$6,400` | `$2,150` | `$250` | 12 | `14.3 SEER2` | `6400 / 2150 / 240 / 12` |
| 1 | Mid efficiency | *"Two stage, better coil, quieter. The system most households should be comparing against."* | `$9,600` | `$1,600` | `$200` | 16 | `16 SEER2` | `9600 / 1620 / 180 / 16` |
| 2 | Variable speed | *"Inverter driven, modulates rather than cycling. Best in a house with uneven rooms or a long cooling season."* | `$13,400` | `$1,300` | `$200` | 18 | `20 SEER2` | `13400 / 1280 / 190 / 18` |

Each card: `Installed` · `Running, per year` · `Upkeep, per year` · `Efficiency`, then `Total over N years`.
Closing note: *"Sample figures for a typical 2,000 square foot Phoenix home at local utility rates. Replace every
number with your own before launch; running costs move enormously with rates, ductwork and how the house is
used."* Closing CTA: `Get these figures for your house`.

**`#why-us`** — eyebrow `Sizing`; `h2` *"Yours is probably smaller than what you have"*; lead *"The fastest way
to quote a replacement is to read the model number off the old condenser and match it. It is also wrong more
often than it is right."* Four rules: `The old size is not evidence` · `Oversized does not mean cooler` ·
`A Manual J takes about an hour` · `You keep the calculation` (bodies reproduced from the reference; the last is
*"Whether or not you buy from us. Take it to two other contractors and ask why their proposed tonnage differs
from it."*). Figure caption: *"Replace with a photograph of your own crew taking measurements before launch."*

**`#rebates`** — eyebrow `Rebates`; `h2` *"The part of the price nobody itemises"*; lead *"Federal credits,
utility rebates and manufacturer promotions stack, and they are the difference between the mid and the cheap
system more often than people expect. Sample figures; verify current programmes before launch."* Six cells:
`Federal efficiency credit` / `Up to $600` · `Utility rebate` / `Up to $1,200` · `Manufacturer promotion` /
`Up to $1,000` · `Smart thermostat rebate` / `Up to $150` · `Duct sealing incentive` / `Up to $400` ·
`Financing` / `From 0% for 12 months`. Footnote: *"Programmes change. Every figure here is illustrative and must
be replaced with current amounts and eligibility before this page goes live."*

**`#process`** — eyebrow `How a quote happens`; `h2` *"An hour in the house before a number"*; lead *"Four
steps, and you can stop after the second holding the calculation."* Four steps:
`01 We measure the house` / `60 to 90 minutes` · `02 You get the load calculation` / `Same day` ·
`03 Three options, priced to own` / `Within 1 working day` · `04 We fit it and register it` / `1 to 2 days`.

**`#areas`** — `h2` *"Where we work"* (**no eyebrow**); lead *"Maricopa County. Replacement work travels further
than service work, so if you are outside this list it is still worth a call."* Twelve towns: Phoenix, Scottsdale,
Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, Avondale, Queen Creek. Note *"Replace this
list with your own towns. Written as plain text it is the cheapest local search signal a trade site has."*

**`#testimonials`** — badge `Reviews`; `h2` *"What people say afterwards"*; lead *"Sample reviews for
demonstration. Replace with your own, ideally pulled from Google."* Three reviews: **Bernadette H.** (Arcadia,
initial `B`) — *"Three companies quoted four tons because that is what we had. Rightsize measured and said three.
Two summers in, the house is even upstairs for the first time and the bill dropped."*; **Curtis A.** (Chandler,
`C`) — *"The ten-year table changed my mind completely. I was about to buy the cheapest one. Seeing that it
needed replacing inside the horizon made the middle option obvious."*; **Lena M.** (Peoria, `L`) — *"They filed
the utility rebate themselves and it landed before the first bill. The other quote just said rebates may be
available."*

**`#faq`** — badge `Questions`; `h2` *"Before you sign a quote"*; lead *"The questions worth asking every
contractor, including us."* Five questions: *Will you do a Manual J, and can I see it?* · *Why is your quote not
the cheapest?* · *My system still works. Should I replace it?* · *Are the running-cost figures real?* · *What
about the ductwork?* (answers in the reference; the third ends *"Otherwise we will tell you to keep it, which
costs us a sale and wins the maintenance."*, the fourth *"Any contractor presenting them as certainty is
overselling."*).

**`#contact`** — `h2` *"Holding two quotes that do not agree?"*; lead *"Book the load calculation. You keep it
either way, and it is the document that makes them comparable."*; buttons `Book a load calculation` (solid
white) and `Call (555) 080-0800` (2 px outline, phone glyph).

**Footer** — brand blurb *"HVAC replacement in Phoenix. Sized by a load calculation, compared on ten-year running
cost rather than sticker price, with the rebate paperwork done for you."*; `2240 West Indian School Road,
Phoenix, AZ 85015` · `(555) 080-0800` · `quotes@rightsizeair.example`; three social chips (**dead `#` in the
reference**); columns **Services** (AC replacement, Heat pump conversion, Ductwork, Second opinions) ·
**Company** (Compare systems, How sizing works, Service areas, About) · **Support** (Contact, Privacy, Terms) ·
**Stay Updated** (*"Seasonal maintenance reminders and plain-English notes on what actually needs doing before
winter."*, email field + `Subscribe`); bottom bar `© 2026 Rightsize Air. All rights reserved.` +
`Privacy Policy` + `Terms of Service`.

**Cookie strip** — *"We use cookies to enhance your experience. By continuing to visit this site you agree to our
use of cookies."* + `Decline` / `Accept All`.

## Inner-page inventory (the seven live routes, for reference only)

This recreation is **one page**; these routes are what the home page compresses, and they are the authority if a
band is ambiguous.

| route            | bytes  | holds                                                                                   |
| ---------------- | -----: | --------------------------------------------------------------------------------------- |
| `services/`      | 45,715 | breadcrumb, `What we do`, **six priced services** each with a four-tick list: AC replacement `From $6,400 installed` · heat pump conversion `From $7,900 installed` · ductwork `From $950` · thermostats and controls `From $320 fitted` · load calculations for builders `From $450` · second opinions `$0` |
| `sizing/`        | 45,480 | `Sizing`, the tonnage argument, `What a load calculation measures`, `Four questions worth asking every contractor`, its own `#faq` and `#contact` |
| `about/`         | 40,444 | `About`, `How we work` (*"We would rather lose the sale than oversize the system"*), `Three commitments`, `The crew` (*"Nine installers and two estimators, all on our payroll"*) |
| `service-areas/` | 37,918 | breadcrumb, `Where we work`, a **`#service-areas` town grid**, `Why sizing matters more here than most places` |
| `contact/`       | 39,165 | `Contact Rightsize Air`, the same three-field request card |
| `privacy/`       | 40,946 | legal copy |
| `terms/`         | 39,715 | legal copy |

The home page **has no services band and no blog**; the four services appear only in the footer link column as
labels.

## Requirements

### Feature: Page shell and chrome

#### Scenario: Skip link and landmarks

- **GIVEN** the app renders
- **THEN** the first focusable element is a **skip link** to `#main-content`, hidden until focused and then a
  fixed `primary-600` chip at top-left (radius 8, `px-4 py-2`, 14/500 white)
- **AND** `<main id="main-content">` wraps every band from the hero to `#contact`, `<header>` holds the nav, and
  `<footer>` is outside `<main>`

#### Scenario: Preloader is not a blocker

- **GIVEN** a cold load
- **THEN** `#preloader` is a full-screen white overlay with a **40 px** `border-4` spinner whose top segment is
  `primary-600`, and it fades out on `load` and is removed after 300 ms
- **AND** if the document is already complete (a cached load, or a test environment) the overlay is never shown —
  derive `hidden = loaded || document.readyState === 'complete'`, never rely on a `load` that will not fire again

#### Scenario: Progress bar and back-to-top

- **GIVEN** the page scrolls
- **THEN** `#scroll-progress` is a **2 px** `primary-600` bar fixed at the top, width = `scrollY /
  (scrollHeight − innerHeight) × 100 %`
- **AND** `#back-to-top` is a **48 px** `primary-600` disc at `bottom-6 right-6` with an accessible name
  `Back to top`, hidden (`opacity: 0`, `pointer-events: none`, `translateY(16px)`) until **300 px** of scroll
- **AND** activating it scrolls to the top smoothly

#### Scenario: Cookie strip

- **GIVEN** no stored choice
- **THEN** after **1,500 ms** a white strip (`role="dialog"`, `aria-label="Cookie consent"`) slides up from
  `translateY(100%)`; it is **87 px** tall with a 1 px `gray-200` top border and `py-4 sm:py-6`
- **AND** `Decline` is an outline `gray-300` button and `Accept All` a solid `#1f7668` button
- **AND** either choice persists (`cookie-consent` = `essential` / `accepted`), the strip slides out and is
  removed after 300 ms, and a returning visitor never sees it

#### Scenario: Reveal-on-scroll and reduced motion

- **GIVEN** a viewport
- **THEN** the **14** `[data-animate]` elements below the fold start at `opacity: 0` `translateY(20px)` and
  transition in over **600 ms** `ease-out` with their `data-delay` (`0`–`300 ms`, 12 values)
- **AND** under `prefers-reduced-motion: reduce` **no** element is ever hidden or translated and no observer is
  installed

### Feature: Licence bar and sticky header

#### Scenario: Licence bar at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the bar is **37 px** on `#252522` with 12 px `#ededea` text, `h-9` row, container `px-8`
- **AND** it holds three facts on the left (`Licence` + `AZ ROC #000000` in `font-semibold`, then two
  `hidden sm:flex` items) and, on the right, one `amber-400` star + `4.9` + a dimmed `300+ reviews on Google
  (sample)`
- **AND** it is **not** sticky and it sits above a sticky header

#### Scenario: Licence bar does not clip mid-token

- **GIVEN** a 390 px viewport
- **THEN** the bar's left list is not clipped: the reference measures `ul.scrollWidth 161` against
  `clientWidth 105` because of `overflow-hidden` + `whitespace-nowrap`, so the string is cut inside
  `AZ ROC #000000` — **the recreation must shorten, wrap or hide the fact, never cut it mid-token**

#### Scenario: Header at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the header is **81 px** (`h-16` → `lg:h-20` + 1 px border), `sticky top-0` with `z-50`,
  `background: rgba(255,255,255,.9)` + `backdrop-blur-lg`, bottom border `#ededea`
- **AND** the container is `flex items-center justify-between gap-6` with the logo at `h-8` (`lg:h-9`) **150 × 32**
  and a two-file swap (`logo.svg` light theme / `logo-light.svg` dark theme)
- **AND** the six labels are 14/600 `#4d4d45`, `gap-7`, with `hover:text-primary-700`; active state is
  `#111827` **600** (the kit's `.nav-active` rule, colour only)
- **AND** the phone pill and city pill are pill-shaped (`rounded-full`, 1 px `#dbdbd5`, `px-3 py-1.5`, 14, `gap-1.5`)
  and the CTA is `#1f7668`, radius 8, `px-5 py-2.5`, 14/700, white
- **AND** the theme toggle is a **36 × 36** radius-8 icon button with `aria-label="Toggle dark mode"` that swaps a
  moon for a sun icon

#### Scenario: The nav switches at 1280, and the city pill at 1536

- **GIVEN** widths 1440, 1280, 1200 and 1024
- **THEN** the six-link desktop nav is visible at **≥ 1280** (`xl:flex`) and hidden at 1024–1279, where the
  hamburger appears — measured: `nav` is `display: none` at 1024 and `flex` at 1440, and the reference's own
  markup comment says the nav shrank into the pill between `lg` and `xl`
- **AND** the city pill is `2xl:block` (**≥ 1536**) and is **absent** at 1440 — do not "fix" it into the 1440
  header; the phone pill takes its place there
- **AND** the header height drops to **65 px** below 1024 (`h-16` + 1 px)

#### Scenario: Mobile panel

- **GIVEN** a viewport below 1280
- **WHEN** the hamburger (`aria-label="Open menu"`, `aria-expanded="false"`) is activated
- **THEN** `aria-expanded` flips, the panel below the header is revealed, and the hamburger glyph swaps to a close
  icon; the panel is `border-t #ededea` on white with six `block py-3` 16/600 links
- **AND** the panel's footer row holds a phone pill and a city pill, and a full-width `#1f7668`
  `Book a load calculation` button
- **AND** activating a second time closes it and restores the hamburger glyph

#### Scenario: Header shadow and dark toggle

- **GIVEN** the page is scrolled past **50 px**
- **THEN** the header gains `shadow-lg` and loses it again above 50 px
- **AND** activating the theme toggle flips `.dark` on `<html>`, persists `theme` (`dark` / `light`) and, on the
  next load, the class is applied **before first paint** (the reference's 442 B inline resolver, including
  `prefers-color-scheme` when nothing is stored)

### Feature: Hero — the promise in seven of twelve columns, the card in five

#### Scenario: Hero geometry at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **710 px** on `#f7f7f6` with a **1,280 px** container (`py-20 px-8` → content `1,216 px`)
- **AND** the grid is **12 columns** with a **64 px** gap, **550 px** tall at y = 198; the copy column is
  **683 px** (`lg:col-span-7`, `lg:pt-6`) and the card **469 px** (`lg:col-span-5`) at x = 859
- **AND** below `lg` the two columns stack, card first in the DOM order that puts it **after** the copy

#### Scenario: Headline, rating and the four promises

- **GIVEN** the copy column
- **THEN** the eyebrow is 14/700 `#1c5f55`, uppercase, tracking `+0.35 px`, reading
  `Phoenix · Licensed ROC contractor`
- **AND** the `h1` is **60 / 66**, 700, tracking **−1.5 px**, `#252522`, and its **second sentence is a
  `#1f7668` span**: *"The cheapest system to buy* **is rarely the cheapest to own.***"* — the colour break is
  content, not decoration
- **AND** the lede is `max-w-xl` 18/28 `#67675c`
- **AND** the rating row is 14 `#4d4d45`: five `amber-400` stars (`aria-hidden`), bold `4.9`, and a dimmed
  `300+ reviews on Google · sample data`
- **AND** the promise list is a `<ul>` of **exactly four** items, `sm:grid-cols-2`, `gap-3`, each 16/24 **500**
  `#3a3a34` with a 16 px `#1f7668` tick

### Feature: the request card — three fields, one native select

#### Scenario: Card anatomy at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the card is **469 × 509**, white, radius **16**, `p-8`, `shadow-soft`, **no border**
- **AND** its `h2` is **24 / 32** 700 `#252522` reading `Book a load calculation`, followed by a 14 px
  `#67675c` line *"Three fields. We reply within the hour on weekdays."*
- **AND** the form is `space-y-4`: three fields, each label 14/600 `#3a3a34` with `mt-1.5`, each control
  **403 × 50** (`select` 49), radius **8**, 1 px `#dbdbd5`, `px-4 py-3`, 16 px `#252522`, placeholder `#b7b7ad`
- **AND** focus is `border-primary-500` + a 2 px `ring-primary-500/20`
- **AND** the submit is **403 × 52**, full width, radius 8, `#1f7668`, 16/700, `py-3.5`, white, hover `#1c5f55`
- **AND** the footnote under it is 12 px `#8a8a7e` centred: *"No obligation. You keep the calculation whether or
  not you buy from us."*

#### Scenario: The third field is a select, not chips

- **GIVEN** the third question `Where are you up to?`
- **THEN** it is a **native `<select name="problem" required>`** with a `value=""` placeholder option
  `Choose the closest match` and **six** real options in the reference's order
- **AND** it is `required`, and the placeholder option is not selectable as a valid value

#### Scenario: The form is not inert

- **GIVEN** the user submits with valid values
- **THEN** nothing reloads the page and no query string is appended to the URL
- **AND** the app shows a confirmation naming the caller and the chosen situation, or an explicit inline error —
  never a silent no-op (the reference form has **no** `action` and **no** handler, so submitting does a GET
  reload; do not reproduce that defect)
- **AND** submitting with a missing required field shows a per-field message tied by `aria-describedby`, cleared
  on the next edit

### Feature: `#cost` — the ten-year calculator

#### Scenario: Band and header at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **995 px** on `#171715` with 112 px padding and white text
- **AND** the header row is `flex … sm:items-end sm:justify-between` **1,216 × 212** at y = 940: a `max-w-2xl`
  (**672 px**) text block — eyebrow `Total cost of ownership` (14/700 `#45b09b`), `h2` **36 / 40** 700
  tracking **−0.9 px** white, lead 18/28 `white/70` — and the horizon group **256 × 46** at x = 1,072
- **AND** the closing note under the cards is 14 `#8a8a7e` and the closing CTA `Get these figures for your house`
  resolves to the request card (or `#contact`)

#### Scenario: The horizon control is four pressed buttons, not a slider

- **GIVEN** the control
- **THEN** it is an inline-flex pill group (`rounded-full`, 1 px `white/20`, `p-1`) with
  `role="group"` and `aria-label="Choose how many years to total"`, holding **four** `<button type="button">`
  pills `5 yr` · `10 yr` · `15 yr` · `20 yr`, each `px-4 py-2` 14/700
- **AND** the selected pill is `aria-pressed="true"` with `background: #2a9381` and `color: #171715`; the others
  are `aria-pressed="false"` at `white/60` on transparent
- **AND** **10 yr is selected on first render** — the reference ships that state in the markup, not from an effect
- **AND** the `h2` copy says *"Move the slider…"* and there is **no `<input type="range">` anywhere**: the copy is
  the reference's, and keeping it while shipping buttons is the faithful choice (if you change the control, change
  the headline too)

#### Scenario: The arithmetic (all four horizons, measured)

- **GIVEN** each card's `data-price`, `data-running`, `data-upkeep`, `data-life`
- **THEN** the total is `price + (running + upkeep) × years`, plus `price × floor((years − 1) / life)` when the
  horizon exceeds the expected life, rounded to the nearest **$50**
- **AND** the four states render exactly:

| horizon | builder grade | mid efficiency | variable speed | winner |
| ------: | ------------: | -------------: | -------------: | ------ |
|   **5** | `$18,350`     | `$18,600`      | `$20,750`      | builder grade |
|  **10** | `$30,300`     | `$27,600`      | `$28,100`      | mid efficiency |
|  **15** | `$48,650`     | `$36,600`      | `$35,450`      | variable speed |
|  **20** | `$60,600`     | `$55,200`      | `$56,200`      | mid efficiency |

- **AND** the replacement note appears only where the horizon outlives the equipment: at **15** the builder card
  reads *"Includes replacing it once: expected life 12 years."*; at **20** all three read it (12 / 16 / 18 years);
  at 5 and 10 all three are empty
- **AND** the winner moves **builder → mid → variable → mid**, so a single hard-coded "cheapest" flag is a
  fidelity failure

#### Scenario: Ranking rewrites the pills, not just the numbers

- **GIVEN** any horizon
- **THEN** the cheapest card's rank pill reads **`Cheapest to own`** with `background: #2a9381` and
  `color: #171715`; the other two read `#2` / `#3` at `white/60` on `white/10`
- **AND** the pill ordering follows the sorted totals, not the DOM order (at 5 yr the first card is the winner;
  at 15 yr the third is)
- **AND** the total label above each figure tracks the horizon: `Total over 5|10|15|20 years`

#### Scenario: Card anatomy at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the grid is **3 × 389 px** with `gap: 24px`, **439 px** tall at y = 1,200
- **AND** each card is radius **16**, `p-6`, `flex flex-col`, 1 px `white/10`, ground `white/5` — and the **middle
  card is featured**: `border-primary-500` with `bg-white/[0.07]`
- **AND** `h3` is **20 / 28** 700; the blurb is 14 `white/60` with `flex-1` so the money block sits on one
  baseline across all three cards
- **AND** the `<dl>` is five rows (`Installed`, `Running, per year`, `Upkeep, per year`, `Efficiency`) inside a
  `space-y-3 border-t white/10 pt-5`: `dt` 14 `white/50`, `dd` 14/**600** in **JetBrains Mono** (`Efficiency`'s
  value is the exception — it stays in the sans at 600)
- **AND** `Total over N years` is 12/700 uppercase `white/40`, the figure is **30 / 36** 700 **JetBrains Mono**
  `#79cdba` with `tabular-nums`, and the note line reserves `min-h-[1.25rem]` so the cards never jump between
  horizons

#### Scenario: The `dl` text and the `data-` attributes disagree (keep the data)

- **GIVEN** the reference card copy
- **THEN** it displays `$250` upkeep where `data-upkeep="240"`, `$1,600` running / `$200` upkeep where
  `data-running="1620"` / `180`, and `$1,300` running / `$200` upkeep where `data-running="1280"` / `190`
- **AND** the **data attributes are the arithmetic** (they reproduce the shipped totals exactly) while the `dl`
  copy is rounded display text
- **AND** the recreation must keep **one** source of truth: render the `dd` figures from the same numbers the
  calculator uses, and note the difference in the PR — do not ship a table that argues with its own total

### Feature: `#why-us` — a diagram and four rules

#### Scenario: Split at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **940 px** on `#f7f7f6`, grid **2 columns** with `gap: 64px` at `lg`, `items-center`
- **AND** the figure is `order-last lg:order-first` — **copy first, diagram second** on mobile
- **AND** the figure holds the **authored SVG diagram** at full column width with radius 16 and a 14 `#8a8a7e`
  caption underneath: *"Replace with a photograph of your own crew taking measurements before launch."*
- **AND** the diagram is **not** a photograph and **not** a stock image: ship a drawn or charted panel (short
  cycling vs long run), because the reference's argument is a picture of two duty cycles

#### Scenario: The four rules

- **GIVEN** the copy column
- **THEN** the eyebrow is `Sizing`, the `h2` is *"Yours is probably smaller than what you have"* and the lead is
  18/28 `#67675c`
- **AND** there are exactly **four** entries in a `<dl>` with `space-y-6`, each `border-left: 2px #1f7668`,
  `padding-left: 20px`, 16/700 title over 16/24 `#67675c` body
- **AND** the titles are `The old size is not evidence`, `Oversized does not mean cooler`,
  `A Manual J takes about an hour`, `You keep the calculation`
- **AND** the entries are real `dt`/`dd` pairs, not styled paragraphs

### Feature: `#rebates` — six cells on a hairline plate

#### Scenario: Plate at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the plate is **1,216 px** wide, `mt-12`, radius **16**, 1 px `#ededea`, `gap: 1px`, ground
  `#ededea` (the wrapper paints the dividers), `sm:grid-cols-2 lg:grid-cols-3`
- **AND** each cell is white, **404 × 232**, `p-6 lg:p-8`, `flex flex-col`: `h3` 18/28 700 `#252522`, copy
  `mt-2 flex-1` 16 `#67675c`, amount `mt-4` 14/700 **`#1c5f55`**
- **AND** the six amounts are `Up to $600`, `Up to $1,200`, `Up to $1,000`, `Up to $150`, `Up to $400`,
  `From 0% for 12 months` — the last one is the row's only non-dollar figure and keeps its copy
- **AND** the footnote under the plate is 14 `#8a8a7e` and spans the full container width

#### Scenario: Column steps

- **GIVEN** widths 390, 768 and 1440
- **THEN** the plate is **1 / 2 / 3** columns and the 1 px dividers survive every step
- **AND** an amount never wraps away from its cell

### Feature: `#process` — four steps in a three-column grid

#### Scenario: The 3 + 1 layout

- **GIVEN** a 1440 px viewport
- **THEN** the `<ol>` is `grid gap-8 sm:grid-cols-3 sm:gap-6` (**389 px** columns, **376 px** tall) and holds
  **four** items: 01–03 fill row 1 and **04 sits alone at the left of row 2**
- **AND** this 3 + 1 arrangement is the reference's layout, not a bug — do not force four columns, and do not drop
  a step to make three
- **AND** below `sm` the four stack

#### Scenario: Step anatomy

- **GIVEN** any step
- **THEN** the head is `flex items-baseline gap-3`: the number (`01`…`04`) at 14/700 `tabular-nums` `#1f7668`,
  then a `h-px flex-1` `#ededea` rule filling the rest of the row
- **AND** the `h3` is 18/700 `mt-4`, the body `mt-2` 16 `#67675c`, the duration `mt-3` 14/600 `#1c5f55`
- **AND** the four durations are `60 to 90 minutes`, `Same day`, `Within 1 working day`, `1 to 2 days`

### Feature: `#areas` — twelve towns in plain text

#### Scenario: Split at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **468 px** on a 12-column grid with a 64 px gap; the heading takes **5 columns**
  (**469 px**) and the list **7 columns** (**683 px**) at x = 645
- **AND** the `h2` is `Where we work` with **no eyebrow** and **no badge**, followed by an 18/28 `#67675c` lead
- **AND** the list is `grid-cols-2 sm:grid-cols-3`, **212 px** items, `py-2.5`, 16 `#3a3a34`, 1 px `#ededea`
  bottom border, **twelve** towns in the reference's order
- **AND** the towns are plain text — not links, not a map, not chips — because the note under them says plain text
  is the cheapest local-search signal a trade site has

### Feature: `#testimonials` — a stock-grey carousel that is static at desktop

#### Scenario: Header and cards

- **GIVEN** a 1440 px viewport
- **THEN** the band is **796 px** on `#f9fafb`, header centred in `max-w-3xl` (**768 px**)
- **AND** the badge is a **pill** (`#d8f2ea` ground, `#1c5f55` text, 14/**500**, `px-3 py-1`) reading `Reviews`
- **AND** the `h2` is `#111827` and the lead `#4b5563` — stock greys, unlike every other light band
- **AND** each card is **381 × 348**, white, radius 16, `p-8`, `shadow-soft`: five **`primary-400`** `#45b09b`
  stars (`h-5 w-5`), an 18/28 **500** `#111827` quote in `<blockquote>`, a **48 px** `#d8f2ea` avatar disc whose
  initial is `#1f7668`, a 16/600 name and a 14 `#4b5563` town
- **AND** the three sets of initials are `B`, `C`, `L` — first letters of the names, not avatar images

#### Scenario: Carousel behaviour per width

- **GIVEN** widths 1440, 1024, 768, 640 and 390
- **THEN** per-view is **3 / 3 / 2 / 2 / 1** and the slide width is **405 / 320 / 368 / 304 / 358 px**
- **AND** at **≥ 1024** there are **0 dots** and both arrows are `display: none` (three slides, three per view, so
  the index range is empty)
- **AND** at 768 and 640 there are **2 dots**, and at 390 there are **3 dots**; arrows become `flex` wherever the
  index range is non-zero
- **AND** the active dot is a **32 px** pill (`#2a9381`), inactive dots **10 px** (`#d1d5db`), the track
  transition is **500 ms** and the autoplay interval is **5 s**, paused on hover
- **AND** a carousel that has nowhere to scroll must not swallow the arrow keys or announce an empty rotation

### Feature: `#faq` — five rows, one open at a time

#### Scenario: Closed rows

- **GIVEN** a 1440 px viewport
- **THEN** the section is `max-w-3xl` (**768 px**) centred, five rows `py-6` divided by 1 px `#e5e7eb`
- **AND** each question is 18/600 `#111827` inside a full-width `<button>` (**768 × 32**), with a **32 px**
  `#f3f4f6` disc holding a `#4b5563` plus
- **AND** the panel is `overflow: hidden; transition: all .3s` with `max-height: 0; opacity: 0`

#### Scenario: Opening and switching

- **GIVEN** all rows closed
- **WHEN** row 1 is activated
- **THEN** its panel gets `max-height` = its `scrollHeight` (the reference measures **64 px** for row 1) and
  `opacity: 1`, and its icon rotates **45°**
- **AND** activating row 3 closes row 1 and opens row 3 (single-open)
- **AND** activating an open row closes it and resets the icon to 0°
- **AND** the button carries `aria-expanded` and `aria-controls` (the reference ships **neither** — measured
  `aria-expanded` is `null` — fix it, do not copy it)

### Feature: `#contact`, footer and attribution

#### Scenario: Closing band

- **GIVEN** a 1440 px viewport
- **THEN** the band is **440 px** on `#1c5f55`, content centred in `max-w-3xl` (**768 × 216**) at x = 336
- **AND** the `h2` is **36 / 40** 700 tracking **−0.9 px** white: *"Holding two quotes that do not agree?"*
- **AND** the lead is 18/28 **`#d8f2ea`**, `max-w-xl`, `mt-5`
- **AND** the solid button is **241 × 56**, white, radius 8, `px-8 py-4`, 16/700 `#1c5f55`,
  `hover:bg-primary-50`
- **AND** the second is **2 px `white/40`**, transparent, `px-8 py-4`, 16/700 white with a phone glyph, and below
  `sm` both are full width and stacked with a 16 px gap
- **AND** the solid button resolves to the request card and the outline one to a well-formed `tel:`

#### Scenario: Footer plate

- **GIVEN** a 1440 px viewport
- **THEN** the footer is **567 px** on `#111827` with `pt-24` and a **12-column, 32 px-gap** grid
- **AND** the brand column is 4 columns: 40 px light logo, `max-w-xs` `gray-400` blurb, **three 40 × 40**
  `#1f2937` social chips with accessible names, then address, phone and email at 14 `gray-400`
- **AND** the middle block is `sm:grid-cols-3` inside 5 columns, headed by 14/600 uppercase white labels
  (`+0.7 px`): Services (4 links), Company (4), Support (3)
- **AND** the last 3 columns hold `Stay Updated`, its blurb, and a `#1f2937` email field with a `#1f7668`
  `Subscribe` button
- **AND** the bottom bar is `mt-16 border-t #1f2937 py-8` (**85 px**) with the copyright in `gray-500` 14 and two
  legal links

#### Scenario: Attribution and working forms

- **GIVEN** the shipped app
- **THEN** the footer contains a link to **https://www.componentdock.com/** labelled `Component Dock`
  (AGENTS.md rule 5) — the natural place is the bottom bar, next to the copyright
- **AND** no ColorLib string appears in any app file, including comments, `alt` text and the CTA — the app never
  says `Rightsize`
- **AND** the newsletter submit does something observable (a stored address or a visible confirmation); the
  reference's dead `data-newsletter-form` is not a behaviour to copy
- **AND** the three social chips point at real destinations rather than `#`

### Feature: Anchors, responsive behaviour and accessibility

#### Scenario: No horizontal scroll

- **GIVEN** widths 320, 390, 768, 1024, 1280, 1440 and 1600
- **THEN** `document.documentElement.scrollWidth === clientWidth` at every one — including **320**, where the
  reference reports **371 px** (a 51 px overflow; the wide elements are the carousel slides, `flex-shrink-0`
  inside `overflow-hidden`; do not copy it)
- **AND** the hero stacks below `lg`, the rebates plate is 1/2/3 columns at 390/768/1440, the process list is
  1/3, the areas list is 2/3, and the footer's newsletter row wraps

#### Scenario: Anchors resolve on a single page

- **GIVEN** the single-page recreation
- **THEN** the six nav labels, the mobile panel's labels, the hero CTA, both closing buttons and the cost CTA
  resolve to existing ids among `#cost`, `#why-us`, `#rebates`, `#process`, `#areas`, `#testimonials`, `#faq`,
  `#contact` and the request card
- **AND** the reference's **two** `#service-areas` links (a **dead id** — the section is `#areas`) are replaced by
  `#areas`
- **AND** the reference's **42** anchors become a set that is closed on one page: the seven inner routes
  (`/services`, `/sizing`, `/about`, `/service-areas`, `/contact`, `/privacy`, `/terms`) either resolve to
  in-page bands or render as text — **no 404s and no dead `href`s** in the shipped app
- **AND** every `id` target sits below the **81 px** sticky header (`scroll-margin-top ≥ 101 px`), and smooth
  scrolling offsets by the header height
- **AND** every `tel:` is well formed (`tel:5550800800`) — the reference ships one malformed
  `tel:(555) 080-0800` in the footer — and the email is a real `mailto:`
- **AND** there are **zero** bare `#` anchors (the reference has three, in the footer social chips)

#### Scenario: Dark mode

- **GIVEN** `.dark` on `<html>`
- **THEN** the body is `#030712` with `#f3f4f6` text, the licence bar becomes `#111827`, the header `gray-950/90`,
  the hero and `#why-us` become `#111827`, and the white bands become `#030712`
- **AND** `#cost` (`#171715`), `#contact` (`#1c5f55`) and the footer (`#111827`) are **unchanged**
- **AND** the `#rebates` plate's 1 px gaps become `gray-800`, the review cards become `gray-800`, the request card
  becomes `#030712` with `gray-700` borders and `gray-800` fields, headings are white and paragraphs `#9ca3af`
- **AND** the choice survives reload with no flash of light theme

#### Scenario: Keyboard and labelling

- **GIVEN** the page is reached by keyboard only
- **THEN** the skip link is first, every FAQ row, horizon pill, carousel dot, arrow and the theme toggle are
  focusable and operable with Enter/Space, and the visible focus ring is `ring-2 primary-500/20` at minimum
- **AND** every icon-only control has an accessible name (theme toggle, hamburger flipping between
  `Open menu` / `Close menu`, carousel arrows `Previous testimonial` / `Next testimonial`, dots
  `Go to slide N`, back-to-top)
- **AND** the horizon group is announced as a group with a name, and the selected pill is exposed by
  `aria-pressed` — not by colour alone
- **AND** every decorative SVG is `aria-hidden`, the cost totals are not announced as three unlabelled numbers
  (each sits under its own `Total over N years` label), and the request card's three labels are associated with
  `for`/`id`

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** reveals do not translate, the carousel does not autoplay, the preloader does not animate into view, the
  cookie strip appears without the slide, and smooth scrolling is disabled

## Known reference defects (do not reproduce)

1. **`#service-areas` is a dead id.** The desktop city pill and the mobile panel's city pill both target it; the
   section is `#areas`. Two anchors, one missing target, zero scroll.
2. **The request form has no `action` and no handler.** Submitting reloads the page with the field values in the
   query string. Nothing in the house kit binds `data-form` — only `form[data-validate]`, which this page does not
   use.
3. **The newsletter form is the same** — `data-newsletter-form`, no handler, GET reload.
4. **The FAQ buttons ship no `aria-expanded` and no `aria-controls`.** The accordion animates and is invisible to
   assistive technology (measured: `aria-expanded` is `null` before and after the click).
5. **The cost cards' displayed per-year figures disagree with their own `data-` attributes** (`$250` vs `240`,
   `$1,600`/`$200` vs `1620`/`180`, `$1,300`/`$200` vs `1280`/`190`). The calculator uses the data; the `<dl>` is
   rounded display text. Keep one source of truth.
6. **The `h2` says "Move the slider" and there is no slider.** The control is four `aria-pressed` buttons in a
   `role="group"`; no `input[type=range]` exists on the page.
7. **The scrollspy never binds.** `data-nav-link` values are a fragment (`cost`) and route paths (`/sizing`,
   `/services`, …), and the kit resolves them with `getElementById`, so at most the first link could ever take
   `.nav-active`. There is no working active state — do not ship a dead `nav-active` class.
8. **At 320 px the page overflows by 51 px** (`scrollWidth 371` vs `clientWidth 320`). The wide elements are the
   `flex-shrink-0` carousel slides inside `overflow-hidden`; wrap or size them.
9. **The licence bar clips mid-token at 390** (`ul.scrollWidth 161` vs `clientWidth 105`): the string is cut inside
   `AZ ROC #000000` by `overflow-hidden` + `whitespace-nowrap`.
10. **One `tel:` is malformed** (`tel:(555) 080-0800`) and the JSON-LD telephone (`+1-555-0800`) disagrees with
    every link (`5550800800`).
11. **Three footer social chips are bare `#`.**
12. **`og:image` points at `/og-image.jpg`, which is 404.** Ship a real social image or drop the tag.
13. **The `#why-us` caption is a note to the buyer** (*"Replace with a photograph of your own crew…"*) rendered as
    if it were content — in the recreation it becomes a real caption or is removed, and the diagram becomes a real
    chart.

## Verification checklist

- [ ] `apps/enthalpy` exists, `@free-react-templates/enthalpy` in `package.json`, `public/CNAME` =
      `enthalpy.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments included);
      the app never says "Rightsize"
- [ ] bands in this order: licence bar → header → hero + request card → `#cost` → `#why-us` → `#rebates` →
      `#process` → `#areas` → `#testimonials` → `#faq` → `#contact` → footer
- [ ] licence bar **37 px** `#252522`, 12 `#ededea`, three facts + one `amber-400` star and `4.9`, not sticky,
      **no mid-token clipping at 390**
- [ ] header **81 px** sticky, `white/90` + `blur(16px)`, 1 px `#ededea`; logo `h-8` (`lg:h-9`); six labels 14/600
      `#4d4d45` at **≥ 1280** with the hamburger below; **city pill only at ≥ 1536**; CTA `#1f7668` 14/700;
      theme toggle 36 px; `shadow-lg` past 50 px
- [ ] hero **710 px** `#f7f7f6`: 12-col grid `gap 64` with **683 + 469**; eyebrow 14/700 `#1c5f55` +0.35;
      `h1` **60/66 700 −1.5** `#252522` with the `#1f7668` second sentence; lede 18/28 `#67675c`; five `amber-400`
      stars + `4.9`; four `#1f7668` ticks in a `sm:grid-cols-2` list
- [ ] request card **469 × 509** radius 16 `p-8` `shadow-soft`, no border: `h2` 24/32, three fields **50 px**
      radius 8 border `#dbdbd5`, the third a **native `<select>` with six options**, submit **52 px** `#1f7668`,
      12 px footnote; **submitting produces a visible result, never a reload and never a query string**
- [ ] `#cost` **995 px** `#171715`: header 672 px block + **256 × 46** pill group; **10 yr pressed** on load;
      three cards **389 × 439** radius 16 with the **middle featured** (`border-primary-500`, `white/[0.07]`);
      mono `dd` and **30/36** totals in `#79cdba`; totals exactly **18,350 / 18,600 / 20,750** at 5 yr,
      **30,300 / 27,600 / 28,100** at 10, **48,650 / 36,600 / 35,450** at 15, **60,600 / 55,200 / 56,200** at 20;
      rank pills rewrite to `Cheapest to own` / `#2` / `#3` per horizon; replacement notes only where the horizon
      outlives the life; sample-figures note kept
- [ ] `#why-us` **940 px** on `#f7f7f6`: 2 cols `gap-16`, **diagram second on mobile / first on `lg`** with its
      14 px caption, four `border-l-2 #1f7668 pl-5` rule pairs in a real `<dl>`
- [ ] `#rebates` **931 px**: `gap-px` plate on `#ededea`, radius 16, six white **404 × 232** cells `p-6 lg:p-8`,
      `flex-1` copy, six amounts in `#1c5f55`, illustrative-figures footnote
- [ ] `#process` **764 px**: `<ol>` **3 × 389** holding **four** steps (**3 + 1**, the fourth alone on row 2),
      `tabular-nums` numbers + 1 px `#ededea` rules, four durations in `#1c5f55`
- [ ] `#areas` **468 px**: 5/7 split, **no eyebrow**, **twelve** towns in 2/3 columns with `border-b #ededea`,
      plain text, local-search note
- [ ] `#testimonials` **796 px** on `gray-50`: `Reviews` pill `#d8f2ea`/`#1c5f55`, stock-grey headings, three
      cards **381 × 348** `shadow-soft`, five **`primary-400`** stars, 48 px initials; **0 dots and hidden arrows
      at ≥ 1024**, 2 at 768/640, 3 at 390
- [ ] `#faq` **820 px**: `Questions` pill, five rows `py-6` divided by 1 px `#e5e7eb`, 32 px `#f3f4f6` disc whose
      plus rotates 45°, one open at a time, **with `aria-expanded`/`aria-controls`**
- [ ] `#contact` **440 px** `#1c5f55`: white `h2` 36/40 −0.9, `#d8f2ea` lead, solid **241 × 56** + 2 px
      `white/40` outline, full width and stacked below `sm`
- [ ] footer **567 px** `#111827`, 12-col 4/5/3, 40 px logo, three social chips (real destinations), three link
      columns, working newsletter, bottom bar with copyright + Component Dock link
- [ ] fixed chrome: preloader (self-removing, non-blocking, `readyState`-safe), 2 px `#1f7668` progress bar, skip
      link, 48 px back-to-top past 300 px, cookie strip after 1,500 ms storing `accepted` / `essential`
- [ ] dark mode: `#030712` body, `#111827` hero/`#why-us`, `gray-950` white bands, `#171715` cost and `#1c5f55`
      contact unchanged, pre-paint resolution, persisted toggle, no white flash
- [ ] reduced motion: no reveal stuck at `opacity: 0`, no carousel autoplay, no smooth scroll
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600 (the reference fails at 320
      with 371 px — the recreation must not)
- [ ] zero bare `#` anchors; `#service-areas` replaced by `#areas`; every `tel:` well formed; every image and
      diagram has a meaningful `alt`; every icon-only control has an accessible name
- [ ] 100% coverage on the new app, `scripts/verify-app.sh enthalpy` green

## Implementation notes for the port (not requirements)

- **No photograph is needed, and that is the design.** The reference's only "image" is a 800 × 600 authored SVG
  diagram of two duty cycles. Ship a drawn comparison (short cycling vs long run) as inline SVG or a small chart
  component — a stock HVAC photo would make this a different template.
- **One stateful widget, and it is value-first.** Keep the horizon in one piece of state (default `10`), derive
  every total and the whole ranking from the card data during render, and never store derived totals in state.
  Round once, at the end, to the nearest 50.
- **The mono figures are the brand.** JetBrains Mono at 500/700 for `dd`, totals and step numbers, with
  `tabular-nums` so the columns do not jitter when the horizon changes width (`$18,350` → `$60,600`). Without the
  mono, the calculator reads as a generic card grid.
- **Do not put the whole cost band in a scroll-driven animation.** The reference's only motion here is the kit's
  600 ms fade (14 elements), and the numbers change instantly.
- **Two faces, no fallback theatre.** Plus Jakarta Sans 400–800 and JetBrains Mono 500/700 from Google Fonts with
  `display=swap` + `preconnect`; system stack `system-ui, sans-serif` / `ui-monospace, monospace`.
- **`min-h-[1.25rem]` on the replacement note** is what keeps the three cards the same height across horizons;
  keep the reservation even when the note is empty.
- **Copy is content.** The caveats (`Sample figures`, `Programmes change`, `Replace this list with your own towns`,
  *"We will tell you if yours has years left"*) are what separate this template from a hard-sell HVAC page; they
  are not placeholders to be deleted.
