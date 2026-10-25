# Template: Airshed (Home Services — HVAC / indoor air quality, a measurement-first trade site)

## Purpose

A **trade site whose product is a measurement, not a piece of equipment** — and whose copy says so
out loud. Every band is an argument against being sold a purifier: the hero headline is *"We measure
first."* with the second sentence set in brand violet (*"Often the answer is not equipment."*), the
third band is titled *"Roughly half of these assessments end with no sale"*, and the price list is
prefixed *"From"* under the line *"Everything below follows a measurement. Nothing on this list is
sold before one."* The one thing the page asks for is a **three-field booking form** sitting in the
hero's right-hand column, in a white card on a wash-coloured band.

The visual idea is **violet on near-white with a custom warm-neutral "ink" ramp**. The page is
almost entirely type: hairline rules carry the structure (a 1 px rule beside every metric number, a
`gap: 1px` grid that turns six service cards into one bordered block, a bottom-rule per town in the
service-area list, `divide-y` rows on the FAQ), and the only decorative marks are five amber stars,
a violet `border-l-2` on each principle, and a single 4:3 **SVG line chart** standing in for
photography. There are **no photographs at all** — four `<img>` in the whole document, three of them
the logo.

Above everything sits a **37 px licence strip** in `ink-800` (*Licence · Measurement before equipment ·
Serving Bernalillo County · 4.9 150+ reviews*), then a sticky 80 px header with a six-item nav, a
phone pill, a dark-mode toggle and a violet CTA. Nine bands follow, and the last one is a **solid
`#6138bc` closing band** — the only saturated surface on the page.

Recreation of the ColorLib "Zephyr" design (https://colorlib.com/wp/template/zephyr/, live preview
https://preview.colorlib.com/theme/zephyr/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
application. Invented name: **Airshed** → `apps/airshed`,
`@free-react-templates/airshed`, `https://airshed.free.componentdock.com`.

- **Source slug:** `zephyr`
- **ColorLib category (breadcrumb):** *HVAC Website Templates* →
  `https://colorlib.com/wp/cat/hvac/`; the product page also tags it **Astro**, **Bootstrap
  Templates**, **Home Services**, **HVAC**, **Tailwind CSS**
- **New name rationale:** `airshed` is a single lowercase word with no hyphen — the term for the air
  basin of a region, i.e. exactly what the page measures, and a word the design itself never uses.
  The source word `zephyr` is **unusable**: `apps/zephyr` already recreates a different ColorLib
  design (**Colorlib Error 404 V17**, `TEMPLATES.md` under `## 404 Error`), and
  `openspec/specs/template-zephyr/` is that other design's spec. Zero repo hits:
  `git grep -il airshed origin/main` prints nothing, and `apps/`, `openspec/specs/template-airshed`,
  `docs/templates/airshed` do not exist (checked 2026-10-25). The candidate is **not a ColorLib
  design either** — `https://colorlib.com/wp/template/airshed/`,
  `https://preview.colorlib.com/theme/airshed/` and
  `https://preview.colorlib.com/theme/bootstrap/airshed/` all answer **404** (probed 2026-10-25).
  Free names still unused if a later air/HVAC slug needs one: `aeolus`, `airgauge`, `boreas`,
  `chinook`, `airloom`, `siftair`, `clearwell`, `barometer`, `airvane` (all zero-hit and all 404 on
  the three ColorLib paths; `mistral` fails the zero-substring test with **12** unrelated repo hits).

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

Every row of `TEMPLATES.md` is `[x]` (2,884 rows; open `- [ ]` **0**), and every row already owns a
spec, so the prep queue comes from `docs/catalog-coverage.md` — the **42 standalone designs** on
ColorLib's own listing that the checklist never recorded. `zephyr` is one of them, catalogued as
*"orphan prep (other design)"*: the word is an app name, but that app is a different design, so the
design itself had no spec until now. It is the **42nd and last** of the set (`threadline` →
Answerbook was #41).

`zephyr` has **no** design spec of its own on `origin/main`
(`git grep -l 'wp/template/zephyr/' openspec/specs docs/templates` → empty; the only
`template-zephyr` is the 404-page design) and no `apps/airshed`.

The implementer appends this line when it claims the template — at the **end of `## Business`**
(currently `## Business (385)`, bump to **386**), alphabetically after ***Zeta*** (`talon`), which is
the last row of the section, i.e. **line 1,268** on `a83c61fdd`. Re-read the section before pasting; a
concurrent stream may have inserted rows above it.

```markdown
- [ ] **Zephyr** — [colorlib](https://colorlib.com/wp/template/zephyr/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/zephyr-template.jpg)
```

After the merge the row becomes `- [x] **Zephyr** — … · [airshed](https://airshed.free.componentdock.com)`.

**Screenshot URL note:** the product shot is `…/sites/2/zephyr-template.jpg` — **200, 122,512 B,
2,400 × 1,892**, and it is an **AVIF container behind a `.jpg` extension** (`file` says
*ISO Media, AVIF*; `PIL` opens it, so convert before viewing).
`zephyr.jpg`, `zephyr-free-template.jpg` and `zephyr-featured.jpg` do **not** exist (all 404). The
shot is a **browser-framed hero plus the first two bands** — it stops mid-*"What we measure"*, so
everything from the third principle card down is live-preview evidence only.

## Reference readings (2026-10-25, `curl -4` + Playwright/Chromium)

| what                      | value                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| preview HTML              | **200**, **65,449 B**, `text/html` — an **Astro** build (`_astro/Base.*.css`), not the old `css/main.css` kit |
| stylesheet                | `https://preview.colorlib.com/theme/zephyr/_astro/Base.BiuJYjSu.css` — **200, 54,782 B**, sha256 `55eb4d5d…` |
| stylesheet read-back      | `--spacing: .25rem`; `--radius-lg .5rem`, `--radius-xl .75rem`, `--radius-2xl 1rem`; `--font-weight-*` 400/500/600/700; **no `--color-primary-*` custom properties** (Tailwind 4 inlines them as literals) |
| fonts                     | **no `<link>` to Google Fonts** — 18 `@font-face` rules sit in one inline `<style media="print">` block (**5,489 B**) pointing at `/cf-fonts/v/dm-sans/5.2.8/…` and `/cf-fonts/v/jetbrains-mono/5.2.8/…`: **DM Sans 400 / 500 / 700** (two subsets each) and **JetBrains Mono 500 / 700** |
| scripts                   | `Base.astro_astro_type_script_index_0_lang.BLoalVWc.js` **200, 16,233 B** (all behaviour) + `ClientRouter…CYDbzu1r.js` **200, 16,357 B** |
| product page              | `https://colorlib.com/wp/template/zephyr/` — **200, 111,297 B**, `<h1>Zephyr</h1>`, title *"Zephyr - Indoor Air Quality Website Template 2026 - Colorlib"* |
| product shot              | `…/sites/2/zephyr-template.jpg` — **200, 122,512 B**, **2,400 × 1,892**, AVIF-in-`.jpg`                     |
| archive zip               | `https://preview.colorlib.com/downloads/free/zephyr.zip` — **404, 9 B**: no un-versioned twin, so the **live preview is the sole DOM/CSS reference** |
| preview screenshot (mine) | `/tmp/zephyr/live-full-revealed.png` — 1440 × **6,588** full page; `/tmp/zephyr/fold.png`, `/tmp/zephyr/dark-fold.png` |
| document height           | **6,588** px at 1440 · **7,942** at 768 · **10,427** at 390                                                   |
| `scrollWidth`             | **1,440 / 768 / 390** — equals the viewport at every step, `scrollX` stays 0 after `scrollTo(400,0)`; at **320** `body.scrollWidth` reads **352** against `clientWidth` **320** and `scrollX` still stays 0 (the carousel track is **clipped**, not scrollable) |
| inner pages               | `/about/` 35,988 B · `/services/` 40,373 · `/what-we-measure/` 40,254 · `/wildfire-season/` 40,107 · `/service-areas/` 33,497 · `/contact/` 34,735 · `/terms/` 35,377 · `/privacy/` 36,588 — all **200**; **trailing slash only** (`/about` → **308**); `/index.html` is **200, 65,449 B** but **not** byte-identical to `/` |
| fonts in use              | **DM Sans only** — computed `font-family` is DM Sans on every element, and **zero** markup nodes carry a `font-mono` class even though JetBrains Mono is declared |
| reveal animations         | **14** `[data-animate="fade-in-up"]` elements, 14 start at `opacity: 0`; delays `0 / 100 / 150 / 200` ms   |
| anchors                   | **41** total — `/services` ×6, `/contact` ×6, `/what-we-measure` ×3, `/wildfire-season` ×3, `/service-areas` ×3, `/about` ×3, `tel:5551401400` ×3, `#` ×3 (**dead**), `/` ×2, `#service-areas` ×2 (**dead on the home page** — the section id is `areas`), `/privacy` ×2, `/terms` ×2, `#main-content` ×1, `tel:(555) 140-1400` ×1 (**malformed**), `mailto:` ×1 |
| interactive state         | **1** `aria-expanded` (the mobile menu button), **2** `<form>` (hero booking + footer newsletter), **0** `<details>`, **0** `<table>`, **4** `<img>` (logo ×3 + one SVG), **44** inline `<svg>`, **5** `tabular-nums` |

Every number below is measured, not inferred: `getComputedStyle` at 1440/768/390 for type, colour,
radius, padding and shadow; `getBoundingClientRect` for band heights and grid tracks; the compiled
sheet for the ramps.

## Design tokens

<!-- heading-role-tokens: zephyr/ink/template-airshed/#7247dc -->
**Heading-ink role (measured 2026-10-25):** the `h1` row states `#7247dc`, but the page declares it only for non-heading elements (.text-primary-600; .hover\:text-primary-600:hover) — no heading rule carries it. The rendered headings paint rgb(39, 39, 51) x17, rgb(255, 255, 255) x5.
<!-- /heading-role-tokens -->

### Colour

Three ramps, all read back out of the compiled sheet. The brand ramp is **Tailwind `violet` renamed
`primary`**, the neutrals in the top five bands are a **custom `ink` ramp** (`#f8f8fa` → `#171720`,
warmer and softer than Tailwind gray), and the last three bands switch to **stock Tailwind `gray`** —
the page really does use two different neutral families, and the seam is visible between *Services*
(`ink-500` body copy) and *Testimonials* (`gray-600`).

| token          | value     | where the reference uses it                                                             |
| -------------- | --------- | --------------------------------------------------------------------------------------- |
| `primary-50`   | `#f5f3ff` | post hover fill, card hover washes                                                       |
| `primary-100`  | `#ede8ff` | **"Reviews" / "Questions" pills**, closing-band lede colour (`text-primary-100`)          |
| `primary-200`  | `#dcd4fe` | input/card hairline tint where a primary-tinted border is wanted                         |
| `primary-400`  | `#a288f7` | **testimonial stars** (`text-primary-400`), dark-mode accents, `text-gradient` end        |
| `primary-500`  | `#8663ee` | focus ring (`ring-primary-500`), input focus border                                      |
| `primary-600`  | `#7247dc` | **brand fill** — hero CTA, submit button, checklist ticks, metric numbers, progress bar   |
| `primary-700`  | `#6138bc` | **eyebrow text**, "The filter question" links, "From $345" prices, the **closing band**   |
| `ink-50`       | `#f8f8fa` | **hero band background**                                                                 |
| `ink-100`      | `#efeff3` | header hairline, metric rules, service grid gaps (hairline grid), town rules              |
| `ink-200`      | `#dedee6` | input borders                                                                            |
| `ink-300`      | **absent — no rule is compiled** | `placeholder:text-ink-300` appears in the markup, but the sheet ships no `ink-300` utility, so every placeholder computes to `rgb(185, 185, 200)` (see defect 8). Ship `#b9b9c8`. |
| `ink-400`      | `#8b8ba0` | figure captions                                                                          |
| `ink-500`      | `#696980` | **body copy and ledes** in the ink half of the page                                      |
| `ink-600`      | `#4f4f63` | **nav labels**, hero rating line                                                         |
| `ink-700`      | `#3c3c4c` | hero checklist text, town names                                                          |
| `ink-800`      | `#272733` | **headings**, licence strip background                                                   |
| `ink-900`      | `#171720` | dark ink surface (only used via utilities that never appear in markup)                    |
| `gray-50`      | `#f9fafb` | testimonials band                                                                        |
| `gray-100`     | `#f3f4f6` | FAQ `+` disc                                                                             |
| `gray-200`     | `#e5e7eb` | FAQ `divide-y` rules                                                                     |
| `gray-400`     | `#9ca3af` | footer blurb + column links                                                              |
| `gray-500`     | `#6b7280` | copyright, footer bottom links                                                           |
| `gray-600`     | `#4b5563` | **body copy in the gray half**, FAQ answers                                              |
| `gray-800`     | `#1f2937` | footer social tiles, dark-mode quote cards                                               |
| `gray-900`     | `#111827` | **headings in the gray half**, **footer band**, dark-mode hero/testimonials surfaces     |
| `gray-950`     | `#030712` | dark-mode page background and the dark *What we measure* / *Services* / *FAQ* bands      |
| `amber-400`    | `#fbbf24` | **the only accent that is not violet**: the five hero stars and the licence-strip star   |

Semantic extras: `#7247dc40` / `#7247dc4d` (violet shadows at 25 %/30 %), `#0000001a`
(`--shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1)`), `white/40` and `white/10` on the closing band's
outline button, `white/90` on the sticky header. `red-*` and `green-*` are compiled into the sheet
but **never used** by any markup class — do not add them.

### Type (DM Sans, one face)

| role                 | size / line-height             | weight | tracking | colour                                  |
| -------------------- | ------------------------------ | ------ | -------- | --------------------------------------- |
| `h1`                 | 60 / 66 (`sm:` 48, base 36 / 40)| 700    | −1.5 px  | `#272733`, second sentence `#7247dc`     |
| hero lede            | 18 / 28                        | 400    | —        | `#696980`                               |
| hero rating          | 14 / 20                        | 400    | —        | `#4f4f63`, score in 700                 |
| hero checklist       | 16 / 24                        | 500    | —        | `#3c3c4c`                               |
| form `h2`            | 24 / 32 (`text-2xl` at `lg`)   | 700    | —        | `#272733`                               |
| input label          | 14 / 20                        | 600    | —        | `#3c3c4c`                               |
| input value          | 16 / 24                        | 400    | —        | `#272733`                               |
| `h2`                 | 36 / 40 (base 30 / 36)         | 700    | −0.9 px  | `#272733` (ink bands) / `#111827` (gray bands) |
| section lede         | 18 / 28                        | 400    | —        | `#696980` / `#4b5563`                   |
| eyebrow              | 14 / 20, uppercase             | 700    | 0.35 px  | `#6138bc`                               |
| metric number        | 14 / 20, `tabular-nums`        | 700    | —        | `#7247dc`                               |
| metric `h3`          | 18 / 28                        | 700    | —        | `#272733`                               |
| metric body          | 16 / 24                        | 400    | —        | `#696980`                               |
| metric footnote link | 14 / 20                        | 600    | —        | `#6138bc`                               |
| principle `dt`       | 16 / 24                        | 700    | —        | `#272733`                               |
| principle `dd`       | 16 / 24                        | 400    | —        | `#696980`                               |
| figure caption       | 14 / 20                        | 400    | —        | `#8b8ba0`                               |
| service card `h3`    | 18 / 28                        | 700    | —        | `#272733`                               |
| service price        | 14 / 20                        | 700    | —        | `#6138bc`                               |
| town row             | 16 / 24                        | 400    | —        | `#3c3c4c`                               |
| quote                | 18 / 28                        | **500**| —        | `#111827`                               |
| quote byline         | 14 / 20 (name 600, town 400)   | 400    | —        | `#111827` / `#6b7280`                   |
| FAQ question         | 18 / 28                        | 600    | —        | `#111827`                               |
| FAQ answer           | 16 / 24                        | 400    | —        | `#4b5563`                               |
| closing `h2`         | 36 / 40                        | 700    | −0.9 px  | `#ffffff`                               |
| closing lede         | 18 / 28                        | 400    | —        | `#ede8ff`                               |
| footer column head   | 14 / 20, uppercase             | 600    | 0.7 px   | `#ffffff`                               |
| footer blurb / links | 16 / 24 · 14 / 20              | 400    | —        | `#9ca3af`                               |
| licence strip        | 12 / 16                        | 400 (values 600) | — | `#efeff3`, `4.9` in 500 |
| nav label            | 14 / 20                        | 600    | —        | `#4f4f63` → `#6138bc` hover             |
| button label         | 16 / 24 (`text-base`), 700     | 700    | —        | white / `#6138bc` / white               |

**The mono face is declared and never used.** The inline `@font-face` set ships JetBrains Mono 500
and 700, and `--font-mono` points at it, but **no element carries `font-mono`** and every numeral is
set in DM Sans with `tabular-nums` (five nodes). This is the inverse of the sibling preps in this
family, which put every figure and eyebrow in mono — do not "restore" mono here, the reference has
none.

### Shape, shadow, layout

- **Buttons:** 8 px radius everywhere (`rounded-lg`). Hero submit `24px / 14px` at 16 px / 700
  (`w-full`); closing band `32px / 16px` at 16 px / 700; licence-strip CTA and footer Subscribe
  `16px / 10px` at 14 px / 500. Primary fill `#7247dc`, hover `#6138bc`. The closing band's second
  button is `2px solid white/40`, white label, hover `border-white` + `bg-white/10`.
- **Cards:** the hero form card is **16 px radius, 32 px padding, white, 1 px `#efeff3` border,
  `shadow-md`** (`0 4px 6px -1px rgb(0 0 0/.1)`), 469 px wide at 1440. Testimonial cards are 16 px
  radius, 32 px padding, `shadow-soft`. Service cards are **square-cornered by construction**: the
  grid is `gap: 1px` on an `ink-100` background inside a 16 px `overflow-hidden` shell, so the
  hairlines are the gutters.
- **Inputs:** 8 px radius, 1 px `#dedee6`, `12px / 16px` padding, focus `border-primary-500` +
  `ring-2 ring-primary-500/20`; the `<select>` carries the same shape.
- **Widths:** container **max-width 1280 px, `px-8` at `lg`** (`px-4` below) → 1,216 px of content.
  Hero `lg:grid-cols-12` at **gap 64** with copy `7/12` and form `5/12`; *What we measure* `3/12`-free
  three-column `ol` at gap 24; *Why us* two 576 px columns at gap 64; *Services* 3 × 404 px; *Areas*
  a 12-column split `5/7` at gap 64 with the town list in `2` columns (`sm:grid-cols-3`); testimonials
  and FAQ copy `max-w-3xl` (768); footer a 12-column grid (`4 / 2.5 / 2.5 / 3`).
- **Rhythm:** hero `py-14 lg:py-20`; every `.section` `py-20 lg:py-28` = **80 px base / 112 px at
  `lg`**; licence strip `h-9` (**37 px with its border**); header `h-16 lg:h-20` (**65 / 81 px with
  the border**); footer `pt-16 lg:pt-24`. Measured band heights at 1440: licence **37** · header
  **81** · hero **711** · what-we-measure **840** · why-us **940** · services **915** · areas **468**
  · testimonials **768** · FAQ **820** · closing **440** · footer **568**.
- **Scroll offset:** the licence strip scrolls away but the header is `position: sticky; top: 0`, so
  every in-page anchor needs `scroll-margin-top: 96px` (81 px header + 15 px breathing room).

## Chrome (family behaviour — but four things are *missing* here)

Shared with the other Astro builds in this batch: skip link to `#main-content`; **2 px** violet
scroll-progress bar (`#scroll-progress`, `z-[60]`, width = scroll %); sticky header that gains
`shadow-lg` past 50 px; dark-mode toggle writing `localStorage.theme` **and** re-applying the class
from an inline script before first paint (no flash); mobile nav panel toggled by
`[data-mobile-toggle]` with a real `aria-expanded`; cookie dialog (`role="dialog"`,
`localStorage["cookie-consent"] = accepted | essential`, slides up after **1.5 s**, then removed);
back-to-top disc (48 px, `opacity` + `translateY(16px)`, appears past 300 px); and the reveal engine
(any element whose top is below **80 %** of the viewport starts at `opacity: 0; translateY(20px)` and
is un-observed on first intersection, threshold **0.1**, rootMargin `0 0 -10% 0`, with a
`prefers-reduced-motion: reduce` early return that disables it entirely).

**What this build does *not* have** — do not carry these over from the sibling preps:

1. **No "Spaces" / coworking footer column** and **no "Book a Tour"**. The footer's four columns are
   *Services*, *Company*, *Support*, *Stay Updated*.
2. **No sticky mobile CTA bar.** On a 390 px viewport the only fixed furniture is the cookie dialog,
   the back-to-top disc and the progress bar.
3. **No monospace typography** (see above) and **no `text-gradient` headline** — the hero's second
   sentence is flat `primary-600`.
4. **No counter animation** — `[data-counter]` exists in the bundle but the page ships none. The
   five "figures" are ordinal numbers `01`–`05`, not statistics.

Also unlike the siblings, the header carries a **phone pill** (`rounded-full`, 1 px `ink-100`,
phone icon + `(555) 140-1400`) and the nav switches at **`xl` (1280)**, not `lg` — the markup carries
a comment explaining that the six links, the pill, the toggle and the CTA do not fit at 1024.

## Content inventory (source copy; keep the numbers, rename the brand)

**Licence strip** — `Licence` **NM MM-98 #00000** · *Measurement before equipment* · `Serving`
**Bernalillo County** · right: ★ **4.9** *150+ reviews on Google (sample)*.

**Header** — wordmark **Zephyr** / *INDOOR AIR*; nav *Measurement · Wildfire · Services · Service
areas · About · Contact*; phone pill *(555) 140-1400*; moon toggle; violet *Book an air assessment*.

**Hero (left)** — eyebrow *ALBUQUERQUE · LICENSED MECHANICAL*; `h1` *"We measure first."* + violet
*"Often the answer is not equipment."*; lede *Most indoor air problems in this city are ventilation,
humidity or a filter in the wrong place. A week of logging tells us which. Selling you a purifier
before that is guessing with your money.*; ★★★★★ **4.9** *150+ reviews on Google · sample data*;
four checks — *Seven days of logging before any recommendation* · *You keep the data, in a readable
report* · *Filters sized to your return, not to the shelf* · *Roughly half our assessments need no
equipment*.

**Hero (form card)** — `h2` *Book an air assessment*; *Three fields. We reply within the hour on
weekdays.*; labels *Your name* (`First and last name`), *Phone* (`(555) 000-0000`), *What have you
noticed?* (`Choose the closest match`); options *Stuffy or stale rooms · Dust that never stops · Very
dry air · Smoke days · Allergies indoors · A quote I want checked*; submit *Book the assessment*;
footnote *No obligation. You keep the report whatever it concludes.*

**What we measure** — eyebrow *WHAT WE MEASURE*; `h2` *Five numbers, logged for a week*; lede *A
single spot reading tells you about one moment. A week tells you what your house actually does when
you cook, sleep and close the windows.* Five numbered items, each `NN` + hairline + `h3` + body +
violet label:
1. `01` **Particulate, PM2.5** — *The number that matters in wildfire season and the one a decent
   filter genuinely fixes. We log indoor against outdoor so you can see what your house is already
   removing.* — *The filter question*
2. `02` **Carbon dioxide** — *The best available proxy for whether a room is ventilated. Bedrooms
   above 1,200 parts per million overnight are common here and are a ventilation problem, not a
   purifier problem.* — *The ventilation question*
3. `03` **Relative humidity** — *Albuquerque runs dry, which is its own problem: static, cracked
   woodwork, irritated airways. Occasionally a house runs wet in one room, which is a different and
   more urgent finding.* — *The comfort question*
4. `04` **Volatile organic compounds** — *Rises after cleaning, cooking and new furniture. Useful
   mostly for what it reveals about air exchange, because a house that clears quickly is a house
   that breathes.* — *The air-change question*
5. `05` **Temperature stratification** — *Logged at two heights. A house that is five degrees
   different floor to ceiling has an airflow problem that filtration will not touch.* — *The airflow
   question*

**Why us** — figure `air-panel.svg` (800 × 600 SVG line chart, alt *"A week of logged readings with
carbon dioxide rising overnight in a closed bedroom"*) with caption *Replace with a photograph of
your own logging equipment in place before launch.*; eyebrow *THE AWKWARD PART*; `h2` *Roughly half
of these assessments end with no sale*; lede *That is not modesty, it is the business model. An
honest measurement service is worth paying for precisely because it sometimes says nothing is
wrong.* Four `border-l-2` principles: **Open a window is sometimes the finding** — *A bedroom with the
door shut and no supply is the most common problem we log, and the fix is a transfer grille or a door
undercut rather than a thousand-dollar appliance.* · **Purifiers are oversold** — *A portable unit
sized for one room, running in one room, does help in that room. Sold as a whole-house answer it is
not one, and the difference is rarely explained at the point of sale.* · **Your filter may be too
restrictive** — *A very high MERV filter in a system not designed for it starves airflow, which makes
everything worse while feeling like an upgrade. We measure static pressure before recommending one.*
· **We will tell you it is the cat** — *Occasionally the finding is an allergen source rather than an
air system. That is a genuinely useful answer and it is one nobody selling equipment has an incentive
to give.*

**Services** — eyebrow *WHAT WE DO*; `h2` *Assessment, then whatever the data supports*; lede
*Everything below follows a measurement. Nothing on this list is sold before one.* Six hairline-grid
cards:
**Seven-day air assessment** — *Logging in two to three rooms plus outdoor reference, with a readable
report and a plain-language recommendation.* — **From $345**;
**Ventilation improvements** — *Transfer grilles, bathroom fans that actually vent outside, and
fresh-air intakes. Cheap, effective and the most common outcome.* — **From $420**;
**Whole-house filtration** — *Media filters sized to your return with static pressure measured before
and after, so the cure is not worse than the complaint.* — **From $890**;
**Humidification** — *Relevant here more than in most cities. Sized to the house and set to a range
rather than to a number, with the risks of over-humidifying explained.* — **From $1,150**;
**Duct sealing and balancing** — *Frequently the real fix for a room that is stuffy or stratified, and
it improves the heating and cooling you already paid for.* — **From $850**;
**Wildfire season preparation** — *A filter upgrade your system can actually take, a recirculation
plan, and sealing the places smoke gets in. Booked in spring, not in August.* — **From $290**.
Footless note: *Starting prices are sample data for demonstration. Replace with your own before
launch.*

**Areas** — `h2` *Where we work*; lede *Bernalillo County and the surrounding communities. The
assessment involves leaving equipment for a week and collecting it, so distance genuinely matters.*
Twelve towns on bottom rules: *Albuquerque · Rio Rancho · Corrales · Bernalillo · Los Ranchos ·
Tijeras · Placitas · Sandia Park · Belen · Los Lunas · Bosque Farms · Edgewood.* Note *Replace this
list with your own towns. Written as plain text it is the cheapest local search signal a trade site
has.*

**Testimonials** — pill *Reviews*; `h2` *What people say afterwards*; lede *Sample reviews for
demonstration. Replace with your own, ideally pulled from Google.* Three 5-star cards (stars in
`primary-400`):
1. *"They logged the house for a week and told me my bedroom needed a transfer grille and nothing
   else. Two other companies had quoted whole-house purification."* — **Camilla R.**, *Nob Hill*
2. *"The report showed my new high-MERV filter had cut airflow badly. Swapped it for a properly sized
   media cabinet and the back bedroom is finally comfortable."* — **Desmond A.**, *Rio Rancho*
3. *"Straightforward and unexcitable, which in this industry is unusual. Data, a recommendation, and
   no scare stories about what is in my air."* — **Junko M.**, *Corrales*

**FAQ** — pill *Questions*; `h2` *Before you book*; lede *The questions worth asking anyone selling
indoor air equipment.* Five exclusive rows (*one answer opens; the reference opens them correctly
but exposes no state*):
1. *Do I need an air purifier?* — *Possibly, and possibly not. Portable units work well in the room
   they are in. Whole-house filtration works when the system has the airflow for it. Neither fixes a
   ventilation problem, which is what most of our measurements actually find.*
2. *Why a week, and not a spot reading?* — *Because a spot reading tells you about one moment.
   Carbon dioxide in a closed bedroom looks fine at 4pm and is high at 4am, and that difference is
   the whole finding.*
3. *Is a higher MERV filter always better?* — *No, and this is the most common expensive mistake. A
   filter too restrictive for the system starves airflow, which makes comfort and efficiency worse
   while feeling like an upgrade. Static pressure decides it.*
4. *What about UV lights and ionisers?* — *The evidence is mixed and some ionisers generate ozone,
   which is itself a pollutant. We do not fit them by default and we will not sell you one on the
   basis of a claim we cannot show you data for.*
5. *What if the assessment finds nothing?* — *You get the report and we say so. It happens roughly
   half the time, it is a legitimate outcome, and it is what the fee buys.*

**Closing band** (`bg-primary-700`) — `h2` *Want to know what your air is actually doing?*; lede *A
week of logging, a readable report, and a recommendation that might be to open a window.*; white
*Book an air assessment* + outlined *Call (555) 140-1400* with a phone icon.

**Footer** — blurb *Indoor air quality in Albuquerque. We measure your house for a week before
recommending anything, and the answer is often ventilation rather than a purifier.*; *3420 Central
Avenue Southeast, Albuquerque, NM 87106*; *(555) 140-1400*; *hello@zephyrair.example*; socials
Twitter / Instagram / LinkedIn (**all three are `href="#"`**); **Services** *Air assessments ·
Ventilation · Filtration · Duct sealing* (all → `/services`); **Company** *What we measure · Wildfire
season · Service areas · About*; **Support** *Contact · Privacy · Terms*; **Stay Updated** *Seasonal
maintenance reminders and plain-English notes on what actually needs doing before winter.* + email
field + *Subscribe*; bottom *© 2026 Zephyr Indoor Air. All rights reserved.* + *Privacy Policy ·
Terms of Service*.

## Requirements

### Requirement: Document shell and chrome

The application SHALL render a branded shell around every band: a skip link to the main content as
the first focusable element, a 2 px violet scroll-progress bar, a preloader that is removed on load,
a back-to-top control that fades rather than toggles `display`, and a reveal engine that is a hard
no-op when the visitor asks for reduced motion.

#### Scenario: The page loads with a branded shell

- **GIVEN** the app is served at the site root
- **THEN** the document title contains "Airshed" and the meta description names indoor air quality
- **AND** the first focusable element is a skip link to `#main-content`
- **AND** a 2 px violet progress bar tracks scroll position and reads 0 % at the top of the page
- **AND** no element with `#preloader` remains in the DOM once the window `load` event has fired

#### Scenario: Back to top

- **GIVEN** the visitor has scrolled past 300 px
- **THEN** a 48 px round violet "Back to top" button is visible bottom-right, animated with `opacity`
  and `translateY`
- **WHEN** the visitor activates it
- **THEN** the window returns to the top and the button fades out again

#### Scenario: Reveal engine respects reduced motion

- **GIVEN** the browser reports `prefers-reduced-motion: reduce`
- **THEN** every band renders at full opacity with no transform
- **AND** no reveal observer or timer is created

### Requirement: Licence strip

The page SHALL open with a 36 px in-flow licence strip above the header, in `ink-800`, carrying the
licence number, the two positioning statements and the review score, and it SHALL scroll away with
the page rather than stick.

#### Scenario: Licence strip content

- **THEN** the strip reads `Licence` **NM MM-98 #00000**, *Measurement before equipment*,
  `Serving` **Bernalillo County**
- **AND** the right-hand side shows a single amber star, `4.9` and *150+ reviews on Google (sample)*
- **AND** the strip is 36 px tall with a hairline bottom border and `#efeff3` text

#### Scenario: Strip scrolls away

- **GIVEN** the visitor scrolls down 200 px
- **THEN** the header sticks to the top of the viewport and the licence strip has scrolled out of view

### Requirement: Sticky header

The header SHALL be sticky, 80 px tall at desktop and 64 px below `lg`, and SHALL carry the wordmark,
a six-item nav that only appears at `xl`, a phone pill, a dark-mode toggle and the primary call to
action.

#### Scenario: Desktop header composition

- **GIVEN** a 1440 px viewport
- **THEN** the header shows the wordmark, six nav labels (*Measurement*, *Wildfire*, *Services*,
  *Service areas*, *About*, *Contact*), a rounded phone pill reading *(555) 140-1400*, a moon toggle
  and a violet *Book an air assessment* button
- **AND** the header is 81 px tall including its 1 px bottom border, with a translucent white
  background and blur

#### Scenario: Nav switches at xl

- **GIVEN** viewports of 1024 and 1279 px
- **THEN** the six-item nav is hidden and the hamburger is shown
- **GIVEN** a 1280 px viewport
- **THEN** the six-item nav is visible and the hamburger is hidden
- **AND** no nav label wraps or is covered by the phone pill at any width from 1024 to 1440

#### Scenario: Mobile menu

- **GIVEN** a 390 px viewport
- **WHEN** the visitor opens the menu
- **THEN** a full-width panel below the header shows all six links plus the phone number, and the
  toggle reports `aria-expanded="true"`
- **AND** closing it returns `aria-expanded` to `"false"`

### Requirement: Hero with booking form

The hero SHALL be a 12-column split — copy in `7/12`, form card in `5/12` at `lg` — on the `ink-50`
band, with the headline's second sentence in brand violet, and the form SHALL validate and confirm in
place instead of reloading the page.

#### Scenario: Hero copy and checklist

- **THEN** the eyebrow reads *ALBUQUERQUE · LICENSED MECHANICAL* in `#6138bc` uppercase 14 px / 700
- **AND** the `h1` reads *"We measure first."* followed by *"Often the answer is not equipment."* in
  `#7247dc`, at 60 / 66 with −1.5 px tracking at 1440
- **AND** five amber stars, `4.9` and *150+ reviews on Google · sample data* sit under the lede
- **AND** the four checklist items render two-across at `sm` and one-across below it, each with a
  violet tick

#### Scenario: Form card composition

- **THEN** a white card with 16 px radius, 32 px padding and `shadow-md` sits in the right column at
  1440
- **AND** it contains a name field, a phone field and a problem `<select>` with six options plus the
  empty *Choose the closest match* placeholder
- **AND** the submit button is full-width, violet, 8 px radius, labelled *Book the assessment*
- **AND** the footnote reads *No obligation. You keep the report whatever it concludes.*

#### Scenario: Form validation and confirmation

- **GIVEN** the visitor submits the empty form
- **THEN** the browser blocks submission and the three required fields are marked invalid
- **GIVEN** all three fields are filled
- **WHEN** the visitor submits
- **THEN** the page does not navigate or reload, the values are cleared, and a success message
  confirms the booking in place

### Requirement: What we measure

The band SHALL present five logged metrics as an ordered list of five cards, each opening with a
zero-padded ordinal, a hairline rule that fills the remaining width, a bold title, running copy and a
violet question label, in three columns at `sm` and above.

#### Scenario: Five metric cards

- **THEN** exactly five items render, numbered `01` to `05` in `#7247dc` with `tabular-nums`
- **AND** each `NN` is followed by a 1 px `#efeff3` rule that stretches to the end of the card column
- **AND** the titles are *Particulate, PM2.5*, *Carbon dioxide*, *Relative humidity*,
  *Volatile organic compounds*, *Temperature stratification*
- **AND** the labels are *The filter question*, *The ventilation question*, *The comfort question*,
  *The air-change question*, *The airflow question*

#### Scenario: Metric grid reflows

- **GIVEN** a 1440 px viewport
- **THEN** the list is three columns of 389 px with 24 px gaps and items 4–5 start a second row
- **GIVEN** a 390 px viewport
- **THEN** the list is one column and the ordinals keep their hairline alignment

### Requirement: Why us

The band SHALL pair a 4:3 figure on the left with a heading, a lede and four left-bordered
principles on the right, and the four principles SHALL be marked up as a description list.

#### Scenario: Figure and principles

- **THEN** the figure shows a 576 × 432 placeholder at 16 px radius with a 14 px caption beneath it
- **AND** the `h2` reads *Roughly half of these assessments end with no sale*
- **AND** four `dt` / `dd` pairs render with a 2 px `#7247dc` left border and 20 px of left padding
- **AND** at 390 px the figure follows the copy instead of preceding it

### Requirement: Services grid

The band SHALL render six priced services in a hairline grid — a `1px` gap over an `#efeff3`
background inside a 16 px rounded shell — three columns at `lg`, two at `sm`, one below.

#### Scenario: Cards and prices

- **THEN** six cards render in source order from *Seven-day air assessment* to
  *Wildfire season preparation*
- **AND** each card prints its *From* price in `#6138bc` 14 px / 700: `$345`, `$420`, `$890`,
  `$1,150`, `$850`, `$290`
- **AND** the visible separators are the 1 px gutters, not borders on individual cards
- **AND** every card in a row is the same height and the price sits on the card's baseline

### Requirement: Service areas

The band SHALL list the twelve served towns in a hairline-ruled multi-column list beside the section
copy, two columns at 390 px and three at `sm`.

#### Scenario: Twelve towns

- **THEN** twelve list items render under bottom rules, from *Albuquerque* to *Edgewood*
- **AND** the left column holds the `h2` and lede at 5/12 of a 12-column grid, the list at 7/12
- **AND** at 390 px the list is two columns of equal width with no horizontal overflow

### Requirement: Testimonials carousel

The band SHALL show three quote cards in a working carousel at every width — three visible at
`lg` with controls that move nowhere hidden, two at `md`, one at mobile — with autoplay that pauses
on hover and a dot row that always matches the number of reachable positions.

#### Scenario: Quote cards

- **THEN** three cards render, each with five violet stars, an 18 / 28 medium quote, an initial disc,
  a bold name and a grey town
- **AND** the names and towns are *Camilla R. / Nob Hill*, *Desmond A. / Rio Rancho*,
  *Junko M. / Corrales*

#### Scenario: Carousel state at each width

- **GIVEN** a 390 px viewport
- **THEN** one card is visible, two arrows are shown and three dots render
- **GIVEN** a 768 px viewport
- **THEN** two cards are visible, arrows are shown and two dots render
- **GIVEN** a 1440 px viewport
- **THEN** three cards are visible and **no arrow is rendered at all** — a hidden or disabled arrow
  counts as a failure
- **AND** activating an arrow moves the track one card and updates the active dot

### Requirement: FAQ accordion

The band SHALL render five exclusive accordion items inside `max-w-3xl`, each opening upward to its
measured content height, with `aria-expanded` and `aria-controls` on the button and the collapsed
panel hidden from assistive technology.

#### Scenario: One open at a time

- **GIVEN** all five answers are collapsed (`0` px, `aria-expanded="false"`)
- **WHEN** the visitor opens the third question
- **THEN** its panel expands to its content height, its `+` icon rotates 45°, and it reports
  `aria-expanded="true"` with `aria-controls` matching the panel id
- **WHEN** the visitor then opens the fifth question
- **THEN** the third panel closes and the fifth opens

#### Scenario: Keyboard operation

- **GIVEN** focus is on a question button
- **WHEN** the visitor presses Enter or Space
- **THEN** the panel toggles and focus stays on the button
- **AND** the collapsed panels are not reachable by tab order

### Requirement: Closing band

The page SHALL end its content with a solid `#6138bc` band carrying one heading, one lede and two
calls to action.

#### Scenario: Closing band composition

- **THEN** the band background is `#6138bc` at every viewport
- **AND** the `h2` is white and the lede is `#ede8ff`
- **AND** the first CTA is a white fill with a `#6138bc` label and the second is a 2 px `white/40`
  outline with a phone icon and a `tel:` link
- **AND** both CTAs are full-width below `sm` and auto-width above it

### Requirement: Footer

The footer SHALL be a `#111827` band with a brand column, three link columns, a newsletter field and
a bottom bar, and it SHALL credit Component Dock.

#### Scenario: Four columns

- **THEN** the brand column carries the wordmark, the blurb, the street address, the phone number,
  the email address and three social tiles
- **AND** the *Services*, *Company* and *Support* columns carry four, four and three links
- **AND** every link resolves to an in-page anchor — no `href="#"`, no link to a page that does not
  exist

#### Scenario: Newsletter

- **GIVEN** the visitor submits an invalid address
- **THEN** the field reports an error and no request is made
- **GIVEN** a valid address
- **WHEN** the visitor submits
- **THEN** a confirmation appears in place and the field clears

#### Scenario: Attribution

- **THEN** the footer contains a link to `https://www.componentdock.com/` labelled "Component Dock"
- **AND** the copyright line reads © 2026 Airshed

### Requirement: Dark mode

The page SHALL support a dark theme that the toggle switches at runtime and that persists across
reloads without a flash of the light theme.

#### Scenario: Toggle and persistence

- **GIVEN** the default light theme
- **WHEN** the visitor activates the moon toggle
- **THEN** `html.dark` is added, `localStorage.theme` becomes `dark` and the page background becomes
  `#030712`
- **AND** on the next load the dark class is applied before first paint

#### Scenario: Dark surfaces

- **THEN** the hero and testimonials bands become `#111827`, the *What we measure*, *Services* and
  *FAQ* bands become `#030712`, the form and quote cards become `#111827` and the footer stays
  `#111827`
- **AND** the closing band stays `#6138bc` and paragraph text becomes white or `#d1d5db`

### Requirement: Responsive and accessible

The page SHALL fit the viewport at every tested width and SHALL expose correct semantics for every
interactive element.

#### Scenario: No horizontal overflow

- **GIVEN** viewport widths 1440, 1024, 768 and 390
- **THEN** `document.scrollWidth` equals the viewport width at every step
- **AND** `scrollTo(400, 0)` leaves `scrollX` at 0

#### Scenario: Heading order and landmarks

- **THEN** the document has exactly one `h1` (the hero headline) and one `h2` per band heading, plus
  the hero form card's `h2` — the reference ships **1 / 8 / 15** (`h1 / h2 / h3`)
- **AND** `h3` elements appear only inside the metric list, the service cards and the principle cards
- **AND** the page exposes one `main`, one `header`, one `footer` and a labelled nav

#### Scenario: Interactive affordances

- **THEN** every icon-only control carries an `aria-label`
- **AND** every disclosure reports `aria-expanded` and `aria-controls`
- **AND** every button, link, input and select has a visible focus ring
- **AND** body text keeps at least 4.5:1 against its band background in both themes, and the
  `#6138bc` closing band's white text does too

### Requirement: Provenance and naming

The application SHALL carry the invented brand only, and colour, type and imagery SHALL come from the
documented tokens and placeholders rather than from the reference's assets.

#### Scenario: No source references

- **THEN** no file under `apps/airshed` contains the string `colorlib` or the source design name
- **AND** the wordmark, document title, meta description, copyright line and email domain are all
  "Airshed"

#### Scenario: Placeholders and tokens

- **THEN** every image is a picsum placeholder seeded `airshed-<n>` or a local SVG
- **AND** `src/index.css` `@theme` carries the `primary` ramp (50–700), the `ink` ramp (50–900), the
  Tailwind `gray` values actually used, `--shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1)` and the
  8 / 12 / 16 px radii

## Known defects in the reference (do not reproduce)

1. **The hero booking form has no handler at all.** The `<form>` is `action="#" method="post"` with a
   `data-form` attribute, and the string `data-form` **does not appear anywhere** in the 16 kB
   behaviour bundle. Submitting navigates to `#` and clears what was typed — verified by clicking
   through in Chromium (URL changed to `…/zephyr/#`, the name field came back empty, no toast).
   Ship R4's in-place validation and confirmation.
2. **The footer newsletter does the same.** `data-newsletter-form` is also unhandled, the email input
   has **no `name`**, and there is no `action` — submitting reloads the page.
3. **Three social tiles are dead `href="#"`.** Ship real destinations or drop the tiles.
4. **`#service-areas` is a dead anchor on the home page** — twice (footer *Service areas* and the
   header). The section's id is `areas`; the id `service-areas` exists only on
   `/service-areas/`. Point them at `#areas`.
5. **One `tel:` is malformed**: the footer dials `tel:(555) 140-1400` (spaces and parentheses are
   invalid in a URI) while three other links use `tel:5551401400`. Ship one E.164-style number.
6. **The FAQ accordion exposes no state.** Five buttons, **zero** `aria-expanded` / `aria-controls`,
   and no `aria-hidden` on the collapsed panels — the answer is only hidden by `max-height: 0;
   opacity: 0`. It *does* open (88 px measured for the first answer, icon `rotate(45deg)`,
   exclusivity enforced), so the repair is attributes plus focus order, not behaviour.
7. **The carousel cannot move at desktop** — three slides, `perView = 3` at ≥1024, so `maxIndex = 0`:
   both arrows are force-hidden with inline `display: none` and the dot row is built with a guard
   that renders **zero** dots. At 768 px (2 per view, 2 dots) and 390 px (1 per view, 3 dots) it
   works. Ship real controls at every width, or show three static cards at `lg`.
8. **`placeholder:text-ink-300` names a token that does not exist.** No `ink-300` rule is compiled
   (`0` matches for `ink-300` in the sheet), so the three placeholders compute to
   **`rgb(185, 185, 200)`** — the UA's `currentColor`-derived default — instead of a ramp value.
   Ship `ink-300: #b9b9c8` so the measured colour is reproduced deliberately (see R15).
9. **`font-semibold` has no face to land on.** The inline `@font-face` set ships DM Sans **400 / 500 /
   700 only**, while nav labels, labels, FAQ questions and `dt` all ask for 600 — the browser
   synthesises or rounds to 500/700. Ship 400/500/600/700 from Google Fonts (all four weights return
   **200** on `css2?family=DM+Sans:wght@400;500;600;700`).
10. **The JSON-LD is broken.** The inline block reads
    `{"@context":"https://***@type":"HVACBusiness", …}` — the context is a redaction placeholder and
    the `@type` key is gone (the quote and comma were lost), so the structured data declares nothing.
11. **The page paints two different neutral families.** Bands 1–4 use the custom `ink` ramp
    (`#272733` headings, `#696980` body) and bands 5–7 switch to Tailwind `gray` (`#111827`
    headings, `#4b5563` body). On a wide screen the seam is visible at full-page zoom. Ship one
    neutral family and note the change.
12. **The preloader is removed on `window.load`.** If any asset stalls, a `z-[100]` white overlay
    holds the whole page. Ship a timeout-guarded removal.
13. **Nav has no active state on the home page.** The scroll-spy looks up `document.getElementById`
    for values like `/services` (inner-page paths), so nothing is ever observed: after scrolling to
    `#contact`, `.nav-active` count is **0**. A one-pager needs an in-page scroll-spy.
14. **At 320 px the page reports `scrollWidth` 352 with `scrollX` 0.** The overflow is the carousel
    track (three 288 px slides inside `overflow-hidden`), i.e. **clipped, not scrollable** — record
    it as a clipped column, and do not ship a 320 px layout that clips the third card.
15. **Every nav destination is a real inner page** (eight of them, all 200, trailing-slash only), so a
    single-page recreation has to invent the in-page anchors: *Measurement* → `#process`, *Wildfire*
    → the wildfire service card, *Services* → `#services`, *Service areas* → `#areas`, *About* →
    `#why-us`, *Contact* → `#contact`.

## Verification checklist

- [ ] `openspec/specs/template-airshed/spec.md` is the only spec for this app; `npm run spec:validate`
      passes
- [ ] `apps/airshed` exists, package renamed `@free-react-templates/airshed`, `public/CNAME` =
      `airshed.free.componentdock.com`, `homepage` = `https://airshed.free.componentdock.com`
- [ ] `npm install` at the repo root; `grep -c "free-react-templates/airshed" package-lock.json` ≥ 1
- [ ] DM Sans loaded via one Google Fonts `<link>` at **400 / 500 / 600 / 700**; no mono face
- [ ] `src/index.css` `@theme` carries the `primary` ramp (50 `#f5f3ff` … 700 `#6138bc`), the `ink`
      ramp (50 `#f8f8fa` … 900 `#171720`), `ink-300 #b9b9c8`, the Tailwind `gray` values used,
      `--shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1)` and the 8 / 12 / 16 px radii
- [ ] Nine bands in source order: licence strip + header · hero (with form) · what we measure · why
      us · services · areas · testimonials · FAQ · closing band · footer
- [ ] Licence strip 36 px `#272733` with the exact four statements and the amber star
- [ ] Header 64 / 80 px, sticky, nav at `xl`, phone pill, toggle, violet CTA
- [ ] Hero: 7/5 split, violet second sentence, five amber stars, 2×2 checklist, working form
- [ ] Five metric cards with `01`–`05`, hairline rules, violet question labels
- [ ] Why us: 576 × 432 figure (4:3), four `border-l-2` principles in a `dl`
- [ ] Six service cards in a `gap: 1px` hairline grid with prices 345 / 420 / 890 / 1,150 / 850 / 290
- [ ] Areas: twelve towns, 2 columns at 390 px, 3 at `sm`
- [ ] Testimonials: three cards, real controls at 390 and 768, three visible with **no** arrows at
      1440, dots = reachable positions
- [ ] FAQ: five items, one open at a time, `aria-expanded` + `aria-controls` correct, `+` rotates
- [ ] Closing band `#6138bc` with white fill + outlined phone button
- [ ] Footer: four columns, all links resolve in-page, working newsletter, Component Dock link
- [ ] Dark mode works on every band (toggle adds `.dark`, persists via `localStorage.theme`, no flash)
- [ ] `scripts/verify-app.sh airshed` green: typecheck, lint, 100 % coverage tests, build
- [ ] No `colorlib` / `Zephyr` string under `apps/airshed`; picsum seeds `airshed-*`
- [ ] `TEMPLATES.md` row appended at the end of `## Business` after *Zeta* (count 385 → 386), only at
      claim time
