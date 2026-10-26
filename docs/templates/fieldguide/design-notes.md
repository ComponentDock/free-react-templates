# Fieldguide — design notes

Source: ColorLib **Alert V03** (`alert-03`), preview `https://preview.colorlib.com/theme/bootstrap/alert-03/`.
Target: `apps/fieldguide`. Spec: `openspec/specs/template-fieldguide/spec.md`. All numbers below were
measured on 2026-10-26 with `curl -4` + Playwright 1.62 Chromium at 1440 × 900 unless stated.

---

## 1. What this design is

A **documentation article with four admonitions**. One centred `max-width: 720px` column on a warm
off-white ground, no card and no chrome:

```
crumb  →  h1  →  intro p  →  [Note]  →  h2 "1." → p → [Tip] →  h2 "2." → p → [Important] → [Caution]
```

Four tones, each **one accent colour** used twice (bright on the 4 px left border, dark on the label and
links) plus a **generated tint** of the same hue. Nothing else: 0 buttons, 0 forms, 0 inputs, 0 images,
0 scripts, 4 links (all of them broken in the reference — see §5).

This is the family's *static* variant and the first one that is **not a component demo**: `alert-01` was
a severity ladder, `alert-02` a dismiss/restore board. Here the alert set is apparatus inside prose, so
the design's fidelity lives in *typography and rhythm*, not in state.

## 2. Exact DOM tree (as shipped, 4,423 B)

```
main.cl-alert03-demo
└── article.cl-alert03-doc[aria-labelledby="cl-alert03-title"]
    ├── p.cl-alert03-doc__crumb        "Docs / Integrations / Webhooks"   (slashes in <span aria-hidden>)
    ├── h1.cl-alert03-doc__title#cl-alert03-title
    ├── p.cl-alert03-doc__p             intro (contains code.chip "POST")
    ├── div.cl-alert03.cl-alert03--note[role=note][aria-label=Note]
    │   ├── p.cl-alert03__label         svg 18×18 + "Note"
    │   └── p.cl-alert03__text          … a.cl-alert03__link[href="#plans"] "plan limits" …
    ├── h2.cl-alert03-doc__h2          "1. Create an endpoint"
    ├── p.cl-alert03-doc__p             <strong>Settings › Developers › Webhooks</strong> …
    ├── div.cl-alert03.cl-alert03--tip[role=note][aria-label=Tip]
    │   ├── p.cl-alert03__label         svg (bulb) + "Tip"
    │   └── p.cl-alert03__text          … a[href="#cli"] "Parcelpost CLI" + code.chip "parcel listen --forward localhost:3000"
    ├── h2.cl-alert03-doc__h2          "2. Verify the signature"
    ├── p.cl-alert03-doc__p             intro to HMAC (code.chip "X-Parcel-Signature")
    ├── div.cl-alert03.cl-alert03--important[role=note][aria-label=Important]
    │   ├── p.cl-alert03__label         svg (speech bubble + bang) + "Important"
    │   └── p.cl-alert03__text          … a[href="#signatures"] "verifying signatures"
    └── div.cl-alert03.cl-alert03--caution[role=note][aria-label=Caution]   ← NO heading between it and the violet one
        ├── p.cl-alert03__label         svg (triangle + bang) + "Caution"
        └── p.cl-alert03__text          code.chip "2xx" … a[href="#retries"] "replay failed events"
```

Class census: **15** classes in the markup, **14** styled, **1 phantom** (`cl-alert03--note` has no CSS
rule — the blue tone is the *base* `.cl-alert03` rule), **1 dead selector** (`.cl-icon`, 0 uses).
Element census: 1 `h1`, 2 `h2`, 12 `p`, 4 `code`, 4 `a`, 4 `svg`, 1 `strong`, 0 of everything else.

## 3. Section by section — fidelity notes

| band | what must match |
| ---- | --------------- |
| **main** | `min-height: 100vh`, `padding: clamp(24px,6vw,72px) 16px`, ground `#fbfaf7` — **no** max-width, the article centres itself |
| **article** | `max-width: 720px; margin: 0 auto; 17px/1.65; #22262e`; its **descendants** get `border-box` (the article itself stays `content-box`, which is harmless because it has no padding) |
| **crumb** | 14 / 23.1 / `#5f6673`, `margin: 0 0 10px`; the `/` separators are `<span aria-hidden="true">` in `#9aa0ab` with `margin: 0 6px` (5 px wide at 1440) — decorative, **not** links |
| **h1** | `clamp(28px, 4.4vw, 38px)` / 700 / **1.15** / `-0.015em` (−0.57 px at 38); `margin: 0 0 14px`. One line from **476** up |
| **prose** | 17 / 28.05 / `#22262e`, `margin: 0 0 14px`; drops to **16 / 26.4** at ≤480. Contains one `<strong>` per section and the inline chips |
| **callouts** | `margin: 20px 0; padding: 14px 18px 14px 20px; border-left: 4px; radius 0 10px 10px 0`; body **16 px in every band**; the label→body gap is **4 px** (the label's `margin-bottom`) |
| **h2** | 21 / 700 / 34.65, `margin: 34px 0 8px` — the 34 px is what makes the bands breathe; dropping it to 24 collapses the page's rhythm |
| **footer** | there is **none**. The design ends on the Caution callout; the app's Component Dock line is the only addition (required by AGENTS.md rule 5) |

Vertical arithmetic at 1440, from the first layout pass: crumb 23.09 (+10) → h1 43.69 (+14) → intro
56.09 (+14) → note 107.88 (+20, the callout's own bottom margin) → h2 34.64 (+34/+8) → p 56.09 (+14) →
tip 107.88 (+20) → h2 34.64 → p 56.09 → important 107.88 (+20) → caution 107.88. Total article
**923.84** starting at y **72** → main **1088**, document **1088**.

## 4. The numbers

```
main       1440 × 1088      padding 72 / 16            min-height 100vh (900) exceeded
article     720 × 923.84    at (360, 72)               17 / 1.65 = 28.05
crumb       720 ×  23.09    at (360, 72)               margin-bottom 10
h1          720 ×  43.69    at (360, 105.09)           38 / 1.15, -0.57 px tracking
p           720 ×  56.09    at (360, 162.78)           2 × 28.05
note        720 × 107.88    at (360, 238.88)           2-line body
h2          720 ×  34.64    at (360, 380.75)           21 / 1.65
p           720 ×  56.09    at (360, 423.39)
tip         720 × 107.88    at (360, 499.48)
h2          720 ×  34.64    at (360, 641.98)
p           720 ×  56.09    at (360, 684.63)
important   720 × 107.88    at (360, 760.72)
caution     720 × 107.88    at (360, 888.59)

label        23.09 tall at x 384        icon 18 × 18 at x 384, +2.54 from the label top
body text   678 wide at x 384           720 − 4 − 20 − 18
calloutH  =  14 + 23.09 + 4 + lines × 26.4 + 14      → 107.89 (2 lines, 1440)
             12 + 23.09 + 4 + lines × 26.4 + 12      → 130.29 (3 lines, ≤480)
```

Width ladder (`min(vw−32, 720)`): **752 → 720**, **751 → 719**, **720 → 688**, **480 → 448**,
**440 → 408**, **320 → 288**. Vertical clamp: **72** at ≥1200, **61.44** at 1024, **45.6** at 760,
**28.86** at 481, **24** at ≤400.

Line-count boundaries (article width at which the body loses a line):

| callout | 4 → 3 lines | 3 → 2 lines |
| ------- | ----------: | ----------: |
| note | — | **436** |
| tip | — | **479** |
| important | **391** | **570** |
| caution | **435** | **630** |

`h1` wrap: **1 line at article 444+ (vw 476)**, **2 lines at 442 (vw 474)**.

## 5. Where the render disagrees with the sheet (and with itself)

1. **`--note` is empty.** The markup's first callout carries `cl-alert03--note`; no rule exists for it.
   The blue values live on the base `.cl-alert03` rule. So the "base" class is really the Note tone —
   a port should declare the four tones explicitly and delete the extra class.
2. **The tints in the sheet are fallbacks.** The `rgba()` values (`.08/.09/.08/.10`) are what a browser
   *without* `color-mix` paints — over the page ground that is `#eaeef6 / #e6f2e7 / #f1ebf6 / #f8eddf`,
   i.e. visibly duller. With `color-mix` (every current browser) the paint is
   `#eef3fd / #ecf8f1 / #f5effe / #fbf1e6`. The measured `backgroundColor` matched the `color-mix`
   arithmetic to the byte, so **trust the resolved hexes**, not the alpha utilities.
3. **`role="note"` + `aria-label` says the same word twice.** The accessible name is `"Note"` while the
   first *visible* line is also `Note`. Use `aria-labelledby` on the label element.
4. **4 of 4 links are dead.** `#plans`, `#cli`, `#signatures`, `#retries` — the page's only id is
   `cl-alert03-title`. The links are styled as real in-page navigation and go nowhere.
5. **`.cl-icon` (a six-line rule: height / width / fill / display) styles nothing.** Eighth sibling in
   a row with the same leftover.
6. **No script, but the archive's README advertises one** (`js/snippet.js`, `images/`). The live host
   answers `/js/snippet.js` with **9 B of `Not Found`**. There is no behaviour to port.
7. **The callout heights jitter by up to 0.6 px** between layout passes (`107.88` → `108.5` / `108.19`
   for the tip and caution after a resize sweep, with every later *y* shifting by the same amount).
   Assert the **sum** (`14 + 23.09 + 4 + 2 × 26.4 + 14`), not a hard-coded 107.88.
8. **Text metrics are weight-dependent in a non-monotonic way**: the same 38 px string measures
   **584 / 608 / 603** px at 400 / 600 / 700. A "600 is wider than 700?" suspicion is the font's real
   geometry — do not compensate with tracking.

## 6. Behaviour map

**There is none.** No `<script>`, no state, no event listeners, no live region, no focus management.
The complete interaction inventory is:

- 4 links: `:hover` thickens the underline `1px → 2px` over `.15s`; `:focus-visible` draws a
  `2px solid <accent>` outline at offset 2 with a 3 px radius. Tabbing visits them in document order.
- Everything else is static text.

Consequence for tests: assert tokens, geometry, heading count, anchor validity and the two wrap
boundaries. Do **not** invent a dismiss/restore path — that belongs to `noticeboard` / `allclear`.

## 7. Type, colour, contrast

```
"Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
```

Weights used: 400 (prose, crumb, body), **600** (links only), 700 (`h1`, `h2`, labels). The archive ships
6 `woff2` = **2 binaries** (latin 28,792 B, latin-ext 60,048 B) declared at 400/600/700 — a **variable**
cut, proved by declaring one binary `font-weight: 400 700` and reproducing the shipped advances
(584 / 589 / 608 / 603). Load the Google Fonts axis, not a file.

| role | value | ratio on its ground |
| ---- | ----- | ------------------: |
| page ground | `#fbfaf7` | — |
| body ink | `#22262e` | **14.53** on ground, **13.48–13.91** on the tints |
| muted (crumb) | `#5f6673` | **5.54** |
| rule (crumb `/`, aria-hidden) | `#9aa0ab` | 2.52 — decorative only |
| note accent / ink / tint | `#2563eb` / `#1d4ed8` / `#eef3fd` | label **6.02**, border 4.65 |
| tip accent / ink / tint | `#16a34a` / `#15803d` / `#ecf8f1` | label **4.60**, border **3.02** |
| important accent / ink / tint | `#7c3aed` / `#6d28d9` / `#f5effe` | label **6.31**, border 5.06 |
| caution accent / ink / tint | `#d97706` / `#9a4a05` / `#fbf1e6` | label **5.61**, border **2.86** |
| code chip | `rgba(34,38,46,.07)` | text **11.83–12.18** |

The Tip label (4.60) is the tightest text pair — do not lighten it. The Caution border misses 3:1
(2.86) but it is decoration: the tone is named in words and the glyph is `--ink`-stroked, so the port is
compliant as long as the label stays visible.

## 8. Traps, in bite order

1. **`rounded-lg` on all four corners.** The reference is `0 10px 10px 0`; the square left corners
   against the 4 px spine are the design.
2. **Tailwind `*-50` tints.** They are 2–4 hex steps off (`#eff6ff` vs `#eef3fd`, `#f0fdf4` vs
   `#ecf8f1`, `#f5f3ff` vs `#f5effe`, `#fffbeb` vs `#fbf1e6`). Ship the measured hexes.
3. **One colour per tone instead of two.** Border = `accent` (bright), label/link = `ink` (dark).
   Painting the label in `accent` instead moves Note 6.02 → **4.65** and, fatally, Tip 4.60 → **3.02**
   and Caution 5.61 → **2.86** — both below AA for 14 px text.
4. **`text-base` everywhere.** Prose is **17 px**, callout copy **16 px**, and only the prose steps at
   480. Two scales, one of which never moves.
5. **Making the labels headings.** They are `<p>` in the reference; promoting them changes the document
   outline (3 headings → 7) and every spacing assertion.
6. **Adding a footer band.** The article ends on Caution. Only the Component Dock attribution line is
   allowed below it.
7. **Equalising the callout heights.** They are content-driven (107.88 for 2 lines, 130.27/156.66/183.05
   for 3/4/5). No `min-h`.
8. **Reproducing the four dead `#` links.** Give them targets or demote them; a test must assert every
   in-page anchor resolves.
9. **Porting the `:where(html) … { all: revert }` guards.** They exist to neutralise a *host page's*
   Bootstrap reboot; inside our own app they would undo the app's base styles.
10. **Building the screenshot instead of the page.** See §9.
11. **Inventing behaviour** because the previous two family members had it. This one has none.

## 9. The screenshot is a marketing composition

`alert-03.jpg` (ColorLib uploads, 2026-09-25) is **1200 × 972 AVIF** behind a `.jpg` extension. It shows
the page inside a **macOS window mock-up** — three traffic-light dots, a URL bar reading
`preview.colorlib.com` — floating on a **neutral grey ground with a soft drop shadow**.

None of that is the design. The real page is edge-to-edge `#fbfaf7` with no frame, no shadow and no
browser chrome; at 1440 the article is 720 px centred with 72 px of air above it. Adopting the frame
would add ~90 px of chrome and a grey surround the template does not have — the single most likely way
to produce a build that "matches the screenshot" and fails the reference. Use the screenshot **only**
for: the reading order of the four callouts, their hues, the uppercase label style, and the fact that
Caution sits directly under Important.

## 10. Sibling comparison (do not copy their shapes)

| | `alert-01` noticeboard | `alert-02` allclear | **`alert-03` fieldguide** |
| --- | --- | --- | --- |
| artefact | static severity ladder | dismiss/restore board | **admonitions inside an article** |
| tone carrier | tinted quad per row | 40 px pastel icon tile on a white row | **4 px border + generated tint, no tile** |
| surface | glass panel on a gradient | glass panel on a gradient | **none — text on the page ground** |
| layout | 620 content column | 620 content column | **720 article column** |
| type | Plus Jakarta Sans | Plus Jakarta Sans | **Source Sans 3** |
| state | none | 4 booleans + live region | **none** |
| script | 0 | 2,623 B | **0 (no file at all)** |
| defects | — | "1 notices" pluralisation | **4 dead anchors, phantom class, dead selector, README lies, mock-up screenshot** |

Only the **tone vocabulary** is shared (blue / green / violet / amber). Every shape, surface and metric
differs — a port that starts from `allclear` inherits the wrong radii, the wrong tints and a state
machine this design does not have.
