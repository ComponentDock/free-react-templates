# Bevel (ColorLib Bootstrap Buttons 08) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Bevel** (NEW name —
> the ColorLib source keeps its name "Bootstrap Buttons 08"). Implementation
> ships on `feat/template-bevel` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Bootstrap Buttons 08" — free UI-kit button
  component template (source:
  https://colorlib.com/wp/template/bootstrap-buttons-08/). TEMPLATES.md
  row: line 669 (**Bootstrap Buttons (20)**). The `bootstrap-buttons-08`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):** the
  default `https://preview.colorlib.com/theme/bootstrap-buttons-08/`
  returns **404** — the REAL preview is
  `https://preview.colorlib.com/theme/bb/bootstrap-buttons-08/` (HTTP 200,
  18.5KB HTML, `<title>Button #8</title>`, heading
  `#08 &mdash; Bootstrap 4 Buttons`; same nested `/bb/` subpath as
  "Bootstrap Buttons 01"–07). Stylesheets: `css/bootstrap.min.css` (160KB —
  Bootstrap 4 base, semantic colors + 1px border), `css/style.css` (4.2KB —
  the custom square-button theme + 11 extended colors + hover sweep; the
  token source), `fonts/icomoon/style.css` (loaded but UNUSED). JS is
  vestigial (jQuery + Bootstrap bundle; nothing on the page is interactive).
  Live computed styles verified in-browser: `border-radius: 0px`,
  `text-transform: uppercase`, `font-weight: 700`, label `<span>` white.
  Screenshot (`bootstrap-buttons-08.jpg`, 1200×972) browser-verified
  2026-08-14: white page, "#08 – Bootstrap 4 Buttons" heading top-left,
  three blue size buttons with small labels, an 18-button color grid
  wrapping 7 + 8 + 3 at 1200px, one full-width blue button at the bottom.
  No navbar, no footer, no images. ⚠ The vision model called the corners
  "rounded" but the LIVE computed style is `border-radius: 0px` — the
  buttons are SQUARE. Trust the computed style, not the vision guess.
- **⚠ Preview URL quirk:** the default preview URL 404s; the REAL one lives
  under `/theme/bb/bootstrap-buttons-08/`. Mention this in the PR
  description.
- **⚠ Not a classic page template:** NO navbar, NO hero, NO imagery, NO
  forms, NO footer in the original — the entire page is a static centered
  button showcase. Fidelity = the heading copy, the three block order, the
  exact size/color variants, the square + uppercase styling, and the token
  values. The only added element is the mandatory Component Dock
  attribution footer.
- **⚠ DIFFERENT from BB 07 (Spectrum) — do not copy Spectrum's tokens:**
  BB 08 buttons are SQUARE (`border-radius: 0`, NOT Spectrum's 30px pill),
  base font 12px bold (NOT 13px), labels UPPERCASE with `letter-spacing:
.05rem` (NOT `.02rem`), `btn-sm` 10px (NOT 12px), and the hover is a
  white overlay sweeping left→right (`.btn:before`, inset 1px, `width 0 →
calc(100% - 2px)`) with the label flipping to black
  (`.btn:hover span { color: #000 !important }`) plus a darkened background
  — there is NO `top: -1px` lift and NO hard `0 2px 0 0` shadow. Hover
  shades also differ (e.g. Primary hover `#006adb` here vs `#0f83ff` in
  BB 07). Warning/Light use dark text `#212529` (not white).
- **Structure observed (1:1):** `body` (white, Roboto) →
  `div.container.content` (padding `7rem 0` = 112px) →
  `div.row.align-items-center.justify-content-center` →
  `div.col-md-10.text-left` → `h2.mb-5` ("#08 — Bootstrap 4 Buttons",
  20px, `#212529`, mb 3rem) → Sizes block (`div.d-block.mb-5.d-flex`: 3 ×
  `div.mb-3.mr-3`, each `div.text-center > small` label + one
  `btn btn-primary` at `btn-lg` / base / `btn-sm`, all `<span>Button</span>`)
  → Button Colors block (`div.mb-3` label row `Button Colors`, then
  `div.mb-5` with 18 buttons `btn mb-3 mr-3 btn-<color>`, each
  `<span><ColorName></span>`) → Full width button block (`div.mb-3.mr-3`:
  label `Full width button` + `btn btn-primary btn-block`
  `<span>Button</span>`). NO footer — add Component Dock.
- **Design tokens (from `bootstrap.min.css` + `style.css` + live computed
  styles):** page `#fff`; heading 20px `#212529`; `<small>` labels 12.8px
  (80%) `#212529` weight 400; font **Roboto** (body + headings); `.btn`
  custom: radius **0** (square, overrides Bootstrap 4px), 12px bold,
  padding `8px 25px`, `text-transform: uppercase`, `letter-spacing: .05rem`,
  `border: 1px solid <bg color>`, transition `.3s all ease`,
  `position: relative`; label wrapped in `<span>` (`position: relative;
z-index: 5`); `.btn-sm` 10px / `5px 15px`; `.btn-lg` 16px / `15px 30px`;
  `.btn-block` `display:block; width:100%`. Hover: `.btn:before` white
  overlay (absolute, inset 1px, `background: #fff`, `width: 0` →
  `calc(100% - 2px)` left→right) + `.btn:hover span { color: #000
!important }` + per-color darker bg; `.btn:hover/:active/:focus` gets
  `box-shadow: none`. 18 colors (bootstrap defaults unless overridden in
  style.css): primary/blue `#007bff` (hover `#006adb`), secondary `#6c757d`
  (`#5b636a`), success `#28a745` (`#218a39`), info `#17a2b8` (`#138698`),
  warning `#ffc107` (`#e2aa00`, text `#212529`), danger `#dc3545`
  (`#ca2333`), light `#f8f9fa` (text `#212529`, no hover override), orange
  `#fd7e14` (`#eb6c02`), indigo `#6610f2` (`#570bd3`), pink `#e83e8c`
  (`#e41e79`), deep orange `#ffac8e` (`#ff926a`), aqua `#3fc5f0`
  (`#1ebbed`), dark `#393e46` (`#292d32`), black `#000` (hover stays black),
  purple `#6f42c1` (`#5f37a8`), brown `#a0855b` (`#89724e`), blue gray
  `#3f4d71` (`#323d5a`). All solid text white except Warning + Light
  (`#212529`).
- **Design approach:** flat white kit page — pure typography + button
  variants. Each block is a label + button row(s); spacing rhythm from the
  reference's `mb-3`/`mr-3`/`mb-5` gaps and `7rem 0` content padding
  (scale down on mobile). The brand identity is the 18-color palette —
  put the colors + hover shades in `@theme` and drive everything with
  Tailwind classes.
- **Hover implementation note:** the reference sweep is a `:before`
  pseudo-element (white overlay, `width: 0 → calc(100% - 2px)` on hover,
  inset 1px) with the label `<span>` above it (z-index 5) flipping to
  black. In React + Tailwind, use `before:` utilities with
  `group-hover:`/`hover:` (or a small overlay span) — keep it CSS-only (no
  JS), and pair with `hover:bg-<color>` for the darkened background. Do
  NOT add a lift/shadow (that was BB 07's behavior).
- **Copy:** keep the exact reference labels — "#08 — Bootstrap 4 Buttons"
  (em-dash as rendered), "Large / Medium / Small", "Button Colors", the
  18 color names (`Primary`, `Secondary`, `Success`, `Info`, `Warning`,
  `Danger`, `Light`, `Orange`, `Indigo`, `Pink`, `Deep Orange`, `Aqua`,
  `Dark`, `Black`, `Purple`, `Blue`, `Brown`, `Blue Gray`), "Full width
  button", and the button label "Button" (rendered UPPERCASE by CSS).

## Implementation tasks

1. **Scaffold** — `apps/bevel` from the simplest existing app; rename
   package to `@free-react-templates/bevel`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it). `public/CNAME` = `bevel.free.componentdock.com`,
   `"homepage"` = `https://bevel.free.componentdock.com`.
2. **Theme tokens** — add the palette to `@theme`: the 18 button colors
   (above) + their hover shades, white `#fff` page, SQUARE radius (no
   rounding — `border-radius: 0`), base/sm/lg button sizes, uppercase
   label treatment; Roboto Google Fonts `<link>` in `index.html`.
3. **Components** (per block, TDD — tests first):
   - `ShowcaseBlock` — shared block wrapper: centered `<small>` grey label
     - children (matches the reference's label-above-buttons pattern).
   - `SizeRow` — three primary "Button" buttons (large/base/small) with
     their labels. Reuse `packages/ui` Button/ButtonLink + `cn` everywhere
     (knip gate). Each label inside a `<span>` for the sweep-overlay
     z-ordering.
   - `ColorGrid` — the 18 `Button`-labeled solid buttons with per-color
     token classes and exact order.
   - `BlockButton` — the full-width primary "Button" (`display:block;
width:100%`).
   - `SweepHover` (or inline utilities) — the white left→right sweep
     overlay + black label flip + darkened bg on hover (CSS-only; NO
     lift/shadow — that was BB 07).
   - `Footer` — minimal muted attribution linking
     `https://www.componentdock.com/` (repo mandate; not in the original).
4. **Compose** `App` in reference order: "#08 — Bootstrap 4 Buttons" title
   → Sizes → Button Colors → Full width button → footer.
5. **Verify** — `scripts/verify-app.sh bevel` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark the "Bootstrap Buttons 08" row (line 669,
   Bootstrap Buttons) `[~]`→`[x]` + surge URL + `npm run readme:status`;
   PR description must list source template, the REAL preview URL
   (`preview.colorlib.com/theme/bb/bootstrap-buttons-08/` — note the `/bb/`
   subpath + default-URL 404 gotcha), the design tokens, the 18-color
   palette, the square-vs-Spectrum-pill difference, the sweep hover (no
   lift/shadow), the `#212529` text on Warning/Light, the
   no-navbar/no-hero/no-footer static structure, the vestigial-JS note (no
   interactive components to port), and the Component Dock footer addition.
