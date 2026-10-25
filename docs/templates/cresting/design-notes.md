# Cresting — design notes

Source: ColorLib **Ridgeline** (`ridgeline`), live preview `https://preview.colorlib.com/theme/ridgeline/`
(HTTP 200, 92,808 B, read 2026-10-25 with `curl -4`). Recreation name `cresting`. Spec:
`openspec/specs/template-cresting/spec.md`. Tasks: `docs/templates/cresting/tasks.md`.

A 2026 **Astro + Tailwind 4** build (`/*! tailwindcss v4.3.3 */`, one 62,989 B sheet, the same 16,233 B house
kit as Conduit/Nightwatch/Drainwise) for a **storm-damage roofing contractor in Oklahoma City**. Its `<title>`
states the brief: *"Roofing in Oklahoma City, **with the insurance claim explained**"*. Build to that clause —
the six-stage claim sequence is the template, and every other band is evidence for it.

## Structure order (measured at 1440 × 900)

| #  | band                       | id / hook            | ground              |   top | height |
| -- | -------------------------- | -------------------- | ------------------- | ----: | -----: |
| 0  | licence bar                | `[data-licence-bar]` | `#1c2634`           |     0 |     37 |
| 1  | header (sticky)            | `[data-header]`      | `white / 90 %`      |    37 |     81 |
| 2  | hero + inspection card     | `[data-inspection-form]` | `#121a25`       |   118 |    750 |
| 3  | six claim stages           | `#claim`             | `#1c2634`           |   868 |  1,033 |
| 4  | six priced services        | `#services`          | `#ffffff`           | 1,901 |    919 |
| 5  | six project cards          | `#projects`          | `#ffffff`           | 2,820 |  1,643 |
| 6  | photo + four rules         | `#why-us`            | `#f6f7f9`           | 4,463 |    840 |
| 7  | three steps                | `#process`           | `#ffffff`           | 5,303 |    564 |
| 8  | fourteen towns             | `#areas`             | `#ffffff`           | 5,867 |    513 |
| 9  | review carousel            | `#testimonials`      | `#f9fafb`           | 6,380 |    796 |
| 10 | five answers               | `#faq`               | `#ffffff`           | 7,176 |    820 |
| 11 | closing CTA                | `#contact`           | `#a8350d`           | 7,996 |    440 |
| 12 | footer                     | `<footer>`           | `#111827`           | 8,436 |    568 |

Document **9,004 px** at 1440 and at 1280; **8,996 px** at 1600; **9,274 px** at 1024; **11,300 px** at 768;
**15,530 px** at 390; **16,503 px** at 320. `.section` is `py-20` → `lg:py-28` (**80 / 112 px**); the hero
container is `py-16` → `lg:py-24` (**64 / 96 px**) and the band's height is set by the **card (558 px)**, not by
the copy column (523 px). Container is `max-width: 80rem` from 1280 with `px-4` → `lg:px-8`, so content is
**1,216 px** at 1440.

## DOM skeleton

```
body.min-h-screen
├─ #preloader                     fixed inset-0 bg-white · 40 px spinner border-4 border-t-primary-600
├─ a[href="#main-content"]        sr-only → focus:not-sr-only skip link
├─ #scroll-progress               fixed top-0 h-0.5 bg-primary-600, width % on scroll
├─ [data-licence-bar]             37 px  bg-ink-800 text-ink-100 · <ul> overflow-hidden + rating <p>
├─ header[data-header]            sticky top-0 h-16 lg:h-20 border-b border-ink-100 bg-white/90 backdrop-blur-lg
│   ├─ a > img logo (dark)  +  img logo-light (dark:block)
│   ├─ nav[aria-label="Main navigation"]  hidden xl:flex gap-7 · 7 × a[data-nav-link]
│   ├─ pill: a[href="#service-areas"] Oklahoma City, OK      ← DEAD ID (section is #areas)
│   ├─ pill: a[href="tel:5550300300"] (555) 030-0300
│   ├─ button[data-dark-toggle]    40 px icon button
│   ├─ button[data-mobile-toggle]  xl:hidden, aria-expanded + aria-label "Open menu"
│   └─ div[data-mobile-menu].hidden  seven rows + pill pair + block CTA
├─ main#main-content
│   ├─ section.relative.overflow-hidden.bg-ink-900            ← HERO
│   │   ├─ img.absolute.inset-0.object-cover.opacity-30  (unsplash roofer)
│   │   ├─ div.bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40
│   │   └─ .container > .grid.gap-12.lg:grid-cols-12.lg:gap-16
│   │       ├─ div.lg:col-span-6   p.eyebrow · h1(+span) · p.lead · p.rating · ul.ticks
│   │       └─ div.lg:col-span-6   form#inspection[data-inspection-form]
│   │             h2 + p · grid-cols-2 (name, phone) · address · fieldset.chips ×5 · button · p.footnote
│   ├─ section#claim[data-claim]                              ← SIX-STAGE RAIL
│   │   └─ .container > .max-w-2xl (eyebrow, h2, lead)
│   │       > .grid.lg:grid-cols-12.gap-12
│   │           ├─ ol.lg:col-span-5   li > button[data-claim-tab=0..5][aria-expanded]
│   │           │        span.num · span > span.title + span.meta
│   │           └─ div.lg:col-span-7  div[data-claim-panel=0..5] (5 with .hidden)
│   │                  p.eyebrow "Stage one" · h3 · p.body · dl(sm:grid-cols-2)
│   │                  · div.border-t > p.label + ul.ticks · p.callout "Worth knowing."
│   ├─ section#services.section
│   │   └─ .max-w-2xl (eyebrow, h2, lead) > .grid.gap-px.rounded-2xl.border.bg-ink-100.lg:grid-cols-3
│   │         6 × div.bg-white.p-8.flex.flex-col (h3 · p.flex-1 · p.price)
│   │       > p.footnote
│   ├─ section#projects.section
│   │   └─ .max-w-2xl > .grid.gap-6.sm:grid-cols-2.lg:grid-cols-3
│   │         6 × article.rounded-2xl.border.border-ink-100.overflow-hidden
│   │           ├─ div.aspect-[4/3].bg-gradient-to-br.p-6.items-end  (+ svg chevron watermark)
│   │           │     p.location (white/60) · p.rooftype (text-2xl white)
│   │           └─ div.p-6  h3 · p.text-sm.flex-1 · dl.grid-cols-2.border-t.pt-5 (Size/On site/Paid by)
│   │       > p.note
│   ├─ section#why-us.section.bg-ink-50
│   │   └─ .grid.lg:grid-cols-2.gap-16
│   │       ├─ figure: img (576×432 rounded-2xl) + figcaption
│   │       └─ div: eyebrow · h2 · lead · div.space-y-6 > 4 × div.border-l-2.border-primary-600.pl-5
│   ├─ section#process.section
│   │   └─ .max-w-2xl > ol.grid.gap-8.sm:grid-cols-3.sm:gap-6
│   │         3 × li: div.flex.items-baseline.gap-3 (span.num + span.h-px.flex-1.bg-ink-100)
│   │                 h3 · p · p.tag
│   ├─ section#areas.section
│   │   └─ .grid.lg:grid-cols-12.gap-16
│   │       ├─ div.lg:col-span-5 (h2, lead — NO eyebrow)
│   │       └─ div.lg:col-span-7 > ul.grid-cols-2.sm:grid-cols-3  14 × li.border-b
│   ├─ section#testimonials.bg-gray-50
│   │   └─ .max-w-3xl.text-center (pill, h2, lead)
│   │       > div[data-carousel] > .overflow-hidden > .flex[data-carousel-track]
│   │           3 × div[data-carousel-slide].px-3 > div.rounded-2xl.bg-white.p-8.shadow-soft
│   │                 stars ×5 · blockquote · avatar disc · name · town
│   │       > [data-carousel-dots] · [data-carousel-prev/next]  (hidden at lg)
│   ├─ section#faq.bg-white
│   │   └─ .max-w-3xl (pill, h2, lead) > 5 × (div.border-b > button[data-faq-toggle] + div.panel)
│   └─ section#contact.bg-primary-700
│       └─ .max-w-3xl.text-center  h2 · p.lead · div.flex (solid white + 2 px outline)
├─ div#cookie-consent[role=dialog]   fixed bottom-0 translateY(100%) → 0 after 1500 ms
├─ button#back-to-top                fixed bottom-6 right-6 48 px, opacity 0 → 1 past 300 px
└─ footer.bg-gray-900.pt-24
    └─ .grid.lg:grid-cols-12.gap-8
        ├─ div.lg:col-span-4  logo-light h-10 · blurb · 3 social chips · address/phone/email
        ├─ div.lg:col-span-5  sm:grid-cols-3  Services · Company · Support
        └─ div.lg:col-span-3  Stay Updated · blurb · form[data-newsletter-form]
    > div.mt-16.border-t.border-gray-800.py-8  © 2026 … + Privacy Policy · Terms of Service
```

## CSS token reference (copy into `@theme`)

```css
@theme {
  /* ink — cool-navy neutral ramp */
  --color-ink-50:  #f6f7f9;
  --color-ink-100: #eaedf1;
  --color-ink-200: #d3d9e1;
  --color-ink-300: #aab5c3;
  --color-ink-400: #78879b;
  --color-ink-500: #57677d;
  --color-ink-600: #3e4c60;
  --color-ink-700: #2c3849;
  --color-ink-800: #1c2634;
  --color-ink-900: #121a25;

  /* primary — burnt-orange ramp */
  --color-primary-50:  #fff4ed;
  --color-primary-100: #ffe4d2;
  --color-primary-200: #ffc5a3;
  --color-primary-300: #ff9e6b;
  --color-primary-400: #fa7838;
  --color-primary-500: #ee5b14;
  --color-primary-600: #ce450b;
  --color-primary-700: #a8350d;
  --color-primary-800: #872d12;
  --color-primary-900: #6e2812;

  --font-sans: "Space Grotesk", system-ui, sans-serif;
  --shadow-soft: 0 4px 16px -4px #0000001a;
}
```

Reconstructed from the compiled utilities — the sheet has **no** `--color-ink-*` / `--color-primary-*`
custom properties (Tailwind 4 inlines hex), so the ramps above were parsed from every `*-ink-<n>` /
`*-primary-<n>` rule and then confirmed against `getComputedStyle`.

Roles that must not be swapped:

| role                          | token                              | why it matters                                                        |
| ----------------------------- | ---------------------------------- | --------------------------------------------------------------------- |
| heading on a light band        | `ink-800` `#1c2634`                | never `gray-900` — only `#testimonials`/`#faq` use stock greys         |
| hairline / grid filler         | `ink-100` `#eaedf1`                | the services plate's 1 px gaps are this colour, not a border on cells  |
| solid CTA                      | `primary-600` `#ce450b`            | header CTA, submit, chips selected, back-to-top, progress bar          |
| eyebrow on a light band        | `primary-700` `#a8350d`            | prices, "Paid by", process tags                                        |
| accent on a dark band          | `primary-400` `#fa7838`            | `h1` span, claim eyebrow, ticks, review stars                          |
| active claim rule              | `primary-500` `#ee5b14`            | not `primary-600`; the rail reads slightly warmer than the CTA         |
| closing band                   | `primary-700` `#a8350d`            | unchanged in dark mode                                                 |

## Screenshot analysis (`ridgeline-template.jpg`, 2400 × 1892, JPEG)

The listing image is a **marketing composition, not a browser capture**: a macOS window chrome (three traffic
lights on a light lavender `#e9eaf2` ground, rounded corners, drop shadow) containing the licence bar, header and
the first ~1,400 px of the page, cut off mid-`#claim`. What it confirms that the DOM alone does not:

- The hero's two-tone headline is **one sentence broken across two lines with the second sentence in orange** —
  the break falls after *"tell you"*, and the orange run is *"how bad it actually is."* (not a highlight box).
- The hero photograph sits **behind a left-to-right ink wash that is nearly opaque under the copy** and only
  reveals roof, ladder and sky on the right third, under the form card. The card is the only white object above
  the fold.
- The licence bar's right-hand rating is **star + `4.9` + faint review line**, and the star is amber, not orange
  — a single deliberate warm pop in an otherwise navy/cool strip.
- The claim band's rail shows **orange numbers on the active row only**, with the panel's "STAGE ONE" eyebrow in
  the same orange as the hero span.

**Do not** adopt the lavender browser ground, the traffic lights or the window frame into the app.

## Section-by-section fidelity notes

### 0 — Licence bar

A **trust strip, not a nav**: `Licence OK CIB #00000000` · `Manufacturer certified` · `Serving Oklahoma City
metro`, then a sample Google rating, all 12/500 on `#1c2634`. It is the darkest thing above the fold and it is
**not sticky** — by the time the reader reaches the prices, the licence number is gone, which is the same
trade-off its siblings make. Items 2 and 3 are `hidden sm:flex`. The left `<ul>` is `overflow-hidden` with
`whitespace-nowrap` children, so at 390 it **clips mid-token** (`Licence OK CIB #`) — the one thing to fix
rather than copy.

### 1 — Header

Seven labels, and the nav switches on at **`xl` (1280)**, not `lg`. The markup carries a comment explaining it
(a trade header has nav + two pills + toggle + CTA and the last links paint under the pill between 1024 and
1279); keep the breakpoint and keep the reasoning as a comment without naming the source. The logo is a
**wordmark + chevron mark** in two files (`logo.svg`, `logo-light.svg`) swapped by `dark:` classes — recreate it
as an inline SVG with a `currentColor` variant rather than shipping two PNGs.

The city pill's `href="#service-areas"` is a **dead id** (the section is `#areas`), shipped twice — desktop and
mobile panel. The mobile panel is a plain disclosure: seven 18/600 rows, a hairline, the phone and city pills
side by side, then a full-width CTA.

### 2 — Hero

6/6 split of a 12-column grid with a **64 px** gutter. The `h1`'s orange run starts at *"how bad"* — the colour
break is **inside** the sentence that carries the promise, so the eye lands on the accusation and not on the
brand. The four ticks are two columns at `sm` and one below, each with a 16 px orange check.

The card is the only element above the fold with `shadow-md` and it has **no border** — its separation from the
band is shadow plus the band's darkness. It is a real `<form>` with three required inputs and a **five-chip
radio group** (`Recent storm` pre-checked). Note the chip pattern: `input.peer.sr-only` + `span` styled by
`peer-checked:` / `peer-focus-visible:` — reproduce it with `peer` or an explicit `role="radiogroup"`, but keep
the visual: full-radius pills, 1 px `ink-200`, selected `primary-600` + white, and a **visible focus ring on the
pill**, not on the hidden input.

The reference form is **inert** (no `action`, no handler, submitting reloads with a query string). Wiring it is
the recreation's job (defect 2 in the spec).

### 3 — `#claim` — the band that is the template

Two blocks: a left-aligned header (`max-w-2xl`) and a 12-column body with the rail in 5 and the panel in 7. The
rail rows are **not** cards: each is a `<button>` with a 2 px left rule that turns `#ee5b14` when
`aria-expanded`, a `tabular-nums` number, the title, and an `owner · duration` line. Six rows at 78 px each =
473 px against a **517 px** panel, so the panel is the taller subject and the rail's bottom edge is ragged —
that is the reference's look, not a bug.

The panel's own hierarchy is worth copying exactly: `Stage one` eyebrow → `h3` 24/32 → a paragraph → a **two-up
`dl`** (`Who does it`, `Typically takes`) → a hairline-separated block whose label is `What you need to hand`
over a ticked list → and finally the **"Worth knowing."** callout, a `primary-500/10` ground with a
`primary-500/40` border holding the sentence that admits the answer can be *no*. That callout is the design's
conscience; dropping it turns an honest explainer into an advert.

All six panels are in the DOM and the inactive ones carry `hidden`. The switcher is 472 B of vanilla JS:
`aria-expanded` on the buttons, `hidden` on the panels, nothing else. There is no animation, no URL hash, no
keyboard roving — so the panel **jumps** between stages of different heights unless the port reserves the
height. Reserve it.

### 4 — `#services`

A `gap-px` grid whose **background draws the dividers** — six white cells on an `ink-100` plate inside a
radius-16 wrapper. No icons, no hover lift: the cell's only ornament is the price line in `primary-700`, which
makes the six starting prices the visual rhythm. The blurbs are `flex-1`, so all six price lines sit on the
same baseline per row; without that the grid reads as six ragged columns.

The last price is `Quoted on site`, not a number — the same honesty device as the claim panel's caveat.

### 5 — `#projects`

The hard part is that **there are no photographs**: each card's media is a **gradient plate plus a chevron
watermark** standing in for a roof photograph, with the town in small caps and the roof assembly in 24/700. The
plates rotate **ink → orange → ink** across the six cards, which gives the grid a defined order (two orange
plates at positions 2 and 5). Reproducing that rotation is a fidelity requirement.

The third meta row is the design's argument: `Paid by` in `primary-700` with values `Insurance claim`,
`Financed over 60 months`, `Paid directly` — and a note under the grid explaining why the row exists. A port that
drops it (or moves financing into a badge) loses the reason the section is there.

### 6 — `#why-us`

A photograph left, four left-ruled rules right, on `ink-50`. The `h2` is a refusal — *"We would rather lose the
job than sell you a claim"* — and the four rules are written as **checkable claims** (we will tell you not to
file; we meet your adjuster; we are still here next spring; your deductible is your deductible). The fourth is
the one to keep word-for-word: it accuses competitors of fraud without naming anyone.

The image is 4:3 (576 × 432) at radius 16 with a `figcaption` in `ink-400` that literally says *"Replace with a
photograph of your own crew"* — the reference expects to be edited, and the caption is part of the artefact.

### 7 — `#process`

Three steps in `sm:grid-cols-3`, each a number + a 1 px rule filling the row, then title, body, tag. The tag is
the duration (`Within 2 working days`, `Same visit`, `1 to 3 days`). The lead does the work of reconciling this
band with the six-stage claim band: *"Three steps if you are paying directly, six if insurance is involved."* If
the port changes either count, that sentence must change with it.

### 8 — `#areas`

Deliberately plain: no eyebrow, no map, no chips — fourteen towns in a 2/3-column list with hairlines, and a
note that says the list is the local search signal. This is the calmest band on the page and it should stay
that way; adding icons or a map would change the register.

### 9 — `#testimonials`

The only band on **stock Tailwind greys** (`gray-50` ground, `#111827` headings, `#4b5563` body): it is a
carousel component copied from the house kit, and unifying it with the `ink` ramp is the fastest way to make the
page subtly wrong. Three cards, `shadow-soft`, five **orange** stars (`primary-400`, not amber), a
**quote-first** card (stars → quote → avatar → name → town), and a 48 px `primary-100` disc holding the initial.

At 1440 the carousel is **inert**: three slides at three-per-view means `maxIndex === 0`, so the kit hides both
arrows and renders **zero dots**. At 768 it is 2-per-view with 2 dots; at 390, 1-per-view with 3 dots.

### 10 — `#faq`

Five rows, hairlines, **no card**, plus disc on the right that rotates 45° on open. Single-open, `max-height`
transition. The answers are the page's most aggressive copy — the deductible answer is *"No. It is insurance
fraud in this state and we will not do it."* The reference forgets `aria-expanded` on the buttons; add it.

### 11 — `#contact`

`primary-700` ground, centred `max-w-3xl`, a white `h2`, a `primary-100` lead, and **two different button
shapes** on purpose: solid white (book) and a 2 px `white/40` outline (call, with a phone glyph). Below `sm`
both go full width and stack.

### 12 — Footer

Four zones in a 12-column grid: brand (4), three link columns (5), newsletter (3). The brand block carries a
light logo, a `gray-400` blurb, **three** `#1f2937` social chips (bare `#` in the reference — fix) and
address/phone/email. The bottom bar is `mt-16 border-t #1f2937 py-8` with the copyright and two legal links.
The footer is where the Component Dock attribution goes (rule 5).

## Source → React adaptation

| reference construct                              | React implementation                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Astro per-section markup + one page                | one `App` composing section components (`LicenceBar`, `Header`, `Hero`, `Claim`, …)   |
| `[data-claim]` + 472 B switcher script             | `useState<number>` index; `<button aria-expanded>` rows + panels rendered with `hidden` |
| `[data-faq-toggle]` accordion (kit, max-height)    | `<Accordion>` with `aria-expanded`/`aria-controls` and a measured `maxHeight` or a `grid-template-rows` trick |
| `[data-carousel]` + 5 s autoplay + dots            | `<Carousel>` primitive: per-view from a `matchMedia`/`resize` hook, dots only when `maxIndex > 0` |
| `[data-animate]` + IntersectionObserver            | `<Reveal delay>` wrapping the same 14 elements; no-op under reduced motion             |
| `data-dark-toggle` + pre-paint script              | `<ThemeToggle>` + the inline head script (`localStorage.theme` → `.dark`)               |
| `#preloader`, `#scroll-progress`, `#back-to-top`   | `Preloader` (self-removing), `ScrollProgress`, `BackToTop` — all in `packages/ui` if absent |
| `peer-checked` chip radios                         | `<ChipRadioGroup>` with real `input type=radio` + `peer` classes (keep the visual ring) |
| inline Unsplash URLs                               | local assets in `public/`, same crops (`1600 × 900` hero, `800 × 600` why-us)          |
| Astro `<Image>` sizing / `loading=lazy`            | `width`/`height` attributes + `loading="lazy"` on the why-us photo                      |

## Sibling comparison (same 2026 Astro set, same 16,233 B kit)

| sibling (prep)      | source       | ground pair                | signature band                             |
| ------------------- | ------------ | -------------------------- | ------------------------------------------ |
| Conduit             | `nodig`      | `ink-50` + terracotta      | nine-row comparison table                   |
| Nightwatch          | `nightshift` | dark navy + amber          | working square-footage estimator            |
| Drainwise           | `metroflow`  | white + blue               | ZIP finder with a 1,200 ms fallback         |
| Tidewater           | `marrow`     | paper + serif              | CSS-only book jackets                       |
| **Cresting**        | `ridgeline`  | `#121a25`/`#1c2634` + `#ce450b` | **six-stage insurance-claim rail**     |

What is *shared* with the siblings (because the kit is byte-identical): the preloader, the 2 px progress bar,
the 48 px back-to-top disc, the 1,500 ms cookie strip, the `[data-animate]` reveal with `data-delay`, the
`xl`-not-`lg` nav breakpoint rationale, the four-footer-zone grid, and the `privacy`/`terms` inner routes.
What is *this design's own*: the claim rail and its "Worth knowing." callout, the chip-based inspection card,
the gradient project plates with their ink/orange rotation, the `Paid by` meta row, and the refusal-toned
`#why-us` and FAQ copy.

Reuse the primitives; do not reuse Conduit's comparison table, Nightwatch's calculator or Drainwise's ZIP
finder — none of them belong on this page, and each would break the band map.

## Reference defects — one line each

1. `#service-areas` dead id (two anchors) — go to `#areas`.
2. Inspection form: no `action`, no handler → GET reload with query string.
3. Newsletter form: same.
4. FAQ buttons: no `aria-expanded`, no `aria-controls`.
5. `data-nav-link` values are route paths, so the kit's `getElementById` observer list is empty → no active nav
   state ever.
6. 320 px overflows to 357 px.
7. One malformed `tel:(555) 030-0300`; JSON-LD phone disagrees with every link.
8. Three footer social chips are `href="#"`.
9. Licence bar clips mid-token at 390.
