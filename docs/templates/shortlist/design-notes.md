# Shortlist — design notes (`card-13` → `apps/shortlist`)

Research date **2026-10-26**. Live reference: `https://preview.colorlib.com/theme/bootstrap/card-13/`
(**200, 6,443 B**). Source spec: `openspec/specs/template-shortlist/spec.md`. Task outline:
`docs/templates/shortlist/tasks.md`. Every number below is measured (`curl -4`, Playwright 1.62
Chromium at 20 viewport widths), not read off the sheet — where the two disagree, the measurement wins
and is marked.

## 1 — What this design actually is

A **job listing board**: four roles from four employers, each card answering, in order — *who is hiring
and how fresh the post is* (initials tile + company + age), *what the role is* (title, the card's only
link), *where and how it is worked* (pin + city, work-mode pill), *what they want you to know* (skill
chips) — then a ruled footer answering *what it pays and what kind of contract it is*.

It is the **thirteenth member of the `card` family** and it is the family's **first image-free card**:
`document.querySelectorAll('img').length === 0`, there is no `images/` directory in the archive, and the
only visual anchor is a **44 × 44 coloured square with two capitals in it**. Everything the eye reads as
"employer" comes from four different hue families and two letters.

Two things make it a *listing* and not a *content* card:

1. **The state is the point.** One card ships pre-saved, so the demo opens showing both presentations at
   once: three white cards with outlined bookmarks, one lime-cream card with a filled dark bookmark.
   The counter in the head (**Saved jobs: 1**) is that same fact in words.
2. **The footer is a receipt line, not a summary.** Full-bleed inside the padding, hairline on top,
   salary left in bold ink and contract right in quiet grey. It is the card's only ruled edge.

## 2 — Structure order (1:1, nothing elided)

```
main.cl-card13-demo                      max-width 1040 content + padding clamp(32,6vw,72) 16
├─ header.cl-card13-demo__head           flex / wrap / align-items flex-end / space-between / gap 14 / mb 24
│  ├─ div                                (shrink-to-fit left group)
│  │  ├─ h1.cl-card13-demo__title        "Design & product roles"   26–36 / 800 / −.02em / 1.1
│  │  └─ p.cl-card13-demo__sub           "128 open positions · updated today"  15 / #4b5a52 / mt 6
│  └─ p.cl-card13-demo__saved            svg bookmark 18 (fill ink) + "Saved jobs: " + strong 1
└─ div.cl-card13-grid                    repeat(auto-fit, minmax(min(100%,380px),1fr)) / gap 16
   └─ article.cl-card13  (×4)            p 20 20 18 / border 1 #e3e8e4 / radius 18 / white / flex column
      │                                  [:has(save[aria-pressed=true]) → border #a3c76a, bg #fbfdf6]
      ├─ div.cl-card13__head             flex / align-items center / gap 12
      │  ├─ span.cl-card13__logo         style="--cl-card13-logo:<hex>"  44×44 / radius 12 / 16 800 white
      │  ├─ div.cl-card13__company       flex 1 / column / lh 1.3
      │  │  ├─ span.cl-card13__name      company            14.5 / 700
      │  │  └─ span.cl-card13__posted    "Posted 2 days ago" 13 / #4b5a52
      │  └─ button.cl-card13__save       aria-pressed / aria-label   40×40 / radius 12 / svg 19 stroke 2
      ├─ h2.cl-card13__title             mt 16 / mb 8 / 19 / 700 / −.01em / 1.3
      │  └─ a.cl-card13__link            href   (::after inset 0 z1 radius 18 = whole-card hit area)
      ├─ p.cl-card13__where              flex / wrap / gap 10 / 14.5 / #4b5a52
      │  ├─ span                         svg pin 16 stroke 2 (gap 4) + "Amsterdam, NL"
      │  └─ span.cl-card13__remote       pill 2px 9px / radius 999 / 12.5 / 700
      │     ├ --hybrid                   #0c4a6e on #e0f2fe
      │     └ --office                   #3f3f3a on #f1f1ee
      ├─ ul.cl-card13__tags[aria-label=Skills]   flex / wrap / gap 6 / margin 14 0 18
      │  └─ li  (×3–4)                   p 4 10 / radius 8 / border 1 #e3e8e4 / 13 / 500 / #2c3a33
      └─ div.cl-card13__foot             mt auto / pt 14 / border-top 1 #e3e8e4 / space-between
         ├─ p.cl-card13__pay             strong 16 / 700 ink  +  " / year" 14.5 #4b5a52
         └─ span.cl-card13__type         "Full-time"  13 / 600 / #4b5a52
   p.cl-card13-demo__status              role="status" / min-height 1.5em / mt 16 / 14 600 #3f6212
   script                               js/snippet.js — the only behaviour
```

Four cards, top to bottom in the reference:

| #  | company            | initials / tile | role                                   | location       | mode pill          | chips                             | pay               | contract  | saved |
| -: | ------------------ | --------------- | -------------------------------------- | -------------- | ------------------ | --------------------------------- | ----------------- | --------- | :---: |
| 1  | Tideline           | `Td` `#0e7490`  | Senior Product Designer                | Amsterdam, NL  | Remote in EU       | Design systems · Figma · B2B SaaS | €78k – €95k / year | Full-time | no    |
| 2  | Northvale Health   | `Nv` `#7c3aed`  | Product Manager, Patient App           | London, UK     | Hybrid · 2 days    | Mobile · Healthcare · Discovery · SQL | £70k – £85k / year | Full-time | **yes** |
| 3  | Fieldstone Labs    | `Fs` `#c2410c`  | UX Writer (Contract, 6 months)         | Anywhere       | Fully remote       | Microcopy · Content design · Fintech | $65 – $80 / hour | Contract  | no    |
| 4  | Greenpath Energy   | `Gp` `#15803d`  | Junior UI Designer                     | Berlin, DE     | On-site            | Visual design · Prototyping · Climate tech | €48k – €56k / year | Full-time | no    |

The dataset is deliberately shaped to test four different things: **the three pill variants** (remote /
hybrid / office), **two pay periods** (`/ year` vs `/ hour`), **two chip counts** (3 vs 4 — the wrap
case), and **four tile colours**. A port that normalises any of these loses the demo.

## 3 — Where the fidelity lives

### 3.1 The saved state repaints the card, not the button

The reference does it in one rule:

```css
.cl-card13:has(.cl-card13__save[aria-pressed="true"]) { border-color: #a3c76a; background: #fbfdf6; }
.cl-card13__save[aria-pressed="true"] { border-color: #13201a; background: #13201a; color: #d9f99d; }
.cl-card13__save[aria-pressed="true"] svg { fill: currentColor; }
```

Measured on the pre-saved card 2: border `rgb(163,199,106)`, ground `rgb(251,253,246)`, button
`rgb(19,32,26)`, glyph `rgb(217,249,157)`. Three surfaces change together; a port that only fills the
bookmark reads as a different design.

**In React this must be state, not `:has()`.** jsdom's selector engine does not evaluate `:has()` for
matching, so a `:has()`-only port passes in a browser, fails invisibly in tests, and — worse — would
need the test to assert something it cannot see. Ship the classes from `saved.includes(job.id)`.

### 3.2 The counter is derived state, and so is the sentence

`snippet.js` is 39 lines and contains exactly one computation, repeated on every click:

```js
count.textContent = String(document.querySelectorAll('.cl-card13__save[aria-pressed="true"]').length);
```

The reference reads the DOM as its source of truth because it has no framework. The port inverts that:
`Saved jobs: {saved.length}` and the same array feeds the card presentation. The status sentence is the
same click's payload, written into a **single** `role="status"` element — clicking a second card
replaces the sentence rather than appending.

Verified journey: initial `counter "1"`, `pressed [false,true,false,false]`, status `""`; click card 3 →
`counter "2"`, `status "UX Writer (Contract, 6 months) saved to your list."`, `pressed
[false,true,true,false]`.

### 3.3 The grid's floor is `min(100%, 380px)`, and it is load-bearing

`repeat(auto-fit, minmax(min(100%, 380px), 1fr))` — the `min(100%, …)` is what lets a 288 px phone use a
288 px track instead of overflowing to 380. Measured: **2 columns at viewport 808** (grid 776 =
380 + 16 + 380), **1 at 807** (775). At 320 the track is exactly **288** and `scrollWidth === clientWidth`.
Port it as `grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]` — a `sm:`/`md:` pair is a visible
regression at every width between the breakpoints.

At 1,440 the content box caps at 1,040, so the tracks cap at **512** and stop growing — the page is
centred, not stretched.

### 3.4 The head has a one-pixel wrap threshold

The head is `flex-wrap` with the left group **shrink-to-fit** (so it is as wide as the `h1` at its current
font size, not `flex: 1`). At the clamp floor the group needs **264.56**, the saved line **114**, the gap
**14** → **392.56** of content, i.e. **408.56** of viewport… but the left group's width is the *h1's*
shrink-wrap width, which changes with the clamp, so the actual switch measures at **425**:

| viewport | head height      | saved line                     |
| -------: | ---------------: | ------------------------------ |
|      425 |  **52.59**       | x **295**, y 66.59 (right)     |
|      424 | **84.59**        | x **16**, y 98.59 (wrapped)    |
|    1,440 |       63.59      | x **1126**, y 117.59           |

`align-items: flex-end` is why the saved line's baseline sits on the sub-line's bottom, not the head's.

### 3.5 The footer is pinned by `margin-top: auto`

Card height at 1,440 is **253.84**, and that number is arithmetic, not a design value:

```
1 (border-top) + 20 (pt) + 44 (head row: the tile is the tallest child)
+ 16 + 24.69 (title, 19 × 1.3) + 8
+ 22.13 (where row — the pill is taller than its 14.5 px text)
+ 14 + 28.84 (chips) + 18
+ 38.19 (foot: 14 pt + 24.19 content, the 16 px strong sets the line box)
+ 18 (pb) + 1 (border-bottom)
= 253.84
```

Because the footer is `margin-top: auto`, the spare height inside a taller row goes **above** the rule,
so all footers in a row line up on one baseline. At 320 the two cards whose titles wrap grow to
**313.38** and their footers drop 24.69 — the rule still lands on the card's bottom edge, not on a fixed
offset. No `h-[253.84px]` anywhere.

### 3.6 The chips are the overflow mechanism

3 / 4 / 3 / 3 chips, `gap: 6px`, `1px` borders, 28.84 tall. Measured wrap points: at a **328** track
(viewport 360) the four-chip cards wrap to two rows and become **288.69** against **253.84**; at **288**
(viewport 320) all four wrap. That is the honest behaviour of the design — do not shrink the chip text
to keep one row.

Chip widths at every width are stable (**120 / 58 / 79** for card 1) because the font size never changes;
only the container does.

### 3.7 Nothing moves

The reference has one shadow and it only appears on hover (`0 14px 30px -22px rgba(19,32,26,.5)`), one
transform and it only appears on press (`scale(.92)`), and three transitions, all killed by
`prefers-reduced-motion`. There is no reveal, no parallax, no count-up — the counter just changes. Adding
motion would be the single most visible deviation.

## 4 — Traps found while measuring

1. **The `main` element is `content-box`.** The sheet's `all: revert` reset leaves `main` without
   Tailwind's border-box, so `max-width: 1040px` measures **1072** wide with its 16 px padding. In the
   port (border-box) `max-w-[1040px]` gives a **1040** outer box and the grid becomes **1008** —
   **32 px narrower** than the reference, and the 1,440 tracks become 496 instead of 512. Either keep
   `max-w-[1040px]` on an inner content div or use `max-w-[1072px]` on the shell. This is the one place
   where a "correct" Tailwind translation is a 32 px fidelity loss.
2. **`.cl-icon` is dead** — declared, never used, fifth card in a row to carry it. Do not port.
3. **`--cl-card13-lime` is decorative.** It is declared on the card and used by the default pill, but the
   hybrid and office variants are literal hex pairs. In the port make all three variants named tokens.
4. **The pressed label never changes** (`aria-label="Save …"` while pressed). Fix it.
5. **`href="#"` on all four titles.** Fix it; assert zero in tests.
6. **The counter starts at 1 because the markup says so, twice** (`aria-pressed="true"` and a literal
   `1`). Derive both from the initial saved set.
7. **Text is 14.5 px, not 14 or 15.** The card sets `font-size: 14.5px` and everything without its own
   size inherits it — including the "/ year" suffix and the location row. Rounding it to `text-sm`
   changes the card height by a fraction of a pixel per line and breaks the 253.84 arithmetic.
8. **The pill is taller than its text.** `2px 9px` padding on a 12.5 px font gives **22.13** — that height
   is what fixes the location row's box and therefore the card's.

## 5 — Colour decisions to carry into `@theme`

The page has one accent (lime `#d9f99d`) used three ways: the default pill, the saved card's glyph, and
the saved border (`#a3c76a`, a muted step of the same hue). Everything else is a green-grey neutral
family — `#f4f6f3` ground, `#e3e8e4` hairline, `#4b5a52` muted, `#13201a` ink, `#2c3a33` chip text.

That means **the card has no brand-blue, no gradient, no dark band** — the composition is carried by
typography weight and four small colour squares. If a build looks "flat", the cause is almost always a
missing weight (800 on the `h1` and the initials, 700 on names and titles) rather than a missing colour.

Focus colour is the one deliberate change from the reference: `#65a30d` measures **3.09:1** on white and
**2.84:1** on the ground, so the title's card-edge ring fails 3:1. Ship **`#3f6212`** (7.08:1 / 6.51:1).

## 6 — Open questions the implementer can settle

- **Title target.** Four real paths (`/jobs/<slug>`) would make the anchors honest, but the app is a
  single screen with no router. A `<a>` with a real path and no navigation handler is acceptable for the
  first ship; a `<button role="link">` is not (it would add four more tab stops' worth of semantics for
  no gain). Tests must pin `a[href="#"]` count at 0 either way.
- **`<time>` for the posting age.** "Posted 2 days ago" is relative copy with no machine date in the
  reference. Wrapping it in `<time dateTime="2026-10-24">` is an improvement that does not change the
  visible text; it costs one extra data field. Optional.
- **The `<ul aria-label="Skills">`.** It is a real list and the label is what gives a screen reader the
  grouping. Keep both; a `div` of spans measures identically and reads worse.

## 7 — Shipped deltas (`apps/shortlist`, 2026-10-26)

Built and measured against the live reference in this run (Playwright 1.62 Chromium, 1,440 × 900 and
390 × 844). What matches the reference to the pixel:

- `main` box **1072 × 835.78 at x 184** (content **1040 at x 200**), `h1` at **y 72, 36 px / 39.59**
  line box, head **63.59** tall, grid at **y 159.59**, tracks **512 / 512**, card **512 × 253.84**,
  card border `#e3e8e4` and radius **18**.
- Saved card: ground **`rgb(251,253,246)`**, border **`rgb(163,199,106)`**, button **`rgb(19,32,26)`**
  with a **`rgb(217,249,157)`** glyph — driven by React state, not `:has()` (defect 5).
- Behaviour: first render `["false","true","false","false"]` and **Saved jobs: 1**; clicking card 3
  gives **Saved jobs: 2** and the exact sentence *"UX Writer (Contract, 6 months) saved to your
  list."*.
- Census **1 `h1` / 4 `h2` / 9 `svg` / 13 `li` / 4 `button` / 5 `a`** (the fifth anchor is the
  Component Dock footer line, which the reference does not have), no `a[href="#"]`, no `<img>`,
  `lang="en"`.
- 390 px: one **358 px** track, the saved line wraps under the title at x 16,
  `scrollWidth − clientWidth = 0`.

Deliberate deltas (all documented as defects in the spec):

1. **Focus ring `#3f6212`** instead of `#65a30d` — 7.08:1 on white, 6.51:1 on the ground (defect 1).
2. **The button's accessible name flips** to `Remove <title> from saved jobs` when pressed (defect 2).
3. **Anchors are in-page** (`#job-<id>`, each `article` carries that `id`) instead of `href="#"`
   (defect 3) — the `coursebook` pattern; `a[href="#"]` is asserted at **0**.
4. **The three pill variants are named tokens** — `MODE_STYLES.remote | hybrid | office` (defect 4).
5. **One source of truth** for the saved set: `initialSavedIds()` seeds the state and the head counter
   is `savedIds.length`, so the reference's hand-written "1" cannot drift (defect 6).
6. **One Component Dock line** under the status line (`mt-6`, 13 px muted) — the repo's footer rule.

Two measurement notes for future card-family builds:

- **Line height is not inherited from `body`.** The reference sets `line-height: 1.45` only on the
  card, so the head and the status line use the browser's *normal* leading — **18 px at 15 px** in its
  static Figtree build. Google Fonts' variable Figtree has taller metrics (≈ 21.75 px), so the port
  pins `leading-[18px]` on the sub-line and the saved line to reproduce the head height (**63.59**, not
  67.34). Putting `line-height: 1.45` on `body` instead makes the head 3.75 px too tall and pushes the
  grid to y 163.34.
- **The `h1` measures 362.17 px** against the reference's 370.17 px — the same 36 px / 800 in the
  variable face is ~2 % narrower than the static `woff2`. Nothing else moves, because the head is
  `space-between`.
