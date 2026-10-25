# Slotline — design notes (ColorLib `halfpast`)

Reference: `https://preview.colorlib.com/theme/halfpast/` · 105,852 B · Astro + Tailwind 4.3.3 ·
row in `docs/catalog-coverage.md` (`halfpast`, preview 200) · prep commit `openspec/specs/template-slotline/`.

## DOM skeleton (measured, nine bands + three fixed pieces)

```
#preloader                       fixed inset-0 z-100 bg-white           ← not reproduced
#scroll-progress                 fixed top-0 left-0 z-60 h-0.5 accent-500
header[data-header]              sticky top-0 z-50 border-b bg-white/80 backdrop-blur-lg
  div.container.flex.h-16.lg:h-20
    a > logo.svg (h-8 lg:h-10)   + duplicate logo-light.svg for dark
    nav[aria-label="Main navigation"].hidden.lg:flex.gap-8   → 8 × <a> 14px/500
    div.flex.gap-4  → moon button (36×36) · a.rounded-lg.bg-primary-600.px-5.py-2.5 (177×40)
    button[data-mobile-toggle]  (lg:hidden)
nav[data-mobile-menu].border-t.bg-white     → 8 × a.block.py-3 + full-width plum CTA
main#main-content
  §0  hero      relative overflow-hidden bg-gradient-to-b from-accent-50 to-white
      ├ div.absolute.inset-0.-z-10 (aria-hidden) → 2 blurred blobs (data-parallax .15 / -.1)
      └ div.container.py-20.lg:py-32 (1409 tall)
          div.mx-auto.max-w-4xl.text-center
            pill (inline-flex rounded-full border-accent-200 bg-white/70 px-4 py-1.5)  217×34
            h1.font-serif.text-4xl.sm:text-5xl.lg:text-6xl.font-semibold.tracking-tight  896×120
               "One diary, every way" <br> span.text-gradient[data-typewriter]
            p.mx-auto.mt-6.max-w-2xl.text-lg.sm:text-xl                                  672×84
            div.mt-10.flex.flex-col.sm:flex-row.gap-4  → 3 controls
            div.mt-16.grid.grid-cols-2.sm:grid-cols-4.gap-8.border-t.pt-10  → 4 static stats
          div.mt-16.lg:mt-24 → div.max-w-5xl.rounded-2xl.overflow-hidden.shadow-2xl.ring-1 → img 1024×512
  §1  counters  border-y bg-gray-50 py-16 lg:py-20 (238)
      div.container > div.grid.grid-cols-2.sm:grid-cols-4.gap-8
        div.text-center > div.text-4xl.lg:text-5xl.font-bold.text-primary-600 > span[data-counter]
                        > div.mt-2.text-sm.font-medium.text-gray-600
  §2  #book     bg-white py-20 lg:py-28 (983)
      div.container > div.max-w-3xl (header) + div.mt-12.rounded-2xl.border.shadow-sm[data-booking-flow]
        div.grid.lg:grid-cols-12
          col-span-4  p-6 border-r   step 1 services (fieldset of 3 labels, rounded-xl p-4)
          col-span-4  p-6 border-r   step 2 calendar table + step 3 slots grid + summary dl
          col-span-4  p-6            (summary block sits inside the third column)
  §3  #availability  border-y bg-gray-50 py-20 lg:py-28 (826)
      div.container > div.max-w-3xl + div.mt-12.overflow-x-auto.rounded-2xl.border.bg-white.p-5
        table.w-full.min-w-[46rem].border-separate.border-spacing-1
        div.mt-5.flex.flex-wrap.gap-x-6 (legend: 4 × h-4 w-6 swatch)
        p.mt-5.max-w-2xl.text-sm (held-slots expiry note)
  §4  #policies  bg-white (1122)
      div.max-w-3xl header → h3.tracking-[0.16em] "Cancellation ladder"
      ol.mt-6.grid.sm:grid-cols-2.lg:grid-cols-4.gap-4 > li.rounded-xl.border.p-6 (4)
      h3 "What else you can set" → dl.mt-6.grid.sm:grid-cols-2.lg:grid-cols-3.gap-x-10.gap-y-6 > div.border-t.pt-4
  §5  #channels  border-y bg-gray-50 (980)
      div.max-w-3xl header → ul.mt-12.divide-y.border-t > li.grid.lg:grid-cols-12.gap-4.py-6
        (3) name + share · (4) bar h-8 · (3) blurb · (2) setup
  §6  #pricing   bg-white (1072), header CENTRED (mx-auto.max-w-3xl.text-center)
      div.mt-10.flex.justify-center.gap-4 → Monthly · switch (h-7 w-14) · Yearly + Save 20%
      div.mt-12.grid.lg:grid-cols-3.gap-8 > div.relative.rounded-2xl.p-8.shadow-soft (384 each)
  §7  #faq       bg-white (929), header CENTRED
      div.mx-auto.mt-16.max-w-3xl > div.divide-y > div.py-6 > button[data-faq-toggle] + div(panel)
  §8  #contact   relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 (452)
      div.absolute (two white/10 circles + radial dot grid 40px @ opacity-10)
      div.container.relative.z-10 > div.mx-auto.max-w-3xl.text-center
footer.bg-gray-900.pt-16.lg:pt-24 (539)
  div.container > div.grid.gap-12.lg:grid-cols-12
    div.lg:col-span-4 (brand) · div.grid.sm:grid-cols-3.lg:col-span-5 (3 link columns) · div.lg:col-span-3 (newsletter)
    div.mt-16.border-t.border-gray-800.py-8 (bottom bar)
div#mobile-cta    fixed bottom-0 z-40 p-3 lg:hidden (69 px, two pills)
div#cookie-consent fixed bottom-0 z-50 (slides up after 1.5 s)
button#back-to-top fixed bottom-6 right-6 h-12 w-12 rounded-full bg-primary-600
```

## CSS token block (verbatim for `@theme`)

```css
@theme {
  --color-primary-50:  #faf6fa;
  --color-primary-100: #f4ecf3;
  --color-primary-200: #e9dae8;
  --color-primary-300: #d5bcd3;
  --color-primary-400: #b894b5;
  --color-primary-500: #9a7096;
  --color-primary-600: #7e587a;   /* brand */
  --color-primary-700: #684a64;
  --color-primary-800: #563f53;
  --color-primary-900: #493748;

  --color-accent-50:   #f4f7f1;
  --color-accent-100:  #e5ecdf;
  --color-accent-200:  #cddac2;
  --color-accent-300:  #abc09b;
  --color-accent-400:  #86a273;
  --color-accent-500:  #688554;   /* brand */
  /* no accent-600 in the reference — do not invent one */
  --color-accent-700:  #3f5335;
  --color-accent-800:  #35442d;
  --color-accent-900:  #2e3a28;

  --font-sans: Inter, system-ui, sans-serif;
  --font-serif: Fraunces, Georgia, serif;
}
```

Non-utility rules (measured from `Base.CEXwd6Yt.css`):

```css
.text-gradient{background-image:linear-gradient(to right,#7e587a,#b894b5);
  color:transparent;background-clip:text}
.nav-active{color:#111827;font-weight:600}
.shadow-soft{box-shadow:0 4px 16px -4px #0000001a}
.hover\:shadow-soft-lg:hover{box-shadow:0 12px 32px -8px #00000024}
.animate-hero-float{animation:8s ease-in-out infinite hero-float}
.animate-hero-float-reverse{animation:10s ease-in-out infinite reverse hero-float}
@keyframes hero-float{0%,100%{transform:translate(0) scale(1)}50%{transform:translate(0,-24px) scale(1.04)}}
```

Container: Tailwind's `container` (max 80rem = 1280 px, 2rem inline padding at `lg`). Every band uses it —
**do not** replace it with `max-w-7xl` / `max-w-screen-xl`; the nested `max-w-4xl|5xl|3xl|xl` inside the
bands are separate authored widths and are not the same thing (Groundwork's note, from the other
direction: there `container` and `max-w-*` coexisted per band; here `container` is universal and only the
*inner* columns differ).

## Section-by-section fidelity notes

1. **Two number blocks, not one.** Hero `6 / 31 / 4 / 0` is **static** (Fraunces 36 px, `gray-900`,
   labels `Minutes to set up / Percent fewer no-shows / Booking channels / Commission per booking`) and
   sits on a `border-t pt-10`. The strip below is **animated** (Inter 700, `primary-600`, 36→48 px) and
   claims `9400 / 31 / 6 / 0` with *different* labels (`Businesses booking with Halfpast / Percent fewer
   no-shows, median / Minutes to first live booking / Percent commission, ever`). Merging them, or
   animating the hero, is the obvious wrong simplification.
2. **The heading face splits mid-page and the alignment splits with it.** Bands 2–5: left-aligned
   `max-w-3xl`, kicker = 12 px uppercase sage pill, `h2` = **Fraunces 600**. Bands 6–7: centred,
   kicker = 14 px sentence-case lavender pill, `h2` = **Inter 700**. Band 8: centred, no kicker,
   **Inter 700 48 px**. A single global `h2` style breaks three bands.
3. **The widget is the page's argument — every state must be real.** Day 14 pressed on load; 21
   pressable days + 10 `span` days (days 2, 4, 8, 11, 13, 18, 20, 25, 26, 30 are fully booked and must
   **not** be in the tab order); 9 slots of which 3 are `disabled` dashed and 2 are accent-tinted
   "scarce"; confirm disabled until service + day + slot; status line records all three messages.
4. **The calendar is a `<table>`, not a grid of divs.** `caption` (sr-only), `th scope="col"` day
   letters each with an inner `.sr-only` full name, `p-0.5` cells, empty leading cells as
   `<span class="block h-9">`. The month is hard-coded `October 2026`, so **today-dependence is zero** —
   do not wire a real calendar.
5. **Chips are 44 px tiles in a `border-spacing-1` table.** `Not working` is the only state with no
   figure and the only one painted with an arbitrary `repeating-linear-gradient` — it cannot be a
   utility, so keep it as an inline style (or a named class) exactly as measured.
6. **Bar maths is "share of the largest", not "share of the total".** 44 / 27 / 18 / 11 → 100 / 61 / 41
   / 25 %. A naive `width: 44%` produces four visibly short bars.
7. **The ladder's severity is colour, not words.** `Full refund` sage → `Deposit kept` plum →
   `50% of service` plum → `Full price` near-black. If you flatten the pills to one colour the band
   stops reading as an escalation.
8. **Pricing is the only band with a toggle and the only band with a `role="switch"`.** The switch's
   knob travels 28 px in a 56 px track; prices fade 150 ms; the three notes swap between `Billed monthly`
   and `Billed annually ($N/year)`. Keep the exact figures: `$12/39/89` monthly, `$10/32/74` yearly,
   annual `$120/$384/$888`.
9. **The FAQ is exclusive and the first panel measures 88 px.** `max-height` transitions, 45° icon
   rotation, no `<details>`.
10. **Contact band chrome is three layers**: gradient, two `white/10` `blur-3xl` circles, and a 40 px
    radial dot grid at `opacity-10`. Dropping the dot grid is visible at 1440.
11. **Footer columns are 4 / 5 / 3 on a 12-col grid**, with the three link columns themselves a
    `sm:grid-cols-3` sub-grid. The brand column's last line (`No commission on your bookings. Ever.`) is
    a claim, not a legal note — keep it.

## Source → React adaptation table

| reference | recreation |
| --- | --- |
| `#preloader` + inline `window.load` teardown | omitted (no overlay, no flash) |
| `applyTheme()` + `dark:` set + moon button | light-only; moon button omitted; dark values preserved in the spec |
| `ClientRouter` (`astro:page-load` → 21 initializers) | one React tree; each initializer becomes a hook or a component effect |
| `[data-animate]` reveal (arms only below `innerHeight × 0.8`) | `useReveal` with the same gate, disabled under reduced motion |
| `[data-counter]` + 2 s ease-out cubic | `useCounter` (rAF, `Math.round`, no suffix, 0 never animates) |
| `[data-typewriter]` JSON array in the attribute | typed `string[]` constant + `useTypewriter(3000)` |
| `[data-booking-flow]` reading `:checked` / `aria-pressed` | `useState` for `{service, day, slot}` + derived summary; radios and toggle buttons stay native controls |
| inline `maxHeight = scrollHeight` (FAQ) | `useRef` + measured height, `aria-expanded`/`aria-controls` added |
| `translateX(28px)` knob + `data-show-monthly/yearly` | `useState<'monthly'|'yearly'>`, conditional render of the note spans |
| `localStorage['cookie-consent']` | session state only |
| `img[loading="lazy"]` + `img-shimmer` | same class on the `picsum` images, removed on `load` |
| `logo.svg` / `logo-light.svg` (524 B, source brand) | redrawn inline SVG clock mark + `Slotline` wordmark |
| `data-video-modal="…dQw4w9WgXcQ"` | authored sample clip or the control dropped |
| `hello@halfpast.app`, `Halfpast`, `© 2026 Halfpast` | `hello@slotline.app`, `Slotline`, `© 2026 Slotline` |
| 7 inner routes, 49 anchors | 1 route; six nav labels + four footer columns that all resolve on-page |

## Extra observations worth keeping (the prep's "census" findings)

- **49 anchors, 17 distinct hrefs**: `contact` ×7, `#book` ×7, `pricing` ×6, `blog` ×4,
  `#availability` ×3, `#policies` ×3, `#channels` ×3, `about` ×3, `#` ×3, self ×2, `privacy` ×2,
  `terms` ×2, `#main-content`, `mailto:`, `#faq`, `elements`.
- **Three dead `href="#"`** — the footer's X / Instagram / LinkedIn tiles. Fix or unlink.
- **Scroll-spy is half-broken in the reference**: four nav labels carry route strings
  (`/pricing`, `/about`, `/blog`, `/contact`) as `data-nav-link`, which `getElementById` cannot resolve,
  so they never highlight. Keep the highlight on the four real ids.
- **`og:image` is 404** (`/og-image.jpg`) and the JSON-LD `@context` is the mangled string
  `https://***@type`, with `priceCurrency: GBP` against a `$` price table. Do not copy either.
- **The hero photo's alt contradicts the photo** ("a studio reception desk…" over a co-working table).
- **The newsletter form binds to nothing**: the kit's validator only attaches to `form[data-validate]`
  and the landing page has no such form.
- **No archive**: `downloads/free/halfpast.zip` is 404, so the live preview is the only source; and the
  HTML's raw sha256 is request-unstable (the inline `@font-face` block re-orders between fetches) — always
  cite byte size + section census instead.
- **Class census: 718 class attributes, 422 distinct tokens, 0 phantom** — the entire design maps onto
  the measured tokens, so any new colour or arbitrary value in the app is invented.

## Screenshot analysis

`halfpast-template.jpg` — 2400 × 1892 JPEG, 299,745 B. A **macOS browser window** (three traffic lights,
grey title bar, drop shadow) on a **pale sage desk ground**, framing the page from the sticky header to
the top third of the hero photo. It confirms the wordmark + clock, the 8-label nav, the plum CTA, the
sage pill with its live dot, the **two-tone headline with the plum→pale-plum gradient** on the second
line, the CTA trio (plum pill / outline / 48 px disc) and the serif stat strip. It shows none of the
instrument bands and none of the interactive states — treat it as corroboration only, and never let its
desk ground or window chrome leak into the app.

## Sibling comparison (same 2026 Astro family — do not copy values blindly)

| slug → prep | palette | type | kit | structure |
| --- | --- | --- | --- | --- |
| Hedgerow ← `groundwork` | stock Tailwind green + stone | DM Sans + Fraunces | 16,233 B (`BLoalVWc`) | 9 bands, dark toggle, no toggles/switches |
| **Slotline ← `halfpast`** | **hand-picked plum + sage** | **Inter + Fraunces** | **17,669 B (`DqpAEKJ6`)** — adds booking flow + billing switch | **9 bands, two header alignments, three interactive instruments** |
| Quarto ← `fieldnotes-student` | hand-written `:root` sage | Georgia serif | none (10 KB hand-written CSS) | 7 KB page, five JS behaviours |

Shared architecture (worth reusing): `_astro/Base…css` single sheet, the `CYDbzu1r` client router, the
same cookie strip + back-to-top + scroll-progress trio, the same 59-node reveal pattern. Divergent:
the kit hash, the palette, the fonts, the two centred bands, and the two interactive instruments
(`data-booking-flow`, `data-billing-toggle`) that no sibling uses.
