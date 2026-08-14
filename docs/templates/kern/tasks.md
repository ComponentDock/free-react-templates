# Kern (ColorLib Bootstrap Buttons 06) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Kern** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 06"). Implementation
> ships on `feat/template-kern` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 06" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-06/). TEMPLATES.md
  row: line 667 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-06`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-06/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-06/` (HTTP 200,
  18.5KB HTML, `<title>Button #6</title>`; the nested `/bb/` subpath is the
  same pattern as Palette/01, Toggle/02, Float/03, Swell/04 and Slant/05).
  Stylesheets: `css/style.css` (2.7KB — ftco custom button rules, the token
  source), `css/bootstrap.min.css` (Bootstrap 4 — rest-state colors +
  `.btn-block`), plus an unused `fonts/icomoon` glyph font. JS bundle
  (jquery/popper/bootstrap + `js/main.js`) is inert on this page — it is a
  pure static showcase. Computed styles verified in a live browser
  2026-08-14: radius 4px, base 13px/8px-25px, sm 12px/5px-15px, lg
  16px/15px-30px, letter-spacing 1.6px (= .1rem), text-transform uppercase,
  no rest shadow, `.3s ease` transition; Warning and Light buttons have
  WHITE text (style.css `.btn { color:#fff }` overrides Bootstrap's dark
  defaults); White button `#fff`/`#000`; block button display:block
  width:100%.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-06/`. Mention this in the PR
  description.
- **✅ Heading is correctly numbered:** `h2` renders **"#06 — Bootstrap 4
  Buttons"** (em dash `&mdash;`) and the `<title>` is "Button #6" — both
  match the slug. UNLIKE the 05 sibling (Slant), the author updated the
  copy-pasted heading number, so there is NO artifact to preserve — just
  render "#06 — Bootstrap 4 Buttons" exactly. Use the app's own `<title>`
  (e.g. "Kern — Button Showcase") per repo convention.
- **✅ Screenshot consistent with live:** `bootstrap-buttons-06.jpg`
  (1200×972, browser-verified 2026-08-14) shows the same page — white
  background, "#06 – Bootstrap 4 Buttons" (en dash in the JPEG; the LIVE
  DOM's em dash is authoritative), three blue rectangular "BUTTON" size
  buttons, "Button Colors" caption, 19 color buttons in three rows (6+6+7,
  the WHITE button invisible except for its black "WHITE" label), and the
  full-width blue "BUTTON" at the bottom. Plain rectangles — consistent
  with the live render (NO skew in this template).
- **Signature = KERNING WHITE-WASH hover:** `.btn:hover, .btn:active,
.btn:focus { color:#000; background:#fff; letter-spacing:.2rem;
box-shadow: 0 15px 30px 0 rgba(0,0,0,.2); }` — every button (any color)
  turns WHITE with BLACK text, its label letter-spacing expands `.1rem →
.2rem`, and it gains a soft drop shadow, animated by the `.3s all ease`
  transition. `.btn:hover` specificity (0,2,0) beats `.btn-{color}` (0,1,0),
  so the white-wash overrides per-color backgrounds on hover. This is the
  name source: "kern" = letter-spacing.
- **⚠ Keep sibling signatures distinct:** NO `:before` white-wash layer
  (that's Swell / Bootstrap Buttons 04) and NO skew + inner un-skewing span
  (that's Slant / 05). Kern is plain rectangles + direct property-swap
  white-wash with expanding letter-spacing.
- **⚠ UPPERCASE labels:** this template HAS `text-transform: uppercase`
  (unlike Slant/05 which has none). DOM text is title-case ("Primary",
  "Blue Gray") but renders UPPERCASE ("PRIMARY", "BLUE GRAY"). Test queries
  must use the uppercase accessible names, or assert `toHaveStyle` /
  text-transform.
- **⚠ 19 colors (not 18):** Kern adds `btn-white` (`#fff`, black text) to
  the 18-color palette shared with the 05 sibling. `btn-light` is CUSTOM
  `#dae0e5` (NOT Bootstrap's `#f8f9fa`). `btn-secondary` has NO custom rule
  in style.css (only a comment) → falls back to Bootstrap `#6c757d`.
- **⚠ Color-row layout:** 19 buttons are NOT in one flat row — the source
  uses two `d-block` groups (6: Primary…Danger, 6: Light…Aqua) plus 7 loose
  buttons (Dark…White) → three visual rows of 6/6/7. Match this grouping.
- **⚠ Double-space artifact:** the block button's class attribute reads
  `class="btn  btn-primary btn-block"` (harmless double space in source).
  The heading text renders "Button" as title-case in DOM ("Button"), but
  the a11y name is "BUTTON" via uppercase.

## Implementation tasks (order)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/slant`), rename
   package to `@free-react-templates/kern`, register the workspace
   (`npm install --package-lock-only`), set `public/CNAME` to
   `kern.free.componentdock.com`, `homepage` to
   `https://kern.free.componentdock.com`.
2. **Tokens** — `@theme` in `index.css`: 19 color tokens (see spec token
   table) + page `#ffffff`; `--color-ink` `#212529` for heading; button
   tokens: radius 4px, uppercase, letter-spacing .1rem rest / .2rem hover.
3. **Fonts** — Roboto Google Fonts `<link>` in `index.html` (300–700);
   `<title>Kern — Button Showcase</title>`.
4. **Section component** — single `100vh` section, centered 10/12 column,
   heading "#06 — Bootstrap 4 Buttons" (em dash), then in order:
   size row (Large/Medium/Small + 3 blue "Button" buttons), "Button Colors"
   caption, 19 color buttons in 6/6/7 grouping, "Full width button" caption
   - full-width blue block button.
5. **Hover signature** — white-wash on hover/active/focus: bg `#fff`,
   text `#000`, letter-spacing `.2rem`, shadow `0 15px 30px 0
rgba(0,0,0,.2)`, `.3s all ease`; `focus-visible` ring (repo a11y
   convention).
6. **Footer** — minimal muted footer linking
   `https://www.componentdock.com/` ("Component Dock") — repo convention
   (original has none).
7. **Responsive** — relax `100vh` on small screens (auto min-height), rows
   wrap without horizontal overflow.
8. **Tests (TDD, 100% coverage)** — heading text/em dash, 3 sizes, 19
   colors + white text (Warning/Light white!), White button black text,
   uppercase labels, hover state assertions (class-based state or computed
   style), block button full width, footer link. Use `getByRole('button',
{ name: 'BUTTON' })` (uppercase a11y names) or assert text-transform.
9. **Gate + PR** — `scripts/verify-app.sh kern`, PR "Kern — recreation of
   ColorLib Bootstrap Buttons 06", merge immediately, then bookkeeping:
   TEMPLATES.md line 667 `[~]`→`[x]` + surge URL
   (`https://kern.free.componentdock.com`) + `npm run readme:status`.

## Pitfalls specific to this template

- Querying buttons by name: labels are UPPERCASE in the a11y tree
  ("PRIMARY", "BLUE GRAY", "BUTTON") — match the uppercase names, not the
  title-case DOM text.
- The White button is invisible against the white page at rest — tests
  must not rely on visible boundaries; assert its black text and that it is
  rendered (it is the 19th color button, between Blue Gray and the
  full-width button).
- Warning + Light have WHITE text (verified computed) — do NOT "fix" them
  to Bootstrap's dark default; the reference renders them white.
- Do NOT add an inner `<span>` to buttons (that's Slant's un-skew span;
  Kern has no skew) and do NOT add a `:before` hover layer (Swell's
  signature).
- The color-row grouping (6/6/7) is part of the reference layout — a flat
  19-button row would NOT be 1:1.
