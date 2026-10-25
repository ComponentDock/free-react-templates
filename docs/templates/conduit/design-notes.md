# Conduit — design notes

Source: ColorLib **Nodig** (`nodig`), live preview `https://preview.colorlib.com/theme/nodig/`
(HTTP 200, 79,808 B, read 2026-10-25 with `curl -4`). Recreation name `conduit`. Spec:
`openspec/specs/template-conduit/spec.md`. Tasks: `docs/templates/conduit/tasks.md`.

A 2026 **Astro + Tailwind 4** build (`/*! tailwindcss v4.3.3 */`, one 55,793 B sheet, the same 16,233 B
house kit as Nightshift) for a **trenchless sewer-relining firm in Tampa**. Its own `<title>` states the
brief: *"Trenchless sewer repair in Tampa, **compared honestly against digging**"*. Build to that clause —
the comparison table is the design, not a section in it.

## Structure order (measured at 1440 × 900)

| #  | band                          | id / hook            | ground               |   top | height |
| -- | ----------------------------- | -------------------- | -------------------- | ----: | -----: |
| 0  | licence bar                   | `[data-licence-bar]` | `#242420`            |     0 |     37 |
| 1  | header (sticky)               | `[data-header]`      | `white / 90 %`       |    37 |     81 |
| 2  | hero + survey card            | `#quote`             | `#f6f6f4`            |   118 |    668 |
| 3  | emergency strip               | `#emergency`         | `#974e2c`            |   786 |    164 |
| 4  | comparison table              | `#compare`           | `#ffffff`            |   950 |  1,371 |
| 5  | four steps                    | `#process`           | `#ffffff`            | 2,321 |    780 |
| 6  | six services                  | `#services`          | `#ffffff`            | 3,101 |    927 |
| 7  | pipe panel + four rules       | `#why-us`            | `#f6f6f4`            | 4,028 |    864 |
| 8  | twelve towns                  | `#areas`             | `#ffffff`            | 4,892 |    468 |
| 9  | carousel                      | `#testimonials`      | `#f9fafb`            | 5,360 |    768 |
| 10 | five answers                  | `#faq`               | `#ffffff`            | 6,128 |    820 |
| 11 | closing CTA                   | `#contact`           | `#7b3f26`            | 6,948 |    440 |
| 12 | footer                        | `<footer>`           | `#111827`            | 7,388 |    567 |

Document **7,955 px** at 1440; 7,727 at 1600; 8,291 at 1024; 9,473 at 768; 12,592 at 390; 13,659 at 320.
Every `.section` is `py-20` → `lg:py-28` (**80 / 112 px**); the hero container is `py-14` → `lg:py-20`
(**56 / 80 px**) and the hero's height is set by the copy column, **not** by the card (card 508 px, copy
column 484 px + 24 px `lg:pt-6`, band 668 px).

## Section-by-section fidelity notes

### 0 — Licence bar

A **trust strip, not a nav**: `Licence FL CFC #0000000` · `Liner manufacturer certified` · `Serving
Hillsborough & Pinellas`, plus a sample Google rating, all at 12 px on `#242420`. It is the darkest element
above the fold and it is **not sticky** — by the time a reader reaches the prices, the licence number is gone.
Items 2 and 3 are `hidden sm:flex`, so on a phone the strip is one fact and a rating. The left `<ul>` is
`overflow-hidden` and therefore **clips mid-token at 390** (`Licence FL CFC #`): the one thing to fix rather
than copy.

### 1 — Header

Six labels switch on at **`xl` (1280)**, not `lg`, and the city pill at **`2xl` (1536)**. The markup ships
comments explaining both decisions — a trade header carries nav + city pill + phone pill + theme toggle + CTA,
and between 1024 and 1279 the nav's `min-w-0` makes it shrink and paint its last link under the pill. Keep the
breakpoints; they are load-bearing. The city pill's `href="#service-areas"` is a **dead id** (the section is
`#areas`) — the reference's own bug, shipped twice (header + mobile panel).

### 2 — Hero

7/5 split, 64 px gap, `#f6f6f4`. The `h1`'s colour break is *inside* the second sentence
("Fix the pipe. **Keep the driveway.**"), not between sentences — the screenshot confirms the break lands
mid-phrase. The card is the only element on the page with `shadow-md`; its separation from the band is
carried by shadow + a 1 px `#ebebe7` border, not by a colour jump. The form is **inert in the reference**
(`action="#"`, no handler, no validation UI): the three fields exist to look answerable, and submitting
reloads the page. That is the single most important thing to fix in the recreation — the card's whole promise
is *"we reply within the hour"*.

### 3 — Emergency strip

No eyebrow, no `h2`, no section padding: `py-6 lg:py-8`, 164 px. Its job is a different sentence from the rest
of the page — *clear today, quote later* — and its button is the page's **only full-radius** control (white
pill, 18/700 `#7b3f26`). The `animate-ping` dot is the only animation outside the carousel and the reveals.
Directly after it sits a fixed bottom call bar, `lg:hidden`, 97 px tall — nothing in the kit binds
`data-sticky-call`, so it is pure CSS visibility.

### 4 — `#compare` (build this first)

A 12-column grid pretending to be a table: header row 53 px (hidden below `md`), nine rows of 88 px, even
rows `bg-ink-50/60`. **The emphasis is the content**: exactly one cell per row is `font-semibold #242420`, the
other is `#636356`. Relining is bold in rows 1–4 (disruption, surface, reinstatement, trees) and 9
(neighbours); open cut is bold in 5–7 (price, collapse, gradient); **row 8 "Life expectancy" is bold
nowhere** — which is what makes the footnote's "relining wins 5 rows and open cut wins 3" arithmetically true
across nine rows. A recreation that bolds a winner in row 8 breaks a *stated, checkable* claim.

Below `md` the table stops being a table: the header row disappears and every cell carries its own 12/700
uppercase label, so the stacked rows read `Days on site` → `RELINING` → text → `OPEN CUT` → text. Both of the
reference's closing notes belong to the artefact: the counting sentence and the "Figures are illustrative for
a typical single-family lateral" caveat.

### 5 — `#process`

Four steps in `sm:grid-cols-3` → **3 + 1**, measured at 768, 1280 and 1600. Each step's head is a
`tabular-nums` number (14/700 `#974e2c`) plus a 1 px `#ebebe7` rule that runs to the column edge; the tag
("Same day", "60 to 90 minutes", "Within 1 working day", "Usually 1 day") is 14/600 `#7b3f26` under the body,
and it is the step's *proof* — keep it aligned to the bottom of each cell, not to the text above it.

### 6 — `#services`

Six white cells over an `#ebebe7` ground with `gap-px` — the wrapper draws the dividers, so a 1 px gap is the
entire grid line. Cells are `flex flex-col` with a `flex-1` blurb: that is what puts all six price lines on the
same baseline in each row, and it is worth a test. Prices are 14/700 `#7b3f26`; the sixth is a sentence
("Quoted after survey"), not a number — that asymmetry is the design's honesty.

### 7 — `#why-us`

The only image on the page is a **1.5 KB drawn SVG**: a near-black plate (`#242420` on `#161614`) showing the
old pipe (`#383830`) with a terracotta liner (`#b4643b`) inside it, two white access shafts, a ground-level
bar, and a two-item legend. Its title is the only text on the entire page set in **Fraunces** — the sheet
defines `.font-display`, but zero markup elements use it; the serif is loaded for this one `<text>` node.
Redraw the panel as inline SVG/CSS (it is rectangles and labels) and keep the caption: *"Replace with a still
from one of your own camera surveys before launch. It is the most persuasive image this business has."*

The four `<dl>` entries are `border-l-2 #974e2c pl-5` — a rule, not a card — and they are the page's ethics
argument: the footage is yours, both prices every time, sometimes the answer is jetting, we camera it
afterwards too.

### 8 — `#areas`

The one band with **no eyebrow**: a plain 5/7 split, twelve towns as underlined text rows (2 → 3 columns), and
a note that tells the buyer to replace the list. It is the cheapest local-search signal on the page, which is
exactly what the note says.

### 9 — `#testimonials` (the one stock-grey band)

`gray-50` ground, `gray-900` headings, `gray-600` lead — **not** the `ink` ramp used everywhere else. The
eyebrow is a **pill** ("Reviews"), the stars are `primary-400` `#c97f55` (not amber, unlike the hero's), the
quote is 18/28 **500**, and the avatar is a 48 px `#f5e5d9` disc with an initial. The carousel shows **all
three cards at `lg`**, which means the kit computes `maxIndex = 0` and renders **no dots and hides both
arrows**; at 768 it shows two with two dots; at 390 one with three dots (active dot = 32 px pill). Reproduce
the *result*, not a general-purpose carousel with permanently visible arrows.

### 10 — `#faq`

Five rows, `divide-y #e5e7eb`, 81 px closed, question 18/600 `gray-900`, 32 px `#f3f4f6` disc with a plus that
rotates 45° on open. Single-open accordion: opening a row closes the previous one, `max-height` set to the
panel's own `scrollHeight`, `opacity` 0 → 1 over 300 ms. No `aria-expanded` in the reference — add it.

### 11 — `#contact`

`#7b3f26`, 440 px, centred. The two buttons are deliberately different objects: a solid white 240 × 56 and a
2 px `white/40` outline 255 × 60. Below `sm` both go full width and stack.

### 12 — Footer

`#111827`, `pt-24`, 12 columns split 4 / 5 / 3. The middle five columns hold three link lists (Services,
Company, Support) with 14/600 uppercase headings; the last is a newsletter column whose copy is *seasonal
maintenance reminders*. The newsletter form is **dead markup** — no `action`, no handler. The whole footer's
single-column track resolves to **385 px inside a 358 px container** at 390, which is what pushes the
document to 401 px; the fix is `min-w-0` on the columns, or letting the input+button row wrap.

## Traps (each measured, each cheap to get wrong)

1. **Tailwind 4 inlines the custom palette.** The compiled sheet contains **no `--color-ink-*` or
   `--color-primary-*` properties at all** — every `bg-primary-600` is a literal `#974e2c`. Grep the utilities,
   not `:root`; the spec's token tables were rebuilt that way. The app must declare the ramps in its own
   `@theme`.
2. **Two palettes, one page.** `#testimonials` and `#faq` use stock greys; everything else uses `ink`. Unifying
   them is invisible in isolation and obvious side by side.
3. **Row 8 of the comparison is neutral on purpose.** Bolding either side makes the footnote false.
4. **`#process` is 3 + 1.** Four items, three columns. Do not "balance".
5. **The services dividers are a 1 px *gap*** over an `#ebebe7` ground — not borders on the cells (borders
   would double at the seams and add a rim inside the radius).
6. **The hero band height is `160 + 508`.** Both columns measure **508 px** — the card literally, the copy
   column as 484 px of content plus the 24 px `lg:pt-6` — so the band is 80 + 508 + 80 = **668**. Change the
   card's padding and the band moves; the copy column does not need to be balanced separately.
7. **`data-form`, `data-newsletter-form`, `data-phone`, `data-sticky-call`, `data-emergency` and
   `data-licence-bar` are all inert** in this kit. Only the hooks listed in the spec's table do anything.
8. **The card's `action="#"` is not a behaviour** — a React form with `action="#"` reloads with the query
   string; ship a real submit result instead.
9. **`#service-areas` does not exist**, and the JSON-LD phone (`+1-555-0700`) disagrees with every `tel:` link
   (`5550700700`).
10. **The overflow at 320/390 is constant 401 px** — bisect `body`'s children (footer), then the footer's grid
    track. A naive "elements wider than the viewport" scan only finds carousel slides, which are clipped by
    `overflow-hidden` and are innocent.
11. **The screenshot is a window composition** (macOS chrome on grey), 2400 × 1892, served as **AVIF** despite
    `.jpg`; it stops below the hero's four ticks. Do not adopt its ground or chrome.
