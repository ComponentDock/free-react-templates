# Sparkwell — design notes (replicating ColorLib *Voltway*)

Source: `https://colorlib.com/wp/template/voltway/` · live `https://preview.colorlib.com/theme/voltway/`
(slug `voltway`, catalogue-gap row of `docs/catalog-coverage.md`) · product shot
`https://colorlib.com/wp/wp-content/uploads/sites/2/voltway-template.jpg` (2,400 × 1,892, 295 kB).
Reference build: **Astro + Tailwind CSS 4** (`_astro/Base.kJsPHWid.css`, 62,740 B). Everything below was measured
on 2026-10-25 with `curl -4`, the compiled sheet, and Playwright/Chromium at 1440 / 768 / 390.

## What this one is

An electrical contractor who sells **certificates**, not installations. The copy is unusually opinionated for a
trade site — it names the codes (C1/C2/C3), says what each document *is not*, and tells you which of eight warning
signs is a genuine emergency. The design matches: **blue = the firm, yellow = danger**, a black hazard band for the
24-hour line, and a near-black list where severity is the only colour on the page.

Port strategy: this preview **is** Tailwind — every band, card and heading is a utility string, so copy the
*structure* and reproduce the metrics exactly (never the files). Tailwind 4 inlines the theme colours as literals
(`bg-primary-600` compiles to `background-color:#2563eb`), so the token table in the spec is the reference's own
`@theme` read back out of the output — no approximation. The only measured thing the sheet does not give you is the
typewriter's timing and the counter easing; both are in the 16 kB behaviour bundle and both should be re-timed
sensibly in the recreation.

## Band order (do not reorder, do not insert)

1. preloader · skip link · scroll-progress bar
2. sticky header (81 px incl. its 1 px rule; 65 px below `lg`)
3. hero — credentials pill, two-line `h1` (line 2 rotating gradient phrase), lede, 3 controls, 4-cell fact row,
   1024 × 512 photo
4. `#emergency` — **yellow `#facc15` band**, hazard stripe on top edge, phone button, 3 service windows, charge note
5. counter strip — 4 animated figures on `#f9fafb` with `border-y`
6. `#certificates` — eyebrow, heading, lede, 2 × 2 priced cards (`dl` of who/covers), amber note bar
7. `#warning-signs` — **`#030712` band**, 8 severity-tagged rows, closing instruction
8. `#compliance` — 4 cards with a 36 px yellow square and mono code footnotes
9. `#testimonials` — 3 quote cards in a carousel (arrows ≥ `lg`, dots)
10. `#faq` — 5 exclusive accordions
11. `#contact` — blue gradient band (dot grid + two blurred discs), two buttons
12. footer — `#111827`, brand column + 3 link columns + newsletter, bottom bar with socials
13. chrome over the page: sticky mobile CTA bar, cookie dialog, back-to-top

## Section-by-section fidelity notes

**Header.** White at 80 % with `backdrop-blur-lg`, a 1 px `#e5e7eb` bottom rule, `sticky top-0 z-50`. Nav labels are
**14 px / 500** in `#4b5563`, going `#111827` on hover — not 600, not uppercase. The moon toggle is a 36 px square
`rounded-lg` (radius 8 px, *not* a circle); the menu button sits beside it and is `lg:hidden`. The CTA is 8 px
radius, `12px 24px`, `#2563eb`, with a blue-tinted shadow. The wordmark is a glyph plus text at 20 px / 700.

**Hero.** `bg-gradient-to-b from-primary-50 to-white` — *very* pale blue at the top, pure white by the fold. Two
`blur-3xl` circles drift behind it (`500px` at 50 % opacity from the top, `400px` at 40 % from the right) with
`data-parallax` offsets `0.15` / `-0.1`; they are the only motion above the fold besides the typewriter. The `h1`
is **60 / 60, −1.5 px, 700**, two lines: line 1 solid `#111827`, line 2 a **gradient text** `#2563eb → #60a5fa`.
The credentials pill is full-round, 14 px / 500, `#eff6ff` on a `#bfdbfe` border, with a **two-dot ping** (a
`animate-ping` halo over a solid dot) — reuse it in the emergency pill with the accent colour. The lede is
`max-w-2xl`, 20 / 28. The two text CTAs are followed by a third control that is not a button shape at all: a 48 px
blue disc with a play glyph and the label *Watch Demo*. The fact row is `2 × 2` at 390 and `4` from `sm`, `36 / 700`
figures over `14 / 400` labels, divided from the CTAs by a 1 px rule and `pt-10`. The photo is `max-w-5xl`,
**1024 × 512**, 16 px radius, 1 px `#e5e7eb` ring, `shadow-2xl`, `mt-16 lg:mt-24`.

**Emergency band.** The boldest element on the page. `#facc15` at full saturation, `py-12`, and a **2 px-tall top
edge** painted with `repeating-linear-gradient(45deg, #1e293b 0 14px, #facc15 14px 28px)` — the hazard stripe. Left
side: a **dark pill** (`#030712`, `#fde047` text, 12 px / 700 / uppercase) with the same ping dot, then a `2xl`/`3xl`
heading in `#030712`, then one paragraph in `#1f2937`. Right side: a **phone button** — `#030712`, 12 px radius,
`16px 28px`, 18 px / 700, white — reading the number with a phone icon. Under it three service windows in a row, and
a paragraph that discloses the £120 out-of-hours charge. Keep all of it: the charge disclosure is the band's point.

**Counter strip.** `#f9fafb`, `border-y`, `py-16 lg:py-20`, four centred cells; figures **36 px / 700** in
`primary-600` (`lg:` 48 px), labels 14 px. The reference ships each figure as `0` in the HTML with the real value in
`data-counter` and counts up when the band scrolls in. Do *not* copy the markup's `0`: render the **final value when
the animation APIs are missing** (jsdom has no `IntersectionObserver`) and animate only in the browser
(`docs/conventions.md`, "Animation fallbacks").

**Certificates.** The information design of the page. Eyebrow = 12 px / 700 / uppercase / 0.6 px on `#dbeafe` in
`#1e40af`, **6 px radius** (a chip, not a pill — the pills on this page are the hero/emergency chips and the
avatars). Heading `3xl`/`4xl`, lede `max-w-2xl` in `#4b5563`. Grid `lg:grid-cols-2`, `gap-5`, cards on **2 px**
`#e5e7eb` with 16 px radius, `p-6`, hover border `primary-400` (no shadow, no lift). Card top row is `flex
justify-between`: left a mono **code tag** (`#1d4ed8`, white, 4 px radius, 12 px / 700) over an 18 px / 700 title;
right a `24 px / 700` **tabular-nums** price in `#1d4ed8` over a 12 px `#6b7280` validity line. Then a `dl` behind a
1 px `#f3f4f6` rule: `dt` 14 / 600, `dd` 14 / 20 in `#4b5563`. The *Included* card has a word where the others have a
number — let the price cell take a string, not a `number`. Below the grid: an `amber` bar, `rounded-xl`, 4 px
`accent-400` **left** border, `px-5 py-4`, 14 px copy — the quoting basis.

**Warning signs.** `#030712`, `py-20 sm:py-28`. The eyebrow is the inverse of the blue ones elsewhere: a **yellow
pill** (`#facc15` fill, `#030712` text, 700 uppercase) reading *Do not wait*; heading white, lede `#9ca3af`. The list
is **not** cards: eight rows separated by `white/10` hairlines, `py-5`, each a two-column flex —
a **fixed ~180 px pill column** (severity tag) and a text column — title 16 / 600 white, body 14 / 23 `#9ca3af`.
Pill colours: `#dc2626` white text *Stop using it*; `accent-400` with `#030712` text *Book this week*; `white/10`
with `#d1d5db` text *Mention at next visit*. 11 px / 700 / uppercase, 4 px radius. Counts are **3 / 3 / 2** and the
copy is ordered by urgency, not by severity name — do not sort them.

**Compliance.** `#f9fafb`, four equal cards (`lg:grid-cols-4`), 1 px `#e5e7eb`, 16 px radius, `p-6`, `relative`.
The only chrome is a **36 px `accent-400` square at 8 px radius** in the top-right corner and the **monospaced code**
(14 px / 700 / `#1d4ed8`) — the codes are a typewriter face here and in the certificate tags, nowhere else except
the footer note. Subtitle 16 / 600, body 14 / `#4b5563`, then a 1 px rule and a 12 px mono footnote in `#6b7280`.

**Testimonials.** `#f9fafb`. Three cards, `p-8`, 16 px radius, white, `shadow-soft` (`0 4px 16px -4px rgb(0 0 0/.1)`).
Five yellow stars (`#facc15`, 16 px) in a `flex gap-1`; quote 18 / 28 / 500 in `#111827`; then a 48 px
full-round avatar in `primary-100` with the **initial** in `primary-600` (18 px / 600), name 16 / 600, role 14 px
`#6b7280`. The carousel is a `overflow-hidden` window over a `flex` track of `flex-shrink-0 px-3` slides, moved with
`translateX` + `transition-transform duration-500`; arrows are 40 px white discs with `shadow-lg` at `-left-4` /
`-right-4`, `lg:flex` only; dots are buttons below. At 390 px each slide is **334 px + 24 px padding** inside a
`.container` with 16 px gutters — that is the source of the 11 px overflow; clip the track (defect 4).

**FAQ.** White band, `max-w-3xl`, eyebrow is a **blue pill** (`primary-100` / `primary-700`), centred heading + lede.
Items are `divide-y` rows with `py-6`, a full-width `<button>` (18 px / 600 question, no background) and a 32 px
`bg-gray-100` disc holding a plus icon that rotates 45° when open. The answer is a `max-height: 0 → auto` transition
with opacity, `pt-4`, 16 px `#4b5563`. Exclusive: opening one closes the rest.

**Closing band.** `bg-gradient-to-br from-primary-600 to-primary-800`, `py-20 lg:py-28`, decorative layer: two
`white/10` blurred discs (`blur-3xl`) at opposite corners plus a **radial dot grid** (`radial-gradient(circle at 1px
1px, white 1px, transparent 0)`, `40px` cells, 10 % opacity). Heading white `3xl`–`5xl`, paragraph `primary-100`,
then a **white** filled button (`#1d4ed8` label, `16px 32px`) and a `white/40` outlined button.

**Footer.** `#111827`, `pt-16 lg:pt-24`. Brand column: light logo, `#9ca3af` blurb, address with a pin icon, a `tel:`
link and a `mailto:` link — all inline icon + text at 14 px. Then three link columns (headings 14 / 600 / uppercase /
0.7 px white, links 14 px `#9ca3af` → white on hover) and a newsletter column: heading, one sentence, a **46 px**
input (`#1f2937` fill, `#374151` border, 8 px radius) and a 46 px blue **Subscribe** button side by side. Bottom bar
behind a `white/10` rule: copyright 14 px, three legal links, three social glyphs 20 px.

**Dark mode** is real in this design, not an afterthought: every band has `dark:` values (`from-gray-900 to-gray-950`
hero, `gray-900` counter strip, `gray-950` FAQ, `gray-900/50` compliance, `gray-800` cards, `primary-900/40` tints).
Ship it — the reference's moon toggle flips a `.dark` class on `<html>` and the palette is already defined in the
token table. It is the cheapest visible fidelity win here.

## Deviations we ship on purpose

1. **Wordmark, names, place, phone, email** — Sparkwell, `0800 118 7702`, `office@sparkwell.example`, a Tyneside
   address. Numbers in the copy (6,100 / 90 min / 18 / 100%, £180 / £45 / £3.50, response windows, £120) stay.
2. **Footer column "Spaces" → "Service"** with *EICR · Consumer units · Landlord certificates · PAT* (defect 1),
   **"Book a Tour" → "Book an EICR"** (defect 2).
3. **Five nav anchors** instead of eight links; *About · Blog · Terms* live in the footer (defect 3).
4. **Video modal** holds a local 16:9 placeholder, not a YouTube embed (defect 5).
5. **Photography** is one picsum placeholder seeded `sparkwell-1` (`1024/512`) — the reference's hero photo is an
   Unsplash electrician; the recreation must not hot-link it.

## Things that will bite

- The hero `h1` is **two elements**: the static line and the rotating span. The rotating span must keep its gradient
  (`background-clip: text`) or the whole second line turns into a plain blue word.
- The emergency band's stripe is a **background on a child div**, not a border — a `border-top` with a gradient
  will not tile at 45°.
- Certificate prices are **strings** (*Included*, *£3.50 per item*); a numeric price cell silently drops the label.
- The warning-signs list needs the **counts** (3 red / 3 yellow / 2 grey) asserted in tests; a sort by label breaks
  the urgency order the section is built on.
- `dl` inside `li` inside `ul role="list"` — keep the semantic chain, the reference does.
- Counter and typewriter both need the jsdom fallback from `docs/conventions.md`, or coverage sits at 0 % on the
  timer branches and the lint rules (`react(set-state-in-effect)`) fail the build.
