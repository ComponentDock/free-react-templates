# Nameplate — design notes

Source: ColorLib **Card V01** (`card-01`), ColorLib page `https://colorlib.com/wp/template/card-01/`
(HTTP 200, 112,659 B), live preview `https://preview.colorlib.com/theme/bootstrap/card-01/`
(**HTTP 200, 7,149 B**, read 2026-10-25 with `curl -4`; **note the `/bootstrap/` prefix** — the slug-only path
404s). Recreation name `nameplate`. Spec: `openspec/specs/template-nameplate/spec.md`. Tasks:
`docs/templates/nameplate/tasks.md`.

A **hand-written static snippet**, not a theme build: 7 KB of HTML, one 9,249 B stylesheet, **no JavaScript at
all** (`js/snippet.js` → 404; the archive has no `js/` directory even though its README lists one), Bootstrap 5
present only as a
`:where(html) … { all: revert; }` reset guard so the snippet renders the same inside any host page. The
stylesheet's header says it plainly: _"Every style this snippet uses, and nothing else. No framework, no build
step."_

The live sheet is byte-identical to the copy inside `downloads/free/card-01.zip`
(sha256 `9b58f1397a874412606301630759acb635e18317cf0e621459c155c6c3a0f0cb`, 9,249 B), and the live HTML is the
zip's `index.html` plus the host's injections (two `robots` metas, a `cdnjs` `dns-prefetch`, the
`?v=9ac0ac78` cache-buster with `fetchpriority="high"`, and per-image `fetchpriority` / `decoding` / `loading`
hints). So: **live preview verified; the archive is its un-versioned twin.**

## Structure order (measured at 1440 × 900)

| #   | band                    | hook              | ground    |   top | height |
| --- | ----------------------- | ----------------- | --------- | ----: | -----: |
| 0   | page                    | `body`            | `#f6f3ee` |     0 |  786.1 |
| 1   | container               | `.cl-card01-demo` | —         |     0 |  786.1 |
| 2   | header (eyebrow + `h1`) | `__head`          | —         |    72 |   67.2 |
| 3   | roster grid (4 × 282)   | `.cl-card01-grid` | —         | 171.2 |  542.9 |
| —   | _nothing else_          | —                 | —         |     — |      — |

There is **no footer, nav, hero or second section in the reference** — the document ends with the grid. The
recreation adds exactly one thing the repo requires: a single small-print line linking Component Dock
(`https://www.componentdock.com/`), on the same sand ground. Nothing else.

Document heights: **786** at 1440 (fits a 900 px viewport with no scroll), 1,358 at 1024, 1,384 at 768,
**2,624** at 390, **2,387** at 320. `scrollWidth === clientWidth` at every width probed — the reference has
**no horizontal overflow**, so any overflow in the recreation is new code, not a copied defect.

## Section-by-section fidelity notes

### The header

One centred `<p>` and one centred `<h1>`, 32 px above the grid. The eyebrow is **`#9a3412`** — a rust one step
darker than the card role colour (`#c2410c`) — and it is the only place that hex appears on the page. The `h1`
is `clamp(26px, 3.4vw, 36px)` at weight 700 with **`−0.02em`** tracking (`−0.72px` at 36). At 390 it wraps to
two lines ("People behind / Northfield Design") inside an 86.4 px header box; at 520 it is one line. Do not
shrink it to force a single line at 320.

### The grid

`repeat(auto-fit, minmax(240px, 1fr))`, `gap: 24px`, inside a container that is `max-width: 1200px` with
`padding: clamp(32px, 6vw, 72px) 16px`. **That is the entire responsive system** — the sheet contains no width
media query (its only `@media` is `prefers-reduced-motion`). Consequences, all measured:

- one column until **520 px** inclusive (two 240 tracks + 24 gap = 504 do not fit in 488 of content);
- **600** → 2 (272 each), **768** → 2 (356), **1024** → 3 (314.7);
- **1180** → 4 (269) — the first 4-column state, and the state the catalogue screenshot shows;
- **1280+** → 4 (282), because the container stops growing at 1,200 content / 1,232 outer.

`max-width` applies to the **content box**, so at ≥ 1,232 the outer box is 1,232 and the cards are 282 — not
1,200 / 4 = 300. An implementer who reads `max-width: 1200` and divides by four will be 18 px off per card.

### The card

White, radius **22**, 1 px `#ece7df` border, **10 px** padding, two-layer shadow
(`0 1px 2px rgba(28,25,23,.04), 0 12px 32px -20px rgba(28,25,23,.25)`). Inside, top to bottom:

1. **media** — `aspect-ratio: 5 / 5.4`, radius **16**, `overflow: hidden`, ground `#e7e1d8`, photo
   `object-fit: cover; object-position: center 25%` and `scale(1.05)` on card hover (`.6s ease`). The 16 px
   radius sits 6 px inside the card's 10 px padding, which is what keeps the two curves from looking
   concentric-but-cheap. The `center 25%` crop is doing real work: the source portraits are 600 × 720 and the
   window is 260 × 280.8, so a centre crop would cut foreheads.
2. **tag** — a `<span>`, absolutely positioned **left 12 / bottom 12**, pill radius, `rgba(255,255,255,.92)`,
   12/700 with `+0.02em`, padding `5px 12px`, `0 4px 12px rgba(0,0,0,.12)`. It is _on_ the photograph, not
   under it. Measured 79.7 × 28.6 for "Founder".
3. **body** (`flex: 1`, padding `18px 10px 6px`) — `<h2>` name 19/700 `−0.19px`; role 14/600 `#c2410c` with
   `margin: 2px 0 10px`; bio 14/400 `#57534e`.
4. **foot** — `space-between`, `gap: 12px`, `margin: 14px 10px 6px`, `padding-top: 14px`,
   **`border-top: 1px dashed #ece7df`**. Dashed, and the only dashed stroke on the page — the card border and
   the tag are the only other lines and both are solid (the tag has none at all).

The equal-height behaviour is **not** a fixed height: `li { display: flex }`, card `width: 100%`,
body `flex: 1`. That is what puts all four footers on the y 646.1 baseline despite bios of 3 / 3 / 2 / 2 lines.
Reproduce the mechanism, not a magic `h-[543px]`.

### The discs and the stamp

Three 36 px discs (`#f5f1ea`, radius 50 %, glyph 17 px `stroke-width 1.8`, gap 6) and a `12.5px`/500
`#57534e` "Since YYYY", pushed apart by `space-between`. Hover: ground `#c2410c`, glyph white, disc `−2px`,
`.2s ease`. Focus: `outline: 2px solid #c2410c; outline-offset: 2px`.

Icon sets per card (the second disc differs, the other two do not): Ava **globe** ("Portfolio website"),
Daniel **code** ("Code repositories"), Sofia **pen** ("Writing and articles"), Marcus **calendar**
("Book a call"); all first discs **LinkedIn**, all third **mail** ("Email \<first name\>"). Each row's `<ul>`
carries `aria-label="<Full name> online"`.

**The reference's twelve anchors are all `href="#"`** — the one defect to fix rather than copy (spec
Requirement 4). There is no third-party profile to link to, so the app uses deterministic placeholders: real
URLs for the brand/second discs, `#contact`-style anchors or the profile section for the calendar, and
`mailto:<first>@nameplate.example` for the mail discs.

## Traps measured on this design

- **The prefix ladder matters.** `theme/card-01/` → **404, 9 B**; `theme/bb/card-01/` → 404;
  `theme/bootstrap/card-01/` → **200, 7,149 B**. This family (like `modal-*`, `dropdown-*`, `multiselect-*`)
  lives under `/theme/bootstrap/`. A "preview unreachable" note written off the slug-only 404 would have been a
  false claim — the exact mistake that needed a follow-up commit on 2026-10-23.
- **`card-01.jpg` is AVIF.** The catalogue image is served `image/avif` under a `.jpg` name (1200 × 972). It is
  a **framed capture** — macOS traffic lights, a `preview.colorlib.com` URL bar, a white sheet with a drop
  shadow on a light grey page — showing the page at ~1,120 px wide (four 269 px cards). The window chrome is
  catalogue furniture; only the in-window composition is reference.
- **The archive README is wrong about JavaScript.** It lists `js/snippet.js` "the behaviour, in plain
  JavaScript"; the live path 404s and the zip has no `js/` directory. There is nothing to port — do not invent a
  script.
- **Eight `@font-face` blocks, two files.** All four weights hash identically per subset
  (`cd8db90c…` latin 27,272 B, `0303e02b…` latin-ext 21,688 B), so weight comes from the variable axis and the
  files are copies. Load Plus Jakarta Sans 400/500/600/700 from Google Fonts instead of shipping the via-four.
- **Lazy photos look broken in a full-page screenshot.** At 390 the last two cards render empty `#e7e1d8`
  panels because `loading="lazy"` never fires during a full-page capture. That is a capture artefact, not a
  design state — but it is why a `#e7e1d8` ground behind every photo is worth keeping.
- **No `h3` anywhere.** The reference uses `h1` (headline) then `h2` (each name). Keep that order; a
  section-heading component that inserts an `h2` for the band and demotes the names to `h3` breaks the mapping
  the spec's scenarios assert.
- **No dark mode, no gradient, no second accent.** The page is one light palette. A `dark:` variant added "for
  parity" would be new design, not fidelity.

## What the implementer must not do

- Do not add bands (nav, hero, stats, testimonial, CTA, multi-column footer) — the reference is one section.
- Do not convert the tag into a chip under the photo, or the dashed rule into a solid one.
- Do not replace `minmax(240px, 1fr)` with a `sm:/lg:` breakpoint ladder; the measured column counts are a
  mathematical consequence of the `auto-fit` track, and a ladder will disagree with them at 520/600/1180.
- Do not name ColorLib, `card-01`, or the source title anywhere in `apps/nameplate` — the footer credits
  Component Dock (`https://www.componentdock.com/`), and provenance lives in this file, the spec and the PR.

## Implementation record (shipped 2026-10-26)

Built at `apps/nameplate` (React 19 + Vite + Tailwind 4 + TS strict, 100% coverage, 22 tests),
deployed to https://nameplate.free.componentdock.com. Measured with Playwright 1.62 Chromium against
the built bundle (1,440 × 900 unless stated):

| what                 | recreation                                                                           | reference          | note                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------ | ------------------ | --------------------------------------------------------------------------------------------------- |
| container            | 1,232 outer / 1,200 content at x 104                                                 | same               | `max-w-[1232px] px-4` because Tailwind is border-box                                                |
| card                 | **282 × 542.92**                                                                     | 282 × 542.9        | a 0.02 px delta on the whole plate                                                                  |
| media                | **260 × 280.8**, radius 16                                                           | same               | `aspect-[5/5.4]`                                                                                    |
| tag                  | 73.69 × **28.59**                                                                    | 79.7 × 28.6        | height exact; width −6 px (real Plus Jakarta Sans advances vs the reference's variable-weight file) |
| head / h1 / grid top | 66.78 / 95.6 / 170.8                                                                 | 67.2 / 96 / 171.2  | `leading-[1.2]` on the eyebrow is what aligns it                                                    |
| name / role / bio    | 24.69 / 21.69 / 86.75                                                                | 24.7 / 21.7 / 86.8 | `leading-[1.55]` must be explicit — `text-sm` would set 20px                                        |
| foot                 | 51 tall, all four at y **649.6**                                                     | 51, one baseline   | `li { display:flex }` + `flex-1` body, no fixed height                                              |
| discs                | 36 × 36, glyph 17                                                                    | same               | hover fills `#c2410c`, `-2px`, `.2s`                                                                |
| documents            | 900 at 1,280–1,920 (no scroll); 2,652 at 390                                         | 900 / 2,624        | +28 at 390 = the required Component Dock line (48) minus four 6.7 px-shorter cards                  |
| columns              | 1/1/1/1/2/2/2/3/4/4/4/4 at 320/360/390/520/600/700/768/1,024/1,180/1,280/1,440/1,920 | same               | card widths 288/328/358/488/272/322/356/314.66/269/282                                              |
| horizontal scroll    | none at any probed width                                                             | none               | `scrollWidth === clientWidth` everywhere                                                            |

Two things the implementation had to get right that the sheet alone does not reveal:

1. **Reduced motion must target `translate`/`scale`, not `transform`.** Tailwind 4 compiles
   `-translate-y-1` / `scale-105` to the standalone `translate` / `scale` properties, so a
   `transform: none !important` override does nothing — and Lightning CSS _rewrites_ a
   `translate:none; scale:none` pair into `transform: translate(0) scale(1)`, which also does nothing.
   The working solution is `motion-reduce:hover:translate-y-0` / `motion-reduce:group-hover:scale-100`
   on the utilities themselves (verified: `translate: 0px`, `scale: 1`, `transition-duration: 0s` under
   `reduce`; `-4px` / `1.05` / `.3s`–`.6s` without it). The `transition: none !important` base rule is
   enough for the durations.
2. **`min-h-screen` belongs on the page wrapper, not on `<main>`.** With `main` at `min-h-screen` the
   attribution line is pushed below a full 900 px band and the page scrolls at 1440 (948 px); a
   `flex min-h-screen flex-col` wrapper with `main { flex-1 }` keeps the document at exactly 900.
