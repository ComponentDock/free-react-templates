# Uptempo (ColorLib Amplify) — Tasks & Design Notes

> Prep artifacts written on `main` by the prep stream. Implementation ships
> later on `feat/template-uptempo`. This folder + the spec are the claim
> marker: the implementer starts from here, no research needed.
> Full measured evidence: `openspec/specs/template-uptempo/spec.md` and
> `docs/templates/uptempo/design-notes.md`.

## Identity

| Thing | Value |
|---|---|
| New name | **Uptempo** (one word, the faster of two tempos; `git grep -il uptempo origin/main` = 0 hits, absent from `TEMPLATES.md`, not a ColorLib slug — `template/uptempo/`, `theme/uptempo/` and `theme/bootstrap/uptempo/` all 404) |
| App / package | `apps/uptempo` · `@free-react-templates/uptempo` |
| Deploy target | `uptempo.free.componentdock.com` |
| Source | ColorLib **Amplify** — https://colorlib.com/wp/template/amplify/ ("Free One Page Agency Website Template") |
| Preview | https://preview.colorlib.com/theme/amplify/ (HTTP 200, **20,108 B** HTML, sha256 `ff24525e…`; sheet `css/style.css` **18,353 B** sha256 `8bb4f16a…`; script `js/main.js` **6,660 B** sha256 `e760df0e…`; Bootstrap **4.1.3** 26,954 B; `<title>` = "Amplify — Website by Colorlib"; `theme/bootstrap/amplify/` **404**, `theme/bb/amplify/` **404**, `/downloads/free/amplify.zip` **404** — no alias twin, **no archive**) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/amplify-free-template.jpg (AVIF, 1200×946 — browser-chrome shot, **top fold only**: wordmark + 5 nav labels + outlined Contact pill + the blue 70 % panel + headline + paragraph + outlined CTA + square portrait on the blue/white seam) |
| Category | Agency & Studio / one-page creative agency |
| TEMPLATES.md rows | lines **2287** (`## One Page (91)`), **2379** (`## Personal (53)`), **2496** (`## Portfolio (89)`) — all `[x]`, wrongly credited to the `amplify` app |
| Why no app exists | `docs/row-multiplicity.md` §2 APP-WRONG-DESIGN: the `amplify` app recreates a different ColorLib design (**Uza** — `apps/amplify`'s hero is "Uza makes your biz greater"); `row-excl / spec-excl` = **1 / 23** |

## Structure (1:1, DOM order from the live preview, 1440×900, doc ≈7,446px)

1. **Header** — `position:absolute` over the hero (0 px in flow, 88 px tall),
   container-fluid insets **112 px** so the wordmark starts at x 150 ("Amplify"
   20.8 px/900 white). Four white 17.6 px/300 links (Home · Work · Process ·
   Services) at 5 px 20 px padding, active one underlined 2 px. Far right: the
   **Contact** pill (1 px `#007bff`, radius 4 px, 10 px 20 px padding, 20 px/300
   dark label) which **fills solid blue on scrollspy** at the contact band.
2. **Hero** — **900 px** = `100vh` (min 900). A **1008 px (70 %)** `#007bff`
   panel, square corners, full band height, white right half. `h1` 48 px/900
   white, 350 px wide, **two lines** at (165, 286); paragraph 17.6/300
   `rgba(255,255,255,.5)` max 400; outlined CTA **182×52** at y 546; portrait
   **600×600** at (671, 150) with `0 10px 50px -5px rgba(0,0,0,.4)`.
3. **About** — **1,038 px** white, `margin-top:160px`, `padding:176px 0`.
   Left column **475** wide: 11.2 px/900 blue eyebrow, h2 48 px/900 black capped
   at 450 px ("We Value More on Quality and not in Quantity." wraps to 3 lines),
   grey paragraph, then a **2×2** counter grid (208×74 each) — 260 Fast Loading ·
   2,500 No. of Downloads · 87 Number of Person · 920 Chat Room, each 32 px blue
   icon + 56 px/700 numeral + 16 px grey label. Right: photo **540×679** with the
   **300×331** blue plate at (1083, 1100) — overhang −20 %/−20 %, 30 px padding,
   19.2 px/500 white title "Creativity is the key".
4. **Work** — **1,188 px** white. Eyebrow "Excellent Work" + h2 "Our Works" in a
   6-column block, then a **full-bleed** Owl carousel: 5 slides, **360×453**
   each (= 1440/4, `margin:0`, aspect 0.795), 4 visible ≥1200 / 3 ≥1000 / 2 ≥600
   / 1 below. Hover: `rgba(0,123,255,.8)` veil + scale 1.07 + caption at
   `top:10%; left:10%` (16 px/900 title + 12.8 px category). Dots: 2 in the
   source, 10 px circles, `#e6e6e6` → `#007bff`, 30 px below.
5. **Process** — **1,066 px** white. Eyebrow + h2 "Our Process", then three
   **350×401** columns at 390 pitch: 160 px/900 `whitesmoke` numeral (192 px box
   at x −30, top +50, z-index −1) **behind** a 56 px blue icon, a 24 px/700
   title (Research / Building / Launch) and a grey paragraph. No card surface.
6. **Services** — **1,381 px**, background **`#f8f9fa`**. Eyebrow + h2
   "Services", then a carousel of **6** white cards, **338** wide + **30** gaps
   (368 pitch), `padding:64px`, **no radius, no shadow**; 4 visible ≥1200, 3
   ≥1000, 2 ≥600 (20 px gaps), 1 below. Icons 56 px blue; titles 24 px/700.
   Cards: Auto Reload · Download Videos · Web Development · 24/7 Support ·
   Research · Creative Design.
7. **Contact** — **1,048 px** white. `h2` "Message Us" + paragraph in a **665**
   px centred column (x 388): First name + Last name on one row, then Subject,
   then Email, then a **635×254** textarea (rows=10), then a **302×52** blue
   submit "Send Message". Fields 43 px tall, 1 px `#ced4da`, radius 4,
   placeholder `#6c757d`, focus border `#007bff`.
8. **Footer** — **664 px** `#fafafa`, `padding:123.2px 0` (7em). Columns
   **380 / 285 / 380** (About · Links · Subscribe). Titles 14.4 px/900 uppercase
   with 1.6 px tracking; links `#007bff`; subscribe is a **joined 255 + 95 px**
   row (input + `#007bff` button), **43 px tall, 0 radius on both halves**.
   `#edf0f5` rule then a centred copyright line → Component Dock credit.

Mobile (390, doc **8,492**): header 85 px with hamburger only; hero still 900 px
with a full-bleed panel, 48 px headline, and a 351 px portrait left-flush;
about stacks (plate static above the photo, counters 1-up); one card per
carousel view (390×491 work, 390×433 services with 32 px padding); contact
full-width with a 360×52 submit; footer columns stacked 193/207/230.

## Task list (TDD order — tests first, per AGENTS.md rule 3)

1. **Scaffold** — copy the simplest existing app, rename the workspace to
   `@free-react-templates/uptempo`, set `homepage` + `public/CNAME` to
   `uptempo.free.componentdock.com`, keep `injectUiSource()` in `vite.config.ts`,
   keep `"react": "latest"`. Run `npm install` at the repo root **before**
   committing (lockfile registration).
2. **Tokens** — `@theme` in `src/index.css`: `--brand:#007bff`,
   `--ink:#000`, `--body:#808080`, `--surface-light:#f8f9fa`,
   `--surface-footer:#fafafa`, `--ghost:#f5f5f5`, `--rule:#edf0f5`,
   `--dot-idle:#e6e6e6`, `--field-border:#ced4da`, `--placeholder:#6c757d`,
   `--radius:4px`, `--font:"Muli", -apple-system, …`. Load
   `https://fonts.googleapis.com/css2?family=Muli:wght@300;400;700;900&display=swap`
   in `index.html` (all four weights are delivered by the source).
3. **Shell test (red)** — band order, single `h1`, `<title>`/meta for Uptempo,
   skip link → `main#main` focus, no ColorLib/amplify string in the bundle.
4. **Header** — wordmark, 4 links, Contact pill (outlined default, filled when
   the contact band is active), sticky inversion past 100 px, smooth scroll
   (600 ms) + hash update, mobile drawer with focus trap.
5. **Hero** — 70 % panel (`::before`-equivalent pseudo or absolutely positioned
   block), 48 px two-line `h1`, muted paragraph, outlined CTA, 600 px portrait
   with the measured shadow; 390 variant per delta #5.
6. **About** — eyebrow/h2/paragraph, four counters (static), photo + 300 px blue
   plate with −20 %/−20 % overhang on desktop and static stacking ≤991.
7. **Work carousel** — hand-rolled (no Owl dependency): 5 slides, 4/3/2/1
   responsive, hover veil + scale + caption, 5 dots, prev/next, autoplay with
   pause rules, dialog lightbox with focus return. Tests: slide count, visible
   count per breakpoint class, hover state class, dialog open/close/Escape,
   autoplay pauses on hover/focus/visibilitychange, reduced-motion disables.
8. **Process** — three beats, ghost numerals behind content (negative z-index),
   no surfaces.
9. **Services** — `#f8f9fa` band, 6 cards, 4/3/2/1 responsive with 30/20/0 gaps,
   icons from lucide, no shadow/radius.
10. **Contact** — 665 px column, 5 fields + textarea, local validation
    (`aria-invalid` + `role="alert"` + focus first invalid), success/clear.
11. **Footer** — three columns, square joined subscribe pair (local validation),
    `#edf0f5` rule, Component Dock credit + current year.
12. **Responsive pass** — 991 / 767 / 600 breakpoints per the spec; assert
    `scrollWidth === clientWidth` at 1440 / 991 / 767 / 390.
13. **Verify** — `scripts/verify-app.sh uptempo` (typecheck, lint, 100 %
    coverage, build), `openspec validate template-uptempo --type spec`, then PR
    + squash merge and the `[x]` bookkeeping on rows 2287 / 2379 / 2496.

## Fidelity notes (the things that are easy to get wrong)

- **The hero panel is 70 % of the VIEWPORT, not of the container** — 1008 px at
  1440, and 100 % below 992 px. `.intro-section` is `100vh` with
  `min-height:900px`, so on a 390-wide phone the hero is still **900 px** tall;
  the source does not shrink it.
- **The h1 never scales down** in the source (48 px at every width). That is a
  defect, not a design: keep 48 px from 768 up and clamp to ~34 px below.
- **The portrait is 600 px square** (`max-width:600px`, natural 665) at
  `right:10%`, `top:50%`, `translateY(-50%)` — it hangs over the panel's seam
  and onto the white half. Its shadow is the only photo shadow on the page.
- **The blue plate overhangs the photo on two axes** (−20 % top, −20 % right)
  and is flush with the viewport gutter at 1440 (x 1083 + 300 = 1383, i.e.
  inside the 1440 edge). Below 992 px it becomes a normal block above the photo.
- **The ghost numerals are behind the content** (`z-index:-1`) and 160 px with
  `line-height:0`; give them `aria-hidden` and keep them out of the text flow.
- **`.site-section` padding is declared three times** in the source sheet
  (`2.5em`, `5em ≥768`, then `10em`, and `4em ≤991`). Only the last of each pair
  wins → **176 px desktop / 70.4 px ≤991**. Do not add them up.
- **`.section-title` is capped at 450 px**, which is why the about heading runs
  to three lines. Keep the cap.
- **`.section-1` carries `margin-top:10rem`** — the about band starts 160 px
  below the hero, on top of its own 176 px padding.
- **Services cards have no shadow, no radius and 64 px padding** (32 px ≤991) —
  do not "modernise" them into rounded cards.
- **The footer subscribe control is square (radius 0)** while every other
  control is 4 px, and the two halves are joined with no gutter.
- **Two dots for five slides** is Owl's loop math collapsing; the React build
  needs five dots plus prev/next so every card is reachable (delta #9).
- **Autoplay**: both carousels autoplay unconditionally in the source. Keep
  autoplay but pause on hover/focus/hidden tab and disable it under
  `prefers-reduced-motion`.
- **No parallax**: stellar is loaded but nothing carries `data-stellar-*`; the
  `#date-countdown`, `.slide-one-item` and `.datepicker` bindings all target
  elements that do not exist. Do not invent those features.
- Images: `https://picsum.photos/seed/uptempo-<n>/<w>/<h>` (hero 600×600, about
  540×679, work slides 360×453); icons from `lucide-react`
  (`RotateCw`/`RefreshCw` reload, `Download`, `Monitor`, `MessageCircle`,
  `Glasses`, `PenTool`).

## Copy

Replace the source brand **Amplify** with **Uptempo** in the wordmark, the
about/footer headings and the `<title>`/meta. Keep the same *kind* of content:
a two-word advertising headline + one-line subtext + one outlined CTA; four
counters with a label each; five portfolio cards with a title + category; three
numbered process beats; six service cards; a five-field contact form; a footer
with about / links / subscribe and a Component Dock credit. The source copy is
Lorem ipsum (ColorLib demo filler) — paraphrase it into real agency copy. The
full live copy inventory is in `openspec/specs/template-uptempo/spec.md`
("Content inventory").
