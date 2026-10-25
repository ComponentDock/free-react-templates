# Emberly — Design Notes

Recreation of ColorLib **"Heatline"** — https://colorlib.com/wp/template/heatline/, live preview
https://preview.colorlib.com/theme/heatline/. App: `apps/emberly` (`@free-react-templates/emberly`).
Read this with `openspec/specs/template-emberly/spec.md` (requirements + exact readings) and
`docs/templates/emberly/tasks.md` (build order).

**The one-line brief:** white page, navy-grey ink, steel-blue brand, **three plan cards instead of a
hero photograph**, one pale-sky calculator band, and a single warm ember banner — DM Sans throughout,
weight 500 on the big headlines, weight 300 on the ledes.

## Reference set (all read 2026-10-25, `curl -4`)

| artefact | bytes | sha256 (first 8) |
| --- | ---: | --- |
| `theme/heatline/` (DOM authority) | 64,887 | `88ae83ae` |
| `_astro/Base.CvHGvUwD.css` (token authority, Tailwind v4.3.3) | 59,082 | `473c5938` |
| `_astro/…BLoalVWc.js` (house kit — same hash as eight siblings) | 16,233 | `e26cc055` |
| `_astro/ClientRouter…CYDbzu1r.js` | 16,357 | `69eb3ac5` |
| inline `<style>` (DM Sans 300–700, 10 faces, `/cf-fonts/…`) | 3,280 | — |
| inline scripts: `applyTheme` / JSON-LD / **calculator** / preloader | 454 / 294 / 656 / 370 | — |
| `assets/img/logo.svg` · `logo-light.svg` · `favicon.svg` | 404 · 404 · 377 | `0016a839` · `42b2e162` · `5d183df4` |
| catalog screenshot `heatline-template.jpg` (**JPEG**, 2400×1892) | 274,236 | `18710b7a` |
| `colorlib.com/wp/template/heatline/` | 111,896 | `2846f878` |

`css/style.css`, `js/snippet.js`, `downloads/free/heatline.zip` and `og-image.jpg` are **404** — Astro
build, no archive twin. Every inner route answers **308** → `/<route>/` → 200.

## Document order

```
#preloader                     fixed inset-0 z-100 bg-white, 40px animate-spin ring; removed on load
skip link                      sr-only focus:not-sr-only → #main-content
#scroll-progress               fixed top-0 left-0 z-60 h-0.5 (2px) bg-primary-600
[data-licence-bar]             h-9 (37px measured) bg-ink-800 #14324a text-ink-100 text-xs
header[data-header]            sticky z-50, h-16 → lg:h-20 (81px), bg-white/90 backdrop-blur-lg
                               logo · 7 nav links at xl · Leeds pill · phone pill · dark toggle
                               · solid CTA (xl+) · hamburger (xl:hidden)
[data-mobile-menu]             hidden xl:hidden, border-t, 7 block rows + pills + CTA (492px open)
section (hero, no id)          bg-white, container py-16 lg:py-24 (64/96px), grid-cols-12 = 5 / 7
   left  col-span-5            eyebrow · h1 60px/500 · lede 18px/300 · 5 stars + 4.9 · CTA pair
   right col-span-7            3 plan cards (grid-cols-1 sm:grid-cols-3, gap-6) + footnote
section#finance               .section (80/112px), bg-sky-100 #e3f2fa, max-w-3xl LEFT-aligned
                               eyebrow · h2 500 · lede · white card (calculator) · footnote
section#services              .section, bg-white, max-w-2xl header + 6-cell hairline grid + footnote
section#seasonal              py-12 (48px), bg-white; box border-l-4 heat-400 bg-heat-50
section#process               .section, max-w-2xl header + ol grid sm:grid-cols-3
section#areas                 .section, grid-cols-12 = 5 / 7; NO eyebrow; 12 town rows
section#testimonials          bg-gray-50 py-20 lg:py-28, centred pill + 3-slide carousel
section#faq                   bg-white py-20 lg:py-28, centred pill + max-w-3xl divided list
section#contact               bg-primary-700 #185887 py-20 lg:py-28, centred h2 + 2 CTAs
footer                        bg-gray-900 pt-16 lg:pt-24, 4 / 5 / 3 columns + bottom bar
#cookie-consent                fixed bottom z-50, translateY(100%) → 0 at 1.5s
#back-to-top                   48px disc, bottom-6 right-6, past 300px
```

Measured heights at 1440: licence 37, header 81, hero 708, finance 916, services 831, seasonal 304,
process 564, areas 448, testimonials 768, faq 820, contact 412, footer 544 — document **6,433 px**
(6,725 at 1200, 9,859 at 390). Container `max-width: 1280px`, content 1,216 px at 1440.

## Paste-ready token block (`src/index.css`)

```css
@import "tailwindcss";

@theme {
  /* brand: steel / trade blue — NOT tailwind blue-600 */
  --color-primary-50:  #eff6fb;
  --color-primary-100: #dbebf6;
  --color-primary-200: #b4d5ec;
  --color-primary-300: #83b8dd;  /* dark-mode text only */
  --color-primary-400: #4a95c8;
  --color-primary-500: #2a7cb4;
  --color-primary-600: #1e6fa8;  /* brand — every solid button */
  --color-primary-700: #185887;  /* eyebrows, prices, the closing band ground */
  --color-primary-900: #113954;  /* dark-mode ground only */

  /* neutrals: cool navy-grey (this is what keeps the blue from reading corporate) */
  --color-ink-50:  #f4f8fb;
  --color-ink-100: #e5eef4;  /* card borders + the services grid gutter */
  --color-ink-200: #c8dae6;
  --color-ink-300: #9bb6c9;  /* compiled, unused on this page */
  --color-ink-400: #5f7f96;
  --color-ink-500: #3d5e76;  /* body copy */
  --color-ink-600: #26485e;
  --color-ink-700: #1a3a4e;
  --color-ink-800: #14324a;  /* h1/h2/h3 + the licence strip ground */
  --color-ink-900: #0e2434;  /* compiled, unused on this page */

  /* ember accent — ONE band and the logo. Nothing else. */
  --color-heat-50:  #fef2f0;
  --color-heat-300: #f6a899;
  --color-heat-400: #f0705a;
  --color-heat-500: #e55940;
  --color-heat-600: #ce4630;
  --color-heat-700: #a93727;

  --color-sky-100: #e3f2fa;  /* the finance band ground */

  --font-sans: "DM Sans", system-ui, sans-serif;

  --shadow-soft: 0 4px 16px -4px #0000001a;
}
```

`gray-50…950`, `amber-400`, `shadow-md` and `shadow-lg` are stock Tailwind — do **not** re-declare them;
the page genuinely mixes the house `ink` ramp with stock `gray` (footer, testimonial ground, FAQ rules,
headings inside those two bands). That split is in the reference.

## Section-by-section fidelity notes

### Licence strip (`div[data-licence-bar]`)

`bg-ink-800` (#14324a, measured `rgb(20,50,74)`), `h-9` = **37 px including the 1 px border**,
`text-ink-100`, `text-xs`. Left is a `<ul>` of label/value pairs where the labels are `opacity-70` and
the values `font-semibold`: `Gas Safe` / `#000000`, then `Insured to £5m` and `Covering` / `Leeds and
West Yorkshire`, both `hidden sm:flex`. Right is one line: a 14 px `amber-400` star, `4.9`, and
`600+ reviews on Checkatrade (sample)` at `opacity-70`. One row, `gap-x-4`, `overflow-hidden`,
`whitespace-nowrap` on each item — the strip never wraps, it drops facts instead.

### Header (`header[data-header]`)

`sticky top-0 z-50`, `h-16` → `lg:h-20` (**81 px measured** with the border), `bg-white/90` +
`backdrop-blur-lg`, `border-b border-ink-100`, `transition-all`. Order: wordmark (two `<img>`s, one for
each theme, `h-8 lg:h-9`) → nav (`hidden … xl:flex xl:items-center xl:gap-7`, seven labels) → `Leeds`
pill (pin glyph, links to `#service-areas`, a **broken fragment** in the reference) → `0800 000 0000`
pill (`tel:`, `font-semibold`) → dark toggle → solid `Compare cover plans` (186 × 40, 14 px, weight 700,
`xl`+ only) → hamburger (`xl:hidden`).

The source carries an authored HTML comment explaining the **`xl` (1280 px) breakpoint**: seven links
plus two pills, a toggle and a CTA do not fit at 1024–1279, and in the source set every template had one
to four links buried under the pills across that range. Keep 1280. Below it the panel is in flow
(`border-t`, `px-4 py-4`, seven `block py-3` rows, 492 px open at 390), the trigger swaps to a close
glyph and sets `aria-expanded`.

Scroll behaviour: past 50 px the kit appends `shadow-lg` (verified). No height change, no colour change.

### Hero — copy column

`lg:col-span-5 lg:pt-4`. Eyebrow: 14 px, `uppercase`, `tracking-wide` (0.35 px), **weight 500**,
`text-primary-600` (#1e6fa8) — note this is the *lighter* eyebrow treatment; services/process use
weight 700 on #185887.

`h1` **weight 500**, not 700: `text-4xl` 36 → `sm:text-5xl` 48 → `lg:text-6xl` **60 px**, `leading-[1.15]`
(**69 px**), `tracking-tight` (**−1.5 px**), `text-ink-800`. Measured 469 × 138 at 1440. One sentence,
two lines. Do not bold it — the design's calm comes from the 500 weight against 700 body headings.

Lede: `text-lg` 18 px, `leading-relaxed` (**29.25 px**), **`font-light` (300)**, `text-ink-500`,
`max-w-md` (448 px measured).

Rating: an inline-flex row of five 16 px `amber-400` stars, `4.9` in `font-bold`, then
`600+ reviews on Checkatrade · sample data` at `opacity-80`, all `text-sm text-ink-600`, `mt-7`.

CTAs `mt-9 flex flex-wrap gap-3`: solid `#1e6fa8` `rounded-lg` 24/14 px (`Compare cover plans`,
210 × 54) and ghost `border-ink-200` with `#1a3a4e` text (`Book a repair`).

### Hero — the three plan cards (the actual hero)

`grid gap-6 grid-cols-1 sm:grid-cols-3`, each `flex flex-col rounded-2xl border p-6` (24 px, 16 px
radius) — **212 × 472** at 1440, 162 × 616 at 1200, 358 × 328 at 390. Anatomy: 18 px bold name → price
row (`text-3xl font-bold` + `text-sm text-ink-400` `a month`, `items-baseline gap-1`) → `text-sm
text-ink-500` blurb (`flex-1`, which is what equalises the CTA baselines) → `ul` of ticks
(`space-y-2.5`, 4 px radius check SVG 16 px in `primary-600`, text `text-sm text-ink-600`, `gap-2.5`) →
`mt-6` CTA.

Card 1 `Boiler only £9` (3 ticks), card 3 `Whole home £22` (4 ticks) use `border-ink-100` and an outline
`Choose`. Card 2 `Boiler and heating £14` (4 ticks) is the emphasis: `border-primary-600` +
`shadow-md` + the `Most chosen` pill first (`mb-3 inline-flex w-fit rounded-full bg-primary-50 px-3 py-1
text-xs font-bold uppercase tracking-wide text-primary-700`) + a **solid** `Choose`. At 390 that badge is
why the middle card is 412 px tall against 328.

Footnote under the grid: `mt-6 text-sm text-ink-400` — *Sample pricing for template demonstration.
Replace with your own before launch.*

### Finance band (`#finance`) — the design's distinguishing tool

Ground `sky-100` `#e3f2fa` (measured `rgb(227,242,250)`), `.section` = 112 px at `lg`, **left-aligned**
inside `max-w-3xl` (768 px) — unlike the centred `#testimonials`/`#faq` headers. Header: eyebrow
`Spreading the cost` (500, `primary-600`), `h2` **weight 500** `A new boiler, by the month`, 18 px /
`font-light` lede.

Card: `rounded-2xl bg-white p-6 lg:p-8` — **768 × 444** at 1440 (32 px padding), 358 × 428 at 390
(24 px). Inside, top to bottom: label `Cost of the work` (14 px 500 `ink-600`), the amount at
`text-3xl font-medium` (`£2,400`), a full-width `<input type="range">` styled `accent-primary-600`
(`min 800 max 4500 step 50 value 2400`), the `£800` / `£4,500` end labels (`text-xs text-ink-400`,
`justify-between`), a `border-t border-ink-100 pt-6` break, `Over 36 months at 9.9% APR representative`
(14 px 500 `ink-500`), the monthly figure at **`text-4xl` `text-primary-700`** with `a month` in
`text-lg font-light text-ink-400`, `Total repayable £X` (14 px `ink-400`), then the `Get a fixed quote`
CTA.

Arithmetic (spec §The finance calculator): `r = 9.9/100/12`, `n = 36`,
`monthly = P·r/(1−(1+r)^−n)`, formatted `£` + `toLocaleString('en-GB', {maximumFractionDigits: 0})`.
Verified: 2400 → 77 / 2,784 · 800 → 26 / 928 · 1000 → 32 / 1,160 · 4500 → 145 / 5,220. Note the static
HTML ships `£0` in both outputs — compute on mount in React.

### Services (`#services`)

Header `max-w-2xl`: eyebrow `What we do` — **weight 700** `primary-700` (`#185887`), `h2` **700**
(`Heating, and the plumbing around it`), 18 px `text-ink-500` lede.

Grid: `mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100
sm:grid-cols-2 lg:grid-cols-3`, cells `flex flex-col bg-white p-6 lg:p-8` — **404 × 184** each, grid
1,216 × 371 at 1440 (two rows of three), 1,063 px at 390. The 1 px rules are the **gutter showing
through** (`bg-ink-100`), not borders — reproduce it with `gap-px` on a tinted wrapper, and the 16 px
radius on the wrapper with `overflow-hidden`.

Each cell: 18 px bold name, `flex-1` blurb (`text-ink-500`), then `mt-4 text-sm font-bold text-primary-700`
price. Six prices: `From £1,850 fitted`, `From £96`, `£89`, `£79`, `From £140`, `From £96` — note **two
different services share `From £96`**; that is the reference, not a typo to fix.

### Seasonal band (`#seasonal`) — the only warm surface

`section` is `bg-white py-12` (**48 px**, not a `.section`) and the *box* inside carries the colour:
`rounded-2xl border-l-4 border-heat-400 bg-heat-50 p-6 lg:p-8`, measured **1,216 × 208**. Layout
`flex flex-col gap-5 … lg:flex-row lg:items-center lg:justify-between`, left copy `max-w-2xl`, right the
CTA `shrink-0`.

Eyebrow `Before the cold` (`heat-700` #a93727), heading `text-xl lg:text-2xl` **24 px weight 500**
(`Service the boiler before winter, not during it`), body `font-light text-ink-600` (the copy about the
nine out of ten January breakdowns and the £89 September service), footnote `text-sm text-ink-400`
(`Figures are illustrative sample content.`), CTA `Book a service` — `bg-heat-600` (#ce4630), 14 px
weight 500, 24/12 px padding.

**Discipline:** this is the page's only heat. No other band may use `heat-*`, and the only other ember in
the design is the flame inside the logo.

### Process (`#process`)

Header `max-w-2xl` (eyebrow `How it works` in the 700/`#185887` treatment, `h2` 700 `From quote to first
hot radiator`, lede *Fixed price before we start, and a date we keep.*). Then
`<ol class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">` — three `<li>`, each:

* a header line `flex items-baseline gap-3`: the numeral in `text-sm font-bold tabular-nums
  text-primary-600` (`01`, `02`, `03`) and a `h-px flex-1 bg-ink-100` rule filling the remaining width;
* `mt-4` 18 px bold title, `mt-2` body `text-ink-500`, `mt-3 text-sm font-semibold text-primary-700`
  note.

Notes: `Free, no obligation` · `Valid 90 days` · `Most installs, one day`. The numeral + hairline is the
signature; a plain numbered card layout would lose it.

### Areas (`#areas`)

`grid gap-10 lg:grid-cols-12 lg:gap-16`: left `lg:col-span-5` = `h2 Where we cover` (36 px 700) +
`text-lg text-ink-500` lede — **no eyebrow on this band**, which makes it the quietest section on the
page. Right `lg:col-span-7` = `<ul class="grid grid-cols-2 gap-x-6 sm:grid-cols-3">` of twelve
`border-b border-ink-100 py-2.5 text-base text-ink-700` rows: Leeds, Headingley, Horsforth, Pudsey,
Morley, Wetherby, Otley, Guiseley, Yeadon, Garforth, Rothwell, Bramhope. Footnote `Replace this list with
your own coverage before launch.`

### Testimonials (`#testimonials`)

`bg-gray-50` (measured `rgb(249,250,251)`), `py-20 lg:py-28`. Centred `max-w-3xl` header: pill
`Reviews` (`rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700`), `h2`
**700** `text-gray-900` `What customers say`, lede `Sample reviews for demonstration. Replace with your
own.`

Carousel `relative mt-16` → `overflow-hidden` → `flex transition-transform duration-500 ease-out` track
with three `flex-shrink-0 px-3` slides. Card `rounded-2xl bg-white p-8 shadow-soft` (**381 × 320**): five
`primary-400` stars (20 px, `flex gap-1`, `mb-6`), a `<blockquote class="text-lg font-medium
text-gray-900">` with curly quotes, then a footer row with a 48 px `rounded-full bg-primary-100
text-primary-600` initial, the name and the town (`text-sm text-gray-600`).

People: `Gemma W.` / Horsforth, `Idris K.` / Morley, `Ann-Marie T.` / Wetherby. Arrows are
`absolute -left-4` / `-right-4 top-1/2`, `rounded-full`, `hidden` — with three slides all in view the kit
keeps them at `display: none` (correct, not a bug).

**Star colour trap:** the hero and the licence strip use `amber-400`; these cards use `primary-400`
(#4a95c8). A sibling (Everhot) had the reverse split. Copy this page's split exactly.

### FAQ (`#faq`)

`bg-white py-20 lg:py-28`; centred pill `Questions`, `h2` 700 `Before you book`, lede *The five things
people ask about cover and installation.* Then `mx-auto mt-16 max-w-3xl` with
`divide-y divide-gray-200`: five `<div class="py-6">` rows, each a full-width
`button[data-faq-toggle]` (`flex items-center justify-between text-left`) holding an 18 px / **600**
question (`text-gray-900`) and a `ml-4 flex h-8 w-8 … rounded-full bg-gray-100 text-gray-600` disc with a
20 px plus glyph; below it the panel (`overflow-hidden transition-all duration-300`, `max-height: 0`) —
**88 px open**, disc rotated `45deg`.

Exclusive, 300 ms, no `aria-expanded` in the reference. Add `aria-expanded` + `aria-controls` in React.

### Closing band (`#contact`)

`bg-primary-700` (#185887, measured `rgb(24,88,135)`), `py-20 lg:py-28` (**412 px**), centred
`max-w-3xl`: white `h2` **36 px / 700** `Cold house, or a boiler on its last legs?`, `text-lg
text-primary-100` lede (*Book a repair, a service, or a fixed quote for a replacement.*,
`mt-5 max-w-xl`), then `mt-10 flex flex-col … sm:flex-row` with a **white** solid CTA (`Book online`,
#185887 text, 32/16 px, 155 × 56) and a `border-2 border-white/40` ghost with a 20 px phone glyph
(`Call 0800 000 0000`). Flat band: no gradient, no pattern, **no form** — the form lives on the inner
`/contact` page, which this recreation does not rebuild.

### Footer

`bg-gray-900` (measured `rgb(17,24,39)`), `text-gray-300`, `pt-16 lg:pt-24` — **544 px** at 1440,
1,346 px at 390. `grid gap-12 lg:grid-cols-12 lg:gap-8`: brand `lg:col-span-4` (`logo-light.svg`
`h-10`, `max-w-xs text-gray-400` blurb, three `rounded-lg bg-gray-800 p-2.5` 40 px social tiles all
pointing at `#`, then address / phone / email), a nested `sm:grid-cols-3 lg:col-span-5` block
(`Heating` 4 links, `Company` 4, `Support` 3, each under a 14 px / 600 uppercase white heading), and
`Stay Updated` `lg:col-span-3` (blurb + `flex gap-2` email field `border-gray-700 bg-gray-800` +
`Subscribe` `bg-primary-600`). Bottom bar `mt-16 border-t border-gray-800 py-8`: `© 2026 …` in
`text-gray-500` on the left, `Privacy Policy` + `Terms of Service` on the right. **Add the Component Dock
link** (AGENTS.md rule 5) — it is not in the reference.

### Cookie strip and back-to-top

Cookie: `fixed bottom-0 left-0 right-0 z-50 border-t bg-white py-4 shadow-lg sm:py-6`,
`role="dialog" aria-label="Cookie consent"`, `translateY(100%)` inline until the kit slides it up at
1.5 s; `Decline` (`border-gray-300`) + `Accept All` (`bg-primary-600`), both `rounded-lg px-4 py-2
text-sm font-medium`.
Back-to-top: 48 px `rounded-full bg-primary-600 shadow-lg shadow-primary-600/25`,
`bottom-6 right-6`, `opacity 0 → 1` past 300 px. There is **no sticky call bar** on this design.

## Source → React adaptation table

| reference | recreation |
| --- | --- |
| two logo `<img>`s swapped by `.dark` | one authored `<LogoMark />` SVG (ember flame + blue rule) + a wordmark |
| `data-animate` + kit `IntersectionObserver` (14 nodes, 12 delays) | `<Reveal delay={100}>` wrapper, same timing, skipped under `prefers-reduced-motion` |
| `data-header` + `shadow-lg` past 50 px | `useScrolled(50)` hook → conditional class |
| `data-mobile-toggle` / `data-mobile-menu` | `MobileMenu` component with `aria-expanded`, `xl:hidden` |
| `data-nav-link` (7 route paths) | nav items mapped to band ids; `useActiveSection` over those ids |
| `data-carousel` + kit auto-advance | `TestimonialsCarousel` (per-view 3/2/1, 5 s, hover pause, bounds-aware arrows) |
| `data-faq-toggle` + `max-height` script | `FaqAccordion` with `aria-expanded`/`aria-controls`, exclusive open |
| `data-finance-calc` + inline 656 B script | `FinanceCalculator` — same formula, same `en-GB` formatter, computed on mount |
| `data-newsletter-form` (inert) | `NewsletterForm` with local validation + success state, no request |
| `#cookie-consent` + `localStorage` | `CookieStrip` with component state only |
| four inner routes | one page; nav labels map to bands; no router |
| `accent-primary-600` range input | Tailwind `accent-primary-600` (works once the token exists) |
| `<div class>` artefact in the hero | plain wrapper, no class |

## Sibling comparison (same generated-template family, different designs)

The `_astro` kit and router are **byte-identical** to the Aquifer (Dowser), Plantroom (Curbline), Veranda
(Commons), Stoke (Coldsnap), Closeknit (Circles), Kettle (Everhot), Smallpaw (Fernhill) and Percline
(Fieldline) reads — same 16,233 B kit hash, same 16,357 B router. So the **behaviour inventory
transfers** and only the markup, palette and band order differ.

What makes Emberly itself:

* **the hero is a price table, not a photograph** — no sibling among these nine opens with three plan
  cards; theirs use split heroes with a form, a diagram or a quote card;
* **two weights of headline** (500 for the hero and the finance band, 700 for every other band) — the
  Fieldline/Percline sibling is consistently bold;
* **a second accent ramp that is used once** (`heat`) — the Everhot/Kettle sibling spreads its orange;
* **a real calculator** (amortisation at 9.9 % over 36 months) — Percline explicitly has *no* page-local
  tool, and its spec says none may be invented. Here the tool is in the reference and must be reproduced;
* **DM Sans like Percline, but a cool palette**: `#1e6fa8` steel blue on `#14324a` navy ink, against
  Percline's `#41712f` green on `#282520` warm stone. A matching kit hash and a matching typeface are
  **not** a matching design.

Divergences worth knowing when copying patterns from a sibling: Percline has a licence strip with a mono
sub-label and a sticky mobile call bar; Emberly has neither a mono face nor a call bar, but adds the
finance band and the ember seasonal strip.

## Traps (measured, in the order they bite)

1. **`h1` is weight 500, not 700.** The single easiest fidelity miss; the page reads calm because of it.
2. **The `h2` weight changes by band** (500 in `#finance`, 700 elsewhere). Do not normalise.
3. **`heat-*` is one band + the logo.** It exists to punctuate; spreading it rewrites the design.
4. **The services grid's rules are a `gap-px` gutter** over `bg-ink-100`, not per-cell borders.
5. **Stars differ by band**: `amber-400` (licence strip, hero) vs `primary-400` (testimonials).
6. **The nav switches at `xl` (1280), not `lg`.** The source comment explains it; 1024–1279 buries links.
7. **Arrows stay hidden** with three slides in view — the kit binds their visibility to scrollability.
8. **The calculator ships `£0`** in the static HTML. Compute on mount and keep the five verified readings.
9. **`#service-areas` does not exist** (two links) — the band id is `areas`. Fix it, do not ship it.
10. **`/plans`, `/contact`, … all 308** to their trailing-slash form. The single-page recreation has no
    such hop; do not mistake the redirect for behaviour to copy.
11. **Grepping the sheet for `@font-face` finds nothing** — the faces live in the page's inline
    `<style>` under `/cf-fonts/`. Load DM Sans from Google Fonts instead (no copied font files).
12. **The contact page's placeholders are leftover coworking copy** — proof the source is generated; do
    not lift them, and do not add a contact form to the closing band.
