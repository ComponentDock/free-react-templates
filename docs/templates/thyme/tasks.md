# Thyme (ColorLib Accordion 10) — Tasks & Design Notes

> Prep artifacts (spec + research) prepared on `main` by the prep stream.
> Implementation ships later on `feat/template-thyme` by an implementer
> stream — this folder is the handoff.

## Design notes

- **Original:** ColorLib "Accordion 10" — free single-page goals-and-steps
  accordion component template (source:
  https://colorlib.com/wp/template/accordion-10/). TEMPLATES.md row: line
  648 (**Bootstrap Accordions (20)**). The `accordion-10` slug appears
  exactly once (no dup rows to mark).
- **Recreation name:** Thyme (the culinary herb — same botanical family as
  Mentha 03, Kelp 05, Clover 06, Sprig 09; the other accordion names are
  Pleat 01, Forkful 02, Stash 04, Gusset 07, Crimp 08). App folder
  `apps/thyme`, package `@free-react-templates/thyme`, `public/CNAME` =
  `thyme.free.componentdock.com`, `"homepage"` =
  `https://thyme.free.componentdock.com`.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/accordion-10/` returns 404 —
  the REAL preview is `https://preview.colorlib.com/theme/bac/accordion-10/`
  (HTTP 200, 12,823 bytes HTML; same `/bac/` subpath pattern as Accordion
  01–09). Stylesheet: `css/style.css` (222.8KB = bootstrap + custom
  tokens) + Ionicons 4.5.6 CDN for the glyphs (rendered via the Ionicons
  font-family trick on `<i class="fa">`). Screenshot
  (`accordion-10.jpg`, 1200×972 AVIF) browser-verified 2026-08-14 AND
  cross-checked with browser-computed styles on the live page (exact
  colors below).
- **DARK THEME — do NOT copy Sprig's beige/light styling.** This template
  is visually the OPPOSITE of Accordion 09: slate page, navy bars, sky-blue
  accent. Fidelity is about the dark palette + the arrow state signal.
- **Heading:** the `h2` says "Accordion #10" (WITH the `#`); the source
  `<title>` drops it ("Accordion 10"). Recreate the h2 VERBATIM as
  "Accordion #10". App `<title>` = "Thyme — Goals & Steps Accordion".
- **Computed-style-verified rendering (live page, 2026-08-14):** page bg
  `rgb(78,94,108)` = `#4e5e6c` slate; heading "Accordion #10" 28px `#fff`
  (mb 48px, pb 24px, centered, weight 400); accordion container
  `col-md-7 col-lg-6 col-xl-5` (≈445px at 1280 viewport — NARROWER than
  Sprig, extra `col-xl-5`), radius 0, overflow hidden; cards FLUSH
  (margin-bottom 0), no border, transparent. Bars: `#1c2938` navy in BOTH
  states, padding 16px 24px, radius 0, Poppins 18px, border-bottom
  `1px solid rgba(255,255,255,0.1)` (separator), shadow
  `0 7px 24px -19px rgba(0,0,0,0.32)`. h3 16px `#fff` weight 400 left;
  two block spans — first = 14px uppercase "STEP 0N" label. Glyph flush
  right, NO background box: closed = white 20px arrow-down; open = sky
  blue `#38ade0` 20px arrow-up + shadow deepens to `rgba(0,0,0,0.5)`.
  Card-body: bg `#253447`, shadow `0 7px 24px -19px rgba(0,0,0,0.22)`;
  card 1 `p-0 py-3` (16px vertical, 0 horizontal), cards 2–4 `p-4`
  (24px). Body copy `rgba(255,255,255,0.8)` 15px / 27px.
- **Structure observed (1:1):** `section.ftco-section` (padding 7em 0 =
  105px) → `col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
  "Accordion #10" → `row.justify-content-center` → `col-md-7.col-lg-6.col-xl-5`
  → `div#accordion.myaccordion.w-100` → 4 `.card` panels:
  1. **"Step 01 Identify Your Goals"** — header button `d-flex px-4 py-3
align-items-center justify-content-between btn btn-link`, NO `.collapsed`,
     `aria-expanded="true"`; body `collapse show` → `card-body.p-0.py-3` →
     `ul` with FOUR `li` rows: `a.d-flex` (padding 15px 30px) →
     `span.icon.ion-ios-checkmark-circle-outline` (24px `#38ade0`, mr
     10px, mt -5px) + `p` (`rgba(255,255,255,0.8)` 15px, mb 0). Row
     separators: border-bottom `1px solid #1c2938`, border-top
     `1px solid rgba(255,255,255,0.03)`; first row no top border, last
     row no bottom border. Copy (verbatim): "Far far away, behind the
     word mountains." / "A small river named Duden flows by their." /
     "When she reached the first hills of the Italic." / "Separated they
     live in Bookmarksgrove."
  2. **"Step 02 Write Your Goals"** — `.collapsed`, `aria-expanded="false"`;
     body `collapse` → `card-body.p-4` → single paragraph.
  3. **"Step 03 Need Analysis"** — same as card 2, single paragraph.
  4. **"Step 04 List Objectives"** — same as card 2, single paragraph.
     NO footer in the original — add the mandatory Component Dock
     attribution footer.
- **State CSS (recreate via `aria-expanded`-driven Tailwind):**
  - `button[aria-expanded="true"]`: bg STAYS `#1c2938 !important` (no
    inversion!), shadow `rgba(0,0,0,0.5) !important`, glyph
    `#38ade0 !important` (`button[aria-expanded="true"] .fa`).
  - `button[aria-expanded="false"]`: bg `#1c2938` (the sheet's
    `background-color: #fff` rule LOSES specificity 0,1,1 vs
    `.myaccordion .btn` 0,2,0 — computed confirms navy), glyph white.
  - Glyph swap: open = `\f3d8` (Ionicons `ios-arrow-up` → UP arrow),
    closed = `\f3d0` (Ionicons `ios-arrow-down` → DOWN arrow) — recreate
    with lucide-react `ChevronUp` / `ChevronDown` at 20px. Do NOT copy
    the icon font.
- **Design tokens:** page `#4e5e6c` slate; bars `#1c2938` navy (both
  states); card-body `#253447`; accent `#38ade0` sky blue (open glyph +
  checkmark icons); `#fff` heading/h3/closed glyphs; copy
  `rgba(255,255,255,0.8)`; separators `rgba(255,255,255,0.1)` /
  `rgba(255,255,255,0.03)`; shadows `0 7px 24px -19px` at
  `rgba(0,0,0,.32)` / `.5` / `.22`; radii ALL 0; section padding 7em 0;
  cards flush; bar padding 16px 24px; open body `p-0 py-3` + rows 15px
  30px; closed bodies `p-4`; font Poppins (28px heading, 18px bar, 16px
  h3, 14px uppercase label, 15px body, 20px glyphs, 24px checkmarks).
- **Design approach:** dark goal-planning checklist — ONE component
  surface. Fidelity is about: the NARROW `col-md-7 col-lg-6 col-xl-5`
  centered column, the flat square-corner navy aesthetic, the flush card
  stack separated by hairline borders, the two-line step labels, and
  above all the SUBTLE state signal (blue up-arrow + deeper shadow, no
  bar color change) driven by `aria-expanded`. Default `openIndex = 0`
  (card 1). Keep the footer tiny and muted.
- **No images anywhere** — the open panel is a text checklist (unlike
  Sprig's image|text row), so NO picsum placeholders are needed.
- **Copy:** the four step titles are the identity of the template —
  verbatim: "Step 01 Identify Your Goals" / "Step 02 Write Your Goals" /
  "Step 03 Need Analysis" / "Step 04 List Objectives" (with the "STEP 0N"
  label as the first block span). Checklist rows + paragraph bodies: the
  source's "Far far away…" lorem may be paraphrased into real
  goal-planning copy or kept lorem-style — same KIND of content.

## Implementation tasks

1. **Scaffold** — `apps/thyme` from the simplest existing app; rename
   package to `@free-react-templates/thyme`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `thyme.free.componentdock.com`,
   `"homepage"` = `https://thyme.free.componentdock.com`.
2. **Theme tokens** — add `#4e5e6c` / `#1c2938` / `#253447` / `#38ade0` /
   `#ffffff` (+ the `rgba(255,255,255,…)` and `rgba(0,0,0,…)` tints) to
   `@theme`; Poppins Google Fonts `<link>` in `index.html`; shadows via
   Tailwind arbitrary values or tokens.
3. **Components** (per section, TDD — tests first):
   - `StepsAccordion` (or `ThymeAccordion`) — the core component: takes
     step data (label, title, body kind: `checklist` | `text`), holds
     `openIndex` state (default 0, only one open), renders toggle bars
     (full width, `aria-expanded`/`aria-controls`, `#1c2938` in both
     states, white `ChevronDown` closed / blue `ChevronUp` open, deeper
     open shadow) + bodies (`role="region"`, `aria-labelledby`; card 1 =
     checklist of 4 rows with `CheckCircle2` icons + hairline
     separators, cards 2–4 = single paragraph).
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: heading "Accordion #10" → card 1
   "Step 01 Identify Your Goals" (OPEN, checklist body) → card 2 "Step 02
   Write Your Goals" (closed, paragraph) → card 3 "Step 03 Need Analysis"
   (closed, paragraph) → card 4 "Step 04 List Objectives" (closed,
   paragraph) → footer.
5. **Verify** — `scripts/verify-app.sh thyme` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 10" row (line 648, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description MUST list: source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-10/` — note the `/bac/`
   subpath), design tokens, the DARK-palette difference vs Sprig
   (Accordion 09), and paraphrased checklist/body copy.
