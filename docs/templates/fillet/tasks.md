# Fillet (ColorLib Bootstrap Buttons 09) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Fillet** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 09"). Implementation
> ships on `feat/template-fillet` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 09" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-09/). TEMPLATES.md
  row: line 670 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-09`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-09/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-09/` (HTTP 200,
  18.2KB HTML, `<title>Button #9</title>`, heading
  `#09 &mdash; Bootstrap 4 Buttons`; same nested `/bb/` subpath as
  "Bootstrap Buttons 01"–08). Stylesheets: `css/bootstrap.min.css` (160KB —
  Bootstrap 4 base; **byte-identical to the 08 variant's copy**),
  `css/style.css` (4.5KB — the custom rounded-button theme + 2px borders +
  extended colors + fill→outline hover; the token source),
  `fonts/icomoon/style.css` (loaded but UNUSED). JS is vestigial (jQuery +
  Bootstrap bundle; nothing on the page is interactive). Screenshot
  (`bootstrap-buttons-09.jpg`, 1200×972) browser-verified 2026-08-14:
  white page, "#09 – Bootstrap 4 Buttons" heading top-left, three blue size
  buttons with small labels, an 18-button color grid wrapping 7 + 7 + 4 at
  1200px, one full-width blue button at the bottom. No navbar, no footer,
  no images. The screenshot's slightly-rounded corners MATCH the CSS
  `border-radius: 4px`.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-09/`. Mention this in the PR
  description.
- **⚠ Not a classic page template:** NO navbar, NO hero, NO imagery, NO
  forms, NO footer in the original — the entire page is a static centered
  button showcase. Fidelity = the heading copy, the three block order, the
  exact size/color variants, the rounded + title-case styling, and the
  token values. The only added element is the mandatory Component Dock
  attribution footer.
- **⚠ DIFFERENT from BB 08 (Bevel) and BB 07 (Spectrum) — do not copy their
  tokens:** BB 09 buttons are ROUNDED (`border-radius: 4px`, NOT Bevel's
  square 0px and NOT Spectrum's 30px pill), base font 14px bold (NOT
  Bevel's 12px / Spectrum's 13px), labels are TITLE-CASE with NO
  `text-transform: uppercase` and NO `letter-spacing` (Bevel uppercases
  with `.05rem` spacing), and the hover is a **fill→outline inversion**:
  `.btn:hover/:active/:focus` sets `box-shadow: none; color: #000` and each
  color rule sets `background: #fff` — background flips WHITE, text flips
  BLACK, and the 2px solid color border stays. There is NO white sweep
  overlay (Bevel's `.btn:before`), NO darkened hover background, NO
  `top: -1px` lift, and NO hard shadow (Spectrum). Buttons have NO inner
  `<span>` (Bevel wraps labels in a span) — text is a direct text node.
- **⚠ Primary is special:** `btn-primary` keeps the transparent 2px base
  border at rest (Bootstrap bg `#007bff`, white text) and only gains
  `border: 2px solid #007bff; background: #fff` on hover — the border
  _appears_ with the white fill. All other variants declare their 2px
  color border at rest (`btn-secondary`/`btn-success`/`btn-info`/
  `btn-warning`/`btn-danger` get a border rule in style.css; the extended
  colors Orange…Blue Gray get explicit `background-color` + `color: #fff`
  - `border: 2px solid <color>`).
- **⚠ Warning and Light use dark text:** `btn-warning` rest text is
  Bootstrap's `#212529` (not white); `btn-light` is `#f8f9fa` bg with
  `#000` text (style.css sets `color: #000`) and a `#f8f9fa` border.
- **Structure observed (1:1):** `body` (white, Roboto) →
  `div.container.content` (padding `7rem 0` = 112px) →
  `div.row.align-items-center.justify-content-center` →
  `div.col-md-10.text-left` → `h2.mb-5` ("#09 — Bootstrap 4 Buttons",
  20px, `#212529`, mb 3rem) → Sizes block (`div.d-block.mb-5.d-flex`: 3 ×
  `div.mb-3.mr-3`, each `div.text-center > small` label + one
  `button.btn.btn-primary` at `btn-lg` / base / `btn-sm`, text "Button")
  → Button Colors block (`div.mb-3` label row `Button Colors`, then
  `div.mb-5` with 18 buttons `btn mb-3 mr-3 btn-<color>`, each with direct
  text label) → Full width button block (`div.mb-3.mr-3`: label `Full
width button` + `button.btn.btn-primary.btn-block` "Button"). NO footer
  — add Component Dock.
- **Design tokens (from `bootstrap.min.css` + `style.css` + screenshot):**
  page `#fff`; heading 20px `#212529`; `<small>` labels 12.8px (80%)
  `#212529` weight 400; font **Roboto** (body + headings); `.btn` custom:
  radius **4px**, 14px bold, padding `8px 25px`, title-case (NO
  uppercase), `border: 2px solid transparent` (base), transition `.3s all
ease`; `.btn-sm` 10px / `5px 15px`; `.btn-lg` 16px / `15px 30px`;
  `.btn-block` `display:block; width:100%`. Hover: `box-shadow: none;
color: #000` + per-color `background: #fff` (fill→outline inversion;
  border stays). 18 colors: primary `#007bff` (rest border transparent;
  hover border `#007bff` + bg `#fff`), secondary `#6c757d` (2px border),
  success `#28a745`, info `#17a2b8`, warning `#ffc107` (rest text
  `#212529`), danger `#dc3545`, light `#f8f9fa` (text `#000`, border
  `#f8f9fa`), orange `#fd7e14`, indigo `#6610f2`, pink `#e83e8c`, deep
  orange `#ffac8e`, aqua `#3fc5f0`, dark `#393e46`, black `#000`, purple
  `#6f42c1`, blue `#007bff`, brown `#a0855b`, blue gray `#3f4d71` — the
  extended colors all declare explicit bg + `color: #fff` + 2px border.
  All solid text white except Warning + Light (dark text).
- **Design approach:** flat white kit page — pure typography + button
  variants. Each block is a label + button row(s); spacing rhythm from the
  reference's `mb-3`/`mr-3`/`mb-5` gaps and `7rem 0` content padding
  (scale down on mobile). The brand identity is the 18-color palette —
  put the colors + the white-inversion hover in `@theme` and drive
  everything with Tailwind classes.
- **Hover implementation note:** the reference is pure CSS
  `.btn:hover/:active/:focus` — `box-shadow: none; color: #000` plus
  per-color `background: #fff`; the 2px border persists (Primary's appears
  on hover). In React + Tailwind use `hover:bg-white hover:text-black`
  (with `hover:border-<color>` / `hover:border-primary` for Primary) — keep
  it CSS-only (no JS), and DO NOT add a sweep overlay, darkened hover bg,
  lift, or shadow (those were BB 08 / BB 07 behaviors).
- **Copy:** keep the exact reference labels — "#09 — Bootstrap 4 Buttons"
  (em-dash as rendered), "Large / Medium / Small", "Button Colors", the
  18 color names (`Primary`, `Secondary`, `Success`, `Info`, `Warning`,
  `Danger`, `Light`, `Orange`, `Indigo`, `Pink`, `Deep Orange`, `Aqua`,
  `Dark`, `Black`, `Purple`, `Blue`, `Brown`, `Blue Gray`), "Full width
  button", and the button label "Button" (title-case — the reference has
  NO uppercase transform on this variant).

## Implementation tasks

1. **Scaffold** — `apps/fillet` from the simplest existing app; rename
   package to `@free-react-templates/fillet`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `fillet.free.componentdock.com`,
   `"homepage"` = `https://fillet.free.componentdock.com`.
2. **Theme tokens** — add the palette to `@theme`: the 18 button colors
   (above), white `#fff` page, ROUNDED radius `4px`, base/sm/lg button
   sizes, 2px border treatment; Roboto Google Fonts `<link>` in
   `index.html`.
3. **Components** (per block, TDD — tests first):
   - `ShowcaseBlock` — shared block wrapper: centered `<small>` grey label
     - children (matches the reference's label-above-buttons pattern).
   - `SizeRow` — three primary "Button" buttons (large/base/small) with
     their labels. Reuse `packages/ui` Button/ButtonLink + `cn` everywhere
     (knip gate). Labels are plain text nodes (no inner span — unlike
     Bevel).
   - `ColorGrid` — the 18 solid buttons with per-color token classes and
     exact order.
   - `BlockButton` — the full-width primary "Button" (`display:block;
width:100%`).
   - `InvertHover` (or inline utilities) — the fill→outline hover
     inversion (bg → white, text → black, border stays; Primary gains its
     border on hover) — CSS-only; NO sweep/darken/lift/shadow.
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: "#09 — Bootstrap 4 Buttons" title
   → Sizes → Button Colors → Full width button → footer.
5. **Verify** — `scripts/verify-app.sh fillet` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Bootstrap Buttons 09" row (line 670,
   Bootstrap Buttons) `[~]`→`[x]` + surge URL + `npm run readme:status`;
   PR description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bb/bootstrap-buttons-09/` — note the `/bb/`
   subpath + default-URL 404 gotcha), the design tokens, the 18-color
   palette, the rounded-4px-vs-Bevel-square difference, the title-case-vs-
   Bevel-uppercase difference, the fill→outline inversion hover (no sweep/
   darken/lift/shadow), the `#212529`/`#000` dark text on Warning/Light,
   the transparent-primary-border-then-appears-on-hover detail, the
   no-navbar/no-hero/no-footer static structure, the vestigial-JS note (no
   interactive components to port), and the Component Dock footer addition.
