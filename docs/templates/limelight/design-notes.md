# Limelight — design notes (ColorLib Pricing Table V04, `pricing-table-04`)

Companion to `openspec/specs/template-limelight/spec.md`. This file carries the raw material: paper facts, the DOM
skeleton, the shipped CSS, the screenshot read, the copy, and the per-section fidelity notes with the *reason* behind
each number. Written 2026-11-11.

## 1. Paper facts (verified 2026-11-11)

| Item | Value |
| --- | --- |
| preview | `theme/bootstrap/pricing-table-04/` **200, 4,686 B** (slug-only **404 9 B**; the `bootstrap/` prefix is the only live path in this family) |
| stylesheet | `css/style.css?v=ed8c81c2`, **10,976 B**, sha256 `0990c056e4e37cf44fdb0585fced837f2dab0b059b6779e3ee9ce26f51148da6` |
| script | **none** — the document has no `<script>`; the ten a browser sees (GTM, Cloudflare Zaraz, insights beacon) are host-injected |
| archive | `downloads/free/pricing-table-04.zip`, **172,961 B** (ColorLib's claim: 169 KB = 168.9 KiB ✓) |
| archive twinship | `css/style.css` hash **identical** to live → the zip is the un-versioned twin |
| `index.html` | archive **4,494 B** sha256 `637ee3700777…` vs live **4,686 B** sha256 `f794bd794fb1…`; the 192 B difference is `<head>` only (noindex meta, cdnjs dns-prefetch, `fetchpriority`, `?v=`) — `<body>` byte-identical |
| screenshot | `pricing-table-04.jpg` **200, 47,683 B, 1200 × 972**, **AVIF behind `.jpg`** (`file` → ISO Media, AVIF); `…-template.jpg` / `…-free-template.jpg` / `…-featured.jpg` all **404** |
| ColorLib page | **114,247 B**, `datePublished` 2026-09-25T15:12:45, `h1` "Pricing Table V04" |
| fonts | 8 woff2 = **2 binaries**: latin **22,320 B** sha256 `a0d054c4af55…`, latin-ext **18,924 B** sha256 `054c266fbb44…`; each repeated for 400 / 500 / **600** / 700 → **one variable binary per subset** |
| declared weights | **6** `@font-face` (400, 500, 700 × latin / latin-ext) — the shipped **600** file is never declared |
| weight shape (live) | at 60 px `Streamer` inks **2,962 / 3,746 / 4,469** px at 400 / 500 / 700 → the axis is live, monotone |
| custom-face name | `CSS.getPlatformFontsForNode` → `SpaceGrotesk-Light`, `custom=true` (the variable default instance is *Light*; not a weight bug) |
| CSS census | **51** rule blocks, **5** custom props, **2** media queries (`max-width: 900px`, `prefers-reduced-motion`), **6** `@font-face`, **0** `@keyframes`, **3** `transition` declarations, **7** `box-shadow`, **2** `text-shadow`, **18** hex colours + **22** rgba values |

**The archive's `README.md` (1,278 B) advertises two things it does not ship**: `js/snippet.js` ("the behaviour, in
plain JavaScript") and an `images/` folder. The zip contains only `index.html`, `css/style.css`, `fonts/` and the README
— there is **no** `js/` and **no** `images/`, and the live document has no script of its own. Fifth variant in a row
whose README lists phantom files; do not go looking.

**ColorLib's own meta description is wrong for this page** — it is copied from variant 03 and promises "a plan
comparison built as a real table with a caption, column and row headers, and headers attributes on every cell". This
page has no `<table>` at all. The listing copy is not a design reference; the DOM is.

## 2. DOM skeleton (verbatim shape)

```html
<main class="cl-pricing04-demo">
  <section class="cl-pricing04" aria-labelledby="cl-pricing04-title">
    <header class="cl-pricing04__head">
      <p class="cl-pricing04__eyebrow"><span class="cl-pricing04__dot" aria-hidden="true"></span> Glitchcast for creators</p>
      <h1 class="cl-pricing04__title" id="cl-pricing04-title">Level up your <span class="cl-pricing04__glow">stream</span></h1>
      <p class="cl-pricing04__lede">Overlays, instant clips and multistreaming in one app. …</p>
    </header>

    <div class="cl-pricing04__grid">
      <article class="cl-pricing04__plan" aria-labelledby="cl-pricing04-rookie">
        <div class="cl-pricing04__icon cl-pricing04__icon--cyan" aria-hidden="true"><svg …></svg></div>
        <h2 class="cl-pricing04__name" id="cl-pricing04-rookie">Rookie</h2>
        <p class="cl-pricing04__desc">Everything you need for your first streams.</p>
        <p class="cl-pricing04__price"><span class="cl-pricing04__amount">Free</span></p>
        <ul class="cl-pricing04__list"><li>…</li> ×4</ul>
        <a class="cl-pricing04__cta" href="#">Download free</a>
      </article>

      <article class="cl-pricing04__plan cl-pricing04__plan--pop" aria-labelledby="cl-pricing04-streamer">
        <p class="cl-pricing04__flag">Creator favourite</p>
        <div class="cl-pricing04__icon cl-pricing04__icon--pink" aria-hidden="true"><svg …></svg></div>
        <h2 class="cl-pricing04__name" id="cl-pricing04-streamer">Streamer</h2>
        …
        <p class="cl-pricing04__price"><span class="cl-pricing04__amount">$9</span><span class="cl-pricing04__per">/ month</span></p>
        <ul class="cl-pricing04__list"><li>…</li> ×5</ul>
        <a class="cl-pricing04__cta cl-pricing04__cta--glow" href="#">Go Streamer</a>
      </article>

      <article class="cl-pricing04__plan" aria-labelledby="cl-pricing04-legend"> … Legend … </article>
    </div>

    <p class="cl-pricing04__foot">Cancel any time. Students get Streamer free for a year with a valid school email.</p>
  </section>
</main>
```

Three icons, all `viewBox="0 0 24 24" width="24" height="24"`, `fill="none" stroke="currentColor" stroke-width="1.8"
stroke-linecap="round" stroke-linejoin="round"`: a **gamepad** (Rookie), a **lightning bolt**
(`M13 2L4 14h7l-1 8 9-12h-7z`, Streamer) and a **crown** (`M3 7l4.5 4L12 4l4.5 7L21 7l-2 12H5z`, Legend).

## 3. The shipped CSS, abridged

```css
body { margin: 0; background: #08060f; font-family: "Space Grotesk", system-ui, … }

.cl-pricing04-demo {                    /* the five-layer ground */
  padding: clamp(48px, 8vw, 104px) 16px;
  background: radial-gradient(38% 30% at 18% 8%, rgba(236,72,153,.22), transparent 70%),
              radial-gradient(34% 30% at 85% 20%, rgba(34,211,238,.18), transparent 70%),
              linear-gradient(rgba(148,115,255,.07) 1px, transparent 1px) 0 0 / 44px 44px,
              linear-gradient(90deg, rgba(148,115,255,.07) 1px, transparent 1px) 0 0 / 44px 44px,
              #08060f;
}

.cl-pricing04 {
  --cl-pricing04-pink: #f472b6;  --cl-pricing04-cyan: #22d3ee;  --cl-pricing04-violet: #a78bfa;
  --cl-pricing04-ink: #f5f3ff;   --cl-pricing04-muted: #b9b3d1;
  max-width: 1120px; margin: 0 auto; color: var(--cl-pricing04-ink);
  font-size: 15px; line-height: 1.55;
}

.cl-pricing04__head   { max-width: 640px; margin: 0 auto 56px; text-align: center; }
.cl-pricing04__eyebrow{ display: inline-flex; align-items: center; gap: 8px; margin: 0; padding: 6px 14px;
                        border: 1px solid rgba(167,139,250,.35); border-radius: 999px;
                        background: rgba(167,139,250,.08); color: #ddd6fe; font-size: 13px; font-weight: 500; }
.cl-pricing04__dot    { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 10px #4ade80; }
.cl-pricing04__title  { margin: 18px 0 14px; font-size: clamp(34px, 5.6vw, 60px); font-weight: 700;
                        letter-spacing: -.03em; line-height: 1.02; }
.cl-pricing04__glow   { color: var(--cl-pricing04-cyan); text-shadow: 0 0 24px rgba(34,211,238,.55); }
.cl-pricing04__lede   { margin: 0; color: var(--cl-pricing04-muted); font-size: 16.5px; text-wrap: balance; }

.cl-pricing04__grid   { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 22px; align-items: stretch; }

.cl-pricing04__plan   { position: relative; display: flex; flex-direction: column; padding: 30px 28px 28px;
                        border: 1px solid rgba(167,139,250,.2); border-radius: 20px;
                        background: linear-gradient(180deg, rgba(30,22,52,.9), rgba(18,14,32,.95));
                        transition: transform .25s ease, border-color .25s ease; }
.cl-pricing04__plan:hover { transform: translateY(-4px); border-color: rgba(167,139,250,.45); }

.cl-pricing04__plan--pop {                      /* gradient border = transparent border + 2 layers */
  border: 1px solid transparent;
  background: linear-gradient(180deg, #221538, #140f24) padding-box,
              linear-gradient(135deg, #f472b6, #a78bfa 50%, #22d3ee) border-box;
  box-shadow: 0 0 0 1px rgba(244,114,182,.15), 0 30px 80px -30px rgba(244,114,182,.6), 0 0 60px -20px rgba(34,211,238,.4);
}
.cl-pricing04__plan--pop:hover { border-color: transparent; }

.cl-pricing04__flag   { position: absolute; top: 28px; right: 24px; margin: 0; padding: 4px 10px; border-radius: 6px;
                        background: linear-gradient(90deg, #f472b6, #c084fc); color: #1a0b1f;
                        font-size: 12px; font-weight: 700; letter-spacing: .02em; text-transform: uppercase; }

.cl-pricing04__icon   { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 12px; }
.cl-pricing04__icon--cyan   { background: rgba(34,211,238,.12);  color: var(--cl-pricing04-cyan);   box-shadow: inset 0 0 0 1px rgba(34,211,238,.35); }
.cl-pricing04__icon--pink   { background: rgba(244,114,182,.14); color: var(--cl-pricing04-pink);   box-shadow: inset 0 0 0 1px rgba(244,114,182,.4), 0 0 24px -4px rgba(244,114,182,.6); }
.cl-pricing04__icon--violet { background: rgba(167,139,250,.14); color: var(--cl-pricing04-violet); box-shadow: inset 0 0 0 1px rgba(167,139,250,.4); }

.cl-pricing04__name   { margin: 20px 0 4px; font-size: 22px; font-weight: 700; }
.cl-pricing04__desc   { margin: 0; color: var(--cl-pricing04-muted); font-size: 14.5px; }

.cl-pricing04__price  { display: flex; align-items: baseline; gap: 6px; margin: 22px 0; padding-bottom: 22px;
                        border-bottom: 1px dashed rgba(167,139,250,.25); }
.cl-pricing04__amount { font-size: 50px; font-weight: 700; letter-spacing: -.04em; line-height: 1; }
.cl-pricing04__plan--pop .cl-pricing04__amount { text-shadow: 0 0 28px rgba(244,114,182,.6); }
.cl-pricing04__per    { color: var(--cl-pricing04-muted); }

.cl-pricing04__list   { flex: 1; margin: 0 0 28px; padding: 0; list-style: none; }
.cl-pricing04__list li{ position: relative; padding: 6px 0 6px 28px; font-size: 14.5px; }
.cl-pricing04__list li::before {
  content: ""; position: absolute; top: 12px; left: 2px; width: 12px; height: 12px;
  background: url("data:image/svg+xml,…<path d='M6 0l1.6 4.4L12 6 7.6 7.6 6 12 4.4 7.6 0 6l4.4-1.6z' fill='%2322d3ee'/>…") center / contain no-repeat;
}
.cl-pricing04__plan--pop .cl-pricing04__list li::before { background-image: url("…fill='%23f472b6'…"); }

.cl-pricing04__cta    { display: block; padding: 13px 18px; border: 1px solid rgba(167,139,250,.45); border-radius: 12px;
                        color: var(--cl-pricing04-ink); font-weight: 700; text-align: center; text-decoration: none;
                        transition: background-color .2s ease, box-shadow .2s ease; }
.cl-pricing04__cta:hover { background: rgba(167,139,250,.14); }
.cl-pricing04__cta--glow { border: 0; background: linear-gradient(90deg, #f9a8d4, #c4b5fd 55%, #67e8f9); color: #16091f;
                           box-shadow: 0 10px 30px -10px rgba(244,114,182,.8); }
.cl-pricing04__cta--glow:hover { background: linear-gradient(90deg, #fbcfe8, #ddd6fe 55%, #a5f3fc);
                                 box-shadow: 0 12px 36px -8px rgba(34,211,238,.7); }
.cl-pricing04__cta:focus-visible { outline: 3px solid var(--cl-pricing04-cyan); outline-offset: 3px; }

.cl-pricing04__foot   { margin: 40px 0 0; color: var(--cl-pricing04-muted); font-size: 14px; text-align: center; }

@media (max-width: 900px) { .cl-pricing04__grid { grid-template-columns: minmax(0,1fr); max-width: 460px; margin: 0 auto; } }
@media (prefers-reduced-motion: reduce) {
  .cl-pricing04__plan, .cl-pricing04__cta { transition: none; }
  .cl-pricing04__plan:hover { transform: none; }
}
```

Above these rules sits a **~60-line Bootstrap-reset shield** (`:where(html) :is(…) { all: revert }` plus per-element
reverts). **Do not port it** — preflight already owns that ground in the repo, and the shield's `[hidden]` re-assert
would fight Tailwind's own base. The one genuinely dead rule inside the design block is `.cl-icon`
(`height: 1em; fill: currentColor`) — no element carries it.

## 4. Screenshot read

`pricing-table-04.jpg` is a **macOS window mock-up**: traffic lights, a `preview.colorlib.com` URL pill, a rounded
window with a soft drop shadow on a grey surround, the page inside at ≈ 0.79 scale (≈ 1140 px of a 1440 render).

What it shows, and what the DOM confirms: a near-black ground with a faint **44 px violet grid** and two large, very
soft washes — **pink** bleeding in from the upper left, **cyan** from the upper right. A centred pill ("Glitchcast for
creators") with a **glowing green dot**. A big tight-tracked headline whose last word, *stream*, is **cyan and haloed**.
Two lines of muted lavender lede. Then three dark glass cards with **hairline violet borders**: the outer two flat, the
middle one wrapped in a **pink→violet→cyan gradient** with a pink bloom underneath, a pink "CREATOR FAVOURITE" chip in
its top-right corner, and a **gradient CTA**; the outer CTAs are ghost buttons. Icon tiles are **cyan** (gamepad),
**pink** (bolt) and **violet** (crown). Prices are huge and tight: *Free*, *$9 / month*, *$24 / month*. Every bullet is
a small **four-point sparkle**, cyan on the outer cards and pink on the middle one. A one-line muted note closes the
page.

Two things the shot cannot tell you, which the DOM can: the Rookie price sits **22.47 px higher** than its neighbours
(its description is one line), and the ghost CTAs are **2 px taller** than the gradient one (their 1 px border). Both
are easy to "fix" by accident and both are load-bearing in the tests.

Do **not** reproduce the window chrome: no traffic lights, no URL pill, no rounded window corners, no outer shadow, no
grey surround. The page is edge-to-edge `#08060f`.

## 5. Copy (reference wording; paraphrase, keep the kind)

| Slot | Reference |
| --- | --- |
| eyebrow | `Glitchcast for creators` |
| `h1` | `Level up your ` + **`stream`** (glow span) |
| lede | `Overlays, instant clips and multistreaming in one app. Go live free, then unlock pro tools when your channel takes off.` |
| Rookie | `Everything you need for your first streams.` · **Free** · 720p streaming to one platform · 12 overlay themes · 30-second instant clips · Community Discord · **Download free** |
| Streamer (featured) | flag `Creator favourite` · `For growing channels that stream every week.` · **$9** `/ month` · 1080p60 to three platforms at once · All 140 overlay themes and alerts · AI highlight reels from every VOD · Custom sub and donation alerts · No Glitchcast watermark · **Go Streamer** |
| Legend | `For full-time creators and small esports teams.` · **$24** `/ month` · 4K streaming to unlimited platforms · Custom overlay designer · Sponsor slots and analytics · 3 moderator seats · Priority support in 2 hours · **Go Legend** |
| foot | `Cancel any time. Students get Streamer free for a year with a valid school email.` |

Port-safe substitutes for the Rookie description, measured in the **served** Google face at 14.5 / 400: 
`Everything you need to start streaming.` = **286** · `All you need for your first streams.` = **247** ·
`All the basics for your first streams.` = **255**. The reference's own string measures **307** in that face and no
longer fits the 300.66 px box.

The plan name *Streamer* and the product name *Glitchcast* collide in the foot note ("Students get Streamer free") —
keep the plan name and rename the product, then the sentence reads correctly again.

## 6. Section-by-section fidelity notes

**Ground.** Five background layers, not one. The two radials are sized in **percentages of the element** (`38% 30%` /
`34% 30%`) and positioned at `18% 8%` and `85% 20%`; the grid is **two** 1 px gradients at 7 % violet on a **44 px**
tile, one horizontal and one `90deg`. Drop any of the five and the page reads as flat black. The wrapper's block padding
is `clamp(48px, 8vw, 104px)` — 104 at ≥ 1300, 48 at ≤ 600 — and the `16px` inline padding is what keeps the cards off
the edge below 1152.

**Head.** 640 px cap, 56 px gap. The pill is `inline-flex` with an 8 px gap, so its 34.14 height = 20.15 line + 12
padding + 2 border; the dot is 8 × 8 with a `0 0 10px` halo of its own colour. The `h1` is `clamp(34px, 5.6vw, 60px)`
at `-.03em` and `1.02` — at 1440 it is one line of 607 px of text in a 640 box, i.e. 16.5 px of slack each side. The
**glow span is an inline box**: its rect is 192.2 × 77 because the font's ascent+descent is 77 at 60 px, not because
anything is padded. A port that sets `display: inline-block` on it (a common Tailwind reflex for a coloured word) keeps
77 but starts honouring `line-height`, which moves the `h1` block; a port that wraps it in a flex row breaks the line
box entirely.

**Lede.** 16.5 px, `#b9b3d1`, `text-wrap: balance`. Balance is doing real work: it holds **two** lines down to 510 and
the split at 1440 is "… in one app. Go / live free, then unlock …". A plain wrap puts "Go live" on the next line and
changes nothing measurable — but it changes where the *third* line starts when the balance drops, so keep `text-balance`
(Tailwind utility) and keep the 51.13 assertion.

**Grid.** `repeat(3, minmax(0, 1fr))` at `gap: 22` inside 1120 → 358.66 per track. `minmax(0, …)` matters: plain
`1fr` is `minmax(auto, 1fr)`, and a long unbreakable bullet would then widen its own column. `align-items: stretch`
plus `flex: 1` on the list is the whole vertical mechanism — the card heights equalise at 577.63 and the **slack lands
in the list** (194.81 / 174.34 / 172.34), which is why the three CTAs share a bottom edge at 887.08 while the price
rows do not share a top edge.

**A card.** `padding: 30px 28px 28px` — 30 top, 28 bottom, *not* symmetric. Stack, all measured from the card's inner
top: icon 46 (y 369.45) → 20 margin → name 34.09 → 4 margin → description 22.47 or 44.94 → 22 margin → price 73
(50 + 22 pad + 1 dashed) → 22 margin → list (flex) → 28 margin → CTA 51.25 / 49.25. The 22 px margins on the price row
are `margin: 22px 0`, which collapses nothing (flex column), so both sides count.

**Price row.** `align-items: baseline` is what makes `/ month` sit on the amount's baseline instead of its box bottom;
the amount's `line-height: 1` and `-.04em` tracking are why *$24* is only 86 px wide. The dashed rule is
`rgba(167,139,250,.25)` — 1.54 : 1 on the card, purely decorative, and it must stay subtle: a solid rule turns the card
into a table.

**Bullets.** `li` padding-left 28 and a `::before` at `top: 12; left: 2`, 12 × 12, painted from a data-URI SVG. The
`top: 12` is *not* centred on a 34.47 line (which would be ~11.2) — it lines the sparkle up with the x-height of the
first text line. On the featured card the same path is filled `#f472b6`.

**Featured card.** Three devices at once: (1) `border: 1px solid transparent` with a two-layer background split by
`padding-box` / `border-box`, so the visible 1 px frame is a **135° three-stop gradient**; (2) a three-layer shadow whose
first layer is a `0 0 0 1px` pink ring — the thing that keeps the frame readable against the cyan wash; (3) the flag.
`border-image` cannot do this (it ignores `border-radius`), and setting `border-color` on hover kills the gradient —
which is exactly why the sheet re-declares `border-color: transparent` in the `--pop:hover` state.

**Flag.** `top: 28; right: 24` against the **padding box**, so it lands 29 px below and 25 px in from the card's outer
edge. It is `position: absolute` inside the card, a **sibling of the icon**, and its 12 px / 700 / uppercase / `.02em`
sizing is a fixed box — 145.09 × 26.59 with the archive face, 140.09 with Google's (the string is 4 % narrower there).
The chip is a gradient `#f472b6 → #c084fc` with `#1a0b1f` ink: 7.13 : 1, one of the few places on the page where text
sits on a saturated fill and still passes comfortably.

**Foot.** `margin: 40px 0 0`, 14 px, muted, centred, one line above 584. It is the only element below the grid, and the
port's Component Dock strip goes *after* it.

**The 900 step.** One media query, three declarations. It is a **hard** step: at 901 the document is 1096, at 900 it is
2103. The centred 460 px column is wider than the 358 px track, so the cards get **wider** as the viewport narrows from
901 to 900 while the page gets ~2× taller. Below 492 the column starts shrinking with the viewport (16 px gutters).

## 7. Source → React adaptation

| Reference | Port |
| --- | --- |
| `<main class="…-demo">` with 5-layer background | `<main>` with the same five layers (arbitrary `bg-[radial-gradient(…),…]` or a `@utility`) |
| `<section aria-labelledby>` | unchanged — keep the landmark wiring |
| `.cl-pricing04__icon` + inline `<svg>` per plan | `<PlanIcon>` mapping a `tone` prop to `Gamepad2` / `Zap` / `Crown` from `lucide-react`, `size={24} strokeWidth={1.8}` |
| `li::before` data-URI sparkle | inline `<svg>` (12 × 12) per `li`, `aria-hidden`, `fill="currentColor"`, tone token on the featured card |
| `.cl-pricing04__plan--pop` double background | `border border-transparent bg-[linear-gradient(…)_padding-box,linear-gradient(…)_border-box]` |
| 5 custom props on `.cl-pricing04` | `@theme` tokens (`--color-neon-pink` etc.) |
| `clamp(48px, 8vw, 104px)` padding | `py-[clamp(48px,8vw,104px)] px-4` |
| `@media (max-width: 900px)` | `max-[900px]:grid-cols-1 max-[900px]:max-w-[460px] max-[900px]:mx-auto` |
| `href="#"` × 3 | three real destinations (routes or in-page anchors); keep the count at 3 |
| none | the Component Dock footer (the only addition) |

Reuse before build: the repo's `ButtonLink` for the CTAs (it already carries the focus ring pattern), `cn()` for the
tone maps, and the existing `Section`/`Container` if one fits. The price row and feature list are one-offs — do not
generalise them into `packages/ui`.

## 8. Sibling comparison (the `pricing-table` family)

| Variant | App | Ground | Featured device | Behaviour |
| --- | --- | --- | --- | --- |
| 01 | `ratecard` | light grey card grid | **2 px accent border + `-16px` offset** | none |
| 02 | `tallyboard` | white cards + switch | **fill-only** (1 px border, flag inside) | annual/monthly toggle with count-up |
| 03 | `parity` | white card on cool grey | **fill-only column** in a real `<table>` | 4 collapsible `<tbody>`s + 2 bulk buttons |
| **04** | **`limelight`** | **dark neon, 5-layer ground** | **gradient border + glow ring + flag + gradient CTA** | **none — CSS hover only** |

So this is the family's **first dark** variant and its **first gradient-border** featured device, and the second
(alongside `ratecard`) with no state at all. Do not import `tallyboard`'s switch or `parity`'s table grammar; do import
the *shape* of its test list (rect assertions per band, a ladder, a contrast table).

## 9. Measurement notes (how these numbers were taken)

1. **Live first**: `curl -4` the preview, then Chromium at 1440 × 900 with `document.fonts.ready` + a 400 ms settle.
   Networkidle hangs on the preview host — use `domcontentloaded` + a fixed wait.
2. **Archive twin next**: unzip to `/tmp`, serve with `python3 -m http.server`, and measure the *same* selectors. Every
   rect matched the live page to the hundredth, which is what lets the spec quote reference numbers as port numbers.
3. **Fonts**: `CSS.getPlatformFontsForNode` on `.cl-pricing04__title` must return `custom=true` and no `DejaVu Sans`.
   `document.fonts.check()` lies (it answers `true` while the page falls back).
4. **Google-vs-archive drift**: served a second copy of the same markup with the Google `css2` ASCII subset
   (`unicode-range` starting `U+0000-00FF`, 22,284 B) declared as `font-weight: 400 700`, then compared both
   `getBoundingClientRect()` trees and `canvas.measureText` per string. Drift spans **−4.00 % … +2.80 %** and is
   **size- and weight-dependent inside one page** — never extrapolate it from one string.
5. **Seams**: binary scans of the viewport (step 1 px) recording the line-count of the `h1`, the lede, the foot and each
   description, so every "1 line at ≥ N" in the spec is a measured boundary, not an estimate.
6. **No-overflow test**: `window.scrollTo(400, 0)` then read `scrollX` (a `scrollWidth > clientWidth` alone can be a
   clipped child, not a scrollbar). 0 at all 26 widths.
7. **The trap of the run**: the reference's own Rookie description fits by **0.66 px** (300.00 in 300.66). With the
   Google face it is 307 and wraps, so a port that copies the string reproduces the *reference's* rhythm only on the
   archive face. Pick copy with slack and assert the **row heights**.

## 10. As built (2026-11-11, `apps/limelight`, Chromium 1440 × 900, `document.fonts.ready`)

Measured on the built `dist/` served over `python3 -m http.server` — not on the dev server, so the numbers include the
production CSS. Every rect the spec fixes reproduces, because the layout is a direct port of the reference's own rules:

| Reading | Reference (spec) | As built |
| --- | --- | --- |
| `main` | 1440 × 1081.77, `padding: 104px 16px` | **1440 × 1081.77** ✓ |
| section | 1120 × 873.77 @ (160, 104) | **1120 × 873.77 @ (160, 104)** ✓ |
| head | 640 × 178.45 @ (400, 104) | **640 × 178.45 @ (400, 104)** ✓ |
| eyebrow | 196 × 34.14 | **193 × 34.14** (the copy is shorter; the box height is the reference's) |
| dot | 8 × 8 @ (637, 117.06) | **8 × 8 @ (638.5, 117.06)** ✓ |
| `h1` | 61.19 @ y 156.14, 1 line, 60/700/−1.8/61.2 | **61.19 @ 156.14** ✓ |
| glow span | 77 tall @ y 148.14 (inline box, not the line box) | **124.02 × 77 @ (842.39, 148.14)** ✓ |
| lede | 51.13 (2 lines) @ y 231.33 | **51.13** ✓ |
| grid | 1120 × 577.63 @ (160, 338.45) | **1120 × 577.63 @ (160, 338.45)** ✓ |
| tracks | 358.656 / 358.672 / 358.656 | **358.656 / 358.672 / 358.656** ✓ |
| cards | 577.63 tall at x 160 / 540.66 / 921.33 | **577.63** at **160 / 540.66 / 921.33** ✓ |
| icon | 46 × 46 @ y 369.45 | **46 × 46 @ y 369.45** ✓ |
| name | 34.09 @ y 435.45 | **y 435.45** ✓ |
| descriptions | 22.47 / 44.94 / 44.94 | **22.47 / 44.94 / 44.94** ✓ (the free copy is 1 line — `Everything you need to go live.`) |
| price rows | 73 tall @ 518.02 / 540.48 / 540.48 | **73** @ **518.02 / 540.48 / 540.48** ✓ |
| amounts | 94 / 58 / 86 wide | **96 / 57 / 85** (Google's face — the spec's own Google column) |
| `/ month` | @ y 565.48 on the two paid plans | **@ 565.48**, two spans only ✓ |
| lists | 194.81 / 174.34 / 172.34 | **194.81 / 174.34 / 172.34** ✓ (the stretch slack) |
| CTAs | 51.25 / 49.25 / 51.25, every bottom 887.08 | **51.25 / 49.25 / 51.25, bottoms 887.08** ✓ |
| flag | 145.09 × 26.59 @ (729.23, 367.45) | **140.09 × 26.59 @ (734.23, 367.45)** — the spec's Google-font column exactly |
| foot | 21.69 @ (160, 956.08) | **21.69 @ (160, 956.08)** ✓ |
| port footer | 44.14 below the page | **44.14**, so the document is **1126** |

Ladder without the footer (`scrollHeight − 44.14`): **1126 → 1081.86** at 1440 ✓ · 1078.86 at 1280 (1079) · 1065.86 at 1200
(1066) · 1052.86 at 1120 (1053) · 1108.86 at 960 (1109) · 1099.86 at 920 (1100) · 1095.86 at 901 (1096) · **2103.86 at
900** (2103) · 2081.86 at 800 · 2074.86 at 768 · 2059.86 at 700 · 2038.86 at 600 · 2059.86 at 560 · 2085.86 at 480 ·
2130.86 at 390 (2131). The narrow-end rows that differ (375 → 2130.86 vs 2153, 360 → 2178.86 vs 2224, 331/320 → 2245.86
vs 2348, 1024/1000) are **copy-dependent**: this port's bullets are shorter than the reference's, so fewer of them wrap
once the column is 299 px. The structure they measure (one column, `max-width: 460`, unequal card heights, CTAs pinned)
is unchanged.

Behaviour, same run: card hover `matrix(1,0,0,1,0,-4)` + border `.2 → .45`; `Tab` → `Download free` with
`3px solid rgb(34,211,238)` at `offset 3px`; `prefers-reduced-motion: reduce` → `transition-duration: 0s` and no lift;
`scrollX = 0` and `scrollWidth === clientWidth` at all 26 probed widths; the featured card computes a **two-layer**
`background-image` (padding-box gradient + 135° border-box gradient) with the three shadows intact; the ghost CTA's
border computes `rgba(167, 139, 250, 0.6)` — the port's one colour repair.

Deltas recorded for the PR: copy is paraphrased (product *Nightwave*, plans Spark / Creator / Studio), the three CTAs
resolve to Component Dock instead of `href="#"`, and the ghost border is raised from 45 % to 60 % violet (2.35 → 3.14 : 1
on the card top).
