# Enthalpy — design notes

Source: ColorLib **Rightsize** (`rightsize`), live preview `https://preview.colorlib.com/theme/rightsize/`
(HTTP 200, 77,779 B, read 2026-10-25 with `curl -4`). Recreation name `enthalpy`. Spec:
`openspec/specs/template-enthalpy/spec.md`. Tasks: `docs/templates/enthalpy/tasks.md`.

A 2026 **Astro + Tailwind 4** build (`/*! tailwindcss v4.3.3 */`, one 55,915 B sheet, the same 16,233 B house
kit as Conduit/Nightwatch/Drainwise/Cresting) for an **HVAC replacement contractor in Phoenix**. Its `<title>`
states the brief: *"HVAC replacement in Phoenix, **priced on ten-year cost of ownership**"*. Build to that clause —
the `#cost` calculator is the template, and every other band is evidence for it.

## Structure order (measured at 1440 × 900)

| #  | band                          | id / hook            | ground     |   top | height |
| -- | ----------------------------- | -------------------- | ---------- | ----: | -----: |
| 0  | licence bar                   | `[data-licence-bar]` | `#252522`  |     0 |     37 |
| 1  | header (sticky)               | `[data-header]`      | `white/90` |    37 |     81 |
| 2  | hero + request card           | `[data-form]`        | `#f7f7f6`  |   118 |    710 |
| 3  | ten-year calculator           | `#cost`              | `#171715`  |   828 |    995 |
| 4  | diagram + four rules          | `#why-us`            | `#f7f7f6`  | 1,823 |    940 |
| 5  | six rebate cells              | `#rebates`           | `#ffffff`  | 2,763 |    931 |
| 6  | four steps, three columns     | `#process`           | `#ffffff`  | 3,694 |    764 |
| 7  | twelve towns                  | `#areas`             | `#ffffff`  | 4,458 |    468 |
| 8  | three reviews (carousel)      | `#testimonials`      | `#f9fafb`  | 4,926 |    796 |
| 9  | five answers                  | `#faq`               | `#ffffff`  | 5,722 |    820 |
| 10 | closing CTA                   | `#contact`           | `#1c5f55`  | 6,542 |    440 |
| 11 | footer                        | `<footer>`           | `#111827`  | 6,982 |    567 |

Document **7,549 px** at 1440 and at 1280; **7,312 px** at 1600; **7,959 px** at 1024; **9,609 px** at 768;
**12,153 px** at 390; **13,116 px** at 320. `.section` is `py-20` → `lg:py-28` (**80 / 112 px**); the hero
container is `py-14` → `lg:py-20` (**56 / 80 px**) and the band's height is set by the **card (509 px)**, not by
the copy column (466 px). Container is `max-width: 80rem` with `px-4` → `lg:px-8`, so content is **1,216 px** at
1440 (box 1,280 px at x = 80).

## DOM skeleton

```
body.min-h-screen
├─ #preloader                     fixed inset-0 bg-white · 40 px spinner border-4 border-t-primary-600
├─ a[href="#main-content"]        sr-only → focus:not-sr-only skip link
├─ #scroll-progress               fixed top-0 h-0.5 bg-primary-600, width % on scroll
├─ [data-licence-bar]             37 px bg-ink-800 text-ink-100 · <ul overflow-hidden> of 3 facts + rating <p>
├─ header[data-header]            sticky top-0 h-16 lg:h-20 border-b border-ink-100 bg-white/90 backdrop-blur-lg
│   ├─ a > img logo.svg (dark:hidden) + img logo-light.svg (hidden dark:block)   h-8 lg:h-9
│   ├─ nav[aria-label="Main navigation"]  hidden xl:flex gap-7 · 6 × a[data-nav-link]
│   ├─ pill: a[href="#service-areas"] Phoenix, AZ          ← DEAD ID (section is #areas), 2xl:block only
│   ├─ pill: a[href="tel:5550800800"] (555) 080-0800
│   ├─ button[data-dark-toggle]   36 px radius-8 icon button (moon / sun swap)
│   ├─ a CTA "Book a load calculation"  hidden xl:inline-flex · px-5 py-2.5 · bg-primary-600
│   ├─ button[data-mobile-toggle] xl:hidden, aria-expanded + aria-label "Open menu"
│   └─ div[data-mobile-menu].hidden  six block rows + pill pair + block CTA
├─ main#main-content
│   ├─ section.bg-ink-50                                     ← HERO (no id)
│   │   └─ .container.px-4.py-14.lg:py-20 > .grid.lg:grid-cols-12.gap-10.lg:gap-16
│   │       ├─ div.lg:col-span-7.lg:pt-6   p.eyebrow · h1(+span) · p.lead · p.rating · ul.ticks ×4
│   │       └─ div.lg:col-span-5           div.rounded-2xl.bg-white.p-8.shadow-soft
│   │             h2 + p · form[data-form] (name, tel, select#qf-problem) · button · p.footnote
│   ├─ section#cost[data-tenyear]  bg-ink-900 text-white .section
│   │   ├─ .flex.sm:items-end.sm:justify-between  → .max-w-2xl (eyebrow, h2, lead) + [role=group] 4 pills
│   │   └─ .grid.lg:grid-cols-3.gap-6 → article[data-system][data-price][data-running][data-upkeep][data-life] ×3
│   │         h3 + span[data-rank] · p blurb · dl 4 rows · Total over <span data-horizon-label>N</span>
│   │         · p[data-total] · p[data-life-note]
│   ├─ section#why-us.section.bg-ink-50
│   │   └─ .grid.lg:grid-cols-2.gap-12.lg:gap-16 → figure.order-last.lg:order-first (img sizing-panel.svg +
│   │       figcaption) + div (eyebrow, h2, lead, dl.space-y-6 × 4 border-l-2 border-primary-600 pl-5)
│   ├─ section#rebates.section.bg-white
│   │   └─ .max-w-2xl header + .grid.gap-px.rounded-2xl.border.bg-ink-100.sm:grid-cols-2.lg:grid-cols-3
│   │       → 6 × div.bg-white.p-6.lg:p-8 (h3, p.flex-1, p amount) + closing p (full width)
│   ├─ section#process.section.bg-white
│   │   └─ .max-w-2xl header + ol.grid.gap-8.sm:grid-cols-3.sm:gap-6 → li × 4
│   │       (head: span number + span.h-px.flex-1 rule · h3 · p · p tag)
│   ├─ section#areas.section.bg-white
│   │   └─ .grid.lg:grid-cols-12.lg:gap-16 → div.lg:col-span-5 (h2, p) + div.lg:col-span-7
│   │       (ul.grid-cols-2.sm:grid-cols-3 × 12 li.border-b + p note)
│   ├─ section#testimonials.bg-gray-50.py-20.lg:py-28
│   │   └─ .mx-auto.max-w-3xl.text-center (badge, h2, p) + div[data-carousel].relative.mt-16
│   │       ├─ .overflow-hidden > div[data-carousel-track].flex.transition-transform
│   │       │     → div[data-carousel-slide].flex-shrink-0.px-3 × 3 → .rounded-2xl.bg-white.p-8.shadow-soft
│   │       │        (div.mb-6.flex.gap-1 × 5 stars · blockquote · 48 px avatar + name + town)
│   │       ├─ button[data-carousel-prev] / [data-carousel-next]   absolute, hidden until needed
│   │       └─ div[data-carousel-dots]                             empty at ≥ 1024
│   ├─ section#faq.bg-white.py-20.lg:py-28
│   │   └─ .mx-auto.max-w-3xl header + .mx-auto.mt-16.max-w-3xl > .divide-y.divide-gray-200
│   │       → 5 × div.py-6 (button[data-faq-toggle] > span question + span[data-faq-icon] disc ·
│   │           div.overflow-hidden.transition-all[style="max-height:0;opacity:0"] > p)
│   └─ section#contact.bg-primary-700.py-20.lg:py-28
│       └─ .mx-auto.max-w-3xl.text-center (h2, p lead, .mt-10.flex buttons: solid white + 2 px outline)
├─ footer.bg-gray-900.pt-16.lg:pt-24
│   └─ .grid.lg:grid-cols-12.lg:gap-8 → brand lg:col-span-4 (logo-light, blurb, 3 social chips, address/phone/mail)
│       · .grid.sm:grid-cols-3.lg:col-span-5 (Services/Company/Support) · newsletter lg:col-span-3
│       · .mt-16.border-t.border-gray-800.py-8 (copyright + 2 legal links)
├─ #cookie-consent                fixed bottom-0 87 px bg-white border-t · role=dialog · translateY(100%)
└─ button#back-to-top             48 px disc bg-primary-600 · bottom-6 right-6 · hidden until 300 px
```

## Section-by-section fidelity notes

### 0 — Licence bar (37 px, `#252522`)

Three facts left, rating right, 12 px `#ededea`, one row `h-9`. The left `<ul>` is `overflow-hidden` with
`whitespace-nowrap` items, so at 390 it **clips mid-token** (`scrollWidth 161` vs `clientWidth 105`): the
recreation hides the 2nd and 3rd facts at `sm` as the reference does and must also let the first fact fit (drop
the label, or use `truncate` with the value never cut). Not sticky; the header below it is.

### 1 — Header (81 px, sticky)

`h-16` → `lg:h-20`, `white/90` + `backdrop-blur-lg`, 1 px `#ededea`, `shadow-lg` past 50 px. Two quirks are
**decisions, not accidents**, and the reference says so in its own markup comments:

- the six-link nav switches on at **`xl` (1280)**, not `lg`, because a seven-item nav + phone pill + toggle + CTA
  does not fit at 1024;
- the **city pill is `2xl:block` (1536)** for the same reason — it is *not* visible at 1440, and adding it back at
  1440 breaks the row.

The header is **65 px** below 1024. The theme toggle is 36 px, radius 8, with a moon/sun swap and
`aria-label="Toggle dark mode"`.

### 2 — Hero (710 px, `#f7f7f6`)

12-column grid, `gap-16` at `lg`: copy **683 px** (7 cols), card **469 px** (5 cols) at x = 859. The height is set
by the card (509 px) plus 80 px padding top and bottom.

- eyebrow: 14/700 `#1c5f55`, uppercase, `+0.35 px`, `Phoenix · Licensed ROC contractor`
- `h1`: 60/66, 700, **−1.5 px**, `#252522`; the **second sentence** is a `#1f7668` span — the colour break is the
  argument ("buy cheap / own expensive"), keep it exactly there
- lede 18/28 `#67675c`, `max-w-xl`
- rating row: 5 `amber-400` stars `aria-hidden`, bold `4.9`, `opacity-80` sample label
- four promises: 16/24 **500** `#3a3a34`, `sm:grid-cols-2`, `gap-3`, 16 px `#1f7668` tick each

The card: white, radius 16, `p-8`, **`shadow-soft`, no border**. `h2` 24/32 (20/28 mobile). Three fields —
two text inputs (`autocomplete` set) and **a native `<select>`**, which is the page's only form control that is
not an input; replacing it with chips or a custom listbox would be a different design. Focus is
`border-primary-500` + `ring-2 ring-primary-500/20`. Footnote 12 px `#8a8a7e`.

### 3 — `#cost` (995 px, `#171715`) — the band that is the template

Header row: text block `max-w-2xl` (672 px, so the `h2` wraps as *"Move the slider and watch the winner / change"*
at 36/40) + the horizon group pinned right at `sm:items-end`, **256 × 46**, `p-1`, `rounded-full`,
`border-white/20`.

The horizon group is **four buttons**, not a slider: `role="group"`, `aria-label="Choose how many years to
total"`, `aria-pressed`, selected → `bg-primary-500` with **dark text** `#171715`. Default `10 yr`.

Cards: `3 × 389`, `gap-6`, `p-6`, radius 16, `border-white/10`, `bg-white/5`; the **middle card is featured**
(`border-primary-500`, `bg-white/[0.07]`). Within each card: `h3` 20/28 + rank pill (12/700, `px-2.5 py-1`);
blurb 14 `white/60` with `flex-1`; `dl` of four rows separated by `border-t white/10 pt-5`, `dt` 14 `white/50`,
`dd` 14/600 **JetBrains Mono** (except `Efficiency`, which stays sans at 600); then `Total over N years`
(12/700 uppercase `white/40`), the total (30/36 700 **mono** `#79cdba`, `tabular-nums`) and a `min-h-[1.25rem]`
note line that reserves space so cards never jump.

**Arithmetic** (verified by clicking all four pills): `total = price + (running + upkeep) × years`, plus
`price × floor((years − 1) / life)` when the horizon outlives the equipment, rounded to **nearest $50**.

| horizon | builder | mid | variable | winner |
| ------: | ------: | --: | -------: | ------ |
|       5 | $18,350 | $18,600 | $20,750 | builder |
|      10 | $30,300 | $27,600 | $28,100 | mid |
|      15 | $48,650 | $36,600 | $35,450 | variable |
|      20 | $60,600 | $55,200 | $56,200 | mid |

Rank pills rewrite per horizon (`Cheapest to own` on `bg-primary-500` + dark text; others `#2` / `#3` at
`white/60` on `white/10`). The life note reads *"Includes replacing it once: expected life N years."* only where
`years > life + 1`.

**Data vs display delta:** the `<dl>` shows `$250` / `$1,600` / `$200` / `$1,300` / `$200` where the `data-`
attributes are `240` / `1620` / `180` / `1280` / `190`. The data reproduces the shipped totals; the `dl` copy is
rounded. Ship one source of truth (the data) and render the `dd`s from it.

### 4 — `#why-us` (940 px, `#f7f7f6`)

`lg:grid-cols-2` `gap-16`, `items-center`, **figure first on `lg` and last on mobile** (`order-last
lg:order-first`). The figure is the page's **only image**: an authored `sizing-panel.svg` (800 × 600), full column
width, radius 16, with a 14 px `#8a8a7e` caption. Four rules in a `<dl>` `space-y-6`, each `border-l-2
border-primary-600 pl-5` — the left rule is the design's only "list" affordance on light ground.

The `h2` is the anti-upgrade pitch (*"Yours is probably smaller than what you have"*). Do not soften it.

### 5 — `#rebates` (931 px, white)

`gap-px` plate: wrapper `bg-ink-100` + `border-ink-100` + radius 16 + `overflow-hidden`, **six white cells**
`p-6 lg:p-8` (404 × 232) → the 1 px gaps *are* the dividers. `h3` 18/28, copy `flex-1` 16 `#67675c`, amount
`mt-4` 14/700 `#1c5f55`. Sixth cell is `Financing` / `From 0% for 12 months` — the row's only non-dollar value.
Closing note is full width, 14 `#8a8a7e`, and it is the honesty clause (*"Programmes change…"*).

### 6 — `#process` (764 px, white)

`<ol>` `sm:grid-cols-3` holding **four** steps → 3 + 1, the fourth alone on row 2 at 389 px. That is the
reference's layout; it is not a mistake to fix and not a step to drop. Each head is the number (14/700
`tabular-nums` `#1f7668`) plus a `h-px flex-1 bg-ink-100` rule filling the row — a hairline that reads as a
timeline. Durations are 14/600 `#1c5f55`.

### 7 — `#areas` (468 px, white)

5/7 split on a 12-column grid. **No eyebrow and no badge** — the section is the page's only light band without
one, which is why it reads as a footnote to the argument. Twelve towns as plain `<li>`s in `grid-cols-2
sm:grid-cols-3`, `py-2.5`, 1 px `#ededea` bottom rule, 16 `#3a3a34`. The note explains the choice.

### 8 — `#testimonials` (796 px, `#f9fafb`)

Stock greys here (`#111827` heading, `#4b5563` lead/lead-in) unlike every other light band — the reference treats
this band as bought-in social proof and it shows in the palette. `Reviews` badge is `#d8f2ea` / `#1c5f55`, not
the ink palette.

Cards **381 × 348**, `p-8`, `shadow-soft`, five **`primary-400`** stars (not amber — the hero's are amber and the
difference is visible), `<blockquote>` 18/28 **500**, 48 px `#d8f2ea` initials disc, 16/600 name, 14 town.

Carousel geometry, measured: per-view **3 / 3 / 2 / 2 / 1** at 1440 / 1024 / 768 / 640 / 390; slides
**405 / 320 / 368 / 304 / 358**; **0 dots and hidden arrows at ≥ 1024**, **2 dots at 768/640**, **3 dots at 390**;
active dot is a 32 px pill, inactive 10 px; 500 ms track, 5 s autoplay paused on hover.

### 9 — `#faq` (820 px, white)

`max-w-3xl` (768 px) centred, five `py-6` rows divided by `#e5e7eb`. Question 18/600 inside a full-width button
(**768 × 32** — the row is only as tall as the text because the disc is `h-8` and the padding lives on the
wrapper). Plus disc 32 px `#f3f4f6`, `#4b5563` glyph, rotates **45°** when open. Single-open accordion,
`max-height` animation; the reference measures **64 px** for row 1. The reference ships **no `aria-expanded`** —
add it.

### 10 — `#contact` (440 px, `#1c5f55`)

Centred `max-w-3xl`. White `h2` 36/40 −0.9, lead **`#d8f2ea`** (not white/70 — the teal ground's own tint),
`solid white` button 241 × 56 with `#1c5f55` 16/700, outline button 2 px `white/40` 259 × 60 with a phone glyph.
Below `sm` both are full width, stacked, 16 px apart.

### 11 — Footer (567 px, `#111827`)

`pt-24`, 12-col grid `gap-8`: brand 4 cols (40 px light logo, `max-w-xs` blurb, three 40 × 40 `#1f2937` social
chips, then address / phone / email at 14), link columns `sm:grid-cols-3` in 5 cols, newsletter in 3 cols with a
one-row input + `Subscribe`. Bottom bar `mt-16 border-t #1f2937 py-8` (85 px), copyright `gray-500` 14. The
reference's three social chips are bare `#` — give them real destinations, and put the Component Dock link here.

## Responsive summary

| width | document height | nav                 | city pill | rebates | process | towns  | carousel |
| ----: | --------------: | ------------------- | --------- | ------- | ------- | ------ | -------- |
|  1600 |           7,312 | desktop             | visible   | 3       | 3       | 3      | 3-up     |
|  1440 |           7,549 | desktop             | **hidden** | 3      | 3       | 3      | 3-up     |
|  1280 |           7,549 | desktop             | hidden    | 3       | 3       | 3      | 3-up     |
|  1024 |           7,959 | **hamburger**       | hidden    | 3       | 3       | 3      | 3-up     |
|   768 |           9,609 | hamburger           | hidden    | 2       | 3       | 3      | 2-up, 2 dots |
|   390 |          12,153 | hamburger           | hidden    | 1       | 1       | 2      | 1-up, 3 dots |
|   320 |          13,116 | hamburger           | hidden    | 1       | 1       | 2      | 1-up, **51 px overflow (defect)** |

`scrollWidth === clientWidth` holds at 390, 768, 1024, 1280, 1440 and 1600 and **fails at 320** (371 vs 320) in the
reference. The recreation must pass at all seven.

## Dark mode

`.dark` on `<html>`, applied pre-paint from `localStorage.theme` (with `prefers-color-scheme` as the fallback) —
the reference does it in a 442 B inline script in `<head>`. Measured after clicking the toggle:

| surface                        | light     | dark       |
| ------------------------------ | --------- | ---------- |
| body                           | `#ffffff` | `#030712`  |
| licence bar                    | `#252522` | `#111827`  |
| header                         | `white/90` | `gray-950/90` |
| hero / `#why-us`               | `#f7f7f6` | `#111827`  |
| `#cost`                        | `#171715` | `#171715`  |
| `#rebates` / `#process` / `#areas` / `#faq` | `#ffffff` | `#030712` |
| `#testimonials`                | `#f9fafb` | `#111827` (cards `gray-800`) |
| `#contact`                     | `#1c5f55` | `#1c5f55`  |
| footer                         | `#111827` | `#111827`  |

The white bands flip, the **cost and contact bands do not** (they are already dark or already brand), and the
testimonial band flips to the same `#111827` as the hero — which is why the two must not be adjacent.

## Screenshot analysis (`rightsize-template.jpg`, 2400 × 1892, served as AVIF)

Not a browser capture: a **macOS window frame** — traffic lights, rounded corners, soft drop shadow — composited
on a **white** ground, with the page's own licence bar and header inside it. It shows the top ~1,900 px:
licence bar, header, the full hero with the request card, and the first two thirds of the `#cost` band (header,
the four pills with **10 yr** selected, and the three cards down to the efficiency row, cut mid-card). Read it as
a marketing composition, not a spec — but it is a useful check on three things: the two-tone `h1`, the card's
shadow-only edge, and the fact that the **middle card is the visually featured one** before any interaction.
Do **not** adopt its white ground or window chrome into the app.

## What the recreation must not carry over

1. `#service-areas` as a link target (dead id, twice).
2. `data-form` / `data-newsletter-form` with no handler (GET reload).
3. FAQ buttons without `aria-expanded` / `aria-controls`.
4. The `dl` figures that disagree with their own `data-` attributes.
5. The "Move the slider" headline with no slider — either keep both faithfully or change both.
6. The dead `nav-active` scrollspy (`getElementById` on route paths).
7. The 51 px overflow at 320 px and the mid-token clip at 390 px in the licence bar.
8. The malformed `tel:(555) 080-0800` and the `og:image` that 404s.
9. The buyer-facing caption *"Replace with a photograph of your own crew…"* rendered as content.
