# Tideline (ColorLib Villa) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-tideline`. This folder + the spec are the claim
> marker: the implementer starts from here, no research needed.
> Full measured evidence: `openspec/specs/template-tideline/spec.md` and
> `docs/templates/tideline/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Tideline** (one word, the mark the tide leaves on the sand; `git grep -il tideline origin/main` = 0 hits, absent from `TEMPLATES.md`, not a ColorLib slug — `template/tideline/`, `theme/tideline/` and `theme/bootstrap/tideline/` all 404) |
| App / package | `apps/tideline` · `@free-react-templates/tideline` |
| Deploy target | `tideline.free.componentdock.com` |
| Source | ColorLib **Villa** — https://colorlib.com/wp/template/villa/ |
| Preview | https://preview.colorlib.com/theme/villa/ (HTTP 200, **22,040 B** HTML, sha256 `34353541…`; theme sheets `css/style.min.css` **13,718 B** sha256 `03483841…` + `css/modern.min.css` **9,628 B** sha256 `4f06d292…`; faces `css/fonts.min.css` **2,941 B** sha256 `18c4eed6…`; script `js/main.min.js` **3,903 B** sha256 `2a528d3b…`; "Villa 3.0.0" build — Bootstrap 5.3.8 + Swiper 14.3.0 + a ColorLib `kit/` layer; `<title>` = "A slower stay by the water \| Villa"; `theme/bootstrap/villa/` **404**, `theme/bb/villa/` **404**, `/downloads/free/villa.zip` **404** — no alias twin, no archive) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/villa-free-template.jpg (AVIF, 1200×946 — browser-chrome shot, **top fold only**: wordmark + hamburger + sailboat hero with two pill CTAs + the first ~180px of the explore band) |
| Category | Hospitality & Travel / coastal resort (single-page build of a 14-page theme) |
| TEMPLATES.md rows | lines **1939** (`## Hotel (38)`) and **3014** (`## Travel (44)`) — both `[x]`, wrongly credited to the `villa` app |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: the `villa` app's spec names a different ColorLib design (**Layal**; `row-excl / spec-excl` = 1 / 21) |

## Structure (1:1, DOM order from the live preview, 1440×900, doc ≈4,883px)

1. **Header** — `position:absolute` over the hero (0px tall in flow), white
   serif wordmark **58×33** at (15, 58) ("Villa", 30px/700), hamburger
   **48×48** at (1377, 60) with three 40×2px bars. The panel it opens is a
   full-screen white overlay: seven serif **40px** links (55px boxes), a
   `#f9c3d4` block behind the **lower half** of the active label, and two
   extra-info columns (17px `#555` labels, 18px copy, underlined links).
2. **Hero** — **900px** = `100vh` (min 700) sailing photo, wash
   `rgba(0,0,0,.51)`. Centred column **950×243** at y 329: `h1` 80px/80/700
   white with the brand in `<em>`, `p.sub-heading` 30px/45/200 at 421, then a
   12px-gapped CTA pair at 510 — filled pill **240×46** (`#c0144a` → `#9e103c`)
   and outlined pill **209×46** (1px `#f8f9fa`).
3. **Explore** — **546px** white, `padding:112px 0`. Eyebrow `h2`
   ("You can explore") **15px/18/500**, uppercase, **3px tracking**,
   `#646a70`, 30px above the row. Four **285px** columns at y 1,060 with
   **255×170** photos (aspect 500/333, 15px inset, `0 2px 3px rgba(0,0,0,.2)`),
   **20px** serif titles, 14px `#646a70` detail lines. Card box 285×250.
4. **Gallery** — **1,217px** white. `h2` "A place to slow down." **80px/96/500**
   at 1,558, 20px/36/300 lead at 1,662, then the **1,110×741** single-slide
   frame at (165, 1,762) — six photos, **48×48** circular arrows 60px outside
   at x 105 / 1,287, **six 10×10** dots at y 2,437 (active `#c0144a` + white
   ring). No autoplay; non-active slides `visibility:hidden`.
5. **Journal** — **1,429px**, `#e9ecef` + `img/round.png` tile,
   `margin-top:-500px` / `padding:500px 0 112px`, so the band starts **341px
   above the gallery frame's bottom** (the photo sits on the pattern). `h2`
   "Notes for your next escape.", 20px lead, three **350px** white cards at
   x 165/545/925, y 2,963 — photo **350×233**, body `padding:24px`, shadow
   `0 2px 5px rgba(0,0,0,.07)`, meta **14px uppercase 1.4px** `#686868`,
   title **25px** serif, grey blurb. Heights **ragged** (464/434/493).
6. **Principles** — **759px** white. `h2` "The small things matter.", 20px
   lead, three **380px** centred columns at y 4,000 — **70×70** circle
   `#fff2f6` with a **30px** `#ad1546` glyph (sun / utensils / waves), **26px**
   serif title, **18px/32.4/300** copy.
7. **Footer** — **531px** `#1a1a1a`, `padding:112px 0`. Four **285px** columns
   at y 4,463: "Stay a little longer" (3 links) · "Useful details" (3 links) ·
   "A coastal state of mind" (blurb + fictional-concept note, `id="story"`) ·
   "Notes from Villa" (newsletter). Titles **17px/20.4/500** white, links
   `#bababa`. Newsletter row **255×51**, `1px #888` bottom rule, transparent
   input, **48×50** transparent arrow submit. Bordered copyright row
   (1,140×70) at y 4,701 → Component Dock credit.

## Task list (TDD order — tests first, per AGENTS.md rule 3)

1. **Scaffold** — copy the simplest existing app, rename the workspace to
   `@free-react-templates/tideline`, set `homepage` +
   `public/CNAME` to `tideline.free.componentdock.com`, keep
   `injectUiSource()` in `vite.config.ts`, keep `"react": "latest"`. Run
   `npm install` at the repo root **before** committing (lockfile registration).
2. **Tokens** — `@theme` in `src/index.css`: `--accent:#c0144a`,
   `--accent-strong:#9e103c`, `--link:#a7103d`, `--accent-soft:#ad1546`,
   `--accent-soft-bg:#fff2f6`, `--accent-wash:#f9c3d4`, `--ink:#000`,
   `--body:#50565c`, `--muted:#646a70`, `--meta:#686868`,
   `--surface-pattern:#e9ecef`, `--surface-dark:#1a1a1a`,
   `--font-body:"Mukta Mahee", arial, sans-serif`,
   `--font-heading:"Times New Roman", Times, serif`. Load
   `Mukta+Mahee:wght@200;300;400;500` in `index.html`.
3. **Shell test (red)** — band order, single `h1`, `<title>`/meta for Tideline,
   skip link → `main#main` focus, no ColorLib string in the bundle.
4. **Header + overlay** — wordmark, 48px toggle, full-screen panel, seven
   links with the mapped anchors (see spec delta 1), extra-info columns,
   Escape/Tab-trap/focus-return, body scroll lock, `aria-*` swap. Tests:
   open/close, keyboard trap, label swap, anchor targets exist.
5. **Hero** — picture with placeholder, wash, `h1` + `<em>` brand, sub-line,
   two pill CTAs with the measured 46px height / 50px radius, `#c0144a`
   default + `#9e103c` hover, compact 390px variant.
6. **Explore** — four cards, aspect-locked photos, eyebrow heading, link
   targets. Tests: 4 items in order, image aspect classes, no `href="#"`.
7. **Gallery** — hand-rolled one-up carousel (no Swiper dependency): frame
   aspect 1123/750, arrows, six dots, `aria-hidden` on inactive slides,
   keyboard support, no autoplay, arrows below the frame ≤1270px. Tests:
   next/prev/dot navigation, dot state, accessible names, no autoplay timer.
8. **Journal** — patterned band with the negative-margin overlap, three cards
   with meta/title/blurb, ragged heights. Tests: 3 cards, meta uppercase class,
   overlap token present.
9. **Principles** — three columns, 70px circles, lucide `Sun`/`Utensils`/
   `Waves`, copy. Tests: glyph names per column, `aria-hidden` on each svg.
10. **Footer** — four columns, `#story` id, newsletter with local validation
    (no fetch), Component Dock credit + current year, `aria-invalid` on error.
    Tests: 3+3 links, no `href="#"`, invalid → error + no request, valid →
    success + cleared.
11. **Responsive pass** — 991 / 767 / 1270 breakpoints per the spec; assert
    `scrollWidth === clientWidth` at 390.
12. **Verify** — `scripts/verify-app.sh tideline` (typecheck, lint, 100%
    coverage, build), `openspec validate template-tideline --type spec`,
    then PR + squash merge and the `[x]` bookkeeping on rows 1939/3014.

## Fidelity notes (the things that are easy to get wrong)

- **The journal band overlaps the gallery by 500px** (`margin-top:-500px;
  padding-top:500px`, 300px below 991px). Without it the pattern band starts
  below the photo and the whole page reads wrong.
- **The section rhythm is 112px, not 96/128**, and it *changes* at the
  breakpoints: 112 → 48 (≤991px) → 80 (≤767px). This is the source's own
  override chain, not a guess.
- **Type pairing**: serif *display* (Times New Roman, system face, weight 500
  on section headings, 700 on the hero) + Mukta Mahee at weight **200** for
  body copy. Body is unusually light — do not "fix" it to 400.
- **The explore eyebrow is an `h2`**, not a `p` or a `span` — keep the level.
- **Buttons are 50px pills with 14px uppercase 2.8px-tracked labels and a
  46px minimum height**; the outlined one is a hairline white border, not a
  filled secondary.
- **Footer submit is transparent** (48×50) with a white arrow — the crimson
  intent in `modern.min.css` loses the cascade to a higher-specificity
  `background:none`. Ship the measured render.
- **No entrance animations**: the page has zero reveal hooks, and adding a
  fade-in would be an invention, not fidelity.
- **Mukta Mahee 700 is never delivered** by the source; the two places that
  ask for a heavy sans (`h2.menu-label`, `.footer-title`) are 500 and were
  synthesised. Load 500 so they render honestly.
- **Do not add Swiper** — one visible slide with rewind is ~40 lines of React.
- Images: `https://picsum.photos/seed/tideline-<n>/<w>/<h>`; the hero's `alt`
  stays empty (decorative), the four cards keep descriptive alts.

## Copy

Replace the source brand **Villa** with **Tideline** in the wordmark, the hero
`<em>`, the footer and the `<title>`/meta. Keep the same *kind* of content
(headline + sub-line + two CTAs, four image cards with a detail line, six
uncaptioned photos, three journal cards with meta + title + blurb, three
principle columns, four footer columns with an underline newsletter). The full
live copy inventory is in `openspec/specs/template-tideline/spec.md`
("Content inventory"), and the v2 copy visible in the marketplace screenshot
("YOU CAN VISIT", "DOWNLOAD") is **not** the current page — do not copy it.
