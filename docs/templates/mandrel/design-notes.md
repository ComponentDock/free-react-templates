# Mandrel — design notes

Recreation of ColorLib **Steelworks** (`steelworks`) — https://colorlib.com/wp/template/steelworks/ ·
live preview https://preview.colorlib.com/theme/steelworks/ · read **2026-10-25** with `curl -4`, plus
`getComputedStyle` / `getBoundingClientRect` in Playwright (Chromium from
`/root/free-templates-firebase/node_modules/playwright`) at 1440 × 900, 1280, 1024, 768, 390 and 320.

Everything here is measured. Where a value is a reconstruction (Tailwind 4 inlines theme colours, so the sheet
carries **no** `--color-primary-*` / `--color-ink-*` custom properties), the provenance is stated.

## The thesis, in one paragraph

This is a **tender document that happens to be a website**. The selling device is a **7 × 5 capability matrix**
— seven trades, five client sectors, 35 cells, 25 ticks and 10 em-dashes — and everything else on the page is a
table of pairs that supports it: four facts in the hero, a value band and a duration on every project card, eight
credentials in a hairline grid, three steps each signed with a promise. There are **four image slots and three
photographs on the entire page**, none of them above the fold except the hero. The chrome carries the same idea:
a **37 px licence strip** above the header prints the credentials a contractor would paint on the van.

## Structure order (measured at 1440 × 900)

| # | band           | element                                        | ground              |  top | height | notes |
| - | -------------- | ---------------------------------------------- | ------------------- | ---: | -----: | ----- |
| 0 | licence bar    | `<div data-licence-bar>`                        | `#111827`           |    0 |     37 | `h-9` + 1 px border, in flow |
| 1 | header         | `<header data-header>` sticky                   | `#fff`/90, blur 16  |   37 |     81 | 1 px `#e5e7eb` bottom border |
| 2 | hero           | `main section:first` (no id)                    | `#f3f4f6`           |  118 |    799 | 7/5 split, 479 × 638 image |
| 3 | capabilities   | `section#capabilities.section`                  | `#ffffff`           |  917 |    869 | 7 × 5 matrix |
| 4 | projects       | `section#projects.section`                      | `#f3f4f6`           | 1786 |    952 | 3 × 389 cards |
| 5 | certifications | `section#certifications`                        | `#ffffff`           | 2738 |    411 | `py-12`, hairline grid × 8 |
| 6 | process        | `section#process.section`                       | `#ffffff`           | 3149 |    592 | 3 numbered steps |
| 7 | contact        | `section#contact`                               | `#31485f`           | 3741 |    440 | white pill + outline pill |
| 8 | footer         | `<footer>`                                      | `#111827`           | 4181 |    567 | `pt-24`, 4 / 5 / 3 |

Fixed chrome (out of flow): `#preloader` (`inset-0`, `z-[100]`, `bg-ink-50`, removed on `load`),
`#scroll-progress` (2 px, `top-0`, `z-[60]`), `#back-to-top` (48 px, `bottom-6 right-6`, `z-50`),
`#cookie-consent` (87 px tall, `bottom-0`, `z-50`).

Document height: **4,748** at 1440 **and** 1280 · **4,791** at 1024 · **7,499** at 768 · **8,157** at 390 ·
**8,394** at 320.

**Overflow, measured carefully.** `body.scrollWidth === documentElement.clientWidth` at all six widths, and
`window.scrollTo(200, 0)` leaves `scrollX === 0` — **the page does not scroll horizontally**.
`documentElement.scrollWidth` nevertheless reads **648** at 390/320, because the matrix's `min-w-[680px]` table
is 696 px wide *inside* a 358 px `overflow-x: auto` wrapper: the number is the clipped content, not a page
defect. Any implementation that lets that table widen the document **is** a new bug.

## DOM skeleton

```
<html lang="en" class="">                        ← light by default; `dark` is runtime-toggled
  <body class="min-h-screen">
    <div id="preloader" class="fixed inset-0 z-[100] flex items-center justify-center bg-ink-50 …">
      <div class="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary-600" />
    </div>
    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 …">Skip to content</a>
    <div id="scroll-progress" class="fixed top-0 left-0 z-[60] h-0.5 bg-primary-600" style="width:0%" />
    <div data-licence-bar class="w-full border-b bg-ink-800 text-ink-100 …">
      <div class="container mx-auto flex h-9 items-center justify-between px-4 text-xs lg:px-8">
        <ul> <li>Master plumber #000205</li> <li class="hidden sm:flex">OSHA 30 · EMR 0.71</li>
             <li class="hidden sm:flex">Bonded to $5M</li> </ul>
      </div>
    </div>
    <header data-header class="sticky top-0 z-50 w-full border-b border-ink-100 bg-white/90 backdrop-blur-lg …">
      <div class="container mx-auto flex h-16 items-center justify-between gap-6 px-4 lg:h-20 lg:px-8">
        <a href="/"> <img logo.svg class="h-8 lg:h-9 dark:hidden" /> <img logo-light.svg class="hidden dark:block" /> </a>
        <nav aria-label="Main navigation" class="hidden min-w-0 xl:flex xl:items-center xl:gap-7">
          6 × <a data-nav-link="/…" class="whitespace-nowrap text-sm font-semibold text-ink-600"> </nav>
        <div class="flex shrink-0 items-center gap-2">
          <span class="hidden 2xl:block"><a href="#service-areas" …>Cleveland, OH</a></span>
          <span class="hidden md:block"><a href="tel:5550100205" data-phone …>(555) 010-0205</a></span>
          <button data-dark-toggle aria-label="Toggle dark mode"> sun/moon </button>
          <a href="/rfq" class="hidden rounded-lg bg-primary-600 px-5 py-2.5 … xl:inline-flex">Request a quote</a>
          <button data-mobile-toggle aria-label="Open menu" aria-expanded="false"> burger </button>
        </div>
      </div>
      <div class="hidden xl:hidden" data-mobile-menu> <nav> 6 links + pills + full-width CTA </nav> </div>
    </header>
    <main id="main-content">
      <section class="border-b border-ink-200 bg-ink-50 …">        ← hero, no id
        <div class="container mx-auto px-4 py-14 lg:px-8 lg:py-20">
          <div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div class="lg:col-span-7"> eyebrow · h1 · lede · 2 CTAs · <table> 4 facts </div>
            <div class="lg:col-span-5"> <img aspect-[4/3] lg:aspect-[3/4] rounded-xl /> </div>
          </div>
        </div>
      </section>
      <section id="capabilities" class="section bg-white …"> header block + <table> 6 × 7 </section>
      <section id="projects" class="section bg-ink-50 …"> header block + <ul> 3 cards </section>
      <section id="certifications" class="border-y border-ink-200 bg-white py-12 …">
        header + <ul class="grid gap-px overflow-hidden rounded-lg bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
         8 × <li class="bg-white p-5"> title + sub-line </li> </ul> + footnote
      </section>
      <section id="process" class="section bg-white …"> header + <ol class="sm:grid-cols-3"> 3 steps </ol> </section>
      <section id="contact" class="bg-primary-700 py-20 lg:py-28"> centred h2 + lede + 2 CTAs </section>
    </main>
    <footer class="bg-gray-900 pt-16 text-gray-300 lg:pt-24"> brand / 3 link cols / prequalification </footer>
    <div id="cookie-consent" role="dialog" aria-label="Cookie consent" style="transform:translateY(100%)"> … </div>
    <button id="back-to-top" aria-label="Back to top" style="opacity:0;pointer-events:none"> ↑ </button>
    <script> theme FOUC guard · JSON-LD · preloader teardown </script>
  </body>
</html>
```

## CSS token reference block (declare in `@theme`)

```css
@theme {
  /* primary — steel blue */
  --color-primary-50:  #f1f4f7;
  --color-primary-100: #e2e8ee;
  --color-primary-200: #c4d0dc;
  --color-primary-400: #6b87a3;
  --color-primary-500: #4e6b89;
  --color-primary-600: #3c5a78;   /* every filled CTA, every tick, every light-band eyebrow */
  --color-primary-700: #31485f;   /* the #contact ground, process eyebrows, step promises */

  /* ink — cool slate */
  --color-ink-50:  #f3f4f6;
  --color-ink-100: #e5e7eb;
  --color-ink-200: #d1d5db;
  --color-ink-300: #9ca3af;
  --color-ink-400: #6b7280;
  --color-ink-500: #4b5563;
  --color-ink-600: #374151;
  --color-ink-700: #1f2937;
  --color-ink-800: #111827;
  --color-ink-900: #0a0f1a;

  --font-sans: "Manrope", system-ui, sans-serif;
}
```

Stock greys used as-is: `gray-900` `#111827` (footer ground), `gray-800` `#1f2937` (social chips, footer rule),
`gray-950` `#030712` (dark-mode page ground), `gray-700` `#374151` (dark borders), `gray-400/500/600` (footer
ink, legal ink, cookie copy). **No `2xl`/`3xl` radius, no shadow token, no gradient.**

## Screenshot analysis (`steelworks-template.jpg`, 2400 × 1892, real `image/jpeg`, 336,549 B)

The catalogue shot is a **marketing composition**: the page is framed inside a **macOS window** (three
traffic-light dots) on a grey `#f3f4f6` desktop ground with a wide inset, and the crop stops just past the
matrix's column heads. It is captured at a width **≥ 1536** (the city pill is visible), so a 1440 capture of the
live page has a slightly emptier right-hand header cluster. **Do not copy the frame, the dots or the desktop
ground into the app.**

Inside the frame the design reads exactly as measured: a **near-black 36 px credential strip** (three tiny pairs,
grey labels, white values); a **white header** with a compact bold wordmark at the far left, six small nav
labels, and a three-part right cluster (outlined city pill, outlined phone pill, solid steel-blue CTA); a
**flat grey hero** with a **blue uppercase eyebrow**, a **three-line near-black headline** (*"Plant rooms,
process pipework, and the paperwork that comes with them."*) at ~48 px, a three-line grey lede, a **solid blue
button beside a hairline-outline button**, and a **four-row fact table** whose rules are barely visible; and on
the right a **portrait, 12 px-radius photograph of a plant room** with a toolbox and drawings in frame. The
matrix band below is pure white with the same eyebrow/`h2`/lede rhythm and a **CAPABILITY** head over five
centred sector heads. The overall read is *credential-first and quiet* — the loudest thing on the page is the
number **0.71**.

## Section-by-section fidelity notes

### Licence bar (0–37 px)

- **37 px** = `h-9` (36) + 1 px `border-b` on `bg-ink-800`; text 12 px `#e5e7eb` with `opacity-70` on the labels
  and 600 weight on the values; `gap-x-4` between items, `whitespace-nowrap`, `overflow-hidden`.
- It is **in flow**, not fixed. Consequence for the port: the sticky header's top edge sits at 37 px until the
  bar scrolls away, so every smooth-scroll offset must add 37 px, and the bar is the reason a naive
  `scroll-margin-top: 80px` lands content under the header.
- At 390 only **Master plumber #000205** survives (`hidden sm:flex` on the other two). Do not shorten the
  surviving item — the licence number *is* the credential.
- The bar has no dismiss affordance and no JS hook (`data-licence-bar` is inert). Keep it static.

### Header (37–118 px, sticky)

- `h-16` (**64** + 1 = 65) below `xl`, `h-20` (**80** + 1 = **81**) at `xl`+. The switch is at **1280**, not
  1024: six labels + two pills + toggle + CTA do not fit at `lg`, and the source's own comment records the
  buried-links bug that fixed it (measured: nothing overlaps at 1024/1100/1279 because the nav is `hidden`
  there, and everything renders at 1280).
- **City pill only at `2xl` (1536).** With the pill visible, the six labels stay put; without the pill, the
  header's right cluster is phone · toggle · CTA · burger.
- Logo: two `<img>` (light/dark), `h-8` → `lg:h-9` (**32 → 36**). One mark, two files in the reference; in React
  use one component with a `dark:`-driven `fill`, and never the source SVG.
- Nav label metrics: 14/20 **600** `#374151`, `gap: 28px`; hover `#31485f`. Active state: **none** — the
  `data-nav-link` attribute never resolves (see defects), so do not invent an underline.
- CTA **177 × 54** at `px-5 py-2.5` with `text-sm font-bold` — note it is **54 px tall**, taller than a typical
  40 px header button, because `py-2.5` on a 14 px label plus the pill's own line-height. Match the height.

### Hero (118–917 px)

- 12-col **7 / 5** with `gap: 48px`; text column **681**, image column **479 × 638**. The image is
  `aspect-[4/3]` until `lg`, then `aspect-[3/4]` — the ratio *flips* at the breakpoint (measured 736 × 552 at
  768 and 358 × 269 at 390).
- `h1` is **48/52.8** at `sm`+, **36** below, `tracking-tight` (−0.025em = −1.2 px at 48), `max-w-2xl` (672).
  It is a **sentence with a comma splice and a period** — keep the punctuation, it sets the register.
- Fact table: `mt-10`, `max-w-md` (**448**), four rows, 1 px `#e5e7eb` rules, `th` at `w-2/5` (**179**) 14/500
  `#6b7280`, `td` 14/600 `#111827`. It is a `<table>`, not a `dl` — keep it a table for the row/column semantics.
- CTA pair: filled `#3c5a78` + outline `1px #9ca3af` with `#1f2937` label; both **177 × 54**, `gap: 12px`.
- The band closes with a **1 px `#d1d5db` bottom border** (`border-b border-ink-200`) — visible as the seam
  between grey hero and white matrix.

### `#capabilities` (917–1786 px)

- Header block `max-w-2xl`: eyebrow 14/700 `#3c5a78` +0.35, `h2` **36/40/700 −0.9**, lede 18/28 `#4b5563`.
- The table is the page. Structure: `<caption class="sr-only">`, `<thead>` with a **2 px `#d1d5db`** bottom rule,
  `<th scope="col">` 14/**700** `#374151` centred (first one left), `<th scope="row">` 16/**600** `#111827`
  with `padding-right: 24px`, and `<td class="px-3 py-3.5 text-center">` (**14 / 12**) holding either a 20 × 20
  check or an em-dash.
- Rows are **53 px** at 1440 (a single line at 16/24 + 28 px of padding); at 768 and 390 four of the seven rows
  wrap to **77 px** because *Water compliance and legionella* and *Planned maintenance contracts* are long.
- **Tick pattern (verified cell by cell):** `YYYYY` / `--YY-` / `Y----` / `YYYYY` / `YYYYY` / `YYYY-` / `Y-YY-`
  → **25 / 10**. Do not "balance" it: `Medical gas` with a single tick and the two all-five rows are what makes
  the matrix read as a real capability list.
- Below 1024 the table keeps `min-width: 680px` inside `overflow-x: auto`. **The fix we ship on top of parity:**
  make the `<th scope="row">` cell `position: sticky; left: 0` with the band's own ground
  (`bg-white dark:bg-gray-950`), so the capability name stays readable while the five sectors scroll.

### `#projects` (1786–2738 px)

- Cards **389** wide at 1440 (`(1216 − 48) / 3`), `rounded-xl`, 1 px `#d1d5db`, white, `overflow-hidden`;
  flat — **no shadow on any card on this page**.
- Card anatomy: 4:3 image → `p-6` body → 12/700 uppercase `#3c5a78` sector eyebrow → linked 18/700 title →
  14/28 `#4b5563` blurb (`flex-1`) → `<dl>` behind a 1 px `#e5e7eb` top rule, `mt-5 pt-4`, two cells `gap-6`
  with `dt` 12/500 `#6b7280` and `dd` 14/**700** `#111827`.
- The `dl` is the design: **Value band** and **Duration** side by side. Do not add a "View project" link — the
  `<h3>` is the link.
- Stacked at 768/390 the cards go full width (**736 / 358**) and the band triples in height (2,659 / 2,036).

### `#certifications` (2738–3149 px)

- `py-12` (**48**) with `border-y border-ink-200` — the band is separated by rules, not by a ground change.
- The grid is **one table made of list cells**: `gap: 1px` on `bg-ink-200` inside `overflow-hidden rounded-lg`,
  cells `bg-white p-5`. Cell **303 × 88** at 1440, **239 × 108** at 1024, **368 × 88** at 768, **358 × 88** at
  390, **288 × 88** at 320. Adding a border to a cell doubles every line.
- Cell content: 16/700 `#111827` `tracking-tight` title + 14/400 `#6b7280` sub-line (`mt-1`). Four of the
  titles are *numbers* (EMR 0.71, $5M bonding, ISO 9001, $10M liability) — that is deliberate; the grid is a
  fact sheet, not a logo wall. **Do not add certificate logos.**
- `h2` here is **24 px** (`text-2xl`), smaller than every other `h2` — keep the exception.

### `#process` (3149–3741 px)

- The only band where the eyebrow is `#31485f` (`text-primary-700`) rather than `#3c5a78`; the step promises
  reuse the same 700 ink.
- `<ol>` 3 columns at `sm`, `mt-12`, `gap-6`. Each `<li>` opens with a row: `<span class="text-sm font-bold
  tabular-nums text-primary-600">01</span>` + `<span class="h-px flex-1 bg-ink-100">` — a **number and a rule
  that fills the rest of the column**. That hairline is the band's signature; without it the three steps read as
  a plain column set.
- Then 18/700 `h3` (`mt-4`), 16/28 `#4b5563` body (`mt-2`), and the promise at `mt-3` in 14/**700** `#31485f`.
- Number, rule, title, body, promise — five parts, no icons.

### `#contact` (3741–4181 px)

- **440 px** of `#31485f`, `py-20 lg:py-28`; content centred in `max-w-3xl`, `h2` 36/700 white, lede 18/28
  `#e2e8ee` at `max-w-xl`.
- Two CTAs `gap-4`, stacked full-width below `sm`: white ground with a `#31485f` label (**the only inverted
  button on the page**) and a 2 px `white/40` outline pill. Both `px-8 py-4` (**56** tall).
- This is the only large steel-blue surface — do not tint any other band blue.

### Footer (4181–4748 px)

- 12-col **4 / 5 / 3**: brand 384, three link columns inside 488, prequalification 280.
- Brand: **190 × 40** light logo, `max-w-xs` blurb, three **40 px** social chips (`rounded-lg bg-gray-800
  p-2.5`, `hover:bg-gray-700`), then address / phone / email stacked at `space-y-2` in `gray-400`.
- Column heads 14/600 uppercase `+0.7 px` in white; links 16/400 `gray-400` with `space-y-3`, `hover:text-white`.
- The **Prequalification** column is the surprise: instead of a newsletter it repeats the pitch and drops a
  steel-blue **Request a quote**. Keep the asymmetry — no newsletter input exists on this design.
- Bottom bar `mt-16 border-t border-gray-800 py-8`: `© 2026 …` at 14 px `gray-500` plus Privacy / Terms.
  **In our port this bar also carries the `https://www.componentdock.com/` link** (AGENTS.md rule 5).

## Source → React adaptation table

| reference construct                              | port decision                                                                                     |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Astro multi-page (`/capabilities`, `/projects`, …) | **single page**; nav items and CTAs anchor to `#capabilities` / `#projects` / `#certifications` / `#process` / `#contact` |
| `/rfq/` nine-field quote form                     | **not built.** *Request a quote* resolves to `#contact`, whose terminal action is a `mailto:` on the bids address. State it in the PR |
| `data-nav-link` active-section observer            | **not ported** — inert in the reference (the lookup uses `"/capabilities"` against ids without a slash) |
| Manrope via `/cf-fonts/` inline `@font-face`        | Google Fonts `<link>` + `preconnect`; `@theme --font-sans`                                         |
| 3 Unsplash photographs (4 slots)                   | `https://picsum.photos/seed/mandrel-<n>/<w>/<h>` — hero 3:4 portrait, 3 × 4:3 card images          |
| inline `<svg>` ticks, phones, pins, sun/moon        | `lucide-react`: `Check`, `Phone`, `MapPin`, `Menu`, `X`, `Sun`, `Moon`, `ArrowUp`, `ArrowRight`     |
| kit's reveal / parallax / typewriter / carousel    | **all absent from this page** — do not wire them, do not add equivalents                            |
| `#preloader`, `#scroll-progress`, `#back-to-top`, cookie strip | ported as React components with the same numbers (2 px bar, 48 px disc at 300 px, 1,500 ms cookie) |
| 48 anchors with 3 dead `#`, 2 dead `#service-areas`, 1 malformed `tel:` | **zero** dead anchors, **zero** malformed URIs; socials get real destinations        |
| JSON-LD with no `@type` (build artefact)           | either omit, or `{"@context":"https://schema.org","@type":"PlumbingContractor",…}`                  |
| `© 2026 Steelworks Mechanical`                     | `© 2026 {Brand}. All rights reserved.` + Component Dock link in the bottom bar                       |

## Sibling comparison (the 2026 Astro house kit)

Same family as **Headwater** (`springwell`), **Cresting** (`ridgeline`), **Nightwatch** (`nightshift`),
**Conduit** (`nodig`), **Jetline** (`rooter24`) and **Drainwise** (`metroflow`): identical `Base…BLoalVWc.js`
behaviour bundle (sha256 `e26cc055…`), identical router, Tailwind 4.3.3 compiled sheet with **no custom-property
palette**, all inner routes trailing-slash only, host-served Manrope/DM Sans via `/cf-fonts/`.

What is **different** here, and must not be copied from a sibling:

| axis                | Mandrel (Steelworks)                                    | Headwater (Springwell)                    |
| ------------------- | ------------------------------------------------------- | ----------------------------------------- |
| palette             | cool **steel blue** `#3c5a78` / `#31485f` on grey `#f3f4f6` | warm **sage green** `#3f8f5f` / `#33724c` on three creams |
| type                | **one face** (Manrope), four weights                     | **two faces** (Lora serif + DM Sans)       |
| signature device    | **7 × 5 tick matrix**                                   | **three-question quiz**                    |
| imagery             | 3 photographs, 4 slots, none but the hero above the fold | 6 photographs, image-led why-us band       |
| card radius         | 12 px (`rounded-xl`), flat, **no card shadow**           | 16 px (`rounded-2xl`) + `shadow-soft`      |
| motion              | **none**                                                | 6 reveal-on-scroll elements + carousel     |
| chrome              | **37 px licence strip** above a sticky header            | no strip; header at 0                      |
| band headers        | always left, `max-w-2xl`, eyebrow above `h2`             | mixed: centred on test/products, left elsewhere |

The two preps that share this queue also differ in ways worth re-reading before writing code: *Cresting* is
image-led with a claim explainer, *Drainwise* leads with a ZIP finder and a 1,200 ms fallback, and *Conduit*
argues through a comparison table with one bold cell per row. **This one argues with ticks.**

## Open questions / decisions for the implementer

1. **Sticky matrix column** — the one deliberate improvement over the reference (see defects §6). It changes no
   colour, size or row height; confirm it in the PR with a 390 px screenshot.
2. **`#contact` as the quote destination** — the reference's real conversion page is `/rfq/`. A single-page
   recreation cannot carry a nine-field form without inventing a band, so the band keeps its two CTAs and the
   terminal action is the `bids@` mailto. If the owner wants a working form later, it belongs in a new route,
   not in this band.
3. **Sample-data caveats** — three of them, and they are load-bearing: this page is a *demonstration* of a
   contractor's credentials. Keep them verbatim.
