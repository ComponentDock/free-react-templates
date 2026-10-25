# Template: Tierline (Pricing cards — a dark three-tier pricing band with a raised white middle plan, a gradient CTA and a "Most popular" ribbon)

## Purpose

A **three-plan pricing band on a near-black ground, with the middle plan inverted to white and lifted out of the
row**. It is the first `card` variant in this family with a **dark page** and the first one whose cards are *not*
peers: the featured plan is a different colour scheme, a different height, a different button and the only card
carrying a label. Everything else follows from one rule — the dark plans are drawn with **hairlines and a muted
violet**, the featured plan with **white space and a violet gradient** — and the page's only decoration is a
single radial violet glow behind the head. ColorLib's own listing states the brief in one line:

> "Three pricing tiers on a dark background with the middle plan raised, lit and labelled Most popular.
> Free download, no jQuery or plugins."

The page is a single band: a **centred head** (13 px violet eyebrow "Pricing", a 44 px `h1`, one paragraph of
16 px muted copy) and a **three-column grid** whose middle card is 58.5 px taller than its neighbours and
vertically centred against them. Nothing else: no nav, no hero, no comparison table, no FAQ, no testimonial, no
footer plate — the reference has none, and inventing one is the main fidelity risk here.

The design's personality is in six small, copyable details; lose any of them and a correct palette reads as a
generic "dark SaaS pricing section":

1. **The ground is almost black, the cards are blue-black, and the featured card is white.** `#0c0f1d` page,
   `#151a2e` card, `#ffffff` featured. The gap between page and card is **9 levels of luminance in one hue
   family** — visible only as a 1 px `#262c47` hairline plus a slight fill. A card that is "dark grey" on "dark
   grey" ships a different template.
2. **The violet is light, not electric.** Accents are `#b7a8ff` (eyebrow, check glyphs) on the dark cards and
   `#5b3df5` on white; the two gradients (`#6d4dff → #b04dff` ribbon, `#5b3df5 → #9333ea` button) are the only
   saturated fills on the page, and both are small.
3. **The featured card is not scaled and not outlined — it is inverted.** Same width (360), same padding
   *sides* (28), 14 px more padding top and 12 px more bottom, `border-color: transparent` (the 1 px border is
   still there, so every card's content is exactly **302 px** wide), and its "outline" is a **shadow**:
   `0 0 0 1px rgba(139,114,255,.6)` plus `0 30px 80px -20px rgba(124,92,255,.55)`. There is no `transform:
   scale()` anywhere on the page.
4. **The ribbon straddles the top edge and eats half a pixel of border.** `position: absolute; top: 0;
   left: 50%; transform: translate(-50%, -50%)` — inside a bordered box, so its centre sits on the *padding*
   edge, 1 px inside the card's outer edge: it measures **14.4 px above** the card top, not 15.4.
5. **The two plans' buttons are different components.** Dark plans: transparent fill, `1px solid #3a4166`,
   radius 12, hover fills `#222844` and lightens the border. Featured: borderless violet **gradient** with a
   violet drop shadow, hover darkens the gradient *and* lifts 1 px.
6. **One font, four declared weights, all of them the same file.** Every glyph — eyebrow, `h1`, plan names,
   the 48 px prices, buttons, list items — is Manrope, and the archive's 700/800 are Chrome's **synthetic bold**
   of the 400 outline (see §Type). The design is one family, one size ladder, no serif, no mono, no italics.

Composition at 1440 × 900 (measured with `getBoundingClientRect`, Playwright 1.62 Chromium, device scale 1):

| # | band                                               | ground            |    top |   height |
| - | -------------------------------------------------- | ----------------- | -----: | -------: |
| 0 | page (`body`)                                      | `#0c0f1d`         |      0 |    956.2 |
| 1 | container (1,152 outer / 1,120 content) + glow      | `.cl-card04-demo` |      0 |    956.2 |
| 2 | head (eyebrow / `h1` / sub, 620 wide, centred)      | `__head`          |     88 |    189.7 |
| 3 | grid (3 × 360, gap 20, `align-items: center`)       | `.cl-card04-grid` |  321.7 |    546.5 |
| — | *nothing else*                                      | —                 |      — |        — |

Per card, top to bottom: `__name` (20 px, 30 tall) → `__for` (6 above, **45 = `min-height: 3em`**, 22 below) →
`__price` (`$12` 48 px + `per seat / month` 14 px, 48 tall, 22 below) → `__cta` (302 × 50.5) → `__list-title`
(26 above, 1 px rule, `13 px uppercase`, 42.5 tall, 12 below) → `__list` (4 rows of 22.5 with 10 px gaps = 120).
The featured card adds a fifth list row (+32.5) and 26 px of padding (+58.5 total = 546.5).

The band is **956.2 px tall at 1440** — 56 px taller than a 900 px viewport, so the page scrolls a little, and
that is correct: 88 px of padding, a 189.7 px head, 44 px of gap and a 546.5 px row. It is a *section*, not a
site. The recreation therefore ships a single-page app whose one band is this pricing row, plus the minimum
chrome the repo requires (title/meta, a `main` landmark, a footer carrying the Component Dock link). **Do not
invent a nav, a hero, a billing toggle (monthly/yearly), a plan-comparison table, an FAQ or a testimonial band
to fill the viewport.**

Recreation of the ColorLib "Card V04" design (`card-04`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

- **Source slug:** `card-04`
- **ColorLib page:** https://colorlib.com/wp/template/card-04/ — **HTTP 200, 113,170 B**, `<title>`
  `Card V04 - Free Bootstrap Cards 2026 - Colorlib`, `h1` **"Card V04"**, `<meta name="description">`
  *"Three pricing tiers on a dark background with the middle plan raised, lit and labelled Most popular. Free
  download, no jQuery or plugins."*. Featured image `card-04.jpg` (**65,438 B**, a real progressive **JPEG**,
  1200 × 972 — see §Screenshot analysis), plus the usual 1024 × 829 / 768 × 622 / 408 × 330 / 353 × 286 /
  338 × 274 derivatives.
- **Live preview:** https://preview.colorlib.com/theme/bootstrap/card-04/ — **HTTP 200, 4,184 B**,
  `text/html; charset=utf-8`, `cf-cache-status: HIT`, read 2026-10-25 with `curl -4`. `<title>`
  **"Card V04 | Colorlib"**, `lang="en"`, two `robots` metas (`noindex, nofollow` and `noindex, follow`), **no
  JSON-LD, no `<link>` to fonts (they are self-hosted), no analytics, and not a single `<script>` element**.
  ⚠️ **This family lives under `theme/bootstrap/<slug>/`**: `theme/card-04/` → **404, 9 B** (both the directory
  and `/index.html`) and `theme/bb/card-04/` → **404, 9 B**. The `/index.html` form and the directory form both
  answered **200, 4,184 B** on this probe — the directory index is what flakes in this family, so prefer the
  explicit `/index.html` when you need a stable reading.
- **Stylesheet:** one file, `css/style.css?v=9acf2ac2` — **9,675 B**, sha256
  `8630b5563a809a7e285732e326d5251936841b6a6ae84850c64cbcc4a21b15bc`. **The copy inside
  `downloads/free/card-04.zip` hashes identically**, so *live preview verified; the archive is its
  un-versioned twin* (the live HTML is the archive's `index.html` plus the host's injections: two `robots`
  metas, a `cdnjs` `dns-prefetch`, the `?v=` cache-buster and `fetchpriority="high"` — nothing else).
- Single page, verified: `index.html` **200** (byte-identical to the directory URL — a no-op link, never a
  404), `about.html` **404**, `contact.html` **404**, `pricing.html` **404**. There is no inner-page inventory
  to mine, so no hidden section exists to recreate.
- **Recreation name:** `tierline` — one lowercase word, a pricing/tier term ("tier" + "line") that suits a
  three-plan band, and not the source name. No collision with `apps/`, `openspec/specs/` or `docs/templates/`,
  and **zero substring hits repo-wide**: `git grep -il tierline origin/main` → **no matches**.
  `colorlib.com/wp/template/tierline/` → **404**, `preview.colorlib.com/theme/tierline/` → **404**,
  `preview.colorlib.com/theme/bootstrap/tierline/` → **404**. The recreation lives at `apps/tierline`, package
  `@free-react-templates/tierline`, `tierline.free.componentdock.com`. **No ColorLib string may appear in the
  app** — provenance lives in this spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, 2,886 rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`card-04` is the **fourth member of the `card` snippet family** (`card-01` … `card-20`, **20 variants**), one of
the **214 snippet variants in 19 families** the listing carries and `TEMPLATES.md` does not. The 42 standalone
designs in that gap are all prepped; the snippet families are the remaining queue, worked **in family order,
then variant number**. `card-01` → **Nameplate** (`1a09a0c7b`), `card-02` → **Marketrow** (`780313169`) and
`card-03` → **Octavo** (`2a8371ce0`) came first.

When the app ships, its row belongs in a new family section **`## Bootstrap Cards (20)`**, inserted
**after `## Bootstrap Carousels (20)` (line ~710) and before `## Bootstrap Checkboxes (20)` (line ~733)**, with
that heading's count bumped (the existing families read `## Bootstrap Accordions (20)`, `## Bootstrap Buttons
(20)`, `## Bootstrap Calendars (20)`, `## Bootstrap Carousels (20)`, `## Bootstrap Checkboxes (20)`, …). The
row is:

```markdown
- [x] **Card 04** — [colorlib](https://colorlib.com/wp/template/card-04/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-04.jpg) · [tierline](https://tierline.free.componentdock.com)
```

(Adding rows for the other 16 variants is a **batch** decision for the implementer stream, not a prep-run side
effect — this prep touches no shared file.)

## Reference readings (2026-10-25, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| preview HTML      | 200, **4,184 B**, `text/html; charset=utf-8`, `<title>` "Card V04 \| Colorlib", `lang="en"`                    |
| stylesheet        | `css/style.css?v=9acf2ac2`, **9,675 B**, sha256 `8630b556…`; zip twin **identical**                             |
| `js/snippet.js`   | **404, 9 B** — no `js/` in the archive either; the README claims one (**defect**)                              |
| archive           | `preview.colorlib.com/downloads/free/card-04.zip`, **200, 206,328 B**, 15 entries (3 dirs + 12 files)           |
| fonts             | Manrope, **10 woff2 files = 2 distinct binaries** (one per subset) copied 5×; **4 weights declared** (400/500/700/800), **600 ships but is never declared**; every bold is synthetic |
| images            | **none** — 0 `<img>` in the HTML, 0 in the archive (no `images/` directory despite the README listing one)     |
| SVG               | **13 inline**, all the *same* check glyph (`viewBox="0 0 20 20"`, `<path d="m5 10.5 3 3 7-7"/>`), 4 + 5 + 4 uses |
| classes           | **17** in the markup, **18** selected by the sheet → **1 dead selector** (`.cl-icon`), 0 markup-only classes, 0 hook-only, 0 framework utilities |
| anchors           | **3**, *all* bare `href="#"` ("Start free trial" ×2, "Talk to sales") — see §Known reference defects            |
| headings          | 1 × `h1` ("Plans that grow with your inbox"), 3 × `h2` (the plan names) — no `h3` anywhere                     |
| structure         | `<main>` → `<header>` (`__eyebrow`/`__title`/`__sub`) → `<div class="grid">` → 3 × `<article>`; each article = `__name` + `__for` + `__price`(`__amount`,`__per`) + `__cta` + `__list-title` + `__list`(li › svg + text); the featured card adds `__ribbon` |
| media queries     | **two**: `@media (max-width: 880px)` (3 → 1 column) and `@media (prefers-reduced-motion: reduce)`               |
| content height    | **956.2** at 1,440 (viewport 900 → the page scrolls 56 px); 956.2 at 1,280 and 1,920; 941.5 at 1,152; 937 at 1,120; 925 at 1,060; **870.9** at 1,024 (document clamps to 900); 931.5 at 881; **1,860.3** at 880; 1,809 at 436–500; 1,840 at 768 and at 424–430; 1,866 at 360–390; **1,953** at 320 |
| horizontal scroll | **none at any width probed** — `scrollWidth === clientWidth` at 320 / 360 / 390 / 424 / 430 / 436 / 500 / 600 / 768 / 880 / 881 / 900 / 1,024 / 1,060 / 1,120 / 1,152 / 1,200 / 1,280 / 1,440 / 1,920 |

## Design tokens (measured from `style.css`, 9,675 B, and from `getComputedStyle` at 1440 px)

### Palette — a near-black ground, a blue-black card, and one white plan

| role                     | hex / value                                  | where                                                                                     |
| ------------------------ | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| page ground              | `#0c0f1d`                                    | `body` background                                                                          |
| head glow                | `radial-gradient(60% 50% at 50% 0%, rgba(124,92,255,.22), transparent 70%)` | **background-image of the container**, not of `body`   |
| card surface             | `#151a2e`                                    | `--cl-card04-surface` on the two plain plans                            |
| card hairline            | `#262c47`                                    | `--cl-card04-line`: the 1 px card border **and** the `__list-title` rule |
| card ink                 | `#e5e7f5`                                    | `--cl-card04-ink` = container `color`: plan name, price, list text      |
| card muted               | `#a9aecb`                                    | `--cl-card04-muted`: `__for`, `__per` — **and the page sub-copy**        |
| eyebrow                  | `#b7a8ff`                                    | `__eyebrow`, and the dark plans' check-glyph stroke + focus ring        |
| title                    | `#ffffff`                                    | `__title` only                                                          |
| **featured surface**     | `#ffffff`                                    | `--cl-card04-surface` override                                           |
| **featured ink**         | `#14142b`                                    | name, price, list text on the white card                                 |
| **featured muted**       | `#4d5170`                                    | `__for` / `__per` on the white card                                      |
| featured "line"          | `transparent`                                | the border **stays 1 px**, it is only made transparent — see §Layout     |
| featured ring            | `rgba(139,114,255,.6)`                       | first shadow layer: `0 0 0 1px`                                          |
| featured glow            | `rgba(124,92,255,.55)`                       | second shadow layer: `0 30px 80px -20px`                                 |
| featured accent          | `#5b3df5`                                    | the featured plan's `h2`, its check-glyph stroke, its focus ring          |
| check chip ground (dark) | `rgba(139,114,255,.18)` → **`#2a2a54`** over `#151a2e` | the 20 × 20 disc behind each tick            |
| check chip ground (white)| `#efeaff`                                    | the same disc on the featured card                                       |
| featured rule            | `#ebe8fb`                                    | `__list-title` border-top on the white card                              |
| ribbon gradient          | `linear-gradient(90deg, #6d4dff, #b04dff)`   | "Most popular" pill — **not** the button's gradient                       |
| CTA (dark plans)         | text `#ffffff`, border `#3a4166`, fill transparent, hover fill `#222844` / border `#4d5580` | |
| CTA (featured)           | `linear-gradient(90deg, #5b3df5, #9333ea)`, border transparent, shadow `0 10px 24px -10px rgba(91,61,245,.8)`; hover `#4c2fe0 → #7e22ce` | |

Contrast, checked (WCAG AA, all pass): card ink on card **14.01 : 1**, card muted on card **7.88 : 1**, page
sub on ground **8.72 : 1**, eyebrow on ground **9.13 : 1**, white title on ground **19.06 : 1**, featured ink on
white **18.03 : 1**, featured muted on white **7.70 : 1**, featured accent on white **6.12 : 1**, tick stroke on
the featured chip **5.21 : 1**, tick stroke on the blended dark chip (`#b7a8ff` on `#2a2a54`) **6.46 : 1**,
white CTA text on the gradient's lightest end **5.38 : 1**. The **lowest** ratio on the page is 5.21 on a
12.5 px glyph — do not lighten the mutes "for contrast", and do not darken `#a9aecb`.

Two **decorative hairlines** are deliberately below 3 : 1 and must stay that way: the dark card border
`#262c47` on `#151a2e` is **1.26 : 1**, the featured rule `#ebe8fb` on white is **1.2 : 1**, and the dark CTA
border `#3a4166` on the card is **1.75 : 1**. They are separation, not information — the CTA's label carries
the affordance.

**The gradient direction is the tell that someone reused the wrong token.** The ribbon runs
`#6d4dff → #b04dff` (violet → magenta), the featured button `#5b3df5 → #9333ea` (violet → purple). They are
different pairs; swapping them is visible in a side-by-side.

### Type — Manrope on every element, and every bold is synthesised

| element            | size / line-height                    | weight | tracking              | colour                |
| ------------------ | ------------------------------------- | ------ | --------------------- | --------------------- |
| eyebrow            | `13px` / normal (18 box)              | 700    | **`.14em`** (`1.82px`) | `#b7a8ff`, `uppercase` |
| `h1`               | `clamp(28px, 4vw, 44px)` / 1.12 (**49.28** at 44) | 800 | **`−.03em`** (`−1.32px`) | `#ffffff`  |
| sub                | `16px` / 1.6 (25.6)                   | 400    | normal                | `#a9aecb`             |
| plan name `h2`     | `20px` / 1.5 (30)                     | 700    | normal                | card ink (`#e5e7f5` / featured `#5b3df5`) |
| `__for`            | `15px` / 1.5 (22.5), `min-height: 3em` = **45** | 400 | normal          | card muted            |
| price amount       | `48px` / **1** (48)                   | 800    | **`−.04em`** (`−1.92px`) | card ink           |
| price unit         | `14px` / 1.5 (21)                     | 500    | normal                | card muted            |
| CTA label          | `15px` / 1.5 (22.5)                   | 700    | normal                | `#ffffff`             |
| list title         | `13px` / 1.5 (19.5)                   | 700    | **`.06em`** (`.78px`), `uppercase` | card ink |
| list item          | `15px` / 1.5 (22.5)                   | 400    | normal                | card ink              |
| ribbon             | `12.5px` / 1.5 (18.75)                | 700    | **`.04em`** (`0.5px`) | `#ffffff`             |

Family, verbatim: `"Manrope", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. There is **no second
family** — no serif, no mono, no icon font. The card sets `font-size: 15px; line-height: 1.5`, which is why the
CTA measures **50.5** (13 + 13 + 22.5 + 2 × 1 px border), the list row **22.5**, and the ribbon **30.8**
(6 + 6 + 18.75) — not the round numbers a Tailwind scale would produce.

Measured `h1` steps: **28 px** from 320 to 700, `4vw` from 700 to 1,100 (**30.72** at 768, **36** at 900,
**40.96** at 1,024, **42.4** at 1,060), **44 px** from 1,100 up.

⚠️ **Every bold on the page is fake, and reproducing it with real weights is the correct choice.** The archive
ships **10 `woff2` files for 2 binaries** — `manrope-400|500|600|700|800-<subset>.woff2` all hash to the *same*
file per subset (`e310b55a…` for `latin`, `ce093b34…` for `latin-ext`) — and only **400 / 500 / 700 / 800**
are declared as `@font-face`, so weight **600 ships and is never selected** while 700 and 800 render Chrome's
synthetic bold of the **400** outline. The string "Plans that grow" at 48 px measures **344 px at weight 400,
364 at the declared 700, 368 at the declared 800**; real Manrope v20 from Google Fonts measures **344 / 365 /
369** for the same string at the same sizes (and `$29` at 48 px: **85 px real 400**, vs **86 synthetic**). The
declared weights are the real ones minus the synthesis — so load **400; 500; 700; 800** from Google Fonts, do
not bundle ten files, and do not ship weight 600.

### Radii, rules, shadows, motion

| token                | value                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------- |
| card radius          | **22px** — the only large radius on the page, identical on all three cards                    |
| CTA radius           | **12px** (dark plans' border and featured gradient alike)                                     |
| ribbon radius        | **999px**                                                                                     |
| check chip radius    | **50%** (a 20 × 20 box with `padding: 2px`)                                                    |
| card border          | `1px solid #262c47`; featured `1px solid transparent` (**the 1 px is not removed**)           |
| featured ring + glow | `0 0 0 1px rgba(139,114,255,.6), 0 30px 80px -20px rgba(124,92,255,.55)`                       |
| CTA shadow (featured)| `0 10px 24px -10px rgba(91,61,245,.8)`                                                        |
| list rule            | `__list-title`: `margin-top 26`, `padding-top 22`, `border-top 1px solid` (dark `#262c47`, featured `#ebe8fb`), `margin-bottom 12` |
| CTA transition       | `background-color .2s ease, border-color .2s ease, transform .2s ease`                         |
| featured CTA hover   | gradient `#4c2fe0 → #7e22ce` **and** `translateY(-1px)`                                        |
| focus ring (dark)    | `3px solid #b7a8ff`, `outline-offset: 3px`                                                     |
| focus ring (featured)| `3px solid #5b3df5`, `outline-offset: 3px`                                                     |
| reduced motion       | `.cl-card04__cta { transition: none }` **and** the featured hover `transform: none` — nothing else is disabled |

There is **no** card hover, no card lift, no opacity fade, no `@keyframes`, no scroll animation and no shadow
on the plain cards. Hover exists on the two CTA skins only.

### Layout — three fixed columns, one breakpoint at 880, a 1,120 px content box

`.cl-card04-demo { max-width: 1120px; margin: 0 auto; padding: clamp(40px, 7vw, 88px) 16px; color: #e5e7f5;
background: radial-gradient(...); }` and `.cl-card04-grid { display: grid; grid-template-columns:
repeat(3, minmax(0, 1fr)); align-items: center; gap: 20px; }`, with the single width query
`@media (max-width: 880px) { .cl-card04-grid { grid-template-columns: minmax(0, 440px); justify-content: center; } }`.

`max-width` is a **content box** here (the `:where(html){all:revert}` guard leaves `box-sizing: content-box` on
the container), so above **1,152 px** of viewport the container stops growing: outer **1,152** / content
**1,120**, starting at x **144** at 1,440 with the head and grid at x **410** and **160**. The vertical clamp
reaches its 88 px ceiling at **1,258** px of viewport (7vw), its 40 px floor below **572** px.

| viewport | columns | card width | gap | pad (v / h) | `h1`    | card heights (plain / featured) | content height |
| -------: | ------: | ---------: | --: | ----------: | ------: | ------------------------------: | -------------: |
|      320 |       1 |        288 |  20 |     40 / 16 |   28 px |      510.5 / 611                 |        1,953   |
|      360 |       1 |        328 |  20 |     40 / 16 |   28 px |      488 / 546.5                 |        1,866   |
|      390 |       1 |        358 |  20 |     40 / 16 |   28 px |      488 / 546.5                 |        1,866   |
|      430 |       1 |        398 |  20 |     40 / 16 |   28 px |      488 / 546.5                 |        1,840.4 |
|      500 |       1 |        440 |  20 |     40 / 16 |   28 px |      488 / 546.5                 |        1,809   |
|      768 |       1 |        440 |  20 |  53.76 / 16 | 30.72 px|      488 / 546.5                 |        1,839.6 |
|      880 |       1 |        440 |  20 |   61.6 / 16 | 35.2 px |      488 / 546.5                 |        1,860.3 |
|      881 |       3 |      269.7 |  20 |  61.67 / 16 | 35.24 px|      533 / 633.5                 |          931.5 |
|      900 |       3 |        276 |  20 |     63 / 16 |   36 px |      533 / 611                   |          912.5 |
|    1,024 |       3 |      317.3 |  20 |  71.68 / 16 | 40.96 px|      510.5 / 546.5               |          870.9 |
|    1,060 |       3 |      330.7 |  20 |   74.2 / 16 |  42.4 px|      488 / 546.5                 |          925   |
|    1,152 |       3 |        360 |  20 |  80.64 / 16 |   44 px |      488 / 546.5                 |          941.5 |
|    1,440 |       3 |        360 |  20 |     88 / 16 |   44 px |      488 / 546.5                 |          956.2 |
|    1,920 |       3 |        360 |  20 |     88 / 16 |   44 px |      488 / 546.5                 |          956.2 |

Four consequences an implementer will otherwise get wrong:

- **There is no two-column state at all.** The sheet jumps 3 → 1 at **881 / 880** and the single column is
  capped at **440** and centred (`justify-content: center`), so at 600 px the card is 440 wide with 80 px of
  ground either side, and at 430 it is 398 (viewport − 32). A `sm:/lg:` variant that produces two columns at
  768 is a different layout.
- **The page is taller at 1,060 than at 1,024** (925 vs **870.9**) because the `h1` gains a second line there,
  and it **doubles at the breakpoint** (931.5 at 881 → **1,860.3** at 880). The one-column page is
  1,809–1,953 px tall and the tallest reading in the sweep is at **320** (1,953), not at 880.
- **`align-items: center` means the plain cards float.** The featured card is 58.5 px taller, so at 1440 the
  two plain plans start at y **351** while the featured one starts at **321.7** — a 29.25 px offset on each
  side. Stacked at ≤880 the offset disappears (each card is its own row).
- **The cards stop being equal height below 1,060.** As the content column narrows, list items wrap: at 1,024
  the three cards read **510.5 / 546.5 / 488**, at 900 **533 / 611 / 533**, at 881 **533 / 633.5 / 533**, at
  320 **510.5 / 611 / 488**. The grid stretches rows to the tallest card, so slack sits **below** the list (the
  cards have no `flex: 1` body and no `margin-top: auto`) — do not add either.

The **`h1` wrap is a race between a fixed 620 px head and a growing font**, and it is not monotonic. Measured
with the title's own `nowrap` advance width (which includes the trailing `−.03em` letter-space):

- **2 lines at ≥ 1,060** — at **1,059** the single-line advance is **615.6 px** in a 620 px head; at **1,060**
  the font is 42.4 px and the advance is **620.6 px**, so it breaks to **503.2 + 110.6**
- **1 line from 436 to 1,059** — below 652 px of viewport the head is `min(620, vw − 32)`, so at **435** the
  head is **403 px** against a 404 px advance (wraps) and at **436** it is exactly **404** (does not)
- **2 lines at ≤ 434**

The sub-copy has its own thresholds: **3 lines at ≤ 422**, **2 lines at ≥ 424**, 2 lines at every larger width.

### Component geometry (1440 px, then the small states)

Card 1 (plain), border-box **360 × 488** at x 160, y 351 — border 1, radius 22, padding `30px 28px 32px`,
content width **302**:

| element       | box                      | y (from card top 351) | notes                                                        |
| ------------- | ------------------------ | --------------------: | ------------------------------------------------------------ |
| `__name`      | 302 × **30**             |                   382 | 31 = 1 px border + 30 px padding; 20/30/700                    |
| `__for`       | 302 × **45**             |                   418 | `margin: 6px 0 22px`; **45 = `min-height: 3em`**, 2 lines of 22.5 |
| `__price`     | 302 × **48**             |                   485 | flex, `align-items: baseline`, `gap: 8`, `margin: 0 0 22px`    |
| `__amount`    | **75.3** wide (`$12`; `$29`/`$59` = **82.3**) | 485 | 48 px / **48** line-height, `−1.92px`                    |
| `__per`       | **111** wide             |                   511 | 14/21/500 muted; sits **26 px** below the amount's top (baseline aligned, not centred) |
| `__cta`       | 302 × **50.5**           |                   555 | `display: block`, padding `13px 18px`, border 1, radius 12     |
| `__list-title`| 302 × **42.5**           |                 631.5 | 26 above, `padding-top 22`, 1 px rule, 19.5 line, 12 below     |
| `__list`      | 302 × **120**            |                   686 | `grid`, `gap: 10`, 4 rows of 22.5                              |
| card bottom   | —                        |                   839 | + 32 bottom padding + 1 border                                 |

Featured card, **360 × 546.5** at x 540, y 321.7 — padding `44px 28px`, same 302 content width, 5 list rows
(**152.5**): `__ribbon` **116 × 30.8** at x 662 / y 307.3 (card centre − 58, **14.4 px above the card's outer
top**), `__name` y 366.7 in `#5b3df5`, `__for` y 402.7, `__price` y 469.7, `__cta` y 539.7, `__list-title`
y 616.2, `__list` y 670.7.

Check glyph: **20 × 20**, `padding: 2px`, radius 50 %, `margin-top: 1px`, `stroke-width: 2.4` (`fill: none`,
round caps/joins) in a `20 20` viewBox — so the tick is drawn at **16 px** inside a 20 px disc, and the list
text starts **10 px** (`gap`) to its right, baseline-aligned with `align-items: flex-start`.

## Requirements

### Requirement 1: Page shell and the single pricing band

The app SHALL render one full-width band on `#0c0f1d` — a centred head (eyebrow, `h1`, sub-copy) over a
three-column pricing grid — with **no other content bands**, and a single radial violet glow painted behind the
head by the band container.

#### Scenario: Ground, glow and container at 1440

- **GIVEN** a 1440 × 900 viewport
- **WHEN** the page is measured
- **THEN** `<body>` background is `#0c0f1d` and the document is **956.2 px** tall (the page scrolls 56 px)
- **AND** the band container is **1,152 px outer / 1,120 px content** at x **144**, padding **88 px** vertical
  and **16 px** horizontal, `color: #e5e7f5`
- **AND** the container's `background-image` is exactly
  `radial-gradient(60% 50% at 50% 0%, rgba(124, 92, 255, 0.22), rgba(0, 0, 0, 0) 70%)` and `body` has **no**
  background image
- **AND** the glow stops well inside the container (an ellipse **691 × 478** centred on the container's top
  edge, transparent from y ≈ 239), so no seam is visible at the container's left or right edge

#### Scenario: The head block

- **GIVEN** the head at 1440
- **THEN** it is `max-width: 620px`, centred, `text-align: center`, `margin: 0 auto 44px`, **189.7 px** tall
- **AND** the eyebrow reads **"Pricing"** at 13/700/`.14em`/uppercase in `#b7a8ff`, **18 px** tall at y 88
- **AND** the `h1` reads **"Plans that grow with your inbox"** at **44 px** / 49.28 / 800 / `−1.32px`, white,
  **exactly two lines** (`margin: 10px 0 12px`, 98.5 tall at y 116)
- **AND** the sub-copy reads **"Every plan includes unlimited contacts, a shared inbox and a 14-day free trial.
  Prices in USD, billed monthly."** at 16/25.6/400 in `#a9aecb`, **two lines**, 51.2 tall at y 226.5

#### Scenario: No invented bands or controls

- **GIVEN** the rendered app
- **THEN** it contains exactly one section: this pricing band
- **AND** it contains **no** navigation bar, hero, billing period toggle, currency selector, comparison table,
  FAQ, testimonial, logo strip, newsletter or multi-column footer — the reference has none
- **AND** the page footer is a single line of small print (Requirement 11), not a plate

### Requirement 2: The grid — three columns above 880 px, one capped column below

The app SHALL lay the three plans out in a CSS grid of three equal `minmax(0, 1fr)` tracks with a **20 px**
gap, switching to a single `minmax(0, 440px)` centred track at **≤ 880 px**, and SHALL never produce two
columns.

#### Scenario: Column counts and thresholds

- **GIVEN** the viewports 320, 360, 390, 430, 500, 768, 880, 881, 900, 1,024, 1,060, 1,152, 1,440 and 1,920
- **THEN** the grid resolves to **1 / 1 / 1 / 1 / 1 / 1 / 1 / 3 / 3 / 3 / 3 / 3 / 3 / 3** columns
- **AND** the card widths are **288 / 328 / 358 / 398 / 440 / 440 / 440 / 269.7 / 276 / 317.3 / 330.7 / 360 /
  360 / 360** px
- **AND** the gap is a **fixed 20 px** at every width — it never clamps
- **AND** no viewport between 320 and 1,920 produces two columns

#### Scenario: The single column is capped and centred

- **GIVEN** a 600 px viewport
- **THEN** the card is **440 px** wide at x **80** (ground visible on both sides)
- **AND** at 430 px it is **398 px** (viewport − 32) at x 16, i.e. the cap is inert once `vw − 32 < 440`
- **AND** the container's vertical padding is `clamp(40px, 7vw, 88px)` → **40** at 320–571, **42** at 600,
  **53.76** at 768, **61.6** at 880, **88** from 1,258 up

#### Scenario: Vertical centring of the row

- **GIVEN** the three-column state at 1440
- **THEN** the grid is **546.5 px** tall and `align-items: center`
- **AND** the featured card starts at y **321.7** while both plain cards start at y **351** (a **29.25 px**
  offset = `(546.5 − 488) / 2`)
- **AND** the row does **not** stretch the plain cards, and nothing uses `transform: scale()`

### Requirement 3: Card anatomy — the plan, the pitch, the price, the button and the list

The app SHALL render each plan as an `<article>` with the reference's six-part order — `h2` name, one-line
pitch, price block, CTA, rule + "What's included"-style label, and a check list — inside a **22 px**-radius
card with a 1 px hairline border and **302 px** of content width.

#### Scenario: Plain card geometry at 1440

- **GIVEN** the Starter card
- **THEN** it is **360 × 488** at x 160 / y 351, `background: #151a2e`, `border: 1px solid #262c47`,
  `border-radius: 22px`, `padding: 30px 28px 32px`, `font-size: 15px; line-height: 1.5`
- **AND** its children measure **30 / 45 / 48 / 50.5 / 42.5 / 120** tall with the gaps **6, 22, 22, 26, 12**
  (the last being `__list-title`'s own `padding-top: 22` + 1 px rule + `margin-bottom: 12`)
- **AND** no element inside the card is centred: the card is left-aligned throughout, including the price block
  and the CTA's *label* (the CTA is a full-width block with `text-align: center`)

#### Scenario: The pitch block reserves two lines

- **GIVEN** any `__for`
- **THEN** it is `min-height: 3em` = **45 px** at the card's 15 px font size — that is **two** lines of 22.5,
  not three
- **AND** all three pitches render two lines at 1440, so the three price blocks share y **485** (the featured
  card's sits at 469.7 only because of its larger top padding)

#### Scenario: The price block

- **GIVEN** the price row
- **THEN** it is `display: flex; align-items: baseline; flex-wrap: wrap; gap: 8px`, 48 px tall
- **AND** the amount is **48 px / 48** line-height, weight 800, tracking `−1.92px`, measuring **75.3** wide for
  `$12` and **82.3** for `$29` / `$59`
- **AND** the unit reads **"per seat / month"** at 14/21/500 in the muted colour, **111 px** wide, its box top
  **26 px** below the amount's top (baseline alignment, so it hangs into the block's bottom half)
- **AND** the block keeps `margin-bottom: 22px` so the CTA top lands exactly 22 px later

#### Scenario: The list

- **GIVEN** the feature list
- **THEN** `__list-title` is a `<p>` (not a heading) at 13/19.5/700/`.78px`, `text-transform: uppercase`,
  separated by `margin-top: 26px`, `padding-top: 22px` and a 1 px `border-top` in the card's line colour
- **AND** `__list` is a `grid` with `gap: 10px`, `list-style: none`, `padding: 0`, four rows of **22.5** = **120**
  on the plain cards and five rows = **152.5** on the featured one
- **AND** each `<li>` is `display: flex; align-items: flex-start; gap: 10px` with a **20 × 20** tick disc
  first, `margin-top: 1px`, then the label

### Requirement 4: The featured plan is inverted, not scaled

The app SHALL mark exactly one plan as featured and render it **white on the dark ground**, 58.5 px taller than
its siblings, with a violet ring-and-glow shadow, a gradient CTA and the "Most popular" ribbon straddling its
top edge.

#### Scenario: The inversion

- **GIVEN** the Team card at 1440
- **THEN** it is **360 × 546.5** at x 540 / y 321.7, `background: #ffffff`, text `#14142b`, muted `#4d5170`
- **AND** `border: 1px solid transparent` — the **1 px is still consumed**, so all three cards have exactly
  **302 px** of content width (a featured card with `border: none` would be 2 px wider inside)
- **AND** its shadow is `0 0 0 1px rgba(139,114,255,.6), 0 30px 80px -20px rgba(124,92,255,.55)` and it has
  **no** `transform`, **no** extra width and **no** position offset of its own
- **AND** its padding is `44px 28px` — **+14 px top / +12 px bottom** versus the plain cards — which, with the
  fifth list row (+32.5), accounts for the whole **+58.5 px**
- **AND** its `__name` is `#5b3df5` (the only coloured heading on the page) and its `__list-title` rule is
  `#ebe8fb`

#### Scenario: The ribbon

- **GIVEN** the "Most popular" pill
- **THEN** it is a `<p>` (not a `<span>` wrapper, not a `::before`) measuring **116 × 30.8**, `padding: 6px 14px`,
  radius **999**, `font-size: 12.5px`, weight 700, tracking `0.5px`, white on
  `linear-gradient(90deg, #6d4dff, #b04dff)`
- **AND** it is `position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%)`, so it measures
  **14.4 px above** the card's outer top edge (307.3 vs 321.7) — its centre sits on the **padding** edge, 1 px
  inside the border, longer than a naive `-50%` of its own height would put it
- **AND** it adds **0 px** to the card's height; the featured card would be 546.5 tall without it
- **AND** it is centred on the card (x 662 = 540 + 180 − 58) and is `white-space: nowrap`

#### Scenario: Check chips on the white card

- **GIVEN** a tick on the featured card
- **THEN** its disc ground is `#efeaff` and its stroke `#5b3df5`
- **AND** on the plain cards the disc is `rgba(139,114,255,.18)` (rendering **`#2a2a54`** over `#151a2e`) and the
  stroke `#b7a8ff`
- **AND** in both cases the glyph is the **same** inline SVG (`viewBox="0 0 20 20"`,
  `path d="m5 10.5 3 3 7-7"`), `fill: none`, `stroke-width: 2.4`, `stroke-linecap: round`,
  `stroke-linejoin: round`, drawn at 16 px inside the 20 px disc

### Requirement 5: The two CTA skins, with hover and focus

The app SHALL render the CTA as a full-width `<a>` (302 px) with a **12 px** radius, 13 × 18 padding, 15/700
white label and a **50.5 px** height, in a bordered dark skin on the plain plans and a borderless gradient skin
on the featured plan.

#### Scenario: Dark skin

- **GIVEN** "Start free trial" on Starter or "Talk to sales" on Scale
- **THEN** it is transparent with `border: 1px solid #3a4166` and white text
- **AND** on hover its background becomes `#222844` and its border `#4d5580`, with **no** transform
- **AND** `:focus-visible` draws `outline: 3px solid #b7a8ff; outline-offset: 3px`

#### Scenario: Featured skin

- **GIVEN** "Start free trial" on the featured plan
- **THEN** its background is `linear-gradient(90deg, #5b3df5, #9333ea)` with `border-color: transparent` and
  `box-shadow: 0 10px 24px -10px rgba(91,61,245,.8)`
- **AND** on hover the gradient becomes `#4c2fe0 → #7e22ce` **and** the element translates `−1px` on Y
- **AND** `:focus-visible` draws `outline: 3px solid #5b3df5; outline-offset: 3px`

#### Scenario: Motion is limited to the CTA

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** the CTA `transition` is `none` and the featured hover `transform` is `none`
- **AND** nothing else in the sheet is disabled, because nothing else animates: there is no card hover, no
  fade, no `@keyframes` and no scroll effect

### Requirement 6: Responsive integrity — no horizontal scroll, and heights that are not monotonic

The app SHALL never scroll horizontally between 320 and 1,920 px, and SHALL reproduce the reference's
non-monotonic page heights rather than smoothing them with new breakpoints.

#### Scenario: No horizontal scroll

- **GIVEN** the viewports 320, 360, 390, 424, 430, 436, 500, 600, 768, 880, 881, 900, 1,024, 1,060, 1,120,
  1,152, 1,200, 1,280, 1,440 and 1,920
- **THEN** `document.documentElement.scrollWidth === clientWidth` at every one
- **AND** `scrollTo(200, 0)` leaves `scrollX === 0`
- **AND** the ribbon is **not** clipped at any width (it overflows the card, not the page)

#### Scenario: The `h1` wraps twice, for two different reasons

- **GIVEN** the viewport widths 1,059 and 1,060
- **THEN** at 1,059 the title is **one line** (the string measures **615.6** inside the 620 px head at 42.36 px)
- **AND** at 1,060 it is **two lines** (503.2 + 110.6 at 42.4 px) and stays two lines up to 1,920
- **AND** below the head's own cap the same race runs the other way: **two lines at ≤ 434** (head 402),
  **one line from 436** (head 404 = the 28 px string's exact width)
- **AND** the sub-copy is **three lines at ≤ 422** and two lines at ≥ 424

#### Scenario: The breakpoint doubles the page

- **GIVEN** 881 and 880 px
- **THEN** the content height goes **931.5 → 1,860.3** as the grid drops from three 269.7 px tracks to one
  440 px track
- **AND** the tallest reading in the sweep is **1,953** at 320 px (cards **510.5 / 611 / 488**)
- **AND** content heights at 1,024 / 1,060 / 1,152 / 1,440 are **870.9 / 925 / 941.5 / 956.2** — at 1,024 the
  document reports 900 only because the viewport is taller than the content; measure the band, not
  `scrollHeight`

#### Scenario: Cards stop being equal height as the column narrows

- **GIVEN** 1,440, 1,024, 900, 881 and 320 px
- **THEN** the three card heights read **488 / 546.5 / 488**, **510.5 / 546.5 / 488**, **533 / 611 / 533**,
  **533 / 633.5 / 533** and **510.5 / 611 / 488**
- **AND** the growth is entirely wrapped list items (+22.5 per extra line) and a wrapped `__list-title`
  (3 lines, 62 instead of 42.5) — never a wider card
- **AND** slack sits **below** the list: the cards use no `flex: 1` body and no `margin-top: auto`

### Requirement 7: Semantics, accessibility and the label wiring

The app SHALL expose one `h1`, three `h2` plan names, three `<article>` elements inside a `<main>`, wire each
article to its name with `aria-labelledby`, and hide every decorative glyph.

#### Scenario: Document structure

- **GIVEN** the rendered page
- **THEN** there is exactly **1 `h1`**, **3 `h2`**, **3 `<article>`**, **1 `<main>`** and **1 `<header>`**, and
  no `h3`–`h6`
- **AND** each `<article>` carries `aria-labelledby` pointing at a real `id` on its `h2` (Starter / Team /
  Scale) — measured: all three ids resolve
- **AND** the page sets `lang="en"` and a descriptive `<title>`

#### Scenario: Decorative glyphs

- **GIVEN** the 13 tick SVGs
- **THEN** every one has `aria-hidden="true"` and no `<title>`
- **AND** no icon font, sprite or image is used anywhere — the reference contains **0 `<img>`**

#### Scenario: Focus reaches every interactive element

- **GIVEN** keyboard navigation
- **THEN** the three CTAs are the only tab stops, in DOM order, and each shows the ring described in
  Requirement 5
- **AND** the ribbon and the check chips are not focusable (they are a `<p>` and `aria-hidden` glyphs)

#### Scenario: Text is readable at AA

- **GIVEN** every text/ground pair in the design
- **THEN** the lowest ratio on the page is **5.21 : 1** (tick stroke `#5b3df5` on `#efeaff`) and every
  body-text pair is ≥ **7.7 : 1**
- **AND** the three sub-3 : 1 hairlines (`#262c47`, `#ebe8fb`, `#3a4166`) stay hairlines — they carry no
  information on their own

### Requirement 8: Attribution, naming and provenance

The app SHALL ship as `apps/tierline` / `@free-react-templates/tierline`, deploy to
`tierline.free.componentdock.com`, and contain **no ColorLib reference of any kind**.

#### Scenario: Identity

- **GIVEN** the app folder
- **THEN** `apps/tierline/package.json` names the workspace `@free-react-templates/tierline` with
  `"homepage": "https://tierline.free.componentdock.com"`
- **AND** `apps/tierline/public/CNAME` contains `tierline.free.componentdock.com`

#### Scenario: Footer attribution

- **GIVEN** the page footer
- **THEN** it contains one link to **https://www.componentdock.com/** labelled "Component Dock"
- **AND** it is a single line of small print, not a band, and it is not styled as a fourth plan

#### Scenario: Clean provenance

- **GIVEN** `grep -ri 'colorlib' apps/tierline` and `grep -ri 'card-04' apps/tierline`
- **THEN** both return **no matches** (comments included)
- **AND** the class names, component names and copy in the app do not encode the source slug

### Requirement 9: Copy fidelity

The app SHALL carry the reference's copy — the eyebrow, the `h1`, the sub-copy, and for each plan the name,
pitch, price, unit, CTA label, list label and every list item — word for word.

#### Scenario: Head and sub-copy

- **GIVEN** the head at 1440
- **THEN** the eyebrow is **"Pricing"** (sentence case in the markup, uppercased by CSS)
- **AND** the `h1` is **"Plans that grow with your inbox"**
- **AND** the sub-copy is **"Every plan includes unlimited contacts, a shared inbox and a 14-day free trial.
  Prices in USD, billed monthly."** — including the hyphen in "14-day" and the period after "monthly"

#### Scenario: The three plans

- **GIVEN** the grid at 1440
- **THEN** plan 1 is **Starter** / "For freelancers answering customers on their own." / **$12** /
  "per seat / month" / **Start free trial** / "What's included" / *1 shared inbox · Email and contact form
  channels · Saved replies · 7-day conversation history*
- **AND** plan 2 (featured) is **Most popular** / **Team** / "For small support teams that need to share the
  load." / **$29** / "per seat / month" / **Start free trial** / "Everything in Starter, plus" / *5 shared
  inboxes · Live chat and social channels · Assignment rules and tags · Customer satisfaction surveys ·
  Unlimited history*
- **AND** plan 3 is **Scale** / "For growing teams with service levels to meet." / **$59** /
  "per seat / month" / **Talk to sales** / "Everything in Team, plus" / *Unlimited inboxes · SLA timers and
  escalations · Single sign-on and audit log · Priority support in 2 hours*

#### Scenario: Typographic details survive

- **GIVEN** the rendered copy
- **THEN** the unit keeps its spaces and slash — **"per seat / month"**, never "per seat/month" or "/mo"
- **AND** "What's included" uses a straight ASCII apostrophe (`U+0027`), as in the source, and the list labels
  are uppercased by CSS only (the DOM text stays "What's included")
- **AND** "Single sign-on" keeps its hyphen, and no list item gains or loses a trailing period (none has one)
- **AND** the amounts keep the `$` prefix with no space (`$12`, `$29`, `$59`)

## Screenshot analysis (catalogue image, `card-04.jpg`)

The listing image is **a framed capture, not a bare screenshot**: a **1200 × 972** JPEG (a real progressive
JPEG — `file` says `JPEG image data, progressive, precision 8, 1200x972`, 65,438 B) showing a macOS window —
three traffic-light dots and a URL bar reading `preview.colorlib.com` — on a **white sheet with a soft drop
shadow over a very light grey page**. Inside the window the design renders at roughly **1,152 px** wide in its
**three-column** state: the violet glow at the very top, "PRICING" in 13 px letterspaced caps, the white
two-line headline, the two-line muted sub-copy, and the three cards with the white one raised between two dark
ones.

Two consequences for the recreation: the image confirms the **three-column, container-capped composition** is
the intended reading (as at 1,440, where the container has already stopped growing), and **the window frame,
traffic lights, URL bar, white sheet and drop shadow are catalogue furniture — none of it belongs in the app**.
The app's own ground is `#0c0f1d`, full-bleed.

The screenshot also shows the one thing a static reading of the CSS hides: **the dark cards read as almost
invisible plates** — you see the 1 px `#262c47` hairline and the glow, but the `#151a2e` fill is barely
distinguishable from `#0c0f1d` at this scale. That is the intended effect (a hairline card, not a grey box); a
recreation that "makes the cards more visible" by lightening the surface has changed the design. Both dark CTA
outlines read as **hairline rectangles with white labels**, and the featured CTA is the only **filled** element
in the composition — which is why the eye lands on the middle plan first.

## Known reference defects (do not copy)

1. **All three anchors are `href="#"`.** "Start free trial" (twice) and "Talk to sales" go nowhere, so all three
   CTAs are dead click targets. The recreation keeps the anchors (the focus rings and hover states depend on
   them) but points them at real in-page fragments — e.g. `mailto:` or a `#plans` section hook — and tests that
   no `a[href]` equals `#`. Do **not** invent a checkout route, a signup page or a plan-selection state: the
   source has no inner pages at all (`about.html`, `contact.html`, `pricing.html` all 404).
2. **The archive's `README.md` documents two directories that do not exist.** It lists `js/snippet.js — the
   behaviour, in plain JavaScript` and `images/ — its images`; there is **no `js/` directory, no `images/`
   directory, no `<script>` element and not one `<img>`**. Do not port a script (there is no behaviour to
   reproduce), and do not add photography to a page that has none. (`card-01` and `card-03` ship the same lie;
   `card-02` really does have 1,628 B of JS — do not generalise from any of them.)
3. **Ten `woff2` files for two binaries, and one weight nobody declares.** `manrope-400|500|600|700|800-latin
   .woff2` are byte-identical (`e310b55a…`), as are the five `-latin-ext` files (`ce093b34…`); only 400 / 500 /
   700 / 800 get `@font-face` blocks, so **600 ships in the archive and is never selected**, and **700 / 800
   render as synthetic bold of the 400 outline**. Load the real 400/500/700/800 from Google Fonts — one
   `<link>` — and ship no font files. Measured delta: 1 px per 344 px of text.
4. **`.cl-icon` is a dead selector.** The sheet defines it (7 lines: `height: 1em; width: auto;
   fill: currentColor; display: inline-block`) and the markup never uses it — the 13 ticks are unclassed
   `<svg>`s styled through `.cl-card04__list svg`. Family leftover; omit it.
5. **The `:where(html) … { all: revert; }` guard is 55 lines of anti-Bootstrap reset** (plus six
   `::-webkit-datetime-edit` selectors) that exists so the snippet renders identically inside a host page.
   Tailwind's preflight is the equivalent; port **none** of it.
6. **The `--cl-card04-*` custom properties are re-declared per card, not themed once.** `--cl-card04-surface`,
   `-line`, `-ink` and `-muted` are set on `.cl-card04` and overridden on `.cl-card04--featured` — a fine
   approach, but the sheet also declares `--cl-card04-line: transparent` on the featured card while the
   border shorthand still resolves `1px` (see Requirement 4). Keep the 1 px; if you use Tailwind tokens
   instead, give the featured card a **transparent 1 px border**, not `border-none`, or its content grows 2 px.
7. **`border-radius: 999px` on the ribbon and `50%` on a 20 px chip** are the only radii besides the card's 22
   and the CTA's 12 — a Tailwind `rounded-full` + `rounded-[22px]` + `rounded-xl` set reproduces them exactly;
   do not introduce a fourth radius.

## Verification checklist

- [ ] `apps/tierline` exists, `@free-react-templates/tierline` in `package.json`, `public/CNAME` =
      `tierline.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string, no `card-04`, in any app file
      (comments included)
- [ ] one band only: centred head (eyebrow / `h1` / sub) + a 3-plan grid; no nav, hero, billing toggle,
      comparison table, FAQ or testimonial invented
- [ ] ground `#0c0f1d`; container max **1,120 px** content + **16 px** padding, vertical padding
      `clamp(40px, 7vw, 88px)` (→ 88 at 1440, outer 1,152 at x 144); **glow** is the container's
      `background-image`, exact gradient `60% 50% at 50% 0%, rgba(124,92,255,.22) → transparent 70%`
- [ ] head **620** wide, centred, `margin: 0 auto 44px`, **189.7** tall; eyebrow 13/700/`1.82px`/uppercase
      `#b7a8ff` (**18** tall); `h1` **44/49.28/800/−1.32px** white, **two lines** (98.5); sub 16/25.6/400
      `#a9aecb`, two lines (51.2)
- [ ] grid `repeat(3, minmax(0,1fr))`, **gap 20 fixed**, `align-items: center`; single `minmax(0,440px)`
      centred at **≤ 880**; **never** two columns; card widths **288 / 328 / 358 / 398 / 440 / 440 / 440 /
      269.7 / 276 / 317.3 / 330.7 / 360 / 360 / 360** at 320 / 360 / 390 / 430 / 500 / 768 / 880 / 881 / 900 /
      1,024 / 1,060 / 1,152 / 1,440 / 1,920
- [ ] plain card **360 × 488**: `#151a2e`, `1px solid #262c47`, radius **22**, padding `30px 28px 32px`,
      15/1.5; children **30 / 45 / 48 / 50.5 / 42.5 / 120** with gaps **6 / 22 / 22 / 26 / 12**
- [ ] `__for` `min-height: 3em` = **45** (two lines, not three); price row flex/baseline/`gap 8`, amount
      **48/48/800/−1.92px** (75.3 for `$12`, 82.3 for `$29`), unit 14/21/500 **111** wide and **26 px** below
      the amount's top; CTA **302 × 50.5**, radius 12, padding `13px 18px`
- [ ] `__list-title` is a `<p>`, 13/19.5/700/`.78px` uppercase, `margin-top 26`, `padding-top 22`, 1 px rule,
      `margin-bottom 12`, **42.5** tall; `__list` grid `gap 10`, rows **22.5** (4 → 120, 5 → 152.5)
- [ ] ticks: **20 × 20**, radius 50 %, `padding 2px`, `margin-top 1px`, `stroke-width 2.4`, `fill: none`,
      `viewBox="0 0 20 20"`, path `m5 10.5 3 3 7-7`; dark disc `rgba(139,114,255,.18)` / stroke `#b7a8ff`,
      featured disc `#efeaff` / stroke `#5b3df5`; **all 13** `aria-hidden`
- [ ] featured card **360 × 546.5**, white, ink `#14142b`, muted `#4d5170`, **`1px solid transparent`**
      (content stays **302**), shadow `0 0 0 1px rgba(139,114,255,.6), 0 30px 80px -20px rgba(124,92,255,.55)`,
      padding `44px 28px`, name `#5b3df5`, rule `#ebe8fb`, **no** transform/scale
- [ ] ribbon **116 × 30.8**, radius 999, `padding 6px 14px`, 12.5/700/`0.5px` white on
      `#6d4dff → #b04dff`, absolutely positioned `top 0 / left 50%` with `translate(-50%,-50%)`, centred at
      x **662** and **14.4 px** above the card's outer top; adds 0 px of height; `white-space: nowrap`
- [ ] featured CTA gradient `#5b3df5 → #9333ea`, shadow `0 10px 24px -10px rgba(91,61,245,.8)`, hover
      `#4c2fe0 → #7e22ce` **and** `translateY(-1px)`; dark CTA hover `#222844` / border `#4d5580`, no transform
- [ ] focus rings: dark `3px #b7a8ff` offset 3; featured `3px #5b3df5` offset 3; **zero bare `#` anchors**
- [ ] `prefers-reduced-motion: reduce` → CTA transition `none`, featured hover transform `none`, nothing else
      disabled; no card hover, no `@keyframes`, no scroll animation, no shadow on plain cards
- [ ] `scrollWidth === clientWidth` and `scrollX === 0` after `scrollTo(200,0)` at **320 / 360 / 390 / 424 /
      430 / 436 / 500 / 600 / 768 / 880 / 881 / 900 / 1,024 / 1,060 / 1,120 / 1,152 / 1,200 / 1,280 / 1,440 /
      1,920**; content heights **1,953 / 1,866 / 1,866 / 1,840.4 / 1,809 / 1,839.6 / 1,860.3 / 931.5 / 912.5 /
      870.9 / 925 / 937 / 941.5 / 948.2 / 956.2**
- [ ] `h1` **2 lines ≥ 1,060**, **1 line 436–1,059**, **2 lines ≤ 434**; sub **3 lines ≤ 422**, 2 lines ≥ 424
- [ ] one `h1`, three `h2`, three `<article>`, `<main>` + `<header>`, `aria-labelledby` resolving on all three
      articles, `lang="en"`
- [ ] Manrope **400; 500; 700; 800** via one Google Fonts `<link>` (`display=swap`); **no** bundled woff2, **no**
      weight 600, **no** `.cl-icon`, **no** reset guard, **no** script, **no** `<img>`
- [ ] 100 % coverage on the new app, `scripts/verify-app.sh tierline` green
- [ ] after shipping (implementer stream, not prep): add the `## Bootstrap Cards (20)` section row from
      §Why this design has no row in `TEMPLATES.md` and mark it `[x]`
