# Kilter — design notes (replicating ColorLib *Upright*)

Source: `https://colorlib.com/wp/template/upright/` · live `https://preview.colorlib.com/theme/upright/`
(slug `upright`, catalogue-gap row of `docs/catalog-coverage.md`) · product shot
`https://colorlib.com/wp/wp-content/uploads/sites/2/upright-template.jpg` (2,400 × 1,892).
Reference build: **Astro + Tailwind CSS 4** (`_astro/Base.Bj-fneVh.css`, 62,981 B). Everything below was measured
on 2026-10-25 with `curl -4`, the compiled sheet, and Playwright/Chromium at 1440 / 768 / 390.

## Why this one ports almost literally

Unlike the older `css/main.css` kits, this preview **is** Tailwind: every band, card and heading is a utility string,
so the recreation can copy the *structure* of the markup (not the files) and reproduce the metrics exactly. The
compiled sheet also tells you the two custom ramps, because Tailwind inlined them as literals — `bg-primary-600`
compiles to `background-color:#40664a`, and so on. That means the token table in the spec is not an approximation;
it is the reference's own `@theme` read back out of the output.

The one thing the sheet *lies* about is typography: `.font-serif{ }` is emitted as an **empty rule** (no
`--font-serif` in the theme), so all the `font-serif` headings compute to **DM Sans**. Measure, don't trust the class.

## Band order (do not reorder, do not insert)

1. preloader · skip link · scroll-progress bar
2. sticky header (81 px at 1440 / 65 px below `lg`)
3. hero — chip, two-line `h1` (line 2 rotating gradient), lede, 3 controls, 4-cell fact row, 1024 × 512 photo
4. counter strip (4 animated figures) — `#f9fafb`, `border-y`
5. `#conditions` — 4 cards + terracotta-left callout
6. `#first-visit` — dark `#25362a`, 4 timed steps in one shell + tinted note
7. `#team` — 3 portraits, 4:5, with `dl` of registration facts + foot note
8. `#appointments` — 3 fee cards, card 1 dark with a 2 px terracotta ring, note + CTA
9. `#testimonials` — 3 quote cards in a carousel
10. `#faq` — 5 exclusive accordions
11. `#contact` — gradient band, dot-grid decoration, two CTAs
12. footer — 12-col grid (4 / 5 / 3) + bottom bar
13. chrome over the page: mobile CTA bar, cookie dialog, back-to-top

## Section-by-section fidelity notes

**Header.** The bar is white at 80 % with `backdrop-blur-lg` and a 1 px `#e5e7eb` rule; it thickens to 81 px only
because of that border. `h-16` → `lg:h-20`. The CTA is 8 px radius, not a pill — the only pills in the header are
none at all; the *chip* in the hero and the *time pills* in the dark band are the round things. Nav labels are
**500**, not 600, and go from `#4b5563` to `#111827` on hover; the active label steps up to 600.

**Hero.** The wash is `from-primary-50 to-white` — it reads as "very pale sage at the top, pure white at the fold".
The two blobs are `blur-3xl` circles at 50 % / 40 % opacity drifting on 8 s and 10 s loops; they are the only motion
above the fold besides the typewriter. The headline's second line is a **gradient text** (`#40664a → #769d7e`),
which is what makes the screenshot's second line look printed in two inks. The fact row is not cards: four centred
figures over a single hairline with `padding-top: 40px`, and the values are **700** while the labels are 14 `#6b7280`.
The photograph is 16:8 at `max-w-5xl`, radius 16, `shadow-2xl` + `ring-1` — the ring is what keeps the shadow from
looking muddy on the white fold.

**Counter strip.** Ground `#f9fafb` between two hairlines, `py-16 lg:py-20` — noticeably tighter than the 80/112
band rhythm, and that contrast is deliberate. Values `#40664a` 36 → 48 / 700, labels 14/500 grey. The four targets
are strings, not numbers (`3–6`, `45 min`, `2,400`, `100%`), so the counter has to parse a number out and re-apply
the affix.

**Conditions.** Cream cards on white with a **1 px `#c9d9cc` border and no shadow** — if you add `shadow-soft` here
the band immediately reads as "generic SaaS". Each card is a small `dl` with two terms in `#2c4132`, bodies at
`leading-relaxed` (1.625), and a footer rule with the session count in terracotta `#874736`. The callout that closes
the band is the page's honesty in one object: `#fdf5f1` ground, **4 px** `#c2704f` left rule, 16 px radius.

**First visit.** The only dark band on the light half of the page, and the only place `accent-300` appears at
scale. Rows touch through **1 px gaps** (`space-y-px` on a 16 px shell), so the block reads as a single ledger.
Number + time sit in a fixed **160 px** column from `sm`; the time is a `#35513c` pill. The closing note flips to a
tinted terracotta panel with a ring — that is the second callout style in the design and the two must not be
confused (conditions: left rule on `accent-50`; first-visit: full tint on `accent-500/15` + ring).

**Team.** No cards, no borders: portrait 4:5 in a 16 px radius on `#e4ece5`, then name, role in `#874736`, bio, and
a three-row `dl` under a `#e4ece5` rule. The registration value is `font-mono` 12/600 — that monospace detail is the
whole "we publish our numbers" argument, don't drop it.

**Fees.** Card 1 is inverted (`#2c4132` on `#f4f7f4`) and ringed in `#dc8560`; cards 2–3 are white with the same
1 px sage border as the condition cards. Ticks are `#e8a88a` on the dark card and `#40664a` on the light ones — the
same glyph, inverted roles. Prices are `tabular-nums`, the duration is a separate 14 px span after a middot.

**Testimonials.** The only `shadow-soft` on the page, on `#f9fafb`, so the cards float a little. Five stars, a
18/28/500 quote, then a 48 px disc with the initial. The `h2` here is **700** while every other light-band `h2` is
**600** — measured, keep it. With three quotes and three visible at ≥1024 the carousel has nothing to do; that is a
reference defect, not a design choice to preserve blindly.

**FAQ.** No card, no border: five rows on white, `divide-y #e5e7eb`, `py-6`. The 32 px icon disc is grey
(`#f3f4f6`) and rotates 45° to become a cross. Exclusive: opening one closes the others. The answer text is 16
`#4b5563`, so the visual weight stays on the question.

**Contact.** 135° gradient `#40664a → #2c4132`, plus two `white/10 blur-3xl` circles and a **40 px radial-dot grid**
at `opacity-10` — that dot grid is what stops the band from looking like a flat gradient. Headline 48/700 with
`−1.2 px` tracking in a 768 column, sub-line 18 in `#e4ece5`. Primary is a white button with a `#35513c` label
(inverted), secondary is a 2 px `white/30` outline that fills `white/10` on hover.

**Footer.** `#111827` (Tailwind `gray-900`, not the brand's `#25362a` — it is cooler than the dark band above it,
and that difference is visible). 12-col grid 4 / 5 / 3; social chips are 40 px rounded squares on `#1f2937`, not
circles. Column heads are 14/600 uppercase `tracking-wider` white. Inputs are `#1f2937` with a `#374151` border and
the Subscribe button is brand `#40664a`.

## Palette delivery (the part that bites)

- Tailwind 4 inlines `@theme` colours into utilities: there is **no** `--color-primary-*` in the reference sheet.
  The spec's ramp was reconstructed from the utilities (`bg-primary-50{background-color:#f4f7f4}` …) and confirmed
  with `getComputedStyle`. Declare the ramp in `apps/kilter/src/index.css` `@theme`.
- Values seen in the sheet: `50 #f4f7f4`, `100 #e4ece5`, `200 #c9d9cc`, `300 #a3bfa8`, `400 #769d7e`,
  `500 #55805f`, `600 #40664a`, `700 #35513c`, `800 #2c4132`, `900 #25362a`.
- `accent`: `50 #fdf5f1`, `300 #e8a88a`, `400 #dc8560`, `500 #c2704f`, `700 #874736`, `900 #7b3306` (the last only
  appears inside an oklab `/20` mix, so treat it as inferred).
- The page's *inks* are Tailwind greys, not ramped brand colours: headings `#111827`, body `#4b5563`, meta
  `#6b7280`, footer links `#9ca3af`. Do not "brand" the body text.

## Type

DM Sans only, four weights. Measured: `h1` 60/60/700 `−1.5 px` at 1440 (36/40 at 390, 48/48 at 768); `h2` 36/40,
600 or 700 depending on the band; `h3` 20/28/600; card body 14/22.75; band lede 16 (conditions, team) or 18
(testimonials, FAQ); chips 12/600 uppercase `+0.6 px`; footer heads 14/600 uppercase `+0.7 px`.

**Source Serif 4 is a decoy.** It is `@font-face`-loaded (10 faces, all `unloaded` at runtime) and referenced by
`font-serif` on most headings, but the compiled `.font-serif` rule is empty, so nothing ever renders in it. Ship DM
Sans everywhere; drop the serif.

## Rhythm and shape

80 px band padding, 112 px from `sm`/`lg`; the hero takes 128 (`lg:py-32`), the counter strip only 64/80. Cards 16 px
radius, buttons 8 px, chips/pills/avatars/discs full round. One soft shadow for testimonial cards, one 2xl shadow for
the hero photo, one `shadow-lg` that means "the header is stuck". Focus ring is `2px #55805f` at 2 px offset —
not the brand green, one step lighter.

## What "looks wrong" first (self-check while building)

1. Serif headings (the decoy) — should be DM Sans.
2. 12 px card radii instead of 16, or buttons at 6 px instead of 8.
3. The hero wash reading grey instead of pale sage (`#f4f7f4`, not `#f9fafb`).
4. Conditon cards with shadows, or a dark first-visit band that is `gray-900` instead of `#25362a`.
5. The two callout styles swapped.
6. Fee card 1 with a 1 px border instead of a **2 px** terracotta **ring** (a border changes the box metrics).
7. Team photos at 1:1 or 3:4 instead of 4:5.
8. Nav labels at 600 (they are 500), or the header CTA as a pill (it is 8 px).
9. Missing dot grid / blobs in the closing band, leaving a flat gradient.
10. Footer ground at the brand `#25362a` instead of `#111827`.
11. Body copy in brand green; it is `#4b5563` grey.
12. Testimonial cards without `shadow-soft` (they will merge into the `#f9fafb` ground).

## Evidence kept in /tmp (regenerate with the commands in the spec’s "Reference readings")

`upright.html`, `base.css`, `app.js`, `cl.html`, `shot.jpg`/`shot.png` (product shot), `live-1440-full.png`,
`live-390.png`, `band-conditions.png`, `band-firstvisit.png`, `band-team.png`, `band-appointments.png`,
`band-testimonials.png`, `band-faq.png`, `band-footer.png`, `measure.json`, plus the scripts `measure.js`,
`bands.js`, `boxes.js`.
