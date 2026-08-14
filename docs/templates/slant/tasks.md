# Slant (ColorLib Bootstrap Buttons 05) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Slant** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 05"). Implementation
> ships on `feat/template-slant` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 05" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-05/). TEMPLATES.md
  row: line 666 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-05`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-05/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-05/` (HTTP 200,
  18.5KB HTML, `<title>Button #1</title>`; the nested `/bb/` subpath was
  discovered by scraping the ColorLib template page, which links to it —
  same pattern as Palette/Bootstrap Buttons 01, Toggle/02, Float/03 and
  Swell/04). Stylesheets: `css/style.css` (4.0KB — ftco custom button
  rules, the token source), `css/bootstrap.min.css` (Bootstrap 4 —
  rest-state colors + `.btn-block`), plus an unused `fonts/icomoon` glyph
  font. JS bundle (jquery/popper/bootstrap + `js/main.js`) is inert on
  this page — it is a pure static showcase. Screenshot
  (`bootstrap-buttons-05.jpg`, 1200×972) browser-verified 2026-08-14: same
  layout/palette/copy but renders the buttons as PLAIN RECTANGLES — the
  screenshot predates the skew (see the skew quirk below). Computed styles
  verified in a live browser: `.btn` transform `matrix(1, 0, -0.383864, 1,
0, 0)` (= skew −21°), `.btn > span` transform `matrix(1, 0, 0.383864, 1,
0, 0)` (= skew +21°), border-radius 5px, no uppercase, no rest shadow.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-05/`. Mention this in the PR
  description.
- **⚠ Heading-number quirk (copy-paste artifact):** the page `<title>` is
  "Button #1" but the visible `h2` heading renders **"#02 — Bootstrap 4
  Buttons"** (em dash `&mdash;`) — even though this is the
  `bootstrap-buttons-05` slug, the author copied an earlier sibling and
  never updated the number. Fidelity mandate: render the h2 EXACTLY as
  "#02 — Bootstrap 4 Buttons", em dash included. Do NOT "correct" it to
  "#05". Use the app's own `<title>` (e.g. "Slant — Button Showcase") per
  repo convention.
- **⚠ SKEW quirk (screenshot vs live):** the TEMPLATES.md screenshot shows
  rectangular buttons, but the LIVE page renders every button as a
  left-leaning parallelogram (`skew(-21deg)`) with straight text (inner
  span `skew(21deg)`). The live DOM + CSS is AUTHORITATIVE — the slant IS
  the template's signature and MUST be implemented. The static screenshot
  simply predates/omits the transform.
- **⚠ Single-section quirk:** like the 04 sibling (Swell), THIS template is
  ONE `100vh` section with 18 SOLID buttons only. No outline variants. But
  unlike Swell: buttons carry an inner `<span>` wrapping the label (plain
  span, no classes — required for the un-skew), there is NO white-wash
  `:before` hover, and there is NO `text-transform: uppercase` (labels
  render title-case: "Button", "Primary", ...).
- **⚠ Not a classic page template:** there is NO navbar, NO hero, NO
  imagery, NO footer in the original — the entire page is a single-section
  button showcase. Fidelity = section order, exact button labels/variants,
  the 18-color palette + hover colors, paddings/radii/shadows, the slant
  transform, and the diagonal-shadow hover. The only added element is the
  mandatory Component Dock attribution footer.
- **Structure observed (1:1):** one `div.container.content` (`height:
100vh`) → `row align-items-center content justify-content-center` →
  `col-md-10 text-left`. Heading `h2.mb-5` **"#02 — Bootstrap 4 Buttons"**
  → `div.d-block.mb-5 d-flex` size row (3 × `div.mb-3.mr-3`: centered
  `<small>` caption `Large`/`Medium`/`Small` above `btn-primary btn-lg` /
  `btn-primary` / `btn-primary btn-sm` "Button") → centered `<small>`
  **"Button Colors"** → `div.mb-5` with 18 `btn mb-3 mr-3 btn-{color}`
  buttons (Primary, Secondary, Success, Info, Warning, Danger, Light,
  Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue,
  Brown, Blue Gray) → `div.mb-3.mr-3` with centered `<small>` **"Full
  width button"** + `btn btn-primary btn-block` "Button".
- **Button anatomy:** `<button class="btn ..."><span>Button</span></button>`
  — label wrapped in a plain inner `<span>` (no classes). REQUIRED: the
  span un-skews the text.
- **Signature slant (name source):** `.btn { transform: skew(-21deg);
position: relative; }` — parallelogram leaning LEFT at rest (computed
  `matrix(1, 0, -0.383864, 1, 0, 0)`). `.btn > span { display:
inline-block; transform: skew(21deg); }` — label straightened (computed
  `matrix(1, 0, 0.383864, 1, 0, 0)`). Skew persists through
  hover/active/focus.
- **Hover/active/focus:** `.btn:hover, .btn:active, .btn:focus` — dead
  `box-shadow: none` followed by `-14px 14px 30px 0 rgba(0,0,0,.15)`
  `!important` (diagonal drop shadow, offset down-right) + per-color
  LIGHTENED background (see token list). No `!important` bg overrides, no
  white wash. Pure CSS; no JS.
- **Design tokens (from `style.css` — ftco overrides the Bootstrap
  defaults; rest → hover):** page `#fff`; font **Roboto**; heading 20px
  Roboto dark; buttons — primary `#007bff` → `#3395ff`, secondary
  `#6c757d` → `#868e96`, success `#28a745` → `#34ce57`, info `#17a2b8` →
  `#1fc8e3`, warning `#ffc107` → `#ffce3a` (DARK text `#212529`), danger
  `#dc3545` → `#e4606d`, light `#f8f9fa` → `#e2e6ea` (DARK text `#212529`;
  Bootstrap hover, no custom rule), orange `#fd7e14` → `#fd9a47`, indigo
  `#6610f2` → `#8540f5`, pink `#e83e8c` → `#ed6ca7`, deep orange
  `#ffac8e` → `#ffd1c1`, aqua `#3fc5f0` → `#6ed3f4`, dark `#393e46` →
  `#505762`, black `#000` → `#1a1a1a`, purple `#6f42c1` → `#8c68ce`, blue
  `#007bff` → `#3395ff` (same as primary), brown `#a0855b` → `#b49d7a`,
  blue gray `#3f4d71` → `#516392` — all white text except Warning/Light.
  Button base: 13px / `8px 25px`, `border-radius: 5px` (LAST declaration
  wins — intermediate `4px` is dead), `border: none`, `letter-spacing:
.02rem`, `.3s all ease` transition, NO rest shadow. Sizes: `btn-sm`
  12px/`5px 15px`, `btn-lg` 16px/`15px 30px`. `.btn-block` =
  `display:block; width:100%`. Section captions = Bootstrap `<small>`
  (12.8px) in centered `div.text-center`. Spacing: `mb-5` = 3rem,
  `mb-3 mr-3` = 1rem.
- **Recreation notes:**
  - Implement the slant with Tailwind arbitrary transforms: on the button
    `-skew-x-12`-style class won't match −21° — use `transform: skew(-21deg)`
    via arbitrary value (e.g. `[transform:skew(-21deg)]`) or a small CSS
    rule; the label span gets `[transform:skew(21deg)]` +
    `inline-block`. Keep the button `relative`; wrap the label in a span.
    Test the computed transform matrices in a test if feasible
    (identity checks via inline style assertions are fine).
  - Hover: `transition-all duration-300 ease-in-out` (`.3s all ease`);
    hover bg = per-color lighter value + shadow
    `[-14px_14px_30px_0_rgba(0,0,0,.15)]` — Tailwind arbitrary shadow or a
    token. No rest shadow.
  - Buttons are `<button>` elements (not links) in the reference. `rounded`
    (5px — Tailwind `rounded-[5px]` or `rounded` + token), no border,
    `tracking-[0.02em]` for `.02rem` letter-spacing.
  - `focus-visible` ring per repo convention (reference applies the
    diagonal shadow on `:focus` but that is not a sufficient a11y focus
    indicator).
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap dependency; no jquery. NO `text-transform: uppercase` — keep
    labels title-case as written.
  - ONE section only — a single `KitSection`/`Showcase` component; no
    variant parameter needed (no Solid/Outline split).
  - Mobile: relax the reference's fixed `100vh` (use `min-h-screen` or
    auto) so content never clips; keep `col-md-10` → full width below md.
  - Icons: none on this page — plain text labels only (no lucide needed).
  - Footer: minimal muted "More templates at Component Dock" linking
    https://www.componentdock.com/.

## Tasks (implementer checklist)

1. [ ] `feat/template-slant` branch from latest main
2. [ ] Scaffold app `apps/slant` (copy simplest existing app; rename
       package to `@free-react-templates/slant`; `npm install` at root
       BEFORE committing so `package-lock.json` registers the workspace;
       `public/CNAME` = `slant.free.componentdock.com`; `"homepage"` =
       `https://slant.free.componentdock.com`; vite.config.ts keeps
       `injectUiSource()`)
3. [ ] Write spec-driven tests first (TDD, 100% coverage required):
       page structure, heading text (em dash, "#02" — NOT "#05"),
       size row, color row (18 buttons + palette + dark-text
       Warning/Light), full-width button, slant transform (skew −21° on
       button, +21° on inner span), hover (lightened bg + diagonal
       shadow `-14px 14px 30px 0 rgba(0,0,0,.15)`), focus-visible,
       responsive, footer
4. [ ] Implement `src/App.tsx` + `src/components/` (e.g. `KitSection.tsx`,
       `SlantButton.tsx`; `Navbar`/`Hero` not needed — none in reference;
       add the muted Component Dock footer)
5. [ ] Tokens in `src/index.css` `@theme` (see design tokens list —
       include rest + hover color pairs)
6. [ ] `scripts/verify-app.sh slant` green (typecheck + lint + vitest 100% + build); `npm run spec:validate` for `template-slant`
7. [ ] PR: "feat: add Slant (ColorLib Bootstrap Buttons 05 recreation)"
       — description MUST include: source template + preview URL (note the
       `/bb/` quirk AND the "#02 heading" artifact AND the screenshot-vs-
       live skew discrepancy), design tokens used, what differs (renames,
       placeholders)
8. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
9. [ ] After merge: TEMPLATES.md "Bootstrap Buttons 05" row (line 666)
       `[~]` → `[x]` + `https://slant.free.componentdock.com` + `npm run
    readme:status`; push
