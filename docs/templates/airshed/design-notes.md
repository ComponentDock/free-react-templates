# Airshed — design notes

Reference: ColorLib **Zephyr** · https://preview.colorlib.com/theme/zephyr/ · measured 2026-10-25
with `curl -4`, the live `getComputedStyle`/`getBoundingClientRect` read-back in Chromium (Playwright
at `/root/free-templates-firebase/node_modules`), and the product screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/zephyr-template.jpg` (200, 122,512 B, 2,400 ×
1,892, **AVIF behind a `.jpg`**). Spec: `openspec/specs/template-airshed/spec.md`.

Everything below is measured. Where a number is inferred it says so.

---

## 1. What this design is

An **indoor-air-quality (HVAC-adjacent) trade site** whose pitch is *measurement before equipment*.
It is a single-page marketing site of nine bands; the nav points at eight real inner pages
(`/about`, `/services`, `/what-we-measure`, `/wildfire-season`, `/service-areas`, `/contact`,
`/terms`, `/privacy` — all 200, trailing-slash only, bare path → 308).

The design's whole grammar is **hairlines and ordinals**, not cards and shadows:

| device | where it appears |
| --- | --- |
| 1 px rule beside a number | the five metric items (`01` ———) |
| `gap: 1px` on a tinted background | the six-service grid, which reads as one bordered block |
| bottom rule per row | the twelve-town list |
| `divide-y` rows | the five FAQ items |
| `border-l-2` at 20 px | the four principles |
| amber stars | hero rating + licence strip, the only non-violet accent |

There is **no photography**: four `<img>` in the document (logo ×3 and one SVG line chart), 44 inline
SVG icons. The single image slot is an 800 × 600 line chart (`air-panel.svg`) captioned "Replace with
a photograph of your own logging equipment in place before launch."

## 2. DOM skeleton (as rendered)

```
body
├─ #preloader                       fixed inset-0 z-100, spinner, removed on window.load
├─ a.skip → #main-content
├─ #scroll-progress                 fixed top-0 h-0.5 bg-primary-600, width = scroll %
├─ div[data-licence-bar]            h-9 (37 px) bg-ink-800, 4 statements + ★ 4.9
├─ header[data-header]              sticky top-0 z-50 h-16 lg:h-20, bg-white/90 backdrop-blur
│   ├─ a → / (logo.svg + logo-light.svg, dark swap)
│   ├─ nav[aria-label="Main navigation"]   hidden, xl:flex, 6 links
│   ├─ div: phone pill (rounded-full, 1 px ink-100) + [data-dark-toggle] + CTA
│   └─ nav (mobile panel, hidden → block)  6 links + phone
main#main-content
├─ section (hero, bg-ink-50)        711 px
│   ├─ grid lg:grid-cols-12 gap-16
│   │   ├─ .lg:col-span-7  eyebrow · h1 (span violet) · lede · ★★★★★ 4.9 · ul 2×2 ticks
│   │   └─ .lg:col-span-5  #quote card → form[data-form] (3 fields, select, submit, footnote)
├─ section#process (.section bg-white)          840 px  header block + ol(sm:grid-cols-3)
├─ section#why-us (.section bg-ink-50)          940 px  figure + div(h2, lede, dl ×4)
├─ section#services (.section bg-white)         915 px  header block + gap-px grid ×6
├─ section#areas (.section bg-white)            468 px  12-col: 5 (h2+lede) / 7 (ul 2–3 cols ×12)
├─ section#testimonials (bg-gray-50)            768 px  centred header + carousel (3 slides)
├─ section#faq (bg-white)                       820 px  centred header + divide-y ×5
├─ section#contact (bg-primary-700)             440 px  h2, lede, 2 CTAs
└─ footer (bg-gray-900)                         568 px  12-col: brand 4 / links 2.5×2 / 2 / 3 + bottom bar
   #cookie-consent, #back-to-top                  fixed, after the footer in source order
```

Container: **`max-width: 1280px`, `padding-inline: 32px` at `lg`** (`16px` below) → 1,216 px content.
Section rhythm: `padding-block: 80px` base, **112px** at `lg`. Header 65 / 81 px. Licence strip 37 px.

## 3. Band-by-band fidelity notes

1. **Licence strip** — `#272733`, 36 px + 1 px border, 12 / 16 text. Left: `Licence` **NM MM-98
   #00000** · *Measurement before equipment* · `Serving` **Bernalillo County** (last two hidden below
   `sm`). Right: one amber star + `4.9` + *150+ reviews on Google (sample)*. Scrolls away; the header
   below it is what sticks.
2. **Header** — 64 px below `lg`, 80 px at `lg`; `bg-white/90` + `backdrop-blur-lg`; bottom hairline
   `#efeff3`; gains `shadow-lg` past 50 px scroll. Wordmark is a mark + two-line lockup (*ZEPHYR /
   INDOOR AIR*). Nav switches at **`xl`**, not `lg` — the markup carries a comment saying the six
   links + pill + toggle + CTA do not fit at 1024. Phone pill is `rounded-full`, 1 px `#efeff3`,
   phone icon + `(555) 140-1400`. Moon toggle 36 px. CTA is violet `rounded-lg`, 14 / 20, 500.
3. **Hero** — `#f8f8fa`; `py-14 lg:py-20`; 12-col grid, gap 64, copy 7/12 / form 5/12 (469 px).
   Eyebrow 14 / 20, 700, uppercase, **0.35 px** tracking, `#6138bc`. `h1` 60 / 66, 700, −1.5 px,
   `#272733`, with the *second sentence* in `#7247dc` (not a gradient). Lede 18 / 28 `#696980`,
   `max-w-xl`. Rating line: five 16 px amber stars, `4.9` in 700, *150+ reviews on Google · sample
   data*. Checklist: `sm:grid-cols-2`, gap 12, 16 / 24 at 500 in `#3c3c4c`, 16 px violet tick with
   `stroke-width: 2.5`.
4. **Form card** — white, 16 px radius, 1 px `#efeff3`, `32px` padding at `lg` (24 below), `shadow-md`.
   `h2` 24 / 32 (20 / 28 below `lg`), subline 14 / 20 `#696980`. Labels 14 / 20 600 `#3c3c4c`; fields
   `12px 16px`, radius 8, 1 px `#dedee6`, focus `border-primary-500` + `ring-2 primary-500/20`.
   The `<select>` has a UA arrow. Submit: full width, `14px 24px`, radius 8, 700, `#7247dc`. Footnote
   12 / 16 `#696980`, centred. **No handler in the reference** (see spec defect 1).
5. **What we measure** — header block `max-w-2xl`; eyebrow + `h2` 36 / 40 −0.9 + lede 18 / 28.
   `ol` `mt-12`, `sm:grid-cols-3`, gap 24/32. Each item: flex baseline row of `NN` (14 / 20, 700,
   `tabular-nums`, `#7247dc`) + `h-px flex-1 bg-ink-100`; `h3` 18 / 28 700 at `mt-4`; body 16 / 24
   `#696980` at `mt-2`; label 14 / 20 600 `#6138bc` at `mt-3`. Items 4–5 fall onto a second row with
   an empty third cell — reproduce that ragged tail.
6. **Why us** — `items-center`, two 576 px columns, gap 64; **figure is `order-last` below `lg`**.
   576 × 432 image, 16 px radius; caption 14 / 20 `#8b8ba0` at `mt-3`. `h2` on `ink-800`; lede
   `ink-500`; `dl` `space-y-6`, each `border-l-2 #7247dc pl-5` with `dt` 16 / 24 700 `#272733` and
   `dd` 16 / 24 400 `#696980`.
7. **Services** — header block + grid `mt-12`: `gap: 1px`, `bg-ink-100`, 1 px border, `rounded-2xl`,
   `overflow-hidden`; 1 col → `sm:grid-cols-2` → `lg:grid-cols-3`. Each cell `bg-white p-6 lg:p-8`,
   `flex flex-col`, copy `flex-1` so prices align, price 14 / 20 700 `#6138bc`. Six cells fill 3 × 2
   exactly — no ragged cell here.
8. **Areas** — no eyebrow. 12-col grid, `lg:col-span-5` copy / `lg:col-span-7` list. `ul` is
   `grid-cols-2 sm:grid-cols-3` with `gap-x-6`; each `li` is `border-b py-2.5` 16 / 24 `#3c3c4c`.
   Twelve towns, alphabetical-ish by geography, not by name.
9. **Testimonials** — `gray-50`, `py-20 lg:py-28`. Centred `max-w-3xl`: pill (`primary-100` /
   `primary-700`, `rounded-full`, `px-3 py-1`, 14 / 20 500), `h2` **`gray-900`** here, lede
   `gray-600`. Carousel `mt-16`: `overflow-hidden` → `flex` track, slides `flex-shrink-0 px-3`, card
   16 px radius, 32 px padding, `shadow-soft`, five 20 px `primary-400` stars, blockquote 18 / 28
   **500**, then a 40 px `primary-100` disc with the initial in `primary-700`, name 16 / 24 600 and
   town 14 / 20 `gray-500`.
10. **FAQ** — `white`, centred header, rows `max-w-3xl`, `divide-y gray-200`, `py-6` each. Button is
    `flex w-full items-center justify-between text-left`; question 18 / 28 **600** `#111827`; a 32 px
    `gray-100` disc with a 20 px `+` that rotates 45°. Panel is `overflow-hidden` with
    `max-height: 0 → scrollHeight` and `opacity 0 → 1`, answer 16 / 24 `gray-600`, `pt-4`.
    **No `aria-expanded`** (spec defect 6).
11. **Closing band** — solid `#6138bc` (not a gradient, unlike the siblings), `py-20 lg:py-28`,
    `max-w-3xl` centred; `h2` white 36 / 40; lede 18 / 28 `#ede8ff` `max-w-xl`; buttons `mt-10`,
    `flex-col sm:flex-row`, `px-8 py-4` 16 / 24 700 radius 8 — white fill with `#6138bc` label, and
    `border-2 border-white/40` with a 20 px phone icon and `Call (555) 140-1400`.
12. **Footer** — `#111827`, `pt-16 lg:pt-24`; 12-col grid, `lg:gap-8`. Brand 4 cols: 40 px light
    logo, blurb `max-w-xs` `gray-400`, three 36 px `gray-800` tiles (Twitter / Instagram / LinkedIn,
    **all `#`**), address, phone, email. Link columns 2.5 / 2.5 / 2: **Services** (4), **Company** (4),
    **Support** (3), heads 14 / 20 600 uppercase 0.7 px white, links 14 / 20 `gray-400`. Newsletter
    3 cols: head + copy + inline email field (`bg-gray-800`, `border-gray-700`, radius 8) + violet
    *Subscribe*. Bottom bar `mt-16 border-t gray-800 py-8`: © 2026 + *Privacy Policy · Terms of Service*.

## 4. CSS token reference (paste-ready)

```css
@theme {
  /* brand — Tailwind violet  */
  --color-primary-50:  #f5f3ff;
  --color-primary-100: #ede8ff;
  --color-primary-200: #dcd4fe;
  --color-primary-400: #a288f7;
  --color-primary-500: #8663ee;
  --color-primary-600: #7247dc;
  --color-primary-700: #6138bc;

  /* custom warm-neutral "ink" ramp (bands 1–4) */
  --color-ink-50:  #f8f8fa;
  --color-ink-100: #efeff3;
  --color-ink-200: #dedee6;
  --color-ink-300: #b9b9c8;   /* reference has no rule; measured placeholder colour */
  --color-ink-400: #8b8ba0;
  --color-ink-500: #696980;
  --color-ink-600: #4f4f63;
  --color-ink-700: #3c3c4c;
  --color-ink-800: #272733;
  --color-ink-900: #171720;

  /* accent, used twice */
  --color-accent-400: #fbbf24; /* amber-400: hero stars, licence strip star */

  --shadow-soft: 0 4px 16px -4px rgb(0 0 0 / .1);
  --radius-lg: .5rem;
  --radius-xl: .75rem;
  --radius-2xl: 1rem;
}
```

Tailwind `gray` stays stock (`50 #f9fafb` … `900 #111827`, `950 #030712`) — bands 5–7 use it and the
footer is `gray-900`. **Do not** add `red-*` / `green-*`; they are compiled in the reference sheet and
never used.

Type: **DM Sans 400 / 500 / 600 / 700**, nothing else.
`https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700` → **200** (verified
2026-10-25). The reference's own inline `@font-face` set only ships 400 / 500 / 700, so every
`font-semibold` node is synthesised — ship the real 600.

## 5. Screenshot analysis (product shot, 2,400 × 1,892)

Two folds only, framed as a browser window:

- **Fold 1** — licence strip (dark, thin) / white header with the mark + *Zephyr INDOOR AIR*, six nav
  labels, phone pill, moon, violet CTA / hero on the pale `#f8f8fa` wash: eyebrow in violet caps,
  a 3-line `h1` whose first sentence is near-black and whose second and third lines are violet,
  three-line grey lede, one row of five amber stars with `4.9`, and a **2 × 2 tick grid**; on the
  right, the white form card with three fields and a full-width violet button.
- **Fold 2** — white band, violet `WHAT WE MEASURE` eyebrow, `h2` "Five numbers, logged for a week",
  two-line lede, then the first row of three metric items: `01` / `02` / `03` in violet above a
  hairline, bold titles, four-line grey copy, violet question label. The shot is cut off just under
  that row, so bands 3–9 are **live-preview evidence only** — do not design them from the image.

Nothing in the shot disagrees with the CSS: the palette, the 12-column hero split and the ordinal
grammar all match the computed values.

## 6. Source → React adaptation

| reference | recreation |
| --- | --- |
| Astro build, 8 inner pages | one Vite SPA route; nav becomes in-page anchors (spec defect 15) |
| `logo.svg` / `logo-light.svg` | inline SVG wordmark, two-line lockup, `currentColor` swap in dark mode |
| `air-panel.svg` line chart | local SVG component (a real chart, not a photo) *or* a picsum placeholder seeded `airshed-1`; keep the 4:3 ratio and 16 px radius |
| `[data-dark-toggle]` + inline theme script | `ThemeProvider` with the class applied in `index.html` before paint |
| `[data-animate]` + IntersectionObserver | `useReveal` hook, `prefers-reduced-motion` early return, delays 0/100/150/200 |
| `[data-faq-toggle]` + `max-height` | `<details>`-free controlled accordion: `aria-expanded`, `aria-controls`, height measured from `scrollHeight` |
| carousel (3 slides, perView 3/2/1) | embla-free custom carousel: `useState` index, `matchMedia` perView, arrows rendered only when `maxIndex > 0`, dots = `maxIndex + 1` |
| `form[data-form]` (dead) | controlled form, `required` validation, inline errors, success panel; no network call |
| `bg-primary-700` closing band | same colour, no gradient |
| placeholder town list, "sample data" notes | keep the copy as *sample* wording, or replace with generic towns — do **not** keep `zephyrair.example` |
| Component Dock credit | **add** a footer link to `https://www.componentdock.com/` (AGENTS.md rule 5) |

## 7. Sibling comparison (same Astro kit, different build)

The batch's shared kit — reveal engine, cookie dialog, `max-height` FAQ, 3-per-view carousel,
`ClientRouter` view transitions — is present here. What differs, and what that means for the build:

| sibling behaviour | this design | consequence |
| --- | --- | --- |
| footer has a **"Spaces"** coworking column + "Book a Tour" mobile bar | **neither** — four real columns (*Services / Company / Support / Stay Updated*), no mobile CTA bar | do not port the leftover-defect repairs; there is nothing to repair |
| every figure + eyebrow in **mono** | **DM Sans throughout**, `tabular-nums` only, JetBrains Mono declared but unused | the type split of the other preps would be a fidelity error here |
| **37 px licence strip** (only Steelworks had one) | **yes**, `ink-800`, above a sticky header | `scroll-margin-top: 96px`; header top edge = 37 px unscrolled |
| gradient closing band | **flat** `#6138bc` | single colour, no dot grid, no blobs |
| counters animating 0 → N | **none** — `01`–`05` are ordinals | no counter component needed |
| carousel dead at `lg` (3 slides / 3 per view) | **same defect**, but the dot guard here renders **0** dots rather than 1 empty dot | ship real controls or static cards (spec defect 7) |
| dead hero form | **same**, `data-form` appears in no bundle | ship validation + confirmation (spec defect 1) |
| 320 px overflow from a header cluster | **different** — the overflow is the carousel track inside `overflow-hidden`, so it is **clipped, not scrollable** | report as clipped; do not "fix" by hiding content |

## 8. Open questions for the implementer

1. The hero's second sentence is violet but there is **no** gradient/typewriter device — do not add
   motion to the headline.
2. The metric list has a **ragged tail** (two items on the last row of three). Keep it.
3. `ink` and `gray` coexist in the reference. Ship one family only (prefer `ink` for 1–4, `gray` for
   5–7 **as measured**) or unify; if you unify, note it in the PR as a deliberate delta.
4. The reference's sample-data disclaimers (*"Sample reviews for demonstration"*, *"Starting prices
   are sample data"*) are part of the design's honesty argument. Keep an equivalent line — do not
   ship invented prices without the disclaimer.
