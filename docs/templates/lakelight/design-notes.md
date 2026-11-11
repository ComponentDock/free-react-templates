# Lakelight — design notes (ColorLib "Hero V12")

`apps/lakelight` recreates ColorLib **Hero V12**, the last variant of the `hero` snippet family: a holiday-rental
hero on a warm sand ground — a teal eyebrow behind a short orange rule, a three-line display headline whose last
word is an italic teal `<em>`, three inline proof points, a portrait lake photograph with a 120 px bottom-left
corner and a floating white stay card, and a five-column white search panel that rides 64 px up over the picture.

Everything below was measured on **2026-11-11** against the live preview, not read off the stylesheet alone.
The spec (`openspec/specs/template-lakelight/spec.md`) is the contract; this file is the working notebook.

## 1. What the page is

One page, one `<section>`, one `<h1>`, zero `<h2>`, one `<form>`, three `<input>` + one `<select>`, **no footer**,
**no inner page**, **six anchors and all six dead `#`**. The reference is a *hero*, so it is short by design: at
1440 × 900 the document is exactly the viewport (content floor **781**).

It is also the family's only **light** variant on a **warm paper** ground, and the only one whose primary device is
a **real booking form** rather than a CTA button — every earlier hero either linked out or opened a dialog.

## 2. Reference papers

| Thing | Value |
| --- | --- |
| Preview | `https://preview.colorlib.com/theme/bootstrap/hero-12/` — **200, 5,733 B**, `<title>` `Hero V12 \| Colorlib` |
| Slug-only path | `theme/hero-12/` **404 (9 B)**; `theme/bb/hero-12/` **404 (9 B)** — `bootstrap/` is the only live prefix |
| ColourLib page | `https://colorlib.com/wp/template/hero-12/` — **200, 113,608 B**, `h1` "Hero V12", `datePublished` 2026-09-25T15:09:16+00:00, download-size claim **364 KB** (archive **372,436 B**) |
| Stylesheet | `css/style.css?v=1a961d00` — **15,887 B**, sha256 `b48ef8abb85645d141f71bb7cdd0bf35f2ff6f06ce1562db53059d896c51a137` |
| Script | `js/snippet.js?v=3b678d27` — **3,555 B**, sha256 `e7580a322d7cfc111e48f6154f0a9d60544d59310924b6444de9f84bdd28bad2` |
| Archive | `downloads/free/hero-12.zip` — **372,436 B**; CSS + JS **hash-identical** to the live files → *live preview verified; the archive is its un-versioned twin*. `index.html` differs only in `<head>` (5,493 vs 5,733 B: no `?v=`, no `fetchpriority`/`decoding`, no `dns-prefetch`, no `robots`) |
| Fonts | 10 `@font-face` over **2** binaries — `urbanist-400-latin.woff2` 27,812 B (sha256 `ce6e0dd8…`) and `urbanist-400-latin-ext.woff2` 16,464 B (`2abe1ed2…`), **the same two for all five weights** → one **variable** cut |
| Photography | `images/lake.jpg` — **900 × 960** JPEG, 142,286 B; displayed **603.44 × 522**, `object-fit: cover` |
| Screenshot | `hero-12.jpg` — **200, 62,666 B**, **1200 × 972**, **AVIF behind a `.jpg`**; macOS browser mock-up, page inside at ≈1104 px |

`unzip` is absent in this container — the archive was extracted with `python3 -c "import zipfile;
zipfile.ZipFile('h12.zip').extractall('out')"`, and the AVIF was converted with `PIL`.

## 3. DOM skeleton (from the live DOM, class names as-is)

```
body
└─ div.cl-hero12                                  flex column, min-height:100vh, sand
   ├─ header.cl-hero12__bar                       relative, z-index 5
   │  └─ div.cl-hero12__bar-inner                 flex, gap 36, max-width 1320, padding 20/48
   │     ├─ a.cl-hero12__logo                     inline-flex, gap 10, 23px/800
   │     │  ├─ svg 30×30                           rect rx=9 #0e5c55 + two-peak path #f7efe3
   │     │  └─ "alpwise"
   │     ├─ button.cl-hero12__menu-btn            44×44, radius 12, hidden >860; two svgs (open/close)
   │     └─ nav.cl-hero12__nav#cl-hero12-nav       flex:1, space-between, gap 20
   │        ├─ ul.cl-hero12__links                 flex, gap 4
   │        │  └─ li × 4 > a.cl-hero12__link       padding 8/14, radius 10; [aria-current] on "Stays"
   │        └─ a.cl-hero12__login                  padding 10/20, radius 999, 1px ink border
   └─ main.cl-hero12__main                         flex:1, align-items:center
      └─ section.cl-hero12__hero                   grid 1fr/1.1fr, gap 72, padding 32/48/64
         ├─ div.cl-hero12__copy                    grid-area copy, align-self center, pb 72
         │  ├─ p.cl-hero12__eyebrow                inline-flex, gap 10; ::before = 28×2 orange
         │  ├─ h1.cl-hero12__title                 clamp(2.7rem,1.3rem+5vw,5.6rem)/.95, 800, -.045em
         │  │  └─ em                              teal, 700, italic
         │  ├─ p.cl-hero12__sub                    max-width 30em, muted
         │  └─ ul.cl-hero12__proof                 flex wrap, gap 10/26, margin-top 26 (!important)
         │     └─ li × 3 > strong + text
         ├─ figure.cl-hero12__media                grid-area media, relative
         │  ├─ img.cl-hero12__img                  900×960 attrs, height clamp(380,58vh,600), radius 32/32/32/120
         │  └─ figcaption.cl-hero12__card          absolute top 28 / right 28, radius 18, white .95
         │     ├─ span.cl-hero12__card-top         flex space-between: name + span.rating (★ 4.96)
         │     ├─ span.cl-hero12__card-place       "Braies, South Tyrol · sleeps 4"
         │     └─ span.cl-hero12__card-price       strong €186 + "/ night"
         └─ form.cl-hero12__search                 grid 1.5fr 1fr 1fr 1fr auto, padding 10, radius 24,
            │                                      margin -64 0 0 clamp(0,6vw,96)
            ├─ div.cl-hero12__field--where         > label.cl-hero12__label + input + datalist(5)
            ├─ div.cl-hero12__field                > label + input[type=date]   (check in)
            ├─ div.cl-hero12__field                > label + input[type=date]   (check out)
            ├─ div.cl-hero12__field                > label + select (6 options, 2 selected)
            ├─ button.cl-hero12__submit            min-height 64, radius 18, orange, svg + "Search"
            └─ p.cl-hero12__status                 grid-column 1/-1, role="status", teal
```

`script src="js/snippet.js"` last. Nothing else on the page — no icon font, no third-party request.

## 4. CSS token block (verbatim shape to port)

```css
body { margin: 0; background: #f7efe3;
       font-family: "Urbanist", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }

.cl-hero12 {
  --cl-hero12-sand:   #f7efe3;
  --cl-hero12-ink:    #102a27;
  --cl-hero12-muted:  #4b5f5b;
  --cl-hero12-teal:   #0e5c55;
  --cl-hero12-orange: #e0703a;
  --cl-hero12-line:   #e4d8c6;
  --cl-hero12-gutter: clamp(16px, 4vw, 48px);
  display: flex; flex-direction: column;
  min-height: 100vh; background: var(--cl-hero12-sand); color: var(--cl-hero12-ink);
  font-size: 16px; line-height: 1.55;
}
.cl-hero12 a  { color: inherit; text-decoration: none; }        /* 0,1,1 — beats every single-class link colour */
.cl-hero12 ul { margin: 0; padding: 0; list-style: none; }      /* 0,1,1 — beats .__proof (needs !important) */
.cl-hero12 a:focus-visible,
.cl-hero12 button:focus-visible { outline: 3px solid var(--cl-hero12-orange); outline-offset: 3px; }
```

Type scale actually rendered (1440): headline **89.6 / 85.12 / 800 / -4.032px**, sub **19.52 / 30.26**, eyebrow
**15 / 700**, nav link **16 / 600**, `Log in` **16 / 700**, card title **15.5 / 700**, card place **14**, card price
**18 / 700**, label **13 / 700 / .04em uppercase**, control **16.5 / 500**, submit **17 / 800**, status **16 / 600**,
proof **15** with a **17 / 700** figure, wordmark **23 / 800 / -.03em**.

## 5. Screenshot read (`hero-12.jpg`, 1200 × 972, AVIF behind a `.jpg`)

- **Frame is a macOS browser mock-up** on a near-white ground: traffic lights, a `preview.colorlib.com` URL pill, a
  soft drop shadow, rounded window corners. The page inside starts at ≈ x 48 and is ≈ 1104 px wide. **Never adopt
  the frame** — the screenshot's white margins are not part of the design.
- The **copy column is left, the photograph right**, and the photograph's top edge aligns with the eyebrow, not
  with the headline. There is a lot of **vertical breathing room below the proof row** — that is the `padding-bottom:
  72` on the copy block, which is also what gives the figure its height.
- The **photograph is a turquoise alpine lake** (Braies) with a wooden rowing boat and forested peaks; the huge
  **120 px bottom-left radius** is the page's signature shape, and the other three corners are only 32.
- The **stay card** is a **white, 18-radius, softly shadowed** block pinned inside the photo's top-right corner,
  three tight rows: name + star rating, place + sleeps, price. Its shadow is warm (`rgba(16,42,39,.45)`), not grey.
- The **search panel is white and floats**: it overlaps the photo's bottom edge, sits **well in from the left**
  (so its left edge never lines up with the copy), and puts a **big orange `Search` button** at the far right. The
  four fields are separated by **hairline rules that vanish on hover/focus** — in the screenshot the rules are
  visible, so the resting state is the one to match.
- The **`Log in` pill** is a thin ink outline at the far right of the bar; the nav links are ordinary text (ink at
  rest) with the current one teal.
- The screenshot **does not show the page's foot** — everything below the search panel (the sand below the panel and
  the port's footer) is out of frame, so do not infer a band or a divider there.

## 6. Section-by-section fidelity notes

### 6.1 Shell
`min-height: 100vh`, flex column, `#f7efe3`. `box-sizing: border-box` is set with `*` on the shell subtree. No
`overflow: hidden` anywhere — and none is needed: `scrollWidth === clientWidth` at 320, 390, 520, 700, 900, 1080,
1280 and 1440.

The reference's first 40 CSS lines are a **`:where(html) … { all: revert }`** reset that neutralises a host page's
Bootstrap reboot (it re-declares `[hidden]` at one class so hidden elements stay hidden). **None of it is ported** —
a Tailwind 4 app already has a sane preflight, and copying the revert block would fight it.

### 6.2 Header bar
`padding: 20px 48px`, `gap: 36`, `max-width: 1320`, transparent. Bar height **86.8** = 40 padding + the tallest
child (the `Log in` pill at **46.8**). The links row is only **40.8** tall, so the pill — not the links — sets the
bar's height; that is why the document loses **3 px** (979 → 976) at 860 when the pill and links are replaced by a
44 px button and the bar settles at **84**.

The menu button is `display: none` above 860; the sheet also carries a `:not(.is-enhanced)` fallback that wraps the
bar when JavaScript is off. **Do not port the fallback** — React always renders the button, so the `is-enhanced`
state is unconditional.

### 6.3 Copy column
`align-self: center` inside the grid row plus `padding-bottom: 72`: the content is **496.34** tall, the box
**568.34**. The eyebrow is inline-level with a `::before` rule, so its box is **23.25** (the 15 px line box), and it
does **not** sit flush with the headline — the `h1`'s `margin-top: 16` is measured from the eyebrow's box.

The headline is **3 lines at 1440** with only **434.72** of **548.56** used by its widest line; the block is ragged
right, by design. The `<em>` is teal at weight **700** (one step below the h1's 800) and italic.

The proof row's `margin-top: 26` is the `!important` in the source: the sheet's `.cl-hero12 ul { margin: 0 }`
(0,1,1) out-specifies `.cl-hero12__proof` (0,1,0). In the port, `mt-[26px]` on the `ul` is enough.

### 6.4 Photograph + stay card
The `<figure>` is a grid item with `align-self: stretch`, so it is **568.34** tall while its `<img>` is
`clamp(380px, 58vh, 600px)` = **522** at vh 900. The card is `position: absolute; top: 28; right: 28` against the
**figure**, which happens to coincide with the image's top because both start at y 178.38. At 1440 × 600 the image
hits its **380** floor and **124 px of sand** opens between the photo's foot and the panel — a real, accepted quirk.

`width`/`height` attributes are **900 × 960** (the true aspect) even though the box is 603.44 × 522: the attributes
reserve the right ratio before the image loads, and `object-fit: cover` does the cropping.

At 520 the card becomes a bar: `left: 14; right: 14; top: 14; min-width: 0`, so it is `img width − 28`
(**450.41** at 520, **260** at 320).

### 6.5 Search panel
`grid-template-columns: 1.5fr 1fr 1fr 1fr auto` → **320.86 / 213.92 / 213.91 / 213.91 / 155.02** at 1440 (the
`auto` column is the submit plus its 8 px `margin-left`). Rows are **73.7** tall because the fields are
`padding: 10` + label **20.14** + control **29.56** (or **31** for a native date input, which is why the two date
fields measure 2 px taller at ≤520).

`margin: -64px 0 0 clamp(0px, 6vw, 96px)` is what makes the panel overlap the photo (64) and sit in from the left
(86.4 at 1440). Note the **top margin is negative but the bottom is 0**: the panel is in flow, so the hero's bottom
padding (64) is measured from the panel's foot, not the photo's.

Field states: `:hover` → `#faf6ef`; `:focus-within` → `#f1f8f6` + `inset 0 0 0 2px teal`; the input itself has
`outline: none` **always** (focus lives on the wrapper). The separators are `::before` on `.field + .field`, and
both neighbours' states hide them — a pure-CSS detail worth keeping.

`select` needs the `document.fonts.ready` re-measure trick (toggle `display` once) because Chrome sizes a select on
the fallback font; React's `<select>` is affected identically, so keep it or accept a 1–2 px width drift.

### 6.6 Status line
`role="status"` exists, `grid-column: 1 / -1`, `padding: 0 18px`, **0 tall** while empty. On the first submit it
becomes **40.8** tall and the hero absorbs it (doc stays **900** at 1440). It is the only place the teal accent
appears below the fold of the panel.

### 6.7 Motion
Four `transition` declarations and **zero `@keyframes`**: nav links (`.2s` colour + wash), the `Log in` pill
(`.2s`), the fields' ground (`.2s`), the submit's fill + transform (`.2s` / `.15s`). `prefers-reduced-motion` wipes
all of them with `!important`. Nothing moves on its own — no carousel, no float, no ticker.

## 7. Source → React adaptation table

| Reference | Port |
| --- | --- |
| `div.cl-hero12` (flex column, `min-height: 100vh`) | `<div className="flex min-h-screen flex-col bg-sand text-ink text-[16px] leading-[1.55]">` |
| `header.cl-hero12__bar` + `is-enhanced` / `is-open` | `<header>` + a `menuOpen` state; no `is-enhanced` (React always renders the button) |
| `button.cl-hero12__menu-btn` (two swapped SVGs) | one `<button aria-expanded aria-controls>` with `Menu`/`X` from `lucide-react` |
| `nav.cl-hero12__nav` absolute panel ≤860 | same element, `max-[860px]:absolute max-[860px]:top-[calc(100%-4px)] …` |
| four `href="#"` links | `#stays`, `https://www.componentdock.com/`, `#proof`, `https://www.componentdock.com/` |
| `p.cl-hero12__eyebrow::before` 28×2 orange | `<p class="inline-flex items-center gap-[10px] … before:h-[2px] before:w-[28px] before:bg-orange">` |
| `h1` + `<em>` | `<h1>` with `<em className="italic font-bold text-teal">` |
| `ul.cl-hero12__proof` | `<ul className="mt-[26px] flex flex-wrap gap-x-[26px] gap-y-[10px]">` (no `!important`) |
| `figure` + `img` + `figcaption` card | `<figure className="relative">` + `<img>` + `<figcaption className="absolute right-[28px] top-[28px] …">` |
| `form.cl-hero12__search` grid | `<form className="grid grid-cols-[1.5fr_1fr_1fr_1fr_auto] gap-0 rounded-[24px] bg-white p-[10px] …">` |
| `input[list=…]` + `<datalist>` | same, with a 5-option `datalist` of invented places |
| `js` `iso()` / `addDays()` / `syncOut()` / submit | port **verbatim in behaviour**: `useState` for the four values, `useEffect`-free derivation of `out.min`, a `statusMessage` state |
| stale status text on an invalid submit | **fixed**: the submit handler sets a message for every attempt |
| `.cl-hero12 a { color: inherit }` accident | paint `text-muted` on resting links deliberately |
| 10 `@font-face` (2 variable binaries) | one Google `<link>`: `Urbanist:ital,wght@0,400..800;1,400..800` |
| `lake.jpg` (900 × 960) | `https://picsum.photos/seed/lakelight-1/900/960` |

## 8. Sibling comparison (the 12-variant `hero` family)

| Variant | Name | What is recorded about it | Height at 1440 × 900 |
| --- | --- | --- | --- |
| 01 | proscenium | dark shell, a `perspective(1600px) rotateY(-6deg) rotateX(2deg)` dashboard mock | exactly 900 |
| 05 | epistle | fixed-height flex card whose artwork collapses at narrow widths | **929** (the family's tallest) |
| 07 | soapbox | a `repeat(4, 1fr)` four-tile band (as `minmax(auto,1fr)`, so the tracks are unequal) | — |
| 08 | trattoria | full-bleed photo under a two-axis wash, hero hung from the viewport foot | — |
| 09 | belvedere | Bricolage Grotesque, a 4:5 arch frame, `overflow: hidden` root | — |
| 10 | virga | stat band; an animated glow whose rect drifts 910 → 950 | — |
| 11 | alpenglow | Figtree, a CSS-drawn sunset over panning ranges, a film `<dialog>` | exactly 900 |
| **12** | **lakelight** | **warm sand `#f7efe3`, Urbanist roman + real italic, a five-field booking panel over a portrait photo** | **exactly 900** |

What makes 12 different from its siblings, in one line each:

- **It is the only light, warm-ground hero** — every other variant is dark, photographic or gradient-driven.
- **It is the only one with a real form as the primary device** (11 opens a dialog; 1–10 are links and buttons).
- **It is the only one whose headline's accent word is a real `<em>`** rather than a coloured span.
- **It is the only one with a two-radius photograph** (32 / 120) — 09 uses a symmetric arch, 08 a full-bleed wash.
- Its **line count is non-monotonic in a way none of the others are**: the 900 flip *reduces* the headline from
  three lines to one because the copy column doubles in width at the same instant.

## 9. Traps (measured, not inferred)

1. **The base link rule wins.** `.cl-hero12 a { color: inherit }` (0,1,1) beats `.cl-hero12__link`'s muted
   (0,1,0) → every non-current nav link renders **ink**. Probe a *non-current* link ("Experiences" =
   `rgb(16,42,39)`); the `aria-current` one is teal legitimately and hides the bug.
2. **`ul { margin: 0 }` wins too** (0,1,1 vs 0,1,0) — the source needs `margin-top: 26px !important` on the proof row.
3. **`1.5px` borders compute to 1 px** (`Log in`, menu button). Do not chase it.
4. **The headline's line count is non-monotonic**: **3** at ≥901, **1** at 900–736, **2** at 735–381, **3** at ≤380.
   The 900 flip *removes* two breaks; below it they come back.
5. **The figure is taller than its image.** `align-self: stretch` makes the `<figure>` 568.34 while the `<img>` is
   522 (`58vh`), so the card's `top: 28` is measured from the figure. At 1440 × 600 the image drops to its **380**
   floor and 124 px of sand appears between the photo's foot and the panel.
6. **The image height ignores the viewport below 900** — it is a hard `360` (and `300` at ≤520), not a `vh` clamp.
7. **`main { align-items: center }` is what places the hero**: y **146.38**, not `86.8 + 32`.
8. **The panel is in flow with a negative top margin** (`-64`), and its left offset is `clamp(0, 6vw, 96)` — at
   1080 the offset goes to **0** in the same rule that makes the grid 2 × 2, so the panel's left edge jumps 86 px.
9. **Field heights differ by 2 px**: text/select controls are **29.56**, native date inputs **31**, so at ≤520 the
   two date fields are 72.94 while `Where`/`Guests` are 70.94. `align-items: stretch` on the grid hides it at 1440.
10. **Placeholder contrast fails on the tinted grounds** — `#6a7874` is 4.61 on white, **4.17** on `#f8f3ea` and
    **4.28** on `#faf6ef`. Darken it.
11. **The focus ring is orange on sand = 2.81 : 1** (needs 3). It passes on the white panel (3.21). Darken the ring
    to a token that clears 3 : 1 on **both** grounds.
12. **The status message goes stale**: after an invalid submit (`where` cleared, or `out` earlier than `min`) the
    previous sentence stays on screen — verified both ways. Clear/replace it in the port.
13. **Dates must be computed at `T12:00:00`** and differenced with `Math.round`, or a DST boundary moves a default
    or a "nights" count. The message formats with **en-GB** `d MMM` and prints **U+2026**.
14. **`select` sizing depends on the font** — re-measure once after `document.fonts.ready`.
15. **No `@keyframes` anywhere**; the whole motion budget is four `transition` rules plus the reduced-motion reset.
    Do not add a reveal animation to "match the family" — this variant has none.
16. **The URL ladder**: `theme/hero-12/` 404s; only `theme/bootstrap/hero-12/` is live. Never write "preview
    unreachable" off the slug-only probe.

## Implementation run (2026-11-11)

The shipped app is `apps/lakelight` (PR: feat: Lakelight — holiday-rental lake hero). It reproduced the
**live** preview's 1440 × 900 geometry exactly — bar 1320 × 86.8, hero 1320 × 663.81 at (60, 161.48),
copy 548.56 × 538.11, `h1` 548.56 × 255.33 in three lines, media 603.44 × 538.11, panel 1137.61 × 93.7 at
(194.39, 667.59) — after re-measuring the preview, which showed a **two-line** sub (60.47) where this
folder's notes recorded three lines. The full table of deltas, the copy-driven widths and the five
deliberate divergences live in `openspec/specs/template-lakelight/spec.md` → "Port notes".
