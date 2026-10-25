# Template: Jetline (Emergency plumbing — the phone number set as the headline, and a six-chip triage picker that answers before dispatch)

## Purpose

A **24-hour emergency plumber in Austin whose product is the phone call**, and whose own copy says so twice:
the hero comment in the source reads *"The phone number is set as large as the headline. It is the product."*
and the closing band repeats *"The call-out fee is stated on the phone before we set off and never added
afterwards."*

The page is **type-only**. There is **no photograph anywhere** — no hero image, no team photo, no
project gallery, no background texture. The two `<img>` elements in the whole document are **the same
`logo.svg`**, twice (header and footer). Everything the page says about itself is said in
Inter at 72 / 60 / 36 px on near-black `#111`.

Two devices carry the design:

1. **The phone number as hero.** Under the two-line `h1` (`Blocked drain?` in white, `Burst pipe? Call.` in
   `#e5443f`) the number `(555) 010-0124` is set at **60 px / 800 / −1.5 px tracking** — the same optical
   weight as the headline, immediately above a `Call now` pill and a `What it costs` outline pill. The number
   is the largest interactive element on the page.
2. **`#problems` — the six-chip triage.** A centred question (*"What is happening right now?"*), six
   full-radius chips, and **one** bordered card that swaps its two lines of advice when a chip is chosen.
   Chips carry `aria-pressed` (not a tablist); every panel is in the DOM at once and all but the active one
   carry `hidden`. Each panel tells the caller what to *do* before the van arrives (*"Shut the main off at the
   meter if you can reach it, then ring."*), and the card closes with the phone pill.

The rest of the page is the commercial argument phrased as three flat tables of facts: `#process` (three
numbered steps, each with a promise tag — *Answered 24 hours*, *Price before dispatch*, *Most jobs, one
visit*), `#pricing` (**four call-out bands, $89 / $149 / $219 / $219**, in a `<table>` whose prices are
`primary-500`), and `#areas` (**twelve towns**, written out as a list rather than drawn on a map, because
*"an emergency service that cannot arrive quickly is not an emergency service"*). Reviews sit in a carousel
of three quotes, each headed *"Mostly written the morning after"*. Then a **red `#call` band**, a **`#111`
footer** with the licence footnote *"Licence #000000. Sample details for template demonstration."*, and a
**fixed mobile call bar** (`Open now · (555) 010-0124`) that is `lg:hidden` and sits over the page.

Every band is dark — there is **no light section on the page at all** except the grey-900 testimonials band
(`#111827`) which is one step *lighter* than the `#111` ground. This is the whole composition: `#111` ground,
one `#141414` band (`#areas`), one `#111827` band (`#testimonials`), one `#e5322d` band (`#call`), and red
used only for CTAs, prices, marks and the hero's second line.

At 1440 × 900 (measured, `getBoundingClientRect`):

| #  | band                                             | ground              | top |  height |
| -- | ------------------------------------------------ | ------------------- | --: | ------: |
| 0  | `<header>` sticky, `#111`/95 + `blur(8px)`        | `#111111`           |   0 |      81 |
| 1  | hero (`section.bg-ink-900`, no id)                | `#111111`           |  81 |     735 |
| 2  | `#problems` — six chips, one card                 | `#111111`           | 816 |     710 |
| 3  | `#process` — three numbered steps                 | `#111111`           |1526 |     604 |
| 4  | `#pricing` — four call-out bands                  | `#111111`           |2130 |     821 |
| 5  | `#areas` — twelve towns, 5/7 split                | `#141414`           |2951 |     448 |
| 6  | `#testimonials` — carousel of three               | `#111827`           |3399 |     768 |
| 7  | `#call` — red emergency band                      | `#e5322d`           |4167 |     164 |
| 8  | `<footer>`                                        | `#111111`           |4331 |     568 |

**Document height 4,899 px** at 1440 × 900 **and at 1280** (identical — the container is capped at 80 rem);
**5,035 px** at 1024; **5,150 px** at 768; **6,771 px** at 390; **7,198 px** at 320 (where the reference also
overflows horizontally — see §Reference defects). There is **no licence bar and no announcement strip**, so the
hero starts at **81 px** (the header height) and every in-page anchor needs `scroll-margin-top ≥ 101 px`
(81 + 20, exactly what the source's smooth-scroll does: `header.offsetHeight + 20`).

`.section` is `py-20` → `lg:py-28` (**80 px**, then **112 px**); the hero's container is `py-16` → `lg:py-24`
(**64 px**, then **96 px**). The container is `max-width: 80rem` at `≥ 1280` with `px-4` / `lg:px-8`, so the
content column is **1,216 px** at 1440 and at 1280, and the page is fluid below that.

The palette is **one warm-neutral `ink` ramp, one red `primary` ramp, and stock Tailwind greys for exactly
three jobs** (the testimonials band `gray-900` `#111827`, its cards `gray-800` `#1f2937`, and the cookie
strip). `ink-900` `#111` is **the page ground**, `ink-800` `#141414` the **`#areas` band**, `primary-600`
`#e5322d` **every solid CTA, the phone pill, the progress bar, the back-to-top disc and the `#call` band**,
`primary-500` `#e5443f` **the hero's red headline span, every price in the table and every eyebrow**, and
`primary-400` `#f06b67` **the `#process` kicker, the process tags and the review stars**. White is used at
**four opacities** as a material: `white/70` body copy, `white/50` table headers, `white/15` hairlines,
`white/10` card borders, `white/5` card fill.

The type is **Inter for everything, one face, four weights (400 / 600 / 700 / 800)**. It arrives from
Cloudflare's automatic font service (`/cf-fonts/v/inter/5.2.8/{cyrillic,latin,…}/wght/normal.woff2`, variable
`wght`, `@font-face` inside an **inline `<style>`** — no Google Fonts `<link>`). Headings are 700 at 36/40 with
**−0.9 px tracking**, the `h1` is 800 at 72/68.4 with **−1.8 px**, and every eyebrow is 700 **uppercase with
positive tracking** (`+0.35 px` on `#process`, `+2.8 px` on the hero's `Open now` line, i.e.
`tracking-[0.2em]`). That negative-tracking / positive-tracking pairing is the page's typographic signature:
a pixel-correct palette with normal tracking reads as a different template.

Recreation of the ColorLib **"Rooter24"** design (https://colorlib.com/wp/template/rooter24/, live preview
https://preview.colorlib.com/theme/rooter24/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `rooter24`
- **ColorLib page:** https://colorlib.com/wp/template/rooter24/ — **HTTP 200, 112,181 B**,
  `<title>` **"Rooter24 - Emergency Plumber Website Template 2026 - Colorlib"**. Listing categories are
  **Astro / Home Services / Plumbing / Tailwind CSS**. Listing screenshot
  `rooter24-template.jpg` — **HTTP 200, 233,239 B, `image/jpeg`, 2400 × 1892** (see §Screenshot analysis).
- **Live preview:** https://preview.colorlib.com/theme/rooter24/ — **HTTP 200, 53,195 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4`. `<title>` is **"24-hour emergency plumber in
  Austin | Rooter24"**. A 2026 **Astro** build: one hashed stylesheet `_astro/Base.BQWUvpiI.css`
  (**55,423 B**, `/*! tailwindcss v4.3.3 */`), one behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B**, sha256 `e26cc055…` — the
  *same* house kit as Cresting / Nightwatch / Conduit, carrying carousel / billing-toggle / blog-filter /
  lightbox / typewriter / counter handlers this page never uses), and the router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js` (**16,357 B**, sha256
  `69eb3ac5…` — the same router as every sibling in this 2026 set).
- **Three inline `<script>` bodies:** the page-specific chip switcher (**~420 B** — reads
  `[data-problem-selector]`, sets `aria-pressed` on `[data-problem]`, toggles `hidden` on
  `[data-problem-panel]`), a preloader teardown (**~420 B**, only meaningful because the kit ships a preloader;
  this page has **no** `#preloader` element), and one `application/ld+json` block.
- **JSON-LD:** `@type: "Plumber"`, `name: "Rooter24 Drain & Sewer"`, `description: "24-hour emergency drain,
  sewer and burst-pipe response."`, `telephone: "+1-555-0124"`, `openingHours: "Mo-Su 00:00-23:59"`,
  `areaServed: "Austin, Texas"`, `priceRange: "$$"`, `url: "/"`. The telephone disagrees with every `tel:` link
  on the page (`5550100124`) — a delta, not a spec.
- **No archive, no alternate family path:** `theme/bootstrap/rooter24/` → **404**,
  `theme/bb/rooter24/` → **404**, `downloads/free/rooter24.zip` → **404**, `colorlib.com/etc/cs/rooter24/` →
  **404**. The slug-only preview **is** the live build, so there is no un-versioned twin to diff against.
  `theme/rooter24/index.html` → **200, byte-identical (53,195 B)** to the directory URL — a no-op, never a 404.
- **Single page?** No. **Seven inner routes are live — all at a trailing-slash path**: `services/` (32,419 B),
  `pricing/` (32,569 B), `areas/` (28,867 B), `contact/` (31,628 B), `about/` (32,970 B), `privacy/` (33,777 B),
  `terms/` (32,521 B). The bare paths (`/services` …) answer **308** and redirect to the slash form — probe with
  `-L`. They are the authoritative reference for the detail the home page only summarises (see
  §Inner-page inventory).
- **Fonts:** **Inter** only, 400 → 800, variable, `/cf-fonts/v/inter/5.2.8/…` in an inline `<style>`; the
  measured body stack is `Inter, system-ui, sans-serif`. The recreation loads it from Google Fonts explicitly
  (`css2?family=Inter:wght@400;500;600;700;800&display=swap` — verified **HTTP 200**; the plain
  `css2?family=Inter` is also 200).
- **Headings:** exactly one `h1`, **five `h2`** (hero has none of its own — it is the `h1` band), **seven
  `h3`** (three process steps + four footer column heads).
- **Motion:** six elements carry `[data-animate]` with `data-delay` 0 / 100 / 200 / 300 ms; the kit fades them
  up 20 px over 600 ms on `IntersectionObserver` (`threshold .1`, `rootMargin 0 0 -10% 0`) and **bails out
  entirely** under `prefers-reduced-motion: reduce`.

- **Recreation name:** `jetline` — one lowercase word, plumbing-adjacent (a hydro-jetter clears a drain line;
  the page's own third step is *"We clear it and show you why"*), not the source name, and no collision with
  `apps/`, `openspec/specs/`, `docs/templates/`, any bold name in `TEMPLATES.md` or any existing row:
  `git grep -il jetline origin/main` → **no matches** (zero substring hits, so the `navpane`/`navpanel` trap
  does not apply), and `colorlib.com/wp/template/jetline/`,
  `preview.colorlib.com/theme/jetline/`, `preview.colorlib.com/theme/bootstrap/jetline/` all → **404**.
  The recreation lives at `apps/jetline`, package `@free-react-templates/jetline`,
  `jetline.free.componentdock.com`. **No ColorLib string may appear in the app** — provenance lives in this
  spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5). Alternatives checked and still free if a
  later plumbing slug needs them: `sumpjet`, `clearline`, `nightflow`, `outfall`, `rushline` (all zero repo
  hits, all three ColorLib paths 404). Rejected here: `backflow` (9 repo hits) and `standpipe` (4 repo hits,
  and a `template-standpipe` spec already exists).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**), so this design comes from `docs/catalog-coverage.md` —
the **42 standalone designs** on colorlib.com's listing that the checklist never recorded. This is row
**`rooter24`** of 42 (*preview 200, 53,195 B*), the row after `rightsize` (prepped as *Enthalpy*). When the app
ships, append this line under **`## Industrial`** — currently headed `## Industrial (15)`, bump it to **16** —
immediately after **Roofing** (`roofing` → `shingle`) and immediately before **Supreme** (`supreme` → `stamp`),
which is where the trade-service designs (Constructioncompany, Homebuilder, Roofing) already sit. Re-read the
section rather than trusting this line, a concurrent prep may have landed first:

```markdown
- [x] **Rooter24** — [colorlib](https://colorlib.com/wp/template/rooter24/) · [jetline](https://jetline.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/rooter24-template.jpg)
```

## Reference readings (2026-10-25, `curl -4`)

| what                                   | value                                                                                                                                                  |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| preview HTML                           | 200, **53,195 B**, `text/html; charset=utf-8`                                                                                                          |
| `theme/rooter24/index.html`            | 200, **53,195 B** — byte-identical to the directory URL (no-op link, not a second page)                                                                |
| stylesheet `_astro/Base.BQWUvpiI.css`  | 200, **55,423 B**, `/*! tailwindcss v4.3.3 */`, sha256 `a65eaa96…`                                                                                      |
| behaviour kit `…_lang.BLoalVWc.js`     | 200, **16,233 B**, sha256 `e26cc055…` — byte-identical to the Cresting/Nightwatch/Conduit kit                                                          |
| router `…CYDbzu1r.js`                  | 200, **16,357 B**, sha256 `69eb3ac5…` — the same house router as every sibling                                                                         |
| logo `assets/img/logo.svg`             | 200, **607 B**, `viewBox 0 0 200 40`, `role="img" aria-label="Rooter24"`: a red ring (`#E5322D`, r 14, stroke 3) with white clock hands, then the wordmark `Rooter` in white + `24` in `#E5322D`, Inter **800**, 20 px. Rendered **180 × 36** in the header (`h-8` → `lg:h-9`), **190 × 40** in the footer (`h-10`) |
| content images                         | **0**. The only two `<img>` elements are the logo (header + footer). There is no hero photograph, no team photo, no gallery, no icon font, no sprite    |
| favicon / OG                           | `favicon.svg`; `og:title`, `og:description`, `og:type`, `og:site_name`, `og:image=/og-image.jpg`, `twitter:card=summary_large_image`; **no canonical**; `<meta name="robots" content="noindex, nofollow">` |
| incoming styles                        | **1** `<link rel="stylesheet">` (`fetchpriority="high"`), **0** Google Fonts links, **1** inline `<style>` holding 28 `@font-face` blocks (seven subsets × face) |
| inner routes                           | **7** top-level, all **200 only with a trailing slash** (bare path → 308); no `blog`, no `projects`                                                     |
| document height                        | **4,899 px** at 1440 × 900 **and** at 1280; 5,035 at 1024; 5,150 at 768; 6,771 at 390; 7,198 at 320 (reference `scrollWidth` 334 at 320)                |
| anchors                                | **38** `a[href]` — 6 × `/services`, 4 × `/pricing`, 3 × `/areas`, 3 × `/contact`, 2 × `/` , 2 × `/#process`, 1 × `/about`, 2 × `/privacy`, 2 × `/terms`, 7 × `tel:5550100124`, **1 malformed `tel:(555) 010-0124`**, 1 × `mailto:`, 1 skip-link `#main-content`, **3 bare `#`** |
| inline `<svg>`                         | **27** (phone, menu, chevrons, ticks, stars, socials) — all inline, no icon dependency                                                                 |
| structure                              | **279** `class="…"` attributes, **270** distinct utility names, **9** ids, **10** `<button>` at ≥ 1280, **0** `<input>`, **0** `<form>`, **0** `<select>` on the home page |

## Design tokens (measured from `Base.BQWUvpiI.css`, 55,423 B, and `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal hex values** in
> the compiled utilities, so the sheet contains **no `--color-ink-*` / `--color-primary-*` custom properties** —
> only Tailwind's generated `:root` defaults (`--color-white`, `--color-green-600`, the type scale,
> `--radius-lg .5rem` / `xl .75rem` / `2xl 1rem`, `--spacing .25rem`). The ramps below were reconstructed by
> parsing every `bg-` / `text-` / `border-` / `ring-` rule for `ink-*` and `primary-*`, then confirmed against
> `getComputedStyle` on the rendered page. That is the authority; declare the ramps in the app's own `@theme`.

### `ink` — warm-neutral ramp (all structure)

| step | hex       | used for                                                                                          |
| ---- | --------- | ------------------------------------------------------------------------------------------------- |
| 50   | `#f6f6f6` | `bg-ink-50` — sheet only on this page (status chips in siblings)                                   |
| 100  | `#e6e6e6` | `border-ink-100` on the **mobile call bar's top hairline in light mode**; not visible on this page |
| 200  | `#c9c9c9` | `border-ink-200` on the same bar's light-mode hairline                                             |
| 300  | —         | **not emitted** by this page's build                                                               |
| 400  | `#6e6e6e` | `text-ink-400` — sheet only                                                                        |
| 500  | `#4a4a4a` | `text-ink-500` — sheet only                                                                        |
| 600  | `#2e2e2e` | `text-ink-600` — sheet only                                                                        |
| 700  | `#1b1b1b` | `text-ink-700` — sheet only (dead classes kept in the sheet)                                       |
| 800  | `#141414` | **`#areas` ground** (`bg-ink-800`)                                                                 |
| 900  | `#111111` | **page ground**: body, hero, `#problems`, `#process`, `#pricing`, footer, and the header at 95 %    |

### `primary` — red ramp (CTA, price, mark)

| step | hex       | used for                                                                                     |
| ---- | --------- | -------------------------------------------------------------------------------------------- |
| 50   | `#fef2f2` | `from-primary-50` (a gradient utility the page never activates)                               |
| 100  | `#fde3e2` | `bg-primary-100` — sheet only (light-mode review chips in siblings)                           |
| 200  | `#fbc7c5` | `border-primary-200`, `bg-primary-200/50` — sheet only                                        |
| 300  | `#f79c99` | `dark:text-primary-300` — **the `Reviews` pill's label** (81 × 28)                            |
| 400  | `#f06b67` | **`#process` kicker, the three process tags, the review stars**, `hover:` tone of the hero number, the testimonial initials' glyph |
| 500  | `#e5443f` | **the hero's red `h1` span, the `Open now` hero eyebrow, every price cell**, focus ring       |
| 600  | `#e5322d` | **every solid CTA** (header pill, `Call now`, `#problems` pill, call-band pill on white, back-to-top, progress bar), **the `#call` band ground**, the footer phone pill, the logo ring |
| 700  | `#be221e` | hover ground for every solid CTA; **the `#call` band's white pill label**                      |
| 900  | `#731614` | `dark:bg-primary-900` — **the `Reviews` pill fill** and the testimonial initials disc          |

Red is a **flat fill, never a gradient**. The page has **no gradients at all** — no washes, no image
overlays, no text gradients. Adding one changes the design.

### Stock Tailwind greys (three jobs only)

| token             | value     | used for                                                        |
| ----------------- | --------- | --------------------------------------------------------------- |
| `gray-900`        | `#111827` | **`#testimonials` band ground** and the cookie strip            |
| `gray-800`        | `#1f2937` | **testimonial cards**, footer social chips, footer hairline     |
| `gray-700`        | `#374151` | social-chip hover                                               |
| `gray-500`        | `#6b7280` | footer bottom-bar text, copyright                               |
| `gray-400`        | `#9ca3af` | footer body copy and link text                                  |
| `gray-50`         | `#f9fafb` | `#testimonials` class list — **overridden by `dark:bg-gray-900`** |

### Type scale (Inter, 400 / 500 / 600 / 700 / 800)

| role                | size / line / weight / tracking   | colour               | source class                                    |
| ------------------- | --------------------------------- | -------------------- | ----------------------------------------------- |
| `h1` (≥ 1024)       | **72 / 68.4 / 800 / −1.8 px**     | `white`, span `#e5443f` | `text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight` |
| `h1` (768–1023)     | 60 / 57 / 800 / −1.5 px           | same                 | `sm:text-6xl`                                    |
| `h1` (< 640)        | 48 / 45.6 / 800 / −1.2 px         | same                 | `text-5xl`                                       |
| hero phone          | **60 / 60 / 800 / −1.5 px** (lg)  | `white`              | `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight` |
| hero eyebrow        | 14 / 20 / **700** / **+2.8 px**, uppercase | `#e5443f`    | `text-sm font-bold uppercase tracking-[0.2em] text-primary-500` |
| hero lede           | 18 / 28 / 400                     | `white/70`           | `text-lg text-white/70`, `max-w-xl` (576)        |
| hero ticks          | 14 / 20 / 600                     | `white/60`           | `text-sm font-semibold text-white/60`            |
| `h2`                | **36 / 40 / 700 / −0.9 px**       | `white`              | `text-3xl sm:text-4xl font-bold tracking-tight`  |
| `h2` (pricing only) | 36 / 40 / **800** / −0.9 px       | `white`              | `font-extrabold` — the only 800 `h2` on the page |
| section kicker      | 14 / 20 / 700 / **+0.35 px**, uppercase | `#f06b67`     | `text-sm font-bold uppercase tracking-wide text-primary-400` |
| pricing kicker      | 14 / 20 / 700 / **+2.8 px**, uppercase  | `#e5443f`     | `tracking-[0.2em] text-primary-500`              |
| section lede        | 18 / 28 / 400                     | `white/70`           | `text-lg text-white/70`                          |
| process step number | 14 / 20 / 700, `tabular-nums`     | `#f06b67`            | `text-sm font-bold tabular-nums text-primary-400` |
| step `h3`           | 18 / 28 / 700                     | `white`              | `text-lg font-bold text-white`                   |
| step tag            | 14 / 20 / 600                     | `#f06b67`            | `text-sm font-semibold text-primary-400`         |
| table header        | 14 / 20 / 700 / **+0.35 px**, uppercase | `white/50`    | `text-sm font-bold uppercase tracking-wide text-white/50` |
| table price cell    | 18 / 28 / **800**                 | `#e5443f`            | `text-lg font-extrabold text-primary-500`        |
| table third cell    | 16 / 24 / 600                     | `white/80`           | `font-semibold text-white/80`                    |
| card `blockquote`   | 18 / 28 / **500**                 | `white`              | `text-lg font-medium text-gray-900 dark:text-white` |
| footer column head  | 14 / 20 / 600 / +0.5 px, uppercase | `white`             | `text-sm font-semibold uppercase tracking-wider text-white` |
| footer link         | 16 / 24 / 400                     | `#9ca3af`            | `text-gray-400 hover:text-white`                 |

### Spacing, radii, shadow, chrome

- **Radii:** `rounded-full` for **every button and chip** (header phone pill, hero CTAs, problem chips,
  card CTA, call-band pill, review chips, initials, back-to-top) — that is the button shape on this page;
  `rounded-2xl` (**16 px**) for the `#problems` card and the testimonial cards; `rounded-lg` (**8 px**) for the
  burger button, the social chips, the cookie buttons and the skip link. There is **no `rounded-md`, no
  `rounded-xl`, no square button**.
- **Shadow:** `shadow-soft` = `0 4px 16px -4px rgb(0 0 0 / .1)` on testimonial cards; `shadow-lg` on the header
  past 50 px of scroll, the carousel arrows, and the back-to-top disc (`shadow-primary-600/25`, `hover:` 30 %).
- **Borders:** `white/10` (hairlines on dark, **including the `#areas` town rows**), `white/15` (the `#process`
  step rules and the table's header rule),
  `white/20` (unselected chips), `white/25` (secondary hero CTA), `white/5` (card fill). `border-gray-800`
  (`#1f2937`) on the footer's bottom bar and the mobile call bar's top edge.
- **Chrome:** 2 px `#e5322d` `#scroll-progress` bar fixed at `top-0 z-[60]`; 48 px `#e5322d` back-to-top disc
  at `bottom-6 right-6` appearing past **300 px** of scroll; cookie strip `role="dialog"` after **1,500 ms**
  (`localStorage['cookie-consent']` = `accepted` / `essential`); skip link
  `sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80]` as a red pill.
- **Mobile call bar:** `fixed inset-x-0 bottom-0 z-40 lg:hidden`, **73 px** tall at 390 (`p-3` + a 48 px pill),
  ground `#111827` in the rendered theme, top hairline `#1f2937`, one full-width red pill
  `Open now · (555) 010-0124` (16/700).

### Dark mode — hardcoded, not toggleable

`<html class="dark">` is **authored into the build** and there is **no `[data-dark-toggle]` element on this
page** (the head resolves the class itself; the kit's toggle handler is inert). Consequences the port must
reproduce:

- Every `dark:` utility on the page **always wins**: testimonials band `#111827`, cards `#1f2937`, headings
  white, the `Reviews` pill `#731614`/`#f79c99`, the cookie strip `bg-gray-900`, the mobile bar `bg-gray-900`.
- The light-mode classes in the markup (`bg-gray-50`, `bg-white`, `text-gray-900`, `border-gray-200`) are
  **dead code on this page** — they never render. Do not "restore" them, and do not ship a light variant: a
  light version of this page does not exist.
- The footer/social hover tones and the `text-white/70` body are the only other themed values.

## Band map and geometry (measured at 1440 × 900, `getBoundingClientRect`)

| band        | ground    |  top | height | notes                                                                                                                                                                                    |
| ----------- | --------- | ---: | -----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| header      | `#111`/95 |    0 |   **81** | `sticky top-0 z-50`, `blur(8px)`, 1 px `white/10` bottom border; container **1,280** with `px-32`                                                                                        |
| hero        | `#111`    |   81 | **735** | container `py-96 px-32` → **1,216** content; `h1` **896 × 137** at top **221**; lede 576 wide; phone 60 px at top 506; CTA row at 598                                   |
| `#problems` | `#111`    |  816 | **710** | `py-112`; heading block `max-w-3xl` centred; **6** chips in 2 rows (4 + 2) at 1052; card **768 × 226** at top 1188, radius 16, `p-8`, `bg-white/5`                              |
| `#process`  | `#111`    | 1526 | **604** | `py-112`; `<ol>` 3 columns **389** wide, `gap-24`; each item **176** tall (number + 1 px rule, `h3`, body, tag)                                                          |
| `#pricing`  | `#111`    | 2130 | **821** | `py-112`; `<table>` **1,216 × 349** in `overflow-x-auto` (`min-w-[540px]`); columns **627 / 219 / 370**; header rule `white/15`, row rules `white/10`; footnote `max-w-3xl` |
| `#areas`    | `#141414` | 2951 | **448** | `py-112`; 12-col split **469 / 683** (`gap-64`); town `<ul>` 3 columns `border-b white/10`, `py-2.5` each; note under the list                                     |
| `#testimonials` | `#111827` | 3399 | **768** | `py-112`; centred head `max-w-3xl`; cards **381 × 320**, radius 16, `p-8`, `#1f2937`; 5 stars 20 px; initials disc 48 px                                   |
| `#call`     | `#e5322d` | 4167 | **164** | `py-6 lg:py-8`; flex row, left copy / right white pill **210 × 52** at `left 1118`                                                                                        |
| footer      | `#111`    | 4331 | **568** | `pt-96`; 12-col **4 / 5 / 3** = **384 / 488 / 280** (`gap-32` desktop); social chips 40 px; licence box in the last column; bottom bar `mt-16 border-t #1f2937 py-8`          |

Responsive heights (measured by resizing the same document):

| width | doc  | header | hero | problems | process | pricing | areas | testimonials | call | footer |
| ----- | ---: | -----: | ---: | -------: | ------: | ------: | ----: | -----------: | ---: | -----: |
| 1440  | 4,899 | 81 | 735 | 710 | 604 | 821 | 448 | 768 | 164 | 568 |
| 1280  | 4,899 | 81 | 735 | 710 | 604 | 821 | 448 | 768 | 164 | 568 |
| 1024  | 5,035 | 81 | 735 | 710 | 604 | 901 | 448 | 768 | 216 | 568 |
| 768   | 5,150 | 65 | 664 | 630 | 616 | 757 | 536 | 742 | 216 | 924 |
| 390   | 6,771 | 65 | 863 | 854 | 1060 | 857 | 678 | 802 | 256 | 1,336 |
| 320   | 7,198 | 65 | 863 | 854 | 1060 | 857 | 678 | 802 | 256 | 1,336 |

The header drops from **81 → 65 px** below `lg` (1024). The `h1` is **137 px** tall at 1440 (two lines) and
still **137 px** at 390 (three lines) — its size steps down exactly as its line count steps up, so the
headline block never changes height on mobile. `#call` grows from 164 → 256 as its copy stacks under the pill.

## Content inventory (use this copy verbatim — do not re-invent, do not "improve")

**Header.** Logo (original mark), nav `What we fix` · `How it works` · `Pricing` · `Areas` · `Contact`, phone
pill `(555) 010-0124` (icon + number at ≥ 640, icon + `Call` below).

**Hero.** Eyebrow `Open now · someone is awake` (pinging 10 px dot). `h1` `Blocked drain?` / `Burst pipe? Call.`
(second line `#e5443f`). Lede: *"Emergency drain, sewer and burst-pipe work across Austin. A plumber answers
this number at any hour, quotes the call-out before setting off, and tells you what to shut off while you
wait."* Phone `(555) 010-0124` at 60 px. CTAs `Call now` (red pill, phone icon) / `What it costs` (outline
pill). Four ticks: `Answered 24 hours, holidays included` · `Call-out quoted before we set off` · `Licensed and
insured in Texas` · `Average arrival 45 minutes (sample)`.

**`#problems`.** `h2` *"What is happening right now?"*, lede *"Pick the closest one. We will tell you what to
do before we arrive."* Six chips in this order, with their panels:

| chip                | `data-problem` | panel title                  | panel body                                                                                                                                        |
| ------------------- | -------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Burst pipe          | `burst`        | Burst pipe and active leak   | "Shut the main off at the meter if you can reach it, then ring. Turning the water off costs nothing and stops the damage bill climbing while we drive." |
| Blocked drain       | `drain`        | Drain and main line clearing | "Stop running water into it, including the dishwasher and washing machine. If two fixtures back up at once it is the main line, not the trap."       |
| No hot water        | `hotwater`     | Water heater failure         | "If you can smell gas, leave the building and ring the gas company first, then us. If not, it is usually a thermocouple, an element or a tripped breaker." |
| Sewer backup        | `sewer`        | Sewer backup and overflow    | "Keep everyone away from the standing water and do not flush anything. This is the one that needs us fastest, and we prioritise it over everything except gas." |
| Overflowing toilet  | `toilet`       | Toilet overflow              | "Shut the small valve behind the toilet clockwise, or lift the tank lid and push the flapper down. Then ring us if it will not clear."              |
| Leak I cannot find  | `hidden`       | Leak detection               | "Shut the main, wait ten minutes, then check whether the meter is still creeping. If it is, the leak is under the slab or in a wall and needs tracing." |

`Burst pipe` is pressed on load. The card closes with a red pill carrying the phone icon and the number.

**`#process`.** Kicker `How it works`. `h2` *"Three steps, and you know the price at the second one"*. Lede
*"No dispatch fee surprises and no "the plumber will price it when he arrives"."* Three steps, each
`0N` + 1 px rule + `h3` + body + tag:

1. **You ring, a plumber answers** — *"Not a call centre and not an answering service. We ask what you can see
   and tell you what to isolate straight away."* — tag `Answered 24 hours`
2. **We quote before we drive** — *"Call-out fee stated on the phone, and the repair quoted flat rate once we
   have looked. You decide before any tool comes out of the van."* — tag `Price before dispatch`
3. **We clear it and show you why** — *"Camera down the line on any main-line job, so you see whether it was
   grease, roots or a collapsed pipe rather than taking our word for it."* — tag `Most jobs, one visit`

**`#pricing`.** Kicker `Call-out pricing`. `h2` *"What it costs to get someone out"*. Lede *"The call-out
covers arrival and diagnosis. The repair is quoted flat rate on top, before we start."* Table headers
`When` / `Call-out` / `We aim to be there`; four rows (label + sub-label, price, arrival):

| when                                 | sub-label                          | call-out | arrival          |
| ------------------------------------ | ---------------------------------- | -------: | ---------------- |
| Weekdays 07:00 - 18:00               | Standard hours                     | **$89**  | Within 2 hours   |
| Evenings 18:00 - 23:00               | Weeknights and Saturday afternoons | **$149** | Within 2 hours   |
| Overnight 23:00 - 07:00              | Prioritised over daytime bookings  | **$219** | Within 90 minutes |
| Sundays and public holidays          | —                                  | **$219** | Within 2 hours   |

Footnote: *"Sample pricing for template demonstration. Replace with your own before launch. We state the band
on the phone, and if the fault turns out to be on the city's side of the property line there is no charge at
all."*

**`#areas`.** No kicker. `h2` *"Where we cover"*. Lede *"Anywhere inside this list, 24 hours. Outside it we
will still answer the phone and tell you honestly whether we can reach you in time."* Twelve towns: `Austin` ·
`Round Rock` · `Cedar Park` · `Pflugerville` · `Georgetown` · `Kyle` · `Buda` · `Leander` · `San Marcos` ·
`Lakeway` · `Manor` · `Bastrop`. Note: *"Replace with your own coverage area before launch."*

**`#testimonials`.** Kicker pill `Reviews`. `h2` *"Mostly written the morning after"*. Lede *"Sample reviews
for demonstration. Replace with your own."* Three cards, five `#f06b67` stars each, then a quote, a 48 px
initials disc, a name and a town:

1. *"Rang at 1am with the kitchen filling up. Someone answered, told me which valve to turn, and quoted the
   call-out before hanging up. Van was here in forty minutes."* — `T` **Teresa V.**, East Austin
2. *"Two other companies gave me a four-hour window and no price. These gave me a price on the phone and an
   actual arrival time."* — `D` **Dominic F.**, Round Rock
3. *"Put a camera down the line and showed me the roots rather than just charging me to cable it again like
   the last lot did twice."* — `A` **Amara O.**, Pflugerville

**`#call`.** Left: `Open now` (ping dot, uppercase, `tracking-wide`), *"We answer 24 hours, including
holidays."*, then *"The call-out fee is stated on the phone before we set off and never added afterwards. If
the blockage is on the city's side of the property line we report it for you and charge nothing."* Right: the
white pill with the number in `#be221e`.

**Footer.** Brand blurb (the meta description), `900 East 5th Street, Austin, TX 78702`, `(555) 010-0124`,
`dispatch@rooter24.example`, four social chips. Columns: **What we fix** — Burst pipes, Blocked drains, Sewer
backups, Leak detection · **Company** — About, Coverage areas, Call-out pricing, Contact · **Support** —
Privacy, Terms. **Licensed** — *"Licensed and insured in Texas. Licence #000000. Sample details for template
demonstration."* + phone pill. Bottom bar: `© 2026 Rooter24. All rights reserved.` + `Privacy Policy` /
`Terms of Service`.

**Mobile bar.** `Open now · (555) 010-0124` in a full-width red pill inside a fixed `#111827` tray.

## Interaction inventory

| behaviour                          | contract                                                                                                                                                    |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Problem picker                     | Clicking a chip sets `aria-pressed="true"` on it and `"false"` on the other five, and toggles `hidden` so exactly one `[data-problem-panel]` is visible. State is a single pressed key; **no hash change, no scroll** |
| Sticky header shadow               | Past **50 px** of scroll the header gains `shadow-lg`; below it, the class is removed. Height never changes                                                  |
| Mobile menu                        | `[data-mobile-toggle]` flips `aria-expanded` and toggles `hidden` on `[data-mobile-menu]`, swapping the burger glyph for an ✕ (the SVG `innerHTML` is replaced, so the icon must be a real state, not a CSS rotation) |
| Smooth in-page scroll              | Every `a[href^="#"]` (excluding bare `#`) scrolls to `target.top - (header.offsetHeight + 20)` and pushes the hash; used by `How it works` → `#process`      |
| Active nav link                    | `[data-nav-link]` values pointing at an existing id are observed (`rootMargin: -20% 0px -70% 0px`) and get `.nav-active` (white 600). Only `#process` qualifies |
| Reveal on scroll                   | 6 `[data-animate]` elements, delays 0/100/200/300 ms, fade up 20 px / 600 ms, unobserved after first intersection, **disabled entirely** under reduced motion |
| Testimonial carousel               | 3 slides, **3 per view ≥ 1024 / 2 at 768 / 1 at 390**, auto-advance every 5 s, paused on hover, prev/next arrows hidden when there is nothing to page, dots rendered only when `maxIndex > 0` (so **0 dots at 1440**, 2 at 768, 3 at 390) |
| Cookie strip                       | Appears 1,500 ms after load unless `localStorage['cookie-consent']` is set; `Accept All` stores `accepted`, `Decline` stores `essential`; either slides out and removes the node |
| Scroll progress + back-to-top      | 2 px red bar width = scroll fraction; back-to-top disc appears past **300 px** and smooth-scrolls to 0                                                       |
| Forms                              | **None on the home page** (the contact route has the only form). The kit's validator and toast are inert here — do not invent a hero form: this design has no form, and adding one is a different template |

## Inner-page inventory (authoritative for anything the home page summarises)

All seven are live at a trailing-slash URL and share the same chrome, cookie strip and footer. They are the
reference for a future multi-route expansion; the recreation is single-page unless the owner asks otherwise.

- **`/services/`** (32,419 B) — `h1` *"Six emergencies, any hour"*, lede *"We do not do remodels, re-pipes or
  bathroom fit-outs. We do the things that cannot wait until Monday, which is why we can answer the phone at
  3am."* Six cards, each with a **status tag** (`Prioritised` / `Same visit` / `Prioritised` / `Same day` /
  `Leave the building first` / `Booked`), a paragraph, and a second *"what to do now"* paragraph: Burst pipes
  and active leaks · Blocked drains · Sewer backups · Water heater failures · Gas line leaks · Leak detection.
  Closes with the `#call` band and a *"Not sure which of those it is?"* block with two CTAs.
- **`/pricing/`** (32,569 B) — `h1` *"The price before the van moves"*, the **same four-band table**, then a
  **three-item FAQ accordion** (`Is the call-out taken off the repair?` → *"No, and anyone who says it is has
  priced it into the repair…"*; `What if you cannot fix it on the first visit?`; `What if the problem is not
  mine?`), then a red CTA band.
- **`/areas/`** (28,867 B) — `h1` *"Twelve towns, round the clock"*, the twelve-town list, then three
  coverage cards: `One rate, whole area` · `Two vans overnight` · `Honest arrival windows`.
- **`/contact/`** (31,628 B) — `h1` *"Not an emergency?"*, the only `<form>` in the set: `Full Name`, `Email`,
  `Subject`, `Message`, `Send message`; beside it `Emergency, 24 hours` / `Non-urgent` / `Yard` / `Hours`
  (`Phone: 24 hours, 7 days`, `Office: Mon - Fri, 08:00 - 17:00`).
- **`/about/`** (32,970 B) — `h1` *"We only do the things that cannot wait"*, a single pull-quote (*"Every hour
  we spend on a bathroom remodel is an hour we cannot answer the phone at 2am. So we do not do remodels."*),
  two body paragraphs, three commitments (`Price before dispatch`, `No charge when it is not yours`, `Camera
  on every main line`), and four crew cards (Marcus Hale — Master plumber, owner; Elena Duarte — Overnight
  dispatch and drains; Wes Carmichael — Sewer and camera work; Joy Ademola — Gas and water heaters).
- **`/privacy/`** (33,777 B) and **`/terms/`** (32,521 B) — boilerplate legal prose, ten and twelve numbered
  sections, `Last updated: February 24, 2026`, in the same chrome.

## Requirements

### Feature: Page shell and chrome

#### Scenario: Skip link and landmarks

- **GIVEN** the page is loaded
- **THEN** the first focusable element is "Skip to content" targeting `#main-content`, hidden until focused and
  then a red pill at `left-4 top-4`
- **AND** the document has exactly one `<h1>`, one `<main id="main-content">`, one `<header>` and one `<footer>`
- **AND** the `h1` lives in the hero band, not inside any card

#### Scenario: No horizontal overflow at any audited width

- **GIVEN** widths 320 / 390 / 768 / 1024 / 1280 / 1440
- **THEN** `documentElement.scrollWidth === clientWidth` at every one of them
- **AND** the reference **fails at 320** (scrollWidth **334**) because the header's right cluster
  (`flex shrink-0 items-center gap-3` — phone pill + burger) cannot shrink; the recreation must let that
  cluster shrink or drop the pill to an icon-only control below `sm` so 320 is clean

#### Scenario: Progress bar and back-to-top

- **GIVEN** the page scrolled to 50 % of its scrollable height
- **THEN** `#scroll-progress` is **2 px** tall, `#e5322d`, about half the viewport wide, fixed at `top-0 z-[60]`
- **AND** below **300 px** of scroll the back-to-top disc has `opacity: 0` and `pointer-events: none`; above it,
  `opacity: 1` and `translateY(0)`
- **AND** the disc is **48 × 48**, full radius, `#e5322d` with `#e5322d`/25 shadow, fixed `bottom-6 right-6`,
  and clicking it scrolls to the top

#### Scenario: Cookie strip

- **GIVEN** no `localStorage['cookie-consent']`
- **WHEN** 1,500 ms have passed
- **THEN** the strip slides up as a `role="dialog"` with `aria-label="Cookie consent"`, ground `#111827`, top
  hairline `#1f2937`, `py-4 sm:py-6`, holding the sentence *"We use cookies to enhance your experience. By
  continuing to visit this site you agree to our use of cookies."* and two 8 px-radius buttons (`Decline`
  outline, `Accept All` red)
- **AND** `Accept All` stores `accepted`, `Decline` stores `essential`, and either removes the node
- **AND** with the key already set it never appears

#### Scenario: Reveal-on-scroll and reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** no `[data-animate]` element is left at `opacity: 0` or translated — the reference bails out of the
  whole pass and the recreation must too
- **AND** with motion allowed, the six elements fade up 20 px over 600 ms with their `data-delay` honoured

### Feature: Sticky header

#### Scenario: Header at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the header is **81 px** tall (80 + 1 px border), `position: sticky`, `top: 0`, `z-50`, ground
  `#111` at **95 %** with `backdrop-filter: blur(8px)`, bottom border 1 px `white/10`
- **AND** the logo renders **180 × 36** from an original mark that is *not* the source logo file
- **AND** the five nav labels are 14/20 **700** `white/70` (`hover:text-white`) with `gap: 32px`, occupying
  **441 px** and starting at `x 497`
- **AND** the phone pill is **186 × 44**, full radius, `#e5322d`, white 16/**800**, `padding: 10px 20px`, with a
  20 px phone icon and `hover:bg-primary-700`

#### Scenario: Nav collapses at 1280, not 1024

- **GIVEN** widths 1024 and 1279
- **THEN** the desktop nav is hidden (`xl:flex`), the burger is visible, and the header is **65 px**
- **AND** at 1280 the five labels render unclipped and the header is **81 px**

#### Scenario: Mobile panel and mobile call bar

- **GIVEN** a 390 px viewport
- **WHEN** the burger is activated
- **THEN** `aria-expanded` becomes `true`, the glyph swaps from three lines to an ✕, and a panel opens below
  the header (`bg-ink-900`, `border-t white/10`, `px-4 py-4`) with five full-width rows at 16/700 white
- **AND** activating again closes it and restores the burger
- **AND** a **73 px** fixed tray (`[data-sticky-call]`, `lg:hidden`) sits at the bottom with a 48 px full-width
  red pill `Open now · (555) 010-0124`, and the page reserves that height so the footer's last line is never
  hidden behind it (the reference does **not** reserve it — a documented fix)

#### Scenario: Header shadow

- **GIVEN** the page scrolled past 50 px
- **THEN** the header gains `shadow-lg` and keeps its height; scrolling back removes it

### Feature: Hero — the phone number as the product

#### Scenario: Hero geometry at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **735 px** on `#111`, starting at **81 px**, with **96 px** vertical and **32 px**
  horizontal padding inside a 1,280 px container, so content is **1,216 px**
- **AND** there is **no image, no gradient and no background texture** — the band is flat `#111`
- **AND** the `h1` box is **896 × 137** (its `max-w-4xl`), starting **140 px** below the band top

#### Scenario: Headline, eyebrow and lede

- **THEN** the eyebrow is 14/20 **700 uppercase** at **+2.8 px** tracking in `#e5443f`, with a 10 px pinging dot
- **AND** the `h1` is **72 / 68.4 / 800 / −1.8 px** white on two lines, the second line wrapped in a
  `display: block` span in `#e5443f`
- **AND** the lede is 18/28 `white/70` capped at **576 px**

#### Scenario: The number is the largest control

- **THEN** the phone link is **60 / 60 / 800 / −1.5 px** white, `hover:text-primary-400`, and is a `tel:` link
- **AND** beneath it a **168 × 60** red pill (`Call now`, 18/700, phone icon) and a **182 × 62** outline pill
  (`What it costs`, 1 px `white/25`) sit in a row above `sm` and stack full-width below
- **AND** four ticks follow at 14/600 `white/60`, each prefixed by a 4 px `#e5443f` dot

### Feature: `#problems` — six chips, one card

#### Scenario: Chip row at 1440

- **THEN** the band is **710 px** (`py-112`) on `#111`, heading centred in `max-w-3xl`
- **AND** six chips sit in a centred wrap at `gap-12`, each **46 px** tall, full radius, 16/600, `padding:
  10px 20px`, unselected `1 px white/20` on transparent with `white/80` text
- **AND** the pressed chip is filled `#e5322d` with white text (`aria-pressed:` styling — the state is
  attribute-driven, not a class toggle)
- **AND** the wrap breaks 4 + 2 at 1440 and 2 per row at 390

#### Scenario: One panel, swapped

- **GIVEN** no interaction
- **THEN** `Burst pipe` is pressed and *"Burst pipe and active leak"* is the only visible panel
- **WHEN** another chip is clicked
- **THEN** exactly one panel stays visible, its title is 18/700 white and its body 16/24 `white/70` capped at
  576 px, and the card keeps its height (reserve space; the six bodies differ by a line)
- **AND** the card is **768** wide at 1440, radius 16, `p-8` (`lg:p-8`), `bg-white/5`, `border-white/10`
- **AND** the card closes with a red pill `(555) 010-0124` (phone icon), which scrolls nothing and dials

### Feature: `#process` — three numbered steps

#### Scenario: Step columns at 1440

- **THEN** the band is **604 px**, kicker `How it works` in `#f06b67` at +0.35 px, `h2` 36/40/700 −0.9 in a
  **672 px** column, lede 18/28 `white/70`
- **AND** the list is a 3 × **389** grid at `gap-24`, each item **176 px** tall
- **AND** each item opens with `0N` in 14/700 `#f06b67` `tabular-nums` beside a 1 px `white/15` rule that
  fills the remaining width, then an 18/700 white `h3`, a 16/24 `white/70` body, and a 14/600 `#f06b67` tag
- **AND** the numbers read `01`, `02`, `03` and are content, not decoration (they are also the only
  `tabular-nums` on the page)

### Feature: `#pricing` — four call-out bands

#### Scenario: Table at 1440

- **THEN** the band is **821 px** with kicker `Call-out pricing` at +2.8 px in `#e5443f` and an **800**
  weight `h2` (the only 800 `h2`)
- **AND** the table is **1,216 × 349**, three columns **627 / 219 / 370**, header row **45 px**, cells
  `padding: 16px 16px 16px 0`
- **AND** headers are 14/700 uppercase at +0.35 px in `white/50`; row labels 16/700 white with a 14/24
  `white/50` sub-label; prices 18/**800** `#e5443f`; the arrival column 16/600 `white/80`
- **AND** the header rule is `white/15` and body rules `white/10` — no zebra fill, no card, no rounded wrapper
- **AND** below 640 the table sits in an `overflow-x-auto` box with `min-w-[540px]`, so the **page** never
  scrolls sideways while the table does
- **AND** the footnote *"Sample pricing for template demonstration…"* is 14/24 `white/50` in `max-w-3xl`

### Feature: `#areas` — twelve towns

#### Scenario: 5/7 split at 1440

- **THEN** the band is **448 px** on `#141414` with **no kicker**: `h2` *"Where we cover"* (36/40/700) and its
  lede in a **469 px** column, the town list in a **683 px** column, `gap-64`
- **AND** the list is a `<ul>` in **3 columns** (`2` below `sm`) at `gap-x-24`, each item 16 px `white/90` with
  `border-b white/10` and `py-2.5`
- **AND** exactly **twelve** towns appear, in the reference's order, followed by the 14/24 `white/70` note
  *"Replace with your own coverage area before launch."*

### Feature: `#testimonials` — carousel of three

#### Scenario: Band and cards at 1440

- **THEN** the band is **768 px** on `#111827` (grey-900, the only lighter band) with a centred head
- **AND** the kicker is a **pill**: `Reviews`, **81 × 28**, full radius, `padding: 4px 12px`, fill `#731614` at
  50 %, label `#f79c99` 14/500 (this is the *dark-mode* value — see §Dark mode)
- **AND** three cards render at **381 × 320**, radius 16, `p-8`, ground `#1f2937`, `shadow-soft`, each holding
  five 20 px `#f06b67` stars, an 18/500 white quote, a **48 px** initials disc (`#731614` fill, `#f06b67`
  glyph, 18/600), a 16/600 white name and a 14/24 `gray-400` town

#### Scenario: Carousel behaviour

- **THEN** at ≥ 1024 three slides show, so there is **nothing to page**: arrows are `display: none` and the dot
  container renders **no** buttons
- **AND** at 768 two slides show (2 dots) and at 390 one (3 dots); each dot is 10 px, the active one **32 × 10**
  in `#e5322d`
- **AND** autoplay advances every 5 s, pauses on hover, and never runs under `prefers-reduced-motion`
- **AND** card heights stay equal across slides (the reference's quote lengths differ by a line)

### Feature: `#call` — the red band

#### Scenario: Band at 1440

- **THEN** the band is **164 px** of `#e5322d` with `py-6 lg:py-8`, a flex row that stacks below `lg`
- **AND** the left block opens with `Open now` (10 px ping dot, 14/600 uppercase `tracking-wide` at 90 %
  opacity), then 20/700 white *"We answer 24 hours, including holidays."*, then 14/24 at 90 % capped at
  `max-w-2xl`
- **AND** the right control is a **210 × 52** **white** pill with the number in `#be221e` 18/700,
  `padding: 12px 24px` — the only white-ground button on the page

### Feature: Footer

#### Scenario: Footer at 1440

- **THEN** the footer is **568 px** on `#111` with `pt-96`, top border `white/10`, body `white/70`
- **AND** the grid is 12 columns **4 / 5 / 3** (`gap-32` desktop): brand **384**, three link columns inside
  the middle **488** (`sm:grid-cols-3`), licence box **280** in the last three
- **AND** the brand block holds a **190 × 40** logo, a `max-w-xs` `gray-400` blurb, four **40 px** social chips
  (`rounded-lg bg-gray-800 p-2.5`, real destinations), then address / phone / email as `gray-400` links
- **AND** the three column heads are 14/600 uppercase `+0.5 px` white; links are 16/400 `gray-400`
- **AND** the licence box holds `Licensed and insured in Texas. Licence #000000. Sample details for template
  demonstration.` and a red phone pill
- **AND** the bottom bar is `mt-16 border-t #1f2937 py-8`, `gray-500` 14 px: `© 2026 {Brand}. All rights
  reserved.` plus `Privacy Policy` / `Terms of Service`

### Feature: Content parity

#### Scenario: The sample-data caveats survive

- **THEN** the page keeps *"Sample pricing for template demonstration. Replace with your own before launch."*,
  *"Sample reviews for demonstration. Replace with your own."*, *"Average arrival 45 minutes (sample)"*,
  *"Licence #000000. Sample details for template demonstration."* and *"Replace with your own coverage area
  before launch."* — these are what make the design honest, not clutter to be deleted
- **AND** the footer links `https://www.componentdock.com/` and no ColorLib string appears in any app file,
  comments included

## Verification checklist

- [ ] `apps/jetline` exists, `@free-react-templates/jetline` in `package.json`, `public/CNAME` =
      `jetline.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments
      included); the app never says "Rooter24"
- [ ] bands in this order: sticky header → hero → `#problems` → `#process` → `#pricing` → `#areas` →
      `#testimonials` → `#call` → footer, plus the fixed mobile call bar
- [ ] **zero photographs** — no hero image, no gallery, no stock photo. The only images are the logo (header +
      footer) and any decorative SVG built from `lucide-react`
- [ ] header **81 px** sticky (`#111`/95 + `blur(8px)`, 1 px `white/10`), **65 px** below `lg`; logo 180 × 36;
      five labels 14/700 `white/70` `gap-32`; phone pill **186 × 44** `#e5322d` 16/800; nav collapses at
      **1280** (`xl`); `shadow-lg` past 50 px
- [ ] mobile panel: `aria-expanded`, burger↔✕ glyph swap, five 16/700 rows; **73 px** fixed `#111827` bar with a
      48 px red pill, `lg:hidden`, and the page reserves its height
- [ ] hero **735 px** `#111`, content **1,216**, `h1` **72/68.4/800/−1.8** white + `#e5443f` block span;
      eyebrow 14/700 `+2.8` `#e5443f` with ping dot; lede 18/28 `white/70` at 576; number 60/800/−1.5;
      CTAs 168 × 60 red + 182 × 62 outline, full radius, stacked below `sm`; four 14/600 `white/60` ticks
- [ ] `#problems` **710 px**: six 46 px full-radius chips with **attribute-driven** pressed state (`Burst pipe`
      pressed on load), one panel visible at a time, card **768** wide radius 16 `p-8` `white/5` with
      `white/10` border, red pill CTA, **no layout jump when switching**
- [ ] `#process` **604 px**: kicker `#f06b67` `+0.35`, `h2` 36/40/700 −0.9, three **389** columns `gap-24`,
      `01/02/03` `tabular-nums` `#f06b67` with 1 px `white/15` rules, three `#f06b67` tags
- [ ] `#pricing` **821 px**: `<table>` 1,216 × 349, columns 627/219/370, header `white/50` 14/700 `+0.35`,
      prices 18/800 `#e5443f`, rules `white/15` then `white/10`, horizontal scroll **inside** the wrapper below
      640, sample-price footnote present
- [ ] `#areas` **448 px** `#141414`, **no kicker**, 469/683 split `gap-64`, **twelve** towns in 3 columns with
      `border-b white/10`, note present
- [ ] `#testimonials` **768 px** `#111827`: `Reviews` pill 81 × 28 `#731614`/50 % + `#f79c99`, three cards
      381 × 320 radius 16 `#1f2937` `shadow-soft`, five `#f06b67` stars, 48 px initials disc, carousel
      3/2/1 with **0 dots at ≥ 1024**, 5 s autoplay paused on hover, off under reduced motion
- [ ] `#call` **164 px** `#e5322d`: ping-dot `Open now`, 20/700 white line, 14/24 90 % paragraph, **white**
      210 × 52 pill with `#be221e` label
- [ ] footer **568 px** `#111` `pt-96`: 12-col 384/488/280, 190 × 40 logo, four 40 px social chips, three link
      columns, licence box with the sample-licence sentence, bottom bar `mt-16 border-t #1f2937 py-8`
- [ ] chrome: 2 px `#e5322d` progress bar, skip link, 48 px back-to-top past 300 px, cookie strip after
      1,500 ms storing `accepted`/`essential`
- [ ] single appearance: `<html class="dark">` (or an equivalent dark-only root) — **no theme toggle**, no light
      variant, and none of the dead light-mode utilities resurrected
- [ ] reduced motion: no reveal stuck at `opacity: 0`, no carousel autoplay, no smooth scroll
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 (reference fails at 320 with 334 —
      the recreation must not)
- [ ] zero bare `#` anchors; every `tel:` well formed (the source ships one malformed `tel:(555) 010-0124` —
      fix it); every icon-only control has an accessible name; every chip has `aria-pressed`
- [ ] 100% coverage on the new app, `scripts/verify-app.sh jetline` green

## Implementation notes for the port (not requirements)

- **It is a typographic page, so the type has to be right.** Inter 400/500/600/700/800 from Google Fonts with
  `display=swap` and `preconnect`; 800 for the `h1`, the phone number and the prices; 700 for `h2`/labels; 600
  for tags. Keep the metrics: `leading-[0.95]` on the `h1`, `tracking-tight` (−0.025em) on the number, and the
  two positive-tracking eyebrows. Do **not** add a display serif or a second face.
- **No imagery is the design.** The temptation is to drop a stock photo into the hero because it is a trade
  site; the reference deliberately has none and instead sets the number at 60 px. If an image is ever added it
  changes the template's identity.
- **The wordmark is yours.** The source ships a red clock-ring logo with a white "Rooter" + red "24". Build an
  original mark (e.g. a lucide `Clock` or `Wrench` glyph in `#e5322d` plus a two-tone wordmark) — never copy the
  SVG.
- **The picker is your only stateful widget.** One `useState` of the pressed key; render six buttons with
  `aria-pressed` and six panels with `hidden`. Reserve the card's height (the tallest of the six bodies) so the
  band does not move as the copy changes length.
- **Red is flat.** Every CTA is `#e5322d` with a `#be221e` hover. No gradient, no glow, no outline-only red
  button except the hero's `white/25` secondary.
- **The mobile call bar is a reserved-space element**, not an overlay: the reference lets it cover the last
  73 px of the footer; the port should add bottom padding (`pb-[73px] lg:pb-0`) so the copyright line stays
  readable.
- **Copy is content.** The caveats (`sample data`, `Replace with your own…`, the licence number) and the
  what-to-do-now sentences in the six panels are the reason this template reads as a real emergency service;
  paraphrase the brand, never the operational advice.
