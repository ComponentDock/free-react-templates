# Template: Drainwise (Multi-location plumbing trade brand — ZIP-routed branch network)

## Purpose

A **trade-brand site for a plumbing company that runs twelve city branches under one guarantee**, and the
reference's own catalogue blurb names the design's single job: *"A multi-location trade brand has one job
in the first screen: work out which branch the visitor belongs to. Metroflow puts a ZIP finder inside a
solid brand-blue hero and routes to a location page template carrying that branch's own phone number,
state licence, manager, team photograph and towns. Add a branch by adding one YAML file."*

So this is **not** a "hero + three features + newsletter" local-trades page. The organising idea is
**parity**: the same promise, the same rate card and the same warranty in every city, while every branch
keeps its **own phone number, own state licence and own team**. The page repeats that idea in every band —
*"The same three things at every branch"*, *"The same services, city to city"*, *"Booked nationally, done
locally"* — and the ZIP finder in the hero is the mechanism, not decoration. A recreation that swaps the
finder for a generic "Get a quote" form has deleted the template.

The register is deliberately **plain-spoken trade copy with the exclusions stated**: *"Sample prices for
demonstration"*, *"On time, or the repair is free"*, *"we will not carry on and add it to the invoice"*,
*"Sample reviews for demonstration. Replace with your own."* The reference is a **2026 Astro build** whose
content is sample data by design — keep the sample-data caveats, they are part of the artefact.

Composition: **one solid brand-blue hero, one white promise strip, alternating white/`#f5f6f9` service and
branch bands, one grey counter band, one white process band, one grey testimonial carousel, one
`primary-700` contact band, one near-black footer.** At 1440 × 900 (measured, `getBoundingClientRect`):

| # | band | ground | height |
| - | ---- | ------ | ------ |
| 0 | `<header>` sticky, translucent white | `#ffffff / 90 %` | 81 |
| 1 | hero + ZIP finder | `primary-600` `#1d4ed8` | 665 |
| 2 | `#guarantees` promise strip | `#ffffff`, `border-b` | 341 |
| 3 | `#services` hairline grid | `#ffffff` | 855 |
| 4 | `#locations` branch cards | `ink-50` `#f5f6f9` | 674 |
| 5 | counter band (no id) | `gray-50` `#f9fafb`, `border-y` | 238 |
| 6 | `#process` three steps | `#ffffff` | 564 |
| 7 | `#testimonials` carousel | `gray-50` `#f9fafb` | 768 |
| 8 | `#contact` ZIP CTA | `primary-700` `#183fae` | 440 |
| 9 | `<footer>` | `gray-900` `#111827` | 544 |

**Document height 5,170 px** at 1440 × 900; **8,533 px** at 390 × 844. (For scale: the sibling Marrow prep
measured 10,762 px — this design is barely half as tall, because it is all information and no theatre.)

The palette is **one blue ramp, one blue-slate neutral ramp and stock Tailwind greys**. The blues carry
three distinct jobs and they are not interchangeable: `600` `#1d4ed8` is the **hero ground and every solid
CTA**, `700` `#183fae` is the **contact-band ground, every eyebrow and every price/phone link**, `400`
`#6b83f5` is the **testimonial star fill** (the only place the ramp gets light). The neutrals are a custom
`ink` ramp (`800` `#0b1220` is every heading, `500` `#4a5369` every paragraph, `400` `#6b7590` every
licence/sample-data line, `100` `#e9ebf1` every hairline). Sampling the page and finding **one hue plus
greys** is correct: there is no accent colour anywhere, and no gradients at all.

The type is **one face doing everything**: **Poppins** at 400/500/600/700, loaded by Cloudflare's automatic
font service from `/cf-fonts/s/poppins/5.2.7/...` (four weights, latin + latin-ext + devanagari subsets,
no italics, **no 300**). Every heading is `font-bold` 700; the only 500s are the stat labels and the
testimonial quotes; the only 600s are navigation, eyebrows-as-labels, licence lines and author names.
There is **no serif anywhere** — a serif `h2` is a different template.

Recreation of the ColorLib "Metroflow" design (https://colorlib.com/wp/template/metroflow/, live preview
https://preview.colorlib.com/theme/metroflow/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `metroflow`
* **ColorLib page:** https://colorlib.com/wp/template/metroflow/ — **HTTP 200, 112,283 B**, `<title>`
  **"Metroflow - Multi-Location Plumbing Website Template 2026 - Colorlib"**, dated **September 24, 2026**,
  *"Template Details: Author: Colorlib · Released: September 2026 · Credits: Images from Unsplash"*,
  category **Plumbing Website Templates**. Marketing copy: *"Built with Astro 7 and Tailwind CSS 4"*,
  *"All content lives in simple YAML and Markdown files"*, *"Add a branch by adding one YAML file"*,
  *"includes a built-in blog with search and filtering, dark mode with persistent toggle, View Transitions"*.
* **Live preview:** https://preview.colorlib.com/theme/metroflow/ — **HTTP 200, 52,720 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4` (`/index.html` returns the identical 52,720 B
  document). `<title>` is **"Plumbers in twelve cities, with one guarantee | Metroflow"**. A 2026 **Astro**
  build: one hashed stylesheet `_astro/Base.B-6WuWQn.css` (**55,319 B**, `/*! tailwindcss v4.3.3 */`), one
  behaviour bundle `_astro/Base.astro_astro_type_script_index_0_lang.**BLoalVWc**.js` (**16,233 B**, the
  shared house kit — see §Data-attribute inventory for which handlers are actually wired here), and the
  router `_astro/ClientRouter.astro_astro_type_script_index_0_lang.**CYDbzu1r**.js` (**16,357 B** — the same
  hash as the Marrow/Tidewater prep, i.e. the same house router across the 2026 set).
* **No archive, no alternate family path:** `downloads/free/metroflow.zip` → **404** (9 B);
  `theme/bootstrap/metroflow/` → **404**; `theme/bb/metroflow/` → **404**;
  `etc/cs/metroflow/index.html` → **404**. The live preview is the only copy.
* **Single-page?** No. **Eleven inner routes are live** (`services`, `locations`, `guarantees`, `careers`,
  `about`, `contact`, `privacy`, `terms`, plus three branch pages `locations/riverside/`,
  `locations/westbridge/`, `locations/harbor-point/`), all HTTP 200 **only with the trailing slash**
  (the bare path answers **308** with an empty body). See §Inner-page inventory.
* **Fonts:** no `<link>` to Google Fonts in the HTML at all. `document.fonts` shows **Poppins 400/500/600/700
  loaded**, all four served from `/cf-fonts/s/poppins/5.2.7/{latin,latin-ext,devanagari}/<weight>/normal.woff2`
  (Cloudflare's automatic font replacement, injected at runtime). `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap`
  → **HTTP 200**, so the recreation loads Poppins from Google Fonts explicitly.

* **Recreation name:** `drainwise` — one lowercase word, plumbing-adjacent but *not* the source name, no
  collision with `apps/`, `openspec/specs/`, `docs/templates/`, any bold name in `TEMPLATES.md`, or anything
  in the repository (`git grep -il drainwise origin/main` → **no matches**; zero substring hits, so the
  `navpane`/`navpanel` trap does not apply), and `colorlib.com/wp/template/drainwise/`,
  `preview.colorlib.com/theme/drainwise/`, `preview.colorlib.com/theme/bootstrap/drainwise/` all → **404**.
  The recreation lives at `apps/drainwise`, package `@free-react-templates/drainwise`,
  `drainwise.free.componentdock.com`. **No ColorLib string may appear in the app** — provenance lives in
  this spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**), so this design comes from `docs/catalog-coverage.md` —
the **42 standalone designs** on colorlib.com's listing that the checklist never recorded. This is row 16
of 42 (`metroflow`, *preview 200, 52,720 B*). When the app ships, append the row under the best-fit
category — **`## Business`** — **in source-name alphabetical order** (between `meridian`-class neighbours
and `minimal`-class ones; re-read the section rather than trusting this line, a concurrent prep may have
landed first), and bump that heading's count.

## Reference readings (2026-10-25, `curl -4`)

| what | value |
| ---- | ----- |
| preview HTML | 200, **52,720 B**, `text/html; charset=utf-8` (`/index.html` identical) |
| stylesheet `_astro/Base.B-6WuWQn.css` | 200, **55,319 B**, `/*! tailwindcss v4.3.3 */` |
| behaviour kit `…_lang.BLoalVWc.js` | 200, **16,233 B** |
| router `…CYDbzu1r.js` | 200, **16,357 B** (same file as the sibling preps) |
| logo | `assets/img/logo.svg` (light ground) + `assets/img/logo-light.svg` (dark/footer); header renders `h-8 lg:h-9` (32 → 36 px), footer `h-10` (**211 × 40** measured) |
| content images | **1** — hero Unsplash `photo-1504307651254-35680f356dfd?w=1200&h=900&fit=crop&q=80`, rendered **580 × 435** (4:3), radius 16, `object-fit: cover`, alt *"A Metroflow crew outside a branch"* |
| inner routes | **11** (8 top-level + 3 branch), all 200 with trailing slash, 308 without |
| document height | **5,170 px** at 1440 × 900; **8,533 px** at 390 × 844 |
| anchors | **49** `a[href]`: 1 skip-link hash, **3 dead `#`** (the three footer social icons), 37 path links, 7 `tel:`, 1 `mailto:` |
| unique classes in markup | **284**, **0 phantom** (see §Class census) |
| inline `<svg>` | **35** (0 icon font, 0 sprite sheet); 5 of them are the hero rating stars |
| `<form>` / `<input>` | **1** / **1** (hero ZIP finder, `name="postcode"`, `required`, `autocomplete="postal-code"`) |
| `<h2>` count | **6** (`30 / 36 / 36 / 36 / 36 / 36` px — see §Typography) |
| `<img>` count | **2** logos only in dark mode / 1 logo + 1 hero in light |

## Design tokens (measured from `Base.B-6WuWQn.css`, 55,319 B, and from `getComputedStyle` at 1440 px)

Both ramps are emitted as **plain escaped utilities** (`.bg-primary-600{background-color:#1d4ed8}`), not as
`@layer theme` custom properties — `--color-primary-*` and `--color-ink-*` greps find **nothing** in the
sheet. The only custom properties present are Tailwind's own defaults, so the recreation must declare both
ramps itself in `@theme`.

### `primary` — brand blue (hero ground, CTAs, accents)

| step | hex | used for |
| ---- | --- | -------- |
| 50 | `#eef2ff` | hero lead paragraph (`text-primary-50`), finder button hover |
| 100 | `#dfe6fe` | hero eyebrow, contact lede, testimonial avatar ground, "Reviews" pill ground |
| 200 | `#c2cefd` | (declared border tone only) |
| 300 | `#9badfa` | dark-mode accent text |
| 400 | `#6b83f5` | **testimonial stars** (`text-primary-400`), dark-mode accents |
| 500 | `#3f5bec` | focus ring / focus border |
| **600** | **`#1d4ed8`** | **hero ground**, header CTA, finder-free solid buttons, counter figures, cookie "Accept All", back-to-top |
| **700** | **`#183fae`** | **contact band ground**, every eyebrow (`text-primary-700`), every price, every phone number, finder button **label** |
| 800 | `#15348b` | link hover only |
| 900 | `#132c70` | dark-mode `primary-900` surfaces |

Note the pairing: **`600` is fill, `700` is type.** The hero's white finder button carries `#183fae` text;
the contact band is `#183fae` ground with a white button whose label is `#183fae`. Swapping the two tones
is the most likely re-skin error.

### `ink` — blue-slate neutral ramp (all structure)

| step | hex | used for |
| ---- | --- | -------- |
| 50 | `#f5f6f9` | **`#locations` band ground** (the only tinted-light band) |
| 100 | `#e9ebf1` | every hairline: header border, services grid gap, card borders, process rules |
| 200 | `#cfd4e0` | phone-pill border |
| 300 | `#a6aec4` | input placeholder (dark contexts) |
| 400 | `#6b7590` | licence lines, sample-data notes, card region |
| 500 | `#4a5369` | **every body paragraph** |
| 600 | `#2f374a` | nav links |
| 700 | `#1d2436` | nav hover |
| **800** | **`#0b1220`** | **every heading**, phone pill label |
| 900 | `#060a14` | (dark-mode surfaces only) |

### Stock Tailwind greys (structure and the footer)

`gray-50 #f9fafb` (counter + testimonial bands), `gray-100 #f3f4f6`, `gray-200 #e5e7eb` (counter band
`border-y`), `gray-300 #d1d5db`, `gray-400 #9ca3af` (footer links), `gray-500 #6b7280`,
`gray-600 #4b5563` (stat labels, testimonial roles), `gray-700 #374151`, `gray-800 #1f2937` (footer
dividers, social chips), **`gray-900 #111827` (footer ground)**, `gray-950 #030712` (dark-mode body).
`amber-400` `oklch(82.8% .189 84.429)` ≈ `#fbbf24` paints the **five hero rating stars only** — the
testimonial stars are `primary-400`, not amber. That mismatch is authored.

### Dark mode (`.dark` on `<html>`, measured by emulating `prefers-color-scheme: dark`)

| surface | light | dark |
| ------- | ----- | ---- |
| body | `#ffffff` / `#111827` text | **`#030712`** / `#f3f4f6` text |
| header | `#ffffff / 90 %` + `#e9ebf1` border | `gray-950 / 90 %` + `#1f2937` border |
| hero | `#1d4ed8` | **`#1d4ed8` — unchanged** |
| `#guarantees` + `#services` | `#ffffff` | `#030712` |
| `#locations` band | `#f5f6f9` | `#111827`; cards `#030712`, border `#1f2937` |
| counter band | `#f9fafb` | `#111827` |
| `#testimonials` | `#f9fafb` | `#111827`; cards `gray-800 #1f2937` |
| `#contact` | `#183fae` | **`#183fae` — unchanged** |
| footer | `#111827` | `#111827` — unchanged |

The two **saturated bands do not change in dark mode** — only the white and tinted bands invert. The dark
toggle is a `[data-dark-toggle]` button in the header, `localStorage.theme` (`'dark'`/`'light'`), with a
**pre-paint inline script** that resolves `localStorage.theme` else `prefers-color-scheme` before first
paint (so there is no flash), and re-applies on `astro:after-swap`.

### Typography (Poppins, measured)

| role | size / line-height | weight | tracking | colour |
| ---- | ------------------ | ------ | -------- | ------ |
| `body` | 16 / 24 | 400 | normal | `ink-800` on white |
| `h1` (hero) | **60 / 66** (`text-4xl sm:text-5xl lg:text-6xl`, `leading-[1.1]`) | 700 | **−1.5 px** (`tracking-tight` = −0.025 em) | `#ffffff` |
| `h2` band heads | **36 / 40** (`text-3xl sm:text-4xl`, `tracking-tight`) | 700 | **−0.9 px** (−0.025 em) | `ink-800 #0b1220`; contact band `#ffffff` |
| `h2` **`#guarantees`** | **30 / 36** (`text-2xl lg:text-3xl`, **no** `tracking-tight`) | 700 | normal | `ink-800` |
| `h3` cards | 18 / 28 (`text-lg`) | 700 | normal | `ink-800` |
| hero eyebrow | 14 / 20 | **600** | +0.35 px (`tracking-wide`) | `primary-100 #dfe6fe`, uppercase |
| band eyebrows ("What we do", "How it works") | 14 / 20 | **700** | +0.35 px | `primary-700 #183fae`, uppercase |
| **`#guarantees` eyebrow ("The promise")** | 14 / 20 | **600** | +0.35 px | **`primary-600 #1d4ed8`** |
| hero lead | 18 / 28 (`text-lg`) | 400 | normal | `primary-50 #eef2ff` |
| band lede | 18 / 28 | 400 | normal | `ink-500 #4a5369` |
| hero rating row | 14 / 20 | 400, value 700 | normal | `white / 90`, muted part `white / 80` |
| prices | 14 / 20 | 700 | normal | `primary-700` |
| licence line | 12 / 16 | 600 | +0.3 px | `ink-400 #6b7590`, uppercase |
| counter figure | **48 / 48** (`text-4xl lg:text-5xl`) | 700 | normal | `primary-600` |
| counter label | 14 / 20 | **500** | normal | `gray-600 #4b5563` |
| nav link | 14 / 20 | 600 | normal | `ink-600 #2f374a` |
| footer column head | 14 / 20 | 600 | **+0.7 px** (`tracking-wider`) | `#ffffff`, uppercase |
| footer link | 16 / 24 | 400 | normal | `gray-400 #9ca3af` |
| testimonial quote | 18 / 28 | **500** | normal | `gray-900 #111827` |

Two type facts are traps, both verified twice:

1. **The promise `h2` is 30 px, every other band head is 36 px**, and it is the *only* head without
   `tracking-tight`. An implementer's instinct is to unify the six heads; that removes the deliberate
   "smaller, quieter first band" step-down.
2. **The promise eyebrow is `primary-600` at weight 600** while the other two eyebrows are `primary-700`
   at weight 700. Same 14/20 uppercase geometry, one step lighter and one shade bluer.

### Buttons, fields, radii, shadows (measured at 1440)

| element | geometry | colours |
| ------- | -------- | ------- |
| header CTA "Find your branch" | `px-5 py-2.5` (10/20), radius **8**, 14/20 700, `inline-flex` at ≥1280 only | `bg-primary-600`, white label, hover `primary-700` |
| header phone pill | `px-3 py-1.5` (6/12), radius **full**, 1 px border, 14/20 600, phone icon 16 px | `border-ink-200 #cfd4e0`, `ink-800` label; hover border `primary-600` + label `primary-700` |
| hero finder input | **320 × 54**, `px-4 py-3.5` (14/16), radius **8**, 1 px border, 16/24 | `bg white/10`, `border white/20`, white text, placeholder `white/50`, focus border white + 2 px `white/30` ring |
| hero finder button | **180 × 54**, `px-6 py-3.5`, radius **8**, 16/24 700 | `bg #ffffff`, label `primary-700 #183fae`, hover `primary-50` |
| contact primary | `px-8 py-4` (16/32), radius **8**, 16/24 700, gap 8 with icon | `bg #ffffff`, label `#183fae` |
| contact ghost | same box, **2 px** border, radius 8 | transparent, white label, `white / 40` border, hover `white / 10` |
| footer CTA | `px-5 py-3` (12/20), radius **8**, 16/24 600 | `bg-primary-600`, white, hover `primary-700` |
| cookie buttons | `px-4 py-2`, radius 8, 14/20 500 | decline: 1 px `gray-300`, `gray-700`; accept: `primary-600`, white |
| service cell | `p-6 lg:p-8`, no radius (the **grid** owns radius 16) | white on the `#e9ebf1` hairline ground |
| branch card | `p-6` (24), radius **16**, 1 px border, `flex flex-col` | white on `#f5f6f9`; border `ink-100` |
| testimonial card | `p-8` (32), radius **16**, `shadow-soft` | white on `#f9fafb` |
| testimonial avatar | **48 × 48** disc, 18/28 600 | `bg-primary-100`, `text-primary-600` |
| carousel arrow | 36 × 36 disc, `p-2`, radius full, `shadow-lg`, 20 px chevron | white / `#4b5563` chevron |
| radii tokens | `--radius-lg` 8 · `--radius-xl` 12 · `--radius-2xl` **16** · full | |
| shadow token | `shadow-soft` = **`0 4px 16px -4px #0000001a`** | only the testimonial cards |

Layout constants: container **`max-width: 1280 px` with 32 px side padding** (`px-4 lg:px-8`) → **1,216 px
of content** at 1440. `.section` = `py-20` (80) then `lg:py-28` (**112**). Header inner is 80 px tall
(`h-16 lg:h-20` → 64/80). Breakpoints in use: `sm 640`, `md 768`, `lg 1024`, **`xl 1280` (desktop nav)**.

## Reference document order

```
#preloader (fixed white overlay, spinner)
<a href="#main-content"> skip link
<header data-header>            ← sticky, 81 px, translucent, border-b
  container: logo | <nav> 6 labels (xl only) | phone pill (md+) | dark toggle | CTA (xl+) | hamburger (xl:hidden)
  [data-mobile-menu]            ← hidden panel, 6 labels + phone + CTA
<main id="main-content">
  section (hero, bg-primary-600)  split 6/6: eyebrow, h1, lead, rating, ZIP finder | 4:3 photograph
  section#guarantees            ← white, py-12, border-b, <dl> of 3
  section#services              ← white, py-28, 6-cell hairline grid
  section#locations             ← ink-50, py-28, 3 branch cards
  section (counters)            ← gray-50, py-16 lg:py-20, border-y, 4 figures
  section#process               ← white, py-28, <ol> of 3
  section#testimonials          ← gray-50, py-28, centred head + carousel of 3
  section#contact               ← primary-700, py-20 lg:py-28, centred CTA pair
</main>
<footer>                        ← gray-900, pt-24, 12-col grid + bottom bar
#cookie-consent (fixed, translated 100 % down until 1.5 s)
#back-to-top (fixed disc, opacity 0 until 300 px)
```

## Band-by-band content (the reference's real copy — reproduce order, paraphrase lightly)

### 0 — Header (81 px)

Logo (`logo.svg`, `h-8 lg:h-9`), then the desktop nav — **six** labels: **Services · Locations ·
Guarantees · Careers · About · Contact** — then the phone pill **"(555) 010-0180"** with a phone glyph,
a moon/sun **dark toggle**, the **"Find your branch"** solid CTA (≥1280 only) and a hamburger
(<1280). The mobile panel repeats the six labels plus the phone and the CTA.

The markup carries a long authored comment explaining why the nav switches at **xl (1280)** rather than
`lg`: *"Tailwind's lg is 1024px and a trade header carries a six or seven item nav plus a phone pill, a
theme toggle and a CTA. That does not fit until about 1280."* A second comment claims a **city pill at
`2xl`** — **no city pill exists in the rendered DOM** (the measured header holds logo, nav, phone pill,
toggle, CTA, hamburger only). Do not invent one.

### 1 — Hero (665 px, `#1d4ed8`) — the design's entire thesis

Two 6-column halves, `gap-14` (56), `items-center`, 80 px of top/bottom padding.

Left column (`580 px` wide): eyebrow **"Twelve cities · One guarantee"** (14/20 600 uppercase,
`#dfe6fe`) → `h1` **"Local plumbers. National guarantee."** (60/66 700, white, −1.5 px) → lead
**"Every Metroflow branch is staffed by plumbers who live in the area and licensed in their own state.
What they share is the guarantee, the pricing and the training."** (18/28, `#eef2ff`, `max-w-lg`) →
rating row: **five amber stars, "4.8", "12,000+ reviews on Google · sample data"** → finder block:

* label **"Find your local branch"** (14/20 600, `white / 80`)
* `<form data-finder-form>`: input (`name="postcode"`, `required`, placeholder **"Enter your ZIP code"**,
  `autocomplete="postal-code"`) + submit button **"Find my branch"**
* hidden message **"We are not in that ZIP yet. Here is every branch we do have."** (`white / 70`)
* the form's `data-config` JSON is the whole routing table:
  `{"locations":[{"slug":"riverside","name":"Riverside","postcodes":["925","928"]},`
  `{"slug":"westbridge","name":"Westbridge","postcodes":["430","432"]},`
  `{"slug":"harbor-point","name":"Harbor Point","postcodes":["041","040"]}],`
  `"basePath":"/locations/","fallbackUrl":"/locations"}`

Right column: the **only content photograph**, 580 × 435 (4:3, `w=1200&h=900` Unsplash crop), radius 16,
`object-fit: cover`.

### 2 — `#guarantees` (341 px, white, `border-b`, `py-12`) — the quiet band

Eyebrow **"The promise"** (`primary-600`, 600) → `h2` **"The same three things at every branch"**
(**30 px**) → a `<dl class="grid sm:grid-cols-3 gap-8">` of three pairs. Each `<dt>` is an **inline
check-circle icon (20 px, `primary-600`, `mt-0.5`) + a 16/24 700 title**, each `<dd>` is
**`mt-2 pl-8`** (indented under the title, not the icon) 16/24 in `ink-500`:

1. **On time, or the repair is free** — *"We give you a two-hour window. If we miss it and have not rung you
   to say so, the labour on that visit costs nothing."*
2. **The quote does not move** — *"Flat-rate pricing agreed before work starts. If the job takes longer than
   we estimated, that is our problem rather than your invoice."*
3. **Two years on our labour** — *"The same warranty at every branch, honoured at any branch, whether or not
   the plumber who did the work still works for us."*

Closing note (14/20 `ink-400`, `mt-6`): **"Sample guarantees for template demonstration. Replace with your
own terms before launch."**

### 3 — `#services` (855 px, white) — the hairline grid, not cards

`max-w-2xl` head: eyebrow **"What we do"** → `h2` **"The same services, city to city"** (36) → lede
*"Residential plumbing, priced from a national rate card so a repair costs the same in Harbor Point as it
does in Riverside."*

Then — and this is the band's signature — a **single 6-cell grid rendered as one bordered table**:
`grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100` with each cell
`bg-white p-6 lg:p-8`. The 1 px gaps *are* the rules; there are no individual card borders and no radius
per cell (radius 16 on the wrapper only). 3 columns at `lg`, 2 at `sm`, 1 below. Measured wrapper
**1,216 × 395**, each cell **404 × 184** at 1440.

| title | price line | blurb |
| ----- | ---------- | ----- |
| Emergency repairs | From $149 call-out | Burst pipes, failed shut-offs and anything actively leaking, 24 hours at every branch. |
| Drain clearing | From $189 | Kitchen, bath and main lines, with a camera inspection included as standard. |
| Water heaters | From $1,200 installed | Repair, replacement and tankless conversions, old unit hauled away. |
| Toilets and faucets | From $129 | The small jobs, booked as their own appointment rather than squeezed between two big ones. |
| Sewer lines | Quoted after inspection | Camera survey, jetting, spot repairs and trenchless replacement where the yard allows it. |
| Re-pipes | Quoted on site | Whole-house re-pipes in PEX or copper, with a ten-year warranty on the pipework. |

Every price line is 14/20 **700** in `primary-700`, `mt-4`, and the blurb is `flex-1` so price lines align
across a row. Closing note (14/20 `ink-400`): *"Sample prices for demonstration. Replace with your own
before launch."*

### 4 — `#locations` (674 px, `#f5f6f9`) — branch cards, three of twelve

Eyebrow **"Branches"** → `h2` **"Where we are"** → lede *"Three of our twelve branches are shown here as
samples. Each has its own phone number, its own state licence and its own team."*

Three cards (`389 × 266` at 1440, `p-6`, radius 16, 1 px `ink-100`, white on the tint, `flex flex-col`),
each: **branch name (18/28 700)** → region (14/20 `ink-400`) → **phone (18/28 700 `primary-700`, `tel:`)** →
**licence line (12/16 600 uppercase +0.3 px `ink-400`)** → towns (16/24 `ink-500`, `mt-4 flex-1`) →
**"See this branch"** (14/20 700 `primary-700`, `mt-5`).

| branch | region | phone | licence | towns |
| ------ | ------ | ----- | ------- | ----- |
| Riverside | Riverside County, CA | (555) 010-0191 | CA Licence #000191 | Riverside · Corona · Moreno Valley · Jurupa Valley |
| Westbridge | Greater Westbridge, OH | (555) 010-0192 | OH Licence #000192 | Westbridge · Gahanna · Reynoldsburg · New Albany |
| Harbor Point | Coastal Maine | (555) 010-0193 | ME Licence #000193 | Harbor Point · Cape Elizabeth · Falmouth · Yarmouth |

The branch *pages* spell the same three cards' details differently (region names differ: "Riverside County,
California", "Greater Westbridge, Ohio", "Harbor Point and the coast, Maine"; the towns lists differ for
Westbridge — see §Inner-page inventory). The **index** copy is the authority for the index.

### 5 — Counter band (238 px, `#f9fafb`, `border-y`, `py-16 lg:py-20`)

`grid grid-cols-2 sm:grid-cols-4 gap-8`. Each cell is centred: **48/48 700 `primary-600` figure** +
**14/20 500 `#4b5563` label**, 8 px apart.

| `data-counter` | label |
| -------------- | ----- |
| `12` | Cities |
| `140` | Employed plumbers |
| `2 hr` | Arrival window |
| `2011` | Founded |

**The markup ships the literal `0` inside every `[data-counter]`** — that is the animation seed, never the
design value. With no `IntersectionObserver` (jsdom) or under reduced motion, render the final value.

### 6 — `#process` (564 px, white) — three numbered steps, not cards

Eyebrow **"How it works"** → `h2` **"Booked nationally, done locally"** → lede *"The number you ring is the
branch, not a call centre in another state."*

`<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">`; each `<li>` opens with a **number + rule row**:
`flex items-baseline gap-3` containing **"01"** (14/20 **700**, `tabular-nums`, `primary-600`) and a
**1 px `flex-1` `ink-100` horizontal rule**; then `h3` (18/28 700, `mt-4`), a blurb (16/24 `ink-500`,
`mt-2`) and a **14/20 600 `primary-700` tag** (`mt-3`).

1. **Find your branch** / *"Enter your ZIP and you get the local number, the local licence and the local
   team rather than a routing menu."* / tag **Ten seconds**
2. **Book a two-hour window** / *"Online or on the phone. You get a text when the plumber is on the way,
   with their name and photograph."* / tag **On time or free**
3. **Flat-rate, warrantied work** / *"Price agreed before work starts, two years on our labour, honoured at
   any branch in the network."* / tag **Two-year warranty**

### 7 — `#testimonials` (768 px, `#f9fafb`) — a carousel of three

Centred head (`max-w-3xl`): **"Reviews" pill** (`bg-primary-100`, `text-primary-700`, 14/20 500,
`px-3 py-1`, radius full) → `h2` **"From three different states"** → *"Sample reviews for demonstration.
Replace with your own."* (18/28 `gray-600`).

`[data-carousel]` → `overflow-hidden` → `[data-carousel-track] flex transition-transform duration-500`
with **three slides** `flex-shrink-0 px-3`, each holding a card (`p-8`, radius 16, white, `shadow-soft`):
**five 20 px `primary-400` stars** (`mb-6`) → `<blockquote>` 18/28 **500** `gray-900` → footer row `mt-6`
with a **48 px `primary-100` initial disc** (18/28 600 `primary-600`) + **name (16/24 600)** and
**city/state (14/20 `gray-600`)**.

| initial | name | place | quote |
| ------- | ---- | ----- | ----- |
| P | Priscilla D. | Riverside, CA | *"Used them in Ohio for years, then moved to California and found there was a branch here too. Same booking system, same standard, same warranty."* |
| W | Warren I. | Westbridge, OH | *"The two-hour window is real. They rang at the start of it to say the plumber was twenty minutes out, which no other trade has ever done for me."* |
| M | Marina C. | Harbor Point, ME | *"Small coastal branch and they clearly know the local housing stock. Told me exactly which pipe run would freeze before it did."* |

Carousel geometry (JS-authored, measured): **3 per view ≥1024, 2 at 640–1023, 1 below**; slide width =
`track.parentElement.offsetWidth / perView` (**405** at 1440, **358** at 390); `translateX(-index × width)`;
**autoplay every 5,000 ms**, reset by any arrow/dot click, **paused on `mouseenter`** of the wrapper and
resumed on `mouseleave`; arrows are `absolute -left-4 / -right-4 top-1/2` white 36 px discs that are
displayed **only while `maxIndex > 0`** (so: hidden at 1440 where all three fit, visible at 390); dots are
**injected** into the empty `[data-carousel-dots]` container — one per position, **none when only one
position exists** (desktop has **no dots**), active dot `w-8 bg-primary-600`, rest `w-2.5 bg-gray-300`,
`h-2.5 rounded-full`.

### 8 — `#contact` (440 px, `#183fae`)

Centred `max-w-3xl`: `h2` **"Find the branch nearest you"** (36/40 white, −0.9) → 18/28 `primary-100`
lede *"Enter a ZIP code and you will get a local number, a local licence and a local team."* →
`mt-10` row of two buttons: **"Find your branch"** (white ground, `#183fae` label, radius 8, `px-8 py-4`,
chevron icon) and **"Call the national line"** (2 px `white / 40` outline, white label, `tel:5550100180`).
No form here — the ZIP finder lives in the hero only.

### 9 — Footer (544 px, `#111827`, `pt-16 lg:pt-24`)

12-column grid, `gap-12 lg:gap-8`:

* **brand (4 cols)** — `logo-light.svg` (211 × 40), *"Plumbing with local teams in twelve cities and one
  guarantee. On time, or the repair is free."* (`gray-400`, `max-w-xs`), **three social chips**
  (`rounded-lg bg-gray-800 p-2.5`, 20 px glyphs, **`href="#"`** — the page's only three dead anchors),
  then address `500 Commerce Parkway, Columbus, OH 43215`, `tel:(555) 010-0180` (note the **malformed tel
  with spaces and parentheses**, authored that way) and `mailto:hello@metroflow.example`.
* **link columns (5 cols, `sm:grid-cols-3`)** — **Services** (Emergency repairs · Drain clearing · Water
  heaters · Sewer lines), **Company** (Find your branch · Our guarantees · Careers · About), **Support**
  (Contact · Privacy · Terms).
* **license blurb (3 cols)** — head **"Locally licensed"**, *"Every branch is locally staffed and locally
  licensed. Licence numbers are listed on each location page."*, then a `primary-600` **"Find your branch"**
  button.
* **bottom bar** — `mt-16 border-t border-gray-800 py-8`, `© 2026 Metroflow. All rights reserved.` (14/20
  `gray-500`) and Privacy Policy / Terms of Service (14/20 `gray-500` → hover `gray-300`). The recreation
  replaces the wordmark/copyright's brand name with its own and adds the **Component Dock** link required
  by AGENTS.md rule 5.

### 10 — Fixed chrome

* `#preloader` — fixed white (dark `gray-950`) overlay, z-100, a 40 px `border-4` spinner ring
  (`border-gray-200` + `border-t-primary-600`), removed by an **inline end-of-body `load` handler** with a
  300 ms opacity fade (the bundle does not touch it).
* `#cookie-consent` — fixed bottom bar, white, `border-t gray-200`, `py-4 sm:py-6`, `shadow-lg`, starts at
  `transform: translateY(100%)`, **slides up 1,500 ms after load**, two buttons **Decline** /
  **Accept All**, writes `localStorage['cookie-consent'] = 'essential' | 'accepted'`, then removes itself
  after a 300 ms transition. Measured 147 px tall at 390.
* `#back-to-top` — 48 px `primary-600` disc, `bottom-6 right-6`, `shadow-lg shadow-primary-600/25`,
  `opacity 0 / pointer-events none` until `scrollY > 300`, then fades/slides in; smooth scroll to top.

## Behaviour the recreation must reproduce

Read end-to-end from `Base…BLoalVWc.js` (16,233 B) plus the four inline scripts. **Nine behaviours are
live on this page**; four other handlers in the shared kit (video modal, FAQ accordion, pricing toggle,
blog filter, lightbox) exist in the bundle but have **no matching markup here** — do not build them.

1. **ZIP finder** (inline script). On submit: uppercase the value, strip whitespace, then find the first
   location whose `postcodes` contains a prefix the value `startsWith`; on a match navigate to
   `basePath + slug + '/'`; on a miss **un-hide the message** and `window.location.href = fallbackUrl`
   after **1,200 ms**. Re-wire on `astro:page-load` (SPA: plain mount is enough).
2. **Header shadow** — `scrollY > 50` adds `shadow-lg` to `[data-header]`, removes it below.
3. **Reveal on scroll** — every `[data-animate]` element whose `top > innerHeight × 0.8` at load gets
   inline `opacity 0`, `translateY(20px)`, `transition opacity .6s ease-out, transform .6s ease-out`,
   `transition-delay = data-delay ms`; an `IntersectionObserver` (`threshold .1`,
   `rootMargin 0 0 -10%`) restores it and unobserves. **Bails out entirely** when
   `prefers-reduced-motion: reduce`. Elements above 80 % of the fold are never hidden.
4. **Counters** — `IntersectionObserver` at `threshold .5`; 2,000 ms **ease-out cubic**
   (`1 − (1−p)³`) from 0 to `data-counter`; parses `$`, `%`, `K`, `M`, `+`, decimals; unobserves after
   firing.
5. **Testimonial carousel** — per-view 3/2/1, injected dots, arrows shown only when `maxIndex > 0`,
   5 s autoplay, hover pause, `translateX(-index × width)` with `transition-transform .5s`.
6. **Mobile menu** — `[data-mobile-toggle]` toggles `.hidden` on `[data-mobile-menu]`, flips
   `aria-expanded`, and swaps the hamburger path for an X (and back). No scroll lock is applied.
7. **Dark toggle** — flips `.dark` on `<html>`, persists `localStorage.theme`; the **pre-paint inline
   script** applies `localStorage.theme` else `prefers-color-scheme` before first paint.
8. **Cookie consent** — 1,500 ms delayed show, two storage values, self-removal.
9. **Back to top** — `scrollY > 300` visibility, smooth scroll.

Dead hooks (present in markup or bundle, **no effect here**): `[data-nav-link]` scrollspy resolves
`getElementById('/services')` etc. and silently no-ops (all values are route paths, not element ids);
`data-phone` is a styling hook only; the "city pill at 2xl" comment has no matching markup.

## Data-attribute inventory (measured on the live index)

| hook | count | wired? |
| ---- | ----- | ------ |
| `data-location-finder` | 1 | yes (inline finder script) |
| `data-finder-form` / `data-finder-message` / `data-config` | 1 / 1 / 1 | yes |
| `data-header` | 1 | yes (shadow) |
| `data-nav-link` | 6 | **no** (path values, `getElementById` → null) |
| `data-phone` | 4 | styling only |
| `data-dark-toggle` | 1 | yes |
| `data-mobile-toggle` / `data-mobile-menu` | 1 / 1 | yes |
| `data-animate` (+ `data-delay` 0/100/200/300) | 8 | yes |
| `data-counter` | 4 | yes |
| `data-carousel` / `-track` / `-slide` / `-prev` / `-next` / `-dots` | 1 / 1 / 3 / 1 / 1 / 1 | yes (dots injected) |
| `data-cookie-accept` / `data-cookie-decline` | 1 / 1 | yes |
| `data-validate`, `data-video-modal`, `data-lightbox`, `data-faq-*`, `data-blog-filters`, `data-parallax`, `data-typewriter` | 0 on this page | bundle-only, **do not build** |

## Anchor map (all 49 `a[href]`)

* **1** skip link → `#main-content`
* **37** internal paths — 6 nav (`/services`, `/locations`, `/guarantees`, `/careers`, `/about`,
  `/contact`), the wordmark and two footer repeats of `/`, one in-page `/#locations` (header CTA), three
  `See this branch` branch URLs ×2 each, footer service/company/support links, two legal links
* **7** `tel:` — national line ×3, three branch numbers, plus the malformed
  `tel:(555) 010-0180` in the footer contact block
* **1** `mailto:hello@metroflow.example`
* **3 dead `#`** — the Twitter, Instagram and LinkedIn chips

**Single-page delta:** the reference's 37 internal paths collapse to in-page anchors
(`#services`, `#locations`, `#guarantees`, `#process`, `#testimonials`, `#contact`) in the recreation;
the three branch links become `#locations` (or per-card focus targets). Keep **zero** bare `#` in the
recreation — give the social chips `aria-disabled` + a real destination or drop them.

## Inner-page inventory (11 routes, all HTTP 200 with trailing slash, 2026-10-25)

| route | bytes | what it holds (authoritative reference for the sections a one-pager must compress) |
| ----- | ----- | --- |
| `services/` | 34,996 | six services expanded into bullet lists (3 checks each: *"Isolation and make-safe on arrival"*, *"Camera inspection included"*, *"Ten-year warranty on the pipework"*), plus a "Not sure which of those you need?" CTA pair |
| `locations/` | 30,290 | the same ZIP finder with message *"We don't have a branch there yet — see every location."*, the three cards (Harbor Point first, alphabetical), and a "Cannot see your city?" close |
| `guarantees/` | 37,424 | three promise cards with quantified badges (**2 hr arrival window**, **$0 variation**, **24 months**) plus a **four-row FAQ** of exclusions ("Does the on-time promise apply to emergencies?" → *"No, and it could not honestly."*) |
| `careers/` | 27,361 | "We employ plumbers. We do not subcontract them.", six sample listings (Riverside — 2 plumbers, …), three benefit blocks, Apply CTA |
| `about/` | 30,808 | founded Westbridge 2011, 12 branches / 140 plumbers, three commitments, four sample leadership profiles |
| `contact/` | 29,567 | `data-validate` form (Full Name, Email, Subject, Message), national line, head office, hours |
| `privacy/` / `terms/` | 31,692 / 30,441 | legal boilerplate |
| `locations/riverside/` | 34,958 | licence `#000191`, manager **Denise Okafor**, address **2140 Mission Inn Avenue, Riverside, CA 92507**, hours Mon–Fri 07:00–19:00 / Sat 08:00–16:00 / emergency 24 h, two reviews, three-field booking form (name, phone, `<select>` of six job types), nine towns |
| `locations/westbridge/` | 34,605 | licence `#000192`, manager **Curtis Nwachukwu**, **88 Foundry Street, Westbridge, OH 43004**, Mon–Fri 07:00–18:00 / Sat 08:00–14:00, nine plumbers, "our founding branch, open since 2011" |
| `locations/harbor-point/` | 34,630 | licence `#000193`, manager **Marguerite Ellis**, **12 Wharf Road, Harbor Point, ME 04101**, Mon–Fri 07:00–17:00 / Sat 08:00–13:00, six plumbers, seven towns |

The branches' **postcode prefixes** (the finder's data) are `925/928` → Riverside, `430/432` → Westbridge,
`041/040` → Harbor Point. Those prefixes are **three digits**, so the finder matches on `startsWith`, not
on equality — a five-digit ZIP works, a two-digit one does not.

**Single-page delta:** the recreation ships the index only. Fold none of the inner-page copy into the
index except where this spec already quotes it; do not invent a pricing table, a blog or an FAQ band that
the index does not have.

## Class census

**284 unique classes** in the rendered markup, **all 284 resolvable** in `Base.B-6WuWQn.css`. A naive
census flags **17** as missing: every one is a **slash-opacity utility** (`bg-white/90`, `text-white/90`,
`text-white/80`, `border-white/20`, `bg-white/10`, `placeholder:text-white/50`, `focus:ring-white/30`,
`text-white/70`, `aspect-[4/3]`, `dark:bg-primary-900/50`, `top-1/2`, `-translate-y-1/2`,
`border-white/40`, `hover:bg-white/10`, `shadow-primary-600/25`, `hover:shadow-primary-600/30`,
`dark:bg-gray-950/90`) whose rules exist in escaped form (`.bg-white\/90{background-color:#ffffffe6}`).
**Zero phantom classes.** "Anything you cannot map to those 284 is invented."

## Screenshot analysis (`metroflow-template.jpg`)

`https://colorlib.com/wp/wp-content/uploads/sites/2/metroflow-template.jpg` → **HTTP 200, 200,554 B,
`image/avif`** despite the `.jpg` name (PIL reports **2400 × 1892**, RGB). `vision_analyze` rejects the raw
file — convert first (`Image.open(...).convert('RGB').save('shot.png')`).

Composition: a **macOS window mock-up on a pale `#f2f2f2` ground** (traffic lights, URL bar), i.e. a
marketing render, **not** a browser capture. Inside the window: the white sticky header (blue square
logo, six labels, outlined phone pill, blue "Find your branch"), then the **solid `#1d4ed8` split hero** —
left: eyebrow, 60 px two-line white headline *"Local plumbers. / National guarantee."*, three-line
paragraph, the amber-star rating row, the "Find your local branch" label and the two-part finder field;
right: the site photograph with **16 px rounded corners** — then the white promise strip with its three
check-icon columns, then the top of the services band (eyebrow + 36 px head + lede). The frame is cut
before the grid.

Two things the mock-up **cannot** tell you, and the live render does: the branch band's `#f5f6f9` tint is
*not* the same as the counter band's `#f9fafb`, and the hero photograph in the mock-up is a **rebar/
construction site** (same Unsplash frame as the live page — a crew in orange among steel), not a domestic
plumbing scene. Do not "improve" it to a stock bathroom tap.

## Requirements

### Requirement 1: Page chrome (skip link, preloader, cookie strip, back-to-top, header shadow)

The app SHALL render a hidden-until-focused skip link to `<main id="main-content">`, a fixed white
preloader removed within 300 ms of load, a cookie strip that slides up 1.5 s after load and persists its
choice, a 48 px back-to-top disc past 300 px of scroll, and a header that gains `shadow-lg` past 50 px.

#### Scenario: Skip link and landmarks

- **GIVEN** the page has loaded
- **WHEN** the visitor presses Tab once
- **THEN** focus lands on a "Skip to content" control that is hidden until focused
- **AND** activating it moves focus to `<main id="main-content">`
- **AND** the document has exactly one `<header>`, one `<main>` and one `<footer>`

#### Scenario: Preloader is not a blocker

- **GIVEN** the document is loading
- **WHEN** `window.load` fires (or the document is already complete)
- **THEN** the fixed overlay with the 40 px `primary-600`-topped spinner fades over 300 ms and leaves the DOM
- **AND** no interactive element is unreachable while it is present

#### Scenario: Cookie strip lifecycle

- **GIVEN** `localStorage` has no `cookie-consent` key
- **WHEN** the page has been open for 1.5 s
- **THEN** a white strip pinned to the bottom slides up with exactly two buttons, "Decline" and "Accept All"
- **AND** "Accept All" writes `localStorage['cookie-consent'] = 'accepted'` and "Decline" writes `'essential'`
- **AND** either choice removes the strip, and a reload with the key set never shows it

#### Scenario: Header shadow and back to top

- **GIVEN** a 900 px tall viewport
- **WHEN** the visitor scrolls past 50 px
- **THEN** the header carries `shadow-lg` and drops it again at the top
- **AND** the 48 px `primary-600` disc at `bottom-6 right-6` is invisible until `scrollY > 300`
- **AND** clicking it scrolls smoothly to `top: 0`

### Requirement 2: Sticky header with six labels, phone pill, dark toggle and mobile disclosure

The app SHALL render a sticky 81 px translucent header with the wordmark, six desktop labels, a phone pill,
a dark-mode toggle and a "Find your branch" CTA, collapsing to a hamburger below **1,280 px**.

#### Scenario: Desktop header at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the page has loaded
- **THEN** the header is **81 px** tall (80 px content + 1 px border), `position: sticky`, top 0
- **AND** its background is **`rgb(255 255 255 / .9)`** with `backdrop-filter: blur(16px)` and a 1 px
  `#e9ebf1` bottom border
- **AND** the logo renders **36 px** tall
- **AND** the nav shows exactly six labels in this order: Services, Locations, Guarantees, Careers, About,
  Contact, each **14/20 600** in `#2f374a`
- **AND** the phone pill reads "(555) 010-0180", is **full-radius**, 1 px `#cfd4e0`, 14/20 600
- **AND** the CTA is radius 8, `#1d4ed8`, 14/20 700, 10 px / 20 px padding

#### Scenario: The nav collapses below 1280 px

- **GIVEN** a 1279 px viewport
- **WHEN** the page has loaded
- **THEN** the six labels, the phone pill and the CTA are not rendered as a row
- **AND** a hamburger button with `aria-expanded="false"` is present
- **AND** pressing it reveals a panel containing the same six labels plus the phone and the CTA, sets
  `aria-expanded="true"`, and swaps the glyph to an X

#### Scenario: Dark toggle persists

- **GIVEN** the OS prefers light and `localStorage` is empty
- **WHEN** the visitor presses the moon button
- **THEN** `.dark` is added to `<html>`, `localStorage['theme'] = 'dark'`
- **AND** `body` becomes `#030712` with `#f3f4f6` text, the tinted bands become `#111827`, and the hero and
  contact bands stay `#1d4ed8` / `#183fae`
- **AND** a reload with `theme=dark` paints dark **before** first paint (no white flash)

### Requirement 3: Hero — split 6/6 on brand blue with the ZIP finder

The app SHALL render a `#1d4ed8` hero with a six-column text half and a six-column 4:3 photograph, an
eyebrow, a 60 px white headline, a lead paragraph, a five-star rating row and a working ZIP finder.

#### Scenario: Hero composition at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the hero is measured
- **THEN** the band is **665 px** tall, ground `#1d4ed8`, content width **1,216 px**
- **AND** the grid is 12 columns with a **56 px** gap, 6/6 split, `items-center`
- **AND** the `h1` is **60 / 66**, weight 700, `-1.5 px` tracking, white, and reads on two lines
- **AND** the eyebrow is 14/20 600 uppercase `#dfe6fe` and reads "Twelve cities · One guarantee"
- **AND** the lead is 18/28 `#eef2ff`, `max-w-lg`
- **AND** the rating row holds **five `#fbbf24` stars**, the value **4.8**, and the muted note
  "12,000+ reviews on Google · sample data"
- **AND** the photograph is **580 × 435**, radius **16**, `object-fit: cover`

#### Scenario: ZIP finder routes a match

- **GIVEN** the finder form with `name="postcode"` and the config of three branches
- **WHEN** the visitor submits `92507`
- **THEN** the location whose prefixes include `925` (`Riverside`) is selected
- **AND** the app scrolls to `#locations` and marks the Riverside card as the current branch
- **AND** no network request is made

#### Scenario: ZIP finder handles a miss

- **GIVEN** the same form
- **WHEN** the visitor submits `10001`
- **THEN** the message "We are not in that ZIP yet. Here is every branch we do have." becomes visible
- **AND** after 1,200 ms the page navigates to the locations section
- **AND** an empty submission does nothing (the input is `required`)

#### Scenario: Finder field styling

- **GIVEN** the hero at 1440
- **THEN** the input is **54 px** tall, radius **8**, `background: white / 10`, 1 px `white / 20` border,
  white text, placeholder `white / 50`
- **AND** the submit button is **54 px** tall, radius **8**, white ground, label `#183fae` 16/24 700
- **AND** focus on the input shows a white border plus a 2 px `white / 30` ring

### Requirement 4: `#guarantees` — the quiet three-promise strip

The app SHALL render a white `py-12` strip with a 30 px head and a `<dl>` of three icon + title + blurb
pairs, closed by a sample-data note.

#### Scenario: Promise strip geometry

- **GIVEN** a 1440 px viewport
- **WHEN** the band is measured
- **THEN** it is **341 px** tall, `background: #ffffff`, `border-bottom: 1px #e9ebf1`, padding **48 px**
- **AND** the eyebrow "The promise" computes **14/20 600 `#1d4ed8`**
- **AND** the `h2` computes **30 / 36, tracking normal** — visibly smaller and less tight than every other
  band head
- **AND** the list is a `<dl>` in three columns with a **32 px** gap

#### Scenario: Each pair indents under the title, not the icon

- **GIVEN** one promise entry
- **THEN** the `<dt>` starts with a **20 px** check-circle icon in `#1d4ed8` and a 16/24 700 title
- **AND** the `<dd>` is 16/24 in `#4a5369`, offset **`mt-2 pl-8`** (32 px, clearing the icon)
- **AND** the note "Sample guarantees for template demonstration. Replace with your own terms before
  launch." renders 14/20 in `#6b7590`

### Requirement 5: `#services` — one hairline grid, six cells, no cards

The app SHALL render six services as a single bordered grid whose **1 px gaps are the rules**, with a
title, blurb and price line per cell.

#### Scenario: Grid construction at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the grid is measured
- **THEN** the wrapper is **1,216 × 395**, radius **16**, 1 px `#e9ebf1` border, ground `#e9ebf1`
- **AND** the column gap and row gap are both **1 px**
- **AND** there are three columns of **404 px** at `lg`, two at `sm`, one below
- **AND** each cell is white with **32 px** padding and no border and no radius of its own

#### Scenario: Cell content and price alignment

- **GIVEN** any service cell
- **THEN** the `h3` is 18/28 700 in `#0b1220`, the blurb is 16/24 in `#4a5369` and the price line is
  14/20 700 in `#183fae`
- **AND** the blurb is the flex-growing element, so the six price lines sit on a common baseline per row
- **AND** the six titles are exactly: Emergency repairs, Drain clearing, Water heaters, Toilets and
  faucets, Sewer lines, Re-pipes
- **AND** the band closes with "Sample prices for demonstration. Replace with your own before launch."

### Requirement 6: `#locations` — three branch cards on the tinted band

The app SHALL render the three sample branches as cards on `#f5f6f9`, each carrying its own region, phone,
state licence and towns.

#### Scenario: Branch band at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the band is measured
- **THEN** it is **674 px** tall on `background: #f5f6f9`, padding **112 px**, with three cards of
  **389 × 266** in a 3-column grid with a **24 px** gap
- **AND** each card is white, radius **16**, 1 px `#e9ebf1`, padding **24 px**
- **AND** the card order is Riverside, Westbridge, Harbor Point
- **AND** the phone is a `tel:` link at 18/28 700 in `#183fae`
- **AND** the licence line is 12/16 600 uppercase, **+0.3 px** tracking, in `#6b7590`
- **AND** "See this branch" is 14/20 700 in `#183fae`

#### Scenario: Cards hold their own facts

- **GIVEN** the Riverside card
- **THEN** region "Riverside County, CA", phone "(555) 010-0191", "CA Licence #000191", towns
  "Riverside · Corona · Moreno Valley · Jurupa Valley"
- **AND** Westbridge reads "Greater Westbridge, OH", "(555) 010-0192", "OH Licence #000192",
  "Westbridge · Gahanna · Reynoldsburg · New Albany"
- **AND** Harbor Point reads "Coastal Maine", "(555) 010-0193", "ME Licence #000193",
  "Harbor Point · Cape Elizabeth · Falmouth · Yarmouth"

### Requirement 7: Counter band — four figures that count once

The app SHALL render four centred figures on `#f9fafb` between two 1 px `#e5e7eb` rules, each counting
from zero over 2,000 ms the first time it intersects.

#### Scenario: Counters at 1440

- **GIVEN** the band has scrolled into view
- **THEN** the figures are `12`, `140`, `2 hr`, `2011` at **48/48 700 `#1d4ed8`**
- **AND** the labels are "Cities", "Employed plumbers", "Arrival window", "Founded" at 14/20 500 `#4b5563`
- **AND** the grid is 2 columns below `sm` and 4 above
- **AND** the band is **238 px** tall with **80 px** vertical padding and both horizontal rules present

#### Scenario: No observer, no animation

- **GIVEN** an environment without `IntersectionObserver` (jsdom) or a reduced-motion preference
- **WHEN** the band renders
- **THEN** the final values are shown immediately
- **AND** `0` is never left on screen as a resting state

### Requirement 8: `#process` — three numbered steps with rules

The app SHALL render three steps in an `<ol>`, each opening with a tabular number, a 1 px rule, a title, a
blurb and a short tag.

#### Scenario: Steps at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **564 px** tall on white with **112 px** padding
- **AND** the list is three columns with a **24 px** gap
- **AND** each row is `flex items-baseline gap-3` with "01"/"02"/"03" at 14/20 700 `tabular-nums`
  in `#1d4ed8` and a **1 px** `#e9ebf1` rule filling the rest
- **AND** the titles are "Find your branch", "Book a two-hour window", "Flat-rate, warrantied work"
- **AND** the tags are "Ten seconds", "On time or free", "Two-year warranty" at 14/20 600 in `#183fae`

### Requirement 9: `#testimonials` — carousel of three cards

The app SHALL render a centred head with a "Reviews" pill and a three-slide carousel that shows 3 / 2 / 1
cards per view, autoplays every 5 s, pauses on hover, and injects dots only when more than one position
exists.

#### Scenario: Desktop carousel is static

- **GIVEN** a 1440 px viewport
- **WHEN** the carousel is measured
- **THEN** three cards of **381 px** sit on a 1,216 px track with **24 px** slide gutters
- **AND** each card is white, radius **16**, padding **32 px**, `box-shadow: 0 4px 16px -4px #0000001a`
- **AND** the arrows are **not visible** and the dot container is **empty**, because `maxIndex === 0`

#### Scenario: Mobile carousel moves

- **GIVEN** a 390 px viewport
- **THEN** one card of **358 px** is visible, both 36 px arrow discs are visible, and **three** dots are
  injected
- **AND** the active dot is 32 px wide in `#1d4ed8`, the others 10 px in `#d1d5db`
- **AND** the track advances every 5 s and clicking an arrow or dot resets the timer
- **AND** hovering the carousel clears the timer until the pointer leaves

#### Scenario: Card anatomy

- **GIVEN** one testimonial card
- **THEN** five **20 px** stars in `#6b83f5` sit above a 18/28 500 quote in `#111827`
- **AND** a **48 px** `#dfe6fe` disc with a `#1d4ed8` initial, the name at 16/24 600 and the place at
  14/20 `#4b5563` sit below it
- **AND** the three samples are Priscilla D. (Riverside, CA), Warren I. (Westbridge, OH), Marina C.
  (Harbor Point, ME), in that order

### Requirement 10: `#contact` — the saturated closing band

The app SHALL render a `#183fae` band with a centred white head, one line of copy and two buttons.

#### Scenario: Contact band at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the band is **440 px** tall on `#183fae` with **112 px** vertical padding
- **AND** the content is a centred `max-w-3xl` block: `h2` 36/40 700 white with −0.9 px tracking, then a
  18/28 `#dfe6fe` line capped at `max-w-xl`
- **AND** the buttons are 16 px / 32 px padded, radius **8**: white ground with a `#183fae` label, and a
  transparent button with a **2 px** `white / 40` border and a white label
- **AND** the second button is a `tel:` link

### Requirement 11: Footer — four-column near-black with a licence blurb

The app SHALL render a `#111827` footer in a 12-column grid with a brand column, three link columns and a
"Locally licensed" column, closed by a legal bar.

#### Scenario: Footer at 1440

- **THEN** the footer is **544 px** tall with **96 px** top padding and no bottom padding before the bar
- **AND** the brand column spans 4 columns and holds the logo at **211 × 40**, a blurb capped at `max-w-xs`,
  three social chips, the address, the phone and the email
- **AND** the link columns span 5 columns and read Services (4), Company (4), Support (3)
- **AND** the fourth column spans 3 columns and holds "Locally licensed" plus a `#1d4ed8` CTA
- **AND** the bottom bar is `border-t #1f2937`, `py-8`, with the copyright at 14/20 `#6b7280` and two legal
  links
- **AND** the footer links `https://www.componentdock.com/` as "Component Dock"

#### Scenario: No dead links

- **GIVEN** the rendered footer
- **THEN** no anchor has `href="#"`; the social chips are either removed or given real destinations with
  accessible names
- **AND** every `tel:` value is a valid E.164-style string with no spaces or parentheses

### Requirement 12: Responsive, reduced-motion and single-page fidelity

The app SHALL hold its layout at every common width, honour `prefers-reduced-motion`, and present the
reference's multi-page nav as in-page anchors.

#### Scenario: No horizontal scroll

- **GIVEN** widths 320, 390, 768, 1024, 1280, 1440 and 1600 px
- **THEN** `document.documentElement.scrollWidth === clientWidth` at each
- **AND** the services grid is 1 / 2 / 3 columns at 390 / 768 / 1440 and never overflows its rounded wrapper
- **AND** the 60 px `h1` becomes 48 px at `sm` and 36 px below, with `1.1` line-height preserved

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads
- **THEN** no `[data-animate]` element is left at `opacity: 0` or translated
- **AND** counters jump to their final values, the carousel does not autoplay, and smooth scrolling is
  disabled

#### Scenario: Anchors resolve

- **GIVEN** the single-page recreation
- **THEN** the six nav labels and both finder/contact CTAs resolve to existing `id`s
  (`#services`, `#locations`, `#guarantees`, `#process`, `#testimonials`, `#contact`)
- **AND** each `id` target sits below the 81 px sticky header (`scroll-margin-top`), so no heading is hidden
  under it

## Verification checklist

- [ ] `apps/drainwise` exists, `@free-react-templates/drainwise` in `package.json`, `public/CNAME` =
      `drainwise.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string in any app file (comments
      included)
- [ ] bands in this order: hero → `#guarantees` → `#services` → `#locations` → counters → `#process` →
      `#testimonials` → `#contact` → footer
- [ ] header 81 px, `sticky`, `bg white/90` + `blur(16px)`, 1 px `#e9ebf1`; six labels 14/20 600; phone
      pill full-radius `#cfd4e0`; CTA radius 8 `#1d4ed8`; hamburger below **1280**, not 1024
- [ ] hero `#1d4ed8`, **665 px**, 12-col 6/6 split with 56 px gap; eyebrow 14/20 600 `#dfe6fe`; `h1`
      60/66 700 −1.5 px white; lead 18/28 `#eef2ff`; five `#fbbf24` stars + "4.8" + "12,000+ reviews"
- [ ] hero photo **580 × 435**, radius 16, `cover`, placeholder per replication rules (never the Unsplash
      URL)
- [ ] ZIP finder: `name="postcode"`, `required`, `autocomplete="postal-code"`, 54 px field + 54 px white
      button, three prefixes (925/928, 430/432, 041/040) matching by `startsWith`, message then 1,200 ms
      fallback to `#locations`
- [ ] `#guarantees`: white `py-12`, `border-b`, **`h2` 30/36 no tracking**, eyebrow `#1d4ed8` at 600,
      `<dl>` 3 columns, `<dd class="pl-8">`, check icons 20 px `#1d4ed8`, sample-data note
- [ ] `#services`: **one** wrapper `bg #e9ebf1`, `gap-px`, radius 16, 1 px border, six white cells
      `p-8`, three columns at `lg`; prices 14/20 700 `#183fae` aligned via `flex-1`
- [ ] `#locations`: `#f5f6f9`, three 389 × 266 cards radius 16, phone 18/28 700 `#183fae`, licence 12/16
      600 uppercase `#6b7590`, towns `flex-1`, "See this branch" 14/20 700
- [ ] counters: 2 columns below `sm`, 4 above; `48/48 700 #1d4ed8`; labels 14/20 500 `#4b5563`; 2,000 ms
      ease-out cubic; final values with no observer; markup never rests on `0`
- [ ] `#process`: `<ol>` of 3, numbers "01"–"03" `tabular-nums` + 1 px rule, titles 18/28 700, tags 14/20
      600 `#183fae`
- [ ] `#testimonials`: pill `#dfe6fe`/`#183fae`, `h2` 36/40, carousel 3/2/1 per view, 5 s autoplay with
      hover pause, arrows only when `maxIndex > 0`, dots injected (none at 1440), cards radius 16 `p-8`
      `shadow-soft`, stars `#6b83f5`, 48 px initial discs
- [ ] `#contact`: `#183fae`, 440 px, centred `max-w-3xl`, white `h2` 36/40 −0.9, two radius-8 buttons
      (white fill / 2 px `white/40` outline)
- [ ] footer `#111827`, 12-col: brand 4 (logo 211 × 40, 3 social chips, address, phone, email), link
      columns 5 (Services 4 / Company 4 / Support 3), licence column 3, bottom bar `#1f2937`
- [ ] `#preloader`, cookie strip (1.5 s, two localStorage values), back-to-top (48 px, >300 px), header
      shadow (>50 px) all present
- [ ] dark mode: `#030712` body, `#111827` tinted bands, `#1f2937` card borders, hero/contact unchanged,
      pre-paint resolution, persisted toggle
- [ ] reduced motion: no reveal stuck at `opacity: 0`, no carousel autoplay, counters final
- [ ] `scrollWidth === clientWidth` at 320 / 390 / 768 / 1024 / 1280 / 1440 / 1600
- [ ] zero bare `#` anchors; every in-page anchor resolves and clears the sticky header; every image has an
      `alt`
- [ ] 100% coverage on the new app, `scripts/verify-app.sh drainwise` green
