# Spectrum (ColorLib Bootstrap Buttons 07) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Spectrum** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 07"). Implementation
> ships on `feat/template-spectrum` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 07" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-07/). TEMPLATES.md
  row: line 668 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-07`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-07/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-07/` (HTTP 200,
  18.2KB HTML, `<title>Button #7</title>`, heading
  `#07 &mdash; Bootstrap 4 Buttons`; same nested `/bb/` subpath as
  "Bootstrap Buttons 01"–06). Stylesheets: `css/bootstrap.min.css` (160KB —
  Bootstrap 4 base, semantic colors), `css/style.css` (5.7KB — the custom
  button theme + 11 extended colors; the token source),
  `fonts/icomoon/style.css` (loaded but UNUSED). JS is vestigial (jQuery +
  Bootstrap bundle; nothing on the page is interactive). Screenshot
  (`bootstrap-buttons-07.jpg`, 1200×972) browser-verified 2026-08-14:
  white page, "#07 – Bootstrap 4 Buttons" heading top-left, three blue
  size buttons with small grey labels, a 3-row grid of 18 colored buttons
  (8 + 8 + 2), one full-width blue button at the bottom. No navbar, no
  footer, no images.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-07/`. Mention this in the PR
  description.
- **⚠ Not a classic page template:** NO navbar, NO hero, NO imagery, NO
  forms, NO dropdowns/checkboxes/radios, NO footer in the original — the
  entire page is a static centered button showcase. Fidelity = the heading
  copy, the three block order, the exact size/color variants, and the
  token values. The only added element is the mandatory Component Dock
  attribution footer.
- **Structure observed (1:1):** `body` (white) → `div.container.content`
  (padding `7rem 0`) → `div.row.align-items-center.justify-content-center`
  → `div.col-md-10.text-left` → `h2.mb-5` ("#07 — Bootstrap 4 Buttons",
  20px) → Sizes block (`div.d-block.mb-5.d-flex`: 3 × `div.mb-3.mr-3`,
  each `div.text-center > small` label + one `btn btn-primary` at
  `btn-lg` / base / `btn-sm`, all labelled "Button") → Button Colors block
  (`div.mb-3` label row `Button Colors`, then `div.mb-5` with 18 buttons
  `btn mb-3 mr-3 btn-<color>`) → Full width button block (`div.mb-3.mr-3`:
  label `Full width button` + `btn btn-primary btn-block` "Button"). NO
  footer — add Component Dock.
- **Design tokens (from `bootstrap.min.css` + `style.css`):** page `#fff`;
  heading black 20px; labels grey 16px; font **Roboto** (body + headings);
  `.btn` custom: radius **30px** (overrides Bootstrap's 4px), 13px text,
  padding `8px 25px`, borderless, `letter-spacing .02rem`, `top 0`,
  transition `.3s all ease`, `overflow hidden`; `.btn-sm` 12px / `5px
15px`; `.btn-lg` 16px / `15px 30px`; `.btn-block` `display:block;
width:100%`. Hover: `top: -1px` lift + hard shadow `0 2px 0 0 <dark
shade>` + white sheen `rgba(255,255,255,.15)` sweeping to 50% height +
  hover bg color. 18 colors (bootstrap defaults unless overridden in
  style.css): primary/blue `#007bff` (hover `#0f83ff`, shadow `#0062cc`),
  secondary `#6c757d` (hover `#737d85`, `#545b62`), success `#28a745`
  (`#2bb34a`, `#1e7e34`), info `#17a2b8` (`#19aec6`, `#117a8b`), warning
  `#ffc107` (`#ffc516`, `#d39e00`, white text), danger `#dc3545`
  (`#de4251`, `#bd2130`, white text), light `#f8f9fa` (text `#000`, shadow
  `#dae0e5`), orange `#fd7e14` (`#fd8623`, `#dc6502`), indigo `#6610f2`
  (`#6f1ff3`, `#510bc4`), pink `#e83e8c` (`#ea4c94`, `#d91a72`), deep
  orange `#ffac8e` (`#ffb79d`, `#ff875b`), aqua `#3fc5f0` (`#4dc9f1`,
  `#12b5ea`), dark `#393e46` (`#40454e`, `#22252a`), black `#000`
  (`#080808`, black), purple `#6f42c1` (`#784ec5`, `#59339d`), brown
  `#a0855b` (`#a78c64`, `#7f6a49`), blue gray `#3f4d71` (`#44547b`,
  `#2d3750`). All solid text white except Light (`#000`).
- **Design approach:** flat white kit page — pure typography + button
  variants. Each block is a label + button row(s); spacing rhythm from the
  reference's `mb-3`/`mr-3`/`mb-5` gaps and `7rem 0` content padding
  (scale down on mobile). The brand identity is the 18-color palette —
  put the colors + hover dark shades in `@theme` and drive everything with
  Tailwind classes.
- **Hover implementation note:** the reference sheen is a `:before`
  pseudo-element (white overlay, `height 0 → 50%` on hover). In React +
  Tailwind, either use a `before:` variant with `group-hover`/`hover:`
  utilities or a small overlay span — keep it CSS-only (no JS), and pair
  with `hover:-translate-y-px` (the `top: -1px` lift) + the hard shadow.
- **Copy:** keep the exact reference labels — "#07 — Bootstrap 4 Buttons"
  (em-dash as rendered), "Large / Medium / Small", "Button Colors", the
  18 color names (`Primary`, `Secondary`, `Success`, `Info`, `Warning`,
  `Danger`, `Light`, `Orange`, `Indigo`, `Pink`, `Deep Orange`, `Aqua`,
  `Dark`, `Black`, `Purple`, `Blue`, `Brown`, `Blue Gray`), "Full width
  button", and the button label "Button".

## Implementation tasks

1. **Scaffold** — `apps/spectrum` from the simplest existing app; rename
   package to `@free-react-templates/spectrum`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `spectrum.free.componentdock.com`,
   `"homepage"` = `https://spectrum.free.componentdock.com`.
2. **Theme tokens** — add the palette to `@theme`: the 18 button colors
   (above) + their hover shades + dark shadow shades, white `#fff` page,
   pill radius `30px`, base/sm/lg button sizes; Roboto Google Fonts
   `<link>` in `index.html`.
3. **Components** (per block, TDD — tests first):
   - `ShowcaseBlock` — shared block wrapper: centered `<small>` grey label
     - children (matches the reference's label-above-buttons pattern).
   - `SizeRow` — three primary "Button" buttons (large/base/small) with
     their labels. Reuse `packages/ui` Button/ButtonLink + `cn` everywhere
     (knip gate).
   - `ColorGrid` — the 18 `Button`-labeled solid buttons with per-color
     token classes and exact order.
   - `BlockButton` — the full-width primary "Button" (`display:block;
width:100%`).
   - `ButtonHover` (or inline utilities) — hover lift (`-translate-y-px`),
     hard dark-shade shadow, white sheen overlay (CSS-only).
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: "#07 — Bootstrap 4 Buttons" title
   → Sizes → Button Colors → Full width button → footer.
5. **Verify** — `scripts/verify-app.sh spectrum` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Bootstrap Buttons 07" row (line 668,
   Bootstrap Buttons) `[~]`→`[x]` + surge URL + `npm run readme:status`;
   PR description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bb/bootstrap-buttons-07/` — note the `/bb/`
   subpath + default-URL 404 gotcha), the design tokens, the 18-color
   palette, the no-navbar/no-hero/no-footer static structure, the
   vestigial-JS note (no interactive components to port), and the Component
   Dock footer addition.
