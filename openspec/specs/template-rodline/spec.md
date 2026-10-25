# Template: Rodline (Business — emergency drain clearing, sold on a single flat price)

## Purpose

A one-page site for a **drain-clearing crew** whose entire proposition is one number: *"Blocked drain
cleared today, from $49."* There is no hero photograph, no navigation and no second page to read — the
page is a **quote form with the argument built around it**. The composition is deliberately asymmetric:
a 7-column copy column (headline, four proof ticks, a 30 px phone number, an amber rating line) against
a **5-column white card** that asks for three fields and promises a call back "within fifteen minutes
during business hours".

The palette is a single **royal blue** on a cool paper ground: `primary-600 #2447f2` for every solid
button, the second line of the headline, the tick glyphs and the closing band; `ink-800 #101828` for the
text and the 44 px offer bar; `ink-50 #f6f7fb` for the hero and the "why" band; Tailwind's default
`gray-50 #f9fafb` for the reviews band. Nothing else is coloured except five amber stars in the hero and
**five blue stars** in the reviews — the same element, two different treatments, in the same page.

Three details give the design its discipline:
**a ruled services grid** (three cells separated by a single 1 px `ink-100` gutter, `gap: 1px` over a
`bg-ink-100` ground inside a `rounded-2xl` clip, so the band reads as one ruled table rather than three
cards);
**a `<dl>` of three claims each hanging off a 2 px `primary-600` left rule** (`border-l-2 pl-5`) — the
only place on the page with a vertical rule; and
**a headline that shifts colour mid-sentence** (`Blocked drain cleared today,` in ink, `from $49.` in
blue), which is the whole marketing argument compressed into one line.

The page is real US local-service marketing, not a template skeleton: it carries a **dismissible offer
bar**, a **pulsing availability dot**, a **sticky call bar below 1024 px**, a **five-item FAQ that opens
one panel at a time**, and a form that posts to a real thank-you page. Site-wide dark mode is class-based
and follows `prefers-color-scheme` (there is **no toggle button** — see Requirement 13), and every band
is themed.

Recreation of the ColorLib "Flowpage" design
(https://colorlib.com/wp/template/flowpage/, live preview
https://preview.colorlib.com/theme/flowpage/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

* **Source slug:** `flowpage`
* **ColorLib page:** https://colorlib.com/wp/template/flowpage/ — HTTP 200, **111,768 B**
  (sha256 `709ca7c7…32e4`), `<title>` **"Flowpage - Plumbing Landing Page Template 2026 - Colorlib"**,
  `<h1>` **"Flowpage"**. Its `og:image` is
  `https://colorlib.com/wp/wp-content/uploads/sites/2/flowpage-template.jpg` — so this design's
  screenshot name is `flowpage-template.jpg` (the naive `flowpage.jpg` is not the catalogue path).
* **Live preview:** https://preview.colorlib.com/theme/flowpage/ — **HTTP 200, 45,731 B**
  (sha256 `c49ae422…fb53e`), read 2026-10-25 with `curl -4` (**every** fetch on this host needs `-4`:
  the machine resolves an IPv6 address that is blackholed). An **Astro** build: one hashed stylesheet
  (`_astro/Base.DIpRwtfA.css`, 46,310 B), one hashed behaviour bundle
  (`_astro/Base.astro_astro_type_script_index_0_lang.BLoalVWc.js`, 16,233 B) and the Astro view-transition
  router (`_astro/ClientRouter…CYDbzu1r.js`, 16,357 B). No Bootstrap, no jQuery, no `@font-face`, no
  per-page CSS, no inline styles beyond what the scripts write.
  `/theme/flowpage/index.html` is the same **45,731 B** document (byte-identical to the directory URL) —
  a no-op link, never a 404.
* **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/**flowpage-template.jpg** — HTTP 200,
  **364,662 B**, `image/jpeg`, **2400×1892** (sha256 `78cd21dc…3076`). Like most recent catalogue
  captures it is a **macOS browser window on a light desk ground**, framing the live page from the offer
  bar down to the bottom of the first "why" photograph — i.e. it confirms the offer bar, the header, the
  hero + quote card and the first two `<dl>` claims, and shows nothing of the services grid, the reviews,
  the FAQ, the closing band or the footer. The live DOM is the authority for everything below that line.
* **New name:** `rodline` (`apps/rodline`, `@free-react-templates/rodline`) — one lowercase word:
  a **drain rod** is the tool this trade clears a line with, and "-line" is the noun the job is about.
  It is not the source name and not a product name. No `apps/rodline`, no
  `openspec/specs/template-rodline/`, no `docs/templates/rodline/`,
  `git grep -il rodline origin/main` prints nothing, `grep -ci rodline TEMPLATES.md` is **0**, and the
  three ColorLib URL forms `wp/template/rodline/`, `preview.colorlib.com/theme/rodline/` and
  `preview.colorlib.com/theme/bootstrap/rodline/` all return **404** (checked 2026-10-25).
  Do not rename without re-running those five checks.
* **Deploy target:** https://rodline.free.componentdock.com (`apps/rodline/public/CNAME`, `homepage` in
  `apps/rodline/package.json`)
* **Category:** **no `TEMPLATES.md` row exists yet** — see *Why this design has no row* below.
  Suggested home: **`## Business (371)`** (line 880 on `origin/main` `04143c41b`), the section that
  already holds every sibling trade design from this catalogue-gap queue (Thermly, Plantroom, Veranda,
  Flowcert, Aquifer, Smallpaw, Kettle, Emberly, Brassworks) plus the shipped plumbing design
  `pipeflow` (ColorLib Plumber). The section is ordered by **ColorLib source name**, so this row belongs
  between **`Florist`** and **`Foundation2`** (`Fl-o` < `Fl-w` < `Fo`).

### Why this design has no row (catalogue gap, measured 2026-10-24/25)

`TEMPLATES.md` is exhausted — **0** `- [ ]`, every row `[x]` — but the catalogue is not complete: all 40
pages of https://colorlib.com/wp/templates/ were crawled and compared with the 1,631 slugs the checklist
cites, and **256 designs are on the listing that the checklist never recorded** (42 standalone + 214
snippet variants). The census and both buckets are in `docs/catalog-coverage.md`, whose standalone table
already carries this design's line: `flowpage` — *preview 200, 45731 B* (the byte count matches this
run's fetch exactly).

**Fourteen** of the 42 standalone designs were prepped before this run — eight now shipped (Thermly,
Plantroom, Veranda, Flowcert, Aquifer, Smallpaw, Kettle and Chalkline, whose app merged at `d1f599afd`
while this prep was being written) and six pending (Closeknit, Stoke, Percline, Emberly, Quarto,
Brassworks) — and they established the hand-off pattern this spec follows.
This is the **fifteenth**. No spec on main names `theme/flowpage` (`git grep -l 'theme/flowpage'
origin/main -- openspec docs` → nothing), no app named `flowpage` or `rodline` exists, so this prep is
not a duplicate.

**Implementer note:** because there is no row yet, add one **before** the PR claims a row — paste this
line into `## Business` **in source-name alphabetical order** (between **Florist** and **Foundation2**)
and bump the heading count:

```
- [x] **Flowpage** — [colorlib](https://colorlib.com/wp/template/flowpage/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/flowpage-template.jpg) · [rodline](https://rodline.free.componentdock.com)
```

⚠️ **Re-measure the count before you write it.** On `origin/main` `04143c41b` the section reads
`## Business (371)` over **371** rows (line 880; the next heading is `## Charity (37)` at line 1254), and
`Florist` is line 1027, `Foundation2` line 1028. Adding Flowpage makes **372**. Count the rows; do not
copy this number.

Do not invent a second row for the same slug.

## Reference readings (2026-10-25, `curl -4`)

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/flowpage/` page (DOM authority) | 45,731 | `c49ae4222c032eb348db8dec49cfa6911ad4937d0a5b5b12ebd0a3911aafb53e` |
| `_astro/Base.DIpRwtfA.css` (token authority) | 46,310 | `9df9388eadeebf320a41e554d59b85d35630e2c9c7f813a426dec22cd0d68dad` |
| `_astro/Base.…BLoalVWc.js` (behaviour authority) | 16,233 | `e26cc055dec23e63fafecd3386a2edaa4132534a9c945f6210adec2fd90a92f2` |
| `_astro/ClientRouter…CYDbzu1r.js` (view transitions) | 16,357 | `69eb3ac5c16a8d9a6aee7b815f71aa468701cc9c731c9dd5660b58e0dd5e399c` |
| catalog screenshot `flowpage-template.jpg` (2400×1892 JPEG) | 364,662 | `78cd21dc04c120b9b9f36ec8ab0d29de70ecfd46a0fb6dc49eea68b355513076` |
| `colorlib.com/wp/template/flowpage/` (catalog entry) | 111,768 | `709ca7c712fac0e68a47a336a6e9488195bc3d0c9659b1458cd77fe806ac32e4` |
| `privacy/` page | 24,163 | `c2d98edd2d3ab0ce975305c927aab98e8415fa52e28d0aaa8fc2477d145bef7b` |
| `terms/` page | 22,952 | `dd3ff66f1c960689301594e0ee5fe952070f5899a7658049bb2fb86cd999dc4f` |
| `thank-you/` page | 16,593 | `9b7f523225b44fe13db6c7f5dae5a92897d9b0538e0fa28fbc4aaa0bdfe746ab` |
| `sitemap.xml` | 425 | generic placeholder (`https://example.com/…`, six URLs — **not** this site's pages) |
| `robots.txt` | 65 | `Allow: /\nSitemap: https://example.com/sitemap.xml` |

**The behaviour bundle is byte-identical to the one the Brassworks prep recorded** (same 16,233 B, same
`e26cc055…92f2`): the Astro family ships **one** shared behaviour module and only the CSS and the content
differ. Read the *page's* `data-*` hooks against that module — most of what it can do is dormant here
(see *Behaviour the recreation must reproduce*).

### The reference is four live pages, not one

All probed `-L`; the trailing-slash and extension-less forms resolve to the same bytes.

| page | `<title>` | bytes | built? |
| --- | --- | ---: | --- |
| `/theme/flowpage/` | `Drain clearing in Denver from $49 | Flowpage Plumbing` | 45,731 | **yes** |
| `privacy/` | `Privacy Policy | Flowpage Plumbing` | 24,163 | no — 10 numbered `h2` |
| `terms/` | `Terms of Service | Flowpage Plumbing` | 22,952 | no — 12 numbered `h2` |
| `thank-you/` | `Thanks — we have your details | Flowpage Plumbing` | 16,593 | no — the form's action (`h1` "Got it. We will ring you back.") |
| `services`, `contact`, `about`, `404` | — | 9 B | **404** (a landing page with no sub-pages) |

Every page carries `<meta name="robots" content="noindex, nofollow">` (host chrome, not a design
feature) and `<meta name="astro-view-transitions-enabled" content="true">`.

Per house precedent, **only the landing page is built**; the other three are inventoried for the copy a
single-page recreation has to absorb. The **`thank-you/` copy is in scope** — it is what the quote form
says after a successful submit (Requirement 5).

**Inner-page inventory** (reference only): privacy = 10 sections (collection, use, sharing, security,
cookies, rights, third-party links, children, changes, contact); terms = 12 sections (acceptance,
services, accounts, payment, IP, prohibited conduct, liability, warranties, termination, governing law,
changes, contact); thank-you = `h1` *"Got it. We will ring you back."* + one paragraph about fifteen
minutes / overnight + the phone + a demo notice that nothing was actually submitted.

## Design tokens (measured from `Base.DIpRwtfA.css` and the live render)

Tailwind v4.3.3, compiled to literal hex per utility — there is **no `:root` custom-property block for
the palette** (the only custom properties in the sheet are Tailwind's own machinery plus `--radius-*`),
so the values below are read from the emitted rules, not from a theme block. **Exactly one class the
markup uses has no emitted rule** — see *The one un-emitted class*.

### Brand ramp — `primary` (royal blue)

| token | hex | where |
| --- | --- | --- |
| `primary-50` | `#eef1fe` | hover ground of the white pill CTA in the closing band (`hover:bg-primary-50`) |
| `primary-100` | `#dde3fd` | **the two band badges** (`Reviews`, `Questions`), the 48 px avatar discs |
| `primary-200` | `#bac6fb` | defined and unused on the landing page |
| `primary-300` | `#8e9ff8` | `dark:text-primary-300` on badges; the offer bar's phone hover |
| `primary-400` | `#5e72f6` | **the five review stars** (`text-primary-400`), `dark:text-primary-400` eyebrows |
| `primary-500` | `#3854f4` | input focus border + `ring-primary-500/20`, `aria-pressed` border |
| `primary-600` | `#2447f2` | **brand** — every solid button, the headline's second line, the tick glyphs, the `<dl>` left rules, the scroll-progress bar, the preloader arc, **the closing band's ground** |
| `primary-700` | `#1734c8` | **every eyebrow on a light ground**, the services price lines, the closing band's CTA label, button hover |
| `primary-800` | — | **not emitted** — do not invent it |
| `primary-900` | `#0f2179` | `dark:bg-primary-900/50` behind badges only |

### Neutral ramp — `ink`

| token | hex | where |
| --- | --- | --- |
| `ink-50` | `#f6f7fb` | **hero band** and **why band** grounds (measured `rgb(246,247,251)`) |
| `ink-100` | `#eceef4` | **every structural hairline**: header bottom border, services mosaic gutter + outer border, the form card's border, the sticky call bar's top border |
| `ink-200` | `#d6dae4` | input borders (`border-ink-200`), the mobile sticky bar's rule |
| `ink-300` | `#aeb5c6` | input placeholders, the footer's demo notice |
| `ink-400` | `#727c93` | the form's fine print, the figure caption, the footer's copyright line |
| `ink-500` | `#4b5468` | **body copy on light grounds** — hero lede, band ledes, card blurbs, `<dd>` text |
| `ink-600` | `#2e3648` | the rating line, the dark-mode eyebrow alternative |
| `ink-700` | `#1c2333` | the hero tick labels, form labels, the footer phone |
| `ink-800` | `#101828` | **the copy's base ink** — every headline, the logo wordmark, **the offer bar's ground** (measured `rgb(16,24,40)`) |
| `ink-900` | `#0a101c` | defined; unused on the landing page |

### Greys, amber and the dark surfaces

| token | value | where |
| --- | --- | --- |
| `gray-50` | `#f9fafb` | **the reviews band's ground** (measured `rgb(249,250,251)`) — *not* `ink-50` |
| `gray-100` | `#f3f4f6` | the FAQ's 32 px plus-circle (`bg-gray-100`) |
| `gray-200` | `#e5e7eb` | the FAQ's `divide-y` rules, the preloader spinner's track |
| `gray-600` | `#4b5563` | FAQ answers (`text-gray-600`) |
| `gray-900` | `#111827` | **`body` colour** and the review/FAQ headings (`text-gray-900`) |
| `amber-400` | `#fbbf24` | **the hero's five rating stars only** (`text-amber-400`) |
| `gray-900` dark | `#111827` | `dark:bg-gray-900` on the hero + why bands (measured dark hero `rgb(17,24,39)`) |
| `gray-950` dark | `#030712` | `dark:bg-gray-950` — **the dark body ground** (measured `rgb(3,7,18)`), header at 95 %, footer, services + FAQ bands |

### The one un-emitted class (fidelity trap — read before writing CSS)

Exactly one class in the markup has **no rule**: `data-emergency`, `data-sticky-call` and `data-phone`
are inert markers (they appear in **no** function of the behaviour bundle), so they cost nothing — but
`shadow-soft` **is** emitted (`0 4px 16px -4px rgb(0 0 0 / .1)`) and is what the review cards use, so do
not substitute `shadow-lg`. A scripted census of all **269 distinct classes** in the document against the
sheet returns **0 missing**; the only rule-less things are attributes, not classes. Record any class you
add that the sheet does not carry.

### Typography

One family, **declared and not loaded**:

* **Inter** — the sheet's base layer sets `html { font-family: Inter, system-ui, sans-serif }`, but it
  ships **no `@font-face`, no `/cf-fonts/` block and no Google Fonts `<link>`**, so on a machine without
  Inter installed the preview renders in `system-ui` (the measured `font-family` string is still
  `Inter, system-ui, sans-serif`; the glyphs are the OS fallback). For the recreation load **Inter** from
  Google Fonts via `<link>` — `css2?family=Inter:wght@400;500;600;700&display=swap` → **HTTP 200**
  (verified; the axis-free `css2?family=Inter` is also 200). Never copy a font file.
* Weights used: **400, 500, 600, 700**. No serif, no italics, no display face, no uppercase headings —
  the only uppercase is the 14 px eyebrow / availability label, `tracking-wide` (**0.025em**, measured
  `0.35px`).
* `tracking-tight` = **-0.025em** on the `h1` and every band `h2` (measured `-1.5px` at 60 px, `-0.9px`
  at 36 px), and on the 30 px phone link (`-0.75px`).

Measured type scale (`body` 16 / 1.5, `#111827` on `#fff`):

| role | reference rule | 1440 px | 992 px | 390 px |
| --- | --- | ---: | ---: | ---: |
| `h1` (hero) | `text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl` | **60** / 66, 700, `-1.5px` | 48 / 52.8 | **36** / 39.6, `-0.9px` |
| hero lede | `text-lg` (`ink-500`) | 18 / 28 | 18 | 18 |
| hero tick | `text-base font-medium` (`ink-700`) | 16 / 24, 500 | 16 | 16 |
| hero phone link | `text-2xl font-bold tracking-tight sm:text-3xl` | **30** / 36, `-0.75px` | 30 | **24** |
| rating line | `text-sm` (`ink-600`) | 14 / 20 | 14 | 14 |
| card `h2` | `text-xl font-bold lg:text-2xl` | **24** / 32, 700 | 20 | 20 |
| card sub | `text-sm` (`ink-500`) | 14 / 20 | 14 | 14 |
| field label | `text-sm font-semibold` (`ink-700`) | 14 / 20, 600 | 14 | 14 |
| input / select | `text-base`, `px-4 py-3` | 16 / 24, radius 8 | 16 | 16 |
| submit button | `text-base font-bold` | 16 / 24, 700, `py-3.5` | 16 | 16 |
| fine print | `text-xs` (`ink-400`) | 12 / 16 | 12 | 12 |
| eyebrow | `text-sm font-bold uppercase tracking-wide` | 14 / 20, 700, `0.35px`, `primary-700` | 14 | 14 |
| band `h2` | `text-3xl font-bold tracking-tight sm:text-4xl` | **36** / 40, `-0.9px` | 36 | **30** / 36 |
| band lede | `text-lg` (`ink-500`) | 18 / 28 | 18 | 18 |
| `<dt>` / `<dd>` | `text-base font-bold` / `text-base` | 16 / 24, 700 / 400 | 16 | 16 |
| figure caption | `text-sm` (`ink-400`) | 14 / 20 | 14 | 14 |
| service `h3` | `text-lg font-bold` | 18 / 28, 700 | 18 | 18 |
| service price | `text-sm font-bold` (`primary-700`) | 14 / 20, 700 | 14 | 14 |
| review quote | `text-lg font-medium` (`gray-900`) | 18 / 28, 500 | 18 | 18 |
| review name / city | `font-semibold` / `text-sm` | 16 / 24, 600 / 14, 400 | 16 / 14 | 16 / 14 |
| FAQ question | `text-lg font-semibold` | 18 / 28, 600 | 18 | 18 |
| FAQ answer | `text-base` (`gray-600`, `pt-4`) | 16 / 24 | 16 | 16 |
| availability label | `text-sm font-semibold uppercase tracking-wide opacity-90` | 14 / 20, 600, `0.35px` | 14 | 14 |
| availability line | `text-lg font-bold lg:text-xl` | **20** / 28, 700 | 20 | 20 |
| footer line | `text-sm` (`ink-400`) | 14 / 20 | 14 | 14 |
| footer notice | `text-xs` (`ink-300`) | 12 / 16 | 12 | 12 |

### Radii, shadows, focus

| element | measured | notes |
| --- | --- | --- |
| `rounded-lg` | **8 px** | header phone CTA, every input, the select, the submit button |
| `rounded-xl` | **12 px** | defined by the sheet; unused on this page |
| `rounded-2xl` | **16 px** | the quote card, the why-us photograph, the services mosaic's outer clip, every review card |
| `rounded-full` | **50 %** | the closing band's white pill CTA, the mobile sticky bar's blue pill, the two badges, the 48 px avatar discs, the 32 px FAQ plus-circle, the pulsing dot |
| shadows | **two only** | `shadow-md` on the quote card (`0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px …`); `shadow-soft` on review cards (`0 4px 16px -4px rgb(0 0 0 / .1)`). The carousel arrows carry `shadow-md` but are hidden. **The header never gains a shadow** (see *dormant hooks*) |
| focus (fields) | `focus:border-primary-500` + `focus:ring-2 focus:ring-primary-500/20` + `outline-none` | all three controls |
| focus (buttons) | `focus:ring-2 focus:ring-primary-500 focus:ring-offset-2` | submit button only |
| skip link | `focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg` | 8 px radius, white text, fixed 16/16, `z-[80]` |

## Rhythm, containers and measured heights

* **Container** — Tailwind's default `.container`: `width: 100%`, `mx-auto`, `px-4` (16) below 1024 and
  `lg:px-8` (32) above. Measured `max-width` is **1280 px at 1440** (content box 1,216 starting at x=112),
  **768 px at 992** with 16 px padding, and **none at 390** (358 content). This is *not* `max-w-7xl` on
  every band — the header, the hero, the services head and the footer all share `.container`, and the
  band heads inside the reviews/FAQ bands are additionally `mx-auto max-w-3xl` (768).
* **Offer bar** — `py-2.5`, `#101828`, 14 px text; measured **44 px** at ≥1024, **60 px** at 992 (the
  second sentence wraps), **44 px** at 390 with the second sentence hidden (`hidden sm:inline`).
* **Header** — `sticky top-0 z-50`, `bg-white/95` + `backdrop-blur` (dark `bg-gray-950/95`), 1 px
  `ink-100` bottom border. Row is `h-16` (64) → **`lg:h-18` (72)**: measured **73 px at ≥1024, 65 px
  below**. It is **not** the first element on the page — the offer bar sits above it and scrolls away.
* **Hero** — no photo; `py-12` (48) → `lg:py-16` (64); 12-column grid `gap-10` → `lg:gap-14` (**56**),
  copy `lg:col-span-7`, card `lg:col-span-5`; card padding `p-6` → `lg:p-8`. Measured band **656 px** at
  1440, 692 at 1024, 1,056 at 992, 1,225 at 390.
* **`section` bands** (why + services) — `padding-block: 80px` → **112 px** at ≥1024 (`py-20 lg:py-28`).
  The reviews and FAQ bands write the same padding inline (`py-20 lg:py-28`).
* **Why band** — 2-column grid, `gap-12` → `lg:gap-16` (64); figure `order-last lg:order-first`
  (photograph **below** the copy at every width <1024).
* **Services mosaic** — `mt-12` (48) above, `gap: 1px` over `bg-ink-100`, `rounded-2xl`,
  `overflow-hidden`, 1 px `ink-100` outer border; cells `p-6` → `lg:p-8`, `flex flex-col`, the blurb
  `flex-1` so the price line sits on the baseline of every cell.
* **Emergency band** — `py-6` → `lg:py-8`: measured **116 px** at ≥1024, **168 px** at 992 and below
  (the CTA drops to its own row).
* **Footer** — `py-10` (40) + 1 px `ink-100` top border; measured **141 px** at ≥1024, **193 px** at 390.
* **Document height** (measured, live): **3,904 px at 1440 and 1280** · 4,048 at 1024 · **4,895 at 992 and
  768** · 5,005 at 576 · **5,333 at 390** · 5,455 at 360. Band sum at 1440: 44 + 73 + 656 + 688 + 626 +
  740 + 820 + 116 + 141 = **3,904**. At 390 the bands sum to 5,334 against a 5,333 document (1 px of
  rounding, not a defect).
* **Mobile sticky bar** — `fixed inset-x-0 bottom-0 z-40`, `p-3`, white (dark `gray-900`), 1 px `ink-200`
  top border, `lg:hidden`; measured **73 px** and present at 992 / 768 / 576 / 390 / 360. It **overlaps
  the footer's last line by 33 px** at 390 (footer bottom 5,293, document 5,333) — the reference does not
  compensate. See Deviation 3.

## Reference document order

```html
<a href="#main-content" class="sr-only focus:not-sr-only …">Skip to content</a>
<div id="scroll-progress" class="fixed top-0 left-0 z-[60] h-0.5 bg-primary-600"></div>
<div id="preloader" class="fixed inset-0 z-[100] …">                       <!-- spinner, removed on load -->
<div class="bg-ink-800 text-white" data-offer-bar>                        <!-- 44 px offer bar (scrolls away) -->
<header class="sticky top-0 z-50 … border-b border-ink-100 …">            <!-- logo + ONE call CTA, no nav -->
<main id="main-content">
  <section class="bg-ink-50">                <!-- 1 hero: 7/5 split — copy + quote card -->
  <section id="why-us" class="section bg-ink-50">   <!-- 2 figure + eyebrow/h2/lede + 3-item <dl> -->
  <section id="services" class="section bg-white">  <!-- 3 head + 3-cell hairline mosaic -->
  <section id="testimonials" class="bg-gray-50 …">  <!-- 4 badge/h2/lede + 3-card carousel -->
  <section id="faq" class="bg-white …">             <!-- 5 badge/h2/lede + 5-row accordion -->
  <section id="emergency" class="bg-primary-600 …"> <!-- 6 availability + white pill CTA -->
<div class="fixed inset-x-0 bottom-0 … lg:hidden" data-sticky-call>  <!-- mobile call bar -->
<footer class="border-t border-ink-100 bg-white py-10 …">          <!-- one flex row + notice line -->
```

**There is no `<nav>` and no mobile menu anywhere in the document** — `grep -c '<nav'` is **0**. The
header is the wordmark and one phone button; that is the entire navigation. Do not add a menu "because a
header needs one".

## Content inventory (verbatim roles — paraphrase freely, keep the kind)

| # | band | copy |
| --- | --- | --- |
| 0 | offer bar | bold `$49 drain clearing this month` + muted `Standard kitchen and bath lines. Mains quoted separately.` + phone + dismiss ✕ |
| 1 | header | wordmark `Flowpage` (F glyph + blue dot) · phone CTA `(555) 010-0163` (`Call now` <640) |
| 2 | hero | `h1` `Blocked drain cleared today,` / **`from $49.`** (blue) · lede `Denver drain clearing and plumbing repairs with a flat-rate price agreed before we start. Book before noon and we come the same day.` · 4 ticks · phone `(555) 010-0163` · ★★★★★ `4.8` `340+ reviews on Google · sample data` |
| 2 | quote card | `Book a slot` · `Three fields. We ring back within fifteen minutes during business hours.` · `Your name` / `Phone` / `What do you need?` · select placeholder `Choose the closest match` + 6 options (`Blocked drain`, `Burst pipe or leak`, `No hot water`, `Water heater replacement`, `Toilet or faucet repair`, `Something else`) · button `Get my flat-rate price` · `No obligation. We never sell your details.` |
| 3 | why | eyebrow `Why this number` · `h2` `Three reasons people ring us back` · lede `Nothing here is unusual. It is simply what a plumbing company should do and most do not.` · 3 `<dt>/<dd>` pairs (`The price is agreed first`, `You see what caused it`, `Same-day, genuinely`) · figure caption `Replace with a photograph of your own crew before launch.` |
| 4 | services | eyebrow `What we do` · `h2` `Three things, done properly` · lede `This crew does drains, repairs and water heaters. For remodels and re-pipes we will point you at someone who does those all day.` · 3 cells (`Drain clearing` / `From $49 this month`, `Leaks and repairs` / `From $129`, `Water heaters` / `From $1,150 installed`) |
| 5 | reviews | badge `Reviews` · `h2` `What people said afterwards` · lede `Sample reviews for demonstration. Replace with your own.` · 3 quotes, each 5 stars + initial-disc + name + city (`Brandon L.` / `Denver`, `Sofia H.` / `Lakewood`, `Neil A.` / `Aurora`) |
| 6 | FAQ | badge `Questions` · `h2` `Before you book` · lede `The five things people ask before they fill this in.` · 5 Q/A (`Is the $49 a real price?`, `What if it needs more than a clear?`, `Do you charge to come out?`, `How quickly can you get here?`, `Are you licensed and insured?`) |
| 7 | emergency | `Same-day availability` (with pulsing dot) · `Book before noon and we come today.` · white pill CTA `(555) 010-0163` |
| 8 | footer | `© 2026 Flowpage Plumbing.` · phone · `Privacy` · `Terms` · `Sample content for template demonstration. Replace every price, licence number and review before launch.` |
| 9 | sticky bar | `Same-day availability · (555) 010-0163` |

The recreation keeps the **kind** of every line and rewrites the business name and numerals: **Rodline**
never says "Flowpage", "ColorLib" or a real licence number (AGENTS.md rule 5). Keep one phone number
throughout (`tel:` everywhere), keep the offer bar's price promise, and keep the demo-notice line — it is
part of the design's honesty, and it is what makes the placeholder copy read as intentional.

## Behaviour the recreation must reproduce

Seven things actually run on this page, and three things that look present do **not**:

| live | mechanism (from the 16,233 B bundle / inline scripts) |
| --- | --- |
| **theme** | inline `applyTheme()` in `<head>`: `localStorage.theme === 'dark'` **or** (no stored key **and** `prefers-color-scheme: dark`) → `html.dark`; re-applied on `astro:after-swap` |
| **preloader** | full-screen spinner; on `load` set `opacity: 0`, remove after **300 ms** (steady state: gone) |
| **scroll progress** | `#scroll-progress` width = `scrollY / (scrollHeight - innerHeight) * 100` on passive `scroll` |
| **reveal** | `[data-animate]` (**14** elements, `fade-in-up`, delays `100/150/200`): if `top > innerHeight * .8` set `opacity 0` + `translateY(20px)` + `transition .6s ease-out`, then an `IntersectionObserver` (`threshold .1`, `rootMargin '0px 0px -10% 0px'`) reveals and unobserves. **Skipped entirely** under `prefers-reduced-motion: reduce` |
| **offer dismiss** | `[data-offer-dismiss]` click → `[data-offer-bar]` is **removed** from the DOM (no persistence) |
| **FAQ accordion** | `[data-faq-toggle]` (5) → its `nextElementSibling` gets `max-height: scrollHeight px` + `opacity 1`; every *other* panel resets to `0px`; `[data-faq-icon]` rotates **45°**. All five start closed (`max-height: 0px; opacity: 0` inline) |
| **quote form** | native: three `required` controls; on submit it **posts to `/thank-you`** (see Deviation 1) |
| *inert* | `[data-carousel]`: 3 slides, but 3-per-view at ≥1024 / 2 at ≥640 / 1 below means **one page** at every width, so the bundle hides both arrows (`display: none`) and builds **zero** dots. The 5 s autoplay still ticks — and does nothing |
| *dormant* | `[data-header]` — **the header carries no such attribute**, so the "add `shadow-lg` past 50 px" behaviour never binds (measured: `box-shadow: none` at `scrollY 200`). `[data-dark-toggle]` — **no toggle exists**; theme follows the OS only. `[data-form]` — the validation handler binds `form[data-validate]`, so it never runs: no `[data-error]` nodes are ever created, and an empty submit is stopped by the browser's own `required` bubble |

Do **not** "restore" the dormant hooks: no header shadow, no dark toggle button, no JS error messages.
Do reproduce the reveal, the progress bar, the dismissible bar, the accordion, the preloader and the
theme default — those are visible in the reference.

## Requirements

### Requirement 1: Page chrome and document shell

The document SHALL render one page with a skip link, a scroll-progress bar, a preloader, an offer bar, a
sticky header, `main#main-content` with six sections and one footer, on a white body in light mode.

#### Scenario: Visitor loads the page

* **GIVEN** the app is served at `/`
* **WHEN** the document finishes loading
* **THEN** the body background is `#ffffff` and the text colour `#111827`
* **AND** the preloader is gone (opacity animated to 0, node removed) within 300 ms of `load`
* **AND** `#scroll-progress` exists as a 2 px full-width strip at `top: 0`, width 0 % at `scrollY 0`
* **AND** the first focusable element is the `Skip to content` link, hidden until focused
* **AND** there is **exactly one** `h1` on the page

#### Scenario: Landmarks and document metadata

* **GIVEN** the rendered app
* **THEN** `main#main-content` contains the six sections in reference order (hero, why, services,
  reviews, FAQ, emergency)
* **AND** there is at least one `<header>` and one `<footer>` landmark
* **AND** the document has one `<title>` and one meta description
* **AND** there is **no** `<nav>` element and no mobile menu button

### Requirement 2: Offer bar

A 44 px `#101828` bar SHALL sit **above** the sticky header with a bold price promise, a muted
qualifier, the phone number and a dismiss control.

#### Scenario: Desktop offer bar (1440 px)

* **GIVEN** a 1440 px viewport
* **THEN** the bar is the first visible band, **44 px** tall, background `#101828`, white text
* **AND** the bold lead reads like `$49 drain clearing this month` at 14 px/700 and the qualifier follows
  at 14 px in `white/70`, separated by `ml-2`
* **AND** the phone and a ✕ button sit right-aligned with `gap-3`; the ✕ has an accessible label
* **AND** the bar is **not** sticky — scrolling past it leaves only the header pinned

#### Scenario: Offer bar at 390 px

* **GIVEN** a 390 px viewport
* **THEN** the qualifier sentence is hidden (`hidden sm:inline`) and the bar measures **44 px**
* **AND** the ✕ remains visible and tappable (≥16 px icon inside a padded button)

#### Scenario: Dismissing the offer

* **GIVEN** the offer bar is visible
* **WHEN** the user activates the ✕
* **THEN** the bar is removed from the DOM and the header moves up to `top: 0`
* **AND** nothing is stored — a reload shows the bar again

### Requirement 3: Header — wordmark and one call action

The header SHALL be sticky, 72 px tall at ≥1024 and 64 px below, containing only a wordmark and a phone
button.

#### Scenario: Header at 1440 px

* **GIVEN** a 1440 px viewport
* **THEN** the header is sticky at `top: 0`, `z-50`, 1 px `#eceef4` bottom border, `bg-white/95` with
  `backdrop-blur`, measured **73 px** tall
* **AND** the wordmark is a 32 px-tall inline SVG: an `F` glyph in `#101828`, a 6 px-radius dot in
  `#2447f2`, and the word set in Inter 700 — with a **light variant** used under `.dark`
  (`dark:hidden` / `dark:block`, not a CSS filter)
* **AND** the only action is a `tel:` link, `rounded-lg` (8 px), `bg-primary-600`, `text-white`,
  `px-4 py-2.5` → `sm:px-5`, 14 px → 16 px bold, carrying a phone glyph
* **AND** there is no navigation, no search, no theme toggle and no hamburger

#### Scenario: Header at 390 px

* **GIVEN** a 390 px viewport
* **THEN** the header measures **65 px**, padding is 16 px, and the CTA label collapses to `Call now`
  (`hidden sm:inline` for the number, `sm:hidden` for the short label)
* **AND** the header still shows no menu button

### Requirement 4: Hero band

The hero SHALL be a 12-column split on `#f6f7fb`: a 7-column copy column and a 5-column quote card.

#### Scenario: Hero at 1440 px

* **GIVEN** a 1440 px viewport
* **THEN** the band background is `#f6f7fb` and its padding is `64px 32px`, measured height **656 px**
* **AND** the grid is 12 columns with `gap: 56px`, copy spanning 7 and the card spanning 5
* **AND** the `h1` is **60 px / 66 px**, weight 700, `-1.5px`, `#101828`, with the second line
  (`from $49.`) in a `<span>` coloured `#2447f2`
* **AND** the lede is 18 px / 28 px in `#4b5468`, `max-width: 36rem`
* **AND** the four proof rows are 16 px/500 in `#1c2333` with a `#2447f2` tick glyph (`gap-3`,
  `space-y-2.5`)
* **AND** below them a `tel:` link renders at **30 px**/700/`-0.75px` `#101828`, then a rating line:
  five 16 px **`#fbbf24`** stars (`aria-hidden`), `4.8` in bold, and the muted review sentence
* **AND** the rating sentence includes a "sample data" qualifier — it is demo copy, not a claim

#### Scenario: Hero at 1024 px

* **GIVEN** a 1024 px viewport
* **THEN** the 12-column split still applies and the `h1` stays 60 px, wrapping to three lines
  (measured `h1` box 198 px, band 692 px)
* **AND** the quote card narrows to **301 px** of inner form width and stays right of the copy

#### Scenario: Hero at 390 px

* **GIVEN** a 390 px viewport
* **THEN** the split stacks: copy first, card second, `gap: 40px`, padding `48px 16px`
* **AND** the `h1` is **36 px / 39.6 px** / `-0.9px`, the phone link **24 px**, and the band measures
  **1,225 px**

### Requirement 5: Quote card and its submit

The card SHALL be a white `rounded-2xl` panel with `shadow-md`, three required controls and one submit.

#### Scenario: Default state

* **GIVEN** the hero is rendered
* **THEN** the card is `bg-white`, 16 px radius, 1 px `#eceef4` border, `shadow-md`, padding
  `24px` → `32px` at ≥1024, width **408 px** at 1440
* **AND** it opens with `h2` at 24 px/700 (20 px below 1024) and a 14 px sub-line
* **AND** the form holds `Your name` (text, `autocomplete="name"`,
  `placeholder="First and last name"`), `Phone` (`type="tel"`, `autocomplete="tel"`,
  `placeholder="(555) 000-0000"`) and `What do you need?` (a `<select>` with a placeholder option
  `Choose the closest match` plus six choices) — all three **required**, all with `<label for>`
* **AND** each control is 16 px text, `px-4 py-3`, 8 px radius, `#d6dae4` border, 50 px (inputs) / 48 px
  (select) tall, with `focus:border-primary-500` + `focus:ring-2 ring-primary-500/20`
* **AND** the submit is a full-width `bg-primary-600` 8 px-radius button, 16 px/700, `py-3.5` (52 px)
* **AND** the fine print `No obligation. We never sell your details.` is 12 px `#727c93`, centred

#### Scenario: Submitting an incomplete form

* **GIVEN** one or more required controls are empty
* **WHEN** the user submits
* **THEN** the browser's own validation blocks the submit (no navigation, no state change)
* **AND** no custom error node is inserted — the reference's JS validation never binds, so the
  recreation must not invent red text

#### Scenario: Submitting a complete form

* **GIVEN** all three fields are filled
* **WHEN** the user submits
* **THEN** the handler calls `preventDefault()` (no navigation, no network request)
* **AND** the form resets and the card shows the confirmation copy from the reference's thank-you page —
  a heading like `Got it. We will ring you back.` plus the fifteen-minute line and the phone link
* **AND** the confirmation is announced (the panel is focusable or in an `aria-live` region) and a
  "book another" affordance returns to the form
* **AND** the button is never left in a permanent loading state

### Requirement 6: Why band

The second band SHALL pair a photograph with an eyebrow, `h2`, lede and a three-item `<dl>` on the same
`#f6f7fb` ground.

#### Scenario: Desktop why band (1440 px)

* **GIVEN** a 1440 px viewport
* **THEN** the band is `#f6f7fb`, `padding-block: 112px`, measured **688 px**, 2 columns with
  `gap: 64px`, image first (`lg:order-first`)
* **AND** the photograph is a 32-bit placeholder (`picsum.photos/seed/rodline-1/800/600`), 800×600
  intrinsic, `rounded-2xl` (16 px), `w-full`, `object-cover`, lazy — measured 576×432, **not** a copied
  asset
* **AND** a 14 px `#727c93` caption sits under the image
* **AND** the copy column runs eyebrow (14 px/700 uppercase, `#1734c8`, `0.35px`) → `h2` (36 px/40/700,
  `-0.9px`, `#101828`, `mt-3`) → lede (18 px/28, `#4b5468`, `mt-4`)
* **AND** the `<dl>` begins `mt-8` with `space-y-6`; each item is `border-l-2` in `#2447f2` with `pl-5`,
  a 16 px/700 `#101828` `<dt>` and a 16 px/24 `#4b5468` `<dd>` at `mt-1`

#### Scenario: Why band at 390 px

* **GIVEN** a 390 px viewport
* **THEN** the photograph moves **below** the copy (`order-last`), measured 358×269
* **AND** the `<dl>` keeps its 20 px left padding and 2 px rule at full width

### Requirement 7: Services band — the hairline mosaic

Three services SHALL be separated by a single 1 px gutter inside one `rounded-2xl` clip.

#### Scenario: Desktop services band (1440 px)

* **GIVEN** a 1440 px viewport
* **THEN** the band is `#ffffff`, `padding-block: 112px`, measured **626 px**, with a `max-w-2xl` head
  (eyebrow, `h2` 36 px, lede 18 px) and no badge
* **AND** the grid begins `mt-12`, is `grid-cols-3` at ≥1024, `gap: 1px`, background `#eceef4` (the
  gutter), 1 px `#eceef4` outer border, 16 px radius, `overflow-hidden`
* **AND** each cell is white, `p-6` → `p-8`, `flex flex-col`, with an 18 px/700 `h3`, a 16 px `#4b5468`
  blurb that takes the remaining height (`flex-1`), and a 14 px/700 `#1734c8` price line at `mt-4`
* **AND** the three cells measure **404 px** each and their bottoms align

#### Scenario: Services at 992 and 390 px

* **GIVEN** a 992 px viewport
* **THEN** the grid is 2-up (the third cell starts a second row) with the same 1 px gutter, cells
  **366.5 px**
* **GIVEN** a 390 px viewport
* **THEN** the grid is 1-up, cells **356 px**, separated by the same 1 px line — never a 12 px gap, never
  rounded per card

### Requirement 8: Reviews band

Three review cards SHALL sit in a light-grey band with a badge, a centred head and blue stars.

#### Scenario: Desktop reviews band (1440 px)

* **GIVEN** a 1440 px viewport
* **THEN** the band ground is **`#f9fafb`** (Tailwind `gray-50`, measured `rgb(249,250,251)`), NOT
  `#f6f7fb`, with `padding-block: 112px`, measured **740 px**
* **AND** the head is centred, `max-w-3xl`: a pill badge `Reviews` (`rounded-full`, `#dde3fd` ground,
  `px-3 py-1`, 14 px/500 `#1734c8`), `h2` 36 px/700, lede 18 px `#4b5563`
* **AND** three cards render, each `rounded-2xl` (16 px) white, `p-8`, `shadow-soft`
  (`0 4px 16px -4px rgb(0 0 0 / .1)`), measured **381 px** wide
* **AND** each card shows five 20 px stars in **`#5e72f6`** (blue — this is the trap: the hero stars are
  amber, these are brand blue), then an 18 px/28/500 `#111827` quote, then a 48 px `#dde3fd` disc holding
  the reviewer's initial in 18 px/600 `#2447f2`, a 16 px/600 name and a 14 px `#4b5563` city
* **AND** the carousel's arrows are **absent** (`display: none`) and **no dots** are rendered, because
  three slides at three-per-view is a single page — do not render dead controls

#### Scenario: Reviews at 992 and 390 px

* **GIVEN** a 992 px viewport
* **THEN** two cards are visible per page (2-up), the third still present in the track, arrows still
  hidden only if there is no overflow — with 3 slides at 2-up the reference keeps its arrows hidden
  (measured `display: none`) because the script never re-shows them after the initial state; reproduce
  the observed state (no visible arrows) rather than inventing navigation
* **GIVEN** a 390 px viewport
* **THEN** one card fits the 358 px content box (measured **358 px**), the head is centred and the band is
  **774 px** tall

### Requirement 9: FAQ band — one panel at a time

Five questions SHALL be a divided list with a plus-circle that rotates 45° when open.

#### Scenario: Desktop FAQ (1440 px)

* **GIVEN** a 1440 px viewport
* **THEN** the band is `#ffffff`, `padding-block: 112px`, measured **820 px**; head centred `max-w-3xl`
  with a `Questions` pill badge, `h2` 36 px, lede 18 px
* **AND** the list is `max-w-3xl` (768 px), `margin-top: 64px`, with `divide-y` rules in `#e5e7eb`
* **AND** each row is `py-6` with a full-width `<button>` (18 px/600 `#111827`) and a 32 px
  `rounded-full bg-gray-100` circle holding a 20 px plus glyph in `#4b5563`
* **AND** all five panels start closed (`max-height: 0`, `opacity: 0`) and the answer is 16 px/24
  `#4b5563` with `pt-4`

#### Scenario: Opening and switching panels

* **GIVEN** all panels are closed
* **WHEN** the user activates a question
* **THEN** that panel animates to its content height (`max-height` + `opacity` over 300 ms) and its icon
  rotates **45°**
* **AND** any other open panel collapses back to 0
* **WHEN** the same question is activated again
* **THEN** it collapses and the icon returns to 0°
* **AND** the button exposes `aria-expanded` and controls the panel by id

### Requirement 10: Availability band and mobile call bar

A full-bleed `#2447f2` band SHALL close the page, and a fixed call bar SHALL serve viewports <1024 px.

#### Scenario: Availability band (1440 px)

* **GIVEN** a 1440 px viewport
* **THEN** the band is `#2447f2`, white text, `padding-block: 32px`, measured **116 px**, one flex row
  with the copy left and the CTA right
* **AND** the label is 14 px/600 uppercase `0.35px` at `opacity: .9`, preceded by a 8 px dot: an inner
  solid dot plus an `animate-ping` ring at 60 % opacity — the only animation in the band
* **AND** the line under it is 20 px/700 (`Book before noon and we come today.` in kind)
* **AND** the CTA is a **white pill** (`rounded-full`), `px-6 py-3`, 18 px/700 `#1734c8`, with a phone
  glyph, hover `#eef1fe`, measured 211×52

#### Scenario: Availability band at 992 and 390 px

* **GIVEN** a 992 px or narrower viewport
* **THEN** the band stacks (copy above CTA) and measures **168 px**
* **AND** the CTA keeps its full pill shape and stays a `tel:` link

#### Scenario: Mobile sticky call bar

* **GIVEN** a viewport below 1024 px
* **THEN** a fixed bar hugs the bottom edge: white (dark `#111827`), 1 px `#d6dae4` top border, `p-3`,
  measured **73 px**, containing one full-width `rounded-full bg-primary-600` link with the glyph and the
  text `Same-day availability · (555) 010-0163`
* **AND** it is absent (`display: none`) at ≥1024 px
* **AND** its overlap with the footer's last line (33 px at 390) is reproduced — see Deviation 3

### Requirement 11: Footer

A single 40 px-padded white row SHALL close the document.

#### Scenario: Footer (1440 px)

* **GIVEN** a 1440 px viewport
* **THEN** the footer is white with a 1 px `#eceef4` top border, `py-10`, measured **141 px**, one flex
  row (`sm:flex-row`) with copyright left and links right
* **AND** the copyright and links are 14 px `#727c93`; the phone is 14 px/700 `#1c2333`; `Privacy` and
  `Terms` are 14 px links that hover to `#1c2333`
* **AND** a 12 px `#aeb5c6` demo notice sits `mt-6` beneath the row
* **AND** the footer contains a link to **https://www.componentdock.com/** ("Component Dock") — house
  rule, not in the reference (Deviation 2)

#### Scenario: Footer at 390 px

* **GIVEN** a 390 px viewport
* **THEN** the row stacks (`flex-col`), the link group wraps with `gap-x-6 gap-y-2`, and the footer
  measures **193 px**

### Requirement 12: Motion layer

The page SHALL reproduce four visible motions and honour reduced motion.

#### Scenario: Scroll progress

* **GIVEN** the document is taller than the viewport
* **WHEN** the user scrolls
* **THEN** the 2 px `#2447f2` bar's width equals the scroll fraction (measured 6.56 % at `scrollY 200`)
* **AND** the bar is `fixed top-0`, `z-60`, `pointer-events: none`

#### Scenario: Reveal on scroll

* **GIVEN** a `[data-animate]` element below 80 % of the viewport height
* **WHEN** it enters the viewport (threshold 0.1, root margin `0 0 -10% 0`)
* **THEN** it fades from `opacity 0` and `translateY(20px)` to full, over **600 ms ease-out**, with the
  configured `100/150/200 ms` delay
* **AND** it is observed once and then released
* **AND** the hero's above-fold content is never invisible while waiting (it must render at opacity 1 if
  it starts inside the viewport)

#### Scenario: Reduced motion

* **GIVEN** `prefers-reduced-motion: reduce`
* **THEN** no reveal transforms run (elements are immediately visible), transitions are reduced to
  ~0.01 ms, and the smooth-scroll is disabled
* **AND** the scroll-progress bar and the pulsing availability dot still convey state without motion
  (the dot may hold a static ring)

### Requirement 13: Dark mode, following the OS

The page SHALL theme itself from `prefers-color-scheme` with no visible toggle.

#### Scenario: First visit with a dark OS preference

* **GIVEN** `prefers-color-scheme: dark` and no stored preference
* **WHEN** the page loads
* **THEN** `<html class="dark">` is set **before first paint** (inline script in `<head>`), so there is no
  light flash
* **AND** the body ground is `#030712`, the hero and why bands `#111827`, the services and FAQ bands
  `#030712`, the quote card `#111827` with `#1f2937` borders, headings white, body copy `#9ca3af`
* **AND** the header is `bg-gray-950/95` with a `#1f2937` border, the offer bar keeps `#101828`, and the
  reviews band is `#111827` with `#1f2937` cards
* **AND** the availability band stays `#2447f2` (its dark variant keeps white text)
* **AND** the logo swaps to its light variant

#### Scenario: No toggle, persisted preference

* **GIVEN** the rendered page
* **THEN** there is **no** theme toggle control anywhere in the header, the footer or the sticky bar
* **AND** a `localStorage.theme` value written by the reference's dormant handler is still honoured on
  load (`'dark'` / `'light'` wins over the OS), matching the inline `applyTheme()` logic

### Requirement 14: Responsive behaviour

The layout SHALL match the measured table and never scroll horizontally.

#### Scenario: Breakpoint table

* **GIVEN** the app is rendered at 1440 / 1280 / 1024 / 992 / 768 / 576 / 390 / 360 px
* **THEN** the document heights are **3,904 / 3,904 / 4,048 / 4,895 / 4,895 / 5,005 / 5,333 / 5,455 px**
  (±24 px, fonts included)
* **AND** the header is **73 px** at ≥1024 and **65 px** below; the sticky call bar is **0 px** at ≥1024
  and **73 px** below
* **AND** the hero is 7/5 at ≥1024 and stacked below; services are 3-up at ≥1024, 2-up at 640–1023 and
  1-up below; the reviews show 3 / 2 / 1 cards per view at ≥1024 / ≥640 / below
* **AND** the `h1` is 60 px at ≥1024, 48 px at 640–1023 and 36 px below; band `h2` is 36 px at ≥640 and
  30 px below

#### Scenario: No horizontal scroll at any width

* **GIVEN** any viewport from 320 to 1600 px
* **THEN** `document.documentElement.scrollWidth === clientWidth`
* **AND** the offer bar's long qualifier, the mosaic and the review cards never overflow their container
* **AND** every tap target in the mobile bar and the offer bar is at least 40 px tall

### Requirement 15: Provenance isolation and house rules

The app SHALL contain no reference-site strings and SHALL satisfy the repository contract.

#### Scenario: Provenance check

* **GIVEN** the built app
* **THEN** `grep -ri 'colorlib\|flowpage' apps/rodline` returns nothing (comments included)
* **AND** the provenance lives only in this spec, the `TEMPLATES.md` row and the PR description
* **AND** `apps/rodline/public/CNAME` contains `rodline.free.componentdock.com` and
  `package.json#homepage` is `https://rodline.free.componentdock.com`
* **AND** the footer links `https://www.componentdock.com/`
* **AND** no image, font file, icon set or CSS file is copied from the reference

## Deliberate deviations from the reference

1. **The form does not navigate.** The reference posts natively to `/thank-you/` (its own JS validation
   never binds — `form[data-validate]` vs `data-form`). A single-page app has no server; the recreation
   keeps native `required` blocking and, on a valid submit, swaps the card for the thank-you copy in
   place. No network call, no fake endpoint. The `thank-you/` page is therefore **not** built.
2. **The footer carries the Component Dock link** (AGENTS.md rule 5), placed with `Privacy` / `Terms` in
   the same 14 px link row. It is the only addition to the reference's footer.
3. **The mobile call bar keeps the reference's overlap.** The bar covers the last ~33 px of the footer at
   390 px. The recreation reproduces it (measured document heights depend on it) and the PR notes it as a
   reference defect; do not add compensation padding unless the document height is re-measured and the
   table in Requirement 14 updated.
4. **Placeholder imagery.** The single photograph becomes
   `https://picsum.photos/seed/rodline-1/800/600`; the logo is redrawn as inline SVG in the brand colours
   rather than copied (`assets/img/logo.svg` is 369 B, an `F` path + a `#2447F2` dot + a text run).
5. **Icons.** The phone, check, star, plus and ✕ glyphs come from `lucide-react` (or inline SVG in the
   same geometry), never from the reference's inline paths.
6. **Copy is rewritten for a different crew.** Keep the arithmetic of the offer (`from $49`), the
   fifteen-minute promise, the four proof ticks, the three services with their "From $X" lines, and the
   demo-notice honesty; change the business name, the phone and the review names.
7. **No `astro` behaviour is reproduced** that the page does not use: no view transitions, no lightbox, no
   counters, no typewriter, no billing toggle, no cookie panel, no back-to-top disc (none of them exist
   in this document).
8. **Measured recreation heights (2026-10-25, built app, Chromium).** The recreation reproduces the
   document at **3,912 / 3,912 / 4,056 px** at 1440 / 1280 / 1024 — **+8 px** against the reference's
   3,904 / 3,904 / 4,048, inside the ±24 px tolerance of Requirement 14. At 992/768 it is 4,925 (+30),
   at 390 it is 5,387 (+54), at 360 5,485 (+30) and at 576 4,899 (−106): the giveaway copy is rewritten
   for a different crew (Deviation 6), so the demo review quotes and service blurbs wrap to a different
   number of lines at the widths where the layout is 1-up or 2-up. The band *order* and every structural
   measurement (offer 44, header 73/65, hero 656/692, why 688, services 626, reviews 748, FAQ 820,
   closing 116/168, footer 141 at ≥1024) match the table; the intermediate-width document total does not,
   and that is a copy-length artefact rather than a layout one.
9. **The reviews track scrolls; it does not paginate.** With three slides at 3-per-view (≥1024) the
   reference has one page and hides its arrows and dots. Below 1024 the recreation keeps all three cards
   in a scroll-snapping track (one per view under 640, two per view to 1023) instead of building the
   reference's JS carousel: the visible state — one or two cards, no arrows, no dots — is the same, and
   the band height stays within ±8 px of the reference at 640–1023 and at 390.

## Verification checklist

- [ ] `openspec validate --specs` passes for `template-rodline`
- [ ] `apps/rodline` exists, package `@free-react-templates/rodline`, `vite.config.ts` uses
      `injectUiSource()`, `react`/`react-dom` at `latest`
- [ ] `src/index.css` carries the `@theme` block with **primary 50–700 + 900** and **ink 50–900** exactly
      as tabulated, `@custom-variant dark`, `html { scroll-behavior: smooth }` and the reduced-motion
      override
- [ ] `index.html` loads **Inter 400/500/600/700** from Google Fonts with `display=swap`, and the inline
      `applyTheme()` script runs in `<head>` (no dark flash)
- [ ] No `colorlib` / `flowpage` strings under `apps/rodline` (`grep -ri`)
- [ ] Footer links `https://www.componentdock.com/`
- [ ] **Exactly one `h1`**, 60 / 48 / 36 px at 1440 / 992 / 390, weight **700**, `-0.025em`, `#101828`,
      second line `#2447f2`
- [ ] Palette: `primary-600 #2447f2` (buttons, ticks, closing band), `primary-700 #1734c8` (eyebrows,
      service prices), `primary-400 #5e72f6` (review stars), `primary-100 #dde3fd` (badges, avatars),
      `ink-800 #101828` (headings, offer bar), `ink-50 #f6f7fb` (hero + why bands), **`gray-50 #f9fafb`**
      (reviews band — not `ink-50`), `amber-400 #fbbf24` (hero stars only)
- [ ] Radii **8 / 16 px + 50 %**; the only shadows are the quote card (`shadow-md`) and the review cards
      (`shadow-soft`); the header has **no** shadow at any scroll position
- [ ] Offer bar 44 px `#101828` above the sticky header, qualifier hidden <640, ✕ removes the bar and
      nothing is persisted
- [ ] Header **73 px at ≥1024 / 65 px below**, `bg-white/95` + blur, 1 px `#eceef4` border, logo SVG with
      the `#2447f2` dot and a light variant for dark, one `tel:` CTA (`Call now` <640), **no nav, no
      toggle, no hamburger**
- [ ] Hero: `#f6f7fb`, `64/48 px` padding, 7/5 split with 56 px gap, four tick rows, 30 px phone link,
      five amber stars + `4.8` + demo qualifier
- [ ] Quote card 408 px at 1440, 16 px radius, `shadow-md`, three required controls with labels and
      autocomplete, 8 px fields, full-width `#2447f2` submit, 12 px fine print
- [ ] Submit: empty → browser validation only (no custom red text); valid → card swaps to the
      thank-you copy, form resets, no navigation and no network request
- [ ] Why band: photograph below copy <1024, 16 px radius, 14 px caption, eyebrow + 36 px `h2` + 18 px
      lede, three `<dl>` items with a 2 px `#2447f2` left rule and 20 px padding
- [ ] Services: `gap: 1px` over `#eceef4` inside one `rounded-2xl` clip, 3 / 2 / 1 cells (404 / 366.5 /
      356 px), bottom-aligned `From $X` lines in `#1734c8`
- [ ] Reviews: `#f9fafb` band, centred `max-w-3xl` head with the `Reviews` pill, three 16 px-radius cards
      with `shadow-soft`, **blue** `#5e72f6` stars, 48 px `#dde3fd` initial discs, **no visible carousel
      arrows and no dots**
- [ ] FAQ: five rows, `divide-y #e5e7eb`, 18 px/600 questions, 32 px `#f3f4f6` plus-circle rotating
      45° on open, one panel open at a time, all closed at load, `aria-expanded` + `aria-controls`
- [ ] Availability band `#2447f2` 116 px at ≥1024 / 168 px below, pulsing dot, 14 px uppercase label,
      20 px line, white `rounded-full` phone CTA
- [ ] Mobile call bar fixed at the bottom, 73 px, hidden ≥1024, full-width blue pill, overlap with the
      footer reproduced
- [ ] Footer: white, 1 px top border, `py-10`, one row (stacked at 390), 14 px `#727c93` text, phone in
      `#1c2333`, 12 px `#aeb5c6` notice, Component Dock link
- [ ] Scroll-progress tracks the document; reveals fire once with 100/150/200 ms delays and are
      **disabled** under `prefers-reduced-motion`
- [ ] Dark mode: OS default + `localStorage.theme` override, no flash, body `#030712`, hero/why `#111827`,
      cards `#111827` with `#1f2937` borders, logo swaps, **no toggle UI**
- [ ] Breakpoint table reproduced (±24 px) at 1440 / 1280 / 1024 / 992 / 768 / 576 / 390 / 360, and
      `scrollWidth === clientWidth` at every width
- [ ] `TEMPLATES.md` row added under `## Business` between **Florist** and **Foundation2**, heading
      re-counted (371 → 372), marker `[x]` set in the bookkeeping commit
- [ ] Deploy via `gh workflow run deploy-surge.yml -f app="rodline"`, then
      `curl -4 -sI https://rodline.free.componentdock.com` returns 200
