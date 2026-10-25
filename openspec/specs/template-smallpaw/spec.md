# Template: Smallpaw (Business — veterinary practice that publishes its fees and names who covers the night)

## Purpose

A one-page site for a **small animal veterinary practice whose product is disclosure**: the fee guide is on
the page instead of behind a phone call, and the out-of-hours arrangement is stated above the fold rather
than discovered during an emergency. Every band is a different answer to one suspicion — *the vet will not
tell you what it costs until after the work*:

- **hero** — the claim in the headline (*Your vet should tell you / **what it will cost***, the second line
  cycling through three phrases), one lede, two CTAs, four facts, one photograph;
- **`#out-of-hours`** — a deep plum band that **says plainly that the practice does not staff its own
  overnight service**, names the emergency provider, its address and distance, and prints a three-cell
  opening-hours table plus a large amber phone button;
- **stats strip** — four animated counters (4,100 pets / 16 years / 5 vets / 100% of fees published);
- **`#species`** — six species cards, four included and **two deliberately greyed and badged *Referred on***,
  because "we will not attempt work we are not equipped for" is the same honesty argument carried into scope;
- **`#health-plans`** — three monthly plans with the middle one featured (plum ground, amber ring), each with
  a *Saves £N* badge, a £ price and five ticks;
- **`#fees`** — the fee guide as an eight-row table with a **Standard** column and an **On a plan** column,
  the second one showing *Included* / a discounted figure / an em dash for euthanasia;
- **`#testimonials`** — a three-slide carousel; **`#faq`** — five exclusive accordion rows, *the awkward ones*;
- **`#contact`** — a plum gradient band with a dot grid and a solid white CTA.

It is a **light-first design with exactly two dark grounds** — the plum out-of-hours band (`#6f284b`) and the
near-black footer (`#111827`) — and a two-hue palette: a **plum/rose ramp** (`#fdf4f8` → `#5b2440`,
brand `#a83a6f`) plus an **amber accent** (`#fdf8ed` → `#684324`, `#d4a24c`). Everything is typeset in one
face, **Plus Jakarta Sans**, on white or warm pink grounds. There is exactly **one photograph** on the page
(the hero), one paw-pad wordmark, and **no icon font at all** — every glyph is an inline SVG or an emoji.

Recreation of the ColorLib **"Fernhill"** design (https://colorlib.com/wp/template/fernhill/, live preview
https://preview.colorlib.com/theme/fernhill/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `fernhill`
* **ColorLib page:** https://colorlib.com/wp/template/fernhill/ — HTTP 200, 111,147 B, `<title>`
  **"Fernhill - Veterinary Website Template 2026 - Colorlib"**; its `<meta name="description">` sells the same
  two-state idea (*"A vet site is read in two states: routine planning, and an emergency at eleven at night.
  Fernhill serves both — out-of-hours cover and what to do right now sit above the fold, with wellness plans,
  pricing and the practice team below for everyone else."*)
* **Live preview:** https://preview.colorlib.com/theme/fernhill/ — HTTP 200, 75,015 B, page `<title>`
  **"Home | Fernhill"** (read 2026-10-25 with `curl -4`; this host resolves an IPv6 address that is banned, so
  every fetch needs `-4`). Astro build with Tailwind 4 output.
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**fernhill-template.jpg** — HTTP 200,
  99,152 B, served as **AVIF** despite the `.jpg`, **2400×1892**, a macOS-Safari-window-framed capture of the
  header and the whole hero. ⚠️ The `…/sites/2/fernhill.jpg` and `…/fernhill-construction.jpg` guesses **404** —
  the `-template` suffix is the one that exists.
* **New name:** `smallpaw` (apps/smallpaw, `@free-react-templates/smallpaw`) — one lowercase compound word, the
  trade the page is about (a *small animal* practice), and deliberately a **brand a clinic could own** rather
  than a description of the layout. Differs from the source slug; no `apps/smallpaw`, no
  `openspec/specs/template-smallpaw/`, no `docs/templates/smallpaw/`, `git grep -il smallpaw origin/main` prints
  **nothing**, and the three ColorLib URL forms (`wp/template/smallpaw/`, `theme/smallpaw/`,
  `theme/bootstrap/smallpaw/`) all return **404** (probed 2026-10-25). Two near neighbours were rejected on the
  substring rule and are recorded so the next auditor does not retry them: `whisker` (already prepped as
  `template-whisker`, `docs/templates/whisker/`) and `hutch` (a hit inside `template-revolve`'s spec).
* **Deploy target:** https://smallpaw.free.componentdock.com (`apps/smallpaw/public/CNAME`, `homepage` in
  `apps/smallpaw/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below. Suggested home:
  `## Business (368)` (line 879), the commercial-services section that already holds the sibling
  catalogue-gap preps of this 2026 generation (`airwise` → **Thermly**, `curbline` → **Plantroom**,
  `backstop` → **Flowcert**, `commons` → **Veranda**, `circles` → **Closeknit**, `dowser` → **Aquifer**,
  `coldsnap` → **Stoke**, `everhot` → **Kettle**).

### Why this design has no row (catalogue gap, measured 2026-10-24)

`TEMPLATES.md` is exhausted — 0 `- [ ]`, every row `[x]`, every row resolving to an app and a spec — but the
**catalogue is not complete**: all 40 pages of https://colorlib.com/wp/templates/ were crawled and compared
with the 1,631 slugs the checklist cites, and **256 designs are on the listing that the checklist never
recorded** (42 standalone + 214 snippet variants). The census, its commands, the open decision and both
buckets are recorded in `docs/catalog-coverage.md`.

`fernhill` is one of the 42 standalone designs (a row of that table: `fernhill` — preview 200, 75,015 B).
Nine of the 42 were prepped before this run — `airwise` → **Thermly** (shipped), `backstop` → **Flowcert**
(shipped), `cairn` → **Chalkline**, `circles` → **Closeknit**, `coldsnap` → **Stoke**, `commons` → **Veranda**
(shipped), `curbline` → **Plantroom** (shipped), `dowser` → **Aquifer**, `everhot` → **Kettle** — and they
established the hand-off pattern this spec follows. No spec on main names `theme/fernhill`
(`git grep -l 'wp/template/fernhill/' origin/main -- openspec/specs` → nothing) and no app named `fernhill`
exists, so this prep is not a duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR claims a row — paste this line
into `## Business` **in source-name alphabetical order** (the section is ordered by the ColorLib source name;
`Fernhill` sits between **Feliciano** and **Finances**), and bump the heading count:

```
- [x] **Fernhill** — [colorlib](https://colorlib.com/wp/template/fernhill/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/fernhill-template.jpg) · [smallpaw](https://smallpaw.free.componentdock.com)
```

⚠️ **Re-measure the count before you write it.** On `origin/main` `cb774d974` the section reads
`## Business (368)` over **368** rows — the heading is honest after Plantroom's bookkeeping commit
(`b62ea3b6d`, "Curbline shipped, README status 1650/1650"). Adding Fernhill makes **369**; if Kettle's row
(`everhot`) lands first, the honest value is **370**. Count the rows, do not copy this number.

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/fernhill/` page (DOM authority) | 75,015 | `9c99af49e1ff9f630171457236a0133464325823a015c62da251c4742a707027` |
| `theme/fernhill/_astro/Base.BVSEoPKG.css` (token authority) | 62,963 | `fb8a7a32fff16d4673006d04ed047e2211e50856c23f3780b833be9e5cedc61e` |
| `theme/fernhill/_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` (house kit) | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `theme/fernhill/_astro/ClientRouter…CYDbzu1r.js` (view-transition router) | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` |
| inline `<style>` (`@font-face` for **Plus Jakarta Sans** 300–800, 24 `woff2` files) | 7,656 | — |
| inline `<script>` 1: `applyTheme()` | 454 | — |
| inline `<script>` 2: JSON-LD `Organization` | 180 | — |
| inline `<script>` 3: preloader removal + `astro:before-swap` | 370 | — |
| `assets/img/logo.svg` (176×40 viewBox, rendered 176×40 / 160×40) | 516 | `4ada2f8cc6077bfd9da90de35d12f9d1c9cc0b21de2b87228e99b686bdb6e4fb` |
| `assets/img/logo-light.svg` | 516 | `a5e39432298e8aa0a3bfc60241dfe9e34878b439e8d4cfaa747196f2ddaf13f7` |
| `favicon.svg` (32×32, **amber `#d97706`** — not the brand plum) | 377 | `5d183df4c100257454ea9657642d6dcdbee62f744542c97b5b6c64b3075d9aa7` |
| catalog screenshot `fernhill-template.jpg` (**AVIF**, 2400×1892) | 99,152 | `6520e371f9c4334c62d1f8b6b046f83b50a9a31d7dc0ec6430c855051589a32d` |
| `colorlib.com/wp/template/fernhill/` (catalog entry) | 111,147 | — |
| `css/style.css`, `js/snippet.js`, `og-image.jpg`, `downloads/free/fernhill.zip` | — | **HTTP 404** — Astro build with no legacy sheet, so the live preview is the sole DOM/CSS reference and the OG image the header advertises does not exist |

`Base…BLoalVWc.js` and `ClientRouter…CYDbzu1r.js` are **byte-identical to the ones the Kettle (Everhot),
Aquifer (Dowser), Plantroom (Curbline), Veranda (Commons), Stoke (Coldsnap) and Closeknit (Circles) preps
measured** — one house kit renders every one of these 2026 designs. The *behaviour* inventory therefore
transfers; the markup, palette, band order and copy do not. Do not copy a sibling's tokens because the kit
hash matches: Fernhill is **plum + amber in Plus Jakarta Sans**, not Everhot's burnt orange in Manrope.

The catalog entry's meta description agrees with the live page's positioning but uses different prose. The
**live preview is the authority**; where the two disagree, the DOM wins.

## Design tokens (measured from `_astro/Base.BVSEoPKG.css`, 62,963 B, and the live render at 1440 px)

⚠️ The sheet defines **no `--color-primary-*` / `--color-accent-*` custom properties** — the palette was
supplied as a Tailwind config and compiled to literal hex values (`grep -c '\-\-color-primary'` → **0**).
The recreation must therefore *declare* the two ramps in `@theme`; the values below are read out of the
compiled rules (`bg-primary-600{background-color:#a83a6f}` and friends).

### Brand ramp — `primary` (plum / rose magenta, not a Tailwind stock ramp)

| token | hex | where the reference uses it |
| --- | --- | --- |
| `primary-50` | `#fdf4f8` | **the `#health-plans` band ground** (measured `rgb(253,244,248)`), the hero pill ground, the hero gradient's start (`from-primary-50`) |
| `primary-100` | `#fbe8f1` | every section eyebrow pill on light grounds (`bg-primary-100 text-primary-800`), the testimonial initial discs (`bg-primary-100 text-primary-600`), hairline rules inside cards (`border-primary-100`) |
| `primary-200` | `#f6d0e3` | **every species/plan/table border** (`border-primary-200`), the hero pill border, the hero's first blur blob (`primary-200/50`) |
| `primary-300` | — | **not compiled into this sheet** (only reachable as a `dark:` token in the source markup) — do not invent it |
| `primary-400` | `#df77a9` | **the five testimonial stars** (`text-primary-400`), the hero eyebrow's ping dot, the gradient's end stop (`to-primary-400`), `dark:` accents |
| `primary-500` | `#c9508a` | the hero eyebrow's solid dot, input focus border + ring (`focus:border-primary-500`) |
| `primary-600` | `#a83a6f` | **brand** — every primary button, the scroll-progress bar, the back-to-top disc, the counter numerals, the plan tick glyphs, the cookie `Accept All`, the gradient's start |
| `primary-700` | `#8a2f5b` | **the `#health-plans` eyebrow pill ground**, the fee table `thead` ground, the plan CTAs, the featured plan card ground, the breadcrumb-distance chip ground, `.btn-primary:hover` |
| `primary-800` | `#6f284b` | **the `#out-of-hours` band ground** (measured `rgb(111,40,75)`), the schedule `dl` cells, the gradient's end (`to-primary-800`) |
| `primary-900` | `#5b2440` | text on amber grounds (phone pill, `Referred on`-style labels on accent, the out-of-hours eyebrow), the wordmark text fill |

### Accent ramp — `accent` (amber; every "saving", every licence-style badge, the referral callouts)

| token | hex | where |
| --- | --- | --- |
| `accent-50` | `#fdf8ed` | **the two callout boxes** (species note, fee note — measured `rgb(253,248,237)`) with a `border-l-4 border-accent-400` |
| `accent-100` | `#f9edcf` | the `Saves £64` / `Saves £140` badges on the white plan cards (`bg-accent-100 text-accent-800`) |
| `accent-300` | `#e9be62` | **the `Saves £96` badge on the featured card**, the out-of-hours `dt` labels and the `WHERE YOU WOULD GO` heading, the plan tick glyphs on the plum card |
| `accent-400` | `#d4a24c` | **the out-of-hours phone button** (measured `rgb(212,162,76)`), the featured plan's `ring-2`, the callout left rules, the paw-pad toe in the wordmark |
| `accent-800` | `#684324` | badge text on `accent-100` |

### Chrome greys, grounds (stock Tailwind `gray`, used verbatim)

| token | hex | where |
| --- | --- | --- |
| `gray-50` | `#f9fafb` | **the stats strip** (`border-y`, `bg-gray-50`) and **`#testimonials`** ground (both measured `rgb(249,250,251)`) |
| `gray-100` | `#f3f4f6` | FAQ icon discs, the mobile CTA's `Call Now` button |
| `gray-200` | `#e5e7eb` | header border, hero facts' top rule, FAQ `divide-y`, mobile-CTA border, carousel dots' inactive fill |
| `gray-300` | `#d1d5db` | secondary button borders, cookie `Decline` border, dashed referral-card borders |
| `gray-400` | `#9ca3af` | footer body copy and links, the em dash in the fee table's `On a plan` column |
| `gray-500` | `#6b7280` | card sub-labels (`First year, dogs and cats`), fee-row descriptions, legal bar |
| `gray-600` | `#4b5563` | **body copy on white** (measured `rgb(75,85,99)`), header nav links, FAQ answers, stats labels |
| `gray-700` | `#374151` | secondary button label, dark grounds' borders, newsletter input border |
| `gray-800` | `#1f2937` | footer social tiles + newsletter input ground |
| `gray-900` | `#111827` | **`h1`/`h2`/`h3` on light grounds** (measured `rgb(17,24,39)`), **footer ground**, `body` colour |
| white | `#fff` | page ground, every card on the plum/pink bands, the closing band's solid CTA |

**Note the deliberate split:** content bands sit on white or `primary-50`; only the stats strip and the
testimonials use stock `gray-50`. Do not "normalise" `primary-50` into `gray-50` — the pink cast is the
design's warmth, and the two bands are role-separated (stats + social proof are recessed; content is not).

### Typography

One face, self-hosted by the preview through its own `/cf-fonts/` cache inside the 7,656-byte inline
`<style>` (which is why grepping the sheet for `@font-face` finds nothing):

* **Plus Jakarta Sans** — the whole page. `body` resolves to `"Plus Jakarta Sans", system-ui, sans-serif`
  (measured), 16 px / 24 px, `#111827`. The source ships weights **300, 400, 500, 600, 700, 800**
  (24 `woff2` files: 4 unicode ranges × 6 weights). In use on this page: **400, 500, 600, 700** — no 800.
* No mono face, no second family. Numerals in the fee table and on the plan prices use `tabular-nums` of the
  same face.

| role | measured | notes |
| --- | --- | --- |
| `h1` | 36 → 48 → **60 px** (`text-4xl sm:text-5xl lg:text-6xl`, measured 60/60 at 1440), `font-bold`, `tracking-tight` (**−1.5 px**), `text-gray-900` | two lines: `Your vet should tell you` + a `<span class="text-gradient">` |
| gradient span | `linear-gradient(to right in oklab, #a83a6f, #df77a9)` + `background-clip:text` + `color:transparent` — **not** a solid colour and **not** a highlight box | it is also the typewriter target (see Behaviour) |
| `h2` | **36 / 40 px** `text-3xl sm:text-4xl`, `tracking-tight` (−0.9 px) | every band heading; the out-of-hours one is **30/36 px** (`text-2xl`, no `sm:` step) and white; `#contact`'s is **48 px** (`lg:text-5xl`) white |
| `h3` | **18 px** `text-lg font-bold` (`#species`), **20 px** `text-xl font-bold` (plan names), **12 px** `text-xs font-bold uppercase tracking-wider` (out-of-hours `dt`, measured 0.6 px) | footer column heads are 14 px semibold uppercase `tracking-wider` |
| lede | **18 px** `text-lg` (`sm:text-xl` = 20 px in the hero), `text-gray-600`, `leading-relaxed` inside cards | `#contact` uses `text-primary-100`; out-of-hours uses `text-primary-200` |
| eyebrow pill | 12 px `text-xs font-bold uppercase tracking-wider`, `px-3 py-1`, `rounded-full` | hero uses 14 px `font-medium` `px-4 py-1.5` instead |
| card label | 14 px `text-sm` `text-gray-500` directly under the `h3` | `First year, dogs and cats`, `Dogs and cats, 1–8 years` |
| price | **36 px** `text-4xl font-bold tabular-nums` + 14 px `a month` | `£17` / `£21` / `£29` |
| fee table | 16 px cells, 12 px uppercase `tracking-wider` headers, descriptions 14 px `text-gray-500` | `tabular-nums` on both money columns |
| stat numbers | **36 px** `text-4xl font-bold` → **36 px** `lg:text-5xl` (48) `text-primary-600`; labels 14 px `font-medium text-gray-600` | hero facts are 30 px (`text-3xl` → `lg:text-4xl`) `text-gray-900` |

Load it with one `<link>` in `index.html` (the `css2` URL returns 200 with a browser UA):

```
https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap
```

### Buttons, pills, radii, shadows

| token | value | where |
| --- | --- | --- |
| primary CTA (hero) | `rounded-lg` **8 px**, `bg-primary-600`, white, `px-6 py-3` (24/12 px), 16 px `font-medium`, `shadow-lg shadow-primary-600/25` | `Register your pet` (measured 8 px radius, 12/24 padding, `rgb(168,58,111)`) |
| secondary CTA (hero) | `rounded-lg` 8 px, **white**, `1px gray-300`, `px-6 py-3`, 16 px `font-medium`, `text-gray-700`, hover `bg-gray-50` | `See the fee guide` |
| closing CTA pair | `rounded-lg` 8 px, `px-8 py-4` (32/16 px); solid **white** with `text-primary-700`, ghost `border-2 border-white/30` white text | `#contact` |
| out-of-hours phone | `rounded-2xl` **16 px**, `bg-accent-400`, `text-primary-900`, `px-7 py-4` (28/16 px), **18 px `font-bold`**, leading 20 px phone glyph | measured 16 px radius, `rgb(212,162,76)` on `rgb(91,36,64)` |
| plan CTA | `rounded-xl` **12 px**, `px-5 py-3`, 16 px `font-semibold`; plum ground with white text on white cards, **white ground with `text-primary-700`** on the featured card | `Join Puppy & Kitten` / `Join Adult` / `Join Senior` |
| header CTA | `rounded-lg` 8 px, `bg-primary-600`, `px-5 py-2.5`, 14 px `font-medium`, `lg:` and up only | `Register your pet` |
| mobile bar buttons | `rounded-lg` 8 px, `py-3`, 14 px `font-semibold`; left `bg-gray-100 text-gray-900`, right `bg-primary-600 text-white` | `Call Now` / `Book a Tour` (see Deviation 7 — both are leftovers) |
| `.btn` / `.btn-primary` / `.btn-secondary` (house kit classes, present in the sheet) | `border-radius:var(--radius-lg)` = 8 px, `padding:10px 20px`, 14 px, `.btn-primary{background:#a83a6f}` hover `#8a2f5b` | **not used on this page's markup** — the page writes the utilities inline. Keep them available, do not invent usages. |
| radii | `lg` .5 rem (8) · `xl` .75 rem (12) · `2xl` 1 rem (16) · `3xl` 1.5 rem (24) · `full` | `3xl` = **the plan cards**, `2xl` = cards, callouts, the hero image, the phone button, the emergency card, the fee table wrapper, `xl` = plan CTAs, `full` = every pill/badge/disc |
| `shadow-soft` | `0 4px 16px -4px #0000001a` | testimonial cards |
| `shadow-lg` | stock Tailwind, tinted `shadow-primary-600/25` where it sits on the brand | hero CTA, header past 50 px, back-to-top, carousel arrows, cookie strip |
| `shadow-2xl` | stock | the hero image wrapper (`ring-1 ring-gray-200` too) |
| keyframes present | `hero-float`, `ping`, `spin`, `shimmer` | the page reaches **`hero-float`** (8 s + 10 s `reverse`), **`ping`** (3 ping dots) and **`spin`** (preloader). `shimmer`/`img-shimmer` exist in the sheet and are **unused** — do not add them. |
| `.text-gradient` | `linear-gradient(to right, #a83a6f, #df77a9)`, `background-clip:text`, `color:#0000`; `.delay-100…500` set `animation-delay` | the `h1`'s second line |
| `.animate-hero-float` / `-reverse` | `animation: 8s ease-in-out infinite hero-float` / `10s … reverse hero-float`; the keyframe is `translate(0) scale(1)` → `translate(30px,-20px) scale(1.05)` (33%) → `translate(-20px,15px) scale(.95)` (66%) | the two hero blur blobs |

### Rhythm, containers, measured geometry (1440 px)

* Containers: `.container mx-auto px-4 lg:px-8` (max-width follows Tailwind's `container`, so **1,152 px of
  content inside `.container`**, measured 1,152 px); `max-w-6xl` bands (`#out-of-hours`, `#species`,
  `#health-plans`) also measure **1,152 px**; `#fees` uses `max-w-5xl` (**1,024**) and its table measures
  **958×671**; `#testimonials`/`#faq` centre on `max-w-3xl` (**768**).
* Header: **81 px** measured including the 1 px border (`h-16` 64 → `lg:h-20` 80), sticky, `bg-white/80` +
  `backdrop-blur-lg`, `border-b border-gray-200`; logo `h-8 lg:h-10` (32/40 px tall, 176×40 box).
* Hero: `py-20` (**80 px**), `bg-gradient-to-b from-primary-50 to-white`, section height **1,409 px** at 1440
  (including the photograph), content `max-w-4xl` (896) centred; the facts grid measures **896×105**; the
  photograph **1,024×512** inside `rounded-2xl` + `ring-1 ring-gray-200` + `shadow-2xl`.
* `#out-of-hours`: `py-14` (**56 px**), height **581 px**; inner `max-w-6xl`; the left card measures
  **484×148**, the schedule `dl` **580×148** (they sit in a `lg:grid-cols-[1fr_1.2fr]` two-column row).
* Stats strip: `py-16` (**64 px**), `border-y border-gray-200`, height **238 px**; 2 columns → 4 at `sm`.
* `#species`: `py-20 sm:py-28` (**112 px** measured), height **1,077 px**; cards **352×274** in
  `grid gap-4 sm:grid-cols-2 lg:grid-cols-3`.
* `#health-plans`: `py-20 sm:py-28` (112), `bg-primary-50`, height **981 px**; cards **347×447** in
  `grid gap-6 lg:grid-cols-3`, `rounded-3xl p-7` (28 px).
* `#fees`: `py-20 sm:py-28` (112), height **1,211 px**; table wrapper `rounded-2xl border border-primary-200`,
  `thead` **40 px** tall.
* `#testimonials`: `py-20 lg:py-28` (112), `bg-gray-50`, height **768 px**; each slide card **381×320**
  (`p-8`, `rounded-2xl`, `shadow-soft`), 3-up with `px-3` gutters.
* `#faq`: `py-20 lg:py-28` (112), height **820 px**; rows `py-6` inside `max-w-3xl`, icon disc **32×32**.
* `#contact`: `py-20 lg:py-28` (112), height **452 px**, `bg-gradient-to-br from-primary-600 to-primary-800`.
* Footer: `bg-gray-900`, `pt-16 lg:pt-24` (**96 px** measured), height **567 px**; brand column **384 px**
  (`lg:col-span-4`) in `lg:grid-cols-12`.
* Mobile: document height **12,175 px** at 390; the fixed CTA bar measures **69 px**; the cookie strip is
  87 px tall at 1440.

## Reference document order (three chrome pieces, nine bands, three after the footer)

| # | id | ground | content |
| --- | --- | --- | --- |
| — | `#preloader` | white | `fixed inset-0 z-[100]`, 40 px `animate-spin` ring `border-4 border-gray-200 border-t-primary-600`; removed 300 ms after `load` |
| — | skip link | — | `sr-only focus:not-sr-only`, targets `#main-content` |
| — | `#scroll-progress` | `primary-600` | `fixed top-0 left-0 z-[60] h-0.5`, width = scroll ratio |
| — | `header[data-header]` | `bg-white/80` + `backdrop-blur-lg`, `border-b gray-200` | sticky `z-50`, 64/80 px: paw-pad wordmark (`logo.svg`, light variant for dark) · **eight** nav links from **`lg`** (`Out of hours`, `Animals we see`, `Health plans`, `Fees`, `About`, `Fee guide`, `Blog`, `Contact`, `gap-8`) · dark toggle · solid `Register your pet` (`lg`+) · hamburger (`lg:hidden`) |
| — | `[data-mobile-menu]` | white, `border-t` | `hidden lg:hidden` panel: the eight links as `block py-3 text-base` rows, then a full-width CTA in a `mt-4 border-t pt-4` block |
| 1 | hero (no id) | **`from-primary-50 to-white` gradient** + two floating blur blobs | centred `max-w-4xl`: eyebrow pill with a ping dot (`RCVS registered · Shrewsbury · Independent since 2009`), 60 px `h1` whose second line is the gradient typewriter, 20 px lede, `Register your pet` + `See the fee guide` + a `Watch Demo` play button (**defect — Deviation 6**), then a 2×4 **facts strip** (`sm:grid-cols-4`, `border-t pt-10`, 896×105): `£46 / Consultation`, `24/7 / Cover arranged`, `4,100 / Registered pets`, `16 / Years independent`; below it the photograph (`max-w-5xl`, 1024×512) |
| 2 | `#out-of-hours` | **`bg-primary-800` `#6f284b`, `text-primary-50`**, `py-14` | flex row (wraps): left `max-w-xl` — amber `accent-400` pill with a ping dot (`OUT OF HOURS`), 30 px white `h2`, `text-primary-200` lede; right — the **amber phone button** `01743 660 214` with a 20 px glyph. Then `lg:grid-cols-[1fr_1.2fr]`: the **emergency card** (`rounded-2xl bg-primary-900/60 p-5 ring-1 ring-white/10`): `text-accent-300` label `WHERE YOU WOULD GO`, 18 px bold provider name, address line, and a `rounded-full bg-primary-700` chip `2.4 miles from our practice`; beside it a **three-cell schedule** (`dl`, `grid gap-px bg-white/10 sm:grid-cols-3 rounded-2xl`, cells `bg-primary-800 p-4`): `MON – FRI, 08:30 – 18:30 / Our own vets, here`, `SAT, 09:00 – 13:00 / Our own vets, here`, `ALL OTHER HOURS / Severnside, 2.4 miles away`. Footnote `mt-6 max-w-3xl text-sm text-primary-200` |
| 3 | stats strip (no id) | **`bg-gray-50`, `border-y gray-200`, `py-16`** | `grid-cols-2 gap-8 sm:grid-cols-4`, each cell centred: a **counter** (`data-counter`) in 36→48 px `text-primary-600 font-bold` and a 14 px `font-medium text-gray-600` label. Values and order: **4,100** *Registered pets*, **16** *Years independently owned*, **5** *RCVS-registered vets*, **100%** *Fees published before treatment* |
| 4 | `#species` | white, `py-20 sm:py-28` | centred `max-w-2xl` header: `primary-100` pill `ANIMALS WE SEE`, `h2 What we treat, and what we do not`, lede. Six cards (`grid gap-4 sm:grid-cols-2 lg:grid-cols-3`, measured 352×274): emoji glyph (30 px) top-left, optional grey `Referred on` chip top-right, 18 px `h3`, 14 px blurb, then a `mt-4 border-t pt-3` footer row `Routine care` (gray-500) + a semibold `primary-700` value. Order: **Dogs 🐕**, **Cats 🐈**, **Rabbits 🐇**, **Small mammals 🐹**, **Reptiles and birds 🦜** (dashed border, `bg-gray-50`, `Referred on`), **Horses and livestock 🐴** (same treatment). Closing accent callout `rounded-2xl border-l-4 border-accent-400 bg-accent-50 px-5 py-4 text-sm text-gray-700` |
| 5 | `#health-plans` | **`bg-primary-50`**, `py-20 sm:py-28` | centred header: `bg-primary-700 text-white` pill `HEALTH PLANS`, `h2 Preventive care, spread monthly`, lede. Three `rounded-3xl p-7` cards (`gap-6 lg:grid-cols-3`, measured 347×447): name + 14 px subtitle, a `Saves £N` badge top-right, a 36 px price + `a month`, a `mt-6 border-t pt-5` list of five ticked items (16 px glyphs), then a full-width plan CTA. Card 2 is **featured**: `bg-primary-700 text-white ring-2 ring-accent-400`, its badge `bg-accent-400 text-primary-900`, its ticks `text-accent-300`, its CTA white-on-plum. Cards 1 and 3: `border border-primary-200 bg-white`, badge `bg-accent-100 text-accent-800`, ticks `text-primary-600`. Closing footnote `mx-auto mt-10 max-w-3xl text-center text-sm text-gray-600` |
| 6 | `#fees` | white, `py-20 sm:py-28` | **left-aligned** `max-w-2xl` header (`primary-100` pill `FEE GUIDE`, `h2 What common things cost`, lede). Then `max-w-5xl`: a `mt-12 overflow-hidden rounded-2xl border border-primary-200` wrapper holding a full-width `<table>` — `thead bg-primary-700 text-white` with three 12 px uppercase columns **Item / Standard / On a plan** (right-aligned money), eight `tbody` rows separated by `border-t border-primary-100`, each item cell carrying a 14 px `gray-500` description. Then an accent callout identical in style to the species one |
| 7 | `#testimonials` | **`bg-gray-50`**, `py-20 lg:py-28` | centred `max-w-3xl`: `primary-100` pill (`Clients`, 14 px `font-medium`), `h2 What people say`, `text-lg` lede. `data-carousel` with 3 slides: each `rounded-2xl bg-white p-8 shadow-soft` (381×320) — five `text-primary-400` stars, an 18 px `font-medium` blockquote, then a 48 px `bg-primary-100 text-primary-600` initial disc + name + village. Round white arrows at `-left-4`/`-right-4` (`lg:flex` only) and a `[data-carousel-dots]` div the kit fills |
| 8 | `#faq` | white, `py-20 lg:py-28` | centred `max-w-3xl`: `primary-100` pill (`Questions`), `h2 The awkward ones`, lede; then `divide-y divide-gray-200` over **five** rows: `py-6`, a full-width `button` with an 18 px semibold question and a **32 px `rounded-full bg-gray-100 text-gray-600`** plus-disc that rotates 45° when open, and a `max-height` panel |
| 9 | `#contact` | **`bg-gradient-to-br from-primary-600 to-primary-800`**, `py-20 lg:py-28` | `aria-hidden` decoration: two `h-64 w-64 rounded-full bg-white/10 blur-3xl` blobs at `-right-20 -top-20` and `-bottom-20 -left-20`, plus a **dot grid** (`background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px`, `opacity-10`). Centred `max-w-3xl`: 48 px white `h2 Register before you need us`, `text-primary-100` lede, then a white solid `Register your pet` and a `border-2 border-white/30` ghost `Read the fee guide` (phone glyph) |
| — | `footer` | **`bg-gray-900`, `text-gray-300`, `pt-16 lg:pt-24`** | 12-col grid: brand block `lg:col-span-4` (`logo-light.svg` 40 px, `max-w-xs` blurb, **three** `rounded-lg bg-gray-800 p-2.5` social tiles — X / Instagram / LinkedIn, address `8 Fernhill Road, Shrewsbury, SY3 8QP`, phone, mailbox) · a nested `grid gap-8` with the three link columns **Spaces / Company / Support** · `Stay Updated` (`lg:col-span-3`) with an email field + `Subscribe`. Bottom bar `mt-16 border-t border-gray-800 py-8`: `© 2026 …` + `Privacy Policy` / `Terms of Service` / `Style Guide` |
| — | `#mobile-cta` | white, `border-t gray-200`, `p-3`, `lg:hidden` | fixed bottom bar `z-40`, **69 px** at 390: two equal buttons — `Call Now` (grey, phone glyph) and `Book a Tour` (plum) |
| — | `#cookie-consent` | white, `border-t`, `shadow-lg`, `z-50` | fixed bottom `role="dialog"`-less div: one sentence + `Decline` (outline) / `Accept All` (plum); slides up after 1.5 s |
| — | `#back-to-top` | `primary-600` + `shadow-primary-600/25` | 48 px disc, `bottom-6 right-6`, appears past 300 px |

**On mobile the bottom edge carries three fixed layers**: the CTA bar (`z-40`), the cookie strip (`z-50`) and
the back-to-top disc (`z-50`). The cookie strip paints over the CTA bar until dismissed — copy that order.

## Behaviour the recreation must reproduce

All handlers live in the **house kit** (`Base…BLoalVWc.js`, 16,233 B — the same hash as the Kettle, Aquifer,
Plantroom, Veranda, Stoke and Closeknit reads). Only `applyTheme`, the preloader removal and the JSON-LD block
are page-local — **this page ships no component of its own**, unlike Kettle's sizing tool. The page wires
**27 `data-animate` elements** (23 with `data-delay`) and it uses the kit's typewriter, counter, parallax,
carousel, FAQ, video-modal, cookie, progress, back-to-top and reveal branches — but **not** the lightbox,
blog-filter, accordion, billing-toggle or `data-validate` branches.

1. **Reveal on scroll** (`[data-animate]`, 27 elements, delays 0–500 ms) — the kit sets
   `opacity:0; translateY(20px)` **only** for elements whose top is below `innerHeight * 0.8`, then reveals
   once at `IntersectionObserver`; `0.6s ease-out`, and **skipped entirely** under
   `prefers-reduced-motion: reduce`. There is no `[data-animate]` rule in the sheet, so a DOM read alone shows
   the content plainly — do not conclude the design has no reveal.
2. **Typewriter** (`[data-typewriter]`, 1 element) — the phrases are `[current text, ...JSON array]`, i.e.
   **`what it will cost`, `before you say yes`, `without you asking`**; every **3,000 ms** it fades out
   (`opacity 0`, `translateY(10px)`, 300 ms), swaps `textContent`, fades back in, and wraps. The element is
   forced to `display:inline-block`. The span keeps its gradient (`text-gradient`), so the *colour* never
   changes — only the words.
3. **Counters** (`[data-counter]`, 4 elements) — `IntersectionObserver` at `threshold .5`, one-shot; a
   **2,000 ms** ease-out-cubic ramp from 0 to the numeric value parsed out of the attribute (the kit strips
   `[^0-9.]`), preserving a trailing `+`, `%`, `K`, `M` or a leading `$`. This page's values:
   `4,100`, `16`, `5`, `100%` → rendered `4,100`, `16`, `5`, `100%`. In a jsdom test `IntersectionObserver`
   is absent, so the value must be **derived during render** (see `docs/conventions.md` "Animation
   fallbacks") — never `setState`-ed from an effect.
4. **Parallax blur blobs** (`[data-parallax]`, 2 elements) — `translateY(scrollY × factor)` with factors
   **`0.15`** and **`-0.1`**, skipped while the element is off-screen (`bottom < 0 || top > innerHeight + 200`).
   Because the factor multiplies the *absolute* scroll offset, the blobs drift far by the page's end; reproduce
   the same formula rather than "fixing" it into a relative delta.
5. **Carousel** (`[data-carousel]`) — per-view **3 ≥1024 px, 2 ≥640 px, 1 below**; slide width =
   `track.parentElement.offsetWidth / perView`; advances every **5 s**, wrapping; paused on `mouseenter`,
   resumed on `mouseleave`; re-renders on `resize` when the per-view count changes; dots are one button per
   *page* (`aria-label="Go to slide N"`), and the arrows are `hidden lg:flex`, so below `lg` the carousel is
   **swipe/dot only**.
6. **FAQ** (`[data-faq-toggle]` + `[data-faq-icon]`) — **exclusive**: opening a row sets every other panel to
   `max-height:0`/`opacity:0` and every other disc back to `rotate(0)`; the open row gets
   `max-height: scrollHeight` + `opacity:1` + `rotate(45deg)`. Clicking the open row closes it.
7. **Header shadow** past `scrollY > 50`; the mobile disclosure toggles `hidden` on `[data-mobile-menu]` and
   sets `aria-expanded` while swapping the hamburger glyph for a close glyph.
8. **Cookie strip** — appears 1.5 s after load (`translateY(100%)` → `0`), and either choice slides it out and
   removes it; the kit also stores `cookie-consent` in `localStorage` (dropped in the recreation,
   Deviation 4).
9. **Back-to-top** — past 300 px sets `opacity:1; pointer-events:auto; translateY(0)`, otherwise
   `translateY(16px)`; click smooth-scrolls to `top:0`.
10. **Scroll progress** — `width = scrollY / (scrollHeight - innerHeight) × 100` %, passive listener.
11. **Dark toggle** (`[data-dark-toggle]`) — flips `.dark` on `documentElement` and stores `localStorage.theme`;
    boots from `applyTheme()`. Dropped in the recreation (Deviation 2); every dark value the sheet compiles is
    listed in the token tables so the decision is reversible.
12. **Video modal** (`data-video-modal`, 1 element) — the kit builds a `fixed inset-0 z-[100] bg-black/80`
    overlay with an autoplaying iframe, closes on backdrop click and `Escape`, and locks body scroll. **Do not
    reproduce it** (Deviation 6): the play button's target is a placeholder and the control does not belong to
    this design.
13. **Chrome** — preloader removed 300 ms after `load`; smooth in-page scrolling with a header offset for
    `a[href^="#"]`.
14. **The footer newsletter is inert in the reference.** The form is `<form data-newsletter-form>` and the kit
    only binds `form[data-validate]` (`grep -c 'data-validate'` on the page = **0**), so submitting it performs
    a **native GET to the same URL** with the email in the query string and no feedback at all. The recreation
    must wire it (Requirement 15): required + email checks on submit and on blur, inline error text, reset on
    success, and a toast — no network call, no navigation.

### Data-attribute inventory (measured on the live page)

| hook | count | what it drives |
| --- | ---: | --- |
| `data-animate` (23 with `data-delay`) | 27 | reveal |
| `data-nav-link` | 8 | scroll-spy (**four** real band ids — `out-of-hours`, `species`, `health-plans`, `fees` — and four route paths `/about`, `/pricing`, `/blog`, `/contact`) |
| `data-counter` | 4 | the stats strip (`4,100`, `16`, `5`, `100%`) |
| `data-faq-toggle` / `data-faq-icon` | 5 / 5 | exclusive accordion |
| `data-carousel` / `-track` / `-slide` / `-prev` / `-next` / `-dots` | 1 / 1 / 3 / 1 / 1 / 1 | testimonials |
| `data-parallax` | 2 | the two hero blobs (`0.15`, `-0.1`) |
| `data-typewriter` | 1 | the `h1`'s gradient span (3 phrases) |
| `data-video-modal` | 1 | the hero `Watch Demo` button — **dropped** (Deviation 6) |
| `data-header`, `data-mobile-toggle`, `data-mobile-menu`, `data-dark-toggle` | 1 each | sticky chrome |
| `data-newsletter-form` | 1 | the footer subscribe form (**inert in the reference** — must be wired) |
| `data-cookie-accept` / `data-cookie-decline` | 1 / 1 | cookie strip |

`data-lightbox`, `data-blog-search`, `data-blog-filters`, `data-category`, `data-accordion-toggle`,
`data-billing-toggle`, `data-validate`, `data-filter`, `data-error` are **absent** even though the shared kit
supports them.

## Link and destination census (LT axis, measured 2026-10-25)

The live landing page holds **47 anchors** over **21 distinct `href` values** (counted in the DOM):

| count | href | kind |
| ---: | --- | --- |
| 9 | `/theme/fernhill/contact` | live route → `200` (32,401 B) — header, mobile menu, hero CTA, all three plan CTAs, closing CTA, mobile bar… |
| 4 | `/theme/fernhill/#spaces` | **dead** — `theme/fernhill/spaces/` is a **404** and the landing page has no `#spaces` band; these are the footer's `Hot Desk` / `Dedicated Desk` / `Private Office` / `Meeting Rooms` (**coworking leftovers — Deviation 7**) |
| 3 | `/theme/fernhill/about` | live route → `200` (33,847 B) |
| 3 | `/theme/fernhill/blog` | live route → `200` (38,943 B) |
| 3 | `#` | **dead** — the three footer social tiles |
| 2 | `/theme/fernhill/` | the wordmark (header + footer), a no-op self-link |
| 2 | `/theme/fernhill/#out-of-hours` | nav link + mobile-menu twin → band exists, `200` |
| 2 | `/theme/fernhill/#species` | ditto |
| 2 | `/theme/fernhill/#health-plans` | ditto |
| 2 | `/theme/fernhill/#fees` | ditto |
| 2 | `/theme/fernhill/pricing` | live route → `200` (47,580 B) — the nav's `Fee guide` and the footer link |
| 2 | `#fees` | the hero's `See the fee guide` and the closing band's `Read the fee guide` → band exists |
| 2 | `/theme/fernhill/#contact` | footer `Contact` + the mobile bar's `Book a Tour` → band exists |
| 2 | `/theme/fernhill/terms` | live route → `200` (33,222 B) |
| 1 | `#main-content` | skip link → exists |
| 1 | `tel:01743660214` | valid `tel:` — the out-of-hours phone button |
| 1 | `tel:01743 660 214` | **malformed `tel:`** (spaces) — the footer's copy of the same number |
| 1 | `mailto:reception@fernhillvets.co.uk` | live domain-shaped mailbox (`.co.uk`, not `.example`) |
| 1 | `/theme/fernhill/privacy` | live route → `200` (34,478 B) |
| 1 | `/theme/fernhill/elements` | live route → `200` (53,027 B) — a **style-guide page**, linked from the legal bar as `Style Guide` |
| 1 | `tel:5556789012` | **dead number** — the mobile CTA bar's `Call Now` (**Deviation 7**) |

**Inner-page inventory (all live; note `elements/` is a real style guide, not a 404):**

| page | bytes | `<title>` |
| --- | ---: | --- |
| `about/` | 33,847 | About Fernhill \| Fernhill |
| `blog/` | 38,943 | Blog \| Fernhill |
| `pricing/` | 47,580 | **Fee guide** \| Fernhill |
| `contact/` | 32,401 | Register or book \| Fernhill |
| `terms/` | 33,222 | Terms of Service \| Fernhill |
| `privacy/` | 34,478 | Privacy Policy \| Fernhill |
| `elements/` | 53,027 | **Elements** \| Fernhill (the design's own style guide) |
| `spaces/` | 9 | **404** — the four footer links point here |

`/pricing` is the **fuller** version of the fee guide band (`#fees` prints eight representative rows of it);
`/about` is where the practice-team content the catalog description promises actually lives. The recreation
rebuilds only the landing page — **do not** invent a team section the landing page does not have, and record
the `/pricing` loss in the PR.

## Class census (no phantom-class delta)

The page uses **375 distinct class tokens** (482 `class` attributes) and **every one compiles** to a rule in
`Base.BVSEoPKG.css` — checked token-by-token with Tailwind's escaping applied (`:` `\:`, `/` `\/`, `[` `\[`,
`.` `\.`); **0 misses**, so there is no phantom-class delta to floor into this spec.

⚠️ Three traps when re-running this census:

1. Variants are escaped in the sheet (`sm\:grid-cols-2`, `bg-white\/10`, `group-hover\:text-primary-600`).
2. `dark:` utilities compile as `:is(.dark *)` suffixes, so a `.token{` search misses them entirely.
3. Breakpoints ship as `@media (width>=40rem)` and up: 40rem `sm`, 48rem `md`, 64rem `lg`, 80rem `xl`,
   96rem `2xl`. This page's nav appears at **`lg`** and the plan/tick layout is `lg:grid-cols-3`.

## Screenshot analysis (2400×1892 AVIF, macOS-Safari window frame)

The catalog capture is a **light-mode desktop view framed in Safari chrome** (traffic lights, empty address
bar), so the top ~90 px and the outer ~60 px are browser, not design. Inside it, top to bottom:

* the **white header**: the **paw-pad wordmark** — a plum pad with three rose toes and **one amber toe** —
  beside `Fernhill` in Plus Jakarta Sans 700, the eight nav labels, a moon toggle and the solid plum
  `Register your pet`;
* the **pale pink hero** (`#fdf4f8` fading to white): a rounded pill with a pinging dot reading
  `RCVS REGISTERED · SHREWSBURY · INDEPENDENT SINCE 2009`, then the 60 px headline **`Your vet should tell you`**
  and, on its own line, **`what it will cost`** in the **plum→rose gradient**; a two-line grey lede; the solid
  plum `Register your pet` beside the outlined `See the fee guide`, with a **plum play disc** and `Watch Demo`
  to their right;
* the **facts strip** separated by a hairline top rule: `£46 / Consultation`, `24/7 / Cover arranged`,
  `4,100 / Registered pets`, `16 / Years independent`;
* the **photograph** — a **cat being examined** in a consulting room, wide 2:1, inside a large `rounded-2xl`
  frame — the page's only image.

Everything below the photograph — the plum out-of-hours band, the counters, the species grid, the plans, the
fee table, the carousel, the FAQ, the closing gradient band and the footer — is **not in the screenshot**: read
those from the DOM and the sheet (which is what §Reference document order and the design notes do). The
screenshot is authoritative for three things: the **wordmark geometry**, the hero's vertical rhythm
(pill → headline → lede → CTA row → facts), and the fact that the design is **light, photographic and
typographically calm** — no blobs visible in the light hero beyond the faint pink wash.

## Requirements

### Requirement 1: Page chrome (skip link, scroll progress, back to top, cookie strip)

The app SHALL render a skip link as the first focusable element, a 2 px scroll-progress bar at the very top of
the document, a 48 px back-to-top disc that appears past 300 px, and a cookie strip that slides up 1.5 s after
load and dismisses into component state. It SHALL NOT paint a preloader overlay at any point.

#### Scenario: Visitor loads the page

- **GIVEN** the page is loading
- **WHEN** the document reaches `readyState === "complete"`
- **THEN** no white spinner overlay is painted at all, because the recreation never mounts one
- **AND** the page is fully readable with JavaScript disabled

#### Scenario: Visitor scrolls and returns to the top

- **GIVEN** the page is at the top
- **WHEN** the visitor scrolls past 300 px
- **THEN** the back-to-top disc fades in at `bottom-6 right-6`
- **AND** the progress bar's width equals the scroll ratio
- **AND** clicking the disc scrolls smoothly to `top: 0`

### Requirement 2: Header and mobile disclosure

The app SHALL render a sticky header (`bg-white/80` + `backdrop-blur-lg`, 64 px tall, 80 px from `lg`, 1 px
`gray-200` bottom border) with the wordmark, eight nav links, a solid `Register your pet` CTA from `lg`, and a
hamburger below `lg` that opens a disclosure panel.

#### Scenario: Desktop navigation

- **GIVEN** a viewport of 1440 px
- **WHEN** the header renders
- **THEN** all eight labels are visible in order — `Out of hours`, `Animals we see`, `Health plans`, `Fees`,
  `About`, `Fee guide`, `Blog`, `Contact`
- **AND** the first four scroll to `#out-of-hours`, `#species`, `#health-plans`, `#fees`, and the other four map
  onto bands or routes per Requirement 16
- **AND** the current band's link is highlighted while scrolling (the reference's spy only ever activates the
  four band links — the recreation completes it)
- **AND** past 50 px the header gains `shadow-lg`

#### Scenario: Mobile navigation

- **GIVEN** a viewport of 390 px
- **WHEN** the hamburger is pressed
- **THEN** `aria-expanded` flips to `true`, the panel appears with the eight links as full-width rows and a
  full-width CTA, and the glyph becomes a close icon
- **AND** pressing it again collapses the panel and restores the hamburger

### Requirement 3: Hero with gradient typewriter headline

The app SHALL render the hero on a `primary-50`→white gradient with two floating blur blobs, a ping-dot
eyebrow, a 60 px `h1` whose second line is a `text-gradient` span cycling three phrases, a 20 px lede, two
CTAs and a four-cell facts strip.

#### Scenario: Headline and typewriter

- **GIVEN** the hero is rendered
- **WHEN** the page has been open for 3 s
- **THEN** the gradient span has shown `what it will cost`, then `before you say yes`, then
  `without you asking`, returning to the first
- **AND** each change fades out and back in over 300 ms with a 10 px vertical shift
- **AND** under `prefers-reduced-motion: reduce` the span holds the first phrase and never animates

#### Scenario: Hero content and CTAs

- **GIVEN** the hero is rendered
- **WHEN** the visitor reads it
- **THEN** the eyebrow reads `RCVS registered · Shrewsbury · Independent since 2009` and carries a pinging dot
- **AND** the primary CTA `Register your pet` is solid `#a83a6f` at 8 px radius with a tinted shadow, and the
  secondary `See the fee guide` is white with a 1 px `gray-300` border
- **AND** the facts strip shows `£46 / Consultation`, `24/7 / Cover arranged`, `4,100 / Registered pets`,
  `16 / Years independent` in that order, as a 2×4 grid with a hairline top rule
- **AND** the four facts are static text here (only the stats strip's four use counters)

### Requirement 4: Hero photograph

The app SHALL render one photograph below the hero copy, `max-w-5xl`, 2:1, inside `rounded-2xl` with
`ring-1 ring-gray-200` and `shadow-2xl`, loading from a deterministic placeholder URL.

#### Scenario: Photograph renders

- **GIVEN** the hero is rendered
- **WHEN** the image mounts
- **THEN** it requests `https://picsum.photos/seed/smallpaw-1/1200/600` at 1024×512 rendered size
- **AND** its `alt` describes a veterinary scene in this template's own words (never the source's filename or
  brand) and it is `loading="lazy"`-safe below the fold
- **AND** no `colorlib` or source-asset URL appears anywhere in the app

### Requirement 5: Out-of-hours band

The app SHALL render `#out-of-hours` as a `primary-800` (`#6f284b`) band at 56 px vertical padding containing
an amber eyebrow pill with a ping dot, a 30 px white heading, a lede, a large amber phone button, the
emergency-provider card, and a three-cell schedule grid.

#### Scenario: Emergency routing is legible without scrolling past it

- **GIVEN** the band is rendered
- **WHEN** the visitor reads it
- **THEN** the pill reads `OUT OF HOURS` on `#d4a24c` with `#5b2440` text
- **AND** the heading is `Who sees your animal at three in the morning` and the lede says plainly that the
  practice does not staff its own overnight service
- **AND** the phone button is a `rounded-2xl` amber link at 16 px radius, 18 px bold, reading `01743 660 214`
  with a leading phone glyph, and its `href` is a **valid** `tel:01743660214`
- **AND** the provider card shows the label `WHERE YOU WOULD GO`, the provider name, its address and a
  `rounded-full bg-primary-700` distance chip (`2.4 miles from our practice`)
- **AND** the schedule is a three-cell grid separated by 1 px `white/10` gutters: `MON – FRI, 08:30 – 18:30`
  → `Our own vets, here`, `SAT, 09:00 – 13:00` → `Our own vets, here`, `ALL OTHER HOURS` →
  `Severnside, 2.4 miles away`
- **AND** the band ends with the plain-text explanation that out-of-hours is charged by the provider, typically
  £180–£250 before treatment

### Requirement 6: Animated stats strip

The app SHALL render a `gray-50` band with `border-y`, 64 px padding, holding four counters.

#### Scenario: Counters animate once

- **GIVEN** the strip scrolls into view at 50 % visibility
- **WHEN** it becomes visible
- **THEN** the four values count from 0 to `4,100`, `16`, `5`, `100%` over 2 s with an ease-out curve, keeping
  the thousands separator and the percent sign
- **AND** each counter runs once and is not restarted by scrolling back
- **AND** when `IntersectionObserver` is unavailable (jsdom), the final values are rendered directly

### Requirement 7: Species grid with an explicit referral boundary

The app SHALL render `#species` as six cards in `sm:grid-cols-2 lg:grid-cols-3`, four included and two marked
as referrals, followed by an accent callout.

#### Scenario: Included species

- **GIVEN** the grid is rendered
- **WHEN** the visitor reads the first four cards
- **THEN** they are `Dogs 🐕`, `Cats 🐈`, `Rabbits 🐇`, `Small mammals 🐹` in that order, each with an emoji
  glyph (`aria-hidden`), an 18 px `h3`, a 14 px blurb and a footer row `Routine care` + a semibold value
  (`Annual booster, 6-monthly check`, `Annual booster, 6-monthly check`, `Annual RVHD & myxomatosis`,
  `Health check, 6-monthly`)
- **AND** each card is `rounded-2xl border border-primary-200 bg-white p-6`

#### Scenario: Referred species are visibly different

- **GIVEN** the grid is rendered
- **WHEN** the visitor reaches cards five and six
- **THEN** they are `Reptiles and birds 🦜` and `Horses and livestock 🐴`, with `border-dashed border-gray-300`
  and `bg-gray-50`
- **AND** each carries a `Referred on` chip (`rounded-full bg-gray-200 text-[10px] font-bold uppercase`) and a
  footer value of `Referred at registration`
- **AND** the callout below states that the practice is not an exotics or equine practice and refers to named
  practices, on `bg-accent-50` with a `border-l-4 border-accent-400`

### Requirement 8: Health plans with a featured middle card

The app SHALL render `#health-plans` on `primary-50` with three `rounded-3xl` cards whose middle card is
featured, each showing a name, subtitle, saving badge, monthly price, five ticked inclusions and a CTA.

#### Scenario: Three plans, one featured

- **GIVEN** the band is rendered
- **WHEN** the visitor compares the cards
- **THEN** the cards are `Puppy & Kitten` (`£17`, `Saves £64`, five items), `Adult` (`£21`, `Saves £96`) and
  `Senior` (`£29`, `Saves £140`) in that order
- **AND** `Adult` has `bg-primary-700` with white text and a `ring-2 ring-accent-400` (`#d4a24c`), its badge is
  `bg-accent-400 text-primary-900` and its ticks are `accent-300`
- **AND** the outer cards are white with a `primary-200` border, `bg-accent-100 text-accent-800` badges and
  `primary-600` ticks
- **AND** every price is 36 px bold `tabular-nums` with a 14 px `a month` suffix
- **AND** each CTA is `rounded-xl` (12 px): `Join Puppy & Kitten`, `Join Adult` (white on plum),
  `Join Senior`
- **AND** the footnote below states the plans cover preventive care only and are not insurance

### Requirement 9: Fee guide table

The app SHALL render `#fees` with a left-aligned header and an eight-row table inside a `rounded-2xl` bordered
wrapper, with `thead` on `primary-700`.

#### Scenario: Prices are published, not quoted

- **GIVEN** the table is rendered
- **WHEN** the visitor scans it
- **THEN** the three columns are `Item`, `Standard`, `On a plan`, the money columns right-aligned and
  `tabular-nums`, the headers 12 px uppercase
- **AND** the eight rows are, in order: `Consultation` £46 / Included, `Annual booster, dog` £62 / Included,
  `Annual booster, cat` £58 / Included, `Cat neutering, female` £145 / £131, `Dog neutering, male` £265 / £239,
  `Dental scale and polish` £310 / £279, `Microchipping` £22 / Included, `Euthanasia, in practice` £95 / `—`
- **AND** every item carries its 14 px `gray-500` description and each row after the first has a
  `border-t border-primary-100`
- **AND** the em dash in the last row is `gray-400` and is not a price
- **AND** the accent callout below explains that complex cases are quoted before work begins

### Requirement 10: Testimonials carousel

The app SHALL render three testimonial cards in a carousel that shows 3 / 2 / 1 per view.

#### Scenario: Carousel behaviour

- **GIVEN** the carousel is rendered at 1440 px
- **WHEN** it mounts
- **THEN** three cards are visible (381×320 each), each with five `#df77a9` stars, an 18 px quote, and a 48 px
  `bg-primary-100` initial disc with a name and a Shropshire village
- **AND** it advances every 5 s and wraps, pauses on hover, and resumes on leave
- **AND** the round white arrows render only from `lg`, and dots (one per page) render at every width
- **AND** below `lg` the per-view count drops to 2, then 1, recomputed on resize, and dragging/scrolling the
  track is possible
- **AND** under reduced motion there is no autoplay

### Requirement 11: FAQ accordion

The app SHALL render five questions as an exclusive accordion inside `max-w-3xl`.

#### Scenario: One answer open at a time

- **GIVEN** the FAQ is collapsed
- **WHEN** the visitor opens `Do I need insurance if I am on a health plan?`
- **THEN** its panel expands to its content height and its 32 px disc rotates to 45° (a close glyph)
- **AND** every other panel collapses to `max-height: 0` and every other disc returns to 0°
- **AND** opening a second question closes the first, and clicking the open question closes it
- **AND** each button carries `aria-expanded` and `aria-controls` (added by the recreation — the reference's
  buttons carry neither)

### Requirement 12: Closing CTA band

The app SHALL render `#contact` as a `primary-600`→`primary-800` diagonal gradient with a 40 px dot grid at
10 % opacity, two blurred white blobs, a 48 px white heading, a `primary-100` lede and two CTAs.

#### Scenario: Closing call to action

- **GIVEN** the band is rendered
- **WHEN** the visitor reaches it
- **THEN** the gradient runs from the top-left (`#a83a6f`) to the bottom-right (`#6f284b`) over the dot grid
- **AND** the heading reads `Register before you need us` at 48 px and the lede is `text-primary-100`
- **AND** the solid CTA is white with `text-primary-700` at 8 px radius and 32/16 px padding, and the ghost CTA
  is `border-2 border-white/30` with white text
- **AND** both are keyboard-focusable with a visible ring against the gradient

### Requirement 13: Footer

The app SHALL render a `gray-900` footer whose brand block carries the light wordmark, the practice blurb, three
social tiles and the address/phone/mailbox block; whose middle block carries three link columns; and whose
right block carries the newsletter form and the legal bar.

#### Scenario: Footer content and Component Dock attribution

- **GIVEN** the footer is rendered
- **WHEN** the visitor reads it
- **THEN** the blurb names a Shrewsbury small animal practice in this template's own brand words
- **AND** the three social tiles point at real external destinations with `rel="noreferrer"` (not `#`)
- **AND** the link columns are **Practice** (the recreation's own labels for the fee guide, animals, out of
  hours and plans), **Company** (`About`, `Blog`) and **Support** (`Contact`, `Terms`) — the reference's
  `Spaces` column is the coworking leftover and MUST be replaced (Deviation 7)
- **AND** the phone link uses `tel:01743660214` with no spaces, and the mailbox uses a `.example` domain
- **AND** the legal bar renders `© 2026 <Brand>` plus Privacy, Terms and a **`Component Dock`** link to
  `https://www.componentdock.com/` (required by AGENTS.md rule 5)

#### Scenario: Newsletter validation

- **GIVEN** the newsletter field is empty
- **WHEN** the visitor presses `Subscribe`
- **THEN** an inline error reads `This field is required`, the field gets `aria-invalid="true"` and
  `aria-describedby`, and nothing navigates
- **AND** a malformed address produces `Please enter a valid email address`
- **AND** a valid address clears the field and shows the green toast, with no network request

### Requirement 14: Mobile CTA bar

The app SHALL render a fixed `lg:hidden` bar at the bottom of the viewport with two equal buttons: a call
button and a booking button.

#### Scenario: Mobile action bar

- **GIVEN** a viewport of 390 px
- **WHEN** the page is scrolled to any position
- **THEN** the bar is visible (69 px tall, `p-3`, 12 px gutters), the left button reads `Call` and dials the
  practice's real number, and the right button reads `Register your pet` and jumps to `#contact`
- **AND** the reference's `Call Now` → `tel:5556789012` and `Book a Tour` copy are **not** reproduced
- **AND** from `lg` up the bar is not rendered

### Requirement 15: Accessibility and semantics

The app SHALL be operable by keyboard and legible to screen readers, and every text/ground pair it ships SHALL
meet WCAG AA.

#### Scenario: Keyboard and screen-reader pass

- **GIVEN** the page is loaded
- **WHEN** the visitor tabs from the top
- **THEN** the first stop is the skip link, and the disclosure, the carousel, the FAQ rows, both CTAs and the
  newsletter field are operable with a visible focus ring against every ground (including `#a83a6f`,
  `#8a2f5b`, `#6f284b`, `#d4a24c` and `#111827`)
- **AND** `aria-expanded` is set on the menu and the FAQ buttons, the counters carry their final values as text
  (not only as animation), the emoji glyphs and decorative SVGs are `aria-hidden`, and `role="dialog"` is set on
  the cookie strip only
- **AND** the headings run `h1` (hero) → `h2` (one per band) → `h3` (cards, plan names, footer columns) with no
  level skipped
- **AND** no text sits below 4.5:1 — the pairs to check first are `text-primary-200` on `#6f284b`, white on
  `#a83a6f`/`#8a2f5b`, `#684324` on `#f9edcf`, `#5b2440` on `#d4a24c` and `#6b7280` on white

#### Scenario: Provenance audit

- **GIVEN** the implementation is complete
- **WHEN** `grep -ril "colorlib" apps/smallpaw` runs
- **THEN** it prints nothing
- **AND** no file contains the source brand (`Fernhill`, `Fernhill Vets`), its mailbox domain, its wordmark
  SVGs, its stylesheet or its photographs; the paw-pad mark is redrawn from the documented geometry and the
  footer links `https://www.componentdock.com/`

### Requirement 16: Route links become in-page destinations

The app SHALL serve the whole template from one page, so every route-shaped link in the reference maps onto a
band that exists.

#### Scenario: No dead fragments

- **GIVEN** the recreation is built
- **WHEN** every internal `href` in the app is followed
- **THEN** `#out-of-hours`, `#species`, `#health-plans`, `#fees`, `#testimonials`, `#faq` and `#contact` all
  resolve to a rendered band
- **AND** `About`, `Fee guide`, `Blog`, `Contact` and the footer's legal links either become in-page fragments
  or are rendered as `aria-disabled` non-links — never as links to pages the single-page app does not have
- **AND** no `#spaces` fragment exists anywhere (the reference's four are dead links to a coworking page)

## Deliberate deviations from the reference

1. **Multi-page → one page.** The preview is an eight-route Astro site (`/about`, `/blog`, `/pricing`,
   `/contact`, `/terms`, `/privacy`, `/elements`, `/` — all live; `/spaces` is a 404). The recreation is the
   single landing page described here. `/pricing` is the fuller fee guide; `/about` carries the practice-team
   content the catalog description promises. Neither is rebuilt — say so in the PR rather than inventing a
   team section the landing page does not have.
2. **Dark mode dropped.** The source compiles a complete dark palette (`dark:` on most utilities), a
   `localStorage` toggle and an `applyTheme()` boot script. The recreation is light-only (house convention) and
   drops the toggle, so the header cluster is the wordmark, the nav, the CTA and the hamburger. Every dark
   value the sheet compiles is recorded in the token tables so the decision is reversible.
3. **The typewriter keeps the gradient.** Fidelity detail worth stating explicitly: the reference's cycling
   span is a gradient-clipped text node, so re-implementing the animation must not swap the span for a coloured
   div or drop `background-clip:text`.
4. **Cookie persistence.** The source stores `cookie-consent` in `localStorage`; the recreation keeps the
   dismissed state in component state so no test depends on an invented storage key.
5. **Copy and identity re-branded.** Smallpaw replaces the source brand everywhere: the wordmark (redrawn from
   the same idea — a plum paw pad with three rose toes and one amber toe beside a `Smallpaw` wordmark in Plus
   Jakarta Sans 700), the `© 2026` line, the mailbox (`reception@smallpaw.example`), the document title, the
   OG/meta set and every URL. The fictional Shrewsbury address, the `01743 660 214` number, the `RCVS
   registered` claim, the emergency provider, the town names, the prices and the testimonial names are kept —
   they are already fictional and they are the page's content. ⚠️ **Keep the sample/demo framing** the source
   uses on its prices.
6. **The `Watch Demo` video modal is dropped.** The hero ships a play disc and the label `Watch Demo` bound to
   `data-video-modal="https://www.youtube.com/embed/dQw4w9WgXcQ"` — a placeholder (a rickroll) left in the
   generated shell. It is not part of this design's argument and must not be reproduced; the hero's CTA row is
   the two buttons only. Recorded here so a reviewer does not read its absence as a fidelity miss.
7. **Three house-shell leftovers are repaired, not copied.** (a) The footer's `Spaces` column — `Hot Desk`,
   `Dedicated Desk`, `Private Office`, `Meeting Rooms` — links to `/theme/fernhill/#spaces`, which is a 404 on
   the host and does not exist on the page; it is a coworking template's column and becomes the practice's own
   links. (b) The mobile bar's `Call Now` dials `tel:5556789012`, a US placeholder, and its second button says
   `Book a Tour`; both become the practice's real number and `Register your pet`. (c) The footer's
   `tel:01743 660 214` (with spaces) is normalised to `tel:01743660214`.
8. **Reference defects not reproduced.** The three `href="#"` social tiles get real external hrefs with
   `rel="noreferrer"`; the corrupt JSON-LD block (`"@context":"https://***@type"`, the same corruption as the
   sibling 2026 designs) is **not** copied — the app writes its own `VeterinaryCare`-style block or omits it;
   and the favicon (an **amber `#d97706`** rounded square with a generic glyph, unrelated to the plum brand)
   is replaced with the paw-pad mark.
9. **Accessibility attributes added.** The reference's FAQ buttons have no `aria-expanded`/`aria-controls`, its
   carousel arrows have labels but no live region, its cookie strip has no `role`, and its form errors never
   render. The recreation adds them plus a visible focus ring on all saturated grounds.
10. **The newsletter form is wired.** See Requirement 13 — the reference's form is inert and submits natively.
11. **The four static hero facts and the four counters both stay.** The reference repeats 4,100 and 16 in the
    hero strip and in the stats band, and numbers the second set as counters. That redundancy is in the
    design; do not de-duplicate it into one strip.
12. **Parallax stays literal.** The blobs translate by `scrollY × factor` (absolute, not delta), so they drift
    several hundred pixels by the page's end. Reproduce the formula; do not "correct" it.
13. **No page-local script is ported.** Unlike its siblings, this page ships no component of its own — the only
    interactivity is the house kit's. Nothing here needs a bespoke arithmetic module (there is no pricing tool).

## Verification checklist

- [x] Spec validates: `openspec validate template-smallpaw --type spec` prints
      `Specification 'template-smallpaw' is valid`
- [x] `apps/smallpaw` scaffolded from the simplest existing app, package renamed
      `@free-react-templates/smallpaw`, `public/CNAME` = `smallpaw.free.componentdock.com`, `homepage` =
      `https://smallpaw.free.componentdock.com`, `vite.config.ts` still calls `injectUiSource()`
- [x] Tokens: `primary` `#fdf4f8` → `#5b2440` with **`#a83a6f`** as the brand and `#8a2f5b` / `#6f284b` as the
      two dark band grounds; `accent` `#fdf8ed` → `#684324` with **`#d4a24c`**; stock `gray` 50–900 for chrome;
      radii 8/12/16/24 px; `shadow-soft` `0 4px 16px -4px #0000001a`
- [x] Fonts: **Plus Jakarta Sans 400/500/600/700** via one `<link>`; `tabular-nums` on plan prices and both fee
      columns; **no second family, no mono face**
- [x] `.text-gradient` (`#a83a6f` → `#df77a9`, `background-clip:text`) and the `hero-float` keyframe
      (8 s / 10 s reverse) reproduced; `shimmer` not added; `ping` and `spin` are the only other animations
- [x] Header: sticky `white/80` + blur, 64/80 px, **eight** links from **`lg`**, CTA from `lg`, hamburger below,
      `shadow-lg` past 50 px, disclosure with `aria-expanded`
- [x] Hero: `primary-50`→white gradient, two parallax blobs (`0.15`, `-0.1`), ping-dot pill, 60 px `h1` with the
      gradient span, 20 px lede, solid + outlined CTA, four static facts (`£46`, `24/7`, `4,100`, `16`),
      photograph 1024×512 from a `picsum` seed
- [x] Typewriter: three phrases in order, 3 s cadence, 300 ms fade, `display:inline-block`, gradient preserved,
      static under reduced motion, no `Watch Demo` button
- [x] Out-of-hours band: `#6f284b`, 56 px padding, amber pill with ping dot, 30 px white `h2`, amber
      `rounded-2xl` phone button with valid `tel:`, provider card (`484×148`-ish) with the distance chip,
      three-cell schedule on `white/10` gutters, closing footnote
- [x] Stats strip: `bg-gray-50` + `border-y`, `py-16`, 2→4 columns, four counters (`4,100`, `16`, `5`, `100%`)
      animating once at 50 % visibility over 2 s, final values in the DOM without `IntersectionObserver`
- [x] Species: six cards in the reference order, `lg:grid-cols-3`, four bordered-white and two dashed-grey with
      `Referred on` chips, `Routine care` rows, accent callout below
- [x] Health plans: three `rounded-3xl` cards, featured `Adult` (`#8a2f5b` + amber ring, amber badge, amber
      ticks, white CTA), `£17` / `£21` / `£29`, five inclusions each, footnote
- [x] Fee table: eight rows in order, `primary-700` `thead`, `Standard` / `On a plan` columns right-aligned,
      `Included` / discounted / em dash values, descriptions, accent callout
- [x] Testimonials: three cards, 3/2/1 per view, 5 s autoplay paused on hover, dots at every width, arrows from
      `lg`, stars `#df77a9`, initial discs `bg-primary-100`
- [x] FAQ: five exclusive rows, `aria-expanded`/`aria-controls`, 32 px disc rotating 45°, `max-height`
      transition, the five questions in the reference order
- [x] Closing band: `#a83a6f`→`#6f284b` diagonal gradient, 40 px dot grid at 10 %, two blurred blobs, 48 px
      white `h2`, white solid + ghost CTA
- [x] Footer: brand block + practice columns (no `Spaces`), social tiles with real hrefs, `tel:` without
      spaces, `.example` mailbox, wired newsletter with inline errors + toast, legal bar with the
      **`Component Dock`** link to `https://www.componentdock.com/`
- [x] Mobile bar: `lg:hidden`, 69 px, `Call` → the practice's real `tel:`, second button → `#contact`; cookie
      strip paints above it
- [x] No `colorlib` string, no source brand, no source mailbox/wordmark/stylesheet under `apps/smallpaw`; paw
      mark redrawn; no copied JSON-LD; favicon replaced with the brand mark
- [x] Every internal fragment resolves; **no `#spaces` link anywhere**
- [x] Row added for the design under `## Business` **between `Feliciano` and `Finances`** with the heading
      re-measured (`(369)`, or `(370)` if Kettle landed first) and flipped to `[x]` with the bookkeeping commit
      (the exact line is in §Purpose)
- [ ] `npm run spec:validate`, `scripts/verify-app.sh smallpaw` and the CI gate are green
