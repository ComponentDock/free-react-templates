# Template: Headwater (Water treatment — the three-question quiz that replaces the quote form)

## Purpose

A **water-treatment shop in Tucson that sells appliances, not call-outs**. Its own catalogue note says it
plainly: *"Water treatment is bought like an appliance rather than like a callout, so the navigation names
products instead of services and the hero is the unit rather than a van. A three-question quiz replaces the
quote form, and product pages lead with specifications and what gets checked before quoting."*

That is the whole design. The navigation's first item is a **hover dropdown of four product names**; the hero
image is **a softener installed in a utility space**, square and rounded, not a technician and not a van; and
the page's only interactive device is `#quiz`, **three fieldsets of pill chips** that end in a recommendation
card — *"Most likely what you need"* — which sometimes recommends **nothing** (*"Honestly, nothing yet. Let us
test the water first."*). There is **no contact form anywhere on the home page** and no `<input>` at all: the
conversion is a CTA to a separate `/contact` route and a `tel:` pill, and the quiz is the qualifying step.

The page is **warm off-white, not white**: three sand/ink washes (`#f5efe6` hero, `#fbf8f3` products,
`#f6f5f1` why-us), one white band, one grey-50 band, one **deep-green `#33724c` contact band**, and a
grey-900 footer. Green (`primary`) is used as **line work and price ink** far more than as fill: the only large
green surface on the page is the closing band.

Typography is **two faces doing two different jobs**: **Lora** (serif) for the hero `h1`, **two** of the six
`h2`s (quiz, products) and every product-card title; **DM Sans** for everything else, including the other
four `h2`s. The mix is deliberate — the serif marks the parts that are *editorial* (the argument, the
catalogue) and the sans marks the parts that are *operational* (the service promises, the reviews, the CTA).
Getting that split wrong (all-serif or all-sans) changes the template.

Recreation of the ColorLib **"Springwell"** design (https://colorlib.com/wp/template/springwell/, live preview
https://preview.colorlib.com/theme/springwell/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page
application.

- **Source slug:** `springwell`
- **ColorLib page:** https://colorlib.com/wp/template/springwell/ — **HTTP 200, 111,848 B**. `<title>`
  **"Springwell - Water Treatment Website Template 2026 - Colorlib"**. Listing `applicationSubCategory` is
  **"Plumbing Website Templates"**; `datePublished` / `dateModified` **2026-09-24**. Listing screenshot
  `springwell-template.jpg` — **HTTP 200, 82,628 B, served as `image/avif` despite the `.jpg` name,
  2400 × 1892** (see §Screenshot analysis).
- **Live preview:** https://preview.colorlib.com/theme/springwell/ — **HTTP 200, 74,202 B**,
  `text/html; charset=utf-8`, read **2026-10-25** with `curl -4`. `<title>` is **"Water softeners, filtration
  and tankless heaters in Tucson | Springwell Water"**. A 2026 **Astro** build in the same house kit as
  Cresting / Nightwatch / Conduit / Jetline: one hashed stylesheet `_astro/Base.nEQF9BQf.css` (**55,290 B**,
  `/*! tailwindcss v4.3.3 */`, sha256 `e6bddbaf…`), the behaviour bundle
  `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B**, sha256 `e26cc055…` —
  byte-identical to the kit shipped on Cresting / Nightwatch / Conduit / Jetline), and the router
  `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js` (the same router file as every
  sibling in this 2026 set).
- **Four inline `<script>` bodies** (plus the two module tags): a **theme FOUC guard** (442 B — applies
  `dark` when `localStorage.theme === 'dark'`, or when the key is absent **and**
  `prefers-color-scheme: dark`), a JSON-LD block (281 B), the **page-specific quiz** (938 B), and a
  **preloader teardown** (358 B: on `load`, fade the `#preloader` node to `opacity: 0`, then remove it after
  300 ms).
- **JSON-LD:** `@type: "Plumber"`, `name: "Springwell Water"`, `description: "Water softeners, whole-house
  filtration, reverse osmosis and tankless heaters, installed and serviced."`, `telephone: "+1-555-0221"`,
  `areaServed: "Tucson, Arizona"`, `priceRange: "$$"`, `url: "/"`. The JSON-LD number disagrees with every
  `tel:` link on the page (`5550100221`) — a delta, not a spec.
- **Multi-page, not one page.** **Seven inner routes are live and all are trailing-slash only** (bare path →
  **308**): `products/` (46,356 B), `products/water-softener/` (45,846 B), `learn/` (49,067 B),
  `about/` (44,669 B), `contact/` (43,390 B), `privacy/` (45,547 B), `terms/` (44,331 B).
  `theme/springwell/index.html` answers **200, 74,202 B** — byte-identical to the directory URL, so it is a
  no-op link, not a second page. `theme/bootstrap/springwell/` and `theme/bb/springwell/` → **404**.
- **Fonts:** **DM Sans** (8 `@font-face` blocks) and **Lora** (21 blocks), both delivered from Cloudflare's
  automatic font service (`/cf-fonts/v/dm-sans/5.2.8/…`, `/cf-fonts/v/lora/…`, variable `wght`) in an inline
  `<style>` — no Google Fonts `<link>`. Measured body stack `"DM Sans", system-ui, sans-serif`; heading stack
  `Lora, Georgia, serif`. Both faces are on Google Fonts (**verified 200** for
  `css2?family=DM+Sans:wght@400;500;600;700&display=swap` and `css2?family=Lora:wght@400;500;600;700&display=swap`),
  so the recreation may load them explicitly.
- **Headings:** exactly one `h1`, **six `h2`**, **twelve `h3`** (4 product cards + 4 service cells + 4 footer
  column heads).
- **Motion:** 6 `[data-animate]` elements (reviews pill, testimonials `h2`, its lede, and the three cards) with
  `data-delay` 0 / 100 / 200 / 300 ms; the kit fades them up 20 px over 600 ms on `IntersectionObserver`
  (`threshold .1`, `rootMargin 0px 0px -10% 0px`) and **bails out entirely** under
  `prefers-reduced-motion: reduce`.

- **Recreation name:** `headwater` — one lowercase word, water-adjacent without echoing the source (a
  *headwater* is the source of a stream, which is exactly what `#quiz`'s first question asks: *"Where does
  your water come from?"*), not the source name, and no collision: `git grep -il headwater origin/main` →
  **no matches** (zero substring hits), `ls apps/` has no `headwater`, no `openspec/specs/template-headwater/`,
  and `colorlib.com/wp/template/headwater/`, `preview.colorlib.com/theme/headwater/`,
  `preview.colorlib.com/theme/bootstrap/headwater/` all → **404**. The recreation lives at `apps/headwater`,
  package `@free-react-templates/headwater`, `headwater.free.componentdock.com`. **No ColorLib string may
  appear in the app** — provenance lives in this spec, the `TEMPLATES.md` row and the PR only (AGENTS.md
  rule 5). Alternatives checked and still free if a later water slug needs them: `assay`, `clarifier`,
  `phreatic`, `brinewell`, `wellhead`, `softwater`, `aqualab` (all zero repo hits, all three ColorLib paths
  404 for `assay`). Rejected here: `artesian` (4 repo hits), `cistern` (2), `stillwater` (2), `drawdown` (3),
  `karst` (5), `limestone` (9).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, `[~]` count **0**, 2,879 ticked rows), so this design comes
from `docs/catalog-coverage.md` — the **42 standalone designs** on colorlib.com's own listing that the
checklist never recorded. This is row **`springwell`** of 42 (*preview 200, 74,202 B*), the row after
`rooter24` (prepped as *Jetline*). When the app ships, append this line under **`## Industrial`** — currently
headed `## Industrial (15)`, bump it to **16** — positioned alphabetically after **Roofing**
(`roofing` → `shingle`) and before **Supreme** (`supreme` → `stamp`); if the *Jetline* row (`Rooter24`) has
already landed it sits between the two (`Roofing` → `Rooter24` → `Springwell` → `Supreme`). Re-read the section
before pasting, a concurrent stream may have moved it:

```markdown
- [x] **Springwell** — [colorlib](https://colorlib.com/wp/template/springwell/) · [headwater](https://headwater.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/springwell-template.jpg)
```

## Reference readings (2026-10-25, `curl -4`)

| what                                   | value                                                                                                                                                                              |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML                           | 200, **74,202 B**, `text/html; charset=utf-8`                                                                                                                                       |
| `theme/springwell/index.html`          | 200, **74,202 B** — byte-identical to the directory URL (no-op link, not a second page)                                                                                            |
| stylesheet `_astro/Base.nEQF9BQf.css`  | 200, **55,290 B**, `/*! tailwindcss v4.3.3 */`, sha256 `e6bddbaf…`                                                                                                                   |
| behaviour kit `…_lang.BLoalVWc.js`     | 200, **16,233 B**, sha256 `e26cc055…` — the same house kit as Cresting / Nightwatch / Conduit / Jetline                                                                             |
| router `…CYDbzu1r.js`                  | referenced module; the same hashed router filename as every sibling in this 2026 set                                                                                                |
| logo `assets/img/logo.svg`             | 200, **335 B**, `viewBox 0 0 200 40`, `role="img" aria-label="Springwell Water"`: a **droplet** glyph (`#3F8F5F`) then the wordmark *Springwell* in **Lora 600, 20 px, `#22301F`**. Rendered **180 × 36** in the header (`h-8` → `lg:h-9`) |
| logo `assets/img/logo-light.svg`       | 200, **335 B** — the same mark for the footer / dark mode: droplet `#94C2A7`, wordmark **white**. Rendered **190 × 40** (`h-10`) in the footer                                        |
| content images                         | **6 unique photographs**, 7 `<img>` in use on the home page (hero 1200², four product squares 800², one 800 × 600 in `#why-us`) — all hot-linked from `images.unsplash.com`. **Nine `<img>` elements** in the DOM (two logo variants in the header, the footer logo) |
| favicon / OG                           | `favicon.svg`; `og:type`, `og:title`, `og:description`, `og:site_name`, `og:image=/og-image.jpg`, `twitter:card=summary_large_image`; **no canonical**; `<meta name="robots" content="noindex, nofollow">` |
| incoming styles                        | **1** `<link rel="stylesheet">` (`fetchpriority="high"`), **0** Google Fonts links, **1** inline `<style>` holding 29 `@font-face` blocks                                                |
| inner routes                           | **7** top-level, all **200 only with a trailing slash** (bare path → **308**); `index.html` is byte-identical to `/`                                                                  |
| document height                        | **6,051 px** at 1440 × 900 **and** at 1280; **6,171** at 1024; **7,888** at 768; **10,030** at 390; **10,481** at 320                                                               |
| horizontal overflow                    | **none** — `scrollWidth === clientWidth` at **320 / 390 / 768 / 1024 / 1280 / 1440**                                                                                                 |
| anchors                                | **54** `a[href]` — 4 × `/contact`, 4 × dead `#`, 3 × each of the four product routes (both slash and non-slash forms), 3 × `/learn`, 3 × `/about`, 3 × `tel:5550100221`, 3 × `/#quiz`, **2 × `#service-areas` that resolve to nothing**, 2 × `/`, 2 × `/products`, 2 × `/privacy`, 2 × `/terms`, 1 skip link, 1 `mailto:`, **1 malformed `tel:(555) 010-0221`** |
| inline `<svg>`                         | **36** (stars, arrows, chevrons, phone, pin, social glyphs) — all inline, no icon dependency                                                                                        |
| structure                              | **345** `class="…"` attributes, **294** distinct utility names, **11** ids, **19** `<button>`, **0** `<form>`, **0** `<input>` / `<textarea>` / `<select>` on the home page            |
| ids on the home page                   | `preloader`, `scroll-progress`, `main-content`, `quiz`, `products`, `why-us`, `service`, `testimonials`, `contact`, `cookie-consent`, `back-to-top`                                  |

## Page structure (measured 2026-10-25 at 1440 × 900, `getBoundingClientRect`)

| #  | band           | element                                 | ground              | top | height | notes                                                        |
| -- | -------------- | --------------------------------------- | ------------------- | --: | -----: | ------------------------------------------------------------ |
| 0  | header         | `<header data-header>` sticky, z-50      | `#fff` @ 90 %, blur |   0 |   **81** | 80 px row + 1 px `ink-100` bottom border                     |
| 1  | hero           | `<section class="bg-sand-100">` (no id)  | `#f5efe6`           |  81 |    736 | 6 / 6 split, text left, **576² image right**                 |
| 2  | quiz           | `<section id="quiz" class="section">`    | `#ffffff`           | 817 |    782 | 3 fieldsets, 10 chips, one result card                       |
| 3  | products       | `<section id="products" class="section">`| `#fbf8f3`           |1599 |  1,093 | `<ul>` 4 × 286 cards, header left in `max-w-2xl`             |
| 4  | why-us         | `<section id="why-us" class="section">`  | `#f6f5f1`           |2692 |    800 | 576 image left, 4 rule-marked commitments right              |
| 5  | service        | `<section id="service" class="section">` | `#ffffff`           |3492 |    783 | 3-col hairline grid (`gap: 1px` on `ink-100`), 4 cells        |
| 6  | testimonials   | `<section id="testimonials">`            | `#f9fafb`           |4275 |    768 | carousel, 3 slides, **0 dots at 1440**                        |
| 7  | contact        | `<section id="contact">`                 | `#33724c`           |5043 |    440 | white pill + 2 px outline pill                                |
| 8  | footer         | `<footer>`                               | `#111827`           |5483 |    568 | `pt-96`, 12-col **4 / 5 / 3**, 4 column heads                 |

**Document height 6,051 px** at 1440 and at 1280 (identical — the container is capped at 80 rem); **6,171** at
1024; **7,888** at 768; **10,030** at 390; **10,481** at 320. There is no licence bar and no announcement
strip: the hero begins at **81 px**, so every in-page anchor needs `scroll-margin-top ≥ 101 px` (the kit's
smooth scroll offsets by `header.offsetHeight + 20`).

`.section` is `padding-block: 80px` (`py-20`) → **112 px** (`py-28`) at `lg`. The hero's container is
`py-14 px-4` (**56 / 16**) → `lg:py-20 lg:px-8` (**80 / 32**). The container is `max-width: 80rem` at `≥ 1280`
with `px-4` / `lg:px-8`, so the content column is **1,216 px** at 1440 and at 1280, and fluid below.

Fixed chrome, out of flow: `#preloader` (`fixed inset-0 z-[100]`, `bg-sand-50`, removed on `load`),
`#scroll-progress` (2 px, `top-0`, `z-[60]`), `#back-to-top` (`bottom-6 right-6`, 48 px, `z-50`),
`#cookie-consent` (`bottom-0`, `z-50`).

## Design tokens (measured from `Base.nEQF9BQf.css`, 55,290 B, and `getComputedStyle` at 1440 px)

> **Delivery note for the implementer:** Tailwind 4 inlines custom theme colours as **literal hex values** in
> the compiled utilities, so the sheet contains **no `--color-sand-*` / `--color-ink-*` / `--color-primary-*`
> custom properties** — only Tailwind's generated `:root` defaults (`--color-white`, `--color-black`, the
> stock green/red/amber oklch ramps, `--radius-lg .5rem` / `xl .75rem` / `2xl 1rem`, `--spacing .25rem`).
> The three ramps below were reconstructed by parsing every `bg-` / `text-` / `border-` / `ring-` /
> `placeholder:` / `aria-pressed:` / `dark:` rule for `sand-*`, `ink-*` and `primary-*`, then confirmed
> against `getComputedStyle` on the rendered page. Declare them in the app's own `@theme`.

### `sand` — warm paper (the light bands)

| step | hex       | used for                                                          |
| ---- | --------- | ----------------------------------------------------------------- |
| 50   | `#fbf8f3` | **`#products` ground**, the preloader ground                      |
| 100  | `#f5efe6` | **hero ground** and **the quiz card fill** (the only 100 on 100)   |

### `ink` — warm charcoal-green (all text and hairlines)

| step | hex       | used for                                                                                  |
| ---- | --------- | ----------------------------------------------------------------------------------------- |
| 50   | `#f6f5f1` | **`#why-us` ground**, dropdown `hover:bg-ink-50`                                          |
| 100  | `#eae8e1` | **header bottom border**, card borders, `#service` hairline grid ground, `dl` rules         |
| 200  | `#d3cfc3` | **chip and secondary-button borders** (`quizChip`, phone pill, "See products")             |
| 300  | `#aaa595` | `placeholder:text-ink-300` (no input on this page; kept in the sheet)                      |
| 400  | `#78725f` | `dt` labels in the product `dl`, the `#why-us` figcaption, the quiz fine print             |
| 500  | `#57523f` | **body / lede ink** — every `p` under a heading, hero lede                                 |
| 600  | `#3d3a2c` | **nav labels**, hero star-line text, quiz chip labels                                     |
| 700  | `#2c2a22` | secondary-button labels, `dd` values, chip `hover` text                                    |
| 800  | `#22301f` | **every `h1` / `h2` / `h3`**, the light logo wordmark                                      |
| 900  | `#161e14` | emitted for `bg-ink-900` (used by sibling builds, not visible here)                        |

### `primary` — deep sage green (the brand)

| step | hex       | used for                                                                                       |
| ---- | --------- | ---------------------------------------------------------------------------------------------- |
| 50   | `#f1f7f3` | `hover:bg-primary-50` on the white contact pill, `from-primary-50`                              |
| 100  | `#dfede4` | **the `Reviews` pill fill**, the testimonial initials disc, the contact lede ink                 |
| 200  | `#bfdbca` | **the quiz result card border**                                                                 |
| 300  | `#94c2a7` | the dark logo droplet, `dark:text-primary-300`                                                  |
| 400  | `#63a57f` | **testimonial stars**, `dark:` tone of every accent                                             |
| 500  | `#4a9268` | chip `hover` borders, `focus` ring, `aria-pressed` border                                       |
| 600  | `#3f8f5f` | **every filled CTA** (header, hero, footer, back-to-top, progress bar), `aria-pressed` fill, the logo droplet, `#why-us` left rules |
| 700  | `#33724c` | **the `#contact` band ground**, every eyebrow, every price, the contact CTA label               |
| 800  | `#2a5b3e` | `dark:border-primary-800` only                                                                  |
| 900  | `#234a33` | `dark:` result-card border and the `Reviews` pill in dark mode                                  |

Green is a **flat fill, never a gradient**. The page has **no gradients at all** — no washes, no overlays, no
text gradients.

### Stock Tailwind greys — exactly four jobs

| token            | hex       | job                                                                   |
| ---------------- | --------- | --------------------------------------------------------------------- |
| `gray-50`        | `#f9fafb` | **`#testimonials` band ground**                                        |
| `gray-900`       | `#111827` | **footer ground**                                                     |
| `gray-800`       | `#1f2937` | footer social chips, `border-gray-800` footer rule, dark testimonial cards |
| `gray-950`       | `#030712` | **dark-mode page ground** (`body`), dark quiz card                    |
| `gray-400/500/600` | `#9ca3af` / `#6b7280` / `#4b5563` | footer link ink, footer legal ink, testimonial attribution |
| `amber-400`      | `#fbbf24` (`oklch(82.8% .189 84.429)`) | **the five hero stars, and nothing else**          |

### Type

| role                | face                       | size / line / weight / tracking                                  |
| ------------------- | -------------------------- | ---------------------------------------------------------------- |
| `h1`                | **Lora**                   | 36 → 48 (`sm`) → **60** (`lg`) / **1.15** (69 px at 60) / **600** |
| serif `h2`          | **Lora**                   | 30 (`text-3xl`) → **36** (`sm:text-4xl`) / 40 / **600**            |
| sans `h2`           | **DM Sans**                | 30 → **36** / 40 / **700**, `tracking-tight` (**−0.9 px**)          |
| product `h3`        | **Lora**                   | 18 / 28 / **600**                                                  |
| service + footer `h3`| **DM Sans**               | 18 / 28 / **700**; footer heads 14 / 20 / 600 uppercase **+0.7 px** |
| lede (`text-lg`)    | DM Sans                    | 18 / **29.25** (1.625) / 400                                       |
| body                | DM Sans                    | 16 / 24 / 400                                                      |
| eyebrow             | DM Sans                    | 14 / 20 / **500** (quiz, hero) or **700** (products, why-us, service) uppercase **+0.35 px** (`tracking-wide`) |
| meta / price        | DM Sans                    | 14 / 20 / 600                                                      |

### Shape, shadow, rhythm

| token            | value                                                |
| ---------------- | ---------------------------------------------------- |
| `--radius-lg`    | `8px` — **every button and CTA**                      |
| `--radius-xl`    | `12px` — the quiz result card                         |
| `--radius-2xl`   | `16px` — images, product cards, quiz card, service grid |
| full radius      | chips, phone pill, city pill, `Reviews` pill, dots, back-to-top |
| `shadow-soft`    | `0 4px 16px -4px rgb(0 0 0 / .1)` — testimonial cards |
| header shadow    | `shadow-lg` past **50 px** of scroll (class toggled, height unchanged) |
| container        | `max-width: 80rem`; `px-4` → `lg:px-8` (1,216 px of content at ≥ 1280) |
| section rhythm   | `py-20` (**80**) → `lg:py-28` (**112**)               |
| breakpoints used | `sm 640` · `md 768` · `lg 1024` · **`xl 1280`** (nav) · `2xl 1536` (city pill) |

## Content inventory (verbatim copy; paraphrase the brand, never the operational detail)

**Header.** Logo (180 × 36). Desktop nav (`xl`+, `gap: 28px`, 14/600 `ink-600`): **Products ▾** (hover
dropdown: Water softeners · Whole-house filtration · Reverse osmosis · Tankless heaters) · **Learn** ·
**About** · **Contact**. Right cluster: city pill **Tucson, AZ** (`2xl` only — **not visible at 1440**),
phone pill **(555) 010-0221** (`md`+), a **dark-mode toggle** (36 × 36, `aria-label="Toggle dark mode"`,
sun/moon glyphs swapped by `dark:`), the CTA **Test your water** (144 × 40, `lg`→`xl` only), and the burger
(`xl:hidden`, `aria-label="Open menu"`). The mobile panel repeats all four items, with **Products** as an
accordion, plus phone · Tucson, AZ · Test your water.

**Hero.** Eyebrow `Tucson · Water tested free`. `h1` **"Softer water, quieter pipes."** Lede: *"Tucson water
is hard enough to shorten the life of every appliance in the house. We test what is actually in yours, then
size the smallest thing that fixes it."* Star line: five amber stars, **4.9**, *"480+ reviews on Google ·
sample data"*. CTAs **Test your water** (green, → `#quiz`) and **See products** (outline, → products route).
Image: *"A water treatment system installed in a utility space"*, square, `rounded-2xl`.

**`#quiz`.** Eyebrow `Three questions`. `h2` **"What do you actually need?"** Lede: *"Most people arrive
convinced they need a softener. Often they need something cheaper, and sometimes nothing at all."*
Three `<fieldset>`s, each `legend` + a wrap of full-radius chips (`gap-2.5`):

| # | legend                                       | chips (`data-quiz-value`)                                                    |
| - | -------------------------------------------- | ---------------------------------------------------------------------------- |
| 1 | **1. Where does your water come from?**      | City supply `city` · Private well `well` · Not sure `unknown`                 |
| 2 | **2. What is bothering you?**                | Scale and spotting `scale` · Taste or smell `taste` · Running out of hot water `hotwater` · Nothing, just curious `curious` |
| 3 | **3. How many people in the house?**         | 1 - 2 `small` · 3 - 4 `medium` · 5 or more `large`                            |

Result card (hidden until all three questions are answered): eyebrow **"Most likely what you need"**, a
serif product line, an explanation, a green **See this product** link, and the fine print *"This is a guide,
not a test result. We test your water properly before recommending anything."*

Outcome table (**first match wins**, a match is satisfied when **every** value in `match` has been selected):

| # | `match`            | product                                      | destination                     | explanation                                                                                                                          |
| - | ------------------ | -------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1 | `scale`            | A water softener                             | `/products/water-softener`      | "Scale on fixtures and spotting on glassware is hardness, and a softener is the only thing that removes it. We would size it on your tested hardness and household size rather than selling you the biggest one." |
| 2 | `taste` + `city`   | Whole-house filtration                       | `/products/whole-house-filtration` | "On a city supply, taste and smell complaints are usually chlorine or chloramine. Carbon filtration at the point of entry handles that for every tap, not just the kitchen one." |
| 3 | `taste` + `well`   | Whole-house filtration, then reverse osmosis | `/products/whole-house-filtration` | "On a well we would test before recommending anything, because taste can be iron, sulphur or dissolved solids, and each needs a different media. Often the answer is filtration at entry plus RO for drinking." |
| 4 | `hotwater`         | A tankless water heater                       | `/products/tankless-heater`     | "Running out mid-shower is capacity, not water quality. A tankless sized on your simultaneous outlets fixes it and frees up the cupboard the tank is in." |
| 5 | `curious`          | A free water test                             | `/contact`                      | "Honestly, nothing yet. Let us test the water first. Plenty of Tucson houses need less than people expect, and we would rather tell you that than fit something." |
| – | *(no match)*       | A free water test (fallback)                  | `/contact`                      | "Your combination needs a proper test before anyone recommends a product. We do that free and we will tell you if the answer is that you need nothing." |

**`#products`.** Eyebrow `Products`. `h2` (serif) **"Four things, each for a different problem"**. Lede:
*"Prices are illustrative and include installation. Sizing is confirmed after a water test, not before."*
A `<ul>` of four cards, each **image (square) + body**: `h3` (serif, linked), blurb, a three-row `<dl>` of
specs, a price line and a bordered **Request a quote** button.

| card                 | blurb                                                        | specs                                                        | price                  |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------- |
| Water softener       | Ion-exchange softener for hard water, sized to your household. | Capacity **32,000 grains** · Flow rate **12 gpm** · Salt use **~40 lb a month** | From **$1,450** installed |
| Whole-house filtration | Carbon and sediment filtration at the point of entry.        | Media **Catalytic carbon** · Service life **5 years** · Flow rate **15 gpm** | From **$2,100** installed |
| Reverse osmosis      | Under-sink RO with a remineralisation stage.                  | Stages **5 plus remineralisation** · Output **75 gpd** · Footprint **Under-sink** | From **$680** installed |
| Tankless water heater| Gas tankless, sized on simultaneous outlets.                  | Flow rate **9.8 gpm** · Efficiency **0.96 UEF** · Venting **Concentric** | From **$3,200** installed |

Footnote: *"Sample products and pricing for template demonstration. Replace with your own before launch."*

**`#why-us`.** Image left (**order-last on mobile, order-first at `lg`**) with the figcaption *"Replace with a
photograph of your own technician testing on site."* Right: eyebrow `How we sell`, `h2` (sans)
**"We test before we recommend"**, lede *"A softener nobody needed is the most common sale in this industry.
Testing first is cheap and it is the only honest way to size anything."*, then a `<dl>` of **four
commitments**, each a 2 px `primary-600` left rule + `pl-5`:

1. **The test is free and it is a real test** — "Hardness, iron, TDS, chlorine and pH, done on site with the results written down and left with you whether or not you buy anything."
2. **Sized on your house, not on a shelf** — "Grain capacity is calculated from your tested hardness and the number of people in the house. Oversized softeners waste salt; undersized ones regenerate constantly."
3. **We tell you when the answer is nothing** — "Plenty of houses need less than they have been told. If the water is fine, we will say so and charge nothing for the test."
4. **Serviced by the people who fitted it** — "Filter changes and salt deliveries on a schedule we set up at install, so the system keeps working rather than quietly stopping."

**`#service`.** Eyebrow `Service`, `h2` (sans) **"After the install"**, lede *"A filtration system that is not
serviced is an expensive pipe."* Four cells in a **hairline grid** (1 px `ink-100` gaps inside a
`rounded-2xl` overflow-hidden shell, so the cells read as one bordered table):

| cell                     | body                                                                                     | price              |
| ------------------------ | ---------------------------------------------------------------------------------------- | ------------------ |
| Filter and media changes | On the schedule set at installation, with a reminder rather than a hope that you remember.  | From **$95**       |
| Salt delivery            | Delivered and loaded into the brine tank, which is the part most people come to dislike.   | From **$45 a delivery** |
| Annual system check      | Hardness re-tested, settings adjusted for any change in the household, resin bed inspected. | **$120**           |
| Repairs                  | Valves, controllers and leaks on any system, including ones we did not install.            | From **$110**      |

**`#testimonials`.** Pill **Reviews** (81 × 28-ish, `bg-primary-100`, `text-primary-700`, 14/500), `h2`
**"What customers say"**, lede *"Sample reviews for demonstration. Replace with your own."* Three slides, each
five `primary-400` stars (20 px), an 18/500 quote, a **48 px** `primary-100` initials disc with a
`primary-600` glyph, a name and a town:

1. *"They tested the water, told me I did not need the whole-house system the last company quoted, and fitted a softener for a third of the price."* — **M** Marisol E., Midtown Tucson
2. *"Explained why the RO needed to go after the softener rather than before, which nobody else had mentioned. It has been running two years without a filter alarm."* — **H** Hal W., Oro Valley
3. *"The salt delivery is the thing that sold me. I had stopped topping up the old one because carrying the bags was the worst part."* — **J** Jenny K., Catalina Foothills

**`#contact`.** `h2` **"Start with the test"**, lede *"Free, on site, results written down, and no obligation
to buy anything at all."* Two CTAs: **Book a water test** (white, `#33724c` label, 203 × 56) and
**Call (555) 010-0221** (2 px `white/40` outline, phone glyph).

**Footer.** Brand column (`col-span-4`): light logo 190 × 40, blurb *"Water softeners, whole-house filtration,
reverse osmosis and tankless heaters. Tested first, sized properly, installed in half a day."*, three 40 px
social chips, then **3300 East Speedway Boulevard, Tucson, AZ 85716**, **(555) 010-0221**,
**hello@springwellwater.example**. Middle (`col-span-5`, three sub-columns): **Products** — Water softeners,
Whole-house filtration, Reverse osmosis, Tankless heaters · **Company** — All products, Learn, About,
Contact · **Support** — Privacy, Terms. Last (`col-span-3`): **Water testing** — *"We test your water free
before recommending anything. A softener nobody needs is the most common sale in this industry."* + a green
**Test your water** pill. Bottom bar (`mt-16 border-t gray-800 py-8`, 14 px `gray-500`):
`© 2026 Springwell Water. All rights reserved.` + `Privacy Policy` / `Terms of Service`.

## Interaction inventory

| behaviour                | contract                                                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Water quiz               | Clicking a chip in a fieldset sets that question's value in a `Map` and `aria-pressed="true"` on it / `"false"` on its siblings. Once **all three** questions have a value, the page picks the **first** outcome whose `match` array is fully contained in the selected values, else the fallback, fills product / explanation / `href`, and removes `hidden` from the result card. Answers are changeable and re-evaluate. **No hash change, no scroll, no submit.** |
| Quiz third question      | `household` is **collected but never matched** by any outcome — it gates completion only. Reproduce as authored (see §Reference defects) and keep the result stable when it changes. |
| Testimonial carousel     | Slides per view **3 (≥1024) / 2 (≥640) / 1**; slide width = track-parent width ÷ per view; `translateX(-index × width)`. Arrows and dots are rendered only when `maxIndex > 0` — so at 1440 there are **0 dots and no arrows**, at 768 **2 dots**, at 390 **3**. Autoplay every **5 s**, paused on `mouseenter`, resumed on `mouseleave`, restarted by any arrow/dot click. Active dot **32 × 10** `primary-600`, inactive **10 × 10** `gray-300`. |
| Dark-mode toggle         | Flips `.dark` on `<html>` and stores `theme` = `dark` / `light`. On first paint, `dark` is applied when `localStorage.theme === 'dark'` **or** when the key is absent and `prefers-color-scheme: dark` matches. Light is the default in a fresh profile. |
| Mobile menu              | `aria-expanded` flip on `[data-mobile-toggle]`, `hidden` toggle on `[data-mobile-menu]`, burger↔✕ **glyph swap** (the path `d` is replaced, not rotated), plus a Products accordion (`hidden` on the panel, `rotate-180` on its chevron). |
| Header shadow            | Past **50 px** of scroll the header gains `shadow-lg`; below it the class is removed. Height never changes. |
| Smooth in-page scroll    | Every `a[href^="#"]` except bare `#` scrolls to `target.top − (header.offsetHeight + 20)` and pushes the hash. |
| Scroll progress          | 2 px `primary-600` bar, width = scroll fraction × 100 %, `fixed top-0 z-[60]`.                                                                    |
| Back-to-top              | 48 px `primary-600` disc, `fixed bottom-6 right-6`, `opacity: 0; pointer-events: none; translateY(16px)` below **300 px** of scroll, visible above it, smooth-scrolls to 0. |
| Cookie strip             | Appears **1,500 ms** after load unless `localStorage['cookie-consent']` is set; slides up from `translateY(100%)`. `Accept All` stores `accepted`, `Decline` stores `essential`; either slides out and removes the node. |
| Preloader                | `#preloader` covers the viewport at `z-[100]` with a spinning 40 px ring (`border-t-primary-600`). On `load` it fades to `opacity: 0` and is removed after 300 ms. |
| Reveal on scroll         | 6 `[data-animate]` elements fade up 20 px over 600 ms with `data-delay` 0 / 100 / 200 / 300 ms, unobserved after the first intersection, **disabled entirely** under `prefers-reduced-motion: reduce`. |
| Forms                    | **None on the home page.** The only form in the set is on `/contact` (`Full Name`, `Email`, `Subject`, `Message`; `data-validate data-contact-form`). Do **not** invent a hero form or a newsletter input — the quiz is the qualifying device. |

## Inner-page inventory (authoritative for anything the home page only summarises)

All seven are live at a trailing-slash URL and share the same chrome, cookie strip and footer. They are the
reference for a future multi-route expansion; the recreation is single-page unless the owner asks otherwise.

- **`/products/`** (46,356 B) — `h1` *"Four things, each for a different problem"*, the full catalogue grid,
  then a *"Not sure which one?"* block pointing back at the quiz.
- **`/products/water-softener/`** (45,846 B) — `h1` *"Water softener"*; `h2`s **Specification** (grain
  capacity 32,000 · flow 12 gpm · salt ~40 lb/month · **warranty 10 years on the tank, 2 on labour** · install
  half a day), **What we check before quoting**, **Quote for a water softener** (the only product form: name,
  phone, product select), **Other products**. The other three product routes follow the same template.
- **`/learn/`** (49,067 B) — `h1` *"Before you buy anything"*; seven explainer `h2`s: *Hardness is not a
  contaminant*, *Taste and smell are usually chlorine*, *Dissolved solids need RO*, *Wells are their own
  problem*, *What softeners do not do*, *When the answer is nothing*, *Start with the test*. This page is the
  long-form version of the quiz's five outcomes.
- **`/about/`** (44,669 B) — `h1` *"About Springwell Water"*; *The test comes before the recommendation*,
  *Three commitments*, *The team*, *Book the free test*.
- **`/contact/`** (43,390 B) — `h1` *"Contact Springwell"*; **Book a water test** (the only form: Full Name,
  Email, Subject, Message, submit *Book the test*) and **Reach us**.
- **`/privacy/`** (45,547 B) and **`/terms/`** (44,331 B) — boilerplate legal prose, ten and twelve numbered
  sections, same chrome.

## Screenshot analysis (`springwell-template.jpg`, 2400 × 1892, served as AVIF → converted with PIL)

Header: a **white bar** with a small green droplet + serif wordmark at the left, four nav items centred, and at
the right **two outlined pills** (a location pin + *Tucson, AZ*, a phone + *(555) 010-0221*) followed by a
**green rounded-rectangle CTA**. (The location pill is the `2xl`-only element — at 1440 it is gone, so a
1440 screenshot looks slightly emptier than the marketing shot; reproduce the responsive behaviour, not the
marketing crop.) Hero: a **cream `#f5efe6` ground** carrying a centred-left column — a small uppercase green
eyebrow, a **two-line serif headline** in near-black green, a two-line sans lede, a row of five small amber
stars with "4.9" and the review count, then a **green filled button and a thin outlined button** side by
side — and, on the right, a **square, 16 px-radius photograph of chrome plumbing fittings** whose warm browns
match the cream ground. Below the fold, the second band is **white with a centred serif heading** and a
**cream quiz card** holding numbered questions and pill chips. The overall read is *calm, warm, editorial
product catalogue* — nothing about it looks like an emergency-service template, which is the point.

## Reference defects (fix in the recreation; do not reproduce)

1. **Two `#service-areas` anchors with no target.** The header city pill and one footer link point at an id
   that exists on **no page** of the set (grep across all eight fetched documents). Point them at a real
   section or drop the link.
2. **One malformed `tel:(555) 010-0221`** in the footer (all three other `tel:` links are well formed).
3. **Four dead `href="#"`**: three social chips and the quiz result link's initial `href`. Give the socials
   real destinations and render the quiz link with a href from the first outcome (or `hidden` until set).
4. **The quiz result is not announced.** The result card has no `aria-live` / `role="status"`, so a screen
   reader gets nothing when it appears. The recreation must add one **without** changing the visual result.
5. **The third quiz question never affects the answer.** Collected, never matched. Keep the question and the
   behaviour (parity), and note it in the app's copy-free data table as authored.
6. **The preloader can flash on a cached load.** It is a `fixed inset-0` opaque overlay removed only on
   `load`; derive readiness in the React port (`loaded || document.readyState === 'complete'`,
   see `docs/conventions.md` §Effects) rather than effect-writing state.
7. **The dark-mode default is environment-dependent** (`prefers-color-scheme` when the key is absent). Keep
   that behaviour, but make sure the toggle's `aria-label` and `aria-pressed` reflect the current mode.

## Requirements

### Feature: Page shell and chrome

#### Scenario: Landmarks and skip link

- **GIVEN** the page is loaded
- **THEN** the first focusable element is "Skip to content" targeting `#main-content`, hidden until focused
  and then a `primary-600` pill at `left-4 top-4` with `z-[80]`
- **AND** the document has exactly one `<h1>`, one `<main id="main-content">`, one `<header>` and one `<footer>`
- **AND** the `h1` lives in the hero band, not inside a card

#### Scenario: No horizontal overflow at any audited width

- **GIVEN** widths 320 / 390 / 768 / 1024 / 1280 / 1440
- **THEN** `documentElement.scrollWidth === clientWidth` at every one of them (the reference is clean at all six)

#### Scenario: Fixed chrome

- **THEN** `#scroll-progress` is **2 px** tall, `#3f8f5f`, fixed at `top-0 z-[60]`, width = scroll fraction
- **AND** the back-to-top disc is **48 × 48**, full radius, `#3f8f5f` with a `primary-600/25` shadow, fixed
  `bottom-6 right-6`, invisible (`opacity: 0`, `pointer-events: none`) below **300 px** of scroll
- **AND** the cookie strip is a `role="dialog"` `aria-label="Cookie consent"` that slides up **1,500 ms**
  after load unless `localStorage['cookie-consent']` is set, with `Decline` (outline) and `Accept All`
  (green) storing `essential` / `accepted` and then removing the node
- **AND** the preloader covers the viewport at `z-[100]` on `bg-sand-50` and is gone once the document is ready

#### Scenario: Reveal-on-scroll and reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** no `[data-animate]` element is left at `opacity: 0` or translated
- **AND** with motion allowed, the six elements fade up 20 px over 600 ms honouring `data-delay` 0/100/200/300

### Feature: Sticky header

#### Scenario: Header at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the header is **81 px** tall (80 + 1 px border), `position: sticky`, `top: 0`, `z-50`, ground
  `#fff` at **90 %** with `backdrop-filter: blur(16px)`, bottom border 1 px `#eae8e1`
- **AND** the logo renders **180 × 36** from an original mark (never the source SVG)
- **AND** the four nav labels are 14/20 **600** `#3d3a2c` with `gap: 28px`, and **Products** is a hover
  dropdown (`invisible opacity-0` → `visible opacity-100`, chevron `rotate-180`, panel `rounded-xl` white with
  a `md` shadow)
- **AND** the phone pill is **154 × 34**, full radius, 1 px `#d3cfc3`, 14/600 `#22301f`, `padding: 6px 12px`
- **AND** the CTA is **144 × 40**, radius **8**, `#3f8f5f`, white 14/**700**, `padding: 10px 20px`
- **AND** the dark toggle is **36 × 36** with `aria-label="Toggle dark mode"`
- **AND** **no city pill is visible at 1440** — it appears only at ≥ 1536 (`2xl`)

#### Scenario: Nav collapses at 1280, not 1024

- **GIVEN** widths 1024 and 1279
- **THEN** the desktop nav is hidden (`xl:flex`), the burger is visible and the header is **65 px**
- **AND** at 1280 the four labels render unclipped and the header is **81 px**
- **AND** between 1024 and 1279 the nav must not overlap the CTA (the source's own comment records the bug it
  fixed by holding the nav to `xl` and the city pill to `2xl`)

#### Scenario: Mobile panel

- **GIVEN** a 390 px viewport
- **WHEN** the burger is activated
- **THEN** `aria-expanded` becomes `true`, the glyph swaps from three lines to an ✕, and a panel opens below
  the header (`bg-white`, `border-t #eae8e1`, `px-4 py-4`) with **Products** as an accordion plus Learn, About,
  Contact as 16/600 rows, then phone · Tucson, AZ · Test your water

#### Scenario: Header shadow

- **GIVEN** the page scrolled past 50 px
- **THEN** the header gains `shadow-lg` and keeps its height; scrolling back removes it

### Feature: Hero

#### Scenario: Hero geometry at 1440

- **THEN** the band is **736 px** on `#f5efe6`, starting at **81 px**, with `py-20 px-8` inside a 1,280 px
  container → **1,216 px** of content, split **6 / 6** with `gap: 64px`
- **AND** the text column is **576 px** wide starting at `x 112`; the image is **576 × 576** at `x 752`,
  `y 161`, radius **16**
- **AND** the image is `aspect-square object-cover` (placeholder photo, never the source asset)

#### Scenario: Type and CTAs

- **THEN** the eyebrow is 14/20 **500** uppercase `#33724c` at **+0.35 px** tracking
- **AND** the `h1` is **Lora 600, 60 / 69 (1.15), `#22301f`**, wrapped onto two lines in a 576 px column, with
  **no negative tracking**
- **AND** the lede is 18 / 29.25 `#57523f` capped at **512 px** (`max-w-lg`)
- **AND** the star line sits **20 px** tall with five **16 px** `#fbbf24` stars, **4.9** in bold, and
  *"480+ reviews on Google · sample data"* at 80 % opacity, all 14/20
- **AND** the two CTAs are radius **8**: **Test your water** filled `#3f8f5f` with white 16/600,
  `padding: 14px 24px`; **See products** 1 px `#d3cfc3` with `#2c2a22` 16/600

#### Scenario: Stacking

- **GIVEN** a 390 px viewport
- **THEN** the band is **924 px**: text first, then the square image full width, `padding: 56px 16px`, and the
  `h1` is **36 px**

### Feature: `#quiz` — three questions, one recommendation

#### Scenario: Band and card at 1440

- **THEN** the band is **782 px** of white with `py-28`, the head centred in `max-w-3xl` (768)
- **AND** the quiz card is **768 × 374** at `x 336`, radius **16**, ground `#f5efe6`, `padding: 32px`
- **AND** each fieldset's `legend` is 16/24 **600** `#22301f`, the chip wrap `gap: 10px`
- **AND** each chip is **42 px** tall, full radius, 1 px `#d3cfc3` on white, 14/20 **500** `#2c2a22`,
  `padding: 10px 16px`, `hover:border-primary-500`
- **AND** chips break **3 / 4 / 3** across the three fieldsets, wrapping at narrow widths

#### Scenario: Pressed state is attribute-driven

- **WHEN** a chip is activated
- **THEN** it carries `aria-pressed="true"`, its siblings in the same fieldset carry `"false"`, and its skin is
  `aria-pressed:border-primary-600 aria-pressed:bg-primary-600 aria-pressed:text-white`
- **AND** no class is toggled by hand — the attribute *is* the state

#### Scenario: The result appears only when complete

- **GIVEN** fewer than three answers
- **THEN** the result card keeps `hidden`
- **WHEN** the third answer is chosen
- **THEN** the card un-hides with the matching product, its explanation and a **See this product** link, in a
  **12 px-radius** card with a `#bfdbca` border, white ground, `padding: 24px`
- **AND** choosing `scale` first yields *"A water softener"* → the water-softener route
- **AND** `taste` + `city` yields *"Whole-house filtration"*; `taste` + `well` yields *"Whole-house filtration,
  then reverse osmosis"* (precedence is outcome order, with `match` satisfied when **every** listed value is
  selected)
- **AND** the card closes with the fine print *"This is a guide, not a test result. We test your water properly
  before recommending anything."*
- **AND** changing an answer after a result is shown re-evaluates immediately and never re-hides the card

#### Scenario: Accessibility additions

- **THEN** the result region is announced (`role="status"` / `aria-live="polite"`) — the reference omits this
- **AND** the result link has a real `href` from the first evaluation (the reference ships `href="#"`)

### Feature: `#products` — four cards

#### Scenario: Grid at 1440

- **THEN** the band is **1,093 px** on `#fbf8f3` with `py-28`; the head is a left-aligned `max-w-2xl` block
  (eyebrow 14/**700** `#33724c`, serif `h2` 36/40 **600**, 18/29 lede)
- **AND** the grid is **4 × 286** with `gap: 24px` (2 up at 640–1023, 1 up below 640)
- **AND** each card is radius **16**, 1 px `#eae8e1`, white, `overflow: hidden`, with a square image on top and
  a `padding: 20px` body
- **AND** the card reads: serif 18/28 `h3` (a link), 14/20 `#57523f` blurb, a `dl` separated by a 1 px top rule
  with 14 px `dt` in `#78725f` and right-aligned 14/500 `dd` values, a **14/600 `#33724c`** price line, then a
  full-width bordered **Request a quote**
- **AND** the closing footnote *"Sample products and pricing for template demonstration…"* is 14 px `#78725f`

#### Scenario: Four products, twelve specs

- **THEN** the four cards are Water softener / Whole-house filtration / Reverse osmosis / Tankless water heater
  in that order, each with its three spec rows and price exactly as tabled in §Content inventory

### Feature: `#why-us`

#### Scenario: Split at 1440

- **THEN** the band is **800 px** on `#f6f5f1`; a 12-col 6/6 split with `gap: 64px`
- **AND** the figure is **576 × 432** (radius 16, `object-cover`) with a 14 px `#78725f` figcaption below it;
  on mobile the figure comes **after** the copy (`order-last` → `lg:order-first`)
- **AND** the right column holds eyebrow `How we sell` (14/**700** `#33724c`), sans `h2` 36/40/**700** with
  **−0.9 px** tracking, an 18/29 lede, then four commitments
- **AND** each commitment is a `border-l-2` `#3f8f5f` rule with `padding-left: 20px`, a 16/700 `#22301f` `dt`
  and a 16/24 `#57523f` `dd`, spaced `24px`

### Feature: `#service`

#### Scenario: Hairline grid at 1440

- **THEN** the band is **783 px** of white; head is left-aligned `max-w-2xl`
- **AND** the grid is a **1 px-gap** matrix on an `#eae8e1` ground inside a `rounded-2xl` overflow-hidden shell,
  so the cells share hairlines and read as one bordered table
- **AND** at ≥ 1024 there are **3 columns × 404 px** and the **four** cells fill three plus one
  (`2` at 640+, `1` below)
- **AND** each cell is white with `padding: 32px`, an 18/700 sans `h3`, a 16/24 body (`flex-1`) and a 14/**700**
  `#33724c` price pinned to the bottom

### Feature: `#testimonials` — carousel

#### Scenario: Band and cards at 1440

- **THEN** the band is **768 px** on `#f9fafb` with `py-28`, head centred in `max-w-3xl`, opening with a
  **pill** `Reviews` (`bg-primary-100`, `text-primary-700`, 14/500, radius full) then `h2` 36/40/700
- **AND** the track holds **three** slides of **405 px** (1,216 ÷ 3), each padded `0 12px`, so the card is
  **381 × 292**, radius **16**, white, `padding: 32px`, `shadow-soft`
- **AND** each card holds five **20 px** `#63a57f` stars, an 18/500 quote, a **48 px** `#dfede4` initials disc
  with a `#3f8f5f` glyph, a 16/600 name and a 14/24 grey town

#### Scenario: Carousel behaviour

- **THEN** at ≥ 1024 three slides show, so `maxIndex` is **0**: **no dots and both arrows hidden**
- **AND** at 768 two show (**2 dots**) and at 390 one (**3 dots**), arrows `flex`
- **AND** autoplay advances every **5 s**, pauses on hover, resumes on leave, and any arrow/dot click restarts it
- **AND** the active dot is **32 × 10** `#3f8f5f`, inactive **10 × 10** `#d1d5db`, `aria-label="Go to slide N"`

### Feature: `#contact` — the green band

#### Scenario: Band at 1440

- **THEN** the band is **440 px** of `#33724c` with `py-28`, content centred in `max-w-3xl`
- **AND** the `h2` is 36/40/**700** with −0.9 px tracking in **white**, the lede 18/29 in **`#dfede4`** capped at
  576 px
- **AND** the CTAs are **Book a water test** (white ground, `#33724c` 16/700, **203 × 56**, `px-8 py-4`,
  radius 8, `hover:bg-primary-50`) and **Call (555) 010-0221** (2 px `white/40` border, white 16/700,
  `hover:border-white hover:bg-white/10`), side by side at `sm`+ and full-width stacked below

### Feature: Footer

#### Scenario: Footer at 1440

- **THEN** the footer is **568 px** on `#111827` with `pt-96` and 16/24 `#d1d5db` body
- **AND** the 12-col grid is **4 / 5 / 3** (`gap: 32px`): brand **384**, three link columns inside **488**,
  newsletter **280**
- **AND** the brand column holds a **190 × 40** light logo, a `max-w-xs` `gray-400` blurb, three **40 px**
  social chips (`rounded-lg bg-gray-800 p-2.5`), then address / phone / email as `gray-400` links
- **AND** the four column heads are 14/600 uppercase **+0.7 px** white; links are 16/400 `gray-400`
- **AND** the last column is headed **Water testing** with its blurb and a green **Test your water** pill
- **AND** the bottom bar is `mt-16 border-t #1f2937 py-8`, 14 px `gray-500`: `© 2026 {Brand}. All rights
  reserved.` plus `Privacy Policy` / `Terms of Service`

### Feature: Content parity

#### Scenario: The sample-data caveats survive

- **THEN** the page keeps *"480+ reviews on Google · sample data"*, *"Sample products and pricing for template
  demonstration. Replace with your own before launch."*, *"Sample reviews for demonstration. Replace with your
  own."*, *"Replace with a photograph of your own technician testing on site."*, and the three not-yet-quoted
  caveats (prices illustrative, sizing after a test, warranty terms) — the honesty is the design
- **AND** the footer links `https://www.componentdock.com/` and no ColorLib string appears in any app file,
  comments included

#### Scenario: Dark mode

- **GIVEN** the toggle is activated
- **THEN** `<html>` gains `.dark`, `localStorage.theme` becomes `dark`, the body ground becomes `#030712`, and
  every band on the page switches to the grey-950 / grey-900 / primary-900 mapping measured in the reference
- **AND** the header, quiz card, cards, service grid, testimonial cards and footer all invert without any
  light-coloured hairline left visible

## Verification checklist

- [ ] `apps/headwater` exists, `@free-react-templates/headwater` in `package.json`, `public/CNAME` =
      `headwater.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments
      included); the app never says "Springwell"
- [ ] bands in this order: sticky header → hero → `#quiz` → `#products` → `#why-us` → `#service` →
      `#testimonials` → `#contact` → footer
- [ ] header **81 px** sticky (`#fff`/90 + `blur(16px)`, 1 px `#eae8e1`), **65 px** below `xl`; logo 180 × 36;
      four labels 14/600 `#3d3a2c` `gap-28`; Products hover dropdown; phone pill 154 × 34; CTA 144 × 40 radius 8
      `#3f8f5f`; dark toggle 36 × 36; **city pill only at ≥ 1536**; `shadow-lg` past 50 px
- [ ] mobile panel: `aria-expanded`, burger↔✕ glyph swap, Products accordion (`rotate-180` chevron)
- [ ] hero **736 px** on **`#f5efe6`**, content 1,216, 6/6 split `gap-64`; `h1` **Lora 600 60/69 `#22301f`**;
      eyebrow 14/500 uppercase `#33724c` +0.35; lede 18/29 `#57523f` at 512; star line with five 16 px
      `#fbbf24` stars + 4.9 + "480+ reviews…"; two radius-8 CTAs; image **576 × 576** radius 16
- [ ] `#quiz` **782 px** white; card **768 × 374** radius 16 `#f5efe6` `p-8`; 10 chips at **42 px**, full
      radius, 1 px `#d3cfc3`, 14/500, **`aria-pressed`-driven** skin; result card hidden until all three
      answered, then product + explanation + link + fine print; outcome precedence and all five outcomes match
      §Content inventory; result announced via `role="status"`
- [ ] `#products` **1,093 px** `#fbf8f3`; head left in `max-w-2xl`; four cards **286** wide `gap-24` radius 16;
      serif 18/28 titles, three spec rows, `#33724c` price, bordered **Request a quote**; sample-price footnote
- [ ] `#why-us` **800 px** `#f6f5f1`; figure 576 × 432 radius 16 with caption, **figure last on mobile**; sans
      `h2` 36/700 −0.9; four **2 px `#3f8f5f` left-rule** commitments
- [ ] `#service` **783 px** white; **1 px hairline grid** on `#eae8e1` in a `rounded-2xl` shell; 3 columns of
      404 at ≥ 1024 with four cells; each cell `p-8`, 18/700 title, bottom-pinned `#33724c` price
- [ ] `#testimonials` **768 px** `#f9fafb`; `Reviews` pill; three 405 px slides → 381 × 292 cards radius 16
      `shadow-soft`; five 20 px `#63a57f` stars; 48 px initials disc; **0 dots and no arrows at ≥ 1024**,
      2 at 768, 3 at 390; 5 s autoplay paused on hover; off under reduced motion
- [ ] `#contact` **440 px** `#33724c` `py-28`; white `h2` 36/700; lede `#dfede4`; white 203 × 56 pill +
      2 px `white/40` outline pill
- [ ] footer **568 px** `#111827` `pt-96`; 12-col **384 / 488 / 280**; 190 × 40 light logo; three 40 px social
      chips; four uppercase column heads; **Water testing** block with a green CTA; bottom bar
      `mt-16 border-t #1f2937 py-8`
- [ ] chrome: 2 px `#3f8f5f` progress bar, skip link, 48 px back-to-top past 300 px, cookie strip after
      1,500 ms storing `accepted` / `essential`, preloader removed when ready
- [ ] dark mode: `.dark` on `<html>`, `localStorage.theme`, ground `#030712`, no light hairline survives
- [ ] reduced motion: no reveal stuck at `opacity: 0`, no carousel autoplay, no smooth scroll
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440
- [ ] **zero** `href="#"`; **zero** `#service-areas` dead anchors; every `tel:` well formed; every icon-only
      control has an accessible name; the quiz chips expose `aria-pressed`
- [ ] **no** `<form>` and **no** `<input>` on the page — the quiz is the only qualifying device
- [ ] 100% coverage on the new app, `scripts/verify-app.sh headwater` green

## Implementation notes for the port (not requirements)

- **Two faces, two jobs.** Lora 600 for the `h1`, the quiz `h2`, the products `h2` and the product-card titles;
  DM Sans for everything else. Do not "unify" the headings — four of the six `h2`s are sans on purpose. Load
  both from Google Fonts (`css2?family=DM+Sans:wght@400;500;600;700&family=Lora:wght@400;500;600&display=swap`),
  verified 200.
- **Warm paper, not white.** The hero `#f5efe6`, products `#fbf8f3` and why-us `#f6f5f1` are three *different*
  creams; collapsing them to one white or one cream loses the banding that carries the page.
- **The quiz is the only stateful widget.** One `useState` map of question → value; derive the outcome during
  render (`outcomes.find(o => o.match.every(v => selected.includes(v))) ?? fallback`) and derive
  `complete = selected.size === questions.length`. No effect writes the result; add `role="status"` to the
  result region and keep it mounted (hidden) so the announcement fires reliably.
- **Reserve the result card's height** — the five explanations differ by two lines and the reference's band
  grows from 782 px when the card appears. Either accept the growth (parity) or reserve the tallest
  explanation; state the choice in the PR.
- **The service grid is a hairlines trick, not borders:** `gap: 1px` on an `#eae8e1` background inside an
  overflow-hidden `rounded-2xl`. Adding `border` to the cells doubles the lines.
- **The carousel with 3 slides at 3 per view has nothing to page** — do not render dots, do not autoplay past
  index 0, and do not show arrows. That is parity, not a bug.
- **Placeholder imagery:** `https://picsum.photos/seed/headwater-<n>/<w>/<h>`; the source's six Unsplash
  photographs must not be hot-linked. Keep the *kinds*: hero = installed equipment in a utility space,
  products = one square per device, why-us = a technician testing a sample (4:3).
- **Icons:** `lucide-react` (`Droplet`, `Phone`, `MapPin`, `ChevronDown`, `Menu`, `X`, `Sun`, `Moon`, `Star`,
  `ArrowUp`, `ArrowRight`). The wordmark is yours — a droplet glyph in `#3f8f5f` plus a Lora 600 wordmark
  reads the same without copying the SVG.
- **Copy is content.** The negative-space selling (*"We tell you when the answer is nothing"*, *"Honestly,
  nothing yet"*, *"A softener nobody needed is the most common sale in this industry"*) is the template's
  identity; paraphrase the brand name, keep the argument and the sample-data caveats.
