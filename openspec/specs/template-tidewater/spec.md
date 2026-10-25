# Template: Tidewater (Author / novelist portfolio — book-led personal site with a press kit)

## Purpose

A single-page site for a **literary novelist**, and the reference's own catalogue blurb states the premise
better than any paraphrase: *"Everything a novelist actually needs and most author templates omit: a
bibliography with formats and retailer links, tour dates with real ticket states, and a press kit with
three bio lengths a listings editor can copy straight out. Type-only covers so the design does not depend
on cover art you may not have."*

That last clause is the design's whole trick. **There is no cover art anywhere on this page.** Each of the
five jackets is composed in CSS — `aspect-[2/3]`, a solid `primary`/`accent` ground, a 6 px dotted
`radial-gradient` texture at 7 % opacity, a 12 px darker "spine" strip with a 1 px white hairline beside
it, and the title set in Playfair Display over a small-caps imprint line. A recreation that drops in stock
book photographs has replaced the design's most distinctive decision with the thing it was built to avoid.

Every band answers *why should I read this novelist*: a **sticky cream-on-white header with seven labels,
a dark-mode moon and a "Get the letter" button**, a **centred gradient hero whose `h1` second line is an
italic gold clause that types itself through three alternatives**, a **four-figure counter band**, a
**5/7 featured-book spread with a type-only jacket, a `<dl>` of bibliographic facts, four format prices and
four retail pills**, **four backlist jackets**, a **six-row tour list with month/day/year date blocks and
four different ticket states**, **four pull-quotes with a two-column accent rule plus a six-row prizes
ledger**, a **three-card press kit with copy-to-clipboard bios, three headshots and four named contacts**,
a **six-question single-open FAQ**, a **saturated primary newsletter band**, and a **near-black footer
with four columns**.

The register is *working novelist*, not *author brand*: the page names its agent, its publicity contact,
its foreign-rights handler and its events manager, each with an address; it admits *"I do not sell books
from this site"*, *"I have learned not to give a date"*, *"No promotions between books"*, and it prices its
own paperbacks in pounds with *"Spring, £9.99"* for the not-yet-published format. The recreation must keep
that specificity — a generic "buy my book" page is not this design.

Composition: **one tinted hero, one grey counter band, then alternating white/grey bands, one saturated
primary band, near-black footer.** Hero (`linear-gradient(#fdf8f0 → #ffffff)`, 1,409 px) → counters
(`gray-50` `#f9fafb`, 238 px) → `#books` (white, 1,695 px) → `#tour` (`gray-50`, 1,300 px) → `#praise`
(white, 1,326 px) → `#press` (`gray-50`, 2,817 px) → `#faq` (white, 901 px) → `#contact`
(`primary-600 → primary-800` gradient, 480 px) → footer (`gray-900` `#111827`).

The palette is **two custom ramps and no third colour**: a **cool slate-navy `primary`** (`600` `#42516d`
is the brand; `800` `#2c3547` paints every hero CTA and `900` `#1c2231` is the featured jacket) and a
**warm sand-gold `accent`** (`500` `#bc7f33` for the scroll-progress bar, `700` `#7c4f24` for every
eyebrow and the `h1`'s italic clause, `300` `#e2b878` for that same clause in dark mode). The accent is
*never* a button fill on light grounds — it is type, rules and badges only. Sampling the palette and
finding only two hues is correct: this design is deliberately two-tone.

The type is **a serif/sans pair doing the whole hierarchy**: **Playfair Display** for `h1`, every band
`h2`, every book title, every pull-quote and the event day number; **Manrope** for body, eyebrows, labels,
navigation, dates and — this is the trap — **the FAQ heading and the newsletter heading**, which are
Manrope 700 while the four band heads above them are Playfair 600. That asymmetry is authored in the
reference markup (`text-3xl font-bold` with no `font-serif`) and is visible on the page; "fixing" it into
serif removes the only place the sans is allowed to be a display face.

Recreation of the ColorLib "Marrow" design (https://colorlib.com/wp/template/marrow/, live preview
https://preview.colorlib.com/theme/marrow/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `marrow`
* **ColorLib page:** https://colorlib.com/wp/template/marrow/ — **HTTP 200, 111,935 B**, `<title>`
  **"Marrow - Author Website Template 2026 - Colorlib"**, *"Template Details: Author: Colorlib · Released:
  **September 2026** · Credits: Images from Unsplash"*, categories **Astro · Creative · Personal ·
  Portfolio · Tailwind CSS**. The marketing copy above the fold claims *"Built with Astro 7 and Tailwind
  CSS 4"*, *"All content lives in simple YAML and Markdown files"*, *"Built-in blog with search and
  filtering"*, *"View Transitions for SPA-like page navigation"*, *"Dark mode with persistent toggle and
  flash-free loading"*.
* **Live preview:** https://preview.colorlib.com/theme/marrow/ — **HTTP 200, 85,785 B** read 2026-10-25
  with `curl -4` (`index.html` returns the identical 85,785 B document). A 2026 **Astro** build: one
  hashed stylesheet `_astro/Base.BsxFO9Ao.css` (**66,397 B**, `/*! tailwindcss v4.3.3 */`), one behaviour
  bundle `_astro/Base.astro_astro_type_script_index_0_lang.**C-fFUyOd**.js` (**16,894 B** — the shared
  house kit; its hash is unique per page but the code is the same kit the sibling preps measured, so most
  of its handlers are *not* wired here — see §Data-attribute inventory), and the router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.CYDbzu1r.js` (**16,357 B**).
* **No archive:** `https://preview.colorlib.com/downloads/free/marrow.zip` → **404** (9 B body);
  `theme/bootstrap/marrow/` → **404**; `theme/bb/marrow/` → **404**. The live preview is the only copy of
  this design.
* **Single-page?** No. **Seven inner routes are live** — `books` (50,114 B), `about` (37,229 B),
  `blog` (43,733 B), `contact` (36,740 B), `elements` (57,041 B), `privacy` (38,502 B), `terms` (37,261 B),
  all HTTP 200. See §Inner-page inventory.

* **Recreation name:** `tidewater` — one lowercase word (the coastal-water table, and the title of one of
  the fictional novels' own imagined country), no collision with `apps/`, `openspec/specs/`,
  `docs/templates/`, `TEMPLATES.md` names, or anything in the repository
  (`git grep -il tidewater origin/main` → no matches), and both
  `colorlib.com/wp/template/tidewater/` and `preview.colorlib.com/theme/tidewater/` → **404**. The
  recreation lives at `apps/tidewater`, package `@free-react-templates/tidewater`,
  `tidewater.free.componentdock.com`. **No ColorLib string may appear in the app** — provenance lives in
  this spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**), so this design came from `docs/catalog-coverage.md` —
one of the **42 standalone designs** on colorlib.com's listing that the checklist never recorded. When the
app ships, append the row under the best-fit category — **`## Portfolio`** — **in source-name alphabetical
order** (between **Marco 2** `marco-2`-class neighbours and the next `ma…` entry; re-read the section
rather than trusting this line: a concurrent prep may have landed first), and bump that heading's count.

## Reference readings (2026-10-25, `curl -4`)

| what                                  | value                                                                 |
| ------------------------------------- | --------------------------------------------------------------------- |
| preview HTML                           | 200, **85,785 B**, `text/html; charset=utf-8` (same bytes as `index.html`) |
| stylesheet `Base.BsxFO9Ao.css`         | 200, **66,397 B**, `/*! tailwindcss v4.3.3 */`                         |
| behaviour kit `…_lang.C-fFUyOd.js`     | 200, **16,894 B** (house kit — hash unique to this page)               |
| router `…CYDbzu1r.js`                  | 200, **16,357 B**                                                      |
| logo assets                           | `assets/img/logo.svg` (colour), `assets/img/logo-light.svg` (dark/footer), rendered `h-8 lg:h-10` |
| images                                | **5 content images**: 1 hero Unsplash `photo-1481627834876-b7833e8f5570` (1200 × 600), 3 headshots `photo-1508214751196-bcfd4ca60f91` (600 × 750 ×2, 800 × 500 ×1) |
| child pages                           | 7 live routes (books, about, blog, contact, elements, privacy, terms)   |
| page height                           | **10,762 px** at 1440 × 900; **17,103 px** at 390 × 844                 |
| anchors                               | **65** (`a[href]`); **16** of them bare `#`                            |
| unique classes in markup              | **419** (all 419 have a rule — see §Class census)                       |
| inline `<svg>`                        | **21** (0 icon font, 0 sprite sheet)                                    |
| `<form>`                              | **1** (footer newsletter) — `data-newsletter-form`, **no `action`, no handler** |
| `<details>` / `<img>`                 | **0** / **7** (2 logos + hero + 3 headshots + 1 repeated logo)          |
| `<h2>` count                          | **6** (four Playfair, two Manrope — see §Typography)                    |

## Design tokens (measured from `Base.BsxFO9Ao.css`, 66,397 B, and from `getComputedStyle` at 1440 px)

Both ramps are emitted as **plain escaped utilities** (`.bg-primary-600{background-color:#42516d}`), not as
`@layer theme` custom properties — a `--color-primary-600` grep finds **nothing** in the sheet. The only
custom properties present are Tailwind's own defaults.

### `primary` — slate navy (the brand, and every solid CTA)

| step  | hex       | role on the page                                                             |
| ----- | --------- | ---------------------------------------------------------------------------- |
| `50`  | `#f5f6f8` | `hover:bg-primary-50` only                                                    |
| `100` | `#e8ebf0` | contact-band lede text (`text-primary-100`), dark-mode `bg-primary-100/50`    |
| `200` | `#ccd3de` | emitted, unused in the light theme                                             |
| `300` | `#a3b0c4` | dark-mode muted text                                                          |
| `400` | `#7386a3` | dark-mode borders, `dark:text-primary-400` counters                            |
| `500` | `#556788` | focus ring / focus border                                                      |
| `600` | `#42516d` | **the brand**: counter figures, `#contact` gradient start, back-to-top disc, current carousel/`nav-active` states |
| `700` | `#374359` | contact-band primary CTA label, hover for every `600`, `#contact` gradient end-mid |
| `800` | `#2c3547` | **every hero/book pill CTA**, `#contact` gradient end, backlist jacket 1       |
| `900` | `#1c2231` | **featured jacket ground**, social squares hover, footer-adjacent dark fills   |

### `accent` — sand gold (type, rules and badges only — never a button fill on light)

| step  | hex       | role on the page                                                              |
| ----- | --------- | ----------------------------------------------------------------------------- |
| `50`  | `#fdf8f0` | **hero gradient start** (the cream)                                            |
| `100` | `#f8ecd8` | "The books" eyebrow pill ground, `hover:bg-accent-100`                         |
| `200` | `#efd6ae` | hero badge border, `bg-accent-200/45` floating blob, `hover:bg-accent-200`      |
| `300` | `#e2b878` | jacket hairline (`bg-accent-300`), dark-mode `h1` clause                       |
| `400` | `#d29a4c` | **pull-quote left rules** (`border-l-2`), badge pulse dot                      |
| `500`  | `#bc7f33` | **scroll-progress bar**, badge inner dot, dark-mode accents                    |
| `700` | `#7c4f24` | **every eyebrow** ("The books", "New novel", event months, prize results), `h1` italic clause; backlist jacket 2 |
| `800` | `#664224` | hero badge label                                                               |
| `900` | `#563821` | hero badge dark ground; backlist jacket 4                                      |

### Stock Tailwind greys (structure, not a third brand colour)

| token       | hex       | role                                                            |
| ----------- | --------- | --------------------------------------------------------------- |
| `gray-50`   | `#f9fafb` | **counter band**, **`#tour`**, **`#press`** grounds              |
| `gray-100`  | `#f3f4f6` | mobile CTA first pill, dark toggle hover                        |
| `gray-200`  | `#e5e7eb` | header border, every hairline (`divide-y`, `border-t`)          |
| `gray-300`  | `#d1d5db` | ghost pill borders, event type pill border                      |
| `gray-400`  | `#9ca3af` | ledes in grey bands, footer links, dates, event venue suffix    |
| `gray-500`  | `#6b7280` | eyebrows on light bands, ISBN/extent meta, event note italic     |
| `gray-600`  | `#4b5563` | nav labels, stat labels, price labels                           |
| `gray-700`  | `#374151` | newsletter input border, dark ghost-pill border                 |
| `gray-800`  | `#1f2937` | footer social squares, newsletter input ground                  |
| `gray-900`  | `#111827` | **footer ground**, light-mode body headings (`#111827` = `h1` colour), dark band ground |
| `gray-950`  | `#030712` | **dark-mode body**, dark white-band ground                      |

### Dark mode (measured by clicking `[data-dark-toggle]`, `.dark` on `<html>`)

| element              | light                                     | dark                                                  |
| -------------------- | ----------------------------------------- | ----------------------------------------------------- |
| `<body>`             | `#ffffff` / `#111827`                     | **`#030712`** / `#f3f4f6`                             |
| hero band            | `linear-gradient(#fdf8f0 → #ffffff)`      | **`linear-gradient(#111827 → #030712)`**              |
| header               | `rgb(255 255 255 / .8)` + `blur(16px)`    | **`gray-950 / .8`**, border `#1f2937`                 |
| white bands (`#books`, `#praise`, `#faq`) | `#ffffff`              | **`#030712`** (`dark:bg-gray-950`)                    |
| grey bands (counters, `#tour`, `#press`)  | `#f9fafb`              | **`#111827`** (`dark:bg-gray-900`)                    |
| press bio cards      | `#ffffff`, border `#e5e7eb`               | **`#030712`**, border `#1f2937`                       |
| jackets              | `primary-900` / `primary-800` / `accent-700` / `accent-900` | unchanged ground, ring flips `black/20` → `white/15` |
| `h1`                 | `#111827`                                 | `#ffffff`                                             |
| `h1` italic clause   | `#7c4f24` (`accent-700`)                  | **`#e2b878`** (`accent-300`)                          |
| `#contact` band      | `primary-600 → primary-800` gradient      | **unchanged** (it is a brand band, not a grey band)   |
| footer               | `#111827` / `#d1d5db`                     | unchanged (`dark:bg-gray-900`)                        |

The initial theme is resolved **before paint** by an inline script (`applyTheme()`): `localStorage.theme
=== 'dark'`, else `('theme' in localStorage ? false : matchMedia('(prefers-color-scheme: dark)'))`, else
light. The toggle flips `documentElement.classList.toggle('dark')` and writes `localStorage.theme`. Keep
both halves — the reference is flash-free and a recreation that only toggles on click will flash.

### Typography

Two families. **Playfair Display** 400/600 (self-hosted `cf-fonts/v/playfair-display/5.2.8/latin/wght/`),
**Manrope** 400/500/600/700 (`cf-fonts/v/manrope/…`). Loaded families measured in the browser:
`Playfair Display 400/600`, `Manrope 400/500/600/700`. The recreation loads both from Google Fonts and
falls back to `Georgia, serif` / `system-ui, sans-serif`.

| role                       | size / line / tracking / weight                | colour                        |
| -------------------------- | ---------------------------------------------- | ----------------------------- |
| body                       | 16 / 24 / normal / 400                          | `#111827`                     |
| `h1` (≥1024)               | **60 / 60 / −1.5 px / 600 Playfair**            | `#111827`; clause `#7c4f24`   |
| `h1` (≥640) / (<640)       | 48 / 48 / −1.2 / 600 · **36 / 36 / −0.9 / 600** | same                          |
| `h1` italic clause         | same size, `italic`, `display:inline-block`     | `accent-700` (`accent-300` dark) |
| `h2` band heads (4 of 6)   | **36 / 40 / −0.9 px / 600 Playfair**            | `#111827`                     |
| `h2` `#faq` + `#contact`   | **36 / 40 / −0.9 / 700 Manrope** · contact **48 / 48 / −1.2 / 700 Manrope** | `#111827` / white |
| book title `h3` (featured) | **36 / 40 / normal / 600 Playfair**             | `#111827` (jacket: white)     |
| backlist title `h4`        | 20 / 28 / normal / 600 Playfair                 | `#111827`                     |
| event title `h3`           | 20 / 28 / normal / 600 Playfair                 | `#111827`                     |
| event day number           | **36 / 36 / normal / 600 Playfair**, `tabular-nums` | `#111827`                 |
| pull-quote `blockquote`    | **24 / 39 / normal / 400 Playfair** (20 below 640) | `#1f2937`                  |
| lede                       | 18 / 28 / normal / 400                          | `#4b5563` (`#9ca3af` in grey bands) |
| eyebrow (pill)             | 12 / 16 / **+0.14 em** / 600 / uppercase        | `accent-800` on `accent-100`  |
| eyebrow (bare)             | 12 / 16 / **+0.20 em** / 600 / uppercase        | `accent-700`                  |
| section eyebrow (grey)     | 12 / 16 / **+0.22 em** / 600 / uppercase        | `#6b7280`                     |
| press card head            | 14 / 20 / **+0.16 em** / 600 / uppercase        | `#111827`                     |
| nav label                  | 14 / 20 / normal / **500**                      | `#4b5563` → `#111827` hover   |
| footer column head         | 14 / 20 / **+0.7 px** / 600 / uppercase         | `#ffffff`                     |
| stat label                 | 14 / 20 / normal / 500                          | `#4b5563`                     |
| jacket imprint / byline    | 10.4 px (`0.65 rem`) / **+0.28 em** · 12 px / **+0.22 em** | `rgb(255 255 255 / .7)` / `.85` |

**The tracking pair is load-bearing**: display type is tightened (−0.025 em → −0.9/−1.5 px) while every
micro-label is opened (+0.14/+0.16/+0.20/+0.22/+0.28 em). Flatten either side and a pixel-correct palette
still reads as a different template. Make it a verification line.

### Buttons, fields, radii, shadows (measured at 1440)

| element                        | geometry / paint                                                              |
| ------------------------------ | ----------------------------------------------------------------------------- |
| hero primary "Read the new novel" | **221 × 48**, radius **full** (`3.36e7 px`), `#2c3547`, white 16/500, `px-6 py-3`, `shadow-lg primary-900/20`, hover `#1c2231` |
| hero ghost "Where I'll be"     | 48 px tall, radius full, white ground, 1 px `#d1d5db`, `#374151` 16/500, hover border/text `#111827` |
| hero video button              | text button + **48 px** `#2c3547` disc holding a 20 px play glyph, `gap-3`     |
| hero badge                     | radius full, `white/70`, 1 px `#efd6ae`, `#664224` 14/500, `6 px 16 px`, 8 px pulse dot |
| book retail pills              | 14/500, `px-5 py-2.5`, radius full; 1 solid (`#2c3547`) + 3 ghost               |
| press "Copy bio"               | 14/500, `px-4 py-2`, radius full, 1 px `#d1d5db`, ghost, `self-start`           |
| event status link              | 14/500, `px-5 py-2`, radius full, 1 px `#d1d5db`; **sold-out variant is dashed + `#9ca3af` + `cursor-default`** |
| contact CTAs                   | **radius 8**, `px-8 py-4` (56 px tall), 16/500; white ground / `#374359` label, and a **2 px `white/30`** outline |
| newsletter input (footer)      | full width, radius 8, `#1f2937` ground, 1 px `#374151`, white text, `px-4 py-2.5` |
| card radius                    | bio cards **8 px** (`--radius-lg`); hero image + featured jacket **rounded-2xl** / **rounded-sm** (jackets are `rounded-sm` = 4 px, deliberately square-ish) |
| `--radius-*` scale             | `sm .25` · `lg .5` · `xl .75` · `2xl 1rem`                                      |
| featured jacket shadow         | `shadow-2xl` + `ring-1 ring-black/20`                                          |
| backlist jacket shadow         | `shadow-lg` + `ring-1 ring-black/20`, `group-hover:-translate-y-1`             |
| hero image                     | **1024 × 512**, `rounded-2xl`, `shadow-2xl`, `ring-1 #e5e7eb`                   |
| header elevation               | none → `shadow-lg` once `scrollY > 50`                                         |

Section rhythm: `py-20 lg:py-28` = **80 → 112 px** (books, tour, praise, press, faq, contact); hero
container `py-20 lg:py-32` = **80 → 128**; counter band `py-16 lg:py-20` = **64 → 80**; footer
`pt-16 lg:pt-24` = **64 → 96**. The `container` is `max-width: 1280 px` with `px-4 lg:px-8`, so content
measures **1,216 px** at 1440.

### Band heights (measured, `getBoundingClientRect`, 1440 × 900)

| band        | height    | ground                                      |
| ----------- | --------: | ------------------------------------------- |
| header      |    **81** | `rgba(255,255,255,.8)` + `blur(16px)`       |
| hero        | **1,409** | `linear-gradient(#fdf8f0 → #ffffff)`        |
| counters    |   **238** | `#f9fafb`, `border-y` `#e5e7eb`             |
| `#books`    | **1,695** | white                                       |
| `#tour`     | **1,300** | `#f9fafb`, `border-y`                       |
| `#praise`   | **1,326** | white                                       |
| `#press`    | **2,817** | `#f9fafb`, `border-y`                       |
| `#faq`      |   **901** | white                                       |
| `#contact`  |   **480** | `linear-gradient(to bottom right, #42516d → #2c3547)` + 10 % dot grid |
| footer      |   **506** | `#111827`                                   |
| **document**| **10,762**| —                                           |

At 390 × 844: `h1` 36 px, hero 1,232 px, counter figures 36 px (48 at ≥1024), event rows stack to 277 px
each, `#press` 3,798 px, `scrollWidth === 390` (no horizontal overflow), document 17,103 px.

## Reference document order

```
#preloader → skip link → #scroll-progress → <header> (sticky)
  → <main id="main-content">
      1  section.hero (gradient)      badge + h1(typewriter) + lede + 3 CTAs + 4 stats + hero image
      2  section (no id)              gray-50 counter band, 4 × [data-counter]
      3  #books       white            featured jacket + meta <dl> + 4 prices + 4 pills + backlist ×4
      4  #tour        gray-50          6-row <ul>, date block + type pill + status pill
      5  #praise      white            4 <blockquote> in 2 cols + 6-row prizes ledger
      6  #press       gray-50          3 bio cards + 3 headshots + 4 contacts
      7  #faq         white            6-row single-open accordion
      8  #contact     brand gradient   h2 + lede + 2 CTAs
  → <footer>          #111827          4-col grid + newsletter + legal bar
  → fixed: #mobile-cta (lg:hidden), #cookie-consent, #back-to-top
```

## Band-by-band content (the reference's real copy — reproduce order, paraphrase lightly)

### 0 — Header (81 px; `sticky top-0 z-50`, `bg-white/80`, `backdrop-blur-lg`, 1 px `#e5e7eb`)

* Wordmark: **`logo.svg`** (`h-8 lg:h-10`, colour) with a `logo-light.svg` twin `hidden dark:block`; the
  mark is a small open-book glyph beside the novelist's name in 18 px Manrope 700.
* Desktop nav at **`lg` (1024 px)**: seven labels — `Books`, `About`, `Events`, `Praise`, `Press kit`,
  `Notebook`, `Contact` — 14/500 `#4b5563`, `gap-8` (32 px), hover `#111827`. Each carries
  `data-nav-link`, but only **three** values resolve to an `id` on this page (`tour`, `praise`, `press`);
  the other four are route paths (`/books`, `/about`, `/blog`, `/contact`).
* Right cluster: a **dark-mode toggle** (40 × 40, radius 8, moon glyph that swaps to a sun glyph — two
  `<svg>`s, one `dark:hidden`, one `hidden dark:block`, `aria-label="Toggle dark mode"`), and the
  **"Get the letter"** button (`hidden` below a breakpoint, anchor to `#contact`).
* Below `lg`: a hamburger (`data-mobile-toggle`, `aria-expanded`) opening a panel
  (`data-mobile-menu`, `border-t`, `px-4 py-4`) with the seven names as block rows, the CTA and a rule.

### 1 — Hero (1,409 px, cream gradient) — the page's one piece of theatre

`container py-20 lg:py-32` → `mx-auto max-w-4xl text-center`.

* Two **decorative blobs** in an `absolute inset-0 -z-10` wrapper (`aria-hidden`): 500 × 500
  `accent-200/45` at `-top-40 left-1/2`, and 400 × 400 `primary-100/50` at `right-0 top-0`, both
  `blur-3xl` and both **parallaxed** (`data-parallax="0.15"` and `-0.1`) and **floated**
  (`animate-hero-float` 8 s / `animate-hero-float-reverse` 10 s reverse; keyframes translate ±30 px and
  scale 0.95–1.05).
* Badge: pill, 1 px `accent-200`, `bg-white/70`, `#664224` 14/500, `6 px 16 px`, containing a **two-disc
  pulse** (8 px `accent-500` core, `accent-400` `animate-ping` halo) and the label
  **"The Salt Line — out now"**.
* `h1` (60/60/−1.5/600 Playfair, `max-w-4xl`): **"Novels about tidal country,"** then `<br>`, then the
  italic clause in `accent-700` — **"and the people who stay"** — which is the **typewriter** element
  (`data-typewriter` with three alternates: *"and the people who stay"*, *"and inherited debt"*,
  *"and the water coming back"*).
* Lede (18 → 20 px, `#4b5563`, `max-w-2xl`): *"I write about estuaries, the families who work them, and
  what gets left behind when the tide turns. Five books, published in nineteen languages."*
* Three CTAs in a `mt-10 flex flex-col sm:flex-row gap-4` row: **"Read the new novel"** (solid `#2c3547`
  pill + arrow glyph, `#books`), **"Where I'll be"** (ghost pill, `#tour`), and a **play button** —
  48 px `#2c3547` disc with a play glyph + *"Watch the trailer"* — that opens the video modal.
* Stats row (`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-200 pt-10`): four
  **Playfair** figures `5 / 19 / 6 / 40` (30 → 36 px) over 14 px labels `Books / Languages / Prize
  listings / Festival appearances`. **These are plain text, not counters** — see the band below.
* Hero image: `mt-16 lg:mt-24`, `mx-auto max-w-5xl`, `rounded-2xl shadow-2xl ring-1 ring-gray-200`,
  **1024 × 512**, `loading="eager"`, alt *"Elin Marrow at a reading"*.

### 2 — Counter band (238 px, `#f9fafb`, `border-y`)

`container` → `grid grid-cols-2 sm:grid-cols-4 gap-8`. Four cells, each a `div.text-center` with
`data-animate` + staircase `data-delay` (0/100/200/300) containing
`<span data-counter="5">0</span>` … and a 14/500 label:
**Books published 5 · Territories sold 19 · Prize listings 6 · Festival appearances 40**.

Figures are `text-4xl lg:text-5xl font-bold` **Manrope** in `primary-600` (36 px mobile, 48 px desktop),
*matching* the hero's numbers but in the brand colour and the sans face. The markup's initial text is
literally **`0`** — the count-up writes the real number after `threshold: 0.5` fires. Reproduce the
*animation*, not the zero: under `prefers-reduced-motion`, with no `IntersectionObserver` (jsdom) or when
the band is already in view, the final value must render directly.

### 3 — `#books` (1,695 px, white) — type-only jackets, the design's signature

Header block `max-w-3xl`: pill eyebrow **"The books"** (`accent-100` / `accent-800`, +0.14 em), `h2`
*"Five books, one stretch of water"* (Playfair 36), lede *"Each book stands alone. Read in order and you
get thirty years of one estuary, told from four sides of it."*

**Featured spread** (`mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14`, split **5 / 7**):

*Left — the **featured jacket** (`relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden
rounded-sm shadow-2xl ring-1 ring-black/20 bg-primary-900`, measured **384 × 576**): a 7 % white
`radial-gradient(circle at 1px 1px, … ) 6px 6px` texture layer, a `w-3` `bg-black/25` spine plus a 1 px
`bg-white/20` hairline beside it, and an inner `p-7 pl-9` column holding the imprint
**"Harrowgate Press"** (10.4 px, +0.28 em, white/70) at the top and, at the bottom, the title
**"The Salt Line"** (Playfair 36/40), *"A novel"* (16 px Playfair italic, white/75), a **`h-px w-12`
`accent-300` rule**, and the author line (12 px, +0.22 em, white/85).

*Right* (`lg:col-span-7`): `accent-700` eyebrow **"New novel"** (+0.20 em); `h3` **"The Salt Line"**
(Playfair 36); a `<dl>` in a `flex flex-wrap gap-x-6 gap-y-2` row of 14 px `#6b7280` pairs —
**Publisher** Harrowgate Press · **Published** 2026 · **Extent** 348 pages · **ISBN**
`978-1-8382-4471-9` (`tabular-nums`) — three with `sr-only` `<dt>`s and ISBN's `<dt>` visible; three
body paragraphs (sea wall fails / Ada Rees comes home / what a place is worth); then **four format rows**
in a `grid gap-3 sm:grid-cols-2`, each `flex items-baseline justify-between border-t border-gray-200 pt-3`:
**Hardback £18.99 · Ebook £9.99 · Paperback "Spring, £9.99" · Audiobook "Read by the author"**; then
**four retail pills** — **"Buy from Bookshop.org"** (solid), **"Waterstones"**, **"Your local bookshop"**,
**"Library request"** (ghost); then a 14 px italic footnote: *"Signed and dated first editions are held by
Cobbold & Wren in Chester while stock lasts."*

**Backlist** (`mt-20 border-t border-gray-200 pt-12`): eyebrow **"Also available"** (+0.22 em, `#6b7280`),
then `mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4`. Each card is an `a.group` (**280 × 500**) wrapping
a jacket **280 × 420** — same construction as the featured one, with a different ground per book —
plus a 14 px meta line and a one-sentence blurb:

| # | jacket ground | title | meta | blurb |
| - | ------------- | ----- | ---- | ----- |
| 1 | `bg-primary-800` `#2c3547` | **Cold Harbour** | Harrowgate Press · 2023 | A pilot boat, a missing manifest, and a winter nobody in the town will discuss. |
| 2 | `bg-accent-700` `#7c4f24` | **Nine Bridges** | Harrowgate Press · 2020 | Two sisters inherit a haulage firm and the crossings it was built to serve. |
| 3 | `bg-primary-600` `#42516d` | **A Field of Small Weathers** | Harrowgate Press · 2017 | Eleven stories, most of them set within a mile of the same saltmarsh. |
| 4 | `bg-accent-900` `#563821` | **The Wrackline** | Fennick Books · 2015 | The first novel. Out of print for six years, reissued with a new afterword. |

### 4 — `#tour` (1,300 px, `#f9fafb`) — a list, not cards

Eyebrow **"Events"**, `h2` *"Where I'll be"*, lede *"Readings, festivals and the occasional workshop.
Bookshop events are usually ticketed at the price of a book; festival tickets go through the festival."*

`ul.mt-12.divide-y.divide-gray-200.border-t` with **six `<li>`** (measured **1,216 × 132–135**, `py-7`),
each a `flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8`:

1. **date block** `w-24 shrink-0` (`sm:text-center`): month 12/600 uppercase +0.20 em `accent-700`,
   **day** Playfair 36/36 `tabular-nums`, year 12 px `#9ca3af`;
2. **body** (`min-w-0 flex-1`): `h3` title + an inline **type pill** (1 px `#d1d5db`, 11.2 px uppercase
   +0.05 em, `#6b7280` — `Reading` / `Festival` / `Workshop` / `Panel`), then `venue <span>· time</span>`
   at 14 px, then an italic 14 px note;
3. **status**, right-aligned: a **solid-border pill link** (`px-5 py-2`) or, for the sold-out row, a
   **dashed-border `#9ca3af` pill with `cursor-default`** — no link at all.

| # | date | title | type | venue · time | note | status |
| - | ---- | ----- | ---- | ------------ | ---- | ------ |
| 1 | Sep 11 2026 | The Salt Line — launch reading | Reading | Cobbold & Wren, Chester · 7:00 pm | In conversation with Priya Anand | **Sold out** (dashed) |
| 2 | Sep 24 2026 | Writing the drowned parish | Festival | Hay Winter Weekend, Hay-on-Wye · 2:30 pm | — | Tickets |
| 3 | Oct 08 2026 | An evening with Elin Marrow | Reading | Central Library, Liverpool · 6:30 pm | — | Free entry |
| 4 | Oct 19 2026 | Research for fiction — a half-day workshop | Workshop | Ty Newydd Writing Centre, Llanystumdwy · 10:00 am | — | Waitlist |
| 5 | Nov 05 2026 | Coast, class and the climate novel | Panel | Aye Write, Glasgow · 8:00 pm | — | Tickets |
| 6 | Nov 22 2026 | The Salt Line — closing night | Reading | Topping & Company, Edinburgh · 7:30 pm | — | Tickets |

Footnote (14 px `#6b7280`): *"Bookshops and libraries — I take a small number of unpaid library events each
year and prioritise places outside the festival circuit. Ask Tomás."* followed by a **"Past events"**
link. All six status links are bare `#` in the reference (see §Anchor map).

### 5 — `#praise` (1,326 px, white) — pull-quotes with a rule, then a ledger

Eyebrow **"Praise"**, `h2` *"What the papers said"*, lede *"A selection. Full review texts and press
cuttings are in the press kit below."*

`mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2` — **four `<blockquote>`s** (measured **554 × 117/78**), each
wrapped in `border-l-2 border-accent-400 pl-6`, set in **Playfair 24/39** `#1f2937`, opening with
typographic curly quotes (`&ldquo;` / `&rdquo;` as text, not as elements) and followed by an attribution
line — paper name 600 + *"Review ·"* / *"Lead review ·"* / *"Book of the Month ·"* + book title:

1. *"Marrow writes weather the way other novelists write dialogue — as the thing that carries the
   argument."* — **The Guardian**, Review · Cold Harbour
2. *"There is not a sentence here that has not been earned. A novel about drainage that reads like a
   thriller about inheritance."* — **Times Literary Supplement**, Lead review · The Salt Line
3. *"She has the rarest gift in English fiction: she can write about work without either romance or
   condescension."* — **The Irish Times**, Nine Bridges
4. *"A book you finish and then immediately want to walk somewhere flat and cold, alone, for an hour."* —
   **The Observer**, Book of the Month · The Salt Line

**Prizes and listings**: grey eyebrow (+0.22 em) then `ul.mt-6.divide-y`, **six 57 px rows**
(`grid gap-1 py-4 sm:grid-cols-12 sm:items-baseline sm:gap-6`): year `col-span-1` (`tabular-nums`,
`#9ca3af`), award `col-span-5` (`font-medium #111827`), book `col-span-4` (**Playfair italic** `#4b5563`),
result `col-span-2` (`sm:text-right`, 14/600 uppercase +0.05 em **`accent-700`**):

| year | award | book | result |
| ---- | ----- | ---- | ------ |
| 2024 | Encore Award | Cold Harbour | **Winner** |
| 2023 | Ondaatje Prize | Cold Harbour | Shortlist |
| 2023 | Walter Scott Prize | Cold Harbour | Longlist |
| 2021 | Portico Prize | Nine Bridges | Shortlist |
| 2018 | Edge Hill Short Story Prize | A Field of Small Weathers | Longlist |
| 2016 | Betty Trask Award | The Wrackline | **Winner** |

### 6 — `#press` (2,817 px, `#f9fafb`) — the band this design exists for

Eyebrow **"Press kit"**, `h2` *"Everything a listings editor needs"*, lede *"Copy the bio at the length
you need, take a headshot, and write to whichever of us handles the thing you are asking about. No form,
no gatekeeping."*

**Three bio cards** (`mt-12 grid items-start gap-6 lg:grid-cols-3`, measured **389 × 194** each):
white, `rounded-lg`, 1 px `#e5e7eb`, `p-6`, `flex flex-col`. Each holds an uppercase head
(**Short / Medium / Long**), a word count (**21 words / 68 words / 136 words**), the bio text
(`data-bio-text`, 14 px `#4b5563`), and a **"Copy bio"** button (`data-copy-bio`, ghost pill, copy glyph +
`data-copy-label`). The bios are real 21/68/136-word biographies of the same novelist — keep the three
lengths and the *fact set* (four novels + one collection, two prize wins, nineteen languages, former
drainage-board clerk, lives on an estuary).

**Headshots** (`mt-8 grid gap-8 sm:grid-cols-2`): three images — two **592 × 740** (`aspect-[4/5]`,
colour and black-and-white crops of the same portrait) and one **1,216 × 521** full-width landscape
(`sm:col-span-2`, so it spans both columns) — each with a caption line
(*"Photo — Delphine Roux"*) and a 14 px meta line (*"4000 × 5000 · 8.2 MB · JPG"*) + a **"Download"** link.
Closing note: *"One sitting, three crops, all cleared for editorial use with the credit shown. The
black-and-white version is the one to use in print. If you need a different crop or a higher resolution,
Nadia can send the originals the same day."*

**Who to write to** (`mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`): four **286 × 105** cells, each a
uppercase role (+0.16 em), a name, an organisation, and a `mailto:` link:
**Agent** Ruth Ellery · Pike & Quill · `ruth@pikeandquill.co.uk` — **Publicity** Nadia Okafor ·
Harrowgate Press · `nadia.okafor@harrowgate.co.uk` — **Foreign rights** Marguerite Bell · Pike & Quill ·
`rights@pikeandquill.co.uk` — **Events** Tomás Reyes · Harrowgate Press · `events@harrowgate.co.uk`.

### 7 — `#faq` (901 px, white) — the sans heading trap

Grey eyebrow **"Questions"**, `h2` *"Things I am asked most weeks"* — **Manrope 36/40/700, not Playfair**
— lede *"If your question is not here, the contact page reaches me directly."*

`mx-auto mt-16 max-w-3xl` → `divide-y divide-gray-200`, **six 81 px rows**. Each row is a full-width
`<button>` (768 × 32, `flex items-center justify-between text-left`) holding a **16 px** question and a
chevron/plus glyph; the answer panel is `overflow-hidden transition-[max-height,opacity] duration-300`,
and — measured — the collapsed state is authored **inline in the markup**:
`style="max-height: 0px; opacity: 0;"`. There is **no `<details>`** and **no `aria-expanded`/`aria-controls`
(measured `null`)**.

Questions (answers are genuinely useful prose — keep the length and the refusal to pad):
*Will you read my manuscript?* (no, and why: time + legal tangle, so it points at the Society of Authors)
· *Can you do a book club, in person or over video?* (about one free call a month, few months' queue)
· *How do I get a signed copy?* (one Chester bookshop holds signed first editions; "I do not sell books
from this site") · *Do you do school and library visits?* (schools via the events contact at the
Society of Authors rate; a handful of unpaid library dates a year) · *Who handles translation and film
rights?* (the rights contact, and explicitly *not* the publicity address) · *When is the next book?*
(about a third in; no date; the newsletter announces first).

The open row sets `maxHeight = scrollHeight px`, `opacity 1`, rotates its glyph **45°**, and closes every
other row; clicking the open row closes it.

### 8 — `#contact` (480 px, `primary-600 → primary-800` gradient) — the newsletter

Decorative layer (`aria-hidden`): two **256 px** `white/10` `blur-3xl` discs at `-right-20 -top-20` and
`-bottom-20 -left-20`, plus a **10 % white dot grid** at `40 px` spacing.

Centred `max-w-3xl`: `h2` **"A letter, roughly every six weeks"** — **Manrope 48/48/700, white**; lede
(18 px, `primary-100`, `max-w-xl`): *"What I am working on, what I have been reading, and tour dates
before they go on general sale. No promotions between books. Unsubscribe in one click."*; then two CTAs at
**radius 8**, `px-8 py-4`: **"Subscribe"** (white ground, `#374359` label, arrow glyph) and
**"Read the last one"** (**2 px `white/30`** outline, white label, bell glyph).

### 9 — Footer (506 px, `#111827`)

`grid gap-12 lg:grid-cols-12`:

* **brand (`col-span-4`)** — `logo-light.svg` (`h-10`), blurb (`max-w-xs`, `#9ca3af`): *"Novelist. Five
  books about tidal country, inherited debt and the people who stay. Signed editions, tour dates and a
  press kit."*; **three social squares** (`bg-gray-800 p-2.5`, radius 8, hover `bg-gray-700`) labelled
  Twitter / Instagram / LinkedIn; `hello@elinmarrow.com`; *"Represented by Pike & Quill. Published by
  Harrowgate Press."*
* **link columns (`col-span-5`, `grid sm:grid-cols-3`)** — heads **Books** (The Salt Line, Cold Harbour,
  Nine Bridges, A Field of Small Weathers), **More** (About, Notebook, Events, Press kit), **Enquiries**
  (Questions, Contact, Privacy, Terms), each `mt-4 space-y-3` of `#9ca3af` links hover white.
* **newsletter (`col-span-3`)** — head **Stay Updated**, one 14 px line *"A letter roughly every six weeks
  — what I am working on, what I have been reading, and tour dates before they go public."*, then a
  **`<form data-newsletter-form>`** holding an email `<input required placeholder="Enter your email">`
  (`#1f2937` ground, 1 px `#374151`, radius 8) and a **Subscribe** submit.
* **legal bar** (`mt-16 border-t border-gray-800 py-8`, `sm:flex-row`): *"© 2026 Elin Marrow. All rights
  reserved."* left; **Privacy Policy · Terms of Service · Style Guide** right.

The recreation's footer MUST also carry the house line linking **Component Dock**
(`https://www.componentdock.com/`) — see §Deltas.

### 10 — Fixed chrome

* **`#preloader`** — `fixed inset-0 z-[100] bg-white`, a 40 px `animate-spin` ring
  (`border-4 border-gray-200 border-t-primary-600`), removed by an **inline end-of-body script** on
  `window.load` (`opacity 0` then `remove()` after 300 ms) and on `astro:before-swap`. It is *not* in the
  behaviour bundle.
* **Skip link** — `sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4`, jumps to
  `#main-content`.
* **`#scroll-progress`** — `h-0.5` **`accent-500` `#bc7f33`** bar, `fixed top-0 left-0 z-[60]`, width =
  scroll %.
* **`#mobile-cta`** (`lg:hidden`, `z-40`, `border-t`, `p-3`, `shadow-lg`) — two full-width pills:
  **"The books"** (`bg-gray-100`, `#111827` 14/600) and **"Get the letter"** (`primary-600` ground).
* **`#cookie-consent`** (`z-50`, `bg-white`, 14 px, `p-4`, `border-t`) — appears **1.5 s** after load
  unless `localStorage['cookie-consent']` exists; *"We use cookies to enhance your experience. By
  continuing to visit this site you agree to our use of cookies."* + **Decline** / **Accept All**.
* **`#back-to-top`** — 48 px `primary-600` disc, `bottom-6 right-6`, `opacity 0 pointer-events-none` until
  `scrollY > 300`.

## Behaviour the recreation must reproduce

| # | behaviour | reference implementation | notes for React |
| - | --------- | ------------------------ | --------------- |
| 1 | Theme before paint | inline `applyTheme()`: `localStorage.theme` → else `prefers-color-scheme`; toggle flips `.dark` and writes `localStorage.theme` | no flash; resolve in `index.html` |
| 2 | Header elevation | `scrollY > 50` → `shadow-lg` | passive listener |
| 3 | Mobile disclosure | `[data-mobile-toggle]` toggles `aria-expanded`, `hidden` on `[data-mobile-menu]`, swaps hamburger ↔ X | state |
| 4 | Active nav label | `IntersectionObserver`, `rootMargin: -20% 0px -70% 0px`, class `.nav-active` (`#111827` + 600; white in dark) | only `tour`/`praise`/`press` have targets — the other four never activate |
| 5 | Reveal on scroll | **70** `[data-animate="fade-in-up"]` with 16 distinct `data-delay` values (0–500 ms), start `opacity 0 / translateY(20px)`, `threshold .1`, `rootMargin 0 0 -10%`, **skipped under `prefers-reduced-motion: reduce`** | never leave anything at `opacity: 0` |
| 6 | Smooth in-page scroll | `a[href^="#"]:not([href="#"])` → scroll to `target − (header.offsetHeight + 20)` | `#books`, `#tour`, `#praise`, `#press`, `#faq`, `#contact` |
| 7 | Typewriter | `setInterval` **3 s**: fade out 300 ms (`opacity 0`, `translateY(10px)`) → next phrase → fade in; the array is `[currentText, ...data-typewriter]` = **4 phrases** | keep the 3 s cadence and the *italic* face; pause under reduced motion |
| 8 | Parallax blobs | `scroll` → `translateY(scrollY × factor)` for `0.15` and `-0.1`, only while the element is within viewport + 200 px | two elements, both `aria-hidden` |
| 9 | Counters | `IntersectionObserver` `threshold .5`, 2,000 ms, ease-out cubic, formats `+ % K M $ .` | initial `0` in markup; render final value when IO is absent |
| 10 | FAQ accordion | single-open, inline `maxHeight`/`opacity`, glyph `rotate(45deg)` | **add `aria-expanded`/`aria-controls`** (absent in the reference) |
| 11 | Copy bio | `navigator.clipboard.writeText`, `execCommand` fallback, label → **"Copied"** for 2 s | three independent buttons |
| 12 | Video modal | builds `fixed inset-0 z-[100] bg-black/80 backdrop-blur` overlay with a 16:9 iframe, close button `-top-12`, ESC + backdrop click, `body.overflow = hidden` | the reference embeds a placeholder clip — ship a **neutral, licence-clean** embed or a "trailer coming soon" panel |
| 13 | Cookie strip | 1.5 s delay, `localStorage['cookie-consent']` = `accepted` / `essential`, slide-out + remove | |
| 14 | Back to top / progress | `scrollY > 300` reveal; width = `scrollY / (scrollHeight − innerHeight)` % | |
| 15 | Preloader | inline `window.load` handler, 300 ms fade, `remove()` | derive the hidden state from `document.readyState` so an already-complete document never sticks |
| 16 | Newsletter form | **no handler at all** (`data-newsletter-form` appears 0× in the 16,894 B bundle); no `action`, no `method` | ship real client-side validation + confirmation, never navigate |

## Data-attribute inventory (measured on the live page)

Present: `data-animate` ×70 · `data-delay` ×70 (0/50/60/80/100/120/150/160/180/200/240/250/300/350/400/500)
· `data-faq-toggle` ×6 · `data-faq-icon` ×6 · `data-bio-text` ×3 · `data-copy-bio` ×3 ·
`data-copy-label` ×3 · `data-nav-link` ×7 · `data-counter` ×4 · `data-parallax` ×2 ·
`data-typewriter` ×1 · `data-video-modal` ×1 · `data-header` ×1 · `data-mobile-toggle` ×1 ·
`data-mobile-menu` ×1 · `data-dark-toggle` ×1 · `data-cookie-accept` ×1 · `data-cookie-decline` ×1 ·
`data-newsletter-form` ×1.

**Inert hook (verified: `newsletter` appears 0× in the 16,894 B bundle):** `data-newsletter-form`. It is
a decorative attribute on a form with no `action` and no handler — the submit reloads nothing and does
nothing. Do not port the attribute; port the *intent*.

The bundle also contains handlers for hooks this page never uses — `data-carousel*`, `data-billing-*`,
`data-price-monthly`, `data-blog-filters`, `data-blog-search`, `data-category`, `data-filter`,
`data-no-results`, `data-lightbox`, `data-accordion-toggle`, `data-validate`, `data-error`,
`data-video-close`. That is expected (one house kit, eleven designs); do **not** re-create any of those
behaviours on this page.

## Anchor map (all 65 `a[href]`)

| href | count | where |
| ---- | ----: | ----- |
| `/theme/marrow/books` | 11 | nav, mobile nav, 4 backlist jackets, footer Books ×4, "The books" mobile CTA |
| `/theme/marrow/blog` | 4 | nav (Notebook), footer More, contact "Read the last one", … |
| `/theme/marrow/contact` | 4 | nav, mobile nav, header CTA, contact "Subscribe" |
| `/theme/marrow/about` | 3 | nav, mobile nav, footer More |
| `/theme/marrow/#tour` | 3 | nav, footer More, hero "Where I'll be" (as `#tour`) |
| `/theme/marrow/#press` | 3 | nav, footer More, hero |
| `/theme/marrow/#contact` | 3 | header CTA, mobile CTA, … |
| `/theme/marrow/` | 2 | wordmark (header + footer) |
| `/theme/marrow/#praise` | 2 | nav, footer |
| `/theme/marrow/privacy`, `/theme/marrow/terms` | 2 each | footer Enquiries + legal bar |
| `#books`, `#tour`, `#main-content`, `/theme/marrow/#faq`, `/theme/marrow/elements` | 1 each | hero CTAs, skip link, footer, Style Guide |
| `mailto:` ×5 | 1 each | footer email + four press contacts |
| **bare `#`** | **16** | 4 retail pills, 6 tour status links (Tickets ×3, Free entry, Waitlist, Past events), 3 headshot "Download", 3 social squares |

Recreation rule: **no bare `#`** — retail pills and download/status links resolve to `#contact` (or are
rendered as disabled controls), socials point at `https://www.componentdock.com/`, and the seven inner
routes become in-page anchors or are omitted (§Deltas).

## Inner-page inventory (all live, `curl -4`, 2026-10-25)

| route | size | `<title>` | `<h1>` | band heads |
| ----- | ---: | --------- | ------ | ---------- |
| `/books` | 50,114 | Books \| Elin Marrow | Books | The Salt Line · Translations · On the books · A letter, roughly every six weeks |
| `/about` | 37,229 | About Elin Marrow \| Elin Marrow | About Elin Marrow | I write about one estuary, from four sides · What the books are about · Representation and enquiries · The Salt Line is out now |
| `/blog` | 43,733 | Blog \| Elin Marrow | Insights & Updates | Stay in the Loop |
| `/contact` | 36,740 | Contact \| Elin Marrow | Contact | Write to me · The faster addresses |
| `/elements` | 57,041 | Elements \| Elin Marrow | Elements | Typography · Buttons · Badges & Tags · Alerts / Notices · Cards |
| `/privacy` | 38,502 | Privacy Policy \| Elin Marrow | Privacy Policy | six numbered sections |
| `/terms` | 37,261 | Terms of Service \| Elin Marrow | Terms of Service | six numbered sections |

`/theme/marrow/` and `/theme/marrow/index.html` return the same 85,785 B document. The recreation is
**one page**: use the inner routes only as content reference (the translations list, the "what the books
are about" summary, the faster addresses) and say so in the PR.

## Class census

**419** unique classes in the live markup. **All 419 have a matching rule** in `Base.BsxFO9Ao.css`
(0 phantom, 0 dead selectors) — a verification line worth keeping: *anything you cannot map to those 419
is invented.* Two gotchas for anyone re-running the census: a naive substring check reports **false
positives** (`.border` matches inside `.border-t-primary-400`, `.text-sm` inside `.text-sm/6`), so anchor
the match at a selector boundary (`[,{:\s.>~+)]`); and Tailwind escapes leading digits — `2xl:` compiles
as `.\32 xl\:block`, so a `.2xl\:block` grep reports a false miss.

## Screenshot analysis (`marrow-template.jpg`)

The catalogue image is **74,472 B and is actually AVIF** (`ISO Media`, 2400 × 1892) despite the `.jpg`
extension — convert before viewing. It is a **marketing composition, not a browser capture**: a macOS
window mock-up (traffic-light dots, a grey rounded frame, a fake address bar) floating on a light-grey
ground, showing **only the hero** — the cream `#fdf8f0 → #fff` gradient, the dotted badge reading *"The
Salt Line — out now"*, the two-line Playfair headline with the gold italic second line, the two-line lede,
the dark pill *"Read the new novel →"* beside the ghost *"Where I'll be"* and the circular play button, the
hairline rule with **5 / 19 / 6 / 40** and their four labels, and the library-shelves photograph below.

Three things to hold against the live DOM: (a) the frame, the traffic lights and the grey backdrop are
**decoration — never reproduce them**; (b) the screenshot stops above the fold, so the counter band, the
five jackets, the tour list, the pull-quotes, the prizes ledger, the press kit, the FAQ, the newsletter
band and the footer have **no screenshot reference at all** — the DOM and this spec are the reference;
(c) it shows no dark mode and no mobile layout.

## Requirements

### Requirement 1: Page chrome (skip link, preloader, progress, cookie strip, mobile CTA, back-to-top)

The app SHALL render a skip link as the first focusable element, a 2 px `accent-500` scroll-progress bar
fixed to the top, a preloader removed within 300 ms of load, a cookie strip that appears 1.5 s after load
and persists its choice, a 48 px back-to-top disc past 300 px of scroll, and — below 1024 px — a sticky
two-button CTA bar.

#### Scenario: Skip link and landmarks

- **GIVEN** the page has loaded
- **WHEN** the visitor presses Tab once
- **THEN** focus lands on a "Skip to content" control that is hidden until focused
- **AND** activating it moves focus to `<main id="main-content">`
- **AND** the document has exactly one `<header>`, one `<main>` and one `<footer>`

#### Scenario: Preloader is not a blocker

- **GIVEN** the document is loading
- **WHEN** `window.load` fires (or the document is already complete)
- **THEN** the white overlay with the `primary-600`-topped spinner fades over 300 ms and leaves the DOM
- **AND** no interactive element is unreachable while it is present

#### Scenario: Scroll progress and back to top

- **GIVEN** a document 10,762 px tall at a 900 px viewport
- **WHEN** the visitor scrolls to 1,200 px
- **THEN** the 2 px `#bc7f33` bar is `1200 / (10762 − 900) = 12.2 %` of the viewport width, within 1 %
- **AND** at scroll 0 the bar has zero width
- **AND** the `#bc7f33` back-to-top disc is invisible until `scrollY > 300`, then appears at
  `bottom-6 right-6`

#### Scenario: Cookie strip lifecycle

- **GIVEN** `localStorage` has no `cookie-consent` key
- **WHEN** the page has been open for 1.5 s
- **THEN** a white strip slides up from the bottom with exactly two buttons, "Decline" and "Accept All"
- **AND** "Accept All" writes `localStorage['cookie-consent'] = 'accepted'` and "Decline" writes `'essential'`
- **AND** either choice removes the strip and a reload with the key set never shows it

#### Scenario: Mobile CTA bar

- **GIVEN** a 390 px viewport
- **WHEN** the page has loaded
- **THEN** a bar pinned to the bottom shows two full-width pills, "The books" and "Get the letter"
- **AND** at 1024 px and above the bar is not rendered

### Requirement 2: Sticky header, seven-label nav, dark toggle and mobile disclosure

The app SHALL render a sticky, translucent header with the wordmark, seven desktop labels, a dark-mode
toggle and a "Get the letter" CTA, collapsing to a hamburger below **1024 px**.

#### Scenario: Desktop header at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the page has loaded
- **THEN** the header is **81 px** tall, `position: sticky`, background `rgb(255 255 255 / .8)` with
  `backdrop-filter: blur(16px)` and a 1 px `#e5e7eb` bottom border
- **AND** the wordmark renders at `h-10` (40 px) with an accessible name equal to the novelist's new name
- **AND** seven labels render at 14 px/500 in `#4b5563`, `gap: 32px`, hover `#111827`
- **AND** the moon toggle is a 40 × 40 target with `aria-label="Toggle dark mode"`
- **AND** the CTA reads "Get the letter" and targets `#contact`

#### Scenario: The nav collapses at 1023 px

- **GIVEN** a viewport 1023 px wide
- **WHEN** the header renders
- **THEN** the desktop nav is not displayed and a hamburger with `aria-expanded="false"` is
- **AND** at 1024 px the nav is displayed and the hamburger is gone

#### Scenario: Mobile disclosure

- **GIVEN** a 390 px viewport
- **WHEN** the visitor activates the hamburger
- **THEN** `aria-expanded` becomes `"true"`, the panel unhides and the glyph becomes a close icon
- **AND** the panel lists the same seven destinations as block rows plus the CTA
- **AND** activating it again restores the closed state

#### Scenario: Header elevation and active label

- **GIVEN** the page is at scroll 0 with no shadow
- **WHEN** the visitor scrolls past 50 px
- **THEN** `shadow-lg` is applied and removed again below 50 px
- **AND** as `#tour`, `#praise` and `#press` cross the `−20 % … −70 %` band their labels gain the active
  style (`#111827`, weight 600)
- **AND** the four route-shaped labels never gain it

### Requirement 3: Hero — badge, typewriter headline, three CTAs, four stats, one photograph

The app SHALL render a centred hero on the cream-to-white gradient with a dotted badge, a two-line
Playfair `h1` whose second line is an italic gold clause that types through four phrases, a lede, three
CTAs, a four-figure stat row and one 16:8 photograph.

#### Scenario: Hero anatomy at 1440

- **GIVEN** a 1440 × 900 viewport
- **WHEN** the hero renders
- **THEN** the band is 1,409 px tall over `linear-gradient(#fdf8f0 → #ffffff)` with 128 px of vertical padding
- **AND** the badge is a full-radius pill on `white/70` with a 1 px `#efd6ae` border, a pulsing 8 px dot
  and a 14 px `#664224` label
- **AND** the `h1` is **60 / 60 / −1.5 px / 600 Playfair**, line one in `#111827`, line two in italic
  `#7c4f24`
- **AND** the lede is 20 px/500-width capped at `max-w-2xl` in `#4b5563`
- **AND** three CTAs render on one row: a 48 px `#2c3547` pill, a ghost pill and a 48 px play disc
- **AND** four Playfair figures (5, 19, 6, 40) sit above a hairline with 14 px labels
- **AND** the photograph below is 1,024 × 512 with radius 16, `shadow-2xl` and a 1 px `#e5e7eb` ring

#### Scenario: The gold clause types itself

- **GIVEN** the hero has rendered
- **WHEN** 3 s elapse
- **THEN** the italic clause fades out over 300 ms, swaps to the next of four phrases, and fades in
- **AND** the four phrases are the original clause plus three alternates of the same grammatical shape
- **AND** under `prefers-reduced-motion: reduce` the clause never changes and no transition runs

#### Scenario: Mobile hero

- **GIVEN** a 390 px viewport
- **WHEN** the hero renders
- **THEN** the `h1` is 36 px, the CTAs stack to one column, the stat row is two columns
- **AND** the hero image keeps its aspect ratio and `scrollWidth === clientWidth`

### Requirement 4: Counter band

The app SHALL render four count-up figures on `#f9fafb` between the hero and `#books`, branded `primary-600`
and set in Manrope bold.

#### Scenario: Counters animate once

- **GIVEN** the counter band below the fold
- **WHEN** it scrolls into 50 % view
- **THEN** each figure counts from 0 to its value over **2,000 ms** with an ease-out cubic curve
- **AND** the figures end at exactly **5, 19, 6, 40** and never restart on further scrolling
- **AND** the four labels read "Books published", "Territories sold", "Prize listings", "Festival appearances"

#### Scenario: Counters without an observer

- **GIVEN** no `IntersectionObserver` (jsdom) or `prefers-reduced-motion: reduce`
- **WHEN** the band renders
- **THEN** the final values are rendered immediately and no element is left showing `0`

### Requirement 5: `#books` — a featured title and four type-only jackets

The app SHALL render the books band in white with a 5/7 featured spread whose jacket is composed in CSS,
a `<dl>` of bibliographic facts, four format prices, four retail pills and a four-card backlist.

#### Scenario: The featured jacket is type-only

- **GIVEN** a 1440 px viewport
- **WHEN** `#books` renders
- **THEN** the jacket is **384 × 576** (`aspect-[2/3]`, `max-w-sm`) on `#1c2231` with a 7 % white dotted
  texture, a 12 px `black/25` spine, a 1 px `white/20` hairline beside it, and `rounded-sm` (4 px)
- **AND** it holds an imprint line (10.4 px, +0.28 em, white/70) at the top and, at the bottom, the title
  in Playfair 36, an italic subtitle, a 48 × 1 px `#e2b878` rule and a 12 px author line
- **AND** **no book cover image is used anywhere in the band** — all five jackets are CSS compositions

#### Scenario: Bibliographic facts and prices

- **GIVEN** the featured spread
- **WHEN** the right column renders
- **THEN** a `<dl>` lists publisher, year, extent and ISBN, three of them with `sr-only` terms and ISBN
  with a visible term, all `tabular-nums`
- **AND** four format rows sit in a two-column grid, each with a top hairline: Hardback £18.99 · Ebook
  £9.99 · Paperback "Spring, £9.99" · Audiobook "Read by the author"
- **AND** four pills follow — one solid and three ghost — and an italic footnote names the shop holding
  signed first editions

#### Scenario: Backlist cards

- **GIVEN** a 1440 px viewport
- **WHEN** the backlist renders
- **THEN** four cards sit in one row, each **280 × 500** with a **280 × 420** jacket
- **AND** the four jacket grounds are `#2c3547`, `#7c4f24`, `#42516d`, `#563821` in that order
- **AND** each card lifts 4 px on hover (`group-hover:-translate-y-1`) and links to `#books`
- **AND** at 640 px the grid becomes two columns and at 390 px one

### Requirement 6: `#tour` — six events with date blocks and four ticket states

The app SHALL render the tour list on `#f9fafb` as a single divided `<ul>` of six rows, each with a
month/day/year block, a type pill and a status control.

#### Scenario: Event row anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** a tour row renders
- **THEN** the row is 1,216 px wide and 132–135 px tall with 28 px vertical padding and a 1 px divider
- **AND** a 96 px date block is centred, showing a 12 px uppercase `#7c4f24` month, a Playfair 36 px
  `tabular-nums` day and a 12 px `#9ca3af` year
- **AND** the middle column holds a Playfair 20 px title, an outlined uppercase type pill, a 14 px
  venue-and-time line and an optional italic note
- **AND** the right column holds one full-radius status control

#### Scenario: Ticket states differ

- **GIVEN** the six rows
- **WHEN** the status controls render
- **THEN** five are links styled as outlined pills (Tickets ×3, Free entry, Waitlist)
- **AND** the sold-out row renders a **dashed-border `#9ca3af` pill with `cursor-default`** and no link
- **AND** all five status links resolve to a real target (not a bare `#`)

#### Scenario: Mobile event row

- **GIVEN** a 390 px viewport
- **WHEN** a row renders
- **THEN** the date block becomes a horizontal `Sep 11 2026` line, the body stacks beneath it and the
  status pill moves to its own line
- **AND** the row height grows to about 277 px with no clipping

### Requirement 7: `#praise` — four ruled pull-quotes and a six-row prizes ledger

The app SHALL render four blockquotes in a two-column grid, each with a 2 px `accent-400` left rule, and a
six-row prizes table beneath a grey eyebrow.

#### Scenario: Pull-quotes

- **GIVEN** a 1440 px viewport
- **WHEN** `#praise` renders
- **THEN** four `<blockquote>`s sit two per row, each 554 px wide with `border-left: 2px #d29a4c` and 24 px
  of left padding
- **AND** each is Playfair 24 / 39 px in `#1f2937`, opening and closing with typographic curly quotes
- **AND** each is followed by an attribution with the paper in 600 and the review kind and book title
- **AND** at 390 px the grid is one column and the quote drops to 20 px

#### Scenario: Prizes ledger

- **GIVEN** the prizes block
- **WHEN** it renders
- **THEN** six 57 px rows are separated by 1 px dividers in a twelve-column grid
- **AND** the columns are year (1, `tabular-nums`, `#9ca3af`), award (5, 500, `#111827`), book (4,
  Playfair italic, `#4b5563`) and result (2, right-aligned, 14 px 600 uppercase `#7c4f24`)
- **AND** exactly two results read "Winner" and four read "Shortlist"/"Longlist"

### Requirement 8: `#press` — three copyable bios, three headshots, four contacts

The app SHALL render the press kit on `#f9fafb` with three bio cards of 21/68/136 words, a
copy-to-clipboard control per card, three headshots and four named contact cells.

#### Scenario: Bio cards

- **GIVEN** a 1440 px viewport
- **WHEN** `#press` renders
- **THEN** three white cards (389 × 194) with radius 8, a 1 px `#e5e7eb` border and 24 px padding sit in
  one row at `lg` and stack below
- **AND** each head reads Short / Medium / Long in 14 px 600 uppercase +0.16 em with a word count
- **AND** the three bios are 21, 68 and 136 words and describe the same facts at three lengths
- **AND** each card ends with a ghost "Copy bio" pill and a copy glyph

#### Scenario: Copying a bio

- **GIVEN** the Medium card
- **WHEN** the visitor activates "Copy bio"
- **THEN** that card's exact bio text is written to the clipboard
- **AND** the label becomes "Copied" for 2 s and then reverts
- **AND** the other two cards are unaffected
- **AND** when the clipboard API is unavailable the text is still copied via a hidden textarea fallback

#### Scenario: Headshots and contacts

- **GIVEN** the press kit
- **WHEN** the media block renders
- **THEN** two portrait images render at 592 × 740 and one landscape image spans both columns at
  1,216 × 521
- **AND** each carries a credit caption and a size/format meta line with a download control that resolves
- **AND** four 286 × 105 contact cells list role, name, organisation and a `mailto:` link

### Requirement 9: `#faq` — six questions, single-open, sans heading

The app SHALL render a six-row accordion under a **Manrope** `h2`, opening one row at a time with a 300 ms
height and opacity transition and rotating the glyph 45°.

#### Scenario: The heading is sans

- **GIVEN** a 1440 px viewport
- **WHEN** `#faq` and `#contact` render
- **THEN** their `h2`s compute to `Manrope, system-ui, sans-serif` at weight 700
- **AND** the four other band `h2`s compute to `"Playfair Display", Georgia, serif` at weight 600
- **AND** an implementer must not "unify" this — the mix is authored in the reference

#### Scenario: Accordion behaviour

- **GIVEN** all six rows collapsed on first paint
- **WHEN** the visitor activates row 3
- **THEN** only row 3 expands (`max-height: scrollHeight`, `opacity: 1`) and its glyph rotates 45°
- **AND** activating row 5 closes row 3
- **AND** activating the open row closes it again
- **AND** each button exposes `aria-expanded` and `aria-controls`, and each panel is a labelled region
- **AND** the collapsed state is never a permanently hidden element: with JavaScript disabled every answer
  is readable

### Requirement 10: `#contact` — the newsletter band

The app SHALL render a full-bleed band on the `primary-600 → primary-800` diagonal gradient with a 10 %
dot grid, two blurred discs, a white Manrope heading and two CTAs.

#### Scenario: Band anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** `#contact` renders
- **THEN** the band is 480 px tall over `linear-gradient(to bottom right, #42516d, #2c3547)` with a 40 px
  white 10 % dot grid and two 256 px `white/10` blurred discs
- **AND** the heading is 48 / 48 / 700 in `Manrope`, white
- **AND** the lede is 18 px in `#e8ebf0`, capped at `max-w-xl`
- **AND** two radius-8 CTAs render: a white one labelled "Subscribe" with `#374359` text, and a **2 px
  `white/30`** outline labelled "Read the last one"

#### Scenario: Subscribing from the band

- **GIVEN** the newsletter CTA
- **WHEN** the visitor activates it
- **THEN** the page scrolls to the footer's email field and focuses it, without navigating

### Requirement 11: Footer — four columns, newsletter, legal bar, Component Dock

The app SHALL render a `#111827` footer with a brand column, three link columns, a working newsletter form
and a legal bar, and it SHALL link `https://www.componentdock.com/` as "Component Dock".

#### Scenario: Footer anatomy

- **GIVEN** a 1440 px viewport
- **WHEN** the footer renders
- **THEN** it is 506 px tall with 96 px of top padding and `#d1d5db` body text
- **AND** the twelve-column grid holds brand (4), three link columns (5) and newsletter (3)
- **AND** the column heads read Books / More / Enquiries / Stay Updated at 14 px 600 uppercase +0.7 px in
  white, with four links each in the first three
- **AND** the brand column holds the light wordmark, a two-line blurb, three social squares and one email link
- **AND** the newsletter column holds a 1 px `#374151` email field on a `#1f2937` ground with a submit
- **AND** the legal bar above a `#1f2937` rule reads "© 2026 <name>. All rights reserved." with three links
- **AND** the footer contains a "Component Dock" link to `https://www.componentdock.com/`

#### Scenario: Newsletter validation

- **GIVEN** the footer email field is empty or holds an invalid address
- **WHEN** the visitor submits
- **THEN** an inline error is shown, `aria-invalid` is set and no navigation occurs
- **AND** a valid address clears the field and shows a confirmation

### Requirement 12: Dark mode

The app SHALL support a persisted dark theme applied before first paint, with the measured dark palette
and a single toggle in the header.

#### Scenario: Theme resolves before paint

- **GIVEN** `localStorage.theme` is `'dark'` (or unset and the OS prefers dark)
- **WHEN** the document first renders
- **THEN** `<html>` carries `dark` before any content is painted — no flash of the light theme
- **AND** `body` is `#030712` with `#f3f4f6` text, white bands are `#030712`, grey bands are `#111827`,
  the hero gradient runs `#111827 → #030712`, and the `h1` clause is `#e2b878`

#### Scenario: Toggle persists

- **GIVEN** the light theme is active
- **WHEN** the visitor activates the moon button
- **THEN** `dark` is added to `<html>`, the glyph swaps to a sun, `localStorage.theme` becomes `'dark'`,
  and a reload keeps dark
- **AND** activating it again returns to light and stores `'light'`

### Requirement 13: Motion, anchors and fidelity guards

The app SHALL respect `prefers-reduced-motion`, SHALL expose no dead anchors, and SHALL contain no ColorLib
string in any app file.

#### Scenario: Reduced motion leaves nothing hidden

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads and is scrolled end to end
- **THEN** all 70 reveal targets are fully visible and nothing is left at `opacity: 0`
- **AND** the typewriter does not run, the blobs do not float and no parallax transform is applied
- **AND** the counters show their final values immediately

#### Scenario: Anchor hygiene

- **GIVEN** the rendered page
- **WHEN** every anchor is resolved
- **THEN** there is no `href="#"`, every in-page target exists, and every `mailto:` is a syntactically
  valid address
- **AND** every image has a non-empty `alt` (or `alt=""` when purely decorative)

#### Scenario: Provenance is not in the app

- **GIVEN** the shipped app files
- **WHEN** they are searched for "colorlib" (case-insensitive, comments included)
- **THEN** there are zero matches
- **AND** `apps/tidewater/package.json` names `@free-react-templates/tidewater`, `public/CNAME` holds
  `tidewater.free.componentdock.com`, and `homepage` is `https://tidewater.free.componentdock.com`

## Deltas from the reference (what the recreation must change)

1. **Name and persona.** The novelist, the imprint, the agency, the books and the events all get new,
   invented names — e.g. novelist **Iris Vane**, imprint **Fenwick & Reed**, agency **Marlow & Quay**,
   novels *The Long Shore* (new), *Black Water Year*, *Five Crossings*, *Weather for Small Boats*,
   *The Ebb Line*. Keep the shape (5 titles + 1 collection, 4 press quotes, 6 prizes, 6 events,
   21/68/136-word bios) and the tide-country register; change every proper noun. No ColorLib string and
   no real bookshop/agent/publication name in the app.
2. **Images.** The single hero photograph and the three headshots become deterministic placeholders
   (`https://picsum.photos/seed/tidewater-1/1200/600`, `-2/600/750`, `-3/600/750`, `-4/800/500`) — never
   hotlink Unsplash. **Keep the jackets as CSS compositions**; that is the design, not a fallback.
3. **The wordmark.** Author an SVG/text lockup (book glyph + name) instead of copying `logo.svg`; provide
   a light twin for dark mode and the footer.
4. **Retail and download links.** All 16 bare `#` anchors must resolve: retail pills and download controls
   point at `#contact`, socials at `https://www.componentdock.com/`, or they render as disabled controls
   with `aria-disabled`. Never ship a bare `#`.
5. **Copy-to-clipboard and the form.** The reference's newsletter form has **no handler at all** and
   `data-newsletter-form` is inert in the shipped kit; ship validation, an `aria-live` confirmation and no
   navigation. Keep the clipboard behaviour (it *is* wired) with the `execCommand` fallback.
6. **FAQ accessibility.** Add `aria-expanded`, `aria-controls` and labelled regions — absent in the
   reference (measured `null`) — and keep the single-open behaviour, the inline collapsed style and the
   45° glyph. Provide a no-JS readable state.
7. **Video modal.** The reference embeds a placeholder YouTube id. Ship a neutral, licence-clean embed or a
   "trailer coming soon" panel inside the same overlay; keep ESC, backdrop click and the scroll lock.
8. **Seven inner routes become anchors or are dropped.** `Books` → `#books`, `Events` → `#tour`,
   `Praise` → `#praise`, `Press kit` → `#press`, `Contact` → `#contact`, `About`/`Notebook` → omitted (or
   a disabled label), `Privacy`/`Terms`/`Style Guide` → `https://www.componentdock.com/` policy pages or
   omitted. **No 404 routes.**
9. **Counters and the hero stats.** Keep both rows (they are not duplicates: one is Playfair display type,
   one is a Manrope count-up in the brand colour) and render final values when animation is unavailable.
10. **Inert hooks not ported.** `data-newsletter-form` has no handler; implement the behaviour in React
    state, not by copying attributes. Do not port the unused kit hooks (carousel, pricing, blog filters).
11. **Sample/real-world claims.** The prizes, quotes and event venues are fiction in the reference too —
    keep them fictional and generic (no real awards bodies, no real bookshops, no real festival names in
    the shipped app).
12. **Footer attribution.** The house "Component Dock" link is added; the reference's `Style Guide` link is
    a real route there and a null route here, so drop it or point it at the marketplace.

## Verification checklist

- [ ] `apps/tidewater` exists, `@free-react-templates/tidewater` in `package.json`, `public/CNAME` =
      `tidewater.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments
      included)
- [ ] bands in this order: hero → counter band → `#books` → `#tour` → `#praise` → `#press` → `#faq` →
      `#contact` → footer
- [ ] hero on `linear-gradient(#fdf8f0 → #ffffff)`; badge pill with a pulsing dot; `h1` 60/60/−1.5/600
      Playfair with a 60 px italic `#7c4f24` clause that types through four phrases on a 3 s cadence
- [ ] hero CTAs: 48 px `#2c3547` pill, ghost pill, 48 px play disc; stat row `5 / 19 / 6 / 40` in Playfair
- [ ] hero image 1,024 × 512, radius 16, `shadow-2xl`, 1 px `#e5e7eb` ring
- [ ] counter band on `#f9fafb`: four figures, 2,000 ms ease-out count-up, `primary-600`, ending 5/19/6/40,
      final value shown without an observer
- [ ] `#books`: **five CSS-composed jackets, zero cover images**; featured 384 × 576 with a 12 px spine and
      a dotted 6 px texture; `<dl>` of 4 facts; 4 format prices; 4 retail pills; italic signed-editions note
- [ ] backlist: 4 cards 280 × 500 with 280 × 420 jackets on `#2c3547`, `#7c4f24`, `#42516d`, `#563821`
- [ ] `#tour`: six divided rows in one `<ul>`, 96 px date blocks (Playfair 36 px day, `tabular-nums`), type
      pills, and four distinct ticket states including one dashed sold-out pill with no link
- [ ] `#praise`: four `border-l-2 #d29a4c pl-6` pull-quotes in two columns at 24/39 Playfair, plus a six-row
      twelve-column prizes ledger with two Winners in `#7c4f24`
- [ ] `#press`: three bio cards (Short 21 / Medium 68 / Long 136 words) with working copy-to-clipboard and a
      2 s "Copied" label; two 592 × 740 portraits and one 1,216 × 521 landscape; four `mailto:` contacts
- [ ] `#faq`: six rows, single-open, 300 ms height+opacity, 45° glyph, `aria-expanded` + `aria-controls`,
      and its `h2` computes to **Manrope 700** while the other four band heads compute to Playfair 600
- [ ] `#contact`: 480 px band on `linear-gradient(to bottom right, #42516d, #2c3547)` + 10 % dot grid, white
      Manrope 48 px heading, radius-8 white CTA and a 2 px `white/30` outline CTA
- [ ] footer `#111827`: brand + Books/More/Enquiries + Stay Updated, newsletter with validation, legal bar,
      Component Dock link
- [ ] dark mode: pre-paint resolution from `localStorage`/`prefers-color-scheme`, `body #030712`, white bands
      `#030712`, grey bands `#111827`, hero gradient `#111827 → #030712`, `h1` clause `#e2b878`
- [ ] reduced motion: no reveal left at `opacity: 0`, no typewriter, no float, no parallax, counters final
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600
- [ ] no bare `#`, every in-page anchor resolves, every image has an `alt`
