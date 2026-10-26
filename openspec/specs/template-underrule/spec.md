# Template: Underrule (Alert — a profile form where every field owns a joined validation bar)

## Purpose

**A warm paper page, one white card, and four labelled fields — each field carrying its own coloured message
bar welded to its lower edge.** The bars are the design: they are not separate callouts floating under an
input, they are the *bottom border of the input grown into a strip*. The control keeps its own tone-coloured
`1px` edge; the bar below it shares that colour, drops its top border, and inherits the two bottom corners of
the control's `12px` radius, so input + bar read as **one shape with a coloured underrule**. Four fields, four
states, all on screen at once: a **success** handle, an **error** email, a **warning** website, and a neutral
**hint** bio with a live character count.

This is the alert family's **first real `<form>`**: one `<button type="submit">`, three `<input>` elements, one
`<textarea>`, and — unlike the previous ten variants — a **120-line vanilla-JavaScript rule engine** that
decides which of the four states a field is in and paints it. Everything else in the family was inert. Here
the colour of a bar is a **runtime verdict**, not a decoration: type `lena` into the handle and the green bar
turns red with *"@lena is taken"*; clear it and it turns neutral grey.

The page is otherwise austere: **no images, no icons beyond four inline 16 px glyphs, no navigation, no
footer, no headings other than the one `<h1>`, zero anchors**. The whole interaction budget is a `150 ms`
border/shadow transition on the control, a `150 ms` fill change on the button, and a `100 %`-opacity swap of a
16 px SVG inside each bar.

- **Source slug:** `alert-11`
- **ColorLib page:** https://colorlib.com/wp/template/alert-11/ — **HTTP 200, 113,651 B**, `<title>`
  `Alert V11 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V11"**, meta description *"A profile form
  where each input has a compact message attached to its lower edge, in hint, error, warning or success..."*,
  `datePublished` **2026-09-25T14:53:53+00:00**, claims *"the download is 127 KB"* (measured **130,229 B =
  127.2 KiB** ✓), and lists the behaviours verbatim: *"Hint, error, warning and success states from one custom
  property"*, *"Message joined to the input as a single shape"*, *"aria-describedby and aria-invalid kept in
  sync"*, *"Live username availability and character count"*, *"Submit focuses the first field with an
  error"*; its description also states the validation cadence — *"The username is checked as you type, the
  email and website on blur, and the bio shows a live character count."* Its own "Similar Bootstrap Alert
  Templates" grid says **View all 12** and links the sibling variants. This is the **design name the naming
  audit reads**: ColorLib "Alert V11".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-11/ — **HTTP 200,
  4,655 B**, `<title>` `Alert V11 | Colorlib`, `lang="en"`, **one** stylesheet
  (`css/style.css?v=d77a6e98`) and **one** snippet `<script>` (`js/snippet.js?v=58408659`). The slug-only path
  `theme/alert-11/` is **404 (9 B)** and `theme/bb/alert-11/` is **404 (9 B)**: the same `bootstrap/` prefix
  ladder as the ten earlier variants of this family.
- **Design category:** Alert (**form-validation feedback** — four simultaneous per-field states inside one
  form; the first variant in the family where the alert is a *property of an input* rather than of the page).
  **Eleventh** of the **`alert` snippet family** (**12** variants) in the **214 snippet variants** of
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/underrule`, package
  `@free-react-templates/underrule`, CNAME `underrule.free.componentdock.com`.

**What this design is, and what it is not.** The family so far: **noticeboard** a static severity ladder,
**allclear** a dismiss/restore list, **fieldguide** admonitions inside prose with no script, **banderole** a
page-level announcement bar, **snapback** a file list with two actionable bars, **beaconry** a dark
cluster-health panel, **proofmark** a form *returned* with an error summary, **mayfly** self-dismissing
toasts, **steadystate** a status page that never changes, **punnet** a four-tile notification wall. This one
is the family's **living form**: nothing is dismissible, nothing counts down, nothing stacks — instead four
fields each hold a *permanent* verdict strip that is **recomputed** on input/blur/submit. It is also the only
variant where the four tones are **states of one control shape** (so the tone also paints the control's own
border) rather than four differently-coloured siblings.

**The eight things a careless port flattens** (each measured below):

- **The card is `content-box`, so `max-width: 520px` makes a `592px` card.** `.cl-alert11` never receives
  `box-sizing: border-box` (the sheet only sets `border-box` on `.cl-alert11 *`), so the declared `520` is the
  **content** width and the rendered box is `520 + 2 × 36 = 592` at 1440. A Tailwind `max-w-[520px]` with the
  repo's global `border-box` yields a **520** outer card and silently narrows every field by 72 px.
- **The joined shape is two radii and one cancelled border, not a wrapper.** `control` carries
  `border-radius: 12px 12px 0 0`; `msg` carries `0 0 12px 12px` **and `border-top: 0`**, so the control's own
  bottom border is the seam. Put the pair in one bordered container and you get a doubled `2px` seam and a
  `24px` radius at the wrong corners.
- **`1.5px` borders do not exist.** The sheet declares `border: 1.5px` on both the control and the bar; Chrome
  computes **`1px`** at DPR 1 *and* DPR 2 (verified on a throwaway `data:` page too), so every height in this
  spec assumes **1 px** edges. Declare `1px` in the port.
- **The focus ring loses to the state rule.** `.cl-alert11__field:not(.is-hint) .cl-alert11__control`
  (three classes) beats `.cl-alert11__control:focus-within` (two), so on the three toned fields the border
  **stays** the state colour and the only focus signal is a `4px` halo of `rgba(124,77,255,.18)` — **1.28 : 1**
  on white. On the neutral hint field the border *does* turn `#7c4dff` (**4.81 : 1**). This is a defect to fix,
  not to port.
- **There is not one width media query.** The only `@media` in the 347-line sheet is
  `prefers-reduced-motion`. Every size change is a `clamp()` — demo padding `clamp(24px,6vw,72px)`, card
  padding `clamp(22px,5vw,36px)` — so the layout is a **continuous** function of the viewport and the only
  discrete events are **text folds** inside the bars.
- **The bar text is what folds, and it folds five times.** In content-width terms: handle bar `2` lines below
  **258**, email bar `3` lines below **250** and `2` below **435**, website bar `2` below **424**, bio bar `2`
  below **326**, intro `2` below **349**. Card height therefore steps
  **898.41 → 860.63 → 841.73 → 822.84 → 798.84 → 786.64 → 768.84** as the viewport grows, and only then climbs
  again with the padding `clamp()`.
- **The state machinery is one custom property pair, redefined per `is-*` class.** `--tone` / `--tint` live on
  the field (default `#5f6b7a` / `#f1f3f6` = the hint pair) and each `is-*` modifier redefines exactly those
  two. The control border, the bar border, the bar text and the glyph `fill` all read `--tone`; the bar's
  background reads `--tint`. One pair, five consumers.
- **The page scrolls at desktop on purpose-built grounds.** `min-height: 100vh` + `144px` of demo padding but
  a `789.06px` card gives a **933 px** document at 1440 × 900 — `33 px` of scroll on a page that is one card.
  At 1024 it is **912**; from 768 down to 390 the `min-height` wins and the document is exactly **900**.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` on main `531317914` is fully `[x]` — **`- [ ]` count 0**, **`- [ ~ ]` count 0**, **2,907**
rows — so this design comes from `docs/catalog-coverage.md`: designs on colorlib.com's own listing that the
checklist never recorded. `alert-11` is one of the **214 snippet variants in 19 families**; the 42 standalone
designs in that gap are all prepped. Families are worked **in family order, then variant number** — the card
family (20) is **closed**, the alert family is at variant **11 of 12** (ten prepped, **none shipped yet**).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet**, so this row is the **eleventh** entry of a
section that does not exist. It belongs **between `## Bootstrap Accordions (20)` (line 639, its last row
`Accordion 20` on line 661) and `## Bootstrap Buttons (20)` (line 663)**, i.e. inserted on line **662** after
the blank line that follows `Accordion 20` — alphabetical, `Alerts` after `Accordions`:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 11** — [colorlib](https://colorlib.com/wp/template/alert-11/) · [underrule](https://underrule.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-11.jpg)
```

Row-grammar warning, measured on main `531317914`: `## Bootstrap Accordions` uses **both** orders —
`[colorlib] · [app] · ![preview]` (rows 01/02/14/16/19) and `[colorlib] · ![preview] · [app]` (15/17/18/20) —
and `## Bootstrap Buttons` uses preview-in-the-middle. Use the **preview-last** form shown above (accordion
rows 01/02/14/16/19) and re-read the surrounding lines **immediately before pushing** — two implementer
streams write this file.

**The name.** `underrule` — one lowercase word, the typographic term for a rule set **beneath** a piece of
type: exactly the design's device, a coloured rule welded under each input. It matches the family's
closed-single-word pattern (noticeboard, allclear, fieldguide, banderole, snapback, beaconry, proofmark,
mayfly, steadystate, punnet). Verified free on main `531317914`: `git grep -il underrule origin/main` →
**0 files**; no `apps/underrule`; no `openspec/specs/template-underrule`; no bold name in `TEMPLATES.md`; and
the ColorLib catalogue URLs `colorlib.com/wp/template/underrule/` (**404, 63,534 B** shell),
`preview.colorlib.com/theme/underrule/` (**404, 9 B**) and `preview.colorlib.com/theme/bootstrap/underrule/`
(**404, 9 B**) all miss.

Rejected on measurement (all still free): **`hintline`** (1 repo hit), **`keepline`** (3), **`guardrail`**
(14), **`chalkline`** (**35** hits — and an existing `apps/chalkline` + `template-chalkline`, so it is taken).
Also checked and free: **`tickline`**, **`subrule`**, **`rulepost`**. Do **not** reuse `noticeboard`,
`allclear`, `fieldguide`, `banderole`, `snapback`, `beaconry`, `proofmark`, `mayfly`, `steadystate` or
`punnet`, nor the card family's twenty taken names.

## Reference readings (2026-10-26, `curl -4` + Playwright Chromium)

| what              | value                                                                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 4,655 B** live (**4,452 B** inside the archive), `<title>` "Alert V11 \| Colorlib", `lang="en"`, **one** stylesheet, **one** snippet `<script>`                                    |
| preview path      | **`theme/bootstrap/alert-11/`**; `theme/alert-11/` **404** (9 B), `theme/bb/alert-11/` **404** (9 B)                                                                                        |
| stylesheet        | `css/style.css?v=d77a6e98`, **8,720 B**, **347** lines, sha256 `b62593dbc5b2d815013f51fb422c247f9407db55fd3e091d11f9c8c98d63a35d`                                                        |
| script            | `js/snippet.js?v=58408659`, **200, 4,801 B**, sha256 `dbe3725d056cbd17d1223ff88e7337e9d7639b74539aa4ea9c3c3a975b0da4a2`; `/js/main.js` **404 (9 B)**                                        |
| archive           | `preview.colorlib.com/downloads/free/alert-11.zip`, **200, 130,229 B** (= 127.2 KiB ✓ the page's "127 KB"), sha256 `5e08404718188d45e1369a081a8e82d6d769b44a388aaa1ebcdbf49a4aaa3da9`, **16 entries** = 4 dirs + **12 files** |
| archive contents  | `index.html` **4,452 B**, `css/style.css` **8,720 B**, `js/snippet.js` **4,801 B**, `README.md` **1,262 B**, `fonts/` **8 × woff2**                                                          |
| live ↔ archive    | CSS **identical sha256**, JS **identical sha256**; the two HTML files differ **only in the `<head>`** (a `robots` pair, a `cdnjs` `dns-prefetch`, `fetchpriority="high"`, and the `?v=` query strings) → **live preview verified; the archive is its un-versioned twin** |
| fonts (declared)  | **8** `@font-face`, all `Figtree`, weights **400 / 500 / 600 / 700** × two subsets (`latin`, `latin-ext`) — the family's **first self-hosted** faces (no Google Fonts link, no host `/cf-fonts/` block) |
| fonts (binaries)  | only **2** binaries: `latin` **20,184 B** sha256 `8330490a01c60c196eae00b823de8102275aaa5862e7b76a7af21b8745338928`, `latin-ext` **10,228 B** sha256 `f153aa07c1b16fbb12391c2512860c97819a0a9fd014f338b2b3f12496479d13` — **all four weight files of a subset hash identically** ⇒ **one variable cut per subset**, and the live host serves those same bytes (16/16 files hash to those 2 values) |
| type proof        | canvas A/B, `100px Figtree`, string `"Hand-dyed wool 0194"`: **300 → 995**, **400 → 995**, **500 → 1001**, **600 → 1002**, **700 → 1019**, **800 → 1019**, **900 → 1019** ⇒ 300 clamps to 400, 800/900 clamp to 700, and 400/500/600/700 are **four genuinely distinct cuts** (no aliasing) |
| classes           | **20** classes in the markup, **20** with at least one rule, **0** phantom modifiers; **1** dead rule — `.cl-icon` (the **eleventh consecutive** sibling in this family to carry it; the four glyphs are `.cl-alert11__i`) |
| custom properties | **6** on `.cl-alert11` (`--cl-alert11-ink`, `-muted`, `-line`, `-focus`, `-tone`, `-tint`); the four `is-*` modifiers each redefine exactly **2** of them (`-tone`, `-tint`) = **14** declarations, 8 of them on modifiers |
| CSS anatomy       | **49** top-level blocks = **10** guard groups (`:where(html) … { …: revert }`, **22** `revert` declarations, 2 of them `all: revert`) + **8** `@font-face` + **30** style rules + **1** `@media`; **0 width media queries**, **0** `@keyframes`, **2** `transition` declarations, **1** gradient (the ground hatch), **25** colour literals (**19** distinct) |
| controls          | **1** `<form novalidate>` (no `action`, no `method`), **3** `<input>` (`text` / `email` / `url`), **1** `<textarea rows="3" maxlength="160">`, **1** `<button type="submit">`, **4** inline `<svg>` (`16 × 16` viewBox at 16), **0** `<a>`, **0** `<img>` |
| headings          | **1** `<h1>` ("Public profile") and nothing else — the four field captions are `<label>` elements (correct)                                             |
| landmarks         | `<main class="cl-alert11-demo">` → `<form class="cl-alert11" novalidate aria-labelledby="cl-alert11-title">`; **no** `nav`, **no** `footer`, **no** `<section>` |
| live regions      | **4** — every bar is `<p aria-live="polite">`, on a form that rewrites its text on **every keystroke** once a field is valid (defect 3)                  |
| ids               | **9** — `cl-alert11-title`, then `<field>` and `<field>-msg` for `username` / `email` / `website` / `bio`; **0** fragments, **0** dangling anchors        |
| document height   | **933** at 1440 × 900 (so it scrolls **33**), **912** at 1024, **900** at 768 / 640 / 552 / 480 / 390 / 360 (the `min-height: 100vh` floor), **909** at 325, **946** at 320 — vertical only, `scrollX` **0** and `scrollWidth === clientWidth` at all **481** widths swept |
| screenshot        | `https://colorlib.com/wp/wp-content/uploads/sites/2/alert-11.jpg`, **20,998 B**, **1200 × 972**, an **AVIF container behind a `.jpg`** (`file` → `ISO Media, AVIF Image`); `PIL` opens and converts it — and it is a **macOS browser mock-up** (traffic lights, a drop shadow, a `preview.colorlib.com` URL pill) whose content matches the live render 1:1, *except* that its bio counter reads **"93 characters left."** because the shot was taken with a transient value |

## Page arithmetic — one 592 px card, four joined field rows

Measured at **1440 × 900** (Chromium, DPR 1). The card is `content-box` (see the first trap), so `width` is the
content box and the `36px` padding sits outside it.

| element              | box                                                  |
| -------------------- | ---------------------------------------------------- |
| `main` (demo)        | **1440 × 933.06** at (0, 0); padding **72px 16px**; ground `#f6f3ef` + hatch                         |
| `form` (card)        | **592 × 789.06** at (**424**, **72**) = content **520** at x **460**; padding **36**; radius **20**  |
| `h1`                 | **520 × 39** at y **108** (26px / 700 / `-0.52px` tracking / line-height **39**)                     |
| `p.__intro`          | **520 × 24** at y **151**; margin **4px 0 26px**                                                     |
| field 1 `username`   | **520 × 110.89** at y **201** — label **21.75**, gap **6**, control **49.25**, bar **33.89**          |
| field 2 `email`      | **520 × 110.89** at y **331.89** (20 px gap after field 1)                                            |
| field 3 `website`    | **520 × 110.89** at y **462.78**                                                                     |
| field 4 `bio`        | **520 × 157.39** at y **593.67** — its control is **95.75** tall (textarea **93.75**)                 |
| control              | **520 × 49.25** = input **47.25** + 2 × **1** border; radius **12 12 0 0**                            |
| bar (`.__msg`)       | **520 × 33.89** = **7** + **18.9** (one `13.5px` line at `1.4`) + **7** + **1** bottom border; `border-top: 0` |
| foot                 | **520 × 48** at y **777.06**; button **137 × 48**                                                    |

The height identity, in one line each:

```
field  = 21.75 (label @14.5×1.5) + 6 + control + bar
control= 12 + 23.25 (input @15.5×1.5) + 12 + 2 = 49.25
textarea control = 12 + 3 × 23.25 + 12 + 2 = 95.75
bar    = 7 + 18.9 (@13.5×1.4) + 7 + 1 = 33.89
card   = 72 (padding) + 39 + 4 + 24 + 26 + (3 × 110.89 + 157.39) + 8 × 20 (gaps) … + 26 + 48 = 789.06
```

Everything above is **content** arithmetic — this is a design whose numbers only reconcile once you accept
(a) the `content-box` card, (b) `1px` borders, (c) the two extra `20px` field gaps and the `26px` foot margin.

## Design tokens — a warm paper ground, four tone pairs, one ink

| token             | value                                                  | used for                                                     |
| ----------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| ground            | `#f6f3ef`                                              | page background                                              |
| hatch             | `repeating-linear-gradient(45deg, rgba(120,90,60,.035) 0 2px, transparent 2px 12px)` | the ground texture (2 px stripe every 12 px at 45°) |
| card              | `#ffffff`                                              | the form card; `border-radius: 20px`; `box-shadow: 0 24px 48px -32px rgba(35,29,24,.4)` |
| ink               | `#231d18`                                              | `h1`, labels, input text, button background                  |
| muted             | `#62574d`                                             | intro, "optional" tag, the `loomwork.co/` prefix             |
| line              | `#d8cfc5`                                              | the resting border of the neutral (hint) control and its bar **— fails 3 : 1, see contrast** |
| focus             | `#7c4dff`                                              | `:focus-within` border (hint field only) and the button's `:focus-visible` outline |
| tone / tint (base)| `#5f6b7a` / `#f1f3f6`                                  | the `is-hint` pair, and the fallback when no state class is present |
| success           | tone `#157347` · tint `#e8f6ee`                        | available handle                                             |
| error             | tone `#c21f3a` · tint `#fdebee`                        | taken handle, malformed email                                |
| warning           | tone `#9a5300` · tint `#fff4e2`                        | `http://` link, counter ≤ 20                                 |
| button            | `#231d18`, hover `#40362d`, text `#fff`, radius **12**, padding **12px 22px** | "Save profile"                                  |
| saved line        | `#157347`, 14px / 600                                  | the `role="status"` confirmation                              |

Type — **one family, four weights, no fifth**:

| role    | size / weight / line-height | notes                                             |
| ------- | --------------------------- | ------------------------------------------------- |
| `h1`    | **26 / 700 / 39**           | `letter-spacing: -.02em` (`-0.52px`)              |
| intro   | 16 / 400 / 24               | muted                                             |
| label   | 14.5 / **600** / 21.75      | ink; "optional" tag is 400 + muted, `margin-left: 4px` |
| input   | 15.5 / 400 / 23.25          | **bump to 16 in the port** (iOS zoom, defect 4)   |
| prefix  | 15 / 400                    | muted, `padding-left: 14px`, `white-space: nowrap` |
| bar     | **13.5 / 600 / 18.9**       | hint bars drop to **500**                         |
| button  | 16 / 600 / 24               | inherits `font: inherit` then overrides weight    |
| saved   | 14 / 600 / 21               | `#157347`                                         |

Spacing rhythm: demo `clamp(24px,6vw,72px) 16px`; card `clamp(22px,5vw,36px)`; title→intro **4**;
intro→fields **26**; field→field **20**; label→control **6**; bar padding **7px 12px**; foot margin-top
**26**; foot gap **12px 16px**.

Radii: card **20**, control **12 / 12 / 0 / 0**, bar **0 / 0 / 12 / 12**, button **12**, nothing else.
The only radii in the design are those three numbers — there is no pill, no circle, no `999px`.

## The width ladder (1 px sweep, 300 → 780)

There are **no width media queries**. Two `clamp()`s drive every change:

```
demo padding-block  = clamp(24px, 6vw, 72px)     → 24 at ≤400, 6vw between, 72 at ≥1200
card padding        = clamp(22px, 5vw, 36px)     → 22 at ≤440, 5vw between, 36 at ≥720
content width       = min(520, viewport − 32 − 2 × cardPadding)
card outer width    = content + 2 × cardPadding  → 592 at ≥720; 582.4 → 592 across 624–720; viewport − 32 below that
```

Text folds, expressed as **content widths** (1 px resolution, both sides of each step):

| what                      | `2` lines | `1` line | viewport where it turns |
| ------------------------- | --------- | -------- | ----------------------- |
| handle bar (`Nice, @…`)   | ≤ **257** | ≥ **258** | **334**                 |
| email bar (`Add the end…`) | `3` ≤ **249**, `2` **250–434** | ≥ **435** | 3→2 at **326**, 2→1 at **518** |
| website bar (`This link…`) | `3` ≤ **249**, `2` **250–423** | ≥ **424** | 3→2 at **326**, 2→1 at **507** |
| bio bar (`Shown under…`)  | ≤ **325** | ≥ **326** | **402**                 |
| intro                     | ≤ **348** | ≥ **349** | **425**                 |

Card-height ladder (the numbers a port must reproduce; each step is a fold above it):

| viewport    | bars (handle / email / website / bio) | card height | document |
| ----------- | ------------------------------------- | ----------- | -------- |
| 320 – 325   | 2 / 3 / 3 / 2                         | **898.41**  | **946**  |
| 326 – 333   | 2 / 2 / 2 / 2                         | **860.63**  | **909**  |
| 334 – 401   | 1 / 2 / 2 / 2                         | **841.73**  | **900**  |
| 402 – 424   | 1 / 2 / 2 / 1                         | **822.84**  | 900      |
| 425 – 506   | 1 / 2 / 2 / 1 + intro 1 line          | **798.84**  | 900      |
| 507 – 517   | 1 / 2 / 1 / 1                         | **786.64**  | 900      |
| 518 – 719   | 1 / 1 / 1 / 1                         | **768.84 → 789.06** (padding `clamp`) | 900 at 768 and below; 912 at 1024 |
| 720 – 1440  | 1 / 1 / 1 / 1                         | **789.06**  | **933** at 1440, 912 at 1024 |

No horizontal overflow at any of the 481 widths swept (`scrollX` 0 after `scrollTo(300, 0)`,
`scrollWidth === clientWidth`).

## Contrast (WCAG 2.x, computed from the shipped hexes)

| pair                                        | ratio      | verdict |
| ------------------------------------------- | ---------- | ------- |
| success `#157347` on its tint `#e8f6ee`     | **5.27**   | AA     |
| error `#c21f3a` on its tint `#fdebee`       | **5.15**   | AA (the *tightest* text pair on the page) |
| warning `#9a5300` on its tint `#fff4e2`     | **5.34**   | AA     |
| hint `#52606f` on its tint `#f1f3f6`        | **5.79**   | AA     |
| ink `#231d18` on card `#fff`                | **16.66**  | AAA    |
| muted `#62574d` on card `#fff`              | **7.02**   | AAA    |
| muted `#62574d` on ground `#f6f3ef`         | **6.35**   | AAA    |
| button text `#fff` on `#231d18`             | **16.66**  | AAA    |
| button text `#fff` on hover `#40362d`       | **11.77**  | AAA    |
| saved `#157347` on `#fff`                   | **5.87**   | AA     |
| focus `#7c4dff` on `#fff` (ring / hint border) | **4.81** | ≥ 3 : 1 ✓ |
| focus `#7c4dff` on ground `#f6f3ef` (button outline) | **4.35** | ≥ 3 : 1 ✓ |
| state tone as the control border on white   | **5.82–5.91** | ≥ 3 : 1 ✓ |
| **`line #d8cfc5` as the hint control border on white** | **1.54** | **fails 1.4.11** (needs 3 : 1) |
| hint bar border `#d8cfc5` against its own tint | **1.38** | boundary, sub-3 |
| hint tint `#f1f3f6` on white (bar fill)     | **1.11**   | boundary only |
| focus halo `rgba(124,77,255,.18)` over white | **1.28**  | **not a focus indicator** (defect 1) |

Every **text** pair on this page passes AA — it is the family's third clean palette after steadystate and
punnet. The failures are **boundaries**: the neutral control's edge at **1.54 : 1** and the focus halo at
**1.28 : 1**. Both are fixable without touching the look: `--line: #9c8f81` gives **3.15 : 1** on white
(still warm, one shade darker than `#d8cfc5`), and a real border swap on focus (see below) gives **4.81 : 1**.

## Behaviour — the four rule functions and the trigger matrix

The 120-line IIFE in `js/snippet.js` is the whole model. It runs `initFieldMessages()` once on load, finds
four `[data-cl-alert11-field]` groups, and binds `input` + `blur` to each control plus `submit` on the form.

**Rule functions** (exact strings — the port paraphrases the copy but keeps this state machine):

| field      | input                          | verdict                                                                                     |
| ---------- | ------------------------------ | ------------------------------------------------------------------------------------------- |
| `username` | trimmed + lower-cased; `^[a-z0-9._]{3,20}$` | empty → **hint** `3 to 20 characters: letters, numbers, dots or underscores.`; bad shape → **error** `Use 3 to 20 letters, numbers, dots or underscores. No spaces.`; in `['lena','lena.park','loomwork','admin','weaver','studio']` → **error** `@<v> is taken. Try @<v>.studio or @<v>.makes.`; else **success** `Nice, @<v> is available.` |
| `email`    | trimmed                        | empty → **error** `Enter an email address so buyers can reach you.`; no `@` → **error** `An email address needs an @, for example lena@studio.com.`; no dot-TLD → **error** `Add the end of the address, for example <local>@<domain>.com.`; else **success** `Looks good. Only buyers you reply to will see it.` |
| `website`  | trimmed                        | empty → **hint** `Optional. Link your shop or portfolio.`; not `https?://host.tld` → **error** `Enter a full address that starts with https://`; `http://` → **warning** `This link is not secure. Use https:// if your site supports it.`; else **success** `Link looks good.` |
| `bio`      | `maxlength` − length           | `left ≤ 20` → **warning** `<left> character(s) left.` (**singular** at 1); else **hint** `Shown under your name. <left> characters left.` |

**Trigger matrix** (measured by driving the live page):

| event                      | what happens                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| load                       | `bio` is evaluated once, so the markup's static `94 characters left.` becomes **`93`**            |
| `input` on any field       | clears the `role="status"` confirmation text; re-runs the rule **only if** the field is `username` or `bio` **or** currently `is-error` / `is-warning` — a valid email/website does *not* re-validate per keystroke |
| `blur` on any field        | always re-runs the rule                                                                           |
| `submit` with an error     | `preventDefault`; fields checked in DOM order; **first** `error` gets `.focus()`; confirmation cleared |
| `submit` clean             | `preventDefault`; confirmation text `Profile saved. Changes are live on your page.` in the `role="status"` `<p>` |
| any state change           | the four `is-*` classes are **toggled** (exactly one survives), the glyph's `innerHTML` is replaced, the bar's text is replaced **only when different**, and `aria-invalid="true"` is set on `error` and **removed** otherwise |

Measured state transitions, exactly as the port must reproduce them:

```
"le"              → error    "Use 3 to 20 letters, numbers, dots or underscores. No spaces."   aria-invalid=true
"lena"            → error    "@lena is taken. Try @lena.studio or @lena.makes."               aria-invalid=true
"lena weaves"     → error    (same shape message)                                             aria-invalid=true
"lena.weaves"     → success  "Nice, @lena.weaves is available."                               aria-invalid removed
""                → hint     "3 to 20 characters: letters, numbers, dots or underscores."     aria-invalid removed
email "lena@studio"        → error   "Add the end of the address, for example lena@studio.com."
email "lena@studio.com"    → success "Looks good. Only buyers you reply to will see it."
website "https://…"        → success "Link looks good."
bio 0/100/139/140/141/159/160 chars → "160/60/21 left." then warning "20/19/1/0 characters left."
submit with email "nope"   → focus lands on #cl-alert11-email, no confirmation
```

## Defects found in the reference (fix in the port; do not reproduce)

1. **The focus border is dead on three of four fields.** `.cl-alert11__field:not(.is-hint) .cl-alert11__control`
   (specificity 0,3,0) outranks `.cl-alert11__control:focus-within` (0,2,0), so focusing the success, error or
   warning field leaves the border in its **state** colour; measured computed `border-color` `rgb(21,115,71)`
   while focused, with only `box-shadow: 0 0 0 4px rgba(124,77,255,.18)` arriving. On the hint field the border
   does become `rgb(124,77,255)`. **Fix:** make the focus rule win (raise it to
   `.cl-alert11__field .cl-alert11__control:focus-within`, or move it after the state rules with equal-or-higher
   specificity) and give the ring **opaque** colour — `0 0 0 3px #7c4dff` or a `2px` border swap.
2. **The only focus indicator on those fields is a 1.28 : 1 halo.** With `outline: none` on the input
   (`input:focus`) and the border pinned to the tone, the sole signal is an 18 %-alpha halo. **Fix:** per
   defect 1, plus keep the `:focus-visible` button outline as the source has it (measured `solid 3px
   rgb(124,77,255)` at offset `2` = **4.35 : 1** on the ground — that one is correct).
3. **Four `aria-live="polite"` regions on a form that announces per keystroke.** All four bars are polite live
   regions, and once a field is valid every further keystroke rewrites its text, so screen readers queue the
   handle's "available" sentence and the bio counter on each character. **Fix:** keep the bars as live regions
   (a validation verdict *should* announce) but (a) do **not** re-announce an unchanged verdict — compare the
   text before writing (the source already does this for the label, but the *counter* changes every keystroke),
   and (b) take the bio counter out of the live region (or `aria-live="off"` it) except when it crosses into
   **warning** at ≤ 20 left, which announces once.
4. **`15.5px` inputs trigger iOS zoom-on-focus.** Anything below `16px` makes mobile Safari zoom the viewport
   when the field is focused, which on a `320px` screen is a layout jump. **Fix:** `16px` on the control text
   (or `text-size-adjust`-safe sizing); document the delta.
5. **The page scrolls 33 px at 1440 × 900 for a single card.** `min-height: 100vh` + `144px` demo padding vs a
   `789.06px` card = a **933px** document. **Fix:** `min-h-[100svh]` plus a smaller block padding clamp
   (`clamp(16px,4vw,56px)`), and assert document height ≤ viewport at 1440 × 900.
6. **`1.5px` borders render as `1px`.** Declared on both the control and the bar, computed `1px` at DPR 1 and
   DPR 2. **Fix:** declare `1px` and stop pretending; half-pixel seams would also disagree with the bar's
   cancelled top border.
7. **The textarea is a nested scroll container.** `rows="3"` + `min-height: 84px` gives `93.75px`; a full
   160-character bio plus line breaks measured `scrollHeight 187` against `clientHeight 93.75`, so the page has
   a second scrollbar inside a page that already scrolls (defect 5). **Fix:** let the textarea auto-grow to its
   content (or set `field-sizing: content` with a `9rem` cap) and keep `resize: vertical` as a desktop nicety.
8. **Copy typo in the error string.** *"Add the end of the address…"* is missing a word. **Fix:** *"Add the
   domain ending, for example mara@kilnhaus.com."*
9. **The prefix is `aria-hidden`, so the visible and accessible values disagree.** Sighted users read
   `loomwork.co/lena.weaves`; assistive tech hears `lena.weaves`, because `<span class="__prefix"
   aria-hidden="true">` hides the domain. **Fix:** render the prefix as visible text **inside** the label's
   description (or as a `sr-only` suffix in the input's `aria-describedby` text), never as hidden context.
10. **The static counter disagrees with the computed one.** The markup ships `94 characters left.` for a
    67-character bio in a 160 field (= 93); the script rewrites it on load, and the packaged screenshot shows
    **93**. **Fix:** server/markup copy must equal the computed value (or ship an empty counter and let the
    first render fill it).
11. **`.cl-icon` is a dead rule for the eleventh variant in a row.** The four glyphs use `.cl-alert11__i`.
    **Fix:** do not port the dead rule.
12. **The README advertises a directory that does not exist.** It lists `images/  its images`; the 12-file
    archive has no `images/`. (The `fonts/` claim, unlike the previous ten variants, is **true** here.)
13. **The screenshot is a macOS browser mock-up**, not the page: traffic lights, a drop shadow and a URL pill
    around a `1200 × 972` frame on a grey ground. The page itself is the warm hatch. **Fix:** port the page,
    never the frame.

## Requirements

### Feature: The page skeleton and its two grounds

#### Scenario: One hatch ground, one card, no chrome

- **GIVEN** the reference at `theme/bootstrap/alert-11/`
- **WHEN** the page renders at any width
- **THEN** there SHALL be exactly one `<main>` (full width, `min-height` of the viewport, padding
  `clamp(16px,4vw,56px) 16px` in the port) containing exactly one `<form>`, and nothing else
- **AND** the ground SHALL be `#f6f3ef` painted with a `repeating-linear-gradient(45deg, rgba(120,90,60,.035) 0 2px, transparent 2px 12px)` texture
- **AND** there SHALL be no `nav`, no hero image, no logo, no `<a>` inside the card — the form is the page

#### Scenario: The card is 520 px of content, not 520 px of box

- **GIVEN** the source's `content-box` card (`max-width: 520px`, `padding: clamp(22px,5vw,36px)`)
- **WHEN** the port styles the card with the repo's global `border-box`
- **THEN** the port SHALL size the card as **content 520 + 2 × 36 = 592** at 1440 (`w-[520px]` on a
  `p-[36px]` content box, or `max-w-[592px]` with `p-[36px]` under `border-box`)
- **AND** the card SHALL carry `border-radius: 20px` and `box-shadow: 0 24px 48px -32px rgba(35,29,24,.4)`
- **AND** the measured card at 1440 SHALL be **592 × 789.06** at (424, 72) with content at x **460**

### Feature: The header

#### Scenario: A 26 px title and a muted intro

- **GIVEN** the card
- **WHEN** it renders
- **THEN** there SHALL be exactly one `<h1>` — "Public profile" — at 26 px / 700 / line-height 39,
  `letter-spacing: -.02em`, colour `#231d18`, with `margin: 0`
- **AND** the intro SHALL be 16 px / 400 / 24 in `#62574d` with `margin: 4px 0 26px`

#### Scenario: The intro folds at content 349

- **GIVEN** the intro copy fixed at **46 characters** in the port (the source's own length)
- **WHEN** the content width drops to **348**
- **THEN** the intro SHALL be **2** lines (48 px) and the card SHALL grow by **24 px**
- **AND** at content **349** it SHALL be **1** line (24 px) — the fold turns at viewport **425**

### Feature: One field — a control with a bar welded underneath

#### Scenario: Two radii and one cancelled border make the joined shape

- **GIVEN** a field group
- **WHEN** it renders
- **THEN** the control SHALL be `520 × 49.25` with `border: 1px solid var(--tone)`,
  `border-radius: 12px 12px 0 0`, white background
- **AND** the bar SHALL be `520 × 33.89` with `border: 1px solid var(--tone)`, **`border-top: 0`**,
  `border-radius: 0 0 12px 12px`, `background: var(--tint)`, `padding: 7px 12px`, 13.5 px / 600 /
  line-height 1.4
- **AND** the bar and the control SHALL NOT be wrapped in a third bordered element (a wrapper produces a 2 px
  seam and squares the corners)

#### Scenario: The label, the optional tag and the prefix

- **GIVEN** each field
- **WHEN** it renders
- **THEN** the `<label for>` SHALL be 14.5 px / 600 with `margin-bottom: 6px`
- **AND** the website label SHALL append "optional" at 14.5 / **400** / `#62574d` with `margin-left: 4px`
- **AND** the handle control SHALL prepend a `15px` muted prefix (`<brand>.co/`) with `padding-left: 14px` and
  `white-space: nowrap`, and the input after it SHALL use `padding-left: 2px`
- **AND** the prefix SHALL be exposed to assistive tech (see defect 9), not `aria-hidden`

#### Scenario: The four glyphs are inline 16 px SVGs

- **GIVEN** each bar
- **WHEN** its state is applied
- **THEN** the glyph SHALL be a `16 × 16` viewBox inline `<svg>` at 16 px: a filled circle with a check
  (success), a filled circle with an exclamation stem (error), a filled triangle with an exclamation (warning),
  a filled circle with an "i" (hint) — inner paths stroked `#fff` at `1.8`–`1.9`
- **AND** the glyph SHALL be `fill: currentColor` (`--tone`), `flex: none`, `margin-top: 1px`, `aria-hidden`
  with `focusable="false"`
- **AND** the bar's text SHALL sit `8px` from the glyph in a flex row with `align-items: flex-start`

### Feature: The four states and the tone/tint pair

#### Scenario: One custom-property pair, four overrides

- **GIVEN** the field group
- **WHEN** a state is applied
- **THEN** exactly one of `is-success` / `is-error` / `is-warning` / `is-hint` SHALL be present
- **AND** each modifier SHALL redefine only `--tone` and `--tint` (`#157347`/`#e8f6ee`, `#c21f3a`/`#fdebee`,
  `#9a5300`/`#fff4e2`, `#52606f`/`#f1f3f6`), with the base pair `#5f6b7a`/`#f1f3f6` as the fallback
- **AND** the control border, the bar border, the bar text and the glyph SHALL all read `--tone`; the bar
  background SHALL read `--tint`
- **AND** `is-hint` SHALL be the one state whose control keeps the neutral `--line` border and whose bar drops
  to weight **500**

#### Scenario: The tone is the verdict, not a decoration

- **GIVEN** the handle field
- **WHEN** the user types `lena` (a taken handle) and blurs
- **THEN** the bar SHALL switch to `is-error`, the control border to `#c21f3a`, the bar to `#fdebee` with
  `#c21f3a` text and a triangle glyph, and the input SHALL carry `aria-invalid="true"`
- **AND** when the same input becomes `lena.weaves` the field SHALL switch to `is-success` with
  `aria-invalid` **removed**

### Feature: Validation, the counter and submit

#### Scenario: The handle is checked as you type, the email and website on blur

- **GIVEN** a field in a settled state
- **WHEN** the user types
- **THEN** only `username` and `bio` (and any field currently `is-error`/`is-warning`) SHALL re-evaluate on
  `input`; a valid `email` or `website` SHALL NOT re-evaluate until `blur`
- **AND** any `input` event SHALL clear the confirmation line

#### Scenario: The handle's three outcomes

- **GIVEN** the handle rule (trim + lower-case, `^[a-z0-9._]{3,20}$`, a taken list)
- **WHEN** the value is empty
- **THEN** the state SHALL be **hint** with "3 to 20 characters: letters, numbers, dots or underscores."
- **AND** when the shape is wrong the state SHALL be **error** with "Use 3 to 20 letters, numbers, dots or
  underscores. No spaces."
- **AND** when the value is taken the error SHALL name it and offer two alternatives
- **AND** otherwise the state SHALL be **success** ("Nice, @… is available.")

#### Scenario: The email's three errors and the website's warning

- **GIVEN** the email and website rules
- **WHEN** email is empty / has no `@` / has no dot-TLD
- **THEN** three distinct **error** messages SHALL appear, the third interpolating the typed local part and
  domain
- **AND** a website of `http://…` (valid, insecure) SHALL be **warning**, not error, and the message SHALL
  suggest `https://`
- **AND** a website that is not a full `https?://host.tld` SHALL be **error**

#### Scenario: The bio counter, including the singular and the 20-left threshold

- **GIVEN** a `maxlength="160"` textarea
- **WHEN** the length is `L`
- **THEN** the bar SHALL read "Shown under your name. <160−L> characters left." while `160−L > 20`
- **AND** at `160−L ≤ 20` it SHALL switch to **warning** with just "<n> character(s) left."
  (**"1 character left."** in the singular)
- **AND** at 0 SHALL read "0 characters left." — no negative counts, no `maxlength` bypass

#### Scenario: Submit focuses the first error, then confirms

- **GIVEN** a form with `noValidate`
- **WHEN** the form is submitted with any field in `error`
- **THEN** `preventDefault` SHALL run, the fields SHALL be evaluated in DOM order, the **first** error's input
  SHALL receive focus, and no confirmation SHALL be shown
- **AND** when every field is valid the `role="status"` line SHALL read "Profile saved. Changes are live on
  your page." and focus SHALL stay on the button
- **AND** typing afterwards SHALL clear that line

### Feature: Accessibility (the port's fixes)

#### Scenario: Focus is visible on all four fields

- **GIVEN** any field
- **WHEN** its control receives focus
- **THEN** the border SHALL turn `#7c4dff` (**4.81 : 1** on white) **and** the `0 0 0 3px`/`4px` halo SHALL be
  at least 3 : 1 — the state rule SHALL NOT outrank `:focus-within`
- **AND** the button SHALL show `outline: 3px solid #7c4dff` at `outline-offset: 2px` on **keyboard** focus only
  (`:focus-visible`), measured **4.35 : 1** on the ground
- **AND** no control SHALL rely on `outline: none` alone

#### Scenario: The neutral boundary is not 1.54 : 1

- **GIVEN** the hint control's resting border
- **WHEN** the port sets `--line`
- **THEN** it SHALL be **`#9c8f81`** (**3.15 : 1** on white) or darker — the source's `#d8cfc5` measures
  **1.54 : 1** and fails 1.4.11
- **AND** the bar's own tone/tint boundaries MAY stay decorative (1.09–1.38 : 1) because the text they carry
  passes AA and the control's edge carries the affordance

#### Scenario: Live regions announce a verdict, not a keystroke

- **GIVEN** four bars
- **WHEN** a verdict changes
- **THEN** the bar MAY be `aria-live="polite"`, and its text SHALL be replaced only when it actually differs
- **AND** the bio counter SHALL NOT announce every keystroke: it SHALL be silent while `> 20` left and flip to
  polite once, when it crosses into the warning
- **AND** every input SHALL keep `aria-describedby` pointing at its own bar, `aria-invalid` SHALL be present
  only in `error`, and the confirmation SHALL be a `role="status"` region that is empty at load

### Feature: Type, motion and reduced motion

#### Scenario: One face, four weights, two binaries

- **GIVEN** Figtree, self-hosted in the source as 8 files over **2** binaries
- **WHEN** the port loads type
- **THEN** it SHALL use one Figtree `<link>` (or the repo's usual Google-Fonts import) with weights
  **400 / 500 / 600 / 700** and no fifth weight
- **AND** applying **300** SHALL render as 400 and **800/900** as 700 (the measured clamp) — the port SHALL NOT
  request them
- **AND** no local `woff2` SHALL be added to the app

#### Scenario: 150 ms on two properties, and nothing else

- **GIVEN** the control and the button
- **WHEN** hover/focus/state changes
- **THEN** the control SHALL transition `border-color` and `box-shadow` over **150 ms ease** and the button its
  `background-color` over `150 ms`
- **AND** the control's transition SHALL be removed under `prefers-reduced-motion: reduce`
- **AND** there SHALL be **no** keyframes, no reveal, no counter animation anywhere on the page

### Feature: Responsiveness and overflow

#### Scenario: No media query governs the width

- **GIVEN** the source's two `clamp()`s
- **WHEN** the viewport moves
- **THEN** the only width `@media` in the port SHALL be none — sizing SHALL come from the clamps (a
  `max-[480px]:` utility is acceptable only where it reproduces the clamp)
- **AND** the card SHALL measure **592** at ≥ 720, **582.4 → 592** across 624–720, and `viewport − 32` below
- **AND** content SHALL be `min(520, viewport − 32 − 2 × clamp(22px,5vw,36px))`

#### Scenario: The bar fold ladder

- **GIVEN** the shipped copy
- **WHEN** the viewport is swept 1 px at a time
- **THEN** the folds SHALL occur at content **257/258** (handle), **249/250** and **434/435** (email),
  **249/250** and **423/424** (website), **325/326** (bio), **348/349** (intro)
- **AND** the card heights SHALL step **898.41 → 860.63 → 841.73 → 822.84 → 798.84 → 786.64 → 768.84 → 789.06**
- **AND** the document heights SHALL be **946 @ 320**, **909 @ 325**, **900 @ 326–1024 ≤ 768**, **912 @ 1024**,
  **933 @ 1440** (in the port: no scroll at 1440 × 900 after the `svh` fix)

#### Scenario: No horizontal overflow, ever

- **GIVEN** any width from 300 to 780 and the three device widths
- **WHEN** the page is scrolled horizontally
- **THEN** `scrollX` SHALL be **0** and `scrollWidth` SHALL equal `clientWidth`
- **AND** the textarea SHALL NOT introduce a second scrollbar (defect 7)

### Feature: Repo integration

#### Scenario: Wiring

- **GIVEN** the monorepo
- **WHEN** the app is created
- **THEN** it SHALL live at `apps/underrule`, package `@free-react-templates/underrule`,
  `public/CNAME` = `underrule.free.componentdock.com`, `"homepage"` = `https://underrule.free.componentdock.com`
- **AND** it SHALL reuse `packages/ui` where a component exists (field/label/button primitives, `cn()`)
- **AND** no app file SHALL mention `colorlib`, `alert-11`, "Loomwork", `lena.weaves` or any other string from
  the source

#### Scenario: The footer is the port's only chrome

- **GIVEN** the source has no footer at all
- **WHEN** the port adds one
- **THEN** it SHALL be a plain `<footer>` under the card on the hatch ground, carrying the mandatory
  `https://www.componentdock.com/` ("Component Dock") link
- **AND** it SHALL NOT add a nav, a logo, a social row or a second call to action — the reference has none

#### Scenario: The `TEMPLATES.md` row

- **GIVEN** `TEMPLATES.md` has no `## Bootstrap Alerts` section
- **WHEN** the template ships
- **THEN** the row SHALL be the **eleventh** entry of a `## Bootstrap Alerts (12)` section inserted between
  `## Bootstrap Accordions (20)` and `## Bootstrap Buttons (20)`
- **AND** the row SHALL read `- [x] **Alert 11** — [colorlib](https://colorlib.com/wp/template/alert-11/) ·
  [underrule](https://underrule.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-11.jpg)`

## Adapting to the repo (deltas — read before writing code)

**Copy.** The reference's invented names SHALL NOT appear. Use these replacements (same lengths, so the fold
arithmetic above still holds and can be asserted):

| source                                | port                                            |
| ------------------------------------- | ----------------------------------------------- |
| "Loomwork" / `loomwork.co/`           | **"Kilnwork"** / `kilnwork.co/`                 |
| intro "This is how other makers find you on Loomwork." (46) | "This is how buyers find your shop on Kilnwork." (**46**) |
| handle `lena.weaves` → success         | `mara.clay`                                     |
| email `lena@studio` → error            | `mara@kilnhaus` (= 13 chars, same `Add the …` branch) |
| website `http://lenaweaves.pt` → warning | `http://maraclay.pt`                          |
| bio "Hand-dyed wool rugs…" (67) → 93 left | "Hand-thrown stoneware and small batch glazes, fired in a shared studio in Porto." (**80** → "80 characters left.") |
| taken list `lena, lena.park, loomwork, admin, weaver, studio` | `mara, mara.park, kilnwork, admin, potter, studio` |
| error "Add the end of the address…"    | "Add the domain ending, for example mara@kilnhaus.com." |
| "Public profile" / "Save profile"      | keep (generic UI copy, no brand in it)          |

**Structure → React.** One `<form noValidate>`; four `<Field>` groups driven by a `useProfileForm` hook holding
`{ handle, email, website, bio }` + a `verdict` per field; a pure `rules.ts` module exporting the four rule
functions (`username`, `email`, `website`, `bio`) so they are unit-testable without the DOM; one `<VerdictBar
tone>` component; one `<FieldGlyph state>` component with the four inline SVG paths. Keep the state machine
**data-driven** (a tone enum), never four copy-pasted blocks.

**Tokens.** Put the palette in `@theme`: `--color-ground`, `--color-hatch`, `--color-ink`, `--color-muted`,
`--color-line: #9c8f81` (fixed), `--color-focus`, and four `--color-{success,error,warning,hint}-tone` +
`-tint` pairs. Radius: `--radius-card: 20px`, `--radius-control: 12px`.

**Prescribed fixes (all four are behavioural, not cosmetic).** (1) Focus wins over state — raise the specificity
so `:focus-within` paints the border `#7c4dff`, keep the halo but use an opaque 3 px ring so it clears 3 : 1.
(2) `--line: #9c8f81` for the neutral control edge (3.15 : 1). (3) The counter is not a per-keystroke live
region — silent while > 20 left, polite once when it crosses. (4) Inputs at `16px` so iOS does not zoom; the
measured source is `15.5px` and the type scale survives the change (input height becomes `12 + 24 + 12 + 2 =
50`, i.e. `0.75px` taller — re-measure and update the card height by that amount, or keep `line-height: 1.45`
to hold `49.25`).

**Do not port:** the `.cl-icon` rule (dead), the `images/` claim in the README, the `content-box` card, the
`1.5px` borders, the `aria-hidden` prefix, the macOS screenshot frame, or the `#d8cfc5` neutral edge.

## Verification checklist

- [ ] `apps/underrule` exists, package `@free-react-templates/underrule`, `public/CNAME` =
      `underrule.free.componentdock.com`, `"homepage"` = `https://underrule.free.componentdock.com`
- [ ] `npm run verify:app underrule` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-underrule --type spec` is valid
- [ ] measured at 1440: card **592 × 789.06** at (424, 72) with content **520** at x **460**; `h1` **39** at
      y **108**; intro **24** at y **151**; fields at **201 / 331.89 / 462.78 / 593.67**; control **49.25**;
      bar **33.89**; bio control **95.75**; foot **48** at y **777.06**; button **137 × 48**
- [ ] tokens exact: ground `#f6f3ef` + the 45°/2px/12px hatch at `rgba(120,90,60,.035)`; card `#fff`;
      ink `#231d18`; muted `#62574d`; focus `#7c4dff`; signal **`#9c8f81`**; success `#157347`/`#e8f6ee`;
      error `#c21f3a`/`#fdebee`; warning `#9a5300`/`#fff4e2`; hint `#52606f`/`#f1f3f6`; button
      `#231d18` → hover `#40362d`
- [ ] the joined shape: control `radius 12 12 0 0` + bar `radius 0 0 12 12` with **`border-top: 0`** and no
      wrapper; **`1px`** borders everywhere (never `1.5px`)
- [ ] the four glyphs are inline `16 × 16` SVGs, `aria-hidden`, `focusable="false"`, `fill: currentColor`
- [ ] states: exactly one `is-*` per field; each redefines only tone + tint; hint keeps the neutral edge and
      weight 500; `aria-invalid` only in `error` and removed otherwise
- [ ] behaviour: handle re-checks on input, email/website on blur (plus live re-check while in error/warning);
      empty handle → hint, `lena`-equivalent taken handle → error naming it, `http://` → warning;
      bio singular at 1 and warning at ≤ 20; submit focuses the first error; clean submit writes the
      `role="status"` confirmation; typing clears it
- [ ] a11y: focus border `#7c4dff` on **all four** fields with an opaque ring ≥ 3 : 1; button `:focus-visible`
      outline `3px #7c4dff` at offset 2 (4.35 : 1); counter not a per-keystroke live region; prefix exposed to
      AT
- [ ] type: Figtree **400/500/600/700** only, one import, no local `woff2`, no 300/800/900 request
- [ ] motion: `150 ms` on the control's `border-color`/`box-shadow` and the button's background; none under
      `prefers-reduced-motion`; **0** keyframes
- [ ] width ladder: folds at content **257/258**, **249/250**, **434/435**, **423/424**, **325/326**,
      **348/349**; card steps **898.41 / 860.63 / 841.73 / 822.84 / 798.84 / 786.64 / 768.84 / 789.06**
- [ ] no horizontal overflow at 300–780 and at 320/360/390/768/1024/1440 (`scrollX` 0,
      `scrollWidth === clientWidth`); the textarea does not add a second scrollbar
- [ ] document does **not** scroll at 1440 × 900 in the port (the source's 933 is the fix we do not port)
- [ ] exactly 1 `<form noValidate>`, 3 `<input>` (`text`/`email`/`url`), 1 `<textarea>`, 1 `<button
      type="submit">`, 4 inline SVGs, **0** `<img>`, **0** `<a>` in the card, 1 `<h1>`, 9 ids, 4
      `aria-describedby` links
- [ ] no occurrence of `colorlib`, `alert-11`, `Loomwork`, `lena.weaves` or any source string in any app file;
      the Component Dock link is in a real `<footer>`
- [ ] `TEMPLATES.md` carries the `Alert 11` row as the eleventh entry of a new `## Bootstrap Alerts (12)`
      section between `## Bootstrap Accordions (20)` and `## Bootstrap Buttons (20)`
- [ ] `curl -I https://underrule.free.componentdock.com` → 200, `ssl_verify_result=0`
