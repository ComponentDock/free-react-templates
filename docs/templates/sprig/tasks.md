# Sprig (ColorLib Accordion 09) — Tasks & Design Notes

> Prep artifacts (spec + research) prepared on `main` by the prep stream.
> Implementation ships later on `feat/template-sprig` by an implementer
> stream — this folder is the handoff.

## Design notes

- **Original:** ColorLib "Accordion 09" — free single-page FAQ / help-
  center accordion component template (source:
  https://colorlib.com/wp/template/accordion-09/). TEMPLATES.md row: line
  647 (**Bootstrap Accordions (20)**). The `accordion-09` slug appears
  exactly once (no dup rows to mark).
- **Recreation name:** Sprig ("a small shoot or twig of a plant" — the
  help-center branch theme; same family as Pleat 01, Forkful 02, Mentha
  03, Stash 04, Kelp 05, Clover 06, Gusset 07, Crimp 08). App folder
  `apps/sprig`, package `@free-react-templates/sprig`, `public/CNAME` =
  `sprig.free.componentdock.com`, `"homepage"` =
  `https://sprig.free.componentdock.com`.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/accordion-09/` returns 404 —
  the REAL preview is `https://preview.colorlib.com/theme/bac/accordion-09/`
  (HTTP 200, 11,126 bytes HTML; same `/bac/` subpath pattern as Accordion
  01–08). Stylesheet: `css/style.css` (221.9KB = bootstrap + custom
  tokens) + Ionicons 4.5.6 CDN for the plus/minus glyphs (rendered via the
  Ionicons font-family trick on `<i class="fa">`). Screenshot
  (`accordion-09.jpg`, 1200×972 AVIF) browser-verified 2026-08-14 AND
  cross-checked with browser-computed styles on the live page (exact
  colors below).
- **NO stale-heading artifact this time:** the source title tag AND the
  `h2` both say "Accordion #09" — recreate the heading VERBATIM as
  "Accordion #09" (unlike Crimp/Accordion 08's "#04" copy-paste bug). App
  `<title>` = "Sprig — FAQ Accordion".
- **Computed-style-verified rendering (live page, 2026-08-14):** page bg
  `rgb(216,203,187)` = `#d8cbbb` beige; heading "Accordion #09" 28px `#000`
  (mb 48px, pb 24px, centered); accordion container `col-md-7 col-lg-6`
  (≈58% width — WIDER than Crimp's `col-md-6`), radius 0, overflow
  hidden; cards `margin-bottom: 20px`, no border, transparent. Bars:
  height 60px (driven by the 60×60 icon square), left padding 24px
  (`pl-4`), Poppins 18px, radius 0, shadow `0 7px 24px -19px`. CLOSED bar:
  bg `#fff`, h3 `#000` 16px, icon square green `#37c46f` + WHITE plus
  glyph. OPEN bar: bg `#37c46f`, h3 WHITE, icon square WHITE + GREEN minus
  glyph (`iconBg rgb(255,255,255)`, `glyphColor rgb(55,196,111)` — the
  state rules use `!important` and invert square+glyph colors). Card-body:
  bg `#fff`, padding 24px (`p-4`), `margin-bottom: 1px`, shadow
  `0 7px 24px -19px rgba(0,0,0,0.22)`. Body copy: gray 15px / 27px
  line-height, paragraph `margin-bottom: 16px`.
- **Structure observed (1:1):** `section.ftco-section` (padding 7em 0 =
  105px, beige) → `col-md-12.text-center` → `h2.heading-section.mb-5.pb-md-4`
  "Accordion #09" → `row.justify-content-center` → `col-md-7.col-lg-6` →
  `div#accordion.myaccordion.w-100` → 3 `.card` panels:
  1. **"How to manage account?"** — header button `d-flex pl-4
align-items-center justify-content-between btn btn-link`, NO
     `.collapsed`, `aria-expanded="true"`; body `collapse show` →
     `card-body.p-4` → `div.row` → `col-md-6 d-flex align-items-stretch`
     with `div.img w-100 d-flex` (bg image `images/img.jpg`, 800×800,
     cover, centered — full row height on desktop) + `col-md-6` with one
     paragraph ("Far far away…" placeholder).
  2. **"How to become Pro"** — `.collapsed`, `aria-expanded="false"`;
     body `collapse` → single paragraph.
  3. **"How to create an account?"** — same as card 2, single paragraph.
     NO footer in the original — add the mandatory Component Dock attribution
     footer.
- **State CSS (recreate via `aria-expanded`-driven Tailwind):**
  - `button[aria-expanded="true"]`: bg `#37c46f !important`, h3 `#fff`,
    `.icon` bg `#fff !important`, glyph `#37c46f !important`; shadow
    `rgba(0,0,0,0.5)`; 0.3s transition.
  - `button[aria-expanded="false"]`: `background-color: #fff` (h3 `#000`,
    `.icon` green, glyph white — the base rules).
  - Glyph swap: open = `\f1fc` (Ionicons `ios-remove` → MINUS), closed =
    `\f102` (Ionicons `ios-add` → PLUS) — recreate with lucide-react
    `Minus` / `Plus` at 20px. Do NOT copy the icon font.
- **Design tokens:** page `#d8cbbb` beige; green accent `#37c46f` (open
  bar, closed icon squares, links); bars `#fff` (closed) / `#37c46f`
  (open); icon squares 60×60 (green+white plus closed / white+green minus
  open); heading `#000` 28px; closed text `#000`; open text `#fff`; body
  copy gray 15px/27px; shadows `0 7px 24px -19px` at `rgba(0,0,0,.32)` /
  `.5` / `.22`; radii ALL 0 (square aesthetic — no rounded corners
  anywhere, unlike Crimp); section padding 7em 0; card gap 20px; card-body
  padding 24px; font Poppins (18px bars, 16px h3, 15px body, 20px glyphs).
- **Design approach:** minimal FAQ help-center — ONE component surface.
  Fidelity is about: the WIDE `col-md-7 col-lg-6` centered column, the
  flat square-corner aesthetic, the soft 24px-tall shadows, the 20px card
  gaps, and above all the STATE INVERSION (green↔white bar + square, text
  white↔black, minus↔plus) driven by `aria-expanded`. Default
  `openIndex = 0` (card 1). Body of card 1 = image|text row (image stacks
  ABOVE text at 200px on mobile). Keep the footer tiny and muted.
- **Placeholders:** one image — the open panel's left photo (source
  `images/img.jpg` 800×800 wine rack) → `https://picsum.photos/seed/sprig-1/800/800`.
- **Copy:** three FAQ questions (verbatim — they're the identity of the
  template): "How to manage account?" / "How to become Pro" / "How to
  create an account?". Bodies: short help-copy paragraphs (the source's
  "Far far away…" lorem may be paraphrased into real FAQ answers or kept
  lorem-style — same KIND of content).

## Implementation tasks

1. **Scaffold** — `apps/sprig` from the simplest existing app; rename
   package to `@free-react-templates/sprig`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `sprig.free.componentdock.com`,
   `"homepage"` = `https://sprig.free.componentdock.com`.
2. **Theme tokens** — add `#ffffff` / `#000000` / `#37c46f` / `#d8cbbb`
   (+ the `rgba(0,0,0,…)` shadow tints) to `@theme`; Poppins Google Fonts
   `<link>` in `index.html`; shadows via Tailwind arbitrary values or
   tokens.
3. **Components** (per section, TDD — tests first):
   - `FaqAccordion` (or `SprigAccordion`) — the core component: takes
     card data (question, icon, body kind: `imageText` | `text`), holds
     `openIndex` state (default 0, only one open), renders toggle bars
     (full width, `aria-expanded`/`aria-controls`, state-styled: closed
     white bar + green square/white `Plus`; open green bar + white
     square/green `Minus`) + bodies (`role="region"`,
     `aria-labelledby`; card 1 = image|text row with the picsum image,
     cards 2–3 = single paragraph; mobile: image 200px above text).
   - `FaqCard` (optional split) — bar + body pair if the accordion gets
     large; otherwise keep it one component.
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: heading "Accordion #09" → card 1
   "How to manage account?" (OPEN, image+text body) → card 2 "How to
   become Pro" (closed, paragraph) → card 3 "How to create an account?"
   (closed, paragraph) → footer.
5. **Verify** — `scripts/verify-app.sh sprig` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Accordion 09" row (line 647, Bootstrap
   Accordions) `[~]`→`[x]` + surge URL + `npm run readme:status`; PR
   description MUST list: source template, the REAL preview URL
   (`preview.colorlib.com/theme/bac/accordion-09/` — note the `/bac/`
   subpath), design tokens, the image swap (wine-rack photo → picsum
   `seed/sprig-1`), and paraphrased FAQ copy.
