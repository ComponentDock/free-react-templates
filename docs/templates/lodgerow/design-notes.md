# Lodgerow — design notes (`card-07`)

Research run 2026-10-25. Live preview **verified** (`theme/bootstrap/card-07/index.html`, 200, 6,427 B) and its
CSS + all three images **byte-identical** to `downloads/free/card-07.zip` (497,801 B, 18 entries) — so the
archive is this file's un-versioned twin and neither source is privileged. Every number below was read from
`getComputedStyle` / `getBoundingClientRect` at 1440 px (Playwright 1.62 Chromium) or bisected at the pixel.

Spec is the authority: `openspec/specs/template-lodgerow/spec.md`. Tasks: `docs/templates/lodgerow/tasks.md`.

## 1 — Live DOM skeleton (as served, dedented)

```
body                                   #f3f6f5 · Outfit 15/1.5 · margin 0
└─ main.cl-card07-demo                 max-w 920 (content-box!) · pad clamp(32,6vw,64) 16 · color #10231f
   ├─ header.cl-card07-demo__head      mb 24
   │  ├─ h1.cl-card07-demo__title      "3 stays for 12 – 17 Oct"   (U+2013)
   │  └─ p.cl-card07-demo__sub         "2 guests · prices include taxes and cleaning fees"  (U+00B7)
   └─ div.cl-card07-list               grid · gap 20 · ONE column at every width
      └─ article.cl-card07 ×3          grid 5fr/7fr · radius 20 · border 1 #e2e9e7 · overflow hidden
         │                             container-type: inline-size
         ├─ div.cl-card07__media       relative · min-h 220 · bg #dbe5e2
         │  ├─ img.cl-card07__img      absolute inset-0 · cover · hover scale(1.04)
         │  └─ span.cl-card07__badge   absolute 14/14 · pill     (card 3 adds --deal; card 2 has none)
         └─ div.cl-card07__body        flex column · pad 22 26   (@container ≤600 → 18 18 20)
            ├─ p.cl-card07__place      pin + "Hvar, Croatia"     14/600 #0f766e
            ├─ h2.cl-card07__title     a.cl-card07__link  href="#"  (::after inset 0, z 1)
            ├─ p.cl-card07__rating     star 4.92 (128 reviews)   14.5
            ├─ ul.cl-card07__amenities aria-label="Amenities" · 3 chips
            └─ div.cl-card07__foot     mt auto · 1px rule + pt 16 · flex wrap · items-end · between
               ├─ p.cl-card07__price   strong €214 · "night" · span €1,180 total for 5 nights
               └─ span.cl-card07__cta  aria-hidden · "View stay" →  (decoration, not a control)
```

Census: **19 markup classes / 19 sheet selectors** (1 dead: `.cl-icon`), **6 SVGs per card** (18 total),
**3 anchors — all dead `#`**, **0 forms, 0 buttons, 3 focusable elements**, `h1` + 3 × `h2`,
`@media` ×2 (`max-width: 640` + `prefers-reduced-motion`) + `@container` ×1, **0 `@keyframes`**,
**0 `<script>`** in the file (a browser sees 10 host-injected ones: gtag `G-SEKJ4E9T4H`, Zaraz, `/s9cc/`,
`dataLayer`, Cloudflare beacon — none authored).

## 2 — CSS token reference block (verbatim values)

```css
/* container */
body            { margin: 0; background: #f3f6f5;
                  font-family: "Outfit", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.cl-card07-demo { max-width: 920px; margin: 0 auto; padding: clamp(32px, 6vw, 64px) 16px; color: #10231f; }
.cl-card07-demo__head  { margin-bottom: 24px; }
.cl-card07-demo__title { font-size: clamp(26px, 3.4vw, 34px); font-weight: 700;
                         letter-spacing: -.02em; line-height: 1.15; margin: 0; }
.cl-card07-demo__sub   { margin: 6px 0 0; color: #4a5c58; font-size: 16px; }
.cl-card07-list { display: grid; gap: 20px; }

/* card */
.cl-card07 { --accent: #0f766e; --ink: #10231f; --muted: #4a5c58; --line: #e2e9e7;
             position: relative; display: grid;
             grid-template-columns: minmax(0,5fr) minmax(0,7fr);
             overflow: hidden; border: 1px solid var(--line); border-radius: 20px;
             background: #fff; color: var(--ink); font-size: 15px; line-height: 1.5;
             container-type: inline-size;
             transition: box-shadow .3s ease, border-color .3s ease; }
.cl-card07:hover        { border-color: #cfdcd9;
                          box-shadow: 0 20px 40px -28px rgba(16, 35, 31, .45); }
.cl-card07:focus-within { box-shadow: 0 0 0 3px var(--accent); }

/* media */
.cl-card07__media { position: relative; min-height: 220px; background: #dbe5e2; }
.cl-card07__img   { position: absolute; inset: 0; width: 100%; height: 100%;
                    object-fit: cover; transition: transform .6s ease; }
.cl-card07:hover .cl-card07__img { transform: scale(1.04); }
.cl-card07__badge { position: absolute; top: 14px; left: 14px; padding: 5px 12px; border-radius: 999px;
                    background: #fff; color: var(--ink); font-size: 13px; font-weight: 600;
                    box-shadow: 0 4px 14px rgba(0,0,0,.15); }
.cl-card07__badge--deal { background: #be123c; color: #fff; }

/* body */
.cl-card07__body { display: flex; flex-direction: column; padding: 22px 26px 22px; }
.cl-card07__place { display: flex; align-items: center; gap: 6px; margin: 0;
                    color: var(--accent); font-size: 14px; font-weight: 600; }
.cl-card07__place svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2; }
.cl-card07__title { margin: 4px 0 6px; font-size: 22px; font-weight: 600;
                    letter-spacing: -.01em; line-height: 1.25; }
.cl-card07__link  { color: inherit; text-decoration: none; }
.cl-card07__link::after { content: ""; position: absolute; inset: 0; z-index: 1; }
.cl-card07__link:focus-visible { outline: none; }
.cl-card07__rating { display: flex; align-items: center; gap: 5px; margin: 0; font-size: 14.5px; }
.cl-card07__rating svg { width: 16px; height: 16px; fill: #10231f; }
.cl-card07__rating span { color: var(--muted); }
.cl-card07__amenities { display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0 18px; padding: 0;
                        list-style: none; }
.cl-card07__amenities li { display: inline-flex; align-items: center; gap: 6px; padding: 6px 11px;
                           border-radius: 10px; background: #f0f5f4; color: #26403a;
                           font-size: 13.5px; font-weight: 500; }
.cl-card07__amenities svg { width: 16px; height: 16px; fill: none; stroke: currentColor;
                            stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

/* foot + money */
.cl-card07__foot { display: flex; flex-wrap: wrap; align-items: flex-end;
                   justify-content: space-between; gap: 14px; margin-top: auto;
                   padding-top: 16px; border-top: 1px solid var(--line); }
.cl-card07__price { margin: 0; color: var(--muted); font-size: 15px; }
.cl-card07__price strong { color: var(--ink); font-size: 24px; font-weight: 700; letter-spacing: -.02em; }
.cl-card07__price span { display: block; font-size: 13.5px; }
.cl-card07__price del { color: #4a5c58; }

/* cta */
.cl-card07__cta { display: inline-flex; align-items: center; gap: 8px; padding: 11px 18px;
                  border-radius: 12px; background: var(--accent); color: #fff;
                  font-size: 15px; font-weight: 600;
                  transition: background-color .2s ease, gap .2s ease; }
.cl-card07__cta svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2;
                      stroke-linecap: round; stroke-linejoin: round; }
.cl-card07:hover .cl-card07__cta { gap: 12px; background: #115e59; }

/* queries */
@container (max-width: 600px) { .cl-card07__body { padding: 18px 18px 20px; } }
@media (max-width: 640px) {
  .cl-card07 { grid-template-columns: 1fr; }
  .cl-card07__media { min-height: 0; aspect-ratio: 16 / 10; }
}
@media (prefers-reduced-motion: reduce) {
  .cl-card07, .cl-card07__img, .cl-card07__cta { transition: none; }
  .cl-card07:hover .cl-card07__img { transform: none; }
}
```

## 3 — Section-by-section fidelity notes

**3.1 Head.** One `h1` and one `p`, `margin-bottom: 24px`, nothing on the right. Height is **65.09** at
≥ 1,000 (39.1 + 6 + 20), **55.89** from 330–764 (29.9 + 6 + 20 at `h1` 26 × 1.15) and **75.89** at 320 where
the sub-copy wraps to two lines. The `h1` is 34 px until 1,000 and then follows `3.4vw` down to 26.
Copy is fixed: "3 stays for 12 – 17 Oct" / "2 guests · prices include taxes and cleaning fees".

**3.2 List.** `display: grid; gap: 20px` — **one column, always**. This is the sibling pattern's opposite:
`card-06` was a 4-column `auto-fit` grid; here the cards are wide rows, so the only "columns" in the design
are inside the card. Card tops: 153.09 / 438.84 / 724.59 at 1440.

**3.3 The split.** `minmax(0,5fr) minmax(0,7fr)` of the **content box** (920 − 2 border = 918) → **382.5**
photo + **535.5** body. The `minmax(0, …)` is load-bearing: without the `0` minimum, a long unbroken word in
the body could force the track wider than its share. Do not replace it with `40% / 60%` (identical today,
fragile under `gap`).

**3.4 Media.** The panel's height comes from the **body**, not from an aspect ratio: `min-height: 220px` is a
floor that never binds at ≥ 641 (body content is 263.75), and `aspect-ratio: 16 / 10` **replaces** it only in
the stacked range. The `img` is `position: absolute; inset: 0` — so it never contributes height and the
`scale(1.04)` hover cannot reflow anything. `#dbe5e2` is the panel's own ground, visible while the JPEG
decodes: keep it, or a slow photo flashes white.

**3.5 Badges.** Three states, one component: `null` (render nothing at all), white pill, rose pill. Inset is
`14px` from the *border box*, so the visible offset inside the panel is **15 px** (14 + the 1 px card border).
Only the white variant is "lifted" (same shadow on both; the rose one is flat-looking because its fill is
dark). The deal pill is 5 px wider than the favourite one purely from its text.

**3.6 Body stack.** `__place` 21 (14 × 1.5) → `__title` 27.5 (22 × 1.25) → `__rating` 21.75 (14.5 × 1.5) →
`__amenities` 32.25 → `__foot` 73.25. The body's own content height is **263.75** = 22 + 21 + 4 + 27.5 + 6 +
21.75 + 16 + 32.25 + 18 + 73.25 − (the foot's `margin-top: auto` absorbs the remainder) — i.e. the stack with
margins sums to *less* than the media's 263.75 at 1440 and the auto margin tops it up. If you drop
`margin-top: auto`, the foot floats up and the card stops looking like a card.

**3.7 The link.** One `<a href="#">` per card, `::after { inset: 0; z-index: 1 }` — the overlay is above the
photo, the badge and the CTA, which is exactly why "clicking the photo opens the listing". The CTA must stay a
`span[aria-hidden]`: making it a `<button>` would add a second focus stop and a second accessible name, and
nesting an `<a>` inside the card's `<a>` is invalid HTML.

**3.8 Focus.** The visible ring is the card's `:focus-within { box-shadow: 0 0 0 3px #0f766e }`, and the link
sets `outline: none`. Measured with the pointer parked away and the `.3s` transition settled:
`box-shadow: rgb(15,118,110) 0px 0px 0px 3px`, link `outline-style: none`. **Read the settled value** — a
probe taken right after `.focus()` returns `rgba(0,0,0,0) 0 0 0 0` because the shadow is still interpolating
from none. This run lost ten minutes to exactly that.

**3.9 Money.** `strong` 24/700 on a **36 px** line (line-height 1.5, not 1.1) + total span 13.5 on 20.25 =
**56.25** block; the foot aligns it with the 44.5 CTA by `align-items: flex-end`. Card 3's `del` lives *inside*
the total's `<span>` so it shares the 13.5 px line — putting it on its own line would grow the foot and every
card below it.

**3.10 The container query.** `container-type: inline-size` on the card makes the card its own query context;
`@container (max-width: 600px)` therefore reads the **card's content box** (width − 2 px border). Bisected:
viewport **634** → card 602 → content 600 → **fires**; viewport **635** → content 601 → **does not**. In
Tailwind 4 that is `@container` on the card + `@max-[600px]:…` utilities on the body (arbitrary container
variants are `@max-[…]:`, not `max-[…]:` which would be a viewport query). Because the only visible effect is
8 px of padding, no screenshot diff will ever catch a mistake here — assert the `padding` string.

**3.11 Heights are per-card below 733.** The list is one column, so `align-items: stretch` has nothing to
stretch across: each `article` is its own row and sizes to its content. At 1,440 all three happen to be 265.75;
at 700 they are **333.5 / 333.5 / 293.25** (card 3's chips fit one row while 1–2's wrap); at 660 **333.5 /
333.5 / 392** (card 3's `del` pushes the total to two lines); at 390 **550 / 550 / 608.5**. Any `min-h`,
`flex-1` or `items-stretch` "fix" that equalises them is a design change.

**3.12 Band arithmetic.** `band = 2·padY + head + 24 + Σ cardH + 2·20` reproduces every measurement:
1,054.34 at 1,440 (128 + 65.09 + 24 + 797.25 + 40), 1,164.1 at 700 (84 + 55.89 + 24 + 960.25 + 40), 2,130.2 at
640 (76.8 + 55.89 + 24 + 1,933.5 + 40), 1,898.1 at 320 (64 + 75.89 + 24 + 1,694.25 + 40). The 640 → 641 cliff
(2,130.2 → 1,258.1) is the single most useful regression assertion in the spec.

## 4 — Screenshot analysis (`card-07.jpg`)

1,200 × 972 progressive JPEG, 90,992 B, white frame, **macOS browser chrome** with a `preview.colorlib.com`
URL bar. It is a **scaled render**: the card spans ≈ 710 px in the image against a real 920 → **scale ≈
0.772** (card height ≈ 205 vs 265.75), matching `card-06.jpg`'s framing. It shows the whole page (head + all
three cards) — no crop.

Visual read: cool off-white ground (sampled `#f4f6f5`; the truth is `#f3f6f5` — JPEG noise), white cards with a
hairline and a generous 20 px radius, **teal used only three ways** (location line, "View stay" pill, focus
ring), all colour coming from the three photographs (timber/pool, tropical, Santorini white-and-blue), one rose
deal badge as the only second accent, solid black star (not gold), hierarchy by weight/size alone
(22/600 title, 24/700 price, 13–16 else). The muted total line under each price is the only second-weight copy
in the body — drop it and the price block reads as a single number.

## 5 — Source → React adaptation table

| reference element                    | recreation                                                                    |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| `article.cl-card07` (grid 5/7)       | `StayCard` root: `grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] @container` + `group` |
| `__media` + `__img` + `__badge`      | `MediaPanel` inside `StayCard`; badge is conditional on `stay.badge`           |
| `h2 > a.__link` + `::after` overlay  | one `<a>`; Tailwind `after:absolute after:inset-0 after:z-[1]`                 |
| `ul.__amenities > li > svg`          | `stay.amenities.map(a => <li><Icon/>{a.label}</li>)` from a typed array of 3  |
| `strong €214` + `span` total + `del` | `rate`, `total`, `totalWas?` fields; `del` rendered inline in the total line   |
| `span.__cta[aria-hidden]`            | `<span aria-hidden="true">` — never a button                                   |
| `@container` / `@media 640`          | `@max-[600px]:` container variants / `max-[640px]:` viewport variants          |
| 8 × `@font-face` Outfit (2 binaries) | one Google Fonts `<link>` for real 400;500;600;700                            |
| `images/*.jpg` 700 × 560 (~100 KB)   | `picsum.photos/seed/lodgerow-{1,2,3}/700/560`, `loading="lazy" decoding="async"` |
| `href="#"` ×3                        | keep as `#` for a static recreation                                           |
| no footer                            | + one "Component Dock" line → `https://www.componentdock.com/`                 |

## 6 — Sibling comparison (`card` family, `card-01` … `card-07`)

| variant  | app          | ground     | layout device                                              | face                     | motion                        |
| -------- | ------------ | ---------- | ---------------------------------------------------------- | ------------------------ | ----------------------------- |
| card-01  | `nameplate`  | `#f6f3ee`  | 4 portrait profile cards (team roster)                     | serif                    | inert                         |
| card-02  | `marketrow`  | `#f1f1ef`  | 4 product cards, sale flags, stars, add-to-bag toggle      | DM Sans                  | toggle state                  |
| card-03  | `octavo`     | `#fbfaf7`  | 3 article cards, cover-photo category chips, author strip  | Fraunces (serif)         | inert                         |
| card-04  | `tierline`   | `#0c0f1d`  | dark 3-tier pricing, raised middle plan, gradient CTA      | Manrope                  | inert                         |
| card-05  | `plaudit`    | `#fffdf9`  | 3 quote cards, one inverted dark, clipped quotation glyph  | Newsreader + Inter       | inert                         |
| card-06  | `statline`   | `#eef1f6`  | 4 KPI cards, per-card accent, sparklines + gradient fill   | Inter                    | hover `.2s` + reduced-motion  |
| **card-07** | **`lodgerow`** | **`#f3f6f5`** | **3 wide photo-left stay cards, stretched link, chips, price block** | **Outfit** | **hover `.3s`/`.6s`/`.2s` + reduced-motion** |

What is genuinely new at `card-07`: the **first photography** in the family (a real `<img>`, not a gradient),
the **first stretched-link overlay**, the **first container query**, the **first per-card variable height**,
and the **first content that is a data record** (place / rating / 3 amenities / rate / total / was / badge)
rather than a fixed string set. Everything the family shares still applies: one band, one head, no nav, no
footer plate beyond the attribution line, and a palette that is *almost* stock Tailwind with two hand-mixed
neutrals.

## 7 — Traps (in the order they cost time this run)

1. **faux-bold again, different binary.** Eight `@font-face` names = **two** files: `*-latin.woff2` sha256
   `92684e4a…` ×4 and `*-latin-ext.woff2` `9e38b3f1…` ×4. Canvas `"€214 night Hvar"` at 30 px: reference
   **210 / 216 / 220 / 224** vs Google Outfit **210 / 214 / 219 / 220** — 400 identical (same Regular cut),
   500–700 synthesised, the fake 700 **1.8 % wider** than real. Prescribe real weights; never
   `font-synthesis: none`.
2. **`.focus()` right after a transition returns a transparent shadow.** The `:focus-within` ring is a
   `box-shadow` with `.3s` duration; probing immediately gives `rgba(0,0,0,0) 0 0 0 0` and looks like a missing
   ring. Wait ~400 ms (and move the pointer away first, or hover shadows mask it).
3. **`container-type: inline-size` reads the content box.** The query fires at viewport **634**, not 640: card
   width 602 − 2 px borders = 600 = the threshold. Two pixels of slop is enough to write a wrong spec.
4. **Card heights diverge below 733, and in both directions.** Card 3 is *tallest* at 660/390 and *shortest* at
   700. Measuring only card 1 (or only one width) produces a "constant height" claim that is false.
   `getClientRects().length` on the title's text node is the cheap line counter, and chip rows can be derived
   from the `<ul>`'s height / 32.25.
5. **The `920px` container is `content-box`, not a 920 px card.** The `all: revert` guard resets `box-sizing`,
   so `max-width: 920px; padding: … 16px` yields a **952 px** outer box and a **920 px** card. Writing
   `max-w-[920px] px-4` in Tailwind silently gives 888 / 369 px panels.
6. **The reference's price arithmetic is wrong on two of three cards.** 214 × 5 = 1,070 ≠ **1,180**;
   96 × 5 = 480 ≠ **520**; only card 3 is consistent (168 × 5 = 840, from a struck 990 = 198 × 5). Totals are
   copy — computing them "fixes" the page and changes two prices.
7. **The README's `js/snippet.js` claim is false for the sixth card in a row** (no `js/` dir, 404, 0 `<script>`) —
   but its `images/` claim is **true** here (3 JPEGs), so `card-06`'s "both claims are lies" note does not carry
   across. Check, don't inherit.
8. **A screenshot at 0.772 scale invites false measurements.** `card-07.jpg` is 1,200 × 972 with browser chrome;
   the card is ≈ 710 px there. Never derive a breakpoint, padding or type size from it.

## 8 — Ten-minute verification recipe

```bash
cd /tmp && mkdir -p card07 && cd card07
curl -4 -sS -o live.html  https://preview.colorlib.com/theme/bootstrap/card-07/index.html   # 200, 6,427 B
curl -4 -sS -o style.css  https://preview.colorlib.com/theme/bootstrap/card-07/css/style.css # 10,026 B
curl -4 -sS -o card-07.zip https://preview.colorlib.com/downloads/free/card-07.zip          # 497,801 B, 18 entries
python3 -c "import zipfile; zipfile.ZipFile('card-07.zip').extractall('out')"
sha256sum style.css out/card-07/css/style.css            # identical: cf06042c…
sha256sum out/card-07/fonts/*.woff2 | sort               # 8 names, 2 hashes
# geometry + bisect: drive Playwright from /root/free-templates-firebase/node_modules/playwright/index.mjs
#   (the Python package is not installed; networkidle hangs on this host → domcontentloaded + 800 ms)
#   assert: card 920×265.75 · media 382.5×263.75 · body pad 22/26 · chips 121/96/122
#   bisect: 640 stacks / 641 splits · container fires at 634 / not 635 · title wraps at 732 / not 733
```
